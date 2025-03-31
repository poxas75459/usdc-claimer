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
    "28oBaMsrJ6YYCFq6Sm6ftvv3ME1vVn3jmHtQDPfbctFJ18Nfbi2WqNDaSZsUzWJzxfhRyQpAjqorT5XpbatGzGsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29rHRJmWoSZRjW3MPj4SqenDap6oes5A7BDJPKZnMH87E7mZ8pVv1HRnPBwrCFnCvp8uu8vz2kNMCpf2QWic9ZFt",
  "key1": "3r4PZ1SiUSBnHhsfsvoAv3KVjdNUzBFeww432SAHPxLo7jECGvdvkTufEEfjGpUCuHetNwgNdbYy8vK9s4F4KFj4",
  "key2": "4LDghrD9Kng863YrswJEr9RSoE9ad9ec87P16qnwsnsvZnrxmVTYcaYi6YVbzNWASEFCqCgqfHsyCcsqWEH8RU4F",
  "key3": "5dgpwjoWp5ZfkXgYoCJafzabosK5LUibpXA1JBj2cWvsq8Fsxqi1W6q8D282C9627yBAf2R8UdNYjPumfJqsYMUz",
  "key4": "DxDLKne35DaMKLkuLv3U8g8hwsTr7oMJX3GXNSQURsBq19wtMFRmuQ8hRxP1ezKXJN43h3zop2tvohxtiZPUAsG",
  "key5": "4EDB1m48JbhD412Zp9VSDqpQ7voT7GDVA2DmZcnFVDPYq3GnyxegooGEigEYoVaTGBtcHQBWfyo21Tm4xY141TkB",
  "key6": "4SBdcHtkPQBuAT9UgARkWrfw9dSbTsqbPve9i56GqPmEVsqDDocbCG9qtMwizx7dkoVdSf1UY8jYqbTyJQHL48nK",
  "key7": "4Emj3J2saSJWzZqA2WHRrzoEFEhqHeLCMogY8WEPZNpgB4nbjUiJXqk3jwcNvAHfFs6e4hqTxHrQNUSWJp64oTEA",
  "key8": "s7U8sy5tv2D727TFLKHWYUzRDU1rC5qqU3u5vx6YH329yFvGzcjHweJ6EsWkEKXghgfJcqKpTo6S4qtzvdjgdsg",
  "key9": "5geBB4R2P3U8sLCzJJxSeUNCYHEVJzobEUD5TkMjHCQEwH4FUNCi7obqLLhU2cFi9qyZ2NJH4fiBTzM3FWBr8vBk",
  "key10": "oT6mdaFkqbm8xGF4QrGtUxTJoLpF3dfzVkDbBu8iiRpBn2N92uHQkLaK7doYYkZkJ867aJ81XtLXS1X5MDJcaMh",
  "key11": "USfAjFuwGDDNtAKvavgZyM9CRxUBuC7dDi5jcRxq6p94ZM36XZGpqWPKFWwkLnpjLyQMcsAMetQJLVCnGH41Hyd",
  "key12": "5RJ6fcMPQapGr5GUtZXoZMiavu275KMCPaxmeT1jyx5CCvPoypgQaXu1Gf1SeNa2JCJj6EWRdpMqyhkSVHB7MxFi",
  "key13": "5ATrJfbxpubgs8ykyRgVyZArJd16npWTQ9sZcH8PACvVunmRuGRrBhKKXLPXfnVxNhZN1dauNuTN9BLcFAtEcsqb",
  "key14": "5oNXgrW5v7XBTobL81Yo7ZPqBAVwL7ANbfNiNFsWd6qykmN9J4XcoWWfhAazPt2qr47BA6oKBm7zhHzreyw5jAbk",
  "key15": "WChrSztUjYYsNugZZ6rY3TLjiTxpQbxeqnmVBy1CwvijWzKspPkdyyecdgTgdctw235naBPqA62BKAZNfwVfuyt",
  "key16": "5T2GyDhCGnxBoeMDsMZn7QW4yTkKYrfb2LvhkT369RrjG6SdicC8hAEsAnRUV8VQLAscqrcP9p8x4ZLrEehtBbTh",
  "key17": "5G4SNpPPcNYfTP3U4Pxaz5aKM68PzRuG6ssXpZ7p81WimXNK9NFwRVNM8yMsXkzjuFsU95hyVpgeeTvmJumojKeK",
  "key18": "5HXuBx5NAetUZSStEkfMeqpJ4NDNgPMm98iGhHmH7x8eBEKXGbhQkABnKZgC9F55MwLDrwH46WFbGYCqGU4J4MmV",
  "key19": "2SDJm5K7DpgFce835LhS8wPtobVePvnVxEzTdPB9bj7on6UPfnsT77U1YaQGFocYhSoSLLGo9Nj1tteS7CpXhEYv",
  "key20": "8F3vUuLJBS1YTPTUUJJaeo1W4qr1kD7NyhA93eRfPFZE8rTZZBjVNfhQ7XsGRoMJmsSN3xm6pZrVdKv4bMUmt8c",
  "key21": "3Jgg9BbjTRscYmmMJUGQw2si7BW8JzMdTzT4oRkX499mnirZi55FZrDqfZnUrwDE9z91MCvbtM8PSx5PfzTDUypN",
  "key22": "kHtsMJ2a6bVdSqktjK75ufpusTDAfLNbH58t8KP24H8hLJhjZFqfzryweYwbqUJRrBRKhXuyL7DZSrQKQHoYW7T",
  "key23": "4s7CKsHx4ctBe5aafW8VUEtocSs4fCxA2oce7NpanzahuQPMwHUhu1UirtjF6LgHofU6C2qJFgAp7bTmnsqyv8Uo",
  "key24": "2UKGgB4xMD4v7xFgPzwQPQqXsNSye6PqSY8oweC6VjbPtYtRvDBmkbYWG2XY7LMtvNJfvbwuaonHd2HnajsRbxb",
  "key25": "2GdkQv3JxS51Q84j5EfV2vJHgNcat1FTxCBtxddBLQgqrXCDQc48Pvpk1QpCkAnXhmruZHaRedABtbDc6dWZeskb",
  "key26": "49eJrzStPVsyzmSToUe3LjQ5zVd1saAjYsUk9GSuWSaK5ZA46PtPzFgdmatdXMPu43BhnUgxEyGpLcr9uyDvcsNB",
  "key27": "ycKF4ReWizAGKFMTmTybwfjNtk7PWW6JnFJSiVg3AUNVLU2Bd6obdqoVZmXDJovn1ZCBNvJ36iqSPFY33UBo2YR",
  "key28": "2fyKcFXH3WwFjryrtGhFrgieknPGKZVHHYVn21hy7eQxxRP16SM8x8QkdAGf1VBao6arFe8KQnQ8bCXCBvw12Ds4",
  "key29": "4v8ugEM4YqqMFBSBc2e1gnosGjqefYdgQvrLXjCqk9L726P9MpYWHn9nh1PQGbSFJzjQ3UihzHhUmU3bMqNci8sF",
  "key30": "4iwNpNJRqgz43Fet5H7L8VY9TdbEJMx5pHYwHpUPFwS3PTVieP6urfX8xxpdRNBPzdvrbN5bnbYb2QVHLZR2btp9",
  "key31": "5iWR17SxgxJbxdfpKfBVUqvRXdAYhpXiMok6NCuaKKf6QFoytvMxtrVFbrpSzCGcHrgzXqvc6n6Dqn7eJNXdVcb8",
  "key32": "5En1QVo39NQjYEGS8WuwcnQF1rjPPRoJ8RukR57NWrxjs2tqLddwzUPUzrRunraHw77u55YvwDdH3XNifCc3boAR",
  "key33": "42n4uKXW5yVkqJMcQxHnRm5XETC5B9badrG6jjitfyvvwegJh86jmD3NXR3b7pC7NMQcfTGKYT3cxSYcSevpNuQV",
  "key34": "5AdPfDgqJt7YZPwXnVWbNRypp3yaVWCJUa2iy5WtpzKkuwUjMvWr7N9XrDwXcG2k7TXGKU16KVcRanC8u63d6cFc",
  "key35": "2wBV5cf3uLxs8JuiYrtmynMmW15jiM9cBCVqxMLpZQKa2jduUPf13Pix3Ea3qRT4SKmnwYrGP4fC8yatDn8Dcdm",
  "key36": "5gV9C7Reqp1UHjYj5fXGD7jjZB2WwDhD1PxY5vqn5JQJq4YUkQCrLfakJVXL1ePYSjnPjpbUA7QAUk47JiDAAH6U",
  "key37": "3CNNMAL1orBFZYpNJd3zaHMzMT9vgPCJS5XgKqjRsdC7B7YFjzj8FohsTt8KwSRhj2ZedvmuUj4zyds95FjhJmgR",
  "key38": "3nYL5byi8NXmmkGEmYL1rsmm9xn5NKVcZ7CKpxvxqR1FWcnx17k1MUkArX1oPMJdjZqtzcMopFuS8rscHMazdVSA",
  "key39": "4MeJiGZCW7E2qAiUyWkXmHLL6LXkYZQwPYuY6EqKBjsMteQsz2h3kRdWiAJWAFDbvmGDsgbAG5tXJQeyxdnqGLFF",
  "key40": "4Lw8vcCCeUVdRW4zhCn8rtGzmjD3nFpqK8sGrYz5p5SssrGkKHHmTvGUHrmhKDQjY8zubdb1CKLhMhXqKfp15bUp"
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
