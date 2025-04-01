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
    "5ebSAJQfSHsbN1zsQ3Zvxfo6Nj3grGRKgX2jAf7PwZgj9BJoBxX3HjLsJzM5u4zs6qePx5N1XMWrZGxC4waRLyxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7NASyHzCnCq9r1yvkGbDPX4H3C5FbH7Q7jcizhBnS4hu9ksUdpR9fvF28LtktBENixUgcmJCZHAqgKdV1RRdLMU",
  "key1": "8Thc6T2qVWtsULtdLYoEot6WYWNPBsM6N4BsiKch2mEz3UcfenoQ6RxiQvHGujUKjHUoYsHmAG35NSKeWa4ZCXS",
  "key2": "2xPfC5Hwd9YUVdWcyBEWue2K9h4DEoVTSWcJAAiVSAsyHr5xHFmBQgwsUGUqGJRgfYfx3nptA5KQXzxpjrUZ1HDK",
  "key3": "2DAkCUbVenfg9ci1qyuMUykAiTrBYuUDamiSecMTdFKqDxi3Ta9MHGPSmFmAmyAq1bKVMNgfdeMmNBxJ5CHm5Lhx",
  "key4": "3UuvZ7CqrjHvMkrqGiv1DPRasHnHj1Xh3TbFYVV7u6iLrrjiEjvtVpoe2f5NFVacPdQSJrJbfqrz1QLFDXG9QJRz",
  "key5": "5f4EnBDeun8FSGvAB5DkWyMTxumzbBXgTDQ93iDvyGCjdQiCtCbUYtTTSu3dMrcKwoqZgNmjcKAcD3kVic8bT5Xr",
  "key6": "pspW9VXAsVf1ykfdVFFx3wgH6gsojekXnc9mCB9LjUUeSfrXKwJqVsGbDyiUWUWBEtA5VMjK8jxBaWQksNfcX3S",
  "key7": "4jnZ6DsY6FWGbzoYFbXmZaNzRT7NFoReqyAbGwvfdKA7btgUHDqaCnWVZBKp3Tu3qfTsTEbEebMAW3XYo3473vMn",
  "key8": "wCZPNTopqcEj49jvmAKssLcNJcYP5SfkwDNNbXZ28PgNE7UNFg4SBwPci4TPQFhLMRcGZMBi6tjbJQ91AdYWS8y",
  "key9": "4ipfRY7JKNZotXUe5DX5jczZkWdne6MgxwQX4dtFLhY2RPNj4hgv7RH7XxvcUrTs5PjjYNMbLGBVjBLUrkpBFjvW",
  "key10": "5VUEa7jjpFUGiSKpvwotpN5wQqmkT2JbpfqLtsiUnGWgqstnE8LoNuWnkEnwu5hwW23esqn9E1t62WJKgQYNnaXC",
  "key11": "5ukAabfZptPMPqVf4d8qWW8uDYET45wjpan74uHdebrtRXtKATRoVsx2VGFNvoYy6iqfHusrhwzEsBjykr46hARZ",
  "key12": "3ukM5cva2557hj83ioP8rYUUhCFcUeT3cMeTm3bvi1Yud74f7NrEJZauXp6mJRcZ41kPihDLuwAZDoXEc1ukuizA",
  "key13": "4uLoWYpGeyZdKKntSg9UJQwWbKDXPAnQYNZs8TuMkcSwYqEremB9ApgxE7Ut2PKa2yoDAwL8nH1GVEcjWK1zi3uU",
  "key14": "U7tsZYkhs9tpe2gGEU4aDQcefDdSGXLJ3RWDPuPhk9ch7dDso21fsLmEaw2re24AEm7mDY2fLTwiqYevponTszn",
  "key15": "56HhPTP9PRYcfoFbxuCAG5wQQaEBUjdJWHDrSpeMrou78e5hrRvWkfujBtuzJN8yGR36ry4gV2cSKVy2P7x19MwL",
  "key16": "46Cy9LSyFLfj9BHjUJuBQXDxoqtBfCYeQipmrgEsShq1GsZUEdYhLvkVPNPyorsM41LcyGM3k1UAaeFFddWsh6d4",
  "key17": "493XBetuf3MDpNi6Qh3vgKJtDVKnv5TaRhfSpvc2AbRnZkdLD8BbUFDPnrrrvF9Fwr7o7dTSgRLcRe33HvATxiWN",
  "key18": "32pb3KrrRnZmRh1QUkAkfrSdjeRJJauG2jtVdYyEnASEnpBpaFvk9zgx7YBmdX9KisgqytjHRa67LuEGo7X2kSU5",
  "key19": "3a6VZebueo5jPnr7DXy4HTty4yfPT4Q7HhC7hiirUGAstKCqkCVaa48AcFCLvXfesNxtrsC4PT9eEaLUosKC5rSA",
  "key20": "5iiNjDtR3SwUsWJSziHA3bmw9E3avANhgAL53aaG56eJbQyhRkiwQGq991nDCxhdhm62qs7Z5sQnu3ttSVMT37FS",
  "key21": "4cdUb1gx1RsJ3CirR6oKitaX4N6Kr1Vm6S7Jh2CnVWfv16wJsi6GpMA3zCh9s8ZDiZoSGochTn1F4NBWbwFDwwvn",
  "key22": "3dauLLFEAxSbQrAEZ4MV8k8UbtrCbyFLvfkfJdVzqSnrNZsFM72QBb1Kv1RJaX1Nt13shDoW1PGZFVnQmhPXKgKa",
  "key23": "QceHNVP322oamgYewKct1fTWYp1QkcWCoojkx9inTbsGTEFmXvyGc729yBJrdDSCLZFbCW4CsQEcVtaUfuH8pZb",
  "key24": "ejm8SxZN7oe9wQtmE3oZ6X5toxWm1YBBwaAe5S8fWoU2MjSTsBMFQkZnnQgS8KcmhEGcmoZkuZ9f9X1NBVfrZrj",
  "key25": "6eMFW1ukL9FV4FXmcHrMJmxeCqRwvShJLs1Necbkhqx3xD7t9L3eMDHa9G11q6AZbThiNvAeEQX2A2iyQm28pwd",
  "key26": "SBTg9fXY2aXK8kkWmuFz2vZjUwzQDa8hArrS3xKXuBzSdV7U4me9xo65UtLMrW5XCBg86dutVhL4YXmaXWajULg",
  "key27": "3mgiEY7BLUveC9TZ8ySapYgKDZU3Vdfpto2VMJ4X445VD5aNByviBJ9q559EnQGgqsodU8K5Dk7X3J5hzNa3x18K",
  "key28": "9eWitzV3UWM1Bpyk6eroTmNbATUBfFJP6qA7Re5iG9B448bQQevDeUKfwVLu5t2aRM95pxVGn5UmFxFWNgz1FmX",
  "key29": "2ts5UqK2Rx5HgkVMJmDm4ZVs933i8zPeqhP57mjEjmrspw4WyKQr48PMDcg2mzTmCTwJCJ5bKcA8LBENLBzunQrG",
  "key30": "2mRn4R9fyHD7AbDnf1a2gPxgNynTTzhUS1BB32qQdnrAZ1Bfysd6X5L3CpEczqeL6g727K99czDGk5VorXvB2Bno",
  "key31": "5Gt3cv1JDFF8KKieHsBgoFNdExMgVFPKQE1ZyWSFmAPNnbbHXstr62EVhedTV6uz2degMYj7mUCJQ8Bmjt1fKpyy",
  "key32": "CmewMt8SPSbC8ffwLxD8UuiRkrZ6zaXuVGTA88DeHQN8kYqbiXdzm5fwTZ2sYz8A7AsppuxgDsHwfbw1x8omTUn",
  "key33": "3uStATdH62UDgd8GfgNUEEeYdj9fwks1Vcfo5rStYRmWyzkQEB1hxDWQeQvqRf1Z6zMNDcz8QgKo6pjx1t4LeqNv",
  "key34": "5dU1yn1SRubt1idBxc3xXtGfP9zcoVntAobq3gKdYmeVX3LtdDB4QDGG7AGPWajTVU1GdRCqT96X4DgsgAWA2Fyp",
  "key35": "tnsTacdd6De83QEKY2pssgQjZj2HXAyozAdQgQgvaSpg6SMuMvypoSF6QZz7aNw4vz9ny3E2d1f3GktvNqkdr2Q",
  "key36": "2EWXsFdypiZKv6cZdDvxvifFXtqxnS1vBxxThFGH6yoR7cKRwwxdQ2JAF82dvfQua96q6pgiTtNHefgGJcwQQ5ha",
  "key37": "3AaQ3LJ6wxxQ9nc4t7Ry7ZhfrTFDExzteoQLXhKaapu8V324mcfzHx1mY9A2nbBToRpnoUNe7P9kKnv9wZVy6khh",
  "key38": "31pwuCPC3xN7FwSvj2DKrZnWBouQdosYianYmafkwKeHSVYLVE9sR5jxSAyZcHPQaQUra4nrWPseFJtZfZqSttkL",
  "key39": "3vMbSod6cCmRPvhPba15RFN2zn7YZ4GPVAbSXDY7BAf9gXaPwvnnKC7RLk88XFwAyjpYug959ZKYw9vhf3ieGGpf",
  "key40": "4pb5epBf1suwqwJ6Weg7cV7iPmo35ovcYiSbPgu5HsM61roAUA9erNuT5C2YCGMY5VQWtDvM3QQYfwb1BAWGdb12",
  "key41": "5K38XqXgLvB4nYPdsNbodcy817ixy39iYJptGHjEqxfVrUFWL74RW9R5umzVrdAPjFPYDCrLWUU3Sj1WkbkVLHFC",
  "key42": "2nqZoyUmsUy2GDf6KqJULFZ58jdkqYiNMkei82Byph7mHqKxMPq6KWhJ8fLcXZPC5QVGr2Wedd3cNHHhpuhg9489",
  "key43": "2mq2UspAJR6Fwy1NRm6JmoPZqcUgzSkioa6CHaakNJ4QSDXStq2goyBR7HhvWZP8Ssv1dpLGKyL7hRYMq1gb3VKg",
  "key44": "2SrKwuQoznmupMZLovyTGsYob2qKGGeKWHSbPkRg8qDMxxESdKRZKYxPiSACo4iX4m6p3ub9Wrvzteb686EmMMZT",
  "key45": "Dote3LG3ZGZmaPyn8qLdiMF1awBcKgvA3Ads3LsWnmQAquQ3kaxxh46etjPQyJzXgygajCx7P56dFNGEG5jcYgw",
  "key46": "5dqhXsRUwvkvsbD5gFvJFyspZgjdB9P1B6Wg9ngqz7ryv8wGZz1wxgx8Jv7uXRQQz5tXw4k9nBvjX9Uypxx3wUP6",
  "key47": "5PUq8E74vT679Cdj3TwX5bFkwD3xbqnFdd57Espf8CEuvZ7hS9c7Qm2oM8hGWfgF9ErJDbfDfrRmBNw88B2XwB7Z",
  "key48": "3rfL39KgtG26WRv4x9opuCycYpabStuZuvir23Cj7UNKvyrZggRK5aM9vRiizmbQtAeug4VA2oRbrRtBHf91pRr8"
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
