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
    "2uFXNUwZEiRYGHbnWLFEs9ZH4XqukX7bcF43Uhom1VUmwBBhzaPifXjojE32pwvSgUtQFjVWYKTVXH6brA68F46G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ysWqnHbeqNaFy2ZSB786xaNx87BsEU2BueyoeKUu8TwshJ8br1XPmmyKSAaR6JTKbcgsf86sX7od6f1uMQPsTKB",
  "key1": "5srmYqWSugxVnwyv5DeaWf7P8ELBUDGAzKhSmoGaRVzz9mT6FJd2YA3NyoB4KYLe7AXipj65LmPjHfCiKhpULiSS",
  "key2": "2DKU2FRHiD44SKH938jFUoMjLvi6g5BB6TBpLVMdBdf54nUkQ6XinZmYxtZVS1WhMSv5yyunKQRKUiP1pBqAbVGa",
  "key3": "49qiYuqCoKdo5cEYkRKH871ewtbeudUdy5XZrDmyUvKCNZATo8XJPbfVNKM8DW7B3Dukaoi7wVaWCckAtBtaW8oT",
  "key4": "335vN7snWsZAvixkCSDT7c8Z6gkt7gRE7PN2qucmh3DdRD3kcpirRQCNrspi8JyvAaBwzt11Bscgp2tAQKbB3uMU",
  "key5": "5ofvnJw5JpT7MY9FzTdzXZhdNyW3Y34krKiZzzkiu4M7oaXbJRsEFjXKp5doH4nZBgMA45njCRD91pXbMhwepEam",
  "key6": "5mXSZhRj2U7bYQQZESnT6rBahBThjUHU3VUD2nBvyv1mmnVoC21JZUngMSAAYJoipX9XYWYM14Ph5MeTWfej8hkB",
  "key7": "2RXKNJb1Nb3dLTNPr4jeTQwVSkFtbSz5pXi6YnZXzEqCGipRUWRfXSdvzSzGrmTR2p5BdBY8ovKFGG9ArsrVSrDL",
  "key8": "2aApgHn9ZCBxsosgQ2ySvE69PcWkJ9CpZqaXoUUsTNUfk6S3MAtw8x8vj7sLo6fP3QvNi9tDfhCG8KetXFRyCYiU",
  "key9": "4gxqYuLcHAbm8jQmXbCWyaFVWjDXDaxU27x3A6Zgi53zxTpaUcyv4S1ZgYWqr4qymJWWygcpB2gDuS7EWmka4Tuk",
  "key10": "4kd6S7qsHuWec7YGxeBLGRSdoyFbdMgFS7f3vtv5ypuQssfu9gfoXAMh43jn54zs1cfZ2YzT4g3KswYVhdZosSRt",
  "key11": "4Jeq6JNvE5psjCcNcPcYptirAZQo3zd34tw5nYxQiUvTGRKLDCSRL7ZGDawskkXAR98qbYNRTsS2hyK7Lc4FyyBj",
  "key12": "3qemoNq4BFR6YDPAAA5maYiA5ZDZhmvbMmwEh3HAgC24qveLmqjG97Z6QZsWWFZa712a63odKu68aY8icUEnQAbm",
  "key13": "pZxA4T2RNMxbK4Ht17XF6moEqiNYvYdu6JZyMnLTMxX2ztEdhc5untCqvRUe87A4fq8yoohUzPQyW1T2Nfiup2x",
  "key14": "3SyxCLXTwVq1TG5mmpGW7TFkKtMuVDzBLXRwAjkwqERrgYRXHQcgfh7fveT3qHtoMFqGXG9SuS7Rj6gSmeYfrx39",
  "key15": "2iNjf8bub9aH5MVwC9ctVmaLYWb1dYJ1S2SemsHRLoJvhnPmDADNdE36zuJyqPHBuUb34RNRZQ8tjB5cv4QvRgkX",
  "key16": "st9ZLLayaGdVadPP7vEdYLfB5NPJ1LGdmbYSHMgPRRN3SVDTx3gbdNjzy7urY8kxSmXWdM8CmpUtgbuQn9JYiVB",
  "key17": "5yPBwLHv6x8zg44yPRjPWxQg5zGmFN2xPaWSmfZSWyqSUqCXcFtxhFVxuWiJctb5pGZa4jKk9EZkFoakoGrY3sNL",
  "key18": "5FgYbwTeSDyR73dECMNtzek71zYnBG6nrwF8K1TyJJG6fbj2M2zcxFwWbXWvgE2aZFjcxE9e7jh72gFgbX2jB23o",
  "key19": "2umQYcqKr33RJHkL8voXSLV9AhLJUhMKkfPbxYSCzvcwhuieSnjfnEqnZmsgvvtxkfamDAm9MPRzwEC5RP94HLCV",
  "key20": "4J4LxCVxSjhGLcDDkW7zgsMJ1BMWHXPewRn57hWQaG3SsX1N2brTZz1szKae7WSwjAkbnNKpJtJ7xf7ca36Z1ary",
  "key21": "SeqnP24TNTmKSiKzBwzf7cs72pTTXt5SmyFZTvJtXkruJ8nvh7JPpKqGpCUHpgRHBU7Hp1bgiyyMGEeDW9ooMDU",
  "key22": "5YxaJtQr1aMYph6Gn5XzSigXe2XbikHJMRdu1pmsPThXuUmzeb4wMDr4JdB6sNvUSiuPsfT6gXe9J8EuUxP5D6LL",
  "key23": "ExDEpG4j3LaaXPJhXiZmRsYUqJs2yPmmP7wLqQuTTuZpST3ABxyUSFG3VgDL2VPM6LCULQG3oFBG3Hz3VS7WSBR",
  "key24": "2GtgN54SJcqDJznrdAonjHiZpLiB68AFqTeFDzRE3qKQXwiRP3HpDGAvmm3hEKUCvVrbpCTbSDaV2E8FxcWqG3YF",
  "key25": "2nFRZ5EsX4rFRadsAf1EMiVPsErNcSC3AyG27phAtuCpyskGvmA9qXwCg8aqAJL8pTmNgaeEmDQ7RT6m61DZRCYw",
  "key26": "5w3z4fqjrVsq9fH7o9gZqxKxdMkpWpSQTjAx88MYZ6BBYCs6ALGMjHucCHH2eFKESxi6M7GKfoQ4hkjkHF1vrYqK",
  "key27": "4FM74KU4iEsyEDxPFiuhTwFVGvuSdivcdkyhwS9V5fPThrEvuJ5MiHw1aYBfKmkdJAetZRdBtEsPDRZpttodsdwU",
  "key28": "5ff7F9hHg7Bu5kQT4qLUj93dhET4kFvYTamwSQXXbRRfryGL7LY82L9B6myjyJDgLJzSKex2SnPNrtGwWQLiSTEi",
  "key29": "3kurbJ5PdkzyDv53mtu8NcPW3NGoQo6SBoRXYnLHub8imxXQYL2Ui8FEU4nRri5q6YLW1uDZVf52rhaYv7jYfgWw",
  "key30": "2Ag2RgYbT2u9u6CftKi1npY6coZPiiMmsGgo9wFzhP3gMTTevMZKr4WdCqimi4RAuyGt6iXRH9xjwj8ds6bPsPT4",
  "key31": "2tJCdjJ75fYwf1AQGVZxve6yuqWtLx4md2Uv2YtTgPHTASCkNbKrd7ye1LGNuCeGapxkReWTMr4DVRsy8j9vcLBf",
  "key32": "CBzynAxqBFP64Pf6fFKgmcYcfYrL6RoDBR4XtH199jy5y8hn5H7BJ1V8Bn11TxFpNcb9U879JzzyDfK7A3eJm3r",
  "key33": "3eXQ2dpPLAfYkVPa7UrSLUJcArPhiesSHZUeMwDzPAgwPNRpjix6FvtRTBz39DXTK4ENGFZRowcG7wQNUfdAwsS3",
  "key34": "Y1mPX4w7FRXpEQZ7Ng1jZgEqxDUfzLaCnKh4F8zkdtGtn4BHpxR5BFuw8H34PvcfxFJ6igrFEz7tyJz21tZfuZH",
  "key35": "c6CUGH6BHY1aezTRsVSB7dP4VfYBQ3843ezZ5SSFX4LaSpxm3kzhnoikDNhaVZXxatEMs4XfP3wyqoC56XpU34E",
  "key36": "4re9nzRBCUYt9yLr7L2SfodetGRG2ud49BmVZHmp9WBg4x6aJiFdVbfFRAHTaKK7eWEKf6qTegKqnd26aZxiDV8x",
  "key37": "3vcWhEf1vFt1pwmDzkL63rxVa62tokaXqKWBBkXNDFCz4L1iXakmbZcTNsSgZhr1MiP94XvPXHxdsTCJN8kzk7xM",
  "key38": "FAV5bN6owYkZ1dVDkytEuu6rgqzj8exYR8ovYGVoJpZjLLL83zizowsnUU9wxizjpy84KFKhPbzFueLFjVDY9yX",
  "key39": "51SBnNDobzGSA4iaahQ6h8SmA8BJBJzKWnTcK5TyLUXM47cE2DWU1NQhHtp4yz2DCDo9yX1ZGYURVyN6rSusD8kA"
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
