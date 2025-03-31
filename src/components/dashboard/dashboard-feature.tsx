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
    "2iwVWqrYhzitDYZMRWhGcTmweAA82TZNnGTqzpBgb8UFaFSVbecNSY8TcxGdruxLuzUThpmgKGxPZ7vLLPuTVgKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qoszMCnHMQWomMDFpMiAQUjYhAawFeWStvHP4M9jBo819xU1nCrbsuJEzsR7H62dzrmdW5LLyuJiZmM7Ph8yMHT",
  "key1": "2xSeRgQrD5Pu7hFnx6DLqsmxGoczknQqk4H44YkzUhdQiB1oGud7nycVJ4sGheFKBdojKwZkmLLU62mKQVLAvphC",
  "key2": "51KerHc6xcVUSFGSt9M6cBBthTbcjmEMLXJbkijZvVubDWn5HxESCw7L1KEnDnYKWUs5DP4V8XBbFEDsVSSmhN6E",
  "key3": "3Akug95EJcC1vYGHDMv9euj3L7bjQN319BopbAZP8PPX1VTAyC6mSRHH3ibL1xd3LnBkuNLsHmZpz7JFeEaxUmnA",
  "key4": "53iqbv7bmDeVC1n2KANtcEoxrVWJJ15Ns2X4Ev3GdQiiqdDi1nut7ukuAuq6LP5v7ycLGGmXZKiRo53UdVqc51i3",
  "key5": "4E6CJfUdXQR1CvXD8mw3qzPtGjVEMSP5SNN7Zxp8CzMz3WezpZTwmyC9W8THrVJqXxjLpnGPdQXpYx98dLSjcXST",
  "key6": "DVwYHtGFNawxmGwj2f623f7JCE21MHvqap8mTio5kDLEdHUmLu2an2usfUpwbwbSuZqxLNiPaxPw6MfcjnFbPQm",
  "key7": "QJRdE3wkN92nsKypzBFT12W9urokqp7uB223YR4zcRJ9oB5piDE5178uMXZ2ptnn8V5HzaVRv3SXfYEeHs4vHek",
  "key8": "49GgTwgyPsNDnbffobbiMRQbbcJNXfrpHtJojpJBNHqbuz1D3JfV8RFh7M6XGtM4gX5Lk4MXQfjtXB1UQrm1oHBW",
  "key9": "3u1svJfLbyuVGEUE59xTriS1VFYUsHjJfxkQAnZg6bEdwpeZVp8J7Ukk7gX86xarK4BVqrhfnVchwo9F7bbUNSU9",
  "key10": "5zWamAu4EGR5hDTb6jmrD3oiq4AwKX8cr7atgkfTDK3QPBwWUKn9rPyTj9xCJdB2gN3k6P7nj8GGEt12n6woYnCq",
  "key11": "su3LXBr5T4kcdhCPM1yCR3BTeubZJ2YPg4FGFZ9iFbMRYPRVn2p4s2ZDNY3onkv6zXpEdgjQr1jaQejrQxQCV6c",
  "key12": "HRNvukrKQfinz48rQPsvZxhiCgDgaWe9YM1TJhiYyqXcggY4daqNDskEEkoKuaUHmcABCr8e24wTtbsRyrzQU6h",
  "key13": "5v3FgvmbLQYkAK1sDvQPRqgaR2qtEXoJc1JVbnfqhwyDJKCY2goARa67rDmTFJ1CVbQE9Z6nQr4YrE6udtt2CK5h",
  "key14": "LukM3JW3V7Cj43AHBavt8EKoHHQMZLoP1vUCnJWLmw7Fw3H5MpCyjkNs2YvLM2LoR5wkWAamZZDwyvEX4MWxJDR",
  "key15": "2k1rNt2vtmoEddPFBAu68tNLTJWRqBexmZMNpoyM4cjEAzBfXVpK8v5dPqmH3N1tde8kzxgYUsEBaczqLJMtuznx",
  "key16": "4SaMyVpXDFozZvMpPvp6v2QRndyKyqCY1WNbCywf68fdDBt2NS1Jw7crmhAqCaNoPBdbVgpnhBxES3L7PoqEzFtM",
  "key17": "2xoA4PabD9vPWdfWUFRhoEFmEQAbgqTGnJfDo29gFm55iiTLPvURFaZw6izDdJ1ftVj7QkjA2KYrd1PCFHgusHt",
  "key18": "51vtochDpDyRQbZFvije6bGy5Ck7wianQE7ZFtY5qDYA38zmuVTfaaZEtAr1BmHL2x68UgtwvDaTruE91WwNHVYi",
  "key19": "2j8niXgs3dTPsMPSSePfydzrcUhDaskyQN9HFWwfFLYchSmF9EeZZP3Cz9EGf5wazcUt83SbFTx3uhg6vHiCvBZJ",
  "key20": "5x8Md8aXdY3vRmf957W1THrbG3bVLTbuppTMoufxcwqNw8tWNHc4RvQeTZicbswjE7G95ZkqpykwwGqLQxfnPaWa",
  "key21": "3py2z9tJVaNyiPMpLLfAFyb2fgVo49Lq9eFLW2NviH3sz8Yys5UJnhscfVyAVD7nyhdHLq2Uu4HjY9Y9Dx2sMx4P",
  "key22": "2Do6mg9bgFEwtVccFgRB1j4PRWgGtsyRQvYXCWvPponLTxk88EefaAv6dgJbdUeT35ngL551E3erpTNP7KBTZUKG",
  "key23": "64ux2XCY9U4bNngzThHY1m6odvwKWCE8yDBiQRGKXvzpTX5Xbt6gDZatJRvtUadibux8nuc7SS8NR1qnMVZHMXkZ",
  "key24": "3GrHBnNqq7LpFQf7q8k1Z5sx8yxKFnyZ8WXJh7ZSutJqxdjdFTdTNKjfwr6a7JAcrjWDAHB5iEcZ1bcwitHoZPLN",
  "key25": "47qZYZ73QTdUoPQKvWsszuHk9i6bCA4EWS76mbkK1cMkqEa8mqe5upxXoHoHWPZ45PzP6NZWmNhcfU4E32Uxf89Y",
  "key26": "5BK2op9p2jPb4oiBmK1vGL37u6RAqMDBaXj8PsnH9GyZzZAEde9kDA9yDtwdwu3M3brdg7oj6CWF7BphtLsxw5w",
  "key27": "3iQZ7k4yVTdfANVzmGLi8TQbK5Xo5w9fuF2dFPb5Pj1CD9Y7TFmiHn9SMeds5UxsgzCWZmnbWoDXUkB1fkr2gX7f",
  "key28": "2hf9A4GgKg56tgpps8Xj3pWr2uk2gzeCh4Sq1y8uKEfQHh39ioDxx5usiWu8PoKRpoaMBx8ghu4HW1aDKW8EkGaU",
  "key29": "4viUf6hZDcNwHi7wvz5BoZ3nXVrU5QYJwTxJyZcbF9e8KKV9axGhiKUMmKmvFjrhC5jGdhtvqKE4mTNAUnkHqqL9",
  "key30": "2TvpHEa81npcCHs7MPAVs9MnvbyBpU6Bqx8U5soo9p5hhjuy3jeeZbJNBEmmUm1DbiNcSieX3QZxG3WcyvAwjNhq",
  "key31": "EVwRpunRWGPjtUFAEnSo4ZGezLz8GUwBz1PLBrgjMjJFi3aSDWeaLXbp3uaGWyEPwCjUKaqXHFuies9CgsExjxL",
  "key32": "5SqgvNTPkB4UZve553AR5nHcdYdsPqSkWA1RT7B3PC6oWd5e46wpFFcNqexpWDGRiTFXLdF1dvZ77VZoemaSYmFU",
  "key33": "4YQPST1wyyXXSeYe11bCptXMdPp2P2dTpHuwqpnH6RzAS7RJSQfzCCfdS2aVwt9z2XsVuSTJsE36e9JtfVsnrrsB",
  "key34": "YH76ZgJfSWWCcECCWqokwwpTp6JdbYCScZ8YgUZVpQ7fMpKiWr8WmWvq9g8g2JnuqC9EsWX6oMoR3xQnt2eV9fL",
  "key35": "2mPfnMwqaXiLZu6Y7spR2KRUch3MX82PmbLQwa9cbw7e6PeKtA1mVnRKR5XEr3yu697qAYYo9orFU9etA1dU3j9s",
  "key36": "ZuWxGZxosv1eLCSvqvp9KGF7U6B4r6LVuf4kQdoH1jPknV1QzdYfNMeUm2YM3E6Y4ypzbuAT9n2mPujR1KaHqJz",
  "key37": "2DcCipti3icPt6siEGJ3iKWn1cwnFeSgwXQXcLGDXaKptbBXaHbdkySCNvs8dUB8mBHi52Q6uDw6czz7Zsg7YNrD",
  "key38": "38wS8B74CLWfx1fZ4Xi6LgAn2sgp1Hz1Uk4Jx4p4Z5NrS6FGE86u6SrvR2cMKv2XzHyDh2BhqacjEU99DyKkec83",
  "key39": "5HdipDsZcXbFHtfotPrFtYDMBcncQKPRZ4Yb5CfT6wUvx9G5qLB3eJfWCQ8AHhSD5DZnxj371DmWYrQqDyYKWt5e",
  "key40": "2vn9Mnd4WmoFQNC8P83Fsmx24qtiFU7wHJseneeQWwYJx9t6zAjXdFmLigVfJiMx8N8gkBb1CXydrbA8efDnLGuV",
  "key41": "bT2UfpKi94n3Swvs8DrKA3vJopAHJMB1PaBenxotDnexbcb3b3v7X2gND14xYo6QjhXf9gXtqcLcfCm3ex1vo3i"
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
