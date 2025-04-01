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
    "4ARGSMYafkYWe7cqaY4Y8RoC8ZrMM4Xs8oJS9X1dVsNwxjBfAeZ5TyYAxwzuJzRAEBz7TuDywq4PheszaR4dkG1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33PVbaq6t7gY52fX2D87MCaS4CdrYmroEGM32rBLzPuxjFNCnmQNtv59Mma16LZLZxBANCF1Y82Gy5nom4y1o6aS",
  "key1": "58SonMA7ej1nHh5V9ogaRq1GWBV5x1uFxpfHeXSAZjJ9r3wbpXrofwA1o3Td8c9agqZcnTwfFRUCMcpPhfWQxdZb",
  "key2": "45Kjnce57Qn7Wojbtb9M7S3oWwe52N4JZaDrz5wWfH5g5B1p8guG479apYCFRx37QNdgqwrWHJqeokeSafwjbJqg",
  "key3": "24YM4KPzpeVsPDiZertgCkStrqJv9EjNVRGw4FfvKBg18YkgD5gwkTpuE1Lpes8BDgLXncfpLkYcQ9ZeUEzr5Nh9",
  "key4": "5kHWkmDSWiNyEx2gyUK7sUQhVoU9UGGtGXcMLZtBD2tRe8uYsGsPMYcuug5GGNjCAZ3rtBBXdi4RjgnzHYeFUn5L",
  "key5": "BtC2X6WLGQGdfme1tfnYp4nU4tsqnFKQospjr3PkUtQMkT7UqEADtRgEQhmdH8yG623N5zrZWV6SsrGB8aceor4",
  "key6": "2bPvwutMwKdb48xH41VapHTHdFEWCNkLdjDVe9iyMyaMNan4y7NJbrpHXMkMyUzDhZ5Hk82zCtergFUGraA7nWBv",
  "key7": "4sbPP4UeRTJp4gTbyK7GfxB8hThe9EVnTY7pi2A6Zup6hNho6VqYQjfhhVyFc8SHEsAtuDS6XATfsYgqsjh6eEs1",
  "key8": "qEVYxHVRQYTZZRRnZDhd8nrGx8vCzLB8LYDxJ1tLPNCW4hhRwAZQu4XUSb7yGSNGJ6Qg3p6mBqEBhXEnCqcBoen",
  "key9": "TxPWLjfgwDdBpfAwstQqSyACrhyDpTFfiQzSMXuUgpNQsaFuhJpRbHUBsZYAx5TevSxz23QQJ7ZHc3ZaXyS9qfi",
  "key10": "4rv66WbLzAf6hhUZk1pbFPxy6Pgo5kiojbem3uWzqXiSX8TqLVyoAXkj8g1cN56t4GocrAvwN9MhWgdF1bvpwmCZ",
  "key11": "2THs2SCEznFk9nADMUYFGRNHkCYGpXy2jREyHRzg6wFrkbJ5Nnr19DeuLQRf1J3b8P2k7MpQNBfRuvNw5MtASmME",
  "key12": "2yiGxBGci9jnbUD6WtfQzTwLw24YDpooNdyxzByPjYYjwL9fyzFhA28PSkv97xZ1wfJTd35VFt3AVC3YQzFxrju8",
  "key13": "5g7p1ubBD3D51QnXX9rTV1Ey5D9tDcGN1LXsu7Hz1s3v1aeMgjLXf4WbpDZo4fLL1xovb8i9oaZDvxobMNdQLMoY",
  "key14": "4KEufbNFduCsBEFeRt2fu1fMnsz5wqoJTjsT3cbNg5RJakCtv1HDmcRQ69tYGbnZw8UvzeNGiBxMBZhWVGtE4wUd",
  "key15": "2SpVoPWXAceR7LLHMucEWYAEQ2vnCCewbuQGY1v2wgzqFCq3UuThtCkDza5Nf98opDoEYJsxo6v3tYswdRHDsV6T",
  "key16": "5ANcAEPPtbX1CuyBW4eesrMb2dEx7TBwCjpMiGrjxmGET7CEpkFzBtWBkRnWfda9LmYZKRszYk48oi5EQj8RmyEU",
  "key17": "qVC1gDp2XaxuukPbSK52hjXQDb6n3jg77hwDCx3zy9xqnbTteLZJML1NPBPvNbBJKBVKUHb7btL4QFMLQDBr61p",
  "key18": "2WSeA7GoTCvsGvJGtm7c17wSjEUfEiRPwn7RNoAx7ga8BMRDJLaPELdQSKXue1KqgKvUSgHXKkvBM5XEWoZcQpzv",
  "key19": "S6Lzdm2gD4T5t23G37mCiJgjYthjErZ9qb2A8p7MTP2M3a7hRKAb9YCCejW5eNnihBiZf86neK41NEwsRbb8v7u",
  "key20": "4t6DgzVXjJmPYRSNfcfr54SVtSRJVmxuMwZBRv4mS8MVnPowce33EfHARTqyVU53phxX2XxVvM7pxvpTVRd4KipM",
  "key21": "476CFVcjtdgvRT3m3LC8AqFjn1TR6NTbjUurf7shbKAmw7SxyBELvzreSnA3tjunwzj6efFLX4REWf4UuHHBLUif",
  "key22": "4MfpqRNtc1zikTY8uq35PmLXResdrnoBhn2P5ZV8fEsurc3ZJ9x2TireDd3gDegxqDormun836VorPV3rkyR2EpL",
  "key23": "2sZ4oL5iUP5QzGt5LdnifQgUcWGDntaaXyUfpWExmQY61L7ViVLjurGzci3duZCXWdHGSpLXVcck5GyndhDwvWcP",
  "key24": "22qpJeVkb2vRr4yQEKXXahacY2WDSKCjtDMLKZL8EKV7t8Joomqj65JFft3aanaWdunYppfUuHEPCJTzbG3mv3Gw",
  "key25": "422pXsbrBm8ybBvcgWPTTAkUY3PvyCkqvcsFuZ5KW3JBcPktSTLaLSYwrwT353tR5rrSDcwH2aD66CGLE1F1id6j",
  "key26": "2t5jm3uSwwXgbXpcHRZkLBb7e9GfTbV6yZEhcdQZEDtYVUQdoKHPTojtj3i1hcbuJj452nKSJ2iS7gdwQFTcmzq4",
  "key27": "3SvdMnxzdBdxJEs8zECvYPtiZgcUxEPsNgUze1REEEdbR4c2Wxt6jKk4dCoNqKgMVZTBKFHkkCvQUtfrRZrLneTR",
  "key28": "3SQ7wREaQEDp37Lb2fyTwsj3j3Zjh5JDJrBX5WetuzP1dFbXyKSLKd6Fe3RmGPsbkRWr5UifhM3Q9Y6kNT6u4dxH",
  "key29": "2ksD7sEHENTHJdry4dcd44brUcxvZzEW1M89SJToyp9nTGp2Z96S3hUAPCPFP5d7dffGXWeeJb29XXp9tehjoD7C",
  "key30": "3vUXTGUktQ4dAjkcMAteRZHx9rCZCyavT9RASTCWqnAidGzQxYZJ1yEpQnxaY6uBNyudkQybFrRQVM5rkKhgtGDN",
  "key31": "52X9eSyaTRM2q6pRQ9P7dvNUsDDNs84tXoZqnSjBPpC9k6zMai1vxgp1mWP4EbaTYarFzKdR4uQnASSY63wzTUNf",
  "key32": "2Dw3aq6HcV7sciFPnke8iSYxA7hCLTno4KMcPmVVsoDtSxaxGEm2ZpiAFpNr16RKkPertC79A9hUFN1Xu1CGWvpo",
  "key33": "4A7XwrzyWQZh1QGF82vuZN87srJqzcLzSeBgEgXuRKfjgxUmhEp7s6ezqihtekz9SDjeJnEYBw7VnkVm8cLHyqwK",
  "key34": "gS4wbBha7CcH92sa26om186nSxvKV5HUG9Htmwbh62wz6ddv5WzVBmLpzQyWtRYDHf7fUML3Fy6rXLwNAdHzsTG",
  "key35": "4e3qentZb61wctToGDe8NR8b2Ck1GVioyzs7zVP9n6a8cyN4192M8aamEvqt88svoqW4hxc75j6fVxne9ugaSefj",
  "key36": "3wXCnMer89RGonJws1KArEZkqmnwpSd8ZAiPdYTgQt6BbFi4Ego76mqf1VpU3teCFN4cDx6ZotyXLQCDuz8J7in2",
  "key37": "5aQiVtqcxa9UctixH8FehAoZrfxduh45C57Fv67LQ6kNc1it9rjYLLtTiTPy9GjknUEznwGwADbdtuem953neaMs",
  "key38": "2iHAECeyeCzpwL1S4FrLsfZ5RJUiDEB4JtBnFg85yU4DFYFYpsYxCA7gBZCAGHH89ETk5ZozN6jVTECWvjxZC2TA",
  "key39": "284FVZesN8stdbSHU8JvvPajYpaHGptw7sNXvsRh4ePbVT8UcxAULRpbUnqcKhxkSXkGs94KvsoERxCKUmGLthrn",
  "key40": "3fbKvh5QG4GG9ELqj8e6q5Ucoa2FkQhsZhNUmfr9xP45dDCwEkRA7Q9xgQ6fGUZ3QzGMWyHFVCinQpFmyUBY33eU",
  "key41": "3AF4YGUN2g18op7RXuVjKv3mkoaLaW1Enb78NorxG7c4BcU6XyRVmTGLiTSfmJz4V9mkJM2QcfzBeeDkVFyxAjC9",
  "key42": "5jaZkdDJDwPivS3MrJCNv9VuFSAvHSGtcYX2kUxhn5ZHJz2PKxwJbJQZAm5M9LDDn23MP8Vd7BFkPRWtretQoDks",
  "key43": "2zpMUK91TS4hqMf6NyEfAJg3nRqj6JKX377Q62cxHz2rnGF2sDY79tFYqQYwEgwwNsjJ8maPRHZ5FSjxD6PyfyiQ",
  "key44": "5hxjroA6tVWitK9LpVm8PXMPRYaxV6wfYbqTYSV197mZadAmi11a8mVWGFmioojiG3wEpTk3qFtZoNDWhoywvzED",
  "key45": "2bEg7kXA9eiohqUtqdF925iCkC1iqDq1M515oXEYnUeSazuykvAxbcMS2qjbWqzvw2FeQzHEz3Ssd3p79Dyhkxiq",
  "key46": "39Dv3Rp61p8qMxkWgqkgLireQbCktaW2SFYxwuJiUEGoVNHGtW7RBZHSnbKmfmwtVRJKL2NaqzWwYXv9YZzbUbEQ"
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
