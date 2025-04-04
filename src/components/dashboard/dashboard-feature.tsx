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
    "5eQG8kKFSZds9edUuZCfcuPfpMWQ3fGUfn5JXankERjroduPtTgCjqhuoCPo6AranqzWWVEGh6B5QNjiN2AWMxaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GzPhSuuRQtZPtXa49h21mHA5n6keisdzsS8UBPs6EvfUmugrfQhaDY1jV5m7Kawk6ue35MuCCZNfeT2N94rWpcM",
  "key1": "2tXhTR9YgeVVGAKG7vb2wtwsT1CDCMv6NVJRfyKmhVzDPDDn4vq1S1PErpEYk5QH88GP7pHgtcLEWphrLTpZUhbp",
  "key2": "46DGhaNDMhUtyzp66c81zTrXTEY2APwSPhiEDVwuNjK6E1vSi2vmsZFXjWm7oB3kwEEZx6wZYsiLj77RQGjqM7ke",
  "key3": "4SrE2wt2cDyHLphW2Dupp6tDbxkbtFskUysQFCNCTtVwqNG1LZVJVKN5V4cTpUSzGaofpXCDF6JSuytXp2whjxa5",
  "key4": "4ESGu3MLvN4i266VBYWuKv1rXRAnECsJA9Wm4uR1r3ouqoJByCWSfen9xgagXyaGj5Bx6g6dKS9ZWSZSp2bNfkhz",
  "key5": "3xc4kcakxorM552Xb3oEP2ubSF81RtGuxYeDAaMFN6tTWMXJmrGYf6XXHm5bZGnx5CDsuRuotGn5cefCEscujPJq",
  "key6": "3ur9tVwZA7Agb2ZSw6quMv6QpEqGBzEj2Rggq5W31inc8vomDkxnZ1iKXcpT8o9MCRiSgiFbB7kp8FThL2LU8UV9",
  "key7": "4aLEXHxWZpU4bLPgnZQe3H3oNhX1uVPEGDT8rLYZAn4eccQyt8EYYq3DzVQSJQJpi5AfjtRNKAjHJecyAmCj92wj",
  "key8": "4ecdoSsEPjXE5KCwxpSgFQfyu9X1w28TEY9A4FZ4KFgYzzuoLbmBBWpWooQMxgh9bwpMNHTVdqGUJM4Kr9VBU7sP",
  "key9": "55JZLB9j4PvRu6jVnLcLrvtxVnbL2yMSqDFCZ3FiyJeYqBxyyEL8WcnnWPSkDm69Q5hNZcKBzcFSmY4wAQBncYsk",
  "key10": "5J5Yvo6FGmseiNHZv319dmuahArPFNe39i7YuyxjrJ4mHCKG6Art2VguRpZGSd6hKRVqGrVWQuPMXQxYRXtMx9S3",
  "key11": "27t18Aoj6n9smsffdBS4CytU3PSaK6jBCtQp8VUAm4Lr6Cp8C7kf34ZH7RbXh8TLZtPPXEPyfwR2yQ8fpCMMgxX9",
  "key12": "5aGhQA8Rbmg8f1ahUTZdWs9e2s54JyUdXbEyknmRkFqa9UXKke77MUGUJP1Lk97XcSEocF9UvmVeGokCQuqDHWr6",
  "key13": "4d2Tq94mpYB2PYZZgDb3G15n2G7fC8mYG3jrfrnzPVfAwojHStuenQrTV9bNXct2uWyNHAC4EMxwAXreVgGKkBHR",
  "key14": "58ZYcj7pgkGttkCcLTkFGnBooJT2Su2gGwh6MAcK9JhXUwcUuuxxxRBuWyxp3xNc4EJjeZ7uaFUJNBAW8Gzwn6Fg",
  "key15": "XkSZV3aS8xMAoouHT4f8AbmvvaG7Mq8PBUjUdccCJvMiKtNrR3qd8mEos1h2GPhDWx8fAnsPLQoMubwcWw8T7yi",
  "key16": "369iV2Vrjs9hxdFLK44yGXRWPqmGNF6CZGJ1Cd1WccT2aUoy4YRehcDA8akeGUNS6LfjLTE7kfwUSqcBbxzxXnrF",
  "key17": "66UWunB2947XctKmmXi43x46DCjiqQ591Ufd7cGXJtuyvhxGndQDPBg4Vxm5bDMdcvPJi9tcBeBSftinkF4quRKw",
  "key18": "4Koaf7QhjxS9bjJX8Mdko3gtEaB6uc34yrxdVd92b5UZH8yjBMgRjDf7Ha5b8L88GZDWi6tAwTnSkD2Ax1LEFXY3",
  "key19": "2Zz9EScq82CzvnAkPm4HwVb698c56yJTx8hAaorJSLU13Gc74EftAF2Xz94dFXwbwkLiWM6SoGTD8zdeBYPCFSGb",
  "key20": "4feSHDSQycQw2UdV9MosdthoNN6pd6NUBD1iyT99UMbLgM7N34ckq4Y5DzvSmeHcbvZ1iTMca87wyDtk7shaxgew",
  "key21": "45i9Bs6ehshDo7vWzhA237mBoeSuXsjdGE4aiurmHWN1UhyTcBEEoZnTsfDybVwWVC9wpZ84QQ6hC5FNp8Pthjt9",
  "key22": "65HKpg66yQBpSHXxKFt3RnkCZSdcWf5B5mV63dSn1rmPn6FjxmuFRey7aEiw8C21ZsqHptYj7Jw136iP2g4Fxnet",
  "key23": "5dZ1mpcUumgaY6SneBc9iRH66jpBLGHx53W1gsmySqoYv7oej4Viq1Wi1LmsgqYGj3duwwepSZVyrF6D5ScDvFTJ",
  "key24": "42xQGFNi9S9Exoen1FDUngXF3uNWU6y9j8LvgbHJBwDMiSjcPHkXXr515ijwJwBuKjVJ5xUbzk7kZovosTKperDp",
  "key25": "4vTPyeiytGXBcpsEQD5eLMFADmq7tPWTVbzwv9pP4ePaSB5ZJdfiZYqexQYqY8MeLdG4Dpz5Fz3MVqPCdv6j5Ev2",
  "key26": "3MRNnYdzMFRPKu461QfZ92ZByfFnurqP7mpfcCpE7UJ7EB5vBtmPcPmPPRhmHmR8xo61hN8umfSmSeTfcPvGgsu2",
  "key27": "3wxDf5HYnmKugfKyzJHSoQUxaXt9kXgtQunUA94bJErF9wG3bk4ga2zoviwPadCA7gsdJFhSJmy2tmJpV88MPFta",
  "key28": "2kbmhuD11pJyNMB7VK5VkCDWHMs2t3yfbnzH4Jzsr2tqZrGvySRpVxZuc51hYYsd6dgSd6PSkihUoUzAY9in2Gks",
  "key29": "4pkaJHbhsuoawQazFaf7NgpxyyxD3E1Zfq8HzEDwMXa2K8EJPKLqvtEzBo47jsMvC55jPhJDG4pWq8HqB9dKV5sk",
  "key30": "zQyN88Lf3G7NBZqsSJCN878x7gbtafpTZgtTqAe5MRTTNqsaaizCBBY7WPQf6sz4PiPotMx5NdS4vpsJG6eTaTh",
  "key31": "3vo9EFCNTujunrimes64f7JdJUNt5QYFkRz2HBpKtShNTVMcK7tQJdR1GgPVxv5b1UpUx3YabUDZPzxfbSGJbexc",
  "key32": "3yDZjtqqfkgycAx1TMBLq5Sv2DxUJESwVWBaECFJBeGgc2J5SQb1Xh4FckTqtWnT6Fo84KjKKyJVHbRSB9UmY18J",
  "key33": "sMzGGsrvKMyhrCuJ5jZFJvXXjb8HFt5tNymjG1Qkk2QSt6fU6zngAjieFQruqu961cXSiim8AteL89m3LdWt61Q",
  "key34": "39MAjwVwwNTfKjqaV3BNK6acxjHTEbwWhzvjHRbSFAxeVpZhcUvAbp6xHXkf5ca4N6DNyJVGQr4DiQvqGjghfqqo",
  "key35": "5B1o4frrUTTxfiLYHMh2oruFAMiJbfVaZYqsoR8iqAC1X3EN3A1yd7RD4rMYwAkb7YoptyiFpZYT5RBfFJG4U3ZW",
  "key36": "5hFsHn6FkHnZKEYjqCJr1wCnTc1RyRuSYAo85oa3Y9ZhWkHg9rGwQo6yEesm9de5mA89n62foZeeFhJWqKV4Qnkd",
  "key37": "67gsJUfzTvcxFt1GNLziZiEoXXFp3xgivhm34yBAVfBeCVsZY62CiNFLB1hC47m7VT7sL2w87YsaCUnxgqS1YE7P",
  "key38": "619y1g5kfpQsXdJ7QvJRBbzF7YPBembFpKNUk1PUuwRgj6uA67eCCQibRDEio1wc8FtyAfWqLmVZf3apYmYfP4hm",
  "key39": "38ZJ2QTKG5KWPodgRyzKdwEi7WijJKwr63K38EXosQyoFLUY1U7JTLGAMnQpJX4jvtUnwSyW6eL5pNFY7MMFR2WP",
  "key40": "4pHcjpXSaCA1UHscfgxtocxXuBhuL27tBiAx5oiCZ2CF9KxuX8mPNCxTQJZxUL9kXTC6kQ7HfUsqkr2b4bdBXCYU",
  "key41": "jUiC2vFny5FhxxfdwHdCY4QKFEhkotA92x3WouXJEkPamoEteTSD7PiVTnzXCVxjh5AmEa1cMnCQ2svZnnL7ZVU",
  "key42": "5446ncx9djSq2FsP5r3MDuYfx3U49kHikhkAA9qPnqQhJtBSJYzmumz5tKUhDJ72TYhQBaBobuzM5fV4S4wKQ3C",
  "key43": "4ZNQNjWeU9pLcoQvWKsaavDYHZEUwBL7JD4e33VE8n4uCd9eLc17KYBo1qzzGS6ngosBikDzp2jQo7qerWmPXjpD",
  "key44": "4f377SZeFYs3cd2icX7jrp7gs34d77KJkj8hS735VwiFhvjQCaGzmPddS8A8zcRVsBf42yGZWixP5aRmKWdxseEK",
  "key45": "4XnrvMqmif1Ap7HDaW2MXA4wFSVKv3sz24PVGNapMtpgGJzAhKERMdD8E5ZfcutNSqak89WeGnANow75sNu9jtwR",
  "key46": "hZibkC6sv5q6gwC44WRwTpka6ZRCHG3tdBKR283h6J2MWAZuxScWyXDu2CkoTG4omJ1VBzjWovJN7cvjSwsFrgm",
  "key47": "BUYCp2PZvgbbRCejjnfTo8xei1hao11ssrtCZFwQN1MBKMbq3QRb6KgTjRjJRsJjpR5JybD8ykYxaZEskMry6Sc",
  "key48": "49do4Hs6A5UxD95Wz5ugKejNYgqiX23BxqAV1QjY7BHPLJbBwn8VVqxMvgmg6cAFoGx3sxHi6JDGjbzN6rt8oWzL",
  "key49": "3yJpVHzRZ7Db98t5bEohKjD8uPxd47Z2CeQrfgLAyVF4YGAMLeX61ge1TBGi1yXiZThUmfeUyMTNZhpf5f49sx77"
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
