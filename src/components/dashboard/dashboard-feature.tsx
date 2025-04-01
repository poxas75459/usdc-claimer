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
    "42shCwGAwMJU63xLZqfLwRMTfCNYtpriFZDzhcvWBugfhe6bigMDSsK5qKd6cJ8ZY9d88HUTYG7oGuTwnynKdntU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "545SNK26fKhHeQaqtDB7jhAsrSPJhxDN9shzEVdAJ46XoEa6KmM5MNa4KjVXQudtXN8XSih6jef7ELm5mKUWneGn",
  "key1": "4QCPkPEo3s2tikdRS4JQbsFPF9LyvbJuBDoAvoexBioM5eNCCktcDd6bnt27Yku2gZ2uA5XBdtg6auQFueacAioo",
  "key2": "5kvLDDXc9BFSP96nyH3ru9SeE7T1a2JPEiLucJxoNWQNQVkEXSavnv8L746cqGuXPbe3Wb42PDWb6f53BhkBNNDG",
  "key3": "62mxn6qcwqg3QtzRYskjS6xakhRna2gU1TyB1DJLmykXWVNqkeEa9UigFviTRLzX4SbhgaJWaCQSZCrqENqULFDR",
  "key4": "4sxYnvhkoSoGUSNsURiX25LMKXyC9JZiNAS7TDwr4LM6BPH93PzfRbFDLQiGyv8rma6nffwehfucAye2dpUXPFrg",
  "key5": "3Dk61DbgWtrdUsXCRqgXgSNiVCWrDhj76CMVYsSpzeQYAVYBvsXu6mzq6j4hwm5AFJ4KQJkmpiK22Sq8oecVFuFE",
  "key6": "4zYjpxM5xJU4vcwc3UjJep9uFhD8U7F4TzVZo2TiGnuEfi2T3dXd9GTXQN7wZj17kWwqBnhJx6U45DQorgmwDnKP",
  "key7": "M2KJqFzjKYWe3yKX51UyYEGvHFeaFoGrbGHWDcvHhJZbhAqtraZcjD2J1gV1SSdJuR7Yr1nfa1eYb3m3xEnaGTq",
  "key8": "4SLM4EJoBsUiAmSKQoCtdLgWWEQWRwqtKowiMAaNTRjyzguGTkfgbFW7WJkFkaRJQKX3NLatB9xVUfcEfk5oLdT1",
  "key9": "4arr5csiep4Vr5Ee7G2rnCQCxVKkCrLerunKvR7iypK5ujatgsiFmuLWrH4tVZQNsfR2wthx9zSy1iBXxiaURSDv",
  "key10": "4bjinrQ6PoAgBYrtbVtvKcuPPkTUPn9iAMb5ArMXaRTeUg24KaJ1TzPuLJ5DXJUfzcg6mMNoAb3LC9PXYtYJsC6p",
  "key11": "2n3AnBSV4gkTRsbDB2DCdFDs39NkS8cqBdYhPgzeLnh2XAkxD45PvF21RvmHmcxNULZnx1rAwyhEW7sAFkpoLvkd",
  "key12": "3eRop3CnptFWQFqsoJvVMj9VF1zfYcvF5JQBZ6WuuyBrtXqcGA9yP9Pse1LfdERnrFhNsmuYA2zFR6kerSYzW3xJ",
  "key13": "4bjJXkwtrsXGHJpryhSPxJQSJqktRjbev7BiJgPc8onvvn82MYn7V7KPjN1dsSPTZFEKEkrNb5kM8eYb3oJk7jTU",
  "key14": "46DDq3KBzYj1qMsNRjxV1BVNigT1VDX9GU4RWNQKCQHji2gvRgXDNyRwYaYBnWAzj79UFCdugbWKctUZ3Dk68WFp",
  "key15": "tfYZL9aWYzUziPe9PsaWkYW3uFUBH1V4DRfme3fkRW1xVzeswJ7NTnP7rnhtxG4LRtYJdzgqp6TY4RiVqdgkunB",
  "key16": "3ZCiKpMh7R6Yu496MT8cc8iSdTTPc4rc5PyAvMSbf42AUkVpK9UNKnXyG8GWR9MWxCMqp34Dn9EfgQLBx6pzjkX7",
  "key17": "2xNFRWHtmxXyVtUhdGZpaPDat24KJCpUHkXPq8YeoebgfErCjMSZgpL5fomS5Nwnw23Wao2U16esUEGerz9zUowb",
  "key18": "43EfwfwsFd1SmEEChhVH6SyPtgNY5LuahJX9Rr6xoGmnew9MzoeLUjvAxiwn5hdb67SwvLnUDxv9bs29iQXPc9NW",
  "key19": "3pEF4okZAMc29VZyTSPTPRBwBVdwQe3VTcTkfWzZRvqTzWiZDWhfuyJuPyQb6QsS6heM2CDNHFVWuLiyNzbJ3q4b",
  "key20": "mfHTcEwUWSGk4KtvgV7BstQkpjp4RPz1L1h2N24omtzx4tndX6tJksJPue7yP7M5YGd4tUHQ2edfPeusaTz9mNv",
  "key21": "2CXdM6cwP3BbcVdr4JPopYjWJ2jDLcTz6JtwYQV4TkEjW1pgKmHfmm1foqzBCEJLetuqygXae9S4q31uPnFNZL45",
  "key22": "5bF145VSM1sp9HVmmHMDTw4xgYKZ6kR94kAirJTzGy1Kv69r71yqs4j7mXLHS8Tm87xVpTC4fXzG2oW7PQvUHWoW",
  "key23": "5KMbG2RExJU7W1SvXNseZEfqYKbAPqAGZfznZJfTBFeJND34AnwuXepciyQh6ReDqFcYcFKWhs1YqPDCmN8Gre2E",
  "key24": "cxM9n5Dr7AmAVvFwmLfUDHHSQNBtZjknainWHLqgoynLQRNwtyndu8Fyku3exDBmidGSRiU7goGJnUrYhcHs1BY",
  "key25": "2GxW9VpY2XwGezLG9aLj8yX5ihJSMf1YdfstWNJ2HnUB2m3JZpZKf2SNpi5UZfnC3tMGdxEB5T1Ldc1odh33Xt41",
  "key26": "24Ghecawa23Ekhdyz9U9QPuN6wLnLpwzMFtSSyjQReNPuTxDhaGpiHEFFoWkoLiK3JCkWR6x6Zz858aR6pv3U72U",
  "key27": "5kML8cHgNFJ5dGXkkXKLbjXpemVmbxeSCDtNPRhiEiz3UB8kyg793qHfharkYL4vPTSuVwBhpMpvNyLGe2drk6ak",
  "key28": "5Lfzbd8FrUQ4XPgfj1DgYU5GjHD7MBB9df29mTRy2KScEyB5zgqnvfztVAaXtRcwiMynvMG6UozxAPEeg9qLcMk4",
  "key29": "GF4AN9FLUVoJtXAE76u4mi1PrpzEXeLtNoq5Fa61HQBTwUjh3jmYYDzGF4LYnowxpjEBs8WKPDnhLxCb5JShP3D",
  "key30": "3czu3f3q7LpjBHQF1mhb5LjkG8THxEdYPB45mrEmoktv9rsYGrbXum2rShTHo9yiecVpReVfEZM3sZfCPf28NxAF",
  "key31": "5y18c9EpjKVLZDVUJKEwNyvGDbUiX8GSW6ibez8pAhHMKspWmsCre4LcYztfpaJvTMRt9dWgSFGe4FicKa1847bB",
  "key32": "5RMwrak61SM8X7YjQfMB956gvTdLHePwgGQACuGWU3oHkdxDCCV3m6KqmzA2fAs9o2u1NrFwE4dN7uGxrtzDFYQB",
  "key33": "2eJ2WuPfyJhLSE5QfVeqU8boSanCadqzU4HLEqWh4QRGzU6SbK63td9xWyD8edQpDpHQDzVweETiHhdrvWHKoStq",
  "key34": "3gchDPURkvsYgfWQKD29mnTMMFwuxaJETScdGo6jnbhbTH7Cgs5RxGRquy9kYbCEByCYARzAXgwn57NKrDZjZRJk",
  "key35": "2csMcDE9LYtVJWsBi5p7w8MAY9GVQG4DUddWagPy7SVsfY6zQ7AtRRhYdcfYnB3WXUeydP4T5VGcYiyRQXxbLgY3",
  "key36": "5gsju6b2E4LSYFAbguVATdPtwbJNLJ6hRj4ukoJN1nT1NGxAbkSDHaZGpy92xiiYQvd8biDKn9MnNLZuiJgQmRt",
  "key37": "3KchdQQVGHYyKmCGYD7sK7a3qFJDeebetjb63BJjzrDxWxv47hjkVTqS2sDusSW67DMvoHa5ysW9TpXSc6MdWmK",
  "key38": "tic6My35frbBXjoYgMV3HCYShwRQtLHq6WfXRke9a7fHZC49dV1x45LaaYLZTfwSnUypSctogheaKTBnTSxJygL",
  "key39": "3kAgtyzPveM1JGyiqf3VrzC2jnkucija4PDhUooWkBiA3ddzvbtaEpi84aTSbpzG9mEDZnD1XEAG4KeksEcM9tYN"
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
