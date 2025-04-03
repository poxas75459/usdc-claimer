/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5qh8aonqzdwFYVPago635jpxs8FGkGKMdUa9fSAUa6J85jdmsawNitja7wDcxf1imHFsEkWxFkTkD1DgJE427L5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QFQKuRzdeu8cYUVb3t32xvS45mpXgNA2Hde966R1ttyXtMipFZaAAwHXps8e3uRrrMKNFNrrqYoDAxLD1a81UNt",
  "key1": "M8UoQd1HR2RAFtLD4TA63AN6Z9t8gDRbzy3qrjR1dWMktSDivbHf1aewpuQmM9vf5bQRSXDEKXtZRarXJBWC9NJ",
  "key2": "dPJgspcF8VQ5QcT8NjzPHm5A6hEsSFpRLZgXVkzoVfSdCmCZ259Q6gtCSLS4ZAgtbmBgJSGhYVNzuLS4LwDwvn9",
  "key3": "4EPFN4hHgQuHjPF5zofAwvRAKne4m3zerqJzkDozXtBJyLsJ1r5PgiUCJUMMP7xEYiXswgNPedzGkj3q1zXm45NL",
  "key4": "5bwhNLurBpZLFQ7dksHgGvVgrCZGCXg7RPK8BkxAVCj4iV4wcrEnDF2kyd9f1pTJUTgjVFF3Vzh8Ga1b8bV2atgV",
  "key5": "UvJUuqGrBBjGTDHuFp4Xnc3Es6Q95hDzBHNTcpf4gWQGkTvDZYjXTbPq5Q537hrGe5JQpmrDquWkuq7k9MeV4ss",
  "key6": "5dkteYMhwu7p4wAehkMT943Mki3MyLRXZCmnnfj6rM9T2Xz8LZ6F8npfiHc9o1HaeD79A3K8zaebVgcnJy8FBFjc",
  "key7": "uLiPme3Si1uKajF6t2DxH4VWxn74VahtKrwiakNoj3xyBGrqdijSTxwBBLct5AyAG2KzQQsJEwLQF6dvpWtdjmw",
  "key8": "3NTj5v5GhMcCvFk2fF2iVbRJS3xMMiny2YHQRRc7JarDXUVgcxrjmPwZvZrWnhbPfm4Z1qLGJmeFtvAHLPtwwZWM",
  "key9": "2p2uJDXF2VEpfG5KrrootnRgHm2vEu4YQiB8U85kBw7n5jR86f4bXbjcobXZRSer1eUTYdZyUWz77Vgxx5u7rYYC",
  "key10": "26XGLFhzbavxBu7cFeQWQYkXRCAcFDAJygKJzSDbBDS1qJx7emjGWJiT1LvTauFbwPfJCnMZzP44MXcV1iK1RQVP",
  "key11": "23we4mD1xf4RCxyLAUHSzwHrLhFz15W16aVTvYEyMYWdaY3xGub5CyWpKcZiEw56qowbFQpAQELxxQiSvydWRYJQ",
  "key12": "64m3b9siTotdqNfpYLuugdwGCKXMpwv1gJf1kp7rHAHVwdCE8fjx8w2NNCEPrVTSBH36qAYoGiY1ZoaM6KJ3zmDm",
  "key13": "3evMU1auU1ZuacYPEGSYbXLHvaLTYR2bpWkxsyhrsmpCXvUP5rAdQd9bybcDpmRGwpaaY9YgrKTfpiFFAqrmjubb",
  "key14": "3bHCXEd2yfgioJGLtNzivqfcuYJP8BvK2Z71XrggnM2eVLNENYFy59MQWZwC7sZwZ4nMxV4dLFgxJsKa6paMtysK",
  "key15": "2HkgqLKMs3hM8QWQZpVZV7WHVdWszHTgDLbRbYvRSvC2PiFgapabyZi1mG77Etr5NNfhQ16VrSVt67aAdTtp784x",
  "key16": "2ecj71ATHoFoWywMrFYmXxv2YLjsSAFm4myFhPsSFaf2H1mcYziFWQL5aLBMAPkMd8x87CYtgncCMYWwa8TmRb9R",
  "key17": "47ZQfNYhZ2weBph59u3W9ohgKUoUgDR69eaQxvTrZAQMQ2DWeYTEbW52ZM2Evsk1int7b3v2MTSQfkk1bAkkepxX",
  "key18": "Ddjwg32c2A9JStXwxiY8qrjpC2BvsfRSbkgKSpjLs6uwQk7kzD9jA7Rf78d5JwzcmFzDrQzmfZ6CcQPhXgwrgkj",
  "key19": "5sZ4uGpnqBrstbUZzakwMKDCs6mQ5XJRf3hG93HpbcfJwRLBnvjhPgBZTeCbsS1dp9LtY9tZkipLiU54e9QLmJJe",
  "key20": "6u7rA6itxudsL6rbYJcpmF3crRqscipUVoG4k31ShunKDx5tA4i2FPmtzp2Cb8AUc3ZJizwTWBoHyQhTzVtc6V6",
  "key21": "29WXkfqgHPccRmRcVKoaUisB6ooMogiPxWeRh38akFtMvmF3ELdCdc7bFMHXp9acoA2fnVkTKYzm2kVjdACcAumz",
  "key22": "3q2wjfmSjzFbEUQxkmPdchiD13jmNcYRvcyM2iUkAk5p21KFJE2k8vAP68HEB4wm8mZgFDTz7cJxFfCBhC2Wk8sG",
  "key23": "2h7gTCazz7zoJC8W8eHT1W1cidfBXsnVyZ1QCRjpuNCc8PLLVMqfWXZeHQFz73hSGLCVpcy1UHX4kEVJmY1RqYfF",
  "key24": "2gKAR4mpN64pZzaGQ9tQ2nYK618r8SNgsR8gEEVTUtyoFZMYWGnDscnxVYbcSbBurczKo2Joy24LFMuQsS9vGGwK",
  "key25": "4U8WZN9MNLu376mD5XGtSqTUXUnuEznMr8GPNyjaaDQ4UMwmRavnnskEQJhsTCLUrDa3Dna3CbSuk8FYx16jkPpD",
  "key26": "F7VxRHHrtVRFCvL286tRNe9AhdJhsVhHTQvjfJHHqqE89JwdwL6BLKnpTyzqM96cQhzMSFWipTP916JyeyGBU7u",
  "key27": "4cbXioPUE3Kz39hEC5KQExDEcBQdEWsMo91FGLA4iZv1oMHjmCd4EWQ3QPWAdbiJCdHLAMo8xYumKigyhMXVXNfg",
  "key28": "3hJC7KwA9ELn3eaqK4Q5bFH76NEgFjVbLB2k3ZChf9viGG9fPPBhgmBXfijWp7aCMiDaxbqnu7hyaADEUq9iycLm",
  "key29": "2dCFq6B1tVWHPHRg3AWAkebwXMCCHMDfiPQNYPRqf4gXB8vBU81Jg1HQdQRYx2KiTsxRhnZs1D3HREUMSHBpPP1",
  "key30": "43bx61rmwv4r2JGq36skP88F7CbfVY11aYQEisNNRYRii3HTG8PfuQXAvc9YhmKx25sTKz1Q6ZZNm1E95kPkN6wR",
  "key31": "4cPfkdayH3T7pfBUiBm8wgFjbAvfGtfy3CPqL7c5Az1D2HVCwA2oZb8WaotnBe4aZo4zPuU8aQMCaVwdaXgu7sR4",
  "key32": "2fLiyM95tdyF7DosEAUYAsEcDoKrsdShBYcXJJJG2cFCwjr9FcBgoMjnxZDrQQh33krU1RYEAqDt4gCbgqKg9x56",
  "key33": "YhUKneC5yARnWu2WS38VcXLFcZbVYsdpgiRHaUm64gWAsqCa2f9focGGgYEPjgC9ob8dMxMU8de2iVPnEpsPvuh",
  "key34": "5MPamGRvCCcEEWTjFKzei6WFyCUrqXcshLjPpPuMiDfLt6WGBXLwtTa7aoj8P59jZWa5fwECwTirS6zZNc9Ju7uH"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
