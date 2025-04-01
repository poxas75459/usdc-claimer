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
    "4zQyh8YYhS8hr4q7XZ8RPgXSf3zPkNCC8WRCEAQpHGJzepZX8LU4fr4gm53v78TqaZA9LqPsnmC1BjiejKvNtLeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5twHeDySFrLuApD5XmvTTFXQjJUdm4Vi3XoGGivvxGBjJCQ6SXonS54coqxezP2q5XK7EG8ouSqv9sgi5KUZGZ2i",
  "key1": "2tueVYVp2p7VEtjThiKgRorA731FRGAMefVmNcr5cVm9eB9sX79ai7EyTTJxf2MmUctkFjtV8jJs3Vo7vAnVzeRj",
  "key2": "KPuwqNRLT3z6kzQhW45W8LzyVdB6DXrkfCC8MdSYdnqWjH6JfzjCHWWYd8BfPyv71theUCmWonPexnZMRdzNa4S",
  "key3": "fqZxAbYLX98yV3GQLx5KhHoRGQL3tWuBrU2N5XQt17GaX1ddaAsf5LKFN3vA1cMQrkNQdmrSHm38wH7wSvFgXTF",
  "key4": "zJ4LQDPuXC77autHeUL3vnetcTCbrEToUzPitAchBNX4nehnUAJpewD391ga7ypVHuGcectJrDHi1xX5rmHdEus",
  "key5": "3svgDVmyL1Se5NggMTLcESjyEchwed5xuPfXsp6WXQrWUPm81ztN56C6hdWMCtK3ctpu3FTc8r4qVwqVMUyWifeP",
  "key6": "2584E5akJutbA3by9w1zsJvQ9Nq2W7G92bMBAMH6UdNV3uu69PXk2EWvVdRsu8yfC7B83mq86bmp9tChDkvgLP8g",
  "key7": "5TQcneCVtgbpx5PWfW4pgiYq5uYiVeynmCjm9sD74MchBjKRGvuthgXxcZYrbczExwkyfXnerNqj96bn8yDHVnVk",
  "key8": "5KV3frD61vXtw1HZFVrK3xmSYiQRu1QGNehnTKBDryvBt8ZCNue6FB55DxNJcrPyGpuaqLLRRLp3vumYkQJ2YE5W",
  "key9": "5Fc9uzqKrQU8FHe8dqaFZkGnJWvdyrm8aHap9kNjK9KjfnApApM4ppFtrbcHq8N2RAWD4D3DgFmzPN3myVSMaouk",
  "key10": "2xmVLtf5aDyzejRaMoz2N8T5YaH8R7GXkjQ139r6XRy7VyGjaYwGt7jbrjGvCozK3D4ZksHrqFKEnJ73mMaLubfX",
  "key11": "wpoNTrVfnMFcsfXyisVr5PpERrmo1czhdwZvUuKyZgZLDd5JGNh2wATFTXskSxJ6TkwPG1EmYzMGeTsFYEyjH2K",
  "key12": "gzYJKHAdvnXujTCyPJ3NzECDvvcawY4av8tfiwZPWhwmdF9L1SDE1USj5X1Tb1dv1RrMNtsd3UWWVXCVP2aS5rw",
  "key13": "2EZc1ksqYSjvFhFcKkZ5HRbikoPZXekfzBaoRKptkXQpeB6MzYP2GPJxP1jme6bxdJY6bi9h1oD6TrTVE62JDZQ6",
  "key14": "4bLMm2Yqf2jzdVpdAeqNgfpdazVJm2EwpijtdzV6nGMN6jTcS68XPB55LXAR6wsNuzQp3RQEXwrKBuLVSGSTXz57",
  "key15": "4MBwe5NGZki6UTBvCrW5799chHqfUEqhHNKbWRgbLziSRttA2uM5RBfzK26HHG5xyCQ2EamWTchQHZsHUonUMTEs",
  "key16": "31dgDgC7c3ivQpzJFFdCMMoNDfKh1oLbV8rxA9J4t4dhd39k4hPC89aHbWuQv8BtQUmk6rdxXBUGUFwUUwWL8VdP",
  "key17": "5T6nc14GQCawKkjWpdCp6R2S9cs5ig9CzyBi4boabNYxQR3Y6CKikfnwKg2NwRMyrWuyQ8uSWN5Q8kjuJgU9VEcK",
  "key18": "fgJDzP4of81mvnJmzxNKpecHQuqNs7xh2eKX396mpA6UK41Apbxoja3yx9EHngCKdMZdRF6j9VjrVzdZt9QUF84",
  "key19": "46fa7RceNemKYSbr48wvpSxMTTt3bVLUPMiH8eqFERF5foPUPnp5Uz17eWkmt1WEQ14HM6RtdN72kUFw1fzzZDZx",
  "key20": "575BJySsRmbo9pVfkxVcH9oBkHygEzSpccuYi8dnd4oddk58j75RM3oFECiAQhRVFy3cmukjPg1FNaqaKjTZ2ZrQ",
  "key21": "njcTeEDJzYoG4xp7ScuL7zGf4D5RyBauuSwbNUwX4XjgNwAojdsJqiGxCXD93hYW9RHNLCu7FzVGeeexgDkw1Ht",
  "key22": "4CfsWbkr6iDoqt4b9CiHEWqaC6P5KEk1gzE5WVEZdnBhSPFnEevG4a35RbReMWhiSaBCxoWku9B2VheHAFigjeo5",
  "key23": "3eKMfDgvvHA67yxRTNybS92JkD5d4LcqFAnazpXBFVrBMMuzGC8Tv8VX1Zv7nEbkPCFQEAkWrdCgV9AcyBLWqURY",
  "key24": "5n44ashsCUdt3rMW27yX4EVN8CzPDcUq4NZjYYauwtEu1N28EcKq9b1iTUzJryy6z8er4UTF9rRE81y2KjWqqjES",
  "key25": "4EmR7q1vWAVoVyALRXkzywQNaSD43WSRUxKkCFsL2VwyKiCCeaDJTfpqY6sjX2XeE7VvFjh9fnDAHFDPe7oVHQhk",
  "key26": "2vZmYSYjpBepPrqUaUmNzMmc8vbvYbf82niU3mkKLEdSPBgwKUxQ2AZGg4c7RDgjuBkUUd8XpEjrnCLtNg5NR8vf",
  "key27": "2RWNK1vK6tjgXDSCUeq6HHUiPBgDSq7u5xgn7uVLEpxiCwcsEZKvzVNWs3THwZpy8Hvb32LfManA2wCVHKDcogn2",
  "key28": "2Z4WVSLUfwqdQhJM56RYVnVgeakXeC9n6eLtio1SGE1zK1MJ5sPupoZy4X4sw92NWoqZhe7gKSsrPJsmZ2zKRpCr",
  "key29": "456hCyTECME8P1X69JGtKhJWuJaAPPsjmJ9P54q3XxH3EVNiio6UxrWKMgAqDY7wrPQSbp4MvYW8wGMs9v8yswWN",
  "key30": "4h4LPJ3t9Qr3rLx2XbWeKVUrm3ryf8DmaB1mb8C24S7qFTQw1KSgeHCmNbr9xNeVL3P7mSYCnHu6ypQ5Mud3Gcaq",
  "key31": "3zcoZvNiMekZNM63BQmzNJLzgBBpwb72nDgL1vkyhKbPAAS1fxEeCLNHNHgZ2RCZrycn8utFcQyE744Z76GtDC4h",
  "key32": "2xcKUF1X5tRQcned7c8z6H8xuknZEy9SWCQJXJ1ZxZiUsJowNbsYAAnAiRCRnEXhpVCfrAvWKUnGQaxejava7gf8",
  "key33": "2572z1zLvve7mZ35yQm7rMb1BRmP95G9VUUsz1imYFHwjRAS4jJmHGZyZSdpU8FUnKSPpxyZMpicW2Nkck7UW59s",
  "key34": "5wFdkeRmeuFZfHN9Sdy1AUmMYAA856EAPxcFQUoWq7DWuQceu3jp2USZ5DHBcULuVad1Rv8Rar9BBiXts2jHePZs",
  "key35": "2ZHmJFMK4HgsEycM9sRsb28qhknasv6RJ2Lt1QWpFdopkD57td3WBJC6gQsG7FPWr7pACGj1pHsM3JF3RfbDje76",
  "key36": "oURMkACaxNT71HZ4ffKmGTHwTWrU2QKciPZBk6B2kSxL3inQmtFMpogzfLZxSpAz3UaU8HkVW55yEvuNdfZN1xL",
  "key37": "5a2hVbeTyhGTNqLuFxzP2rNSD7tYu4kH1A13TyMjgCLvffVT52kzNVYnXfK9dQsN6LF7N1EsKk7rUfkGWFP65Eju",
  "key38": "2nPN981seUr4ZATXaPgWfpnYXiejkLneBKwJABjGYJszvGK7jQK8y7oeMAs5M8U3Y1pW6eTAR7bdernidTDoYx8v",
  "key39": "4RD9UvFNX8btXZhxPVTg4Jncatg8rmbaXojcA1RtbBkUCVS9fhWd4bzgXN6qvzTRnQkFpxevUNbyRXo5HnbABdtE",
  "key40": "4JWpYcEALBNmgZfyQxQYP51kkaHoJX4v8CVoYCEcn2ZRGxdotYqN6DehdBQhfN5td8JXnks2ktHSrUUBHXKMWQRh",
  "key41": "2B6HNKua8tpGp6atBtRjPnnj2whRX9zkerdj8weC9kxCUhg9g2p4XFrS9RcHJ8EfamseyYX7v4Cgy3KUmDq2tuij",
  "key42": "4WAGaL9Rw4x6jCEF7DJxSCT7HYKAzGwp9x5iS74GFy6TtQ2gPtpnkS1bhVYxenP26hnqP3qCSXG4eGcRjM3Rr4ZY",
  "key43": "3W5z5dmTTt9J7xzZtEiP4asQ7qjSjarPvQzSujxUVg99ysJ223bb5akh1KzdHsHetVSSU4kA8fyqZyudQPy6mZue",
  "key44": "2CxtxpkwV7NUHKo7UMGuQSmibwhBJVuA4FFRZcjccz9r41YKe2zb4BrDNRQL8vP53WkUqyDWNgHUaCRKHLuomVMQ",
  "key45": "4s82E27XxpcrxaaKLDn7VwXHRZKxAC8Zd1eLijtbhusLRB85vAJNB12fWUe4dmQ34NBhATMbbTs2A7jvdMe2y2Fc",
  "key46": "Vm94MrVKCcGJB1ryEz5CHjEG4wK8RuHToBTNtoG193qcm9TzXgrfD3EM6co34KztWy62FqXkKcKdZcJGXbyY1Bu",
  "key47": "65hfVrkxm6i3SJ6edekDM9LbQ3a11QMh1g1SmAJPMcAiVoRNsH6BfEsMFRfEwpBd7b5vFyh8TNSMnpQcrEJEPrRo"
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
