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
    "3L7vey5jau82AxAAbSDft3zxTebg32fZHkzDPHnbweWr8feM4cdpb6FS1Hw22L5rd1yZsGboBvQGyainHYvStWUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e1n5QUTEUtyLxdzDYL1pU5pHH5uYNncgZ4WrxJwwu56TgtWvf4ZbBGpUUV9MCo5Z749PL3hvnZGFixg1zXwALwu",
  "key1": "4ztFXfw5EJvmeu1MDaV59Qh9meYBhi3XEGtUikBgEp5epn8NT8BWnsQqagsMy6VYr9X3cKrSWtiDpgP79g4Pygwz",
  "key2": "39R79wmGiczg7QxR44JhAgGcyYVTx7fg6oewtkpdtGHUNig89ynTeAJVWPA2DposN2XFKvCVzxW6NdMhYdQ6XXhf",
  "key3": "2G47kMt6d5SpCwTypaiohXs6vhwoEXcLN8sA4iawmdWovwFHJjBnLHiEoTbt4WS1i9NfKkeWdwVfVsrdq34d9Pby",
  "key4": "F7potnfeE2MJBndZh6Ah6vuiDAwzWACFtEWnCmVHjKwyXzLj6EvHt7iTToXFfJYfiak68GC9EeK3CM4Y2Myuz52",
  "key5": "3ghT8PsZKp4nSaS66DSs8onyk6zzVyWwpPZPuNGDEU3PqgbNw6K3eq9CuzLYwEuYKdsUXPVqpfHWy8HLVNs9reLq",
  "key6": "2egREQk9LUXr4hHJnMh1rXLsNLKHZg6rd7UgFHFbW2HRZBcrnUbNSVnoSSnFJTr3uEFZ3MpPB5Vh4SxgbhLcCRQx",
  "key7": "7Dk247vEG861j46St2sTxnPzajFXDFLjZTvBFUKC5sAczZghiPWnQyAwtYZfDgtEpwVqR5zCfasin4RJDxPsN7A",
  "key8": "R3XrvM46yTizag8JLFsz2MXBZHxj49ALd7nHKvx4qxwSYcycpoY2LstpHZmUPN8m3noBRoTJACgaeXqamiQjJAZ",
  "key9": "qAX5v2e9wWCGKZPs6Cywip19MMaUK9jN2pbC9Q9s3vDJW34bXD7nLvu6odu6TQN5vzsZX2u1NSPpcAZ9pHKQyFh",
  "key10": "5vGnonkWmFheZ42kt4LWfVbAVVVPi2VTtdD3AxoWZupjYcvzaupD2dto1RjVRSmAKJMoaZzFTbXGdTDAbwKQi8Rx",
  "key11": "29X9RxuEGzivUjgtrhM9vqrNiDZHnAL9j5WvUJ7NMYrzUAaj9Dr4WHEWrWzqvwcZPFPVgVfSEjkhQ9W9mGVVXAm8",
  "key12": "44x3BL5nbsZySyKKzBN2cFK4WmaYSfVosu2xwihNfZo5KUcznQgeMKWqQKs1cgHD4fh2JcKRBp7tuTuZDEPt3F4d",
  "key13": "53KMJNf6zeHRti6hGhJ131cb9FiXx27cpxtaiTrgER3UVnuGReqcQvicoeDf5wEhbwd7Y7wAnqqhpFfR3zVsyfQV",
  "key14": "4z4m3n4SZZyvBXm8z2qzBp43gi5wcXjnWV5Z8K5abxqa9Ge79oLAtvXWuwsMawVCbHQ4pkWQFyZyTvpGux2DPNyo",
  "key15": "YTFMsMo8kbUFBLmdTgv8TvhYZCr1BjSRuyGTFAhnCPtvg9m3VB586RUnnxDwxj1YjjcVRE2zhHmZjeF79fdPf1o",
  "key16": "58RuGWw6N5yKG8BDz7uF1bK1PYnuo5o3ksy6JHv6c8MG9VkHcUnQxRkG2LwnYL4Ud8XnKDXioX2rWVj54q923akx",
  "key17": "2r7KzoXUn8dPKvAqkcbRZpBtCajtangpPFAiSxhDV59DRGFZXkjEpgZEB4gp2Yje1AmxXY4ZBgw7Ag6thjnUn3qA",
  "key18": "dYTfFs5USk4TdQbMWSgD2j6RBj6rM3qkYJ1JtoJnASh3Z4XZ2LMV1bMoprgYENuCM5p4u6B4Lgiao6VkAzLvY2r",
  "key19": "3SKENtzwxo5GnVHkpkfkZ3b2ZRLM4APyHbbpiyV7ug6y7mWHiX17EonH8seed5ufbfp1rGKnzhkcbNAxBvonjcF8",
  "key20": "to5zunSCV4iDegmmeMNyu1noR3zdA2fPDvXrUfhKZ8mNKaAj5Ym9RgjhoR2WiKmXNssFunYnd3gi4YJdcpHSGRD",
  "key21": "4znnNM9r3g2ApayJUCgeq46VPmRZFgHmD4QkTK1EfLN43FkLr1V3pM58WwsiSx4cxKbCDZFqCxfwdXghj7ULHhga",
  "key22": "5dkQt8CHAhqb2GGQ75HwRZtNZFMjhMupaRx9MyfvpSD26ABRzQtfvJ9Ry8dKomYPHad3849VhZnhsLPMKwBdmBvs",
  "key23": "pkYVtdviqz36VtsryPrFEPm4u1C1aKvHpomM6b1NWYwJU55938dLut7i9BfksitJiGf3xBiiyoKy7Q6o9VMPPnR",
  "key24": "GxYVzJwtp4SyuJiaTMQenG5u1HAN9g6QEMEkyoKBq2wqT54B2g95gbU9vVMmZv6ejqAxXcwiNXFHeAnfvxNnTZr",
  "key25": "4ezRyf7jFPLvJq3LwymdZ8nSqq8ZFnWz169LgKzPttJpz7BZwYcCodFDXGAuP81QE877uPfcM6VHq2ZFnPAyGSHW",
  "key26": "FMtVFc6x9XRrYWkaRphXZFvd6kRdh8RyxR2XVGWCboXfLSn6Lyw6kh8yjqDdVPmiuyGfVZTp5zmFdAA1cEhzzay",
  "key27": "4bPrKYttHmHr5XHEpB43XQDtBdgbkfnb4CgLKWk2WSvzHWfe6bnezQkXAwhMHZi6CHadYg9Mg1foFiVFWkmfS7ZH",
  "key28": "5ussmbgXednMM5AxiUFi4GGjkoghW4pdyaH9CoB6d2Wj9Hsecmm3mN61rpy7fJsnxjzYpqNEG7guYMRWeUmqAzr4",
  "key29": "hVuhrUzhQgt27hiq2KDX89ZdizEWbyAYAZuRo2nK5asJgSVnDDBuzGCyQgRpLbCEvyEeLsTg6K76C5bZcRJaGA2",
  "key30": "3F9fDg7sCF3s1eNGjnh9Z2or9tAmeun1TaaSK7nDTX8Jsez2aUbdmwVAysN55U3g9qE8khADSt5DLMEPYkVVZCPV",
  "key31": "YBdiMXgDJssKM5D4L1doxQNfKThaRFL5gno6JGV9HeQvPzKj2dY2X29PvXib94PGG2WiHWJdKWqUVCFV8UXtFp4",
  "key32": "qCkgUg6yzpvrnX2tWSXqmX6XYZdiwi7tQCf1FDr9vpw6KC42qtz2n1E6QKGNPjNab8k4xbJ9bkDjVYdx6QqLxRZ",
  "key33": "3zaxm7KSEQi99G366Y1SgEpsx5a4q736iMuxqZwqH2b2V4C4CR2EgREDsGYUUPJzygvosMqckq72dWVi7PPHQx5u",
  "key34": "3WYZJEg572o2VBCUBw6KFtxGC1pAPiYvtJbvEVdETmsFkbewaAMFdBPVUD75oSKHCoBCmShstRX4umJxXBgTDRi7",
  "key35": "2RijsdVkj4iSCfvTZyS1Kyv3X589mNK5NJPnwicFz5HkJ1DYESjm4Fx1DJy52LgY7uJwnvapkEeQGxWMzVujuseF",
  "key36": "2D1UnqtC1np2Z4MphAVRhggB7PDQVBNTN1jbH7T5D7drcb34TYTY4x3FrDke5HmRCk6WNn53FfdGTqc7ycor8fEd",
  "key37": "3PU2CCfcbRV7Ke2iQA19sniJQxRStSRzFUBSfNXtfCrj6v8tNgB2wnQXWAi4v6dA19k3sudBNf5UCrAihBDSsWDA",
  "key38": "GZh8ydnCyBaD28fCSKyza9DT4kXd8S6jrzhpQ6D8xnmWmcHw6v946nxcUWrLDsm1fDg7dJBR6jpYWF7wTxnrG75",
  "key39": "fSbSWzq5x4axbKnEJzAvm6ihNvKu9Y4cYwTEfy2dzeskSxm8mwWzfRHo3LxnHzEUk6GQ5nnML3aJNvzfdeeqZ8U",
  "key40": "5f7Zx7KSSYhrsve5jKNbg4xEQySivEyM9wXcUHSmVKVFYxAUGNsv69NaomDvNgsmkdcoDnXtVMcR2qkZdiop8eqD",
  "key41": "3pn1q3QdHJPWDEusxNEAZr845ww4XKiepuguuJsgFgPsFHd21jGiCKJsq7SkhjsnpQdNRtPxZErxTKq3PPpqt7Y"
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
