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
    "2R5ke36sJsHnNkoTtaoSp2fz2Kb1N42u6Cei1bocnxQfUrwc5gvUpRw1niFM3oxTVhDrasS9pC9mbwHKSmvnK3Qg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oJgJMXq5ksWDm4qSHKGVKraSXswDTSfoF6gJW6sYqU3QCf4HWVq6iskudbLHno7ie6Am2ukhjREHQ91BeXBjyjG",
  "key1": "3NV78mx9KFQb9u5LsdpCW2FYAKS9Lc1qauJsedcMnWztQ91LKExamaxEBPKTY7FDWbxWDNVCycR3FuyP3XigEHRF",
  "key2": "2x1EKxjpY9SGHrrqAVZbtxeUGfjggNGVmEKbFgCJPpnfr8VMz46kvXB36jvNTdhFvs69a4tYY3FFwKnRAo2qU7ZQ",
  "key3": "34L3h5SCvZSXvfRwXfXGqYZaeiwA3brterUDrBhbPZSTMbZHRqT2rdXwMY6d134db9HTmjNpbcPTiMbff92FtXsg",
  "key4": "3DUCypzpRx7teY49cTcVFhhUTzymKFr3fbvAJ1kQo61NpLLbNaWW3AvyReT1NgxjFBojngNjHpYMgz5Dfr6iQeqx",
  "key5": "4hgci9ghK1pxgHxPvMqWvoWXDu5qJWQtH6xHecyiVYMrNWjAPPDQuyb5hEFi8vXQ9dceF6QVWfamfSncD4bS2SMK",
  "key6": "yMmkDstwfsJXtKZiZhTRTkD1okF78kxo3No8cGYaqCY9mXJqcRt6NviYMyt3rqYSDb9gY3dV8En3or7YUQoM5Ry",
  "key7": "3K2oE5sM9CgVQvGy9q4LrowBZKMfsgs9FAtyp2P2Bm4fxXG2eMxJdppJkiSx5fgbSFzcdgA8Yt7x7yLk26Sx5y9A",
  "key8": "GEu2ka3ufMY4uSs4iEzHc2we6WH2sgaj6eXqjnsxVfHVK4KA1eZ2KUaQSwa3UryemBmsYRH3piTuNdeSfNfraUd",
  "key9": "5cGrj8yLC3dcMzUqdbyDXyKvd323r7WPvfmKmavwBbcBAHtWEUUkaA9ekdwgfFUhrJ5ZTGxwRsnd1sU8VPeqKHoJ",
  "key10": "4Da4uvaaFp4RGiHS4YqBvAFLMvgoD3vh7b5wmk4diWT6TarFeZkNZHrdZX2XBHrZkh57XzryLrVHGnF4Swbkg2sS",
  "key11": "5CdDRQi8BY4WcaNcWxyn27g3rm3ctx9hpNvZZKbZYnpQWYj8hEw6g7u3dzUMRwCmBLmc8kqDTmdM7MzVog47e93m",
  "key12": "2iuwcsiBdd7Wrdz1uenq6sP1g5C5H2kCEi67Wb3x3eJEg9XnLHrKnxEM3S9xh7ZeBgfsXsY2JsBe5jN717AfmSMY",
  "key13": "bV62qR679wPr6vANPuhyGSqd26RnVA3kLcwRFW5dVTW3NkxMvQa71hGSLz5qarouggd4nTbDagYkmzk9QmECB1R",
  "key14": "5ZBUvMKGYgJKjfmAZagHKMSmP3hqaphz8yEvnxTLQTy1LZ7Wj5temrA1yLLzj9vzz1ziHxsJYcZ885vzsLs8mMv2",
  "key15": "3g8EVNqXSeNhns8QCCuKuxK1F3Ys5EKwm7ed9NrXraeVD44YJBfs1yprXATkQqcJHMM9rBWY9sB5cAqLHyAd6DiN",
  "key16": "4ejEAXAWQYjTm6AoxL6b3AYUZdfS38vLJdmdmndh6BHpQvGM8EEE4GM82cPvpXtMHQgncihzVTV6W9yi9NjhR6tv",
  "key17": "4PUZtqYSvGFE94U5j7T3v2Fwfs6yU5XLg53LJffH17oe1AT5YBwWBZLRvcn441Xv1xzWnwgU1NPcQnygvxobiUPr",
  "key18": "3nzRYmLpqaUJrWEgXUVt3fbTFAy5fXSRtELgwmwtPLcxRNYFLTSRrjRYa7T9BUQwXvuGTiFKnohnQdRPwEgD5zsC",
  "key19": "2zxbwK7o2comjQvMicAyYADYiVMYqpd1WoDpzESJGkrNbxtVGx2LvYwDtdunR7NCQ7cihU5Zkn33FKHMMHDFMgWo",
  "key20": "5b8X4p5HEffroeuL5huMP8Swx9trUyX6SmALfHz925ikh4K8hrtxFCMpVyrBhsAFqRxc2Gmz9oXeJibhQvMNWXia",
  "key21": "2sT8q2Ruq1x5su5aj6eF1XQzqQVvXYNX6J4voaFJCn3FsFW7aC7Brd7XioTKw7enP4Rrb6apR2Zid26JgmJ4RsGE",
  "key22": "2fHoZJoUpoqJ4T77ebjWY89uwwwouj8y8LwpFYnifkcrEJv5SnUxknm87QS9bugHqZepdQJG3dH1E2Y7CiZFnQ6s",
  "key23": "2VneujXGn3XSz6xawshFuoyabnUbQUjDtMUrQPHVDeP91peLLQKgpPKDaK2xMKu9R5FaEjSZUhc88gS6gRBy2CC7",
  "key24": "2f91dYo9B1UVZqg1p3JHFQjYB1kg6Vkz2vZUGUHXeLhDyfUBpWDoVmuWzV3eno5JgPksRDVL3Zkwd65p6bqwdBCZ",
  "key25": "485mnWNPfNJrhVc1SvdBksvXertvG33D2MY9q1Na7aCq9qDESoGLHiSMTeu4SDF91NyQrTEFV4Gsq2dL7Syuah4D",
  "key26": "3NMNdLfAPZrwCGocwEzayt4P3LNPeqDKTrrkAYhcydw8nQdwUzDfXsQTvd55ZSW4CjaG2Q6oMJGN8R1FzJiRfyjE",
  "key27": "3uSC6eUagAd8QtrVg2cqphVVrsSzqythCvPQ37UkJPEVgygnSWUso8SiYQ4FfBXRVRtXBbABfFG4rWqtaj26fQSw",
  "key28": "aYi5W2QgsxhZcYm2ftwMYgmPFH5voSr232ABVAySnFsJ1Hpg3CjgN98d7CzymuohbzkAAuoZMyZr4tAWHRLcRZ6",
  "key29": "PVx9ESA8kunFCAWaXyFiv9JYdSnJuvB1t15fJVJWe3Dd7NQs89m5jLBRud7iCYR7f2ETXG8PdZ8kUrqMhsiiVXp",
  "key30": "2ifMCDERSzkBd3coryToY4ut32pAFBcHfN75NgzRD4NeooruiCPxNDwGubJ7DduupjYsHqizyut46ybAdfrHU6VX",
  "key31": "3zyh6zSiDVRgNuQ5cP4VeT4FMq41jchVQwSYo6xDigEN4ex9A3TbWmoWWH3cQkPd9Nd9udhYs8PssUNgDjHRtAC3",
  "key32": "5G65K3KQQfDtdcCj16isTf5hdqdohG4oomHeAaPdsoDaNczuSRSNfnTE6x1JazeTTUKo5JSShFTq6HUttcdh5Wck",
  "key33": "3Ha2Hqn9giJuBLcJ5csSbTjmuc8THn3RgCJbWtr7spo3tNg5eUcJUdBK9x95hdNBhyzHPUKiWDxeJpS3F9AzDKCP",
  "key34": "4Tygm2hiozg7DJisY9djcVneHE3vTszcT1sfPSnow6GTveyBjV2d2aLqcqf4VNKV48ccfFXvMzCyvaT7ZDbn5VUf",
  "key35": "3Jd33Ut8ziZfoBx9Fx3EDbYu3DMhtsqR3GrLJYJoQUcczjaFRRAUan7fNZ5XJaAWehc7UGdGSr124hpsw44TKdu5",
  "key36": "YMyJNShPDstpe78Gf43FXtTiehia2SHKoYy79EeW6pv3dthkV8cqLxPPVsqNXUj8WxhXmruhUFiT2mAuFC6Gs1b",
  "key37": "2pNRZuhM6eBJvszTAcXUEdH7nQ5f7LncvdDkrbkpMsdDssM6ETgytJrKiw8Fx3RMpHFASmsgLaep2tHNdaJT4Ls1",
  "key38": "3uczW5zhrTW5h9c2t2RYHHQh4QYCDHavDi7pJmVUGttBicZSpktSWdyiF2KfsYzdnzKkktcDurQafmhLjmGUxUJZ",
  "key39": "wNpsAmzH13kHdpk8ZfX8AfNtgqiMdkZYnVU7K4EgKvrhGTpkwMS18WdtYwGtyrgqpPZjhGBt5ByW9S88raxWqH2"
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
