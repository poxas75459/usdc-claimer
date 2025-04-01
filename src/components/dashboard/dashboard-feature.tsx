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
    "4UEA5nX6M3d41QHKwtaViGkBzKDsqmHTvxHMqpht9DhEfjZDdNQgCrvkm6fRk7XZweneppcA6rPNnZ2VZzVkGxAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AA6Ay6TDMED1BsE5HLeUrDbPuZePs6iyTsh3u5myZKdcZjGhB1uqHQHG6MzrRD9b5YdwJJPFAPcHmcFJEsRwwyk",
  "key1": "VHRy8BYtNcWZUA7BdL4ekeMUwBCbEU9EBQ17M8KuBS2z6zTs1dKn8bjaPMFsd4qeinmV5Wfp1dNjQBrzSocVUbV",
  "key2": "3zDGBcQvvFya7TXh9TjxFX1px7nnusU7JDi5tanEY7W4LVSWbg8PedKo1YZLomAveTQN3buLgGQAiJocwemniNaR",
  "key3": "24pRNvKdPGZry2em9xELxvMJLJhY9FDeQnznGFVZN7gc1S6uPTht39kYzjeNYJpinfiwrQRbyRhZsQqGEFCjrnA3",
  "key4": "3CjT4aWcQYkDUiQkfuu4bF2e2s4ckz9UkAqACxhvq4cxDce9VwfzVa1imXwdZKovp6rrFR5yQCzD7cEhDNKdggWV",
  "key5": "4AmhT9PmxtP9H7keWjNxMTZZR3qCRzkfXpLo9Nmig16wKb3EyFJDCHPTdJqPYTpnnrbaHq7gvc2BwecQu5GNgZho",
  "key6": "2ouQ14XV3jXYaM6E3KEHXL9KGK9sSQ53WiTPrHF1cc7sb6FcubJYJcgH3FuZMPepJ6pWGgAUR5QS9VJcM1tvGiUP",
  "key7": "2bExtVMicjcsok7kskfWSju59TMSbwW5Z5jmirEEMecXZ96tR8SnNxpx1JePKjDSLyEGoVLY6t52C3w7kb9MayHs",
  "key8": "5sBR6rrQqTBBm5fb5GdaWedQdS4LJpL2QerhRgHuRM1UY8gQdhpXf1dSo5gveJyUP8DcCHmaU4ZgAtjn5zMkrsc9",
  "key9": "2DoYdnRG3NCQrX25AXkDPJjt8mTvE4gRRgF5cHxp9LXrrnTeYiD6X4y9TmYixqRidz1NivxhWVKTJCGJmwCb3bFG",
  "key10": "Ho7KqJzyLPUnk2yuBu5Ezc5nF2RnuVuvbpoLxPk1Drkf7qMh6WHLvfMYP1eZ3JrRj3u4xtBxXFRSUsFSoaRGLZu",
  "key11": "4K5gVZUo74D1oonewYVe1fHGZgtEDxLNpaJ9gRXZk26dWCt4BS3FtRCmdxcpCAwJFoetfcvWnYerrr8QgGWweMPf",
  "key12": "7A4ah7CezPa2zUm9QJxkLMyQYeVPQgFE1R4qjEcUy6Hg6djykQatgbijLbMh7mi7t2vc2bmc39Wecaa6nGovwEi",
  "key13": "2o84DKmkyt8ynApDEuyihBK1BZMbcYX7kJ77h4DLAD6qBJMUZNgB4uQPZbLhY4NpdY6WpnoBgqPvJvH9Ax4jXqWT",
  "key14": "5UwvJqk8DZpQGG11J2ZZFPxaDyvUnEHPAMCWX5YnUPzkegRtdiTAB8uPUAynyAeV28DAfhSnRbr2Nog9GjJaX4M7",
  "key15": "4HYN1YQpkfWm9sp1HsiK711bAQYyQgwvHBQe6sBRKd4jtNncK8dpNFgF4rNev7dEPz4yXtEhkYbBhjvdu7VrVYGG",
  "key16": "WtCfAxdbpeZqos7DSb7Qk39zFVqAmy2JB2jsVdXQs3dj8sBpfyG66sXwZzY7wTTbGDLuX9zknRBG7C66bNeCcw1",
  "key17": "3uERg1bUysiKeoNHrFxKkBSqUZyWk5oVhqwoHSEv6b23DUxgjNzEajPek1KDVhQ4ePYxpjCg4vX2ySM58kxM3i6w",
  "key18": "4FeMjwWxEA9a7EKWJpStDTPJRvLbDrjwkdr6cKgWrpXt4xFbnRAzNNgtySEU3sJRx41ccXReHQ7CgsNj6Hz633XE",
  "key19": "2ukk6hSg6h3ePLuzSwxv1GxXjS93goDgntTRdKSyNhz7deEjGkxRKpUBWAPBJHdQWvBkPfR1jjU55DUX3RhUx2J6",
  "key20": "2x69mEpv4Y7zXSFXAA2E3gvpW5LWFKupNAbfmom6u4wcYNhXKB43htUGKiBvNAUQfWfd4GuEjez3CqSPXVEuS9Cm",
  "key21": "CGEppHTssLpkRguBv1gyBMPwnTykN5iiYsbmUoJtfcmzNABzPHcSRaZygBq8Hr42QvCApDRU5xqNdiXPs92CDst",
  "key22": "3e1NrPAuy89JeTQUAaMNArPHCFGEm42ppvGxNaKejuLAWL51HVhSweGhrgBPRcdW1c4K78qScvRYPdNDBFsPWSY4",
  "key23": "4KTZqdsTZX3GkbHx1vSdeTP5BbKRaesNTYd7PxEPnmHmZnccQniwqEgW8TCzBEydKCT4Dj6CUF9XigTXApi6zeXT",
  "key24": "Foha7psiHnQ6XjaPF6PoNTWduE4znZ4s7aLWf9HrEu8r48f5qAomNdzsjqYJpEE8aTjLgbbjCrqxp6ZRQfvSBvj",
  "key25": "FydZkHW6VoYJQz5pfBsRiyc7jU7DN4fSJx9a7p2hN8aF3gpBrkHswyVhznKjDddGNR3kd37kYWZ8vAN3D543qzc",
  "key26": "5RHuZ9xsawoshfEci3eWN5nvngNZ1UogUi1NiGsRks5kPhQbApzyUqGvzrTtt9rHu9WMUP7dPGBnpctqCqNVSpwQ",
  "key27": "3KouJo2viber7cYZ6yfZcgM1fz5kuuk9qE8cMSs8DPybSFoYCoFoqgZFcuVJkbXsX6JDdFYDzYoWrpNnhQ8eKt6a",
  "key28": "4mLpCSLoNH2Diphp4n9ea6EuQhjypw72KhBw83ntxfkG6NhY1xwpjkkrqxuNvM5Fma27YB8dKvqkt4MsQq3yQWqn",
  "key29": "2qaxQVrV5V4BSJ5TakoNuodLAXnD6J7Dfj36ZYGxdj7GiFy5KoaPJ9cUYPyd4TFgREKcK1d16wv46Gaxdgwqn4L7",
  "key30": "2AWTJfrnNKfopgoBGVmVYze7qkZyqjdS7AVkFsfcJppjaKFHz5FyFGRddyjhWcbDLyje1tKank9aDBUvf7tVLbdH",
  "key31": "4hYtRjryiL16eaEKyipxZ2UQAMAowHsr33dQxdEdEHJYZEdhWsARF6RDkU6jLbEG84Ttg53TLT7xiPQv38xbQx1h",
  "key32": "5gaG8uVXAX14zwnLgEq5y2t1cjFs7Kw46SjgcjuR3P8UeQnL8R8H82dW6D84gpqBFTA3te3zBYFxgLSLUyDsw1u2",
  "key33": "3RK9ppWsWY48wHFfoFCxvit4RiuUtS6XgN4dQ2EdWJfKyaNDf43nzyLTH2JozhLvxBT1MM2F5rGdnGDQDY6EmZZA"
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
