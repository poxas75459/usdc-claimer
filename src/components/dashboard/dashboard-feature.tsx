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
    "3sYEkg8k4ADjnpSHnnxJrhbXzptwcyNkcS8kPYpjZydNeBHmxCJ3fr1F7iTfVvDUK5TFyDtdTZdwvWPG1SwiQJhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h38Bmt54pxtCMqmSWERU5Kd8tQeJGZCSd355MG6LogvcPRXPsdt35cDsVQWtduEgYfLBU3BbsReqADknRhzrAtd",
  "key1": "4eQiBhXWKTeHiDagodAMy2uLmzit74NThe263am2F92dm1VpQvZMNH2cnUr5RPQEZ93jo1sdjCeb3h8w4oQ8AxAE",
  "key2": "4EC3ZowK3Xtyux5j9UAj1saPFGxHwYVWM5FMssJcaNYrGa48z4rd1uZtUQhnTij1GnRit3BAputy88kdRAxz2GTL",
  "key3": "2vjCzUViNkoBfaJeCs4584C6T4YSdm99MLcnriSP4m2iNcKsRKU5ob22ouzY4CdZ2ZwdEvPKGF7JcAVcCU892URt",
  "key4": "5EMhGWAtxfVt7eFyR45cxJwE382p2eFMtuKzGmAcwB6wQmXnb82MJy7pjEr8RRsHiPMAxGzqEB3Da7HeNjpJYdAM",
  "key5": "2wJPVQjsefMWCpZjxvCeMoNohDVzLVnBkWjUnzwd3LgrX1uLKa7huy2DThTLdoRkgRRQVaHLoXXz3EHtnRCGvK5V",
  "key6": "4YHqEGusjce2pw8Br3RVpE1iusPmzmGKwkfGMc6G5CzkoEDuR8QtTv91Ds6MVQ4hXNsfU6K3Ycb5oNzwZxZr2NqA",
  "key7": "QcFPfRzQjP1RGbsFmTd4FeYsYhwbe5pDJFpu4ACPyHPVBkPQVkBvUqnSfE4afcAixpXkeftF2UM2XXgewt5pQ3h",
  "key8": "2nU16qngphNztD7dMTvAFzyHnMc32qJfpTUGEUiuukKSwRspnvnbL5cepRzxYDGCkaTCtn6if36i1nTNuB2Usxdz",
  "key9": "5dSud4FWR8yQNFx9ijM3EpQTcM43zr4j46j2mNmAWwKBimFobvXWCkWneEY7tz8T4T4DdUgnpAcUEkTYGUW85EFV",
  "key10": "4RNnKHEJ2iHyqTqZnEzqVYWDcr6BvyEm6HgZbqWUouqvXAdSQMN6wvNcBDYbniDiVJ7KKYKFjyLxYVFAfRUGUfTu",
  "key11": "2hLkLvnoYzpckMwendF5ANKtDopiJPeDaEurLyeNFPimDHJ1ytfRf6mZjRbs6evWSDsMbLnqkugXHtXKXa3nSexD",
  "key12": "2MPtktJmcbNBxYaLNMgDZppy8iQUFLDydrco8NBzSowdHAm9cSj89pNgRBjg44ux6VvvfccuxHmQ8har1bVa9suP",
  "key13": "36w5F58v9fbT2MiE9AbnwJhB4tdgdPhQL7ua8fGvq7gUGpS9K3A1vP62eVN58SsAzPUZjmrWAzX2fVhQteQYbs55",
  "key14": "ne6iFPPzs6mWBvjimE9J4mW7QMDT7UGVqRVsbvkJdLb8Tw2Kso4JjtpzQkXExviow2ZsoM5Sexcf6XjvahsNCoG",
  "key15": "2FbHrkke3Bf3uQTWnEGjs3stjbSL3rkdvM4Pt3yF94YGU7AMvnETrY85EQcwLWLHTsTFPqtfscnEGZWRJuWEZCf5",
  "key16": "5j9tr4jisgpWqa8tEWbu3Locohwv6VeA5kFy8Y3a9fXx6tzvGGNCRcPSoNdqgmyTRj44VRno6pYHrN8gVPfHxAeY",
  "key17": "4ytBSwK8VK8jexsLVJnEqUbzRsPWg5KMEgUB8wCRKgqDZ9sYMBNYEqTgWDv3VJcFGArBJqNNrznL7eCdisS1aA3M",
  "key18": "uhAC3X9yXrYcryLVS41MePw9VZz643gkXyeVhqvTEBLnJrvxPjCNJn2DH7KBQwmtSq1YKPoFnNzFYg5tTx5u7op",
  "key19": "yRYqrrKmqGCKTqys8DG3vfPPQVDTCbPzbG7ZgXibaMkiZscfR4p6PmEpMaGZ8dXxsoLCQhRLyPteU411JaYrrj3",
  "key20": "sZQKcCZFAa66PdnUVFVFpwFaQsgSRu18g2nyhqwxK9aNkHnJWYaZjHYkezAVb66SbKydSzksENq26Qfv5Knej6P",
  "key21": "2fMDawZoFCHkPBZcxdAR72ghPbgVsBnR415qc1yCWPEnqFC69e7RdoLPxQweAFTg6zjy1EBzCN5euMR1NpK9HsT6",
  "key22": "5uAGNYYbyZaYBRuL8kmFECWHvYJTZZSyQmoJE3jp6e24sjNKD3NUuviFazPrRQDCHMqYrJxTttLuwLf2C9ZfkY5T",
  "key23": "rkuERS8DQeNphAH1b7dW6Wz5scGJU3Qhhk2r9xAdjG3SvQwDz61U1bW1mqhwQDaZpU26yKUGcm2HDJBbr6cS8m9",
  "key24": "5NKzJaA3Kiybnx7V4iSkFkoiUxaz5eupG46APMGxwpQpxSmqanUw9x7CCthq33VgrknozTryKpSVgLM13DJfsqx4",
  "key25": "2PpsTWmk7Jzx9M1Q6LXvwXwR98TKLWS4oWUYBDx1yZ2kUTSRBQ9vdZfo1mMtugA5pjPvL1PPbXQx2tw8WJ29RjHJ",
  "key26": "3Jo9ZWxdf5LBsDhpeZGU3qpvVA8Md1BTv34N2CSfPLVjie63DarFHmFhe4tQizxymyXGuDF5vb8J1L7E7sGbuLjw",
  "key27": "2RuwVyzuyYVruMaMDr1Hdzn3XZ9pGNTj8aq6Z3LC4TuaGoZYMEFr3ShitDSVc33rahLQ5vtHQnhL48t6bWQLCoEZ",
  "key28": "5auCz7zo433tvZxCAB8YWHdLwM4JZq1FYHLf6N3WcVoy5R5MqCMC5jYndeXpZwmkPxswH1WyVbGtfcTDwVVZjcpr",
  "key29": "5To9yke4PzgvnWpXXtbWGKp9JcBiqJEX6cRuQiyTmPfRfg4DuCUhbcxMowramfqDWGWbUwhzRF3uA9VpDA9LdYWV",
  "key30": "3e7Xum8tVZdLZTUqe99SnY2Ag7ycyww278eyjJntVpQsCzxDiYEXqEenQaKWBKNBYx53jmCwnbrWhxKq1VZBqpGh",
  "key31": "24wL9Fbeo3piBWjvhR9sJTi9YKYvBqdDnisGEBwBxDqGx9GAzjzqT53yzhCPsZfXMYZKpH1sJoUtzPLYMzh7oeBd",
  "key32": "48BAC31yMBzXRYgxbjyboZQ3tQyq2ASqvM7esGSpG3skPvMkuvB31AwD2dsZtbmZSr3KqmhfgpJj3C3nyR7YLJiU",
  "key33": "Z5U2Mu93x5BWLSputHjc9RdxPAQsuBfCkzndNNiqfUcDqEqiCf3e33igkXGVaU82m8fSXbcnJZPmhVhyr4dbCn6",
  "key34": "ZwdibxEqi8wRHSZ2L2JWLZBxBv1EfM1SEMREVfo8x6fRiypZfdQqPymcABuTgm71XXq5wriZcPHFLZJjbwAgFYz",
  "key35": "2Dn8zFue6pm9q7MUkrjBbRoBCHsQT7wkUYHPNknAZEUTHmvvDSW3kvfPpX4xvLm5E3iZjqsDRBfgd2dLLfxvMRby",
  "key36": "3U1NAoGX5dQzV86W3LHZR7o7DQv9jjSVjGBWkNHp9R72Wbhp9ke337KeEi3v1hcNRfGDWZp5E5dsfJRPsNkhJMKm",
  "key37": "5XNcsz6ppzkfqzTox2HfGVSMC5WEjPj5g788zSJvqVCRg8YcKgiaJZMCs3FyxdFLG4zKZQ18yMPwnRV5YtA36JoS",
  "key38": "CcWHoVYZs7uTNUzRKtvYWfjnSxo2UFDmQBjNy4cZvziy5umhgA3NUn2dwQzYnGJ1HapTXtucrbAFViSPCx6sjB2",
  "key39": "5dKU2eF56qLBf8zXLwqXqpdZxw5nqfdSHTKw6N8x96AiE67bYuaS1Vq2DejX65jNR8RffgRzxfgaRnbKDPzky4ii"
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
