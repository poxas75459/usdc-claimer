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
    "5iTvp5q1J2iKgUNHoFFqFJxgT98xprVyPDPkpqzisvxfivMyHW3rsUr2kWeFZnrYzvKA7xNV5nvoZ8ivnEMq1Mfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DrTKYeGxefmdW63SkaL7KtRRGhr7Ski7uZ6ZX6J8D4SzQxGaZf6zrL9gb9QFL8NBcoXHwDxcU1ucjj43mtkyEV9",
  "key1": "oGxPAdxKP4FGZ6WhdVBHWzQ69AUX8mj4WEDTsxouJZDHb1ggjDdV6QG6nsGcWVhUzgNwLXRQT5PXDgwGpQ9kcGh",
  "key2": "g1vtB4ep9h5rrXRAakrccmQCWiqq7N84HXdoGT6hu32v6R798ZvS5x7gnXubd7kZPjN9nndsnD9Gb1w9aEoZfqF",
  "key3": "3BT6KPi8qmPeshz3K99roENFCZ6ta2sHbPeyTQehEjm53FgrjLR3qkTexAbXvb2FDkDNyTi2zaiKDfp2EJMH7Vmb",
  "key4": "534GRfzTdvFm2kC4HYiS3htJ1QGw5XimUt1eCFAH11SJ6T55dgRumi1UdXZsnsiVApdBRkd2rFbFxxm5V5QYisXJ",
  "key5": "rKeKbB9Snd6FaaUVH7ff9Vq3cEWe1iNSyuaYHUXYXsqbWjnys5j7oLdtwUU3vkEVCFow6zZ75BeTboCEfvnrLGo",
  "key6": "2rke3dixC89cYDnXTMEp8GH4nfBc3rJRmKjLM7QD7fwg5n7DX2Qqay2ZUgkybLmQFJFqT2re3WNEyJLAiquwYYWn",
  "key7": "513a1sBer4aPjgZvuk6N6qWG7fC6fDwphY6FeAf3eA1Ab1C9ZScwzo4bK14uBHWhCNbB38po76wCjQqE2QfA9mzp",
  "key8": "3wACpD4AB32nHBsh3jqxf8w71TnyamqowH7UAnYxbKTNAR2ACT6949RvJLZ6R7hUGvNK7ZsgwSzNZkkCUTjUdYq5",
  "key9": "4zmfrNNmbgzjHZi4UTtZ4S8FPbPqxNbCSUnRRAvSvmJEmdicCC46pjkewFhw5hovNRWoP66oe7xKrdNyGv64nkzF",
  "key10": "hgRsmgj5jyuCnmd2mmBvELavnzoWBV3SAkGR7f3iQe8HggCzUGewzg9kLADhZBzU8iqfQkFLVANSiYPXW3gdwFu",
  "key11": "5VFpbEbdzqHKPVa3hot2JZVjN33J3ceT96ehixRuFk3ff7qum7Mq7LBy5itWH8YNHf14onVTFEf1hnoddrT8owPV",
  "key12": "3ZqqQ48xxScFU52Ng1Hy9DqcdtrmsA4i7kpq4ckpBvZmL2q7N9m6PFb3cGNsjmndoJAA83PG56jWap84mPvvFbbE",
  "key13": "59UJdnx9EAu1e8cchP4GXHQcypPupJ46eD7fWZHJEymDbLmF8GtLBWE8B6xdDgfCUgZdMixU6GanT9NLfLVWU5CU",
  "key14": "U6zLgQqxETDURZn94RUAaLcnjsS6FfJe5Pwch7nmQUkxHu776tzFu6D2AhzrcYU2WVwFPRrFmC59Mn61eD5NbG7",
  "key15": "2R11EHaH1YDhx6nDXuUYojJiY4jzeyYQZ77uq62W1Cpxk7cqK7AHmfsvRicfQyAzpvHYbybJMn5hHBoocF5bK7fu",
  "key16": "6jwGbZxHnfVdh5TDNd1ALtLKUo3SPDftzGDps8zwfYSynyTPL4URdyJ8dVfSVMQtZcjrNvthYYW9EzF2y5N4jbD",
  "key17": "5coHAgpXYchBP4qkjjA4FL9MMrzB5baKLbw92pzb6TPA5ujk1b23Uz4E4xtoAeD12VPMn6yrjMvaYSZZhWGKMsNZ",
  "key18": "5aen4vuhkmCYjKjrVrkuk4yjgXC3JRFhrsnznd8zoZd3wrQ8qsrwytqbdXtavvG3xCh98tz7LX3tomnsB6NuM5ee",
  "key19": "54jbbHGTrwTE5TMZi2a6REiT1KFrjduLnG25Fdt9eCtCN6hMCSiNypTNYNNeA7jjmBzLuEAfncbuFnfMCHUNv9Si",
  "key20": "5krUh9Ve8ioy2yfB4W2BXjrecsiMvSCQiQ9T3EZWHjnkwjHT9fPxy4N9fvzwW93ohmzRnc1M9uUWvNAHAS1pivTY",
  "key21": "2bKTrbWgcGCVk38fYasvRvEsuyzxWhzmenx1wF1ynnyZeEqqJGmmBjCxhdjsLRTuTr9gdHKE19PhRZvEhWezqenb",
  "key22": "PXkKYYhQ8w3bMLao9UkX7MyZdAbSKPPbzK5EnfmBJ9N1SvAqs865dVyvv8HTFKh57fHZPpWeqQnzDmYTE6b7rLT",
  "key23": "p5xVvdMp5koxBpTDYUVYFDQftRjiqSRkRiwmXB4n2vbtXavpEJBUucgVRDBSDDph3FDk9NjK42ePxMn2z1HzLfH",
  "key24": "5awnGpbYF57kJCwcBUH3CdUKtUKun42K2nf1choQfpU4LVQR3maTMapu61H5bAKRejfAbMa18BwVqRBBWhc9h9Qf",
  "key25": "28V8PBvtA5bbL53maopvjLDafKAe6zm1xf8Z5xAGxjZ54ATWg1sgtq1FHecJ1iQSWNKCiHQWvunWQgfGob6vidtZ",
  "key26": "5VNnHYrhdBjaBfNthacVqz5HzgVuFdyLr8KTp4iFHkJL2EzrJvrGy9Qud8uxqvmS4PYATb6ePmran1wHQ5fkjg6Q",
  "key27": "4a9VMggruc1kG8zQr26n9Y1AL7KrSVvxN5aAE4ooKcZZXcArZ8pCmWtSctd1gnabUPpxrZQXXb1zg2g8kV3Ahj8j",
  "key28": "43EQgQuzCtP8RCb8TQp8KohNCEhMvsLaNLPJFebqAYshQKKuiucF8sPF9F9JJErSd9iAnVUfA64zkGNToYwxiia2",
  "key29": "vp8m5CAHtM4hCCQnufnMbYT4C4hfe2XX5JfuoREZVy6mz273s1yBDuBxbHrbi3pifAvkgb8X1Dmzca29dMCv8nf",
  "key30": "5vzjYtbMGu6ADvtSVV3tSjPzAtnACgqQ5uwaWPpHfacJBo2LLbWUQr6p13EoxxgC7x93nLAeM7K3tUpnCurbZFyk",
  "key31": "vXALXvgKKAtQLGRMCyfmKXhG7DVkYdTbbwD395yi1uGJ8WCYUp4tCxW7LMrWNnajLPceWA2FYci5oaMrsM4fL2v",
  "key32": "3xn8VdirvUgpSGn8iRd8f5DgzzZeynQgSN4e75eosiuH32QboSZrC2by91TNpeM8Usrs12L5Pit34Kg29AHcBn2F",
  "key33": "34RuMXZKsLCrf3sSifr7dT7KNjoW2ZLNtYW2p14BEJP6iGw4KgpXn6kDEFYd1aFuXZeVB2JH6iiu7eFfC4ZTH8q",
  "key34": "ky16wkd9NjsvqEHj6i76w35S6dYJfqB488TV8vah3qwUjVonFZVu7Fy84nTiJNXXNrxuSmNTWth1mHMpAGrshtH",
  "key35": "4YA2n4V6mQLHzbXwWKQMbd5usnWQVN4eUd3Lc6r86kgVJAvxPkL7j8TU22jMY3rWAW32v461feDCBseLrTKpUj5d",
  "key36": "3634jfPQ4ggKakpGvZsD8K4f5yWXxGtpf5YLRkzfc2GTuvPGzCeMqi9v5KGW5womRfcXSAqiVan3eqSSi62bBPHU",
  "key37": "5pBKvLACfMhzigr3UeDSqfqcb5ZYfFo5QFT4tU6bGGorifMwqyr57LCRGG6TWGEG1cY8XiBa6QfeWYJsWq6krPx1",
  "key38": "2DyhfVJy62TfXCbJsmbjnZbeotXE8DnPMG6KukwR4dSdodf3dAvm4jboVAnsSgEjp95XL5ovw6GPQjqg2e8WSJ1b",
  "key39": "2d93yrRLgCgYoVHFtGNUqHuUfFEBLQesRmdeyogGMLQ8rFz7UVTJ8GrfvmqsH6XnURwcgc953MEAdfiXTUasZsB3",
  "key40": "iLNVHfTdCXix2yHLsJYVogWBQxDXVXziYoHBVbEyfp7qD9hjPbTuEJNs4FQ4qYMpJGfUweqV2cUxt3DKLvxzEeH",
  "key41": "5rqcRubeQnGuepYv11omCqaF4CKqc8AYVQSrysbGJy1tedykUyEBoWii7fkfCXkSHa6zbG4dRdhKAFbCvaHrGyNU",
  "key42": "2MokXoKxRH1tcd4wWPVDU5xEhn31TFK1Hto61BV7LTnP3hEZM7zVQf31YExvf8UWsRToowB52Hg6V2NDKhoTiTwP",
  "key43": "4ms1USQ1JKSnV9ZnE7tRfmUqxXgx1geB5tnivCGc4MbSTd7XUVFgZg8v9ubYVZjWhCgRYBER3e9QCe6j8LVC4dMr",
  "key44": "rprgmhwQiUtzCLoKeTY42Z9M8RScRNpiYHAPgAsRAfs9raPdKp8FQoXS9KwyiwCmXCjYrtirApUxXtgTCBekWwo",
  "key45": "CUUirYSNsMGjqxh2UjeaFh5KS69wPEeJdbSnhqz2zC9g2P94VPLyr5rVJ4NzYEePTQ1A8KJrdhFwVsU35PQAv2Z",
  "key46": "gtbBXkYgf6BoMecBAKg5CYoD9AGzi3pvcJwCBhYFUSPFmSwA1GNDUEHHaCVjh6XsfMUYEthQSE3arHWCwz9nMkT",
  "key47": "3jDiVSiHeRcbjLEegvGxgakoxcsrGcprBoGRisAvzHvvcpZeHeugft6Voa4RQNKjxUAykHQvd3JMWUPfieemdwKT"
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
