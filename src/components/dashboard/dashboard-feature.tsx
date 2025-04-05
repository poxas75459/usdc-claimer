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
    "4znxDm1ZuBpag5buQQubqz5zY2hQ782nSJzvKs65cGBBJeQRLcyjthSgWAsvukYJwUtNA1r7GzBXrYPZMtZNb1zp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SHiCaJFjZERWzzPgS2Q7pTU9R28v9JWgUgFF5sZpnmZriyTfY8aT2oV4DBnxtX7r15dpRDpuRZTbDkTtsmcv4ff",
  "key1": "VNVWT6FiTWbjsRymqWGiCB5mBpQCwazdVnGNuFRmYWjZvRJEE73U31ksFoTRzWY5QtaxNJJSy5GcD4ZaSfpKvdb",
  "key2": "5VtHNKZnBgga5kUZZja3yS5Hvmr3FPW9fLTJDVTD2VF2EqgQGtSB8C6BuNqhvpLuGDT1KNc15rNdBeLWJf2QdTdq",
  "key3": "4ttbVHZi4yMLqSqYS6n2GSMLBfZPnW2zgQfprzv2dS1y755b6nLFkdHnavHePYxDvquYH8hr6gLV65fbv9LBDqSL",
  "key4": "5cHXBpMqyJhFjwPfhDpgYcteyHu3t8t4Ayf8Keq7bRSt4C4m2eLZ6ZPRYdjahHPkFPjDT1kThiHZNZ4RMryGevBk",
  "key5": "3mkmFmjrjoHNw3fGiyakkNJwwv941T2azgNSNNEz1QmX3mjsyob4vbER4jEddue1hQPYhxK8iXDfqJrQjgGTxTy8",
  "key6": "5kB9oompbMi4S95GVR2cjRXG9J7yTPEgkdEMBG4qrtHcFUnigkTiGpJEZkf7tkmC1uF3isKWNLUHp9wMYckcBmHg",
  "key7": "nnw76154ZGhWXSkW3JoEukgAuH7kYyFiGYYq7CxptcX3sBk5TxdmzvxbgQ4C2CbssirBQKMn6cdAULti6pb9Cxp",
  "key8": "3LnUEhTZ5nBsikVNw1bS3ot17mqNzmEtmLJ3RvcdGPdx4EDqPpBMi5YPRV79zDQPygpt5MJ6yZXrVFxdAN3KMfP4",
  "key9": "2gZ9YAokmmzDGshj5i8UAk6Ch6LyFEmPuqT6H4hdf4XUBfDG5MW5qms2inAMFFfGAk8RgtNLCnP7tYYW2H6x6Yhu",
  "key10": "JMbD7JDcwjqUKW5XdnqNaXVaVXJkqyFi6JZRuadHC5EEHE8WjTqEWXqfKwPdtivJ9VdgoW7MoqabdHPxL4cvNTZ",
  "key11": "26inMNqjDa5hrbHTK4gDBXjU5qpt9622VM1P4BrsD3ZihuzpBZhNiME8HfuHMA2oUUH83xcwGFGpacq9ghy1GAh7",
  "key12": "5LxvReSx1RM1xcorw5WXt7gEUV9dtuA8SQSU5Kmmy9bAepFLbn9ECritFWg7cnKF13oykckc5Kcb9cG8NbjmXuUw",
  "key13": "FzaU2PVUCCWPAM2YMBbQnsTj9RC3vXMok9XZXBNa1rcVe62mPUB8oxquiGTxjkaDm4bdnXoH26BYqc8UZDCzdEM",
  "key14": "3BN2V9KEmh2fW9kcQv6Bsy2ZVEvFbiS2W2qge5koAXU9EqdVm37SM9M1UtKyhC8r7pa6P5gRxYqR4kdrBrCDqaWH",
  "key15": "3J44M5gD5AUs21c3HXBQv5PfY1KAhiNmAa6gCemdWZZcQqzaWSpkeHLm4FNvu6hAbkUWqaYzUeLsQUVQgNQQ8cQk",
  "key16": "67HdoX6LKVUi6FE427NC6mjWixbtsLxCEghVNvn1BL2b92u4xmAQaUuwguYXgeh3jQsacNMbv5ns3zLrewrxRh18",
  "key17": "27hVPgf65fZcm19tjtUF6d8pt4mStHoBLssw1VNTiMx8vYmTe4UGChyPeGyLeMk4UVsd35sRhJuwfipgZopZXbJr",
  "key18": "4i4AEFJrmVw1NKdJGLcukDjAx2NmbbMx3KygCBSx9wR2hVnXJuy5zPXTHGd9pQnUjJ7VcHjfwQuuy4ogEVTU7zNL",
  "key19": "5qhbfgD2jnKNDRD85JK12rPGz8NgoZ41gUxkXY24YgpPzrCMV5rugz4PmPJpBX1VM3PVbYsQEAu2XpVpZB5VyS8h",
  "key20": "5qKvNWSMyWrpe42LXfq6hmv6LKgXuXWEsh6ths9iu8MKhWeG8JPyMJddu7YxDnHYazMGTsQRaEDU563EEfisBjy5",
  "key21": "2j1LmQtASy6nyHTJ9m8YijH98XVHojqsW7iWMQkMfYNBxHX5EYUGqX7bqvfV5w4sJLNdapbLwhQPHQw7K4bP9Vnn",
  "key22": "3PYjRhLL3hRWm3DM44zFsbM1yLAVDDXLz4WNwfqhZMoLqJhbhFfNVT2XBL1xG1gRuqJzZ5Mcz9ZydhZirX8xSv7k",
  "key23": "5katmQaYYZMeuvAHp3oy15i6WLtjhsjBCP9vd4GSYN31nUEsHwAy4itpdxoBoZcBqTF53hmQiAU1yQWs9rh1eAij",
  "key24": "SCvdFFVeB6j7SwV1mKi6Ts5qqXx1hU4MfEGTuPEnMqMy2w8aiRy7wCtHyvCWjQyReCBbu6JvhZNYZRVAzgnDzko",
  "key25": "3C5kLya4yuzXtEeVvQ8f1mUTgQUZydKGdPZPd3LKqeFakvepHG7AuSLT2ys9FwMNiVcEZs2JC1o9cVnwhyQzSuon",
  "key26": "61CwLgidPYmTcerSCz1NLzJyUwY5qY2DQj5xhrddpjHYTgrcCPEFwUm1Yig8xM1c87RSqBXjT1rAfVdNqExh1nX2"
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
