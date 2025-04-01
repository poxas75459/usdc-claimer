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
    "5cZNKVCRW5ManEjbepiDt5nUzsEVGTxBB5yFaKFBQbKZT7qD33Pxb8opEKn3dSini3TAmDLRTc4tAnoePKvb6swF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HpMymBQBT3XprSvKtxJN2tC1btJfVMYR8XoPC9hdR5TKGckq9Ndgp8Zhi2FZEkmcXVgoKr6gobJftpxL7HyNJ9w",
  "key1": "4oaydjnKDfStgK8LK9UJWZwJQquVg6P4tW1pTPBwsqeyWxcVDf5oHq2jhQj9VN2sCdH2mSN4cVLj62yy9JHodwSt",
  "key2": "4iBjbmKCuUfKH9c2Hc1FYJ3vKKzH4FnkNCKrxiwGsXtVT1FwvWWvdRkMVKP6q5SZKTEQ5EMYD6q2iiMpSdG4sbft",
  "key3": "2J1Zvasm8zJm9MWRHZoAQRYYggBpiQEwdzVFx5i8ZBLz1gtxF3iRrkgtujQ4z9Vxuv7XGtnUBXKgXqtsHCiHiJdP",
  "key4": "4jRoRQmTeoTZExqqZmnbpYdJxD7jdimVfEV9oMi9arLmUi8nUqcyitx938SX5J2LU8y4LeLVSy86S5LJhPqC7kWS",
  "key5": "3HUtN8dDjPpujKywHiHsnQbDTiBHm1Fw6eGjiw6mFcctXPbKUgccyXR8KbuNSpsBwK8eMu92HTMidLtRmm36sWXH",
  "key6": "ziwj73c1kx6f2S41V7xkCSst7uBpyXuXmWTbKPp3E8h9x8E6yXMnLoLn7DXJGowu6B8k8RKwZxh3YezkHnao3dP",
  "key7": "2sFZM8xk3rSCPffrNpYwktNdQsm6idM7GHZvLcauVkBH2T4NFYqvyLxPJJLo2HsC6cnR3tnKNSEPGHNF1t9XYmev",
  "key8": "2jLnWkg8AJHE1FpdY4sjRtGW6JhGjuG5wBbeFbgSUQYKNRzuMLyvxxc1x8dr3XZk5vMmZxjE4VVwYEvaALRceQcN",
  "key9": "pMGvjnb4fDdmQXVLk6nhZryjeHt53cZKSmDUvV4AFkmom1e6dz9Qfxt5CjHCsyH7B8Emq93UzW2yjbvr1MXkLuw",
  "key10": "DGyPiM7bKs9bSanwhDVhf8ZYqVCayvzE3MVen4AubmdR4SE1WuBgCV3XUjeicnvrnAboAMjSADhMxgD75Nh3Vaj",
  "key11": "3bTbTdAHCQWJuU42xDC2nN59fsCiUYqmZGfS9RFJ5u8MYTtXVrUnMeVdVus5MqhZPnojiQw9U4z5zPfnmXCwxbJi",
  "key12": "5GrZPKu3BshPUmBfeNvFCbiUA26DxxsdnJUhEZdnsapB9noBHS14rHjc8JbVqf4b9uGfuZP4Z5wxHGg8SkRd9uaH",
  "key13": "vrysR7DrD5fhE2vQ9hovRpcAftWE79W16er587yvqjhMKk8TnWjmeaJo76NdHZLzcjgF5GQESeV6XghLACSVtLS",
  "key14": "3Dhr3iZT3Evtpgf2M7TV2GdtWYevUDKmASXGt9sHbgd61A64fgn5ogEhPe1WTAN32YYVmd53Quos6f5vSGt1KH5T",
  "key15": "3yKPVeXKLmHNAyH3arEt55kchb1dNiSSN4amHMBag47U8jNwhsjKxiLV7obahL62bPfPR3PPNcAsexyfjjjKFdFW",
  "key16": "2UjwWvtuFQCbUUgAyWJV6LqhbqKbMm9BguBTtLUQw9XDb52yC5tsv9foZEcPKvbrzqJDvtqYrCEQ1abNjVc9cRYx",
  "key17": "57P63syhkxgbUvCNu6tJrx8hDguq8Cwv9H4Axx2BqrwVdJjkSFK9VZZEXvLfanccXgEC7MEFiP5Qexr8nukyUfU8",
  "key18": "5DLwDE1xhrVxtar6bviyYsKFpHY2Nau1eaGLVxejjcUypj91akwkibc1BdeL4ixYVQbfNvNMbUeJFnEs6meU3dav",
  "key19": "3hSYErrPzYzVPHF1kdgTsoVYiJ2bmbfgmNvyUy9mwLyNLe8c1M8mVFH4vvX3J2RNwUoCTt4DHEtwXgqbhgRVschb",
  "key20": "55fQPis4dmvynEXRFPaXzakUiYGcfr8KcerdrvPsBZdMonyxLmg4epxkRRN9smnTbJt9qS9ni2QPjXcCMBDrXJJN",
  "key21": "3CYvad4gfoMacEvsJsWTFTQG3Nws3ztxCZt8uqnBhLStSvhBMvY88hsziVxkfpH8LjQ5vtT4tg4oHUXzXdFo8XZC",
  "key22": "4qTH6CG1tRmH19jubtjjYzQKZ6SEJmApsVRNycpr2y28MM3dBgSBdrBH2SF3WXcWr7525jyyrYc9AtU3K36FALhJ",
  "key23": "1KNNkcc3SzFVn37UxeBNp1AvCwQtQ3VkW4Bh8R2S2ix6Psjkfv8Ttsh7BUmHLjxkqZUD9TEUA5ysoMvWSr4GbsJ",
  "key24": "5tDU1t66VsjTo7ZbHcDmV2MevtXf7GxEvZdnBvpGdSZ84uvvwQkN2mDMAQ2eTa9dhDcuAoPYpx44G58Qen8AoPs6",
  "key25": "bobHhayKchMobgvajnR9p3mV5zBM8zqmMBcWEd2sKY9rDjF2VDLwcrPAMvekk7wtyZvEdDoRHTqQDg8bL5hmrqp",
  "key26": "sJWbp3bbZxzwdq5yJpQBWejzwBwLJSH86Tg7a2uE4VL5MtXk7HjfuqR4LCuSWWqYXCxjf3g5wFLnpfq8zHgon9F",
  "key27": "46Jk4ksqDbqbXrTaXcbKFKXf9JJtx5A1xvcv3YEJExpoQVnfegwX8ixoSbfS2Kfk3t9BcRDDxx2UN7QrR8U9Mo82",
  "key28": "5ip1ys1VqRpa8LJShZNuh9BmGeLCcZJK4XE9hvkETyPazraevttyQvEmfh5aqKrDT1WcNsWTjPVypS9AigUMGdrB",
  "key29": "xveAcLmjL9mr7B2s4sYG2pg2TRU2qCNHjgzAio5rceJWTh1sgCwF75UNzxQWsc9mGNAZYUaXH2cooCwDXoBp8yb",
  "key30": "DfwhrMCoQHUsvcjp1hqLcYAKemYhQgb6FJjWTbpW2dXseXfwT53Ak3JWc2AHBT7gZGzFfFS51Vn883wPs1MLMTF",
  "key31": "3Xw7d8iuC4hnwp7N5WxVjjGFmpYUEspyKULwMwXSYxPGf613VowCVhZk52XVdS9dDhJAUZwopdVNHKaWcdFV6RjE",
  "key32": "358pePfsVUijeXinVbcVP84MMAu7Rgy2kLUcWdtSemd4DV1JqnunoHMrRTsNUHsmnohQMLA6cfd8Y6gSbtMWuS6e",
  "key33": "5xTtx95qHxfaVoCRSXrzQctDNwpRkb6GCrDcmgGyAqqWK9fckjBdL5BqyxYz4nTRrg4Y34fPks5iiFEJdrU6LiJF",
  "key34": "2udVy5Lws7DZYNCxUShedvyivNfhwpGs6MAhGAR914z75oD5FYayLPXG61dYZNnsKQQrmPwmjQ92xyvdJd226JKj",
  "key35": "349Fk3TvvHL9SY92edcx9yek5ujr2LwRXQRCTupGnsnzrzVPdysomc7CFGXmHwmZq3i8NjGdzbyRPPFaEHFbHb5R",
  "key36": "5iKUehscTQ8ngqxh9LWMUNoftD8FTzGjpc4zfYhRJv4Af3UCfKYuhYerCshwXCfPRSZmPxFHsfeFGj5y6RBy4HNt",
  "key37": "3hjSWfJMYDJEL3mG4Znp3ojy33ppDXhKUatsS7uBKDMPVYLa3pyhF2tEZsEWYbJdzdU15E5bsJbuqy7JpNJPqsjt",
  "key38": "2Zr1NCVnzahEJgBqq8WDFhvLjSr6mKtBJKfyZjRDUY8iJumrkjBHQ9wJ7aGjapZmcbqMgdaBqAVLiCefj9Yf9aSM",
  "key39": "5kWgoY4T7LRtJ9dYcNzQ2kRCmRGtWvQ2MWxBWqt2XU9WhivjbEj5Jk9iY27AkXALaBFzpkHfPqc8vzXAvpCKexJ8"
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
