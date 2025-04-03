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
    "33GKZfkiVxkhZdHaGC56PDF16bwrmGhJznSCmytu48s39fACTbxBoCEtRbgQ6oUE3yHnaEJD1RKvmoXMgYSsNrcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vdgr1m43TsU3nnuq7K72aGq7VCySGXEdeUmpUxSMiFaaAYubRNk98dPN6K9Q7DMW9gsmyQaASTFfkc6KKYRzFvX",
  "key1": "3wb3MhsQv5oJob887KM4GTDHZzRTM424BWwAhDDMvS6v9qhkLvJKFuSM2kkcU2miNurJandZ2GsnuaLCod2Rjf46",
  "key2": "4iuihit6HXNMCcd2pRGedA3EJuc3NuiS1c7wtsKUGJw3sUEu2McRzuUduskGBPReCo25PEsJeXd99BXt8Eksq9e7",
  "key3": "51zmsbSJBwtUX1cwH3ykxk3PemBxMWoqVxeQ3NWp9eoUUnVkASnmFMjddp2bbKVnskW4EU2BV6vqScrKtCq9wBWZ",
  "key4": "3iAS4jQQfgk7NxAj8GgfQBgV4C7jtAS2LTZnPpxSRtgm2z3n3PLTcoyu8NjPuCEhdqtYNsanvA6jDonyjVjkD2Ji",
  "key5": "4rAkzzorGtkiKubgUCMt7N76PaPHNEgU1oRsiYmuf2HFBfTFX8anP5EQbEWnVZnc96owenVpypi5vvA3cGabBU46",
  "key6": "5FBZSMLnNbSdy45b2fuA2TLUgLgfZLg2PXR9RN8rKW74uQrpUxgnAVymtfWMZg8Nw5bwA4kGPapQGHhWSx89G1sw",
  "key7": "4iUjAW7PHoXqsCBS5cL7KuPUXyKDWHLetccaajfDPVgW7BjZQtfYp1TTtTCJwrQucFfpE1iqpPeMY8EtfRgjYCzG",
  "key8": "4tZwwjM89Xjh71EuVfTg8SnLDgFyVQdY9ZUqPdska3bxS4JTDKHrFc4E8aUFSHGc9DrgKt2vaCMWU6fvCUPB3XZJ",
  "key9": "2JJv5u8otad1zZMJ7hngB5sNmJosZhskWsnsBn47b5aHK4kchDWpE6nJendwEv8rFWAmhNVcG1UaMwYrxEnFQzM6",
  "key10": "3EzARkX8ZmyyYPEN3HT7ttwuHhjE5h5e3x9HY8SonShqaU46mJAbLzMpLFJaiiphhfu4ifqv9aGQqcoA3tZfs7wX",
  "key11": "fktGceyKT3HRywC1VqrPNmvJByp2PiUMUAc5ofsMonkNd7xjHYx39Nm9SC5kKT5tJp6Z3Q6Sky9pMQ8iVVJej8K",
  "key12": "5fFibNpuxdSca2bfVCJFS1gEzzPSwyNB15UpyMGQgAVwbCiNaTKifMiqGcjGXtjW75rWbCsWiD2Yhjo8wdcCb2Zt",
  "key13": "4PGB9wE8VKdtuyvAyPx5Wk8aLVjadhAWJDAucBXJVdDBpi3pGZn4kez2LwpekQ59rRvFpZ5riSt8qngdC6mr1vbX",
  "key14": "4o38hZTXbuxuzWd9jMFJU2tgsxLxrCiWLLe2R4P1DW6tEZvsp3fWJAKgkw9jzNwCg7tv4AUwh78aH3t4LEetJTNY",
  "key15": "SY7m27UvXrmuLvgEBLy1YUimaqyvSsLdXHBN53ZH6Zc9i9hQYnfqCSsXsLFDF9kAcKfNMPAFHaP7TgwYhrwbWYA",
  "key16": "xXxyqYiN5WXLiLHMapQnGYgUBe81Vy5ZdDg3xmmdZrgwH5PCoFQqk4sY41HopUn3j7KHEeeMDAqQQzNR8q5LoCC",
  "key17": "4hGqWEDggjZCqH8Fs7FAnDLNuUqYmTGQsrQJMq6iZS7VEAzjPVow4u8bAJYudzJU7vhte9wG7BRcq1nfYYMEKqb7",
  "key18": "3A2Z5SLPKfAxNq6KG8XC5V2AKe2wuscyzfGgpLxpctF34SfvC8QJuzsvFocLzWHvLrubpR8nKo6opXas6ExQqcRe",
  "key19": "3LH8zPdgkEj7qBtL8XAfnuNLkkUVNaBSB9ZGiGYmsfekFyguFFFx9CyKuyCU9whF9iwBXTvJTEgbh23DkHH7NNVJ",
  "key20": "44vQ64MpCfPUonpNg6Y8AwH4W8bAHLteG4oUaf34eJMMQ2XqvmV5QKfkotWG9nP5U2edvX9GYzZgpeb953JwXYYE",
  "key21": "2vMDWbQK8t7rQpjbpEkrLsNvorrbbk6676HN86Ai4NXgatJk97VEef2cGFhJcVee6az324R9YAomuTceydVbm8U8",
  "key22": "dfuCuGLZBzZ7Bq2tP6m2UXoxsYDKaY2eGMopjVCp4V7cVUvvkfnX7gFVPTVWMTPYth2pUoQzsMEs1aC7Jr83tRv",
  "key23": "2Gb38jiwjkEQ1RMqZ8YoepJayDNZT9Vb2UnkhrVeYA5M3SewchrqhTMqVWfL9NVucnHWfagJfxjuZsSGgCbJcoNk",
  "key24": "2ptqX8u2qF9D4mgTEFcmTbVrw3MxjonkkNbu9MqPx3GPVwVVr2UYvRzw5XvxTEZDjuUvcBjK55Jvyd4T7dogFV1Y",
  "key25": "2T1vayB9pJt3tzyL1zmbfBkC7J3MEFRzUSxQLRcAqYFmKewPaMqFSPRu7t3bgvFL6GYMp8LMuNvCW4Wn1GC1gTUd",
  "key26": "31mXtsn7WgtJzWcCQqGwr82tKJajgsC2J13mu9ev2oZzsHiAT1T5qeEkrxedr2raWg1AC21WBdvRfV8HGNvf9hLX",
  "key27": "2qFcqT1qwborzxS8bua5URPrvHUQuivTdnNxgEnQGY6wiEunhgeMS6ESke7YWjFisbEsMQANUaYEx4VgWJPANZwt",
  "key28": "45961yi5KQQ6PgMAbK1dUEQdVuTDo9qB8b9u6BpKQ21cz9apQTzkB5APkhXtPhYndnfZYw6spyE1nJaW2W9UJcsS",
  "key29": "4n72TrcdH4DHxfMVGnsZdGAqH7wU5ZWuebnuwfPmpayHqwDdvuBcuhBYdvH8diMmEpgVx4sXxHjhQN4Da2xFih2D"
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
