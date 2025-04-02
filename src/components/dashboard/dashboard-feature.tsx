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
    "4Zpkd1L8dMz7JGVEFYE3AJyBgyKfdBu2RYnWvMTD2UND6xigmQgCqEXzNNry6R9Tguq2YmvVcHa2iTkfzWR6T7x9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4awv7vUYWz6cw5d1dXvKt6BqGGtjf2UoRC25JRp84PGuVmSBc1kiNveaEHWqYzPQFcY5HegGigaQv6BMDaB1uHJy",
  "key1": "k7ssrghn57sXbdGD6a3nNAHGSjszqLR53rCpv7YWZoh6f9ZCY5K3UUJQZpLKwfVA22Z8uNfE9v937t8sVTJv9LL",
  "key2": "3gB9DVvkNYLzjeYfNSAynpSocpd22ZLDyUvRWPVzZr5NREeVmTUGbEKu18WUxmb7DprGRoCgj8diHeaDKUhQUEcF",
  "key3": "5ZFsJvdaZt82CmL9s5JGryHR8ox6mo3BkTFAhj3dtVnmtC3dqo1VYcxq7qEvm38GH7zTmCxm81LMjqG3Lr8qNsnt",
  "key4": "53XFFhredJax7utn3vBVAhs4tDXVTUAARbZaRUi3eKjrMDBqDj73pv69GJjB3eGQREjdbL9t1vuUyJmPZBG1vzEs",
  "key5": "4Az4Kxj37un1tN5KptgL1G3A9RJZ5UbJGAGfaFMHysWqjNHrXYKYx5HnS38NqbRazqhzmkZ4E1vB2v3KqGsEKHgQ",
  "key6": "P69oRWr78aDKpid5qMEAP7to3uQCnm7rCpKXwej4pMdcKTHgBYtEqMEj7vxev5MrJPwBYBYuRBpVLiLZ6digc9f",
  "key7": "4SCHMLh4gtuquNqaf9qWPBaMHFsUXUxkBKkpRubgqHod6fpUVNKKqme2gMj1Fbv1cfdBSYmCZ7uNXnLif7eytgWZ",
  "key8": "4id4DDUK7Hi8hbTdVGUcZLSCZJdkZb8Z6bJfW73JvVKnpZcTXcnPwikjQXKEm4oKy9owV9vmzsMJoTyEiBYp1xuv",
  "key9": "3c1fi93DkM8sHhoWeSHB4UJYvKHuJQdfrUDUkap9C68PHtfEwveaMpQF3vjZUdZmxxbqjrggdkTnXtuLGZXFbCuh",
  "key10": "5wKFHSLTFbBR6D75dHtCWv7sXHeep2G8DjRUfJy7X9Y8tex9XSuUwQRmiPmhLSi54Av8WQ7P8jgXJFHreJFcjVnf",
  "key11": "5QSuotfZuftDxTgviUUuXLenMoVZXea2ZR7GjPeHCh1bS9ziVSvDGKEFeUUuP4ULWrMKBdgtYTu8Egc4JRgUvdjg",
  "key12": "8LyB969CiuJD7ivACWCFCzyJCccjC1UyEpqWRnYjJa7wKGEEnWzGyozWW845xLeAjdyenU2FfLRbjE4tZqzQNu8",
  "key13": "gJHY7jwPQLDVGXceduVdXsEQbEkzcYCMnoN7NFxdVkNvBusB7mr3BnkamnJKssZYmNoosKTtXwY8X2QrwNVhcmn",
  "key14": "Nn6G2eDzju1J7Vfh3AoHKdvtpaY5EPKkbUH18ZBKvP84onYGrc3HJMbLgHKTjrAwmFc1ATh4jgom7dbveq5Lw92",
  "key15": "3bRoDfs6DuuLmRbFUt7cZ4VrpsiNE3DUhhJooqMqpU6K78rbfnJbwR2FySLgL6Wa3R5bWABff3gdZZyjEpzJ5QEn",
  "key16": "3RXy5fvkn8hRHBGtUmCQbXaJfrSRTX8B4WX6pKQTSKai7uJejpycVbJkMJmpmw9qbfjtiwvh8KUrMn217e6XB2it",
  "key17": "2pLGCZdztJvwQHZCWXXF1AcyooeTKP1FYTjwBzWmoweaqj16gRzHWp5jNR4ziKicj6577RtwAvSdzbqnx4t7D5G2",
  "key18": "4My5LXcVxe1DN3pzS6FVtEF1jhYU1szpm95QKF5y1Df4NnkAY1RmG7YLHZVWVwcgi4pBvEpFJhs5obmzchLpnSva",
  "key19": "44Ev35xJFxmLSvsEypjP5bE3K84F6XPQimzDDu1h2pdmdBt98huQg9RFrmvQ88wHv5xLVshkGGXooZacz7PuqUWd",
  "key20": "26aR3URzVhf69YLuXmSsYp1ERXLf6rDhpM2FojJRp37LYmZ55FMFz2FX4Qr3JZrzxJ9ps8MgZzk9jbqmFh6VhD6o",
  "key21": "38nWJJiYsMNiZQSTypN7ojiKf1CAR6rdYNJ6moZc7E2YhaTuCEEEaDpMRZ1oz8kZrGXRkGMKBxAGVpGmPpmHRUas",
  "key22": "5uE3yffEvNsVYdXotdYPKFfEHGw7m5DfuxpK53HpE9TLV5HyaB9V3RjMaPBzekKUn9vA1GHkxWYuYm5VmRsbUGKA",
  "key23": "EA85wFyfa8XS494kmiqhhNK2yANv18wtKsZbC5Sx4NfjdH7e3jafnt9JmHKeACDCiv6TR3hAsnDttAxbyBHZYUj",
  "key24": "369naqLTEfdz7vG3r4bKPfTFDBRbp6ZWg7McUQu5DCpVxUWoSrRFDc9LoBAhMHcobAYCCAVDtvvE2NJu1a43WZHB",
  "key25": "5Xtq42SApbHWu7JNjw4FJeiiwuxxkuqHztCxgrrjt7vaSpH1DPBpu61p7F6eTuaAaJjbSgXwpvcRXdfZAPb3HNvm",
  "key26": "Njm8EbBbskAS9iGx5HokoSRNB91kxg2PL5DJwESVecnY2c3oHNdAmhZsorUjHDVD1k3f6KGa6QMR6UYGzaxELAH",
  "key27": "2PifoA6fcAEuowM5cxG4ytCEcLEpQFfkkxNV2HqiSrvpsLb3DWHXeDDBTuahRLHg8toPYQRDp3vuZkHMcFBZsRgQ",
  "key28": "2fuRhUn4c4dU4xEzMZqFfxdg7gQ7mdnZr1CSpygiAeU1bNrHMP8ARB5656LLDW43xWVrTERdi1RHCbsb3xuCq9Wg",
  "key29": "2UEJgnDUfHbvU24bn8a4WHWVggq7djDsiXFuBg6F3xdtfTaNYmgZyf4Wrmt99TqYCAEYnJi85ysGH3Sc8y3MtsuS",
  "key30": "5Pd8pQ3q5rTtodCTKinPXEFi1YPwyD3hqRpsrRfnu4TNNnJhjGw62CZsFAdT7j9yeFpgsGRPW2pUszTXsj6vqe9t",
  "key31": "5TEA7Nh99Hq2mWtJoHd1P5rXEr4BhNagyRqEeuLcpn3ZHXtnDLFDSuxs4gATu7y2qwCaFVFywnFMyyiQMCPtbaGh",
  "key32": "2kxHDdgRYikAMrddqHAhnBwSXbh9ukTD3WNMe8fJC4y8n5WPtjYtPjwgSQYWFPdn6brSsvrGb5Btsm8y7WFtTnNw",
  "key33": "29wGdPFAn4jkzbm3Qak18HVWtGdNfCysaJFReLnDSfn5n75AEHwKj3C5EJsyFA19aaeZQ1yrKxzUhsFWoTQWKy3N",
  "key34": "59PEsQyYEzAdaVX7MVVRyu5Tm3yPTL9kd3GsgtiWRHEuvxRibrxVHnr55oRfmkGDvtgM8N3qZGi5Ktd8PjgivjaT",
  "key35": "35BLjUFbVA5xpY1MeggorAuayuY7kv8k4916PvMwe98avPskdfQtpDaTYCWMJSQAn7Bkd24wB21YATzXu5xhWjMY",
  "key36": "5cMkHq9eGHwamqM6wp1d2Jy4ncg1rpF4jdZADRDb3h2FKgQ9JM24hpLHUVKVZTtPjQpC6xRd1Pf1snawc1SAo64y",
  "key37": "3bNMk3r2Tww6aKj5ziVWm2A5RbzNUyR1K6hzs93ZBW6qFidozyhN2EjzGHVPWM8LteDxj19aZ2gNMGTpefTz2cgT",
  "key38": "5CiPf1tronrRprPY4avRCXfUgNkxHFoWuY8mT7zZFHDsKTwmuXH5KhJWQxzPEeua3EtH9fjpSyiaPbd3wz6jJpC",
  "key39": "5EVzSWbjL4QURfyfQcuZseUUz5zrbYFFxrD6acyTgo3R48763t54BWDWEgYkeVXRvDGR9dTAkcUya3AiNP1LMLTm"
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
