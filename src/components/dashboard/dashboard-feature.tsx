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
    "4LsyjDAizwWgcnfqAstjUfKA4e4wFvSXwKmjdoVkTkVy9KqFEbABkjHsRAQYxgJ8BrAxNnLdkpf7bj13HQNpJsz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34fnZrB7SKV9f3CxU5BNLeRd7vi1dqG1zAu3nQV7J4xWeA8bm2QZKkLKX5SicBSVeE2zYnFGhSjbwH9ZpJrR8Uq2",
  "key1": "2nyRGq6LX68hBLZTzm2uqwDSqa4Kq6diza8cErW7rVHihr4ZXVU55XtiNGEqXwez5aQScEXSfkgPdEZMWBWT4ssj",
  "key2": "4LDCYcNkUbw4MCZzd5GeznwvwkLMMi8x86PP3cnh4mG3bVXgkFnENJ1FAtU4QnfKAs2knqyxAT95g5yScvW8bCPX",
  "key3": "59Zce9dE2QoW4rVjwuj5xoQoDnqNag2VRizHcRJdyuqVUoEtLviJjcSarawgZwNxszRPcpKWjp2teGcT2wKqVXSE",
  "key4": "5NswA2ynUPReDF8XejConVw9UniearQYaihrshQU28w7GRSJi8K1aNxdRwjZwU5EcuqAoEHhRGZVCoBiyaL1esq5",
  "key5": "2gU5jVwEkYjC6PjFJiwSt6d2Lofd9C7GQosmeV3jKGjZpMQ3tVzykwDGg7LKa5zycshvX2K6isCQed1y1y3po6ug",
  "key6": "4Ds53NpG5Th9ppBXHDr3L4yaEcAkRyPyoQfjzxJB4QfMEACRkyhk2pwyK79w2pEJXGB6Jn5stTnHFZEq55g2Vw3c",
  "key7": "4ow5jVGfbTtV8hFgM3rdAhDAtgLHekx6xwmu13oauNjWWAfjaFoQ2W6CX3L9Aaz8vm89Y38RrDJsWRFG5cFYtzLG",
  "key8": "5q2vhbhxKHLXDQEzjh1FteiMwkQbCdJNXy4Yh4k1L7udXhGrf3sHc8dQwH3fJY3LyYDJy7JGwHf37Uh7fq5h3fQ2",
  "key9": "32rmJkKN8c5Xfm4Tnc3D4LHLXhvGZaiTpdTGFkJPVrmzrxckMxeRb7CnQv8q8Jpc8KF9BRRTjRMjX3UTByTjBRoq",
  "key10": "3TtGw4hGhgMwK4bnX8koGhThEGqDmPvAwvZi4KvrVsTzdS3nRzgiG8jbuDihwbbzmMgCxZ8g54yyYfAodCm52cEm",
  "key11": "3ti5W9eZN4KhaPRas8rNbyd3WdisRemWEEof5HvusfM3UdPZ1DRTK9DHu4FaNpA1TTVMQpPyhKqsvosQYeEHqk2p",
  "key12": "quDKo9EYf1g7A1y46nzPenjWoVmQfCbBpiHsi7T3sELHdiriWmHR5ryxKk9aDHiaBmQ1EjNChaNsSYLucNWvxnD",
  "key13": "2iPzrTiTGxqUBiEzfHZcGsk4gmQzzJi4qvQE72eC4wKeQdjzTkgiKMJhup8xumjCMRvjzf5TMjD7Lb1PGRxGjb9Z",
  "key14": "4zskGzocERtu6qc1L5gKMfEefYAeCk6cEuU3tcfCt5unFN46KUwJdf9xqe5v91oFbAp2iyDPuWt749u8oJ62LScG",
  "key15": "55h7UUVqkjjRK6NKwETUUSnkJStNX72YenZF75f3tgXUfb63hFCKGQHkKPgHJKGfs5NydRQV75R32zkZyqA2FJ2H",
  "key16": "4WZWZuw36wEW3X2gHWX9a7jYaaJ5agk9Hr4ovkyPqZ3prnrKwsYnzgZMm9ktnzjHbScAqDxE3vdqeT1b8d5ddUe4",
  "key17": "3nwi3HLbGR2Pyu9AS9t4RyWm2kJyyJReS1VBxJvcFKPn6XKU5mSiavYGpGEQ4p5YzqEcwqdwEa4JM2aa4kwxCJ9j",
  "key18": "55A4jr73jzpLVpHnrWJGoi1HKS5adfE85qeLB4JBYhEQp6pvi6tPk4EBMrBSUmmPd3GrCKSESRnNx6Sij7P31fVg",
  "key19": "3Kg4Jxtt6Cw7heKPCu3yVRbFsQyvqejVTzcAyPYPLNXVcAxsTAAsePkWKWmZzWZLk9KTaNWeuAmg75meALhAQ1yF",
  "key20": "2y6agSVCoF79JtTVWe2hDbqD3ceXUtpSyRogL34K3jD7Pei3VWP6tjJww9dhcroupW9kH9uz8xrCHzAAEXAYWMv5",
  "key21": "4CUA4mAi8RdS4gPougtCSAGPy2wQr45Pd8rNDfyYB1g3coXkWudx1b1RDX8rJqTGjLTgo18wfUDavrGRjXWDpbL7",
  "key22": "pWNMT93trV2kyg6o3ZJ2r8DkagwprYuje5jms9ohVNXGcXWaYhatWgVCmSvnVnUp1oxRRxsjMKTpnWWDC9DoFPQ",
  "key23": "3Y2xSuzxuhGZEjUXnqNB9LDbbSie3qnwjPmF71xCYc7wVzuAvztgGnBig3yEUwgR3ZWVhGSpiJj9NxcJuYjH7Byw",
  "key24": "4H4FjngS3AtAHT8FcmoEVBpkqSSPnuWc6bVipvQUh9WUjVgpPkvTY18JdgBEtwLGTpjeG8JoN1Zx9yMSrannN3nG",
  "key25": "2VNGP9Y2L8vVCLx6ghMQ6NNpK8CXdBFzNMa1uW3pXwGk5zecA8Hyi6n3wXD6XDQj5pzW5zgdPTvYDbc5kaDtkRMt",
  "key26": "kiTj87FyYPoep71QNKEVAnv8bDT8oHYj2Axh24Dv2YUbGVrDbc1RszF9XFhUgXC9PQiLbkMBKTHZAJNucUWTciA",
  "key27": "2VENs9iUNtFN5Guuh7Cnqk6g6fbw5G8Ruw5MpGfGvCDkXmTnuu9XfixX3qUCRzsFJzorDWTom9TN5xAXNuP1fcbk",
  "key28": "2fskNCmpEMkjEEnEFhi4UdMvzVazr34iZjou5Xom9izGKdxYEx6U1S1PVeKgiF97xhpFSRZ7BnzJELCKdKPUrch",
  "key29": "3gvpHkdwJZKCsEwumHCtvUoodSVd4PX5CYz1N4zRHb9yZvoQqfhDdhs6BVsGWhh54G4KZjH7jtu9PCKVvzMjTqqK",
  "key30": "5y1nPh7h6CitCBeaiGRrsKp2HAj5yHdV14Pn24JBWKUnWUBFJtob2HEhNqedu1q1967FzADScEMUUdvFcw9Q7Jxn",
  "key31": "4ea1kTrkkZcts4nQzv4PiomFuwhNV5ThboVCHY7sZ47eVpoEfpNefmubp37VmQqzP7V8efwPQ7ordmVtwLV14Wk9",
  "key32": "3uumazG6cDMa8YAVZZcyfmRr7vuPgbcaGS9mhpTaQdiG6AvS9QQLcge1trJdBe72hkq4aiuXbY6AHGC5WnXab7M8",
  "key33": "48DuDjYfYnAiAUZjaePbypgoQibvWebVCZ3mHtAiQRi1BmZ1mzD6zr8gGPKEGP5xx9h6u8e1iFi9ZEtVZssBh55k",
  "key34": "3SQkWK2Vf4tc25c9Du6JjuH6RjYRm5iwTwYjM9iN4XQSu731spvYx7SmizQbuxF66wbMFLoZWvFVy3Cvu75h45yu",
  "key35": "4S43mroBUneNKcRStoWr65pFHbUHSHxFJnbAVoAW9LxTWrSFF5b2F1xGjXRzkK1vLzdhaNu8QowBPhfpau1LLRsa",
  "key36": "3QepFSBAUpbGuoFAernzfMddKKtsEUVgUE3pFPzpF1wNyfTbSRx86qzY4frdHMznTSLVGNFh9YJDg1YZtkbR4LBr",
  "key37": "2B5XgSkmBcLrmWgUmRsjrBFFmoZbKtzYsbwQ6jUAzDwoPnEwrDyMdUogubbWhFZMx3MJjAN8Vx23XqyTyqvKFJcz",
  "key38": "BLjLWxgx991KJ4S2fdV1YTFqsneqFMinDPW1mzWhMbwj2QGbeSvsy3D5XKTznmzdzZczqyEFeD6hRMc8jVxXyvm",
  "key39": "3RagscjvyMHStkxtXbSLBZwdpmsTSfDj1gyHuP22zC4wnPuzLRncjCtS7SXpaxVdZoH3zdwB1KCTsSpJP6E7m4ft",
  "key40": "P7rVTJbfEMbmjEjMZMr8Kb9LStdofGjVEwEw4vgpCW8ktt2E8kkNRXd5owhAJFFpjNf2P6xJEZx8ucv4w61nuUn",
  "key41": "5HHsFbK3dhnBRzZVjUyPGSLrcLBmaSNvA3Wt7bFHCXCUAE7KGRKnupJPdjVcZB6GCVSVVqPryuT1qWZiiWAkeUhZ"
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
