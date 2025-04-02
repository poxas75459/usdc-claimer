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
    "4hr2fgHFRJzoH2LAyCjaLR5dzFzxweoWtDZ1xchV7bifYXi2f3mBQPcj82bFX3ib7b5PvHoDsW41M8JmGqxGqZhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uGRo4XMWRLuXgaRt8GK5cu3ZgauBPnsYZhzvRmSfxV3RUVH4XsXvLcYfiVrM6APcst6KorpM5DhmmRHkLCtbPQr",
  "key1": "5CGhfgME9MoPsKbwDz3As1GGjuWWhMLZbxAR8FrEjzt8SgYnP7CxjM5g4ZyikMPBog671sWouRnJRgvf5jGkiQrE",
  "key2": "3S31ZkMWJ44AQ6n18kZyyenRhaY2iK2gWDfKzs9wg5G2XucEyi4hqg87yHhqcuHCPP33aXJyiVtLDYr5WsRheLc5",
  "key3": "3YeTZD4d7Pz6tcNtERkBwbGhoyMHkeLdM2sBgnayke3vGP3PDq3GHrb89DpNkyLkRpxaRqFtbMh2Uhy65sn9zhu7",
  "key4": "3GpZRVdbyYpBP8GFZZZd2osWN2XbGAUiNMMmGnyiRaWybCTeoWm4bm2aiQb1eNnDiLP2g1NE166fFd7wTYz5k5Xv",
  "key5": "5wH7JA23BKTfFxQk5qRgWFNkJa857T4tvtK2aXQQJi9gyNaYt73w8BbPYbxEZUH6G9MkY2GvRAbHbfzhjFVAA37E",
  "key6": "48vzMu3dH8D8hQdzHeMztvFZjd6C8XAH8iAVDEo4wAFxeHDbATnGcXQnHfnvTpXLzVvG97Zx5mwK5ikBjVBEQULh",
  "key7": "2JG1rtt96FvENyZ9McrddwgqppYDPgd3hSpVe9prxX4P8TSXrhzu4vyYDthYNgf1E94U9EYyLWuBZAaZSJGwLcn6",
  "key8": "5H8GQX4SJKfM3izRDppL971vLCCVw4siaWpPHDATcPQJSefKtQeUc2aupJcfAdLWqAAkm16q1cC2V1hEMME6xSDN",
  "key9": "3qZBmAC7P666B1FvzPyuuYjFfKN73GRDSVHkwCvLcXjnV92pxFLgLf2C9RDyxBn3BW1vpQuugSu6QkqT8hoTG8Yi",
  "key10": "21BywvBfvyZ1DmYq9gu1ugXoMN1b4gZuFL45WFg8HF1o9gGy77jJtMEhAmC2pv6i2KqKHHJkrDSkq3DtZvaigmY9",
  "key11": "3Fb7RA28wFKnFYPysdngbYQJ5zZT9JGrUn5RFgM3W6ZQ6QKxgaXy9C3XSHm1Rtboc5t6DToiAMJBbjR5D4ocdYML",
  "key12": "4Ensn9kPBiWsS7arjF2NgWYr4LjzRXiQBTXeKTXFMHjFSGvjCBRkYYnNk2gQkSvR8YVMpB7TX2zPpCfps429NTu8",
  "key13": "226qkF3PLxPtojwG9YNVH89bkaDhpvoM3yXAFnisxu2MQ7hDf4FiHhQ4QYA239jBeVPD2Hg2powcabz2Yj2ebpt6",
  "key14": "54w4JNQS1hRRpv4fosseJMHyjaib64bfaEtE6SvXXWL4m5LkYZmKcc4YdhnFmNT6aDj2tUU4HfhFAZ7j5X6FbVxg",
  "key15": "29cRjMJdBnDmSZRbq1uRyxSQDgdLZHY7EBSEUMzxvSvW19tS21HyEgiL5RZ15vmYQQ87GLWuovmmEyDZFTUFab3F",
  "key16": "4h1h482UtEncLNmjKL26LwDne4Rue6UtSAe13bmQYfTa67gTVNS88oT6rDH7EourQxZbugCMRwC7VgDqLGzXwn7J",
  "key17": "8rLEJjro51PFgXWjqZYUXDfqx56zKYwHsmuLEJDSmxp2sa4DBHE8z6U7tt3v7PeHvdLRXCV93cw2iVGVvd3mEm4",
  "key18": "xHdQ3RB6AzhF65Wq6Cs9NtPswRtQU1QVYFUWcFhSKp99wgdY7NwCtLxNpTQEnQhYvUtddNrAFZd8jwm1nSPFXAa",
  "key19": "2BdDrdffpjSPaASHgHwTfqwriRAUa3J5o2btr5jovg3doDHXNrYpJbcfnb3BzwTk4fSYs5XHCbHrnJ25Y6bhUQ9B",
  "key20": "4baX1QFmQ68opbZaN9aU5YveaERKn9KYd65ooFfebUsVjPGLW2o1TFgzFYVbhfgNbdRBY311oHUJT5LikmaNg8xi",
  "key21": "2o3NVLDUghW1MWFKoQsPbUt924XZJRgZ5z38bxeDzrG1jWMQKooh6sNu3jdXznkMxheN29vVN4i7f9wJRMNs3t6B",
  "key22": "49iKiPRqjPZrMPd4LKTyS1RV1zXpNgWLusP66ATMqjVGRpAA4UcextPrPEDSpi2a9DtZHT9N6ZnLUJQifRsMvEwz",
  "key23": "YETRJaPsuWo42SPTAYL8KBnvRN1Dm6kurq9BJHSAkeD1HyZQKQyQxDSucCCA7kKQ8xFYKc1AqXkFBRfsSYGLrE2",
  "key24": "ffg7jqdoufvsmh7bMafawWef7rhxWbH8qQSTbsTuSutjomhSzRVEobgTVS3HDtpiFDyXKD6ZWKHLxSNAtKGzDb4",
  "key25": "4LmMkiRJTxLwyVVph3t9u4XQqXtdERrfokU8RBA2R4rRSwA8aEWSWyu432k7o6skCBJbPKVLsiyeFF82mzH4oNo1",
  "key26": "f41Rkft56D8dHBSJrVQvJiy82TrF4AfB6HEfLY7jrc5TXDivYfNJtBS6cpmZf5kQrqLuRSQAST9CppoyxSnDYRp",
  "key27": "3U9hy8ZdQyMVLiNRrHdbXqzofSDJ8KBWZQPnKuxG4y3ZsZs4TGmzzqwYSDuNGggCYdXzrRJ9L6HoamC5SWmQyALf",
  "key28": "3u1hya8jYpvU4Sjjwqd5AmdwLxy4ENVgt1NpGw9cZV8SU4hUxJASFYk7mfy4ksqAtMB6kX9VxZG6S2VK48dbSbah",
  "key29": "3BVWBzCgwaqtWMnzuB7TBmBZ1X3hJwV6RSSD2ci6qoVjEbtVJNn59L4wFs1jrvhLojQtPj1jjYW3BE25V63dPXMk",
  "key30": "4xqpA2RHtNdgVisX9AxRNUytqHbHyfPJPLQ1cNxLtoAJ3i5THx6e1WHJAccZrMAC35UHRLMAq6r8xnUgNcEfKpR3",
  "key31": "D1amkNWozut87SZ8UygMRaTTanKYg3gZ5HmyFxmveGyMQTqdoUGrAxyuZ84Be5vzTuR3W5TbiBByQqAJUJV82Rs",
  "key32": "5gtMNsFmCtQP98kGsWgNgQ6ZtmCUWRwicEkSi4arTYFvRwErP1PmwW4RGAxYhZCGLaea1Ykq4bnB14LpM4QTHDfj",
  "key33": "5ayg46BKREzAtCDi2kS4hCTBogg73oU2uN5J69CLgPbgtYo8RZ6Ubs3hnFiC1Q6M1bRzrkRc1h4kTfKz3EzkRpaG",
  "key34": "3v76LRAT2wDmh86kNqsUQuS7Ay1Tbn8Xju6LSQEMuqanhLP1DnmmWSN9wau7CcVWgEZDXdWZqfAgPEu73yfmFg9U",
  "key35": "4z9oGPNSAA7pqGyYWDNMFfKeWdfuv3hxHM76mxWU4XqAScNHJoZDe9Kcob2iHDJAbCNxz88PShC3BVhym4PNHY5Y",
  "key36": "Tzua9AneywKB1L3pLNF1Ny5jQGhBZn9qqgYRC36xJD3M1Ft4MxA1BibW5UztYACUHYCDPKE7oYYtMQEPiavH8WB"
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
