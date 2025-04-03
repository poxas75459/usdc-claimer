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
    "3s4hLRif5kFgqu1S8ZMNnqwa2Tg6ZZuQnhYfFyiTKQD9QCpvrTLoLox4wd4ALj7NMJBqxw2zk5VfQoxdE4P6ybrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D8c7cJcmstbPqeBhppLzxLYPfTygyFXaLqQT8Un4zGiE188nf7Qd8txRmCiQW4kAy9gHo2xAzXiUX3oqtUwoZS3",
  "key1": "LGvv2AGoK2VZymz7fuvP4MpDzmV7MQyKGjWE9ovxYAZs6tk2qKi3mksMxmagu8iQpNLCQDGht3Dm33pnh74cGom",
  "key2": "39EQkEb6W2B5tnxSHbXUzedE3sRnXfc39xjESDXxEp7EV4o326fVrzJtvq9kQTg3Sxy9vYkVmG8aKnNc8Nh4yBde",
  "key3": "QFJ76mmxp2jaWcrPxsbKH6ijmDauBSFuCznBvwL3r1kEQGq6VRJta7oEvUT4xjfEaym6WqbRWuFtoyFdepevPwE",
  "key4": "13n4EeYqmrG5aWX2QGwK7hRHjgJgevrwwVwgEcWXbX9V2ni2QRQgxGhM2FpzsA9RpJv1DE9kiCQC9SLgz3PmKy2",
  "key5": "4zzA9kZkymkXEnbXUaALqYKuygdipbtWmyhQwLUFNaXgfrQnXRxNMkCtJpKCqHra6iMCMPpjxRZyLVRLGE8hWTc8",
  "key6": "3qycAcRHh9SxCuJmAKKzX43HqCBKQbi1464fi5jpCBHca6o5H5DPMEQS2GvmGZ5B1VMdVra1w7MWUF8feP6EWFtd",
  "key7": "5eQnRvVDW1LoftrwNjmUyZsQWF6pX4Ps54cNd2w1MiV1AtU862Vvs2UENQyY5KsKZY9jwDdJyK81bcvdMqV7JApv",
  "key8": "26dk9w5rJgJN2Rbw54CDVNFj4zJruQpCDh8XaPSsuWp4i6hhosFUUsPcpLCBFvuw2DiEsbkjGp3zp2qwh1YvSy4n",
  "key9": "2TVbS2XsomkCK7YAXMawNPcnArpzgkiFoQVdB3tyFwZvaVYbtM7E4ueMKongubfVES9648XydJ1YCYB5SeUEzu3s",
  "key10": "S1YeJWn8VuwGLNDfmncpf6RHP8LyKhi78eaS69uA7eCWmQVUkqd39LYU5Y5rzqAkwos3PwNHQPzzBLx38px83aX",
  "key11": "natYMa6cn8xZU8TLw4xjSZc6Btx6Pva8HymTfWJx5RZmAUDhqyP7zuTf2e3a1pF74VboLCAduNxZjJLK12NbJaV",
  "key12": "3KHkuSNp6YEqxDXgaYBgKdKCUZM66UmZzfGzoduwuRReyuGzJQVWQWhwzuD5zfkMyrWzWt759STSht2fv5E8pwCR",
  "key13": "uQAEoKyFMJpUBgpAzpz8HZQJfRpt8UXib4KeKkARsgw3PnY6SDKD9atPRqL2vz8th7ZVFUWAgp3fRdj8E46Z1CF",
  "key14": "2gwF9MENkNMxVWoRaAy32VyfthLwUZYD7xEEodNjh3JQ2YoZ8puULbRrEPUXEGbr8b8GLG8sxHfN6GPpvA3X9QRY",
  "key15": "2BP3ZrhU652P8zLRZTzGXY6BV3xXZHkc4xKrGi8RKcBuu31JyD8GZqZAudsmFPSyn7mx8ccWxGzpgSTNnCGSW2G9",
  "key16": "2V7d1SytiUzp9jk1D7Jqoe1Zmp3htYy1VpMg4nqPghHqiWcwZSoxBmMhoxYKfDjwWnmJqHWnULA6CN165msRyZTQ",
  "key17": "3MzDtV3MRcyZ2d2Yzq4gMjte78m87RAGUoM6X65SW1STvDJ9qEv2ZiBArWtF7zHBZK2aJXiooBkxpypdRpgwrP8o",
  "key18": "4YW8uUXPPVe7vPs4eAsiAddbAgRsL3rhDci54HBFwcjcTbpAPSWMH5toZys2KQKazNBzbn4Kj8h5nRMRPNrba5dp",
  "key19": "2cEHWo73WVkFoHinCP5apQApp2DgkoswAiHs7G3nJxhszEmz8XdW51oMWAzZJ1E4918VRRyNPMVRFQZjSdKG1MjR",
  "key20": "5NK5SmFnt92Hfv57PepVSqRFz9PT3LEL8Uk9muRr1TEoJmy8dXdhBvsPUqVLCcVGFcV4CQzi74DSEHoyFYqyGkVS",
  "key21": "4xBPvc17suR3S88eNkLK6WMkfwxrGB8FtabpvyPrDXVUkVnhkSyZtdHHcXoCUsYSYKNM6MRaeBaeageMxt5prbEo",
  "key22": "4NUBKyWwLYqQ55sgg6DXDzX63RALLuXVVX12eHp5HEzPyUCh5b4GVfYBjAxPJsbftJf5oQN3SnFVAp9CLD6GabZG",
  "key23": "49boqKt5u1MQWeeGw9qtsSXpbURYT8Z4BCxh5EmMsQAU9Fjwrp3KtQAvY9ikstAtDT1Uq8g6f633W17DYD1jvL8X",
  "key24": "52tP19wzefMyr22ajvED6Rsz1VMMmwvcxkA3dS3ASgN7E686NDuwkhjXM3UDphPQuQe7fE8m278LL258aQNzcAtp",
  "key25": "2iP3jBqrbJk5ZEjGweSFBiwbazTepvAEZNMpdzd8jNoKqzxwJ4or9zbtXJpPgtcnzC2YcaRJbznmF73zFKxBxWAb",
  "key26": "3UV2ggue9P38zNFRSCbyzTWewetYJV5mV3ZybcQ8r4ZkjknRv7qB4aWejvt8YDwSrX7JjDJGLc8FFu1yzJJpbkKV",
  "key27": "3PDbMy75d7o3rUHdJoo8VLEgxk1sy9ohZtGJYpz66NSzrjnYSpPBYbsYFqeYBjtxo6hYJd441d2G7ufd67daBqGM",
  "key28": "4d2VmnCoHts1DXmcVwmhFgMyEc3YqztBVmgimYHixAhSYeMoW7g2acwgL3C8rTu2imVjndByDBhSr42BrgSmP8go",
  "key29": "2MSeKt8orY2GBxqxPbXjujKrJ3uFx9W4HoyG6kEPtfAkLDgfWAnASk1vxSDfDQBwQRNFRTWmhVfrGkmKYiDBipBk",
  "key30": "iCe6n8eotvHmd56rd9s5fAS7jnomiAq4ihuBBR3oAhzBzBJXYZ7YKovQXEAozc8T4s87CsBkpJiQVUiebFuJ2UW",
  "key31": "4vLSZYrpXV4a3WEHvmG1SbCHDkiicA6EwqMB1X8iiSEUDq5NLxuvkwG8WZnFcBrvWoxo4tUKS7fNrvTh7CtMLJLK",
  "key32": "2DV5TL8kvoLjCAEZxsJ83RC23HQ9VdqVLoZWE1C3of1fYHDnqYcagf6GWBnWt1eTXek9SCX59CbVzoeq9ogha5fV",
  "key33": "3CMctD6QUV3s7PFTz99fzmubGkxK5ZXFkEMkPbByoF4JfTGcrFpXGgUJKBUpv7wHgHRMUPCCnjg9ZVbqYLHXS1h6",
  "key34": "66XRHJV2iU6eMy6243qgnhr7JZXp561RnwGHvtRsu5Ni66oFpFS6nTWBeK56371mXk1XMVXUfY1ZWnG1QZkPfqtL",
  "key35": "dcq2Ps4RgPiUqfV6hfyEzAbFitqVUCG7n5yCpzhX82LCRKFJmmARq5bhyBJnqinrJ4kJBBaLxsq2GaSHPPrVzu8",
  "key36": "yTnZo57xqaeUrRR9f94M2MJJyJ5yPXWLgMrGNvNhkAoQpPVn1uwtt342TnQLea5DvLrwTB4Efv4kHeZgjUo1BaV",
  "key37": "4ebmZzbCBTLLYs8rKo8VbAeMM6thTnEvkYkTQ72idZErDaaFVq7E5QvrPtMXvW6ZQeCdypBjUDcSJXBVeUu5aNK8",
  "key38": "4RmRtam4kfMMY7Qw28ZE9x7sWNL7Qw95WyfZwadeqqMYm1eqD9AKyoNJN43WxXnUaYDA2ShDH1txHypBvpwuz2aE",
  "key39": "677m5yV9W3JV7GUDeuQckpgWwEEa2J2zykY14AQVa9kTJ5Cs9tfnuExcnStLHCKhzJ7W72qWuSagq4vgrkejADnr",
  "key40": "2rsZz5MBJMt6uECLNjccHScjJXqphijx4onCVUFpEY5yGBVVWCAAnUwqfKHza4abvvvQc2ZQNrycTRqmWyXfRWAF"
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
