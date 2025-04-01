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
    "d2pVbHZvViKnJirHL7KcbqoDVuKKGC3xF14W1sEQEnkkbeKAD727kU77aXg3nhsKHhF3xFNPpjc3k7gbPo7myHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EY7TK7GWiBtfDPdsRRDn15r4pRNX95yqDe2SBBvq5mS88bxAsMcAMk89zxx5N4kbNsCkpcWof3iSeTED5545U32",
  "key1": "mchPTP9BuEVg4BVCcsiKQeisgN4UjVqeSmWZWPpf7Mwxz1zdthBKZg7BGSnTZzsj9ncqN5iMDxhYfKkftFondCJ",
  "key2": "3ctz6m5fAeK6QkCwrqHRGEFgPiwB5dDLqBu3LJsYRKDZdTqfmSVnw6Y7VK8RgPbPJBHBc1nm5TPkixVrGx5KxvfU",
  "key3": "3RutoBSeM6aYdWQTEMFZD4KCLyJ94aaRuhSSJ55LHg3QobgXNAxHMeJBoDk4DrnJ4eq8uVGkgjX6PM2pYwCTu5km",
  "key4": "L186gLiBH1WqsqeEUM4rjB8VMWiDKhiunRV22pR3JrJaGf5Mzn3EnifBA8ksjpVMtnuauLKKC1XMvVz3ad7MJUe",
  "key5": "4CSJvfU5zFCCtPc5iVSmThC2hgiXtHvhugTkk135qbzLGsxGELUVd9U9DAvmeRKk8vzvqDeeYj1jYunXVTWdJin9",
  "key6": "3Bzr7EpExRZ2Tn4QQ1qcAR6mFdnY7mPTZUubmxjF3vZqcRUAPjTe8ftxpfk8Bgw7HccioAdGcPxV5vDWzptBYuBv",
  "key7": "3J5frGMYzaacrbKqQTLkt1XtaB7udMLQSrksxx1HZgo1Hx6DbinsGKW5saNeC3pSeAXxv2ZzpKtvj4CJbsavZun7",
  "key8": "5bBk243Brr4MMrHk6vCFsw1BPFSiMdaZqAKnhD9mX8rexqXZbS5KAXM2ELtyFMZ9TuVrUCMED6syr49rhkdE3Xam",
  "key9": "EeVHAmmGLtEoitscTHScCNp7i793yTywxJYVCpczfHWMZvDH2zHXhYdpXUQUPmAk7f7wvwLYp8pUovW2HNcz6va",
  "key10": "4PtbaN9bZ7vpn7FHAAaumgoJACAFpSANrg2U5uoCaEPfBhwTzmaVdSnaKMPSYbV844vPJm4FXijEZwmDxfb1cg8B",
  "key11": "28TkKmjytvCJi2USnfm5SkS7JbQ5BcyjbfnoVxfWDzCDewVYDBB6UXzChKQk2Vcqkkio1FwxjHDBjegKc2AzD9vq",
  "key12": "3r4amrPfuY1EgLvrQ8xaAsPteRjNWgi8vvteTTi1pso1juvGeNtwupC8ds82VKty58xF1KMXzPBHxXnUkuiedmpR",
  "key13": "2WNBf32QiUvysMa63fxv9BD9SueBn5Qrwu2Z66uguUhNiav2fz3YX9sKzCr4d9Y1gntHGSU5qMrAPzm1HPEK8NyK",
  "key14": "2K3NWPidRnU4UmS61TaZn2vrCWUqPHeBGVi8rocqhdrc95bjV89Wn3DPLhEdckme3mgToG3hvuGao9LSkVD3KZ4W",
  "key15": "DBpkjsHw11gVUWAsuJ17USuFr5SUe2kKiq4TcJErrJGfGSCd3pqZQHGYGSzw9ine5feDB6U9HEguUrh4sCemJS7",
  "key16": "4soAiFn4kmLuwSXEb7jHm58ESFTvQHg2eSHGXccZXBrAiK1LG2FvGqywB1MrwyMmLoQCxMNsTZzGkwkzHs36aB8k",
  "key17": "3HXg83bbLtjMPUjdNHGKGCwXGS2ssSrtm7TGmx8wXMYTr14jm4WbLFZzHVKwEsgwFee63gCBZfBFdZXoZgSq8zJU",
  "key18": "5NTH8vYbfB4Za4JfD6Sr9aQ4YLwrKUzM8oYH2FCk8hxTMVqspQFLX1zPnf8Cfqs8ycpEL2oFKbgSYFGp39qezYn2",
  "key19": "4PxNdckWqXfEpRFeBcxkdBpX6TQ5BAXcnHXrPoTxwUqQov8P7H1ZcH9Q7mfsX42epnguLPukFAszJPFfefEsyxyw",
  "key20": "2d8Qr4NvUf5A73uYgTmgdpnWsowEn9DtkiFQxJSYRxXn4QY8VQKQZqSkSVgghJpSMfxRDaXNAPQZ12vZt1Nz7gNT",
  "key21": "57QC7n2EKZmhzuHjfGd4U56Rq2CzCW9g9UXXAjehh7NTncLKecFg5HTYqa65VftDUFzR15CvieofjdV5tb8zijNP",
  "key22": "64RzC1Vkx7FZUcUtS5pU3dndmt5BkGc8RUfqjicv4GTKZWfBTqBMw91QBtNiH7Kz5r39CLeswGYRx6ZeFK9Q4ADh",
  "key23": "3gZHWW5tyWeTYn66FQrU6DcnD866VQ6MhH6Tiimp8Wxwj7eAhuNSMjD6wucnuUhV8kjfFLgLGmd7USRJDpSpNRmA",
  "key24": "5gshivXHGHmv4mwBHFV9N5xsAuWRWnTfrTrNpQYh2epfDejM9EPcU8k65DHqf37TiQYAFMDxD2fzM1XCsrMPXKKc",
  "key25": "5QWb4cVoH83xJgXxszhGUbd1S2EaLuidkfAiYH9j5d9ze12Ee47KKNdR4zzNSNNb19nGe5iQbvFzyUvHHHFDbB7c",
  "key26": "5r7M2L6xNFKfk3jJFCQuyMbqAfayJVow9Nw9iGjn65QEwCnmpiJANmHFD5HK6sS7XYNTM6r3tvN8gM9KBy9JAiB5",
  "key27": "5LkGcWvMshmtwU5711ppt1oooPCapksBMzmKTn7GwVRmWzKuhe6E6BHmJFvZTwNye11FuxqPsCYyh6C7XuzF2BYA",
  "key28": "4ZodzcaWQ2J3jWMkwjqeLhh9aLeDqUhqMxVAr67TJvZLoZvZqqQTTJXmhwgn9XCcr3vJgnXnbYrPqPGxVwpYeL2m",
  "key29": "5MiJsyx5TXqycV1cbBh4ReB1td9BWjJKo2WfS9MQwT9bfFKHtpLnBKzuqyWPyLqfG1vwLK8wBrpLNaJEeh8LzXzW",
  "key30": "2CXYiwxvKYyX1BezNmBiJeZsht2Ucm8xn2givkpVQCG3HaAu7iX5ADNHhjsorfKJtRe9fiY3MJeJGbUZkfk8ZQXq",
  "key31": "GQh8ajmSduS9KprxKqCepEiNTX6yQXgwi6PUnj4sgiYH3BUWNNkMffVqnTk67aGp4QpF8r8hYGTCrpYSrk4JZ3Q",
  "key32": "2Q29S48EtPKrh9j7nRNprCB7jG85cz2YoWxCGgKmoAQ1sLK2bweBFNK8y7fqL4gJgvZU8Ao1Jxh3GCVhiHE7kcBs",
  "key33": "3e6JeeRC5bw4ze238xGQ9sAujFtosALGDp4GvVMpmKoVFvjCNMokJ5SVz7GWXsjxQnoyr2xLheTvUGsEqJiKXgvw",
  "key34": "5ybQTkKnZg4qKTD2FEcKFrGvWJn3XkPkdpRc5e1HyVKuqM5pgSJsvYdpApEyTPZeakayaGraiMABF1PANazWhy82",
  "key35": "5jNgJndZ4CQ47ZiYZukWu5FQGjYL1QfyVM37ygS638DJJhnk4fjvxDpmsje95R4Xsc8QsmFyNZyzVKgTFoUjBu9P",
  "key36": "57b3zagb2g1sSuicwFvAHdrQqmmMhBj5YRwhcqswL4dNS6auQD83FL7LmMaZADPcM2j2dHHXgEGhK41Ee5hCsZtr",
  "key37": "33qHPs2u2mFPhmrmxszcbRFFytdC5cF5mBWjeXLYJuo2XJnuBFJhoq4jkcDm8w18EZXZiSwZnHAu2GV7hzEygFNm"
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
