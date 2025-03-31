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
    "2unCAYm5kUUgVAwGsAWrHrtd7pn7i95BiAJXawFpD9X65iyRRc5UBhWqM6vRyPsGMCx6ZKrZCSPEypy94MAiH1Wc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TcF9FEp955Yfjioar6ktNN6YWWr4fKqzmHT6QEbN74ingbfWVybqCFHZ8KkwK8i9zvtckUaip1uPTgywio3GLbh",
  "key1": "5RaQsHfvxnpwVr7n1B3g3P7oMAHAcRXZtJRkc9xLJzY1YyS6YCkSEq3zGare8mDsHc6FoCiEycrFcLGTBy6JSrJ3",
  "key2": "8Q42HiGH5AdREiYpZWAhr25gQUK5z3SCnE79Eb49xgdYiQT2KkSyp4PScNnUB5GscJxDDWZQYCMyMSRxYgahPoh",
  "key3": "3dqrw7pfbZWqAGbV3AS6UPAyHbsEkvsssZvRXWF8SK6BSm4dKH9X5eTkhH15XravTGgkbokpafb7jWM6Jk8xAqed",
  "key4": "3nyFKy5568tAZi5VY5uEp76m4TpxjDHc4XyHbV8hVZzrZobYh3856DP7mLWWL6QemS5PF685Qm32QDPEQgPheJmH",
  "key5": "3jXR2Sk74DgRmr42hWHaPKzKKHpUB1MaKLbRtSp5yv6GkNuJrLu2Sy9ZnwY92b51Vsbx17gaAeUus18yc121mhaY",
  "key6": "3AP8cyU71PLQQpmCzydMEPAsATkhnfPCYvjSFhMi5caEa3ZudUVwG85xsF7oy6qYNScPzrdjL1GY7xdHeVWC41da",
  "key7": "2Js2tvwYWyS3B58Kpg4QoddVxQTv6vFGREjFnX3FrK8C89g4EU3DhTpnEVFC7SmcM11ZJpd8hrQUVFm9Mkq199DZ",
  "key8": "2mqxsuHD1gFHeNREdLbbJMZkM6AAYy34Zu4GZ2Pg8on67zbfrEfuGrB8CfmFkTqkjDn5CT3dsF9s2ke4FXGMUDEd",
  "key9": "3DN9YjsiE2hWbv9qq3RAjnYo48UWSMY7zja7UQ6jcvpUTqo2kxcvp6F8GdMLooaQQVeW1GsghHCTN4v7raKo5sjm",
  "key10": "2kidBF76aKygQTyaXtqkQ25PAqkEx5LBGnahR8UQ6EpmTJMg4w2AKrVYpCiEwrrRZk1zvJJ3g8N4ApttnP4GUcNt",
  "key11": "cp9tugVxFCXm1cL3nEZzY6UnjG9xEryD5F5ZiP2Lews9b4e5GxUPyFVegbqEJx3uenFExjdohoD1mRzS78xfwph",
  "key12": "3cgwkcnVowXdpHrpYFf4hCB4y27jaS4dB1qPSC1WVSW1fcxT3oMJR8defv4hq81X71SEJyoywKhGnaXtV7m6H434",
  "key13": "4E4fpP6RiXPRRmbHATPBXA4JFNeanugAPBZE9hH9DsaqU4DdbKGcFgYpXuiFiz1BbRVvyEwDkCpc95cNUjeq6ywt",
  "key14": "2uJ8p6dfGSC3Ln8SbNPEdRjPPcc1pPKmnWqYsmR65CvEUaPnRwC6tg4gtezuKNqgY3MvCdvBwYvahQ9DVj7QVU63",
  "key15": "5xxR9q2GSxWr1RqSkAQ2GFtYbKvaa7kBnw7iURYDebKes9Uqr5u17bAGg7Bb7p1V8jNqiy6ovTDqNnF1KwaVTQZB",
  "key16": "5TsCz4HKVZNSSEWpbUSdECzRtU8YmChAgwGESvv13D33uqbPMtEGUrxXXrP3L8QjZNjX8EKo6KQ4bGoJwoZaB8mu",
  "key17": "4ekhjrSy1MZnjS55ggrtv6H8XrVLY9f2vVCpg5tUL8kUze9eJHUbZijQiqSDy4N15PWep8LrvUPriHH8NEnUeo8U",
  "key18": "31YyNfZ6yt6LMBQupRUoKq4uXWjubAUexmQWftyfXKkFqS96rVHRZMSiGPCE2FEzGi5HdQhiPDXmR9z4X6SCTAsj",
  "key19": "87j9y5A3HETgitdENtE4qcabZRVk1iNwT6XN9x4C8fkkm1puJHuxPYwv5NxTJKaxKW7w3VbCH6hzVrh1ESifDkv",
  "key20": "JSAkjSNbXtGgbVRbdwafSoyuricCDBK7xEjkUTGQq1tn7pWGdpFR1Z95AU9vsmZr6Mc1yTgaK1QjYY79rr6pgcv",
  "key21": "4NTova5B44GoQBTvs4w7TjG5iiQVMgpfx3rcct1LVggsaBTRf7sX8xwNAnjvMvcss8t1kmYCzyKewLzPLvuPiarA",
  "key22": "2r9XWbfpHSZGZPNZJzpm4a933MUVPCC9Z4k27jXQe668o1Az5uLQjrxA6YZt4kZ11VyzzznLwpAqq5zijFyFd5Sw",
  "key23": "2nYRhE7jw7JM7y3ePRWvcVdQHtLGT5KPZEG6MpUfAPHnvpWwSqugvBdoAqrZocRk5FG1bWvhDA859TmeTi2XDLP1",
  "key24": "3PS1DiSn1Q5rzSQ8aKheJuHjh1mcKayLd3uEMDKhm85cko1ye7cGRJKSUpSyRDX4EmBHbe8BvXTojwxwbSEKW135",
  "key25": "572vC1XqPB4jL3s3hd5cfbFs2hQEwuPRZNVs2b3Ho6YmnyPV234y1tDeP1TQF4VjyzP3MnSVh7PhvK8Rmw2XR3xv",
  "key26": "2squaZNNKnJvJzJRMG4PMJvQ4Csg72bUzCF8s1KkBKAYF5b1dhsNtirNBX7jMkRtbTXB9Wy72tziGJeVHZKwwdG5"
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
