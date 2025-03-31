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
    "5WJpFKdrs39tADsXeuNFGGZz24VQ2yfin3WJdztrLnF2GeHDWQQMBEDGzkpEBeWCZryqbhWumRhMu3GbnZf8srdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BHVhroKQ5YkYtqADtcHF6yqX5xRhM7TTkQ1mhZ9oFAtYNiRQVxGH2nE99QQ9jB8UR7EhX5Q45tFJp2J8iFjQV6t",
  "key1": "sahEaDCpVPLaDU1S3pSNGWRw1AubhXHJX7NX5aM8DZH4qPwDhDDykQwb8ARRkdsR6nShaxsBqSEj4rJKYhLByVy",
  "key2": "5Jq3KLBK6gvBceLSJ9kj6i8nWi16o66usBbaGF4KzaMbqpnknQVVpQ92U1ikJNk1PNF1kk2BF3CubsTaSEJmLW8T",
  "key3": "2SweqSLZBofqiavrhXGsgZ9VDLUkBNNNESeGhgvXJrRQ5iMFQtGsb45BYkggAWYPJfTRpyTYYaFWWty94ABFgTig",
  "key4": "3tUeE764yk4x7F3C5s5bTBsGHLRfsyz7bSbXVEp7q7LwLiTTPF4B6vrnW7gAH7D9dpE5cGqTyqnh3hBVeLzkcUYe",
  "key5": "5EshYy9BVXKqX6sd741NnPuR9PWbH4u5BkpaqMKiHbemgLxM8MWVYxKho4d2aeDjuxHAPL9bykX9JU7pgJQQyCcL",
  "key6": "5gS8ME6adA3bJisJuUp6j2vrZAoViwfYUFWEWwbb4diBvCoBjTTQG9u8GWFdhxV8SmzpvCXMo5uCaMNcVoADYtCW",
  "key7": "47LuCUyCFAUG2avsNJcq6xEZDnGr7dKiePo8RrfwjGyEYQogL9KWp8ubgbWWmQaXfnWPTnXq9WiZpd7S2tbxMRoy",
  "key8": "2zFtXxNHFjEuJmr5rtMyKfAzrjz6TWrH8QN5TuJnRFRrAAKoxQcZpPUjR3D1K7oCEjm6bjvxjtpqaPMgS2a8aiSz",
  "key9": "5JZyfZvRp2fBsuPtnyowtMKShFE36TeqRhQBBLx6Z3mV8f1xfph2RqM4nLm4NVHpkxFiRzTghu1hFkrnHEXroGmX",
  "key10": "GLKNHwU4fS9UYJCAX1YrPyPT1AHmeCDynfQdLzaMrQjLCAyh8bSAAjhWBYrUtNEdgfmXsgqqHQvxp3JsVCydPL3",
  "key11": "2sCRhyGk4U5bJCVJFFYkokRBsaeKfiejHCvNcfjrq8upgehBCJTwpYJ2UerSk6NuX5UoXg2mp69iXc7wTka1WbJz",
  "key12": "4Z4SfoGbDHXTuySqbnpxSoYd5bMLAiVJ3dAt7wbjf1vsRyCRF6Lwft6QZxmAWGCDgKfqz176tyzNiV9L5fHx3Cdf",
  "key13": "5cGsoFPc1Y7AgJqTY953UNNHgQudXqk35MdJ1fjk2y4bFyj9RLaBshbr8L5k3YJCe1ndy1ovj4CFJ24zGk59rFcW",
  "key14": "Rrk1szehbSwPfYLbj3syuPktDWudGH1VUhcNxbrJKfom3ECZdSjCYTX7UtXW92dQcotBB3ZXJNLEsL5gjtVHX8B",
  "key15": "3m4goCugmcHSrtAAG6MwV5n3Bajoo7s7UuiGRP3GyQtPqEZiKfab7U3UAMaDpEfXN5GrRAE2e7MWvx6SmBwqbWFg",
  "key16": "4JXKhG2b6Nyue2Yc24sedWAJ2Lh9UbPmwGU7WJP38w5Y6WUc2e2wM6b1d1qR9jB2xEw4CdGccPfnBze8EHBLtxcw",
  "key17": "3exmzLEK3XVQGa7qMQHtAfiUfjeFSkKtDFBwRQbLSzD5z2AuSC2usUHQp3B7K6mPzd2pQsULJkWcitvFgtHd7XLq",
  "key18": "44qGjRuHjPRf8bmJc8sgjpw8ZmEum4UZLa2woPGKDtsFi3AGXHSN2pBu8YAQTNa1TauGXrk9uyPXJjBXu83HNAig",
  "key19": "679rACgFztr8oUSLtomeW4J4Kdp1HyJzSGjTvpyediSHAusb6kiVWn4qrxnidJpuXknjN1jTg9zZTcVWsQy1QTvo",
  "key20": "56knZ6TFJtnpGLoJJhjrZeiBjKPx6fG7eDJaWPUiczFWoYGnDtvQ4eJcYsLd8tGESX8d4LzopxvE7qQ87Ai4m8dz",
  "key21": "233AGVceSwawf8uhk5e5B8bDGLCdtaZmukbjK2ArWMyvEG1GpTek7iitrkKhDKxQwF9JP671MuyfZhBicXy6PieZ",
  "key22": "3zqdGT57Q9BZoxWkphhPkfNJff6dP1MZSjrNs3wqtcfSY6G8R4wAhh6C9vHH8dfMN1PbVdr5SUpT62L7gdmQnxG3",
  "key23": "Kfu34cwhFCWMWfwbR6MPRFKXtANAmsaE3Yji3bp9aBTFvV3zQkhRBeFBBchwfRwmQefCZWbwL2jVs481EQx9oZs",
  "key24": "UBX5gMvC6W44JWEEyQZB8xk2pAJNn7NxB9snrUkDn9D6FreTLNHxM1gpaRE2PvCzk1v5Me3xzBw8aSpJzdiCrF5",
  "key25": "5Kci86h3P9HZyVwPGW1Zf4pYYTvqUoNmmnyYage2kCvrSt4yV4E45wHWARGL1pGxJH6xYmTH1MXHjzGEA5HP6zz9",
  "key26": "3rVVsjzDrmdFpV7XXgBUVsE3mfysDJoCsxDGt1AN3kczMLAtHunmEjAMEKNjQbPTsoYzpe4oyMgSYDoRj1uFxd3q",
  "key27": "2fZiGBW4xodmGLZMgiv149P3WMBM7rqub4YH77CDECP36gyamHfE9zsmspiMi5urq7V267W5nEisCYwdYTxDs4Kq",
  "key28": "4s8mxbzXRKmPtbfqwXS8a52YVdyAZfzstdYQxnaL6gYad7fwi3nFzRTgUeZybb2oL4Fvpwcd7irUGFY1VZwckEsm",
  "key29": "4XQ6rPh2LFDh8TCdC4bqwLVLQJqPz3PxZZWa1Lhtygsb1wuncWfS5sfpjaqjEMr4C5wET2nyWXAnBvgFKFrcNBSN",
  "key30": "2pAAuD9VuwzCRAAN9k98BD5hWg2EPSJrsNS59nQUWoxDzvYKmg6K5oGDboDntTihuuHGP7hL1JdWhr3X9cNuDGKk",
  "key31": "3b1thNdBM8hiDPH25XZYPiu54cy6LYvVT5F7MXAW64vmecfYGbhtLRouSXz3hiLHGkrPVX7oZLeTHii69PbFRcPa",
  "key32": "4fJrFYeosx7gAKh7uYgiZrQhoF7T4TPhdR1DsbA7bMbftnnr7hXcgEB6cT7hppKRdW1FQXuVbB1ZnQJs8TFUvKHR",
  "key33": "28EuLEAXEhm48pwnBs3ixFbsCgW1XTQ76aDsjPpscsvCgjxtJuSb5ghMkseFj3uj2nxXzaHRfRnkNtM669BBTEa5",
  "key34": "5xWd97ATnaAky1m3mTb6XK9856gkhp5L66EFkwoVedGDeFcHyx9ocZ6KwdtYrWXtRKUCVTz9hGevQxTyRHgFUJgE",
  "key35": "5AMdpfnPyeSKpQNyixdCGH59yj9BJvFSFy5PzUYeTJpLSm9RmwwzGtHNmENtRGt1riJzZkDBitnkjgz1HQHSFDYj",
  "key36": "2oBJ7BvvTp17Tjg6fWGYVBzvuTpztb29h1bidFWs2CuxMT1k8GzJz8Cbpxs1nDCyQefk6johmJ3rPBc93Cvv661i",
  "key37": "3iZ68QMhzC7ZE82P1D872Cq1ZRBPsz1iGQ63UScJ7EsJYjEQymshKp1SCxrX18KUz7SSzzDv2fvEcJaDhHk8HuDg",
  "key38": "3sGWeVTrVXYzMq2tycJYn6Juhc6i3dgwyH5vnFLaxLaGRbsoPqK3jefMywsguNH2ponLqTor4kfyGoEiD7omsBM3"
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
