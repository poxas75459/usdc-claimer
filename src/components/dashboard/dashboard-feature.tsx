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
    "tqo9A9GDJAnfqqNxnW1KdeMKxr1QS1ktA32JyKagmUeT3xCp7c4eysJ8GQRdfMAsQd1YGr8vauNY9bv1ZLLxbre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r6giy3ZExKspe4Y5THpkSNXtqczZxPAShp2A81d43JmXQSpbuzKDyj9z2gtedz2nWaZQn1W7uFJ7izgdtYWHm3w",
  "key1": "3NPfKrQm65mHjYPJpe6RmRakcLijYX9yh6Lmsvksh9LmKv5HrUF9BKFt7T63CLgoi9vLJPfTPGGscE3bPeiUhipE",
  "key2": "2f9qH7aN9r17anfBh2Wgp2n9JNejpWBmbbBL3n56rEBNt6fqwppJpdCANtn8pnczkMsNhdMnYYVfh4xJ4G7aqUts",
  "key3": "4BwhGSywQcyWK8TRhU2hbS5wenqnTdCGALXXVsQ9HecUPQ2ravuKz5Fcxvwc1CozcBSUASDQKNrKxV9UtFo6XYxG",
  "key4": "3qUQ4GiFzb3NEhFJGtUL3fzvPubMG14FYfZy3m6MkzTQnn3fNEXNKggWAWGrdtM8peNVYQfbVLPrXAxiqsPuPD1r",
  "key5": "2HvKVE8LJ5QVFCC9bxokHvfWGXUvuKQ9pEF5386s1kHUBSthrPEbTaTEgxdnwNYBC4impvZDXiBz1ugXjicPW9aD",
  "key6": "3yMUDSW4p3JGx1N8WfimyaWwkL7FAx4G6FCiHsgQcjmpHY3eN6JxriVH2fR5X3YR1brA7XRPeDZuVL4wN5wc3Pup",
  "key7": "LXhCn9TzADih4dejnExbRErGeuZybuVtuApS8d2gc3pJwb7dCHx8xRHe8jN5rn1UvH3gutNC7ufFHmvL9MTmMUx",
  "key8": "6326yy2Zm5NR9ywSK6QmLngqnJG2kaJsjK4ML8Wd3E86f5CVpKwNuPPcoWBc16vNrs7kLYpsDDCvZVhZnEUri28q",
  "key9": "5qfdzPKPGDPX6LanvVNLiJFgaDPyxUrM9h4inNGKSEwD173aBBnTTKUFe9CrRUWWRwGUS2prvxSWMNX44B6KnNS3",
  "key10": "3iLiQaJibNMgmKKg9JqU13QvAz1E9cAjU7skszWhiy5VynFQS2Gq2brpwKJ9aVWswWQSmzuHsKYTRzY6VC2ix1pv",
  "key11": "3arAWn6Vg8zjL8qAdo4egadtRVwUQma1pRvg6Ri6a9xESf82ys4z3q9NrzPXfo6PAiiuqrXrcVh7FMTqK3t2AWbp",
  "key12": "pSwrC5iinjC1aJ5XHGhCvWeeLaKA4MtMSD3YxxRyqbzi7Gh3BnXvJFkP7dt1NaaRq842Ww9Jsi1ZAuy3XFthcun",
  "key13": "foYkMzB2dHuU8reiDj6mU5yuP9tEfZQNUDNkUntzBTeNkGC87M2WwAo3oCTFz8Wag6uwYWLzYEC3tZepLfsUVfx",
  "key14": "2KeJZxgtjr4Ap1BeHtECngUuLS4Ni9dUCDnw9NPm13ETQWcsztCSMNuzimUGm8DnGNt62YqFTD5n4ipjeD5Bh2zR",
  "key15": "3qmMTeTj5X59GAicBZ3RP7MpBYVyxzeiyptr3zyPCrmWqBsWmukmJdv9J6gWoPkGLmWCobeH3JCwe9vZpFJjqWjJ",
  "key16": "MkaqgP7R93RGfk8ej4V5rvtgFD4HrgD6uijdcgSJGmHZQpq2BwCSuermbWEoWotwRck3MtqR7xsJwYBL7HdvnVV",
  "key17": "4f5VVZDpLAYkFhBmbm52KBp23PtxP1PjqfseCwrxTW5Cmusss6SSwXgPBH5wdPGmjDUGudLBbevLCv9eJKgCfKmJ",
  "key18": "XqxrjvyGGYmYBQ4cJEoapUfquHmzwGuR3wnQkidyqP8dfDZaVfizgSnZFktm5saiXZDYjTQF8MbevnxcdZSSzSN",
  "key19": "4vuhNGCNM9Pe5chioWtq7rTD6MSYoxBzEGGzvoQSx6e2CjPdatom6LuakmApi6DqtJ6mt9nD9KFf3Tbd2RMBKEHs",
  "key20": "4yoDMbWCUR3KFh7MpFjNDd9ZuMfAL2DecU9RFKHGaXSB7Mb2QBtYdhbwG4CSv75LeNt4XSUWQTtkNMo5UnTqcdqj",
  "key21": "5hdFWdLHkRXahKtaqfEgacXem5KvrbCuYbWuedTrWsgKghnFaPeoPBJ63aqBdJaPz6xC7zMfHQTqecQDCwpbTMLA",
  "key22": "5DiW3xjDE9SgJ6uLE87Y6ZxYSkjf9TWDDRKxT59hzPcr95RnczKA4sLo7rYgpd2oNZiDncnkH9uZ7bBUsrY3tVyz",
  "key23": "2t6KaUjba33ruW6aygw6yJPUFPz9V7kGm8cgYmpgFNrbHCmQCftawbtEmVrjsQQWJYxG55HtqYQ7v9vf3wSC8tcW",
  "key24": "3CJKLYPjGu1QpqkYWRvQCq62FakmVrYRPqvuZGyTEq6nBBSgc5DnCM7vxsGJQhip15W6CYMENkK3N1fUKHswLZx1",
  "key25": "5mX2VwsvqNd3qtkM3wD3mE7pfFFbeiecybgHnqevAdHRF5j7dg2pJUDHGuWctGE55t469VYohHQxPgCAkna7rH6r",
  "key26": "2czqaksMgdYQsTwWAnHeTEALf9UjN2YRUPcHCe8RAaAtRPmpQPjVhwUw1XQWtv9oC3wDiF7qiBFGCBtyiBRLkgfV",
  "key27": "5UqqJFamzvMf49dLJqWZLJ4QXpjdKRxPbt5up58wF4ytKuUQcj5cKDXzZSqebgNtZ35jgQ4XKdTysx5SWhrAcRcU",
  "key28": "wu2DrJ5AaMmWtZBhHCwuR9et68qy53YnpDMvPAGbLURm5zzuNi9qrF8DemQuhzDfQhfhSseC2Vkfh1pzqvZR7qa"
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
