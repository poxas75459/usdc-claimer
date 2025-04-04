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
    "34wXwwFXuX3Df3aF81pNc3pbPqGQaSEvW93KHB9NS3tFGTfWzKthcM3zNRdDAcsiyoFcuZMZvhdE6CF6PTrYqcsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YZ2HMmtXxEJR9NJMZmoJh7kMYfr19yUmJzJDnhmcVWhGshpMoUkqzFT85m9mxzvcmYUitpcpm6yKRCtoS5X4y93",
  "key1": "311b82zvFtjNvZrkvg65XUcNcPTQxD67T8i8NnxuZrnB5yxm7mC6zQwWoipsFTaCvqte8X7w5SXT78hQicV1wkQ9",
  "key2": "4vwYpQsezJKUVQxK5JRDxd58C1Hu5EeCZZWina5hJybAj8TZWfTW8nbVrE8f7cDB1SCitqW7LPJMZ5ZUW7NvGpdR",
  "key3": "XoULPS24bdVPb4LfKpkBLQXDq1toEgRpVHfPpxiRWZ7SshxR1paG14K2dAquLkiwRxmor9ULMQFP1gKe3QcDRSL",
  "key4": "5iMpkbgLp8tf3cwMVkEYvsdheUFMqFQ868W8VBk6EeWmrJrbeBZcr6iMDctPeT4jNRaB2m82SN8gLrYfuyDwGGVb",
  "key5": "61kU2SJzaboKy8bf3YNdug3paYJWbBqppfZsghGLCT71ohdk3sqbxqeYGVzGwd2VnCVTYYVVMGp7daYxSEqASRd5",
  "key6": "4cZu7hL4TvQzxivrVrcJ3wRHWYGN7AtJ1HENmcBcQUUJqKyXH8fvduDnq1cf1Weod9C6vjWqFieWZC9XcKcAXSzj",
  "key7": "3SMr4EvCMKtGjtGsssFpbFLmQ7716NvHe6r6gXEXeH38ZvAGy9wiUMsysKyeGPFsBch2KjEYgRvwtwjbKqwLB4uY",
  "key8": "5nHX7vJQKMLziUdJTfsQwJVSC3ZrS4ZBSLzBXXPQR8yKnmUEfkXHZB9bgwj3Z1mhE45Ec8BhWUaXzCh4bojZqFrB",
  "key9": "66Zg5rurSxmwuzDR8jkwss46NQdAAhrDfW2cW2NguSgwuJLK8QNRqEd7xhVtezn5KHPjwH84fr6mwBwaVx76Ahi6",
  "key10": "2XDJ4ryb166BPaSc4LnUMda3eM2idSrnkVwV5hxnLfNHRkzUSSj5FBtAkYGRdwi35tz79DqSduY4Q7F8zCVqSzA5",
  "key11": "62adooZtmSoPjuLUc4ZtgtnkdoM8nCUPop1jY6MtDQzuopQT9vA6p5q9Rw5FvUHVoUwifwmQSwAX1NECVRrAmgS4",
  "key12": "2MSQD33WMZdJaoUSTUFrGgxE7QgyzHpREwZp2yYqc6iJtpehr3wYHHj4dB5etfgg7W5jvnHzbpzGfv21kD8PxFMY",
  "key13": "Y31gY8BB6VJvZrcM2PEKnBCNesYjiuphcTsnAbNa5CoxRPJQ5bgkHTSbP7x2hzp1bJ6gjzW65tnKRQmqou88dj2",
  "key14": "3dKa4QDFkDnFfB5zT3gbTGryUxu41BgKnneC6q32fXSAQLAHw1WG81NY1uQc9HPurfWunHaYLT53vHzzA5tQ95NP",
  "key15": "4kwdfqxaS7RVPo1MXATsXcARb68rUAPhmvcPSa3WxSFsKUdSQhHA9zY74rGbQr3NzGh8gcnUKYASmcxNSUBLXd9h",
  "key16": "5snUBDkZbXopE1J5gDQnoBcKZcwhLfFqu2eRwSf7VbP93zvi5rAAYmCLMRkL9UURzLG7SwjtWFLRSB6WCETWK3JB",
  "key17": "DGB8VVepDpRdHm2obbHYbA9LwYVi3UCeNkARVv4BcQFXiNoGN87RZbWkakUEborz19AfSpNHgaRVM4WmdkZu1Eo",
  "key18": "442kpXMnRBBA1ZFVMgn7LiiSi77aZDNGfbDFfUqZ2NxGzdAZuy5s96nH45KPrnHkRg1mEDvHNEJgcX4FosBhWz9h",
  "key19": "5xtMsxVHPsbn9FQyAG2kCSA5tAPLrQXiP3tEp49MEmRh6uWQwAFGhPYy8H8tMYQ9An7TJf8z6zMBRbwec2m2DQPM",
  "key20": "43S2cbZB9TdgwqK3gkyjrK6SxuLqzXAuxswR1yNU4MTJfhVr6bFSv2p62kuj79XxwdFpuJU69whCTZDNeeATAf91",
  "key21": "2pa9yvdD8b93WQrgm5raGdGZGskAhEsWQNMPd8d47kApQWZG9441JxiEtr12kfJoY9kVTDUrHDt964jbdz1DTsjq",
  "key22": "4uWKJ6eQhKwJEGNTZhboZcP2BVQyT9doBtvXmMfcSBd79Yp8SGBjLyb1VUCykZS4zZ6xg1NBtF5cbPeumcEq7TDt",
  "key23": "5LR5jpCvNMnkSezw2hVgzMrxdULusxMh2a15RDPV18WSJveDdrAvNDWqky1vJfZYJMP2eUniHM4RAUFZ3dBrR1yn",
  "key24": "2vHZdKpr7yAtXiV82BXpd7ZqWJEBd2SWx4jC9HEFKUjFmYLNbYTrUqqAp7BhctMjBFjxC5PGJ8jKomH9adTHEqMX",
  "key25": "4YcfEuzSkA36d8t3K4qYskPhEoy2X6qPVWftdRZipjU2fNwfTGDdTX2XwaN7dRA4XCCYMaRvbZGkUA3VZ9Uf9jiW",
  "key26": "3jDWoqgRmxBxg4W3AKyxEmBbYtrzg14jGKrs1RRpTRxoeF7FSH73rtt1ibV4hqGXBmGH1gMumvp99TPeGwLxVwaz",
  "key27": "KdUpbAtpS9rfzha8a2Ah2dVVH4mtZeedhGJAn3emojyA4odR31voktm3gb5CskfCvS7VBTymbREqWpYkK9Yddpa",
  "key28": "4ybRkkRca2dgQTaFHJSCFC2UpVF5WvCyLsKk4NtpLmXxSUm9ibqHHbaSzHNAu14F8DUD454WJvFD2xNmWqK2oThQ",
  "key29": "QLhMZavWAkbD8kaMzuepNVRbH1Wghqpm2gsrEf67HYuKb2EsohcDxeuM79a2RAGD44cmK51kNevZ45FjyjVdVZp",
  "key30": "38p5Y1krwuZKif8qg6bJxZrb7KU9eVifJKUfsA1NN8HFh3JoxwsaR94zs5G2Bv56R8CzHQ6Mf8KGa29UG78HUvPS",
  "key31": "2f6yaJHyznqMnPRBxSKvYNRVgj5SufSDLPLnibmx7xV8fo1Tp2fWq2SfRP4UMwz2TS1cdj4ocjijF3yp4Xg2E699",
  "key32": "3fEhEB6QpJYuopcnd6XuCdQQ7ytxcKZYGhzRboyEeiRUkyscCyJ8zZLJaTSkUkW6pvzAbAhvmcghPBzi1wuS83eP",
  "key33": "1pMteuMdHo4Y7bvEp8Ef3yCDPGx5awwKFWuKGCCKEWvQHa8PfSJzBLZjqKdUGsxhqf5YH6pewgZzDk5ovuwCwHo",
  "key34": "3C8LBjb99YCsqxsya6AhxH5fpLMBTmzFsLRwPQ88YwyiLSgJy1rr5dwg9ZScnSWn4KSirR13343V76Kp3HViSDQY",
  "key35": "2cabNf5PMMhpaLYFjVYsFkjsmisxFRrXQmPSZxAqgf1Y3bXKwb87aWC1W1kLFnYotQ8bFqE6VcKHi2D1C29ykKqJ",
  "key36": "5zsaZrwrUDfnLKNqP5LCL6tXFtXfEP3SeZ1G9wUZ3YPxcedRobHpTfRiEifQngcL1s7UVGJZ4zxJhfMzDqyLNMxj",
  "key37": "4RTFQkX6Cp8idC6d1TKY3uaGoSWt2C8wkpyxevY2T4km5DLfJEQoG9yjuK6DtteczY9VivpBv6cUEbSDfiks9gVo",
  "key38": "4dFjnrkabb5rrqxa5kAVp8QXdexkvsKtJFofLA6dJ6Em7qsXLecu1DZwtR8L3t3URUj8SLxs6ec3eLXGFo9GuoTz",
  "key39": "46AS83WyZQbcFYsKHq6GdnDEyTkryrAX2Y2WZ1o5wFb41hHr5XGaR1x9CGNAm9U6r4oWVZG5gBox5wTs7nSYf7Dy",
  "key40": "5ZEBuAZtESDibMdh7ZVvYt8vQvZmM8noHxDNUqWat9zg8j1CYLt5LkVvFxb1wrjw3qUZMxaNT8Pvo11LY5wsX7tu",
  "key41": "3tJcLDhZiVGbkjLbRuVZwwuz5bizH8RXHn9fpoXpSeNoBVMarm3Xau3aRkob4XEW4wrYYfMdd4hWqMMoVKnJJsDi",
  "key42": "3BNJjjTUKrCpPjBmNLSdw1QrRB8QdQep3L5oLbx3SoSQcEgeJDirbdtDJbbpEiMm1Kyryx6tDUPccLJVVkZucmvi",
  "key43": "4V3bA2kyf4ZySADgsFjJh8YM7QxFhyTZJx2PcBfrUU136zm62Q4Yo7WzyyTkgTmq78u72bS5oFHgrVdQQwGJ166d",
  "key44": "2rVcDDXWGAboi85FPU4rpnAYhfsqjthNL2b2QLnbpfM14L3LodRsZMpGeCdy4kHs4qdjEsUH8raz5TcfLXgqHYYP",
  "key45": "3b38GEKeX9VsNNBLxkDViQk2DnAaYCZ6kSzY7TPrUC2ERHgbwkfnNYacSoFqXxKJrjv1bYjZMiSTKUHmdzFgCyk3",
  "key46": "2beEARYHdAvpEoiyjsJ3qhmbxh8gjsaQR3oTF8J1A5sRBqD5nWGHEyvYChvxqJWvakig72SNqnydFDDiofTtRZiY"
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
