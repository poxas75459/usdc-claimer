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
    "WY3Wn2CpN3gxXARbduw81TAxJQ5mMWiUWP5EFe1tuX5hr2Yws2aHjhqyjhKywFwaB4G8EV6PtiQ7tg6EPG7DmK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AMFu1Y9AwgEWdjoYU4kRe9nwnYZprG22Q4qFu1UxxqieBeCtY2y8A2joSWmuYhS1VVtS1dBZihwrmhHnaYReGbB",
  "key1": "5yWWEAzUgp8MmxGdaxBoK8ADQdB9D1ebDbRdtSECKb7HjUNPtG3HG82nXL4dJTdYf92p3pTbmtWqxHqTveCDcAZH",
  "key2": "uuz1cBC8PCJ7pJ96KdYskPtZm2VKQuw1tvSeEkHv3wGaTJn7kW8GNhM7i5u57d7Ev3vxsR4tPsYjCM3LZcc6auV",
  "key3": "2u14vJqeATP2DkmysRJjrYRMSRWt8tiRcV21HttKeqx9faWVRWkPys5MXXvkTk9oX4PDKvKGu258Vc76tr7DjGcg",
  "key4": "zBxyzFQ9XHaEx3Di1j8dpnwX4Ad6pvRuw2UyT3Nhdk7tZWUwiSC2su7iAeP6FLdXQ3hv2adNBVmn9xTPdViGu3C",
  "key5": "4BjjVkaeJEtXriUf6Qxz73foTZZ9RSsGYKGhM8zHvw4H7s6Db28kbG6uR19Sx4KwuLJeW8K4DE8DfpJffJy7R34L",
  "key6": "4YUnXfgyDcSwan1zEafFDKUonqqfXvVHyP3rRiS2aUkT3A4PxqLgxkSrn4TUXCt8ds4p96MJYaUqTXQU9kvkBKCH",
  "key7": "yfqreWaotSvrQ6qCHYQEkRtY8Eb3ZYP75KtiwraxYthvAgosQjB4PM3PESksRJr8N8EqgWqZzWgshZzZsXaYR9V",
  "key8": "QA8kP3TuUFciGts57Z8RnQpKB9tG5cSetkV9PKXxNM63d83AaSd91nwDkGmX6h67SzTgVYdcpdwrECxtfs9hMCC",
  "key9": "5WSE2MDB4mNJvbE5N3yQfKELihN8be8v5eTiAFnHiTNVW9wpZNtgkKzp6suBzEQajcPham7KPSf2VUHmmddu34yT",
  "key10": "AMur1eC5VSZza77XXmhkKxqwNWJuKAzXrSvbCpHhWK3XenfXcLUpewv3zBRFL6x8WfmUvCf5y7uFvvBf9h1bV3K",
  "key11": "3NfdBEPwKfx3KQ6TxwcAdgnBVihf3R9mUNQbmiE4QG1GhHXLikgDjBLcpb48rfJWyhkaM5D7DDZvkgmu98Sfb1m3",
  "key12": "2TTVgenzu8qkRpBBkPTVLnjPuZFy8jnq9JRc8SX6Cs9t6u9PMeWRKDYhkWHnVsbYRmBvQbZYxnT2KdjUwy1iDm6f",
  "key13": "uHQcazL2gYvAwYwqRxSeihsx5KonY53KcWKryszJPbC77ARakbi59Rh6s8NNwKvyYSMG1YFp8mRt4JxiTPdsyAN",
  "key14": "3wK4iyZ9Ly68ZdvUe4TqfD9UBPdrSn6SbKgv9eYg33kYKA6xRxteW5rhBi2Z8SNz7tssPE2rrCBcA9F5XdaCssBy",
  "key15": "3BfkTwuR5bsv1uZFwdJCgnmHAzpbNVEUFM3eAMct62dT1xRaArpRwU9g6yBBKJVjaCaKvGMh6krDywB27a1zxkQ1",
  "key16": "3AKQ7HhHbQnjjQDgLpz7oV4rUBHzSw82XeokDWHj6TG1CABrXCqWA8yURJG19yBKvquw9jY6QKvHKKcfG2Lc4U5L",
  "key17": "23F2ks8UV24aJmXvCBRyy87EaJyQjR6YqDGJi3q7o5iz71BTnSDVvXYGxvEXDWhLw9EQhksLtjuq5m8wrruGUCs5",
  "key18": "5wiTCdHjwC1GearW5JZ9s6YdZpk5pTbSFPUVLJTD4ozU7kYVxVAGCzgowJsEr6ar1QPjv3siSu1xtRKUyRaeYtYC",
  "key19": "2A6aHN5LzykbNa2jx5jm4SvYkXZYX7ir7HbqNCJFzHZyow96a5S8Sy62K5C7insEiqkeohjEKYUVtSCajdtXfDgm",
  "key20": "3sqRqUCH5Wz7Ud37htgHYpXN2qJkjyoZxpj6ixEhgFjQhD6gjmb2KJteXn9JuTKXJnaTjKazgagsiNeSnsKZKbuQ",
  "key21": "523udde6Dy6AHc5cY3PVzDD1j29U5VfHWNceX9XxHfxjxdweL6YNx7E3M6PgrQAzTUney3eTezKmqXrJygWHr2aj",
  "key22": "3XGALCfQcF4TsVtcVXHH4Q1QgMdUc3mjX3zSZFyxvKhNYnVaarY2wMHuyzHDmrxoSAs17VxJHXWJdcFjQtYtPzLm",
  "key23": "SLJvBTGX9qQxRRkb26DeYf8ebwwy7f3PB5g6iujQeTGzEhKyTPyq5uPc1eB17T4SchcbXmPnR8gr8uPYZLgBSDJ",
  "key24": "2uU5yDDmWtJe8zAwHwArFeRfSYFXwTLBQRD8y2w2eeTqRMebadqiTrGHzeTKBpQj1NnBEYoy3SotVN41E4QJ2M7A",
  "key25": "n338YprfwhzF2SUNn5GKmEed5PLDzzxHJkyhStgcouigqq3LAckE1m7XGcyp3DiSL1UV3ovfgxkQWqaQAYs2tMT",
  "key26": "3fEVKEPnsTyot1e6frZX4qc5iBwVNKrZNLoeiiw4jKd5tiT8svwJfLHEbu6UspJ2AYCP4ZUnLcizzcKnx24EpJKF",
  "key27": "5BanN259Ny6cQrWysymoCFNK6o4uR3teV2w2Z9CCxRrX28RtGkpbUHCwKnGyXBfERmmoEQfWjdnAZwTfVAMt1t7K",
  "key28": "2tPf7umTgDef2WG2WtH8Xh2nJBQKAo1Wo7iTVuDmm7M7RM61sy12qv6CAsbnRPuisvSMv2RNN5KawyG9KsgqeQkD",
  "key29": "fr2xQbRgq6KUWEkRd3YZnPEYMexZqfvomHFsAsJsM5NGCYRG3bjddAq4nNQkUhfUzFUemKitVq6XZPP9HhPqCVJ",
  "key30": "3V9JjWsFaSDosSB2hN6un6tw43cQ993VDRUFGqtm3M3AG79CkMdtFZEgb7XSqUW5tdH1PZpTTEcyLdgW1HgSyUHC",
  "key31": "QU61ctKKwSxVCzwGLeNd3VNpm3CVHS9hLyMAZMHUsuE5tKN2PFbimPE9Eq5tFdbRRmvBSw8MCZ9bBJqJVpNsVaM",
  "key32": "4Eq9rTRuo8nUvvRPK5WcyPDAyvmQABM9cgsdBHtE9nkDx583gHnRT48YhhD7TcXDHZzZXBZhKcVyAMckzfn1Xwmn",
  "key33": "3nmL2qfd3Qy97UA74FUeSRXLnegPgELm74jXLDQnqS2S2kt3owTnKGzg3ipHLa7D3A5qwNx6ZXV6CH45q5xh4qR",
  "key34": "51rjKhjPbxGysjvbfgf9zWs3SPZQWgbStNrJWJFXXECLfEdnwWwrDGmFxPUiMnC6RpryFdUvysDPTKkiJYJfm6Sb",
  "key35": "XQ2wTyu9ySfY3ALZBzBYcy9Y6szyPgoeUJbL27a5RhYTZTcJiLTBeqNLqQvKGiY4GrGUHJpL42iNcLdx9wZ8T23"
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
