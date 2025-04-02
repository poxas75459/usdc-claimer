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
    "45FSymDRQDDKWkZPzotC1x1vEGmfMHbT9a4MLFoAc34ts5Fa4Z2kC5RS1niwcxWQ7ypsScMm8YnDQwSMEixmBxct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2akkBZiZPmVCKqfDtUiTb53c5NegJqVE5QbbMKoWf9FYXnoVPBhSmQd7nCLW7AiY69XoRgLki7n85ipnck1EFGFG",
  "key1": "2FAChzWFLH9mZ34nobhtSxJALKgVEZ8zXQrAEKZs5adkFzE3nvtpoAb6ZxooWPVZLzZXiMQ9Lp953t1twqMi6dkm",
  "key2": "2HXdY35HpNh2F2Qb2GtuNVJ4WHF3KQtAWP5C3oTDvuMSgdY8oUDDjcQipxAGvEYhYcha2G3iSt4TQwrwuyd71ZqQ",
  "key3": "3Szz7sjEsKDZzU9AEnNmro9PyYh21T25w15NcHtH7rq7zUQ38GR6A6jNX32CAhttdzPaxb5b7xkeWbmZBaKrMhYv",
  "key4": "A5oVXgH2z13m8uRgSxmNCKKNWPA7RS2gFfZpDLpeNGgNMJkYJZsEJ13ESHoEU7APQADEBCkixkYQzoNkNPyeLrQ",
  "key5": "62KkLQuE1GcoSN6kPxy9ZfC1Cj8beeKqSYEGQ5Mvdqg9TJPz4LZypx5Q94BKJc3ZjUeAENmuc8ya4wUtVp47HZui",
  "key6": "Kf7TK2DwaZHBafnGdj4YDvxJ1ArcSMLA2z66jd5WZRvq9BQoyssQYfYNrVyB12TbimKRpMyk1M7fxSCgWTkGukc",
  "key7": "2pbQqeRLcpMj1Y8sQz1JNLJEbtiXzMxdvnAp2guJPm8Qb3ExdBa7LP8E5uCN6RaDVJYLxYPUWvzYb3jjGtB7U6d1",
  "key8": "4T6jLZ5GVepNrRXBAtq1QPzsSpfosyVAdcoLzdy5MVdvgrDWwVUWZMG6vgDrCU1pSHsbopSxAurFZHJs2s7HfVbD",
  "key9": "3UkA9jYoWLSxcRBKMCA9sjSa18mDDBmSupZKA1ZnEcdLGZUo2LkyRxBd2ogyWQYkw6x6nqHY4z2dgPynViH3gs1X",
  "key10": "2yhGGP1wKy1a4Xww183PfdrWbLttCeWz6b3HxuA39aYZCPFHrnAB1Rd3ENASEEmyxzLzwJ1jLvYWfMLqtgHuwmv1",
  "key11": "4P5HgNzsrDpJQv6GuNr8TKGv4RuTAzqHw9zpBARNQF83iaK6kkgwKfSH8P7j21Lf9n3mw1zU52uVFN3sLhDvj1d",
  "key12": "2pbeyKwDGeh2b4CewWXeCJqnuqFDT9127VQuRtRFCM6LWVvG4WpHQn79CnMxh1xtvtL49K4EKxQJpTrMjsduDo92",
  "key13": "65smgWgFq6pv15yqhwMA2RnbwC29U9J3xmsofafzxbTaGxGk8nB99etkV3rpjFFn9JiN1BzQ8xzjT8hsFUoW7BfG",
  "key14": "3oiTQJaToFyG3RoWdyiEgNupCJ9ccGaTDFGheg3gnfXWa67GJ3tvtiBdYhk2mvZ4rFYFuaidbv7JSeWSoXfGRLsy",
  "key15": "3DtoVLDieJjbYp9G9KSL3coDdpmZR19BigcbG9ybdYp5NBP713BvUqNjARuSNinJSMQkkPh5z4EzvDYvhNKUBKmW",
  "key16": "3bb3ZDBeLyig27aSNawmNbYAzbTw8Fm2WgV2wRK4SKNemLFtKA8rWJ4j1gLSWpErmyDUNjGAGAjPduXzf4cutMyW",
  "key17": "3sZrRV3goqPWEoB5mAZYbcCSxCyVhZw95h78eRqsetiDNYQmHftR8Yq98ALorWRN4XGANMFncykM6fcB6XxPfmDx",
  "key18": "25bM5tXPX8ngEtMNQWWs5ngvFfxAs3cD39YaDiB7t2p5wfaqwDt68dGWVeNHQRrue3WXU7dXzvH1g8VqUiZazrkg",
  "key19": "2SxNnRnmwqHYiXnLPy6mWhuzzerAHcdpdeDkpbugXuRog86PZT2JLLnFHjPdt6fELd2PuYRGR3iqqMfjZu2PAjGt",
  "key20": "677d5DxxLL6MtpHwSz7KkavnBzrZNwjw21QJwsky9ioiaaa1Dzi7ro69CdU1eDU26KZRGzmNg97kegDN98QGNbkv",
  "key21": "myvJ7Nv4f5K9RjtjLsYJt9mZVsyiPbxj4ZfEUHfeyQBC5jKwdzxCGPN6ZvVhenzpR19sFYBhCic7qccTdHwDUsg",
  "key22": "4BYQFbA3AhZoBznufHhXZhiUZWJdFGT4ECtFmLWZfWQfGXeZXjqDg1SDcz8iripaSRrga3AUovQcdzw9uQkVAK7q",
  "key23": "3oTa7FfAUZPvbFvHSDn7CSxfqszK979R5yiVb1NuFpP4juHGE9hsbg1h9vzoGef6f7xPU9YtfPuDy9MezSD4TPQo",
  "key24": "3f8dq4FW7qxnZ2fDxFwKoomzJVxirmsmGoqNDQ1ewBApMnwUceb7gfVgbnDAdzeseaoAUybMTrrjAnf9BYMRTKRR",
  "key25": "2TfVhAmNUo6Q2yLexDBK3uuFr69Xp5nAFCTucCsvyh3FgJUAu2rEqDUGWomDPd1vN5kZLNjtDBKpadqUsQKiEFN1",
  "key26": "5ZLpLmbtPrUgZ3Y7RGvRm15WTAn11GFmij36U6qZvJJDUEuGeYY2Byu9daTGM1EACJq3is9uMQcjVhZpTPieYcf",
  "key27": "2MhhAt2VqL5Lg2D5LyT4WsE5Ax7y1goAqb3yT1d7kfU2xWwDQGHqCf9NMwF9EtjrHUoPoM81k7cD9FHvHRDE3rjE"
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
