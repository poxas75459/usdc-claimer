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
    "4JN9ZgfrTWqViDFwF1FmHQGSGj2aP6pp3V9uWfixM8iTUNQngL8coee9VqMfADwc2AuLqJhDCGdSAoNiJEpKFogt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GiYAVJaQkRq99TATr3bvepEsK43DWrCPEoC63QvjbW1iX7E9jQGUBiNkcgK1HzRzj6U1q67LpFhts6Qe9ac9XGH",
  "key1": "66YEP1r34YzSwAGVcMFbQrqqZnEk12agroeSEnzL61Mcm4FCnzJ8vwoyfSJxQ6rXTNvdAoy1V1v8Y1n3651qjymL",
  "key2": "2eDg88ZTQb16ucGDrV5EbXNKpwFGW5BPzftYVuLQRY5Ex9Ae9aaawYAouVPZdwjyvCqXbKn2bVbMZ8PJ68xfUtV4",
  "key3": "rXAmtDsTMgWMcHahpwsMV7y6C8ym4GJU2PgDc7xxh3YxEib36WoYLE5tvDkGYqQ44c9iZNdyrQnAvAPHw9Z7r6N",
  "key4": "5PJmc2EPGisydXaKfNMdnssPLoNEmS5MDdNgiBhGY5Lf3zhJQCb2iyxZaF8rab5o1tmUC9U9kig7ZHcZuJMiTcUF",
  "key5": "2JbKpHVPPyYTL5pyrcs45CByKvy2dtam2jjfbjpgocWcwVgLsBe2c9LMNxB36XiVPAhZVyEmc39DGX3b7ucSVnwJ",
  "key6": "5r4z56F8wq6U1sCUbKWgvka2xiAsptTmZH4YnhogZSY8EZcvWqagfKApgGSKxSv6ozWgmMALtBcBNsEeNK6JRg52",
  "key7": "4fmuthHB5F9xLoozCejwgfJzhU3GFkREoqtbRbWeRHMpNL3JeH1VoCfk4iy5igw8kCDMHvyJJ1jBoyhGv4TKgAhW",
  "key8": "3sCnbxcjnPsLzUT1S77ASGrVLE8U5yF6PUMAkHMNDZn7rg5qybEDPKfX2iXJqUhuQBNALLQAnf2NRwayz9kUeB2f",
  "key9": "5zyJwaeeWhG7E9derVAGrk9jmYx3cheF7a8KzxGCGMDFn2TRaKeTSYVL4iQNtpGietk4TMxzNmhaQvgFBwzepBT4",
  "key10": "2iRHd6i7Ha1thpUjezvwVcsfsvtdtbKAu5eM6unDLgWhyMiUetohimEmqvbhVVcAv6jeyfNg1CJbd2aAPBxKc9RW",
  "key11": "2XwEBULyA5cSXVxAnwBCYraGgnpkuCBozACRbW8FBsU9a4LNyM8qc66wb3RNdh5oE5kugNnCJMw7VJvGPiidwFP",
  "key12": "2bdSk5eS8kzHP4WBVWZ2bya1CwPqMcmt5HVPqnU6kAqySv2XxJb4cZo64UdosLqYH3wdbaCpM9Mf3phZHor1fUyS",
  "key13": "4Sw1NsJKdBZ69aB95DZjo15JjcHEUeURA7DQD9ZWFzBTXT74VgCrySS5aaK5hEuFt1jMQ2G1ZvNJ3hCeFMrePNzn",
  "key14": "3ytW96XUqUz8MvUmpPNmAo4zAMDGcrzqYpqGD9M7iLm1kFavmYWmdCodDLA1aDujRmJwvCBTRcAYLYktZzrFmgsP",
  "key15": "3KstgLpxUDPXhjgTjCi6q9gDuBynq2XjFRi5jYc8Qfp6YnVbhTLuh3gLkfQPpi2g275Qeg3cAfqKX2zCo6FXyvYX",
  "key16": "z12KUdTmUsvMoRr6bivMtdVjoLRyBTGpuznqGTrqNiSNu4xhYJbpyqyjXukcKdRd91KcU6N2tfSwctdoFZMbqJ7",
  "key17": "3QAhEUvUsP8uLvZ28a2KViNuJnYg9F6Z1271EKAVUVHrtBNyjfbJycNGoSxLsqnLGHKVj7hTHyuBKTBemGseVRKN",
  "key18": "4T1a4WkC35uxDejB3w3q3WRrBLvuS2yEw7Y8GeKApfCPhhn3YhTEHoRjAQxXUJK4PFgMPenYWon64CDc5SChjeKg",
  "key19": "4mT6jAySpBHKHkFxYZjrLpmZQZGcQ3eevaTtELVuqBG8BpJW3R3J6ujChYsSrqNU11F6j3TS7dfme2QPq8WGRFNX",
  "key20": "5jokXpZkJNXYwh4t17tkqbWoLqiotTs6VVR3iahQq3gaYCJ4FgtGAQRs1dTdPakYct7ztXRxdHumTVpvxwnSPaZN",
  "key21": "5BKVxY95vcZd1wE7MffMuLYmRvRQq5rDfaRf1hz4DB7J15xXMBZWY3BUHWvDqd4XvdQyeYhAog4EjVy66agDmTo",
  "key22": "3ZkZPSBwikjTqWjiXjxFYiXUq2mPsHLZms7ExdTVJHgQ2LJd7J4Go1rYcZKXHpe9qh1ef31ny86WBYbNVuAmsaVW",
  "key23": "2kT3Ms8Mt3dCg81GVfopuGEajFNXtqTi1RvXAhNfhjCcJdiG1WiNAcCJSxWh4YVbiMK1DYekzZ72MTSYfM5wsToe",
  "key24": "4n8d5CoZyqM6p9az3yCtqGTzC7YigW8d5hWxQLtvR5Y75LgQVmQyoWsddg54kdtv6iufJvdvqiik1Ddk6zAdb1be",
  "key25": "66ou9LziapQc2Vkx94VDZfju79jQxW7R37383p57g2XFwutpuPLc41xzC3KkZvG8sU1XeGpDhg94i5eR8kDAJUDB",
  "key26": "4e7AWXThxZa3WaJUQiWyfAHUaBCxCn91AG4j1WYmm4fmfNAUYMTduQp4gsVKRBGcR2Lduwrdvc8YxDDuGRxPLwuG",
  "key27": "2Kaznn7c9NeBek8NtaYpfi3PSP3MU7W9JAJtVLEwHDMuwNBKy72eo7KJxdeVy7TyUEQj7AGWggLs6RTdgNuSSHYb",
  "key28": "5FdKNTm2zUoqRymALiQdiF5bKXQ2k8m7LrcgUkYPgRgFmhiEVudbHfRPSANuaoCrzHEdPyAWpZ67kXq1A4hs73wc",
  "key29": "9McHQa3XXoGTM8Ttd7MrYmKbv7UB7n2BQVPWPRLxRuf1MLFG2gbwpPRMxReSbJRfh3UpoZwEd19LZjyK48fMVbo",
  "key30": "2ba7FwdmMmrCzXgpry7C1Ut9MSUtwSnWjoeus32hZ5Sz8dAgnpMmZqqUZFkXHbphjG74DP5WyjfYYike6wFrHxEP",
  "key31": "3GXBpeNB9ffNKw6f7AMMtvGNbEaTPFQ4QF91iASXcyLbQnBrTsnXrmUyF8vqDsSRhBQzzMLwHMMMyVhGb7vU9ZDc",
  "key32": "2N1J9SNkq1GUuUBmeToWnCK4SiMRh3enDAp7TjpYHczawgxa4VriG4z5sHtJhbjGqAtfgSGeSnqZ3sq2oKxoZy15",
  "key33": "5rpxg6sfrxwhJR1E2BrGmcX1DJwWvyTWdXyTNxsUtw1NdME4vQLcPWNtzzh6CPzVkEP19yjJHHA2hav9UFS5cfr1",
  "key34": "54TqLF1iKtxojMWLtFbQU9QaC3DZyAWzq8enCRoNGJkJTotUbXN7UfqgJsDhTPNS49AhgukGzk5ZToaynmD59AC4",
  "key35": "6knqrGtFsHvP5aoLHsnQTiBERaoNMqpVCLxzE1bKeppPbdByaCesyAHAb2NFBpsZ5erENKGFdJsMtGFtf4NkqrY",
  "key36": "51PKDumMTdrqhiqpHrbqxqxqv2zKRSfzD6vU34NimkdWpUuvumCr6Bu4oCtUucrSJ2m7xbddsN7fnE2seFCsqQFc",
  "key37": "fSdhzrD75VgpcfQrSLkxQVfb2BXjk3q7GczUu4kDyYQyWXugtgctrqSfY7QahSVdGpe3LJfQimj9jmV1quZ6Vep",
  "key38": "4Z3wcq9kTQ9ohvxcLcxwo4QXeRthVdwgbb3anmtjHQUJgyhjhPrrTxDnb4ABbLo7x3K7i2fhgKLfcsQKCmeyZxn7",
  "key39": "5fJeb9rtmTeRbm6XxvPfeRGwooQBLQdyJPvgdYk1WNbJGz4yuASmQYtKL2WwxQSvNGDrum6XaDJ52BAJQEUZrYgq",
  "key40": "LGPM6chGwXUVWBfyLZFuXdw1sD2xH9D1T6rQUH2Ub1X5u3szZubqnyvhbPHByUMrJ3Gc8FPDL6YnxbaiSpi1dRU",
  "key41": "5hY9K64VQ8AcJDY5acZxVEXAM3kCKeB2eiM7uQouz1SZULrNFWvH7BpNuVzGmxeqVdhvA5161wMPNmyvd4ZV8Z9",
  "key42": "2cbFtUxdE1BrKsJu8hxUhQ4YacUeK3HuPFhv1GXS7oc9asGHRNJQWtUKChZLduhVyhbrNFB5MdWLbBEwfhWeuj4i",
  "key43": "4HS1DGbJ7vheo2pDQt7kurWaWY77g687ktgMJ1KirfSBKRs32PYHy1SGxL3JyQANUn35rFjoAig8GjrtxgGt5Uvm"
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
