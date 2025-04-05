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
    "4T3RDDiBrunD6wYsNTnE8TEkYmwHecNkLcKaiokRaHVq9qTz6Y1SZoLme1RTBk6AeCDy7oE24f6KfcDKfMBJds36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kX1Uy3s1RXC4QmqezdyiVRsRTCDY2rfzsb4CpjHVnTR7UpRKcMjWvxAxYPC4YrKK7hWn7DrkNUFetw7v8sR9Ap5",
  "key1": "3rjhwKrCs6XhCuneXgoJ6MePBiUAdjoeMNdTGqnBttqNojyEaGWaN5XmDGWFeANSEeLrpcR2WeW1UqjE3g6RgX2T",
  "key2": "48LpxVtNgwViP2VGAiDzrzC4fTzCTeLv3AcMBZrDisqjSoMmaM3pQp7PwbY9SVPMK7d4EC2atE9CVxvnDmHso4FV",
  "key3": "BKiMM6YUWwa1ejLb81cSTQe6qiFFvTLty544KiLKzehBpaLTNXrZuMcfyEFM9kfZPr3bKd5K565rxpMDGNcjAay",
  "key4": "5Qjy8P9tmdnMVZXMNTMsQhmm3H69onByneM8vdt6Nno7VQ1SnsAbc1adGzsosa9MiYBMJDXP1a8GLBuxGwyThSX4",
  "key5": "3Wp37TGdnVKHeuVkLkRAL391qADKDtzHnNKqxq39JJpxfH2gqEHsFeX1A5qKKMFyXTSFhyBsTH2SVb4G2bvPriCf",
  "key6": "5gQojGNKfzRETsoo4uTAE5nuYvTkLTP7nGbjwUNFGLZLBVnJA1HZJt4ojDPvVbSWfguWbqpRH9fp4BZU3kvNjk7y",
  "key7": "3ztbi3qR9xHHRYAps6WBx6CwjJEEEsmixxNj7u9cYQNRk8T8p1jV8qT8YfKHuog3ygAmR9MHbdtRVTkeaLHXuTrv",
  "key8": "5RFLB49LcGKb8nEWftvh7oGKS5n8cqeq3mvqfZX8MVU84VNcvu1ctNNvHQwoqj2zjX1VEhjbxXQY9QV3wAu5Bzi2",
  "key9": "3JBoh3EeeioUsqKyaNvDfEa3zfKqoDcnUu32Md5GTYX2kvPdnCJZ46p7ZEPRb5fDHMeWYSYMhzn7ozP45kTC5SRm",
  "key10": "3JgBVnE4gaBBVV36R1bQmF3cPJyC57rCDDK9aCvV2ZgrtVhekXZ1hr8mZ9TmhFmWZUGE6jFQyRsqcKNyPkGDnCMH",
  "key11": "2b3gK2awx8YjpokBdraoX2x6g49YEr6J76txXLmfUv3MQEbJx37XBPZPJHpE1XftUBQiwb3Tud51U8zkcHj3LvxX",
  "key12": "35kzpJqfhhkgPT6MPqVAHvdxjCUkcESR8Fh5JUZVSe8KsT8LyTgW4tkBM2bTtauYgMF651rmeEAzJgHzVtN3wMuv",
  "key13": "32FCw9gjutbWhCLYg5sqcBfiDgPnDBkHSwbDFvgTih54DHyo5Tm2mq3A4FdYeBPeMYMeyJ1LAtcxRsELBXNKgi8H",
  "key14": "5ux4aLYxbJHM6Chm4xQ6PuUXiwcPmi1Mm3RgKQPeNU1aqUcF42JTRGumJ9HsWpJRTd8kCde7DMTFrhi5HuuCeAra",
  "key15": "5ohA6EK2Z91arpdZ3HZ2RC84h44HXayoXqGGmQVrGvKtJrU1dKSmyM4pGoMBRz8qcCdTKb3ZGAReTauvgNgfSAwY",
  "key16": "5QzwzFaUb86WVoWscu5szJpkyjkA64fdUR2JVzqre74bvoTMUL3BSvUq21YtTu4fEUR9zTzWzqvjdF4LAKtmBubi",
  "key17": "3tjNHTo4Z9MxAVrQQwvVRL3BRMjq6MhX8aLxFgSm5j56756eysUtr33nCEPNCBVBLmjebwjfK5qZYSdKo7GUGh3M",
  "key18": "4b18hEUbhCo5jfAA9jE4U4k1UGG33T6w7Dk6MWsb7e9jRywBPVUXPVn82pCxZEbec75swCj1seuVj8ofNCUkr61L",
  "key19": "5PMATq3ZaTEgpUnpXZrfzY1vr9fQEMEAJQKFYDHQUbRewKo3eZjf5ppPPvad6ezExTWG9ANkuDk4y9PVu1Uyvab8",
  "key20": "56HWQD9uJ9TXaczSCpjsvEKXarFCwWrHX3gnfyFw7oMTZmARWMfdWTABnVG2SQkvssinHGhnWifisDiVCvTqEw1t",
  "key21": "2c1ERLFcgDxosYti83rSTVVK25cQpSeFmei1imv1MwgXr2YLSPu7RJt9P3387UhkCwLCPndKLHoHojd6WUpuSRfD",
  "key22": "2w23EoVV3sbKCBkuQRiZUwDfdVbX4FgXR6TwXHti6xYwCwNne1H1hxhLYqW2BMWz24wiUtMAMiMHe7SWCLsE44UC",
  "key23": "5CmCo8aAinXAJqQvZm3fW2p2rteTi9TTjHDJZfuB9sQeBWqP4HVQZF6FT4XJCFZKU4Bc329cY9JiB7VCUccrPavp",
  "key24": "ab1f3tjPciZiU4HwhQJaFWQ93cLht1rU7BKUgDANsRCHYbojJ6vTv9iic68TyoSUogsQy739nvPQX3F2KmsErCw",
  "key25": "3hFrdDrUgr1VrvhanTVTFKzmJbVJQSzcycHPmeYmT7cGaxuafkr6Dv96ojJsqx3XHMyACJSZi4TKLUy1eaEALbom",
  "key26": "2UUiFQDk14CTYrArpxmEVWcJGw3EMdLSQyjrUpVsgbbZKyVbYfvCdn2AvdmztwLTt16dqSZDxDYtNBpPU5Av2JDC",
  "key27": "3yxqYu3ApkzCEp5e19oiha2R9xaTnxBNVffZb4UqG966HyPYC7FR6zxKuHsiPcnVbTLHV4MuVkRz4T1WcN1cf4d",
  "key28": "3kpdfpHhQZV1e7f2hf7VM9e5G9n4brwK7GY4nW5Yi379HH4UpXbKcvEv2JBM9ZCKHsF6kV8miy9eTSPtKkDuVKWH",
  "key29": "6fDqUjCvGHg4PivQ781zK5BMYhj1tSmjsF33FoHmCpb9n85vsUQUKZCGwnfFuSvyc1yGzdCiU1cEzLJe1KMQaSF",
  "key30": "Npv9M3wwpvgsxAqwwSuHZs2uV1nSbBq7Kaz2f3BMzCniC4NRMmVL4Bxh1Umeiz3mf5GyCPc9N4CZ8GdHxSdoETZ",
  "key31": "5cUS9EUde6PJGi6mKYs1RiYd69HcjWfrX7GQip8TvMDABvEKYyDTJCfGeoXKaTmNN344CfEpuAT4kvFw1JEHLviV",
  "key32": "2Bzf17hpnRfnBX8eKbfda4TdUrZaDSFVUjmgPB7SWYLAuCNpZnXNRFUhjZBH2zby6XBbwQbfkNgJ6hqGE87FdG3C",
  "key33": "L8XDzcd5BuC3SEjTsFBH6ANoS83D56apPhzLhzcTB5kGBxAfkVTTK27RrGxpaMcKvoTi4C8vqXAGG6cDbGBFoQf",
  "key34": "5zJcWKmxTfvr7LUGhcinEvHo7vJLmGDzwSP9GDkdqqSH25PynMjkctxoPJ6FPKQLYa364Hv6BuqEACnTH2tcJCRJ",
  "key35": "VD1o3GRF1hyx5qHD3sbKexq3jdZenGrNY6PFcUv6cefYDsVy5rY58UUPja8DRytY3kwqnV7kbyhiPerbMSwF6iJ"
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
