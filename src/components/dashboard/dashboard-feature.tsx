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
    "4WLn8VB34HMWShGHXRWo4z78fess4Hanz5EmKD2mVrND3eezA5z2dhJ5t9Sk4PDvM3sD2ouaVjiX1xT6rLuZ9w75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tjR8nix8oQNXbJeVfZJ8R4yxSMu7QSbmvBAT5oRsETYRuGJ64JE4dhNWFNqrhHuv9Uk3r44kp4Y9u26dmPHp2jL",
  "key1": "445CwtKyGEsMLLZ6KvBY4vN1gEjKfAmNEZsPs9F1b9js9ufFnFhzEz7bdAh81v6NAa2KX5vfBCsiH4YkAFqrEFC1",
  "key2": "4tuUrskC11TDnmDWR5Kpp7mmixC5TXGZCnHNPpoWS3RymwrjCj9HsChKT93iTHfB2oxa1qy4T535eQse8kUowNyH",
  "key3": "4yTwoEUBR5Ch4Yj6H8rf36ZJy3TJLLuh9zKMBD8c7WaCMfqc41e4eaS9dpAiudEcB5awWPpjazBraaAiVGk2pJKA",
  "key4": "VHrvrBGr64uU2Ywc9aprEt5wc4Z3rQviytACcGyfYMbkUXAND1iZULAmEMja2tPLN9VcEvjoouPEs58L5WtTqpE",
  "key5": "2NZSW9P6FsVT2g1AYczapZ7rDMqmjoq13fY1eGLLXd2g42dEWhWsrQf7owuh9vsnGfds35v3x6UkRnoQjtpRgkFN",
  "key6": "2nGRM4HE7dp55i972coZYYDjbyVrhT36rNinzAiRZqXGpDtQ7igFrSt5Jz3tWiCAXUgBrbZrgTEk33wtVPeoJJGN",
  "key7": "3CYsed8EZvdNayFf41VpYuWH3ZSZuGSDHqNn19T8WzshhRzHdLkHqqgkzSHXupfM9K8REFdoanf6VVQckojBH4kW",
  "key8": "HypU2gyz29GEPKBhrJybWb4UUYZtX4v1Y4Fea32KmgzTbnSHQ7yHiSvwD8y8atJUn8NFVH2orkbvF8TPAyrkHLj",
  "key9": "2HiPUhB9ej6YEswePo6LBhLF3Ng21m55BuqEqtUsv3n5ZYhzdHbG1uWfGzjpfqL7e4APV1naqFkBiZbzh8qWNVhU",
  "key10": "3j4B6TkK7VcdrPvavcPMYCmP64rPbtEgFbxdRUGAutpJyKNfdjeBJFWzKMzfymHoYEUVqzV8NvnyW4rMoHEKgzbo",
  "key11": "2HMMfzSdndtLHP73LXhhfU53oTuoxo9qS7Pk6d1CNd2nPqMXHBniBVRejzTLviDYnEznSsZoWtn7DU7aFM5HFzyK",
  "key12": "2egChkMPqDdCTHYakCY8Wc8NpGBriZapjRfMJfLGtnGRqLyTyLKVxFVeiQhLbuCc2FjSQ2KVLjMkRVYkwP31LCo4",
  "key13": "5qYyhmtX7bEXi8NowW9ixB6vW1v8J6RBngmVVEMCTZzJnRzRozAweryr36wkXEcnqqECF5Q734CjWbGVkeFSUX9J",
  "key14": "42z5LXv9EMWvM7XsNkod68GxNEhBzLEMopLb1p5VnEn5E1Q1DaGWVLUWgY7zQCzLHt27jxoTa5EZHFVBrwSgh4rd",
  "key15": "gZPZzrcS5P285udVXKuzvU5gUXJcpYVz2J3sd7SUahVr3qRZ3XCh8mM4JiE9R5oQnqFuUjzu2vpiLbfKfSePYvG",
  "key16": "2Lr2H8ognaMz58R7S5YVxvG7pUTjV989mR1qzvHKH4jVyRuDboo5qvLMboz5c35Hm7XcKw3KeB11i1ZhoQkGM3RJ",
  "key17": "3o2WTiP1zUYcVeg4GPuL2Y674juBPA6KdA4SQLfrtADGMY3atBm5h9Q86H4Z9Cpq77TJwgU3xYw5yUC8Tx5m22d8",
  "key18": "5btMEDxDqXvKusjgC2y49Wybq293kWyrWY4bBc6cTdF4YVguMTCptrAmit9EgapL7UmhvReNvsLsP8AVSLPidUL7",
  "key19": "4axapYnaey3L3SpQfyENGv1YxKT1orrx6c9ctNhkNUiLUyFwYV3AXHwEWeQMQ5SBSyfoYS6UFTxVHZBFDGDQZYmK",
  "key20": "jNYRbZuXCPEgd8wWjKTHfiwmUvL3d3UJQnLVS1ekweaLqyhW4RP7DMh3dzG4keri4ukuGXbtMSHLQQrxMkdmFUA",
  "key21": "kD5qz59kvMfLfMrrJ8D7DUgrNqijoaFkvTqypZDQGEJtRwAWsbn9vfe1GdF2hLyBb5xR3Vmi4ezpxumXKG2QokP",
  "key22": "5vVhnwpngBP2wiWRKPdCXmhpcjnAwcyH2DZuZz3yvt1RFKvxnTuhAMh1ixeWVoTdLQNRHo76BvvPLG3eLQZmTveL",
  "key23": "4ewCSAy3gJPdhLvXsuhhvzcpfHnAy2zmTYrXDLZWpySKkccGr7bGwU18uF3AnJCtLfLzhhKHTiTbr13vcc49HKBw",
  "key24": "4gDHaUXpVjJrAr6aGCwMi5D5341jyudnBJNfg9dmBk1NPMaVsxTN8tRtt8XnCwjBBgobUCpcusz1EkDrb73HePqf",
  "key25": "5dnLaWHTB1HEz5gLhSbA5f6TV9q34tC5dxbhq7FrZmpHY3wvdQvEgAM2bt65DVkaakpF8YeJvue41jra7VzvMfPy",
  "key26": "3dZVvDpTifUaWuh4fAGqjEPKx8BGy2phnig3HCprAdc2hDZt9CgdAw6px8p6uSuUPvrUjrAqkAjbbzpRoxU1ksu5",
  "key27": "5aXPJcfXSnQfNng2quNk45fPxcEnL4FnGe2t9q2QvwWFPo1sb8kqwfS1m1YpDigxU3a4Z84Bq2H3LMEGgP8ecr51",
  "key28": "4WLxcEn2Po3wbAcVFJH2tYrbUjEqZxykexrpAxSmmTkDsZ1eM5DKvh5mn4zEZsTUws1iBYAsiTPxu5L1x5jQN5y9",
  "key29": "25zX9DfYVqQdSFiTJTLXTcY7nu8nw28bPne6xJjRynxqPDBoE6YMsH6MHn2kEdVEfWahM9EPqeMiVYHDKiafNMy6",
  "key30": "3Yv4bKQPb8XHjhVznG5zR81UXMNeKizHbxGiDZVcTrYiYCuSXDiaa6EYhiQ3SL3LpoYTHJyDuCeGDZtitQooQVyc",
  "key31": "3wvYm3r9dLHjpV39sz67UJzr2CTVPTN6xdRUYVanQgfquzvukZzNTZ5852m28TWBjg77CLHsDEttAqUWLXpAeYtU",
  "key32": "59ivngwVco16siV1CX3d6pvpm2VJQPct5K8rBpAEw6ofCKghjq1rr1BGzCNhyA4Ua2WbkBrfUQCuEDU7LDzxuG3t"
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
