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
    "5G2JRWUtTbAvEPddGmxZBr8mLF8RGKLvvMHinfjN8LDDrVE2eqcn9wt9XcTT85t9LPUiRYD4aM86dX7pjszx678A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bw2hMfykTE333uBih2mh5R8hU3CQNCG4JU5RwUaVXWUkaCAafsPbVbXBHwLMSGphNoLdR8aSUy13n5vRxcn46P8",
  "key1": "5URuTXX9jMg77AT3rQnYx6ks7ppBceGqvKSdYdkw5dN2FXGG5XYY2ssywQEtkgHJsPSC2eYF7cuKSp8Vau99D8ac",
  "key2": "5sEs8cvknu2WhZR6z6jY5LPAtBkfuXTyraKFpYEpY1sNA2t2Nm4tqo1sM7dngCejRh588BMiuEmrWfEdgxwB38nt",
  "key3": "67cUskV7eoNAWNiUip9u8w2Q3JLpzQ7ccwfmBUjED7rV4us5szDazAbjEQKwAh5hFYjkuRKUZidJrb7cLgFXgen1",
  "key4": "5jhxgCnPhxQDF87Rxp5ZFpZMrzdK1tcw4EPdKLwsdGTPQYaXh61N8UAzDt46k9jSWZ5kbURQBXDDdaYAMEaA42wF",
  "key5": "3nDUQUVkqRfYXFbCQiHr6FxZwf33pyrDhA5dfmsQCEGZ8JLRp58SgtA6hr45MEHuwZkfQKUwJGzFCrzHDhoFvahD",
  "key6": "3ESXkun4szvsDcGDqoqRpm5uG3Ygffp9NFkoyzNPmwwhFQYrnaCHQMQsMEdTAv8qxSkWgyiZqsWP4sapFgiiM45f",
  "key7": "2dNPSc55zjqNNHYTcRLZYn9zYrMybpKvMiWxe7FYzEZNZiRmLguw86tkV1ZuvXXM3g8vHCn1kBRenbzXS9JP7oN5",
  "key8": "3JtjzE9P8odybhipfZvV1KEumvUpWRPSU3UdpmKfcSxmg2Df4pSKZDqm9s7vVdG7rCa2gvdwS3CwMx1bERLbTeEj",
  "key9": "2hahdvTTQzL1exAhWnwDzuVSC5Fiid1KM42fmUQnc5W9aUDXH8ZC4eFqegPYRhNZav4whq6d1duWghaHbVGmoJr4",
  "key10": "bMei61TVMTwVD9m9THLmYrj6vbRWST7qH5mz3D3uJf4SjcS5Eq4zBKczBhNKKat2zNKiguaMdSn6h7tRfAn4MFt",
  "key11": "2CYBmGiNPDMThARJwfRd1X3UttPNhfTnRByWJeA4RENMoctyASxNcZ8MDpobN7GN5BfDSAT1Pu4zHjKwvr1TmTMi",
  "key12": "4DPgty5iWacgJws7iasLLayqe8X4PVWEAbsL4BnB8WcYKZeJGhrxLfPfcMwhgUHyCMKGzgcCryUWRMfFXpwQZ6Ug",
  "key13": "42foM9uP1sqeYwYkHMirKNBVR5zjQ3HXW1Q9zY5ykEJen4Pizsw3CUA8abiK68o8diEZQiuJRAYyyMqo7QXytVVS",
  "key14": "3WLe4YS6HZdEJjistc6t547FxCyxP88YZ4Y7nqm7K65PuP7388wrSRjJnpqiYX38Rd4sx8uGZm6sTfEeGeTuGJ2d",
  "key15": "4YTYZdYVAFWTXncCL8o6JxkEpfYcXTsnBD66p9Lka6rXCUsbsQvBC9xZmb1jpg7hc9aMyVEXo9cYhtY4H1JnAMoA",
  "key16": "34g1rAbxVAgt7faEuLRCNqZf7D2mo1eUE8Rv2jkmwFFDaYtKRcCXfaekNhUMdaGQbabKCz8T9b5RYktoxJckTgeN",
  "key17": "44R2jVhWoexHCQU78f1RjWJQRAqp3hhTTk9G7fseBAjzQqUENndvskcbX8darDMGMmPk1dxjKgQMLCTDgGdUNAcJ",
  "key18": "5CjShvwWWoxd7KAxKBX8kLsFC2uWXnNLmpbWbv5GSWdpWchHQnjQf49qvYD27ukq8s6jmi1Vr8m23EowYRLYPSXM",
  "key19": "4qz37XwvXyvyAzPJg8DbwJM1R61TCBzWZv8xfXHhL5PX4oUU5zv7qvCMWemccDqz9QyfKcrShVbqu7QwxwyhgkuF",
  "key20": "5csjpCVS26WF5JehUn24uEFmJk6o8mDu6pQ8WjHBPDUSH6CR3nrrtu4SU5b8Cn1q8sFyfK7vtkSLg3VNzEaWbCNB",
  "key21": "cBGTrzCDHs7qLpjCXf4mMFhbKezszqZFA2DV9687G7WdADnH86USppxdu5hZkYs1mthCPs72xA1ZkkUTB6h1dgN",
  "key22": "2p2xjGqo8uqvU9fhpAu71pfmpmP6kb75ifweGRqKmPWET44tUSX44niBkARdbpFFSBJAS3hkjhDUn5LMwKwZTNa5",
  "key23": "59q9hsaR8Chm2c8enyah72rUx2Kb2MbHKi353Sq1f3bZJ3CYiYxAzymEkCfy3ifBNjFAteUM4sMifm88ubTLM3Gi",
  "key24": "4mgNRz3k3a29G2KQUi2hQaJC4oKjgWhaf7UhxzoT5cwNnnYsP9VSJLZJHud3QnCXbvKB5UQea8hFGK8fw1rcTUuw",
  "key25": "48BqBgZtRMuzwtpyJBSv6SXNDbTNhWFtRfdPkXwpuo7WnSc4jt1fgzXzg9HgbHxUffygYmUoA1SsVpAtb6SBbYTw",
  "key26": "4xPonFs9B8BP8av6WSXuXf5VMzZ14neT4VJjGLWm5heMZppFmUC1gyoP7CPvCyysk6b8reWA53PCxacUsesM4rN9",
  "key27": "hMYDDjUS2P9ZNDTxNQDSQDCa3mvebzrNUXh6BRtZxQt1fR6gEDocYPGMuK9uo9CwxuTNq3DQXeQUx6R56HPPX6k",
  "key28": "4ruaJcYN22XiMUzFaqkPFANf4HyG7bN4qwg42XahNzsqJD6dCggF3UAATqXVgJHM5ySRvNUdjE5s3ow218xaPwja",
  "key29": "2oYTqzyCq9ss8VGP97JQS7vMcakfmPDNi1nR45dubQmaz9W7tCNEPFEXSmh3Qmv7AburbgWqcyMLytXB9a2P8qL9",
  "key30": "SPKUnzvdZVTj3RCSkHTZD5E1j3JbL8nRR4Mh9Pyb1azqq6McFj5cHfHnAm3URUEAr5p342gMjMejg2cgf9qHxBH",
  "key31": "2gnEdEi7uWECZ8LzijL6zdaBp7gptwhjC6wjt5ZnkmDNyh4RE5zjJLSWLwMbwH48mcF2MAvW6yh9bE9JUEiUU8fi",
  "key32": "kqh1caoELG6KF1DYLvcRvZQU5kPjQMsNZ6jttCTzDg43rJSHkjmviKgVVYhhuSb1VMKraG9EfjVmXUuMZ76LawK",
  "key33": "3duMesVDMaCva2RV85vwHEyHHVupUURM39ybQfq6EQGRURzeov7GKhJRtNnHpiBuGykp5gQu3D6oHGRttKjBEyah",
  "key34": "3qUjUkx2Zxoz1cNs2jzfecSdXYPRNhD5vs9ko9S3dB5kAvhKDWLSayEoKd2VR68CLDnNGHnPEoVtGcVv3E81wF3X",
  "key35": "yN7mLfsTEew5CSDBdLw6ACZKhaaDsrGhkJauAkipzNLjWBDAqNUd6KAdpCNH6Eey5yeX4ChZL2VpYF7XbnCYDyF",
  "key36": "PXuJgAW363WSAjqebPYhQaB5v21XWhVp5E4iuHq4APM74HFZbqQeNseN6cy3qUjXJxT4x9f6uZCx44Zd82Kjb26",
  "key37": "5YPfcQxNB7HEtXVtcMirHzAy8r3Nvu2HwgSie5PLFr6kwbijE8kxE64Ug75fXbXDUwkcX5eTH4UcRX5u7DgFAQeZ"
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
