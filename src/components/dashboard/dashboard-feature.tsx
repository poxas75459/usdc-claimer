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
    "5zGQigowX5tAe3DkpNNvTryZhLwEcNdEg6GPbqxhATpfaj9tBd2hoeCzvC9vsExsdfiDCjdKhzig9yijqTmWz4Bk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xE2Rwm8tGpFW7xD1DmDyNYxuv8pGjxMGfEzLnVt9X7D4e1VLEjinc8XUiHtc4ZWPmgevEmZZpyEVNrkWMNfD6Mi",
  "key1": "3Q1xJek1KdqCYkP5MuFcFoCadgx3aSENwVzZfzuMfiBTzWeM2q4A4tsacwimJKZYJjeyUhRiXVVwz8fX4ZpzTm42",
  "key2": "2VDrryKcDyryyceG2vva4yt5qngS93M3npsT9JNKLvpGwTRemTFLcCXp2RqWtjZX1DAbiHGe1hAKS2S6ar7zoz8k",
  "key3": "DHpxyyVrbWUBc2JCEg1AjFaiYxgdhJUrngEa4yRH2fij3B7B18Chad1Fun7BfWrPWrquLvXL9NzVJophxKXWzhW",
  "key4": "4MJ5vuAv9AsmdvDQq5Vs8QfbfUKiqcqqqmdN68annaoTcVaGWZF5W17ZH8mYpFm4PWat5YhVxXPMXBzGmRteNR2t",
  "key5": "C46mCDepQVyYFSrb7MA9yw8XgzCm9jEkXjJ6kAa8m6NcMFGjAB3Q128SvabtwWmQnUrcoinQpjApauj21wSCgTw",
  "key6": "2nEJAQZ7eTiKgkaoy8DiBSvZMphN1cTz9q25E9mJjDDbmorz6WYmg251nRswQCCMrerThsZq4zYmPfmaffMNtRfm",
  "key7": "4fuMZXxxkWoNAPB49z5jnxGLykaaw14NJUyTmeEpFuehdjZti2GSKTgPj5rACiUUBRNiQXQmaoyfkM9bNnjebj3j",
  "key8": "124pkD4sfwTUcNt6wjAZ9eN7hmjXmD8gTwmdvoGSrikaCsStQTyi7NwHH27qjFajYUv4xCnF7iSyP4TUnb8hygo2",
  "key9": "5LKburw3dahGhGBRqcA96qVrFms6jxr4imm8cAEnEsFZELTJPQSiZMc5YPiy6QCSrreFBjHdTP2ayqoUUa2btXPZ",
  "key10": "2vKtQHL9ubSFi733tLQLXTQ2j3desMqpzYJVSGrA9mCSQi4SjW37F9mxTSVvkSby9FTXzAzo8AeC2NcZC2dRRLL6",
  "key11": "2XTHeYmWrVezRHfk1xCKwB59K9PadmWdWuJnAu3c1CZ66rRjhwxFrMVqaFHJNTKJ1raQWCy9iz1Jqc3Jq1JByy4Q",
  "key12": "hhHs9tp2QyppVwQKDkKwMdMTTt72BZa9JYFk77hzpeLRQZ9rdRbCc3NDAymT4Jh7BPQfapp1rTHaijgvau1KNW8",
  "key13": "3kpr7YXhEudkYFibGy5WVBunZx4XkfuiMzAYvaJbHuZoJfe2DWcxeCR5KJEzf2gqyumJoPi1vW8cMQ8uMTamC8hb",
  "key14": "g9DWFJ8BumvXuSDckHD5opS6eA7csSuTjNDvLtmK9yFQDa2CYRGaBnUpeEvUXeVxmYFD6eAzbBQndFpk25a2vsU",
  "key15": "2Dnjw5RwRkFWCb8Q3w1wHtMB1BsroWNHufQGz7UCAQd3UaoTAakVvcMuK19EN9QwM4m1qakDQM3nBjk4J5xBk1JT",
  "key16": "2kAczVJYDeq2wcAFRvewDEfFL9aAXUkmLSsq9SfjN5FbD8TubUJsf5yTwkKq2aWVjfAqKvmFSq9ZkrdtuZiA9pU6",
  "key17": "XMk7SU8bZb8tCmyR3Yw33LesFAuf8tpJ7dqbgW5Mcwi4mfRHzxUGg65EHbXUNk3qRnD9wysLC5gzg25Yrg8qcSB",
  "key18": "3AKKBjvF74CXL8Q9wyUZbkhizYDbC3dykT4Gu866KYQBXKyyLJjxSdYjVsDys2UTFWEeZj1cjR3a6QLEG8SaS8sx",
  "key19": "4grV6rqqkZkscSExiES3qTwX69SbWcywGGk3mx61TRtgSAfddWWivxmP9MdqHNuUx3Gd33E47TDG5i3FE7tVoN2F",
  "key20": "3KzyLuDeFrRpgRctpRvFTy8Mmck7zqE1qt27xwJJtEt4u5mfKzzxWpTiUKt2xgF3pH6KfGCWKA1rvTfMsbia79yq",
  "key21": "4czBPUH7SFaaYQ4AJEFaohitpHraXZrqDtA7L2TYMUyW4gGxTmX6xAKD8WyXecCdyHMGtASmskNTsokzFanjWaqs",
  "key22": "2WWRFeu3DHZjU1tJHq94ZKAcaddhuiu5Wtd6K5bhXMcfUTpN8JmKhcNrRykByGSDYJPS1Ti9Jbs9QGADtj9Cjf5r",
  "key23": "4bXppGSa2LWtV7K2id8rvzBs8X8BYmbRyvchVpc56QeEMuUtFYxM4UxjSQmRjX6Y9vkNNkgqgLzXuQDTYveTCscf",
  "key24": "3kVmAZcnUNgMeGcSvjWhT5E7LgzTqyeHkkuRJj1Yf5mp9SbMj1TBNrjkL8iwfd91DZgrxZQjdujha5YuBGSCofQT",
  "key25": "4vErEpDJKzhcs1iyANbQAHJ3cASLCnutqeAfdV7kS6aCBwmfYLFfDYM9XXdtWrWMRUpL8xw2q3Jh9QpmzUDu19sQ",
  "key26": "2vUTMQr1TrfDV6W5wC47bihB6e13SYaWUmFS9p3nUsvCmhSB4FwUAAJAL9dD3VYNLGzwKPN24FuGUWP6RjQwJMVV",
  "key27": "2PyYVWVg231oLb88r3LPyndy2mVdjPh8t7UA6WGpwMY1qjVYtzjt6ph6LzRMBQxXK9gZ1YnZYRBVyfCE332RL9A1",
  "key28": "2PLoEy2x1NJKyZTbu3CDtbuAEH45oyTTb1rRnaxf8SFsJdhz8QqMMPLq3BLPsd67yHE9Ft6XgLmvGKsGmyZNFK36",
  "key29": "3YwuCGeYPDM7HSqzWN6D9xu1nvkiiDv31qjj7UwSX9oBjPGGjErw1rXpgz9y76962UL63ND9aAigoCKas2SuzZY3",
  "key30": "5NowxvaYb8WXExSms3s5twyzvG9B4EJV8PV85RCpCa2Fy9W7ob893WDchhxyv897uDNnv1XLvTZbbxaou8MUkLYx",
  "key31": "fJ9k5RBTBX8s8RjuqcSQB8wcv6Rp2Nm9uVb9TeF1wdz92YW2C156nfxMy3BSpeoMVd9aFxDMPKcDWeDUweEUhM3",
  "key32": "S4Sv7n4jaq1tmY7dN1A8za7RrFxpHQ8CHW8q8kCtENofmWMQwroi16ym5o3DVzn8gjtFiBt1TsParHs4htJpiP3",
  "key33": "2fzgG9MUQsYWizXNnmNC1x1K3BNt8XoKcjzoobnvFMuTQwCsGWYBk63KE59cjbfiqDZs3xVZpCh5bhFsu2mtKNE",
  "key34": "3ctoWomGyFsmu2NYibXo6udXi4igV9t7QWbSFDpbcRWAm8HzaPYaps6PDCgW3riY6ZNtDofvMi7HWZELo2L1i4xk",
  "key35": "5AP9PMAnzYhKZAbZugZqkRZRvcVxTugdw3LYzLcvoBHfX7wtTT8ThhzsrvCM9EJWmN3TakcU43z8JKU5cgx6EZti",
  "key36": "5Mcn7za8wdQTo5mL4d6ZewRVcuk7AyMFXAqkFUiGPVZBWciWgMem7sgcrzGoHib9kkU5WyqN7WQDu7kUTA6bnwH4",
  "key37": "sYdC5N7SM3cuK7DYk9hvocbETLyuaM9VnMBTaZpZs2yw5vk5DF5a9b8er8BmmdGwGVMQd4kWwjkxdPNcwMwtrXE",
  "key38": "4roknf1qMGdxoHSY68saqcfBE5BWFdLP5bAh4qm6VxT1wujBqnfJKiHcZxof2o4DmPfDgzw3424Pxtdwpmue9Xoc",
  "key39": "64A3q2LftFdX6bk828hAn2jfxxHrXUSAiPLuaQEUJ4UWsYpxQTqE4wqudqwgtYbTXSj1i6NAzcztBvdtV1e8VLdj",
  "key40": "3FyHjaqeKtDKYStqn7UxofL2r4kHUJAP2zJW1WEYgUvS87rDaLb2NX5j7YNJDKe58mgeL7iuhM43nTJcnzXbaXc8",
  "key41": "5Zxc8qjvwd2RypEsBrLGVbobk75Bh8VKr23ghFjQtT2H3pJu7Wp5v3JcaV7sGaGkbd8ey85XLgp4jqK1hQedsyY7",
  "key42": "2JrP51D75WR8yFHdFhAWqcQTJsAnK6dBeMhpbRmGRxDVLQvHmwHCJWDai54445WRbzxqvYpBpWerQVPhdXYGeH7E",
  "key43": "4ELY8zk6zDf9xBr4yNgqo4MpVf4tRSzXTEL46g1PSm7yxyP6imAC3hyyHdtVcxNmTnCySYJUg17g8yP893RP4iES",
  "key44": "5LSbKgrLVutF8rDvZAqdMEkAz7v1Z9cKBukDB2BzLrPZxEVAo8PBGafwLzjcqY6oVAhxSVst1MrJuomw52xJHvm"
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
