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
    "5A4nRt1kiw8xayAB27gumguekMh31Deo14mA58deiGe39uP6cXccgKQEU4cFKaE1CqP31CCwWDDzupBV2fyBtAyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pLhxvEtLor9PVHg7a8wDNw4mgPiYgWxEXu1zFHW3xcq7mByqsBq1RLCzDmosCVRqwe6PHSMBZz3CF78N7TB8KXr",
  "key1": "61rqt87p2mGY8pU3Baz7gMyD26XFLpACCnmdyB5gZLZvFJuPkmAYZFuAhhgaajhxAZhRmWEr6XHe1SY6faUyiTNF",
  "key2": "2CW4P5DpiCeNFEHVZkYM9ev45uT53Y5cNSugTC3VnzJgJsjwNc8jysCS5qYpuLZevBjTjdrqd4x7xeuV5SNXhnqF",
  "key3": "45WajptykrAwefP69nLGePUCkXxXka8JC5VHKBSn8SD1xp2HFG13xishYgNDN6pfAXiyEJV6jm2QHKY6wrAckS5s",
  "key4": "EiJ3nFxbYCe4dWofbR4KrgwSAAyM1XUmykmTq8REXL3GjThmXE5zJ8GvCJzYry3cehoBEYmYqKC7RoY8jrrAbaP",
  "key5": "5LP5XcCjzZmfEVL3CKkpLLn4yPf3EgPeYERTV5qG39gUcyH6qyqbvLVNmJec6NaxZi5F9KBhpKnB2ZapR4p4AzsD",
  "key6": "4NYMWU4nwNjys9dRHB5iRMqzckvRKiZ3cNKxrWn6gjSjEbNEB21XRha1iMsozZgwYPZ5NXU9UeNSH4M1KArNYggw",
  "key7": "W7EXgbsrTD5ZyQ8NuW5PTJsatE2CnudPYULbunMeDNyvsrfHFyKpsE1pKJ7BALSRoAnfayErhArSgYHmkAeyC2L",
  "key8": "4ozJAqfxAHtqvTAJxp52L6UhWnqSSi7wJzYM3sNqqLz856xPQjzyEiizSxGsNCf7kVUyzae1avNBLNqDQDKJ1z8p",
  "key9": "4z6sgfRnmJjmUwucKmcTVhkH6DyHDc7bowRnPdGUi6LrS9LeZddggY8Wmq7KcVm2vtvaXqJ6DvGNCZuTMNfcqheN",
  "key10": "2fkAfkWJdQjXjYjhSkGK2t5gL9edoxK1s5wRbjGh435VsnoKRAfAjc3bcnDttNNR3pFu62C7wrB3Qw9jaB7LJEda",
  "key11": "3PxxygfvwMuzRCE6Ek4S9Vjj43XfiAaWL5bGWeABD8xGyCZcsWzBmD6w22J9rrfCGJgr7FpGPtg6Gi8D2fyyQswP",
  "key12": "3fXKgW5Rkef54FJRYSPMwDkJX1ukSFVBsuGcBr4JnrEz4uyBqs1C4aydrntxCcBwjiLsJT2hMF4MfpdZfT1zi2xm",
  "key13": "55592GHmJuHuVdU1dVWn5FyE8npiYEkNLng4K4vHUvvnJjLejBhbjSvYufoqrDCBbhwWoeCQmH6ddHhBDisef5W5",
  "key14": "4E5e6qqwg3DF9fqohqXBj5XVXjVJ2sbYNBmLwU9xrsH27KypQyeH8NLpeWm8KuMKNhYjoTu3f8AwiBnMnBzxqRNm",
  "key15": "5D4wZKAwnDaE6ih39DAoM7yCkvvsDsEicvwKCkA6BK6DVEAxpha9ZwXnP2Ad7BWqTK53Wx2DXSoCCKsKPPsDyXqb",
  "key16": "3ceGRJJfzZMbBX4WwBFHXRHHkTToZEhomf1HyggsvQrJdBSgSpTLEnEKkCXYAWarHVQyt4c3DrFAk9kv3YbznSVW",
  "key17": "2msBiMJgBX66TKEJjz9WdgCC4SrQigr7ZRzq62mpJWtW1b6MM8sHYrwQ1HhXxJEEh3LzEvj1UhpTideDwtLG5JMs",
  "key18": "4HMM6GqpXt4CRkVx8siKyn3pjuEMs2tjSV696RJScoYtHVQ5xdjB5mFUgoHYGHuUDqTUKnEuPBpgkDM2bWBfpRad",
  "key19": "3Bgk3DmR2fngz6rkmap4K7tw7zQdPAeMPAV4BEhUjkpv9gYYoZ4pUhWAsJuc8oPmPU56MkCyK749iYdUHtiCrdAo",
  "key20": "4bp2XiW6LL5M1YFLC8itse4TogP5SF7VGFsB9GJP2j2oBjUfAPGBKxn3Zs73YmmZyFXmVYQCd18K91CtD3N9RLN3",
  "key21": "3yiNBfmiDdhVFZjT6x781eanrGUfMjd1RnJViWnFoHjAoa12tkEJcXrj5jKBWNLNAdj3h3YJeVR2KELgiAMjya34",
  "key22": "2FHzFm3Z4Hgt2VmmApt3GkyjtmM5Z2c92dPG83Cg9tuENVTv4jR4PVZU7WtzPFJtG7jUpxdTE5j5L1ZMRx6paurs",
  "key23": "BZkTJ4zUJp4xFT8TpXJnGfjY3bBRQXcJbhirNr5eE3VtSm2twiobbPWxTcm5EJmyuwTBVv5BzmAh2MmbbLAAnS9",
  "key24": "4vtZjrsZbdD6F9AVFZ2EjAV16X6ofhXbxG6tztDLkBrUnXpCmCwLayot5uEwbRt2GeoQ47Cms3spdSCgkScSGfzW",
  "key25": "5xbcttASt1C4j1WW1BYNxxhk2ZYfQX4K9GhfnP7NGFio5mqVf3RjiAm3Xj9wHLaaRJ6UQF1dZti2arQJbbDPbNPo",
  "key26": "5zTHiLctW2JiinduyLJ9cdXPTkZZuaDY8cu6BQmeRbSCE71WtRpZWmUj46KSusfpsRgMLRG8ud2WgT6VBYN2hZjw",
  "key27": "2ebsMqwbu9PQgGmuvM1huKT6fXNBYAHGwjTAa5z9V6jgpZNTsChs95vJfAvLaG6YELQHJ1XH1s5emUqMP8D8mAKn",
  "key28": "5kubvpNuiMUa2HQb4oxozL8kcEPoFVrrUZFfkWmBQPri4qvuMW2QZpJykSXNxyDnkUQH9ykaWixQBSQNYGGPFUuF",
  "key29": "4NQvcGkz5BpQEXqgKNSkNFp3B8qV7fDdA1b87tEWj9dj8o9Ettj5reX96d71BPAMnCmF2gKcXb724T4BgJaARepR",
  "key30": "3iSMY8GHSFVbuX1zHds55NkF9kZPfQrM6wmSt5YDGtzRSdBf1sD2yCdyhA5xdLVMD8TJkFVkHvg45cxJtfBwBnH7",
  "key31": "5qXr4GzWWa4Hv53NvDGqDK5GWMudWWn3JXaz3xi4e51A2bRTrmr4HwxpZTUJydPZJtkk7WYJvB7Y7FufxqLQN32M",
  "key32": "5kmWqdVwYg3Hnk29iBbLaPycF7QL3M94tU4W4z46hZ5C1UuqAVama3oHJbVYH1rJSsPNNQUVKKhFx8x85cYHo3uK",
  "key33": "2pDg3FWgvuz5t1BV6ZKcnTiS6yX2LuwM14S4YTK1zQ6mCLWrV4Gu5sjqW9mWfLPrJHrQk8VnUAFWFk6sMRZypDKc",
  "key34": "Y8j3hCP2xjP58VQL38b5LcV7Y1iKvCzrva2dwjifCV3axNfTFPtvdEkw2agrJ5Mpwnzsmgs57ncET9B5Un3uivK"
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
