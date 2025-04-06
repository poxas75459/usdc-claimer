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
    "62Fks8HrSJWkBa5MUGwkQpiFZtbnsEYjvb8P8fmFc4j4Bh2cxUKGTmspHkXbirwmZSwfs1KQtXzBZUDtBhPu6Xqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rh9xwHwRPrwcYVZYC4shkd7iv9zxpzNurY2Ehw6orpFRk76tdnUCFncie1Y2pwLzRQejyDnYjVZo8wdbfTbxLjp",
  "key1": "2WNb6aHMGgQP5mdj5WaYevQRmQjydSeSKwak7mk6eVjpQ1FWRte9bDr2JMPdqDaU8Pjwr9rz8oALL54DWSrQ95Am",
  "key2": "22hchvp25VCs5EG5YU8ymR6WGASPCdE2foHmeeMmVSpgcYps6rfSC1qbLZMJD48Nhub2mEhcqmjbNNZcDabbz59g",
  "key3": "4pkNLP2dMGtugQLUS9CCz3C9zWUHfvVsFL9ekZ3evBgXWU4k7P45jjTjRhKWWBkKQF5XJV5xFhdRyk25VzCFLxCG",
  "key4": "4fJZ9VpDCr7574J4H3yx71BpPp2hkUKV6ZQdNMog8zZSW5ud7i4eppovsN9WBQBLAfeUnD5MptpqCKDyJio7QmAd",
  "key5": "3fw95nUbXok1VSvph5ykc6ZSYaV9HwWu3JHPM6WXvSq1RYpNdFxYfr3jc3jf1VaGj9aj41V1oRcf4cnp29m6WCyq",
  "key6": "2U6BAcot4r2JU82u5xFo74RhZRuVMtj9Cv9dzoqxtDn7s5Mj98VqhjHULCCXVgz36P1JEHtpVyTbLMSk7XBUetrZ",
  "key7": "3LCN2a8Wy5oAGGzWujTJQaVgjLffZHD4eAebkuemaZZwjDYXtWz7gMg3nFGckTN9Wuvu8YwX2yt6KURenMLnR4T2",
  "key8": "JFntd24Sjjmyurfrwfdnc97kvBUgLmKJ5u1usPjL8KyxQbbnQaab5NrHemKN6MphSnrnGUCKAVMoHukdSQigr1X",
  "key9": "mCMGSAiSxYzeaVk8KjXPidHnX4YmqB4aEc7wAC6Lq78UyhtYZeqGsLv9oCNw8uiCBLfHPaQdXDE8ug5K6j1qSSP",
  "key10": "57tUGerqjy1qezQZ26iSneTaJneptkVkS2c3u4zvi8pWiQoLoj7rTfigqxEfD23dzqsMgK8tw7gYE59pS9vNkkV2",
  "key11": "3shFyVhpMMo9Sqmugz29axW78mYY1uYykFmPm1VxMWwfJjqpxmMAWCR98HyoXH9MPaPpnxLMGSqHcMSZriPEtfRj",
  "key12": "5w5894CGQgSrYkVGAe9HE4WwtaDJudVVktzwEJLmaxB19XCY2eWgvDri4eTSgvNxXD45RKNU8w8HkAv3uxtRVXPe",
  "key13": "zqa4vwyvKRAthWP5cw2r8eVrLUCDvNef8M3smF1Tg7WfWDqSEgDqZN57peLHKKRNYKmMUzSVovjY1vLjL8EE8aL",
  "key14": "2P9ezxthnrpYA5VfjHWpn1hxdSzyb2gEm68pZihaodBxN5E3niHiwvpqgmQyKEpPXWfahiZhjF54DfC2qWAo9qXY",
  "key15": "13tLqFo9QdrUqsM3ee9iet98eVDQTRGqCvP9LQ67H6Qwn3Y4Xj6iVQjtkghzczLVDeTkPKZSoTNdfN2ahBnZ425",
  "key16": "45g5KpxR2PAfxoCtxu6uFr4azp1vhPezFvcseroQu5PGzbrCZ8DThdEPmDArgNDMf6Q4KYxPeyVkka3WiFeLNjaM",
  "key17": "4289UGN6apyj4rVc6NFSK9mfpwC7LYENkDpFY2mDJn8PutS5ZETv1dRSWv45J8zfX1Z1kuwSvgCvvzwysvfVkjTg",
  "key18": "KYnFKXBuW1ZT3uMGFhJ8dRkZ5w7wZr9chNtB72iB828SjDD1Kjw977YF8bWb7kWSUMfkxp8wbDGbGezJN7dG9hF",
  "key19": "5pHgjArj58JkDK3tEEecN66yvxefKh1pmaS6N2qvhHuxgWrDiH9vidzyir4WkwqLgk9SMtmewxx4RubbMabVmuYn",
  "key20": "2yz9WkrrhWfWni3bByAJYWTJHVAmW9P3srC65bjeiALtewmdz3ZhDDVGLBpTTcMGzT8kLxNeukKWiMohUFJzLbwk",
  "key21": "2tCQsxX1Dp9pTvssV4oXB8XXGxRRKsit4RRSx8X9A4NpCuH9XQ22VG968F8bvdi64mcGnhcBrtmks5tq7UA5BdEV",
  "key22": "5RXA8kAqntWf9QmeM7K84ATUU4pHhFSEPEJvG5iiHpUWRkGZ6GCkXSyqJpZi8hTemL71T9hQpSknRmsPS5ooh7i5",
  "key23": "DdqbXGSqiwQt4ZD9tA3LDv6ZNFjz3LZ2PB9d46B7wvWUBAXuezS2DmZA8kxFVt6DTK32qkX1qx9Xt8qoHFi48M3",
  "key24": "2DdiTUVrq7a28rAsihoh8rS7WgkWvQB3KHW37ts9FGu2df3UDSrR9KdWLJYZLPe93Hbo5RRZDWQPJwg4cLPPT1Nn",
  "key25": "3niAsnomqrFU4MeM7KHPaxtZneJPrp7RknssDixXX3x814CvjTz7QWKFnNu8aoW5KYWUHLNZ75dLjqHH3jamXjvt",
  "key26": "5YgXZ94spQj3XYNFyqrEV24g33ryUp2tGBMvZ5dSULJCEQGseBDzXVQvCU3Y374dfHpaGLHWe7G3GoW1cMRQC9mV",
  "key27": "63zjNwZotUKSKqJpB7YR9kPJRuH88ojMWRs2m9Mm83uvSjJSx8TZBCoRQRJFHiTTvXBLZkcSiKwmzD9pdcxsKFr",
  "key28": "4LPseeqprn3ce4no19VGvzt73ppvuw3sQGrVwYaXRnGX8CM8qys4ugxrvWrQGHYma7yGVJfuQu39mUg1CiAzZ6nA",
  "key29": "r9N6X54GPzYPukxy8z3btBD6qLHQcE2Zy8MXtYhiKmJrHB3pcXcaQJ3hXdj9ZVFtqTMSjVBbukEwZorCq96NTTt",
  "key30": "FKBPD8UzNS3wLWVd8kwsENHKGeoTAfHwM51fGVtnXATpr4ZTPBvfHmxnDU83ADs8EMFCA7kBj6yQSYzfJExHhy3",
  "key31": "3mdbHvp5meEDgfcg8hBhqvFMicWrwPLhoBj9uzjjjj1hBKg2nSsZpfhTKJFtFMy8bXrV813JHCJVGLDkCTbv166z",
  "key32": "bUobvX7PqFR9XKuQ3LCtZs6qQqyhjtyt8PJ5YKJHDb3fs5ZQE8wKEXrVjq8jG8a6GtdTQQWFPd9WE8cUPgwUnfa",
  "key33": "XGFhV7PBsjUpuYUvA2MnZgjkjZCj92UzK2Dn33v9NPjA79DNo2UmihytqKrXH2goji5xoCjjrzkjxaGDKAnVDUG",
  "key34": "GUUcwtnn7tJ1FrLUXu9fU3eRXhWUZs5HsAwUMhWz7PbLSHtE1nWg9UBW1oHFg9pA7S99QsziCc2zh8KDj8qUyfq",
  "key35": "HSjuoEDpMQEXGMNcYMNeDCTNkbvFzEkyM68fFhDZvj9xtH8wKBpfxRdBDjLdzAqkcvKu773bzep9XL4AihV6fY6",
  "key36": "5y2eYQ4AA6ysPWZh1vWhzdBqjtDDBVhx17Fs1ecGmnsRf9fcGWqAnayzDyhMfuDzcgcK19bjgteWqM1txRE2WGjM",
  "key37": "65unm9Qy39G9s5pHiR7q2iG3u88Cc7zNtu2Fg1AD5KVdgz7ecZd2Kk83G5kDWsn5KcsH4tdQ19B4SKxZ1nZgcPUZ",
  "key38": "5JTYZYE5m5MCaUgePgV3KfrZUWAdPAajuin5Q8qYySyRmosK4d5j6Ye1GAmw2ayKVoSAxYc7RNGAneRcuve4jLyk",
  "key39": "5QX65jL9f8eSS8oRkBkXBVRVZVGBCnmojDcKLAwvZ2YU82rvY6xK8QYceuBHna9HoEdW9bHvsX4npnmb74z8pWGH",
  "key40": "2B5zkN46M6R65UnLrbxLKAi2hLv7DYTicoH53CMfpApW6c98sYW9vFHDFo5oucmRVYQgbFQAbzM4B9bLFhyUovWH",
  "key41": "moMsJDXhGrrHsoWM7ccjQjr2K8vQkehXMgv8cnEXbnQwAREpM2xyd9AS2GzRKHZV8bekEKnzRMaReXMXswhHi51",
  "key42": "43CGkCEzb9wCAtV8NN63yE9XJSvU6BNHRPjT3QNu7Tw3wte95pASKh1xkSDEytH7gtqhJEA2UDTKvFAuXSMzJShF"
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
