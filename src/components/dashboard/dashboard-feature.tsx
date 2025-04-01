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
    "2Da7XDnA8ng5NChBqCkHYouhPTMrWBFfmyr2puzQfxF315BY7JvEqGnnHig5gx7ghse7Qz4pj3LeAoUkkr7Ur5gt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fjd8hutdzUh6d3jCspzsCmnSS4fgFZyJKQkrqk3ov4CbYwigvKNJwh15CW7owJYdmrKFUKhKXRT7pqttv9MKJzG",
  "key1": "56GasCHFnaxHhjhHFXuPDR3Tmp5DLmcQrGQGSadAnqU9HwGhJE2XXpGtBXpHUaYxA3Fq2MA6D9yHAfti76p7Lb8R",
  "key2": "4YyHAHUoAV4aM8sG9sDigxqBpkkNrKPUS9KyW1kbL4Wq7jfQAAFZ1z1xDkoB2WPQuWZP3oK3xEdkgy8Ya6Vdtcfn",
  "key3": "2rUhr3PLFQv87RCoMtqVYJKxHfBJytfvmt4yXXP4gNqLyELRAk4b9qGvRJxGMjufBrTzLEhfhgZrQ2vwo94vh19g",
  "key4": "3GQTRJhwqHTdZKehTepX1GHhfXSet6tjyC2yLAX5vqpMCqbFdR5AYotCcL5ogWYC3kcr9JhEveqe3B1w4mVRbgzu",
  "key5": "2uY2WgcE6Sw12vT72SmENWLp6vW3vEUohWmqXREt586sy8oMFMNev6PR6Vp13e1Qpxgoufnf8dus8Tj6zSJb8SFR",
  "key6": "5Z31Z4FTt8oe7eqdk8fw7h8921KbBn9VXq5e8MVN1ee6FfnouNWmJrGjLsRwd8MqFXv2ESWzbznHevzYUJ2YCAu4",
  "key7": "5q8QC3HaYpwCf8GB6KcQ5vuz5CumsXQk2ZK2HZcD9jywuLJmKjLXsAdXVnWx8FnNfmNVzMjtynfiLm6Woes9ybK",
  "key8": "hKA399fh9TyecGmLh7hkmkmo9Rp1ruwuSommiSqCRV8twuGetnPQH1wHHRhakdJv8bM4PTF2FSiHX5DA4bNRoUF",
  "key9": "4MigsghCzEiQEnfriUh2vtQYBMKiw8gWNeaFco5RKQSmJ6DoWAfzFEa1Z8zRKdZRaepWq7eBXQDBZWCwkDSy7ZkR",
  "key10": "4PuQqS3n7Nqp3iTmHv2yPGLe9zYpT7g5HMoTUhNaEuHtCeHTy4bQ8SFLxe7jEU5HfwwkSQQnRim2RhjD5nN3GJAt",
  "key11": "2q27Uv6kbwdD9SjnNPizG42CQ5wMExGva6pziqKH6LLgpzfo17pja6DGdYBZuhEMN3nb8z5RvoAywRMgLp6tH5GN",
  "key12": "L74prvyqi3y5VAip2bDfjPcrwGrL59kAq1AeSDg2LRP8vqcVXHrTbj6LqdF62gDx2rzw54eE7sMhsK3tqTUamHc",
  "key13": "23devTn2g7Gg6A9VGJRZPLMJi9eGXXciJDQ4rFy9on2CNmLFeiXzy8UnZHHsav9R7bTUvGMCdmpRoTWApaStiV7T",
  "key14": "4SwhFK9Z5tuXEWrQEFhyouuqEHLzhp13eeazth2tm77CeqxRMMsN1SD2oYutadQMUetge8yYgPhiry9QiEctnKPY",
  "key15": "5Ebs8b8M8pJWEuuwr4Zq1xJLnWupnDDQWx8afN5JiJZNTig8ixz3j4rJYBdqa1i59GJuRcHFFPgZ57ugWGraPE6w",
  "key16": "48xGdEscsWv5w1ME5iFGPRxKo3a8nx72UvounSEbx1kXiQMJuvU31vemuvTZPA3NnMGHUCw5WauGPWfVi75ySSkn",
  "key17": "2rBkevsooGrQmQNFm7pK8um3z1jmQoVsgxZvUW7kfmgMpr1W1Jvx1pyTpi7toxKYD3epaXxALkz3i21pNL8FH7Kw",
  "key18": "4GfidvATH2oKFo6tjzMtWuaka8gzfokA5NroYxNy8wsNGGapnFqQTwdu3g2QCeMAusdybf2LHXykjtUkBS5oMib7",
  "key19": "5ktEgy6s2GcZRYqyMMzsTz3PNUgTssHAz6NZdwRHXW5PCpsTDQRhCnHHxKuxRakjXNr5Kd6aJf2tWBpAvURt6N2P",
  "key20": "3UHjGtaVgCtALMZjLmH51NYJZTVBwsv4kUh8bsD2oG9BhK29tsRGGevaPJ6icY8nvyGdS2kxh2S7uU2yuxnXahJk",
  "key21": "257jTxdxvNrgNiPmsmS7ycLFcyFm3vKaCBUEbko4NHjaYTLP9DDV1Ug9Hb9w2dz9x7JLQTpSuYMoodaQpz8Vuwtm",
  "key22": "2KkKXGgrrVYaHWvM8GhxLzqYph9K7JWKPZoE8kvqCP76MUFEZT8b363wfskKy16KEwTeEs9a5fXRfoDwVvtFK591",
  "key23": "3N39NYxppuJ9kqP7pRMg1TdWDFXM3fvyRX5qb9piNLAFx3YJgDEWoiu4gmjRZ66o1gvfyrJ1ntMjK2W8cmSct7pU",
  "key24": "3vXKZ9j2Mndu3iqFkRsqcVvoFFC3fziBfXnfq3rkt8PxTo4pKXC7UVgA6gqY7cRbJuPoDZTVxLDidRs62sDyya1A",
  "key25": "4xrkwSeFZVzHJ3f8P1D9aGb3j1Rj9YgAf689VSaCR71L62nbobdAg3gGpvZ32xrFnPJRYGx8ahqUfu47oWKfCErV",
  "key26": "2HXmKh6KaYU3sQSPhvahzfnRQHjjiQj2JtLHtkDfsK6DGWLdPB3H6oECy1RxNDfX3aHmh2C4a97etgc2UYKP3t5P",
  "key27": "2xfi5LVqhTR6oRn1wsVFJAUWZY5QzBfQh22SNKRCXtbkjT3qeVb4GyAQu7aCXFwJ1o2Mg1acP8z841kcJ6eKBURo",
  "key28": "2oZ62wPfzSHZUnUyB1ahQSBnxJ71H6DeH1rSLXvXdwNu6ThDMmKLqYAmtoWy3s14mi3d33USAyBkFBzMqVhnAc3D",
  "key29": "2khZhn6H477Ge9dUrojgkRdNJs7MLs888QgkK3gP5iuKfAZqkKAsPxi6a6dDVNFAeA8hMuqJTTZyETHWM3igiami",
  "key30": "qmtjRrjU6A2PmmsEvcUbrGFkPT2ryxP55VmH8itDSwfj4d1QBfmGGbjTnEPBzWjEzvMYQJ32UQEGDDDV9vgU9Rk",
  "key31": "2bBdGNEwiHkkCVKRVJ7iAKowmcoqcMW7F6fyheqNtEXtYPKKQZzue9XMxH12SjWo3vV6fvV6kY8217BW7Dn8DpoX",
  "key32": "62C2Go1RWLtYr6122L3zQTHY6cu8Krz5fg6bCjz8D3eUECZEqvQhgSr5tQhQsvL7e6x8KNWG1i1JzwDv4hMztKLs",
  "key33": "556dSJ7tafDkRKRS4g533EoVxMfFj2B2PdULKVcJNM2yB7WUchfpifCmyC3D3BDeSfXg7Szfz4Z9HRSGN6nmMWp1",
  "key34": "5Za8TsAH8XUBRFXcw2bGuYwuRKrjTr1ggw9VQkUqEbmAYVg3rZkJpQYwaGxHhKL2Z3UTKcVyLQcs4M4FnyoWQ3kw",
  "key35": "qEHHqVqLiGZgiFhkpgy3uVzEDjrNMz98dny4YK7PV7VSZtYVWEtuWTtNNXzo1XLbVYDjvxKYXsQ8LP13zhYEQLe",
  "key36": "3bAzGJiD4ZZ96nupyhdr16MzTXhH9K1DxbocKosEDYKgbocUruSXz9aFB1vRBDKZ76eHbBP7qoAeePKHoRzPyRV8",
  "key37": "3iCp4YG5ZiwE7sWX5rxuHtaLZowgaXHdf4k6aChTsaSHCyMFxTovjoxZnaQUZnULfbdz7Nm3o5p72mBkWZf9KnsJ",
  "key38": "bUT59XsKVgvkFBxpS4kaKeYZ8s1Wb4drrLTdDtD6WpyQuAJLwxweikfKPbCoeaTjHvU7rmiMGZxtgevbiEewQM5",
  "key39": "cA3Tsr8wLzQt8hUAZsLX9fqstGfXxh3usyeHWZsan1EQ6wM56vZX6t3py9PNDBPQEgGnjPURtVPBtJA1DorD9Xa",
  "key40": "5vm8B2EVYb9XSdUjxbpqp3M9ichMtEU9XkZr94thgVMoJBqdkeHsjZV7oJj4MtkUU74tvnHw872A8NfZ7BBczhu6",
  "key41": "4WfFvss3PyvSLJCPMQ343ettuK2HNqpEn66RnNJLJSoDEzUkD77VPutgbE23XuSFGySPjTENyJYpS95yBkuYDs7M",
  "key42": "4mEHWBTwXcPNEEWAfHVZN2GzV6cYcxTj5Vqu7frLRMUXP5PnqHzyn4Yw3rYwckqBikF13SMbaqYYjfb72769Jx3A",
  "key43": "NXgfixZKcKTfQ5puErWP5zk8yTRcBzLVNtzwTvFdr5NBuZp9ZwSBdUbPR7nPpUa9QmAkj5azj1VGLUuyixBjhA2"
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
