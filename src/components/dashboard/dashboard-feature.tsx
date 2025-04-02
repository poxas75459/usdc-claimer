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
    "2N9RChzu7FK77vSnNe1oKABCPNcrvDkSCKtDFiAQGRTB1b1kZ83Q8R6qPfTx7U69uvGkXsfsTdwEyp629tdbe44e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vsapuEqojZNdLeqB2vX6pyxzDqTYW9e5AaxSAK3jHReESSnvQMh7jU4cjV46aNuAwEmbrS4z6ddtvP4PeL1xDdx",
  "key1": "61mPMKp6NXJYdJ5huPmxhP68S3x1baqbMfNDkF3HgVGtKYvPyE6PN2u2VSpkWfxPwZxknVJVhFZUAEnrAjqJs53v",
  "key2": "4xrRGQomdtE4ZoCUXnRzcTSHbC6GiJV6uv22bVqZQzfSMZtcCmkfvqE9occe3TGkgE8eWa3jaKZpcGMo9k9gCFdj",
  "key3": "2pdzCJEKNNvAfyLEqTPmsZViSaZe2Hg4ePZpGDT99XjjTvNprM2QWv6X4vrnd6FJTi7B83tfnoYEhSsKogMxEYAt",
  "key4": "KmLbWrg6qnn7UrGyXXSjvL1rUQn8gFJ7jQJip9zvJ1DCidUYoXNRh9jm62qu6bGUsJV8ndZqRGYBXATmcqVtmkQ",
  "key5": "579u7WT5DKdUhdtAMJ5jo84LEYKZKfrTbHyg2jcP7uWFgaaURpfUAPUkKqRchzSuEUZR48yWGTYoXSDVSSTz6Z3S",
  "key6": "4dGqwqnZeDDGSPewZzpwwpRXdtGXdtGtKyG1XqJyHvJ8TdDm2nbKFzmToZvCyiSVZWWe71nFB3vqCNzZWtrkvLc3",
  "key7": "3ka3GbVFC8mQB6iWK4PYFkTkaDPyRCfjkAjZRYdETiNzgoPCJ4u7G3dCgZXh9esB2kAVt42GFqD7pkTBNKujeUjS",
  "key8": "3W29h6rMcgu5wBAzS6brhtb23N1xPK9BaNkLFrcF5VyDu21erqr8WRKt67UgL2qTPibmFRNaF7HhxrYMVyMWHDv4",
  "key9": "3ot8wqZSPGbCFvmNji3N9Uj8nqqHhe1mjQPyf5cALqUwNG71oNA1y9cBMPpFQ5yYs5kgbRSnfptkd9dm1VvtRTgr",
  "key10": "iURmYEkzpada2oc584P3ULNw9PAGxgrFNCWWGa1SKCapKwx83BtytV5QzTGGSrtcVigfHcx4YruWsem6ZF26THM",
  "key11": "4P6W2PBN9YbcbWAnCAo2cKCPbdjpUuyfJ7UCubZDA3VPmMGU3LxxZkXu8SQ8UZPyko9bTh2173uc5goyksME4qpi",
  "key12": "V1Uxkeb13FLJTTrcwR8VLewGbgaqewBL8Aa1tu6tYX2X6EebnvvhNCGCJLCkAwy1mVAubMuUAHwyZuM5tsrV3W1",
  "key13": "4h1xcrWyAuAT5b9cf9obmnFxZNDcp2jMST9CQhxVy5SadA9qdvLifpP5dghMV1QY7kcMQUekwgffHTM5CgFhC27Q",
  "key14": "5DMoJGoPLL9Ce4NARYJoeeJSn63JHhuq7tkRjot6VAZGEYoszAGgPmkf13eKTgESoiebdn4bQh8suUzyxVw7dGea",
  "key15": "2bKTgqNzMJbGSehcDJBkB4pKdZtRcZRynPk6D6iShJEmJxRhsLcQuVdxrya6QxzWim9F5PVCfBYHfVuNcXp6WFdc",
  "key16": "3oeV17NWsgbvE9PeDKRKHUoTFnYBHMkrokYmEXNko6Qpm8ULaJ7PsZjbDYQ9c4zStX5ouLitCYS92zSNcB3WhBqy",
  "key17": "3rYjNqJ3cxkEhr2TBo5EdKtnGKJUm3WkZbLG4ducxCh3sdcLXAhgEdb48rYM52msDiE8L9xTsxUfVYrM764x7NkR",
  "key18": "55Y2LPW3GenNgWe23MsmmCczpvXmfbAY9iy7F9FtaK9bQXXi8JoHpmhUcb5Q7EiPTkYS28crnGUbnuD21dsa8xoi",
  "key19": "3KFeYmWvN7ZPbSWyWW884ZqGa7QUeVWanr2TA7eHw8d7fRrUsiUdTcGsqKNfFch2pXmEms6LesuzKSQjLiSGjheG",
  "key20": "mzXrp8bQ7M1geUkMXJ7o39S6YCmu7x2RBS7u9uS1yc65eRpVTtSYSNTMRstfQEn87g1TRuUeyJhsf1Cn6cw2GUB",
  "key21": "EuvDxuPyNtwVwqs3zqd4nbVB68Gw3xXKRC3ERLmUcNh86p5rgRxYyPnTALzUDRYJJt5muhb64nwz7KysQWtKXYa",
  "key22": "44vAPR7XwqBwuAVnH99VwP11x21zpdYBgj7eRnBo8Zwmy9nizhpmoeL8ddu2Rw4gC5yREzM9RMdpPbSVR1RoGEth",
  "key23": "3Prv5bpec2VYc8js8hcxYaig9tVCR2mphSdatXNBTmYrvgKtFGZw8ma2t1cpzcxC5DvrZV9mPB1J79A7qZHz7DbC",
  "key24": "3Kg9iPdf3qwakD8FvGQqvxoZe4q8ep8by9bjiY8LDXX6vceSyLu7uDiEdDtKmJPk6r6zJNa6jrnV2DZLQxqZW5Gj",
  "key25": "5NdR9L62vX48hPvRpk7ghcP8jedWZ9KybuydpsU6s7TaRK2KCwpXzC2WAHp5MbabgKtA6vieZHwc3woqkRmc2ZSq",
  "key26": "5Vt3kjEjfwYiATBNeRUmN2h7njQLBDkfQUSmGErenEnooJ3xLQwFSwUZ3pSxL6naZ9hqGJvpgT4XAskye2YGDc1a",
  "key27": "34Mj5LzCJpZwbiK2pgbcymExbxdjQMsymtozbvo24NjKPGaQXC9x8CZGDRjDnfkukvgHEqSxDHok9N4Zt4P5ziJs"
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
