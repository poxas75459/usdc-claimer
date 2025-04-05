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
    "5zCwGCaxb7s2Tsd5V4PFuNMdyLpt4DBWszuLQY616dVqUFXMEagmRHYYbDTj8bUWEgL8yqtKfw5VBH3oC4THk96q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MKuVGfX4ng26X6WcYRvAeYt35qYuVkPJWUaapGs5guQNMeSkrV4b2DPRUqyxr7DTYnGPQJSz61TjKw3dB3gCUyL",
  "key1": "AE6ELzd54VuQABPhaZLsfUSShhGgKUVA7Js4BxDApHPbkQC4HZhzJdDDSDQCRAorKrQJusM3rSgCiJaZqiZGmdC",
  "key2": "myH7Xd6CSN9MPY9KQ6NFztS5PtpntxNfeZzV1KgQemTcatVpCfkrP1WHZBEtHk8qkMydc47Gxv2uD1rA1R5nPga",
  "key3": "4AMZdRHaVGDTzeCkBTWLukh66WN1vKzNL5e6KWzC4i78q38ssxViJwTnVc1HMoKpLUrh6sybN2PxR4Y12r6u3GwB",
  "key4": "5GJ2n7xCVhYx4ip9hPhEA5BFrWGg6bmEMrLjpEn87dLRPpUvBAbzxQ7vjpkFxShwYvXpdonyTbeJ8gydhMWR8pXX",
  "key5": "4sctUF3R5RecexzrRsq6rKT9WwbE1ewMHMbbYSseFGVubLoVMKihM8VZvvk4hScZCDgHBWwuJSEG5K2B47QjU3wJ",
  "key6": "MrimJTH4aZJu24BMQ3BExDbdJHuUrQ4jm2HJd5RvxyxPEEjG4ZgHpw2qXQEJeNS4XwxPNRFmDMAYTVH4HKMDf9F",
  "key7": "2sbE8qByUqndAmLuku3sptiBmvmhEt7SQuN1buibwEQ9GKaURScPSSuA3Gz8gSRGb4tHK6kdXDXAZWoj7YNreCRX",
  "key8": "3HaCajxf3psyJt6vGAmt1bvo75CbX2fp162ckm7uPVqUjaTmwWAAK72ueoFgiUpKvcrwEhHoeL1Ym4AL64hYiBWo",
  "key9": "Ug52q9aY9duaVXsM365zqK8xkEeaytVxWweUsDceR8oAUj7sU2UJfajU5skqEEdbCNH1YMKqhiVSLv93fM4oQFS",
  "key10": "3VTVTJZdB2wCejQTdZMcfzNwACkXuNgqzhVZCb1AMbFV4ESc96JGGeXSqUy6D19GGMQ4ZGgH7QoXcgxHiVjY863W",
  "key11": "25Ty2o2utmWTTRwoyBgZBS9RkNfQ1uHjgQ4kD1quRqox1aUqBshJ9vEiz3HnDQUjKc4n1gAuESMivZwULg8LpG22",
  "key12": "4UhJ47ADkT9yxTJE3gEX4W8t5awYbW6yMrbnXhUAeXXoT3j8MSxnsLcGvvEo8X9oDGZfuCSzGjso25HUtmT3fP27",
  "key13": "4oWeCguZ7mtsnajZnT6S7F5L2R1AND6qc4F2grfJHPe61rNX3p358aEXF9FQhNHHaW5sZDFcpdPSEMpvFTptJ7qg",
  "key14": "5ETLnqWMjtUn1KGTBGYNCMFbTbJjpZLZbqP77d4xjyhM4x9C1ZrPrJNZ98xmerQvUvgyZUmL5dJWj9rDcn8K7ATM",
  "key15": "4f1rnSz6RjRC6n7WNX2JBaXApqEWGi5arFsnwNAxXeFoS3ADCJ7eJrThAVhjotcZRMau7fQudxRCg45ShgwfuPWZ",
  "key16": "2FfMFKtXoMoaHXguSF5rCJCA43CZiWHQ7ikWGaXLRtiCd3NL53GDskEweU2Q7ivhw9Tgg73JUztqCYj6WQV4HzBc",
  "key17": "2BDBiXLzpWShwEn2q9zdeTciHP9iDY5ciCBCJ7ewrYdqbryrPKhTCggbed4y2HkAo3vvBFey549J5Bd4by8SDTJJ",
  "key18": "45eLmmjDYohh5BrtL2RSeMScNkGW9QT7vRavaASKNDVGrtNgekS9TurQrriDmBCW2xC3BfckA61DiSSo3wgcefB2",
  "key19": "2NQQWCFfPLxzQrfncJzKGkE15T6zisVQT8GEJHVLxEAivxM4jmVVFBr5K4K8UcLVK4UggT4G2ymoUSFzdb3EUxm1",
  "key20": "3QPHpYeNf4aKWz4fXewQwvqyYnHuPJ7kMwXeCtoRsc6k7hJBjKvMzaH3nznFM9HZdkmwkwmD2myXdWTbMFH8KWyq",
  "key21": "4iKvZoSWyNhcx6fVem5gfrZngC6RYB8kstNaiCoorMfHnZqwTkmTEvJDWaiYnUE4eU4PhGAdN6ehzF73A9RgGURh",
  "key22": "2N25QXo8n1ws6bW3GcnfQyCmESM1BmCDErtuCj33Svkw3ceWYpfaaqXsdTMMxCz98FjBuo1PrhZ8ekJifFaz3Lhy",
  "key23": "2MZ9q4o3uTe12fJRV6hSBUrP8PwR3fQJtdA1QiXJyYv6GkXWijLq4wjuThLDA7EZF4KaNFtY26LLsJTqEUX66D4L",
  "key24": "TenbnikMEcD9LGJZWLgCRJ9Rm4qeeQyof5hYo5rDzM9mZ4tAoAYLgHAdQjDWBCd98tUVjezXut6mrd2QcwkmYgr",
  "key25": "4VavMGFhASVZvVmZgf9kTkQ9ac8FcEGscLEVyxTHKGe4Yba5hqbsjECKp9iYKaYVcQ4ScqLBoyWoR9roKRSyiLjt"
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
