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
    "29RMtEekdhngzDbK4dtU5E3dgxFAm9gLJ4EjchARNdcmP7cRANpxugxtm4eXYjyGCZjXjAUQpCd49RwuKCy8R2aV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BL8vDRjFxMaDCqRM6fwegaPA17n5Z5hky2Bb13zrnCGMFswAqd2wbu4x3nD7AoZEPQTc2T1Vfh86YQipzKKbWCp",
  "key1": "SAYJTNtoVxWkSet7sjTVcEGfyLwpHWUG9LrCYmEgkrxZPVZyKjV3EtBB8iRrGSAxm6pjRrGBSCUjedEDq2Kdr5m",
  "key2": "3nf6qPVqpfLqkaAYRvLiniFwk3FXgV4TYxXtmJJimDqCvyMZgC91k4UUnSNfd1CXi4yD37oQgeL7cbHwgZknb8Xn",
  "key3": "2qcZ3svAhhmwFuWCHJkQ9RsVzyKYLTMmoF78fzePbanE8GY53giHJJjSV29it7rLkRcLYL4WMo7Qzr3K1AgULAtn",
  "key4": "2GK9v46adM9AQf3qsHYKNJpBDd5ZzQe6pQugwp8MdiTjjXUCaMV1LZw6CH19xD1B5tDiHWHfGYDkUH1FFL1UBxst",
  "key5": "dWoRL3GjPjCqwiouz3XxGGyjRkYtQFjA5HmtS9x5S8Um2kxhb4UXKPR4rRz9rszKBFf1m6rpvjdShNkbt69WAhd",
  "key6": "5hVRgGu4fKz4NBDeXGdjYUUw9nGuCnM2q433fKJWNBDqwaJ6redGA448WppPeqN9rpVdCkB87U1VMhMKeJa1DQ9p",
  "key7": "n7GavuREpQxHmW7re5XrrXv618r781xh9UGGJsbFGD71v4J6bTvbJPxBRod3ph7sHGiBQohRP61ucxxVXzgTAzQ",
  "key8": "5jFDb3DokvTtNyBGMkPfZ7JR7nskuQi6i8DYiofWrsJhp25GuhNYZPm6EWCgAdfBeZWhrDgxrGDeHwscmYGmw7yV",
  "key9": "4VdCzotW2EsgPzUpXna3R59MUw7FSuZM4vNTqczYmQMgx8aQdCpcT3boN2jQmdZayy8Tm4TZkNrJHo15fVK1Jbfh",
  "key10": "4UqaPLTZ91ecX8KAeogBVwxSjHVRXNmbw6Azv7r9JUbFDZbEbREDer8XvMfjkpkbyfkM3XRABFKJAnF6Skm5Hw59",
  "key11": "5JDRZMVpM8ZsruCqrGNFmGh7iRQgViAWouY5P24L7py4QEfEggZDBa3apcVxoQSrZmUpC3uPiThnP7KRUJGy1ezG",
  "key12": "3UdXJuvyRHoEubpUuTGZb12w7EZ17uMe8S1wM1EYsQr9aVyYbcjFwxgnSCm3WKkx6YLmRcYAaJER51YQgQAM3dp",
  "key13": "hz1gwNaoSX4AX5U37Y33NfYNA2EVG18RTM6ZJvvNAduu3ZrhPZr9fYu9Yx2o9WN5f2NJdKP3jr4P9zqjLaTAL2L",
  "key14": "2jQinkqjMEaN9z7x6xfHh9UYZmdNfxxta7G6H5EB433zxifTtoHfBBP8Ru4pwgZUQoFa71VYFVHsEuwDGUEp45WY",
  "key15": "2XTTcfC1ViRQBMDT9w3cds9uyq7DA7qPhrErqTwy8EgsuqM6DdDYhgMDL4fYv2ZvJy9KCVSjsdDiMbYq73Kup7W4",
  "key16": "2VyCyYzzzwrRWV4RheCVaLSk1geo1Sr9nZxjZub7UpY9riNJg7c3gGV8yH5EZgoh3v9E27vJWTvCuCfws7FH8mrE",
  "key17": "3wZUP2ype4QBwKrR4Nmikk3Hrzs6KdCqUT6Gw4MKsdGSprv1cY3WT7m6sXgm56uuzkGR8bhsVBRFhK8KqMzXc1sD",
  "key18": "5xbUcVgxzuKQ4UHGNV5MaVAhC31gdfoMNVYxpfo1aYbuFAkMt827uHb58fH4PhGZGdfqGjzRE9HedV8GWGWr3wuT",
  "key19": "2yCN4sUpuk6MRXyHmyWe9Eiysbk48tbANPdg4HCpiadwPkPVBgyV9DvPUHViai3KdMiDtwAjUdoPvxzdefAjQuxk",
  "key20": "4PMfY728v6YvvYTiDggBE5C91fYzCCsqE6ygCDdM51VMTpFm99DZ24V3RLAbhs4DS99Z8r3FLhac4pSCW1GB5sj7",
  "key21": "y4kKcnwxLjXQrAyvKpy9Unm8RfHSepzr9Tan7qdLcAh48TdivgaztdC4p4ki6gwbAuY1KfND2uhkqe9akNBJCLV",
  "key22": "55yRHefHn2meDAhxeN4eCyzUErosHpQ7ijWSs44j8kJ89hmG2UKutNGdNJ6SXKUcUFaStYtGDDEpXS7zRMtyjYZf",
  "key23": "jdLkUp1i3PiHvM9NGzvXUZhw69zRPTo1mhdbZ1KAUH7ak4o9DiPH28n2VmT2dNXHJ9REBTosd376QQcyGer1Bhr",
  "key24": "4rkFcYreRFCpC9JvcsZrLCpb8zrj8kobpWGtHLexTsZKfjcqPP44eSSUmuLmZ4Eh5Mp4KYUVCZCTfxt6zgpgkX3g",
  "key25": "2hr2vS4Qh6utB5tqGhZTwt3F7oHLzC5B4mXjCbfWkxeQhSWDxcGDaBcGgNwXtw7YSGTQzjx5Ezcc9tknhe9bjup2",
  "key26": "5if6GsLQPrq7s81ngfxBFmXxPGAQNiwnH9xhsXsHRwThPFnVzqQ1LLpHgceJuY72Rc6sb1WBmqRDEarR9zvKdx96",
  "key27": "2nBjiQhkBgHgmwue1ujGhGC946b6nsKFWMiJmyN5beGm55BCsbdJSgbu8RAgz5qm9Wm6pPyRX9rZpMP73YeLqjq3",
  "key28": "gDqPXXAvKLuEK2uvJJaHde1YrH3M5LC8mabL2iQaDJXqNAVc3edBHrWbQ4fYSfeRmjS5jSobECzYuJuJyKYFpP4",
  "key29": "v5RCVb8LnSrEERDiBkNu5UPpzJke342L49HfWWPWDQVHBSUDKhLsn1KYUrCCU3g1ZStazFTqf7NfHXshPsqU6WU",
  "key30": "4hcv2GTxvYM2iXJBDzR5vS5pdE1oQ7gWaaDCUqWgt4F1u9df9Kkzyp2Fd1rQzQNadkH88WR6e5Mjg79c4QmnRsCg",
  "key31": "2gs88Ynsr7WiT6u2tRJMPgrDFS2yJ7jqoJK7QmHHYgHnaLb2STHLceiWcwkYT5dj3VYvVAep1fh4qF2B6CDjREoD",
  "key32": "5CaVMqgYDY2CBa6CsYLLbHKX9cXWkzBGQxWfxv5LN7CA8s5SG7H9mj8Djx4NLQUFL5bE5VCWYCdEcdgqX8cuZ6CC"
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
