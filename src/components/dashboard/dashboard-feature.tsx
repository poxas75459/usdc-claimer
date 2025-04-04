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
    "4LwQ4G18QFfM62JBkDtd6VtfiG7ewkEd2VEjraLgC6MmN5fisxF57ojBsq143M2YqS68x8RTe4isDJuea8hEPJFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ieb6bmA234pod8HceAjntU1RT1M56j6GtkK2s3CLPxH8pJWYSrF6PQDRB3pn59ifACbtEMRNBV5j2KoLmA17VJc",
  "key1": "MFoZo4huaeo9cL2MCZny4MMy4yddDdoX9J7VHCmkfZQRLrcgMyC4tAfGKCiYUcUhiYxi4Tzn3aDjTQ48tKcXyN9",
  "key2": "5RdPAYv9eRZcRVHy3jo8TQNfq2DbmMT6c9z8kMAxuhpp4hypgaYJH6LNAQVhPpYLnDL29rHNGPMNLd4yVKsKpuss",
  "key3": "h2XrCy57V8hpEHjWZZPgHHBzjCsnJGj2JaSU3VwCYQ1XX7iDtXAQj8hvdnvnPoJ9kMWZpKHYx3Y62v5ptAZHGUA",
  "key4": "BxsCLGFpr5tyo1MbWhM3qcNvkXQpPQoTq1Gk21tKK6wYYFru1kDGTYy4B7CuzxzzsAP9rSAkhk3vj84jpccyLsH",
  "key5": "3vMo88xjeHaz5AHpgz7j3P7DgF2qn6j2QyxcvfHcgsx6HYdqG1d48unWHkMonG8HMGZeJA7xXViqcUabrtiy3tEL",
  "key6": "5xPD4aV9rHGwQ8vxYD4k9yqTNcrnd4qZyQEX348YTHMCTCR49ED7H3NGVizwbtJL7xDuFjBpGLNsroxL8UJsXojZ",
  "key7": "wvoxuiXDwy2KMGBTEZEVTceZTXDMqLiQGQeAWBSzCy8oh45eB3JwSJg9FkhCqnDZYQLyDFKsQVxjyHsWZYHxZQx",
  "key8": "ruYZ73xHhWQePvwWZNSm6PwiJX1qMXW8L2gBGeX2jZoE7gWTFpeidZs9ukqbfzdNB8opzvvD1Lgi9qBh2nUjf2i",
  "key9": "5Rt9eWLRx3ym298KejdqcL9wRQ6CV2qwyFR8HAq1WDfphpPDJoHXaV4s38vGVNTRBTQJLT44j7x18UyAbQdUQPzm",
  "key10": "51y8eBSESWdjTQmsGVs8iESa9u6J5Z1z7AoeB1xGDGAHkeCQJptoSBtyZ7aDcWbfvLDHozceKbZsdzRWhRfeE9bs",
  "key11": "5f3xYX8CYuw2Sb5UbmAGMrhcHKgDkyzCWMov97yShZyfiUpcY2PhLv1HramcPCJEHPkHq3ewz6kHu7BmLfetnTUK",
  "key12": "3KVqNec1KwfzJJT9r3GqBvnwPk7G3bz2MPWhjXFWdzY7HtpdD8d8KSg1kDyBDHvoiteERoKwa2UJCWAxH9uW5L7B",
  "key13": "3DJScJqW3nzzTuGZb6bJSiGaGnczRwhVT7ivV1M6qBBmtfU5htJ9qZTsR73HnurfDuBAXpijsB5SRfXiLX6QoAyE",
  "key14": "3BEd2kfhXynm17dhaRm5PrQEijjGjRheuxVJASWWpfFRRUJYBJepqjnVQt6FwDsT7ssaoLEZ4t2NDBFseUTkrSCn",
  "key15": "2QrCQLrJ5MNQiQ9GrnnN6bTNgxRuXVNAfvruxdZRBczVhTqoxD7AjsKLuY5oQVt7LidqX33dRupgWUBqoUiVU2Wq",
  "key16": "4HZYjfGyRQmGsLFAXPonK2RBon4PU4nrgUxazsrciBj4YM4k7RsHnbQet5WMjUUREyoVDGUd5n3DAKppZVg51Vui",
  "key17": "2gCMGmcKXbpbJQy8BjAMeU3pwZFXbEL2ozpbk6BtCGfN2Rrs5qQ4YfJyRWN7xJq3GtbP2NmWMhBJFK4coEL1PUGi",
  "key18": "cvdoVktC5ZB3vgQRWZnRUruTUEGGpz4q51VqcDwF73EtW8238PHrQktXMNMR9rdhhALxvyuzi2Aogn3f6fntKEs",
  "key19": "29WmTSkVL9LptYGFUvpTnWGxR2hsCK8KbBPJG7rWfjD53zFRgd648QR3j4fgyRma7xWktMYzXXrdvmZzX8JZy3kX",
  "key20": "2TNESAfWCkrc3t9kDEzstoV7T4QWRFkpjSALgyT55Y3nFbPht7TkZKLy4ygLseTdhjzNdWGRhAi3hGWwZRD687e3",
  "key21": "5vr11iKRcQ9qk7gqJgdJfBnjaHf639s1RSAoUfcsrngyiVknNT5DySM4z451Rm7qH1njRdkyARy6j2nrAcn4XJu1",
  "key22": "5DGT9xpMJSyFELf6jAk6rcWD98ridMPPySSvWGxdECKuAGh3jE2pChvUi8cbaDZjAKBrjCKdmQSnf6BkhsvuxVMd",
  "key23": "3NSvJ4ie6PcjiZw4sso66Ld68GM3mrvYhJj8pcsTS3GCah2K5HXLrELFB6o8SYYWQBVqapzY4L3CZuUzRSqMwK2y",
  "key24": "2q3CdEcn4qoqjU614Xf6u7LucGqDY3dcivtZcE6EYQzrMT5gvghma9YmoGaBasn4JzWP21CsTX4q972NJdeHfaVW",
  "key25": "43TjPEmBBWPvpmK28CWi4wL5QBUJE1oSeGSyBzTGjGNX6p95emk9M2rjmfocgusvTYkaRWXqEQGDqHJby1iYz57c",
  "key26": "3Txxh4hsJQVVuLu8pj3Ue2TFRRydf8iSWHCQ16NzfvtgmJWpJv7jvmtJTitVNyB6DNeq8w3X9UbZzeutxRg2JEBs"
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
