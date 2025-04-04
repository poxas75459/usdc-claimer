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
    "36RvwZZjtCX4roow4kuZ6yputyfHa2TnLncNczpJczytLBNZNjnuBFXJCzZzd7WvJnqrJjzYBWSg8CTXscAaHE5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hMdGRarJvuTfFJCtnTDrk4pjMuNWekos6JG7wnbHZFmCTxsJ6RxNtQHwFwhpLdXMuQq8PwwTtXTaVAcbgHE69jR",
  "key1": "38Qs3Z3vBPN1quZzpKS3RJfnLr1Yj3A8oX8EW8N3tQRDhbVbH6USkDbZU5si6qbs8CZE7kMNZDbH8YCAFMkDgUSY",
  "key2": "4zPYD8rVSDbBBmpUc2pjemM4HHCEtqhY2A8UWRZDsKLuUvq2JcCudmZDqco3XSTfto4CxerKBYYLQfPY5nrXJeji",
  "key3": "3mJY4n52SofG9dezwTAcRww4NVWLMGnd2hZnDKsAX27275nXpCtFb9wPE4T4A44A3Lue74pxJZcV5gcNyMAjXEbG",
  "key4": "4bB2YafW81JgVoRe3tSpFQbVvX4itVo94jkGzR8688SajTJv5opyrUJjG4nd1xDBpm2i3JPVSUexfETKB1zEwSAW",
  "key5": "3EqA8KPmLAQF7oT1wQptLmqLnv2QMfo6MCKvsnWsqBHAet6Ctov9iZijVp3rHTuq6V8wcmjB4Q1muXczrSHJdLH8",
  "key6": "3W9T8qmhkByLnC5mCmGZv7pFSUCD3JjYoMvKWVHC9cz16sfgRttFUEziyGtiMLNKosimTpAZkpg7RHmttfbLRtz5",
  "key7": "iXPP6HRsKFZXxqnStHsWWnTPfEjMtKSDymzRCuhefjxmY9ZWFpenqBbpf2cbDUXgs9bVnH5aeQLJetwrUdfn5gw",
  "key8": "2cHuxY3ptQ5ViJ61kRZzRREKqM6Qgn6Me7XmSWStbJXvRT78Z6VK1AT5CETh1xxmnLgqoVW9Fn9n8k374EFbzJFV",
  "key9": "3WcHxduAnG54QC1Tb4eRVXZPLJvSZnYK2dv5zUck1pqpVxR7NeC3bvCq1DGME7ckcx5irp49qMoCeGBcxZA9uGbi",
  "key10": "R5TxMDya5huMpSkK2S83LXJLS4WHQH18jK1dRbk1mBSadSseEK3dBh5AHMWKZLYAuawmvPjoeiaMFuaV5q2WoqD",
  "key11": "33pp39UR68qdGFfgWCsC2x2ubSpJwH677yWbrueuDiW6f77SAyccWRJNeR8BzxtJ9jnanAcV58QdYYBNXVy8ECX9",
  "key12": "KqGR3qzZmJZN4YEShaBSFLWvjhACiQU5dEfmkwpcVYJN3ZXYyhMLoeFWYdJuqLSbUPdkMHUaJSPLc7WyHiExD2q",
  "key13": "2fLowGHHafQNvoNoKqQSsPMosftctxvZbTQGtK5c2HMrC4ZBk35uShg991jDpePdxpoH4C89iZsgGbDaBczef8so",
  "key14": "5mw3dojtCE69e2Hweithz48AL6JBRg2SQERJL5NRL8JaUKyjUmpKPbKneN3d9Q8cY3ZtgxmHQUsugdhbrPX52fox",
  "key15": "3UgYKaEAZTJ5aQfgmVGSxkGnJc8hqgJGvp4gt57uQqsLD88VtE5KBm36eBVA2JBbiYtqBqjYjEEeoHGtymqxPtPe",
  "key16": "2LsABdvL5zVjFEHX1FUh8c6eHCjEYpuh3eKaD8waGZhmZLux5qNzxRpaAgggDjXCes2FpiVaFz459qtc5HuUeq6F",
  "key17": "3oSKLU4JvrT9Ttiu8H2kaGybVyAmHeVQ48cfCAeg6C4AtzKGAqkE3cTayJUjzJzX2aA7o6tbMyd9rPWrRKs1q234",
  "key18": "4vdCRjCxH3ejvk2fS12c7irJRC6sUzJkH1uArBf8rFXvLfqpjGywRMjqBKiRnMaD4Nf7mcZnMxbKFEBSfigK2omi",
  "key19": "59F8k56gyQswZCsZYpGpViBEZqFQXeWH1xSGnwYdgGUczsJCcLtoTBHmkagobHLg93QGc3Ms4kdMen7ttcxwwkY3",
  "key20": "3DCzRTmizrwRcJzu3hBYDp7d17tNL3MvqPakUDdDsusxNXXkdkQpUN8XsyxGfA32a3PYC1YZK7fzdmq32ojPoXAj",
  "key21": "28AE5oCzWfjYfyqjAbqJr4R2mtUsRUqVm43ty28mq4s7o82GaNnhA2hu4paKLgNnJyGhXrpLi1PR4TEadJJsWF2b",
  "key22": "tdMdeSYfFoe3heamB2LTP5exkUC4KzjAyh9GA3tbLR1syEmggMqQEBZJ1wdB3h9U56695oMNJHmJTjhVCbXHmYx",
  "key23": "3QhaXo8MefLJAnR1BgsqARo9eZqyfvS5hj8VKsLsjgNcujqaiufCtfbDJjpRUuWnMJfgmiViipQ2LPmaSKbKDDzi",
  "key24": "4ZBVki2LdWxTLZsB3zxk1dXion6ng9RqVML5avbE4HaTRAKsDQ4STMVLbBbdbwhpdZdT6fxAPePo65VN6TFsHcUK",
  "key25": "3cSe1a9cpoBbn2VspYTwrbKgXC19gBUfvU2NBG4triJSs5iDmfFyvrHHj2rP36PAxX8Sr7agJj5EeEEJarGzusXm",
  "key26": "da2naNQccnmU2EYuLMZHjt7qW3GYF3fjmqAuEomPWAyQydK4a9zSVU52ayXiLWBKZ1YHbkx8GKatprJbTskVE5E"
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
