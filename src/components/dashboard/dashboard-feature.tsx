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
    "4B3J45vfDyUnnFfrEaeJ672x62NjiB3toY3ABbX8bByRvbCqQzEowk4Nf5sAPQJVzqYCGfpQ9qLfpTe459AMWYvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A2dQhK9wuDLLyU4YQfWrZycBq4SkmHFMoHhzuf9oLqdsq73sPJrx5aFnLuRiqzeHST5TQqR1SPUdungY4CDNPDL",
  "key1": "3W8B9xHk92DsmzbYvTCcHRxpTEj5ah2qGB5Kw4HhuaFskiH2YXN1kapWULofE7WX3o1A1z4V9FDsRGGbFBayMhQY",
  "key2": "4n3aCjv4W6vWgDoeUg2pbmQFthnzJoHCmACsDHfaSneTFDY7bAewGiBQUowfUqZ5nHWmtqJFGRPJZyYsYSF6pEMX",
  "key3": "43U6mjGkSy4ZK7K9dY3KGhQBYeJpHqXtQhvxpt9Vw8QCAWXkWJ6jZsKsPefxmWZ482mjc5PXjcWZDjBYWLTwDsH",
  "key4": "4Qgt8tGmaJNdgNqNVUamrN5GCuFUvZBVgQLzjRnndPRrHNTmM3gzfrVprsh9Fy8bLKjEGBozAgmvW4aPG5wQx5Ao",
  "key5": "558kqVDDrikEzjLx8vHk2VZWqEf13U57f3fBzotZ9X5ucoYf3ypjU97MfhBiUv8Kpu2M3pazK6ExPemNYLrVJSJK",
  "key6": "5dPC8WV3aaKGAj1syEubuAL952PAVv1ndVC9MoBLLHQQgMf6iwePQxggWdMxKioAndtuFN8feAqYtuneQeUR9rR4",
  "key7": "5Gr9ACRTgirFLfKENdQiwBYnePGHRRmU87aJFg5xXsJsVmVXCzjYzbYPbRro4TtN5Erv2ZdUA6vZYbRjVmzpVa2Z",
  "key8": "4HhvFRgyM6XCrG2X7yygot3ecDzotCX2VMHERfyQBGNCLHKucXMqEeDbVsDbB4Lvy75wXnZz9QZUQp7hg3kc3m1Q",
  "key9": "4eTkhUF1gAAi3mqnLYUTuQbcUxdU2sqJvtK57QCbiM7nezcB28k5WbA3Di7GadWSK2PNdgdFEoh5xZkYfzSETt8F",
  "key10": "5XR4t93Goy8ouaezMiwtRjF2LTRZg83vqFemb2yJ2DThy3MuQkkmC3aFkMxHi5TzmjEScHcAQZAa35XbJE7gGwBo",
  "key11": "3CHcEh8bFPn5nmRC2x8byuDiGT5kTfkA1xip2i7zdyLqjTJaiEdTZMzyCaqrbBnrjGFXRFRdDup4AwybNgb7saSM",
  "key12": "2NqMeASu4NPCc4fXwPi4CYXCHHTjDSf7eQMFEXmSENWgqkfTqhKbXB6Nwegj8pqWVTnuoejtnPFXxaUjZtwwT9eX",
  "key13": "kS1jbgvTDQ18eFP5UtuKC85WyCd582XzYQP2GjMQkHM1bLjZWDgjKXxge5U6a6prRQoLaUkUC2FFWdV9HCC9bef",
  "key14": "4VoB3gjE6y9YkuXAH6vkxXv8iuhQFXGahbYgfnVbi9uSoAbNQ6Kux7iaoXTyt89R8yEnJoaqGWWsnwrLSum3pmZZ",
  "key15": "3nsj1uTZ5SKaZHboQBWsU6s3YjDUDp42p6rLMCYc5ayHcsBfY7P6WcDj7zTGJg7p66GSyckpZraHwjpxREFKg59q",
  "key16": "5PpWbaEKHDPyMma9ZvBTSJE9GDTo7bwAdtxQdmWgJ6ZM3MdTV9Xozvxm3A2oXK9PRmv7XgbdPpbTMQtMyi5mMGvQ",
  "key17": "2Ag5asgKqyj1D1gY8XMnNuVsXegxZdPzhSgKfNnQCbTLmT74wfYMBaoNqsfWy6qhFnShyVUZC6A3f7iXwoxMWXm9",
  "key18": "3syJfqHvQbYpFVRJsGMNj22uD5e8tHutYotHix6qgEUyTxasb7ojVVow65e1QHu86V7FWjbUVx6izgpbrsf88Uk5",
  "key19": "28y5dxVLc62NKy8EjjkZFZAQHVC1osrgeXSMyDeLUeSRz3Sx9j4YZUiesSq8JYVXwUZj6Z5xoScyQ3Qdz74eEyqn",
  "key20": "569miu54kZRniGFFU96jTRTP8pY6n97c4Y5hmap7UxWmDJESBi7CSS5KaEQmcRV3zV7o99QGqCn11ykpCmQPjsjK",
  "key21": "5nYnCUoedurfyTa6SfNE3pyckju4QJa3UcTWyTME6KCMgo7BpmR26irJWEXyCMpNqpbJaJrMU8LrHjBNfH1AffM1",
  "key22": "3t5iWe1BReCvSasfkqkYMfJTPRkkis6S9ozuH4A5DWpAHU8xbRVPZAA5UTDv37Av1QAR1WgFy5S2NJJQZLBPoJor",
  "key23": "3NBn1soaCJzrX2jQ6aQcJpBPQCWzSFqZqpD1coDet46YJK4MFA9228hbwdJ7UpAAkNW1MizYCH22kKMPZ7ZZsVaC",
  "key24": "376ZKxduvF8MptduxayvnnAhsJzw3bGF8JFTY5iHhP65X6gsTmaVzfXsXYF5YGGdaSEVD8Y46quotPHqpqmFPKMY",
  "key25": "2qPgv6x5wh4tGw7fLPa9w9deznS2WpCavALfLEGiiJird5kGchHBWky7VvKRCuQA3oAHdMHscbTZwTrvBdfjHNT3"
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
