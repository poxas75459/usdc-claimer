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
    "4eJUTvWq2zM7yV5ZcFWGtZFmKZp28vTcpbqQT37gmXPNu2UNR6hsmRo2pEKP6VxgjPatqpdT2DM8edJ4dNvzNRcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F58SpDsQ4CZ9ufNgKN74Vw7nzUip2Hjc6LFd9imoGoEm7dtQRdQXkZgpUoezMTdtB1zfWvTmqWMPwzzAB2QtXwD",
  "key1": "5ibUEQ7ddvcWA5dSstAaBKJ7koDxpw3WerJPKAoyJKQNi3TgAbJRiJRp132w76vM1516Nxzbb7xqyg7evc8Tv7Nc",
  "key2": "5jQY417PLqwiYqKGNkjoPyetPQfEERQmc6a4EpVzK8134kGbBUsMp6meuzA5oRmcDRWENLWvvV9bYezRWbKtXboq",
  "key3": "4G82BduYTmvyPTfUq1hN4qCwkkQR37Ac9YW1NogFV1W6P4xRM4u64g7Sg3b2DM9CLzetewbGoWYQDEmr9GcYcyEr",
  "key4": "4gkKdcSmPGRZe9U3m8zFqdp7qc8hm9xVzfiXc1T9ttdHnKJis7c6ArtookrkrAYA1arSQXCpPHsMz5WJRABKdfFL",
  "key5": "59xzVo7ZTYtjCJoQwD8vBaaJve9afPwN8cvixG5vUhEPRLfhgRPhtKSzeiWnjRZgcpvCDjJWKN1CFPTnNiNzfAv8",
  "key6": "3AJA9xJ6d2bN2RVbn87Tbeuu7nc1EpsMUL89B2UkyVToJro4eJTAXqzhqfbc6AVyxGG4nc55R6GonaBCvWC8qnJ5",
  "key7": "2oyYmRtgYJkoUL3pwEwjevsMw2bVqhdGowCefTm5M2nqtWuBo9QpWTD53diwNgHVi8mNuPxyME8B3BYRJtN5hiXK",
  "key8": "TuaGjJvPLMzoBrCXjn1UJTVyUYWFiWPihhQvchaZTErEBz3oecdzZjtYVjwGPbjoM6QNvEgZQxRCKCD6mAE3ciF",
  "key9": "DDAkbbLYGxBnRv37mPnmHAxrYfY4KBTJ7fF2j288drBtGE5NLs2zYK7AQfUca6c4f4EXaKoeBBCB1aKndjG5Lwb",
  "key10": "4iQVv1z26xMgerJKrDCNQg4d8kjKaPd3ErHEV1eAS3RQTYim6h1KMkJReFt5QodQHEN8sE9ogvkj1mTE5rSK34KD",
  "key11": "4HdWDbdHEf24HiJiLKXqwJspHeHTNMsvxskMu1Bbk1DjzJ9njRHAkocHuhNdsoKApJsf1G9XVw6nDo1oQrFv3wL",
  "key12": "2B4qmgAsXgf65gfU9KknZUoDecfVp814pnq4Tie8Q2WdRfUiAqU9Z7me7fwYk7yVUjJKE8ZHdfETyVjuWU6uieps",
  "key13": "4vJNYx5Ly7ihqsFfFnBMupbhvs1HWgdpgwrWsoT3jJbKJbJ4BBo4GoXzTLaZouyAfsBXqnyTj8MaaAZJTAdGaP7",
  "key14": "3FkM4cUz4p9KhXcTBWzuZ1ecbUTYzHun84LRku2b7i1npzRw9sNyND65fn1ciK2L2D422RijbLAsJRHnV6kt7bz1",
  "key15": "5ZuS35kpmd3qYgHyaaneLnY8QAtXQp5Z4xR411UQX6hW8GDMdkqJ4VL2bB4AJ8P1AvGFX31VC5qTS8KFMjvgmmME",
  "key16": "tkWSWj6D3RbFfqhFLrUg8JSXPavRk17akoj5SRPNNfcfJRTvvJgzqv31s5Pq7xp16sB59uTJkUwpQzBd6PFx5fQ",
  "key17": "evi1bx43WQeC4aPwe3vapqJ46SPZqjUCsud9nidozLMVxbcmD8LyahYw5Z7RUERSHNJiJPP1V4aXkVHvyvh6X99",
  "key18": "5Cc6x1GkLUWhdkucRHLfC5euFo7u5rLtY4d5Bf3NVB9CduGcVoiBeHtrpeg9mZFJ3UrcDVxTra3oKmBwkZSszvbK",
  "key19": "4jYzgpk5UcC35yXp9qttWxHoe81AnVAHbwBkUpaMt5oowtCSkjDA66zd2tJx32KqMQhWt63f7p49d7oYkTjR2okf",
  "key20": "4UVv7dfEARgidirtsXazAwaiEbvFtw7EvyfMXVnVHTnXWkMFKugkGAkZJMFxAKKQZfaRZ61nCMW5QQQGuDWeYaPr",
  "key21": "sZ6pnkR5xL1g7UNmK1R5uJV3XPPrM2aA1tJvPSEY11gAygqRfhcdSeWkYi1UcHn536S8mhUxfGDiskoS1S4p4RS",
  "key22": "BLGsDBCdSyxXiqjJhVY2nXVJBkh3jJ7uqcbLHMy4XRhbJb74qkDmUgrieJyjxcyt5QrCbvaCLSA2W8ovvkoMuxB",
  "key23": "3Jq2yDgVCBMReWcjNoMVcMoFcNuiecJopCEMWAZzHfVRy4msBfy2Q1kPQy1En3n6SLwEPHGPHSbTobwK2LZY3DNr",
  "key24": "5rup4zvX4BS8h2vKpNE2XYHYqSHkHK86X8dj5UXUXF1jLKsJPC2vZrSPZ6rH2kAxKj8Hjh5yTDGXvfEdvkMdrkmJ",
  "key25": "4wfiCPhdfMv2fPcMux5BCmj5cNH8yCd9rU33H1m19ds4jgChL61n3eQofRMdLxLVrT3TVNEt3tJ1wZgNKveY7qFZ",
  "key26": "5ifkTFJVbBPRShvjjszQR46rjsWp55PzfZ6eXpLgTCU12nQhHDrQDYbGmnNokJsLy3hXtGMpkiCs3w3MrvvDyMyK",
  "key27": "2qh23c9A2dai9ExuoKUd3pAmX2JCLeUYEkESJYUy7NdAKJ5THNSAgUv6ex3MnLxaCYkeDvqMLpCUAZGYEype2sA5",
  "key28": "2h7eBaNuuQ4EuywNG9sWiPcvtnxejrANG8M1i63oPtKvqNNdWzZYdcGFwPX3kZfSjJgaUjePxGWxE6fvnSV2ejkE",
  "key29": "FCzes9ZNeX3vfyzfwkRgx5SVrDMaY57rNKomp4Amy1zrk2ANQ6cmZbm9tQN5YeUxe5cYPY4bUpY59CSsQ98QvGq",
  "key30": "Hxi262zRAWJ2s63YKQ4r6KEmE6XqhF9JmbkkfX6WtdqwB9qNfgmETPGesFNotk6FrZaCBhyeKahkcndsTMzXH9w",
  "key31": "mqBE5Gvv8GspSQRSdvuJJtkuwfcF6qNRfkze7WkSP4vvZgXEhET8m1dtBggmGSx87cmzgDEsJ8Z6ZfN9cqzyULS",
  "key32": "5XGbvQgn1aSymJw6gEU4kznYCZyysKNmHTHv7iq3LySQowLLEK3mSDEf8LxxdoPGKD4DF7ajmL3tQcyK6MzaDEGR",
  "key33": "67hR1ozYC1mBiQfSSKkCDfKSQjhaP7RK1JtCzRNF9vFq1UxNVQ6jKggQ58iu2Xvt82EVbBYnUMFRjEBifErTxorE",
  "key34": "4wnLb8hhbm99VP1jms6QjuzhKPSbDn1JGzAEPUNX8fthJauvui8VTaV3P6hQ6V32EPznzaPFo7AWEFSWGY5KrQsU",
  "key35": "3yx8NpxCZvV1xF6uS4RMzs5r1ZXHZ6ENJSHWLeMt1gGLNzqphCRRH8J7oAHRz5uyzBqedpcgc14qkf8suJNa39dh",
  "key36": "4bx3nZYeXksMY4nYWocSEj8iQojSafshggTJtLJd3CEJ9c2zfgWqNRnPXCMACCuft13Aty8eo92wjLasFkiv6jSj",
  "key37": "4wKhBjj1z8tPqGchnagn3LkTz7vtTwhhh6NHXu2BWAqZuEoQ915DUb3qzQPuTZcgwwUjAyco16QdbEdQimwwqu2G"
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
