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
    "3LEegEP5Hmfd1ddwLpaR3zLU8fyWvfByqbmHmdcK8FWKzHELhk2sbauFs3FTt7P4h7jBWA59aV5MNodCEHnKYMCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cN8pr5p413qbhHVDiNPqNFFVNYEB8oXus2v5By5bqvcUNqPC42hMzcGCXZhPTvdYjzk2MT3jaBNWc1xbX8N4wM7",
  "key1": "46caqS2RyRRrG5xW6mj8UUHx7ctvLgnASPB7Vr8rcS5h3vttR92MTRNPNEt29YhYpiww9nNDKVD42Z8DUS7GXHGv",
  "key2": "7MAxQWwBPjgGH5PhwLhEbf8XD9uWjAAgu18f7TN1NPgDCKGa9qDY7NCZtNwFiMz33JAtK13PfT79cT6oZy9TvVR",
  "key3": "3RbtavsR7i98rhUzTs8J4sSQnBMizfzveqhopvjc9MEAVHXMeHroPukQnzRbSC3m18pp4ATMzcrS791KJt7RSbLp",
  "key4": "3NgH539ExaHGLo1S2jHHgeEk8o5JRUWUYjVSkWp3xMY5hf5cFqBCFYKrHVdjmCBmz7BCLyDEyDTNe6QKopMzpKsV",
  "key5": "3NtbNuLvKwFk7wf2FLNhMkjUJpDTTneStt88kqrJnhb8L1RhqN5JS31ALMzmsquqovcoLXLC39S8SLekt7xzGLJr",
  "key6": "xUgXZ78c5ZejbxJ9JBz9TQ9E4oSaW26cMb9hLC5nRpfwX8eDXuwLhMFXgnokjDk4Yc6y1RKcbuuRyCLJYmVsdt2",
  "key7": "2EacvNf4A2fwGneb1N1EmyCM1vXJeDCZWRN9b6DdyQv1qSA8ntc5mbtpEho7KjG9LXByGwF4a2FG8frGev2MkcBH",
  "key8": "5zpb2soLh6ZzV9NtU35VhceBcdnu4848RoYLugp8qrCxJ4afqMp871WTiJCZw5djHYc8SHBjpP7xneAtsvbfhghS",
  "key9": "QHDH7QPKXmY4hJjWBw6chVFmDatkgBA3mFynxmbb72Rp9XPEG4k17e2JQAbF7Jo8xswkaf5uyW6aqPX7vspo1w5",
  "key10": "46uSmaZ4qe8tbPD1VnmboGTkKBb6ZPm7QNNEgBDb3Hx43XxyQyjrToNwaAfQWjtFfbGf3zNJpzMfGeToiR18rnfN",
  "key11": "3V2WV42o5VhkbCnYQuj9kd22aHR5UWDJCvfQrqjd1amhdnZ1RhWEe4GBE6GkLWKHmZRzWB4nLcovTmaMrr6jv73G",
  "key12": "6A1653cNn63obDNey7K5ebGJKQKw1Mu32sSBxiPSLHovuMaUpbC3k8auvLjJyrKdERHb2DrUUTnpk6X3MBr5jrR",
  "key13": "5A44PemQ2v9Juinf1L8aquRHwqhwb7Xgk9btJDR7Rpjmdhv4KnsuD2RcDpxkmZXt7T2en9JXDcxVZWVHWiZ7QXMs",
  "key14": "5bQEyMQbqpk3qKuvR2x2Ys7zKHiPpdHJnPKTadaNGkQeK9UCVztp8cqDUHC9onNgWfRfqppYe6rWWtNRGLizYaCJ",
  "key15": "vMK85oGWo4ip7noeTqKTxgFKJvkarRTm9mhbZtK39ZqEJpo7G2snXhsKpySyGLMVvSrUVRm6FV2jXADTX2kdXgF",
  "key16": "2WH28mCcLa9S5hNi5jWPoV5e45GdWb7AnADMXfysVyH3D46F9ShjSnJHNMMAENjnyGsxuuFszeBNNbRPfiRyJeHG",
  "key17": "9D9dKZYbMTBR7kgc6T2frCyq998pCugvviUk6ZAVm9aDgDnNBxFAmoHStY4QYS55U1jMgi7xjmEBhPzjVvCnNT4",
  "key18": "43mcfVFCK8a1teT3dgEKGQGhXmBmpcvCPTFvfgDJ84ELZ56LvnMBdksDtvxxzgYyTXQS3YorfJaRwV8fhQZh2EbX",
  "key19": "578Eq6XLKyTPiYH3Qy8WsF84FtXJmovkZGpsQjKrN2cjxLxkR8y9Zi2CVWKMHtC4C91cVAT9xgQLiAcGvqYmDau9",
  "key20": "3avTfMihGQwsqYtJB28CBfbR1bCWycgBk5GLm1b5jcWJjCUEYFP7F9RXPNhxEABjsMxeM1GTYPxHHA7i1cBnAnKs",
  "key21": "5SAJtSsdP4dK3CaQa1ZxicoGqrsdpeSLfEjHpnzTsE1NDG1FWNzQP9X95fJGsozL4doaYnFgiCXEhkm2tpadbRJC",
  "key22": "ZBsVJVLDkVYps2RNp7sjwz4gX81Ltdba4P7Nd7Qc4hrrPkL9uDsSSJwuGzgX8dyB4aCubDB6SsQ1h7vXxbxxNeL",
  "key23": "4F5BBJZwwvRiVH4o9qnTHz4TQ2MuWS2pXTTYxfyXkHBnMgwX7Dp4GzzgcB74tLYLXf5nzLDoEU1dadoKebRZz1WS",
  "key24": "3PE1GpLZo8iQEB1wqAYtcQETnA9fqAEsbUSnAfJFCiFPPZMUkkEb6oiRzkySNXaHyMHsUqFzzPYGQX92iPPyMj2v",
  "key25": "36pCBiUYNDjei931Sd9N38GCkYbMv1HBMLy7nxTQsKgbeSC5PSg99Byh6KxZGXMZUw6obeC5zorNGhXHNpFurEt7"
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
