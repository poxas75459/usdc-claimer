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
    "3ZwjbXodwSdWXozE6R6QDYYcAqowA3wkdBSsC6TTdUf9fnCxnQRyHaVeZsdsz5UUzJ9gQyaN1UpPPy2zTwy7YKRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WeC9hwoW5gvBgvzo9bchmFis3XHjiecy55RuZXkevarEgMMw52HMFY9GyoLREANxwqZL1YoxdYemK8ni8aT6gyM",
  "key1": "5RuV46s8q6StbLQtQ4yXvbqRWCw8yLmHRQpmLVLQMoyFKxbFBkgnrzYhB7gPMDTEsmhdL21dHxL88iWynedDrJT2",
  "key2": "61cuwM6reKefceBTM5H67kPuCXfezdERFsCotoFksNABuyMokKTbmX62MCnASZp7Y2d53i7h34NxQ5J8Lqb9bBWS",
  "key3": "3nNSsWgfyLqr2WMjHvAwR89SezrTT4vFxhJyPTBEWAeoexDXvmdc2g98SqdESQJPeNxA9AEUR5pv7wCmUE8igqiZ",
  "key4": "3Jdx3VWxnrbiiwQYc1tgW3RMWweLfUNebwP6XmWa8rsGS8idwiPX535JhWcrPwc6XdrkLzLLEuqjwPuMFosNBFfH",
  "key5": "5DqVCgW9FbxaughCky4MjvhvYDjcX6rhGJDoHg1hXswTX8ZYWp2pQgk66xzszdk2RyBFpm4GhrfWwhTpJrzWjFSr",
  "key6": "4wXmeE5td78h7gQpjBS4c1CQXAaojkPYGcYGxBs88B7dUsoQBp1YxDQoURn73ozUiXi6CdT9Y18MYv4XYfjGUBtP",
  "key7": "3jZNx1wYGBVqaGMzeeTm1wcNzRpgrmH6HGFr5UoAdQAUJmEQoW8USDQHesfKPQjwtjKKkgFeJzzXaa4CLz9DoYSr",
  "key8": "5s8xuFqFgX9SH8Y7vDW8jJyHE9m8FwdHNWHuXFQWnNvXF7EF5eFycEzDpYHhEah2bfiBEJHn65UDgdWV5xb94Ca5",
  "key9": "oeZymxZ9Fg25XU53TyRXDrCVr6rvTWLCNJgXGkuikyFdywta9Qv7Q1dLBhEWhoZuVWCfbkaus2QBR8XEpqfFEb8",
  "key10": "544S3nLk7yHWtCiRL51knEBsvsEKTSHqEi5kD7b471oXuzh3YsBzJYieeeDGXCGgQfiMU6o5y6seekdBi2J2VH1E",
  "key11": "3yi9Ewo6ewXfN5cFQK9ubyhmcs69MaYqamEA8j7k4XcxwWFBqsuD8M1VefzPxmZ7fj6wd1dgywu2GnuzXz4aUCc6",
  "key12": "23GLEPGjAZTQDf78J1qLsvqtQzzYBT6Nszd1dGAHwsKA49ccn11MA9D464GHbQJqUqJrYCu1c5fNPB6YM3JirR7i",
  "key13": "2JbB3VmvNCsfShGb82wrKkkApFJqzfiEsHB8sG2KgYdmBrZ65MMqk4EJh54EQMjke2HHaeAXqe1kQAVE1pgkpRFi",
  "key14": "2Zc4jpThGi7sBzLcvxvEMQ2xKrvAt4pXbmqS9ZqnGv9kUgbsgRBVAEXfUuQBBAAEVupnmpZi8w3zmyBnP4Rv2hKu",
  "key15": "3Y5W4k9S8MwMZ5SwrJefmaQsooebx1eKU9QnR1B5mxdM1HGpoVk2BjVB9d2iE2S1DtYBDaG924j3KKZyiqQPjrbA",
  "key16": "4k1RQdqysy2SXvdVX8WAhzYo8p1qhcU4Lx2PWS7AT4M1gpZqP3rCKs7DuZfiPUq4snKrxEJwKp4UBpAouc8Dd4LS",
  "key17": "2ZyCddkdbFf3XotwnmbcqPAsfMUErzkBVQPJ9xKrx9YXtgTnM5Qwo8YiqePskFQ4RztgjBATEMgvkQd3rPxN8CJH",
  "key18": "2L9aHrfGGzA2qE2gWYzW7CQceAnXSQKbk2xvfsdorvG1F3vVyABye5kbjhz8uxpF4ERJhm1mJtHJe4gaaYgxsHpy",
  "key19": "5XGdsn7YN4XLyNTAPECxnRLGw6ihJ9agobHgd68APa3wA32oo4zDHQ9ejr3eZ7uP8C1NCi53e9J4qXLoz9Bpte21",
  "key20": "4PoXjdYTAuJBZcUFdEDu6HWFKiWsJAcubr6qyrvR4GiCKCPFXACBQub9LuVFKxpw9nNgEC7aDprVei6pddBc9K68",
  "key21": "4SGWMX9rDU37qqgZxSVE3Mzs7e3pYhFLxyB6rE9L2iQPW7nvydEztzz5PwFHjcMUxi5g833E1Y6UoEMRM4kXFnrR",
  "key22": "RKkXfMQHrr1GK8aS2JgM5d6i2AdrHXXQTLaVkAoqa8kFmETBY81FDFTVeyKWvbDmp9vEEDmaQ58yhLfkTaiJDF5",
  "key23": "5HQEDcqaYdciAxHAKAEZwN9F8tyaZQQds8NSmHPTL4JwPygSrtHmy3ruARDw9LKRAPNqa6RQwFSZRa5TxqJUrbG",
  "key24": "49T8sKrGge22ke8mtTj6YMdi37zaG7DDrSeKspqCCt95fVtKHLcRY11rBqAJKUX7EbE3DY5UoH6opKfLyUbKcH3h",
  "key25": "2iNsWVzdDEfZh9xkhm8S3Ti5s3zuBVv8zKoyF1CAAGc8ro5fjaXy4AUTXVVN5NBkpWmVbtFAMUwHCqVhCwWVWbPj",
  "key26": "656XDweAkRQmHhQqZnhrY63kaN6wiwVR2oKdn9W7BZcZ6iiBAhQvhFZKWc5AcA7pxTYLLT7NiycfpTnjt3z8379S",
  "key27": "3B9UeYu26qQdUHqmLp89VPfFTvFLwy2iQfxLekezwbJcN1v3PNcBaXaW6otFfrjVWo4HHWJg2sz3sVEsXG3NhatX",
  "key28": "4fosrQVdnSftn6heWVzB1VNVZjhtsTjEqaZxLKFhyLvjRYSs9TLvLGLJab1mmS3E9p1Kgw7L1yWs71XSTya3YZMn",
  "key29": "KTF6tC9PzDUAdMtnqHT8xvv2nZs5c9qMwcLoauRiU9gujVEUDYuDTXjEqarqhvdMZJYLu5174tMKpyBvycvbNDA",
  "key30": "4kbp2g2bopkW9Wmj29V2fF3d5U23ovjUdtiMLWpAphfauXjEkR7jh6iruRfsb1SnSQ4dRp7jJXCH3gCr1wekd8aG",
  "key31": "5r5KfRuhrEjr5C8ax5YGV1EpcnFZrt88SqMLMm5PccdfGzGRhnfFHS6i7efHgHLeNzRaYgmejYFJcRTUZwCbQtMT",
  "key32": "4ErBsQ314W91oRzKAWPNtM15q3PiurgJKunN9h7mfhwseZWqSv8yeB8htFFnDyUEMqWNRByu232MaLGTe9VwjwUa",
  "key33": "3dUSihmSzVDxLUZi7WdBeJvqwsN4K269MknteeemsL9a1E8ECs2mVnU7zFGGkSTiYKGmpeur9EADVT6KP1H8Bnbf",
  "key34": "wHgmFFTa7hF5JPex2FqHjn7gdCac7twa9g4Q5ANkUnUkLHZFhjzNuDYyxsnAEpMx59dW1FEAS5tcvWp3weWz6tL",
  "key35": "36t8U91bjhEy8VsGTEpmEUyPxP5os3SMjKe3gp3KA8zM7BRBDk1EqHuX7mqVUqiayNfoVvQMZiYKAcbgPzTCj6D7",
  "key36": "3XnLQREjFiWwZrTLThYpQS9ETHbP2dnKHsCNpS1AHdPVPFh1iygucGE4EySTVcEfzYrHVthh6gphfeR9FseZPAuQ",
  "key37": "R2t3JPSUMMR4aqhGYm3SFcVA4hLaYmf7JHr11emv9za731H5kuG55X2sNvm5F5ZAcgssLHnYpgxryp2afBVTqhL",
  "key38": "zFsrERCj3iMQggPZd5WHQGGWx2F7XcpFe3dN9WZdHB98UhQ2mbPW8cUnPZmiZukQGVyKzHiWBcjqYLZRUkszDQF",
  "key39": "3AvRySjgAomzQNkqMWvyxnymUiGsU5En2kGSSXCxJ31gt6uNPjPh1njVA3iPNC1Wv4YaBktW2dv1YmCTGDYfqJkL",
  "key40": "3cWQZBtCGZqipNDBTptjQQjGjyKZf7XMN9EPLPSRsJ7kBAXwELM1u5mqzDJtJjrsSu96m616gcmbHcCjw6rqgGbf",
  "key41": "5J9227BSN6wf2jHqGLUDhPHaikHtAEaWJqYBZu3hsDFCrVXL2SdbC7N7LaVJtYkSZ78JKgNhoyaZMFtfhz6MFXRX",
  "key42": "GrjKUxsgUZQ7jpay3DFEAM74v2p4uY5nraqsCx2EeZPyfP4GVJMGSTedqsz2ESZLXEQpb9tQCDqboowRLq98cnK",
  "key43": "FeFrJUUZRoAk7ZFk5JdZHSL1eTu9UvK8nD1MyHRyMLHZnnZ1fcvMRkqFgi1E4MYv9UM64pEtQegqzamBxu2AthL",
  "key44": "3jVgKbwwsKy6Z8Hfp7aFJ8hPQ6haeLk4xynZKV2gcUBxXpqeKFpHNLE9hWAcL3sDN5gXHQ77Ykbex7Mgd1W8Gcwo",
  "key45": "3RVxLJbQLCMFpLhoarsAuRgrjxuyXGXfLsGvMVAcZpeSecuFKxNc2RNw4HYh7yhR9NtwPJtd2D7pjAvwRPPgEL8n",
  "key46": "UWExK9qAQ4LLtSFHLCvgHaqzrbJPyiyLZf8MtdmipCVSjZTYu5aS2EDn9uTj2W8NTNXqsLvtHL583CiXi49aBMV",
  "key47": "2sPxVqoGygHpecPnKmTcsu18kDnZDm9xu8NviEoZe7LchjRGmToD4m6TwUK4Ndndw1Q6T8a8jRBX7c1ZKP2FAhAH",
  "key48": "2woogkJSFpg137iazmHqXXejFq6BgnKJM2NofGUySvqKN2NjEDRvGaLFnchtEs3Ygr911Xw6YrNQeMePdZYeiyeW",
  "key49": "35FEXV3nTgjwfN1r8GAGPeXVHQ18b1FuhvP6xKVcM9EoU74dYdJCf4hwn2jGh2DofaUB5m4TUBYc2jDKUaUNWtt4"
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
