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
    "3JrXS9bY6skozizfw8cGhukwuRYo4ZYmAxUHaVtgeJSfBpVtsE3vfoQp1q8613RJEaF5tdgm8VCoMCKSSSKH1NE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WZta87ZhkpncCEbTgrB4ydoYgtiaMfrx6vE8PSG1XKEHoj7oiyEFeo8pz7KEsWBtD9WvZPETP9tMVYb7CVBFdFZ",
  "key1": "2ZZmKbjH9JMLCrhCMaXsFt4pk2o5vUYxpSESNnuqD5aLrbrJr6PnNzhYWEA2GZ3HEe6eGp3s7uobAABP43ejRWcm",
  "key2": "cPKXJVKSxvy8SkdpZM4D9xmjWrDLwTv3jh2nenWTazttAYXghjHPCygcSvcdn4WrT1M7aqeVHiKJGAZVNaT2H6L",
  "key3": "2bAjGNu84MFegLusq1L884JbvnFWb6HBV4inzVGXka1j1XvKCfLe3E42NcqzGEcgHZBiUqwqM3dd5j4VEempbsK3",
  "key4": "56NQEYNHKxcb2Ha6Ajo5jU7GbBGipfvfdesGXDBb54RfBfL8DUaJiP6jAVpyasBNF2EwvZgV2cjjimyrB8uixBK3",
  "key5": "2HRqw5spyEVqM1N9juGQnjiZGALGGs9rhuoVrev4jKdGb74L9QKConQkpDVjnMhecBryVdq8b3r4b7JaskE7sg47",
  "key6": "3PeaVHUBEcbqVx2SK2d2SdPtpy43yU2SNkohBY71LbkchtcNXLvGgzHGWUNK91gxp4iKYNrQheSxv9eiDBJXitPJ",
  "key7": "Fc9oNoLyEXmY5ykTEGLznkQwbmcuC5uY932yrqFeCACv6y3jYrHnr2HMGdFKBmGYE1G326q2GyVyPqThmK3RHSr",
  "key8": "4H7rTfJ3o4ysa7RhrQPjJmQhTDVkKugeX8raGSv9jLNkCRazE5q6UVdpYg4a2XgYzXEUAzmXqErYTB9AHpEJaHvq",
  "key9": "5w8H6FCgU5MkNbpXdMaRThnzZ3jfRo7iEUdxFLDPThgBu6rVxYuKTp7dHUsRGXce9mEF7zZm7sPNyiNQHwdgaVyx",
  "key10": "4YFaDDmsJwNJX7shzMHAGKGgkDspxMC3Tj9WXxgqqPdgWkbehA8c3my76kpc4b5J8kjSt863ksvpXtajcVMajzq5",
  "key11": "BUQ5zQ8d2uoh96zhyyQHgkGyPGiM3PYqXSy7zUrMTAXjK5bgLe8xgZH3bbvJgVKGRwHjL1MRfNLKP3qRKuKNBNp",
  "key12": "5SRSdbr7r3S8959faBhmHg9yW6vh16KijtTwtVSC8BHE4iNe1qwGVB8u2LnhQ9zZhjC2QJt6tzg1hmCqFDVMBCR5",
  "key13": "5HizRsH7YyVkiScAsv7TVHiTsFuqfEV9g2RXtmuc7JzKrvm3ZnduZU6fgNA1XQ5DromGGZLNfhf7tkQ7x1QP6GKo",
  "key14": "qL5Y45fsxrhQ49n7tCF5WqdqxuDoJYQiSquQj9xCM6ZdzGjjni8YJuGC51XE7muCDpQqcAwCW6F2YLr3SomzGYt",
  "key15": "aXSLKmBSKvZoceScLQDncmxyndAaxoaJA3MS2pTBtuPRthTpBGjLPrxMDhoXUB9YUs1wKWpfLEiyEH7s1qLNxHb",
  "key16": "5imFFTwdEvhveyGfwBDAWPDQJuHfAvQRZmmtRg9DRNsjpuDZA3Mvfsgxf3banP2kexEfyitUFCLJ3XVSm8X4xamp",
  "key17": "EEJFUPbHfd12qXf549ZzBUmLuPHxPEMPTZMGrChw3UFTRN6GzGpcZtjPThEGD7yLxhTPVAbXWZC19VfqD94XQtz",
  "key18": "RJkcRp1sVHsUZHgbsjSZzNJ7Rm4b7eiwrv7QJaU27HMF9avQrRa53FZPrUZx1ogCKUmhUmL52mwmQdhT5ZAXQM3",
  "key19": "4o9Rf8W6vq1H7amHVCQ9yu8fooD5JqxoX1S37qfcqZRdnoTvWpgf4FABfw5oMXbtVaYFDoGdRGNusNrs6GrAgybG",
  "key20": "2upnoA9bS7N6fRm6ct9stbojEzGEwjkTfZKZhtWs7AwCD4sMLyMEiaN4NscMXYhDZngCw3LTz1qgpoKtJk42EDnr",
  "key21": "5fMk24rAPywzSgf8taJrsNvGSjNzxpc74WJwMAZdQWXkr7qeQJ6a7YcXcLhx7sAxiLp1vU16sGQSwAfDy8GuQaRb",
  "key22": "3HZsmHjPFMoKPZs2w9gSW78fh25mA9jRiP5jQ2NRmi2dnzWsbUXeq7u9CeZqFN1QdS6TkwtrZmqTSEZfFJUzfYyT",
  "key23": "2BokQWVQf7GM4TQ3vcakhJKdwLQsCWU98ZbpiySGbCoQELQzqtGmLJ76dByN44ynr7XK6Cfb9CnQ2s8DyX6DpgRK",
  "key24": "w3p77KKZ4YSZv6NfYemm4whyRDDVTdGzL9m4HUeqfV91u6WvYg2cuKRdhPH6yiTWxCUJ6moEjsoGN8Pm9Hu47RU",
  "key25": "34X5kV5xF9rTn7v6dP7Do3jKhvio8WVye5ki6tNSg9MPKhEbM5D8T7LmgxpztZZhfafeE5axerjHh1PRr3FwcVmA",
  "key26": "3imiXusbQgga6mxTJEPmyQ65QHLxWWKBwTowpD8UKpwJaTi8mKAtwg9g4cbToDjJwpZjc3hMcwWnLYTkzc8bkZR",
  "key27": "2NquYshCCkdb8HAySymNz7SkmHquT7CeD7pg2VWm3i7XJzCqbJPrrnFEk9v6vgVkobrZUXg4E9f8W16c1bh2etwq",
  "key28": "1KNeFJxvsh6NuzwKDhoRN6x6BD9bvNsdM3VDu8LaPCKLfN9Ci9swVNEUGPK2UuQJ1sZaBZ1m2K7BbXjkAN4X1N1",
  "key29": "2PQNACXXA4LHLCaya7cpvWtYyQnw559dGQAR7PmGbThqrj9daXoyXMhsBkA8AmFaXak75UuaeUrq1pfgCksqYGST",
  "key30": "JEac3MHWgSe3H9QqV7ShY7k7ENxH1hBe8s3PwyNxPceBNPUL6n9E92ptp3UFQCNpVM1AQ6tJM6i6ZmX9PKd2q8y",
  "key31": "59snDiqtToZt1Y8155Yce1Dx8mbnf9cFvCgtYQHLtowMARVN6CDDBttDi5r8o1XGQVsZg2Pi1X4bxXEVQ3re7x2E",
  "key32": "2PSnKHVJXtnkzqAo5ctqmoMVPzMnv7HdRWGD7k5Qou7guXFkN1cdMLQYtbsXRUL8XNJbVTRxpABYTnHUYDArZzRi",
  "key33": "276dhVFxtV28pgpRZbCVxvYDbMxsp7edtmcPh32Zxf3ecfZbfrPnAgX5XEsiVSLzFHp3ZSDMzH6gxUwR61SsraZJ",
  "key34": "2z3ahoMGDgKZkiGcQEWPqVhGsBpBmVit2L12ub1fuBxs7UY2Fjfp5PytmC588X7rt7EXJ9iB7tVeGterFxMz3CkP",
  "key35": "5BSErnRsqDCNmJDXi5oESQvG42rhbEVKBrniy5f9ejDhmaTQ6cpZKKPLV6WsQMDFbxDbhSQVPi5MHpN3SFu5KtM2",
  "key36": "4B5FnwgNrizmYVhJs8dZyPk6RzkXJmNmCAZrt2mfCPACgRToRXv8vCHAg3hXK6spJN7Pc4rESy1YoUX2bZdnKrWn"
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
