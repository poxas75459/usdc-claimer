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
    "JxuvXPzN6nWXoD7WDRTzC6bAcNpQrkvQjirbQANCfMYZwse6T4RnWMf3i82QCYbRqWJH1UedLRPF39nZMyxbCST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6xzz6DQLLFaYaKU22szP4FrnhykVu5qL4zbWTeYeeVvyEoM7ddi3Y3eU4i7TDakrJiCCq9aFUv3vwhxP7HtbhG5",
  "key1": "4HpuYZhfRpeoANZdigD6YnbP1aH4wLtqa3DbB2xDSNqEvk6zczSowZP9kxFXQiis3sKdEemFwSsc1criEwyLYAz5",
  "key2": "2zE87CpV1CBqCU6pz5B6gANKicb1k48pQUNE9SzeEhvSK2n9VG5ocbEmUNvduXazmDUCnD73ptvZyGX7PsQ4mNp3",
  "key3": "3Hd7WBxbcXits6jXnKubPAQRmeJNJkxqj9cPvZMtuxWtMCVn8q9upriWR6NSmcKARWJzrG2Mo4o4tvjeEpDpM9ee",
  "key4": "481hV8KepoSPXLQ4fh5Xa9k9XGfhEJnAiWX4Cekxy28LPii77FzjAnqRJh255w692gLTPytXKQSHy2KJsRqYDdCs",
  "key5": "EsLczWSFR5RVhFKcZBf3WKcrGHcTJ9YyeLokF1ZrhhxrGH8BsrWdi2LUdNhvbMnb7sGEEweTheamUrrJ1oJBg3W",
  "key6": "4QasLaP7hZ81jEKWdsb76KFMX2DsNRu89TnAjAsF5UqHXpRPMvKx7GN7ydvDDPQ6gEHGnH17fb4shCcuTiLqrajm",
  "key7": "2jGiEjmrNQekPG9TBn8f5S4CaUiG6rBYMmmaYtg8s1XmzRTAzK5AGtaoeHqg25CwQ98xVM5qkFnu7m3Cc1jd1QTZ",
  "key8": "3c8ahNj29adjDYKECLPbZq5qAfWpzAr96sjV4J477KLduAw8KnkuAy5sMkTm33q9bkFcoktbW6W2khFqwBhvWbfm",
  "key9": "3C6bGUneWCUuh4DVWTo16diy9TqkDWkULqax3AmXUS2aPtxHxABnnyqWo7Wk7i3PqG4U3iPeCp7U3AtzSwJJF3AT",
  "key10": "49tSZyaVZKPFN68uhNHQvrCJWrNR9rLAyqfiJZWgqDSRDHsGeMtSkZVWV6dFM8ZMmQdZgyiZL8w8TLmWJGuTJBfU",
  "key11": "42s9Dy9aWVEPjaRN75CVtbwZ7vCZ1CMU5cqybJmnDj88XxLmD6Sc8J7zFZAWEgAcdhG4jt3kLn1ZC95avk9h7mHC",
  "key12": "r8SffW8j8Gab8uxPgxi7DPnbD9hmVimp3JAKq3iWikRB2EZ6D21Ad4tTFv3xLkP6F3fuu2BSxoHQbBwqhAm3HHC",
  "key13": "5261ngQkASREBmGiaSN17a7GmJa9PNzXwdydYCWzBp5eyLcYXf3H4giQZAyMaWtpDTXUFwEefCiUS5j2B24motvP",
  "key14": "3Rf3ZSe3pXnwo7uLf6kHPyzrfy1eqGHxQ6xYAE4BPEmx69Ch29VJssSaezzt8t84NtfKrDboQLkeezcWtHwYF1QB",
  "key15": "65NhGpfzx9T7cZmfqKWt2ZzAw3hmfEKQBjQqsSsVH76hY96XaS7T67GWKHwTJajvwjoLqWR1b4quTwjtuSBULmhg",
  "key16": "3VoPWrBd3gAe8Azujrf1XgonZFmiGfHVbkgPQNQQ8JpA1SwqmGAKsQnRFjNeJxsmQDL87kuSt5An7RcRhm6fuCto",
  "key17": "2PwuG2rKmg7uFPkVfJgApqHPF27n3mai8hgMPA5jxp3DNs8ALX8X6TM8eAKZF9jM2vhPFuRUJQHAd3CuAgkpVW9h",
  "key18": "2gcRFDXyAhFhuchcKeRVCKh2y3pjotHrjdHWr9E8Th4yWBMJktRm2qpXQwyNrxe3D9TY4mYzPNGemxPWDrnnnNqX",
  "key19": "27h1ByyxpAKnm3uzK3HhnZDrdxfpjwFc5Saar9Y1ETdfKWpQGPe6RPR5FHAiAkzSrNoqduJwbmR58R4K5wedv8nD",
  "key20": "668Cm9cFxmU3LMzdbNBdfA8WETMedTuJVqnGH6EFM6QsNCg6hx8sstkMfuR32PFXHWhQ38EnhJrkHwXb4j64fX9X",
  "key21": "53dJFqNUw6nw3foZJjQ6awZm8mPYfN2Bj7bZQ1r2oqvA2XaMYDmzCSmrPxVap4giMzUL7eGBxJeJZtc3iUWLE2UY",
  "key22": "2pBftHNACHVwRTeAaa3pnuAJQXtp9Fz38RH77TGyrCxMKpXxeY9PVGFjGgT3iAoxiMezhAV6faWLYBJaDZ1YNJCb",
  "key23": "2yWyjyQFaSyrYoHxoL5y29Td1bGrmvPUqEZNvGBqLYTNM5tuYQ85FuPkbEoTYEDtwAUpRGYdEZZt3qRJg1fAWe6K",
  "key24": "4vxP2rS4X73WZmgXBXEBzGjTdqgRmXujzPReLqMK1Pn3qnKP4MiX9Cr5Um3DMo4MEkKdMNvSw3fVqykCPU8C767R",
  "key25": "4RwkQjQ257wmhx1aLVPVo6v6grQzRBmUrcRX7GZS8Hazhm5xxQ2MavbR4UFupjhFpajtBoGF4zZ8CGn6wP9DkcNz",
  "key26": "5pgbgdrRofAzhY297qZZJK1qtE42tkAwWdSJx5ynma5kKVRnf1xVh5W14iKEnJgdTjNAWUXwbxiwbpsP1Pz8vDG",
  "key27": "3h3VULpxHWdJfTekRsJdaXgLhWmkN7PQkQVebng5Vz4CXmwnP8BDRdT8gndrQd6xbeL8GRgufG16NaiGmwdz4Ap1",
  "key28": "5qb6cGTjeGRABAEFRpTkfgnC7thBh6o6Hh9PLiywVqW8hPC1dT1R4GQhpHUhSf6TTZPHuCQEs2JsV31PtzZpLdWe",
  "key29": "4m4ZCqfsU4wbU4D519Xp8wDkVuZ62UMpd4xcP6sGvyxpNDj9AVQfUmfqhfBBDtGt4F5zRZNHahZ8izWwTNV5jryn",
  "key30": "5PRKoc1zTL6skJSBSJGEBXHZmc4rujgYLU58zmjoscbRThYsSCJ4pk8tyjdzh8UyjgKAo4MS7A1126dDF9HPHatN",
  "key31": "2G6xSXmdKgSA1BtptNiUepHMxymCYk7Cqtjpb727tKiJ16FP5cGkX6dSw1qwaTSk4LuFzkBQgZ8wwMR5DNRpegFG",
  "key32": "234ETp6aKxju3yzVGqvgdShGtXQnxSKPX57ptvoBuTLuA5ZrdvZYJ9A58aRYeaU9B9wyzhnWRgaLcX4VdqSSJtRD",
  "key33": "3sPC9v1tqFrVXoq72ow7j9TbHtLBQC3N9CJMgyg7ZbKEzTBYxL1STbd2vkbanp66h2Spzn43ws4w5VLeXqYoLE9Z",
  "key34": "5zmX8ZL387dKZ4HoGx53Py4xWUbbTXUUPhXYt3SMx4Q2ZLzji6XqW5Wi8n8cEHozyaokEGJeoHXRmZiXAixj2z3A",
  "key35": "3wcE8rnXsHVY5s6tPxa21n3xsXwpdVEdm6nfDG8nUiqbLpF2TYq7HDSu9iXmvJq9LYdxdRVzvngetEJXFpidAmDc",
  "key36": "2Y2XskCup199CJLei3HUEgRJ6f97ApbAir1XomsWKNjEuZo65G5hr24aZ95C2zDHyxhYMyy8pBgBb7oTpACWXKTk",
  "key37": "5kzKu9iaE6gqM5SE5WVT9MuafVeci5RmoZbryuu42mU97DiF7KJLErY5NBXaWZTUc9hmyAc23FdTDkNYnAkCcHop",
  "key38": "5HYhGQ7mPCxyvF17rinybxCNzg2cNdJTvoDUF9iMg4THdgUShZzh3W3X6T2qK2ZzGAE32NEByATyubJX1b6JoNeQ",
  "key39": "2zGrt8ZQiYpny2Ey5icP87cxhgy6kvtnvGW83BNu74kbM2MaJ7cDEXfeLWiv93QMCRnUPp8qC8GfPfZsGDMqJu79",
  "key40": "53rV9cjxH1dzH2NT2miHHaULC6jdYXYSGV9KP7NWEpkDLWvZrgvJDY8NoaH5aWH8fWApZEoRerQ6qF2osiWv5CgA",
  "key41": "GEHyohZM1QJiVd7H4cqnsjZkfPQaBb9Wdjf7xfFeLbTt4oHRaHzVEm8QGnpvynuU1EypFR2x73bpte3QVptKsKW",
  "key42": "3nup3TJke8gf9aEeSfkp4Z3cXY8xbx8yXRXBYRcRmXjRuWYpvFXXVvCEihAsLcMTQJkVhrR7NHiSWpn89vpEEkQe",
  "key43": "TTLdaoH86kXk2TU1eUWrhMDJ2qVWf5GrCj14YNvJCLCShVPsEZEH65rF9JDuLhgome7RnyBQjurLuxZG16Fy4eM",
  "key44": "wrz4fczMM9sWxhK8nNmYNcizQ1gLYTgps2aFErVMzzYcq61AbaivHdxxRvacQRYASmz9nUrybyFyBUKmuyCgzbz",
  "key45": "4qcaemy4UtXdSs28ER1yK8Qwg1grscY9JxRT4HXk8MmKyY6FxgjJfverL67Q7DeSVedwSRCB33HsGDBJPwcnpb2b",
  "key46": "48fHtJcgDWesdkDA2RpSjEn7U7RjuogwzWnvVXVvKNkvB1LmS6k8PBkjsD7bFKmpYo3KNNiA7JvJBJPSdGGaEp4v",
  "key47": "2UzyJtwwsf5eY8T9FDnLggpdnGCNVWEwvJw82mKEVmqF55qBmhLkig5JjmmatVHsr7FK19VBCWNSYUnGeuHhKHem"
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
