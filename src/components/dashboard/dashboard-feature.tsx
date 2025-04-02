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
    "2YbFCsjWw1xXpbPMtcJq3UvM2SRsnCD6Ng5yEfnhzUMH4SdJWEd7nWXxMJDTTKkHyyGw5CmtUMVksUh2DqQ7AR1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F19C6MDRp82WPFfn7PndUqqrsEiYi3VuDDHruPs8QH6bAgU1zLzkKrP5tTA6jFos92RQh3zb22LE23GTr9KUTfD",
  "key1": "nVbJNjD1BcfvBXx7rxw4YAsHvADEN9S1zegbdBFHFVYnoMtwkun7c67fFJbepndF8wpjFfP1HjkKzLqF8A47qoa",
  "key2": "2L3o3YYjEJwjsSThScz1Xip8uyHEFBJqakzEX2VeNRRNf48hP2H2jb2hp7ZQh6ydmoRoUvkpigmmsD5QP4v2JSBF",
  "key3": "46ff8gqsbXMvRPczKpXGDRjFk9GHRUjcXgLPdumjWrzbBKD328e33npM6yvdJLr5ZyUyHgsk9pQvVNer4eSooLLJ",
  "key4": "Yum8JWtVTemrjjrspdYuxXwoSP8X17m43Gcoouvw9usmmAdkp6jh9DYVpcZrs8WAMoEoJWLrWrRNqBXkhdV2HaF",
  "key5": "PvfeRU1A3eMsoQT5DAjfraHFAr2r7R8JYqTLDcYUd9ZWjGeEXP7hY4jqzV1yCTBiqvmJCZ3qPSxcYXPyC8RCtxC",
  "key6": "2o8NTEnRJwwYWNDZbufDQihAXV6bTpJGbBthqMFWDAcxaWb4Pwueip3tsL8UiSrJb2CeEdrWaY4ahH4CeZtjKKVD",
  "key7": "2Vn6H21Z9z2SRJxovEpwRjNCiGqNyRm69nNY2pp9GXZQEh8rJ66prtDGqF8uGwANYwBwPDwV9PwJKXLWdanUm143",
  "key8": "3C2JnMhERjW9MrXuDkTPuELPwBwE5cb9qYrBazUZZBYBeK2edpiCCfAJ941AHP27nf8fAdnCsT4xAKbxFiKu2UYo",
  "key9": "2HWWp9LLQ1N1nP1w2721BapZwEAve1KwUDJYvPjmMi5WjyAgiWAAP9LVCF2iboF5FPUuE1dJATjUoBoMFwKzSKHV",
  "key10": "411b3bJAvTND4shYmv4TeErXibatcDNrXXm5XQ4KFeVqH1FaHohouuZcYBytwje4sBpVzze6DZnEuScbYf6cM59g",
  "key11": "EEmSxLkSqY4SUNbKsXneV1ctcmrUzf4WsZjNwU683XCFhSL6v5kvLrzyT3atibaRdwtCJWCRJ2tsHWN6T26eUbM",
  "key12": "2y3hyTJfwkfAyzBmz9pjPE2cXAbUEcTEtNyqWs9KDJgt3uGgSLzjkLc595WszKYCWgEQZYWWjFZS4YRoYbeiwRAQ",
  "key13": "g6yoNyBJskNjxyVWKWrmxWks9hxnnnzuVUKkNSXNukBibpurGWbF47eAxoARwhs98BjgswDWGscaRBj81DQVJdP",
  "key14": "5fN9Xw797tjYdVj4eqnLAxQbNHXvPWScca5cCVbyjzR7b4xnRSvV7o5KytREaLZbNDzKeuJYh9iAdQ73PYbRB3sy",
  "key15": "5SXrd1ycmuGhaUPZc64GEFKepZTD9YXhAqgZetWj42ExgYoHJyEfApGoMUit3rYM4Pix1HUMjcyPLk4JHxt9KEKN",
  "key16": "2RHB8DM66fjyLva8v43aKvmKZPzgUo1FBvnL564SsHNQSgygMavvpbJYLGMoeF9QrqSfjasLm3EGaxCgo8jK6kfp",
  "key17": "5uAY79wCWo9s4jBu2xWUgk6fLQBdarqyGGtfKufa15NeEck42Uf85esCi5dmw2gG8nDDaNQFtGrk8TryPEFqAMa9",
  "key18": "55ECgfn77EEgq4UGEW31h9SrHuPxW3tNd4wxRdxJGG9a221xodQY3dkdVo2wNZbzh83kUmsjhM18PkBgnMYtECHY",
  "key19": "5yz8NWpuoDyVZBX7KKYBsJhQU74fkdae4pYx1EbecpuL9pLWgHyxYwiCebpnMnzCLKcraJTxfGhDJ1v2dxb7BEg7",
  "key20": "3o4aa2RELFcgZNXGsc7e9YD1fUE7warrWWdbD97cuMEGtVZD71qKZNrzttZLWpzTzpmGhU3cMTHEQdYVsB5bRvHJ",
  "key21": "zBvNhrxEENSEbxuX1ZV5s43MsJukHR9KjsMifP3B222hCLjCELbJREe8zk25hNNk6YTPAkV8WDho6on3RoBwfRU",
  "key22": "5TMy2makzrzNmESZV66ej3FGWD6YNVQyWqXh8ogWsBEgYWYcYixsf6yPw4QsJTDqiWu625UK3aTx6XDMnGy66CtV",
  "key23": "52bnYHFrDKdNtaZLPA7bLngiWHvgMscWJVioc33tkatgn9cMuvioY1k71FtMW5h7j7s7LPh4tEUBWCLQU4JwriJj",
  "key24": "2i5ka4c7Jmr2Bvq5DvVd4KEpPohKNfVvcRGi47Y2qXNCkDraWcVuspTh2Fh7hJeqRfVbhvKF1BQPuHx5fNqvbhDo",
  "key25": "3BHqC7gVmL9oF5gJgGxqHFAzb79z6RHy95NwdQ6DD3D4rJFBwp45wHHRLs6ft2YqtAGs7VAVcJBbCQjoeihBURR3",
  "key26": "DWW4P5c3yFKoeqkrTdmQDyVXdTXGHJY9oS8bH1qyf44B1gC9UTv7e3a4hVouy7bN9YffvLWge9APKxF3X3Xr8FP",
  "key27": "4idWYjYRgAod4pZY2tBsuve4UJYz3LxpsAWpWwW4m4pDkSenAB1YEGTZUZoDzSzRt2b3X6toL3K96TXjHZwUQXda",
  "key28": "5A4yV4rNxA3P7y8MxFPPPa5aPY4JZryFz61YxXGDCVf5xUJqHZzNrWRfm7o1pF8jpcgMPBEXYEH5MQcbn8E9CzB8",
  "key29": "3ETQmBpJ2dJaGX3udkVwEG3xmP1wEmKWH5rcfcC7kkTWTFpsCh1vK2HK9L4sm6qmTCw5cSbtsVpKmy7b82yz845W",
  "key30": "3Qu41C1oNBJ8LToUBankNDPosd7kgYReZLqbTEfgAF4npkrD6PiA5bjr6b7eY5rhRFTy7TmJVtEsVN5S6NQtvKaT",
  "key31": "2dTh2Vb2HyD3Tx7i4sVpBg4C2Lfwu6fAV2W7UREH7a6ZHnSXibCZZDDwPV9AyLQC9iodU55xGvUJzbohisu3ssER"
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
