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
    "4DN5nXpNdCKniTUquvQLER9gq84U9aXeFnBBkaKVcMB5UQGXHccJGsCoBkfLw5Q8bfYyP5SowcwDKwXtsKUeus4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5geftciHbWzJkz3crpyVm2UuNgMsSeZnXvZx94Av97EehwU4tAio3Eors98EsbWSqsCKVF7jfdYZaFdj3Vm9c7fL",
  "key1": "3B7t2fkLE33178rbkSQJdEGrRfFqgWuddWYBSqxkw4JeZXxDJHWX1rmayDTVK29vnWd6Leje2MyV2mHBaoixpkhs",
  "key2": "61eePVQ516sDrJHcbNdgPBAfon2ZJZEK71tMxSnpNhK9p3AFATKDDUExhPirqZK1w9r6Fi1t1nuGimc5t77XuQ3h",
  "key3": "33M1K5xmpNHc9karW85z3PnvSTb3DBDqrybzJrt49oosJ46Up6ZBiKo1JjXxh13KNgB9kM5DksZ7WxvLt1yMS7NB",
  "key4": "2jppf4nCMFBp6E7e1vHxvameMQY7cbMGPK7bM8ayrrfY9mMF63mzpTL5ptkgs5HapKXRTvwBqmzRiDG4c89nnL2",
  "key5": "5FEHb4kzQJSZMrqjZNvWXVJKfKyVFwBLjmeU1PYcHJNHCAh26mDHcoEmUohonUCkxhdn445Y1uj94JvsqtDzeZDe",
  "key6": "5aaMZk3Vy7NdvYP8rK7nprSXQGDwYBDHnCgM89zEZVqJ7cdwUPnywUJefnqVPqefSEKr3WJ7g18DDjqjdNuFF1Qq",
  "key7": "2RJnTVVG6Qd9jgRLBzu6kxys4UXkt64XhCcbLYJ98ixQKzw4PdfTgBR8khjoivZY6KnDPGqzQVLmikYC8zTK7pWf",
  "key8": "4L71ifH1ztDt9sg442kihan39A8AJjGC17eYUNACHrGzeLEu7aKmD5EvQKotc4232Th8qsw5MjpZgukw5FFtVj6Q",
  "key9": "2FHZDABVaFXLN2jwp5p1zutfXqNy2xicAt6xAk2tHzZuDvF6wsnfuXvtTta4GwTHLGdh455rVk2daKYWiKJiuWZA",
  "key10": "5PDZBEUSUYNxSgxMgwRH4w8whXiavRtTequ2CCZWfEAe1xMVAueDZH89tk7N7XTCNZAkrSKWkLYZvryz3cpB1iYY",
  "key11": "2A7EqhTwqooDtYbhc3FARAz6MUUaLShkBCTt9m5MzpybwcVkzDQVW4AGVvGvpJrT1uCVZv763fh9Ds54Gsx8MbvN",
  "key12": "3QpdB2JW8KqFHkjtwXzSvrZMURQey8ZCCUi7N8Edi8qhodvaVFW7rzRxKsf1PUnXnRtrfAuZFP6Wy9m4tW6Qm1x8",
  "key13": "2anM6uNnHC7PVJnAXG1np2kVgCNqAcU4xa5yrg1uwZBpoDKZNDogURCbW45vs1Ujo8PUsTfAuhBYh8nXc2HnB4hw",
  "key14": "4zT4RapjjiPShZnkY4GN5MkkWLtM4FtZt8ZV8zk7XwgLo6Efa3qQRNdQ1vXH2ds7G9HJptHkmWAFQKECdKb6LWAv",
  "key15": "2ixkbBPZzsDoMg9QME9w7SHmGPwnPfoAtAfvCa9MCc1DLsphJMKyuXwbPgkKxfDWj4AQ1v8bhy4SLKNbXCwa9e3V",
  "key16": "42HFVxDene5tv932TLf6K9UVRrLDsF3UerkgDrHo4mBvQDqvyUan2pShHv9L8webfQLhPDFWUaZEGJF8s7CCBWWM",
  "key17": "3nym3BhAFQ2mqgMq6oBmeeaMZ81zKAMe9LqEH3tWrzX5bPr5jrXT6ZbTwbnDhiyh5jxL9DRfmakXRjBir5VoGXcA",
  "key18": "2eoyzrPuYTezjvhoknhTJWfWsQYmkaSfUS4mgbEjtAC7tMG5M5reYznLPvTanSN8tv9aNJwnEXsLzvJj73NVS6AP",
  "key19": "4Gd6qxZL9bQ24Cffx7qkFB6Ec7QC1EMDz2szvMyNVRJ2YvZ48zGH3uVgpBy3JFHZJymPFnfB9No71A6hFYFsqUwQ",
  "key20": "38JbV8A79H1iMiyjLoBJfheUjW718Vp8Fk1LEsak6PE8AaR6ma234cQrdCunCsdCE1boXPrLB4ZbCC2NTNQ7s94N",
  "key21": "5UdQREnCQ8EWXGLsQKHex1bfdj3WxhNYZyLVpgr2jJfuT84BoMsVkfKxCp1vm8QHbLJampXTiXfdPvWYsn9QuuZj",
  "key22": "57sV9SEqKaTdVKK9xgaSdVtxikRovtoJXfrxWNFF5huZxgN8UyvJWuekVSdvjs62rc5Fd1VYSzD1g2o7Z8CYUM4y",
  "key23": "31yeU1KHTKzyUon9P1aF7Qkmaby9teuJsD2frrDRKu8x1S9ZgFrJxe4qQLC9PGYTLqpR4vMhAftJYvU4qumGmofG",
  "key24": "ifrhqV97NNJ3qWGt3Jnh2a2TbvM7EYRhANgeRDHiijH494HZ5MGowL7fLuqPaTE7Ud6SiPauJXD3JdUHBykPv4A",
  "key25": "5WEHwWFZ11DuGPjXCTupAFBoKbqZsWk81X5YogYL4utE8tyE3NfN9M38AAiQmQNFU5pnzUekAvYmXQ3oPcMRvpGS",
  "key26": "4AmvsvJbt2oij4rLnajBWT3BqdQKBSgTgkQqs285T4e6vcVEmV2iS34ApwpyjvEPLmT8Zyr7gbnTaNAaZXguyJA",
  "key27": "5dbpKNLoiCuwcw3qCPgQSPxsc3Bhciznc16y2Si7YhvD7ndwuoHYf9r3Yf2wTaZJ1wnqqhVWchGPo7LgygSSbagc",
  "key28": "5zTjcDdGuo8SDr46J7NbGmMtsXZTju5f7wzATu9JqodN71oz97NN6usNPxJT1boLVBgs9FN99uX2zg7qr3KDmDsn",
  "key29": "5Xudj4SERGGQ7sqJcVPrb2cZznnSvNoFzaQV79248wY7CzYk1eoGybuMapwiBvvpAGWmcfeoJxM3Qjc1jbiBuez4",
  "key30": "5ZLNkTj2u9hd8PgXjDKTATFxg9yHuSiSxVBPvsYuEChivVTkayx5DbCJEJEc83qZ6DoXyWxSjxd3twMEMaMtNiGC",
  "key31": "2wiKCYfoucVZ1drmMCa6g59w38LFfPgZDQMxJobAwNL69NedYSeKDGMYDeXhuwVDkbshVk1j8s1XQphScQ6VVMqj",
  "key32": "4Yeg9B76hY7EdNhyvTJUzfa1XKRc4L3jHNJiKiTuYR9bSMPtJoMMUKTcykWv4QpB6Czj5qdjMvKaNW4nvgUbvT9",
  "key33": "24S29u675SJiwUkKdRcdJDCdM5rWVoQ7vrSHN1fRAdFSogv8moJumteFGYPwmH5DQhyRehCBLPD5BsUtoAoQdpG7",
  "key34": "5EFLwBwwiZgUHhZ4F3myAsgL66NXwAe4aBEyp7Nuj4CkSVBUAwXf3uhGMHKmhG4uigVDzr4i82uWmzQzKZkjpbAH",
  "key35": "4gyyXouCLkeq8AERgrS9BhhjzWqAdVay778i67sfkwncydL4zyizp5Gj1Nrf4vVTntDqVtq2F9dTn6fDSP5kKig",
  "key36": "8WLWVoM6oJyUg41734Ki79PDMj1mqMNZ9n5ddWcBjtjpTjSR6cQFg1xZjZYC8pFm9YzdQFGp1Qyf94Q18ygYu65",
  "key37": "3PLLfABskd2kUD7PwMkVSC1gPwdnhiBV3KeqefTKBFaKX6JN9HTwpJewTVgedkZGswimq9xJtTQ5Vxy83kpfRXyn",
  "key38": "3Ed7GyeKQojgaeSN9tYQEJpyrg1GiPedeo6nHC8WrqvDjLUbHYhFvbC8pL6eD7mJepa2aoYi4KHVuAK7yA87gy1E",
  "key39": "keDixnjNsKsEK4TVBuhaX9evodVLTFdM9UapVRL6B3i86LhsrUwUyZbbAZfzCDHC22b8pXnERyGpsKCg6s5VuDv"
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
