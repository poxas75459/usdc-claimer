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
    "32anAtH7rUwRofqzBaGcc2SxUG5xYEHeRs5AtkkhxUaWavjgRLvTEqCLyhpsMgJixWvhzQb75MtJQn3TTUocnghQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U2b7KEMV5XXRVEQDhXQNnifKuuwgvLhywr8oUExEY1zHPS47oYxV8sMdC5nFpmw5rVVkqAxbr587HG6UesCx376",
  "key1": "ew6XBX3uyk4G2CjvHHMH8EZy6ieHbthfkM53UYZikqdqkDNcfWqNrSzSw7WykmbwghX1N7kJtH1uHJc1Yp8NS5v",
  "key2": "scUHsX8ZnZKd6sXZMGy9dc77jJQzJw9b1zC9uNSv2pR94tPxfSiyUhLPeKXc8ik6zBtxq1rLynfg3vrtNPCCXS5",
  "key3": "3VMRdYnpXV6xQKvQqjaZSaaQuTFdarwCkbPMRXeFXZ65CQtU5JzQNGGRhLBRrzMGb14JMT77X3pENpisjqzsXzPA",
  "key4": "4kpKoxFfi9V5BK8PxVacWZ1vak5QT9eneK35ZrERBRgeB4ZzechFQnnbUgcD8yU7dD6V177HiBzFoJdk1vEUQEKH",
  "key5": "Sjq2nCF1niPu8TaxxV55eJ5tr2jH6gNdsFwo1camvX2iVwChLdG1LSNwqLSxah4tPUVTPTSf4rPZjss7bucExzk",
  "key6": "4HJ9N7h122cZV9Qh7vBUJqCdx9dPSZkn3G2Wcxh5uej1SSA55KAymPu8c5oD7HJt1yP4umN6CT5znZh5kWqgs7yg",
  "key7": "4yKxQBTs5k6jMeRbXDKgqfTJj2NADMC58YQwXTQQkHuaaPtbAiRb2ntZ9KdSKboJFSHGXWnhpMNGDay2YyBfu6gJ",
  "key8": "4CYnkGYhTVyKPxqcUgEtw4myQuKRaWrGo65kh94sFttspb9p8WghszEmwR9vRgTuYzQK9wKqRtsY9SDWZ1osfpbx",
  "key9": "5GVigWsd2TFMsvGZnnznHhV9qXYxKavq7JhSfxPpx8YTKvq24DbrFiU5bmjLPWT2jChPjapv7toWSgnZc7mxzN5K",
  "key10": "2n6wLvab2LbQH7hNrnhpNafNM2XdZQDfQz8RfmV5PDhyZCHpTxCqtMTjaDAhh8z6VVsLFUSXuGAq8udDFwEHhHie",
  "key11": "569DasGmerouqUVYwFWjRhX81Zido5jsQWL3ZjYhFaAQcXtxxiNeRVwxDVinmkyboMNXpJwZ8mqhWCgVGungeFit",
  "key12": "5zNmwLVriUHGqbRCNeT4fqF4wg7W1KUvbERjLioaEsNTMx7iK8cHB6j9XdAnJcRqnfxkDSjyBpzu7Vfs7CWL8ZDT",
  "key13": "3JutBvttSaXxwTM1h3wvu5crEizszQtFs5BqiVWgdBzRa2kzVWRAFzfHfWqPebNJUsseJeFxMG2WAjWj4t3scUyL",
  "key14": "3Cb84G7BscxfczFFboVhivscEoJU4aFwyqSn8yV15ocEyqFWYAKP34tfX4xY26NF8DW3tfb1N4P3UVxToHzYaydj",
  "key15": "4RspaHr2d4MQHDqTx387PtkUcb2EzoSsZGftjBFRoRDekCkkSfrEz4xpxxSFLKxNR3PZiLqbz6zVqEQAnEK8oN2w",
  "key16": "33vvVEh1vLLtDkrgCMKZqjrxSH3hmYcVwXWFiamj1fsmg5qtAo5fktyYMT3XC9HF3Y4zrzhvGjnFf8j9RdfEthov",
  "key17": "28RACuEWhFa6A5kKeR4a3E3DGiGbibzdM5pawoDFv5vniyVnCUgH1JJisACXVXvuPyTV37Ln5AjgDAjtUTCeqVae",
  "key18": "35P6YmnJWraFBRfZCiLCR7K1G6yjvYBENrwtX9QQtx88CogN7s3RFEjbMqtk9eS9DfnhaRuzCwAFWG1Mza2xhp3A",
  "key19": "id1umivJu3AHKPq74ug91nAqtRzRLpv7jeEr5uNEGNtGeDxGTk6S3xaf76BV4TBtctu5bcAbysyfPk8HvCV56Um",
  "key20": "5TUMuN4W7fksr4pjCy5JmAAX1SJfDNwVY9k55p6jQG2ye2BNWE1RmHb2xixWEM5KE2ni9N8hCe8VqXk5zMWe8afL",
  "key21": "2mdh9Zfs4C5VQR35E6UtXmDYfowydX16C6rcPJsjEBxAphocddDUiynDnkdaz5xx6sxRMeHNPWLoRPzz8yYn3LZQ",
  "key22": "5YDg3BTJeYgavzakz4Kot95QDxnnuNtfw8u4Pd9aVoXxmuWgujqTHNphdSu3fkq7GJA9v3z6TdtGLbNn9pq2knEy",
  "key23": "62SEDujAhwFczzAtKEJeiaKEXCcBE8BgYFYayjfqxoQejweGWgJ5opwEWKbgf9WnPxH1RmABZq1aNsKr7MSByvrr",
  "key24": "3YYfhV7YXGBzy3V61mpJ8xa4UE8QqdThEvMnA1j98baAwT1fBUQ1R5RdNi5sHB6HMwJos6UWMBPQa8t7BpXASCfc",
  "key25": "4b9asLfgXH7VJQFfFCN2VYBA9BQP29iuZaBfmH2FczF8VTQHg46sa5K9aRg7cvRPSk54NeJCr95BB727xbEvcJmN",
  "key26": "3XZnCAr1ayStv1oD2r1WrvLvYpqyWEBLm4vxMFUneEGZZLZ614F81WAqVZ1HpCx9biUKcjhCAXdvBAju2g6qkJZE",
  "key27": "3Xh9wBZdQmykgx15KnHE9KK6AkqGfs7Dgf7LUfkzUaSrw2u7TZ7bhgBio4uZrarzSnA5gU9Pv5d2X4Ka3KJa89yu",
  "key28": "4mUav66unxm8QQfs6R8ZVxqfGkgfTVS1aPSFL8m51Uxs7BsRG4CqVmMycQJ47toMDEaphufhTuYEZUMmKCYrtfgY",
  "key29": "4dWUvponm52yixXbSrdQMzcMgXGAyEGuEztwvEufZ7bjnJFmfiJ1GkBrFWiJ7ccfteUSp3s119iGnJsMvX6VZMkv",
  "key30": "5BhiZN2dnQaR936frxTduPHecEsHm6sZ3pgSajVQgEBN1J1CBYcEmrywHJ8QdqXB6GQzrWCHeyoaNkxaNLHeLjfD",
  "key31": "4AoTs8GQqNgbNP4RS9uwHB6CmGLJAeusG5YA4MPpAmqHRTqwNaeCyFxbgJJk3YSTQbqtrz3DDmLbe7RdVxXiBgQN",
  "key32": "5A9P6fai3za9jeJbQfpXf3t4UnGXD8mNGmj3mp4bFDhjud5R2ibdeaPRBJc6huFaS8ifvmGGmWAhCgfaz6yxsmoW",
  "key33": "4gxWnKCkG6gUxVXZE1Tap8Apjqhs1nB8aHUXCRBBfsQx36RA5bKta7UA4KMrhBTQf33D41rnHLL6tUnqGATt9b25",
  "key34": "2h7nrLjNAVNgxifYZqRz9jJdJabCCMbk9JsWQ6iHpLVmbaAkzFneXnCXcm8JYpMGhG6Xfg1sWUBfWXPNLAfqEGVH",
  "key35": "q7QBFg7cGYAVmi8uhWEiX8b4LnBeKe1Lp1cv6PBcR7gqaayaqHHePiT9prHuTLYX8fQ21N9HT9eB5rhmepaoN96"
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
