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
    "4iCSjGpbbesBveHEzAPkRyMnPwBQsUith9G9t6sqe9FuyhQ8ZabXaiFSUStjNz7XpA8557M6H4DviBYpSHWcnwRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VaVp3iTsiyZDGaQNDisV3GZFbWEL3XjNDXNmWfSm2CiHDd6EkFRxZJqBzK7wjVZiCM81XB2F7keJp6nbiSLUMh2",
  "key1": "2T3vkSxnMDiruZBVPJFM63y2956cd36xsfYudaHgMrSpkAD54ZxGrZZoRUF6RHtpGN2SrrPq9eVt1uV8mT3PoyJb",
  "key2": "NzkLPZXe6nF7qrHWV5RVWtkzp5S2sgZ4xX5zBZzHw5Loi2EeYcKzYzkBjLJ9NGBkCSDT2b82XzaqG6hSNQPdZ3C",
  "key3": "2kXBAbqfqAhALcpXhajZH8mhqj1yxeC3mWkhQEAGrE9vhi3QUKTYTkVv3MAFmXeZQ8u1YD6u1AGxUCyUp8fL7m21",
  "key4": "4M93huxzWm6UQACZSjCRswqrF7kAn41Gfs8bNvuryv5V5UymPznvFAwyTNuUHzztEHDHG84mwKjZDavyds5umiFc",
  "key5": "XQCzYcJ7aj89w9bqzvSSyCBstedbfy1jyndz7cn1ZcVp6XsFUfkiivkUypaecucb9vawQ2CnBsGtc5s8nKUFtW1",
  "key6": "GzZ97NKLW25of4ZYwodWdeYihmfEtajsSXyfLF3f2SCgFKgbhZRe3Q2wfVt5R8rJg9BcymS6KYwPXEAJH6dPRvV",
  "key7": "3eKumpy5rBxZsxMk29QjQAag8su9tYhoKPtEg13etqughYZnTFhJAcJz4BW9HKp2bXFyjvDFFDkM4Fn4miyMmjUc",
  "key8": "RG6sXdcTUEMqZUfwJt2FXZBqUiSnC8uTfKjdRuKQyfv2awSbCC3QTNAadn2tg1ZDu5CuG7wqZmPUtF5g8j6yrVM",
  "key9": "3tnA4Ca4YVHBGiVrsDDEPnVohd3RT36qmLxYvGLqowzC81wxewX37VNxmUsER9AVMwkMJ6wxrq1pXn6VbiDkHgwt",
  "key10": "px356ph2UrCbSitg74swCYAeVRfUgX5gWVULq9gv3mW5Skkm6iPKcyRMdgdfS274Q4G9rhdS3yD7y3y1GfrrrKJ",
  "key11": "4WpfUGzhvQ7EdXBC75gF6i5AcYCxSxTxQ1WpskAjyuUzJvcZeDaYM8wWnkfJLY58ZesfVBj47YVVKYYEvccahNM8",
  "key12": "2DdxzHPFr7Ecy7rp8eAm7zAXRjCnufXGRhXJk9mSMsomNSWk7ismF7S5QdhXFp9PoCmbRwz2Jr2eCo2pJgMUFH9C",
  "key13": "J6qZGyNU4Fv7NanUfxReiXbsRHeSwNj543E6VhxiaGaSwgnK5qMAQTRfVpBSzYZgiQZ6hNdt4HaeNcQWtkMm1Zu",
  "key14": "2GrE3Xjy9jheZpyjpQXDhvAgJhPTSpL9PasF7SMVr1AhTdL7XZEK2RdJjAjzSmML8pU9TtgkY8qb4aC4x2B6dei7",
  "key15": "4eyZQnD5sv5noNiBv1kU4HpDtPCvZJgeWLfckV6yhRvNZPNKmCrygSQDVtdzrNnHvKQLdpcbdn4CUqv87YbRNxMb",
  "key16": "4cGiTcYby3HzgwXQRVrnQAGSAm2puCxw8XJN6iKJBVLMUman4GxSHmXuaWZ19xwpymmdGQ6WWzN9J9DVJzTYAN2m",
  "key17": "4dKfbnmrCEQ1JBm6xuSzz8WLm29bvhptUCFwgT6LTGo9s9qgH3uAz9rGwcMvsFKDoxPQLEra9nqazpLnoSMKisP7",
  "key18": "5NDSJBFdemXd2q7fWTDjZ5qPQ42heJgAmPytrKvBLbVHBqDekWa7esaWdWRQVw2fvT7e8yJHCH4ef5xRkNuPY8uL",
  "key19": "61DNKrtrH7hmcWt51D8YJqE1HxA91hmfany7pJcntkAYQSEFCLDkKC8ivbJMR81H1xyerJkhZLzhFiBQjcMr2PGz",
  "key20": "42RDwYAHYEz9RSJEmuKBm9QCmyLYrD4prHdBn2ARkax5FEZEt8EtmJWj1Kwqgoy6eGmQyru9sr9UAze78mRKZGnU",
  "key21": "21XLjGsvzjb1QfSA9PiBC6JvsPe72JVhE6ntjQ3aorJVzW29CsXwZqyPfhyZpnqQDNxU1R4QpoEQEZEv9CiK9KKS",
  "key22": "2rkU37wZvUZqPjhRzAi6eQfUkVi6yoeG4TCjEcEsBTejKZP2DNQN3vr1TPeMAuJ5fmXVp5MotEcKfCFrG2V7ZRb1",
  "key23": "5VMshxSDCAS8z4oRycNvb1DMSgEqUVmnPVkxHyhomzukKTd9k1CtWwJzzk1s6MGN2zdx39AMxBQfJWUEJhYnD1GJ",
  "key24": "CRUb5XiSwF1zpLvBidNao49qHDTbTxbhWRnKgVQRjhM57QzHEzZbmVPJCwrpo1JKc2TDH1mBYoi278KpTtEpUwQ",
  "key25": "2Xf9Ghfrzg4AJNKxpcjcN4uUgFFyHskFGWpz2ws7uDXzpziwHyazkW1JqB6wzSPyWNKhFfjyjvTHTjCgj5qN1k1G",
  "key26": "4fvZeSsdt2iCTH5M3YdsHxomWAqN1uerVkE8WUCyq6cmAoJvcjY1dmwmMRegAxFCZFwXzXpw3vBzX8pwsENV6mDt",
  "key27": "2xQa7CWqWWCywPLe67buzBJpP4F3MfNbft3ge2ronzwX6NGQVUhPbgN7vwsHiuebQvw5r16sxGtBTQVn3x9N61XU",
  "key28": "5Ndn5fAQgmW96TkaWksRgESYxPtwjHCDpCMac1Br6bCiReJoqEGpDMpQzZDLULt9mWb7258Gxn3BQzWgVx2FHP6L",
  "key29": "3aacMs1UHkS9TtVgwgAJfM6ZWNqdTLTDcZm8sgCyoZX3EyDBKAx42yMJCE4uVJpKTEsLG9Ce73c7TrmxTDmoPpxW",
  "key30": "3LSE9d1iMegD8X2L3DarQVEfq8BCsB3Ress2S9xveCdms3z3MWxDzUPYcuhU21EhUovHpeK2DPyv7Ak7Yan6drPb",
  "key31": "5V6g4kKaCKx9g8SVLKoB3E8RJe2F7TMAcjeTVEfcahE7tGTDb6GAzUo3WE6H7SG25x4xWLjJNrTvxetfp8nNThMw",
  "key32": "dSUkL6gkhYoAjJuyFuT2XgrjiCgmLQe56eENvCZZ589Xy6niCmqE8SSqFAFR13xhqK8j4g3ukSmg3knszMeYhFj",
  "key33": "7TqrePDdwLMLmzwbzoeTFGdDZfjMQDy5sTBn1Up3xQZduD2cguDLbcurASDPvoSgKvoHEv95c6RH2Dw3r4iBAcC",
  "key34": "3YCuFqgqNA2qsTjpE2X11Jegm3m3r71vhCrCUd7dDwhaX5qPfDsyEABKmewan8Ah1u8PDiy95nKiWS84DY9GVqpm",
  "key35": "3AHXN4XcqLYtDQmrfdvcNL3WeekMAviWYDmLeMXM921WBxARWMKEXEGTtfnLoiuJYaNrgfvM6JKHwVZgLEiFQXdD",
  "key36": "eEU9ty5xxYBPqj8fmAboQMhUSuNpkuAejujiduz1QNKuN6KFXm9PVC9r9Px7gP3SGDToswTTJCa5dB7BFPwXdNJ",
  "key37": "4J84TULiJztYkhe8JYBSXfvdChqLSxtZtK4jXvo8Bk4yQLTMum71f7zStpZGUZmuqH9zW1GvthqpDZiwRXcXArzp",
  "key38": "3Y5FGiMxQ6UWSPpGYYsKWCxibJxNdaLPsuxmYXEMsfk3RSPVPLKsfnTDH3p1AH9eaUDFHZXc2gjd2d4Ug6QzB5ia",
  "key39": "3pYJ4SmwZUV7iNRFyNYZ5tSWLNDeKFF3TzaHjCM5Mx7hhvzAqzVKLVJ5T8sJdrTy4W25oNNLuJsB8bbuSg7KNySo",
  "key40": "4hzDSqkknrF8bDqUbKh5CvYLysk4CYBejHY8TBr7YYHpKXVLUoyb9eeXDrK5UJfaqShoQSy4oXdxhR2YvijsBnYe",
  "key41": "3c8hh5pDKycn6oMPwEo79Ai3Q149fy2GL3eyWwTTTqgEdwYXiZRvyvuYZvpfTRZmTaiCj6uUGojYy3kv8Wjs1PRP"
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
