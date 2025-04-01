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
    "2XFP9RuQtpDo6A1re43ikeB7Hze7qf1My9Haq1gwLc5VUvAzjqrpsAQgj3Kk92onWSa9sYYNaC8iN8AzV6KL67v7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iQ3sZbvXXmheTiiqxZ4dqZzcrW3XL3nhGKo3D7TxMKq7HikxibrxJ5h8CX9CHaAYQ2s4LrdUfs2UTZyiaFo3hc3",
  "key1": "4VWbjs63PaDdcAp1EkUk2Y4aTv2dUqocQ6G51zjmsGH2jCUG4MKHgSsC7ZFkWfNDQGbv96vRTpRnshXWkRR5WsGb",
  "key2": "5mKjLimjNsKrboLgMGkFBhYkY2YC6qqjXHByF4wk9hfczDrAV7FuyR3e1jfS92tJEWvVViVte5dRfoznhjiLKoEh",
  "key3": "4FqQHtA59HKLspH4yeyDSUYErHr6g2rv134w4fncnxBb12vU7wnDeLSiRvMh2zwnfeCELY4FK6iXH96Ec8uTGf8Z",
  "key4": "4wYxVg4suBf8NYU461ipqb8brFsVttDi4DVzHS2Y7DBs3w4aLUX7AyXwyP4dqCABpVGEAxM4Dv1iukgi8uWDfhgd",
  "key5": "aK3rEj7ntPBrabff9RGJnzsLeptMo7VjCTePENiW3qNvS4rnEjd4LR65VkKtbM1xoshZp5w1jDTXVGb3bcet4oD",
  "key6": "5TN4u8K4SY3fWt7RmsZqCWD9DJJzymGMG93zeaobwSL3Z8UknD55YZFPdgsvJ7yb9fWuzwXyGpyhWPVLNuQHches",
  "key7": "3jCEbdfKQwPLSsNTXuWpCNoHBqoZUTiGUrxKogHKWsmHnKYe8RrwidupzBK23GhcKpRDsnfsL52gMCTQM8QYV2Pz",
  "key8": "3NeSWicGdX8JQ4UA6juMceUgpNV4WevSkxzQZGSt82JVtpG5Jd5DCfTLtvv7qzbkiAAZxC9aKvAm1g8Aj2dGtY1z",
  "key9": "g9oZKRNgSB6SQD2yJBrAEC8rX5on8WTTrvg8HakeAjThgack13cwGWVnzA3Ac4KFgprSvruX8nESPqmGhTF1qET",
  "key10": "L9nzZNfaDUZuiZ1CxCyU2kwLAuMVGKaMJHp6LBcyJNeThUwbRed3Kvk1uR3LXRi4ueJkbUdHoK7Q7MfzviwcFkh",
  "key11": "h4FKRkqh9jadiZA4WwyZkUSi9zS5MnpJs1Wy8ufUm5THjHM11VRSRsVmkRqciwXPaWBAL53dB3Ki3ViQkvNNvMz",
  "key12": "5moc4MDB8NMqXHw8j9LuuwAkUzZWYaphqRyN5HrhVAQhiLnW6sgC8SWL45eH6FEjfEwJqMcBKDe6MsVhYZsn6se8",
  "key13": "3dV7i2Ai8u5CbY7ti9wwP1rDmauHsnFgMspKKn2tLwN6Mkhc8iWJuG14vLTw4G5gd4VQofSfUjWBiNFgq4KovT3w",
  "key14": "2TTobDb4gLwc7k2jKAnW9ygS3seaohN49gqQudtsP5ByUAFriZUHoTZkJ5oqdivxSjUxaNesort2jsWruvWVEeFw",
  "key15": "222zdmf8xUkLPM1UDBrKod3BQ2Hfg4hv2AaDaz318iNbovBQsJm2TKYMe8uT79FVxHR3E6VN9HZ77RhW6TzkdqFK",
  "key16": "4qQEVmoegKXNuTm62mSMGn9X945vyxwp4ESfhfpFYKJRg7qLfhTjLLCF8kHLTDYWa1yKnDiYboCDSP4QkrqXeRCb",
  "key17": "pj2dZKFm8nRFpQLAKnJpcyMBdDogh9vEFcvp4epJmVfbyVqk1xf2EbBndB1w7bxp448htzHhCMPdTtkaRrRzCeY",
  "key18": "F2DxCXVBnfTx5wue8fFH1AjVjynsW7gFb4RjZNNzshm5uLW8CU7wFKZSZBj88XB9hQZtT8VN5eULyghv4pGEffd",
  "key19": "4fpJCHQ1FYn14KpMVhwdE26X8jnVF7aH9k7KVfZzzqW8Ws2sUXBUJadvL9QCFG5qkmKAuDydX3ezieJvjZPqiSaf",
  "key20": "idPoa6kBkD8E966ZfQ1gWnckWBrNvtyP1pXAVfzW2yqo6mCA3vUah6RNcYUHdaFbjwWjB8wrpvo9YnAGUPyvetj",
  "key21": "tYt6rfKg5xx7vvYVMvEeKtcPPk33mo8SgNMiF8UDCb4hhX8oSfQZ96pWCD9BkYM2A8Wzri5bUzWps5CvyWpsP8M",
  "key22": "3vUw8ekCphRsQ9AYtYRZ794yFibqMabbbGcgyq2xUL6fib4iuA6rRcUu2Xsk9RxHKzWxVoXpzL8LHqWTk9u4TCrT",
  "key23": "4AhC4VQ2fKzVXNLXwuy6dRmMC2H4a1YEuoCxMbxUz1ypRAmjYLWMbJkNsurRrMtBartDdUn61ZhzU51cgK6v6FrB",
  "key24": "4bGrjUXuQncsK6ufzEzQrMRMVMk3jcFvtcQc9opG9o3S54NhSWgEfB3mrVskX4e4rMmXhJ8C41Vt8bGf6EWxUmu9",
  "key25": "5HYTBvVxmQGv21U6gek6oGy2A5MJ5jqaGRmUPVzRSXV5abtwa7h22nGXb1dTNGPphS385d9hRwBQzWTPSLTHBfom",
  "key26": "3KcNtdfCxuvMAMQQLevwtVQtv4SAxRyygTR5Y8SakojvaFz2kqdg3VF6vkfYfaHCBKFgCfUAz9ptymL7wsmUEjkB",
  "key27": "53LuuTSm8UirFAPx9HRq3Y5bShP5pskFyfUejoPAc5QKqcUzLeP8vYTDQTd462pddABWYrjv3kHn3PNSxzhp56Jt",
  "key28": "3NnbvRyLvd2DnDyWvZgLJcC8fxwpYjDsbKWCTU8iv4EumqCFH5E3AoS63MzruD6maPWKvPBA95hRxJHCMiD52hWh",
  "key29": "38qpS3aFyMvAyv5UJX8dSEiX7XAHTuU6k2seTfB2SFkjsbHxjdFV3rYsRhxd3AWVMnxFc6ALXknMfyAPEcVtaqk5",
  "key30": "2XqZ6svaUK5FqMpugE29wsu68bi5j1gRqLAdWMW1FDec8SV1rwJcg4BuQAYjvaX9j3WbRAJPmUxjwSEMcG4Ad4Yq",
  "key31": "2V15tDEw4WRGYJLFuq9B9f2At4vvHSXNd5qGJ64dtGJRBAzmSZvinW9bVpsHcN79wZgAvZBBpi4MKX462u2XNM4r",
  "key32": "4XMPeonoN4N1bmunG6n8PquRzTK2REManzhhqP8GQuK7zTLPm6nbBLjDMYUXnNBSbbMVh65hRRLWEdzvJFAnFWdD",
  "key33": "38n7fNdJSeSc7rwE6PYEGrVcNitzShpprmCbRjSdcKC4DuQKEcgcbcDYEe5itBR6PiC56oHarVntEYg9cQQmGbHR",
  "key34": "4Yhe3XFgwoG9iGukLe7NH8oX6GdrXttYUtRFAZUoWTTm1EECSzzM5WjVrqHaVLogtxpPVz6eqDQ9QNDyYySN5Mdc",
  "key35": "uNcMteTb862SRsHQ7WLgn66AkYi1eXB8ompe4HEpU1vMWU1xvAX8tjj9LhQEVB3NUMWwE37wTzHLmZ8nuaScpqh"
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
