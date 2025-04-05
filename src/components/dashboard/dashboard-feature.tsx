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
    "62dHrghtcScc3YFdJepiAJTUd6NVHSxqoaGWQrBEmFuP9VLNwFDQEiUtmmLzdx413xb7RXoN4fgciavMrkn7a4Cu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64WM41B6GuGQjP5J2mD9JW9PyNRfLMkLZvWGioeeC4QH8PenkaHnnnm6LvvhTQjYBeYKSp1fnTpowxo51q2WNs8g",
  "key1": "4B7KUoU4CR9cuCJDhzQ6QWSNuqwhH4yPfq1a6ZtbCUGDxRxYqzsv1y6NdC9MrLMmC8d6rXcKhfYXz11Q9zvdhP3E",
  "key2": "2FVyfZjm3Rh88F6UsyPbxGUU7XggViqfDb5Fr6o4ekRPESjokXNpkLeWTB7wsQziyUY7vymVJxZc1dd9TxDNPZv9",
  "key3": "jZ1aCLMhuDa6b7jMfNpJFRyixBvyWXD3HZPHax4HCcJyMqkt5rDJVVDbkN7EPBo5oSfHeFbw54JNdJXwRE8pLtk",
  "key4": "4tregFafx717uoo4c19dUJt76AQpMdA8hRJCkwekE93xNc5rVZyqZMUmBjZh4poJGd8X7qGafwnmLx6LbQ6GYuBz",
  "key5": "2pgHQJcZp31oW9Z8ZCm5xFgdKSmd6K8FnQ6VPy5ut1R69sdN9qLy3RYv7HyFwgZDNry5ev2xebV1nCs1rrMyuwVy",
  "key6": "4fmxpXdPW8jr7zoa3ZdDCy7RpX52TuU5YPdSEQtv3tc8jv1zXvRRpkFg5Xegv49dmSMcs2bbNaSCFQK4NH6tcTD3",
  "key7": "3XgF5iT2cDDu268EkL5EhmK1FGcMwrZHcfqTaygMj3HBbX3bXfwN5P6tigYWRKm93vu53qfmh427iK2wbs3X6gEn",
  "key8": "3hxsH8C5E8fq5AsVmm9AadBrSNk7vwSoGawR8ApzQFaW6uyqbh4hzbZCwRbwCBtxNY63XYFhwHjVb7MgzrdCTfX3",
  "key9": "2TENnh9gNt29TUn388j2XCUdHLqkF4kJGNdrzybRmEKmbg2yFKSHCrbfdymvPx6F3MGhTmWgxq1pJ1NwbZjvsa1b",
  "key10": "tf3FtZDcFA5JGqaNbBTH2WLtHJe27YYjJY8zkKVKwHU5ktMvnPHPzYT64mPPRCe5jk3UUtgYfox78uXioHb27cd",
  "key11": "3tTXjn7s2UUeViWYQFAPnxJrauxm95APrEgbfSgCgaN2iCFVjTuMN6GepVDuoJqkisEFpzsndVWNVi3PEe46HKL4",
  "key12": "6367Pr6iWvjgWRauM89jVGa1FTvyy4G4L5x4iCnJtKwMh45oojjqXZHTkcwxvGY4YTNTKj45WcPiFAahj6yC6pRs",
  "key13": "3aytWKYgStXZnzHx3g3h3nt1h7XjDRzniphnucqBA5dQwMAfVL1Ui95hGxeKvpLGkJ82hMsgrC9VKXZgq4uPcqyi",
  "key14": "oQnJwihmn4i5hpUxuvfvf1yLrkv1AMuR8hkfQqz8wbMFuu9R1zJfzbrnA54mKcnqNp5HunEKA81DNY1ATuqqF6C",
  "key15": "58SM3jXgDcmhK88Ars3kHrPeGptygLXPDEmnr7eVTR2ve5765DDjZ156vxEdQ4SwXibAWxRzh38vvwju1SJRFUfG",
  "key16": "4T9chR3Kp5GGtR2eiE8XkJtwrhg5iQtSQD2a2QjAn7FCw5wAgPFbRbG5yqHRJ3eKN2B9jLSYRmG1AxEznrjEP43U",
  "key17": "57tUcDnaJgyF3zPKYYUpjAkefqrDihFX1dgfnpeM2tdGSSnnQmkD3XJHsJkRtLF1yPox5eHYz2BjbwLaSsDnWQ9m",
  "key18": "22ZKTsMRaMy9B1zVHRhnVewKxULxtn66PydbuWuFCdgBqCGhxX7o7By8xr2UtRLRhv13i7prkYM3VpdzsWbvyHho",
  "key19": "5sss3CHChxPhmsrr7rWfFba16gVBvkGTjdTbupfmEdYebskbd1BrgwxfAXBw8bP9HH5LnMqxjLBFixpXn7VXy4tQ",
  "key20": "4gkKKnJSTA5wQRkwZAMZAdfySpX5q2zCBwocVJQhxg7FwTQoLnQW9uB52K9ivPMcujsiqDDeJzknynmkpox7vCwa",
  "key21": "2WqSywLiM5zs91WYay3qYc2nap2pyMm8gBCBH7nBMkGk5omPUbYJQkZsHDhzLLVoPK6SPoNekSo65diJErP6iTMn",
  "key22": "3Nz8sfE6LmYivaLtCBo7onRdzQcyv6bdqWU6pYtVhcXgfqo8kFj8Nc2KwMEpTa4ZTEx1WVzjBAAcPiMCVQvCKit9",
  "key23": "4vc4enDWVsYReUZ5ctNbsXgJVkgtemRAJMC7WGxqGGo6nEkq5K8wHivCsPuNFDFQK7iETFv95B6xF43jVm8DzLNy",
  "key24": "34kizg5ffUoeJJVsGrhMFNEerY3E8EHcCPSyFESHHpwoS6yJB4jLsLngGwCatjHnpYsXve5i9dpgQqKYUTEUYTWy",
  "key25": "2mGH1w3rFDnX9ccvcJzrHMKQ1NoN8gZYKcgLuK1GESF1jGmxBTgTpshgVJCj1NrvegfVnBF4EBhqhHAwrs4fCfq5",
  "key26": "fcD1okTHsJXS3qMqWto61VKNqE4aJvvaRj7qhMwSrDBW4QpJ897g17TUooMWfWUvuy7ckFt1mjuzu2D4qxSE2h7",
  "key27": "3XpMr2Pkbb9zu4Qbu2zdu24XETmXGnUMkTMqB9apnfq3aamUWMABvjy1dDaTMVJ1v9HSMrWJgH93hW6Dh8LWV76p",
  "key28": "4M9UiKPrwUwmVEMZzjZvyZAy3rvT62EXskZVDU1Vr7ySz9gEDT86ERRAzVNULDSJkwhXXLzn18eWQj6R3urSfBV9",
  "key29": "4f3jsxT6aAfBiiZTqLqcjYqehSa8Ltdo4muWxT8mu5efm86C2SBxf4V6UFJa28437jZvTFWtE3aHmfbX4Sm3iKmp",
  "key30": "3oeLGFxeWUaNa8LBTkSBky3f1zmFrA7z1AjfNiPvnee9A4W79KqHVD4LNzHFRGzJVdNwNwVEWYTrPxaVCUbMtKQF",
  "key31": "WKap55jNcrFaz91Rijv5HkHRoD8tRp4kYRrWBJkRPiBwCkxcPf7Q93Ha6NkVem3L3q8vGigTPCEQEij6R7jh7qT",
  "key32": "4A6B1StSUiQypWp2ARseD5h9JCTWrr1MMaZtZxnvTEfKdxpZd5rCuxF9sMaxKg7QRLGgiA28GhvmJfN51oRtKvxH",
  "key33": "c41RM2mrmJg4KGbkLjxQyv6vrFvsJeoQ7H7RG9rXp3uug2HuKasenFmMC53DdFJniLJK66vYzZbm35S7UAZK1L8",
  "key34": "5PJgJPiqjwrpH7MV6txq37LJZaxiJuBeGXoaPDXWUSksxErJDPbdAN4P8TnbzvEyzXQAPjuHjv3BiMbKhe6bh1ct",
  "key35": "5CoKMn41dWRdNeGj9XQJsnqodYDPBDnFqciEVxkXx5Eworg4KuQcVccXGQbF5m3EHK7FNWty9tSGeUi1ufeuV7GS",
  "key36": "4W7UCK4dGV7V3kA5Cb5Hj5hQEUdbWYv5Kj6RfnKqKu3x1yaQmTJ2FpURbAZfAqBgHiWe3DaS7EWJW6sKqo8vkQ6e",
  "key37": "x8i3v84toaMtgGH7skpHjYmPwkhxycbmgpcBjn8Y376HU4p8wezi7xidDgQNsjoD6DAMaMUaWAR58daG8p1rbHW",
  "key38": "48DDWwWhspQqfUSgK6Eb2mHNytxaqB9Fm8wqZdcUYnqvXqetA8WLXYm99qx1Cs6yWCmLSjXxiMHvfooVBntMoevP",
  "key39": "62TGhF2Jj31rvDc6fMYK2pYojShVuEnf7kF7umCMuBddjXEJjLUgxQhrvSBQsiRmPTjwRM8o4xPzoaFtjDezZnnX",
  "key40": "5jMeGZ4oDBJ8nnsg1ERZNVco6oeJp7yKKrx44QCxUguAREC7fR3h4MTYmKvoM2Gs2iJjVpmqLU3NnP6abidpCiXT",
  "key41": "5DHF1PU4EeLNgjpmr897N4ErhiaAwd9iXkF9N5q1Xv9bRK2eJ6Qr69vRotiiKoC7YPYbLD7sKDJVejuNH6zdt86U",
  "key42": "2BGJSijMiFr39rk14myXoJPqfrVYY13rkCUyjDTWEZaHzFHJNgiE5Vip5kVuvnSkaW3L45vMnhJeYmwmTrymHVcm",
  "key43": "4LudsHm7uB83A8znTdtj3S2D7tNetQVyzXDNUpgBtpTvUMS8DEVmZYM498r92B1dGpm4rcMVTskkFxWFLwE3ZLja"
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
