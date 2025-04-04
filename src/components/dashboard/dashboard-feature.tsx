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
    "41BaVuXznCmKadXVCUDKf3pRWJTHCh1M77HMx1QxogzvWnnXAvBCx8rZCvaBKryzT2hmN2DG7aXFxxLtmK1bAci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EsTK46j28828QwiFor4kzfx4aFycbH1yt33pVuzLuH16kLKt5sH1S1rEebjnPKn4Z7TcRETBRkdYwwNgJg9sanS",
  "key1": "4wUSLXNFKgR5DA4We2nFUrJj9Y6HyUxR7vF6qyrLcWhRzz7HUdWG3WsWKt2cChXQqWxJoGQBmN418UvF4AdkJREE",
  "key2": "4Nn1v9gsPtUixzy6NWXD5iHK48k7kovBVZidWyAv4MgFgc7th4PhwfoEPUdQrVQJkNHnH1u1KrMatTVmGX6tH3w3",
  "key3": "2dTFExraFFDR56VMy3z52JT9jtavy9E2KvDQJdk4VimZwxEGRxYPAzspmTrvtLDfKWhz2EuXVjmcWERZzkYbbcBx",
  "key4": "5XB1Wa1NHifxNJz53Yi3mdgvK8jVQHW6Y8A9bkxQ9TGZoYHLtjfemYGCsrUjkWyzK7Wg4uUz5Ajsawzh19G5Da1B",
  "key5": "23Mh5vyJE6jSsizSxZVHrYvmVTMBFnHWQ7FNygTtBiobbMFaRApfyLYMbwED8LX8nFDoqWUsWFkAAZhwTJgpRW2c",
  "key6": "3NrZP1Rm6rRNu6oA5VTre9YonbfvnQHvt1VxnWuHzBrvBYYqRjBfSq56Ktm5A4hJ2JBmuSc5rew2GFUb4WZuEDvv",
  "key7": "4yXLTZ5nE6Mbb8ifD6AidAssN91ZYV7oixRbx8bBSwLa7WfpmsbWEGxKVaYEaUFM2crqJN9XTgELczRK5SfqRR7R",
  "key8": "32wFBA82CefQ8MY2a6XbFT5pmnazzLCJkgsPfVH47YtT1EJCN192Pp5yfnaYkJZWv2YYiQfm66fZsqo7kDdqxeUk",
  "key9": "5z1NKbsahuH2JXihymmKNtUpUTSz9Kwonoh3FV52cK3kUFvK74MUjW7ceJuiWsXJ8cjxBayWvZif2f6uHJaA31GN",
  "key10": "5gBVb7GgKirmrBm3JxqQCnHSUiY8mphJhJG2ycTnVEkRSNjEZFS2UQCju21LGQYvEtVwLG2cudGY3frVCqERfct2",
  "key11": "5u5bNbBkgqRUyqDGJFD7pbvmvKknpHbkKHVqcf21spsw76RUAcjXRgRthJWvj1ZTJiQznuGiZfcENQPU9Ydigft9",
  "key12": "SjFnvxvESxRVzEGW2ev7bsJxuzdLZTYdtqfTSAQuegnzyHvDBSkCvmyQx7gxxACJMVuycaVENKRcH2pVcWcXnjQ",
  "key13": "5enFkz9uQJKZMZTm9zq6ed294uJiiwEt4TKV1au6BUqMNm85VeZryGDETPEjoLNKss75EwseNcExXQB9JDoX3BLT",
  "key14": "5CmEhWkuJc5qUhBmGDRYcesCdaheqtmQeEDrpp9U3FfUy3cemaqbeJUAAitf6i21JGxA6bodWbTzzgSwRe18tG8F",
  "key15": "D4QAhh36v86R8RtH5Q9nEMFqGpE5qYiKHa6DW2iKUsjciUGLkMRjacdUGdSRgCWykJNCYDEX5zG429FvCEDMdoY",
  "key16": "5fsN6FdQZjS1fgHytKD33C2t7ntLTQPisYFruGodU3CjCpUC5Kp1QFMyRBK5Ua43AwH7MyyWZFjxfwx7fiqx2hCb",
  "key17": "a1uZwtaspdaPfck45ts5GNCZEZHAoeLQBMWxVMnWGrVTaUTNUuKHAvJ9BLRJuw2vNzBsNkwgW8CeLePWoqRZ2aw",
  "key18": "4aDgYBcf7wFpnPn7qYxSt2VNnnjMesgBPn6xJL8G9pwy7N4MZTt2T35q881DXbuBooFwBiPmsidAfxNX1CGyp85Q",
  "key19": "5ueCmzSpY5SvKsaWFcprigWPVtQcMkbfEyx9p1EUZ3Hrb15bZR1qxuQaPJSKU3GEELcAcVcuZpY1kmdP3Nyf778q",
  "key20": "vy8ipcAVkCEHqPuvMYNE7dXq8HRBh2PbZNficeVXG1jt2MTzqj9GuuFfY8xFxqFUnEfCTSkguEVADonaJfFoYgH",
  "key21": "AdTAxfxhvGLrnXa8xqLHNnd9XZTjSq7JECeAJiBdv3fEK17rChZXVoDFVJG4bnxNAaVu5Uwt3rhSMmazxiakAUo",
  "key22": "2oXu7daBtbRKGMXhuf31oiXc1VKMEAAK49w4L2VJtL3ktqait37SM2ng5fAv2QAP8C2bJZE6BPgVCQTuy83xXoZN",
  "key23": "4CyDWf8qitQzcTo2PNo4rk2FaCL1pgQoMqPtYJAtbH776k1ia2FjwiTBYEoHrY4m8NSfFBPeXDZDmG6trHNnEuuE",
  "key24": "2fo6b724vba3C9dTDbG2kiVP5mxMA4UsyULDS6m8NxWVz122ZkSQYdg6qxQgfxPf2U1Sa1mXbBVPeTRxs4Nf8Jvy",
  "key25": "4ff7t1w82DDiwHL7kmMDs3osWjLDjxD9EgfTXB5nvJ9jmM7Z787rgm8ZEWx3o86zH9iDfgX21xX6F35ddrpqEdPn",
  "key26": "5xYHJy3F4DUHSaMPsX2PWfqpUdinuMtBBrriMBBytMLLRtqjfkf6HrZY84AJyh8wVvHXX5ssKGSkbtwE7GjA4Ehu",
  "key27": "2D1AREbWddtFynJ9Gw364Tzhxp39DsXsCiNP6wueSVKaLMXFhX1qP2RvSr3wsnHunkx7GBgztgn8DXig4mE52Yfn",
  "key28": "3LJjnxcB95doBBGdqWNkn6ioLq9q1D8qd7h87xXWGdZ3y1bBXijZZttPpYkyX6b6aWccZehF7GDSh34keQcjDyZc",
  "key29": "4DUFDUY5CMXKTSszceXNh9nRQVVGf38fHiEFDd7cdTckkcooaNxnPGpbwd32Vv53S1zKGDQqGtuCQKT3sAFmqpFo",
  "key30": "doFNJVp5eXa3sWwPmdAUoG927fVu3DwZtQ7VuksRtt5i78eXDpV3ZfwHjWofzyBeMErWrifc3yUFsk5tKiW1Y8s",
  "key31": "26ZdisFNUU8rb6bnKmsaV1TEFrEVW8zoTxuWZpRidiKT2ho2DyssLMAAz54nKdgEDW8RHeUaJYy9CZ8q5xnwMLup",
  "key32": "3EU8DLaSPtAgXBijKcou3hAq9i8EnoAUtdUvJC3caEBrGpfLGibAbfagYYGsgzRLevm2EdtcsfBVpBi1o5w6s2gj",
  "key33": "2YTCFmJnGRc1erkasiEzChAAHvnJNxo5oaKybEQKJSdpaUShJeYRV2FrsxxM5FGaeFqAPZcgx1PUmCxWDaEvsk8J",
  "key34": "38kezMEtahDVPbJnZQXE27CZivP2SFAPKtaMRp3Ph8a2RdgcKbek46GFar9XvvjRtoUqR8DTz96Buzw8ybetSHEM",
  "key35": "Vup3RwQQaWFJ1LEVCrKgfoGpEsQrT453qoksZK6ax4L8fngQ9UDAKLdFgYGg8pKsJ1XYVsLZ7YMjHt4AtP3StdU",
  "key36": "uixYQtvnCSYDvvTyPf7CpFnejUnBVE6DoQ9exprsU1C6qWquXx1Qy77h2oB2tsyW7HLjYa2C79KnBUNoH3AYMk1",
  "key37": "53PDSdgfDDxPPSBnKPWPKLVk1aoanT9nXtKMx4N2Q442LcUewSxpLe7QX5FF4yZStEkhPZ1PxVix5USGkBWtWrvq",
  "key38": "3jZ5uu13gr2L9q8WJq34DXA4YV7fSVT6W6r4ccpzTNz3CGLNdDdyBxvdvsZsZaXdgQGT9Q3MSfYNFkQBQjjQu3Xs",
  "key39": "3sdq5gm7uyQDo7cYx73qHGT1oyMGmwd9j34pV8n4jTPmkM4xYstFHjUt5XHe4Y98pB9LD1GR2yeSyeEriEPCmPdM",
  "key40": "51zELxdBhBtEjYzGimK2vpC5DfkE9nH8AoYbkqayDfSU5rfeXQzgqeT4yhTapKAeVBCe9xq1Loh16b9dHsheB9BQ",
  "key41": "2hMQ4EmsXv9C5yxRkXX3VmiN5HjCjasfexdUid8nRdD7w59ELhrQJd29NmRbAxko5cThFxjy2CXZNj9BEh4h6fvX",
  "key42": "2MEYkgLynzGnqRvt5EtPLGAPAecKdNsk3GVReYaq9GT2tmrc88B6299Li4zQtqGbuupKeWCyF7ZGKLnAeH43Xg4w",
  "key43": "5DniZn4n8KQFwt1sAc7TVVx9pVKL4MDQBRZEgnDiCR3ytRTGnsoKLVV4nEwTYvu1iuHUyXkQynV1g1pwoHD5RdDa",
  "key44": "4v33wGJT6rtvYq2LMnYv9HA8ehivJ7sGyngQdmLyGgkRriLxefapThRfEtiMzY1JLfUGWYVyrh5zmcXwM1z9wcde",
  "key45": "2VncSW6RdyFAkyXWD85zZuZfYc4UvEUZdXQt2E4XytHsr53kkWCKE8JcxHFbyfKU2V15R8Pxh8hYNJAbEug6yhVn",
  "key46": "39rvJULXt89HbuTtRm4zk5Vbi2xebgRXZv79Z7GwXV7WZunnJDPtayD4yzN9HQFXDf911gXHusZRoyeUGK7Yx1aT",
  "key47": "VNeYqrP5zUmiwE6ftVebCJKGCTdywDg6VqygQtoJtVkrfDyHFuz2izr4HFvfsypb6GgmCYVb7mTgT6XYnF1n4Ju",
  "key48": "3FnHpKtg2JejMy9MhvsibSnake5a7sFSGEQo7GpqRwNLLmFEr4p9zQFcq2UDBdo3fZbTt4VYNKmCZXKPUcmfBGLG"
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
