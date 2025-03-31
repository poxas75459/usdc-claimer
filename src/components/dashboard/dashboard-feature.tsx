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
    "4KJ2GoAwzGsSuzCAxjHWfL6qmpZxRCDifgrAYAupM1wXLZjS2oYDUNaEh75cofKRzTVYKDQaudZif1KqMKhsSATR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dou34AcmPDn6ZjwyPYkajUjAkqRgCtRsVLNcHD3nRqmMzzVY8KUd8jL68FaannXMjCRoLkqSDoBnJLY1pMPdupY",
  "key1": "XnkQVR5DiZHXtLZB7k2iYdEaBq5f8Ym8bQuhNWXJLbD8pXkY6T65kW98iNCZ3fedczLJByvFNqqiVTAfp6MrFuF",
  "key2": "3LXNjXHEhT38avd8VjXypbx4mexrc1v9CXkMaqrjuevzuHjo987PhGLmphaiFBpUju4HSzNrZiqipASVEzW3GkcC",
  "key3": "4KXy5kiLhG3StDNNgKQiy3FudPbJMrE5ssGQDxAH34DRsxER42sTMMvz4RBHAB1XQeJVghmZvSZMoxFbMF4NLb9v",
  "key4": "5bYKE6Qov9JMkpBekoaGbJsbMygRTQiXuV7cXXhiUaXwr5JMejv2MBCfvdwWQ2o8TLoBPampyX581NvMHgyuYGae",
  "key5": "3nxEMgg7F6G5K8DPchBs7ekr5L4xjwjWCxbzkCbbho5QzhYVJ8xP1YVieSfUp7x6qEBifB7yu4x7pHacku5wQL9q",
  "key6": "LJeg5woAriUJxVCShN4SCoBqNBBoaWiaYmYvojsLeUgCS6XnH8DHQU8My3TLGT6cWttnCtL5Gyp6rJ97RqbkWs5",
  "key7": "3ivrVRDPEKnotP9HJJLcxsp8iRDeXoakjfUAeaiFjBsm6iPaQcEGHa3VcNmvMA2UFoqLVmy4GRXWzvB34LUuhVcm",
  "key8": "2d28pMrTfGG6fW82f4uAKkxfGCUX2bTMSUEsRDoYeWqnf6SjwKHLGrVyHHWubPFF6t6P5pKzhCYmjnG3aXmCrRFf",
  "key9": "2uoAoVS5A4m63AEcGrb6NJPdq4xPeQYdPmGVEtLztc8hLNJztACsXj1ANGLAN8xGHPkNFXUJXypdWenmoFNmQsEn",
  "key10": "2LQ9FKJj73LpEBtfFVr1S3upcA2iXe2rx3uuR6y7izep6uQnHiyPghCWPRxaFMaA4Z4hhWoZ8Ye6yAKLsNQjLHKp",
  "key11": "2aSCBMM31NAcE7ob81MhLTRhRrKvpqZpNCVwGt4danU4op2cM2WwTw4Jo8SNx1bcdXF9HmJFPeXK1171wEAVU1hp",
  "key12": "3NJLAEMeQkTuEwbXgLxCYtqJmhVvUML6NLN7oRsbvBp6JNAdDAgmMg6Xjq1F8Fy9jDtEtTPdh3SY7YwQJG2K7tyM",
  "key13": "5imGJi84rKqHvr5zHH1jfci615hiktvXjjdJmpAC6Da67kQqTWQTTng5hXjoCyLSXKXrfeUvvkWiq1BVdfqgK5tF",
  "key14": "46ts6Rt7y7D2HGmjEXLPr8ie6pC5hAGATHNaUhuZJ29gMEy9bvG3msLtjoLbG2EdohDgSWNwQ1Q4AuQUKPt85ST1",
  "key15": "2eoA998SgidoEgudHLGUjSD3m7T9yJB5JGXP84H6LcfeaxA3G5aXzgYChcXC6yDsMuVmztGtQYADGtu8AtwizysH",
  "key16": "2JoikVgXiC6LeuX44LPkbvSF2sX6auQXaAwMFb8wrWRvT6neEozmu1QJbKk5JQo43nkdyvA5KcdwYwFtPQrb5AKx",
  "key17": "PHJaDAtDUQtbXSD3yPEDfCBAHuphBiRKBbFnWaQerFMgCG52y3to4FajUQRf2hi7hYmuf4xsxqriPNEPqC4xqw4",
  "key18": "3amXuv1m7cFiBW76kVfuLzyhbf6YkmgHR7C8j67TEXUH1Jxwjx2EumH3wVCAy3Uvfk3DNs7rrSNNtWmPqu1rokRQ",
  "key19": "M4YfAWucww96HA91wU6B2ZjZLeRT9tW7oa7Nidd3sdnK2czpivWBeUGuEnUGHgFHmwGZiRbQA3FtNWNGhwsZCUX",
  "key20": "5ZFFoFa86HmX7D5CmYiUeMMC6VXvkehxcZDDWF488t1HrcncWdaQmfre3SpJ4nEzaiKk28h34UucFhHMeCP32LCg",
  "key21": "52QvNsDjt3CpXsNGBXGy9GgSKEEZtXDAjKs5tNUZRR9uTmFQTwYiHbQQEviikrTMpw3Wxt9iSw6RdCGsE5wXLWWB",
  "key22": "M7R9K79scu2Q6KhgX8insrfRSKmwmB2CLgJRKxvrg8Y5y5cm6Fir6hYjwz5naXaocJohqieSE7YFd6wvjMzC7zL",
  "key23": "H5vKYdbHDYnSsdAxAmEdiUdPtejjCaCpf47PHeFiNJ4zBUswRNnChUZnNgh3UHMzhA92ZxLn9EnGsmsiCci3Tpq",
  "key24": "25zF1VsMLhTcJHCohK3DQxZwV2wTaUgpcN5TXvMzdv9d4BEJDMBPagASBb7U8ZmFC9k3G6DuXPCMgQeFHi87MH92",
  "key25": "4gQEkwYFmoEpMg7PJjin73CaMDHNBDoSMW3z2zwHuE2rFeAiahPMvuZ1mjsyQ91yNwfBXZm7ejsvG5tJ7C3yD2Nc",
  "key26": "61KSFrLU2pbmvc3XRuHnXgqRayagjH7bxSwbjRhKVnonBqJEzABQA7pqvjn6uTmNV7jbL3KDHymwdHfwzdGY9BF4",
  "key27": "3Ta35jkPmsvnReHtdPvuDBnHCC2MhB5XMx3R9gheNjv1Q8nxcqcQ11pmhiWtLk1EFsbQ6sGy2GkRkU893cSauqt3",
  "key28": "4Lq8DRN8HkXYKzLx1TpzYNA3CLELsfwVEkssdYhukygxEnnjWDgRpnZHd5vJuadcvArv4wssFWC1G5rre5t2J7qw",
  "key29": "43Xu28aSiPAPeaJob1NkXuX2zhFu35suqCHuQ7ZgsZwDdbJBCe7o96doEmmACgm9vFuFAMH2hoKYdJ1P79BATyJC",
  "key30": "9VP2w41wV7Z9k2hmVZ4YuAsEW78TDcdb9iJuKZhXVG74MWEf2FsJC1Mo4zSycWdKYKfuEVq2jSeBDWb8tFxqExr",
  "key31": "3k9ag6g4Jq5sswVNrpDKqvGfRXLHjY7z1hwTzunj73SBdmHHYQkV4gidt2kGi8YL9XcFg44KuxYyPQZXLB8xD9Vh",
  "key32": "ebzPoiqUNQeXxpJfJ8LCygaBga8fmm7PPb1H6GnD3LRn9prGmxceXQJ4v1tWdLsiUM1DpkmMhVvPyqPtdLX8p9G",
  "key33": "gt168MRgEE3eTuyQsFyfUNneNfxThkLCzc5Zstkye7tzjUxrGkS2BaL9zwy5QrV6smPGrGVAXTMqHxLr3ARJEdB",
  "key34": "3rsYBNqMGnTT2u7zZo29AbH2x3wgMQP6T6Yh5Mi3nbn8wNPZWPGZvbmBkHztojjZySG1krDDq6CrPKXLpEdp7sD9",
  "key35": "4Einany5P5btwfrvw6XeFDNB4B5ejovMaYJ9nrT8LvgneChQUsgo764bKvTT6K4kXWNBSaD9pxRhPcHfm2eBKS2W",
  "key36": "9oGEgWQ9Rn4wdXpK5FtEsE3FUAburf2deidMHZrvRmVgR78nhWKB92YKUoGb2N9MsQLGoewgGymDxySP3TGjjRF",
  "key37": "4hbsykcufFpcx1Waw83sg6cZv5VAkzCYe1HWFx9CxukCCPZXeGNHrYfNXCjqcqQYRZYodb2PkVuNwxJLgduaDN4U",
  "key38": "3UcjsYwGf6bsDcckKd2uUDwnsd8YsKEBqBZNw3CKSwARco32XTiiyGJsSnbM2AHA4Wmi5TfnxG4scNyUngENisMj",
  "key39": "f8FUY18GbzQxUeTH5D5u7H6rnvFWgK99P2wH86NDS6bK34ASZkGvxo5a63WojdJ7PFyuJiALmU7bYi1JXN4g49j"
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
