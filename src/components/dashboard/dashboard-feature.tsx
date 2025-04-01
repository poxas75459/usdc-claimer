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
    "48SbQAm8tCNVJVk3AgDoGEnWTyz9cQoQFzfRc6ScpRbqgcKwtCLtqa8vJiBHDZRauLFrC2mu7vHw9Cm8oEt5nvXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51iKoaM9R8tKQsBwUCUDbyDLtXtzTpxfBBHxb65vX86qED8SvpcW8ETyxHFLwpQVYy3T4nmjYAo8ve7CuBMWStLu",
  "key1": "5U59Spx4njSg844rr7z9GfzCxx8yTXGvvzu6CHQFBK5bioFqkaK4yEX3NFiFFN62wLeDDsJzcx1xFniY5LbXGPKn",
  "key2": "3pXEPpMwAPmejAjW48KRfDC5gWHvfsevmMvcvtURXYA1k4qzumF2aBoeKuAJ8uQT3upFCocCT3UDKQQCJhr6uMsy",
  "key3": "5hA2QXENgXn2LfqNzHdkQNZivddiKS84vrQbWgPwvJ8nvsAUtcq92ymViAuVU2enHVHeRu6GxvnqsBaTnR1v6q29",
  "key4": "BKhVrfpiEgqniBZzKm8K6sWs2BfBbrtvC2mXtFEJTyeykUyMdFwzHBudCodcxpYEd3SSxEUopkXw9P3GTZjHuwB",
  "key5": "5eJHouJZRbMqmQz6SCJyMRHtJTbEcj9PzRcTCfvripf3LBAaRe5LhY5et3kxmznf2wD2GZFtziJuDAJRiF68rYbL",
  "key6": "7vfksTBZyq5BVgPi1aZT5cTPnU12CPCK13oncBcAmRRtwh8aJucVs9BAHE4pWcLAiEYEgNqVurF77dxXmwDi1Ea",
  "key7": "3XZPjLg622WcTvAbQnSQCEhpHbAnvEpSg76GqyF7oHSbgAPHEjVhZoQR8V7KRD6MHsawbdzq19hpnC2CCPKEyNtP",
  "key8": "3pRFnkFQ9q28KdBEi6u4Q7qz2xfJpJaebEkwd4CmspC96e2uquYpeDuYGQTJoFPubqEq4rq5EMKE97xnEgirtqUC",
  "key9": "62MA5CnXDQYpxnom9CN9QZFz8iojUe4DPU9KC3rN2dhhEM9WUZceHMDqAAwj1wktVhRAvRNu2GRkCGuTJSE7rCXV",
  "key10": "5drDNs5JwThe9W6rqr8te3GpSE351ncfM32ouZHX2HrgMm8JPd4Q3k87sg7UJevQFox2TTtL8znRu3hq4soyDAzq",
  "key11": "5vAgQ6n1mS4ZVNBN357uUhwCLDqVfQLyY5YrLrd1mzzzMdjb9wZyUpQ17sQ1PdUT73PtaWDrVR7YXsaRmgnfGrW3",
  "key12": "4owWdkrHS5byD7V9nfUw2JsJFdYbugsSRoaZC1F8y1g9Z5wLN7JqptqBS8qWgMhbe7np8hTtXiqxTL3xTRMvFSrq",
  "key13": "3oMLEHorECbhchURpFdiqyFzdJNqaPjnMn3TCBr4KgFdidmHvfU8bzzhvdP32wcVvRGgGRu1aAFC4yawKTj1BKpo",
  "key14": "5k4SeFisEFG5nXvj9UgvLD6s66AVu7P5rjc6t1wFNVCEJe9mu6Dh5DddDZFj7EKK5ZP2psqybuhZDX6duggkgs2k",
  "key15": "4wgms8JHqMYzrLNsyqo1biEucMJ5f248jZZUuCHY8KMXsZaFPeGGSEbgwp1jv52b7h7pqh5nKF2qzJcS5Y2KnaNt",
  "key16": "2Lyy41uL8V8fp2DBwJNTuccND6AKiGc13CnrPo7SWuGw7tnrsxA2M253DA2NZBfCvVSxJJnVU1VZZxBEz7uGB5Ke",
  "key17": "2jqYKcUzpbtW3B3HCTuDTmgCVei18JdtoUpEQB1zaE6kftNsJ6kDzbVChiAtVR8wJeo2PjSYvbnrsfBRoYhtzk91",
  "key18": "2nsKbRhfT67yCziuFd55oeWFsW81dNAZLGXws8jWLL4MNLBbTkiJBT9u6Rs6hSXL1ewTbBkrCfyneDv5VC9Q3Uw5",
  "key19": "2xrgBTKZ27iFozBqqioGCBAv2ALnu22E4REfj4TN59iFbwpocsibqERGYGfa9bnV4Vjv85Tbtvqewag5ENrYMrTE",
  "key20": "3ogqJMrJnviECrAo8Fz6kvhguRA5bW5WzToobYUzLCV6FSM15QjV7y7ubNcEGdQRJsAb9pBQ9ST7SvRXFtjP33fF",
  "key21": "2eaoeqzVr6pX5bihPKZZv4UvKyyAtZ4NJCv5fqE3oDzEX3Cv2cNgui5zeL6kqjn3BCnYy4355vajdrUpjruGNCrx",
  "key22": "5wnatYW6tzJJUjqiX2KSteJavAozXYJdJKgf9LVcecGtX1PFGt3fREM9XcJneG3kcZLLitCUui7rojyoFG6sbWEf",
  "key23": "3DRJiBMz13ySvFQz7KhbHyKPWcgnSfsVsaZoK4uBXtMKS84AfBFspn58nW88LpmMMphrWe6MZYm9xxErKFQWEqfG",
  "key24": "3U6gk2LCnaWc29AqE5s7UYdq9qFUjHvJsQyTGTQm8KgP5wEqCy9kAuaqEtWBEMK6cqRBFJMMC61oUSqZib3wt7b2",
  "key25": "5WKVFsK36c2DTHARZz49xBeDTNRKbfKJwPK42hnUdqREQy544UWyNcBLjWTKdBKFDid4CrvsH8pj6gz14uUEeyXJ",
  "key26": "5oZmnSExymS2YM7g2XuAZ219NokuD2wwPQupywoU2ytrGbxLWshy9zcBttsyUY5oADpLnztp5guFH8T2ucd56UfV",
  "key27": "3XHhfAeXUQmvzBzjtTYokhHw47BYzmKz1qN5F4n55GHnZJbEmKA4mx9dNE2oxCMfxqKRtDL8KqYG9xqCapn88TXe",
  "key28": "2iFai7AXABSro64vrdEqj1qVvnPsdzZJTMY4Q1m1oiDqeB21aa36BwpozThwgQrjH3SiQjmWUB7HoH16k4nsxAcx",
  "key29": "5vSo4KQhVVaTcPPGxwiUMYnX6MS1rKTkWkhDPNjXGU4iHR2rBcpy7ujT7zRgCmFNMUSuHryv3ueP5wfCCwgz2NDA",
  "key30": "3GjmAdxaxxb9xyPLCnjzwKomX6B8AtqRu1mVXbDeTWJESESz7g1QYkj7PWwk6EM824AquhRWZfjqHNZCUTeugW45",
  "key31": "gjgQYU34skCSw3T9iT8cJNgzNp5o3uKbEuUaoPXFFXb289w43SaGMqh4BTZN4uuU7DAFUXxJ4NBQ7KRsucd8Nk3",
  "key32": "5ED1Uhj33xkTgA74FMJNh8b8wh6HkcuzHmSEgK6tN695Sy74dzkWjhP6kDZxBnUhG2WnHmihADgBmMfhsv7iJXde",
  "key33": "3Csh56nGvnEiWDZTsmRYPahSKVWBTjD2UvZMmgmgkHSPyJasXCCy1StGFTUyZeD61Z2iifkK8wUzmoZ6H3f8DtJW",
  "key34": "2rycZm4Ec5dWSj6py8Tyua73syxqo84QUFrR1i3FuwRZemvp1omLJ3TbxJHvPvB37kHX6phFSurzqTUTiBCpHKPS",
  "key35": "37kRY67NyHgHSvorvg4F9kYRe5YuxiScyqvhrPtQiJGSWebYvubenTB7347mhefEbJmRYjPqU7cbcWqfD8MqEoeV",
  "key36": "2dM3v41U158CiuR34DGR8vkxEidEJk8cDKRRoDK57SCSp7YPh5aDaZFWDBzfA6c3KzepKuBCX8zp6MmswWtyHLtY",
  "key37": "66MNesrqo1vUTjC1VZahescbAhdTuycvT9WjeA96ExpR19mHb34HQ8hCi5rg6AQZbXS8EK39LH1nPYcwdYRj6oit",
  "key38": "4bb4EGiKfgTDLec74eDhJStbFWNZHKm5ZokPGLHMmB2svWhkCd5fMZayq7wJFD6ucDpUzQtMYs7Z2gPeBkWMVNrb",
  "key39": "MzDHPmhthT9c244diYKuZ58aktvJjPTTEkqcGtXTPrq2sLYF2cwcrEFERvpXKyyLYJ8k2Wf8ps4RKSba9ec74xk",
  "key40": "5vhG6nhtvFQZUjACQzPbMQSPkXjKVWrCk9hzM86k6487ToTQ3BYEjCotBsVYupQzMi2xvz9Rowqxt3JmAkAtVQRM",
  "key41": "hkmGhsw1Wye3ePxmxj66NUvLVZAyy5hUSKcksS8pXniVux6A4q31FLpecnPFWVkEsA2fgAmeNeXqNMVULudqJiC",
  "key42": "TNa2ycDTPJyk8CfPywQLWRhEe6mmvVCVH8W6RmXMPj9Cr5U2ie9dZW3qnkjbEjwRFnEbfsdaHU2GP3ADPVQUs8w",
  "key43": "5haEQgTktjr1p893775EZtJk8Z3FmAzvaZ18YSWi4jKX7uuJfZAf78ytCZsmj1dK1ESSfxxD8A9Nxt5c7g5TK9P3"
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
