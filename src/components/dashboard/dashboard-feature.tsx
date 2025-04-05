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
    "3BqDC42bTVDqY8S32f6U4GijB35LzPXzpCZc9VddMKSzVxgHCgtJuUZ7ymFPgvsKZYT9LqYbQfhXwBzRZgbwkfYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hk2ZjsJivWrzvAUBwszH1Jvua7qKXeJySard1QZJK86fpt8DKVL9D6kXkuJE46TwhwgYXA47sCtBgKqoCABGX2t",
  "key1": "3Jx13Nqp2XEK3f4YYGkmuCD1CjmqoVhhyMdccX2wMN4enk38PAKWeTUUoT45q8m4mYcWZHBqfFZftxRKURZ2ms47",
  "key2": "3oxHTuV1fTxdfZz5s3PkKXYNxK9J16PDWtKniVH7MTLetU8Kf84eZqBuRhXwRD8SFh2ENxoZ1oQAMeDFkPps8HZh",
  "key3": "3vKY9k2eGzmbUuCB8UQSb8ZxLG7pCFDZJ65WLdRcFxrjCzR6CJqx4WgGcUjt2Ac6TK7HjUrQejvCGFer8iB6Ennd",
  "key4": "2j1c1m17wWrtwUaq5qmP7BJCDh5CoiomUS6ZynWhy7n68mCJ7EehezJ4fbNZ7gsjmFaazGiJcxFj4439T3yJQCQE",
  "key5": "RzvFUt3NazSmc7Z9giTsUU5PenBHzNnSW7Mpkatee1bWQAsDv5haJJKneHM5J5jyehpU9wp1KDojw7S5BbtYFiM",
  "key6": "J6nx6TPeACWQUnK5PdLofbf2EA16CVBTJsVPh4WWh4BAJ1pzG88KhHpYQH5Byh6ZroYUe7eZ6zofNRZcrg8fSxF",
  "key7": "58nxALuJfGEhqXPAjqxWej8V2QxJcT7RwxCPWkg35BURF3tckgxeUsCzuLH6WVV7okNGqN7gpCAcRrm1tzipr7CC",
  "key8": "3njHaHxMEBLfEjAXEA3QEvkE8hUuqmkxJ7hLomABV1u9bWh13ikTeARJPauRkVV4cufxt6Pjn7MTQgAuL7qZXSk5",
  "key9": "2mAfnJqhAwVfKXZLYXYygVgikPvHWicTf4FcQ2CitQeDBjrJJyNC7vPKp4nXqBsVE6mk6sJz3yr7hLyGtiPHNG3k",
  "key10": "3FjHCrEFNsj7q6BTGux3tvHzmvjz4EpCrghcbXDkTZcXhQAb5m12f5kV17So3ie3iagumkqYEJaTnKA7wg4ornB2",
  "key11": "66k93ayrVpf5vxWVsBQ5LHLm5z8rsNsautUsdi7T4HzPiPoY9jaxZbQoAetxiQwm8FWvzfrLLcgjJVFJf4frNYog",
  "key12": "5SsNx4DMPLooDcRcUUyXG4hyxFcukpU3cMTQcfaLhcdbvcrCYGHhQQziqRZxTHEMc84k3CJt1xxz8SThVkW7CKbz",
  "key13": "2fLWtaNGguaYic2Zq5scMm8dLM76amEDNEZyR1aurLezb8uL5mnwm2XowigTrdpLxp5rr8wLaPpvztKFwS5DdNLu",
  "key14": "3RkC3huH1Q6uhJKTXU4q2Sbc4dGuiCkwXPoCmyuc5VBvhVZEkKCS3bPVDLQNSFH221Dw7PufLLL3o51Ybdn2Ryts",
  "key15": "5tVx4zXjRCaJFipZM3xgxwz4PNZ7trhgwqr33UhsJqLvwzfVLYUdU531cgjBdUKY5qAQi7QnPnQKftaVTD5kKWca",
  "key16": "4xoNYVxV2Fmha9mb2qGJe28sqhFg3ADi6ikF6zkYXemrmgEGZDsG9Z4wdnYhq2y2uGyxZWe9XmiKtZG5QN529qpL",
  "key17": "WHtWL6yKNN1c4VvG47T382CPTPNAodWL2ZY9645JtfqKdXAmujRicD3jctUuMZpZWtyq8XTegf5c2ztiZWnRqq2",
  "key18": "326P3LK2z63Q6rZc2kDfb2qBP1VLUCmqUbS9c1x53sKj8xvz8J8yUEnQQJsNme7uyzcqM4bRidAjZS9UDy65L1hW",
  "key19": "4urnYq7kCp4SVonioBxHsAXjKqdktdjsg1dJBTxqJBRtv7D1Wmp6HdjexvY6xXTQ99MrpdzWXzZVCwxZ7VPrnkAm",
  "key20": "4R6mJRnHr1gdPFJWuu9umsvUv3DbvgZq1J49xZrUx1m7eWmEYdsbu8Rj5M6sFfCFaHCFApZSGFRW5zidU8oer94p",
  "key21": "2QqgoQEfKPPXkMjTkt466T3tK7UtcDKVLfes13WVRg1qRfqfM67LsXyKLuwVEq6iydtNiEN4S8E5Hy7QU8ov71U8",
  "key22": "5oVCqRqLixSzoqCPw63je5uyDQA9Z17XWGPWb6JZv5QzPcE3TbdL8QmyCMpbD4F6d7DdtbHbTYvBXUFobALtRyjH",
  "key23": "6iauiRSZDvhdyi7u5kqrQNPA6X6Vpr5eV6gSYmPMcFvr6WBmPyyog1GbU6EriP2PRVNtXh3aHs2nmaeGQ2xPuPU",
  "key24": "4CW14KsLvRmRyaKfqBkAnAixwC4rqJPWjjQLZEY9oedxHA4tdFFxP9BL69gb5tSN1U7zfHyJkck41m6Yz6iDmhBC",
  "key25": "3ekPda1dn6CMJgzf5hbynxm1WxbMmJQLcbNZEvEb6BVNSmPWRTtc1Ki3DRvLhuhh4BYCHkuiyPkJozHx3RomVJRV",
  "key26": "4BrAND3qNTaHZQQhNMeqU5oZ2bAfKQuVV7H6KchHDuE1SYZYZYDMS7ghLxZ9p6tWm7AaN6yA2LrNzi6qzPiHcm3R",
  "key27": "2NQS6KpevPwzHewQcj8H6Z7GyfFrJULNsKdurDcrNNnXm93gH7u92KDsNZzimWktanNqb9EqWVBDZv2jv4eshAXf",
  "key28": "3cSstJuSQEp4oRpc4tVmyk7xxhnWma75MFQ8VWnAR75dvdX19x8bP6CDDAksH1LEaiEFdRpnhQ6cCpdioff3U85V",
  "key29": "3FvUhSTa66pxSECnCqHbKDiwWhfL3N9uSsq6L3Du75LycvBTFbmFKmNKndMCDrPXUPzYqdxYdySt7KpLhp4tHUyX",
  "key30": "4Gy6TqLbES4XZNkDxtZtnVaFroxx7iHBYaASZ5g1keehcUKH9n5aUAFJJzjJWAZeaX2QutmZqfEzDvf5RAHLHQ4y",
  "key31": "2CdHomdW4aig6fKMEHPNn6aV4pkLT8jkM197p18ZkwaVe6pyg3rBjp5aJAe8dRt5a5LrAAJknprgDGgiTx2LAop4",
  "key32": "65dHJiMseEBmGvyQ3494ybNnan1TSyyJQuNTCSCF6aupJLKFu1DS8V9r8ZoxdUknYqEisEJHfB36zdKA3yp2Z7WM",
  "key33": "3q7aq9NCRXu8duY2r7QaBqMsCyJEVcfBjhJJKRk2hnVqsQoNKY5Uumm1UkzLCdjwoBKr22e3r6WCd5G9Q5MLQgiM",
  "key34": "5VTyBR4exhXoAfxfypcDz4KM6Qs4dHe3q6m46fKMCMzRjiXTGZn5pqZJQwWWCnnEdzjQBS5ABmtfShcE3sv3pX2Z",
  "key35": "eUka4LCKuPrQaHZQ5Ga3H9jmRwSwQwVrgX6vCSASTLskGXskwaVPNqJMKb11yaE8c7U1mvAMrSxpfM6VGECjd15",
  "key36": "5W58tkqw1Vpg951tuunMV4BRn6H3qigCqGesbKj9t3RAZWXz2fGizWLLJzb1MXmC3WaeXKRTa7qLTkBFFKgLEDW3",
  "key37": "2JmCrXtk4x8jBWHauhg9Ek8AG2yj1oSm8aRwy14VRzqWXzGFy2a1z2iTBDo6sUD7w9aqsMqoNMuwMQaJUWyfJuK8",
  "key38": "4WUGhFH9sk4NdyxNYYZZK6T1m31r24BV1buACHqqfiLyjw9yj85bbq9NXow6RNzhcxyrP1BYNURW9K9jtWJrdgFv",
  "key39": "4hP9GsdpC6VsV5oC9YWN7Vf7eWnMi8rehyDyXEokp5JsMZu2aazMm3ASJsjepWKKR1jFzQFrjDqwh6CuQPYkQcHV",
  "key40": "5T5gURUkgoEs3vZQc77rcp7oe5rzwMGdGUVSSitXRwbidbAaWQpcU47YPHtswRE9sVCNeK63yKfmdsh2svuZeimL",
  "key41": "4vm8zhCETMqKqYtJAiFXsk6b3k1xkdHVsi59Y2rBNhLncBbqnWd7CUHiGfKkGoxRyEp4Z1v9FjYeYEcMP9WE2ytV",
  "key42": "3HLjbSCHgSyDHXEvJNqbm3nxPkCTkLDbsiNhi1GWJQSK2MGgKjJaS6kJZjyvXaq9SjTEi1KgKYyXUi3eJ3sw1hUS",
  "key43": "5sZ89vak3HSvEien8XY13wyPLxB78t3JuxNs2PneRnHjwFam9Rme3WRcKArBbr4NswSz32SK5F8Wv7eJFYRJJiGu",
  "key44": "2MBcRerCkUXbKBJMtFVSgyDr6nFxXrEku3W7agZ9fAgXr2eCyProCb3L6zGUxgx1VkTVFz8JK6iTujwpZFsSTbqn",
  "key45": "3qkBa7LrnXtc93rSuU9q5YNMhhSpFmxkFL2BYbr8w8CvRv4daMwETufCKm5XHtX2CDfaVdo3ivLTL9couWyMAKxA"
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
