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
    "5VmTDEbHd6gZ8F4vdRfYaqh8zGa22NoyCohoGBuk5WG3S3hnTXePq4WzQkXcAXiNc36ud7r6wujxfwQbFX22pg2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SuWsHGnB9pC2kDKonB8UXucpuoSUib9edpfpn24kkmBfEVpEArK7M8DmzK4D7LPtdogV5pxoRMkVZSDasiyRnfW",
  "key1": "GNRBhrXXAfG3rnDG1rUEK5aq4Hu3GWyjLrm8ofniwhkwtAeWftB9TxPFjKhZjVsMDYx4sa5tbqJX7t3wP99j6g6",
  "key2": "2NswAgcHWrv2DcNf9rkmRZLdphBbLyqrZQaZTqVqhg173UHw9XnTZS9f7eL2acvAPJuuaDKGBJF3GnzkJzHCVFTW",
  "key3": "3q1Ze3gQzW24m94v9N4TguN4pPNkmxR7QkWxHVoDjhZsHjqit4AHrKYQTWV167tPe6Ax3Qe7CPw6NHEG6Hti6CaV",
  "key4": "5PRqcLqKhFAqxm3HYcfvH9s3r7oH8r5FFh6BHcqTAGCjfvUNhYL6MpzQN4vrn6t7VXfBNcHFTpTm5koPytP2QKKQ",
  "key5": "2UAViGzfyHpqGkvGKKoWfqMaU3KrWgTTsmgWcgEsZfFFjqPx1PUNMuAeyLPP2eSehaXZYZXXhhQhXQdB26Vr7oEw",
  "key6": "2f5n3PjpBf5sv16uhbYc2LNqBRd6Ruihqnixf7tpN7HKKwpZxTB6nhtCtdCVSc4gUySqpvD2oWX5B1eNxF15asvh",
  "key7": "2gUrU9xYfg4VM5sAnu5s82fVBRjYq9FcDc5mztniU43WBuJFwimNgQm6hdbWLEXK9DMd1wWjZmwiBbohJ8sH8tzD",
  "key8": "64zfuCeJJtj4akdx47APkTCTbwgYAdTY81icr9WD3UrgtYopxSgRd7rLD1NmpvtHGc9gmQGmg2NUXgsWS58YnUiM",
  "key9": "Bsh23UwLfjATfVCQWCU6EhJJET25H82XBfRxJAFEef5PQyTYWZU5NpSrFvbWPHP6uRwrmJWbWU9bXtyXjFftKaE",
  "key10": "3p5cipHH4Huc1zevQFdvJHAQhZHD6PQhukSpqmsN99h5BwfVS65VLnbV48VPo3SLKvoKSNKAXtBuTbEpzuNFVXxo",
  "key11": "5B81CdSjPNwcwHQXbTjqCddiVFtuL9fdVfAe4QAeJ12N4iv7MxKLRHPy5whsfA12n6fH3DvR91U7d1B5qxJjBHCH",
  "key12": "47hX4jgw4JRJJyCgwaiADapyHPHyCvXTDVShXwHwPuDEXZb6LW9N3GEtsQAdeXkCBYnSi4Rw6cqoDxLazKT6xe4F",
  "key13": "s54qBKigNVkGPWUDbuCo7zvvzMEasMzBwr8SNoM8vUrETauS9ZjWb9WWKw77UVkFjVASJR5of6K7gzBhrcPuH5i",
  "key14": "49tcYByS9aHxYz5qAhXdXpbELmRLX4jxfHGPcPwftfRmDKHqfpr4Gp6G5iK8t5RSJraCMh8HjnvqTy4akiXtKW8e",
  "key15": "32u7NDG7tYYsSk5bXZYB9RaY1WJ8qsq5HUrnk2R4HzwpxPf6baSPA5nujwzYFvqRsijX5nSs7yvGV4Sn2E372jWK",
  "key16": "3gizY8ZZ4BoXuh2YoKNswowgVu5DfDwwMSso1XXty8EjxCmYpsoJJYJQfLBUWhAmxeRgQhZiSJKTwhBuTz24HDfX",
  "key17": "4qiKbqWQErCpX3qcQq4CRnJGRCK3k17GAnTZDXMYmnk7B6vJ8jABd7UwfAKo7fSAXcLmGMs3nnvipeE1uebXhgjj",
  "key18": "5q78ua8umKZtPS9Tuvjeo5R7Jyj1b7PumromgqF5EgkxLaS6fUHxRxPPDW4MrmaHjNjK46dGkZhY7h5uyorGsA6K",
  "key19": "288cQa6jVNnqpV15wrPus5ZUDAE6MQzWvq4MBF3o2bmu4gXmKMtCxXeEacD8rmH6b28Zcj1R4WnZs47krWC62sRq",
  "key20": "2QsYuFSidfx8oSKbQg4YnjuBbP56Ab4t5EQBpwXTR14P1BWTwijkZMzwLMpi53saunvCdcH7xEwTgdRPDxfEZe36",
  "key21": "4YfhRuwn45hJYWuF81q3pTT4gCYuh8qUpdZv9C6EdSjXboGJfTXi5bcxdFNf9U4kARyB7nWy9nQde6s7Ybm7tZg4",
  "key22": "3J9S17rDjdFFqPM5PBeQm5hsJetrxknZKic2LsaVmgRtFBSxjCXCh1kL4m4F1EbRVXdbsyaFtCZKPZv7w4JtbSzA",
  "key23": "611eJaqTEVyY98WE3RCB5unqTGmQs9K7CzTFgjVjv57nbAgHx6AoKT1zYVRXaSUw3k4Cktjx3SVSdo6Ai2M1e3ST",
  "key24": "612Z45mtoH2aS7N3EoJkfiXiDMeJrKLD23tJWgYpW5u5m4jMLYZxRYRUrw5rTKZh1qEAvxEwhzBmiH2oymYJPPsj"
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
