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
    "64aMJeyfYpHFnQdpsZpu4Naz8arGijALcYAX8ieEJnosLhbnsHwJGKyCiwa48XF8txtMiDmrQbj3AspHEobj4nH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qU9Qh78Sa8tahsQwHEej1ZdhfksXuQtnLNjKCtGjcxbBjoP3KxUF1quUQQw2ykcwLN1jY21sw939Td1zeiUUQaP",
  "key1": "4FyMwAqtE6QZyLYxo3zBhTE41HShvYekDCdEN7zVk8zqGyvcCRxzsg59AnoyHRCN5UiFQ4hZUHXsGoLABgZJFgfk",
  "key2": "62zZ1Zs5UBY4U9eCUTKYg3JjVZWdEhPT5KkqvLMce7A4AzZwDK68DGPoTGr34vNHziriutnkTJ6GvrKQysoabswT",
  "key3": "4sHUeBovQNVySVvAGE66dvUor9hLcK2hDC7aANAdDh4mQXvgbEZwVxRsy4Jo2JStimnmETePyvm9MUudo9Dber9c",
  "key4": "4bhKCHtskAT8D6FmRgkTexWvaZK8q7tvHoCYxVFjBpGRrT7mWrRqJqafXkGHVww6WiCp2mGoFSFD5p3yrwGkcDzh",
  "key5": "3s9uV4VkTUnJpSA5pFP3bTzpYJYE4gY4y2STzijQorEM2DYMd8uqwrrrcjppiDJbJZWGsU8ftz2NgxDnG5VaSst7",
  "key6": "59Mun9PLdafPbyugwPaN1xvE8iZbKA3SStCC4e8MvEXC1qAA2mTUeyPw6Jx5SjeyeaNnouzvD1arL7veXZRxWndA",
  "key7": "3aTeDwSgyJ839zKanfUtp4L8Pt4kA3WobRfyKYtV9PbdTRipEiqQzHb2NUyFYeXsphE1C9rGi13HnX56o8hMHGnT",
  "key8": "k5EEG6o5Ej6jXitesvwJmXqQZVedD6LLNfhFEVpPinxjh6X3infuCEAA48oUkutftQ2MaZngbrFgBSQZPtzrYTx",
  "key9": "5M9ZPDNY9dxWzuKcyvityammjTn82QyvRkwdA12FGXRv5d9b49mRCFsURufGJMgk9iUpTD6N8JYy2kWvdNzxEm6Q",
  "key10": "2SZfUcr8DhFpeDhv3uPd39LSvZNhYx4eNnGryDr9qQanJ1TmgydSztgGp73VcgMfS6tfp5HTMomvSRhoH1SLbZL7",
  "key11": "4KX6S97XPCV2YsMwfeHnxudgqm1JuWNRTqUoD1fazzwzSFR2FE2Lg5AKBq3E5XuvQmmrrnchNdQ6mGcfN4n4Rq2v",
  "key12": "4LFZoCuJxxkSyigBS5ZSZ3mxNQbFheKUsWKPpuHMgQCMPqW5Mmy1pNcfnSPRpWcmVhkD4zBtKePJQzF3qoigdMQ8",
  "key13": "4khdJJud7r4Ppho8GR9UvHXdixAivxnKemBe1hFJQnAicswWdh7yQP7NecvQ2rLaesTdRTLH1EcEwQF1knCjCd7Z",
  "key14": "4VgpnarPdSxVrXdqBDRdMuN6Fyw4MHPF8gUVLH4akT8dZ2m7YeoknizJMYpxbRDM1U5a91GwoXTmcQgRSYmAGpzN",
  "key15": "CCr6As5pxZmX6WocKVZcH1Etcog5fmPcSGtPmLPmfA4cAu7fj5Qh3FMXggam118Jz2C6LqvjYzroksaKSuNEmuf",
  "key16": "3aggTDQzAiKzvSJpe6VEMcf9DmTbKutEXupLM19mh7x3MF8bKNJppLj7G2eVijoPoYG6rmLmUWCAXWxiwVPKnwkM",
  "key17": "oYKEaYH84DBHj8WN9xu2pFaCc52MagBas4dnYRBW5WKZtB3VqfqTY8duSzC4Bp8rLvoSWUkxtxAfsvQY36Cje7X",
  "key18": "2dJc5HCrnQKMVn9pfgWHkgUHqQQ8u3BXgPmZGnr5CWDGAGf2rUTuDzsRegrkcFFd8pJvfT6nDA7FtSAxmBfuQM8Q",
  "key19": "4QSWhuRKJurRXXQP8dMbVPTRMPsbUCaaC88YrwTReLUHNrEynbHJnEDqjRSwouBbk25bodyV8ti73x78MjQRXjTm",
  "key20": "TqSnfBhD5UQY1QHxKwVBBf4TgvVSfjQEBXiU21RMqMZEq6X3rpJbRPyxbsgtakDnpomvwFJq8iX6eNW3ZcLXhkh",
  "key21": "2ZgC4RGEfmejFkGmogMXShLmyoDrzoRZCX9BtjFzFp4xGMCb4LcRmTtyLBbfNZkGc7yckdUq5uiu8p8pTVekDdGp",
  "key22": "2McfCc5YAqoY3fogahrfov74At4DaNiH3MGJrNTwgqE5gruX2A9zUneGphAJVBtiphpkPt98dJzCyEnyfu1EF2Va",
  "key23": "2B68XgHaCGFgELzUNY9Ho4NU722P8BEafRSVafB25NqbkA3pFxBwNP93zagUmYP2NeUqrKpe3Rt1khgGAKGJMUsT",
  "key24": "23TsnzEzJj5NgX6aUmsyLgxroGtoLsehJqwfWAkm21cThnc8n86X3Qu1owEH4xa2fhaKfSk2FaNfwrhXyxjfggbb",
  "key25": "5VL8P2oTE4f2v8QGSkNEEcoFwgAjqjCfL8qm4dv8WQagPC3eXoK6qEGxYyaApPy75vpcnLnHM1hU7FGyMUNw3v9B",
  "key26": "3f5DAxnzafP6VjiTk4SRGYLFibJuhdzw57RtwqR9BQ2cEi2WjAwxH7yXriteMaetwk8pur8pvkNhA38uSkVjqY7s",
  "key27": "3WXKUrw5hyhZvwTxiV45hwZcuNv5WK9GDcgAMAbtFYkgZN5CnL9FT3rM8nBbZ6yERrKkytYd6Sc6Ra8Y4ACaxhAF",
  "key28": "2imKqFbWwVaWp3B9y9gNvqKcSzZ4yQbh5QntT2p5Bv33RZG1uszigvJX4CVYcKftstevrcG5oHWNmULxxgKH2iaw",
  "key29": "4xyDmbAEiarTYXDDXMg59v6a2ubFCHaot6uKPJQ6hJ6YeXfzRSKEHFFRW5MmAqEBgiccgCx537qFZy5yoDrXDiLt",
  "key30": "G84pyWLby2MUXubjUbEYGaCRUweLTCdGncsznuh3K2frYSF4j36zpTkyB1LvMaRpADdx1xuUwQoPUcqcdoMhUTa",
  "key31": "pHWdQhqfsVRJJCywphwkynSjdinL4b3arcyDj1GFugEo9zN88hg8SF8rWpzAvwCG5urBe3cUvnLucE2n4DFn6Ts",
  "key32": "5pQB3EfKZdz2o57ZoULAv58vKjZz4eUz3rBK1p4Avku9JawmgZKGdgJ4Au1osPFpq4BRVF1Wd1njXAgWuNrm7CJe",
  "key33": "4LExZYyDDS7geihaz6kZKkgY3vM7s4CAq7ZQweZiNUNoRVFHufccbTvBq5EstcTridkxqybRmqdC1QayHv4FGDXu",
  "key34": "527beu3omtTN5GsJWnJHt5oqDhUrkffR4AxVmJ5GPvxUPJgyrayaZYRJyuQY1tDD9gXYgB56SMjTsGou46DbgJGP",
  "key35": "4HWX9axDPPqbRyw7wmzfUUF3vy1y3BijXcgeCBxg6EBfPnapeTT2yEdhaFmVwrgWdScnfybdVbjTCaty1VUUGvNj",
  "key36": "4vE3jXoANHZutLE9QL86e63U5994sp3F4QYL7LJyQGGSVM9bHHhLreEbhMgiVqHMP1Ptk7kb3DcpHwa83wnR5Y43",
  "key37": "4LvimUrnMianY2UM9wkn6ToPbGbedQ7LQjhWuhNboWWYvDsCUNwRz7bnVdzWs1JHXgBBtMNctbpnuNkRZEGAwNFY",
  "key38": "5wscSCX2rbxaisg8zwvXxExpbrjC5pfTunvvT8nyPcY6wYAtftJPQkKrzkrtYy8uD73kFzG3ML4EzVBs8py1jrK",
  "key39": "3GWfAwW6F3PvUiGwUFRyqVu89WzatxB6KwM1VqYMhhMMrtZV2KBVxUsAcfwHrMeoaHUHQ2PLqB7v6RZRudsNh16g",
  "key40": "62tioZDRpBhuFfCvqoA3N2yU7f79rnYD2DbovQJgDuc53FsGufbcAmDoFxvwKhihi6jLZQ8e78yPuNobaqW5raCU",
  "key41": "H8CSnrvVUBYbzEHQHV3hWSBe5Ua8eTgyU6dnzHgox9dfmrtSEAhzyHG78HaGN2HEXckZ47beSbqaruUWFX5V5U3",
  "key42": "3hh1i7d5TkaQ3dMs3ahQc7r4EvWBfCQ3BP7V6si1DteT89YFgphm2cFLoS5nJDvc87gmdS899WbXyhxS3NgUzs78",
  "key43": "3UPKmqw2srcaaxVg6PgZHMhr4o7cJQTuhoU4pbeRvXNscnrNaqpwhGU96j44RgxH6Cp1414anGdxy2egJUQ2GYmX",
  "key44": "3b1Heg3eRno5UDAj5LLWCk2NNFFqKhwSyz3j1E5VvAfKpYBa7WqSpu6A6UfbX6HR6hM4fg6v7xsq2jqemhHs3t8G",
  "key45": "rsgtshKgynb2LVfbb8rMfJ1vEKigW2NEr4pG4RZntrJV6fSENYMeeqf649QgJfoVVv3nL9rAVUkUXy5rCS21p3r"
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
