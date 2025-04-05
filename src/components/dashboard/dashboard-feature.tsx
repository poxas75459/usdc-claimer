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
    "xdDFbzWTkTQjCcYP9X3jcQX1fQQsy16AvyncYs9EobcxbDGZo2YsnbTHCPmMLDUJRanQ8jLwiL6ZyAzrwsdshT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CnxWVeWMbeHvmfkY4CTqSueGgNChYccAjXEgy2W94KXDfbGBYNojMfYj9RcVJEF8eX5xZaeySF9oVCJn1iAs5W8",
  "key1": "35W2VZX8pPjWotSaDyM7p3ireoSVpibQtWCqTLDCGPpDFcrMZVrLat5fwLoJWbLSExNbo1ueoM1Y471NZzStCX5L",
  "key2": "41oxYWFKeRtSyD3QjGudzyYuSSYc2cXLWY7wYuGNwC5Etf46qyixoDYVmrceByca5NDbWrBZdhj4VM744HK6ifuj",
  "key3": "35FSXUGVFDR7hr5jqPifxrxMaTzMKjspg4JJprwNz9zjGyZx3QsFzS7EKHp3dw7vCSDQUQ1icHu3xYm8Gd9YVJxj",
  "key4": "37PdiWoNxc8Jf6KeT3aWtHMncmo8bHMRyrMu6cnb9WSSEL28iTvqmNf3RQ3ACt5hsZH4tNLh3bn6xTHK7gtuTYGf",
  "key5": "JLzJKoZapTRNhJVCEUUcFRzoHt45mLUsUK8SGH4Rgxeqq7VE8zfteczeqaEi5UWsuh2hJkvkoTabU6VLWxFK4nd",
  "key6": "5RfxZvcMHJdMGfgrHfed9grcDia3bVc34r43qwcP9L3G4GsnBe4A9xVVWWCzL5zt1vzAtjguqBNdrLarh18srKiK",
  "key7": "2WaMvxHdCBWbsznpzSpFmWNXp8EXGm4jeofX2wtEkA51885J2Hri6A3HEQ6c1h4azwB6rVDVRhgaPmTstahy8cqE",
  "key8": "4s5UHnKwrM2TdEcHrCFEiw3yrWnRnb5TPGCrnSCW8fFTHAAGKjdr4VU8U8oyyHuHVwsEZS3gAMtNzJndYzuNro3o",
  "key9": "63VTqMRN1XTwUKLQfWqLviDxj42VkD9YCpA2orozDVHYiNKqHmuQECzfQdJ8eqP9bL3QK6TrmEgnHszhq751QEsZ",
  "key10": "5dGD5vyAyVEYmb5RHJmnMw7qcY7GFavpa64mqKS4JDAew7x4Uy3SmVUxXBzKBdbjW28iQyTQrfhr1iSiUmxW3syi",
  "key11": "4Hgdqt5hPxQivLNPpkrKrajgbDVgUj9XaJcSzN4vjes5E3fJJZWauQKi7dTjmqkPXm1E4Qey6or9AVq8D4Z4MEtW",
  "key12": "5BUSDZuPf1KCTeVTVJqZAUdrDMjBLCoEe5B8Kp8G5ogwc4JnvwrgfTWgRF47Uw3YvATuck78n4zJ4s7Uzucrsit8",
  "key13": "2vC5Hwu5mTvPaHGid5RFz3MfMCdjjMpkcqBjJXSeuQ8hyGeNKhBR4wWh9Pd1kqsbGgiwZnUFrWYHawkKkFkmaZWZ",
  "key14": "5uR2hL5929nGLRmsDXtzQDaiU3XP2s1ioSsLLWsrgCtQfQ6vjo7JybrtnCNUQbBFMTD5gNq9VcL1ZTbHuiz5GTLc",
  "key15": "53LmZMt7jL6fbW5hRvR4obY4eeKP1iABhj6iHEuSUhTV4vKjWcGWhNM4ucU3ZdU6GBDLJjD3yJDRgdoByPWURmZm",
  "key16": "tgpz2q7BNfEG8BxweRaLKop9WFFr4jnjWLu3UbdmbVHmA15HkJ9NgVY6RcfJrU8T7KsKPg2qFb5JauduiG1Qvdx",
  "key17": "2h23cQRU3x3HjX1n44NN2Eai9XwbiaVfBtj7bEy5KVdooEK8LmAdjLoVcDL2eGvQ9XYioQg3mpn8H3Mt5z7t5bor",
  "key18": "31zWhPPMKomJeuzygmF86bDVc6uRL5P87acvb4EJPKQEKEtzfjivtbqN95LaQruK9vjjNKDhVu55BATksUJsr9Ck",
  "key19": "2QwZ5n33n5kDr9rbUdKV4zhz24wJAQUjeZCUy9p93HYR5zRitWrS9HMUu57kRGvAMmoahcRc3pNUfvHjAoE65m73",
  "key20": "125GHdFXcRufDEKRRbPcrbtrGaqQ6HsfaMpEKfU6KM2yPUQWbsM3NkibQZ6opp7NkPtK9uodGVuBCoiZvN2Do8cX",
  "key21": "4TcqwqRmKQjJwWbQ4SxuyqeCkW9pLZWeZtLm3Si4gqCTJpdqQMAGxgjzfA8BurPnfaPXrCD7qeadqBbsN99FgS1Q",
  "key22": "3qvHs6mGYWGNAEsWC276Q4Aqg6FRaSYBfEy6nF5nk6yCX1GnVu3mjCa1eeibRqSNmp33VceXKQmAMwgtGi1cnvSD",
  "key23": "2LUhiwzzsceiC8guasgDz3p45KAbLTAB854zKVEzG9M4fY4zK5v427Uu1EShg6qgHsNAeZYLKk92kitc4jz5FbZx",
  "key24": "rxbWPzWDPpvVFhNePsz3H5CXmkBHsLVxZaiCF1w5y95Q5bQc43UW2R7HdhbsLEBGZDZpgT8j6eWQYU2YS8MBWeM",
  "key25": "PE2FJkwTno2WdLcQf8EnUMs5onR2MnEq9yAUsuiDrUtbkRKS5LvtfB2oL6TKnntKCbFUnfj1ejx78M3i3PXkwqg",
  "key26": "Hm6cJK9Atm2RieKnPsvokqeizFZD7WTHixgjSEhWEFt4UFx9fpu8dchPuQYrJeNCBaVEQLSwyNtU8Y7CwY9pNLm",
  "key27": "3iEMThQKdPKbFZ1ZZhaMwpY372Aa15b7BFiWNud297oYQ6T64uwMDjHATZPuwHSHtZvwoFerC78q7NQkoQZatpj",
  "key28": "3BXjMQ36eez5CaxhvEpeGnyHjTLKtJDUJXMeTFcfu9fbKtwx43kMLxLnNjo8ySC2M6T9deAWb5p7f8cGniQrDsrX",
  "key29": "BM6o3ohto3ZcxgMAeuJJGxxSffno9j7KMi1dTCN2XX6mXcCbGK2evUJbHRv83fkgNdgtFdnWeNe9iUkjS1q2hjv",
  "key30": "Qk9b6WcVJkpGqhwb2v944ZkdgwKzq8cdEPNEMRRbj4hj1QAWHMgWP2YmP3v7heCEDZJyVMfCKUUDZPGUjmQ7vXa",
  "key31": "2pUEq2xWsqZyQ1pzD4LdrX83MKuSsNHeHufX7LstRsfSCrWfFXyb74gvq1oEmQEE7p6pnWs4ev8SKcCFCp9s21xu",
  "key32": "2d7HDvK53vHwamhA12Fe7qNuPsazb6963N9XFbqfg65TherH7AicwQDKMqY4uY96CVRimxx5r7cvmaTdJFnz8kba",
  "key33": "37tPuViHvMhmSB8GmYkykuuAcgMHPaVJWZctVGAuSEf7yNoE811CAQZ6GSE8sUkSMPPGr5Lfs9cTpWU6jyFyXKPC",
  "key34": "4aSc1baa2JLiPQtkr4Q1avsXYBQDWU2HDfNRuzGmbSiuecFUhnFjCSa6zrzaEU6MpGTfNkmBTc6Y7hMxg6WFwQg1",
  "key35": "5QksMDqH5cZgY83QSWt5DEYNKsVQ8U2htoMgE5aTJGu7DR7SsfJc7yq5hyc3j9LEbBkPPkA1SoNbjjbJVeAKtkcE",
  "key36": "39zg1Vh6DNWFSGz3GEu8FSeAsDG4YgeWUL8QxF6jPvJZRa1A4HWWNQNpHtDnAbBAXTkhRfC6yo75QTPz8svxQh9Z",
  "key37": "36dHyt81amCeRay8eayXBMCDF4RpJX9jiHzcW8vi7nKhb2VQAkrH86DzLnwtw9WLG8fcC8RfAceqQLAU7muNh3Sg",
  "key38": "66tMhZqi9kBqZ6AHZ1fAKihNsw6ZeY8ErjwR4pAeTdnnbrusMUw4x6KDg2qQCwL59qSWwz4s4sxhMGT9HsRDXfvw",
  "key39": "46MK8KmpdbjZ7EteUPBpr68j9SPhVUHhPpxHtLNe4FD6Ch1J2FeExL2BAPZcihkQZ4PMWvjPBZv3MnhDQcZFhmhh",
  "key40": "5Z57fXc7e2wk7mzb9N3ASKG2GPJ1c5DsJNMdSmAGrcZ98YygLGUYJWDgvPRmk1jHZe39b87aFZ53ua2ttCDL14tk",
  "key41": "Sy1hknvawHgxq85xSSuAkHX4v93HXhbmRUYxiFhbxEqqssNqFYADY9hjcEXUjGb4vjawhSFsFkRh7qJZdqcTuvj"
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
