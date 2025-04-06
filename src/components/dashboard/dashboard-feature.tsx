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
    "5neNLJmAtLrbNJk7AZ3Duy3VNhzFgMcRNu9h6brcyxLUdHdsWCWGr7rnMoaKiUacqzv8FF6BDByDx2ewpFJRyycn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z1ob4EUyqcxBFf2hegKjakDeAimq6Hs24ji3ryom7DHhmJ64VHr1DndBzYgrGmWXLmuuzCaqy5BymA73mp3dnkv",
  "key1": "3hHYz8T3RRb4NGkqwpbxr7JwB2MeTF9rYFnXqchCcdbEh2SQcMSaX61GFqMmWUaQhsEDuJ8vExHuFhAkt1vnkx26",
  "key2": "5bW6JU4Gy6ApVbjrj1TSbgA3yXCViqdv66NzPJ3Hmu9CdNQLqP3ANHG2Gv8UVWvdPGNLtKZqUXTHffmJPqgy4iBR",
  "key3": "332drmXGzH12uVyhYovVs5WcujMkzcZqLJdU1M2jNjgZwrEsMBUt2pnJECpnP9A8RUr6EudPbcti9VijWLrEAu3Q",
  "key4": "2BqkA1TDriMNRwpNMUkXtA13QtbQGj48y5Y1dhxc1CQHiAZScpNJ5jpmkFStd7HQ6ehUQMn2q5w4w72tFkLWGoRY",
  "key5": "uLb3NERXtFeKrXoRUv18cvYENhHSXQfyfgoxHXJSjQcQDeoaNnvQqLsi5RKFBuCBjwEhAJ39gdP76GXRtBauAnW",
  "key6": "3rmfRXZJd28RWjboy2AKPqixgYTFwranvX2K9BNvkA9mrijivQLDZHt1aHEa1PkBAKaY5RnpzqfTBiyZZu7Rqjj",
  "key7": "3BJ31ZQaQpAVKdNKW7Y4MFBBAR5EWA3jq5GjtTTxLH7sCJjYzZDEecdVCpY4uZLcFHLxLGGzbWbs4AZqfeehiirt",
  "key8": "4vwnHFDfdGZKaao8A52t4f36QTKqfWwocJuZZLAxaYMM9nLD1ewcrwNfwAp33ytAY5XtSyehtDGRZRG8aSD47TAE",
  "key9": "D9kHgVhSuW8T9VpD6TCV2pdEhiBpsfczZMBhAKH6rFW4nsaiwyHU7gK3XjJZrDJQtcrpDx46iXRh6Fj7kRkAS1V",
  "key10": "s4CNMZr16BXWrYuCcJoVS6by7SkJwySUEBauvWWad2Wso3h4SNVSDXStzGppeehXmWgq9zk7wNmM8T1FgTjiLnb",
  "key11": "3G65qbfqGs2XY8o1JoGnrWU5SFgbpqvLo7hMW6NedUxTnMYvBp5RyvUhYpKbHhWnRpS7qGqi8XBrX3m67WWYXYY2",
  "key12": "4qPLYPjAjj8DJb65PkG3XrgaUJFCsJxa2Q3zPdYvmCQeXPBDdnjxZtxWhtFTgazG8whw8uigvbErv2GDeLSVFRgp",
  "key13": "3erAdfZWa5pfxzjJbtYXHfRsHt3xWiV8f3hHk3UD7XqrDpj4pqqLvwXgrCDkdchAfgieJvTy3rQFW32JgFDPxLSR",
  "key14": "4xM9eqnvy1jR1u8fyGYyX5sjNun92HdUz7nHCjZattvNmZUuGJGEEkX6tAtVfpRJ5vzzS4KF4De6igVeN8cZRGWq",
  "key15": "5NtWLUXbP9aBTE1aBN8v4rub2QZysqWQD979RpNU85QmKVivwYoMZFaSvbcvQZo4Y91eTrsCvoY7aRpVEAvzALNy",
  "key16": "51z7sD4dQP2o2YYqFpm9HUEsivCLEN8RK3uz7QaHF41MqHrteZSZX8VcPzwptpWecq6tLPBFzbr4ZCfMznMnTJqw",
  "key17": "3EwQP8Ap5K3V9VcK2uMehHvgSzsz51C9y8FeYueYDPUFaerxzKQoqAW2bhbUHU6FyvaWEbyjxCMZNtkwesvK7tcE",
  "key18": "4htySR1xenVJhFVHHEMMnLuANBqEs6mQtftPqAdrad4bm3FZQSHUyfEYB5UhSBXJjJ3Q3U9L8C4hCNaVQiegzYYL",
  "key19": "4TpW9J7bzS9spDw2uqSwB7FYFVpi8Wb1jfbUdM27UeZQCe8moY8qWtSw4CVLraVLhwDN9CSaCQo9YfVNdh5XeY6",
  "key20": "4bcGYPmvgYzJayBr45fkexJTQMsbJjRpYVgj66JNnjqy8Q4ExHKtcFE86gD9G1tpamvTTQf8wBu4bNpH33SqDMwp",
  "key21": "2FhpK6maZfUuEkUWXhugaWYLvWC89tx4mKVmqjmMJMv2XenNm2wSrVzVdhBoopsizvZsBWaKuRrczdxGjeyqp36q",
  "key22": "5txSKd7hJLaP3F6GDVgzE3xDRPdit57zzTuiocHgFjUZdByCUoF9LCJpZEupmd4hJfRVih7iBz84RzPYu6KuPRAa",
  "key23": "9nJ6yoZgVEiKtnr31cLqwErvKZWA9ZWG5NBjSqa9pgGHboqs7LXnR8F9yDQtqMJuQtBkszzba53XqVmrTc1fnxq",
  "key24": "2nW4f4w5Px4uSdr7QME7hQpRiQJFxQWzSCGgyxXhe2kmcTYLVKJwzSJribsFT9Fh34j8kp8T9B7kEfpR7m9oXee9",
  "key25": "3j49uJM3a8Wp52tshDSgqbhVaM6naSZENCKF8ejLcQDDK3bHzhk5disnzLdhLBMzyqSB26Qv55KdYaTSSztKCCn9",
  "key26": "39uFr1337J57BLuVwzJfAdLf4x9cA5TG4ApXZjWmhv9QgnXdvhEBEok5eY9czemdXkFeXcY6PSLL1hFL7JR1BCJ1",
  "key27": "vPPBmaKC5x57iyy8EsPSGN92XuEg3LM4oPtKKpmu8LkbtoEbQSJsZxQPLUvisHQfKbGL6EmR7TiWgB4A8YnSsaa",
  "key28": "5BFvfBu89mhBgKGxd9HyAogDU5wZpzzppqjst21oXDbyXBCfV5hBULpkMrTfAf5ZEKVJ1EyH1RFc7sB4ukyforG8",
  "key29": "5zKkVzjuAHnLpT2FCgWvMrF1D6Rqd8cnd4CUycxFDM55PRHF2MsycJwrqx299Mf651bTw2L1GfMqBYPftaYkq3Ky",
  "key30": "4wuQNWPbASaPxeDBqh4yJAaZme9ME5sKAxMWWyxrtPbpB5K9svGcx9ai2rNYTuWxcf6jHPPZQVDVD5pRdCcMGaDx",
  "key31": "5PgytbrguK6FU1Bn4reevYF78NZ9W9mx1LKunQLU2PhmfBYXviyZyLcog9py98qM7DkAT52848AZr2PCrX27Zz4U",
  "key32": "5RGXqKeQuJGuMSWWvcj7H2qjw9rTbwnkUupCRt5a1dqffw1t5ui8acKvJDajkBbV91DztjXGs1fSCCPNsug3fkCs",
  "key33": "dQndZJsdkLECQQpKAgUyaC1y5obeD5n7HxWvcNfHibPRPkDSe8t77vH4xzsUVqKggfo8hgr43SBDSHRoufBGqA1",
  "key34": "47GLbGazA3Db8PNGut6J8ZUVjmsPLgNCjzjPrZPTrJQFGKXUNYQhKAYs3FBKfk5TDCzmDSf889Zs4PhbFQDzrkQa",
  "key35": "TMuMHVP8LngqYsM3hmgnCV8YWB9LHuSszTos3mV342AHuBYrpkZRxgzZMxxUSGNqezN2tLgJJ1XdoZ38ZKQpmsn",
  "key36": "2Meq3v5BmVJRwCi7HoLNzrik5Pdw3x76EeMNwLCaKshoRsqscHh4XcRJ1Fwihf44mcXbvYn4Ljx8hCAhPtjMC4MS",
  "key37": "4QYRYdXHpjNTiBWw6A5brFFCfvzoATPJfjT1U9cGnyEpKXu83Jpbw9sgv1JTFkRB9UpdHVwGsvN5AJsHaRudhtUY",
  "key38": "3ZQhPYooWoCP26R31To5qRxDuQKH95ynS4T8M6visWA7CEiYCz3wV6dsuJRbJPSg2EEnR8KkBonWj5Kcaf8ut5fs",
  "key39": "5zm4oQHZu6Dz5GifBbL6dgTChKGeWcGo8jT8Pvb1TCSXmKwpVYcdRzVVLiJfHDfUTFESh5PyPpMfZirZ7iHPyw6f",
  "key40": "4VjEB6NCy3XubELZjbqwEYz2skuusu1vvhH4k4u9AfU4i43BstTH9EsyvZU2BiKZwVn8eNtkA51UemoFVfhhqRJ9",
  "key41": "2mKXykcVAnzix7QHBV4bLiGph2nWaN417UvrLThtPuiuHXcDND42mGjDYYcemXpgRDKuw55o2HPZb5RQ7tGCfsZY"
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
