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
    "3oMKhZ5kCAUbAZh4ej9CQ7gpsa94eN7gwzoYYR8mLjM9hNbjoYRSfckAB24rCUxNDc3XKkuLDwk121YLtRRXYVQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ly593u1quPMt51Xx49nziVGjUnr2W2839coXfdJuNi2GFqVfHbg278vZYazdwwAouFusY8ViG4m63sxcyRkiRDd",
  "key1": "2eG9G7F1BgkBb4zMQzhkvFhXwZ7hvNj2tdi9n7rRaVjF2y3Ehww3dzafjHZ6y1uqk5LWoPYTWNGVh221PcNQsLk6",
  "key2": "2K4DuC1kv2N6x5M8S9wde63FyEy1awgghyhHwJvhJV6erakXo6CW8VzMrvYCzrR3BNwyQk5Yre6eoguC5gH2EL79",
  "key3": "5iSYELqb7Ts1v2QMNsP2RzmLT4gcSU7BbPz6HQyKoRN56tp566VPo5kNxDV4zGXwzJR9iB5hMknV5zCYRqSWps4K",
  "key4": "2Cv6uLkoMKx1cBkgKse3iKQhWrYmhve2prSggHPTy6AxJKZKYxikUza52a2D3JwXD92FK1n2nzHwZTaZdTmRQqoN",
  "key5": "5wfJVMknZZYaDBuVWynA5fHfw5Va2vGndnjdGWacg85kydHmmwymmmgeD3raoDPxLRU5ByPLv6gR9NENPnYsLPd7",
  "key6": "5e4T7nbVwHcjtFbgrNW1hSKxMQHsmURhiBWDRrSHHMFUM4JAXfcHgueNtDpDfJqtVMcERshmHszHwYsTzXkQua6L",
  "key7": "2mAHkmieCEc1YxTL66ct3jh11CZUvE68L6d9691Np43So9tGiBb1M9ak8toGr9Rc217wP2aqWr66Z1nhcy74xTa6",
  "key8": "3AbD3uwnTRP8hebiWvaQieTE9Z8vG9R7GtuktcN751EX9E4w5LdfPgauQjA3Vrv1fNxivfVSPCbCU28GaN6UzvZB",
  "key9": "4cKsPhXw5J6SVnKwHbmMgpHYNrtWzHJ5qgJ56WTwh9jwgiWrHpkVdFniMceDbewgwBPHQU5Xku4Z6xw1sMDLXZZf",
  "key10": "36x4EKfvxq5NRvLAuhs1S8iQRc73sCTNNFQfeQgQQcGgQJ16RCkLgSLDCH6G4VYDidSdvnMSX3NAKHVH7qiGmDnF",
  "key11": "Pj2zEfUeoHksqmEbC3AKG4bezoRYHh2ffxataUyby36SxnxiMxQQJnv6ozxB5C7ex4QgCxGURwqgipuCAWX8neq",
  "key12": "2DgmxTawNUWtp5iKW8d39hxTrQZ7uPSY9Ycve8AeHunJ5ewf34bGB95KDoZFMaFZXiMhCeWguy2B6zckVnb4VGfm",
  "key13": "aSGtpxSQERLEg2gt5AwXRjStoFUgzF1CTWcyJHDeUnbVPv4Jnz99TxCs27dghDpSnUAFGF9AVQtY5MM9nmkUdbU",
  "key14": "3RmvVnTUJcqXpVcEqTUdLMfQrSCMW3jQzkuDgubeAtk2sFH3RQP6m2Tn8VNihjyirv6H7hWdd9xzELSrZmWfmBP8",
  "key15": "Cx9HxuLAG6oWUqu26JkXiGYWKNEtHCnMJt5XxHfxjBbQ9kJFBiEtEeH9TEKy6wtBhR3R3XJzeJuiSMMS7izhvsP",
  "key16": "3K3j9vqGdWByG8NDcoivkYcjRzar6AkuuUv1EFhrZDnCa7UEVnjQM5G62qn2e46yTgdqpWUzfxX6QxH2wjWJ84ds",
  "key17": "3U75NqjfLRSDemGjXtqz9QdVCKNsLUsJxUxSaWKzFtD7ev5e9Dkkir37rqoUdb5qYB789T9bDiin3mfHMQYPdz7j",
  "key18": "22B9QfMvmCKjBhNRwekfxW5bTfmmRda3nyxeXRDZSn68c4AKpvNXzkP4fx1y4ybLR3BpNndoQp7Ff3gg2jvuabjJ",
  "key19": "5VZjUoSCRWTBLEexrGwXLQ4HVPG9jEX7YSJWZZ2ggUoopWm1eXvN41nuLPDBMGVYj7oW9tAnwaxHmF8bMTTovai1",
  "key20": "2bPo6hto42J7AHBNnFric1QbmG7ZjKSqguTiSrJLPeqJ7Xu7t139SqFrwedMxPSoK55yytWe2H8uyu34s6GduQPY",
  "key21": "4YqAFNc9E1BHtvigZvX5GCzpT9McC6B3wYdC5eTrCebnkM1rLd8LkphKmgBqBtQkGkHMNspnLTkuRSG39cv8Y6wk",
  "key22": "J5fodZM4PctXzqKGGsGvk18G67boCfPuYBGKrduorMLkL7cAEjQTgvYcNvk9PwYFu7btKp5RV2encCiDM8VvNW7",
  "key23": "28omi6CE3gttBrtTeTkF4QAEidZX52zReS54epbhkAozTJePLDpyW4qwcraKZdQsBcxQw4yQ1YFs7MkN8PfEDU3g",
  "key24": "4yxYVj7TqPBnGTTX7sJmvS5yLStXPGeYg3oBeZGeHV7RXR6V1SzszS3ZtW5q3dAvpUgfQFUtQ6tgMrnNmUg3U6V6",
  "key25": "2TDFXTgzL7UVMGLA6N6CnBPcU7f84HmjBrDNFeaLzL23nJMjme1inDVrJuUuDRi6Zf1FXcja2RFnWvxXrW4KqB1t",
  "key26": "54zAGNxwCTFtjL37YhYnYxRuzmez9rH13e6MCahuRbdTJJx5h7HB8krCbaVpHicd9TsHxVXB4KQetjZ8fbvF28wa",
  "key27": "3FmmHGTcX6w9PotFRFHMnqXaGsdDdMELp11SA6cih6fQDgzV15GVVnYr61Kwsw9nF8GE5TUMhXBsmQ5b1XsKDa4M",
  "key28": "1iLH2oKtAbZ4UPPZR2cigU98zJsJhdq1TGkDCawTc7SZeJrwnDqMMnjkqfP7NJPp3kWTPPeqach76sq2tZ26uV",
  "key29": "64qgRKHK2Am5qD9T2wN5kCqavDW28sZ6kgKucJsMFF4stVasd2urr2AU6SkDBMuWdQEpfiucRtbGGsUkS5G8nYQg",
  "key30": "GN2Dq2paJoLcFPAN9GjrVqyyczGrzrrSdiptv7dX8PFfcYntNzA4EZnJfZVAhVXM53EGUDtUt4V621qVVbR8ipT",
  "key31": "4u43iFqWvviFkgX2PXRCa3yXpxHykqQ7nYbihXCmPvdWBfJMpF5zBXi1vQKvi9zLPAhKNjLx2i7DLfj6L978T1C6",
  "key32": "NBp7kR9sPgqgsmhLmd2Xhk6bE6ZGnuA41mjTrQcCdQaEkX86KdaFJ5kfmmKmc7TSWn1KQBJxhWC1K3N5xiXnV5E",
  "key33": "4R4avZ9M4SvMtPaKBhh8STHV4XfD7G6WrtBHTR11tZNRjvywRDchDeNQPSoQyzZQo24Bv5ZfWkmoHnsXM1jpbbMi",
  "key34": "5AqmQULAQmkDY8CbbxYbZ4oYoFqZ73miUumEtGjpFcz5XoZ7E1wJsmbvit3p2YUd11sHYUdWbGAtZ6SETBxdcCZ1",
  "key35": "3Y6vhVqE1gohyUGp3iQ8WtuRFHACRUgXaHKUa67P6UPgLxxayni1foPY8ciVK5MX3mwZyUTbGHZXqzgnXpicVSoG"
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
