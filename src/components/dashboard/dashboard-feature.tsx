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
    "SDzHPnqNw9PKgwKMjBB87YPY5XW2HeCPDvuhcJAxCSLqy1y44xN95AspdkhjyVi9ZCUfYLiaTCDNoDQ7LMGZhRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iNia7pqwZmqijctkvnVvyLqJNtGAKoxExGP1m5mtbYxYa79yDMgap8JoPZhuU5uyd9C7oeXpQWxbh1oxf7C8G7D",
  "key1": "NCWbKRvCChofrRKW2YSsv7WQnZxS6MfkTuDVByMkK44ky7ZLz3ZEVd7jp37TyHmpjT34JCKRyK35opt3xFTqAAG",
  "key2": "3K3FELFnvKzLqyMrXudUthGNKjiJMtdnMvgYY8RgcSZcQKddxEGr8vdPziuheV6wNEMqa5sd7hCWW57pAKoc8mip",
  "key3": "4PogMuxWVbDr3wwhvMK6AdTHAYLTERetGtawbTWW1DfuBVEU6wTEfXmkG7FrR8eUdmrhW8oFZuWT9KtT1mEaMHCt",
  "key4": "3v7tYH2MM5yrs4qdjPuPi7UgwkUhpeKfU2gLnHFxMv45sAcYBe9sSxjfsMxXyJCxSmCYw6bvh4D13Ef4zTk4gjDn",
  "key5": "2UZBYufyQPQ2WYdLM7skEjPprnsnhNFLZqPEoU4HjekV6YUktqXasw6yc2oW97jDWU8KtJkMaePRSRyurJ8UG2pP",
  "key6": "3jYid5ivoWDg3x8ykqhroSX772jLUc1fGiDGXDpuXw6F7QUbcs6WNDoapyZUszYVYpUgxSHLRfxjyRwMJMe1N9MQ",
  "key7": "34i5H9qe893HGn1AQtsjo3DeSzJwEAKy2LpPnfM6cieZzrFQZTBCpekJvdihmpWrpkwNb2eMhqGzRUUx1fgnxCDD",
  "key8": "2eQpHLodou5Pyykp3zdLZnz3Q3hyjghL5Cciis4yEFAcQ35rsivT7GrY44DLo4VooEVDYYRCsdYZCRm38xokmceG",
  "key9": "3C4gmrTfRpcCGm7zXEarVSBcfYLpdNEZa6EmZCz8qT6vSaHu3qCZH1PnGLb2vbE9QZT86UFRDsQEZmb9iLsZBxrh",
  "key10": "5UcFNLMKRiigJAMUTpAnUZgiWzgAg13vuh7bnTShFgf3zb7HjPGDg2CYusxA49WcXVZ78PYUtq9kYRa75VkhgsiD",
  "key11": "32CGdXnDciFhcTFmLaHfnUE1M3adQweE2kn6YcgMdZuVvSwjQpgWCqcQW8ZSyMDReYB3GCWhn86Q4am6ddEw9LRL",
  "key12": "2PrSRQhUU6h5RWaYEp3FFernGwmRdz4dqa4hFCpNxmw6sQ55T2YWAeDxtcirXStx5u3iG3XcF1kaYMnoUhKRf462",
  "key13": "3QgcYDyVbUJnaBErwmZok8QndTqnWCQ4hCX48pRzT3dh7AFcvUcxjAY8kaMiFFN3RxtgwktCZyPNaLi642iJZeno",
  "key14": "5YRo4dJHM2BBycw1Hee14bcBYRPDwSAuzf2Yhh3nm5UYRhJd3MfTmDD5jABiBYJoJjboHdjSn1JMF3bZAyVFeyD7",
  "key15": "2nhRMJYPvsyxXGT5Q9qQxmBMrH5FhNo7RCSRspgWRXHpTPAg9DDuBts92e8FmygqXmCXSnRdt7e87PEfZnouLPRE",
  "key16": "5yXeFSaXWNQbNiiDgfoSmVwNjig7zz2hiAZEiJzFZ8rPnnoxo5iRVBCnoPJskVA6pnqH7StqQwxJc8qc2yyzXq9L",
  "key17": "3VoVLxEixWz3gD1wRLp7tVDefmYH2SnST14ypEfjfWJ3ip5SKPietMTUh3uJ1UCVxRynAm48UMutGm1xDv4hkwoR",
  "key18": "4SwToWMdsApu7U7muS4UJrMVqeY9gCh8JLr7vDPf92RvhKPCimkPM5ChJLHYoHc7KeVqZTtLHN55eQAMbqMuPKX2",
  "key19": "2xyLJLk5R2Cx4ZZCWYhra2LqP13woGu7wGbgUgtTtfJ83Y8ngLQj7U1smWd2bHA3iqnehrmq9bmyqKGPuBv8HP8r",
  "key20": "34J5KcNwqywr3F9ErdS7fWudz7tHeGFibHskSKhZ8qr9WJm7L43jCsczbX4uyLTGVd4W6ag5X9AW1iN93EsCmTAc",
  "key21": "4zQeML9tyupNMowoFvyMM8i7Qco6kvCnGeMPHMm3JYubLraBsWhX3ATzYrg4NdyvxmKgZtwp8nWHKzZiJ5k2KPTB",
  "key22": "5XB9HueHfFF1wpD4BgYok9qvZaCmzN2CYJ66KuSu4GyfFosndwWXnkgUAHUPQ3SPqRa89nAT56Y9wwHjGdfPTULp",
  "key23": "udPcqqn3K1W1cuYdXfDGNQ9MLTAUjytTEcpMThMu23yRSHryekq43uW8MSTbwRw9qFm7gkKvbH1UuEUefm2Muy8",
  "key24": "2dFD1b4VYmsGDv8vg5B7HXf9UNdWtcy6kSDYZ9svQCgY6fUs4qV9KucsK4AGjqGDZ1DnjfYwNyL4Qd9fNaG8QRmr",
  "key25": "3GB5H14LdaiL4QcyehvBYFLf8mi8nr4p9m1Hh3f5F6sJUAbwdMje1yTabGmKfo2NpvM3aU8bvmvmJjPqqJwvR3BG",
  "key26": "4KXTyFDQhadEBgdUL9YzZb3obExBSMsW1Y2NoSJb851ioLBEJM4YcEcTcxMyw9GoVShp8qMVD9NKFxJX2b6ScSTZ",
  "key27": "2Byrp8yYuAAjBhrf5XENMv2mgN7rypTpfi74bZ1Pfit3cFvaxkugzZzvmXLVVbDa8V2pg5hc3Hn9uHGNKAPND8kz",
  "key28": "55hmwdDhFKmwxzsyLJWqxcgkcmy7aznqy3VXYjvqT7KAZdiktMszLhmBSUwJZCz5afyq5iqsXdFQM7FHo3kcNSFm",
  "key29": "2hXrEHbxosq475ai1iCJhEUBnMHqrZmFxtwZLwrWcLbz3Z4BN71jWQgSx2qdVzzmpPikaqqNBGyVJvdJsSf2RLmJ",
  "key30": "Q9QEfgLj74UfAAGt343xGUWfu4kdrYHU1qrBNp4tVxAvhTrRc1pMQ9E48Re8kSrSPEfCJAegnkVyvbsuexuVhKt",
  "key31": "2uib4KeMDxbRrbYG4Unq5nRnWhhe67KDQKmsc19nDtAPJ3t6p76Lup4rqg4RZYxp9zqLkHSwyJSYpiDYEmVoBxJ4"
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
