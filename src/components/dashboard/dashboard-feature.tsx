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
    "2QPo6CsgiXbJ3YR5xDzYZanFAfmhjZigQmCqD6cLFeH2niafuFcpyws54fndR95hr3xWTXJvBsErNHnyb7waK7Tx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ZUQzPtb2V6nemvLJQ5qKz5em7PApMmn1muZLExQnSpStxsuGPy3VQ5NRGLL8hADhi9VXiGYUBXVc7HorHAbWrE",
  "key1": "56csKDGYGH3jj3y9qj2Joi4xcZSVPgxCNLK54By2WeqeS9U9SjQNiovsSCJ1WpLkkBrZmxWyHXJsvkqV297vExVW",
  "key2": "28oAnqHXUsrWjE1v5nM2Dm6xiqCwMtgDtEfbG1BKN5guL7u1W7qi7b1psSJnrGQu5bMf6QgTk7Qx1FpZANWB1qcF",
  "key3": "2kDqSSyf1ewM6arhWA4GL9c9FL4bkFSRGip5oiwuKTb94owf4uXMuy6DJVZBwHSoupnwQNzov5ZVQ7c5MHmknurz",
  "key4": "4qgJUuBftcVX34Ly8EG9qBZBgoKcE2zH8jgrZ2o44n8ZDa1xQ7V3SYr9SNatArfHAQDd1n3PWiBjrsR2Gdf5n25T",
  "key5": "28p9EUMA6sn5nTViVuDUFQZWJyojyt4UQzv422u3CXrPHeUG9zJyjPNg2LveG3PF5vvW2hcLAHZaUAgERPeagynm",
  "key6": "51eGEURd6McTqk25pbrSBA1ikonX7JoF2oSaSkyatjHjEcvUS2irNArVbksBXWLLrnPKD5tvgFjwMvo7tuZ568ys",
  "key7": "39naqUDnAzhFUQkGpiA4upstyTPxoTU7sDN5rd8v8RcqR6GnB7oyr2SuMQd4tjP1dS4hGN5ULpL9qNfncxH6Efwr",
  "key8": "4XVVSNJbbQ9BL76oDva1zLyrKbVqzfrY8PtMP1BLmGingnc5xDVJearFZDM6FNwcm7rZLjNcHFgEFwbzozi8vaF9",
  "key9": "4jvZwuJhinT6cs9uHEMR4hL1yaGqKo7EKtNdxcEMmYZs2kMzE9hGh18JEE347uWvyhvwz2J2BahoM5qkYE37YLc4",
  "key10": "49p3FLm5SP5ZGjS25CrBQpAHTydDep6q6DBg3n6A5hnRbeX7pxrZprf9TFH67pwPR93g25q8iA74KHre5jmrLzag",
  "key11": "3wjgkdfqtGH7g39kYBTUHsRjk6WuynCMzqzKiyznDhRthTd6JZ8USGtonuzf8zLhXUZCaSYjoMLSfL3HJ3hfHQg4",
  "key12": "3MPoJUDeiegdTNM9ykvWhTi7H9Wgk43oxtmPBY5me8fWshegBbLEszTMmEiEQy45d9aiFf3dACXGoPgJR6YRAFbn",
  "key13": "42DDkqDibDQFpn5L4ddWU8NjrXAw4Fuq9SHJxqyBNh32yN6VEixAsZVov9K6sCRtgVFTyEB3qQ5hs6vriC3SqGJT",
  "key14": "5YYV9TfjNWDudGkvRtBRig84NGG7p5N3sHjyZJNLg2EjLxK3bKn6baaUhUfCgKe28JESQkcHWkLSbRnhzvKqjR2e",
  "key15": "uas4piAq4p6zfqPQaksrtUf7KpdwXKTucmYDv5w5Ln4bF8Nah1QhB8eQLbAkb9BTrNZ3ZoxPiNn6nJfjw5Cwgek",
  "key16": "kQQmXdSYf4k3nw65NT7jrK4RVVGfaBbPvdgWcrPHon99KjuAnFvnL9z2dMobFpNPVKzhyAAE1KaiNjvYaWr8ya1",
  "key17": "37fbF3rW93VsTMKZJxJAJpqqDo9hqVen8JT2b6Vj9B3h8kfq6caWvn81veNHWbeR3jgdyCckv3V9cb7DQ38Za8DT",
  "key18": "u6pFwm71wiTFSxbbVvUMNzuB9d6wH1zcweSw8FFFbb7uDDVngFyiKohPpJWnpou93NjoUYtrWNaEFeg17kZ2Hi8",
  "key19": "3Rm1S2B92S1ARiMAUEARcyGMPc41HK81XnZ7fyyKmPwBnU42tHjNyZgJf8iDM91fG5EptNjo4o5WRHAtjDeoqVUi",
  "key20": "4RjevLCJnQnVj7h8utiWEeC9Bb6urt4aY38hJDHQHw1qBNvJ47aX5y8WtpzsForp35zoPwLBFsL8XhebxRQ4rekY",
  "key21": "NeeZPFzxKphHEeyYbVjYVUhTvJFLrCunWitEabv5S6pkbBMuQ9DBcAoKxqzmaboMJeHo9MzMYMqz1ezcJCwBR9V",
  "key22": "372eT1s8XaH8mtNGG2cRXpPA2kSXiva8ZUr191dW6J4zUno6T55aPwkv2kD8xoVEzmF2vZ4RNAdtauzXDXXoag5L",
  "key23": "2w5ugxyzQr7RjtT6q12B1EfNq3G2bwZRekjQ9UmTDXXUMcqJbunsLYd9J8WuSJLaR8QWhgjPNrW84vAbKbmq6gAU",
  "key24": "5k9DLNbm5noBNpWZPrWwuhquG9scoRDp5AdemNFFwF88RHyspqQh5Sc4yL6hMesvnNVU5Goi5Z8GD7szvB93w4gG",
  "key25": "4PeKTc91BCzceidwPMLxP8ni2CKo5a7CbWd6eokUKQ1pXNR7d9KeyBCNSGNqrCF8uyTqw86Sp812xC5JoWkA5wHm",
  "key26": "2K7DQq4L9uxNKLjeei5YRPjTAmnAQ6aVrd8zv6yiKGnW7JLCY13vX5XCJ2nRyR3ZBCzxVDmuRerLCuLbMzghBJYG",
  "key27": "3PmudYnUnzNPDwgu6CsEaNDDTFd8ysb7Qu4rdpqjggfgNUBVwhYqqEYmQJkBwyi3g4cBEPw3jPJShvsqWMHkFbLo",
  "key28": "3hKgR7msJ31VAdw5sRmAqQ23JdNYmHFtt9D6SZ9NZEf43tfB6dug4B3mMxpwdHWHoASZkixdAUen4pg19iPwse63",
  "key29": "4xRpMXmgn4sJVrw149BXtHGiTRSoS8qsQc62PPYFBacftmETbpW2QvVg3DYcSq9BAhBb23VV4FxqqcidETXsgBoi",
  "key30": "nTTbVVqp6fn1oRTcGL38j59b6ETkrJtmh7QhaAHUFToWKhMXzN1AUiv9pCctKWFubXPYPRvw8f5qCNxMTwAKopw",
  "key31": "27Pz7wpsrF5WS7AuTWF1AK5NtMbgvmDsaA5sCoxdVDkjNnvrCBqS3AHv7xEUKeGZ6MaviriLZ1mqkzF71QSGaNnT",
  "key32": "2R7ykn4GdtPbayYdm7fmbSyyGTA83Uf1RzMTRSBiB1DAAdPyjm9JgYbojUjYZYM7WphheH9GRZajStWvbKRwJa6G",
  "key33": "2cWfAiQF3hyErfzaa1ffnhB22yQ2geWiryXzU1bcwGQSJyDT4qrHq7cbpSjUfCTq1YzLVqn2bZiBckU2nTbK2pKb",
  "key34": "4GWs4XfvknGEHwUh3yESvYuAwg5tEBgLDYAbuqqio4AmfTRPHRhi3fSmH11AQEwSDJwoQwWoDNFipf3PfLJmBfWu",
  "key35": "5ouDLVDTGJcQm6GFaUqv4FWCL873ERvf961fJKTY8vL5K6YivPhAVGNVS4genkjAHUHZD4yoGpqYcrZPmHJ7hf98",
  "key36": "3MM7DGVnFtVeS28kqiQyjDjjDz3KX499bNE3Q2Vnuj74UJgoMH9b84ekT14TwCKWDr1ExqmTQwjvzrhKsx1uVM3x",
  "key37": "59qQWer64L3NAJEthD6G6BwPVbUbVs5dF4a1MMTecL7PWimnDKrZ1S3nKFVTUx5iWm5RzH4QNZv8MLGokvoWCD7c",
  "key38": "59xqZqJwiAj6c2ejAt8b6MnYdvvRG8wmY81dNqt95dvsEpnZ8ntdv6UFZrZJBJS6y4tNTFK9RS8Mdik5XJk1NGBE",
  "key39": "2zZxK2s6c8wm2WEANgSDvtSKAxA9sZUBxakbckAcqXcwuixCbLP88K5W96S38s2m49RGiG6sfwSvoPGhnpJ95Ynp"
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
