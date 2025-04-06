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
    "9pNM2vjT4xwUgRkHQvxqPXcheGZcSZtJMyGGgEVVcmdHdvRfohUkjFhhy6ojVcXAJCp7bUwm9PihCsoWTZje6WW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n7vpCm2oTbMheBtR76HPNREmJhLmC2HJfYHXNE29VuVsiuiWcc2HuHKNcnFQcg4QQizSyzZhywnEKxBznZ7qLci",
  "key1": "UofdFGpK7FGW7We4Fz9KtBCHvEyGRHx5NGJZ63gD7bVNvzEJKPWAxiK6A8rErVa1cGiAMo3RpnvANW6XUDMjgaq",
  "key2": "5NM9hchHoeCssv14biieatTAGw5fe7hjUVKhv5e4Zc5af5cCUE2oFBLcB6mAdLfZHB9MgMKfWZWwcNGjgpTx4vd8",
  "key3": "3R1deZCJvwmDNLLdqfvNejvzwGjuv3y4rSgZJ4tzaeJ6mG7eqqdaUUhBTkALCyvK3tb6hyLmoLkGiL6kAX2gJE4v",
  "key4": "J5ZE2rjkZsADRk2pxzFKQGXYLcHb2Tj6cCJr6VAQWxEyMpog8dsYrkUYMBEDtfnZk3tZHVc8q3QhFWUSoYd3DQU",
  "key5": "5XhYNR8u5eZYZrMCryfayHcyTewr61EDCqN3ktBts94gpjTACuvPorGmzyKkznDZm2KZaodNsKyGKdC1Wbvz9eNA",
  "key6": "Qc7VxbjoBEokwmfNCQvoipzsgXYiDjDoogVZJHmPaattABhtzTuvXe5v4jkCAQ8mhX3E226kG4mP29VdfPXSJgr",
  "key7": "nYzjA8dpCp1cZA3BSM7v41yhz8Y1KTKHkve24w19tQ2fKbZPCurMMh2aS4gqNgj5murP6H8hZQ1eUu9kVNf35em",
  "key8": "4vEwbSGDj9iwY1q7ASbivyERjLduXb9CL7cQ7dDgpZb4E5RHEC1rreQ71kmL8utmCPtvm1xgqeDtZKk2jw5mqyDJ",
  "key9": "41jh6LXKi5Q2JVfEuLBEWM9bAYkWocvZoLvkf7wpvxEZuMtLnz4X1pVJDT5MULvTfBA3ttYHszB2EDYzzu4cn8pg",
  "key10": "2Gojv5yENeB8z1cExstFpyt5FqimP4krgz8pGnQEVDj9Y4RYbHSJ5J85eBnBkSN3XtZD7s2Zuw4qaV3bMSRHZaLn",
  "key11": "4eZ6Frmy1KDUbpwEzSyuWg2dSLk9DFNJUQpL7oa8qWzuBbz3Pnc514YNRK8CHHWWGYXivihy9FuuWPFGrsmuNrMk",
  "key12": "5dipk5syY2ovgQkPvGRLFaKMdy1W6LRmKucEz6hy9LXE9RMpbNqHJJu5ouDMr3K35Jnnoxbjv4bCFmLtsLp99tBf",
  "key13": "4Rox7zkHPm2nci9q7yH6xhkFVrGTfPca1Kh853dsJKfG6z2ZBP68KYcpWpXeV7Vb7ZLdSwZ2WYzY5shgoR24qeXC",
  "key14": "XcbC1G9smL2Yf2HfEWH7HEkDUWc56A3GBWa5Jfcfjbqhy5BqJfL4TuoQuisGXPX21GiSm7E9WLsToYbGeW4awVN",
  "key15": "5XLZj8DtxWctG8ika2VG3M9NVodxbWG49yTZnxFLsZNWmny3wLqMYVfUtVejt5e3TyjYs8oTo5a3HmjUePV6n4F4",
  "key16": "2smaJfpaWWdsmNenz7jBN5hMofcdGdEfNooyrAtsxZTPe3b4jZRpWbJxSDfuvvHon4eKreWvMoR7c65LqAjSKTs",
  "key17": "4urXMtPVBs5uJurCsZWafBTqs2ykK5ffGSLH22u5TsYHWaGRoNqvoY37BHtFqUJwoz3k2aQRAaakzDZcLsSB9AHy",
  "key18": "2MhQiuqPE8mFeoyuoRmdA2JFe51qJ7FcGSuUxndjHR7yAQWbTXU3dUmP2fu54dvUNkkBFgys94nYsXbnb6qGErJb",
  "key19": "2WxR2KQiYUZ4xhkTe4DW9Ca31At3AWP1CVHcrz9Wm2GCUyjpnuTzPxvDuwrx46qsBcwTB9RGHrjfa9k7SwQu2MD2",
  "key20": "5us8p1ro3cbmve2mGGaSYaLU7TyDnZaHN1ZPvKarks7bPrb216Z2ictFyWeKvtfQpKzRfE45d1aREnVhq7sjUM9S",
  "key21": "qrRYeXseQKq14gzoCWUH2vvoNveaDAMwdysq5pH7jyunKrqdXdTyfMQQsPxFjR4k5pLNemW6YHAx69QDYRfLd67",
  "key22": "5Pys6uWXxfBzpuM2Dmzu7GfsmAbgHmerku8hRyJQjQGHHwLG24jMMcyTT26ksCUJ5xvQKkfVvpn7HQBktcWHtB8s",
  "key23": "3sg6cdZDSbKL8wAWZJB6JzVrKtCR9zFLHTyuZtbPTsRson9g7JgmznhMK93UJp9ktN8oedMC6MaNihQcKmJkfj1Z",
  "key24": "3Eei1xaJVXfwUMvJD69kdSJDJ9NiHH7y6haGGy5sxiUmXca7EgyUnvB1sruT91THxh5MJzXazQwHC438Ds8zgGmk",
  "key25": "3fBENpvns5P2ERtLkjZoTPrY1nUtnvUfc4HAvpvLy6gZfPeodxisj57b3UDq9mHuy1swpYEWMJeC3bk8csrSD5En",
  "key26": "5tvuTMs8GgQRgtgjhk7mfM747EQuwUxKi9DUybvDEthS4kEKFigkwZ2J6kmmTjKc7xuAAvku9zXDvnv6ZjpWR7VJ",
  "key27": "2c4wC1hW2UfUdEfvsTsqkV3t3ivKu5cNL3zTvoUmu8u2smDpFLGg89azfAQYfMSR59ZkZqSA2XSnsFHjm4s11pHt",
  "key28": "3EpydP1gGMfadXx9yvWPi3JPnHQ5DWDQu6DQ8G6fMY1oB1PfLh98mnFw9R7YRjcHHN82wgvAAVAgNpmHKv5CSvEK",
  "key29": "VEXDxbYGJQ1eUzEAuQjwn7rwofjwn7EJq6GY47N76BK6u5dKnzysr48SkBHZqWN2BH4dB81D6QXefAa3Kb9LSzK",
  "key30": "31Cfv1nQqy552tSjSMo8ApV4freLEZEJ5zpK63a9mx9CSvnGWXqX9X7FpgH1iWqux6eGxF5ZKVeNXvvTNtEXDHwm",
  "key31": "5kN2Xk5GkVyaKKejftPfrvP1G3rcoq4PY1r71ASN7RrnvGSgUfjmPxs55AhE8SucepHbZsWnzRMsFMYgpimRsGE9",
  "key32": "2pNenENMfszRfuwYaJUy47qHeVKBFyDsgc7NkGentSyTPiJPnHjRW1PY1pcEB4RMPtXkB16WU5zWn385pafYWYwU"
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
