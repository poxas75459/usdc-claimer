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
    "5iG2pg23YTWgz5Uwk55rRJLN2zdT9agXaKXDRfP1soDF5DWFG2hpCjvSyAbhCm2MinsfkHe4ypHsit9fn3TTwoG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BBTNrCqMfbMTKQqqMqjZKvAgfzZw8QWPa29s5uddy5gRjsKghT6U8aWaaHhHiJia4uSDmMKdwmcHqXsXGHccjEc",
  "key1": "4yYcfi49T8zstncb7fPYci6FVkNcBrCfHHZjPxDKpFs46GwMAReeGXXYnrv8WtwVNPYyjDYnHUMT71ATxQ77EaWE",
  "key2": "Pmx7ZyKNMSaKRTVhYaM1oCgkUuG1kdLiWmd2e12hDJMsoD2qAj8mfonGjpFvEvRcF2ETv2BZA4g3r7h5pjFhk7k",
  "key3": "5qPjqVSUEau3zNF853khDVqYutgq4kDPq6CJfcix1yRH3HU6bzXa9L5epqLwHAM8LBubeRhbsvMe66NneCzNxeVF",
  "key4": "jeeXrrPJnFDbMF8enpWrCCgqCwA75nJmuwUadMF9wTuhT8ZLBP7sZ4p2ywZC6f8cPQKRhLUvxWzEArZaNwUp5bt",
  "key5": "af6Nx7LFL5hd9CkTVUyn1k9n5wyTRFkAf8KeTHWUKapDfRWTAb8Qg2P9rSxkfkzDbhBbNdP7WTWKDeEM38xi7Ht",
  "key6": "2a3vTByiAGtQfVTAmiLxA87bVFA2XzRAL2LdCPzsHcEziJTyFC8FmZfYUamPMNwb4MEAxJx639iY3bx27boPViR5",
  "key7": "34nZC5ba6EMpndJyxowXkHUtkas6trh88Q99uX6A5HUyw39GxWdNwrSQA2vcsGEXT6xSCJMZ68oBvJ1KZxrgHHYi",
  "key8": "sGrdwhoXyVs2iVioiMcuif6gFWos4HrrqR6ee14R79wAYfmy73g5pzc37RtaanUhwjU7ZhMmTyi4F95ZQFpY43f",
  "key9": "4Zsf2aodngtkbDGmajyj2K8WY9tfJQ82J3hm6yBAvRzGoHuiMKnMnSMtASfUvsFGUT7wuVryYyaGcML7C1CVLoKw",
  "key10": "sm8T9Q9mNZQMzAEB4dC13sRfu98sX9xs2kaCYYuDzy7rr6xWTUwGGh2p8MRm4qJJogogNHqCLysP6Rq7k2qaNuM",
  "key11": "3ydUskYF3HVVNmArN6qsdzfXupNH3mMxccx1dxNGpUjcvNQTueMnjiXP2hNpkHhdxP68f1ZvyqWod9xaHDXhEjig",
  "key12": "ndcuZaj1LhQDdo94Mee7hJE682UK8HCeM2HzR2AoAtfL5NwAGLeQXgN2FYgpBBM9aoV8acBuUwb8uSqBq1oN627",
  "key13": "DCFg2ykfaTt89dp7xLCHczwJwUvAL3QBMjSUeAWnDcVT7vsqk5EbaJy96ksoL1tYENMYwMDp6zRBQqu2ude34ej",
  "key14": "2QawKJVsp34jy6ouLXKa3KBwe4e9UWdhYKFhohBARZsUY8Af9auP4hdABndCx8NPhqrhZFPyFskGCEc1GA9GQsjs",
  "key15": "2At29cfGMsaReEc6mhb6dU3jBrzKdzD2XhrATY4tw3PuKt1723GVWUwtbqQMq36Y53tKHTmpVvboczqs5ZNRnzEH",
  "key16": "c3EAUJrWCkPG7PL2mVxSNoLmznvz938J4jZrkwMSAGo4Bi3nSQGh6RM9BYS1orPLa6GPjpXkMfEjFX5VFx3XaTZ",
  "key17": "SuU2gRwTWvriEZKTKFKnbA9cahbFtuAqyJ73n1o7QooBQHvAauHafcRRPfzvpww85PRP2Yp17zBBLnrDFF7atjE",
  "key18": "64M3CSM2r2sBMx4c2vQX4QBvYfTBCZeCswAd2RnRqQVSYxEb9b2aefgaWgvU4kptFEja2K1Pc3sReUjD5rivhnc1",
  "key19": "5dS5cgmfx3qDoZ2AeWLgFJJqTvjwPnQEWjJyjYwxbejDw25HagWTVoiBGDzVM99uexJvCsY15RXMg8wonaHpUeEZ",
  "key20": "413PE2ujapeD5DhkQnPydAHDTUv9fochZ9w3LYXPzcm7wE36CY1YTs9DT8fjoQs55RF4dguqyyqfPKrsEycYieMP",
  "key21": "2i8LxqR3N8oaCYcgSjJ7xjCBFYqFZyVRpZXANb68sxUxHMu9qpwRbZmQLQNuQqJXV9QzpkexQqgk4wdtdGQboGyJ",
  "key22": "5S7pS1qD4tCFbaCYYtPviqLJDSzDSFR3ZqvZuJZggXVUP8dJ19numG3CnKtWbxxN9GoMLKcPgCn2dNzf33TmU8Sr",
  "key23": "43Gs8Cu3wnnhwo2xYBNDi1KwdPWL8FrHUMBBTuECW6qLnijQvt97HUJLupGj6QibvKQRMpJn3dpeDejRqXMk8E5o",
  "key24": "3En9TMAXD9tMmq13QNJEXA4e2EtSyZeVeCndjcu9NLLzcofFjJ921ByFT2ETYy1xg6ZDEx9Ni3EnHw1is89ogNw9",
  "key25": "3cz32nxkRVEag6pLQUWpQdqw8EfonpgKyQGVqum2vTDs8GaSL5ZJ6NPR58i8Ntp3WHSQJjzPRhdULyDPPDwUM9Cu",
  "key26": "4ZpEURcaR74mKSYDXCqRnac4c9LsGBEW5Q7LJB96wicWEN5G77mfcwpxXTbpr8HnVaXCE1Uat3aC69AFCRUbRSWb",
  "key27": "3NDQcBWvfFH1W2usEygfocCYRsK5j9n1qFqpetPLy78fuBnDVEx5esbgzoaEXqkSN9iGRtZCCj6t7KcBA9EwtYND",
  "key28": "2HyzkHXz2Foox84E25F5suYtuERaPDJsQ5MPERd4qAw3QGkjW8a3NndAvTyBHwAwE9AXZCJuqGMbNLLNFum5RvGA",
  "key29": "4rdYonMoEWJAdEQpdzXsVpvaLTWimfoyGnTxP4bjVdtnKRdCcESu3Br6L7hdysr3wNVMzASMV69w5wZYLsnw5GG7"
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
