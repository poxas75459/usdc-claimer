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
    "5jxBC9FzBDZsy1WXuGcEFvMK8pnGjJQXq2Mn3w8gQzuggmZmnDrjVpZMZnQJTXSfwXVFetqkzcqe64bPdznnHMy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pHF1uYaZd6GcCoanfE46jutin2VytgTeJDCsHbaFaiAxmiscLqmGfYCLcZMJ7MMt5QkabUZHgNA8WpJcgQS8rE1",
  "key1": "5V58FUvxc3Ta1TQgXKpCCoPD7DkXBUZnBLmWCGgDqv3BYYBgpm4KTV7bpmwemtg9632AWBwVPJEBswqeFssXNqVK",
  "key2": "5kYbMT4Dbfxefs69wNDrYkqMz4MnWWRKHmSGnwBrxrk9jA7qd5fAV4rcwCZquuicSWWoEgH4zRvwsTXKTjdYQRVX",
  "key3": "R18yDx5eCtSq1ny5SpmLLFGabDLr1N24X3WzmA9epTMjW1vb3ReP8GDdzevozjD6xx6pQ1dgpdaGZckbAkiZ4MH",
  "key4": "2Gz5yKmgDhaW1THfv918qV4vAMhJC4g7pvQJXW21edHiXbAy338QCQEarZ17upxL8FqmoFkRTeWYsZyZK742o59V",
  "key5": "4AReeT49T8VprNDHo8BbktSsumzM7ATNLjRdybP8KrSy22rbT7yBCWvt6i2Utuw5tJq2HBKDXUhmZAW4n5vrgXGQ",
  "key6": "5GTXKzRKMiH2rGEW1U92t61mDuWYpStNY87KUzdiLJeASnYZNbPg8RKah7RzeA34qX7tD9jbgbjhyiFgj42EFMWs",
  "key7": "2DUAJY1vCd4vzwqgnud1bV5tW1wkq5CHiTcG9d6r9EJnf3UD7QewVgtu8pBNW4it4ywyNxaobXWxsmExF5JR91eK",
  "key8": "274zUXE72hC7mEgYUg4XWL7j87Ddk5tDtC3jxn1cAt4q7Knb9A2caxVWch69gZbJ8txgwJvmtavHSLYFJjxYeGQA",
  "key9": "3pwihWwVqf9H2PNDvrK1dxABGAyFwwYZQGoTHRf6w4ZR3HFqJnUUvSrZ7i9nYHxU7KvTFwaVngi4XbEHky6unjX5",
  "key10": "4YAe2VSeDcCwsa7dbok2kgmY1BYTU9A1PpNq8LBs8jefJp33uFiThpE4YyBdMDJbu6At4HkPV3LCcnJ5urXFzmAp",
  "key11": "28NBhi7gm1ezwDGTf73V68jVfE3rVSBfmoexVzgNHHCGyfzWitsXwm8a6q3ABCGHZrs6atDvUk31Jmvha6iaj8xi",
  "key12": "3yVLsfK31YNUgRi5zNwTu2jxxViUyqmkV3NgeLQQAhA4b3Sz8sbhfxP5wj879Z5XtmnHvbVQiq1udfeqLYb7UrqJ",
  "key13": "4343TcJZ3P3aApGX4wKrTd84QRjqxk28hX1Dtq2pHG9s81j48qrLk7q8BwYfNErcVttfquZachevFFeQEoTvHn6s",
  "key14": "2zRWas45QpwrpjRx4sv2gX2BmPtyhEE78AbFyhPTdnDAd67Hr5hmdvpfCEhcPG83AKZE3arrWGjMtJ8pb5EaGduo",
  "key15": "4NSSoCHALpbmpVMbxx92UHgvWDmwN71ZyzMDZdgKM8Hc5G87jRNh8SM7yQLb98YzaonzhmCwh9QW8z8FRD6JLKq6",
  "key16": "37CUa1Nzt9hAHAJRupYyxGYzFgSZV9JS9eXfjeevtdULPTAFb7FM9h9uCogZamd3wvptN64mDq87ry5snnHXS8Vp",
  "key17": "51tWbZP4QTCguQXQQggVbjUAyDbLE3T37nGy2NdYZt1BH94kfqLumMsXeV3uRryG1behiwptap529ZxVmj6AfYsH",
  "key18": "FAG1Ne9PyayUighcExt9SDeiFbYp9zyz9yzJ3YdtqJ5tjMghuVTjTwruVN5dGSksbZXNrERnWryhAq34UVSEwSX",
  "key19": "2ir1SYLGgrGjLAR3JVStUCbsJX2vrS66nNjKufoj1DR1193FJXn8AydhS1CjfVAL1N6ojLb7VLSXmPoXR6H76FyP",
  "key20": "ygXEgh16RuUisBGcGvKDFmGJFdTJsFnrGd145jCjdGdSjBPeuBfbGaXKbTDZqSWvRPHF5bL4FHpLMF3XviYnzNG",
  "key21": "55oy2UX263zzVURStWydeLLiC7QW6nBQzmkTt4j2KBtjLzGqHkjzKDfmz1F9pJ33YChhZpnmVeYRxBtYtpp2QPv8",
  "key22": "4weXh95A2xsyWEoNK4zGdza3Sb7G62vwAWziN5tybdiD2cyvEQDQNY2zRL1LJwv3ssLUrBHU5GVEB8i3LPeWgqZJ",
  "key23": "2SCh3sdv88qdrSDbUySMNefCV4NS2gcfob5biWr7E4uE3axvuuXUwuEvgC4PD568FVVHGogPP3t1wWi3kPzZngsb",
  "key24": "4GrhE3actNJze6RD5JcjsRhxL15PaQ6G9ZGqy3UGE7iufjNMuKYZePZ8aE2PQ9htUcrDx3yQb6w4cDrsixBaYW2o",
  "key25": "57ztQWoNpPa4HojL7nHiVzNAWzugLVFsLWf6cscA312VdqVm9Qw6stcmPc3wdPYZTVP9AKQtnASYmsUSkjBYkgs2",
  "key26": "42sXyxzZhft5nZArrSUS41dGargDmLuEFb3BBSgxZq1RYJcYTb5M5XXmwhbwFkkobZB83nacn3PVPK1CzSzFv7M4",
  "key27": "9HCJVJYH5syWWpwPoxPQAjH2vVwChkHSzPtFUCCGQgHAuJm7pPGhdM2H9MZNsLcrquBJYjVhJBBhG5dRBDNCBt8",
  "key28": "5kEz4T7hnWCpmXG9P994wyD6uV8kfW7hzyYZqJoPkRF9b59NotZxLSGspmtBK3i4gqDBhv5pqVa1X1ov9zzWJAUA",
  "key29": "3LJwptEQ1yQBcVgUTKqHrZ8QkE8HiW4o2fpwhVkH2LoyBR1vyNCzYeqXLWEYGcxo1edA7fLh4FGXjnbsYJ7cY1oN",
  "key30": "G64CFN2xfMYdkvmJPSm2v8EiEXqutbRgM9ZfHxaGMMjS7EhFEtxF6thDTzbPDHKwQKwmzKNdLGpaMSHD5BdNqqw"
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
