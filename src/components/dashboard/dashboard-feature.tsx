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
    "537613CF6kdXF93HFe3EmA8kA1yaTMgVyeoABAWTGVZYcSZpiEbZkERKXDvSsiwjcPBNkdvgCdnjgy4Abihg9PhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QWccbXXPpbTE27Q6uaFLZKHE59BoCc8CdwxhuWHXjcjJfZchUHKRi1hxrbyPoaZadDG2em8FbUMN4i98n6gzurL",
  "key1": "2bs6NyTZE7DxYBSd3ucgUetmbPnMc2m6fNiCVDk3YLX1Sug98eqEvqNj6MNKZm8utvM4tNzbGEM1YZk94wVbJSsQ",
  "key2": "21aRdjmfgXWsDwbUwoZdP3nLpeaZZahaJADRbEKmiWQQkp2kzx3iyimcjHF9me44Zzhp9vxpr1onZ1X7Wv65yyh9",
  "key3": "Ky7W8gAdkTwiF1ZQRz47tUhAvAUgD7secTBKxjmqwib8QsoCL43RxtmzGkf1Jg9PBT5ZLwjzzgLNevwUJDkBJkA",
  "key4": "4YmJwWRySqsVXs3Krwvz5BkacrdYLRemh7X3by9KEJbs9td5WZNuZgKRrizwfX4zcfK7N1B2WeJd7ePgD3wjVPqe",
  "key5": "3DTvy6HjSvBP3QNt7bfM4k1wvib5CHMUqwX6w5biupxpUH5KRrqCaCY8L8boMsLy4zTXg4YFVc5j3Rd1ryb8u48i",
  "key6": "2oVwsAQoEa78MXTmdQQKb71GJR2vGr6sK4ygRanbq3BHK5bETUwcfvYrohtGSdjRTMuN5mwLAxVc1EzsCFeKG1xU",
  "key7": "3tdadAaHptsFq9pXmv8GgCnLA5Q7KiMxmCAopNYMVen4ZrENdSAKi2CRpPob2TrmUWE61XgsjDaKpTZeX9JhGwgW",
  "key8": "3PcDQNRm1moiZbBWiwVbmMqHEJC3aLeACHrgnz9B3Yr7zuhRAVMFHf9wZwwK6NpqBVF6PPqfjQ7kvZMYmFXb5upV",
  "key9": "jSiPzsb1CjRLea1SPDTiqHRgUYbZQhG9tQRJDSRJTBtPFpwCzJQ8v6JmwnTiwm7JTNxDfbFywVHqJcWQDBDip3f",
  "key10": "3iQB914yKyPJr7yaqXbYfdzG9t6hcoaVUvXmXtNPDm17jNxqA9HCGuGAqV9wju6Rvtxya12qMVdfiaeFJ8SDDJov",
  "key11": "43RXXnNsc5aisB12KPYdu4Bk72rimyXZAHuTdwmv6aEz4kuAJ35MSr9XJvKvgqXik4PR2QrHHb4EcvZgaqWsKrUf",
  "key12": "63pi2UXdmpKgyC2jXw7yu7kqceAMaujxgVPBqrwUckv9Ly8z5jZdJw1D9UZGhrcba6ycZB9E8GweR3sTLFRMc8cB",
  "key13": "3wbHFARHdt9BgPWL8Uhy4ZCzo1FixjTqfPWQQwTrGERxi6UiVEccWyfmNy84QYuZ9TxH5cHBgRDpmX52D8C7oZ7H",
  "key14": "5yZyUSBVdqwxQarFK7nGwn4MVvGapHitSwNVgkxth96X2jkqzEWhD8tM1HVPpxNBDwNK8Q3Akp4QwpUpmwuY8k2t",
  "key15": "3kYDX83R4DZcSCuY6s2LwyxubK9HJfLQNivU3JCbXxwXGDYBzniRuUJBc9RPSNKPJWxU6VMyuW26oJnxezbF7erm",
  "key16": "i7Grn8n5xcUWeG6MqTDZ9VQyFwzF2h6tWM16SNadRMykX3YJBmTmdWnJst8wPwQiVx5PTME4CuuhVdECuBfEypC",
  "key17": "2oW3nVYfsoQDrybXbBEBFHxq8WHaPeFo1eKazyjG8HhV6WgiNps2toHSGdpZKMLdb7FWRjLm9UgYudZEPMSBKi7Y",
  "key18": "cYq3yH4ddtjUGCkg31P4yfwH8fEnDmQZHPziBF3qfnnD3DcpissVoRvESx2PCgHocexQGC4dPHwi1T5M7Mgwf5A",
  "key19": "2hHcXPbSLPfM3CtogrBKCDSUcwN2J2o4UmkfFd8ndpVBUQhkZcCDTQUHvZNDQRw6x49UBiFjZYvYj4cNjfTm8H6R",
  "key20": "d3aKWuM6XxbEFGWQUUyaZ9W5bRHqYwafrJHGXV2RZwfXmmTXL5uMXZa3cyhkZ5juqP8GWUw1eqtgKFEASa3HRkj",
  "key21": "4EyX5NahvxzccPa2z5BRfyeXvkhtJejJu4486iRvneG1TxAdV4vLXhsG87K5kJCd2t53LUwt5LGeL3mhWhZZMx8x",
  "key22": "4c6cgPZu3thVf4RxiAJYK2y3Mk8Hvznq6fueEK4QMZVYjbB8WhUWKBZoZuYogG3gaxa6J41Bs64T1owWbMPKnrw3",
  "key23": "2JeFbituGtSWDCUjCeiLYgM4LtYAAK9prEQUsHhzXBVoJPFS57sNdAZgB8Fz7CBYj2tFCxP57zrdBxf831oKW2Po",
  "key24": "4n7Wb4CdXQWBtdsocHdmnsj9oU7hPU73g5zb67qT1SB7EMqFzs14c5BGWcjGBWZGixcA9h8hHkwWQpmUM5HGVzGB",
  "key25": "5sEmjFP9SYm7tKXwEiK4DEJ4TWsR5KYTAd6YaN66gVg7gnnaJSsAt936eAE8TS9748CTZ5fJvahbPit3x4fXMAKT"
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
