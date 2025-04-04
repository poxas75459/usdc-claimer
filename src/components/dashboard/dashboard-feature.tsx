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
    "5Q6KH9amifLuT6nZjvRkQJfSRjxsZWDp6nWCcWcoCsmP6cxMVjsSy9SpAEVsVEMAEWk5X63v6yWzsZMv2ai2LnT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q1YaTMRRjFH822pkzPDYqcr96VXDCcVUHnQ8agXbkFMPmQVNxLSChPiqAch7SR5mAxH1WRSstFa3ymVYFeGcx6h",
  "key1": "3uGBvPSfyfBeAoRmwwEQ6aQhvr4FogKVkUGewxkxRRh6gpm3S6fTd4v9zpdWWvhPNPTb51TPqYhAZfkU8ufqYRN",
  "key2": "4xUqyDzJoN3oSrf5fGBTic92ygTZSLeTheM5JNpGVcQMiYi4cSxZok1zAMuZRDqxZXocyMUzdtt8u8qrXDznU4Js",
  "key3": "4m8vNSDtak1y5rjcxXUqqgV3ac7iTkPmoTqtLKSXz9re6d1cgQ663G6RaBUguJHdRLhT4dhKKobMZC2xy5CkBb3X",
  "key4": "2WdgvTDrEAzHgUHRGxXZLWTyb4e7srGcRkKQgENAAHuEtKkjwN8G4mjWgUhcew2TUXuC7DBzYGv1CCW2fFmK7YdJ",
  "key5": "572MmH2wWnrXqZZ2fYFoAtyciQq4RkA8YvTX3zMkYYn61njstTojWU1ZMjme9ksxe69RLUR1E3SGQpBfu1cwEvYB",
  "key6": "mtb2KkcqSRhBJA6ioXATuNy7PRF1ghshsr1GZqa3tur1wfVMWdDWfS8Nf3bpv5PRJdVMRGABsuMyzkNzB6hSiLS",
  "key7": "4BENTrRvk5i6r3nmwD1EwUoPfuDVBjWvVG46wbYpU8BD9RPmGeF73v9Y44qPSKZX5UsqXzvhb65AjuW3Uimhgwvb",
  "key8": "35RJEMuo8XTV983ZccYGegbeywCJFDTqHhAnFRHKEwsphASqUScnLrNBpw2a47EhzbTLTKVhRHZxcQcB1ZpiYB1f",
  "key9": "3aDSPPiHPNpPJYatFcZruDKBEVKQp2Z6owEPtFARufjgnRU31GrWSev1EqzSiEeUG8yLF6SRyoVAimYcJjVWxrg2",
  "key10": "3e5CF7hxmDXD1Th64MrwRWL5T9jwmZkEx3CrSRcvtTSGAb3GxBpSYNZFK9uVMVN1subczaMjRxJF9uDZK7t6yiNs",
  "key11": "Gr45CeSrr5Lzjueg7vAVafX4dyTSbBk66aBCitou1VjR6auizYCEdnaGHPYBCddCuk8WktUYh9wNGYzcKke1zkc",
  "key12": "36CftJ6kCMdovhETUb1QQi9YUBQHpFDKjqPiTGRVVVp5fHdc1pRq75VSsph6Y9CmqLCdNxvtfwq8uEoZSMNj3ENb",
  "key13": "38mZmbu2KE9xyNkwvqRJ84ESU2wikTn8bhvvV8MPr9gj57FvhueKxukJCXyowDAZmzgcijn3vKLM7gRBiBQbRYkv",
  "key14": "31wDMVAQmhFsntV9rnGYadZezjEAmhS1b5sg5SGgNWb3MHVafLdZpwMVpxMsTgYKoF9WSHmmfLrSSofTX863v9yG",
  "key15": "2AFtkdg2VcsicMaASLaHnXECD5fx7DmWVz8vJ9wraKuwYScMyCaWDAfPTaXhWzJRHYxNk2nWEm1onco6Rqx5j2ea",
  "key16": "4VkXNd8N9SvWeGpY4srj4G838L6VcgKG7ikQwFkHhgfzYe9JUsXSQ7rtesdzqrhS4Hj8ff9SrR3Bm2XdP97vVrNT",
  "key17": "3vTDPDTDuXNvNAqWnSpDFiR7heZ2UmGrp7K472UcZUS6oytCU52oy1ig1k6CaBAy624gigVar6Gug4mSmMJ69JX6",
  "key18": "2iggGCD8RXXD9qugx2xx7BRbwQBEZszchp2RR2X3B9MdHNznbKK2JhokGUVv7dky6HiubW9ELoVvoDTGMtaXNJun",
  "key19": "589uoj4LHASnQEfK5FFDN3dvo92vHTBXSWs7YpUzqXopxgdF7PdnPfyzdBGYPGyGfEF4LynuC9JFx3PjWTuGY8ha",
  "key20": "43h66UM9EG9XvZqxmQxDVJk9yu5FCJsCPVvWq1A2GshiivK4e9xkReTQ66oRXaoAk4B1bLWx9VkQmKiCWmtXRhcZ",
  "key21": "565XnwurkLMUaseaqk7aSf5sJo7F7h9SUb78XRJks6bBQCEVdKjpZd5wUSYPmgLk5pWnSHCCMn6DFDU6s2m4kyHZ",
  "key22": "2iF8Tq8p4LsaJEWfYaBup1jAYxpZrDBM7sWzABhXR66puW4LqNqCBRKK13U9XFF83F9BYdEcixnvV63jnwStwnf4",
  "key23": "2CP4tURgG6taCwHHiTi2a1QQN1k3TfszrUhpA7HvQP3B8MJtkLYLaREq1NHV2KDZL4tUsq18K7DhVE8nKdP5B2cJ",
  "key24": "59rcnKYMwPoT1YCzPqEDzqQY41ccjB4h4amwRLifqKeAURGmSxJUh5W75MUeGAAxGqccY2pzVy43QTLBi4BSMBNd",
  "key25": "3DwLQWGoJhP99bEEA7yHP7RF58XFKfyTznC6qK3m2GJ4zQnCGC3TmgxWoDEQokjTobUHDFdvqFVDJAyJKrCc7JcZ",
  "key26": "2hqCJCbynqEvBjSyoWMd8Abjp3MfnpqtoubYvppMbWV5BJU3HQGQWJYjd7SJEizwarqrX95De3yFgSjfjM8kX5dh",
  "key27": "26YnUoowH6JWPqKZMf2aTCgSVRrJTyAQDAkcwwH9ypzbGwyTW4QV8ZE3qKZxQKQJ8svdtmdeM8PNUwVxpahwSSoo",
  "key28": "54jjUyqNUpgs668dwxdnGLgRrEeSAQnHpziwcNGNe7YETNcB3aSigWVPHHpD4Cs4ZEZyyRKDecjD7cPs95D8aZkW",
  "key29": "3tH2ZV7dEXkxMKycGQZfojS4egaDezfNKhA3VT2kPVY7EnvVsjsbAXie8kMLx4d1mSkfVRbmhVXewH4eUikJuQ3k",
  "key30": "5K8zKWLuDHhujupED3JHMXYobQNAkzq3Kwk1QUptn6sRwVB8torh8odmbpJevSPuVtX1hjQ5dkDVWzFWNLDsvL5Y",
  "key31": "2zPp2wihQ8mRbwX6pUhbtYtN31tyc1ZvCLAo6aLDuEXEz1DpRNsVmjschLtG87gKRW374qtxXqRY5LAXYWoX5Hdz",
  "key32": "5LegwZaHL13HAAf2yWQqzy1gkpiZYTFfjKPaJQHGSz58LtoDnLJv6rXTutnmXHCZ35Ga5DHwfhNfbT5pjnRd8X8K",
  "key33": "63qH5MAqEVZigBBxkZABbNiTEfrcWivyeMNKpw2n369S5iFiLs4fmEJquzG42Rf4381ok9z3EYKeBkrArSBQpt6d",
  "key34": "5f3pM29ERf1yoyc2Q3bASAFECrsRgSLqzErmeNnRe77EESLFwhUBhAzjHXycqPbiDGfNN2YhtikLhuBMeicPgYUX",
  "key35": "5ppNjGKG6z7q7X8gSaxMXtRpNZHvh5ekSTmwXZSNrvcye8SWoKVgmw86jrLF2LbdPD9BNfCF4G8xSfiujBtkwCay",
  "key36": "4o3ioss6gxY8aUiMK96uywb6M6sWWFwoLghhJgEuoKh766sosGAwKe1vnmmBreJmgRSJdcca38PWLj5iJKUnNSPL",
  "key37": "5fiZffhF9BsGwnmT9h1r74sfuNimysGyYPLRLdvdh2bTMzZ4HwNc15PQvJ4G2isGvJWEA2jgKj4DysF9Yz6Q5Boc",
  "key38": "29tKiMnt8w2aYjeT3dUuv3utXgn8NPGZyMterZKMK12viH5TYpJQTw6KBcA3c4Fhp8qfZEX7YPCP9Uzr3MkpErFB",
  "key39": "4Sovsyq8bLtMTCio8dbRMNM9PRn7wzSv1fmFDWU2JymDq6MmHxfeZgoA6ADgSNoTPqEB3B5RZEJvvo326dEUsvc7"
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
