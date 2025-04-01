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
    "5Ryz3iCSPK7m8S4oe9BQuHEZUaChag3PZLR2yPkz2KeZa3LR9a5MxyG2QbGcrFfowHnwfJeZbdJyVPWgMEbxaCpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PV1ufY7PUpENETVLz8bX1GwXhSGqifD2TXdcxaFh5QXEatk9R6SN5jk8fb6y83qhpvsrrv6WTRVFMxdGuYXC5YQ",
  "key1": "2Vbq43A4wZ3zpqk9a3Tj7DasvfAf7exwu6dbuDdctQM1kE7spMLU31KGFYuewVnQta6nJGCUknY2Vc6s8SUhm9DD",
  "key2": "Mh1yhxckdYWDN7u1DegZK19JhpumUhCAdQQMx8pn98BuTsiZexLwKHatRA9DoVnNXagjtuLzmjo8cG65hnChpaB",
  "key3": "2cMzaLpcK5q8XUwn9NBKCSuCMeFdgqSDVJnF9Yb4KSr6Zb7p8p9po4pkoo2FTCZLFowXrN2CWkGDsMWLQaSj6JUv",
  "key4": "3Y9iTCXmeLn9Vfv74yjNeRvTFedTRmUjzeHRqfMnvTGEjLVebzaJWZEsMKCXZpoENJpEA5ymyJ44VYLCteLfYj4m",
  "key5": "4UwXrhyzzBsymG3HnLEivcow6oD5LfK6BkowUbwJ7LsXS7Vnyw9LpckBfrciSKEBdWeLjeoFG3enTQdwtpDsWosW",
  "key6": "5WDH4RLwPXJzHXai3PunU8g8MWur6GfsB8SkUf49M16S4aoMMPWh9Zy8HbNHxa8JPpepGwyYiindt6o3DueK1qsu",
  "key7": "4ViK4ncoJiTooFjMHz6kk32KiZNc97QZMP7RniVMVhLLP9iXKUdnL9cJUwiPW7Cm9Hp3XdahmpaskKQvHgMh8dN2",
  "key8": "aEkjpFAK46XBLBBRbkbEHgdZAnQZGwyfcVt43pVY1yW2z4cT2CDqR1Lovhc9UhBQQMSLX1csuRhNJrC13NFLMQh",
  "key9": "2Ya2qF4WZehdLLvq9hdYfvJP6HowyHtx69RJpZLwXTMscoKCgWK23QhVtVnToStpovNTMV9NWQbMNtz2nz4aLVRA",
  "key10": "4aG3Jr8H5WGV5qJJRj6AGG36CF2aBKCcgM6D6MfVNFQFP9KgMB5UpLQ5PwuPnijuBn8oVGCYWfr5QjQqgQSeUHSr",
  "key11": "3usHAp4nKpYL1rmcdSNHcPn3N9THpqqDHmPNm8bwAsteCbKL9byaNk87H4VmawSh5Wd3E1dH2eCz97n7QwuWQtxh",
  "key12": "35jWhGaoSmoriFQDLagkBFYz8ovuzo9TFya46dMynFVm3GGjJ3XV5AKC83FGzD5adEEwbBogmcwvvze7VDmdNBHN",
  "key13": "2uXLqTD9DcEEJXqRe16NGCyUu1C86drdmLcrtx6wjrHizeL2KtuBcG47TDoiUUK5gRu7tGrjt3nqrLcnDmNNrR9j",
  "key14": "3T9k9jRgsp9ycfiGBMDW1JMyZCthXYh8P8H8XtunVCRBwjgh6UoeRC2KHC9tjq8vKRE5QGEU3YGBXuRGNJ9DaxxR",
  "key15": "4hUFakWA4NRp4r3svTE38FE2UaR4PTv7e4bzWKE6MDXftdgZ9V9qVEVKz1GpQFdiGVQLNcchFR6J4EQhEFyuiER2",
  "key16": "3rV5LbMXdHBPmWJgZH5MTrvYaeMHGpbbzjtRAWTLo1bLTrmhmbZjgSBM5eyzoqQHsHMbUDr9yMxigoNQFHvv75S9",
  "key17": "5BgVNgiQeJDyFVn9P6e6RM4Q11uzkdzmASDb283sAUs5wwUmB5GJeBeEfGSxStNDwqxJhr2daN152Cfyz5PrUjkZ",
  "key18": "2oRzNVM6p1FMMqcxMqmWamTj23QHztEBFmAwBdUBXBCgLSSgFy8oTNw8ZkDAA3iET3oq3ME3VPEyBhqTP6XgR68A",
  "key19": "3XyMXSW7nxcnBidtp6GGG8Bf4QhhCL1dHCgAjE2puR3PzMcyh7iznoQ84Bxa1Szuc8Y3h2WYUCEgqc1aTCjbXteb",
  "key20": "47y27NfcftPKzEQ4wkiQyrCVHwBze6WF3ZSFAueW2nDjFEX1Mk93B2xVPzm9nERAVzCkNGMNtpC38SnLJ6TcuuSi",
  "key21": "5udqmow6Jr4QvbACadMpg3rf2KztsSjzXZyBRJJBV58WuMD2NBxyXDiddtXJAc6gHaZfFDdzy1wfnnFtbmtKsZbU",
  "key22": "5ipv76qS6xTtaoLQTrsLcbVXoz4aWegt68PA4UuoUrUTxZ6oj3Q9k2uqkKJ85unp1oZB26kQGSzkYTcc9PrEL53Q",
  "key23": "EQemHrbci8DsjWZaPT9nr7uW3YRPphjScGStXVPnUptQzubSU23yprphMfKU8Z8pEDnP52HDPsrp1tJvEDZ74cm",
  "key24": "5FnNbYvYvtLcZ7pD7RUi13XQ8qmf3ijWgTGsBfhezqXD9ya6tvd4ZSY2jF1d29X1GPhYn9i9PBtx1T1RfZm5e1Mn",
  "key25": "26QwEoEqX8W1zf8Q8vZsp1kzfeVWVTt3ZefT9Wb6SGPU3pyobC37HbxD6xh6wW177TM6fMDG9McyTq8N7nFMDRvG",
  "key26": "4j8f8wBVuY1SH5zTCZru1EBszzAYauEcBWSufk2hXNJrExeJk89iWbVaJ1woqSD6ykepK65kKzswcjnAqUjt2wEu",
  "key27": "4Vo87cfNHK1LZY78E62r4o1SvRdCh491A7CCNYEW85iYBk6wzUp1JQ8dcGhNowaxKZ3SgrmRLicwMkYT1KkGY7vQ",
  "key28": "4RsL5718HLUu6nxzYkHipcsN8kvY1ryMcSnPwk8kbPK5bJJ4Xywn9vhGwzD3ANMmdVTdkesTBJ5gcEYuL3vNmD5U",
  "key29": "5fx3PoJTapf1Bo2fyvxZLvZXDzgNjmeMxDtBhMcvyT5C9W7QW8g1pUbi3gwwSu2MEyYpEV1t5UxbBspc7TEhAGL9",
  "key30": "5PKxt1psKFMxp7DTZszEhZze1cdNzL7B3fetvMmjb881YzRMpSfwWCiHvYU1KKcJTjXAVzRaHSSznSWZXB5w8L9d",
  "key31": "4eiWvhELvcBWS6hUhDN965Hzp4xSsYAMW5goYf76TuD62YEDtgkk88g7AQTdikJARLmHnodCSjaZ1cbAr7sKM4r2",
  "key32": "2F6Vos1qWphBup3D9jpKuphL22jCmqpE3ujCLWLAbsWfA2JyDzLnn8VCSqqTgDQomSW1o2WVeiDRXtsFGwiiT37c"
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
