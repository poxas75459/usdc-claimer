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
    "2RE4ZuYSD2dcUqRjz5wnwqZArVfceyttuy8J4qCdmDGSzpYZpp8qUwPGz4t6J54F8LYXx3d9jErP1quxSLCNwSN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45W8ZjAnDdk216msk8n3m9ZuKGjCnGJPJDoxXjqU8fAn2LTYJNMK2r6qus4gdJDu53tt1H4zYUraNa9D2MEaC2zb",
  "key1": "2N8LFMnqm3yP9pkRF89X9LA5vHJJvSJvJ7fdDuSLJPEnVPf1L3gMouVq1azEoCUFGmojvv2zEkhZTATBmosTn4k1",
  "key2": "8GfJ2EpnBEx4zze5Lucf3Bxwsih9wBcUaHZnWs84ouPCKqJgBxytbsrSNQMJcws7gHhqZmw4jQq6MEj4SqZutph",
  "key3": "4LFy5DLqQ3zTH3qUFukuDMdemMvh4hNmcTpQHpQxVhLVpvSJvhW15s1vAdzS9cw7p8ws8X1zaQYWSNbQrQJW4V45",
  "key4": "3weWMpSNatxFqnWyvjFCsrr93YfM4ymoWGqPxp1kf5eH2271DD8GLecWE1BxjHCX521njeyx4Lvmz5Er7XcP1s4j",
  "key5": "3DFJnz8gh54x9KkAqzXLQcNq4NpNYfGeDDiZTygYCm9RtfCb3gw6y72LTDCVzBJvCyhUaMskkWZ2EPSNPBQY1cHd",
  "key6": "35BpemFmsMM9gmBARqKh5Ekbs1pGQmUDtSA7wug6xP7NotLYHPrwnpFVHsnVdJVPcTZyM535vrhfmwy71C4JJshk",
  "key7": "2swVr4m9HAUZJ98uaUUb33E5bdrjfE8SLN4eT4SaeCJ7Vffa5kiSshTqCf5sCJtoKDqxXpk73GJ7sFyn88A17st7",
  "key8": "kid6A1NcdG2v76fLpnkt7DRPwju28TF94vsbfEtwJnefZHeVom5cy3nD54B6r88qpphG4Mk8oScprMcPcQ2jGaf",
  "key9": "2kDni8YW7hJcGiFQXcnvZtbgmE2XGrzQtQk2j3P62FBHC2cZXtAiU4hA2X5K1iX71THEEtHbFBsZvbpUXGUX5xBj",
  "key10": "2tAWSDbQv9mDFY8gRkya7hvBGBBMbFfzt6EQaN9Yx8JqbxMweLtDVycBhGDx5UQByiVxrdShJxeftmaLqyZEsfbc",
  "key11": "2pjV9bYe3AK3PbEbb42DL1ZW5nPL22PDTmd2MNDzFGGyGq1nSNtrV3rZzJ23quEybL8YsEtRUfAr9Rg9FtYpFk1e",
  "key12": "2ia5Q8MXyWPnWvemv18ynHRCxm6ZtnqYnKSymY9j7qVGTUo5rcQ4bv4mtCzfgbKKYjyb8f2V845XRqGmrznAK58W",
  "key13": "35TxB94Tbin3u16JQCoYkv2ErXxDSJ6CwUMwJiRKUsZKYBKX8nkNXqpATKWGhHht82A6zmdSVmRbGKedsuGtdpgo",
  "key14": "3Sgt5Cy5aX4nbgarMPZ9str4o3GbqPKzvhf8r1tbMHHeUwtLsfeWMgLdzpzpaABAfZUhQXdRr5nV7zo4HBW47iX4",
  "key15": "39uz2scqohNQjvzM1KkhTQNKdB45ftmgRjEVD9jVtf7NPxSmJ6KGE5DFEN6Aa2Np4GqmqRyvKYQeo6qPu4VjXCoX",
  "key16": "3owEhZNtA8euTYu2zxXgZ5w5GqdBNfu6KDp5Yj15W5iWgTamsGgGx3STRrXwd2RqSwh1W7nzguhPAYnEtZqHx29K",
  "key17": "4zyagK9DUMt33GJpUV7phyhsxvRTqJ6BFE16gU8MmF1Zg1UTbRe7CzESFww38M5wgeNSHeSGgab29NCVJgdLq13q",
  "key18": "5MchqB2px6RtQ83b49Ef733nVQPS5sm6FiSA8QLRW65drHqdrutBhjEx6uN6abUHt5cSAxZnYs6fZitHwRHiJMFU",
  "key19": "5LDiJC4zUD5YKKP7N2jn4XrMnJ3o9bK9i3eWudPiJjCvHLxVdH6Bmgvmbk3VCPoH2bawPKiKtZd3XXuMT8z53iuJ",
  "key20": "2jVXM5uZKjTpdmttSMZ4wza5ZSdAqjHemGEhjF3uVQyEGtv9aNCFfMAeSGiB1cyPQFqdGggG6DJC99KTrZNWwZJk",
  "key21": "3P2CK58XgU6BdHqCKL7afNBQe2oxyKkyyRkVLzBzsg2G6s5i4Rpy41ChcziarQ19VbvnawVdnjjrtnapTdizotRZ",
  "key22": "595RVUWnZ1jnbPS4m39U4efJ3UaVrrVQUUuXS9bUcuWAcNwrxSbmRm2osq5Sw6E441BFGLPiPE1Xpp15CcpwwpLJ",
  "key23": "2Nrjm4wh189NmM5XNtQ28EWAWURnA4t7e3QQfBcF6hgz5dPaZbR7a8VFyagwT8318VrjZW5s7KJaywuSKXtHpkKu",
  "key24": "54nT9dzJ2FvUC1U4LMbKvx5cVofzHH2mvm34zs7TowVRvqHeNXS5JNGYXtoMuwbWiA5Sk8mMCw2byeiVVtgbU9pd",
  "key25": "4SojUDVaLSj9bazsUqCU2KTQvHM3Utw8xmeTyq4JgKFZPCgdCZzm1jKF5Hh1qBiXfodGdNv6QKRNQAevBQkHQC2V",
  "key26": "3K3jXKrWdy43ZcisG4RKZA3jnrSHvpJhm5xeBdYntr5jcJSLgkqvyAdaGJ3D6WSQ5wa44bCTVWYts65cP99N43Qu",
  "key27": "4fBjDeoE85F8Y7TLfvDexCvxCHfUg1ZXgZF4y4gHqkpNK4P8fBkkEP8Fzr3Hhogtujc9Mfi4bHDaqy1Dc8zB4Pcx",
  "key28": "2rWcvUj6QweujzQ3pkrDvV99S81sxT1YTrPyCJiUnJmETnQ7LGWJ3R8VyhcFgZGoKHm9cgFDnRpYwSCDChYRNARw",
  "key29": "KPVfDq52PEZdraasMdqoM3BtvPY4JvdLZxtAtBZQCKKQpwfRuMKGHsU7wfXoxVJXKFbUmdZENfRwVSvCt2zeoWL",
  "key30": "4fPL8j84qbXax5ac5Vas1c9yAqPAMfupgBTdr5BmBZuJstHBDLUHVLjSU3uypMWxPW8Y2Xwww5NNbr1tsS5evQ7y",
  "key31": "tba9jWXKraqwsSZMCdnxhuJc9VMRGir7HDs63Wgf3XFzMLvuyzoCN5US3QWtHbaQe8hrh5UURgmibKhF7FSDSqc",
  "key32": "4U4MHvs11Lyz4U78msoukT2v6EBVpKQfUPM1qsg7vaCMcZ68v4veXqDuvSY7boFxXmEu3PJLBmWq2ooDkxGNEMkU",
  "key33": "3bNNzwBRjXAJeT21AmS3iEq19aXaXUQfZoJWxaD5TBYWZs9ktPQDFA5sgjiCWPAzH6JY2zVB9dkMWXRV2HrtneDb",
  "key34": "34Hx417pgSmb3Wt1ZE19hjsVsVUa2Kz9XH6jvCv7pBcdGdgVf3c9BRMss7TLHa1EYde9LUf4Hc5nf3AkYE9Ct1JJ",
  "key35": "2GezRU38HVVSZNe4Bfweyon3zikG6iQQ93xGuNdP2YU5Yyk3186UXwAKiNpcCdLzvwmWuyC1wP4YrJpxp9DjGLoz",
  "key36": "2p66SLFmLLFKnxfLMkQ8Ma3vDrf5HZMh6bXrZLhCa2APsMW4e8SS7yCWAjxmgXy6YpaiXAXCtM1Jr7wE1o6AcUTj",
  "key37": "5wTXuRrGuQpU7q1b6NQ9jBmRR73DznG1MwF5N9VDeCKjNDLvyFKGx3CQMhvNK4XLBcSYdTodSAD2BogUVXyCgtgH"
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
