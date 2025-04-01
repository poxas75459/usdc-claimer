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
    "yQnE7newobPg27ZocdZ6jHSAcA2wx1uec4ETDCRceQgwBtKBcRWdxN7akWgqyazgyj91gxvvfUN2KwNcyFGeCy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vLCxE2UTPH2ue6qrCuLkV3H999kb9V3ujYnmemRPfqY4Wt8zmHYuCW98DMkgo5adguk1wW5u48p6Usfwh2SwFA",
  "key1": "5c8VBB9AXpQSNtieKqSCkEvzjF533beFKKYgnUAefPdEvLQTjE63KyBkeqUXyzSF3BxYkqeCKSxyhuc5ocQHD9hk",
  "key2": "2gKC1FG4cY7UXHoQEJXRHZshFE97WtTaJhQPQMrnuxcek34Ma1wz8w6fZzRDaQEJCMHXduDEqGnm9z7oXo5gq7ov",
  "key3": "4kvbKvyW3Qtsw8qy8hYbDhHm2Hdx1U1p6mYNdk3s4fe614WeXnwLxWaK1cjUrL3qTzgAVxfneDfb49Ppbug5poYf",
  "key4": "3WKbiouXV8Ywi6dvXB8pgvrxYSURAXqf8kPqagLiJL2bdnuwuJjnEG5LHmFM21XKdLndGBGJGMPftQfGebfy58Uo",
  "key5": "3eJpag8gZoLSzLvh64Lc2bkTbadatACKWp2TnhXvEXgbbjxQB4nLnSVLr4CMLifoiha63HZ4B7SEMWDQAW2JCQoX",
  "key6": "63V9MvPEtEB4kcJ3mQbYotReH1842YC6cdeDoG6WyCTpEyaM3v7kkTxqfZfc1ZLeaLr9UWWEqppoSdo45yUPZ4J2",
  "key7": "3z9yRmr4SCjvMBQqsSUYz3JocoZ6Kti4woUfQzmxttvynLtNYKocj3vXbhHKzy7Ye4uW1rqvdPYiyfj11U5xnytm",
  "key8": "2VJxVSx7TiTJhAUc8MDScSfuG9A6Qqrqvcwa3KGVpQ1w4xc29LSpPFHwyiTFtsta4ercHtEBE9B3Gu11WpGB4FF9",
  "key9": "3kfN9joycFUwbYFnHYGihJUXMHWdthrp9pYB8U4nGD6an6nbBv1WPk4uwLJRrh2AQiU8NVv4Mi8M6G4BcePsdKzx",
  "key10": "RAWhQyAVCXGUdAZZSmas7sQ1DiHDTpcTgpderSRWAduimgyKLApjZi3UGGch3BuS8PXTFbAWg4kf2dUYURn4vc1",
  "key11": "3aYqnyL7JX5rR5psgq9jpEiJceFjiV59YNpx4yBC7TuoGSvA8ZL7NBwmb6jQsW1XCoWGWaj3Lsp5GBUCZpbfKms2",
  "key12": "5cfE3ASB5NPnXCLq3eBoA496uCqZwadEcaRo1vb1cCsTwqBKFtL6arKJGBU5B26EaiXu68zmxP8E6aGa8dDVjeU1",
  "key13": "2MuDT5k7UioE4UFQaz4dipkJAeKWjbfpeEZR5dZPEq5muLKNMocFLTHqnwMjSzuqdsmjvSvsw88iAsKnGy4eUnNt",
  "key14": "3S9LfTpsHAJA6zSDJGcxb5degf3yFRvVy71rJqo2Ws8zrq2h6qg2n84BUjvAFT2Ckwc535QHM3VS4ZVx1b2rbYNo",
  "key15": "pbNc2YmG5zqFpFFUeYxqMhdoFHvVzkRDNk5ZjpEZfek2E8fK31qVydLymdZbdiY28bXDYstQ5sCSLtjEsZonnFs",
  "key16": "5Ro1XqfJALjafPEYuPoknbNFwN42W3NK7pooxFmw1R6r84Uikj47khYfJm5YA5ygrJbZtSMHQQTjzMzffPnzg8AV",
  "key17": "5bZyS5khwa2q74gxwm5LD9GCRzUhCUGHUWuNde4FDfvC5y2snTbrT9ZpXXXp861Px9gePpKg6rC8eNEH5NdEMXsy",
  "key18": "5ZfBhwMvjQSgDAfj2duXYsq2NfX8CX3dKcD3EHW2YbPi1HbYGvtEjhoigjkPqAL1eAA5BLVUdztRvxV5cFFVwToH",
  "key19": "2zV54CUgf7xqJv9dAV9ygjW4TVjttYKHJBTcTkqN4c5Kip1pUtUTiuXdveSTcCJrDWnaQia8MfPM63cfwXiRndUp",
  "key20": "2TG5EHwgQav7LiTgrc2U5ej9AfFVGjj2A42mJgMzLk3XJcCJjMKgJBfaXgmBuHaftDTEhddmuXuNpNid5rFHyGCW",
  "key21": "2ChNkQpn2MhYLmuT5uPy4CU4JoMHWqE6ZvwzkbXKdqURhkNCY5jk44EWZSgBX8WaeqK5hKo59L2kYS9KxtQ4ds1s",
  "key22": "4R6CMfn9aLMmcf91gRCPYWZwbtmLEJR2cTXjrVYW6D72VxxBvDa2wijnaPrhw3nUXm81fK3QbtEE1XxbHUfBGWpT",
  "key23": "3Kei4zMMkkJQiaRkWtuyUG9fHWJF4WjwWPKsFQBLLmfHAw4U5Zy9yJnBLM8ss4Xn6B3ApABZJrqiwYXbgrHGwesb",
  "key24": "a3y3uyB5Beseby3R6kYoiyXdAknjKrWzN5VPc6aa33knBJkawczBvh7fadVPwPpHyEWKdLmBomfsYaXx9Ut3RQa",
  "key25": "4zKHwK4BcC8PTZjMFyP8ZEPTxpTqtCshyG7BxgtmCXHCnaCCk7JZejHZMGDpbnGDMzw8k6SBGNZuu9sELMYVgjXx",
  "key26": "5wJqHLJEHDP1MtYxVviT3U3StXEgwrpiqj2ao3CQyKvtZxrqQk648oJ1iJubZW5eRhF6NKYZm3AWo5famHikptrg",
  "key27": "3nUK5m1NDJA8k5qVKjjfVHXDxxrcZnag2BXJTgXzsN7RqnBcY38e3qQMgiYemxu83DYrQQvDWVbVWbna7qXaZDnp",
  "key28": "TUunXGvDJjNc74YtR9LN2tBJ7dVZaMzC6jYjDSMuEspYhsiHwpjCWYS9cnkkxJWsXUknmzcJokTHj6J8kiMuRkK",
  "key29": "4VKqPWK1iyDrG7ZdF8iHuFP3cKuTywwEX6an4CHwBU1FmDa6xp2jobdKMVgUaMrdMftWiFSnPtL56WajY7K6hsSq",
  "key30": "2J5SAwc4stbWMVmyEdGFBQYkQ4L9pRF8Qo943u1nAuwG3EzJB9yELsc4KYrW6oGApxtHizKMC8vpekZK5f6Ngtz1",
  "key31": "4nEsYySAy78NWDXLe5hpPBEzd7fTLjj5rg8cDax5dXAy9QmiUSLguxde4kxmfUJRJic9HFkkXV9xgMGXBt9GeFqU",
  "key32": "5K1aRgB6z22oSRPXR7QCSEANt9zTUb2w4E4YsNqsmwF8x1mHHU9uqJXFBJPySjzDsrCmTCQb3asGL7VbwRmE89C9",
  "key33": "3NaqQ1V8qhRqjcKEtFYUpHEB7sznZiR7YcD4bFgce26p4UrJVToExF9mUzrLVm4SVnt1b3qrGTqqE8EyDze7ahPZ",
  "key34": "5M9uCEpfmPT1Kng1g9pqpa4BxevVxybWixXpzKwmreBjXwoVJJBsokw3sJz5RCz1irdfMyUEu3VXoFwRfwTqpuSj",
  "key35": "3t8ruDDHXE44KxN5Cfqgs7zxDBXQtAQUaXdk9LkUZLLBiprLMHp7YjcLXcafjiVv14X8JfxeyPQToGXcaP9geryE",
  "key36": "Kds2JLxVkiWLjLFoTxqAeojyD9bKjKKa7YedoDWbXnYS9RhSif7hNmoBhrMQMkx7bqPgH2raL8Rt1J3iJKYzGPA",
  "key37": "xdBUTBzLuWW8ZeQikcAYwHyMgdVwDmHMEkDL95PbSDizZ7VaAX6EkXxPTrouPsqwvQNyRHGgKbMu5h5thUdszNw",
  "key38": "ACRuhQ8GNvTekb6wbSsfME2gio7uFyp8Giwtw4QS3CUaCe54dwp24epoo8gQKe6SiJRrnw2JPYznvchPmfahdiQ",
  "key39": "5SkWc85RhfAKZGk6RjW9tY7zkP4UGi5mhkTRt6PVVYnGWXJUQfjrgDHE5o9hyab2uFHRFN7SzNqJejhjLQ8xZLGi",
  "key40": "45N51fEgeZ2QDT48bGqvHPRGy8U9LPwagBz52KzJxVUUGjV1azrnZH5YDAtYtwC88HdPAyxUXLc4bHB8T8nXDT5Y",
  "key41": "5QsXYzy38YLyeiZCVrdkhT456sB2k7avgv23NX8CiyqmYKhYwDRu6tGyLg1PJJMhx6315kCA5utq1nrECEUqpb1t",
  "key42": "2W9ZxZbcDpYbRSQx9CznDwKr5Vjazodi6BrqGC3LkM7vdcUimHW6hKrrqEd3ZvmJKh5TAWwvkiqgSjYuLWmcFjf2",
  "key43": "4SZ3zZn1tA2Q2Z7do3gwJgJHWJGowuBr5JfapWfDV4yTqcEiVpobJPUwEUmQLu2BWjJf6PcopwKFESj2xvy52T24",
  "key44": "4jR4B4vbprchd1JvAL78LcemRHbrzWcKoFus3LAjWxVTmTySbLpeDWfMNNQKnhwbPA6tLQThxoUa45vHAVqdbmdd",
  "key45": "5nxeKt5LANBxY9UTCGChNgSKZjS5ZoWDFmpcZ5qA9yWNWxSK8kDXcFeYHpzaBXtnTwrFwfNHUfuiNnyhGNcpUCfX",
  "key46": "3JodjTGejQuGfvgx2yzUSUvU6TngKLow2fg47GbdGytTZY5sutKWvaCaYJAAEaC4kRVJC442FnU5KA5cRoZaqBB"
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
