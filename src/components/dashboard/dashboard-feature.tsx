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
    "4e6UhHQunF5qeaGfjkgkmdh7hjN2qDR1QbKGZJn2vmNb5dQMWX7aQKrGHsdKQV15vR6JodK1h7sibpxuaagzFojt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dfDJi26rdmqMwHrSzYfWe3YqWBW1g89KHzVgA45rYGGC6MMH9xwQp2GXRokmmRprdMeGBHuxxvi3eTiBGD57RSZ",
  "key1": "4CYVDASx2zZFAUvpzwjGZ2MGBJ6WXtKQH5PSBQRpgkURKc8qXS8Jmy8ZYK4VZLfd8NKdJfjW1zsL1b1o4Vh7Y899",
  "key2": "38bnG22Bgw5MQuPnhCKNPwxwi9fthq5chYrQbnRJwRnn8G8EnhCmXDKuPK7wzQZqWyo8whTZmenCnAF7nmvtdzog",
  "key3": "6uY2uFviE5JXBibnQKj2Zi1bXeXPdnTjfYYfp6n23Fa21LxV6Mbq7Lwiqmcuou1PGCsaJeP7fMquYvGkn9iZZL4",
  "key4": "25aDvD9aWCUhkvUyakooiEnLN2f6WZgjnwZ3cnz4LNaAV2Kg45XXWYqYmNdSuXQu1Whm5v4hJhe5pzqXQJ5fvkbF",
  "key5": "4aHmaM9A3FkxwbxV8Q9kVHqE6hixALEf58LZUAd3Xd376X57A7ESgLcdbdG6AG7TJu1PXj3x4K2wdu6AiKJGYSQN",
  "key6": "5JyKW3goJhLhrRy2MUKXychXdHQdcWN1fzXc11hz6NamqFnK2neKKfdbRDTXWPrq5V4ypACFJtnMYUG65juDTLVv",
  "key7": "5i62wdTrftvN9CvgCbaJRDHqyg2MfAk2LpYo8R1Z1E8PauWP8CYoGREX6zyb9z4NZgThJBQhAqCSf9UjN1icg5Nk",
  "key8": "59aoQGg3cwpsZbyqLJeu8uLqRyCg8z3CgQ5RYLghRytuCkShYXFbcGiKATbHUZpmUficEb3mSCVxgvvsb1QyxxBG",
  "key9": "bn93c3CAHudVY5QoThnGzqEaP77Sn2q4mywuJWovsrgcWwgySy6mFnfL9VTJWTNvuoc8KPUkDToJP7nNFYWwKSd",
  "key10": "66zkVoFZ8WxKwLt1zCDKeMo55SuFabHW9CY4EBQETrMMDYMoEA6oNPG1h2z4Z9px21mMUewMtVev9391sNh5JqyL",
  "key11": "4jiMZ9Th7hWzngeLHRZ3VBz1TuNrFm1uDGBYkgpMmxCyYTHxy3DmPcHmRvJKmWpvPcbUuLrQvzejKeANjTFRZ3xf",
  "key12": "33ymRaPGgNG1cpgG3acBQpgouwDBhVtLqNKYRWxTdGg97oi9dACBvPzDyNtaGFSZxHVvLihtvH2sVHyTSML6wTzk",
  "key13": "2quwyCcyuLjxtwA8xD3y63qe74pQShUWuw8erA11cov4vFzuQkRJ2FZ6Qf7frowXbGhp7LDio5sFxpsX6D2bTBML",
  "key14": "5F3jzqAquvubcyY79PHMxficfxkh1qGuF2Ecq5VNDA8apuyDwGEcLvPmH5BoqVt2B9KSytfGK7ASMAuMt6dwVVgj",
  "key15": "3KkUpXRgfhaTMQ9YxvjaGMu1vjuwK8RhUofdPT82t1je88q2kHY1fyTtbXTapk3wJ978e1GodCUCZymHkiBzqvjy",
  "key16": "4iJM8Tkqprs4fC7QEyqbGMwfRk78bG4YDbgx36LRcA9rLvvXj18EupfWQWamMk155YEnHHFkNPAX6vLXFTJAF1oB",
  "key17": "48QoNztJGjNRoaDUzYyS6DPuYfihTvHQJcqdpZdMg4nM88F383nS4Pk3fvQUWVmfCgoSdeZnbo51u5XMsqanCfi5",
  "key18": "4jzxnTWdjUCqn8APqzsSAyV3zyRPF81b2Rb3UsLxRY3MPZhj2QsUY4YWi9RX9hYbMMotsg2ukZq6jHuoE2aKJY5C",
  "key19": "3AASwPSqEd7sngfNWtbUxMzhRXPzDDweJnVqJHoPJszk4a1ho98VjNrCRW75i5yRpgDsMzbvR5vtXEXwdThmqGju",
  "key20": "4Bo8M6AMiQ4pKtLBXBNk5oUbznRDApiRysirLfQJ8fefAE4Jvc7jxj2PkhN1H3H8maCMZqiFTBtb4xvFj2vnin3G",
  "key21": "mDCTq6vK9MkVQ5XxpofEQCa2iNH2uXvCAYm81dVr6uqEjjHyqu8iw4Msvb933jRMPtdvHAqD4QW7gJHbfQRVeeP",
  "key22": "rGS9dVwjPnnbEZh8dPsdgmmspKyDTf7MPU9YNPFkSn99LJV94w8okk1KmFyxn96cep6cnbfpKhZXCTxfQA7jnnQ",
  "key23": "K6tUcRiN1gTtRYTJ81VLo5GEYAo1cHhQaAizFywky5GcUFUqNUq9AjdCGCy6h2Gtj93dEu9u9GWkx37Zpx5jTXj",
  "key24": "4mUcuv9Pbrd5G1sC6499XtCAJ8WNThtKCkqPCKXhDTziYMZjcXaVrDZARY7HEFFy9yhPunpAifwhvfSam8CuuJM2",
  "key25": "4XCXZv3nK9YzDsx2WmvPnsMM2PFcRQ98N6ZM2ZceXmwVW1sGhchdUQvJAALLjMf7aMfczmAa7ZxkXvW85SEL8qRJ",
  "key26": "55cChXVGFqF4Zt4ytsbb6SvPmb3W9vUxWN9XBPfbXYVyRPnvE8aAsxFUCZmppXwgfULFo8SqRyiCswLt24nBcd4E",
  "key27": "SUed8h3VkRst6J4wBQQ11mc4sqWHhz9xu4MT7XYgKC24hoaydsnFRg1yPgeEUDn5vpBKw4Z6DCZxi7RhjdXmPQa",
  "key28": "2stSHvhpyqwr2nK6rD4y37dagMJBsRJWvxa1sy2Hz7q81ciJ1wBCpiqgPqtSqE97FNYsF5g6C6VkiiCfFWLJDzL2",
  "key29": "4bvHbExXrVyFZrGA1p15Ps3LM5T8aNVQ38YzoaAi17fNx3P1WEdBSa6PxSsktv1enDgfb8GKCn6LfWTMfwMabUyX",
  "key30": "5kD5pXLD3yv2YSQCwEjWdchKhttEusuCGqT3uxFSP9v4ow7CApv5PkN37QU2Q5UDVKUnsSm7fDypGhhar7mXTUN8",
  "key31": "5o8nA7Wr1u8UhbHY4C5mMEVVtWcfzJ6CEDYHc5ptYDFubfBuNeTGpG8LDJwNoMVQ5SjvU3SXpCDZPxX6C8V5Gsj1",
  "key32": "3a9P5gcCYEMj8QCng2f4QSuBX9PhLL78JzbGRgreBHxBesP1kqrzPw3YgVcc8eeAKLqYwB1Zzp6Ju1omN7KkgiAw",
  "key33": "5aQKFYJrm11s14wjw4Vq7ce7T9V6ch3DcQcohgtt5RrMvvYi4gVzmzfWMLMCni6EfhotMfuio9QhyJeJU3F4YqCn",
  "key34": "UfMFFaBbgA9UDDU6DRNb6DXC2GHL5xiPkizwDq4mubkCuwW32KRjEd3yuRedzx1oANkQ1of1Gp879Ww3Z4Q1k44",
  "key35": "2nqeE8jepLRjiYrsmGV3tBK2moV28M8X3nPzBfXXfVtTwUkLEZAatXiVZJvhDuefBjoyLT9rY2Nzp6VWdk5pHJkH",
  "key36": "5uXRNgbVcoxnRaS6RHwjgq8E6A2Yu4cBhfSBhxjxdsWJEVTPeQvry1gUoLs5b4GAdoiiquxG5pSGaApEhqz4xuxo",
  "key37": "4F6c6dVz7bdJzRsovHqZpcQacMra87t8WytiUV7y9UMTBVQShArg75W8YQdNwkenuM59aCsBQdXrgmt3JMUmePWL",
  "key38": "syqp6vzwLGWw8w75gv8zsEqgnYFQ2oAWUNR4hKuJejDeGGkABj8J8pVZnmXAhdY5D5Qe9eFMUq2tQmGXNEUcrww",
  "key39": "QC1u35tnueA7u2t1S9xepD8eX4UL4ff7S8tPdnTTTLjBbZJdKbnatqBQgPfamBU3yvuhZ9TtBt6bNMWYRftoDKG",
  "key40": "7yEBWB7TgHTcqy6bdTu4wzLrNpjg6WszybAumPocqDXeWJr71QBpCDiXoyXCwHCZRord93wz74yqbtHfhdVWEKA",
  "key41": "4zbKnHgzN3huDYyyurRMFwiyQSuz4yHMe4uZdka7DHbfQ6YpDVkPNWDuqjPpE36MxKxhv3CuiekK4N9ZSKPpyhTq",
  "key42": "4j6XpLcxi7hj7aW92F5cjw2vsfUdcUXURjNgvNGSavmKDUTHCVsmjvFjRD5fqWuiNcWbgeQimkuKAWx4TBkABwqs",
  "key43": "2be5QsQYqFDKAsnpHoP64R2jkd3R5kWUh2kgsxzTNBGBSnsKdxw62zJpY7VQr4Bxzr8meUumRRRJYr9fSqNeYUMy",
  "key44": "56Ek3HLkNXx95ppCfhNQUcn8wF84JbrH1crCPBWgwWEx2YPG4XLGaQB3zockSxYyoyj5WUj1bqnAbRsgBkD2AQt4"
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
