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
    "2DzU4NoUox3v7r2h4q6PQLkrjMzKgJE4ajin2JRZF5ZcTLC2SCEyJS7azFjNpUHnKXfGpqFr2wxfB1zQVbUqJdmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xnRVLV3xEhMCmDaJsGGrkHFNqCqWe9uFABYFFW33ieWHFfWT8ruVo3B6ASnBozPJXtWfWPNy2KzoXQc1266e5zJ",
  "key1": "4pB2cCbtZaWJVniomfiLgo9b8P1EzzYufchJnsMwK2mnSbTdiCxqUcR1DR42GaD4PW8PXVeCwYvYkuR3kRk59bp6",
  "key2": "1iyogmhPMuaRvQ5zt69K5x49UeRbGiQzoMr4KmtsnvEG6dmwre2fDUu3YPNLqPCVL1ivWUzKqmaTdNX28YgjbsF",
  "key3": "3ANHoxmk3VxidWcqhSLJ2QkbrFo74zA3wfy1bWBcLinFk2vg1B3AY8xBF6QMnmEXTGBdW1Egv6QuPQozDLPqpwox",
  "key4": "5Txi4E454zX27R5xdravkkJgGVb5ManXBTUMj4cf2LiWkVYLmdmakWEDNMjm4TbDnSyCwMVDDkPLziS5bShy6Ucg",
  "key5": "2PQfZ2zZL1RnC84QuvJW9xy3CvPx9YsqfNMo9F796MnzvCBpa2weUedH4qyeGg2SqAJStMCiuB1XhHo6crE8KfEW",
  "key6": "29aHkM2St63Wn2MbFHzrYYgd4XokdvM1yHhqYwicnxR29Q4hxkzeUvpbtTPe9gUyKKqbQBLWNKwnb1YF92HirKZf",
  "key7": "3T1pbMHCus14EP4iUtZkUhnwXdsNzjjqbqzrMZRJ39AvnivMBwQrPnAX8GWSjThVvqVDECWqWc1C5AJ6tPN2sJ6G",
  "key8": "3X7gQpWbiT8iTz6LyWep5KdvZ272xKu7ZShqgBbcaBNwsszonyZfGRQi6rkcyFBn9QdhjcjwadurBXwkTKccycwb",
  "key9": "46VVbc9MDhT6PqXMvfKcnKcnZ2FDEkwW3ENwjgGF9C7cotL7jmujN14sMUYCumgfgSLqpw2s7XeDTed2KuT6cKFD",
  "key10": "4S59mUX4RcvBvfwDy74DuKHSa1p9QA3EiWBgDjEmczbY879MK5LdSHN45UNeh1chAgCvtGGkpdio6zsjtxHvunBv",
  "key11": "61YpSpZCQVtA7pxpfUJ5mYsZ1FTjVeZZf4z8ZXANG5ufh3bNz1G8LsLddVoigFt8Asm1vVDXhG3pWeDNp83VGxg5",
  "key12": "2Lba8Ro7wqmwhAcy12jR9uhL5MpSsTDiLbtdcUzq5MWKn91jVWYDJJEk78KvzZVMEcdzMXYRNNDtobAh5sGxRa1j",
  "key13": "5bctim5jsJvuFgH4Eq1VdJZQZmH4fFafG8aPwnNgbJyPX6yUaHUjaihWU56gJR9F1fPZUVQdjex3ZK4ktaATJqsC",
  "key14": "2jgjuMQs7K29zGCUJnE94XPhHfLRBRYPCoGHkHFdbjm6hxRyG6HgojdjU1ShBwuWvwznSQzwiYsSYEesTrdGLLFf",
  "key15": "31bdrC8nU65uKTk1FxxeiwgZHfKDaCXqbgfBsgqjUzCNiL4MdC6kWarLTh7PDzGLq4dWRXS6FmyCzvgbothuHfEJ",
  "key16": "2wGL294HwFyoqebqJ8JrFuWmHebh1kNFvxapArwra1SjTKBT82KrvYjm1fkdg4d6xu8pXguqL1f2WCjZ4r6KBTVh",
  "key17": "4YNVcVA5Tx1JQ7my5x4s8ZFMAcGDPAbkDcE6cnddWqzfGdhHJxeiMT1JsjUyUg31Y5U9VW7yMzX2Pjkw3a1WNPwW",
  "key18": "3dnRkS8u15hmmFngzEdaxMq9JK7gw2aiU9L8aSpCj81YtcvcWn93rdex3nJqfP5cDG2MbyeeTYQ3TiMYLr57voP4",
  "key19": "4Q1gstumyRiZZML3juzJttduBywUot92VZL3ZzgL62GpYopN6MwJq4fCVGhhqjr7cQpiWNCZEiF5kh9JCMpX2wdb",
  "key20": "2sZj3p2SZUS3ayZr7UB49oVhDV6Fs7w1BDA2jct8cb5rPkfdDDKeRH6wCwXSYh5vJPdEzEwpazsVpMDAz3un5Pv8",
  "key21": "5SwMR2bxxeyzRKt6EAcGZ5JUaxUeTzWV2HPufgRALh1ZsyjUaA3GV8hxitFfkgnWWiKdkiARxbCX96ixW2UiQ4r2",
  "key22": "5HX9gndLueSv33PPDDjY6pxwJGLMhe52UuU3mQv6Eh1CA4yqAM9yroCoxWRzoqSV3pQrxPXGbQdJJjnXF2Revz31",
  "key23": "4ttfbcv6DZDSSdsZPdCUN5mDT15mGn9ZTzXXJGKgCVkJWUKdmLdiC3nbzGUfaXSJRLAYyQnYNW9ydpkKYAzMAZ81",
  "key24": "4bfYPi9sDjSSqjuUxmg4eMRzVCz5uSpLcSTCWkm3tPTJsJzP5GX5hbsG7UowAVo3eZcpoMtAw3du9otzf9YAFQsT",
  "key25": "3FQGeXd79qcAsDdxQpNLaeC6RFopeQMjJ6N9aUFBjUzhY1p4wcG7bvCDnni1JCwKvjS8J4GrmETH4euomcCEiG81",
  "key26": "5Bh1h4AdQNNBpM48NvfSmwD6Q86QEQAJTC5gA62wqp5HnVnTqzsLYgcJRM2wFh2LQSguyJYxxenecWRscojf3bnd",
  "key27": "eX8meKfGdwFZAV4f8mFjwsgbX7eGeqvFAjE6CeYoZK1LEMzST5q1F5Tau9gDDZCMt6ALWn7eFP9fNfDzUEicj8N",
  "key28": "43rMvtJ7u5LHQ55ujP8BTpP12J94kS4ekoUdYreWU2BJYDGYREkCrgeGN81VGNzzDT3v1Apsz3pnk6kSwKKDbJuf",
  "key29": "64ao4UcbCnJfeEAekTVHqb2v7iXgLsG4jg6vuw1673dQ7uWXHRJfXdaK2FEJ5Z7xU7yQH5EJBrcJ36S9Nf7TBjwS",
  "key30": "4tnUMx4bA9VP6CwrykWxWs3Z9HZsWvHQJ88dVDJKt7sge2WLdD6eAUui4YqxBEXxk3oAoKYbLJwS8ngn5FKHs1dE"
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
