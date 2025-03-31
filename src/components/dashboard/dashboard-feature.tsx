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
    "YcS3audXmJG8c1L2FDFwsKgMg9aSe2vayKSTWVLcH9NoXBFcQDujRXa8bXVFtRAR8icE8ppwLvqvnZS9kFyumCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "91JgGaDwgEh8uFCRetSPiV1iKNLSksDpBYVsPLZcYHNYpC1UX7W4CP6Pbs6gPRfevukHG6oUNWbdNyVFcEZ4aF7",
  "key1": "3n1Sdx6or2BBGREu4dHVmYBLXcDD99cWeuooH2vLS5bUc6pa2qZfaezTkgwDHg4gjyTeEPJpfDv7LGLnQAPgyXV4",
  "key2": "4vN6oqiYcZ7Ke2NcQoKDodKHE5vCFuwCdTTiC7FpsfnRWAY4BXKDXSqwJ6qhccMj5yyC4QRRpENc2jNbVn4HcXY3",
  "key3": "65c7txhW6pVEQ2JC6fzB4YqymZVdawpq6vNBkVSQSdbcDAgKqVHKosaBxPFhXcVqHySDs8u3SVFzP6do9MFLsq24",
  "key4": "4ekHkZtzxqzyjntYVAWqzoNRxRMkBxspQ8n1ex2sVzjVkAnGBkRG7D9fhB4fH3H5QtxoeQLemasHsgA4CNVQ6yA6",
  "key5": "LRepeNMRwMLUzy2v3xR3fjgeSBBEHgATsxtu4t6rZLQ7bxpXhfMQRPyxKWNcSpVs1u4S8ARgRRo3TcSNs6bcrdm",
  "key6": "4yyvMQLyriNVWB8fxAfxNwruJyiTurbpbPqY4ahNmurqKN5vGMLkT67UogmqDpmVQaFCsvhe9Ja57uoNZ8zcCNi3",
  "key7": "mss6SPGvu42DmtC3wZwa5sQZBLkC8Y2Dc1mCSV7dnv2wQNKroHCXmoaLsz3xQMZE64jJND7b8R87Bn9XdKMkXNL",
  "key8": "56BX81gKFExuVnwo2HWPDEgADNpPvW4FJsjDszncj1GWmwmk6kJp9xuZb8u28vKYaxb15jGV5R7CREcJWAa1mSWz",
  "key9": "4UqrZqZH6DgxMHdDSC5tKq7QGxdecsfCb5Zh6eTbwB6maLB8FTHkU596etkiBijCcy2iXEwDdMJU9EdkKVLbYUuD",
  "key10": "3mhmyzLmmhcfERHakQ6ujTAsSfMhfvUcSAL6YdAR3WPyQx8umsQ1eB1Z5vaNLwXcpXCCGVi2G1uBGpQtVz2GBHJg",
  "key11": "zYYhJort9mM7ZiHyxF5bvUR6PcdwxcExEmk7fLTafUrKL2yzNqAVvz7S1MPBQXk5of5FzbwToum2PwGBeWLYhAS",
  "key12": "584gYp6nFcVhvKYBaSVgcnSJy7qSJdH11Z2YZL7R5Gz2pkv7K8UBRkLY87ntAtUwCka1nvffiTWfeGwJQ9x6NvFw",
  "key13": "3qQUhUn1hGmqiMfBJSsY3ZXgdoRJ78gpF6VNHzLusnENvBtu7BtnCaazAhvxfddUFCSL25tXBaEejZ88qZM8e7Vp",
  "key14": "3wqLFTcTNJRSFuUGGdQJW5SBKkz6aiWq3rWP2gbpcwUmPN1aXT1HqhPX8tMWkpC6MgwXsTXZHH1rbRfUUFEHagKQ",
  "key15": "4NiXsMfPUY7LSVCFC1qZZGW6C58e8WL682MFvhnAP5DWgarMHKvGq15NTFLeskZrh66iNanXngBRT52nk3k3UXAD",
  "key16": "3aHVUiBbLrb3XR1QuLddqhHs1wLgtVqTNrZcdP3Dx8S1PCgjwmuCPAQQs6D1YCpsFdEc5DLxywu2JvPsKDM9dEX7",
  "key17": "4SD9g26yqgNZaQmtHBDPiEHVzSTXkHuwBdb2kDHkiCM4JAKfFbAipmddTF2nXmN4dLZP4hEZwj6Yn3CcMUcyQ2r6",
  "key18": "2fi9djN9fk5hwFbPSnQ9a9Ze5Gktkjn3e11Drr4jvYWTXiaTh2gQ4YL8MqaEoc9N3MtiAFpRCwDp7AUZpFu6WSF3",
  "key19": "4VFKLSKnNSYpka86mmLUqoUS13i5skaGPuE3pYhXqmTqk3LJFmPXu8pPoBrkjesJiim4mH4J8Z6VwDFpi8b7t7ZG",
  "key20": "42xRybtDadZRbk12nEDfckidiGTwTsx4aMhyoNrJ3HeAXNt6QxbJiKLLRDnr13Mkc3etTZsU1TaADZ5u4LBa2JFm",
  "key21": "2UnmB9htJ9kZWwYmtDtcexjwxwxgZgvdgcyhX1rWqr3uYfcFS1GvxJL8ZibqP5t2WnFDqLfoHExsKnCiTmZGJGUP",
  "key22": "5QmmBo5UBRSoc6ojnJTh7AKjBCDVtQcsMMMXJBAASVDpwvfSe2dKNSj6Rn3wfue4dSvPGrfx4543rpN44h1GG69n",
  "key23": "5E3WhXBrWKeZXwvtKBr2ZNMctX8FR4Dpk93rxrTFrdSWqGjP6w9TCgqdCeJa81yaPmDaZp6nVuTr8shbtR4rpBUt",
  "key24": "382hhqBnLWexi69bZ6XFZgc41rwP4Yx9ygFCitYFBRBjExMHkjkNwjQk6Sz1HYrAGCRyqcwdUXM5CgsCfnry9mBh",
  "key25": "3B8vw7QGEftmi3aE6voeq9zAuGvhpsSo8iAU52Bk3C2G6y3Rjxs5xhLUpGHNZbKwQTvTDYz3zqgrRz2r1nAtKVZC",
  "key26": "X5P5kBW9PnRJBxn1iR39CnGkT1J7XpmBHKGaSHLXH758X6TQtv7xsjmAR3iV5ToWtEiHr9pGs8FkfvfamxaJyjt",
  "key27": "4qizZkAUygN8URj3ixvryYZd52oCFxXFGBhphUEhZmhot1M6ad8gGxWAf4PDmjd31GbVTA1CmrS2DseU7ZQ2ZjoP",
  "key28": "4u3hbx4dFTiqdCUoQLc4FyknqtChmv8MRo9xn5VtF6YfyrKZTSaCcCye9GsJWwXYgWFJoAurxqg31v6HyWSyznD8",
  "key29": "64WSgj3DrR7By4RWTtMrG2nh2xNywrWcRt8WWRa9xyJg8WRh47g37wpCwcBpHv85RXPgbaRhq6emwAonJvHAzwcg",
  "key30": "dF4xxQGRLm5sQaJnMW12o3tPxUVuZJdF8VsjfLVFbpo36hiHXLba8bTpudcb4r6Gymh6NsPiqPz7AsbBu2sHhdY",
  "key31": "2Msc1cSEAjEMbrWkfuvGCSf86r7uhpoyGh2bnZ6zWJUVob5gSTpbSXTCmPVS4Dxa7Aep4mVVViTxUB3WzGsVPWTH",
  "key32": "2u78AAkvQ8dHZgq5ZwHNReywKMapRHSwwGM9hLYGRVySYaZY7bUVf62jG219nHrcMzTk8qt2TDCommEhDoLVpQqc",
  "key33": "4ypNNjKAVtzBPfeujWii9gr4KjY8xVvEwrNUoBkPZjiM4S8oMbpDJLNkJG2hNtVByv44pTWEHbmzmErnRhKtxMwa",
  "key34": "5zZDgk4ZPcWScV6RZ9NNCHUw7LQtYcrqaNhA7a6Y1VpYNNSj4Qq9CrHku6Ko6a1YhoYGoWBarorHfbXQeaJz2SyH",
  "key35": "3x6yh5FDxP9ZxSThJPMZRFMZqaoVDw6Kso7sQuw6DAURv4DfxXHV6FxWbzYjZ9xmSy9nFqjF5C8Lv3cbw9SYgPG4",
  "key36": "L2duWjhdQhjem6xJwrhjeGZU3i5C59GpLmc64LmkwKdinoaPgVK4GJ3rXqZEr7Bs2DUgij8u2XZ1zWXN1MKscgD",
  "key37": "4dDT2YLwU8YR6mYLVJXvWk5JN5wEu8SSpM91QstCMgxm3JmgM6RpiwfhinTw8gCZ5gHtgbZ72ZZDV2CNQTN2AnYV",
  "key38": "3fqwdgJ8DFfpC6KeKqosTghoBxP4YedaNZjiqxyU5FgRoKfZG8mAk9KzBdjG3bYcYaLYFGzCFEVHyiXqzs4iZJ4D",
  "key39": "43k2Jz2JXaigykWWqaPdtd8d1zkDfGatk19HqC61RaXDnU41MYfx2ojVLddHzXmq7MH7ZJWNK7VcUFGKQMS5rwjF",
  "key40": "XkQauzR5BxudaV2k8jB9p8EuuCDHyth85XxTWR8i6N1kRznHmGEB9qj118wuVZok4T6uFUUGwnJ156YfrbU3ejx",
  "key41": "kPRDDA7SYesJzK4xoYRBsb4Dw3Y9zumfHfQYsg5ghibtbkKv86jSBaavd44dF9aMxQHiS5Mrn3bYENn7YX7SZ3C",
  "key42": "5BKy5LZW6jFAvn73GNtTMjq2goGH6GaMdd38grsJ5ktyG3UhtmrWgGQWVd4i958MD7AgET6Ux8JRFN7VFgfzpgD4",
  "key43": "tUQA1NxXdfMmfMaE8nuWAL51kDENpYXauncBjSnuEELUT8f1xvaBHujz6kMCREBvhfFabPHZhGHcm9qtQsDU1aV",
  "key44": "2NLbGGrjcoy1TRaVMRmhQcendAtizLrmGzJVPgA6HU9u6yfd7n8TvTAwj39XGxo66JUfTg7q3iHdwpdYiYNrcBV6",
  "key45": "3J2QdTJn4qPJHifjdTaFm6KY1e1UYsrRMn8w79Gg2cLmfji6t9azQi4a1yP3UUtLX4mkbVYWrewoSQqeMqVifoQX",
  "key46": "TPD4KMPhzwUHUKincH9qrZTtJoRNLc8bj6tLXSNjtwS7Ukwp4vokj2oUbk7LCKTYcDR2Ymgb3vdreygBHQDh8QE"
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
