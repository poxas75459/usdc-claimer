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
    "4TEtQ2gCUiAv8Wc26WUm7zy3jzvVwbQkom1NPznnH26wZMFbX22yTQMdHprFATyceRvK1hbPZ2HnMtFJpSeiAikG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j8b76oSf8j54SBV9NxgQUnAJhyDEMRJBM5kQp1pcCRqzCXkwgMFBaDsFdLGn3FW3hrqLvtg1phzWKcHPA1rarE9",
  "key1": "5reGmXZUHY1U2FwEPhWWB18qtKPLdNMgrQtgoZLXJtxgn17b9hHCW5JSoafSaqyiBfR2Z5F1vzox4X4YSm8JieuN",
  "key2": "5o7iG68tCj4M8fkEAYQTg7edr4xgw7QqtTrLRXJ3BFpuP3QyBZNNWdRxayVYT2zUxEB4Hk4k6UyBGZYZ7ziVxmAw",
  "key3": "4WWsz6PWAQ8BhcMRkFhLSzvryNcYfveAKsdZgPv83rgCfhbJrEEvN5Li6zBcvmiAK7nuXQj774w51Lb1y7cYaPwK",
  "key4": "5DrS3pVN6XnpHcQrVqbLrgi1ni9GEb2ifQyqey5hvkEVMF8WWeERiM2Gd4hZ3MkEkiR7CqawxJdVopFgaWDZQWTC",
  "key5": "2ofSgL2prTkaBepdN3aNivBTcvEXoXXC62aZHjr4LYh81jDtjzg9tYDUyuY74WpzAXUmrCg64m64md96NZUu3zf4",
  "key6": "3JsNoVwZ7o3J1sD3NJguEhtv2xCVngGts7ZLcd4QLtnztTfthg24FiRoAjuBDid8CHMGBQAjPmALTPnjRf1nJj4p",
  "key7": "2JqQdg4qhsJi6nQuBGcXg7GLEVcT9Vds7JeWgoQDAZ5CWeH9aX3dupGBJ5jWNkvXtYKKjVjBGZDtwaWYysuEcM15",
  "key8": "4UPifPP8Wjg8x7t27yrUUucpg3UYFrFnDmCDdbCLEk6ZjW5FkcVvtzXNCF77Q2Y1W9qKw2DqaUHfjysHvg5kEi1L",
  "key9": "44NWdYqd4hm9QVuDbvLcwnu2bzCfGJuegXF3z6pCeQgiMphaske6fdbvgc2mQ1whkoJuCHP4J8EDiKaBxhZWZ3xU",
  "key10": "21HGqnBUQQsSENxtg3Ak8qVkfFyFHXbUVLPpwdtvKbpLDwmFP153cmuaE7RMbf3Ju3He9PKrXAjENxY5iC78y9Aj",
  "key11": "4qnAieQAGZpj4NJhTNxi4hs68zhggoTSK62CuAP4k1YTbt8bAejh56zMQMBVukN6W2c8bfQt12638zfSzh9gHJ1J",
  "key12": "JQG9N8H4Vde5YRe7H5yZiCakKpZA1TzDe6JS73BPj2o4CUqJVXWtV3iSqsJVb2gdRn58x6LKdgiSyvbsbcAQy3c",
  "key13": "5Kssvfb14Zh9L5SgKF9jeWxAome3itx2i3R8M5HUJhRu5rQirGb6sqQS6FESeJz58NeT5nvioXS247Nzm5KLNoc8",
  "key14": "4V3mDudBzX15epqTzSGatGg8cErYu67Dn6MX66fh5jJrnJDU7rA9svHgKWCRXQdvFzqvVqUSeEJ2g6BknREYp1Ek",
  "key15": "3gMT28YABPvd8aX1wBcgPmeGdyRxWgMJXoTfRtKuqDcCV74oChWa7PPH5E7h2dkvG3oF5Ck2pGo5aSctENoNc9XM",
  "key16": "36sBtRbVmt8Jm4hae6EoKLMqJJYtgQaTRA9Qgfm4q1FwQUComz3CCFoa83roXfVZUh5zsCWB3teBf6MXTHmdnVH",
  "key17": "2bYUaxfp89cHqR8uSKNqVgSc6U3cTxSfrBDoM81HUJZSiYeSJNSkVGKTT8udGnPUiR9MrMmeE6CXre1cQTfjFWG7",
  "key18": "MeRvHUJoLcK6LwUPcpi14n33HPRLwpiwdBRyekYn7nKqyB8b6XuhSjzggLaDivi91iERFfUHA781i4LGNY5zHUJ",
  "key19": "hvmvsZKwBcspShfqRpjV8s3LVosvfCA69jecrFjX6FQPRkQwyDC8JGLnU1n6wZEQgfZPkARjFGpze8f4uBrunKZ",
  "key20": "4aUW4kcMQKHyLsm79v2FJmW3GZL83YUq9J5Y4JzEbqt9wHR2wT5xdWKzD7jydztpnk4rEEhBBGnLe4dZ2WwhRDS3",
  "key21": "P66VWy7u2Bti7MYB7yUpAaZknMwV6x6HAiFt91XM8nnnXZAzSzFP63PQu3NjjoF2U5CJAC4d1p8PidrtsKnsf6L",
  "key22": "42phXEAv1hYpbNMuWvkvLjbYGaPXZfkXCqtUoDikmf2nUhnyCsYk8L8J1vd6MApNw8FbJymYKXFmxUFPyuYuKW8u",
  "key23": "2PRaDjPoNA4YU3oJwakKGQLQyZJaDacKud5aaxDXEzYKkcGRUFeY7Ku42CZAfcLgLQiv8yx8W9R8zENSDV9uK5JN",
  "key24": "vsjiHggeuUZH6bYmrcoEfi6ZmnpdLaVPk7nJtPH1zy8UWVy9WoSSV1Yhkscv7GUikmEktkVEdXm8oD7HJywErh2",
  "key25": "5d3pXKfXVqz6Z8rvf1uSdcDxzuzorGibsuFhmFipbCA2eu3XwN5pCjyCU7vzUekBvfyoZFFXMwT5RsHa56AMZ3Ec",
  "key26": "3Gn9pGqVA9g68TmhFQcRgsHzHkPwKzUMk8dAszpbb8c4eKLdSavMVPsBqibqF358n6wNhhS6VLzVp8LEW5eWt5NN",
  "key27": "2keJtV2Nex65ydShGJXzTUvwBKrUJPQGhCd8TKVWT2Bruq7aNtQNsohCCmDfqkaZrgyrCFx6PwoRxWDCte5fEo1c",
  "key28": "TiZ4xiqqLb9h9Za37EZFN7e9bE9tWJS1yVgwx7vV8XCARpHMbLY3TinjHWv8nDoJtXCQHuLC7LtS8b5bnJMSUbp",
  "key29": "huV2stTSpM6wDByNac2ytPeGeNbGSGiLkATrYoG42StThxULn64fypPMCLKnktfuoCp8xLjfj1kb5ZzHegYXid2",
  "key30": "3VFeDFCGdoAcwTTx1w3hVNG4KNkpU2rhB6ewJb2mSvfjFHcAXapWLca4aG4rygenLz3QpNQXRQuBYc2bVo1Rj3nM",
  "key31": "4ir4XCTf77PgcEpMVX6oa6LyprUjPqUwe7zqgE1cn4HrqKBJPueoAVNtgWaBZojZmXxszTQsv5Bfx77p8PxzAdPi"
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
