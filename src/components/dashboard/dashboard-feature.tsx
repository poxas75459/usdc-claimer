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
    "4V4LnhzsfTyUWS2GkvQUX4tK7GsG8Kh63Jn2FbTpxNddFAvFf73yyxaqssCn5VcH4VahvvzQUDHhZMsMAZnZcQEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NLaKpha8raFFoeQRiwtja5t4RzeZ1JA6hLq9RBEn8PYXtz89WJZ5LwrHJc5Ba9xK1ADcqBEQM4VrtFH16p5fkWF",
  "key1": "GPjE5qfzCijkMkTH9Y6gCtMn6JmhvkVPt5Gd2B1CBve9uvhmhfiPpJt811naBV52Zdq8kfGTYi6FcFnWX2fTq5m",
  "key2": "5yP8gMsJeU2J4xBZs771YtWS2JdpeZv3xb4b5XsTc15Uzz9mSxf4f87EKaJUS5rYMSBZsWh8RM8kVyrsWCiuxHAy",
  "key3": "46XGBBh24aPPNFN7YCjtftco7EjijP5aohAERQoCWHMrKXoAQ7rFuTZX9cYNWZ3LL3bGnmyDNpzxGvuqPXTWutaY",
  "key4": "tJx8MKCAjZN8gTbKqDnhgLb348q5aZT6vXoLbvnpQy2Qb6FHGNaDiqBWf5zH6rBZXFeQUUVYtWvJyU4aZzenrgX",
  "key5": "QhVvY7mNAGRzGXF4cGPpq9uR75ww26CSb2EZ2MDjiRSP7R5fZeihgAmKLsB7PHRasmqpsu45jVNQP8xVDfpQvgT",
  "key6": "5UVJ3kCkthiFFARHC5QyCKgm9LhU88kx221mNS8qT2F6tQzPc8a3sKZsxNt35ZgyvsPWN3D9Sgi4hbLGWXMUdXuW",
  "key7": "3ScBbLxYnNEqojG4V2vWCPKjEest8XS8qGqPVQuZF2mCy4ui47pEWNRjimjkdQz2ZBAYVLarNQkjyxTNS3nfxEXV",
  "key8": "p8Y41iq3pMNJg98EH7FWCgudfBgLDw4ghhuRC1n547cduCUQEoH91WVQNR3krhrVueAmiKbsSQhsoVfjVzjC8hJ",
  "key9": "3SDD4EqNC7775qhVXZMn9JX2wJQL9w2Yd8bCtxGz5rcPmZSoVjMeji9iEsYPu9QEXKzxxRuRdFXZT9Vmoo8cFRgv",
  "key10": "5Ay6T8ZXgWL2qrScGAWsBzT6t4v6iitFd6UqAcWtsY71oAAckxisw2D6Cbwk2hXwwwiTdHxmqZhuoktBr5Vy3NEB",
  "key11": "5aniGRunHzyaW9fcDAKrpzxP5SxbvsiYhUTSrF8kSents25KznFZLaNq2nFFZHeEki7W5EgMTJ4TjnzfPXpfwZbm",
  "key12": "46ATn9b7ymLRKKb7qEC7B3FGhT1Ycj6sVyTvmz4Z5Uj9n8XkHAr33ZoghW5feCHht3QTJjnGMBGqXHMpGLbT2NGN",
  "key13": "3STf6ogmb7Lw5WvNjdBaymVo6TqZzk5CXgsaB9PRpbk9FasJsGBjtAEDAHu3D3ZQPAxtZQFS5PyxrPMwtwq3qVkZ",
  "key14": "3X7a5DiApmpKq9pXHpoy2BhJs9azcUWNJKKJXWR3kJ3oPYiL4JFtvcHD231QJncxhgYLg1su3YYrb4bmB1KSMZV9",
  "key15": "3ghEe5DFtnKju3pbGo4a4bmxGKGAWDdc5bmnpoQZ7NgvnnTGV9VYkTHXNS5yJRUe2Vk6cVgB777L8yy6udWjqDSo",
  "key16": "iJyj1JcqTLLzmuezahmgtsxwD8ukDX8fnQn7eT17XbQsK3j4enz6nNwGFW85DsChKm1DTAmwoUXKFooL9jTrZzP",
  "key17": "UCHiLSTCWgzoGhguF3WUWFXERRgSuzeMBAPiztQp2LaPkk28jLFbu2UmWDA6rsaDALTYuAi5LTuKJUWL7Nwj4Ra",
  "key18": "4syCQYrebgLC2wTbwE3FP1yAipom5fbUPiVydzkrW3M53UBjeWJjM4iPNd7EZq92PW42wgjUsFPBr4SxMuHYxwyQ",
  "key19": "3eDLh4UuaqNy1EhXjMUz2eKr3eR5BNs8sFnRT372jz1xKqxFw6xK89ZKWDZ6m3SXWB4vRRoKwssgdBaGWq1mtrjd",
  "key20": "5Ac2jLsyicYLPqCf99eLbLkLHQ4vXNzzHSiiZnuuXrJCQJiacskhCAGVaQyhSWr2S5h7GQyqCAZZTsbSbTvqF22r",
  "key21": "27qoipQY8h5WfymchyPvVhUMnwk2xUxKvefCcXRy3hME9Ymy6mKBLheUwZJTptWWxMEJKd8Pi3jyH9twrPcDiHmt",
  "key22": "567n3ENwVTZZUxGZ7uwMkXEsyifuCr71BH8geukdDE3NsXfbjeCGn2EEK4Ra8NoQKJ2ExiHP7t3BbzA8psNQBsEX",
  "key23": "EmtkfdzBRA3kAoaP6oCjx7adNhykRRpmdQRb5nD32SHuQPd68iJrgrEfQTd9gJdTKLuG4ym7Xi72vXM5RLwaUQ6",
  "key24": "2RTWhEhoWrvts32TKS1hnnBuizDsJt2L36v8MKpqSjkcSPheN78bxYnn827UpkQoTdYaGLDNbhcRyADCphEokPp8",
  "key25": "67J7apoj75ZzUeQfPYE4N9vwYVfXd6ttBkFzV4ZhCBjxQRZH8CMWugN8jeG6qyErb46C786hdSbfTG7yygi6ArZH",
  "key26": "673DPUkNQtHYZ2wcDVr8FhNpeEhaCME2ZJ2wFV6JrRe77MRoHcuPw4Ms97DK5N6AvmPQk2fh4B4eRSc4Q9WWg4N1",
  "key27": "59czqjHNYzqvasvzxYVcT9vdQ1R8ygNF5Kku76HUuMG7SyVeao1jqZ2DB718WSRtHMF26izAaizGGn34DHcMrLTC",
  "key28": "5tiBLwzKimGdUMG7Ybo9teznu3a2rYUd9bM1FQmuvcVTwYPCT74yraHZi2ozfFYcCjSWdFxAECSh52nhkgWLz7cf",
  "key29": "BM6BWvWQQ5jxim5dJgTrmSrKVKxUxw8RGB4w3hzEvD5fQhekHLSTVpqgnqH1bCi4DDrD6DB3voxNeyxv5uR2zcE",
  "key30": "3cdomK9K4kT88FGxMBjuoz9KYV5oKnm2oA4Uh3QBgwhRY393GLzeg2f1kRvJCzEbTDYtJ1R5Rr3GjuQzBC13adJx",
  "key31": "5FJNY1SUddYWgoVi8XLbGZEsWB2cBV2hQSui8t45aiSygtBaSRhFhpf7unsya8FWAtxdsjKpXeDuYPHtBKWkZ62Z",
  "key32": "4JKuqiEYnv2oDAzJ3KA4vHzL8wqUjX3BSSrTU6smQ3tKRb9KmmRKKFc2U9aV3LanBa86tWj6UCF5BLb43L7g5Ke9",
  "key33": "5m5dZghzJuCWcPjLu9EC8JxYnQKswS7At2ukS58kgkcPtCYKj6Dj6invNfxKV6u9Q7uLz9Kh1E6Nta9qokqhAiJX",
  "key34": "4pfBNHsubd3qcuoh4yhqun8aQEpMk6vdfRhDRGL2ztMHGfzeHkE5oF8TVWptp78h5XiLT5iQ878RTKYMJ14ayzU6",
  "key35": "4iN5uBDBrWx57KDWqVwThRnrXxc4dYcLFfcBYwWjPqybPqG7i6RJin1SXY6sLbcRpJUroRkm7MnrMi9SgMx2vw64",
  "key36": "5JmfCLRSx2yF34yCAMmzVxVP5LrLPqQFBuYnfCkXZqScAckLx15uKDU4PaKhoLr7tjp6roUHiA15jKp81y6JsQSX",
  "key37": "5BRLHsTtDuMfbVZh1s3ToFMFXxzst83VP7ZejXCaM3PYaaRQhdXV1WM2YRG3h6iXT7FfdFmaTy8vNx3CPxybBLGR"
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
