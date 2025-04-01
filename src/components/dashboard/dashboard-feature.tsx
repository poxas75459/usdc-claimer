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
    "2pMJbWqS4MvKB3TzE8QK2iVTfFJq4HovdKdwzeJkeopfswhXoeH6pncwLzpRGsk7SxwgBvYs3YtfmsESYsGmDFYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47njC73p44okogdzXUdhMsiTB5VnUDQDjirEdTpW375avc4gvLHRvUiChLzppE7GzmEmoPnXt7bXXH993QEYphhu",
  "key1": "2T3xhXPmgQnkuhfgXV5JpWUDrwFYjLkQccCZ4t2HRRu5oNbVH6aS1GADkufB98wBoPye2xWCy27UhvhkkGsmanoE",
  "key2": "5udqLG6bBw4nTHFvSr34WHamcoeavUXAoVqpqkT26t5GCgcspaByuPPygjAbEQRpAxijZVyCAjW4ruS6yoA1Pk8p",
  "key3": "2tCRgWDTa8D7LzCM3kz1H8964pUjPkNtrPAjqupKu1rTCdByNjscg633Z3V99NQCEiA3YV5tvt7pX1XACoydCVKz",
  "key4": "4mwxrzSkFFrJmakm5u4ksXEH4smiTuSnugwZYg1sd9obfQjGDgegS5WPDzxEZCMxoL2JoN9V5jfxTSVTAS5jfUfb",
  "key5": "3HbNiKicGm9v1db7ZBuaXKLrFDFVq4M6JD6Lp5M3kUiywZfSeWV7RuqgokjopoyqiBgqwdL4uG8xjYTLYuqGZ54F",
  "key6": "2Mb4L6s7DJvMgBpepZ68hcVnbHVJJnUyMgA728wmr1xfSrvLNqyRJhHhRoksGj8aauNHtTMgwVPwteyDXjUKWn5u",
  "key7": "4JcHtkQpPKGoryZwKPx5HgmqMRnt6aYjJBKCvXvoY19aQbFZZPZKdhgbpAa3S5WJV65vDnKeMSfvCUKrMpzhjkJk",
  "key8": "4QpRHk3NfRbTq76rTaBXGMZv1AjvTx6Vfutxnm4dNN4zskiHdMGQLaDXRhPbo9QBiP2p8iVem2xoA2EgEQWf14L2",
  "key9": "5KrS8iVhRRdtCc2GqRdxw8noqxDHLpPY62B2H5FkEUftAqKajR1w4WSjg9uhTXZMjmAPKaefFFcVpS5zWJr6J6pX",
  "key10": "2daVmT9oEFY3EUiuAn7aWSi6a3cxZ6LCJQ8nyGM5x2QPRfQGcjz5JfscJP8dSgbHaejtv545Py2mYfK9NLdKdXhg",
  "key11": "556VYHAS7hPejj4jh5tLnRroxhS6wMutJx9wiEdNMbDCoak9oaB5MyivALPkmDCNDLZavLVnwoMKVZrjQyqqD2RH",
  "key12": "5dkEooF56BxgUssLkuEYgnabk9vJ8Lj1ibHzHRNEBbdngctCiYm3sUtpxsJ6x1Lb2XAh1BAawYb3gHDU88mvrERo",
  "key13": "32UvY8ykMLhR4WK6Pfxx5fAHDXvsiiUogEuvJ6SJfTLH15XhDR6YQtMtApyea3JeRkLbyPX1Sr1PXnmKADdMCH22",
  "key14": "3m2G7f1GaCwo7gV2sMWgt5Y4GEK6kj8YFLWqD85tsY1DTdYDngGscCAyYskMawjz6Ke1hv2qvGK8FjKsTLzYjL2j",
  "key15": "EEEczcP3WkB6kiiGapZSHwqjQALMAECnwFsLZ2qeNu61yeVxka4EfUAVinmcpktdMRahFVbHcMc1ZJzLjF3cZCA",
  "key16": "pphdHAt7fAgXE3Kw8T8f3eLq5ZjENiXWCN66Fm4QyXyWKi1jtRb6qMDgP2qetQF1rZgjouRd8dzqRygJSy5G5ku",
  "key17": "39J8HrpZN2eQ1w9sf6NqjajHuHCCUgQ4d7Dx8hFsWh8LnYv9ntxgeuWzEv3bBy9T5Tzb9FmqfvrTk2pw2i9uKjvx",
  "key18": "5eJ13tkSu6QMUkWJpn4EjBenxRczFsrnKZ8dh4LcuEhhK6hofBHBiWdmmoWv9DVhgomtvkRMMV1hkpwx7pCWRFCj",
  "key19": "5QDJr7Nccy5MdZxwsq9VKE426c5z62Vs7gM9bQPEQqWgMGbMcGQqkCxMN84usEkMSEdWw8cD7593uc4s6Vfbog49",
  "key20": "3zdrGkLriwg6vuKsBSdhihyU2eHx1edgyeErMaMH8gALGkFiA3NtJfTuffybkKEVVxDo31aafbgRGXFvW3iNkaXP",
  "key21": "5a6Hg6LrW86hsoYw6o7jZgkPC123E2Jj9kfsWQTRKoeCkoYk4oiqPwjVSNaNsc4ULVBRGPSF4cC3Dq2ApPQZGnYT",
  "key22": "47AV6jTR8FBWK72KhNVxEedu5qUmrTPyKboQj2VVxBKMTDphEbkxV76L7eT5bMRfCY6HTvEqfAyFpRHhexvWCHxx",
  "key23": "94bBiCG5zY1cpgKbGD6BRLRNxXptkyCyend7ouBmJChYRurLUVviA5Pxfnaus965CmTMZzpzFfJSzU1gx7poeia",
  "key24": "2ins53JdSbtsrURnThqGqJGgjGjP3QzX4GukLAoSpZTeufWtYq4Y1UUSyGeCF9VuPLVn1hRmR1qRoMv7TuCeSro8",
  "key25": "5pdM2mHEjkjDXQfijvZzQVVebheX83VDaZENDYiQHKW6myCE7ySJq8mjDz8NWZdgMg8PNQXqmp3egQUkVmR4UGS",
  "key26": "2pQkhV45yqgsTk6Az1HUdokk2MtMbBPe9a18nxNqFTFygSJuDQxPc3ZpZgXYbdjQHTHu2y7bPbK8jDZFYb2RQb5s",
  "key27": "3JVk6TjRhdfdNpfp4L7uF8pZ91pf8nzgUALkWiJy1XQ9KQrx9zNu7R9GUMDgbPnM3PsA5VCKCGiV8pobWJMHceZ5",
  "key28": "5D9j1NUAgdf5RsKc4KeXjKxgxfiVe3u61MktA7crndsnVrmcPPnRD2gmpn3n6W9bHwD4V5oSSfqznU2x2bpBPE8c",
  "key29": "XTXA64WXvHcZByrvsuco4yztqf3raYrpqTMUCuaidVqZTcC51rsYjJXjffxfafiHG3LCz2649sc6DCoQpminBeG",
  "key30": "2iSsUTJFay5zpimBZLzQbF7rooymShQvBkYEGjfi5tSbmc5zw7K8uqmTGeq5A2xmG1S5i3nsf7h3fetN4gKTNtXt",
  "key31": "38wCcvohGLmGBr8c8U5ac1Vxzf9M53UhmpW1SwCJUC9CdP6cTwBMSnTLxk1nHSfrANzCKa4Jb3JYoXf42EeQDsn3",
  "key32": "BtVwmfYDAdeZfwj3tdCtZcdLqX1TThKZda6FshpHJt3Lx2yxWteWEPewc7SYKRvTvB55Dwhg6ZUGnnfu6YJpHZW",
  "key33": "2XQD8Ji4gxiR6RQwhj7oKnZ3g3jmJTeriV4mGFwo2iDHX7kQPbg84Xqjyu2njLNWzqsXczLfeTjau3RrJbhjFdPU",
  "key34": "eL69buwJwxxhn7jJ6ZTpXnisVMRgHGYYqWE5R5Ka9TP4UVCFxmcBPbfHN5FEimccBPyFEvEBhAhi4f4M3pBzndm",
  "key35": "5XYuJQwj6QmAcCRmLCKWCX43CyqqcBXNAShmh3HgiJ1twq7oAHW52tBpgc2VDc7H4KvMEVDqjKKmZ8zmy53fayx5",
  "key36": "29LNHhS3xi1hJWgkD6CexRMjhu17qfvQ9ikeJTFdhigNF9odiSccGWvgurNiREgD41zcy8uCGwQ9P3Quok44m1Js",
  "key37": "5CCkZMusbyHhth3yb5Y8YN8WtixBrLi9DtqCKNiRpXDFdBganPJCyMrncXhuZjAcpqq6smqbiacYfbDAtRp4mtM5",
  "key38": "5YRyZmYRZcPNvoGsT3xcGGhay2b8Mr8xLDSanUHxErCgUd1NT9b95vzkmSVMBfEYDYNNt6yeLucKngiZnUZiB57h",
  "key39": "37sKNeQF4ch5rdARDkPG4bo3j5B71fgdEsc17gxb8NezbEosCKPDh3r3Nq7nCsGdAUXjYaxVVhJeX3qcEDEpc3oK"
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
