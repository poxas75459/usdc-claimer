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
    "5NhkzEp8LfBsia45sbH75giZLCLcc8bHkWsbHVp5VL8m85D5YDThijr9mgGtkKGtjrYftoBGfVbXYHzZfgn2ZkNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E3MLru76QL9i91Qp4ks2TMZdcPBP65kfNUnJ4wDJkYAZh5QpucxBRuHERS39gXeGXw2ykLUhH31svhXjWrX4txx",
  "key1": "KNiYwXHZVRCwHmLKPheJYNFQeiAezBxsYrqCuSxD263rHSX8uZYzqzDhHgNbLTbqkfs8BkhVmYyAuXCSKhj8Ai3",
  "key2": "3ciSJ1dtjcu7M8GZH6kfvkp33DppRZVQMwveXmVfJbghAnKejnajLxzmxUc5HYsTQo4MCz61abyVYBKsQVQU9HeF",
  "key3": "35EkxKiwpQuBsm6WpSFCSbtpGidZfvkz9NbA7pbCahiQ8NiQe7QSQFgxTY9LFTpigpUeX3SRbZtXL3tRKKsgR7Fe",
  "key4": "3v6maPJvUdeZsA8S5qZNUhtWGeEY8aZBGwKvJHSDcdzuZW4FRuLCojUdCgofK9JZBUhrYesRM5mQzEMFKr9ppMUY",
  "key5": "3nRPEkZJx9zavwXTkgdcC5yUrvx1X1f15R49CzHKPqLxJe7LvQwCsDDSWzUgs3nznE6CfKyWQsiEVrry7oyMTNew",
  "key6": "45w114NTExx8MnPbfMpAsh37EjfqyMsU81aTCVGT5SBEAyRLHxMgp5Ud3S4vWLutfGLzJmvGsP4GZuMPuBv2Ba3y",
  "key7": "65SdVtX297mPiqab1xFAgfMTCh7uu3NuhQM8FmZY92zZfyUhedPMXiHN1UM6Ajk8GbaFV5KXNgH7P54G1RVBURV6",
  "key8": "46qbsS1uAmqExrf5QjetEkSfETzroNM9Bj43kvkP5uTjfdbtNmtNGdzva4DrComyAKFLGbgrGmvhSy5DBBGUBuG4",
  "key9": "63totwJWZttfphv8H7UqC6iBq6fey4c2LL1nuPa1axj6d7TjLYfXdSXn5CSYkQbY9SfYj9QnTo4rEmvGKxyJsJBZ",
  "key10": "3RpWXshXk7X2TDeR4Y1drwwqwRSGERMG42TLzHTu2TYrzg8BXpSWw5ZzY3nHABsFj2u9Ai3AMzbUdC4JLwXEfWNo",
  "key11": "5RYfzPuR33GFdDx2XMN1MjaCFiSFVA658SEBp5sefu79U6yxrycRYqxvzxroVgCw82CUkLvf9HoCt1TFLw2aGfrn",
  "key12": "3JGLQTr9JvubrwEffwUhe4H12HQhfaS23GLDNKZtUrLVQS8bviuG4XkALxUQSFzddYEGejziMUD9Dc467kLJzKFz",
  "key13": "33q2uwc5BxRFDRFNHzTWXfmsY17popXq4adR5xLvr6UGgrf7fQByichCdwpqpcVfqiLqKpMS1x9W7mCMeRgmePCb",
  "key14": "3ffKKeMLujRWoZbr2W6wKXgox1sZ7HH4kJmeMZnD5UzFFSS7visEkRK6ZGPWrh5GtvvY9G9Uo9DG2wmWwCt9n2Yc",
  "key15": "5mNLeFM8eKxMSPmhSfXE3eUaRG9nPg8p1ChixDm9zTDoqCzjuu1U7dp8De98nL6otYgZ9soD8A4BC3tKZjLBZczH",
  "key16": "2Xaz8o6X4Rg9R36D4Z5mN2H56WkTNBHDTso64ytZGK2uPD5k8GVYtiy4qtBmBPX631jGjMXoyiWr2jBG51juf6eG",
  "key17": "3966sLb4qZMYdefzMfJBzfzZWbyoD3SatmrdGQpC3x4B7RohMwSDXPpiryQ4TeDgEwcU4SnAfbFkDKKuFJwuA71Q",
  "key18": "5banZ5zhxeJmGToiz8CdVCpoz5x3ff2o4nydXeKQx8KBiBFdiKMvfP5egMkQY6akpsY71UuCE5vZxNKJf27yUPCD",
  "key19": "2Eb52scA7Mwpsj9B6wTX6DAi3T13BZV2VXHdV74sY6RGBbmsvKpZXbtY4X8zFGGbEbPSLVAQbF4xh9QH1FDmTz6a",
  "key20": "2aEhWMfrtuTLftcMFLKC51Fix5mAJ1WqriUicPqsm5d6PjGN1CCF1YyKRo3BMECwcA1NDkwF8o57qCXnw6Ein8dt",
  "key21": "JJ97yRC76hNx8pXxyS7m1bTS6j9YLHaUeokMvRp1EUKUDvGhUju6VnAZTUK39HJWUDYie9i6aP4chwMErLSUSry",
  "key22": "3mhsgVHf9x4L5zEm1Snk8FgFeWuVi22N9Pv9C2uqH8uH9PSpEze9UJXSZja4urzk6WnntEFnMUCoMmvtD1vPivDo",
  "key23": "2cvKP8K6Ae6pUaLsbnfXwmhZdgJxrSpLVfTJPYFXAWhw37bF76EtPeX8fKc6R5X8t3KuGb3H1YjNFnUuVKvDjVus",
  "key24": "3XmwZh2GMHSWeQdiTHEsf8Z4F7exXtiEtpSJMVBzbSTEEAUVtbyaTxuu7yxfhq4gH61SmX3WC61or4VTdQ4EuLqq",
  "key25": "4Jh92rrSQv21yvptUQKfygYfZW4NK3eq3f2crKRLw7e63aeEe7YnfUAsWLJCJBwPv9eRUdbEXuLcw4kGW7u4g3oK",
  "key26": "tkn4spx1bBnVveLZhKNuS5yRtTJ3d5xNMYy78gd7AvFnkJxewLgYiQmfX3VSs4vru6xfGSD5XqPQFFT3spaHemm",
  "key27": "5XHgcC4W2ySUUZA3mXQFkzNKLSSFWB96DvQo8CTqtu4L9KwrJjEa1PYhJACDnPXn3rGeWnNUwkK6o282JZazJ6kp",
  "key28": "49ZodJNBzDdDmFrK19PL2syhQjsmwCyrJABG19yQJNPGH873vQbo9rSiX4MmtX22ekrij5m9oSkeh349X3FB5D8M",
  "key29": "3GztYr8488LX3tjkz5KLGCLHSSL3QFW3dLqJkk6qGzZA9fAueoCD5CzqJZYoZJJG2gkBpTFsb2TGuYZRLET8SsW7",
  "key30": "a8gTDY1o2vWHz3zZwaoxKWLRqLC5B9FNQ8Hv8NVriroA82XnHdsySRBXQFyA57MCqNQ1zLXkeSCou9VPgJv4B1t",
  "key31": "4g7sZAwRYQunASpbyBkozAaJ9eU4jSXoZ2c66LMb5cB5fuCy27PTuN9MfZhjVTzUvfzC92npZW69erbF7MDdhkdQ",
  "key32": "23B29eMT2d6u4HzbzhSCNqWnD4rAuHVshwSBNS8F8v1RrQrEVy7aCJtfNCg3PPnVd88DSBqt1cfdvGdD333ycGiw",
  "key33": "2uMPCdReakoDtRKZD19iNwPDVC9Q6k5nqC4J1vZcKZHTDYxKpETApkSmuNv9pWp5TtTTQFTfDq52zg7Aw2jEApqs",
  "key34": "5zCaDaJ9UbfeEu8cy8BaM7xBiznQqXH155YEALvaCXBFWz6V5T1Nn3F2SV3yGkHv7YCetqeuQUtnaPcGCzrncFiG",
  "key35": "4NkbCWjN63TFYLSVjD5p9Vxtq41CBYcH4cvsjMzxmsuCERsDJDdNkca5DsdBNzPMtKPKPqowejugT15M8hCXuw5f",
  "key36": "pTLbzMdU4gS3z37PTJ2gbG4TCh8jGeMjrixVE44APFTA5uthK67o9QBckixp9NjNQsGiKW1kbv4ZqyNbh5Ln8cq",
  "key37": "61e7XoRnvLduRhFV8m7nFYVxSJWsnozy2qYhhY63ZTxKcFwvPMxbLECSwWznKneu6UdjtraPZ5CmtL5BXi2FgFWH",
  "key38": "4PqKCSE9twMsuWwdkwkiy2Z3mGauGyDhuVJ3LadukkyZQMHKCdimPJxxzHTXsqn5GcUFj3ziRD3kgX8FHKEWkFJ8",
  "key39": "1tUQfq96gQupreqwjmV55CPaCWschUNoWV9Fy5uWnES46eoCmHQsuant1HC2gyLg2jLpfY8RLFS1tspbuHsdQgN",
  "key40": "4RimnKXZEXceHRBwjD5GnskPWYSqVG7iDmiejN3PByrhJzwfrqzFTrUrEEiZU22M91ZZEKgj8d8EbiarVgqNWvbf",
  "key41": "4y6ya9wnc1coicGCuSPhyRpUCeHWpjESqR3KoEP5X7WmJAsT6udmnjXDzHF7st1MPV7aYnbv4DS3NGNEKMUuHYFU",
  "key42": "4n41pwuy2kYZx5x1KC9KaiwkgVRD3KjnbedsabDydtw7KTv4megyx2SMhzSX1b7KGDf7zmtSmdbPZfSpjocPTQA5",
  "key43": "wTNTVxFCFdwcAVWFqs14UBvbuVvdAJ8wwzbK9EKpNPwV8eWTDmawXwHp4jZfCLSpK5ZrtEhY7LFzbBY8UgMAviw"
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
