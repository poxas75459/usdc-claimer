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
    "2BRJb2RLqyYaDZcuFigAdgRHKNdhTcUpQvPtjkAC3PW3kXZWEMzbj26MNeRfg9boDVHeWzJ2vdrguBEQC7dNFZDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JHxjVuUvhTNc7e9Pnk54DFoxnLhM4aG42xwhu7N216eS6TA2oefnPW48V5hJYgAutr3YBdKRJUAtZqx3rdAtrex",
  "key1": "31yzBezPbg4hsvKLHXmdwtqhjbXFZ7m3df3mtXWHCqCUTh5ZpHu8nTR7XxYGiptLtZAo5Djrfbiq5EnauxQYTvkn",
  "key2": "ATNxD6vwMDcMkwLyFnkfsuuUCWmLL3fmwfHHxmHhgJRp8Yp2usPo9ckcvGPi5enK1eCQLVU3kMqCWvfy2MnRm7T",
  "key3": "3HKmRunx6nVPYZvme3zQGjCdJP5ercDgWwA1MApaYymsiwQHt7M6z71fPwsw4QDbzo6mADG54D28yqwpE1t8LcRc",
  "key4": "akoiVkwzu1E43GoXVD4mx7Rd8azAqoHFgGCPx3nZkGoLYgWCgWvsiSYi5bsptC7AMUV94aWJqXFbwzcnm8WXAdV",
  "key5": "s8tFogoTUaMV9gdnR6LXpjmbfrHg7fuJeMHXcJPAmxPtq4LZdZUXdYspne1UgiGnK4KUAryLA6oExeDtZ7352W1",
  "key6": "4afCheTnXHshXZJVK4WRhbqrz4x9g2yFbfjuRCEQwjLLejGYAS9AnVF2BxgwwWy7azFMY5M95Zm5AbMV8dU3WJED",
  "key7": "34dMk6chKT1YXxnM38UGaxGDBamfLZPP74rGyAjsrnKRJX5LxdTEeH8ErxZRiy6zBVS9TpWwhJCSCkznZxayCmW1",
  "key8": "gVTjNnzxJ9bGXa5AnRFf23rCj9HNxYD5im8Q33LM7RTjNKDLFdEndgZ48D1AdkUAs6e96t4PNNLEfUcocEau5hb",
  "key9": "4ipLR1XFYxYvagYQB8mP1W11RCmQ7vB9dPFxDCBMjNYRqRwB35mnxbBhHC25ks3ianFMbAzLV6pBiHVi6e48zuPH",
  "key10": "5zMpz4ia5zbSqQPZCtebSUTR6aCXKogWU4WESUSycfwizvVAarZeK1n7nroQpUPzv1r4svf4Pt9V1HHhdHYFJn9T",
  "key11": "2WKJcbSqVSHso5yptfkPSD43zR2t1Y61DNrg1pRnLbdJTo4y6XvJSjW4N1w2xEcb2434AEAjf5yqch6mCCgEdtxC",
  "key12": "55zYsRca7KTcdyQkVEYwsashRi2CcnqscsNcAD3Cmwj6aD1hw9i9PyeNuJKMJEp7YkoLxFy1ifd1oPxmjz68rVpy",
  "key13": "3ZHcfQZjgVWPQxyVCZVBEXgBonmHAX2ZWqRQSDVuZQ58ai8oT3qKQi8NqShc95x7Wiwvm73L3VJS9wDmchAP2WFZ",
  "key14": "4vVyFY1ZP9ib6HgukAajYfMpXcF86fi95YE5yeSgshFkg7QtfXDQnNt3iTqX5VACvG77DMLEae3224LW4mDZ2Rst",
  "key15": "23sPjxG2ZWwDzMPdAFARGUBFpuwaV2y9dMFEyzAtAT6wybqWaWFZjeioSAnE3qibi6MJDHPN5mRYS9iyj8hEsZ3y",
  "key16": "4MTGCSErHd9MajzDiToTmYQbUzcTqJQB8UmPQvmP2R6fWxxsoAr9Wg9V5n36GYX9dJrzCtbvvu4FeLUH3mCbq3Eu",
  "key17": "dxJshRtDNh9EkYy2MKehBJgJ4WGbgbDQjTsBfZrHAD29THs8uG33AxGktr6LcUD7YWN8sa2RargmM7sVfZjSwy2",
  "key18": "2fz2AKuMjcpW96J5q3gSHv9ZLGUbKZGxa7wArHcLuWH71V9db9v6KFr1spkAswRtE9b1fZdmT1LT8osUdE6xT62a",
  "key19": "1j8iFLN3rxMXG3gX3kqxdbsYdeouwhJi8iAMgFQ33z1sfKDJ5QJbTc6Jopt2pFgXf5RS5PSq9C3ZAgggXAjVKCq",
  "key20": "3jFmWpeN9KcTspz4Rjp3mrMgDshwfi7FACF2BpS1UhrWPzjxpbAzkfXoh6DpmEyoaN67Z5FwXfvWFeRFS3hVaNUK",
  "key21": "4sKRvLm4pdtrZTSNbmET8z3h9P35A9iwTduV2QAMbS3JPuU6ZcGogLvDuaxdfZfxjxJ1eGfpHSz2xMztMwxpbiHC",
  "key22": "3RHJu6kgsQbZsb9jxkQWVsoRaT2EwGHBU7UnEPuScDb9ZXQxw1p7SKmYgHTJ7H3ZVHd8cpKbZfzPZ7vsf23uCcqZ",
  "key23": "pYfk3ngS5CxjBGPTNYigRBsVaGNPj8mdeQ66tLsQFextkLaRCuDwWFsD4dkTYso38bdNTabMBzfyD9R4T4eiRza",
  "key24": "41QVrvMYcGVRUnVbUJSL6nymQYkzSzNVm7HdSJo9nwqohwHZqPJbcEu4JxWKR9MDd85qZvVTvEEwsUkV9U9M6Gw1",
  "key25": "3GZPrNAqAzivsABXSjnoYVYkFGWRJ4ArR287R5fUkX2yBrrF7g5sQ8hHcmGP1SReiKp9dV9L8kixmNJrs2ED29AL",
  "key26": "4iYLER72Hndin3ayXMKRGXdiUePCfbkJKP3TRxnc8HXyCqYsJgLd88pSh7Uoz89GKxMFBGmFHvYCdjtaDSW1fqet",
  "key27": "5q4nbnhFmsCWC5wogxkmkeTsncLcRtEmfqQeVAqPmFQ8XWquqHwkeH86hPLV3ncd1zwfJ4kaN7STEuJE63yGHhJo"
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
