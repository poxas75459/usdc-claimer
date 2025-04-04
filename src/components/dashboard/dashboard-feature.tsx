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
    "3NhbHogh7HVoNaNTx555nLAui2urkjW4j1gHTENKNLjNGzQXQnJWoDyuaqrjrTYEcgu8FHKe5oHepodUufmUQV38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UZRCf3orVrPmLZ7Ug7TxraJR4tmEuMVgG6SXquyQwu83PNdcX9vyFE3dq1BPZ9TFz7jUsunNyT2uSNx7J5rVyj4",
  "key1": "2vxoXsCVMYzkHbERZGMXTPwPM2YhDb4BiZBVj2SzNLEbd8gi95QfyPeZbVQnCypZapT6gN3xM4mqgLKHCQkX2qrS",
  "key2": "4QXGLHJnH88rVwUMkrZw2LEwinFhwbR4VK7wWNSLUpVespfyZHTqdnxdfvBLEiA8sYAbaNp9Wn5CkG5YRyyBf6yR",
  "key3": "PD2n6w14vY3hyFnEbid35Gom94TjJ87wsuvjX9vUEf1XEkANuKUZZobKU47MGv5VRuxrVNAbS7Nnvovk6oqKG2z",
  "key4": "3muWyaM3AiACNyofzzJgyfSL4PJ7MpQZeZrfGp7So4zJRcqc6mp1W7dfBFc1ntiGbEtgkh7zrtheMz6PF6JrepVe",
  "key5": "3SQMzEGdBWEhSY2Ay8kf4UyDFdyaWv1kfNFxAzy3NXqmMD4gFPqAAisLHQGa6MkkHvZhM7djNS3BdbLjrrMLUEGU",
  "key6": "2RY7pGPMLmLX5pAAisMbptPVVEL94Q4dymkngx1FCh8qjaBYSj3MMp8rMges8Ue3dxp8Y1H5ft5GYYy5suYhsnsy",
  "key7": "5PiWShxVkwvC2DXz9x8wVS8G7o56tdMDC8Dsd7nAaabWJnPStGHARvTb69eoaqyLPfuL14YosgZT5V8cpa46EEG",
  "key8": "5zaafrzx7pbUnRGjYW9LebNV6i6Y4MmoX8HMZMqFunT27Ufhc3ha6xWyAqaJ5uGxAmXyCcmYZVX37HwAoBtkCJ9z",
  "key9": "NPL8aoBmnsKpwRGsPHjNjFGuTscso6mKY9UY4Shr3iMz7mW9XWU9QMUE9LuvBmBbw8PQhSaGZdGtR4KnUSADRJw",
  "key10": "5WVwWu9wMP9ku5yMsvRwxoe32HZ1SUQNGzzGU5WCiNcjqoxHihJvcWXGDPyvg9jK6t5iC9d3RUpVLeRQr1D1c9oK",
  "key11": "WErXmgku6Wd56cey3MZCShELAT1L5Q5YGJgyNtKLVg98sUkJoRMkJhN68qaVuxoWprrELVBopUrmDaD6iZW4m3o",
  "key12": "5aoBU3gKecnADz4AWLhehAfmcCYbi9JmmRZTjw8LqVxVEcHj8m4tHUeHgL8w3rbEKEcmUmGdfobnXK1X67EhNNeR",
  "key13": "5Gxr5c9ZkZBB5SWtfFvjaUjtYdxGHXJE6HHQisqWXQfnL81Ku27Q3MvyQK4WztGfKfzBvZDWx8rYxq6RC6JdPkYc",
  "key14": "3KPxh2axB6xugKnHb4yXWv9n5VWkPB9SDgNGrbiiii9HW7h1cV149ae4AuMrrtTh7WyzK7NESZRu9N5uwE4QbW7c",
  "key15": "3f4fBXzDUT41tpgVZ5nvCyT4EFV7iwjwj4ght675aW2A2tJ9Ema1d6UfRYq24oc3hafHLxhjF5jFVv7Vyf27jpPK",
  "key16": "5PVXmMRtheJHoYk1UJeYNbU84EBpUL98zvDUF5F1wEjBLMGJAQi2cosL6DhiW7iujPxqNBAwWNGkSHnju4dwpNWz",
  "key17": "4Gah42zSuaaTX7iYYMGHcBmchKehYvzFQQ6UG6K4cjKMSxk6GzzWpgLrXPUazpGnWR5PwzKvj4F2aqVuEW2eemVi",
  "key18": "3xTz2qxX1bmit1hKmfwUCdX9vdwfm6AoJBj3hHgk4oMuUnoY9QMRr3itcB5rKKBTLvNJAfXTHTwkrMooVUaQk7qb",
  "key19": "2MD4J6NnGoiv3UDtHDkNg9JnUaJrxyuTgTnhMW8a7K7a89ewuvcsugnM5iJZtmu5h7Qrp5rccrfpCHJHykY6AwVF",
  "key20": "4mCjE7DDPqi1egXUcCJYB7W1gWMHZqLQMnNQ6GoaQZfBPf4ZiEDywbpBQEvbS8or9VzXNr5Ycr9s9bxQFiE5kcBY",
  "key21": "2nqJT9VhhdhuGXvNysiVwyPCsfUuhmPmJH6Mm3XdfUrGFa6MKrYyQorJ6xxZmk8KykD2GEoWD68zX6hHGNdAwQDN",
  "key22": "3VVDARM8EgszFdoRWrWtLXu9rdgfSxggtLbSecHCUdHYohqTHyC8W5ysYYfNjbu8YwDzUqZYsjwnMPhgwUkY7GRJ",
  "key23": "5HSAqYGDHXoQbVDVQcG6nryQ17RDuoRC1ZdPBB5ZReiHzbzT8wmVXcPefZxoeKCiKS8ithzgjnB6CHCfYxi8AqzH",
  "key24": "52vDoPyAWtE7ypL2Vk1LuExaDajNXXcijwZPDjxoZuorQATbh84VQHhYZv39N7MvHisMk92Ue6YuQLjUyMbezP4b",
  "key25": "2CArS2ewmSEe5cFu49kLezX63yxrkuc1LmQaEEnQPKMLbL7GThxc7YAhEYN6FvKTPnjms3yZnMc5sR7xM1o53fzv",
  "key26": "41pe4WLGvp8mjD32nbSvDi3zVGJkmghkchTdBw8i7sKUrDnaHbfXMSVdM1JgPpffQcAqpDZQ1G1zNzyzRyc1H7J6",
  "key27": "3NrVwe37SatC2RMT5eUrrXaRH2Hk3fKjM8rrTCqLXjqUAL4GZEsTgCQz1WeohAVntVnp7jGWXH3gcBGZ3VYkLCJn"
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
