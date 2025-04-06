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
    "tsuAVKsEDkSz1ejumYPnrczZpkDFFg7NRRHGuYeQwrnzvV777wKKwPgTwsYXzBwiH6tgjUJWhVNGigBDoBpGgVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M13BKPspXJpD1PQtQF6nZRbMvU1S553e8UK5XcZtokj1zYFSEJAS49QUvjs56DAahvQiDxLE8ufdJzqKGodH36U",
  "key1": "PqAtPx4EH5P8cxwK87iRUxUjrRHdE8FUWvoxHc6Pn8YXb6h5i5vHRbWTEcdyDsiLjp7GW7p3X5J59Yu8tSBMkrw",
  "key2": "33NRKYSjHxZ6quqeGmV7sgFoasbp7hmuAUV4T9RrH68qrac2EW6iTrQy6ynvCAyMjPRzoZyiGexBHZZHcwZ8BtSZ",
  "key3": "4mwwjCTT3m4cAahGn6sPDZctkEGrdUvVetnvDTavTbcMtYuQj59YS7WohDXnawLSi4Rrs7Cbp5E8K3q2mSVcJQWa",
  "key4": "4G9BDT6BzE2A7PFUzSzViNVNneT8vZ6ndxS9LcASVXbKf7cC9gEAFjRtfpt8X6KghLnxaWshYvBuHhyjS21ufhSs",
  "key5": "2NPokJb1MytCHoGRzx1eNHn6HgQ9abxPUJtPUhHvVRrsyuRAfodf6Xjf5rHGz2q6U8sGroW1VZnfra7tcK5FW8du",
  "key6": "3zSSSvtyf22fiweZNZWv9opvyg5gvYyNq9upt1aCZfxvMaogbWbR6njirB6R4cy3B3eHefmAXZhEHc9QuZNDSfpm",
  "key7": "XCtbRdzKZRvkyNLUrLP1GNmdhPRkJK3rQScM2MRH2B1VfmHpV2gkVcTz1wqaPbfgmPnSgRiPbVyBCdkWabMmC8s",
  "key8": "3SW9hJPoRgQiTNVtPaLr9qjDvLpJJ3nQbxANEjYiAq8i3EbAMjixTwp37HvPW578z1cM5KP7GGH65k31gq6qfSxr",
  "key9": "2VVsfSs697Zz7cPQo8zjmNEcdriMc4p42jkQjfpAhD4muYh3b6pvY9CBWn5xXxs79hJ6M3p2XzTP5vZuUWVGGiKd",
  "key10": "5q27gQ687rtoHS5hNSaef8J1s56iriCn6FTFmxssD7Pe9EkSNqt7WpZ1BEKfHUivx4RgYUURrK4AU66gePthQFTT",
  "key11": "3Kgh9oFyRfyoEjAUfsuVt762NUa5MjdkwwTrT8Yeoic8gVU6Jtr75tiytexMCNGJcafc2j98fEYTdBWUhEbyA2UR",
  "key12": "hCujghoPWDJ2K8yvySZkaXRz6MZ9wnKDNLRJotaMZVmDAPe4Ycw2FzqYpauajdxNLWjVh6MqnJU3Ktp6FfkAiFP",
  "key13": "2PDqpEfBUcHwDZbsK7TyMkHvibteFfYSrXMJfBwDkq79mQckPFLmLe8rHsKaPzh53whQVQofh5iaDHawLac1xSe1",
  "key14": "fgcKcJCmDJmFRxQhqcCFdRsVnsxXKYExsFUxerf4XaE2hKJuSgk8petVksZHu2DAshW1d1hNH969qGMUKNYAfKE",
  "key15": "2QyyRQR46NRpwBzbgndbJAEseCWiRaqPeE4fbvAfQDZFye8oN5j1dQUQDVMLxePa3iorr4S1dqsmUkuAyT21Zpga",
  "key16": "4Cw184NJV6pwxKE8LsCshRU8zFZ1dz2r1xLyyKufvyPZeGT8NRPQTztFXFJRAu1mQa88anvrVYAhGoLo638bNiub",
  "key17": "5gPrYT4iR1aV4a46nCtWTe4XdmPi7PJouMH7ajv868RUCUgHvtN1wCXTaTrzSwLgbndUWAz3yxE5YVwMvv9qNAbY",
  "key18": "5V1vTCz6HwrMApwEq6yUef7FKFX2RTGYuDrKyAdzzXNVY4Tcbd4djxxCGDmBfFiQaMKv3Tzs5XvFtnoBQj51Nupi",
  "key19": "5Vrne8CTrLb74fduPnEtxEU2Pqqqn4JEhpzYMoXAwaBxbvkX35u6iwtrUD7q4H14mrbxkd2SsEvEBAbCzNv8SepP",
  "key20": "w4sUvotLRwVxEMvL7mSwR3QADZJUWNyUDY73Sk7tVMT34HLPE4MysgAsXTgRuSGnZU6A1dD4PNAssnGCLkevNzB",
  "key21": "9b4VtTfzY16sNTcVL1f3TNMnVSpnVDwr2yLnSndzYT77tW7LETA2QLPg3P67MZTdCgzEAN9xD4EysgYoE25hjNh",
  "key22": "2FUPDRy8463WbrwipKMggNez6nMfqZBu1pMKeDJNBnKqyVaY17fNuekuxs19w617PH6YHUpss7GuPT7dzSFkMBiP",
  "key23": "2mfVBymYifkASt4sbkoKTmXaBn4GwWq4ttH8GDPdkHZjirEP2j4Cw5P5gxs4KJyWhBfgzSW4pyBv1Cek3tUcqkgp",
  "key24": "4bmRWKD5yLAjf25ZnS4kCsTvmcmHbHRiMRXQULsHZQunwXVJCV8GSmXhYegL1a1f5bAK3AfuUGNnm1GnxuG1hKPZ",
  "key25": "5SkKBTqpHngknfWHu8Q7qskh4FFXnyiZmv8XiqY8YqWY8vvCA8mLfpYgEYmZs8hX8HAeZBqVufwRq3qsAFEXamjz",
  "key26": "gWQGLgXzUhnoENxMz461Hai3kTHAd5ZRopYPXxo9oapBtgYo1jpMLSPufa7bmmSyGkYfSH8eVjMHo9wpGfSYbAt",
  "key27": "HXvYifLoSGxPz4QQiEEwSEn3XGS7HcQGrMkqeoFMJydhEehvYwbo5aJJ3FAgrrBKD6Rv4zoUDby55s8tJ9XPWvL",
  "key28": "4dLoXF5kJFnzSwX6v3VBk4Z1TTMwVZBbb3ccZ2ZenExHosW5wd4jLDG6BjdUTmy3gxMxFpgJ4d1aDYkxHciiRL8o",
  "key29": "4yDKF35pRfmXzk9PDoTqwZxKe4nrCR2nYCDFEBURKD3SmkHnoTQcKbH75j1ZKxGqDNYvMVfDMXExJzakrLtA4Xkk",
  "key30": "5YKXUoYmz7f231QMsxhQNNpTz2Kk5hvKM5VbAnTBTwHaWBG2svyzsTSE27VVmn2dR5vQhH679FAEmfiRL5v4qnay",
  "key31": "2Z81KabdCqRsg5cakL4zCweR7a1S11uyiccEStnBjJKDFi7sQj4y1a4dKXjq3SCMeqqobcLsXXDVK72nDEcV2JPv",
  "key32": "3b3g8vVo4dRPpwV5Dg5x8G6ZeG4KoCyYurUChA1CA7nGkUyG5pARNyzUmuo3YgtfN8stsCkAh5Z6KwTaopBBpf9R",
  "key33": "2bR8A1PQToTxcm71jaCtvxUaCW7ASie2Mk2Hm2SfPjTcccsx8Vj6BRQFLmJ4ywaBCB9MjYec4GoVYJgptKPFy6m8",
  "key34": "3SiN3PWcWQ1VttyQ3oWjwntd3tYHKLm4wMyZqftxRREubQyKwEgVLEkabRWvsiimnDCdNsYDQL2F8rP1gUQZC5pG",
  "key35": "4VFJLtUAhbKKVkcKju1XrD2iNUrjCSqoMTRKZfQqXwD3x3vTrZ3SF7dwnD3b3YbxP89oaYQjJk36XizoRLjgftNJ",
  "key36": "ArMFCWWDYUkF3Ty2Mjr65Gxz5bdshHTo3Unc2spYUC6dLy3yDikqANFZNRpdKKKf3Ck5YuaqB9mUYwDxzRCgRPV",
  "key37": "f5gb9TfkMeTMaX9BPhdMThTPrVg6ebwZt7GZRWEgNBarjqB6q8wEUoqEY9doNioGbTTAuXfuQ5cgifuVNZrnbxZ",
  "key38": "2wnrahBYqqcFaNmXVAVN916xUcCR3XLMrt2Dbr16sdXYLYH2fEgKD9sEMVwWNjGByYHoxfnwhzK6xg6xZuQ5SuQh",
  "key39": "2MDAsueVrmaeNmUbUaPxgWBmzZKkYzsEBwfwaexnzCi8H1LHg69PwYK6Bq1qXAyMNNWyddBdLwQEpZR263kzdRz5",
  "key40": "47VWEGSVwEQtaPWVzdqTsiXvoS5W4xc3fCSXspavwLceszLzHDRucbPTXsaVs1if5MwyTK7hbdo76awXf8mYzFoM"
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
