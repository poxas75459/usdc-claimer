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
    "2XbD7NhKmVATHNwvX6PgzmW9uSevnjbVBUfxMqjeqirmbyHhbr1GYc5BYUbAqULhTZu58zMHwrg74G4SYYgVdNdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uNsmVhLogjGZQaAXGDgg85wnp2KVTSBvzD22LX6jhhexyHvBF6ofAFB6ADE4U9Z4fHiEYAB77Ef3DxN3AzuYPCb",
  "key1": "5tM3hNBvV9M66JaX51LGTQjvoo4PR1CP8jos4Y4THTaeYEkENbBm5f9rKrujUo1WroNub5jANzGAFiUw1YitibVW",
  "key2": "3Fwen1FYdJmLAG9giKaaLFQ47jw3iWcMGebLJ8XMtGXeCpakF7duqF8LAYeYPjiD4mFodSVsPVswC6KvUfhrckqT",
  "key3": "2uQ1JLPxAxVtV5yLSk4Nib5NXKaHykqFSmiQQDgHC11wz5ECFCVdJKPAZ56oXxPQgSbcYxGAg2ixkgM6gMqDwFp8",
  "key4": "4HnFyJvP14DpxS5uQ59qbXSdMTtTu6HtFdHcw1KznskyCeqrfsPnhJv5vkLGdDbWWJX4zsEzRxJRP5ZzLMHz8gvq",
  "key5": "4v5guDK1YhDUi81vu352F1zrD2RmhoPkHkvitevQS91UjnVmtuH6sGereJFMsaKGc71MWMMbkxuFexHzrEHrqzy",
  "key6": "5xEdUyC4FJW7xA7bY2UJttpWJPrW18uewGvAzqwLkfXCGUGq1q8GxneJTD4CYSqu2ZLH6mVVGDz6sgfHDwmJco7m",
  "key7": "5enAgvnCX9bUr9x8QdGqfFJ4kdtVRViabbxLgivJjVGApfr12e3QRHGRvJMWrgPg6jjAij7Vz12WPB4xvU3T9EqJ",
  "key8": "5VsiRLJQMzDED18tUHaqE1fPG8KLhGZkQmvvQ2GHTYjsRpGPNNMopVD7VAviwtY5QPKRyvN8L53kcHDygDnv1WxZ",
  "key9": "5aopL47d7hnRTXQGQCRbvJz7MSncrvWpKtUjm3NgdwyYfUe3bGZgGB3eVNmh5H2shd7ist6LeZy42xRnT9DQ9Z7q",
  "key10": "5bgnmgSuCDDKauYeNgYT6iSvqLjF7upSacV5NPQNjfueWAumRBdERK956PXSe964R2yXz8RjskcZxathb9cp5P2n",
  "key11": "4tY1QhzbLUzteHgFqU9qDQ3PvYjC4QcfKQrVmpEus96jAS5ggguR41XHEoyTkK8JQHiR6co9b5toSvF69yxi35os",
  "key12": "3EhmMde5mUtLptZQpNiy4xhk6egA7sEvjbSa6z3xVR7abcKKMWk9ERjATteqDKF15DnwbSyJ75ia9iNXGMd3xf6Q",
  "key13": "p8rC9Vnerksish3Sn3RY8HvU9WBRAoq3N99PjSVeUYZGMhDqhmWPPiFMVvJWDJYR17wrmeht7PHdgMNK1qD3B8f",
  "key14": "4A8R5YZx5P5SEfxkCGwnwD55xAcqXmq733jk5pzhHaYsB8W5fi4BPaHZpvEzRa1uFSQWuwjFSC5VfARejRSZas8B",
  "key15": "66u3vW3HEDph73VgNirgFn3aNbxzYcksJuRMBn1iP3C8iPhdJ91WUwuWCz1c6GQXMBoEDesSmLv5sE2A5NpmiX3e",
  "key16": "4tN1D6P2WoKiwzhVuVmCCXAiLh25cS4qxD5z7o2gPxeYTJ9w3bSKEXCWLhZFmytW8T3iajTVFci5sT4iuGpzaxe6",
  "key17": "32X1AgyADNEdoqjx7gJ2hDrxVFQTih91noZD9vkTHy7hU7oFu2yLdNTfDLYa5RXLKam4wXJQmpESx8E26pcp1W12",
  "key18": "47ekgA8JZjXfTq4cYjNScdndm1F1fEpFoghNiPhSUkHJkNxxtmRLc94xQ2iPNh7kcctyBrq9buX5fjs5RqWhbXud",
  "key19": "MswPTJNJxfHBaohCaLHH8nKyq14R1BMhNMEUceHkLQmxftMG4RjDqpyE3y9eLtxRikckMpcrDTgdqLixQ7taeXX",
  "key20": "4kBqcgt7viLGkH6mSXsvZ7wPFKDgsWaAMDAPEMVqnq738ugtqwEvfxFZiFWH4i3ZVwfF9u6iRUfBNPWTMBJNhdrf",
  "key21": "5jDsYJpdeySQbiaMHs35NwcB2pUBkynLnbArLSbfDJfrfYb5mmG2ZstU7Zm3EPW4yTqdkwmMrP8h8MVnjhoVu4eE",
  "key22": "gdGcyZF6hpxTmbNYbg3vwMG9RVZNVTTgWLRFBm2JtCsbGZBgMKxTrCw6rdJfWwv2rXAPBz3zfgS1opT1kF2yUrE",
  "key23": "3RLDvsAMi47WHf3JwfrgRY4vpqfyLennBQE7pQP99hY98bxnk92mB9pYngrQk6rnMmfKEEH8ETsomYAH5g4fLxhF",
  "key24": "59hi8Maa92LE2PHmkUGvg3SMf3i26dSxbKsHTmrAdJQSAQrsKMqDbRdWFvmuVNjaXKSUW1u5zW4x7eKkFhwLY1gu",
  "key25": "3a5rNvhtU6QB86pQwz2y4f8TK8nvhbdCxwvTjRxxU8qMma2MzSAnAuWTvArn6zRTzSTKNG3UV2NSpFy3Hox28bQH",
  "key26": "5z45NT6c2r4Ue2KHbgRyXgLpVfKs3WcpAUTj9s4tqB6eyYUkGij32txGih8t4y4SUCSuZuT9KsvZtnQZTAzcNR5W",
  "key27": "2nySptEPA8G3fzGKwofYwvHwaeZTvGkvaM1ijZFjer8uMEpQhwMPQvBFhfMTHqgCU9e1V33SCAcGmEg3wjJ5YmUa",
  "key28": "49EJdax8RQabyQuYtU5gMqVp8Vg4cCgeT321ME4FuLAguAAAkBTUirByXgpxXvaMjiMNotaaorebXwNajfMojjjm",
  "key29": "4bTjo64mFnkCJ2cJjjFER2TTfc1xJgyrVQXMmzgXYDdxKjwtfbJz3e8DgLJ5Ejx7WCbe3upYnVxeiaA3he9ab2rv",
  "key30": "5trG7PnxtdWDfWxtAv5nJLxinJHLQSRqAdyam7a9XHEzr2tMNHnZsauFUzd8sGT96THafZnghwotrJM4nVQagVFX",
  "key31": "4UoweEnY3pRr3ohcaPGwYZ6R47xhsQhBQpbTTB2bDFZzqzXhqLmVxmPN6JycooG4jFbXz8SuZRy5kLngDcWvPAxa",
  "key32": "2V4GT49EhFibjMFPJ21fd3dyzoN9okFF7c3RVitKpc4WbUAuDDN9qTgNh228FyieYDjLwVTxeTaibKPGPbinGBBx",
  "key33": "5KPc8kQJoZNvaY6UmwTmR3zWoTtNgVstQdVwTbLWXwjTXcYYDrkoRbWunX816hRogpfLzZPYrC57T2XX3wLZh1ZP",
  "key34": "quL4E5TbVrcGQXtAsndCZkyH4UDSXB3yxzSHGTnRb3X2JT7dmYycRDMsAh8UDGLVezfPyYW9Jbj2rLt3v8ZLuc1",
  "key35": "64Xkn4SnhaHkYAiHa8X1sZhywg5UGiy6KcABRj9WZkNsps6LpQJuQnB6qZtenQSJgdB9S1g6uDooY5mSKv6mcS2C"
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
