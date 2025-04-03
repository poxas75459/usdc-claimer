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
    "T7i3Xzajyg9u5jiFbBC5NTkD4cwzjYTY5TEM1r5B6GPuqPNJCZDsQsHNEWQRWBGEbcQWEkvqJ8bnS89tTNBWTtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NignF4ppfGcirV8nq8uQwMfiRreidYAEuyQw75otdg4arnQYUpT7184c7bgGUqDw849LWJidj2LG7Vv5UEDMsmd",
  "key1": "4i67jFzFsEsqTWhEEqaxLX7CzLYEM64zxQd45on5XB7cWvoXzsG6yQ4GnWEw2vZkyLAaDspFYJRVj3Gy3xzCkDBo",
  "key2": "3e896iP8wVMUjgCp1KT2DXz9CUMbbRxbxQ73MFBdLkn5vUpPazAfkDLFX83fw2sgfFe4dk9esYLxek3xeDkHFcdB",
  "key3": "4eHzjvr48e3tfU7nc51GY8MhKGjRn5PKL7wwrNYjwn8hphzkExaX51exw5WcP6X7GFUh9SW9BFn4t6wZEegiGGu3",
  "key4": "Gc1emAiAFvC2fca6xovwurYBM8hHYSWVuPcW31XkkWjsGXdEWupzHckNzsair2ViXAHdDZS7QPTrEyybvPJbGxX",
  "key5": "j7BBReC7uELXVAEq97dgRo1a8q4U1segX5xqWKYU7pCD2iyMmVi59UoEjPyFyprP3uULbzvREGcoReFZjCnLbWJ",
  "key6": "27VW4nrMFbCjPKBeaQepfZu9QFwdw7h3TL3qyEjXjDr2vCNjUQdUwF6heeGyKdFMBc1FbfQt4xfrFuCnRK77Xnw9",
  "key7": "5snWXaTgUxRtecKnFi6q8d2u58TmAchNMsbedesWH5fHWaSYceeW1CBiyaZ7bMSDaSDuFYHNGNAhMvDAVYKidSXK",
  "key8": "5QMm3mg5fviKazETSukz87jJUVLMFKHX1cpSs15S4kyeVzV47GuxNLnxj1yoFZtHDmZkig2QNg4PRL1hQAWUv314",
  "key9": "2Hmk9hWT7J4somGXtCTNFGvUVjzZB3tWQHFUu33EnSALwsFeo57HhSW6bdqkepmTgKeVAvBB8NHcDBtvmj93NSyQ",
  "key10": "3AiEUvpWiktLdDVzvRR63f5ku3bzfTxeoA7hJtk61S5miJH4gTH9HGcHPZqMrSkyP8DMiojdZ2rSKUuLKE2RB6FN",
  "key11": "5FY9zncMmMR7kwsqbR5FNjCpLvEx7sfYceaaQCk6sNYXrTUnk1F7htNNSTH1kzpcZxUdo7wxSnqEgXwPJvnkqKFa",
  "key12": "2hxB3DKWYWwkWnySriNL7BRvJ9rhTsct68tEQCEjCgMYZoAMRt9BR2XPTHdJjkt9k2Jmkui4bWi1ioMhWf1CNNWV",
  "key13": "2NE7D1F7xTU2XM2sDkKYWxgrbNAuFZdJCm4on5pcPbizb7QicGDFNYpkzXNbF15SmeRc3FY5kGizezqZaxXGqGka",
  "key14": "5HdT6DeEyn6xWzKyCVRmLCfDFrHqz4Gs2LjKeHVJtxrzsTNs1NqfqRAQbgzAz2NXdgCK7sezMaxkWTs6bWPuD2Ja",
  "key15": "2fgAkdhjRJxtzvrZfqiMtd5FLbrFKVVXvgz2LtCRG9Xpd7LT1hUswQi2wVqT8tkeiiStt3ghMHCqAceJQpSVM21t",
  "key16": "3q57csjP9HeprajQGuaL4PA9TzYmTVYWFPTMgc4YiTpKoJvjAmfn1aSUWAw2gj5ts8oG25Fhz7vywPqaosJwpWGg",
  "key17": "65STxvHDQFusnGckfEwuwLQZXvoRrA5UiS99PHxVhf8RVZzZi1d5XywQBorH49pKnc5iezYabeTus1oHcNeK26wr",
  "key18": "28Q5u4ttthiMmNziejLwtwu8YLEwfLZmBxpeo1GN11eZyX3HJYTuXegvx3jHvBRLu1q3eh4k4hjkB65KLv1eCVNE",
  "key19": "2kx7J6aVJ8G1AbYy7b55GcQq1d9rVJGqTkqi7iGFPncw72BZvdPdCJr3e8oW33e7WchfJ9u6tFBwkoSN6w1MdTZ7",
  "key20": "62htkLPaiMrRtEurNqSjzMwnfkaDiiPjQpCcJj1BrMFyQhGTSz419gv6QUmXcG6iRiLveDvcXT43BBaahcBZfKh4",
  "key21": "4XxQirgJ1jaT6dRv8mcfj3jgUHU5gx5gLJuzWPbiCNopqg3NkDhiFUsjGCqZ49bszfkag2ZewVE1oduiziMQ2aSU",
  "key22": "64m3Nbu5LJ1cLGCN6jcMCbnWoN8YUHNLdQNp4SfPDBhdFzS2kD7dCxX4CBsztSg5h6d1JyA6EFoQGYApAwXJFsc3",
  "key23": "YzqTeZWpXfMnndRWomcuaJ4WGp558WEYTCbYsCkULFPzRAVnCEAMP5uvNWC3PEroUGdExkLWRxCf9WcS1ztqVXU",
  "key24": "356tM3WxSgSu5XjaWKSCk75XqsncKxZotnnVrZcZaFwANceEr7totMUmNUPQJ8wDE4k8Vkj3buJuoa2eVtUnfhZ9",
  "key25": "4mwgqpaLxi3aRuqNogd4aqAP1v16HVtbPeBeTkEVY4EZDNNC2pGiLdckumFY1DQN1mSeeAGtFUjpsmoxmc18SFyj",
  "key26": "4jDJFP2wwfGYt2eEZseewz6WryGyh4CZzRDcf4KvRPufhZJxWvWtJTNrUGQyTGFVvhHAmXH5bQr27NNZrHCaRnCk"
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
