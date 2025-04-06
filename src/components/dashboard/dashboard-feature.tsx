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
    "62z9s9QC9ZGvYbfZSLsCB3vx1tnk5RSMWmv9vbVMwvDPhn3CX2EgAJrcE7kmBpgVo7PNKPysWuFYsRmBCtuY9mPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zXe3dCSk7vTxX7eHnQ2LduJsmwUbsznL4X5jpEZTnPjbT8ePQVWuyM8BBrEQkXouJuXknCWop8q3SDk1WHLCp1E",
  "key1": "49r3SRc9zSd29R3KCphpXzdJnf4p8LoU8GbP4JTN1UmkuzJNUrX1xB2MjjB9i5xUnEZVt2Hr3GcbeZGfJMB4gpXf",
  "key2": "47yUUrAva1385MuwbSVcYFxwUPmbnPBX473kUGhvcz2CCfW14bi13QnL8ogGCJdxXM28x6y3ggGpwHD898AbwNqr",
  "key3": "5pyEbNTLB2RumRkJQrSzJCPdBJSN7JYTneDyVqs18hik1BH3TiGYtbPpMffY44xbMZeSE6q4rasHV5sJh1XrfFRL",
  "key4": "2HtZwcEEvo4C2xupVT7NNo3sswHbaDDeENZ9xn7TaVkZ3bWa4vj78zKTEbGTtpARsHBxmbrBY479dVkf68HbDrXE",
  "key5": "5a6SvBoMeYXBaiVoMWZf12Yx8nmFMUy5G8gyzvDqkDdWazpNYesTR1RAsouxo2EimxBEPhNtmEgxAZdWZiCExdFE",
  "key6": "57LLwC2z6tn7nfcrmGsJNmhot1NPFWxUaAxCMuLrPhfG52y15VpUjNjyGEoWpLt3d3fV4rDvjPxPvimvF1KWLRRD",
  "key7": "5r4RS48fM1mesJxrTaSY4ZqKhmxdQCui53QMT8JMKtzeLaJbgRNLvVhy5jDPRF2UNwbMjRvUPVePT7XSCNqu1ife",
  "key8": "Ezm3HmEcgNyjsPyKPpKWh4iLy8o1GVXyNBm2qPwGRUWa27pNbVHbzmYEUDeCLxJxEYt2J1dhyXSTK4a3gcKbzFd",
  "key9": "GKG2JpuSe91QsJ95cYVLEsaJkKpG7xZQ9pXW3w2S3GjuPmF9SDnWJgn28MshdJGgm37FvxPncdEz8rMTiYX2V8b",
  "key10": "2XGjAgwCSV3ohid8yA4RWpninRGLXgpkmzudgPqrmZJmeSc9DFpYeS3xsjTuYwd4duPQibYB46yBwZkp6e2HTL6i",
  "key11": "4geScq9UMoVaVESrM5w8ZrhVzAw2a95Ut4qnNWWMpTtrEV4noxhGVZwR7G6J7gpJLfD68vnUXEWoGdR44V5bg8km",
  "key12": "3hHX8gwRCYgwJd4GhWmouCd57HHuHv8wM8bFgbgHxt6Tcx6EcUxZPzTMqkxrSgqQt7qGNU1c44fDfCEmd66TxK7Q",
  "key13": "35vRnJFMD5A6BGUvYQFWsCEk9WFeg4A2hx1dnaZDqCKMwsqU6CKmDLi4rjiYP3F2p6UN65uTzdb78XBoemjVWe7c",
  "key14": "2bVeqAc88negSfrinMz4cjMdt4ewBz2PwuP8jjmqub3MG8ZHK5unsV2tfaxjVVwwNr85xh7vpQ4obNxkGxVcrW7q",
  "key15": "2oiRJsDRgqNfBHVuJCXfCGx5f4S5yBGekjjV2TaSn8yc28Gd4FaXHRfmSYNuves9FKoKJ9xZcHKzEnBz7EThnPSU",
  "key16": "2WhWzkpW3GXU1GtJNuCRSr6JnHMKt9QXBqAKViNVXucjKaoLH55mfAj3MvWDLTEFS6h6JuNt2uMpQqX1EScXrEZw",
  "key17": "3UbWTCHToNACKs43wbWoKik5LiMLETmRymhK4bUc6GmPzpnbr21MMkbeRx1eGVnBA8ocDotSZPW3ggmrfNuLSy4S",
  "key18": "etRxbRTNoZi75nCsNVVDbmwrq6dW5veMSrDSBoXvb9daYk3NucYgiAMkDNBvvftSNvJWdrJuKzcTQd9D3bFhVRb",
  "key19": "26DJYuP7vXTR6tH2XbvURTms5YifVq4AEG4WCJH6Qzv4jzQHtNo4avxKncdc1v3Es4ok7i5DnBcCeuFWB3uQdHvP",
  "key20": "628uMF1Gq5orUyupC81C4XpmxXP94pFwZTbCAprmNj1C2KqR8gwPj6rT6cmehssU74VPXH6wiAxvmb7A3nfdob2J",
  "key21": "3XKsxMa1VM3VwwgsC62te1ZaFkkGBS6f6fTTLRBDq6mogPY9B1LGhXWoRgqPKBjEM4deqexb6GZ19e8if7PZEoqt",
  "key22": "4TVHy7zXdoeVynTwrtsR7CXAV77zZ3oJBcgVbz5AFduGwXpdek7pdiX6AeEAgPbBxcJL15wtHDnQrTc8uwVw9Nw3",
  "key23": "2UfYJkLtAX3CJYvxvJQo9KxuqEPb8L89zKGPDQXJxKSkxsWwePKmH4wYj6dwDSt5WMvHQCBt5d2FCjqYnvGwA39Y",
  "key24": "5p3hrDo8fmcxsMoW2WZrqh6kfSi5Dexn54KpGNh1nonp6rDphyFDNoZPa1gmufhjYeY9Z9ZUdrvpeP3iGZMAZT9g",
  "key25": "4GWY5Wf5baNYYyB5SdzouV7Z1hNkPq49YJwnrtoSFQXBbaff8SxvGjMd14STNMy1ipyLaFwqv1LYVXrrdhqPAGSa",
  "key26": "57gCSpDNJZnG45FZvu3ZKDAHCSD79Luh8ypqhyb44iohJjKTiKPZvzDWYJ5Jrfv3DMLr3WvvUdsRVVXVwfRqMwbC",
  "key27": "2K2NJ6gUWD7BnQtzVeHbf3fJFTh81ZEHoaZZuot4Yczcy4z9Ab488n5f8X2vDK38JDZEMPFyUtyhFkRrCBBxb46m",
  "key28": "38Y9S3ERdVMvVTA8dnRy8wNUjLjQeRdszQKc7Uk8wQtt33RnD4Qd3d4PJFJNs5KGKcmnftRhP5MQimg7ARyhszpM",
  "key29": "3LKDiyuNQ2Dp22Kw95x1Us1bJqjgCSdA7EbuWANT9rXHYFZRXYvM1D4YwgKmxfBBcWi6XPc7sdkkk7GRCjDm6X69",
  "key30": "2MPGTCAeRT6crqhzsKfRbsQt14fkvQn1pvrDYq32j6ZmetNbLX7rMzpQXFjupTyhmPxKnbhVvk4RfY4XVkyvrJd8",
  "key31": "29YssBPnG26S5EadmzppsAWyVuYAM9gZKUAJFfsm5k5YZ9UwJfvtcnRhvdWa1c3oN1t1UHxNgA1FUbiiccjJu1BG",
  "key32": "3tkgXMom3msdaSNLrTZvNu9sjJ3bsWJDX9RdqgqecsBnmZVkaKnAEEpUJsxdouXVwL4SnW33qMrptHijm4a6mLq",
  "key33": "3Kn1esrzT93tFVzKYXRVw2wxecHDtFrSjQ9NgNhms2YqPgFmgggXQ1bzJCgcqKe4Sshy65UAZR5cyGzvZnzNLffg",
  "key34": "4mSb81cUczd1D8MmLQ4TJcaVJeumS7C4R7CfAp4xf4mFQDbomQ1w173c9ytnxR1ugFk1pyPjFtmxG9aPNhTkcptK",
  "key35": "4AZGL8HCSHPpGBnWpptUQbNwqrq83tbJhMBjnPD1KY1jmYcy65a2kZH4EbxrrXyB9cnmbSYW9VEUeqFa1uRcmUSz",
  "key36": "5uY9GYTrLYpsHWeeQzQdzkQmn8WFeR6BinDXfbSXmFmtK8oktyD4Ae5vfE7HLNXdAd8EgQum76T7STXVfveS5jpa",
  "key37": "5Ugj3VwhKPo3wKrjLwcPMt3RtKiceAQnbsXdTMbzM5Uu4e1opZT26Kx9Hb26zyaeYyDjc879pdmiKKiQQRh7eDKD",
  "key38": "4mdpNrLFgkuZC4ZRMTWabDrTJE6q528UnRMaBgBJw7UgtJ6q4XHpDekYcSJPRxiHooTCcghACDeE8bJRLw2qghRb"
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
