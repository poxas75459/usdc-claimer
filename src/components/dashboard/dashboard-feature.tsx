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
    "2XvGaZqFR2emgTS4xM8GoZUiTUSG5H9Nj8D2HYK1NWhyCLkivmV7tYogN4HA26r7Hu2RgyNhH6Xbz5fSW2wfcXAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mxbQb1eYiAHwYt7LzgSo6pjn632w7CXJ8f99xUuGYRXMfHw5G3YDAcWw85xuuihha4EcMHj6DrGqhn8rCmTjZeL",
  "key1": "3YLykfewx5Gs2FvWidQNSSFin9iFvPxErsDFMhrHTdN5SS1rf92q3jEZ4AsQGMatr8ogsrxTPrq3Snnoqs25p2Pj",
  "key2": "5JX3fDgG4XnSsB8WSFTvVCjetGJQRFHXv1D9fy8oyK5LEH5yCweKWGD2arGaDJXtm7EWxSaASAPvKoXxZyzhgwSo",
  "key3": "HTL5PsDwZ24kK6EVwvrNvKyNpv6T5c7pynJnAshuFM2UGh2eTVEs1X1eQ1574EcVhdYWjoNbApGg9NbTnGUvZvq",
  "key4": "2qmm1Szkkjr44jWBsGqKHNTq5ZxmHYw2QAVyAZzWpaMiU8vVuf6wuefcy3EFFyB7Rq5ekafcQ1Xuupgk3ejAkrvG",
  "key5": "3UDpckudzxehNVT1RP3s27Piovwzae2FXNM1Aw5zuZXMq7pJNxwgdBb5rBR3nTVnxwsoed3peNHgcjSJJLofyfDV",
  "key6": "42WM7ZpJe2RR8NWoLFzXuZzwwctKb3NzH8ZccKCUCn4yyssWRPR5SLwpvLQUdu527mwddTDHxfZdxBXBRMYq3XJ5",
  "key7": "3t5ZPEVdpf5tqe5YZysK5yqatEqYWiyGyt6sTsWp7bmzy3KqHgNJeXdsJR7hNAhPp4X2eCaiTo7rTnDBhM6AovXz",
  "key8": "2wCZQZm4pvW28yWhu67DcsDDah2zsHknhGRuDg7od7k4MidD9XHhxfmuFaq4uev3837aT6AJfSeVsqSUrrCU2tbJ",
  "key9": "2gpurepUG4VJJoirA2c9SaEwDH1E8mCARd6EECS7A812WYGNz4bzUwBoozrNapedi76QeS6zEZhW3mq3tCrfAuDh",
  "key10": "35bka2xk2yydHR9E4bVN4mDZZHsgYo8Usb6Ea79pSjqxfK8enH6cboTdekFC9kntvwmnqBZGmCm8qy7tKc4HvHza",
  "key11": "4oFo88QqEJXkHnu5ir3Y1VPJqNeSCWBgEBvrP778PBccSvshcjjGSfCjxvxCsSipEfLHR2B31SZG3YghZsCgF2Aj",
  "key12": "3nHAPXb5LeGT56PQcBJtAd9HDSYXfEifrmifCJ5MMuaJRvhVE1Xod1hLT9bu6tLmQtKGqJ4epRQyfSCquiywjeGg",
  "key13": "NyAYa2FsLQnQHKC1Lu4JBtHFmrhLuytJad9uLL6YxiGrXyduMDrGzfVrPJUq7Gm5zpD8qG7UERgGXzTAAuVLQHz",
  "key14": "4K57ap73udRJT458jx1u5v2AnrWWhynJ4AJmMCPULdinrYDw5YRKKVy56mC92s2ZSMqqciQxsaVk8KGSRxLUSoPi",
  "key15": "539yA8ZjHrzwZT9k2E9Dspif5XnLTP2z9nBKQuqFkuBVjC2pdrYu5qE2jfoF7CP7eYVSFCZ16urdCUA6MN4hP77W",
  "key16": "4a2dN8LXo5t879kNKmGdkisxcA3aGPop2YKT8pBAkdxdsS41FvUopSK1GU3MweFomCaR3bQEPNPWmWB3FwP6WmPW",
  "key17": "5n34HH1NEKmH791DWr6ivo1ahp4sgCSi4xcQe7AdcRDmD6wT88GdAuSrPJSom7ucujCXvyGpDB2AL7X89H7fged9",
  "key18": "492wqewU3eQJf9kUE6NZ2MeT1uFn2D8E9xjyUNtVQ5r38uc1MZpQEbTm2fq5j9nepyTJ8Ripd2TsBAXqtgt4Wrp4",
  "key19": "5nQmunNUejeNms9mhv9y29qqhsVVnBsh3DLWxc1tDnnNY7zqGMUnaVw71eoPs5Mw5gPJL3V95rJuSFAhHGhLFFj6",
  "key20": "55Eapdxmxs5vaKNZ1S5MwtKrZV1qHQucdAv1QoZXEr4WCnzWRxKRSfMs5vydZdZe5ErodPC7Fh5p5artZCBeBRxj",
  "key21": "2EhnhGxB7LJQxfmkdhK2JeMxzCVNSmvuHML9fKpgoV3Cb1ua6rmwrR54AczqkKXfGqJR4Yoo6rpLzHzU2WUNzwR1",
  "key22": "3qwmmx4GbDYWvkZtFPVdPMGszv3jHwr7KQ4YeswbL3wHyKcckdPDNLquWy8HCj41WhHBSw7hxj54zieYGEVpJfTq",
  "key23": "57hEWuN5A5tpnPKnMrZEvE8zJWtswoMkRi2C3FEYQgwCWcRkBVdn2Kv979wYpDdKLH6kRtRLU1k8ySU8REbAu51j",
  "key24": "Jp6SVojpLiTXTn52JZ1nEULDnCbcassFwSNxVBiNhhxaWEQSqCisBrpMq87K99ZtyDnJEdq7MLvFHERfJ2yEVK5",
  "key25": "31f2JDinmtnoi3mAoS322oqEMWyk6rHJYVyjv2fwG96nMAaT5oU9JwKA3A2RHDqk7oKBbpUwfBAoCj44Lmb2AUqr",
  "key26": "4kRd7LESdFibh78MPLukzhUfTmJzPgQvWLnb2HDmfqnyVSz2kECFNU1LF66Fzrqyvqt3CEEYkeq6qQbWkUbeYR6T",
  "key27": "2cCxrbUYmiesbJTy8HjNGEA3KJMojzSELUWU8yEvac2x83ZVgQzWmj6PYCwE5BTUt8GRCpoNqT5MgTdBrgKmMpbP",
  "key28": "61gNARui5AmZBN1YmxtD3yJHWvCz69tAGaX7ZHce9fEUpV3jEaeZMvWRkMRmLbVzPNCaM3bEJYDqZbsL5DpG5hd1",
  "key29": "4KDUf9VdqHGrHjmkwm4QNutEGQvLUFjeFXNjFc7x2bN9jq3VLzpDh9Zjv7huygCQgs7pyvVfXaShrSuKH1R4oSeJ",
  "key30": "49XgTtGGRtTbLBz5wahqVVwkcMnzxTDQMH9ECyYDGK397D5Q5F5BGNcjVEi5BDrXiicXMVX9QJnUmiKc92HsKuMA",
  "key31": "ReXXSvoH9EXipuHeVgNAjcBsM3cgkr3eubfLJM597cP6nWArnKJPzxhxMcytRMpm1k9ygWug3iRP2d6eRF4DsLS",
  "key32": "3RPDcqir2Wdj1GGqAtSNDsFohTnAnvC5fsjZ88Kixo2xW8cxf6Mn9QtzA8FarGk5nJ2Yf4ExoHdmxPC4HoNzLXav",
  "key33": "sK4kKduYzmX9ciaSHAuf2FV98CwVuw5DoJ4FMw2ufYYNGUKX8RXj7NraG2jJuPZk5q8XaUcgVrVjdPj97QNoU14",
  "key34": "4jFYUCDDAy7McZkWxnQt3Co5gN6b7i2Jhswwxzm2NjAHRXa7EXe9K1Kbdub2H8TeG63GJvKNiVCtWsnjCivEYUWa",
  "key35": "4cm7oawnoKQmiFsAPNcRniT4TaZUAphwjP66iVoTFjjtYkqg7Gb8yWaxS2zJACeouTF2yQeKxvto5jTKGrYCFaER",
  "key36": "4vzjnWVsJ8JhPZryyJmUEAjYcQhT7hftvLQShU87oFPT3BMbjyEjpn5CYtYX6Afjn2BgMWGopw2wJY1PFXdthx51",
  "key37": "4v5bSfrcZwVnCF2ozXpDhceZZUAvTtbbWCa7gK3CxVPe6vUQkhnc4TZ9ysg5nYJfpydQ4W94kmsF1kMXen536tVa",
  "key38": "2rkCyci25g7Q7yC3SMmQLJiMSAPgbjf412cagsYP133D9gSsbJDW7bbhtZpY9nYSajJ8xXmhaU4yHAk6FvPojkZo",
  "key39": "667Dpq76knwrVdPAEc1bH25sVfHMt1F5gPp9ox1kh9CG7WrXskYVCDQJXHt9MdWVzkMAsXQ1agdsGhV9CgQoNhbs"
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
