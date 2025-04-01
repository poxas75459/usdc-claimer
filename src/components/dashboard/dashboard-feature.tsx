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
    "5k7khp7WnWqcnG2TkKUUHeSSUCBttL7BEQEHgKAP7T69LUZos53QpH9jrHNsaBsamLLfc3PzvmTDNt4GF2ez8SJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LQKAjrMwnbkhW3Yd7JPGUXg4Tre6N8iYA8kiZTsk1u5nAinAd1ZXZYDfaCsdJ8kpKBhFS2MuwMrjvw5bmUgY589",
  "key1": "PpCjR3GG2VN5f7UAfTq5tkTTTjMGmp8FHEey4ujYukXGP5PmVZz9NBa5wACetnjVbrKXpF3Gp3UYyeWJ6x2WGZ9",
  "key2": "26y598uZvjf3GysmFd5XMPFczdA6br3nTy292h4jQCo7ErkyYLRbP7fcwid34soycW8KsyhV2i9GrLwbyAjSwPnZ",
  "key3": "5uvTMRkesWmGqLj8XfVo1NcbYkYwnTcBCuWykQWKs233XLWw5t6dxF25c8A677dPcHxQM2sYyyZ978piU6rC5ZXi",
  "key4": "TfXjjokdWWKnqXm1kZH7akhGySPdE7DvJhLNTBQE5uZMkDpioZXbkRzQ8uV4pinBaz5EcSrNmGSDQVfSQWqiqi1",
  "key5": "2NcYZ1xZ5exVVZo6Nqvt8Rz7r2YENKLPdR31Qv369TSnUxeuRhJ6tt1N62CisGfHyFNhT3XRDpXf2HYWt6R27HuV",
  "key6": "3yrVZcuePsbb4fTZzGhAZEE7GZF3SEZDa86DQsg2RFBWqthNQN8rzFKmKMZKbVrNfiffUNY9AmPd8DM6EtSgt65x",
  "key7": "3LqPtXskaaDmaqeQrpuTrkUAGN9yKZtoYoq9pejfc7TkkXkhStN33FcwuGRmnt68CfH8DmubeNb7oTM7BjG2XgFV",
  "key8": "3uegkL4Fz2R9PELr8y7DCtM5sA6n7yPiM7YnXMxxGsBC6bC9gpn3UjdWA2Rjr1bSwTzHTcjqKCY9EMnSTVmDqQeq",
  "key9": "4qUPNDFufEueF7v8up4efDM7dYYWyhSjbp9jJjjAnAdfF1BdQxFUK8MGWik2TNzutThcFmvhgj2wmih3Rge7JSvq",
  "key10": "342U6vARnG1z3nMW7Bxow4YbCcyE4tjZctRcQcEFHaXMdaRmoTNhR2rCApU8UrgFsyCX8CXheDcEV13et6DJ9TVq",
  "key11": "4Du6PeuphxJthUeFaYq8Zc7P6HTSYm55HiEkDVs6kWRgCFntotn73AySc4KGpVkY8oavTuWa5o54FnS1Zc7bUFMm",
  "key12": "26Vi1tVZmCsYN5o37TjZqb9j8KxzQNQZKuKpecQBFB6DFdoqgtWcQdB8P1R3ymtX6As9yE6KVaKkZWEXdpTtpaCX",
  "key13": "2HfC1RDVWhoV9rZ6XrKV55Yv1rEJk7PP1v8yPpMAaknAQryMTUjniA5533MGf1ZjKWbvvDeKx31q8FgWzPMLr8nY",
  "key14": "4v1oSMmMXo6cLsYv8qYGAyPASFCvRqN5cjrjczvCW1zk5p9KatCmL7kGtrtpHkxY5P15B4uxFTgKiJjzFGpqgPp1",
  "key15": "4maMjV4tF1eRVSKJLY84SKQpUvYUbxxaJKY3LrqhifcuePivLmSMWVfB15Z4u5EJ2DaMqnh2y3f5GWfy3mLLWytp",
  "key16": "2VNCFEwdHQtS1RuMeCMLohkAQNK3pQXUQLpv6C2eSz5UivCq4e2263ZVw6mXvSmaex428wF1N9Ato9ESuf37w9mt",
  "key17": "2r3aNGqvYRsZkBrRxhMKx5PmpdP68Nf3vh9T3MbwopcyfNmXgZPbhMNw7egP9hJJWqtPYkSj48P9SqvU9E1HBriq",
  "key18": "5ppPMBrQMomimv6BBNcfXyQU72BLcywv8GNrsQEHaqA15mdYkaoL6Nhn4C7vmiPRNmsyLzj3ZzkUxjvEB1nbzGc8",
  "key19": "2CPD1a1UZ2EUYHhFX13FSXkCeRU1tCNXJUABQTNS7G5eXCCvx2rd6enuJZY8ZRVZjwizT7HFjqe8uSh6GjbicoT9",
  "key20": "ifkAbMLDJoSW2tZm2GNBefo8PF4Qbt8BgMCMNWKKjBAVnMW8N4ndm8Mp9yfCcxSL3uYudWGvhPYo4YypQJyW2we",
  "key21": "rK5EESzwHHcDutLXw2K4mnFLBNotzP9FMsYz3TmBoZCpTC7jSJNGRw1qjxLAsouAHYd8aVrgj7pU8UZuvbnpw13",
  "key22": "3CpNf1PV9oz3Kidx7zkWp2A5ZM2RtXaNJsWsk11QwrwYMTdkJw84KCuQusCp7QzynmCvmFgEkKS6ziQo1GE3v3Cc",
  "key23": "25d1oXmMCm9RKDgHU6uHYu86HtQDSixnmPS1ppS28b4P6HLGkGfTSq4cvNErV9Z7GZJFJFoW7fVZ6dRPP5oc89UQ",
  "key24": "5HgGceuzjpudCjipQPzPengDUAq1UDV83xBhXz65CtAsk3GoXuxZwH1eec3wUCcPkwHo85FjNtadgtaeUiMSK4wV",
  "key25": "5V4aGvYavCDmNN722kVmp8orwa8BhMhMhgUE8CynKKK5kBzZuKgPKPz3pZjNJhJJbAwWP9MZJaJMZz4jyMKKFAmJ",
  "key26": "2ZTVUFapHSKSe6QhRsmVnQ3W9u3qctTWhdZXhMLjMubtEMcijBzmp3Ge3cgF8p4VeiuhiYLrtq148F8RtfaPpb25",
  "key27": "F36mgpxWyoaEr2gYnn9K8pN7zgPBVoWkTwBkCe1ipJWEa6V456BxKuBLNB8vzid9sR35mAnnmxw2oYunum7nN64",
  "key28": "3cjAwypuJvXx9PtBjZ4vmn5BTpwNUyUpjF9LHohm5hUPBQ9m8yAQEKdb3WXMVQ1hNZBqrpayrxeZQFoozQaqtu87"
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
