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
    "4ywhBjdiyyiudJKuEZi4mQKRTmJPTHheVgufjaUVcQiqMVXadJLYKafeuR2e4jCG1sTQHg42H6wuF4rQNnGHKRch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qx6PwmkbigmQekot27FwYecsHL9JSgDtLp9tNrTR6ndpamVV22eq1MdnXzHJmXDKSoPEtDzMhesmaEk9d54EQBN",
  "key1": "26z4J8DEFem2V5nGFMCFme7AqAtgrFdnL2Nev9v9B2f2TJnpLZTdaig4eDJpoC1eMJG3rGqNykovpC7n92vj7h4X",
  "key2": "2kj4aeU48ShNdH6WDqYU6bjwH5xX2zXj3PDCYtwBUvQGBLtYVLsGuxRi9XjZcKgyMJ6AmSFYaudbrfU6GYFXkg9c",
  "key3": "2mv9gjEGZYQTdJ8y7SFe92A54bfF4oQodBN4UvchpHkFWi6YJRwrurMapUXCMopJBd3Yo95rPC37NyCGrtqiLD1J",
  "key4": "4dTnaK4J3wiYJ83W4rWfhYTaGrCV4u6E7PsdpRxT22xCVCMWdPX3HXU8M4EuZwtB8HWEGXcF7rsR5Q4oNuowDice",
  "key5": "3i13BANHFQPqTSedZFEjjJbR8aH46t42GAa4dczXVD8pGZQLUF1TNwg2SaUgGF9svKetkJQYC6mRYbLobGAmD62H",
  "key6": "3iiiMRSfWcqhJ81WLYsebKoTr8Ez59KYbPPtDjthDvfXikn3oUunnR74N4TKsaWPdxCA1HGqukafReJBwwDABdRh",
  "key7": "VjvZeBRBedFt3ofiw9336WauPYtP6QAoFJUQf2nHuQFKpBwMiPZFkxarcauWAN4r5TfMydCvyJCLykwHPz2BupV",
  "key8": "3xg1xVZyKPpGgsQjanWG5czpNkiLGp4J8HrnauwQXWZeUoHMK5wUTJjBKbUZXYt13noGRDarqGdMVbtnzG9qs1h3",
  "key9": "3jKqX1Kzi9ADYbrHv9V4JfaKxxoBUWqz5YYGfnTfBtZRCctLZiqYgoattMyFUkGo74fPFj63GQsF5Jgzd7FsAA5m",
  "key10": "4Rfr6k9xKgh9Dup5RGVN7CRy82UY2eBzKzY5oNucFa8qwZQquz52as6rrGeVmevLm7vAJBG9gvZg2fuwd2Ar4oGF",
  "key11": "2CBSEgYFCa32WvgB3SdcHDWE9BxFguvmWWJ5iF3hbwrjx3ThiPDuy9r4jbsktKCYiReXjqdYr1YLGaEJPBgMkFNn",
  "key12": "2Mh1F9LnXFmDYsHqnMnU6fsKPDf4fYupL9MuGJip9c9P7VTBwA1A3rQuMrgdUMHQkmqtGq1mqZbtZNg912oT6grh",
  "key13": "5RYi9kpiHkXb4dQyTbnhtZnojLPxEfJt2wFPBTMAgVFwt1aqA1v3HYiVBojqjjY63nsJKu9vrRkhzswiXF7gjsuq",
  "key14": "3w4q1YbQDu7kDEhHY6ShQkd7ewCDLQQqWqvwpUbDkFdw9d5ukWjNxXy5fzbLGegUSjcsxwKcymhas2n6k2g6zssi",
  "key15": "2azsHsUE1jU95vubYmvJfxsY7sMqp6tvURM1xxAbEFmxXE6NLe8cCyNLcVX9oNr3RrbkTBxismPK1YhrMvbCqjNn",
  "key16": "4VzmCtkWhEcP7chNNXuHwoNGiAvZeFRkdheiJwjZJEoBttFhYC3AmYmLu5YVTJsMW1SydpRLQfy6TrBz82BoJTue",
  "key17": "66PRdkRtj1ji7a2fZ1DYpG29cVHQnUt48c3c9DJvnoe4mraCGMCoS4etH1CjhH6kDX3NwLvwMTkXQ2tXck94k4rL",
  "key18": "3kKTxaLGePp6zKfrmRcXXtrAgL6XhQhUXu2yKbjU3birWYJRRW1rzHdZNAXZFuUFqcChcYbDuyQqrdQXhZLuR9Yt",
  "key19": "3PMsaQGroyeddZKpsaoJHZpkThYj84BYzTjnbphf3x9WfDujG1pDCg9NVXA6MVSYJ7xEdAimLeJsoFaQ6vtAunQJ",
  "key20": "2kRHbrQehMFu8Srx2oMmy1qVCuvAxY8KsrgomigQekbsThz4LKdjnpApu6qSw8kw1KZUMTSW24AoTAtJouGEQaTE",
  "key21": "7bAja8iJ1xCTgczxuwUpfQYdvAFUVfiH92G1DteaYeTvQmYd7Q5nCVm3jhLZrcLTVX6QG7nmwFgr3BYq712c4qu",
  "key22": "5Rnn1jV54x1E2qTHtMBWrWf4NE6mbuxZpucptPNL9CRzHGK9WigvVfPyzhzYJAdMZWicoYiPQG5KU2Fqa3c3auKe",
  "key23": "5sjhoNxfbouNh3uz7JPHQjteqnrRgtceGjkCxnTASKxgEkwyyruiydD24YP9h84hACFgazmU3MFMKYYnzeALzLaw",
  "key24": "2wkVZN4Mj51hA1eT4aR7kW6ptogREr2mwASAUL5zFDrJ9MsK8aiUUQuDS6o6ndTvFgbAw4QXe47YpPSwY5PRue5F",
  "key25": "5ztYNPhfh4Lk7f98JrZcnBT7DnMSq39anQsos1hu3Z61V8sE778wx6UEiKFMNSgseQgJxgB4uoUXDNQF45jx6Laj",
  "key26": "4W7gK7KkBFSTw2C3zox2nAHjNo2AcEk3XfYugy9LmpR11TSYHoFbc5utUZ9baTEwWVnWb71DpzDm14HN57c9DoJX",
  "key27": "ZRz9rqQ1PjQTYA7FBqegofdxmwQgGRWSqxfr2FfNp8DgvMsipUkTQXpfHFjLo5h4SViAw2uqdzXnuwGk3awrdBK",
  "key28": "46cPEn8n8TawS4pzfxQLCso3zMdCmcz3P5LoqoE2HwcLDPdA7YfbbNZLqCXcYZLToj63uyUeBH3xfpVhappxiH1e",
  "key29": "2AjDomDJ4ognLKVA5MiksWjPGJ3yPEQExSKnkfnMoLmBdQ4XxkWK68XPyGzJnHTuaAX6X3PVKza5SV2RLfTVu5BB",
  "key30": "63nvjmeBBYE1s4ipGgpYtMHFFhpwZtTHae7yTzB89Uim2P4HHNb4ECSz11JTmmx1jx2NjKjiLwjYkTphpMkdc5y9",
  "key31": "irKzSgvJ5TcjGs4rajBKhM7Sk5D78ApmvmYnwgU4fCm3Esfi9SBnBDMe3Cke8Yd51M9xmyTeHwTNxhTeHff3yEN",
  "key32": "4hzjGkWhwyoV2Hr7jtj3CSnnJ8sqvBD7wfT9G4vjhNU9i9w76KLttmqfTMtLeC3ZrrRhQv2z2eMpLYkoWR39vn2v",
  "key33": "4FP1wxRBvmhRWKLH9mdc1ndBHPem7CzfWfpiLHcYN9wLv61oyx7oSZb8vJqXKxewpghjLgsG54RJP49E2TcfJpCW",
  "key34": "5GMX7QyvFDerAioTqh9a9sk9ebqudPeuY4UhrVjrJPEXe83gFq98GrLa2ENDPKNQnpWYG2YHgothWKv2sDm3zoFz",
  "key35": "4HUVTfTYtnwpXP4VQWodtL27F1EDe5CsDjbU82hDGH6Lb67xFzU3G7jtbGqPE1AD4y4rvi4BRbgdBKP2HeFUWSRh",
  "key36": "4zAcWNy1F1eyXfDFxAeTASRUufK6Xg2dZxHN6vJBp4aJckvbyYbCoyaQvK6sciaMPP4WYLzKg1sE2kscv8YA3uoV",
  "key37": "GfiUbrBpqRgWPf2hniRrxBPtVQrcYRve925vgfbzfK9TYnVzQ3u2b66PNJRZZFGemJNUCbDPheS6xrhfLtmuPe9",
  "key38": "49GixYQWJiqnE91iFP65UyxHDcJ1HsM4P1SSCenVovdPmNa7xbWJ947oGaLotsy5hGaEmh2cGvrF5hVzU1m5eSnu",
  "key39": "3Dhjyp54KC9Wx9Kn1d1Y5WN6eZ3imVpmYZzbkEVZCeoFTUS5Qv7FPE8jBjFiwXwR4upwf5jTQq7r2VvzmnS3hNgF",
  "key40": "5p3iy8pQX6mdo9i5F3hRZYJ3eq9PvcH3EiX9YbxkWH1Xkvr8UbP4jfik1BQMReqBZWiycEXdMeKt8bAfVZSBfrd3",
  "key41": "3MkJpgFsyVmspT79o7E8qBc3ppeJJ4kVbJPuJ2YsLvmvLr8PQrzB3gazztoBky5BTnpJkLsUHnZqhfYcWz6GEh6m",
  "key42": "2QmfuuaZgeFQa3Ls2AtGjVe1GiRfmvC8vXYEraeN7XdPvnYLdcuZseJYhNYF2Z7yunnzzSyExygJ9t7NAg6RM1mp",
  "key43": "3tDrBBs74Pm2LzjhEfyqAonyiWwMn3ZZXtfzBs25rxrcXrknFraiBUgyee8yMBy92B6p4Et6SbkzDAnDZmnZZNVv",
  "key44": "5SxP1fUPZihZABwMtPUzNAQeCfTwSa71uQJ1tBpfkebXjYjYP88BDpHPVHHMA3xKVQ9RDpfsm52hziXsYahNGcwy",
  "key45": "3wBs3X1KidDyCDsWBxHQhBniPNkckn7JmZgMq4Up6jt1ZsjCoyWS39VY5Nn2iYNX139GkerPsDSgewEyGvWkPvT9",
  "key46": "52KjLL8atV4PGmpBGzATLjCa3KyZ8bax6cLxs64zreVYdJWrWKd7iqrtExjMyFcdRtNkVVgimuCLZTpHTbUkWGaD",
  "key47": "4NuikMT89571tx2u9jzkUiNG1itC4V12ccijT5DFaY3VkzRQ5UpMiUgWbnzt6NAwYzadrtEoBhiQ65SXx4HxFnTZ",
  "key48": "5kn56AzbfzFTimUvP4ocsYat6juqASyvETkvb4UMGNtPwiMDgZSroy7pg6EaZLJHqHX5KQUXf84YSQicQv8eVgau",
  "key49": "3ckGUyhVgfwa1iMu2Hr9ukHidjzj9ktABAsuNWveJwo5k34mWoahYJStQe2qjvvU5nNSHkA1C4K8C4UEaWuqz9sg"
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
