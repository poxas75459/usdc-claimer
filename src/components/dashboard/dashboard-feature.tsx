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
    "JUiGFoMf4BwtX6fiTsWu4GDTvFkirUjhzoHpmGMXtTWFqvZ3s7mXnyvPvqPcfaCPbCGmX7FsLf9unNEX8PZbFiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LS9fZWt22WWiP88WuNSyw7Xbhh6GDoGw1mxdpcAz9G3hNktMq5u8xW5BycuAUTMbuXwvGSD7WzWiufSoPFc2heW",
  "key1": "2Cw1aPk8wN7g3uW579HXzcW4cp1gREqDCrEXbs8iZt7js5bfqxB9WdqgkM6KACo7jtVjseJCn6j113u84FmhnCW7",
  "key2": "4TFQ1ac6sLAbzRxvTPQaYAYezemTkdwaDS1B2YGc5BD5U3kdrmnyTjkypcydXvJ8fiuaNgvrXkP6oCeyt1rPrLDf",
  "key3": "64tuEZUs3hyv8S9GZf5ztBWWv4njfx31vhHjanANghLyyUTtbbGYH44zusoU3x3Hz5khDyxhjHie1fKDjeuAjhqR",
  "key4": "55DksGSD6xVhZWEDoW3n1VR8taHkEP2odPv4rthaJDwduKPmvBrm4vyJ8hSRg5kEJfM3YWjqUXB9HDYmP3weTBcp",
  "key5": "5qYuaTkLLYvsgecwDwQgCEaVBMZeRHk5a9FpnNDXJJRBEDWYJiH667JqLWBZBL3JiVgqjSWCxH1XSYwvRcDGajhM",
  "key6": "49omc9Rg77K8n58Vk7d2psZoYAeM81AHbYc7QjBzZqB9aNwnUp8SSeLWTLbiuFJ78jYWYTeVkdhmZ888LpfCifQZ",
  "key7": "3CsuBy3y1KDEHYWWxfNV4T2ikp28GWteiYFETcdRm41o1m1CuP2g9SicjhwysVZLBLCBGUcr2vt3VjKgUDHSN7K6",
  "key8": "5SubxJJhDzrJqpEpZ9eEqR29Qfq3Ph6ryjZ6ktcaU9AgreJNNDABBnVgsxickEAvREqbGhwV82FCmYdzELj5rj7E",
  "key9": "2HdAX1NNAGZCuaUW58A93NcLGdkvZTJ3iyZijEEyyTbp7jVW9VwzU4x4q2tkWMaTRF2epaDYxpLDJZKFXQfxDucW",
  "key10": "3xD7dWYYZqS23j6YXdem7PNCB1t6SFZsocZm6j5HtwC4Ff8tBGTEokCoToZuG6vero4oNmy4z8PWAUQUQGCsgfA2",
  "key11": "596tN5NPDvFWx4a6pDosYq3DFBJv2gBox1dskQJFw2H43EzQRRzD3CJf1L3izgjhEjRd4LvKVhsf2j3AfUGEfiRw",
  "key12": "3xtacaNMyU8Hw6XZsD57cGe3XNM84bvu74v9yV8Fz1gVbxU8Kyom9u8tKsisyWyBwrGW4mBhseNML3iM6Y9t4gEa",
  "key13": "2gQaSvFvPxVQwx61hmxk2veKCtRME23L3gSt8eeWiXHWr4VXy8hWCQhnK3HhiPMg2rTrRGNcaEtTAw7bEqqzdGe7",
  "key14": "4BJotZcWPC5WkJv7kG2Mh2uFPEXDY7UTTZDjjXrG6kPMjcPMSYcMapVsMNDHCHqTcLHNQsU6AQJCV9egDpd6EkWM",
  "key15": "zzeziPE4KrKELTT1tECMYotZVKghU4qs4vGDtyiBfu4nDSj9VyooDUtgyBAKAdeW5LS2WKXRZQZYow4iB1dQXWG",
  "key16": "5CU3GmbBfZkbZW3J5M4HK7eNEeN5MpFzDCvze8LTWTkueP27yqPeeL17GcHLdN7iSNHShLbQTDPf5T9ZvPUtm9Jt",
  "key17": "3a37r4NrubrMgdWpLmbvME9hDT2fgcWw1UZnXa9pJonnQMndT62wt9nsHwQTb5ZeEY8HX7TSiwMiwaDVgygJE53A",
  "key18": "59Yiq5VEvrX4z9DnDVnzyezJBr5grVBABnsuBMtKczA489g5SNMtDAhLKR1XVstHCe6FWApSo19ogUbmyT5q6aLC",
  "key19": "8YHq8zTUbrrJBz3cwdzGd6w92TjitDC8Be7qdMmtxtPBJ7CGnbeNcznq2ib3PTXCDeyuWVBVmuxG3YkYdhfogbJ",
  "key20": "5vdHyF9aDPB3vSFh9v5NQAQFjxU89c22vNRFmJVuhwNguDgNggbFHNwmhmckxAw8GaAeW7F9gVrNDZADQBM1WcwT",
  "key21": "5aLsLrKeDcQAhf1Sjog4Xg3d3wnCrp6i2u1nsDgdVJtt4fHncSA9SSuVExaLsQwRvqT5dfokp57cNnHYxqBius1X",
  "key22": "4NijWvvGdhH2PZR21TEyeD6xCWb45y3Swsrvsdrvbq4WT51jBBijveW1nQfL5qL5wNWeyugi1KQh5hyjDKKdoh58",
  "key23": "62BAb2kX74dRi3Z7UcFspmzLVjTrCncTch5Gc7gTEkVSJhfnduPoaXUdDJpT3QHznm4KQEbHs4gv3tyknb6rjovR",
  "key24": "2k67VtfZFMgBK7es2oiJKXcmwG7Mvkk2DKW3Bp3ifgxcTiNWaBWbfwHdpduy32c2P74ShftL6cviQpqAbFKzigaK",
  "key25": "2BabjAn4g7vdq63dwuFyDtkWi2DqyNHRYhHczEboEFPph8FtHjx6CE4TBWrjpeVavM6mj9qX5rGc7cQy829ukSih",
  "key26": "48zzsjySJXhNTtSXWkZtbDCwdeC4pw8J5rh5Bs685An1LKzUbJPHvoVepMssYbrTZtB2HkBHZiomef2A5RJ6Lxto",
  "key27": "4c5uvav2hckKVKcQ2RFFpU3DpvsErSZ3i7kYTLgtDpcSGFDt3wFGdP2EekKyQPH1bfbwEQwmeemHyS164RYsfEgV",
  "key28": "2d5RnqxBdBHX4iaE3AZFxb1iZsoiv9XWkhzm2L9NbkEDB1G8FuRaYKfSb2meREbBgEE3tzg2Ek6d4RhJYTb9ZGL5",
  "key29": "5ppxW4DcYSJSRjAfhbjuXwpBKtMwAMPvySQU63EF7L1izBaRWMKV5d2Mg7mFsnZgc2hUABHRv46qnq7hh9BpeRGG",
  "key30": "4rYgsQ881igiurFVorXUqgjQcjzUTZWZXhpSei3h7ZGZQ9XvGSgCfrmQqsPUvNDahvWfnCiUW35ZTLuiQMxVZ7Mw",
  "key31": "4Lz4EASha252NrCq5mBsBArLtEXfxPzRWN2PyaVxKNxSARWb2tUSo8ZtMykKUHGB5pPXgS9pkuMrWaGUKq74i5Hp",
  "key32": "5ocGQjEzaLRZfudvyiaDyeocVhNc45vaCA2TYUBDC9BJxVSvMzgV7dqMrdTu11KzkAjgSAQ1QW7xTBTEEQXutdkZ",
  "key33": "5yZ1SV88yY9WbvEgqQekCtS12vDDmKBQt2kaeiufn6isSUUFLhEN6fan5YxTex97n9KW2XNmvxm9Gvw529mmN3bw",
  "key34": "5xqCGNJDQzJjq2PL8JXXhrNkfATiQPxyFpiHUzwnUhztt5LybWf5DJofgTrt1M2Hm17W2mJRbdkrc3DBTxwpr9Pb",
  "key35": "oFsvyke8wyQTLcTQHuJcTuGjwifp8BZvRzznhF5xrg4Jwe5WwBvsP7yb3qJ7xTb3udSo4Qci4UCK6QYYCSG8nxM",
  "key36": "5jAFtnj4opzoHgGQ2Ku8K79LFxBF1do1ct83R3W4Sf5mjfCj1j7fbgr5pYRnub6ZsKJWG18GDw7fXyWVw5wej353",
  "key37": "5MqGGod1Qz9Sgh6DADzBGQnvrqVKBmcQwmg8sCYQ6JUngBgwtso5LWk5jj6u64TpwipKYSGpGLZNAmxApQsdBLw",
  "key38": "5Gs6Dayd1h87nvsEJKGDjQahDPiWpJoQAaRjWU63PpY3XzMgvLmGUbnxbujvMT6zH7CeDPcUsBzCA4j6wqGc42QL"
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
