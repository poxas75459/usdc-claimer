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
    "5HyDHRs2gDJgufYDKCSgmgiszrvG2n1QCWdXcsdBpAUNuMuiLJ2ZUSUZkbeh1a4oyXUDUfSGSiAETY4rFixp8vtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q3SxBVC1SqVGa6LBCvnVmVzxv5C5LqDmqpUJTcQZk5hDmECbmZ5odUu1aSMtVkvaKsKsnKGZHsin6eMdu3E9phB",
  "key1": "541MLEmqYgA5JVATu7ByWJqwxdbw5ReTwmdraApWdEr2DpnXqBXTaeABpVe8UatsKoduZkXcqzJaFH539EgzKK52",
  "key2": "4mm5odoYEk8vKaK63pL2oA27ZRevGqmq4iUQD5ahYDuGDRsuFGPyB8F9nM33jC4szYNTd7NBayQ7E71dkkEVGU9x",
  "key3": "2wPnCWvswccjHZ1WPzJFFy2BbucKutH1k4T9rnzpcKLDPi5LN1gvzjhNCLZmXMkVFF78ANvN81WcDLm2kg5DH9FP",
  "key4": "3zeT8xNRnJerhTzBF8nsmQWDWTUiLrQDsKzAgwvPpKMCuBWfoaa6Ez24wZ52ssXohgEQ7mBvzKZsET6G2PMzQ3Ur",
  "key5": "5PPiZAugKrVVUu9GriDHQQRvDgjrjMynjPvsEmFK7ar19iVtP3XeyvKphXGuxybeV4sazvUeHCywS2gnDMWHpqYY",
  "key6": "2HBdHEfVMW18qbGnTbPajCN1hZvMWB7N9LtN6MW6ByZXmRJ1dJkdyQdBn5xMbcyRYhXudkgjDp2gjB1kY3vJvw8v",
  "key7": "3HynCi8Ti8AD12TwhBJKErGUEEMeZow2ZwrnsxdBnVvZ2i5xnispafbD2GhXm4uSZ1JeawNGQtGH4kHDz6TYdrNN",
  "key8": "3yMcDJBSuAJ8DVxpQGwi5DfwBDAGAFdnVHWqVKdZyUHiACeUNCwM5p1QGNiNFSRoRG8K7DVBjZmYFgWWmUjfvJ4h",
  "key9": "49tLq3S6NVcNnDLnX7JUEeg6aEU6irDKgsgSiYXtYMNPmHk8fKHWzXaPz3a9FRUwEyb7hamgNEiP3MDjrbMibV6N",
  "key10": "5VaNrBHJ5okqReskf5iES12SNeMprB53Vzh6HqWTSc2Jur8DvQMCThtYc8fy2j7j4EtLddsYxBvdDJtna7Mbt6oL",
  "key11": "4LduYvBqd3VsqPE3VnUa9ANiJ8GSU5wDSHwKpMEGspguFYFCaEbDBxqc8s5MYoMDfg3RJWiHYjBcUMJn6TK3CeUk",
  "key12": "5Z85hcFuVwx1kUZVjaNW2wQg4ZiPsKmggBkitZdifqd8NETUUX4pEY1yy8RuX4vf5CZ9GKaJDBaRG6M4Rwi2RWHr",
  "key13": "56iVcFxGNW6y17GhimWeUWgN9DapH5JmW3embGRtvpKhMy4o23GT1sf7jw99wNvXzbx6Agvebg8yZVxQEd7LxgDf",
  "key14": "3vCaeRqFKSPNYk7JEWKPVG9TxJ6hzXVSeh5QW3A7hb82NcRQ3H64zMVtSNdrU7B5fKu9uyj1Y7Xb5uE3jJU5TGfq",
  "key15": "327r5ieZN37zQ1TpWmBfPU2VYziCREicG7G57bX9bsqwhsXi33cDCbKkHeY7ruCqdG2dwZgnMVXhjJZgruxBq5Q4",
  "key16": "3Kcn4Nzfdxnw8YxqQaRPAV9PxPSooFyJMFFus8sq5Abg5kQ4nhAWmS3ZkAEiWP7rCubz7ctFxopHnnhZeh3QH1uF",
  "key17": "bqnt2DvRSE3dDWPUi2Va5Z4S7H1D8FpcshF9qyjENgq4Lv9yohL87jxDwURBWYdriGgysCpaE4Nyq4CfnYifZ5M",
  "key18": "5HCmqpea9LG9s9CE5fPNxdnGtXcaizL6KVc5Fjuqajci6srjw7tMhNBZMCELSd6XDDR14QyDei2BrN9EUxMM2acs",
  "key19": "5MXqkf43GQkQFjEpiG8PiSZ2WZg13ez2x4qFfdgPVeVb23NmwmaeTWfL83DhtA5vstWWPvfNyJx1xDZZbx1K3CaW",
  "key20": "2yFR9bEinhiLECTaezDcx8dKVg7xN4zpPADNGyKhof74nD15RePALLTcs1zjooCFJdaMimvCFJRhFWz6nATGbvJQ",
  "key21": "3W2Ceu69kwRFgE2536LD2oExZw6N2hNVmbpa2hr1i1aRpE2biNf1zAZVfyHjDzwnGaRGNwF2a2EnGFJCwHbKUdTp",
  "key22": "4DkWdhg2bfvb2JL2pgtnym1YDzBzuvWiests78iqiqvvw8A24Ps9FiPqALjFNnsgJiuZedUKrS66QhXCFMY2XgN2",
  "key23": "aUqSnBZGoNrmVsE9c8KiURv5K7mBnviajB6ThhKmfD5TqBy15zSqiUSRwn8t94GsTeXZuSPpGRqJg1DcGaM4Wf5",
  "key24": "31Z9inPsh1yuU7NT3G2Y8YzReCQjkPfW7tWHaPfkZQ9fUA3zHjhvEAvpG8ukLS7bzcBtcRe5rpd3hLbcqe8orHK6",
  "key25": "22HdaBnaA2FeZk7HkWM6P99Wdp9k1CHicYYAScvWVdS7e5fK8H86BSFa6WZCA3wongB5E9SWzCnajA1rp1DxkUSX",
  "key26": "2nLjkT4cZ9AwenQr6ceVQtubd7n51gP9rG1Y1e7H8871ABfpZteV2J6zmVZb9dZm2vvv5YXLG3Q5uNjJrtzXX9fK",
  "key27": "5amTWuL7WLjPyQQ4NxqjqErdPZ5oAgPRsWc3iogox6dmKBNsz6oa2y3ASoDyMKabseT4jFm127f8iPrm1VPH1zUH",
  "key28": "4xh4YAmxoKzZSMf3n25x1gvFKygoAbKa1H9unCqTusaw56abgpERg6EgTgsWZYy2d4y9iyTBwtFBMWvaW8tNvoKW",
  "key29": "5DJVHSZP31RUWmuT3pkDm8UyLh1UeL61Knmxru5jrBJyi8LiS1UQ6HAneWfSMVZvFRudcDEpVyGEqXgzMTkBKwJ9",
  "key30": "51c68BAZGrNcsrZxzprFxsnZ89PkMbhZMtFEDRW269tkVN77L3sdJHSsmL4WyaR6Rauc7oyMLKtti15XPjUDT4at",
  "key31": "24dxt4cgjmSW3AEgjhjxGnbAZMdXQjPr8i9wXfbsTEay1vERV2e1BVzjNLncU2mNbd5F6xM1MKs1KrbFT6cWYW5R",
  "key32": "2JTVaMDitJu3szPSJjKZaeb3v4pSY6gHY2PNrNPCSSREoqi5q2fszGDHEyY95ApuU9Lyr3yBXmoUT94zz83dS7n7",
  "key33": "4u8i1yYUYbp1RzfXfiKBqP5Epiwh1ZApqn2gfWxk2vf9m8e1DuZXjHydHtYxgoMV4SJdPL6Rd3NRmPKUxTn98nDq",
  "key34": "4eARLZwqdRVGazEjTUuN5w7E6aJxGD5AQVsSrKE8YhxWGykbgguBdd6GyCKUXMjBUxMeiye4bpnrqQbzju71S9r8",
  "key35": "4TKk6rZaxcSPxfweefzK3dUGZ76xtC9HaAKQ79p731avevvwn6iwyaWaQgtc9PbHhzEKhMYAdxfDAtGu5Jm1VoVN",
  "key36": "4f3qiXMGdcnLHLzQMfLL5AB6LcWGqj6qikhVB5eKqQyZLYH6dUhbhmtMMQCDgR3vUbuuwwT3aQuwzo6V1VoRGtVj",
  "key37": "4nKaPmXKd86F6VNDTwkwGbfqTS5f4GjPxH3hhVyNNh8o2Pjt2k4dAdJDrtrDupnmSWx6fskPqU21nTHA95D9Yu6n"
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
