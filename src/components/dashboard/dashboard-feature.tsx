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
    "49U6VrwunK3NfcyhDdiBg7aixx5P7U9VdkuZDyESTqfU5FrL57AJwbQMakEBEKwDB8hXqXJgm7bKtELe8bzk1W9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27mEoe549Yy1kNE84ihAeoyZT91oEnKr7prEL315X2FCtBAqafbWuPbZ7si6sFjEA3moa5VJYLwnYVCu2XRmov5c",
  "key1": "3V21UUMPRC6c6qqhXbcdbU1BEnAN7x83mnYzvEALf3u9LaR4irGfbfXU9B1Jzz1tMtgu8hkeZhTRCHTjhGbFrPgF",
  "key2": "2q1WUkgzk9p2zfm1dsGDei68DmHM3MrkHceKdePQMn3A7ZzDmdBXzonvAhyThmKsegAdQRmAovpDw7H87Mpn3ikd",
  "key3": "mCAojfds3GVhqsf56vrM4nsxUg38U89q5P16BgPFHkoNFJGYdKsiZ9aiCaZeoWWrg4f18AsAVikMrcLPtxg1B8F",
  "key4": "5KN1KBoTzWuwNSW3Vq5B2kFMQMUxmjZ3XLRcseJZ6uFgqV7Zw3XsMUJWxQbeuF7HLj45dmunaBcrkcbx2aNa2wDc",
  "key5": "5eYJqGLPKy5wVcYyeyYaBL5jP9vuwWKLKKjygnJGYNdgtJYAV2ptQLfHvt7Znmp9D2ticYtDfsFm4Uijs9hdHKst",
  "key6": "2bkm3Pw1BSk1ckhJPm3oQMEhxyFvQw7dNEugowniWzJBf4p9LjEctr3p9EdYzy9dKvUg42qxcYA3eaESoWQBxKr2",
  "key7": "64ArYrtF65S3YSSLdJznN6S9wXKZTBXESm9K4Vk1hGgUqcZMQATuUcFU985iTgFgjTmeQEcsAKRrfcsfwxvBWFJx",
  "key8": "unJv8mxyFJtXaqG5UoGwqDxW87tepnCxwLr3ospQ1sss4WvvLgtk1bJUs8xJbivTVwTUXN5ngZyrWzv9wHffbRQ",
  "key9": "55Jfyy8RKy9utjbQbK2Gd2VoCrghzqXLkoH7reTpg2mgu2ULLJBNGYndjHVPjPtQNGsxyiZo3DGDkL7WjLXdme5V",
  "key10": "2mjQVdpfoi2gSDuus1Nd9pERaCuCzVzZXaHCzvdhYYbx5ECRvQDCyXGwkfVpn8emioH9KQX1vyQzVLdjCX52vRtU",
  "key11": "3dUEuDpgvepNtDEYSxHng7nzzYT8mYzcsVjWjYhj7g8DjqNy6WHCHLUfgbvSPFTdjji57XRVBtiqRZjxrYFeh8BA",
  "key12": "661UJ53UvqZKfKvSxfMKXj9TMx4rgQtNM2aJg7yWD6iDpkpDAhuZueZCoqj47V7PgPFqSh7ktEekANeiKCwbNjHj",
  "key13": "YxaY9rhikb1tFFV9twF4KmB4UKaJGzgPRmJGpaxNLm9NLaDFV3o3ims3YpcNUApeJERerkTsKXsX7p5ZKXdQgHb",
  "key14": "58Rr2kUCy6pbSSnm2Ro6ehXssmiWrCaEUahGAZz5Nve8Ro1WfR8fhay9rmo2MfYFgwDh3yq6kCearEBEdr31p16V",
  "key15": "4Wc8oo2K4waHXaq3UUiefvimqCM1LnWwxAvMENHDZeNjbeVGsxmCXFz1F2CSFSHq1j7ae5hgnsaqppZz3b2Q6ZYn",
  "key16": "24BLHsDANoEAFVG8CF4rYx1Jy2r6ue4fKjAti3WjxFvZAnaZZYG9QHUVVrLwC1cRGu6QCiQhvaCSfth18CeNsZQY",
  "key17": "4jYtU3ag7HhMDL1zQfmMxYJUtmddm6LiQdpEwCxBVpJR9ayvCCWJmr64aVMXBAfN1XaPSQN4oKyRr9A9aB29bKHi",
  "key18": "5Cad6mnTGyUswKEUnQDx8Nz6TiBdaYMjqvqibULF8eaumswwX3ToD8nFPeGBJRnh2vvSNuDHd4Ykb79x6WC1aCXy",
  "key19": "75WEnXa8K4LqCVNNxozXtSmJJg12mHRLmRThH9v1kNDKQh9KaP6c2UVUXQbA6YPvGCnDUu9eKMV5F9HGKMJi9m6",
  "key20": "5qeKS7raXzPqVjM9s86tze6YQ7JFobUcBjhXQkSraXJVwJYFoTvGsfX3AAje6Aq34Mo6LaLHijrprtzcZbWgNLXm",
  "key21": "3CyXkbUdKRzTFjTRcqCqQqnBjqCWok5gwDeTRNhVA2JVWFoZMJSA73e35WvJbeSQf8kczHaS71XKJXS44QaAAwbE",
  "key22": "562GAgSzFm1LCtqY1WY8Wkb4CkEk7Xs9AszeeSfbqWUKvJGiXBZLjgL2utCKdL8V2g5CSx7nLGnDfQH8kHDM4daJ",
  "key23": "5vF1hA3r2vS9sLp4ULMrjspWXAQEj5nEq8K8ChQjCzumuH91FS7t2doTPhFFmg8bChdMPuZK9f4gcTfJpxDYyP9x",
  "key24": "4DsajPGUJJHmGWjYi4mx1xuVksPKjLj4MEKXWfpVJiHrrywDyQSH6VohcUrTu4ZhffEnR6J24YeSqE6QJGUs9ptr",
  "key25": "3iddSRjsybumKDx6SFJgRptZA6B7pYeUwDtPQs6NqEr8kGBLSL1v9hf5Tm6qSSJ8yUXshmJx9Ao3m9byGcjZk6bj",
  "key26": "3nEZ1GaporGceRirbWSVxfKWf9N3BW2wZrtePNbrGUdqFe2pthZ7MgVEptmmziFfbEuwGwscModWe7RQqM77Y9ZC",
  "key27": "5v4a4VYUGsBA9FLXZwvVS5FzvWDMj8Nd38xFNzXAEqhynKonkcddU7vvtRjEddTeMHQxjm5juPkWLzJv7zez95LE",
  "key28": "5ciMRm6PApEb66fLC5mrDJ4uK5nedApfFhZ1wAEs7yT4sBYCwszF5w6rvmRU1MvZoZZvRXhyajTAhSaowdk3xGrT",
  "key29": "5wGeT3tiC9MVbu57zUe6JGPhXeLbViEdsSkMWRE7TP3hNVvyQfn5DLa8dpQzATL7wYFahTTAstUgvCq67GbhfFL",
  "key30": "4RvciE8fiKrfRoXF25fs1peYsRzACsPxKuJEQTniSqgA7usvUyot5AtBHzd9eAeyMehRQM2Rr6iDGArdj4ZyXVdj",
  "key31": "391sqEe1hxW4hngXJKUafxxYN4yAg4s9pckPFRZ5N3vKcB5mXigtcBpSrZYkcXEZuCTLWn4K5eKFziXEkSCYJGXX",
  "key32": "5D7J1qVyYw35mZe5F55h8LSJxENz46dQ5udT3YEGPK8ZadJeachXtPqkckNvCr77oSXJMuyXaaHhy5vMBi9rj1wi",
  "key33": "3bCwmh2457Zdci4DzwS7uTaX8hmgDHLYbDBzDfvAyEThaERmhQPTc4NKAcDMngYt9f6nrmWDsFkZAbMtciqzoR8F",
  "key34": "469vW5Tg2VPb6oRWrejAjwXRHQN72Qfhic9fX6kD8WnYNv8gvZ6tnRxGUbpJC3LWNbWoRtnf8ZREKijhDRLkQpAb",
  "key35": "3dFxdGXxdoBaUHrmo5oXretqpiBoLvaEyA93T2te93Vhne3SmLC5gn4ixARN3YHWkgXjAWUqRb2FXeuegYpoEJGx",
  "key36": "2J6xz74v34UNckHT7XMtgGfrmWWL9N9t53PXpWkzcQQox99FHP1BsBEpoVYsLhsZWWMLdNEcvacVU31GR7TUYgus",
  "key37": "2dmfAGiuysASjRznqzvYNhP8qynvcth9jUr7uQyVSB4B4ErLw78xtT8ZR18M3tRkh2Uz1zSPSS3AJdtURKbK2wRd",
  "key38": "2MRaH3zM5Cdp4hHCNZJTjH1PHotWdWJZPHVjHgivgb5ibaarfvs4HxLzeK2c4BQwxvyRu3C111txBARZhNVKsoFR",
  "key39": "2nrqQesZureG5iP7LUjr5h5Zsa6kvY45LkoXyjViwV7SSfozKXhYGPqrqBBRJsjRtcX4nZeqjqRAR1kUQP48q64c",
  "key40": "3mhPV7PNxWbQHn7Mb46VsgnZd2X1BYvN42f9sFvkQQedGK7Ck9wNnLjLobhWdBZVtiCuWuQGbiJUpz3UiP1vyqPA",
  "key41": "mUJExNaZkgjanav9LMeP3n5QH9tJKtPVd8Ju2fax3hYLeT8pHSFbs9f9qmkAMoXw1YfJA3sixSwnGCX2WF4Cpro",
  "key42": "3pbvksARjhkVWVpJDK5tLmTo2puKCP4yRZPAAPjjQHjRp2e6QgkSRDAP2Yc4W4bqKgXq2N7Y8nbdQtt9PECAEhZh",
  "key43": "4koqG6TwH3DkmUjEHBrWoaTmmPoyN3YGyL3XAjbjJkvXgY7bxxp26wKUX8Ha4VDJajeXDUTfKnv2FoRJvFJ4u3gN",
  "key44": "5CTPc1hkefvxWUmJwCPFB5rcF3qHPWHYvqoq4LWirVtV8cWBuQ7uFd1xS3CKoJTzhcfQ56A65Kpnhdz8DadcEEKo",
  "key45": "4gJP6w9cEMkwetqZxNJjHuLfhP7US5T3X8UX8FpDWcNAzJBqWKyBDXnAjp2akPdLz2Z4SaBjuX15fd1ggv6rE7C6"
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
