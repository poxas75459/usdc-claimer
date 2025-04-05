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
    "5zKwSmyT6MYVxRWoFmVb9aou3i5W4phJK87LozfLzW3ULatWBvZjGjP6cA2Mps85rXWjgYzYnWE6pJLFZHZSA2J1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TrfWbWKPtQz6H19QnbB6rLe4K3i8MWJGMtMGwueuqN2yxYVEAVePCD4tbqvoBvy5EJxEXvwL4maChi3xKQBFaoy",
  "key1": "2BrBpNTAdMJWyFsgb3N6sZFBgiPF1ZVLR3sL8zMAXKvU2btKnvqFD5FbKx1XjPUC3F3JutJ4cEc4VS1ReATy61Qt",
  "key2": "3zbyVaBjuS7aTLAH8p1MmN3GPVBKbFQcLzq7kLdnxdHyGdRUBfnKd5bLr8byDi3TVPYdpWfpY2evz6vsnbcqxBvz",
  "key3": "Tw7qhriegzkQNHTyVzwmjScRjyqpUwVrJ9zhq1Bb6Y5yaFwNVu5eHUcHMwUj4hUUuVAQXs1wo56H3iVoAmhk8jf",
  "key4": "4dvrSdtLqdAXG58nqxzyZP4RtnbCo94AgKR1zujNi6b1XkyKahvzpqfShCjWZKfwqbenCXNPe8S8Ki727wGtnhNN",
  "key5": "231nAHETFgNfR7ZLT2DKr8UPRufupnhyqnb7fyVj236T7z9sotNiJqSdDmrWChMcouXtwSnU2dBnrVEuWGC3DzNE",
  "key6": "36scvRTpNy9wfrcfcFmgjxXvouHxSrFhFv8BHsCzEC613S6PhmG87FhLphD9xid6zze5bVkQQWwAma62ajHx5tUD",
  "key7": "4Eji3BFLEcD8YBQnLkqnGqPHJUR9Hxwwm7o19UcxDiE1HFaxKRpu4ACrmfb5EzG73bwiCvKan6jEGg2uDv5GJmPN",
  "key8": "2ePBd7URcwr2AC18ygQeaux1ApjhRjvFn4ARhbbWRTmv7BGvfDEXaY3mM7DYhBYs5GPnC8W4GNdKydahXcTuNtuF",
  "key9": "23ds2LFZkirrnGYe8n1X4agGNDpXtRKHo41pcGKkGUqNRhfSya1YqQV4edVB2KH3EKwctZUs8SfkwpFthG3oGQW3",
  "key10": "5DgAWeD8TXbHUGDHQgHLgByZLJCu8Gwk3vJBfKLyvKnaLt3D3drEVtfvSANBZoCkSawqsVJv29kWypJm6BLSr618",
  "key11": "5cXLiKHEfGreeeY9EbqiZboUURCrkRqMPCNvVisLdCGmRXXG617kU4HDpfpBm36zekJ4UuuYSynHxmdxLy3e4bv7",
  "key12": "4edufaMEc3CvprUpcXsVgDMr8x3KLmCbdVXyuByLFkpb9ArNjLWvBJZDsjNa5dpdVTfCa4yCVjSoMTv7vhSB9MWa",
  "key13": "3HW65gs2herES8ox39j8zD91oF4d95bNEy8QwHAyfeyhn2aExPZ4fbt8zG9PH2rCVMsos7egP1uukxBQ1smn64t1",
  "key14": "5Pk1JP9fqnogn8dkcxURkePLVvZyANYuoYfpsALgCrWTD8JVCB4u821d1pEyn4pR5zFkbrbJnEiLCYSNTPqas6x7",
  "key15": "35x37T8WJSvxTfMMFMU1pS99QJuLh9yAmqKBqeHUCZDDex1CxY5FmjNY66QXouzciKw3uvnNGa4qp8VSggnNFhC5",
  "key16": "NXjHDHpDtcFtHaJzWxsHxSAjmH43KcXwJUudt5Hjr2BEz7v3BPe6ALtroRRRKiNSrDFVsk4n6hZM5AemSD4t7fU",
  "key17": "2Zhu9fvT6fpFhNfTb9spsuR4sxF7CfvgC2v6bVsSjmLFKDu9HQAGmdcAxJpaog4fJG2b2xGnD1X2pXz2B4vWAwsY",
  "key18": "2MPxfCbLrZf4UGFVzS68N6Urpz1eLwDWGgKxkE1x54Y7AUX92Kv5suy67hAgWkHEFwCrb35H33FNLv7yPxXHut7F",
  "key19": "XwxNHQWQS5mEbKrm1tFJuBs9XfE2FUVCx1dojLUao3nTUkghQNhbQAeG6aDLnu77YmJLD7qQyzBazUzj6aGKgbj",
  "key20": "33iMjDvqxNzZedrTCL173XAhKhgP3ubcF8h1G8cNBoi5sqKWi4zTUttgzrGBgzBEw1eH2wJJgUeZNZQxSFJ6QEU",
  "key21": "23xs5vtUQ9pmipDYCtn5PH4PDLRy2N9S3QF3XRAMK7Mt2bbF9118DcLooKaEsrq47yEex8R4wAmHQ8fas9BTSwAk",
  "key22": "3MkUbQeqeCFTgRJixv4pEVqUV7nfjibnvaDDhpic6icoQ3mXqT9J6QNDQffexPJbkLaAUMJ2g4jEcVHRRnXRYMhb",
  "key23": "62w7aePVN2Umvxj8q8nz7kUhhMuQuMqfdh48StUU1875phAdPv5zYC7RqRNPc8NyFs3JohrvJB4aFFcsYwZbiwHJ",
  "key24": "Vp9jP8n4USYCkSBrPGVSAXuDeQaHsSTXqkHeff3immB6rNgiPFsbsJDit5bJEWDtWsMDiUyXGaTnyKfic16FDHe",
  "key25": "xdSRnZQGnP89zUh1QsW6svVP9GfyNWt6hfC59TYvEEsGEqqqFfdSCbpkHmLfnD3TLem5DBuJt17QJ6h25dNs66N",
  "key26": "2VbpBqry4UpfhAoppETe5N48kgLmxpqL2KUu6rKKek847Ba6JimnXraordRtjUxFkbtPYqt5VKknqWRkE3Nd7P8p",
  "key27": "Ea1f3n9f8hkcdhWpGo3PqiNqUDC6CqKJjEeFfmbFx5PADYTg77tzchYceCoLEkuwQKXhwRCHFeAevxQYU7EyGNA",
  "key28": "66CDZ5QvgYroE9LdKDF4SjMnXpfPEfx5fLxwr8e5M1GiHdXJzi43dRFGXkJE7ZTsZ3q56oMzKbtdinKzzGJRf5LU",
  "key29": "3WgYsSbUfULtsirRNNLn9DiiynqzNJp2rLGnaxkz42KFAWRwJfZz98YCL139w8WRVwvuQqCEL8MLVew6v2AbtvZk",
  "key30": "2juHWAHoV7hhAiDujVshfr3612evMtzUvmK3vV7kmiEzFz1nj4LWCp6vggHadmKDDtPaNwe7NFsonxLjFppD5spg",
  "key31": "4NMLCB8bmnHhGGh2MahcPjp7iZUnUck9ojtPmAR9FkLMyruc7rka7GyEEAEjZQwZUXEMv8W1obuTzHc6UnL5uh3k",
  "key32": "5jJwzcaaf3cFqrWrGH2sgYF9UuwJaDBZsCuxd5moC2bh2Rh1mFTgAzT9omJBCHv1AdfyJmy3U7kYPs4MJiiztkj5",
  "key33": "3k9EuRx9b3zasRQNQ7MukyvWpmN7yvWt2LFGSACbedMzWmSf5QX72FjM8EhsTz2xs5t2svi96X5ebLwpUwP11kyB",
  "key34": "65q3RdU6qanawfbk7eGV5SKYEq9SpALmxchNyJi9rM9uBWCyMktDseFcAuY3sXf1dketKLwa1BsiS25qfEyutPLn",
  "key35": "2RLoiyCtH8VvJNNRgh2uvnkrpqdms2SHMR5YEPhxWNpdehJFowujbHjsmanFickLjxR2So8LJucyzUwta9GhrAum",
  "key36": "2BWpdSpBPoaLCoUKshiBtNRya4yVM1ox27fPjkbnuuDNzuZNziq4tLveP1LVTHFbRXUUFoYdovoANpDhBYyNrCJ8",
  "key37": "4SSZibQV9HK9kkSrb1GJSxC1ijbnfgxDpcKPSFxSHWxFRFSY7dETt31cvXSyQbPUU5vDmtXQcvSLE284PK6kMY1z",
  "key38": "Q3jgtgdoQUJ7eBu2yb16vbBKZWoMiytviHuk7QAkBteTh4JkU5f89p1gb2HmE9HESLdcJrirws7oHNk77Bw7DpM",
  "key39": "26j8M4vhW8EAfBz4HTsjNCM71YxQcFMJiS5MdjjMKtGzPksTiDu6p3VmTME6yUWUNVTHNdcSgm7LNE8TyKGBssrh",
  "key40": "5MpUhDxZehaGXNF29FmSB4L7jeDkBAxJcvKGpM2Fegpn9RLJxyZN7NQQBcSkPdmTz1JmuMsnN1DWhMS8dAgqXU3L",
  "key41": "216V285ixbrac5ZqKwvdsDnzGxCwce791r1rPdhp8vTbPona26WFtBqPFsRYabatbgjDTfKqXwyZjwNtnYvmiLwW",
  "key42": "2qTJcjAqRMffzhooL4ypWiQs7TJCwGr3MtpPDjctZ7HAt3vRwwRinKaTxHprpwstNKm2oNdv2koYSMN6yUEGKYfs",
  "key43": "46DXPMPdWnmBP4C51XVmHjAahUsKD9FRdk7sxg3GeXaUDVKfP6fRzrStDuctUWEaZE1yFFhJmiFgjweQd7qYrP5c"
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
