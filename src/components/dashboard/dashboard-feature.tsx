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
    "4KfnyPSkbbt9Sv3qqeRmjE68tXiyLEvxjgqJZsLJs27QZUsWQXfb1qoHBrtXLyFKLgfQtfW38ogk9B3CBKnc52Xr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t5zdRmHvzJRJ4u47vqxHNPqSM6o8MKT2VmFrebtkMZtB69DhoyEJ8GYzws9n1c361UN6aSZpNNHHYHeERup6Hub",
  "key1": "3GChZPHtMBpktuHngRCwrz2YtYU9okEi1j7mS238Gx8TkmDjXcvo5hNFbknn4w5nku83Zdk1fPmCJAcJw7WxBYCj",
  "key2": "5UShfzwocdQ5LyTo5Eymr8vNYFPxcaQna2QFgKhZrH4phCzcWy3KYGYUB8TYy46Yb47Tq3nWfSPpME2KgTcmX9aQ",
  "key3": "2tUqC9x9RfSswdgX771hszp9zau1pS8Y6TZ6M68e9HTwRZnGHaRGKFy8BhGTW7hxmE7B6eYdFoaSnKdhicARXxtN",
  "key4": "2A4B1ZYrqsf2MpAghXmaWkMECD7vgcjUC58E5QKvjNYAorU1ouXaPRLsmkzhSVKdPZMJwgwQCJhgRF5L5upYHmBc",
  "key5": "2u54S6nr7gBmLxDXzwVNjrXyVJSFVvdS17Ng2p9jY517aHL2ckWYX9vAnyfTRuXGmZqX8ZsDJvAKsTsZDEVEyAfD",
  "key6": "5M5qmonPMq2dacXnHwBW6aVfSS3wPTDKuNgDVCVRCzXaXYWzTgxgKunLTxRax7dd4aHfJgWXWteLghGSpGtHL4hy",
  "key7": "2Pzff7brAzVPobRFpGJtTsKS8F3RC8XsVtbnYqDzmV1eBDG2U9hdQUi9zpJus5Sm1hcScN3kfkfEfDyMmiHoikBw",
  "key8": "3D2hp4UvGqAsqA2kKeNnYyaBBN7r2icrbm2Rk7JA3KzwL8SLPsQALf1x8NMRYMuwcMYfRkrgEmKS5TZkT3hAaeJ",
  "key9": "32QrG5ewt4Rgooxv2E6piLCEfR5viPCpPP1FXRUYC4qk46spmrpjDBGUakPoudfnaUFPScAsRAiygTrG7reBa6o1",
  "key10": "JULKz7MJ4mtMJtVNQkX4VqpNPvydpxcboPVNhHbAZV8szmMiBk45YLQDcpGDPUodZbhBjGeoLwiTpCuhH8HGwRs",
  "key11": "22rhbmdk6dJXmwkaPfPS9nRmcHyEJieHen4jznsZgM7RNUVd69PR4suLoFZVVGQsjmtc6nE55ih7Qjd4DF4ebFUR",
  "key12": "BeR2VKEKMmVgSPgvTj2jkf1ETvheSBzUfCUJj6h3wkpYaGGF6QkmPZ6v6WBcH6xGu6Zi4MLScNfCiMzsDHqoqQR",
  "key13": "5bGV8dfR7Uc1r3qCwpTdcbkeW8wZJ7yr6sgk6hqoM2HFrd3UCPqUQh3pkE5YYDQqrURVJMLTwEbFCWXjsGdxy9wV",
  "key14": "621oabdYUzUQHdfa3mVijmCXLDD9w4qNeRQHbaZv6gUpcp24zm1rDMurUr5sTEKJG6C8YkpmJLL62XxEHrTkBJPL",
  "key15": "uNUGgNp6cJE6RJEyrWQZufAryVBV75zLzT1etNgyp5WrigRJSMXWGxpoq7AiKrLLfWrUMgpU3zEG8db9uEwXmym",
  "key16": "2b9wvn5LTQsGS9jr7qJg71yEv8vAeUjnGSk3BUAQrqkePfn6wiBN9qTwyeB36eXGwRxNgmStGjhQmTuMQACt1pNE",
  "key17": "443qaQhiLJvtWDa5hApJchY3gWK5jbszZ9XQDfsm6Dj9iaexrAJSyA37moooFUq3yKE1Ug8w8YbQTNuDUmPoSEKB",
  "key18": "2xgRcPHdUCvVwbCmpuxorf4hdZKsBiGqayxJofqJcmXUEkDYJR8NqRDydj4RWp4k8AY1tDCMvZoGKjkokyL9v5j8",
  "key19": "4ye29eSDCRjDL9dVKfisehvStZzzbCjXLwrmhuo8QGWhcPPSiHLAY5tMrjXxoQzZGCgDH7MKqSK8Ji1PPXonrQqs",
  "key20": "46EGFvjtGj968jjL4AFjDF2CTbyX4wTs4ddcYq3tDfLrYVtcvyVVnVYMFmaDPh4qbTCVGGi3tcnASfSqzbCFxZap",
  "key21": "5qfXerHsnvXLhDAxpLKPpP99QBo98h86MmknTR32BT2RBfPn5YKqgA8iqZMS9NZKjTsmrwB5qsgnBAzodXAHqpeo",
  "key22": "2VSxjPrYcMJ1v3gs9wHCTLjqw45jHiL6XbDmqp1Eo9p8wNZYMZmsuGzdUh5uq87cK95EJS7co6dcdBBNXwVMCDBP",
  "key23": "4NT8VCxpNqFZYY5tw84aXUAfVGcdBYSCeJe6gLtq72xi3r8q5jjxsNyvsBehJ9MQqnLaxTwkLubtcEM3ZC4KZ93p",
  "key24": "53Kg9JBZvayvBQHqFPxLD6mrzxnvS5LMMySW6w6stwJpUjGuAW7xZRYB5c5nVN4CxLSyxYDBkhtSPez6LmxCk5nA",
  "key25": "4M32VwDRBGQTk4S6kdSm7d7EfiiRf7hLx6xXmPjosQwza6T81hqPG3YmSb86bw7TSbk3BdnU8rcHyaWmUxJvjPbb",
  "key26": "5GtYW8Nr1MhAeP88zxaVxSm58SDdj2T2sL3MvJocv4xkEbKG1vYehQiwbC8RGmphr7pVewwoVqpZp1ZTAGQodpfS"
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
