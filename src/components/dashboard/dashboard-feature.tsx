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
    "4c8XgBSJrb2gUishZbCS8HJVp8Mjy8pXNu4oNn7Kzz6fAvEc48o4GAFW8rvtNLJAPCfpkc65Y82WeuANMLQuh3fa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sbv4KcEfpXgj7xbAUSUVdRVh8J7iaNW2nTppUjf84HVEcyUxEgD5btbuLpqAKvd9QeNxLXN39jW1AS8TBYCuwGv",
  "key1": "UFYn6VYNmWZxJuNzVJf1BZJk3ty4ydfuy4htHptec131VcmHNMF7nJGDh3YUgGEHG7RATPDgq9CthT8W1uCqPaY",
  "key2": "5tBSo7U2MAjcfRuVHCy6RG2fF53DgMJsLdBt5cSpbD1QbAmqsn3Rc5VcZ3t79XF52au6PzX9dyuX33Q3AE1ath2j",
  "key3": "4m165PRQNgF1LWbUGWbsys7vJZCK1caGfdBWym5W2cMQ8ATshin2ULSxvUBAH8pm7tzr4b7v59hyDv9XNrzgiNXm",
  "key4": "39EhZef5mfBPsEpLC6Di6NjwVXTrT9VP8w41ReKThHi11eEFgDB1SEQPkMbomNoQx9TqtnYYqcDdN1QSKH1QjNsJ",
  "key5": "oVEog6oWJfbqoswjRzfT9bmB3Yx9MGMUgBLWBU6RGDQd2McwUd52noaeTthPRZqMUmTGi4qaetGq1kG7mw6xzH4",
  "key6": "4RzJ2dkUd4GhHieYyKfLEJMDVUrBxwhTzstc8n5BGB9RAT4MfatrTSnJafWjTG85uGtLP6Xr8yWs1uBHnjZL22i6",
  "key7": "uuYaTdfApiEvU2X4aS2uPkZPopVHbuweuBdYW2dvzJUEUa1Hjj2G5bGeCxXvn8YZAGnxosaBZGs7TL2c772JaCA",
  "key8": "4jTiHrVJwzj96X63E1VkbRSkbdQshrcvZYMV8Gm5iB9aFDYda9qchvq1AcKf1H61Wm4Vkqhjpgo14CmntdUfJZKP",
  "key9": "4HtVzftpNJCHRwgYPdXULKPFC8MnmJVa35sPdNDdwTFm7B77kcg4g1bTvDJvvfVmjqsAAwjxnB6iigspsBwstMbT",
  "key10": "pfVLtM7VNUDBh2dyWFFv8uWio4V2AwCAPkxrxjki8CqcJgYuobwLcr4kBPENftuW7krHrEbdni25mE9hdFmQTc6",
  "key11": "3Fhp9faun6C934YKNgjgBXqwbeJYtoRxNM1AdtoREtrnJMEsyp474h3FMuzToLTn13uNJAQhWs6nidG1HTUXZk2J",
  "key12": "5FxXsTjhSua6Ai4yTzxUND7GPevKYRDWoW2hnQxJZUzmdmNtVgeR5bfkk1LXMQBHxGUPXdU5hxVqDVVE55SB6hFT",
  "key13": "2g5RoR2wrFJ9P398b4V3MzCTKAKCwpH2o2cx6prQeEUV7PCBUj32w5WHDirM1uXjC18jTsheLuub2oYkow3RkD5A",
  "key14": "XKmeBkBNbLeLhZiCF9dEbYUmNCTD9AyzGcdkTp7q9GFtaEZPtidcxM1nhwZYRwGx3NA8ZjeW35faNVDE5UwZYXY",
  "key15": "5nXzy9xAzp3mXywgg4SEz7dTuprwj1yKNSGjm5GG3DHZSGBRhQvagR9zCWhTHxKvLQCSARBykgQQA1WXWR3Hi46L",
  "key16": "2MxuZ71sM7hW2JVBVE5osjuL1GuXX9HUfNYMfjtLwEz4Sg6mzK7eWzQFDBntgjY4hjhdb5me2puMEKneDFyS4Hmc",
  "key17": "3T6uUM2AENSQsAqPqpB7jq4HhdCcgn3twSut5arhCFgCwTAnpWXyWsjgdyggduoLo16ukCCM5VfxHVhP28hZNLWF",
  "key18": "2ruXt9kSQYoCvZnuJxVWoeBzT5Tq5YzrdURWXhzfbJomCz8pzMYiu2Mqb1xZcb37VR5FHen2b3mpkPwao9dnD1PX",
  "key19": "3vSkoTBTtJ1h8CLL4a9xYNXAe3YYnP2ifUkNzA8bgVAxwMxpm5rPAhwz6zJPFgW4JMH93BSkahWogDqAPRmiL9rE",
  "key20": "2vqELq8rxzdC8EubZFFh9gsxQ3z12EAWtJJcJsHpwbWNdsZQRrxWtYYK5zixaKsvTZ8aqm3KcQFTwCq8SJL3uzde",
  "key21": "nvXxziy36XTDj3FFKT4vF892ga6LkPLdqWFebTPXDUL7B9x4DeNZU4PycXT9o8z3ybqWrwH5yQqmiB7nxf7FyvM",
  "key22": "5PgrCYxXBdYT4DxjHGxv1egN3yU6mahYXj8Z9Gmg5Gk3fCBkkRTazmDutYXRNWbx7C32492kokfnSDMg6XxEWEs7",
  "key23": "3v49Byg8A8oqQsrFNHjpUBokPCPeqCMsnkNsDiBze9TdoyyB6jqniKWRTC2gLmSWt7m8j9azKua7bCJLr4mBcXqm",
  "key24": "aCqfSF7A6Y7rZCK8dPM23VJ7PcLdE5wjXJGkGHPdANdPBB9fcfVQwkxCzV7sFZo5d52wgWwbGTKYeYs9YJ2LwEt",
  "key25": "2mnjMm6pW7DGLTEtPEVRctV9XVXDLHT8e3RsbF6jHhCH1wGWgRMwAKBYu5CgXUXtzZWM6MAjCmdBwkzAsdpFZvBs",
  "key26": "3nVGBDQY6p8isrPrcb1FTFkzFXkpTDRFNVCzFkT5rtGdvRPnRUL6QivzVUeVdoKy3dYh2Y5c89CrYWDh6hyFuyn8",
  "key27": "4Rx3moLzgzKg5j5evAtrDLMR6d9PjXDNfnzp87FEZy19S5FkPPetXg8EjdnSdcykfn8GvmyrHZhBrUuZksTdxc6N",
  "key28": "5TaCwwXBZa19ZHw3oU985vgoR4xBVFqj7mvjgSwyGmZUz3X6J2xEYFdc2wWhBmfMbEXyJoAUp2AcBnYMpStBWqDc",
  "key29": "5AKTJsXNApxFrF8t91SRhmutLua13caWr28N4Ej56oJAYHtBXYEXa3JEovQVjo8k9MEfjq4Srq1k2rH2AerAHf5Q",
  "key30": "5YmTvsqrp8nondgjuFEB7qyxaaFjiCZpjsqEFu3pUsNiKNnErAG3TqFivqa3nftkg6gWVpcVnbgCsuuLoDkLYzHp"
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
