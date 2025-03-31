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
    "27WW7i4LEmfFrmSffQ4s8g5H46hsiSYP4PX5ZavcJHaD1d47pBFvTD678thrpDnVE46ZyUzrpxhBsktCrWVYq9d8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57pXxjRpbcTe9dEGrmnfS53TvYVjyw7wVnt3ZfBaA2V7VJAidW6nBt8ttgvgywJKu2zMBKDio45uw8b9858soBBt",
  "key1": "2Z7Y2VcvggXDEfF3AECUNrVi9z5hgzDEHA4dR8TiDpJHUpTxf68mFn8wuqEKp7Tba7dU3qHby81doWmbaan3Yv8c",
  "key2": "5Kjekt5vArmyz4VGGov2jQRsA6hGzT8pYNjJKkQntAu1Wae3oaAWiPqX5d9jn5aKx5AXqrSAPyETx6eUgDEpbL6d",
  "key3": "2vS1VVSme1eYuSiY42M92YjpMbtnKmwF9cQ9Ahm6oCM4HUGz3CKApnf3PNHHdpDrb2157HCgTpMH3RhvmQU2ZTAY",
  "key4": "5umGzWgzjjHbqMBea4SppN9PN8A2KTMmMpRgiLLzrHYRyFWpbfn4fEqhHbKc18ebqmzvXvH3GsxnPFXbLdHtxeSd",
  "key5": "4i9qjxWjopNdM54gXXeMvy3Ah1UgHZs2W7a4nubJMkADoWbRVu7FZ88sQtvWhbEPrghRfqyrrZs87tYtEnrZzGu4",
  "key6": "5Y1UYQGi3vPsCdn8qAhQgyjLphkkgotp59esPEJ7NvwNhLUpiyXLWBBAtBZQorWFtNquNoRyp8nVCxNgaREo1diA",
  "key7": "5Wg5teGNqJV7Beqhs1NV787NfVMzigsb9BzSRpnDHK56n8o5qHkdEdTGK5NZYVnzN9RTGsRw2AvpSvTBxZXDDBeo",
  "key8": "4EbbnqYo2YyXP3KZJJq7tGP2tRQDtCSWGNHwWJ8g2K1184smsUYc3HGwDruf8WCWmtC1GkCSFm8ZVbWXwcVv356p",
  "key9": "3bJ6GYbL9GMe84mynKEnZc3roE3bznvirD1XhN3xaDR3bFLXzh3XbXrjfEVgsX4XW5EEGtk68VwJRuGBueNYEVA9",
  "key10": "2gNzSb3HqPp2aYXejEFckaBYWbZ8Ceu484ndTG5nF7snApqLNxViSuTPyviSRsgwKFxiQdWsp2Kg3Z3u6y51hWAj",
  "key11": "4FK9KMExn9kN2zG5VFQNBJEnPk1GFBZyGFKetAcnT9VjqgnviHQrx4iX4H3PsLMM3FwDwuBYnv4R4pYcQWiuRKQp",
  "key12": "4vCkdN2ZkLcW5viR15VFCSrzKqctMNhpgS92oCoA2Wb3dxPxND5J9fFdReDWuWEdtQN7goTjx3hDoLNfRsmLQuTd",
  "key13": "4Q2RoLnbx49fQaCkcMqWfS9t17BDvjSpHHm8ha8b9RdD6PyZyirbML9UVxj8X1FTgxaSGEj3NdWkf4SZ5RUWDgk2",
  "key14": "5ZQyabnhag9KLj1reNpGzQVDsPk5BaRsiwaLd3Xzry44dtavH7YdBPQoX9suk9oDpK9oaDNa957vVZfVWp4sVqU6",
  "key15": "499kPEgZN13UQM35C7B3xNQoyQzWtPQUHKiQmhL2SnPsNVbmtTEw6Ja8Uwewo58M5mBsgqyT6P5SPSwSP53xXsJK",
  "key16": "3L2o4Bzt6US6ZjBxTj1x4NgdPTwJ6rg7FLyFH92PjAxvvaNiQkRCSUYmuLgehHtd8gXbZYoAQMS3LjFA4WRRqHT9",
  "key17": "53AyHTjDro57M9rokv9bdgH2ydZT7bafB7hY45apCvzd6LY5iqs9m3myjRxXENbW3RMS3qPHrBG4LEcGbLhGUFPu",
  "key18": "V1nSnjqR9mYLh5TseWTe3QFoe7wFCYoZByGjTJoxvzAg7xRHduygTg12BVfPMUT3WSk22fkGhQNEMdf9kykCoat",
  "key19": "g3tVcs75gsPqMVFisDqhQDbRhhnexj4KcQm9MnkbfRvbXX3gGv994CJpDESD9Xc4nEPgE55ssfTLCxAJ4vaQzGh",
  "key20": "41Mi837hLDqnbWVu4bvTyfJeBnbyGJBBhGVQZjxSNwjuDaSgWsAzGHbHeHExLcUbBLdfEsMFnrQfzdEMbaCH9wmS",
  "key21": "2UfZUnj2jQvFyr6QJ9DkYaEeTiZXdCNVqUadorVUnuHHqYug15wziJcDtyDg6Zy2Lmg8vcrxAcqunfBCmV94LAe9",
  "key22": "SYWhHLgrZRsWAeFNq1bvMokbCMvGQRketvD9amRSDyEkpKYFXvP788MGi3RHtv7FvF2ADdayZWJSHArjxo1esEe",
  "key23": "4eX5LqdD7EsGkUkch9bUdmk4jJDpzj2gd21qC3RAHxD7yt7mPpyC9ZeTC5udE8snRG7BeRL33P47jyn5y6oBHtJs",
  "key24": "3k1V1dcAz166UGgUjUo3wNZnjgjwkcGzrgS9C5BMoQdQAYRVeNZgAFL5dpaN2dYrGPiT5c1kNqMKPYNqvJGYhyZw",
  "key25": "pgNq6Fn6LGioJzos2uh7QbRTUeSRdyYQC2KFAUB84tZsiVQ5px2DNHa1ThZhqv5Qnfr2TkEvo6x6RtkjkmXbjnR",
  "key26": "2U44g8R54VE8aRRtTeEUsVjeGvgoW63t1z5c5VpNoodAah6JMHUM27f7au4R7GRZdUbJJZmuU12YyCXrojAEWHMz",
  "key27": "gXTigwpjmSJ3bRKWz5Lv1KSYaBDug5DCE5QRf4VNhJX7PMaoNymi2WbmLLemCjDiowpZwdGZnXTuFbjzqPDJtJc",
  "key28": "3jPBFQXy1D7tMwwYhGQUwTwhpBfB7ygp7itEyb6gwEsUQQ68YTMPM8GX6Vgf5twhiHrSnM7Je2zSFNtd5Y5sVVAM",
  "key29": "47rW7GtsSznJdAVUazZSKaoYWWjQW5jt7R289UNVRQZ2U9pjfg5qRFHUVnop2crvoQzYDgwg2sCc7gXYakVGDhuv",
  "key30": "94PF66Zebtb3uWzSrRpgLPAUuvkmdSJ8dT2i3mLEfJF6BqCx19aW7q43nBw9j4nPKnNvNgCFMJZC6fJk9hUpgR9",
  "key31": "2v4jLiHNx3pgHifmUoHe17McCCFWNCFmdTUUs3knkpNDEyiJqfdwZCMf6N2DmJiDr75KtPi9raA13PJGLHmBeXh5",
  "key32": "2oVXJtu3v6YnbAGkEV3QPRoCAUAtv4kD8imknW9Qm4K8gWqkdtzfxMAmNsSoST3yz7u1RVXZzMUg8UARjiMLmtta",
  "key33": "3jVTXKvcSCipZ8zZ7yViqSjs7qcJ94Qc3syvV7526o1rowJkCFFJQ2VhEAXcQCjtTE2Dr3nWUkZ2wossbCwRbCiq",
  "key34": "oaqG7v3dh6cX2HWd6TCXXKhsK6MNtnWRiUTtmmXGhuaRAPtCydfQda9oDYnxCshbVAUokMNbJ74wM4HP5rvhYYK",
  "key35": "2SeWgy7c7dAmWnkfPcuKptcChmd7RBKJWZyuBpNCeTVsK9pDi9z7w4Q52YbFurTfLgA4ori8ktv9FFVqfS2aXTGU",
  "key36": "4QVCZwacFKLyqtm7Uypfmx1vWyKp6nxwJrQFLzhkdt56LeV44JCntToihoAKzD5EMehcZnBefPUEcwLkf2MwSK57",
  "key37": "52NuyHQQg6JVWpb2P5e8xjuMjwdg4XY3konXSFzJ2SVDY29vKbhjQMgSwKAzPJc5kn4CmsBqV4bE1etRM8cTqDFk",
  "key38": "3v8t2kn4yRxDivLZZsrEjhnMkCZNNNmenEhMAMzbWED5BsmEspFMEtzPk1XZLG6bugdNdUWXxD8YWyX2UPz8EWjq",
  "key39": "39MoWisA3v8R9pm9BydSV8k93Wi7knuimQSnz6W2A6zA8srCAXtdzGXoArLqKk7WJLVzkH74cLvEiHga3wHeaCFh",
  "key40": "3UMUjN2JecVTSNpXmAbmyJVMudZXdpWCLHRXHV541GHr41JLMv4C3nZUuhL5Af9MFyktjUZgG81vdA5rEbjMBKUx",
  "key41": "7cykmmXbDUjuTHcfWKiHdvmaWK4H7Mdx6eiuNqREHYaViL1wySWaRLWkXcqYJysJK8oRss5RMyUbai2KLEdPVuH",
  "key42": "5ebjxoX6ZM6QYeqyhqPbhkdS6hiq6d6iUH5Z5cSpgah5E3yE8penhT9BYGGEiG9phbD5wzoELoPWHuuet3rvm3Pa",
  "key43": "MYm6aW9gg689uwewASSkq5uNTLa2HphuBxo8kxNMrq5wpqAXp8cKhgvLRK7Gv9idkLEH1wtqsjBCQNweNz1nFLL",
  "key44": "35PHS81aZ8XajrPiGLdgw5Dn7KTRzB6Ts5Trhg7DBs6dAw2pjfP5CkvojLFWrwrodw2JAUBsj9qKK6auEgbf3o7A",
  "key45": "5avC41hJQ6J8duxLi8CMUfYKNGkrtsvRxRdwABWBDW23BxCBgkJvoKAMoGBDCFQY9qQo4xPe29qmcpEBSnf2jBAu",
  "key46": "29pa6ku8Rfepz17GFFe7jN3dE76v2ztCVpEmdjpDroNjBGjmCo7kiGoSdMefAo9ZgzWfZEKxBT2ESMgHY4qCb9c4",
  "key47": "3HJvaVdjCzWNT2adyUTrEYw23PWsEMtXV9e6y2B2PPVxUyeZ2nx2RaN8sgNvryGjHJtoKeiedMYGefbLwrJvMvBH",
  "key48": "2kJxySLsMTLTtnduArNVYj7R8kRmBT14CYJ56pMbSCeCYgXFzsaGYEwXj1vd6gq61RD8gLXQ7B5f8cVtESfpaE6k"
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
