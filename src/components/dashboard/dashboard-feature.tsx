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
    "3ohbMXc4b73XYVgnVGUmJmgfZmAkEuNGfN4dSojPwuYHDzQPUcRZudBGhhw9AjWXiUykSU5JaiGrDUQUHXgDuxJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hKjTo2UPkbDyEKbj3X1yA7WETr5ZMsbs1msy88Jwm9a14j2NZ2jhYSU8WTB3UEBF9yPSj8kzoDEamnSKiC4Bgmv",
  "key1": "2Jfs9EzibFB8eRfjhRJpbC8d7NrMp9Q7MyGK4jFZjc3zYJszz7nAvbdwW3XEsMDjjByYmCzGBsoSMf8HTEWxGc65",
  "key2": "Te8HmeQcV5i1pVSA4s3JX7wysLmAJP1PF3NckbebE6DfuxsTMJCdi7tLW4ytZVZDMHSFDt2jw16xa2sUzd5eHWE",
  "key3": "2GGYPuDfyNUBRMHKLaFFkGZcAtAx4bxJdtFUfyCg2BcjrWbA8qf1yyysLJsq8uAMavLgQzu8bHftXGuHEZeDsST7",
  "key4": "922QDWGgGpReqNYZVDmYPT9YE94MGNaCES7KKWkksnR3BDn2RWgsSXQ9cZTsYtwT4TF6fMNownZfrHAiwq9xNuv",
  "key5": "4xBdensCFwbqCGWHvZ54id1fEMkwoKtoHmrtND7pxmTGVks4ESVhvgQpEUUuVtKf94JRYcoigfYd1CTwrejors5W",
  "key6": "4aZid1kSU459TemigZVzur6tZyUJrEVsTb6z8BgGVEEqe56rHCoAfvmWv1y1jwYqvuB2z4m1rkqvC3D4snf7hsKa",
  "key7": "uvd8DU2rH4Re4YotjToTdjdVXEKsa3LUYDFEjx1JWpVhtezRwdgUk143RriuGFH1zfiFMbwJxRKc8nkEz4Q1yZw",
  "key8": "5gfzCWJS5ovPk4w9Y4WqvDPUCTWJhwBVdSCMfT5CkQ35Pyn5RMQiVW2DRmfbcHUJXZZFBSFK1PNu2tKHpPQ7a6Q8",
  "key9": "256BNYk1spW8mQT8yZnESSrGav2RatbFpR5euXASy2gP9iMQFXks5Ex15F2z4m5XZ2PtMNvhbWHVti2xMzDrDNb5",
  "key10": "54U4fr3ZmzmYjH3mx16rREww9DdNFmLm1BwUxTL9qkYfefsFpHiFi9Uztn88cgPwRXVgnGY1yPQAUpv8HhWGcgiX",
  "key11": "4iziCiS3SFj5xJoGx45Giu7SZ7mKgsHdMF3WgkB7vPehbmqTKGhoyeCyttoLxi1URjJSgm7nFiYyGjdJCDrvcYNW",
  "key12": "4XQ1C44YV6PtCEGzeZPTjSwTS2y4zZUHXYTQPTZMbgavUg4PxB5RLsPLiNwCe3uTgzvMSXz6y8BnMmTyCoJFpwBr",
  "key13": "s88fdGzqTHGUicySsusWKTweYYRWpnJYWgs9uNUyZHXrWvZbthZBZx73cJJsUZsFV69zGkzaiVtyodTRejXHeaH",
  "key14": "3FhHvMkiRHqrQfN5sPczGSRuWivwtNNoSMEd2YDtvLXiwNW6qNUJ4mHfdnLnHXS623xRiasR7M89jicynLj9zKuN",
  "key15": "4qWzEH37wH7ZDdYw4xTkkjykqaEef1GsaWtohpSpbRmYvCb5UVcNzCzYrAn5pjned7dq7cUDbRc6WzGTinWMSMJV",
  "key16": "5YrqhfiMaRSHhKnXxTC4Wo1QRTEBp67nBUBZ6cwgCox5EdymM2ChXxPt24KnC2PG71pynnybPqJHzCxwRDHd11NH",
  "key17": "5gW8GYd58XrUxYhk8speDqyMNLJb1tpuzJjXCyb5GMVb7YCHEWXVPfDuV88JjZJNczPY6Ka3WATvt4XjeX4PFPaj",
  "key18": "5BqJn3HmKTugkurzdX7Uh3eTupZxBgD8gkW5mHmkpfmzYX8Lm8NpwChfHuzmHtm2HQQDPceCQVMWBCzPVij67EcU",
  "key19": "4bc5YdyhJAsYd48Q37g4UfTpBxrnkeDEWqC5S6UHeTRj6gCTh2RQREb7Gnr7nQVvKRLGL8sVz1PBMkRVDje7wK6E",
  "key20": "4wzAEHpyJ2kbpaZQoQBZnrftQ1BAK9WU8suFQZYiDLthTKgdnGzZx6cfZzxbFSYjhAGKHD4jC8e6tqsZhmCiCEc8",
  "key21": "3438YaKh2YMTSfEarC3UMwcgodRSqe4ycWZXSGH7fHeVhpXTySCnHHKsdBrmcvfcBACEFd8joxVkgRJXDjQwnTzE",
  "key22": "4gKrLhgSghAyTHmAGLxAbq2rxomKnW4WPhkmtNxpQFLaRPayzc8MekfBz7iNFMz3yDLqaMNcFBSWvTu5EacJQkG",
  "key23": "3Y3r6EAYm1tbaHfkV97mbfdrbPf16r5tnKYdqBjfQCy8ch533sGCgdL76MMCGBmuFXPo8rA1C5jmUcTbA5p5Sboq",
  "key24": "4SZgVNGgZ3cPLZ3iBaQcXdHj6VShPYbLz1xfFfjfq2FVvDXa86BsYqGQ1gjP5rShJRTdPJeVBDTYAu2kzfH6UmKT",
  "key25": "kiSnoo94RnrmLN3TLw8gjqkwGRADwhLg3jb9uidWJVnRM4DFa9q3oXmTHiCvmW6tdovjHG5vgLQYpQ7JfwSb3AQ",
  "key26": "3oWgdgrWEmRmenNmbP6mcHpcfq81QYNofq8ddkAhWtd4TFp1jTZYZU9HukovrMq2cxHZ7bwwbatnvtZUHi1acNUP",
  "key27": "GoRY18gY5Y9kg2Bt7TGPPobCxHyoU6uvk3LjKjd9PyTNUw5YQCzmDYr57TaCWwnNYqo639vR9vuELtB9gqoCiGA",
  "key28": "4PevmMvey16owh375i7dEqmPAr9XTAerC7X8yLwsRs8NdPDPWGbZqkgEXoefP9Lpvu3NyY9BU7EcAj5ZjgdagY43",
  "key29": "oimL7Hb3KrnhijLPXmaxGqxzV8bTSuaxCjZYqnvkNGjy6mYKVfXj6GsGYUdubciTJdRL72TbPVDPqxMf7CKpZUV",
  "key30": "2dFcA33XTNHQLexBiqBBiQy9cEwoVr6Ha81VaSqFvHgv1kmggz81oh499rKoCsSVRXc6PtrMDENw9tR9Y9RrhYAn",
  "key31": "xGZy37MKjqhjJryhXMcRSAy3imaH7BBEBXcGuhBiJfTcYfepHfcJR3r4VxMMhnshza7FtKLNS6M4vqvADH4Vj7o",
  "key32": "q6hZU4ufYF1PU2KHqhCTSDSJU7DGqEBz5sKsv3ngMNkyEzMM1gsmPvqw3QDAfaa2xwksNv48cipRq9Ug3hiG4EE",
  "key33": "ZSBeDj76oamrhH9uaqothCcQhZrZuzqJbNHxzeLoYK6CPA48kvHFi8ahZ15mJiENaF2wNjko74b36PCE2dRfj6K",
  "key34": "3x68Bx5eDAQRbswM16TLpj6y2yAiVFUe8ubgjUVwDCLpm3WtdzXiq1McA9r3FzQVb4ofnh9HLQg7sHvCCd7yVsE",
  "key35": "27oUyMDdNmSqJDrowQFMTHMcAHZfLke21wkVyZ9nhyTMfD34ML67KawZUS9hJmiAfLrMC7FZaZoMoPkJwd3ffAnN",
  "key36": "5EPKSLmCJPcyxnFiJRLcVcP6viBBYKshtFKGj1gd3feAL5QNQhnCjPNDfz3TWFVd5BFzaSS51RTndHGkjMCVVu81",
  "key37": "4yMMBGRwMNFtabb3cyoXMxJV4rVEXKKmcvSaS5vxNUxx2TVtuR63iFZCicYrjcsU9hpmHNcjLUBqKuFdZxGMc182",
  "key38": "XAhiVwpufK89vVL3KTAF1HBpKyJqRB5yGJnkeEGRNBryD683MeX7UeKJGj6RBa4ainrkifjPnxyWy5DSJ9nQJQY",
  "key39": "XG6qSmfAmG5y8Zd2Mmrp8KM3gBiKJ6cb9Tvo8rxoCkh4pKQ1XQeEFFA7XCNMD69yZ28jbC4JV4LzYo2bv2jnbKq",
  "key40": "3AhTzvCxAEhaGePV4sD4EdHj2Zu1j1xrJTnKLVi4tW2ic9j2xhGteNQu7eCng4NE5FEjTV6yx2ZhR9VPJ2dgccJ6",
  "key41": "MsTxzpB15f5LszHexJ428BxCFeFM2Pvf7goM6uFYfk1bh7jHK2ET3qucbqGBFsuv2cU4xMwoDJgAUJhABiz5di5"
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
