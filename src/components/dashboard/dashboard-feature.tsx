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
    "5wX6NitWdWGP4SyzY8AUJskAnio3sGJtPJTyurro78x1CKUzDpnbua9z5PjAoamcMgXSUNwbRKWX231ZJp5RBvtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pZquaisMnhCMyabt2wPoNc2HzWUj2QJ91nvgBFQCoZnzeZcvLcLxHYy3NquQakfC32kr6TMMHN4TpgHz23MAqC4",
  "key1": "5H3gfTp92nd945rSzA2k769iEuxYvRSs3WFgnCAGUyHjhxRXwkWauUj9E6D1FtZcBHeGDhZwB6KcZtKqJV6KCc1E",
  "key2": "2zh2H2M5Yt9mcwy2QMqbMyZykFv1sLifYgHHTMcZL7dWS3JbU3JthRsDAr1i3YPE4CGmSoWh6JiRUUh4s5AbqibT",
  "key3": "3V3NAAXEsiV5CzAU3DnYsZv12MGAQMkUan26oAKvPAr7ZKbykE4eX7NizVFny6CRnhBcj2bahWDCm6Q1SPn7bC1S",
  "key4": "5rkEVNTu9p17oyo6vsN625Ef4oPkqNc5NFWhqDQpj3ngkKhs1YXR7kCEgh3VXXUCU3DrXgj5vJ1GkniVKYYXqNdL",
  "key5": "3WRSiRL9pnQqyx9wWt9oAhuoYtY3Q8GXWvG7haShLFV39hVwApj7nfVSHu3ojRm4cCUBpww4nGQpxoWaWP6GFN6L",
  "key6": "4QtraFBNPbZpBmNd3joti5djouWZ88WWUzs2LNCVQRmCvJEiWGwnkqAbFrSdfgSTnMVwHJZJmwvnH6wGG31WpF2X",
  "key7": "4gLWDTbn5ACoCELXJvtdgdqRJkzGyH4yHWMGT3NWovJyLKZV5Hr9US3G8mMgWy264zA25KXDMMZJRAPfs4SkmoBp",
  "key8": "3EYAi3ncrnM9xCLxfP1EQrDjwZhLiUEwv3uEgSdx3tAHmk7RKxF3oGne6NX52i85Ti4jK6gNw4CpuVF5TxCn5WK3",
  "key9": "2k6NZ8iUSoyXNKU1iefGvNZuQ8TXZ5XdNraE6b4wEu4KSUxfYKtGxGcLbZ7PzmC2fZjSnGvdMnu8FWGtGNpS6CVu",
  "key10": "5nZ8bo3EqjHqpebToHoj4F9Uky66tPgaYGJ21CJmZtzVKbQJFcBv2bXrChRUKm4Y56v5ZwzfxaW7da3kJsStV9rQ",
  "key11": "5JveijHTeq5iYND3LM2KfPLdrks6Qmht9HByFup4Dij7VBdraVcYfkT7TowH9NP2wFu9mmTeweSQ41c8XMQnDn5B",
  "key12": "5cGzhKEnYQT54kBgcENXHL5bxpb4imQrxe2VETkaEfTJ8H1gAvmRVLpe5voAZaa6u4YPuc1Dekbd2Q19SvgrPts3",
  "key13": "3tsNttWgDRg8JVzjsCBX6hAoEoZ31dJ5dXQ6C5QaH8C1MU2smH35XqVtvt2tQRDLLLdakmDZ5EuNqsnrbK72aTLy",
  "key14": "AhaWt1P8cwhnPS4wPVDgWofywf5iEkWWZ1eLVGPWzNq4VG245KKpnpWvFmGqoBmRmiAUr4992ZzZnLt6EDJLsPF",
  "key15": "2BSwyDrBjDmrmaS1vvfRi9eLDuZT7enHyST3P9rw92k6XTn58JFGDrbabPE3UdFoL7hX11rtGZX66UjeJKBYtSVh",
  "key16": "3MsuybsFK2reiXJDSyaFPdx5dbrsu2mazEFVNQaYiiXQHpeecotq8kEaoyNeEJMJ8GCR2Pznk2hJGyPYvnbFjQN4",
  "key17": "zAV9d78UFo3Btic52PxKTFYLCnvfgxvdwu654cUNGB6mULGRHAqUD42CdVZYrZocA7pc9MZ8VMEzafk13b7Y2Yb",
  "key18": "X7bFavXUGYLCHeXiBiq4zBx62FZLFjSLmcxq7scJyEcLvrSA6nzbDan37jP4v2EnKDNHrV5eDHYFSxW8Pu3zGAn",
  "key19": "4U7DfDrt6ADrPoZYMj5aWSvL7Paojp4Vn6v77CR27FMs8QJLo37zZtBsz5uH3Ncz7tmBP1CudNJthC4No4u9sFhi",
  "key20": "nFtoS6xHwZ8gnrfBSF4v3gMU92GYhYgeUiDj2kCq39LfQVhRxBBLdyKzAvBspxnbHCWURj1TSgARoAjieEELRSJ",
  "key21": "4jk1LJfTznQFqq71VEFNjzGGYFmzgFPWGpQ2LKQM7RdkxdawbCiwLizEbd6gRuteSj4VVFb9d2bPn5WYDDLd28uK",
  "key22": "2wUjtGkauoSEiC5Ditmhq8xkcDZLbBt3fuXd3ESWnUsFWcGovSjpnRtz8PrvNJFotWLYgXanCfztmgnJRu5sWhDm",
  "key23": "4h9YBtvHkgUAjkqAvGM2gPZpwVcEKAFnAFssgzXoem1t7fCYoS8PaqdRbQKGeJZD44CwRJQTkJ7jBDyJXXyeH4yE",
  "key24": "Qi4BHve2zHKaVSC8W7aKAqVoT7x3PNNU5KinpJXeXRcuwa5agKDb3NhmcPkwQvv7Qtq24LrJvF2zSPF1ogAEaVK",
  "key25": "3G1fSKdnKANv48yrZCaGKjagYF4X3yMmdMLXPx6vkSt8D5hnMauCBde9fuEEWvSKAdtkdeknsr7aXo4zg24LWm49",
  "key26": "63DxkK8LEAvQwZKMCHosMgtvzXy9AzpF4p6Dac8WUX7K547HNNnCCGQUZFcVXR2To5gURMC8sEDjgbPGBz12Bq4H",
  "key27": "Lp71xJMdUYHuaZNaKxwnKm4QaSce4FwrRrNSVxKV5vdgDTgHmzdL2kqNPbyjQEvmt4EXxCqKsr8Mdo4MPAv6sto"
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
