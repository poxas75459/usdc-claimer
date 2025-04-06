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
    "9ruhYL6QyJP38HN5845aaAVLwiHzbTUSMcB71jEJv5f7hf4pEd3z6ieQh8iD4BBW48NeWyzFnpNBHZt9yivcWZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sB4XmqEBymHKf7FYCECor6F1zW8NvPwTrkRCXoGtwnY3Zp3DefhKMYRFJRqL96dew7AXop2QHuxokcHsnSpVcW5",
  "key1": "5eHFu1UxfwodjJ3nnxH5NLTJQk8QJcaF5ZMZ8HkYMcHz2fdz2KqHq2DmQyhFFgTqhd87YmcNnpaSp4775eNykLYN",
  "key2": "3tTPn66vB18gLrxoEiPVZmQY3qhbywPCASp15ZYebtpNDtDPwaGshMBuc5TjiFVWSsTa5dea1yxnPBvXhTyTNpeT",
  "key3": "3v26tx73N8ukvXsBbnYaWnME6sJbsHfugAGf8B8ka7BjaqTZGQqnaRE3omQvoToE4QRWurp5hQT5NiLuDG8awSTR",
  "key4": "FUCemQYdEKRBLXTkigg6YhJP4zNyMGecWSUYEEB8ZXnrzFCvWAdTjEJjpMmmdJuK8HQpXuW1mG9oDLgt8uymmxe",
  "key5": "VvtKepgnjMCPKt51obTL2ANnepaNEPPXGeBmspv7UcthsVzavmhTHdfC3UPF5fHrCDBM6ceCHaMXvwsmBTTerEU",
  "key6": "3NZgFQFqg3K6JqHr8F8mWyxnfvdqSYmNSsTUcK3VE1eyHBvh6pftCYWkcxGpgm3ZpmVw8h71JohKBVauVwkgFrA6",
  "key7": "3pkjhXLdBaqJDPxEkX1yygDjXSpoC6ygUzHV9scNDnF2d6AuLYpbNdxsG2LfhKWyMbYVCZHsGq2xB9DvhKGJMFVC",
  "key8": "5z5wnbzSp1jLKv3BuVdLUmU7etn1Ra4jVAhTxmAM6AMVRJYsBAFXC6rqyssNsYcWCyikWZrMDoneLUAtg9af7ieJ",
  "key9": "4Uw9pmf4GbP34VCpJRLRpTixzskgjtqTUbDJXWTbbhZjm9CXBtV7tZvaGJ9xX18veuaFbNBmaqYHKQfUyfMmfkQ9",
  "key10": "3TcpfeypeghvRwRyjHSGDSPUXyUr5e4AS3P7de9sv6bczQJSh46hfGxFoVZFwJWHkTSbhEpg115eXksT6Yv54XK3",
  "key11": "2SAnpgxo2CQajUdF4v1U1jKBLteNmXjUJCBwow2YcPwAMnshxVTFm2Xqq69jyzE5ZeTrdJ3oHPx14aQK1TgczFDA",
  "key12": "2PYF5rNkADAi4mpgzkcAZaPAWBaGt7nYejE7RyEeiz3skiuKVmVgYsUnAYswqPmnuLNCJ5bPXAbPWLrVSGdXq6gG",
  "key13": "43kjjmzhgcQa8AJLnYK8hXiSyxGAKpuMkoEn9cFj5up5F4PqecynUDxDiSXuij6hXAKUFMH1Qu5gg4Bk7W89e3kp",
  "key14": "V9sLkstosCdjJwjZySRAGmpJuCMWJqpe87BXNpHs1A3HmzxpvXYDEKKWRQv3PR7Q6MwKu6L4v5Rq7J9cJHMhio7",
  "key15": "3g5FzZCjGUtqVNKsY7RGRvQw1pRQxnA5sk7oHLUjHNGVxdqBG95oV4Qe5vrHAMVtYgXGAtCW2xWWfjvaQG5U9QmM",
  "key16": "4b11ekJmn9CycAu5kcuX5RrmWdzoh6K75AzDbrvdc1gCqSbLjqse6NVXUoRoR5jf7KfAJ9YFcykzYCEpytrpWLKD",
  "key17": "2Rge41tNiwx5GQZVEiVCGxrdqsbATTuNWk99BE3ev4YeepUMcgDA6a4nngqt945qQNh7dfK7vww3Zi4geNPZB53z",
  "key18": "FRQWuP629ZVoB35qeD74TvGDPndVPFRmJKp3UifaRVKb6s3KfnvgFdSw3EzsVBj5F6z5WqRTyxk4dxTYtS42oEm",
  "key19": "334HRgmkNCCD7JjinNvEGMPrqjwHkr8HiXYNfDzEj2igiTnom2vMQYiEZzkpxeCVs6HMYv7hyvstQWyfZjKv4PfR",
  "key20": "4U5t8ou9SwwGrMVhLzh3tbiNoJ12iNkdRid2TmFjKzMWLkGNQQNRCi73HsZfq8dCqPfA6D2isJFujBNZQSDsKEFu",
  "key21": "66zJgv58wFTiCvve7s7EMt2cp9cZnoKaPgZnjb6EVHLZc4fdrnYXivdtqFsUEy9MHHtiZh3e2jpXVeYGGLcuoCa7",
  "key22": "26oxxbHQQBD7XEyXSKpC3g97nsQpfgPE92ULVVsBd4rH5EzUWPSLhkpKvEcgCcGdb3igP1kevFjEYyR3C7h5oDN7",
  "key23": "5gyi2wqyoxwvQmmaq4wd7t2eg3eXYmsMxjUT24MAD3WzXxbAMX5wehACdmW8rW4KDq1SvYm8C8iLtPdNWpqFf1fD",
  "key24": "jp7AhXYiFhW3qATETHZpz8htbxnmcAXLsDZH2jeJYCcWiCGNfKhNf2FLcZmjSZqiB4m3v1UzpYcjcaVukDj66qw",
  "key25": "54fR47HdgbcCzrGaLj7xfh4sLTRAChZHJGLy2GUSiwHG5WB1Vh1mLwkV2fd1hvtZJYLZkBeMq1xDAKep3mQ9pZ7N",
  "key26": "21rVqSrr8EuMxqAmi7ru9qXq8mmYF6f1PnRKbscAjcaj1oneCNdUgbkBTiYvAdz6DhNrta2dXuaM7QFMorFnHogw",
  "key27": "7UfRxCBk4rHpMLMa8bCu1R7E7e5rwuSYcgt6NN2vTwE4nqZyZXLKszAjpBuTekeZnRN8Y7wn92JftzXM7tGVFG2",
  "key28": "2SrB1T9kSboPjE6mDmjuiBexHwMv4RjHon2z9Ma5VCRoCRnbCGTNhMqTfWe615aBbcWBvzAfZj7hqQ5HbkQLBUw3",
  "key29": "3B7nYoZCiR5yPTgSb6bABJiRTJivMxcz4abvRkhFBmK92PHfXBwFQH4qXWpqe7kRVbxy1xiAfX1KJpGv5w4SPy7X",
  "key30": "5GAxRavkC4vN8kpcvbhrmRF3jXJWfohnCMnp3PoMFYffuuieFZVNDE6ywv4gPJPpbHrFjP68HWhNkSEZs4uGiwBe",
  "key31": "4ApxKdV9uTay2bi1JLccVKnRoo5buGZMx2C5Y2W313gYQG8yN8NgBBDMeAGvjfVrm5ehqUnjNr8chTLhvQy3aPc6",
  "key32": "4Qxq3xWS5qC5xx9t4tko5EJGUjyX7hT8s3EpvCBhCDh7GZWCBG1RLazpkFXB3C3wZwFEABViEzYi1aBjQGXvVPRU",
  "key33": "2YgK7qySfxzBaJgDksmjEMtzDPF3MV3TzGWZVUw7GjFcQfrMpgpfsoWvLatHXaxiY4W8SPFEjMN1T4nyTqWJVWmE",
  "key34": "4sV1XQeH3Xycze5GbzYxfXM7SigfKs9SGt4kYCkaBodd8FLPo22o6CwtvQ6yK6Rdv1UAG4r6gyxxSh2c7L9qKF8M",
  "key35": "2k3FP4pSicsKgziCXPTBraYCcBQW4bdGHMJ2edMxhoA7mpaW8eP2a2PwofWAwCJpwcmVuhMGiZZDZyA9TFE3BFG2",
  "key36": "3sFBiJQQ9AR79qXYW5HmUZrpEE13QvcNrdFtnVTmzPcVFQ9DtLQnRZWykeARjSKN1RwKq5R1e6pA89zsWyWEFF67",
  "key37": "4mBHF458KGh8Vpk81FFWmvWJ5sryZz4Ko35oYN29o3TB9ybbeWMw4DJvPP8483q5BM74MjQJDdsLMrQSP3P16dEV",
  "key38": "3suL38Ek5PzGLZV4zC7sCktFvMGyVsszwwpWECLYF99xt7nAqaqspKq1QVxXymByy7dprs9PKLU9J1MpriKMPERd",
  "key39": "iQZ6ubDp1yXx3UQm1jxhtfTngiyAGtyFW92vPeLtxh1gnJYxhBr2eLbT7r94aKUDRWRWmGwbd73iFVN9ZkKqqik",
  "key40": "53cuJRZEDWT74Z6AV5xs6gD7GNJrxx4nCeRAbYsnxuPwiX4hGh9vESY6ukDRa3S77RByc2hizHmzW1tC11DjpdAG",
  "key41": "wNYE8VVMfw4fmaTgPzi976WqpdJfAQQNdxMAQ52Ng3tEXbyHWKm6NrVb93rpcaxqkAVZ4CW8pUsbTUfgQktbVPi",
  "key42": "5rTZbNQV1rCADH7H3YLrmaC7miee41qtsvD46CVw1ukBdeTr2kbgUcEzmfTbqfFyYWztp8LCm93eHSzVVyJ4LKF4",
  "key43": "4WYe9cMQVTWwVDNY8Zi9EvafGEt3EuJHzkXFik7xugbNvJaSCK16bgBBWeG2XJfoVBSHd58rcDyfn3W6yyiWL4ib",
  "key44": "tQg3rqgKv4uG6ojPpkeRtJ8LvZYxWQkd1JAdNJVjZeg4yvigMrF3UgoRyJqDwT7uFRQfmWVN5xxZgzENSFjEGXH",
  "key45": "3YtsfPjstaHMmc5vcw3JCvHG2CCxcgaE89GBcRtGQdKkHvX2fubwmeW78DoM3i8mTpSzmjiKVc9cPZzjrP4mLJxN",
  "key46": "2RoBa1tSpzNcbRBjRqjGDR7HbaMQJtYwNCk1bhkGPV1PHjKDBWKsXL2fqCzTUJT66rNkZnxUULHG1ZXDLoLWJHC8",
  "key47": "3yYMCn2PnyfCZWVyWq3zJVUkZ6G9VywzyMbVL5aAH9kccsY56UAyqQCVXUXA3qXNmBDj1MobFEHqemt2kEGmVTcP",
  "key48": "58Dr6VYvQARGkgWFD3qnNz13GSSgtjXG5KrXVm39z6ZhZKqrKeGNJg6HMBUL4jCakpgbTJ3kzWNNjF8NBVLi4Svy",
  "key49": "3CpAudp7A8ZPHNx8QxbX26XWmPmfGveMTUCAoPgnELsqGFBWYtU9sH1DUpvizDtfUYMB714w3ox1887tEd719hUL"
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
