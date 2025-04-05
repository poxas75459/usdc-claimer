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
    "GBwrFYCfmCVDNzv5f1TVRpVNRmncctbyXt7zBsSGKgC8nxLGSMgfyYcb2XDibuYh3TvygkW5u7RcwMhQNhFNYnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HrEDvVUUyJAJh9S9Vu9JppT82ukgABt7QyU6dt1VKE1U8HFN9CrVSMm8Hm1SpvRvV76mVUXeYscLtQHJHdNm19P",
  "key1": "44TmsvoLm4bh9voadGr5QYx4dCZPqXXMovpcjyoLJbc9XijrsdAu58kuZLDtJ3mBZsfm8LWfZkG4VRJryBMS7Z7B",
  "key2": "4Do5ZsPTQoGpp6f3V3oS6bibZwiFxHTwacDPVXuQWN2mdxJUvYSafBz4WwS5pKMJHuAXMagTQmHWnPEqN4dNWMPU",
  "key3": "47NYKD3628eLzLfcabJJgQLQsYuYxmD3guzyMtbC6TbEmBuAbXykuU9wtEfBA6A4CEYo12Lup9QsgFn81qm75Mxj",
  "key4": "4EzU2ZmNc7Gf5Ew4gUy9SahcRj9SqPi7CnARmkZafGZfXAw4UNPJmPbtpZaRzPqTWBkLmCWcmHVQeWPNFWb8e3KU",
  "key5": "16Gve2JAqS3pAcLVbv1cmo7n62vdNpkzp7uAbEWTssboheDCYnzg4ovf5WmkfKSrV1bQ7kBt25SSbkMJJ5JB15P",
  "key6": "5yWdhB4aFgwtNnkn3fCQyVBu3zamrXWSryA8LPanNdLn5uWCuGMHgFhs8ahPzA2sXVyGQHMWwTG3kGJwLXFxrykh",
  "key7": "5bQYonPZQ4VVR2GG423Q4RfczG6G76cJ4KnztXfQzfZMop56Xq4saFAV4pBnhDy47NPz3jrD4JeRQFYQh3pWsd8N",
  "key8": "5i5dCZ7wvFzMs512p4cwGCy3JaFfgZ4G4LsPPY4CfEKUJWV4UdzJfWnr9ga3W32fQZEuVTY3y7i3GUaeMKvyZxsi",
  "key9": "3zcA5xouaPNLRQK3HrrVEX1anZNpMkpbJdUv9phzCe6N94igE753Bgxc3UTfGoficSZpgSmueLCBoJ3cvDceRL9G",
  "key10": "5nFsGEChhG7haU9eQuYsT12LT4oJqN3TbFrNxt5F3Lz8xu4QdJR4i3KM7sFPjos4k5yRcC1xqq7waxy1XfbwURw8",
  "key11": "5F6V1ZZFsrqjcEE2HuayifN8FCjz2s3e53RKfCihVNaRUkDeZAdasMXw9geSzJxs44TjnaZmJ2TSQmdZZ6gB6tTU",
  "key12": "4RBwLX6HVA2EDM3ExmRSPituCk6q9xEVwVQ99Mbah1DH3v1vX1Gv4RxN9KfEVGUN2BLkrXUwbVbpQbjgd3KffsY5",
  "key13": "5cAy4gFLefjcBbMvbyrUjRwKu2F1W76eC7FQrbdLStZzX2BTveoKZ6DVs1ouFsLSvupCbNUoG9Mrqx1sbsnCqJwy",
  "key14": "2V6kku2QorEuAc2FxRXXn1WZvP1A5oagzsteEMm9QsGUVxePAKDAnqfEyGE2EWnVsCsvr1pN1Rdav3HxrczX7txA",
  "key15": "57js2pTb6akiTWtp8HsZS8xCzHYdhW5bDt8Y6Qa7PyyQ5jKAWKYRrNowcBFCbGYxDJJnwXaPaxMfBUr9Y7JCS2yJ",
  "key16": "2VgD33wcAf1AX4gX5ZPipeLeyiV1xNLRG1BwegeFPD75BUCAvEvAVaFeoGE4jf66kNxDu11A29xDm5rjYc1mxa9V",
  "key17": "AkJuCZqYfCu22P3uU6gmfGWaKR2JnRL5iaS5wyHJyc9M41SshGSWqWH6NMjxv5fy51BEayghh4gbjMUEp5C5W9P",
  "key18": "5D43ZDkUEnxYBzdLFoAzcYTT1eqeAxTLtHBQTRGAaSWjnbL8c8sNHumFdEAe9E75An57QHsywUB5jh1HEGmgrtPX",
  "key19": "5LR18Bzi8DKxdstoGcmiXKD4zuZc5EXTMN8XnJkETM1fdnqJdhvhcv6x7AY4PrWmYYYRzphB1Lf9a4nzD1kvrXaY",
  "key20": "9SjjRTcZEFTZEeWGJnJtys3hByTpdRK11gpb12S7ZJ8rmpHzXMh7592J8h46ZSqG3XMfyprghuV3FPbUGM4ViEx",
  "key21": "vre4xPyxv39XBu4o2SyN7scyuF5dUN6cjz1zSfwaUuVFFHdMxTxvmdDB5aF2WsUZRwsxzUUfM6zUSVkFm7tg5Hz",
  "key22": "2ESDsyrTP4H1SCn8v4FWrWmSsL1s5Y6Nu9GZE4iUA9iDcxFtnJ7wbKDhpm3mQwZ6vYQa5tDNQdh5gTDGwV5ye4fD",
  "key23": "3uxE5viPvUpyKv8FVFge19s5Dp6Teur1ZQBGoRDfW9sgjtmFEPLkkuEE4M2TPctSUCfrDbfnrGJ5w5Ruu3pG2m67",
  "key24": "2ftk21A1PkKqRKTtjrt3hgh8xUQtJyPYzjFgB6XEWn7hwi8XYoXhd7aWC1Auh8QaWecUjqntz9y2L6rqmk1bESsy",
  "key25": "2Cz6o2oFjckgrcxpkzJTnvzyut2Q7X14WgNeVXNsRvUZrDJXrxyZ5qfVyZiCBpb9ipEK1Wej3XzxutNfVnYwv2d9",
  "key26": "5mrrS9yXQho9PC6qTBoRc378sQKq3v8phzM5sq7reNEoAT2cgBaLBq5LoDwVqL47QHmSoAxdYoyNF8y77hkcM3NY",
  "key27": "3ENXZM3sLMJQxFhM2cpVn8bFhcR2JAgeXRSH88PgAQJdS86tnjVZNdeKms7uoDGKwZhKYR3gJnmWQqpfZSC5d8yZ",
  "key28": "5EZCwrWtAWDxycmU4eMi6NkffPGaqby4hLjZDw4AY4hMyHY95QMrE4ATPT2RRfVi5dTTLkvxNi9nRvmuXDwKjv8Z",
  "key29": "4iynx13msg7xCEnx8WoUkaKHhMhUeo9LN5bUGxWotBLqe4pD1uD4BEH4iAsHmdhA6wA2tYvw8UXcNg73qsCKFjA1",
  "key30": "2QLiyDmdZtMZe3t9L9jt3a4na2Vw438uiuJ2A8tUziBTZPcqAQ897MmSJJu59AbGPz92Q6GNDSxD1wDRXTjoGD5S",
  "key31": "4KQFoktrnPmJWeafvUzyM8rbGRbbPJmseapWpwbKxN9CtE7n9yF5DaXZkjm2HP1CjMbAszj3Jc4eSdRBUME5MqK6",
  "key32": "2xRxXeVBYLAbVkbinfUghv4pX8HE5nMf9JZs3ogj5GtNRQCcqyJaoR7wDumqi4RLgWGNxESMmA25BChY88sa6mJq",
  "key33": "5ZgCMqDbfFN5ZRejK2RZBR46ubv2k9SFW64wRKquPVNo4BuozQnFqQBYwPecNjdKY9qUhkGEV9tEy9e6Hf7HLNTz",
  "key34": "5jtiAHs2rLXWmdiquJxgNhpkjEwmRaNzjRmADf9gvVULbCTHb27YbA4VUCDkvz4RnEZuq9VeWf22ZKmnSd62gXpc",
  "key35": "4Zzkjd6kdPkFp1pRVmbQTvuH3t2Z3GHBbgRvng7pMQFNR74hUQFt96EVFZFYt1wQRmCs36mtiHnPw4Xt6QmEMLD2",
  "key36": "4sKVeDyGaDXfTzjmDMJkBAnzhQXx6q2wDa4Zdf1WzeAL1bUgVbB2THYdSEbAC15gsy63y3ifLH8SbFpJ8xJ89TLf",
  "key37": "H9PLU5ePMpr7t1uQpUJpi7NTw5payNf92USjATS9EupE349Nv5AiMXD3dFcx7aKH5E6F6XvtMdxkbqMrBGb6Vxc",
  "key38": "efCUs6zCeut6ZnUWMtm2gQNnJC4R7HjAc3qPST6qng1QGGRzf9Tntsx132WqpqNBieMVNxmLb6seCDeom7fwgqS"
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
