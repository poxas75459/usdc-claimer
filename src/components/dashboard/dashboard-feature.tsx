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
    "3QkQH85eyNBEPF15vphGXrSZSZQa5rHpBEiFDwg9TcHWkEQQVtXgKwEzu61N42wNZqcywDumRBhNz3TJ1vp5Z1zD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iVidnMR8KqisuERiMTyyJ15zn9FbswnNWFpgcvTuCYeBLniJDuFnTov9xoxeSXzzCrYNp8ZTNhoL4UqcrkEqfSa",
  "key1": "5BvFPv7wpMqPzNWuaHmngpRYfUedrU4J1r2kjGcH3XeVQuotgjtSvRE8PR3iVggMAzwzcRpE8Fp1SiPvLXRgiHTb",
  "key2": "3fjuwbcG1odTxB1JysJ5MbATNzHZFiqCQC7rn9f3W5a4f13fUsgYsbbZkKMvM5iJs1GXK7EWF6EQP8iHqFvo2Yei",
  "key3": "5G3f52SaLW8BhnviNqkJ9xNs5fbGA4E6vxfGWssrpqs6zLLSGjZSvKEg2fMYCZXUB1F1w2wCdhGHrZTamYQSEH2x",
  "key4": "5DwaEoRyy7iMzjdJ5VQb2bRD1bEkQyM136zHD7R7e1E3VoC9wsyg9JbsbXNiM8dbvd2poAZAKJJQ68DJNakJjRVo",
  "key5": "5XCkCPD7nf94vhzzCKuftVwDLQFbq51z3Rm7qixEXBF8ncc153LCUyFcFQxyZjaSpBLTaQ7wmZx4q8FsTKbR8ZVR",
  "key6": "54WpcJBJguyLpVy31pwmTvdmuN9xV7kzRHCh677kVv5AoWKUTKS9Tm9kAXc75W3gcxCiC231gfcndMZwACk23tpg",
  "key7": "5WgDDqUvQ5JFkC7iNSczRHzJpTGDBVqtzNACiDQTzTcaHp8UZXK6CB7TX2YpNdsCX53FYtBF6nhM8ZTzNjXDfurS",
  "key8": "3vH7Toth4Kq11YrxbzufLohJVE2WLZXdh9AEyAYMJvWFXbTGjbsD1sUBAnuABUU7B5dJWxMd2MnQgFpHYYJ78XGt",
  "key9": "gqfds85UhzYvRF47H6byAJBB2bwecpizU6sFGMbLwoMyyGrtc9qUnjiDjAny2k7xBDnfA9x5YxaWFUEkZaysvRK",
  "key10": "4FaNd68yKHGT9J8xA6iNYZp4YXZxTYnqg52pgR9h5LVmRKm8Cs4K1DaW9cAC1i1VJ2c1caVKsCydKY1BunrniC9Z",
  "key11": "2TPihGDX96KBxkr9kJ1J27krUGfLLiqK1ruNDabzWETMtd2zGw4QeK3sz5e2nGWA5E2t7QnTTtQ7o9awcZ2bqNGG",
  "key12": "5GNj9jd5zAh3XFhzwJqncif148pkTXLGntT7MAevKBy1kHsKX9K6C8UcB3fXZe9eDDAJq1cAbGCDLeTuhFnkhUGH",
  "key13": "3Lx6MWvjdN4Ca5KFFETtxL7oTmK2H2maV1yS871bXWjnerdnXWuvGErphTRPGZKrii2jBBK5x9jdE5GXSgZmpnXD",
  "key14": "2hLfWM3j4HCLo1fe66h1pqPLpML5VdmhJVvh5HMJyhtZYPpcHbwfhSjnUXRjFdvrYJfy2139xZgSrG99LsyEGbhG",
  "key15": "2Pse8hoDKBdd8XkCq4PKbqmEHPK6ig5YRokCtn7RwK8A4mKWHRhJ62tkmHj68S8pGUdDddBoAzxpeodP2kr4op39",
  "key16": "2bUj1nDCApqUg3fw5B9hRr1uVSsj19f1jSWDexjMnuYh3xNfQteaBiL4G5muvZsrP5RwrMyQBi3Jdy6NVKJru5tc",
  "key17": "3qcHJ1nLTJgS1uyEpAYSiqWUMWFsDR8RdvicrYhZ2tw8sxnJYiXemjpiPH3YgfSwoWiwQGg5aox79kXQxKRcJXej",
  "key18": "4hR6kfGcEMknZ6HcjsPHyFAzHncw2XBnsjYzyidUG9NJMqjUnvivuzw1DgQhfFbwBLhoSq4aiHs9cVTs2iym5VUX",
  "key19": "3kRZyyb8afAcUGfhK4iBqQ4U4ReGd8dLYBWNLaqc3u9cMfiJr5k3ovkzB8xXdGBvUbm3Y8VMC9U5cTSZAP5oycdc",
  "key20": "2csnimz6JG5bPRwFns6yWFHPKTyGMUXoXwTkf5awhdGUda98Mq8o6zwWQU6fg3ANQQAp16422pUUYMQ9783QXsPE",
  "key21": "5tyJV2uJrcSuowkLkAj2oPjr4ECag2vGzPFaZEw9RyACnXsg7qN1sKqAwrw8vtwfXhiv4Qv9HEj64jB3VgyPnQos",
  "key22": "EbSHpR2vAhBW1tnqFjwhshfEk6SkMLEc6x7pSs9aFtyeddupDk6uvyEw7gG3bBjj62kda5HkYKcHFtfzBzGpbnR",
  "key23": "34RPyrMy4wWfn54c5hCuygkY1EZFoFVzWNr8YDEYvVfQMbZb35Co6WAPcc1fqZRCraCfwiU3rYBH91b6PMhXDwjH",
  "key24": "5EA2C2TxoDqx6xKHp5U9ye5LD8BKabUKJHbWQuifhHhUmVeG5PmhdnhvDbFpYGi8TTuXBa68veNK24KoVjVZxXwH",
  "key25": "u41ydziz7wS3jgYZbw7BbzpTcpjL6EDArf1mpCgrjUgnhvR588SKfXRejN1v9VbHURgBSxjFGQ5k644Cahwm36H",
  "key26": "2Tj7HAAciRsbF54nGm99tkHgMJB8sFtaXFDwFnevBLF8W6f5s3wNEnhd4mXt5TuFEGsG51o984bq1ejDDkF7r2Mv",
  "key27": "gEg76S24agTiDGJfhzQApnW9MskBUuCokMqBCRVXHf2SjEVvpKjC7m56EvuZZ29FcBoRBtt2gMKcB5s8TLnfVAC",
  "key28": "54umK96qdSsoW6awnEnmRoLeQWUrQY1iojjf1NaPA87ffNAu23ud6jUtD34Sa4TiL8RFGzbdUFpUZX1LPZzuN845",
  "key29": "3NRDcA462GfbYsz7R6cwPGyrpwQo7PK7JPnEAEcG5pudKRzJG4kXjBvBbz7Yk1qgjfgHGEPL6H14Fc6TTdonMkqd",
  "key30": "ZrAsWuN7vsCrubmcAidKipHpRzKzRv8oCK8n4SAfzKe38jiMvZR6BwL7Ztgn7zGE1Qgz1Kgppn6yWqvSGKfvL1C"
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
