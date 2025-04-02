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
    "3Hc6CjiC2p96vAGwuKeq5wm2ptnynLtKzSQgUYEfqgTroByUj4F6MBXwFcMZR7z9niRP82sJ7bDz2ayVZkrKqrwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hhTvvJcbA6Dnu8dJkyvnt6C2rFLc9ry8NCD5BWkWpW5RQ1PWM2ueTrxa7Kcw44vdFTxXdt9295Pqvr2eYW8zqsX",
  "key1": "4bJ3EXHpsZ9w6rGCWVsR3xnv3FHaiSvjzaqez9woURCdeMdxpk8JUmSdpa3f89jWqX61gju9RdCQsmTy21z2qsfR",
  "key2": "23tQfNsNPTyWBQcpBrtM19SHRkDFgZACGAXBGUidYzCaQj1T9xEcYebq5rqCkgyZRisKTAkYCnnx7BG2pbdPUmXn",
  "key3": "2RxHYPhTqAs5GzqgyiVM2RDW66YB1M8P73o4zLP2ux4oun2zSMJD9baTdHq2MBpsNjUimJGmCNFB3hgvgVa2Vo95",
  "key4": "3SDUjjEydudDsiwyD249VyqdPfSQ5jYVpoCRE9rLQ3q9N6cB6eVh9mi3yN3Jcdeofdo49uyQ87hTXCykHNhznbpQ",
  "key5": "2UeL6Zn6gbFZ5vTLYeEBxjBPQSgMJpoRLF1vuNwNJkvrv6JaJqc3r1FPt3vuuQtsSBpywUmLcAajwgDsxy6N7CCH",
  "key6": "2hJxACLTmo4wehRNthG1ks9meVqbQJ6tGyo8Y5YmkhsyaAGAqmnsxW18tpoJuFgr7gj154S8Z44BQp3XLGso6RPg",
  "key7": "T5nJBPDDxv4DoBLrEg9xStgXbYmK1JR5TJ32ShmybRmLodassJ8PCiX9awUKWTs7Qops2Qpc4zDefhM7NWZAbQk",
  "key8": "2DawJ2n9mv4bxqoQhYticUJRTivJNxRgRtxw3usCiHdvHtVh2TeAyjDDk4p1SycbxLudLnXsyAhg13gk66giB7yT",
  "key9": "JcoogkKhV4mRRDVV8qL4uY61xTcukhf6Z9KZxuqxAsGbF7tqx3ysJbCgGD8ytF588mRvqdJhHSqyDdpnWHvSUrs",
  "key10": "2meWjocpSRpSZAijGtnyNKqcViBvtEGUPnWcikagkBo4o15zJj2L5wH9VQUCeuUkamzezAJtqYrkmT4eTgrS51ww",
  "key11": "N7RpGsRExJCkkuTTknR7nPGmTYPXKFok4wUrGWmPZCN1gGxiMBsn67ckcv4KQU4Nfv1e4rVoUtcv6geh36vJE5m",
  "key12": "3P3sdtTC4FBZguezANZfsJq3EjhmEiUnmNzgZzp4LiYRe82YuaXdi2RYZxGGu46tviBgMAkNqq1dcMxLvc9fgQ2U",
  "key13": "Yxfwdf95h2hZp5YuV5G4jVkuhgNPo5XN7Zb7gz7eGcNHqpnGuq87wxHdMdsr5w8vv4f5oeZeoCs4AN3j3ZQrxJ4",
  "key14": "4Eh4WJoMnmEPGrkgpMRESeGqjMwxmHm12spjaByCzciZdE8epmbWjEBrSKi3SribfarsvZmTjWNw6qiuuWZWM9a1",
  "key15": "2ZSCufTFzu1mvRo9Qq1J1xUejUpN77DirBAiMgFP3hdiJKKYkEJVvRLCk8R6T2mBVNDJCYF7hwwKXbPdzMfs8gHC",
  "key16": "32H5VW7pub1y1BGLJr3j7vsHEgPoFp7HJhASSdsAfBiWFzxujrTmhpHaPgadehsCXWvQaK3d7pgLZMMxAU8qy2fz",
  "key17": "5AhYsZp7vf42BtpuoaVLM6VqKwnioagZWPprrhN5eGBeSVF56vE9hfjxEJWWwEeBLpr2tatVHCCLzCXoLs2kwKMS",
  "key18": "PjJkkwcmbzZHuxZo2cnrhWBpnYssQLPSiR9M9ALJKfuws764hoTP1simbwzfmBJTUhR4Qw1yQKt86RFPZsRnHtv",
  "key19": "zPVySjEBTn7xsMf79qzF3DibVtBQJrHw7vajtmQ2wJvXWo7p3LGW5YpriSNsCKaqnkvi5o7xTaEZYyhwSzq2J71",
  "key20": "2rBGjybKrLRpPhhH38uK4zf3jatEzXBHrcdQEK4evajv8mmXbmhMVXZQMRQf4kcxSHsLdDvKiGAeJkjPkGnnq651",
  "key21": "3ACewTabmm1oHN565TqXLZMp2RbRDxkxQRR9JsEC1fZqhJyVYgDBtAKeAWVQT6xgrbAjg4SZwnFuafrzW6D5qZiQ",
  "key22": "3Pe2DpR64NHxwpjj7zgWPjqP8DDQiYnE9pRLjq57PYFEcMToVdLYD5KjepqMbczEiXw8eQd9HcQkacr9gMjVvNx7",
  "key23": "4phSN4qR8arZ6U3t6uAS7cd78qMKVyAoUB3RL29BcoSUvJPLC8yMxegYvt2TU7pcreM7ahXx5vj93hDW4JHBELJ3",
  "key24": "5BFAw8CXYEFGnW3ybJeovLcSrx3c2RwAvHMWWCqhkarofiNgfLBuGoEVJQzp827xQ5rukYaCbUTguPFH9fSw8oYZ",
  "key25": "361kLTNVXQXopHnf7SuW6L8dcomR68QN7za9cgNirUCR3k6UWwfuk9R4bvrbygeheSjtDW1CWNa93hHWX5JWq7MK",
  "key26": "5aoUDBcAJCHd59Zuj3EdS9ckuf29vkU48w28F8H9p6Rssq9GRU1BSYxjzEpgae7ZRePrjAbmWX2t3bQBbifN7jUE",
  "key27": "2ukHcSF9zoYdYb1VD9D5EH9bTV8Z3MYJGjvtv831tBvCBeuWXVuFBDXffi9a4NkbApXs2KagGyymZhxe4h383f1U",
  "key28": "5TuYuhtpg1ur5SutpGGHjwvE15dbHqo5y5cCWmWeBi5sG2bzUaYwyXWheDXs6auU9wRUW6XkmtfqS4Y1FefjPpjV",
  "key29": "3yTyxVsuuKxpQjuys8koamd6gHS98VcHXHrNLZ4USxVnpsbmHTygRHr8t9JZfBVcyzQZrwgUaVkeUpgDp1E7q7ga",
  "key30": "2g7DFE6iGzg8A8NsEmi22HuvgEHMXccNXGurD4Wn8MwiogyXfopRTVepZpePcq7vLUmoWaKVp4snGw3qP3TNMGPg",
  "key31": "4U6FkxBtA4eKy4DnL85CGwd5QXuNaWmsj8TYmm4X7qXFRZwvzyeUaujokNwswj63hAiBr29c4nFu9QG9TYfU9T8h",
  "key32": "27g9bvvuch4yr1nWpdCTP24xyDKPQvqXfFS88FrbgLdgj6ebVABHL1k7ZM7YWDFVn5B2kBphWqJbZBQvQM49GfcC",
  "key33": "35qzk8e7cXTdFq7dZdEpnmqGaDwnLjhUNtH9a8uLpR18SRQ1qWkjhbEwJEGe48Ek7gD9PuDdG1utp8w8ZUpmKAzu",
  "key34": "3YVVDFv1xhnhPCbHV1X91n9DJKgCu9Wb1Z1Q776FVJn2L4BMMWFdcSzy3fcEQ4RwpfUCGR2kjXRUVigdETakFabP"
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
