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
    "2VkfTdmopMUdBc4r1D7qjDJ1kZui8rmRDqaUNnGwzz2q9bMXWg3rohiTzNWST4tQdJGvy26S4ERaWMHWpATjaL43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bNDbSUuNYFFvz4VZnbSjm4fGiqed9tUCamPpPksMA2GC75AVimD8dKHWua3kH3aHkgCavDNaw4MxyXGSBYpSrS2",
  "key1": "4LnCincNJZgkqvUHXBb5yAHaHPtsXDvwNnfrht2wAKf9UVSCqHjVmtLngxBfK25drtHgDKQrucGcb8Hoo1KYj5wv",
  "key2": "2TfBDp4gZy29wLqXDJyAm8KLy7GJhxTJw97NfJ91ZRE8vyeccKgdkESqrKYZWVdou2terE8rZ5m9raCaDEoENAWD",
  "key3": "4Q1QhEhF366qTZe2s2kzq3XqEwDiWT2tomqLhPd1F2WcfVPQwyHaw5x3Fzpx7sqzxmtgxo6QfAWTX9uwhJZFbLjC",
  "key4": "4Lcg1NpwEkNPfz1muynSGGY1JJkRkqwuvByosGwsESzeC83n5Mmizakmg6SB3hN3zDkc6boj6MvYUShSh3kzGab2",
  "key5": "2wnsHu2niFFtj9aDFsijDWkwh1i5yKtXNjaYLRCGFi5AA9fcfPzRE4BuUiqZFjM8AFdv52ia6bFzWd7C1rYfpju",
  "key6": "5NRPVzP7JRyatBks84Px8PQUfv5UeMAZHuhgXDmpM9nrib34MeycFiv27Xy4RFAEQCGdpLZdjYkY5f6EGxMaFi8f",
  "key7": "kcKpsUHkje4Xv5iVa5drbuDMm6hy6YhJyW7skyXSJV24hVXfFWY3nt3VJP6iL5weLZnZmMUJdQDGzHC9hxaihP5",
  "key8": "2XnryARnZnTQvdB4Qw14Nr4xkvzUc513AcoHXTcY1cwW2sQqNDrdb2VUvwHWwGJMsj98YC4igq59q3Ufz4UAK1nb",
  "key9": "3e4Vxftg21VEb4Zk4MVxqffpcq7D5A9CsVdce32u6cEP7XeQPgn71KDbNti7iwVG2HXz2itywRxwcyrKQr6DJHNQ",
  "key10": "2zcaPDasf1PjETbKLiFDT5BVZ96DJuZV7iUw9f6M4Aj4d5JHes4MAw2Yhn9q3jx7NzPvnQBQYo3xYLw1RAST5551",
  "key11": "2E4s3gs7GgrKyuHp9ydUSp8cXcJQzi3e6zDHpotT8BozkWKpPXDsRC1cATaUPDECuRKr7DbVfzNFAx2ejRvvUdbZ",
  "key12": "5mQHMhsFkowsjjmkjWdWctpSrjnfJLRutEByTXLw22owVPfVi94xs1o2Agc8jCPYeprzSUuVZgSUfHjNKVj2swUh",
  "key13": "5VzCJzs6hU2uBtPh9gWdXa7vFjzqP2f8oy3fadTxbnGNHneZouXe6nmigZgcCWLuwahpm1urpQiZ7ahD2XFLES5S",
  "key14": "4b3yZ2vZQT7tSad9PL42SgYTczQE5ZE9LytnrEYnoiTAG6MknFAuc5vb6mKcMaArXvN3TdDKYueuqM9nYv7x42tM",
  "key15": "5E5Nznwjid8yVNJEoVSKmcTKr4PyjTTDmvFKvaockTZdDmjoTbjZz2WABAdomoRr6PoNY5wREUtu23SXwruGwjs6",
  "key16": "2jhbmzu6Rwq77TfyVkSPjs1vwqvXAFrZnEcAATP4fwtDZ8eedJktpp9GLFZyCmMK5LgNLM1o7iP7C6GJr6zGNSqc",
  "key17": "3xD3ABcwfXh4w573bDWLiyxmZw9SXrL2qdoKB6uA7tD2FABqd9qFNFGgeuStKgayxPakJz9ShFZ87gzqg8nf2omq",
  "key18": "3z1cb4PapZpvhqd4ySDFRmjwtZyrs3EenvXHqhQGcU2UZzjymEKXicbqy1foEW1oMEhBpto3Qb9uwG5mKEwhEDck",
  "key19": "5UzHuaWnqDLRNusf6qN1cyrG3vtJUUwf8rou7SmMzdLYu6G1rbBaLD5qaYeKfDWAYcLtdaBZ6TtrfiXBbzfH1UXH",
  "key20": "2CnGtds12nfn6qvWi6SqgZeNsA38CCipJKzSfFU7EYmv7mpGAGwvzbhE5rvRTQ27ePnA4ycuqhyZJ9meRbKV3Kv6",
  "key21": "nsTr4GbbarJb62kkcrZf9jKkymrfeyG1jGxMyWkDAbGC4pC9ew41oLVp9VdvYNdongnF4g754DMUPddxvYhdad8",
  "key22": "4cRConLePArsFHppsxfmK9TGsshb7CRmBdEWSkSpG1J1oqNoTJ6gA1VQvSws6CZ616KM47tqZLRRwg8u5hX47ggi",
  "key23": "foHdMsYyvpUbBCEP6pw4fo2PYtQ7amXz3ezvkdu9vBCrifrfLZZSN42JjpZi719B7uyfFbgWU4u6jQoUCoFFghi",
  "key24": "2HSZmvFmzg8zPMYwLmQT7Vt4usAjaCQMmgYy3RmW74yBDC4f9ohREGmDUjKVxPTCFyRTrGJjqh6tHtTLs7kYok7c",
  "key25": "3d7rUUosWQY4cvu6zYFMhBGR5sk984Rw82gNnk9CqUZJ5bHPJUTQWYB6x94sBNesKeL2zNpVV9peFH3Vmjc5wE5V",
  "key26": "3xpB2sp1mJ5vhkQdGTPX6hmJrR7R8m4my6YmWFSmRuxgUkF7Vtk5wVnQJaLC9VpCjhQAZxCG91T2eswiaG6RE1Vr",
  "key27": "igitrH3YBVJxjfDGoBgLoNe8oHN2pa8SLNtS4codA5ebdEJxRfsRBdJQaxQu4EYr6aaRDU64myFUU8xiBWLpNU4",
  "key28": "4jpESnWGtbBQNjXhu9qe5JvYR7m4AEu3Q6dPsiDk4bqGyfAxpom4AfDJ7CAo4pxun9VrNwkrEwK9BEfqWUCJNUCf",
  "key29": "3jBgkHiQseFWsc6K7BZqGqf5yTDi3iq4mwMQbpxMjfUW6ek16ykmy2XQgPi8X2YpPf15CJSky2Gnbmtsyi6kF24v",
  "key30": "4ZVUS51ykAXBMGk1n6LH98iBJwEXGEoEC9BrmTLPKsiwSLCmQ9oNhbyhQp1UyUpRZmmtYqHyzoe4KqMxSoLmZMRp",
  "key31": "56ecGof5ZA8muWyJvpDtEnw2Ax1aEQcHkHfLX9bzdPA4MxgppQEzyyS6VWRntfxyrQPDCrXr98pRkC2gguXxY4Vf",
  "key32": "48Xmfu9muk5KyUJEBuVzrP7aYFt1CHa4CbCAoKYvujjE59Z3bMPqre2GjfaTetgPMbrA6KQtxmkv6r1w3ipQ8EtV",
  "key33": "2K1mteGaUQB4wuRwUEoS1EdcBJnuE35XRkJn4U5zLAsc8cFoqcGAMrYmDtt1PmKimygFAECuqWEin1otEXezRUmN",
  "key34": "2HNGHQD5V8ttKvKHhK1WG3eo2DUBbzedtdCpeBiNGEtio2Z3cnvwCMiPCL9EZXhqcrXtBPUv58g3ixzwGjzwRhBF",
  "key35": "44NUihTU76jL8L8TELi3CafJ9t9syWnAJHUTChXytLWrVvhckYgVNP4XR4Pzi1ZmNLZjgdWnT6koA9WtpScRymM6",
  "key36": "4gW6SnhfAPnziHmw7qTUbUJqnEu8dBioredETJSeqDVTvx5Fhi5oUZuuaTGqsXSddZi5yuAD8cSaBHkkCWN1MaSs",
  "key37": "2Mg8sdzdaDwxaupyzgfhkxVSEUPsxXghRphXdM69Qv7sbWfUWwaHvRUzEFRUsDbrbA4SCkBZUhvJiFBNxetW3mdW"
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
