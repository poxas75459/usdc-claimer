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
    "4QzXWwdcqXgXWKnb8mFhxqhFtBPYSESg1oDqnNmtyf7GpbVvZ3BRSCPMbZuxTWXxN7XPJH3q3MkeuyJTfsgMHCff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3inRbmCt1zKMbKA5bX7KDMjNNP6nq12aBZmfeJ5JeYpzcXMiLsEsuHM86diV1oxqBkJoBuasHZh5YMuL76iXo4YV",
  "key1": "3eLoEkZ8yCXTbjwXU5RRsFf8v4JzLtSqLPy82jVSQmDp3yYFKDc9yEZr9S4jRixEniQKciyie7VzTY25ebBKrJX",
  "key2": "cmbs6aqVr1CJAGusRyoU9Zd2N4LfboHZWR6totsNyRpr2foLK1VZ2doJrDM964ny8vTKAhLnjP4CxGGLi5v5pJa",
  "key3": "5ktPdBTeHcsZERLH7V6UYKMZQ9pRpZj8PitJN4MMzrXLSEvcUBeFt3Zn64KFRiHLpVArcAKq8fwhsTZitBaWzui9",
  "key4": "oujyq1ecmLBfQ3q4cKcdetN767x8q6W8R2KqCSV7brcsmsW4DopJZemEzu4Pr8BT1BuRzA3X5nzHgpGAPhkZs6q",
  "key5": "4XCE8755K55RkQuTkMKtFjCGXoMhDz1NpkDPfkjVeomzEeNumNQX4ED8zFxcEbaGkbMjtwtYfBupb7gfdvrsqQN",
  "key6": "2yTDJe2weCCmwcb4AnTPsCwBGRAUVD6MGg7Fh7KnEysrZLCPEepYpyhXfhUyT45KYwApxHCYUDL5RUyLW1FWfPCi",
  "key7": "53wkXvUsL4as5aqh6ArFxdL8JvCwpseryHWcf33QXXdocSyj8y7PmCQtXeAv9RNBtXyaXzCk92Vu8aHJXCtc3b3i",
  "key8": "5HorQ1CB232GLeT3D7UV8vtjDgkkXzFwcn68GoFUSVVBNvWBdENq9BMWzYTZxUggZUJtnhDqeGcucRNVf3cbDVZJ",
  "key9": "3rtaunhAnxm3X4U7nQsbsemLZNvsS5jd9rZoeCCCFzxCbdNa75RdViorDsPFQi4ZXUwnrTRb2vt7WLXVpGEcGLt5",
  "key10": "apnahxPcg53Nh7PNzxtDaGsD3W4HaP6QTpM9YZLD8vudDgvb2jXq1nmG2j7Gw3WVZXNUt3hisJHLx4uhTS8Q36z",
  "key11": "4YKUNEQ9gmXXTNMv3bQZ2ey8xyd6SSuKmKH5Ckac3ZshZbgKfsceMaUFu6irLvHGF8Aj4j9iNVkiPvxez7ju3gq",
  "key12": "4B6jRns9CwLZT5hUUzPn3Utc43i7hjVLPnFzXqgc9W5o4HXE4YvkMSgDHPQmXfjaxzofXfydbYmVUM6eqb4JXmN6",
  "key13": "uxqWhHbyrk5FEWvwSxSd9hdnqrPHrJKR3Q5q3ZUSa45Gfag3wRRvamJ3R5g8gqFJw4fqRnZKbHkeYap6omtcVAn",
  "key14": "eVpAPXjZ2g1wgUGeATBhAvPmr3dCpvHSB1aXvF3AJ3gBdMzjACEhDMW2PdrPfuo6mX7rcrKYdQHrUnCwqS4npZt",
  "key15": "5vZJGYsk4xSQqT9WKC7TiUG31FDMnPZYKU19qfn3sURu3zyypxbp91Ry1s8pwTqiJdwZRn5JE9vTq2neNUL4WtrG",
  "key16": "kJfQNosw79zSV7p3DYbzbBmVqb9vpzdfKQ5MHDi8VQXk7BaNSuP5DonBQNUo4HsMGFkdJEZiGkHEJ3SS9s97c8R",
  "key17": "XsNzdE4efAvZX6noATw399LYe4GwwrZEyEWSa5zJoSMHAL8bmyeZHFRdi7SHrhCZDqQGHSCNhQnkvWiAkdrQyfM",
  "key18": "2uMKntM6hRMk86XUf6ev1mBHAQatKJWuzcAgQKpvvCW5X1eM4DVD3rZja7H8JYRSrf5FT8W4nYynGF3SBhigWHjz",
  "key19": "2hiN194KnT2X6B6pZNpyYbfPZHbHoS1ShEWvut4wKNCkLSadxjwfmQtPp7DLRREYC7oWFo9ikwYQXY3niiNZSm88",
  "key20": "3U33jy1qbWRPzeX15cCGWVEP2RmbpT7BF6XRsoe3meSBwqLmaWNPZ2HGckxgretjZx2id9UA7wNFZyrf7SXnshB",
  "key21": "3jGMnnDf8j86weM3tygJyChBZb9Dp5wS412NF7TyRVYrkCwGcGAa8W6XvVkRpWF6qCcxjVyN34VcQT9vy1pXdHgX",
  "key22": "3icwcGcLqTAosD1zbRf31zMGafFqaT411q7Nn1j79tyU3EdS7PttsRz6FLPgX5Djn2eTxqd9WM29Yd538R8s1YHY",
  "key23": "RuJD7bFY5j447QADxwsYu5avas1v86UFGroEP5zivdpqJeURTwdcaNzFeEQYD8P4iph5gnz4pdqUMHjsEM6jupj",
  "key24": "5uVFRMBZ7fa4MFDhtwiy4d9Wei4GEWxNWpGcAF9PvuHQ6C5P2txw7QVvjnXFLjfcctncwMEidZH1Yb7DFUo7H3MG",
  "key25": "5p3HLQjxWpgrtZFefH9tx7yqiSekrLpEVTamiuLkY2XYZixYW1k5cMgzMuv6Sk35ruNc24FFkHxLztS1SFsQXgM1",
  "key26": "2BbjZmrxnYx3i5zb9Zeu7Hztqg5My3MCTqQEKHWVCyydPFE26DkF1wQubfL7ERDLGkb55qYHHdV3r5Tctv7fy7J7",
  "key27": "28uHDoSRoHRYp5FpP3vnQWfUofsiH52rvY1ogtPLDp64vyB7q8PjzZEr5jL1oSzqL7apVCEd6o8kUbZawRgmqKvT",
  "key28": "5EsZye3Z5F6Px5fHPM1ZgJDu58ufeDrHWaHf2YAHEecw82iR3CWEcD6iqgSudmoAxNoywQZpahhyz1tJZRsCzgj4",
  "key29": "2H8r1qBut4JLDYtJsAvUAt5wq7kaMr7aXAc1QjVhUg8aUmAsG33BZa7FnrEdR9BbzjuCseUaQQnsXhGWLyZCLbhV",
  "key30": "3JaPNPRqsZ75Ae2rqKCJYQrA1Q3KEe4ukhY5UwDqCqC5mU8r44EgXCQBeDhK1iYKFwvTn571VDY6sgNkgbiHQDCX",
  "key31": "YWKz1XnMMVEaGwibHC3j9cg8oqWMSrfip9KnPuQhVq48RTA7HzsYH9xS4JPvtx5pau2Cod8oxxBvaLX8ZcRxxqp",
  "key32": "TfB4kZu81mQXU8TXGgqgnHeBv585FxcN1gvX2exf24q5H7mZinvts6G8Ldz7gbh1Fvs77bktofG5RVHroceCefN",
  "key33": "DeqzowsQDBTZXkGe7aswPXYKBjGE1wcuv3LXn6rYhcUW7ktZiZMTsf5wrSKhRJjuHssXQWXFeaEMT4Uh8ctm5eP",
  "key34": "2tLNpjZqrCVLpdceV3dCp3tn7mRs7geWJdSowFmeyJi6e5gezMM4AZv4N9AKKd9rTfbQnWT6ZdJzCm32yLy2zeMf",
  "key35": "27quf1ZybJhELwQpQNpeWTSE56W2KxRy2mfhfga6RALfeMQCSuDKsqbNxQ8MsRcJM3fL9U3qonsn4tb2ZvxodEfL",
  "key36": "54qYh7pu1zgGeYJd6XYiZrUWH9UaVW2d7347F8RKnvM8hyNcDKiGY4UcB1iM6gHHxLtGYonA19EV7zEcFdQJ997b",
  "key37": "2xLKETVULRtYZFaQY43RBKHAiFmJyAy7DNccCgfFNUZmthwpuYxXkxqNbzLb29Nak24jGThjiTc6Ki2P7GaZAxrH",
  "key38": "4arK8ANUXovURjZenqLhadX5tCMMwxSFEDNPgbVD2RxKF7DadUvpNGScWaeNCTiAL3QmadU561PeW5ybx5ewFGEG",
  "key39": "2WmdridNeWv7dmP5vK4yVG2hHCatvwvpivq5Hhvg4njWjStCx92Dhp2HLqFhLWho3UewPB6MruHvwkRPCjiaciAv",
  "key40": "47sYN1pJYrKX4naAY9942kY9gaequZzJuSiRbNhEof6TeQ5aJe3AFFuo5nzPXAsyQuRzNUBpPebo134WDPzDrETY",
  "key41": "3nrWA46ecwULVwse5XJRFkE1K3cS3LwSANbdXfUrFWqCCfnBYHDk5dJ6ydjxamnF9insR6bGDAWRXC36BAgCc7dM",
  "key42": "32AUCFp9K8ysqseg3qMixfgKqjAqsziHNtdLaGmEpUkRJuKb6YtEbBhJMUkFZLHZgmEzsMg89tpnXuNsVGji2yA"
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
