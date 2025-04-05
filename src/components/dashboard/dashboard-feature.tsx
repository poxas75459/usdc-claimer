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
    "4QCRJ4LzomzmbtyMWEiPoFjU98fRGDztukis7C9u9UUpnUPHygXEJkQCCM3RhG2R3UmpnqCX8h9rmkVYe9eDg7sQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qbnv123TPWuCviXccbRGmVwX9a56ji4Coqha9XBTWddzAMeri1Y111LtKhLi7qWS1mcGJmAbhFmggZr99fcAY94",
  "key1": "52ye4j3i2RxrZp6fKTegx2dg4VnmSfdPrCpRZVpSeGTBD4LVAzEAmwssuAi1QpeKXeDZxvWtcbgEAiCH1MoLJMXB",
  "key2": "25iVDGPaPYPzZ1k2hwnRiFauDXQ3Vry2kdjm8XqaCqRqF63t7yMGdTATQEp4zqBaFb4pfok839SB7nqxMErXzXmf",
  "key3": "3gMtHvVJPDPtoezv5bKfAXAsJgdwGsKrqX3bUEAKYZqsSxNcjab26YQz5e4iMUgBXLGjKWZJtoVGBUN5VxrUt5HR",
  "key4": "3NVHNDnABdRN1WTy9Zxgno7p81AEvPo5YYPTApLxaPwakQkyTyGiqrPKu6mc5yoJ1QooA8WmmWM21sJ49x2rRXDT",
  "key5": "2ViP7nWRtFUWHfKR4T39ckEsfPbUWb8Fck9Y9rty7F4JxydmMrbzVPYJuysuLiFcXvkBNBZBhYeeyMF8oX6QFR8A",
  "key6": "4rqG7UTwK33jYfDYqP4nY31ZFR694WRyY8sDypNnK1P8AXr6UjojAHkoK8arbWkto6JVoGQx1S18aNrCSfg4jqP9",
  "key7": "53VnuexNHAuFGQ1UbzePnfVEifFqEXFLr9xXAwsTGju5SV1JtxyVD5KR1vuqPDnJicTNZyyRTXu1H74xppJpzxFT",
  "key8": "4ykp87JkePEgPHnH5PnrGmGj556npx9FsEFkCfQXZqKaxLNBwVbFFD9sr16ZJwiRCk1gnbuv3YwNia4Gmo8GRHGN",
  "key9": "5Sg3r5N6cEYjuS5iCTfDnf1DYT2VV22MunH4ZwSvC7rhBLuLZA1bRiu2JGx39muEPE1cuUrfhX7hiTMJESUzmXN6",
  "key10": "5RE8X2RCdKCzzx3awQ6CNugsRGaUZv2a3gtmWVyVNsA9oYcgN5TGCeFWZQy2Kyh1PqaQW4xiUA2pRwm6MCXE8WHi",
  "key11": "63zSUFVxSh22oE1t9sPB9Fbz1juY31H2QyneYrVqApcV3n2TN8CdACuh5PKk3yUQfyYYNEBQkAAEsvzMdCTEiGw7",
  "key12": "315dM4dmTMXzHotUJhKVEgvyRomqjh8a4b65zhcSqo8LiuoUvcUjnSSWUeWFgnqC9UkgjECa4XqA5ry4yswCMGWF",
  "key13": "4XPv9FQgtnSE7pCkNB3haYj5EsFuXYrnELQFQJqmy9vXZK1JmKhDMopFg4BLQatqxj4YUEFrUWtiB7FMG2nJxe2q",
  "key14": "4QHh847JiYzXXXNP4EXADQtqHmdBELuuZ2FfMsf21cHUU27kCAy9qpADwF9WLQjXmyaUfLnCpF8AQnF3q1S9Ucv1",
  "key15": "5VFsyMmadRVvbqmLG7fFzYv5D7Vm99muxa7ctWWdcUyinECmFNPXmvsYukTKqcGHzXjX9C8pnX1Ke5ch57N7KQuY",
  "key16": "3WhYTsj6bFvjckEE4URDR6Ex5jBsPMnD9S84QW35QvYcShQRNy8zvmT1eHoNqXpQKGtqhtX98MzTpFN9v1Vdq5xJ",
  "key17": "XEroLUswsszBaxTZWUi5kw6pE4piK9pHrkH3j9dALXeCWs8qpDafAZM7ahwY8tjWu82NGaDJDBYQgPhgBJbWfB3",
  "key18": "2nvHtp4fu5NwDHuf5LRXKEp7tXExUdp8MsUFX21xxXDCZZGvjKn94DcmgsBXokSwM9XaFAx6y5o6MViXKUwdVNkv",
  "key19": "4nzSup1eaFPtM9ybFKaNieS2SzN2HkgYE1i3TqvykcPKNH2YWeJHWogE7th8mLY7p3efZJ3B1SAfhbviQzq5K2ND",
  "key20": "3CX2Uw1FdofvCGWrkpiahtFkwetQCh8H8T42Drbzz45BUz9JPcQZrrbYyQ9g2XnuweQ6RSQK4vuCF3H2wmcT6NEN",
  "key21": "2hFkh91Ter1oeNmogEQUYSFRDjp3CX3GZ2LMg64qUspJjWEHbXZKc9JvT9hmzZ7Fxwc5qtxhi2uWx7FCaLQn5Nto",
  "key22": "2YyZ9FuBc196gT8ZwQeDRtPDoHSMEKtrtTVysSvyCWCytSTzmrkSDKjeSu25sjd23YPRFbbSpnGGdeq9t8aHSvSS",
  "key23": "4FNPgf6uiEqDjEDNRn2JJVEta4MTDmSG3MiwHeotvhvnVw6p4KSt53dKu19VekC6Z3qxdLsKxP4ewmKshtR2KkN6",
  "key24": "3E5Y6SRdnY9YHHNcM2kiQZG6ruJqRt1vZbkbSRG4UjtWtPY3daLyLggm7oWgS1Xa1JnVmb9vsZgoxoBxHzSSQLEC",
  "key25": "pDcdanwPXsmGQhi2TdbcQWKzB1izzmakzXfokTHNgLLwSiM9GW299DnjQHZhjiUSzWM8s3yacG12mFt7yCqs2JQ",
  "key26": "36BAm8nwdmKeY2Bb4VXvGQVeHoWKRtCC8KkBN9AeFxUs73i5sHYcUFFdTyrLKtFpsaQJ4KmommnTKpHtK8Q5SR7o",
  "key27": "5Q297GqNiQVZooNTNboj68qLdHiHCM3A9uoxXqpmb7aRVE2MhJ2GAtFNHAaVPq5uxZw9J7KF55VdGKj8DYaeJhm2",
  "key28": "5hDKj3FeMrBS9HrVSbD5BH6KZ9gpHRfzwhHTDYM1G8qD9AyX4Hk5xsyFv6kEFjWN4tHim5pZrZUjkro9B9LRrCtf",
  "key29": "647WYdZsgZNwCaCqXWNYiCwoDQECjeBah3XduHDZrLLPyt3cfB6pbLe84JrtbXSpgZ2kzK9sTXmMfeHzTCxnktkd",
  "key30": "2rmktsVmEiYZUT71tqgabH1fjsnRtv1dUC1Vy4TYHH1T2EzQnKsvZ2AF17WEuKYFX2X7meSqraatxPBzmXWaCQ2i",
  "key31": "4oJZCF3ACbgSRwHGo1SZzaGfFbyKep2VBbsNhvsUnappRZV1Jieqm312qn6BhZBmfANAvqSUtGD88pWUXBnBWFBF",
  "key32": "45sRZvFKZkHE25AYc2A1GtPXsPkUgVxL5qTpTDZ23SKxhtH7cT117P5UiQEpqEHbqSZtVTzUtMB3TDiy6AwUc2Cn",
  "key33": "3Z8XdhXYB9iqhae1Xtoe4JkLU1FK6C9phALSNK11ThfqWdtNKN1oG23yqhmJ7tenQRFJpDchKZap873fCjVy1gmP"
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
