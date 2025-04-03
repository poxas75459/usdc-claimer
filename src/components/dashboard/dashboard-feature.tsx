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
    "3HjZDDwjE5VifdWYYHhecKJFKafnfmLco3Nss2EJ5bscJHHaKeV6ta4x3dhkvyFwZsHUerCEyp7jHYULkvNgYckN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PCtUwmcEkGvXiSAyHEsN6pYTRTKHPp2iCm1tsjRa5vbHGpch4ya4qRZypW4sJLZUofwxsbsfjCbPRyoAsaWqzHQ",
  "key1": "CMQedvoWuXk8rH6NXVYmN5exDkFtCDpiztA2PBZxpDhNsNTK8PSx9L9y2BmkCsPninFwdJTt8hRW7ZvxUh9FGwW",
  "key2": "45R9in46mkyDyUuXKgoyud1YvDfvBjJ6897oKvnZbPHqiEuNb6DrPbEM9vCA44U8Z6hQp6LDPB3QzxxzcAqnH54W",
  "key3": "5L8NEGDKRvc5sK6CXW4oFzFm6YwgjUgKyEyGG7frHgMBnCHnkAvXMnyUNvTjtouJ1c38Zd8jjDgc9BF4UxdmDQpP",
  "key4": "2RJwD34smbWRdSbTWAWqLMP1suehicwVYKYHAeJrhXL4519zERdTHKN3P4QZan7LwUvnbMkwPe12vHXA6i6NXkRX",
  "key5": "4nyKiPN3TosRmPnDRiwMjXEAHw9UjXSJmCKEQ2Su4zaYWVam4yWPzTSAhSXzDaogmNdzNhMJM6YPZCXRCpw6QMQV",
  "key6": "MnR9MmJZ6SBKRwjFKtQpUPdpRNgayiyF76faZSP4DNbkWQQgLzeoMaY24BJZcJGJqPNoWbGRP1vxq7cNt59syFx",
  "key7": "bz7fPJCo2BRczQ5Wv6SKcKSJXjxnp2enVVHsbnBa1yfdhRq29VYYng54uaXaH9EB7U7m8g6SxHiwLX6hKtFPdyQ",
  "key8": "BnBC43o5ySZwRt8JFQBaHLrFiETJdDkGTvvS3fDME5HsTY7fZbzrDodDpZdC5rfx8U2zmz5q7eKRGYLduoFvTjU",
  "key9": "5hMECnewPfAU1cyrueqgZz9SRnQFnFYFEDSHqdAPJN1zPCcPL3RncudtDnd1YzExSds95su4nA5k3rfxpxixJoxz",
  "key10": "5R7wBGhN76ksmMcv5ze7tBHk5ydnv9bm9aiiX5M3oWqJyMfRnmvEwxZdP1HuQbAVVGXqwM6oiXvfYv9UBngXEEid",
  "key11": "4Jx2gozCiD8k6oH6d9E9uoFsN1VZhLvpHh7VWhVeuJU6Hy7fogw5QE1i99XVFCATbgFzDh6smQ5KqfJhzZFKFr1J",
  "key12": "AtJKE8aq1AfRXjD8E5sSSxiQ6j9U7HvSvt7r6TX7HAsT7TgsLsnCi3nMUmuRp3hYGAAQvwfZenGZfBPQ3TsgZbW",
  "key13": "4jFc2pjykq2nRH2Jq7hXHqXpcJB4q4EvjJs7sYirGqAGV15uB4QTshBMpaiE9yZGiFyc2xogyewKRog1ur9djgMK",
  "key14": "4puEDT4oK3ZTg6d7J7h63JofGRfD5wGuSxjFT5o9AT5XY3ppBr5wU1BVj47fFWvRwWgwR9bUm6JtRybFmLCBVhF9",
  "key15": "3ew1EAfyoJLYqoYEFA4HsQa5LYS5m1PhJm2qJjUifBibQCjMhRXfR8QuNGXw5ZLcquzkkoP5BZAUT1GDh8JMbu5Q",
  "key16": "5ev4wpsUWh9kUdC4BMAT4GF5B9DRykGXPexXwvcwgSgqm72fXWG8nm2TpopVkkSRZMg5WF3HCT2CUYJQinnsvy5n",
  "key17": "2cXcRm3zCMQKNiNP8SBbbBSehFNuNh1rnvgt6nqGNK4SBVc1uf31xN3JAYaurBDRnV6apc16tRDtqS63rd439Xxy",
  "key18": "5SP8gRpQrCpoBBtz1dT4r4XsftEGL8t6pGTXBTZFKZ6h8VvkefiFGzo4UZppttFqvqjEihE6UcvDY6N7iK4yPNi8",
  "key19": "LRn5jmZ2rMX8yGnrrwqpvxKgBo9kkf3gpjhsi8PB4WBNcEQFHMmKFtXr7qqTfcu5B6rE1CEgBzFYT4nT8JxqK4N",
  "key20": "LLuhNj5gZV5EYF3bWByWiPggrdvcyZNhgAr7WcBNFeNPhHJNejeGtN8A6PeDmionXzfCQWkovvJ1n2fNGMs4iVJ",
  "key21": "5wq1ZDo8sCs6mXYws2iCmRA68bMvSi6FX1MbujjdvDxk5x6Hnq7B2PZ4fFH8JtULcv6k8RVaiVdFEaDwQ5k425tN",
  "key22": "3ZMVbzUS7MJ2nfHMHwgxvHa2RdVSWaq4tbZqqL9jbBEcKcGgcTf8Aq1tiBPcVp5z9wQ2wmKZoypDgkq5nVXtLTXW",
  "key23": "5cb4cYeQwhQdvx1BroB3q8wGw4GiFqGQ7kHswvWob8rB3fNidDd3diDdvE133VGnjDCWyawQxRBMtCK2hmQXdezD",
  "key24": "3CCE72fseMnQMi4pEbUhcTpCZF73azhCbVD8cF7mfiLnWHFVZNmfx9aFNG9fTnTjbZJjnvSNRuw1LLqXMQ7a9aL5",
  "key25": "3NnMJgZ8i1rdA39nmdkKJ8VCQHgdANZWkkpP66LjBUV7UQ53x9sj4zq9uKVVHBKyDgADpbJSX143bfrUWsaa4xRo",
  "key26": "39rBg2r7Tpq2zbk1Rjoy7Dw4qr9e13hkQffANeqJEno13PECqZDjGgezR78tJJS7DvXG2xSNTJgsEmqiYExo8Lqx",
  "key27": "3bjDaU8Gzmf2QarR8WrHCFJUFed6uYxoxTKAK7GQXrRR9qEdX3LzcPU5kP4UFmUrGprsW4UPSGUdgiTVdG2Xw4up",
  "key28": "2HZt9znxeqvskq42NRWB1eNnPfL9j1XiLFRpaewzRx8CWAkq9B8a321zfoeR9iUoTmCigbb8uSjV1khyWWvzPsfz",
  "key29": "2bbymPDPz3adkVeQyT8EaEA3PyPFr2i1NQWKTt2cNVFNPEnFZ2pGCxn8jScnjsKRuYBmNqBRv87ENuSycBi2XiBi",
  "key30": "4APVfhT8gypBRn3bXDgPpPxuN7EYuX2jBRccagiZ8tMxZ14xYk9zyvgyMBVGKv9vfcYtt3khyTG8Rm1r73PBr8Yq",
  "key31": "aQQiy4XWy1qwBuTmjCj9AwigBGQNrZ7sk2hDVeocNkqVnUnwF2jNaaA2gxWCRFuiAngWhzUZiN7ktgUF3WFQawH"
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
