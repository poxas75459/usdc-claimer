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
    "54iCFpnqmoh3dJ5vUxcUvZwj6BEK4jaaMEjp8451KWjoKRchT5zhtjvmNTVzixwcBKzHEok9jsrmq1Q2RDByefz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iFWaMVapjAJonEGSbvDQ7FV8KKSUJDTc7wqFj68MjiGhx1UC2JCbhdNhqiCwfXUL82qf7poHTScWUdrH3YeNuxG",
  "key1": "2qMXoLgsXsAmcBZJtKHpqaQea8FKnqE1TysJy3e3RcU6Ubh2bdqN6wdMKixhrhFZ58BMB2M7Cg3YNCPk78eEjq95",
  "key2": "4jVSyXLLCez3onRB3hrirDynycVbNyE3retrhKB1x3rXWDyjdxkNsZZikChZwU3koFnTK3ApTvpfWmRmfo9nyn6T",
  "key3": "5wdq1aYo7nWJR3ktV9amqqinsskZ67LgEwtAH1RcxKcLKawyKp7MUHUxmfdfDAdj3PtESEwpmSk2TF4CYcmcPxUg",
  "key4": "Hfq1ae1Rro5XrhQztg6EA2C5sYU3oQUofjLxNWa65Ngb7Yu3r713Ues6UvBx3Yt7S12TtbPyVHKLrsaFH7CrSpA",
  "key5": "3FfDEeM17WRQWEaDHaMTquMADdhi3yCUkgeTFcnjpmCqGXpEQB9jMgHQBZ5AQv6nEysM8fTX1Z5aiDJ6PVT55bDu",
  "key6": "3GErtrX8kuNF7fv79UtyuqGgVCSnHBLvTnRCpZ9UyVNFEGzTErja69ebZDJhFF9CLHVcForK25E4RJ82p5BQkegV",
  "key7": "28iDsSbkaCX7aUkJTm1ntrqiMQRgshU5SybJSBrUS8GFhK5pCQgxofmNwik4oNH5DSmEetBRVmghAZAfA5q7QYG3",
  "key8": "316NvJNFnRqXZx5VmojwWF2cFuMepYpDMNDEbUYdp9z2iVHRso1dcMwHKYMA75y5pDjAwK8cnjpwxM9P33r3CGS1",
  "key9": "2EGx5RjdabMmfU5sWDkW1u1JwDxr5TuEbTC2gN4ZuMTfxabgjpckHqYGWV6xBpBTTmzCS2UqyNDvvr5oxhG4QQyA",
  "key10": "4Xk1S7MEcuPNxUxGwnkc2TE43qaUfXEutaWBxk9oc2t4xfjMxYtNhjJ3SWp9v6di369b8Grah5mNuxeasa95Ccwu",
  "key11": "5cN4VPUWUjNNcWXqSM6Qwwfi5R7wo8zL1kqfEmVMu34emqVH3RobQgyqRs9xM4DXU8jd8wiPm6gHfDKo2BZxW8Jb",
  "key12": "5tqbn2cCB7b2AroSu3uJcCnY7HBUaUyfzza2sAwrgwEvfKKYjboU4sQdbXmjXczNqz252RHJfquotm6hky26FHar",
  "key13": "2d1SAFU5x92LBJ6atXcbYJNjxEBhMM3vYEGqcpT33VMEJwwWiSAioyiDQefydDNXPE1pNkKf3aWVRPiJoQxTss1S",
  "key14": "45eAWN62YkhaGj5Ri5ibtTt4QBW3L7L1qrdbKz57Wjd6gyCGvBsuN9jtu848D2BRXxq5SuhdXsDSxxfzwEK8gE5B",
  "key15": "4w6S5CoL3tsdWytG3jnYXfsZ1DF3QNNuemovNnvz6PJztGwJDZi2xEytmTCURfTEfJfKGuAvBWuHn22jTg1Vnc5M",
  "key16": "W9oGVE83cDQCUqG8sf2LHJWF47PGdj7TMVUmjpt9jVePYp49GLDdZsFNHDkNobTjJ6WurJVwc5fc571mkiAZ3LM",
  "key17": "Lme7yD2MiB3hN3rv3LcEJcEgzEb7b6MUwNwibnRb7voXqhCEKZMn1aUSjNovnrx3QSWeSrJRndTCgjRJKRtmx8T",
  "key18": "5z3unR7NJU386F7mehHyNYJLZUEqQVR6TmgSqyCLBpEDyWDxLMqSeUarmpuXcBWD8yrPYHL5dcoBDqPghUdP5GSm",
  "key19": "5XkcrAUrYHpAPSTAug9ZNYtyYNxYkjKMzkxdKPdHiVp8hiGhNNW3bRpNa2xB2rRDv27ytvVXV9hUphgJRg51Wvnk",
  "key20": "mCzMrGHXpgi27PCRy1TMiLTJ9vBY7NRibVhiFzbneGxJPu3Wic73P6QFC6R3Legjc1Gjm2oPE1EDtExRPTZGCw8",
  "key21": "vVxqLF4Dzr6nxRkpWqDj1ccGoBNubwYWTWGSP56ZLxEUZU8rT1FJP4A29KQ6Buar14DYv2Y7W8ktZHrQv5NyqWq",
  "key22": "5n4tmqhwGKh3KQtJBPBf9iBSVcyb3fzr5jSNZCENuBJbmApYGP3XszD24WtVX1US3cQhRDqbt1ruVeZgKxbp8YzV",
  "key23": "ruiGuQgMoqDQ3SJwXu7x4T3S6nH1K16AFRXJ95PKAX6qWFZ6XrxAajiejKARSVeSRY36Lf3iL2zHrxYm5Wiiusa",
  "key24": "3oP5ESagFKER55NxGzjNihLwPmqi3sCZ3MPEac71zE5AsXwv8YpRrzG8NQrYZN5hNEeDHdXJkepbJQUsrezANt4B",
  "key25": "knFzGhw3A2ATzGUWYTd4tdzWtU7J7LukFZjtX88GVPotcGem6tkauSvytXtejjLZR4zgC11WEj7HbLXzymoXWbE",
  "key26": "2DUSaXkUXVZeZpVRYswmxfqv1Y1WpHyn2mSf4K47BZZdmdnuYVGdKPtiPvdkYZGzKMpb46MsHAQeFZ3tHhS7bk1",
  "key27": "2DVLegE3aG5bLW15pvYQvby9ntvK3MQccUtW5Pbdd9Svu1kuTGP5GqGAvHMDg5egdCB2ce5GWScZ8n9jH5UZ7woh",
  "key28": "KZVXhw92jMLRpiMS1V2PoQffkAvY1WTNHpxbnHpGSRUjTfp7qwAStj8KMPaVQh6k2cKo9xCfhPtd3YseGJoXtdC",
  "key29": "55VoM3s3c9QtKFaTsqu78VACFJNHCEH9RWpZdnjYzBiQdZbb46UeVMoLX3gmALJXotAy5CStNtgzVNr3aAhUkft5",
  "key30": "5p4ERtPKkT7yrgCSM46xLYQ1Y7yxB9ZYXhFiaCRgvLFdcde4c7Ws38LNrSryzHN1iYLXd8MbbBZzPyRdevLt3cq6",
  "key31": "vjCeTDosJVewqp4y7vFmKkVVH1iuuhGqkBRfnE3tBhpqqEofNkfxE38TAydqFFLqiSMA61x6Hph9PiBoWkyi7pp",
  "key32": "21yyamgrbtNCULieLyvcDWUsV9xyQNdsNKLkLkDsspvKM48tBfLATmL1VrTCkb71qyvvN2QwVuE3swpxPBSskzRx",
  "key33": "5kqgN4xRhmg8sQ18x87ZCbPVS9Yuua3E8XHjwXJeD786DSsUbpS1rUsTXyhKnRJUQPf6dpezZecg64YsA9gEDoCV",
  "key34": "5DfxhiBjNs46RT98pGn1LoLQHXvQGZPAtvscBGD9a2L5JEyR1wu5sRS69vdUSD1MZTS2UzhZZQQobS6Pp1zjmgRw",
  "key35": "EBjBz1sUMRpBFbYESAxzVtQRWmqe79kTiAFxgFJjmhSd3BdFUXrnRse8y59VvQVmrwmzyvzCsfx29RQk1oW4MdK",
  "key36": "3cpC7RwWe72b5mgcjmxvsF1SQQwGZZLhAdoWwNwrKeDJiShYKs3BDJY5xxtY89vCAvVx7neXMhrT6rrTzQD8zZA6",
  "key37": "3L89DCyC9mDD5rV7QVCoM2wSRGR6TRLmNRTAZcGsi66wZZscNWPxyR1fdAZ6sMeW3Sr5yYqVfP797jjFNEi476M8",
  "key38": "5yLsq14UeZLNWvQEqHCoJhDmcUNrJZQyUX3sN9LrCxycRtjhJk5eo62SFmngafNvcD1gZktUrNDfEJCqHEtzv9RS",
  "key39": "4CFnaDC3735RibxwH7WRxmGd38nk6oeabPJf2zTwNSYzxDxTQizbbhrorVGcFGQtwFu9LdBLTRbmCz4ukA7iyDBA",
  "key40": "26j97pNZWDGnCNEhpFSBCr35wpJYh1eFyxgwR8xf5hYk3oDox8aWNUR5rJgY8Ss5hkdoFB4uRe1pgP5kuhWuBBae",
  "key41": "5DQPqRELDkJFwX1tii9C15Gyo51HyT6eAXPgpscECSvoKGQKPfkt5VtTe639Ya7qhwpxDWCzLuLKKM12Zt1BrqUx",
  "key42": "2KH4PvRaPwSWvNJ9dFgoKcbGToT3pDhxs1tTvgz7BhLqCBHersJuLAa9GxyEdKchXCgd7vwDV7rjdUAKGNCdZg4V",
  "key43": "3LM8vs5JUusXq1ux6bPzK8yRy57bZHfYF9EKSQeotWaQACsuwfVjMPbP235eqUfHxfp6tKjyaJijomhqCkpvkqDm",
  "key44": "3fcpvc6xhYFnsk2P5YhqvWZsTj5gqPkLjPZb7UkfCmr2aobpVkULhg5jofcwthRPkoB1nQraKyFVihAvBqqQbJtR"
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
