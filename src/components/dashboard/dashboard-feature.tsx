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
    "pzmXB97LkWLFDKKgiJVfyKh1ama7f1ZTyvauRbr5RCJmf5SSUiBDXboDVrRvRUVaayJYCAxzjT3iG6ajGYPxcL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oTZxiYRYcH5NHbonq7aUQEj7WZSmL8DGDgd6kwq1wj2ghTCHcKvbpRJ3NMmPouXHwbnaA7Ybg8uZFuJshCBE6Xo",
  "key1": "2j5MkZ8YQJd25KRhzydiC75nf5ct4JKddEGSQA7upZUyo9SH7CT3eJU4qzjP7Lt4hcLJ8N5saDcdEP7wvGLQh1ZC",
  "key2": "VRmsL2VBn4tSW47kxytuQXeTPquFrSEQWCcu6VwhBPoasHFTvb9etS7DzrjcMpyHL5ndDTymRJzHT4ajSz2oJtW",
  "key3": "3x51ePAx9Ak1vWJvrNiCZQcdJDV2DyCgxkbF3AYWDh9LfaZcgUBXwk7j11mmkWSrRXLmycPmnS9V9kJqoXBDJh5J",
  "key4": "5fGqNUQwvnS5JMkgVgQi5q1F2hvSAQEqj23GTvQjP289ubC6zcy8qYqUUtmt7MSbHfpSASpnrHtu6bSdPQGZxG7U",
  "key5": "54Fxvczp1inhy2QNxaL426JtZ5MR1o2dEgo9cjQeP7KnHNbSWHzF6SXmjfTD4EsLygN4fDfBCARnzax347a1Z9EK",
  "key6": "49fof43bM2ZeKcdpdCH4xY8gTqrNSXnfGDmpeiLxzredzJ9ECzvGi9K62oDqoJtTjjVZQuQh33bfmqhaH64EruXX",
  "key7": "DhT21AAKjVxuVAGZoYxgc6Z3LxLc3RyKkgF4m2MAobQDAuU2b8uZFdz1kxhMGHZ1dWGgkY5PHRRiXfnYe4Wu5Fi",
  "key8": "4sSjr8imEPEaDCj9LDVMdFe3f6qADWZXr3X31GEWm7tZsYMyzpBNcmARN8e7VshA5MhoP3rcD7zwvQMqLaxAxZGh",
  "key9": "4q4tK4UbRVovXD32ndPVk6f9d8k4DCXJFwGr8aufMd7pxLsxsV8qgBH9n23SsctxSz2YfAMGALse31upU1bGzjnc",
  "key10": "McK3X3DVbtkASBZbz86M9pCxwApdqbgWJjCHzyY5xsnnm4t228zMAG6rvCvxCcLaLmQQrCCXSgVQADvNGUUxUpk",
  "key11": "dUrTY5JHEQSRPPSM47qCZ3JRS8gzYgtoQHjQLijbwZxkzycCkc3ufoWZ7dRULr4YtrKxWvAsKQEKsdnJRbCeBPt",
  "key12": "4ZjL1MikDHukp2TF5zGUDQFxvAufX3ZmD5qJmiHee1Y7xa5ko2cgRbYftefcfaHxaU6vZZzkY25jViiTW3bk7Jsb",
  "key13": "4GJ1WE4KyAUZGeLaQFwbH7T3BEGGDFWDfcNmKjzJG9PNfV4BccikWcf1BbtEA4gmWmigaN6EQ535Sbqn7EEGJxYP",
  "key14": "42EQkyRJ4iKdxH1etPnPoYE4v8zp1uMEjfB6BbbxxVNzkhnM5EPzECyCUJ833C4PQjxoEg1taeciYmFJ3bCWLQPZ",
  "key15": "2N4mjhagg3P7bh2PJfWr9GUBUdE5p68XYw33xJaAs3XMqkZjnpD5xab22Wa4KTMjCNETfsBYvMuSPtjDAzGcgBtC",
  "key16": "2PrbQKq5mXyz4iV9zvdAmhyHZn2DPX9CprRZGWup9xcQYyy5GGd4NdRwq4u5wwRormcAHq2wDejM8uxfp9FRJEjN",
  "key17": "44b4A9DiJKJnoVk52BYWb3TUEoC9WhB4S4GBN7rywmYwP4MPY1HdRnuVCftkx1o48VMyz1NFqqbn28ymeqjtHUKY",
  "key18": "4Ggty9sLBwQLZYeQ8F2q7dDm8jh82kNxLrbTXQsm59s5t88LNfuUdL8RzjAMvjCDgoC76fLo5BG6kJVXb1pjf6d7",
  "key19": "8C9oAqvd8vH8shEDV26PRYHjdFbi3gcXy2y9RRNcuQXrzqGhVV52D2UtxhrZGg1VnjGEZxLZwjb2tHM1UQsw5jW",
  "key20": "5mGduE2yxXJpKUFrYcCDPYLcLdT1tcdHwVBr9YSKKr8g8ge4jmmYD16xzkFcFuSxWxdzo6SXhMTxZdzysF1WeEsA",
  "key21": "4XxDvsB1KCeX1m7mJL9bdZX2jNTCyjCtnBUy4VpxFVuyYrT2dcAMa2nGnhMom1Joq7WaSfdgq5pyMrFJNH7aUXSB",
  "key22": "47EE3o2uHZm7hrnXE2XwRZLaCa1Anx9auVoDSNPeKC4XFznaJhvhbU9hE1thLXoS9HfBa1e7hNiNzsswq3kLthQG",
  "key23": "9BX9ngNiLiZLXRtEuvgo9VaD9C7pTDf1AwiW7k2NCPZtdY5ZQJrBYPFJmYGSSxDLTEvsHb6pGrnruibCk4CHd6L",
  "key24": "SiersRxWNvNgXrBsuxi11LPdQSAPagPFRtMPeoj2sT8DEhPqTViEKsVdCHgXZeudTany2uFejmsTvuNbJqx8K1s",
  "key25": "5k7T9XXqGCP94Q8tiDrDtEpQ2GREyXj3bV52tKHufyUU1E22vbg3yL51aYtXak8qzXSzM9UaFCDhMvv5ff5VubYS",
  "key26": "42eQ12R7gnyJrKkw5t9MUReew7QbdHLZiNsMJP2QY6V2TtmrnNBWq5vua5PRn6mMaX2f5uyaNLtMPkjksto1odFr",
  "key27": "4ovtE5GbwoAStNJGjZGraQxT4KZztnvQ8YNhXicBUGg2g3TjpWVSMxKpcws5fhUBnnucg114agFBZP5ZQHUa94tb",
  "key28": "5WoQGUjtbSDAMxpuvVpKXPJCcHVN3SonJ6xQxFwW3VNYHniTL7YKJP6KTaDwKWq7k1S5zkzCgw7axSL4USE9tDgC",
  "key29": "59g3otKwrcumZeFT955WDJ4Dk3JjPRaWhideuijp84UrshAx3FD2sKKSEArJYgcv5SRU5ANkUwQo6MCRSAks28xp",
  "key30": "2A5cXJrhWSYwp96yd5dWPHxynL5xam1fheWPc4S3AqN4SUxX9sEooWKRaXyqKsmKKxGdzhAGTVDdNvXcbu3a55o9"
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
