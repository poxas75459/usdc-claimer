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
    "3Eqsz1XB1x8APfMTsmxEcPPXps5Ky4hr6b5zdU8cxhqPzAXkdVpvdzhCJg4qry2FMW4obyFmKCSacLRBPQqYcrjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KCrX7yuLSuqwnJS1LQRSDRe5vzho3XU6yvSDvLctgzCzpDMNBykbchdfcMM2c7xGwwqzcguA2ujjyfe4fDLtEcf",
  "key1": "igGizNCw9Aq9VJoUJpooYbCpapkzNhUNjC9oX3HvSoDeXgXAGonNZs2Cs1sJH1h6Lk3QEU8k1jWyWckjnh9Sbr1",
  "key2": "JWik8Sy3zZjhdL5v4esPPBEKhDoCzhgvBTdLFxHY7icj8r25Kfxuy5vcyYqoqmuodukyvQDxAnti4ju6wFvBDMU",
  "key3": "jsoo1j4zeho3ynSPMDgmP48y2YBQuWEkmDEFKzT9VuubEs83iZ8cZJuzySQ6wyNB2x6m1aozoNoJGViss7RFg72",
  "key4": "5xRAN8uspvU15VWLYgpxm1AdeiF7bcT7Juj3TZKNPjhpVA3axZ9CJSVPwqQ6NsWe9HnzRFHYQKeBZJLvu8wpUNd2",
  "key5": "5rKfXW1Joh5HNdES9VYMmmdXs6Bm2mX96wrX7UR6eigA2sqsxj2soXaSq3XFSqcjNxdWaVm73aSYsNik7rJ4KwXU",
  "key6": "2pj6okND9DzYxCa5CkGfxC3o7zp8JJNVq2M95Yy29k6GYfqEVVN22jNxLatguFWDTvnsJAhqf8MBGiQ2GqunQZsH",
  "key7": "3vN5bdfjdT47gEdgbknDMMSRVhbr9FK6VDfqsZLjCq63jLsqpfmLgwH7qwMea6RS9J9W1f3nsdwEG4WFKPk3Zr8F",
  "key8": "3NUicx7xwLRSPscVuwbs5ehH5MffArXkeCcerW1sKHwxT4BmDogrKpeK3J6tbq4PKXc8iBacELwfbotDnaHCtvbE",
  "key9": "3EL2F6XYZ37H5BTmrxGwup52mhHRyTvVqydXBFPVgWdFVGdUpmYFiSTNx9HNh1eFAgPM15Y8LM7z9tZqzDHqyhUG",
  "key10": "2eYuwBSFztWYgmy32kRwNsinQWCUKN2N7mDt916jcE4RZEwdHKqimc49fT12aReHiJDXN9pVG5JJrRHBGatReW8B",
  "key11": "4YyBz1g1qZy2TZcd91Uu8Bq9QkBH4N5vyQh5iR7kdgg2hfCcwGgRotLvTLmtP5PYkdWv2H9M6bGyJFiLgFQwjR1u",
  "key12": "4k2RgVKx2LTGGsKo9CnBKesLUCpFgnUYvRfhcqfwR7atvmdxGWbH9WS9o5uBxqN5PzDDe2qsppQGfzB4xgqr3vgB",
  "key13": "2DHn47aGDGxGaYBrwcD9Fz5ymipzYwqZbNoe1bEGZDw9NJqFQ9fKbtcVDg5SwXmv2Qo1LGEPj1i3ssUT5hoqhQtZ",
  "key14": "2Vd9gZxXpUzj9C6UNnDh7qrPNshn8ZYQ9QpPHwSmemHVuc5ieAxrn2D4HqdvfKjESnMqbsdaSWo46Ak3tk6R7ybo",
  "key15": "5VJNFHtRVAenaRa9CWkYieBLj4wQ4Qv6wgZJLHTxfxkpGnmcNrCQvQfQ3eGB23aRtfvctdQ2xqtMDfnmdyrCEULd",
  "key16": "48JVemwf3b7R92TdWEcsoXqWqpn8XBS4CYX4JtdRpAaEVCoTsRjbFQ5QtaqXybWbXifXzmgtTkAH763efcW4f7Ri",
  "key17": "B8b5obLZYRYR8cLT6kRJLyPdXYRkAfCVMcjGGanF5dYiyP4xXPJAdrjfCzv57qJnkuoi45ouMPPFDHKii9PN9WA",
  "key18": "4wFCfNvMEB3TKvpnaYfiTtNCfLhLVA5VxBwzbfMo2CfUoU69Cqja67tY8k8SJNJAfUHkkvS4GS3UMnjSdRcZ4oiE",
  "key19": "2mVFWgy1dZkauZhHqe5Ra1imm5wLuTDsgHWuPrgQZGGGfAHPzBwNnq5hCbVQNz7sfqmDiZ1H2bJEcXHgCbvFmkWy",
  "key20": "4Avk6xzx9t44wnGhiJH9ygNRRp2Ms5xEZAe9WFKdLuubLtXyHnviqVc2Tos68jrbYwX7Px9t4cTD1x4FXt3cU9Dg",
  "key21": "3RcRTM4FxRAtRp5McheJCHaDFFcFKAySPPZVJvuBu4QJtmFw2oHQUBg9YzhTyamx6pUJ7s6vYC2ZUqFLtPDkxyys",
  "key22": "i9fqRc4nJRkLFSeq1NMwFbbiLeM8wzmcBxPYWaNGj8iJuCbpsyEDnAhcHWedwY71UQcsD48mKxh2Zraf9TL2mb5",
  "key23": "5fcsDgvA5hsanobnTVzonkRUVWMhXd19XWDEom9ofH7QFWiVHomU2wPhSkFoPe9xNC1BH4iUGn6yuBcqamPC3ywK",
  "key24": "3xpGzTnxvbZdXyUke816F9oMNNmKnU6XXc5WeX1aT3hf1r9Jg7S9e63ygoziMiEHVXZFSQi5b6z3Znd3dDe1F2S",
  "key25": "23vT6Nj5meqEtpUAuJsg4MymBeFcjS4YGZsLvs8tZAtWWDwUMkY7NLFvPwUtRJMFiibct7E3dEkZKMRKH8uTktNE",
  "key26": "8w49MkAk22hUitk7Jwq9UufwmypgQovjTixsAPPGiy6fuX5N7GexSx1vtjsUfKtDT9yoNow1D36bfGDkTqR7tuk",
  "key27": "4iDtHo7eruPjbeD6wy7LBHDBKM2PLyC3w5Zu9Ffn8zijgCxbGBBapyrAihYS81mbG5EQ6WfctTrc25xkiMyq9Pmc",
  "key28": "3mxh56CarKwFZwU9QgXmnECxGXmNB2YmoeHCvvwrTFz8Av1cakZrUvp9ULZ6Vsj9zDgvNrYu9ssXFPvdEH9G4QP",
  "key29": "3tZjkJVcD7LsNopvRREfdWi4KumPa3kEjbupF1wpptLoJWCtLQU5kEXsnuyqtMXnfojtC1D2QwVgE88Ki8FynSrQ",
  "key30": "5Kp89g8isHrmAQ7F7bmUmDCHg4B6YvfNPRH942PzJcnxGwTJ9Rzxoc1mzcyWf8MXpbzH1XuWUwX2Toog5CP58nnt",
  "key31": "3Twe77MagaA3oejyZzqe5JK7nmDeSi5spww28P4Jcoa1vdUewprrP7XJhXAGwJvhcKKULdHuPqL8d2LKkPD66Vuz",
  "key32": "4gxMwRofr27w8QaSxrDv899D7XZCZ8Mrh51bTrSAu23Gkeggncv8iF1uYVbv51tEzi2y8W6Shp2b4UjfFmF1K8Bs",
  "key33": "2i785HQjiTXYWCcDybAZvrZuuUdLpyUbyc3Eif2Tpr22R2Hfsm2SqBnCxqLwTZCGQVRdnh93QSkrpRduBT8eRVfa",
  "key34": "QUVmNqNddgWBtDPaD5fhNsGvTbkxNfU6aA9qKuuMDMDb62EHcNa5X33VAjs8woE4s4eLt8QQrXVuz2R4zRSPRtF",
  "key35": "vS4PRu8QJjeWQoX2qfQKu8w3GvX62cfxQty3ENwttKY2u2PqGTSsRzqujAWoYrjuYKdJ1kXkCNWPu5sqPRynxwa",
  "key36": "Rscy1Uf84X7gBbRSkgQZKsCGEo66fLmcRLh1uqzteQzGg6pKaPdWfo8UZhCFYGgwekprdDv7MSdQsJwSYZSxsQv",
  "key37": "4JvVyUgiv363u2VQXSxstAvsiemPwuRbQ6QNhwYiAKRwybifrzMLwxPkh5ikhJdtGrNoYuJsVMLuyzU9aRYcRZ3Z",
  "key38": "4Z8nSeWgXxQbjEjtNPEtc9piTLJweEdLFJRgJDXxEgkb1EY9Xc9pDq92ipaF89b98bShBnri7ENWZE6SpoT5LEZr",
  "key39": "3KtCgW97nwFH5w2ezjT2GkDebvKMGHa6Cvi13YSvjowvPjrjybqnT2jbwQpPAc1Adp9JUm6WwokPbLybzFUgJAwS",
  "key40": "4ei6iypha6q9RR6Tv9iTkkZ6uRSHMUWobdKxw6KrHq6BLHKuJdhkaYFmGgWwqx552dfpBCJebAQBdCAnNwhyz8Fe"
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
