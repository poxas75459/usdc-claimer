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
    "4PoQfibxYU98Ku3Ms8owfiGaQ7nS3ZN6MtfF5CwoBchAZVaEkcgzoPyqr8XLvSDoKYU52UJJwpJQfcghLrvUswgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HhwPJZ2UPEtX3jKqdLTGzkpkwysQkzoSoCSB6TzUrBuQDosNQFFJq4Ntf7bAy193AHK1myfShQb5KcWvJBKMnwu",
  "key1": "585ctdHzSa8DXxuZfFDDrcFRHR2wJ6xzKZHDRrNDesreL8s22ad7R8ZJCHxE5Tjzys6GfKVcyAcDjPi2NwK9ojBH",
  "key2": "47369gNeJbuThpVRnWEZ4P1gjbYgpBBYfi3XieeqnFa6BTUg4XJ2pHcfhatGoMrc1Vi6qSLiviGCPsWu2wHb1F1V",
  "key3": "4FDMBDzCmyMPKihXvk43sUjwGL6qSoAtVHQ88CPWBEJZ7yekL8wVoBsraMBBzqquDvQNZPSd8Bvuggs15JXqyM1p",
  "key4": "37Zawk1uzCW2yhjyT2aoaYucaXe7qZvVGmH4WnAF1DuRWMFZ2WHhdH4go8TMj97mnAo2qFtmXgT1NsdbK9VnEdib",
  "key5": "WWfAk5xFA1PmFpyFnSax8rjU3VLAKZ49FwYdJuUXjXfVUPakELs7WaGqSNWZJVVhjKQSt3MMtQGMuSruAd5XL2n",
  "key6": "4J1BM4LH2qNRkGzWusS3TPHZ58r8dLRLWvpdW4WKYes6jURX94ZD9jXxvwT6gqiH4NaRhPRvTt2hEpHSSHCjTxK2",
  "key7": "5zfSmTM1ScyU1UdLeKYXr3gBXQWtno6dQiJRRgS1w5rwjhWXScS5ZVq1MTAy9NPfVntqqPvX6NKdu8FsjuFRp37y",
  "key8": "2tp4ExMiHwv66herfv9JEknhYz3SQC8kaANWL1JzJm3VwJLMCVDYisyKaHvu45aokkUEhRZ2sLy4oyk7YEmogTHg",
  "key9": "29nqyCLAVWeYvh5G1gkXrLTVR7z7pDD8rmecEPT5D5eoyQpEBeCnoPYJ9nscFXuuYDXUEZb9JzF5jNhscJeRk5KJ",
  "key10": "3u4wbdBMnA8E9tRZRjmGxKAXbuUzxQY9JYSkh3ACT9GwYGLC13mHreade5Jo5V1LYgznF6Lv2qxFNiG5i7pdfwHX",
  "key11": "5EoEBUK4rC2dPWKjY1X63jvAjq6riCwZ3epgssnPe6PgvbZwX27wFBkv8SjXjor4B9QMk9yCZCzm6KoXpPzrwh42",
  "key12": "2nrKBn9PGmqAEPcF8jVYfbLsaq7DBb5bwkGsNo7RsKMQccwvnW1aVDxRgK6KTF5jCVHg3mzuCM8TEm8HM41mRiy1",
  "key13": "3rZVHyoFDyXJNmq3VkZvZsiKQHMusiB7GkVXRoQpErhyVEYfMzJjQVuemVNw11mTY1GQJx3RuruaagkJgZLyCL7B",
  "key14": "2whaHeE6tbg1kdbBvkbh5v9iYmtmhmi7jMSCp2u5qgP98btY51ewtAoFVXFKUoQW9GHcARFQX9xsV8kDtJGbZiuX",
  "key15": "4p2h9KhfMnCw7KDPatuAgZaXBnKyVNNoDUVkVX9VGtzREHDASnENRFsoE9bKoYhLTqmEQk2b3SCWBxMqBenntyCD",
  "key16": "5isoGwBkdJizYKs2DjgzarwEe4QnwrqNbe4J1Y667d9Sy4s2ZcRnJHVQB8xmxjzH9BojqNKPLn3VMRBZJXiacyJf",
  "key17": "2AxKrXYW6UETFwFpELQyxbrqcxqaePgFttHLz36S2V1CFnqnkbnAxDPqFWBv3yhuhXDPtJPbz8qb4oEVZygUcv8b",
  "key18": "4gJ4CmTtTQx6Et8fzKajqTmx38DjMpGRzbJNerDtAmNaiMo3HDbMsCr5zqMWt34t9nNbZbjaT6wBogujbNdaRjvU",
  "key19": "2Tj2NdCLKJG6dVRNhuJEwV8628xbpejckuUMw6FYhbbyTxzwEeK9BJe6Jwge8d9rc2Sah2RrXFERgCWtAexmzTzu",
  "key20": "21T3As5WRthdBRxn7LHhFWvjBWMHXsNDeiz7VuwkFKSQ3xgZoEhBSTDNCjPe7zyoyHuoFeKG9fgxZegLBcHKgcCz",
  "key21": "2EnpYC5A3sfPq3WtTEVtCEjjE916yB9SPjn8KeDUMtcxdGCJgA1U5gkuJiquErEGDGmwDrJXP8fMP5AmdWHjU6s3",
  "key22": "uXuszDorEpAJt3sJgbEMcfqqtnVd4Gs7AhBJtXnLnXF3vukxgVrsB3r6QGEUyNDGZEQzJKtqTpaE7L6aXJ7ybey",
  "key23": "3cSR4dbtzaf7uG2gtsVst9erBRfktHGimhu8ToB9s1tKHrAUWMv3apzoHLiPTTn8wqR6HrQGRHMqYAPq1iya4zca",
  "key24": "3nmuDGLzWbv2RtiDAeoSueZLEnEKaJuEYdCHFKpvUptGh11gLyRa7pkr1mCguBEUophZusPvEY3o5TPnu3Qk2DHn",
  "key25": "2Tpvm2M5BEFEyDtc7R6prQCWuJZWvHMTjuWppxRZztUNuK2hkpZoMAtEf3nNreynbD6xBoAgHb9ZPZZjqxxSbqe6",
  "key26": "5k4rQih5wUhLVQSuX2mQPnEZocGFHDVtJEUUgJtEaL3SZCcuxUWCPLDBUbaReThkPq4UDjddjUiipN3EYa2NiPUa",
  "key27": "5Mcg3uRtCSsJbVqeXYDUXti3DFDssJB5SuAXaRV4h7cuwGQKzXq4GdiXmQQRh1DZTvpaFuAZuzgUFbV4UzhFox5D",
  "key28": "4kDeTGKeob9q4RMHetF9YZfzrzWRPu9tRasi5X6sbTFZ8EYAC1MsZrLeMt4iVYvsBVhpPJX6VNmBNzpx7xkAxhaG",
  "key29": "qU1amzY8bxoN5qRKNST5WxAmXLChH1XTx6qawhE6DJAiJqHBDMgTdbuCSMaF9EG6pEyfJwA1XruywH34sCazs8p",
  "key30": "4nSK9sMLtJFNAAQbS1nmoyfRKaP6SpaeodprHKJJiGsvfxmzSRwBApkRAhifGkcyLjXFNuK5PUggFTQxyoGjH5hV",
  "key31": "4AzSN5HGsENxeF2Yh2tNUJtLSMFpwc6BcSbLbZEiPgHdgohkEG6Tuath2JFiDUHMf1tTdBSq52fTe49wq4bjQyG",
  "key32": "6AqbDFEwDBEgwbxh8WHAr3ghNS3Qm5bhg86zM3gUXZEJze7FsSeCXWe9FJkjXP1BosHt31RV6fXG7wvghBWPQGM",
  "key33": "3uYXM4nQLErTo3nXreZyPrsF1CHsGf92pxRscgwY5CyQ818XZbxxq2NE8yi844oRvc39SAjvXBBS8XBConyFAv4G",
  "key34": "2fM3ysVTHdDgSi97SQrjddTxzAZQDWdF9vhAqfzy2BThJn3zdJWrs67CsHXzT4yUVaxJ2MDPweDJXEm2ABNKdRBY",
  "key35": "41jDkYDrC2CebL9PirVEugFVWtSAzwr1MXP12mXS3w1EssLq2HuWexHUf3NCcPUUqUPeJdAzUh8aYsvVEHBCPCHg",
  "key36": "5wpbq77m9vUK8pywSxLJyxPVyubzFBsBkXuaU9C29yxads5vEk9izpvR4XQQXZzC1kXtbJkMFXPDQ4iVr28mNCvq",
  "key37": "4Hfbs6JMpVjgKmNQU4E9Mh8tfkVyTrbs1zUzRVrk81ZXjoFSEdtUJc4ZdHapDNBwuR1F4Bt7XrydzzHYmdMDgaDR",
  "key38": "39W12yNny8i4bbNztY5Ha3JJL2YQaUKRBe5LvZGzJdRMGuk5uS1Ty7TBtoSFmXhmWwgPz6DtkBeRp3SegDwEFdz8",
  "key39": "5h3A72dXefPt4RsDC9GLqJxwPZcmeriJq4AyVTDqsT9h2DSFMq3uatgBJ8rCNegHEekzDnQWQqpr3xXejN9PzDnL",
  "key40": "2rEjueVT7Zezyi6wvYBrP1WMjgK8iNDhVpUUnLGELT5MK9AAbJ3ra2XY3TQeronx7JwPBTedCXjGqzNy6Jwc1pW7",
  "key41": "51oiT1LYwt49Mt8yUpijEWyAAdyr1gce1T8SLSKYWUFZBFNskbfFjMmDrcofH4dcmDAFYYVGyCLy72HSon94PiH1",
  "key42": "VQZYbzCNymTHQDdxjw9eofQhn7xjeyzs6ts517Uqg6fUJu1QAwZSBCgKqZvnSwVghzuuhKe6ACfYc6QHC8dNL1J",
  "key43": "5mxLrp11JjKxCmvauNcQPAucrSNQS16E2Mkw9D9fz6n3V7C6f2BtM6qMn3Eu1yvEvrKFKewNUvHyWq2d1zLwtJZF",
  "key44": "4jqUWNRLWfMb8oWLhWTKuxLwysm7WKcpEL1bJTxt53Zm2Euijjkckig8SKV6gGW9g24RQ7NtjMyYBGm61nYvA3vp",
  "key45": "3mhHaXo7V9nGCbnkJZ4MCay8UBX21pAxhFSchx8qDi7oRriGYQtr21JUYBvtGoefUTdGVqTtPyAbKq7McxsejUDC",
  "key46": "2sczDwbGFSYK8jGMc2E15LVZ1h7bNqptCcUmDm4x4Rcjbq421ePqz396gC8hgdQKkPKEr5aFYDXggSLBRHWjWtgd",
  "key47": "3FMCK44MNM4tLCoLn9oJyaxerxs5FvshbA685s2b2mkaSCZPLjZsNKXwjhYwC5Pc7tBvSdpQj8b9DWpycQBiLzSA",
  "key48": "4JMf5oFxhhuf4Sj59MdWYt6UnDcgpHdWXYsbb6AXP8YXNXKH1LpSamhHtiLMoYa3ADzgdqPEYoxLAtgtu8hMFy4P",
  "key49": "5a9hyp4o2Z8FJv4KBdeBS5T5KfAW45NkL9tjyEw6hybmMk68NXUzbHipy4ZE6FUR1EE6GDVN4EqxAWUhH85x51mP"
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
