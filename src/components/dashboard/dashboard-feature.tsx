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
    "5X6GrZio75zFtz2JF9EjHPhofrN5xBBaQheSrMUb1PKQEXWPmM2nQR7kxLTsDmnrGmBuiDWvRkvpgh99BaMWGKgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MTHiZiEUeP11F6W4a9kLQg82hPPc8yWECtC3AL16ozXmpKgtLS4UsJG81hrHAii5t8zZB9phrpimCPJZd97ApeR",
  "key1": "JtByZe3CwLV5NZFN3xfrqnimsNdEXK8jziLy1smQrZyHJbMz3pPJLrfEUJN3fuNmqiKU4Zfcc1auJdeqMcnhvWj",
  "key2": "2QvgBxRmSVys5UqAgWCN16PNhHmN7VcDAu5tPVtSiKFRGswmWWViGiDQpTPnRB3HivPG4cWFoitJqQikyAdwMJ1e",
  "key3": "tYzX95Rm5eFmMq4JP1vLCnAXFKM9WUf1cp9ZAtotn1B4Xjby4UeonnmvSXVEyrGi6k8spMXuMSbrekUVAi4Uqgy",
  "key4": "T3xmcaBntNuHjPTf3yFu6JzZMdhLeFtXdwzGEZkUvmHUf7eUwBvMUHzh9PF19dLQgQo81whVeGDXzuJysHjWa5J",
  "key5": "5G7mGBRVXfNC78LVeteoTdGkQUqtAZBJuJ5Er5oe4MDuJWuixaUsaCRAxio8FcG4RpCUHBYDRjrDQd3Web7DcVFu",
  "key6": "3EirYUUVohZj3t4H19p6pjqA4Xgsts7mocbTSy74w3KtFQExmhnWrTLa1GhxnQMsDfrNGk76AeMzQNbpfQRMTMeK",
  "key7": "55QSEEorRZLBaLoJ6vqcyahi8KGTt5odPsGfRY5cdXV4HuyEMJkCjX1p5x1v8BXAxifGDakbRDY16mLtnfQe4Sfx",
  "key8": "3BTznFn4ZdwNxs4qMyXQEQDmqm5SkEqf7fz8yH99XHgyJ5yHviDAFKim1xgjtNhEsKrfBKZLjk4Eh1srWmt8HEvg",
  "key9": "3zHp2ZrYV83LKSAeP5BBepMyjyy9BmGQ6AyANpGHRUC61DeDuHMXHMDfpkPpQ6LLmsTp6J5WwKFKc7TEMD1Wp24f",
  "key10": "dfByAWR9oMWZeo6S234GehNvRPM7QBb1ohTUgZPhRqsFznm19T3DocEQqjhKsTdgLtSq5d9VayyyLCidK4Deh3H",
  "key11": "4J5fb1QdvFKTkbAW21poDCh49eKHdyRBPQFgCGJ47MKR2eSf2ZFwaULx4AHmHeoennoTQrZ1fsSYEqdfbBd5RsXe",
  "key12": "5ytLvaqBA9TmLdXXyKGYSXCxWKrjRsxdgV6JhNsA1zj7wJ95sXyn8t73GDGziFEVYXCKmcMsHoSTMky42pWAG3gW",
  "key13": "PWymRe2scKh2vceKhdc8tWr2kroGNmCPceXrbkjLNQ5wwnZjrPkybUxz5G9XSSeB3TrToZ6hEDvipx4TCqpGRY8",
  "key14": "5pLVXmhsLmHSEqZJHfSXhAN921NensJzHs9ABGd3Q6rSWZKb6rYUPMoWu16Kt5Lv5tpbMe9F9vb1bFkmXf4Qu7JH",
  "key15": "5hA6vQ652Y4ymCTSNuY3nDdA7TDoiKMtKxp41k7C18HFRa8pSXfnxfKYdKManQN7h4vuVMMCaU5YRaP6zSxHurua",
  "key16": "43pBSNWjyEZ52aSjmA4FU6sikSk49VMcos9KwL69wAmB2h1GMgxnp9mq79Veg2iJ5ZUQ4Pd5Gen1hsdbZBVo6Uif",
  "key17": "5Ho3wUpZxn7VuoDo9wCNdY6ojsaCFzvZsj6QXGew14FDPeKv7kW494faQ5BgssuLSFLvNTK8gYKyGnDttBSe1L2B",
  "key18": "4biL8RyuPE85ifrxDVydX3dqpddgS5xpN6X2q9ajziZvKuRiXDbYccSqA5ptRjxNWxKkzG9r3V89QLjGcvVQdgMY",
  "key19": "2GzLRrdUMVT5w8H5kgSkcLKcnHvaWCwcK4fQ6ToKr1dKzapb79N6fH91bfch8qgvYzR1fSCDeaJCyoteE94qqUSG",
  "key20": "3XycXC8kWLgqLsJcYeCBNTcq2q6QBnuhXZqepfDW72kN9J66kx6vXUU2nCKnAjecmMkDKv543tvKqWTJk9nLJc29",
  "key21": "4vtrgApTjku61js7FKxTygtxhGu4A597zrLasV4bXdAS414Z5Wpm28s1bmrpKrXd2xGJdQVLaDrvX2yrVvFX1nQr",
  "key22": "4jkmk2CnX3ntFhUmPWyDgqSoLzYpnBBuSYj7z3gegSTChfFTipBKCJXeqEHHvRXyR7S8mwarGrR5oo579MeUDiHH",
  "key23": "3XDm3xJ5TuowXX7pqgA5uMJZ2PxaCPycSK2iiN11LqpePt9LyQjytfJ65dRuXEp2PGdi7YdJ7YXgWtG5kECU2tHf",
  "key24": "XUb3nQT5c3gLGpmo1VEkYQqtmZHwxQzGHJGGRxX7qhZjT96QRdWwJ6SYg4EiYeevqsfa7PvWnktfYWvwLbDrWgP",
  "key25": "45vyozf5eYBBKfY6ZzTaA8585GKBL4YadzBXPZ6hMJrHMdH1QYUBFXQmKaLwbDQHLwc8ZGCQm2n9XSnYPs4XZ98i",
  "key26": "235vVdcaEJmAJ4i4RWbcQCpqDS7yqB1aQABMb3nmp6QRYQAkH1QTCiiNPzrVbHFWKAERkND49SHfVK4sYmnNR4k6",
  "key27": "3MepRUJEUL2cnCNLrcbHrUc91Fua7yXkTVRR81vqwCBL6xMD41L1B2sszSDF4A8BZf5EuTPd6vGVeTs9wdsmbq9",
  "key28": "5xSepd4oNnRNGWPPw7AyGJ9bZNgXWYRPv6t5Eh6gmp9QkrdVc7bvFAC1QKd9zqPwu2gD74N5dhWECFQCZnj5oMRD",
  "key29": "3FAHFaRwETgL98s8N7jDBCa3K8aQYkTn8NToHMM1Y9txJ7uZmNNWThZeGXSTSQdc88WcArnEQy3Lbh3m2Vhj5FFK",
  "key30": "49rW6LZeWL6SzqsfBtkc2JxxsJbpTswt4shKX5d7JeVMznKy8M6pwE39TgtLYLdBFAKB41Jgck8MFvnMh83FzQrV",
  "key31": "RNXLfvcoLurFLEQodBZUxzAkvJq5Evn1yCr2ZUvqT4TCLHX1MEpKv8GdRENN6attspf2G7awEFjVBHPaTkgrcBT",
  "key32": "2E6w9KCXLnJTjAxdzhARZiAFBuRjnSZEHuJvjx1tQqfuVHVw7yU7zxFgdhudMiVGeN4vjdCeFywUeWYNgEnEr5b8",
  "key33": "2xxKJr9V5unetq3kufpifhnvuxQn21U42zQGvrXv9SzEFaUtGGw8rFHqDh3Jt2nat8bCRNUNUaHXoHz6N7pJVK64",
  "key34": "4dn2tGqMsz1JLsnkgfWrSaR1QHrLemEWMWSDdVB5sSL17YMRAnqTuSutdyy4qhCstyJEbE2H3C4FSYtJiNfVwFPM",
  "key35": "3JQxemtZAza4uhRn5Ha1hpTpfHFbxpHK1Aa1pNV9SMiBhcgx9oTVJayeWDv5vicqRtxrMozQA1ppgfuEUJjDbhL3",
  "key36": "mui9DYB88yW2xhDzPh1GP5prSwJm8r6dGtzoCkMLS4C4MyawVNqf4vCSS6Wa55e14wFVTi6DwMSzyx2PXMyp81w",
  "key37": "5KF9f9R8VQQUujy2NJtWnDaCjzpguAmn7PFK4RTwMjAJWyzvnWpaoun4kS4odu1pUfjdthNBCgPiCQWzdb71dX88",
  "key38": "3ZB1xLeigCcBunqR4jr1QrQrZMHHbzD8KLNbTHkPKVBJUiCSMVkjVGhzDD38H21pp2hiP6jLqzW9fawjfXov5mHo",
  "key39": "5Ldf5Nvit2zXt4JkcimxLQEcEzH7nZ9Zt8ZQjWNKEC3j9fNJSz29juoaehEsBVcmRxR3mCBrRXDFtsN6K6kHGPwp",
  "key40": "64USLpvL724YRrtfhmrCfeB4AvAkPT81B1LJtStstq24G9ShmRvNj6FTPrAJ6PC4ZvKJkzaGC9AdFhB2xAjAwhJN",
  "key41": "2499TvFpFZ51fE5Kxr4tvU8DvdqXshsPyCATBFJqrqBmHc43xphiEzzA1ztEDq1mJFdLZS1uJMBXiSWDxdLmPbt6",
  "key42": "5JqRZYQiK6CsDcuNphQC3jRdfRBGFdfRLm7WwD7QqZQveqbnaBCZWiBXjHVMBkzSVakwFeiunvzMymVfpHrrrPRm",
  "key43": "3CUBq5jc2VcJkXVfHxaYqHj9YTRj5n2gyfxmBE8zE5H8ZPCh6B4chKKi6wkBZbiZ64gQo4FjNUTFFfR92dBAv9VC",
  "key44": "5bBZqCqUKdqbGj9vu5kp1mR1uBaBukkwzqJT9RmcB839LkiU8fRTF68gX6jdCgcQoGuUADKRNAd13RNQAKuHQK8R",
  "key45": "kCfV7mEUc9FHLo9uASspyPtkaU9HMLN2ebKFN7umiNvXa3QtKNTbUMRAijYySR6FnwZYRwQ2VBRsfAGmnF1XknG",
  "key46": "2GaicDtqMzMqwtFM4cGU52PUHRZ11i7UhRL7n5oeXqgSRjU1hwBua1AVbUgeTBSR9ocktxqku3bgpvNFBJ21vUhR",
  "key47": "4fm6VoPaTvbeNkNdBeCaUpSYyX5QVrRG1CuWtY7nSyu8whbitZajwRCZ93LV7LfcMBU3DwxwMCytuXpQH9YZrQfT",
  "key48": "4QM8JJDk24rdw7Mx4yQBPnMVy5TUtpwPvtRjLKrNkv8exyC6wVV7VVmPq2nBHJCzT7e1HefTVx3RPmWsiaCqhSKu",
  "key49": "4r8k3QqQd3wNRgwexK4Cs19ENxCHkSyHxeXzv2jr2znv3UYy7zqDPxFz5rKG1i6ez72vFj1A4EJGYfpzR5YdUmtB"
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
