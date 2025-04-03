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
    "4nwMVtLSC8FNUshfHdqoCj6bUY1PcQN2ojtnfpTMZyM6BUCu234K36TEQPXQaLPWbtf1kjRrNhf8U7GA2z76FB3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xTWzrUWGcm5kwUwFRZUW3W9dS3hJC3Ho39ShioV1TVSxiAzXAFiDJv9NJBMncnob8ZECQfTVQgD6Tp3kLHTu4jF",
  "key1": "3AGKkxHoEkcDu6JKa22qNR3q9owEMEd2484SyG7VtTP71y5DuiWtK5dH2FwkSgPKeTQVZh1Abtrrzb3Rby3ApFx7",
  "key2": "39FADtKLHVz9gHsz4tposAwpdbbqYgSGUGNYi1bFLNbCWofJmHR5agRVDrAnKnQPtgSUd77B9Bne6po6qCnHv5eH",
  "key3": "4fgbh983pWGvgAR6BJMEekNiNnTz8dnwip5usZoaGAatdDVsAGeBGyQmAAa77CsNRteSQ6JHGg6hsfH4z39ShYJq",
  "key4": "3r2K8F2fwNPZbipTrYwURysGUWsyTkHDC4TH44EmcCyCBPvbNZbiUZSS9cDpv74qhsCemqPnNQCvzkQidaxcqRsg",
  "key5": "tJ95bm3khMdVfzcER9S4vhDSD2hbrpFVCc2xhnRia7uGRAFQTba5Zhbmtrt7SDAej52KdTsJA7nJsu1rLXh9bTX",
  "key6": "2FxQokwffAhbqjEXUot8mxCE2hyYCtABnP8uMiBFsVNDee8SCuhVdhdhqYbd5THqnJwUFZzD4nLi1zrkqA1k8bey",
  "key7": "4JNYxBZveyLjFxzWQaNmWfEvq4XLGsixjqRgyKUHmme46skJJWiTU2HjAcL8tW5E6wjzYtjE2Wr6o1UPqiNXkdR2",
  "key8": "2BP3gAj8fC3NP9BobeHAvZcu3SJEy1UmVWTKbh7md5LzAt45gcz7f2a5rppG87axApwtjd2fZ9JttLuD3Nv59Ghu",
  "key9": "22TWtP9XUPQq7PnKXUFwuMkES5nh69Nw3riZVBAsAkebTFeBhA5dF7h8cLirBDWyAc7XnFhCRLw8gJu7Ggu4FkVG",
  "key10": "5yc3jj1NR4LycgMjQvUGUy66akCZYenFtEVqnEeeShqof4KLjijSRE13twEB8U66hTbre6ELyfbBRCjej5oj75qX",
  "key11": "4DXjZqp43iLUjAo2PdDcqEWAMrrvi3NmFvw228CSmrJ37fPwfoQz9fUfXZ1o5HmZKEyb1wzdMP1QDZDfPnzpM1FA",
  "key12": "2WqGk1eXr5uE748ZuwdyBfaHsdFGgCfgseZgKMrWd1mTBxCKCrcmjGQHpjvArnQfct937dU4xRHYLWLLT8cAg3VN",
  "key13": "66bNAp2G6RcEEAtYGMSV9F56dTw8PE8tdoDKfkkopZzSk9VPz8cjLAsYv1SQi6mbn2G6yGYxMwYQxVRYy1wgju2L",
  "key14": "5tmRjPf85bu7bvU9BSAPsVJ31iGRPR9Qf2kEx2mcGGPRKHo7kZKjR8593HLdq4aAM1aJxuTgF63TZ7GS1f8Tpv46",
  "key15": "66eKAzJ6ghdT69atQEKJKekewvrVPJnHy8W1L3tUBdBbGx2jX71E7Qdq44uDZM6VzRQhLR4imx95nrPGP3MbW8RV",
  "key16": "4dNEgnHndn95rtv14hBG4Qmx9MiympA3wYmzeWdVDVtHfYtNepxSBgCkDrJpoCQD95UXzWDrks3jtHjQF5hV3mDw",
  "key17": "jgD5B5pC5iunT3of5vPY52hCRJZPYrBaJUQbYieQSUyiJhaas3n2r4kxHZx6aZe7HQJ9WJxX6g7sXmkbkRYZE7D",
  "key18": "dy4CYN149bpX1VnDgCMfsh2U43DNUsiGbdjejHPNyGXFECRajxPuc8oRa7WaBoQxQAfB1fLaxxzVibZot2FiumH",
  "key19": "5zELsmahfpNue8G4eVsiMRkqdV7pBVGRMMavE9RXj8e1rCAsX3zRNiKM738QwFESNsZDQv1dhDfj9qbmjDWNBg9E",
  "key20": "39kVr2MWmkCo18bTRUdXmART3eUhdcPEg8uGEEPbmdrWN6UdtAYQHp8N1caYC3UDW5EEXkyfdajQ4TSdFQq5v5B4",
  "key21": "3DfYqwA8uyhCtTGLEH5fTptRGenNRa6hzBHiie8mQ5Fj7rc73Aq2UrwAgdnKZK7JQSaFUPjZTtLeFpKiKkw9moVe",
  "key22": "38cWJsc7yHM5BBxDNdzPRQrwd9ceuF27wRJR4WcxXDvq5jYw4Vs43oftzDS9ZDwfy2ii8BaYN91Qu4WvWa3g8L5j",
  "key23": "271xENZqdLSkzqnDB2xVRw5QXiEUaQiy9KPaNFVFFQz6L8yFpciXoL4BMT5DC1NV3Y4hGGC8wNeGacKNZPTXwsyd",
  "key24": "628TPupzVWdgF6uns7AfAnXtYRJGC1qrRJxpJ8KBEZ6PktxUQTkAjLkNcKeaxDFDJ1JJ4rBtYMh5Pg7oSZRqRgx1",
  "key25": "5CYbSuPUQybw42zWZvHywaxMJiybmM3tV9DZPR9kEo2SqAC8nFTd1xpuf5mv24Dxv2b7RuEuTiAxRNjMtPZRhn6C",
  "key26": "44HdKWReubz1YRs9Mo41n4F5XGQPmapGe5wK4VtTZtcNgjjc9Z1MkFctqr2ZVcpbft2eG7t2vKo7m7DYC5FbjN5x",
  "key27": "3MPHh743jc3MahkZt1T5xCPLVFj78mLeaAn67vCE4eoSqF8mYwvTRLjWBThEAZwEZ1BZibUYN5zzzZ1Erfx5tfCG",
  "key28": "3oTJD3LPmveUMEjZyUy7sSj5AZNtnB9AQNaAy8zNSbdt9PbTWvoE3iPYrtNN1xkSrvkbVsadEEcVo9NHtNZaYqqX",
  "key29": "5eWyaufMTC4zFEatdiu4jP5LQWi1PYxfgQef8Fr5zuSRo5bHCSYsmeS4BLZuxYW1AYBxYGtt8NFkLScN53BBctht",
  "key30": "4T2GUoEw1betTKCyXhGGFoexJi4hgtXspNJFYZYP5HRJjz2UWNsaphVFgotRfHg8F3W9E2JshUmGo669LFne2TY9",
  "key31": "4E5R76C1pgH1UhZq8NbTnaQuF7updpEQDQwgzNKCdyW9WjWwHnDTQWfbzrT5d6w7QdMknwsBNxCtYptbC9R1KBAJ",
  "key32": "rTAT2A9bzuUYhQ284JHCDQmXqWqUWN5SEyjiupPTQePUmXstjPqi64Pi1GJh5wfuMFcVTxx5mU9LLhSiaoAvbFU",
  "key33": "2WhCZTq7xcgpNx7Gm8wLzwgxyvbRZoRu7dWK52HFLTo5oJpDCLEapa7wXuVfAJ79cS5XfLcuSSz2ix23Ffp2K65X",
  "key34": "3Eq3BLQE9WDwN1Amywc7ccAGUuzZEx1TC9XtkLNwi7VQHofcsM4MfomaNFkzBtDNE8TLrKzbe6V3PCux65EGmpj1",
  "key35": "2q16chqaVuPQnhVYricKwrGTNnJ7u9dTphdN4yMVvVpQYjffm3m554E5hYS3jw42ZTkX4yVtzWPqzq6bZX1Agnox",
  "key36": "5y1M1GjJSZoXZJkJ9cka6NsjFo74nVzfc2Bw3g7CxJu4T8LsmfMYhuGmimytbSTAA1iEo1SxLndYjRRKsLVgbjbX",
  "key37": "2WkgS6BDNcMpiFNhdZjjsRK8EgCfjTrydbYYAZaYkqoKt4q4XYSa4wGJfndUY5MpDGv1wrviUBeRtTZCtk1Z2ZbB",
  "key38": "2pdeXq7PXfMymC7WgYXYpm23zYpHE8ycqrJrkgqAkQ6nSDkM3Xx8XjqixYnZ1ViFafYEMqjRYsVpeoAsVVtpHsZh",
  "key39": "5byKLKVpF8rQTcPtbE9qw2quXZhM2nAMKXJ8DXuXFx5XyVBkHhEdtc4kKbXnMyA7wapGCHnNa1RahSJ8QyY7YhNH",
  "key40": "3vgQRFychV367h6tkynyeTw7ExMM9QnKWMHvv1RAAVPG5aaCtj2kqjxPHGZ8zCdV2ab2uruzHPKCeo3wUBS3RrPZ",
  "key41": "4cLTKvD5SQtSqjmmD1Cin36eSvdBtdsMgeNXc5W4cPNdZGSkk3rrss1GtLcrybjX8pwGEXwqjZZKdUUxB4Tfyp3f",
  "key42": "3QM9oZZ4kmB3qCfFyjsWRBQLwFqy3AVZBqNThtKjhRfPwQuP8F5D7Q9iJRsjWJu4A4i1DopEFp3kefnq1rbYDwWm"
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
