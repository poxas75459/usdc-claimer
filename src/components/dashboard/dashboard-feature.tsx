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
    "pQ8E327rfLRDEYSH61FfMMNTiu4GpqtSTqZ74Qo7yZg1XRKWuWtFuta7qArc8YsVrGF9D34AMRiugb8eQdkqM2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e8r4hmdPaqrFZXc3pSou33p6rJDqaEwQda4L5nb4NNqkyRmkvMLw4awMR7foEPNLZnkTtUCrEQU4xDqY1dzJ4nU",
  "key1": "XF6PYGbW1RTxMZqT28hFE9ZtzHsVqRyzab5WmXz73JB8iz2oLtxqVS7uS2fpHUzhdRzs3KS5ciT2k6ZJ2vb5SXD",
  "key2": "pbfwLarXC1qS6fk68zXqdGTHhAQdCwbeK9VQXgQHFxYGzSqo1kw9kzJEdXfYcF7yB8nSBibm2jnVHdAymb42Lm8",
  "key3": "Ahgnap8qP3m2RBFRcHyCjKMsvVCJpJMy9k3LFK8PiDzg7zExixoe8zFW7c6szXbKuZarvyV4MeamuMnT2SwiG28",
  "key4": "5bcEoomxfR2s9xsmyHuenKHKiz2srumwJDFPbet59dGDmYmN9zffuEgmsai2tfMNxza8a72hNVuKGMAo4xRL2Pns",
  "key5": "u5Z6HSBn6h7waTNwJatvuG9KpkvNTfbiRczox24vG3dnshb6JRdmP3qKXj3QFWqEpvRpk98JsMkzHbEahgVt1dh",
  "key6": "322CZqs9DhTPmAwN2ss2jP8Dm4n52XSZPC1v7pKjgW7Eepf9KZTVv8bpKBfbno4pUCqGbCnyGdXaAu2of2paNLEb",
  "key7": "rZm9pU4jB1XK6a3mYHuSv1pbzByKSx7ZGGXoQVfu9t7rsNS7jADaHk4DatmscdsfM1VZ9HFgEZ39CL1aeXqfdto",
  "key8": "2GRvntqVB1zQuejmkDC9bA9DRUco2eEemHpuMiiZB85sAU72H9hPqeGh7KPdosXiidC5ciy47pPmeBtoeyonfFDp",
  "key9": "3UkeJhs8ARG8CmZvDDeZXZKJ3R9r3VpU7kzPRSDjmiBKphbfacovdxaHeK1hWV1isfJncR37n6WDi7X8hhEn6StA",
  "key10": "5xAmZC5tbSknWv5ovexj69iHbNyZJL89JKPV68kBQ2aYswZ88sTnFNTDqBmRZJLhnA4yc45uGVx4VuKEfpjfwTNu",
  "key11": "5VwHZdsKhQVXmwde4P5dpdQsNwhsBsrPMoHCoHMCJuwBUDHyZ5rZyDxMMhF2WLbnpSjdnJ6htNhiHfLejGtvaa9i",
  "key12": "3UFaTsMfWkksBZFY8UKn8trLzRJ1N6xpRJu6j7Pqzs2kh51X4s2RMfQS5fVGgGk5AYeU8aBiqsruc3kNMcZwzJaZ",
  "key13": "5RK66zyM85EzhWaVJwHv2hrUgytGUQ43D6rrAd9daoqumUWpajGfSV6xE88GNfRy58PLHRZ4yRPKBJUvKNMxStSw",
  "key14": "3LaaQmLAoQnasB4v2AwU9ctprF7UHq4YmhsjXhZNJxV6nWfpseaWxeXxx3B3ns62ps3VvmAbQGvpotiCUoHLM4zm",
  "key15": "5fuXz6WBXzHTSfcvuc3gA6ZTeWCszvo7k3PLqr9P9rQXKcPPauJy68TGaD8phyHXn84eMWdropKtRs9TK4Npe8WG",
  "key16": "5wanobwnmb1gbq4bTu3PZQBSyQTeUbXMb8zykP1chzSjsFht81uGhJEihCaAJDrhZYLXNgD2coDBXnaVsxhwH4UR",
  "key17": "3JFDadbLYHCBEca8mqXhRmQJx9Y9G6qZ4YsBAkBCjWuBKA5TLbfpEnjxAmwVY1U58mSjnVmNU9xftD8pVR2VSYPa",
  "key18": "VvaZ5jXnW4NoXb15NwmoRTEXc2Ko61hp9iWk9WYwZTVtjXEA1WkGXUYpLfUGugDZZgDxUXWMbANt37JgzA3hrUo",
  "key19": "3Vk2wRvmswxXCvT8XjUBMKj9MaZpCvLJGy1ntS7jgP8cDod2eAbKbBEycBwWJJhYRJ7hrTeQseKxX21SKYRShgAd",
  "key20": "2S6KYYe3sLSyz7q1z4RXQsy716aK2ekTHZ7v1tx3jKTNSVNmrwh4fqGpmjEsq3DCdYiDf1HSwmkFtDpntcvUNtbC",
  "key21": "4WUSXWhsPgvXVcn31WcJXrVVQzh4zcxagTUkpXUhcPe79VqX5A4cys3EWGw3GsK4PBrue2Vo8sZPBpZxGYcvmkXm",
  "key22": "Pm2dU9meLjCaiDeLzuJrxJxwPfhhaLJeoVnPV7p7pLriN2CudjAWtsBsq7zBuUn3TgkKdCp74CxcjeHkkV7Ryp7",
  "key23": "3ndkm23ydAxwYGZfpKVPsV5bfAgx6KpeM5EEWG18rvPKpUpYtnhMJwDGtsTyyc83audocpkU7AWa6PjqY21j6Jtg",
  "key24": "3hAdRtzs7oWesfZy74MHQfxehJZc364E79o2g6odcZHvbCHVAnPzqhRUzcNUmnxA8tjuL4PV2YeJVHzLS7S4Zxac",
  "key25": "3JQwvp48GaY6X6sjgzegw62ah1Ty4qL2UadeZ76kstxMcJFPhFw9JAjCG6PHgWBTik5WCzbcvtMwhsPBhKFwf411",
  "key26": "B1dSTvY1SPzcDi5tr47rqnhDt81vLnk6zm88M6VrKFdmq8WToAw7qcd6f6J2aXjY7pQhHTAUjmPaaX5cYa6cN1K",
  "key27": "5zkNfCgtgrfckopvAi9cEzh2aPdKpAhm65kh5NuBD48Zw8YLwv9qjooSu7wpvfi3d3xi9Ur5XFgdUXG6jSeJAGk9",
  "key28": "5KXuwd68X8scbcMpZ3DMMcXrG2WUsK1ppsqq1wyzZ91nqMya7JrCR3Lwtzd2ZtP7MFC1G5c92NNCi9Jxi9WBDmd5",
  "key29": "5rZEuRcwYjD8yTNmF1sbHrqJE1M5hXwBHxPBG7epc8sCv84X5SsGAy4yXekMXCE8fYGt8VHYxcuigJQas42Hxbxd",
  "key30": "GbV14EQr6ghjybnFgoPB1yER1xGy2Wb8sH9ohe5mzXh4JcAoLBsAW5D6frbWBPxX57vBifaHVdWtJCEAVoq95G9",
  "key31": "2Pa23PbZYq4GxBdzdYBSNgCbqKMxms1tr1v6Y2GHJWAkV4U7AnqgGAkgEHnDkVFXHadWnLMqhme3QHRkhS6jgGgS"
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
