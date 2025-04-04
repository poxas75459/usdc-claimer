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
    "4n6joveQui2zXgceRxRQzFhFWV7UDM1ctf1764xSdfa7JiGZfbwZ4qSfmy859N8aV2B8e2mvRB3vArwmpCd2UWAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BBFWL9u4PEE7ryyKkgrAiZrXFePE4d1wafwDKAQuKYRCcqpRweSkcTQbpXUkCbRKjgaofDHct1WAjgjPFbtiU7e",
  "key1": "gP1eVep6w9mgfQzwTdbDoTrmc25YNUpqrjTjeeau3iMUx4sjj5kfoh1rVsXkZwv6EdXKsbZRc28goVCrf2nhVXX",
  "key2": "38bf5vfZ1eNk8hzSVJaeiY21Vj8won6VYxu6PZwYur9QkndHSQdorsGr1d1hBe6KMAKskDwiXChkhBqC8WAHvSfx",
  "key3": "3QT5qKmYVgMHnc9kAL6vfBfeRg9gwrZ6KyHJnbau2fMtrcnzycxBkM1BqzM9Aw5MQZVvfTeX4ELxXx1a2hnu8MLn",
  "key4": "3nKNyKoWNF5Mc7xo9dUKEc45A9aBh4xrsW5c4AnmpRy1yjM7JHEqoz3QfackwEAoa7dzSyFfMNmLM8udLYgo3bEa",
  "key5": "3vLYxSdt4Nkkd2cVhRJ4JEszZur4UdCXRRxN5vxZ1rANdNPpLu4m3oNtk8sShcp3ppHURLJ7QJD3urNA6t7NK6uQ",
  "key6": "2Lt1QEMK7JeGAmptHgmQqKFj3P4EHMmcvMGXbZNxpg3tBH71Agx9uG3yqtr9dtPouH9csq1scyfiaS34jhRdum13",
  "key7": "56PqjUG2NsegeyfaEeYhybPLE18KCrkRo4w7nAChzcmEXvCVmd7wAjUvpobeTGzUsbCmQhaVkBbrsfzTbKxADgdZ",
  "key8": "3xtXdvVE9py1UL24hYq9ucUQaK3gcsgtb96cXLehHSFDWGV3oonaZwgTzHLJSC3fVkWa3vcpDVYQ4aXELGzQvgAc",
  "key9": "3SqPwEG5dcdk6pHRq2Pmn6X3HxJujh1b6pdkVz4UjwWeXNEMQjR74dD1GYdnhnVY3uynGuGdfKtP3PWek1GwhAeg",
  "key10": "3sLEaTwS3h2ZiJvF2ydhcijLPbxDaETBwRVmJRKirvZ3mdrcccnvtSTk4rU8EejK3xkL78QQyoi7rUS3C4QfnYT9",
  "key11": "2iYfpHRtY7zusCST4CoHd4esVUFsMneoDzKiBj3Sit5Wrkq8wkPZyaZJBawEzQvDNTqvuuaUNXT3tMZE7zvd8ZTG",
  "key12": "hcNHULRbtAkK9dJEpmhE4wPsuhABMDdpwfkXnukfGSQkZkwupg3acyjWzGNxA7u7MEdsmRcLHHdf9P7wPWtwNRT",
  "key13": "6h96z6trFbSZ6uDyudMJMsvecCzt8xDeY9acBGozefJcgiWA37kgMubDWmUjiFiqGQmEzs3E7H7BQineX9CWfFN",
  "key14": "3i9seQktTQcHzcoYqe3oNEwYuLPUeKLg3W8uqPX3eEYWt4UwkNKM1BQMiaztPAn9quxkEKeyXVz63mPqjgdpYQ2k",
  "key15": "4g6dEj512HoSf2YfRNqoGcjh1NU2KNLRQb3LUHencnLbtLzQvXXoqAhB1oMgsmio5t9CuzXBNyUyMGwXAUcJ5SyD",
  "key16": "2Y2EJDfWihd1kCUNUfPq72w6HFgZSAJENZdVGd9iE47a9E19jooY56zsWxL6yy9VNM5dF84UgASuLqJPjXdoT37S",
  "key17": "sSYN7ex8Vtc5poQ5EzheGGVkfExhyGojMoY2gzfREuDSnfDhK71ezV15QFYUJsBPs1cepWg8jbA1oCGwpM17HNF",
  "key18": "2gVmbYf7XFT4idti7bcqozxGHVLfYjtTPA4yZ6fEq5TxADaJN5i5AFmzrFrkStz1g18zXKQMbHV7q88QDhEszjbp",
  "key19": "5GSawGaWSbpTKQEd1xRyzsGQ7KbDioYn2iK39jipUGFGX1vAuBYhCELGQ5QSEQj7DZdnAMZkC25QUhWzadugkx7c",
  "key20": "21z4ieT3PsPAHJR9D42Fb8aoGfV31V5RmtQNCwv5aiTf3hbNfvrcGKUkdZS53mX2yyWHLVmkcHyJQBeq1nTYLvc4",
  "key21": "4kBAau1eJJ6Q7EGQPuyCLNgvgp54hyQNyV5NYx1vaXVycA5LKYJTGuQoBq7eAQz1ubcdrmeyqAa8hbrRtrC7ZX3f",
  "key22": "5TagkiXxpYAHqeK1aK1pqBzZpG2GzDXyHBdv2Fzgj3YdSkqQpmHxLazsD5z937NttufHD6bi4Aj2P4kTZgUuwFWX",
  "key23": "4v2UaNReUYhojgBPxsxRb6KMaWXrBZXgUWf7bGoSikVUXyQgm3m1KjYsbkkDoL9Jo5bkQ63fGe5t4vwK8kqyhCS3",
  "key24": "CEtwQvHA4B4sRM918gKhUzr7oKjUdhjwBDk7eSHwCatZdMpd4rN9uxCZbNMaRbCGeVFuJ7wZazNB3fe2bzWDWSE",
  "key25": "5qHBayTespghp5uifPpmD6e8cJu8TjLQFApt85PCS7Uqd45xFpnEM8iknXnGvzyRptv27ATPpkvaNBcmtRvxHyeE",
  "key26": "4Hgxu72q9XTrjeco7hyk7AhxCYYfvu1BGcuc1RS4NhCMEzaVW9eVRpVBn7DBQo7Kp8UHbNT2eNMCvBHsrUEwFmyA",
  "key27": "5SA3kb6SngBc1RSQ2HJjqkdqPqiLZLJEzWDioroF8kAmtdSKgWrJ91QjxVuYKY3mPzCXYX1fHpyzMmv7m1aASdyi",
  "key28": "4TXeP7W9KND1qH9NDmzf3fnavohckdc7V1CVsvFum1GLULQUPs5mSXLat8hEuC91e6LbZ7GddoR2NYZi2xQtPpzh",
  "key29": "37menTe8D6sTkueBUFY3wLZQZnrkxy8edjmTQ3Dy27dvnUavLk11gmMgBTahKKKRUxMnM9ncLiduf3CHTJqr6RNH",
  "key30": "4NwaTZG7Pw6ujuEdLQ5iiYBFRk4Aqu13SLBnhvrY63VYJ5UaqGgNmVYbowAMMzgjepjPXu73TqMqqWN1gtvnUpf4",
  "key31": "3rDVCqJMAUFAUcjSKPRqaVsuAq6puFyURTMt6xSQvq3DMzP3WCRbJtmXXH57RKExxfdKiAXiuGT7xuRjPtj8Qfhf",
  "key32": "5wmM4cio1RGtk5ehodxrewakbsbjZywrgzdsK9ySGmJjDhwARzYNttgrD6DUCC4sP8XoA5WYNyAABD36UVAvfhCe",
  "key33": "KLYNdQAEm3T4xqvuvCo87NVvrew21wyL8m8LnaXUwzC8jToAEFbgnzUj9d4x92o7iBMeTxRWVhXnCPHC9uceiJp",
  "key34": "5EKMxrmy6EtKWQZzx58svHK3KKeuxWkbQyjoGJqYhdPLMsPwFjBt5apNZnpTy8zBM9dySGgmUibuAUy9tudT1xyb",
  "key35": "53v222K3ymapoKSVaseuYV83WhbXhVtTkEYor17g6pJimQXRk5TPhiALEG5n8986wDMpyWKkzVyQmpYeaWcWkCYx",
  "key36": "Sv2wnwSZKTMHarDDnXrhaPAKH1Ewoue1D22tQeTnaGLhgjUZ5SK6nnUAJfbxfuDRN9wbyVySLtK5LwpQE9JafNT",
  "key37": "2D9KLE9g2MKMt7rahbSiAoaFFpDR7JpLErbTwTtnG6uHjsivuK7Rsxtz92Ahb8myV3JMUE2xLY1Jy7vw1m99Sngc",
  "key38": "2qmaGvom9Hd4SyLZMh8gzwncDAGa8id7UJUCWdhy2FnnFrEDkkXNdid191mHn6pzbbaWCjKKovVPVhiBG6i11k3F",
  "key39": "3Yw7uV9La1236BoYm8mGa4Kj7YRtE7oyQFVqenUHUX8HYeN5mBCeHZz7BB7Qb6WG2dZYxF4h7rRNhhbibSySi86M",
  "key40": "3GQfzmNgDaLkk7HdTRB3GUhVudJDa38uDW697Lge6x2n7xqsHqLexnCjo61Gc3NUTjb34bPVoE2gpSjET3qkRU9g",
  "key41": "4LpN8oka8MZzABSTchiq2DPsimH33Jg8RnoLrEPd8Ppe15Y64Doy6PY8MajkPknxRfZGo1H22roVGY2cEYqYZu4q",
  "key42": "WziNAYWLvesA4W68t1HZVfzDa2nT6o2WpGCa1an17zxW3vn5FpEuZhKCBvwg5czu7gycg3MCK5NmAYthf2ytBvA",
  "key43": "52aVrC56rn4BuHK3h5UYrzgL6KJKfpNsPEmY8RfLCqxyUnghwrjgibBYe5zxKg3W9NxyhpZbrWquFdjha7RzrA9k",
  "key44": "zJG9FWw24i8ZaVqhZRSVoKXphGM3MW4ATJ8XpvKMBF9ob6yCCwa2gsqDxsyLV6AGbNyveGEC9EdJ5Ry3VtiyirP",
  "key45": "dTAd8FQGPSLiMNnYZcdVdkDdsYksBk8k8onLmhsjaaPPbPJrhQiYLVge5pYbkjWzYFBHufKZPMJfpvFYG6Pzc2N"
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
