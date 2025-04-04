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
    "61GTSLTUpKaYcdDK4Nqm12AaqLStvWCKJTwm8PoZ3mDzSvq5HAznF89B4wSaNhdg15mThT2Ua998W6djK6aULQAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iCN3AQrxjZDaBu7p76PBoVJHu6ofDDay1VqcshPf4T1FMkumbsV8HzF4emP2srPtzYuLiTMXhKrhWGzw6YVJoiQ",
  "key1": "LvbULxPW7sXmmVLjfS6egGmdANxcgLpgJ2jYDvhQu5ZvbqgRAowjfbbUxuBAqqr1kBTMnXBbdJ2numLqMEmHPW1",
  "key2": "4P3UNHAYVXxjRiynZTXxePxGkj29RbkAWobT4MoATuEY7rUaNm6jv7bpdFhrrgrqArw9q7QfCPR78WnfpTCswq4r",
  "key3": "2Afo3f3abqEXVyRr8iKbvXM5gNviJjwra8yjyPc7H7MocMa52kRqN1ae8tjZkZdrLDE5EMqTbAM7unSw4CT28ppt",
  "key4": "3HL4f1MMXoK7g3TdSiKuG7XQxuem3YCDt41xPUtzxvjvUQFBJm8cwRkEreJRxcTR4XmUFCZz82YpwsGAaBUtMkb",
  "key5": "2PqZLsYsVXBShFY19ErtFxdWMAZ83p2hGbTWXG2H2rrE2rBjNvaqcFEWqi9bJ9FVTfiUyony6nf2CAyEfW4tYCR",
  "key6": "3wGz8VBekb4gtYLtfZoKB77JtA97t4J5sXu5vzW6J4rDTTQHttTFwFBa3fYPSdFfnjPeNSYSKk1CmJEE9iPrGx67",
  "key7": "gREu6oo167b2MYY9dyCTh48cL1Q7nf1wr4gisMyjtNGPTBp4gfZWVB6kHAHDv2nzrBBXNseCh6Zf6gE22T8sUEf",
  "key8": "5VYHk6e2j5v6Y1GxJHyyy1ZYKSCDVszavXVhgyPfaJdtNb7bZQSdAfDnyXWzhzTxVHpEkqAtB2ADTaYvFdjJHuFj",
  "key9": "5LTtzWYgjttxVCrcFNMFxZDD2RtBS9EXJfZWU9ZPShJh7Hds7HcTqtzzWoasGtWWqVCMfGVeDArDZcc9P8u3spa3",
  "key10": "geRnzqv4MgrgpeTcBDub7ZFBoxjZXki2Bh2W7ornPVU5xsrJJ6swsgaHyvBgBKnnWCDEUeQGpaNPVf88eijAZg8",
  "key11": "Yn9bLSdz5zk9f3poiHtsAQCXaUuAxRDoAtgRq3qMzeuGcnekqmK4gDKfJdF6Ac8XrwgHw3YtNnQ2WQrtV1ZF7VY",
  "key12": "5WumfzdiKgLFmXyNvqrudCzUpBVCstw1geKBzRidrQwb4z9RFM1qdK1YYLQQdTTmBpoph4kTXA1y8A4z6fYjQhBX",
  "key13": "5N8BBENiN1wQddUw7QY2D3WnXtdcHrNybnyYLp3DthDXWqV9TtneBJ6HN4yRFmwPJxqYCisvzcvqCbhJMWTebgey",
  "key14": "5mKYDsszL6FRtYAbevhin7AuBBNU2vxDEQqmESunSW5BYXkHKNHxskDbrypszcZmccmbwRxwtxtqFrdiVwr6uwwY",
  "key15": "3zzrykoRVRAAWn4zQmCZjieJguL4m59kTWsoMiXCyGCu6BjAM5L4Vf2u5E7LFomUSbp2Ynu3wCTByBqHW24JtyaK",
  "key16": "48ZtXPUPREbNSCzvwonAph2WJGPQRj6tViBBh8XLvjoGZY9zg9rAhPthy2LFAXhEti1trPpnNwyBhWcG5JXU8pLm",
  "key17": "3yJr2mG3y2BeakL3z2WaxaWSYoXbkcs5RnuLSP71SmbRSmGP2642Jn8AC7ttJCYyvRN9B84iqMzPoxj79FKGS1e",
  "key18": "3voFeD24V7drVAEsTxxaG9hDCLcB8aq8Ahfi9yrxBE4xYsrzfA2VafD2QsadgK9pUkzJdk3DNm5c2ZUTe5UZsLZ1",
  "key19": "5dEkhnYX3yqhwxjbyk6yaGJA77CYwqveaCKWpVGe4RMwqG5PLK8szGQmHq1tNjkMkLjN3Lj1tnaAiPp5LC2FTKhN",
  "key20": "5nQE1jXHnQJLoxKrfwTyAV6besnBqdL5fG2Jh4GKbuzCWxag1suyoAEF1fchNmwjpxu9H5cRuS1u7VuCjEyPZ3Ak",
  "key21": "Q6QxoScpUKuu6BzyQf9wDkuG1vDfg8iJ9HtNVJBLkWh8wSFQD7Nr1m3EdBZ7bAWFMRuPJSt9d8JFKF64cXqrZN1",
  "key22": "5LBYadLy2jGGtcx65Coyvv3V9bi1fQS22PkwZXsqWkHJMQnQMHD4Tc82zAhQoQ44YdqFaKSLNa5K8YKLceRhZn2P",
  "key23": "5KYMHE93ZGdfbWfy7tdaquooB59iWuS8Rn4DWErjr2t98PDnrA4U7ErMC3mEGmXj4nA9i3AQfxQG2rQXynMfGkJH",
  "key24": "2mCAu4N94QbARFQ3vL4UCnDSb3S58qfD5EteqDbqbFo8wiGkkjTLouWaGTvUounwygw7Mg1bG9HVQiMXzHbSeh3W"
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
