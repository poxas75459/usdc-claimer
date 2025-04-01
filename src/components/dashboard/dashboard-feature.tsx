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
    "3Z59ntUw1iy5fnj7w8uwRVNQALWYULYC7zJVFaukctPb3hiqnZP8HqvicNkpBVkg5ugWqDRXrMPiRCq1nPtLHwPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rdu68G9DCi4pVEZwTGiHqaTdiSVcXy3WtRB5SuM7uBMnLy9PuVFJk3PhnDeqVWyDLjhpuv7yf6FTAMpvPPQSTs5",
  "key1": "3FhbWHVLyKvLnThH8qZrE9aGYR4a9Xc7gygRg9E5Mwim8BsypMpUHZEpArCkUMZd4naZmaqRPdopEC4NtnePvd3P",
  "key2": "4K79hiqWhXqsti7eArHG5H5rbNNNaLbDRCUfXj4w8vGn3ZTSxTrHkVwmcSW6xwY2rP6pFjMTXE9QQRJf6p6iayTe",
  "key3": "5koGtuu6qQPbY9iUaKgyUwZx9issgjDdhKm1HTayzdk74bKnEekPeDQLpiFcrDxNUw53FLS4XME9QQHCjbDLL6SK",
  "key4": "3qWEvfUdRv1PPmS8YEbqCXdv34irkBwPKyJKU1vPAd4b6QN7s8nFccRcHLqJ1ECAQeXn9efeD298wdj6Q53NwRVF",
  "key5": "2XDQbBAKXLE279Jht35vaceDpXTQE9g6y5DVqN2yQ1ZuSs28VT74CD5VRn6cw3qVkXjNV7UQcbioQFc2MRyum5NU",
  "key6": "452cikbV7z68ivTcm8hn31ZGKjTe6RrWQbfMzCM1xdHZ8FtxvUTpKwTLc3FxE2d6zA5TetJdpuhetfWyyHTnTciA",
  "key7": "4CJJis75guWkj9xUZNJAa66f7GePK7rz4zKT6wZaGErqbLBMRuCfCsiGZSSAmW3NhxqdLwcrKxa8djWkoHN1RKah",
  "key8": "5NnBRepMP8kkLSgxLGfWZsCyTPnpco3455NUiXB23pntq4H3Nb5KW9i5nxxapJUSLBvambrof2ntj7GdTAez41Y6",
  "key9": "URRD6LJtuzyLLgKMFDwwC6RsYxsfq42Xv7DtQSZPoKq92SphutNxDtTdedhKc5NrpjH7bvRoiGKmrk5ceYhv5hZ",
  "key10": "VyJMCTVjDVTAM3r8zQR21jzzefJgWvrtHnSJ77XxqZLRQLQZKFvJYypbunzeiVSgVF5YDndYyTmhKSeaCxRF5kh",
  "key11": "2RJhH8GywYJ2cb5K87N5nt7M2XH75VE82H4wyf5vG1bJrZJAoqg8djnv37DWsGk3cHxvHwmeGpx2NFJrqpqDGfkw",
  "key12": "4zddwiZpuokNLywLQKaHr1keRUaJTBbxsGFx6qxR8Fpf8VSEVSHo7TWEZuuM28JCRvqcVFWZ6L4v6yY4BQgxgD8K",
  "key13": "2JMU2pUiFuWtCu3s4D6vUksU3QN5EtzGwDRbKEun6P5hsEcDuruBz6wWA5q25xMpQMk4Y3EK5fMYQnWvdRAvq2yr",
  "key14": "548BSgwL9XxJ8sGEcxgDkX9UeGLKiKGx1ibfCTbsWdhwcoajGVnKgT7kRte5v5EsuRrgaf4ocESxoJT5VqnqWQAW",
  "key15": "2tnH58urstZT3wLF8dgEi1FFpgJLDHrjB3rG9XzuLN6zumDqFgSB1gmx8oiQJcoTBBDrEZmZeRSzUVR9x6frf1oJ",
  "key16": "5qHRCdbxAsUA7HHsbND5xe2VKQhGCi9Dki7mRS11kdXTxNv7m685evwii4y9E31GXHNALf8xFQVx11z4iWGrJYva",
  "key17": "37m1eJ2AiKZKDMLKHVps5dhg1nuKj2k9sDxssHgT8ZzpXK2icecvTEix56jnQgt5CA6wcRYHVRKpEbnCWpmyNaPv",
  "key18": "X2isAsbi567thSpXfBLURmExYe77SH8iUm6tZ2aKKRCQ57NBcv1Qhni8voFBMj3R8ggQ48Njqnnv5R2Rqb39L8n",
  "key19": "4kG8HjQhmZBuHbdvWrrmUi7PYuUAyB269kQqnHqs2A3ML4PHGsoZp53aRm9tdyPwnhQAaBhW1FQPq4hLHY6VWV3a",
  "key20": "5mHUL6kS6hYu88r7gYBWEt8c6BJsDHWP2xk4PkNdgia9igkai5hVoDCfq8nsPspJELiSVhrfWin1dqeNWfZS3BXe",
  "key21": "4iNS1KtJ2y2xxpx5nXv6fBBT4XCoTtCTihBjDJ5ak7B6fuYhX2HJTySuWviqTUkmVUKK4zJeemee9VXm5LzoqfJj",
  "key22": "3LYNAzNUjPkxXnpFoY8Jo7GPFLT9LR23hrjoyQPU2edAZWfuXDfePn7ASHty8dqJmqK5yXmdnYcNX4SadVsh8yf9",
  "key23": "22sCwjJfDtweZTtMnxVkvwgN6ATsGG3BKBk4oWDy5rF53zYqyrnvZ3dnACanChmmhD7GcWAzPS4M6EpuPXs3kJPw",
  "key24": "43SVPTppajNJBqQcdG9Z52CoS3da2j3oR8JsmcXtUdWkoAV11Wv9QQZ8aWaj2ZJ1jfiptsSBzZhu3hwpWuuQTeRZ",
  "key25": "5Scyiq8FXfFGL9f4kFMSMZeY4cxFmr38czR1LxA9crZmNF5vLv1A9vMQ7y16vRxibHtS1MnBBBd9QeoAcAzfaoPo",
  "key26": "DPLrNwVYqvQK1oyGhRswsFqSHq8AatPSAraPpSDuvi12sSC8urMAuyJxUeYARBYA7eCKQnwfUAaX1P5DpFRhiJg",
  "key27": "5eU6L3pEWZyyuMCdgJGxeJLJY59FvMJCVV5beSogomJVMV6exaoM3f3Ek99pEBwv6XVDavkPL7eBi2eFkvhoLQBC",
  "key28": "62SHVS2UDXYWxrzLQhorsX2NAuq165gCJC6AfDwmQynUgFbeNgMjd7sABCshWmmzSLwz7JmDwA2DhZAdokX8zBce",
  "key29": "4tLdQkjhpcQTT3EwTtvu8dFeWxV1xp4XiUqcPbHG9r12oZqetEtFnso1Q8699rEGz73bmwJJwHCPRxQ4N2Wzp4Bt",
  "key30": "5GKeEcZSFgiXk6HYKQmuaaz23d3o9RWRrkFzxs2dPQGuMUZrDuTyFWpuh8wUMF3SFYm2qZXAHWjhzE5hT4itvqi1",
  "key31": "3Sf2yN51hi3YzxGfsL2YUQBGigAqC6np4zgZybEwcBfRMJhqNbXhvBiyprVhEXpygbkuLHwqDWEBY8USBTj1acBz",
  "key32": "47ScEdEgjgXKo7Szq5uYu6HzKGfQc7RATUTX19XF9GdsfDprtmRRU6NBgk5jES5iW7FsyFymHWNcN9LLNzXTK4eK",
  "key33": "ZMFAiXBCih3W1uYC2N6XkaX5KcXyHdN5TxETTV1n5L6qXkd4FKxXeahDmwci9w2Ywp9AUJ1GfWB8X82GKaGHesv",
  "key34": "2MdaudjoW2oR7xypS5Gta6ZYJ4dYsUG7Ngdk2keQtR2Dd6DGZz7dAfU9MFnvqWmgmBmKjCX1udeDgEQfm4sQpVor",
  "key35": "p35DZQfGfv282EzZvSjq6yFam6iYvqVCkEW4GgEDb5aTmjwbi1n7UtAAnpo9hkQmpQPuYZynFdEWtj43VBELe6u",
  "key36": "7u1ybMC5DvBAz5wEF5gUyHxe6igZVSXUNhfNfAoBHDZwDKvufSjtKW45ECN7JFWTMmzkgp5dMixYe7CVr9YeXzg",
  "key37": "37RS2yTkRf9ySBL2LKVvqtwfGhcGxNk4Y9deU33F5vdxnuDzf6K9Epi6U9vY4oAWgHEnCvscC9NMdUJYzsXG7L41",
  "key38": "66penfmgr65XqqmUPBmiwGeUPuw848wAgUrvCSZL3hJiQEmfEQTg86kJg5kskCTgKX3EseoenipHv7TrovBfEq4d",
  "key39": "543v87jBiJPx2GiA2P4JE5cYr2FVhYnrmuD2Bg9azLXeB4Lh18QDSv2GjvRBnv7bbQRHhzmytU3w3oh7nkqnuLyK",
  "key40": "19MzmNtie6x7QcTV9GkvpEzWy1JyJE6btXpXZRfEbAVZPuMV271eeoMTaEGY7yNM1DM7W8uG7mvBrGfoLBj94DM",
  "key41": "3VSZeY1ikuY2YvMXtzm7av1HNSnVskSzxuqpso6213MeUQHnps2Ah2uYHw4z2oJfKqp3NsAyDUaVG2pJPCLyw3TE",
  "key42": "5uH4KWuqfYNhxv6RGdckustpz7bxdWfgCbcWsAXtnBZ3d6C9Pdfgq9UsXY8Gs5VbBkHKu5aFqCJ8dsnvj8Ft5j9P",
  "key43": "45jdq9Ld1MsnP8W6LAbn36wwm9miuSpWV1AQmyALRvNTp7a3wQceFASYKg2HW6rdSjcYHW6PDH89gbsBKbM7ifgi",
  "key44": "4uwCT9FaAqAMhWgqcyDiHsoAS7BQZE7D5BFCEKrtxhi61nb3Ebd6WofZD9n7FzMx7oAjkU8vHqULo7c42AEdfJeb"
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
