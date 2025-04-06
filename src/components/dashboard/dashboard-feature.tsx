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
    "5g9uivcfHWozucfJjRXNbP3ABBNW8xo8pUygFm13gsnFPJgYnSCWHQBWx92H5TVoszgJYnEYxGzHvg9fCXD5ESTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4atK2DBXFULTc68hdze6SKmLVMV9ozRTUKiqbGnhi2Fz8Y9oMFGfre4zsWPixZsBvwZomg77cvVu4JmDtsJRZTrt",
  "key1": "2Dcu64QymxiAJy4zBPriAhLJGKpdZ667uhKCQb5M5cZBVoLuEGzMd84vDvTLQN6NvySci7Qd6rujER9d2UNbfbj7",
  "key2": "3SwUfKhDHP1fUq9eapKqkcDKPeemEEbp3wwYyYJgDP8cB9pDDyCvbRt3Vctae7VVDxCHkQpmDUAnjcC3Pz2WW2uU",
  "key3": "4QSF8u81Zbr2jBob5kiQr4FNFs7FT3apbpzV4aoLq3SrLbjrcE1axGWzkHTgBzmoTiYVswxTAChNVAgQ4B2FFWjB",
  "key4": "pXDBuL29izH2DFhXSVve3mekvTgRrmwQ4iVUM1hwSV988iyMiAT2f2DsotUvsQx4QVpYRw3acHRFciGaA7Yy83e",
  "key5": "Sqh4NkEG88himbN2b3ngrSxhMEFsaJRZdZSY9Jg1xxCCZzxnMZkYDzHpqWRJ9KwPC5QFVuXt3X8eiE7xPsh1HU4",
  "key6": "3pGK87Qji3RpMpZ2fjotxRubSqjM2XFtydfp218CooHWeAHq4bgXEusCnZWQVPdMwnezeMn5zpQgZtLmQevENnWM",
  "key7": "429x7FXZJJjCmVgmpPbxfbJiqSY5eFGc7CdGu9u4kcARfoyTWFxUfHLPYMDmNL2uH32pcdz5tAfR1j49Zb2tkmZP",
  "key8": "5h3Uo2DAVj3kHbu4vn464hitAfBEZYo87Q8N9DtxhebWmLLiXWW788en5m9TZ3kXRGbpjfgLsfVV7hZAHQH3ygSs",
  "key9": "hCKSsePtoNTwt8cMfY7TLgu7ED8xtgkC98T8jS79KUeU2nq5e7NqAu15xLAjNhueoChvZicnJSsMRjDJN1ZxgSN",
  "key10": "2xsWTfiyWFS7JVsAip3yWfQaAMgF23iGBoNt4jysQDUAEw56uwqcwJoGkZKQyyNWr3rBjQ6ofq3jiz3aBG2CJayC",
  "key11": "59Ea5ehWhEpEGJpAkKGZ17e7M9smdZ2ukqfCKK5h2gWhRmDPJn6MZw8MYBuM7VfhiW9GN2w7qoYKXnZBcgJC5sVH",
  "key12": "52vJy3yjYtujkYeN2JecGaRUrS3a3cRQRUf8kpwxAqupVESbYbYuSfAJKMt8232WpCjt1VXyf3cmpr3pUcP9Ttur",
  "key13": "63t5yVoL1DHWvXm7eZiwLpmifMchxF32PMJLLb3P2K4UjvdSQxempZdJyJjfq6iMH8WpFPsF4vpKeJA7VqfRZJcY",
  "key14": "2Cj2JSrnv4Ak1C71vBsiKXepgKxz6j8qoqpy5QAppjA3JKUcnAnDYT9Mocp4HNqdYP7oLeChmBVYdrdZ4ZSv1W89",
  "key15": "5k9BVumspE7NQKFZVJ2ykrrgQ5tWZEL8qZgdb6fxD1UhvX4RuPpay9iLwKe616C6fjuh3f1YquPKzZDKixnr8Hm9",
  "key16": "2R1iqnQ8RVYveX7rwGPkvhtWKGrhwW3nuKfFFTctu1iRDDVLyBsjf5dqMgNF24D67WAzU1A3Q6ToHfuwmPmZQqzh",
  "key17": "8Hot1dD1TfQMvtsR6nrUm8Bhnj93ik3G2bBhYWbxENyyJNz9oH4kJm3VM5iFKoe3doNsSrnC6eRqd3aqcwcN1up",
  "key18": "48EEEBNGptu9H2RWq81YknFXtar8dv9u34aTwFkCtAzgNA6ztByJxXUqEULzBDvF1zGqvuPcDhREokLYi8M2d627",
  "key19": "3ksGZTdVWQ3m4Es9wVzLVkXrJAKLWLh1XLxha8FGdtmozASvPsqBEE6DQ64xePBrYV9huVh7fHaHGCUZ4hqZm6RU",
  "key20": "3tyR6RrxPpgWQXuWMF1oC2V2qkaoSXKAnUXi97B5QWhWfWbyAx93pUEFdr2rGTo5PXqo1Z3spmTFXHAUY4Aj9ocd",
  "key21": "5TAAdBqGAdkSPG94wR79tpzcgdumkjxo5NQTNUzUMZqTE8CUzomfHYDSG93LaYt2XsofeEDpsfbTjyV4mHSA1Uts",
  "key22": "3uqEnM7f4UhBVvy5W7ZW2Gy33ZQqw8TAcCTEVwu6tDN8XH6NhAc1CfT4D5VQRCcT3dN2rpoLfZenLYXasJr7reUT",
  "key23": "SCKmpiVRSyWxAbrocsHGan7Li9SrVjooYtbNNQtcKrJb4DzqaZNk5vFQTfuzVEcbXaXEqgcRPXgSa5NvUoHgiXP",
  "key24": "5BzfALxC8KWuKR3HskQYdj2QgF7w8vhuJeUzAy5NrgDvHWC2Gf6ycsgYX1oNKkUkikYRPcVBVcjSKwBeWVdaqAdW",
  "key25": "5DiqXajxgfq6BdSG8YLc2srLGBmQCUJc63KHbvfDVbyqfJfapYj5aAKZ3jLQwo7Dy35pKSus2Uvn18FLyjV8WHL1",
  "key26": "59SJ7x5yDKZGrJK6kSHDoYpB4cmgXjejmTwpKf8NNfvMM5V2T1nDze5qbfec6Uq88qCffdxakauK2ppzivJvZ6mw",
  "key27": "3hTWfvwuaaxBT6rS3C3oEqqQd2Wu6KQhvT96uENNDvxCKdquanmJCmsehZR5DsRmz4DmGwwB1sHjNhppnQKsrAe5",
  "key28": "2bdk7Zwz8pAAYZ5kVYdkwSASnQWhUZupM6ESZTuBXGGpGWzxPKHqwDfb2gH29N8gZaQiKB2vE8YtFNxrCCwnVoh4",
  "key29": "5trRtsdtaTAGiPsZr41BZ1buSSSMc25Xvk4n7LYqZj1xbxZry84BbUBB74dndB4ZHJRDPrAtJERoaC1J1dGNwQsT",
  "key30": "7oRpcLF1iMjXW55pEJtgPePXT2fPrbYf8sxadVZ4Uy2Hwcau1KH2nMrBQT7vX7b1q5mYvSnkr5ncu9BcF6m8Z7j",
  "key31": "3DpLrdMq2SkBKPNqjE1VACG3JED16vt3xDRs9uiL2vMZnqDh8ftiXEZNVo3ZdTYi6MDWBj44wrp3XpscjsTqGuc2",
  "key32": "abfBbW8s4BvY7XyrZG6LKW7QzSLavLkfTNRFgG4i35NyTmvgdXXBW4e9jKa5yfxui1pxPQE6Nkkxm89A8gyKoCL",
  "key33": "32T3xkxrpkSGj6djvWpgEevk5wUtwqGQ85QHmhXTpTNp1weYst6XKKBXpuPbQvPXJa3ubRchmMCwyQ3ZRRE8EQai",
  "key34": "52BSmewnuQAZsYhRt1MrzjsFpcqiTAQiwQ4PS9rXFpBNpG2T7gFugCcXLVJDYtfQxEbBsWWCmVnir7F8AePwAYxQ",
  "key35": "3MbZCXB4GeDTBbDtSydRt6afsNUK4Nm8dXgQEjMRLKeKDPRJRxZVH2KBurAKGpDkmiM8y3dVyZZbp9yRYhGrLDre",
  "key36": "3Bf7tMrkG3Q7N6xDB15DEMf9LPG7aSsX1R7GYpZ5QKYwrtZbfWedmy5SuQdMYyFo19X1fWKtWXczT44E5yxrZcZ6",
  "key37": "4KpeaEziL6p1QkLCaWe52mFtfhqcuyzhoeryruBCP15eyxKf3oGy2edYUtubLS8HD3M2RiM6Dm8JY6ktBqCtxSjq",
  "key38": "XB5sFzNh9PMmLLmYUaGUGbrH7eUC7ahoZftFFCjqmfGkXrEZFW8bywXEVKCeAuQb48p3CXwNFGKyrv4MJHhDTD7",
  "key39": "5bzcCefWgTwmjMfNgR2B38mby9xPLq41YefxBo8bU9QVfR6gmS4C73wQQBCJ8ciYRxnEbYPBKHDxLKw3uP6bXLvw",
  "key40": "DSTnrzm2bq1f1552XmyFK98x194LAZrUrfMRZYV2dgHazV8sFGvTtj1Z4qHE2FDPaKAiares4hkbqxFoq5oZ4De",
  "key41": "5SP488yzk3cUAByKTfftFHRngNDRaY6DQUgMzvLPcLgY5D75VfjhBbuJrZRV31dg31LJK7F4EWHrjN9CsBApmyzE",
  "key42": "53P9sBh2CCuVGgk1StmCSxi2SQH2zJ1M53nt62aofcX3pt4SF7GfCMxLnsijY42BkZ3MwuLdmnYVaa6D8eQxhLxz",
  "key43": "2yFAzfcVjauHzGkG6jTNergQhV7wdrtf6b3XrQeyqKaFKbfLvuTcAx6ALX2r1P3CmbM5V84GxUJb8BGeit8BzTDz",
  "key44": "4f2LawHEMh98fz8qFKo9MVbtr8Y9XsWHiVoJG4Mex2BLrahsDpX5UejGZuy7wZoU9zkErZV9AFrtVQezZrfAbfax",
  "key45": "2JfUTc3knQt9oR2vGwSdhvA3RcMKjTBSa9hbrhTv46NLVpAwq5arzuBdr2ABpWp5Q8X3rNzHvH2si9Ceq8fUaQq7",
  "key46": "3sPxXorqUHujvqj9MvNGcthZq169xZysuzKAtX2UbNpy6chNoqSJBueZ6EogrgWgLSqY61GMP6xTqkaSP7i48gYh",
  "key47": "5zZNYoyiQeS9nFaUYEJ943biUMR2zhYgMsC4La3KgQMzWucYBfx4r6Ec8g9FNDPoCPBc1df5BSZHk56WxmauDXrQ"
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
