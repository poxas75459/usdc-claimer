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
    "2KbYuCxNQkcH8F35D8khfbn4zLACNZ6qzsPgCzRex1r8WKtyXUQAMeRLthGF574MoVRiSaCaiHQ3MCuRTGdxh1Z5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59JHUgHiPVUnz76wvbF15fKCbPCauMxaAV8NdhhyutESW9W9J2pJEVKvtpB8DXyQ7U3UkMmeeurYvfsqhua1yEwa",
  "key1": "5f6D1AD5haED91KYZfZK7NBj5z3kTtfQcYiJ1E9Me4LdnG699vieLxXr4HPjURatvR3vD8U4yTQyJcwHx1XnF6Sc",
  "key2": "4AFG7dFnr9WQNi831whVHzkXXjW2MtLaTmmn7FFLBpsufDk5BoYFQuiaRfsGizbRm2oqeCqFskWJ9xBDQzU8h5MN",
  "key3": "61jGLNJ9uCFDoyj1HeuJYaFHTuKQ69jYJMci8dxbKLSiusU9EUMRDGzAKNnuSQFEydPchboeSc85bwUUeZiUwJmr",
  "key4": "5DtLHCQksVC5DYff8YxCdQC2x6b992CcT9NRnCjj681mCE6LzzrVj6MjwNxLcQ2qyD41xjJ8qKSvu1ugrSKi1GoH",
  "key5": "4WjGg2Too99ZsAe13kRJb7qyBPB2eKZexjBmx4i7jkRbu9hNR4WavuJXTidNNByYSFssvAQ1xci2trkesjsPjbd5",
  "key6": "2HJatiBA2T7BeTcPHarYt6GLYr9KhoSBGL8ReE4tpUTJ9tBp6mJvpP9nTFWgwUXaU6qzcUpyzz3zzrTJRKdy25Xz",
  "key7": "5LzBePi6b8yBG53R1FVTX8U51Dx5PAKnTBdQ7ys2jZ3ECSv9FfWHTG1rMbo1CjaSCsBwqUFeKXvh5dgu21mYNri3",
  "key8": "3CeMaiWj8Mks59XdY1Za8sFmRNttFzy9SQ65NEn2hMz7xdQoif3p2K6sdR2rF9bQLVo24hiPWC1jkZvVLpkLt1rC",
  "key9": "q8vNXGqSgdzFfD6HzuDYskrMYU4Y1i9fj9W5JLkgTs34v3Ha7bx5nR7q2t1jKuykjgQJUZ8MqHboRinbukWdfsM",
  "key10": "ndEXMraiBrQYpYkKY5ey4LH8BSny1pLsHUf1Po6ytzjxR89hx88MmKWWos8iNWGxXdeQ8Jee6szceKHePxcTf9A",
  "key11": "2AihiKkcy9TuUv2jESRXvTYEofvX9ByMLhgiT1xpPHKYPGE8u7DwGiwnyi3PBgMhk5JhyFLAXkYKrybpmxGpEk9P",
  "key12": "5eNbWkyt3FkUVnsaesVjZnpwZaEsgNPUDw7xbxXSvVoSS51MSSFyJhH8Aka4i2wiyybRMkMKHwabyLsQn9PdaZXw",
  "key13": "58fPmxzys7hXF7pacqq6MvGqtfVzKZ2AZryxtF2wB84U4UDqQrrc1hccV5aM8kxQkfTHLVsEiqHc2dSKsGfV86Ek",
  "key14": "d8k5k4dwHDtbE8sgtPt4LBiTDqGe67kexd4TzrKkTjYcjjnCGcxQWxJrDt5EiAsHBdBfSLEHTgp9jp5nRZPUzWg",
  "key15": "2w9jD6ytd5pB8PzXmogfrM5vskF7aLxDSUCr6TVGDcpaHtk3K6LUSY4CFNChmKtffyiyETfBn9rbZvAWAHpkTgUm",
  "key16": "KAeiEyGYrDA3vFTBRaPTZ5nEwW9tWMptCFzej7ovNr6axmPHdK6rxHof67yGvVfTe4otK1sfmZWAzBhA3ezoAgx",
  "key17": "5eeuBHZWM1V1u5hMzYmeFdtJZR7GJLhFzBjwetizTnt1BooQ2Sz7eBawnbAR8qfSEGSSu8dBikjeoMMY4kY3JcxJ",
  "key18": "4CbfSwzTNQxdV6o8kwsLQm6FfHDNkLJwGY7zuYgQ4pV7oN6EQxwwo5BfD7RzZ2L4VkPr7Toe87oNjZnELhCtd6Hm",
  "key19": "2Vkoj7w7Z6FxC7LsFo23npBU2zA69E2bBaAZyckymRuubtQUVucbd1ki6qWvLL8m5wpM3YXZzTXWc7CVWLExSSon",
  "key20": "KVmxMQKwuSPCdtwNPhrgihVc8VmfnsHjec6WSgMhFdQAcdLRCygTCQ1HAuoKLH7okGtY2mMNKHSqFtszBEXZuva",
  "key21": "3nnmnKr5jz1ayMqSWhMg8Mu6VuGdx23n8tRLoJUu1UeQMycWHyDYKKevWuJxXJ5DmjbfRCTqaofNG45LBxfeocPC",
  "key22": "N2uao7CNr1RgTbcpiiK9DbHdrvRy1ee9Lf4Dc5apsCr8Qofrim6KNstgTHYFxrP19cAejkYNpJ5aCUd5zQ6wjcP",
  "key23": "3SzgmFWYvTWafc2pm15m7kFLggRJKKFEp4WWv6rMiCFs9zNNCA2gKAR1nFc2bfj7eCrbYX4vPorRJaNQaKWygWHM",
  "key24": "35F1sEtKKAvwZdzzNQnEg9CYiHHz3xo1SCaMWbcK7dJ6prpEE4covy7rNBKDqzLxgNsRwEPk3rkV4gy7b4eQC3Nv",
  "key25": "5ajzpJ9d1n6dSpRLocekfsm9BaMeYvaUvcNdo71Ja9mwb23T4afEBY1b4J5LvUTzwYjqGoQdzB6brsYaBQgHiVyA",
  "key26": "4PpciGtWHsy43Yd81vXi4FyBLYjXwTbVJZKqSEjtiTdZgQ8mBE3iME89JZaN5xb9FFTYA9CVUvhCXb5mFszdhCdL",
  "key27": "GGqZ7ny1mV31GEWWzRPVw24LDoU9Yrd29GqZMMV4oC6kiyQae6q3EaWmWZXm6uihCnZGDge5UCMKW3b12gRxZP2",
  "key28": "5i8mELcT838hYnKTpdhjtt7VEY7bF2pvjb9eLi5Xvj1RyAcdHsGBn8h34Yko5J7VEMywMzH4aYPiR9PK5WaMVZud",
  "key29": "5TDq4vkQ2z3HX5VUTMhyGKEqk2Jmp8aNp4LtLjMnx3YLbBAKX8rZxQcEe1Y999fJKxnYXT1zqXMN73bRU2t8xJiJ",
  "key30": "5GonR77gMEZby7uxug7rPDe1cf4LCM7opd6ijah36AYtkSWmjtFNbCZ4aPqsDNEy6H4ZSEqYCuVSTrBJsxGgGFpM",
  "key31": "4Yow2GreMLGdtSqGdbu5NBnEWT9EGrZ82wJRmUHtJ3ZfSXHcqJsYPK9nZrmvHSVCk6MB9YRM4iAoFV2oUKQVxG5P",
  "key32": "52qjAG1nMHfT9HQsBitXUniEcuGC9MdU2hX7bCcb83bUWwBv5UxWYZx1qZq9MprYgMzxX572Qk97LY8GVzKnWFZG",
  "key33": "2CiwWzrMAeJuPwdGfoXu6LvSX3DYDD846pSFEnTmkCeBbwgPdkHNfefT1DesNFJfQhxoi1MHhS3qpq7zYaPE2T5g",
  "key34": "3g9JEDScgMYLvT34hzeUgjxdfnads3kwx7RGfW53dg8MRuvFbuud1PBofQ8TQ4JPTAgwGCNDMvFg1YzooB1zsX29",
  "key35": "65gZPZYL6REx1VcWhTc8uChokphpgTaGMhP1J4LdbDb4C14gpF1ncXCKMJsHnX2JxYMaEMX8idYgodLPTQfaRVo9"
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
