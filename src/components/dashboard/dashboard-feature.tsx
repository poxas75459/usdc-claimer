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
    "3AQTZ3kD3ps99SuzCHWB2ci1k1sr5WJgsyRSd4cvVYuPhgGiza44eu7pj9H7XmQsY4vw8469ZRMTJe59WjtxYUNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vCtWf8EbXvFKjseKNPPmRb4i6ycDMzRcDv8pAEzFvutdpMN9u2HajXS9yCAaaH7kpCN4bkg235X5eRUDvD1Zx1Y",
  "key1": "2DepjrXZBDwvxey8fsVYwS35qgS4EBqPBFrnoSFZ6tdGg4pkzLKrxSHx9uXRaSpK67sF9JDfEzGzCZCmwEzT44Dy",
  "key2": "2hxLCNMgfAKTGQGBQjy6an8BhrTxoDiHMz66kUPy63TASVy6HSAhNkDP7Tkrt7ZBCEv8Ugqg8gdczd2ucwaKGAwj",
  "key3": "4zrEyRPU8Yd92QBgpT3adfH5tgtkvo9F8ac9g6v1MHAUxcVybPuiCMcZAFLXLajDksr6QC8R1Rbbn9kVPwC1nvCu",
  "key4": "61mauJsvPFZGWukNNPN3UhnsgtWhYzuK4BGkZvfNqF1Frxqr2jKUyfkSZD2UEaUKBYYEckqE51vx7wZJT1gs2Ruv",
  "key5": "5JYGer5LLQDGy7kn2hrgUTfZKEfb8bEbu5jbvuUbC71JXtw7rhFXjnXJUvFpxSNs6yLgKPiYmQL3qUbtmwfBULZS",
  "key6": "557af2EZ2mWXrVMn9LjaTVj4NSjkEytv7pXryychHKAeTq9MxZkjG8dQS89f84a9rmcKKTL4Nzfutqi4ZJvEXio9",
  "key7": "4EzgcvewLcu6vwzhHZwQXF2P2DheAuktdSeGFQd7HfioTRR2LxQ6fMRYH6HUvxjHofswVVC7xE4pHdSPuWkx1pp6",
  "key8": "3ccPiphR4D4ALdwwpxcZ5kRKPsYbxu84Pc4etsFExefBmqdVGU5ddYMpaHQJmQm9DW5ttQxb6ZAhUv99s2iKyWBf",
  "key9": "4VYScS1b3GFtHkWXJVs1qz5wMobdvfdQdpS71EW6MSwJLXVFYQUGuTrSZME9T7pNd16y8kuTWnyruA2YycXat44J",
  "key10": "53jL6MbsE27p19gHoa8S3LuPA96PyHYVrJJPFuksTpwHLYrzMPK8vKdAie3nKpCc6zqbyLCatWUkk3ZEEYxWkVqA",
  "key11": "2KZiHGeHPvkMPKH7USfxd7UshzE3t7i8PYoKb4K6VMvXCEahCBp6d7wmv3GoikQf9PkVBaZmJCxLNoroameegBoh",
  "key12": "5qBJeRTHdA4QxzVc2gkh1qC8j3ki1jQXsgtmbqGf2MtFWMTJmL43sc6rR2usn1WtXvTVnPDADC1XnehZp4ZLuHs6",
  "key13": "9PeEkeLGZgjbH3T8DPWfvdco5vFpFfjL7JDAmMdCejS6QUkc7M9Zar7Ro9vckbRKypUSZyWDuPzAvPPHW3ykJ9m",
  "key14": "5zqHh34o2EWChcjNPNjP9DAALfD3DuUbQNHAZuPovKLUmRsMbnNwvEgES9C2e1r478BYuKZX2tMXNnrQLaGT7vVU",
  "key15": "4acQbdfLbyBecA9KnpBZNGNKQ9FVikMTmkfTkHYibq7t1p13n8rCnxXjFsuGrVPMb6wUEKnfzxyCkZioySrw9jgs",
  "key16": "UmKShFj18uZUKH9LX2UBCwvNX2gZeRHh7WtHVoXh2UyRLC3k8aqRnKMKNiPdd41V5hp3fTwbGm3T2wc1ssiBs4z",
  "key17": "48KXsVzCzge2iuBYrNjEJsy2nkGXt3iPQJyjDKrGJ43MNjcDggsemVtsq8pDDPiLpcbTgMr5RzxDbZGxLtoGqHri",
  "key18": "4cwRWwBC2D9B7SqSR566icGjwDdS6FQKe2fPjxyafNLP9j5KBQqNC6RnVyPiALqxTXfHFXMKqiiCC537HDGW81xq",
  "key19": "67aP2HHzjEympMWkpQ3Ss8CWDbwFGWRLfRFB5Dq6gN4vz14xtiFGxPANeD8c2WoPPfFVdF9LQ29p6i7gNiTCqnnt",
  "key20": "C3w9ghEJ2fhsA7mL9iwPSuUyYiTNKemJdRPmndGA6t6fcvZM12rG2Xw7zMf22edTWmSWdgXfmFVziopdwuSep5Q",
  "key21": "Edu6gssXD4EDpNZkG2PHEFW9ZLbupL6sBDj7pMCvtC1D59hcdHpET9bbTrsZ2o9yKw12SQPo8ESQY6tKr7zcsqK",
  "key22": "475QRdNCEWfrk8jEQVN3oBdhTrDnFnHbeFhwTQFmwJg5iLf1N8VaNbX4unh6nMppHa8oo9tNLRBSb7hPQ5eUa2s3",
  "key23": "2RxKtugTk5wxYYFwm5GteuzgGWnvFkMC2VjV6nV3sYGFFdt5qS6rZTZDvxr22sXMEuje87SutWqwWY2iySK86qjQ",
  "key24": "4Yt2fbMA2JAemxhKUkzcDnB2QmsyRRGtkEptQLAsrftiAjpx72ob4uToaFECyptuf5cR6wYnBwgaF8t9jGioyMU6",
  "key25": "52BRoZqFRcTQuhTvn2VnQ5uLK88phoTHkw8MAo8kP9t4AFQ4m6b9QVVY7Frvaj4eJsEqp4QBwpoHRcV2ryKVvowT",
  "key26": "FHGyAiqV5tj7keZWeJpFahkc3SdmuqvKTrxzTmb644XdUa8pG5oz6C1MoogYdMifsXDVjaDc4FieweD3iWXV2JD",
  "key27": "3cKwqYxRrMaeTGYSogZborT632HtDELi1pvALSztVd3nt1sktcACFpVLKcKkUdeyp7ZSZn18vYXYqXY1bgaANaXF",
  "key28": "ziC1b9VP5B2AanwAx4767QLidvvt7J7UExLfL6JNwdtQZbaRSeCqn9agGdP4Cqfb1GvLz8dLw6o7NFyS2uFDqiQ",
  "key29": "3Gw1fiCSDJfcXP8A4AMovoHUsukQCxwh4v3g4BYAQL5PabLpeUmJu8eqMCZStC3v3S4sxZWJAnrk7k3EmTqPRddd",
  "key30": "2jaBe6WbMqbnnvoLNVNjAKm5vjCVQyn9PEfkMoUg5Vn6x2CcBQJ5st1Gx14rb3BXigZiybbZ6Avz9qKSQLKfZ2mn",
  "key31": "SmBf3UqwNi63CstaYpnRBK2Ft9dcsivtANT2cWpTRxP6LVZEso8AohohLCgyYr4XLzPZGo8ny6QTWxJqT8YxrH5",
  "key32": "5uZ5aS1To8VaCAgcoWDD4HqTAzoZmdSf9u9PY1WzvdhizoY5PKj9LGmc4mp3s9PkDxsi5VfXXXNNX8rQJrVxd4Tb",
  "key33": "5bWcAjmjE9KiXmsx1csDKMc6Dud8PMjCGexZXd8D1uDqhi8aNdPf9e6wVFzSqqsbizbamxVr3G1rCeSmTLiXCxiy",
  "key34": "4BvQqjM5vePbrgZocn92p6dpJq1YeKCg7m2iceM6AUwDyEdCsfyrmb7QkWLfDWBg5gwq2gfxmWz3dyuNF5aiPo6e",
  "key35": "3XkAW1BQ8fiMPMVc7bmP7b9Ka5H9ud1YA7uWt3y4wSWAqTG85vGrRTq76E6ynbjrdr864yetWsHe69di2WxX73f4",
  "key36": "59TWjNdGxnkAa1QxwosoUYW6uh5xmQodwZsDjaaw8Z1Ap1Jqt976JT3y9jR4gPEV1bZX5dTYBAMzDNdp3tvJzUYN",
  "key37": "kH8FixZCexvx9VBDrc2Ze1VGJjnrZjwDkvJ2w8nTmjAnPaWpVxeCxoWPJDdB4NdPn267gSFqsy2SqTGnvHbY46c",
  "key38": "XNfu6sk49Q2AFMooti6v3g3JC3y4RY7zsJMm4HTyJkjme1FcSDo23hqdHZcuX5nUzWRgAGjbSCji62aoUKgeJ7e",
  "key39": "4wqDyDrLJASSjXaZcQZm8s8eFxqbywWcuQbFRhDhjhC3zfykaioW22WjA93daP3skyQw4WdUrHeHqfSveMVYGuuF",
  "key40": "48DfMiCWgH4ZppizGh2kMAmVQRyEAZWnLiFChU2pw4rN4RFgJ3zi32rY8TSfbCrMnrkUsXv2Zz8LMdYjqRe2DxPX",
  "key41": "4hQ7Qs1h4m6AXyePR4YEY2kUzkuWuLJopjCsiUeTp47a2NkoVcgmTV3qCQ3T8B8KnCAwHUhwnfoeuDDAMSQTtea5",
  "key42": "ntHhmWDKtn3PtRzgK5tjVN1SKfGxsesoCDzWQ9NYzwg35tySCihcLRTWComXYqWF8mykxwLLgbGx4Gx76nNfaNo",
  "key43": "5zD4w9toC3Dq5PHfZfZtMjTTEp2vC4YngYijWaixnF5yZg9k9rLsXZLobjkrUn9Z5W1uEi5wQU6pcfiueBkN4eUG",
  "key44": "2S7318zNZD9zwmwXoiMpJUd8WmuLsSphzUtsiUrR3L1bAfAmLBibGL16qPBtRFozGHt2xWxW4Epd17EmQfeVzvfw",
  "key45": "25yLsQbsBd4abP7y4JsTB2ZMqntmAGXmzJ92uJaiVAkJRfzHFjDpnhbWPvTHWgKBiEZeaxqw88qSc8QxWs5VW977",
  "key46": "3eApFqGFLH2taGmsH7Crnx7aAAHa6Ju2Mj2anqw9HvLcxZfugdxfTHBGdeaHakUBNZsB7kSFJspoa8xRQ9uNy4LQ",
  "key47": "4EbbvRD41zbskhtpqRWVVsvbAEVEPiGY6eeThVSqmdHYVo97GxQq3K3HqmwQWXLVkgE8bDa5eVde6iNtE6AoNzNB",
  "key48": "2fkyHdtEeTizm9WKgptn2kSnvtgVWsUS4Z6uaRQh5GEB7aFeMsYrrLMPQGFAnDDdMNJ1HMXxJVHr1fqLRzDA95kD"
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
