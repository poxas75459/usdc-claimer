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
    "2KTiEm6DXUC1npd2sWyfBhyJGA8aJ2frEwejg5n6JC12y6H2Sd6ZReacGUURS5swJQNgLu8DTZmKtnezWqj9wkGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ec7x15FQBMpKwC2a5i7CwLt1x16xbJdstPNZ7sQ4QxVyUMmtxVUswJmZWPSU2qzPPqbu8LdnCA3rCUodmAqBcLh",
  "key1": "24cGBHXthoTNt997H6y6PC2t9kYzWKZectAtteUQKdUKw9ma3CZLCt53xxmrrtWmKrtALMY21F9krubp69KoJh1q",
  "key2": "4Y9NB3z3zUjyjirncppy9sjbvvmxheVY13PwyUcvzvVJTi3H9ZedvrjLYZQVTJnF48WLapkBxXFf4AE2ESfPCrfS",
  "key3": "21qNoqF4bnzmfR3sJUyD3T2TEetpy7HShpx7KMW3s79m6srXQ37YAtm2i5kcAmxFenB5zTPuqGGwhbP8a6Y8uTqq",
  "key4": "3uqCdhxz14HaxzUqKjWoLtjbiak5D8CVvkLaQ41GB1X9aFRJB3qy4QpSBsA1BPCvrEhgM6BTyXQhCW6DNBXtARnR",
  "key5": "mU4mR3sBY5rvz1bLK5DwycYuXvjixW6iPXD4hrHrK5yCbRAWn6QAvscEybxjJcaTXpJ1uAKK3TW5Fmx8MhKTtLK",
  "key6": "26HmFmoSBipvSjs79cngCXza5Nmw9beJRbCo5kZFx2qzjNGonWEkR93dQpegRCsA93AHf23ZARteq9WDPZrQupQV",
  "key7": "2gbXXmLtyTDzZpJf8R44JGffvxABfiHjNG5U9Fh1V5FeYb8NyxdRKXYUC3SMJtD7UXVMyLQR5eLyvgcxd81xuS1S",
  "key8": "4M5SwGw4JBtRik6RCjLy6gLpYkGK8tWYAhWVTLiui5SNhAyWazrwBDYzxUB2EMeAv9cURVeE7T6ywjr68k54JHnb",
  "key9": "B8CzW4Ta3BL8xpMCwtwQSzus84bETgzHzehGq6wysBKBKSdihkGrFzsBeec2Hkwhfu8ymVHNu8keWqmRmadN8PD",
  "key10": "4UFFkxg7NbbhmPNzKMtwrAFAkrBjDuJQq1oNVQsMwgSNihcYMG1vP24dq7WMYdFhGijsATjgj8b5bm7hh7ksfhLv",
  "key11": "2VTyyhoCe1gd6SVo21bLtsn2vKjirSxaaxAUitREcu2KjjBrm2oLUYhe9wSqbQvpu5MKTD39B4hq5vayt5GdvNSA",
  "key12": "2LEcp5BokwBvq7X6rKSoevSjT2xop2KusX6oTSKwWHKyhhpZTDJrPz5dgd2n8vyDfkALyHFx13DYuTARAdDtdNTf",
  "key13": "59cYuu9VKh1JMrpWvgEWszXvAZvSFhxKJaQek2FuhZjYcGrwTC86nA1pRR72qWgbt1ToP4cQcQ9VbmkgKqigkScZ",
  "key14": "344VngtvAc4u8g4xuE3GE6HKEeLXGyvjfqi9ft8bdyKBh44G1BLYKNC9kXvR6b4JYtPoKSueYUZvSQpPeLmRYCTG",
  "key15": "5Y5eksg7h7rsoLP8FbPA7khJcvB7PSLZJBXAWK1ATVkVeFjKCyXdiVVZcCRaXtBci5857eG2grP49MjvD6FVD8Xa",
  "key16": "2voHgTPBz2SJMedF6w9SF62VH5TBkLWCJni6WtL4neenqos291wRxWzz98ZLshxnPtK7ndUE8p3JS9cyywQBwVXh",
  "key17": "2BCWrP3xfbxhX7JU2AvyNeftNqUbmXfBgTcxnDdUY4SEuQowBtQVMy1fREvzHzw3nFVCeQmvKXki1Qog7BeJBgub",
  "key18": "4dSiSHcaHnFXMpkLjaD43ShfiqktTTRy4oat462X1a3i8pCQzAyseJx1Q26C5UGA3LJ3jFgftawwLV3BBeB8z14p",
  "key19": "3u1swMKXAPdjs2FPrmYCJvCtgLyYu7qHnLFq2ahXmtYFCBHL8ZU3NzeYvsrmEn975Ty1TuPfz7bbStZQkn3XYL2T",
  "key20": "4jeipoqgKuJEJ1w2wj83jHC23PGjRf9uZrJVPAgSNa6ZCRgxPJKYyNrPkraRVN4KJH9FexdNUf1D1RES6QdB8vB4",
  "key21": "63J7Qen9A6GN4wUixYqHE1LTaYqdpuoeGXAzBv8VPZD9L4KtBzehXo9Bnt6bmLYwP3Dg7MB7WXcWwT8BQXpMZ9rM",
  "key22": "4aapTFAPkh9fsUSeSX9M6WCaxzKaiRGoy4q5mJnnhf6k9UoEiw6ZmJ24iJsHqzNjBQEQ2w8yemzs4WiPia22BmWE",
  "key23": "21FW7j3HjUEoxvpMwjTfnCSWATa4u9pTRbYmUVWDfQU8KzkbrbJSdAqKAuRexD5rZijQxYtg1TJtZ5xPCk1CFZa4",
  "key24": "5qPqDU4hbhKVDkU7xZ3rJ5me9ENwabukMFXQxJsm3kQtA7TwTZHK4aaLRaNJ1AkXBidDwnKZ8votWoXGfh7AK7e2",
  "key25": "5gcs47NmnZA1zuMtb4XAz5hHvoq6FRy8dEPb6iX7Ykg8RjTxti3dVeNQJupTomjwFp88UrATYhtsCyyTznmYik83",
  "key26": "4bXJeHEhpFmTqmWcZEDeyvVKfj2jox6LDcFzeg3RdhtoKP88T9TpM2McUSG2GHy7iSgG6PrdgimhUHGQZoYaFrZd",
  "key27": "4BDbuEGbuvLv92oAaeJ9R25f6PJbDCkG2b55hgVXPNrdphopDwFqqkBwjh1ixKVrr5mFUrBtUtSSXgccqRLHhoP3",
  "key28": "3hefTdH1aqKPqK2LvgpjKm4YK341FgCRB9FfeTyYKXEZSJ6gBaFZDybwsyDHajvCcCq8vXzvagLFDGi5DG1nf6L5",
  "key29": "sPXcTJjR1UWhbX8omybqKmtUVrqvoj312sQDp7BH5kt9WT7kH9A1sEjPKEphc2FUWJV9dZWMPDwSBJSnYgbMSPV",
  "key30": "5c9X9oUKDzjpYSiSZfjVymixYmKd7py46e7Sh5wKUin8K5NNNXvNzggL9G3aYBSzJ9ciyCUex1KCMZnwTuV3cLtB",
  "key31": "2oUS9Cgzi44susVdFrMs898n6PYTy2F2TBpXV3Q5GweyKmta5gJ99u63bvPAy1mgUbkQeR6DNedD7ftE7ygWkXyJ",
  "key32": "4Uh1FiqZ9wQJ7NhLhEDKYj4x4yDatymR8dU8rkAyTYk1W6K6a6NMW9kpYidRmUfw4CmQe1r9eca1HYjTfcfNxaqV",
  "key33": "LpHaq3cL66L2axGWQPp8b2HGJSotrjpqqA4kZjzXkBVaC69reFAbNcUKYi4b5XqUGgLG9kHqzTSXhQzu7N7PZ4k",
  "key34": "3mkiu8HwWTGb42FqkojyLRKznEpn1wzVknBpALoCzoeRXs8PnBJybinNrvwbQcmZHmXLrCyYvwaDnnYfEG8LxQzN",
  "key35": "54ApXEHBurYZ5KVEMFTtdSmWJMEVRWYphAGDKi9tWkxXtC8xYfLcjs49uEhdSFWpBg4HyaCfHRYqYsbmCYYXXHEx",
  "key36": "31cA2epZUvATuQBysqhFdgfejQ6CzxdFUfTZE7iTgg9ovUsPGiXPfZCFZfp8uQsVHzNzrYUwdMqk9vwPbF1qR6wc",
  "key37": "3i4wzyo2N9vLnFFGHkkdrhcPsQHP1x5sERRTc31RYsUsMvtSKmduenTgZE13RY2Mub6d83SrUQGoVZb8gWsfTyBu",
  "key38": "5RZ4j6CLTzcj89a84HHhZRGmeNTP3L4y4hh7zZnroTr7KPETPpfQf27nF3Y6kkbbAU1ixurTDkCXGtKfu24rD6wX",
  "key39": "3VXPFpzZTiL4EfwtN8sfW3gPU5xmWo7HTCRBKkhPcu8tJ9RwrNqNgnYsxhMZxZW371Q1i8sRtuvdUkzi4erHGvKv",
  "key40": "3ZdqM9B69zbQgPEK4c4QeUsE3LvnaFu9M5dH8rSspmpD5Ym6GctVecUL6ifb35cXXJ2wrHUgmF31k5wcGv4RcCL5",
  "key41": "3Xpaun78vxpJMXAhLy8z3k8dpvygoKai6vpjyXbPdddAxKcvBs5KKnkCF8RPBfC2Vct7et3SPh1U9cdthKEpCLDK",
  "key42": "2R4iGcQBfsgKpYAvop5zzuzp6mHeqNx4BJTD8b5mSSgNL8924wm9VLNR6U96tzf7kgmUEkHcC1AS7Ur1bFMCCop5",
  "key43": "26NyQBg6fupfKZFGdoSKaoQfbBxQbqKaUVTea1HX5haxthwUBZQTskTrcmhxsedUdNx8d5eB852FjtBgAHotp4Lm",
  "key44": "3E7BMeW4iVpcDRH6yqpp1sE6oW2soHL7diLojoQZhtqrKiABU6RiCiPaC77A4e7gpKV9SgLzwVp3rWAGsD4q78a1",
  "key45": "2Suq2c519QEJmPT3nYMFQhYo3tGhYdwCLfe8aK6K98bwwza4G95MhSzF8kg4VRvHboZYtyFuqFwcRVnFdDDcUcEv",
  "key46": "4PYePjEF9tTQQFXbW2V6HjzKc3Cbcf8Gk58CNg9bj5pZSPWbJbsemoqwVYFHH53WLAsqF3bvV5NYxqArTpjBzuLY"
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
