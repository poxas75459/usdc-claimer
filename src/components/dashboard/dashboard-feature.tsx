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
    "5AoDTB2KXKtWDts1QN4WrLNhT3k6k49x8DcieUSzM4XZknxwJ1jxR2RAPdciFqhZ7w2kVEifFGCjKno9PkUbFX1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DED2Spzq2W6eygrD17VJBMXUwaP6ASXW1vJm7f2umFNqcdJpsUQSB1nLKJJTeNXQhVGvdkbAKmr3eQ9r7vCB1f5",
  "key1": "4XDc9TdhYBd7kbCDhHRT1N51Q8U5i2HE4seUMc5F5658puFjDNCiLMGPReaf3xhR8XdHDBTpxuvNQwGKDLvsUCt9",
  "key2": "4EtJ3dxmscVtZHWbPytDRwYhPfNaKPLB1h9fYKQUqmwPdkGb3NLuK5RHkchKpfymzNfQPrCPnQF151WUQ2JJvuef",
  "key3": "2n9HFf8bd2yXH3EqUUY9W6HjedXGduPXWW8W8S8JG9KzLhAUBy9A6ZAkMsT8HRsvSKjFdsS7q3SxmBy8qmbHMiTG",
  "key4": "BFh5ozae1MFTbQviD6XzsMctCvNDtgPi4wUYgw5vqw4LZNCUkowSFQT3XGRjmE2p9eU3f6Qm9CjZkpfYChHSDt9",
  "key5": "24L9MkagHew89tJWJKHUFeowfYM4FqFFmA8KKJfnLXTR22JYGaeaC5CkddQRWVSgZHHLPeabQnLy9rCfW8i39D9Y",
  "key6": "3sUtBb1KY8WQZ4hXcAtRLEma8jG99gXTX1B1Z5GY5br1DsdrzRtq4YphnBCFnhwkeuE5oJb1uL8KrVzCLwtoER5A",
  "key7": "XXtRbEQza6ASmnwWdMHVVxLdTCQptPP57FM42a9Safc4GtkvxQVhwAvMGWeoDfNEf96ggRUweajHz7b8xHttwDT",
  "key8": "4KnSAjrxkQmp1MmgbgXoeZGHCEp2v4VSJq8iPXMfNN7AqK4NJ5MjPfNtk2f2qD91BCrrZiFLpS2aCYsneDDbarXo",
  "key9": "5uUYgKW4L6hN3FJ3M3xLDArKxSP32QqAx54oxLi4okeLgjdd3KFujdSv1bpzyFag7Y4smfjaJZ1jH2eAEr8HBSvn",
  "key10": "YBRj9JwEVTZHDNmfL1FTuBUsMSXaRCT8c4fpg8JG7oAWQ2W6dPd3FRskBptStd9tRThqup5yNmpK2aEhtCLgU7b",
  "key11": "671noVP2oYStnfUZ9dUj1PKtwuj4vPvRBvHBx3Kocvo3TdY59PNhJd2rjf66ous7k3mbNy6K7D5mQdnbon8J4r2i",
  "key12": "2t9t7HgoNVQJLqb8Nf3FKoYXaaWEXstCHZPmnpxCtib3kmw5jgt819eVJrsbGnC575aUSDEBuKUhpqmwiXuQgDT1",
  "key13": "4W1WR2J3J6f6K3UN1iPpmmPyjYTj34oigP5Mhh8kGfpTnYuUCAfjhAjR961PNmGw1UAt22Xiv6P7Esqa9Nk9x2Dq",
  "key14": "2BdVh5jh1YZUVZGUEtmctNyPf93D5wUZvwkQTG4fGNuXFn74zU86Vh9cBm7ejuWmrpk969B4xzaGm93tSGHwqoCe",
  "key15": "4FEwGJgyUzLH4GxZF2UNNe3yBgNLqvgPkFzHC4dEE4QfAAYn5wz3ZbPGw3t4De9Mko88eCr1nsZ1yrQwRWQeMRcP",
  "key16": "2fj4va3oM8EXN1zmRACTnYYfAgys25JNCmyRHja6c9EMptau4MdrEh4LTur6mCbq2SgHCoHhKRm1zT3TVYd7SWZX",
  "key17": "5VYo1MVqzp2v7gS8yzu3Jm2fNoMadNTUq7Q55YymD2YjtFPA55Wd2bCfhV1BV8C8KxF8okwj3GTtV66E9JMDS6Kw",
  "key18": "xKAnBs9z7fnxR9gQa9pE6pqCuN2yAYkt5UWVvo2qbe6sJn5VpFiNuuScR3chTdBRUubPPRerTNNHcG7iK5dthX2",
  "key19": "7V9jr2zJUqLGudBTDrprdpDwfhkNnhxRL1VuypyA8iDqSVjzfoCF1Kecdf8TwmMi7NkanYxLfANRYXjps55To75",
  "key20": "5geV5JCbgWLjJhQJoWuVRNVDgUeVMyXUfo87Gg21BzDKZWupZ5zpWJvVFWauxGVSZH7wP6PoVJGP74VUViGbFgoG",
  "key21": "3SnfEygC7xph6zbP9VMeEUJ2fFDGVTXu2B6TMsZkpJEf5S6ELkRjGCeiEV6Ww4EkjVww1xM3fjgtAHkquK4yPdfb",
  "key22": "5soq38UcQbuWDxkraeZrjSj9iZtrkDde5eA34JEgAN8xXcrbbEunEUvJ1HhhiRh3ux7N5tcM3mEktytyieEUpWv4",
  "key23": "5ivbV7wPfSkGYZaB8kS4JHKXhaDfYRGFDXGrHnqefDaiyCscRQzW2LHVAUo5CzkoHH4ASc25eWfoiySmcZ7LtDmp",
  "key24": "4FvVVyZ2mrrfAFKyFePad7HBxCw5yFuao1eVyBg8ZZH6VG5H4FsquMsFs6CwsfK52zLBrU5fccWbD2HWWQCjFbFJ",
  "key25": "4WjvRN4FYXwSnsMuFtduzQntgPb3PWzS9Kj9WHTyrkuQsNpCZGvQ62PXErGCbYYUTKTHxpsBiqvUJPjMLor6zZkv",
  "key26": "3LQJtDiPmCq9oTqwgBBYVq8RsH7HTk6jCrJcbMRERmPzFwBczyD8Yj7yFYpcBsg4NmmMrdinU1L7h1dP465MzmbP",
  "key27": "33W8jf9n2NPACncNC8ymCCrxwwbYtmLVocmCmLkx3TmPsiauhLqJQCedAXDDnAwTW7dXUgDVJxfcYacuZj1CZd88",
  "key28": "CDMmNvMyzEK5q4wV5gjQV5tAJgsUnv2ufJL5mxWR5StyNjxVsZScbpnu75iZy1J5npd57s7HaBg3rwVwKoxkpHZ",
  "key29": "2pLXQdrPPzkAexTCXdrU8vYB9ieLd2w7SGGo6vA1UwqNFQvuibQtFXeLMZwwGhVioezTWjBqjciejfajx5JZ2F3A",
  "key30": "5DKJdsXRPNFNs9yQ1mYvSJkpyBikAYkbsoXb74rkDcdREnJpE7bWhiE4fyiGjrtVE2QXHFtoH7owG5MDPMkLVLXP",
  "key31": "2FWNWn2gtpyCWzW4vFycQ8mEB1Qd15xE2dHK3PZmMUr2iNJHw4UBWWFKY5C1nhsWXPjcbwsxRbDrByPnwGc7bYgK"
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
