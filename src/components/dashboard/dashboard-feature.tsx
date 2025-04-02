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
    "2fT61nF65K61F2MimXm6UsJxSqoChxZ3V3radxGiBbobyNS9Bc5G55muu6TfBnF95Teo9FvRQWwjEgHgxsAJpNP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NwrS1t78MMN86e5nqiWkCcr5opsUhToZiFt6TgK6vyuTk1F3Wbj1wxm3T7mKYDBYYh6Hi8JsDBCR9k9LtPhSDs",
  "key1": "2Mja4gK9neEwrFAyBZDS7h7fRyaj62zC2kH9xpuiFf6DGQb24URowXKVMMm4bDmwPXMy2VK1JkCG6nq2eevntLSa",
  "key2": "59hGtnSkvE6sgCgYXZv6o84kd49uamcbjVWg6adpxciTdoaZA45sCNvTMjn12XrddK8Eq2Rqa6StNDimdsf6eB7w",
  "key3": "2GZBMTtEonuMwZ46CV4y61tFVubcvuc5id87oym9kQPmhEX417AbWsCmkCXEhwf8BxEgHBtr2RS6ByKgGA24jyxG",
  "key4": "XWNf2Jfmzx82f8ZfVn2s2k8jG5ybxKdvuw67jKqpP6wqyz5VpHWSRdf715j5MEebdxWuQsj3baAQtntsiY6qVS3",
  "key5": "2Czzjx71CBTqhSuVLMKNRrhAVNtGVYxaRAv1R9JYNrW7aU2SCxMDotr3mtvwJAHBXgW9y1XiJ4jGUfS4ZGV2z27U",
  "key6": "3pKjfz9cdCnXKF4nXR3acDG9HNmPAChQfjHWTDHUYFNFFrD5W8jX8WsUAG7U7G5MyqruZAxeiR1zuvjZgrbHKM3d",
  "key7": "awCafHhLt5cs1vcUNwiTBCG4gtNmK9s9jMR5FmZhK3TLo6R836gwMu6fKexBKzbYxsedhnfTQpD5LA8khKNmDRz",
  "key8": "4SxX6yrRWHpyHyicsZ2rBudrf28AarQfUZszwjdiaNvUbJHWboXkHsoVUnpqyawNe2HrRsafM5vCkzrgfFvjPsq7",
  "key9": "T1KkL28HYQcQY7p1NyRpst4aJ1erHVVWMAXNUTnkko3gTU6YKPREmYwsg3qr24agbGVZ8RQ5kwnNfW6NgZ7vXmc",
  "key10": "5ZtSYw9EuZybGL2y8HCZrgAWMn9PhjBkGXZFkUcYjnJ2cR55aWjdW7WkMeyD8tYCgp5RfPHGQisnohSo6uu8VekM",
  "key11": "47EgN6TffLkw8ECrcYDyYWLm9D1yqaZ1wpKPQSpBAPkiMHAxzaTBvd4Qan1XTQUSrZAzea8CZ2uykBVS2y88MscA",
  "key12": "2D4rjeqDSccQtnkDe4z3YpfMYd7xKJ2UbqiQQaxrkAE2drLZASAtjrZdKuzEi3MMkmhwSRuKHwCGb7RBvf52cbMf",
  "key13": "4u3w6wX4QKdVDCi1pV5DvFEqCsYVYAyoBS45YFqRKoff4gcDiEuqtVsXZQKb49sbUV317GtQUcGdVBnNuSLV8aaL",
  "key14": "4Xp9sPqFLCKwJxXNgHVG7qa41CNQQ6Wh624mh6CSyM4r3iokmto46pvmcXjKqKYrywWaYVUZndjAhEXHyzWL1EHo",
  "key15": "SRvw64doMreXEEfdnVahaB33Kxy34RUnHgQCHnE4KLLFUaYNnDNRATq2t1ZExg5M98BKqccSkWNMDbFS448Rrds",
  "key16": "4xrNNt5BtNnUmsVkW3SXHsVUUctMtnvg2dAGuSEKUCGL544Lm66WcfdKDcvErENrWxa7qHHTRJxa2cMtZbSw4YTd",
  "key17": "4Ziurr9tB4mCSXQVjaW1wU3Dz8SFQ9QrTqWoSFMRPic7GGzahjQiZHrevbK7SWC35tLShxYi9oAqg9JmCQBRbZK1",
  "key18": "5MgRUWDv37DMTbh8cW2ebmC6GX94G6qkAg1P5pRP67Ex3bjitpGggNQgznMqFtVhSAgVMdx8FbmKuAdrUJ4aUWUx",
  "key19": "4515YMsWxvGc1bvVEZBWdxJQ5cMvjVH4W9Wzsnuk7P66YULCwxmVPp5G1yNjJbZYLXLxAUARM7Eso5Qwrz3t38KH",
  "key20": "36R8HXY5SHkFZdvVfWbqxfvGeWjsn3y3NqidMgFooKjEoJ1cjV889HnYhpgzkJTsURzHXTktzYqwD659v7PahoY1",
  "key21": "2REiCanATcpfmf4d9QFs78AJi1opg3zvp14JYsruDk1UxkgrpJtJWmfUphAYa4S9zEo333rrraAbm7XqZMDet6Ww",
  "key22": "4XceLD5h9Wxd3vgPW6jmuRGrKkhW5k8nWDmL3veDfWhrp2r1xemDx9RNdUCDJMwXsa3hhbrC4ALt52RcYqTU9jZT",
  "key23": "5useenybRQk6PmX548TAVfKZHPUMFXN7dAX66R2vScDPcW3Qp5Yy6qc9oNod9DmoVkRXEcKWrRYn1B8KgqwjLvUt",
  "key24": "5ncbcQGg2ok77vEZobZckUQApK8c1MHR9n19VcruaGoHH44CDDKhVncN3xYgVt5UaqNg1dBLcU2giQH6L6RPbq82",
  "key25": "4Yy7dXmMvGcJ9L6V2qyNnECFgwft8owWeEWJHXvp7PBfSAJdmXnkRgpDjwmaDH9oT15W5fXZ1f75VQssEUQTxKpL",
  "key26": "Bxj5HHbYpM1ZF1efCcZBD4qqBsyKDxc3jtwnfTcM41MhdY74gC1MV563vaHL8qbk9mpmJyc7A5REW5ncJMEyidr",
  "key27": "53mZdYqtj8AyBHAcbgNS4avDkJyCDLCpEDHdfkDiJfXQRDbsjwicHLUNU934rSbomvefWJT73riAVoxFZkp6tZUh",
  "key28": "3Pht6rADCvf6rXGmt2c66xmQsncRxFrp4RGedZyxV4tWEgJCBdrd5PG1C3devUMBSDScpswsQsT6tCC1ehv6T2Dc",
  "key29": "4XSJgoK3PskaFNWGm3gtN4Pik2EcbKa4JUxvD8RZjA6NDddEtAfdyosMbxcdzZoACobCDsppLhXDacMdZhNYf3im",
  "key30": "4fYbLTR6p81P2RMm549MtPFkiidt1TmH9Aojyv9psqYFuSEnyJWsoiYSrGGi5EZ8xKJDxu11U6Y4k4KxDEqMwAWH",
  "key31": "yJvpTvjjpyydjeF5YHjrH88FL9xPwUQFordHyfs5eK4hpdJdvJq32oosJWEvQFZAUajVSY6EYdLcR8kphKqxyAb",
  "key32": "sV5DFTKEgHK8va5MurwEfM2hoZcLHG8Jn87a1WWSvsVTbD95skyza4qFUK1pk78Y3VyevJgysaoq4irvfavAtmm",
  "key33": "5oU3Fr8bYeqTULv2rCGtXcH3JnEQLFWgvi78BLXaCP6cdiQh2Pz6mnRnqqRGF4riqJC6yAChgSNZ6UoRK8rRmP7W",
  "key34": "5LgYZ6u7ai7bM3XjLCPdfbGnMtGETfYC9GPXfHYBerjFFxFnABoGoZYUsRBXQo2s8xpcGupt17SAAVcNmqPk6MH8"
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
