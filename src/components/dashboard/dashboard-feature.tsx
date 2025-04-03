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
    "26UKhnE5KhhCDn8V44HSZtRTbRD1TPVYusRWDmhJcUvt3zn6KJQefG92KdQ2zTpRXEoTqUsAR7JkykREwgwK4Uhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L9mQWk7LeM23UmhuqoJ4pSMSCUrPm8LFsPs63oV7dD49v5mL1WLNndXmv9mWmQvGhs1BSp74dsGgzJbR1TDKy3w",
  "key1": "4jKdoNLJHM5axG5CbsPL9riqZFoeiKrV629SaTywcpRSu8ziV2YG6pCnH8dXq8GzcGzC1VSB8SzvwSuwXcjS42Bo",
  "key2": "4yAdie3LXVrbcWB1iDoi5c69d82TRRq6f6YFDWQcBF5QKb5V7LZ4fdcwjSg2hNqVXCwVfvcRq3tomiDdovM2FZZX",
  "key3": "2xJu58vGBViB5Zth9Pxjae638uDWgzfbsrSJnh1XQCbfDFhVaD48bWJA2KKZoQnmRBiw6YT5NY6gnR6cg4oAFEKc",
  "key4": "646Q3GL9bgdmbcHytyHy5XKpAdTkdGSxUgp7oEQmQEL9JRvKUJ9cSEj6sToES7YRMvr5G2EopVvfWSyDWnCeYSMu",
  "key5": "4WPE2qCe3tdQBXGnJwNQeK2g7HbEcYsm75pMCg1w8ywKwaP9g65Q2T8ZwnQVaNqi15UuxaSFSPXbsmeSXBZHFXaX",
  "key6": "5Bw6HzneofGTLfA794c5NnRt7C7b6cUiNTc1uXdHGP7ePJcRN1EroeCFWByqMbkjwgXNkuEwz3aP1QWkfJz7L8FA",
  "key7": "2QeF55sGJiFdJ1fSHc9p95yT5zaaZRuPnKLyWShDjbDgMQrfdJDvjCkeQphNupVxBAu81bQBwVFXyrmHvwzo9hqf",
  "key8": "63dkD5tFbmeyYAV6T8sgF2TdmcL7mSxSGMrecWoLxZrZfSnwggmMHE7g9W1mHmEHiLmq1LLrfaB1Q5EdL1ck9uMH",
  "key9": "5pwUfmwvhkf87pY6eqCHCLnV5sFhtMTApdoEUyrTbo3R3dEgAQKgwJnzY4EBko75XwoXXPrQaDdaebQxNAN97i1v",
  "key10": "5UHZ9BzsV6yuyjNZn1c5mBtay5sEDqhNSymqeBU792qWp1X3dWg4Xtdf88cNsAhkoC8Uy2ERMF4pYiVYRsvKxcu6",
  "key11": "2VU4HC4wum5wCxmUoeGC5yHrNo6EH8tFES2Ng4aL1pVC2GPe5R6yp7hCH4uB2YicD3pKhs1UJTHERSYJHU3kuBnB",
  "key12": "5x8RbVuGueWDGJLH68TBGRJLrboHTftBSi1fWxxZ4JEJxqdGKLSfExHbWyRSQt8WVrBz4jrQpYbY3dB2PeUR2bL5",
  "key13": "3c9Sopc1XthbBH3PXcth2MLKWCtXq4izBfb4eV1W8ip4G5z5UTenqhDhyf29CtKnDBVUCPsutKoNQWmtqFe8959y",
  "key14": "3SXp9BRchhnJCuGneTM1pZRsLoMcmz9QMsVMUiMVkujHDrMrxwSC38X4eedsvNtzPGPhURuNxJm3NPGhzcP9wpnr",
  "key15": "4ujcc3pkvoDqPKHqEbr2Pa1PDJ4AHaE7HkV1KDFtxLJZCrX8uZFDypvWe3YsjV7R8JcM2qcbrWvjq6YqirsBfqcg",
  "key16": "2eipCVsd4c77sWHHmhYDoF8d2Fuur3b8oFVWpVPmdxXbdAuEHWd8SUcRuNfBvHiHSWDbDWay2WtmqDSKHqEYSbNK",
  "key17": "2t9CZEbHTQRmo55xzm117w4D1BcPiJ4r6bGfrMnmN529JbJGASbYM5ZmzPnfCheQY7xaNTdeP7bZzMkUrMYYE9KW",
  "key18": "WEVToWPr8NxkztTeZj8RYPH7nJA6DsjtNGLMWLkUnfh3aLJYVjMFUKgfrm1n15Wvtw6vfPihS9cA2jnzSWgRyZR",
  "key19": "3WRZovpCQU4zZfGKSpwvuia73Ye5BAyKYvDD253hRojF26mgKVdWNGzWtzQL8tahtsnhLz88kxrt8zpNKMk3s2rC",
  "key20": "363VKZDbxXvjVAvG3ye9PhkjXjQjTdRVPi63741DJbVstse49SME7bSkBC8ZcwXZkK3YsFcZRCiVSa7HmwGxQu8",
  "key21": "9hYhwANL3vzFciejXSxMUAincAxt7C9yQqEHRqmGWf6zhRR1arcY4QSjyrVuHgBCSWQstiZdd7SqVdUi2akhuvR",
  "key22": "2qub5fToFUiVsEk4dmfMh42BtnMCfYrDMGMqzAA1quAwgovnxkuvSVf1p7WJGoumNqRnf3zrcEMJcrGP7woBHaf3",
  "key23": "3Rf8Wfu3EeKZ8TepvN4mLgEDxzhNc4nw9wm5wX4wFXMT5bf54jojQ2gCdAipnBfACcxJQgvgExM61w2GEmv8cBcQ",
  "key24": "3j4bhag5EqrgNaWhBx1KyyHDbNc9hQBT28KR1i4wyrfQ8bW7Di4MarmZfJa3PLoz73xqmJ7Rcc9eDKYeebLhrU8k",
  "key25": "3XhSdt2qP6A9ewrxpZgX6FDa4o6mxyVUeeAcv2goamWgCDjexjRHqRiyHFNzamaM2HrsWJpWGh4f15sEJiy3Qs3s",
  "key26": "Wio4cb2bXe4ei6d3EwwsaxspiDokJewA4BBP6WjW21UhDK3CvZLzsdUaV776ewe13f4NHL6gYSCVJW6p2rT8fkq",
  "key27": "4p1KQNHBNZ4ywsWEQ3vn3w5xMZqae1c85Af3dbTfkSfYgpkmFJzfoSBXVoibSUcAF2ri9yaQRoj3658LNKzVAXGS",
  "key28": "2rd3c32Veg2863CKAamyHaHubkgbLF5cXsx8WPo2k3WSzu7UdvXLBoRtbim4kf1yhxtcSwwj69QXFLzgkM76FFBh",
  "key29": "2iUV9BdHX969AMt1PibKxVqGdGmshEWsya6ZJs3iqBrTMAsGEt79JHCxonFun1Qdr3xBptkJsatbagCrCvkcrSeD",
  "key30": "2Lx6qMMwJtpsuw8qZTgVfbszCXpNRhBaTNVPTKQrT29EZPCcToJfvcw8ZwDqm198a5hKuj7xpzhhGL1fH1QnefWh"
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
