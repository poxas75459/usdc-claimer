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
    "5dZzukEWuJRwFjDGTuRky5nbCUJdRcjPMf5wKDWhPi2BBvmiDbWjvW9w3J3UVBVrNHvLPZtKyp7oZqSjpiT6DEkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JnTzaG3TNe3dJG7AXcik8eseCkKzS5CjC42nA7XidGZGGuJXEgxpX1doLgU3szUXJ5BZg3WPdJjHhQo84MxixY3",
  "key1": "5syBPyLRe1FqscWfhPmf5gEaYYGLTvnrBuyYacxYEXye1sJd3hhSCPpBU4bg4TTR2WM8jadpkMkgSiHhQm9ZaHsq",
  "key2": "3qVjpi3v51cdZ23ssKrfMhgjoZoXNVCKszSBS1jSLeAsxS2jS3e1cSHRPngivntvKtrNst6k8TbqenfN71UZTCkE",
  "key3": "2J8FU8W6kPpRexPyA71xNxXW6jHzk5dwcnzQunEPv18FdaKPMv29dBhRprd2b62z3nrpCYwzXiKvd1HkaJ4pcz4B",
  "key4": "3Zmj6UcDKFqAugpV9V2hTnoXU7CCpr3jZVEoL5qcnhdm734exBsbpRwyJ7FNixSNnmKiQDU1sou2UixE16iyGfK3",
  "key5": "2pn4TsuAL5Wz3rg7iuJyRgDrYKnu7Av2VDgvTpqAgXfejEcYXiMYPPmgKgHa5ksz2j2otRsiGxkMoLwvjUj4e2rK",
  "key6": "2U6HzYhwnPQnt7c31iUferJwK1bSDXKAnCe2zwy2DFDxdDBDNigENF6uDZeDbSofGbt9XS6SCAv2CVaFyRbary82",
  "key7": "4UkCsZJPUp24mGSHHHK5L74Uvy7v7EsKNYwMXtCMz4WizZ29GpaaiEkmuhX5s1QaoJkSUh6qngHqfPjE13Fn9jUX",
  "key8": "5rhmnVWwmF6qiBmq5TNPjziKgPQxTwoYdzY6owZEKMYGJuXMoZndkxJshtvxR9MBqk78UbkN5f7tAg6oo56hVBWJ",
  "key9": "63qPZeLcfqGVTquskdc6GFSn1sPKQ7vvNz6zda6yQ9Gw9iyqZTeYMeQMYLPFrcdQmo7feD7ns1EDAtwkksmsycE8",
  "key10": "3ogeTueDCN2NQDHinzT3o4B2iT7Eh2nWGunePBN3PQBSYLi2eDKTRz9iS7BRvHyiahkxKrMDUra4BejLKTUke1MJ",
  "key11": "zRu5V9uFfxPBkm2EgjbZoHTumL4yLuUpkynMycDa2RCbjN49mscPXyJBcjenjpMgTSdM37fFYF95PXPLfRjRZKD",
  "key12": "5m48qQ3TEEz2jXCzpn55UeK5SudRfVRaNncYsekjooQpEGN1CrnsycJghpNsrh4zPzCgKqfuN1hNQkwjSmkuwzde",
  "key13": "3NBtKjN47HBJE7KEFWBuiHPy9dwzSH4dfCpYtttXmiwU7LWKU5KdNazKdJQEymvxG616LHTGy4u8tGKdAbge4QH2",
  "key14": "55hVtG1nvt13SD3CcYdiSz5yUqsQwU5xfQ3X2Dc73FKarDvrRqAMczds7EgwMfs9rKGsojcqiwbjttYHhJYbCidK",
  "key15": "2uDRHBiRjQuC2tTbP3F3tdfofQDhYvZewPas9UHPg9c2WMoXc2eossteAMK5MhTV8bDF2j75BLgXxPWSAcZZtYbE",
  "key16": "4JEFkB4p8BM9P15HZzdxLo86iMNgYpB2KTcsArrgiC4rKE9mNEUG574iiSbLapKDyiQGA5QbNWpKyuHELxdTiFcs",
  "key17": "5rwpEGE8wJ5qqUPqYSxKzbFMG544a9M4Jk5k2aU7eQHM6KGaJ6oPVyn8Rz15wCkqF9x2hX3XJVZguVCUMeBAb5Hh",
  "key18": "h5RWNvix4LqVfSdYbFmBfwzKBajScit8sjPZSkmDxUXbtHuyu9eSP3QmRGpDEZQpbdjBUczXsQmvngPeCLx5k8M",
  "key19": "5jQDNnmED56Nkw9C5ZuLYgNkihEckrbrA5UzNUPb13X4ubEvvoQsSH4ro8ibtpHw556GQyFYjHK1fXNy8etW8vgR",
  "key20": "5JS4iGMYPKmdQM9ndjb15XeN5QDBkQAGJhkQtnoM9w4c8PyteCTxCrom1jmsd3LHZiAgeLh4o7Je587gM8ZwyPnU",
  "key21": "5cPrpVXu1Eop8tSnZL26fDoCKWA3EcDyHUcTs12iwt4HGHgR26xETFeeZzcLwDqx9n1adix6GXQUqvxnGPQbPsub",
  "key22": "3HKBKyAb5MLgS4GxDJD89zXYXkcU82iWhkPJ6hUn5hmU8iamzmB1FwZg9KFo6ChAHNqEX57hRjPVhBZyNKZXS6f",
  "key23": "2UPG8ZnH4R4Ji9m74637Kq5hNM9XPakiHFWYWtpHiznZnmbYysoFeU8FWkZGP3RMPmRyzCLAbWeUy4trBkEBZaDY",
  "key24": "3yKXsjDTBuXgvVLj9ZJn2w6Us7rKxzxdP33Jq9PbEWwnKJKCNBKriQJJ7TFoxsjQ2q2UPCEFqJfWYnbuprVKwcw5",
  "key25": "4LnXfABJVdeuuNTZUjzt4uDsC5eqBvVDGhAKvRQ1Fiwy1PYkb8rKKD6o3ngtGMRN4zuQcn73uWwbn11t4CYSjZQ1",
  "key26": "64FvqjqHXpM7LRz97qjna59xJCxJA2ZtSHzWhveNZZ8UoYYfSBVzokWP4G1Xqdx8hFrd4NxRKtvXBSCS2a4Zqiva",
  "key27": "4dS9HnsdYmMfE44eWMLTA7fhWseynsbo6PvCpreoyrgap58eJaYTSR8WGsy2qUmdrMf78iY9pJTnacbNb2HN8Ync",
  "key28": "4ua6HNhNzge4tMipGTXdX3PW3xGKXURit6aEmUSyFyF2vwBA7vA2BYKR5hbDkea3AbaUTSBfsZ9ZWzFiqeYDAYop",
  "key29": "5PaJ8rEvF3bpwEpAMEYA96uwsiPfAZab5mUu1NP83hzx1Lr5u3Uiim13BjxJb1smddYBWuoRNb3Y8tV38yLHsc2W",
  "key30": "3v9HR3TngQ2aCxhCKXG4Cw5egQvn1FU4fhj1FgGbttoawatvNyr5P89yRFDyeZDnfHpKNQgyJhJgqfdcowA5aVNM",
  "key31": "43DZ9LD1HyC6fSk8Te3P5BxGsRf4hVXzNaQWXvxYFdv6wPZKtamhvxkBA8rPCD3XXBpoCvK59nT4VsMFZUiUfFfB",
  "key32": "2GzvSRQ39zLbt4UbeKBpaSYbYPKqpJTVerWfZFy9sqWHWpdZbqHU9FvtEtkhaKCqSJ8jsej3WHSQGVgDgiSczSQF",
  "key33": "2BcM7VidjoMsQRFwe7QkVqB3kUXfEC9Dk2eVoy8MqoG3ghPntxj46TiqnDUpN1gKjR96hV66RpnXZhx5DEp4nZ3S"
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
