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
    "2kWXvX5wihqkpCmWyKksca8E7hCXNRz5WNMhRvZQP8qSB6KcF1fRhnFeA6cRHTmnB5EHM6jHyqPSszG1wWE8cU9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sfW7pVQVzwwJgYExcPb4ywihBHq5Qu1pdGJ2FVYVU5zumS2iAhtqonJvd6o4CFNifFR8NXBd2UwAuEqfMwTJiXi",
  "key1": "3jU7EvjLAKo8H1Ntujvsuj3tLJkVpPpMfv1J9kP4wBm6DkV67PNPjQ8vYuoqbC7BkYFoD5eD1rbXZGnM3H5TMvjZ",
  "key2": "4iynyr4ppqmaSDw4L7PdsHgo9UHGDfVi5n36nUY8Eri6e4NDRdLAkAtciEw1keZaC8Wtb86xFy1Pw3qMnRUcModK",
  "key3": "X6p68rPyW6oiHb37c6knNDFEMnpaehPS6quokbBevPudkXzc1tYHunCdez1fK3tQtFczMq2zTFpMqDx1JwDenjZ",
  "key4": "5aZY5AXsdNpMWVp6XpEJriomBaw7hcJNWLC57LPBJ85HURcKY3PPFjkjYy4REj5XoSERtGnN9pQQxCzgP3dNXh1z",
  "key5": "3kdDuKS1bDJHNG17PEfukp7p95cjoRCkMoLF73rzVdAoo3cUd2etnoUpmo2WxwrH2o1Ui8BH4dGqadVebpANRQR4",
  "key6": "463dbsZ7UCGkEGE7HCira7tfFZLtgAQmexrXY2pNqKGo1pHYTNLy5hpbnZprabRW3EwRPCvwPMH2SQbJ4nepfQNU",
  "key7": "4BgDXGDNbzn3v7EKzv3bXDpn6gS2azHuGwxzgNVCG1p7JoxTaGAtRD6GwUCgWfpqU9zmQtim61cvGHaQty1zzqaT",
  "key8": "24sK5QsEoVR62gEtHVsh1kvNrWAUtkRdyYq7cTuicoc7fHaJT68uYDW8yDDye45dtQv9CnrGvFDfBLnLUYDucV6B",
  "key9": "eWmqTRsUK1zfk2dd492DE2gLYFp9xwk8U83tYsnsyLDj8LyE5NnCjhXD3jMaAPyfSiriHo8iu1Lk9rMV15Q5fXL",
  "key10": "4xqY6NVGn6VpWyrF5RLpCmLy7fiTgLSqFy5wJ4Xng68jKUuUkE9WuQBHnamYKvpxLe2sHDEh8mvSHdokP57VFyuB",
  "key11": "5fer8nhdeC374mmCSn6YoChH3Ssgn5coK1bNcGYkXKydmxVxg3ALXDCY62H4JQRRx8ahMmujvniBY9Rn9KJwz4EU",
  "key12": "4tMM1Rz7FkixjVEzaMWNgwWV1pApQFzk6acJ9NwM3VrT8tXcssijEx75AiFvaoNwGrCtbmeMCKM4JNFukMPTHsA5",
  "key13": "eHpWKzFfYFupUWAmfgWTHWYZW8iUTa9HghRdCRD3NmDmkWvpUGbm8Ghiyj7eZm9scNxa9zQGZ5PxBmUVfuf7R8U",
  "key14": "5QWRHdFbVqL6txEqCHTfw933YVFFE4URFpLVguGHSSq1E1ynBAsbNp8JCJ1B4jpztep8QjD7AVYQywcqwVkNZDk9",
  "key15": "3i7oB8iocu732Uf2KPfyWWzgQeodZ1m1uucNveUVLHPHtqGsPam2G5qTvigar9N7BNY5UwfX4V7XQeKP85TQJjDq",
  "key16": "5kuxwuvCnAqRPPtEh4w5hnoaLW1APxwda4iBX9CvgeBEXhUaUewXNPdH7xjAP7WEpYocoBQSWH8WGvFU7LuGfyaV",
  "key17": "5HFEBLwQDuuzNtbmg5jyQBv5AH1AcF7GK6XBxUnY79cMemqWut2PfEYPnoQbgQHoWHHrzLtERN24szb2P35but9D",
  "key18": "9LYVvvh46oAXLTsiao2dU3wjsU4qecYvkEiSrdize2oJiKKFcXY7nRFX1EZBnXi2EHDMSfm4AHrypB7xbFhV1vK",
  "key19": "3BM9rpouQCYQ1yPjbz7wWR1SeXGKGTfsQuNMhGasvXJZkqocZqZppHVTRxN6MhKteJN5w2s3qwrz9hFekRFjLwxz",
  "key20": "3U1vexLYZSqBCm1Nb5eCe5TMJ8VjK47ntkcg7WpQsCDmoSXkVcLxoEtyujXRkbpUP9X1sTn4QFrvcmFukssuefLL",
  "key21": "KsDjAsCzUk9U51vL9pWk3oCD7NWWTF5xkjDZuLoq3dtnn1tyFWhijRd5PWXmhEQ9ktBNLX8kAz2WvsEppoFoSAB",
  "key22": "2QAeQpCwkHNhoJX23hHnvnMEBpr98saP9RHgivJmRrd6QtkwRU4dcigYMXAkFf2p5mQnK11jiU65zM2JeJYSGvNd",
  "key23": "3uu5792PAtxRUj5HHaD6mkTMFpko1yNTojDqPHacx4kHkbqp6o8t4koN1kwZiYKRsx7ySFjUx3fyvnBf8dz6jVrJ",
  "key24": "4DuLjgSzuzuo8B34kPmK2w4j13x7oB8X5TQ6bTqtu5B2gAMZjcBGaUaDFa2Q9YkDscPxpAyzdTt1zbEYv8cCCcfA",
  "key25": "2LxiGbejU9fAY5ZbBMocUjQ1wrL2fiHADqLfUxcPFXEjietFgNBt5uFUG4ZexTVz6YrK49jPirTE6LWWX4S4R7fj",
  "key26": "4iuq89PyRyFLa89BWofcvQknPypaukh9eAskufubePbUUxnYYQrmv1XaJgcX9JP2odBSnGcf6FCQ3CCCV542LkdU",
  "key27": "4X7eAtY7aCMPc39QSMR2Fzsnu2deRM3UFULuBHuvQQmvtAvcCjQDzoDCpVu3ZY6eRmXcZcJVZEVuE7LWxtS2PnAp",
  "key28": "3VVFMv8e3SiqmHuFVGd41nf7M7WYL1x6G1aqpPHHK5BvWVTTt69qEYCDw21xzTtUcGzomUywGcMzJaa6aUMXfFFR",
  "key29": "5AZc4s1C48w6rAAt4cKugpeNWbL82UUGy8zGRwuP1KnUJnnrZNr5UmQ347VsLU65vUtLhZCEsWfyP11UYhaZt5tL",
  "key30": "4V2ch9q1ZqyxDRqppLhMkv3dRHa4fDUnigL2RimBHduceSNu9aw85vXqwGnBMEZtmSrLnkypK4X3GDwqWBN15uyR",
  "key31": "52HjSdVL9Bmd9jwFDApEtXF8ZaYKvfW4NkgbMt72soHWKb2Pp4SxDRVbKeqXEmMf5CfEFcfZaveRSJQ8Qihc4rAU",
  "key32": "Ut2t5CP3grfMt1zMimcmT4qc9XyqFGyNvjKswAFeez2XesrzA91wJXunobD4hNan46GHQPGzJh9GE6crPjCqjUv",
  "key33": "3nay1R6v9XKNsKQnrpZLUqz8aDSxToV1PkS54eTXdtjbzMnYeYDv7gFJNeMcyZN4GfzqVz9QixBjDopJYZjhZ2pP",
  "key34": "2M5VdJcv29CVXE9y4Nz77hSj5q82S6KDGggjf6EyPoieoR7M3zUyLAdoBD6habqWhLDdjgPUnqW6JJ1PMCoYhnJP",
  "key35": "5UatZm6V1xocnCv6DkGLgUhpWdY9iGsPcYSnXTkr3Cp3BAcSmYnupHuQ4tk2uPne2RhD4BdXt1ddUdxfkkBAMaRg",
  "key36": "29d5QiqJrrXSp16gavLQjYUy3DUpiat1VSvXvcdtUnS3qifyq5g595JLX8DWK6Y3kiwpLSHXrAPHyaE4tpaYurD9",
  "key37": "3cB7JNNEk8RgHYHFEXg9umAUR5RJvHh3ue6nd3BUDsbZr6nSmiN4vAjNcyNtPDA6En5Rpr2vPBBqtT8wvZg8kwnR",
  "key38": "3dcvanLzbb9qFZ6GrQRygqFaYZL6b8YLtCkMaMCSmHMMV7XnKDipyH7PH8iSPtAv9GQA8NDCo3r17PQf4fQGYzTr",
  "key39": "QAYmAnpN9BPLN6vS4dDMMEQgDDCghbN2niMx4AUpySe7nYZbhhF2w8deJ3pBDBhjA4xUA84XTKkwmfjjorpruQ6",
  "key40": "32RrDT5TMeQ9hh6PGYPAno9sv9k1JHt5AeSoQwLzNiuGfXro3ecJ18oBzr26rHGfCvCA17yMvN4Mr2HaFrpRQzCY",
  "key41": "3yDrT5qMvWGV7UGq5xU5Rns8C5UoUnTLuZ8X7UhJBRbsPBuQHmnZCNkHUx4hpohd3GRS239ZyNGAnkqPBKyxmgvK",
  "key42": "3xnq1nPFhrP9boFzBTw4kv2M1cno28iW1Vrr95UmeCAxQ2Z6j9BKh1dSRXQkB53f6TiWNRDxhBV98jrms48cpVGV",
  "key43": "4iWSFYbHFERqYoDu3eiBGYbg4E4yQqgBDjngVMnjcjuKmLP4whes13pXD2bEKtLDp1Urg8XVdnCkrAxx8573s4SR",
  "key44": "4UCV9XxLkmxchQgKo2vMvL26kmaJYQyELYpPv7o6rbqGrikvFTD6avh7EdubnNFRFvviMAy58owJ5F5HSyQnMEAs",
  "key45": "5nZVDHCG3zbhBtpbyehdfKDP88fudPcm1fLSh5xgJu1QrJuq6Ndf5xkLVsXgb9woSPWB231KT6v7Mm2EodRpJFGB",
  "key46": "mBHekHWMc9NdKocwps5goQCqQS4HfeZJStEJCJ4T32nSs3G4hPa7JMoWYB199xuCGQt8waLvebRpoZoGELhVzZu",
  "key47": "2NMxTriwJMAAY7vNChU8Q8v32aRS6S7sQ1CkXhLrLHHCjosxjvmetUoFA9A4ziJ3wRDSkxYLhJWtvFC3z3P5gzcE",
  "key48": "37EZHrPyzkMkzZDso5QXx1dpruVDFQt1Yoi4xwdUVjE69QLDhzkm6jufBdj2SpaSXcZczZMhyR8DCMSCkKDQzuLX",
  "key49": "4n1BHwTuozj3G1UGVM1WcWHGyRK89VhdSEDkGyhFB92gx2t6CbFaiDjkGYdTn2GLX34qq2avcL45hxW47FGwnus9"
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
