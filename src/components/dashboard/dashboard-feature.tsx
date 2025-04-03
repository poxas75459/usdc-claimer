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
    "4aVwLopGQZ1FgNa6u9NExavWd1uG2E2imRyhqi8KvuPENxVCa1qp63kJbRJ9TSMSnYJyfMxK5n96uFq1Gxojid7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QxnjeC3haCNA7tEzuCacpdDVUeDb52N6fmZ5jbGSDE49KNEySkx8BmVXYhFSVuiVXqwJYi4pH2pzAEQ48V5YHgC",
  "key1": "5SZycLATf3kRzsCV3KogDiXdNvas3JMgMSTXB3TgXqejR4fgjpNCL7PQtMdZboZdvFkgoDaUeUDvchY9DMDuYLxY",
  "key2": "5S4pzsf977xLVFFwGvQAoxdwKNWnNwUwyNkUxQycdWA1QC5iBNXoRHg7fSsH3SXtL2MMPJnjTxUNqZ3DMxaey1qA",
  "key3": "3mfXoDmvoVjzGpHuAcgbqx9MZtm9APaA46GTPqySnm4PduT6EWJtVj1XZanEwfrqKHsYL37369G4pKFYh64jMgd",
  "key4": "4ymqC5jFAtXenUJ3PH8Mb33ajdnh7VW7bxyjGaV5qFxPFCaRhE8ETg7BBGYDKnrKNxpjc7XdGSVhPuWTXEqcvHAk",
  "key5": "4djy34Dfyji4pwkqNnRsizJaM2EaU7kdZUqUNWwS5URxhUfMKm5HbTksBL5TvbkHsKzTAsD8sxUaNBsaGn2TYgno",
  "key6": "sPFeQK1PYBLwDKHqBYrYK6F4bQLKwba915Mf5s9VvC3LW8iTd7tB3ndwt1roLmisxQ9H3Vs8L8GpwYa8d8ErQf6",
  "key7": "5jqDYNsojzrfXFBorkj4kVwmwFmuBLVkinUaaEbxbyD9kJfitaamqyUnq478NhoTedLnUtG1bv4DG9E4xZrVLx4Q",
  "key8": "qdKKSVQBYgk1Np2BiZwvezQGefXuCtz2YZ98fWqYwwugGskPXrEdwKkwWCKYPLz3cyZdS9NkusCygyYgZX7u2qG",
  "key9": "3NCkPmf1FVuNJk43f8ajJafdKvEys9hxUmB2BM6soguVuwv656QLFgcXYoWMbrgHqJNgYSLqq2iFYmhpw2W1ZpSS",
  "key10": "4zkdPyooznHoF2q1XwmfzBo4x5xiSVfMCfgcugaKHEVyfjeGncgBe5cKcsJkT7fuE3xmvg6gH8JT2y1vsKdWMwvZ",
  "key11": "3jzowjf7Bkj6eyHL55r9nLhHkYoD3Ld3phEXaBxDumLkLvNrna4uiT31VQf3LpJkcWTRagCkjGcxDkAPmBrMYGVx",
  "key12": "4Gz7rf2z8VBqzChJFqAxjaBoH5xCV4hcRJdtrtt47MSL9u9womEUAxUqpsYSCU1gvWfBFcDSKWPcGnnnh9jKrHhy",
  "key13": "z7rGsxFk2zEjQyQzymDFXvjUwV6eARNMNCuBgFSwxYCRtvcB3mTR8ioeD1Bs2nnTauajpSGQWD2ND45Auqy2XCL",
  "key14": "4vpqxve2ET6CqAi6RPhFc1dvM2qnWSWuXMwM1kLx6y2bPoZveS8Fzx6ujnsauyQfYZq9AydkZW9x1BGhH7xWSP1p",
  "key15": "3FWLc11aFTVj17ZGAnf1jBQYFb8UmcceXY8edhdZDZJVFpM9B5XNWuyG648BNtHz5HCKjB8fojQNSfGmrPcVo5Wj",
  "key16": "5hXuzPXvVjw4vuVUmsYGFvG69DQBhVtfxdrbsALLsJpTXRdZKy2Gb29teFVoLwPt6ikC4LLVU4GMaJu9FSCz7KWL",
  "key17": "Y2P4oKvsSBjZQHxV3WUv6dZsNj383EKwBUv1LjTuHWy24ieqbud7KeptDvyZZTg9hh8qeHNcvvGg2sNFtbx1Vhv",
  "key18": "3f8HPBW1F73KJCch3TQkS371M4GRLhikD6hSdT7advfVktF4ou8qDmcLcyAZypVtosbudFEe5TXw9rqYZgYdSpKZ",
  "key19": "4nhiRLjvTQg6XvFddqkRNkWagGgrpg2RSxyPtjAqrpZ9qm7VEAy5xfB6c6Gv9ptg3muJ8dQmF2NSvvnFF4VKo1KA",
  "key20": "5bay2qJDrjE1NeoiXNqmDh1fNX6NYuNNYS1FjgqSvcGLAiYj7XKQUFzViZhY6VptUABZGa3SH3Lci2eSmGYKQ5QS",
  "key21": "2FDo1zqzNHPh9nijgJtWPHN8Pm3JJ9M3phQhdB91ZwqKt4c1QHrf2155HXFmLFshzboSb2voWZSQg3TUS8QDRybu",
  "key22": "Xwmfu1JsEmGRrSuHTMMh4SFBbdjifJU8nMtLd8rmKjogEeJcs5LWVfwEqT21gFywaq3TvbBp7DowAFyeZ5cj43j",
  "key23": "2FUuUj1pwuikaMZmcf7MXqj5UbuDzrDDDDaoMnzhpjCPdZBNUdzTokiVaLcCZ38PgCiTDMSWdErcG38xexPGoRzY",
  "key24": "3MAEvJLXRX13HUQF5zpfqJ5XuL1pZ9QyYuu6Z9ohAAYvUwuLtZ7bbQKiqjrwrrk2qDuTHd6eCftko9ZsDYyGjA6F",
  "key25": "2tVUJ7T11arTRWrpbUwKytKTRfFTrjStWf1ESEpyvqoAvfa4MbG19Vf7AjXQywoZxZQA3UqevBxnBfdvhT8PefSQ",
  "key26": "65stD8N1DxZNQAsDAtKt7CDXR79a7dJ231NYhr8h8mUSSDLnZX8VD4LUxuzyKg95p6znjVgGJ2BiR3tJnFkc6TdU",
  "key27": "3m1MMERSfvLUKSVC6bcqiFkp8soc1k8Wzm3GQsnrzX5U3DxqXrzvV3QeGPfpX3JWmx6M85RnADiNe9EiAHpwoPDA",
  "key28": "2F7hKhEY9UFKZiNo7vzYM3ajaEoBkcoQvZbNTfzVHEJ1sYRg5din5k7qXKb9xyKdmkDwiqpmaGH7APUR3zLkMgA6",
  "key29": "qBUMz9oyFUDVjYnh79q1byDJWByX1CAW4Tyb332ANYBFSNT69KxeBALo2YcpvDtfpr8s8pQAz7xG3NbFt63eAez",
  "key30": "57kvjC1hJSywkh2YsrQHwTP4ToMmXRfcyninNn7rxvpJMpDEeMwR3cUYwrEaxjAr4SRV3iyBUc7BMnSgunqFyBD9",
  "key31": "ngJk9eh9BtPAmnQt4JRfqYucjsDwqKi35ohVutapv96F4r2pFZ9QhN58xH8qSNRoi8TNygjzAJptbRWqoTme8be",
  "key32": "2kQC1pd731Y58hEpTS5gJZtdcNBAdTe5YkRMZCn6GjTh2KcCsQbxe2N5LKoBrV9gqHoQeEyTAEpGonBpwK8PWvFB",
  "key33": "5AhRNcaanr2idExJGR7C2GK7UbeQ8Wskh2QCCAQDAJpURTNdbPKbH7EeiZ8DnDkgYJuWfJiZrRUpyQFu8Fv3qRGs",
  "key34": "46wQmP9fSjc7aNymzRWyubjZXFZVacny5StWF4F7BpGC8McQwBkL1QesfzVwd3pkqD2E9MMgvZNUF8pG28KF2U6C"
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
