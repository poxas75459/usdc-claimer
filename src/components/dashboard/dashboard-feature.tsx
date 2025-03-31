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
    "4yg9v8EHQxNXb41sitvzTnMGfcm6GbSaJesJW2EU78CiPmRVoi552NGpwLLwR8gEQrA76xdMgMUnrwQfondNE182"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dfsn6bw9C3m14mL98XmayPoZm7fyuE8SFdxLr6ariQiiS6koh3QYU5mzfRz1nTviQ5shanXtT8hAM2cW7QxVjmj",
  "key1": "iUXxAJwGx77XACWaJJvUj8qHUtucAn1XJHnBSScNgJjZBJJpjhEb8uJWaQmJtEvEkf3dyjmudkgmHJazGjtyp1d",
  "key2": "3aA5pRXCkm2V4fGfuiY98wjaUv6kb9Hz4NC1NbDLcbfNDuMrZktHdjLfuEer3FxeCYsRDBxTpkJ16RnwiFersefD",
  "key3": "4u1bqCEcgki1odbFXqMoJjTugiKWGaZncEi85ubYucA2FDJLnhqush4dFnjhhEoH7TqyGPrmacdLaSEaei98hDez",
  "key4": "3rCMgJCi4wsdH8Ppu5BFfjV9Xchauq68BYg1giyb9tzVf6bfmZ5pnzdbHMpGYKfcnUJGvAq7a9CECsitR6wxfe8S",
  "key5": "2z9VFACxo769ZjaBPjoyrrQ1enSY7b2gs7QNXKd2fbZGfzzQdZfAbTkgGrT1g6Efdubz2PZhgwBFMjjdUX6y44w4",
  "key6": "5TPtxWXnzxS31tVAqT1iENmjMSB7o3cDxgUCHfkeWCCQkCkYHPWpzUxNtZyiw5bgauNg9zebju88i4LMLAww3ZB7",
  "key7": "5ZWxz2X4vsKDWLgR3EVKVRAGaBfz2xn8JPrwLb9NZW65LWLDNDW1fHQWKv9JaWVzRdX1du3oWsDt3kYroZxDQf5T",
  "key8": "2UsiRVCjAWiz2atGLqNEvJkWsnuLS6cBdCsMiFJPr1gTfyAaSEjvZgbuekD9fafbVwLVpZevqKPV2D4atsGdG93Q",
  "key9": "UgBcBTn7T3dn8ycSHhkDomJDWREuKLG3dZPH5BaNi6GBhkh2gYQtu34vm4k6271VVJF5c111gdT4c7V6W3ZFQRE",
  "key10": "286b17w4PWsABJ9z8HzDfzYqppWeS89YWqJ8e3oS1GuifKfnCoJYUsEt5BLGGMU678Wh8j5hBjV3RxB6DuEKfACn",
  "key11": "4RCbrV6gYyLKKGVK8a15LNEjxB4hvZ7hsGnF6BBKfZ41NR5wXuUatj9kTuC6EadcvESFYJCFgDrhVcjuLjFHaxxF",
  "key12": "WFfgd2LJhAToFCZBdXZjExQYVwEoxjCVopPfNbMPcMfPghMs58ZuXU2KMwYCAUjRQxQudwL6hRP69VngDxhEkhx",
  "key13": "3Pf7UBXqhk5nLhmtyKeAg8kFpPbkinTD1XwhA5aimWHEejGbtcKAtEBN56ocuFH4tx76TCh75TTA7pQ1vwbWMYy9",
  "key14": "3bESTkLWDdjihTNCLADkHCzjooejca7CFDsWnzD8yPNujKUh5pvXqmRMQoGGH3WzsSquBct4uN198caT1PmDuWef",
  "key15": "3VZDo81GPcthfzv92fNAF6NNdXbPXo1tZxR7dawgaoheRvUJ2BveoBnnfBFmDC2KnRiHsFDyQhUrV2waQV2XwFoP",
  "key16": "4hkSa9KN6PTT8tZ64ML3Qn3WkWhfRh9NvYSBFhoeURSxgxbwvRTJDRZrvNUP2wqqMnEkgJ386ferVfJLUpjqkB7R",
  "key17": "4XmBVpFonNAqQH2WTcps5BFuhcko1FtP25xYMJm3WcjxhpYmhoEmnX9ijzvwAnN1EtJcM9Z6yy6x8xAXzDqoKvJB",
  "key18": "5y5jrKAXFmCM28S78M1nmEUF2LPZaeqbvYBLqiv5a7m6Cok8M2SWfwrdx4WQ8mJtXdxW6EbqwXeMKhrC1V7j5E7W",
  "key19": "2fDF9uLgWwLUL2jYLwn4jVPTALHM2YBTSXtGphMRb7oKxq1RXDTFPRokofKW6anEBBii8yVbFX3ygyfPHStKu3AA",
  "key20": "2EvDmLLiuYjHW7b49YVHy3YuPXF1tmK5Y4fquHqLev6cUU98dughU9LVo64UxdnyXt91RipbpHwuthK3UCjFGz43",
  "key21": "4p2fXa9oKcJzbYBJzSLasFnEMvNYvMZAVqVe3PXjrMWMYm284RZ44SkQaPTpw1j67A23mosXk69Pr4txf8pY6Haa",
  "key22": "5deyqbQsrj4LQkjX9JEKUFWeqEuepb3tdh4sejiQbCVp6GAysYSjDAqpmqN2kBkwv1NHhZW3wsznSdQG45RDKLJ7",
  "key23": "5tWFJZzDRYUgrLLwZJ4zY51fEvwgHKyiXuNPkYxg1VCEDZmMdkBwjHx7eFtiKGhQEgXf2vxp33vJ9dywTiUopDVW",
  "key24": "2fcLgCJ2NpemY9yEQwBVUjFpc1YJp2RFhqUs1ydu84nrGosARMa5jubKysWTPNkiKGfsGFoatBVd4cVn3u86Kjt5",
  "key25": "5RUwMJQ4JNU6uBGj7QevKQW8VFsjFSxrK1qzmh8veovevCeeCvPjgcXZetEtq8KhyuGngSUbXgaMeqSad6uVMHth",
  "key26": "3jQjrJmyf86Do4ya2rXJ4XEqz5yHvKUHhCtav6gmALh4f9VRJqLoG6abURLD9LZMGusMwsPvQTU6syvjsdATHjp8",
  "key27": "2Hkbqmkbre5GP6gYsZwmjWQTnK2D5WrK7aRbuLynXVoTgSmWH7MZprcURX5kAGdXLJpQT4WzrmLjjTGGza4CxqqF",
  "key28": "4v1Uoccb5Z2fpcE4ePGVKCHN5CrconaCWKmTiPZwQpsDFbMuG2pA8rYAb9KfsPhPG1xnVtZg1Yx3QGKySSRFPhAz"
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
