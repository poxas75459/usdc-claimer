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
    "37iemzsb3R2URfnoaPfiMVjWqEe3pA2USQqJuSDHc7nuKov7PbTqdEDTnqreY4p2MNRMjQYMa3nMkvFaSNwnVFN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mdPogj5fXJKZe31ChoiBc4CCWZBCqDqn8NzuW3r2nUULJVjTANbaNrdcef2U7i7wqSvana3HTMDnFk67WZsMaBY",
  "key1": "3zQKTriXwBMC8a3kuwFzNupFDsDiMP3NbE2fzmRrNaoFGKaDU6PYgDQjX721BkW89SunGAYM71eWnTYPmQuEQSor",
  "key2": "3o1D3xLj8zmjfaq6sjrms6oXsUnxv9JDTzJRULqUyWEPEtb4VnGZRavVgm557yJc1GJo6RapsEwjyQa5Y2w8QXhY",
  "key3": "5NpnZKJJkLAap1AfjuyT67nNbGgtgdpkakRuNfyWTPy7QWcAUbNrq1PMnZhE6tq1XKstJdFrn1R3iAjzVGj76TfN",
  "key4": "47JK6gmcH9pjKaE4MXSgv995U5LMXCWv2qi8624HCJFNMug5bbCaCURoxjDw9hyL955RghgfQBm7wgAGVnWHEScm",
  "key5": "2h2yrZfzf6JzfvVqTzjcdsi7i8KnBeZGCVtEvGCMGPYjW9XKfnfcfhq6A8LDra4q43Z43UqeAu7kfyL8ho7N19d2",
  "key6": "4rmhxBn9DBmtu4Ty36BB7xFBUarCijuKtDCSUmfoJZkQcyfB2rJeic1fJrsTLNWLYaWJHeYwA7cSaNzqfLhpSjFc",
  "key7": "629RMKMQqSWPxcBBhCzjiZS7WbhKgfQB7qoc1AZhYo6ukYaFvgDyQnSWcWrNwYEPrfYXRqbSeChrKkBdGKPwNhwg",
  "key8": "5knVBKWHCdnffuKTuStaiJMPt9x9LeSbfwpPFLyqXQagqcGMPYL94Syeez1gA2ECHbeE8b9WKju4zVGmG45rFqyk",
  "key9": "2A6ispnvHJU6Hi5DFpLdAnooGcPgTgbPbMhzWTswUWM7n7sGjzrmAa251vjmv6Kg2Kj2UgdqXGQQGnum3Rshu3Bj",
  "key10": "2NV17yriHxqyzFEtdWKuHep5aLzyY1PsHiXGk98V2yHcpkc2RsnriYRjNAsaLeNBm94nmUFJNxguMJLgZY7q7Af2",
  "key11": "5VqSDrjz74cH85jHBowi8FLCnfWu134HnH3S1tca5RFuLxr3x9ErwyMyGaRvQ23VuQP5GMnCy9WVmHc4UvEZL5UY",
  "key12": "2ZEBeTWL9r3oYN96WtpZRPFRTtCwAtN3d7EzGTCg4JLVmmiJeosFMdeJJoVz87XTyyADnZGdX9qweEAutxQEJhzK",
  "key13": "54RPm1YT456ym4F594DmvnpWDKZvtTCSvTRVuwfNBtpCAcGvJUCCJ7oMSt5ivp3CB17aTEf4xMFXewoYB6rkdkBy",
  "key14": "5MWhB8W4DuLDcwd25AupbcNQLkVvX4FZHUcj6xWbtBrrndjqB62X55Narg8fuXgGxa2wTx6WRUPPQst6jQeUN1eh",
  "key15": "45XkqD7tMoukTdnXyd8AcqRjMwqby8v6XVTt8F62rMHtaJ4JsfzNZaGHebz3BicQ3dji9iMdGCRfReYj4F6fy3Z5",
  "key16": "4tCNYZ8FLM5zEVSRsQnwy2E7bXQwVdRT8dyKbGhhQDj6m8pP9kuHazCmygVWfbzrBLuVGFjNuJNDFXAhG1cgQfw7",
  "key17": "4NgnfY4XGF9Y5S2KQfPsoSP5ThWqLXHve19sQ2p9ieJYnsFbhpxqvBXAQcXTUhKWHn61pH44STabC3z73jqJX4FQ",
  "key18": "4XYfswkkshpu9GMkMBKtbwhFPrLyuBbvXRDHYSxbRntcExR62EZhiaw3msgEPTm57bgsTVu3xhXzEeNEWqgxMsv8",
  "key19": "2riGdmsrVwrKUq4yXJ78rd1A6XX9YvLBaWeW7TDhyu9Bst3KUiRCYNJ2MAoGM8pwH2CmQ84NWkB52PjSnCW1GgRd",
  "key20": "4anDhWV9y9p8UzvgexfEbTDmgaPazdCWUKPvWuCyD7XAE9dddR1HQ6vtnQw7X6GpfURftQBZMDqV4YqsGFwd8ZMd",
  "key21": "2gzPznDbGeZsWJwgbyF92sYNYWbPD2TWQuhWCRyLFccXLY6PR8uJMsBF8tqQG9xPZp8Fbgf1zyYc7k5HdLAsnMJM",
  "key22": "4ozAoJ7ZVV6dSjhyBihUjpZ6SofixoJPbDmTVJ15sCWDyf1pLmBKoNbhg2Ao394qQwLNKT4A98jEV9JXfgj5PzxF",
  "key23": "31VkCkQPDixivoe6ATn3mErLWLzbDbEaLHxNW6V85Bzt3iFxHXZxM9Hw4m3mzre5dEb26kG1GVUA9T2JBFfsRHoN",
  "key24": "4k8ShBjWqUGcu1UksDaApK7VSCMPRTSSD1NpzvgeyUhU6WieJL9MHw3ZMJS9Y4LmgQ7HdvufDRLGqHErpYFF6aty",
  "key25": "2EzwsC9LhGnnMWxzsxV7ciJiw1FhmEGjn3xxDYViCPFFrFpUg3cAUgRTMHxM8oZ5oz51MmUgc6f9dPoiVeqDGX13",
  "key26": "4kPBNx9kocBogpr8jUKDvDJ7gLJvsPe9Ec5pX4XN83SCYtou9ZG7JJQ3XFiCRdeBp59rspKkRQeZ7k1pFRQ5kPAK",
  "key27": "4gU7mPuTQUrfajHNh3nteATkiMyURRZ6qSgEQdLYXwDueLCDVX27ZqNMpckTpu9SMn3qhiJX8HURQNxMvmmKJS9X",
  "key28": "3L6buiVA1erCyMuduGVtyrT5JSEr7aQL7ckTyGVQuwQnkDmbzktdo4j1PRTKCFMzR95Aj7H4zSv9fmd2NcKFfabX",
  "key29": "5eYqLv8jonLEJFHJYx4J7HpsmK4PNktcwj4R1abHtJPgmhyw5jFtZjk84y4K7o2XoJMYvK1EFCLTPPUm1Qvm82Cg",
  "key30": "2FmjkXuSKcxEh2b8pW5apqBcWyjHXdyP8KMPs3UZn9XvZhvAh9A6dSZRWkqDNRKo66cyKbyPSw2nELQWxLxtUAJf"
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
