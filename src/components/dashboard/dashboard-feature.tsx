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
    "tRNbFFgvutoiCb4zPgcyWMooTrqZEHZMHzm8dNuKhsWvaaE9xK4ieZLPRkyqxKmgNqXoQCui9DQz7JbVajWKNeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iA5Q8ZpfW4XbDTPyamSvuSfNYAb78LcpKkyqM9wb8YKBbTfYvG6R494WAXJrnPMwbUPHXDKB1FFbYPS2o1Pkbdx",
  "key1": "3yyuQMJ9cZCR3pXss1YUPrfm8d35KzUaguGapJRqk3WAS81jgHBc92itd5wegegHeph5Gq7LSSWZY7kZSf3qWGaN",
  "key2": "51sAaDZYTXz8dz1S22nbXgu4mzUyqEybrP5Hj5b2RH1571eqpvmSVrfUkN615sVU3MAEieM4mfyFbseKeUQuQvU8",
  "key3": "57NtUwiM7uMkei6jzhx6A7FJRw8X7QRCeUXxqKYoHh9U41rRikq4dFXRBhGuQmy29xRMXx8FygnoBxEHhKTU8Gsi",
  "key4": "hir4mHGeYcNXFXbJxyMLGmBuzxmsquM1vsGR6L9RDJsHkEAD9YbciFhV8rH3JVudKZQ5bjsZxkc3HSiyrARRaoS",
  "key5": "4Xx3VXei7q6SvMn6sAxAn7BdSNZKGHUCD4tG9hkRxv2oc5tjtdknsPAMmYLbm2mGTMLitUscKur235enmHECin25",
  "key6": "2CHH9uphttu5mAK9ZDuaZkjyKd5rASmndvzdWdtuoc1gyjbdC8fTxEVWMRfM8Gu9fDGWMDygRwyJFKyr8omX9EGy",
  "key7": "5F3N2LeLM14e3oU93mAJy5Jm9fsuu8VeNGwsF6wMUr3M2PngNKqSvZr7P4nMWj5XBkQ98f2aYXN57bUiKAMm2SdU",
  "key8": "W6LxFq2ERHyJB4dy6gFtuKYfSKT8NBeJyWGkhs8nTzmdypB58CgZDK5TxH95m9m7En6bmgZnPyHLjEp3CR3G8Ze",
  "key9": "3pvjSUvTYR1kuwzZbBu7zFxpmxMvHMhz5Lvt5BiCXNVfXk2dEw969znrCnrPzCHvLXJ7FoRZA7iCFkCkSnF1h5u7",
  "key10": "33PotT6ABEws61e3cgHyyxVoWBRVc9xYfAYS7wF2FLEP18Dhrs3R7RURmMUJ8qKuZxxW3t8atHaE2eThLimAjfE8",
  "key11": "2bZhxdpJ3kkAJ75AXG6uMTTYfaBdGfbPGozvCUb4HhimmvmZLk6JcWm9UmkDLy68oCU8RNMXQHbdkYDNktBYxNyZ",
  "key12": "aLt3fji8xpSZ2Bd69BsgXBKMreePG3NaznH2ELFjVqarbKP8aTXFj8aCwRSQBibU6zcmw1nWztJ7n4ePLSHQjFu",
  "key13": "4dYnpBNgmgvfpa3kTQhv2vG5NK4ENxFP5yavCYhZcEVt4GV2C6W1CSnzbCTaEuS2zMMKLdD4z9krqqoFGHh4TbPa",
  "key14": "2ggHntSP8KX4yy5yjoZ65LLWNzmzGpHnv16qRqjPeqZnj7tS2bGkthf2jHqXb77DMihidFrnFzfBF7aigYbEjzw2",
  "key15": "5B1pgbYF62S2PW4UeJc1VDFGKLBJ16W93yxgV8TBtVZopWsJa9swPtDGYWEESkEuqqtXqkomXxKGnaojTrb723Lc",
  "key16": "3ANCSxBqCfyHfJewQryXk5oFKCXcymRYPno5S7dvtbvo1iqQWsXYQ8dFJMBoLF3TDJoS6EjWUphHS9UQYXzRaQ8y",
  "key17": "62CX52Fmt3zVbwv5A6EFo9EmE91fU5PB5g4jX6qqu5eoXiSZaSG2CwwQ1Xmke1npD2tUfPqhUFaXsZVFRuFyUR5B",
  "key18": "5stTsaBwVHW7AKbuFmpFgkjC8AbJofwwCdokbp2xGJKHZd1oQyCAaHKphHWhBrehXx3bof9ESpYd3iSZvQDMq1Fy",
  "key19": "3QyNUC644vveAchH6zEZcDZm7QWyhCxpvzeXXQo2aKwjpgkGaATCeCMjTaWdyg1HRU1fEUZuZGdmVoeN6v6zwysm",
  "key20": "3w3q1Kejr4WQNVGmZtFnJaPoCr2AfN1HhcFvWSY1k9QBMr3uQ2NfUorgMNAftxER98XaWQMuZgKBwUaityxQ6Vwi",
  "key21": "3rTb9hi7Y7AX7YEbDVQ11iHu1kQy86CtRj9qF46cdtA1wrX4dJ9di55M1kYF5jx4Bb31q3B6ntEjmeykuasBYUcg",
  "key22": "5UPHJk6MNLr8Botbpj7CKd3vgCCC15msCFo7AsvRJpMFBKyZKowNGUUjMnpNumJUaDpkL9VPQGyK3aeY5NHACMXd",
  "key23": "3QpXphU4NFtB6pV7UTeqZAHpvvL97oRFbJRf2uoq4NADUq3Koe8w6Y2RguPHbp4D6SJKZL5SgzSpVAHDWR8n36v7",
  "key24": "Aa8Mm6SZRJFWLwHCTWojvTvP3yuaGL9uAMkTUejXMticew6Vs5dpLVwtaJK9DPWs8qSLHFr1K3KUgry4SugYrxw",
  "key25": "5QVRf97iH6PiCCs1as2GNWbX2SL3iBEWJjxEAiiiHzxoVVRUE4hyfH2iYTu55MD7SAjSJJAHQb1J3EKuiDvG3EPM",
  "key26": "3yYdaPb9E7qxpM3ptGhFDyAVz6XDMMG9SVjW3GDfXspHTFDVmbQpjPrAHFNjTzi7xadjX2pYwvR8DoRYxQGrYo3A",
  "key27": "4jfet1hc8QJL1m5tbAtQRWysBczzwTGYHyzp4kNpBvfDcRd2Zf9eYmsfbrVqbXGMPLWp5hKsojRkHokcFDHXkfnK",
  "key28": "Myzz1mXVQP5KL6kXxYLjA1CSXXiCgKoD1s4cK5jpp9LZ53iLY8w5cW4VTUB51oE3GxQ5GBXZrPzjRTXwYj81xTn",
  "key29": "3Zo8RBSRQCzAhXJ9xpCrLdHfxVc9p7JN7PbFX2zAFQNE9t1xi9guDasEaj7gbAfK6QbBzAJ4JLAGGDhGHjNLrBZP",
  "key30": "63RmUnudfxxqUeHhQrzQrXCxL81NxwKRBurR19PXARzJEstdmzsPHNv3h99wKDonEL29VXU7z1N6ch7uDWVLB6MF",
  "key31": "2YLkfeH1AKas1s5ohtbPBDP6S6YN9mAcMw3KWYQBpE9c3DmPC4aMySZjkEfhNsTjdKtxpJ2TJ3879kbFK1y3ognE",
  "key32": "3DCuS8dGfbeYgVy4mJ7yYLMFwHSswkwUvC3HgC9VztP28fsTH76n4ihXV5Myb6Xuq7giJbE4E2Vb8iiHeHg4YgzG",
  "key33": "2xCnw3koT4dfAu7qccCdtgArKqMYwJxNaTCok9xUu2qFRL71UbyiPRgCG6sSHgdub48aGHBqPij76DnKQsR3NLLf",
  "key34": "5Y13LLYGLVLsyFvusMLrkQDFzzwugEZ2uF1zL6dGPqUCmAUm6CnJQ3AFyo8A5Qw3umkHLHbQufPCs7swZ8v7UG3W",
  "key35": "3JkGj9Z4DZzKZ1xcyg63LRayKWoQ6HKicfu3iKeeW9awujBeKmutqYW27s5kQK6ysnCDWbBJd7cQ8SFZdhr4bdyq",
  "key36": "24cdczr1Embo4vXeTji8cRMEcwma3aKNtp8xR6e1tCqPC29JkitV1utyuBu1Zip3GCF4xeSbo1e6yF7GviMDcHrd",
  "key37": "3yBGEQNjA1vUm5P5ps6gSQ4zYWx9n6PahVuBjhQsnEhk6iJaCJKhzNr3ydt3o7pHJZQb4nVTRmLiAecELwmdFgcG",
  "key38": "4ANNNvu4GoJAELnK4f9zCnjq3NJn3jjbPxF8LSbGzMum4evkaiGB9H2rwzso9qbfiASh5FFXvADius2WYkg1dwSU",
  "key39": "4bsfg4SyQMMrniydEK3bWMgZnGgUw9FP4RxVDRFtEaDzpAvZbbcdeXC82N7tX1c8gwqpmooJPKeYU4FN1couaBMT",
  "key40": "4mQXwDMbwyzmoxA3x7CNo38qnPzibmMF8VvRfxUyBiad2f2DqT7MkMaUdcUSSkDSvz4EShSPLc6UkP2BWR3ZMdY6",
  "key41": "24JpVqEzTemaQx6EER9mbdTXtr1ru9Mv5ow5aPnF5JfSerRi6SLsXQhLpXU5JpquXKinskLE52gg5ZnNzpJqSdpr",
  "key42": "5mXYf2CM6BpXhWKhu56ffAbEu1WovnoMPAoFsWvmYyweFVmuECVWbJUSXL3DKsNJK9xE3Q1cH2auf3niUW9znbfZ",
  "key43": "3UpwNoJxZx4icf6Ukkn5wzGJYgUxe9V1F1StCp3x3sVM6dZA6cVTo5ZDmsC8DtJ5SCUyVrK7aKHDZzxime4dkqmG",
  "key44": "aqRPjAW3rtgNLFJsAcrYoZx5TCbRJhq4M4d1xck5xx1NEPwFBUitzwUw3ppK3UQdZo3mvo9dPntboSrbTwUenvk",
  "key45": "3MoK5FY14X9f6CGfkoveEJhLB8yXWSYCBcLbkt6LmCKP5B152NsqGFXDV5Y3npQSpmcoBw2AN1dfvPfumco1ZtRw",
  "key46": "3XcvuoMag7GFFBhtLfL5noTZcyKuuwDp2fgqmFd548BQCYvBBXxGtdwrCiNVF9nJRNGgvdGBnVyFqE3VTNum7ems",
  "key47": "5A1xeUSqnZpESG3xnZBmD8zwubjqwYv1iWvEiBUjRCGs4je1hvGUW4PsFpxUHmesT4xCPjkieunH4jz7bDgDDMQ3"
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
