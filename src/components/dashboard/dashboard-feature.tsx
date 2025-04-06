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
    "MuZBaAQCZ2burmfVPzo5HKZw4gTUtVm65HV7pBR8eAUHbTjMAeNDtE8B2wzXXfmPVJ6GoGPBX6GiZ8Y96k5fRWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K3U4aq6TG9Zwz2QokJ8NfW6Azv6fyc8dqdJQ1Cu134Wap6CgzW6Hdid4nUBTqwWah1kQhzbwEEGaZ7shd1fidi7",
  "key1": "4yxawwjTVSCp9zHjTmjUUePAnu4ubT1A7pxkMJsb7x7NG8qQdajkeAe5trDohr7RQFB99APp8hUKsJbb6VfLQKna",
  "key2": "5fqN9nsye6o5BX6yNYABz8KbbCZ6ASFQZEv7UURoYwc74e1VqgM3S89uycHBpicXBZ8BheFzvc5Yy4aFG4hnL942",
  "key3": "28agtEjUss4gwSp6SYkBtd2u1zLgw7Umw9f2tU4Z9kuBy75rCmfjeKw7cfY28ke1ctNAPmd3PibXWw4Fju8Rjet8",
  "key4": "48HzjabjEdQsHxMPXuzaKU9i8GkMcd2Qn2fyce9v6vH7aY5rEsp5sS4rYHJa39nBApp4QXn3ZHtSe7xtpfvjaTme",
  "key5": "5D2HSDChMZFwi2n12UKMyL6sQbdbJUQE39LEZm68djcREP959c1JgCt2WnaKKHrPT5nrikQZhk9SmrSh5eLjfnPX",
  "key6": "5kPAvAJy1Gt47aaPjTx4HsP2v66JrNYNjzsL5RRB7mNv9TZtghxRLchKqpLV7EwHuanC6wuX8NM2aDKJyJaYUQV7",
  "key7": "5ciWMJ7TRJ7rZ2MZwLF5m4Cp8DbCu1LBEu8czxddMwDvY14pyQ7kGQuVBcWz7xRy4uBLD8AGNJqTwyZtkTs8tsxe",
  "key8": "4PHix5YTnVYCtwmWVbzr8DkujdVqrD45yzf9vintPvY5HZvaGCGQ9wp3c4DeBHug7UPk1vAXKHPJ8GyEcCk6y2Yz",
  "key9": "3Mc8KALjzQUKLwfszA29zpQXLCYNDqBh148stxk7eV8VMN1e4ELb54SNaiYuCGEQmxcu3QnWnWjG9Khp5fKnH3Uw",
  "key10": "4kB6KzkSWewoPNLAK78sBhHNoCBLWZ1FVymZiGpyTdUpcnW6VFPvg9XciXL9tDRfaqfdjHPgzudZcaPChyR9gXjB",
  "key11": "2juqFpo7tNJiN8bxgX6EvPeCFSTpEexWVghKQaxYsvK1sXeUc5MNMnWvXbb8LBM7nKxDf1dmG5eGDK8AzdrTSG4y",
  "key12": "3UfgU3njv8eY1U8MWUikqAUhpb48Lno331o884zoN8EPTRYZV14uYLjapqa8zchPF9XWXyb8XLQwK53MmwR7Pfri",
  "key13": "64zcEMPkMz8BJRtNk9DCkL2LDr6mEPekdCnkQxdSxa1E6bShvFweSKG2MjXz7amsqJEmhjcKRw96979rMFpinopW",
  "key14": "3APAFjhEbZgcuimz7HHiVR3eRMamtLxEDkbcEg8qREoFTfYVXJ1AbhE8SPsZ7uih4TNUZ6pvoNgj1cRxvnPdUnKH",
  "key15": "4fFyJqMb4JX6QBaGaZv3LE9MKJP2SoRMW6gw6nUMKKuxFLZti3mzpmuiFGDDi3xoGmUYnjxdSgp5YzjwaewVvPhi",
  "key16": "2kVNQXJ1dRq5QUcMx9Ky6oQiRzwFARfo5FCSUPtcyk7G4zeAFGyGigPH5htKQmbd2ohJV9N8frJntXKjFptP1hpy",
  "key17": "5ep97VPwzqTmowhDeLMVapDE7E9HAEKuocYtEuS2N1GhFGg3oucyEfPyaEveCk4MtExX1MZK8Q6gLYWwTrxZMweJ",
  "key18": "gUAQiKxz4FnKrJAGffzi1gQhh472yCwkMXGX67Ru9qP38swzbt1QkRkLWCmDV9UWGYfofKRgZiMpDJxgf9hZXuz",
  "key19": "rugw93mBg7uRBj7vkgyXwNzaAyAWDSjN7FbSQ7Bepwz3ed32xG1mLdwG12i93XcJnHjEP2NavitwmeJSX6KZbQN",
  "key20": "4DLDYXbTwjJr7Zko7zwLxBaQw2ZdPHPCERGTdmotDRuU3Twfcj6k43rVBx2wSz9kyCaYLMX2sMS92dgYqbZ7QiQp",
  "key21": "3GbCp1ufQGcFSvszyD9ErM1xMyspMY6XXQVT3GMufyZ95iwkqt3S8hYGs5Lk86g7to3Eqr1eRQWxd95CbBha4cUb",
  "key22": "3CRSsaa6uqmmrNWGxkpN6atoHnXmAszu4A1NmrFSyJBendaXiPepejWtVFNvHme1Srg1RiwGZHoPx934e4XS71Fm",
  "key23": "47qkQ4kiw3JfAEhstHv5eKVE8tDfkqcLxRrkkdbnWmeRfEBnVHbFjWAAoP8uG6GdsUfrN7MQNSnyB6Ztv4fyMuNs",
  "key24": "4tdfLvggz2WP3p7Zvuw4SniJznLsWtaDn1M6Sw5JvTJ6yTNqo4h9F34MfMGog6QY5yBw4QPPJ83KxVCgHQgYTwjB",
  "key25": "3uYfvpwdu4mL6hrFGUfir5gt6WTZdsP7MRxQ17comrhypPVvmKJnBHU2PLfs63X6SY1XJZgyZt9JuibvqwwDjYex",
  "key26": "2jd1osdMhPqgybRSvpqc9dhttZc9sbjh22smXyU5ws9cjieoLfGE3FZHzQajg1zVpogaz7iKeooC2mMJAhhmue1o",
  "key27": "52FNJuXJ51dmVNnngiJVnhLgwPFLatNGuZJdMTawwi5Dc5aHeajtSHQfdAt147G3hUtMCGmHYmQUGDTFireZ42uW",
  "key28": "2GXbMuQbsRTBLgfLQCLLVSMz3vdEyKtxUH8ZvDi28hPMoV1oNc3HL9y726xg84zuWg2pWuZ4hW79dKPcE761YdXv",
  "key29": "5WPRdYNn6At6HfGYHyAA5qBAu6NgxcFEbvafqjQ5ykeGexiNHB8VdPwjZ5qDgMjeomSzs4XuNXYaWLPVq8u8SkMn",
  "key30": "3uG76ApFSD9QRWvdEPDg5rqGd8uapZmXf7EbeCUpR8fadtZY1qBKPG2NKQezoo2F9uF7GCvHt3fmSWcBLgFP13hJ",
  "key31": "5CHHZUpYXAH78FT2cAvGEDrXMMo6bcWuBGYzJMEnKuG8bd2bHWrQmevKuycm9mFD8iQJ4KdFJwwFRLdrKELou5VA",
  "key32": "2kwR9BmVBjZ3hfWeDtWUzaiWjCzdpJHhhu1rcxZYFy6nCYVkZiRkqtAobvTzhXMKt4qddLNX4BYYGBsDYAxeFqwi",
  "key33": "sdEuMuTuTY5mFuSKaeDdMK7KT84Fm4NPD8VjpmnxMP9CxVkMdWwc3mtuLLF7NAUowAon9PvSMrd2GsqRYnVDRpb",
  "key34": "2m6AafpVdAkboYQevjV8NHS4QpSrKdVa8R8YHFzwmLJidmRuG8vQa3SmyNcPKV48S7KQ6ULcyhvkQoTxqjxTaAjt",
  "key35": "2HhgQfxFwdAgaiu8GD7XTRFe8GUBqD1zBrSRYQWgBbQ93X6QoXHwfeABepmTmJ6aWFxkmZTBS7HvnB4iEFoD3Zqw",
  "key36": "Aym5KjqDkJaJmohZYPta7DcNPLWxDBwR6VjX8v5NLLrisdoDTLLVd6GSKydH6Xehr3Z7VDY265RcZu3YiE98Cwf",
  "key37": "2T7osKXdpzmZJjvjQSuA3XizYi7nJeFHory2t1AkDfRTeMPUqPtGEgWjt5kvdtvWUQL3evoRZrdJkXR3DvAFoNX9",
  "key38": "3xfrpLLnd5MRMbYz84847CGkrkFHZAeS1iMHQdLQgwghJgT2fbAnCZfYNq32LXnHoGTg8yHjYrGNRkXrB5R8Husd",
  "key39": "mFmg8Pgqborqe4Rpo7xG3vxpLbaAGzumjJArWyxAgweJbX1vZ9m1VJUtcU6Uoj6TWQmePCdnjiYdSnXuNvM2gz1"
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
