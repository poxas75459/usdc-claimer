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
    "23kmAcZmXuH1D7wgC6LBUmNQyR6bi7K8iRJomquWSRU5GomQjitN7TgdBAcYqEmEJZn939kBrkLQDv2fKh6jy9Xm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aWYZb4Bv2vcogjgXqakPQ69sD5aLxr7eF82RrTDvsCn25yLWmXWr8cKZoZDEn44sQdPLQsveA2nyZp9heE1u5BE",
  "key1": "4DLk6sG3Q43LF8TeoVBsm8G6eLzx4kcztoXCVmEHdHT6DcuMM4Zz537q7MiHuq7XSV5m1iiDbD99AhiwRELr4RAH",
  "key2": "43Q6mrmWFnqBKYfDDofN59ejJ8eaX2QvFheuSoxanaN4XPDoM74rVu1nVymEkY3LUeDGzkGWiNmrbhmNFU1F4m5v",
  "key3": "5pfwCo99Fskq1ZX6zqhZaUKi4M7BvLMHeFbfJEUdh5oQ7hTvuh89RPHJDuqrdjMaGsQHKtnnxnjyKQmEJijGwXBW",
  "key4": "3DMYfp7oxwRjAFtiLUa85j2ou5vegSL5AwZS48pmnpiDLhQU5MwpAny6uA2KVcXG8sjAtvD3rQfz7MQGvpiMdp97",
  "key5": "4hSH5eLhmihbYoXgn1v9Jod9EtS81Ah9CUAstY7QWS8t1m6bEcNFTdbWrh6WQHrQcy6hZqstEta3v9SCTussiX33",
  "key6": "2t71BHHRqzJuuoRg1LwbkEj7KTuPBVXD7d4hUEpsdb4aCsPkH4RXVDGy5uZ9eYaggHa2RN5zQpbwCjNqQ7FZeqGK",
  "key7": "4n9PAbkuKnPqLu6vJs9fJBL2KwVxiZtqgVzjCYeZCQ6UHAXc4MvK8bt1XN3iNuQpB5UCzhm5o3jCXR1QVw6oNW4U",
  "key8": "4WpXmh4kv5rRnTERfVBUrEBxooCQ1NUE8owVmaNZMWRPqdUuyYQahrk8YkLspb35q82pScu3uHmUBH2JntLZLP3z",
  "key9": "4sAe5TTPQo6rGAn1MP8WoGLbK1K37uXXT5UhaoyrVpm9WzzNhVEAkisAxZWrLWujv9KNMpXBXUdYvVMT1yDaJ83y",
  "key10": "2YypT1Gyneg4npT4r5V7SJQFnjBQgDQvdE6qnPU9iRMFm9wmD92WyQq6a3evqh4QsYkj4H5u8qLKmwutoJzJ1skC",
  "key11": "3xeUZJoCixzh1er6f4NcU56HsBiqGd1DhbHtLHwf3xG3hxKBfhxR8FVFAoLdn1LmfBJYxhzMkd8Bq8Cvrp19zbJ6",
  "key12": "2oELFGPDEpwguKyHDLC25sUFusafKb2AyJafZ2iUjN3oVVAVtR74s69JvjqN8smMDpb76UVjGDMx67Tnn5ni1th6",
  "key13": "3GgbcMc2zhHNwfKx2DdtqPz2dfqtg3WuK1YFFNxVGr35dRhWBLnZZU5Q1yoEcyhiWQKmYWa9kXpbKZ48hsfQ5nuw",
  "key14": "2VHTRaEgJwyvnE7xjm1uBF9Gc7QUT1ZbXPm9Xhy2F9FVGA4oqyXoJRZV8MBYrpmc152A1YShzkmFPhA9dU2bhKGX",
  "key15": "5zecCeKUCHUU1torarjVzSN78bC6j2irBfHE3b4BtTbumxuSvW68YE3e4xeufvjnHGr2TrRgBfuebBAx9Vn1FG9Q",
  "key16": "31nYWiN7fbFrYR1juEVawYyYyqarq9LHWtmTWZFHz7zKpKg6qe1RvdwAcPzfFaqWiYL8gXy4qftFqEpVVZMQqJME",
  "key17": "2y4LpMbgun4czfAg3rEQ5gCc3dfRbCLuupZD2LK4pHcVH23CKqbTvZ6ugRGSKZMGPoktzcFMamQiG4vc4tX1bNQd",
  "key18": "2WXrsyiMsK9zgDG6E8XxvhPnMQWzPvhG7w4KsgRfs9MSLhjLJjtzjwXHZstF3Cq8wnB9mhzLgDqCxm1xfnAq4pE4",
  "key19": "2uWeS1ZMrgcGRapWpGoSozG1Gpv19FA8Sdc3oLWTbVfJgdxTTKnotR8aEwnYhhzHTYnv6okwsN46uCPDdEmYf8ke",
  "key20": "386EvQGWGZtwDrzahXPoaUXG7gXoYBMTZGBcNNF37ag9gcBknwM2JK8edpoSyfYLpTTdFN2ubvoq5bUofB7gQ37K",
  "key21": "tiBZZfSCTWLrRma8qnDmoGpYEJpPaFj7q1RHRXAGjqTyS867a6NJt6iuJvxaNZ9m7NanQP3fgfQtgVC1DWfBFPe",
  "key22": "Rc6EbQkBLh9HxXw9LqYPAV3rALZUvRPL6dBz5Xim7SLbLo6K55cERZdRT5DehqSXuf2fvrQEFy9x6ZHNoTHYUBT",
  "key23": "ezC1mLv26qMuMEuEjyxHTiNL5X6EGyaX866JcWt3cB6pcoX6KFMKUB27L5ZvqgbPvUScNjR8NzMiJAQx5tZpPib",
  "key24": "3kXQLw85AQogdfBKasSMABp2SAQuXzEesiBByUYN2TwsGED7E65Bry4H5aN9rJsDLf5Xj3WW7RoSUWDCo5aAjTXf",
  "key25": "2DD622EZAUmeF1VnM1z1pHbZ1Wzj6FZ1msXt5K6Es6xxxxwwhA12Jw4qGUAJpKtX21147q1gs8N54MscYXiMbGD3",
  "key26": "5XQ5XLw2nqQ7ZivjJbTCSxJsvz8zXEY5skHEYKdHrix8Ur1oda2vkr9mHYjghoWHSSEvUQ1XHyKqDAqYYY8fBid8",
  "key27": "5WMohHvmhTf1Pp8pyL7JiLJXLae1R1Pv9dGgPok7rziSNfQ4rDSaSfARAALF8KryYDaH9DgTuusG4nCPNxRW4HPq",
  "key28": "wNpfxRqgix4M44StK3aPpzqW4qgeDtLGUYYjKoEBxaP6cax1GnmMGBUvtVWU9RtoTciotjEWB4FoHL53nBrhNEz",
  "key29": "3m4fQ6QadFcCNSi4EB6Qq7yXxKhyeJCQxBMyRpJgjdm7ffPuX9FTBQUxzuKiynB4SxuqEBvZ1MKYy39KPbAd3EVL",
  "key30": "5tvwopHqeFmkxj9oK3adJPPZ7XtP1cSFztcM8yRUXuombZ3DWgZ21qLERH1CrDpTHPG5tVF3W6BKMUJNEavqBXsa",
  "key31": "2dYCVNb4TQhDeEQ5TeHz4BShKxg8a7i1oJ3UznNC1tntwTv3axfgPFT7pe8yfCcpL5p34A3Erodx1hmzkBXrDMpC",
  "key32": "5kqQy1JHeVUZt9LFLM5h1MnvaJweDD3wjwQo3VsXmzyt6pZkNWcXDy3zXUDmEHxgcqS86vp8oTJYxU1nQzK9gS5n",
  "key33": "3SqRXHiCs6He4FEndhKUCRy99NxytQCFJCmGFe8JUtF3e2pugq4TvGPF1BPakQ7A3c5xFxELfb86t2kq7sVDqWKz",
  "key34": "3kLaDrr8DbhpBMhr8k95ZBEDAS2mFYuMyGsMNQLKcbSe4XnZzpyNcUBbHPQNfTySjveu3pU2XTSaoLMuwF5aMyNB",
  "key35": "2NjGZBAH8TCV19eGXncfMNvoWvWUUDXzpFWwrds8eRt17pggcu4chHg58Wvqd4GRcqmaQPbXLMszDeAhLMqCV3db",
  "key36": "gz4KkaFDhnS98B7wUqSqnC8rH6VmiqRJtJWJ6L4zVXXwV3GPczj55eLK5v7drQTwsCUMufjnKuYDScYFhVvxw1u",
  "key37": "2rqXrDh9hcJHXBU2mdeXV6TdrvqGdeQWTHSBoxtpmsWy29chXSoqz3iF2otdKG4w6m4o4mSownAXdNt9rQtt2T7w",
  "key38": "Jd6HQBdiDcFbmzr8Xe9hhzG13zZp3DWEZzuwCRaps8yA6WYSuxrzXsvDNJKh3VyPXwwk19Fz4SpbrPhTBneLZAJ",
  "key39": "2aZrfYEzAiMuHhAAmRpGAor3s8KrniRnLSPd5KMMNe9SffMjy5BWUF8Pi1yZqiM858m77kHk7mvaoXMHrPQvikQW",
  "key40": "ivh5n5v3rNHXF8ZbnM6yRzuTfSxCpiH7JjVcdG7WcrNmCTFLR56wNen2m2H6R7YD8bQ4gXs1n3h3Q6gUPBZVACC",
  "key41": "53y79cb2kKiE3HKpqCspbczTjfvigJ4ZGycsvGexTKkAYZYGnRKLgHYLLUJPQCdvrC9uitPzhFDdNmscjVUkEsAh"
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
