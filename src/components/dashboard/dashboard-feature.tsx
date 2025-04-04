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
    "2ASpMAj2jCMjFV7dPRsMW2nQ6LWEzqR9B1uv1f4jVsCsnK5r7uooXVoLSWY5zLB2YWgozD73HZBkGW3tCVWTEaQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gse7XaWVavkib8tgBwVQx1GdTbi814pd2u4U7VjtqZwQc2Ci9g4dGs3HmUrtEewCb1PboxDY4H12wcSiLxXxMuU",
  "key1": "fM7duLTk2umqsGtV3gcnoon4R183iYi8G5sQpstU7iqHBbBeK7pF5MM5MPDGympA8DVWKzfsHYm8VKDfhRQ9CS1",
  "key2": "ectDj7vNtG1qSPdtwdc44CSjA9EzNfbKhh1Yr4GLKXbnpQpWfj2eUucc2mnUManyAfXvuj5oR6UN6kCe8j1aGNa",
  "key3": "5eQPpG3XP31WBcGXbVSGgTZj4jzhghLSpc3JPsgqY2L1ikX5AgfEeLcZA3NnSpxBJ8RpUHRy7HoiFsdfp55feYaf",
  "key4": "2khFoZoXndGvnXVcs6EiBkW5uu9MAr55EbCQcZqF6YbPiUjkX6TDp8mtVaU11thEcSzpQvoaxRqjywseLGoJHqkJ",
  "key5": "pxugUJa2yDjKVX8xQ3nozEF3FQhRvL2gdpChoj1bdkBsrHcZwi2SCZ1mTAksEYBrMD8uzLU9Xjpwt8nz3eEdyug",
  "key6": "2YzRy6zUj6RKA6p8XwTdFXnBTEFzr11uJqPQkisrqxB3xbppGYGdWfbbQkhsVJJTjBXPSRqNBPeJPxPeXwBUbbfQ",
  "key7": "57S3QrMbGCEqk85PaY6XPwfyG6cfuvX1Vwf81JVtAbwtVPC8pJbAYJgcoGdNBemrHv6DKkCh2suCDg8b5zhPu7kz",
  "key8": "5tKyKt2rAGozfrdSZmVTdsQdupXjfiVdm85Cw9QhmvwbC4f8XGz3o4kyqgSezJsq48B1H7FigQgjZSctPwKqsMGE",
  "key9": "34D2uW8hBfuaKmYvrqZZT7ZDYtPx2k2k3wGw8HeE9abyJ8ewqKnjVDuVtEnF7f4ys5by2rPRJmMfzM83sXXE4B4w",
  "key10": "4bkgN8xoGLu11VTKRvPpBKHh6xnHK26Q6BdwHtuWiTYRVXLquyAeqojNyfvkQhPPumP9J32zJkNnJn1NihChmyoT",
  "key11": "2WKRq1Yo4EqYYiw4AfEMXR8orb7YtboHDsSJpJm83xvEjt3APxzbWUynuj9iKHMShrBjbQpDvb1vztG1vg78SeVp",
  "key12": "7Ctr3hWJXMUWpCpnHFmWN29YHr1HcCapxV7tTdpg8QRUG63UcXCFisVjbooLRbB5kdC8uBmusQjvsBEtpKi7BgT",
  "key13": "2wqDCCg98Z6QQNgJUYgPwyiQdKFjXsQFVq7iDHcTAp5VZ9YAz73unUTxAsRMDbHxi665aYsRDn2snMfMBZqguLhr",
  "key14": "4DgDm3LdzTNkEQ8qQWzLMehr18vKRqkKN3MTPwJxSKJ8NRsVv9umsBTwTwXS8ZxQe2hvVJfkLEMncHGPvKuL3rbF",
  "key15": "3u341zoqbTBn6XhmLVA1uSoPDc23ixtFNCZzRo5NDLVJRLTDyDXSwRP5uvjjw6Dx2msNvRDHYYPHBeagBS5uePDy",
  "key16": "5oBg2r7y2fSB5nak2dnuUpXyzqSSbjkrwoJEAqiZerMYvm464g42UjxoFMrndNgENdtYf6LkKDB34FksNsNjHdVE",
  "key17": "2r7Djf6VhvWmh1u5nJU3MpXjtuDHcu4otzdCmb6v2FF8rhDxb4CoPtK5TMmuktva9BjtBDUBSL24HoBzunD1DtkT",
  "key18": "AfWd14DywHxvbjNs25oF57GS7jnPch49t5S9n5aH2FpmziAfK5xscq5X7oXrmyNjNaPPdCPX5fia42MixZNJ8ZK",
  "key19": "57Jue6qRZNPNtJvERkpt9DojJvo653aTKCAogwtEMSnPVSfiPryVqbfydufcyMWnjjUZPhckaXsj5N2QGekTN7d3",
  "key20": "5yMrRZvwx1ZgRhknfdaJtkoiDQ355JkV8afwN3SZUgmb2AH9pEtxiMUUZRUgHaGKYrhiiNagDNazyLpHL16gaXDA",
  "key21": "KKeN9TzLTUBCSjt26j8i1ZZ3GJXeQmsgkNLYzhMCKc7dwhNVmSiH7hdakE1y2rMfu3G2AoVFKkpd6vj2eZbaoeT",
  "key22": "2cexHqHunbnrPVE4GUUGExj9idjkELpxSfDEVbBos8dGE8oisgUzBZGXR2Wi9uFuqPXt5ds3wgZqwvn9swJWh8e8",
  "key23": "6WLa1n3Shid5vxRm4ktiZaGhztZuf4Kx1Br72QD7LkmAawn2KE92xFdRiVG5QTdjgKs7jExQUJzDfnFvo1qSx7K",
  "key24": "5ioFcBN7dcn36aMM9a7n3VDeKzi2LQ9EZsyL1UvP5KqvthfpCzizqHcmXu3NYDWBQ195mJQndhXDY4Hx8PbJhPVL",
  "key25": "5L537ctodBFP6BB1FPZb7Pqms53f9fTeSU2Do59eHfRN5JU44v6FfwExuqCirxYhd5V5ziVkXkfHQZAqXntEVJi4",
  "key26": "5cFoBr1Q5eoH3UU7UxzM6gBMGgm9jDZnWMky9f3bguuYMHDewQdKAtZskRDLsCmrfV7rPRjTfYxV2RNGgvLoK59J",
  "key27": "4Ts1J7PJRYVPiXcZovSwR4Tfgn29wkX2tL1dBQ21sNxgD51jpP4dtqhFXLvrUGdufvxucrDkwY19fowLQjh7pdk4",
  "key28": "2fif3Dxwg7rgAnjHhfspEMAv7LUwV6G18pUvYTFx3fzFDogpWBGvkfC4DGDEhA8qz2m5aczA84BccP3op35dfEYy",
  "key29": "3u7mAk7fcbj9wtmPPKXnruLXmgGm6qNZrehJQrMsMYH2maMxyjnP8HTBJCr8sHFsoqMFASSgQyFhZ84XtSbgbpMB",
  "key30": "5YRtGCrxDY5A5fx6zu1BU1dx8wZwm1mtdwuJakeF4mqE3r6LhDHZNdENS386PP5SELNX51GMCdcKKLc73LYwpxjq",
  "key31": "hqhXwjEB4jKDgzT9fRq5oQDAvQRfD1cBLABU72o92uF5xX5XvsFhP1QE1zEoy3fVVCGWrwfKTgUqnDqdCf8javi",
  "key32": "26n7ms27vyuC6j2zwpF87hB7zKB2rN86TnKYR9HMg8NHN5gxhSgUw7vHYfPRdEcasxNozRYwvXDVaMLLEBKSwWqA",
  "key33": "4vYhiFsMbLni73YuPQixesKo7Mn9i7hf5f9dw2Qf6xoKBkTo1dNSzzKaNa82J6AzdVK8bxeCd1z1kp4gnzMnmeAk",
  "key34": "4T8SwSWnRTxuLGycwZEKgmtmkRTXBrGxbV5jABmmWah3DqC4MdPBXz4zeJY9mmF8SzLcLTcHZTa1V2n6DcSc2hRP",
  "key35": "3Ru4azEgNz6fTDvX6VG6JvsfJNGNfazp1KV5jL2mmU6t4GhYcop4Lybg33Q54xFNd3qjapwnM7pzhmswfBxi9ogd",
  "key36": "1iu2g5fCXFopAEmXtq7vCXV6ZPPnYrxPv6BnQdX94jAmNXAMuZeF6KFBPM4VGxgNVSr9E5RhcWb284ygQ3fojXC"
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
