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
    "4cHCFa6svWWrkJ4PYZMs5Er1DJEf3cshRZgZZnH7zDaZYdFqx253Z2y9BSrv2DDKq16irUTGrVXr3zccoBgqLiXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57bfoRNaNCAZQ5bQL97oLAnvYwZixKQiz9LZzoaqCdNmNSUKyHWhtSjKQvYk2xb8KGLz1JRmuKsjGi6M7BeaYQse",
  "key1": "4dFX4jjXjjdprAV4wiSaEyr3buKUqfWcPXS87BvDnQG6G2Nto9ztyyZYBeRvyRUHK3XRM7yaCuyUgqGMLtdeY2uc",
  "key2": "49j8sQLejg3CYct2bfpKEcw6GRidW5xQvqFCLPnMEH4ySvxfxYCYx92D4qbugSkTNzRd3fX4jLgE8h8EWfR9ecBB",
  "key3": "619bGpVk1wCPq8Yxc3b6yxwtAHhykZr5obUqsf24vBArsN3c5KiAsfWP7Mbaxj3p3pN6NUtKcSmHYzkSZfFkrHMo",
  "key4": "p1afyvd3RSwqdetgNQiUU7sw2NYyjgpkvFqDbMwiGPRQ7D6RL7ezK165mAifoBugArbdcKkRwL4KsHQtkrmGbSw",
  "key5": "3pJtczRYGwcfKSw8MH1ybEgTbE2PoRQ7rqyk36iCFHQCaaKFLv2auJySaEELnCRqDZcLzx9XWwCnnSP56p3Dk1Xa",
  "key6": "31CjEp4jPkSBQMaVoXi8mHghKCmomX3pJgJu9dL5MYMsXEt8TAsRH5YL8bLaz4Q78tCgnRCuHWFtJ5ejq3FM24Kq",
  "key7": "32CqxHKpCE19FF7nUMNaJuFxzFnKx3VxNchtefKptcsP7U81BzT6bfzp3UL5gkwEJaDjP3D1kya9FMUrkwLMDx2U",
  "key8": "TiF1kxA2oeEZgoZzrBRE196ZaTmGeBy4eAZSYZQHuyYm39DrfnfD9cQKWzf4i8gsmccAC3nmsQv59gPwVTsz5Ps",
  "key9": "3o6XFBUYQvYs5XbahjiGGHFmcMYJiqf2PyMgAMjVQQLouBG6gYXbv6UzsuPrksx8B5hhUPAXXRpQqnYUy7FbJk3x",
  "key10": "2ve6UmT8w1WjyxUMbgMMzf5hxiG7qDtD8BBVsvnP2paU5sNY2LA8kdKgcdzeBy7uf5Ym1KCZ7K6PnqVvAXn3qdH7",
  "key11": "28aC1MeJoFKnBZAAYSHVKa1sfNmQ4BmxGXLyV7qqJu3ueTfehHx4c2T9QEgqDgLXXi6QRyHHLG3VNrLy1cjUib4u",
  "key12": "2vdk4THqA9CJeATem3EEVWt5wdBzcp45kZC49Vyki13rSDVDi9dwLKhdqtJCZEMcZDsMd9FkyovgcUuwrGnZnWcf",
  "key13": "65io386SNoHajSrERpr2f7h6JoJrrN9KiuBP5huJxFiqkWyKHby4NkVh9FvpKwDjTCnJM8c6YrJN5RcvGYouFdCp",
  "key14": "4Ba1aeKycQEcLWbGu5EwEDUM9TaT8jFdrk1EUXRZXAjeSfJW4z1pRt7XQS1aFFTkimJtaTPpbaydZSFwS6b4D4LB",
  "key15": "5n35MZiZqE9gr6gLAqSJV4qWQxPPV3Kceh5fnrS7p3t3iMwPKweCVtiV7gnjoPo3ecNcoMgmyHnxo4PE4E1KMbad",
  "key16": "2Wqhc3hUi2E3DkucRZppBzmW5Di9LbVSHUG2BrJuEq4Kp3GRSxuyoxVDzwTXDhrG3oxM45WvTBodVWCKd2QmphHW",
  "key17": "5XsEvGTEEzxQk3mngTPYkGh9bFFWSJzzreksX9XZQAJRfUe5APGLBHRXGvNTNVbNMMLT29Ri8B3uHfcistUZ5KLg",
  "key18": "4vBaM9XB3Vi2y9BYxYsdgmV7JrqsBnim9k9b9Y3m37xwNyFpP9m5z3pbjrVpvwkAJZcCNj31NP3Pgd2byRvVzeoj",
  "key19": "4RjLdvc9gLarah39QdxVittmD8H34CrRf7GXJ76AmYjcm9yktgS1YCRMxkjWEzy34PZEnLjkepqXuArfbq2Ub7wi",
  "key20": "2GgfqhitJBnwVdoZxEpQ2WrsrwYdyWrx2ZJwZsYqypunFrPWXi3XZMmnmH2fsUTsqGxsWG6sLzFTXGzpMtXWufdv",
  "key21": "42JAYAW5eUyYJdgSXxQ32FkuRu2kbDKNDyZSEBQo7PVZr8cFwg6p1meyiwjt4mTgKkGZA2mpZV3HF8sxtpbF8c8Z",
  "key22": "3mcRN2QdCebnzChf9ZGBJiLwWWRXd8N4HBTaxKHboDQXtKWuc4AQoSkpMbJeVeRBc2nFGfHKvLHvkNLLp31iQUnM",
  "key23": "5mP9mcVGVbiKzb5s32qCfLwKLajDaRmsrXXK8hW3qNq3wVQNApripogPtYaX8HQLYgVBcuwq1q3zZ6D7GnfRqxdh",
  "key24": "3TMg9csvRzfUuXduBPuTEYcMXah7w1qHeKEaUwL6cFZbPRqqJfjfTyGsWBtmGYdjSYt6HSAz3CefsGYoHgV2kmRd",
  "key25": "2LAFCGTkjsZBaA5ctHQWFi5LS7o3jCgyA4XQwTAnFQHzAX5VZHe5swsQ4zhz3V8E3d7WoYTp77jo4Sn3h7cAYg9Q",
  "key26": "4LVBjo1dAWYMqkGWYDWb8SqVZiRo5LkHXZBPcVxLBH1i4mLUJbMy3ZrZBzgCRJd49QZFKfQBG53rrq7H3YELUYTz",
  "key27": "WS57KLvB5ZQQD5eX8wQv6bUTgAqxEQKaBhpXhU3cBevWrVX4rb7NHnnTEViANqvUn5tf645QNf6e9vgXquQw92M",
  "key28": "5bfzCLgFeSNzrN2VfUCyu2N9ydGTbxo8gYf8Q89Um2NrVEzsWMNYjsmWpUUECBQFfcV44uXy93zuBXN6PRnVG6vo",
  "key29": "4QmrTsqhK8hKsnPqNGhwZYGxzs48UFe8NGjbFXRDZdCgUM6dkm4GesCwPKEgefJ7qpgGKZzXN6JkEThbyEw1fQ9r",
  "key30": "bLQyr4oUYe5Go7VFJdZhNe3kwWap94ztMUe2Avy7sHGRsseaAfMJyERR9Dz8AjZmpU1c1WGr4ZMQp94URpQ19vw",
  "key31": "42ndL1KZ1Cw3A9H6nhtbn6eyLXv9GC6TwKxizM45vrKA9jiw5DTzjq5sSuhLrjxVftuK7JcPXoUm4ekFBdtbRjUe",
  "key32": "2zYUpBCrvnctAaSL6nwtU4R4gJyPXyrGWZTSpXCmTBnBDzGNgUPBK2wthDpgM3y4j5bcyToiztG8qvbCVVmL2KBM",
  "key33": "g72hR4NJksscByXUP7ThnbjzBV2b5kUqSUTuwxymx3W97AYnQYo2BDDhh6f9pUDEhSHKF9gvBDDi6rVFTBSZePy",
  "key34": "2bMKJBZEWzkfvS4bmqYYZJDkGLdBwu45QwFnQ5V7jqi9nnmku71HK69e2FNftmMGcsGf8og6a8XcERx4Cgjh7Djs",
  "key35": "48dwA71FLkvFMVGVoKrkAUcQ5XXcmbHLGdBr6GXCwb3R4oHmKdFfusVq2QQYZ9VxsiYzuWcrewZY7DZX9oH5zXHJ",
  "key36": "3tU4fqp5E8i7WMsSCqMn8nQjkNv39Q6Fy125Zn8scMHcKGFdwTPjJn5fBCg7u9gektjQSwiFmg7so8feLLGtSahm",
  "key37": "5SVNxYYaktwnyoPk1rzxR2vajxeZmT26urRhDz8Ww6cAWmYM1nurMZ12KJcV3cXrTgUW6UoSH1Bg8TAZrpNsDnow",
  "key38": "3zSjkTvKj6UStTUWHuwYJFRhQ6nKh9HQLRXPYAT6iQXnuLSuUum5x63SCACHhgyVGaVCKDqGvdMpG1hpTYuyK8vo",
  "key39": "5nhQcszCfYs7sr5YFPQt7sW7nLLYTPjWY4sz2LFwYDvEbhwUiBk38jnkcGdDRCpfH31VBLmmSdoxAE92dWhhqEgb",
  "key40": "28MEnJvmUDsr2mRJovNT3hopQWuKJNDL6poMKTWdwLt7aYzaAfYEwtsqhZEm68SsZz1e6ZUWpMhmw94twLEFoEh4",
  "key41": "3UgPF7L22Vyxqm7xXjdP6PMdJ8mNtVRkZfQkoQaz7BLX6o5dde5ifySiAnR8E4eS7uND4Nn6EDCVXVkJNjKMAq4e",
  "key42": "5y6VKy12iFWJDGimDerUc7fqnYvwJxe4RM16TWnPCYiMQzEdKANMJsQiARCs4124s6WdxCWgdUkmivuo9KfJwAzA",
  "key43": "2BPxJKP5u6zyAu7TkHBE9exA35ziErwkQ7TtaFCbGji9aG9RrwzNWbiXBq13PYx7ptCFi7yY9UDGxuNad2zB7d6h",
  "key44": "2cUdRpbEprvP3rYjcEe5X6HvokJk7RrQSftj9FMCmpWN5ABzBXmje4cCyK8opuuZ565PBP4Red5PYyUvq5jW74bB",
  "key45": "21r8b3fLKF4gCP3PeVkAsAeBSPXy4uj4bXmBNvYuhkfTkYVGs4XRKPyTfvtTV2dxvaw6Bagarc71bZBqtoNjChbj",
  "key46": "4bx52pNBRYQnYRmuGkBUrJ8KomqLDYQLJUqHmoBPi6J6QeJGiN7pf2akNWEoWMLHwqQ8eDEFC7CVJo7ibocBvVxr",
  "key47": "2tSpD9p7pMz2ZEFZq8newiM2fftwvye5AZ6VkdhrY4asAcLoD13YWK6A5htL3KC33XbWbxcMDsDZBBvS4NWFjAJJ",
  "key48": "X8XrogxDteAqfbWUcN3PoEZ3qN5NM4CChDj3gmX2HVBiABMRjx3jsMWJGSgvmBaxTuEe7VQZw6jfPeWJMhJWuYv"
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
