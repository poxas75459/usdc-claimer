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
    "5YhnubZfHdjnsc8BsuqJXdLRaHyNRoYcaeHixKVExWuLJ177yxUbrJhos42m4m8ATVfiHbBM4fWrNns6uHZunSya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Lj4t3AJFuVK3astqew6ytuYZAwzoMbaDSmg4dXgZB9KBka3bAcso8hYxJ1gKCCxBvYeno7M71H9dbZCv6oYjoW",
  "key1": "2tu8cSeUx7UBWFBE8ZuCGvAnnKrRPjz8Hhq1QCmYVXLPioNqF7FRcbhHjY972ehVT9GwKHtmcUmffY5h1jAgY4KL",
  "key2": "5rnJWdBkKHLAKthbPKDhVZNeRYwBjvtUqUXQ8WkPo47gBKn34cHbnBHqMPdEg6Vxyxy8LJ3VwPiqTTdq2rpTSQGR",
  "key3": "fbfyLrcaeuJsAsD9hnY5D5sNWTkAxXWPTuxjojL9aewGsHwAVvGmzXKRiV8hwDPRzmPNia2U4nK2ErCoJJQSkXx",
  "key4": "mAuXyxwkKpwkn327vMdMGK8mfxYsktdSCkMXjnZbeFG23XDm2vZXWgRDXv9f8i4HfGkYqHNHE1ytNzRVn7zdYxJ",
  "key5": "4pAwofL3HnhWWz883CnxqmuUZKGw1iaQFUE7TrbxVrR9ERL8fuqy14asEX2VXGG4q78w28uttN1ZnYcNaD1XkH6V",
  "key6": "Hwj997Ln2cqvt1U7QTH98mChzYb77UBKmE8YmYj2uxgL2oZT51oqWE7Sgv1pf5hq3rMPsunPYfKNwp3PQj9dMKU",
  "key7": "2fjbXhjMVJpT6JhN1i9NXkQCy7isJh9Ynj4xorBLpAwpganfbXEeS7GCrNaKe4iz5aFxp1uxFdC4aLPDZ59z9nKe",
  "key8": "2V8UNmpfJebMENzv8Tp2ZmoZpC6CeY9aty2RYEWRLKpy2im6r2bygPbETh8DroYpcahWNh8jiak6tUb4AnmDNhXK",
  "key9": "55fuEAQS7x4KtVBoJimkBb9cVCDPL4bKPFGYCskeSmnKb6skSzmva8jp1f3JQAXoQCJZ22jKCqp9LVcyBX3TyLdd",
  "key10": "2X7sg5hS5fYRUQw8QtsqjQhJn46cg5xcKcTJQR7fVzpLbPNHV9BSJxjhfRuEAwP9gwu1uu1KEP4LKoNqGsdFE5bM",
  "key11": "66VoyXfuzXZAtXbFXd9QrN3Wh95dbc2Q3i5voynA9LRJHyb4uD7nnzZzycf7T2chLPJPCpjYfGy96UoCoSv9EQ4t",
  "key12": "54w2fbPdrsfp9GtACegnTBzzA22NDvXZ7KztYVQkr1sLM8ps8U6Qwi5XnSuQqbpTbbKEMAS44prX4u1aws5CmEkv",
  "key13": "3cqzDovPj3K5b64mguhxTsegvR9edaAkhGe6yoVBQRPZ3n57nuCsChidfWeznG1W8BE3YeSy6ehH5QyAAdwb5xZs",
  "key14": "E3ohPL4Co2QU45PaZBhexw8n1mos9K8ZAacb1AnvvP8iqv4jcxeadeGTG1ohcqyBHtUwZdheixSa3V7YcSqwGNB",
  "key15": "65xEEoUdiJzjDa5btLPdGVTL3rLK49JN834AeHrMX44VQ6X76sPUhk6HzV3J4JTx899kt2F17GBQY9PWEs81Rotg",
  "key16": "2HfwJwtACZ6arobQ2A8GLcaLyipT66yka852JHurEiHEEETqZ12sX6XG6i76tkRAYDntx9iq7d2fmxQrkK45ch1L",
  "key17": "5dwCyqYuYPyXq7gDNUJBA6VfaKzzp6mbvEwZ2ehoBCX1QNtA52E71pgPHqMc3qBEmV8S7jqHRPWmUq8FbDmPzN6S",
  "key18": "4wiyDCRbgjZzFGWmFmXg2DgcG1g74YffJnZ5ngWpf4aB6W24RrouFHjnTo4dj2VS5wDZMKuABQnok66oNCsndPmW",
  "key19": "PWbLn9PpTWFCbRYnqdDb6FtAmpTpL8L4qJV5NRfvQtY6ZKFxCrzoQsh2aF9aprJ1xQZqas1gWATd13qvXErMtZU",
  "key20": "4kPF7Kn6SVF43XunTR7YqhakGjw1R8Ju3LxWbFY9m2RFEU5CbYKEcx4r3rw9GHVB5Y57LUpyyqMHetozBBs2VQra",
  "key21": "5q9bYhMKUWuzahUwy8ZPB2Se4QtyAy4gKXQ3bW7RWFofMyv5LN9tK5yaudhgdYTUVwtvTM3jZPJAT3s2LLFyyVxV",
  "key22": "nasBQk3WV8Q6bgUuygfUGKaHyy4mVFPHVdXavVEjGF8X58nDhLqFvK2xxjWdpKZ7qHM2RJmPwHuqXWr2wAfd1YY",
  "key23": "4KVv8CTQBP7qEBPtoyPyjM7yruhSsUrWuEjZd8fNDRpM3chWhHMVkDASybBSnVxe5cQBdoWQ7upRdBJRDKH5GNX1",
  "key24": "3NohmDNGzwCjDP1KfhsesdaCt47TW6HtMmCsgo8T6as6J6BDKbv4o1fx2ChVRJL4Ag9BF2LYqUKWtBn7CvAaVzp4",
  "key25": "36S5B9UQm58e2x9fN99CxxGhGQy3CL87DLSiMs9HBY52YxZ2eJJL4PGL98NDYVcp2n9vBh3jcYdNsRQUMQfqk42k",
  "key26": "3UCHHdS5UT1LLxHcWuJJTo2r9p6ePpAWsLn7afWLTPPn1vSuTTrrCdyK1hyF1xX2hvfv4neecaRffs7SvKUPi2xJ",
  "key27": "5nemyNk6NAMMeAzjntxmdUtXXdZ6kWiLteM6oECAHQVYpPsaQqyK9R59gK2wibEq3ifGdgQobkxkMZ1GuFYHBfmd",
  "key28": "5uwYpG6MfwcfJpnjK69YzkXsKsbxdkmKTD6KeqRrVhQFGNMTVzmvKFi5V3QTunZKVcLrKNgDHrBuDN6HqJ6bLLZo",
  "key29": "SzbPe7gHbKBN2m5bL485ZJVYcAZ9WfsXyLiui5uyo4u3ccQfyni6pfkZH6fidXGAwD9A6W6vxps1aBMc28FXZoM"
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
