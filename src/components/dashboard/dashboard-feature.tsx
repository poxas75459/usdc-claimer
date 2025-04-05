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
    "5r6NgyGJm16dRx3WG3K9hg4NTEyajvdB4ELdn56MVzHhdnDC4zrKdDhVA6exhghEXn1m5bXRyz4etxSCxmLAsk1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2njxNKePLX152LzL2fM7YfKxbKRWSkCMeYFrYWDGa6bgC2fMsWnSsLYsgWEpsNjxRbDZCxshQBbSpaZQ56bf6dsv",
  "key1": "sBGVLbgChNH98zHhfdkuRuZo8Ag7R2SoVhwrc5qPuvwYdwzaAwnj1pRkQUMuE9tEfFPVBq1hyUzYMCKnns1rsvf",
  "key2": "3rm9S6KSJK9NZjuA8sHy2nP4Jihsd87rGp4fkoceQgNgZfwoMHq48wU3sRLN9z7bNFWtpPK7p6orauVRVuvZC1oe",
  "key3": "5KNk15LFVy7iksuHDdoXDsx3TiepQoqQuVEE2TssyR5F2ufdHG9DMkufuFhjo6h3yrXTA7vzWgaNqqsyzbETbE1p",
  "key4": "65n4MAtd8cWgzHuEAbffRbvgD8xLzniU7y9hPTSnvR9XuJwakEpdXDt5Lc9i2YuDf2N41xWV1HqgV22NyMRVWSdy",
  "key5": "3Dxwsj6fDVpPPAuN5Jtaa5dXXH66yWy1Vp6KvM4xipoVb8JUeVWBoqxUx2WoX1ttyVabtipUFjmLq9gyXbTLhbXb",
  "key6": "Sgja39QN685p4m6VebBv2eM7wPMcu9n8nLLL322VadHoNoZx4voaqtY2cCYTjB79yBruagfKarr5VVf3WLeoh9D",
  "key7": "2UffG1t92MfCXjMdRuAXoeioKhTPgfRW5KuYq44o3N4hjRMW9jKRxw6tBztvhqajesCi3DNBcdhgHzvNsTV5ooxg",
  "key8": "4ABkBDmL1FxUq22xRLfhiE6meeUpG8BY65tAfDFAHjc7cKRQ4T2iqNfD1vDBUWpy8JAsEjBN6NcTXfnksx3VtNnn",
  "key9": "3nKTXfbwQudNJUTmDr62caNoxRzhUReYxQXgrB7jL4Qh1uXM7trqn49VsqLYmtdEk6j5kLeRgYon13mcV3iNhHc3",
  "key10": "38BjpbEyX1opQifPYRXqX4A7BT8Gt6VKobuua9HMNxaPmHXiVz5DjGM2XSnZpcSMHRzRHCdouFKQjvhefyMaP85e",
  "key11": "34MqqKpb5KAfxJGn5s111dqqwkNzgK8diY1fCpxiyoBCoDJrwA3D4Qcr1G16Ahxtvnd12QQtjxXQZKPcbpCHTUZD",
  "key12": "4yLEA5MuvTHVZHphbDBk23vufvqhHGVGpdcFZ1XmjxhJBkHzsuqyF9ZXMx3Qp1YA7cRPRhixueuWrweTxcoJDcqn",
  "key13": "2CJQeHbpgFmU5TsveRzoRABPoxqU56SSGbDuL8MrWWq8c4k5bWqeam15iDMSd2b7Lsj93BrrEsG7VYZegeXQ7bT2",
  "key14": "yD1XPFVbaKqKMdvyxsRmcU8erHuTYiJN8sEFQk8EMGjrE1C27jsLoVAKo6SRJTD52z26P9ewExSRaDE3BqMaBFT",
  "key15": "47a7tXpp1MU4V4QXkcsCFTC4rnB56a8NSkY2LRixApmCA92qvXF2KaTJzx4RcfCZBb8aWrZ7h14xeFrkrv55PGXa",
  "key16": "gV2Yse8Kw61yJvCY6ciqBB1eBKjWqm9SX2ZiKETtQ9TfNDonzymKBHmbQoo11CZPYYZwLpSfsFMtTfjgGBYSf1M",
  "key17": "2tR5HULwkYu6WMYWG5miDA1HBQ3qHbvCybFNLrLY91bCZyJT62MTkdzqn5PUx1NdpZRfa5xjByvQvZFSTzTWotD2",
  "key18": "5Meg3VJz2rsbr6JNBqSAr4Bu9nXSzQMNSVj67u6GRqrw5ZB4PSeDqZCY9iRFFckuEA3vNPyS1uHv6kRY3Zyc9KqC",
  "key19": "4ekJTGws38hysc8fAL8Q7XtUSEvL2UQSc3hdbM4Snspm7PokRUtmDSpFGiY77nsPFsTJCvYHtBzwNDhVbZ5j43ug",
  "key20": "uKovYzFAxaBjBBJffwQz6E4xf2ZYKEMUVhPDFP3js3oFm67WgHRdnRJfGsv2311vSYbE8dVij9GQSk3cv2bz4eX",
  "key21": "5u6DAC3aH1JSqQCKxhT8tKKqZKDFnyR4qCDuytT9J1fUp6iCjwWw3FVhEkNujP7hBbURwm4hfQ6UmTr4KNCNZxEM",
  "key22": "4s68BRXyoZxieG2CZks5WJbCW2yYV1WtUvzRM3UDmHsUXtB52oP22kkx63PKTnRzGeMQ4SPHAvTw1hT8pmi2UrCr",
  "key23": "5qgKN1juQeKco44cBTUF9P8vAbhb11pQP2dmGzj1iBcQhv2WeScADQkWQD6tQtE9rpcioG9CUrsfLzUvjvjxAnGF",
  "key24": "47BhuZJoRj8ZMtXyovt7Ji7vzztsRT4VVvXybF5TNwE3pkYHWpjCkocdqBh2f8rjDZhRiqNQ69PxFxMjB3fAr2Qp",
  "key25": "uvR7eiEw4acy53dEYxugGW2edu9ZCBHixdiJnUqFZYq1gitzR28JcvGtxnEg1RZCLzpcpq2eXTShmjszWCgsT1h"
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
