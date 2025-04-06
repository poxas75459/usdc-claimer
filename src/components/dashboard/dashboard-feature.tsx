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
    "56BGhWhCHVKWn4xZxbZ9uBnB19uB5Wyp9LSjDUMe11KwgR1Kq8FNaZaURBVY8QDpHhyuWNmb9dLWfUgtY4bt5Ha7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cHAPqwWKfnkyzeXdetxQnfTjdGQBVUuejkREcc8XjojmCorS6HEUN3GAYefNLsQpSrVaRmEfV4v7h82hGpySsEN",
  "key1": "2TzbmsXiGKKJ87bJKdZ1kTQbkMP4w4k5tjsWT822uVfzQwy5zcwdpkbERASma63hJ63zCbkGkGekujRZHXRetZaR",
  "key2": "5X1gZr18AY4Eh2QU2VakxkbuhsVqm5rFyMrBETphSdyasekZRWjhMwo6xN1UD1F8a5EAfaavRpawpqWj74Y6oBkA",
  "key3": "3s8Go8Qj8mDqrgFQdY7VQQorE6yMbBtFXtW4zBpxEcBviufDpYtx4LjCXS9u3xVKaE3Yn7Sa9Hbt5kRy43uDWq33",
  "key4": "2RKTLJg8E1GvT3bPgbpTVD9Pm8m8N3o1v83WYbWVSZMgbLgY7GvbbiJrSn4c8bTjzibLMGDEyDLUUcUpE1e6J4ax",
  "key5": "2V5147U7NPMnKUKfSKzvymAknZSUTzaw8Sn3TQieBSUoN9FDYLeffm4i9nAAt31TTGt6gbPArLjvy7iDAVJ56JdM",
  "key6": "1ZofcEMcDLsByhESmxAMhTbAWqVDm747m1h8hDsVgrexqU7dvnLV8C9oUjY6BSRFTX9ADXrafGptNjaRUd1evGx",
  "key7": "2RTXqJpjRsDvFCBskhZSqvG2MRhM2bTptxErPAZqpsPJczMEaJnS7njibLZjRMvWuVy47wCoe9SJABVfJhAR6Tfa",
  "key8": "9vS6G8tf4PGDy2qdg8AV1bzRQnS2LaGjoDJp6h7L8xFm57E7f4cfcDbWoF3bc5LoKrNCN8tFtTrZRtfGHcXGTwn",
  "key9": "61QJoJqjoQ93xDDKrHyKDkJ8NdnCEBnnfGSm6V4RAvnwHMTVSiyZq2tgda7Usk5fEKvun16Nt3dgmb5ThRvGph53",
  "key10": "5Rh57R6Sn8AaqJo1BW38Cyj8gGasdcMgLQtkme9kxUnbkcHsLYRTFTxjCtEGb42qiBPhWey2JGAYthMrzYbjcHW7",
  "key11": "D9kUhFTASrE1T4nMLJauMaXQ3SSW6R7pTd9znJDfBt9Fy2i3wu5ug6xzRJmC826LAcaVx6u4uVhnPZjjRwGGZwp",
  "key12": "5ytTQfVCkhy9goWCaUzPmN9md38JN3XcUNTVkJ7ifNXm3eCEyCCWXXwujbSx1YTXke3nzmT8PGrRdo8fExC7fYxt",
  "key13": "2BV19HVVR5Ap2sTSp6kgcNBr7ZGFvLWn7heZEvXD6cY6kCipfsMrwNuCHKwP49gEzU7FMo6nr98ZSBaftG7Qf6vm",
  "key14": "4wy9mTZsnC1B9XD9zuiN32MTBNbe9jyNWDmA7ACwzF6HwytwehYiBbrBvQBVNjo3cgrxNSEA3mLfP5GWNGryhn35",
  "key15": "5NUtT2erbbMa5ZDWNRQAgoZk63nwXoEMj674K5gat5H53LbtsG9Av1P5U8xk9teawxVkPGD7SnhjLdAwtFGEbEF6",
  "key16": "5niJYvK7qq5A8VPn3QP2upCUNcjVRg783qNi8tCcQKxwDYQUNqd1dsZSg6CPXoex7fP28HogaGUG6Q9S6XkE8cDZ",
  "key17": "3VNDik6Zeqo1WYGGjU69AWy97GJH89o9Bbv73ceGxWAHoBdbFbdQwSPdXPb7fGgXZ98jUPNhKsefirwHKfwMmp97",
  "key18": "3PUQkuxS6hXUP5PuMa9KZTTKpMdNTPk7vVP79ksQanovm6fyQxMcdy6PHpgshFfcNpvpctvfgYhrkaqpsSarjq5Z",
  "key19": "2cYknzrZDQQMgtV6ascipMm2tG7NxCYgsKUXbxAYv2q3iuxNdBhwN37b81MqFLS28VJZ42kDeqQwTQVTWH8dzqgp",
  "key20": "676xEuFBThSUHNk2679UKh3HdTL8zC8BPv6zh14D2NDG2Gcvc5FHkYuum6eKzVoeSm52ZgT9xzGGkqgDfuPGDKrX",
  "key21": "43217DAQMK5kUPz1v4KWHiCvNrJQmxd3BYfdyVLzC8yxhe3aN8bQUHsiEyuSisrp9e5WivqwHJiWyLgNi3GcpjtJ",
  "key22": "46329vMBJfWA6Hw1KPSsvMBJZBmRCrfPc76S8iXtcg93hpqmQ36aKGcqdwCxiEs5neHpVZLi4EtrxJA6oz3PsBfL",
  "key23": "4vzMcHeccUwdzUqT94ce3q6PZKqsfDoK12jPYCT9uEy7MMaqbF7GynnuR4y8gPG7tBnmZvn9anKF72y1BJ4vkJWx",
  "key24": "5qRPr4Vy8o6fWNpHfsr94C5w2BJMM3EVAb9UaMhcAMyf4UddipXMCEkfMo4cedLKou7NHhiTbS1b4Ew6jsx6Bckr",
  "key25": "3aaDoouptfaoqEnxJATxxYkoSH4H92thf6GCfotE2PStdCfR1UTLYYPdSPGrpTtCSUxYGvg6SP9V8A3J4nxXUwqu",
  "key26": "4ccr1cjesMreimGtTJyFz9f5mdiQSRJtkzkWeLw9ZyuRRQ3XeBkej9Fn5wbwGTZYagTyt9vx7wuSYo8Fm6AhQhq3",
  "key27": "5BitB1YeT12GgRCkJtuEnrKTsiyoB15kF7fZTe1ef3SCiErx6mh5oFAFRqKsgg7WgcNUThsnjKgyh3NjmvTfoDGw",
  "key28": "2oSGi6FE4d8egK6sF8vmAE1Ur3yqfqRB72hWGjEt5ZoHGDMH6eJ7U8WYuWi4UMpsvsTy2thYx9DeBFnqTeE8y5jU",
  "key29": "4XuHoYoErcF8vsYQzyacjRWTeW7KKwDWQ38rSBY5is6EJNAzHWqM4UFY7ExzuHfnMtho68WiE68USUqEx8Ky7Xxb",
  "key30": "5wpxzHG5rTu1X6qWpsFtPi3HAd6qPechaMtrR1iCMvqCpBHdUnTLmfDTz798wmBASvpqht99ZGBbw4UsTsmdgTa",
  "key31": "3XuoLat5L3uCBtDff3k2PeULbQJnkweztKiWDuRGgb6EGj4iC2t8y97WohuPgUoZe8opfmWQGgetiNDAm245mz1q"
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
