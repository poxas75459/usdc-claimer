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
    "4REcWiSHDVFh8wzvFz3xow37wQ6mNCJdQfE7rHbZcvZTZ5FB5PdDJzY7hqKQCxAaxiv245QDBPeMHLuzitkizJkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CJm4PwYXr9UBy92TCaHJVJdrvEsr5njUVf4KJ5TgTNftyVid9krohEWwymnPWGrEu8xrcA4fnxezdDXo33MuejV",
  "key1": "3nas3VxwVJvpgknpBftkqbTwDCrcTPbrtxLxtvXFit7WgBTiJ8cFyv8zt9U6JCUvae5VaJi3URg95eDEvW3QZ1dG",
  "key2": "2AJxqQy6EWyRwEMeGcNGeg8a8mtkt1g6F1ayK67v9baPuxz5qhwbRyTuvC2G4SZZHoRviCd44WCCn8B57XC5Dwio",
  "key3": "KKS7mpx8mnYvcKAsV1iRMSWMfMGgYLkNmRuiYieakrTMQnjeu4zq5nDX1STQYn3Hzjm8CuTV9nV8eGbtuG3t2V8",
  "key4": "55gGNFGUYJRnhdvGoDeXpPYscDBA87zDFc1ny1ufUADXC5NKoQH6ta2dMMAFqsSTVppuXefYhda2U3CtciQsj45",
  "key5": "2KAhAkLCFTg5MsjvSAZyL4x9bzt96B69jmJG98uo12oBH4Yho9t3o5NqdwWQnmav2LbC8sTbqXeCxP85whgzDasV",
  "key6": "3XASsV9N1nN3R653gfB2Ztp2se7fVHGrdBq7pDDAKTytshyL2gVUEw69dh3UPwc2bfacfwmeEsStq6HmqH8rox8Y",
  "key7": "5QpobLyvD6ABQD9theU4zHK6i8VMaXChcCFHe692acj6ZaW8vGKcj8uZff5tY3BuFVa6ofoWQXeL7asyHfr6CkQu",
  "key8": "5ZnK8P5aMRpYX3R29PrnyX9YNjpe9j7fgHcW6rA9Kk8ukrYGsc97TRdgFtHFskVnW1M15SJSKht8JgPhnxWAreMd",
  "key9": "1CZi2PyhCuDTCnkkHdZXU9TuFzKTdspofFXKZwM1ZtWBb6Ze8a1XKMSCv8xVGduD233FMnU9sDaSvJAHmGbGLGE",
  "key10": "btqxzd8Uh1wx2pZJtPhbzWjoaeqEEAhgDNDoLNckXDW6WCp31zf7wuUQB8Fwf5mamUG4LT985Wpk3bvBZtYSUU7",
  "key11": "4nsgrHmt5M7UHgUA6vAfYxwkz5uwrgYxeYVjDsQeGHLFPkeExCEuqQz4UxV6euQNJLaQkbT655oiB7SesJZardEf",
  "key12": "5vTxXuv8Jtyvw77MfSgQaW49p4ahBis8wDR74yhJZWtScA6T68Jcpx4tZwB4uC1mX1TNJfEpRYMAxgi4UUTn5cr2",
  "key13": "227Y1H6UrXQuwmfdzfhaNH3W28LSZTuAGTwsavsuqSdfYvPsg8qmXuWH5a2Jx7Q5Hy6MTMgnrmGU9czkZhaXkuVw",
  "key14": "5ZJxMXTzkuFVgCrfAjtaKE785Rn8EVvHmBUJxc9tFcioFoD7HxYsbXas48Gf4U1odkHtNRrKyU7mAN37dZafpVLd",
  "key15": "27pu6UEe7TMqwqRaCest1PQsY5kyXAy3zVU6WfVFfcFR1gUpYNsxuzoACRwvk5aNYwqqbrQGmrwsoFJnWxg5e2UZ",
  "key16": "GdxBiAKREfgftcghGELPKuaqJYZWHxPsAkLDEfUeeJG9U1gjDCPMEjsDAvXpyDxzYcoUo14FE5j7kVWQaNKWB28",
  "key17": "5thgPoA7nLHSEuDC2rWK6HwmbCHvBpX5Fc3vkPgBeq15HWNRVwwif6Fg8WhF8CPmNd6yGT5RMAqkFGuYdbGtbc1W",
  "key18": "2PF4sk5dPbRBZt9As8BoWuegSTaQi9y4AwncnJ44m7Cmdy57Cjg2RX4nV4JCAQU49rLmKzLFbMWhxTkT3vg3EYNL",
  "key19": "377W28EEeHRVH19Rd2YNe3nxk2jWL7UsFFPnLGAUwi8LrYiDDJAhQEkZRShmxJU6yrknETQ14V1d94AQmGqBmb7A",
  "key20": "2rBvhEGxQS11PWpMzcLmBrDi8weyvTgMBGq7aD3dVEYwx8SemNcB76RzEMBUErHo8hS2uXBm3y8edrfQ6NL3MmTN",
  "key21": "BkJDztJH9171dGiENfFDoDF9GahUK5t3caSvUTx8WDsGx4XUTHyCxFntu3mErsyKgYbJyuw7EYZM6FB9Y7H5bVr",
  "key22": "WX1MbjmmjRF9tcaDbNKuuSQ8Gz3dELEX3GYtKaoXBPFEJzeibaEWF7EUW8pb1q9atDtk9n4M3sgAKCNobsM8ymd",
  "key23": "38FuFhPLALB4sqkmoWkj4YcDuDj4G7WZjDkuSBkxYufb26FBL2nNUuVJB7Md86Abj8wAeKkkxx34eBTWkRtpSWVh",
  "key24": "2Q6sMAHLigqNCLVmwarEnDQ3qNd54c6rCo8zDE4joKHD3VEUa4y8cVkhNCiaMi2gUzX5QPr2787qU67JavWbWyub",
  "key25": "5XSVg9xRknvgpqWyZngm2FghQxFqzr6qS3HoDhJXqnzsyxzLBF8dyK5wHaSeJckymbvfcSWmorXEL9ko5HP3dHg6",
  "key26": "54T3iST81Y3M6SmuKYUqKLcWESQMtnQfzkZUtWvZsw9p2Xb6RusvX1bDV69y1wm9xVv4zPGkbC2vHLBbsQ1HVcwF",
  "key27": "5vkeFEpXvdKWgbY6RsdSU8zrHCwiugGdaQJkVXChsrCvhbYuFhxBBoDhGS9hj2rMFttzVUJ59hcgEjTP3tZM76LB",
  "key28": "2CHaZLw7bcv1vNHN3tFoF9PxqaXceVKdWQXV5iZPNTj8Kj4QYz2aEQefV5hYLYwzomGoR1JkCXg8ZNc9hwmJGCKg"
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
