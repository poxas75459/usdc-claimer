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
    "5PuLfjMHffAuTYePcKQA8CQYP1btoLEnySdyzH4wn41NHKhKjDcYRJ6xeRxypjbeWmM4yVsuuivBwMdJhNvYDeQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LHgn86kVwUPgaMXxDJtFwKWxEvnH9QFePbuGTax7XTXdBe3WeXduAWhxvjDevJi1xNNvK1ZLA3zRYXmQyJKUhfx",
  "key1": "dj9S3Pb4aBX1yvmKMtWGZMwzqLkReDWUpR7ZRJS9N6AeKRpR1GsqGSD3vR1VbPeoiTDXTv3G9hEtb7LMG6boGRU",
  "key2": "rU5r9B1GZtRgXEzXVV9NzEZL145kZNfEewf7X7N1E7fEP3cArJmh1n7DXswHGdh6MAsSf2muTxyXm54anPzKrQV",
  "key3": "3dPoV7yYWtJL5DDH7FKjJrcYKq7zsZiV5E3buJAhh9c9hsbeRf2sEYRW9fPphnBp87hY72JC4AdycRi2RrkyCXry",
  "key4": "5sVwNyMr7tsKnuTeH6HJQH5X4qrP41WPPF9ctUxnH5NYFFwHrAenG3PB6JVvr8ksa2Rjfy2m1vgSYmxutH4LkJqE",
  "key5": "gnVZXpwhE8vG3siujtwTCDxeRZwsjuNPYUBJYCtXqKDG9B8wDG1QQpKHjgYvQBSNY1P6RdRivPvpGS12UqbuZeQ",
  "key6": "5RKYDAXxacRzcr9uD2a9sZSmyCSzk7bHsLySoet4M88Czor3njcj3rMFn1h3xbjVY3YzKTNYdiH6HFy8dWSgSn1Z",
  "key7": "2xD4ZvHaM1yGgB2rZycqVs38t1LbeBHnqdfQbVPy2WXCytvbA27gs6m37UGAbZV8psm18CVmjrNKvYCFuYkjQXss",
  "key8": "3apcL2QgjDuQLHXs9NixDNcbha5KeU5rX7CXnEH2fKTmnnQFgrK6dfW9r1zCAyAHJ5SvEkr1qryGRrtwLbYavPSH",
  "key9": "5CkLBv5LfS6gqhvYTPNDALq2XfBku1Yn2Wguu5mQzGBkqE9fDi63H5LtC3VrJu8JHJxQB51v6eZyk8oCx2fTEHd9",
  "key10": "DkrarNWJQ7DKKdcW9MUffSAtVagJNennVWEqZ7VjqsAQWgCpAWB2GfLsFD9XSnFGsmXaYmKDWaD4CyNu9UUuJ26",
  "key11": "3pdDE9jGZc56P9Jyc4C58RmULWkautWAFVVmTqovWvCkLcnZT83fR7zrMmhA6Y4rnQkERHEGLpw2NHHY2toYeTyt",
  "key12": "4BW9AFuPLVKuoPmSComPcbC4by4qHVCgLjGvAjv3S68W3XG25H5UDZq6eo9b486jBKsrm3MfMmLuignCwFQU55HY",
  "key13": "32rTa9gkUphGuqwnHPkfPxswvqk61YxcEH2HvYSKF1Jv1PnyxyR4QUcLMUuWXH8t4VMQaSLHR2CCYoVmb8B4HSkJ",
  "key14": "2aqsATNc4P3RVD1Q4sEGxGYffmgrTwDr5ikTSLt47fwNMMiPAC21kEy194PEXcBCB9rZRXdjyjcAoBsWwZoCXU13",
  "key15": "4iCxE6yNm2CiCRQgUMhWbrZ3dLzkVpRLM8sbU8Xuq6KMPiUrhPp4GXdAqrifPcQrvGvKy2MezEvuQZVAxJ8Lk9J8",
  "key16": "5GvL4b27LKF4i5WacxM3KB9CTMujaRD2azaoXPqSjCkNohK8PHD8FkKgpin4q41psm9LBbVvN36dYkd6PGwtQhXo",
  "key17": "5iWg8UKHaTaRJoZm6N4vFMKaV4MKC5q5JuRwViayee27PkpUdCoHNBZ1v7SrJUa519vdKDhrxFPAmgnwyRXc5mkT",
  "key18": "2yMTA6qFjA9WALjLar7y3k4ASQAT9LQ7HS1apLgtGdAWPz5jHEA22Sw5GYcAjah4mKFccXt99Gdma8Pbje9UW5Si",
  "key19": "5Z5i3Lt3a9J1ni9SZMusVr3oUDXyen63EKVtTmXhJse4KsXpdPCThNMDXS6dJ2YxXooQTwPVAswp6j7zywSk4civ",
  "key20": "2sus4VjdLZRunQihogfFk3wTDByBaBtMkzxuVfbyPdXzb9SArr5CiMm6ebQvSqjdoUWLM1wtFER7pkERKKeH4rFe",
  "key21": "3ahyQnSdUYBmBweU6EYwYQxEPXKN5ivPmtP6wsLgryxqo8htoYQkueBsbmumZURnHyqUZV2CWH4HjCR5H6CePCMp",
  "key22": "2BgSD7KgWfHkkvVAQvjRyGUTLiDLnu7ny5BRZw2EG75qBT59FYMLKPPEZXdEB2RxvSWiYvk3bVe4aCNtj61yGREv",
  "key23": "5wE6rKoNTigWqNuVs7jFXqwxLsPxaciyVpjNRsQiUvXpX6A3wyGNdjtEAT2iQZEU7fVeg5DmmRjHnJPJsx2XhmJ",
  "key24": "5zc4ojHSo6aaaXHQaBe2rLra6GUWKSerJ249Ydk5Gn4918Zkx3W1wNqXR9Cj8xqRJNqpixTzkLvTJ5jvJ1r6PeBU",
  "key25": "5gPfGum4W7ktUP54UmfmXMR6qCQ1UwoXAKiz4vnekxXRbB1WMajYPBQquPMzCDMz8jS2rdBcGSGwBHeVmwuS5SrH",
  "key26": "48nDohbGZKYepHuYEvnZjr7Fb9atKTQXfUTeXzDe8gaS2RnutF7pfEGkyxKJuY15DNNJKTHk2cQFhJ2aw8xDpxhW",
  "key27": "5BznjgYmpizmc8S9CRWShuatDZfF7sRME88113QPH4vMabPQCGPVzmaogSXsXMdjW5NPVgVWsCijkYW1sThEC5h1",
  "key28": "3tJd3XHCF9QKKvhD77LiEdUeP9dPeGvQNbop1jydvH2Vfter8bFg1UyZCexTDGNrrtJyrx981XCd95Ppknq5XVHY",
  "key29": "2E9jBUdUgZPDaX32w6AcY9zAUP2H1wX1MGWxysw4VW3GVLmopjZxLUbW3a85HCr9AXAWMUhFKMAgvJmcMKSBegAc",
  "key30": "2rm47x2Qw3knbkRshKFvoRRGLCr7PdtZZr799oYJen8AmfCTudhgY7RbRmwskN5c2uELvZaspr8u1RsoaMV7gwM2",
  "key31": "qk7RZThu7gDDkeKaB6tNUz8RCE92T9CaYoH2ySnpJjMw4KZXa5x1aeLbcL92chuYZaPo5peSexHxT5Ur7tajsQZ",
  "key32": "2UhKSd6N1EsSu5wZ1LsPBcLN33ypNFLtC3QYusyNEX75c5ohHpizPet5AQPddz4b66kWDJJFvH7J4ZYsBozrF2rG",
  "key33": "2umAoGfC7ijnfrckwqrDzGvRb9fs15KdywK4TonD84v7vRBSqvwFFbFb95yr3RZLHFNoJoaRAyotiLWNqqf7hgkG",
  "key34": "4HPEqovt3ZPEv39kkSK1Yt123WUMsJ6vKfVSfq1anFUHsWekM4i8KuHQCZ1JdNtKVehMPndaGwcphTyGZZc6WD1B",
  "key35": "pBbgfpvmDp8521tVzMgaUM7ebfQNnqfBNM8NL5TqTr1URyYkovYaHuBGGkqryscyjwTwrwDZUgyn4NW8CYzQQLx",
  "key36": "4ovCnTELJ6rA8MHTwUEUHNN8qXKYYWcxaGfBDz5GooCSmg3QeAyhv9yM7aP2pLhXYXUvM1TooPvdK8NEPweXLahx",
  "key37": "vR8ziDTNVphK4YUfpKtFgENGAPF22fsuL1r9ek5qop1TRAWzntD3jbtuBsfRwjaEcyyHBGRmSEppTjQtVnQEPev",
  "key38": "X5pCT345P2YqFs1EPcpQHHHkzALBGSeo4wy52wwJ869Yr1YNd3HPedtaN3tTCh7Ev1Dqd7H7sJwT9WkbED7R54x"
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
