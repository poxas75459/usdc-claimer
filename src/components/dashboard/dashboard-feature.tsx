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
    "2vr6TH52fAuE8SUiixVXZFknWCvWMYsTiKTW1MypEp5mS4uG3nmBbwQhZQ4hnCJaH4nTpfPDTBbU8b54PL5YK6xa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B8zeGC3U74t8Mh3ESqTtqXmQZkRc8QeHBxhhoueygFwAF6kABCDrTPdmQ9Vtceui3oAh5MoNjcc3jSr5DLsH62z",
  "key1": "k5n5tBRXdPDu6JyghwngT8wGuoDLdHnt9tgna6oTp2jWoY3Bz3VdSa7QKxy8nhhruYz7UTre1YPCzVKrMcPyMfZ",
  "key2": "4dRk4zSTg51uNG7PbxCsFZUmgtPzMdY99N7raqggGqMPRfdwNSnYZ8xEs691rVGie8ZiRsPpcfot5DTubvt3bQSz",
  "key3": "5k3aiqEXEagM1byhLZJXZivnJRPDBFGkEfdLy3AXWTH7CQit7Rg8e5J4Srvr3QQS8KcfMKu3C6ZJ4kdZHkjYeHp2",
  "key4": "5PEoHN4q8E82VM9sNTP1CxvVuUYPxzSL8g3skc2vFWabdk4KTPyBV9guBfL3uBNY5hpyTG85uQ5jD9rdUs6xuPFh",
  "key5": "s27yCPJMNA4AozhMe3aGQsABNd42kUcDg5SEPYVjWsix9StpyPWZvnvk4h16FfAXJH1EdAdrSYDQ3DUdaMJEsDT",
  "key6": "KRabSaaeZiGRnHVXUW8PahFESd3oEDqewgziN34y7YCtWn8qCjMqff1m1UVL4ekWG7197Myvhwpj86ZRTioybEg",
  "key7": "52nBP6BqFbXFJyLdw2bJksvB4mCE81wr3tZiY9wpfDtWWQ8UKt5iDuyQQCoY91sQEvL58GaKpAAfffTdX7muma8U",
  "key8": "5Jq3kGTDaEp16E13wAbYFNYQq9GBMad1hiwyxNJ1x96ioNR9Fyg3KuLy6JPoADzgCbzNE7gRqarYuqYhjV95aToG",
  "key9": "2mGBmPspP1JWuTqErd3YqzL9Kbep1qjpaXZxvzyPFhJ51oR7vM5h2aqDGMsYKhpbFcm2RZrqW4QU7tEMsxs9hBBP",
  "key10": "5PdaCAiqXL6bg8S2taJGF8pzZhnyqh7AFtbTYZkemvH6ZcbbRDp9Rmm8toY825Zm1sb7WqhzQyoYf1RVuSwL6k9p",
  "key11": "5mkKrwZtqsE6SAJ3BoEmDLeny79tbjdK14hkVXs4ph1uZcL5NhC8YywiQxDGrSaeMrzrCU5qVjKikDNK2PGSaSzD",
  "key12": "5sNqQwGxmhvHzEroVEqr3hp687RcJ2kA4Drx7PxQc1YJUWj7xLXMqyxFiYiXQnDt9zxndANKRy15r5Hzt93sa4X9",
  "key13": "3EV7pudA9882mA1m6KLXK9E5wduUxYzVYbLuHZUWDcU2Tc4mBfKS2r9x5B3MbwMksSBwCydePHSQsHeUpByyadtk",
  "key14": "3bt8eNSzfM7d9Ua2FjsWLtshVqWutWsiGfxsVKvQj3Hih9BNWaGt3Ew6UQqBCyczhr1wjzm5X1B1ToDj45Zm5Ywr",
  "key15": "52broHtUX6QnzGnUvnqSxNtKTgWVMSjrFWPm9mP14sW7erspsBte87RbbFguFzyi9JMjAjqBq6GGAMG1NNDiV1EE",
  "key16": "ZadDQQg4LybBXbxK4XUfKi8PnBbg9KuHduadWY62YfcmPXYF5CDsH542h5G1i1Cy6sb6eN1nBqpWxwdYiLdBaop",
  "key17": "2JiQki7NRotbjQq1iB1aLnxQVDASCYhtJGEGgUrieWKvjv4z3vRmdeJh6aEsKXpwQm9wa69aAzj7aT8q2CYeg4nL",
  "key18": "7UojMaouXrouyT4BUWbN1Q8T9R7z2TSdmPkU1BybFsj3m1N2cFWVQSkL3MotGcU28AWfQu7cLpK8tFWpSH6noH5",
  "key19": "2iqqg6KHbp7wnZxDdEvLZhwJb2KASLUkhWC85uHR5pXy9AKZ4JMeDdCpDvvRm3CfNMYwx2fjSij8hSKgFbstYmyR",
  "key20": "2TFQ2WZY5kEB2TFxcRYoVP6DCNNELpxAs4uTrPkz9JSni2soF2zKs3DtKQfBQrUrxseAzWFcdJgSG58Q5XEQ3DD7",
  "key21": "4TusovH6mqy3AUPKBzKXKU12xCgqXnMUMNBVdQi3LNnMtDdxyNXKjTV2zT8hRU1iPJJFsCFy4SJpvWZSjtu4aJZ4",
  "key22": "ZkxF23kudA9dP1RLcxcxXw9jBrQdoytqnXJ12haJL2Wfs1EuDFBEyHgvh74KTJ4xCMrNH2WeeKPem1UFqsLLDAR",
  "key23": "3ddoq7MBWnepYDd95yu3ziMAVjBsTZ8fLCeEEXL5Wh2ojeYcLRn2Q7HR8esztTGKMN1r2Vb8UKvCxM4K5VA1LxtP",
  "key24": "JZVZ6FCVLbuaWradz5XBfSfmor91jUwgBmcdQcUKTYwka5szQF7UCppfx5qwLiXebUZdNDxZ8LtcsxMAKiwjrrt",
  "key25": "3umUBAJ3bcGb3P79oMSz9uoJyjp1NWi97PMvXuTuqGGiu4AGPXx2dAaEdPikTdfJiQEGtCSvnzV2HHY6crtM1RJK",
  "key26": "5nyzLpHMVZ2qCQVpVRF8J6RcWExJUbvn2BMe25q3mAmZF8zCVSdxYsGdD7EQWuuZUtVQ4vvXTpPyEP7Reb8bh3eX",
  "key27": "qZEkvLi7WR5StbV6ggLrbUrFsyXigyXnhnHod5YRkV7eeWdfqcU8nvUxzxrTQBK3WpZRR7aTUJJFgtUUFXrV9RF",
  "key28": "3pTeLSPmd3zcqiSQzzRAs7ncWebmeLShRBP4powKDLUt9nDMKawinbwDwUMw7GvxQSW4Sqc1mZPn2KUdMig7PJhn",
  "key29": "4BN8k4t3YvDDpP21uyKdyExLq2u7rC8bfiArcWV47Q1KdvgpcZeRszZg3Q6LFJYc11DWqaM6Cui1YAsvHH7u8ASn",
  "key30": "2NCWqBvzQN18RaXKocnGAaCYur5KQVgxrqVuWoVvN5KsUXYjeLPo6U8SVDyWpHykUdFjP7gs7ja9YHSENbY63K1S"
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
