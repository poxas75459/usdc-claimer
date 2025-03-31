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
    "2EtB9e3kERe8LZYFNFrzNFRPhKCoFDNUp8bkurbkg3icAFp5dmZbti786ckQGf4daA7RXuzNSGPjTuEdukhUXnQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EGXWTNLrvDacb7xauTAT6iaHAKTPvGuXaV9eU4wwmWF3GoupMY3zxxT3C3YeypKafH7H9TCqNHAQPDdMxU1x4oX",
  "key1": "54APWTybtY6WWivyeKHC6n3ji4wSGDheDoAitQcTeiPfsHLuG3JYDUokwnQjnwm26XNobQzAkFC8yCR8R1qj1GnU",
  "key2": "3iMgZ4vQjqLz7e7ycBjTe9xNeDbJn3d2wMrefp8oCKLnj8K2bdihepf2L7vryPGd3bBSVMyxpb2pdDWLNFnrYqzo",
  "key3": "4uXkjG5dtcPyKhmG1rYmSeFk73addqErHcmF8N72tDTTTJTmminV5EQbU8yeNBk6PF77AYfRg2YymTJwumTAVU8Q",
  "key4": "4hHQewqB2DS6yGSqXToT8XBpFtrz2EQRdZ6hFk2VYnrDzohnVTShQepAcVeLZPAMxs7Zgc21NL23225VXThRwUj5",
  "key5": "5bDXUNXBk7aHjH7gQYsrpg6s2MUKMb3H9YjickzcKkxyjpdEcbLr3vPt3aZtQuQ2jc2xCFgYjWrorydapaF1z7Q9",
  "key6": "2Kr4wCNJUwED3iRRte3LmNE9vb5BrMKC4pyUR61cqwLNdG2xJe7uhRCk6bb81PwFEU1FvHyJ7ukrC4yusHBAQJfJ",
  "key7": "54g9HSPaNECJ3GYCxdaDsdXH46VFc4zg2pPHz4cW2v5E9f2heRYKMQxwtf68UxDCmq2KHDGLgWpi2QefmL4piaqe",
  "key8": "VjgBz8DDqJSY58q7Gch5Q8mxL1k6B41RuRcqTrcwWi617ow4uAWpebw1z26TTe1eioe7HCW45K2M6UdkvMNsnym",
  "key9": "4fHzcZEXHKp5kF7H57SjaqCbCwoxSXW8MMM94NB4kXqKLFPMZg7mcKc28VBTXM4kBEn2iu867jRDBCQEGR4bbocU",
  "key10": "2yRHuerPdxRNozt8yiRQxyakaCFpqU5nooy2Xgd2P7UiAc134BMnGRzEypuUj4RC7pLLGikRrKu13oBP6hyKd63Z",
  "key11": "5dSSnfNdREUCdfLKk4H3tJ4LgqWsEmtkKe2RTFn51Fp7tSX4eGwfCQGtwGEjvTQ8aaSfKNmP64uDCw1RvguBjj75",
  "key12": "L7444TAodrGZs5qTfG89uvqx6RJN44QN3jXV4YnpyHYXCwCc4dmS7o6vAxDtufwK9HaHj26J8C85bNEV4GH61J3",
  "key13": "3ae8vUaq8DHrfGvrhmtK31zUBdbbM583VvXk56CRd64cY1iSSZRFVKCu8e75stExwLMUpDmF5EnJGhoCaQMystMB",
  "key14": "4jdKubXG1NfLis7CX59EkRFHKUtwaV5verkGExR3hbUXr9Yism9QAobQckP6Lq4H3iMBYx6UoteJSrtGZciTUS4W",
  "key15": "34u6gZArgAPkdoaZHqNRpxXXQzEjeTVULfHEV7VqPLowAaVePnQR9bBGmUJYCi3dtNDm3xNgvC8FRfehnS5cjGR2",
  "key16": "65ppZJXU4SzxMExSCifdVbCkcP59iXTiw9YM78Wz97b7fao6Sfs2avSWq6yuXyDanEgCiW6WrTCkUxaHMwLXLaMr",
  "key17": "3VwaKTj9b2ULanmBrHz429rWfL4kTXXNmZf43kEtQ3fQiyz31yMzpaKmZuzJtKpsmDnPA5jFd7YPWDZcTUceWFfs",
  "key18": "5UzBiBB6My5gGreAfvahioLDay446BU42Xh3jWHCcR3i61yXJotEXuy8wQ4M63tmqTwM6de8bYufX1XdM3p4G5K4",
  "key19": "47MEnUPMYf1Pyw6ucfzyTK8aVcFEEX6ABoE6RTcjgk3kbVGsrcKy52Y9jsuLYKVPr2nhQn2HmSKUtKNDMtK3nRtA",
  "key20": "3gzCeZx4yQMPHKyzJNhdbbdxWNm8LwxkSrxexxWKyFd3xmTKGDtQzzAYpYYykQJv14im4ciheBLiDgiDm8CGKdKk",
  "key21": "2jAYrAJjeGx4T9xetPPFNA48FL4DU4Cani8K9LZVwtpmNjmGCZFH6KQH8vhxXp9kYkivXjr2WiWCUCVVj6nQpNwh",
  "key22": "5C159SdPQeGAhvpsAYHxftr4B5gfrMEXek1fMURd4aieaYbSdJeKwXrmoNJNj1n49sEBHPwXCms68mc5PLTYYbV3",
  "key23": "4sefUe6rVyyD4Ufz8SM15bpvS5qs9vj9mcsR4WZdSPySUuezCMcjabVR1ho1ff8LyuchGPxyB4J8LqieTeBjpoBq",
  "key24": "F8W9VS4mBcXnjHDJ98nT3Cm2LMntsV2Ywtju6u7sV2HZpnvCNgkZcxzqHHU1ewUXuAAbdKbsgSeL1cCFg2XVbsQ",
  "key25": "s4VhNUfRsYrWSXpyGUvViKstzEGrj6Yd2M56FfyydHyXmYz4JuuhUbhqdDe5wDiPt4nxEP3tKSZ8C5GBCanpafy",
  "key26": "3f6gFtTn8ATtp7rWAxW46Mjy8s4PaXk7JsNmmoeFQwDjab2XAwtXh6rR16pEfrFxGySEyy4rJPa6Wd6JU9XJgVsB",
  "key27": "56ewv5neTb8G9nZnuBVnJXuNDQJENnKqidjG7MQDxTCtRtXJXzXAadqDZoXKGERhkMLzN7d8a8NU2daSC46YkhJm",
  "key28": "2CJ7K9gvJjQgPhLyqFCoD5uDjbny27oDww6rA8e9t7mULA54bGJPwD5tmEW8fhukk4cgSpASKgi1eAonvce8ucGr",
  "key29": "3Y6LCPqkF1g6xEQHhoMYE6WnBuGBrf8HDuCgVD6VFBaBwFi3Tpg7Kgu3UjjLQmCkHtVrTQVTk6pZ7MuX77keFQNa",
  "key30": "rgJPLwxduhqnesYX9Sg4rEeDnirzYBgf21Rg9wijU7eFTjbTmWvdcmMKTFW5RoVGspj4vpyMX2mWoYiippx3tbN",
  "key31": "2G6X9fMgV4faVC9HkGwxeJ3SSBEG4vqw5ZBqSyQew15zNaomr3gfd8EN1g8sKrT1scge8evWNyoYuzuFeRkFnnUT",
  "key32": "3PZpNfWw7iPd1bbrdHFCEtpcmZuExwtd4qGDHfJ1VZT1Xj9SNwQHwQMdwW9vCVuM96hMxbSJ17bn2gJXGoUDQNUh",
  "key33": "35ny28iV3zUrJHWF3ELUPYWXT1Pt3bQnAYnf1FmrDeRo53bqrQ1f2xveth5M8iWYak7Nxi8Ws1gtzDiSLWPS5x5j",
  "key34": "3PgihMd4yf5QAT456ZZNgF595ukwY6q4QNXTGhCf3LN9etfoYXVw2ALjox4sge7DGr1ogdwKtqHZ3hJCq1kKJYet",
  "key35": "2aRX12e57pXQ5Qc87sRyvJzwhX2Ng4Kgspgvd8RBg4FjtWBKZBy9an6EkEHtaJ5nmZ7tGiKvL3As1rDn74qbDhGk",
  "key36": "2Vo3ew6nTq3kWk5kRNFiooqzCebK9gWECZVjubkX4ahvjAvAPyDybkSfS1XL34wcys2jseezZJBC11Acu3bpqUvM",
  "key37": "62GuGfPp39NZaJNbgdpRAhaC9QttLHoZW9ahJ99jhmRyT6gEJBCHrfmzrZMLSvpDq8vnCHBHNEdvejrcRd2M12Un",
  "key38": "2HRZP4218evX88TJ4gUsYrnwfh6j4rvfaTHnnzyGo4Pg8nWNM4uVz31nkC6jniFHCiBM4iJtXsNU31iMrxge2HxH",
  "key39": "3mcNUBkGKJqXQRptSijeAf4uT4CLagEoVdCQQ7nZom21ZHEUBaVPWMnV73YGL6NJDAgvpjuWvG6NR6HAdG3PmMVx",
  "key40": "3ZRK4K2NzU4t9XfR2hwM6AJg8HDSgND4qd8xuh4yUCncUCTCqAiUNoU15ZqpW7ftXkZxQH346Fx1Xg2dkSGqPW8M",
  "key41": "5RBW78UdWX6W55PBVU5MxuF1bBPFnDqVMn9p3WM9a7TEhViwgqkBQQZgz3ocavNviXk1Htv4qNZ9z2bnRv1foy9h",
  "key42": "4rKUBwRoCRE7mNW1Q55HohP2T3a7aqvCeEKL9mSyPauCx6QHMGpGf74vT6KLLt3Xdvr7grRanY67itXyxQe7Arc2",
  "key43": "x1z9mATHwFi5rFqjGYvWNVLRzL9x3FS2vVMNgj3BiFwkvJtJT7NLsovcqXEW7uK98kbRgtiJK1XsoUohfGUNnd2",
  "key44": "62A2JxSSRa6RYxqijkzmPURmmaksCSHk1dLCz2Z2wnFNjkGctDSx58B4MqfbFQt1kK7aCig8rkw32jXsPscJ8U6Z",
  "key45": "32xfLHBx9y8cW2hpmAX9mhoD4nGzKXAQLKffGXVmnMQr911fdVvmjdNxJpWJM97Juq9SZvWranraPMrKhNsxe1sZ",
  "key46": "2zZhUa8fZoap6rHskWxGaL4ScLsRFgyQDCWmmJz3yG6xeqRGCkvftzcDyc57JzTCo1ggLyYvLaxxcSVtWAEo8ECD",
  "key47": "2yd3Y7fVutiazWfBbTacPfggspYiJk63KZVz3FmbDgpXPEDTgXzvxJSMKAcypMLxYMWfJJXRsB5JVbkfci87NNTd",
  "key48": "WfMXREDkm6YX1VbUdxnUpJ58kNvRPceGcLH9RSqNd8szPSEY1QgDR7LiP4EGdpw8fnsqzmZGYprDGFJwjsStxKj",
  "key49": "4hB5aeqP89KnjuJBusRHd8rvNgkmur7YQ4qdo3DL6rwEFG8CqMFjQmgda4j145q1gMZhLPUhxHeQdmsDzuExrL9o"
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
