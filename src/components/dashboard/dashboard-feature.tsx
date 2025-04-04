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
    "4EiEc1Lcuj9UkvtZ7GmGpr2LSL3y6uEkkQ3QyiR5oS3CbEUpkg5P9ZdCG7cwzMVLQn8oq57PK7fBkPX3b4tG1EL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gv66Ws8DYDR9a8SS9RvQDaTcsLTi4ZjwQLdjmV4KzhEz8eBemXX7ji2sBvvdYQx91jUHyYun2rxzK5MRwUTYFtL",
  "key1": "45A5tDg3BLqvYaeKuKXhkWncceSaEoDCJ9aG9J9NbDLjyt1H8jTQtKv6GnyyZKr2XgEm76oTsEoGDEyqE31kRZUj",
  "key2": "2S92whrE9wCDvwNbLfaiNXXZaQQpMkd67NgsUkrXV2rsRiVYYoPkJyzD5wkPpPoTrTwAnWpC5UUUvSYztgz9828N",
  "key3": "3CKYcHTxDRK9SVTzdYi987U56vGpmzWf3GNx6DDytZjCteGBajA9Jy4yue6yeR73Mn6V5h6txZhRKKVFBqyHGeio",
  "key4": "QVj1KDdmsoLCPEoQ8XUv26KrAit2FqSACVt8KRyLeWqsGfPoJypBr5gUb5MhcAsK7aokcJw5cmzFBT7huBdFxAj",
  "key5": "2wKHvVcQ3thKyA66WDtbJ5iDGJRStHgGVLPYjpYpgbX58Mx7miiqwdFqNmxM2zTQuzicQEDShBhcZhvkfVFy998n",
  "key6": "5pVFAtvrEwKEGCwhkbNJbprKD5e9XqzS83VR5gU6tGxFEGcidszXcHDNeBAJp7dkSxtB8orFopQw6z7YNAT93V4n",
  "key7": "63L2XtPq3TuK1aQhhYvk84C88rvK5bA6PWDJ931rqsVgmGUNPffjr5YU9b761T2WR47eUjvNUKRY5sycdmAFUsjS",
  "key8": "4Sf3M8PPWa5rdp4N1x75ZKkcy5XV8uW8mqK7qLPHSoLqRWqmExi4w9LCHzhzeutp8zPXdm4LREoPnDFSngcoAqj3",
  "key9": "4K2sWZQUTS5KXwUTZP9bciBihfC2a8UXQYgGzBcuTTGDYyvw9u3ZQ9d1Timvqi1ZEK1s67o2u11JuNGeLLk4gp6P",
  "key10": "QQgNrzzVGjrhCPVjNrViSRKFx4WmjLokxZu17gEAEF3UHdwnDUwqBDL3Q5t5ysaH8WHmk4Hg4Hh6TVUE5weKJhh",
  "key11": "2Y2GXhTAucwyXGnEp1yc95mQqRWfj3UfDvWHiCg6rx2su9ffzButERUa7ANRdMHhRqj2WqLfwndKVSfGJtBXFgRu",
  "key12": "62bYoJaqZj4RbvU7ND3B3k7rywLXsHPmTcm8fEwXTSgUFT2JhX6NcmeBUJCjXwrmPPPutHcLFXc8pn691pu66Uqh",
  "key13": "3Dfe6asefK2HZP8wLNwrAkDCsBmXwCrQytp8U75L8QfbEKs1Ckqc8apoPeW9VJaJ7TW5vZKXi8cALgbtvTWHTUeB",
  "key14": "64HpA95M6GWh3bJKPEt155W33JgmDarvQwKVUgQWfMwptjyahkq7G66s5aZi7y4S1FTw6oDuVk3tFMwQRT7CZpLT",
  "key15": "2HhpA9y5BPNxirwrcBuFCvWHzTaUws3UCNLHNJWUdym61tuJszqa3aNDfZqz2JeVpnzUZfxtYS8jj44GoeRJTW7B",
  "key16": "2cbqBonvBRyf1L2iyfCCG1znBKQQMXQvCQPe8FTWEjoA6dH6GrWHjE3E24Ut85YXbsaDzeCrxM3628oAjJzZ7sEL",
  "key17": "4qRZizZTHC7CHqrQEyKBxqW8Lw9EjYcUHZBiGWGQSiKkLhiXQFXcCVVrvhejwxNFGTjA22B56LxtFtU7UZbNLXKp",
  "key18": "4TvRx7n3E81G8W3zvQJcACLZqnfjT35WbNXuPe71atJJSw5ir4j7k8JTok4SJy6M8mx5XFyt4awy93yzktYqzNnJ",
  "key19": "3ZoxadwyV2hp4gwPcDAXS292Zk7UBuEz46oUktRK69AZmJzV2c1DAUaw17yqHoYLxWsG2ZkBVufAd8b2Cm61bGhs",
  "key20": "2N9JUv4L6Ribdp4rA3S8w1jmtkF4GY7FzaPELtchYV8m5n4CvkhZ9kBJpbrJfsUwiHpiZ8rT6jbCwW6xmSu4vAmr",
  "key21": "66shD1eyUUyN5WQc4fjr2dhRRAhoJxy2nH15uq2buHuyh8zg3JEHsZoqgZZ58QTQC5937oSA7XtasAjDiBs32mHw",
  "key22": "55qRytt9R3qxayxxPKrnVGsmMNcbKPusaUoo9UQWXxmrMUyeMZM7U5MNJemJnEzVn6W3RNJSqTHrEjWPKTzEudCx",
  "key23": "2SKVDq1zQn4Z7gEXELuEZGfo2vsdcErVBWvsKjnQEyLreU5Q9jgach6YAp9ivvmLCGo3D416dacHwB6D51ktgzDt",
  "key24": "hrBipp3uQRz5SaB7TcUkKNdvXzeH3hKNBUbXexHTuuBzf8LExDU6QfNSkeWLnnbHP5pAH1KRHMZAUFsGebBY4jj",
  "key25": "E9m8UZCZzjJ3woPiub82ttuPFX5nZAkbNpyA6KdqcviTqQLLyLAMnd8oRHmzSszbw8aEq37c9D2xb1js5jy6eNk",
  "key26": "2MvgfMBvxvAGFo8b6MCTGVsQLTcUMW9qMfteSWFqSivCByBUPfd3X17pYqzyQvz3DJRv8xfpQih6KzrPpkwbeoFW",
  "key27": "3zeJ3qFS1rE3Loa2tmQpVvYgfZhAXDmBtor7ry2pHUEtooLXF3xiqB8CZMksJwgBQtWi8xLMARmmHkptWP8DaBo2",
  "key28": "2HGJ2TDZpYfFR8UJwQXGxviW9YUs6ZZN6Tg4uWiNPeJKKxnozsEtTLyp6SHeq5jHVTRs2dExqyEEMy1dLxSNGEaV",
  "key29": "4uh1N8YWuy5MCxFTEPfNVvQfXU7VKDTE2ao1WyaExLobntRjG8LfDjVRm7h38pr3jAi6Bwqy6fPBQTvY8bUu9XtF",
  "key30": "Yk3m2PjaoKx96UAPxEePaoUX7S4kTCqk11px1jHiFbx3jYoqZRMoVVf2jTTaF7GCJTUzfNbVQEMjyCRUFNGMNRr",
  "key31": "2gsd39Rhoj9qPrH5VWK9pw3XUeH9oBU7XiQxxSbee7RNzfDWdmFRvtxwzoqCdVxTdG5HoaxGbmuXjXWNweL7XqiJ"
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
