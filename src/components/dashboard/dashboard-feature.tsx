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
    "5mU6zASQjKcjCtJv3NSXczvGSv5zbtcRk2GWM8JE6HvkpuiyCrCatyVAJUWZr28KFRmLynxZF1VJEET6sLLiumcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TxxQBZE9uD1YWXntbWgkE5V8oVtPcn5Deu9AHazXUAQhgxfBMfsZnQMGCVdVa6ubCGneEg6hafdfrmLbCzaFz7A",
  "key1": "3jWz7qbpT8yX87buyCeYy8Yqb5CqNVUMCiWWbMTkgdq59ea7c2ZeZEcGhxG1JPcX9pJEwJAfVWyx6nAhkd7ixjaZ",
  "key2": "5zTwHCzZLftpQqJCaDs5fERgcxKR9QwuRw7Qg38PpVYnFvUv5Gdcc6pq3z8KY29VPc39bjmzR3LJGGmAJm1CEyCn",
  "key3": "2PotUoQy9rAr4dp2PfDENHVQUDj4cy1Qq99uR9ux43c1FGyUAFqD4YPvaLodni934N8tYTdN2bHupHAeSS7gcWv7",
  "key4": "65AnW6xwMDVK31tc3jZ9BoiUk53hsw8GH7fsk6m41jwYDDBhnjQC9k8PvLFcHGvoKm74kfETawEb9ZzWsB6d5495",
  "key5": "59DpXTZULttaVUJoKAZ2iJvsyryVgBdN3Bshhcsq9Z6PvBHVv5ZsJy1ZK61rFH6q1R9o9zrwwzSaQC1R1ss26gq3",
  "key6": "4GqcBouEdvvujfs6Cva1mxT5YoZGrsHAWctBsgoM8HF7oVXTXv7UEGXPQrWx5qbykvrWsemz2a4ZfCMSuJg5zpeC",
  "key7": "4iMeGQeqAtu7bkyUna8pn6yjfmx72CzXVy8JMAXDRUYwLQ6Aqvj2f24S4FVyUc2U1ZRQY1mGdxSWhhjm6NXv8zza",
  "key8": "4NThZtXMbKaaSjEHhiFHtHut16VTeENtqfG7yTsJcmH9FvJ4B9oM2iptQsmfPWH1MjYKb8V88Bi1a2Ne9RVCvMw5",
  "key9": "498sJCo7ZoJ6bc1dzrtzo2DJcvjjU1ZAAA29fLQz11EZtTzhDn3dcoe39kWoxLaT1veiWjKpFWEk5CvEYWhoPvxX",
  "key10": "2WWfFNRH4n99syrDnJ2kv4bHmZdv48WGH9Br8JYvi2xva7Uh6EFXRw44E7dVHj1n97qgVajVqYMCZBqrGj46k2kp",
  "key11": "2mcmYf7RsGPtbmyTL3zyDCp9t9Mhw3tK9nkf3r5JiYn5wYK94Z7jZDnV9zzfZbVAmqLsPCg89De7UHATh3BQ94k2",
  "key12": "5Mxk7aXBCyExAUARA4VvQHoYRZFMYXYJb8kZSdyUpSY1URMYU2sWRbxR19QMm6DVp6GQrzXN9tu7Qk2kjXR7zKBx",
  "key13": "2XNc5F1RpeRN3aQVnzazAnS1jjBqqxH4rPo4UMAYVvCqrKHnq645haxVPszCLjgCGzEMfGmwJr2TV2fsTRAWHtE9",
  "key14": "2J3mzCsNYcVaEMLQLT9oQydP1Uwv2PT6seSNEuNnvuuR42wASmED2K39Lr3xByJXMzSKRNxW2zj5K2YAEnFzJ2F1",
  "key15": "49TohzuDXhzkbnvvPpigUyRjwXhAYeECQ83jQ2seVk6pq6ZdMFWxiwCZ5HauTkJoTakbLQLDsyJA3TZSxpoyfP7N",
  "key16": "5Vi3mGfYLaiczxMtNksWqX9YPnBv2uXzNmWbUWN82uaiA9ZkWLb1KrvZC9ZS7beRPkdYN5woTUvP36Xhxed5gFo1",
  "key17": "Ub9zkmaLtTMJGerqdawcKmax8qdo72r7SVjgcvnkSVnLUdYLtNsrSumUmxL4moTNkxsrXMWpNaE4Fm2zssedKWW",
  "key18": "4775EMVxgK1DoK5ZL48LWwfrDXuNLC6yadvLP72d9CTQdL7pe3oQL52HRNzCBWCBHoNBvcPmu9bWyHoePBTra8Qh",
  "key19": "4oQ9zVjJXZqUt3aZFk6A6T3hrb9J4QyWCJnR7BoJXjBMEt72ybSEhDaeSJ7Cob7xMTEWEdEAE3zTF7V1ideBwnK9",
  "key20": "2CyGBwdp69NQVBun68oauwK5Qzzb45sNUdxxdrAvPefaT4oU41ypUAR3UJKT8KNCh5f5EaSNEX5jFjF1pfkmxCs2",
  "key21": "5T4VWLsuM47ZufZZvUsJcejsjVpnD7Vv4Br6RbWFX28x56SfcWydcDdTqABFCSRjnPRwzMP19g8zisKkXZ159VQ6",
  "key22": "PvqeooSRwbAnBmSPBTopxLeusqGe38mgUMW7ruTtzq1ccnYDbSwhKz45yVV6mgVYxoC2axALsft7Bsk8AA7CZiA",
  "key23": "3wJg8HzainxhSeWET75rEpkonSdDbkBphL1BiQd57K13Vgtb5e9bSNqRGMZapJ3RicGvWoUbNwrBKn587QUZLXKF",
  "key24": "dr5XstBZzbXj8sgn1i3PWceAWKfHNtpqwHBry7MotDBdD9d79MoVaiWxQ5mteCWupEw1sfdxC5tatF2Lv8Prupe",
  "key25": "5G7JgYcWNYhvhmwoUeChgmXcFRpobdwdEfrBqS5FEf1meozwpbonYVXQ6qzFBVkJDLrfKNgm1qMPFar18s2f5WqA",
  "key26": "3y9wf3KVV8mczpaiTRsHxiWqPtiqGjADivFUECPG1bfzHryUbbka3PsuNiBZzBpY1C7QFUynsVMRrv2mdSErfLG4",
  "key27": "4XrbL2uj7iKxEMoJjLSjffjCJx1Q9zXdMfERqyk85GiBRCNBRsU9iJG6WmtHufKVh98SPLU8tUKQNWnBxtMtgpEi",
  "key28": "3euarshnHWxSKGAow8D2UijfHuiQJTW8YSEMvdKwE2YTqYu1p5KzPPbx2X27AWA9L3SD59c5FUFqKJQ7EzkYk7st",
  "key29": "5NpYopD3us4jR9A6FvUT8yY7jWhqprGsPdh3Xund9unt116vWVS6dSwjzMUWiYLWn88MnFKycpezihktJMgkLDbh",
  "key30": "7cJL8t6cSYidRwzmK6ptghbNeaZGg7iLGNR7M3RZ6XMA2Tt75D1sKqZRFGJ3ki47XxUih8xw84S5a4qhthTKuWo",
  "key31": "4ohd5uYhL1wERjy5kSH1itXruKjcCGYmKK5EGTKneVY94WkGQrTJmi7VW2JBrMifXJoqQsWRZCT4tuzoR88yC8ie",
  "key32": "57hzPHRVuPpHk2mS6vkhQ717BKyV758puLfGUfDB7qko5LDDXLPFGWhCqH3KdHWjRpfeqb1fLkf7j5ui2QcvDRhq",
  "key33": "2WhV9BsfANthj9HuKKDZLwEk4S3YuCLiWk3diJCkGGEj9QYswThmzdY5nyX9v8tdhuzHFDPFm5N3vXmLT4wxwo7F",
  "key34": "51snP5vEhpckNxcAx5NRG9fFfa7haWSFgfxrYW7VebSMsCmBkpsm7riq1NX4m8MP4KHoa4vHpNCkQVxdcYiosAsi",
  "key35": "4v3wiZ5ka5uxLVn9NHdWG8QtDvKqXrtmQ95LsUXJU7ZLKbndNAbRcRyvhQvKfk86kKK6zzKygXaksyy9FDYxRRdX",
  "key36": "2x91JQFxLJHPKAT2pYoKc4r2AoDZ6wUXb3VUm3a8RjEHJkuXkQX2KiRTeA72yktnqw8vd6fwuT6SkNv1dTQvxXgx",
  "key37": "4Bm8RXiv7zpG8n73rL6dL5QtjFmhr5ySQEdsCKhDGxAFExpUNrvGmZCUqwDKZ6GaeVxnwHV4VNwGD1GezJoEe17P",
  "key38": "5PcSSaTxN9rvjrmpL1UZmym237dK9FUCi4DWvXyG8r67GDdamFBn2SuMPgDYmiMivyanKiihvgcHkjC1RPEoy4XL"
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
