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
    "4xDzDvBL7vooPxj2gpsBm4usNBsSjXoosqXnViNxfczxTpjAgP5vZVMDkY5ERAC5BVQJJJAmy4RJkrCuwuinhZoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dntViKJ3PpdEDJKXp28ZwYuUFrqmruNdqRytzd8vCjE7j2bvvVazEUYWfKkSgb2Htoo65kY7n43k1fRQRP5NxHS",
  "key1": "5BmGBgMr7UmhSUUsgXjP5MZALGbcvgoRKW9aCk5rcfUaBLhoy6o835wNj8diDFLsjsSQWdZ6KF6bbHCThMh92WzD",
  "key2": "5bmiJged2aUUbcy7cLo1LpGYK4v7VehiFAUB9HbbMUmwPEbZBhJUu7YR36o1dmgUDyhjRyriGTniNSrFXqZGu5mz",
  "key3": "bjVPYYHkx8K9DC1nks5a6MhfyKUY1dPAX8PnfPfnkELkDXSBH11gWuNFed2RpaXcYC3HELN5f1NUGsCzmAR6z8q",
  "key4": "4xrLdPq6CGHprSKiLJBQ7nEwRKFHHWTLLcBtxxUkCFmb4MydhjGQWQLZLuEtNFN4EHtqhESEKYyGsYdAJzgsJfF3",
  "key5": "JJqTK1k2qKHpqqtwXVk94zbN88gUUbF4Cub1wMjyhPuXWxhbFfTHoZomoTQ9T2zCoHV9v3vSLFirJVGngoAskpo",
  "key6": "hpM6uFW5dnnhNVF8xe6SetuEHRsExU7iwLwxf7xdvCfDcRkeeSSCg2PeBAaoHaVCg8Cj5UJPTgmBxKL4fR9hN7A",
  "key7": "21fVR4EY3NzEtgccoScbJfuHrKcy2NsPTXQpvgNfL5dqtovDzu4rUZwPjoYVjUKr2cR7zJzkyZis5xKDyCHYSdu5",
  "key8": "4V5j4nAxbXhK3uzkMgaq7DtUebB9epN5SqAppapewF4MrtkrgTq8JUKb6sjinCvYvi3qpoJuPnsbJ6esPV4FCUCb",
  "key9": "5qDJT4sBPU8cxSuGojKRdWZosSFrDfjm1oM3GESVdRXFDPLZ23QiesLH8RxJSkhkbMbeQtFa237VUek2yboDN9fF",
  "key10": "4zUDrFg4Zfza6WwWF1mLT5QwVLjUgumqzFH99yPiYgv5dzmqEpHi2qLZJ9BRoTbzrKiNoVxUKnfJa6Eqoy6b7rmq",
  "key11": "2KrQGDVNPPhR1uKVqTnqHa2Vn47pPiXvCCKYMm3eCAXCyeFRiTNfkdbzQRcLm7cm2xrnDWx8KX3GTTv5bjMYWJ6i",
  "key12": "31U9GXrWZfNDFoomqpxCG9HvaMrMMD8X5xAQTauyYiTDBYqoYiLMGUJPypDqSUcbTAH6KhDEevC4yjoWfxABe5Lp",
  "key13": "5EypL3DzRr3n1qVfWBnfyVoi7LcjurM3sbpGfCLvkBTRrYFXdwb9CiSpux95r5o5u9p6Gbi1JwmNY1YjFKL9wSC",
  "key14": "z3e7KvqD9Equvp9TC78EaH9pT8dA4UXGxyD6ukYaCgNxEPnnFjzxQeJ2CZU6qZgGmRcDSjPC8cyc6y4cV5RMPDp",
  "key15": "Gf8DwwRNbACei1r5cxcREppcmThxEfmSBN6Tq8Ka4dUF9eseBqkT9bshcS1K5756F7A4ujq3Skt4P7UfJBCoMoU",
  "key16": "SbA84AFrSphWz8hehCvccYDL3drtr5wifJppFb8LkhcczRKTavduVfSB2bPkdqMQg9842QbLqEi51ngxQcNjEHW",
  "key17": "2Zh5xkYCb9YgcmvuS1oxSBS4oDrCbKCqVcMGbzcdz33SmMEb64BNqzLr2CS9BTs5TQHL4oGxvEYPq7AEiaePZpHv",
  "key18": "3NmSmoBUxrLYbwUYgadEqbpVYCfuSVQrYoHWXwfJJvS26Jsk3U71MomjrHtHDLkXjz2LW71pnwiJwwJHGZzLcrUg",
  "key19": "3BiorfYjcTEtbGMFAS1P3U2HtK12hnQRBU6UDnfqekN2fBXZRxCAnvfcjcKk47jmGzUn2SSTM9NKCEVxFgnaP1Le",
  "key20": "27TseEXgzr7x58xkJCw3DaeQxiYEyU44w4Uxu69wtUuBuvR1TZW4qxzRovWt4izSZgD6cW63P5q8B6NeUxMwFDsR",
  "key21": "39qAWBGXTjukSLUuuJVaZLg3Jnst3bVmWSQCAjmcFLT6VdYxgEP6bYTAMBr5QuDS3Taf4ApRumBVLLxGm1qrBM9A",
  "key22": "2m5o8NGVgTR4WaCr9ymhAnm4QCCaMmxToV2tqVFcAi7DYo148MmwGfceERtrsEsbqtxijLUcapj7YTyRwgawpeyd",
  "key23": "3jDjXSPrdthiGKKkYxp8YL3nsWoYD1TtC6VdTFThVbCrnVxyJcfHWVLH6UdPgSZMtGHYwRR8FDHesdGp7b8oP14T",
  "key24": "3q1uHwsVoa2yhN6W4DN7oSTSreXyY83DkMgRoVm2ekxpgoBCtpgNUaQMsXoiFgMN8EEhkBkqfprfDaiTyL51bVCL",
  "key25": "26kZaxkPoWzFPeLkBF2Uy76RmUVPZ5hNujStNtwm7M7GE163cT5vqFCKvjHf3VAwrUPsohoSvgRHgvUAX6dMt4W1",
  "key26": "1Lh29A4ZtTbiXnesXjZcm5icqQ6PcSspBicJjgTCAqGcyjJDPCsnQtJHUExbWNwtyyZ8EWk77931d1LyxmLLcyQ",
  "key27": "YvfZz42uYswc6AqqxXVcC5mXGZbEXVMheWigpootHsr2MfcsBTTUEFosY4GQVuLERU1oh5dLg2uX7c288fc6RwV",
  "key28": "4EqQj1z86gofqXwEPMEWLobcRmyPGL2c8Brq85YuQHrF6kEqY3ryDt23AH4TJYsxQYQNbgzpR2XMvnP87Bg3sWrK",
  "key29": "2xxcYd3waag5kNkJURF8JjgbJjGMiqQGEp5cFrZBq9Uth452p1Rjzs2pCqJmn5sajhVsVFNaoAKH2ZMkS1hCztb9",
  "key30": "5zYe6Uq5QxewueqCFKPc4zwbDBj2VqVs2hswELh1fDG1NTP2TfVLwsVLq4GaFywn6mj8qB8dQjLeaVrhgvMNxV2j",
  "key31": "2fFBGVg2PEEZm4jUWY9GAAnUYB6fx2sru3zdHUGM83GRR6onjcb7kefZUHq6yEeHFLNGXF2D1ZBT3DSSneGrF3Xk",
  "key32": "xKrh7j32WJCkgoD8dFePp9ssT36A1PjufNjku4rcArVpYJpYZCPVpsBw9Zcc1HPpeTJL2WKiJEwvwgL5zme9oho",
  "key33": "2s4QUh51i9Zc1qpceRVXequL3hvUqE3DcBFsuKf5krbzyKTbFxdHZ2Sj1ZUEaFVbzFCpxfF2LDeGYT4YcVDouhZP",
  "key34": "5hCJxaLyYHEeXZULe7RL1pXUDabcG9Kt9CEtLfjh6fqoFrwxchoo4ZVzf5xYxdmGP7WmPmbbeEVXn3mNHQm3r1Y2",
  "key35": "2FCM7hHeHPnc9FrrSesheFJRoP4836mKHzzZGdyosH1gByJudjxH8VTiPoiANVr4omkLH6e4fnnMYsxe7MCifmog",
  "key36": "DHEv8WiXCxNXCBLKGrqn6zQAH6jUTCANNatUHLm6Rz7nmfygentBKdfMNePL198i7WhR8aihjxx4FJ1zBN5fSQj",
  "key37": "2AbsoBJcrb6VKKHwCJvTQbxrayeuu4aZTdrJ3vtmnUokWiYD73masn81ocYcXgzrB9r4x9MVoh6N76d3T3EzjSem",
  "key38": "3uJRsXkkpgskZH8x1cMPtThm61wAAXTz5iQAqEGjsp9ziYEJssS61Ju4BRbTngaP6MPCy4NCFRmN6pFosfmbaHwm",
  "key39": "3rBQCSt4PRqHyQZ2cJxaFyDjoZRKLhxKkM4S5U98FPAsX5uHc1sEmDJz5PRCraGsezHLvFXYK8k9stHPxhx2FKiU",
  "key40": "4CtCqEiqPbYsSnNkxeLrwZpZeChDCTp1emjgNjFoCMUhqza5NAdNDGhXvoTSJ4WZRiky86A7BUfbyFk4hHW3VnL8",
  "key41": "pUNLiNiuCLsZne3ntjMuoDfdoosaPSHhLPW9uufHNa7BJh8DhvpywS9WYDczCjTZhhanyLTw6qu5VLKKe6EvMyE",
  "key42": "34jysw6xRKH43ZkZiaDc5QcYPcyWTv2SW8frBRmKuefySM1WH3aeV4EvmfvrNB1hMJgYbdhMz7eudU4tfoo7V4iP",
  "key43": "eDkqfWf1CqfjW5bGZ3kaHmmqLZjsCjnc6FLgW6cJWHwzH5AtbnwcobquzmQcZVVQfwGkwTfdGa5Gjov8cetWqgX",
  "key44": "5TdF7ayxvCaGRnktqcUcaioijVMECtLJiacppG7bJBTZd8X5BJgYQMP54UtjMhhYwtfTW8mq4dSt8PndsbLtiBeE",
  "key45": "4XeGnnjvuJNqm5RBNrk8y1dvckSXRSYxqYE118sUT21qBoehy3S6LRELwH86PGN5UHepuFkNA8Vcb3wfC9Vsf4LV"
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
