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
    "aNA7nQC97bo8J8whMRwYhA7KwnyDwjHWggLBxwxM6QrD6S9K7JvTMLT95T8F4dRjKqPhLppYc6aGZNUWV8gyakC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3McEeMzy4hret4gK1KBU5B6RjpesHwLJELdXUzsjRNMMcAx2xPbHpMmUtGTd1HW79ZUCUu4mvwaTkphGkh55qSGS",
  "key1": "4VbWpApyChFi3zRfmydjURcAd845FMeCfnYdos4daynA3xU17g521oSmkyYfYDaKSahVxYNvJFL4yyco9CfSiLBN",
  "key2": "5sgqBGD41XM2DrCiJnvNaHnfCHXm8zKAj8CqbM9n4wuP2U3ZB4R616bfSrBnyc4wJa2za8tLC7ZEkdUQ9wJpNDAA",
  "key3": "4cZot8npkJQ3dftYf383zGZXtV29R5oshzDRKB2rv55paM6zB5u3Smq9rxt2wNHh3QPeErr7yyVbRavPXrQKjbzw",
  "key4": "3THEmR5p7M3AfEGSTEcf2tEKiisG9zabtitTY4BkVpowBtdWHzNXXX19a5a5SSG9pA4TUtQYachiTjNrhoQz4VfQ",
  "key5": "GHr7Fni9won5KLVHygNvD5FPr5rM7RVjgPp52jvVAkMV4bYC27Ej2iz6WJ3d3yM3TwdiVAR5tYrFSkg9NTUyKXy",
  "key6": "3GFJA5hzuPkUpj8krdbch9wAXheauaMkhhPr9irpJB7upFuMUQ5w1T835TCAvHVevrZvbLPmzmrMD5B6qVeYjZQx",
  "key7": "2XRw7VBhmcXmyxDKRgvh4uifXkx1bbLG4KEvxfP3PqnjYJPHatJKqEgTmHfqmyDjC4kF4s7SQvT3wY7SxgHWLu2d",
  "key8": "5zi2KJuXAf1rn7JHjbXEgpCqXPX2ejjBDDUuSi9mimFxxiARQDsJCoETgAMxrnzuMnKcn1gt47GPs3TPgA7pjiE6",
  "key9": "55HkXXghganbmnwTx9tT9TkjaeKGZ47yT1B7ew8hpYxPrYzpeUfnjxCpk1KRuPxSTvTCqQMvP47kSK5kyvAYGF2s",
  "key10": "4rLWRsU24YMmLD9JgFebRn6GbcN4XvMu9nkTY2APDy5wMBPS5Mt89zH55oKdp8QSzQKmcnRVk7EjeXESxE1SyNkc",
  "key11": "63nBGq24yhAPNf421vfHbmp6zW2Htruq1hwJgcYSKvWxV1UjhYbhk5i7xKSho61LYwRxLusXuTYrpbWTYQGQCVdq",
  "key12": "2mdLpcKy2WkW6q1sv97PWrVdEyS5EYofWdnPnWjXwqKRHkZPu8BNGLk89MMHRn4ma37j62FUJeHaiVnuCz6D5Hk4",
  "key13": "5F41edoSkHzofN1RBj78UX7cE37hUvGmSJXuGAs7oXmTWkYP8r1wMGcvU4TdAbrhQmH6aPwECMbk7Vmy3LWEd25n",
  "key14": "5m6RA8AbHUZmd8fCnA9Go4aVWg23zQ8pjpGdUFcNtctHhLFccgEyaeA4bYVKKDCoLyhy3oFuetY8vbHorwpECdZm",
  "key15": "2hMaz7CdqwVbYAJGJVVBQ5N4wcNYdHjsmnK2rLaUiqy9eEM7vmXA3cZAk3YWfBx14jfVRS96L4J1mEcYvFDzf2Tx",
  "key16": "2zXgCU3DsCESV2Gj2T6CRF3YMfvtem8addarb9pX7rLtHD1GmhwyWXnEX2SXYmELGznVDN8FHka8SDRCPAtFgSxg",
  "key17": "25QbTv3FQY52yPdkG1MXjTHih5aEBKcRqBVeJDsCpMn12ujP7SwNKgrBUmXpXuds3QrMhphjeNyRGqiCwC4Vhj82",
  "key18": "51EBdrxaLwPFNWan1XMA1XW1YijkG9ojS2G4PfN7a9RsmLx3JCxqsHn1UcWpCpF4vznh5QBmh6636C717sDc35r2",
  "key19": "3FZS6mhyUwKEYqREBpHsAtTtutjaWy4wyZa9j6CtkqyTTdqbxqfyJFcFQuMXiW9gURHdDwruukP8sPehkoyqxibL",
  "key20": "4YyYvbzox6KjM4FEUWwtTWvgG7CwcjedNxQmq3fMYChtqRtpvF8PRihBhQ85WMAJV72rLxWtyRR8eAXWcEaHFnfJ",
  "key21": "4kT9UeUCsjVBtKzJGX8iHGVQawJ4ce8n4cTEXybMZGuw41ju2LgnxR5co7fWhS1wAMNsZpcEt4ithTuQdrRqYsPV",
  "key22": "kgVRRAGgSErYz4aiftNS1kA9fnwGnUbvEgPKHPWAzyN51FdcjhLan2BWqocqdHZKhjS2dpe46VYdhMKQuXuoFyG",
  "key23": "4cNXJAxCcaWG2Py83A8qJxX2XXC68QVr63kjboeSH56fBCpdTBicdnrmZ4XVvGYRomBPcEN6qwRUTwsASMcvBhu2",
  "key24": "4fkdbCvSc3rzr6g58ajFmsozv1nXdg6cNMsmNEja47VXztVN6hSwJwUaTe5U2QtieST6jvR5Ed3mFDMBji99QqEq",
  "key25": "2E3Yee3KvLCMoG88Xe4NpxcwSP3VDvoS35n54LC6x9V7rwvYyJgXCdunxAiTNXPyTotGK8vcjKss4bQGMYcwYyzh",
  "key26": "3w6BJUjHzMdRMmvnfaVhhfDyYNJp3Kr1FN8gefgaNfHeyuLHr5158nABQGbyk6zsUWAvVpFiKMXFhGhAWuvdU2cb",
  "key27": "4zugvk73Fd8vhJE4B4mYfkBNbFb7gb7fP8xUwZ3hkiRmfUd79bqNWRDConBaPSXhYfhDwvqa3Do3JMPSZEpdrbq9",
  "key28": "5ZDej2qXhQimgCPh1k1bFw79drxUAFCsBcmicwqfCSiX8h94YGqkjkUHK2eWYJY8GybWAUDAPwZ8uVp5nCYb84NX",
  "key29": "3xVgBinJwrhnW8BJ9Xr4jc7yhdbu3QqSnzuaiUGgLMD1cBKnKwaQpqQYuD16Tf8sFwZ5jKFnBS8LWrgyVLj9nL9V",
  "key30": "4R6JwPqm1ziDUnazcwWd8wmpR9DSym9SEHQJxCrXjdgLgH12aLqbHiC4AMbTH3msKS6PjmwuZEsTJLeQwbnLEaen",
  "key31": "2vRHRZQ7ME4ivhY4VnNsbzJLigXxfbcYweL1qCa5uj3KJUig6qfcDLE3erTihM4TkbHUJd5H35ijTELLrJc9PZwe",
  "key32": "4PjTJdTbFfc7sD9jrzQyfc18CKAs81eu9HhFi9w7Gf1exWyczvBjrXjgdoAEABjVF1oT52Qmf6iCJbRd7CDm18PV",
  "key33": "2bmwQhWvKGPE1YGV6MfKdDuyExgtwRyyezhTpsTZpNRNd5GkFkWdV5VLy8EMeWaVeTHRqqBicjKErwbJLFxBZB7z",
  "key34": "2j57BVqRTg5v21P8UT1DNwn5ogBw3AYhfMrWzZhFdj3bibCfsLUMwg6xPFeaNDM5FAp6gHKiLsLzfrf3mtG5pmGe",
  "key35": "pMGgmsKNgmGUPygoyDfFYt4WvzGonmikAs6PwFaHtWmwsHkBrLYtWBg3CBAQngKok9i9UyfzvmsU9fU1fGs6trj",
  "key36": "48iob88WdUBDre79x7HuVff36aRT1BHVxCfLnenkSDt8shBGLPVui6gfpy6PNTi3o4TkapBz1pmeMkxrQ3qJjsh4"
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
