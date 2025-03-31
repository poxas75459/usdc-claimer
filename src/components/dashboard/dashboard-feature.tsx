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
    "2cMM3KX2KF7dwiWxcrnE7Morp21nETtRc2UPK131L4k5Z6434H7b2ig8gYufri8RKvgv5eQNdf6eXykEGwQphd8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PjZJ4CNZkz31bqnaYAsUJsLSu4RySnZcw2hhCrh3bbybrBbmX8Bq4Rgki8yKTgWiu7QihsY2CJVe9mipcWL3mMp",
  "key1": "4ocSF7U6xSGnjkinbifTSMpj3Y4ckF8rebYADCeAZByFFYhvdnxsCoao8RUc7P4m1v6EGj1L5HbxPRbRKnmdNDA9",
  "key2": "c3q2CSmQ8CFVX2mLP2wsHHnEcUWfPrDNeVBfVgrXsyaARD5qtbstvvY4j69fycar167Q27MDhMemZJ763KcXeJA",
  "key3": "3yVQVRDSXLspSdU3q2hrJfnhWUrUcoLJUBboYKZtft5iqT6pUgNBxJ8REUGjtpzfU2Wxwfg4Li5HDYU2xAhpjFMT",
  "key4": "qiCfmUapzpQVVFRHhYMyKNFG8hxpz5RZVLYtBQhbfRtN82UDem4bRcEEJvZzCVHaBwEXCsFVMNYehs3mFZgyhiC",
  "key5": "3DHUg4J8kf7p3YZdg75rVo1BDvWoA5tnn5GbBUcjrhT9BKfAPaR7X3kdMK8AVugNfgCDzJtYDD1A9vWdMDUdnPKM",
  "key6": "5wqj64m7x2GchVvBXk3QesbEKtWpkcDHXTTdgMXfqbv7GCwm3HrrKNCwzB1DDquijpDbC2cfVwNWWm76TaMSKtjz",
  "key7": "3FR6sdb8QmwMXNKNDFJXRejPBK2wGUViMwavcUuEArDtKnzBzRw7TD9UjnZFVHKkfu3CKyCNhqYqhAMccsyAiFza",
  "key8": "39v3VNQoo2PQxQ4ivseg2fKcqeYmdqsvoKyP1evEtrJ6Ric7yhwszT6Ks8yzxwSDPdLX3o7HX9qix8TowQ4xpnqx",
  "key9": "4GByYR7DRq2cude8q6cWM6VugWDYr778XsUDp1Qgf3tdvqH3upFifwe6CNAAiqdnMH9gPuwaXH7TpRcq8bKZKHh7",
  "key10": "2LX57Jm2bHoDhWMnZg4ia9nQUPWc1dG6SCLkURJ8nJgncj9EkUFgLxSb67hU3MrsmD6yTrgBVE1G1CrheavHKuCZ",
  "key11": "3YmAUyWgAAKsLGrL64nctSXrQWv9sME1t9ZREXDocRbgTSd9mAwN43pc8iUB7ocxD9dzM4y8jDnT9P2TBUi5wvdj",
  "key12": "5AwdhJ6ZjcTKeqyVfRCGRUG8UujRtAo115EcqCdaQ4kfUyaVGWWwpT96yEXsdXmh3GYcVBC2h3wkQFmmL2BVmFzG",
  "key13": "64b4YZuAdea5gpTJMgHuFoMjn9X3hJLFwLWE5KiqezCn2UT1YFQYKUc12ESCWqTRukFrfaYpYsDLzeXGnWNP7rRb",
  "key14": "2kwcmKrbdasaokkBWumvGuWR66hLv6JD6ESL5Sjam2ew9BTuFaqj5er4SvUf9Kq2EbQD2eoynJkLzbgjuCqncuw",
  "key15": "37GY7AKboxASdMXUWF5jhXxJSstk2NMEG7CYBfXD3hz25gTAaDvEiQxr3G5AkgPNbqtA4yiB8Q4ADJfB1NmKiuAm",
  "key16": "2o7o9QqqsWksbhGpFwXsWcnFZHZRdduiMBuWu8jA2N8TMdk9REFu4k2uUrqmZeTvX7wfHnKmgosF2nL4GS2CESTE",
  "key17": "2zoPEBbdbR5ztXXVAjDtHiPLvqM54ugM7xyqWKMkTzN3NhZJ9qodrFXRhGcJB57674jNnhipvANpSFJ12wHsdKv4",
  "key18": "2wDs9aktZV4hmBxkfYgmoNsgwTtZGf7P2bEXmyaAqUd98CJDmyYZZN6Toj68KDNXtE2HqcJtrfP8YNPfjp1r8pAs",
  "key19": "4GPRCUPMqNLzfpnX4rsCwjfm4wAsUgwpMccSyL2yL4TRwNo6q2ssoeevP7VGF12pATg5F1c5T6qnABUAu6hsf6aV",
  "key20": "2JgyX61JfGTddm3pkLq1RkuvDYEEt1BdqSepp8HrdZcNBMdhBMnhppfmaaD5j6b8gwRNNbibPBs3xmWbgk3ZLptx",
  "key21": "437gNTHa2k2wavYXpMZneLoXxpye5ccD8J4MMAL9WzwbPFmqQNGaW1SCsJVxMqfbUXgZey5ogg7DfV2SnqGDeaap",
  "key22": "2nEj9qD7WNT6DidVUQ2B6mK9t5sqaYcKAbssVzTGP8EoY5v6gtehTP85bgmcVZEAbML5UccUTaji2YZZjMm5Qwwy",
  "key23": "2vLkZANJBVzfvwyiYEgyvVx5i9ZX284RPt8qZmkavYJeuPJAEpFQWcmHXSSuWsY2damDqKkgkXx7Wry7dSqJZKiE",
  "key24": "5n2HnxbE5a7RutQXSyYdrC2Bb9f3nWrXtCx31aPwyTd3DTE8GjwWGJ7GHm61GNQe7wPj3JZAx5EWzNjDnj4W4D3g",
  "key25": "4BkEykLRsiDWBzvqrBaJtFsssXjpkJQDszevCUdz4vZ1SZVAZg8gsgDrov2EnRSP8MF1dmKHPZAeMMz4XRtq1KKL",
  "key26": "3vEisgvDZWkcQXKPpCnua9aj2wJCuMp7DDWQ2jMrJwuffUeSPxMeXZYx6YwQ26JRNtCYXcrLXe8NLdwWvwiR7MeN",
  "key27": "4D1k1LgYzWy5ZtxSTwLh7quKv3UbrRF13KSEUcYp6nq2ire8bWsezad9dCxArRweKeSEMkVr4XL6hyETLP9kbKKo",
  "key28": "Pjq6asKSjt95mm5Rcm6Woj3eDJ3Fm7y9nsE2aEt48kyjPugPjUeKmwEXL36WLW7dhMuJaQL4f3D37hqcHnT9k9H",
  "key29": "3caXnkqmBJSPybfYaknSXtjrE6nWMnBLVbUdHmFtvWvwd9Yud1XwHhEmFp7mvAXqSkvPqWzDE2raeMgFbaPSXExW"
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
