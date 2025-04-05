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
    "2tU88N7zkprjT3x5aZMq5AvQRu2ADwzGEKHE8m2vuWVBkDP62NV2wxtaWF5pQva8AZxi2HvGfvVumWwoE6fuAc9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4soCiGWCJbuVJLN1NTXoCwVRPaBhTGFQvz5htuvnhE7rKDt9mzfMkytP3QQUFA5xDmmi3u2vts4nrwzNGHxUsMkH",
  "key1": "4AwiNqY7ELoHioahG5eYL12s3B7xGKmEfZC5JZF7hXXWUh6hak6drWD5mB3AxzbwJsfYWg31RhevsHpPGYRuo7as",
  "key2": "4b71Ets6cXy6HzDqxzbXS1rU1qEwbkBuJbJuJGy6rvNw1czdGfatza5a1ZNwHmwcXeqC5nCnPfVx19vUCo86PPXY",
  "key3": "4pfGjbBpbxKVxwAV9c6KHQeEtcyioMEL96c87cAnKPrkarnUftFv55MJpavtHe5uYEDWhe5AF76c9Ym78JDzcWnG",
  "key4": "3MoZYptbCPiWRmVGBo7NnR6jkjS4bUZSAsNZTxJygNKsoR9TUnyZXFwHZyRhPBqXAF1MBMdKztciyJ6jBqD47oYk",
  "key5": "2NB1QJT1cwArFuGyTovvh1vydXSqZw1RZN91RHj8bagQsmiaf2DdkgdVDamg4W5yacnW8JZZurg79BwrHVmPsjb3",
  "key6": "2y2xstb2x3uYiZE8YjoAe5ysdkYmS3EBTyV58mrTvUmJ4tjfzCG7DcaM273jSAgAWGSrpUYE4vmdqyC4tewPZAJB",
  "key7": "4bvLA1rWb31pGQXbhrdDoXiDiLKQBxBB5SJb52RCamWyiUt348o5CKoqgoyMW2MirsgaQvMCKSLPd9abPscgny6S",
  "key8": "3ZUEp3jTnUvniVxnyRNmznx6tkGsRN21JwcvVo6mtQkvcY9LkHKkSuPDkB4jdcmAXUU9ujnuHX2htQgZfdaTD3bw",
  "key9": "Dj18ioa8qMGEK6y5VTsR9jdtopfqzea6RjGrhQ8ee6mNJJnxY8hEuX56xrB97T7fPVzHXAeyWuHqEQAMj5SNxEg",
  "key10": "4UstAAQhWCvipKwEum9EsGHhNhYrFGf2RZkFwLsoHcsRzUpuHxq4FNZfiMAzoE89PC7CESKBJGix7JPcjnTjHApM",
  "key11": "4DvCNZmb2DnQkun3s922XFFTg3xE4MfGwNg951FdEM5NYbAggm1ZiUg4hKbgFTTLdUpJQCjexNHo76cEmk6j53tD",
  "key12": "rcbMzoZ5zmTohXbUemubGN2bBwWwN1SExjKFjZfncon7vCstJR5j1U7Mr9d4f5nptWeMag8jwSqMJb9KSbeJ3gL",
  "key13": "63qfwCPheLRE59VURLtgkFHUn6LU8H2PAy2cjSyfFowQP6ToFP7CE7T5viafDQpTzhgyvXDNvqy9BtY8zKgq14d8",
  "key14": "3i3PjtnSo8CFHzj9a66Jr7Wr8q2jps6nDoLQJ4kJ9jkwucrdJ6pxJvGUtaupu3Ckrois1p1Ps7ajeNU2Uotvmjw3",
  "key15": "3e2KkCT82BoaKdss34VCJkyJSck56T8DVdrZbHswbf89FT17QdWbGRAUTsxAMu4eGJx6j9YgA4GeXpkwaXwJBUWK",
  "key16": "2NC9DMP8imCet98XLRgiM7yyfMyVtT9rPHht8Sbe5DSU4zhWiS3V26qeWCqkLjLtCRoXkSCg1WDJxUSgRfYDvcMd",
  "key17": "7zW7GAbKW6VG5qBuFuBKwJoGx2fdzaoGfzynDd2C1xbfjBhbFjx9TR3cPZkW7AiB1zUKfV8BAnQHBJUiHUWYWYd",
  "key18": "4CbLeTRJ7kqA9wwiFeR4y4caqWWtocoh5tSHqhbo5X2a8kUojKRbxiz6627kQyQZuf997YkvxDeFoLiQYJk9am6R",
  "key19": "36PLBbh73vSvTqx7yJRhKgigr9zMz5D3oLkuSJ59PXtTqQjna42okqqWKk73gVVY6GbvgbNJ7ruDMaY7Mn9cnDGF",
  "key20": "2tweEkY4bN6TSx1uUQfA4RJkE9NCVTiDscTGZizt9MB1aymHrgxAxqywxAftTMj2sjX8YdZ3F6JShC3GJtnuUN3v",
  "key21": "5yxH4CExAMCMwME2HVkuojBknTCKuCLzzhxDXEUaWvYcFM2K1z7N4gMuN3YkbUmKVASHzDZ8XiCVSXpHTetbh8V6",
  "key22": "7Tw1uGYjbfRJF7Gmo1Uh1qb3ebWJNsGwuPCQbkujMQJCP9obhANpUHXyuGwMJdmzXLzQYK3QrsPC4Cq7GvYAFrj",
  "key23": "3T7ckWFZMNDdfLDRUSAYgEmSYfHEpgKnmTccgi8yuxrAWfTADP4LD2zA5LysQTC73rSqBQiNmm7U3A8BYDBxebQ4",
  "key24": "JnNXonqZitcLs2hd3s5JahTUGv1bXhJdibkBqY6k7GYbLLdybhY3XdFo2BRnEfYTkjnjwN6jaRE5obd4MUrbPUb",
  "key25": "3f1H7VfuA529XyoMUJ5hQqG6hvo5HQZaBooWSL21pJ9gdAbpcA4NwiFxpDFU1CiaA1i5Fyqky5C71s1rNUKDF5i1",
  "key26": "2hviKaGcMg44HnB1svhpvztQu12sPWsv3wS4uEbvBaPHmC1FLumvKpiL68gdjng6fgxQqesxsV1GZuPWaSngubP1",
  "key27": "C5Z69f546LW7XNbviaJRxir8EnhX9iv5Gbaakih2XHCUuJsvv4NL6k3FYrQffE6mizcGQQQ4hikmnQfuUZmt34p",
  "key28": "2m4irCeJU9a49ZW5w6iAZ5txoXezppfAqTYvBWQBKs59dKzC5ZqeES4aF5X69mnhuDHK4CzsNd67caNmrhydX3G6",
  "key29": "33mBAZdR9xqbEuHC316B2zsEHRHedtRxuhSAM3akiSmasSRsq7DSdWb7GVqhRz3AtH6d7CavBveAANrwHDFUTep5",
  "key30": "3aUmP6eTu1p9g8QUk7L2Cjrrw9adrSxqJ57rye3PjNWnm147LEoNKq33utVwqqkZQBPPhuKr2H9o9Mxk3wbZ14DC",
  "key31": "4ELktBPV3JzQmKjSfZp6QQCgA9FKhigLvfcxJ9HeZVSvE4NGxRsDB8sAppFHAySeVr2US9KPc96D6W6q1Mq7iGg5",
  "key32": "2wGCb2gXF6ihNUkGA3suMZqXfCmsiEKNQJCLPCV8R79UktxTAm5XUvCD1F6hHfTNaxMS49Fa7sNhfXzdAPeNFmDw",
  "key33": "5k9sCan5xEaX8iBReFkFHaqQY6JJoRY52bjrZJekdms7W7GhGEMXiex9dYBSzhDdrMTuSDF6WQ6SXiyzdJCHkEg7"
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
