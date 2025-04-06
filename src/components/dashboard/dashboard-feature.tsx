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
    "5Sqjqg3GL7a3Qc7cJ27v4BoWu6UXrHc9yE4vWv7D9jK7dwcMu7GjFrW8vNbxpQFd38StazMMksAC6pdtpTBe4b7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GUju98KN51vGiNoZskq1YGGtpHKJ7c9Ms7YXfUMb9sAsPup9UfbFAyjMZWruFv25VV2wNQMWmtnc2P86dfbk2Vx",
  "key1": "3oHgjxNyuWYRwoXCN2LQskVxnWNVj57Ya3FQp5cEFixvanVJ1ri1Q5KXkj5nuAz1L98MeCgxfwBRarHenV1KDZ3R",
  "key2": "41y4nXKD9uVzmZED2dzFYBh5ney2QJVvmmhQEH8hW4WMQTC7bNZszbPFs9gpwzxnoiYWNXYPAKefDGcEES6sdkdz",
  "key3": "2SZ7bQfPjHXMdZYRhFV1t7aXvreSNDecsWBip1ZtJVzSu1MnkqiKaseT3PR2xmm5qbinXhcWjWAyGNxHusZLVrNC",
  "key4": "4yjaDiVLJaNLhRDJ8yhXVStoZ8EymTzCb1L9y37RaBWnzbtBEAGBAA5peEGpy98UqgekXQUgY45JpcC98oGL81Wn",
  "key5": "CzHLtuPgDpQNrov1BnJSNAAeLZgAcZ5sqYdjUoCwzxbCQXhd87jySjwJ9yRujvKpc5VHr59C5gdrDM6YN4TAz1T",
  "key6": "5tr5omMrJxp4a2Scydpt2oW2Gr6vsQD3cuJoxdzMaYXkJDaHaTUDKiBBPi9zYLHwidiUyrzPQxNrcfC472EV2WzN",
  "key7": "5pitj839V4VGNXSawQNBqEB6WLdV5Yqv4WVGDymAf8RSt8jWqjaWNnZPoJ9ews18Wa3DE5S3Ma1KqKtWxRQojNhN",
  "key8": "5cFFZhFNMS8tXbhU1kcYXEKmhU55LvLbTXZSWA4cGmLiqvEWEn3PWRpxYMxxsriCJLMXRLDDSCvN8g7focfQE4La",
  "key9": "2YQr3hvCwbWKr1C8riEKrr7cvW5S8CK8KDR6fhmY8htreF47SXaUwRExvuFRxYUu7L4nZLarKe89B7HssEzw75xk",
  "key10": "rkxSkZTMH7GPY9VqDZ437vnjH82eGW3o8rUMvcjh7FV6DZH19iqmamRRURBSCRybKFuHDr4UU5atCZN3rDJghC2",
  "key11": "4y6Us9WSDgiHPAYab68vcJGAsNCqj4WjBRBo7nkUyiKNJujdGjj1rdkQk5sjsGRUgbNaa7cgyo43LnpNayF8fDMB",
  "key12": "4NPp7B1oT6nJkE1peoyTzofa5WLWL2KCa13dWGLTZR7tqbhyyVkGCyYz6dUC2icseinwEYFw5F1KCkjakx7qiZ6W",
  "key13": "4CNAm6mr2JBnpzENMyX6FfMApRVYgyorVsaJDJunBRP3BjBLxXPVBmYVroqnSFXnvfqFzA39q39jdfuzNMdek8GS",
  "key14": "ybbpawXY25Wnev8ZN6cyocR4G1CZpJfPLaLMuaAPWrgFp8FmzpyxiGPcG6qfHvEYMq2XKbjXR3nrLLnW2cWkh4s",
  "key15": "5bM613mXw67ceiGzL5QX6utzKsGQor62s4yz2ZmeJH1ZfWjN7QpbJ6m9RxTW86NTBQsdQz23M8u1PZnsvtnmob3t",
  "key16": "3fSP2gNJ1aFPSymForerFXTxZq29HvetcbqcB6skK7RSAnYGdaHsjdvgPE8rm7uRh4GYmLASvSJ8xDEztX1qh5Bf",
  "key17": "ZMUzeqxxVY6ygsSdQQvJCDMvdaoUAzUuJe2nTuSe8wUABfEkgmmLzvGYTQ8PZK4huzGSJf5bHkRRpLnQqWLXRgJ",
  "key18": "2QZWigXrEsxVjMCZGg3DdAU1nqexz7UKRNfauQFSFx5j3Ke98XcwYFMmPmppC2d4kSA4YzuUWXEicTGGtZjDuKPt",
  "key19": "3amJLih5vUs7eVepjQQECtfvSmahx8341PPmEt8w2o3MeLVY48XBdgfwUUwTG4h2U35KLmPBXTuWUmhSg3YF9yKQ",
  "key20": "44xFQateEooykRcxBCjqCntL63wNtxUoks8Cpq86pfRUvpA4fPsjTRBqFTY6JRrYVye8NhPawiKXEn7q5uMko2K7",
  "key21": "3r5pgnt13FSRfjoRmySEFSCB1iAvB6GGFczvZ7h5wmhzLGoiRbkdiyBXFsgNcEzCnYgWXpqHKFku4VNz1btUaLPJ",
  "key22": "hpmhTph7bQGWv7oVoYA5GqYaSNCc4inLpojXpukH7YVe2Tsa65Lk1hpJQRbD6iWSBU3YLHCCeKZXyoxwW6i6oMZ",
  "key23": "338APuGdqYxyjhBoFfoii71tyLy6VvttHVvF7uxrsV5MTMHGahJombBSZEAWuFMwtGToPYCfDKr3eZqSk2MdVQ9Y",
  "key24": "44FcbC5DaWUwTX9bkiFfNR9Kg1xup1UMDQAGw7LPmNtDCSLyuwcFH7bcB3qj7zxK5wpHkT4vWQQhzu7uTZvVorqx",
  "key25": "5zUGzSoYKPwg23vFEmQrFvTweX981yUuBnjN7BcDJ9uRCvXzJTzJrnoMMGwpu44XLxELqmdz7Cz1FWwahB2xvWsR",
  "key26": "3DJPyJi7msuX42CVMYxXCKnaTadSKnTrc6NqCUztyMs8psSr4bomd3wHaVqTZmVDVeLz4AWrjpRhEABsso6zQibD",
  "key27": "4ZrTsW2BLgEmArcG9BGswDhgFm7WfocHTaBm1Lh3vjZUvXnTC7VggZnMcaa6ECUvrnfAA8WvHVDmFeVeV7uthnLd",
  "key28": "2o4WzCALabDrVFdV8DjuG5a7TYCPPANbWjRJBJ3vuhKJboqk63XdhDxcEKj2UyDbiMoxZjkhX6LGX59z9hrHjBQ5",
  "key29": "2XXUA9N2GPxmSMatMVUdZUse8LYurMnM24NJQ6uGVNjtDWP5uvUsCfyZSafwrbnxGeWChTkPWL3B91eBkUx2qkNV",
  "key30": "gtWVy4QTcXxL6ZPtyXswMCnSGbhUBZ2i6Gut9wa33VdtWnmRAF3KMppjdH7z6JANQYgAPoHFd7Vys5TguBuKiaq",
  "key31": "5FY31qPDinsdD2RcVtsxeTi3bfytZFQPRKND5uFiwJCi3k7KXPYm7KunQF5j6W3PaiVMcePnmPZDz3TqHBp2gX5A",
  "key32": "4bFzaQvhuTCjR9vRaF9aCxhLgxKTcaSiZei3rffW9DEoTrzeubxv5keJcysupwiJgsuD2m2GLCyyET46r4vSwcTC",
  "key33": "4WTXkC5mePYs3tk37TJFkVEV9orhi1VFTY27sbcrUS6wxqq6KeKtJhTZ7193iap4X5mAAe6uP985aKipnCt3rJ32",
  "key34": "5pZwz1sFnT2s87qF7PGULB2SoPKjbzjyXPNoXKyC57rSoVBAPGZMDxTzD1HsKzob52ebXjXSE1rXS6VqD2LMaSm",
  "key35": "3JMgw9K1MkCCU75ux9XTsf5Wd1CN5fMcKAz6EaeGsDiTnHicCPNDRkEkMnwinnU7W53B29eErjEZxg5bbucfowiN",
  "key36": "4z9PDnWussAmLUKaVBN2AchVCKR5MtA5ZznYE5KDUmciwp5bR5vk3zwrzWWiALeZZuk37ngg6ie5TFPa66vQ4BoJ",
  "key37": "3Dq6QFibdqqjn4QaZyA1piqQTqQqb5Cur5Dt4eHWszYqSJBytTG2vkGfdunT8vqrcuqnprCt4kNP8AKsufRriAjH",
  "key38": "5R6bSPTDJTt3ZMGJJdDsD5KTxq9bzTVtURhXfxCqHhUYhwBaHaWQV7nmZYML3vDEzCxeSqTz8bu9QRG1qSPGWKPu",
  "key39": "2yLZpDc8Scyw9sZQAmvycQCU5y2xgvPz4MQvG9i1eCorrxZ8h8BbPEjn9NptoCVsS8x8YsrsNY1UwqLiJwdJSTGG",
  "key40": "3EMCDJ8rcGnYw6XkoCGkQdUSDyZ6Z4J3zj8pF1bu5ewQc91Ai7C99gSFHZdJjGaW5Bjhe158itRCSQUy6ozkoxwu",
  "key41": "3p8WUsPaveCWkuKzDUHpqWezgkNpHacb8dqbDxmFyP5JEAXwtPgTkvVrE6xTaWnbtR5EEEWRbeMNn1LyxEpTUbZ3",
  "key42": "34wCicvE2tXgZ2NTE2qhCoBq1CifRVUY6HLveGnEeFQZeKXYEyeF5AerEp5p8UcufSqDkuCMBUsJHK8HFALNNedJ",
  "key43": "3SmNJYQums5XxLzYnehqGjeMvcYUCSTHHZrVdhyUbixYZik5q866wcB68tDfvnsPrijkZBANsxGxE2WQPkDrusZk",
  "key44": "2fWs89fdXfvwQZEH44RqpeVD5xTBFDr14StRF2LMCXMofpioUYnKtZzRSG8Sm1RwqrLhNGA9x4kqLvXVEQ9at8wo",
  "key45": "5tUTLkXLsSS6DrQb3M7onCmvp8SqBKBoBNrHfqeRhDHZAMRuhnPVEz4JqZJrmnMrRZfnaaR2fqdmo3btEUsGFiw4",
  "key46": "RLZk6bP1KHdCKidA4ycrQwrvaiCuEz8idF5wvnu1W3t5trD4W7gchfvMjveevN2ChV7qavoyiA4YgpMSrhpzKLD",
  "key47": "4JjbAQSkv4vC4GQdR6aKDxxvkS3mcZTB2mEiJWNGLYQqNp2En2PFvfZAMyeunkZSzCUx937yVmtAZDURvmyhDsBC"
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
