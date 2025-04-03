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
    "5cTRJs3EeRjVvpa8YLEYyS7L4pQRcsDyerybTk9fPRuGoGBGrXk8AutFJyYN8QpVHY9qTjEDmky3Vd5ydXq5NmV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rx1pee68PUi9xvpcBeFxXA6y94dtvvksG8zR7TDXcpwHzDPVbsk4EsFo9jghwmfc3ghnghUqQnGeFU8WynYPcb1",
  "key1": "Aif7Qzw6Ad82sGLYxrKFSCFM3p6RVTzMSpjd7GHicpsbtKPimaBjNrxZtDWqRGkAz2UiH4MzGxBz5dxPYyXW9oT",
  "key2": "37QG2bQ7RociByThEwKGUwwfs9QrxvpzTYjTesmdzDLJWk3UDg9VgYLzi5aVrqqxedSmD3KTWrQnuspMotjavHVe",
  "key3": "4bps9h4HdAuWFvRA8DPw1TMujKmr8AkE98Uq73tod5YqzumpxDswM2t3P6UMhXdYLwBNN9Yx1x5SxCNhEb4oj7us",
  "key4": "3cy2VLyB5uRf6kUsLu28sTNRnoWMBCs2RhjhVYUhYJQcTwsJdRmm5ybBFM5Hw51bkLsvJkDMeaS4kj8vqAoyGwVV",
  "key5": "4PfsVN2mLAaWa9WxKnyXLSnNJ5ov5Y4xBBQfJmurfw6eX5BphXLq3wa4as7zRLexyeiVG6HjZQuLHpNcx9uf6mjz",
  "key6": "38SvGqG6yoDRfZxMBReXg23zhtY9Fsx2Kcj7D55UQvBvVXfw5SbcXmFJuN6uvE7PquG1wG71ysEMn2t7fHyfZvVM",
  "key7": "LEf8RU2mrn4WEXZpW7E1uwmzU8Fd2px8oasgV9kabv8kHHJNJzmBMuWfeQbPhFBXxKyByvPKSydZk9B5zyTKXwW",
  "key8": "4joSFVJ3v4SffVn5uTVuvy3R9pSs41KSaChvS69Kyu9ZyZx5qFKNK7YrucdSUk81oZM2VamXHEWJrMJkrms5UG8p",
  "key9": "4hKqKNko6crQ2LrZWwS51BafbM7BCudD3kTwWdkVchP2M8XKYU2EkTDi5XBPtzVzPzZpfoKTHm66PBfrEGsKaxrp",
  "key10": "4ZtLeXimcWqPSUrjdSr3LSmc96J7jvB1SodMW2Wj41kKtvtGXLou6AeFaPGpEtxsQNdS6bxYrjsCVJoqZr8g1QRf",
  "key11": "5opejro3VQak2wXQY3VQuqKqrPh5eCV1drn7GLG3CZQzg9RgQAbHpGUwYEoPWk3Qffg3ooProZtxabMys2WkZKu",
  "key12": "tMQv5Wi8jMznVwY1CdFn49NuUGCz96fN3SenaS1jmPChMJudtiyFzgXakfjban6j8oB7xasiAci2hMcUdc1DVAu",
  "key13": "3feS5n6EK4fFe5M8e2yCkafZwFp5YKbq7wD6c6wonRama58PeF1FDqgtwnW1unSztko9c5h6t3YRoeHAS9VzFnxm",
  "key14": "fd8SQCRWGeAhRh83V9bgJbfBZMZxv3SPntRerfH8QokinAVb9bnczC6Fahx9gbgJkvo1xrY569FNH3RgoJ2Wiiz",
  "key15": "2bgZxVPgYuDch7ptGH5mb9qFca5tnr73oNXGLXTaHuhgYMVknKdBkvq1u4ftjUzLpRDr32iqas3CL8Kc1AGFd9fj",
  "key16": "St9fUsNXefUaZLUwQ6P2gCy3TSetjMF5BJq3iuUiBT2iHT5NK622yHKLTVzgXEbRnLzaVqS4NAXwhqoiXWqxsgM",
  "key17": "3avSZQbf2FmbdGwRnEtXVnXFUaTiYviR8DfXpDN5wT3JD7RLHMTjZjT3oURCY3sv1uCJruqEiB5rdLWQNTiuN9Cn",
  "key18": "41gKVC4N6Db7tpSz4fxe3A5xyZE5i7RdxtznKZF7BuyP9QP4nYC9AfPhtdoopcDroQvYCW63mDw3Bz9cWSJZFAf8",
  "key19": "HYD1eXYNBTVq5SU9mzoaEYZKZeHKcaJZZw48YWDuky3hNU5m49sQvA78G38k1SXaH9q3c95b3cXsm4BRumapsrg",
  "key20": "Fga6yQFiLrnuD14JiSXUX6CRXvAg6cGyzZYvmNxQxcHd9LHHSHbJLW1tnXzf6baXwaga897UoRj2SyXB3C4bmFD",
  "key21": "2oVra1Gu8qD62VxKLS5dVokhgGZLYrLBjJCAC99Mc42wN64CqqYvMxnLf5gF6b8rh92keJcLZMdU35Vpi3FAGVYt",
  "key22": "2aTjV5c4G1sxiCJGQhqgBXr4AnMXCecejbQHT5zrWsGzb2oUGRTyEpTeNdbyPfMDQ5Ks9uF2J6sV8vxWnhDVxTbz",
  "key23": "3tbG6RceMBjdvyJav9hMS14anywxBGGQL8GPGFZZz5JexdhKB8YNbeZTXubTuJnyGer5uRyMTGswdWy9EzJz4XvN",
  "key24": "3cCXVRoNXXx3XujbEdcviVd3kLMnktU1hTkN4ABHJwMWHbjVBHFioSjgNNWgb9R564xpfpCyCQe81DajC9mZ2AiU",
  "key25": "3Z1WEK11gtHtPrTutFxKqBRGKDasjEUxUMkeUCrjGxZBA4NqGC1Aua2aHANy1WLydkstHni34Kioxuo1GohsoFwm",
  "key26": "3dj57H4KyyVLCwAdCzFxKMQohdUwmUktXBPng1p5GsFZPVZ3PU8UXUdVDwnEcSxmzgDEhwUYKxqmojYXyGMZ7pkX",
  "key27": "Pp6uwGAFnsTtm8UiCUQsmuQkK1dqzm9NDiRFc6mN6v8NHSC3QVmJursCZe2E3itKybK5Mqz8YYzvRphGHigXJiZ",
  "key28": "2X5qzTDefjXgAFe4zXGNApkgwNKeFFB8Se4AUioU4JTtzrTCFjYBk5zpjAEfBK3mVTjdheEzCTVD7gkNm1hF5nNL",
  "key29": "2PLesjBhMwub9sdog2i6SBmqzCxevCZRkv3idSJLo961aZwnJSEwEFh8SqVnh3bptRbn2xWPtLUKDKTPEqLWCEC7",
  "key30": "4CMdYK3Mn4K2EMz7wisQYSEnPnH6nuVQdCpwYHD6xc5KDE6PrGKHMLSAfwBijwjvnVNGvaXFcTsWhgd9TSB1QQzF",
  "key31": "55rvc36rCVPrPd9Le5kC2Z98dXCeAA4T7D7sMXy91eVgNuDCeMAQaBYWH1fLUMgnJfeJW3htkCCACVKEgw9ZPSfq",
  "key32": "2o4mkaFZzx5g6zYmqJfsMghEFhsXWZz1qLneEeq9mHxmcgxMD35SsvrGfmQKxQq23w9P8dJp6cnjzSfWGgaTvooj",
  "key33": "5HpFaCRERCwJYrVJNibSCNLynGEnq9qSmv3UePtZoMxg3sHWHmHwGuWbMLeqKneAyP1EECicYDCbHSVbTnYB96at",
  "key34": "3dP7aseJjcadso8MgG4oxd4gs58epZizswYuk6nyUtiajGdqDXjRtwoWEaLgMFMYZ1ns7s3jpBv3hSnXj71qTqJS",
  "key35": "2NDFZDbCHexHLSUmqVjEcuCQw39YCmTVDypNffcwnwHKFGSdqn4ujEYZms4YPtXskFAd28BtLBL1HFnsh1AGqwbY",
  "key36": "628kxqY7XBUP1ZeByuKWyKoWxyqkBz1eeuMfaPTb6gtBcuMDjZ2xWw21ivQspr1nm4gYQso3ZcW396UFgWejLPFb",
  "key37": "3R6W73Fdg3EJ7x88XcdeonBTqa5JKK9ZvTYRvvXwLwFmzDz1fx7wU2uWAAHVhH7PKgz6CDmrzV24PTr5sx89ueeZ",
  "key38": "3Y3NHoh7ZCNqUwkcHdPBCqky7tYHVRjWRJji7hjuukiKPnH8i1CAAxWCBnikZgi7ZvFZWE3A4U5EPLzaa2cVb6rF",
  "key39": "2bcDW4eT5P5X5WRiAh8CT25nJH1VtR33hAoXQ9gtspuZWCp8bJFK9qS875FraHqibRVD3eijqEbdnykeZKSjPtFR"
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
