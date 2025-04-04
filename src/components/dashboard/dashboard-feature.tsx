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
    "42a2FNoDFa2m4B6yKMcQQSfJcrCHUooH3qfqcPq9KUzadJucEAVQPNo2RgPXN6nArrdnYpkrXVUrsqXw9ce45q7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CubjrQfzLy3piyq7M9uBQYUmvfQMFqF5otMaBv4B6LF5VaaGcD7nmp8gWgmwJRYTGidMyvuNMRhgpfEpgFcEV4L",
  "key1": "29NAU1uHe7VgVzkoENJ4ePU3quru15VYgbaiuLZpbXSQX1Cfz4oW1VeuonDq9m4kJrVAnP6cEAkXj7EdDEf9sBbS",
  "key2": "3VnAxzbJC5Y9md9bytuCBJAhHR3R2k62cdY8pcgMn445V8P4wmuDxMe9S82dNBkfxdTerZpCtCF2jFZntBGBMr3d",
  "key3": "3fLenGTy7WZaiJozpSrG9oJbxZJuzSg5A8v534piXL7J9FfXxhEmPgXo3Qgp32HejM74km6oMCvwJVhLodZAdcGK",
  "key4": "3iptjf4uEqJejVw8qy2iesPPYNAxTTuZ7DLAwgM969nnJyeCnPxPnpJJdUGNgpuwpWtFA3ixBnqwnoZkgjhbGuJD",
  "key5": "WPXv5xdmTonxgiMnrC4srtcn1vXS4feJAoLEfPH51rLt5iLBut4UX8M9coVoQZTRFMzgg8dN5UDejBRXsKJzkjC",
  "key6": "4BA8jPWni7pWUYYRLzByVGr9nC3dPK3JhN5aZuiDge7nFBcaUFE6k6hJUVpSsgjwoX3YybqBAD6xYZ95ZWmpNYym",
  "key7": "2zwvmZZ3BV6ZAdX9AVXu9ihiAY7Ecu8VEGo3qttHi8oLjQpP4eL4GfVj9HyWordkcY3aWuyxi4f1akLvGbVXaQva",
  "key8": "5kVXSk9di381F9okWBJ94vYZYGxF6WYh3eVuUndBT8UsTBN64wZgvA8yLUVhHi5hkH3sFh6mnEjzQq1wSrEC8cyF",
  "key9": "27pztbVxSrcfeG3xqkq13CdedHhwVD5EGAjdyz3pcfUhvhKNDMug3SbYUu7E7WiXgCmV5zwC5PFfyxjzCHJpf2r9",
  "key10": "4nAMTw42YAXa1eUFZCZzkPUF1xx3dZML9jepGMa5weGNb4UkDTpCtgrC7CKTP7DXYhqwKdCDAyDL3WeXuo2GTiAQ",
  "key11": "pRkB7KBgzG3Qs7w53kRnuvypjgugjXHt5ySoej2xWWEpEy2P6K6tvJmCij8ma9BvFymG4DP61SPp3pd2UEbrNNK",
  "key12": "4YBeBd1vSBntNwkrrVxVvruFgt8M4mmFfxhbw3ZhjzHmyuHPMDJA8rqaCUbizoAVxe3Y4UUhij6Uyv2EYRoxLRnp",
  "key13": "3Ge6v1eETAZeLcFK3DQBnYJCuLzdZJXRgXkcWrgHoh7Z3twfgW3a7rE4nhRfu5uqFwsAYv3iJq3ExZwTvP6jdX84",
  "key14": "JmDZLi2wPWXVifg73yePvLC3x2Z34VGyGnBaWHoFTwujdgAKwev8Rpfc7STrkjAfjFmdKvQWEjWFSwUx4Bt5R6W",
  "key15": "5rtZvPoBTeHqw4APfpaPueA4psBss2aHeWcNVVfJJJxuTafTDUgtSu6qQbySHFbHvYqL1mcvWVL8EgCoKN4j8VLS",
  "key16": "3RtqEM71oWq4gsXdzc4NDSF2YnDqY3qegPjzaLK9HQQUYFy6jUMu4ngny6bH754PCAWxzJNqhhmoaCdY5RpMLmx",
  "key17": "7QFGLVdQMurXQGAfXHn8agZ4RJbYqSVX7WzXrsBAuqRXtUpkH3XDctAqu4Vf5PFeMQaaYAVR8UeLvbcF64edXcA",
  "key18": "5qtt531e8GbwTrQ1Z4YbPxf265wdfGQoDten4CWu4LEkDoBivFeiVP1eJmizBdPmppmf3raHU5JBgcPGRwpuZteu",
  "key19": "2E39SYGqgZDadSR6ohLLMvWx9TjoSXuuGQiZeUqcZGtQWD3b6zzhyVJsthZyRSuRdQCC3pD752KgT9f7XSh8rQyX",
  "key20": "23zS4H2GKqf8Dk9HeuMDLKP2vHGWi4KDnWfvymASfJ8mRk1oCA4p98SnQ5e7g2HiRQeWCx9UKxcHJGrnTGNw8cgb",
  "key21": "8uxvf1YCdPmu9iPyRxjHZpf916r6T7RqamdBZfcsx7TEWA6jUK4cPUAUsivceagNanLuaj95V6sL333uRhSjNKv",
  "key22": "bRLtucawf7VH9DW5RN7ZusZDNCx2XT2xp8Wp5nau9LhWqVGWsaDM2EY2CQwBZZ1U3SVwoQKnBDjaMASoxNLg3vW",
  "key23": "4A1a27etFi3cuiqZy8dWBt767c3QHudnFFy6PK4Jhw6CKC1itu8ktN1pJEYSE1ny1VMvtQaniYbvmJJtDkdk7Ypa",
  "key24": "65vU9DCDXdLk3WyKiVjYeJ6RJTJUEdh25UoAKkH6X7aqMrBRcYPZXwxVaQ6UsKoY7nNMvC8whqKrock3DztvpGnp",
  "key25": "39BW8BQrHSX5wCtQmyV9nnEF8eD2NHosPYiV3ThiWPvA5GhNuAvkjaenEv8kRqW6j3CcGthfVzymAM4HSHGsKsVw",
  "key26": "2QRNewvEggbvkAeA1siPyuNMjiFDUpv7h5G8Du24TxDzYPhMYX8NwYuaP7F5CVDVyF1EifMSqUYKDWHL7SYJfzZM",
  "key27": "5CfAqbD3KRmocXqbwuKKABaUdPtcADZ5cPqBoiHHGm6vDP4PSFs51CHnv1fjSuV3Kry8F1wRAeHrJLTzSKNkeiJQ",
  "key28": "2JNz9MKUCTaYhhDoGqUysMi5YkgiQjW3pyN6eCZFmZ8KW7SEeZo65wPkcAZuFxKYjGUCo7Q1GoBSNrgEBse7L284",
  "key29": "67ehVGBCwngaqQ2xyQjvW11HEvPMUvSnoyySdBePFHphsrZjH53g8NrrKTBjm4anJVsVrmzTTLUKJ4U4dskhWAN6",
  "key30": "3xU8eKXoe2nCtdH46Hn12enN7U3ZQvyWCcbQePRrWqsyCJ45fjGJhYmnPBKyDUicTX3pUdK4kcKRCV1AwrzzAqCx",
  "key31": "29itxTQ7eHhiwPonsc2N2EHWEe8Wyv2fAhLHKsDL189BdcGnKudRRQg1GvLSSUXWPByuPDsqUgGgnpYutm6YgugR",
  "key32": "3mpFrEvK8H4Gjf5i8ZnLmZqBY6LQNKsv2tKEbYBWE284De7jKM4ZzNznwZQSk6gh1G5SiEmaSd8Kvv9ssm6zfiTu",
  "key33": "yybqQw88Pnf4NYj2b5hY4hezB6GLkCBwkruSBcSELrgtRRDXFLZQJq3Tsw1ke9DrieECh5dKbSTwntQxrzYbnHS",
  "key34": "4ydcvxMDVvzrNoED89fXtj7TkgtkLuoNomdL6R8ohf34cnsb6MgJECk1xLakXRYKQWsYrejcHTxb2NBPwg55hQUd",
  "key35": "3Ub2q7ijyW3HpHPVrse9bQSXrNGWpXUAV3j66Pf9bFfutJUZvh8sFqH8nrHv86sHfwWdSUbxqrUgUCyRoYmX6JU8",
  "key36": "2xmfuBKpRWuTupndD4HEptyGAsUhFAUMV4UC1qJAGQPiD1oP1PyvPsk8ZgwNDCS7QiLzmGeFWVLruqMvaVwy9JaY",
  "key37": "igZfa8gmBAGfVRqScwJYcJRWGSMT8noDmhgTLDeELURjAHaqrPc8hGSBZRJVxyZn4SqJNvGu275eQTjUhsYAKcX"
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
