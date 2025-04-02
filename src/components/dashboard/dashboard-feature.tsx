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
    "huPsujoFQkokNxRMgAj81QG2TYxtcYwtjqwnuSaHuKG8XCjj2uZzbRP5CS39QJpC6HaRuFdTMHhobj4gsT9whUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qTB8kQ5xHSBbtP2KAi9ULXmWdeqZBNKCVSXgdwgcGXUm8M2Mj3G2vf3hwjcZCR4Z1VHRpAigFVXiRwgfkdKhwsm",
  "key1": "3QrgYi37pdisZh3DA3wWJZYzB8ghgjiFPuGVT2Y9gY2SejFKTM4tq78jWsrxasCfTbpJ1vaVz1cBk2aEkQMcFdae",
  "key2": "5wnYwApbaQ4NvppFE85YauFUSM8d6GUGKjXTauc4mdjqzgNMcyUCAs3nWCYKunQtZq9p6wPNvE4i52P2rmhVA2fQ",
  "key3": "5NsidAjHmiQwdkA8LvMhdgjuanCkV5T3cizFf6Cx136dtmWj1u55rVA4geWPLfwCREYYXy5QdGSqR7HmuTMj6zV9",
  "key4": "4dLyUVWLAcVdwEGV5BgtZahfT2N1JdFwXghp7mMgGp23VkXAMvpMLXbRP1MnkpFp12dS7N1CWP5FgCVRRGX3KzyB",
  "key5": "5kBPUaRkPCDRUZEUUaUeVXna7KiyFsBo1mouywhBuwHnKTWjTJm25g58QdXSJ3MaBNxry7VxwUc9NEuidH7Uzzpo",
  "key6": "5YiD81o8jCePtEnShdRPUzQF8Vz2vApDuiFruHuUCE2YtaxzxV2WyC6qSt7f5qu6Gf2pdzURhUAchWPH7iDXdyAg",
  "key7": "5idfVUb7qrVcsVuLrn8L8Jis3QQAcfGvLooDqRMCHb9FTQn6zVgZQcTZo6HPbPkhKb6VHTMnKyjswx5PntLakCLe",
  "key8": "4Ucm6zVvH1gGwaJt2rzR3y448FrNCB3CQMo7Hhb5PpL2eUKusFHoyBEYvvoBmqB6RTKezoqzHKMxE9chXRXSENhL",
  "key9": "37M7WH4QBAMgrA9Z51AYJPK3GpVFDXVCnQMf2i61nCas8xV4HfCfo7MngDvievZxRhCbKDNg6UzRapYaEY3TmJuX",
  "key10": "26RkG5otbvGfaqRFcyGsjYTamJqmaxAupNA6CSQKizNm4sWQziiRcT5toHBhMfBCFPM1qLeRCirkL34Xa51Q1u5s",
  "key11": "5pGG655B7iF3nM4jhU77fBkLCMMrUy5em5PinLHUozFRbLZzV9DiUjKb5YDLdtdfQtXtrjbZbL4dzgVR1Ay3jXhr",
  "key12": "qmjMbcfceWMnWJ61Kg8hPo9RV5hfu4SoyBeAoBSNYCPGHL6UYfzAzZV6SjEsaz2GcGzpq6JDiimsHieqqEdWTPz",
  "key13": "3q5dy1kHKXjpCQpiz4FttfaUje183NUPzXon4fXbL28XddNUpuWAArhAgSujkxaM61xw6PDHdCaUcxeqEXpgWVRY",
  "key14": "38qVbWqmQswKWUNZig9EwYu1NBshLvJ5Q7vFYrTcYBYdF6xS2nsmApjkdY8SyL85tzyUtuTaNxbzTjokCKcq1N6M",
  "key15": "49W96z9rqQqQvh1Yy33vNYdqdV4mdUmbRbEKo4rFUseikSvFqgtaYDnaLuKjkvqYkCQYFZ7qYvM78jKEEX1VteWY",
  "key16": "J5dc43hew5RTkQwtPkiPrSXSxAfE9rczvwtxFwqq7JoWCyJ46xwWiUbDHTZ2FG3buCn6LfUMcycSympD4wTXUYv",
  "key17": "4atkW5jgqLJKoi5oi7vhgTf5NTinc8Qk5JhxgF6dvAiefx59kovG2EHjYwyeucnwTy7XcYNqesWR3VZTtdjhgw7b",
  "key18": "5zmWWzKpu1f1nyeZMmDi74DxpgFDvgxxFt6Myn94PstZMPfthj4t8uBnPJD1G2U8ZbF8tmJgrjT6iKr42vLzQj5q",
  "key19": "2zXxvggwPChyF41QRc5VATWBydfdPkjsCJsiKXCKB7E4pDZ6PBb2X5FuLLrQChnVMzC8tmaTsjGZQEPcXBbXuDfy",
  "key20": "3eTMN7HXFuL2yGQbGAABNtucU5vFWbNc5qWcqp9Qf5Cu3tSJHRPLcDuR8mWW1qjvGpmM7AWJNQtMyFJAyQkHEu7V",
  "key21": "KDYmYzCd2tks5TmBRvMYV8J87kbJJwkQnxQfSBMf4kMzu9o8ptVbtKs1c9G1rExuYmSiKpXZaQZkM9dV6k38AHv",
  "key22": "5LNw7sPq34SZcajDrVn8spnK11waKrdWBmuUMifG1Sw1DKzZS1X2TQ6fCedbqneLakAPUdNm5PUswKoxz9hY28WL",
  "key23": "L7cTv9B4VrE3g73ewL64QbiBtcfiPVraL6FnY97JewAjbsiqbBA12xYcvbbu3ANNvsUUgiQw3ptYatMUtEcBepA",
  "key24": "2Zekh2hmnB4a55rkptrHmYAHJSTyZAwFL76tRUR12rmqjMkUXoTBohkCqh5ooRAQFwR2PiX3ZPH9QKebYb535x2P",
  "key25": "5BLpRKdkoxS594ETGaT4ew7PFYrYM3AP6ZoQjTW3HR9Pj1R4RcTTkEJgCtDprc7qDsiAFN6LiefjudfkjcikHdDx",
  "key26": "JwuD7Eoa2miYntL6LER3sRaVC74a8ruESz5nu7E8YNFnGZbQRWmjjSuyT5BXejBTeX4WpKrzDEM5KriH8rqVEja",
  "key27": "H4mcUcztjtEm4HFnV1MZGeECniBZb6kvmuz82Jz4tKmhujoxMdUUqtxFdeHM6XXxi3ex5AsbB9x4WWT4d7yK9v4",
  "key28": "nrLszbMdTGmzaLFZqVAj8GFfFmCLtsQWKhXcPWW5oBiGqYACW6ZSbWnPGgUpRi3Totb8HBeX6CinP4VKRBphjyu",
  "key29": "3DRvbbGYXvSPpRKGAT3NduvT4bcVhorqVg4GXpvA586vk9LfL35bbfDYYeYB3cYcg2KibpAiWAq1sZh9CUPhXL77",
  "key30": "4CRUvBh1tiQrYTtyXffP8F7KTPMhmcxaAuBB5UEomdpicmnKhTfq4YtQSNAcK6WjvnRXFcpvhnoGuSoWnTsnD1BR",
  "key31": "Vh4RuAosdazBUwTns6T4E8dViWW9YENjp5M2Px1NBY9HBrHu6D7szcQv8QsXx4qwx72EAFUbHXJzH3kikDgbVxe",
  "key32": "5WbbChhocdfEjQNqrR1EijmWLAoCMwyRiAGxABzsmMRhtRdYH8fU9x8WxV1GMhcgTeQ2f7P6oL77UXmQ4XeihysL",
  "key33": "26RSz1CRcyz8MdeFkQQgRA86q5ycANTWVorCYwzs85tEByzQyCKtCUyhzqJ4XRkb8pEELhkthB8moBTKZCGaZ355",
  "key34": "3XaG9694hc7Edta4YXVQrDcTruKLMp71BXPYRbn5M23Vy64rD2GG4muL37wYLqkz6K4gWiUqC7dkm8uroZibg3bJ",
  "key35": "5QWquBY4AyXVyC1vGss3gUipXUsC21LBJuDf8DWA1FX5YcP4UdQYAzK45R7vxUcV65wTc5AmniREd32ABrk6Sw1R",
  "key36": "51MTAfvm6i7pEm2bUqw4cKXQg5CVrAkgBQxP8V8mFKd7wZ1XmxocWVbCfN7B9Yx1rTtWRipF3oa2Y9xAe1YRL8LN",
  "key37": "xKgFCYvhJfmzMmMFkksEFaK5uG7RBQsvkyPQqrAcQnVnfpoEUtWDCTLiTXY4TjH3dCpCtxKRTnNLQYqVXzW1vMD",
  "key38": "utmuBBfkinTbj6W4XBgLLMRN36CesqzkRRR7U2iUW3thJBFkVWpoMmciy3FYGCQbw3yXb2hTPa9K5GFZmMmCpUP",
  "key39": "3aQ116LYBjyrPtvjZH3dGjQqq29bA4VV13F7tz4b9vrkNKkzkykWkKF7t9thc9nQC959TankvpPB9xVSvjRMLXtS",
  "key40": "43K9bN1M4EyPR7jt6JbMJdp2Cuko46vE8t1qV1cLtMLLPLgQe6hXA36Mqzmso921bF2nEAAPXe2AopjYQPKzY2nc",
  "key41": "4YZc28dLa1fucNYRuYdaRbRXPgus2H2VRnxCMSSqP1WgvbaEaLz5dkRC7Tp3h6pTwSuA5MDMidFjtMiFvX87fSep",
  "key42": "hyT8u9PjB65FfJpsdQq6D1eGwTp324bC7aVkUnmP2sJzNyu3xpKwXyxa2QsFEAMF8EaZioxeREmLLSNcU8RZXNV",
  "key43": "4mJMRfwTeKZe13TNiktbxbwqbMGyyCobiKj1QNj8v1H7MYrcXoctUULSGTXEyLmJMMch4boAkds92kU84HoZusWM",
  "key44": "vHkrWSVhnCRuy7xeZ4tpjBnhsRiMCyZHteqhWyHMx7mcsW6pQCA2xt9fz3mBoE25Ta6Hr9YounFpLCyeGVujFTG",
  "key45": "64XX3u9jMG6NcxKj1VCcG4C6jht8ZZjYCxYSYSUKhYE6CvoBT44fSZ1y76b8DVFvNr3hd156YzUsyomtjQKDDx8c",
  "key46": "3x1zeC25q59Mww96kBDcMeYcmycJ6t6dWEAXyBFhNVK57uEkk1DfuSWG44Y4wYgW7188LZciqAfMSvQuZwGX2v9t",
  "key47": "3sKf42m8kTueCTAzHzLkk1RQngnVAqC8Ahjjn3aVkd69n8H8ZtvXJyJwNg69uJodQZ9kLeF5nnKg1wAXDELvnaYW",
  "key48": "4M43CpUUX42kKe6EMiQKAojc93yPmZCMAB3bHujDtPAkKqMDNKrfutznhq8gXoiC4BxYBZPKoc6uiPDtYsCUEXcJ",
  "key49": "52pJTDgnaEqDT6bCaNEHyLfgDivRjkEEg4Ws2PzywMNSFN6r9KJwfy1hazYRALRUYKnsBcNRBrZN8sDPr6kQ6P7e"
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
