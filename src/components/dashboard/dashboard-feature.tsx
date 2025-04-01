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
    "21QJ5etZSp1ziSsEWXtsaZ1dXd4ooU3aqiVrGJzEwGmkquWtYcbVvT2ktu4Vwr8q95osr6CAmMYdU5fFfT9BGm7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GzFUrAZDdWuBuucVnME7KU3Xyf3gXYYoyYoRP1sJn96gKemGf4ZXY8YonmMkHsrniY68wFf6ZrFNUyhP6ZaRk7T",
  "key1": "53MJUhSpbgNJKxayrXefQrEimwrUHdB28BzjWiQjKV179AjjGggfSG3YqCQ5CJtrQpoZbCCPfUauD2FWhb9G5tVo",
  "key2": "2r53pSNabfskKMrnjkdGR87j9HPapXKQGCbKV4gHrUc5NE75XsH2iUA255VzajoyExbSYACEfXgwu9JyFVgS2abY",
  "key3": "SUnYpF1z4TrepCYDHTi7Jzh9NtBc9QTGhRxQzX6hdgycSMuZ7x2fQnFYxLvvKMfiAEGy77SxhLwA5e3mPfP2zBX",
  "key4": "3ihxsR1RLHKbeCL9Lndr4QuDwZYstcqNFUhcdHHLGPXSWcpyqU4A4QTQSy5tQC14zpAzZEnBdk8fBA5q4PZHVset",
  "key5": "RpChoMKNwHkXhLeitwdt2vpnq1P7HuKdBaiZW7UCeYpcokHAGATvJSZwzNmUEXNeg5x2RUeE2quxjwQTF4ErEKm",
  "key6": "3dSBK2EKcDMJdTw6qcqjt4XSAJwshKYyPTu4dYzXNy6fNDXpQYAz6nLxNPkixY1SHyJZ7ytyKQ28iQJ8266a3E6o",
  "key7": "4SpTN8vJF5hN7CDHyBkjjuqurL3Xtz9h7snoifd6ioAFj2z34PhmNAbU8PK45Kwnmwa2jjZb8FVaqppejtnR3rJC",
  "key8": "28BtpvGgPwmGfy9hx8dEEBa3DRW5sPke3cfxk8oct91pRhi1rxsgrM81Njht3NFBapK1nvDuCedjbvE9MXNS6nre",
  "key9": "tCckwxKsBxUEmfyYjZyB6Nd9LMubJ5sWpCbRQU1srk1B46GqNEoiV2x76Wk5johKgtjgmHwYFtMLRficcVWdrD6",
  "key10": "3mU1R6FfEtbzo6dN7uLSYUHZV7iz4Jnq7KmBGsmrkKHw7cM213rQcvytymWxN5zaUwbgnFxBFwLLUhEQYddnEv3V",
  "key11": "GfJWR2LPaDNWGkQSwFyG4EEyTJAGfdYLQg3fYtJZfw9D1U4NV8c5x4AtxV2HCcVcnj1xhKuQ2TzwWRVUkjnwZEv",
  "key12": "3wAHvGJ2Ut3nJrqPRQnvKtftxCggBbXkXz17zfZvRVFMFe7utz5EoTPSTYXsNfx6vLGiras3PLYgrHX7ajE8xNnF",
  "key13": "3g1v76wgytmo89Sxv6FAsjqE6XVoAxDSYhSVRpWAE3Z9R151XdEBJhUuPvyCkxe46ztXxidqUCTnSh8yKeLHPKra",
  "key14": "2iK5vYMqVizaaujssvKH9McXUw8jNY6aUUrH2qxndUMnqkD7pWzapa7EJbBc5cphB2f1FS26unnpPU1seHAznS5L",
  "key15": "2YK3NHBqdktuEfxfNErye6ELXWQ5QeKBBUXdbT86fDpzqfVPFqzouuhbJFnJLsdAmh6caaNEG1L4b7AuTEnGJHcc",
  "key16": "3LJQoEzDVjXfMag3rFnCvxCgdfHbVMsRHBiY5A3XD4LwHa396dMYcYTf2aLFxAZpgHrPrEJSEN96VqEv5HBu6vFU",
  "key17": "5oJu9Eh2aQiD7QTMUaa1SA7dqJPb4hVFUziv4dyf5f9zpn9YiM9jGgkFEC7uzcU73dMYAx8amNvkCv3U7Soc2S8w",
  "key18": "28eRBauyaJpNWW4EGVKq4EK68HeerbfMD4JFFKUA8UWn7T8c6Ukx9yYfueU9hoeDX1DdKCVgSJU7w8K9KfSWw3MX",
  "key19": "BkXxK7L5zmyMABQHXPRgQ4DF8pPEvwhJ1cAZg6tiDSrmDNoALfRg6sfBhxvxoUfhRBnqcpJqmCxW4DPQZgGoqyB",
  "key20": "25hRXgsvdRVHutsk3BMHaGfyCj56Ngtkb3mFceJG4a6nSXbw48xepgG9RKaCQfqxLUT6DLXvsjfQmwFRt2fT8gDm",
  "key21": "2DzBKNjdofqqQZ4rMCd5yGPqr9PK1uWjbRhr5i1kQ1Mr4datniui2TLQwxvcGTSypXu2fb1Hp1pjgXj3bzVKtkio",
  "key22": "24e1YHdBfbPZ5n46TSbbSyknBP66E44KMCm1QXeBqJpMEteJyZ7qdsPd174HqjBhunbS7utA98MLL9YxRBRM8QQa",
  "key23": "5K7YTFpFZLhUYcFoVrXzFeCMyRjpiTtHNbxvnd36rVdL83i4sACCQqLS3kBvYbdTxwJ6gWDZjuYM9g6URgcnHUW8",
  "key24": "2SPrgMmBAKyK5gKvMUn9GyxGv1mkkVo3nNzdoxnNSmYYfpR7MXWR5KHTxyusn2pqdqqR7SHmCPjxTLexfozzL1mJ",
  "key25": "5u2Jrbeee3oWgAGUkCyK2YB3ABW1ciUdqe3594LKNCAFS1vw62dzqsCHFJ8bEJCFwaJMTQFgPF9AdE5CyqFoZbey",
  "key26": "2wDr4fHRQWKAvDecYZedkERFW1xGauK5BB9rd9Ho2MJApWebRZHyZdqASNwsCF6DWPx9MnnggKZMxhhAGzGUkVqz",
  "key27": "2nw8itNNKjoVhNmYBwnXA1bkUaUdPSCtrx1mGj3w8jUbDb44RmkTPSDYiMbFphU27Aj8WACv3NJZYGbJ3CAKA6Df",
  "key28": "5TEg17J6zXmnpZFzAEoWc2jCWPEKL1Y5CPDr14zq2jfcPmU2fb55TMWpwSG3fXqiPpGLcqixykUoirBfwCeoK8Xi",
  "key29": "4LaRcEDkzLBzsMHMMYSCpAnz6Bdq16iV2t28vXkaEagmMaPMdc8tHHQuFjndmxN59MuLTQUA5443wod6s67w89s6",
  "key30": "4zhoTwmDe6HEWV97Jdup8rJYeXd55CC2GJUrHxoLYvGaN5M81wvXTiXbbB8H1gbaM21SDokpBihgHTHr5meNBFLx",
  "key31": "2kQXaf8mUZQS8WsEvCpNLXTTnfWUYhw78YJS9US8AMkM5Xy21FtbPM3916sqSm5k8zz13qWkBa2By2u9ZcRaHufs",
  "key32": "Gg1NShGSYFT8JkvdAFrPzUGM9SVHiQogpTkk8ZRoQcuD4h5ZuJoGRpZZgvdfiqp6r6Uv8nKoQHoxHLEL9U9An4g",
  "key33": "4J4c1Tw9qRwnfzCTqQXpPqaXqQ2q26juRYE3XVNPyj8FL95hRCjbT6KsqXZSDApC7wTxSMKUKM8WeTxMaU1Dipzs",
  "key34": "36B9qE6nBKhfDs7Nzps4E72gJnsNo3A4jjac4X4L2Fzb57ocZBF2sQKho6MbcRwk9fDjAg9z7horAH5ZkwrzQWeN",
  "key35": "GrKyfofM1d7LRKZzZd2hMAhLaYHezY8MCsGBFCaghXZvGYQkpn6veW2gMEiAjft6UnX9coeK2Pk242j1n4psH5i",
  "key36": "2WkDBqzsH5TU2VnAsePcdCcWtNSDNwAULQFuCc3NHtwGue68Cmp7UsbzcJbPQfrs4C7gmM1mgXYDFTV32UHfZ1aW",
  "key37": "3Unj4SviAg38BLoZRENeRNG9HoNR4ApCxEcyvRYjUfTguoECHgrX5eazJv5puYccjV1dAkxoykErnD65cSTn77t8",
  "key38": "3DRN6zYh2h8CBXCdQJcMutsGs6PzFKWfmevE2afTZdAjMo7idCfKGLtHU7gsry9vLiPUVeFpeqBeWMXCTVkPZLrc",
  "key39": "3vU386wMFRJbSVBGQgpXAATRE8ffbpVX9h3uNrPtiJxsjFayGsVpvfbfqWUHK7fg1fDuTxVEtnsGMujMHXrjAZMt",
  "key40": "Q9WUZBkxbUWMRxCPYZLKRiwGnegCBhS6B8ASuYFrbysSyTAYEnsxWngxfE6Cgmswz2BeLiRZtkWuGXpaYNMnjqj",
  "key41": "2sSdxZmXJuHKQgTboM7eiWRbZfHd2MEm7Ese5nRr5C9bWceaYuxM9QUMmoBeagg63ymRR5a2EdCxd88u5EQcFWJT",
  "key42": "43QhRQQ4Nqr9rQCbrBExq8okg3SLwTZmUwpWfyQD7qfFdmDKvCUkRTvSNV9fGDv8BuKhTPitP3uEtGDud2PPX49A",
  "key43": "3k4aUDzhTcZEq9AnwheyX2kbyyFbyGWVnLVmDyvjX8Aon5ah1RvUho7pwynBx4NtARUHout77LESGeGwroFGpL2R",
  "key44": "3ZZpWL7nfEFWytCKwNQDN3eTkQvnA6DX2zgoqPgjXqJzpxRirD9rJwFh26j54YWqzriVFJsAS56PLTguhRd9KC4s",
  "key45": "zGhVGhWZy93MFKKrDvT7mf3Sy7FfPqrJ4TXRN6o3wkvFWMjQ4GDFv7T8aRD6HHCW53X9QS9drD5XumciTUPZEAL"
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
