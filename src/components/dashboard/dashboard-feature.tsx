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
    "3Rv89hQ3RsjnVLs7rmCKwiEFJ7Z6rMgoydZyK6gRMayJ6iJewq4vveuBmFH9aYWkN58TLGvWgByB7cj1mB4icH1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zV4Y5Th7jcSXHJwmzyB3u1JoSDJyy8dFnMaNhwDcHaxuiiAtdZ3CsyficbXGzQDH4mvvfGyUCUKjGrRp3cu29L8",
  "key1": "5yHvWMBasEiUQt8EHj7WUPfPiWrBZs16D76oH4B9Z8ZWGZexLsra2z26h2KosWeV8zBBNApgMreoXqEPSDyqb3oz",
  "key2": "9zFbrend454sAQVX2NpNgdp9qKNHzh7DCpR36vHBx6FL5KTnWW44CQq27g4TurQRyXnDNdK5DLC1s2vLQnnCFpR",
  "key3": "2WN8AuevnpDeLL3kSLeNvLbqdRr6QsfXSLyxB56Hz3L48mpQSfsFNMULm5YUiELfQ1zVmRRcXxjp79Tfye8nLPys",
  "key4": "5CXv8QugkFZNni5Ti6xqCXsApnbwuUsCJRLgBzYeaHUR3ELisecWFbkdM9zvzN1ftLFbJDwouLwUMQHeahB548uW",
  "key5": "pNdG1tKRcHkf81u8Lk9Y9CZsgB92p19648Zz5nxYnR4Bg15H3KtJ4zbKzAEJzLW3BbpwW9ZNB1MsAjrtShHnG6Z",
  "key6": "43nxPQ1LVZ8bokENfn3EYNgc4FnGuxY9rdmqAWNTBPbdZox2bGa52YnUe5X2rnYCBd9SPN3sUm77ov1UcAoYPr21",
  "key7": "3UTh3NqWZ5XNCVB8FvM6viBSWzbmGRzSuJWTMKSYnff2CcUdGvgye1Znu7CiQzNvGF3wWhSX7Y5XKNusXgz7XnqM",
  "key8": "gVsmsY7HN2E9q1M6S553XVkfH6eA278otYf4yAgmUerRxybNECgqsw2zq52p24UaAieAwjbJeozPWEhzApj4bPW",
  "key9": "2Z7Ea56FFWgHEChovc4g1ptMBYUpLGB2zw3UcsDgr4Cc7iE1X8X5VRdZykq66vrU9KrPJiBKd8PNfnFPcb8CQpBm",
  "key10": "3DLgUGwo8J4UeVpuz1vXeYgUrVWfYfe6WJpouoqzrQWYrcnWgCY9o1oEBbsgcTvG1tZJhi3WULDibv8pjouNwS1n",
  "key11": "4B6PeqvN6BXJXGycT45SDkkRsJgZ5bUF7JMikxfZtFrv23GDFo37MbWeuVZN4jVw3XhoYo8A98NH8Akp75vou7Kh",
  "key12": "5uHxJ3MWJ4kufZtVBxsyrx6BtSkpYi1gipw4qhqX3UwNjfgav9asWtaCz4dpko1gVSQ5zY6fjaD3vk2WoNweCuVb",
  "key13": "4BVaFsocaHg83Tv6Sgx5xfBinnTAcUVMEAaf2LHi3vkXMEccS6XVpp7QfXHeMEYgvya8CxFx5MtbRj3cVksDAFb7",
  "key14": "5BW8cwgua9LGMQTEbbgjx8V9fKwwRbhGMyP5mMnM43nzvrGLmNqW8pKt7wacFRQ5hjxzZbaE92gTdHHjBcrdUfYK",
  "key15": "5FhVHSroy1D1fvKFS1Z19t3YtwZU4VWCGhgiJ8R1NDk8Mx5iCZRgwje2beWQt22VrdiBjdNrFbrCWc8Xxb8x9TT5",
  "key16": "24SjQCNkxDp3PVUB46J4RLeN56PVNTpJsmTaj7e3HGyq6zwXdCWKRtMA16Rm7F9ZthEee62FXEbUq8mMR28HJ7xw",
  "key17": "wuHrbLaj2chZpEg25eGkmtnVUMTAtxyYfMkAGBVNoJ9e6fg7gP5igDkKXjEXEPUEdTuKDJecdBwqi8XvnHPphX8",
  "key18": "FS2WiiZKePGnV8N7dtUaPUhHUreS49Fo3KECnqHV6oQmeHkye9PTXGtjNSjUqi3gs9oz1d2r9ozvA5UDs9f69YD",
  "key19": "rCuDNxpUEykJiNG23DaUUvBwNeJDCWXEnygngwxxgL6geNrjuGxULArd1yBk4Em8UjkCZb96twRMjBQXXJJ7fzz",
  "key20": "5G3VrWtBNcf4ezGCDYiwRLdpsqres7W4D2FD2gGWxXD5cDparx78ScJLgAjZ81tWff9amM4chUaV6BTy3Xrtfm4a",
  "key21": "2bRnbYHuKj5M9HnhdtJ5nZF5Zwx8TxVqkecCtZuFZbpUxkhKRaYuEsTj9tPmavxujjvKLtKsM1cbguVCp4ihFHLL",
  "key22": "3g3Vaf9MHi37cV8EQM3Hmjou31PiUFM9rHd3fDbrXHxW4VFbaqFK6cEgGhVS3ZbFHFa6G1zHp92GRwydr5y6zdrV",
  "key23": "5VDNgDvY6DJny5hU5yR5sBbvEg4SUWaxdxQA6h6BQdRwXJeRysGaAG3gHBwX3NCiAu1kPCec4i9kPxhV13VNAiRY",
  "key24": "56GN4F5qEYjvWyPQVxuPfRMi8KBuFnsjuA1L5JtF7KpFtjvbPBrb3rxKaDrGQmBP19JtCqufStDqnyP6D9DDxLUZ",
  "key25": "2iR2murhSJicgcJKpuqiBoBhzScHVbrfmDXS4r2jn2VnD8pFcbhgHoqFNWo4Vu9XLY9KYiJU5EBVRftcy8YjQ8Z1",
  "key26": "3hLpD9PWjTPT7xxP4HACeyC2tmBLtXp78AVZJvN45Kdi5M9yNAfdFxGmtWdBdX2fTwH6q87ATyo2ZTPDyXo1V3rL",
  "key27": "4imV1W8LKRsxS1pTDRPdxAujSBYBJPHBjHYjRTBmAZP4y4iiCMB7iBHBUD92XuxZr4cBd5NEK29PMPCsdPJgYubj",
  "key28": "4YnmWRzFM8ACd7rbeS6qyzJkBjb594qTharugVBHbsxMCD595LGdb1N4eP38duh64TcC45Xy7VVtorrupD1RjiZb"
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
