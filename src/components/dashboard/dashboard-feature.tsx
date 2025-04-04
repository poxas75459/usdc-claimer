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
    "5sv75nnwkSwJsvjjEGyuNzcxZTV2kJCREyGZsmheVz8ckGKPm3AfYBsTNnXmf5CbsS5kCpHjnJhv7fGePmMyaxsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PDwzLZ1ZZfjWVG9VDKfapUhCj9s7LwHfgdv8J9hzzfxANoUvwu9zz6KabwUTVBjPCKzjTmP6mzGYEPTE8WxdDaX",
  "key1": "4H5U3DfPjW4RrXs6uvdqBh26QmK6NmCW13SYuFYT9xdbQxKszVqCu38nG1tUkRnmFVHPJ1aBitjDsDWzLgcjXMTv",
  "key2": "5a5C2PMeKrgQodRG9rjPquJt5r4Kc8Sj9mHr1oH6WXDqj52abEx5T7xhdGG5gEzXbjFUJVtcV7zD3VvhDq31JTRX",
  "key3": "5KTY1icuQoVqJwfYg2DmAcd6idaptFXake58SRaDY1MXvkngptmaMuLa1pYUswdrg5sypGurmGyarwWknBRLcscJ",
  "key4": "35fir5fjMKeSE43dYoKTQwaAJDQB36ZMZefpo2d4nwdpq42J9F2mcau5kPzhvTzDRtAGMAMQ2CguvFkj7zXqMyxK",
  "key5": "5DBrFNyS6iknnkcWyvMWnsQRohdYKmTTEX5gB5Fu7vb3ecvkbdoLAxV1mFknxVLbpT31gi1cMCFYdFHuRC9heQfA",
  "key6": "64z42Z3mAmUr5ahyHyGxhbzo5H433gkuJecp8wEjF4Miuqsp5Y7pBV62RY7Tu32eLMKNLYKPzaG4K5FJBqx8fhki",
  "key7": "w2u9NUTQPzfE7frCKakDWajFnwjA2Jpr3vArqpr87iszCrGLo95bD8WDCDd1iE7WVGpAajQ7jouhCBbGDxAg5pV",
  "key8": "5iMhCiTbjfg6MhgZXjvCpar6T3GVZVW4gj5FazxNw2ynkQj9qgHXYiZq3UXK1XYb1S3ZPmJ8FBnkqTY73Bh2t3mr",
  "key9": "2xwCgLXMnCS4xXC39aKN7mi8ukcnW4BRQhCvwd9QeLvpUap7Z4RUctuxAnGgLrHXWoeQQn2cXdDZJKrzAkqQ3sq8",
  "key10": "fAZHVK8bE9qTKWevT2mFbXhUMoHjKwrRiP4xySvwqw9TQYL6LjrD2WGFDDU2Gg4hwiiyp9oKQ6Z2X1Sw1r6w3LD",
  "key11": "5JbxmWE3k2qdC2LQXJxEadZ8awiwMDrmJ2PxTyUFdkt4mz4UvDujt12aoM1PB8y2TVipBtxUpAE6DAPmS5B5BqUJ",
  "key12": "qXP2ynewiN8Kyp4Y2bAaGpW2U5BZf3tAjmeJE4hymoTYZEVxut1kptQ7vhyd3p9qP63RrMRHq6FLZyrDMFYkKAP",
  "key13": "36eLPGDeXZB6FMshLUtnHXGvpyzCicgDroj2a1wMAAf5Mq5zZQsyQ63WSUESFvVfSsKhKyLaWu86EC7ijUwuuLPv",
  "key14": "3JYo5yqZgF4rGnPgYxsteQYVUcHjKKDYZwRt2r1DDqsVstZMFoWdoiru6pMqt5XPYUiJDvGQKFyFsSJ3215rAd1X",
  "key15": "4rQVZd6GYRJa5ppDkZkv5T5a8nhBZJt5QmnwMwukKyrovTiBs8kC6rUoYKnvp5hXiQwFAPNXmEgXXJawzA7WaFxS",
  "key16": "34DAf2T4P2U6cmTRfRQBCyRxjxGKCyBFS8F7UX7iyHVV3fptEewtrqrKgFNBcW6fqpX9d3AUNKgHZPqgK71aZCdN",
  "key17": "5GwdBDBD3kW3q8ZiUJweHC1vA1R9HW8hdz4SrdkvhJ7rn4DqBjr94P64c6CefkK8afFRrToCwa58ShtMowbLPvNB",
  "key18": "2CEYvat23MGy78g6FaZMw6bkHWz4TQgn4PXuth4teJ17qjdQJ4wNuw61zZLXELytUineugrdNV9kVKuUZSytMiVo",
  "key19": "3BCRtuHUiARPTsMi5N7p4Y2PfJKWjwFqnSH9fDhmzrV2K7FWdFqsES7mDPvhtrdvbAAtCwCHaTZKbbW7y9GAxLBd",
  "key20": "2W51Qyk4VoT4bWPCVyBzHrGSqzr3S5amTAxxLmPVeMSLVLNAjqRMqaof7Qy43jrQ4BXBx45LRZr183xpzhzwHAhG",
  "key21": "QaF4ti3chAtKWpGZszMfeESL2A1dKcXssk3HkD8iuL4qGgkAZH9fmxW6TVo5GpwWsP6HNw1KLt2M9NR94S5JY8Z",
  "key22": "QS1MPZUQFN5JvrWVn87NgsthaVxauPXj8PBnBuxXr2Md8msbugQ7qkCMfT8Z9zS83vTqCYDBjPFtNqwPKZjdqDN",
  "key23": "2Ra6xACSqZqSJXCWeTDs9Rpza4MsPf3LW4yEBvkXPtiLMXA2csJfyRc6yFs1CEonpa71S1UkxqK4VdfimnEqMDmz",
  "key24": "5cfgfxa6bQFLUVCZmPqN3xcVEJFtifEr81t4ZjFEvxcd9t5dutGujdcGdf35dndnkbQYGtp7gFcYhhPFEeSKSjaC",
  "key25": "3m5rwt9TTN6AeeTxDm4bNLj4ofbetQ4BPWs8pVk9cYvrTkHey8duUq8xnwaj6EWFKF1j5PRPXjFn1E8xTuLAbZeZ",
  "key26": "35KnBbP1i5Ed8FLPmVSecGo5ohdKskPGwSxboruNzJmM7DN989JtiJSFoXXadbnWTZAVawe62MTQTqXR35q3fN55",
  "key27": "2iNbPYf1jDnbHcTZAhWPmLK88qXo4maKaQsLpC6NCFaMAU526bBGmbg8yFWUYksGh5gnMCqCCm5AubUDSXXjTtoN",
  "key28": "2RaKYkQvByc8pK2Q3UUKdkcrkkxUFzHECc8BgWBQxzD8xTbXRE5sNFEdCLosL1Akx2WPyfRmPHqLtxpKs2BdQQXv",
  "key29": "24JGbDEVpRowmhTdmjAj67w4tkfnE83jQY19EWgmE15WoF3LxLHxAzAbPxNgPCXLnaTHazfLWBZmLTALYHnGDnei",
  "key30": "6gDVFikm34rL5La3kLrtK4m4zjak2yBqR5k8GRAgiJZdMafygX6pMaz9Y2cQbTV3hUvxVY74aKHAwtgLwd44gza",
  "key31": "3HhHZokiFUwYuWzkBYhvjA1iiFeFfDdaAWWVgXSbQYxDqwXjd9jM3G9JrKt5M5ZKPezcuoayNYNLwQDSeGqWJ9x7",
  "key32": "WqcgyQJdDRdcxjGvbqYpF7tbF8KPvpdbGaKc7nhUXGmdEjTuGva2gGNLNkBK5rDn3672FzLJG2USrUVgMuynH7j",
  "key33": "kVZhABKPWQz2MiESmLFv5XQz52rTnVireP1Z5iNmFm2Paj3yJ49JZcbj6QzQX1rMmPpxSGj96vBvSejtTwChmHZ",
  "key34": "4DjjSVWRRwgR6eqaE2WqggUrEAGGSExCLKgttG6TEBwydDvDoNApwc886NZvS7UBM59xxBg5xxzoGxATUQz6PsLi",
  "key35": "3uP8KmiavuCKApRu8exSBZpLMwQfcGAA2mJnhpQzPEaZk7CEJTWrAn9vAi6LHRbQZbycT5jXy94fCpZ1TPCfPNRj",
  "key36": "5kdLTEN2v9R1HxTbWfQqA7erZ1tqYY1Ve39RGrY54YbL8grHCzi81MpXin6FWscw5FtxTEMh3D19y1ve1UmPeMgJ",
  "key37": "5LNqHuusUr99dk27un7tRHdCEB343mPfx7NPkd6MukBUwhr6ibMpooLzxJSEiiHRCZtDQGUzZdEqeYxzbcYExQD6",
  "key38": "5i4d1TgaabXajmuu1tccqX3czCxSpru6SzCoP9kWPtqaxpcA7C6QYR6pExGAZDcnmZztGMZenGRjq7fHjoiYTY2Z"
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
