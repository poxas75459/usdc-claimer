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
    "2BVGJCYv3PHZx4rUmxuuMgGwb3JFbYbpSJiWeHsNqi5ieNiTsA7qc6cwgC3SQ73r7wqcGeCD2aZDeRufDzxhm5TA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q3vFMGhqZu2UJcNm25Xs6pG82pQmeUJMmaW6iEuQrA977iQ7UUrzP3jPBbiYUfywaJn9s6ntAefFsdMtFke8CXA",
  "key1": "36j86Bno5g5fM2ANBf9gEN77zzTYV5CfSbJ8gzNFnRspH7SYLDVUTs16uWkHeAZmeznEeGJiLgMhrF7meYnT395u",
  "key2": "5BzegLJkD4Rqj8gD1nHS23DiFCvSGkBhMXsQZsSfauwDHVSUnuRfczSgdHdBN8VKqpuywPKxAa3khd3C8CkJNMNS",
  "key3": "3jJY3ZmCgCxr8LCScnVBpMXCZX1jDpFPHdegmYf8g3G9XEQBRAnCMM82n6Gz2DBGvcHM1DCLCsimz4znDf71LMUo",
  "key4": "4UV3xaBPyXCQmZwo3djehVguCVwMTCcXEaPAncbBWGeBpByHAbVq4ZSXpqMqmZg6btS9ETQDY1dKuM59K7ZLJUNs",
  "key5": "2gQyqnpn7jLXZU5m1CYhfRNApFUCX96LKUFjXDtQBohGSWKWMByaR2YhwTVfc7jKGZvWpURgEwDesc8e2HPniX9v",
  "key6": "YuaJGFxUsnNYrkZZ6RbbropPZbQVJVVytx5aucCNi961SFAkMxaHXwpTfot1vDep4MY5wAUcV3qBsxfYRwh8V4d",
  "key7": "3DzU9Fw6i643Zmsbh7P3tKZV1bgFvUyLwc4SVdquKaZ4hRuPM7RxF59vSxr2CTjv4fZEet7zRfA6wdGxRo8a4XfF",
  "key8": "51BiMLVqsneJUdFRdE9EZ2gmA3LH4boitFKuwoBGyiGc9AqL3HsSXgvSbkiUd6cpkZ7FPjiS2FhVeNxGZQbSayrs",
  "key9": "5fnVcegNPj7BkybVNwy6MNYqyGhpsiadrPcUUgUyU5kW56fiZbxTAZSxPXD3KNsXTUuQgX1AZ3SyaXq3xb69vKj8",
  "key10": "3HnrGMdnYJ97wa7ZsqqeLNgAorsfd4P1d6zMUxW7mFcpNX6hxLJcEqB21YE8MqeZncuUweK84yafr3p8tCtFisPJ",
  "key11": "2KMe6HbwRRZZYigewGGLMHn16G8ppvtsimV7hBd2aNi9vtGYeeKyTuRFFm7RiWPMZN6mifTYnUiv6jFk4rCV1CH8",
  "key12": "3sTbVoAg5g93MQbU556VGoYcP3jqa2xfTezXDficjr7irFadYPuFJ3KYy9kF6BRWVdan1toMi8LH4uoNKmFTNA2F",
  "key13": "57LA4YuuPmfJebaVgsmbxiWPQ8QTUxHL9kPsTCs6T6v68SGUWL286YLa8syv5CSzPE1kuoho1HZzyDhjK1Wc3omv",
  "key14": "4WtVpoogh7syFYFHzUcScXg57h1guQ3SmxokZiMRbqNRJH3MgpFb2KPBoUU3CcEsoBoqRE4Yr4eZBaeaG273v4Um",
  "key15": "41ozC8STWuMdoK5vZLZPXfAo1CukmqoXnnd92z1jvjZjpdfUpR8kMYUakrjj196tRnygAaGVRSVQ1MfRbh9qRtbw",
  "key16": "v6kMTNBK1ZnosVCt9zYRKJbqxHiFDtddheusNUt2RTdRzH9MvtVm9iuNr3mUH7nY6jHYLbqPZGk2pPLZ6avh6Pr",
  "key17": "4ahA5Chq8MsHDfjcFNo2BB96QPL6QRfF5YrqwGnwK9XekjfFh4iWhDTjSbnLQbynVcB8vXxNisMeJy3nGfmPVXLh",
  "key18": "cKAPiK6KQzQqgvKDhztSNqBmXfjwxfAN62bwfo8vPnk3dWnWdyTivbEwecDgRYBjSAeJLXQ9zTPjCumBeDYiFaH",
  "key19": "4hsUyU2Grv3m8gFTLq8sMmzVTWg3f9KbWu52FscGhEeMJpLh8WkcXnT93gfRCW9KmnfABpuA4BzrjdCB4SPYUJoA",
  "key20": "sdw45pQvaQrB6ncTYSEiWX8obF1KesXwTprGmqEJr4dN18D9qJGrjPKqgTUFFXEEfSwda9oSc9Gmwii27PeN7hS",
  "key21": "4dd6JcGZXp283ZyuzsijkdBUaTFvysvg7baun17xwrvuunULgPT2Lq9zTaeiWox27tW7GRNxpadgVivWtZDHBtzX",
  "key22": "5nuQ8WrjdWWemx3uGyFyWDvELnr8AC55ffBZYGYAYgRpfgtwdfryE1An8ti8gqEijPJvw4wAjrHCG6x99TAryMX5",
  "key23": "5HM8H8TakMDDrffb6duWQyB5RYYk7reP8UYmKTzVhww7rUdBVLSJS5WPduyPbEFG1qgdtck3chvuDEYjuaSd3Cya",
  "key24": "3uT2dMjT2YSBqFNXWRzsFziHGWwAwkKsQ3MFfmQuFqrMenGqPWW8VeruhNRD6PNF9v75h9TP3BqezAbd4hG7ofHM",
  "key25": "3XhHBgWXSKkaRVim1mPUKL63kPWjPtYcyv2a9GwKLrGbm8R7mKPvoGU9rwXNXpRkB63LnhZ2gLwWNvJW8h9QkEph",
  "key26": "3REbGkWk6w7DPLBYRgnytAAxtHY65wEWYrYzVRNvtz1LmTdperPvEsrCH2bZ3dFpoC1LTDKb6vMpgaJv9cyREEhd",
  "key27": "3LdaocMKXp6AhMKqWs3sShadvkP4WHvHZAwuZTDKCPQJTk3dr5Sgx8sdfMCSSqkfSzJK7y1kPYDSwWYNMrfZiNQs",
  "key28": "ungSTRku8KWMhCBZeNGvz6qzhbtkAo8ccm35YAQPRBkiWrQ9jZgTHnzaTawXBLY6XyWdvAgy4Y7aevEgoyw5tBj",
  "key29": "o74qV37mwBvAesYi1TDUVJ41eQFfegYEeQDdu7VD32pjfP1bEFMhb7otDp6q2mtWBbvL6bQo7vDSaGM2nsEf3aS",
  "key30": "61QxVD8dKvDyG1J6xEJX63PC5NuG81NX8zAUAbznf6Wzgc4eVom5ZibKJi2QWKUNkdPQVLJi6SaV62ZpqjrhTP5E",
  "key31": "LiuvZ1n76JCyTbceuBhuUri9kngqJ3ai3hkSuhNyGtGs4uhq9iDcyBEp9recMxy6Sq8CeicGDoUxoUXkaiP9NBg",
  "key32": "4Xu7iLBhfju75nRJ8VciY3AFH2A1KjmbZhniWSvnykELWiSJA9hQy5rhSMBHwmmdYwAqoobbEPJMKeSvEAHUNhUX",
  "key33": "53PWRFZT9vJXUyu31eNMrDES91ixHEibacEH3SquGR7kdwE7kKB1tMWQT9uXAHvNBTw9KmX3cjErEBUVrxt9FzBg",
  "key34": "5vPs5mg93rY9BSPfXor31iLpBZ41AuJS7vuQPLtxLFBeHqmLBmpvS3txZ8cFJ53v4K8ZvGBY8ohGyDsZQVPcwaEm",
  "key35": "45prWG32UzYufMM6wS7K9jByHkEza5V9bqLDQonBg3pGNgRGNd3NAiusY7rpdNzqUj6Yotat9SMmBZeVrSp2dMeN",
  "key36": "3BGxsAeYG9yezUmgZ6i35kLYW7XLFY9hi19hjXsrdyJtVefSY3LijaWGyNKoKaa47isEe7yNfwiCmZHRu1Vimiop",
  "key37": "3cCuK8QXDm4xVg1DLK9UDD9ssFqj29L3nEpXUgRKnLghLwM92Q1vgeRBxGjzmMmNAnoqywUmsYom6sFpjNYZrJEo"
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
