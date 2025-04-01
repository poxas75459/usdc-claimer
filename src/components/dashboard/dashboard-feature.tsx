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
    "57hSG5Q7KCCwDAhwmMnNHKj7nyNPGSsG4DV7A3AS4GRGny2iCaeogXRwFy7jLmXQpqn3Jeqpd2yCjgQeT9tm4ai1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VobDEtZyhKLGwdJPYkSM7mW5GbFHxaLyvHQM1rzneZu8GjrL6kRTmm2HGdGiXnm53X3tgbtDD3PP5pnyjAHh8au",
  "key1": "4iv8LVa84g7VVfXxeDZDhdUSL8SND2Gm7jUnDxabzJRcbf6uEK2PwbgfabHmAKw9vx6oARxutAjefpYWpeQEVCu1",
  "key2": "4ayj5prWjYsWQDsZTeVnpEXRA5rW9YmcTfrsUfEvUpCp6ZxnP4gmdm6GVcLmrLHY6C9rM7RF2Ts9Z6Z1KvLAKyft",
  "key3": "3X9ruzRT1T5R58pcqUZYyXmXeev7JZJto5xfDJJNYxA3zUnCtrR9zBVSbXXvE84kU5ys6319ewG2YbP8AwBcYWAX",
  "key4": "4pTzJD7CVEZjFezUFsYSECtpHbDvZKUhTfG54QjKAWWGmZCs3zK7pAGDXDdtbxybp8qxK3z6WoRsupFSfxuREKFX",
  "key5": "2EPJgz1MvoAFR7aaXt3UdVRq5PGGknvHy1DVPdvXpkC1E5kEnJM7RCE4mYq4CEKbZ5jzaxt7E3dfrDCHJYWu6o7W",
  "key6": "2iRdUL8ECJGvoatQpWyHP3a5WtUeguiJRqBmjM6oP3dBdjJLUmtgUtcqc4yDZrG9W9KPgPndaSMESrP8iZ9w3F9s",
  "key7": "39DG1dvFMyaBnZnqCtikgp9xrvm56fqPK9KzfVJt1HP7Qn54nUZCKd4xZsEHfeg1hPeXtnt831d6rmGqZfbyLu4Q",
  "key8": "54suLqgcsESvn7BBFg5oKNVQVqumk7Pwiwow1sCVvv2vdiZRiWYySEUdkGrmmY9tJUjDB7RsgtVyByC4UHBUuZhp",
  "key9": "CyUp55Jrz7AXckmpHkxhVEyAUd92mrWb99du5jTN6x5mtAyqKSVf5rrCX5VXhJ1ugiHsEUNAxid9RBdyDUmyeir",
  "key10": "3frLLdYjcmRfP45iUaoaB3CcGgYqFLHTAY8kxdWZysvegwapKCcTJkhFxFRE3M4ZuUGAwWFqiaw3NkvrzSx5HMTw",
  "key11": "4EHmABayh5MgjaE1vbezSYn7VHtjgdtBczTcqaHv2ZuGDdWRNrcqKDFy3dfG514s8pQ45W2tj5ZPB8s2Nr5XJKNZ",
  "key12": "2iVraBpG1BqqNDGVxoRcAR8KcReMxhcAPUCCZweNShaTaTDWbTqBd5qqFsqhuNjGCyDgqUik3GyoFh83S2AkebeT",
  "key13": "4PwT4NsXnBNc1mUsbK37hvsehwBChpH7GQTKNoTQQUVPNRC1QujJNLJbWcfgVdZMbVtN1s22Cp7zAM1SYwiRzD8t",
  "key14": "46bncnVJNppjYazTtXChVZsT556k9gQ57U676iYMB21m88SaeXLStjZw1aP8yhPsQFaj4JzbWvJFQAeazgLAgtmq",
  "key15": "2HgxuEwFutcbA89hrndThKMUkuNKz7k6h1Mo1S13BDeiQZzoYQAHRVH2Gw81q5eGUC87J43NsEWUUh5NoYSVRmpA",
  "key16": "3x8GBvvCdTH1GK4EF3Kc3s2taaXGYWtBwaRZus164kBqgZFcom1NxauGc3XLFQFNdLWVwD1oRhbfsvkdCkeiMXyk",
  "key17": "25EPofZKv5NMpqpmejYrdxed5i1QB6umC3agtUragMXoPmW2SgqjSeCUm6JUsuFPwFvudqcbLHyySHJRySh4cDdd",
  "key18": "49RCffoUxgwpxesnoBDsz3xFL5ENpyENZoPYwLTLWabNs8QGVAianLu6A8LAjKx42ExjS7XxyswKTj6Mxqvwuanb",
  "key19": "21wVMP7YKvXvyQiNVUtyB2btkuxLXwxZAVfSGDVNhJN62aKZdkRwfmPL133jwEDEn7iZ53C2QjkU8KpdUjhz2fQQ",
  "key20": "5MDhz7DHde6SwdM5JLcmjGgaUj2NikG99x1Qzy5EFczjCeYZiAUGmWNQfT8F54D5sr4McmhRSb9Kxk3Ks5wKEUdL",
  "key21": "3SQut64RRPEiwmyPTmuSQY4sjW5hAzLC5Lb2gvkSt2ywWjHYpXQMM4Y31PArQwNeMSjWyr9XvnyeQ36CTrFJWUdw",
  "key22": "5xPoQ5DtwbgzbeZCqv4z27qYRCroGo6pvfYQ4MC37jm1WhUPf6wKAornkyamainSsvKYPK7qmsYCnYyHdmmUMcB2",
  "key23": "31QBu8cViP587b4Qgtv9JXM9ji6deMQpX3LewHBbuFuGY7K6Lp3hjR1Eur1NfjPQBFCqEQkeU6i7z4tWDFqmeXNj",
  "key24": "4YR1qzApn3h5pQCbztVcfAKy4o1upxxP6Y4f3WE3mnmf4z34A3kA38mGDirmoVw2BhM5psQtVgRkvCWGXb4hEbpQ",
  "key25": "2WvFdUqgm6QSmD69GjLAA21f3tGZwRJQN32fMS1n69kWQ3rSNxMk7L8F36bKTPWS69Y4AdQaGCu2WXNdB5Yc8Yd1",
  "key26": "2mMQ7vpuPdpmLexhyT4b7fdokyLNjyMjeQTCcXj3ACftoe1Rkc4h18ZBnZVX23TD9K63WT4gZ3C3khRS1ed8tgas",
  "key27": "3A1vcoMQdi8FRuiCsMmb1AkRBGiSGZFA9UZ1dECV34xupJ6kmHJQNzzjXYwuXw2aHtaspszzcBDMhrQvwwTSwFmP",
  "key28": "CGa35YkFmwbNdzga97zR18PWb2f18Ubv5fyKcbC9czwxDjbhDXBMa9Fq7ztfKYzL869gqyYzG8J2uAKtzTegytg",
  "key29": "37n9pxpE9rYt8r5rhbf7bZpH8Na2NGuvX21oqPn5wDAU37NWjC8bKC31J5k566xcXuAR6D7NVyftJK2U4Pwwk2oj",
  "key30": "R1MqxdXR4cZaG8dmGwCiA7vgo2wGE9SKiSPbou8GunErxGNRnpMhuKTBqusmUYuN9rC2kddvqrWDAaLkKcCAZkZ",
  "key31": "5JmMjkE7djxG61gE9H6KiQ244xKbZ5iGjNGptpvzPrEEf97yHHcg5xrS1fpERMQ6ZFQAZZqfjWZMdT2jU4MzVof9",
  "key32": "ZypJbseBwGfGRK89GaDhPJtHHUWRr3J4hNXvaFTy7Nzp8JxQF2hVNUvMSWXZJ3tynsrKrz6hVPYYc5uJEXG4e5N",
  "key33": "4xweeUDmSvCZLvgjr25KjWUdLd51JhxE9bniWhFGzimH2FoqrKRKGx9sLZqq2yFdSZeRYzaBFLWavvyLDw5v2wwD",
  "key34": "1FCrC2kNmx4LaKTwhttLUZN8Z45BJXMhDuV8Uk2AdfKNMC1Tk4moh2ypQcP5uQPxe7FmFBRhJzYqeNxh9MShGFV",
  "key35": "3FGXT9fVxCGw1Zfi8sgPQXS5jmMAf4aEAXgCm9MSG8R1VyEydWtqY5Pzc34iw4ufkz4Zrh6sB1PqGMsW7JSajhsf",
  "key36": "5VMnzgdbmHGBSe3814RkczYmDbZ7j636XeWRda9Sn9mAuG3nBHdqj7rpA3S5XaNaPjN7cKEKPwnk29oSFVXcj7ex",
  "key37": "4Ni8ocVHZ5VQzJHbu5BcPjBWWyugaS9iAxe9q2NwGcY4oRJrFdv7FBymscyj8AUv6xvAgSpM4ZBFLSyZSQcVdqgb",
  "key38": "2f4mk7kJYtLcjGKzmQa4WLztYe2yr1UXtyHAbB3qYv3k1wghCq7YWh1S3grqNY1mMBYsVghfMxWPfavCuqLBtCoG",
  "key39": "2bbBDv7XcUt9z9ahKoVDgifTyVMhZ7TuH9qhyQpKbVdmAvUJqeB88SrJ6NxjBDf4bNKJYSXAxBvngPAZ52DAFcGD",
  "key40": "2NkrgQZESearMF1Zkmv9nkZJVoKeh8neuHDi89QditvDaibuwV4MT81akpR2jjZdJThVyaRuzBTUNcaNL8mqe8Z8"
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
