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
    "2CH69huba6SEQ6zky1FCKTFSitaHhXWgauRUqsH5F1H7jf1PF7hd6GMvJuTJgiVUXJw61Qmhrtb6HY48MiLjShyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "545ZRiBBfZeCuJtorAQwDqmvsDYgdqXgHDFBGGPfZtddornU4BgkQ77jPRdBCD5bm5hsL9nx6PYN2fRAtJW5XFwD",
  "key1": "5XnZZzv5b4rqzqaCE7FT6qbTdNxprVJsdTzEz4GzZjgfbvAR3C29mXQk2ENYhJHANdQJ9fRW4hX9ZspbKVgGBJkr",
  "key2": "5Tb1gPCLd3WVEgJtH3u3rswXDVvgzo4pp4e8Pt9giQvPdrxQuWCHXnM1LERFx8XajbHMf2xqDsZJKHM3reGJovp3",
  "key3": "3ZxBtWMtrzUQ164Wr47LTVsaL8HEisExmT9muH1jB5Tk45y8hdFmES9nf4G5cT2rCNNRPZEcxHJbsJ9cfHFczyp7",
  "key4": "su8ccrMP8rfUqG4DzDmqmGWxrrSwy9pbQXyfGUF59RarJxdEJ214W6cv5n9JiXKPdFjqhypcnYfrrC15CER74ar",
  "key5": "4YLNXT5BdLMwUoW9qKciRYLYHtG6simsX7ttQARgjLYysodQtsm4uRfEHcF9hz8nHPwRmzS8aoGkJy9msZzoAXcK",
  "key6": "3aSEx2i2XBzvLVCfDdq5is5Yj9R1YAUMxWrQw1xTwcWsaV1B1Unhu3UFnKAsg7g6adjyL77dzjQsUvRhe7kz36ay",
  "key7": "5imW4tVyEqrQB5PJXmz7w264BXfFjdzzHx6PQhmQNxMUyw3qaET3jahqi6c3nNmArqY7kjTYkHCCWHNYnHCF5zZ4",
  "key8": "4SurjfZrngL2bfmXtv24Xngsqg9gARK4kj3UZGvZrYVcJqBThPirwhVxTuschov2os1G2FxwZhN8WeE5jyZHFKsr",
  "key9": "Av72KC7DRng3a1doANcLK24ciVXokqbKqKKtiaNLAJjnsxGkHEFvAYtaHkDRbE52RxN5jH6p7q4VbkNY67uZo2i",
  "key10": "5M4VHrTiMnAx6LfrgQWggpvQtb8LXW1qA7nfdHuYCyujczach4ctBk6Ndcb452MBiHgVLvkZ5HrECRCavsGCDiVF",
  "key11": "5oyCvj3cnrrrSRq2JbV825zB4yiSu71apWwQq9jRqaftguDaoCpHyAVpgWeqcRERxyPzvZM2K6Ya7Ffv6cWZrkrz",
  "key12": "2SeYwDSLFmUdxofn3YrsTyKVJmcWzHbaHe33vEBiKm9FEB9ZsW8T4wmFbP9xAsCBqi5H8TjfddPsH4VT3kUJbYni",
  "key13": "4SL6xq3xXTRAZKSR5xDo8j2DnW5MbjFyiqMqxMBjYjbnKoy7ubE8BTTuq2Kp99RZVZyY7P3Sqer6SUSrXZEFTffG",
  "key14": "2jk3Z5sycBaT9aWjovMGPVCaeB28wz47qNx3RAUZRHaUoK99H2REBTxuUyC1nPx3s4NJqfMRPtHh4NLKjDpWaGuj",
  "key15": "23h8D5iRaFeoawuKwhZSbwwM83tqYg4w99vmYqs7AeSRnacjDDZMpEfepMTqeWbua7U6QXLzQNEzCfMk82odCNyz",
  "key16": "3UWt5LGQn2UimRrtdGrr33EaH5sYa32dBUZ7y4qsa3EKmruZ4oGsDEriyX7dJxi7pQVSSPvc4hAYTkmWdbyAE8UZ",
  "key17": "SJ67fC3GGuovkQb6Rd9JYPc3sCZ7rS8Xit91rFTmKWMQXf1bXqrpqGZ31ACBoNbkUmtRjohSRA45HU2GoQ5Pfxj",
  "key18": "36ry427arszMGxWETUPJc4Mc4FGh9fgz1r9Unh21panphGTnSoAyyG32CmDkWgEYZhckWQFU8hAFoYyv8xztpZ7p",
  "key19": "z1ZNNXBg875SijeQmKNCzUcytxbTbC2uk8B55EDHhnKxrQH6fiE4FW4E9VDB7Tsf7VcWpx9inACK33dvsABbxr4",
  "key20": "53obc561EgFTQsqT54YrzEzcgxru6sUm4KvmdjNmDcVpNuQAPFSCTh5Q4ao9pGixDsC8XgiiwFbk1VQuYzHMAaWd",
  "key21": "554XJ9HYchY4DgmSNih3eFDqLeSCgDeytE9enJac8i2BWEcjdjUQPsZxWRZXYcq8XPBoY86dYeMrQpW3KHt4jTp6",
  "key22": "5XDKWrN5xBAFLrgacNDbtUWVDvzZ3qYEzLJevRff9L6KghMEAFieGaKps6HfabbSEBgauNamsuhjptE4Zrfu1PeQ",
  "key23": "3KF3naC5LEEo742koZBng9ygfXxzQgwbnSEEax2SSQyVoYN3q5Msh4n49erHCBZxmG1PXsTrBhWefxg1nNBzZVpQ",
  "key24": "5Abfn81nyQJcQHdt9NZvg4dqm3yx4n1HeXerX2y9wVwXiu9xcfrpWYdhoSCxxy4G7cz2vNaVp3WF2AereYACvfpi",
  "key25": "4JbTJ1LjhPG1kT2ZfQFuPNCf1v6swNFq2VzXfmyGUDMbzhAsn4bM6TXBxD6v5chQ1e7t1e6cbaTu3vbddyVkfyju",
  "key26": "31XJBHDJs9bKbTrMW8JMi9aWUU1WsrKdhWdxGrWTvjc5rMAeco3zuTTtqb1F6TMgmdf5YgQy86RV9S8sf5Bcm4ZP",
  "key27": "3UQ42HBZaXyrsKD21hbJEn2nJiotDED2CMrGNiosmH8KXVFRgwfRZwr7avZt1v9agDwYc5dikVESE5QDbYPQxH1X",
  "key28": "4gnubyHHHqdF8QExSZaRVZQXnZiXWS8BxVx8parNjycrfqmB4b1PbXiZFqGXfV4CfThi4VdjRFvEyB9Wj8LYbUAv",
  "key29": "4QQh17491CG48rotZAt8mPGNP4GXGDA1y5TpADWmZRV7BLqpZfofeoukwCnikNmi3WCA4P6fJpjoZgHoWzCRCbEp",
  "key30": "5krnuyMo6UjatHfndnEtjBkcmnasQB6fdMB9uZ1WYa8EXGoJjSeu2N8npXXPNaqf2QvEmQqFJA2hgY1y781ngLTD",
  "key31": "2DrV3ciLUGnScCRzM7k87w8NJJPFj9rw3CT9LnXQWYvXkSovhQoUS1Z4opc5qji1Gz1VFLQhZWZEFNmZHoXvXqy3",
  "key32": "4cSbUmqXkqMhte2a52p1ZA7x8hZrTxLJzdDorzGT7TM9paVxFNgUxXhDaXSBEtG8rKQmc6oCoNW3Vew43JZEq8fR"
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
