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
    "5XJRTdK6uSotGNEoZMzLJvpH3JSvqgppXD22L2HfuWoh9DgJYNN6CydtVt4vttRd2CKJMHzEK37WPT68XwVYdf2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mdsvkv8frsdsERfhWZLp9MZLTrKsT4Ch8H1MqUTna3gqGEbgYT98ZKUQFBYSqppTFL7of4xuXyDz2ypZu2dudLX",
  "key1": "2s37c8oGm5Cjvidg9PiPBVxGsE5PiyELiWt8Pz3ExRV4M89v5Vvvdv6T5dLMSstCu7W9f9CYvLEbAsuBwnwFDwJv",
  "key2": "2xjtnPRaiuhLp36t9DuC9VWWnT6viVTvVqUQr24SeC8BMNFaM1KHxTFKvgWJZa8LMmF8QaH2fDZr8ZS3g9Q7PGay",
  "key3": "5ukByd3fKQcXzfu6bzXvty8J1taGmi6wiHeS69AS3wNn5grcNrHtfmEumBLw9xuWex1gN9VFmvBHfcuDGJjgNjoE",
  "key4": "3TirSB9VLWsas7Adsf4g6CrEKCAJbDmuKtagPWJ5atN4ZcnpSLPykT1NHeAUVHhA4eNs2VJhYd1dWn8K5CHNczSc",
  "key5": "2AQ9vJ2MNB4ruCGQioUdaBnVEUCW8QiHQZqd3ZJ1DuHGXdmL5fxhbQEzhvosaqLhea6vQ27QMSEkv4CDzGdtwHxL",
  "key6": "5xzKem5Fpa4CkZKyPWUWRsqAGnWyQtmbTo3LDxCdEEZCqDcxYWpU51SyQWRzBJ5B4AdmxYGwSArYZWGyhqYSmL4i",
  "key7": "3RkUdu5fm7F5MraYURAKknfFu5Y67WYczXJqnYuar6NrvWozPTMAu9zwRgXKhFCg6FN2P83ffLzaqdh9nMf7qTd8",
  "key8": "J9qECsxTR5ArzK8o9vst7UczzY8PaGhxjJos4yC29obrxS1zoXLCCAz1PuJFu4reTFABmxertirXut3niyrPzWb",
  "key9": "qv6gackKuZEaYPq7gYDW8AemhXVidz5iEnAATVgMd7TiWkYBSAyWSYYraayEAbWq1WAVgumDL2vvhhoRTnXDP7R",
  "key10": "HeWb87dTUx7uAopqkfXaMgbQCwnTB1PFWghqo1uWkcgV3TzsqbCTEewX4WprTJwuVyVkQyMpC8aXx3UC1WuvBWH",
  "key11": "3xYZKU2itWsqUgoSQTGEcxix7ky9Le8oKXiby5iuuMtHq2LVLZNEctuYPF6noHvynadatXgvD9yqdRvG5N4eA4Ex",
  "key12": "28PxzNR6uby5M3gTQWMYyKHauaL5mH3mZyUUadKhKU3Fi4PM5Lnxo7C38TkscgUNJt5865priyjnXhe3pBuyrMqx",
  "key13": "37SeX4CAS4zVJmw9o9coqbY6voAUWDznvGchq86VWhN6ic45AyNaE9EsFaq3sDk9BhQLJ1HKakdR9cJr3G2R2yS7",
  "key14": "3rKvf637kfjzTv2ez6bbXDWmEBoMzAHwVoM9e8ibj3YjUXRrXcAt8vTbNJ9z2MkvND6Z3h8pfg3Xc9N6S7gUqAxT",
  "key15": "3wPXzoNuL8J9ujFBJrCoKQ58GewkgsSeFzdhRNZowApK8ywFc696mXgEJCcafdwf1W351xBg7TXE9mXnWskxUvz9",
  "key16": "6p7Qmzch3sQygTLMTHxtADqbsDDYGHFSCFxi5PVzSbcjk1Z7ZcFM99JMowG15hERmDc7Nu1oMZY8kSVSVJSCJQq",
  "key17": "3Yx73KAt8WUijHQYbmidCW2Yxp7BSjmN7HTCJN4ikqtej153mcgLxiV7f7qAMac7QbGadLytzregffnoZ9S2i7UV",
  "key18": "5uR4jDNXb2Hsxmze7eVsUMh46mjtMkkDNH4fYfJy2s4QrsfVVHdwCVPapa2wTyBeau3dmjgqjpfGt3k2wZ7oeSd2",
  "key19": "4WwDP2Yuzf7Z64NgQhtpFkPcGFBbgvzqGnPB1bv5UrH3qjuA4wdAN4kvJ17CrNEnYfv3SiYfExvw54544PMCQec3",
  "key20": "4uAVmnQnbkHfBhLeu9QY1r2EEZmgFR3JCzh9CYXZrL2iRQScFeEwm6JCb7mK36xpazSGwhPtWvkpy8vkRgNHt9Bp",
  "key21": "4c3VsdiS6NQHAQvqXhb7tYucxqUk67gsHSRHDgmi6JRAf68NbHEmHGTHvvXoD56UVPP8cLjGgRzjyqh32RWREFoe",
  "key22": "2guUFhsTfzUW9TAh34m8441r1MtTgL5wS3sjN1dtmQKJFLUH8ePTiJs77Q7G7VmsF2EREZYGpoi3keScqbXdKTmH",
  "key23": "5xSvLZgnPJFAupLFb5mFUryKnrv21wmM5BePiDZs2jREfmkQnTcyELj2YdHf1moxrfpwf4eBzCX89gSGnYaVEJXy",
  "key24": "66Ekx9ukLdvYitJHujB1tM4zpCjgjMk6CcEWDg4HB3FYVVQJYuRTciyzYTqjTtVzDw3mAfNhb7Fcggt1Rg5U4kXA",
  "key25": "5xVaVFRAqP9BWdfPnY17oLj79Gc6AQiQKChxELM8BBjATKMvdRoKiogPQ1gsHTGskfRGPYEoUpgTvmLrYDVoFWfS",
  "key26": "TaifPbsaE5EqkCKczQRqehdrhDVNRQUNYCfY4BaDmtQVVvbPL3vuENJhRhktNBJ7h4y6gwiEjMLdxM9WM5U4ZJD",
  "key27": "3tKDq7Yw7Zq7GewBS8AzFyzXK2BAyFGmMXpTZLdUKFU1ogoVT8NbPtb1zDxwXdxVwdSGFwziw4t8jbBi9ZFYNPkH",
  "key28": "4PqLSA3PJRjANB9oy6uDxfdznqi1cvzVmE6z3NH5jpL9WNiQTV2rWi852f1yJaKteYifiHpiv8WUYHsa6nJbeapo",
  "key29": "5yCgJVVyxJNEPf9fLMcdWmcvo41MxPk83uydFUbTx3wX25eT8zVhQ3VzPb6A4mYnhoTzYi9K43vJGgQwfLrapZvE",
  "key30": "3kmVFT37u9FM8EzQYahivNPtApC7A3JgqFvTWhg2B5k2y3t5ppKJvNhFuZekk9ceprukRRbeL3QAjo9KqdwvP5R1",
  "key31": "5iYawjdCH7RWgdidFnbTHbDS9UB9d5jL4Kuc9gb94Y44LhA2Xy3y5gxoGjMU7GvUWG7T3sx8x3oSYYsYqu3zr8Nr",
  "key32": "2c6hpcdeUvopseKMWSJJiv2pwtAjtxSeetjV4gUovubqDLQyPmvzEJKNiMPGYeV5SDC8ZeRDHJWpCkc8SxinRHtY",
  "key33": "HhkAG8dooF8WXfXobTBM3iaHcoBT8j1duDXRW91mNi9L7FnbzUthygxUxwHjA9nrAbXodq1cGc89AuaBVZRx9MN",
  "key34": "5qVeasTuZmizCRJZgCZAqjKmRTFjGxvTaXCpCYjt8Uo1bbtgzND6qSoaEJCoF5qJXuy7g6cbQc4ydXbymKG6yanX",
  "key35": "2Q6mNXPXFdtwSJYYSnxBjzqbjE7PcTVbAU2ZRTK3ECpsPKfHptwGDsd8R4hHAfG24CU7mu7jCypcYa8LozFucu75",
  "key36": "2Z2mi3mRQWTuVsF8HyrbaCDWmYqakW7cWBmrBzTHhrWDdPGQos1kdGbgn38jA3Pt4ZEwqz6Lu6b3cMV9QJ6oQCNL",
  "key37": "61H2JL5hyszAExrMT8urwXpjjcBAkoiwyKwpzjVDU6gKL7jyDUYvE8U5F77ip8EpqM1sesfeShSHhnCu1dVwXNVT",
  "key38": "4kxHKRGcC5DCHQs5EeeKYWTLUreSvbUDGkgVpchcrWAnfFdRBiEFbBsNujaPGZaaxeQZpoTfHqzSuQjN68Dcvxim",
  "key39": "3kLWZFSPJDnjchdbMzNjfqxwxZUoed21xV3m3Wx2g66P2sT2hVsrdDVRzFJzAgbZg9JhtpK53fgjCkYaULyfs95K",
  "key40": "45ozcVqzX3YEoFsU75UcrrmN9Q4FprNLDoqStuj3SQ3Xgj1mJN4Sj5rFbvFQpCk3wNX7fchdNtYKaXshWz54mxiY",
  "key41": "4yrbNPuY9KJtpJdWTL54BUwxnJPqffgk9hsmMSdazL9aE9Pgsnf3E34MszMby953YZcy4rSpMrhdMbazyv1MUA8t"
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
