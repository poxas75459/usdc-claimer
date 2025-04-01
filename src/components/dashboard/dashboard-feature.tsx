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
    "rYyNFiQN5jrhHreSf3ztUtdRNAMcae5jAjnEiK2zSe326qgU68muLwrRUPzZNx72KvPSoCGjgBQQ3QKwuC8DVGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25CXHBmWZqn8A5Zwmh4A21y37M3s5VyuyrjRitWqAC3LtrLUFNdhvNc1HphaLarn8ss32UNQqeCq4V3rPMGgKpy9",
  "key1": "2SmzkqddmA4xygDR5BcmPEhLRKqEN2eVmFssiJS1Jy8bNxSiyctWtZMrBbJzGZRL2K1tQbcWVHzxNLRVFLSjhdVq",
  "key2": "23ojy8Xo2g2noA6D5wSmhkeaYp37bPu22xVDCQpUo6bmkW1WnQVSfEKS7ZHzG1JFvPdyTD1DxQFy42NBHzxLNiDQ",
  "key3": "Lh2aN2VnCmhuWmPWQJjpYv1VQcXujnCHBKB1gfrwDDpR7kYMUdX4AN89DCw21kFCpnmXfZgDBzoN2fFb7xRmhbU",
  "key4": "vdPNrrZidAuz9RY4DGjhRw8BwNAdyjSbPUuMwxoDunjTz25FQBUs4Co8ajsvnLQVQsQ6jpjNEkobVNnvwaxUXLM",
  "key5": "3piHprjuXad6Nn7x7KgrVtTEm12RCzz7LVZgCVc7f1eRxB7xiwNfHHrCUDHuXXxKcVUzZkhYY5w7N63XwoZY3mh2",
  "key6": "2SmyK9cQcpznNge4PwNUnH4BqxQrhijSkWE3V7N9Sx8pPhYLCuxVwvN47Hrw3S1TKeWECQkoRnJeuLUNi3RRwaYr",
  "key7": "2hZ2HMT5MneYor2f4S1jVBchgLEFURPXMddiMdhnfyQuTdV467KvW82sJBfky23coomuypxrwyw6g8nnwTgaupjw",
  "key8": "4NS9nCAPP1iYAiimEwx3ug1r5X6gTxBvnX2GBJF9yvUWxDBPDypX3Sr9K1D3pingy8ifM2tMuddqmEs8jXz5nVjL",
  "key9": "4NP1air8h5EQF23qJZKL8HNqwjrC4DR9buagqCga77ygBuPBdBkqsrv8CjSC1kuc8hADFZ3emi9iFpnqzJjVD7Bm",
  "key10": "2DvaM51oCND4e2ZyNQxQvLNR8qMTHu3zQpWgPdjGtpV7uhXNhni4DWfMLxQEnrPLTwGkR8bBG9BKonHSjZFeJdFm",
  "key11": "43sD2UE1P1Mw6J5U2qbgKig9ofKSq4E3nXjAyN6qYZrDq5EGiRkR2Gw1N1rdybZVdGZFYFozdbYDG6zDcMjz9R5t",
  "key12": "28vkqmbbdEzbXXe7m5DedHCiqRLqSFoJ7oDgFj1emDVH4wjR1AGviujYRk3f3qfbxnhpFFRi5e9mohZ9umMQA5PP",
  "key13": "fvmtHtLj18DaHmXfjsNuAQFAgWAGWgUpd2SHbstQpc7hBERSyzrh22sHEYSxgMw1KEhukD19RUFqBN4cBZLdeBE",
  "key14": "3fUzQJHw5V5EUDr3mrXJkJymmZhJKMn6TPdJaSAT3mmAw4wQ2hUBLjkZJPM2xGENFqRrvcTnsA7A1pJcRdroZGpR",
  "key15": "wf2WuCb9BvNk7i71yYoNMgBLUiD3XzhvLbXyq36JBRZu9YzKJnRETLJ4qoy7NnbTgEanUzMjNWXK2ErEmK8p3J1",
  "key16": "z4jSy3pKmfdzXmcnahYZPXrCyfYRn6TK3f5BdVTSfrQ8KTiMsx9zL1Dg1LEdiMscyJKhRBDLXCq6RcsjLzms3U2",
  "key17": "2Rb5By85b1vruaDqRhQjXF1CKXXDXsU1nfmicQJLEBhq2xeePnk6hYJFeAPVNAo5adENDYURmjFTCrMqoscMMhHD",
  "key18": "5ahSNtuDF7qarSXkRZtmv7au3mmZ3UxDX4nLa5Kqt9C4joNhGbfwBX8YQZ85DQFAyYpabkn8sds9A5FmgMrFPDCw",
  "key19": "2q2s3JvLZ5xuqqudkvbUkGtB2SWiPA6DGb82fRdRDpXmkeN5LSQZ2zg6bTSGQPtGh4eWrQbrJgyqKQmP3RY3Xvrk",
  "key20": "3pueHQk7W4oNWLDz8HqNwa1hxqaTWw4MVob4rVDF92UvTS8NYBmvaUqjaGkx1RL3AxKjK2aWGN3FTXSLtQTpz6iL",
  "key21": "66S6ayVyAQg4bc2zkQe9rYzaQE2Yxmob36iao38S63XacDeAEqTpvyG7XUMvmPg2CaZ35QtSsg7YGrqRhhgyigRf",
  "key22": "4PEBWQucRb48hHzhcM7dCLKAs3mg1aThKMyT2cA6v3Yc3UMfc5V7gUBXWGYxzuLzWoK3mHb1fVXNWSEBK1i5zAoL",
  "key23": "5sKKqP4HvWHAMfNggBWitq7xLLRo9ystirysYAGEMc3tifniRqdnGFgGC9vvTbwC2tEgQmVWZaP4VWqYzPBpWkgJ",
  "key24": "3B64bnLjpQSrDm4j4tKV7ZXYXjUBuqTprqkXZekEj999GdwDC9Ut3vM5VStzrWq7EvTc3g76CMigo9oBPzwoz987",
  "key25": "38hfRNUtMrY5HaRyznLyNncDZNQ1KAxzxdKjVZj5MFhgj7LpsXriU369p5DV62MNunQrSVR1wktQxSZhtakVEjH3",
  "key26": "3X4L1gDcDtqTX8EoJEA3sCftromGQKszdJxMdWAHwDCgYK3t77mtpSk7LZeySxwNRraQewKLdbwvE5RjkqR1WZqH",
  "key27": "4rcHRUU1HqyQSZyeGkZ5FZyHEFY5VR62NEU82S5EDzvH2pwUptbPHQCBrhXLi1UD9MsquSRyY8FxRXBtuDcXkxJy",
  "key28": "5ZTUrsgBwVtLtaHuBa5gyG4LY7LgtVqNDQuhQenaF9xVhNEeZekT6FNVQ8V1sSkq1fNm35PFEPcHV3fC1Vgn3pAe",
  "key29": "4S1Hk6gb6n8jxEd4zKEPe4mMCqc2qxpBX1jjzWsnrdYBBqzYMePzxsxsLSSoYk5kD1c3S9ohps8bqmAg9Xq5DvJu",
  "key30": "2VHLkTMP6Nvoi6U3bvG5rScCwo7ErMP6SWaCvJnRG6YP3PfoSDoCjd1S4wixjZZyvjKicKKXkwoom9e6MgPMDQ96",
  "key31": "hqvB27wpZGHnmm8BRWnQLjRuTed1R2XA3PLzcFaCZE5EZ2uYM7kNiLzuYz8rgV3v7a7nLqXjq7sprU3dDTc5ooi",
  "key32": "5H3ig1Uc6hdr5fv6afsyAbkXHo5v66n3pFMakvJvC6sMj8Nkmu9AoGKJ5JeKp3nNAZ5yenBEkUq2hd54LmrCsxQy",
  "key33": "38yAzEZtXQqdH2i6M5ud68sEFbw7CwRAUmbsmsxQDPZ6CbThK4z881NNt96sL7azDxyt38JZowLdhr7KUGRowsJf",
  "key34": "3vwjogdrpdz9FPzRKRMd4yqwqgbYKerKgP4S4qqucjWkUabvS5h97HA4VpN4CpFqLsAagD8rMCkpLFwHfRxT9Ewc",
  "key35": "232hRRi7S1AM2cMm2vxUq8rRMMbXumrJpjBFTyc1cwrdamN5PNJRbq5ZkfkN1b6qexkYJGYTtDz9eY6uCT69tSWN",
  "key36": "4rdMvy4VbKYduTffjCCgKzQYsp4QjtHsKV3D7D2xc4GqpGrQENpSt5Yd6cVUCRAPTFwjp5LoNhbTr4HvNwMvUSoj",
  "key37": "2D7VE7HVEJbnPmgtKE6PUjRMdzA4miq9FMrYsZwhyCdCoS5TKatxP5qeFPwYCmyTn93P5ufbB3ebBW5LvD6HLa7A",
  "key38": "3J8QnYJyooAUoGFW3XeEnA7nq7nsMzo6Z9B2XZWWEW3GtCpCF4hP3DVEmV8PkJ18qdPA44yJTVFbqAvKyxmNikSg",
  "key39": "2dQoayo1xm4hqmZtxpskb4oiVPmpK8SbtaDET2y4qSQhV1QbjYGtwVcbVsurEH1n6FVZrQDVfq6FVia5FoFwYvzq",
  "key40": "4qAnNFEvmikK1p2JSRV2ebhBL5uGVLEhDxGAVeEzsGrhvTDChWwxnmd9dqTFD99VzcAZMp9CWiq5yUQEDjYwwHij",
  "key41": "2yqKBnWtbadyDgsccApTfVNYeHURy46SmskjSfYhm644kEx2Y2K9TDtoWCjC8wrcWYj1FuGiqWTDYmDrJVYRoiEH",
  "key42": "5s3CZGCqUXNiMZ6oeqqjxEMZxgmy8t16Zgdab2pWGGY7xDAjvqhd6ivxhCwZdRnsMt4vRnJLyjkS5B3Pt5rR2h9z",
  "key43": "5bbAqhruPL9WnRZfs8gVnjSsg1XMTahG7Cw8wPN7VLH8tAoUAo4j7kUTrdkNdQpACiDLrf7WYuNhYBj9VDwLLKpj",
  "key44": "4VN8TAYB3CPjHJfsFp9HvANwCUcCUpYBLeUouoxDMYFUUQECsPdi16udKQ8i3BL4QjqT5uFC7iJVhSuo8hS7KdmN",
  "key45": "5qdkWdWGTULUwBR8XsxiUpvXtvx1jEUQUSHQ55zc3drSuyVANiSMdXVjNtYdvFSiDnVXSmcGzvDaYfYTHFT1BjVT",
  "key46": "487YHQ6Xt5dU6Ut62zLPY7z9zbxCRZGcyTWJiLEZEsBBnQhxAimYQatQgtPJMuUAAJynApSiehDLMmPzjpJGYMu8",
  "key47": "9anFNHZQRfnqyqDcL7WeMMLX435KpLHpE4K2Ju2kqQUtkbQenFL4F5mvWy9YSjbhRtYEvVBFGquWb2uCN9C2czm"
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
