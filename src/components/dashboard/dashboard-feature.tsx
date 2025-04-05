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
    "SMLATzTd7nKpuQ2JSDxqoJRAbbyjicauAiZcKH6wJwF95DLro2KpFr1pVQt3ebCV1va8GbQWK8j3CCNhTUH8jh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PAiCsKuSt3ZK2RNRMepsULprhWmaCcZHbYMV5vMzapqzsx8eYramaio2WhMcw6SK6vPt4ULtv13pNVEZmKGxei6",
  "key1": "4sCXzXx8VpGfP6iUu9KFDUMngzPMaVr2F1UfW46HDgoZs1nFXANeU7wamHEKDBJrezBPxGQ61EkzGgSDji9yHooz",
  "key2": "4XW5opomUhUofWugQ1zhFFb3yspcGcapTqrms7BtN65SSAxFpxTmkYx75La9RmgDwyCkCbXTBHJb3rGkcjM1FGoZ",
  "key3": "2S6WDc7KMXfqUuGMivsUx4UXnBVNqqVSV5iiGt3amYSho18VTxLyMTWwnQdocXL3YpjWZMpEVPyMi8qMnXR1fpJ3",
  "key4": "4eWe1FcU1Avj6NdWs8GT9TZ2TCJ8fyH2kiXkjmbeyp6MMH8dUxqbaiLdiGYC3jiZEePcwBMs7jN82Z3PNNhJqAwk",
  "key5": "5QDPqKU4YQ2QkZDiubBgVNAXbG3hGDpf26RuZTSq4inun1zx1zgDSXcyFfWZckJqfgu1iHSWfJSWJyLyBqQQncxq",
  "key6": "3uUHTQcWB177vhR5Vb5qQLg8dqhR3rJzRPbUZdej57z6s7yt4LNEFqHRiyJ3gp9MX7k4t9dhdJWcHrP1wyCaJHT",
  "key7": "TwMgQoXF62oiZV6dsysyQbpB5nnrJBwopC612w5qfkhQUPLxnMbaQsrLQxfQKNewZ1wzQGWKJm3MX9GKJ9fnDJw",
  "key8": "58zmTZJB8dgEsgoaVmMAwVstVHcyALEazkgB2UfVFQWtUCtaiuftJAutHJeM3yQ2zA1nV6E5m2ViQnSKALuZzuJs",
  "key9": "sf5kpSZa73J8DZsjhG4H2ucsYVbn4eEtXHMqJqbCS6LUBerNTwhSYga5NFZJWgwv5VptSv2Hu3uuyubzfgsS9Rr",
  "key10": "3YjX4wkP7F6toVYqaFQGn9Ad5tLebZPQBXpdB9tKs4enLzECKNSe6fjGxYUaZGK3HaBj3MYFcFb3Bu4Hou5cZ28P",
  "key11": "ck7dRNpy6HPQU8ARFxwFfXyQt5SjrhngFiavGsPuemFQpHNWEXdxT3qnuecvahuFkwR1FZZBpgBqNXPKmLa1hFJ",
  "key12": "xepCTzmUA68jJJBKbKXfgpkpsMj3phQ8FcpALj89jpKuFroNr815iA7JVSpFJoKFAHxMNDYK9ngjvL9jEGRDWzX",
  "key13": "5ZBcRo8JbRffvMUcBXxVXYF6p24CxPvJWiwFtuGcsxJd7wAfKAVY3dDLdRGG8jgBBgXmeVYa2an3znsoJCYEU2fT",
  "key14": "zErKyKjehve2LHjGqoSonbticXr8wk7izWEbsVCEmyayZuHyvswDcgVq9XiN3ce6ZALQnzzUktoqToTrumKniJf",
  "key15": "5f2kHVmb4duL76mdaeoQ3Hvepasf4x5uFxsju5v22ZGTb4iaBVUFMmLzVxnGCeo7Eda1i1r4Wz1Z5agY5hTLgM3r",
  "key16": "2SFndBGYwcM9tCZ14tg7NpeCZiPJmBMjMSNPmiusL9FEEcvdL6dg3B5gtfQxivGhdfXYZ8GenBdeK7AsqKAxf9tH",
  "key17": "4DADNaqAxJeLcLavJhKgsEY8qTBq2HLYZXcqVUKnqYyhbTGuL2B5kKpgYD2PMF4owsYToSzxuiBXRrFuCHvq9BtD",
  "key18": "5KqShv4p3ot1RmhM1ig4j25pdGSpUnpD2Lrx4hY4CiZRwgjJW1KaGaWJQswnb7ksufUyTD2mhqzt52HTUwhtbEcJ",
  "key19": "5NDvmwHUmHPRjVp1a9vYzAwQxRDLMeHWNwZMW2mQZ2G9sYmuQFfY7FTfVRJaxrPqA2tUjmSPUvUHHQUSzqn7Qvgz",
  "key20": "2rvHirH6g1Reug9M4KWGccN5E2YVrZqxY7riqaJFPJ4tDVX6N7ddu1LUSnfs5iTowHkgdZz8S6rpPq9rAvnWbLjZ",
  "key21": "5tkzSpLM8NbyM8VdvyFB6PmhZGYsweDJwCzVTKCby11QZ2c9Yy6xvtxpjCYTq7LuV2Ta6WA3hv29gFPX2DrPafbx",
  "key22": "2d2hEHaRroWxsdcZopfQeTgx1h8gFb3wbo1qykG2mEMP5VDeXSeLcSbhSiaZwvmAABjmPNZoLfQw1BW898AEPocx",
  "key23": "51K14bCSmkb7ViNf12xZ6kfLLDncmxPikaDjFL3o3t3fzRRJLfo9h8AoB8mBLsjfEYLfJxupP7QFRCaqJGPgsW8E",
  "key24": "2mtRRokvJxTqfGV2g4vyU89Pq7EsBWgbYuFt1z9SbnohA8SPgJk1WzCaN1oVSpBF3WKckCJMufTV7YUpR6kBV7V4",
  "key25": "YnNCXWG1KEhMbJ9Mke2o1U1KH4f3pCkmiozpQi3nJ9pEihQnrF5zJK5hovFq24LywzeQEV9PKRA3FEA4uveBdfg"
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
