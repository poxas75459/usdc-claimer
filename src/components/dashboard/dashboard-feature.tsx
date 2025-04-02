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
    "3qofdo8VvYwFXcHivbj6jbKjT17RamKknYANvoaEgqZV4s1k8ARqoVuB4ErhLfBJM8Lv1PQWFdEv1brrpqbC1GwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T1KwWUiANY9kLrH1YVY2ZBV62DR4GDXXnyt2tozVYzvZvsAHgfzD2yZ53hsqSxnkEdtvwWkawAcaFHWjXqv25kW",
  "key1": "2QkCSCJp6YZzWGqtssphNEf3ERFVSdBJStxbRh9EexEVe6nBo2a1BfSrbZ8JcP9RqwkUVK3pTKnw1eCiDz8PJXzz",
  "key2": "3WT1ScYmkaxmorJQm6u5K5hu9WUiR7F4eLduAi8U9WNnFxz7ukHingaBhWXDfiMsdindYMW6Mc1DtwmKonFMKjVx",
  "key3": "4E8BzZhzouK5k83iqQDyKdYRLbBcZxvjY6fHqvt4S8wDb849drd7osi5Mz3zhUVZ96YQYz9fEyng2riVzSQNmqoH",
  "key4": "2m3R6oznjLx7CCgNTPhYGa1YdYfm3yH5W8fL9EPWXTgHprRG6RHRK4RX4hhsU32JzmRbT1gd4ZqeCbyypXofjxLg",
  "key5": "4LLZnm1H8ChJ3ndhSgFwiDJZAHEAaUy7RSX6nALwAuuBK7CprNuvinpjGje33Y1FzHpT1ZmvQ2x2W6JsiD6aoBEw",
  "key6": "5Z9JPGQ6MwgZo8ju5z7nK6U9xKCmwtepgUUVNh4qXhwthfUtMCLSdqv3FADALg1NLK1F4uhuFQLv2qtbby1NcAfD",
  "key7": "2nfMgpzXScewfcGWXWsNaDnNj9KnWPAsHNRXqigv8YJJBGUdK8g7d4birb8bZ616WiSNPZyNRsDCAWUu9jfBrk8r",
  "key8": "38BidPp84LKDbvSmHMb4suyy2oj7tcmNgAcC8nKcUtetWs7VS2mpgNjiV4ssy7xhkmdnjvgKUzhAQRLWFFCstgVA",
  "key9": "4gsdNYHz2tkFtG1kGabJFBUAVjuDgJrcQv5ib1ZBXAsTryMndoLyzJX75QRztguU2gci1B6eDNiA63UyJVPauqQb",
  "key10": "4SR2cmX3NzAzZsd4WTXtCgDik1NRMQt6znVCKni8sP8kz8aA4iNh9Dffx43DjCRNs6gTXF4LqeLKzbT8bz6GURVy",
  "key11": "5doMCabuopteU3aduaPdLLbNcSHnFrozzWYTUhrn99P2wbxQp7gKAL2SogEv9Kebbwbj7r7Uwmw5e8incnSsVieC",
  "key12": "nh6XMQpSDyJfjF7F3fB9DY4rpnR5pyzfvq7QRiXZvcoNgF7hRvrH7JrxhfBRddmx56vnpiukz4BxvT5gnSUQtcY",
  "key13": "4zw9JAxKVmR36sB7AbpAZL4T7776hSG1BnetpB5P3QcQ7AkYjTWLTg6zZ4oBCyiARvrpBH55sTfjYHFNmg3ZWA2G",
  "key14": "5RntenQkzH2bu1zKxdibfBD2cJ5Ze2t23WQGWFV9Soxpy8swBdJz5RuZHthP1Wz1RECz5eCnn8TkXtTEdLB1HdKJ",
  "key15": "3LGQFAkVZQNH3muLMpdTd7ximkSQTcpwyYTatfszpwLLANmD8HdHfsgxCmmDshvLTG5FLQFrtAqdA3jcWTiJ6GR6",
  "key16": "3kyLEUmfcv8nXEr4ce8AkYu2H1d9s6SRRKBpGKdkf8wNiVvkCYfqH7TeqFED781WDEo2o61ePQEhzFQSfjBav5fW",
  "key17": "4RfKeUhM9oR1zW5cTnv6ZrBQqfQVY8FbdSCGh8uDBiwhpUFboNeWpSb949CV8S5z9s43NtdjfUeYe79NeFZDRVvh",
  "key18": "tBCNqhXifAoki4eJczb33g5pT5S2fx7sCWjb6bBhTxC3BN75L9n5AEAyH4v383tKGvKPLhB1GKxQ6zfmV4rfxpc",
  "key19": "4d5dHnhy6w4k3UjhAZDd1fuhLRTExX3jGLVrHDT87zr78UKdEiifXFuUwsYi2cQifR5Z4TGxrxUd8uNhJ9kykd9e",
  "key20": "5GXYYsH4sazs9EmZohPGUA1Lrms3nJFxCFzKM2W2EiWxTqaJ6rDfFCTumRSYVLLRBxsMABYYYR59tNpgSAfPyopL",
  "key21": "3W55XDZpW8gfaxeF3seBmYYATcieAphYDH5HE4Ey4M8fhd52mLZSQfKuPihprL13yQgvUwks9PTfnnE4g5Lk4gWF",
  "key22": "5QeQcTCrvDXB3brKFisQY9vx4wgNMKxdLb3mk3ViNCnYkZWYJ2z3c2MWLW8mo6D5gse4RyQ5cYsnSLN9b79SjEB9",
  "key23": "2B5EmD6yeUy9fWa5aEiR5taWWkuwKyKT9CYgH89HP2pE37GjcgvunhGVqcQEbczE9dSEycis7SVq8M2FNKkssahM",
  "key24": "ktvdUWBgEvcE1LxXh43WXZnHkHQtJuiZrJe31ZjWS43aD39KJbR8wdazL8NM13hWF4PTyuAjKFjktff9N8dmzhw",
  "key25": "5EHiH6N9zosewgdcmW3dnLdQSEb2J21NR29NNEJQF1AF17dcbN5u6kyBNxfiwK1uQQGRGduxpnf8mB2nsJDootbD",
  "key26": "hr5A8JQNF76kT91VynoGvwonQo8CVFDG4sXSiMes6FM9BXJjqmvvGnJwpeEas5Er9CwB3ncaD8QXHASPWZDhikm",
  "key27": "4FH6sjJ7k3HDVz2Dcxr6z1koUbPpihMGMo3HaB18EFWkwQDZUr4yqhxjFM7EtczAXibUU6grGSxkxH46Aa4b3TnR",
  "key28": "3m8a2fggxh4CSV657aifLqsCwP8bTsnG6UpXfZwaEx9yabzdnqa66ZB8jXf9TMzuc2yUzuKzeks2vjjx5jf5B7mg",
  "key29": "KqvuWtoAckzJAMSmsbcsEArsUvutXeH4531AtwBqnYnsj3CrupkyCGLXaJqW22nKGMw5y7YbksBUuTN95Yb3Km7",
  "key30": "mBYNz6AKcr7ZR4MjW123VE8f6NC3THQDHkzvBRmHbaH3qf9j6uNo4tPLcSmSTQ55EQDjEJhUwqfcDaKBCDLiFrq",
  "key31": "w283Cm7c3VKr1VDGW5d5QnGRZ2ApLvoYZWt53CuEqMGCC66q2hbz4Likgbnise62um47MwmMfwGWDumxsGMenmJ",
  "key32": "G1ijboJ16Hcdn4T3mTzgdRTSFfv5wKPUveYmAWyJFivGQMznTQ4N3bCsGKoe1d7URrHh6JfDdEdeWyxsqHkUu5a",
  "key33": "4CVhaNq5VwGaZvLVL96Cwh536fjkSmLXnYjJ9PLeGdxHwHF7R2C3s8odYzHFz8QZZ6aWUdNows6N3Q2cYC4zWqCP",
  "key34": "3Wcym6t6cEeQuvq9yZwHWcPyQaRsht7KCYKmobVqFcrJoU9rA5d7Df5snRypNWa382qMcBRQTUGHBcQCNFeNGSPR",
  "key35": "24YhXb8x1X7DKbWuwdbhDChsJytPphrmHVpL4zVvXpzt3BNQdpt8oWsykSdQAYGZ7kC42Ny3SVwgGQ759em3r3k7",
  "key36": "q7ZERGqnde5hyarKumSk66ggWYFsn5uka5zyvQ2fdtcHLRx48ivA8YBQ12zT7RqxR9TT5TTs2GDTeqJf8qCH5XU",
  "key37": "45dvmqATaKgaurvJiQ8VPooqvhU8U8FxmwCgsxFBPfYFNnBp2nryUFkgRqbkRH3zoRGt7VooSqx7yLR3WM9rye7R",
  "key38": "DHeKaEvajSzo2rbRLdNds453zGWruF5yMK1TQzbRvtFn4eGxkmcvXNA1hBRnCvcTL5BEST8toPaFtwdNPTKr5ep",
  "key39": "2449w43NG4XPjEf67egEczgRBBXRo4fF5eRbinjUhMRXXeWHLU6Hv12FbbPLqiDfF6tSUdZLAkA14Zm4iTEZ5mu4",
  "key40": "NXhj6GRV5zFVc4L9ZdM87PUiYeVDouTg8MwEQ9Tz7dDyGCxjwV18XeVDCeZxJBY6KMG328si6ByigZS6PTs1be1",
  "key41": "5YLL96cQSHqN4GicZHXJCwRFCnAB7XqKVwbvgK2WtETQ919EEmEfQeBrJ6MVjSp3mnF7PFhDoDzSvBMh4ugag7qC",
  "key42": "5pK3Jge3dpLXbVWWXqELi5TNvwRpxgzdeNnvp8bcsTrzz8gkWgZmSypVuvThMzRuR1N3dTg6MfSjJahZtdJzAu9e",
  "key43": "Xow5s646p9AUFVGdyVFuCFsfJm1HEN9W4EaaSxiEoE1MgE78coJnTTHCH9WqPH6LSnsRkmDLV98pWs9WaKU1vU1"
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
