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
    "4ZCToqLxbPU5xgFhawnkRiAmnKqZe74PVY9DSE4yDib4L2HGDMZvwnSKB7uaA3w5YJ84KZ6Th41ngnabR93VgkA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kCwLoqGbVBYqbMqGT8YKQWkG7P5pjgrCJMAwXpzph3F8ErUXTJmECqSKimdkd6pyLaN6dAZQRiyzM5aiERCCyA1",
  "key1": "4uh2aLwuCpf6cP3Jck9ihkJTPLzmQnavwBgFhw7nFEytj8Hmm27NVrC1tTPLSoz2smWAUhq2hBWqGJGjkZfX3oQz",
  "key2": "5CjdVz7v36yiwn4JRVnhsqBpYqRHzL5fuJzH7q6MHC77Z7WYEKY3KLMAN65Eha5W1Qo51usKs6r4fEP1qPYHt2iq",
  "key3": "5bAjPFdtcNqjTjTS5YjK8qKiivFQMwunQuc9Fbf9zjAgze8s1AC9Nt4vhpbfYb2oLQZBqnVt67mRdrub3V96mf5d",
  "key4": "2KB2ub4K2AgWLsoRD7ojnzHApp7aty73EfFuDGUubjLq9VCgp3yMsVvGoUN9Ksd3WYvhToQpgd4sFMTHecfvZ675",
  "key5": "3MetTCtCUpKySwet2dcbEgx5PLeKrj9PZ9gQ1MaENij8PRJsAjXTtn6YEyVN3bKofnyZQwRrVG7gHBmLaJ6nhKnV",
  "key6": "42PHeDujJaRqUV3k1h2HPFjcvYNicM1Ro6fwUEsBQWBK5aU1ugqaDtjutBxdtWRM4ThQjTFjX227Qwck81Snx5Ne",
  "key7": "5x6nYkKQidEhc7dBYWR4VT3B16xsGiRUMERoieHRnJq5Fh3AGEVSCXh7eGB5ZSKyM6Udh6gCwS8xRXLva9tcr7rr",
  "key8": "4u4Ht8TqUaJHP7GtRjcKh9DXj4Xf1CHRj12SJpSmBPYHXvsCqNifGmRhSsqUPf8L3UVBqGmrrCfq9Ja6fLBdW6FY",
  "key9": "Dy2UX9SVS5cvDj2BSbQmHBnycC7qfVkFjwpUjVGB495W9xB2eLtRvSdceNM1wjA5ErVtYtL8EeLgwL9b3rHn8gs",
  "key10": "2YJ5crbW4DVyjeBXrooBupD1wcfpsvLtRVRyYKUBMuNqinDBPCoe1aysgSXb3j2Ay6ZSxqajoVRv7L5FN5rueuZD",
  "key11": "59DNbiqVXkF6iunLDHyybhKxPhTz37fdTVC3xtX85atvk6mNDmrLhmz7g5PdCXwnJZ3m8JgthETyBgA6Edo3rKip",
  "key12": "5BFzqn2oVXtApZi3pzveW2HZTLYhMCRQQz1jw2qgLEyWhfkTB8kpLXYdJrDs36yqY4JNrppcTCPowUV3Jk6cffda",
  "key13": "3UheV9C3NEWiRKs1My5ZhAEmJ4WduuXMkPJhhB8CEBTc6FyzJD9kqwgaEJtejTrMz2c8bJHih7Hjv9WCzXS2R4cU",
  "key14": "2qAsEa6EMCnYdiGKdgyjSfSm6Ma4bcSViPwEpV17AwDv9EgPBhWs7oh4PpDBj5gmhDB62gcsWyU6FhrLTJUAGRpH",
  "key15": "22tpFntjQqsh9bxGVgQq8mXSF5e9xGBaokUCPBcFTxkEcM15EoeH9ys8cGFYDvzzZmgPMteK1oQ448wqD7f9aADu",
  "key16": "4n4PmdLL7WWDL4YGUBcWqcPW7W2UfqFn4Vvjq94JTyxByH47Dw1AVuYqqR5sMs3UzVJPrmu1hgrscSeBCJBzdrds",
  "key17": "7WNi9Tb4iMSctwXaxfQtARJtdt5xb18UT9HSZEm4vdq7tLpyykZQ6BmV3TZJszBGNKVJNnPBH1LuBQHss7MqBF9",
  "key18": "5WJKkVV5zhGsacfcESQXfW2GqjDCPL2oR4CG3hkF85Z355ZSwYFpUYx4jfraKLM4UWw52YALDtkfN8g2C84eMRB9",
  "key19": "pqD1oLDBPJVqHMc2uVmsowgDDMwsVjtsmjVjgS44bjJYAVqKoYqjDWJm3K9wVTVfF8oGkr2PyVDR5nyxq6NVj9s",
  "key20": "QpdHpDp6HKEQ8aeYXrgSNHTXv9tixphf8cda7dK7fpGoLEonR6YezjtbeF1DzCtyEJQfmkzv6Xfwk2JPVZksqx5",
  "key21": "4BhPwvRqkzA1gPKMFDcSXdUzteywTVJvmBv2eXpKCAdxnG26w3giav9ZcLMikBYPubm29mnRpcxh4wp1BAzDpmBo",
  "key22": "2fVP368jnqAT9Bms4ySRxSfn5TgWfvNLgT7xLoei3g8HnFB8JMN2wY2ooZ3c7VWmzH1sDAExmx2ffFxAjTsN92MN",
  "key23": "474JeeKL7Q9wcmUKFirBjy2mU35BgJex4PXYeQrLeJdKD1mEDi5yLeQAGe1jozBqSRcecWfX3NzSHLSs71PpFSYd",
  "key24": "5c42Q49o3R855zVjLjXyyfyj11LTt4iHEGhwzHAXgna1eZd4zN2egnC449E8XLQKB8iYQ4Y1VPMk89CYJZwC43zn",
  "key25": "3oZ8weZfxZCrvVhmqnqx7u5pWeEQxZ2c1y9vR4mz9HDpvZ4KtQMhgLm9K8NxD6W9LMepAzp3DmEAQ3gcPtThWEYG",
  "key26": "3Rf4wfJzhSpRZxvCF8E2Hq2Uaa8mBg4AQeapdD1L4kKM3TnMFzpnb9NW4uRb1cAnCjhs4QZAbNLXX3LKqxvQ3jJy",
  "key27": "5ZhR7EHChhESLDWpiXco5yysfYuhwkvVwjfUVapZMeQfoFqfS3DFWAAe6vDqmwtT1EwiKYNHBZt4CLMK1ck9aeA3",
  "key28": "T8on5D9KmytKKkH9TSXizHaDFocoS34bZY4BSX1mPVRwdTeHSnVQ2dMx2T1xutiCvtYiynkgQtLfab6QYwp5Yb7",
  "key29": "2ZxWYyqCJJNg57y9eoVdBmeBodBtMth2Tbxt4TKCJuiuSdbXFut5zanxjTTerDtdiNbSpumbwfguX8nK7RaZZQsq",
  "key30": "5o4SAQWPgnxoixc2nkVY6TP5TtaJ3opK8kx5EvdFXoanWmuwXyTPo41tZjjdn8LFha4pb2jhcsh6kPrzKKvKdXdD",
  "key31": "3kVVxwjMKszv7aeQn8J3uZ85bz1LEhLdvbFoJzdJE9TnNe5kKs4GfAoyqYReU8jzj7cB6pB2CijYzxN3JBw9ZNJ9",
  "key32": "2Nx3y6SJmT9p6y3AAUmGAS6fqVGDsRA9U5Te7qxQq4qWnHaXnvgNKRJKbpc9SgmexsnZsmbvqo8BPWxLQHf2s5bw",
  "key33": "3nPZ5eJmwFzr1VLoERiMw39BkxPyRXe4EnhygBVpXJ2PFczhfCy8jJQ7xcWxYiP6tXfRBhmKkRAecqDxsV849ygM",
  "key34": "2nmy2CXyPcosqvSVwvgGGzeHNqy4NK3kSeV1CkdWnwboitu9Jk99SHAKezpZGKmU5eKCa1TzDrsV6qDobkgBxNRM"
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
