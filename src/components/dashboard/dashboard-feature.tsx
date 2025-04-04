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
    "5qcBQgzSzzcyV2ksaicSdxbHkvAKM2kwcUJUJti8GPSjtoMRcxWLSkk7LjEumGDfJ4jAZQC7vLwmVb8vF2yF9mG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JxQA1dmSfKDEfwouZBQsimrbqYfczJJ6hhxPCRJTP7FxToi9wvaJEEip5B8veWWrxD2BcMG3rZaMCJLSmbiVPG7",
  "key1": "2qBBuSNRDHUEPUo7NoCH6qnBbx31KXSD2U5mfJPGyNREkL8ksFpVguqMREi67rwFsr9PUyTSPYzVLbUaQYpEaaME",
  "key2": "64mRARci1ZQhrFh7Dm3rQFVYasRhoxnCYpEh7GFSyyDk4mkGpdmVUS1budZxusQPn4MJDjV49U2sTSgMZoqBUJh9",
  "key3": "EyLyicQs4qaGieGWhXUrZxJhWs7CcdbWBLCrK1qn8Sci74kq14jYpxYMM5njjUq2Ynrh3i7hpoS9rooFEcMMb2i",
  "key4": "4boDiXByTqg9XjkgV2CQRjgrnT3u1ZiszGqsCFCUCaV64V1GqVZ6kiYbyD2qdCwbBgEsBeU3jphMFtkX9UUUoSBL",
  "key5": "2afAQKUXzSm1NfgpynYPi9A3D91pvtN3xhK5FJdRVq617HDtC6gzr139o5meJiVKiU7WRmaM4ZNg7Cp77wW8DffS",
  "key6": "41e4QZpYidgrKCw3mYV2HAfWxKzFeczqCyqbxmWojLhoowqtdayfg6ajU6z5ZbtqBiiESfCzn7jyy4n69K88UiHJ",
  "key7": "3WksdmokH2WDfZa2qeiSLGSEb47Xm9uDSYA6XGszCUrkMtJgXiuAc3VKiVnrtSJTTeJsgSrcBTbSNGTJrLAzGJT2",
  "key8": "5ZNPxCXoz2giWXJcNhinLA4gCDn35E5zxpTBzbjuGarcKoFAPZ1pgZemrjqkz7tbdhE2xQzwE68uP8brocvnW6tE",
  "key9": "325ojPdm485RxmCZz8ezWch1rbx6buhTFQxX2o4dNTpzuigGNRNhnhLshfv1WHMFCUqqFKMjVpcxrQmVHAKQc3FN",
  "key10": "38WuWiuDfV27d5HuCWGsuaLiiFFvic6vzJkSDdLayrsewyFUZkFQ4qMXEVonbWiHTupr7rQvvdKKATD4Pf6XFifK",
  "key11": "5JpvnEeSukz5yJkLGw14YhM4rR8tKiAsrV18GAMC5EobFHGaXuXvNqBHkU1VkKTwhP6Vz1ht3NwANgWTzgYUSudr",
  "key12": "eEth9raGTY3WMZqPbsBjD5y2ysVa6wWAejRuBn5uytgi2jWxo18d4Hc8ZqdVjg4vVBYqcPsQmyXgJcz34K55Mk3",
  "key13": "5WddT2RDsUnDVXe9Kd33EY7LWLRdBAHA5PHnoWfd44rcpqUinvj7G5gGUNnektSTQnbCpJZhun5BVXmWAKego8yu",
  "key14": "4HfL959WziTQKUKpSGAz2DJJXSMgteFdhdqjmeiivbmH9cuWEyG57it9LVywUo9aQ58MvYR9dFdmV2h7eKZfqTxs",
  "key15": "3kemm7kxjELte7xMmPE4wgZkQDGxtsWw64newfkKDu8MUuY9MJBBfoB9zdvr4hvKvimcoF4dW5QBxppb7xxx7q7v",
  "key16": "61MVF3pqrAfoUVvKj3XEC7UBy2fuUevjxbjYdJqr2ULwRkZjXfio6QFqam4E4zLPtPorFTt3AJcBN4cyVGFuZHW3",
  "key17": "47cZQJtmwhD9eVVoHDo1ie2v8JLrGN4shci8A5sor7b9qT1CBKUBZ5xckrqv7n5K4HZDBGJamVWRrqSGUnjtAQRk",
  "key18": "2UeaXzrU4EnEjVDU197sWHiziio3fAd32YosKRfEMRAd1fZKLcqL2FB8kzRK5VYdeWzzBwfM67nciPb7AHQuA7dw",
  "key19": "4uZYQq9SWT6niFrsQcrrHYTtcqAEEGSJCfL5R3XeqQdEBgXTAF7FhYR8KgwcV6JRG6JZsusPWzHWWpCUbBsPzqCH",
  "key20": "xQGsCpwuyuNuEN2hfXLLEXNw6V1b4nWc5VBDdD5beD2Rm6ZLV4bgtNA4fGArcykKPW77ASAvcQtdcXetd6ixyxG",
  "key21": "j1RnbjESQ3LWZZHhS9vWztByYXZTgVzmczgDxcy9CaPFX6jagS4afc3rhEezx88xLAqKYRixXGik1zL5E54zerC",
  "key22": "4XQqztqU2qSNLhNLb1gytVqAyUW8aXP2nHQUdC46fCmoLGPK9cnAxjuYGiuPR8DNHgcGGnupYNGjS2ZMyS1vuzT6",
  "key23": "BhsM2qGS3ojDMcVQ2rvcqDJqu2sfMvVFPDgMkpWtk4kMFcoFkc6Td5yDPtvRdoVVS4h2HQdrmyS4waAmHkRhs7d",
  "key24": "2hb2xtcLYnaztVG4gE75SbJVPkTU9dqvXweskUm9G1ZsTLwhF6xiRZihhKwjqNi534yYa3qtU2wuFgTqz9o1akAS",
  "key25": "hrkfte9YqWMc3DzoNiph6E7kNLdWRiDDzMXEdxBrNivmp8DMLUzNbcYUPptWkAQwYLKM8tvBCEgmNMsNPr9nXmE",
  "key26": "5bzUVHUmXinVT3weqe534JASTDrX5noq3FbCZ2ojbAdX8XQGaQGn5aVptDPBjMCp7cX5wcNm4qCYEnUq9nXgZpGQ",
  "key27": "5tZCXyB71sFoabmFo4QcdLwdQj7Y3nYndrTjScaZpQVo5hNoPBEihvRYGYPv2DGhDv18RZDWuWLuJMRuUxHE2YtM",
  "key28": "2UxVBRxZWHKYiYBvWog5qq6ocCWwAvQfWG8wDm4iZbjDhkv4iXyBYQYW4Hok9fBdH691WspUerPWf3HTdyxcvHgZ",
  "key29": "63dGWPetyJKCfZ261tg8Lvpn1DDRpyKNqABA8p6DKtD7e2js5YEKiazXcM1SzF7TkP1RhrmBTDy19PPHjgqvbfL2",
  "key30": "4pQeUpvupZDbgd4xGCcp9jh9mJtQm2ZzV5aDCQtnn5jSwtywAS9duRa3rcxQLSX8QBFiB9ZPNWDXihQyvXSvkxj",
  "key31": "3zNxzAmy5rmc82yyeEYczT5xm97myDi7XETxK5iUAhg1HMtUjjbYt7ALNvSk3peP5WpjpmP7ScqJHzqhFN8ALseP",
  "key32": "5f74owzNjLfJ3RoJ7rfwJth9mLB8zWvxYBr5xa1resY8mNHWLvsGdfHp3hBTDYoSUxVaR8V9xa6b5UoyiMu8Vc7v"
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
