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
    "54UaptyN6fqLMAZDv9pda8P5LPH3NMMHdCjBEvkYdL1AcpWBgRmhoagKLmjfzUi1DFmC4ENGdWHspVhQvcpvGnhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ueD27bqtUuuCL138hGJ6543jvqGJueXMTAXNkzxm5qzSJERHtuoxfV1uN7gvCUumZQpXHs8mK35oH2vktSMCC4z",
  "key1": "3oByKPtEiuuD8QLEvi9VgCePG938t1sFAes8Sq34kCpbH1cveXVQZfNW4LZE1ihTJGAo7vX9bhx1cwP7a9EuF7CW",
  "key2": "3BuAQnBkpm1GfVnMKdfyCc4FjsMfZtyDPqiwQq8GQ1bgPctDtmf7dHrWES3ivCdAa4PfiujZgSyLBG4digZrcov8",
  "key3": "3fJGFNsyQFrXe7VszXRzWcExvDjSb6uzUW1977qbuEfqAmjxk9s6LoHku98eEMys4Vz4PWFrzd6Y8gHenmqK3fUz",
  "key4": "2L8e5XwnA4RPLBng74ySMrHFAmALwDRdiQfJyNNWBf2neMBHop2NhmRc2mvD3gcF79Dsv1c8TpftrQbiuidWkeWm",
  "key5": "3yJET4R34SQppN8RM5ee2x69hKa6QesNHzigapETfFNVzVL4k56r2ZpM9C37zrhfGVSpBAAMk2D8UJbBdmpTHXsY",
  "key6": "5UZiqnJUwbF1c5XAdSyjZGW2oj2M72aMy8C31bXJzCUMNNhpMjQRhG6BYgV24zsJReBErJJtkEYXXrEzCKSBmxN1",
  "key7": "2n7nDm3qDzZaMiAPimsYkp2fpA3NPpkAysqjXLae5yNwHcVPZ7uQ4YNY77dH2RS68z2b7A2DsBw3VoadQyemzDAW",
  "key8": "5ivRWkFNZDKgt1TMQQFVMK5L4P5598RF7UgHySQQCk3iVbBV2Vs541GpTF44M8Gftr6t69VoYcsvQoEk9G2Ndvoo",
  "key9": "3RGgcrCVww5bUNXpEP1xBaBjMVaZCpUDx5j45xZz2mnDXW9nTCY6uQoDsHX1Hs6LRWAShYEPMbzRWvp5B5JgrnRK",
  "key10": "FLJxy99KbnkijLxTwXNchprQW3Kjq5iP3FB6BdvuJJBzLaVut7hYK8wNigox7dytZQzDqp7674nx7q4RZQEDeg4",
  "key11": "3PsTjS148GJ3oxvrpisv4L46Y7irnCj1fjMXZPgWzWFuw7kMhgpvnbWoRtb9vtbNWE2DWCWpaKPkisWYABCSdRhE",
  "key12": "4sjaQpmTfrGmEVP7hAreM7EJ1C8rpQqqGDie868bpDgR7b7RAGZD9ac6Hi5sU7haFbdzScbQPYMmhGDxzGZptTvU",
  "key13": "5nJAo6wbzpbrFQ3CbmE8rxqWVMzU5xikgmLvdPqwsKjjQeeBQUsR2wqJDGKb7XLRCL6XSTQf3wtaiJ4nAnRKUMcX",
  "key14": "2PUwoi3BXufBUgAMgMQZNPKRxsFpYJb2iZCDJczbACCjA7i6HL23JBDZir7CEnu6aKHorbuK6X47u4THvNQd9K94",
  "key15": "6aWykMJPFq1hniQ2PsPqz5fUB39VJkHrNz9o3HSXU3qcaZvAznEAs9hJYaHxPTtresUp1ho9Hb4by87ZvcvzH3A",
  "key16": "4GMVgbcBz5vuQx2tzRvRyTCBjuXCu6meusqfZL3fUyWci9k58TzUjKFdxYPtFYncKaAqsw4rJ5Q25ZnYqM6GxqwM",
  "key17": "3qcXZ7HZAvsC1k1Z2bdZbYJUBez6DsjuMKo1UecXymZwGy48KY6uGCfLAQBuuS26xpvut8cfVRT5VgKY9Hh22UxB",
  "key18": "SNy4cuRS4dZYP1KL1Zn797swdT5SPT6PN3CatARaxrxf9BcEmCa5s6gTxgqs9PwuyELaSW7zqfsg8es7RwY6dHt",
  "key19": "61oygE16yDiyeBXs5nSzW2zHcWgn4VJfa6gMU89MNGFp5HAnEdEkhENuUDADZJyAii1dw3mFyBVaGZM7iX5gF1ih",
  "key20": "56wwcRZHHzrV5bG3N7Khtjr1tSLg585nKYGjBcC5WSt7Nk8bPibA99E9rSD94TCBSwF7GYfQuUUML8ExV8Wppjpv",
  "key21": "2HWRG71Vz2BJKSXxJmcCpMZSdFoHZw9e29SiFhHmq3tps8L786VNpcaoVrfa9BGiAwh1KWiJtQGBzFMhFh5snz19",
  "key22": "3QbUxNe9ThHSPgf7Ti8r2so4yFAtBTvgYsvLN2dQWV9GqXsq5VC9VYxJrD8gPhNKJatZGDJoWYwdbppYH9L1VUZL",
  "key23": "5d2paCE1XUg3t37kNnZ2vmzVc96facbGJeDng8JiaNLKVsNhceKBJaT1FZ8K1A3KsJHP8U54XMXQfPdDm4jKKvx5",
  "key24": "2fg9RL4FcD3eSTnu2LWkGg3o1KxPtidV7KwmXXpWWQ8cfRjBsuWsP2MmBXWhsCjrTFgwEwWseus7EyGUibJzc3rq",
  "key25": "4kcgkB8o87163G8zkwAAvLSMfZvstDiHJFVKuFiNmFRcdV5Vj5Rs6Fh6sGVkLb6q3j6PP4CRZwu6Q54XL4YvNqJr",
  "key26": "3HhbzzHcncBqLdCJp1zjwqeDo6NPdfSeq86juM4mLa7uHocb41p9Uf5ZkEo1TA4e35WXz9CBHGZjifQvzDCX2zXQ",
  "key27": "3AJzpWJxTQ19uZwSnb2YhKtcZpP39XSQ4xqaeAX5uig8mPgzEe9h6kunA62W8ga2uQUREst1MiJHEMVDmr5uFm7L",
  "key28": "2JyFTYW18TfxW7PxaaTmHT2ZeS8A6G3qPk9B9Xu4oBepwz8rqbC5HzK2wAu2C5dcDt3xzv5zYdUVTEYa43CDgg1z",
  "key29": "2mFdjavp867EjEbgANJ7DBx2nm4w2kHYr9ixo3eJzc3RaBudjm6pHMWg3CtEd9N3sThjmKttV1yZjA7uf8JSKfqk",
  "key30": "2PsSeDwiqQkVxkKva7JGiKtbYqDCxTsuWeaaoK3Fm47gBQgmZPF6k5MfYuNBAsBy1fZJosAFtpCnXCTPfmwC81Cd",
  "key31": "5v2XcrYBtYMYRkKxkQvhjPRmfHbu5VxUtMBEbNEYUuCxyfEiFVuDFptp7ZybHDXv7Vdtg6w9xkYKuwmQVoLYZWsL",
  "key32": "2HGt7NUW13wUR7VbsU9DTrq3tbrGdGwTt8ruiWQkRqJedCK4ch1uPLivd14AiGyy3jTisgBg8F8VsfSWrsLUTUE6",
  "key33": "RgGQWNta4iN9dksWqbogNStoSmcWcnzKj8vnGyMtom2QKtFLBjLhqAZVfKV9hRx96CUio5fRAiLEWGwUsY3SRus",
  "key34": "og2EUk5kmWMkCGv2gYdRxkcFMyw46WjFqGwzTGwYwTqJ2bkBQEn52ZKVDRE1PAEBTzQKuRuG1ZAHCft7XdszLBy",
  "key35": "WiuBsuaCtceqgZXieDzBsqGhp41fELPeiZ7jenQdgqkxLvWADtjovxZnHAu3W2xLsxuksqou4okdKdze2otjSXE",
  "key36": "99oYkiSREDig5Qbphk7qdnrP8Wxeh34ED1tJsW7974bMFPgq3MTWXWGsCErvvqg1fScxwuHccJaeTwTA71bbRhA",
  "key37": "4JMsPV4VCZM15yHaQkoe55FEFPZxY8uzBu8n8kKU2rtSfQ5xowMSxpuCCXhTsd48BZRuE2xYD6K2rP7kHgmtNthE",
  "key38": "3Hx9RNXpjLYhAnpwtqWQA4MdTNMccCXEzPtaFdA3nAnhWbYGt7GTHzsz7P329GyHjYkVmTgujAGrFeSDSB4cqFTT",
  "key39": "qWZoSBqqdhzN2w4QuE3v13r2BWKsW7sV6PAiXKfDz5GuTMiM94XjJb42vrgTzxuZwKVAoExaVCB9wDKFvZ4AM6N"
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
