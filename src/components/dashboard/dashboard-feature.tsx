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
    "385xxdpbRPSgYkedHG1r9xCd74J2gFFWajRmL227EgvJG7EKtLWyRzW9MxHmTTdv3bEGmgLAk8hvAMwRAcwegYEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q92kHQcN8jfyiP1HmN99KsSNQMacz4rJtHxAAftVFY5M83Rcc6aUS6GfGERrY7djq199Nkx3XnfVG4opipifP38",
  "key1": "52cZFWpAfDhGxrmpXErT88u7RirM8bB83zPAdifZAcJ4wJrHtCNkVDfcqmgf53rJ6YGhfMuX39xmBDwPnepyR7qV",
  "key2": "4E5grh89NN4yeFQdfTHHTRoe98h3NgCCE5AdcwHQv3SNBJECTq78dax6U1QHb5GdBC9TNvdWFYVHtnAtYGe7dBxt",
  "key3": "acoYnvbEWe14guoe6m2CAYV7izQ3h5U3Ah37r21VQK5Th97xget42S3UKNnjr5TNPoRvLqfe2rY1ynzx2BhgHpT",
  "key4": "2H8RapXZabBUQHfxGCZ2x217MJBqEqUXu4z85m1mQWfxonXpVPrZUehM3XnqmuPZi57FmRazmK3hMCZZ8JX49mta",
  "key5": "44hYbUNvRKvYMPxHDg9Mh4TLy8P1htx1hiLPXEKQwBqdMWtiiGQciaD8ZJ1UQNm9y2a6WUfZX8we772USqkjzv2K",
  "key6": "HuE2CfHJN8stURXnegVpU5MRciQbpvXMt5GjqrXTCdeWsjKfsrhZQ6tMnYxWcFP3WuMa22EYsidccw6KuBWY8bL",
  "key7": "4stGKhqnZerRti8a9h7YsKLoyswvbcs9CU4qapCBwniodVYzPgKh5i19f6QBirNS87mU5Asg5kR1qQV873gLyBpR",
  "key8": "4B1goZY5sjsLGykkDFQFWtVg8u2kYPp1VUNVaHxU11R3rqcUqdGNXfUL5K74ehgfattW3paS2MMCwEimzy3dhuKk",
  "key9": "5xTuNBXNW5C1Yv57tYVY6fQjjVbFrFHos1M5Ht4ZVgrGFLMtjrwQ5CM5G6SRgckZJvLN48p1LorVAyAw1eLgXDTC",
  "key10": "5Uwgj1JYvoncge4e34qn7XsbGSUq7K1Q8bxTSokgKQ3za3adJZFZKi56Eiv4edo5A4DDwCqBd4exNasduPZL3Xov",
  "key11": "23YZMWF7Z4fL6q986CTYuQHdsMFSb6kW6MRB3jgpxj2MVMJSAgDL8RnLRkUC6CVaKg835CayGLszLU3GS7hLtcrc",
  "key12": "pczuZbCUmrD78sUZFzij7epDfXNMpu45n5PvWcFw2QeZmNRKfWYUjRKeJHBbGLaANgcA8dus9otnM5hex8V5YD2",
  "key13": "51CitvV7VknQ4Q1NXZvZDCvqoLVaZvJG5qUpVa6f5vU1JmeYNtwqg5L8RP8uixwBjudg25YyrVJYVwB2nGCke7H3",
  "key14": "picAcUXYf1xwgDXrE4pczNJXoEeBqaDxsemJuGoAeKbwQ7k7eh3XDH535DT4offZeiauxEebWeadwkqaVqZMS5Z",
  "key15": "5pDEjsG2kgYWoUubHt7V9feY92UHNSV7zQTuHTTcpAndzgos6VS8NxGEVea2ZYBALSvmZ8en725N3gV2wwjpTBFV",
  "key16": "VGFLG77ApVn9rTzy1vqd6LTVHuY4JaiXe1XsGFpFx3Bfk4kkKw3Gc2DnhkswyjKXXdmMuJYX5xknJuVSSUX5AMB",
  "key17": "2T3fzcS5PXYffQgVtGy6NjG4zEEytErUD2LaotU94geQNKR1igK62GmYcaiANTGRR7NZY4NeDGeYHptSEPdVsS8b",
  "key18": "bgBFdwKRv3MmmH1VyCWENi7SrvMhj8PByECZxYcrRhgttFutY2wcGDWtqg76yc6MwcjYjdQ2PQqZ3UetHWj26in",
  "key19": "5ErZRuutw7YtBBkUSpvFaAqh3PUS84VcTq5AN9QasGovvyukhnaSMEBiXUXqrPreEV1xq5koYRx6LGxWT7582aq1",
  "key20": "2kjNcuPxosDyP4jZ55AqZ8ZcgzHnjwprMpCULhTMVrJQ1Krbn2FBRcjAengejYGJso9tbw6tRS2pw1Wrxi92DHh9",
  "key21": "4kPi6GMvsfRtAgjNL7ZYd6sBSYP9hKFtSu8swmREftHqYdydJ86R3xPjA5xjLJPqvdLYsHjsqNirWXkuVeRGtQPH",
  "key22": "wnC7jq9rMBqPMBohdB82CcvNfy6a8R6tsfT95aUHGK2AyYszi9Jpcx4uQKY9oyzMeNmMqgSgCVf1TU2ua5ERNgt",
  "key23": "3kdr27v73BHJEKGxh7fKQW7vg3hGNaP6QUFSP8uHEdWrUDymVNLKgm3cUgszhxRCznKMRk6EfDLBeA2yB6HmKxbc",
  "key24": "5K6ETD7G9Exm44HJErfozkZURquY6bFRjA3jg41YFSFrqtzLuFZwobXWHniJma2uoz1Dinth7HZEHkGRBozRQrDR",
  "key25": "L3wq4YtrAzV7Eu9rCZgcCBPAdzJiDTA6KKTDhwLATdjQcbR2fCqE9n7wu1ZXAA5tQaTr6qRT5cNCAncYPWZ5QT3",
  "key26": "4ge6jXMShTHpe9cmprs2DMDy2HatvyHiSft776ZNPqNFpjmUoXsDvFk4MbhBrpnKvoYbyHNA5GDZp8qUUZai9z2E",
  "key27": "4gxRn4ZuM2mQH9fFx2FyookkVM81WkLYE3ikU5LSnBf3GeMU3R31CtS11zsDmTGB59V3pYzbaQoJaKzk1QSnFSNb",
  "key28": "KCYyKajuQih3bvpSJwyoSnApxYt1A4a1P9wwLYnT3197KYfSwDmR5t3hPReCf9aAxNuBWBCac3gZSdDe1McZ5WK",
  "key29": "4R6JMCWTdqDEfV3c6nrazZwtYH9gRrTsbmHg1KmUWunhWe98EL5e3aupqRUQdLrKYofjJCMzJZYKZFE6PGoHsBRG",
  "key30": "5BmQt6xBsJNQzjLdTyaGUvvqDnAPyBibYF8VcuzpvF88mf7jxaUMrJcMmGsoV9jqZtQ1zVmqyhtEV96fRpWeSZtd",
  "key31": "3rvZ4E6r8coYQ5aqLpRp21u8xEM47xjE2FT9J3HtveNim6CXKLmspTEhcmQ5YkEXwf8Fvy3X6WxBvN5qysUTdmLk",
  "key32": "Cs26WPvft4fLvPheiHPaeHR77EMcdjGpkcAuqTBUKjiPEP5Ggj4TZASb4gmYa9G2XLZGpkUWQmoesHXfQML6jUq",
  "key33": "3jCx6P7NQ2FBPofxWKqp8ksPBH8kJkejN1v62ERs8wCA4ZPov5eAiHWmHvk1uiRhnphmUZ4RKK5cSeEWvSCmqk8P",
  "key34": "5Pd5sY81HC9G59yMu3qKGuTpoKZzwCVN4Wt22YTQ7E8hQANp7tNhN81Jm3qgicZh6KcyB7zsGiti4nC3m9Xny3MC",
  "key35": "24BjL3hSHG1rkHFn7AUWYcgaAhwhDyHk2yZDPbUnt7svpVgfDLQPJyEmTcNJ5XMAkQM4b9w5J3QsJUZoGVoKNyLd",
  "key36": "5XAv8u25tASncjhAVjXXsPr2mYpcKKrPzTRRQqnSKExEPsfvyk6qW3qnNAjyxvwyxHxDJ2Zft1Xgg1YEBKfTqsZg"
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
