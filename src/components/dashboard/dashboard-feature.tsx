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
    "4HjAAqriKsPpQb7munVDdwR1kmMPY1WuvnVA9SeJr4HikrmJJVdDy5Mjco9TAnbvZRFhTw21EyR1DR27bTeWinv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fpX4pqtuCdw7XgmSNh2oaZJVaphmhdqBvhV34wAdpkQz4Wwr8nfGoyPMncT9Gce8G7oZJfGtp477vrUvcC6AajZ",
  "key1": "4G4A2EekG7WqoHCyW279NJQDmisxZGccoRHDTGDQrpWoE7yT1BovhPA2utRadxPus1NTgRTgbALtGxe3pnCrcrDR",
  "key2": "2CmHRAor7i8wGmW9YxtfCH4JVDXNwNiFWAhDYF17dqxY1FX6E5c8eMgxjemc3oAvdprErpLYNphU4TV11MeofrSw",
  "key3": "5sQK5JTAnujBXzPRGV3LGGpuNSUPwfrQWTssKyMNjb2xvavE4gTfSWbC1fJxL72YNhLbkL5LaxFhXrWssFksdFVi",
  "key4": "YMbahyMnEc886QsyimmqW92chzabgryrbvstUpKZffJhaJMJabg1oAAdM6yhq1rVQ3659P5Bij4Yn7fyue5Yz1n",
  "key5": "5vnMuUjGzrHggykX5J16EiVEp2msFdydy4rsVKT4beBQAsiXRKzaX1Ahfky5L2JDY3ssvR5jpufqvdcYpQWufxCQ",
  "key6": "2dNDUzrTFLsNmYdEJDw3Uer4jetQPNp2J9RJMXfXgzkjCzpt8DZBh3HCU9tQHPUo7SwSvzXcbXNQkZatsPnzERV6",
  "key7": "5iknxXecY6rJ5j3K9YSdZdd3YNRocZdUgXpZFmWRStcw556Ni94ZTC6hf2dEb9xJ5qS9zjPzCYzEAMrHc6WYyUC9",
  "key8": "4ZonsfmzFfGEqmGvid4RA96BXj8sMxQPPVt3xi3WGnZ62z28wYsPKSXtL4AX4JhBkBM3hQrr9NoRs2Q7bGnsWL47",
  "key9": "3jCbsNHzHq98NXKJFeHocK9Z2PDmH1NTcjCsqpngUhoJo9cxmzHgAkAcEnVMMjCoSQUZBedPN2Dsn59Jt14xTskE",
  "key10": "5LBJNZ8KQLGWi8cqePe1nW45YDnMFpL2VA98WwCkVrksJz7sccsbcFQiUfBoCU8vd9dZGHFW2FVFmcEfQfzKcNJU",
  "key11": "5Df8aCxTRbpgQpStAzNkpoE7MACW78uEes4wNouvgu1rGsH3y1BEXtBYmrr7LSgrvkYpKu7N51kEjvG8CBAi8GBD",
  "key12": "tD7Askupb4t9jBJndmdi2ed29eGE7nDq85DCFoHAp9bQZ4AvCAXMszvN8FwtKGJZjNcn2MceJJGbwsTpB5v3Myw",
  "key13": "5cLk3ebDBH6P7tBMwDRPLpG34JXLQbK2HTnqTeapXrzH4W7sV7nE4CQ4kgmEgwE324FAEAVDLceQihkVh6AjSmsf",
  "key14": "5ZR2qE23KpBwuawkRzNf1zEQGPDmurHPMjfKEHnsPQrStnrjoWD2WSWuT5qgf3QenPpgBCxDow9uVcUmqrRSFFx",
  "key15": "4p1VVKBvjJYRSQevcWmMLJiShNQgeJT9Hehw5VUzGwcrokDNkRzAypP6cnhJSRZdjQxJWJq3P6TSVipDWZMvHWpG",
  "key16": "4zfQnDKLynJvBWwBnaj1w9Pm4o3E7QBG8WfTG5ZrEUz3vQ3619AHV4Jtasa3s3PKgHiwKeSg4pPse5BiJpZPq9x9",
  "key17": "5NHwasbCKvczdupGbEM9VWcwFWJKZx7KS2o6unRcyvG1h6SBkGv9ECtMBWPo1AviotucS5sFmSDZvqgHKkTy6L24",
  "key18": "3oJUgp8i89GN3i9sUkRGqVpYVcwVWw21jBt5CJp3szeAAoiiiLxKRqAXneNRCzDCAj6kp3PuLYdZ41nVuHo31Epv",
  "key19": "3SnhVv9Uy1i9aiStdTQ5r45oPYYMCrFjffAcbuRCwZHGXLbidxXC8cjaf9PqSNcvbiVqkhUokErj4nfW4aFiBNjp",
  "key20": "5GFmpsZM3oiMSrqX4vA8B21KMbPbWQnwCqgLMbzwExCRXwsvt9iMpe2CjqPcfwf5dLE586rwBSMXSVTPRzHqEG3n",
  "key21": "9yEAR1VGd4E3te9Nhz23x6QMtoXuL9pwKHVydZd8saovcebF55kapnZEaf9nh6h6nPnKvBpMD9SWJmyxq58WHLu",
  "key22": "gyimCy4nMFNPdkwW2AMRADm2VKjvJbeA18YdQWZqVRhf7bQQB9JyVPgw32HLLgqJj7S3MmE65fKSeKd1PaJ3jtx",
  "key23": "4REYhBi2QBC9Z3s8nWiVh34u5YdxPFr6i2xkkNfBxFFHBBGHScR45ECQBxHi9FNpZZUUMkUrva7h37eMBmBUVE26",
  "key24": "2ypE5VCFad8FvsWwo6bUYU2wMgbzfCJAtxGbgHRJ89bEteZ842i9aBn9uf1PbC6AtEV5jhdegwPv3Xx95EDKRzGZ",
  "key25": "3BoNL68YUZRVpzjZE4rWmV9fchgcf3smFh8PwHUSxCraSKrt7Wx4ontFi2L7kyGspkorUdhb6rTUWLgChFuB3F8B",
  "key26": "4vykXKf2GtvsfxWrNe4fB84iN4aoUYxo9KVa3T1miv18KgC4oThvCPYMbHdLKJ4q4U7iMFpYECjz4nZ4qa5QikiD",
  "key27": "4i5BKpHJc5VbBiLjS9fo4c5qfVPCCL1DXqPYeWU7EkcUcSeoDiT3Rk9jHYFwq8WnAe6KZWgD9fKZYybALHN9asPU",
  "key28": "42Jq1AsePZUbsSg1aeSgSwbrN27Tgk4ou8AbEvrETGro1hPw6DtMuopciRtbMtfob8vzmA6HBPmQkHQzpui32Z9E",
  "key29": "53R3jWqG2mpphCgfvY6YUVFv8BX3HG3QuUqh7vuMc2xQPLotfqnCoyVkbKqzS5kdiS7jPZnsXRgnfyBqCq1Lh89Q",
  "key30": "2F8d6V7cGd2gKAJV7mhp9nkuZKEAbigQwtprXMsxkPdhJ9NynobR2zRA82N9DKV5pJKTDSuSUv8xAT2kLKVhwNKn",
  "key31": "56ui8VPuLFh4xmpCwiBrzBRojZskckwwPGcVMbzpB1NTpyJNwGJo2Fe9fdH8xSnH5S3rVzYQhy1EaP2hguve4kGK",
  "key32": "5wACsXf97Sj48iaH3dLj8Um3btoW8AjU12Xcyqg929XUCMdoTEiFSoinN2oJNFTX2JeXoDAocnUNu6QMg5Zm1XTZ",
  "key33": "5TjidkteSK1hCUg3xaUbtW1iDqrzT5DuUVx8Pmv18ipN6h2JUy2aJfXG95JF6gEiB73P2Ckeqgiw3YSKJ72cyUzV",
  "key34": "4kzB3iFzY6phGJryntAErtwmojwKeH7qNeDMGK686vEpQ2GEpxqvMJMeJkwkXQHEmMe6fDYRJ7HxjsZSAPPYDAsr",
  "key35": "3xjFM3gGCw3zUTXfp2xKQPadwkQRvjBxSr5LNtMHhGRot6nnkkhwSJFDS2LVt31yH36RZFDVgju4fpxd1YhSj5SB",
  "key36": "23ZmyuFheHZH4ZHYTPy5yg5h4GBsRAggCy7sg1yWyMfhAn2TCd9Q9ZaL7o5d5hQRmYRMTPHeBUoV1gBnRJWfW5dB",
  "key37": "25KFQ6EYWtCK4C3ATWaD8owu5iyDFYjmNnhR9zqqpPPAEpQiiR141D58uiaG4ttbucBCsMoZkK5WWemztoHFh84a",
  "key38": "5pi99Ler2LcvsFgVoHKAhdMuMqr9BZRhBTMphhXcMgk1A8rL5V3jmMvmLpFWahpMYKbWfmjGAJYfCx8ZfpGmsu55",
  "key39": "2u38rHDMxqDSKn87QSpZvzV5fGPUJLu9n63WEkirjebtHCgVvYU8cfGGmDd3ZBUT6C8pRZ4EKgsEUhQf3ZuM15fJ",
  "key40": "4XGmYKAXsgeNRJTSV17XndGG862Hq2SVdqFhH2S6nrKrPwpXjFc7dmBZ2myRLzNJewCahbHPqyfxo5L5CGxFaCwL",
  "key41": "4EHjcM2wxSy5zSHPE9wyoiNt6ax4Y7VzB3ZKonBvE6wp5F4CMPsfdvwRXcXz7MuWbGdZJCKpe5gBCSdrHGGjwJre",
  "key42": "5jr6YsvuKqAS4NfcWs5SkXpyH5p4tsbpR5RePxCNGCEFtMPfJ5PwN9DSiPzyCLJLAtzY1ztBDrNoGU8pPQkzRL8v"
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
