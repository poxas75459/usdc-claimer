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
    "5nSZk3huPEmdaLsu4oHEtvYDtQn6Fki9YAVZvi4yAPCyA5yrWwtzbbk1riXADfnDMMhhYDvbbyqr44DmCvyXyZri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V5SPuiMaYErPPGVvA4SWxQXZWkdyyysQqeg9Sw3ZKz3BnEVJrRbVCMLuHJpntN4Eii5aqKoh2dub5FPViNt4D8p",
  "key1": "5DtGswXuCpvBSqfL4UjuGE8DsstXUznPPYyNX5UUoYX8xhW3Jwb6HwQ8pxryjPghK5i6KsnFfzEweNuFKgdCWzTx",
  "key2": "547L3cM1Tj1QvJqFKtwZBukLNo4zGUsRdHvfzrG8PGshG9wJyPSTDoWMn8dwzM7jB3qRcpFoLZyvDpgqQwH6hPym",
  "key3": "4tSv8By78GsPdckmRAXvoXSAuu6dhxz4nTYWW3w3d18GTMsUGcKZD7ANfcx8to1yeESzXX6DtY4ER4aEqiSboGCh",
  "key4": "3oZUu1Dboug4ZgcKnrBEug4iu3vX6xcXFQsdgPeYuVugp9yWLgqpMmrJUtNjCrGbG4Nv384K1u4PtnpQ8hHTKxKn",
  "key5": "2oybeBnCDdEFzcqHL2tvh2brpwEtHB2EfX5voLw2YeacMixTzRGftr4caWWtjVj1FBSDh5jz5aTRJHYTegR97Exi",
  "key6": "3BEScqAQXr936f33nSG5oc3t9TLf7GKMXn7X4nS6u1NYdDA3KsbUcTtvfb6aCzc88vLxvE1vvVY7e7BGHGc8WqEw",
  "key7": "5m5rgJWfHeXirsErrqdyJPh3CQkQigkEq7i9R1u4aXKLygRupG8TxphYYvDttejC5RdyTu4deGZVqrcmWMFgaooT",
  "key8": "249MjMhv5dEGZiLeh7hoGv9cFdjH1bfZvUePHDw3hEfukabB7FvtMaPJktojNfccyddArxt5EfBhrCw1NEYSWess",
  "key9": "29WGffQyvWRzRRQHSQUZ7ZjwH31ViWLnhkLB82cyWy5AAZyLmWmTBE8HkdXyKqhVmAXUpRTpCsEQXT32uD2b3tkw",
  "key10": "3djPxbP1gNqQvrH5PqC7hBaHtmGi5zoUgV9d1RcbhGAVPQbFy6LhGvNY7q9RTSeMMB7rq1U2YzgKM2jArdh3Uw46",
  "key11": "5tRf6btVhHr1VxCtPqMiHQryFAeFxYf8cQgGSmWLzm9g7PacGmLEbbpPPEJbsudgjhEbmxy2BdRYXzLrRj8c6kzo",
  "key12": "3Mqd6yAcnZ4znKfo6RfBkY76XixfMcVF24zkLZRqadHxyiiE5sJZz3pqZcCqBL6DPPK1SyVfTha44Q9yt54hpAbZ",
  "key13": "MHLdKxuWnMUEXFt4kPY6ha2YAFdWmd5zFQN6gVQP6P15Mdg2Eq3PCTwUktCEVHa7YSAmBAaxAp3CA7i6RZMdNEC",
  "key14": "3yN4QvpAWzGu9tPQ9PrdWdSawcMpUghiTfdY1GUzAahoc2wnZrz9a5mYV9StrYmehBedFryWAog6zM3wHBLq6Z6W",
  "key15": "361tVc3X1xCUy957eUSVwPRsbJcGrcFzQ987RBCARJgwYQZbgnud2RdNSDiVD4sZrWRPcbActHKUV6p3hrJvaZNs",
  "key16": "3LSwGrQyGqLABbb1t23YZrkGo3KLnhQPsmWymwC2sfhXL1jgYsZvYzLYupxncsKLKiWyeM7iZg4VQBeLPWcbNMnf",
  "key17": "3qWG4QrVuuazLfR9zLtKJCLQBYanBDUQRYKxWVrjbUGzMARh7EnVZDJQkXfo2P4nfR8KVoTPJBVMpuVsVDjPdNqu",
  "key18": "5mZWomuei71PaGpFViNzuGJtzw4vAQBK9FmRKB4kNAfTGhRsURWPd6w6QvDbjebMzfiTL17NtmFidbMDitg3HUaz",
  "key19": "3qvPaSs5uWZn8phyV2Jwz9YzpnhxQk6RDkA3bWoP9AEgBbZS3TWnAhRCC6NEkdNLubWXgg5op8nYbdaEaGzuMe91",
  "key20": "rcA7AZYWxRPtawHRYBBFv9wNzgy7FrA7X6UYvFSUxYMkYsUziWUuUWM92S2631rrJ1P93Rrbr7Lwy4VckjEVo9Z",
  "key21": "zesbPuiRjFWNMRRJU3MZxeC3BYtPDNRYYkH9rkyo5yV4bo9vjDNgfnGEarcXwBXQRvKZ9ARxUfxfBobC26qR7Hv",
  "key22": "5LpQywcUiC3S7sYDL18gahwpuWpqPkz4DvcmwgM84aNKh4QuWhh7FuFd4jpPVaUrPjZ5nruZL5C4QkqH2PzyF7oW",
  "key23": "funkHUAXToNCA3NyTTJq2bvZh6JizJDj4Y6cM6GTEa66TbFkpXgmN8YBRQ5vdBPJz1gB8PBLVyrgvucxHec4Ron",
  "key24": "iNToNUUtcqU3EjtMh3z1kptkBBSi4aYz9wfd4eyDR7QUSkryks5dD8ohon7WoNV5LToQxLJVYG8i8XmToq57kAx",
  "key25": "3vSfk9X2EjZFTtTikodkVbxZcfdvCvDuPrFYDepDSwPSS9wijbhB1e7jQvtc5DhfXBbTtoxeXf6Da7pb1GJCd2VP",
  "key26": "5jj2f3NzGSzV37KEkXCrEVkSfvDCucjd6TBhTB3k6WTSbVZG2qfnD38pgADj9ZCptZx4v6SLA1kUnnuUZkbkudfK",
  "key27": "2aSenG8VJe2kW9rubb4rBxcr5UaGyJsEGVGysrZ2ZM4JzdV2bkmx7YgVyFQgTj72oooNawic8bCYirSavJbQLveP",
  "key28": "4r9r9Yn2HjY4ZzhP9EiSd2hiA4qVdbi7j8CkKerbB2uNwbnLWoFy4vozn5vdnARxg1YzrBAKCCvNkbNnwak8uduE",
  "key29": "5SfdYmbiozTTPQnrLqfsCzHNQ6n7iFL7PNe8PkTKQsjRVXzaZXexgXQmA6gpgKebzjZrYzvYpvT2iusCeEomC6hJ",
  "key30": "48E8R44u927RAx5fq2KSoStH3X4qW6qtRq6VGW2dHtbVrgSGyuXgN5jy9NZUUp6Eq1TpGEu2HJSDMjmeWZw1DWXT",
  "key31": "5rQ58PkeNwS2MjWSApKkdHiPwVRkq4qTq7QQxpcXVaW8KefLhyjmTgtTnczKttFp7MKCXxmE7Ek1aRmtMnVotBfo",
  "key32": "5tkYMmtTkybm65qxnV49RxXRJAVU6Cw2rmKdzYbyMRAmPFaWeuQjZ6WxQ9h54id7UwsDMmS8S482erLwQfoLm1Gg",
  "key33": "3FPM7i1KBp16ddtVMpjNEpb94kyGAVzFALwjYvuW75tNUePQxWkwSiVNSPpHSvVSg1EsqHuHK77nsd9E3qShhAB",
  "key34": "23xe2xHaWPEx3SCaUWnsfeVJhCpMv9p2LoBA4kHivW7xE3hWznq5Xa31uV5TU5cC2vayNnkq7QtdeJAzew2nTass",
  "key35": "2qx1bDTgk7w4gCuazLdrbc7ga7CNp1ZwNehYeHFupzrpUcnDFkXD4rpUcH3fja1JpbaLLrqtGcHiYDCQ2Pmc1S7A",
  "key36": "3XtgyPnCLijnTdpkukPhkpua1fqrGTbnAuK5K65B1c7CEH6zQqU5bgetA4QLX5jR8B7J1mJkwASBCUkGm3P5bobu",
  "key37": "2uga91gdAhZJiCquQG4hAnkMDEYmCrwcX8o3rpxLFKLaE2xuP5jjLx8Giu9s9WKi2w2vjWjtNVmwHd7q13b2Tw9W",
  "key38": "424MxPRnpAMMqpcajSTD5ftGPkW9Wo38N2iNWUznh5uiAZfs87NJUhFxfvx9bP4FBYXSNKSrXJV8UtvwDqmKVk6W",
  "key39": "5z7XGh3G79CjZkmoDyfvaSNyn3JWetS6Un5TTvjkVYXGxuYeFsVpP2cTLhzSSLJAUF2qTDkoZfZrbHDmfgdUw15s",
  "key40": "KVARAtVQodxN7Q1D6znCmVPTkABppWRSaDtCUq9YTGBoVxNz7JMF3Z2LBkf4kMBZWrxAYPQ3HTX5p32NSV7FWGY",
  "key41": "jDLyqfNu3Xk2ZaSSJe6RTqCMk1KANS8nnsm4LLPVuVZQv3jZTfDQ11jvS1d9YP3xsBbopPq7HzqwjYyQqJNtBer",
  "key42": "nPNf97XoKVQcsmLWG9XUp7Dpp8aMsP4WxUa1k7Nbcp3NoC18XvMvCqFD9An7PqH2eTy1h7YE7iKSw8SRGLoKwoK",
  "key43": "3hCYR3WKLbJCyjQEyqdLw6e7NPN4p9M6PhWboQrua3u8HiCbcQUjB3vse6JQa63n55DcYZ3zBysdtZjeYi86HDxH",
  "key44": "3YJ2uLZDRV2YPVe53uXwJL6JP3ttXRKcdpXg6HkL6JzdnpvnDZt9LeXodQpCMq6jPP1RQBqmvKurEp6W5ZKuPFJn",
  "key45": "4anJwAxKsPrUq4Egm5eSVEvzgquSUdc7Fa2tT25m3LGZFB3CXBsHxsyiEzS6ghioKvHEHJkYkxEDdkdfY7QP95nv",
  "key46": "3R1mwjZxLqsVVC6Tu6drB4NnfaGUSYHcfwKkB9MbtKPam1qtMAgAEHDU45yWXfusRSfGHLyQoNaV5UrDud2YVNhd",
  "key47": "3myEPWmx37uaU9hbJV4tYh98dvhKVJrLALshnyT3TXRtuveYFem2fxNX8JGWuJMLT8XVFvbR6M8Kv3bo1ErBPaeA",
  "key48": "Bee9navE27DEEntUKetBXqLVCkvYqWJkMnP3fgbm9bnFqveffr5Rfitwy4m7JK5pkNPduNTzc5epZN4Tj4gxB4v",
  "key49": "2ZbofHnAA2QjpHHyBkeJBkNbHDaSA8bjCG3iTPUuDKdWEJxpzS7NfAXzksTTi2fnaMvozyd7GVepooS4k1pEeCdw"
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
