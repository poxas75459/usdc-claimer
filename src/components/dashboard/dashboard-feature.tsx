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
    "SuTVFCWW1eiqUwjXa43Kg2EBAngBP7PLDj7n2wUsBk6NmpYBfPwo6gvnBxBFFLtt5nsQFfvyZLyi5sb6m1w6DRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yYDC2myNPcqUpDxTGPTGC3M9bLM6t9ySTN2PYEi2jQUrfohzZTUj4qF5dCoqqHrZis9UoAGkBukD3GmCv5R3Z8N",
  "key1": "3VVJ33ycFRpy4WBNJQ3LekoQvoUXD8NDonSg7SeG2kzbpoq3oDa4dy9YLWoygbi6BYLRW1NphKo1edmcKZ9aEuyC",
  "key2": "67VS1rCcHSrNcjCGiE2ZWNabeC8p5w1rFB8SRQQUFAos4XoEi9aQNf2rAMejMatUGfLp1NAyEk97nqhfjg35CG88",
  "key3": "3hoxrsWiFwkXzvEVdYaVTt4ZXAKtiBH3BujE5hKJcRVsV7iB6ic1MKAEWWA8Q12Cd7JdJRRfkiuaATFBGSwqpsk7",
  "key4": "4FYzHhzj4uPtZh2uKx6tVGSrBVLjVTPtCn2VP3MLjgkHArnwrs5fkFwTpnjRBLa3oh8KFaFmZygDBsCwD7CvhohL",
  "key5": "3mPXDwWXguipcR6x7tgccCk8L9dCkWovnyJW1RbAYju8qEZfkDyFLZdGi2rY1ayTtJb27LfGnzpdMEfg1Z7ugzCc",
  "key6": "3GNz7ZSJxzS9ePKU3Fyi5VRKWyswttnjeDZKNYCTj2vYf18dRpKW6z6LCxuZLEEmEfrNWfopwTVXpnWiZ6ZKb19X",
  "key7": "4hE59CyMnGXknCd16V7rBgJYsZpNauEWXRosctP6byJuxnoxUKmoBZxX1r8MN9rihwWJh6BEEm9VJYrgxwcBYGXo",
  "key8": "4WXqvRRG59gSs82qy6ceerr6nTjoXLDufyXtCQYiMdiCTrAr4wMqneZ3VYgXueMsr5MdQNj1VBLmzjN5ULZUpF33",
  "key9": "2uA6L1x3cjAtTQ9upBby8DDt8pUCJH6mXbjKdepqDefP89QxSzoNtBSdUFx1437fq9VT7ECAKfg8yAKcrHNnExYW",
  "key10": "3ajMQGeyjemZUJXjd4VeDwkQMAfwp39akt9rS3RgiFG9z2bgsdYPenjBXjfF6za4KRVoHh7nuudTcGMSWymA8XXS",
  "key11": "yUPqJaJQPfdmSRQbJTQWy4dyCYeg2x7CmXJfSpbstZcjXkvgA1gEWkGBfsn3JGKEMQDdxgW23HfyHvk4Ter3N9R",
  "key12": "2xX3Cmz8Do4HSvhx1G6iwo7CQgRHCZjz81MGk6puU3U34Zj9RzsYZtNqqTs4RM9eRSbYYeLqce7jpbM3ZdDf8acv",
  "key13": "3ryUsjHVXavchKiaWEt5EexQv5Wx9z2GwVF6CFdcgmm4XjT81ecEHBvnENPtWa6SR6bSGbVHFE8BKjDMo8bGdS3R",
  "key14": "2c5Ukw62d7gjFKKeh1TT96NPLHZ8AE272pca9qu15xKVh1BUVNKfQGjvUuR3xX1swnoZCj1i9WSQsb1x3GunUbVx",
  "key15": "3cVq2hePqxs4yQmfadv2KoGcTC41j4V1wBiaiBePnF8sq2dQqHw5LkaAwdNhbBRXX85cG5Xt45RTyJRMrWtN3qhw",
  "key16": "3nzKNbb9opjkDRTNp3ocphZFfrLK3HXfUBJY1NKTyizvhzxotNWg9V7kSGAAwLhUurfwP1oR5DB5x8wd9AGD9WhT",
  "key17": "4RXb7DreKe6ibM7ZjkYRyY645Myx7cv9PTD2nEPTsyMMXNAP3DJUAnzMgXXPUV9zW6KzTACPGE4TboerCUtmYbzR",
  "key18": "3H33Xm1Ac8BH7Yvf5Srg98PwcJC2ZymFEsNy9QbaANgDo8giLzRegJHDvWxCWiDQVcM3etgEmS7Bz9huULvKjjBQ",
  "key19": "3RARZMCzYC8TAtXzHVC9qwGfLaAhw564bYXWka2iY4kpd2PFSGEvVU1JYChFbAqgujXVDNUQZhMj6qt72f8Sb7Gy",
  "key20": "8zC3WjDATib1dvqqH83mcbZ8cwHhXDPgndcbz5mqyzc6yrwhkR1px3ji1PZ7PXRn8vaDEL1F96orWGfvkVos2Dm",
  "key21": "U81HtxrFcM4vtjqt7YGEW5cG8yoTi7WgP1LLVTtdALZSYdp31jWmYV6WpwaDNRyPM1Gv8Tpe1b5iF4wvG5zn7YL",
  "key22": "Q9qWXhft2vbsT9yy3ZVxAfQmPEerxDdNJP7YjY8YPwJCaCQ3sm7sjKTowBJKGEpx8enozkwREnGp67SqcskXpAs",
  "key23": "36WNTaEAqvEvP3phghmMFLZPeX3M5Y4PrgXyosxnUY6gudgnKgv6kDzr2pnY9NoWdXPfcBFSceSb2DdKTEcLuyoN",
  "key24": "UKyRAiqrMr4KAUKdyjDpwaxfMcwvMzdUqeYxDJcCzhMZHsKvXtewiQqEHjTe2U62qeoJFu2pXPVTqi9JuR7CccQ",
  "key25": "2rmtHiEXZQgMUU14SJM1fRACr7djDuCMcPuyD18xnPpfDDEgLanF8MXhVUgezQHGARFLPfAQHf41cQE53qQEVAgM",
  "key26": "3BuVD7REZKLCEKwbUDu1QFN21kV9nyh1UHw5xEmd7u2voGttBdu6ZZBKqbLF8tQo2YMtc2u9qJKk6zm2M6sjVttB",
  "key27": "5GFYyurvp2S2Mj2Y2cCFSn6TseZc1HjCmh8vNUbAyGeRoFox93XndFDwmVoJSytsupy9sfxZR6URFNpwEaqxyEjP",
  "key28": "5AGRmzJAYVAWaD6Kk616bvwjppFcfxzKXUS8WB9zgRfBriKq8168y9ajn2v5MprAdfnNKC4yyWscFk383Mv4zqQJ",
  "key29": "4ttbTRfyesRoyHepxcrjEN7Dy1RY9bAEH4Tt13uCzh5GvXH8cP2eFPqQFQczaLRkyuNT5c6yBLjZbrtm6Ci8XJRN",
  "key30": "KtWSCMPsHTpMJhHuJ12guX87FGqEfNj6vu2fZWuTFjEhzngGtNiWDgo97WJFeDdaGRApm1G9N7D35cF4UMWguud",
  "key31": "41q9duc2UL9zN2t9pFxkTD3bLrfo5dda8Y7ybTKS4R5snQkENSfkVRCmQY1yw5q2Ke2JoqVizqmHVNKztYZcUdbU",
  "key32": "2FwCveV4sp5ewdhnvCE2ojbj22agCXRtBFqiFDzQWN6YReosS8vQ2GLJdJwD4wzPiT6ZT92EFymKZAPnNTShLrCo",
  "key33": "67X5VAkb3kqry9Qen17S19qAwbXAh2k3HeeCf6JBmSqj4epXgtXWMQY4bKL4izhiBft7qrVFB9rARozyxAWaKWfR",
  "key34": "r5JtYduY5uv1KqMFYGp72Kbxmsarfy7YB9xjqBhzGGdmBBRMr32sVkK9VjdncbWv9SwSEJq48pQmXhTQMQtjQL6",
  "key35": "3qSuM8xAtETvXymT99RkW3KULMX5sZbHDFoyHfiA8vMjKWa54WKD3o5iyUt6M8oMFwZu56FL938y4UkMLxvp4vQg",
  "key36": "2mpHxBC8UVzxHEoV6vTXXoW361zJ1fCAuK7tdLpuhDJjECVvE59VRWijpLhd1FnRkfwbF1psN94kGHvkbtntnf86",
  "key37": "2CcXRoFtE2jtznh1huABsc26G87YMjJ1THBS3n4N67BnDWhnL2HKNk5zuof7nF559gyaBX5FgBnx84VjrjVqTGJE",
  "key38": "ebv91RKKoNzE4UpkLpXsR3jKFnXCVDzAdjmk4A9U4YfKXZNFG1XcoGNVgSe5QhoKzAWWzvgesksHmmKwzi6sCfR",
  "key39": "4R4Go5iZ65fEWFQuYxTdXGuDHGxjbQLX8LTiS7K6qEn6tMAA7bRMuRhytTgN2q81qU2BpkaWrdGxWeUsao8S51H5",
  "key40": "2cBc7Tp6759Fq6oCXqwBBx98zqRa2PAv5iZ5tTCRknxiKoGSk3H44EgxBqQ75rFjtSY2WzDZgagzKPJqG5Rw1VTg",
  "key41": "5ATueJpN8UC8VPsNx7PnEbAqTNpr6Aac1XBPjwBG6QRQPUxfkLE6uCB5YvZxKRHDAdYzmTN11AiTWvykJRZHnuZL",
  "key42": "4n2dEBBdjdo8hhU3r9Xn61eE7oeTkRtNNPs3TPntS7zNVoap6DHuqxwhxshNM6pnjaVrwZJWUqmxYyTV79j3prFu",
  "key43": "3gz3uZi4Lm9LXoTnKpsq5R5gANfDjBntNH3CeMdSspWzd69X1cbtQxxyPZUDPEkfjZJdKuWv8VzkWN6puQZFezaw",
  "key44": "42HU2sVsX8jbNvApQfrwNUeZyN7SG1f4QiGmhot8uoQUaaqnc8v8UpdKa7s1v2QjM9bBmuq9Cw9BHs1Wz8Wk4N4F",
  "key45": "49NzjcAiXUe1dk6oz9bVRFUvM5P8qsXFtzR2ZbVPfSGih9ekWkTAbea6out6nKGnhXytdnutZmhbYNxtxddzfJDu",
  "key46": "24WcvMg4qPvMvmzj3qKQRAqDZksqReNZpkWJBdkaZ75UvMydyJ567e6F9bHVn9iekh4CErokWXFzJB8fgeWkiHDH",
  "key47": "3US2EdYgERUmKwuCL5rS4PmXTtqtNYhW66CZEWHcYnsQmoXxrJA7o8QngnbRVqeysmgfdPWhgvy5qfbgbSVxWXQu",
  "key48": "4nAAdYAhrXxja59u9eTe5kYdxGvkBdLBczpso7izfESAihRpdZuetXUPcurRLRftfBjfiWRopyCk1Yxgc44BKi8Y",
  "key49": "7cvfoV7aasJ4WvEgtghrR5g2yi2LFbg9AhYt8EPLNkUxcyDSz4Z5UbGozBEJj3Vt8nhCS9bQ4EhF37VZziDpXm3"
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
