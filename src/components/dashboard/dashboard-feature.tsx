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
    "4fPa6NF1X1Dm5RdJQ1PtXtTejMkH3r1hgpdUxz1GvB5tMNfyMHUkjQjtLEg4wVRMNNgF9aoYJH4U5TVg5Hjjxnsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "354m3EQx5hpWGqRu8zL9p4iDaGq7EWzvJzT88aEsy3oAXZuATHp6u2rBpCUiupaGtZPm165bgBv6QnsapDCfUiWR",
  "key1": "3QZ5eGwoiKwgbT97PfUdof6yW3N96DD8bdwAUX7FRd1zw5CCGetx5TGofyoAKdcdRZ5LKNmfjU2yr6wSmJeT1fgG",
  "key2": "49hrLycHhhQxgxp5rwiXwWJwKG6ryj42n2NRdKg1NGj9wsY1JbZzity46iNZEunNbdj955bjqet2KYQW8eQcf89T",
  "key3": "njqSL7uX3iunRhyCsuyymd2ykK2F29wo79FBK5dZtgV511VUtMEMQkAQUyTyhCwVZSkkDf8SgeYtySHnAYwh3iR",
  "key4": "4JAPkzg9hEzyjNwx9DK6RbFqyFSPMMBWHq8c2AzuPf88uwsiiv4Xrmu5uzb2Ckyr5wrtXKCwxH2WehHkzncXSVLW",
  "key5": "mYBypCpHMn2jwUEBPvCzXP2sSnYqhrXsFAcRnb1wVh8cf1yCocGd66PFAWtzmssH7SMNMLDYMqSe2dQa67szV1h",
  "key6": "5RzoXSLVyajD7DcqPTLw3yRVHswtBykPUgAeBvNWVSnWd69JVUaMdFD5LDaLrTxqxHSv9fUid42fgiXh2jjtHeBX",
  "key7": "5dZhYAsM4truzZ6xdNDPHQ4y1wXyEVqyVkFtgQyEtxKWYkHL7NjG5FzWcVVvKNMTKBvyrGhsvgnYcvThxGUcWaH2",
  "key8": "3KkXq5X9T7ZYfbWd5T3SzsDr6wK4MHKZrqmQMHyocGFqUQJr1sgYidZw2cwLggoYCBf71RsAWjzR18FBHmorFbeG",
  "key9": "29JYxYwkbYLSKvZKMs34zL1RSxrKGqnnJVvaWHqyRCBX4fEAYFHn8DyFkd9gYr5iaLeQ4TT7i5mJ13gN3gtLhXZw",
  "key10": "5XJX2dB5JEyvHUvaLgu4cHXHqW37TEsdMaPCwYfGGyePUAtDu9s3C7rPqfLRtUF2kAxyoMiDs9urckBYUF9q1WdU",
  "key11": "4pYTspDdSXhBE6DFY7Z5GHdFBwxMKKgVKWu2GYc6GTtTngqEUWzqFotJVceZPNXfUyP8sCsLqxgW3v6Uv3FxBt5S",
  "key12": "5Ftf2PqEyikhZCPTUVkBSVqSv5s6LmXnGY8G43AwNFz2bokXztK29hK7wZ6jvSmW5hjv5tB8pasbntWp1npRktma",
  "key13": "4RR3yNkfYasqJJAn6xvDzEJDL3Ln7mRJNH5otcGekdYzsYHzcMFBZ1FiktfJoiRoxoycznJEnGMA6QtxH9ya41fb",
  "key14": "47uUmR6kBPFzu93jomTgCqKDc7WLwvPqDEABu3XDMN9PoATLG4eVo3RdQTHfYMELkvA2xsU9XaGvx8ySKuAiDX8u",
  "key15": "48fZkx8UnWrTmEWgdeNxz1piGiKj2hafYfZb9HFHy5e1DpPXUkebeHCzbqvcWKn2RTbqn2ZLRseG5HH2cffHQCQr",
  "key16": "3EfGZuoxHk7DWHJsTsCKrJNsJH3C51TPpbYAjV6r26y49vZe5QpjamekAvLsgWDUiMdAs7tWfs3bTgsh17K4iaRU",
  "key17": "3uyw1N7Xat1jKGLWi5hdfs1n3Wqw95HCZL7mcH8qKzkWaFbn1EuTkbtc7FhwwmNn6iJmfPd56vu57NjwdPxCc9cS",
  "key18": "4jitMa1dW5C7Mma3ofCPJxCyKvGMYiofs43BhsF8kUqnYr3cZbCQYWr85kvgeaSeNqhdk5h9UCxV1sqoAzfgspqM",
  "key19": "2RjvFn9wuH7sy6Zm7Kd2Fevgd6opFGJNWV5pc2m5nVmSkAZxyu2RbcEaGVMg8VBrgPtXsu9L3nWmKFvmEgaMYMfV",
  "key20": "2s62aFWFUs35npWU2PuF77zQK5NVpc2ybP78Ec6GaawaDthnsEF3rPExcVEJD8GfVjELYixviaGH1w4848aFZERA",
  "key21": "3a8mpB9VXWCACiAsbqL7WtXfaQhUHNXoMEExDnWEMRr1z7QXJjd88rKN1VqBtLNAiwjqJzK4gEgysoYcNa1SCNXt",
  "key22": "23DmZJ6QA1gwvfiajkgMTBH27ny2XgcmtugzjjjmJG8UqUeS79DKPWspnsTJeSLLQQCcPZqJo5whRzjHomLKEzgQ",
  "key23": "5zGoC6ydbF8UuSgXo9kGvzz4wJNnfgvEmh7UJGx7dQZJ7cuZQ4zSZw28qKZgWCGsyVrzxWSPcD6fobYdo1BQ6HVv",
  "key24": "dwesBckXLCK8LLn3cv2nbdJrLVa4FKTtZ7mZfEdWVGC6wmAcdbsAoa9qZe8Q26zk8hAr4QFyja7LQ7yC5swBQiM",
  "key25": "ZWBwukMV824jpJJkTTVBiFuDU7hscm8mGjdoUbV4t57LwLj18mwHEQ4FQAdN2iiMgSagK2kzWhqXziTSoVg6vqs",
  "key26": "5M4JjrSntw8D6BwEX8RRKRHKtmLGcPPgtPZfrGZjWiBR3KNnN7iYDCdfLe6kp2nb4dNzaywzuYS7oH84oLQiuZqg",
  "key27": "55b3HkFCvNayjUHzd9a76Hu14djdXzyWhry5ekvvAwkgom8XaGgW69eLV8RhKTtVMmB5nfdqJJzmFBN96anviiXq",
  "key28": "5nd1VMFHnu199zivpdBXH76QSXcM28GCzdhYhv1foZZWruaU7AVYADtrpRHrrn84qSB1asKTG4zQbCffxN7kA7oB",
  "key29": "4DTBsaqyEk9DxsExp34GkzrwyHRRfrAJ8uieLntDog2dqE299W8QTALRG148nkoQ5Zqj3tXnVgfNEoN82xJB3xoc",
  "key30": "2obJ8JdkcZLK4TzJ56pvPAMeTZznaPajifiNaJ91orfipMPutsfbM5jbVZLrBuHJ71frAafBzNiJfq6u8FbAPGdF",
  "key31": "67V8XVD4oP6yF3nuMX1JNQZ5v1BLqpuuVRD7yqwG9DchFCwMSfFFYhpcsB98yAE4nuhdPJADHBP1TBarzVjf6zvE",
  "key32": "4VkjJPiGUMtgxFdfr5GcmBHFVQ1jh4w8xEo4qT645fpYNa6wku5dj9ueyM1AgZ249Va85xgP1XcGfkacdupnZ1FV",
  "key33": "5tR6BnTtucGmu9DzQRU2FKnWfRChvwhzU9xPrUgdVgfuYTY8KNTs8V5Kc8M7askqzzzSamH5qrLUUeU5XrTv7Guj",
  "key34": "5PuTKxSUutBUS9Hn4PV1PZwLsLGMrMNUGR4aPEuySijQbfQmWcg2sacHxrTRAM3xrSeiu6bHGXBt4UmyrxR5b873",
  "key35": "2tu5ZddkeduPmHTC9rBeLVuFrh1kWiU4MDcxnAD99nsqKpxACDioHdT1Cr6CpyiVpqUdybtRbsNWUsrnuKQnNVU9",
  "key36": "yQpSqdt9eE7Maap5NnpXB4sk82JE36AG6qQizt2JWdtZSwMZkozRR6TpvT33KGV3rh9wj9tjrXvbSATL3S5SVLN",
  "key37": "jf9omA3KwJ9uk6brqMjDKj9SCCFZ6Z8YYPTvXJwZNfb8QmnDFHiah7TCBs4vgF66TVm315Ny4fNytNFMjfoqQaD",
  "key38": "3RHRTuHyvaJCnhjyvRymxmPtLXS7fbQmK5G6FYBcrN9jduyoskLmjmf9gpPK3ZSb9DVULBJhF2FDbfsg6YJnzTkq",
  "key39": "5G4JqRyjLvScLnVkcFysiFno4Q6PtfWHjSV12WXAZPqY6PdUAfwRrzo4k6xpoDwo9DG8a5BVZnRRD4Um5vVQpQdF",
  "key40": "2rtyhzgo1GiBFLLijzLembukpWEjb1TEN4kYbTkocNgYixsSkS3MMqXSNKo4vS4dhJYpy2BNRQfDBggt28i1FB4S",
  "key41": "3QjsDx9YJT8P1VqYp7tmTFXTWk4bZsVsJ6ysCcNW97578NvDR9ShSPTq87CDQ5yucc8UpvMKe4hCpfZSZyY4HmUq",
  "key42": "4EwSp7tZxwXRwcPddKK4nHjWbYd5iX1AXUf8ye1YHQ3RaaW6vdscJmcY1yijRn3c7ozvjdYk9151EPcUYsJ7Lc1g",
  "key43": "LWxuhV5syZGD6FRggyjvsDSTfBGRUisDn1XEgT23M6MpSyeHaN9osm5SpnTF2MTEiDyN56ropC9w1u2KcX2HoFb",
  "key44": "24kUFB2dhELeumv9zNCKwRZ2XfM51CJRKtm6C27MuWxJT3x84yKkDjLyQej8J5ForixTUMWr39gw3smdrpn2kanH",
  "key45": "Gp6EkfFEPrk1uH2LyVCPKaGxTFKx6SeZpiD4ZfPf94TVKHfQeMQpvc5BCdiNB7yiSwzQ7BcvyN31MhTjriy7ywM",
  "key46": "vZW1SP7zugtfTeboT9TyB66WHKpHHz8tq2GeJzd3TaZxHwyShTTMA3NiYBszsiqXu1vMrBeF8rx3NVhVH4kdiZz",
  "key47": "5Xt75o4ZtB6m6LymSokjHyKQcBVPgpweLDxFY8Ab6PCnZo3nAUcxDd9CXPHWUnXLmeAXx9LRadkReLxeRsLAeW1",
  "key48": "S31presDyVLsKHNu6Y6LiVmyW5RKyzXwGBqcCbkWHXCoSknd2qoJsgAkaMqdBqbuwTzV8yu5KrYso2MxaEYto2C"
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
