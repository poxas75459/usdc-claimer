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
    "5mAwbuWoVJPPaBVeeFS3JwXeitYbnbZMCE8bdCveo5VLjJw7JBL3i7rovuSEKs2C3qYzdskzaJTWB348BARZrmRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CJrC9dvoFRWxEHaxnYMZbwq8V9FLM5rk4nc3K8cn2rzkGQMaXddDKLfDEmnsG9zRLy3T3WFqV1u7BewvZQg7cEU",
  "key1": "VgKZzGuCrDuZR7p1QRsRc9bKYpNra14vfH2Szd4d1k6qxMfEeckSFAUkWKGUv9zFcNBZasKFbv1qCzgN3auxqdc",
  "key2": "271hSrwkQGUdKXKzChJW4mQkZLGGEYnxWsJ7e8wsz7navMbcNZBSC4mfQceop21D1bf29WCxMCGeX56ULE3MhxEU",
  "key3": "3iKBC7pmNc4osAuMAY6aGD5iHi6qbagxJWDz13oyswVcCkcsiyU5mNSb9QobzQcPPptBouCfUWU3nJq7HvHfi66U",
  "key4": "3AWp18WiRVvMC3Y8kY8X72eD63s7J67H5YZ7aU3yjgjwELKZx2ZGbAg4TgSCywRCdDpWvoqbRx4QwzZRLPXrVD2G",
  "key5": "3AxdpJmWaEaAjDGqkCpeZpu2SnoujJDKZtHksxFMW1brFX4fr3qrcc9Dfeu5uMWDPYQYkm6dKHykmyUVLFj8jxVY",
  "key6": "kFU5pMazsPfdUfgsHyEdrsQpr85Nz8wBnFCZwb64xEgKV1tVzEDrP1kwYTsH4gNGiLCsggmcL9uStTRXgALAG1v",
  "key7": "4ZddvDp94hdE6gtHkLDVcs6jZrTKpbdbzgvyrecqB4TP7zyGMuxeUy47huGMDCWsWw14nnob4Kfcvto2azpkHfgw",
  "key8": "5wdSXQbMRstaEP7NjYFYouUQxz3bNEt3jxFTooDs8DETs5JdX5Cf2eQNubXQ8R1Qt1ZYjH79gyYJ7U2X7tMbvSjs",
  "key9": "iNMcmXDw7WGRjQ4SYoGoh4cjH89hDmZYxSUPPmj6aKr2TBerqidWRJvHeTSbYrT5HcE1P8VyNmq1brGzDdrJBFX",
  "key10": "4tf598wR9wjVF2mUeTqsqSYP4zcywUkdSXu8Jx5ngd97VaVt3yqB5jBM2B5dQQYUF3YrSMi8C7niXsKrGTeE5cjR",
  "key11": "5PQhcZuRUqaD7FGoh1vqP95BPX8rDN1DzfBxn2cNZ4yuRs5noLW6qhkgNbpEbuhLN1JPsEWsqxkSmqDjpUZDGkUU",
  "key12": "3NXasUsYwAfHrEQN6dgaqyooR6x4Md8PTnUQRdqMxoQjcALuCgLrt1uSrsqpaxe8oB6ByM9DPhsvWgZjRpXu4FgA",
  "key13": "2sTpfZgYBV8nnpUPLs9DBeE691WR9orGngni1yKLVWYZHPjcsdLkUGuPEg4ofckLJnuVNoUQsqdf75Xwvksr2iFm",
  "key14": "5LBjKgPpvxxmSde6oLgvL8hhzmf7AkT7GjzfRi6xx2PQrvZ7uW1SoMWNb6TcfvbpqhV547oCuLhH6ep9KaFbbWWB",
  "key15": "4G2SxwmC4wP3QyjQHjjAydKPLC6v4fv4An6WwebYw5iG9S2FY3HrpVPNCVQFVjqbxjy7XGxgvShgHcZhcPQFHaNE",
  "key16": "3zRpFJryeiTheYaUj2sKxmBX1i9VfHZ6MVYe5R66jaqVXSV1f2hF6BhWQUHYJmWo6R8JS7fH9KWDAxQ52cygDkWj",
  "key17": "p96VccWHrjhY56zyMpqaRE7NrG3NtBwQh4wRs3qFv2KYaM6M76BEy49dVLTNYaW8Qby2FzYJywbs3QWyC5k4TgF",
  "key18": "3ojWcSFoZgxczBHtxUqgVtCUJQPJsg9Rg8fYn9AfgofQVExC1bFD5LziXRe23dWBZhnBqGxV1YiGrKjK1M2Aq5x6",
  "key19": "3RMJhckbnWzUuaM7izhkf5yryx8khvd5q9KbF8JimYf6SYdASUuT9knepwcaYJoBfwXH9Adr89S1tPBALnTDQcfq",
  "key20": "vYD4hv9PHJd6Z2cFRSkBU58GLXbhkf1pFu4qk6A9rAXgdbx3pczRHg39hk8uX2PettuXyhQDny31Czc9uqMHSJT",
  "key21": "2mSGxCcj38Lxs1w43Z9i8Pcp55Zf5EPu6dC5VhGVDGWZ8ZxuyUKvRGjsA9pFWz8CUh7CFwdniWG8eZojwXCx7sVM",
  "key22": "39fBU7Y5eYdxZAb5PuY1NUBCz9nVZBvXBr6FiZvwD8p9Kx2nQhXhg8HBfgqTgHMoqDbRFExRaY2y1Q4t8ibJG1e4",
  "key23": "5CLUy1nrJn4B3ifxWRG2U4JQ5qj6UcXaHfiLGZxRWZ8sQUUivKfhRxzzgymbphhgt1UQvVX3GYX7WpUF1ZbRkhNY",
  "key24": "2rQ8gCWnKUSUzD6bCMxcKWYH6XqDfcAsEezW3v2Tcx4Pu97h68HF39Qq4AzPBPKB24mRVn6yC8hcHiDz3KtVXRD",
  "key25": "8zpc3AtyUciAgR87FFVNy7NGDKM5Se3SKyJ35AKoi21XDvWsHjMrjZkHVkYLYGXbtZ8Rectk5KM5dVLztKHSeVX",
  "key26": "2HKRrCNQ7ArRanrTmeWV9kYdArpvXK9jKCq3r8SNKGyKVP48Dqpg5mADEpbfLqAqRRaYfw2FmRm6smdNcPbbR7Yh",
  "key27": "2AmqSrDDzgDHTZuAu5ryNaXDter3ct9JucgvVwXv72uxmAxsVJEB4HbY9EnRqBPEsYmi8vV7fFN2s6RWYRDgYHa1",
  "key28": "9bRC5eGwQ48aVAPWnCCK2LNW9ddrUTuA7EMS14CLqf2aTctv8pczDnt5vFX2omVWTV7sQsMezuSkbYiKhPPCa8W",
  "key29": "3ZvyCZhoAJ3MBsLUQjH2q1M7UXEdCNKN2bT6sAPV8xvuBukZfEqU1oGSiaJLjPi9y8qEpU44icstge9XvNBHHR7n",
  "key30": "3nsq9mdfNAyBKr9pqDk26uRDTL4C2xbX89bmA1wrc4PNK4NBFfAYo9RWg2ok5LG6xH2w5AYyQ9M2FyrXnqfRWvS7",
  "key31": "4vMusz8RUsQW6UDfXwm8S1LabfgyHGevbS7ybFYdhNrWSn9DTaooX51RysC7rQfvhqgD16XKchfaVSW5eWUVnvuP",
  "key32": "JqqcNGdC8CSPmDr2EFn7RtcqRLpezDgSSYdFgFxNq1C62kZSekUhmZXMVTnc9MfeeBfr2vCyQJTq5YMKYNygWrw",
  "key33": "3cmKtu4xLr7JNZBnekguHmSVvhMigqpDW5kJH6MZGLASdUDuh6VUgDrX52BDMaWriWDUQtuTYFRLJBexucWW5gPU",
  "key34": "3bnvJN8mNcHHjtC31oKfecp28tbGzqr79euYS1T6Ug7N3k7oa5yp7E2kktiFd4JGoE88UbHQHDSnANdoeuCuW4DH",
  "key35": "3Swsg4YQY1MdHp4uNWcUyMSmxs7T7WYD2kccDwfeWSEsVTJUsMHfRMHhbmLf7v3ZcrQ3HwvgTCvh6bBz1WgSxof9",
  "key36": "1a1QPpXQuDvQjpchJXbGbdwDzoGdKmhUzvHCr2BSbykqGwWvP6MVpbv9ZxUPQzZsRodCRxquUQaRAAA7VWJkTZd"
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
