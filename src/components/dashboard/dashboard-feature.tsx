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
    "4p2T9bKp8XPGbS3pgnSApvHYpmHSwC4EYbRpH2TkNfbBEeRBVFfMXbnpFsnMppzJDDuJnsmqSp6GiVQdFenYFj6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TB9kGaYUa3yXNMj1YchXoNkeQdBD3iL54LcFA4QkV9SiRoHpukpa4LVvKyA9PyWuviDztXi2fxkBRQZPMEBnWBQ",
  "key1": "4UZabUi1e7DDjcKtrBMUWBVBFeBcNXexnqFmZn81JYs78Z7UVzKmUutJqjZBHpVep3g8JqMRFCC1GS2MeXnRVN5e",
  "key2": "Gh516cHzFMZtr6cvZVhFi2RzxKHhgbNZSeMtSzmSfsg727m82HyYbrigSVgxzHaZ2rsqfKrggA34KTnVfZsHkpE",
  "key3": "5Jv4bn8CpNRL8AW2gV5viaKMxKRkDCFnZtQ9GoUNAsUmS84KftXDbqcH2VJRp4i3ywwwrd93Wc6Cq9bu63z9GXyt",
  "key4": "63KtUr28quZzD7TWYLzenmHiQZnx2K5sNpyFdf9rMHgufkhMXep4gHZYYL39G5VJqfMLxSD8YKdCvKyq6uBmkMo5",
  "key5": "2PzY8JTnvTWQXvySm5uBJnBANoeMGHjn4fHqSKYiNz5fa9yxA5fbewbVAympDaXwzm4Xv5C9syrrSnSxc5JPBXJE",
  "key6": "2U9PmdCwhtEdkvaQERCKeBf4g7quwxSV8fEPYYsC3tmMUFqtqpX8UTLoLHmDqWzEZJqXuRs4XwqLzuMz1mzZ31Qk",
  "key7": "5x34i2h2XsUyHejztSMLVEhYbDUhPo3cV8sfCqo4RraaFEMf7WscWFtcYsXVDeizgpdhZLdgsKABmsN1pYQtpka3",
  "key8": "2S1qHmvhLXcQPwueYDwe16J4dqJUoZvRwTkqR1Nk7aBehz6snQijZd9a8uhV3XvbXhx9Bh9TU7ufQu7Y5CpnoTGJ",
  "key9": "3c1DX7fu44CV2XEskgSf56SnHJhc3yBKVSLPZosNoHFqvsowFCuRpbNyV6wo5RbWavseNcX1QgfcVwo5QDKpQT47",
  "key10": "4CLxZBDmEZD4ecwQQrjUXoUk5vspK5we75guLKYSyaaHDAWyG3YAM2Q7voHA2FrddNaHZ4eRw67UYziajfC6h8zh",
  "key11": "3YZwrquxPYeLj6zLRwrisPewPxh6u8uWCnXxrasFKfNafennomnf3m6LkCi27x5wrUnTeoVSZSaNG73JUfV15ujw",
  "key12": "3GQjPM7gbr7L5xSx3zcN2nWrjhqxJD6JM8GQFedz97KcaFyGpmcDmfxNXHWhsedn1bBWWByQApaDnZhhG4qmHsiR",
  "key13": "5QKvWB2VYHW1VvqLhe25T94c8EB3yJFGrvArdiXtUB3QD71chHFqEfUHzT4nnyciPUZE4Vf4MsqH7y3fyuiiqU38",
  "key14": "4V9f9QuhAQDhqJuJQUFtPQubVAWbMMXBRr48EQYkjFaibeqAv6QN3L9RrpeaMAjs57UJbcTCKcLpzSTE9enJMZWP",
  "key15": "34VXQmVnJarT79cwZnfgMAmhCrxVkU1YwPLiKv3FJBi5tcbUbv2Da7JFobr5ZNMVbUrsVeX3rNSGP7k2AD5Q6s1T",
  "key16": "5L9fSGeQcFLwtFanbTxgzFkEdz1Xc8kBN3M4bJ4KLD8J9xgAUbeg4FUmRT8miewBqZfDMrMJEKovEyADYcoVA6vL",
  "key17": "2ktqxhedrG3zYtCxfCpFVzDksqakXyy3yML9NWqr7dNLPQwmVx34R6YBkTGXQxurp53nrtkFMCD2KEXEgqu888Uu",
  "key18": "At1MNYT4B5EdLeSGiBNvQT5XTW3kPSLAymvkj6ACUhUauGqtp53ogGhDmr6THcL2GWXL1Rqk4cuHeJbY9SrgXaD",
  "key19": "2dqr855jQkA9qQfy7SVRDo6G4yCkXdKmYY3MC3xXxuxVd9yKKiBqau5Rt5hfS1S8i4E6cCmdBqVi8cAZtUCV1Zdy",
  "key20": "3VDwas74Fterj67X6UCcgFgCwzsXjCDRQKDwDGK8YwNwYVNaikn87bdVg92YCPBtWzpYcGtQNXYWC4N7Q1jLhd9U",
  "key21": "27AqYT2sRMogyyXhqx1PxEbrXHzEMNhC3FjaJYVzBa27oEiimwxFKAmEun6gCWZJAAdaa9JxhT2AwKFFeJrQnXxh",
  "key22": "3UohZc87ci67tdCaWVJHjeEWHTGt4BZPEKLfoBZ8E45dmdtLfjZqUGshtA9moXHYuvNfiSnqA2A39DHQn2MtuXGE",
  "key23": "5mmUmVFF4b7BY9thRiGrQULDFzGvUsXSFHDr6jJHQUdwEB88bqyXp7ojohnopY7qq5V3hdkZLhTKDHtYimaiv839",
  "key24": "wHp2g9NTZN5c2B5xWEmc7kpFQiMadZXMsBGjqUNW5y7XYF6yCCeitCx4ia9rsc1MnH2vufhE7ENYSfEYHhyBF8j",
  "key25": "2JRLRCB91hnzPJmx2qk5ooZqcF8pM5X5LgJN9g3T6Ftmp1zxZ8Juh84oGcUxvJj5k3GPxRmA8ZqbDbo3FpJVd24y",
  "key26": "P6Zvk8KbhDhF6WJtUBStAdccheXSuRptswWN819jCyexJwsPEiitf5spscx1ReEEsKQQBYVYmLP8DAjAZbd3JZk",
  "key27": "cDUu5cbGWGiSJPRhgjaTuK5Fqfb6Xmmai37Lp4z1m6z4jQdCuemR3bWbMX9Z9N1Dbn5QjMvYor1J66apiWSUfWP",
  "key28": "5rSvRRavPrrq1c4LmvBDKMqCqBpDXk2PFihijq2XZcKFQ5tsjdvJ2FssHWBMHEuyD2q9GzNZqQ1WTvw9JbKRwFsi",
  "key29": "5UoFUzvN9zSV6Wa8ZibMQeJgYKN8tUt2KypgwTDFKw3L37uJ5BrTvwMibTPNq3cpJTcnfNftzuLTFC1qkQQiy7pU",
  "key30": "2Ja1QFa9CzWGcAgqDFecQDNhTvkqSnzMc8UyP1J4KNxvs7eXT2mRtNwrXh5q4sctmpfZXy7TiZDqJK8uHMzYw8kH",
  "key31": "XFVmwPChtXgSCJQ9VMyCXBJi2hb1dCY4hDSBeZLL9reZWBT74WWxYbY6VwBwDQrz8Z4k8ui8XFpYvhUV4kNhgaz",
  "key32": "5REB7XCrq5X5pqX6TxmncZZnAZrEZTmoaXAapqX9YFqEYmnCgJNaNeGadsgPxGmn58V5jwAnm2iL2jsDgYRLJFWy",
  "key33": "2W2fByppr8BcbHGLEZQYtcH1GdQYtLddyjUDPJixLoLV6WGAhnK6hF6pvUP6s3ansrBZZb34aoYYjt2jp3GD6ZE7",
  "key34": "52KcbSfA1ktF8zGqi4eHzZaNgMJ2VMT2ZBoERXXTyaHarcMmHZYR5cacji47UhUozYUY6qg19uGe3ZPw8Y77uWJe",
  "key35": "5ipw3wMPkxcapKLwaNCRnQTHGqLZjPFMoVdeLKR9RmBh43L5mosGyhNhzEupahCjLcqqQ5mZ7RemLUPf22YSvuZ4",
  "key36": "2HwhrEgtoVD1jkE6oFwiKjzuEA24v32wBfzSh5yeVpBqGnVuZz4ocuyC1CK3nwQMTa3BQS1xnMkQyeiQT9omtgwX",
  "key37": "5DDGmByizAy1pBWjrAGLDDdZ6QyMGFYkNYu6KFzYwqF9gb3VHhUwHzr9GYarj7DXLBETSuJzav7LDG83eMD2qP2S",
  "key38": "33jvFKFgAPxUu84FETZUs3oCA6iHhdySzsLjVKBFUmDFBALikMWh1YPF9M1WYECJ8V6ESENEZBZzVggtdYfAbqdf",
  "key39": "67pNRGDCFkHY8DaJVhneBYTkpKd3eKqM3rdP4Y37xJAq9KWdZYK58fV7XsMBYu3V6iHWmt5fEsMEf6FTq1ZfDTBJ",
  "key40": "3ui3ACEQapZBY9XsveAVmdc8rrg4HtTVA4AYf8Yj9fs6RcamRS8mEmdtxw33xVrhjjbe4MZfQEQu6cUvqtcFAE6P",
  "key41": "64X3w91JMyo37Wi4rkKXpMW2zMJjPkckRYQS1F97owiwsYEDiz5miyja8QB8p53y8zsDtTujZUXShC7TrZrRawu3",
  "key42": "41FrHsEPzWvoXFsD8wdNgUWmJfS8BFft39qsmESisxjdXru3Dg3u4GLgrt6u18fYKp5a3r5BW81JodGmQNhzgbgt"
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
