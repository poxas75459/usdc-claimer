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
    "2HMf4JPiNHV7Ked5hjcQ2YQ4A3Xab2m4L3bufBx6ML817FkpMtnzB7fL5MEBQxaMMd1PKq1mMaLp2qggs1CBDrxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zwZUBYx6PtxgRo31cpoJepbkPDaVSDsyWjeDv4LVu7LBEWfQ33aBWDpQxinkVWp9K3wssTHsLPUjMaPNXZiBYs5",
  "key1": "5KiU6u8KcJiceT5wia6r8v2speLPVCdqdVMEGZy9ZGa8UwsZJp2DS1JWR1aooZ7wM1rahA28LgFEeaKMaLiZvR8i",
  "key2": "QGvXFY3zHqHAfaW1yyA1RpGTCw9en6iJif3GEN2sd6iWpgb1qFkwheQCFF6EVcRc7RMHQcU3NBUKyNaDfCrEPQJ",
  "key3": "2ec66tE73d3HG8E5mTh8h9b97GhEJeZ2Va7oPyqqpiFHYTV5t4wkZnUnVrQbYKvrnM71FPV1ZQXK89aFXT5RydXp",
  "key4": "SiwgEjgHAeauSp4tFFqVQTivRFnEYnZ1kqK6WQijhVDzdbhsiSETX52Ak2ScF48kg75S3urvW359Kj8BC1e7bTE",
  "key5": "5dR44kDxL5EVLod7VsohmCUiUu4449NVghxAU99XAU99CmyLU2kFrCmssc9YScpPsswg15rbEDmXh6iVXQWwu4UR",
  "key6": "3LFVFoS6Mxm1FcL5idodWrnUfq8g3Y11iNk1kocKdNYXr8uGHVfbKXXGe4mdx7yDPT8MgAZ7rsNvBi6P79ttosxL",
  "key7": "23BnsWHTKmrRpTHtiEg6mqLY5QASfEnydvaWTupcnCs3Zsa2SnzqCb4tWPBPx9veqk27PCnh2EjNGJGxMnecpA9g",
  "key8": "375rrhjg8iiCnkaHtUdoBkESd8L7tqSvPPFvft9JrqXfMDjjphy4sWrj9zQw81a57bfW65YZsHMp8HvxwWPwAKRH",
  "key9": "3UR1BkgLHPnAEgLHeXDbciHHGpyPLXXTEe645xGm6ikgmaWqKCrq9uB3hdSeQaG37y2ANzQLiUNiaDiLnZbEH3hd",
  "key10": "44ypT7DLab6sk7LifFgUcAv2SRbj5MgmzXK8TAMjXahsKRRCALgh1cj69R5iBwo7SHMDD3vXZbeNGEt9fgPAxGXr",
  "key11": "3FFzjPcVNpHfw7HG4GtM1nL8hHRefkHSvE2BTWLrWJTpzWT6n3KG1wSi2oqsDDXoibX6WhWzbXJY2q8xKMUMvqN2",
  "key12": "4yaQKco6q698sXsVFF7L7JAGHT8kaMKQgEeZtWZKsFPZ3XV1NrUKLTsfrLzxGQMVt8Ap6E2jwcbVswaCYeha4mWU",
  "key13": "ygSeAz4N1UjrtKfreZVMuQy2skuNLx12CSzkxqgunZtJffQ3UR9DVEcRdq1RBtdwGxEW5a4Ag8rbQs8mcmFHRAN",
  "key14": "5STTaRC1csHhXED4LsSL7vkC9ceEkE58hSR4TqS78prAT2Zqtm8RwHWYP9ERPjXRjRw9W2CqQYwrzDZnxpR4dCGu",
  "key15": "5mNPc8BikgbSYaMyfnLg9Bkzj4dM8AtcEzJRw6W5mWxAaykjigyxNTbBnv4dpGS8irRRcwegL5MuEkjinoLQRjZZ",
  "key16": "2gY1uS32cUevE8pchsVsgHvQrJYw2MTiGudaqw1bPr68jcW9hPCLuX8ibLozAAApNc1NJj12EbbZ9LYReuViB7qx",
  "key17": "AadfbNm9VPHetDPy3dnvsWxeb8J2sUSP7WAECyNWsgCdLGWyLncr1KxXQZe8kFXpYehKaxEmJGS71tKUWs1XQSr",
  "key18": "3NYjQc6eahJSx4BhBWHvq1xwkFbB3fW2wKkXCWSPZnFqxWVSiuqwc6D2tA6xHyaGWhgBw9CxArBeF9tDc7iX9zhm",
  "key19": "4AsCovXfLaCqEj4rsoviApta4q9TpJpqZ1bMXtcvFXnbKAf4AS97k6zaaJaPbjj44XehgSsPohCTDUAa3wshzjUs",
  "key20": "5MS4bfXzTtxrAw2pmVexbVHpCbRxWkPicau1uY4ALDNvvSXyeBuzyYxSPJdCji9V3tF47xzXUiZ6PGMMCBsNLTqB",
  "key21": "5CKsddiFbL2mFrMvCcYvV17rTxK9m5WeTRU48kQjt6WHLEcfq7sPCrygSo1QWdhfRmCNHXhAAhZsBkzUybNVLzeG",
  "key22": "9KB1bNcB7TyikByEz4dY1qxSYECUmVNrVabjcQwDZNgCWGev35NTeMK9sTkp58SGps1sW42M4YHStcxx36p8R76",
  "key23": "2zRsAVEFG9jTe1VzAaH1Eiaj9tCQSxwvKxtt5ibVzBTdyeJZD7J3egJnDPNyjAEyLaRvuJ952Cc5Q9Fe8QvuiPiD",
  "key24": "4CTTyqCzyS7gVxRScdb6rALXM2HPiUdneQBogu5cE7rNh26A8d8q1jNC85AhBtnnGHqWvBb183m5v7whq73rLjaY",
  "key25": "5xKB23CHMHAcVXkBpSXQrm7AWEW4CsBbeunCy4oaGTKkUCH3UuLAw6vrepFMPmyhwARTzcf48h3AqntMphBMECQu",
  "key26": "5AVeQyppYsKZrkqRy43gVQ2ujrxNkoLhgbPiYoYiDYEb3GgTd6DmiTSJoxHwtzP7s81b3WpmxuRe2XwCpPqurTbK",
  "key27": "4U2HAtqb8SghnuYn8a72f9mXHj2j93ZbgG9FCtyHNaJH42AZtUoh5wkScVvAj2bBEikXA17GCt9FEke7kyp7YpuN",
  "key28": "4aFmCGo8VARnWGCjbVgGy8urx9U6ySUMHEqDdwyJ1tFFNEf5bc28ibnJowfEu15YZnMRXQwUoDCPcEAeAVzxHw6E",
  "key29": "33YFW9nfKomJhk5AfnzAnZMeNNZPpL3t9VkmnBUVeHxDVnaHgsFdw8i3DEdGm4zA1eY1WcojB8yvD9R1HcX3HC8s",
  "key30": "gzx784KBi75xTjBQFWd73ZRNDMGqVYRmYNt8zU1fmX6TVM51iwFxJQfpxrKDZRorvNzMCaEcZN331AQBMrqzu72",
  "key31": "21dsed1Lk8xFbioBWh7AQZkZf7x9PT9LMQEsXPzfSxtGJ3H1xSXL9k3GK63jE2t35vyvUz3s4vWS26gZa48tALL9",
  "key32": "4h5zYUBYt3dy7Dq5aehZH87K3ZpT4L4jJprXCBKUB7EDwRWzevFpu14bXz4kje7tVWqPVbWkzdXvjc6GjdQLWMxF",
  "key33": "38ZCzavuLSbnqLqiSnNukWxAkhEbQ3DqNVGHUTAXXCpSLhdwzM4b62AtFvcGtB3YaJyT7H3x6Knu4h1jPVuWP4zj",
  "key34": "3yw25EaDUs9vi1yhQnpmTyrvfBZBgJV36VwFHN9H912JTq9LxLpP3JNYnrZVXsEBnawbqiL3GWg6J9RPeShof92v",
  "key35": "5ez4e3r3ftWD6Ai6doSszdcM4EdbFyqSSmNiU4jt6wFHcjvHnVfBQeiKaXVLHmijskmML28aLwfnwUPuEnzTJy9t",
  "key36": "3qqR9swhuPYbVzc4Hyw5axEJGtrWb5G5Hv4QUSCpwFc6eWELfMTV9dAjmjyN4cws2hu1LX9oYfsoky5CEXyMUkmi",
  "key37": "4ENrrNZxybjRKxKy2f2Tf7CWqLMiVXMR29gjKRCjD4747xUC7uzdxuWoNgC3Lhae3avF8jxih1npytV5sdZ4BkyL",
  "key38": "5M237vAV5s1WKSDh1tSe6GG5K7DhtPv1wUQcQHDXA7ozQ1bBkF4p3HJKDX9JTgLWxnbw8cnqDJdwpFP2Tz73Sc5b",
  "key39": "4t5BCv9Ju246A9iJAm9cojwboqwwizH79Yi898cC2dFHebqT6raSUqvS7U3du4rLYJw6rvcDDgysudymWKMmpHN1",
  "key40": "3KSNCmBDr9XmbW3aDDTYKMoymZxKHEsCVQGCmjZdWVq6wdb4k6k9tT1GQY3Ze3AUvkeK2EhC7GqLJph1wAwKQSs8",
  "key41": "5hTcKSb5foLdKSxkqiPP8Qch2JiBa5n677SkqT13cQUGkzh7iTyPWstbTGwwkcJyy6DvWEiFkmGgiB3bPXPSWJ68",
  "key42": "2PhDRfRt7Gbt4vfRM1yrsK4fsGbYEypxvUoB3tD56ZhWUfdfJteVbRt8vap9S46reiQ3aSUKfjfmRq8xs3nPC96C",
  "key43": "4xt3bgpXEdvQTeYtSjRBRVPwWNGpFZETG6mnzPBGkLRwzNp8DxxhWijGUBWnMkAVKDdU61nQ75QvvtfoxxRKzby4",
  "key44": "5H4absVVD6StXJkN6Hsx7FZu2pyF1vP5FPJ6RrNVCQbuR9dD1CzWwP5RCGNZ3tZFDdZ6Ptjzuzx4UJ4c2yZD5Nrc",
  "key45": "5FXwNHGq7S1HtBfkrenjbaCT91XKuBiPoZ1cQy2MEGojtfckTtzZWkXsMCap1k6WZJpCQDCHtttLHwAXPhMnjBi7",
  "key46": "25oMnsPaUaYmT7Qboe6eExoGKEiyPnYpZXWoGMBYdtoyaKCWg81oKT2HEF5WJReAdq2qUawdaTDFyVFpTyRjWK2W",
  "key47": "MXd2c5cBDFadCYDKw1bfMfEXw13JLa6BT3wmfWDEE9Crq9Hn4GSLqnTc3RLmCFkSogAoWMSxDjDbzSmDEqJbaTc",
  "key48": "61s4CfkSMan8s5zkDezQsAN7iU3AnftNGFaQxojNpHuAnRESDRyyG6Fqek75USsF4qnwwzSne7fuiFwHYqUCRaUB",
  "key49": "66uJXAog8BkAof4JZ8o4UJWw2duarbqsgG5ke1QZzDRfbEi6dmL7xB3qTMEnhqaZeC4RxY9sR6jvsGVoakyGVtEJ"
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
