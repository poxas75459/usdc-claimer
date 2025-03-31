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
    "2iGjyYEpN7uuAvUGFNNWB4H79XTy9B8aHTB1NMWZTaaadpBLJgSJGmYdqmnV6sHVDxAE3Pb6YVzTHvZvkxRNxkPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e42mJQVEgoB12fB5K9DdzHPWRzZFXSD6y6uC6HGkXTDBAUJWeUfwQviNi9fNMBsixczqUJFxfan5yuPqE6gFfVB",
  "key1": "3tLTD2XndrRfELodNc7etuY4PmsmUmpp6P3HZcgWvfMHpw25wj5UbADG9fvSGC1UKWzZCctd2oPVx3ynWfSy1Yw4",
  "key2": "2mJo3fbP4ZYCdY66UsHH2f5jzDVBqvcKmUwW7eaYueYFiWjKV71dkS1GVtCWQDayN19wzpbpznVKUpMMhtjvFW17",
  "key3": "2s1aazfko3M3AkJPwPWY2S8G5eQHJfcwDnRDzZh3mAG9QHzf8g8M63CjRnZDNZN98SmWVHjpjRttQaYGRYjCTdGk",
  "key4": "91hGECxtUxD6BuuFn86ACd28eGv83Xx9CjggwgteGzdqHvkfzua1dBA8nu2AvXZB1xuVXUFHbntf1yw4tuvERRa",
  "key5": "4t4uAiynKWrbDpVdPKxFkHkBcA3aoVHpq7JkTfzeFigYhRg7DGJMqffUb1K3aiuYj7dhQuD3peBbN6yQdSVCpkrm",
  "key6": "4muajPPda8KHB4HgHHCd35bhHU46fGdZf66PPi6YYaXDcrZeVJqKJT74wjWexGsg1mXZrt1gcL9PXrMZ8GkAbkjT",
  "key7": "24Lmu9qh8xoNNTU3t5dXe4cKvSE8YaohUBJRvEkjogCFCMoB9afk2Y6bpWLoZe4YJEqBikTTt8iBEtgUXfrn7sAD",
  "key8": "2JiCVG4fDGP9s8tMYZpbQTVSve3UjAJaWNxsx96RUZBbtES8U1z38UWLF9EamNJvBWohZBqRiVvm2AgRyZEf7ZHK",
  "key9": "63cVbHWZyneLkjZAE7c5BLzAb3cuBG3kUvVaaE7AjL5fHxtX8wzGTBCaGnuwNS9senNtFtLSiVC1dGGgJAS73xLH",
  "key10": "4HPax6jw3GsbVo1Mo2xNF6PCqKHkTib8PPAtZxfWTf7wfoAxVfpLjdxLV1b6vGGyVJJ5e8MfPLQnK3QKaVCLu26Y",
  "key11": "YSh3gAjvSCwXSB4gMCeVM9MQMK7nYmQP7Zn2fdwHKNTqGKNaTsqxUUBE2VHa8amqjZE6orUZeMsC8kaFZWF9RXF",
  "key12": "2EbeiiDidAtJ5LgRm8F3y7jwkfizuVU27g2XRqhA1fCubeeiYBMSjmnjCbZnkKy6z9VEh8xLdvf5ut2VM2DZvFne",
  "key13": "Jftrxznnj1Nbnof6qHu968dq9HMHmmXw6j1uqVdVkhZGTEzyJfQ6BBW4aJpDxNNJGWxswdcqFk8UyMDU677tsdX",
  "key14": "2QQp3gka8XCTzPTR7GwQ1shbBSoi6ryeE18niQnxS7buASA9Go6xv94yaww1i2Yr5QG3eZc6NZuAhx7QopGmEdYf",
  "key15": "4i7sTaDjtA6HLDopaWmpKA4KQF2C5r5bmBaxfuGUCMV4D4ENAzo3CYJ5UJuwTjrRnqRw3jHQEHYcNT37J3krKyx3",
  "key16": "5W6Y6vJ4jdc2nzNMgKruhqrcLTfDxFY9wyG4vE6yvXYujqRpmDpA59dgFwPMozgeid9XoAd19HCgbxzA7Cf264iw",
  "key17": "3XB8gubWwVuz265pi1Mj9UdfhmmTdyHbgB3UYUhbKuJ5nAEsSvp7rY21nUULR1UCucoZjzEsvThja3yqBXyuJCwF",
  "key18": "2MfcL9VUJJgBcumvoySXBzYrMxG1gpEJhoYc3fh1yzUqyQuqo8z3oXycd2bcQSUptdZuxpPFFrrH1m7cuxwEVvKv",
  "key19": "3wRyiyNesNgSRFFTeoJ7JKooiSW7HKkHxZdgFKruPTfaZhwBy4EeTfgdFHtLjkcEwpeB7nQB1NNAUxWY94kiDmXg",
  "key20": "3C5PzzNGw4AU1sVTar6aAURprci1KPSqydKsKANokvXMFUWwZhxrUSJdvdqSE6QD8Yi37GyAeZrQioCRqvNXh69L",
  "key21": "j2Na84622sCsLBvytTnAXs82TDzbP3vc91AdKXRg8nr4N36quitRpyFxjipxGyAbTZseZb4bErNoBsF2dat7WXZ",
  "key22": "3hqdtJAAzeix6zbkpXmCgN3sQBgQdL91v2PfJmozSoiHTpgxH2BXHpmEshf3QsBU9dEniFN62Qd5LBHXT2VHcjDr",
  "key23": "4hPjTv5tzVEbRZ9yTCWgLsV7812eXi3kbv3KFbK4ZAcwd5MVfv18qzme9SqsLNcZdGtYW2BMwbiMmcVscYGKePQ6",
  "key24": "4AWeHwhfyBvkgNj1oK9XFqk1gAHfhcUrEgF2Lh2TZJbve5mJBW8QrC4MFrMHUMXajYUdLTM8GRoV6wPciSMAAfWw"
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
