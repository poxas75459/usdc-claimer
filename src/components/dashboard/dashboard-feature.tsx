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
    "3LNCPso4Fo1wWhj8MibtY8BHeP3pWCVJyz4h61QSon3nU5BB8UG4P8cXLviuZNNJcTTog2b9JZ7PR1dRMcves7Bk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KW2osJHyUg8xTSJbYEqssvbcT7hiKxPD4eq8ZoEg5TJg7QvSJ186BzHcSxetYE5Sx8rX7TQRc76jEJ3PhX74eQG",
  "key1": "3TRZyxtNHcKiXintKjTq84gdmF6fiZNp2DYQ89AD8v6NMFzrt1vRYnqbmqdo6P4HNPexyiTSAY6jk8wLkWsJFsbE",
  "key2": "5t1bsTZ7yj3UsMtJRLvoZMMKf7GKxR958CMtgCijFdudygLovzvAT1kunHms2DVN8xXeL7DmK1mma5dfPQ2b6dSF",
  "key3": "2x9dVSQ4ofk9mh7CbHP2byknSDd2X415vNEQH4gW74jyAFdNsK2t6y7zDNcmTXW1sdedM5tvCZvqe4m3MkDL2JHj",
  "key4": "4AK8dnAdLLrtyKdMishivE5ueWnEo8T2XzKsemKxYv1H1sFpdzNeMsbh7FRFTbqP6CDRm3PoWZqXmZjQrUqmCJKK",
  "key5": "2FszG7Ly9PbrmwuJVNa24hRQQ7zpQu7Tot7TM61tsZb3Fzuvw8smWhGkae2zZvAbtrDcG6EttWhvLa7gzKpcTcyF",
  "key6": "2qe6oDoaYSAmqnCSjcnkwYAHX1h6p9gsyX3syYUoWyXULCJs6AJzFdR6zL8cSPWuttDTkF4gnB6Wke8qmq12gDXx",
  "key7": "3cT9rsdqFXcY4MRQgHNZDYXp1QDzhnab2NPK4RHryAZPnT1T6MLiwEGiS29cWwXzsfdPGArghgJkCd3pFeeXWVDQ",
  "key8": "3G1pdc4AvNEb24Yby2c4mxtsXq4XjrYGtyhZcysWYcqNfssHhoDdg353GxkbFjNEfxBvqVmSKeNeMCfNe8tp1XKh",
  "key9": "5vXq9wttBesEWFPdfv3YWzi8u92M4KrKgAwEEPVQAznNAcbwp9wQotk8fF8VGPiRmyDRYkQUYG7hFMmqcAz86yuD",
  "key10": "3PGMwZQewzUWLKHu2yPJen16K7se4yzKByveRcMUvULba7HAR8iqUHnZdgvPaNQ2zFfRc4r9e4d4Sjf3wPJN7Ntf",
  "key11": "3hEdFL4EQ4AAbum2ZUPWuMgL2X5qYqmjash6qKAJBaPwdKbF92F4fYVES7Mvwr8GzZFqurT1JheTpyRRxyW1jBz9",
  "key12": "5tbHuQRUDLCptXSAU3rQq4TN8CycnpmeLcUKSEjckbEJGTUjyQFSNdSVD3Juqs82GFCmRjSJp65rAtWSmX4YhJM9",
  "key13": "2cVdUNs2yzef8p3RWowJRn1fLRAR2Kfzs7qKbkRoVADReCAEz23UigKaEVuWXg1qHLgzJizza4qvTziUZwbrPz2L",
  "key14": "21nbbHZhrMUY3Vrd66efWMdMiEUegbmWD4GqxU1mC5e7mShcZBhmHdPKfDR9WCqfhiiBGuEEzYQfndQFBTn2QoGm",
  "key15": "4Ynp5RgcHRFfVHdrbnzZ6HAJ7NfP4MyjquivWeikGZw4C99TuQ3DkVzXAs4smjN7jEpbMXv8thUFYAZ3XWjQwPzk",
  "key16": "5Ym7RYTWKBjEPhb7KxrMDwBf9BhkuEBdY8KUoj4U5hzTXWm56GiqXUFnr5rtTmREEK9EPas6xJi3FbWrRpRrqLch",
  "key17": "54LcDbskmk2cQNHDmCVp3YGu2W8d4jKpohMWfmK7g7ry2VD6RHHCJM6zcPebj3afFGyvo3HN2dR6ZVEscJ67mBhF",
  "key18": "3vkece7CgjB3movVarPDA7fDAeYfMTUJ1wuvdAa7KmL97jvhzgS7CBXbZovQoBUGQrB9BbnAzi5WHHsbaTwc9nCo",
  "key19": "36n7Ny96P4Q4Vk1S9AA2U8RybC1AT5ZjhayurazXxq6xLiiW3eHk1YzzvuBizLQtRLfUH2KLzu7n8AFsvEfuJm2c",
  "key20": "4XNjjGFwEYm7kAJnBfHV3onNMmnSaXqi3jSjMDUBhm1m4fTgYZfkxXFM7EWsSrk8VuL5JMnX4cSdDNpWbj1JgutP",
  "key21": "2dFVYJ3xJ9fA1dFtNEpBy8T3ZZama8mh65MEjDKQCwrhT8NoR8uBQoKtWMvybjj8oPajGQ9i66AiathLNpHqsgQv",
  "key22": "KNagWU98tWsepMq4PML3D7fnqQ6b4qBF47bfC8L3CmAhNgsGo3ZwErKcUcu4j5RCghsNSB1nAm3sgV3H5HdktsY",
  "key23": "2RaxA8ggJnbUGgwrExaVBm9XbpgHTSnS9bm6CYzdMhcXwCd92FV7Ur6HXL3i54u42r1xdPvfs7w7yp8d8c5dytxU",
  "key24": "s8YzSQLj2D4V9ipDuENwABQC4Wgxnhu3Y7PVewXaeDpBexB5MT9CopZgauAJTEVd285D5itdZPVjvDjhsNbGt86",
  "key25": "2UF92QajndJ3t6Sh8eo7uUomxtUa6bocAGUfaSjYsbipy3CsbPvEPqtSUZdzhPB6kVjoMtep7kVZuGCtt4AMWmwk",
  "key26": "4mb2gfxLGuMbdXE1ARFs6oeKiUGZSNdmNDWuuvQP8tRXQ3VYB6KKTiBXFaK51nMNMPzvsdDnVoujBGg8EiroR1LY",
  "key27": "3dEPXYrJDhS696WS153HkuxsPKdcHyfTuBKpD24XGyYTW7P3ZfSf44KpygGVCn3QGL48sNXTm5HmEsgDQndMNxA",
  "key28": "4HibvLECnJ5kCdGWGUCjG31M7u67b6DuCkf9rNF4yozCTg4iNJgpkuR365jnfNZPUz91ySKVKc7Evaa7JuH5bjSU",
  "key29": "2gQbaFhjStExpmuJEr5baYr5tLcTBvy4G99dLyWvvx3ECQKkky5tkSgAHyTY7z12HoptFZikarnkDEKiCdwXVPPM",
  "key30": "4ehDFDy3hUFrir4WphGk4uRwUiMfvPWjNQm95qgWWruaAA5gJXAEv1TdJxMKxDoS6NFdZx2V1MwzPoXMBzuUHdxE",
  "key31": "5YJozGh2k7TPuJfyYrUAjrG8Ys9vAUxgPkVamxKZ7VcgnTcBpnRPMkAdnSJiECPjwfpAqSqVrGuvBgt13H11gJGL",
  "key32": "33KnKwrX196YURcoYjfaSg7x96qwVQeJbUJcUyiRvaothvqwcCGmUnW7TjeqLZjk5STjCeDQqbwdPV3m5z2X836C",
  "key33": "5FPbN57TAQfKhCE1sLB5ZhTA6bt4N83V65YwvHvWM93hiA1N6JAZ7EQo7EVWpPAFqcB5UFX8Bcu3rYWpck9GbLhj",
  "key34": "3z7HwdyVS6KkvRigBmpNJt32cGwntKChxDCchBajJ3XkGcPZeUbG7DfveEtS8TsLbW8jEMf9Df7vgTsjePXAZLzC",
  "key35": "4vM6rZuhw7qr4GGHd7mKLT2vxwezAr6Q6P5SQbXAmLRtaJ6jrnW2dhkoUvBHGprNbsWaxuV6VbxcynGa7cnr5ED9",
  "key36": "3oESv5xJMtkhMtchX8yxURHBtYbTU2FLspJfg2WXNmye5cmJCwDxeX7ZYDwQMigCqr4ePSELhxZzBqe1Fomr18cf",
  "key37": "tQ1HCPLaYcb3RfzgoZk9WKxHtosLc6AbsTczgwxijFWESsuHActhBKDXyMGgTZBNjkWiWYAEKcGjVPSzeyDfabd",
  "key38": "2gwkZBiqrxVKk5BXSnPaNyZNCqrkUZ2ia5rtgjYaaBzgwwauBrWLuFsMqxSVuCN3SqQJx5AN13GPAe65o1G29DJ1",
  "key39": "4wcfuGqJMAFGuRSLABXzDwaTUSzU2WVyQwPQa2VzE1PBEmm5ZpZCShzMPoRqq3UrXZ5xJQJuFnExUviSVJXoiKz1",
  "key40": "353Q3ETKpDJLR2rh4eqaib95q44e7pTW5DEvpMSm6pdbyc2hEX3o1HqNadARcWFjE7BXhhB1J3biqRWVunWSBuv2",
  "key41": "2ohYCJMWS64S8ajPiEKhB917jrReTVNuYTcGXVAVBGhmtcjg6AUZU1TuPyd13Zrao4qWhB5vUazb7RLFU35mXq2e",
  "key42": "4ARBCQKzhpXexUoxPcj6hyL5TCYAK7kcZaDxVJAkti9Y4dLKFssU2B8NdnZBW8vP4FCM7nsA3ZWPpRuRV1Zb7zbV",
  "key43": "5XWVnmTPfRJPofPPvxdLKu8uxL6jnL4GRK9AKG5g14KsQ8sxtypAcNQouynF9TmRQjQL5iLCT4jpsXX7gUcZy9kY",
  "key44": "3ZJN8QYT8fxh6JYb1nKqzjcKt8W8FpCFhytkSJRfEaimLoJZX5Bj6WAR9z55o8GzBY5wkPdKXXX6rhHcN9CE2nSg",
  "key45": "47qgYiMkDBJ9QiV69gnGs7kkqfjq3TSjNWze8s4wsf4NkCy5fpVCPF2YkoYyJvYNU9sjSP83pucG5daGqAw2BwyC",
  "key46": "7RSkyYGCHTTUyicg7Re1m8Zs4Mi6hAGrB2KvCZvAHfiDVcjPwEFtZydCgKCNmPrLjswTM4ba5ZPkK26jqki34rh"
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
