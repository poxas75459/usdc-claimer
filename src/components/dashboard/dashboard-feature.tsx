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
    "46JZUQXyP3ESitWqbb6fr8wXRCiFD9PwMSPzqoB21qWDCuisayLNYNkgEb4QCjLtxLeCt5iPULzcb5imjLpyN8J1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MEwxpqCZUwrckCw89KsSEZGc9hHUT9mk37tWstPbZ5bKzcw8saTqTg4dyrxVR3vmwtstiEkj3ursWXqnv79wjb2",
  "key1": "25aNH53syWwPoh78dz8uJYW6M4cKd7VwLysozk1yMi16iUckxVBKkKqiRSoBPisv1TUxmpoaXBGMjneHvvxa6CNj",
  "key2": "4feaEK3SD83pLQxdMHJqFBRMvzDTiGQfKkV5tZuWhUu1ErFWEwLpDnJbsjbg52fVQuoU2H1Qz3rrgsL56sTHyTfc",
  "key3": "5p5JNpW3QjFhUYzXJfFb2bbgoMhxhdgUaiWgngCyoLHkdYu9EQYmRmAH3di8GAgLk2bLGB4Ms4oxjDLaphpZj7dn",
  "key4": "3UMTiGKdEuNmTBiVrjPQbyeZ4dshVvteMrAisYCQziH2j1KWyhTmys62X2ru1rcybnRta69uEhXTjqGxrPVAVk9g",
  "key5": "3qGMx1zVWtb8NE59u7qtBgobuVhjCuniDCymayxrrspy9ApVaZKXHEFVsKBsgwtZE2eKjFM826bsjNTtNSFEVipw",
  "key6": "3KEQdbh9qNTM8snopNEN1eSdMHnG7ZR3DpBwJz1YWv2Hrvm7TCN3k7oqq2SW3FjPboeCiBTsrffkZHH8TjxYFA7g",
  "key7": "5g2kakqLe46R88zwXhmoFJgdv273bGbFy8mKVC5FeekNKct72f6Hziw44unUV9KQBoz53SRGXKoMZRcsKSEgZ58K",
  "key8": "2uZmYGhTmBesufDqbX7x24t9ciAPNwBezZrz4a7DDAmqhwJ3NunSyhUmRtnsvCDgRGBpLnjj67zLHHtmLV5PpopV",
  "key9": "4Hpd1wG5RJBhdm1wGmLSKCixWLjh8d2qG5iwrB4tGKAjP5YNPkaybQtD1TaX3WVHa5TWw6atUHXyy7Rf5pxACxkm",
  "key10": "5k7duYNxayq2QLF8Zm8T9WRp6gRitHK7TA7pMhTp8cekUSrpqrqYnuaTCMR8akcqCnqve3CCvZ7aqFeuG35U1Ehd",
  "key11": "4Gyp5KZgLkUM4kGFaGuZqKnb1Y5p3duZnmuEZKKGX3mjXzrZNjcDXMoSKHpAQZW8kc37934uPNisv1Mbr6XUnk9H",
  "key12": "2BnMiPKW6pGW3y7yxy5gk3xxMGW9qD1TfTLLzzBpGgYVW9MR2wkc2eG3vJoTZSLwPgdptsdLejcUSjxHZCJqBBUU",
  "key13": "4KH6L5VPpu4TCa8abHNohsmBUY1tuoW39CwpuqA2vU8i8P6Y4hjRW5fQijC7kerVFL7x19LQ2SKFRibgfc2XVUes",
  "key14": "3F6XognBUdC73DnBfv1uNuG24XBWr26EPhK4ZL3sp4f8GVAKKvEnu244WkDhh3bwStrfHsfGt4Ab8kC61E4yXjwW",
  "key15": "5Z2yGFrEtvewdgtb1GHjPdLayjWgogtZ2Q681DVfPk8DV2CJGxUK9LdYJD6vh4EK5M6nURSJikv1JUxCMnum7Hse",
  "key16": "5jTQ9aT3Bdz8WCjQrXpBGZPV5BFbARuLKzHcCvpnhEa1CrWU89rSTLP2S96j7jGw84LwhDecrpYyDEEpVzqtp5kV",
  "key17": "4YpJLRjn7ntSbNZKWvCJofzt8ZTdrPaGiXxRMQa3wZSUYkNdQcoZWJcDzcyaAhagbXigp9r9QV59JP1hnwP7fjqa",
  "key18": "4KyPf1JuwG2diHDQBofrJ6ygeUJkkYpyPXEH5J2P1hgYiTEYBBKLDoNcEh51y2MqXSBUKRrpt2D52Ft9tN1UY1g2",
  "key19": "2pwbWtnxtUDixejVpfV7zngYm9Ta5azAUcUKNqHpq2XMbM9rWXCCD7iUmELYXwrwibBaSpA7FufdH5gveHfCXnmF",
  "key20": "3tHQ9ABVVzPc6JStW9VJKXmdW6jgnXY6bwRz4J8Se48BUHeHMcRBLcuN9YzYGWs1oZaBEJwGnbmWMhWyiEZ6TcrF",
  "key21": "2rXzZn8DZVBbEBR856g7UYRqYCg1oZ6sz84jmQCSHQmxcThuM6xMYf9ZMo9aZbXhy7HDyy3gP3mVhBkWuH1H2jzV",
  "key22": "3D7oSd1DMqcKKvhxC9YqsGVXj3sje5vLfGxVKgcUSeS3ZTz66XujUooKpNtYDq1wGxqSj8XX3uCxH9Lj7n8gGcPU",
  "key23": "5P2zCinxheZaNjnxuaQLXR5Y3JVard7vA17et8Knp2WrqyGRX9TXWSmTmV12VFEEGaYzXduzErNzTCyoY4nxj3Kc",
  "key24": "571J7uMBcNce4d7YnZ5h7ycuM2vhxeGaGewhcKRawCrRfTCXBePiycS9znXTxaFdEY8zxkGTxtCmoaP4v7mZtQdS",
  "key25": "5RqTpeXto3McfghWop6jcmGtCu6pSfnrVpsFzwg3kmQpBzSe7vdE1B5s8H41KdUFB2ZnTnRcsCntNb6SBPKuPzv9",
  "key26": "3QkqNF9vXA2AxYsvj7MSBwdpGvvrAzvJ71PF5N649DJgfdmyFrBc4uzhsSAnRgt4NjMvMXJeKE4kziSupJRFnxbB",
  "key27": "3dtCdWbh24Zr5cRLYyofeZVXj8B4vMSSQEP59r6DHPx8uqYfCbgqDpiVYx2cZiTQxgoESSfqHR5GkaoR4P583DhF",
  "key28": "55hHBYV9jTBsXdn1MjdypAE8pG5edVC5cPMad9mW8PjQpQghvRSrDEtm7v3XaiSFY2SLW5J1urn9hwMcf3hYVkSV",
  "key29": "4c8kTeZfD6Ze2usxTzt15MLceHQWNUryEXGP4GFuABZuiuvwqFf3pxboZaAtfwrDhx2N7u2eFwr6f2miod9fCvJF",
  "key30": "5LVWEPA2jjYfnFiKVwYEXCVnskbiMoMW1YvajJu3wLjQaZsm66GTBtujxpJpFGf6borbhrCVbfBio2SKBJA3swrj",
  "key31": "3Zpm6N8bZFUZVfumeMBNGqxXDnXLM3vLNMQLoSmzQrmLRZyTtA7nbvrvciRPmhxhEqBVShVSKVD1Ex8s3h1NWerk"
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
