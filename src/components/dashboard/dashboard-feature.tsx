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
    "dMsVVGFCanDfZBezjMNsUEtV8HYry2TtE4qQegmzvhVhtFm7Jh1Yy81bbaTuxF59BmyWvpWSp474DvB67PNrwoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6HLpSuvh3LBgqP9tH9TXmD9Nms38JoWVXmQiwTcL5yrcDdNY2XSw7TwqiR2kDGSEord7Fp7PrNqHZTHUUzKnRuu",
  "key1": "sM64RagCNC3V7bZgXwDzCs9jV6eYDBp4tSpN2wKyLVLUYGg1VVkyXZXp9xs9QpnMGTceDCMkzojnV7Wwpgm4syG",
  "key2": "3EpTsaL9hMZGCBZB8WmnL63G8gAQUYyKUE3oYQ36udGEuZpE2kGf9G9i6e4nASXBScDx9Sx2HZPFnu4eyRkfJ8Ax",
  "key3": "23geuxkD4rnjNLs3U7ZH6p4qKVR4vK5uNAWp357YYGpADf8peWD1rSrGCMkiQJGXaaU7wzfUKcnwxHWFRvKmZpNG",
  "key4": "3WMsqFSL4AbfHWb9HrgYrfy5dffJbztSxzJgmp9t9P71cDG72BVKR5Un6VQ96iJtEYvoPSLi362uxfxFeQDSgZvA",
  "key5": "4V5pEaJiEMgjG66j7wC5rhoA7gRU3ps27NpYjtnGbnocRUBpwAcDf4PiafBFyqEqwiawTXzYWijZoQ69pAsCF6hR",
  "key6": "2k54E3mGLosN8ukxna7WzmSnsxBr7xbgqZqCkNp4gEFvB7u8nuqJfyeVjAifRWViCBW2bah5jTB4Mzf1kWfSdhJX",
  "key7": "56XCcWuepUVqUX2NUoUUCu2K9yKxPtAFWByuKHA9SXKWoJUPVKkcFpMVUo5GTrvL6atTDFRWtF8LgxfKoHjCjL6n",
  "key8": "4qEedDBuc6hSEPdwem219cayc2Le6qEasLirdiGxPaPGTk7BUt7uUVf1SYUifxnU8ZWzia9oF19dKP5sb4YFShKt",
  "key9": "AH1dZANpPdTtuFUbY5r31U4rrjGwAAnyyayjGbEbWehPsF42n12Akoug2QgXNvdM6VkrGc8vfGVytq7U4ZAC1LZ",
  "key10": "Z2ZW1Lz6uaB4XQnwfvWdvrfKt4JwkccVC78YYahHnAi8kDryxit6WzCLJMQTw6djX6tNrrhnGmWwcj59vUkbFYB",
  "key11": "4aLJNFJCPE1FNvuyJxtCatAYt8t7DiMikkaDF2RraRPyTTeVkNPEVGBxE4oeBDhoT9VBKU4bKomd4xEfroPuKgPT",
  "key12": "4UBQzU7onHN4bcpudX8aUqVHY9DZ6KedvxEm2Tnd3by37jcHSNfy8Rhi3kVUEkhMLThJbp9ajoFczrcwV8DxUW35",
  "key13": "2HhFWJU8npbnXTuBAWbqW49zUTwyRWYq496L4P4kiUnrJg3hs31nsx5VGeg8Fz5ix2c5fiLNSsaufmNdQuAM7EDE",
  "key14": "3uidfBw3gkcLpJauA1qGQEqAdU5qJAcfFwcG4y2FKXWcd2mnnZCQvypin73P7qHxJNtTSpeDmQragSCs2C8zE58V",
  "key15": "2CLCY5HVGLcF5CHNwX6F4VrUJfDzYwd5CQ3qUAzPH8qaNgM2XNVkFyVAQhr4njznDamLLrJicvbxFqkJzF8PcQHE",
  "key16": "CQ63RB4kx1BbTSXPzYC18443eUhToJtiMM6V9JLt6CENRFDPLXMDeBjpENjvwzXGKxNG4a8f3nBu4fgb2A3ge4S",
  "key17": "2DMSbjfw2NQ1KGixyFR5uXWaX3xd4M27Ami56QHdfLNJH3nciSvdP7gJu5CoXpYoHvGPQ4ASd73n2GgacwmoU1hr",
  "key18": "5jGN2NWWvgyxdyjXSEuBadAFkx3RCV3t5MJ1V1saVjuhcfMJ7NeWubPJ29yiNqNcayPuSsbSLhtaMWdjRqDNTNG4",
  "key19": "2WnXmMwvy8R7awcFM3zy63EoHKr3vB7fCcpkZR1t4WWaD4AWATr1nRYpLGHf4tnZTwrkrzbLrv1QbPsQhgjDbyEo",
  "key20": "5cKLUYBjpcfJamnx1TbMyzyUAXjXW2yRJLxsX5t5a7KZoq7gzyD9G2AnXEHqS3UCDmoeCAhyGHgcUTrJAKos3wKb",
  "key21": "qqCPN2BHApH61vTkQBgqncWiXrdC8hUaAbG6LqATETktRavTtVQiXxzitRCvgRR7MqqYt8fB4d6GUAfqnMuWaYo",
  "key22": "4TCL8WA99U4xYaTuUn5uKmERJBwLRHYUdva5uqQjsQRYzm6fkmeVkkakP6erwQpr9aHLzBDNQ4oGFrXnG4rM1n1q",
  "key23": "4YbSiQnFTqqvRpvpvEmoXSg4Qj2ikSuxhhSfjvyJX7LPQ79KbWmPsHiSLUpRwSRkzWmMNJnbq89RRVSugxBWAfhH",
  "key24": "47iZNzyricjnniJe5Vv9EYT1fRMjfbM69XTG1TX1XvS1EEF4ZZxaxYRmqxVzNZ6kZUEWyuuT4RYYuE2NSh1LMQpN",
  "key25": "2M6Rvu6g9HfUhSMyTkUVeJa2qXVagC6b22HmMoxXg9W44UYEdJovHxS7D1AKocH2h5PkeWonaEQdUU5PEBKCzH6A"
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
