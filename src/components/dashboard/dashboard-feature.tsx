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
    "4UG6NQDR9Vdd9hC1JFRju5gZRYe7mo1eSrkgmBUjUuvXySQmKx4zP83yEqa5Spj2X9mAJMKq7xXnnAi9k4ZYBdcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QsZtgBztBBHqwVf3DBGkiWrm1U4Yw6azSFxq2gQonuukfss6f6wGqHtrMfakrmt8tmZv2wYuHWpFCesSAAkfezD",
  "key1": "eBGigrpqQ8xjwP47N7KNDY6ucvB79kMELFeRCqx6tsuUgXjmBeCHCWymshYyMKfEXQQgcQs5bQJSvoJEiXHukvU",
  "key2": "57KViEBNeTrw5KhtVmVAqEg49QVihkQnWEA84U4g4MmypsTMpEAf1fs25CMuEZBrUC9u8AGqj3RpfandcXJMYRTc",
  "key3": "3puPCXFR5rhnY3tQETLnoa4vZnJo6ggbjQ1cH6vPQgWK3iaUAEvwVMNgadCKvuRhf8LWzAShqy4mFkmyC9qSckjf",
  "key4": "33Whzjjt4asGPBcwxDKo6f4FU7YoaVAWpLD5STkUFnPoNQTweAiWnYvkGhQwYXPTqYpeFYbXeNkicuTB7N9Y7rPY",
  "key5": "kx9z1cd5x8ABashWDua6hscStRTJZMBBTVoWdEmd2y3QSR2hhTXRus5ohxQpVUDEM7t77iqfF1Tt98vmdtWUCFd",
  "key6": "3jYpxuYqpXGqeZB8a86swsKEPE88ydT3vVGeiZ2wuxnJ2tJPmqi74TpSKv5MwNjbopxzEEBEG54KvSRiBUuD34P3",
  "key7": "DFLfw5aWrmaZdgyNhtd9Q1aAccJtCdTuFUsxS2Mw97sPER2RrZBv8gu2GkC97beAbA9n8AxjAAWbE1KJkfC5MfK",
  "key8": "KDuDC7DSEA3QpJ4hBs28Vg5DiWQwEvFnHGcCaG6H4bW68yfWcVY6SwC8G3ZRFSVVALJAY6VK7W6t1H1MLMTs6ET",
  "key9": "2BXrP9jigcjoyXXkveddtTG18kutmFxcPWE7MdaNzUvkbm9hjrwGQg9b8jRtCmqvTs6uFaq7pb5jm3Ywv7QjFtgi",
  "key10": "2cF9QB9gqZRcEaqjbZ2HoR3nF98hqAyHpgqdKMvPynKheLTuBKwwdJ2DvTQjCYoSCP9CDSmSWG9k98Qpayh1v4BT",
  "key11": "MKdouTqgzoYBJWRGnm1VYKnzE9L1U95Hpo7sgxMRjKZ4oAr5LxFgM4tiMJrhSo7PnpN5TutkXzabtnVscXP1WWX",
  "key12": "5iMvkYDhozUKdZGFL9Hu8qfsh4vRaKCBm5Pzro9vTbUwjGc8sKiMNLjf7od1fAn6oiPi752XUJAsi72662vZxLu5",
  "key13": "2srh2TfaNqPps9nyjoGbP6AqySvPT2zCLTCXRJwBFKyUwEV5Koo71p1WBHenmBcF3EqXfkEpFGmFxdH5UhGLQA5M",
  "key14": "3WUHEBJKge11oYJ2EyzhVKvXmHw7XU2nhzNmzkJAkfMg2aPAESvGHXuAYD6TKPstxW4XziR9apAZpceignhPw9UY",
  "key15": "4VjbqYMZNot3b2XMepGxMePZXnzKymcAZSPfCTGRVrV8Yfkfy6xpDEhpwBXoaxkPgGM9GoE9rawhQyr9Gy4pAXKD",
  "key16": "rnB4SUGoXrXje85XUqhNnUBznvHMH3bE4ppUz7wK9V6mhhp4FhtMHDHoy9MUyd7Yo2MYp9VK9cbwuUN5dHxwv2M",
  "key17": "4QsVKEVzjPqLGSMUxv3HZajRhqudoVP47wooYNyjmMHsCKDSCWn4hq6j8tF1mMg3MTbYYxGfRF2qYhpEuSfQisor",
  "key18": "5RM29e9dWn6fSaxTgtMYzpN9vdm2dqma1TP9rZe9nyHNiLhse4QDowMGJrp1C9sgaR5rK4uo1Ag8EQ9fFGPx4nWw",
  "key19": "38YhAPHZbTRec4AdxYidLBZ8Y2KfAhMpgBs74563W1Y9rMMp9vC33ETYXBfeoGsXZohZwRRoAw1Zja1TwS5RB7p4",
  "key20": "J9chsy9cmmGfcqVsVQLnT5pzQKFikVwMWYbidsqeEmKZ9YiohAy3kJBrd53tE26mCg4daYyQFHtuqYMSERzQwAc",
  "key21": "4XA9nvirnrsjbjEEauTvUPDoQfxVjv1coyPvANZLffWvh8TA24Ai2rNCsuWo3gjcE4TCLBj5tYD681B45DkxQKVh",
  "key22": "SV7zWfSwaNwHFz1oL88m34msuPp4RP3XU3u4Nd7JkAwzLpNsHm9caLH4sPLhBPD6wGDUEdGAbQUMMUFv8pcyj2M",
  "key23": "42viw844my4Sg1pT9xUpSEt5dvB93HUDpUbE6nNghG4i3Jq1TrYVL5mAKqtvBwYwwwAZzJ3HsSbuVMD4uAidRr8b",
  "key24": "3mttHcdHzLWf2sQS5EUtFhjk3xqo1t5KP6RMwHN99Ug8fdJXsFFd4M6JncRp3ukcvVQRA3tNxDrhwo6EmhS3zCfu",
  "key25": "4J8VKxqKqs4Mm2721mx9SJHhxZhEHB2WZt3gPU3tL9uxjHkCWSkqFhoq65KLRNpmZyyPTq4oYDpV3awv5uUVCFjs",
  "key26": "4in427nLCUUnLoFCFj8eYzL835nKxQ9hBQCW5h1u74nXtX4oA7tkAWquvLky1idGfKzUCrBDPv6m3JQaqjLhRKeb",
  "key27": "4DnKED9KigrrZY7qKccjHTR3HxwrgihbbNTxWrALMHfSZ1bNEewx7Fjy3V98sd92gg5jQqpxnxi1EMjB6fVEWssf",
  "key28": "2aq3juJ5vSFqgmVXHSWo3zm8k3EZGA24yiE6txXZTV3wktBHDPoqscE96Uapz5tDe6zsg8m5WnDLEbbiME1c3Bzf",
  "key29": "4vtj19PMVBsLzihmEbxTe1NDRwWtSKmRJCEM4iZEgF2Yoa1va5hAD9y5Rdymwo6Xy1KuV2hsbrs9tvSZdJ1GL1JY",
  "key30": "35epEu1TuzYQqGLt6fgVRLFyDJxLBMqLc9fJk7PYUXjxvkfhi3xJdQ9XBQqqJKAu81YU35V5tV9x5vDqPErra6s7",
  "key31": "23NZkJBNf947r1ag6jRFsEgwMG6iJqcMbgGoaQzcLRU329Y7hdPozKP6feRpUWeuQCfMLfwwZqgRVkgrbbsaGQjN",
  "key32": "3P9fs273xUrgWx7g6N9kKB1qSsjY7CWZ1ur3zDtbrymWpApwxiSvgjDEzjdxo7KWjGqW4WUENERt7dxQVQFmuTXT",
  "key33": "5PkNrK1EJp3WvxYh9a5zb9ntVzf8L6fcGHKTvKZPh4hv5hCborM1EHCWbbiYeVr3rxqkjjuxDMXq86c8qknkZVS4",
  "key34": "4uj1jbzuf9xBWCPonz6zG6qDrtwf2sGGzErkxvPLn19nXtX7yfyCoho5h4hHsp5VY7YV1qXcZTGn8G41pEekadr6",
  "key35": "35jaHqq1eMFmSqhL5aSyiLbEu67gp9BXMHPaWDorPq7gMDyYQvQx8wkCF4NUDhFvGibYzcZ3AZ34J8hPEwHdWP1A",
  "key36": "3NVCc33nZY173rJWoApURGBDhmC6fze2Kcqp9tTdSpxNuXgBSEFf9vQPDKP3kNnwPDQ9sC17ScfoCSNJ3p9P2n6M",
  "key37": "3ooWakHpokxLMvRCKHUJ83iiZi3auM5v9dDBdi34fmbCXuyHWMB9peeFWTjTRXqkyyZxzkXYnviiqLPTRAsAqidZ",
  "key38": "4RnmPXBHUR3941KyVtaB6MFs1pSLY6qBw4gCxSFeE57KnQagWXXyvzt9GTCugXZioFUJakjy2Qk2egAHNTzAz3Uc",
  "key39": "5H4xUpFMvFdstuM9atSgXsPvTmspy35or7773WGRJy7Mb8Axe1H8EPCzx6din2g4o25LQNWnnwFwi8GbtsZN75Af",
  "key40": "21xgBDJwAYem1MekNPH1iiPptGra8boNPWeoE6u6D2kDWWHf4AmZs1jgRa9uRhKTtpDLYo13NK2NwKj3HxNZoVfF",
  "key41": "FH69vVzGc4BM5FU5xxCyeEkYcgAS8PbfyVXwPiUy7DRiLCMhcPeiiGCp7eJ9FDdcjxLvatfPhrXjgNEZeSGYTpA",
  "key42": "4nZqdvUVdxuAGBHqLdyoJTAxh6mAZJAJ8nQLiM3JGGmLekUdPrfdCPa8fUHyeooqDZH52aP44xxMFRX2TCTUuPFk"
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
