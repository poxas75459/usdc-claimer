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
    "4ksbTWMGKFD6D8GPjsYDZbK9qL7ej8feLqW1LhZSGLJxZsoQDxhSfFmHygoGnFp4w1hjfRf6H2Le44t38eL6PfCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MZVcC5hMhYLQoKQ6zP5jyJoUrkhd3LxtuUmy6u2iAqtd3JMrFH5W1sXYeyzCQo99XFFqXN56Xm4nopvkBRs8CJv",
  "key1": "vPjBBt6vrkexjsBqxQkKzLvkrUwiCiQ2s76zdCWcnzRYzdHYFKo1NbeJwpTQoxURGMJPVjRn7MTMoM5tHeqQ5yL",
  "key2": "2cCT4SYbNU25cpFznyssSnVSQZZCbB4PQwo3ADWdxS8c2N5BzvVJPDjsZkT4HFYwBTbdTSfVZAnBH46H9Ca423Xz",
  "key3": "5N4J1NuaAa6Z3yhVvBQe1nSLTiTvqfTy17WZSyJkYwh1yCoVb81cYmSN8iC2waPqz9gfD799BhKuU8k4jFcFqeFb",
  "key4": "5cPCsmu87KmtBkBPkyZRfBREKhwJTDcU7s1ZKHXrM1cf6kyxWJvuYsE4feUgwt7jyT7EMRdMsvwHcHUTkdtUXx1z",
  "key5": "hahMhW9irDLJVEFGC9QPJwWrqfDoYwnDoAAsKYnSpZHXuJBYUAY5AScsEdp2e39WtJLRCkJyvsmUYE2X7VkE2iZ",
  "key6": "3U2sTKcv4TP94PsCA9gckV57mRjpvkFGALHyJBGUdCYXMEgMyW59Ft8iNp2XvfqpPwoFmiPc8BLZa21R7b7Aidxa",
  "key7": "5Ps4VVKEPbUqBMPfWHHTwBgQ9K2rnnoq1misumxxXjQZpFCDJZEJRAxjmuQtAs3MoDMjpcSkzbUHHLboVVFfCAgd",
  "key8": "64jkv6oGBtQfZUe1NDcLM3bBk2yuQcPawR912NTWPdWmiZuboobkZfjQeREpasrwvgUt2eFMgpc8PndaMKnwnuYT",
  "key9": "56cTPdQ1YDF5qKJgpDqiHQQQGai9AsoRs1L6JSuEz12ezLxvhUqoLsXFJrD4eP7zoZVDMxVvXir6jZPpCeythF8S",
  "key10": "4K11aWjfCgRM9Loe5Qy88mSEqZcBggddo8Bg3MQC4b4DeBMyuDV6fjvxeKXDj9qtDWRR8o797cUzhD91kqmhG1DG",
  "key11": "2VWq5eZE6ZGhmTbv4xE2thKYiTsp3bokFcYGqScDPBzVRjUe7UYxu3tHxy27fpiYFJnR8WkkRzCjp72n61WBZrbm",
  "key12": "6SxT29PgjNab83qVJKCf2jmGxa2xUTEYQEVJQEYKXSzJmNTBUTymzFpEiNXmzgShhmGJ4DQTeQeKy7JLP411zSb",
  "key13": "2nUSJPbmPNjvUd6PDL1xtXHmYfostLDXh2kG4QZMJCEPezkhmnB1vZ5gWfJTSZWb3YJPJshtVRh5MQX6f9ZWoTS7",
  "key14": "3KEzw6SVaNAazLFn1LgZBJmPN6LRKYk8Ae4ai1V9hDTogZQw3P26gYWbwUrmy4v1ZxsdbueHf4qoTTbSz1r5o9H7",
  "key15": "5REgioAruLg4MKeMuEYnoBCK2SFMLT1QRqELGnVz3VCNwbj7yuuSDkpqbxPrfHCZXHX6qdoDBiQLFNinbsk1zaHz",
  "key16": "4yc5ie79AbQS8AeJRrcRoJ2tUbCbyExAhVMbh5ZM8vSqXYE4MfYZAUAuSrRv3Fofj2KiCWB3amkCfA3pH83pPyyJ",
  "key17": "4sU68xdFa2YFkbxSJje4NwvS3wpQXF47C3vn6WdMsBjYnKwcKPhEaEABAKucVxAU4zrSv7zg9vPu5PfmwLBMBRZ2",
  "key18": "5Roe2ZvKPjDamPKKLEufyG7sRbBfBus9uKS1fLbjmAJDsgeYdk1BitSWfoc5bW5X1vwGCRgtDWmc6E2rNZ37Mzg9",
  "key19": "3VcYRGYzxvv7d5yn93orZchLWbgDuA8p6xRmhzDoDQtcVTQYzaz7j47rHcTnXv1wP5o7j4JdAPqv2EUZyfBQJHNf",
  "key20": "3oDoJmFGCKj8u6wbbF3mtq4RiBryNMYX8JyqR2wdYb78nCHL8Hv86HfUqaBrS5L33dFr19eAr6yNsA45EyuHbd1H",
  "key21": "t8pxUZxnZqkC35rFmmX7J2jZViH1WSY8RkR1W46uqTpdLLCFMDRPBwuPf7icUwutWc2sSYjPvduxt2iwGbR3JFV",
  "key22": "5NypNqrUh96tEvKN2YtvA7CyMr1jCXNa4Bvvv3ukfGWWR1BbqwMU4zNS3i9hwx1LQcZaWNZGWQHiTNZeYAd5LRGz",
  "key23": "2DrfJAewgfwtRCyHcZrGDzAeyiK7whEvjmAPauUFtocQ6jNzzByGJbxPfcZgCywNybpGsiFWbrABakcbeo6zXDKQ",
  "key24": "4wJNgKu8UkKS7eUMv83cWmmD1eUd8hFrowT4kqhYFMf6ShYsh3K9aNxiqRAeKregbvjAq8mt5PR92wFFAXHZyEHd",
  "key25": "3MN9b27kWM2Z9wtna5ZrU6EAaXZi5R5E6yxccjXtbkks1LURaUkxd1vaMmGLjBHGkgbE19qJG6KHNN94eAzJsm2R",
  "key26": "5dzg21izGfPBBZvpJm3wjrfyiYPav9pVFakccasMf5R8rxuGLVrk5mV7L5W69HLDk7NWhSjrxr24uogDqVQpwmtD",
  "key27": "63VozZ8mMT1vvFaBVEY7VeBhRwpR58uQWtNEXmBFs13QkXSLYFQZrQ3Ui5oLDFDYLS4foN2twRRnLEX5Zdr7uj31",
  "key28": "3moBua5bnTsGgd9oZDqT4LMXcqJEKBFfsabWk927cRCTZ7q13XMRFwmUQWNTHXtoNypjrbyiBQaAPgQJv7KS7ZGA",
  "key29": "2UNx28VEdPgNSGyBePuwUbcsSzGrdqHCnE1ksA6nCSg3atjmtfTWJNcaB8ps5DEBzXxJhbnfTtVFR7KETsU8ALSE",
  "key30": "5B2G6rG3iCJyLJDfvLDj6TAFRW4ffHQQMp9dfoYLWyunqayyLyss2nfuEzdpM7DCw34uKfcoJEvJQeZcWxgG9xwg",
  "key31": "5Lu9GE7xiZYHmX3xaaHNJzzZvUmkNtEJ7j1P9G7VNHCarftFwRd2vCMab6icKQAXiDcUfWMbijFECLqkehbNEtkG",
  "key32": "5kSXWgQGLBAobS8QKM8iSzw299Htu5M6YUHSTZSH5o72Crz6qKdCHFWNWvM4Lmd31BbLUca5YEjWAqVUVN3DoPBB",
  "key33": "33CU29qkBWE8jZdKE5QYXoL3HzMEqj8ug5XrnCBrh1KEHLUku7sfU2B11QmQu1oDdRUPmFmdCbamuch4XBd2d5i5",
  "key34": "3dVioEXevcGQyDDqffSSMqEiCAKWDro8dQRZ5NeevkhbaGz4athhJn9xcqoF8mnDeCPiaLaK97gywHsxBUqTpHvL",
  "key35": "2AsomqVMpKVxonVznhRbv94uB1LWFdjxPcj9A4pBGySontn4Fwhgy5eYkvshUdn5PdYFPEdAqKjgGtjZ8AQjzUm",
  "key36": "4DfAsePnpVmNMwUySEhnuZzY99WFMEXM3KfmYbaWqYQwM9KWecyjmrRtteg8kuhjoe1C9fM43HtCWPUKEgtRt4Ws",
  "key37": "5GTXXSox9wf5cKHmATy35radoCUamHWnawEPodS4zU48k5TSSGkRwMZxeStRgEo1aYaQfmaw2CXTSwyUDpfdvViH",
  "key38": "3noZNFcv47zrLqyDvVgJqbdk3Vf13J2ihfypNPFvYjc14c2DptYjqcrVqp666BSbSidtmkALp2NT7Tk4bL4gr1Nk",
  "key39": "29NnmHizQixwWZkjdpLAPnpghwkSf4V2LfnUWLgbPR6USpP7ii7hekUhv8chYpUyFUCwn9775svjEqCNRdDUzBZZ",
  "key40": "3v99F9CzNXjWXnjaGqePYL5nddKjVJ7e6ChXC96rCcmMYgpeMMHWCA9XzmxV5iTscH8THbVhLBRcnrvtxZNwBcRG",
  "key41": "63qxgsDXJVLxzsx5zo5gvDrACm1sLN6nkWT9gJ1DBpzwpENjkMRoZ8yGdA2wMiFHA1orFYkkkYiWrPcEK5MMBVUJ"
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
