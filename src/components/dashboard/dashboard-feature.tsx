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
    "4ZPLR6uyYr6JqkTYEmZ5GdHUoVj2MnjFAYg3UQYQfDfr6L27TRE3Cj5394y4vhVCmLBPDYiMD4Cr5a2DtGrzUSHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iUizwRaea8U5oUi9qF5SznHgyDZ7bcPms8wZisLCN3AevokoyJwHNAMsCQZRNWFj5fEC6WVD8PDdHoPiBufZMhU",
  "key1": "4pQd2ACWvvkMPSqK7W5uktAW2erMfwH3jAWVmJ4gg2rkS66jWKaXpM63CYR7Swv9bghqxWZtiTHCN53EFgz1voWq",
  "key2": "3hWwbV4GMQNdXjwmmVpfDcyfJ3sLTVHTbnTHP2dsZBU5TcAn2Ky6LVdkWkR9bxeoNTPBapD92xXTb8MKKskHEqVq",
  "key3": "gr499b472XZY3UEytSC9odGiQQE2EJFWrDunsCVZmUgXyiGuHVCnVfJTPFMtbMpWyigwppaheML67XniSpg8N5C",
  "key4": "25o8zZs6a7mLz379j18K3R19G8Nhx4BPAUaJuTQiZNTEDBQfKHYkBjd1em59QH7Bei9WKykERKtSbUo5wE5sdHuF",
  "key5": "Tgn9Bp318a5HPBdTcU8fgLtbt956QtDAGu8sADAfD2NojBAm2xZgDVD4wigTEFmWqkhs5P7vX1Hyb3NzUCm3SD1",
  "key6": "4w9AhXnkNVAexrNDwwKpTGBwCQbpn2c3VLeH8ZpMgt1DjcyYDeq7HgNuWS2w52kRt8zQ38pBDyYQQRWg19veVL7u",
  "key7": "3Uoi4htrtinH9qUpqrZsnCHu4Xs5VuUTntuC85geDT7x49pyJUdxF8QSoMnDauJw1sVrr9yMeCjAwD82uFpwfUr2",
  "key8": "2cZUK1M8mRoaQoTnfR3BoMgeJ4zNsHHVDX82Qqsx3i5d8uRY8ezCbez3WPMf9437mJKAJyjoVT2nYmTyMoQjbVLZ",
  "key9": "491pdJGajavyvzwbWuP6xEiJTqp9v6KPTKYswZRvc3gy95s1deMUnuW9UsnNG4mGGA1UmX8dtpHfvzBj5tkhAafS",
  "key10": "5TkxGtT67wJQq2x3Qc5b6tZHy6mixJUW1r6pFEi8raYW4NpqNPKCcNLWrXw36RZtRmUnVQvFXY1TdhLX5ootmrp4",
  "key11": "3KZvyVx97gK3wLmrSbHc8P8crondxb8ZDjY5hiDen3C7poosYbGdikHHmn8skiHLL2TkvVpErWrTjSSp2CuVKutw",
  "key12": "3h3cShybSQgjTGjd6WX6M5RuzVGj9Ea8qnyH6U7hoiUCoBrzD73bEyiVhdUgVu5mRgp4pdmZooZdZREp75pukJ9c",
  "key13": "5rYGTqrEX4NjwX7itqzqsPCH5Q6AdBoeqKygt1uL4o4DmwgFRatNkxb6oQP3MKSfkYEQ55JtSdvkNXt8z2UUMWrb",
  "key14": "4vCmM1kUsFTN8tpAbCdaNc59nQxKRkST3tpy1z1YNdNUuUFkendkuMYLsmLQFTNkAFYgq3T68vFRJ762Y38wCFVc",
  "key15": "3FWfzavxjuFGfdU2ykQ1WXtxhJBXCbcrZqA2WhzED7d9HTN94s2XivJMDE1D3Av4c3TweoxeHwCCUQTRtsjV8mV8",
  "key16": "46YFnRXbVuU1vi8QVmueeopPmhe3nJ8ngc1mWMsft87xKg12hmYzMBBrzggyTtcH3PHAPH64LqEDQVtXx7pEasZ7",
  "key17": "2cygV36BRkbig5HXTQsrvWqpJzWaStqGr7kWU4hh2hh6jqvcuFCXSkrdZdFdLbnLhiCzGmqNchgpJPznrn1tbvEq",
  "key18": "axGjZqzWbPRr4B5BinMJgMfpNUCFGC79y2duaoYMpCRtcWihSgjVhL65YidAuKVkGGsJg3Dd7z5C7Pdi5VsRbJD",
  "key19": "zNhu4moXkZ9CJbCLaPoSTEcobiMmD6bWSHwjMAh8FYLTQwCp8kB2NLJHeyqisixoJhTjVxinCVDczsyqTUSwaQf",
  "key20": "2sTYvj8NeyiGT1MxkjR3uKDnhB3XUBKqiJ871Kt1u772GHUDQ1PW775wgy3vCd9mreWgnA8CieK38tTHeozPCDMX",
  "key21": "577fXftvA5oLYNgVoWuGp2xrX1uWR5RRnSfVoqTQh175rwQDhZuTQEvPXXK47eVXLN4oJRBmWYEtAp7bpWoxABtY",
  "key22": "4fn9A2WYFDyeswt6BUFsWSutiKTs1486mKz3L8p7FU6ntE4DHHisGXkb2XCZom3mrU6rULf6ahYr457yNxx7YHpr",
  "key23": "52rkvfSTuZoDnBcXwjscjwPAYa2NSQHr7NkVMDEDC6YxRa8gHB5GYUYu4jZBS7zxuU1D9rrRT3ZKnSD4Ldik6fhu",
  "key24": "4C2xikq6fZZAa1A2ykX6oKvqfuBikS53b4xHACo1vNyf4WKJVwWvWSMSjynTYg8aBNKf48t8rZFuTJiLfAmEQWmn",
  "key25": "2g1hw1t7J6J4fPxbCGg5UHRmyjqJjHrBC3zs2hCN44kovKaRUqp1cNtV3vindh9Ucz8PLReAHsR3gWQbaKGXwf9H",
  "key26": "3rtaLzd3XC7J3TRhozTk6iqho7PyYJXXC3Euxs7P5KTANiCC1PrxnTyw5FhCeUUgzGcEKgn7gy1oEXcNCWN4v28B",
  "key27": "4ZHEaCciiMbcK2KLcD82b7WyG9oZEcWiq6JVB4bcjL62u8bhyEAPY3Pa5ytvq5JyNmHv2EVN2X3w1AdQTMyoLfFN",
  "key28": "25xKDyRL5jgZR2czazqXXAxGbGacfo7WYLiW2B4Aj1iqHLHrP3PV49B6ZmdNLgiGaofzFPkz3atna3sgiauFvEsz",
  "key29": "QCDC93Emzht6Vb9WxttcxdoMZVDX4Hzb2hvHct3G1PEGmSxRx2JPC7nx7d8hQ6aGCFiD8VTBDmD2ZzHXmd77SRu",
  "key30": "3V1FxnrYUWfTKeftsH5DAVtNGwe18JPywZ31EPascrnpfM4yvjKPLjXvEMajeKDwBbhuTXznxJ5iddSQn5tbb7rF",
  "key31": "4ZDRLLdXFqRP6HWD7S267KY4xjbSKqnD8jEueKLKsCGEQUexHNc6N9ZQBsKa3szjmWbPgNf8YjHRjYTg2ChuGVya",
  "key32": "Md48Ko2Fst2yUqYqpw34di9VJSsSUf6FY3ogoUW1Jof9PRjNoggNctnD9pBSHzS8tpFZbQ7edR1FhNwLRTk53wN",
  "key33": "3rDyaCaMqco1sD1LCnFwmBormdwrZUeB1uguUof5LKgppxR1by7hUDyBKrpsAM14B9rFCy4Fng7pNg184qgthirx",
  "key34": "2KR6t3YScdzg4Vv8zmp3vmcsTi7RkHpyWRb976oaqhTMEBHaSEWziJERzE4oqVcNUzum5F2GJDQRq7T8tEE5Dkkp"
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
