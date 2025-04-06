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
    "2Zct3Jj2fitFFu4uox2eSYNHAcJ6aoFQKFQva319aLtE24zYEzGz8i1WK6nai4Axry48nxJDnjmpARTSLEU8MZ9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LrKbyEpTjy9yPLAZcXccc1bSACGpxhke53pLktTWPMNPDoFD1zaiS3ENPGNa19Q62qfoRpnPhdvAovcuvVDejeZ",
  "key1": "2n5cVQmu7CZhedEN4ZA6WJEeiYGMbVnChtjVXZPjaknfYpshTVxDANv12QWYriYgwgQcuauqAAFPHd1pmA7FodV7",
  "key2": "4ZPpkikdtTQm7Tn7QgMJVLFmbXzZtpHRqrkcZe9cqe3Pim9ScKxcDZoaM51dxVK4QtW2aAAHHQqf7R3TCQQF4L9g",
  "key3": "2YDq8TNXzvfaaqRRN9c7LAMiUUisS6AVtwtotBqAxijSxo5WXoY9XSn9VdSeybL7FcDfaZJduvSsTEYm1LhveZy",
  "key4": "3C6AgfifW7GZJNbsHh4Ao1WdsC43NVffX7K4nBqn716KWen8XEACVkC1UVbrUCPajjqjeuLT6MpN6B4ebsrJiVRd",
  "key5": "5Q4wk6iLvNRKGxg1DVKgsB2q6Xm6NxmcHJxtwbpFnKbHNAKHdF64x4eyi5idES5og9FWEPMZzifygqWbM84cFa92",
  "key6": "3mfF69JURrNQ54CGXdnHVddqBes8Ah9zhf7B9whjhTjJBVQGpihmD4DNjUEgG4B5Ps4Xxtvzsfx6QD53E1BcnP8R",
  "key7": "2KrcA8foUsCdYwdA7rH9E6TjvSUte3Gw8VhTfd43Re69DMku6XKmsZxtamLTub4uKDWs2LnErTHdjrbWpzzcttgu",
  "key8": "5xjqwLzPFLBTttmZX8npeFKG9NB6crQopPxdq3vtkd7YQQY9uTuESmuZLFZhengYVbb7dM4xAfiJ6hjNGpUGtD6z",
  "key9": "49sBd47ytgbr18rEbEkcb5U7hkhw2TcdB7dgfzrihBPNVQyEDaMJxc1Us11sF2UWvsVci9hCRR9fnMKK4yntBLYR",
  "key10": "5XkS1Qy7TXCn7CetzgKnXXEryuVdSUwYX78A1NxgC7K8mgm8Dg2LV7JanKDe3CrL6ZoSDFLKKoCCrzHuADjGu71D",
  "key11": "28o1rkgeLbwVUPD4Ybcsdcpb28Zdvxff8ZNXS828yGtWee6yu5tZqdcCmr1AdzhxmCqNrdzZPaiHYqWeWQF1SnFb",
  "key12": "2TV26FgmoGNjVDLGMq8Da3JDtWaaEe5DLD1As51smm2gWPcYkqNi3D2BvxeQ1hk8Ma433b9YWJxkKSPe4Y6KXBXH",
  "key13": "4vcSi5eRMGQTMYaJSFWfzrHHwnN42jikAmSH8oxwJnxacjSHiadLVhnbqT92Jx75UwFAq8GYU3R9h45BufcbCNGT",
  "key14": "4rugzecsmMJKK5DtWdacntQhNuuymSWZQAec829CaMrF4ekgUSBYyTM5b7eiAUJx6KKJDTggCyJL9BypjnMYuU8o",
  "key15": "2auT2VzrVkY9yqyncAqFmCFyZLkZA47ZLvo2pPVwUvrhdfG9qFTV4ZJWnP3Vcb6TWdoAp2F7tVJ3Dt3ZjZRZRBCr",
  "key16": "mumJKvXHVP4pQhWDcVtZdmapG5Thtuo5SQ5fYqid3jnn4Cjb33HHj3HUYLy9QF6UPwm6Lr6PgframmA3DKPBdm7",
  "key17": "2bYF65ywbQobM3zmTGeBaYLBWnj8L4tArnjDZrDvbLQaAMYxMMkHakmcUBA3JiR3YdE1w1oF7XRQGhZmHNRtLVYC",
  "key18": "vux43sMVtXYot9b94e2e14StqhKpP7qpqgZv3AzawBuMZHxN7q8SYfsehEE47nYmvQwiejpqPVuezx8XVk7V5TW",
  "key19": "5NvyT7kCeSH2jmnzBBDcYa6xP9xuCPi5fAhpKxLmRj7dgTPF9vijXaErY1T1symwo31Z9enk5Xy1pCwoKTchTwaT",
  "key20": "53JXeCPYEGp2f9HoFCVc8Aj5yaARmoVNEqCiYwZxHvcfxqLGFrqnBXn3dcWsGMFft7Trkvjzi5ywWNRCsNbNZbJr",
  "key21": "5E8ayL3ihSDzNUUQoq8SxwDzeRbgxfN4oAP6pesrog6SUPFsFAN8vmqUkMuzGMZXghLwSBaMFbKE5KgEELpLjUKA",
  "key22": "Jskhd4n85FpmFXLuawePVcvWeVjuz2sxJKGcoGZpQjyaLmrFVV6y7tdYjoqnB8Lj39SRoqeA7SFdMSCtv8byaMy",
  "key23": "AjMT63dCLS4oiMuEoL3spzAHed2ZzSPmcZobWjtUDCWWasm7vSHkD9jbDgAJ3pBTCtj5spQKnSx4WfbGaGmiYdY",
  "key24": "vUf8FwthVsVxMDSPbN1GgmJ9NJ7zYmwRVDRakSHtTvd6Q6R1riDn5omxf8gkZAVi7kzrQFVWKTAuvZj4nWU8WSF",
  "key25": "3EpwCAawrSxVSMWdveVKqjwhqmk5CAVCAhEUeSzix47pXyQSxGQ2cSwCgyWGhvwpK1Kf93ScsMTYtzp64aFmtAKx"
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
