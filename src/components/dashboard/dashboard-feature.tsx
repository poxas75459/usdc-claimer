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
    "5kL8vQyovXWYgbyvCLpT99TNTReidrVhNPwaU22cq2UvT89ZbfwSrBpn8JTUnzsHdeMf8pRzVyREdCo3Vd7rYmHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ddrdd1CDYgqeX5xC1Ma7NyQALmSYY1xaJyhsiVWp6bFWPrqga1wMiRD84knSydchho8hP69Zu6RxZBgQ9mCrL2Q",
  "key1": "5e3Uq6LmFeRcr7RGE7TDL1T5L4tS2taCCGXoeumVd9BjWMejX4fSa7gLqZxSs5AhXCsUpkLDNs65gwdEtvBsUEBn",
  "key2": "5Gw8VFULpk7PwmA5ZtFLH3s6dKzpFo7wtBpSxYWtFMvRs3WNKyJodzAvEmm9CAQBPxH57WjqNESVXBBSNB3GDuiM",
  "key3": "3RiPL6pcJAjUa69y7ThPBm5k1A35SJyK1NLzVsYR4NFpyDN6H5z72BGcQJQeanFskvy8nXnqzdRLkRrbAjAPFchw",
  "key4": "aJk1YfEHrndVNcycwiZYGGgQf12bye2sEM1wYX9N8YdRZEyTH7dpCQDhsgicxVVRGraau1j8PjuWAqKsoBZoGLS",
  "key5": "3H2xAb7DQTtEdBs63Y5GwNP542VhDbCTDLS2d2kcnhQ1YZxDEZxx1J3mCPoExwXXb1u3pDxxLjM28gGQdA2y38zS",
  "key6": "33trRpPos1kxkNVKdL6EyKCvq6QRCacUUv6ZGxgGxZcgnqsPDKDEYNHA4y55YZspMfDkTqZyWnB8KfQva3eEp2SR",
  "key7": "52ATER6KeRXu5wCsbekyU7jGz5pZW2RX1UxFgHD31QQnSQmxHfqQ9zucyLqL3BVvkRHraC225nYjpPsCkdvGGrz",
  "key8": "AK5ZaoHZAXyDFTWuyNWT1p1zBjsLi3EuP7wzwQPQyTeXsEtEvKYVSfETAmPGrNUnraQpMivoUYsusD5tFVMgr25",
  "key9": "5Ju9fPfsTNBg1fx7FPc9z1WnmpHuzRXN7BL4gqXAxD9eMNFfFu4UCHaqPv1cekGNAK9VNDimN4gizhDGrz1ruMBX",
  "key10": "26WBNE9xdYLALvHEPCwhMsavc9qGKudWcEZDo9r1XLNcPaczQibfh1j46gGhEeU3tTNtkTW7SALBae7DfNhQkAXn",
  "key11": "4Dmcxr2Dy8FkXroFW2rpLiVoFm8qeteg8WKuYDaoouB1V8kPZ8o4sZLriFtKUoH4YugdY8ibYhvQcZoJbg6c1i9N",
  "key12": "4piSxHxcoW7ZKX5G6WSeXGE7jhYyjVikKuzmYmcVL5mpi7uLbhYWEWiDvWNNR4H927gGfjSJjZZiaxFxz9CH7Sky",
  "key13": "qbqjP2SeQWLQr3zQ1Gbzw9uSomqBTvJiEHqt79v3jDpwN5C12ThCiGD4v9TV7W6Ef7oWdwjgTrm6e9fE7UUCDAS",
  "key14": "5SQ5Xj8AyTp3cBCaSpcAu1TC4H2GfwWR8EEQ4GQGyUkz8qNM9GEdJpi5BWugmPwy3wV5EbHscGUyciq6f8hQWZA2",
  "key15": "3J4Yuz5hFVVnVkCEmfuApZnb4bVjXNcuBrBdcB7NoLkntGLM5nzGHdq1mHdkN1kfgQXX73Xu9giG8vN1S9D38Yt7",
  "key16": "3FEtbrJSXCD5axxAky95rRpMERiVGAjv3fes3e861Zrw8Be4GxnVE99SUitSW96Bzqaw9peDv6R15TwpGkQeXzek",
  "key17": "5nvyo62rjLSvp7ZDVyt8HQQjTQfVJvXKrdcWEb2vevHgc9Q36vmXiCiWvqBLq5dMUJhJybdK7sUL3RmMQ3tEnwng",
  "key18": "2gCdVYJvbNY7wzuHBemAftrjSGirS7mBGu1g5uBzMvcMffNY4AePmEi8qYAZgrrbp9oV52Qnc6ZPB8UdaJZwhfX3",
  "key19": "3GZkXNiWkc5nQde1DtuQAeiRAAM7EwEBAAayf45XiJVCntuuvYJD9C129jQdh7h9AnkifLWVv4TNw6q9nLSWPYrY",
  "key20": "3bDnAhummbzVH4HFRTsRhMY4eDXH16xbSZLbkfQGN2c5GenuuVQ5ardAzg7fuftr4r8yLva4yatzjhtpS3oKYZ1v",
  "key21": "3TFucXn3yqh8FQZ3Cfx8AwyAghqUG6kk1EZMEii89k8YPd9aUGVtUyhc5QDVquw8WAnya9q1Eh3MxEedHdnLek7T",
  "key22": "2tvvALbXPE7xAD4twn78MjAWZQn4aDPFLu96Y3VwtEbTvonL3GWgLED1UwTuTsd8QzS9crUmZav3oD7zXG5A9Rcv",
  "key23": "5iF9wUsr3Cs9nCe8vJqAK7SGb56rLPneRSBpbbpvSXEzAgTV7WK58wxp7RojHfhxsS1WkqEWYKfb18vyaXEaLWcJ",
  "key24": "Xe2wzG7bRUjaH4u1T8sc2LYV7hk6eem5km5sqc9SEh3vLWWjeDHUYD84UtrVG3EXMfnmuyin49i3FvNgfrr2ffs",
  "key25": "5DE1bT2gJ1NizmXRCsgmmnjvtH8WL2U8kEKbjYa9AB19Tt8YpsbQnq8duUtc3jKQ1Pqr6J41BMMMcRwQvWaKgZHc",
  "key26": "2AZhLBv9jtdW2EctpG9wQK6WFksRK2eteF9Vcb5zAJi4y45oXC1Duk95St1BHo3okVFwZC8DBgJnkbc5P1n4Nwta",
  "key27": "5WQNZnQfTDsZwxwxh7TN6fHegVsXijh9tAp5NAPfRACDAcp2bfsBg1TS1cfoJCw1ppC4N61hhaVGeUxMNL4eT83T",
  "key28": "4RgjVJugHT7uuKLdV7wSqxCcig8K1eF1rTwVebwuzVC41pPnDmG7juFWiStzMqrMbf4u1HwarBgygbr2TwKXPa5j",
  "key29": "56M156meuSLvXXp85WYY5m7Sgfk23A9GkrehvUBaP9XfXoPrGWgbDQc1uhJsgHWdrgmyCmQSUUKmTMZ1ntyxZASj",
  "key30": "3dhibwo3cHjRhBv9Wu1r4AiLBvpJRtVqJRQRQVVA27preafGWnNPu1WHUjeE2FcJZ2qL8LnTUKR2toApd4k4mdjk"
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
