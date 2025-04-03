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
    "3MowC3ZbEmheNcZNm6gWrzmP96dnRNnNYnAukh3xijvyZpYAEwiTwTHNkZaT2EEVfn2NYw43jqkXKmZhysrKJqwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36QZ3QdxtLWxymkd6ANwcdWZZcedCX4M2rpdvWNXGAVbT6JbPrwufwJWyPug1bJcbvAb2eozQougJ9dm2JEzgK3i",
  "key1": "52M5B17XjjvRGUvfdpB894imApKFFzvv9dQiq8Dad5BBQ1CDHqVAdJZena7LwgiRDsWQtujPAutyoGBTTfkRhRTB",
  "key2": "4zNaCXjbDsWCCPp9tMwtryBexrP3hT1Tf2bYkDaU4mvuATsjawXNqi5uZmVJ2PJmYdWnv1LfNn28z2GCu3xHJBnN",
  "key3": "jkeibmocgMZrJBoFyZPfTWH6U3bUriodgNyrzRzFX9aAPnPzuc3HrBc1tkusXQN72sCxLSF7p6oNFyb9HYhZftZ",
  "key4": "2ZPPhdzzDid63Nmp1yhTqUQdoYUBS8MJWaXeiQh58pnrQ1YwW1q7px1d5rnTcb4ZBepYXRXRCD4ztxd89RkFqs8Z",
  "key5": "2Yz6j3vCz39WvQ3Lk7aD9FdwYbNBWVFF6wZEBdHSKhTTB1ZVHfchgnHfdau6ZRBExxNAxsKARgav7wqXV5YVdoLA",
  "key6": "qGfwgFgdK6RUsxwnj8m1LJTHKYbnKhtPhvyph3NDKaNUsYpboBFH8tr7V7w2kSGkCQkobNTcYhXwviynaVeTXNW",
  "key7": "VLdeZjc7R81KQaygACJmyEKd4WZvZFhjoo51nd8qw88wc6GdEkumhPtFu6KapiyJ8hqEQztDX2BUpnAeRPRDEkV",
  "key8": "3rWXurf5Uopw6rqdTJviLE6UB6EH4tbyLydkH4tP5qJ1ti5x5QoCg4xFB31nnYHvHeQzaxS5DhANZE6qnG8nKRVa",
  "key9": "Fd4RsKpuU9wEari5jup4N1PKB6wP35GstwcxtJrRkmirCeyFL3cQs59trUaP2YXea7o34KQnjnsoqS5fHQjaDuB",
  "key10": "3h2Ju1gPVatF9XPyTTYv23SWVDsp1EWb3fmx1WndxQmt2je4K3ZJoAzDVNM7Zb4ebk7YJfR3xhdLdj8yLstC3RSB",
  "key11": "3vkEbwYJhuniWrA19RcF18Ncdn53cqMq3pCQr12Qxu5qiXbrH7gKhJERTU2pA7gAorQiEx5Mm9486aqfZz7rjLBP",
  "key12": "5fMKkDTxVxo2jRJKNS2V56a1tRK8T7EyvbDFehn11hW5nHphHKpkJnpfHxBsdpSVEAug3XU3fsxnfPu6RaQQjbAB",
  "key13": "4E6kZs2XghCM4QTHLHT92M7kggMspAB9gyHzHsUYXGMLmCA9ZGS5VNoJLQDUPcTFDc6NF32AYygRW6w1HVFz1v9R",
  "key14": "VpiJDuXHAWfUnsBHiELk7dCzUi8iWSVES24cNfmcsH3vggBzvXTGMvF53h7vZDJGiupobfnSh1P2mmFRk1Cemhq",
  "key15": "5fGSHb68Hg6JgvzbcxfEdwNoZWfNb3yQvkmgJPxGehHcjYFdaPfCHr8BJgdTFy9E7eTciNcM9dgVqirJXAu7RW4V",
  "key16": "5NZRiUfHXLCKhWBm3UBhrxZQcnRsR9uwYoYtQBRNEmgw2FYfw8EiQ8aPahM12LqtAPUrAzw3r8xscS6ch23eLSDc",
  "key17": "4H6KN5m9n1xtL8hPMpFua22e152Bq5kBSHA11QsS9rhaYC2rqvrg7TGt8SVMPVjDTiS65GqxYk8eHorgmcM23nKj",
  "key18": "5hk281GbbGTRCbFsjYTR9QzRbTXxUkAiH7d5h7zHkZ5FwM9KYQorFBk9my9BQ7qY8NgdSrjBF7wmFsUES7cEKiGn",
  "key19": "37tcy6kueyKSXDKm2MXja1wCDJho22pisYVvvZ4QPJwqNnQtZnkiewLQYWeYcsSDzvDS8EcdD7FCV3p3pxL6V8i",
  "key20": "2yHd86iQbpKD7JpUS6u6tNeHzxRwKdtUfdqYTx2aFzhmuCqSvRLqEnQmaGE1tehKBEj3osv2L9wf4y9wZnA2GDxp",
  "key21": "AsreQ8AHXE8Ub37fvfUdLRawUpF14Hkk2VE4jTKQxEvUDUwMLQQ2qsf8nfzWHk2avZ2PiUJqtUsY1QJpPMd5QrS",
  "key22": "3Zvc8wqCgejBhgts4b18i7fgxCXmMeV5X8ht3HGf1dcQK86TMkKuVmcgRXxJY1rKYtGkEJAWJAR1rNbphCDd3jr1",
  "key23": "AGGzvFbHYgNjzHy4E5LkRGZB8hQF6NJnbAPucgJNqgNeuWb6vqtU36QT6v3Uai3ni7szdiAeEhQKCfxX9s9RTTQ",
  "key24": "35fsARvu4CkMzua4D1uyxV2uM4GWBm3124CpNNypg5RnvkRzJARPBKvjiVztHhNAtJRrvrqW1r2idBnRY3TjMoVj",
  "key25": "22JWCcqbWfBLt58VP2D3wdwAniB6hMWgBGnVfgvdHFSXTD4DrJybb3boBJzSFXtZ6mshC7t2MDJzWw1bCd7xZLED",
  "key26": "38VqV6n1mZULa9FJ8d4Htq9jiNtNYcTMVZpnVCcTvTwV39MWeLqH1ZmTP4aNAVDthFKTaapu8kB2T6aMggST9SQq",
  "key27": "4yMpct1npzVY6xdktFeRo7YCUnBe2pHP6Xgn8Sqx2ukKDHJPpCDSPFKQomwthQ4u2tqTwmTx7zwJJWDQVSPCKMkk",
  "key28": "2kEAAH62PAjSupzaETAaGSrjVko2C1ttUdmq2Q3d7ri2W6Jbu5XpHcx562YzKpv8rNaHAPpErug8p27FnAUbzmvq",
  "key29": "46sSB2cGk3cJM26MsZ8VSyW7jtEP6zy1Drg9dj4DJZHW4MKN6w9yy6zbY5drbP7EsXFLe5kvqqPrRVXqj7bLMD7z",
  "key30": "24ndu3pK5KeM5jaZDWFE7H8kzbJrFssDvRLnsgUJr7v4uB3bTGpAmhf8pUJjbEV1BmiFkCXKxgM1FXT1jY5pSQEu",
  "key31": "gLDKN7H5rx9hLdehRkxi5wcT61Eh5NBFCSj55ex11zxvXyXhAEmDku3gjLN2TM7wxTR3AzJmkSZudXd5LbtyoKS",
  "key32": "WGeNwaeqsJZqHBVWZ2wBKt3i6yPUtdh4WA37NW6XznJQ45nR379NawVN3NoxCNd5VwDQLaq6Nz3xGi8pbicLiaE",
  "key33": "2yvV9VbqtjZsHgowS9buM4odva8B5JAwCnu5N8VxsnGYpFDzTi8bkvYKe4TJLf5fjnsaLaqA8N2ajGerbtyWwUVb",
  "key34": "5ZoASi2xNbaZFjiv8cD4aFovzVQxrne4AUibdL8H3nYiu1oDD4LDVrs3Nmvzb7HYk5fCkudNadSmCAsH4XaGb4wB",
  "key35": "2rqhsPHtCN3mdxj6oxTNoyajHNJRyEGPy3wVUwTy3dhYyjpMuEshEexXWYfMkRnd8XAnyGhxnjjE2pPGWdwhFJ8j",
  "key36": "3use3ZJ4gnYoDajnc6Qy3wcYTVCe1cZZ5JSbNpUtGj4RyiXPkk26xM7q5Nz27rJ9prcccuy5M1g3i7XVHR6Ga1Vm",
  "key37": "3YTr3J9FzbJJLWfdU62SKkiLMMYJh6CayKepxLkcHoXTEVh1cmKsfRQW3iu27NR91uz1KLVkkoVDuu3SwgtbgKPE",
  "key38": "3rdAjdbQR7kRDQCo5ByQjP3aErzdeo1NZcA8rBitndBNJ37fVHZ6oqdFgEnHTUB49TZzSpZCsdJiUQwhMtyb1GKu",
  "key39": "3nDK3xiWakjowDuyJf9JMurGbx3WatbLVnunkDMavBH2YQfhP1M4gchPu9YYLe7nyhtVsSUDgAd2sXyy5vrz9m1B",
  "key40": "64PFZbZude51sxN8HCHDZtkTvrGzjsjiFmfUPV6Q5jetu8aPieDS2H5gocJHx8WKpZoj7SA7ySWMc6kuKb7WKQE5",
  "key41": "34ALNQjQbJAwtCSwpBvzjf2m9MBKYsyqy8ABmWKPf2fo6i8BAor5xKfpuG8UC3sFnaqknVFwBgV12L6vH3LEzjbC",
  "key42": "2p1AHsQXy5tyosTV74ZifJcmYEwcovuNFdN5p5TSLFsAa7oAxBatX5mVvKRjVRLfvAMwjVFEAk5mvbTbuYG4XyEz",
  "key43": "4Fi69gEWd9qjczB4VAjsjsGgMxgRN8kkjkzRUrVpAmiP86Mbr57eDNCyj7F4ZEzYhaSKcK3wC2EXDvaP33tu97No",
  "key44": "2LmPWexX5645eQyk6NSU6Tg98XMbrGJ5GrbTYab3GR87X3kvWy91uWW9xs7q4CRhD4PX1E8MPBNxYGjTTczrmnNQ",
  "key45": "7QKCjuDQw4HJ7QkFmprE5yBRtLpMVysMMA9VUxPpr2dHoNuXGJt4bBng9BKrdMmJxYL8reuP2Mpqa4t9yU1v7pW",
  "key46": "58TyakaycwTmA8a8ztJyjttEQmrsg3wXgBbCkGJLfA7BCWGzfTsw5ovxfNmtBsbVa2or6neGRc77tv7MLi2wk3Xh",
  "key47": "5XUDBkfXVfRezYyANXmqV8R77qGK8DLpVyX35MbHFEu8Lb45DDTo5TB2fMLcKAMXvcx9GpAFQiTHe8KfzhjQq4nm",
  "key48": "vKBMkLAEUXEPiGuPAYP284XboQHvVGP85H5yC3bvFA8apCwAjnoN6JVkEf3YN7k8ywZrM9F2jZdJsHFXMvLsi9q"
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
