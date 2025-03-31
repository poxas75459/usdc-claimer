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
    "679zkcUun9EVFAxJdsjuAuqpjuWF9tqhqbof5fb8GnkbHd8p3rkPNeBB8gD8ikKtFjQbUEH68fi3U8wU5Hu7EdJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MYnxB83mnzNDePY7z2PtRwTHotAfn3oqJDT4BuDEobwkjjjuzdQmkhb2AMk2uiCe8GZNFxT9tXACoD76vMnPpjy",
  "key1": "5AqPYoE78VVTzaz5itVqKnoqCVQvSVo71fcS2yM2YFZhpu4p3RsPVrGR1MehGUxCoFwWXC8ovdSUgUWorJU1QKkE",
  "key2": "4jKG47gzHyHUvozhpA6P9Wp3Mg99UzQ8KVzDRB1vtQCMiHMVhAw7cxYdxf8Y3LvrkBpjWzGEEvFUTex6ckvo5EES",
  "key3": "54msAPkwNZ1CXLT3GLM25J7o5MAmRLT6bnWwPNJBVowhD8m3X1DwikP95sNrTPTExxdagKPrsJ9twkAsALFGJc7t",
  "key4": "52g6Xvh62nAvSzwUHixPouKamEYxatkQuoES2KYcWxy8n7sRo2hSwYPWMXUSDu62spFqHta3A1ihEQyGS3FNcFFB",
  "key5": "3N8XCC8mujHjjC4C9BQToy3KV5jf3N3rJrHnqdVNS2sL2Rfc7pHinfnBTscgYMAuuvFmZ3QRFqzsK99apfphqMkM",
  "key6": "3JECXcQaqT8qdmUqVcY44WANYSFWf1GC6LzEzHG1B81xVZXY363TEEQUdznpA2NaXGLRcQCh6J8bYzsNdRpSHgzD",
  "key7": "4YySpVhPqaQQQtsu8rvJne1CCkmnon1JGi2tjFvEeHPVKUQyUDZVFEPQzk7n7qvt9L3CuGokKvE6rgAkmTuEXa7z",
  "key8": "HKrM9YiPtpFjZUZgmYB9oYFbgi3zK9QXLeNorn5U2Aqh32XAoXmL7iVZ4hBeLKNLrae1mvndqmoLr2gUrLPuMV9",
  "key9": "Fw11ijhbSbRhnukeGAyDYvQavv7MKWvDM1Riem92UZNKqcRYfEXTrV3mGSDV4q6fM2FnztbPbfnLytSHVFp4a7E",
  "key10": "5qabBbYSiGNRs1cB8VcNETq37AtKiHjFSkb5tfMsE8mqiieHnvaW12SCk1Yva5YvGRYgcWjnmaV8nGHWBgYkzQrb",
  "key11": "4LgbPZxYDdDZnZPPQxnu8ecpNeE9qhsXxL1GBKnAbTNE8BSZfXwkwDWdjg5uiqPJzD8CmtYGUEXkzAxq4XbA3yaf",
  "key12": "2o4G8dhbHffLeHE6L93KaZhCv64imTkyLTx8Mw6QHN2Zc1A5YwNk1aur2qxVeifi3uZqCeAHbKgfZMvSfnS3N1Wm",
  "key13": "28FMN9ioRG31Wfv5jF9LC1RPneqe7WufLa3Hqb4q8mrLnaHhma1iumZe7zTHhHWkDtEL9eZA12Nq8o78a6GHRpH3",
  "key14": "yypRyrJK43QZwhEmREKgpBnzVgGAiTbX5mc9RuY1qwwZWWwcxyCd9CZWHJyiTdnCab8hYVU62mG7nttB59wSx7K",
  "key15": "BXDQ8xJWrHS5gGAvDpqHWoyjUuaaPMwjkFKffDre4ZjW5dGaYizWqyindxXQyY77q3HsChvTCwYuuL8NxGUwtJp",
  "key16": "5x8bWp23arrtPus5SLVFRrgHX88M1t4zvtWmCoFujM1iarUJQUtHmZhCHzDqSfbB3ssw6UZwxvoQM97gmSPpAxaW",
  "key17": "43fGkGFFc4jR3NRdkqfAizLwM9zmies15veqAkW5kzMzLTuqkrWxMEYRhxALv1acePKtiaC6BgnyCo7aRnHn4nZB",
  "key18": "2scab6yVuQqRfrduj2eFRjKXFzUrGiud6w6HxMKvUacTrY1fN8twUq66ZkHF2KPa5NeaVLF6ZDSZ5x79pvJnFQNp",
  "key19": "4esXYoohinaqyLuMNFDshFLoXVUERrGCy8kPdz91J9BAzq3Wp1B1JtasEHNvXsXQ3MPDFgJqu6qW6fK2BTX7bDq5",
  "key20": "QHhfUjCGHKkR8WtrnZzKNUh6wfqUwRUd2URMvpAJQ8tNj9JWaCNDBNmH4kXPpJKJoiWRx4JoLHxf19147a48RQt",
  "key21": "5fmsY7SzKoGJaDgSSCwCcDsFoeFS2wSAT3AY3Jhq5wYE4WuW1DE77xX1dtmDgpzARjM13rvxkwqAvwj1QFVh7Mmx",
  "key22": "PUjfvAaHXVNm1Fi7v3chi2mnYNjpWNKknfX4gifZMvnwczQ43xUBAWfF18VKkJ8Qip2daZyPHu9rRgLXhxuiNFK",
  "key23": "CWAh5WKZpbqFwbHYPttUCmq7B7SeU8QEEMSB1rwNFsbVYWTUyHSbHYu8a22jvpLTwF1ZZ1jWg4PHw36FwWy9jSe",
  "key24": "5shmLZ7dTDWKDFXS4kgLDSb5VuYPhjtNGMUjYNsYNBYSEvfApNtn6AX4XCBtZv8dnD4kebe8jxB579bBfb3GS9aN",
  "key25": "3fbsTUGBcW99edz8JFi17DxoD1NCg2Hxo16SyDZhbVZTJAGJ5bARZxdamsPownddqCwXzuY5ee5oCdkLcLYVXAa5"
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
