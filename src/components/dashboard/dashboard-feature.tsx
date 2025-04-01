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
    "5HP3SsDxunCP9eUVUCNqeycgvKYsVUNm4XXX1yhtiMBfPsLST87XY1GbiEZELAEyHtvpRLcvmu4yF2yTe8nuLECS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h1gbc5XaGsantsKvYZRh6123JLtTZZ523DHDpzVjS7mzEvouJfXMDZgKA3NQbbZLoup4SJiS4vbWqycnq172jod",
  "key1": "5qsTXSQw3waXV5CyDZcBfV8guB8gsL62JQiFv6wofV77gwX4763FTUcYdYSXES5n9MhjgGCcqPvVBCeYXJckXATe",
  "key2": "2nEdWfdxzwBWocece8p43M4MXHKU8nRhNZu6K8RmDw89qQuyLm7Hwqjx7SeQUtafHp9nheRx5XXk5nngz2DmZtvJ",
  "key3": "2qCCNjVSDXosEWesUy9eSbiduWckAvS5m8CJn3L7TnJABMpRrjFbuc4WiwK49u73ebiHEcgfkJZJQSJ9m6QWNVoP",
  "key4": "2Q8b4veAvByQXnxUVeU2pnhJxLKuJUK8zjGeKLU5ZbjjPQ2AWNqCW7c9TMrFDCy6TXx8BvzMd5D781SMG8DTLsFz",
  "key5": "47twhe9jCaY9Hm9tG6bJXdEdduqwrnFHQM6SpNc6XauGZK9Df9iMA8qArpTcQ8HN5726krvS2FMWgAGeJMa9qciG",
  "key6": "BvKDxmKcccUhrGRXG9uE5qSxiAwSQfpp97MiDFdDFRyfigdqTakcgw1XBqFjFWmSRvw35bVZSbgueR46KD8MGZi",
  "key7": "5J8S4gqgBtg8xCkyDuEwg3iK61z8DMCC8XjBcFP5pKDeS9JJMD5nStZYzeLwzZaS5fmQJLqKmNLJ2wXPuckiQUth",
  "key8": "2kJgHHBmJm8g3uwH52Z7jX6Wt6g5JtSFsP5X2q2htrYP4zZrqZD2zADz9i2EgbEjZnCcLhAQ9JKPqQuo1DYEWV31",
  "key9": "5GZtSBJ2DUzmVv4FpoQBADmmKHc2LX6XryjTbvmCDqQCMdaogibFJMkxH4sz3s8SDJN6FWEEvo8bMBRa9bpb4YHn",
  "key10": "5FTVnGuyUZZhZVNMB44jLzAE5L8cxZpkb9a6FRomqP75xZath4S6wws9fQZhJjH2TNWA8qx7riqtJtidoadjxSSn",
  "key11": "2Hfhd6dzywrNV7khLENPS7vpV3CrkrXHaFHHA2J3GaRo5udAsDE5zYGDtA8rviPzTPjcZ8XzCMZ9qLUMpiJa7hHo",
  "key12": "2CFhxyq9RH7d3MM7HSQt3XRhroxLCj766y1S43ELZ3k7zuEuv1T1hQoj75ezBVVJ1aaM1fByhNJUKfkMuZ4FQxJW",
  "key13": "ExXteNKdqwAkZ8mqqsvQbgVJx9BsEzpsuvonjBuV8XWgMXR9gcEGHs3h8LgrhmRBC1gdB4ZpuaNd4Q4aN5ZRzbK",
  "key14": "5VXi43fXCSPyYRVKcYvVSyHC5fMbxiwBrd8bjaj1J5yYNRDC9MaAfjv4MumCJcSSAqZQiBsF7emfobMtFtjM6ThK",
  "key15": "3Pxvn53jf54U6wTUr8RLG4HtK7ruwBnhG7gJ7QKbSHASsmrxjeNFGaLAocEdhiG2o4GXNLxMkLaKSd6AoGw8MSiF",
  "key16": "3yMrS22UpbekkMt6rg9z9isXcfNLcBiGU5drQ6XMNYbXm1Rwt4hfyHbRZEttqfRLp1QC1dSTRu46byN7rr5Biy2X",
  "key17": "4pfdqiz6goFumc7gv1HGH5cfBKLQ1BjPhHjbyGMq5LrzUUzUGM88UNEgdtUnH6qosF7YVJpV6sdU5tqpd5X3EoRU",
  "key18": "ySaRGVHpEWQfBNFsGLdKXjSNxjUfPB6bHGKcncmqV9JHWP8F9dySHpsjRb9LdjLXY3iAujwKWaHKY3dc6wnEDWG",
  "key19": "5McxTCcqLHNtAXjHhLJVwTMcGw3c7VNz5U6vSN2m1yLJ7i8NaeoaqpjHk85TwYcX7KhcJeyB8TLPzhDf3aT4HFnV",
  "key20": "49h1sE8c8RwaPJ3D3XS3LNZefpVh4GqT7KFWeNDuFTpnqfReUDB7Joq2gknos83wcdeprZRqmGnQfH52conTbfe4",
  "key21": "427suAvu6Gq5cGhkuNdGmosKbZSGbM4ijkh2nx9P23BemgR8adjxyVESeQ5sQgLYd8np6o9EJoKzeq74AmFLPhX9",
  "key22": "3wiVoCC7uk84nzd8egPCsP97E8RoiXXoES41bETHqaprXPFXAQhK6i3rMYhs72kcgML1GQ2eTDZebfk71Me15LAd",
  "key23": "2dboi8GqSKUPue1NJLbF9k9mCwvxYu4E9ocXtjK1oXED1NYmYR2Sywxx5iBkta4L3xBwAJ8Wbdpq6kJ1n6SL2yNL",
  "key24": "5eLrDJ2xgqeYXSa22F3bEHd4gi81wm8mVhX9z7DNxd2V44RBcEWe1DA6upVbCwtAtW9htJZbLS6RMSxM3HDnG9ok",
  "key25": "5Y72ifZtxMi5JPG6ajfmpunoBUyPL2FKHah2sVdzphBu9ZLVyvjTaed8ZgbXcB4FPTKDQov6zAmZt7LxCSrcxup9",
  "key26": "2GvwLUr8ffeDvG1kmvtQNf2zFaDDNWi4UyyrHnaFxLbdHKzSdWB6G1Gjz7vZogzMNU3uLxNL7uMP4NQyiwNqW846",
  "key27": "2GZAEXutwrDdR5kjvp4Wu3jHjzMZxv9a9xe1CYTXccJQ2NUqP2STtJmhXW2p7nQKkdUgLtRN2rTtzSaA73QQQp1a",
  "key28": "5EtFEBAa2zpycDMpkDaPwQ17asSBT5cCVWCT4vkQiakPzr5d3rhkH36Mkfs6L8KsxGWWgQmqz2Naxb3gTsQY7so",
  "key29": "26eSmQTWbL4gJCqNrzvpWLFPAJApqYFKPxmmSLaK11JCAe5vyLUXoFJ9Xyx7gNYmAYEmKjeg7PzY2e7TE4pUomhw",
  "key30": "5b7yY73iegX7ef8xKk2oTdFr7qv4F9SxtoHddf9FRn3Sj8mefB4P54qCHtACjsAq3Ax4Ri9dcjjfLMuLYRRLN8ig",
  "key31": "25sfj2Jpj9h9TLQdWXGs1izyjDTKbcjUgw9GC2zgwjkRv9QHMCAajt8r57fxKV6CrtGPtUFt4pnPj4GfimcXpvbT",
  "key32": "2s1EfuJfzbjiVrdf96DYVfsSspz89qML58qFvcSnGdYoa28kNP6wb6bi7vcw9zUF8qp3BLvwEQcDeKjgdFUo93uZ",
  "key33": "FvgTbJeTcqSZwoY4ckczLPZoVBAyQAi4dsRYtAbADW7nukYb6EGkUt83UUxQWXLfcxcBPkgFwAs71C51rsRMzho",
  "key34": "UNDDeJjfybuJXeAKprvLyTe8WpHzKavANj2Z3FdGhA4SqBHnoQeKhg6QBNjbGB62CbmxZ3YSVLraNeMeBeauQAv",
  "key35": "2qbKCSGg4RJGqZPzewMxodVsfKmoMRG8eKq77eHbMFXq35daB6m9UBa6ZPSfvrzxFhHv1j5niNeVHUzwc9kKhqyG",
  "key36": "2PQA7ErKFRQvquVQBm1LoKPUPi73G3eL9uMFTw3Y5ov6DcxJfiw3ycma4F9PGgcg72vZR3ENq3hPWDQm9UwSgMgM",
  "key37": "2FKN4MQCSbGXwsMKssEcNymWEeri2BL36ABjS9MjJc86RYmDEPLS5csynGPY417KwKkiTxpU2fv25yVwjww7iF3v",
  "key38": "4FfnZvPYA3MbUwKPs6hN1LKnADdGZuV2o9xX9UYyjtphXVrkbWUwKo5g6Pw1EDcRSHkYw9HBbdamz98E1NwHxcWz",
  "key39": "7L647FV5YtQiFi8S4hazNCzS6JxKtutmEg9UW4KUhcn1SjDNFJ9P3qfZk1okNDppAK8CH9P41WoSbm3QYzVombM",
  "key40": "24DDGFKe43u6y4z35ET9Xe2uFsH21gcBBjorK3H9MQk1NFCntBQPZB3PMvBQBXDQGAzinaeXuVwE6ZK8qCg6AhW4",
  "key41": "4TESFqdty3P9aZj1sH3exqZgjq2caJakGj6KFedbaVE2sWwKZvMtWyyfiJMPwGeWockjJH8cmicP2UPHL122AqfA"
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
