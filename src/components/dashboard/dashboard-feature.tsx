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
    "3RjHBxtRePQ97KGQHRmLgFx6jP9CpMRLRefAwFjirQmuDkN2bqmXF2VtTawFHvANRz29R342ZDcfaLHEQ3keypXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HLd57TgjnASydBHbC63YnBhB9ZNUXLvSVAuaWrAKc2DfRCJa24AZ3N7LJPKZNjkd5AjWu1G93ys12jpMgygPwr1",
  "key1": "4eBfGVJ1yis8kXFAj7wcrYPLe6F15GNyS5YGu9KNFMTiPPtyGDfasyJqZV2xcFEcffLVPKbJxog9fa5pmQq7Z7sg",
  "key2": "2ta74qXoyezDjZZmSCA3mw9Dq56DjqbdiUquQRyxUSWLkmNoZ1vqLauM7FJVHvc4hrz2TRhBTPw2xkDssZDHkRqR",
  "key3": "2qeovqxSih4VTFoLpQmxQ1TxtJCiVBXhytruBMKUK97u6GNwtRTfGESr8Ey4keg6S1c53WNSavsacWcMGAKbjZw5",
  "key4": "2rZc3Y37wPiACKzSBHF5z7MqET1Ti4HipCoGJ8VrUPqSMzxBYEN9auQvQ2JpFXdqmVKca9RAGZjdbnXYjg8xBD9t",
  "key5": "f6NQNGUZJS9B37mUhWFWkBDXT3FNVhffRTWzKDkgetDdZuKrBkpeWZxRaxwfLWcHoRGQD8NVR13aVHTXXpHopKM",
  "key6": "N7FBAfrWnd9wJ7K4hkprMzjJfWnVv9CDf6ansLKFtPgnjc6zheSBJ4QMqcnx69EmK6vvZ7nTtKhac9tLt5p6iUF",
  "key7": "4qguzKXpmdBsBhk6ihdKCK3xANUuHTWMkArVwXbsMmKrWqhzQsZ1j3DjxMm6ZJxhckHKoSuw7bvE6swfZMeBraa6",
  "key8": "3vALPvVtQgxKrVwAiEaURw4V9EK8cW9QA89MA4muYc5vxmuChec4d25dwLgdxyfZWY7mik4nk96Ph6LoNsWRr1ox",
  "key9": "5kNgHLJztfnUNY5wjRDyWKaGTGky42TWyJ2unfH3J5smemCAWYjHguKeYrN1g1BvELSqsUwgSRrDD8etWxEZpoAv",
  "key10": "5BJd4782AAC3kVDbP4rCqjP1uRhaaUqFm4dnHd8acb3WwWUZw1D8DvPM7PPae9E8uyEGGYbu1TZE4DdHWDvQYofc",
  "key11": "3vixFcnm1gDA74wuyoWyYA4TRvvaGJcpGx6wZ1MeKrLvq6egDBf9HAqNhzvhSSz2ujH8V4pceZ9rHx38bwi3kUMj",
  "key12": "59PTGjtNyShGXyDSsvQgjmdQyVnaxppmbzggNkavHDQ91fUqokHZjH6P8yMA1QbW1obRnSHuD8pRozFCzDPj8onc",
  "key13": "4Tfri4ZZrV5gFhyxcA3dtspurY5ZtF3jGvpXJgsvu76W6BJ7DsqKM6uFjfuxCX1GKgwvdBcRWWyYmqN2YjnpcLKF",
  "key14": "4wpnXRsnbwzQuophY35TmSukFme8i5LLRQDa2vWFFTR4XXCEYbAME9Scz6F7q3XWCeiGMt225CZ71yzPrwgUzcQP",
  "key15": "3K54gTGbKktSR2XrQNyaqRP1yonV37gnZ9rYLaL42neMwq9w5L1FKa2hTbjyX8XnrKRQHKq372Z4AfU8i5jDDXft",
  "key16": "vKWaacXxBfsPkoSD3Xm32W3tkq9etFXCQQaSsqwAP2NaRbHw8S6YScLspVZRhV9pQSWgBEGMUJ56N8kahWnqoGH",
  "key17": "647Tw1N8Pr2U5rb2RejCN63Qm3REgx4TUGtFW4UUZ6NwRLkG44u14AMppRsGX94nX9rg4j6bdFmW3K1LqNGyMRzs",
  "key18": "4BykJSJP7NcSokaFNsVrA5Lnwstr3Tu2S8Dx71VeEmRQrVUueb1pihxM7aqcH71rufYLuLiA9JcwA9EnuKpnvznp",
  "key19": "5sAvvW36jxSqy9F8fQtbnkQJF7YAbgz6ZcEBToxsBoTGU9buQpZkYSwAKS9ZNRre3ySc2D3hap28kEJt42o8EZHz",
  "key20": "jdbhKiRozjE75gBM26z3f2DhdezfTLdyVZAxGMLRVZPdRe7SxxuQQdraBkj3k6r5qiaxpC7U1GdMYHPJ9aqqgDp",
  "key21": "3HhkQ86ig3B2kohhecSKMSR7JZ2GmaEJ5aQou6WTWxDJwWTEbBxo23sqvX3KZsTp7Ubu2Df33oCPkbzEhGG5HQaL",
  "key22": "JJWGJWc3nmuQfevnJEKa14LiMKBEBnS6kofFMgh1z5JaHuBgqfZMicuFkphPZDEGHZ38LPqNRih7mZGJ9LLhjxs",
  "key23": "3GukSwSmPmk8LyKz5DSv4x3SPDdivALsALfZnJZX4nkVyxmJynZc6asVVUQps4Kb97eiFAaRVKtknd6aaUFcPrhP",
  "key24": "15oRaro5cswZtTRdWUAUgHGqrbhucqLTwJaWscTk3U37Wk2iUxNKKkN9Zm7cKhzhRbgcRGfqoHKHGWKqDfZafbT",
  "key25": "iTF2LAf4nXxAAtjYmUwXwjMNNAvXqZHkgzdqm9oTsQWSnd6Acs6c5E1C53CJS9D433QQL8SnaVzpRwMXm46ux17",
  "key26": "43gnfvcF98VcVDC5VNxh8X4rMWcikzJBfykn95SRh9HxJPCD2Rnk4LyppnVQxDt3tJbn4k8EhNbQ9oyxJkV6yqCh",
  "key27": "5xpDh5EHojQUtDbUtQucNkreTSXxmrbRNPETwZ5AJA9P5RnPz2F3CmEWXBu9LiHEQNrxJUWobz3rygev969Y1DW9",
  "key28": "4sX5PXyU4XoRfvyCVRpSJqBySR146NXmoWWEuJz3XkTAbYw8oNyNVSBcBbhdU4uy9y6eiS8cALDtTL5cb1thHQjf",
  "key29": "9adMGbGRHxZQNR1UGUec5jmu18J9VnuTwHFJptuiFj3JELLWoUd7YQEhEyVuoJuekAM5R9UFg5ewdhoa3GRebAA",
  "key30": "3nLQJ7DiiG84gq3we5Uaxe3eSTmJAEefZFnJrnx5sfPPKmm4hnX416c9867cBGMZ63Tv4i8fU338LWJo8vTz2KAR",
  "key31": "3nfDWzWAkGLdqsZBakAKWf3WCJsRYP5KeFaktDn8DaWesEEJoKhrxuvZzP2zgaXG8TVAzfLg3FPdJFWW2V6ewL8z",
  "key32": "3NZS7wDd31yY3pB5jNLfZ31zvyAgLXAf9Z3cbRXi5Peo9YTSp82PSXkK7d6AK1JKS3V1QqL1AwF814RVLBprckXL",
  "key33": "2AsoG2kif3HEPhKqdjeTp6g3XEb9VvcM9wbuxcrRXuxRio8wb9WcyciXf6cbBg2gSuBaMjXFRZRxx24BkmDRLjwk",
  "key34": "SWvsFgKqbSPbX4MyKMWegDoGiNC7HYvPXU9dAB5WfBva7uHBHF5CcVFGDPQngXAW5XuemEvmFvVZV3KjJr6Eioy",
  "key35": "bLPzuigfP498mNctTFJ23T7zt59aVKscXzos84FTBhRFD4gs6UisqkHDV9wqLLFdEUZf4VvQS3o9MBoF1DSLAVn",
  "key36": "5ZTfRWT7T48mqmeQXMxCGqXRgDz1BYaQRrQ6M7e2TBaWfipDSkA1dXLEnCBR2DYb2p4MH7TXZucWeoptN7P1XnC3",
  "key37": "CT8xx9BshK1YmB8Bp1rQSopS3Tr6Lh3GpW6SbAesZfFTVF2mGoNADRfhgoDsjYy32dPF8bAMfHn2QZcnGYGx9mP",
  "key38": "y3w3KzbYoVY1KLiWoUrLXMRo77vUochgbZZMcuxSDfGwifk5whm1LJWofviG4fhjypCq7qdgC1NL3k1Jeuibd2R",
  "key39": "3qH1SWC7fhXbkazJ23yDhH1b6r1UU9xdShdRkFFjEGMhGjR6LEwzxrP4LH23rzpLk8iPELgYMmWdeJUADBTcmoaf",
  "key40": "2uKfQFVsjuuVTauZnH9VUGJrE4vkyWT765LJgPn6odiXToXJohV8FHNajC5EodncTQxRHtz9Ct412GUg9bc72agf",
  "key41": "255XNFcpoPH1GEBX5DTh8bZJW5BrX4z9JMJ5imUZgQEA2tchFniLi6gnyfZx47XY7ijMC59yhSdpLGJn37XQ4gUp",
  "key42": "eXjM7KsM42Svwek2wiUNVRvPT4AhLyL4EDwVrcSg8YCBfFicH5VGDwjy8JfLK77YuG28WjguBjqAafLhWoao4UW",
  "key43": "23FWFoj1HTNptEg1ZBqsD9BCw2uaHiEH7Wk1EgLXXHHTr3MKNy93ChAAAnsEaKzZ3Y2tyPRx1Eh4kWfpM3L8dTck"
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
