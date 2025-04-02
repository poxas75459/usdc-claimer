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
    "24PwgUYbQnf6PhoXcP9YmB1GZxnhuUrYT4dTPXTBBBPZyrXKR8NDJ7QuS6pPkHDuwBhY8Xg3aZoErhvwe3TBh7ZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gv5LzQWUKve5sTuKrwHttwwS7y4DjKG2seZJm2YN5mXaciQEdsFmGpobHm5cFzVBSqhq2oHbe9Zm6jUTbnKvgx1",
  "key1": "3CqcpT7rxUKN8qfqhiSWxHsAHApiSKC2QMQMExwPUtEsszropR9kEREGzLYU98kGbVZ5efejHzqBhzwM2ANt1RcD",
  "key2": "4H9cWTUdhiyCd8cNNcr7KTjXjAzeJzTXjC3VW78iS8s5nFTNt4vZgZhxZuLYkGPfib43p2B3cY8tKazYaZwit9ch",
  "key3": "3pVKaBeRacJcEQwzjPYbE5g3G5cQ63hRNh8aMDSnAHbwPZdszU1hkg6V4pe1biVaq7RYAwMdwSwh32hNQbnQpkmU",
  "key4": "3Hv2hmnsgqGEvTb2fCkZ6J9Lse5mpeNHKK7Z1H7mGvCZhANSYsYfrAu1qBCKTPCjkGDtzby6UyqGvojvGz4UE4xw",
  "key5": "4GbH9xdg1R63LDEbTUXzQTaUt94JpaKxqWjoWsyVpZtywK6hnirnxaUgZsrZSjKnCKZU9pTKPfDGYTXYNeo7UcmL",
  "key6": "2iyCwuWKqH8in8FPV7PKR7uvVmbxoXisxRZpnv3GNZQbZ1pxXqiGQj77QSpJRT1DmXxDfMePX6R6fuKXwrz41jpd",
  "key7": "2mxLiwW7ibMDwtKAW5V6HDsGLjRS5gzx2KbTzjieYAQj8tAHw1h4H5rLRB7Y71F4fJt9AD4vGE8JuUY1ep9Jm7sb",
  "key8": "3fco3LtNUHmn9MRp5anRhPHzM1vCaCvpiPdRu8FdquPZwX6CoS2KFXzmXkyfbcau5J5mCNKyfKHDYnNTPpAEwCcF",
  "key9": "4ukSRjUhEMhfkX8opQQtiKsXJP9WA9fahLy8HZ9BZPzAszFJRUU1mV8a3exFvGAKV5W8vQ9JQhspNSTaCVKpNcyP",
  "key10": "3K2NRSgttBR1nwCp73fjSnnn3Gmv9DxzHBczZCAnN92WHSBZzMD9CDof3MnaJLgbSbnX8Ki9pgrTViZY4QHmHoQX",
  "key11": "5Qp98jHNCBafiWnTsRWx5yKRis6Dg7nLf5iF3pN3Rz9LonAWNegqyZfSKHQx6QNHawyWZTjeVP7g2L7ED68BREwA",
  "key12": "7MmWLSrHYdE3bs3PAVE2V7FcrB2bJr9FHBantunTjj4fquP7DBWisxPdKVNjWTRBUmVDJwNJm6YG5otKDc4Wnfz",
  "key13": "p2v9bDxXMFgCtA4RXDXjiyqQEM4gJeMHpTCY4vdzBUCj1qRoNyUHav5AjytXwBdrWZW9SGVygyfstRnczQii3wR",
  "key14": "29hKYyVtNgQvJhdD45cLp4ekot6Nj7qEcYS4m6f24b346K7E5xwAT4PWW8V15Hi72CShNZehhUXyGRjyfGokgsa1",
  "key15": "3x5VqBGxEZRkuTjx2tgV3vhZpzK6XxqnRnYwQK9bjaEDf83RdpJoDLRp9tH2aJpcuvBYimt3DiPar41RYqND96HJ",
  "key16": "3ezFAUCjN9md6P4PjgRKhG5MT49iZq8ZWLY5bu31BBoPzWqRJnng3vAojLnwbMpaFtqLCJPBtauqUVc6i3dMfvvQ",
  "key17": "fSE9nr76yPQqrSjgzxjWadDH43mf2oUji8nDvHJ3y4seF7WfwbpkwB1iBSuaAMN3FNwn6FrwxaXiKC2eYFrqvaD",
  "key18": "5bia7d3SYLTEEAJqzUcriYnCr8tC5oVAXi3oSHcB95MoRGheGXhEPe3R56fd6TqxyEvDkzwUhJRmQuKk98MKZ1ju",
  "key19": "3kPjNya8PrV6vyuARRtUfWFFSJUnUobTXm9XactQgQTixqsbmkiwXNrhPZyQCsFjcGQ6tQBhQqkHAwL27cv2Q1vt",
  "key20": "5SWo6Kc4RoWp212Je9xF59WREdSTE8CLgrVs9oQEHVXGAWjL1tQebUPxKN628zTju19sTBiDFSPYcHvddu7SzLbo",
  "key21": "wYL9S4ArsNnJJ7g1WW1Vq2nGXjBPanfvPFn5bk4WgKbYQEuojvB1aniGLgk7gPEBuaFqKsYPvc2R1va8adgJ2Qp",
  "key22": "56oxkn1niHnhJLeqMyxPEVfg42XQ1zsMbRYV9wCmBg9qiTVvYk6YjyWfCZGiTZP7gkqUyibGcXBAYMGBeGf7dCmG",
  "key23": "7Z4afAVd87iLvy16JdeDFt2xdna6GgbmvZb37ZM1qyYVzugRL4LXstdypdsKgK9AEinv3UHLdakVBBRGhWwCM4M",
  "key24": "2nmzf6KwBuBBUzHbRMkMushWEbUedDuPLbHFDnjncERh6Eid7LDMcJEhk6X8FhRsKbiqRWo3F57Z6isuf6STcUBn",
  "key25": "2iQwzGMsuLJxebAZztCMgBMb2JFPcBm9SEWkMkPCDXSG9NRMvvehSHrbrmsuCfutFYtLpUNM81izjXx7fNzZQcdH",
  "key26": "3ojw6tUHhJySW7AMzbf7RZvV9RoWXtcLy64HGoRbiRajnduNjnGFpT2feCNdNRviZpAMbh8UvWcxNoL9YzQVwirW",
  "key27": "48nyDqKAbVXvuWd1oKFNjmcAXDKLwsmVzmTs54emSDGSWPsL3og4SNsHxS47mrBq1DaJyy3ZMGxDA91LxS7fN51x",
  "key28": "3h5a2aMEx9t5pR39gQ4hmbRpd72KeToVFqeZVwhJq7MvKyvkxA95AHNX8mFLJcRVjPN4qycfNDrjNkEKSLDtACzN",
  "key29": "4KLA2Pv8tNpjmXz9hfz6aMZwheSY345gwztw6E8Nh26Lgi9EKS2tMNLPZ3s4Nhw69wFyJk3WMJT1WctTYAw7cAgJ",
  "key30": "QBnE1jxyRyGE9yHXgA24gUXRmQtxL78G9RXbaNX2Nw1T9TXNSdDADJQWBM32k135pJwz8wzQSskSbTwKGqY7F1n",
  "key31": "2265zcrK8BWwe8ECryJTEDVASGxHosfaGgRjXJ5Lxp1GtuyUqzGwjquN7ai3PLtVfmJafiVwDCnpAbq5QRBTDaHx",
  "key32": "RwoMrgWQXYmV7Lm5B4dgC3BfMY5soCgRyB8a934V2a8mcXvCnAge5Rvtg8JSKvDn1Dp4TFZjRk929cx3xpKGoB2",
  "key33": "mfuXBebSDYEKccoXj1XKNz83j9t8hkfsqaXuLgj1RPmu2ZNMBru6e8YPb6sR2wuNR695cqLH26SuBarDS7CcYUN",
  "key34": "2mwKUaoHGA97xRXV9uyAShJaAcg4iJGBftGanWLwaSKDV2Lr9hncKumtbkAL27vwH7jPSZ5intsUgGDe33hxbHK2",
  "key35": "4qN2tTiPQQnzjPXpGdwRjdZWVD975cfTpsSe2jgMR8MWBu6jWHV3pUFLozytGUY57PYFGNnGNVnL9rdEEDt4Kucw",
  "key36": "3VNAQa3QnBvDtp7UnHTJQ7M3HyUdFxqP5GYkbSD1ERnoWXXjegfdKkSnzKvqHhetUPwHw7yNHiTUvjAz9PQC5hsf",
  "key37": "NzpFKiKY1s9fUWXLGT8ErEKxGMB1o6ZFyQMD18iRtRfBLLz7NRU5hDoAs22U6WK4N8jhEfsPHfe1r8DVjFLHf2H",
  "key38": "PgGXXgo9JR3hygfqApGykAHX8iFYELeQxh6G8sbprunVRnf3yPYgT2mYeQthaC2mRAc76ZZXFZZsaTmsXb2rTzn",
  "key39": "3pnFtgohNmAmzhHWwxypr4Qo3rcHmiJWsqGjkyNMrahnRPcFe6TaRQ7FKFgFY3ag5dHcpR1dTjmGWL74htgBMTb9",
  "key40": "65mGYKmp165UQdWS7KXWScr5jCGHWVCxW4h4E129SPMvEGLShh1NcJr5bURjhyMnmj6PkKzLXTNqG1Bo9VL6KJfd",
  "key41": "3gHWwjD58nRXvNuci9nG5bw193sbzMaXHCVQAUC2JE5TuYhua62SaCbb5fCHvC2RBn43WmB8Nmf5dcmxg1e8xheY"
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
