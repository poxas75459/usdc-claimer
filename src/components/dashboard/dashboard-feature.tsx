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
    "4oViHYoofQ7mFWYZ4PxnDtgfjefifutqF5fSPbkQ8XyAbCMmgnxE2TwsahkddMD3yMVnRJbTAk3HQKiWmo4q4VUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JsXxaGEp3X5jbVmL11yL7mhVXETSvhEfxq7SoKHmjReijeaCa1Ky89tXpVSwkchYduZvDP3MQDaKfAXo53F3mfL",
  "key1": "3pfZ4jX43Wm45pjzbQsq57UGFfWEWQum1t7SE32vsVfNFPWY2LKBMFhZGs2ApL95hEPy5GjaREFDHa49VBGQ6v1q",
  "key2": "2zFrsVydEqPMSHvxCfdAWXvFFbQ4jXvkurvbVy1wsVGDpVxmz7gqcRd7d2188uKPP547yWy5j598GLA7TF28Z4AY",
  "key3": "354i9EkCRD8erpMS1qCnBFnyRF2LR8rTJrDkbW4umqq7ECBiKmkRD7cjqPaSWrbVSvx7nJf4fvA5q9zSsZZKiQj7",
  "key4": "3R28CYBLVkiic2cu13bMm9bAKL5Cjh2S8bsZGE26jk2R3tkKPgjfT53wXcP8igKzMVp9J4ufiLVsYFeXNfZ5MY9M",
  "key5": "3YVrJdczsnJALSnMtousFhnsnjp7YToMaXLBaGQgimBwMdLPnL42wsDdKwWtmZX8DoZfbit4bpo1zkD4zZkrGUyP",
  "key6": "4wVNkqo77MWBBxw1wH2TEhPLEVsK7PYUxk5wUFqvD9aLJLuE8K2vhwZUBhJ5W36XFJZoUn4xJ7XKNYvG74Ka1jKU",
  "key7": "5WZ7WgKLYJsqnabS2E2phzG66jFvsUUEvUMxHtNpnov6xYyHoB15db41YurmAgDbXrYQqZHGHoHg3oimNRiW1qeY",
  "key8": "3yLyEA6ce2iPzSTsbA9JHRzbCdgwFNqVojxYsJGziKPDe5shzsRaxDVQUTsjWUJaFwGy3uSg2EsHrFfsaiqjkXWA",
  "key9": "9TEghYmBXsRKAakfH3WT28ejxG1Q1kAHVAhLF1KUsWZqRab4kNybagFHQUYqKvH6JX94USp7yaXYzJLMZXMYYG6",
  "key10": "5C846vBpui6K1X5fLySoFcQhKnGrCgzJxTt6AUnSiLGxC9LMXbNT5Gvd47FgspST2A6g45XgtEVP28T9ekvxADJA",
  "key11": "5vQ6cpCXuC9WdtgmqBH66SxrsPsDbm7QTJHYSRM2EEuxNb3J6Tvm3b8EM33cAf2KVrJN3ozeB7YzJddfHag7h7Da",
  "key12": "ENpwqFCVWT4AZahEqj2J6FHkYwMYJJwgftGtFANxeJ5dTee7SLLEeuj1BFtwthG2L184nv96krzGQCfmnWrE1mz",
  "key13": "2Ks7bYNqLCNppRM6nUJtoXgERMyMfJwUGrkRRhwoWiBa97rWYZeo27hA6hh7iUCzYKQXQkP26DqVKpk4jvopn8wc",
  "key14": "iWSKuhEiy447aVHEEv7SoYvcG1bG8NNDb6PxCMZmyf354pamARBWW6TcQhVdKZz6BPtcahKVxNNnCoWEkKvRHyD",
  "key15": "5K4gL2sEy2nMZ9kMjLpQeXwhD5RtJmRQySbKq1k8WCn9Z6a6tT4zPEDheSaMhpLSHPTt89KyMcEDpLSJN8Mo848P",
  "key16": "3ip2AYMSpsc8JPytCinrWEzKE57ZhcghNtujAckXDKi3TuWmF4inSqXdJyZMLoBKhEE4qPbd2N4tbh3LPgpCo1bh",
  "key17": "x9avNbyfZY9znd2muFxdVSfaqTwBjXg91nTu1bjYKofJwzVCCByxNKRaDseD5YGMmyzhgq3asCdfNsB9gSNpvGp",
  "key18": "41tmq6nLjqUSkgosoU7jnQePi3CnwE6R1DKEjsZpK3bXhWUtZDpoccFnecE82VN57SznUn6RuTTeX5hbe95K63xX",
  "key19": "2d6rUJUHQuGzEFPbY2jqSN2ggpkgxva3yurdDyzL58fVWBb6NzSiVJRTnn1Ykz3TsUvxP565oSkHHv59fVD17Gnz",
  "key20": "4GpYYAwBf8KdfCdT73HwBQocpmkSXiNmkrjqbQUZLaEifAJk69CTuHgaYVU81hWwNEUR82C3ophjS1sxAoZkktFT",
  "key21": "3ffPxzRS4LA1Us64AVZH7ZjWca4Euvp8aHjtac4D4DumDzLt3wTq9TnG6Hi65VWpsdLnpeshCrxfnVqjKhcDow19",
  "key22": "2Cbj3chXxozYkwu1V498R877N2HyhdnQKSRh6T5g4EDsB8rKfWEXC4xkJ3AFuGN4gxHj7KSAMyFaRPUrUTrfCrf",
  "key23": "5mUkx9Ywi821meuoLpedA1Sophz4tRLcVqPJaT6ZsFH1r6xGbnNBo2gfdk1JZv6UQQvbqEEGNPtaMBLoYKyxXtmp",
  "key24": "UX6mc53RmC6YZQNsgi4ombEQEY1xa4rWbru97MSebVgkcLjWEHbqqrsTnyQ9cN7Ge24BiPSQspfVK6rLEJLn6d1",
  "key25": "PHoDZUhGLqxPGNTj59RxZo8dqc9xZ3mvnKs8Dbb24RHwAvc3zPuPFuwizfto1ZBewd7BQwJo7YXi56DY3B4K3Nd",
  "key26": "3R35XFGf6eqJnnDwFcJRtgM3n2EfN3r8Wmw7oMzti5U6x53nG418JpdeMebRhohyNiDRPW2nMhix2sNqYSeqiEQb",
  "key27": "5ztUkuK97xfv2Vv4YJRFUPi76gt6rgkJxyM7wyJc4jbAbZPxJnewfX5N2wgj8TYRkHxxvBphpazM6efUoJ8Na4xA",
  "key28": "5Rv3P4cbeQt1qewvGmZf49SbZss5c3QNZFsL2YGHdySByeoGpVAgReFzvVPdmWvCrXTNncS3XofqegHurU2XjojR",
  "key29": "5adXyoMT6AJHk5k5BshHzXYMdXKMH6QvPncj34WwvAnV5cMBnL1Thgek4XDttGkUyruEeNKbdhh235rn9hRUnmhd",
  "key30": "2i9bGSoTCaAzF1wwsaXMKsD21P4MrNSZVEewgcrwqtFq4F4qsxqYiFbadywLCvYgGgfoaMwSqsYhpKqegBSycGfE",
  "key31": "2r3hA4pE26LHP1hofVoX7jVMdpwMHDpD5DuaLWGXPHRAm2bzXZ2gytSgqtqGzvPXXmPUhhziKpHnm4Brk2RA4AAq",
  "key32": "3ad7L2nzW5HDc7kDhLtJj5Be4YmX1TQcST3p3qdsi3guQQY7DXc4PymfPHEy629anLewv1NdZQMXu5XaqytkLWNK",
  "key33": "63DoXjuQ6GfRVJovzSi21F31PBTKtWXGjgkk1G9dUkB2v2x4CFXWWckW5dt2KVj2X3DHsSNsYJGgio9y2jDA2kmt",
  "key34": "zAHhgic4NF6i4zUych4VJWxDDby8YLfHWeTkKj9hxsffkgjUVmggsZA599tLqyDWpxXaWoBEAkaicPFFczVwnBD",
  "key35": "3697u6SJwSiochApAAoSwASnKPc496Pi679nSvuT1NVWybYsyhhCrmvC7PHxJ9XmthJU1Yh3sAPFmAnAPmpfTJmc",
  "key36": "3WJff91w3s1s3haLwhCuwerwZSXrkedVke9yuiddsPSm5uHmtWuu2WDh4TbUCsCnSPtJEZSkwHkk7VqL5w3NF74J",
  "key37": "8jNwHJPTAqjCgVhqhhFFZAwRLem7fNYTUYNaWUfqKKJRsneGZ1HiLKyZPqtemCyPsPXUtLzCEBiphWN7ZiHf8hN",
  "key38": "2kbASMKsMV619sjJ1HBCqmQqbXvsyCTRZaUtW1xH9KywrGKf6eJwbvyLsX1qbDdiL3bdTnGHTGhmoskfAygbtcKL",
  "key39": "5SeUe7m1C1NdKhg65SNh3qHzoNwucdrcHhPDhXo4xwufk8vS9aNe87YC9gGnpMpNGHWTM4HQh8sbU8ykbnHLWRuV",
  "key40": "4vgRtm9uMhEF8bFfYdvYtvYVjVxJvXPTqqFEmZNvn4xc7qV82VMvCCPyc8stizgLUf4aLJBdvN5gqe1YBu5d7qAT",
  "key41": "3ow46bCTRDQxe5yD1uvQaz1TYWKo9XLASCo2roc46eZtdka4CQH2cRsQFDzdCgLQi8dtZHbkCqnjPU4PcpVsYJyG",
  "key42": "ieV5xS3y4Yir3SxWhoUBmgQ5VJYqmTUCr4SRqMnXWqKZUkXvA5hE6J256gMtVrUm47R3xgoQNvwznzKpPFhoJaH",
  "key43": "5QHxyw4modE7bqt68qgRjkB7FqNTZ8y6sHUHiXyiLWYHQUDcR1VfcVSej1PKzqtryJxUtja793WqxaPcdxHgcv4g",
  "key44": "2JX5XHgwWXjn12x6iktMARimvNavTFS8r8dmKqGocHpymQGrXDwTs3f1VroeyYptLHV6xa7WLMtXEadmFRYQXLPu",
  "key45": "4NiFkT9TyiE7736GVWWKCudxqJi8LvGcEJT9BRFPXuvnLhgjoFrt3K9ooChafrFfFq4KiCnGeNWUNktCZjuf5byZ",
  "key46": "345GV86DSQskjC8s6HHmmu3p1shZbvoozc7LnFyS7gb1asjnByLrRY8K4L1xC8Smo9ca6LVAL8FL5xg2ypLjFCDB",
  "key47": "4GjkfmRHzRk19XeTJeWnbGh4xv5Gmo1BrjLsWfXBGdWm7JXXDZfsdMc5VyiT7gouwbat4kpPabt2zUTUVKWUcUw2",
  "key48": "5nd9SSQ1GM3CDaedGMFzpHhSPJ4Y3UeGaMYLvjn7Kr8XD895DjM8E6EUTvyCEKEFPAJjxfbPTteLa4A49WDxbcvA",
  "key49": "5EKKkRPLsdJ8kFqVgUNAbNYJdmGj8c2pXEakztCafrCEttVS2JRap26YkxykXryS5rkzyRzLdtcB8ggMVbzJXHrD"
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
