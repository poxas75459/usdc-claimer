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
    "2PMz8qJraWwRoaKoUSxVzMgberqc4yXjrP3N7kEMvA2JxT4twmerMTw65WJPtxhT9uSpLabp5PGoWPAUe7fgNuSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xigLUCWhfwjZdpgLaxUkDnqhtapwtCVrTAk5yx2erErWmTeq7Jw5MM3UDoKLyJceD78fvJLC8hFfFVGVB1EeCbh",
  "key1": "4MYPugQRfMbyUyinKRw63mFyS4FZbshWNujVbZZDpeE9sgNSNhQfpALyPXhHkq8g7g28G6GfyzX2exMZS68cQHLJ",
  "key2": "4J6ekgSnUGmycQTABQaZfytuoQfKMsbaWYcDhgyvH8C5FGDK3T9xkQDCCrAks1g3uyxpirns2SpsPJKQocy2BTa8",
  "key3": "4aXy39EsDXwjimGJJmVUHKUNvDLFEEfruXBYHJQ2NCRZ7yvqpMh9wBSEFmZJTnbTwC9ByyA4JaGTLhDJDHZEEhTv",
  "key4": "2yj5AemG6kHzauJsNUC873E8cr6atDXZ2PwHPgH2vqAjBwB1XFweAXVcHrqnXa3WwdDGbYzWDCbSYHWS4WdieLkE",
  "key5": "2717c2XMNDxhPdL5t8cg1r3C4QybqnNh5iS6UQHhZRkot8doRQKeTv3RoTJMCruxMY6KHXRmPyUhjdDDCjJSitPS",
  "key6": "5cKTyFaYcsUTRz3Lyfm56gc1Q7bSb2ahxoY3RuE4Jt7md8kb9yVjgnfwSVxEpt1foy4XUZQ44fzhaWoUhR83Nfgq",
  "key7": "4g5Auyf5pRswfdp82WTUx5Yvmcj62cZCsEbAzZ76vizooRJF96AntaqQJDKddAkviLi4v1P1RXjwaSXmW3HMNCQG",
  "key8": "5ts3k3WKpnotaY28CJKXuSTqA3KE2NVjaex95D2JYeZcK3VAgAyeLBucfkFTY4mAasAcZpwCsyiP2ADyHcecy5PV",
  "key9": "4PMzpHWCDbZcpNLcMPFG3h3GvgyDKEWZQ1PLZFa3yWmXmRzKo6yU38BKgP6hmhiva6abb5cQ2Y86G28KUC2XmKXA",
  "key10": "2dFTT9vj1nP3Zj6Yxvmz5jEokuHe6mXJmCre43hDfJfCmAnwCqp2qZ3q5CdkjeVQ9zNyEkGh6MHsgaGJK5Q8EUXf",
  "key11": "3iFWmDbBeV5XQmTm5aywa2kGDNTdr8Acv9ZLTjTC9DQaEwv5w2SrYy4oqrA7AN1uq5rLT3wSsLEAtd4jnS1pzADW",
  "key12": "3REcEHPEnckz1i1ppTUN5Wh3HTgXm3qRNvfFvXtSBZjaLgMRg5jmt9bG1L11niuCHy5FndWNYkDzkw4GXVJ57ATY",
  "key13": "66BkqwuDje36cQzD8MyDxhANFNQjYT6LPY1zLXSUTeYaFgF4i69KUucaJ51avGPzynoGsGeBN1q9HkViMCwKVLLw",
  "key14": "3wN7EFUSjvuvR6pFbyFFsbX3BCyLUdbRzFkpKfRiVXCQPXgmbDNyx8BdZWQKgqnkBbE8DcjKiNddbRcmc37V9RtA",
  "key15": "txKLMKWTqFkUh7CH7nZvdXijfbwb23RmkEEceiyWGQLYhqASU3Qd2WUbYvCfzmfBStA8aCPCmwDSD7W8UMftBzG",
  "key16": "488FPuBSei7MRVweYBRDeZoGnBWaWFXmXAL9sBpbb6iJG4L1pvRS9k63s5nXnNuv3hEwgsKsL7eey4ZKFLMFyTk8",
  "key17": "3ZsR8bgpfu6Xweq49TcY98J2xai3WF6u7pLBjx7nR8AjyN5H8oMk2PaQ1xcRAQ2W1ZoKGfuKJvAa7vkBqZ4Z77R9",
  "key18": "2PTuVjghhwLXEWeWYvq6NncB1Ft9YTrmiUZTasvWPNqBj35YyAACC5zU7CdzAHvmfiQ1sUHDxyAeAmvXLBUMJ3E9",
  "key19": "4wpa639vMMynF8EBKxenMJMwCdCjZeucGLPDiJ2NMob86DbBQShSLsDXYZ96niDhrS8ymnW1GXGasv537DsagSdW",
  "key20": "3Uj2vwcHyKktxz1gQpF2X8Bp72frfq17CSpa15tLDMTLrXhiRS7AW8Ad8v1ZGVcFqHbnB9XHhuFawEFT4tCZdAt2",
  "key21": "BqjdmrUUBWgNCFWyWTTGdqpii98mxh2E9mz38G3k1PVtAmRFtuAMbYN6gPyTewqEBkmgsMRaiEca3RndDtjiMqt",
  "key22": "UcqLt1X6P9ehR7PxJom1uEc44RYZKHHUPfX1VYQscRSGFWXEta6wz9qR1bE5q51cojRtosCLEc33rCH7cKG4iUq",
  "key23": "5okr5M9oiE7BLJUdYQLDWoKooetw4aa84qENQJwx2bWYmEAqfJMMhfLriBMsNpbJGtGj2kpNF27cYKqxgp5akgTA",
  "key24": "3o4Pjkpbv84AeZaJYYZjTb5pm4y248En2aC1XQ2vc6rNekqsP2yv4kWzH2y5CQripN5eXHKRNFgj5LQ4GhPdFdJe",
  "key25": "2d5BBzoPV3yJpkfVmXE3xWrXBafYvK2wCFYQ4urZCfp6P1zpPF8fJB6pb1PQKjcVnH8SDLyf5Nt5ZyYkEJ9aMdfP",
  "key26": "2oYcH9rQ7R5EwQiHGAy4C4fWx7HifJzKwsGtPAdNM12mL63Z3uLArpiNmwitVYS3ck1vnxr8r1sjenU1WXRVqHCd"
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
