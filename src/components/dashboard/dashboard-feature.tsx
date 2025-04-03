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
    "5YcY3uEgBwZv1f7R4p7EJ4LvxUSzkq3NEqcfMtdqNNatCem7nbYpXivzvRxRFVULSYgSxTJhDRxmpwrHVqk2398K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4et63Hudr72Smygis7nCtgazvV1htNZ7mnzE2WeMMTfnvTvX1zvPVUhmWyWzSVVpXdXH2m2mKajSfYk5udtpbaSM",
  "key1": "3vEfDLDx8v4RREqTUJDVhobVXuSqSHVz2iWPTvjtxFt2wuZhUSYJJZcXrbMmheXeognmca4LDnGpQPg95eFLo4Mp",
  "key2": "3Kt3cuwbL9LZHZE897pH7yFxb5CxpEym4rohDf2iotNgTSmYLKkpVW12xTnfT3BAh5ZhUXpoZqDYmLbitSf6QgAu",
  "key3": "29ZWCcMN5k2BxaGHNtEWev8cFUZpty4Z5ztjWAo4wdgjzzquJdEkkt2vtUwM9KgBxMJRvvbmXDkNKgmDtsWBVqnw",
  "key4": "dnBqbDsSF3ydEkgGem7EUzxnMiFHyLzeQZFfffiJtFoQtSRt2tUvjqRBThgwtKTqMc7YAFqyArBQqFDmKdQkadh",
  "key5": "yT5k1tC41yFXZNmLUGzuDdJ3tiuynumHjwQG4fKNKmLL5RAHd7n6ChDYdLZw6Vn4xzvZnoCew1tYaTJt9HqRhvb",
  "key6": "3Y6QB3WixbKLb5XoGsJg13SL5onDE483AFLR5WbLPvUpoyo5A778HMLsF41pahHPCxUhHfj9EzufuF76XCBgoi8b",
  "key7": "2ntp5BuUBnMWNMoUEgoy6QXBAofpWsPzVbQyaCaAfCtkGVvx72bfjdwE1KwGP4E8kZKNufbQeTMCo1c3pVSg2HZk",
  "key8": "3vtUuGGWwrprxnhW3qJxKqTL8Wv91UunmPxaxWe9ukH11pmbvDq1GkqdtGM2nDxVuPnzvMQ9yAfk4p8shDpk6vx3",
  "key9": "34S2oBU9wtYSNvGrJ99cJu5vvdVEJnKJ1YdkXNNuNmR7bDVsiSRmyRgzg8KbU9dPMRVfGJL2cLnPF8oDWqpwdPng",
  "key10": "5g15xjeHUYAvbPegnzqoWTgGcstnhBUaM4mSLyw6TCYcJU73xEUzSQgpDASxySxgw2nkpT9sjeRjDe3E3h71ByS6",
  "key11": "9r5fkRCFcXqwAP6rS7buStURvyLhtwHLkmjvHUpddfYHNdtf4MBs7H9ip79woaidm4AKeZx8w7TaJRH31JVVBSA",
  "key12": "38iREurjqys9w1osBP78vkBE2iZx2FnpEXDwH6axRQJBpcuTTWXhTo8CbBRftTCWPYFFM5jhcdWDMrrC1HjVqWKg",
  "key13": "4DrNrCCEzQpu5tNzVjqQEaCrgRm9RTsrmFr6fe6cJLezXjnstVf6E6V3RE3XdxFeFUwya8zchri5jvwbeYLBRag1",
  "key14": "5dJDZENUf7WQDJ5Qoo5ThATt43vybfd6usgXQwZQRjJnDPCjKJQTPkkj7jvYmYCEKZkagSJw3FsmwM9socBwCy2M",
  "key15": "dp6Do66en8RVmf6ttWQPhErSwxTA7zYngEjxHTpktrXH1VVsGpS4Vv13TtXL2aWwyniEkJV5UAj2S9nrAGTnXSe",
  "key16": "4NigSrB4Rm519FPPtv4pGWYGSF75JVNeVH6fCemEkdmbjQxFtDTZRtYFUaUYeG3YqL8sn4swCtCD95Arn7WdUBpr",
  "key17": "5k4rqkyqYCLCCcHi2jeiSsaaPwyQKZ4Ebea5q4XgpNxq674cBY5cP8tw7awn5rEGYWdNBoe7pFfYLkB52amw5yuL",
  "key18": "5ihqkjN399hUsRZvVBveJam3ARaktwQgBYSSBHRajLXdE8Xn87iSrbVYQoQz3TMmdGYtob8p8pdzaez74cZ7jTkq",
  "key19": "4xmJkzmzNKZt8dPhho4W8NRV36D7pHakY8evxeHwZo4nDQJZPeRzRmgREjWTUAywohP9ozhWefxu1UxKEYseKSLB",
  "key20": "4xoYpX6z8VmKP9ZMip1Rvupp2Nz99Th66mumep7kr1A2HDUANnQegEfRYd4PSCLZCEJDvFA1KnjH1prSvxj4mBum",
  "key21": "Ai1jxhYUtXuAGTv1QgzzdtUq9432RzxBKMBFYjFdZkUCuZfGMkjdCHJ3jxp4eT3Jr79TqzYPAm3gMsi6ioF2ipn",
  "key22": "Nq1qvRjWjaQ87s6J7APBNQm5B2LYoaFJp8gQUs14YQQKRUke4gtkYeoiZJVDwJNVrmmMURpyRUNVW8wvMAgKRrb",
  "key23": "5kyhvLcuyaU3E5gXDvnEZydEYVCHwNPeq4NSD4FHNhwx8EWkjwoscPYmhL1PPRpWa8jfj77WEZ2rpoaWHgkCL7xx",
  "key24": "RvhdW4as3LSQ9HTgWs3uzYKLfGudRswDXbfLo2yvN9q5e9JqUrEX43g1cegaRokEqYR5nqX1XXysUAzUXPqc5gC"
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
