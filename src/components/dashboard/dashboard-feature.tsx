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
    "46NYXcfH45FvdDdCgbSFnnQmaDm54BPKQYuXb1A4fREg4pZCZhh9YmUnDmB2XVcA423CGn23VFjaiAwz5GSdD1rn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y7H9F3k5X5pCuLhhcULxR2Ldp21RnDyQK65F4EKXnksaxexKxYehA779TDR4Q1GFoycJcqf1zuYmGMXtqRyzPD2",
  "key1": "4bcaoDBzkejr6AN5qyasBAvw75A5nqPFrFCrwAnXyGXpdbvZyabc2jFth92xtmSTms7rdn91K4YgJGYHx34jMuTp",
  "key2": "2yKnQudt6GY6SNf4XCrqRGMzEtvbkhkgKvadswxzVzSnHwG23XM7JS4XEUnwqoHV2HQQv9XWM7Zt3mKDrjH211dA",
  "key3": "42Ky9iNB1JnLGYPHsvvRLEEGHFZEmbMUjcU3M5Sf2vc6DZhVxQ63YnRW628v8thFbFnwMLnQ6Z16P2zuAyGi1f1",
  "key4": "3j6xjsWdrgzWf2dTQTijnYV2ZxWNX6CxpTNKdvHeVAVp9ZoiGwVLGWcFCZGFwtddqCX9EmrzShaiw2sdiK7xYuBd",
  "key5": "48ySb4d8p8HRnW4Hiihfh1bpUx5K8wcDte5nyQnbJhMA3JYkgDzptNtVmS4Be93aGgAjKZWfCccN5iw2XkFBqVeW",
  "key6": "2iFovf5NSzAJrhSBZJU7sZA1B9zgeP1jPAv7vZXvyMDSx28zKBJFd5s6Y1CyyytdxXK1dbeaqAuCJp1veD89kzne",
  "key7": "txXCLbaYiScM7ojw5XfAXMtyK8UqPBVjQjd7F1uoACXMS4xHXGkHo6ErxdMzDRiyGRyrnHaxqkjupyi59ms98gE",
  "key8": "2ZQACs4fejParZ9s2FXJm55cee2ud4Prvvwutbj7181Gp7xvHt4z85f8BNNZRD2HxfhpTfiZgiy4EBKA8i9uBhiS",
  "key9": "12659agSio4C1hKz5U6734KUCQ2U27fjX3ufvEwCD22dY9zUZdKxNF5Zw8a5r8CQj6SeNEVkcRxkxv6WsXpsxck2",
  "key10": "3AVqaaAubCXV6A5Q9ebS6qwDcQWLQj3wbSJ1JDSByGXQU72BW4vDRa2anoogeHA1nfuqkJh49VsTQXtRfSicps3q",
  "key11": "4K57TrCuRKSjQ2hNWyPN3Gh2nwn9jNXJEqQLVshzQANze6iUfc75Muz3ToecqzU4jVUnkPCtLob4VfSmzh5Hm3Jm",
  "key12": "adhrtuomuTNg3pu9hX8hsKXitC5bYuuGPvjdkf8LoddDBqWqc14hv6JAqJhSdiZtNmHDp8oCuwNfQSi5dvGxGmz",
  "key13": "4PM6Qv5om4YJPGWeTH2RPM76otDYFkDZ2kjjR5BkD3kHZ4uPGdC7CM6ni2s1aJLifZvSssAkVCcLui1rfciqpqpo",
  "key14": "3kXHhAMFi6dJVvPGMNVe7UKmPDeamHx7pz3dH3DA7Qcw1aJa99nTC2HnZqcMTwn9S1ugX1grpcJATrwzH7itQaFe",
  "key15": "4c4AFfwcrT6YAiC5hkK2f4UHwSpGyzt96Minyp65d7zN3189Xwrt6X8iu6Vxm78cFZWvHGefWs1jhqTz1jdPbSGZ",
  "key16": "hkbYFVpAFT1NJGWT2PF8ht2KKYbWwJsrk2cDqUqUWadB9cC1hgbghwdGGyxbdCufAFxjvK44FrYKjaqmyVnDmp5",
  "key17": "vUCxgf2QnZjFNYVnzmp96FMVzaXvYNtctfaJofyqijcsS3WjPvbRFQtJEVGdPTttBZvazdXZ32Z7qDuUejQfHHv",
  "key18": "5RSKGiKh6vW8Jvtk6BwWW4crYv2yYHzhdEj1c4YJmgL1TQ975WPBi53uRhudy1GWM81Kz2jD6urkA82KwLuo6yTY",
  "key19": "5eh4TAGvZ6r6HUnbPJA2DUXBQoBCWzKwSrEfN3KexDgqh86tQYW8fGhhjPATKJtPt7z2taCArmAB36MbTcij79E8",
  "key20": "3ZjCY5MxWhyd1uEAgpPwX8wCVtsRURACUah7VC3HZbFmXMV1gsbbaor7Q8txf3caaoyrrMyo7qYdKPopHMWPpHWn",
  "key21": "fLLv2aa8aFYZxXF6Tf8q3FsU8UVbLeX6Ar8npjKyEdrSyuZJ4CdJhHonddADBNWwx3ohhRgu4R5uCJ3a2EGTHqR",
  "key22": "4BXEG74RexurV6wMXUQZavYrDCp2Y8HNnYBCRcpZJTJHGEz1EqUMs7UxTou3ucuVXXPnJZE7FUdcADDejoWcYa8G",
  "key23": "2uYX8YoWmVEzpHtzpgPe9bHRQsd6qPJ4SoXTa6X3xsJoXqvcsjZ8P2kKae2ULDCXVmEgJ1aqVwiFLbRuniV6nrGN",
  "key24": "58dpCA73UBjUqfZFq6DAw1ZnVG1mHFNKPwx7ZYPUy2jq4Ww1C6U4AjAQPAV2jZFGcgG93niM51PYEF3SFGVVw7DB",
  "key25": "2qyVhhzC7JPo5pUGyriddevFR9mmsztMrQYBCoktm4FnsdWtWTZ1PG7w3xYZFa4hFENDC8gzkaunPDYLe1Eqj3oA",
  "key26": "5M4R8vpAg5u2DYq1QVxSRSeUyB2T8e367WSVtqa75tsrZnw3qxqWXktaf7VnknqDh7SKqa2VqUA87n8nbGXKfsYh",
  "key27": "5kDcQMpVYLS2WJS1wc96kNA9gKXCjQxuKzypLv9uhjsAGH3wL6CoziZonWQebkNihP1zSv1iMeqpAnKu8Tihu4SA",
  "key28": "HM1H3xb8ixmHajW9PmgRtZqL8r1nc9gudjZSuYW9gGcgjnAq1BzJJJ4jHfpBx1cxS51FUh1ZRqtxaHNKzzsmEBe",
  "key29": "27pxy4ai2wu5mYdxaxeG9AMJHDpTHLo2xfqiPkLJuBeckmAhAWL4gLnhV41HHUJnQbeRK4RHAShcfQKKpckhzmR4",
  "key30": "PA81i5oDSGvye79ayeMmnaRsSjw2AmY6qaiP3FAHxCxcdWQZdDGZfQ3qA8ZNFQEj8SQAH5vsZy4R6LSuu9TYMm5",
  "key31": "2ZKzQ6A9rHBzsYuJaNCX3WhaNFrww4is6hVuiZ1GZbfozMXYudhGt7gof6vaikP78TV4CEei7dey3fXdMW1Pfvka",
  "key32": "4EQXYKs72b9RGZ79YUsjHyUYPvA7oqGYAZVg5XeLJYjwujaNHo1XUXfNYxcqDP9kGmWpMhhQmPZT7yCw6oBj15SD",
  "key33": "4A4s1fqVDJ24oCvJ5KkECKQA8zpQtgUCEBXUG4A7atiZ6n5tagBsB8ydbqdC4GFpPvn9N9Xs67GRb4uf7W2NfmNt",
  "key34": "kXkvunDKMK9bPV6vQQTkUmMZ5jk1kNgmymg4AKhpJYo2VZehMpmVDXMFTGDU7WYYwwRXMGDk3eHB2aAx9rEuJyr",
  "key35": "3iwdfcCRq6LmP7JyMdsobtPrbQtQN7B5rL2FUqHFTCzhiSJ17g3qWKNQnRXb6q2Sy2aUazo5JtrfMgB6dgUCEsa1",
  "key36": "2nQdro7GKsx2MbheAEm4RmVbjNJv41GX3ZUntV3obv9adhxZSVTDvCSNiPjEAy2V4HQUuu46sdQ9Ym3YhfdPPgVv",
  "key37": "f2e3TNyeCWYLNa9y5LSJPyAwpmRRixaKAitoLvHcmvH7k3t4EEg9WJKcp5YonsftnSMNF9bywWc9zJJC8TF7AzR",
  "key38": "2SHYezHzfdptC9igo3eNDnbQa1Lf75hmP6Bj4nQAMsDQ9qUGa1Gj49XCz41gtGM45717Xe3dboxcx5PDzf334YPJ"
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
