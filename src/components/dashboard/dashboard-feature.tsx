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
    "3SJdpLK1ibpWNBo6tPaHx5nRnUwrK4gF4Rc3aKdwCXcTFPNxHFTs6XpdQ7sdfMfSjYeBKWc2Lq8ySzD5PmMabEQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SJCGd5aqFdcJ3vAkbvH893E4SP93n2NVexShLuShtCjRWRMEXXcNHVPR7Zp6kshpRzRFBhPVyUK3uXU6CV6iJ7b",
  "key1": "mqtJd8PHTLoPLZVqm1HbwwvtASULsVmYbAuBo8w7GZY3FXSP1ZDGXY8fXiAp2yfTqNLsRqCunQm1EgKHE54TUVv",
  "key2": "3sJZi2BGKSKU9DZwauibpBJ5R6cSDvFkidRupByHSmtvFZU7KAAg9NTKMgRjjZyR5rHabDXf8s7WC4yejcdtMrTP",
  "key3": "3dWeQc8ZXmzRESGSGa37UJjXpka3xoBEqxiqQxM6XSaAFKQXhMd2mLc62YyQ2CcVYCujteYW7wFDDQCEaxM5gzdQ",
  "key4": "58ixNZeEKYXTfJ8gA2UnvHAZJKujj1eq2tGE6vX5rgK2DBQdf4MBSCKDasDdiovdR2Vdpj3E94gt8Hg7jejT1FQ6",
  "key5": "4u1UcJDYxdFNM1vrtoRHDDPVyYp65o2BpWujT5DVjtmdG1QiXAnUwnxnYZtRpc9xdrQAHAXHeYLvNphtJEGhs7jh",
  "key6": "512EcaCATm6yQGhoMZxs6r32BuzScJrDuh1NuQhoDriKsausCe6qtvd5CAfzTYj2YnrgpfrzFwP67qBs3HyoVj31",
  "key7": "41MM6hff4uo8MyKzYvFc15su92Ye9XkkpFGxpANovhwsvUspja9PsaeakGuBqGt2itZ8V3vgCLuMtGyPSm9KLe41",
  "key8": "4UonJWU2LqMDg1hub8xbT1KoFXNohkMDcTW7HGsEg64mXKkF321kSbM5EV7kK7bKWEngEtjPgRzVTJt8yr6zzcj2",
  "key9": "rjVUHnLww5Fd2niEgHMKM4suEV8Mf79npZk4mVu1Egh4g35NyTdwLQoxfGt7Hk9bxvZPuDwqtT6dFJ7AV1EmEGb",
  "key10": "GyZMH93ZN1Lwb2bC6y2jve6GL2rRmJgtcvvBcncJat4FN7zstLK9sR8DT7fMocha8sSe49NaxAiJvpRk7JjvAxQ",
  "key11": "31wzic6CXqcMt3p6ewBojk7CbNh2ZTQbx8pyh63t2sJvUR2NUZiNETCee6dtrJ8QeFBYfUtfPeWv6ooJUy2cPqLH",
  "key12": "3X41YP6QGCUj8kXHtMAXbVUPVjv87qtUEBiTjQznVZe4gf5BkzraYPTFpxonZsjMHMWEmdEeWJdLTu7Xg4ZAwWLH",
  "key13": "5j5r9M7LYxupQXmEtsXr6y9MWinMARFNyWxqmLavzxvLoA3APgFWMzHyANHLW7bBCFU8MdzKzWiaMZqMDGvK3nZv",
  "key14": "5X3Srmu51m3WpGzAYpS9pnRtyUsuc2HU22D2LV1XmVZvTUpwkppLsrZvRPuxtNyJiixqYb7Mcuavo8MZT9ur2p3R",
  "key15": "2MTYoVUUFU1dnYamBSeb2gB3DD9xei3Y4jkQs1uY6Au5HnWFQu9KVQPQdpQDuzWfybG5UEpEhYMXMXEyHVg8wzW9",
  "key16": "8pa8ZfedvEjbKAuSLvYShxmSQAZ87aWPMDXytjECwf7Ni7qGqtzWGB97rk4foXbfr9qtHXfmFsfHbW1aW5cEbXm",
  "key17": "4bwkJ9ZKZAcf3nYgpKWueSHb9ZQV468U9XDtTfzYKbQSe8eNbZjbL3uk51PuRrHAghE2fSUVT7V1zP7GxZPqMgwB",
  "key18": "4GGcLUrzQHFJ1a93gUSQzgkfPkcjJUNoF3FN3J66UJAem1UMJHhqSoWyTukckJhTv6ahUUuCuuJm5rmtwEf8AbUM",
  "key19": "31HbHvYXLHMQNge8oEDUrJn1N3kfvE4PpYrYMVy1UkvitMxpkLiQc3PwFrpCEzaAbG2LxLyX6rv2zsiTHMmX62yg",
  "key20": "5AEotE39EwQSorKzhv5DbHx1wd25JiBzYpxBqzQS2wFP651WDCHxCqnFPYhmcVxoAHfLFJ4aPieFTNr4E1YiGskM",
  "key21": "5tEamZWpXTRfXZtFnesbKLN93pBKmPWupxLtionN1bndVGdEwJq8cDC4iKBfbq5KX1R6sZ7nesbsXEZDhNxNFnBs",
  "key22": "5SCfay2KnWiUK3jBLJudAeqQ8oYiHosbC82CaLiz8eYk8wovPUPHxiyc5yeCpgj3Sz5etLHQ2e94tSPNVKMQDfHw",
  "key23": "2vVff8YPtNY1m3FvJHx6rUqBuqHNfT8kL4iNLU1NKzYDZ6km8qj6taPiBzkxQjE7BtagPBBYKuPsE3SbHYBrbvVz",
  "key24": "3kMZuyvXHVkNbkZd2w6RybVfcxB7hvHKbCVm44yNrzHZKSsVR2XQKMrsScanFqxYp8sQNnDmNKYH3X8mk2i97Ejj",
  "key25": "RqK4ugT4NZEsRoAdRgqimUoS3wdG5y1pwe3EFgeGq8y49X8qBETf7TjQMYs7HW4dGyKDBZ8433sJs1HaTodVmGd",
  "key26": "4MWrN6Wqvi1bFBMTPWAJtQbPpoc5hCH2h9zAP3z3moB8qGYAruuJrcfmqkx6YkcbyGocFNCEb6v16v5wyB1vZDXD",
  "key27": "5trtdJqSKkRbDbLKYha7paUgFadyTounRcarpQm5Y45apiNJ7n126snWvjTrjqmW9Lau9gekWAzLPLgZMLjWmMHH",
  "key28": "4w9oJo6myS9kaX8Wahd9VcCLF7wPtWvWi7yPWY8sUKwRrj6QXNeaJ5GJv4p91fD6TYDkV3bzUnRzF3XLnEBEd17W",
  "key29": "4AU8W1XxKMvDp2RiJtwQrQeWy1SUJ7PdXRuHPkWGFnCRoWYBvBi5rQLXTwUBE3d4G3PLPswq77qFhUJhKHbrmFRx",
  "key30": "3k4zs3MzHNWmZfST5JppihfEgxFtv2MyfYvo3poKxYaiCtTgYPtfBEABRparUpB6fS35tQsim8DYydJFCANVAk4Y",
  "key31": "3S25aH8WvmCGxPf38kkszABzh43fcGPjpCyMLsVhyETHxy6bTmG6iaL5wAPxj5uy6CmNXWmCJfC5GrWnyxZokYyR",
  "key32": "4x7D9RTjhSLRXtt2JNbjQ2SUhS8HnA4S7HdCPxnHNbb1ZZBV5LHPi6Ev6fjW7Xdjdk5vMRGjWRQMW4mAhLbbLTuA",
  "key33": "5PsdoCKZTzJQwhanCBxy6hWziHZX1zMZnUwyNvBt6VeFAp6WrXMcj8ZeBLKoyNhpYFmK73VWNE7QgSeGqhLebuxs",
  "key34": "2wd5TxbUbCsJE6AYHFUUqXSRVUx565ePzhvoqGzNi9yhzePEh2RmaRGhu9HUvH2HGL6Cq6dY4Ht33U1BovpyXoYj",
  "key35": "4HQhMfZ5ZGjGYNiHinxMzkFmfxxDhehjWB2wN7i3db21XP3NeLhmBK1Qt7G8RAk89hodcvENQqWBEYfBSduo8Peb",
  "key36": "zDxP3cJw5zpmdhjjmaxwJDS1kpvvSPXE6X627eyMSsPffzDqbp1JJPdpwUJVdiUH5RWcgsyQBAvBopqCqTtVMri",
  "key37": "3wb9X24b7UMPaTWmSpJTtnv6pguoGkN3g77uVXzsCKXtkCD4FhHkbS1WHahJyP4MfxJYMJajwMMHLpp7PfKDJDGd",
  "key38": "wH7sZ1nMeNpqF2QdbPcizSTQUXLLPVbh2me8Aef6wAK5adNweicVLvTQddQpY4dbJjSPEt5yT5pob8DiyfAif6n",
  "key39": "2f6rW2uG28soCpjZyYtpJ5gHZmmSnZTKxegdyy5UPyfQ5x4sALJRXnkndwc8oYBdnunorny8cScJMr4coYqyXiNH",
  "key40": "XgxWVGaDBLzqUEMYda2WBS9bUU5GDEZrHCks8gBbUNLFTQw64tGY3qrQoxxUsnqFHZLtFkLcCUghjvrj1MbxEjn",
  "key41": "5uuFLJrBB1MuEbMGUNYphzftjQQ88YVAGuCYiCfeuEaZAbamomwLoA3jMqpfHciTdwgort5sRf1wf7oCTAxnDtS5",
  "key42": "2Di337fa44yWd9zdfvnY1sCJ4v1hzCrUMZqy4SM2DuhQSrJniNSXDV8MREq5RbYQr8k88aZJtPMRAL9HoNQQm72i",
  "key43": "5QsCjztYh5Mk4So6jjn1cW9W8BDgjBrC7QKNJri2ciL4L514v5Zuq46Au7tkRDoxWyrSGThmDcMhAXTL7fawVtNW",
  "key44": "2vJLE76TqhTegU2bjphqR52RaocxkDMUCF2rJCX5RZnxiQ1xTYYp5qk1ZcTgF7gFGNkPZpAfN3ZWcbRb5wtS27ZU"
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
