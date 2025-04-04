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
    "4WmCtJy78SJWmFNHiPe4Ft2KZBUCeZ6s2VuWSmrxKp3EhN8fgdbqHV88odsiJACM1S6dWhAoRtkWLVY9Xiyv5DF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RHAELquNij515RaKvG3eqZsUwFDM1Kij3ryZYznYTDyVkyUgDx92LaiqdqwdvZNByxv7CPJrxWxmZBLPFonZAVH",
  "key1": "4YHNgNTMcsAFKam1iz55RgcTZ5N1uWmMMiEmU7WuCFKZBfwMhfPfVAr3TZAreSr2xYvvPHnRwcroAa5tM5xzBPq4",
  "key2": "wLDpYAZpfTx8295hr53nxPo7Uq7UoX5tHhNfN97ZKK9dZgskSpg2SYxKAarprp8bNq6bqZa5C2x2TPcY1LKAEkr",
  "key3": "63uEU3HEYLmtoZFcTweMoy2XRNLAyK6f2GzoMA6JuAebbQCnu5qi5AvxAAfG3TwpoAiANvjF38iTNXNz3KAxv5SW",
  "key4": "5zt5pNapuuLXf86yGXraNmV4FwAuoACzcwrxExAKYwJRK7BXNJgUPJLtKBNvqVpx1t5w7EbNKAu72rutbBjLrqpx",
  "key5": "3aD27F5jXCpvtTbJkpMBzK9KVHVxtTXiCcgsbRZwKGFDHsG8KbutGFNiqG1FPq5C5yiEL3rBoRqfUNNxfp228MpT",
  "key6": "3ppyZResdThzUZzE9P4ZoarDJrgEB3MgFLEqdTBQ9vbzUQ2mjLKipaPPfLNSTMhDt7QrkkWDrhmrRueD7cBWQ942",
  "key7": "5Zso5fPyPhof782pcYw7qJV6YUD3o1YgVgqYU8hnWZbzz5GRT8WRsZhdTdPQt9JT9m1enmwE3CBrCZbmM17iwroZ",
  "key8": "4Y4NhUmPa4bU2quzY6m9URZawgxEddcP1j3rii65tp9xE1VuRULBwd64H7nxRnZ8b14Ejjh3YPqfPSGzUnYryu29",
  "key9": "tFwH4D5CJPdewLoNWuTichrpeAkuqosVCpSX7EiWnCs2iF9sCfyD1dsxxDVaLpRk1EcZEToT8YyxvH6D8zGdXdn",
  "key10": "3KLFTZpUyNxk71eLr8FCJFkWRCTv8oGzEB85aqJNXMGTxQiMxAtGccSJ2T3GbGW2mLXrDdTsoAsVeRjmiN9Prd31",
  "key11": "5s9w2q3G9kgZdr2zchPHUmoJ6zJGjNbMV3G1SDgkzrTvQwcsuxE8Yai2BsBfRVnA3mT2kwY17nwRKzGxq5hAUdZv",
  "key12": "4Ew7AqG3CBMA39LEo2Sef6iPU2W18vdYyVjm9GBHRdqK5ZFgxptmewvymFG79Do3PUhDYmcG9NzGKERx5AW322gj",
  "key13": "2uEr4oKNYuxdwabfXWTWYhzJuQfRwGZnHHZoDHovnj3EygkzN3krmbYGNBDSnPxo3Gpg4rCSvKWPiz5Kof9UFjJY",
  "key14": "4dv83mr4Gb84KCzUJyLytULFacqG5hoxerJFgQutwtQozGwfG5ZAd6gLtXSjmg8cW93LzsnubsYAJ2SxdscMxhiJ",
  "key15": "ny7mjNQZmLrH5Cs45TZSs4YwxM7Eq5RcBFgjWnnMDvZCSeUXpHiK3X1wRBv47WvSiC4EPfyde7YUNzeJSTE6sqX",
  "key16": "5LChu1895Akp9ey8nqA5GKkESSPBUGkQn2RdTCzn7iYycUe6XdkepTnUmiP9SrPH9jPkYG6iWNdqzwm9eJcnDBXU",
  "key17": "62ZPjVsRRURnktufKisywJ5PuVpgr4BozRRwpiy1LHxqnuA5JnbFJSCCBviwQkcGrcXSyfWrNbwntkWnc4ZuvAr2",
  "key18": "3i4v5EKY8d4wikmG1gPKgSLwBPtbZMnV6uLxs3nr9TvAdmZwFZM9c4fD54FTL3X7dbyJseMNGYH49Tizf9mo9Tp5",
  "key19": "35CXRgcgi7jZsDQ5Zz6PemyJ7qmnHk1TRwKVv4Y4YMew8EgrUB6CsW5cb6BJZ2cR7Fb7aZyCJR1cHU7yCbRAiL2J",
  "key20": "24ZHi7qfGyx69iZvvGzmwExNbGn3ws6akPJgjULceBNZz2821rNP6vuQxcwDkfPBGiCzhWmyr6VcEhxcbFrmqr8H",
  "key21": "4FAUU9tHPfiwqVvUC66DNSjA7dz6we5GHkzaRS9Cc1qBxNFh1Z983puBHPDDfcZJ1MxjYLGz9PsNJa7HaD8E9nTw",
  "key22": "gLvepdaRtjcFktmeptednW5MuY5fayjU7cSJrASKvUtQwXPdPSfQu1Xm67YvsCP5C1QwuKkF2dENriMXqkJgcwi",
  "key23": "5QtE8CxJ1hx8qzdy9LnJTf1BLGhFPeGjcsseg3qDYpLCh8YXAzSd16ngyPkbqrdLWboXqPUkysGK1QsPWDA9cWZT",
  "key24": "bw5GyxAUNrbmLLKsWMhN4dtknvMYd4qtANwH7fTvEV79H6JgxtCXjbdkDdR4j1ygVNCctDWD1A5ghYp8oaNAt1K",
  "key25": "3NMGKiN2bt6Qso9VLemXkT7hUk9o5SsUecinX67XtaqUzueK5iZtUbpNZmt6QwpDYCCFUMmorYJrGB24G4zjwfSJ",
  "key26": "YSSboEAZCE8NBZLZffesrWc7f95JjjajGNevgRgQVKdehA3CfTie1GErtMM3ywL8cRSotzKx7GqgHiNpMPAWzUS"
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
