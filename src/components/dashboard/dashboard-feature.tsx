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
    "46f62hvBcQM9sHigfYWwvjerBUuuZJ7sYgrTjULgpGTsFQee4vVkrGwq6Uu8wpiPLRLkLWDyn3XxqtJ8i57BBLnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3auerhsnP1iTFzAA9kiH97tzTc5eNxQeQHXFVKGuWUVyempwFXTFG3Nn576SoCZ5LfskzxFWVWh7Su1eanGDnen3",
  "key1": "28raMM41ptXeJvcEJ2RTXwfD9u3tm3nHNahGYXv5ETvTaw5t2Xhqt1yLJyS39nH5etNTYVuSXMYuctXg8wFGK5XS",
  "key2": "2p7trCrNe3WFuvQYbqfzavZm2auFVZpWUpB7nzaTvkya3KVgh4jpJ82tNH1VJEUXM5cLYgh1fzGNsSjDibUxdHpx",
  "key3": "3WjzfLq3zC7uLD55LJd6xhFJJ83FA9Z2vCEzomnaptoQdC3gW5CQRVUXePK9BNowjdrRJwtW3GhHNRCx7SUxttaw",
  "key4": "ye63cUhctnqjzJHtHxTWU69Z4ifWW32mm8gswJjWEmwgej3q6YZbvCSwfc6GrcCp73S5LZdweHUhR6q3z8HNAan",
  "key5": "2Xkz9Ta4cFLtjX67CGjXaEBFR5bpaoDpiUDCnoMDypQqT9Uo3mWxDZHAjTLictYXxyQfDK2zWpyRBiUvCjAZzBw9",
  "key6": "4gJfEWKyrYuML1VDRuNUaWGH2TE9gTjLQQn3y8fEhezuU7k4UcWPDu1vJntBTd7iffnmWMVFZmyBDbdZwdiPnREG",
  "key7": "4hCWz4PobaDz5ncnyCNUsAWBU3DQEUz6cjf3BaHTQyfqi4yZ9sNbNsVfsZykBB19LTecB1N4wELV7pJCHkimTTrH",
  "key8": "39yDZjH5QCfKaAcJX7aJy1YECoXjPfjA8njas76z4ykxjiyFVz3k8L5ng3BfHShzUbEizB3AXJxhjNdD3pqUEHvx",
  "key9": "5mGkaeJF14RzVFt1JKtRR59Sxq7gaX6tTyFuaW2ShyzmWp3Mvhr7J4r5afJgacP9Jc3gimYGikcgUyQSG45r9JCQ",
  "key10": "E5vSmZGR8QjR9gJrNdkvnkhtXZC28AK83GbqoENoudzQivguEHiWrSVJ7avs29vHErDoA9NhGGW3kb99jLe54ct",
  "key11": "2fCo3q6rCiprWwzDNbuyuQ62yn2mW3V44fgUXgMbjaRdfErArGxPFDaFWLQ1KB5BtviRG5AaQM11vEPbPXqWM4ep",
  "key12": "45taemdRWmYhkev1BUgPHbcJv7rJdwHiuXKtHb1xFQzZDQ4NRCSremzPQboXCwWp9X5s3bwqBxU8jHqUbdBwatxG",
  "key13": "2ZgL899JkEtXKURyJHKYJjx8XTVLR7UJeWEPXYUNug7XWxoUbxTXp1sS7hWKBfnKtVodqwXKtw1w9tKQfzpv26xN",
  "key14": "2tKAMcfNKTjr7hK8yBWJdGXSs5pwt3hZyN96CZebdZBBojPWquiGR5ouKSWnu6zEDRcAzzuqm7Y8ESZzK9Rej6uY",
  "key15": "2pLM5B9Th5JR49g8o2CyT66dirW2F4RWKRNbcnQWjQK9jrEaGK8FfPb8xYvnH1RENwXwbrH69333aXCPwhLUHbFz",
  "key16": "5aCF3ktDZoVq1HZ6LjLCVebs8JrXBJhKtKS7kTcqi88gdiGNT9FNnoxBrW1ddmMFXUKz9YkPnFddmGv4w6n6xWF4",
  "key17": "5ocxFMnyB6RtBf3V63kEHBYdLLW98LeXgBhK4vP1EdMdkPmrFzctGjVtD1QhXzAQEPAER1m74dNyBSqXdEyqikKt",
  "key18": "3L44Um3ndtMQp73fXTCgB1zVSPupF15ip6iYeWGWy4Dx95Us219gLEpD6skEZQTGUKW8bY8atZyXQE24opgPskad",
  "key19": "3qAL46EUTd6q3BebGSe9PPDaEwtpvzUbBfvqYTQ6bnwqUipdMXmzQCD4m283VU2UFQzPQ2b6Hf5q8e8bFDviGm9S",
  "key20": "56QKJQMt6BLn8v4EF52EAWMY4rbRst7hbYWXF8hXBg4F4gyzMV2a2N63k4AiEWM7kNqp4w7VciTH4Kmw3F6sfRBm",
  "key21": "4ez7LUN3ekCNmwNdut6Y3yRBXaB4ePTMgkfazA6cC32vuRYApzeoEUoekYQXTBvY7z8jpxpbudBVpdVk7YqtY8ak",
  "key22": "3QX1oxAo6YNpKdxbY5EVy8UWYRg8dwnDLt12HSWJoArFKJ2a7dbBnVjLEDYSpQmLbS1wxqKRyftsS2dFwcmRFmsF",
  "key23": "2Cwh6FJPGzQQdwPwnWjqUvZjVT85wsZSoDvGrL78tvXw3A7n9qfbcPwQ8uCgUan5pB7Bd4v3hMPJJQQYaBUPQx7H",
  "key24": "5kxFYorN7KAXkSVtivxAMhJWM7vw7SEHG1cDZjt5QCdyxYaCGfLNnFP1H8XLmeN5T9JbBmnDn3aQGupQDyarLtnw"
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
