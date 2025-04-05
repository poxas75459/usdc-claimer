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
    "5vZHqV2PDCkv3kqv84N6FSDMUL8DHGtV7vWv9EnfVSwjFbtRLqTYyf3V7LLqopZK52GyvZewNRdvwnaprfF6mhV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DVREoH737fk3g9Sdce8aFNbSd5xK8taFzBHvHGXQmu7xgXBTFBg3qMxXyDpTPw5eo33rbY3c9L1sDS2strsHLqK",
  "key1": "4E5PKr5dwuvK9wBTYNBfFCKxdDKw7UMfkHyUebKS6S8ZajsbkQbiE8KNtiFziRxo1CyT2TfkmWRhKfmFSLFhD1RK",
  "key2": "44c5BDaLKvxfizWgVNS74fm6dEsWZhA11EYnAvsmpeMqCQfjDGk5YjuU7fNXbkYAhr96poU9KsvoVyxiPuQfdYFJ",
  "key3": "2jL6w2wySgPxhaasTee54YGW3PtXLjj22UC3T7KsGLRELqJanUiaFmhPeVEGwYBpTLxi5se6LsnoVuPHnET9rdKA",
  "key4": "2X4mcJJgEGmMrpEvZzDkr2rMNJhULKezqaV8nut3pzYrptdEBHvcuDibcFiE5UZWAKgskZxGz6TKv8gzQzioD9fX",
  "key5": "3ziMoxdtup4yxYnSUAZtv2uyC5eXqqRSHzQafTZGANiom8qDNWAcyktiYbkyFvN4NFvxcVZqwcLCNbLJmZ3AwgEe",
  "key6": "5vjnvGPXKo7J5cXNugyQFtNgxyzeM6zcL1QMEWmA37ZpGeN85MvyBK1VGu5mHYvBfqTdLP67JMpvEHvuJeE4fpsJ",
  "key7": "3KnKcDRBqQH1Yn6VvYXRKeAMjWL4a2KTTAj9jdm8vBndwvUyGVrrTcTDdHHCDvrdFoTSyDv2Pz5gzS8Xt7sP7nyD",
  "key8": "RmiysieQTzwXQB6ghTDgWKxVUFpjWk1r4cAnLJwuNRfxV6gejm7bMZgkxzRN9zPiKDV4FrJuSovMHUPoasmg63i",
  "key9": "4hAReHSKoRWVSxyXYpKCfjVMQg2FPUcVgyWURvNjpM99bokshEA7ahGQxrFuZsbR9q3LLCciL9QWPWjiE1Xd7eUU",
  "key10": "5D7yACSewj6wozatLS6rY2JXsHJmPFUsHs91FTG8uG6ikta8KZ6gWAXzXiQJcwKrkBGzSg2h2mEvEz7NdNdCWJDK",
  "key11": "HNZ7sizg9kWzNfS322Z2fmwd9TNTkNxbiAsrFsjmBrr4n5mS8hoAGjXaUigNsRBYWqvUwx8XvBYYc8KdWDBjbMs",
  "key12": "37xHeCtLp3zsfwDZEWmkp18iVrN6jH4wrz3LQfp9FxQPEwVcna5PjRoc68NVDWSsB6NXH2gTTX9cnQs6Ej4tQGzv",
  "key13": "5BGATaRMCZyXaSyShvXx4griRJq9Wt7LMYpdHydx4j1CNVx2wczeD9sqMsZpKXqo2VWh3bS1vqiFdmimtZpYHgkA",
  "key14": "XDit5m4t28KPbDjtmgfHJncFL6Pd9PS4nbrUpRs7KvsEJAK8HQYzvv5JVyc4xvVjkG9L9HZLnGz5gT2yPYUfBj8",
  "key15": "5psYWKeREyQkZLCWDeZWMGcJEwyitHXVhNXmTRMEGmmDWna3c3pgdda5FRh2P2cCLDcknQZV5jMimQRjyCTn9ekm",
  "key16": "3yrkKdDSfPnMhAPfjHZRYPrnGE1j7P6ww65VVV2Qb53PBpAscGrBRCyWTdsFujAhm46uj4ggEjEwDHLnJVRgJZyq",
  "key17": "3xH9yG38yGutQTGB9PnEPBKDUhQXHjzm3pPKVbmrTaegqDyX3LDio3gQxazYNshFovGHbZctYTRWTvsEYHWxxfDF",
  "key18": "4J4hgZCwE8CqofAKwcxomGKgpjuBUjtcAKy8zsiUvejoPEy1p893g3xYbchMK7SEccKCeW96e8zx1zAucdh4goWh",
  "key19": "3ay7uUsEemXHthsav34XtNLPLt1CqxTHhv7iPxv1jPThKku1uFcZg8Lr3vCQ5UFmCCvyRh6m1C8dJTDtkp7NRQsq",
  "key20": "3K6bR5hrxeyiY1WgrBotcefN7NFW8W5Lbx3udxWwsrkAHG5x5vxpdCYhVngmDZSDwrvMp21HyRw7TGsHd3VbA6JK",
  "key21": "Q4NveNsiUmBqhAyy7t2Y28k1buE8TL7pfVu2MvMpXEbWk1wE3RHvBBFwvEUkfURiZPgM8zXrA2EcNEmUwhEckwb",
  "key22": "21nbsvukz4oHmv5WYVoTMSsxrNh5Jzzga6zLDMvk2wRNaoczUmKTmUcVS4igAb8R3KnmmA8tCsdBF7q7nVefgH5h",
  "key23": "5k5cwG1hpugjqXLY3SvSfdWU8YsP6xTsQnA97So5i51ziPvK4zt4yit7A9aY1CDd3k5VSco56XLpwViVZ8XheNuB",
  "key24": "33m6vHGnMbHwFQWot8beAeV9yHjpKKUa8RzyDaWDvTKF8n4DtrpqhEVAaFqh2dGLZzJP3qRLGqowHa41KZDxezVt",
  "key25": "3TzeVBnowzfaSvVZs8qeDUD81YcxWQ4y7uKX6yxYkfX9wWJHgzN8y9sBEXsprqza9o9c5eQS8374gJgs9GiCxbY5",
  "key26": "jcUrde59Fgb2fh2hWWbUmRzULmeEtgnkNDR2SVo5FgHSAc2AtMNNBUmFNGr8gWywnivdr9D7j1Kj8d3AbAnN2c8",
  "key27": "2iBrhHNZzFcuJkJ6aRxmoeurgaTxtzrjBChmfXNkQ6ZKGc4y7WZbFCM6riDaEi3MjktQfURmC4ByF6iP5mvtRdEF",
  "key28": "2Ws8kfybtonieXkPK9T8L5HQ5YpEKSAJKBJWmBTNgfUXZJu8U4nVh98v7hj1qqyP3BebhdXSjMfosWwJp4UqB495",
  "key29": "5UoDUye4BruB9wWGL7kQMFq8QJ5Asqr6jfuEakUmTViotLV8moMm21Sn4EJVkBzmu898J8xcoFsEdrYWRRPdxT7p",
  "key30": "5qHqn6exZgWgFB5Hta79C8nvPVYdY6UAYSxK8YBvPyfpnH7o5aRNkH1J7EYzdTnTPLxQCeHJMchCQjRWw5Qe2xYw",
  "key31": "3zub1D7KxaxpSL4Et1SP47zgFYBzQtZtDw1NkpTCfYR9uVaRH2h1axasis9BRFgXjZvk4upXXFTFbwXdDf4Qjt5P",
  "key32": "3v5WDTAfZzuJzCgQ3A4D9SpDDgFxjvZgPFDwUasm8aW7SCXHZam7zhEWTXcJrbR5a2HrGxEq18NQdqHhf3PNAJ5V",
  "key33": "19gc3jWGMHNnzVbgMayyza9uoGr1vuHLd18zSdua72DkzeQ9sb29EqqrGUtah1V8Jf1fm4MQWMZWgK3zWonQTGw",
  "key34": "4YvxRJZpoRUeb2Y2uePaPMiLKGankQiWF8XSzs3Ky7DdyFEvd7KwwKEpX8Nf7ARNQtNohrM6zgsrJ3turN55PkwC",
  "key35": "4vhD51vg9nfNtC7bTVhccYUJGCJjNTXhABLLUGHPBy8MvqhoZsR7GX9yV2oymkYgLRm55Ro2htetp71YN4eaPRZ7",
  "key36": "4NE3ym3d5tXetmFHV2q7uAwyxpswT7EqBp2YM6KeuZnG2eeVqL3UohQckEjWzWwSgEERBj5scm5PcBgznrEDNLXa",
  "key37": "48qspo6iDUMSSQQdG9iaG62ejiJjuLc88UYAWMSP9YgFy4Lqzzo2NLgtEKDzJihxzAnXUK8WTMXk1Q1G5EzfTP7Q",
  "key38": "5PLXqRaDvqZfJazv1C73KAoLdhsdgZ3JE52sfYGUBDdnLuek1t3r8yo2cEci37gzZ6TBUYEUGMpK8wQqUhu3jFaz",
  "key39": "2ZxsHAdKWTLrxp1LnywRc3mzYEe6mpKXruuyb6iofh9ZGisQ3iiWfP6b3oPQhjDKKgLRvai747v13d1xZ7NdYByB",
  "key40": "22qrfuzqKLeKVwkGxH7Mhq2YXMa9kZ4rVKML4hd2tMPk94zbzZPMPGeQpF8zAXNuz6PCWwhKcSQ53THZBykpED3s"
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
