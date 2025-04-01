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
    "2ZR8mvbY2RYbzsFevXhJTnV1JWghhyWTxuCn2xLzVqyb2AB4n5nLucwDQnqFxSSEEedoYpFmfQzQaAL4VcfoCytt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zp8QtT6nMxMY5FDTX41jwiDWQdV3umcZLhHxTHWzWgYWn5m6UrmHaXXdMFUTrGpu313itzMP8hFm7E6n1mzv6RV",
  "key1": "2nqB7QSwrjK3LGbUduFbQavSDZp5X4N2nbYfEeMVYk52yEsKY68Pi5hazNZRabsaYXt9CwLmug89co2b4XSkaEWj",
  "key2": "5uReUk8MwKgBrKXdBMEJhKtyn9VxoEVHZKJS7zB3eNmGq6P9bD8dUJDY6snZR1ER36H1ToejfMXhs7DitwFJYNqs",
  "key3": "39Q7T3mji2fwKgEdAnZTJSaVgF826Ev94asvsBGwiNyQmtGhnmCDXi229AnaLybtVNtVRax3hvNdQ6gv5QGR2wmS",
  "key4": "2jw4jjvhycrfhQqQc7homzv7MY3aVQquAu53AvhPHuVH2G5Zb8Yk8XviWqFXKnJUX16jrWM7VKtnNMq8Rwryvfmu",
  "key5": "2LUkoLtUrgro3tFov4eEtufFrRDEcxncWxbS3odHpVqKX6fv1v3mPZcCu6v364mVrXzc36jmKGo39RU4MQWyjZiX",
  "key6": "5amVhhnhabf9gMxoj3Howo4eSx46fgghvXe5KC7F579dBmBgXJWMfUwHxQ2eD7ddEfRr3m2Ud62g1GwR8SsViRV2",
  "key7": "EggEzuUXfeuKjU9GQKRyJXCwcwdsZwqQo5Ha114EaKpujV93hvWvAQmU42etR5KConA7g5Dk5ptyrgJug45Gask",
  "key8": "49gecybk1ME7aj7xfFZLcaM2RUE3rFJC98HWAYLZEcKA3L2mu4uVhhpUfxiFtszRbzTBTD5FgE1VESUMVi2tnyRJ",
  "key9": "4RDgg414fCxEBHY66MKhoNYKchkEPVVJAJekSkusp6qrqTnuzdw6yKpRjJUz1XNZvbtUaSvmPt4Misi8fbxid8hK",
  "key10": "3bNeeecTWV6HSCszFtCypZ9RzVrAFsUTudXUGR8Vx2YahPeU88QL6qDhe9G5FbtkoXkCftV42BMuea7w7bTxAj9r",
  "key11": "4LW9Mn1oRg6jQSWv6ugdL5vvckTkWALqM4H6GRmc6Q3pw7E2cY5ex8jCfCzTS3EqXG9nEZBkC3dX9wNNHTBesSpb",
  "key12": "3fw1TmMM5MprGGFX4CsUigskrYsngU2WqPk8Pr9oCHn6ha2ZLsZEp7qWdLhcySd3ZERdn4QLKD7DLfvkrL7EEFPZ",
  "key13": "avwfjVoxJeLNVKywVssS5onjLgN1MRjjZDiyjAbWwYFe9kKExYU6w8BD3C4p7exfdbXMGJYqdKBhhtmXfDRiGN6",
  "key14": "51uymE3fmugxQRAShQDLxfiStpRz63MKBx7Wn7qJ4gntRivAj27pY247BzvCbiqtgKtSrNiLw7PU6WQa5ovwenWk",
  "key15": "RDqfzcmqKtd9gXU48mGG5LLEqRmhisMeamaoD1J4QCogbEV9oYho1asbPfRF8ohBQ5Fy3G9czxwUtwEgM6ddedi",
  "key16": "2iCH99CHdQsGCAB1pXUkuzT2TeECJRm65vtAG29f4pEgcGSpjzRy8sRRAUbQZooR7ucc5CwEQk3d5QXFa4hDwMnd",
  "key17": "4gCPd3BGBrW1ZXhPGX11aEwVT4DTEb1U6mueqmeNo5M56R5t7rGLdcRCmESgnP8Sg6DqDVg7Eeg1RhYpuYunspdJ",
  "key18": "5NiqMMeR89v17WZRbwUZX3TDZtDU5tadMBrJVAE7dJSUnkNvmmVcYSpAB65RVKCzoumTpXuJoXSioorXuRheBxdt",
  "key19": "3VzYdrJbJRfcsUQSipbcdsNk5nsPsymPcbMgm9VwsgAyAY3tvYLASqShJyZqdaCLak6SKQvtimuY9z4XhTHB94N8",
  "key20": "3qUiXpAThYFpyRzqCST5E7DGWanqAtAm4GFBbCiKUUBFntFLqN3WoDgYELpC1iQRbfCBzYg9aG1fY8sEj881wiGz",
  "key21": "4Zh4WPwpJxfrQUcZjcR5w8LjaG63iF1LpqVFRmVz6qboyLJUL2nbugAEBzzPvh5495JrhHicMXZCASNFcfCBjEhv",
  "key22": "4bxd4MUeYzB6hcpjLiYewFAJJNGoXzyxvGW3dnfhyqiP7CvcREd9vYrEFoNUbJYF9MuASJ17NacXV3T7mvwtUoJp",
  "key23": "vEeQ9yfxjinaXWAyBr8kNU1Lhh4SgjhNnrniayddrUmdCKub28xSLJf4k2vshmBLdamt12bFQBXh1ebYZNY56Br",
  "key24": "3bNCfy7Ndqe8EnwHJsXtfX5nZYaRFR62NYxz3eoUd5ke3dSGcw9E6gHWpZvUx4ZR6uGoxp5skuGhkgTuBcUv2qMn",
  "key25": "57254svmzhaVw3MvLh6jHXGxz1xiRXu5UqoKgtpYTz9YDtWMJVwAeiHtv32VVwQrRifB5mTYndf8wvXbacB6rqQF",
  "key26": "4hYgpN8ZHgqYXacSEHvaEHzeBWu6xS7wbwtp2YLmryroYuBKiWmuyFLK5ni8DHQS5CFgQDJSz7hVp6mGKgPrkY6f",
  "key27": "3ExiufPBV21dwhJesn6As4U6z26GwRwTV6QEG4qWdzURBVhTT6pMbrxRFJLCt58wgKWMHPB8EbL9qHawDq6CVSD1",
  "key28": "oao232JeAyQ7vHM7L9hRxZvS1Kx44LfjDNnrgcVV1Ysa2szF2HqHafvVbTsYzaurciM2JFPUNz5UnCzGHhmyMa1",
  "key29": "2W2m48oCSCiJQJutqbbcchgVTQcXvcKW8zeJ4gtaBs9LbsJP4rzXZq9JHzd8mViyL3BgeBAinE8P5HBhFRnitiXQ",
  "key30": "aRtXaS4Gi8ZuSXEVD9uXLhYyJe8mpptTH72HU8FPVynX7Jhr3JpzvdPHg25XyFW2JHqDynwf6VvVasBQ1ArydGJ",
  "key31": "3AhASeBeoBp7pjtK2LaT3dZ1E9ii95dPm5C5nVHJiN5vHaPgYeSK3PHRQx6nvMu6J5GcG8T9CL3Q7yQETza3N7FB",
  "key32": "3tNAUjQVh3tnEQ94JmY2ZXzRGqF7A4wyyADd2aT7prpCr8743r8nTjtz9CSgbFdqEpyXZ8uR3gnRxndH1uWEuQ2W",
  "key33": "4HxCv1x83jSnYcPHHPQMG5ZvwajxNxVwCPcMjbqVEijKS3BZURFHzBQYmTyBDaa5NYGSt1Q71A5Y15jU9uft3KfH",
  "key34": "5ag1xhnjW81M1U7A5MSzPzUkDzidTfVatgStiPx53GsFreTcLmDFjbGs3gbCTgfFDk7sV4sDYbai6YdehDVNbF17",
  "key35": "W9R4YhnDTe4BnPoHXvRwRYCXBFtnSE2RSu1Y4M5S2Wtqc8pVjWuWnsc7rZUQ7AaBNNnokaXQDHwdkht6y3fQ3Cy",
  "key36": "63R7TubJTeFQpf7iMmabUjTT4XSW97NZPX6Jdpo3bV13dRmMdr4YbZo3yB1qAg5PDVVH4f8sbfokPowbiZs5dJUg",
  "key37": "5qwsi6B7GB8EuDPrVmreZpEWrLjj3DX75ugDZnn5we6eB3dv1JJLdSRrqTJHxB5x92HYHuMLvdvssW3Ay9AJZS81",
  "key38": "3tNpRmZsLHf3Kvh82iBWS1163hTY5yBur4pLre12aJZyRmUvGxi3AYSsNrdctzHEnpMhhLrh1dCDvvhrDCQaqP3u",
  "key39": "4mDuwVCg8X9x4Q4udZX8tDRD16J92NCayowimA9BEEBqtvjiN1qqffyyMJHm3nBKZn2JvWhxkhw8xyvGWAyenfxx",
  "key40": "zzjVnWGN39Sbi2xhfz7vY69Ks1QQjF34GAsWbpfTkyLH6DVA1CRWQMhFkbVb6J8yzoHuYbwnJK5zMijmkRtXnfT",
  "key41": "37E35cc3ykTqvfWfHUYDBhcoQfxVZ3srEzYZStB7rCa4dKqVEJucgWNmhtRGBVRT6ni32Rj7ufcddSrZQ7Kzgm4W",
  "key42": "3Xnvfo99tAr7rP6wKs3EWmJH8dVKUWBCtZw5MRLVsTnuufUJ1Q4JSfHqdxXq2nS3zfpZY8cHVWt3fKERffGVpUJq",
  "key43": "2JTnzXxVtRcaSitd8quqmoKZrb1FMgnRmizgWmmcBmVjErFJ27Hfb1mCfe3xGi1CwpkCmhL6ErKpUhih2isxCaFq",
  "key44": "4GYx2NjGjEzJQz46FPtM5t4qpwKYUTyMKegEeNh7tjHTkk9Hf7isx7WpJxXmqSNj3BCjXFBRYEap9hLKwMkcfPFR",
  "key45": "3MAKJaQJy1LmpHShS3jtnfpz5tpugkHYdBE6ATyqdBFabHVu7zHFVSVvrwsnZw2yiD1hGdGw2tKsTa5eyCEwxLD7",
  "key46": "4UgQLuyPh27XCybWTNhdKmhayQDiqwb8nPWGJWDpiz9qHw5dpVQh4wobwXnhuNmTSnrFukKnMhv9Fx98SQzchWod",
  "key47": "KoGHu9FSA4CgKW315xa3kC1ejzqmU3q7SEFSbtsEphpoDvpMk21kxK3jMPzw2KU7DGPsBeauuioHnfEsTFKaexN",
  "key48": "47SRC4njbkgr8yeWyoGUBY99Ypp1fKveMyV7uffpmCXaP4c5BRueJ6bCWxaDKuoQBARwrjuzdAyMtZUYcnBvnDnA",
  "key49": "2oUpJ3Aq1BS1h5LCbQeytugBKMeUq5Z3Y9S1NQV6kF7rVm3j3HJM4Mv1mzCbum5mubLXA3YxK82dStmht6Q9NYBt"
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
