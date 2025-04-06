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
    "3HrGgyvoDJQ23EcnCg6ZXB6mGfRAUYCAjccrVHhPPcYV1WgobGD7YMMH5uBR3wQKB3krKtDmKQ2ZuGYfCzzQhUBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KwSCtDLbcTDju9nThxXcwqMX6UCfwUZgHFn7xkNabz5CsYwEW5BZD7Yjr1b4LEXDPsG7tPnfgPZoAkvy736ohU4",
  "key1": "4UtxeT4Uni5XA4EaKRXwBSHdTeWcEpoZ4xHiuBQTbz731cT4iZ841RmrP9GDgG2ML9NeduakpuN2z5naQbQJENXr",
  "key2": "3vff7vmr8BKrn3EsfPWnkkppkdmMmrb7T9uVN3u1TsPNfjNchbxLY4coK6n6uYNRCcwwCjCbu7ringd1MH8F1hAa",
  "key3": "4jUoF4Wg8BpT6STvHhdguykiBXD78H4WnD943pCA2pp2ppEMmrx5xHtjiZDYdwho4iiSa9zBRAjjKuRCAqh6rcXk",
  "key4": "2DbAxWCxKVfUhykKTmbZndBvMsSyJWeWc1BiA8hgCUpfLYQ2xBfHBU4eBFrwqQzE4P2neQ6VXq9kLSoZL2ns76rA",
  "key5": "3P2jgFrHwSZw2BtjBpUZ51MaKRJUJLj6NoNYqTqRDW4tMbTk1Q8vk3FMTSHcjDPKpwfdwb85WcJE9F2fzCEpXwqh",
  "key6": "4qtgCdbjUjm77feBx1JLpLJMb74z7FKCbix46hvCGAEaQMhRtsChMZvyYXf7y6XwjkBtkmzJpFZywmENXJXXzfqg",
  "key7": "4L8j5Ey2rM64741sjqVz8ssvUxsTJfruo3JbPcaQbXdox5chYUksixLyKxxsEwBc2kfXWguFgLV5mtzCrCX8GwMW",
  "key8": "f8R2zpiyyhJwH2FEi8a9c2JpjEhfjVbKwkuvRWpfsXABrd6qe9fUpQpvTnEWi7CR45vhwTZGVebV9kV7WqAnY9L",
  "key9": "5QsSQQJGWXuivzG75LXb75BAktqJDJnFaUwoSsq63EQAyjUoyNgZkKqFjDqoxYKeDYmbW52ZJ79TZ1iVtNitqxva",
  "key10": "sMH9moPbDWZSqEvpxzADrpQBYqzV9i94U8nADe16fKQcjr8sKkMmKTnpKeoNX4ar6ahWSJRwDi45FDgbd7kCA9A",
  "key11": "4L9wqMKGsXdSb6go1PsomhFL2pNLAPwjw572aCFwqFUkDNaMRkFNH9MQYGXJTPXYP8H9BxuyKMU9DX49SN31Jyfs",
  "key12": "362P2fqM1zqvjNBp1ktVCKCXACjjuEvQWbwNVodwKruu87WjSMCvFghQkq8QiWu6qNqjaWn4CXgbdGGrcvz1qZL",
  "key13": "2yxeeRv7zRC8ZxcUh9nNu3LvCJS1FhBmZrkuqibeyJ78dAFZBwVWuc7Tsy13EqAn38BrxmiPFjPJzFMJJ2UUCvQ8",
  "key14": "22DLSVrJnWxTR5VAU3Gj3JWPpe3wSqSWRrzBVAhi5sPqDhuEbFhcoCAL35KQf6zwef8i8RE8esPSN76tUNSwLU52",
  "key15": "LnZM1ma8nSiZ65DUmWhQaDHQbVqBbKBUSJnDRo8m3WELCwwkZZgvd4czQbJXiVg6459PrW7rrP8fmDdvfHtZfJP",
  "key16": "3bVUE4ZTF1oBHYggLzGpeYtDwn6LgWymG7iSEQeCQ7DfcVwknFxBuSphn3nvbG3KMFJ3PALdCFCyyLNwv85UNiBu",
  "key17": "2krnyLZYAmjjX5Bub594hMgg6dRZwNVCK6bc6PcPUBipk2ugSYiDhgcJQbvJkQbapj21D9Y5bmaHtc839g46F9as",
  "key18": "bNU1FDBAyM1qqK6MvTyi4SoUfW6kxnd45up6USjcPv9BzQnbyZSzVjNi3Dgx5VZFTe5GvbXYeoqFseiqToXRVpW",
  "key19": "BcLdeKbkLCLiJzpryabP86hZLVWsCSfJHYzndqmtU3kGjX2bT9CGzVsNjzvCcTwAxcMdw8NgZrYnmzxQ4oFMedH",
  "key20": "3SKSSm18xzCHZ7hY3RSzGuS6gMFBfdKjkKtLnZV1CZ1zFGkGzkbPMKAVHxkXwywr66dxmhRXxfhw6DQSGWq4PT2E",
  "key21": "2MwjkbhtHtEDV7u34gq55zChD9nxBZdd4dR8oujDWE78CzcQaJmLzZsuknjdYaJkyTfyZ4AQyaNekHnGjgSoT2jc",
  "key22": "XZQS73LYHRcH5b9Hst9H1SiXVfKaa4gP9Fqy2xwrXyHdqsD2gsj7Saxnqq9EUTjBkWDtjsozLEyHEavwFkBZURN",
  "key23": "5nVdrS4Yexu5U76UdkSKWxUQqwjwjrWLc3ceyGaxQ7UaHgVUF4AN8xvTwwmoEz547Kxb4ssbMUB24X8xh4pFMPEG",
  "key24": "2utUbgZQcZrCZGHX7zLhPEMCiKHmBZRno7iLz5U3VjF9K4mJFYFKBwgaRQR6Cs6Z4pxh4UKyDA4gHXBg9upagJ6X",
  "key25": "4EQZgJNmfzbpcEpWuQWFreBbX1ZXjWZWY23o4j3MkUz6UXirELpZnfUFuUzE8tyjmAsbhcjxRHHKdpPH19TupFAe"
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
