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
    "2yit29gzaFk6pkVpMWK9ApfZhLvZRTBkSQqTY7gcgmnnY46kfwfBD45kJc3AHyJqUGUeQB9mWCtAA7RtJSHewf6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mtPsM2LRjDtdiBKDVpZo7NtZo29nh5HA2nsHCEmtLinwBWUagVCyjPwGGYYQPwLPdH6eatVgvKmxTHbrHSTEJnK",
  "key1": "432XcvgMa56tWScjYTwEFJehaqJf6cYnKRM9ZsNJU8BmTCMoT9tNJReakCMgqykwJba77dZykygq47dD7Y3KKgPN",
  "key2": "2ThheSJu74EgCACmChTCTHmGprT8z5R54iNxcYgcsUuUkKEKPbjSxGs3tDY1rseebun75bm9xibHqzpCJAzXBVTg",
  "key3": "5gHoP5fYRMCKdDQKgRVfo5yMGmzzxG336wdLSATSaeKJHQQcb1MY9TdaW6fTpaFHarwqB5E6iGrR8M3f6Z9B131s",
  "key4": "29AJ96D4cVzE2RAKzSL3828aPrjq3Wiis1NRQfoooq5KH2CXFqwxnT6sxFgz5ycb4CgTZVDP9KW54cw7rvapoCTT",
  "key5": "5k6kBxRrB9oiFRsksWZVdvAY3k5WPdqZCgiY7AYQ8hcwGD5r7bYKjjdA8E8Bh3BteKAnho6fYyrAqDmZgQwrQ8CX",
  "key6": "56SoYCQHJGx6MKGE7ACc16MQQq1KpePTNAYsZsGyNY7KoV1u4hsgskD96AxoHQ4fHS8nFt3vi2A8F9WmPFoy1ThW",
  "key7": "3RFszMWiyuz6a2eN37EzyGxTb7UrjbTeEq3YYQCfKs9vMJaFbobcLrs5AKMuqNXeqVmfeqXwnEJhGHrs91RoAu7C",
  "key8": "2G8qENEQpXm4CmyRLGkyRrTYrnBuyjwgNk8Pb85VXgLwKXEWNyregdZdJSYwXyuXwMXQK4hwPKvtCHMediCH6HTq",
  "key9": "3debDioCoHA1JE2K84qCmvfVU9ECEAtW4K8jJLgdj1F7sNUturYWVz8mNSVoDb5imsFvZfDUzc4PV47FmPzCf1xD",
  "key10": "3Jnu7hN2w1XB2G9etVzVt615AKP8QqqiCZKXVVjakkGas2mAg4a2FKKAz4xusQRysr65Pg82CJjF5vtiXEh6VG1b",
  "key11": "39H4CuB6nTGrpUi42kVj8vXECPHNgx4HpPemWmL5pVB5MPrX5u9AvJsNgdYkDsi4oiqQ2drMkQJ9stPAHXuDrRe9",
  "key12": "5U5jo5z9V55X2GWXkio3fZpwbxdVfzowHY25ZtLoEoAGxfVT5yDDrxZqWYgyP2GZ8KNYQr5xpp5Ko2NNaPqaEwZb",
  "key13": "3S28tzD2T33V7CzsnPnfdsbgvZZTH4Np1uPCzj1gHJnsQtVTkcQ9UFNtER8Np3jVTzDrrvEzK3AfXyrHjJctSdy6",
  "key14": "2gy3iUPYaCdFJ728YzVrz1jnzSUBE4H8pB2uHyaq6nmcCjFfMFDYmDsYgmqU1BALHtgy3Gw2uFSAh8uF69qhXw4S",
  "key15": "3Zp9dWCkaSR2UXNyZC2exyu443VnkMw1AtQsgVfTVusSK72JVYyVpyc6Ge5t8cP3wywgSc6qPVZe4qn3oUTjoTtr",
  "key16": "61pba2oSASKYXdZPqZjDiWmQZuUh849jXHzS8qaaDMJCkS3tgWykvcg7FVXU7q4F6eguPfZTJhqSRjhuRJ6asmbC",
  "key17": "4fewGT6xLocc4FwXsrV7r3jUKtmn9ytdj32WuScaFBpBM1dFfe9hSJdS1fYEARnRnxUDpckYLqhjJT5UZSANpnCT",
  "key18": "4DqGfgsrEmyWrjJ3xeHpVL7sbSE6P4oYqVdkNiiPMDWD9JfMS2QvWmFgpN9RoJFcMYJSLZQmtnTwk8DoKJxznr3G",
  "key19": "3fJ9Py8o7F1MCBfjJGPwq3Q1FX3zcsdMX4WBPdTqia5JpUEHBnPkCHbQmEcB8uDk7Gd4BAgmaHvtH8Aer7m2AJZy",
  "key20": "DdPcBeDrUHddLdcweNEvrnvE3HFVL7hMqPW3XgL1h4r7v2xqVBSaBSSZ4aC2p4XjcRPgfXiWEmsJ6YKhXavTAhv",
  "key21": "rGrcb5odajbGjUXys8sa5RZB92qPcA6q74GvNFsQ76kEdxEmBZZCAGopDM65JVnvj6ca5iSGfeXkhgSG5h2v7Jr",
  "key22": "3dPUdLHHP3Ezb7czTyZVZw5Qb6dXaKzzTjf5zFWcaDBRneVJ78ZMc9VgVg1Yx8RHHykQhz48Jz555fLRsRCSTUzt",
  "key23": "2icn8rGL7TdLafmrua5ZxokzytbfYU62Jg6ERQdmjn29sZT9vWxWzn1qxf7VrzUEV3uhsB6fRr7aWAu8J3js5gny",
  "key24": "546nzg6E6j4y9j8CtReeBxgpfoYssvXzpmxunPzdnzt8h9oxe4yj7sgdg9q5hCVYj1hUoNKgMzC3CCuSPGZK8QkZ",
  "key25": "5GG5KYgGpeNzkEufKMUsa7YGcgpP8steDBiZifKn5K5tzS6jcLGWm9TE5n9A2wnxZqdtcL1XG2tMjGwEGv4ChNDQ",
  "key26": "3MMWSZxCNnjfUhrUaiDXDH1B8XKUh5XHRJyJoXuvQu8tbiDj1NmYrwwkCvkux4D4ko2x2ErRQzu5LxKpQZzdGM1s",
  "key27": "2yCFgTebQPoNvMxSCrapjwjdyMWaxtFv3RAVTN6UEq6rUKD7HAnb38fqAR9wAjShgSCmwLnYMLmE6sAdxB6xdKFt",
  "key28": "2jdW6yhimVCJJAZB5tdLbymjD2JM2mPgMLNUmkD7p4j1SFWhwQdU2EPf9hQvC89wrqiG8ssrgikFrandPjEejGfU",
  "key29": "3WFHXw47Yxs9yM4JhU9om7KoDdZgL2zL1c6ZjHL82snvxmJRwoTUBvmL64fpLPEmoacWXbYiuDR8CsnxsLLpGG7X",
  "key30": "dF1wgCkg9F9dTod6RMix9WuVP6ichVFRYwZdHdTAKyTXi2Kd53MZqroU7v7vwTrM1R8xxaKRaGX1ih8kUw2wdpd",
  "key31": "5jjbVK23W8NZ8oqAwRgLgoiSmppJPKm5fd2DfeniFBvTSiH8DN5SZk2hZYKQcFguqMvR2uPojKcpaNjgaALfQPAo",
  "key32": "3fjndkvQeZiS3CTo2UbNMDupe41Ki3LjfU9pyiUizC7gN2xJFxPGC8gR8Legm96SrSvuLAKKrmbjBdeMbKy9n1E8",
  "key33": "3kmRpdeqFBwUE33mqUqMjjLVpCFC7iydWdYDu2afeqvcMLwN7wZGJYiR7y3DoD8T7znnjZsgku3AiHUeVfMZbmf5",
  "key34": "4i6ySEiv6A1t4Ts6vx4dr2ADmbe3KGYpGYLM1EB9jypZ4PPvYUENaCyJbXQKzghqd9mhqLDuy1nRwER1BNVEbCQC",
  "key35": "3mdasYKHvXBdodoHx1WyR19h2SbhCb7JBrrUEDCxW7WL5HkzuLVn3P9C9yicCp6Lg7SiC55biNnFj4TPKtsLJTXy",
  "key36": "2bBDrJ2fGybrF8Q7iSQYNwYiBa7JiHExL4uAVfDgwq1nnZC7sTinJfdWSDjfLQrzR3niHZSfnMaQ5ENfJ8Vy6ioz"
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
