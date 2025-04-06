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
    "3g4d7TZBKv9Hhp9FupYZcGSYevP5ipnJ5pBunCvoN915ChfR6LBRWWyZuEfw52xvFzYr9yQCRq8BxvYLZ2FSmkHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53GguEYQasAkhCn7ToV93i9KmVSsyVBFQvVsKEZCsEqVicV8vCoJnzA8diRv8vsdCPbe9ww6xL1HtwLY53v3Tgsz",
  "key1": "4iG1Y9uC5kjLWf27vfHJVzrZdu4R6sqEgJD7MhfmZkNYx4ksE7y4VAieGRLUfPcVhhrwf3iHCVzLpcBnCCXwJKhb",
  "key2": "4cGCK1H7erm8cVBREaTzJCq3j9Yf4rchZ31Q68gpoiH8nLnzo9NT22z1yrLgqQeCqvjQR6tPu1c88mCLn9K7enTi",
  "key3": "2pnqwCoTApZt5rHmNznHkm6vGrFTPr2N29K5J5dFA4N68BgWnD2UgrTZDAy8gNbmydNQRZ57mNW71h3zPsrgGHKz",
  "key4": "A4uXxHY43xNaoyfHL5Va8otjKsmuVokhUHBP74z5pPpU8EubFqEGsR3YQkD3qYzm2YBXwjLGYSMoV3ZdEwhQZBC",
  "key5": "3r4Rvryv3NQPzTAg5ASMSaKr9x8g6zBmfZPe4YBm6DpwRUiLbyqX8TFdQik3QrzVB3Uzmzd7ZjKzi2nqqYSuiy5r",
  "key6": "4y4dWNMhhz31oFi4fmtzrBsS2MsXcGyUVRSyWqT9b6iW4ntoJM7jQ1j6bMoGgbGTVoqVDG5kuzDd5dRQS3SSBAyP",
  "key7": "44wnFKa1udiGujA5ht1GfRxtKioZHUUBi8QtC8FATVDBrXB4U3Zkg9xUNYCQh6hxpQG8DWGk1taz3A842A9crt5c",
  "key8": "wHapnAvNHg1w47DsB1r1EeMdeR11TmnqckDLJ6TstoY715JHwooo9KAuLxPPQJKjKR3VGJrodsrBD2G7NG3d3Tc",
  "key9": "23SJ64XErDJnnB1AydT8wMUhGtL2pM1F97BUJWZSWJgtTRaojzrZesvQTx3UbnLB5tFwjQPTagBcCyS25une5wtw",
  "key10": "5DKBAK2ofGDxin2oaDKS8VTo3AyLRBrSDLJ8D3BEFe8VySAbkeEpLw5GHHD15w7pCGe6VubdhjnVKzmsaS8S74nm",
  "key11": "kjtFDJL5M1b682bwHb2be7YU64QAExY6uo2W9zUcC3HqvQVWm6eiofNCsAkhyewkhzMVgKXz41gFAsRZR5mvvEa",
  "key12": "3EjSjhbVZmuK6TRp74879ze4Q9HxjWL7xMxtKhrP2rQdHDmcaVFMT9RzqY8qFFVArWBUNj2AcpY3yHRPiqyPGtzt",
  "key13": "4sjUB2wC2p4RdTNBBS4Nut9oJqvdT898xs8T7J7SCBSSY1tqJejfQJEMdLazWwAT85VeM9RauwrTYuG17cAM91LV",
  "key14": "44jpuqdNgSYf3Rj582oUSPCGEnf3JGhrg62651Wh1EQsTaeUU1LP3kdfUxbpXxURAFnFE5Zj5iRa1Qf3PSKWXXKe",
  "key15": "3eL8LUE7FTN53pKPPbwz45Nw87qZJL9VtxKnLQWL4S1GtZ5rvYodCZLyT1Bb9YjQRiDjdYhp5mKyXWNVgw6e2ovk",
  "key16": "5FnfAA9YhqL1LM6xyPffFUB5bmTkCsqpVJ5JDhhAAXh9ovo1sgZa81rhAm2ScHRQ5ySaKuTxTQ3D47UJ3fWcyLPL",
  "key17": "LLfrQeNrLkVGyoZpZZQ8j1fk5QeaN817dqz3tDG9J6cyA6rin3hU8kNqBdkMBtJT57GE3v8GMGUSaw124Y3fBnJ",
  "key18": "5okJN4Ym5jfJdrFKGD4pjgXH6SJ3wkaq7xwWW8H7yqdPzXY4k8eqfjjVHLKfjXbABy2i7T99ZVzZ1NET6A4tsQDz",
  "key19": "45JMXLmdQcBqy8sTMq1wSaoFr5JcywVQq4FdjsZY5VUPK3HwT5TTVhZ2bdevaJ3zjBmULGrF6vZGgEqTmATBoniA",
  "key20": "4iw7P9XdBEBDtj8JTLntXJYCkhetDGSh5QaoHFf25wLish9jyLPP1u57o7X7EdXkP3L3cmcEqxH2NgZoHfR2JPHn",
  "key21": "5Hp7M8jYuZys3wT88XqRqihbXhQY7dLfdWMHpshjAwZEyfwWS7jvG6skp5TjFANqWTEsNskrYjaJjJYgyK5iRhSf",
  "key22": "bjfBivrbNTmr846yGhtzaActjWQUBnmM5h9gUvJiAYmwPFfXvxKvRpjpZjwKMND9Nzd1yyG9jNC4vFUhiPtX7Fz",
  "key23": "5PbtXX3A7U866LHaTxY567qP7WU6yWvwEMFP8YxVkp5yJeysU3taEwbHXpVWByNHX5ni7LsY9awDxYUoN4DjB7fT",
  "key24": "4NpeR6iYhHhkDw2z3Xwpw9hHMzQj7Uma9zi5WJzsNcYXV6TLpPSMiDWkZxc1LauzjWa6ZJzz9q2oLCebBoe2fMG4",
  "key25": "3NScP6JptSVPh8H9wq6Y6LrjHNtZVt7DPN6ke1DF1mxLkxUPK5M4MPEdYf6wLdEMNhUsU9aNZdQgnfBgxqwaAnLJ",
  "key26": "4HxJPU3QpueHaMU2TsE5c9cDQAfUFfnYwq11FywHQ2PhyZQBPiAQZQBoFjb9JzdqUofxiNXtnxTi3mqeLPiDPZs7",
  "key27": "2ePZ93tjSTzeNpFQfw2RKfuoo1wmvpNXNHVtZhpvUGQs2mb2vfuWx6HqHNWnWfREqriy7KLXsSKR3HoNpCv8cEv5",
  "key28": "5RC3NSLoqwEYdCNiz4d6GRhbfNTGaZ774yyurcExkm98NnohFWJuhdvtynhdcevWvQ7sGC6UvWDc1aPpzLX1fyGe",
  "key29": "3mqdXWgSFBChKozccGSH9TSHAnJqqRJH1bDdHyKrnrhtyzv4n9FS3JPeSNLbNY3JDsisSaAfBbYP7Ey65v3hNP7Q",
  "key30": "2T7qyoX2X63qVTKug7bABJUwvZjiQoQGDpj62MjM3NhnTk4SJM6naAe8ve5e4MMaZtMQMkvbDsfi6HHafxaWS826",
  "key31": "3WHTMeyzHbJNbaL6BkNCx9sSCgtNK7MzCE4MbYWGNnt4yEZB4VTTvu359QbgdizQUqBpd83w6AUFuWs8xYocFGU1",
  "key32": "eKVQeqziNfd17np4orkU9PcAfx3kKvjnFaoBbhNkcV6rFNrybavodbYxqmEVd4vsANr1X4D4GTP5u14t822GKxP",
  "key33": "2MQ52xQ5JF4Co1skNfCz2ZVmPLuQshsKSR7fX5GWQwWc31scv9GubyrV9RLBk9UG4a5uXTjG6cvLx7fSBD1JXPwe",
  "key34": "2zosnSyEqpNRD3MAyUyDBEmn61qet7JGkD3acMoQpUjX7frHy6AG8bZG5dCNvsaB7aTFkfRPKTYYVkufeSxYVy7r",
  "key35": "656tYEPbmuReSmwsFoaxw4sJJnM5K1pP5TSQbK3ZDoTwEbiHrWfnKNRctkpHJk8ppNK3GiXjsESHpDjDpyphSm1o",
  "key36": "2WssRRgqkLG4MPiKkGYtvAdYtCZrnPUjVsy39HeVx26igrnC3s8B8d9aENT4Fi1vxF4ZEbRAWeKf7hpXK4DtSm69",
  "key37": "2dSxD4d5MfbqMmXm6roWeYRgLPfYtRTPJ3r6vgCWYriuKQr3pfdQCVpmbwvXTKBeM7XUgeF5YiTXBFrZoFFRKymG",
  "key38": "3pREwWNXDYjBie7HBLwkMLx4TDRqz9W6PYjLb9xFENhjhTEMn1a3zURX6LhT6F8XTLGcXGZG1fZ8Gqx9mWmjcLeb",
  "key39": "TBrxz94wDMasozZwhPmoaZn18S9swGfAFYeJej43oPcV639FZgh2LDeWN9wGLroxZ1Bm3ggVGnqS1d3Q2vTPWGo",
  "key40": "Rudx7xEFoePEwJCJGdXQhYTpseKxi9dUTAnN5w9NztYcDxmcKLBJ1iXWJc9QsVEwMefqBNMP1WgDFf7iVvbNNBt",
  "key41": "5BH731dpJqaWW4yxg6X4NgiMPpzQ9dM5vxfpB2N8Xud9mswCJwQsTXk3Mhp2Zu39CK1tAKNnxSKJdye6N3AcuT1U",
  "key42": "2LCF8t9rKCZLLc35eVt5zmPm57QKfyfRDJQTxBtnHUbdaT1g7iKpqjgPzziLZcKEsjz6iCnf7sLW97pTcGGhRFVS",
  "key43": "4CJQw1kZBKQSHELfEVTpxZvXzsfdPknXCqCVpgk2HZrMtR9zXDPe8DaUzW6YxxkW9itDcej8PTJATBjqy4H2wCMf",
  "key44": "4FVnxjGoAWSPVxGRtijP4Vev3f75wpgntCaZSVajCgZa7WH2zvAGaDwQuUFKV1viUqQTaQcvYDX1xJSqTeF2DCyr",
  "key45": "5gMQdvNZvZEuvTGzHru4xGY8Jn4BZTuLzKcc56uyQGqDRjjocyqtAoWjunwj3ai15VbYLNaPJvxfMkAmKEbweCLv",
  "key46": "wyp6kNLj4LRmqVKbQrwx4WV7Lbfbczxu7ZSQNHsz2Mt5BHddRveVsGQQXoNKLcbnhFqZaaGXPkMCtrfRy7wHvAs"
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
