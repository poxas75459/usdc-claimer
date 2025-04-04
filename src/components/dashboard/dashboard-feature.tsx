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
    "5bpPdt5WQqvATXKqVKvfFrpEaE63cBqVcfbwfVxW6henu1cxho8J8pBnKjdbHa3ETzV1ghZiKvgRo7NGc5RfVRik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qroAT6X5iEnAWedELRwj7Wxi3AL6USjazTCwBm1RDASnVHwSjHC57qPzN1rgkxZ6VQwD6AJfsyPLGKVGHy2DFzr",
  "key1": "5hK5vM2tuL3eMFjqNDa2VmPUtyjoVns9C9mkHS83CCvL1oH79mDwcyhe8poU9bkTeQZaWuJQi6ZwMej3uKvhKi2u",
  "key2": "uuR621SffbavzpfjiSV9vkmQzYt7HkCbDNiLtHCK5kftgsFPMeGPYfj9UzBeXcbJqrBsX2sA6ynbu6W7BD9SoED",
  "key3": "45nDPGuT6fLZE7e3jdjKVuzWg5Nne6LdhAoUpDkwkuQTDGYkxpUnFeQr8zHs3SxQsfehD3gb2TJEpYv1QjjqDfss",
  "key4": "5QCge7MDGmwtfWxgJo9NzomVYqqJDn3dcsbE7VeBk1tCdZKJEGsK7moXhiw7C9kYrRNhMYqxjyAdgcZcADji6TH2",
  "key5": "3BbKGZbaRY7eQQqEhRxrdyLQ4SAwtFEbeB2XJJ7pbRhZ79GyVVhCHuKDxQTTrH4CDnMKToRLLs89cpLGbHKeutnf",
  "key6": "4imsck4qSKGPeNY1jDstV9uBszTuRNc7G2yG1cJghg2guSvq1LWaVfpv3F7sBnduqAbLAt2eSpLhpUtjYT6SotMD",
  "key7": "4mxZceLUD4MGvU67Yd2nwU7ubYzhYsqWWzrF3zSQWaAFqtvip4vi1z4ZinpUknB2gH8tzzmdy1Vy5g8C6PHQB4KZ",
  "key8": "oc9xqV7ckFRaAoUttXjxYfvuXyWXrfqsbUBKX85UZwS7Gw6hpqpAVZ2QK3TxkmrgsGVgutSrdJaGyHCepKAtJCk",
  "key9": "345SAKSvaF2oohXK1sHrcQYAfPw8dvtnRkHKY9pCVoTYz1aQ2i8KV7sWL7LdqNhksMo1rEba5wD7ukgpPm9vLFsX",
  "key10": "2M6Hk9oH2kX7g1LmyqH2q31w13kCKDMF4kHi5u4gvEG1djqgfdeuTpsy24g1Cwh9eqdaA2kDfVEXbHMXAxunuG2w",
  "key11": "4QcydiuQqWCHPdZ74NTkMFu2M5xCUYv9TzxpQqMddHeuxx13v1Kz8tfZ7ZZSoc5VGphZ1efnkYacqFz1Nc8JiFxs",
  "key12": "4RnFzav2T81QSJeriSJaPXhseTGgMBY4nMtFTTsrWA17pQHsBtvaN2o49StUdcxiJRChfopeQsXLoDMhTFRTK5HZ",
  "key13": "4KWMWt7fomXZiEcgWwS5WcLLeeygf2eUYLGxPYobTY74ciekEQomdQcXZN9C5GomDCwF5c8hUgKJG3a6WGmVf1JL",
  "key14": "xBV3nv7SRAyx2pQvDqe1VqVDFr4uc4fWcwvVoaEtdX2K25myDXPr6ZaXwMSifjgpsGrqWB1vyS3fB6DyRHqkLeo",
  "key15": "sLB499nYpbi63dpCKZc38xTwGTN3YJ9EYHMx3MAmZjyCt57Gi9vk8SCTBka29BrBBhzHh7Sk8XkxDzmuj9zfADm",
  "key16": "228eqXgVJ4SU4q9oMoWLNPzsyPt6vpkfDixJfkdzng9ifYG3rYZS8rdG3Pn6gPD8Lp7SmjnkJWZyv4DW97VCggZY",
  "key17": "4H7ngxf2439bTqJAYtvjFeR7VjjntT7KKgBG15wFCvQrFKNLU5CcfkR6jgMxJ3wXDAP8gNwdHFUXiW7ohVJ3qZqk",
  "key18": "47rU2X8JPwzrTcgN2yHxv65e1a4pFuXUGk29RqkZiJ69eLUxyZbKPBctQFT1aoaegX9T9P7HYU9EgYGNGgTM1K9C",
  "key19": "2uPw5BGpU3TcJVcriQqSKMK5TBzUwHbimmhFLcYG1NKmEoQFP92zhNHWZQt8dAbnfDPva9yc4tX45eHtEDUCpa4Y",
  "key20": "iZuYU5gmoxrwsY7yeaweooJ9pYYLTs5TcYF3v2T2MYbFsRMrE4MgreBrbg9hZ8U9F3UrsbPdPZhmvKQJ8qm4pfo",
  "key21": "4R5KLcdNyGEGEVN3Vv96WrV5xe1w9tMuTwCHHXVLnD9gd2q7WqTurGrA9E3Y4jDUiWhWb5NT584voBtFk6AoG8B7",
  "key22": "mANF3vLw9XfCs5syP96whaApStVScpTERjJt9kdc8vRJ4B2Vx2LD3MXDKWHpo4c9xWK3dBcWQAmNCrcxhxTe6js",
  "key23": "3f9AZRTPpaYDTi1UJSFgv4UHnJJ2sNKB6MQzfydgX2PtkTPyGbCUvmknYU43yPufX5wQZhaGzVqzHFXfdJngnHeg",
  "key24": "653dUwfsk4ajBfx8bCHBAr4m8D2WW2vJYtarDwrJjEYEdUu5NMeGgcQ4hTuX1xRahJiyvEFy7XmE48RMwnKhbcE1",
  "key25": "62Qx6fdhf1j1rm2vRk3V7dLi8LtttXySszzWYWdGvaEF3pYvfdRofKxJD28GT3gJnqi8mDb5rj4gpeiFppH9wDtF",
  "key26": "5KnqKaE4cvvj72QQhJSNxDSmUZQW1XoqNxnQfFnc6c7LVCS6eTwwH3jQCMi5MX9gdToYW2khKJFk2qMqwnHSkB24"
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
