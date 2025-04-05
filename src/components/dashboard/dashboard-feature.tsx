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
    "3W6bUpMYNqvToNbjQWt15mGTUzFNYMMkAX8Zgf2qtYQMkgiGS9E3f3tkRsj6GgAwpdYDKvoRwYyjn26MorTHsdgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LAqq4PLULbuowgotmBoKvTkWQpSh8MaXFQgAXRLtywpmQbEw3Nmgdq45RS3zCR3LwgHFQRAzp91XuSP21sf2Amh",
  "key1": "4iqXYHTkdtXeF7A233fdhkXvPSL2rdLvq2v48LNewH7YmnGFsWKTLEUwmFyxqvxrJcDJkzB1GL3Hqw2qRmowt94o",
  "key2": "58gtFn9SgPW3mREbe9NK5bQ7P7z539L4qrS7gDJu9gvbbnXbVMriwWVGMnVMksheDTMRQeFz6ZWfVnvPSpV9M7De",
  "key3": "3uy5LxxNrRAWzFgZT1FEbfvqkSzs1kfbE3v8gk6eTQ6m6BtXUdthkb9MABad13beT6ibcbMxWyyZb8oJzqAcPRHz",
  "key4": "2yAHfE26WrbznDkMi7DRjhYQd1ENZqTRDDJUZc6Dm919kWySEFcqrmyN1GWohCs6drhUXjWQcoCMwxo7NowVptQh",
  "key5": "53JEVgqthP8FjC9wMfUYX9v93UfCKh2s2jDfkbio5EWhWpLKBnjHW1Zc9KeVVK3ueTcNeuZgwqrdfr6YuG2paWAc",
  "key6": "iVxThTkxcvkSxaUbaVFaC6GwKdeXbAhnNfb2iBdtYVd5dtfL1PCEvvvzMEX1t2vfY5chAkQ8pkLYh7HUG9gbGYK",
  "key7": "hqFSpxReAg4C3v27iq5MqjiYZNyov5Jf16yUhU3ngC9PQDNPhBgMKcB54chXxXCVnPr3g5YfQM2QuNH912Kdoqs",
  "key8": "1269AZ6qQozDyxpDHw9BmoFpwrqRd2W4jnpx1TXV7Sd4NTNbK8hEvWfKvcgjMcAsVhXUWPNFNcriwSLDKWS5p8Yb",
  "key9": "jmjMpLvqc2YA9qi1xJ3iapNSZqoeAq3miMpYz28874ZsZ1vU1HokMB392mv5zw4qtaKc3Hw6RB3MNxV6fyLFpGx",
  "key10": "3ipbqSrPFAdc7t1ySgysowq32iFMH4vYSbergFuW6q9Sa4P3PTrMpkVL4bRHHcXswThdWtKUiEt4KaMoa5vmRrXh",
  "key11": "2sLFX86mw4WyJPicEyDDET6TWCML4WLA8AJBkMMwu1heFAdAU2SC63jJ2ZXTcuedA1k6VNxUKqXeHdJDfbfosKuG",
  "key12": "3PTfxkxVMQEC7Ba9CvzyYK4f4VWvpcMp19ZF75rYrmLRacpprH2wpjboAxfeWa6iCwNHC1YyAPRRDKGUotBLQbXj",
  "key13": "5LJC9Z4aVQfwDuWDC6ktbAuxN5P4E4rQ7kmBq7VrGTMnHj332xec4seFgjG7NW4KTw6GfDjybJbvE42rsowr6yVY",
  "key14": "5uYrBEeP8YJi2dnxgHxxXUKGcP2SgyPBSy1iYPQcCvF2MTX9DmSSs5xrXbcsaeVjziN4hFjpAKowuaERhzf6YVKx",
  "key15": "D7yXS8LWkbEJdLHQKTrLiGYHf5y2LNdX2LvW1Wqx3U6sw19qf6tzyWBjYmJ7s55SUmLaRkP8xmNoyWcmyavH4Jm",
  "key16": "4d9fwczzhmNoYFGyTaJnZZj3EZ5vWJdo6PVgrPrwYzGmKxSDoW5BWYiNK2K6Q7Gu6EehDa9iQsLzU1DHBUh7fDqF",
  "key17": "53UJwZmBruJWDhSaFMaBzVd1dj2vk832Sxsjzs6Biv1xajiXajLgc96F8gX8P1SpbqXHy9BN3yD9gWBb6kc3Ba9K",
  "key18": "5C3s7AhyeX5n9qJrKHYL764NmrdHYhouaZdajWvtTcQrkYT6SPTzxvPLS5jTg3PKSeYnqh7duTqWBdmfXZ9c4Gpb",
  "key19": "48vavzG7Y5kRghLiLLz4FPE1JkLp8TDccnpiDNPoHhAPCMg7zr92JSie3sD7Aw98uy5FeiNr77nNy8GUHpqzLQ2e",
  "key20": "59UtsK7WXpisBzAfBU2mR64AGdJdqXr4FXCozRkGtYj642VKwfEcFdiPrHgVoJudvyBgZwf8FccN3tmghXJ2vdhp",
  "key21": "32UMMgfrJhU4sKymPyxf5LBVotn5kbkHxvxM2MKxWSjW6vYbrzMVMUdhW5uULAfrYx1io8ZtV5LhVWgUvQ5pHTbv",
  "key22": "2sguVjLesXjxQxGnLtDoALrf6FjDL3KqXbvkkA59Z3NKXqyyfa8GYUmUSugwrWxiH3Y5E4c5JsvHhr2psXQ2aZjY",
  "key23": "3viQXBCK29iV5Az3UDyGJqkQt5ZRD9y8a2RRhWJmdVgX4nxWvWxChqX7eRDSPuwn1uzrUWg7Pj6N1bnqPvkHfVim",
  "key24": "5KZyZ97N31qcgjCqKvZtJdf6LiK9UhrHpPd369UsQAmHbMKSNag1mAavw5fthkoB1bGeiTGDAyJbw8T2vd7T7Tes",
  "key25": "3F4Mq7pbAedcLkbq6cSFC2BAFBM3pHnvKAsciwRjABT2GrfzKM6y4ucRq2w3DFPXMzsx8BWnfYkjGLV6rUbfoLj7",
  "key26": "3WRNaLgW3uUGArzwaSLy1sofTGYDAQyVXxzS2A1GbRwHuwm7g9NiBC5wDiVftyDXvE7KYuby75wJXCQcVvSytHhN",
  "key27": "4GcWAHmiihDj5j81skZ6L9iYeUsUXnyZPEdWA2RG6vkRJ4z7jSp32wSjG3FZmbuQkD3ZNHY4FEtUajDQ8hUyVH8v",
  "key28": "5vpmaUEtJoLpTXELYzg7JXG81vkWVGgv6e2ydiEiQaZkCapYn1F4t2Auu1RNjwziHvKQyUcH71n8d9L6X5Z94XWP",
  "key29": "4DhXzWQgxhxk1WpP3RzLXUUWTWYZbZUjiGPX6v7kwLs5HVCkpkDRaTTS4LXSgH2VeT353pFeaDKRU8MwScR6UwQX",
  "key30": "3RyUWJSZ25nQSP4mDnFQB7etLBtsY7tRNaNXvWqAYVLVFKUpcjpoPm6Lh5TQwB459QxGu2esduBXdjYXtJyDWZpw",
  "key31": "5wWSyqhDNCRUS8aU7Q485x81HzC3rCiu7X8sFvro3Eq1RsEyJx9fXHboZ7qrE9xdnwek4CEjYT6dz7apGuPocfmo",
  "key32": "2s5J4i9BRZWAckYPz1MQDDrnbPJWemiFwFYuLt3MtDLwFugQMBruXHbJJcuSg5QP5PPbkxkzRH1A33TdWbKmx8P6"
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
