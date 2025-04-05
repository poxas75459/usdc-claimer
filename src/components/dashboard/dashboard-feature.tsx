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
    "NTJqEAhK5afV8Xm3RouDmicbMCg5imahuPNLaeXJUez766sdk96SwmYdYmRpjhaMAT1fqztUFeKxA9eyoLbcigx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kkUUBSswUE2aAUFNGAphaBCc1BP5UvTw4nwduamVGJWeADQzCqvMsTXBMYX7Qa5CehhRT68odYp7qdNS4cC6PGs",
  "key1": "4tETH5pUiR1eTGtbkMecAjmEE1oTEMqUQPEUDYSEmJRurfTFjGEKHyzvQwF75TpDzkmABC3BWT8mXesM9rWHTuF6",
  "key2": "2qzBF5gUzEBnbnbqv2gmAZ4gv2uBbdxg2jWdhG4bQvzHVG5LDp2QS1QPgfpNXVxhbcZ2t33rnEtBjvpTA6qLuwKh",
  "key3": "4F3rEjAgUjLLxQb5pPSvjaHJFtvW41VkWqky4VCaPg1kSfRinEevZrPWDRGfjRiB1MS8DdF2xsmZjitFC1q6ZDah",
  "key4": "5yhQJQKpDj4UWPx4HavLerx4A5hFj7iQdStWqHkeBL6U34Jwga8dyF4GrLcFvsTK7tCYpYSj4Ns5X1CzTbyRF5kW",
  "key5": "3NGAXXNU6UU2QP1ok2mH3M7PDDzUnHcfFribwxV24nLMtSzLAXrqX6xJBbAGGzr9uQyAv6Nmzz8EmhddEYcu3Tww",
  "key6": "3hAwk3JdTvPoWuexMdaAJgsi6UKefqjttToZAT9ofyCNkkYGAwikV63noyEeNJ8zNVq1uoPq2viB5wA7ACwAv43E",
  "key7": "4vxsejJLZ7MmMzwTmKW3JBbnZwxBK4wwSoNbcxPVk9EDDuqVwioK1Z29JYvu2mCvmixFwvYDipLHVGUeEUpSnZNy",
  "key8": "5zErCWtM2NACjJuVR5JUBzLEnTfpVhkusqkFHgGybVv6mKLuxoAD15L9khGzupw97KuWMemx3VX5VXqXoquBHPYP",
  "key9": "mVQN5VaENuPJ8LCCtHFdZHqQ3NgnkgXQTPjFTX1cxavuvYtNgyNz9tQD42d4GWBxMYg8Ppin3o9uYjJNzD3yyWw",
  "key10": "P87gbKeBEDLyhNXaUYN1ZkPdxP3o1iNbugMrfKnadRfvLjrSA9prZai34REuX1Ei5du6ugis41WpqvyYjuDRvNt",
  "key11": "xYJLPEo28ASKSaqnHGuGxmLwt2q1DWJY8L8DKgiVQU1un5ee5ruoaLryz4RahfjbxxLp8SCPdrABXZFbSByj27E",
  "key12": "2Yk2pU9v5TP1YUC4v89e8RCF8aGNYnncQ1DupBVHN3hnmkKUQT8T6SLLmeKeEPkGUXQSfF8PxNf1K5cEugVBgxLV",
  "key13": "5ZXEbBPryhX9H7E4RX3FMg9E9Ra7AdExC2kLGLg99urJPJn9X17oxJKPhbhmQuiACBAen4URNR6sd1fy3VqkRk8S",
  "key14": "tGwzpg3uAxJBsVaEZS9VGCQKoLC8Eg1fkqgvEEGEz5rgk2UPMGms7kDjK311DTxqFbVTUAmmRrmkXxrmLRsfQd6",
  "key15": "yFF8PmytaXYcYMgbwuR562WY8EBUV1vPXsL7n6ZZkGdCwHWyDwocrtMk1Pgg6hwC3ovM921mZt84LaHDDLjpdJ1",
  "key16": "4eFgxqXy2SPsg2Gm7nF81kJivHb5pDsBXnJLNWA3XpBS4Wq1QAobzW8QKFzkVbf647yJdAyX1n9xdYcmCwUeGs67",
  "key17": "gMx6SMQwB14wSsFYv47R64n2ggVJpwTDQM9GRQpwErLrdzH64P2zd8A6EG2aEvHpbeVxZTB8xoCy5DXJPLcqZw6",
  "key18": "3kFUdhfhdzEHu2hthUVYLZAvtZj3L9W9JQ6m7h3zP2D3PUAAXn7P8yxgWtQLwUy2opUEeXAVcrNPZCaXrZehEzwU",
  "key19": "2CghHJZrQbCz7QPpNbfr7TWp5J5jn9xxTj8nTwwjUpthSa4dXwcHnnJejf7WGBexRBULjRY4WyihYQTr33ARTbrn",
  "key20": "bgiAspZT8FH2DqgWu2DJaK8rfNTyZerwsL1jD24A4aunwYBadwsdeT2oyXAanVMKAeXk6PL9LEtE2YBq1WKnaGx",
  "key21": "3gnjGra345kc53gYor5EP1SeG9ZiA7AsRJUysXxKwSUCU6bXW2c7Y4os3EaUF1QxP2jxmrZcMQsw3qrCsXWHM5eD",
  "key22": "3KLQrsoJSaeY7TzPoFsp4S1UtxzLDrdfR15Do6RsdeC2f49BFGAMjwbNrz4H3XSKqmjkyfrthqTaXT6TStijXWMt",
  "key23": "5FRCTd8w8hDoaMTyPbaT5SKtCUAsg4rigYTmYGwPEhmBpgtrfmgRQPefHajJ9gzYXUL1pr5HRsCf32kiNwhYSQyr",
  "key24": "2rYN8PPSdrk4iWhsGjcXNAEWfC4vLgVb8ZSKSiJwAwxQ6dqEfiLor6r1k1hENrMqqCdkK6yZjzySaPaNbbx1BxY1",
  "key25": "4tkFG6hUsmpTr1DYBkyDMPriYH3AT1m7vuX5dwNc8tsFGNc6f3VqvLhH9gxbtxV1sYP6FKWt1296WFrgbQQfosa7",
  "key26": "67ckju3RUaZTUJ9wu7nipKRG9DjMZ7Q5Aty9P897fHysJif9rr4kDsEnu8bTQuVRUQCYB46wNZSQg5goi2YuezVF",
  "key27": "GYYKWR24skbhkkyxCa3q5wo2JLfqZhesa6NkqgesN64ynfhgzt4e3NCZNFLVq4pPMEEY699quzyxVNTKpwvR2yk",
  "key28": "3wjzdrz2ankfn6shpgqYZjQtVU3PmBHxEYXaWQxNchZkjbo5M9fQ4VUwAagvcHEmpwxodBZBAm8gFxp2rFtJyU7U",
  "key29": "358nE3jcWZUyCh5b3xqEBSh8YfpGf55cCR29dZ5qwhjqbEaCm2V93hcMb4rxWeFqVh23hJwKfGLa2LnKtXYaZxnN",
  "key30": "2fPuTXg7HCU3UUWSgbHYbaKzsPEhoSd5jphSaR5tFUmJTm1mMPFxvyDGSBgy86UEeJJ7GA11U6PKnbaRKvGbPLat",
  "key31": "kdK8miyMJbcFax7N9xZm41RnQZ4A7hSvyH1cSnTKMDV6MkUoVHNkyoTKane7dBwqjXi7whrmmwgZ9BVx6N8SqpE",
  "key32": "4Rue37WKytz4UTYvjDJnoNbEdYbJ4Hg5YiYMveCSXqLgQfzMaVo8uv2WKbwfmZyHyopF8z1qdpzuGAJJv3SpZyCG",
  "key33": "27x4vn9sodE4PKjGqwvVJyZTHixsbH1nNP7TdzKh72uLQHCVonB3ZfushedNtqc2TFsYPP2ww6gZnL98SUxig3wf",
  "key34": "35xBrzaMYUU6DbmANAUPxQzzH9o38woHABoJagPXVB6C8tBk2VM8zbWuwHYoGAdjBUDbB8WRBWa2u1JPzxqbqYad"
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
