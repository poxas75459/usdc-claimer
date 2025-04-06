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
    "5AXZMveYuk65MmAxJ2d133x3vFBXVuAeXK374tdLo8JnrefVd6TiuFATiRNSkHUegRVSauMFBVQ6dsQ1qjN7UsHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wGEdwcKVmTYeDaNaAQ1sKaxscaXpuj2whHeUGUE73jwQ4bFGR7BxDwBH5xmMP9gKzh28ro2d5F9x66oNYSfTnee",
  "key1": "2o9aMRA32mPWtRPWaVQ69RTrKPAD3qcb1eBcccPmE213UMoPivAQUZm19aVnKeN8q43BevTuzvKfJb4PQ2bd35Ua",
  "key2": "2sFux4qgEoxfsrZ7mPFgUJdM4yL4ftDSkrxwmEp6a6cETus22289upFTpZpPegn9JsaGWTr9kL5zhawFB9nkxNSG",
  "key3": "4usQteKSgEb7oM3CEfWXwd6Sh226651eXCV6D2aHRSE2v4XEGcUbZTcXeP1dGBpTJZnCNAPYeKaEFR15d3SrzWVd",
  "key4": "w3yPVRUFzJNNTL5Medwz62o8yLJYKffXeMbWhiTiZ9hZLQC6La5pw44tZQy8e2EnEJFKyMVhQCHwuYNGnjZ8huW",
  "key5": "5GWa4fcHNte3r4tvaLq999wDGkcd2uZGmHVQvV8gMcFKrAeTkK28fiAEXif96D6GS2UgBKrbemERwjfuajohojty",
  "key6": "4BjgpNuAun6UiUNMu9ZrYMTQa7xde1vW7ZP1V6muFC7Cyws2aqoMhw9BwHqrrtVE5ZUqGd6hgHMZMTP8vp6WVKKL",
  "key7": "2KTtXwkhhF7Su9wGZNA3v9pNdb4vi8RCSGRSC4K6rFESjixuKWN3A4Hneig5ruTfw2gmbk8VEa7pKwTCoRFK2nNW",
  "key8": "VgZhkwo3fPc5tficL7mJz2zukrY7QrwPbYoRsA67z6g5a8z15JrnTeAVE7BAiwU6TxT3sHf6enxmodTBDicYWms",
  "key9": "252zpDAfZqn3DRHx5DPJtunXeyQu1jnxg2Zt2sWqmHtq7jFsoYms7HodaNe411YmV7MTvoHFReebCGaybW5tVWyd",
  "key10": "3Qz8YXMEbZzmiiHNPxxdxS3ui91V4An3YKEPavbFohTNbaMUjGRzmQUYYy4CHEMVMYn2qq4rxVYRac8qdT3CoDcp",
  "key11": "9eDopN5Hzsqho3iLviSVnUKUq3NCXjWDCbWcJof7QN2MHqRR5pB6rL8q1zfG2iSUyVSayZMUR2Br2qF9NrqTG8s",
  "key12": "32xfx12JY2tBdSprsUqtCiS6QLv8d5Cpqx1F2YA7SGhfqg9hv9h3wbvVnXS7VTkkhafPYFCSAq9roLHLRSCCChrV",
  "key13": "31bt19TKS5BgdwUinZZQsQrJMb6dM4anUhNjzLPB6rLgBLVuy3wrSrJ3vuvnT5HjmBM4orpDkFd8Rmp5YjPyCr66",
  "key14": "ChcmgNwcdVnWBEBvWhP3meMw7JxEdFGsq7LDAR4Rumo4huV8QWj3V3Qjq5VkhSzPRZcWHsjrJzKRTgu11kfZsEq",
  "key15": "3u3PnZPViwUu8ris1UPEHRdfayLQpFvYX7xsu3rAKQ31gewyDbEPhwAco6GW7Eg9ikKXuCiLJaH2xHAJw7JsrpbM",
  "key16": "5SR5rbmDjcAqZtrCgEqxocjAYg4pR4S38boctBY37C1V4sfJ9hDsntnymsrE4JBvmiHEgHA6pFhPy3mqdyFFBx2k",
  "key17": "2PLqQpXM7Szq3vW7xgtH8K6ZdwogWQ6ZRSCToy6stq8mDuBD3DBaiaUg7diLLsFeqbmUxbrtVGv3dn21Bkef8a56",
  "key18": "2voJqXCmVfDFfxUGu3ESsdj1yApBkKNvbNKiXtXqaQWTebwWcg5SBT9aQW8NRcaz79gQeAp5uWTz6La1AQXJXHd9",
  "key19": "5pRF3FWW8qH13Em1VaPUacbEJ7iGWfV4S4dDLY4G5Hi9sBZNw6QAUG26qnkr3efndtCAGu6Sae43bpTWvGJKKg85",
  "key20": "56mZrRVQp1U5gXYz5xSeBvpxUrYYVCn35kzuKD5EKqFM3ANuM3bcGfbrc4Jr4w3LB45qNFCPQs1T63EZ6TE9iU1s",
  "key21": "64UKdKXHzTrQcxo6z34qLkmRy1EqAGVr4SrPy91xiBWYghddsKtV3aEDE8JD6mHvZb7AvpyckyQ9PgJR7hcVFod3",
  "key22": "5hNqmA7Ug3XCDMLWxJbpDPAie964dZCXad15NjJ7qJed6VQJYzne6fc1Tnk8D2zabwvbTgjCCN2dGZKheMkemC3q",
  "key23": "3zg3A9oZBeYMfGP5VNur9GMbMYphsAeH64xShsytGUZC4QJpUo7qfNDrE8h8fCqMzFzZgJuErZeoexENkM3hHs7W",
  "key24": "31oD3ECCfuCDGpH7aLqiZZfNym1mJynSLseQvkZaRisotwu11pYHXxyyEGaD6wmx9YueRAdecmqH53sQUSTwcizA",
  "key25": "67bAJqwrTNkLo3qYGwCxDaxZjHxD7nHSKcfn9FvtW6CfcG4R3Z4K7Hf54nV9TJWCWfiKh2JsnLiv8pHGHCC78Uwk"
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
