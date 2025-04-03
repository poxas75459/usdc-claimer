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
    "2vCdiswnWa3XepDxEGryrMfLShepVSt9PfWWywTFNJXe4Smpa3UUSccENRj2cSRBxbsLy8u4vtFNTpzPKBYFj3SZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yEVWLXoZa4hRuE14nWEXARzB5j74XbhVs5was4jaJApeNU1q6XFeeeWgX4UjDMoKKP8EZixJ6fXkrsq1eTHnBcW",
  "key1": "3RSuoG6DzBV9cvRRLQt44zuojJ5A2zeG8uS2KbRiz4wDeMCMszYL4yQqAzoh4AArrTBEPS9zrgfkWgeVE91FspgT",
  "key2": "5G3xVSdEAxQSiq4NkQTAQkVe2GPeUuJofqwBvaPNUExrfxj1BnmEuy4Psm3qT2ghLQXvQGnqyv2N6QZjJiPyx64A",
  "key3": "5tFtV9RhyEqbsh8Chc4waE2hoGJFxLJhKw3EMjyBGPDwNeJeE7YvqGaLLbCCQHPmq3ySkuduUxuNgduhfKpLZLqh",
  "key4": "3soPTKnCftcTUiktc2KUY3rJRLnW5FTq8Anu3AagKVPkb5q1iHv8YRPJnR3ExujSoetgeee8oJm7SJEmi67Za2uT",
  "key5": "xpHavuimrT9L19QTfQyvDVDiHnkvrhdMFDATPuX4tSMtLzwiJkTE3DcRiNm7FKZTwGMi3kZhLSCRn6spk8dPcD2",
  "key6": "4P7dF4L1cvPHbW27J4dFLuw9HM5fAacaLbS7qofdaJX5FwU4BBkojJV83YEPAtPDX63gZrzYJVW17o6Ljniov3us",
  "key7": "5qcJ6uigZs5S39yN5Q5dfUdkzr7wAZTuKQ2XqwE7UhNDnzHdfPE28yCrgsxmHnDxsZLQkjMK1ktwoSCUNL1uuJ1C",
  "key8": "5ikdgdfjFX6L8CSbTwzNW67ChG4WVNR5FScCDEQNM8aJq7qwEzyaNKxZprQw6NDWUYi1rwJBCsWkKp5KCr1HSJs2",
  "key9": "2abiphK6CMdUa3MkumX1Axctz5SYhg9aNAZa6ewukjA9z46CwZVt5BbUnBYwDsbmnXSeD3CYpB9NH5XxW8SARNfS",
  "key10": "3aKwTJ3R8mqTcKSiX9qtozun5bgz3gmJKmVMDoxcfDAK6bFMrm2aLTUjyCWEqXfZ8FJxUCbS5pzYY3Z3fgsJa49T",
  "key11": "5MHJ7DsU88Jj1WsRDGVsofXo2CvmYyjVrSHbNZHWc8yntFjfGC84HpbLNZ7kjkdcJekUS3JKi3vzWnthyeX9tahR",
  "key12": "32tyTMqkzXJsaXZSnYxB6Mr1cHJdgCeRdYh4aDED44UYVZxT8q2KxzWPZG32cJ1mnYx8iNZ9nULhryZSmmAxL4qb",
  "key13": "2bhN15dXhLt3kNBpmY1spJyi5GJNzwGENp98vuZo8G3XtPoLMiruLAqymckfBmdgySawZ9bxZcSe2FkYQ4B8K6Aj",
  "key14": "5Kpijm52kEESU7B1o6NEA1yo9D6P6ShMaReSp6H9h22EKLcfXQokZjZUH7h4iFyyfm3bqgVcCusyzEkiaxtYDreD",
  "key15": "3aVVMKwBncAnZccQ48V99HHp1xJX2UyFT9deYAkHbkwVfFPVGp1A5rFhGFn6tzwdvz4WRci971DmXXzu33XwvoFx",
  "key16": "396TTjexNuYuA3rdyB128Z8hEdDbo1KH4fyVCADTCABWCHCSL7UcYwuwPjzMtoa8hmTcuQppAE2XPpK3B22sRAbE",
  "key17": "4Edy2KYveWebYNED9Y9dFfiAWrmzoEN4sqaxgpXu9q5PU87weKtoaXckHzxGQx7RMpPWNHk6z6TacXrmhFcEUwBa",
  "key18": "54a8knVREuSNv16DDbjZ67mp6UuYhLUdxnt4kSUSo4c7yowU6uGXd4HZeLHZETYZ537Axf8bJcE4wsL7UHguUWg6",
  "key19": "3Fr6QUqvjyDezQwafq7eFghnTYSDiGbaM8kuVEZ4X9NufEkpHPqpaMwa8SLu7sHyftKBjDSPU5s9dAmJjuAoa12j",
  "key20": "2tBSohFpYakbwS7PZaXHxPPrJMZi3641S4aD6UtC3LBsrHPagWdckt6yFGWMQxDEeh77UMYYBiQzk9qb7f2WTyjZ",
  "key21": "4M7emKD1upCUForGYNLxMpMCUHmwGCgzCcnuMFNBb4nCzLFJkRZU9ETNid3XZA2hX2ZapquHP6YDBwaTDJoAgT9B",
  "key22": "t2xgnuH4dVD1SGRFxD3CXa8SzWkskLq2hKhgth7ymHkeTZx5Hg5Hzqvqoe1uuYhQ4BUUSLpNmWaTS9kjXRzX4uW",
  "key23": "2tgjjf5rgEeQxtkATtrD4MJ8s3VRpSfiCrdTXtFgvYbWRjNBEAPpyHsqu7iRLCS4RUonPEg76FVKNkSjmAckTZMR",
  "key24": "3rtMJ88fJrweR8KnfQVDK5HS9gmPXPGmkXiutfrYCWyjHFiDuA7Zxg3Wk35Ss1FTokx9MRs1ugwdaEyFkZtDJFGw",
  "key25": "5tQytX7Bo4QrgY37sgu73vkmUWPX1VU37KYpjLWkz955n4K5dgXrHYqTqLpNdWAmQ9BneWmvcKjp4brPPQywPr7r",
  "key26": "2f7cNVhdf6d1sibJnFbUk4fzLX8LenAYmq8xuLnXgf6A1XVJ2QvDMXh6AzrfMR9RED75XH89ACHMq1N3hvdVjLiv",
  "key27": "csy1D8K2gnvLbKdvagoJTVs6hw1VK5rXuaEch2Fi6V5xJQKXiBiF2gV5iG48Mgk9YMYJhdL2VGgh6ZfJL8zxCXC",
  "key28": "57t8W2MWcbrgukuMoz5J4bYRe63ZsfQ1TQFeNp69oVwUArgWSexzjYrxyQfT4atsaK5sLQsJji4Do6KJ2wN1F6in",
  "key29": "XDQ884ZPTFhps4GzMsWBEt45sgnv6LBrdhgcD9sx8SqNHdd3J32VFi4qWFbZjBcsontaknRKPaLUwSziKQaaAbm",
  "key30": "2ZNtfmreLHuPrCNkeEzHHg3Yda6j4jLznpLUYxmFBfnVfLGHqhMVKtK4XhEqip5U6VBp6M88CjSLYxWSpST4ji5h",
  "key31": "3gsUeahKwhqF9Hn46bQqM1M5b2crBWVU6Abcb7sbTWN8j2DNv18V9mgtA7Xx2EUoCsKwNYX4yc9TRSNC8kbAjhVi",
  "key32": "3hoAvWZCdFD6oesktZDutr3PpUCJ9dUirHeFDcoQZPjqZpD3FvQhGGH9bfRoayanqiTJs6v9QPkQzmyx65jDvkkQ",
  "key33": "22tGYZMeeCXsh8iXjAmPsd4LH8ci1NdLrJhAoqnyyyc8F862eG2Aj7xLgZ8VaEiQ9mBH7fHqYFffCBMf12ZQJ6EL",
  "key34": "4WdYcetDN8fP4rVkWYHjVLhvzpDuByspcSYHNPKtEikh8oqAjfGwCoB8AmFPvgT9HMsVbLzA55buwsQKHZfS3sCx",
  "key35": "5197VD1suqnzuE3CvCh7HjHpgfgsTsfnbtV3arDnNuBu4mtJpyeK3SPRy8Yt9hxpZBXgQhjto2aRiT19HVk89kNg",
  "key36": "hNn2yT25XfrkZcxgY4xhStTqcx2Yg6wRS1qatXUtGExufzvDtrdVrrEgBBchJRL1RxWXwfvjfRR4EDzPCQ84xG9",
  "key37": "3Wih3XJpDXyKMnSL1VpajoA9ta4vDEpbLBqRsDsb6MTcLW1j53MSsgYDB9Wz33PKQb4yVGHF9VvBdUCv8AXDxH4Y",
  "key38": "vi549NZaBcZpNbt8F6jgezUMhQjUUMdFrec2g5ZRZC9Bc29YCgFvEEav4Etr9V9X6jhwNrgkJ2up6k5xpgGmxH9",
  "key39": "EKZz3REPEEJKfVZrki2PUZYpvRjVEXoD9eoChqiQ778yEvAHb6en8px61YJ3oe94CoDxSjXAMhqQPk3UvGMAWY4",
  "key40": "52xdf1fqMpWPKJx7dAzUcx4YPHdeL4tZvyBAz5cPr4QRUJES4MGVRforD9UncHcZRAyWB2fYe7nC3aj76qjgq21C",
  "key41": "4VBhhFWQzwVKoZdMKEidTE3GdR27AK1HiJXmuhNL6kJedwUBr8N22d8dfUhomayhq3UsHSNdFr8djNtYAvs87j43",
  "key42": "21i6BQ8AtUEJ4jfWgWCFUjUAxxd5euXhzBrGkMvm6ZjP6UkoKxLNpQQqR37CD68PWMryr8upEAd4Uz72PbozkjJt",
  "key43": "5LzB9nSkMcXhS7mcp2Q7BdH8M35bfakDtfGNeD6JadCTVY5NVzHERb4ihFkHiAjsuMnCiis7DKC7qnDc1kzfbsMs"
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
