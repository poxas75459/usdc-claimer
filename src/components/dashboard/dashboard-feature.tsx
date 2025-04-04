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
    "5RYUJaeZMfuq9V3wmkn3nFPyrXArfSvs6a642uLdcjnqiAoJ6S83x4CJLntsKQLChF3BUFkArgMxEdJEbjqLdCM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m4jrCPc8XUwTbQJ5ZDobfKQQST7cqscC9zs7jaEDX5A8bGLwPoGKiPiW55ma91vxGijfmBZ21kRXjFLszC3gxn4",
  "key1": "5ei4Yao9TJw3A4XTypvKpb3jkYRQftLstaD4q44586fx27rShrjEmQnrguYv2KGa74pJ1PS9LuTAYKhbiVqdgMFv",
  "key2": "4ZM57f7nXJM63sg5LfceTHY3nMr9ajQ7vvhaav4vxpLpExnWts7JrdqbUxbpiP2VFFSjBVeNt9ayxL1H9jpvVq9o",
  "key3": "2VNZVrvGS1CQVnWs1Wt2ogDHBiSZ6afK2MRFt397qXhrXkcNh78TJaZbzCEF8hGc7vLZhp8GkiEN5iL1GKdNAdu9",
  "key4": "2bdVgeL7LX1os1k6CbDatTcWJxfXrA1P7MGqc9JqsJ5vG9kgNq9DM1novribQqKCMqywsfvABmeL13YZR5Rsa9GQ",
  "key5": "46TnhBauNJxKJDERKWgnvVDRhs53q1okU5De3XU14E5Ra1AWDA11hRAXw7pY3a4JeTRATxS3PHBc4RbXeuJoD6Wf",
  "key6": "4edtfAvvo47HfsQnYqrnQnkQFszXkzyYANEiErXvft3sth29RssdvyKGjPWbkn5tYF4AgPy67EQtG3yvqPJNZviW",
  "key7": "3pmBiCiLU4e67dfZRYGc3zdXRfEfos8L3PFsDg9iKp8AxBu262rNLL7zuU9EKTUdzDbjVYB6x2myHcp5sY6W43AF",
  "key8": "5kZP3KmJDFttzDSdBnScecGVe72zy8KesPj4iRUF1S75JgovC1tDR89AMp6uKRZjgwMuq8AEdC4co5E5vHHgo2WB",
  "key9": "3Br6LQvMASCZVC8NhYNSPXjBXGP35dcS4Aea2SawUCchFd7wNMnojKiFqfHhMG1xNSxirge2HFmjKnGNXjJgnxq1",
  "key10": "9EvNJ2XPXc4vkLnfpaY8ZFj8tQRkHagy46xTcn63pUZxGUkpBRf5j2oCTZz12Bb2caDZoNgQKRNPnPZZMn62pwb",
  "key11": "5wfzZYgN8LfECdbEord9yG6oJuPYqnZHRisqAr3zfP8YzRBbY1bmVQyeiM7AkVtFmrRybCKJitRhgE2FFhBHozNg",
  "key12": "5qjHGF5gCztDR6jNgqts4pHUbxKLP52TVx4iKGs417wyA2VY2EQFaMf6QatxwdQDTpBidM6GTL9wknGfrH76ypWL",
  "key13": "4iXZDgxasqnzESfjkxPLrtW5VtwMW3f89tYAALHKakiSG7jyJPteeRUqtcASY4UuuecpXwom6YswhM2RQGr85dbM",
  "key14": "4fB4vf8BhhJJbZrKtP1CYnaEjhK5gerhGHvvCHWnrkUfts7G48w1cPU7ReFDDxKk79fLgP852mHxH7rwZdtTuL8Z",
  "key15": "2BKPuDiFMDFXZkUX71j2XHQYNKU57LcnpsR5bEQ9g6PKjpSUpe14pdgKeyAEkJ2nAthzUFUKiPCEseLdxajpyKBe",
  "key16": "5o8pEXNVXZfUL44uaKo6P7kZHJzxfc1C4ujvMmTtJkFrUy5YPazsez9wbCzbzesGx1nXDDj42ahpHLN5rWfC4dxp",
  "key17": "2hdUBaqJzW7TGNX8xtWLJkWDn1ZDUM6aXMWcKiRz6pVzQ1ucgNR6Qd7AdbwXer2YL37wiWwpPZnL1ef93QjpaUQr",
  "key18": "2o2RpuCcUESSCxUZ1EohDfG9his6PQzPiXJ6Z4Vr2wW7QTrnkEXkUEETvMBJTcoFCDu86bvVNuVcMWLpdfXgHLzB",
  "key19": "4A22MC3ekq7cwKWy3HhVgoRxyDWPQQa2Wtbij51kXV4FL2LimGetE5f64cJmW7TFA5CzkdZYNQetSsE5iLdxxiV3",
  "key20": "5GNpDXGfjihqvrvRZLQieBRQ9Q7MgmdpiFQsVnNPEttWk4djYnFZY2Xx3gJ1D31ywUJq1KU6r1o7DuDrsjMDJpmp",
  "key21": "27Vnj8nn8aQr9A2SLYAERkH5dgkgyE4zTRVZBo8yrPj2tfFMmQUMxbjiBdToEZyUbDa5dc8gk8L9871qva5v1Dph",
  "key22": "4KT9WPWQ9ZHv3n6JEyUjpT2QQ83VKa8MSZUaEx38Dr8dYKcLSsKq8aBh4q1Lvtq1S8o8mHp2G5fnCpYLbna9mTNW",
  "key23": "FM3zDGZ82iYT56saN42cvFmrVgNGJViEvsh44ebnJ1PhQSTTSjUxSWEzLkDindAVzcMJsa5FmxbZNcWnKLeesko",
  "key24": "2BiDKQ52hQTWzD8h1FYMaYXnattuk7Z34BDBnf2D7bxJXaXYEuaDyoVkPqpxFvLLqW9jALSZWjapCrBN2Z8z5Bme",
  "key25": "4WN4iP2hpAhFbR5xijGGViHwjGg8uWvLchDheRCCn1jLicHnb3yf1EP8pcATewwkHhHJ2uWiQ9vZRF7kjsNqwXPh",
  "key26": "5tzuaqAx8i9CqTjsbxqsjbRap6pU9RhxhBvWmMqERKoETzBPwEg4wczndGJ94UD4QJ2xYQHhqbBzfUedF293DgZ6",
  "key27": "4kkb2qvfdTSGDF8m1Z9QyUdwXsf7r9W2LmkU6g8TKFRVKb7YCeaBJWZAFX1vZpC3Lng4JGP6JgnYvYeszC8S63Fp",
  "key28": "m5DYaxDVdN3d83r3w95WDGs2aLmPwBBdDSQD2BXJRPnVekAzaRKRmJLqwp7VQAaXw7mHF8XWi4QHVt14Qx3BcLS",
  "key29": "5sB5onZUcyBJGdoUs5WXxyovfZLbM18zpnK6A3E4Em4zsDWSAhhfvb3C8xXEc57MANDDcu1yyFfQNioketXHcwHv",
  "key30": "X6MipK8kBsQpjQukB37HZovHPahtunSB9bR23Pg2ZFuHzzvkCX7NuiRhWQ7aELnsZZewCUodnT1VJzmxCuK7ZXJ",
  "key31": "2nhz92F3zCkeokfgocaTTxNJHuAg8QBSSDJLaYPJtyyTYbJYtvUeuaTZYZ6tGPDrBtzXuPyX1RrTeaszaFZZTHC6",
  "key32": "wk2peGNQU2yue4qq4PwrmK963zFxs4DT1X9WusL2cWyG8MPBDxrYFwVBn58VDxh4y4X5wSiNuL4iwH6SkjXSqVL",
  "key33": "2uUsqknhZMoN5yyYN48ri8UY9UwK467umRVGKsSaohQS2uwjSJBEH7RnGppx5KqcJv2mFquoXuZgUCqFQoMpYJKs",
  "key34": "3dKfwL7Tkq3YkSXeQbeNJXidVEr5Bu14bSt1bAt68dwL2f4KBxsewhR6yv6e6xoVt8fWV94UsuyJdw3q7TiDuf7s",
  "key35": "5LksCAcpZF5hHdSQW9SyvXGmAoNoXhv7d4WxAmpHg94Xu6SWcQfMSZ89fuJb4oYMB3vD7o6hnHwb5NCqJRvBZUKq",
  "key36": "2vWpgxxSjZGQav6bMGfzAMBdcbi4Xyyp8Gzj5gUbojzt7ZXcuKbDja76cKVfDYPRVRbdVEAoczjNVMJnEJEPBS9o",
  "key37": "2bDviAkXrS1rEsHLjJGsndcxnv2H4zZdiGRTvs2ZoKNWPs4bd9FTmj5S2TVhmZLBYnVGEapCgBB3jXqw1A6SbpfD",
  "key38": "2S6n5sEhjPBGxMx3qUnKRh8aD4Tm4FAUjpZtvYuWYjtmzdo6NWKUVu9fSL8JKYj5rNQxH2hppSzT4uepBXUk9yn8",
  "key39": "3A5Nf3jQGUPNc7stz5EkBQReZvtmyKAmnaaQsGnqEyLdpoQb7Guv3gCuT9b27CZccJ3d9KQr8rxqg6RT263tp5PB",
  "key40": "ZD23rF4vWMp7cytKSRRx8jKedrJZvwgVni5xVn4gbKJyHjBKzqVwqJYVdRmjqMQYRFA15JEa1LXpKczEnp6yJjX",
  "key41": "YHnDZfQUCbspbDZc5UTfvEciKcGFMebJRih5EH1KhyZsxtWzLMC2X5pFYo4W6LtUwq6Nj6EB4URx4Ud6ovYviP4",
  "key42": "5pEsT5RoNCiCth6XSuJQAUEysKa94huoRA1gv6SqM55jSt9rT8YeCq6rB3QEjudndXVtgbrGkZvWfNyDMF1h2iU8",
  "key43": "436b3kQbCeUW5PNUETaWAcqzco6vMqZms3Fro3LRWMYVJZ3GaR5qzvU49kY4GuRLgMh2hc8F4GHjBoaKSSHX9hNK",
  "key44": "JexyuZYkDqDeyp3mdwgrYBwg7kdo7tvwtQeBWUpxHYYbM7hHxucxHYknwU8tLa9zeQQbPirKKmpehntuug8TSMm",
  "key45": "2cxgK6Gs9UY5eDZCAhfgygNKEF5efQVAq6FViFhv5epBGgQQ9PbrcUtVuBydYXLBo9wSPj7smvohF6DYpNNswnzr",
  "key46": "mDMGTsmBnvs1mR7UzwJCu1FSy3c9oPLLdMkq7qVzajNsELixViZvy8xR6gdC1mE6zJANdyiG3XY6T1cGPB9vt8M",
  "key47": "5rnPS4VhqqTrfXtTRpMvC7HXLPXMom1a8ZNarrtfUyv44L3C98tBo8fqyn9qC7A3sA16RGRxanaMMErVtnyUMNUm",
  "key48": "4ViuEaPj344YijR4qUgvLGzcRTv12TGo4KqyeEAKeSYsmfd75Pj5i8kTmDCpocb4cCUr16HCSxybJomCqsbcxKnj",
  "key49": "5DtnWEa9kBD99wXAQHFbWzMNHyZuEqRt6rf1biB4eV3PqnLyzukHtSx34ZwadMBXTUmR2YxGrpXuNp8kKHcCFAps"
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
