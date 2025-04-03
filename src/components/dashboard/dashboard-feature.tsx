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
    "2g4no2y8xhJGXQnR2e9L7QAZ7QEnKZZUj65WCgUTs21Sb6RjW5TZXHubc1x2CCdtQhyFRGJcaXGkYZzdBPPupCxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pLfbB8dVtG4XBLaW4AnuT3EcMne4WoELxuxEmCPmLpFGoY7VVdd7JPXQywLmRxHNf7Ld16dq26n2JSaRGRe6jSS",
  "key1": "3Nss5o7rf5Ek4Dpjks4s3sWK8f7ToY5X3WvqqSmBNK3P5r8rs5XWQexMRj24QckC6XAVUoqb2EL6Jbv1obVPzbG7",
  "key2": "4zpZmUWBMFbzbV4Ajn2zMTQ5x8GTc9abqhMtvr5p9LzbDBAumoiEB9jYiEkDsAz7CQvvKfqKb4wxiquv2yJ5RAbR",
  "key3": "umN5svcozieDAgicnqaG7xCvkxyMqBQu6kRm4Tn2gy3LvKDr39weqidVn6hNSNBoeJ6EXejWw3ZKHjfroYQhuW1",
  "key4": "cMb5siQGLKFkUSxoHxFuMqPeTL5qrNThxQdMYGNQwG3NAwUU48pbz93LKm4ERwnBVK8S1fGXdLVtUAeJ7eURYKZ",
  "key5": "3SajziMGhBLZNAJVtaV6EFBRm87pUQ3Hckeyqw4ic9PxnQUmqSGuYa9iSoBKS1mnKTHkKzK33Pqc8YYs32kEEuVP",
  "key6": "47wvaU1WRPMa5dVyUgK3bYhuqLpXANbS1QiFUczTSmh4v6HtL6GPp7Jj41cBTXn4XSZqk51qrUMgSmLSrH2rHNd9",
  "key7": "nxmmrgDThzDExEHGNoFUFQ2tfjS5p6vj88MA2Ymgs2qZoBdhuvXYQSEba3ntywMNnNMwTM9CxSDf2bdB5Pc6hM1",
  "key8": "3WvLMpbseYVJNN1eQHGULyDg65odwncfHc77cD3NLwkccCF7XvY76RT7StyKbi3Er7LMo3kbKqduyFWxY4NVcRgj",
  "key9": "RDuvZYkKDhdnJPUJ8rS9tXGB2NsiNBHwP1xJMzwcENrWzZFWNQgaPWdVYdzMsvJLzVQFXJXjVXWsSG29DkGgN5U",
  "key10": "4fL65s7Scuv5GjmNczdWvBcNSsAugtqWqsKuxQJxQ3xgXdaeaJgYN76YMpUGsWBP9XPNB1g2f9jTkAFHzUCETZQv",
  "key11": "4pVUNoFaPeTLW1Pnz2BBCirZ1nurCtfjsg4PwafSXuVqa7H4h1CoJvdyvPdPZZSGg65Ub8WETg3oKBb6MZfrQyqr",
  "key12": "QHhBuVg3z6KgFRhMCuLGgZLj4yAzE4j4aMJseViaQStfgoDNYK3emWnSsPGHmjSX2eVQwV3d5G3Ep5kLzbJCQSQ",
  "key13": "Dn1UmsJmGvb8cq86wM9Sx8Xzi3on31jrxbQ7YAGFb9nGFAxCwqEi2tqZTzEp2f4bEQXd9XZvbkwe6dhag7Eu18E",
  "key14": "5cmoriauw2FkU11LEEoGDYifQkH86K9V1TyMn2Wf2xdmWvPD7eCK2YWSQ36ikW3fwvdhVyS6oeXTh3FstFozsqkB",
  "key15": "3xR9q5ynLsmj5WnuPYbwrvBvMGS8yZ2ohWfm8LW778uA3eUQ7A38vnnuhVnhT3u9QriuSgaN8MnE4svKUjuMxb97",
  "key16": "4t3rSnFGRgRSpxFs71kyUFuTsKAXVvj5k5puuqXZ4gQDWYYHoEEzurqqXzrEgWCjaBjCARCo5yF23o4KXGorY4T5",
  "key17": "4mFCCmYpfDS6zrBvQjuhbvXZ4ymykcHGkRZPJEyFbenMaGjdz8NpgCm8AsxgVpHqvi3gZa6shdonRQe3raJC5QAs",
  "key18": "3PCZttvnsw5DiH3CM3UJkfYwdrwH2arUBrdJRpJN5ChEM3RBgLYNuevZU1NbcjVZbksAntGEcggis7t4KhaL9EqG",
  "key19": "5j3Mfrv5ysd9b5sF4gs4osEZ5NXaqpshVrCuDrae58uYevKe3PjJh73MvTDyNbEPjQtrETqWkaM4QTkp2GbAaEEZ",
  "key20": "4R48aDJ1j3Un8apB9zQtEr7HNYPhgykjL8JoLgZZ8fSypQRLjNSjPhhMHmKeM4u8k4Xrqda11iV4Npnd1StS8xTj",
  "key21": "4os6fxjFaRPotoCf1iDfZAsWQrdR6jCLFSpoQvcEjANs9C2FVdAwseABaUpLFqdgLmJY65d1LYMnwFoXHsPyAZMG",
  "key22": "21gxnWek5ymJVFtMLrW1WpSPr64Bz4cuws99WqqoHUsV8DqrwBpK8sgoT5GodVnDEFdHrbU4i2gjH6PCKnEArZwX",
  "key23": "5jbTpMfgtwo6Q3RaWWGuzQGtq68iVWbDPEhWfXScBDuM1jvFZNkRB3ycT4FuCwiyT9SUM2DjKcMdnrtckazozKxF",
  "key24": "p91WqhKg9bHiP1uuHkM9vMSWocPKuKVG7VyeQ9grgEgGLKPVbpEUpwC3GxzSN4FcpGRfUmggqZq82STh35Fnn52",
  "key25": "3CWRkvjNT6nSZUmz3q5Ad4ZaQSuDx4tX4pj9LsbbyjtZsSwZW8sKb9uhqHjqwmmmcMMQbTCL7gZpAGfshzWnYNUB",
  "key26": "5X4kZtWX7JCd3jyrR3qtjQgZhYdZKiNqocfJBhTQrVvHdEfYqBS9BKyU3NuoLWLqtzuZrrLbDPMy4NTARUA1gfma",
  "key27": "3FbYiaiNzg6FgvE5zieMVuXAqDVcf2dURKPhD9UFevJitLHNYot36sTTzGjZzq8c4pgnrd2dZTMC1UtwhBjaTQRh",
  "key28": "3mLgoXHPnmkTgvtdf9zuQUnZBYepL8zyfSCsmkPSb3ZsFvj6CTHcWvnRpD7wAjqPJm3uzyz2RjWhpviDBpaaEF1Z",
  "key29": "5XmByKm85HH9JdJov6PLKb8VEk8G8AopaptVgVbMUr8tG3jqgf6wk3GrzAhXudqSWXmZPqpHqjHyJi183HqUCe5D",
  "key30": "5DxDw9UyihX1hnagFP4kEzKQgBQq2AH4U8bksJFevtqcsYjNdmN6rhA8L1QcmzPEoEjCBawkwUd4qbZLS7oj4Q5P",
  "key31": "4NsxY5XSAJfXSTofhfTebqYBpxDzTg4XMzTBrnETh4igdQjTxZtZKcNzcqRAD8531NnFcs31yNs49TLnKrp3YudT",
  "key32": "DbqZxuK8jT2vv277Zcgmv7TvCBeBzggr8eC4PfQDCBNPH4o2JUFPGyX1y6qA3w8EBwRL2KKz5QXQn65wVLigDM9",
  "key33": "4Qhdn56kF6j73owThv9Dspj8XKhUWyFcGutjCuujJ27imvhnsPVTwnxELLoD99szy8T3Qm53aRLQRFUyeTfKLajf",
  "key34": "5KULviFXtRbnR4TabgkST4oDL7rn5U3Boc5WyC8zkPL9ZxRvnAk1Krc6ZAUhtVv98yDZ3V4y8FkK5q7Tzqs38Hy6",
  "key35": "3Qo6axRaQS3U1hBPC4dHuCpw34iB9DtA2LEqfKQuDxfQFwDZ8zQUMC6AP4PRYybcU6a4V63hUMp28HmcUtipRESd",
  "key36": "5wSv6dx9gNK1gbvY2AT9wzKb3W5denedUyBtM7oGopg7fKHkfuPSsNgrSLDQjZoXxnRH1HZdhWKjL9LmQK7oUY6n",
  "key37": "22SwV8QR9Y5GFXkBepPaKQneMWjwuWR9TvuRVVEn1qP3gHxUGthyKz4ocuwUErH6FQbLH4oF5LXe6Nt9YQbbUZor",
  "key38": "53Nu2kWgeFfhVeZhcysixBe5Zy95VPKrJ6AWqvcsgdTvXfUztVBe6Nx66vHmLdK4D4nvPBd4jemHqfzaf2tqJaUv",
  "key39": "64d91epdJYjcWdxhjXaGmARWMYGkNcUjaWjS93uudPRznwEGGZMcGYXsayXcCgYbY4aEngV91EUYriwiJEG8xY2E",
  "key40": "2mD3qmffgDqzYwuywQDqcnbpUxrzvkSjHECWTsq8oSRBS1M94zB6yiKdoyZisup5nLv9q1WMZP4khLouARaCP1P9",
  "key41": "3b9w7JR6xRnTcX6r3de2xC8MQ2Szozh7ZYtEfXBzPHbE1nGYb1Z94VxdeFbptnyJxfUpRZyU8gNfFxhrzQuRfnfo"
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
