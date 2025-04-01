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
    "5t7dKFtaG6u77amezziHv6nSmP4sHVSxRiYhTyWkWku6QgZdrs1YZ89JvWbJkuMJhf66NTLatXgAvQXf6C3fiio1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t8LCFciBkkbHLXNYhK94TSqpdJcAVyTS2Fc8TKYsxnhk1jSrHS76YwjyUhhGQvCDU8944SXaDrWSgeDLqX8GSia",
  "key1": "4GjkNj68opwK3iam98gHEfTjFRxvHXCaDNE4X3AxFwFcx2cTTnd57F6LP3wYRR6gmhd6scFnNNBSveJFKCqf5Xh8",
  "key2": "3bpJrAX4WingPkisRNp44DeLp66MyL4d2grQ66ZPbhRPVTDsxPeoCay4NC6D3s6Y6azYKqPPTB2HAcy78d1nywUY",
  "key3": "nTyp58MqkQQiRuPWErSep47cgtpzr8sNXp2gj9teCqgmDkoYx1TpQG4RGA3CseWnTna7dczPMnx1vU6MrS1JZ4K",
  "key4": "3xCmL2ZCSND6XB9C3rwumSXfgMXn1ekweMeFC6Sb4EriUZzDsGkHMEpn28gSo8F9RsqTms8pg5x1sbTBXxZGfywB",
  "key5": "x3i2MnjB2azzqMexYChFVm8iVCb47pgUMgm4WJcBrmsfXiykFQ2BMB4hUar1CsC2KQQAKwRrwhcrzcprjjyxmuJ",
  "key6": "jqDF9E7eAGrAkmeqKZdpiXUDKtJYq6F6FfSiL3CqrpHpqg2f9hu5LarYpykqpN4bUJwZJq1osWUwgRw3gGnUppc",
  "key7": "5d7nP99eGyKyr3AMs82e4UUhjZQXwfhFaQFJSkbRM6rSMskBR1AeYi3ms8sccduN5oULCz8sNWQYuhQjjzAudzdj",
  "key8": "3r6p3HkpAZjc5dCKvYia3rXmxf4tD7nLMvwChc1KrKPf9EKQQ78Ny3q56bdKwGHTn3RYTcF9mm5QVkNTQZRgxdT9",
  "key9": "2bCfZLjJkwSTstHMLFLKMkEoJKHAxUhJznuqNwVr7GJRFZsKoociJJ9CrijHYGbe27Cdk4og2muDpLE569693YqR",
  "key10": "PNKN8gx8GJcpUTdCdz8H7TnmmsfJjoz9fpa4M8AoHk7svMqYfjNymtjFLNGAB2C6TFjF1a6vT3oqoo5p8kk1Rhy",
  "key11": "5oiMBmoJYHPeQXDR7DBCZAzjZYWaHzvniraEuzWp349pp6Bh9diUKjPMHM1qM7eDtKWkRX6AeDFePghM9JZBadet",
  "key12": "3BBp26fFpESSKvx2ZmcyDHYii8ChNKKnZATLTWVpzeH1PyZsoyhiHTSLeR2pZi7SJrtALU6ZmkhXSQvLbndbdBHF",
  "key13": "PxamSjNtj2pNoLjdzgAUnAP2FuZ4i7yt4UZGEK8bWaHbisG7iMi4aYgUkyz4TH3at39FLr2yvJ1EDuhXbg9b1ro",
  "key14": "5nq63KMEbbkPGHi8pTZLGLiWfthrARNcLKz67QxDXWuCFLMZWEY444BYGeentqWj22bS11kmyWhAxsdDWspnY2kc",
  "key15": "S8cKaYQaZe23uLwG35PLbUGNefHqzR9SsA9Qk7yrLKyE5JAPphXy16GJAYS7u8231ax7ewoLftKfa6Wvky9hqyb",
  "key16": "2Zs4Mty3kRiZ8t57ztccfAEEmTDQh2o4VLHAABFikeyR8RDCeuiUMYDvT4UFwBC6ARnxu6LrmMjsmzBUWUNwTSQR",
  "key17": "3Jd6FemVhdBK1YGBMEGCAC8ErGosDL2MWiXMzcT9NPGU96cCGn9QHEGShoQtp4REfSXezQwoBTpBTEZgLeJWV7Rx",
  "key18": "3jVGTxNtf3q82rHHygvkmKXU7qCXHXnhPrs8k4rk1XtmNmJUJ793rKuXvDVj3XCrg7Q5QSoVnhrh8zYGGYyLqwvq",
  "key19": "3TSmpgKEaLsJSBfUd28zzKaoYUyA6rQNDWr7PPZog6Pai7xpFDdvPFQBs39gtN4apbpkJqsr5qdFK5xDMv2oAZtC",
  "key20": "2tTYWUdpoZhtEHo5Fchm8y5jc5hJtGTbBgzGCc5WQ8NycVZdg4Xczr4dVSQ1eYbhkGjRRHQ1VzyBRwzGZ4hLKcBe",
  "key21": "2AzVNS8Dr3AZZXQnXfWaia4KQpPZGjSS57TEtAJubAHbMXRtz9E9euRinV1Dz34mhH2ZgCoVH1zCmnX9vq657Bma",
  "key22": "Kh6pGdmXywuBqnzvdijyD5XRuYXbrw2DtnBex5k6LxTexAUfbnsf9N23od7M59xr2VkTYFAKv73vqwdCjRf4Y3h",
  "key23": "3cietSimJ9smaPQn6jmeJGJKtEpFvuRcVipqR7jFrqX93Wo9cY7LUWDiz2E9AcvxKQ45UJVfnWvUaCyPg3KbtYhr",
  "key24": "42v5tdJhjeLcHTSCvm8mPZaKqsjkGwMQGGaE2xdsBSob6q5dq7tC5ryNym88hQq8R96pFveqxRFaxKdGK5bdkDem",
  "key25": "uQnUeuppJRa5J8UcpBoyBXn1RBBKKUsZ3L3FowEPKtqHHX732mPjEBC12XwiDNf38SrLRcteAzfiqFNhofAkK6m",
  "key26": "4YjTJRfZNu3nNsQDzK6epEojkjioGvnJfPxWGi7TygfPf3EXKczMpFczZXUpf89xS9fpv3DRr3MNsLAmYSzWsfhw",
  "key27": "2zevpAS9iwbCPucNHj4W49LE46bp69Zwj48rUEGu7PuxC8BjXw1v8sU8SunWb4kaecJYagDPNUiwdHsKNJkfhzaP",
  "key28": "2jWEiWjiPH2YxQqcD2XpbRcKZXgEfqs6LFXxLjS7MV3FKwhbqEDK1NfgkRaWR3ezBFPyRA49ExZvWFKdB6HgChJ4",
  "key29": "4cPFbtQ7FWvrTVh2E2kg7uNSdNVwqRX869Mhy2kuD6cFyAfwKn5HqbpQveDBREkgvphLvxQpUmWJrVvAoNcFrhuu",
  "key30": "64BNS7fomG98SctYn7QG96Vx5Jwh9unrQWY1AWf1ghFs7AoCMSpF8D9kxV2nTC149kjGbziNPGy1KE2MDPHhDYfx",
  "key31": "3fBhTrQKsuH8c87Jzxsuq956NUTH5KKc2bqajy59ByvLV1jRqLYd3BmxWDQ8XWBTRiLAoSgfFDyNkLkyLLxpmVkG",
  "key32": "2J1CXxv4GDKrfDhjEpLJRnj8cZMmpyXvY4NhKw943GXDRzCv3XGLbestDCg6D2kVA12EPSebQRzVDmhjJ3SZjftv",
  "key33": "4yQiGfb9KAP4ureL8G6t2XhKsNigzwgx6tidn8hFZx9TjKpr5aVLDppbBepfPyChcd4xKfvmKkCTLKt7FMGCGfo2",
  "key34": "rDaxNZkRaSyY1Fcnm7C61Qs3LQHSMxvfquhMWAVjmmxEqwu8U4Yu7a5Fh1dozmx9rgu472BbNvr5e2SGkztrcyw",
  "key35": "63kWYCuSxGUnVp8qAc3bQDE4Em2wAy7rKDUEXy4M9hiKkJ1U9egvfpLpJVWpoC8EaXMKMVKtXJJQM5JLoaJKBJzt",
  "key36": "3ZRJxQSEZB4QdaNEE3kx9c2afZDGMw9RkL4A9UW4LsB3strV68EEV6utJ5T43huKogodvZfV3BhWQt76mTc7Khsc",
  "key37": "2iTh4YnPSEz4Ao4w2AUeD5RLJEeYToay9jQnQfrXGgRsE17TXivXCuubdrPL8wpZVMnx3c7xYhsCwQxq1Sm6byAW",
  "key38": "ZfKoDaHpAEChQbJiDYLc9tgTPr23GbYtEuXXTnuzi2QVS2fMV4Ncrv1EHEkTY9sRPyqmyCf8zumFhuiujTpkfDC"
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
