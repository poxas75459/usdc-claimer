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
    "3D8sP8bQ8n1zeGvJGKoDwRjXtmgguS1MzBEebw6N64J3oZrkFnGZemdqNkP2NL3JsiMAbmwiBbeFbVxovV7RgMn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MuqT2tMHthNcRxn9hVnaMz32o6KspBnqRXEB98EbbhWTduDNfQRkHmWPGpXaMLGrBBbHCjcXwGN47w6JUShX4tq",
  "key1": "UjLoXWQXUdhEkNCq9nbDAw9JGo9KjnkjqopQ3GtE4GNxxngEyD3UNDsEdviTsivAZqcbHRMGJxxBDUiwFtppNvL",
  "key2": "2MDw4jeXfQo6eUfS8euA9g8skgBcCnWCFL3UvDzHPxKJADZc4bWvBrPadzYpSYGVEciXLP91zYBUKvyt2j9RcapR",
  "key3": "LhvV5PYq5frBECnraFQrz2KrRor3QCyehfoagHdMpTx49FTjNnb2PV4UZgbZ7mvr3k5KZauBtMMT2D6h4kdxeUV",
  "key4": "3QDmYXzCgfS1W9iiWpGVg6X9VCBGmcVkTTv31jUTfaANTq5518kX1xbv4qtg4CVqahnUGwGhVrrLqGi1pHHppkjd",
  "key5": "26CzapHeKWs3zLxa8p9H7TZu7sfRr3DBzqNwzeFmJ2WfJM9VEGVMJqYNwCM3KhzozKPYCq27ARJoqSkswvdS8kRF",
  "key6": "4MhGhpsJ1mS8CoXeLNfGwzLLXqDDdfK5ZTm4EErhTZzcu1sdyJEZqkusDyWtV3bsVMXbd1SUTxjwexvMagSGcm74",
  "key7": "CwvtzX3JTiy3YKDNe4qFQsd4YcX3qcxNpKDDiH6o1UC2LgXWp72qFFeyDmV7yJW4nc9VHw8Ek6XJCwwnWpyn59X",
  "key8": "4E7s1nQKvgfhL8oHM1j1dn6WzfhtGxKiA3PzBxrt23P9UhUaXcNB9wiFaLEZ5J3C3FqVvwRxzkaW1ccFvg3qqa8U",
  "key9": "5EECR1aCvsQxexrnkZNkeYwyokXpQdh9CrohJrfgSsfdoK1dpNfQsWd27V7tbE6HkSfwBmsiw9eSRQE3RhRESMoV",
  "key10": "4WBLg3Emuik36rWqxWAkd7nXMGRHCtUzLEUbQPQnZeeMscuBAJ5o8aKVL69v7SosSP3RqQSvLDD81wWft5RMQ6NQ",
  "key11": "5V8FVPWksreWLhaqt7n1yEhVT2LkUikeXK6QJDRRVxjWAMwAv9Mg5cX9is9S3DD7TFGn54Z6cus8uteFVT13KTrg",
  "key12": "2Y4rrbNnsxedtqvAiAsPPbPbqPAJot3yPiczTpvWAb15e3eL9Kj4xR7M7RX2xekBGbf1oD6M9zQv7GSgiU2HnK2w",
  "key13": "5EwhQ2sPpY5tG1ovrzkQMfjpbDsCdr5idMYMUqvYmbZV5jcJp93zNPXF5ZacC1wXanXNhJyuAcofrG45GvfsrPUd",
  "key14": "4AyjzG6k8RZLykY7YKiy2xFkCyyZfzZov7wLYRJz4pivGntdAJoUnVk1pQS9Yt13MepqjrujVEgfWreA8NRyLzgd",
  "key15": "2UBuScAAu1LAi6chDbWqaQauvXmAbHfQpMze5v3YGtbfq3ARNCf3Z32H14Gqb1kZxV2d9FQ4QJ6h8ddNtutdVhv",
  "key16": "56BwzjTA4AhbMJB5JAP5y2YndHMH8ahycAjagRFvPFCa8Jxv2zhACNnnJK381PpNJyiRc97TidbrvdEr21iYJ4SZ",
  "key17": "5NmZ8vo3gK9LgVXSmLTsjkvYPAhSGCUki4ZAfMD9AykzZ2KnZknmso5g9LxvYBbZEUR2dXqih5oHCXsXX4Je5eBd",
  "key18": "3F35bqf4McvtPfLUM1unid6EZS15BLrjFgFmY6cwtwAYZW9PwrmSoE3a6iiJrEdw2jfc5BAkWE9GW3YApGZVVH9M",
  "key19": "24KtXqh8YXcsfKYmA2rQC8ASZjjoiJ2tkJj6Hp2QHrnx3hmU55rwttgfyoAd7JPDjDVEjuR19rSTvXC9Gri4xeB2",
  "key20": "3NcjQfFo8fUXp2x4NkYnajHnTSsp6GQuNjdd64De9BkT3R51trVVo6BuKTnpJsbyQae7b4aFjhCR7CbjxNwXMJNs",
  "key21": "4BG5MUbMRktyvDM6RwUy5EbubiekKVUZRHANBfVnJQo8HLQ5fYVboLaoRBhrXPgHi6RU8DYUEKgVverjJs4jNtLF",
  "key22": "5bQNe8papyTprYbC1UJt8yWvUzQMFmdEcTqsEZiuhQMq5vZeZEweu8RGH8sQjKeTjVUUbx3u7e1JCDQqkgHmysSb",
  "key23": "38EgLiC7c8JCiJp3sd1iRi34QuaGdXV1tLEbVbYLYxP7pRokTNPpL6E4rA2xDM4MLGqnPgDp8xZVUhWNQq7dh2Ji",
  "key24": "4EBQmYgtB1xK1N7WmahLpz8gX7RtiowybHZja717xkwt8VCLpUYQYEDLFgHC4z4jHCBZKLm2HiGa24MmXBTnxou1",
  "key25": "2qQFZEP8jobf4kX4MyGj11P4Uih9UdTdNSchBzXix9kk4AUxnzv4cLksnPfSHFzNQwym6tyMGEP7ZV8pei8KDB1S",
  "key26": "3gAxciDW7bLBmMAGmYWyiqFPHmodJEj1vNnkh7ykNscga2MePM8fpJtQ4zDGz88V5dKCD438nihGgRsKuVaG8yG",
  "key27": "3bXnj5hGQQfaDPPyYFn3n692kgq5xYv2YwFAxsm9HEzY32CifYeFKU3qPrxR1DAyL6yw4X4MVyqMDJ9kP3FEz8PN",
  "key28": "sAvSWnNR3TsDYGH1YNpbob49eTKCYKWka1FqrgmFJCstiPvFriTfTxsvVi8JtrT5tcCoZXK2WsjDVnLG3a1rCgT",
  "key29": "2dyzzuNLZNHtCTGtQJnzq2sY5KBJhxq42ebYdKf5HwWggPJKfqAvtQWxyKee43EGxsRCPMTu7d3ZRvFmDdRwR7KC",
  "key30": "66PjEdtiiMun6kEcHWow5q7MTRSfsYFgM4jKj5miKAUaMsHe9yqdZhcokURKNCTqUZB4jmFdq4s6TRxMtuUUHgUF",
  "key31": "4pvs74HToqna4BA244W68AsKveQjERQkpqH3s2mNUPKFVF775snJ1Brhu5P4Erv9MXDdu2xwXWnvcCB99AM4xw1p",
  "key32": "57dmEu9xzoQXbY2rr52eTCJdZthQSLS93xjPEhFscV2oH3hRhuRZNvrRvSao5govxS3NuTuDyHrp47E2XdmJeTQG",
  "key33": "2XxtZ6fhpbH1gQwhifXmchJHRLMMQeeyN4LUKBXUtAqH7mNTvazGTLZQ4Nb6N3DLecJJ8GvYUg3e4DKwrqW82jVz",
  "key34": "hsAYrQwu25UwNZt5AJMuwGUvDpZNG9ZYZexnYZCuqJG6QCMedT4UAPE5p7QLoK4DYyxZDzej1pd8Bb5zQUEfyJx",
  "key35": "32DYXSjyRxQFA5GhPsgzmnQ65bExbncUgfmTL45dbN4xLnnd9SzeUqRAaEvvMM26SHmsjnEXDUe77QD78XwGkVdk",
  "key36": "2Xyd6dUN8M6wjtCHMQUo779C7RDGgFumFSNzmXVM5PEqoSj6md2rN6YiGwGQwQ6fxEnmUWovufDgt2XUcSXcd4cg",
  "key37": "5o8Rh61o7tahhWMFYAwj9XvhFZhTn8S6VCU12ZuQZD3pkht8mxo6PEMZ1Np9fC75dFGbHu7aYXvh6La4e3RjEL3T",
  "key38": "3R9Gi7yNTB246dMhBSh6wBuGZeqxFmiBAvQ97sUKbTHQcFnf6vPQFMCnSjTL4psuPHzKtoUMFpomPNzry9TXy5ET",
  "key39": "Srhbuoeee9dR4UHvFXk8BZP8VyQWp3Sieg2Pj1d32HGt4gaYKyzFFExweV9oHLzk3VcTbC4gGxw7Tz1XbQ8g9AR",
  "key40": "3K3qNfBXSyKwRZ4aNBbLp9iXGCEQ33Z88sc9rLTxK3JgjHCgz3DRQguSSMR6YexV1Fm74ubkewCgAcNAkmRtnhYj"
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
