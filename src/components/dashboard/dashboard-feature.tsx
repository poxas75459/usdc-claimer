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
    "3DetiGy59TiEYbCxwTT25b94zMZUP7BLgRxnZR8gJvsBfPFspXzxVDf45Bi3n7GMD2o1abDVhujk3FRVeHE5fMA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BXeHLxBRAB8gr8yGnPWcX1d4aC334s6WuW77xHkNiexD28rYFquyRKKjrAPXTWScbXnm5PBLg4UW5gf8bGuAf8k",
  "key1": "4dgsxG77yyWCnXw2t9gNdS4USkHta9SiAKVPDutRMuWMhQ6X1r4GPdQzMHdNQhNYS6hFjZyU88ZTTxPqVJUs5Drm",
  "key2": "5dF3MZGUHxaZUnTetudLmUDkMpQ2UwPf9dRvw5xvsjbhsU39aHXyAYcbxGobMbxSzyLHR3iMGq354Qe8J6wbiJNR",
  "key3": "2grqRBcY8zrzU9HHF1Nzndc49Upjm7k6W7JauboYyVFieC2Q9t3QvJpZLohNDqxiPiVREEaf54wNhRKoFCp7pM8G",
  "key4": "4ozUsexE5GHbwGW6uUWVxMxTnAUfKWQ5KR8Cf5s1gmncPjUaReTh14s5nNDxX2DwYEDbsT2xHmzYnRRebqGDcMVv",
  "key5": "2R2uHrKydSyDWseBh4JF9qbyVZQ5ymZqx5ttb4QvJxagUa2jZSWNUf7kYVm3boHL5xzYkbEayCuesvTFSQUFXaEM",
  "key6": "2SLzw2c6kYtVRQsx7dDeYaD1KEbVhGjXuN5hAiL9WSCAAeGfJ9WTHhxEkD4jSP3L2HZveLJnR2gvcbWAqPBJTiyZ",
  "key7": "4RT31p43XgaFMVaWGReuB1mgEEZS6AdYc9dFCHtNYaXWgmMK4XTAPESXz6FU9qzKXnKmqA4NooBPF8P7TfqiJBVV",
  "key8": "2ApRUeRPbhCfB8K1EBRC8MMV41tqVKFRqcaZddPFYzUf1RsnJyxiUpVhZnvwzpd8AWKSggqM7kq5UKiL4XF46Pz4",
  "key9": "y5JjLVLwFzpAhcvUHimFqhJXmYGCKHdKZRKJEZs2uFixv6AVAuSmNBr7rCr4DeXQH8wKVzYkU1rffTCr4fuTbgY",
  "key10": "3tBG4fXs5FFtLRjK2qScBQRM8mqMs45WXhfZDxGwPkM63LdnpuHNFLYCWyWoBtp7YxJTd7NFUp7U84eqqE4TH9CT",
  "key11": "3Mhh6Zg2KNARuHK1WiMz17JVBNzSxsfjEFZ7W17cazDeGHaaCcEeS19fCa9Q8MMaNYgBuJZKLeimtLeJMgZXGvZz",
  "key12": "QN3GYpedtbLp97txm6j9qRNUTacHdQetr2yBjN7T3jaiwLtENXNtRzJVnQuVC9afzX4XMi8N8PR8dB48uTJBhMP",
  "key13": "4eoNgmzYa1eBFbWvCfSEdbgr3ydMefZyJVPRokixDEdeb8uhzJirHXkd2hQSAy4VhkmZXVtLMwvpSkbMDh74pyrg",
  "key14": "55qDTuF96SfuYjx2vvXZwT1eDPPzFxNLRiVzEyaGQcAuZwn6uYUGwkC35rnvXEAFXjeJTYFWp6AsKtWw9dJoXNQN",
  "key15": "P3RTZ1a5vwThkpwD3y1kbok9asPRqsW9VXSEJqFCJqtKCqHizEBNkBZqvTQPjJbUWi5nS8AYcFciJcP1XPYFFM1",
  "key16": "Dc6gNHUNpRDEAf1oCVxxsRzNiByebvrbZbiXggMudszrvfNU7q5J1JQoT4giWtvH43V6ba9mQTZpZVpJN3MTW5Y",
  "key17": "4h3FhSb6nGoaLT5NnidzPic6tqCJ6zomC9uNBddiyqYgsLGEGhDYPnxitScc8NjKfCi1pbAgwY9B7Hebz9ezXjqU",
  "key18": "4m1y3R5n3cYHPc1vMTnsG4nKp8UWdrDoHgXksRfaBsvUxw8KdW1HTJ5fm7zEaRd5HtFYuXuAtHttEqLB1NTg15T6",
  "key19": "2tWVdGXmKahMFNNYtk58fyqX3BDAmgRHkZUHwDXsTzgjXaxLx6v561hNBLHFgAx7mSZmYE3ASwbQ3rMGKmNKXCcf",
  "key20": "3j3xvCwW48nmZgub6ZUA8DFN31rnpU7DhSbFiHMs7jgN2CLPWwzethTtCNVifYMy3BS8E9nEpy1vhmiLJeqd2wzD",
  "key21": "3FMVYZV35DqGLFdEc5Bpu65u3VJQKN8vKceMxj3iZpq5G5rTz8bU6bbumhLA8CmaD3tNGFBypy2hMB5PcASF9xw8",
  "key22": "28ypBHMetzxUwsn8Yn2h9qgr9BrZybrLSE3zYa63A53SrXESwm57b22e584szijwSETobVB9MW24FJtUn5R2hmeE",
  "key23": "2TQJzUWrGCryR7AgKwB6ZQ6Rt5huMZ1AK1hKFipbzSdkAFkjeX2UEBy4nh8KcS6zeLyMAxEmncggSGNdxhwxZ2Rf",
  "key24": "3226WUAXdXhBWLKDwDwPtKhXaFYfUQ6FkNQgs8cnvpUo3ABUZRMttrRPoMGCJhEsrGgBz6NuupYv6mDn3piUsdp7",
  "key25": "2KN3oMxyJHkwcGLfakMSoutJ8qmnkHboiYhnCPvbRRYZpeXeyVdcePHLbLGjEtUDb2a3YmrEabizJiND69z5c6SZ",
  "key26": "2zXQAFbyq3m4sV2cYSf9J4BMymdfbAWQgNHsCPRDyXjYxABfrfyTWvWUDsToeTCHojHzpct2TeEcHgSDrcK5QB6K",
  "key27": "qoYuQGMMNP4b9zGVth2UZUoUz5sdtJ7SzMXmeTgF5GZyzGXTQEFv1oQ4eGsccvC6xALdHpFkRTkG6vPD4nHTs7T",
  "key28": "C7yrPbBabs31o9bBsHD6yhBgXxsdkGeSWgZmw8WVnmFEhpq5dEib2GkC9jVKoHZiEBUZfHpvHHjXFPrht48mKfQ",
  "key29": "42QZdSbMDcBRrUY1SR9wB2zMsEGobP1vSgnvbpBHwwSRNb3D8LAdtu3qMxYFvQwUGqzK7P4ZL4eUPW7P8oUCztjD",
  "key30": "3YHE8PqujVJbdn2u2qu4sctEEyroFgan858Q9Ae7RRkXRkBC5a58KCg77euMgaQfGZ5Mx8yTuZ12Sp2QC4zYzUvs",
  "key31": "3z9EHftY4ndjVbZxPM6kuigyFcMiaP5YJULzwtie3ntqzdnphVKjbeWrQqVawNmzkykudr318P22hTx1JFSGrucx",
  "key32": "2zADdRVHiXVrDu1ngn7JBbvbdo8ZuFPspssUSkLApp7h1XiBczWRUGY6DTuzXXr5DMLB8MdfApLxEJ8bX6iP6PpN",
  "key33": "pe1TmRPbQVBd1NCUc9HxUXkFYcf2r2ooVLpZVXemawQAwbccznnFrxMecNBKfPK3fVG85qxTQd8797jBfuniYvg",
  "key34": "22ZCuqwDiUs2Y4S7ki26MVRGw82XtzJ1grZ9dGxuC8nQNhr1NCQGkcZVycs9p2iEzyQQMj8ooVWGYWhnaerrMgZM",
  "key35": "3ZDC9updRHJUbWPnnnFipJPu72rWxySWgGXXYPY3e9TUNvtgTF1zgxSJs7fsEWg53zHWZmxTG4iqzBAFpa8xxz9f",
  "key36": "4utj4e4dRMWYt3QEhtWgAtDFTmgwSAZrcKuxeBt1C5EEgpmLdHoqCp7txbYiN5vuPuzfkaqZjTCPo8XCMKzwAegL"
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
