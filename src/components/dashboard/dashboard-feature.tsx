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
    "3iQFPv8tH9ZWqYjtonFXKfUXEUAFByzaQofEMo1kUJH2vMdgN4GroCpvxBt4rpAfN4iE9V48aHEKJ84L5nwzW6wV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iBA7m3eVoELvJ4H7xzmCv46MjKsqBGKy5uiZx366BRowyd5cP1CwXvtd4UG2uS5422U77T8Wm5m4DABV4owuu5",
  "key1": "LicvVPQNQqKG3A2K6VdyjBfHJUHErS7C3M8FQiNYfX63jMvHcbXoCKf9gaFxpjhYcocTsrBE8cCHHhBZvZmahRx",
  "key2": "3e47kLdLTpUwWQLW4mir7vKJKirVUDYCMKC1TMr1ZdPD3EVGAQWX29qaixvWMeMgaDdyo3Y2DWYDwNre6vnZmazj",
  "key3": "E9Gf45UQjVM5pAS4Ry3Xo8izyAWuBpAXfXfqqaJJakRDvGCb1jz9tetQnhZ2wjFxu3UNyD7wqYui9T9mMPmCt3J",
  "key4": "2JkaaGEH13hzihJu2yiPpqQtLy3yZhwnJBRJ46VNkKYCYqQfd9BowfttPH3QCVqgxkKRvc6Vi8Aq3miP348ifztZ",
  "key5": "9xQpD24QCNuNXT7SYwvU1Bf7zNzPerxWULtL97LKuAg14N5BAyqYqJBisDR6XRnRVgDrtsFvcK4zFV7VhXhfhoR",
  "key6": "SUrvn1j2gHp6XEeED7UK9wDzySAxSAfFX1NUXyjJiZpm5FfRfxohSPENPGAjpTF97YZqcrQTxcnS7kFrSfbXCYY",
  "key7": "5HyAc5fiuXXrqAqx5idXKddLL99aQgQcBPppjtAcTG4FWgZoJKD632LLXjBzN8YnZB5B7fBqjPpkySHDwFR98tfB",
  "key8": "xDdUchhmr5hXbXnwn2AmTmPas3Rmpn6QarbHyjNLaKA7GhKZqT5n65xpxkrNUaj1FMEKDcvyBz8GMURM4Eq2Lpk",
  "key9": "2L5TMsFGEtd1EhVguo3usomG6E2ndN1tN8fM9GBJM5y34yrUAULZgxnVMuDJwR66fugm8noLBSLChBKA3kE2PGzW",
  "key10": "46ViGDFQpmLgVvnB9k7z92ergJrnvz8aUMYz9bcdRkzJrjLAHJG2MEDjSUDHoQQmaivbZjLDYgtD84nUyiD6ueXh",
  "key11": "61c3Rg1DZ1LsAp6KP6ZGkjhKLGzDM2oUcHKnVP4V95hL4Vr99MC6mAxqCEy57uzXdkoytTQTonZBpM1SFH5NpZ7S",
  "key12": "FxnjRVrjkrM16Vjmg9QdbNTdR3UmiV1XkpNf7PpWSFJex649YxsMQn55b2hvuUofDmhgwWTfXQJtw3JYDbePAPh",
  "key13": "3SAsEh3bM9Tcj1qKt1ZKoqPCKjeJFbdUxG65SqVGZN9bYz2WVjxGoEEss5ZuTMkWKtc5gYgnGRjy3ZrtUAQYQ9KH",
  "key14": "5W7R1x8aPnFgTX4BbAFdXAiBvVLV483Udc5onYyggQSHwGzwD8jcpi5yycEohKsj6eQgFuP7CerAVA7junpxBd8D",
  "key15": "59Lme12ziMQEsYG7vbytVimPtPBbnrtdRUhGpkQWNdwcGsrSx2zFDw38W3P4YPAUGd9mPtXHNHhyhXbszqwFdoCE",
  "key16": "4rgFJ34yTF9GWF38rGUUB2S98Pd84qmgjFuLL3iAiFh1rKYYz11JF9pnoNe2bzqSZ182yjgs68VLJWiuDZa95svM",
  "key17": "38FPcRLZeRwq4sFm2aueu1KDZVE7j7CL4tkb2boaVmWipKA48yiPWMwfK69rvgqrjkVVhTsTazz99o1ySF3asw3J",
  "key18": "2bnNL4a6WUC8iqNPAFrszcpcRM7dC2JPJZuoSkzJUJYDRSpqhKvnkzHJa83dHcuDKeWdo3PK2zJzTXH2mTNtnoSN",
  "key19": "3PkBk2uq5EAXb7SLFb3BMqHrYuh7SBTCnSWXJUMkLz2mimtPYr6n23TLK181xJCYAPcyikZPWCJUm4ER2ptcVP6D",
  "key20": "5vz36hfdo5jNZs4ebQMmss2daoAbNQi6E4Pzc8vWH2t4LictCULNgNDiTK2jYdRMon1xd2NVDrvPRQ7ZiRGwfVDW",
  "key21": "3FaZ7qHvAspVS6mDRqvgNq8Ja2DeubfEJTyFeE3JDK7RQpTVridD5iLagBdzuyxorwB1b6ezCuqFqmYHBF7hL2Yp",
  "key22": "24w8gLwt1jzNJzHp6mWZDcUdJwsVqBVCtrmz2n1G6g6qPggPk816SeYTLVFNkwGNav3iWujb1WnquKwXWrYYFGjw",
  "key23": "VcBYPjA3LTAwhdFHDqVJsMLfduTLqFqy3LQgf7cmdhaynvDfzU8hjyU7RfQoZzCMiXRPVb2sT5eZ4AgPR8Hbh3i",
  "key24": "i3qk7bBT4nRg1QJoEo8zviK6m1owz2SQGaRLWDwZ3MneR9fanHVG6w4krLvTxxkeMkWWGWcaNrFBCeBzjdUD9rH",
  "key25": "3myh1C1LDcb6nJJECKLiSVApqL3UFtngRBxMrESVtT5Xp6jHXbK8U77V2vcupazjF55XJVQJ3FBpUNoa3qhNCK6M",
  "key26": "UxUGV22X6q7decga8aov4GbgwSYiGNDiMaysf1jVYV77FiMhnKL7ZqgzmFurcjrUkL5XgR4xADt7j2RjWyWFkn2",
  "key27": "4FcJBmVLd6hNAXyTWZreBDiuv2TQPiAtyVNeAZ3h1yUCLWTdKsomrz34r8qQAzadosQLmGNbnQgvUhkR8kn2Lw6X",
  "key28": "3iufqJznETrPFjBGdonMn6hExnszJbF2ceQQc4v9deNHuswyUVpb8UrnUKaH928qso3JZ5r3s1A3xk6iGKSjQQcH",
  "key29": "25vTVXzB51rVeY9fSdeupFF9xG8DFwzn2vpUjZKBo1UKHRaEPBf2p1dZ5ow8CTAhuiPM8Hcd1y92Q3WzzsKpYryS",
  "key30": "hGkDAkijGzSDHQ8jFnrEEJekbXRJ6CuFcaMipMz26dxnXmA8sQGD1gStY5YmvyL7mWvPGkoAMErCNX5LwvLjh5A",
  "key31": "4oTo6J3UY42Ty4e7ShDjHNR75coXYTW86G2gqdFDarm4HVGMsRMxgmdzhL37dAymqUtGE9BaBHDZnfMXqUyt7U4E"
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
