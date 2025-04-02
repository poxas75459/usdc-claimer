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
    "2yWkNoPUcEfAepjxcfJrUmEEHKi46EgHnWFd8FgUKF4k5MJ4kHUR9PNDctE19WH6MnbpQ1YUkAKKzwmbVB5MS9c1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HnaK599wgFnetLcN55KLxgyYwNkaBKXGS3tHcfefTNzupvMapCTEyYbQiJ5yzAQKzAaeiZP85LBgqJ6k12H3yUm",
  "key1": "54o5mAFPKyT1LYGQCcHiT6eqtEMbkV8nvTFoAcScwirSn3FkowxXj61Ze5vSANgcnr2oD6tvEzmsN78QKaArjrbZ",
  "key2": "45DsG1uGMMCw5XmJ5YmZohYTRfij6Botk5dQRb5PaQp7hkMXjEY6MG3MtmEvG4tFx2Q13VS4HXWxWVzoEHfVeVby",
  "key3": "38S2Rrn2EjtNz5fRFFp4KgkdPJMXCu4ar1MaUHBuub7QZg8ivC1b16CXP7vfEqyRUc7H9DXz1VABr8K4myrYEWy7",
  "key4": "3YBQegHYhdRZch4puBaxj2iMHMSBr3btVb2w62n5KeYrtkrTfHHjatiNJHkfhCTtwPf5FJJj5CnTc4cxD7quzCj7",
  "key5": "3zuQNb5YyLP2kqQyEpPJi4nJs68iL2Xremstp1PAFi9NJ6u91VgE5tkmDHJXvuKySVAheJEgTwEyZD9zpd8qWZqN",
  "key6": "516KRefNNrL25UfALpmdpcjEZkRpBFPT6u2bpiGRQsuyqaDcJEFPnMoxvFKskrLecGejokmYRcsVmsmPAAS64efQ",
  "key7": "5BXoKFxkXhqCzRDThdCCEAPo88Z78oWUurwhB7PCuTq5R8mdJ28exvShzLEBz2vcXZjJ9dWmXJs5k7xffLiNfhLt",
  "key8": "Y4fkFZGV6fLSeweSwRNQUjuVq3Gx5WPqWmfX6B5d6cv92GpFu9XJDdEvNQq19AtdFZNfNbPyksG4KHrpe6sgAVd",
  "key9": "2CDgZfeDgdiHgDVU3KZi2xRdXfe4xEpR9U7NzPGt8SFtQd2i5qaZup9QffEUmEN8RYnucy3gQauRKYuaWc5jSRDK",
  "key10": "64dZbrP3CtmvxuwJmppyks9uw8LHBVZoCBwqq5BUHVBMRqtLH8tHsTgqRWaPXR4ErgiTzJMtc46qJRXq9sfyzxQB",
  "key11": "3ctYHxqiKLGefMi1yXQZGCad3BdMcajVfsAXUYehvcPwV5YwPbFJbJ6zgtm81WR49NTTyJXLz2R8RNjYGc9D9suU",
  "key12": "4ZLDoeAaWZsFwBwjXYUcivttZqgdFHrb6WfmKNgVgsJHFf6cTWrhj5DohCyiM5bDdubn3mxkLVHtJpRDrmgA3Fds",
  "key13": "2V34KzmnnZHeJP4AvCFGwK5TTb2yQHGnGf7ATdYqJMnDb7GSvxgc47XYSZJ7wqm7nxyL1CAYjqzDemQ62n6LRyvD",
  "key14": "2D5W5srjLQHrbdr7t9qCba61sdNP3mGzxDwk8sA4zfonoa5SdJV8Pzc6pWqwiKmHwA8veA4dr6bzznF9ASQRC4pZ",
  "key15": "YhbUbPReTwNH9nSEWzjWxtu22CUxevs59GcaatA1mMsSKFpdRFi3ZB7Cyet1CaZ22oRQsbjHdr5VMHLRpyQ8Bd5",
  "key16": "4XbTXBph4jpqHyiWYFGJNtCJwB1FvP36WkyTJggp3BBZgiG7iPoNz8dsgjSeK8sFhfWSdYZqod8Tbt3bbYrBh9mD",
  "key17": "jSUfZwWdiKHzwmei9JjavzsMdpBVdxS1G9cVGR9Lpj3KXdKSFJ6Q3vTytW7exKwJABwooeaTa29Rv1kfe8wxKYQ",
  "key18": "5NzSByEh4nT64xA4qVdeziBya2inSr6J65gG1vQVC69jsTGEKdBHRM7EpK68vsgi47XwqmfBjqpyTbDNvUyY6xLZ",
  "key19": "viDdA41NhHDZvjTh9PEtEQeBxCzZEgLSAEEwxM94gPXNvDmKmMj1i8z8KnbDTMQtuDJNrJJvCw9sGX9DkLVEumB",
  "key20": "5R2ai81sGAUQvPitp8uwdeygs1vnLEJma74oXrHFCkuzNzenCYC1d7p8qPipLiekPLhnyNagm9w2kaBHfEA1UwNm",
  "key21": "494XPGPiyYue5TmSD1f8J8BuBDFgmucHs9SdKLHygtRHywuZsN7dBEBDiYRmZrfXT4NCAruZ65DgVd7kmAQ4hXHz",
  "key22": "3CfqY81jBkanLffe1qpUf14JLbGq8L78ov73L46EnexXU8o27yGcArrMHt9Fu84z7a7rxTtezC9sduv5DeSBJUp2",
  "key23": "3V7iEB94SxCwpxFYFWaSNg88YAWQucb4nNXc7VUwshDfqiUk61TACCBLQsPRksqR7sny7JRh65u7BT3sxUCFGqo8",
  "key24": "5XpsDcdNfXQN73tvseVGurK96FdW6Mso7iWfCFgs7qcnrbe9x7kgqZ4uCQmfM9exmee7ddX4ZfhPjE2GsxS82dxf",
  "key25": "5bmn6jjhv7jG7LzgCSnD2qxhQgprSGM1nk7nQkuC4Y2eNtW6M5dVgAT7xJjXQ7AVa5nYcC44MdbCbFYqMwJYcbCJ",
  "key26": "2pm43RAmeVWhAxDWCj3nQvQtE9wo9U1sUSscBAygHe5Zsx4zP4FhW7prrSShpAhnv6VKS8DkTMoCUPRuuCsYwoNH",
  "key27": "2mHrtWgGDtLtWnZiHEzXMDAzqPR2MzqA4Najn4hN4q6QSe54gxRL1T5bRk1nHpSK2bLDUk9GsMUbAHtyhTDNdCdL",
  "key28": "415EFqZwRrmpwvdu2D7shFrzSr6PCMcy9baiXytbJzjTNbicetqfbiHWgdSrE3oDrNdaSELS6p6uEnih2JzxFLpp",
  "key29": "2pMGpGJiw685UpCDNEeMcVMpfG6qdKt7bRuqAU2goGbD5Q63rpgx2p2WK1FDguWeQSiJodKdZBmuxs7SLVUxckq1",
  "key30": "5N8z35X5AQEa5rcGoU4MSM9gYC1Xv25HeKss64PVNXHwnSYmLsCtjtUYZBx8i77L9zkW1JypXnaDhWRL5Npd6V4v",
  "key31": "63C3LXEmSCbhPn2drbGgEQGogz8fHCDM3vTBkQ7pUK3yUkkJLya8kK5fgEtCfXbdoWwv3PnPYq2as6Wk33dsoU3G",
  "key32": "7NTGwGLzY3REQcL6G3BK6rU7iHiRawkNJwnft4rjANSy4A2uBhYFepbobARpme4SeKD5EH4TUemMt1dnY1z23Wc",
  "key33": "4Yq1HLVGetMqiGruV1PY4gQLZnr6vpJQ2nQNiEYQ8eVTuTEZ5kaEi2mFi2FPwc43FArgfQdCoZBxdseJ3F4ybaFg",
  "key34": "5QPRhR9J1yprAzq45qN7uznTqfEXXn3hsavrJW2RKYqFogU5ckDcKTcpXyo2X2zchKgARGj5dxUnykN3wZBcHGhj",
  "key35": "563ACYjbT41njuiat8vUaoqLFfivuNBHVoMK3Do1956TjFeMR3FcG1VhDapADyAQyCR9sC2feudG4kzjeLF3Ch8H",
  "key36": "9V8vK6fzh6Gjyvhy6m1rPcpP8xFM66ANRtW8BELcnqWhzShG8iXWuH4uyyadH8UgJBwnYSCi7Tdqzdcy3rsTNQd",
  "key37": "mTT4Mt3RSKf1FQrh6AA8XJnUab64qSPu73uk7wxPc3Sm1UhnCfqmtW6DSdHPC9akpubzbveGCqhXFZyGe7fumTp",
  "key38": "3wMPtgtM6pSgMofLuch7nYRyaS37HiVMBN1TUBPfM3o9ex8ejSnYqQ1Cy9oFbMCtfBr3RutSsH5Sh8cXxHiGoW2C",
  "key39": "n2vG1vS991ydDswpmqoh9ntScVFvXWivqfbmGS7wn6VQjr3c5sBCuZHtZPndXHZT3wJEednGYYCUwwa1Yedymy4",
  "key40": "3FoDHYBykjCfbDyPKKErH28Pdn3jgSyZoac55TGzMREdBJ7UBaGXeUvkz2cMDYFsGpr9i1FFynV1Kfe8jQJ3wfRA",
  "key41": "2Y8cGj77fY6j1HuuQtwcpDTe4wQciyibzpkUkNmyFceLRH6ZA1VbkGp17vQyTtzEcBvVeNum34R2AHstj3EiheQ9",
  "key42": "5KiBAFHdtH9h9pDRhRQuifyJY7M4Puco3Av28eqnr3wfGiiQoJ6AX93gknfkYT6S8vvKBBFQHRbYRE5jy4GSFgmB",
  "key43": "3C6F1tx459c9nEgeHK1W6tQx5iXkEc8yascTj7ijNVnCCbgnmvigyHtVAPUaVpLffmiUPBNKFNSmEsWAdTXXYKev",
  "key44": "Bm6XHuskAxfdV39YK1FuuDTNS7tVKQfDRLiQNdTwyYmG1HuF6Qzt6pmneXTUXmQBKNK2CZWENnCKzpMtgz1po9C",
  "key45": "4HAqtHHZ97gbGzPs7KeEHw9e5QFaLFPJ9WXNHxsomFFL3F39ixuS4q4RRAgieCEHqbPuDiGu6JQMgeNidgFfef4X",
  "key46": "DNYNeyCnaXu5TuEiWVFfAMZ6pXorKDvjUAZ3gwni6YnYN1sbAmhfhNXKZ2ciaG9TEnJh6EBZruvfcdU1gerJanE",
  "key47": "2VKrxUG2h7vEDyYqtjfjp1weKmpJmBZdPW6NrKyibAwjgiFu6p7Yv3AeEGUZmPHJG3dzNnzGHQYCdYCpzAVnVfE6",
  "key48": "23EA6kn8JD7iLJXuFh6n2WfYfXrBZhNv7UbHouQ6s1hhTrSdZYVEVmivQMhiCEK6XVkgyvbHDD1R2zoxF8rz2c2y"
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
