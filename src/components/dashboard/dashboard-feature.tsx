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
    "5AHja1625NYwE1ps2vsvZiQBCEiNbxeNqoJyK3Gdosuk8Pf8ecYWuiKpgg3rYw8jcAQbPRaLKvjCNxcd6Wq5szD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JDDGUPDSQ4U7w5Yavw2A8in9v7kQBAnDQSeMLD4opw93aCwEXVPW5zeHwSBwjupZNdtBWEQ3kKjjv2p9HvSxHgj",
  "key1": "35YwvHtMcfLnDykAs4FC7dJQXFeJf63jD7BeqRktME8EZqYrBQvFKk5TdpYQxGQq87Qu69UzQ5qRL7TqU1Y2eyf6",
  "key2": "3UNE986RRfL5TZ5XdThQn8q5GnDqMfu2nXxqyAMTagV3AYYWHcDCKnM1uRRLg7tgHjhoqeetzQSW76JBryBz9Tcv",
  "key3": "5833Ne4vtsFpriapWXHWGCHBhqmJLDEhNJmb1mkQdPdLbRYrWdEMcLtzgdyQ2itBrusx6Rd2B9CUUcfafHAA2ZZM",
  "key4": "5hv5AAXUtsxFH314WMTQyVBMMzWsficP18WSV9AxDoZjiaU67w94FTVXeZSMDd7yb78WBbJ3dtAmfF1P8Dm17cyR",
  "key5": "xsbCgYyxpJVb38P4a8PWyJ5GbXQMcdGGNKDqrs8EmFx5wWdLh8zhoHXgvFy1ZUcHXwkRMDpoQ9eCvBBTt1c5dtX",
  "key6": "BqEJG2229JVMMJw2t96KbTdgiDK9GnkyMiWzANhtdVgN2MmTApmKuMCqUSDfPgyjuAGuJNoWYHP4vpQwSm9Yinb",
  "key7": "636tVgNboU12dDuVgGRLZkrNffTxXm24Kw8jgdVSZ5oHRHjEBekvbbUru6t29AWHjThBAnB4BstS6Tr11bJzffgc",
  "key8": "48d7WRfDov4MtbibEiBygDdqCcnXRcAzNjqJA56WwUBtBpRiCv1UGhbLheK8obBCgFtNoudzdrM4XkEerfdccdVw",
  "key9": "4pZ8JxUHb5QW9JzGVYfWZDe6x6mBxbFeyWhMeihnF7uPdZwXEbLZnYH8M4JYkJPFpkwSLjt6qSLCtor8aYmoxkBS",
  "key10": "h3nwSRpsPGFNkDDjqQ2sgJ5PNDZURtprudTvkZzJfds2Em1VBtp85389drVUJFit2KLVqwTMvWHMdvDeR1PwNzT",
  "key11": "vWPGS4kB6hE5nrkUQRgi568hvuTE1sm5G2p913QDTJeee1ygUY1F8vAncDocZAN8tV2tRFs4oCdfDfjda8XeT3j",
  "key12": "585CDWU9z43UvxUGVm22EVzxsaNZAByKxBV4cdb64ZxxF7gVkkV6bk6LmZoim1mpxmzT3FcnThhH2E4yxmRseU6U",
  "key13": "4c8QpLfDLYzCTBygkMy1GVdfxQa7er1wuw9rKhFNRhn2SSs2E53FthFz74uoJCMPtxvrPFUht8nqA6zhq1RAzo8D",
  "key14": "oiTqQHfktEobGT6oJDDpi2nYdARUfKzw7ofYQWUgiHtGFJ6Y2gCqs9Nfvk5kV1DRegYEGK1zVDJ6rsSwUxDaNmZ",
  "key15": "aX5Ew5ENavdUwH6Pdv8fdSFyExTfFciBcWHbUCVZVdznNryimbcUFrmL1LsuSKb66EzgwCsaNjQzgnDsPUYZZxx",
  "key16": "3F8KPMnrLb3aUPrqBBC7yFEc5Li3qwtwUptB4ff8Ax22TSrAuKq8BAy4K2kqd4tWTraonhH5ga5nDnTF2xfBTzV2",
  "key17": "kTrUp1QLuVR4oWFmiKaTpypVhHzmtTXYg3oJZTZcWxJ7LHtHVN3yLRJdBp1YdseUD4iEJCHF6cJCF3sRcodRGT2",
  "key18": "yn6opjneeAV4KHu3cZAEQ17h95gyDEJGiPrpX7PL65RBAvncFjg1rVoGGJW1R5F5nyYgaYbUjU4zcXTNqnikwXK",
  "key19": "ncinnnsyjmqs3dLb9cQX6VUebUPS3BzALhK1a1HMUUh79m4g4ufSDZsYZfoPnFCWJXpztUQrEKRFsZcsqiBMwyD",
  "key20": "362EFyhV2S4woykBTt8ZTxPFPhrkk7DNHiLDqTm7NRS8GuSRkwe1CL9MJRaACgzicCA2nNPqn8Bfxup8hJxHMNxK",
  "key21": "48nrfiTfihhdop5YHxYC8LNcV8URYFPoibtijLLmkhUATRLBmQuKKUfzXF6K52eXvXfBPmRWZtmtm751gGFAJZKE",
  "key22": "4gmuAX9kb2tTwPLtULGVe3TGv3sfbmYeBhz1P2vnTv4b5FmVonQ16b8k1rHWpNEnhFCZdApSXqnUSSR9XyrNvEBs",
  "key23": "4hTgRFwPNh7fge3W7v7yb55TzwaGtWUYyEDB43SCZRQQ7UcKx3mMhaLw5gBH6HCKcZA2j9x5SYrv9p6uK4ZxrHEC",
  "key24": "eVFWwdJKcEpa7ByrWvSisxnRofYNZfyNtz1UdDSngKTiJvTccUeWABca3SgZEYdEPEMaxzHbw7eTVzBvsKTd7TM",
  "key25": "55fKGL4JtasHc63UqfRuhT159JnwEKwyP5KT94XfN3PLKW9hqWmj7YxU8CJMdC9LPm8gtKkjCGNBwKpPU3RMBq6i",
  "key26": "4LmLYcZR3ZAfag1EMQ547grDnFTNDBisKRHGZ43f7zgeBHYSNCEduxVffr3sWyYmKJEHpgH7tYdA42Htw14hUm4y",
  "key27": "4QL7Ha5CJALa7DzM7xg9JAjosHj7C8d7uo7Cd1kWy9MaVyHAE8r3NqLzA4TjU61BgFs9xgyCEYrA8GyRXmUiN5A7",
  "key28": "5Ao2hMRJXP36DWVmxdUMAzaqckCGtDSLJ7ZYcWkXT7uuDBWW4N8Amy7Qme4yNY8AC8atH4zvXsveGnftQzipGZ8g",
  "key29": "AwsTC9ods4itWWDKynQQr4k46m7wsSx5iR4VFM6XVK73kuAAKPiB5ZLyppfWRWSRcnbwEyEALUk71vUQ9DbkL3M"
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
