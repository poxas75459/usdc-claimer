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
    "4BmQDjJkgYYnF6BnUP9gNbrn7sdqf5p4k4Wtj8YefbTnHFizwZhJ8bFyjKvrKJzqKgAX1LBt8t3SDf5e1XLqxHP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SHf4eKios1RomUQhuGnAjKfU7rK1RpLdt5f7i84GVwoiFfTHvCgRy59VYM549pn2AToa8iSQMsWxzP5VmB2a3E9",
  "key1": "YYXTjuKBCuQbhMMFgV5c6mTnorxQ2eGSQpx6RySRwdCdQ7U9pEwaAFniP3CthtGwctQPN9VXK183wLexst14ALA",
  "key2": "22GKQr3PErPUwdXrDxJyGkZwNM7mVsFC3yPCPxHCZ79xBhCEpwbpkGG6xfdkBZ1S4PwtRzmrQu1JatsJq2Kg54SE",
  "key3": "3wVryj5a9VsVcLqFuTnqLo3Z5TmePXEkTucCQVRAYppkc2UzjpyDUcbsXeKMbEQ5bo7CrBBcKXnzbF1R5PQozx1W",
  "key4": "4ete5Z77GnxY14B3kNDCduwCjkBzpJvjKiBfPZF6EssXaKQXAwQ5rkHjkgYgJ6rfxvwWhdFrsHx1sL6urvFqc1vg",
  "key5": "5h6G2afXYiCkhrQ3aEHo77ZUTcso8mWKkfty7uS5hbr3T76wntJBfP4ffGU55YgwhJuXod3cgQKaq5DtkaproXWF",
  "key6": "4xRoxNSZgMKuBaPmJVDLjYjFggY6xCpdkohzTPbnkAYq6TCwpVirrrVVdmNBnzgkTpavaNkbmJEjuiy1aEYJivfB",
  "key7": "4HWrbW6avk1HHUdP3n9wZzFhe4s4vPTvUvwFCeEthBa4nTXPZC3in9BGw7tgEwWKid6rZB9WYfW7CpXXAKJMTuA7",
  "key8": "63xWsiG1XjqNHbMzmFcB4k4LeBeg7w5k52hw4RqLxNvyi44oniUPTPEHPCekZf34YggS1LXxcK2Jkmcfwue2GKhz",
  "key9": "2L3NadmQV7EYLDQR4xqaJQopg2GL3CuEo4g1K4sNb2FBKLfsyPezjKC9Q93Js6EzHmwxUpVAdFJC43rcS1WJYANs",
  "key10": "48ModBf75HaFAvu68u3dq5StcGarJkziCPik7hTCAk7uuuXLSAXRYZrx7tLD8CJYLHomK6WND3cjJhYqsNGuvBPu",
  "key11": "3cJoM7EyV5Gk6vqrAP3hu9YbYijoH1qb1f5zpatU2hHadBG58TWVNTC2gqj3GBSAdRb9VWvAziypyWUGAj26kxkN",
  "key12": "24gPBL8B6JjAcUASS9GHQgkVuxZG9whw4YE2NrfsDmL7rTz1nZ4e74Hg8bEYNpQYJ3pNkcyYKUpeFuKFNXYXp8Qq",
  "key13": "3q2bN3DXxeiGV5EDg77XmboextH8U1f1EgCc1phRaLAPra7KcwyGFDrR9CXL37Rna6pB3wX1YNwun4FjGNQ5ztxW",
  "key14": "2a7DVGcERiLFUuAwEXVqQQCNcHGEQBDtA4GXAXXjvV5BbcUNNb1WiwTzntbwW8AJp8bjvJyjh53gjEr9NzfrnMcw",
  "key15": "46ZLQXC5Us6TiA5vVjHHe7cfrwD7Wh7jJze9Tkftw8eot633PHgQSunqSTnU1HPz3iCWvZCymu2nqnx5T1XdprFa",
  "key16": "5U8YEPzPfCK5chCEeVCy6ubS23DSJQRx3zWzx9VGhkjFjC1ik5k1jYYrZNNgxtDJoQvjYeRGDJEw4pHobYHmkzPq",
  "key17": "2tAwT238h3HMeQ7tD3Gp31ujLVVru1gHA24mq2kn3zMJUo9zHd95cHNVPLdQKb547xNwhUsiA2ELcaKuaA8GP5ff",
  "key18": "5o78cqf9LWFzNLXuDhQMEPSrhF9vkdycxrzMZ7Pj48o7pVJgdmoytwXnRrJ89uJ5rdAg25oBGYxbP3d1MT4965mg",
  "key19": "59fgMnyzrFbUfH6ak3ZX4hyptGM4sPFM8YMtogPBQf3XkrH6hHA7KnpEXGfEL9ojxnqnPop1Heh5YsrmEkxKEBGK",
  "key20": "3iZfZpr3eVyEWtkv4VdzNmsebbkMiGXVTcccm7TzhM3CERvz21o6S54Vh2sQEH7W5x6qaz97Gwq9VdaqkB7uRENi",
  "key21": "4HFxmRFSYfWipVpJFsma5DDaERHhosoVLwUvh7HUaStLh5ttVFDuLb6tyTNpwDSkgMhgWZgFrSU39zruQwFTsCkm",
  "key22": "axZK4EDPWY3h8DFVzwnbWtyLxHMd3uFPqDXwMD8KE1gJ3Tvn1AorPquM2qjgXSvmfzXaBJRFXAhmEBo2b2VwRR7",
  "key23": "4PJ9eta6YyrJ6SSyQKvK8GtEEYgKEbkR6DsZUTXmb9AD9kwMbUiNhjsbvgJCJTMpZvaAt8GRsLyCQb6uafHWNgmg",
  "key24": "43oit6Bnm7nWrvRkaCbThKWag7LRc2WtkaxihRrzvKB5edG9tTDBVbbmnNPcpR6VzESfy2ef6iLBQ6XAc1rAskqb"
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
