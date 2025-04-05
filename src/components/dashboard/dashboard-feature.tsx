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
    "2CuHJtzTKZMiA7JttnDibkMmHLvLixkZ6HJMt2Dvguiiu7R1eDEVdpVfBLPGcg84mvJ9Sc38UkhqhdFGevyGjTP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NcL7SKqErf8Yu1xuNpFrzuGgrDDdwdDzbBpLJpZP95EXYgBX6heVw7DWnHKp9Twx12JKXoDLWNywFSY2qL3xsZB",
  "key1": "vW4aD29dxf3zLk8xivVdrnhBmUkQqGjcn1UQdXWvWAUNY1kZte2tVvHGdiHi6RQSAThjZcvMzoQ8E39bvDqqim9",
  "key2": "4bwBJvrZUcCB5ij7yF5jcSKxiANTTtcbfdqzfzqpLvkMGkvLZSt9JBF7iaTTP88aqw23AQWLMFipkbv4mqc68bDp",
  "key3": "4dbMEmZPD6ktV1MM1JoXsS27vUXACwAYnQ3YKy8rKXMU33obeJ5KEJ3yk8mo8wLMEC22us7dGo5w9CTWgLfRAJSp",
  "key4": "3i5dMvAtUq2KJyg33MnRKvtPssFCr79tSg4BFV7ruPjS7srWyQDZmqjELQnNS6Em9RiyEno1XYkWgYj8HkUXmVHe",
  "key5": "5B2A4zU5tW6p2XdjsC5feZ1poDrXTkkLxQPG3mVQuVtW2GuTkUJjokcnuCbtAoExYtdtHRjuofsMNH7WaCEoqdfe",
  "key6": "2L8UAeqHjoVgVqoZ71H4gexn9KqvxyZRZQWJ1MbCTAhqWXoCqFmycuJtTjAe94TwRaBWRYjR597LJgjMWF3tisZF",
  "key7": "5eb7xup1zqax2yapBwZ72W1nurJQjR8Cyw78Do21TEfMYYu9rahtNfoYYXYDaBXHgN97BmxRZMo29GjpXz6dEE7M",
  "key8": "TRZyhqdutApsfVZEhbQHhiYHPVSnYd6zZ4eTFBZ9wWjckWSZSY4YoDZ9dtWPu7pfhSJdiCCmUF3eBhdR2rYUEik",
  "key9": "2GzjeUShZzHEiFp2jTgZVk8TqEcCRqdhH4XvsyYYQ5SFe3iWp3xDovEirrwwFLTE7KBmoxjQNrLJeGUXgsAno2jU",
  "key10": "4d3hwpHHWvyRUfCRdnDPcnFcaRkqiBs3sSVR9s3i8taY88vZ9xWQe3yqtAceND8PDxCdu5yRwhb7DkaBbimzDJQQ",
  "key11": "5Ywq2nqEnvWRq7MaWaNPSqqR6XGwMAQsfQFFf3qQP3Ws9YwJoKbqyEzDGPrH5uDVn5NKRjuVqrJTmjiNWGntoWu",
  "key12": "2EdFdjYRroveNZBr9jWURpRyUyuRwyyZ5jxVGbLA4GvpUax1ELjmsYr8vtwnZcBw56f4mVHEjy1MYJCqkWQ6a6ua",
  "key13": "5oJsrUcetQXwrnacGaxvuaK9XUQ5Z8PShMWPdUmuK24Q68SA8wWtHqP58vwfpBc2PZY1V7Hvs2vv8VGNPBqws6xD",
  "key14": "22YQMdYFv5zLKFqm7Vzkh2p57ZWbe9vHESQ1CJVChqzAhtdxqSGQeDTti1SffhKqWnHTcqoAqY1zAVs7pVk65Ckn",
  "key15": "ucwDvUbYL2yK14tRKm3oL36dqXagtnGfuHKeZGpK8pxxE3siCLyRSzaK7yTCVqTswJJCZFRXfvzDyZqxpWcZRM7",
  "key16": "3RbpgeJiEzYyoqTD8FNwC86nLSscYtSYqfcERu5QqDwPfZMtm22TLUJG2KVnBiwCSmnree2a22qr3CP15sj8cFkx",
  "key17": "2QMSXNrkL2suegQbx53KvkXKBgvN4Z7iMbU28eq3rHENgqp6eXm8W1Bk6E9gEJwvWCaKW4oyqfXb2jhuWCXrAfSC",
  "key18": "YreZHqZ2h1zwDwe9unhsCkrknHgWTkvzqm9Yk5kKvX95WXHYUj6XwH6FyyjsDhJVeyPKvhCsQPGzhjVuYF4L1QD",
  "key19": "5rDMeixnRaPsz42RnLVcZwZokQ9ZmnX7mx9m693uNzgdsLr8FdQt1M2Zp727M9BpvG4oqjPeAReZb6GbWveQb5ay",
  "key20": "4CxZAx44g9puQ5Pg6AB87RgRGgbBn33vqHgfg6Hh54VSDHNK5zbdWgPNX8PEnEtKzegvMEq4Gyo1MFJ5sjizYsw2",
  "key21": "CHkEkMUHh4UgEseuyu19gPUeDdvRaCVKcNgAwjymyMa9teVfE6vpgyov8uoTFeKKr9TajYGiQtMuqfnuB2uQTGQ",
  "key22": "5XQdqQW88LeWYxzwwshkDYfUyf5bmydgvnT6dtQuJqAa7VT424n76C6bxkXNqJqwSR7dKFEhehYKT8MuZqKSTdGP",
  "key23": "2r1kJm5Ky9QfPcxr1iww7mjfc97Twz3UYsFZtPoEHczB9zG1DLFQmKE4yHi75FKp5ahXhnjyeuVco3tbGQcsJVmC",
  "key24": "5TcJ4yocmU26DC2Fa6Lf4zrWBXejA2LFYoH5d26HmUcmrNxxAUTXnbnCfc5P5LfM1UaVT37xxX18VtyF5MqjS28Q",
  "key25": "2guhxhdrRk3dpq93xmdew5uNmqxJLAPPfYPGZNLCqpKqH8DJQYNYAJqmjsu2Cb6xQrraLCDGJKfruZ8ZQjmGmCir",
  "key26": "gAc2n7divskn1yibVfgEkC7icFtzT16Maz9i5zMwea3nv75EHyhRc4VXRtLckD92Se3RYBuaWbnWcB9LjJiuf1g",
  "key27": "434ugnSwWxhiwF5oHac72rK4H17UyMsZ6GMsPVQ4qjLvBtwnBr3BwAFosA94WoaLaqZ5CqzSSqyw2EuzfDohDowS",
  "key28": "6wNdD4cjtBzSQeCfm5ZnKLsTWF6tt9hbrMpyG6BiLTdHucwwzzbVFEQiNef35utakKUn69uGxophwuUi2mjdxPQ",
  "key29": "5HD8v5Pq7pbAfjUvnTcfv7SEZtL3HPVu1fPNnyg21USbtdDmeT4Z7H9sRwF4LztXvqFazJC5DoL64VZpZDkv6Sun",
  "key30": "28omnBEHTELv2m5yzruc96Pe7WvwVjBa8QYov7PbKvBZSqULCMbUfnqhbnde817QjY9JPPasuqSk6GoknQwNKcmn",
  "key31": "upPsoxkBAykU26udBCZpYG2Rzc7mfqVnADL1JaRQQ3K57SnW17XSea92TYmdEDAbTSDFFhHD3Lh9fnyXcUaat8U",
  "key32": "4UnD5FAnyXwsLfwC96bB7CNkr5gRXdZ8C8yP7PJwYweHuPQvMvnEhY22EfMDHVHZNcAwRg5SxHRJitXDfM5P69p1",
  "key33": "3Bqzvacx6LdRD91svp2sezsratED6DE2LxEsGy18tbBFqeMfGLgyXn9ikyXgukaKz1zmTxKAReHwMuvxfEWSUwkc"
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
