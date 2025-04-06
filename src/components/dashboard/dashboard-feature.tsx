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
    "aekGzF9NvxWLWU5DdLGZHLg98PekPifnDL8fqe9zgFkviJm9CUtubxq9CojHN14BiGnPzYmLrZw1eMPxFKk49ND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U21zoyFjDWy1bH7ixPrw9bErJXBdAN77unc2zLsQWU3Xijp9ViiiLccpJ9X1DYwzbAT9aeMpg9XbV3MZ3ekATd4",
  "key1": "4M28mRwwiUVm6nS9fGQx6g3FiXk9eN3j9bXw2a5vXLF6Ti1i8QvRCFAnUkPDg1xLRgMcfAmtp1zZRex8Rw2YPdgD",
  "key2": "5bA4oBGSi7RJq3fa3NsUpxgVb1U9CRTN58XbVpNCppPYL8YjDXEnRyZFaDP4SMkHVbxsHDu1YiVLsX8Bvcw9W6fF",
  "key3": "3VYcYF2RMgQf6sTaZgMmvmW8HoQNCWZmSjw4teAWjFCUFvcpH5PA9ZocaiAWKasoDsmCT6DNA1E6y3hvspS66nJ8",
  "key4": "Agc7wLg3u5y2jAxXJXFdgbNmkxTvECnLVEkY6VpBMErUF5dpZMofP7HF83hag57bujnAp6e9FFa1BdwUzDEoQDG",
  "key5": "2dEXRXxRirsDUbW6DGaTSnxcwxrJZz3mSom7E3LzTW8shUvjdAf3mjQT9jENWRqs2VJRoj7koQyLowMBGMc1erGj",
  "key6": "gnxsLcQmEDgJUzJYq2GHpPLEbJafpdU7faM634Yb3dwxt2Css1YfVUs1119LP85Tyw5suDaKGaDVSbpvXN69zrz",
  "key7": "457MwLCRrxNioSkWJXPDRz3UBc9SLc87rg1s6Fb5TTCPLG9FvSFGA4Rt3nUeHENNDLMKcAENNWTrY1QtpzNb62Qo",
  "key8": "i9aAGmvwTmnEjoPRrtTMyJouvjGviw8pUhsm6RD9rXhzaegTXKrMxHjPTHuat7y4ZsvB8jL3JU314pW7yenUyNL",
  "key9": "23KH3CEwZzYSXQA6juzAsQsGWMrvwLcxjQoed82eCTXKyLkcbS19L93vc32UoD6XH8RdvVwPE6pXWmZezWvaSQ6h",
  "key10": "2QVMkknMa9ddHL7cmE7iMeeDC3KLQFSJksMZYiGjUSq7EXUq3uDkptnB7R6KV6JjFSSGjSokMQnb51ArSd73fD4w",
  "key11": "5muT2KkP2oHKEY2Gz8No8TMv3qD1aDnTLVhLCzR4HiWhdYyyQFFJyPHwcLiFtfafXABc1mTatENxGqpbzMTi1kv3",
  "key12": "dWSD9GLGAAY9HFFKco5R3ortdKrx6CPvq8v1rfD1zZKuscKAF3kNYmZDGUXmBTJdj8T5ju1TurfTDdZo98F3AfW",
  "key13": "hfHt3rnBEofBcKyUaX9oVxD3Wh6vBTjNitJed3VG1hA2usdzLpPSzUfVFLjr4jGzDQartVZSatKMyooFnYPrcmr",
  "key14": "5UyAP2RXHj6mRjx3pvAKEv6Xkazp28FVPhFaJJSRuYxgd9BiwPT4rq4vqKjS2j9PYB5FyZmNdcriMwRiPhHpcjC5",
  "key15": "mkjvFTVrmGFEa1mRCuQZJxtbyeRwTFZL58i3qXtofnHZGmvPzXGEKCTGSRQSP4BxjAWQxCMx2BKUHVFAghbMs5t",
  "key16": "3fipP14BSzYgjZEAvxRsNxCDqKoLVaggTJChiVy7ZU32JTWC8MwdTwRoscTYxrxYwAhM8AD823mau5yPjgRCZoqR",
  "key17": "faEeYTjyQLexbKmNV7Jt9h5QPHk9NVQm9P1mPL2ntJJYqSQ8URoig94XoUCj8v2HTHPWhXBb6KphyLeLeN9kXkx",
  "key18": "2WniFuN17Dm8VkP7WzS2b8e4Hfpwi8geH2WM7219UEb55D6qo7N5dgqxuJEDiJs6P15utk6C94dCsWrRiZzm1m2G",
  "key19": "3fuuJb96tHwQm1YikRForQRJu54VXmoECDJSeVU339cbcvtjZZfi2aiCBTpAShk3PccQVPa5qMhRmrZiGG61hFvF",
  "key20": "2CcHBZ3jkn13RgGFMGH9ERz5q28h1rpmMPdfWe8uAxGdB44xGV8u4zm6FngUaiMsYsYnL5qthET4EDGvfHMZwJrm",
  "key21": "CYaJhKLN95TpKw27BufUC62D4vkT2QqJzqU6TAESbn4E3dJdVtTf8Ximzis5eouPHKdrssBz5k2LjcYCSemBkBF",
  "key22": "trRz3qpBFpdQ3fXYwk4v3B6LSQrVrz1U3CcnXGzDkK9vGvFbxT7DyQzBhr9MUdtG7Dyc428KzaboymMfQB5b8ie",
  "key23": "4DVkgRkebYXZwUVTmUoRQcxkh9TgN2bbfdtk4uAq7pe8wxX5ZWfzbwN7HoKHvQsxpBRzm7YVrzdWpVCL8iZSaVY5",
  "key24": "2kY1d1vCP6jDtR3F1P8qRy7b7CKMNihAftdcjgAHeEhyUd6nAGJh1F2JFpKH85e6dyUXGGrPTugqrGGaxeFTrNcq",
  "key25": "nuvfusDBDYhm2Pap8Bc76J4XmNNwmjHjGxUXd3aB1F4UXLFL5P5oVA3RZr5Zmb4Ceaq2e637Rxd99jBYAMD29up",
  "key26": "4vLN1tNGG7ZXXPaMgANvdY1WoUZ7vxanZiMRo7CrK67CMn1tDDus6YMnp7skD3KFhxf5HFQnpq6F4RQ47xZupuCx",
  "key27": "3Fov6EFwVryCCcUAgRYDof8uWLmBoD8NJQwsU3KLEF3fVKF6bJ3bL8Sgaaq36MqgrQxQMumiqeopTwV6cFaGMpBt",
  "key28": "2TMHwaj2rJtAgoYpruHF131iXCPr6cqzKJC62dWkWPpjLTkDvQzhfAQRuLKy9vL3YHA614rtZhnFcHfeYiACvjGj",
  "key29": "3muXiCovzU79eDuG7Xy4VLyjQoSqtm8JxS2K1WbWtA62JTePyyiwG8dnnsuHEaNmhDEXG5AHUUsesNpEDFWuD3oS",
  "key30": "59kq8CraYT1piynoEwoaNbcNc2KGLBazs1pjDJbfqoH6jdQJCo7BoZ3Yhi72omxqLecFFuj37ViTx8YkrFDdxKPm",
  "key31": "51fd7ceaGWZCJSRhDrRZKSbQ87Voo5cQqcHeQBEZCS1nAfEiJVZHJAHpUAyVRRLPkr3wWVYCBUos7jugwJC5t9KN",
  "key32": "2E8hqgJt5jWs8YwLJ4VWnq1HEx1hmeGKws3pFK5wDpLDGFLmSnC8tFcyMKn3LBmWX42nJ4Xsze1jZsnDdUAMBdLt",
  "key33": "2myrBJuRWDn3nJmLWAwrCbcZhetsyUNPophiKbkZBgpH8mdctTktLhqJcxiHhda96f9hMteivtnzYpE7Yct8iaXk",
  "key34": "3RL1XFzefJsMNEERBhe2yuCatfFB9QEa6v6eBg9zzfjvUKqJ21uDXDg8MEa6cByTseFPkHgiEEXMWnV5FzJGgYG",
  "key35": "2U542ZMdzaJq1e2sHjRV9EJaKkV8UFaV8NgoVwS3nC2hBDmTbvWUtkM8vvXnvb9aQdEqSfgKtBXEoLcH8Gv7trhH",
  "key36": "4Xrw7wSdJDMEZcjaAHaWWQonqxLzKr13HYLPtQ3TBh549b17dArHrVuqJifDzRkjDbz41nk64QjyHP7cw19kcuLf",
  "key37": "2MvBoJDdFnsQhqJ2CUvcYKQ6S3MRhikxsAq2wVCUAebf8FPBmnDBJwiQDs5VU3zDvevnHc15DptN9JzEDcyqgh1h",
  "key38": "3cT5EqzLKtUGkNGuG8LShF2WZ8vvGjRshvgudVBwuUK986UvmGSKVTaUBBUqqgMxTtciRA1ddC7ZwDkHgvoAMSGw"
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
