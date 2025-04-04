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
    "5xMX9i9uqobap4bJugSxNZSPfpQwCg7NZfMtvquYEk8UwFKdVYehoeQT98GR8VP5Y1qNay89ffgperb8c2m6WywP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iBsLtM8sXvWHLdGNNu9snoYhZMK6G2VaqhrVmd6Egh2HvragrgZx8vVeDhW6YLPtATGdRBDVDaZRxYjemaZsNEy",
  "key1": "5ZGzfTRqmwVWybjCCGUvNfbMBXY83o37y947HbVMz9nLQDRHSkPK9P1pQ6Vt91KMcPLyMAoJigZEkmmtWsLgZrkz",
  "key2": "2Jm9vJtPkCG5mCU1LySJtzsbVNB48ZhXqcdjXgnMdjqATcTq3MEYMnCGkh5X8RFgyP4xPwsAnJdnTfdpzZ7CKxg8",
  "key3": "FQt1weAxpBJdZCczb3zU6Md5ndzBC5rZBS9GxxYnzAiVx9B1BPY3k2FsUJMbiSMscvYSmXfMDjaJTZBZQ2yhivZ",
  "key4": "41FLVrqp1hQudokmw9ZENgzY8XAVA76EBqyeTM5bu9fSBcyhna2mhsqAsVqGaX9MCnrRrmwdqpveHu1JLdzoDiWL",
  "key5": "8gvPfS6wEcaxuRy4DFYGZLbWghBSx1MCLxhTL1SW3gaUPuprH7LYAcNB3J93eiCk6ADutG4RudPuLGbbrF2BwJA",
  "key6": "3m2hfFm3sLx7JwRgD3JnfcWcs5PpMbJcytJAfktbPPLKmPJaciciSZ8uApgwuokoVrmSCKANJ8iSg8ABsWa9vDDe",
  "key7": "5cHTgdfQoobHW3YdRAzy7tEreG9rRrVQ826ZPutMEK9BkJssu1WyS9L8bAkxA5JqQ7PPx7DSRTdSh3ubphMhVnwf",
  "key8": "4BBRnpPWzg81SAzG8xru5m6Qxsw6hRMrgmzRgdpEybJ7VjpV3qLML52sxu8mjJ1qTQaW2kmeHFd4Wjop27XB1VgX",
  "key9": "5zsVrvxEgtyWjeX8YmxRJQqFCkx4FvkhNrJR6iBYa2kFmpLrgzJsRnQSEM2Xm1q1VorsxPR3FysJcbsp72YK8W8U",
  "key10": "CfBrp7DQd8aHwJ52nw98PoTQGpdPC6ShBghW7mXvNfqeRCMNN7PVkYDSR6aB47Ns3knzqzap6UbfZ8EpAgzuUwV",
  "key11": "5uTSTJ7dvPgkG3n9x44JRehW9BYSvtJ5vrzTkzSfP66QAxzAoqnmN1rg4g9Hke2LAs8u4pFkyUrkNddTbEzoDZ1A",
  "key12": "7FSCp1r4zGHqvgt1gUxjFuuJshps6oBmTgjkiqxMqPRNbB5PWxnk1WzQLqpqNi9iVXyQeLzGngFWr92onLa7maE",
  "key13": "2Mdfq62E8zwx9qmid7v6Dd8Bn3GcS1vLbGX79T6fx2ekPHPD8oeENo6Hg3TaUq4EYzt9M4JWty2M3s3X5owKtrsM",
  "key14": "27BsASb1kfnyRJUbSehNB18J37BrM6xFZ52w547jMUCT9kAjdUgoXcFaDAhChpGyghpwxaNsspKm2UptgP8tbwKB",
  "key15": "2BWyyvk7JvntcxTpWj4et9N4sGxfQJqkkz9Az3Swisku8kGUWFdAP1JXUj36vwyNhAnzS789hJHq74zdaF4XGZeK",
  "key16": "3A6LoLLfQ3R2TeW5Yjie1cBDpfJ6cd2FzDoT5EbWuCLJTA9yRXhiVMJq5ExshAB5XLQiZZL6wPSMihs9H1EWgpif",
  "key17": "cH2szS9VfqEJTesxYXrFEiu4Q8xuieatPRY42AmHR1nF8TLGyp5MWrKz7CiPzzLErjggz7HUYiMpDpHYrnVwL8L",
  "key18": "3WNJ9fE493UM8g5rw4eCqybDeU5WGeqQNzBHPsVVK5ozXrdbGtWSZXUuWpHQ6WAoQZPWYiHXHASaXUMPhNnim6f4",
  "key19": "64DfcsE1np557mT9Dg4imZuZzkEHBGVWgnUzvsizrAajxoJfGEDZSt6xKZpThkKE5JvmsjHXup6rgCZ2QyqSx6yu",
  "key20": "5HcaqcigEgjAoKqQ6F6wvsPz9hDdg2qm2x8e4cCkhMCctGBP4CxRwqJM2ZhXpbcmn4jsZ518PBw1hgFzroRsyRmJ",
  "key21": "5yGWn2Fs1K5evjWb9TQMcLvyXG2hfAY3ioQNq8PcEjd9u8WeFohXPT5NRdp2TJzBVebw7Vjo391y4sa7nrxYUGfE",
  "key22": "3seus3m7XymR689PRCLvtWAYjwMTbNkm2x82YitPwohimMWwEsFaH7VsZuxyWzd3L5uFBNEEP3XeF9HCMM2NZPcz",
  "key23": "5oXZKbtRaHwdvVJf9YcopXpPzL2Tpqxt3nKyqNFeDzZQMJv37Vwc96QFiwDUhi8sYiVELidndFuVzj8XuGC2TSLD",
  "key24": "3wEKWkN55rE11CJ7xURGMbbKrm63rMGrYAWjJ1SNRFiPXzxnG8scZRZQrvq9yPRQ22syNW8AhHtRZMFucEZsHKfd",
  "key25": "5kaPHz9dBKMU1ViAFiEsBjQXt6epZZorYBcwVGAVi9QvvUkzjN3XST8n7xVz6TmhMKkHbkYL7hMrMEg7mDJoMdCX",
  "key26": "4YraTuYCd8bcnDEuym6Q3jNbqiwAnz1tKi6AFq71i8j5QVEPVrGyNVM3hApbDZNKvKeDh5D5LSkVECrKx3VShHEw",
  "key27": "389Ye8xZArQciK1ocqCRJPLxi3iPhiajfKfYrKQ2wsrZA5T8hgStguCsZN2P2b1erAoEhYpxghfSZNwUFjQSBN8d",
  "key28": "3h9XQ25zHqyj9MBd1TJLHn5fypjDuGpUhyfK9b2vFLmUL7a6U9bnP6LdfLRzTq1jUoDxqxVyS851LqQnbUfDvY44",
  "key29": "3bAjNgeJBUi5GbGVBwQzpj67rUHSkm9K6DwXUhA3LUSDnNvY4dfeLtApPTRjJc34hfyGAKKW66jtXB36Lr4Vu5cW",
  "key30": "3DBSCRnz8RYUsFr9zvRcZDT2MGiEwqyrD8uigmWiaxqnRuiF7Q666Dnr1Hs7gNCidMw2W7VGjr69S4PaHWZsMEUB",
  "key31": "5anA7FJ8gSNT2yXTZVerKpYT4K78jHTpzhYNXuHfeZomgM98UAbLmZuGCQGF3sn9YRJiRnsR8jjWGwT1khnXohZa"
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
