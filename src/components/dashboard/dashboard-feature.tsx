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
    "3ZRic7712eWYcQAaMDEA5RAtEDCx4faH1qavAKGPsM9ZCtMLxNVuhq4Xbe8zoYCEfwuabU4nVCSYUUVUWyjF4F3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DVxfmx4V1aU5PsBU6HVmknt5W9fE3LuwosaPFyEuEtWZJiKHREmHGmKdyNzUtZDP4As5knY3B2G3pnvtD8CKPyn",
  "key1": "3qzzxvy59mJrVMBbg4JtSihKVXKQ96X97ZH4Z8p3RraiejFSHvZhQmo2dUaRfCG47yrK8rKeBvVHNuhgiSsLZbcn",
  "key2": "2vhGTNst93sbkbEPxk3fg3yUa5krxwuzgFYJSAsYfR7hFWrXquzfDi7w7iYkqUGfePUULTmk26MN2HDVgLgY6YoJ",
  "key3": "5bM7DVCkFQse8FxfBMYFDp2dYRcxTaAvwrDP6NhgG2tHk3cAzw9wxBPMwRBoa1dnqoXz7pGQzGxAScAswzRXZ2PR",
  "key4": "4c7pkwHRioLr91wUSuQtfPbD4MvCof95NoVUuKNMBGFkYn3d5yNL2u7vzzjiBB6SCh9wULZRR6VgBXk6pZqKjXR7",
  "key5": "5nxkGdV9Gg4nCpLrULbTL6KmuWpS4ixwqCH4u6KQrVphABmGZ6VZEHDPRocATMY7a3nuUBkwi6MhgpiXsgDxMJT2",
  "key6": "2DWXWnMfYfsJsExUSZGNNnKMiM8eqBn1NZFdnKVzvgcC8oB2MQt2PupuqtTrYiWjLt3a3KiM69z6JUHw7D66BDEz",
  "key7": "2bHJDhrF3yq8sj6Se4cFUGE8Cjk81svhmZu4uyzv52B1fzmqxNfTyZPHGEKD85gfgokJkhw6tGVr9ynQ4qxWzSZX",
  "key8": "zPgw6R9P6X3GndcTPN7CNz2kEzzRXUyVYng4xsJ81yTMafhY2rQi5XZGweK1H3K8Jx4kHmPwhuYdirUGLZZ1wFb",
  "key9": "FfQjzSYsfd3shapppLUNqUx8X2PbM3Yvu6Hu7EbU6oxmLQm5RXBjhHBSEqandcGLRCYjDxjfRgdBEm1DVkdsicA",
  "key10": "2gGZ7CjbMyJtXdc7jBYTbjmfCznJkuKbRmDfscbjj6J28Xra98xAjnhvJFAjTy5jjrJ5uM7hQ3EympjQxgfcRtkL",
  "key11": "4r2ZpnMPDhfHCbvs6FE4e9tSE6iqvvTtApJhebSBiN3twjZHGBJpBgxZM7hWLFjqt8RdX1NyPQN6wCjVWEFFDTag",
  "key12": "298ApvxXapugpDohfMdD2LB4udfDxRjrYXMdSgYSJrF6eVYzDtT2exajYcLaarNQYFMrAqiuPhnJkLQGNDRCbqfa",
  "key13": "56PUkGyhAUS7cXsP64vsR1bJ33gd9izAD7b8ibdQoD93DK69arTm9dxyWF9nLPtTXFSS1wwnXY3q2W58NKpHpvqQ",
  "key14": "5TKxMXyFFwCcQWhzf9gQuf1NY7pQGwrKR3CYrcMMsQg9vCpCyJfmbNWaBsfy3nzmwvP4eLGLAFNKTcrnbiyfEKJH",
  "key15": "AhdQtohX2nuFMrtEWC4gRfbvN1DXWWqWx7SNEkA68yBjDZMR7e8SJt2zLx786jUEXcAi3vH7TLP6cVCHfPzTpDA",
  "key16": "2JGRJA3borNwz22WcZYHKMGNtGZ53rxQSimBWKgFymLrhzsq8sTwnmkwwaMBq5gK31ATAKVfN2hMVrjVF44SK3DU",
  "key17": "3Ym2GLJYBjb8DitMvZpWhedc2f2DNUkuWZAqHcr9LwUCMmr5MKWcNajvWzZvFsYhLXCeoeVAJRh2uiXnMoUFPtqa",
  "key18": "RzHTbcSrKu6zH35dwQ3npJEVRQGHkaXEbySQJkGHFbNDnuTKnWKPzyxqU5p6E5558q9sg8TRReC8Epdr7m8bLX5",
  "key19": "yPSdLAwq8VsN4MJANukKFXcVUR2LNxFjcAzjrLGjhHNj3Jr56FWncAZmHwXkvb8eUWPXCEqGjdst33M2zwSSHug",
  "key20": "4xYTNawkwdnyGpWLqbEZU9gbJecet81KXXSKrokt3oCFmmmwjcSAjhAfixvFnvwY7gf3BkEUiTjuM6CVBcHyVdD4",
  "key21": "2jBDmHRytg9HyjDXSGJJ2s1YnSoW26xjGhDYRbdQH8VKgfWMUaDCYaTsvWQXwiBd2N2tHjLUzFAYfNEeKbgv45Yc",
  "key22": "4rWqBWcTW1yea1N98s5rihf9jjGZsp3KtNMMXWSgheL9J9CRUJ17rW7FsKRehNjSmru7K51rc9bPt6HghxUEP6xG",
  "key23": "237mRUrfweHMVaLyygoKTgwxoVQJ8pYyjco1AmSAnHRA7gyPskbLW3majfxFoQxAsP2Ge2Bu3Wc1546SzCCAiX3J",
  "key24": "3SWUumgwUtL2THcN3M3QDdpNZ7LXRGNoQsXcX2qng2J8tzgK3NjNgx8vs2R5TzNLJDzb86sEcFKVcr1ZyM6vAd4q",
  "key25": "2FtyBB2MbbHFFjtJiYU9kwo362116CEjt1ion8LKU4XRgmKne21TimpC3Ee31AXdMf6CMAebmWewMkB8sc52XNHR",
  "key26": "2RaG5MAA1qEzpNCRavxV3ychNSrK7mnU1saJmSPUArRRRrEwUmqBwCrm3CNAJjkBQFVB8ogT6ocnrHG8PizDogQA",
  "key27": "4dHjhjwFzGp8ZYgn36HBCoWh4wjPaQ7JjHxMQA3Y37N8eDfxU1FxvhwmdZbzLjADMzzF7jCvRaqJVMJgdBYGZWDf",
  "key28": "5PANskSkMNTdmrz2QRiauCWFYT8VJQSSqUHL7bL8uuXZmPK8H6QBYn8GCyeqBLTRD5Ef38rSCJDVnMJvo3D88CMW",
  "key29": "5vM4YU5Mr9mA6428jLPeSyVzB8QB5rhrksL8hYyGcBmdhiNTdqssUXQGoQ8Nzqhvwbv9NV8kzn3nWXWQK13sbgXJ",
  "key30": "2CeLUrQDcPkidWGgDZMLTFHdaHjxPAY3s9ALAAAt7uKaLrPLpg1Gqefywq1vepvrKb9edN9tW4DtybXjmjJ422K"
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
