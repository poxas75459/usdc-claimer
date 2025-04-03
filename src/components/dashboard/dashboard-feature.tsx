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
    "2a1Gj5XiBsJhLvkYT8nJBhk19yH3m1HCq62FFQhZwg8eJWdtpf83gc6yZE1DEMA5SKuuEPu2e4JPf7fgvE6nBjKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B7dDRKHHUBQVmL4N4EnnrDQQtZYJG6AGSPz2dV8B8B38qvpBh41MapxfMP4K18y8ZPjpvC5AWNRwxcqk2dfkPCs",
  "key1": "4gVbSF6YLGToxN1JiPHcmo63VZNLwTWH626MXAhWwH6HnvD6MSqPitanAbW5qpNwR8dLC6BMfi5vhQjJhX3sQmtm",
  "key2": "QhkGPjEDXk7wuXJZR5ct44htXUYxn34Tjp5w2qedtTdK13FBZqRQAXYifQzGxFAhmGwvUqgpyEAaStTssfT6czw",
  "key3": "A2p7QxM1UwQfNQvJ1Hoq59VK2rrtS7v56vJysyTJYwYbYgpjodLLMikzjxM5ktGf2stVVDZBv95MQ8YnLmqwSxw",
  "key4": "4jnZhd6kVJwTAGXUbh877aBBTv5PX7m81BGtuqCxfqKZJZbbvMuxU9JfXFkYj39Xh3BEFakKgESWxpB6cNBqbS3G",
  "key5": "3VJexCSkFP1eTVadkPsmygiGBr1sXgfbRaRYtettg9ccT3WXLsMQhpqfgabZAJ5PuF9eSsMTJParPYF15M3JTC9L",
  "key6": "3ujuVmX268dwBNZN2dxAUxneENnWHbdRFyXMMg4t9Pwds7jrUSHoNQ1WfVpk22K78q6BLLBos1HUS1B6PUKeJduA",
  "key7": "5KbjaTJdZ8GWjWJynN6vSZoGJzRSkGD6SavtEEcRff3wSMU8DqfiAbXkqrCisvkwoddsXAMxm5u5WMBunLd3aMHc",
  "key8": "VijrA3NoDB2GxMgWNafvnAvKnXcgqg4oyJ1qmjLu8z6tjDvzcvXjogjGAxLBNg7DUmyNyuyquHfLGkwgH9U7p47",
  "key9": "57c9J44a3y2hXb4S5rdwLsFf8FxCvSDGpm9pZowd8v1P5r625evuZxTknCceLN3wud2XbqUaMWdMToZrR1FHm7xe",
  "key10": "4pP1tWcFRtPJqdXP65xRLb9ctJ6reeiGLJm6BdCb81K3P9a8jmJKMKni1LfCzv6Thw5nm2KUf4Q1M5BZ7E4AUga7",
  "key11": "2SZvLQYeEbiXj4HGnLTepBsG55vDE91Cd9XJjrBCwaoW3J8QcXnV9B642Lw5eT4MFV7gyJWoh2sGzhhgvc8d7Tee",
  "key12": "D1xdT3WL4mSxNKypBnBbZUcmtJgrjCgSCDJEica4q4pJqUwhopca6cr9xEns4n7G5FcoFovuqAFHKkj1kb6UTwn",
  "key13": "2XMBR79X3itpyezqsFf6ksqWPn9aFiEXhfaw1izdJtzPnFLauSNogXUbvK81nQJq8G3r6WasGXNFuYXR8xWWb5G2",
  "key14": "4S4XcskJDWKhVUxAMptYiYJd1TK5FFgEdRkcnakM83scAoHK9tF2eB6xzUEP6MuAAqYMZmsG9YvSbD7z2xSM4V5T",
  "key15": "29cJAJwWewoUCmEnabUNtjGJvjCN53wmaZzuC76c2TyQr9mr8BGEQJSNkAFnmeqYU5XPPGBaYu1U9D5PE8vHbKtZ",
  "key16": "2PC5Hj2pddrGjuyNRVssc9sp3dzc1TTf3Z4xE9fYjUQHLLJreKGvyLXKtVHQ5ysLxAwYBsLkHBGbV5H4DgX6SSYm",
  "key17": "4XaoQafKpBdzmvhZCqxMVPBvS65nJnNPitAwRHqKAVE7KSp5pd9FJrzmk3jvy8Y9BuCd6iZmEjd1K95yPyv6Q7i2",
  "key18": "xVGHJX2sUHQE6TZteCsWFRbofeSJRtSntuSjhUJvJsr3X1D4krtW6fjSsApXdN4kkjUoX6MmpgWWzAKa3MiYQTC",
  "key19": "25xjoZ2cTBVrrGDLiPrv1MJh7eUNhiKvLxCyCaAyBoupDCbWaJMDJevUZmfKLyeSSiibetczbjoUGft1NVJL1gN7",
  "key20": "27nw1SF4YztP89fVeDJQoA9z4pZXRc2MYuVjYg29tMgN7SJq6TN2mmczRDVc5N8ZcXPyw6yHXUoeS8qkuw9rMoJA",
  "key21": "4YLBQi988SPaALeHeCFdRqzviv6tUdWRLxayYWgscivVAnkc3crRk8v5PgP8sVQMC9ZKBTBYMyJkuxTw7CDaQBJG",
  "key22": "55ZmJp8eG4Yni3U7RAjounW75xutif4vmmy2zVgpuD4NecDKRyR1nHq453bCsqUkqcQPsHC71tBhASMfmoKTdjPK",
  "key23": "35YheFRLUFtEU3YJBRMRsUKgfa99A9VSHwQipuViG3wfFNxTE17byXRG16nC6LMv4F3na5MCbBUvgA4YHW7k5kXn",
  "key24": "59DRsStBPmDmJqJeUQeztUmMwCdSLj6acUoLXAmQUzzdSnQ6PPwLtAVqghhrU5Vxf488RQmu5doWmA8yuUdmcNqX",
  "key25": "2UnYsu2TzPKAyJW6CZdGGbF96M9gSqoeHRsTkm4SziBgkxCJzDkD3ZwNHhGxMdEE3NqQETEvA8ndRL2hB3uZNHMP",
  "key26": "5sfKhzfNo2c5bLxZg8ECr7oDTHCXuJk1C6MQrAn5RVyKHmaMdRzs428gShC9GRya2WPGxyEtLRZwDyMgz1scibyw",
  "key27": "2JdknU1uXBEMSoGRfKGdpC3LMqVKnpBdEbPZVd58Xsggzas7zjjCmhioqih6wYESgKS6HZf418u5c9VUsoXvj3LD",
  "key28": "3rnL63VCKLsFJeVst1J6nnFthYm4YVc8LtxRjfQnZ3UTDY9kW7Kw9ZGmgWAf2T11adk5Chhp11JcjsoE1zuLZumt",
  "key29": "3HTTKt5KydeHSPdFCtZ2iDjczsRvYhU65UgXoKtD58f6pBbjMdHH2Py327HN2EnFrWitfVXkziAucWqxDvy3EjKD",
  "key30": "2F5r9rPnE1g7AvVABonvX15WMXQFkH1MxxeWNYFusucviu81X9HMf9A7bawGgH1LqpTi4jaQqBTei4zsU2qh7AFf",
  "key31": "4YHXyoaWNXiS6XhFowjxeUz5dYsaG5ikZKHbYAPy558EWd2Tc6TuaZTWQL3hBZPTBmY9TTgDdvpiSsA8HYhh7C1f",
  "key32": "3mcBXpFNcb7mLAzGMvbC3eiBJVWRAcdJp6N9dH71VV193EzzZ4FiZVx2da6aAYYePuogjTAQz8AozPCzJ74FdbmR"
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
