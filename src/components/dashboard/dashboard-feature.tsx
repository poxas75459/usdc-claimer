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
    "A9GkJEZYvj63BBT1Yw2x2gBFVBp5DzYkpNjaSD5Pf7UjHzPooNJ37KfK7wWhyiMPaHyYJMvQiHrryqN2oaPQK9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qbo6CXCNx3CAMNMSeNwn6SrvowutX9p3cpNkhAZi7wECdJttLbdYTaL2F66LhTB6nuKL1Cs4Z3MbhMUDa3iK9VS",
  "key1": "5UqVWNokszRB9kG5WFZuPzhXfhPLAPgPRUHqbYVitE1oS7MazjsazeE3YTdwFdxRze2a5dQbWJdz9mTUC6Qq2NXe",
  "key2": "4Gj56F7bLFaDGr92Aw9gDSobU4jrP5Z59MyJdJfuCBExsz9ai7P9R5vBXZtmMjxQm7xeFryr3jJU2PrDgnjH2FFW",
  "key3": "4T1L5ZN7CqEKkXY6fcZXz5iSyhtdS6N9o34oR3mfDsMiFRnoBEo6bpK93j1dTTgicKEkTjwgssKJpncC2iaYziPQ",
  "key4": "2sqKL5pzB1kumxvUtEBuLmanXnLaLPVhm2aATyefbytgnSN2KiMzEAczYqH8kEqrbAxwswmebHD5X2dJpnzA4FXz",
  "key5": "2E5UfD28nsD6muqyNL4MRoCGPZCq9aAjTjMYEPQvSqhHXCnBVXwFKDi1SGkvJZpV2xehBmCq3Ad2ajiZyiGY3Q9r",
  "key6": "2LCer9F4KbZpq4VuwntKyCRnVBhtWJGpm8SKxN37yhZx64raQASnApZTjwzeYRDHp5tMd12c3L2jXez2kfbJREKU",
  "key7": "3BkDv1sXGdhTUvHzZaXVKewxqKTMdA9NGLuqdRUYUxhtaBToSZh5gCu2fyuhAqALcbyUdrZjLvLoshaPk8h7JFSZ",
  "key8": "qvswDC3kF4TfuU7eUJD6RyjprroV9CWNPJerVAADpjUBEetMrZ4boGXbNpSHaixjNHSXyf53dmEJAeRJCyibwij",
  "key9": "2p3hgQeYwR2459sLw1eqAifM1WU28hf19FDL9oVsMfjRwbzQEMcjruAYjfvP4Fwvebq1bcjKvZLsm7wijeLJHJK5",
  "key10": "4U6vjh9xaj4qZmNxNugabb44p3umdYYPs2u8DNq3H6VWKbVeaLuY7p62jywSipRawdRo4W4EN2TSjueRfTvPqWUq",
  "key11": "2uusebaJt1w2dPxY3cwaZF9m1dtkwzBhgWLqQfa1NSwjbkpr7RaLoqRz7mCkiTzANx4RqCybtQGGSBEg7JSouqk",
  "key12": "SbkKWQKkfrD7JfftWJT232qNfnCFxAcxbsiBF5wSH1A5JACfuZNJRGboSXpcdnWCcoKN3pV8MS9TdFJLKGnDnq2",
  "key13": "4VNmFf1URhjR9mg5FpfTQZbPxgji4k2QBEppGQZJRqzJjeA1Ay3LCipZJ5ikVGKEKc1bhnJeTFQ8GQzttSwZUGsV",
  "key14": "4QkkVTatysmUa2Ei6QdC768tKBqMJr3s5gDUuytdhrUCF9cw5aYMjiBKi1nACzKXN5UPwmQ9FAHY3RhzUopohM29",
  "key15": "4wk63aNb8jSCWycRyksdfXAJvDvXkuozAdgcKoyES4aYj7BurNtX5kV1uXtACceHP1VNKrZnkoAT5f4ydQ2iVfTg",
  "key16": "437Rs3euNzodA6w73vU8SgKMGs1wARE4oudNLt3tkQQ2jJnBT3BJkGj72NRvtQvZPSvhSPPyK9fKszvxbqR4nasQ",
  "key17": "2QEk4R4mNKofHMMamPGHUpjEFKorwyxwNgeNxE1ywEeiVSNBnztoXYvYjxKwuB5x8tChXfQpMbj95WGVA7kU9d7b",
  "key18": "565Le1Gjn1b5dqWdi74vcWbPE2t4y3QMZck9zu9rQzmsvajvNPRp7mq7Dp1gyYyA95cGZJjeYTa7oMnb2mFHgVn5",
  "key19": "47oyu4hu6b7ZzGKaNABkpAFvixqJEUKUmudKZSPsFJLaTvz3JHqKQFp4QFfAKkZHFsdyMLTjCqL8MJFFG17zhAm7",
  "key20": "SrsaLHznwTfoMNReiBVy8T4mY3WYf8Y8JkDjDh5CfibtDW4mFExZTCtNXBGJ6Tnt3QB5KXPR7Cn44B3c3MXbn9j",
  "key21": "xvHP1AB3asNby2fC46E5DmUCHasUTphVPHyymi11MHmo3mkR84X9B5P5k3pN2cCibhF7wSMN6XMQpFVGeuhRzye",
  "key22": "5oELjCkhT2TnNCNmrayrnRgCRn4ir38vakQFkPHZinKjAgU6sUyb5twEQVL7GhgXDRfYYCffEJMZKpQ5vx41xnQJ",
  "key23": "5xPYbicQTEmVdxKox27s4jEWS3FX4PgneoRcf1aC87g5vrMmmiNHhrz6ZRgUV2fgiLrDdHGViwm3qPqcwyBArpeP",
  "key24": "3PipjtKurH8ucdJPoZBp1EdbUdnDJP7KvWmVKE6DVVVJZ7znNZi7qXQ3FjeidxXd6owSsY8ifLTx6AdjRzUEK3Eu",
  "key25": "5Jko3HzjAW4jqvaNNQaxeAWTo15XDKLZXcbjW3wKsbhWT7qN528eSrNY1g6Uh9WfVjcqzcHSG4zuWqvAAo2aoxxS",
  "key26": "cmtxt4PDd6LYeDHAHPZiiXLMD4Cvc4dhAM6QhbGLRf1EAwvJ1ryDrb57frdwu8bcqYTGQu5DjUKrxpxEMLXXqQx",
  "key27": "5tGsyKRYTeJkZaUh41cf5jqR7qXs1S8PqCek3iJz3GwoQU5xRygu5vmoqmjAh33FqPKKW8yiVo5iGJusMgbvFtk",
  "key28": "4TmSxbvZ4SwLPGWp8U9AJs6Pu6g4xxC1bSWYfckReis1NX1AtRwyq4sMPKWFj2eDtB8ggq2Q5sU92Tyn5nLG23tA",
  "key29": "2PybLEJZmTo8b3u8foHxNLjTpg54HLBzb1RD9YctZ1jx3ymJ8nGm4AetGcpc1VJHwJZnyoxhUT1wNhBXxyQ14oMY",
  "key30": "614HRz7GbVFWFzQ14gv2BEQpg2NDvYWpDWtpooJyGGFxPGhJ67Z7xD4kXaTmio48KE6T6CJ5tRaPSmv5YHw4qs45",
  "key31": "4E6aUt7UdF9f8hJobxNshscSDwETdwxiQ8Mtb4bAQ9e9o2fFj9gXqDSFy9KQjh3Vcw5CKwsY3WkRFUSAqjW5XN8P",
  "key32": "49C3bQ24fHzjkymCzfhk7RsrvH9BPpDrHtdpofZiwf4ahcKBmnQjBok1Fanp1CLMaXjzFSnYPsi1zpQ9N5x3GqA6"
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
