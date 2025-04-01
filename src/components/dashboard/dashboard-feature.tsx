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
    "LhdL1f6KBry5Rutx5kTudJgLJGG9Kr9D5c7vyKuXeP8DFwtnKAW3seRwceaKbRXqE3fF2EXq7VGVbBoigwJ2mLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C9N42UVUTY5PowNdPkXKNaMGnG2HN3sQibwc1ybsLf7pbxcay5ptEQQSCNE4JLtwQ1z5sgT8dqMYdX32nSnCS2V",
  "key1": "5Vrs2KKqr8HDWu3tFKvYdyG6GSn9iWRz2X1LG5uCMB3yxBxEXeYn39mKVcB2cTw3PtfS8JRV7oSoSy7T59f1PfeT",
  "key2": "5Nh5XSGWWMMG38dbA4T4zZkpa4XWFNQevHTz7yKmAZiiFZS8mM5DyxrAuSzY5VuC1XuSmTE7AgeNEUkp6DKvZTms",
  "key3": "59c54vwYmSHkrbaMwWe1c3Mw5bnwPrX4PW2YRkjnya5kBMygeCmvXabqWBf4VmcwXaUB4X16Qvf9rnMmZXg2u6PZ",
  "key4": "4zcb5YxP6vp7nBSntXJFYrq6f1QpvSPPo8UGXdWvFW9s6XWBYQKcH1VNQajw9g9u64HobkyPf7cyfkNy17F92SoR",
  "key5": "7SKmKRxRsnmySUuUXm1aQDofbAmcMJoepAt2ny2jVWx3XJDBgGz7SRPib3n47XzRKLvSEcXGn1ePLKFnTJWL48L",
  "key6": "4NZQZ3kRcEXcDq4k16G2KjLo9D9Kq7MRVkiYxXbzWgSi7PPR8corSoUPqpFuEerYj2yDspKdZbFSefsCvseaFtHb",
  "key7": "4ANF4ftQecwRHS689bD7nSXPo6uzfmaZcSSG13anU49KDezJUBREdMwnKsq6Mn6gjJPUd35ueWhut2iENcCvrZqh",
  "key8": "cy4Un8efKKo6A4nr19aQuX2msgzxkXxPJ1515uFTevGT2DJSfRtYZtVbvZ85nCNgKFAh7TFQXyTyxDDch1ctXo8",
  "key9": "ssYYNgauiobBbZWCd8VEeZenCs58Rx4kVZyvN7py4Sth3kkNEcakfQXz34GLW1xAyCxfGWL91kHVPKdQgDJkvcq",
  "key10": "26QYY2TZQgKWQ6CrR9gbWjVaWk9qUkPe5DtcLgj9Uzgdz62NTwTUExeRcCPWn35d6dzJDjxC1KMaS5e5S3t7M6Zb",
  "key11": "2gy91XGUjo7JTZmDRZ8Yar4p3pPeeYqzZYUZvJnERW5bjhtso3E9uvoS62JHA8ouDj1zNBeCzMAWQztdE26rsuTn",
  "key12": "4jUBr9ok9zBSU9edHUHYSrJD783xG9SyJhDaNqd2H5m6fikJZD1cv2pzzMV4cz4WVG7WtswgSqx7Ti5BaM1YeYXe",
  "key13": "63WgzY24fcRTPD9i9wh9EeH2CbrR1UnGD1YsnJrZzNCNkaUcnFTgMxbXEncv8CFv6eSnszZaqUUg62aS5bUwcqHR",
  "key14": "uGT6yHUi4yLQqTyLU3sTTZqooQhgerYZuUzN627vem7PYvC5CXR6RedodspnoQtaNRmbMWewtLsCq5mScQrZ4nA",
  "key15": "2Z5UTxLprLUhdXeqcjGWv2VUocC3A3TMfidyefiX8FiT1tt2j43EoBSdcywv14oZgyEUWTwLHZSvT7ZRVoZgKDQE",
  "key16": "4NamrBrC6aV9c1WpDrwo2avuvmQjag4YosjbWPGW7ixspWmYeuNJd8szaKx6aLhYArVHec1mgPfN4tHdswPbuvW3",
  "key17": "2whyHfZHXt9Eo88VXXaUYMKi29JtWYaQ2ouEsWQckm9jC3EfAcktsRZTamGrS7SUGE4U7utmmi3Ryo3wUF4hcFPf",
  "key18": "5wibY6VYceT1yHuPSWKtqXKfa5CPyPrJYSuJQFv4opjPWjgCgzw4vvVdSQubyAaeQDDHUunFP7PH3cHvZxVdgzFT",
  "key19": "4hPGVMRs9TENuHgfxpvrVyvVv2w6mkwvhyrZzZ1tzYEjGEBsenYfqddczrjxMw3YBYXtw8ED9dXdgACr66X4Mehz",
  "key20": "RJSjDfgmcwaDzAoPjWuNggKxLDuDjEYu5BonHrv2TdBKp9B3y4394y5JKwKPsL1sg7BjFD4KvGr4b4gvntBs3dJ",
  "key21": "3m8psJ2u5niN5Ann6Vwqw7PprpTmwXtMxa8LxYuWKNbtDKcVwDNR5uTY7NS1GXkZS9nvAPe7XmxSTjfJdhwcPq4E",
  "key22": "HroUfFfGf5eoYSkzANATCzks3pmWS5zSENvuMciJEJ1L3FGt4m1YWKN4BeqVcPTZsn1mD9yTnZd9KEbztNSTcR9",
  "key23": "2of9hmmzsLtNpcfjVtYgtqzk9FzmDhLd3vrosx9gYB8PEUFRqhRgiLi1JSMnzfNgCH6w8KUbBCP4JgQ4NhH93byC",
  "key24": "5bfpVMiprzCJ2XAStYu3hZvTSVQFPN78Nh1wZcuKrRimTQpYXgAyq9xYab284G6UY4TbtU7Cf1xGpHdk3wJrYyKz",
  "key25": "5HSUHdU5StoK6LmC4NCPQQKMsykRKoWFzntdp833rhkBf3m3xaZgcpRPXnR7ifKUaaDwexLTN6oF4ZwZ4URcww1e",
  "key26": "2agCHwsmpgNrJg7VJfvCrJGFbB8meHANMEeNWnuFro9nD915duKp6mXCYRJXZF7eeSTBm9XDSTapNojVhEBMcvLo",
  "key27": "2S5QPjWzMrybh2xNNUe5bfJ3m2H85921TCY2fcQK8yyc6UF2ceMmsFz6oWhExmyEKq5vnHk2Y9ftcy1u3NPJVicA",
  "key28": "3W8V5ygVTUQ23nBGagJt1LoYg7xxQyEC3UroYaRL5wizAojJcCJ8fqoARNgJoEGvpWrYckUE1M1aYDuwZNQ7kr9Q",
  "key29": "2Zjk4SbnsnN4sawL3hWECYtZFLELdh95WhcaP8oWVMTdWuP44bX4cqMRGm45S2gVWnc2iU1u6DWztpdNi9vZCvt1",
  "key30": "48FCAAge5NLuF7dAWBSxpxYna1GJJFv7xcqeZVnf8px1eEt6CQTLziMKWJt4Rr7j1rBsVMBrkeiKc8y2PJDYM9qN",
  "key31": "3Z83enbQuBLfHm6xzGh3gwdWspuYcHiBceaHGsTRx5ugBnvvjSvZ4DSojfrDAXqMmmdVSMVRnw3G2Thj26x6hhTi",
  "key32": "3KK7c3zn4Rn8prvj6gnL11yLPzL2BsHuE6Vx5YeWnNTTwRgeJrG35nSmNQjzPN2drfuAKRXA7W1wbBf5jQrzGeWp",
  "key33": "SNCbo166sujnNMnFVLHhG3skAy7XAhSRkyhfYu5qCEVCGC828MgVzppTPfX6GCS6zS9Bbaj31GcEkCagCrrmAVz",
  "key34": "nvAprbmdMR3Q68u39ogkP2DMcsVCpNfPqZoVLFC7u86HJag5j93eyqYLNCs3D6wqb5VcttXc84YHozTmXSiFbRd",
  "key35": "5cArvZ8KxoXEoXD266GAg1VXbYrUE139Nu3dYViHLWdGPLtrCzEZhSSdGtL67Ld1Z77p9HYi3F2coqXvt3HbH55H",
  "key36": "JdywpEez882umRakCTbjJNvZnLN1owGwJKEUK4Deo39oGuJDG4mYwKgEpACwMRh7DhPdn8ubJsKiJ3WTjd1YGzw",
  "key37": "4dH7QauNndks58LbjRLqhf5x3qy5ZzgJowWxJdvtt5BtfnxLdGhqCPURnDdBGcA44oYPT9B1mjsT3hhaTGfrWHqH",
  "key38": "3M5zHNCGUFnEVpi3dsYEjSz5KMWfGJ9SAhrsMDzj3C5rPswo48w4T6kvXaC54dR7s62EpeM67iDwzF36ci376PQs",
  "key39": "p9UC2JAoJafkqGjR7Ta44HEDZ73kKvtAskEo3upazFS3mDLA5Mdf32g5LGHva81ewQUW3xBySWsdWZxjuy1MExj"
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
