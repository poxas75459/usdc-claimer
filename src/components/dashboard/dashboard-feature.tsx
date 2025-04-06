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
    "3gJq1UPX58Wtq5ukXwWvmMJa66ed9YyyqcQe1JexBm9UCNnRgBkPFV9mxHfajCWztVXstDpdNVGixu21jfzWtRdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p2Lqpivrp3BemZf8GPGzHvQWeUsU5kKrxzHXMXiXdQtpvG1ws98CCFAneevKkbsqEMnj2sP4WBjgciKLCEcvey8",
  "key1": "46HM9adHbDp7yzoWCcWg1pX18D7twL33yVD8GUE6qqANa61hePgvQp2SV8MZXh5d57ua4URw4bDZB4UmPtkoZzA5",
  "key2": "3z8nbVzf7Xg66ZP4GeNN9oLL3vsdgJKoAoAga3y6SmsHzBvxN8pPUg4jH6jS6hZZTjFoQFLC3mKxviDWN2rbh4Bn",
  "key3": "212Xxh8iKtVCrrKhBxpTgpBTQWA98JshbZzyb52SeMriLVb84aUtVdQEBaFkAJUJqz9gnyUsL5pmD4uRHVChDDSH",
  "key4": "5hpmrXSNXNMdw4bd7EWvvV4TDsttCSdYD8naxp1fE4nSPeBveFcUzT48AUmiD69873SVQSng46XB8Qv4jvbyGdtR",
  "key5": "4xykCETCXmhYSRiN3AetNnxTHdPLNNGmPgbceKD7MHSat3Vj1ERBY59nWXV2f7YXy7C1fnP3C5uA2icaksKatb2T",
  "key6": "5ubSE7WA19CtAeVsKYLXismuxvKNDZKsquM3xM5mr6CsaAaTnD1jUdUVZzQK3THX4YJRRSJd6Vno5dHfgn8UPgYG",
  "key7": "5EoTzz6MF9pty7jT5e5GnzvzZLPjuH3GzYMr9165bzMZxbph5HDEvBdqrWDDQzBYw14e1whNmhgzUu6DZsVaFHBk",
  "key8": "khjxuMujKRaUnQvxuzhVJFo98UCuR3PCgepykKKapSRhxoN2NztUbgmtX3C2iDsCDYXRaHDn3aWScAEq4uM7FMg",
  "key9": "539oNgY6CMZCeKcDMDxHxMbcrZXAimmXgvwBFbHGC6Ws6W9m7ZVEcvTezgPoahKns2ikoBBuMY1p6PEx4c8ECA2K",
  "key10": "gc7wdjRhZskcTiqF5MDvpNg8eA9NLAB3wTFqkzyzp6QKY3pWXqYuUx2QhrtNY4abQYmiYezMJNE1MaAbGthwauo",
  "key11": "45idjM1HbnNJf9jFYFGJAmmQi7rJYrACz4vYXwQ9yvyYHTvVeTEqSngZSzN7BknLd7m4uq1UzBcT33nFnkxePJ7d",
  "key12": "2VGUDJbBx4zkEwP9ctgiCcscsEswBUvNJM9sqvB9fPnaP4kzMmKB8Xz4fbu6d9xtpDR5Bm1FzJMJYgmShPKx2DfS",
  "key13": "3Cp5e7VDSu3yFQMXRw3ZuXr1ye5TgwGtvWkM2ry1DuhTN18eCDQnCZkMrWbG1zuDcrdHBJf67xv4zUntfZwvEe3C",
  "key14": "2PjHWsoKZQrF5xppZvN4jpaeSzD17fGDAsSgtLiAmDUe8iuCqxygce8ZRzfKqjzY9UYxVuvXxMQojM1AW1ukwKT4",
  "key15": "4wT4dsUgAb1GqXSLSBCXZeyBCrVYM7DdFQALsbqupUeKuuTeRqBeBzbdNGUxS1oB2UZf9PcVLY3CkjQy28Q8xpyi",
  "key16": "3rsmjb85rbhJZhJKP148uzgsNYUWdLK9JhZLzsbuSLte3Pbtt5Jz2sbadZ3HPLuU4WNEqVe2AJv6JxLpyfR2LPnN",
  "key17": "3EmgBcmor2nesMAjDfkGfccqEfUh1rzBMx6KLxj4Sg6yZBHEHN8vLtUCqEtXmmnydYLKUrtscACio7QA3rCWP5Gq",
  "key18": "2Cvn5w5ypWcPrzWNMmrpMLu2MC6YnTQH7tFu8txii6D7tfWFPiwgxfGPN47fEKgg5UfhSDLaoo55MPx3CJG4p2Aq",
  "key19": "5WZE2N4BTHBcvorpE6FKxCs9egQQPTeFhK9e5NotH69QMEevEd9BDpx6utJXM9eL2P4QeoyWhhiU3m673syF3rJ2",
  "key20": "46Jv3foBAu5V6EfZYGviS45sUycTHT2KPDSuULLx58AadCnzwubCpdX8xppeCpUURUrkcMKvh3YZykisxHReGFNa",
  "key21": "WGbQaotLhBPgN6nCQhcUxrQv8nTuBqNxujMHaozVYCc2L9R4JBJPQAvMF1SPMKpYdphYwD1R1YXWkwgzJ5VgnuB",
  "key22": "5qQUuccufpkHRdpycd8J5wm9n6LT6vRmw5424bpTJPz87KUNfmznvLLanUMKNb7DjkmRsPMJFWR8pCP2MoREMJSy",
  "key23": "2548XPamWNfrqnQgy4gt1XjkzSLuuoPZYhZefSuMV157MZeZzUYqSGhqyb1n2HKsoKMPp1EXTXrTfTAVPscLT4S7",
  "key24": "4G4JkdVDjVFSVmqjKtK5du7XRknTxG1iFseEaAyZanFb8KMpuBviy7haXQM84SuL8T9FScFdVy76jWLJqChpCGWQ",
  "key25": "51HJeq4PecCHezEe9u5crPoctUpexn6K2xhNgjHipYbANZr7HSsv4rcvG3JPkm1bfE14acH3sSYRUoVfvMLfrpbt",
  "key26": "4BXausTLRgoWBVMKmiddVoxwRRmMPGYwQgQGNyQvwhDgAsjEP3HSpD3mUPDHnCAVSffCHtKkYhhbcS8ghZL8iQRy",
  "key27": "4N9pLmkCxbzeS3jpxj2Ufd29NKfWbTjHLELvkHCzvCDfbHioxusZsV1sUcjb11mst8VRdxoTE31jVEPDs7JnX3tE",
  "key28": "2EsUDgU5UyuB65MP1StC57XKQkxhcN9NvhATFuoZWncGahLFbrUtCvj3TCx4oz1PKAwkRwvWS8DbUAHLp1byxHAa",
  "key29": "rnDPZRRaL1RLy5aM9Juvu9aRZuh27NeTSMWfAB88UCDUYGFEEwoMhTkzkZApbafDmJqQmjnAFbXgLk35hjuLJJA"
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
