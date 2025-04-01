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
    "4Ana5Gxsf8br7GEZwQbSpAiZrbkGT24tdjmghJoSWSRCXYwNBjAhXYZc2KqtXCVQifjovQRd5uSGhjZ2qQZ89inJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JvSGs1X2XLYnnNP7zQcrVkN6iBkwMisoNG2yAi2BQ8PLMdfxt2dnvEcpEZ8WTwy19KpUivGURekd6wuCcpM5mr7",
  "key1": "5b8b6AKfbv6kJDm7rcb6VW5iwNfXQHrqPKrgf6fF4iq8mLJvSd4KAP2jgZSJSuYKyNDxBtMJ7kRw7RZbFkvJAvCA",
  "key2": "672Qb3VWdfUPk2ARfTWBxDbJrtCscLTJjKpovcdi3TWRSsyx4ZVmaosmecVfB2tHmFf6NaEsaokbuf5qjEjFHsYy",
  "key3": "2kSDu8jjeZ136wffJpPtVgJy3s6WRBHoaPLh78F4R9RHbriFoo422QUsKyWDqVNCT2uAPd7hnG1swNjmW4C4SYaF",
  "key4": "5Eze83wvQkBx9kax41bCTr8cnrqFVRoKNswTciv7sYYPtqm3vuuVCho5SCMtyTRd16YBNePc6ihxRqLqBySUpuS3",
  "key5": "Es5cESiJ8h9rRNFy5e5nPbWEr43TgotFYGW36hqcazWr6H9ajBqc5GdGbabDB7Ya6n4U4iawcMExk7fbDG6cv8r",
  "key6": "26yyE7pCnAew7sJ1keQqeiLMYFeak6VScvtM1wLkWUHuxZksyvPm5k52WBa51MPDvDgouti73JZ7LoeJNZp1qZsJ",
  "key7": "42sLCmi8bAHfGxjoMbPKLNcpUhfE2TrXQKFtrhUhrzCz3WTnbFnBZMbEdB2ZjGccxpXMQghRueg5XnFsEMdboFzM",
  "key8": "vP3QtSmaLsWAGrLQ5Z6ozPeKfAfAjbAun7pFUoYbCyDv5mgYAJenoGteyitLJzrgtSxyYUgWe7Ykgkn99omyDBv",
  "key9": "3mYy6BWqqUcPjCkHW4Vft7TXsde3E4H5S4oo4uQVsX3mjDm4YTXX1KZed2JNFAd3pPtfPaSbYdrb3b5SvwJTUJWL",
  "key10": "36oP7SbZx9MnQbdUCfq1mQXMKU1RSbazeGmQqAzXViG6vVfovLQiphbqpYLMuXPz4bt1btcLFgqDS6H989f3h9Vx",
  "key11": "4GXbikR7iqTrTSzQ17h1u52TUyKdqmMcZUknoPdFCfp2PA2TXrELhJDm3Kzd5Q7svKuXaFVLW2yC9v7ExdJk4Xgv",
  "key12": "4ceByc5tckWwhLgUknbEH4QJTbjDEnXUEL4nwK5v3ioDuNR5SsWnJf54pbtcDymkSis5o7agK1GJQRR5Tq2wgZwS",
  "key13": "4SZjAxKLJmzZpxoG5N1qB4awFAcLSK3yhdNGhT1qCE2XttKiBgdUkmxmtRHrujQ1R8hjffuJxoyiwJeRUASVepdq",
  "key14": "3kBGDuuZgzM9jUD55WdvKndeNu9fwkpSWZKwaDwgVbC6vqRUHCyKuwccHxLYDt1hVUpPs9XrtNy4ZFSdCM89vZAE",
  "key15": "MdY8ysb7cCo8i4GQqDywx9FtAmayYAVY4sMuFvgAwBgMZ3LbQH7SoXV9WAKdb9HmZdGx3vmoTy6s2pxdtDSqYfK",
  "key16": "3tcHNBMQk7voZdyTiUQMR8gpFkdvimFNszjXaG4RiBAVkjQeTfBA4SjAWnFaaLQCXxvcs82F2nc4Agxuf1qA3af2",
  "key17": "2PzXhoGNb6WxRS4b4dxygw24PtrcgK1Xbe4ZFEbVdEzAgJH2T4RcH46v1Z2uHGgm7dJgRiMjtP5jTLZQJw6ybV3R",
  "key18": "4WiuAGae99YKNxpwp1AHEubq5AkVAEHnVaGfv33PdsMk3qSaJuRkDwTUDABzQQWCVumKHhnSKLZAbrzZ5EX6hy8q",
  "key19": "5wfNoePQPzbiJnx4EiubE28nMJ3mLPVDuQoUoJZVdsqVDNq9qPBNrmnyeiETDWhijmPtrLRaA3Fk3p6bGDrfRYbn",
  "key20": "2uyagFvCk2QTSHsXU3ZeXoC6iA3kJBaWxaqQZ4nmaYp3vYmpGu9AZrr2Nm3XQvkL3fXFufGkHXcJ4BXoqQzRE9kY",
  "key21": "3Lr5Zi9BgA5qsH6e4ezhbpDZFxAkzNnYq4T9yL7EVoXNEZko6ay2MSRFqSrzG6DJkfTBrHkp2nfbKWT6U7kSaD5r",
  "key22": "rCY2HPRE33M2P6zzYmdjkFoV1uQrz63EWFT2L9juyVxhJiaZ3145N3NX45fQpeVA5SEVyo7exm1owHNdbq1wBEU",
  "key23": "4Xc2t6RgpwBNbqPH8GNCb7Z7f4A3LR5wD6X5tuZqaVa6qbyZmcaBAzaVez6g2XkdBZFVxw4BsL7cCG4MufSsJ3Jh",
  "key24": "43pvtx9FjLav72dbhtoL5hkDcccWpKZamPs9MiSeDAGwH7GpNjtyQjK5xFQevKazg86LRFtZ9DJLhqaQhiy2gygZ",
  "key25": "21qDfjcu7a1NnXVLEtnebqBibjh382Pyit6hiKFhwFErW9zSkB1HtNBfKMbCEnTWhrJ6Afb8et2GCvB7Tqy4uWR5",
  "key26": "2dSPGfr1UsEzuYGssXkbhd9XB6eys6w4oUFxvGo39Z68d1kfbbM68HuSmsNEogbKT5fpR1BsKgLJvhJo512dsfCU",
  "key27": "5i2cmY82nVMeDpj6cn4b3UQxJ9QQukhdrchNmStHmCSWPfq3JUo42Jgmw3QUUU4LBGvTs27FMrfCLNJvPb9KLxms",
  "key28": "4NFJNcVcK7sNgA9PJDUGzkCh2bCA24K5baEXyVCretpGoxkVzsCvMiFwtM75XUXPG3X3kMAbsbFsbJBSZMSriRE5",
  "key29": "5PPofExvTNQqrS8XrBYHqmi3SLy55x1UA1yx6WvS6brjXZpnRfKbPC5hTDDfpemypjbEcL4fEMVsY4GELvALLTos",
  "key30": "4LSD5WzSkQhUWWTCxNiQxXDaFZsQQWGx321BETvaf9R6mq8xgichqCHJXSyDh2EvQgT1f5XSUAbd9ruzuZDpCYbf",
  "key31": "3RdB4g7j1eHgTsVd5krnj2faWrnYJVDbhfqFaTbcBNGJF6s6atZd5MbGtFJMwD6siR8FekZiTLEt1pqhdyd9dC2i",
  "key32": "8Hoenfi3B6R4JBHRyvGwqB5Bbuy9qRsN6111tm9frHmfBBZ8w57QwRrz9vStsNm5BV7GEMYeTvNFeBQnAGZkBLd",
  "key33": "5cJB5rSrCLngPoZdK9cmxK1LoG8eS8GLdLFdK5SQbTKtBD23x9ughAjFkLnznVvojyf2gjPVkpobrzYb93La5Unn",
  "key34": "3u6potxX7k7j5GinNSkpkAaZ3U7CTwAgHxHbkskPTFjPvNgh8hjctZvk44DFpB5CTNT6mrmQmTNdV69NwNzpfymJ",
  "key35": "3raVkDYMpJqhy9D9X4eDtyEYv2MWQvR98pJJLcEQEFoa1RGDvtHRxVtvAq6PKBaWGPqBzQjjYELdKwJioBKsyFv1",
  "key36": "LAHkzUryjFK5SmuSzGduYt5iZC2yAvHNPzSSorL72bS6R6FWjD1JYiPv2dP63yKF3H8Nzp9bFV6YcrGWZ1Qu6RX",
  "key37": "23J2iKzu3Dtngu6vPzHGLfDtGCnerGQurvySxZzQ8zcoLo9EX7DiQ3Rkj2YPpnCpBkvNHq8KwWikM1W6SYSPFgAa",
  "key38": "4rKhrPp58oW2YdZzQRrFGHhZmEfdwxYBDoFk7qDD4ttGK7TdC5CAfd4FzUbTZzWjsLH9E1WgGy5HBHCREaCTZHuR",
  "key39": "3dMT8o2Pn8SMiA3ah94oKyxMENM6JswiWhyCi7CwefM2XeRdVVTv8txpM5RKunq6pNh4GF4aksAibXSExBsvLSju",
  "key40": "5kBMRhCVaH8e883KpQVVjtATMXCv4Zi2yB7uCXoG4TN8CGYecWBVwPutANKt2UxADkU3usDzAY7em7rsnm4oZWPk",
  "key41": "5zmiUc3XjL8LZVK74iy79BBXzFfHHSPRq8WUBHxiyU85LNjKvV7AENjRPsQ9x5ErZXmpHtTL5L9PxRCX1uFAUY1J",
  "key42": "4wVaCGuT8d2P3nT4PCeX1nrbYp86Atyj3rjkj1RBgczojFyQL4APAfv9dUwcodYvWTiRVBtJqhSYEnp7YfRY8eQE",
  "key43": "31XkKZ43W39cHFw4JDb8HZJ9F2XtXaLmCNQKFX3CQzBVFSycj9iWLfWUYs395jT1MAx1kkzesbNhcQLRHe9dS7dZ",
  "key44": "2KjhksG2AmoqVCpKNvW2nGPky4ZVqzGwPTE826QaYBmXivGiMnq4k9og5V5mapDMJ26VZD8jBaWrj5QESJ8K89G6",
  "key45": "hP3DNjcXUXqc4Ahio6Hu5xj9jKNE6tkL5QBfwPUTdRr7jNAD5nw7DjD2boMf9FDcbyhxAUuVLEPbaRDEB3j5USd",
  "key46": "2SGNnA7n9HFxjmcmWPP78B1ZLqNYGmpw7nC9ysbSBhj9igmEmrd4E7CqCbK6KTe8wvbTCiQY4Y1zcZaTfv5CtHJR"
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
