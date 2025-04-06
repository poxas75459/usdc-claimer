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
    "43ZoaLjinJ8DChHcstWF9Rnf2Uz46vr143B7jUaHfazQ29t6D135zBkrvenMRqnY9QV4JJcQSH2jWxVgR4EAEFHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cP1zR3SattKPMSYrLzGedEkgp8TTZvsbozEW7Y6PHfRHWfPsgf9Eb58YBPUDP6LbWeMKGzZaG7c41AxHoEKMmxB",
  "key1": "oL2p35BVmxcaVGW8VUsGEmob2qi5GRmxAtkz23YQ5HTCTUNbEKBHiDRQzHmRaGY1YNj236xWsb3KiBNSKKyuwpA",
  "key2": "c6bye4TUJdtPxcH1mw5svzSQCTu3xKN8TVaAhzjQuATzg7ZNujP5oGCiy4xGZ9yZzAozZ2MgKBReZegGemYH2hu",
  "key3": "4YpnysJeXS3DHB1Lg6eVeeYMfr7DYtJue3PA1qq45Zft6dBCVjb4hQaNfQfPP8f1EacbNKg3R7daUo4XhHvjfbpc",
  "key4": "2Bk7rK4NpRuHCA7vURqaerEF7hpN7z6ZK4x3eN9ffrL4N9aq9k1mTQTXJUtZspTpfjV5MLV6hudEckLGUDWVTxfy",
  "key5": "3HNRKmGenXZDW9EaSLf2mqt1pzeePrDiFwP2NToEaP3Cc4TrhCbA2Q4HTronDTDbAAdws7PVP6KgRwQq6cdRRzX5",
  "key6": "4dFBVkKKxXXkjzDpVF8dWQve2sZrZjRcx7AphdnZ2aksSUaQaqLtXqE5GiVyx64xahnw3Zh7Cy5wWq34CZdfmo3R",
  "key7": "3h8FbG7YPuXMpJ91CiitA8hQJKvt1yvEDydbcFtahmv3JuHCBSu4S415ubEjUv1EicVdsxCaDBEUzMVc4xyNyhdY",
  "key8": "5kRLj7sKm532oLMMEKvG1qGvy9KJvNDb4xYpSP3bNLsJkXAoxAENXR9bvUk38dLLgAtPS1nEv6tP19DMHAaSnQtm",
  "key9": "4ejGSbZLGXbXsqaMoFYAeRK2qt9fur4Ba6nVjhqajZ5tHzMK6uXTe61WjseFDDjgpKgYV7aC5JzVCETHNSS33FJm",
  "key10": "65SRK9occFkdHkXKVMsLc7KkbYhRxkksW95BTVkMEUGwbTKUzcfTywWfpfSdRuZJXgcy9MiCANU5ETLiocWg2u6U",
  "key11": "2YCWfNh8ndcgBCuxHS2x1awRWh7SgnnuuiBE9ZLcYGBGxzuqvbioFmSF6tGdAoM92GLFN6X31Hx5XhBzFBnnsSbL",
  "key12": "4UtTvAezGa2AyJjryqFys3RPEfqMEZmwvN3caLxKp5NCRWhMbBHgxLN8i92391PPtWyiotLafHYcEwJuocufqMyY",
  "key13": "33J5UyTBoAYamMHBUKSACpf1f6yd9TkhWTHSr5S8B8LggVs4e1svs733K9E44rEiHRy1BUtEyj3yjwy5jJjWSh9c",
  "key14": "351GUheBSdGPejqZ8Wte1U2eKjSSuT8MmvQPNx3hhAtaQ4FDeMKbeTRrds5A89imZRN6mtVxuE6jzcX8uvPcP6z5",
  "key15": "4EeezptnKPFpSLBdLmj7SE6oDERYqvFHN7i2AqNkeojKMkNJzpX6SZGkxJw24WWQpiN1eaSnUxAQNNhas1SDo5zA",
  "key16": "5FiKXLYKxcW8vQwsCJ7gtVoRobk1MsHnDBU8SNL5JJ5uZePYyPsdC29pyiTZW7LrkD9Wa2xVTGYRV4aYxBHDDJ3x",
  "key17": "Bepb6y2YU2x19LSdDWBFqrBgFK5JVggpDc6EgazJ7UuAdtZcqvpcQXkxhrtFJQtB443JwEDGGpq2KtuGA9qY4Sb",
  "key18": "3eF3RnTuwjEUxgzThUo9nRKbKwjf5dVLpUimLGoUpBGqrqaoSBK6rMjQVX1K3TzAVveLT2JA7KpYkHcc51RxMX4g",
  "key19": "3uw9sJc6Y2ZP1Rs8rb9amxQ1aQ4yd4zNCLRM6vYqjLYJh4PXPxQx9EJKHM9qjnQ9U1BNQ4nxdyQFMEVSgKdFBmuf",
  "key20": "4gbX9xXhvN7VgwNizMrYZnNnbhwr1oRYwD38PqHUGSWCSN857QGgCkw8WjWn6pNxhhN8cEnJQNVMmkWFexdvmyvq",
  "key21": "3jEGQLjNjnuUucfzBy6Z9DVKRs1VXPufTfRceh8g6FJeRPFeMXmo2f6EokaJb461ovDNE5Ymc4VAZaxRdRTEroHq",
  "key22": "2SLYtggH7Fn1ehzFuMc8epPmfoR92pvEqSUde6zkoVxK1GK3NCE7Kcz2mTLDd4RxLAj64CjZJ7gWyVkHHkKeoQEV",
  "key23": "5dnDy5e2fpMbJQPMgngiQF4GXmh4MZCxFadvyhLqEBR2tPn6NpZ9bdZt3k5MyAb8A8aAjt4TNFqbM9FLAemsNsyW",
  "key24": "5Kk1sCxDPTf9W7AuEnoieojuL4XJQQYBGUudKvSZc6N1zbeyhCfUGQH5EWVGQbRbz6HJNRN4BqJW4FzU962SQwE8",
  "key25": "3PeMTBg4peTZY69GAE6v1fUJedrqFGBqEtuhdXGxjqaKm7YZrHDxQsWY4cTxKP4Fpjx6SfpU4PbJvqh6WS5HsHXb",
  "key26": "5vYbENunh2u5oXURNPTssXRZYy2RunwAguY3WjSJ61A7ocH85j2jYDJ5VNvgjeZuzSkC4auvNe8wuLdFjBtwPifX",
  "key27": "2h98Qu36hfqSSZNL8mFDbHCiZvRUWUWTtoYxE5hZ3YfyxZfPJMCHPvh19KY2y2nr5kThV6bpFM8PvjMFCW3dL2qw",
  "key28": "2CiqF6kg1RGWZJhT6J8Tqp2Gaxf7dDPc3d6YF19SjKfgNq6UaUQkaAmPTk3Mvcg3W9i9VbMRtEa3yYCaDxtsUUM3",
  "key29": "3hb3yqiaqQA3wPizsyZRAvXKWJ6cEEL5XrG6Bth4W8toSMWbbaohfp6PxMHgApjvcS3jTS6QJGamhT1adHDQhzBR",
  "key30": "5mb4HrjvqRk4Qb7LJBiSYgDGry7H65j59TseaUKgbjcxZuFcm2Z9oxh5JhjxkDcA3PgwA7Zi49rUChgU7TpHrP4N",
  "key31": "2ZzKEtvhT1WMHf2mcxu5v1dBdxsFFFkdREm1zKsU5Qp216ZhJ3nimFPghAm4VhFN4n99esV9LoskxWqbKegbmLMD",
  "key32": "5VohVj43fh3YK9KgPQLeYc5qhEKcEGD3UyJKK4g62rTDxkrXyfngUNr4quTrJPFrVf6Mnozgt5F8Mn5YwkCuV6br"
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
