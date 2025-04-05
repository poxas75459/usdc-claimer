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
    "4Qury8zmqUnNyjqAiYvPFjtjpEHS4BmWeuFhLrp6qXZS1khxbR2gzGBxXQA5s4hfmyu4ZAGvy3d3mfBtzCnXjwSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k27fUDYsLmGSp48v9iHd6VQng22k3YB2HSZphVZe5vsNZ8Hf4tk886gqS8s2w7HaveSEXJ2VzABrkSjDfhywimi",
  "key1": "2NQ8ZFnGDHcCSssJ6uw7Bt9VbYyYT1sZGtRvUptZVJobt8YDHPJjniov8Tb81bCT4Pg7QLGTADTzBnGDZHF7jMvX",
  "key2": "62Pak6ebPPz9pjWtG5cX8qr66iZQZhfCVM8H2MNkUXY7iivhjSYHTgmmrXJGGDUp6Q2sgRByBiyUPhPFhQ8YNt9y",
  "key3": "2PFSQ2xGsJDT37bQjLdSqDvfZ6LX5w1cX2gpPz4DzCCS7axZXQk8e3oSPfYqcEo7QqNNoxFdP7KvnBYupqpRdYft",
  "key4": "3YEAc7LzQ7mvTFcwMadHY47Gz2NpvNofngWSTrUo5Mz6TrzhJRXN8vJDctDbt5WhqPuPtomtMuo3KuuSfdUFDgA8",
  "key5": "FuuDe8xh7JKZsq3U8kTaBy78mnGZGLXC9UReMA5WiJRSehqLXdaxuUPZRRdLfn1RpJYBsNaf89PoHbEvwnDinNU",
  "key6": "3vjc7MhdXyYjE6Nom7Sq3dnts5nYwGX2aBnbwUmNFjSYViVQBeXM3A8onnBh8yQjuZ8Laz6k85UdQ13YPM7csHWy",
  "key7": "RXSRUTraQrWxcwu21cLbZHzXHaqzxzbawbH4E5iEkMXoofy8ZwB7NeB95entojMMwcLHnqX4C91p3AUJuftCftY",
  "key8": "3g7YsXz8vfb81x35Jado1A2iq7kf2ei3MxgUYApAHY2tqiAxKpeNUCMfeP7V6YZJVZtsdijnagrNCJarRYyyryrx",
  "key9": "5W3CD9XwhwJHSi5D5Pxhs7UA5qq2r9TT5WC3hxma6rLrDyy61Kzb7aAMEejAmSnYPjFgjquQHrfbSc4s7e1qEp6q",
  "key10": "44kSTRErxcyNDKEgRbYPK7RVBTjsS71TrWM7cVSPcuEM15mwcCfKeLJuEzB213VHnCsLxvJLcoxLjfpRbk3KvGqg",
  "key11": "56iByoKtoJBZGiLJkN5vFysQcWVyB23tC1iU7BTiETd4upakRLGBXdDB7cpowHto9c69MBXvY3FQ3yg4V7MZBJ1b",
  "key12": "4rGWHdDyP7pJRWnUqYwZpcnGGDPR9knfvNTHRV8DPmQbzyFt5n2AB4ZkX3yviVjq9HH96YWj5oGjAB3RDstczehe",
  "key13": "35oHqKS77QGwqG2qa1DnWHhQdHgyK6Y35UfJCQtGJKvqBfbtNZykdmz8HL84aiNWDVDtJMWUXB9dWjEwXXs92vPC",
  "key14": "4qejd89vAqAMoPGCDNYzth21y5XHtDH3ev9j9Dqh3KyRg625bFqRBpdUo2jHFEWZA9dZAQxoPdMewJM3Xq32baNW",
  "key15": "2WsBLA4iWNCiXaAX6RhRcU4Q4etBoJe1hSDPdpg9xU3Xbwz1R72TC8dZZwTYbrPQQcFvcr1ksouECvDr3X3mXKgL",
  "key16": "4hnfwNujZkwv3bpqJnZ4kD1au4MbqR4koryjuazkx2cCkphWhBHKDy8aLFeozGrwNTtLXC16CGGUE2qBNNS3G8jD",
  "key17": "3fe4gmTW6iTvhGuKYY7PsVaZWwmDb8LESBc2x9RnpAwZfAN2WGunPCdSvmgWXzFf8k8qVosjU74nsnjio9pdyrML",
  "key18": "4bE4BZSxTXvW8C73Xa9Nv1QVfacP4ESy2GSW94nVpok64M58FEYD1yjJziidVoUph5dFiFKLWRVy4go5yujHFv4S",
  "key19": "5DaLU9s9Fu5ETMQ5JXUPbr993xJSmiMGHkzffnrc4SrsmWEzuk3e3te7bsEJAcL5ShWoaq4D8qNVecEtSAaBFizh",
  "key20": "hdhfMqj32WqJ6BkyyJR8rYNTNqhQ4Mti8NvCuQKXDq2ieVgDbETVdr7gaKSKztNXgqNPavL5UeMqY2pNjpC66qB",
  "key21": "HpTCmHiTq1sdbZNQJM6Luu2EjZiVTC16zYKuWbm7Zqf66usi2dj4gFXSrCrmMBgnY8ufWgPnGfmeTBe7Pmijwkh",
  "key22": "4heZhkSjoA2riMa2J32Xr56S884qrWcBBQ7FW2PycpZCT8GFM39eVFt29Ca79Fer2kW2XDJ7tpaNay4GDoWxgHqd",
  "key23": "215UDR5Q9o1v4tWug4m2sDPAcNmomPAnhuFiTgMTMELE5zcs24xY18ZE3JDhpjG87wJg2qaeY9SxctXCCRNCtnFU",
  "key24": "4hYYuhDV8R1RbpAQj5mQEbMh6fRvUPFRZgMrUTkg1undrW9YhuCxdMKjMgnysDBzqTkHVZXPa6FQokBrYd1yf9zo",
  "key25": "2gav3JwtXkg7w8NE6rkAHu58k7QprX964cvfjEFPV6oE1Uo1E9vsJcVxi5NDgkBRBEKXA9Sg8PNx2wSzeriQjiyb",
  "key26": "3c4NzgPxFpvuJhjTRUYeFyzGVgXe4Yk7rWMwrj8wXYxqvskRYgzKAh2av4qnMexxpfe5HYnQMMeTdJWaFvZgvDRQ",
  "key27": "5nrdwUZG38uFuw29D9qN1G25fAYSz48fSaHVvHHQUqb74XubUP45gL7ScFso8X5JVj4fry93HYguJMzZQ1C3e3zy",
  "key28": "4S3qPtrkQ9QpXQwESad4wxGAsDC3Qyf54Hq7ArMJyGDLZD8me8W8vLojuDfYmCbbYS99y8QFpVbmD6QWd1aLJYQU",
  "key29": "3gKjGKsiakb6BqRHudhaWutVpjaJiWkBCg6gnsCjJGxavantq5GziJq8Gh7RQFjZkZ7mNBueD4Axw4gEgTivK2SH",
  "key30": "UmFrPXJQhNLQLANHHKzDUyqvQxbXQqrKvtxnTUwo3D7tuLoZyHhwSGTPxefJ9U3srY5wzVsWzVcCCgrM2KLVa1P",
  "key31": "4rnc1PocjQWuS2aamWVvi885m4xxNpurxU9UDyPrT8Btz3qs3uv1opTFngrmjevkTgm7LG9eKo3cx5mWwKp6wiKz",
  "key32": "64yyttoyLcLiXmyj8MvVNqh8ioMo9zv5ytYKTMP1d4nf7UMZR9d4ALoTsFz6P6VFwGawanPDUnHt2HNxygTazgEf",
  "key33": "3xXa42jTtgiktiDERJigf6hQ6TAwpWECUkJoHcxqtoqvQEjx5QB8eRaXSmuu5T5wNc4iVXVXkEt7zcYXMedmxZKB",
  "key34": "5Gk9Apy1bPjXzkg7QKJoVAofiRiwdu5gjBf6DEmQqaCtCztMvg37S6dKec6mTe78x5Cc9URnjMeVmJGfg8QrF8qV",
  "key35": "24bavWpF2HHimXPiQRaaaME2kSQzjbFYXoXwkfbgGANqSquAuSMrK6YBnsMXAyhMCmHey6kpgYNFb1qjrDeFVkH5",
  "key36": "5f9jjDtjyFHCWCJxyJoby3zFpW6CaCvHzBbiMxaGfXnB7eTZ7UkWPp1KPyhXhM5caEVCtSFnK7xeNyxc4ko9ZrJF",
  "key37": "3YLhyeJZUktbDpVeeVdDT63cmnfoLxuUag9kBmgihtVhAP8DvFFKdmaPmFzeSwusugBTa2LiyXXLy4pRxisEvFQE",
  "key38": "2iEb3igJ2hpr7czGSTA3GnEq6TwSEVFn4rqY8PBnbdgkoLdSQA1N6pSFepKFzSv9bCvREr4HTra3U5iMKsdVg98p",
  "key39": "3dcC883M6vVMH1yL6e5pzURuFcYXQbG42JWCcD1GZhNVVfAXgD7Q2YFZZujFTH1FHsdNtUKEU7xFHs9LAM8FgSch",
  "key40": "Zvu726Cc4KS8GwnWVmTAcgsdXjznu5PWsMiWirMQtdq5PrAKafPTJyoGCbT8HzvYx7h95Vko14BvkkjKrFqKA9h",
  "key41": "5fpK8tNacfmoNejLv2ywYqJ5NQp31GQfFtx8f4VdCNDjxyBCJGWPVFRuPqUwm7eMnp2LY4twYisUbXMnhhjUepMu",
  "key42": "5f7MPbGMdiRzP7u3NMrZkKXf8ubmsyPcmkBwHkjAWs8bukD8QoMBt3GDgn14on91wvBHaBcbRPszkseaKxbK8Yf8",
  "key43": "7DqigogRjHKnpcRuhK8ozMeqsxgHeivsN3XGZ75J5G4gJhrYJNswNZaFNKF1voTFUdtKtAB8GNuWoanDog7WYsq",
  "key44": "3ZAUvgrpVKDoCZRPtFp4HCacozDwKutrrcHfesaHbkk9xN8EzHrg2CmNPUEBp8jKbXwcvYrhhtotJwXHhEZV8CHq",
  "key45": "3zKFiezfk5YmgALY6AFZnJ2g6yR3doGZ5c2SYTcbFn178apMAkgz6H4C9X1Fk1URpD5yQUA9W5G8reMwhfYjgEcm",
  "key46": "2kPMvJVanrbMCWh87tSbyNRHcVgJrrCg7Ak75ayURXSkaE4Ak3LRDAvFKP9WvvpgMCWRaXW2WRvdBbtBxQ2ByTj"
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
