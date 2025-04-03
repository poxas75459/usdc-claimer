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
    "5LUS8T5Sn15vfM6TKvUitpz1tpYCXcEAPVxWDDHetDqUTbHgareyqanF3YwTVuPVht1qaWSWKySCoQpZMMi3GBm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CbfDxhV3cykZTTYNsWVxG5ZJDwwdidvRE7pLoUVScdwn3jpSshRzobgFoqy1rUZD6r4jye2aiXFQPNygrKRwM7x",
  "key1": "59HzjCfwSP3bGSDT8a16C5QBMtpnGt4iHhhVyZzMfSVYH3oPUbYHFpeVbkPnWWFj1bvVFGqFyjerW1sWksCw8ZPb",
  "key2": "4wqsJjRzd2t51UxBtBHwoaEQo6XxFJnXxHjVs1GeBYatYcmfmUZd2miujbE7PScZSmVmyGRVnVZqdHiGMvaDGFvF",
  "key3": "T7xsxuQkChchoGZooeJuc8xzGVCofmvn1GmvH6eB2PLQP7eXchTejCvWA3jEVEhVp6Jy1izhJevVoRDGqnyLV8H",
  "key4": "2JTnFTVVcgoJQMda7rYCLN2ikDd4fj26hVDST64mFizxsMbgqH7hVL3QjHWLzxFrtZF51gCH5SVzFgJuhY313RpR",
  "key5": "K1w4s36WWiL5wirR9oy2ZHRFkBsKUNkuyWz8Ca23CQS2KJGDMut9TvgojxoyDx7j9frEyx5LvqQErLmMTjriX8d",
  "key6": "4iaxVC3kSfeXCEfA3S5r1HnmwA3tFzxv2V1yEdnSVn36cRERQYVdftovrAeW8rjA5FsJPEs5CwdYFaHfS4ZbqGai",
  "key7": "2mz8TXDAPk8nWcxtthgRyhEyEWreYnRFzKvQsf9p5ZT8cTiiGx7yCJSsCRra4V7oanazMPQF4L4xjhDyhcqj48dv",
  "key8": "37cdiT6CF6fztSpHveurCHovubC2pG56kdQhvd8Z1YwtZNy2CXxxooKxB9iwiuoQeJXajrHuNLW3fB8Aw7oaNUhf",
  "key9": "2Xq3X5ytat3TjFUnUApYpT7XY4czbZ94zvjARNKRZf11RwUfoG5Pnyd92fehCouNP8bB1HzM3w8wS14j4iZcXKNJ",
  "key10": "4oezVzWnZ54kYcJL7wSW7VYDm4uuhpfALnGJRnxNSHzoKNyeScwHvFoutruja2icZ8LV135xukZgYLN3EDJYPuaQ",
  "key11": "4GWKpwnk4QwpCccHdM3XuCD2VuuLcfLPkEHwc2cF26x13F96b55yBo1gkygcruCg4yZRagSTYaKghn1bNkkHmRJ8",
  "key12": "RDfRRbm1CbpAdbwuB6ycq5LYanVMqFnFjykP8pUiS7NupvvSSTSS6PVHj4w4QkstBM5Eh8Tmw9XJQWh6DtcEz4C",
  "key13": "2HQwCuyXu4LcZ7geVEh7Hc9uoZLsBj7pT8wC3Up7KvqiJrXW9BetRHgCofiJ6Kd5YXtDNge3VXESK3PvjU8jxqRh",
  "key14": "53sP44GUsmZVmn9HA72EsduARce6NtQfEM7rNjzFT3AidqZooYaKVPgbtWoDYBK9yAjAqibbU2GTPiUuQEvGG1kk",
  "key15": "24iCJWbUJq5oGTjobVwehbcZSQ5RwicXVggtMRJ9L7L6G5DexFK2oY9j15wX7uJvDts6r5qKeutSmphLeJ26tXe8",
  "key16": "4ZWB5Qvi6L496BbZrbwrAkqRYBN8gNnRCh8fq1h5xoA6PXBPJ7tpJFwyGPZyW5hBM2ReaGrptoviQRxJxRCMzGwS",
  "key17": "39xVaYmDZ6Hyfp4VrZ7fPv9114hKHSMhG5P3Z9nA1zBBEMFAyabrn7bc2ei7jvA69ZvsqNs2zdVVj2QfWg2ZTEMo",
  "key18": "2RRHbmBb2ctoFcNkZ5LdXDu4NyCScpEYkxv4QaN9UdhoB46P6dqN2a6ChvSy5cdUcC5q2myjYhbY8y5mtzp8azs9",
  "key19": "2DnFmqJBiSiF7rL22PE3mh8JSfMzhLLjkiYMT2uaPDWbuEzXP8iKGHwx5sRg9N1pLvsqNHcne4FycM5ZmGVck3jt",
  "key20": "bipUWAyZPxGYLsDbKHPfYrNCNn14xDurS1q6XzsoDPVXyUfvzKNN2v3zaPkY8ecKgwxbvoTmaJAe2Sh4yKgGk6T",
  "key21": "3kzD9sfFK8ZTMrdquCN4wGaWhfkGrsHmoM3YFkDhajXcHkEits5xFtnQEjRLcUYwAQ6qMLnreZ7M5HRDBNfiUy83",
  "key22": "448o4FWs9BhqySy2EgZQVuiPVKRSsqEVYYuTgUCkA3CGfqVEQzw4qKnK1acZamujw7rGNq4gQDY1ujNHt9jsBEMr",
  "key23": "3kGSAwFob7okEbH1F7PL8dFm44er8YXgBjWW2cLpaWu6QGUS9hEcP8CCyLTbdDN5QEPFAj4xYGWaMohbt52hyZwA",
  "key24": "3wLjEBiyvQPD92fTp7g1wd87KDymq4VFL9o3zyWo7TPM2nVAN4HjBgSHsxYR8xjsBv1R6cgdb8XmiMfJwsDXez8g",
  "key25": "3PGXckwfeKxJBu29yfXQik9Dwn7uu1q3tyjUbEYJrYeDh1PZKK719LT1xuuDBMvxRWUtw838rWtKmZwrRtDKSDm1",
  "key26": "VMj4SEcMXCMSL9mmRrBQUQKVVjPUVAjiufV24DTAm5KBFgB3aiCd2tJf75ZBHWT9RSwi26aM5SPcfXtBVABRkTr",
  "key27": "3czXFRbZdo71eE3Bf8UW9UrUHd3myX6tGAYQB57fykGHmC77WgUrHNPR81LSXmSqBGwW2xVuCdNDikxSHbJ4y3oe",
  "key28": "33tHjfzmHWTESWM3ThKB147GU58iYe6pEfYM2YnBTaNw4jf9diMnR4kYWqgmJ25pgMJBZqRcgq4g3xTdD6zVBu8H",
  "key29": "2GgtWoWdoAtiedM1vzemoGSZAvdmwMuvi9rMFgewSSHech7xWD4LtRQqsf8wd3Yaqia61eQxbDsv13wUREpvfXYm"
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
