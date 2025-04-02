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
    "3JXdVEZmVYgNtFx3HcfsiPAPm7ZLBD5eRXq8dwPcA89F68CXvVjVsh4rvnoAqmQyQcbVo77imqdHBW9iin9ypLGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51xiuAQL5KQ5fDiKWdss8wnY86ueZxjNMgRcRzRau5gCoSWDuRGQjCSFMYqMMNaevW4846e9sx9ztphd8XgJeXrQ",
  "key1": "4QLABgm16tAKqhqP3aEJRs8MBecQcJXr7qTDBmdCp6GXfJ3R8qrQEfA2fpLPvoWtJmXLVrATxqUdLbdsYLBTQA4T",
  "key2": "3PjZaUTy9WfCdZViueePoxAz5CGHgpw2W4j2eJvubnB212phNTxqNkksaCASgoFneEMztqTRDMaDjC9fuKZuPTSV",
  "key3": "5zM35uvDMXgyShsicwrrbpB4ogJUwyEkJ2rN2rcE8rCgkabEs9T3vwvEYFLR9tTsdz7oiJLuE3NqKjRcPH2PT7pj",
  "key4": "3LMiKF5zeHMQtjhyfs9gkmyMzneZVL2xgMLudHfcKasKrFz7DoR5EjmVNmv7L5WBYJzdbL4e1ddeHRJ6mpUQMc2F",
  "key5": "3BwByDsJvGs9TM6vVjaLR2gvw4izN9Rr6TLAEX5mmu3NysQWCbTd7nqoLVbQBk9PrKbH5EjApLps7b97L7gz1mtK",
  "key6": "5erGYbW7Gzn15NHmFENkLpYzoGVmiX5hRHhvP8sSDu7nKDYyw7roi7rKt4qkCTgC18ZUuu5rLrq4awyn3mNrWUxL",
  "key7": "RqVWtBGCBYGqJDdBPa9ip6Hdy2jdsrgHWVEGEQWyag8maMkWQxR3F4SoryrgFQM6yqQQohaHcncXxQW2FaLcmjH",
  "key8": "3aH9ScU2DBR4qx6TMTstgq5gbfXphKLSr1HPD22v5wXTBYT4t3Yaga3ftKWALEEZSySyAtFQThQW8a5GwoFPUg6z",
  "key9": "4myAdydHLeV6jEQ38itAq29qj1x2X8g8M99gBZsWvtnZZywaPbSZ7rHYXzak64A17Y2e1xvh4CL9GyzM7AYrQxyp",
  "key10": "9dd1wfwCcG9M6cMDUjFPGvG3E6dULDR5f3c8bBXmJuei1kZaRPV8osvZWehxKbKXtoV1nR83hkK9WGuV5WR4am7",
  "key11": "5AomJqn2rdWePVzuvoX78uy8QNZEYabQ3bM81PERX7ZZeSd47fA4Uh4Ese7hibgMsK6mZFEqXVbMtTdYdLW5N6Gt",
  "key12": "4p5xsNM5TRSwkaKsCBVXnY3GF5P3DZAwTsYgGfQECaYc6eu4bFHqdM1zKcX7M7tCTg7NJhK1MrYn1WY42BD3qsem",
  "key13": "Stkz4KpX8XdGBdqNnLA2LfYGbY2nTbkaiVFk6x9jvP8eLFLXxV65AkpyFR2upZq6QVV5fpt98RyvG1AysNPjep4",
  "key14": "5swPvnQJRiArsA6CBbyFeMNHtM5XRaWwig6DgaZPrGf8xk94k8vTDbcRjp2aTWDMCSjydtdVh111uZU2BauNgg5A",
  "key15": "eKxXN2bkYtW2MMdYnSwZN4LWkL2QN9SEXqqexEVGyiKcZKhvDwJ7pJ6wFr4NGr4wfps7g7KsxP137YhK9WKzqao",
  "key16": "RBb1pZE2dfdM7QaV3hXCLcDu8h36YpbGJFXKnM576Rjt2J8PMRfQqAsFJHJiNFSBDFEcfxhJJszdPSgvx3UMgkq",
  "key17": "qAxhCF6eLJimmBi2P7pSvvJgjEoeDx9xgmXmQA8rcjz9sbxy1EbSMqAuuCdizbuL2Go1krUU3w8rQA2UcoMfUtz",
  "key18": "4Mg1i1f9NJ8GLZAvyZYvBPTamouxKtM1RyRSEHLA8Rtbes9CNaWgkzSvRm6wRx2yqS1fo7exSVduhxuMZRTFB9ea",
  "key19": "5M5ZPjwppCC1vNGHSJdtkWCB3dRffXgZQNfJ1Ncrymeh4hRf3xmWBRaAkm5n5ysc97rcDftFoBByMkngB6HAXpr",
  "key20": "UoYowyY83S4LN9gFjGuyWoLaboDeSgsQcpPdmAQtvBGGCGVbtum2oYQ8Ys3MvqmAStsSqo8ZmCguhmFNx3KWFGZ",
  "key21": "t8r7VWh8yLMwQyiQ4DLUZfoQDetXFkCuUXThXtZ4fpWeCuscg73CRFVfG3hMETkZqsB9y1o4AP2mhtNcvPfzQTr",
  "key22": "4BCRhYLUXKoGKKnR1bB9neH3GNovL6sjxGRX9fdC7XjXyPJ6gCX9etrcDj7kWT7GA8UoVzz87pq4tAGdR1vPJZLU",
  "key23": "4BWk3FQjBkiAm2Cy1vqiScPWBbhiBSYVzUoY5RjFoZ5ihestuN5HF4Nrwpk8rKHTinadsJNqW7hRGfkaHmGJGzvz",
  "key24": "5aXa5R5Ejcn8XvgcoHCnkQcW9EFdC8GtV3ZUffbnvNwpmhNLyE5uocAj3zBPj7rH3EnDET538URjQZxQSdXC1QNP",
  "key25": "65gdGYyBeR7NqfrgvB7EJdTqNgwtwxpSuuKnwEazHc9ZQTQnB32qgykA3cJ82eKLLEsi8c6dae5YGKLRi8QjZZmy"
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
