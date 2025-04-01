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
    "2mXCCUnFDLvFZBL3jVUc3xvHmL19SRcCYiTKfPFqJJtm2RnTm89szGS7BD3L7fxttrU7CeEmpmBupnyVPKpBMjh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aGaCNfh2dSsesxUh6F9twjm4SucgAGjLHfTUEF5Q29yA7RQuiwn7KAtpDp5wp2wW6jt2DaVZMqxyrj5VYLQ6pe9",
  "key1": "2uVn1RmqvSqGn9j5v3dw4VYqYT6PU9BjQLHchkBVpDPi2VZTRAXwXp2C5vJsGddm44Jxzm3Ca2mYDgMUgZQRvLut",
  "key2": "2RjA4kDbv5FoDTWgJ8DECr4K7VCwvs9EWgwcNxzz7K3bP6BasKKBTNagyf1wCKSi6impk4HuEyc3zPKwXJ4aGw5k",
  "key3": "47GJrsF1HdyS2dtPQJwMs4McL3kHmNf7yQ5HNSwxXHdP4dWXcwUnSwfHf5zNBB2P4DNk3xybk2Nav1rkCYVyMTzE",
  "key4": "3kHuhVjgsWRVeGWt4oHSn3i7Zp5jqA6JBTF929HKWGjUovKjXUqmptrodFH6Lz599z6K2UjHAne1iapPHpdGbqLQ",
  "key5": "W5BQ9BuAWQXE2pwNJpm7hVA1Dd5LfyvkQdq6RVWsecXJvGfbt2tJzrFkiTiFrJe1Tna5kpbUCFA2iiaRd3GoSvC",
  "key6": "3vsmy791rEZBNgP9aKDrzm1yQXHWiNvF3p2RFC3KJjiKBARLQh7f72bwBPVkUvgsNwrbNWZopqRGrcsUZVvVjgM5",
  "key7": "KTmxyqsVciT2qoo2127qVPUTqLjjrsuHmar2TxY8STc83gwszNu9382pkzT71GgUqcEY5LbxjqhD6dPi616vdvZ",
  "key8": "hZcjwERdJbFoMQmGyvLMtwrLmARqdXrE4ttb9HYxTxsgjDuBZXb9PeFUytuCNEVYwYf9ZPSZSwQsVEEWTecEp4M",
  "key9": "5RAGpHfNGvTfMnoXf2vNK7HdjNbKi1WwAXDHnRQLNzdyqdwgzVDFYsutY74r8t7gRubwgTGKVs7j72VR2C38NURt",
  "key10": "RJJenRwNRFCe8tmdyddztq9yyq94cHRprciPgEkkAsMCJ2PvWYhKhKqGzAzTQgdDUXPTWTLcn7hoGDqsfcAoLMJ",
  "key11": "FffEM2ABMS5Uh9bxEAm7LpUiATqN4CejYVpHb7cnD6PYCZW8rFk8gj8UfyVfU3gDUvpM64gq6UJ79tSZwhdGjyS",
  "key12": "5o12RMi9WdGeYhxumuoTVDpZM9AW1pP3YwGysKrHNMfY8NddTj8kYBrqWSJ6uUwFZ3iND53yAkKRd2J9pUBxHiFo",
  "key13": "mYYDugYugXn1eFNyHfbygwiWxCsgrPRmVe3iuQEsWqBZCKLVBcvUAPU1hZQWDFMkbYPDa9tmehQydFapW5EXGkF",
  "key14": "MY7WyEZj98XyCbj78ZxKPYKq7J8EB1G4eEJfjqSUrttg31Rcp26J38auXkTKCfudFPXRkH3ZPRhk8p5tMA4VkN1",
  "key15": "56ubFtuCKcCNncikb4YdNVwiGDCvFz5vjCusZeZLkjoDUbmZdeiEiJ5JuYNaiTKdN7hcWs7LApStyWBL6uUweRkW",
  "key16": "2GE7AezPfvqdbVZHEt4SQXBkYNrzKM1sbXFZ327yGuZgTSb15jLdvxCvpB4Lmbc4r45ba1p4tZqAVV4WcpYMJVJv",
  "key17": "5YsNuBPDxp5K5GPd9t7ps6rV6sxL3tYnPPiocGsGeRUCGppszYmLVEmxMk1ZqKdRY5xJgJ9hFvuc3q47uERfada4",
  "key18": "5NwzrSuRXXcixLPsBYd23v6J2CFPCFPxHKTB3PRjPFha4LiwZvFsjgJVaW7UHMxdF9wTmToyX4BzWEfJn99mGpvi",
  "key19": "4SFGnBE4zwdPnPYhvA2FyHhBBx57HZHy9p5Cr4y6CvVCYqQiZRSHLHcpLgC9JJQM2xZR7ipc5NPUvEtJkhMKoXxu",
  "key20": "21QH9YVRaCDEsnMKMv4rQvvhd5oHPh9VNhqgMpUXswjnDzbW2oxdtxFMJRhJXr6GXwHVSNatppXetNyZDQbJij9P",
  "key21": "23QgHHwySuJ8ELCLKgJL6NgYLYaUQRUQDHTVmDMhZeKvsXJUs1acfD3JemqtSm1Ethd3Rfzg9d1nCu6NXhKcUHsQ",
  "key22": "2Sa2XR6x8Sr34CP78iMrsk9ujdgoDhFjnq3AiaKzCzkzCr4LSQxt2vcjstrLa81zhdzB9s5GraGGjs1MvmvXmRbi",
  "key23": "BFZnrjHeo1n8V8oxZ35ch3pWmzz7GEcZDqeZhHm4dpSTKjhJ4DZ7JMurkoYTnbr78LDt7DCCeFKkZL5haCg7c8G",
  "key24": "57g9WhaCUCJBYQuUCRDpLeJN2MH4jCASysbuENpGkcVmMu2LPfNDyxmrNBs5X5ryoGaz5jj1mANJUoM6kb89mpQk",
  "key25": "34iLTQduLWqefRFBFUmpcEaJGdX1dJqCwKWYsPMyeEQcmGpXY2RmR35gHGU2SeLNhs5B8HCwQjrgTpnszN4SWSye",
  "key26": "3v2mtJZcZLvhg4VdHB8skoQe8MBogSMnn4f3vhYS9ztND1sfwAHyCEdi9n8pCuZuV8jg3UW8UnmudRRt18t3YykT",
  "key27": "3rizckp2Xzrn8gk5vykpoHkjQcTdFFgsuhK8jLFkiPyWJFWbcTv1zN4nEyj6byxk7dTSY59dmKX8SwhzRkvJanPH",
  "key28": "5F3bs79vPjLw4P8pbjwzGJXQjdH1y5vjLzrYdbivPCXpDFesZu6EaEdDdwT4oCy4bSq9qMEojjyjfV1ANQSGBBgR",
  "key29": "3S7n7gze2kFw7uM1A2KyHi3VmKDf5QWW5AqR2qbkyaUfwvbmcUvgh6mnmJU2MKwjutkBV8CSyBn31ZX4GnA632bM",
  "key30": "gdCsxHGGTFxsv51spJ3fVUHvWFBC11w85GT6K8Vm54Jp3PFG125SdB25DugkDoaswTZbxo6tSV8NYRJGK8ib4o2",
  "key31": "4yPucfiiUmKUDrB2X3CerF97d1S1KQbAediYPKeoVsTMPhBJGHyATRCyFNwoRiqGE8V8nQJ3RrioPYFigfx3K7Qs",
  "key32": "Wb8jRuWSs7N84xMCzaEiXuzTuKYBRCnsJB7BA76nNtsVnyipGYHy7hCbXrpb8YDkMLMQRx3TRvbPd3AUvBfskM2",
  "key33": "eayqP3LgBwdTWu9fzC6FBw1zJRh6gZVBp3RmijbgE5raRRAwmzfogSRMbxvZH84d8C7zY9GyjpRSdstPcHzxVi2",
  "key34": "3XC16zRFqTgZcvWBxDz8A2RCrMEQKixDUtXkR2Rris1XMS5YsFEpuuecCJYWUHAY2QVbjbSqagXdTaMYyVEGjbHH",
  "key35": "2iN4i98U6qoirxNcSrB6mQ5yTnyS4MHAvMddNFMPYMC8EuRcg5UddTcHRFV4BjpzvU4S3Mcuah8HNr13yveSYoXR",
  "key36": "YP7D4xmKPP861mGXGGqKiBdYukAJu2tENJwxPPEzeu4sd2vQUUXPgsp2NgnR7F4PrAfpoKQ5tYxbQxLFYAqHWkZ"
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
