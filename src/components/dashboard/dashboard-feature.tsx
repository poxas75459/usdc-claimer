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
    "57msiqeEjvpuXgZ1HRTw6fXyWXAgsDc48fLfEHi4uhCyJ4gzjaL3r27uaHMeXkCaC5hPf41tPVMX2EtGSbqr99u1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TKL27Kkx62YpcrcsrXGBwbrZ54uxS3nYSjkXGLbFdbN26dFRme6eyVLEY6fsN4gGjF12M8zz88k6H78P7TrQVR",
  "key1": "36f6CF79xVgxDzZ1D6Pk6Zi9327bLS8MSejcDcCyjQafbBn9tT6pbL5Nmg1t2MfN717Te6K6yaNy9HbV85MvzJfW",
  "key2": "2EkSFdk7LSzJ6XfMBMU3BxvosL1Q2Vg2ePHd6kmdiQqHWvnT5KHnvWdRgu2xzdmKghSjH6quiYL2THsBL9gYwkav",
  "key3": "rVEjh169BjEp2q57kYQp1ibRuncibjP9NYBUGKqecARyhz42Ru9FSC8r5wWJYB1k44vdsDHWag7eAqjPSb1WSug",
  "key4": "5oYJZAKJB9YzwTgaUK5Z9TQnTYk8Lhhyzpo6skqHVQ69h5CpsZdT41qLkMM9gGam8jdYe1AsTEpDETpCkhFQQ43Q",
  "key5": "bypiQVhMMsFD4D93kjBWkjghtXhkY9xpx76TUPhhw2eTRzNpiaZvivDdAf5iakUNdKHw5mMTyUXrHu56YU5hHrQ",
  "key6": "uXYhaE72wS61rmSe4o7nSkcwQE9wa1kV5uH4vX3KS5nf48bLeDAbUUuYKYQgGPQGP8pL1NnvZizX1TVbTpzzhYs",
  "key7": "5Gwhr34aF1JTtLiwoGqVYw37s3uWjfCKGyfTVpFV6FJQmZUkaBMLtb4d351uPM1A5dUcMFDDsbycSWHMoiY5ppc",
  "key8": "5iy78fyLswjuLcWR55DffbZTmqdDfJwWnaPayh1neNEorYzFLv9jdcjNePCCo7MgUYzrxwthgZJDQRcY4GTKAQ4Z",
  "key9": "51xSVxKjrApcK7PCsevPUht4PEHCqgTDoMEi8LibC5JpViEFyEZhTY4DSD7Sg6RADEVfT3y5Nh87xCWiXJ3H383U",
  "key10": "3YwAVcLYnNg72DKC7CKkPdgw41WuUsSyo5E97jfzLUekhAQecKxMPPcTbXhagLYevdcJ24ymuLrcGu4BG8L4QLeU",
  "key11": "5xr6WXtnZ2spnY4HXiiz9jkcNV8bf3CJDc8TzrNQLBEqDQQYMqxL8yeYu9YP4J58sN4mj3EFYTKRuFQZMnss7Y4s",
  "key12": "36AVVJakhpLeLeikeWShkgZzVveoeZnYTxqNtoMZaUFkgfXgiRvbPGnGZth1TTeMS2PDk2RUPQL2KmG7hx9vzeyF",
  "key13": "3PtaMiyuRz3db1LuY5Qqx4oaMizrFoT1sQGAHYG6rPjufmhyZWhfMUkXUYDHHr1zjzLjUVauD3wx2ttY4sQt3uVT",
  "key14": "4GYTPhD22WZJTmcFD6ox4XUZmSYksk6Eow5HcwUvMtnjZ3NK4a74Mp2dDagXfsYruexjggHFDrhbM5gbYV8PsfUe",
  "key15": "5waxvvUasSPD7E75843YpkCbZLodLntFSoKXN1BhJsts4aevpQhPgVKkBCggtghbFNHAtMgyGhNds2TvZx5JByru",
  "key16": "4vQqjdSAhmAPZyFfvowC9jTbtj4kwjoHPzM6MsAFS3AqNJJ85usidEtQKL4gsCbPcFmEc1Yq3DTYrfUzns7wSKCs",
  "key17": "3us2GwT24k7TnZcZXVBkpjzbVpbsKGxbEjNWEn5LPC9b2sT6pHLtddMPR4ATbKB9pdGqsLDhY1huS5hdNPzWnczP",
  "key18": "r7zz5kscAmR6LRLuSSHGPu5FesGETF2R9FDyxeA34wNtYFuGnLPQHjDrYHK9J7b6eHRg7o69uHgoGCXwQBFP6BH",
  "key19": "5pgmxTsg6yeivywKtKEny2HKFwECY1eHg4Td42GMX1s9iohBjr6eKruHV1ZraeNWpNyHsUnwe1pC9ejXLjzvxoq9",
  "key20": "2YRKcPcwu3VLxAVGkTCAeKmrFj8pWfpeBQTmt6FBtWVSD6hFEk7Cu4n6tVQaUtvmhTwGmjqg3P3RoNRMGqDfbeAN",
  "key21": "1rwGMEnXPaUro3fgHH2Vv8rTWDmBRkYjg8QFFb3XyfDQhiV7KySbK5ocxzrNrptAPjtWgiCxDCYgMgtTE394Lu4",
  "key22": "4z39h7acgFNNExkVaNyKRxYa8wKtBUkqJTXUHagz5obq9HDjYF1WDVUb2NZpPfJ1UxGZEvsP3qgF73gTHMWiQoxy",
  "key23": "3K9KALVoPX21Hn7AYmGPJR8FxKsCGRSrPjN837XbyvfW9d6WnhQEeuqW3znUocwWTDA72DxiBAY7cEw419uyDtat",
  "key24": "3g3NJobPS8Rzv5vFrtpk9WkjUBGbFoAXLVB8AwNjkmQ1HHP1L3oEcTaPtyH3YUxpYJvcRQWrfaAkayoXX99aeLP4",
  "key25": "kg2S4JwXLZxD1kgun9tYp1dwdq3e9fxeAtzmVcwR5rSAWL2QQ1Cmo6LkbEbDkTZ4RkExYNAAgkd3Lib9Vc18mGX",
  "key26": "39SGqqYGg6r8ac47vwYRnFY69n1fwFFieKi8jYz3jPHXaoQk7Bp89WK8ijbny8wZHHrK9zCD77wVafA5waQ6jmun",
  "key27": "2mxBH6dsiCoYhYLFxmA47Fa3PvDDuotbyUx5zna5BD9oQxMWsDhs2g6kVhCPLYs5LqRoT2h7KQZ52yhc5ZEjH4KY",
  "key28": "56LTvPNiJMhtQNXteUXf4PWBHLTsMfVLGfuxQCNo7vsC2cabJRZLnDmX98wtAVKFucfBHyNxdar3naQeuqkUp3SV",
  "key29": "4HSxkoKo315j6YkZzXtmLzvDGyiHzR7x2aRuHpYSCebfBwVcTqpXgP1teJSYqUqcKyvUjbGC9sBFpV25AMBukEp4",
  "key30": "ZuVcwH9HrfenmHDbQNGTH3K26HcBxanM5Th5ZduN3ewisWjS9EKwfJARStzUhS6ks2ZFhCa2jKwdeXh9Aqfzpnw",
  "key31": "4g7Tf3BcbTMf6FK53wQMmUwWddWPEgQeogvdQijcrb6VCBUThYzJEiskvzSYQjdsLZJ9CaGV5nAC83LJfnTdygSF",
  "key32": "2bCgya3hxSitSCeCfkfLMj5rhwJKpwqQZ6n13HRYnWdVQAa3bBPDnhrBBthR2snZ16Q3Gn1CAJaHkpZ2oXF5FL5P",
  "key33": "2NEv8prXZ7ccfRZ6esoiaKoqdELpzS5gXM1dSewBRRULrMsYhgeyU379yAaP8tMrAmbCsi3T9B4B2otbzs2VSii5",
  "key34": "4NCvKVhvMV86Ki5x227zmSrEH2bFsHkNwXwRkZGoDMSJxKbff4xEjMp1MpJivZj7mrWcZFybGBihd7UiuRWeFcA7",
  "key35": "4wheH7vNbSDxPaWtqNoDTe6BYMc4MJ7JTHefQ9mU26YY97to57EF5dKiWkjAboWv8Vmbmxnaod5UBkX55V6kTq7L",
  "key36": "3nVAmA1NKak2PF1tDqQzpsyq2whHdMBqhctqviBazDRJY6LQ7WhchtdCpmUvqykNK6ePCCdoNFrYBLt8HYxX6waM",
  "key37": "5YegpWgWhBkhYdC6aKFUp3R5ueNiDiBChggsAnzPpX2zkuooJFaVnuzk4UVmMBCdgF14snkW9p1vQKSfRPnyaD8H",
  "key38": "5hfmqHgJkEtzTTjQTYBj3KNqx4ARvCrcKddmsdrwRKmuoK8xLL8wMbttuo6UpsQKSC6RBrNAcvX42cELwPB4RZS6",
  "key39": "3ae3UdvyNcsmfmhgb4HmDS11b3NQtSX5rTN7ZXNvM2TcDEbRRPyPjbbhnvCtAgK3EX9d77T4rpRqkAZ4UW1xKCTB"
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
