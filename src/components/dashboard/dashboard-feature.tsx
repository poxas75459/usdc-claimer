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
    "5ysRPG5zjytfbxFdMxVCneVHNV44xsLXt6J6Tx2USGgrrEbu8uxS8AmxpFJNEkcXxv6nzQUAb8HFiUQWji1miduZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5piRv19xzik4tiQVNv7vVZ2oToA9oRro6niqG4gQNhfcHFk9AcP79YYCsbN69Q3ArGWEWduHBEzKYHG2qFv1XP1f",
  "key1": "4a46cVfsc7oNb9XtCBW93JPaquMfeWuckv2QtLmMGMSfHUfdaXLkXbg9bjMvEa5AUxULkp6rZhrxz41tXPsWadb2",
  "key2": "57sVEBSHtWhkvEBUUCb3Ts5SY9qFQiyW1L1x8amc1N2F62MHcRSeL27BD7BdvFhtgARP4zydSM6KpBKqJn8RnyWx",
  "key3": "46sK8h3K3KvHG1zEd1H8mNAyKLisaS7pNbwVGNGTBZtejPb2ZMMi5MfZQ2fwgNBLYrhtpKyCBkCAa3jBxBTMVzue",
  "key4": "3VYix6Niun1aS2eKqxRquYJuJP5xuvXoDETMhidDJ6ykHbCMnj6Jd3pWDGHVo8z5tkL2H3fthcxaHTFe9TyvhSu7",
  "key5": "YGTnRMGJxFc7Rxtid4y1QvedbV2cMZUBTnZaQuGLtz9waVQGxXddcY4eCLXyxL2DQeFXzGNkaUmcH3K9GfBPAYA",
  "key6": "3DjCqYDUPe5K4jhhoXbF3j39p5PvhExa8A52So46P7AfXEZadAfjLYj5VbPhzv7cPxbzTJqLFLviUBwpAPHCtVrz",
  "key7": "3euiHgS8EtY8oG2zxV3sESzhgXri1AkniwYCDo9fuDBtC4XLM9LDXAQDNw8T59mbfumWBBT5sRmkX6HBT1QfgFKm",
  "key8": "4BVUyAePeCsg5tLyntdSsoyquHtazyHoBPfZioifj9zAnmo75HN4SLFAxVqAUegdhW5d2rtutSXXmcfg1DusTc2f",
  "key9": "3hZX3oms7ZfJTyc8krajQhFj8cFe63eriTvbk7xFLK44oUdJbQ4qtGtRZ5KtDKcMPZfKv5iRTpqvqkuN6FZuPuW8",
  "key10": "41bTKZEyCz2cW8pzt2hJELHHk67D4f6p5ZwQWfRucCcfkKaJGDEV2UMzGzLHjp25e1P928iW4weHfxdanLC2frtF",
  "key11": "U5nWAovcEmFCR4YmLPWAS3AszU3mWH2jQGaayqKmGBEhdRT46vWE8hMXEUJpzpG2BsXdjh2wFFRYXEfUXpVdh5R",
  "key12": "2jeqTQc3gD1UGoUn1Vza13nScyJAh9xpaKHCdsWbSamBSufqy8HuEUBFrezGdH7GbYhwd9yDcgYz3FosVJAGBH2s",
  "key13": "3nyU4ws9FaUJsgq7FRPwwX8n2CRi4TJxtSHkhd4jJaK18zMDSPBDaSCdQHuBZRaLjfcRvJJ5TtkDxe7pnHUPqscx",
  "key14": "4JQ1AhHPqNm3bP5vC4iXpTba69gaTcppzT9We587167U1BYB6YCNwSh15mkHPXv6vh1q6iPbExLsJddpNMoYQQk9",
  "key15": "5fx2Vp3XkuAyLviT461QaZaoi7Ec8QGuocpgU4iUhGowh5qBQUFjodos6WfdQEKSUDvVeHuE4n5XmP2SfhmxLb7k",
  "key16": "23duTXMdJ4LzhdNPSYypYcx6KMtpzJj3W6rbx9hTHEysiom8R2t5DkYoKJCms1xkdzvnNkFHkKvkQVrSzoAcJFf6",
  "key17": "3k2ZT8Xq1jUzvB7Qtp7JgT4CUQYYGrgkEUN14DXBgthNKsUzgbodFRtF5x2FhrGX1mhcs7Z5pqvbjqxXvHHkhZds",
  "key18": "5gxLNPJnvswAMjPEXRvdWk5DeU2jEqaA9SZPF3UQe1ZfHRDiLkpfsrHj1F3XjrWNRQ8QRRTvGYgRxaeXrHncq8Rs",
  "key19": "2QVGW3V2M5sCStB2ZUQXTDa9cqUGsg3HVRM4weo1iLm2npncqVhJa89dc9sC3WcLJhobFgrf8K7Pg6gQhuFtPr2T",
  "key20": "2dzXDQHTyQuytfu95WqwwFUiUGDihWhCQnjCvGZpDnh8wXGFNNTiiq3x73o4tYxBAN1bVRQqNuBGgvrpyXdPGYsq",
  "key21": "5CaXHvwFzejDuCUKUFHjsSk2HFVehrHZPDxpisf7RY1Khps5EV98ccXf43PUXVRFKGYYMZCvwXwF2tiiV9iWvRiu",
  "key22": "37wcNeT95v2FQec72kuHibPPCPn5hrZFQ4bPekd76be7omSAA5BTCNsSyWFiH2TEYAxpwRajikbbpi6CQkzDn9hQ",
  "key23": "A74o1d8oH3iQMsLhYPrcTmLEZbFW8n9UfT2C84vjAnRLxHfn8Pi73AJ6XTFFF2HbCPXUAemjfccVQcAa3CYWEhC",
  "key24": "2eDRsUi9imGA3KdfyqSCGmHc6jd4hkuUvYyQBJsVKpoPta7N5JfG8egp1D36NBUtsHdZrctEAexC9Dhd42fcvy6L",
  "key25": "3XDFn9mAJQp75FAmzZ6rJwwqao4jGH9fUnbqbnVL6HPYEUWinqjYmuX1zyJgTXPBGkhMfSvftEGwnyk52NWwzX6F",
  "key26": "22XT2yuSdn8KuA2tLJTnuQvY4HbyZ3vuoM5x1JGFsFhvjfKNXWmZLQu8gjTWSRd591KCiwCUdxprGkbpRq6bTSAH",
  "key27": "24kbQV5Zbzn2giN8sBXMiHnHDCQyQnW4TxP4j24yfY4c6aSsojSC6yA6CTyvb7q2B8Pc9XUDpvVwCKT1sZkp7XCd",
  "key28": "21FKXcETxyaGtrNaRHkg9Vi4ntgpmdYwyMVz1Ezoii27mD4wDWR7VNj6rEZFwiTq7y3nvVUGDmqMQ24nQf5LZrGm",
  "key29": "55GZjh68yLT9r8knuAmELXTEaK3BJFh3Fd6D8w4Y2t3jtdpuY9SEXGMJFM6vueZ7uiE4de4TpLbmbozTXZ5ngBER",
  "key30": "2ASbcTrf9xoesmB8ZXC4RwdP8tyM2wHh8kPW1dLv8ySfx5DdYHtYvD6svNJLRL6TBWv9bThpMqgftZ8vXyUL7wj6",
  "key31": "4DfzihDyVaog7Hk6ALqpU4uxoQLg8xvQKFTwARRjrZRbGsbLwuRBxnA6yUUYPqEjdKKUN3BoC8C1Af2xxVqhQcYv",
  "key32": "5yuDJQDjFyFNgCSfty6LK4K8HuEVvJLXTHEdCEjiJncDjwg3DePaJNoFjtza9BzgAJuY5XbH7tGqF2tZeEvJfy96",
  "key33": "JSmhYy5YwBqEDQafWbbycBJkFJSnssK3AoJZGpNikSXXcmtt2AjxWUH3RVWCmW5aR6RAKQby7YKa6JgV3khgVih",
  "key34": "2yBVpNDy85nsXWdeGh73WnQw97KEYLhE95gmkoK4Ra1zPUxTeDwScUwV3QFHK3c9JHmD4XmwESPhQizyHDu2bSJJ",
  "key35": "uwmh1SiDRXCsVdqmqwx5xkA2h793REWMqumKVWPJww7b4pxm1Xhy4W1r26ooxH5RzQhqfoqLBg7CGZQMuixJ3Ru",
  "key36": "3TkcucxfvkVSRBm9zjo28X8LVnhKLod6TA7pgqgXiLPdKpVMwZ31L4MPdnNmAEsMTqRBZyZeYYwibkCw7ikD98US",
  "key37": "5b6vX792DVYwttkBLTckgdFwgL4LAwXZersEwTUnWmGHj7p4Jju8xoay2bL1Tum9P5cnJw26dWPh3B3gdQWhFMWX",
  "key38": "W8ZbHm7P3tKbrXfWZoE8qKcAJ826AxketdSrkCbWLSHmUZhH4NZnA6yhypejfqAVYfQc84aCqnnecJenyqa77UR",
  "key39": "2JWjSE8w2b9816v373VEN5Dt8LShBHE4jSbiW89JdceQnoX33s1pcUgqK9hCJbu9r6c6D679eDp59AkqzFmg82RN",
  "key40": "22MqZSTQhyKtpTSJJXy2bs11h9iU7P7VMEsdCkHTqS1i7rWdyGUGbSh2EAVUraD8cjNBEZEaAzdLb1PHVTaLQXfH",
  "key41": "5tNQU8rcGezc82kmqi3h7GYKPTbwmxx9FdbndWqM3AHeN3n4CcP2ydVLBrsfkxwoHXeUivPCed8HfEXq3q8ShJqp",
  "key42": "32ZJQ18btcefcvWmSBZjD4sR6KSRWLzrbZ5yKaWitCgmCF2asm2cVCY3sbVMz6tEQfocqUq7TE8Ass93A9cHK3KR",
  "key43": "47y4WS6DjTkTehBLLqBkDMmDt98exU8pvdqU6DTRHS3vDgVZvRxtgghxCX5edv2YSMv6uMAR9wdWBYhQShQnK91e",
  "key44": "54igQ6jUadFhyYMKWy6gyHLHNLxxHTx3qG81Nk2pDD9n4exCLiitLgq5uYgqhce5yUrmHhiKfdeM1ZT7r3dKwc2q",
  "key45": "5n8kZJEVtaxUcujeuy7EQvtNR76AhMb9dMStNZ5qxuQWJAsCcwqQCSG8ovaHpHREiA47s5eCnc6nVBf5qLZSzrct",
  "key46": "344aaX1tNVRM5SVJ7qY2E1eVwESfNWJ45DiZFgR84Lneps5jWX5Pv3jTTqAKhFB8cg91xQ9LJ2fJwX4J4NGRfGrd",
  "key47": "5G8AZd8FgFanF77LkkqYz5Puvy9EttcBroomt77czE9tV9B3SPmQ8Av4RhSFeBJUbbagKgwivjJWj38czQzTx8gS",
  "key48": "5SYKXL9FeDf1i3fF6uRiivx84Qp4F1JYNivkwcmeU3J7Xndz9rmeEiSnZYZjWcix4axk1XWCrfCDFG2eRtjjenMA"
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
