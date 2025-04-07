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
    "4Z65NmJis5VEDWHH4dchHHrZKPofzUp8TPnZ7LF6jiDAuiEZHW9v9JwiMHJWb9ppSfqcV3yD1fZBAnhQZJcbA4iX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SeSMg5Md5yksjUGqsYAjd7o5kqVL9umiicF3FE9AwiFo2saJKKGkt9WJCgPTAfrECK7EHTNg289VME7WTdHp9Bj",
  "key1": "4mf9NLVt7zdS1AAP1qg7gP2ZX5KS4g7GZxYiPN2R9kV9CDfdjGgwQSt4C3PD9U1FgbeunyjiwVZisqP9vU5wjN3S",
  "key2": "5NXfV3oUbg7LteKnieiBUkByFvYKHY6bK4ABRfCryUh9AJox4xmLiikz1FAtTa2JCrFuGcm8BtyStrpCP5d7ZEHj",
  "key3": "3Lj6ESDGpEamrfEZfFjetYv4SLPEAuLiy2wYbSax5GhBJdEMFv7h8pu4KEC7exMuVjBL2JCzzPhk3hbWtkek9FYx",
  "key4": "4Dn2JugdveR5A4CWC5rYq2bQfLBCdTnNnK1JKGiUybtAGXSwqDrgTCEfhB2DmMQQC4pQgaRkPnHQXHESTSr9kwKc",
  "key5": "2QgbR1AmBitTgD6sW3meGD7LMfiUV979YetkWwtE9qpfz4YQvBXfHmPW8umFkvLdCMpisz77T3SBWdx5sAzpjHLQ",
  "key6": "5wHqVb5FG4iU9XtT6qh355yPpukcRP6j5djqMYcQMfcK64BGif5NuXnh5EU9JgzUShFNTdhA8Q9L84c9LBUsaksS",
  "key7": "3etiH4wMeDVqVVhz2UCLTGdxUErvXWsLPzWWJjsFuu2W96YAPXCuD4BWtxMXibuZjbeKuk2z4yzuceuVEbib4owe",
  "key8": "5jZ6dshMri41NtvhW1ZiYnoFuJUWR4RwcPzEC5KQAuVwvuhjRBVqzuF57kbNBUG6erm8onYTKWhj9SrTXbDJVo1G",
  "key9": "6GwjWfc6aKREMNmKwTP24SQ8xdMfMn1AWWYdduda1qbDvFp3ZrX2UFXj3kAua76cNHNtzpqUAwaSmzcBZx9UvQ8",
  "key10": "3YHs9iGYVooFYK6Sb4gGLvtUMs3BPQkCmdpxW6tGBA6w2AhHRT7hwfRy5xRKz6vGujvsdibXr7yZXe3mCsPvEBqi",
  "key11": "55jWD6gwTVB3bLcKryFRjWT5fVzSg9232UQNv1zm8QHX6xkW6VYKs5pv7jmF5u4Wz18yTkwM8ojJf6CDjtCppAsM",
  "key12": "2xUpTBh2JCN7rJcxtaRtYt3M4wNagVRSCbP9KgCqJkdseG9bu6FDxUxn7eDAXBgi69n8teYLXMH69S4NufwL5zdw",
  "key13": "3HgsbtZwDqDDFEWXCu6rEpPjffGRbzWmeudsdmUFdsJa9fPwU9GPNSyth9vjTtLJ55rpyQsirrYympaLzHhoYVTX",
  "key14": "382En1uXX5KZKLD54vczvHVKXNQoWhegnuwBrsA4gxxPACAw9eJL4dgbSahRQmM5aTDjXQnGmD9teD17wGbD9S63",
  "key15": "4qXgkMs7oWpT99d81F8Wc7junp89n2JrxYS3jgPGD4UJ3VSmFhzr73sNmUak1iq34Sr9kvDWakuV1hMaePrTAGYB",
  "key16": "49vQvptC6zQ5wSUKZk7gp3S2jZD4MNUh1HxWGChQVqpmK435ef6p5vo98Xv9X7sT4swkh9sxfwdWzdLNcux3Q7AY",
  "key17": "632GsfdhWchWcFk5V4NNH1EZWdeKFabSq54qT26NJsXLpcSopyDmt43wa9ALwNPzAbu53u2aStZRpmXEWYCXH4pj",
  "key18": "59fsJSo3A8D9w6hsT9BqeZ8KbCb8MKZc27pUoWDLAYikT3uHLeKwFmvwU4JuDz5WheRsocMXq5kPE6D2deqQNsW9",
  "key19": "5dcSRnVq1WsNUsJ1u75War1NJR3GXe3QKsmHbk2XxuhBj8bPsYbMnxX3gY6fQJK8yTmTLiggww8RuXbCn8Cg6SLc",
  "key20": "GwJEJJY7DH2hqYPkGei2vbL5tNh4wTN1QnCBZEK8LLyFJ6x9bPN7zshF7MDkkPoi7s1Md7rHVZD1FJqaPcMrKUX",
  "key21": "31fAp8iMbBHfvbj1ZnYiQL83PBz8XydLNdCw2dEexg1npNmMqaXDob9vdtiT4rGHDNqo5vvpos91TsTjudMya1f7",
  "key22": "26is3sa7d241PVYYjUL2KqHg1uGxnp5W2abe8GuLkXqruBGjpPYwn1rgrSGkqyy8nX6Yyuo1vxaZ8MzhUHPcF5gT",
  "key23": "3hL48LPXJGK4KLbqVmeexRxY9KWMMSHq3pKLCmjSFC4wXtBz6QSgdXgPr49HzUnznT5m3yEigbbwSBysazVhoJfE",
  "key24": "2aNo4HQHMdW4vh8GAHXsr6v6hfz54uuLWmrCmuZEbyYCBVjuJFMB2HWaG9ee7dTK3d6NBtnQjavU6pfhRrx5W8G7",
  "key25": "3Fmdbv6hnBUVpjMNtQhin8vGs5NvSukSXi5NWwD2HebPiSAqHPozBrRuTXLgqLfWm2YVeCectf2z1j43BtqMMThJ",
  "key26": "61hdndNC4hYSLeFBKcYsQjoavyjADzKkoaYQnvuSGBo9suR9uCjbHKu372S7cjvtcFDAHSLkovAs77W2cGEjkuiF",
  "key27": "5CyvfBCtKTSNyfG85VqmKuo1KsVWPzmw2WJ2ntnWN8ixQwmFu1phFDwAtzhkDmBKG182K1ufRr6BciyTnVqwzEpe",
  "key28": "3LiSxBQ3xakcPwx2biDkQTVM3S2TjgFEzJLMEZHB6QduG6536sboBCzJA2zFWWDkBYKc6CnKQCTVthCDhvwMqVpC",
  "key29": "3PsUmXURqdeW1iBY31s7fJgHSmi9XLyTvX5T46nVEWyMFm5TZWnTyfDCEFGJKzttyPhC88TnU7MQxQEN4TLWo6De",
  "key30": "3pdF9oEcdqJdoivaw9XcfcwBaqrf99t65QpsorUR7ddraNUaZTNMpp878DsC3L9zkdbbHjKKzhswLJD6w28jLYzL",
  "key31": "2EzpUGd4toUENoEdNEcPjREBVF11sUt8qBZneJEYu5hoC8U6B2UijnPCHRmxEn9qfZnqHjFx2qCJP3XX46rBaAfF",
  "key32": "378pXTgkMtumKPDynYE7UA72DC3KTv9fFFRAutamdcLLP1qmdmhcsU7ie3n5iHH92GR9ALiqxXSVqCUB5KYWMtSB",
  "key33": "PyJmHWUHUUEvaM678EGaNcFDKuFdChAUrNabrtoCPwLf8Jm6iZDaxLKizQTk5P6zeH9UcLfRjqdQXXxuK1PdGfS",
  "key34": "27bNxHjdjd6LiVpET7mvDZZD42PreEyUPue21n7V4AcV57fwCWXEvm4zBsVQ4HrkmpQnaTKykmjWZqyHYgXyH2Jg"
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
