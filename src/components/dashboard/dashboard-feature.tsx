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
    "24mAQKhFoTx266mL2qjxo1wXAt3cSEUbMb9aqV3R2vmYpeAmcvGSpMKYJN7sPsaxHAvi3eY9xPoiF4MB8M19XKRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qw4FNsgbdegoiVZ7Gk5ktMorbz9epnL7YwU4CSSQ25eGYQBFNaXnpoKt47GmvTXkLckioQnGQuSCr5CaH4xJA8B",
  "key1": "256netcT51VUR1US8Sc5CVAyniSvMfcTGAQYy1NGpFp496eWWT8RbhdJ5X2QmLSzwPnvxq4t4hPH66DnVGak1MrT",
  "key2": "4yiY85NbM2LejGJGPsAGvQvJfecmYuii9ZdCCGf6V8QvDVQSBDEKNyNMRxsncKCtAMx3QeaJHnXpodwAF3Z4VSs2",
  "key3": "4kCzTkLdgoJVeYMXKjbptFJQM2nmmu4bnrcUdhV8gt8hWRGCuUXAc9tCWvNsyF4TC8n3YVq6kj2zfctQBN5tYX8U",
  "key4": "24UXeFdVnFRFEZwa2uFRgAypsFRTDCRYXZByNkPvSA9yuyz7GNkzQ1Jnqz6vpovfwexqgVE28CMvYevz6g9QqesF",
  "key5": "66uwixYH4cVxrcEZfq5tbPt5RN3tnMVvN8gnd1ZchEebr4HzaARXi6dn9Tkitcx2843xjTeRcrEioq6G65zpWiJH",
  "key6": "3YfTJBFjqQhAgSxvvASqnkUUXUx4pcopynTBhhVHKdw4h2HNRvJvfo5HrBXmm8o4gVp1u4pjn3KXFjWK41iNfESE",
  "key7": "5N8rgnQBG7zXrepwvPCACpDgb1ydDaHeF2YSau77NUfoR6v2udywD6zqJowYiuwHb72smYPJSSnWnUGhmKNPELBh",
  "key8": "2NrNmbWDK6XEkSESLhpwNwsj6h4m132rjV5q5vYAT21vV3yLxsU6K4uHHv4snwe2UrRBnwndekpis1WHkAXdj3N4",
  "key9": "5rhHcS7LghNBdpSZkeJXEk5FvNTn8R3f6PFzm6Fmds9curmT6so4F8T6mjuBU8JLCEwtWe15Eddjq9YJFFQqe1jK",
  "key10": "2HhuZuN2faRu266m1Z1j6QkHrzJxMQ9n8Wdg6fi4YNSiehjqMHyux6eXTBRgTKuto4zgXEVYUtX9ahfRDuBrzTvv",
  "key11": "YqC34qHSVyq3tYFPQ7CpQXmacF5BU6yArEm8TspKA9qz1EGkaKq3TfSSE5YpkAaPdnD1TK6a2VnChqDcuePywmg",
  "key12": "5xRfpaYTDxvWxANuhQeYCupV6JAVDzit3beE1tjE2vEV1fNXgJA9tMmfTB9jxMvDpodiiPNvSDAJSPCcJBurhZ3d",
  "key13": "sy7pydxxGki9fQ89UeuGZhS3tpyEmmuJMBoC6cnJjkXdkyUw36sGrAE8eHAZrcuTdoCsZ6o9M4xQJ2xyowGXsHY",
  "key14": "TCbTF756wrbX9yuVQ866UR56BkEWwWEUDNjMsMhd1CyVA8gRqFN8oBBXhg8vrMPDZ69zvvuE982vtkXEQwwP3V9",
  "key15": "2y4Smzdp7STFHkmSgGCTkPo6yHGxPZiRFhjfkby7SaU8j47E5xuyssishMU6uHpzJG92D7z9dbPFBs94GccNjYo4",
  "key16": "5KPhFJY5X9VaAKVbcJx4euGB1KKgrN6R6Mdsfy9qpwm7WuMCYEgeqcJgHiwQd41Pw3HtNvM2Y9zJztWMCoFWkYuC",
  "key17": "58T83rM8EEkmMKf1cM4Qjv24h9GNQAm6Wh9xijra4hjAx98fRaAyCFJDaxwWhQppLxBAeyqAhT5zn9JMBVYr88Bp",
  "key18": "2QU6QgNnXgFpNA5h61neGkg4ZAfEguj2WuhSumTwfCaBJgG9eJygvABsKrQGjrUcqUSxqEyjgWrCkrDgqeUsLfNt",
  "key19": "33dMJVM2RdouM44zwfuNAEgbemuMfmpSQufjeQcv1SNLqGSWRjcycWSPz3nEvypbvB1sw1CgnSYxTYBoF6eQAP4p",
  "key20": "5v1bKP2QqRb4R44rDy2ttgATqkzx3X3Sht6Rps9v7v9K8ED5gTvYGVad3mkzbRvYBWY4ksHWWcB4GQHsdqCeBiau",
  "key21": "iZQv9Jo3NFQhbgpyUQHnwYE8KAqws7zx9ToyzusKnWgJN2eYGWZJvR51qzXGi7McA17Pj6mFmBubyqCaPBmUe1a",
  "key22": "5eNfDunoozvWjrP7S8W1cGfL8y9VxFJFtm77d6GnBGo9dwT7Fh6pzCtaM2cgAkskRUqorawYbJhazKDmdnpqadEi",
  "key23": "415wg48hMTe4m6mgkHtxWEfb5Gofu4Fc44nBGjVa54kFVZq1DbMH9ftFWEK1LCbTxA66WNCeUHiGeYkvaktcmnio",
  "key24": "4AbAyhyvtn4sx3TQ52iK3nbABaTpUsLwMRZq7wvR9WNmE4zxS6i5bkySr91svJRXFwBC26D7xdxsT44oU4pw7U4z",
  "key25": "5bS4r8Y2yRmSmydT58J2DuTLH6ASXLPRw9V3QPKwimMhUXGcUE1YAvsmFTvkc6JwZdfcweLrUjC2PYef18XTPN4z",
  "key26": "5TfzMGvJDgZ8B35fNJu24EgGtiyCGniMv9dkPNvaDLUWb8CcfF6ihcW64Hg1dfJcvt2y2N1uDekcAw9YUw6ttwTk",
  "key27": "43vEuETenAA6T64GWSNAEdrReJ8Yrfv9mnxBequ4A75ENQ3whc6rSoPVV3sH6FdbiEHJdSCFcQ8Jif1rEfMR75VH",
  "key28": "vV6aNwYdjTvgMbGbdKvjs5rvuKSNBhbbp3Q1dGg7e3KuBcMhEUJ4pnq1W73EuXL8jsVFNLTznSP9rscB3RsfqD4",
  "key29": "5GSE5raV1Rp9BCeC8N8VnGkZyQ5qkEwSrV1vSaWPNCVAaRdrsN9568AQwBmw5yEZBZ9QqmrD298kTZanWMyifc5N",
  "key30": "2ZyQURmDm6KFDwRQUoFQWwto1otSJeeMKLHfRqYYVb1g2TwgKAqBcQuqBRnMXcsodwb475nduoiwwvShLdd8p9mF",
  "key31": "5hC2g3bP9FqcbeKzVvfERHuhXVoHJ6486vyUaCdfQfpok5WAhdkoSLX5XYiVJgCgvdyX26qPiSYfb2MvAdgi23oA",
  "key32": "5tZ1YkQcxtytWdJDnnJt8yk6L3fRU6ibmpyDkthztYQWj86WJ7iifawBzd4mJEG7JLftRsXyeK2ykHw1FGmTbaff",
  "key33": "4fuTf6nXqkRm2maM2p95WJStjtLU5tc5rwFWgTYrdNbZ3H5owo9xQHiVp2avvreeMca4rpcqjdnx8wZVuSrS2MyF",
  "key34": "4PetNKgtcr5q7Apb5oU7tgUJXCfKXUTNxKibffLMTCy8VuWMci8wq89BFGRMd3vWfnTRbuJLab7zY4jJ1BDTnT2J",
  "key35": "oL48GTs3EZiR849wYecxtvF6oHaRFa9Ej9UMxUeoQb4PbVerS8ypDnFGKEKqQAxKRbc9xkRvHhzgbgaUmH6Xm7L",
  "key36": "3i3mdoAyhNSroVWNxBhvNK3PVhmtZVm3Fp3HpgUfA2vLqYRSbvF3hgwPRCe7LNwzNeDy5huHb8sooc2JMRKegj4i",
  "key37": "34UyxUPtkb98wgB8H4xu969946ui4AjTMMkKPW7dMc5CVcYyeh4bST9gcwP5rbzSaKTJLtNBTkjUHLCYDBRg4EPx",
  "key38": "3Z3URjQ6oXE2YWNrsz7ZHCegWkcVG2f898g7WPYF7GQVz5vkwRj82ccigJufJTGjqj5TECSzTwJ593xyULAYMSu8",
  "key39": "Ls5N96YQXoUYnmqQMtsPQtLiPeDsEwe48TDZ7xxjUUAkdHwZyWdqCXQoLnJHhSRFYghHi6i3ApG4aaRoZvqgNbv",
  "key40": "3fZ9DzqXikDE3ZgiAXyWxhudAxTL28NuAAeCWEk6gcGdY6456Pp2PrqLth9KrauQTFGfkeG1hwXHCfDPPmT2YrDu",
  "key41": "4hdZoe1az1DGh6g56oXuwXvLBbUgJbyAiDmpYSec8MtNvKRiPGXRCwUdhgfRqQz2DxYbuH5kEvac5wT51Ruqh1Hp",
  "key42": "5dzdRLH5UHhtpZx1QRq2zb3vQ7LAmjH3V11zjSMPrV4yNiwZv9Wqgf87q8v1wn8KjNAm1o58m7t3eK6aw8UHppxH",
  "key43": "4nbV4acsTj7c55DkVy4EaUkz7bdcmE44VexAEV6uNohgqQPMTtRG64LoFxRFLEoXMYkgd5QaCopQjn8vHT5TkNhp",
  "key44": "4yegioRH3od7RhJGs3hFECx6rbxCf2NPYjR2aZYxCHMDTrWQ5tpsxAgrSTotqkynXi4Uth29GHRXnq9ovVybmvuD",
  "key45": "4XiruiivqiAiQq8s5f7uUTjGRLbh32pB3y5xxGraKQdNMZvJ5xYrKigFeE7Fz2shX34tmgMG7pju5o44msyYUGpQ",
  "key46": "3H5J7fFNwtLWTaFczPMDs4z7u1eZaCMxnhYin26juwnr6h5cEL5ySUGCMQPEy12c5bjNryGWMuCZf4khWS8ALy6B",
  "key47": "4XzUhAUWMaq3WMSQ1TeNUXaVGqEQ7WWdZBWmuwyoG7YkUmrnwLLTyhfUias3bDiugkCjmAQSCNqXXZLWAtCjqF9M",
  "key48": "2RFhbRCDqcEhtQcy7CU7kyQEgocLoTUpW4R52i859JBr29HeRqoY9LXRxX2dr8FiMiMZEtuL2z2AHagntrHYHhj4",
  "key49": "NaRzKN9jpGeP1z7LrjaHZSiiGc8fDFcYSvHriLgQyYHwR2P4vzPCpFkhvN5KzSUe9tG7kSbBgQJs7AL3NudjUp7"
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
