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
    "4RcZuuNqoHTN3bN3VDVoDyizrPXAQso2xAaGWRanfebjEJhjUHs8feKpWfxqL9w1vzzk3QkJZkFAgX17Gka7b6sn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5igLD2xnd6J5PESKaBF9gQMSx9YsiBLZ32E3cSeYFcBGcbuenKvwDJqTV2Crpf2CT5PrERSGnJxKBzFVELbWy7uh",
  "key1": "2pevE2VWi7hg5Rb8WGcVo4GxekMRASjWypWapPQLY8zhsG93h5x5UDygR7Agdo6zo48o5LCrBupVLBrvGRFXPQWi",
  "key2": "4Mk3ZCdHdGhDrua8knCK15TD1R9jPBW5MJX66e81BAnwoKCxtYVLK3kxS5Anwppp7QUWGF2q68nSu4JuW3vbcuSD",
  "key3": "4zfdVzNAyEyFhfJQB6TPwZ5AFg3CUbTs1NVqcfy15Pvgkf2ySzJMmEJE2XMhLVvhDxac2PYvsSxyMKVaXuusqBU1",
  "key4": "641VgiMuWhngzBKAhw8Seoe5z7WSLmhWPdcKQeniqdpi7vzu6em9fHAQcmHfyEGwJpzkYnNLJAviiruPbBFGvPTR",
  "key5": "3dLGqnhiV9WtWfWVTCsD1icpTuUVv6urny6JZv9ichue7qWoaeatHkHwnAgmQEv96PVGA9gobZMDbmgrQZRd4nTc",
  "key6": "4iHuShPi4A6cbdd9CCj121ng8Uuikd9kvFkc3rwmVxTvrpbFQHLxfUcDc6HkhxuZQ5gnHgiW7t9Jeux5ApQVV3CY",
  "key7": "4472DQtJo4kazjV3sbWZLSE1yoeB1eM99gj7Lngz1igB6oDL5iiSKLkBLkH4iLf81eUiHo22pKoRqtnMXpoYatD8",
  "key8": "3qTfg7aDudPRNgZxrJ2xx3txE5hRZzcCtrr7vKCG2MYr58TPccEV7wUae6epKiA54gnfU1npbJ15822EZVN2TVmy",
  "key9": "4T7GkKL3sAxrYk8ogFyzy6WSNyn6xBYrY8nqjvYcFUBQsuyVZ3n9fNh6qhLVZN2yyXBJACqXaj4ACFZQDQm39W6b",
  "key10": "52Q95A3mU7YVYj59KAyqTdQhvAWpkstYG1dHwbxG1v8T1K3g42F7x64PuMV1LeWY6rYaU9YP1Lw5Yuv9fSxNWSHG",
  "key11": "2A7dwjoK4zKXqp7eMnFUdxADRKRZi4uGY6EpaJQTe2icz2Zt9ue13ayqFXRJnbi7TADTzSUqznFxp8SafU6R6TBY",
  "key12": "33yxqicJ2AVt1SMyZrDmM5soVMwEsETvhzhgNuTowzpFT8d2rTENphqnjfK6VrXsDp7uU41Sf1AwGFNH7pm3JBDD",
  "key13": "SihCUmkDgNx9xBxX1NrNhW7eTawFQGwA7L6VnsrY9UMHvBfyD3wGommD79BTBE3meHNLwkRtESkMkaAQa1AYbBs",
  "key14": "2DRn9g3JNAksvVZRs9SLeUaq7rHcVDnh3dtZ9sozErcvfdkkwFXAirJ1ToGRg6jKjDA93RVXubndsa7dCwWtBVfq",
  "key15": "ZFtGxWTupZ8YBnJVLnHbG5NWXHu1EAffFvRqi53oozMWfSKfDypyG2evFGec2qo5nVtXSnpExvvjtYEQCbkUUaJ",
  "key16": "31CXDn4MvijeBPzkyMxKPMmh8BttATwDP1UNPHCne9oUUPKRmVwLDfCAea3iKn1hiZvrfNyqV5wBaW5cQaSne9C3",
  "key17": "34hGRnGLDSd8xbg6LgKxP6graiMtSSjkNWnCRmLrmp7JT9C4fZKWB6b3p8fTdNNtiva9AsMzPB3aHKkVHAW1fAXB",
  "key18": "5Zw45n5egMG6bUw34pseEN6KxzcvSoYW7GS6Ny6F7SAHcMgmigh5GMpooHgQ2ZrjbFmFBewkhA5iYct85Ws9rU7t",
  "key19": "ZxXNLqLe6pgpmnucWcpcUCjX456W4SPuda5SiNVDFkyH99yxQLFFxB96AMzj1a8Zu97U3omLLFnNCxPHhj5hAPM",
  "key20": "5amaLK9etUL3ZWEUKfWGJgZW2WtGNQ1sGFVxhkHJxZfMyrKd6cApUxjMEEkzPcNmyZXpWCErpzLJcoum5u8BvQxt",
  "key21": "3zZAbPQb9icU6XJttKE4DWdPtL4L5rkd1wo4ABV2xjLGE3doZrpSz1qfeoatgDr9jY6ECei54eiCD9HHNLgD1VRp",
  "key22": "4aYuiAQAczTahCTVLSAUs7rq8nBAjts5Hn5yDodd756tEJxbzADmwoJQhoVAKqwVBPiJdMyudBG3gZiHi9dV7Lyg",
  "key23": "b4ht25oSj2waMTymEZQqW7aN9ZRvh6hwg2MBTCAPthEKcLzmXVasnooGFKmFTpaRCUd1BpjNQWerhpmg1X3HToB",
  "key24": "2Ppup1WRT7rjEupn9gzDgfmnrsnJRt3S8Wbs9XjzPLRCEiywFMPGEHF4rixNJfGmiFk5teV82rd2vFbhqy6qTrVP",
  "key25": "sFuRHPXjL8KfvpkZRQwBmzi9GCg5RRZ5bAP9iJpR7jUJZc69nky1aJQF21NBaFp38pTN5SzhGNB27hFYMmdZeCv",
  "key26": "umoeheET8sQsfXVEgqBg9J8rnEK9gU26oyds2qqgbawzsjEbhYXCz8BK1Xaxgze5zTVUKmXUihFode6sU49jcX9",
  "key27": "3cAJJskULgysAzEw5Jc1h3t7HAstaNc1jvd6LvM6feqSaeGgjGxMC6nRZr8oSXJRT4hLU5S2sxFy3nR9bB1Nv1X3",
  "key28": "4Ao2QyZcCogwAFer9kss2uWAz4HpPHbMVdGmrqcP6eUdMnhg218ESR1iUqe4SqSqouZC8hq919rAdaSzQ3MRNhLp",
  "key29": "RzoR1gvQiEPhW6Juj6HHoroL69TQrfZkdpJRUEQA1kqWTxTUEwMXSmyF3nei3g9mKnw3AXcLTcsd43qH4age12L",
  "key30": "3f6ya8SSU7CBwkTQH2mcVXga7WCf2cb1jchD7Zn4ANZTxpa4foE2A8NXSiMvsEcSJfB1nAYZWNBpB3Ah5qoLdHdD",
  "key31": "2fypQv4nVmHoVEHY2DU5JjgENgKQE2ro8AUJLJ3RrFVBcvuog1FBKmGP5BtfPmZtFvnVUqrmh4TNRe7i4qpEJHSR",
  "key32": "3VLJH2ccK4Pwr18WGhzYFECjhJtRC9vRSHEwfREJnJUtvEJ8mho5ceoFtZM5fXNjSMb6AyohBPFwwv5kgvW5QrKi"
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
