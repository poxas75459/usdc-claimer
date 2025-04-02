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
    "4trH9bwwr5n5js8UvSYQommmEKA3nRGGh4M5jNqEGso8bE5CuRdVzCijZHW4qaoxfs9g6N3LEvtL4gpybDNWFz7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ShnbGjU5ek3epSE5Ma7zBg4t7jJkU2TBuNoLEdmzh9U2bkMf4yUYXZbDQemPqq8fGRnC5pfwCeEY9mtcV4dYtHA",
  "key1": "R953Q9hi4VsFrTP47YWveAFeqF3CEkj6FAr3yPJSoWH4mDMmjCQQJhRTr1xpcMeDXJV6QJkAwkhx8uMzABFndws",
  "key2": "4b1mfF7eLwREYMerVKDhUYSVhz4EUUcQzr1K3xGHQCEYUEcCzXJ55WpgthHiXXL5YuFUxpt3Fpe8EghcMvHBo17K",
  "key3": "57eGL2VR5ixqhqH9937moFzXgLwEFPWyVwLWbrghCXNkUz6HYit7Z1rnfvk3rmVRRX6ZfkcrnJWtYxUSxm7SoULt",
  "key4": "3yaoFpBXh1AjVfbgz2RduJPXWT2FamzMBNqTdTJPKSJjkRSFVViz599Y7YM73cJ5oNFEBuZU315vLzQsegmhpV2H",
  "key5": "2r9Cp5J6QXyaEuexUhWDcgZWb1rWwBvWaZkRVagz2do1nxeQQjkLuzQu2KdrPuPmHHYJQzUx1LYbB2MgmesrPMFj",
  "key6": "2h4aCMgf8YXEKy9UxPS2r3iqh1bEZw5VK1W4rrcXAtNQrP8iLMVTAnLQaoHdo2DCYToXBhoNUYJnJgqZmebB5ALq",
  "key7": "3YpJ1vGeKiWbJSfggsGoay9eUJC76AZ9eyWCgbsyx9qLdW3D5jht5bLbKhmxAppgEr63eoNHkSE9L6xMiPA4tEB2",
  "key8": "4TpfbgYvZj1S3ycjDkV6jQ8LEV9VfEoA8JuLxup3Cg23jXPDuhs8Csu44bLZx6hc1Y7aGXA1QCyU3w9we6hgPFBR",
  "key9": "3cMaJAoQ5TepJnv6TRroZ3i9T5CWNenr3GPBECSD7khYkqCmSshHRbAhEvDcmbG1XN2YLLNqWEEWoAmp77Jsbtmp",
  "key10": "hNxaDTtTJ7ETFLRp1zDweL7bWjTo1UMcZwRjBk8DpwUFLE5NJEKu2z7cMaBfwSQJUe1bp8kai9uYR8mT9cSAYUN",
  "key11": "5wcJbGRQiwxPkv8npC3No6Eoc6eEwaH17wKZyRCYUkoSr9mk3yzAkNdyae59h1pgbJtHYmxn5y8QMsRHnDmJYmwM",
  "key12": "53ZiBEQpygQQusAN9jzxetu8JyNPkxwn8ckefyQxktuJjuDj8v65ogSHJDtrXgaybFBZqNF3PWdup2vo9TZo3MgC",
  "key13": "5UKFen5WpiYHnSJkyqYbMdDuG1meHPRwksUHTcAEHKY7hXFVqkF2kxGSpWDmGfjNUP84mB27oLXjz2772Qkz38Xa",
  "key14": "3YVbYcuzCehE6psfApFpb6x961s5DdeVVNZjN1XzvRSY52AjtAvWgsgJJkkXUT2V5tv2Sb5udKfg5oFkKstEyKKN",
  "key15": "64fMs5qeWZCc7ajHWPzUYUd9rVBePUbvNmGRcy1zy34BBrZxAGRehkEvozmMtkYDnrBbAKVYgCYyxBEb1fFiqmox",
  "key16": "2w2SRQH6aYvEMwUss5UGUsdjDp6bLdAWji5jzAn4A62Y16ri2yfuYxjChGbtXnU83T8bq9mqRoubJNYBdGvFRCkt",
  "key17": "5xLnx9ozujTNHkyaHienTzAknEGWzKEA4ugFLtN4TKeX3n4kFDbqvdNThaHWb1wxwEPjsuacGRiHdFgofRKR6K6H",
  "key18": "33CpM5tPnMEe1v56iaXBLM4hdorAwpQXX22VEvAahXc9rBL8LTreufVGhu4hjXoBaX5KYFfRUtCbnUXg3SxLobgM",
  "key19": "2FZwfstB5DxLR3apavM7V8iGPtpm2EjajZCgmtZv5iK8oBBoSFsZoeBeaHQazhceXhNRDjPDEAnNyn4Pb5o7t6DH",
  "key20": "3HnfeJyvLKkrbfouGnDpuXDxDmdRdTyLEqfsHDRw2SBGUxK8TNGZ9it2XVvbfRyqNcBZPcrFnMWffMNaHjKQp6au",
  "key21": "3w1xizJp1hSCMu5qVrd2LXmw5XRcZBZWDHh4w5byHEGw9RHjaTcVrsGpMPXUYa2wq3GCHXD3n1EFWmxc7SJ6EFav",
  "key22": "67oLTGKD8nHFuZ3yw5cKAXYCt14mf7ToSCrhCY5yFSqQVuwji8gjk85EqfyJs3EvFLGge1DKfzppQhKGV9YGSxd5",
  "key23": "3JBstjQCUDjkNmsCzKzqUFwHK1f4GXzo2U5zpYuQD4FBq5c3KohcidcvCtLNf3xmJunYQtq8Y14Nt2wrMLrKUosh",
  "key24": "2UqCL2evS7auza9hUnDRC6zvF1VvkcQuY2QnoTfRWz5uRNdQ3PyLMTpC31eeuSAZeugGMnjTRbfxptTRn9oVrRHs",
  "key25": "32RfHPeXSA7XLbpfSfgkbNjgyRZETQxHeodWxuzessaGpj5oCZZVYuTUXmsJEPVbYrx9Z2b9PuRyCHh3ZwhBVJsV"
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
