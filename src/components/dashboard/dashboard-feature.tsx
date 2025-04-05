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
    "5XT8Gg5CzWVJxdpnqBUbM2fFz7hbDfxM8uS83rzbGCrhwFYSu8SbfQC4mawWcEdjMEuXV7JYd3dQkKrxqnCC1Zwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42CKtxK2krz8B5BqTyAzni8ffARYZWeyo46m2JktTuNRmZExGzRj6tat1hJVJccokcwgv6oe6xTDQhqjhh1VAoHi",
  "key1": "29DQtcLd4c59kfmHx7RE1rSZf8pZ8KSozpnF6z9c9L7ZERsazUgGv5C39ndZ6SKFekqZQQ9zpWy8q49a4YApjGet",
  "key2": "216DZdwU5kzUcowvDbAsEJ4PkcUgyJQH4TfBMbdAyT595A9bBVJbiZEJp9q1tnDX4jTeRjsW8FRzqoZdmB876zbW",
  "key3": "4n9aFTJ7C7v4PUw5JAokfPvRgMJss5FeHew4QDmNY5MQyEbnPAMRYBnMkWKC2mTBKqpW1VHaVHmK59J5sNzjQxjB",
  "key4": "3qGJedHaYmq6neniZ4vSCrPK6PEoVadtuEQBP2dDcaCRc7oSsPCLhSUEcbjpbwfy7jJUFuyDxXxLt3P3JrjbZfTD",
  "key5": "5rosrQzhMwzjTa3PqtJjjgL61bUf37wc7B4KVFUqMzQzvzX42FMHEGUpodQp5bFvabqMTaknj8TBfjEzUXi67rDp",
  "key6": "4pyVdMf975jLZgcBjwyS7vZqDpwkwCRgaJNMXdxkfXpDmCchvhmAZD4fMtpjYhsSZvnssyUsUx5Ba3jM3khJZZHm",
  "key7": "iVRFhC7bteXoaa9vpNgBAvbCTggU8jBKch9RdTrZ14Yeg2uCkWG33rcbjHbFX34YRLMijztQtC8Ki2rdinKkZ8t",
  "key8": "Gphua8WBNMuRcziHBj4528kHie6RPH4RLaHBG4rHJA462WVXeGVNbDnxC1JFeKRWgChGgkC8Etn1qA4WWmpxq6d",
  "key9": "46pPpoqtXriPCZXAuJtecEGjSuSjGXy7eh7j3hccMNNBxaAPZpmCoBbJ4haYdpcpt8JnPvAz57kjQsMWknDW3Ttn",
  "key10": "3BTFtFHqwL5xF6KwV5XSgPfEfmSngzsZQAahYUXDTDqrvocjwNE58bEEkeaidyAcvLEpaHP9JfuzLxp9W2wLEcMC",
  "key11": "XStu1HtQWszY3YgLFwHVzctapi6su1dQ3P7XfvycYmJcVgbTxMVgiNNitJmwb6sN1XcjYGGByXmeFe9qrz4rLWQ",
  "key12": "yoSnR3DLW5CQk99LPP2mAfVeqrctbRetYmsBVt5XC74HxNyHaAsVE1nmc2i74PU5MWfjjGWSGnkXoWV3knWUkDo",
  "key13": "5jNoHzk4r1p6Ao6mmPcrC9jLtEqnkXR3L5vKew86tdhzm4TqKdri4eA5qvmkB2ijy78DbV33PDtVSrJzruv9Zegi",
  "key14": "65ymAiMyq1StokiNVKtXvcG72fPJsGS6oERR54VLEtWewo9pPikQMu77hXPwsJGP3E2ZFZTrcSVHTuXmgEfoKkh4",
  "key15": "2YpfC1AfV3xoLwSGfPkmNK49XQXERCWS3GpNMWVWz28XboqeUoash6Pghne5oi3FNGwk37Mgy7ufBaKs732ih87B",
  "key16": "3cNg9QB4ortcfA6EoZkDzm9vwjBrKgApaTeCosBQjiPavXYzeaRR62WRtdLNxcAuKobA7GmEvYkoqHbJJk4Mp92o",
  "key17": "8wGSHmN1e6J34LKqB8gHJgmfZjVoMYGit6Shrfe4pwj4X16XL1w4HLLDEKFDon6jRmBtWeTBJHfVy7yegDqmpWd",
  "key18": "DcV8m2F5wr6HE4v3piFMSYEDKwEwqMe27GoG5yFPMXs9ZXKFobA81NP1hL8xGDzKntCx3FGBUtQigR9y6TwHpnc",
  "key19": "5nei5VpJKc8kYsUKJoZ1Qj5vhwnXfUPB9na7yoQyCEc4kpLLm24RioZyZbfaZs1ksYL7CbhTyHV7i4aRqWGpoS6d",
  "key20": "4BEMgefieh2WGvBKhqrrGNW145dsEAPXmcFK3TrhjpJ5u3AvFotguUx1C8nzsipE75G532Gmkoo6MLwuvCRX94DR",
  "key21": "5mmWmgNVabwhthMQuHokzvP6wpBhbqGnb4hSoHH7irxrcRPHBpa6j1b2pi7DRgMRjCo8Pmhi9kTYtwEhKV7orieq",
  "key22": "uxH1DETXw1aCdDoXtTpWDcLapTwtZrir1Lbukwc2vXh8T7TfNq5o9XqYz65hpYLssR6pwdMwXtgYYXGLmn6fkqP",
  "key23": "3qeS683jnmn9PxNyRsFwHsjxyvibVig6rHzoFfViBcbA7LmvnWifguSme9CjQXsMRcdZLT4iqzXAaPr5VcdaqFLv",
  "key24": "42nNpwSztugTcxWRpo1wknNAWXgZVaFU26LeAf8yai94Ln37pPK8obxHe1PwDxQjv3WRSAy5yRedsx5edcQZmgPD",
  "key25": "2wZUvgz7jR5TZj7UXSEqA2VnSX6bA6iFWppZHHdCYVVnkfbEM4YC4xy4s4ATzsyWBPGCbq1SVCovF7HAANhDRJyg",
  "key26": "52vZSxEPXpej3eD9S8fQoEZFe9yoggw5iiR2A5AKEYtieSw6XpoG2XRvFQDvnPi3LSPn7mt9cze11HuTxuTLS2zt",
  "key27": "3fYMgY3MZyYB9f1uhaSAfVUijQFg8zMwMFAowLCmuepDfC7QEraK6bMawM2FrQWNQUaMWqymYcHmeNuu7nmgfdii",
  "key28": "L3WYBK7nau89JZuTxap4qqJ4BgwmzijvjAodjPUZ9iBDnFhegYQwicPCaY8EmSw3xMVtPKY2H3Sw6AhiGavS3UF",
  "key29": "3QFc1QqQw8FF11gKQfTa6YY1JiL7DMZd2YBYNcNuUogfwkfmqzzvbG53a1DMyj4Hy9EbsFqA2GCPseBvZr9PVJmv",
  "key30": "3yu6vxoKWSDQa2wY7ztvgw3aYboTxU6iLtPgkS8kJ2iKL5YyZa6McyF8gqkM5aeMKx2VnKFoFUxbdJsC3tytrDCX",
  "key31": "3mwQG2tsE5adXcGgDsD4ciKHhUKKMD3WGt29pksu2XobXAtAk1v7eiV1Xip4DoSe6F7jmd47eNCb8YZsq2HaLWEM",
  "key32": "4mH34mkfsPVgMRryd8vU2Bc8KjcaqZjjMd6H5dsiMZKn8jVPAgt9BLXpbaDdZHtspgiQ6mm7QgJoNkNZDrahcHjk",
  "key33": "3CiMNbrvYbdb6YqAB5m8489o5ET9g2neAAqFSQEWA7tpcZbzTbu1eiVYioZh3gbvscXMNRMwmDbhEGHKoQ4jtXjh",
  "key34": "3eBuu1RaqjFyCq3aJsp5A8nsjXk1ieYrg6uAXKVGUk8Roh6fYxUcHdSw5LanQqMA5SpoP1zp58hJa1DkFiB5guFB",
  "key35": "36Q1VYHJFCT7Ddy43BxZBdFTyjsXHWc1ZvYnGMMzVt4Zzu2Sa3AXG5r4QHR5bR8bYHWYqCtx9c5deASo1mAEy1bM",
  "key36": "31ZsStcM9qG38agL367RFZEdBvyoPRMKpjpXa2BXd7AiVUHsAMNaJhcA92Mwdz7u9q8pBfScndis8L9AUggbvwQQ",
  "key37": "3ncnjQLWhKm9CrbqTet6PrEdATACfFUkTKfd2tcqhiwjZvN3r6BuR9GZ6xkkbZ12QmYNvUCvtx6fi6hwnwAS6aT8",
  "key38": "27AwknLP3uHcf657QBgWxX9EDtNbvLqsjf481mziPoudZ7vuPYgoevPujcqCV82CxrhAH9Mjoek1KZxSBAh43rQ4",
  "key39": "4kZ4CzwpR3ziU2nwjrx3E5t6ugVyWCxAaLDE8JJGYntjxtQ2GxYK4WPW9CGdFRN1Bc3iVBms2ff8wotEcxaepzUB",
  "key40": "24ByWDodaQHhURxNbCwcexLgvXVFCr621gGuLcWzXSc6mZFiiEXEYqvSDZcF2afQcGtyrBw4AX9wxoKf2FdK2Qwr",
  "key41": "2AFAnJ3hkXLVvEfj4BhjERAMRXPN3nCsSEm74FAvZQ4J8KSffW1FSoL3bJocUM32jbBdHauPb9gcmy8MYrekC7fR",
  "key42": "4ifVjCfpbpRTZFNUK1Zyrw7sJzZeU5jgKSiFHF6AJxJ9cBwaABojC3KPQa1atZkDYVkiqxhHdBtiC4ZyLQbD15yg"
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
