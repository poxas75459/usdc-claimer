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
    "3WpaksVcReAK5qf2iLzqgwDbjL9HUU92ywngbac2rmANE1DsLoD73mavqrq211M9zLdxkYFoTXRTZR3dFwR9niV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N7KCnoxgg8h66dSAhwTZsbk7Rh6Ycd6F5qTcsufUfMY5yvpAReFek41fWLZwc9bidBQLQDajBmwg2YdMLiwyutc",
  "key1": "4hbHpSGswyDf77wNvGrChDp7a2nf7CosP1jZoDTHt9EEe43M7N68Xco21Z8Le4tCAgv5DBsSi1tHF2vzUqxMRP5v",
  "key2": "4s9jApLqHvdeyPSYTmnxS6iXyR6SvMJd4dRQUbuGbAD9VEvnQVPU8eaA1VoXRSzANpfujPNvmGvLS44hCSM29CQJ",
  "key3": "2UYorTaSzLeT2hg4mX3XeHJM8AECmeWCWTbQcFNzLR9vBueMKMrUaDHfLYqGsAr4SCjYuzhZEZsAGgJ5Euetgen6",
  "key4": "3WF6konk96V1it5NduaFvf1CZxPxseXNSUMYksZdn5MftHxe2TEe2zFGyLyoJFmjTAXu9d5E9NgvqEzueJNgNofa",
  "key5": "5hx5htr6LzTmwPtpdFb6SdK3VM8MJV7PuDR6o14iyRAxzHbM9XbSx6oSiEF6Tavx4d5HpCtvDLtj7PQDu9PQitZz",
  "key6": "4JEnSpkhQ7rUbA1cHuWZmzsPTxbeS8wfYxeFJwc3dRWvDcme5GR39t4bmFG13FdqmYH8N2yXScWsLSiPG3B7EDjh",
  "key7": "JoNvaQDwYC6hqdnZjLcfee6ATeFe4EC4ysKkK6TJ1DhKz23KChN121o7xCLaA4RrapfWi2w3FeurFesYgDjJpbt",
  "key8": "4xJcwTqjkVcWdhMATXYukHUkNJorrwiiDch7PYYv6wLqVxeGp81GgL3ziqkbAMdYpqN18HvjXbWCDjMdwZADtuse",
  "key9": "woj9VS6KXupKB4paFDjYANwLF9KnW7K9fEu3wNKs6LTvpFjNZLL2KAw2bVitDr2CDoHGAEGkCxq6p8jF3eS3xYG",
  "key10": "5pxX7gKNg8rJX7oEyvM6qbuWH7LdAYLmHbpXvcD74D7ikkzQ3zKHWYRMyoXTjAHUPAWCrUVGb1YVm8q8oA3SuXTU",
  "key11": "65UR6GzRaQuZDRDhJ3MneLQLfas196rQe4VUSmddz4wroB6cTrA1APk2HzxfbJCZCTf1FL42MnCyXs76QmqUJKy4",
  "key12": "GHCZwNs2Ko54DQrWWKL2cW9d4Y42W9Mzsh73zk2VwUWBWvCyD2cbfnS4FD8xv8n8F3JPzfBFd8LDgcirvGSJQDd",
  "key13": "FXDHkNH4C1trW3q9wJYm5bhHyvtfY6QNpeP8CuBMWd1vKSPxL7G2xQe1fiPYhy4g5ePVtcWS6VjjZaj2GmWDc6C",
  "key14": "577YD8YgBw6Cr2gEmhwTH6LHyBbo9kfMNfY7YPZVMyEXKAD8yCxuZ6i9qnbTJebgNFnSSLKjAeSsViTQG1dzMCt5",
  "key15": "3KgfBfFgWeie7tVCfJo1hgZ54CvSffyYpL3UKQfCKFBZvwBvzuG7LtX2ikaMgjcLkawQ6tSPNJCJzu8B4Bse7meM",
  "key16": "u7BdGqLGu8tMuyH2H1YMvwecMHcJ6fsj3v7M9Xi9Jexc7rfDDJkrbVK8xd3tnSGueGpF5PtzbRNwvWnoZphNzAa",
  "key17": "n5D4SRvCH82yRUaFNYJsDSHmVMWgtrNLD419wkXSYz4HE9x5w9y1MZBtaHBayJLHZQWzQYJM1YQj3A3sHqgqZCN",
  "key18": "468dpjfKSH9m1ooc4Wmtzjap3ASXcMMU8vSdXMnBqBqZpaQTeyHLogCrk3sPobb2GWH4P5EtuKK2hhGgYDe2mQAE",
  "key19": "2xa1qPng6UkG6b54LuduAkgWUvfQDvdGTRRDq6XgXHNsqq5HjraC3kb3geLzTF7YtQKSdHs31JSwWgRia6gULKYt",
  "key20": "3AtJmLhoj1yRRyjXWKtGQu4mmXpUxjm4svjkmZx3D5BWkL7boC25pdQGNUSeqepKVbhnXD9hxaFP2s2cg4aG6iUV",
  "key21": "3G9mKum74pzKX2eMNFfjqTyMht8eaanEx13knUxoeWEopqwBae7bKe6tQh7LvT5gJ32foDTMJWH15wgFEW29CSeQ",
  "key22": "65yeXpVNR54t4FDYGAKEXjA6EDFwyfqDFzfWkhGpu75V637jYV9A5P2pEX8Z6fjQRjV9WMWFxdaP9WYzWs9WvHdz",
  "key23": "i6kTEVamBGKZ2okZqidLQdmUuGRRuRQRK6hQ3zhbK4gKqqm3M7abFQvLPyTkBtqLUehGNtqe283zDhRPJwCzwfZ",
  "key24": "63gsN1qF5eoTUvod6oiPBQB22Jmc8F66v4r3zQfL2dbdJzRC9VmmKu7ZsneU8cWJzfXHNTaFyb4TyHFdf1xSAayF",
  "key25": "2NQNuLRog4dQ3VPgViGnzCViidbYDCDpVHsS1VimvutRqHLeBq59sKf4Sow5nLfs6Er1MAuJ99QWvh9YVTC1y3xs",
  "key26": "3vPvJdzgcTUxrtzVBYh5i3THt9LCGjoCe23EjeppzdGQ5GywHAvP2qvYcti9sDYEgN3gcQz8fSWH2Uqy1B9GodZm",
  "key27": "3XSC4e3gCJsqoUDqJRKcCy96ho8gYdj4mm1Bxg36DTkRJyGwj1mV7U7BSzRPSdJU7GgYHnaZ4HfatEiMkDfyNBAo",
  "key28": "25tqL7PaEEkSmiaBV3yhbq8gUg9i1FrcBitbrR4LzvBV3cjv3G4PhRWYZHbyhnB7Ung9Z8H8d4g7KGXg2pDCtb8X",
  "key29": "4cWXtnoXcaSNScsR1ciAg6kyuPCVFsnGZzVvyW7maBs79vg4RKLKmDNGmAUHw7dQ4QxHYrS6bMJxm3u8uNqZQeM3",
  "key30": "42JtSTPof7GWPNYAyFrJMbCpngBcg2NLY3bqcmwCwswZiwtgkJV6s3Q1EKxLkLmsA2Wywkgzfix89UZykDo2EfRS",
  "key31": "62kCCm5z4UAAvRWGnA9iFqGv6Ao7iirNSf9iA89vrMZUzqpoSWi67wYaTmsEnHayhyTn6ddFfw48di6sjPx9jWXB",
  "key32": "5fNuGoaAHrVNi9QoGrBcsyfSNzR2qixtsCw8gZxkRD3cpxhRW8LRVB5ttf1ajECeFg68ZqknyLPD4g2rjuzx6sxo",
  "key33": "4mNTXPsNxCsEJirNxR1tiCUwiR7eBEARnSzchQfV4hLhni4u9BscpGPcoEcNuKxmAPzim1AQuJiMi7W59ewWvM5K"
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
