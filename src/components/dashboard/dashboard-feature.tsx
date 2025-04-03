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
    "5aU5ZzGZf2NmQ5PRdm7qZZ6zQQhV7kLWiPfHwSsRTu6igWv4FoFtaZfbNKhcBYiHjR8bEoGwU6amNNqjMHfhebgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o95muc41noVHL7R9z9CsU2GkzsfEBDwgoejBozHiN4UFcD81Wvg4AwLFJu1RuCLkXV6K2QGEEhVPxbLUdBvAnXF",
  "key1": "5SQAF1D1d92UcBWYdrNnax9W5Hmm6pRvVsWbiFNAAgZfhn1LgAk8agXhREx6PLNfY2uh5GhaYLBVsr5bFpG6fkyg",
  "key2": "3j1ViXucqxNbT9ri8izMdENc3pdUJav4k81A9PDHiq7zc1ZsEZJnUHQWhjb8Sze4i34Nbp7Qe3B6H3wNied4Uduh",
  "key3": "5NRAYR2yUP9tEDP42ynQs1b6uraf235QvzvCsGNT4AQSaStD76sPf9EXiq8Aar8uTDfQvYHy9Y6YzoqU1LQ1zCYC",
  "key4": "2AsCz6oMJUBDjmksAzTHWD5Nr4up78CcmVaYtLdt3QnHC4f3VJuZeUn5CPfzYicm5QiCZB7ssb9LBuFLchdPVVqE",
  "key5": "5765JYTsq4SrpgA9Pu3xErL1Cyqm6et9FWQzuy9mqPLuNAN7G9FPV9ya3san1JdVon26ydHESFsCEZgs5s3RHHt6",
  "key6": "3M15f7PgeYWN2XdkA9VyerY3Ejnnejvh2t6yMQhDV5tZYJP273NGwZHSbfqKCcRyfMREyerMCNrJ7CmJgxC64KvR",
  "key7": "3NwhJYmPrBZcQTu2p8EDa6qjBi1vpuD8mBt2Zqwjre9hP9tavLxTqp1PMMTBuYjVYp5UcgMzUcdyi21A7JV9J5kn",
  "key8": "5c9cjb2zFfzKTcxST92jvAJ4sFXHbRuNNd4xU8qUE5w9NTjpS8EmSgk7UWKgKTXXLbBGwLFn8fJgXb5ENFBUj6Gy",
  "key9": "49vHiu6G9mHLQdZ12h8RwHGM4KuQfv3hQWp9sW2FxzBxEYb3riZ5uXtRrhibH1mgbmzxHb7bECy1nXnppvXMriUB",
  "key10": "kDjT5WLDQnn8cZ56Dx3ANG7VgmEc5ivtjhkHdBu4dVtMK28y6axHj6temAf48AqC11Qu8WtDghFpWhayYY7jtcB",
  "key11": "5ZAGY7rXjSKcir3Pg8FkRcnGME63gpQTJ1VKqAMsC8ecAATEFDxHsLgJPkdKT4pKdBrF1iDA8ACU7P3oujC1jh9X",
  "key12": "3xsry8FKYK6w59P3xoHu5mJzDDgLaT8G2GH9Zzv2MRySeF4LMZUkar6hQ8TKHGrVnp38hjYav7QEF1Fsmqv1MfxD",
  "key13": "5viZi1Nmso4qizCKSf9TqtBVrCRHQRfYtjUzDCVqprbHWxyigQr7QQtD2d1LXCbZFABFqdrBrfcbCrF5TSjzX2eN",
  "key14": "65zvVaxFGLhJytTNV9xsbWBifzyCE4GXqgnP3vR7ezh7hCLdBt2C1o5X7fRiHN7rPajoTqTkiHFt7gjNkh8Yztvs",
  "key15": "ixG1J6Cz89gncnL3vGj6P5TSyFy35djXFESpca2pBD8fPenc8P8G9jJgq1feLHygMgkK7cbW6zY3vFB3M7N5DhQ",
  "key16": "2iW8XJ5LKh5fwxSEJwUW83K6oSeC4ie6n5wcpPQ7dfRwPdhMkDkK6PK9QM7mxTCu9KiCXAnparwPGtUVFRM8mEAN",
  "key17": "4fYFongeqc7fEyGQfxTaxvGznHMxAedLBfFYiR94hy5wR2AkNRxBqdbbfViTAQmvJWxH85WJPxQbMwYzPbFvaE9n",
  "key18": "4cgdcDT55Gwpdw8HStwEepUHqLQZEif1qpce4seb6om6yth6SbU3PWGyvpHD3oY4nVEwQootMrHiqTK2piUQk8Q9",
  "key19": "q1xuCZFG7CYNxz3ui3QxDh4zmgxRDTpqgjNRFt3zV8cmwRgaZ2mo6eny1en4uXj8s6Lh7jUhCxXcLHJXK87eRCD",
  "key20": "4gey5nWc12SUfEdAJKFzHcLoKMfAiKxWmJQDWkaGmJfvAhQQayxWpoTezVi6vxw48vq5tbPxztSqjef7ZbamL38H",
  "key21": "4BuxohAgfWBujuXArYu4XJT7PfkMT6H1h8goegLYKijhXFb34ZtDwLKdSMvpUifmWfcpnyUjLiEkb8yhtiaJVu5X",
  "key22": "SkGaBaGfs4u2VbDwGr3M23F6gQAXFybi5RhpBSe1AADHfEiPzD53yySwVSCHXXqyrQQCtmyRJQEotgc8BifSELu",
  "key23": "2BTAAhQbBHcQ4AMhVc2vu5c8mjauPnEojJmUCYYJ8ng6rWBjKjZSCzqV1awTjHzEY2hPjUfcECePduCw5rka9a6c",
  "key24": "3STZEyYDbC3AUkgaNW3Px63XAaVgHQ6rtp2N6WXkAGTKSAoPThsbUMbHXhk7XHweyX444Pu2zehq6HYofD5XGQMT",
  "key25": "4WAR1jWJRq7vvxsBcXdhQFAaDLnKCLK4xbRRNPWboPcb866ScNcC14etMR4R7wBLQoHd5ZXFoqAAe67CbwURSsmT",
  "key26": "2Q4owRadiPfCEacQkcgmRdtvCoqYYrGvcDWfeMKHEjx41zMTNVL2s7BjJWiTKikNLuC2LF8zPddWVR1c9Bu6BLuZ",
  "key27": "sisATZto3bw3LyqzKoC8P3SFhPj6tEtgoz1bPQpFitirUDYgHNXxDjQbVgpkkffCef38Mahpqqpjesmr7eWHhMR"
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
