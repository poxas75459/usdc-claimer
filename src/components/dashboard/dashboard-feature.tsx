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
    "4ZUPw1ZJvkhzbS6sSSFf1vVSg8PWmwH7XbuGEQ5yaDQsYSvAyJaXAjy9Ek937pGLBkj4J6Kkb29TVqSdJgSbq9A5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5udex9ZXgYoMwh2NYqKbr2uHUP5BkQcqcqPF3qMAAWaJKFiuf6e3L4hsKMeGsTrvFouq8ucDedduLYmdQ2SSTfUV",
  "key1": "3LQQGZyrGAD352FHzGEefEuMGnD3T8tZ7Q2sSY3C2jrpE1NERtzQNciEULLNx72uCJNXqMr2iwDWaJSPvtPugRno",
  "key2": "49GMuXXzEc3Z7hxDjTY67emP7RBrRVs2qWmgWwkfG3AiVoVnPZiKQdteY7W5VvVhKBFScU87duNjX4E7FiSJHRLw",
  "key3": "26rLQ2WDYXUHsoyFAAi9GPY8bKVwSypMMEeWdKCquqJMfLNoWEu8tuqWCuZ2F97HxvAED1rZPQdkUd4N6nArwuAD",
  "key4": "3W7LmdGyydpQnBHKZVn2ZgYkEp6ZYzohs5cUbvirpcmGYJtpYThxaoPVjZB592u4hfx7teibn8sDC45Jz1DXi8d2",
  "key5": "2ZmgGWn3z8yJQY9niuGnKLwyqpBXTZnayKro9THasJzQxH7ZuodJsWHGXYYsUngA95JhLaoPFf9gmwofmpFi31Y4",
  "key6": "2CyGHqJ2zwGwQivULvKGVfKtHoBaMdKVcQcGtypg3amWmQaLAEAZfWZvnmtsAcmWZeUM2hvwejFra9kaWh1YrqS2",
  "key7": "3mTymDdpbQYPDujuVKRZNW9Wyq6bP5BLQZw3ANEbteYttqnz1vgVVT7r9dXX4iexAgiwK8YQAKz4eN5RgP7PcJTc",
  "key8": "YLCRZAiGJy9dBmhHEQnpsNEdZ6V5hppesSbV1j7sBzDZtzGm57v96DnJyMgX45o6sY9rd5gNXNvJjV1r7a8jrYR",
  "key9": "6AKK61zwNPQkRb82f9oG1q4yrsravAup3ds3QAqrB6aEAtCoVs2wFKAiyzjifgubuJz5yq34WWLfRCf521P2qRK",
  "key10": "TnEH5n6wNQ5B8ZncM6ekYsJocMegQGg1Rxm3vC1WscAhPCRvWu69sLB3gguMXTX2uAeVJNMsHGWXiGxowiwL1Ko",
  "key11": "5WLmTt5MGemArNKLzczaHa74iktdSoZBKHgAL6EJfsyVH7EBYztrM9U57Kmybw7AVtFQ2YPyoVhsxbr3WU944Dco",
  "key12": "48njsUEWhz8aYZB7STo11owDQjhzus1pBBhU9gdzjPHTWu2KCkgDarmvQHwdxDV6CjzsjxBh49MnfQxkFcgJGcsT",
  "key13": "5wNpwkEVg565rn2AZAWVBso31c75XNnmxfikSuTSXB9UxeS7nJMC19SeA14KZgPiwFcVxadu93houMyXgMo81r2U",
  "key14": "QdxG546Xvktn6kHWAKjXmWDWMsPR9JBU5VuHWeDfFmUE6eyihihm2hpzmoM8tM4jQv5N631tgMqojmVmbhnrqqU",
  "key15": "5f4Cr5WmSK2g6mJjJHK2mt98sDg3ZpGwdQmBssw7zfezMjHL37xsgQCwqHBtAPqExHpuvuhWFRvLsNR9kwdizQ9X",
  "key16": "62e8vTqb1cXTgDQXyFeR4ssSEnsbV9zDdJfroc6wQXhepDmNFyTXcD2jWoYeyhDJu5v1Q2kKRzcLMdFy25hFJhqx",
  "key17": "3nfVcUAT5ytRk7CszYQxCGFZitKj98isGusnTDymborE34PsJqYo5nTvgJMXjDxXbFFYwKFMS2RDJBqCHxw84Lea",
  "key18": "4MYyVyHFe3hRoYxJ5ojR569V9edVXrayjjzo6Hdzcs4QaJa6XtPzjX4xwheV6r4cnk4S8Vg2vWjs5jH9vzpK89Bi",
  "key19": "2ohg52LDZy2NJ63K5ygiUEroceqqCNykMaMBdXJfU7YTLd814CfePFmDm5dcQKjGrf7Crkyof87JT7WfXjSB4d2v",
  "key20": "hvyFge7WNJBEB9Q2NjywM4Gkc5mSJLVqwBxhoF5U1X7AwzJ867mufip1GCXpvx9ocJ6xdAHc8jp4Nc4Mcy6Zyjj",
  "key21": "4t7QL3RB5L2ZuC2duAb4YtUNSiv7sQ64q6Koki6vsjRPxzZFLGcpF8RHpaencCJpNrVhWkKXJBnkZsjxCvuGaxhd",
  "key22": "4M3yFoGTbR5LhShHspozKZYS3SyCa5eMa5P3fRQsBV3AwG5suyHRNYj6ZaEGGNKU6tMfga2JGvLYoBXZ6UpWKN5C",
  "key23": "2T2Lv1rSiny8iPAgAuptR72BSThYe66quA6AUTzqWgsDAyJMVdLSy82bMy9Rdb2DUoCcoPLCc5WYp5dthyTdw5tD",
  "key24": "4C7awjMHZNJFUkJW8iTQDsaFhgtgfKpCrtuZjzNFmUKhfJGEtjED28ygwPSGseeMrVLHMWDZJpV27P1W6nbqwicW",
  "key25": "Rr7aCRzGQo9A2BtjuNM4rWRdosbbDDUtcbu6YoscJXJ9M3tsXAW2EPgxmHH4auN2JkQrrYMkmu4adFx8hKev8mq",
  "key26": "67fN2P4ZbFAkH9RiPbWJkH8HKPCrVvWFzk9TDRfR1RWbAbKWcCS5QgwMzRGLXCXm4vu8CZevWoJ16dqvdtPAHSjS",
  "key27": "5Ezn5GXth2zW6HqnyFo3qpXHBfL2Zf4i66u3A7fqFWacSCq4Wa5RSRTYypcbsSKyVhcSaPepMyBCn5eVyypapzTv",
  "key28": "2T1jvz3kb4cr4gLJUP4x8RqymGwCyf4a7GXwjABNhoKG4b7ASEQUUuZ7FoPy5bdww48XAtkGLHmHznpjKjs4ZvkV",
  "key29": "3BajaRYkrWUQg1JvJmaiQSo5NkSL5d66FCLeZsPzRsKiT8GsTSWDMWGGAt9Lq4MoPpdeqF4Chi6dNatXdcmLP5iH",
  "key30": "4LR3KdJU6Quqqj3LWiZEdwxqwPCqDrnQQ63mgEPym9vP7akcnwE26d1M4JNW9sSiaHMsrPcd46gD2yX55g87W5RZ",
  "key31": "2eR9sssm1cGA1Lpk2eyi9EbNGUmcz9CQhC6e1NbmyaZ32tTjQK6rW5WZRrbdJiiXbM9p5SkNTn2oCxSLJ7NqNQLj",
  "key32": "zBCVn5higoVQhD1CiowizkpKQD7dv5ty4tZjrYgvc5QX3b7kB5decPvHWEvfuJU1Tdz8kfaw5KRuSDBX5X7yUfu",
  "key33": "4Nm4PSWhiszyuEpDB8jZgrnV1cGpNT3SriDcsHHC2SHTdUftHE4Sh8uoWHmXMd7YmTrU9a1gQ9ouGD9uW3Mt1R7Z",
  "key34": "4r9CrKZa2XbWuNM5zKrbozoLJTSVHbtbYfmMFS1SiN8bPSGaNBoJ5oowhH9HhbJ1cgeWAK9Ji3Df2NjktvVkCAUc",
  "key35": "NVz9FXC7jGCNKnDbfiDa2jeMsdFYnLtFHwDUXBWi98pmEcmqJWiicY1WcmsY4tCEDFSZkQnmHFfXRrmprnGqhhJ",
  "key36": "2dxjVcudDmfy9RTE6eiR9GJ5xaftLbpN5bpcMYhueQSdFr9wdom33jkJtWQLaL2KmWM9nTfw8Wm4UPbp3SQ8WqtT",
  "key37": "2462Jk5XYy2eM7iB3QvD1SBywDcrqQj4RHcWDgv7xHLhs56X9XNTGCd6BfJvWAY6kcmrk5idD9LTB6QVfdc313FS",
  "key38": "4oxM8iTDdpQbNwiikHWfFptqxDgcJATLR2Z1m6y7BkYU6scu7wwZKjmLRiFiXvq64Y7DYMDJo1FMMowy7Se59Dtd",
  "key39": "4jcpvpi9zxYkaWxvqSh3E6civunkX1yehkwZQc5d8fjNiRqk7YrjKXGTihMAkNeKgKd7yMfeurMEH3KKyo548AXu",
  "key40": "2eBrgV2wcWdPj7iKDRcTBLh7GARhu76svs8b5zfzHcst4sdaQCeUrMty9XWCBdhqGabHV7DgoAngCiAFamiQtp2f"
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
