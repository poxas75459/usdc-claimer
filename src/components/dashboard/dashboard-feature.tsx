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
    "3g8LicTy8jC3Zrn9GMu58CfKiijTffXN5LgUeBnofqAxue1N9fVZNaZQj2Dw83LgxsouinUqwmhuCNh3h4b4YD3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e1Dv8PMPJ5a3VdzQXndKaZPDntMbbKshuy5S8TSokTQmdbZVwCtPkz2P5MUFDrHBxkNvERbmhMZcUJnGVqUbyET",
  "key1": "4r5dCrsfERQYw4STFcYtgz6CGLwJ7UtXbmi9mjURg8aiXRtUD8iKrUAGEZ259t851fhtRp2Vguc1yZyJaBnGGXEV",
  "key2": "5xh8F5JArDX5bn1zfZDvuBoVsi7vJeJk3oAE25msaHwgq1c5Kw7YjmWborrenuyRCs9Ktyxboqtj4A3hv6voRuoZ",
  "key3": "3ZwAogAXuqdBygpQfvMUVq5cRNA4tMySV36DkCizsRcz9tzBTQX59g4MbgkAf556g484rP58eoGXYry46Pd4ohxr",
  "key4": "562jH7gZ8XdSDG1iRVFm67oj8FAcALfcAzikveAXWeS6iNxDpZxCjbA4e7xEcddZx6KNn8wCVbe5zKq7ibrq29zx",
  "key5": "3yT1ynR4s7VvCV1Kt2EbjcdsSC7ygZ2bNuoikKFnanLHNv7t85hwyYeqQLiZAJBFghSY2rTTJatckQ1gE2cXRBgb",
  "key6": "4we6LG2GJhUayn84wr8UZubNxSw3CgwwJYgvVsJoBgF2awjR9ZNpcMBM7cwMavCsVSKoNqFMBufaBSzwJLfK9t7k",
  "key7": "3as2WjU47bj6ch6PJi6mB9HKv8UqB8FnWYFhzvABjgeSSHBeDDb5uNLcS4Y6CFhWnuReHubGsuvLxziYigdQafVZ",
  "key8": "3tkT5Pdbk3ftB7uAdvzq79gQe8RTYGJYs7bM3iPbeVo3MA7bEzrtgMuWW9Hj5SUmEMSqbghbAdPegvgbByfMfrCh",
  "key9": "4EKkNfrrNqAcGoNdK6Ja2hASt9Q2iqpq1J7GSNvaxSZW8zVx2x11PggfZtCGRZAy6QehgveQD4Ctk2xmtP52QyJQ",
  "key10": "4j4ZMGyiY5Afqw7FYv7Y4xcgCUgvb8Puy9dUTFxPgGZVX6MNw3QuzKvRCARP7DieeHUwXbm4ogyV7eC5nAazLdMt",
  "key11": "62qS7A3ZvCDKo5Q6jaZV1KYKxSLEgjBGkbfeXZHdgWfXQMqXiBGYf7oW3u7mri7hPbiUGDFNBQbhVL8LNXL7CpFA",
  "key12": "456ezy9NHVZpBzrN1kM3DXAydtNPjnFcPRDFrtx38GVY2RfT7ZLyohrg1sE4Q6CfrKiKXkEEtT5N4XsoukbkFTN2",
  "key13": "5Mso15RjQvCCRC9eoimUmLeeBWEoj4ZTUu8Djp6a42Yai5tc95aY4RtNxJHoUuYCeYzon3ZwyXZwYczvPxNYH314",
  "key14": "wDDTQrkoUcXf97qtCiaMtscWe38GNw4BjQ6hUmkHLAhc38c5FvFvQXnrssQcCcauYUNjpkRoU9PymjUDfymGvRU",
  "key15": "4kcwyUCV5ipd645pJmCTuD1Uakdngwkdky4FB7ybVwH4pGzmoW6V2L2jUQ1veQnZ5mYvBiW33XdFMXttTfD61eVE",
  "key16": "2md6gNixNs4N58GbvDo58KSaktvtzeeatDFmrw1rWGPmusMWvttqXSuyzojfsY9LNDy68WCwMDmZK1zreFxfa8as",
  "key17": "5CsAZhhBmPw2bMCUiqn1zfjVptg1A6oQ9oHQgDu2wuAqXgDr78NfaG4sy9vAbsBTDSd65TvB8e8HbfYQHGzCR4Lt",
  "key18": "5hM5RbomcPSS25xRd73sY8PCas6XLYu6QhtDvRjoxqJyQHYywmFGweXrKN7tE7akQQ4CvinX4JSrqfqBxRGRx4bS",
  "key19": "4DE4D2RqA91zeYGWSUgwiMn8kUgGLjqKcCx1yByyUJrz3mFbH6pzZT5AhEQqrgYz7fpLhhZNcKhNqGf58eZbEHXN",
  "key20": "2EEJZef3kTjpEajyj7tKijCZDHwz7SEKKyXcjas18Gna8ij35xjvrPBhoeuS9YGgGJKjNf3MrQGqtvTWYgoDRhQ5",
  "key21": "612xhVx8mzJP42qx7kJ7B7CBQFA51BqmTfx2sfcTacVLR3PEW95czZSyiwujYHixhQNYg6BRd7RDcWSrwPU2RvU1",
  "key22": "213uXB9XMkvbTYkCRhJZdbv17H8fkwcjuLLkcqyUvcAtPWgAeYmkssZZ1HHrRhMrh4pauJoqZJujFNoDXf2B58tA",
  "key23": "44jM6tk4MaBPAVQjpzRFgRf8NvUW3NKdT1fPN4CM8je7ArvrGvDnqkrneNL2u2WTaoNCLs9kpapG64hxUG4m9zd",
  "key24": "54YutsQhiyjv21kVoq6wRggZP62d4huPRkWWugXJdk8hjKGRvHPPiPvTj5Hjoyz9XWfWdZVeg5Xdo8b5sbKG4cyn",
  "key25": "YHHatVdDoRp4ZckBwUGzFzWwAua5t54adCUL95zw6ySirWM46wVMXLfuuSpS9JALKCLixm3xibscAzweqEbrxhY",
  "key26": "43qajeDBLTQ9iktRMiovAcU3p4LxGDUuP7edvNeoWe2ofaHWSjFhbdPpyxsVQHEUEUU4qsGzZmcyzpjJeK5k5RXy",
  "key27": "3Nh4Hy3LuHgRM6Hxpt5eS6ngxyuCmmdz5xg1aVGeNFfFtBCoPjKMnRLC4jyDTQDTgndAwdvF1PQMkMFWYJXBZQM4",
  "key28": "5JeiCQFXHzvYtmC5D9UNNDqFvrW76dErXBgcaeqFN4wZPP4jMMf7aLczfVwFypHhzzTgXjurhStEq6HhFhQZQU3F",
  "key29": "3vGi1z1t8gRWKHq1VEisQXZmBvdDF3RFFwCZ3mhoQPWWsC5CSwZiFPwgwt2xjzzLzjrKhPF3Z3TuNzCgKYf2yv9n",
  "key30": "4sBwma67DQqdrAC4efAt6CAsk5oesUz3NqtmRc7cwa9WjiVrVGVgPVJHPMrnrJJvfX5jEBXHNbcwfove7Di4jrLv",
  "key31": "3kMQw2z3NHNRevCBSqFtQDHPVMzvGEUMgExXw112KWpgYvrb25q2NuSFSDyv5T2DENjo2MXTsLDdbGZ3bzE2drM3",
  "key32": "47DbTaJ5EV3kFcUP4K1RkPq7JUC2UcX4FSu44YaTCbttppNsNfotsHoW8Bb7t5deHvJZXmQ22eUJMP84gjemLbgf",
  "key33": "4SFbYdC5x9CWGkQmP6YqyxN7EFsUY35KfoVut8otUea1HaJu8ZKP6QkJtLxMMxPAQHiSraouCixRkHTWrm1eThuN",
  "key34": "5mTh4n9bJokzZAV3H89LFsUQyEoHj2vtAjbHQ52VQfPZV2V9MzMCo96J8obMxRLZVmuFQr6JavzrUMEJDK49iktB",
  "key35": "3DNbrog8R2nUadp2HyvNNcU5sJiYoNYGLRqX6QpEncRVH64R9WThWQN38hm1D7nattok62uFiHJBsH4bQ99Adxic",
  "key36": "5BhtCVK7s7vjps8cVdpHEaUP2G9BYCwYmcWs4dyd3ra6CUJe4N5VehqVWvC2n7jcSnU9E1oZNk68FaRmcvU7Vcoz",
  "key37": "42KrZFhbyq8NtChkWDuLzr4JjFVDT6mGxdvqcLiiHfGgDJzTQTw2QQNoEFZQH3utyymPf1gHp5XmGNLrzAhpSJJx",
  "key38": "3EXCDAvtdGyEoZBSAkrfHtmyrsqguJtZyVwocUfMSHMV8SYGU7q6BkNGeFtCfwLnTeiHhNUsLjDdkQbZqhZZKMYN",
  "key39": "U9x4LJVMkexgaWhp179XAmgyDLDGvtuwfqSUj8ZCaiRDdUaP4RC1ZzMpuygJc3C8vDLksppSCUfwAFvbo9fJrp9",
  "key40": "8wpUaAtimSuGLetxKc2Vg6agTGYnqGYLBA9yVh33EinMXBxDm22Her769q5A2FWMQWUyQu6X2hT8bti74d2fkSp",
  "key41": "2VttxyKd9UmaifmD5uBJus9tUvG2yLgyfWo6Ci7wBaS7dbLJMD55GiV92pS9sVrfDiQhMkVTQRhEBytYsDERmky9"
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
