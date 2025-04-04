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
    "2ebH7s9jKY5hW1HBpfyZDyV9BRsSCzQ9eqYtyQziHwRaJvhpFkdvx4P1qF9JcHbWXvz2UK19kYxPiDYQteCGcFz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58hJBEk7S1EoLAhvqVrxeYSkVTd1aQi8yT4qCFnpgP6x37EhcRjqdeL7RdBr4cGo3ZtiwNyWQF2WxAG8mw6whsmD",
  "key1": "3cA8BzNKBwygn6YyCa8amgyryd27AUhA7c8obCB5E51xezZffXVyX3ygzE8VF7JW9GHv3Gm7VLaHYyUoMaPj1T2q",
  "key2": "5Wu7FZiak7ACNyM2DQ4xTugzcrysGeLL5XQdQKFN7aGedc5rD1zi3FKrkKzLsgiSftV3kHrX8iUjHiKomLHgtuox",
  "key3": "32xgQPQV2Mc5C1irB4yEfEsSQf3gEphwZ13srHrg42JjCA9fyg4EVrE9Fob5urcqiXvKgXp2GNwwUHUrk5nAmWTq",
  "key4": "284MfMKt63BWXapNrC1SXnUxXwm1sgFzFbvPQakjVmgkqW8c2JwArxgTU2L5L2BLVPz1WNg8XV3C9DYUibcLr5FG",
  "key5": "MdHoMFSq3fw7H8UF9P1FdZ6N5G212gV1Vqv75n9YpD3EQQcG3K15aQtquNcnumA7AriLgDY9HP9kbosonyzoY7u",
  "key6": "41oLeUdANwFT5jSLNA1otrSgd9a52S2WD25znrGq341GcdwFW4ryZ9JU3q3v4xGWL9drja1dT23rbhJfWZp4q1tY",
  "key7": "2E8zhQ71bfJr2tadsfe7yK2uFo9kS3QUbuVJzWefNbaMoGrAUmNZuVj8bpY7PKeaCp8XuHGFGAq1dpmqMYjkqBrP",
  "key8": "5oJmUcpY9jiPnNAC1z2cGstasjVqkiA56T13A9iYkppYshjWHxwM4Z5XQ6ayrW4z7eBsvxxQcrrbcCHsZwVWzUcc",
  "key9": "4b12kE75Z75CukHoSRaWYsJexDAqP4uRu3u5mWKHn3P4ZFaRPjoVxBk8fM5gqxkCgdcGrQMfUQ1kizpAv8yzRkKx",
  "key10": "2GizQXttQfqQvAHA5zgCbD5depue8dtsZFiyW2ffUTqU2rckfTYtnLcFhtW5XhsU5QmVXneTX9S4E75QMeTPcivY",
  "key11": "37pRxG5Wgy67gTywgjXSn89P9CdJajZvyEtnBpSZQZRgNVU2XJE9WTgyNbxUPeMU2gg4k2xMNxJH7BsWw3FyFa1Z",
  "key12": "4MM2A9DN7vR5McjUjrom3zzy26nUbsUgCTYtkz9enhD549xgPrAqy3LUT3wxDmWibcx2JL1PwzeJDRtfe5yzqL8W",
  "key13": "44RyksH2ez8HViwnVkixuagQPdHoCyYwkaga6PDSbus3cVtAPZUHAYsqs8tWYDJeL3PHx2TBbyUG6zrbEujXTiMV",
  "key14": "ribhxrPdPQyswVyT1brjJ6N8m8tYHe4ggSoDB8vPmns8j3xB4MJSN4K156hZTRCVNybjAWC4WTQgVKwWpwN8JPb",
  "key15": "2ZX9QfagcRYBTUVMs1BVr6p4xKxd3SvTUQavjEvmUpeDwSrwBnR6qzyCiry9jYrCASCmm5XquF7x36p6VyDqiNRX",
  "key16": "4NuDFYoLTEbQ6MC2iprhgeAdPwRNgmpHdvFYYxPJWoSjdfJAAzq2hvcZCVcurJUM1odaKqkqdc5QYCon7kM95Lws",
  "key17": "36rQJyJP4br1CukVS9QvNoNK3vzRb8URmswnAHdes5kSzAqFinpH77BNhwf8qLVcdT12DwqLXjGgczGwTesVDyfj",
  "key18": "3ugA3FZmu33VjmTVALxR2MpGkRtdKbdaaEAzvN4EHc4WfvLXARNGmVKDRu1dhggSDfWZbG5SmND9WB2XiqowEQeK",
  "key19": "3vnK6VYTHAkHE82b37fETrAtzvygVQYZq1kAMezNDf5xskfjKkiHHWpHtriaFSntVsbdbwUJc99dBaurVK2j63jn",
  "key20": "5Kp5m5d2swuFMA3RGA3groyPNMw81L9NZohiQ2RMmii3GE9PfHP18BpS3uYoxLU8hviaRyfKYR2d91j3vGxaGvcD",
  "key21": "4LhmiVNeH9RaZwAymBaWSty3CigzfJYSnb8XCke6LRmA9q2ABgw6jrSF44jLCbbqgGEbnfcbdV3jMMWBx8dwodoL",
  "key22": "5pdnwVstCxQrcEMtmAPWs9wCtJE6RbvYYis1ez6itCZmM5fEyDV8XvNuGoaoFDNSYi2qLEYfp4PVg9V1X4uK6eU5",
  "key23": "3shjLst5xjBQm7p3nMfaxVez7X28evPsZAenR8Mnn6z1Rm2GT9G8uapoWpq92NQ4REQNxjURvDx6Dnmwc2fdeZDW",
  "key24": "3x4mRcj78QoPBkJgknDMWL834sfEcL57Qj7XYd3tJwF6rVDEp459Yw9KDuS14cjpeE363tXBS9atFtFRVnUDzrMf",
  "key25": "vvxMStGZfMQ5FiCyVikU7AhmFnQkDBqtNdF8eHYakpgCf8chP7zCKdgEVm1yucB97haHX8AtDtfFZxUVov8jxWU",
  "key26": "6P45piVusNjPhWwFAggcofyKX6EKDkx6fT8wadKnhu1UcreXXu4zRBnpe7Unw6sjyMwsPREWTWRNPg5VfVqtXfF",
  "key27": "326Bw3YJb4vvYQM6RmYxvJY2mNWfBTiz3NUk75ob7ubnz9XBNegAUVyGWcMvZoX1ReWYCHsfCNGCRhrpPyrE7a87",
  "key28": "ZLj4QNndq2nxgscZc6bi5EGpcq4nNSuj3g7xZiedEeEyRq64Ne4afKh26qpQrmmLeDHLP834HjbmHkLBqYtzior"
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
