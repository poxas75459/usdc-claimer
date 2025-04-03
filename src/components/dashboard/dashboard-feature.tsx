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
    "4fGWwYzyLtGSv1PoeRDr6wvgtV2ngjTnz5iRaHdPv7PJx12rP8iY7REvvvhYPFhvqhU41CkPnGDCD5QNH6DKSaZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24tvK3ZctacazsCFxUrKasingV9PKpbDorvZdPXUiQRvHbjj8XX49EscRxLytZXA5WyPUBgLEJWyjdDHiihc9MuG",
  "key1": "25iDQSpDhsS81HXragoDuRzNhkSAgRqynTz7yjLFYp4Qcw3gkVxsEFYXb7rYkzrB4dEzqhsLzLrpwx67HDGzm87C",
  "key2": "2rrMDCUxBva1k9WjiY6giLMzkH9iKRXEWDz5qUeeYzoSwrX9NX6m87W8nZzHSo8qcgHmirQc38ha5MNWRAeDH157",
  "key3": "3za9jF7cKceoGyLaGDRsKGii2JUaGTqVkuTKbBhfHd2uq95gPsQAk6PAAxUj8NiL27dGCj8cC77hUSEieaYn5reJ",
  "key4": "4Pviipsr7if3221UNLzyyndLpEHhgufS8UwLUGZURwxaQXiS3Z6VkHkpyyTCssw3Wxsyvh7SUtMTewuEzYLPw5jB",
  "key5": "xp9pVGVKSQGTbRpueuiZzniPrv47VtFxeie3mMazQMnreiKYEheezxjCygLQDDm4bQrqyuGBb9AA66oVepduJEm",
  "key6": "2s2DrXcbZUvFEF7H7UZ4QSWbsUUVEM3fU5pxbU2HwVyJHYtkRyUd2DFrrUQQZHC5JArift8wvZxJVwMVeMi7Xbz",
  "key7": "65VYKaRwwZQu3EXEkPd51WAMNtjLgYp5FWwdQwykSCoLcrHKM56Dqg7Q5orB4Ya63YpJSZJFK4qWUGzP7jhJYmrN",
  "key8": "5WaqDde3NjNdKhjqjTwrV1vjdRXUghpSYzS6g5kWNtiGhuLp947Xk1Eo5sW4R3krctQ9PNJXAk3rktVPRid3uNke",
  "key9": "3enThe6jnm2QcCwD3ERiVxsCQMtq42MaagB1odhYaSHvC1ZK3g1bAWN4sVwo4WZkfzVHvzc88HumXthXRYVAbM7F",
  "key10": "4RvWFqz6dEQXqrSWaZMmKTQDuWVGJ4ovSGRp16KajaPyxdzrE1562HNG2AHBjSHyTCnoYpRbuWJQuh6VKSFGtn6R",
  "key11": "r7eQZtEJRngGThid4kj3ieHnpdcAP7RGcwWaitd8VA2yMejUfNGBKyQQmNa518HS6G1X6Jb6cqKXLDh6QXFnzkL",
  "key12": "2ZUBGfW1jDVY6C31LLRcM6v9v2BX7diTn4ydG3obFhWWLNCf92TgxawgdcmmwSCDkoj9QzaHAviY9bwMPESAx5Y7",
  "key13": "2jTCVQLMDZVZojRB7gPHy1cZZo781XyD3JAJwPa6MpLAMXfcQ9aMaKunFD7FM9cddenB1aW1XnawC5ucgpRDnev7",
  "key14": "uLwnDUMFb5kWmwPHGG9vw83uahwFDfXpP7Xc6KBieUH85xSZkBJBRg9S7cEF5E5XPbo2hUFrJvy3V1ERJs511n7",
  "key15": "QSx2GQjFqyc8t6er9m1AKY3eFbkfR6neWT61U8kijHxGLmCTnUrnb9zUEA198sdsCxogaKrw1ThrqQjQwobaftn",
  "key16": "2DAFCXwehJfNDKb2H9ZeC62F1PBVeh6hcQoxbgSXoNbuup9oLvyhBzJtDTJn9wsamLU9tXxnKN17A4CZosphrf1e",
  "key17": "Nuv6yxJdFYuX5HWKYiSpCUPpTBH8ZKCiB4V22cyd8ddeFw1KwZD1k8P87zTyNxWpVuc5Vsy7WLAuRiwFr8nKhHa",
  "key18": "3KHckcrZmRRGditzs46oveBT6UsUgrLBQABYY7RXsgSwGKaVqL26J8DsLrnBtJJQLmLM9zyGJdfBMJ5MvRo8gWew",
  "key19": "2i2QZZ1s5FoUKkYk3QJabyGEd5a5AEeCJwaEzsnAESVQw8UuHpzwsfjXcsjUqUQ57FqzMN8XT2Addmz9Yc8M5njj",
  "key20": "64SRTAYmVVjNosaK7a8FgrpMtMhKWbsY2BpFj6LKJ654GCFuq6pn3XX1zKqu9TL7vBrYqLRAyraisQp2wCKxJg5B",
  "key21": "4PsEqEFKdhV1FFtoY8PXSjn71V1HnSqFUk723X8qWwnRVXcAGmb6hRn4CEnJG4iPuEMehgC69Pajs2w6jakAgjgb",
  "key22": "2xrMHsM5yTzYozCXuxQnJqB3QG38SaA8mU38N7vTgnb7nbVHrgnj3i3byc4XwmJJj47HpwjvHZNPX6wgevMcYXrT",
  "key23": "47XUu19mD5PNKAfL1kJhgc8Kg8kRRazBZufDpaRDQUumFgsrP2MLcN7MQWbNuAMnvRfavsYFE3WTTDpsLqXA8Vx1",
  "key24": "4QtGwoNchNV68wtpzu9BpTQ7u8jfgyE272ZHpv3Tn1X9KV5QSv9Qj1W3BDmswDxc2zjtzCxyJjY6PEHEsVUE5AsC",
  "key25": "5o3C3j4hJZ5DY5ZJvY15zdrLAThVnSbFq14a4b4yX8UdsoAVMQtKbCskXz63wqq5JsgsPBRBwyxcJh9wVkbk5HrX",
  "key26": "5VGhUZoreyxh374pcE2taiL8NEkUPahSF4KBoT3Tn2689L2Jp2pWoxvxkAsYaqbW6ZM4KUL73bfvbXYxEmYuweqf",
  "key27": "4Tkn7mxxpwhfvrShGhHcinSZRdeYgZmRyFCMKP39cwwhYRr4LrGBPDT6JtgpkTMoFYp4fzr75REfAsrSMHmLN3aP",
  "key28": "278kXq2Mzb5qGXyaBVDh6XRtwTPFdj3ksewvckMQEodgKFs5MpsW9KdRH61t2vJ4fv2iad49xe9MbLgaQkDeAVWN",
  "key29": "5m9roc6k7rme5rzJhN7oZGzPZudj4iVbWEVQ1SmfnQvcSegtkeGh6LqEQfwe5iSANBCWNRNcyHjnrURmZ4rixwLL",
  "key30": "hULvfJireuvagYueRFFfdxmw11gB6d7gMbERoUL5oLuqXy47CodRr7J49zmS68d1D8o1AhQr1vuZC68SW1FzvDD",
  "key31": "45rNW2KJGBA4CDnCdDrWRGPUMNh6qGdac2dkMh9EyS6ajxYaxBAWAy1GWqeEkE4mq6XhVLHy4Tbv2iwAFXc6ViC2"
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
