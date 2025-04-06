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
    "8TaBEKGvgAyS2keibBPe9KiDKvqNuqcK73PaodfEYH7XUuG7KnZbuexs2jAiXaS6cvFwM7ECtafwaLPVRfc5Y78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LP9cS346h9euqFWTZPXX434JygGj2XEVjqUt1zXyTjLQTNnSADbwMdS4PmNrGHm71uFxW26He9w5vQugCCPcmy6",
  "key1": "43zHovbqtU64Afj7ApQvjDKJNjKK2ajwFpmbG1EKQYpgCHEjESKPkmfvHttpPS8FUNLTtMgqKiUwP4cP7NGSb5J8",
  "key2": "339ELS7JrZw3C4aDKTFJ1X9W6i6nzxc2zQn8G3sKr8JbC83yrmsF8xGAyF9oFcq4sSqjLB6FnugK7FcuipKKKJ4P",
  "key3": "JEYv27uKSuCMVZDsm9kyNhTSi9jiuRju1eaNxXx3WpfhNd5kv32Li4DsuLN5FRoBVPUcYLRUWDDzgByyApj59aJ",
  "key4": "5dGgmnjUKtYitsAU1JxRTCT8aRzL7BVaxtxT6XcyK2vMMzq4Z7uKavasG5R1MBn2jx5AvRgLycZpsqwxR3DLCD3n",
  "key5": "3bU8b3dmD5JGiW2JDSYjPaDjktf6bMyJQJkR7Gi6u95aLXhj3H8QS9JBrSJRNSkcc5EWsJiZ1WxXGALCMXZWtYom",
  "key6": "3UwjcwrhGs8X3cSGCTfzV94Xp95oMPfMoRE5vPpxDqwLL5nKEnLm3JgmLXFoJmJosgtvA9hQkgcKQkzVDrdanD7Y",
  "key7": "35vXzT7gSE9WtAMzNt5xuv12fvSJqd2wj9MB4D6vYgs1JMgKexHoVCNDkmKmUxkbdKHiEXpU1oAN1rYKwiCXsWiM",
  "key8": "4uikvNsL112ps82poxRubKAaREXE57DJLqatEyMKFCPdtZ1pjg4GJMM7qajeryqUoc5yqEzGCo9UqcyEfQzq6uUN",
  "key9": "5XrKFvdQ4sZzRM6yqzdBi8Fsp5g6gG8AshX3fRCwj6iZfeWWx4nP5UJeHdFE3MfMnWokdWizcBpPw94gXyTthQuE",
  "key10": "3JEFPT72ucKXMnBwoditKuADRkCu83b9sqYFs1u7cEM3FhNUJBfSPKyro2hU31T6DjasJYF6CRYFq29p8i7BEnfP",
  "key11": "3eUeTLiZs8HhzXF7qaQ378WnzCxoTRAJtQy9GYMRmCe4N8YHDsUNrHw25fLvRp2GqwNGDJEAve1QmH6sE4JukH1D",
  "key12": "4dA9u9c62Wqps84RRfimibuKqbFxsZS6S97Ayyf3wESSWUNupw5oFi9eZUEqoGQFaXxEhUmCHreFryS579rwBGro",
  "key13": "2kE6iMKQWZMRzRUxdWbHxjzxnrytFQsr8yeGAXH2e8r3dDg1Mbdz3arLuQa17P47JuFuvjSyUUkSg1kPXXxU2RbX",
  "key14": "5FN8asY8SsLtxfFyrBP4R6yk5xJJkZ21cmHb2xZJeucqkLUAGNMT6tAnviJaYUQtv3crH3xWW8Y4vntj9BTUHvZs",
  "key15": "5RoLG3sA1wU9413oEPuLwxuFtitXVqeQqGvSbntCfvR77kQAg1EpnH9335M2172YoNvaxb7sP9VEPUCDhr9eZ3zB",
  "key16": "2B4kpLVQ4DjUBFsPJtVKQupMbNvDGh5KWgYkcMV5aEEWqoKCZDqDstXnRPvwChKh84sduN4tFFFMtFZ7Avf52WUE",
  "key17": "5RApFDUL2wN4ZeLtVvVMDuWznJCUR9AYyCRpxU5gz4USnYYAM1dKX8aBxebqA3h2qC54FmfDBVuGkV67fKmG8JrE",
  "key18": "2629JXs61wyofgfSuY9wqoRT4ahXtpnVZvry7PNBU33TWkeo1eZY2qpAqDqR7dX76uyqus7J3bU5oH1JD6sVtg5q",
  "key19": "5Rpsj1WYspzxtANo21bF6DRdFLkgmueiWuz5evru4fykQvwrc1UewAapa8ReGbRbqL3vQCKhAe9CGNjzoczSdZ2a",
  "key20": "3wGBcjX1KPFm7sAGo5tkxUU27f4ZgmpfV2CYa4ihScSd6wD2xeiqpSCsEE3JK1SZKzSkJSmfakbiz2u6MGjC6PCe",
  "key21": "3V71KmWC8BwjcGMfnZnGYTfwzwSTFcEVRYf8hrZWdNWS83cZwZu3GZchkUMh314rBjY5yG5wdzzBYMGtwfhuAZyi",
  "key22": "3gM9oCcitHtXrW5vn2dpDPB8oDWTyhzhuVw5rd81F6DxizxcPms6bKpU8skisFi62djKBu1cqHaHMBJwyFiVmdLJ",
  "key23": "brVQt5curanbjZt1kPGt7ZTzaxCNEoCAFvxwAmne6yWJLotgWXe85w4zAswFRF5s3ASmQ1eNwpoePDB6sYWM88e",
  "key24": "5mjVSKcG4vZ5cCLQGv7zBC7gMQuCaP1ypsZyPzid4WDaxNK3rUiGJfdJag9eVmaPyHvub9EFAUVEktN16t5VkBKu",
  "key25": "3eyKffQ4XqnQQK8BCDPzgfuE7vAD4aWvD1qRAkqwwfwMp65LXAguii1hceJ5ici2e13ZBqKDeKXjyuYP1QYEWPP2",
  "key26": "29uFUyTgewZPGFyvMYdQPjvkNe6ntqSPgkYQcoGo4igk5qne6bVNvuorMkhf32DW23v2mFPmJpz1Wujie4Md1qih",
  "key27": "5LGmoti69u9jpMBmeVBX3C4xrFWSwvDGu88DGRvHoNu5hgMMCuunCge2gAdqAJA3asEw1ibhk5VsvxbeSSkt2hKT",
  "key28": "3RDZXFHuBFxZKsqE4aWkJ7BZXBSToM6H7tMqjccjuV9U2zCeQ6XsjS3StBQsNKJUid3ZMYuUsfkeq8mcuDTQ9Kc7",
  "key29": "5229UCjjf6PuCUzudeQm2naoqkgfHbVHr4F86EbmFdDgzLogfoVGubRDGFL7HRi4b8KpEbFcuQwhemM6hU52hnnh",
  "key30": "egNAH3RNLrmpezjf1wmu4htpCmuXo9FhqZEwY117Ag6Ey1q4a8BCv5xV1VDepTBMrjkScHu7jZ17NrtXGbhQ6Ga",
  "key31": "5wnFS3py29Az18njhm1YNx3ey3ZZkLboJCTJoPY2K9n2wW2nEbRPDDxK2se9KLGUSJtWBVuAgz1yQ5tgNbENQzfg",
  "key32": "5WoPPmdE1RdzN4XzAZY6zPaJT3ARBDvxxXCx4Ftp8iUcgN69Dp3ezENVRTV17kvNL3MN2PWRoDZ9J8SSNAPkm8mx",
  "key33": "3b8FWmD64CQmvHZhJ2vsrU6zdU6EjzVzLnzdJXeuqR1gFKDYr83fb1FhN3FNgFnGkk9Hb7jo7fTBnEATFyJhgXdF",
  "key34": "2zJgz8yjr7E5wW6qoEgqgRAEHhWpT6nPsBhZqpouXuuX4YVW3FmguZpFbWEzvYNwTrcb9pj3u1pCBz7748p11GUS",
  "key35": "3ux68oajKTQrUDyNRtUqH8XP7KPwx6rUiSBp1e6vBcqcZSc1dXGs2BcWbzhBJdMeTLTN7TBk6hYggMJLTCfoNbYT",
  "key36": "5AVaLRM9qXy3PPMK58xSx7UgSv2LL8yyhsfiXE8ZavXNYoNziZyCtb1VHQZpuex99asrHWorttysPtekgdf79dLx",
  "key37": "5kmkqJdSsBAzyPpCVaYnv2f71BqniPD2wxCfZLoHBzaKV9HRmZ7xXdBzJHSXSDYpFcCq86AX9ZniZYtsfh8Yyroq",
  "key38": "2FCzVLvKeZuyRwWcymgCzHJsC4zH7k47MPA43orUXNk9xMfHt8QtzDXn1Y17DV8Fus6M3BKUHqSWGcxXGt9BVvmp",
  "key39": "3QcBodd1W39eu7B4MwNeYQk7ByQ4NjQQBU2VG9nPdXP1suQkemcQZjm8FUhjjVZB36yHyYZjD4KEEF94qqR7ivKQ",
  "key40": "53g6ciSJvAmAneVCAWsoHxzB1YWR92Jz67Ju8rmD6wMP1aAmgq834P45MYeuD6q6zPn4WB35gWXExrepM9sPbBPg",
  "key41": "22nN6zH6KDMyvSQaLo5sAe7oGLg9M9K733NTHzvTxd5Eq9dPV3HxktNxZgtjqT1p1UoM7KnaVb8pgbNfUSMgWSVr",
  "key42": "2pYTjZaFNCbwAKepN6q5Ra7ccYHY76wmUSFbsxzWxBFemMmVKTV7M4RNFeemxDZCGTUxu8Cax2jTDyuzq6ejH1ff",
  "key43": "3DXtWLYUjeAYJqJhzmT4gAgGyZJKa4Ju3SEkRXj2fuVWairWsYkL2agGqGnPyqchoNxSjZ4nqGek6hKJyLe1jJCn",
  "key44": "4jxRSXrtiPz47vicCNhbTwdjchbRYHEFxgSasMRj7qgCZ4X8yAmv9v7N3GrPH7aWvDubq6bLeAmio1K8oo4xkUuN",
  "key45": "2e6fD1jCFoAamw4qWZVXiBwX1eEXAAUJc3CyZvHs65c8MZVRjHTiarUySibHUSGGiru48T3rwEH8LW6qEpUBxagd",
  "key46": "3aE1QuFwdqVTDJRyEQzuSkskenwX9tbwp295qqCLstKAwSzyo1kYLFVduPfrmLBZMTg5Zy3ETtCwtsZNV98CrdwN",
  "key47": "2utbUucbXmkt1vSdGcBw3hFjweptG6f5M4pCqbuBM27p9xUFKTnTeu195ygq8h3hamevUj2UdGyUogvdGkyWfWyN",
  "key48": "DMkeeoFXht3phhwBXJUqsrgKKQ2QB4vecHC2rseEFw4Kx5Dnc2UE38NimQYJGhSUoYc8pfzkywbtektcFs8XwwB"
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
