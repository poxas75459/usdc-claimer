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
    "HCMnouKUs2Ey3Ve2FxnM79Ekgn4GTUVsPLJapvihHYr4trALBnDVNYRNgbeFZfBM7dnm1NZKgSw5YZeMxWyndh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RkCsXWGx1GopJMrXeajYy84MZWWnPgMq1zm5RjKR3dbGbtaJ75r8t842jnWX1zxSewz8jqwWm6xEHfN44H4e3Y2",
  "key1": "3XrASeQYtBMKc1ZZT9YHXFrLdUkijxNX1CDsPQy7Ftphz2wTNmnjrw13nRG37Kgqf1FAZ9hrNW9nN9sMV7sLSRJE",
  "key2": "2DeofBZsYCTEoyCYmRsjHNtp5xBZ3zqGySg9zguMEPt8hM9HMsCDZcb2HYp9nEVGQVJLRaFr8n3oMXbupvb8R9n",
  "key3": "wBhoSvehjZAccc5nDhYS34c44c5xLCRA3ASiFBCtiQHF8qV8xUcjafBex8dcxMoUZ7tbKstGkyJNQ9ryLkdsfeX",
  "key4": "aPwr5tM9yJ664CNKqhFSsLDUKJ15w1ZkUbK7hs34oNNQfdoAyWMJTypg6Cro4AKZK9J48wcwMFpwf5wRkXYmmuC",
  "key5": "4WbwYkM4BqB8kyQisfZufJG75FFn9YAARWE2Vm5Ut4rmJxMQbLRGNJ6HaFb7XsQPRxa5QRAJr4maK7bcWBy8b8Jx",
  "key6": "5raPgfgfkgkPvR3nGJZfbcBbpjJx67szYoX9paZm86qbS47sRpRmFw9FuA342sKuj5AUe7NUgkUeemjYbuNqoedz",
  "key7": "3NXfVAgp5gwALKfjgiMEcyRUXhKnJLaNrcE6Z3WKoGLQKUHSoJ7xTtDYVhgG33AiEA3E3G9QbqmvuHivqcCn4mFT",
  "key8": "5zksabRT6j9tgwPifKQBcnNJWz5qa8DbE9jYAiSpNq6aTVaYPYUffmKLju3vbA7UgCNeMB6fDcnVosnWe4uCrxJx",
  "key9": "28bm3wXUypZxyRjyZ351Jh6ZyudApS6rNkge2J3Se9pHF5bihq2jLiebPRgZ9JEYsFN9eaiWgzGkCK1UUyU8FhX4",
  "key10": "ko7mdCj1Q5e7SEgVJeev3fSjuwxFUDRWmQRGdDCozrsoGYQKV1xJgJDi4JJm4XqtpktgHvT37iKcbgrXCzgaGMp",
  "key11": "4TYqpdvKBYqGcW1DMGMdGmMKJgmc1LYehkGV2h7H6gZhGtG8CNct2XvhYYfgogugT4j4ejd5R3P36UvcwKA8bm1x",
  "key12": "3auvSf6t6eAfXmY5t5irBu74eaDnmwgNHGMaxa5BNYg5A6Hrfa47Dc3H6BiTBh5QqdYr7bmDS6Bdd5bE7VxgLovk",
  "key13": "2TqLR4vrMPRxVfRBTB2dVi7WXdB14yqdpAyFKhRFSQxYjm1KtfTQPyrwPJiGcP6kQ65d1uqjxoaePRCFSp21mgik",
  "key14": "2ktvWmVdEdakYmHGsLDDezsg7dZbtNz11ooaRj1wpU3FuLN3nHKFBmf8QfKrPZ3t1zAwPUsP221xtaT9ua3U5kYU",
  "key15": "GxvTz2bz1b2k1TnFb6Qk7Aqwub92ueZq49mVAg1jVX8S6sfzDiGZepRCKvXQMF2Q89aNhhv3pRv8czt5qJcVzFj",
  "key16": "4kkJFe69uZGPkGDyxXrk8bfxPRxxUs4UuSA6SjUhxxWVHKoXNBPUw6HtH3qw3T35XxQQAc4hpM3GUTie2MD9ruq",
  "key17": "3nnwnkC1XWwS6ZGR9tBWqqwg6tbSy4WURHnBdzUJX9mDVvMkGuhB9C87ojaihGKp1PApj25LqhiocESxFZ5TRpHU",
  "key18": "4X2FgBUAALcCvCyenYeb9DEpEAToQqSBg3prULCtNyVH9JhEE8Ecsi4YcMdTF8L2Pwg7epUEuA5otawH17Q5x7Ae",
  "key19": "3jheFbMvM4R8Em21Tvcre5TUpFaYZH9ebQywS8QiJHExUKuysB7oTXGdJqrrEXsij9D2yrtXdKc4uHhPM4Cnecnm",
  "key20": "5uZosg7atAvGLehMUTrjerrYoE5uW3me9raTJWYKnYzmQqcDtPnDi75vDnwCMnjQMAT76KyiDKUt6ojSbzDEiZmK",
  "key21": "5KoxxjNVBKmwypy55WRf3dn3DRwp9BNT7yyPCj2aSM7sgK1eoFeoM3U68Pjke4VqJsc2aZr9ES5niquSh3J8SoKc",
  "key22": "iimjENTY7wDL9bnNvzJztmwNGzm3HNCCSPeMaYCm7Wee8VGhgCRfED27TbHcuKwXbLakATCL8tkeaj8GKRnCtiC",
  "key23": "52Q4YvbyPwu2WcuejyycKD6M4rmtbx1bXiQ5Qq9krNMMLaoMJfi9UncCj9JbwDm9PECqbBfKYA7gapdoFiCXPG5g",
  "key24": "A5S21iKBtdk8oMPTvA6B6JyXLZUBrCqzzRx4XoujRWJBmcGdoHtP39Pk3T643QtwvUAP5j1pKDp3jHJXeRNnP3n",
  "key25": "4qirP8JfW5VYV5t3oGPp6BVk3c526jYJnBR3ZSmWvsxj3ednTK7PYydo8hsb5GPy35quKpCcJBm9ivUSt574FCMR",
  "key26": "3ZPpLh2zfTxE2FBzvZvXB4dAYj6UNmRWqv186sJuhwpbwBTb127XVXTxb6dvPkLkFAuiubAEVosNhTpVicRiphP7",
  "key27": "4FHECa7zR4HGhCak3sKmzN21eFkTgTF4F72R5YH4uoqhV4BdSGZn2v4keVAMroV8eohEQdpySPDWYdPqvJBZxjrq",
  "key28": "pLVFM5V7Xnsbnx55sxScYPtbVHaLezQqN8uvUCSmpmo33CpHxpEpKE5q2QDGMTpAHJgt3ofBxKH4ChChXCBmQDp",
  "key29": "2Vi1YJuAqSE4WxMTKscSzmqFN87hh64oQzovKs5spQNEDERjTAd1tETEBJaodG253E2iGR5Drrx7uvzyJuqZFKw1",
  "key30": "4PFMGWZfZeuYR3EJ69pBjF9reQa7yqgcRvpyuo6YuRNgqqHZvXcrNj3kdaGFT4gEESoBgrPi1oev5SFdnqCPj25c",
  "key31": "3unSX3t93DTd1iGFw2bWqNjiG61uLyX3JK6GJUzNSguLDSbs5ijpTpnzyVDastgj1Y4Df6J66nC1B1iDhSzRJxCQ",
  "key32": "kc9P43JkK9tAaxj3Z6LahZ2HogLv5feEWwXtVrn8sPQRcBm6BmJnH5os9BoLsBH5tGYWCzAoZCySA9mwuws9JDR",
  "key33": "4e2XgmFm4unudj4rsCiadeMsbS5HXn8HLvsKJaTjRPbeRLV6iSbWwEP6uKhd94q23gZHtMctehhxQZCR67ijsHSW",
  "key34": "5p5WE6ajmjrXHfm3e5EsvrKBf9gcWxoQ568NS5tYdoVWdQ2iMS26B15MNrENMoHboBQ58ZZhYnczBFYBh9kHpLJ5",
  "key35": "2QjRqPqyAaELm6bPDJcnLxz3r8wPRB7gGZ812efXs8zFpRzJPHHoKWh1ymFGxvSjdaQiYk5tKCB9YUb35aU5KMJa",
  "key36": "64mfTRu8bsRtPzurgGMLwfzEPy3LCKJHdTmPcYqZ9ZZFx1k5C9x5p3HXuzYZPpxuVjKZcba1RYQkYWFptiuxn41m",
  "key37": "ga5ai7a6p4sVx6yNDZQg1KRRYv5tv8b7CeTGmW5jSZkYdyaxmuvPTuRZWu6X1eqpPHwXe6asAdFWwg1iqjPXuhP",
  "key38": "411qncJmSS8QgkJZJtCHZH2nXC5AFNPQiGNhpZiozJ7eJ8arnK53Je2ikdHbiteRfEHY4k5Z74K7E9fciaasekBX",
  "key39": "3b6k6kkmUpRgvtXdFLWFKwbPz4EkgFt8VvRW17MikzbLDLGipSeuEm73qMmWafDRLSNXxYpNZoXCkWPK9CWnUPwu",
  "key40": "Fzb6kCjhnxt4HjgxstmsBaKNtWcYqaTNBZq4qAdGq9u7ospmrjnzkCaMb1b48VceXyVMbPhgVP4MzMduWv8Dob9"
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
