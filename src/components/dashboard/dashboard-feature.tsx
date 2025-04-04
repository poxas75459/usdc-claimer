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
    "5SXsWfMheuvYzzKTD39FVgsZSRRgGnisHq716mBjR1XCFhmwTDJ73rwaamT9UEBHCaMGPuBz1aJVkNpwabiQQ6Db"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tY845r3PPySqikWkDMDmC7isdQUoqKWxewDKueKopcVuGFQ38giCXooBLDQPxaY6pyCbjUQV8yaZmVmTaw6jKS5",
  "key1": "2mkYCLU6oSdzaLh8KvCFUU8eJCuSUP5p16SCpEW8KvdzygoKXKjgKYaWRWhXVt3Hi6HJ81UQ34JSWbnmBoFPK4F9",
  "key2": "541Bqrmt8WTa9QZcNg8rrAXNQmwcoSxHvb67k658XDosJKgP5ZKn6SCJyAVg74BnNnd3a2gY5ZfhmoecX2syXsys",
  "key3": "2B8WfppfT6FBcD66CgZHH2D2bPtE2qVUSRGv2iYRB1uRS4R4hX6KiWdYnML7hx75ZbT9NFWo1ukjpG8tHz6VZS1X",
  "key4": "66qDoozWHiSWB93jhdYK3gDu1ZAePSYfxycapAhcsNFoSGnVcrL72ytF8KtPMh6AqnUQz1M8RbqdKfmu859rpoB5",
  "key5": "58sHWiEMC8GGrRXftJeuvrgfoDjrcCXKpHcpiTYM947ExMTp676MfWsfz6W5jwkiJsaeVyHarqEs7KGrj5TW68P4",
  "key6": "dFTuTih8XdrYqq4iQ4VQYoHXa3qpyfadFjXai6RC19hP8KWe6QYNXAAF2rcTiNEecjNJHbZ75fSQB12yKWimYbu",
  "key7": "5ZdhjiTQZEK4KreDqYaeURaLVJrhtcv4SQ1YgHwCrLGFQNMm8iLhFjcYPYVZFM8r866oBtYedc5k4WAS9xMKj3Nh",
  "key8": "vZiVv6TMuHr6Vxm9UhTMF1rYzNpF48hSFkk1qe2HeiGGHit6uHycnrV2vDmJ64UooTdtzZP2xvPobXegxWwT5df",
  "key9": "5zqJWRB7AmW3hwpTYhmNPJQRgo3uKXwiP1NszEhDCSEXzCdwTLV25YS1vTWfo1CrFsg3PN3d4s9Ht6qGeXvE6cJ3",
  "key10": "3qFN4T3upkXcxjUU4gdMsa92S3jT1FBY67NY15rSUDnZYxsDv2ruuSt5ySxPYTuV3Z1naHZkEihtpGj6eBGgRa1K",
  "key11": "4YqhNPJL5UgWbnUc8THmQwHCZwMiA2FLqQiVekn37vD5tYt7KwaJ5kym195W9XPHRD2Y92sN673ZvJkvEF4RgR3e",
  "key12": "2kjieZHQkVmtV6BWTnMyqSCtVeAa3ud4e9wfxu3DTQFUc2c2hX6m7GQFNAF7oEjea1E8nbJ1fHkHjw2GsZrKJtEe",
  "key13": "s54sS2ivpQ3hFiJ3YcktXpnWaLBH8mvRNzq96TTNsPjzXiggFZdNczMVdKb1WfVDWUBMQFPiGKRgJVDJr7QSfhR",
  "key14": "cPMPJxkaBsZ4KiqVUFHyTJ1bjg8wxNWDp7Fje7FirZWq74LTScZgvTaVRqoPT1NvuxF3NAmwSK2M9bBHLT12b58",
  "key15": "4KpH243JEzdCUFprMfT5FmE1Ess9dyVxSV2itDsGHDrd3LqBbFJyGLoCQq8d3VT4bkVk6gEcRwcj1tdsoFakbYoz",
  "key16": "3KVyGLMNAcRhiiY7She3UkHyPvGkEhRpPw3VxotpsgamC9QMncAzqoM1qQ15k34Tz5wT4uuQ6kqmvpx57RFUJvde",
  "key17": "thm9mPQGgEUTH4GPUDaQ3SVeHTCTSnPwac2m48xQxzoGVbEEimGfwUNKT6FJjJUWpSHSnxiugfjfuUjMjoGm5QX",
  "key18": "4TNjrczAy2SsXhQZ9pTdNgvj2NHGVyKDEcehCJuHhqazieBvxN2VdomW4hdU79xaGBS3teRZPyUJtoY6kVZHgc8d",
  "key19": "121TDu25xscgmJ65GKSgwFu1VchmR8r88x2q6syZ4xJBERsiD9BSDd6UYphFUUhf7ivr2JUwR6iiCxa84UpRgdpP",
  "key20": "27CtkZ1mJ8KTzt62k6CYhqtfVozmFzzsv9oegU7nS75sK8AmDHhqMXG4vdPHDHBWLykrpyJZuLEFDvtkMwMjQFva",
  "key21": "32NavRasmAqMm1MNyKcN6xfcTTBXuXkzymM3rcMkEXHEqAVAwsC6KndsdFTh3qkqpiJbivmu28MQy1UJi48xAM9c",
  "key22": "5HbSDrtyzBTMFDLvHMdNV9KRvVStyAFYAppckQA2Em7vFWeKAzNSVvmH7mevxeBHARaLHGAxmp51CKAmM2MkhugJ",
  "key23": "2Ure7coyjfYKjg8v5sFuadbfhG6rz8itQiHHWAvdnvWaDqQ7ZEMakLAsHYb8rHa5oYNf3owKmZvrnQKiZRq9QJ7c",
  "key24": "mL32nm6wJCFQgxcxG3NRoCvynxk3692ZrL14nYdCZaskDPuHV59rmDQ6DPAdFNW2F7Po6iPdtNntyQe12Ld11Sq",
  "key25": "57KjZABbdfSV34VUKC5nKLvgQtZQbj8LiQEgLRCRCT14NVi1bG9JD2aekJnmrVbGaywwCJjzp5LzLLFR184zKLp8",
  "key26": "4zfV86GoAwYNXC2Pzmb2fiWtRkqsaZuj92WwbvvTz5vwmM9eu4XBys7NKRzns9Lz6b4AQBXQkk5azMdcfqs8abLB",
  "key27": "5Q1qWWuhfdhkcfonpm99i2TV7YRPhaGySKSPE3qqCTFi9ydjDoPTFfWQKgxtACFRWSFAzFdc3Rhocb1NQi6bQENK",
  "key28": "3oFXiYeQrb6cz7gHpXkx7vxLkXRtq1wHDD9841YR4CkwkhPVuPDjc8zdKxGYXUKAHNTNzHv6UCxnQj42M4Drfyz9",
  "key29": "3PYZ3dnQovmJRjfKWFhure79YC9w3vvBtEehzhrFsthmpfcvoSiwM5esUpynHhxBd3iuEHHKYvuq4nmiV8GhsePt",
  "key30": "4YJrivn2qqCbTnknLkCHHsKfTU7ptLPFy6a3eLU4eAoAxhj58MUPsnupujFjK5oDyreenz1v5SuYrSBs45EsFE1v",
  "key31": "43DqJ2thwwNG3mqwzq2Ctdoaju8hCNaL4VtyA3Cc3k98xRsKMncbK2Nv9SGDfsZ2h9G1w3n7XpQB5PPNJvxeukZV",
  "key32": "21RnBmYmxcZJfLrNVkD5K2V12UfJHb6xQRiyis5QDV4c7FLZYYA15iHrrsnbKX8jsH5aUSLdXUNFMQMjELe97y2F",
  "key33": "23tb9HFW4p2HKHqscerci862y51W6k8zuJv2kLA94zJWE1gkSjqYHDKGiD9apxW6W127TTkMxBecJmoHR8BA72HQ",
  "key34": "5pQ3eem1UoN4yNosj1bihBw23NnmYqftEkWwFAEY9it5VozQXev5T6SByfJkwe2XGVM4sujeYdQLQdCcJu3bcqN5",
  "key35": "7CFASKqpbr7Y1f2ofTD2ZLF86boZzxtrbhb1k6ea6PsPzXgmQLhAv54LTnG2vh9bqdNYqHE7oazw3EEFpPEYDRL",
  "key36": "5r18pEzrbP8b3sPjCHnjyCKGyC9kbgiYQh46ZWmAq2ginMZiLCjJTRnUDczKnpSMQea6hGUQfP3Zi5R92VuHrWYF",
  "key37": "4TsSqqqjuVfFPaZpFQozDmgRk1i5iCSJRqhbQ5f4G8gG7njzJXiCwbB3zP7oXga46mLK6yWJv5wcarDEpzdF3pc1",
  "key38": "4EKtt1ynRqfHkew3tHtg5DkpstkGE2miDaC18cthgn6Tc3or81cfT631h8MauG7rE6iAgC4wBoZuJRp9Pne8snKD",
  "key39": "2vhrR76s7z9CsrT5LysAHN3Ar2jQ3GJS7KHF1de2L4NatDV585MpDcCUfnri6zo2rVNAARnnoUJwUg1VGNPU4ghd",
  "key40": "9cKqoJQQqyBsbbYLtMs3xBJWP4cWDr15Yb9jhqU43DHW7zdpKgr8smjz2X8o8jZ6AAXGHN91v4J4HrfD6ZM8EpN",
  "key41": "4hDDHtDU4cKQ6djAgMUFvM6mwZDVraPgBYmeHjNhRez5zPFft2WPggVnRyxonRZ9dQfV3zhGEod42QPjm9nqdzxE",
  "key42": "46qXYuNP3z7y1xfcvZkQa6ZTS8mhHUNKKb1u9ooNA5isDURWQrHsrBdTiX2CNps8K5gGt8PvFNuiHsUJfpSPQKdk",
  "key43": "2KVrnM1sxmS7JAbCeaSyVP3HJNFN9EvPVQFoq4kWaBUkxdL4ihb8aEeqtTvByYWDEWMmbjE8RbpaMeRwHWqMETTR",
  "key44": "3TmBVjSJs1vZrTqMd3jsfrjsxCzExEsTQ454A5KCtXG2EbSWZc1fCL83mguTM67v2ybknTaGeKcUMpoWyB7HyZYU",
  "key45": "yBYeLtT8VqjRnLnwAJ3kDVZdmHnqpfbJuGTJ1VTBX7UvdCy8SxkHCrrML2DpzHshj35YtZ9dBYMkgGYoN7XTSzG",
  "key46": "2eFS2gRtU2S9zZMTYQG7dQ5PioqBQJdbnjVtxCtmypfrUtHRUPp2Uzfq1ukFo7jAJ8tYv1KjxXDUm1iG5aj2S3fQ"
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
