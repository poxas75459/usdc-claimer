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
    "565jcRS5P3RYVe3vaPHzgTMdAEi1NNc2tgqhcRhq4URoA7tuQSfHNFAHMsEvhVZYAUHyy7cmYqsPeduDCeynykYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MSKMpbuAF46gRet2NPPDCnJwK2BiYUDJ4rTysbSvuoEu5JSQRjHTnE4romCFGnEA9cz2xk2CvqWdsGDAUHW1pPy",
  "key1": "rsM67sQXCUYuNjaaTAbX4ugdMSN2rfcVMhaJRrS2xbsP8FxZiAipAqsT8BzJoxD9waMSsjqJh25ZyLP2zgRoaW4",
  "key2": "2zZoPMa3ajCz7KWQ57EGa6DMUcY2hE2XUKZmVuaUo4uodFNwgePzT6dZEpps364KqRkMCDxEjmwzoW9FothGVk4g",
  "key3": "2bwz9qFBiDoX9uRuzAuAtrXe4BPy4qL9bqfKoWUwYffEZmydvSNT9sW4ZjXtdB6jdzvR4m1arCbUM1oyHZ8kEu21",
  "key4": "3XyYb3evAEB7tPAfSu5nPEesXMQKd3ZVnt5XdormyfAcX3AS3mKTUPD22G47wKhDVxFnPCkSEgBBqTNnJdRoieGb",
  "key5": "4i6hFprCPnVfwYGMwnMiuhDQ8rpR1ahgHDg1rMhqoVGDkyUAuPm9AhApRyAyeqZeEB8YrRwjLBhBhZRBAopAALYy",
  "key6": "3LcjXAggTruJDAQLoAG9abQAj2pjvWgYkEcPmGSkFsmxyy1EmuFjgpYnZBYj7gB4JqRN7Xw1uuGk6KEkAnGMM36E",
  "key7": "3MDA8Go5dcPEzWeeNjDLNQFHnLhysSnqGntMupA4s6w5zz3BGAZw5PM2jiuud3NQHBfvV3vmCnaZWQTmvEhepwxx",
  "key8": "4ZFUUwa3iMvT6DKNtVYXQUDLJbzRb1Z5EnpBobPMMXs3t4AC1t3kBAueHsvacuiLc7Pm7LTnpRdTb2EXPPB4kUu6",
  "key9": "217D1sPWhB2XXxCCGdvrJLpndNFAbVyfAAs6nMK3vg2nV2iQPwmydrxhdyxYLykT8rSJ7fUJvXeyF5NMaD6ouY7B",
  "key10": "gWVDEhTfEtaiJduezwBqHmF6VMPZJhFE1umRgDVdUE2ac2gMY8gUm2otBXkACLdAc5xVqw74Z5pXUYi5YiqL3YG",
  "key11": "FqWd4fC8U1KL1zYr1W3v5hoTNRZ5Q4E5UKXTYWzo7X7EjyrDm7gRWCWEoAiRnsj48fakEiEXs6vDWpZnpuwM79P",
  "key12": "ePNVGknM6RJEaXHQiR4uvcGje2rXqDgk6LB4sx4nBxabp7PgNS6kfjnFnbLvoK28e5puvZDSmMXEJMehRfCbdE7",
  "key13": "5tjPwZY4nAifUfDRPnsxiUWj6M4zQuB2E21YyyWDU4q2DjL5B7fz9FNENVVTX4qcEGhzLm9X9fpRumofa5gD46Mh",
  "key14": "UfigtY2At2MpR2wBPsZ5aY8raZmNoVCDFmDtn45wy8MqTyRzvVNXDkohSKpSh9N4nRZzQ9nLEVbVGwEGPsMW82t",
  "key15": "2gFhqbDi6VAUYvkLvLpDeXb5GDY6EDASyrFjrD3pVHfujaMoZCZ3rh1TNapJWKhnWyYaadcMcHaJZ3qozQ8mjURD",
  "key16": "2dCYQGT7AC8mpEjVVngiVfbc2ADg3AApps5AqKW9BfocuLqaP4QbcQhXpsH943BqYSuszRVayRNX7BBGJp8wbf3c",
  "key17": "biWm99iMW3sJ6KPAKhkQvSTnBTGUFgjXZ4CnDUbK8hrahoRRsABJz2x7a92yn4Jo89RJn52JoNBS7zK5gZkRsdQ",
  "key18": "5BQPWcFwjh9D9TFSAHsj5AbSX77bQhvB6p2Gwenft6FqNC4ny3XFGWHsGbVpHBM8SahBrhtz22429JSfhKzHoPRu",
  "key19": "2PzivXp3mxyLy732Kye1CSTAYg8412QxLAa2iDBX9UsxejqryaGnYXVnjL72BAwWrR8XXKRjtMrNCabVNjcC2Wmf",
  "key20": "AARvr15g6wBMmHMQymPTZ1AcomMGvwF8yPUhzTJHz96AAhZ81mrKtzDFYvPUwh4QN6vrt5GFpVLqGC8Eo1HTkTn",
  "key21": "2umjPPzTcU16rwMRmHEEGhwwgxmYyXGdN8MdscLDRzGKTdT59XUzkoB69MjxhRoT2DNtRSyNCGwp7Wqshf1o22b8",
  "key22": "5UvDqxRqukvffoSrfS7ueAsdV7ZjGqicCEFPkCHVCnWHFUNLTCWz5qhnckbbYEUMVzSfJHz7NiXef8XUE9YXUzqw",
  "key23": "2KFogEWW3NNxBvvefWmkGibDRFd1qVYbSKJ9MNRaabTf3Lg6ueHqKNPhwexiz3LmGvTDzGGEgzG7Y4P23dXAYhGh",
  "key24": "5Wdxk4UZDL8AHAoao8z78zmYqXPuegp2iHuJDMSDN572Ea3FLDLmpQmdrU9r8zvfDXabYp7GQQ15g9SkGe3EDUxb",
  "key25": "5ZXABVUX3YehVMwhV1bf8Cemu7aMakJLsZAoPW8qbDWqqvAV9wevnSmHJC6iCWRhbMMpVff4pSwHHM8bZ8Lxoce9",
  "key26": "2JpxWtdPC3zZUu1mJH1oxZzFdzbPo18wA3zq6QSGyVzzTFAN36wMFLCJnHWHVxDWR9cUkFDNixz7PaNMkFBmpXyF",
  "key27": "38yTASCbRgSoYd9CKXCGrvipGWvt7LcYxGCTMBYKK1DkrMi4rygXt4LmeYiRpneuXGsqVDZenoDwZr4DuJ7zXtR9",
  "key28": "4viR7NZFrJMkT9VYcweh2qngXw3UNHkwUcXog8N1DwHv321CQFq7D6isAydiDJj3QdUGmvtipkS3qoked4K7GUXd",
  "key29": "5iMRSNoKQrhgE4BUkFS3A7H5xmToizUmQN6NgaNSMZ8VXJb8SwnS4CHQ3QjDmquqQTC8NJV3AhuHdReeLRcxizNK",
  "key30": "4Wr53qExjR264zo77ZEogRBAN1Jc115dCvMQMHGHdDHtN38ZCaVWJY3CMzqrnuSu8W5B2hKuTDJw4WkaD9mTeTu3",
  "key31": "2CDk8S12AtwB3cQDYGRxmTZVG7BRwPeh59aTbjKA559CHZ16genUVpYCLv6skM1QnfK4fmwVyBSTK9NF2UmoWhjh",
  "key32": "Fjhezdpew6LWJPw2bRwsduWypt3Np6QzTPToLP2sopsPuxHs7DMUDdmgyNvRpBSumZykKknHLTx6hyVTWRrah9a",
  "key33": "5DYULKGVRFmVy64ZtdYVNguNagPUmLJNT3cWxXQQNagXkvAj7bFGo9Tphw2WwqZhD6uXTiBmdhbAjteXxHuuCQPc",
  "key34": "2t5TgC9t9x8NMFsj55dQJ2uqemf52N99etriyCoEENz5nDjSkiZ1nwcGc3eR3C2dd2DJwEb1euNswsQ7YksrjmYt",
  "key35": "5MYsmE8hbbQNjgEv7iSPeS2Y2nNpH2FP5NmU56EDw6jx7vagMMmGpGH6ta98UT4jBYzbPWiWrYEwFbbX162m8H6K",
  "key36": "2Znqi2aBrrXGysoEKhFUhdevZ9wAHNYskmTNetxaq7Xvt194pGCnTZDuoaAyhD1iJv7a7AMsdqojojBhnH5B2mdx",
  "key37": "pJzeqq6U9nBvd9KUbxXNguMKz9GRos1s4uP8225khKoxv79rfodgrcVn2veJb2DbY94Ztg9Y5zGxAVGaEbjTAHc",
  "key38": "KUuG27WB1DeGDHfhTYfkFsFPpi3KFBvxKj17ogz4bpbHEyFvuDyB3MwwPu5UBZyBXusHXvhGGQWVwPZRyUegaAV",
  "key39": "uKmA4mG1rMLg1ykZTDKjHQ28naNLtgqmUNcZh8HGk46AXW8gspVtUFFmaj8UujUraj46BEvuECgjT9CbJBwJpkz",
  "key40": "4jJtjtGdagjWktycvykUDrCaqP4X1eJiQ5DHAdYtFdEJFpaH6XfRonhZS8zwVGdx8JeFzYdSJG8cKdGyc9CNguHj",
  "key41": "Vch3pUPYkDCcTyZABQ5589Ng3GFeXmt8EqVTjmTKWZpoqvFwNTDgtsoZGeaUsH58xht4gHq4u7fiVybL8Q9Pt5h",
  "key42": "2a5Fmde9zU362a2U9s5CtYq2SA6ugEx9oQUPeYzZteUCD6ZG7KJy7H3LjVVJKjUrE2eeeHfwpX2jv59cSUYG273C",
  "key43": "3bz8HbXwTZ54jvKpFvJiSebYTpbNjfsVX5PhLXhUp75pQcwGx622cGxE423T3D7pBA2Re51St9BHVwLhGeECbvTN",
  "key44": "yjJU33vAEqe4kUPbiHzTjR4z4Hh654AH3feRqZzLgdisro6NckSPWbsXqYu9CdLGMsH4q4j5aCzJUPdqauW5q35",
  "key45": "3QuZHMuEwXEWWyvuSGfheVLRS3fU3N14BacTDd86tQakdKEhVyhxGCdBSEH2voLbWW4XQFnKZh6TX8tzGAR9i89i",
  "key46": "5qSfYugWbQBeAgDPSRBzPbsnByD62g7B8x4KEHaD1bUcM17Ur2UP72gDCV43MWnJuRbazk2LKHAEgtJUnpMPxdzv",
  "key47": "424YpbHJJhdok2tmmX2hxeU95vRv2evTcjE7UZJK7HzUAnMJDkkn7BmRfLDMqG4w7bnyPtFfj8L4VsjabyMSSsNm"
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
