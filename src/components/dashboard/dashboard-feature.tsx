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
    "33t8sop6ro4xxZULQhwWvpVaxjdgHJSBgyKo7KJZwUjMzLnBa7G8e4NpAgnuntwguZAaN3QAgpAxZAiHp9CvWu4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46GC9fazQ64qt8mCUY98HQ6V6onB1bGzPmhmpJG59pJifzaqWxgx2taVCfLBAED7jsCkGY9YQvXAghy6ABzCdWXR",
  "key1": "568XVtj3TjNTabELcyprXvrhvK3Us8bw1HzRMJAENiYyWszKhbB3K8eDWgHeHBJGjBhL4Vj1fUHzPxG5tWgAbmxk",
  "key2": "4mB1WxdvGf11LXyuvfTudpvfhwetd73pNUsueaiUghW4rdLayK2mnKvdvHuzvoc5azsP8iE8sFLvLEBvSXceHd6W",
  "key3": "2b7vXWQodKfDcHpmVtUiodgcvnMqF99k4DZTu5nKgmgDTSxoxbvsc8Pu3rFRwMp3PE3sD7rEgzYhfDCZjjMALoKB",
  "key4": "kkP2xtrXBAWtZjP9CwYJtgCiSLFdfo1YzbBZ6ePgRbejQQAn65RaePEMWBghKWLPiw2GeRDoPdbW8nHDJFDUpV6",
  "key5": "4DqjgoHY7x7qb84y3ZRhZjirD6Emsh6XotJ7DZL3YfGprkwP32np3g3AzbhqHSxgw9pZtSWuMoGvChoqrTMwpBTA",
  "key6": "Qbw1v3xnHJ41w1SWRKD4Ej78fs1EjebtvnDDGXiAnFCMu53FnN6VDVgAHQzqYCU8qyZ46yv1WS6qPqA8kZ4vVqk",
  "key7": "5xpU5SovVEW9WHMyGDrz2zwceRb286kfimNXVvvDoNEqyfJnJ3fbJmBy965ZJv4oC3eq99RVEyF7oUrr7MGdjdEA",
  "key8": "X22WnXtWkQ45XNPqJdbYbixxXiB9DkbvTdAq7ZtSPabwN3oPqokteWaJGcnsJSXkrCcQcHvvXq8m5gsGVAa8sJX",
  "key9": "3orHoLpPhQnxBq9YtANMWhPvHDeJdidTtsGtmY8xT4k8BiZMhQfkGyhZLrdiMYBfsGHEeRgm6PKRQMpKx8Efi664",
  "key10": "fYTy1MN72Nh2UUzCDn1wgH1erc95hgT9nBRGpmnq1LJFg6P6grRkiKWRyw7VmZarBWnKBNB4yNadzAgTQ9BJ93V",
  "key11": "5rBmNtVDwtGbD2mgS9gLQYJCTPceALMASb6g73mXcypegrCY8i4JH9zNcc2Q9JBRfAHzoTtRzFna3m2qAvX1B6VZ",
  "key12": "3gp6GbUcnpmhNj9eF2vb2B2ZyuXBdSCenSfkuFgU4RWaXxAjVxMkvS88Xj3QotDtr1TMbycJLM3hnsqbfx1trKo5",
  "key13": "5ZQH818UgYybXhAL8AcHmwt6wnARmxFUHZicWaKnzS1cYzqqGy7wGgNcqy7DQrvvjtLRST4how1dXXqhd8uYQDwS",
  "key14": "5n2Pi9UhBxVVnRtb9FkYknoB1F9dZ3wZcc5uR4JM3UVTySSMjUU3x8Uv954tTbBRJkffWDzXcYNd3Nje8dSSoTrw",
  "key15": "2dqysBBCzbt69YnBZdCcB7TfT8PBdBmQdaQL1XjTY4ef64BcLRgnzHTUnfkaXvE73uedmKqQofUtMX2hVLN664Ld",
  "key16": "VC5yTJxHvaFGhpo2BSadic8zgNofd52hveUu7ugFMJQspTcv2cdLTikiNd7Mb1EaTN4kMAg8FFhY7kh1UgEYV6M",
  "key17": "4pyNAxBvLAVWuqpjXZK8vcey9Yc9sCiT8pBBqjND4UWEVwmNZV4bDFomBmjuXy1hR54SfLq1Los2npASUSHe32QU",
  "key18": "3ZSxyDbLzZMqsVLHQbrMkxi1teqiboTzddZEiNMyPRmr4zsE6JzFrPEpLsaQy5NxWx7dREUvtKEk7RZz9oJZ6Nne",
  "key19": "LuyLBLAQCPnvf94PAHu9m1HQobNMQoYZSiVRycYKkeLpQ9gH3JuPEYnbZyRhmojeh1cnYBMZGds8BznPHB47tPJ",
  "key20": "4zGoBeqwVyHiyxCmUiaVu1KAKEtFLMpaBr7rdiPGVoh45whCjfP1fyq3xHnAihTHTmnD8wsJUATNSe7Tzewz4Buv",
  "key21": "46p2jGXBfYg8dZkXZioak4QrEtH2UA1BoVmh7dKZGJ98fWfoofbwH18Xf9KpdsGq82b85tq4sERRKtLuf6onZK64",
  "key22": "4tu1FEEaAtMsjweaKkVdyLxSYQbHwYk2H7mAyWLGr4PPbf7Cz9wr2NLV3XzesTzidjkUJNwAYJ6ZMTUuGfK5wu5F",
  "key23": "2X2rRpo7bm2nNHg49S7Q7Hp6Cdh7ERz3AXbTJwVvmcyr6bMDcoYdLDHQdc2SWnLEpjrqbn1ewVmE1bYMSS8kQKdh",
  "key24": "5gkjsxUCXd6XtgEGHu7PiUjoUdhXdx3WeJyQZLgRPqX9qpSFF1WxzoDRgBj9M5AwmVJffgGv1spg7h61x3ennQN5",
  "key25": "4i1mjycBpJJM45HwDNQqY9KiseMFmFjmEADEMmR6u2rbUCnMCBLL9DvvqGTPRErPA5Le3uyjofeFbmTjf22JgwsT",
  "key26": "332nn7L6ayMjwiVjaWMVHxtcwwXgdq9tELMGha5TcX7wokmEyuuFXwbucynokf7YUT7h4jX1TFM3uL39qTPaV3Qj"
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
