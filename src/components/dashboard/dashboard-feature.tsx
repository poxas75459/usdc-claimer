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
    "4iznSszDhG3en9yUAMNbWa56NXui9MdShRxr4PgQ8jTm5afJkCu6q5z4rxja2Ay3SRJKpmFvge4QPLxatXv5FLfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aQzGdpcZhNGA1WsBbqUWiaJu1nncxEHTMRhJuBQoWsR3mcaHXdTvYkM9u4TKEvqTy72Mv4GurZtasRw4c5ihqJk",
  "key1": "2WEiwmZN1kkzgtYNZAuWKobWk7kTZNe6KKrudnre6CQx6mXjt265fLLQxsbjWvVNaJncqH7Lpctuw8mDk91JW3Rg",
  "key2": "67AV2MBUP6reJjFJmpXK9EkvfHgjJR5CAscWsuNL9x4dbx3rvCztk9g7Aab7J91MG7PsWYUrPitmFjWt53LKcBEC",
  "key3": "4zgWYJeumbx4EBAFmvoZe2RjMmUNyCrLQezXzR2sAMdKjpBmKCGM9GfuSJtMmYMnYm5iXJVszYFDVLvHQZmqBPne",
  "key4": "49romfuZ9JYaamQRZFbEpWWw5RcuaQHYkWeQMiJTb6jDCEvHFWqMKbJi2QzjMjAWVUYSWMw8Zcwj281A6WCRyhP8",
  "key5": "ifdgdqF7WpWRZsiyc6UYwRy7q9dsof9y6Vq1JTcYq3j3VNzcWtAoDqp11coUZGuzUAAJPfw9o7BUexzwfZhjebs",
  "key6": "4uFGKK8RxyzVC6XCjkGfGH91gYwqbb75Mmptcdn6MkXq2nb94MhVVYwwTieJ2skF9N8N22mzKmdKAhxaaH99TPUj",
  "key7": "4kmbnsdJ43JEmCsZkfNQvAy4KLB5aUiZ3eYWaDV9TRc1hZpw5YBd5tLCA2fzGs8ym7BsccZT86eD5WCsTovZznPg",
  "key8": "3JWhqGitFkWzzDVbjq6WquJtNw5nXat9Gr1UdqfTFv3XLCnCaTo2yBNFeXfyb1Kb3ayjkmcsXoakc6DAWdpScPxD",
  "key9": "3BgdUpG9e4AHK8yMB4XMywNB7qhkGZmJT7vn23ptG1ZPg6V9Ue8crndr9R6Mdjw5ZBKLR869LEosTp8HSXhD7biF",
  "key10": "GNzvDiJoL7Fp261TB4HGoGtVj25394LcPomPQ1SVmsPAKoaNSHxqqRjWJXNPSM7zGC68MgGfRKNsa8DJPcsq8Qb",
  "key11": "4fdWFYAjF1hJQSa8k9tJ138nQM2fKZh5mBtu7cByh44sTrvd9WqLVLFnevAhAT3SrcWUdHNZH71Sy6PXWcLSFhuS",
  "key12": "42CZEHgkpTWyeVQwBhgBwmkFb7S5CPuoeGqWHSWKXp8N6VNjmYXNVvgWh9EqsbLujsBENqmV7JLpq7PCctNRhDkF",
  "key13": "4xbtQt4znxg35fQFvqhZNqV84V4k37LdEmzyhafTGsbmzMfia2KFvA8TiZ6edSxg8n2jmLYCma7fxz1fQNB8yaFk",
  "key14": "ACtkNamLr6TVJp4HLRvr8jFFxsMBSM2Pvyiz8SxSvqoDSeipQ9QMF16wDTvgZNH2pmYR37w3JRJgivdURQXSqht",
  "key15": "5Hq4cPfupFZBNC4ANYgvhLS6CRJEMNr2ZZXZYoHKaXjSb21fTgaYBRs94FCdDfjbdjPdwPnkv8ZBvnSgHPJUHpev",
  "key16": "5Rt27UqtWiyKCeDWeWc1nfYUXz9i6KbvJRq7GwwvfhSronc32KCbkVr81nUvP5NQXdyhNkAQB98EHpsa3ypVwtkc",
  "key17": "zgGjnuRHgpk6r7gccN1KWshpzwAsTa3woaXS1fTp9zKcgf2L4KtYBT9pN6xgGRC41vg2RRuuWw54dZBaG8WX8PD",
  "key18": "5MShn3jVpJsBr7ioj4jeo15ipaRqgSGK5Z1drz4xA1d2juqxbNpgsrR3WaFRyJ2xXAB8avf8Jj2YnjJb38DJShMk",
  "key19": "SASd3pUWbU9U5GU1TgbErPPa9iUQ2HfXLco9kHi4ixqQgY6cs3bDqgv8HPGJJ94N4hoXQqRozB7TobrZkiY8cZe",
  "key20": "4NovvaeDV9qWURsYSMmPDLo6eTYKyvqEHZwyBmhLAdRJdYERbZTMMGHfunaoQ221rg8s3cbMMZPM5dJQ8dhiQTYX",
  "key21": "5rasjiEDoipzodVpe7Vo8W2qWPnbyM8LStz7V4ecvydhRw5sYsWFLiJwK1NSw7b4TGaxLCu1maRLxrnUye72xbbd",
  "key22": "5Jg9eC2QYz5dwJK5iddYHMUzxSbqHSn7iKoQg9eYoUoPVis6cFiVZay4gsFJgjdsG5GYxaJFFgj6YAFGcEv2d3X6",
  "key23": "5i23hzWvmZCD23xZSPrYaXQQmSm5TwGxiC1tP86s2ycYwSQJ3nykZDcoRRahxXMZ7QdDT6Qr4M8Cs1uJ9vkMEGHB",
  "key24": "48d8zj12TfaVAgjNNGeQZsk924PtbLMKDxKKbmH3gCKnzwdi3Ybaa4kVK2YAmtNczFKdm5G3pFUGFhwjp6u4KHaD",
  "key25": "mmiZ2eUBAq746PYhjPL5uw5fwmknPxgQ24CM64qR8RQypMSfn8Bt56VGibJN714vLycirTSSBdQVvkWS3ES3zn8",
  "key26": "2gpNUEjaudoRv1QfoDmmRpArn2a2LBq5SHLnwkcfJGpgsYUps7td8CV4p8tP56GjsXokJbE2X83SMA4L7d66nov1",
  "key27": "3hHeWEisZdV18RgGKA4Go1BLFQ9ituPNjzJVzN4eqrPwD51scWQ9h8tZndXA6KFEeccFVq9vtzCJwrcSQGT9bjf",
  "key28": "2VFCPwxgsU6LctnkqPKaBTB4VDnBmMsdk5CgwHjUsdbjH1e1p5YgmbyabWmX61jdQjgQw38qJomSAVaQLHhXEFmg",
  "key29": "4MMbML3udkB8R6A1RYdaHH6EBig641EZELup8JPFhEFUEeCiViPsVqVdHDc6frnVzdtvWwqdP3ozCpySXVkfR3rj",
  "key30": "4YY3qATqxS25CWXDah35i2akJgN6jnjUiC1zPucM4rcg2jsaTL2rWU6sPaaBUwYCg8euv1WTr184UfcDGCt3y4yF",
  "key31": "64LJwrYPFvAFKtRfVWEh6KTHNX5J1GdGKEbNf9MEN4ENkUX14ZnchBo4GTHgBiGEW6wjpYqgwiahGZcYogCGSKWV",
  "key32": "2sQCKNoJRr5En4qX9DrJQze4GWn9cb8wHKqnEMLhWgteRGFkFT5Qtn6pfLFyrTdGvq5NPm2cdhzS58Sp8ejqVau7",
  "key33": "zAAMt21Mp3W2mbJg68M2aN8wnasciEjobnA2CxJaGCs96vtZSZAp5Bw9x5e5a7sBt6ioRoutvR2z1Cp96ibrMzy",
  "key34": "5TSQrN2KLmWoxSxdcxn4KzJxqH3rzJxNcdjhTnoeN44xKe9PgDrrhKKBaqcJaejgPGnt7ULqhCEMneAqiXbozbUS",
  "key35": "2v9YhUeJkrFUM5Tgou9BJ2s9UzXKM5ffVMYVjn1nXDhhxpL8jsJ9ms7YEyxVdLsZX36krJXYtzdhoKts7Q6LpVn",
  "key36": "5b4BqhgUHHk5a427nzb4x9muF36LbESJ5ePD1J63xodrhVHAerm5NHXwsAALAodBdzXxzLn5xzsQuWME4QxwMFDA",
  "key37": "4a7PunwY9acoZ2ufMwWxaSCdJgYMd1RNkfvswo9Ti2uzvcfnnWmX5Jm3SurNrY2KLDRXfy3uJnMZ33bhoC2QRHjN",
  "key38": "Qz4GtwBmLAXgWYgVG7tXcTaf58ZLWcD4FggutPFugZe64kfBTYMT3UvpbHjYe66RRMmaVj2Cc6Jq2odKvG2coct",
  "key39": "NeUvjSXTAS4N9fxqL44UvwkHc6wkpmaDWbH93ZbVvR6VixtRgLFPkWLzBRjZxnu5o9LLAWxLd3MQRVnTjExbT6u"
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
