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
    "3UcSc9rcjxRTjLMG8xzAasHr9k7NibS1y4qLR7K5ysXQrGf2sHxtsgkuPxjqbxDvTzvzT9kuNQoTkzb6zTviZfqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ePwXuPm3ckyEGuLqbb7krpTHFZ4AE3LNauabpQEorBQ7hmHdtv3N2R19mXvCtGkxSGVAbHs95p7hscfGw9Mr8VB",
  "key1": "5YtY3A4nFgqhRNCyWrR6HPDJhw9mH9MKkcX9MHotTpTKh18GwxUpL6d8kYaGrbv5kUMp8EQJAyRpSmQ3P4zhRd3H",
  "key2": "uqH1R2eEWZnJntUAnRVzZLWV9xSJ9WJWf7BbRo3pW9A24LrmPeUqnHpsAzxTnS9X7sPE11ADZU33G9oo5112Csy",
  "key3": "mNhYfPx9wJAxyhAiHEMSAYsmDVzNryztrPpiW9q8NCsfDwyyRpC9EJKbvQGAAx7MgQe4B4gA6G4qjHL7T4QyoJn",
  "key4": "3vSbpg1AuWyJDrYf7u1yEYxh1WN5pBztRAt2tnjBxpA4VjfTL37bwnsoTUUed2QYrRinCVZoeRt4w2a1XGvafgxp",
  "key5": "4VQATBeZBvajgwexjMYuHJ74zvwcRwpBfeRgt2E5q7W7cR76MhnrZJsSCy5ipmkjVUy1WsWimtH9d9QhppnW1pYU",
  "key6": "4HHFK3hY3BB3qnGN7qrSfrLp7nH6iw3C6Bo7X16MnsQCTVLAnWFsvVbTxpteobknKXMyaLXmHvJCHFAgCuhioiEK",
  "key7": "2fMeHQ1nJpdf3cgqphPhV2z8n5cZp37ojHLCV6XsfKKK3dRpwxQrCZKEs1BHKjzhy3mfqr3QWoTPYv8rinEPtXWZ",
  "key8": "YTqxMMuHdcjFRNkW8jPvj2QrQ8SqSeY3MCGxNZo2W6FsWmbWeMQa7ZixfmRjQfC5pmX6EW6eZtABQp5PkdBgTRS",
  "key9": "5kQtjr4NtHbBQRV5FTBZccBSGvgeDEJRbLxQTMzk12PdhiXzy6xdntCZpES6fbMiDdFbG3Cc3wBzE627TpJzHuTS",
  "key10": "34QkVot6d6WNeaZ1Hv6hvahCugPnffMNRBUVRkisVLusuzxMUmo5W7FxCANQp6bN5qnxuqXtuHkEBDbZfTZtCTWm",
  "key11": "3BZi4ttVwFzGQPtU3ojRjWzBeUpWsHeQdnnVosPGVsTb3jtT2EAJtkqNsu4REtS5fUViCp6bwAgbANRupboukxTR",
  "key12": "3BzYbarZFyeaguu6CQ5a5Ng4Ky5fadhzfv9r8Z9cVQKjq38ULruhY6DuXgQQdbt5k5f61zPrFhZgsB9debbwbSvj",
  "key13": "SmpESaeSp269LVb2ZeS7nQjnyRGo2iQhgAh7sG5GANtWDQ3Bmxiv4kRS4KiWGL51XcznaH8xR6JVYbaidtthCTZ",
  "key14": "56W15iQPJpTjvdQ6u4hAq5QAJxcDZn7839KVE776BZHPPPYMokXLtoWPiCjkjgNhhsdRDRAUcB3dq6miRXaB7VVz",
  "key15": "5gnh7tLyscGmBw5Q6wQZ8cKMxSTwbAvR6wXm4pSitobdR45PKiuHGNfAMX3FFCstpAHSVzJRMFpyBYDfJbd3yWiK",
  "key16": "3xqCH5A1fWA8G98zBn3vgbrCpnyz9oJGSv9eGVoNZQZfbKyubg4nDvAN8fw6SS3kSEUWTBTQdJemxdpwzjr7to6V",
  "key17": "21qaaAz9net3pwt8UepKgHWxoad8HoWmV9tE7nAeB5eWPqu3hZR4FLpUfPQ54TsU8MfuRbVGuhkymPJGaVsdUBBm",
  "key18": "4bB7vRXG56dXG5EVMVfE3QMZ95YXeRGnP31YbyV9x6tvB5Fu6Yf35mw3gFM6xez6Pz8M6itFGNooKRfvzrksbFXT",
  "key19": "57epgEhmBhrNWtZbSuHNXRamaXZTeELNzA1cXcdFoR8z65DNowwyVZifVpuwZ8pKwkRCJD8SCCz7uJVBwBWVpxYy",
  "key20": "5Q2q7miJhNEtSFX5sB84GfS2zomerYETCT31momFWrPGWF3Jz9ChdNAEenW9URZZweTi9L3Atc8UPbRrQEs4aYiy",
  "key21": "2y3evesvjy4WRkXH49T8zkdiaSK4Vd1T4HPf6BQnwS3uJMnC8ofgtBCSek4bqNyEaBpggWhT4vKHfBqCY5ss7sUr",
  "key22": "5ztEUq8J9mpvs9aqSQ64dRGmQPxKz9Ggw18zzu1pJ7ks3DvTFogXhZysm6tTxdcYpNUdAJ1Cj5EaaVYnL2xiMHpt",
  "key23": "bfV6AGmThL3NzcECB29wGdNnrHfHoc2L6adDjEPBBxj7tEm6dueLtZzohQo8eS86oBBgq9KhWcqvgDJFpRRr92H",
  "key24": "5aWUYEWqYnyjgSPHRwXCge9ZjkQroBA4zkoThCXJ4jukpC8pWL8GL1rKezZTStSQCgQD99z2YdbpZxnxoAfAeKjo",
  "key25": "2XKATi1vHQiwqENLH1Z4ANEz2m1DrfmU2vPdUCVJMMdLHw6BXmhhRULoM8gxXazP5aoLDUYs9UtfdE9bPHSY7oeK",
  "key26": "2yvYA1GhUr2DLpViVcpXDCXqFhhfb5q9g8taKkp3QnzxEkLfCZf5xn89PgaEemyAsm7oruNKnXE74MQVYxwepVLr",
  "key27": "5U41CEg68E5jLY6gCthEg6d7nbvadvngGshvXSFqFNNNG4gqCWRmhPid1nV5PGN9tQDTYpQRfWxqdf59JCE2bK1d"
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
