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
    "2kYci6u7z7tumzf3FfkQ4riLKsS6PtkX9MNsBUNmzBpJPxbk7L8qVWMVoUvCTwFUpcZ1YftdHzqa2jnKuZUZFsC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sbyFZV8RksRNpgSHF4DCtV1ivcWetrfUEDCQ3GYZsW6yppJXHiWxaexpaZf97JbTC4pNHCPxcudsdwiPp8AMtvW",
  "key1": "5ktWMt5Jv7kDw8RncyfhgWq1DyTvQsHas9m2QdTuHJ4qP1xyVquwu1AdH7qjznaKRqGKzqSTQK6FnicMF4ouhua5",
  "key2": "4989snKgCbXVLTjqUkyTMekkgZTdkAqa8GpvvV5TK5DZcoDafN6W3NcxDrr2sE54KveAYncUmRGtHj38AkZ7S6Nq",
  "key3": "23pm9cRGRXzicY11uBK9H3WJUJ9FQxWaHKoLJrXdLiTnFLzaAND6hNHcvedM2RnHs5eqDVzkohvXy2AQvqQsiijh",
  "key4": "5skXdVXWgdfxVSVw5iKK8BBbuXDmBuWv93v3B6RZeFXMEMgCxBrXsK9gZvLSBvemqxWoxoEhnPeBVdniQq1hCxe8",
  "key5": "5UPPRWZxf9fuRhQHKBNp7JShodNEbbv3xN7aC3356uCvg1ZN9MK9TYaNfZppZWiNRn4ue14jkBVe8p5CKck9JH66",
  "key6": "yobpBCaKvF2XFWyb6UFKgyfZ8ZWYnj4kCKwViW8DjgxQdA1eK1gUs44ALMS7VSneWLYaWssXtgJezka2odQVNrU",
  "key7": "5Qeg9SbwT5ZBmTwwsjUMJprANMzGtFcGQXq1XzMgddDoZjmnJtTS36juzgcvoMVnR45JospNQ3xrDkp2t7Ruw1M7",
  "key8": "BnEnTsyk1BuDw3wdf9HxJf6AapJHg4RAZkqhWBsbMRbj82asjB1r7RMJvTdPoCdrGwfKgEXN1EzsgojwfixfUNt",
  "key9": "57J9ctN36t5F7Py59FcTsiD4XU6EqB1ZRzhWrUZ9XZACD9WibmKD9PfEkUnFahfXbBkZNpHTQzhish7jQaoomv6G",
  "key10": "2yaYGKXDQ9eDWe8qv1Z6t1hHyUiNdo1qQPudXHH4dTb9DZZomt6nw3du36sN8ZFUCt6kfQ5UvcfSM2NJ8QywrA16",
  "key11": "3dRQxy2kJxrcBRwTUZZrJAh9gFLznhC7H8U1VDm9gwnQMSBwiwzftTGMnWrP7imc89usEbqvft1K8HwdGP8WKzRi",
  "key12": "H5ZNcxNNA5qxmApE6HYY41Dc3WvpnZgUxFXxgZWgy1vMU8DjGMcCmiQ3Mf6SVaNXivr2MdaKSSB3QwKA49MPMrv",
  "key13": "65v7gWwxunjMdoUaTdu8c7VLCyhmAXZCpTXpiT1uanX4quJsVU6Hrwa14ZfRRprshiNVzD9nqQeTa72kYd72QP7x",
  "key14": "5ax2Y9D5p7dfugsAEG6cV9TVezYiqssRdp7FYpFuttwojtFMbG25uNWhhiZMg2w1X6ntByTEnTowtk5iDfwCzSgU",
  "key15": "M7h6AGEqxD31V9GLHev7oHyS1d3CCrmBu62PXVPpex2hfetkKu7oXXuvhST9zDdCbtj5tod9WKxNVGXhk7hBL3K",
  "key16": "3A6hwqWzYDWTuprDtaukZtWzZjmcF2zidA6gzCUTnUTCHEe2FFZPzJW6CqjBwdAecaVxxgV6MHGQTr7b1FDhenGj",
  "key17": "4RRgVtdeqLpNGawVR43a46NjjVpvKkWhZRRsnQyGkmtr256v3YHh1cJUYEah1NVCcwstpioAyYvRQ74aBufnzFi6",
  "key18": "7tmBvGkN2G6AW6FKUWWRS7nt9iWS8ow6T4aQ1HG9Jo58izexKQaZiBibdnjC93CVcrJkEipfVx3GHkzB1xvZbBh",
  "key19": "2fKrDxudQz951Rxf2tYq9uDsn8s25GEvGC5o69HHVGAjhMkVu2PrJtStEKWr4QWMA3u91cFtxuzFYsnXFHH3Z2to",
  "key20": "3SC2fB1YA3aTs9LHFsGHC2TaaURqMMgirWjdMZL3Uzc5NYyEC5gfo6meQexdCmRKStPBWq4fpUUedkU2LFB8yUwo",
  "key21": "2seooBWSxHS6fZCcHbbq1J5qYd4TY8fxX1TuVH7Fzj4XHeqHGFAQht9L6G35An2JtpTGW6QCdLjewQuNCGSeC9iw",
  "key22": "5KZMVfhccnaY2nK9SMKGQEmJzWTZdN6Lrx9cSc1kuAJRudS5gvWwuWA2bGgGR6sT6hGD82wRWXnSWwK9VZjKya11",
  "key23": "37BedHyLxuP8tkqNxVymxAdwvLQ4TraSYNPtw4Nvov8b1ZVp3JQZRCYMcu6CAS97KvYy723rrvxTrUehcwSM2Wap",
  "key24": "2AsMLn9Tua9ADpkoUag8P4rfGz6SzAqHMJsPmBdi3aTcmQ6g5RcKPFhrdHKcEvRtssk4RVcUxswNggXURmbHMbjh",
  "key25": "4Q7X5vqL3e9hSLqfWjpdJ4doUevf8UjF6roYqe8qxA7JsmDmuVDya1wkcQasqgtMSD2BC842iEVjZehR39tnJw8Z",
  "key26": "jdvQ3YHxyKhzd1u73WQderKzAx6oh5wwypyPKmcpbDH7PcqzxgiK7FvPBAp8x38X5bUbj8ZWbcEfrcTHzhYvPFW",
  "key27": "5fwMLaD5pvY6sS24Jj6rcWRrSN56modiwjzAApAxuBbJiCPiMbQpANoZiuZoLuGZ12n99qdGcYTWn63RYdDAB4As",
  "key28": "iVFGiKCA5wXeeisWdErWdz9jBQWT9gTRNDMxzmsyyNWuka1mLqXLwRt16g3wbaqfZXs5Yx6EgXDGmXFa1StUa9S",
  "key29": "5Higd81fR8CF69UawUz1Jt8Q44RJb6PEMCrpuRtND7gApXExWnDD4rZ1jBXg1QUJcS4Eft8wXq3CQKZodQo2FMNP",
  "key30": "4fWfLCXqVMo8r5QGP6DKHts1wuu4LKWYcNwQJ83Lkf6TyoHSaYHmMEXCCiCoXYydGgWa4eRyeWw1LuaGi4QURwYe",
  "key31": "3eDvz7qFsfS1H5ceNCCZ3hhx3CLFTXcYybw9wUp97EhnnLe6PK6Wdxfi2JCFP7TTVzyZspok3GPNqG8aZCZ6ifM5",
  "key32": "3R77FoYf72zxLwjbtVR9VVcgLaQPLLE8J2cSEiqUkgtTUNrh2yJc3nsj2iML73woMEC9FaYzegYZnzTpZEPG5zGj",
  "key33": "3TSM5592oSoYGGDTHqMXkPCKb3tWzYtboZm1bbhAWHw69xTp42jcHMEFJbX1R4yMBHgifQMYuZxyNpEe1SocXizz",
  "key34": "dRvDagNWPoCemdk2ABpzJZ8vJ2X9pUQYDMdWjaGuqGpHpRWpyTJ7jp5YYktjR64VUxuq9QTM9xEbsEnGH4gJWQV",
  "key35": "44boH8iZabXQCb4eUMt6eA7t53W3aX43CwcWo2M46pdiRRcKbz113yqLzK1mvXPo2nqvSAyBNsrLNXcU5Ke5n4MQ",
  "key36": "AMPh1CAqsdRCVM6cA2sJwrKYBXatcF1jNu85mHH3QMqo8q57wXQ6y4Cp5XjRzdRJKsCPt1XSgNLQLPHAZYzLs8p",
  "key37": "3m5HdpDsFpAQFr98onfDCTAMsirezLcYY8EoTBpKu8mLqskkRAwhybbzMLAhR1g6urfxYZxJxGdYtfGYqT5vSFAM",
  "key38": "5m559HS8N7GnZNyHsxQW9neeWH9zYcf9eu3XiBpSbYBCUeXB6PwuGW7LoB7zDCK4VMXAhQwivrjRagHQHWNXAYjq",
  "key39": "2tqvNUf4jSVah1LfcepJwquPEQ6RAWLhqS8eVUghJ8w1KELEjwPYrsq7FWqVXhyWm9WyLePfL4sBX8CHmuDvuPwH",
  "key40": "52jiTGmFgDDWS3j12er6go8KeQybbQwd7sQY67NRCfPTouVaPEQtS4Sv6EwLzU1VbVMQGUMXi3FnPpA7cU5gqwQa",
  "key41": "5QLhPpxxbNhDNBAUoRA23bYs1jd4BpeXg1UJhCDvZREbHCAo3pRaHUM7zYioLzWcFKQVMDHha146JXy8ULMEdLxp",
  "key42": "42JscynFbfa8vB62ptvXzQhSKdXf2MHiSSVywwFL6XcNgCFh17Akywc2PPH8FxmgJ2qTcsvQGWnQL3vcYnsvWM2M",
  "key43": "2oTYXScs2MQWg7CopR7PnjfVgBYDMrWk1ujfisW3hqfoaexaSrTiA8Vr6cP6SU1Bwq4YL4XTRHmvfYaLrFUYghvz",
  "key44": "2MNaMh2UXTF2vvWyRWV7PwVMaUQyyyiJYC79vFXtzyydLJWuJic6wn5hV1sD4d9stCyAT2jQQJQJzuTwRoXZf2dU",
  "key45": "31P8gjiw6BXc91Vt2fsXNGfrE8AapB3BGNjX73otva5dK1Ld3tsHMiAzvYVqpRiGyKYZgDpf3yiTScYEryXLHG2S",
  "key46": "Rvj9Fp6FKdsScV4pcyPTKwLx6DCb2vnpkzQ3EJ98kYZXHCAbBCYpzFkvVoe6mmMWhCzX3nUADYVhVWiRLJtvUx1"
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
