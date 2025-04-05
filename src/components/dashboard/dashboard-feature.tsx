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
    "4sXLpDxXMbjVHQ7HjrhkbPcgnp4SoQvoXWoRiaxLzFChUydqV55aV3QRerPDEGngPZE37M5jYy8TSqvfgLkASEJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29zw6Up6QSze6YUALW72wYuwk3n9G2m5FeEwgbrvFHfEmajAKDcKEFQfKvGeVN5yiuuBeUBv2F7ro3Q3sRRf9H2P",
  "key1": "4rcpefuDhCGr2xN4pfqTT5bsbFW7QJyWTswzQoJJRtAnJA9geLXeEsEaBptobyrqgCyALUH9i9PnMYGh9BeCy35K",
  "key2": "3TrGeCC93SsRksKKQGwPUDKjcoZ1ECz2d6MWbrvZGuYj942LNPCrACWNizpEyETQWsMTtoe73JDRgpKfZ2v1Hqqr",
  "key3": "4dhBDqkrqxHBHLatir7KxgqhYFr1ASBnb65Egx31tN6YVrXHdEg1XoRNhtm2yRahisM4wvJX5PcUXdZMvpHnKTHb",
  "key4": "T1nDji2hq4fPoUmDxSY8egvsxS66FF5LUk31AusWYvoqw1kug2DLYMxFybYoVwcdYfRmd76dj1CiRNstSozWKgM",
  "key5": "2qnYV2LLkorrJKqk2mBGc13zMSkNwJty6cXRcg6KSyBs7XoCmRyrcJEiLaTRoJed8qjFNpwv1TuohcRebPocHFdY",
  "key6": "5uS91y6Bfqgt4ZwXo6EbQBgxYbDNkuhvZJULKbY1WozJGUB45U5PZMXxudkj315ooV3u6vG4gUWKY7B8x89Nckuh",
  "key7": "318Cki9G5CQ5obSSRsA1UWWHr3qSWrT1bfVfK7w6BnVPkZjAWLgu2ZYKz2hS5B9JWW2D6cTiXR74p9ZnD7yqTrXr",
  "key8": "A7AfofZ9sP2UGM6q4M96QA9gHiyQBG4RZApMssuQ7Ep3dPmWgzwEFYSoxYmLnv57YaNSJJwHzKkSY29oSQZHVZv",
  "key9": "26SQQybWFzcyARu5QeD9wVaNMRdAKPZxer7ZZ4voeNM3phgQtHof1DKdLiN3Q36myjZSsGFUVUBUCVWJPtYYU8Kw",
  "key10": "2rDMX89jguZgMZD5jdTAULZgrZbeGDAdpA7m8sdifjMrXNKbJ5SB2Wxeru77wxeEde6EM4E5dCSnqoMWCmyLnZf",
  "key11": "4njiJRWiZw8ZrcQaUbk8iES84UVPrRoEQkxeqP8dFCoWQ7LyUuS1BXD3CxBenbgCFNbb6mBQDahj9ZmvvBnnWtcV",
  "key12": "5Wuz1yqsbyizrH6uHHZuavHnXNQfhP7j3RGqxCCdzScWGMAGWow8dqvgjCn3i3Y8g3zEGaJZ3MgGSn69JtnXFtxt",
  "key13": "5D9HRh8gbUM3baGDHRkuRsMVPhc7SL2yMFUTiuXvBQzbfzoPzbRc3fgjh3akkmf1h457gnikWF5P5bUb69cjesm9",
  "key14": "2P1Untb5UaGkr2pAVyFUmqyxGi5KehssuLAxkLgF4QghjTmBBx5mDjvpK3dZCU6SA22D19LyDNBL2hsZZgVNBDe8",
  "key15": "5V6uwZeUokL3rDDYbuvcX6p6rRgGHhYZ8Dquin3EsVGvxYpY6G8BbMq6RbN81WNKFRFBa1bSKSFUraEF4bwSDzsD",
  "key16": "2Uo5e2k3gucr48sjcLksFYEEC2oNmQRVerZbMsSzb8n5bPZQeszzCi5DZXdwbMfsCt648zN7TujkKn9evJk5xBZ1",
  "key17": "5zosbyRpktpjajHfUDdST6ULXP3TxbAy7UeJM8wVsHESAzSwHNuWgiwWdCDd2AB1b2UD1d8GRimDaxmrfBJV6knL",
  "key18": "3J6EZRBAD5s8jrvQBKL2c63b3JFGCqeG7ttGspCcQWdzXaQYJMxFij2feHmdQPyVrwRyJArff3NK6Co3LhZHbuzj",
  "key19": "4axaLGAcv9QgCSHUHtENDDi9YucXqSrtNh7gHNBUP37JU3DcbCQsjoLRSvh4Y1f4M5Y2uLgZDCNHALQsLkiavehB",
  "key20": "5BcEXH7ii4Fc2J9s6nKjqW938WhxgDjUuprHmVtRkaK95t7BgB1j4fcZoCVapU1kVkqcMPtdGo5tuochBpVzy3XE",
  "key21": "2t4ZVuUPN4A7UAR4mb2Qf51pKbHQYqP2GJW35uzLNLgyLpthQXBZ9mezRPjZHZdpFXyxdPWgHveAg7CwthPfzKsb",
  "key22": "5UEsbJ1y6jNTHNsduNj3Kj1e4ywsgKY1u7Xb5PgpjW8guYzTaqyqw3WjQsx7u85jjfMRxdf6WeAAF1P4fXVrQ5Xy",
  "key23": "4o96qZmRJhqjwtUm3Xt296b8R89GoUedbzsp2sxP962nmY1VeaHsxbDzJSH5KrNiQt5weyM3gWmd6xa9F8BgtzWA",
  "key24": "36fMdsfPdH8VqtQ8ikN84WTMtFPqXj4ZxMG1BEn2qnyhPXj3P2C2pRYtcqeU7AtAxTVqMH4XUU7NrmmvYsC3Mwz8"
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
