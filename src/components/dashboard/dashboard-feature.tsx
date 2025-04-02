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
    "5fVYxkNmFN13tArZ9UJQAhda3rep1R9XbWAV5ZCSwPLLLhk3eywphwgubCvtSjfnBM1N6N1ry2DoLaoukNkAX8ji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fP9TYVYfonH9j44dA9vFExf1B15oW2h4kB9FCLy5b1b4fS85mKU1KEf4NMdZUK4PN87mTi8sUVFzeLS1HppiHe1",
  "key1": "pKxSbcytyVxioAL4X3SocrChtjiQP3AKyVd4aJE2BB1y1NuixM4Z4JUbfvfbCDgghem7eykDGzGfuTtvvsRfL5e",
  "key2": "36PcHipj1vjkvi4cp1bA6B2aiDPHdhZ9LUbYfavzoV79CeRQgXgzXwXkmrdnVt2Dq1weW7ccpmC5t5rLbAepwLVC",
  "key3": "KRiRgjGoVVjgcK5jPJB35h6ACeo7ReRLtphdbGq4NtRGKj1FFA4gT6m99NCWipDvUZi86xkXNZeZQ3iU9H3kkDW",
  "key4": "4UpUWreqrMCgSCiepvNWFGbbovmzPFaL6EbeML7Pf31SeHUMmsU5zoaskhTWwpS24VGUJFRdEjPDtqsRBjAAXRJ4",
  "key5": "61qbDHnZXBxsf7F9MeGhmzT8tUgMYAB5QXsaNimpXh4MENxZ8ZCCkub1mpxfWxMc7TbsydvzPVuTzdu9wQN6k4XA",
  "key6": "25T2q9YBqr3XAUwyYrqCoqm7fgejYHoXvhPAWmgC7DXkbuBMyg7T9RitHQeWukdKc6x1P3vZtkyjqTj9cGLbqwRj",
  "key7": "3Skz362w7XHF4zDfMSZNC5eb7E5AXvyPTTHLyUBnWMhyRmpTRH2PwvDkdMGFwV5VcVYz1dWWqeLW2vwgDosXXa7V",
  "key8": "TbiArxGgAiQ7NanDQyUQJ236xAMPrZe4RGPhpzqKhXtqJkWhnTu8BmWV8hSYxAkHKWmd39UMRXfQVd5rLCZiNMm",
  "key9": "4fDCogRarbfpGcs4WzF52P49MqKZxEMJgwA6SuD3t4oUHm1HkuMdFeLuDGM6YpEF9fgBpAWFqw5F9hsAd9Et7JcR",
  "key10": "2TtZ3dst6f35YqCTuBTcTNFyoGnu1YArQQvUtXGJ6pt6cDw17LV8F22HHmWwe4wjrv7qEEa5yDbJruq1Emk8psB8",
  "key11": "2wVcpJfUMbfPdbu18tMiHx8HFmLwjYPnWxbqBx9bD4BZWYcVkPujKAjFBcnPX5bNorBk2HcMUYfbuk111k2D6gPv",
  "key12": "3ucmAFkTKV3kC6BheZHfM8tzpsz3aycibdLWh1Rq7vfCVw3bH5qN1tjvw1GV3svgn3oivT3M39cAaooTDFiHYUNb",
  "key13": "DhgQU4698gPEyAUz9SgFWWXhw1Lh5PV8udCchxLNcZUzuWn1L3ji1i9ztt1m8J43a2jWCrv3sP4qVJkASTwi5Eo",
  "key14": "2vbkcTAM2Ykz6WybLzRcoK3eYAFA7W9rpoUws1BiTWS8AFPbDFKu69cCupR5bjuKxFWrwyFznx2CocFd6xo2y7WD",
  "key15": "9qM76y9cDovGTaPESCGh5tf9bZCpGRXp9MuzutsiyuHshLZXnvF2PuKdwb3dFSM2ug2Qqg5jGbHGVF7Z6XGzvFY",
  "key16": "qfkP9udWMhCJ1erKgGPB54MBb8CFyhFfG1qsEiR4kq7Nnac4b6QF4kiyDwJRVJTus3n57j7SdyocKevKhc3YqpF",
  "key17": "3pistHJr6JRiSfXps6varSPAvNvneaJDdzr9jmmLkLxQ4aUb9VS9CNZ14MB61jwoimsndpRxTTbMZVEAxUwwqH4u",
  "key18": "3aVo3bKgXWaysRnU4xfmhnrAuf2ew3g75XsX1T1F6b881ytJmNXXExJGjqG2vWTSnMah2gfzZR8NVTVS8nLA2Ydo",
  "key19": "nptyjWVMr7gEwMngLX3Tyukz71AwPRcioCiZgmp2iYWWcnZDRQqYVMQsrVqXgzdPsAaAwtdf1bsEE4cu2MnyfPA",
  "key20": "4wfE7UWz652pVJXscHgMJxSY6yAsE9F71UhpUNNtdAVkrbxQvpjBdYTJPqMD12YoVUBjemw75AyJ1deGqhkbJW5f",
  "key21": "5gG5uFRm6gDfNAoYd41xsLSX7bo8UCik7WoFH8f2enq4VDyC2jA7B4HuWMHfyPSwWNJSfAhA1kZUvbg5TxhmgnAB",
  "key22": "4VrGrXbUAWs8Pv2aJtCLGu3cF46Y2KFxB2VcwnuiJXYzhUEsefcHurQ3TPiY2ATtuabUhmbnkrRRV3wbkSAioCfh",
  "key23": "2pmhRPqTHTBFAnKiNTaBHAg48JymXYbnjug632HnRYZDmzdQxQPf7aPm2ZYRb4coGCEkvMEDKZa2RWaGmJs2hsrZ",
  "key24": "TKce4WEtJZG2JmY1nVTPBZxkdtWCLTT4D1ZKr4qWA5PEner83iBuF8NGBotSxyqwFgdtxRqdYW8CsuySZVxERGo",
  "key25": "3Xaf5XsjnuQ4wfX41FRAssp18DnK4FT9Fvk91Ews8QH45RzwXYTwhFDMYyXDtmf3cbRZLJNUJFB8SVJPWDHz2yYK",
  "key26": "DnSg75ZZ49mJGmSNpAmYcvWxwA7EnjkTuMtG9R7Gy6pvcLmK7VkCzh5n1v3gxroFz5m5AqckVwrxMP4rdJmGbJC",
  "key27": "4MrRYXbCnkW58Ze8eVLHDZ3et8b7gv2xrNGxkRossg9vRtszjqjmnq5hEHXFKhAsFy2NCCfGtUCL5yi1FjPHjSp3",
  "key28": "5WjqAWSRkecXkdwrdezqRtSLq9SfHkUnnepmThbzACcgGV7PwwewSaw9fckLaJg4jMu7aX2fGHqJR9yBqHAgXvwx",
  "key29": "52a9yhhJTYpZnZpevtazaLHRQHoxdMewtzQH5mKWLfUeazijs3zexddLVtFC34z6odwmkVNPdfCdfRdKuzjjjny1",
  "key30": "hsxuKpBHGh79kMacTp2gf9RHoaug9pYhyhrAJuD3VKdKqjJeikvG1sBeEWzTcyBRR6LmXoqbsBNPRNrRbynj5dx",
  "key31": "iZFPfoFCXVh7Zqak7q5miMuEG6YHw4cpZMCUf2zHCYrGLuyUSjaUjiVtXzwKCWgRYoMnnoqv2sL4MKfrqRPYMF4",
  "key32": "2G13ZNvW9VbaXSKjPHADG2yZkoXe6UQR1Rfkq6LkPwKpCJq6cMQnixFgSYump1tthgbUSbDc7yFfvYSd6Qa1ejY9",
  "key33": "3boWMxFDGnXDxNH5u3d14T4ZgrZApHGTgWPTKihWdropjpVkoenWCKzmZe1WDMU3bMDZxvpLk1Z6HxoBgdvrnrkU"
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
