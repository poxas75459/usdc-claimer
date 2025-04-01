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
    "2dmbGt2ruoGaSyd5fCjkMUFmtwwhYmbBVCNNPS3RbdXijgaSc9nHKpDqsiQff7kQfun6dtoP2LpmWdPnr4U8ZiX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31tCqw9AqceRAojZM3SZwGVge4F9nVwACvwhgs3QWxXgYgH9JuCJFmMX2wTUmZm1GvoVEmnBgNmbeYprTYf44qj4",
  "key1": "3CVsFBVzvoxz8YAKjxX1XQWqkTAJvnggZBt8dFx1nitL8VUPyaDv1CGqgttPYz49nWyJcV5sZ3zwftPL5aAVRQwD",
  "key2": "5bYeQbutayP5NpSJ3rbyhEwjREKF11YjMBxaEjLHzZrMiZUcjM2upR76eeVA19aHtyRQ5txiTVhf9wu7JWbfvxyA",
  "key3": "31NjQfGHNK7pbQBACSdhFFsYzsyfPHxWf37ViNBAkigXvf6V2SxoSEMp3kwTKa7N4kdccRHzhu1Pn7HprtGPcsUD",
  "key4": "BoySfF11ZVqsCvv8xbohf9ouXxYBCmXFfgbSy1hkxZYYWT71FDTZs1PofRC5G4M3gWdWFVrCULo4CRTgLzb5amF",
  "key5": "WMAtTH6CdwEEYnF1upH3zeNQsK8pnLacbPS4Y69Av7dQh3UmbfhCYZJXo3NLsvUE6ZGKEZmwZY8Vc6WqPdVvKRY",
  "key6": "2WChmFAo6258Zijt5VrJPifLYbAQ3tkfAhWfiGDdKp554bKwA5hbjAHgZ44dVy4nJ1L7QZrZ5V7n7PCq46v64gVk",
  "key7": "2EfqQZ7pMRSAZSMY5oisvf2y3k5paQkbqRK8YkPVHmPeDTAvWnv3nhkiF21DLyGVV6xazebeSrG9i8iGzAVByBC6",
  "key8": "GX7gR69LiXJ6ZQwt8qJ26T9M9yadCw2qYEx7bzRbNgjCF7gLsLXMZpph12zqpQ14ykAcBRooVimg1wC6G8t8mKz",
  "key9": "KF9X9DAvmLkz4guhhmx6bJ39nVBZFA1vU897J6sKZXa3D18hni3Sx89w2YnSE3YLLjZFejy4dmuCJgnxppzxj3C",
  "key10": "cAVaN7vH3xBqppGMNQUB4YkGWysoXpqtGjYqpohEZR1UxxAyTgaGE9Nv7eQeUpkMUXPVEaiJk91j5QLy5Di7wFn",
  "key11": "26ENsLjhZp9XZpGGZdkXpyekMQfofNvHVPTurASkK3RRf8JdTLvnv53AmrgLFwLmCTpJfUCNdNN4adgDTncjP7cR",
  "key12": "3gm7RNGQ7VCQAWxjUDa3gDgF6ZHNeiD3x23fRHvCPndZwcKUAq8A6qtkZxatUwqMJbgwN6eL9uufNfFL6N5SUuk9",
  "key13": "CQmBktjPNKec3Jd1zYVKfkueAZ9uXRNKsfpFPGWebqZP2jSenMEu4JCwRdi3dCcgjojL81EocUZmZj7xB7G5By6",
  "key14": "66Bepy3R1YZ3yJkJ5xmPmXPshF7L2e7xspnsLQJ8n7DqKhEa1F5DkSA9FBEpWHSKAuMNLcjAq8asH4xs8bGv7BU7",
  "key15": "49JAARVWK2hL7jQBVRVhh63oh3rhjMCGJgXEzYXcx6kf3AuN6B7oKksJdmQFxchKmC8583zuRjirWcVstNMJ1cg3",
  "key16": "4RYo1evtc5zUfpytYxSWKPEzShpSeUmmD2ip9JzjfaYhhCgLzPSdYfz18HmHZDEaLCAt8c3x6C6Vw9mdSRiThfjQ",
  "key17": "4Lc6iAbQNYKfFnHs6K8gWLRiVZ2Arqs3AeQbQoUU4X2LRvLWiAQk4D7ShdPHaNoRULMNcdav93udXv46ZvjQy9uW",
  "key18": "3V8shnWi7QctPJsTMngvZcwRRU94eMJjuDhtVkLmRmYeTqE8HTowa4ekc69592txGGFR5YMySBxfr1jZPweTXfYh",
  "key19": "3n1YfupqEbPUsFp142vx1RBauoDNG27HV7WpUga9HpstEzqH6ToNjkYCfrbsgfodRjTqXZkdD1sFHWd4Pbqfm23x",
  "key20": "4znYihJ5bq9XySbuaudQKEDu1sAWgMRWR7d9gAPky9WwtSXPLUB7gJhAMwGbjM491AoPP82hoUfL3aR2vc7eAEYR",
  "key21": "5EVZGfyDuVUCfv5W6sWNNmbUDy41HDANTzqehy3MyMK6EwEF4ofSrrn2Kbxy2XysGGg467SE3Rq5UqehY6sLNJg1",
  "key22": "4ic9c4yEWqrzk9j8TgN7DxUG4TdDagQPSU5gikc3NGFpmQM2SdnRBKeC69bvgHtjcj2USLuhUr1eCxMv2XZqA8tQ",
  "key23": "ApLWtRh4JvfBsCgDeaLbnjyqvAPYhTTcN6obv7oA7K9AfTee46jXzydHj1RCjJsHoTfXMmAFkypYrQ1r9pJit41",
  "key24": "3cy5nirc1jimdk97gnWbHWWY5XyZwK6MVNoyhT8jf2pK8UG4Wz7CD4vixtkkbrr7d9BWWNAzxAbexiK34zNBZzrT",
  "key25": "zWqtTLWJGswf5mPfj36uFx6XErkKndwZwC6Sh9Mw8zYCui43K5dPhTzPSStaDZGbNV6e7u4YFhga3AYVWmSGYhQ",
  "key26": "5nx57hVE9yUidUd1aSw6Ep6wRzHq6grzXVq4c2HzWuGuwMkx4nS7PQVcLTRyCTbubkWyiFULFFXo2JDedtSnwyyV",
  "key27": "3sdr4kChHw9TgKT1R3i7id1vMNhvu1DWzGUCBA2YHSpKqQWhyX71feUD2Mg4WjDTTFUM9Eto1RZ5o15Bdj9uNHo3",
  "key28": "2Xb3CV5J6iByQgEZCBGvYCKLkt1zC5N88rnbCTsZoPLmpugrCpCbdQyYigBT4aJNGUJQeHQh8PyhyhipUPKZbgHh",
  "key29": "17f4GYfW11uo1MGgiSCpGqcWiFvj2aRsEfvuZKjJfGa7tWu5deEVXDyyXdorAVxqc86o5b1xcyoyHmdHosijaFc",
  "key30": "3vDQ1nnuBDmmoNodzCYdLGxTACbqQK9ki5BHpA2kiGbL9ZWWJsmKCNoRndnkzxNcn8pfNSCyJtVYrnQBbjJ6J5Vw",
  "key31": "2FJhPjhwnNEc7JfAdzU7YRu9YGdT7cNnmnm714drGv2o9qZJCLPokiNo5ot31yYLdY4o6PauBrGf9PuY9gHwGL2",
  "key32": "65KT6HTdudpW6PtZuVc2W5Dti2WkBQM35skZduuLzPne5oeQgXwT4TCHcb17znzv48AENaZUqwMgLcBc9E7hK1U2",
  "key33": "29vNPgNTETQoV27QuXysnGtrBgZvwjBgnSBhqd7FGbvnyxiN4fFjNPCHCHmQ4i5h9Mxd4VzBsLzMubHTFCGXTT5b",
  "key34": "3tRLKud9mjhBhFm49M9rTCQFwDiEM2g2swrKaK153hqFWQGc7fiY2Qk1D4ke9jCyN22jzi7ViwRwsYJPfA2Wafs5",
  "key35": "2RSeNzMv8vi429YtqARxRtJ7FVKv5AngJqmbzRZz9FY9CcMqW8kqyXnNMgCbDG567nqjo1ePP333owpny4Kpwde6",
  "key36": "1oQR7nrdE8qof8dxV9aBae3jfcZtDJ8HSAYZFh6v3ivrF1LeutYG3LFWa9DNx5xYSDD4DBbkuFh8KuaHTWA3cRh"
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
