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
    "Zmc8gsM3xrvEu6Y8R3SdRQXLfn26scVbN9GTNJPeRz9gUVQNNMPjVqhcTP9MmTEn7BJBVZxHYkuUvjGPBphKAe9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w5yKDg7FYFYks7itzK8zfwo1tnaVr2UsSaDmThsYZ1Uu4HitVnZpeYhYpqn3m8xsA8D8sKjRWrVdThh7ALhx82W",
  "key1": "38eTVWejNEEM9qYm25YVtTi2vs9oV4GVDEmiSZY77g3Y915EoqHC4vrQbHwsiZ53HoLPMNvt69QQf1487aBYXz3A",
  "key2": "3zJHDtVYyty68BVE6TkTK7oirw7UDUD5jpqz2YkWaYHvA4FaAwxjGMMXhYiNFtVNDeHm2tPYnZc6Jzp4pdsnavQ8",
  "key3": "5gv6EmnAMfzCFW8XFbDiYPRccZwJArqe59aUNX3yDwgUM8kCarCTo8a5QWeJXC39AEva2oc1kDBFFMGqfr56GD7B",
  "key4": "66ZcCdnu9rJpgmdhHMU5TypEKN1pPi9mwv9bmF5oKT77J5RQPTL588aDEhpVnUYUhuBWx7CeHcfCaagYBAVWKoQK",
  "key5": "2iS3GUa1bggRVh5ZBJv2u91F7YqVefbt1H8xhQtBnFhLZp7wynb88Qm66cLFzviKmDsdHoXRtbovV2JF8SVh2hu4",
  "key6": "657QxRMamGdWEjKxTdZF8uCWXWZHFXykrqR9g9hDWEKvgKPwELizqSd9KZiSwboUcqaYtfcr9fvyYXn8AGchot9j",
  "key7": "5pR5AeZMjA1tcVhL1cAvvqUnEEDqGL8VsAKeFytyBYGmTBFLoH5yAsi8UBJkPUkFM6ihz5tesuKRnom6Yt5mUtXU",
  "key8": "56MEY3bx4f3hFMCm8dBgRuY3Vx1wS9JS1uWonDCCAp99Qv45rbYRZ1iWanSDgG1F9JWgFokzcW4HTLYVbZAG82CV",
  "key9": "Y7qiBLkcjhQWCEhQdQBAsvYGypUdbxKpoJhg2VFmgd6JQZsSgJwmG66cLtjmp2HVugYrknsT64G62TEcGriudwz",
  "key10": "54DNncXLXzbM4vLtGzLgUEg5KP4XaXc1e28ND9UbG77YLveQrFJ7jTPUaw62FtnsmVh1xdmyLjppVWAt89aDrPB2",
  "key11": "4Ssr2Uad54pQHenmS47mAB37H5atsLWCZ5Esk4HeNuE1zbtRyvfrGHEa4EG31s5SPLj8aFZnLjXH6e3JVswTu55m",
  "key12": "4mN56SAxyA3HfPkKxpAPMm9QAje8MVvM6uccPrgRyxTtPYEmLwfoeGmTRsheMDkmN7QkM9adk8xGuJ5epgHajwha",
  "key13": "UsSDFoTea8b8qWLsBzEyRuQKdCaN7K6BVYHKSKqq7SRnJ6Vmh1oy1SsX8AkT8gk53KbMCHDq3BF5GJ84pc3KyS4",
  "key14": "316j7r9QYtoBGzBBNBACKyyN38eQ5ssN1rhHzJT8gufQdnyELBoxZjm5939ecLffKw5UsJPt39Xc8NGkMbzVnNzE",
  "key15": "4QC3pJGCe89iFiigAYkwvB9C5KVA9Q8xMtNDsry9aZHYibTuyUBJAG83zPx6iCyyDTgoNFgcm487JQgF7kPB6GWW",
  "key16": "2b2qng2o4xwn4QRKxczqpWoCuScuuY1VMLzdSjcJcqw3kfSLyRQqo1o1GR5qoKaJkaRDEe5TaBvu6r3wutQUWjF1",
  "key17": "4xXyjmsTbLjbJukFH13uuwqyfptZ9nHNMYpSXBPWPyLVhqmsw6YUfvweP45kBWsRCovibtViuob2cVsekUTmU9yb",
  "key18": "7pfpwwj1TavRmh9t8FNASetKRnKYpjcKm9SSACZ96CGwQ192iDu38dQdYdvTg1u8jGXY95LaW3DXLv1jMTkXfSG",
  "key19": "3t3yqGCPGS9XBCi15swTZjmZC8mKswadsDEyHbB4d6AyG5z1vrULc4DJd1JRrgqenYHPFUtCEFCLa5quqY7gKn3t",
  "key20": "4XfsTPSsdE7C3N6zFVwPnGiW725bgcZtgdd5aqwUggjXFDkEH5efcvybaoh7y8Y3Ktv53PKvYNTamnrhyjzsStmU",
  "key21": "5A6kDAKUyHXsBueHyS9kHv6oMhEe3pVvucE7vWvUGwZqJvL9edVBF8nZzr4DNwUVzBr6p9BqzKK84nKNiozVXYKn",
  "key22": "3C18XAq8LrybHd7uqEmNhSDCDGGXvYXq1qWGrKA6BBNSURbU7CWigBviPBhHA2J5kjDuqshEEkGp9feML5HmodiG",
  "key23": "42gQAd2HeNkA6FCWcq3guV9Ahcfxp59wpCZnU7z9XXejZ1LkVqgZ15UWDhMzFtEkJopsdJ2sNa6RK6nYfduoTwo6",
  "key24": "2dt8FtDUoV3JRw1V71oBANRaTiaVYkXvQEjE8GYpCQuQRUnGwDKwVWWMja9E2ahAHx88zSc738UFqqwrhFUEgrs9",
  "key25": "3Z3RUohmQkRDt6nMTfZqv5XXAgxyoiTHpg7Tr5ewmveZvL9ZthsYvGRL2YkgTQRWmqGcaM3xJCm7MG7TnSG92dLS",
  "key26": "5cp3wBs71A6S3EY65aGTShKBzMyv2eAszz7mdWSFrk64QrYf69fbQcL2ojQFtQNUJVXkbACvw1vUvVwpb4u1gBcv",
  "key27": "4Mr11WVEaXT8UaHAxv84y5p3txzJCAFopcQwm6Z2233kYJeqPdG8sKLxy81zJQWDZxNwruWkKYbR1RhezXkapbnU",
  "key28": "xnyMiF33VjCc63fppCmYw3RgbLXPvvb55KXf3MPMipztjScoJoKN8U7cxxjJ4smQ1NspG6yEECLq34c2f1Qz16t",
  "key29": "qWUhaQJ6zFHgVSWzVe83Gjj99KGrV3M3pUhTVTQGM3u39yvrnBK6iu97y5LcmcqsTvMkyKWgkmBDVpVHA3whEx9",
  "key30": "2fSQJrR6eeqgrNYVtaTRJDKdCH7cuHEcg7z326CphCTitdkjMrLaXtbAWmpPxsCsUinv2gT56F8wzsAHeq95nVT7",
  "key31": "5YjkJRHtgNja559EyiqcCJr8HqGbfzYpR5MbEo3y7m1V92cUQi6Cbn9s2A585AfK8pXwDceFwtEoAgAKFPp3HBwX",
  "key32": "4zbhTB3rWYw5nChxW2ucgveZ9UVspLA6gS6VEJFkjNhyvccHjzpGZfs4971nhuTek7HZvwM6yoX1dSRHpGxvqYW1",
  "key33": "4Pb9E9NLZnijsHmZnPu84jz1E6LQRmTeyeokiC14j4gAax6BnwieiwxhG6e3rMW8U75KTcKHkQtiX3699wW5D2on",
  "key34": "7W5Pw2ugsYoNM4RdFCREfQq88mrgVUL2LusQGSeqTGF3B4X3zB3KNkZsfh8kGeoSbSjBM2YdaWthNNPxkeTrAhq",
  "key35": "GC4xTxvjnBHEWiJecaFpCppgdnqgq5Wa17dRkDARwsfL8n3VYHtQ7Rhiv6MxZyB8tTk8akTjj445n3b7N3FJjUh",
  "key36": "SystGF6Aex2E8qdC8cwtXqQ5nZ3mDW37hGzTxpbRnLAgpDxFnqDaPuFJ32dj89gdV4hLPxgUDfD1Cm1R4J3L5fe"
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
