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
    "2Ppyen7kUMRJa7TYuMbVh4HnLWB5DASW1xH7ybxQas2XC3HhoyUvJiP9ikry4MxBPv5Fzf5wGbJsivEW8bDXcuo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zihs26vcb21Yfb8fTG6BZKhzEpJwyJQBWWQaL67SA2FTYqoLqy1AeoavEvKoFz91TsKQUFZoowZ4v3uCptmytZw",
  "key1": "4Cb6ziqKxXgkhtE8fri34Qfz4pCCW1bKBj6TnG3hu75srn2CKkyz9rz3Ri4gmNnaupVauLBUNCFV1jC2DZhCKCTU",
  "key2": "2t3nutBiCMhJJmbNSppVHueJYUiLZs51UuNfmEeN3b4e2rHo4KtNumrMrDyHHzi8U9WYmKpnhDPeyE8aiRkfJXfu",
  "key3": "3JzCYmNG68qHtzSCWnP5JBdGF6VFMQjawon5duHutfUurzknWizwjsnU1Cb2GA7t9iLmMDt8CYR9asAQD1cNsj6u",
  "key4": "5AKscc4zTyjjwbWevzpwnqCVt78VHtYYe6AucSEpRneYGZt9yjRx31j5seuif9gnc2djWc2vjmojSKpd4Q4YWskc",
  "key5": "34vFVibqttzmPuid1ee423tKcv3jrmQiVtQVS8DorDKg76VgcvUbmdfWaWWLzEtyqWpruHCnHaoUo26D8dKbaRrJ",
  "key6": "22tcteej3aNb2hrv5L8USMEZHBagS5LAi7qm5bPfo6XbLg2u2JkUh2QnXY1BMKbjFqkXUV743Zhw68ZXvq4o27Tt",
  "key7": "YQFa6inx4U2vnQJhFcYtgXxUbcBrWecv8T6RxCujfLRUt1bEYyuW8FHSNhAbGZ2WazXPnkkhyWY1krLbBB6gkFv",
  "key8": "3KybX7RvF9dobqE7i8gqWcPyKNRqrbV42LcLm6fiNZc36FwBNH5d57pTG9n2YwDBUXo189GTNPVZmzoB5RgctdCq",
  "key9": "615bt5A6KGnVdwFfk8WJKA21tGunQbJyffp7CvDKZ6apSkS3skzdfhUfvxrWUtCPh2u73Y1y7EadncMBKussqJka",
  "key10": "3L3K555HCer11kQkHrwrFDqoAzqSX72CdUZ9ebVgD8WhSogLjJ1avk895We8v9HUaCGUix5Q5THTp2ttY6qmJK8K",
  "key11": "3j6ePgwbDUcF3SWvydbzJtvnN5i3rCUwwzcLcojdJr4KcqogEgNHeFBCyjanwAAQa9N6zAmhZKWVaD976KzALBBQ",
  "key12": "65HWV9tnknh7odp7VpYMZ65kE8Yk1qyjeE6EFDUwuRThUqbB57hRMXcha2Ng5HmMMGyFzCdgt7c2MW1gcKe44Ln",
  "key13": "dQ213ebFdAQrLYZBz2FuTHLAgs64nwe3fB6EGN2HsMyFkMM2put6J1Xj4TVDRPnC27kyPzqYnjCewVCYynmZwrh",
  "key14": "46tuJA2E74KTQKnXAmfo52z9ihfi2F2KRphzM4dCVcnKjjdLycoe1j1mHX1FDtUhnvr9Qc3JLXyexBVkbGD5p2P4",
  "key15": "59vYCuPE5Sswn4YTyJ9QDeUUZcqVpBc7n62xFMmoZ7sJKywsx6A981aUuK3Nt1CwwVqFU1cc5KhrWCNNts72ujYu",
  "key16": "4fDXaJLVxLxQMdhH2hEeppRhBUukLy9ypywiWJXxkgPMRd4mRTrN2GRBTESgFJpEct99MWbEEfL7iFvq6LxaWkZc",
  "key17": "49CrorhHpWfMAGXfQoJtTgRCBzeuTCH8tdwMkc9oHci2JJUiu9ATcBampANx4FsSFwvx9PGkEccshLfFKp8mzy8d",
  "key18": "2sNFiizeXrmRxbK6aUX8xv5Bz8cT5AKV7jLRRAqCBUcndyGXWfwpuGpvzkuMP2W2G8QhzckGXYqdaKmeHEKNk7MK",
  "key19": "2D6f1Qvh2heDnbjRg3TSuRnnxsA7Av2kUYvmhterApTQxnTDVMpL54NrLfbwTApVsg1HuYKTcN6rtfDR4u7SHE1J",
  "key20": "5hrbd6rBuizzDzdFf9upRPEGvY7iQKEBHH7hCAMfLdTadqz8bYvgd6fgr3BDEqWuUoTtB13qXSksvD2hcigxrPHA",
  "key21": "5koan6GRuCQch3VjXRBLUSw6MACALwUDmiNp9cS8DcGggESe54aUY4tHpnET319vwWqaEtWGC5i8quNg42f8YRba",
  "key22": "5AkPSfp4aYNxwFrc58VjrLTcN2qgxbi24L6yNcWaBZdrSGDyLJfUw3UnEkwgjX2McGRfW5nnFK4UfsspbtpEzza1",
  "key23": "2BdtK7a26y2xddYmZ24TaBQCm79D4FKMWTDcaCX3zNxQmdi42px4Z7rEudWji4jDxEf5bh92ooXEVqbZTU1TTt53",
  "key24": "Xou8q5LZz1LfeyJSUP7HYWnRNEcU6BvSswrSJ4HYeCqvuA7UUvLnACJSjcuu2dKPhmojCcCRXkKAaLUwMpMB8mZ",
  "key25": "DMrN56Ucoge1SMn5ZE7d9MyBLxqqA6J5Vbjm73JgFareCpt4XWgZ85RJ84hDhjXKrvzkjHE8EpF385dmZD5aCYJ",
  "key26": "P7rQ8BBM2u1j4fGNPYe13K4UrisWvwtmXKMpdAHu4p9iTPUqe43LnCmyk3ruuqz728JPTvap4N7hLJywRFMVfpK",
  "key27": "4kMHpgL1ykbLYMiUXtpqrg6PmcG3WGns4pGCQad4UzCYeAHhBMPBLcYZYW2wRT5btaj3KAwQeRUoRaVvkKd9qX1K",
  "key28": "38bYbkzCE4n8nVocxmArWEyQaYVRn9bmQyZnrKDscti1KnE25qwyGGkLtBwwmARCroLJFir9Ys8XffbHdkDeDnyQ",
  "key29": "4Tm2hqZ5kToihxzeUH3YdGxcnsG6eWTp4Eq4N6voWcRMCXB2tghJ68r2Dv3k9DPbQAn3b2gjMLUti7dw1PeeERyH",
  "key30": "371Yj5DTgW3uuLqn9Txtc3R4FQaQG68aFcWxt2CTe6B389vcEXar2EMrLYdKgxXTheP37DsfaNNw72ZpwVi9jA5K",
  "key31": "7HDgz69s523bdZWMVBUUYjQtGkV3VcpW4hFVZ2obKoQU3wvvmZeSSa1RfmPrBH8PeJotEP9nkVHwHkLLia47XLu",
  "key32": "4NcxuJY64x4CqAnxHsV5o8NYteTU2vJaHJQeFJLg6SZzScxmn1UNMn9FtzYcGFnV5cKDjkGGYatWFUgcuEEnEYA9",
  "key33": "3ehqjiK55KKZUPjrs7CcizaksYfGNso8h9E4jR6GUtL2Fv8cc5BAe2UD4pBzV3YG5meaxJ4Hu2ddzqy9qJddWCyK",
  "key34": "3rT6sBAeyYVbsbp2MZyT1mgpqZrUR6AxNwweQCGSYBwsNnzCkdi3qVQqvYv8gGSHVS14LUnv5Zowrmm6HvHYfGsU",
  "key35": "4nvhBiu2DmHiSUUUaewaoEKMLjcg17MPuiuFWbLWFqg7E9MCQzPqywdmeDiQ5kS4U52D6vRW4CVYYVAcbjNZkLmu",
  "key36": "4RCrvPPGwUQCRVXxSqRPasxWUa5fHCsMLQDsH4xywr7NNmSX3qysnndCpqbujPHMpCrBPGb1zqX4k7Q6gs7RvZro",
  "key37": "2Pwnyt15C42jXjgwFWPUp4eaJUqk6sacC6JAe1i82qinvXSEXh9hxTxJvDCoBBwn81nrAevno2pxULCT9XW8JeGt",
  "key38": "5PW4JE2bbDBhWMBhTnnrmqnb3RiSLnTu9sau89x6F9Hjj66hDRpWNrFAwXqw14c1vScKH9x6rw295THfh4wvPsLx",
  "key39": "u7cYw4ov5jD1zBBrDRTneGEA9bwQ8aRbyYNup2QpvTueS9FiFNvForVBi3pjFw6V6jwJsmjyzfrRYkjB3cXDcht",
  "key40": "2Tkkd6jKeSstQG2Qhs35SDp2R7FAw3fFQp428uTgk2euLE1cmaKSvvz7ERUKMLfz46CMXLURvxa1v8m1gmc6qKJh",
  "key41": "3PUqB3QJ6MLGyEq3uvV5qv2ArC2HFK5a6SjgDSkhKWUU3EdrSUm6fpRU13yB9Csi5ziQ3vbgMMiHrn19WL6zHgNB",
  "key42": "o6d5dcZFi27HrPGqfVcLwdxnx5Nvn2P963iVYnh5VjTFZ7KoPFNhwRTMNp91iZtd44u5Gc2VYp4d2A7Ek5QkUZ1",
  "key43": "5ejrz5NawrZ6wwt1Jzx2D8dJVAxhUfTkdA7HDd31NDccgiLGw5WxCXdVzaFijGihGtDTmiatkBDtW28z5deHirzr",
  "key44": "2PGLjS1Nrv8ktcU6aT7By3zzjMskQ9zmEeALb2gEWEUpSPBNMkdDTeWjjYvMH8XjvT3UaHseFuJAGtskfkBUAHBv"
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
