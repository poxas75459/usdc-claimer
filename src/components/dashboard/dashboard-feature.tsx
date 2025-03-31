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
    "2zwqWjfbXRQKYdoaLEuhZF1XZgMvE4AjKjVq5mqhiazhS7qqKzufQvgP99VhMYq7tHT9iHmCBnQfLC7BhW7BNaqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4egGBYaAGn7DESn7nxV8Y96QWt4BBLjpEb5CxTtciQ9473w12477ho9cWjS1cmXVoHk5RQVH4TFZb4QjiDpHFa1c",
  "key1": "1r3GaQFWQo5Hj9zpLXkeJs2UnDg2nW21qV72PwwDM9MeZp6bhsDXcYVNwSAD2EKr4HR1iAJQSVV67kJrNBDBeNn",
  "key2": "2Q7Yq8ctRnuWs24Ba23wfm64szmcAmsMkzVfZcinhCJkFLkTgUDRWEGrFJm4mBZ6JrpJBj4UzHNjczGd7EYnTf4a",
  "key3": "37KAjzteijRsYTJNnubg5pxkss1jCW3ZTE4CJVQbfi241txx7XfS7i6J5QN2srGeZYpwxoaSC5Zx6TLVZN49rgE4",
  "key4": "RQRF5a3KFMyiKhtAkCaonWzDD6CbUA7UachM4czLuALu2CkT2T5N1P9wDdPKnNyCuAdkUckvAhWuCqfLj45FDW6",
  "key5": "2x2bCVFTYYpY4TDzzt73jLoagxhs8tEwPYCEX57WWjjokMJjDNAbjB2Nh5WakbgedRHnpiwfYmMuPprjz58wf9LW",
  "key6": "2zagwMgBN2iqLhzfwXNbACTCQw32EA4dKD5bnURUJHRAYHt1jYxa6jMsNQPFaCFRyE4JWMbvc67ASfaSUBKxYh9d",
  "key7": "33miBmZewhcgc89udB6DeeDsD65NQNRniiZfwYSE8ueeeUZKKJFQLG9dgJ2d1RvfeKxyaG2UPPzAZv2HbwpqbKR5",
  "key8": "3xzduNeBK5exuiYNnnEfjWxjQRVnxY8cvLXAjf7ASCLNJP7iNKJv73CNfCN9H65Fay5Cf44Qz9a9vouFvXTXZhd5",
  "key9": "3AG5R6gAnNru9iLfPRVPeCTPgYhvhH2ZLJrbY677asaEZndQpQEmLpvKw91RjLba4aBQa5WwuJ95aECCGLpZSid4",
  "key10": "3g8ck7oxD4hKJp8fGD4jkeLCAjxbgL6oxgxaYHBEGxnvrn1rnPRCLqLRioLwLToeomzqXJXzTZMDj7Zd1kEaXrKG",
  "key11": "5GMH3N4j9vKuSLT7CoszZvZgZVguNFgkuTxSBWoMiHJfsfGP7M4D4oKkYXUGozoGpuNbYs5H13x1toq4nYiW6fA6",
  "key12": "3QzEij8pcqPEAY65BktVVvSVJdPeasEfsK7qo2u2EpR2XhezeZwpa8mxwQrEQibi5z9n2n4n5GS5oBmwEFvgZopW",
  "key13": "55dC7X9wwC4rMytJCFf7rAv5UUXLWPmvRJTK7Mbkom1xMgoUosrQVtoiu6abJWXayCPmhnd9aVWDSDVeu1nuggco",
  "key14": "DbGXXbQc2UvcoUPGvZecFDpMSi7T5jkY4K3fKtKn3GpPVTRDSKdVQwxjQkrcbPGy4GGaJMLJbEADQA6t2EvhAUV",
  "key15": "hyYN9xtkQiGsrznxoZQYkQ27Uc6totte53C9yiNkvseCumdpyMwXViGAccaXpGyaqyvmen148y6jUvijB37PcQq",
  "key16": "NV7HAENc8XAxxi3qzX4GxWepBUPmmi1ZQanck4w4vcppLf9GEftqEgH8EU81hR2fUkAdsxpGKKqKCXYRCLoRo2s",
  "key17": "4SQoZK9boBuARixEAKLFM56EaFbCDfhqdRuUvDNFmJ3agJpbZRmJc5c3e9nyuQUabZd3YDirLLWJ3pEcWW9buwC9",
  "key18": "42s5d5UqUWUfTGRvUYEpDHAez2qg6sJsSVbmWmLrxrpabhonpgLutkbaZz6yGNyNgNTe8TNWRBsEAVnX5ex84GRJ",
  "key19": "4gXMevg6wiBddRX8fhkVxhu786gf4zWZmeLhT3CxpeAiR75kkGpfyv7AQ6jwfPDZHbe4HsLWFydirERRX1wzzJYR",
  "key20": "3orsedmC1vGYr6W8oFKzmW8eS9mLnEzEFRyiPv7Luz2PncDcbdsjqM7CA6HKDNxyQUeefGh1JTPej1mG5VYS9q9P",
  "key21": "2wvv1WjR1nTZraXFGb8KkFwC2vjgXFNB4RVc8QD4sfSFkrDxnVX1vmkQkCTQBVSxMDKwk6XZNk2dwHNTve7wSpHn",
  "key22": "4HVMGwqMHRhuz6J6jMQgPTrEeY7RGeqtr9zVsnb1Bze429aFJk7BjRpsYkF7UNK1YzJcLJmf1MRC4H1xJrpEU5yc",
  "key23": "5WAeeoci7qhYPr5qGf6ojKPDVy8xsgcpS6BM3VboNSN38UYH2BjBhTKy6iJ7zMcGxV4qdw9XDLzBJseXKnEPY6f5",
  "key24": "5QieEG6i9ty2ZBP5GbxFkzZndsYniuAow5JrYfEy1etRCzw7joyinbFGQGpuV6YwxwA2wrL6Rv23XYn8j82J3fgH",
  "key25": "5TjRUUDcGVX3ChQs6vpZE3rsH5JRzkzpLLV6KA56xxavLwefyBMXa9y6mGJHdhMWNs26JywUfXBeg9V1r8fRyVNd",
  "key26": "sZJrAMgMn7Vf2eH6NWanFMcvD2aVXzWc25W8yeBRbSAzHJEiuwuTccvZEBHMkaSYiWxGYxCoxMArRTLq47HZ7XP",
  "key27": "5FYi77e2fUv7smhsUHqhHWf1Xy4SWLBgitcdkSsAccxso7juysfC6H1XgF9LyQhapfWH7g37Dg79ybY5bad72HhD",
  "key28": "262peeH3ZXZeknqKYATa7rEYm3Xtcu3Bu2QCa8sJPDWqVhwUz6CkvZzcyXucx184KbQfUhstBCJebjpaZwyJn8WL",
  "key29": "21MArdeJbAkXEzRPNM5fkS6Riq1zqX2jtVT7Zd5Pjx6p8A2HkUr6Tq2tELcmHCprEXL5TQWe83eRaycwaB7u8R7f",
  "key30": "Z4oU7cEVMRmdAdY6ics4ukA7fGHTyu6ndU9ttSacQHfDeL9LBQ1pnKaUGeMJaYGXC9gWmEgtjXTtUWRRMr6jhbC",
  "key31": "5ruN6Ni3Pu96a4EnVKUmG2US9nhbWy1hJxX3XJaq8ptYUQbGYKZUCZs7AQkjoVcB5B5sC9dVusmBKxXmEnfX4EE9",
  "key32": "5knbVRGgy9xrTLk5pVEydzria5wuDrwtsujmQwmTXoXk2Th9U5YGkW4tMuq2zePjZmjWEGzcfKGsTARgX61xRzBe",
  "key33": "S7G51pFjn2uFmLef8Rhufm2rNKcgZmnUZY3vsGppHysrHxbcrYCciJpGHRHTDQ1nUeYgW7iMUNA8puYUZZXt8oH",
  "key34": "4jnvZkQ3k41dkAVfXuprwSURYxALKRaFy82KqauUcQzofv3Xv2UNuXBYrQ9xjcTNS1Jt8Qr2mXF9nXEWMunVAhTv",
  "key35": "PmUW7XvzsE4JYj8jsL4t7H9UJhznuYcyUWvuh5WXgdcm7brnsEQNdLNNDne8RYmFBBdKjqT9AG3JxRtSjKNthEu",
  "key36": "5MfLprpBuSwXrsCWNiWqu36Fasx7jcoEg3u8zGrmkDvaaFQdf9GmuxMX5pjHhbhiuth18PxivNKXq1c8DeozZFmC",
  "key37": "6pFSL9NDeRjWUBGAX3C91Yqh3UGBdUBRdeqkpJdJycww8VTFRMzf6yE1vF3ui5EhSDh3nRrg9KpSJvVaDAcs8pz",
  "key38": "3eyXJmiHLSs55stAM1qx47r2qr9uFfXRH7kkRXEkKyXmRXvUcqufvtypN7RBWwmwi5TKrRV2rUK6iyKUvthwHrF1",
  "key39": "2JNSgWuNWxG3hmrqe4sTsHByMgYHTVsucUCSJnQ4Jj2nHtBqT6UjBecWMuKUoArB2rpENBd5S7WvmQVv1kPzQ87A",
  "key40": "32pajZV1mriS2WzgWi9ADpiYuPEcHxR8MSySRXZwF2L8MUxcas6W9vqVV187bhkogJhAwNh8Kcfk36VCc5Ksp4Qh",
  "key41": "5ZBreEUyMxFfZ5j35QobTEta3vvKFqazUVGGhtfwEgkW8u8NjKzzYo3nMCT2ZGXvAFaUbM53eGmigeBoG4FcSXzB",
  "key42": "5R3o1hTEZf7miuUPXpTUhzj94sfYrxQ5YgpLSENQm1F8JgvagdQwNUcb5Jw2xfdpuwNKW5nMaqzrgJsB7JCwEUzL",
  "key43": "4eVNbdf7n2skqNTzCvN4vVm19rEdPFMLP4Qixv82umgZo7gw7d911PegUQrYgm6M85fEcDcL68hrnJP1DovpjL3Q",
  "key44": "3RiRrjs8e5wCydqCLSVaT8sTiJUTedsJKeSxeZLteDZawtQAKxabxUSi7AXhFLDeU1J7WzVWeGiHG6iyM9CNgCFZ",
  "key45": "5n2SPvjhXmr3aD2T7iH1qKQtLTeJJVgX6Cj5D5aG758yvPHR9FbjTShMSqjdh7SrDb2q2X1DMqjW1ERPZxRkixMS",
  "key46": "48johpSJ9hABcYHWDFK34EnS33LP7cGwwzKJ2iT3gX8T3eLoycYYBgZ3V8X5w6PM1U3VAvFd9USi9vzmMqVJuUH6"
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
