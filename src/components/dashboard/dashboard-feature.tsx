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
    "4SU51km7tYL2jw9SfNEdkCoD2AxvnEbfqqKHwKaoLkKFqcvpEnFdUqSUbBzMgZdAiQ3hjTSRg3jcfPWbYNAFVAZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GS38bDCMQvKGiQSdqyDotygChpgiu5GDzrj2vF3Eh1JqePEtWjgS6GdYbMHyWxCgiDQsoYZikEtKTzyjLQtrR76",
  "key1": "4111DxXxPwTQ1HkeW8CLgt6rAQtkux6bZrifGwsL8hEaET2pemgdMRjWCSNb6K6bvm2ZTgPx9rb7uZLQSeAcvSEV",
  "key2": "3fczYzX3uFo9ZXmGqVvc9uaXx5MLA2oPrMKEf4c2TYxnte1MwCfAS8dvoNwi7HNhf2bqAtR3a5tJBvVDMvFvAbYQ",
  "key3": "3vL6oXJnXBKvKGmJc2fb9FmbjtkFRrzwNEveNCPuxsSj1b2jr3sfUMZrn2CC5CmQy5SwLf9fVcvtmGKNvmqwbHAe",
  "key4": "FBnDnriLHdhjQfuRqg93WuFEJaFwCn4Ze22dHyLMb4wrYtB3Di1AzLhtTaeuVrSuBZtNVL1rUky8ZTLxtyksbZ3",
  "key5": "2c6ckLoeUX2ENMQDZrdhLYLRkF1fjYDbUABhHTqhupmGdSEbWxPjcXwLW6aLcRPnUisMvbwYNJADU2K4Eud5sxvX",
  "key6": "3f5s37ebN9zkDP1XbCxu8KRGrWe7eakP8R9M2MhyYQaYNuMqYuhnCRPXGv3RTsg9abtuvvr2rgbpD4SCW9Zd1qnu",
  "key7": "4CLoRdffBG9FaYXvGWAeznsKXtJRMRJkggbVEGRMNoAMQsWcxfwneki2oxs3Up5KT7ubs7gTuDMYnjs7ZyhM6D6C",
  "key8": "3qhxwajrmx9seLVAPVEFhyFAAiLYUmxTzLxLQL38bHSwotb73tGojokSXJXrM48Mfb7Ri1fCcm95ueGcK1VKGKsQ",
  "key9": "2qSwZH1WH1zsExCZgAWJ6hJikCR992TvefiW2yPaqZvth5xiEyuZBmzkgY7dDhjbK3JmWUpSZ3PhDfUpnMxE4KAY",
  "key10": "4ah1qu88WgeTeG2wVJcJVi4S5x2v32EbyD1U4PeQcWVqyY8zsxsYnAvGTq1mACaZSP8nrJacnkoA1dkjYtkQn3X5",
  "key11": "5phrfYK1dLn8uzVwV5aWgNXZZSpNXKPZxq7eUwbwTJ4aaemQYgZSVd4RbKiU6ULK3Xh8Sdpn2SoWAXJhs7gRs6FZ",
  "key12": "2PYpijXjqmxD9rTiQj3za1NuDjYGph9B3P4Xc1zDmLqBEH7CtYzttDUgh42QtTohqJ1dj8YaVw5bx8jNRoLnrFmi",
  "key13": "3m5C3pWdiMcudw3qiDhhLcKySmTvt7WjsYdhLdRwVsefdm8qGwFdC3KbM6fNkheqhApkZk2vCF3QdfUpytuN6Mpj",
  "key14": "zzsJtoSUYGu8h7UZ96zZCB7Nu5yt4T8uDTMcMbzuDnXymEQNfunz7FHXzjePAXfpDAcAeU3gV1EaAdcYURMq73i",
  "key15": "48WjZzJCTbX6EXA5Yx4LKxffU4QtvKRo4PRSb6M7JoqM1us2ygB5pV8bGErpq5yvLNyTW5XvpKTnGZoEpP5pXA97",
  "key16": "56sCZUF5tAuSj4GAsJ4qNw8ayrqgWdLspTv2mMU656TDcvop7UNMAz56RT2Sv9VkHvkZeYT4zK7hA6Ss7ksJuVYD",
  "key17": "5tWa3J1LV1jLj7SomSGiobdGnMeg1G7qp25pBSv9BmydgC9qUWdLvJyAzWJUJfMC81xpM2wVRZzCUgw6amM3H3ba",
  "key18": "EaDqZJ3cfiMAfkPrph2GomE6Zef6NyfYAqaNAhbnZVQHePQazAXHCEJ3teNq9SgqpZQ41EseGb9xQTcEh7hokV2",
  "key19": "2MYYqcnH8TxZHy1a4VXfTD7kU73EyWUiHdvBjbtPfv22PuwPq62fwjKe8VkLhdKufi4HexxjbFG49mEjUxw4zd1Z",
  "key20": "5V4oX1KB1opQC2PPCL1NzjidArF8aZcrAVR1VBXU2AdHdqgkCGNw6jZaAYSr4mpGryfzZJF8Uawid6FddMLSvmyp",
  "key21": "H2UQ5XYupUNoDHAaEDgJvdcKc7fcrGS77Fj5V5kwtmiPuY5yDSkBFHpsL99GzcMhARHrCzjBWNHdvtafacGMxLo",
  "key22": "2qSXaqZ7nFtjaFH2KwBsSocPURKUVXHszcrAG8ZenzuCUEnL5z1iCkvjbQ7ecYVjBoAhqexwUZFioznWBZLony1A",
  "key23": "UZABQqB3bKxLypCXJH876gyAYaNcGb4uRako9LeyerBBJTPRbBmnxAMTP5g3dULxMxurkY6iaCqQNDPRijEfTaw",
  "key24": "2PWooRe3SKj1VL4y9pJLGF9RuUJMWk9TgRBToNQqBicGt6oSd25jmpqCKoDx2d8GGzjvTqHV9p7LXEXX1j2qES7N",
  "key25": "2Dm5XYuNMy3jcZw3WjoJAbVgwtqZ9eoo5dtU6jzcsHBtrWrJuq4SjSEQzLceWvV2TLxUn1kMVkDgZec4G7PeGhBq",
  "key26": "wP9EKifNpeA5qrERv7N4LxSCmyFxmofMWSSpPPKTeUY9L4ewRv73JpWMU5Xk3EhHko6Lvcrujd2BR459Te5rcUV",
  "key27": "3ARQUfha14QEuJVkbrMmeaEJ8SCz3XzD2GyEKvwGaSSeSjSDJXNcK2qiVVYjeEXXxmHSeSdjasjZyx3zzmAymWBS",
  "key28": "xW5eAp1FWAswHYtvbbsprLvTDopHgDMLdWUbaup2jRQQhYgNaSs9UFgjRWnpLoUTS9Yji9qo7g8TimpC7mCJLiu",
  "key29": "3GYXwHPfUZmkgwCzBhuLRw5R5jvBTK48qVbc8ieRUuDq8rgqCbfHdetqwePSgFKyRjQp2RA8B6jTZdRJ4SxExzh1",
  "key30": "gu7BvCUTuQwn5XgNWZZZ7UUey7oShpkDfACwV2Ebpi18vryJM86FkzYiwGkQr2RZWxuYmPfWj4QzGi4H232NgwG",
  "key31": "3iHL62Cg2qVqH9bAFXLZzn1d1oBHihLniee3892gY7t7DfwSvhrhgK1nQwD3GKULRComsn62zgedtHZvuHcm6JYH",
  "key32": "854XK8hXfVQPW3jVkq4CeCxAzn61AT9fXW3UX9rHEPoJNerBotxdnjuNMJ4EL9UMyLWoBDr65do5KjdpCmUFcmg",
  "key33": "3zBHT7B8TPgRQyj553dKQyqo8nEwNMxYuf2Sg4g2khSbqScUNvt7mEqmJBbd1oWwySmSiPvcH1HKjUa4RiHeJqhU",
  "key34": "4zo76Sz7q1Z3GFzg5f1kERZdHK4HcHSb2dxXqLdJHsF8qTaSm84CNrJWjFrTmdJczFrKgfuQ4ND7qy7kP3RvpLfh",
  "key35": "4Vsi6dPxnHZUNgA9Lj9tSBcPZAhWDdMoDq8hfwbfUfQuwStqSfYmA2nWDT54WLVBhST3i7HVNuedyaBNZmqjEgD6",
  "key36": "47JuxDTx1BUh7x5YMyEBqZV1JHMqjraN13kBThgNfLYYs8iYb4xrb338RAfxTho9aqFBo3KNEgRp96ftEKC2xEuw",
  "key37": "3pchpw8PrijK4zphNkDz4HeAQkNYfxGqzWbkbMjGJq1zct3vkyDjYdWze4TKuJsRgBhpqzuNkczExk4zo5ChcGdL",
  "key38": "2JhCwf4GkhbRQ6YRXAN38XKrPZukfXEW8mivNwuGcxSaMhEfCogzA3hVr1HhbLUHA4BzWGnSECJmb7whme6qniVa",
  "key39": "4cEFBLtwnW3QBzMQzkje1u8YvHbBBuPRsX28AnxwzeTiXG1h4ELF9o54UpfoLZN1qR9FfwVLmynTo43qX9H4TgZB"
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
