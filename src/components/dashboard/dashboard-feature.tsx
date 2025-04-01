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
    "2DLDDzHkxsZSoueZE6Suq5t5UCNcgpEyZcBvSS9PZdBbYWQppZZkWfvP6FmffqLjcd4L2oYTWXezQsNgkNGCBGMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qzDkLh6LhRTX4XSZSg8HcgzrvT33LS1XAnuAQCzqB4Jdy8DF5bu8gj1MSx6gfkGVM3n1wg33dZ46hssxaMAmLWd",
  "key1": "3xn2KRXnvwmGn7CAJGGijMNhiihdY1ZjZfYBThEgyEAjZqvCcPXXpdZvLHex7q5EeUgjz2yM7FhMT3iFSH14494M",
  "key2": "2TQ21eYQQGiiidJQCq5CWbGcJpzFZ6WHR9URjxH5mzvHNRet25nKwhdwzhM3aukjVWgoSh4dsBiDhnV2Bfcapzd6",
  "key3": "JTMx218tSmZBK4fzLrtXtgRkwd9twWJQZRxizecyeUECexM5cNkJBAUo4GCA1NzoX4xsU4VEibwee5MNj8Nytzq",
  "key4": "5uwSeSL8Z6JtSpUn1HyFY1Bxe2z8sKJVRyTJr1UJnDGZaUujpskH8zoUv1SpSAGQqDqGsTLZEP4217U8Trr45qvv",
  "key5": "5fVC74fsYCFrf1fCk8neeeS7aS6MDFGjJRtqvbejyF6VE7gmho7EJcQeaTVnQtqCgDNCKMs1bJ5rFbQchQz3FSx4",
  "key6": "5rE9Ww59AEaBTA6qGyFzufnABaP46qxaax1WEBRv6NVb1H29SPqUwFXXUReBk9eM1RbhkcLvqykSGQUTKPD2CeNv",
  "key7": "2VZSRaqcLWTfbAEzzLLo4AHKSf6q51Kbh8aoPgaEAFyzqwZtN2ir14TgKMKDHLmtZzFLq67tVDf2TQXodDWsR7Dy",
  "key8": "33MbnPxxsi2UBbvP4L38k9EuCKahm6jPJPkwuuXfYtPaDX6CkXX4yY3xjyBvSFBQwdDCeTwKvWKLRwmVoowDGZUH",
  "key9": "2gnA9m7X5HmT5P3oyMYtJH2QmC4qdmcSrhdCtRGcQLUSJGQfnjQMxR2i8EwhecVdstXGgo79rvzP2sVqck1LbjR5",
  "key10": "41RanMEXqG2zReUCENswTn91sUw7SigvvongoJhQ9mjqpqqcXjNYhktw4hceczgFxaBW8GjpqvWcSGQeTLmW6Rqc",
  "key11": "2LkHjFNTcq3hi1pFjsSyDffEUabWWbmqWQpmhfrRuBVL4ruXV767jYpw38WQ435CSsmmhq4iKX9LtzK8jgnDNHJM",
  "key12": "4L6Mug4NUwZZ5JDMzNoWTy3X2X9rTJvwm4otyhKst2JBM4dE8p1e7dqVwH3AHvTSVuSU2m4mq5Rej553Q92hY54D",
  "key13": "fhXLgTpFQjj5C7FFEFqrLmYTWH8d2NRN4VMPrSG4Nn4nZC6ZBVZ13EJVR1BdynLnN8zycAFdGSvwDi8dwXSQtGN",
  "key14": "VLWAJsSx85t8t69A1WxWLcBsJivSNuf6necycqEUVCQQb3nqLfePi9QZA5GFo1nceCFVMUtpih3AgYw54Xpg6Rf",
  "key15": "2n9XGXxQx5Hyqu6KBuFZMFNgjVqsTRvAWLPWt1VK4Gm6BHqbsM9jZo6uYhpCiKPoYVnY2jABbRKf1Bgyfr4usVtp",
  "key16": "5MAGHLKsvmtWLceDVzL7HtcB7mmPdgwT7FA6HjTaSxhFw71VW9JJeYzrFKMcUCzcdT66HZye9QybAtpKEkmt36VD",
  "key17": "2Ko214v4f9FWDtmewDQzWmmaWQrwobsP5UNATCCPSo49jn8uLgkHVQizLKzXcgvSe5GBtjG3qMz4HMUwYnKE4uec",
  "key18": "4NDd2dhsHfiKU9PijtHqqcU6umgFxTMQUXCVy9Zg9Y98uVwLVeFRx35trb99pMG2jUznLixcHgWydy7paMK5nobX",
  "key19": "4CbqEPjrxChNF4ANyLzjXSV2MAmUjHRvhpFJqm9ncApke7LtBsjea1h9KcZ6qYhoPmawjyEyu36w1MKb8euwbZYZ",
  "key20": "67hNgnC4VUqk3B4LLtktQjHpmCsjnCffNN3NYCwBjAaAVpTi8xgAJffot6YPq6RF7JocWf7kNUUUGQ9FaKwW2Y2u",
  "key21": "55HGtBszaTp7vhBkZBnk1WXK2oULpJo5xeEXN5i8h2kLtuRUW2bFSgZRjTKTdAjeU2mdjoggzUpYticnCymWnn5e",
  "key22": "jbR1UKAzf8XKAcMQ27Kxu9bQ35ZcurVwVbtzMUAJXRXBwJks3KcTLot6L2ZhKtsdDWbMVNtwkageYSPu5UZgJKZ",
  "key23": "2x1Zaqo2kAg1sz26jWFkUsjAm1W8RyZsHwSzZUd7kFneC1FKFVzU7MxLWyGkTq3aCtGyKBmhcuFrWCgdzsAfZnDm",
  "key24": "2i5X1XdMWwDte5hmmQPhSnrDrNrM8GW6V5nLtefngS5zCBCciivhgzKr9qQutj6XMEuRS3v3fpLBCMJGJdLfRLDK",
  "key25": "5cXXg8HyzwkQRZVdebghyfxFsXynAm8dokvMgwrv5XggpKLV6V4yMZDmJ1DfTiE4DYxi1NMxHwMZsyWyL4tsBd5R",
  "key26": "5i5WFu8oNVCTJ2upGHcFMp8UthZFRve9yo3BkpYBh3H2wYe5i8Cu5AcdSh5pNUgrvLN1uyAKpCNxS4iXETobuUEY",
  "key27": "5JcTFiUzpRm4mHLyi5aSC4Mb5DJbqQq8Wt9TBLXAbz8LFHYVYbuw3xWLiSagghNuRE5p8S34hkGAagm1BvRm1wVJ",
  "key28": "3YbsJoyPewrFDaMfdqmoQhhF3vBhhjkuhEYtmeMw8DZkxQruu9Syv5tsxLu78QVaSKN5B8MhCjqeEfVo7VJaxqFY",
  "key29": "2HFsRVx5iBtgeHqQYKWHz2rJMCDgvDDyq2iy7QLcuGcbPPnxY9mXJZmmzanUs7dTgDvVEhbCXseYD2EyszF9nyTT",
  "key30": "4ZTZtsCjKvSGLPFW7yUW2TV2mobMuV8X4TsTGBv9ZYoRegBc1uZpc92baar7CYHUyeVVGhqxs5JNKPkEqhmwUPLs",
  "key31": "3LBJ2bsLD1y7u9PMTznk3fxtt7SVyA8mjroqoq1bADRvyYohZLc5iKcdxDkXam4fwrMAWzkLeAVSDUq65Jcsfviz",
  "key32": "4mDJekP14bBc3KY8DCwpyNNU1S4zDZ5s6GbMEX1wvV1Yr4z39MR9AuRCk6wxYr7PuC3qN1G9WaYxC4Nw3Ecg9Bwj",
  "key33": "25fv69XfmjXsvSs1gcaREwjYKMhec76xe5FGrKQhFuBZYWXzR2QnNQNaPhZNpgoayhYLu6VMEGMN6Lo4inxMKxoL",
  "key34": "3zmmukRQpQNnKyuQtqFLifVT8zhHDbERW49vDK5L5FfT4TQXRdLUehTWvtUks2vybtURgsrsGN9ER2T76sKZ9aKz",
  "key35": "3u9CyrLHLuz3USzfCTwNjV8XXC5y6SeLKeceG4XaAGn9NpUDAGfkDCChqLSskMzDiEkkzJyZy4qEao2uu45r119Z",
  "key36": "2LSWGrqcwfF3dJB5i5BAY7nfesMaP4pv79TqEZX7TrUZRYDwyYwoQNa1SMZ2aMNC93Cxhy8xpEN4EGAzcVwJ8Vgh",
  "key37": "SA2wvaCgmFVzbwe9ke6ieTWwF4f4M1b3eys5mpe1J4FVK5ERz4mwuyLxjcQGXnFG1KFHGBQi2t8ocFSjgrwwkB5",
  "key38": "2BCS3SUpGXYw73iAvGFaqUgageag9pHSvpWiZz6h8zj2H2jn5SWf6BZdPaiKgPas7DJBvnQBVAH4jAshzrUydga2",
  "key39": "3SDkvYWBdcFbFc68NjFFss9nReVnHpYJeBMk5Ccr35cQt8489Lper94CkdWGEtoFDJFB6XjiXqrMP8NT91WRDJvU"
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
