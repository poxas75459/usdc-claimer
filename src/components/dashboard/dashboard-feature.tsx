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
    "3wQbF3SW6MDXrz7Piy1pmMbUPeHWYQakvhkhT1SGAf3z9QWUaE8XQRnXSnws2C8eqS5JyAgsUpxRXLTrDocBvSpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52qJLcgDr86goXpV4wnL8m86dC8FMoCLa2rn1dGQWMWYHvHVXUVxM7BHyjPvkgQ9BwiCcy8WKn9wS6UnTK3WNBZM",
  "key1": "4cahjGs2AX5UW1VPVEx8Fw87KU4Jtch6R18cGqi7KvAv4Q7PYcSaieTJMDhpmTo2EShjKkBdv615A6QgusLrETWU",
  "key2": "5vmFL2ZApiiv8UjTxxvufhwMvrdj5XsyEzYWgRFKeVrjgGKdvkKBVt2gwGCPN93uU1egjiHMZtYcxxnE58doyeQ1",
  "key3": "2Xd2SAfe6xpoJsT7XhKTWhgdL21dncYX8vDdFsLdpWmkyi7EvNwhUpGMV2oix3mnQyYfdehrSFt7Tzjdhk8M4qkE",
  "key4": "5mzLW1JuiBEJ9vjC3rAjT7xLY4Ush2FhkGr7g4fCYeZoY1Pn1Yfv4YDd1vnsmhC3mspG5PiTA4YGNRoeF284q3Ct",
  "key5": "24EjQneGEfThjAS1tWqG5v8qQNwstGALJjusP1NiToJdZ6fVPZvNDHLLzsexsDYJ4511FTWtbSA4baKy7UvCFfCj",
  "key6": "3SokURrdj5EzygeqzNp4wUAWF8R8PNXiHdxEgzxpGk284cQ55smFPkdRYTrCJV8jUYrkrz7d9vHJUdh681zNrRkf",
  "key7": "bUWHHSeCivPqt6txDSBPH2STfveTCyV6J6y6BiFSH6jeWRi4zRpTWSrX2Wcq2yoGTPE7kn6WRJh9z2SbFkbv5Pz",
  "key8": "Ewdtk89XCLDAY7xWuKpgQkuT4xTVJfLRmzgePmbvYzzp8fNN7ucsvUzUz1x8gbsTQCNhJD6pMmxbfbTejqzthp6",
  "key9": "4Rmp4qZNagTA3Ch7RBu8uduqcBkEJU4YgCHud3zhc9aPVmfFGHmpqUauqXyykNXu8FWpf8HVrpzuwco9wpX5vYfz",
  "key10": "pLuqTTfytxEq9dtoRPfDf8WS9rLR5kcQxxJxDy4zuPmGG4FfoGRwJZKZSMtgShLjGqLvZ3zW8F9BjX2a8czwxiL",
  "key11": "4Hu3xxdFo6QygeDrRXNyNqC6bPh1DhKWPuCsYhrX4WXT86Qknxn6eTqHmCfYuGdTVXbykdpHk9eGwXbZ6mL6Bn4a",
  "key12": "YUtMcah5xnNYZ67Sr8dD6Mc4qnaQvBpLS4bWXaAyvpAG2cDumw6HW48nsXhvfjkNAetQS9489Fc3DqTVErjyumy",
  "key13": "18CugkAyBxnj43tTunvT3DqvtunKqPKfP9ukAK2nT23PQT3fxVyPWQ8EmiypMvCbC9R7p3XuNaDRWozP6zmNLWL",
  "key14": "4X6QjBERXrYF2RW4CEvEiaN915WLMeW7cGGHL8VWmVLnxeMkQQPQmeyPFV9DrygWED92AEwM9oM5BE3AtcuwWckB",
  "key15": "2YeDUW9RoimBoiWD68UZjdRuS6gjHbnvW6LJCdkNHVuioH8Rx1XBTbUueVEE9LvqSCAwe1KcEEWoXAC8jaEVsY56",
  "key16": "2NWf2vgLfQBEj3knKLoTCLEbNRSgUbDaQmZ9sEjTNthpNYGPW1dRVaDQG2nor2oQpg7ydRc3o4mnBksJhp8gadHV",
  "key17": "5JMFxhRkroLsh7tNqnPEvs9qRPm31LKxna8Ti5UQMRfdkGqj648SQFYUtLeBe3A21mCmCZcNk4gBdNXpKzJCKpo9",
  "key18": "5mvtSQYXxKmYvf3YbgeRRWGgHqYpUZ6ZXx2TCRYzunDod9rse9ccL1DG9XyZCJmBYYREoTmJwHfqw8io8HNCaghf",
  "key19": "42coU3DmhQCMm9zY2P6e3Kavp9GgPKboBCdxocfCHp8GQLWcqTrPNYXn38AxQaMeBU7Do3Qh1avHEh6PxATcUigc",
  "key20": "ecGLzqeTMpAUPhXsBaqo9YW7KUzYprXKgF6Mg3oF9KgWNyaqeaC6aZGpXzGpntkv4YfdL7u8M9VWVWUYJQejFmD",
  "key21": "3YGEnXvZEQF3XMmbUGrMGToVSWEV5kH4faWXVLztJM6ZNsnoYFfu1VHvEp2W6efM8WQqWPeHzpwZFBDKkUS2gwf1",
  "key22": "5jukwb6BiXLEBRpmhXwj3BtQUxW3Bt7JF6LhfEeYuFa7Gfdr93SUesckCaUTYdqRF7AFPXh8oA517GPqbHFbhNgk",
  "key23": "2MwQrGfXzpqpxmnVLfW8ZhyfM4iTeoADyC5XN1LdTrEVsVKzp3BcLv9SyLn2NSRfwTayjzmEC3pXUz9Y1WkeFv5z",
  "key24": "36KAcDv1TyTePUYKXLSSpkqSWYB5C1xyo2jNMY3fLnk9Mrx1GQy8yiuwUdxEdD75MiMxBPYcVPvGh4f9onmKrr72",
  "key25": "3Y4oLGi2zgfnZfXsw9odDbxagBwyismLAYaT1UhKxWzW2ERV5CvmYVfCgXnuXSWeXRqnALdunyKzu4T5EgeyzGTD",
  "key26": "5ufMe61Zwy29y3wa6cCG6G9FCJW9VqteZc8frY7LMiwkwmugBD9Y87rHrLXDVLnEe5AecbWmgdKtEdtpo6pU521H",
  "key27": "Cxs3U1XrpRMj6L3SRDyGc995gXzCmQMVbf59mjBgiEbXGktCW1Df61pMognDhHf33Spq4duLBB6ZUDpCn8TAEuS",
  "key28": "2TY4HbXDEZJ7N9uhFyvcrjRTEtEW7PZ8Fk7FKVkHuHraoYnxN5c1oe6dkJ5D9uYWDytqusAecfDC25gHTr7xfE3W",
  "key29": "3DnLBXZChuU3xmYALxLrQvudkaucEP3puCoVJU3sGQDE7LdTsnVeND8BMuFbaegh5rGBy8YpGWuksXoTuoUceHVF",
  "key30": "2LAyKCkWxfTmutVeNX1pTGFAgdJpCfsw3BXKaMSbY9FAcoanYvktqRpDBVz4u3kqd2Hbdf8SjT6h5yjaiR5DnzbE",
  "key31": "6KQGXGFXZ3sfJnj6rWYXtHJCDb9KZ2R8pS8vtzrPm7sJt3uq7ABdLzRSqZkH1G7ByfJMGKkouhVpHcVBz3VKkbY",
  "key32": "2UGcUYDDxnd2FeYVngZMGxgs6T6SWSkVe2jeMw7uCWKLd5vfZEYyKcMiDDTLm6v2LmzC9eSyY6pFTkkkhEA6N9Xf",
  "key33": "iN4YLyZGSRBcj1juUGS7abU4NxqYm6L6G3xQq6iwkR2yzaqbiFD85FU29VBaiWDNtNwsAUmiU3ukG8vTM1QAJz3",
  "key34": "5JKZ5HA1gvxnB5wQ5JEkmb748hQZuwoNJAcr3D9LRSWgyxRf2XiAK37YDeAFtRPpMA6dtfv3ChLDCAyAovv3YyiL",
  "key35": "3eC7KWf5oXdzL635BGniijoXx9TAH8m86RRQu4xnjwG5b5D2acjStCZarbYAEUwhJ5uHn87UTaUmk9vh5aJcrSQj",
  "key36": "3qYJo3CFyCmKR54QoQF6yBgJGWcFzZk6V1FfsajJZ5stczRqtoaWgFzAsMowoW3Pzo6qdsMcYn62YQnT2xaSCCsf",
  "key37": "vjdWL5hD9U1hX5CqPFYdMFrgRhQctGQAUfXEwK8sruGo2sjnuScPUpMg3kyWSXV1gg1J5jM4NT87xDuGoW2Zxah",
  "key38": "2wigC9qr5r84joaydqVM8TqjRtm8jKLNyd635ZQ3hfVCSDrmKsRnN7MWSt5VBNnDLAQPCxaKfJtMcXvzi2KSdgqA",
  "key39": "2He8xhb8PLbAujEgcXA2jQMEL3NaSxW6ocZLauN97AcY7C4P17g9SMhVELEwdCdZx8QPgRCiC9pRVTU4UK4SMHHu",
  "key40": "3KJCUYbwxnzdMyq7DPgJBucR8N7EjcCXqg4UJvmy6JFErVdqyLipP3QE6x591by6VHeGLD57xpaLuzucGAEVj55Q",
  "key41": "5ETCvo7CyLu3315fkeSXgigHgm1vLhsZue2HfDWGrBeUmy8kmSJ4bkwuF1zPTDVpFzbdK3t2F7yWjkQBKMSu5JY6",
  "key42": "kzSZYmbesBoQd9YqxPQ3xKKvFnC4atWidm263sJ8rFb9TmZnso26M9bR9UC24icvAGvF3R2pRvgb6HwpWwZ8UN5",
  "key43": "3DeZk1Foky7ACqJb9o4MYh254jmKfV1YsFYK7VPKNsvTYd2CviJQeG2uGRWzKQ6HLJPXnzMor13QEntaYr12dm2i",
  "key44": "2tSYzTQWX9bheFFX3zRVU4DjLF5VTzir9tZahEmXawz9BLcjD7rq8Vh5HYjPLtrqKM5tD6nANzFQ4pJ4xi8D3jF9",
  "key45": "1UQa6zfmf1HjvTnEehTr9uA7jTNnh64vjqA6yVeC1WuCxa3RocpjSYkbF6cuU18FfkKgWDrQyPSyPYjmweMKB5p",
  "key46": "3V3CVQ9YLZYB7RrpN9A83phsvzDSHmqtbf2pkv1bVAHGdGifUfZk92grPk4k8BiYAtUtsMXaAKvtjgcpKxfsnEkd",
  "key47": "3BQfvrEJbjx8T496SGzvy4L3rnyUUvbB6aZaGzJs5gMrKVuLsf42T4uruqT4u1pXT6RxjNtBy5CaHvyexqnPdKb5"
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
