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
    "4f3WiMFRSy5UCuGucfeFLzLuQRUq9yCcfcAgAFgqZRzDL8eGg4ADquHtC11hAopBm3ZyEAwK51odJbQNzHXDeCJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sWY58nKAomEfS6brJvRMHwziDKffd7ZCKf1BcXjihUtAhuSUSjDX9CGjrz7qZbWfpDMtxkjLCaEPiUyvSSGe8fm",
  "key1": "3Q7ZUsSm65U9DZ9uuTURxoAiRQcEzy9xhUHc1eKv3NXNQswUPqsP6ZrLpEv3UZExRt1atuhSfy13KTAvnwTGMN71",
  "key2": "2u5PnJqcyWaB2ntyjQR7aYsMT7wzbNyCzeEgtxes6nKZkAMwF2jPWpCb66jprm4J9m2KbiugQXQ6sy9nifwAUxjh",
  "key3": "H9GNxbHaY4HZNt5JLZWmD5YHNnMu9tirHivnDTE1mrqgWKuDdsQnK5jjNo35f1cbqFHheGmb3Z8FSgyUkpdDrrh",
  "key4": "3tGaVqdNFAQ2i3gFRKZygyGM48CRLctPYGGsGb4qjn7fS8j831GWYGuPfQhQHujbfAxnoeJuQWsEhzFcfk6Jtay2",
  "key5": "4YK6LqvYQiWdzJMAvhP1Aeph57jBe5CuRmmHf6R6fJozaQhFQP89Xgh1AiRYykLnxSWG1yQHezsTtTtfUHwAdNK2",
  "key6": "2jG1TGonH95K3462mkaKNxXehMSwhKWHkwoTVcVgQ4Yyn98nsVTgA6xnj3NSuz5r6mTqEAfvrDJuCJ4c14XUZDgt",
  "key7": "3w2xHLaHNFaZh11DKv2PyCT4ge1M7FSjbxFyuPHoP6Y8vbC22XuXt9xXCWYFw6mRQrqne3Be2XyCKZAp41nEKbQC",
  "key8": "28QXjHKAvMtgn6rLcJ1RWidT5PFRG7JGZgYU7Z8g1Y1mBB2fNHU78tkJD8ZyqVxcyPkynb6qwduvrRxzSyCwdup9",
  "key9": "5EdgwUSw2VDxguaU7Dd3Gi51Z3xRgZd2QePGUe2okcB5ykH4hPdfeFe5JHkE2QodJohcQLFGLSRbHZp5RxCjgac9",
  "key10": "5qvV2PWU2gHGeXiLDHxfW95zYKAA56MMu7SRSVoMsY5Zz44eZ33H8Y2o6z3XfFSpU4ZuV2gKgpvGXsSDEET8K9xV",
  "key11": "fVz8mkNC1oPJC9xA67X7MUwQH2mm8qarTgRzPE2ECRJUEaiZH1TbAFFLAoRPpwAgTHEVbRH4v6HiwLtcM6krJnv",
  "key12": "64YgxtMzzVPkn5gBGQVi8Bx3PygnVEoQYSqysJ4DxkCcESA8eYiaenFmpgdj595xR75TFedDwRwdMXT6ARyqioPr",
  "key13": "2gEUdrhP1GGwKWkPWQrxVqLBfwo7auJvWRjSDjcxdGcx1sY4wrvAFUeQuzEbeBUgCgr43rZiHgogF2usM1vcDJuV",
  "key14": "29iBw5sds6iWaz7NY36ocExjDjMgC3XpDgQvaujyDtyxmUT6ohfJWgfCEFVf7rJ2EdBg44vyqUB5JZedA9mkUUnD",
  "key15": "2pRbneNaSdoBgrbhEPVaDSRZkMZRi9cST2y63SjXDmENuNPomfDiqakhBjg8pg4WLjNCJvDD3i6U2E6yUphb5fTY",
  "key16": "VTMM9XE6GvDoxySo8EWbJhW36UArPuZZATfWmRJmb1y3Eg64sQEcHrKdm2GvZD571tCQqQzGM86WhqGxfpZohY3",
  "key17": "4iwJsmRbmqdXtyjSgMrP2xeyx2WauqE4pN4dvj1y6KnEGBeH32BmSJrCHnzvbyw7XxtZ9WUXCf7Q8xXj1Fy6SJ9K",
  "key18": "41E1sePwxyPtA6pvnAt9JdjuEocKKBy4d26zkLDC3iZnEjBPpECRmiRJKZ6P2NS1qi7opjTKgk16mKa1ozJxbywc",
  "key19": "4uV1SCqP7fNxNoCf1hwtiZ11GqjQwCqPpFLKPmivHzYWoRzAgxgRyr58YHAXyBX1fZVSA29JUY4fi7AV5hiho6iP",
  "key20": "3miKWK72Ds881fvF3ogT8FmgsK1zxYTpZt8sHaA3UKkZRGCRPQhwTM6kfxwZof4ymwRXub3bsVAXs5j5Jv8FwiZS",
  "key21": "4byPD969JsEVoLt1sJ2DAbU1XGFJh4U4tzta8BfRDWsZ4MYxfMQsD23G3K1dKTYPLUYouqe3ZmJjbrMV39rpa2mp",
  "key22": "CvoB78ww1a5A7XQCd5zzaWnNLa6dbuNkcrrRLetHk3svPw7bHL5Y9s9ce8H3WokUk4Rmyt5NE1ABkpDuVgrDQ2A",
  "key23": "5ohgYHpdXj4grp1kaMA917RWt8JvpzpMddYpATUPQQP7h2AUR2vrjUkK2SxGo7NEVmDrzxGPKeZ7zTLVX1krYAUD",
  "key24": "5dM5FQtCZP8dHtUgowsV9V6K2jZDEFKnfxx12FWGxmyqy8Y36GLNpiC4HXZo5riYuYMCnuWx2gpdmZNB2U9eS7qJ",
  "key25": "ykTn9fyoHDjxFPvkCN1eJJVsUsMR9GRiS1i8L1JbdV7RgRBNrtbYeJyv8beUxeGzWkYWNCw43XSqaoeHeXiukZC",
  "key26": "DPxMPmJ7CMTv4XbFowQVVtgVCLUwWZ63GTuaE4PrkQ6dgz7uvKVKwMu11R8n46LJ3Msb2SXVWrLhTvdPQuzXEYu",
  "key27": "3Kk7qf49Zf9qSvMBdgmcTme38dChbyjrCjo6VCePPr9uCv9B46hkdrG1Y2pJTUUFzNSoAAzmG9a5iiZxmnXsRt6S",
  "key28": "3yKV9f7zpVGxsVqfYcSwUXFSieNZQEEAVeeLMZtQwUxsh6TcipBuQVsXcVAcxmSrhK1VRg9c95LN9btWaWGkwxmL",
  "key29": "23GDiCPt2ywL4kgjSaHhF5uoWJhhXXm7V6QfrCb1h3TnVnhJ85YcVPMtcN7fataR84rY9fKvR7Hacp7JVUQ6BxkK",
  "key30": "28tBksoxzJQqdBNyEyvmdUmUr6fLKfQ7prxQQ4HkWnCZv373VRgiT4ukivaFiTUbGMLnV6qJemUpQd9X4AF3X7cw",
  "key31": "27oRsAQDRk1MF5pBYuD9PtEXjd13TEucYkZYH6dbw3dt6LV3TyRrWNcyvA1fvDezpR4MG8ugdDL2XXFeRPLXxe6K",
  "key32": "4Nf4yn7A6UobvWJKNEjhZdhSSvHp44oUN2DxKAq92EsxbQc9qJNxVBZdRdoNEkHUQA82n1FQnQ4JxuMnbTigxmRp",
  "key33": "5Y8pgZ4t9a2myKU5AWK4QWnc3JKrm2JCkrgeuk7AnGsAwKgESz5u3HCEmnqkCDaKeQJxDmuz9FP4p82JtiszfQYQ",
  "key34": "3vo4f58dr9kHpMprSk9nHV198oaq4xnK8BSJbXfEFNKYY1SNGYDTbfBEdYdjh9yL5oSFKny4oZSzZZQbHhs5UdLi",
  "key35": "5tURAmgnpgtJ3jFvgtoLioywJoDktPvXcX71tBgm4e8gFekxzCG4JzDtsEnLJssYWuaeTvo36JhDuE9HrSnRE24U",
  "key36": "V6rxEy5DihU3MisCxc27hpdaPrgPwbW96RwyZQdGmQgy3qJv2A5sLp2YBCCNsNzkvqZCW788NxxdWTRZP4cBy5H",
  "key37": "Zmw4x13cmLuu7gj5C1TrRLZsKUysvRpgYdG8UbRVqcPSapFFDkSetvzV3HhQBLd2vsL14TekZFVHcE6KWy5vEjs",
  "key38": "2nMuC38M1QEFx8aGb1Mif4yPb8HWixFigF2ERQdHoQVxvfhUHjna5qbMCygUNUKTttMpAWwEuVL9UeAAhjLgadCc",
  "key39": "nGqQKcS78q7TbV6SwCEK8TZSFTWfGFCpLqUMrqgkSUdfpk1tD41qfAj2oTie72PHbtjGgkqfwucQywtnrVXK4Wf"
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
