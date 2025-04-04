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
    "CXaqLtwETXVymWzaBdMcwqp5AbgxXGPsUt3vGeLbfLvRZwTgGdrNiJ51m6F5wvxaTgC8rf7Uz76PLwWHbh5ju2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J9k8v93o11MNdW2oLkgasFYjxHk189WhDMeeYgFirbGLZqVvEUxMTsVbChCEQzU9t1Wj6G7qPNARgL1ryXMxyjo",
  "key1": "4fh61NkAVEMUbPcSbuCN5NLDXQnKq7nXXEKTGCw8v35Rmj8D6LaWWqTyZCqf1hTL2AdDtxcu11dzTjcpP3LPZsVq",
  "key2": "zxwY1pe3snZfAv2Z5hk7mQdccbDLntvii7awzzNWMVeKKJew8vvWhWJAy8tW9y86ZMtiLfTqdMqEgcwsuVZX7Yb",
  "key3": "3uLrTFpmExjZN5gLCeudiUD7YyENyWfdM5VGeCLx2qD2zpysdje43sHERyegAsMe9GHobPYFkmF8wNzJRFRBBV12",
  "key4": "3hYifxdhHEAgXV9mTrbdrQKbEMgMEd6NYZokK8JdEJnvVrXYpM4AUF8F9bHM7fGFDxnszNzVwwPKHMDPf6yhLYdN",
  "key5": "5miXn1iJXVDxChrsGfJ9R83uSwCr5guXaq5btVUnfSF9VZ1VhsQZ8SzKWEozMckbbQgbg59WYVQP792WRGYRyUsC",
  "key6": "5LAZkZfBMSEt62a2Zr1wyYRrKagoYf77hYSucC2ZinPqdMetDN7HWSp9vv49c4xAzKZ17vRNSJzjgKSWRtWKwEc1",
  "key7": "4a3Jwt4eEm8Gfns36ysBThvCJYbXjsNmsLvYTnXzxxZDZJRNi62weSuttqwYcvehrDo4WBeRKncdABLGTUczYGAX",
  "key8": "Hc9vNjAgkQmXDNHfDoAkzusnwEBmGT9cqJn6p2ma6PXKpxNVRrEgsWNWeaunDwbxrv3QQZNwuqR89LYL58P2z42",
  "key9": "3AChqETqEACdQptitdHurz4hA2v67mCVui5mzx2bvJjra9kkGtuD2th177aqDxGfuffTR3qFeaTJrPnZXcdKzVh1",
  "key10": "4orS74Zb4n89NU11ZwKxL2xLRcPT5PVUc9bP4joBJJ6tCNnTDDrFBCLGKPUVCMXT7DcUPdvVg1eu2YjrcYiF5H6",
  "key11": "2NyVzsvFKP9n4QPUnAFt7AWEzJp7tUsjnFSwJCAPep4KP7j3WYPDsHHV6BMm6trdTWb3aXP8B7xLySUyegj8h8Wo",
  "key12": "4bJUbyesYNb6rJ5gBdwBWeBKuaooqheiEt6y435WdSJfCAi6gSXLYf6qTTqNne9mj6SDKin6HgorCuZgyT8dfxbJ",
  "key13": "5pyD2pknLAnWnyqpqzNxtGNyf8Ljc1CvubUNR3k4FG6dMpQQW3zQUsFUMF4GSBQdaARfhE5o8xPPN34pbGRSd5ex",
  "key14": "mQJCNU8AnpNtSRKUNYqf5UU1Aek5n9C1JyGTUBagUawk6APngSUeos7Ey6dHRGgRoGMXtVT1ThGexBRjxcfnshQ",
  "key15": "26ftUiac19VsswhnqPz9GyT7mN6hVmtEsNQH6g23u55c5yLdFu15mFjTCbkomne4iwQhvrmwPzTQKENeycxQVw3z",
  "key16": "4oiMQApxopNXQSY5riRHkNhs3r7B8ca49qX1CYSLDyLpwjFySvTw5aWq3yhS2SNyb9nhddFieLNfeVY4zzAnf87M",
  "key17": "46NiF5eoyTeGn4yEdNY5kda9xMEyYcJLv6rfmVkbpYxJn4gv6mR56xZK9bUVRoRJPJ2z17gK17T7B9pTZPzv58jA",
  "key18": "5rJSvTXk8FoQvNaPoBqUjdS1XF8feYBUmj8YCMMNhWUyh5kNwCn3QFnacsvFLgpA483jvWMHRW6VAtMMyG5f82df",
  "key19": "3tAmbTyQQ3hJGWSX1RGJfJxVehxiHYpxpVDiTpDreyG6n5wC4HUBer5pgwoxXMNbnhVdzFg2M8B2EQNK1u66ysWw",
  "key20": "4YGyTNgULRFk73o6XShGAihDMRSfSyeLiB7XicaYimLnXWufAm5Nmsc2cRQ535kSDuBAM4CnpQHA3yX1HjBw44ud",
  "key21": "3ZRWQ37JX9uu1DuRcWUVs5Kxb46weCFhorpoMhnWBxJh385yG4awggWc4iSs3WHaNmUaPdbdADuwzTLxRBZcpyjM",
  "key22": "2eEWXjDMCJCXkZiVvLVUgfroLXpFaThw6Do8WvVey3DBjh7qekU4N2MDZPYgqaZiE9i9SDRbZUTxLpVMrhCmoidg",
  "key23": "2SPt5j3Uc35B1RHFDhwHmFomQSsH3mJ4MqG6gfFQjMbtYe8PHtz6ZCcaWmCdmVewY6q2eQSZ4QZdM2ppokBw6e9x",
  "key24": "39X8ig6gntYx87P8veSYUuVkPJ9iaEgapQYbCtfgj4eowbm5iC8yXaDKUmKAtq5HM9BYJ6XLjieLxiouffEsQBx1",
  "key25": "EZqAzfMd8kmC3yPJgJDA7XZZx8DYiJg1bKcN7FNBFZSDZ3kDUjxg2mMBi1o3MTCFqvomvNjpWKtpxF3Pu2yVy4d",
  "key26": "5ZxbVoBZcwZzZmfbLr67z4LFhQqhqzHvfcQ27tHpc7yL5vn1tfksCtA1JaSdt3bF2o2XxUuTNTTSTBgAQMyWAvMB",
  "key27": "bFiAdCFbPrynFbjKpRFYzWyJ66Z5hnX5pkw3bZt1SgKhqvKAfxf5FZqjJDtyxvmuTusxVF9m8cbiz3cvr2UUriZ",
  "key28": "2kioUX9XkD9Qu1KqEkK8tdKWZdqRR5qRT1VhSViUAxqa7YSvDwpHNaqkRWpPL5Ga2sLJc3CDeMz2SLSDLoPNv5hh",
  "key29": "vSrJGHtt6EXWDEvPGoLJrGepBJVzh9SQPTLe7iBYtUbguVJTve52sTFr6GBU7kKyyFdxog2B1DSHNTgyYQ4zM5N",
  "key30": "4RXLoRjkQiiBPp8TDat6uEhwbJiK8fFq3ZyqTUzKsStHU5EZ6fM7iRVUUiVQ9SB8oDCG1sBY8CF4N9sn5JLnkvcm"
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
