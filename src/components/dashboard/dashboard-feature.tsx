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
    "mzLUHeyBN9cRZZX9Uu2BZ2WFjMge6cDeCzb8vDh9dde6FctUvvJqmH1hCi7paNseAyPhRn9XaEmefoZbhiJCciQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JGdn3oG4dyake9DJ3NTmaa9Y9UmpJkVcjRe1siRC53KahUooYWoDf6sQtcx7KuNMW3koQsDdqqXhw9bzDE4VzMa",
  "key1": "4UDLqT6QMzziG6P8mx37tTEZ1y9zN5RLczu1QtCM8tizyJ2K9csnH6mPYVfw42GvZM1AAzfRC6GC9BQ8rV6M359H",
  "key2": "3CNMKBa7B5YCkbbH7tumnQcibEpCBoXAEgBE9AQKN2uhi9KkoRNRtEJSyLfyUpSE4ey8Xmd19TxVBZR42dxf6yQa",
  "key3": "31VKiLH2wPrMyip2qj14GNqbPhffQ2cLkzY3pgr7JGeh7CEgS7MRXcBtpvRmoG7ubFohvh8tFC7rCt7aiXShVU7H",
  "key4": "Um5wZPQ2sV5HQU8E3Pirsi6wYbM8FFmRjQidA9Jfy4KR8WaBMwzmcg2vGbFvMSdaM529o1UUez1oi6jBk7mCh7y",
  "key5": "4GdhZ3GHQkZ7m7EJYPoH1orqjPtUBYinL2ff2RTrt2UBBAZgc3JCxDf2SSGoprUc9VEXT5NtPySX6M4kXXwHK5EE",
  "key6": "5CGhZwcx5i4ggqUuQbSpdW8SDetreT7gt2sbRgYbTqZpPWqAq73bbvPaZFJvhEgwRSF4XP9AmodLMPhh8gtVmNmN",
  "key7": "5MCwSMajz3fWjwCvpN3WCqqSjQTTkndhXyX2WbcV9PqTM5fQyQJAahoQaeNJZsmEtjmNudDSgpCx9b5MWQDWoAhB",
  "key8": "4gDUd8rPZgvTMPycDw5nPdtPK2nRRfxN2XBX9wJhdft7AnGW1mktB6NHYgAN7WAek1HD8u554oPpDBYQVkqFQwkz",
  "key9": "2Q1Y7hdaNsqRTHZ744ELoymqEkHgmMwwR7PF4BzciLFT6E6bxjPeRx5ZuyJ1oov82Lk6cNHB9x7Yjs6tgQirvHYJ",
  "key10": "28Bj1KiqsGVFwSEiohRuQLDZnPeVZhDfJ8jgi5Z8GGJC3wdHcQE4aK2CqXVvRKaEe17Vo3ve4mhNpjx9oGACVs8C",
  "key11": "5yVL3VUuT1Yu4eWQWKYb24W5CU99aAeawUVaVJxZ68CvNEWL33kHfxRPrFfhDTGt8AQBL2oGEXXag6WTr51vSvMv",
  "key12": "5PctE91dhwoAH56ZsmGzEJyMLRbrMsYdwTnCBJrKLERVEMQxtdRADoUTLhfTfQmTR1LDKWbgJA1QUpwRAUUeQfDw",
  "key13": "4iXDZnRYXgyLbFGLiFh81iHMR9kmk7HbxhRj1qqGcU7ba6uMRvaQGPAubf6zEwdNp4gfaHHvzAiu2ztnvsQDBek4",
  "key14": "5qZcgxeJnd3tbswNARs2mukQVzDC9VUWpZzN85pRfJdsGhiC7v5unoXPnqJQWPByDDt2oMf2mGdYKfiDHvgSf5j1",
  "key15": "ovgfGJRwJrwv5zEczdGpXvgVDB6L7ZznRysmYQ636fGkGQkAM2FfK2G6nVkKgnE3F4XHQHbVdkbhggvkAd7bUTo",
  "key16": "2tb4LNxyJ5WL4RxRK2EcmmYX5wZ46Nn4b75My2YtNm52CHHjkQJWqiXTSjTRfrQmTC8yteoFWuJLaYeEw8pgdiP9",
  "key17": "3suj6rgt8Krq3GPvqzgq6Vsf6fffvSZw8fJQVmQ4YMgCb6SrTb1SWHvSyHVhy4k4b93yWURJ6r8CBHEJodFu4nid",
  "key18": "2NLUwBkt31cJaquJ9vaLFUwwPy7T1R87WWTV3N75qQKr8reyzrRWc7xKzj2cTuUzbiEJdUW8SQnT9TrDMCGJHz5u",
  "key19": "5gB2p8iZDbEbVF7AZZvzfGVRVck1zhSRhYvnmhCXdEGVZFqmAuqb7PcAeFuS66zQNuCnWGjitPUhLkszwB2JxCSW",
  "key20": "4418b998pf2PUSo17YeJnL7dEQMtheaH3fdfh1Cxdodi2F1HpLJJwJUrtAbz4F4GGergqrVyGoFZT2H3bKzkFgHU",
  "key21": "32a7c6pTocTj5GYRyHviU2GnZKUcvX4JSy41N2geEdebnecTLg67xpiqfgM4eTAZadx1b5Zbo11VZWrHiekmFky3",
  "key22": "5hhmVo3hfoCMyR8yHcKqAGWL7yqVfZyfKXvgAcapqf1gAfN3vdxiiYwbyjhmAm2SSUXp5PGoQZufpByome2TMCXJ",
  "key23": "3NQ3gimZgXXBohiWMJzHJJpSjED7FcJuriVV8XR9zyEkgKbkckkDdPAuJqX4odGudj3uRtLnrwVUcxyNKWe12Enh",
  "key24": "dUiRu7Gsjf6jgvVUy3qHUHN5fcNyH3NFAkLym5dyHipHb7SVSf6e15Fn8zh9CTAXDnxeN7FNsSDYG7vS2ZdjfVi",
  "key25": "53rosWKGuVXxtTX5BNs1EU2yswfgQ4QYZmYwgNJ6Q3XrQ71Wf23p1LmZJNLMJ63aHDrEn5acpKisfJfZnjnw9myF",
  "key26": "5URbxurpC7woPhgfQm5DFxEufcgScQwkE26yKExCGKgNckU8AiYZ8C5w9Wmq4idbrTFJNi5Ax6bvXYU4CEgFue5u",
  "key27": "512b8UB98VrVqzayNAtApqq9LsNxAZqTbBDMBas82f5xXE8MH4hokYwPazfTXzsp3bTHuSbsaz49pmRu1GVfrY8n",
  "key28": "3YzDNJzPYBqpn5ZzRktU6uLnGLj3pnyCbs6qY7PzEZSUsKnajkyhUpooBMjoRpDfFESFPFQ54cmDpCmW7DJW2Suz",
  "key29": "2HPXvUn4GSFn4cxM5qZtSJfYMMQjdSxxArqtZxo8S5vRfUedjEhMWqitse2xpqNJn2xFwnbR6N6cDvPAuUGgLugv",
  "key30": "5wpNJT2q5PbtBPctHwBxE9V7zoBjwwi7LbJtSdrJGHXVdP5qmk5oAWuz4ivKPZSYBwqEudUdxQUjZVwstTfaFcpU",
  "key31": "VFBxXxpQAhaD2C2iZb7vGzbJcQoikNNNLPLVzRprYuYXDD4DxaagrtaQqoWfVPJT6Rp1wVWadd9YecfqnLkxfYP",
  "key32": "2sjRdEBhRzKoDqCCFgRkaaGPaY6ZGfHPk3YpN5piYfBPr1Qy45KmSSb5vJTVWR3nFUg3AvN4qNrZaXQtK7XVHPs4",
  "key33": "WzL77ZPRhtQnBroPrDntVPLK7T3ikTJS1MXm6iP2an9EcikJsh9JdXcPGkHvc5GbshRxcmSzuiUkDmQWQ9CLHBS",
  "key34": "wjzUMMk7JUckeQKdXpN89speFUdS3XQajFNaGXwWnVyvR8C7wMAu1YYDfLa18oAo7MJCzVxiU51idMLk2tv1ph3",
  "key35": "4abCSTCoBU9bUMtvPbgTQAoV7rHYNA76ajn62zW8PDbWXkFbpTDdZgaTgMeyDSKRMaa3gakxocroYG8QckcYcwnU",
  "key36": "3yBxTAVseGHVbqNnFPHH2vN6xq6S9AV5XnMadY7aKSeKLvn4Bz6taqEzmqXgAnzALqKxHUxpSTLpGhrAFWpYewUL",
  "key37": "2TaSvyCACdZgxMsJwBpXgL6Zok12mct2tVRGDiuP4FFiPJEiWRmty4CjWVNio39Cv8n9KFDdH7JWoLj5v3UiMmXa",
  "key38": "5wH1eewFpN1eJTfDtnXc5J7JsY9vm1JgQrYVbUGa7Cg2DGbTnTjtG2aDTBEQXJ5vPfS8UXBvozGvzPWubDsWPWHP",
  "key39": "4Ru9q3355L4CtQWNEpNo39rSJWJAWVFUKPBBBoAzpHMRjEByi9yzMDwQSzYyTci4hAJrFMR1dQL1B1VBEWegWjnU",
  "key40": "289tz55bHDjCh22nrrLtn5D79EkKvDADgMdEfWnyV2MbBpXCJwH16Zqe1DfnQYpGyVTNCS63oCp9gS8ryW8UEoP8",
  "key41": "3pKfUKFpHzZehsD5X4WpdUZTjmBJ2oX3DCXmjM9ARu6ydCZr1gMmQm4jzxCVKehxvGnmXdr6jadJinzY5iEP8zx",
  "key42": "2kbaNwhZJPhHc7JK9ZstZfQTv3N8sPeqphVrqbjfknUPHk8kZpkeZCxnam6Pqkemtr4DwRhDKxPh7KEEz9mb4YyP",
  "key43": "3WHonze6qcL6XTKd5zEkDjnfT9x77hxdDDmMsqdADS1UC1EhQNVWJFyUD75vWWiJ4vMwpKmWVA6qzPRun82mw1Tk",
  "key44": "4y7L67YWyvqPm69s6jZHc7Whj7DZu2o3Kfd9vUXZ73GuC3ZiWDq3sAFr1RdaGNhUBPDjDrSYtqrDVw5yuhbMnvDf",
  "key45": "3QaGAvz9ZbPk6ZF1ijMbgpvnq6DJEPDXYhVi5eQDBxRe5L5rRJrZL2RjUMnX5E42ME4cgRKiS1qof2TUysY9YzKB",
  "key46": "3revXer4NegR32X7cmyH1k1oLbNPWAvmBFkMoRGcq72tHExtdLNYnaw1fsZzU2poWDgsH5rNK2iFEdiLg4wvotG4",
  "key47": "HK7ANbueN83ExTXsKcYtGtcEbrUm311mY2vbZ3Yt63WHh4MrM88scTLhF4Nm6YDTckmfiKpR6bD4cpXzz8yWX3e",
  "key48": "8gZfaZxmwKYJmf1kTVrsKQAZKFo1QqRLnS81hDq4jjKrJGaRtUR7CktKUCuqJkeX3qAQuTUfMx9AjQCgnZrUDJo"
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
