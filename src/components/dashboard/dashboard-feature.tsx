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
    "67LBj4zAai623R1nd3tBWtJipXbTv27MkeAKRGV2ri6Dv1JdMc5ugfhZtfeBXLbwy4XzxMtQGSJ1zn1kLjqgCPFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "116TwhpXEY8dDczMptg57MjrDm9AZoqfKNffdGmCxHnrwdD7tRJkSMTEBQfx4gdmpPE8opm8VjNn4Q1ns8bywBD",
  "key1": "56R3DC8a4YLuuT697ijLSTBUNguqpnre8QKFcsuXz8sVtorcUVBr8n2wYPePHFzZwKSG7RkWbNnWK1LBgiL2Vsk6",
  "key2": "3FUPAN4kMs7SDNdtY4qURQ1rQAoKj9sXTFbeuzCv7zqcRddNs163fszfxRnifhfhx1Yb7YQnLgc2WAKbpmMP5ZFH",
  "key3": "4y8QcSu7MSwWxdLMBvtrtQF2LoT4aLTTaPSNKxB7QBwFbTHEdYHTPgA4EhWRVE1U4UqSs7p9TwjZR3dnus5DaJnR",
  "key4": "4KiC63K1jFGhDBdsbynzGJvb65wVJodKEXuVESajEat9s91gaAgk5mhyjUQhpbbfuZULheEZVLawLdew2YhtR8hM",
  "key5": "mBzAhYuziCA5UqxJcQB7GVt4JGWunyQX1BcuhSyUhniBF8kDE1aw7ABLVtEMaHUH7npDd2ZmTa5L4Zs9c9EY8Xg",
  "key6": "2Kbtu7pQ2tihNcqbYaMZgtG6oGEGQUqAr2M1jefmv13eRa2cuAFSj4wiaHoXoMwvvXe6NK64jGEzUsdcrcFxBkdK",
  "key7": "5asjuAdp2XAiGvTTSZZN3hGPKThpY3JW92EWdF5fcDnnpBuoLcCtQjZqs1RuCCFtJGw4ufTzHtCmrkgRVby9uXW8",
  "key8": "5SjeJtmtppcQruvueg2xoZ5WnndQaRvsnXxiE984hZ2rQNmUCQpbC9p4bF2DJ69gCGJ9UYnb8ovM4EP3f8BGKocz",
  "key9": "2e1i9YKPfzSHdk1wpW4iyUNEJy8FGJCkX6UmLQ5TY64dLoxWUbD2zLeeEPgLE1RkGYtueo3ejD949wuFLdQkod69",
  "key10": "wenP74Rg6AKohhA6cVuZ1i4m7AKvYdzzaVQg1bRuLHs9ExqQJDBmPwCcSU31RgbMRcbQvQ7biFnzWTHYFT8utfo",
  "key11": "56fNmwcRL1NqsatBmBXp1aGWaiBXcprc2cnAdRoBCxR2gsjqfnLVToQqC3mRpRKQLp6K6VMv5AH5JzR8z5wVBw1E",
  "key12": "3vJYSHav8jZX9Gs6fEhgRvur1sU2FertSHoir9XjmnraAs8PEkq9xbbykwXvCJCeD1gqBuBCFMHmsZTbmDjVUoxw",
  "key13": "4JK69NhafY3TzV9cmck9Qi1J5T4gQ9SFu1gDd3ejstkLA4RmdpjhE772rZkyNPHzZVS4eNCTYUrEP9xNQaNzm8LK",
  "key14": "WFMvX8m69ZeDzgxhnWQopHifAXFK9TQvfJYExMMxwZ4agE52akauvKnaXDM318Y7JFi5DnpAWSEQuuVD1eB13wc",
  "key15": "3EmruUXpwUtoAoPnm121dxg1RXp8KApUEu1YRXbY1z5F8q8px2yZ9U2FeDoKEMvETKYNDzgZvfTWpdF1ZBT44YGY",
  "key16": "4VWgiRLzM48jxTNGmHsUQTqEHXa4NgjBodFkVVgPvLDaQ7evqKARZJZQE2qyZfoHrTh6iXAv58kALjJBFxET6Q7A",
  "key17": "4gcwpjNHipkFkuGfiG8AG4xGg3kb3XYqx1dwU5LX2rE4kjeUKcV9ifFtruozG4Bzh8TTzHADdYMfQ8T9ygjTLpc4",
  "key18": "42jwaKyKxVH9uUkfhYqr7tSxQiY3HNN6sSCxqLCKtKwiK4YbUXNTXfLvY8YmEBhxy6E4WRyZu2PKAjchExt3rZRV",
  "key19": "kcxHn2qmsQSa9dbePEvLg5JbPFZr4UGVS5RnTp5HPWsTxf7EmBZEtefhaCvHByu8pyrw6EDuKN9Bonk7S6GN1Lw",
  "key20": "2foa59M37H2JWiYUijcP7yqUFNkeRxEYkjMYBPMV1Wqdqpz1vsi97M5CmBniVgZKWqUwhoCSFNFNSiuhorSgaN5c",
  "key21": "3wQKZuJcdmfxQH2Fv4Fazv5Zu7XHP3Gf6Bbr61YKprKLL4JbjgVFRRcTb3ssM1GtckZ3GgLWrnnqaA8GZZjr1cgL",
  "key22": "35bCLGdAWRzz9c8zF775nXVbjMJ7qHFbaACrhKagmPZZbXyiHEoonM6a4oLdMgZzjXtha5LAabvKQ7o8SksLU9n6",
  "key23": "4sLA4WQeZ9u95Kq3hx8Fq4ZZtMm5tTcStJTsziA8FzAJeMo7k6MQpCvPUQ4MqGgs7TbbHxWU5XoLN1FCmfj2SzKb",
  "key24": "2vCKKQgSi8UmX1S1Vv5Fs2qgVosfbzdhRmy3i9RmvgDhuWWWati8z81PhFsMDW7g3ZJk1nqZzPmbTM6yPSfosEdb",
  "key25": "46h2Jv3nr6nvVDMCzg81dLCr9J8k6PGmLU65L7YzcwH9TT8w8Afi7wCrC5Mn8XVPTTd2cjxe1vKrUgPSFQHRK2SD",
  "key26": "5bRh5tKtZaeHFiD5rdxRnSC5ERSVsxxYzQ8id9vuoHjYBCbDVA9iwdfxQkygm5NwrXLD9fZiKH2prHcE8gGKhPkT",
  "key27": "4ZhcDEw9mQzXCYgMrDuiZsc6yhK6uzaBDJye68JWaLfszSx5MM4cscoFcxgDbHMcj7XX9dEfSDQ58umSpuX9hR72",
  "key28": "5qJYjDhiCBqUNRsnihRnigkHq4qBBLC2DgpCi6HA7XjfJUd9wwqx7SuQwWm3p4efYpjBP9BQV4YW3ZeDVcWkcGHR",
  "key29": "2GtwSz3oPkoaT9uC6noURb9hYNNHS3etiqjszBBcbGF7dyeL7xUuApH8qx43KXjaCqzxFkw7wLLZBbhyBbGFa57h",
  "key30": "4wHBg5BpK6hZfEqLLNv8BkYo1XVCasL8kqbaF8L9Dxt8bQzutHcWCUc1jUrW2GmiG7mLfE3YKPYa1bMmoajHYPWa",
  "key31": "2r27VN1P92SRiTKQ76V6g1CTZMikw3ybepLz8pyW1xSm6sJTA1qZmQkM6VJhZrRJnUAVt8VDkHhRinwkRmdi9xwH",
  "key32": "rj1jK5VwgqQdcmaMyDfRpMJQTZUjV6cPYcXQNj3iPh3x1MUtciK3mZk88H6fAhZkKoB385bVoFYHYuZGu5WGgh7",
  "key33": "5GF72hb3qtKPg7UBSMonBwLmf2DvV66jpxEe7wtVrLtC8oWC616VxnEtRjQNzwu5ShCJjoc7XeyA9HKMktEyz7BL",
  "key34": "4kydg2SFzTGWkiGQLdXgmbFvQ6ExFZ59FbBbdJHKFFn4e71cPceDT5PTitLfD6vfAbHMW3yxhk2ET3hNcyEtkMXN",
  "key35": "5wsYrDw6LWjoY594KxmSUWBbZVZgfLqiSGXXm3XcAVGGrkvm5D4hs94SSMNVV1J5gDJqmcNstoSACR2SNwHpcyip",
  "key36": "4LVZbTZmAGKapdWXHxEZhgZ6GfWy4dRxGUYTi3bdqEJwuxN9wwJXjUN2GkPHESxkUJymkxeqp9J4F1m1oSRRwNYK",
  "key37": "66hS4p4zEzFvPkYrsCXornFppgGwv9GekbnS9Y9qBdUhqMdoNHPbwfytC7xKVfSt1UZWERCodwCFrswXKwW9Q3nG",
  "key38": "TVDxkZzQWYsR6pHxGwQ7dcn1DKGm6picPL72mvSp7KEqQEnpW7x9WHbRHPokVA63F8Fyyr8z2CDwnT2sxcYApgU",
  "key39": "36P9NzC4wqTU96oSGxUZtUBH4dHnrbJam3B8YNCAgykNzvbjMo6wSq2JR1uTwaNzxYGLRMiWHRqvsfpFG1FpGsy9",
  "key40": "2SvaWKBaDweGqxnb6b365dPGTjeseJAwG4R9MFHY7kiioJsP35SXos8SShBfBcy6SaSHDmQKhVntWLJQwdqs8mNU",
  "key41": "2ghskvj4evHKVzLZ8TKbG9z5RoM261iYVerLDhTw759CgJbvREjMAG37DjHVDZ7JK3HdQFi8yJGRZHt1j5Ur9Ggz",
  "key42": "SAZopgkg1wicHuTz5qmGM1DvJFtTon2UBmux1mKZwabzFXgBfWtdML6D1B6b8pDSQd4BzggqTvYeztNrDUCDt5Y",
  "key43": "5FpZ33QA21ztdCmETWSqhtzzPGuMEqTQntabApwvE2KiL1SFAaa9JGuh1uH9mCdr1jCehiVUiTyATKEqqpJXBbav",
  "key44": "3tXxpwzS2qEtJckb649cqLCEgXj2yztW8KisGJy7zwb9EiTe5Sq7ctiZA5RiUKswr2d3M8V4fdeJRWEwFVrDVmBc",
  "key45": "Ud7HxzNwkYMyHPac8vAidhWrQgPsk7T8WSfpV2Bt9kGkBqCr6SkdRGDMwFGTRXhYssF1fkF3i9LysJaYxbmN5fq",
  "key46": "jVM37BeV9Ss3TW5x6jzW7DBBPVjWAHJCQTAVQdvqFASRpFaEVNZXbuckGWrn4F4unHLAtpwgP4ihbGdvH6fC541",
  "key47": "n8LAPgafitzcmrjKRQ3gs12wDjWbV9Fbj4mv97SpJ6EeGEg5b5mEKJYtKrxAMFG2VXVHUopCTQL9kbnR9d6YVE1",
  "key48": "34KGkSMjKn6uTs1XH5wryzPhDmMBnrpzFLnikyM8C3MvdMBsynYgf73kwGTsUbqRSfkjZnRx1GyTdUxzUEUwEbZJ",
  "key49": "3LKpxB7MEJ88rcrkqiyeezdU7vn3KuC1txYRQCtvg4F795jyrewiDTFuFmbxMn4XnB9y38VCRGSC3CorSMK7k6dj"
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
