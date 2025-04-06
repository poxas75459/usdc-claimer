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
    "24AZ1Judsjj1RBGa1nnzTatKrNJAf7zceYxQi7wXDaSdkimxVt3PLtEgjtxv1J3cBA2SEVbzPWq65f1CmgpiDNTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23itEvKSgFocDn7e1ci54JTFBoNqASn8i6C65TQJVATSpxPmdAtc14JwpWRGX2XqttrCxTbiRJ2TdjGEJLos5rnW",
  "key1": "5MQTYiFDdu9QDx2N2eaUzrLFFxvEKLA9vQ1h8B4oVSDvWhuY4QaWnbKo958AemMNeEkBh5XaHLLsZxwjqQHRxWGx",
  "key2": "2rsG8k2kwFxxZvbhxFFJDidDGBZDRfbFgejxxp56FjD4km246DvBqNxe3836dWZ7ggUfDocT1d71fzDTVVBE3sH",
  "key3": "2Y1AbsszTPVvXuz7LWF1M8GwX6JmDzzPhshUsgPZKudJJgNUyXGtKs23Nf7YJtCDjcZUGEkxHJ7gpHDN8KvuoDkL",
  "key4": "4CZdVYUpuz6N9sBWVzFr4Tp2152ZUH6NQdk3dyYoX1YagZMZUpJNdA5zgP1Z9a9j98WEeSSrHYLsx8VzmakCXnpW",
  "key5": "2mV1GDmd6Ao3bT5L6DqmX4zjmVAQKHzvqq6NuJokubuCGfZ4UoVvkAsY9tU6NxcobF2QFxoTBv92SLQB2wvsTyzV",
  "key6": "2uPnghFq5mcW4vySatqPwMn4gPABDuaoAd3ZCAf1sUnDVFqXqgoTuuvyHFgK1ShC1QyUKRD5XXpg8jLKr5oavrdC",
  "key7": "5EoEXMN8C79iTTdAWNNmAx3RXC3MBENEs2RQBfiZMTt7TzrvZN9eLnVTZLGpZfG75JR7GrZMsyvBJVb6roffJREM",
  "key8": "ExH4jsDdbwdyGhbZeAcSAgL5yRUqNqVVAvEBHHWkgKq4EeUmG9EkTkZXF62sx2rxLJ9gYq71M3eHKVrvvmaqfJc",
  "key9": "2Mhips5mPnQP27jNaR6VVT6irrEEK8guwFfyWA9GcRwM8UgjSom9ncP7LUWE3D5pRVLPPPQuwt4546kG5EkEd5tK",
  "key10": "SjBv5QjEtAAHWFYmXqvDvHzY6gnE9WKqcnkfc81PFFmDJxeQri2uvWMuRCRGjPgx5VpLUYrJHEHRR8uRPL4aRDL",
  "key11": "266gbva78DtKjSw88EU2Rdfk3k42NkHSUSedRwZ2K72Zp1xXKKch58zNnbqv6WUPPrEHRJ2PogXBUveuwSy9a7Bv",
  "key12": "4n5gRzJTwegaWa2jxX86zKeXvBdaqeRf3D1nzTGHWH1WSn3L7ipLDWTjs7dZU6Dx4jSj4aTUNFKxN2NJAFWuF7nZ",
  "key13": "5xRuv9wuD2UoEkXY9Cp3unBRduMG8nEXtFSCY2tPLqtKZu2Qa1sjTDNiNyow2SnxNZQsyMPUuPrQp8SG9zksyWE9",
  "key14": "53pXzNGyNUR1hJprffzkvhmZ5Da3Ar3UVgzFjMCBYAU3A3isuKY6eyJUsYAfysayfnEVnUKkwMJZ16CKSoMb2cQc",
  "key15": "3mncCKk6ABPsU7HJM9ChRnwZucgTX7KX3oSM8P6KazgEiMfP4NS8Uxkvtcyaj7wkkuJRd5EhQZHbCQXn5tjU9ZW3",
  "key16": "2db15XFHNvPc1jpVfhSLMdEV8t4DNB4eRhpgLGNyXd7hEkemyjRSx8ymseFndd1avRgjQmFxpQrf4eo7gJhfkLRh",
  "key17": "55XsZ37FpQpkUvcQr3hm4AaNjMhxrhqYq361znqNbyTDQhs63TYZkKMsGRHFeqTjk3vwTcHz34eR55SHCfhLnEJQ",
  "key18": "5icGyrsrEo1daskpzmFHWa24uULZNrHhR2ueYUkjqt9yQ7rWfkejiHVXvxZWKdggPi1v3FxUzN8G34BB5KuyCZE8",
  "key19": "44Tzv8YSepjCkcgtt5ZUTnHdWG1WeMQ9KUZ4ZBAJbS4emMFgwKuKvYXZwrEC6YtTgCBxp4tUiFCm7jSmSPAGQbWg",
  "key20": "2RWisjP28ffS1Qho6KKFJfbrTUEsA4dFTSDMCrsz7qMkdrpZVnRhMZ14hYDPVUeD96RCbW2Kuf17AerydrYqr5qo",
  "key21": "o53gimw2ajFAJVcQB7Ce5na2YKgmxbPVWsXQNcV39gZurQVayqxR9UwXPNH619a12hd9K2XsR5W444amJburQhF",
  "key22": "5inc7P2TqzJH3ujEqceBGjUYFCaNARqupCpyZyeJvL8SqNyDh58JpKkNLA5rHcTzg41rBdpRY8UbvYwESUjbTTA6",
  "key23": "m2P3CS1HB32ckqaKAxwxQRpdDDKZsoHB7XaGLUjZqGdtV5xChn9G8JC8MNGiXrjWAA1psrGBxzzi35kQuJ2pw85",
  "key24": "2e1Gq213vub2BW218N7ZdoMSPuLkLXypRzFjc5cbRETKGXG9Rxivvo3NLU4BinFt3BeBeUEAdMBp1NziH5BsvjWP",
  "key25": "BNu9Sro7ZpYn24hP2Acocz6B9vxy1ux5jiUV2QEgkcXkwJk3X5dZyvQPkfk6E8hFhce2AdEdVuBkhg5jPwwDK7K"
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
