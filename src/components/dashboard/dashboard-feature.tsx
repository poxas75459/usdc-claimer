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
    "41i5iBJ5nzoJi3359yeBkPJ9namRH3kBt4d4FyjRFgGCUqHLpH9KtSQsSKgEoss5h4h5wn5fYHq2Q7zkK3D3t25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1RPATdmWu8jiHnhFx5g4XuCXH5RXMgVbcGUBfJTMgM7E7Gv5nEf9iCunpNEvt55fjiC9QL8DxHDMdwPjFUNcf38",
  "key1": "4WjLUbjN8oCgJjWXiFhMns7XobvTimyho3yg3rSYyMMC1aCiY7p3PHEsXhggmCjGPPQ59tFmkfrM2LrNczTGj3uB",
  "key2": "YAEn3XeZ2ztrh8zsd4XAcKNGzXamovRQjY7Z69r1YEpUb4mcrMyhZLBQ5a8V1VdunznqZoQPryg2N9WqLygYthD",
  "key3": "SvECBhWHRNdPDdRhk5K8hj9goXpTtXwvwmiYMpRFMUWVZ6dkCPUqUhA5TeSUBqBg7gigZxFL1LQKXGBJ6K3jKTH",
  "key4": "ZvNNfvu74zF7Et6mXvxBwepPcvPqLP5XMB1dC5rx3ZMvvFZvFoRJZfDUHeFybz51WXP2aKGYsdsKoWWvUYjMEiL",
  "key5": "2adYDUY57sLUS3qotERJYQDbL5eqYDnrjQnZfwtb8oLvhpYBK6gxncUfd8MhVKq912NvHP82KNnjU9f4jjNxpyHx",
  "key6": "brjJuGHNDGw9uzCFSoXMd9bh27Lmzp1mDZbY1ihM3PZqYUDJE3DZhRJzDA3bTXgaJf2nmqWBzyzrDsUUHaB8zjM",
  "key7": "XSwNWCJhJjUutnhkgVSizqbLKRmxYmaLyCiCqfmMjbe5EPxf63ES7XnaL2hWmZ1QqepRiKMFUbGC78gpsigaDeR",
  "key8": "2999JzL8WRXKVvHagddBVpNnujwk9eXrtNUUEmpd1aMGc6kBbKJjxh8jK7AtL8xS9zZHJQwsrWPoohwzMasyYLzV",
  "key9": "5pSckUqZJrahyAAwU7oC9PTAttTtZAGzCC7m69eTJ3ExXzqfkAYj37ACQscR584NBRWj71r5UqSQMksjRa1Ljuaj",
  "key10": "236wxi7yiz5a7oFRx6hDjYxeQFYurPhQJKy3UJthocK9x1xcMiDmWq7Pv8q1G24cPtL5n1QgEDsJi8zA2jbTt7jD",
  "key11": "5rtbKKSfGQzK1FbrU4EpgmXV3kGJYki8FnMdNNFx9wAUemogomPTJwgZfbnpitUVbvUoiNerTZN911WXoBRkbMbC",
  "key12": "4ofFfNCecJzBHfifwXMKYRFRDc622tjvKtxFrGmKrV3uokTTttxNAaL8FfF3SmzVsgkuQkbKGrBu5zxFj4FCvQc5",
  "key13": "4J6Xt9ACfX1tZiLU35owtuXqnG3NZz3mcd8xGquMyA1EjJJngxTCQEcCWsTnbb5g2KhBsx5ZDa1AnTYoUWpti4d9",
  "key14": "FsDuJ5oCUngdnA7Jh6rNcgwyocJtDex5nWyLqy5iHMuyvYZvoF3kTWN8xVJ1UT4tmAUwr7T1GV5L1kmEjfbEVcb",
  "key15": "2e4kit6NMiUN88C9inp2NQKRWu2ss4ua3xcUio4PrY7kY4jiJLJi4Fk4SsMviSUhhv4Lb9RnDpderZJBASPcZjzH",
  "key16": "4nSgepJMLKzvBK9JAUVyuRVbNYSXokfmi4oCT9Nh8rzhxxPTmUsrN5WG7hHQJFVRp2jHo7dB84z2UA6ynxkXobKV",
  "key17": "3gCvooenKdZxGdTh1WU4U9Zj8A8ALwXfiGaAmhrBnqmzXk5jbyi2eFmR8TsXFvuau9LyuSK6rPzGve7EdvVYbxiy",
  "key18": "37xMu4yX6WkXt4XLHHAm1BoGa5BV4AXudc464VDVs7U85aQtGWYWzezyuxMjEchsZsAwS1yEnesPgtHuz18BDZAF",
  "key19": "59JoTRMG8e7bYLbFv6yKzwTAKnW8NxFdCrV6YNfCNDYWBVNvKYahjvsZPodaRinJUcgbCWtwPdBdPVv4njrqQV1V",
  "key20": "2dGvdDFAawQnQqdfGQxTgVLwPL54A5JsfxvgepogVTYfvR5AR1fNXDU72WonYnqpwQcvJy2EoRJAbx1JcVHPSA5t",
  "key21": "5R2fsxsKBrgbwqyg4TmCfX1x13oUgyuSYE5cXRJU7JqnieouYR7uVLYUx2wYT5njPfrSA9cVgbSfkqFtKp3N9y51",
  "key22": "4nUNp1mzEnJ9z3X9GEPCeF2hjVmbm8URAMb8w2WL4htxtFdyggk9GpmrCJVvJU5yicNXkzcR5iGdJmdjBWMVk1A3",
  "key23": "2MtJWxZjZxFfkRwf8p4AoDpRbDBgybxp2amxXLZ1PcoYcALgJ2uhiYGAY8aXiZtGRkydQNR8VizXwtHXR7MNYjVG",
  "key24": "3iUdzWkSfA5GZDYL441fpi3oRtdb8tC5UArYtQPeRWYf94yiuhowUt6S3A2ukg7wUEZZgWwFuDC4eqqoxbKebj2u",
  "key25": "4wJ3dFvVa24d9h3Lzgtu3vXtSziUk1dYw1UVXp4RjxSUYGpQTp9wmSwT4tArUHSwyTVnmhiaypc2JJ98mmzKKDeV"
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
