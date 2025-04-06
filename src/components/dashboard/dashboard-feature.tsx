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
    "62KeXupmC5xBFYJxRDDtgAsybM86GTmqsUXiHPkcdFpDNdid5p6fbsPSmvmyYq3EVu764aJv8YDZiR8jE2TvjKaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GU86MxzKyEwjC9cfQgWqj6o34tZGWfpM8L9PTa7DQVDUuaHgfevFAZyThgeA7EgKMUsG2dPCRJTm84EcnPY93Tm",
  "key1": "YJsLEgSZg5ijL6wzt1DVvUcZ1ZDveJpdkAZUcCiHxjosdM11uDL6c2Z614RwzMZMpqQ8CdHTEk6SRK5AoYxdtss",
  "key2": "25KUeaohhSTGJnpwUj9ZwuQsuDGSBHSR6EgBLrsWHBB9SZmLwuumLLaekHXGq8SSVcfiEsd3XmDfcQbSFB5snpzG",
  "key3": "2JQqXkSjMNLEQnrC72esDamPY8tGLWhn6KwW9ytkNRVcyaERqNwbJp6QwgBPJLEG9KfoTeoii2Y2FGStGRusG2zB",
  "key4": "4s1ExJNMfMqSk8p1cc1HEHR79zx5izX6PhGWtv5QgqjJc8Cm93VTFehrffS1hqPqAuhUSJDG4f26XAD3nSAunLix",
  "key5": "4rdGb3xEBKwbv5iJ11CH7Ds7pe74fSSufy6tk13k3PYXqZDXDyim7XULa3SJeY9wvH19sRuYyDch8tY7cuHW3QVq",
  "key6": "5yG73ca1HZXBDX8kbDh4WyZkwGNiWbcwAhTziL4dT4eRFrdB4cPYCBysm3ZM1d7ajVHU4NpQWFye8y1VTaqjRFDY",
  "key7": "3UiUFJEcrokiRz62YMG17fGSVNvo1NvVNFrfvY6KpQt5aCGKzw6WtPoatZF9SHCMUukA5sCemUyPGFJy8T6TyVcn",
  "key8": "5pmX7zBqyHbbJqe8WcwcyiWXyBiY4bh6ubKa51go4oCgWfcBHaWrYwtfP1yi3hDFW4pwWSBWP2xwbCfsr8oiMq5F",
  "key9": "34twXKUFvqCZsp7JJxnTvJk4pzzEydVCt3QoMm4hpGfq4ZGjzS5RkmsnwffQcjsehbQGDZTbx2bqp9TADpnsenut",
  "key10": "5NQKJ97LGP1ems1aMxNvEHZGX3mPVcsKGBJ5Zc8uWRr8eKRYXzXdREkaqaWcBWuZ8bDhLSazEks7nNnSbBTZv5tg",
  "key11": "38MPzZT4RCpPRomGT1JmLD8bo6PzuXhzTENaeSPxjPgoF9ntEFy2SoCyFmmD9U1EYdB1ArCN3TyzgXbeveXHR9BQ",
  "key12": "41eGk1knhYhnt75gHyrWGgfHRURT4JW2cJ97dH5T2CUfyUD2vRFcqGxZEMSu36GiScMrYR54VW7LkhFQdLUnzepB",
  "key13": "4YUMJ4nELoxAHJJUUtK4GetctVetRKjr6eEFBvPs9MVqhMeQY4hRieeWUzPpMvDmSGu4eAqBkXox2N7JUAx6hg8N",
  "key14": "66QL19bJt9MED4msCwqL4YnxorHWhX6p12LeRPY5DxyeNwes7s1erZ8VpnnLRDswA1Y9svQjdWQjq4mSxUXK1g5Z",
  "key15": "XuYUHQgdvdXkdQpiL49AJfTojRLYoRBibeT4QsZYpPaA2dVApQUWVyTmxYd8fUQy4MFwbEN4F5GWeaE9Qpn8B3w",
  "key16": "AwZDK55qcCWChCPU52xi5u7ynEoAAuzjLNAgUgkXj2hZV2FDBrWdRpuVuxXfRL8o5XQeUN7454SzBAc4KRZN11x",
  "key17": "3mSUUMHCdzxkVXW5mrYKZvwcZMk43oymsxGrVbtc9nRTNyZRnZA1NRTTbUF4cVGkkg6JwCRGVLsQSYkk9wdJ7r3",
  "key18": "gTBQNVTaQNMj7CX7ZwS5aPNuQoiM6xMvu3GPynf1EwtjPq2Havg7rcKbsoZpgQ1zvxusSMcNoYkddFF3EukAPmf",
  "key19": "5nfc87cVnfMSqvp2uZ8xMMvdEkN2XnVt3Bx1487WT8iwKqw2R4Kc91NkiKWZfqYGRpZuGMUqjtFhQKZwEDvBEY7e",
  "key20": "5NXm6qxHwtkhSiw4fDn6aYPUssVfzp7V2XRzUJ6nmWF2NECgX3fNBPdLm252vFskT5Ykk7UQkebGTi91BTJ9p4yv",
  "key21": "5wTBVAwuLuqn4U9fYJHcptD7pyU47prC7qzvvUTCPXR3gEsp7Mg4YZs3KW7XJH1Mgmk5SvuRwh364tv3NiALABvt",
  "key22": "3P3k4eG1BC8gAYXF3cScSWonVn27ERiFny9a2RtL1R21HPcBfzpgEFLBoRd5Ts47eXPR6md1s8RHW2aZt6znHMng",
  "key23": "w3XKSAG7X9XEtwGwR7pK7TAgheuS6yHJyTtnEsa2Yk5aqKU7HJEKFYFjhvkxfHELKQ9M4wZRPoRfZC4M5zK86hn",
  "key24": "4HB6RvyR2A4kCPeaCAdRT682X5VYrmctaHtz7vkgKV5Unog8SYhWRNdPN1wWWvhPiZ8r5SQmxBTJJvTC74QbVMCs",
  "key25": "2vKvZ7PacyeBf3nPKX9HYby4h8gt23NneNSkvqcdWFKWfzySVUHwCbjzn7HZryNCJTmnk3swr1jTK4s7QrQCbaiX",
  "key26": "2BYjpDGaWgTnbPtj97iKknWXS6MpZze8V5GKfW9GCbkJFiFeTGV7NKpfc5Zw3Whz2wf3Htgx9ksQMfKL64Dg2WxC",
  "key27": "2d7CXGZhU5AaBCS1E2gkrr3zh7A7Q54FW3f5yXojA94h8ZJGiHPueFmQL7tkdq9Z6rThuc5ULmAvnNTSLx5tQC2D",
  "key28": "2mwN2X94y2AmBavBS1ajZtF4PzQZrRzcFrWL4KjP6hKS3wqe85RZzcCKTADfkhf2PeLdLAEEno4xfd6pQUienbax",
  "key29": "3TfX8JiEmuumduA7nujZWUw8jeXVu7VgJPKjb4gACAipSb4bXVn25mBE6vCNFSi6oXeXKvFWUMMDsq8z4WzqRTMe",
  "key30": "6WbiT3tVYWW2CRcLUGz8GKE7GXQJFEEurUciSDUwBL67wP6RjTtK8ENa1nkqHnjGmD7C9crZ6nE3yvvDtQQaeqM",
  "key31": "28Fjsa21XJXhCms5KbTEXm94WAAK6pbSCmNh7PxyfMBahYksbKs3ATyznSnaYvgzpe5D8a8byi98LKT5M1WcemMD",
  "key32": "5FvTuwJunZ4moqmKAooSueRcoyzxSJ9B3kCLEqrLfMgR5JZsWvqGQdtmjm7oBmZgoYUQLVhEZSjTTcTrjoKiqVo9",
  "key33": "4Yz6X4ZLMac3neR3NsbHZ4RYrAPqpXmJtCuyQxzBWfC8P1YEYjAeDpczFvgrBr2NLEvkhSSrPZntyQFNF4rSbysm",
  "key34": "5GViLRrPBDr6bHBz2vDXeSCZ6SUCP7RJu4jDGaoWTbADZvpNuz2W4Vou8UrhoV779t45WbmUdWNT65Zo2Nc3KiZ2",
  "key35": "5YivGJs68AJvZQDEirinfDB91GXcNEm9hDCWmhUn6dzfCFn5LRz8bH8MwxRcceeCRQWJYsu1ob6Y9RbV7qAADYbN",
  "key36": "poCXH1aCUeMA1MkRFtByGNS6yxxNKCyGXqZvm895hFKe4pCidk1GVeBhtwi5w7qmQMeeAbnjmrpHybG7T4tY2Kh",
  "key37": "daPyeiwfbuxrGPLtW25mym1ZevVBxJiaaevNxd9rYHQQTKqPnDir8hmcodn8G2NtJaJQQeHqvmPoANdurTEy7T3",
  "key38": "51D5Z89ZmMZBAY4Q1j7P6jh89A5nnpTno6LwfF4dGeDidG5Ev13yh5m5DASc7paMdxYPJFhtjFQeRCBHVCS6Eigr",
  "key39": "2UCW4JzrQL17r9Mak1QNb8EhNRrMAhQmUzRcC61VdRVheknP4Tq2Mt4NcmrUFCN6pGBAjnStaKTnbVm9UcGPkdMP",
  "key40": "4FBJPckXWPd16fPLeeqBGKxKXjkudDsVduYHGg6gddWqBrUoKLHoapxMUuksRNtRSYKNPotfofVyHK9YMb1XEoiR",
  "key41": "3VRRJYLb4PUEBqjBSWb83TAoVf5cSMx64UEJxwQyJXJU667MdSRivrChWaZ8bwdtfDzspDT1fY3sq8sqvZtA7FDQ",
  "key42": "4kDpMLZ2WRo8kRFmh2ueEfURs3mit2dVfM5G5jFZAjoFHBHc5KAtRYKDZozrXYmT1wX91X4ryLkTaBfAcizos15X",
  "key43": "4NMPXi2XB2zHLwuYFyFsmzuDqEtpois3TvB7BR3xPQNoLKb5gRruFgrzVHDHz6LUXhC8GGGLvryomrPk6c4R4vQG",
  "key44": "32apBnn8g7FMJEJqCYDeRQgTBC26BQXybbjvfkVM9t7XayHVxSHHRXdGhdq4qFmJ8CXYcdCsUg7aQnfwfJ1AQLgt",
  "key45": "4VPkmUZV1SyBth6vgrq5P9DVePcuahqD39cd2C3P2DRt9k7EtC9D4cxVLuA7TDA3iivwSw18MyfRBtUgmJvLStbL",
  "key46": "4jgTCHZnbxQxSGbZe8orRaXaxvoTRPDXt5bHCcfkvCmGqttT9kcwJj9aZsd5oW59BJXMkfstCp17rGJYRDgaYPZ8",
  "key47": "u9yXFAXSu4XcZT748qeM1wCMMeCPkktNCbaqA3xrb27qNpvAhiMuDyP4EzRGcUApLS3UM7rkbjYnKH6BRv4fSPN",
  "key48": "5t7PuAvfmk6SQdKmwA3xfpUc6qu9hf9qZRKCL2eLmkXnMw73BDqsqhSZKcfdPprnJHopNX165RxMo9tD7rFa49Kw"
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
