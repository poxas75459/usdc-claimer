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
    "2W6wpV5yUF1dAVJD55vYAPkcMftBKXm2fsBUZxE8Fvx5PVyEhivrpsGDDAQTqAi4E5QKMax6zDhjFvDCUT4n4E9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63xgZyswbQBbgqAXaF2zfEwdxNtE2wWYLuwFBvnjcnEzmxmCUJvEy225FCHUUpVQoscAiHSWpxrsrPwbaaP2V844",
  "key1": "3CuFaYeNz1ofnADPvdtaScn7DDTD5LPWMPAEHxyYgabX2ZcZfq1pGiscvprQGpungweqFkk4MqVKMTqa1hFVXXcp",
  "key2": "4kLHfThz1bQtWqqExrLuJtrYgJB2mBHFwgiaDXwGy7PZkFMous5QdZgvFuUFq2vQBrVwK4AunSEBUnattqWY1mkm",
  "key3": "4c2L7oo53nM9tk99zMS42VBHTwEHQuESr9RioQwhMFMM7LiLEkkxkcxiX9BhVjgtUTdgSuaHgCi6umiB3SG3X655",
  "key4": "QeaHuRy2kRdidfZNXCfyJ91LZAUsoR1nbWXcnLEKAktUyByvHcjY8YJMRgGLobpQTGYXNfPLox4QkoPoAx8Rejr",
  "key5": "64QWsxFC7ZtbfZjPFC4GXqJqaNrDCpxSf6VEEJFNTaUn7LQcVe5BYLPeXYCqxqzwEBKZ9QJtyFU68ExruUYUz5ty",
  "key6": "5gw4GmwSsphfxLECEbC71MP2wpzcTPxX7XvihxS7dSoWpyu27jgmsNMzC1kpeXFMuVG6h88LBfXae4ukLpCvooyC",
  "key7": "6738dGh8ceBJPceRjXYaHvZz5npgAQKJj94QyFsXnedutSgGDCUM4uABpvRts4Jg1tiaJKbiBtqLwrqYSUPaqdxh",
  "key8": "8DjhkdBHX1AFa3SQUBo7tdbqa56UkVXmem4nnxDboHeNzAFG3xFzyBTdCBxohxc4biAXWzrte1VNYd6C1LJ5CKP",
  "key9": "42vAbDT6sW9dNev5xADicwttqrno4T5A1S78btW7nLtr11zxhLnxR7h9iRpcunQkLZbuYwqPvHwepQrSSkVGxKug",
  "key10": "3uARbuPhfAwpJN9D8XEBmHVC7wWGi3jBX74o4cguVbAQ14c5nkokNZV57BACR3heGq1BYKDeodjn4LYrSM6hSRXM",
  "key11": "4qgJuM9sQSDPnikuVMfrrQtTzW4H7947q9VkXhjvibxWxW3yA75jicR4SVjaUasRmb6rsJkKijNRBHV1Qt3bhncK",
  "key12": "5fCEfzAFeEBaDKRsX6fD38yBEVPQW5qQBosRm4GHk7DAyZofzMg51NaVGxXteDPhi4YNTqVcxJY7wyw3mzFKPsKA",
  "key13": "bqFXihtnX73B2ArmWdeMGUskrgs97ezEfQTXA9tvAgYQv5FfYSPBV9x39upUfsarKeyoDgri3WX9Cm7WvkWqCW7",
  "key14": "2cswgaS6dVuo25cya32LETLuNgi6pFf56X7fSusotcUmTDVZn1SEqbkFZJ5GYv29L93B38roZv23ucZ7i8WjY5hF",
  "key15": "uahipCFk9HHM2LkjuB445ZMzA3WVaE2tEYGaSDJveSneyZkbE51Py4SSXGRYWNBeMP25UgTVGhLfTZDHqfRXM7F",
  "key16": "2qvaZRevkMMFdeq4DMqKZCjvhM9mHv11Ukoe7pPh9wJJpHfWRC7mRA1aEf5qBHVEa6onk3vEMEy8zJNxYbr7PvAm",
  "key17": "5CAoS49YJMr6QwqGXXEpXUxKsnTaLCpspvLiX7nEdJndUBn4iZGZQY7R6pgWisR7Q9j8kMiDy92r4wxG9eLBmxJn",
  "key18": "45vhwxCKaCDD6VB9gpsujJ8g3XRAcZNb8MsakjJ5p3ucU9FExdM17vgvNu92r8JVC1adHJJ9WgGHikmASoNAgXAo",
  "key19": "5X2tBFe4GfUZF5j2FD4CffV12qv5FuWLX5EAvaEWKcdbXPdxW9X623xVTSGfT5Hmc9jhUXeoGdVKJV8MpXi1fVH3",
  "key20": "PKQ8GhnWRAxRRtqS9XkqGU5bhgJkQdg4yW6ivkKhML89ZQzYHE3YJ3UBsiDAWnVVf5ue9UqkwFNqNH9maMkoGDg",
  "key21": "5e8eaYjwRzMrbwWCFaAzFzRMybEk942qa5XP5pxCPakfMCx8wYSy8DHqKgGjRLBadbMep9KiKHDS1uEsCt3N35ob",
  "key22": "63duGPo48rGcK1Dn7MYuTjBX8ayxMZ8VawE7rzApXqMPDmSLahTmfqnjmceeieoHXFEjxw7oaGaZVgsv1MFT4TJ6",
  "key23": "FaVnDjuUuSErRDUquMLpdjCkdkCETyG4JBaTprRYPf1wheBQfJQ3SA2oio9xhQSmQhaPZeCHmU6T2bW5tzKww3m",
  "key24": "ggMPx4jHKt5A4bLtfoBaLBdr3UFvaqYfd7VcTT36UMbmCgahwkh5dgZevRVSB3fSAZVHHXoktWvmViRb7o8fVMu",
  "key25": "3w9VtSc9sq8CQxnnrKry914yqwRZ4dfTUSjMTpepdUDE2DtsGBw9U8cGsfMw6moYyYxTA6SgwCBtDAMNzKGCSjNx",
  "key26": "22mo6YxDXKURvrMkYry5iAdKF8ZjSZnHpKwnqpKCe29CavLssPbiisLz5722zGUHuEdQsN954niWGwGSsr6YgYYR",
  "key27": "64xjZ5SzupczRoMMxTXWzrPV88aRsnvNgzjMqDCRMgQHFqnFFpLCTWQv8XdZn5MRS2vigZrydk8UmXJWijNfGqdA",
  "key28": "4gZ27j1PTJiR2xjR6DRWH1aXzfiLGABguJ1P9CAjGuNxApxX9Zex4ri3BVKTQd7Liwqvre3tTpAhmiFX8C42vBZn",
  "key29": "4Q695XE7UXN3PkzTTxqY9NJQ3ngg4S7pRkEfjMTr1ak6Te9nCzCXE5aSyYY7ZwyZnNnszW1uFKAma86FFp2hS6pK",
  "key30": "5Gfm3dv64JUEyC7oripQevfjtjVxBHzrcCUzfXVUchzMLatrXBRiLx7qbXqFALRy6DxzobkZx5qryGJ3d5Pjpx4F",
  "key31": "rK3jrkVkReamMrb4ghLZgh5sWaDwL6NqpFQ2v45fQuJuVw11XsWszysLYmV9r2MPg3jSJ6LWkvdEsG7jPxnhXi9"
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
