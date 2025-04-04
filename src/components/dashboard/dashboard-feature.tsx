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
    "GmcoE8f8qNGSY4jTDDCHwxRVE63GaEqAhHwzYShWRDHrbXrQkVE2QS9awckRsW5DGy1E1Fnth8eT9zbPsBvoa1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UFyzSxxrHuAtaoDGpLHsJckGior1C6hXSCVHDroJ7ZjqSUW7v4EWT2naU1QHaUyFwvAdZkb7DV4o34MUR1FJ8Xn",
  "key1": "5suW2dzQhkLwxDtXZXxv72r9E6i79uT5r5gf2fraf3qQZTEfu5sWkTeovzYPVEUWxtbZKwwH8dPAp1Ws5MAJUYF1",
  "key2": "3s9SD88gWLvdBYGs6e9bBvEKQPtKYPG98mrN6SJvy6BvZGFHNcMpK9TqzuHa3pkTYBKXW65hge49qaQxNW8ggPZx",
  "key3": "2qKoGLE8PXUUCBimzNFFmg53Bbsdkehx92e5RZ7ndsxHrR3EogE8hz6Jry8auB3KDnKpjtVM3iwbhba56mRTb7qz",
  "key4": "3AMfHm3WHtT89JArbrqmEL4hLPpXPMuFJ6XhGcGZCDtMixFtaqf8hh6upr8n35JrkLzjVH4HmuddPRELXWazUFc9",
  "key5": "2Tm9hVgum1Vz6hYv8kg1BUWdBX9GXpnABXUPyWmKyapLGvkXwSu9JX5hjFGQ6cihbk8rG6xRE2ziKcw4MeVgxCEK",
  "key6": "2CsTmTiJsy4hZRCD16wudE1m4WT6KAzH6UQdxWTdSKZMR548cUXQ8gvG6WisXz51YNikGRo62KyGn15J9Dtt7iAN",
  "key7": "3tJQjcF5fBvrLpwPTkMKdXc2VdTX7U6aMFe7r6K3bpFLoVDcPHVF2j3FXYB4KexMwC2sg36T9ehVhu2d2Pp5yZ2e",
  "key8": "4PHac9X5U9RMefPesGc3VHXDGCG7w9qZxh2zZLQUrDXLo7uwCGWUQuMLW8DjFw95UbFciX2wUoa9cfmYsrHztSfv",
  "key9": "4dWXCCZDsULLG1kCU813sQS91UZdD1azNDXz2QypaZntxAQ5u8hwgLEQ3gYC2jGJbriGDMhxo61MDXhFua7GesVf",
  "key10": "sTs2kjuqq5r7VtAtUuP8nyhy3r87s3riZ1RajcDTwjoeQdri6t969VorCSXBSA99hbwMPevuipBUoThvVXLv6Va",
  "key11": "2YSzqBDPGWDBg4NoSE6afmAfkoKs7qfT9EyXczp6EW1xfuBRVdq25KXc7bRdYZ1p69kM7e7DW7KyrLFJ6aDyYjyg",
  "key12": "2NdZU6QqjBre1rNZbVR8eWwZ4BwbrQxCjj2bKScNF8tYU96Exfep1qpKWUMPWaEnDheBn1wcMufha2NKCXfVBuWp",
  "key13": "4UBKvgnFLQsYD5MeDQaezxdtJo6ULSwbytUct2GGCYgHQJJy7kjtVYiHNCVmrPNF2enp5H6Fox8AAi2Mf4gxQWFQ",
  "key14": "2Vesof6BHsAHaAy49Sj9bvQhuyKdQexDndE9DDYypKNVEug5qzbhpjAKDFXpEVDU5Nd6QwS8wbGZVvuJzxtwSzGY",
  "key15": "2u7uirRYhmh1w9C55CaYcWZb2XuXnpcysQYvjW4JARU9wbncKm7PqZgQWtyidEwNWtqDScc8YAhXZdhxsercb7iS",
  "key16": "25GWdnzMztRuoeHS24me2DS95woVRTkB2Xm6ubdb16qWYA9HLHzDtAcPBL4LWBc2qEjh1peN7xznuqYrgeZK4V4Z",
  "key17": "4SA6ezEpNJMw3wNpzs3VgRRmoiJwEBWTqFJxkfXjS9vvMqWLx5cnocuqCNDazm6j9dRtNWazAGqmwxmKnVmMYyji",
  "key18": "4TZkvUPTp48t5CdKaamGBD47dXDDEUXQZrEB5iRS6WmZ2Z1yWCzZs5ppi39id9KeUqrbnRe2Z5iD2iefr9enozS9",
  "key19": "31ZHdwf6CPoQbk7xGm5GbNhxemBShegRLw9NEYmVP5CxDJgCsmwM2qFSGaQokspRHMjsCnR514iBsoyQrp9hx9yn",
  "key20": "3HYGP7PNhgodmp7k73GSoNKCo7yiVY2AJC7THzovcw6gD7QD81Cj8cAeuhio37fVSs43QBJMyz4eAcKzV86vEL2D",
  "key21": "2U7h4ijQfTCLTCc8NV2M68VTMhDqV4xrnW6pmRyGfgoA6cbgQmGRTnKJVAnA1bGDtoxvPrNn8s9hZbaXEJTaQoxU",
  "key22": "5LrhnHv6Nh9r9ho7VPhUvkmUDbFe4VTuiJfttJRzNvheHvrHGsvRiXF7Znwwzu1mCzgtZ23BZcpPFYaiYmds3tHE",
  "key23": "2KzUoHjG61V6cjN7CzR8zFRhYM8BJctT3RTxEyoNTcNLj8n6ytx2kQxaAsjKYncGRQq7fxKh3g5vh6ibqCWGcrX3",
  "key24": "pE8UA7MvFhhcLhfmxBiyJDqK5QGJTsRpxzWoWFVU2GRKorTiXjUdch8D5VTciPo3Jgi6mV1TBwZeAAkcF5xSNqt",
  "key25": "4rvXk5YERiNjkyWkerjkYmdqxYqyjpQ37GXhPwSU8GBvVKPU8vsLYkpsHtt8fUQUWiWv4PUSpoUTGemAMfXjLNqy",
  "key26": "5vP9kUf79q95K4YfqXLLXbkVbxZvkNuDpSBZ6516BrE7jHKfNFon3JqURcMLdWivk3KnapVFbQ35ZuUz6xMCmfd3",
  "key27": "2TF9XgefDGgSPksPJTCyjFJNgzbTDp5RT6iG4UAS4TJM6mhRoHhSPYJAEeagZzSZV3PW2qDMiLx5DNisVP3H9bsS",
  "key28": "9yP2yEP7zY85C8fgQDpby8yrfQJakzrZ2ksGNq8ZaKdSzCM51LYfwbNDVYXh1LncDEjqebxm3EP8UybMqUhUQGw",
  "key29": "3feWgTbFBLHVc4FMtQy7hCQ2r2hzDZFZfM5JF7n4KdD959aKHViRZQcf2Au2cUY46BBM6bvscnifL5R5VFSxUwQM",
  "key30": "3fPwHou46ghevBpEQyXUbF4d7TUwMDNjMh2QMwoM4rMSn1PFV1mxw5fbqVfc6dzL8Fo9AYq1n11yViW3yvCCjWeg",
  "key31": "3jzwMNoaomSDm43uXgNjiFJ2fCi6sWjR4AFwLfvzjgKtMJbndfgwCvEViMnSHwpgFg28nwoeBHnHHUq8sHdzBzui"
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
