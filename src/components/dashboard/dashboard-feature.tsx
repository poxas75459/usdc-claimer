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
    "3B2UGdBcQV5MiUBy74BLkkuNQM6mnB3M4eqvWv8xNeoc7aRFcQBzL1q4w3opkAkJn4tjTDwSiTKcDqj1u1vJLUY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ebDhhFr2ZAvy2KxUnyDX6VaZ35BX16wQPSvU4w1e5QNxAcQWUSMpbaBnas8Yn47dtqqZUZhi7Bj1MNtBUczfzRx",
  "key1": "N3FianASWA5eHeXgaT391vXkUC6kwHbNBvNs5cMGvLsnxXivSjk3HWmSWMPjSMVV7CaK3Zv2nQVMPecb6YdH2ed",
  "key2": "4vJtqwPMbWcxc2AZuNtp9LvuoxenapmHpT1o6gw1QXTZ5hErWttK7H1Jz5ZTfLqBD3yxaHjLwN7JwgJko7LP1LR7",
  "key3": "4k7MLMrxjoTZ1h97DKJGohivmTsJdZghs8mVYYVXYQuKFmddHeN2UrbUpBQi9GQb5o5FAWB1YeujBkrwU9tPjJKo",
  "key4": "2CKMWwQ7nLNrC3CA3zV2TKMCne9ZCsRJf2Sz1X7eyXgjbC8zrvry8NXCFMeeNKLWH66fZY9QYWNvxZoccCYM5mSh",
  "key5": "5uNuEqMGcGKVTCRhVjnUstbTnjA9bX9U9uNQEDJE7hZ1nXXLuMcBi6tcZGqhGUyqjm1W72nKaG56XmE4o8xmQMVQ",
  "key6": "5uXbe9VGNsVGk9fQQZHMjgn4GPtdes3z2SPN7qsu9CRvoYktjvqGgs7wi5KyMpMJum1Ygb7AQPuua9x473SjtQg7",
  "key7": "ZDZHJEQ8sBru4rw3RhGakvgJmq5W3jHi5xr6NVhhJ1q6NLM9b6teYRyKs5APfiAohk7Gtew2e3PK7zucXWUp1yC",
  "key8": "3eWE1NTNh14nfWTNy6yP1WWofVUUENGH9seMKzRdSfGGhthUoTEsBgZo9ZntYEkdW9Pe7rM58hEHBXDvByzZsHMG",
  "key9": "2csATqYJJee1YxkGHC3EmwK5XCr1eeCuZbTM563nYjK1nasKyfcpXKoTrYLaRHcCWVqf4TypWHHSvZfyxNt5wPcd",
  "key10": "21RL5grTnYc2GQPDqxBDHSLnr24Q9SRzo2xxxMroC79Bw8ZK7kokPci63tJEwRKy1UPWvppo38hBr7ANzGs7SVaF",
  "key11": "5enNzdUpPPB6rktqsK8FQWciWbTERSjJa3vNNrvQ7h9aNWznafbdNhGBH89fKahNR7CqB77i1XTcQoCS5jdkUUGM",
  "key12": "5bame8huEhiQ3p6sXdMLHQXQwgBKFi3QSonZuteHQbeiN6aZCZ6Y6o7Mq2j9iMYr5Xw5rTXvBhhp1sMXiZBJsR1i",
  "key13": "4yhJqFVWqsMRgurFpob5Tzgn8AzVmML7mFBEiZHbrkzgxXeJvRhm5hkaESFTQKP7h77MHWFyzKPSKei4iEULhn87",
  "key14": "3xVEoXVPMwUKHB7MP1kypQnwDjfhBB5ncCXM3W32quHKvesvXE3wQdPbL4i8HHTmGdcUHnwERLKA9d774THYdRKM",
  "key15": "5soY9bEsG67tLSeAyVd4KqWnu1eZ3uWdFmeuJhKtTC27FL26EPgnWi8YWcums4ZGYiHKoQuZB4QiCSBDajNnyst4",
  "key16": "5VEvtaty5yt2Mi2GDNAjRBF8GGLGaELA6bGpPUYCModX2F6X5NvzMWbMTenyErf5RP3KzoQyjtgyRhkfqnNXoktB",
  "key17": "4ST7rpWcjgcGQoQSP34Rt1MVgEEEWuEhxWGKteLAQoCzTLQPEoDqCgry2ERKsg4hHqGECL6BmMeUruKCDVJufsvp",
  "key18": "4Q1PBC3gZBKocKhEC2AJfCbPBrnZ8nTSEdV2rYbtRGrc8VZEwyAV8bu8CQaZpWqGCiqn6jr1nEEWktfw1T6Gi5Uc",
  "key19": "3BKw46vptWuULqeVPkBcrTzdJwwuVKV7HJhc9oTwy2JZbwabSV6dPXDyFjX64FjhMKGiLP17RVNxTBhZ3GspdcE7",
  "key20": "5e5FZ45obwj3fHSSgrRS6TYczkHG1LpCzGai7TgvRM1FDco7qgHQFjT2qx6WMoCuGi9CijSrkFpYZscismFFCPxG",
  "key21": "4Z2MKAjAvzEqeiQxYYQ4bpau8tCZ58pWgVdtxzaQEefsJvVgDTqBpLjHWoX3v9DegsNzrH2he1R7vBCGwyXQZ9eZ",
  "key22": "49iF4XzGauAE8EJbQ9PUcpdoELxNWxwQYycgmYbvCtDyXwJ8s2QWUQJXbFV6nBupCGrH3hN7kcVSVdMXkkaBUGDd",
  "key23": "5oPYtWzL5LCzaHdJU5ADK4uFu3R2PYKXgfwKpYQUWH51Yw4dNwEjTvtJYqzMAdUWVcgvUJmDRznb8FxKKHfQQGh7",
  "key24": "3AKGHKnjfmiQMh7xbXkEaFAG6DwHXue56KG4iC6V1don843iDTXUxvsqCQXeoK6wgAneKE9jKA62BZNPB42Fg9a9",
  "key25": "2X63rHGiVX8TmJDtRc5Z5sMXtaTmmagQKb1sxaG4Q8UT8MP9rJPjUmUmgnEbQokcVGEoVARcxD9ZoHxeB2wsmZYj",
  "key26": "4vq1motV76u4V17Wo6eGfx795NRPEYMTgBbBpFQcJr3rUCxiboQgWnDSo27FRHty1vX1kD7tznLNMxhwnU5YnSKG",
  "key27": "3gqk8ReSXwiR2A7Fm9Pi6E8FcvhQJqzV893MEzJhrj3ayXNGr8Bh4xCFG5UKseWCmMgK84KAR15ZMgtBg9smtKaL",
  "key28": "378zSB78KtXvoASmDBumH2N2CShKhNgDncntMxf58f2gukKRP9mAt3Ghojko9LGrNk2h7mfUXyg71n3SBFFVPTqg",
  "key29": "5JkPZHDFZ4rooferqevAa6voEvGkVWvwGi1UQLk9qxfiWo2ocszkyDHsR6SRSzwEgn4V79wb7VtcAdSdw1LgMv8o",
  "key30": "2egoibdKDdrYwNGSQenio8rjUNxvJBpzCSMLAvq4q4qcjDn25WCkX6NZCWri5CdHG6LX9sPhi95pSv88XKpb3k2G",
  "key31": "3C4sz9waozj5aQc6Y3wpRsr9rfYgdfta8orqXkXrNLA4K8G8yiExqZ9aezF58nPtKtZcFpRwDFBmiGvesr16ui4W",
  "key32": "2RNrtH4oSwJYTDgXszx9D7RtFUH2qcCNVCsbzj3Vbvb1dcpjrfUJWii2bTcXEk2sjiHjge7JMo2Z8gFUNZZQJoCi",
  "key33": "ZGrVmHskNFFEA55gbJ1mdvkpJLmUzjxUMabP6uzby3z1AuaaWbZeFK1kPUBFRHFRd6Ar1oDBvDawwNBZHKJQQcE",
  "key34": "tR4wXi52CU6sVUMnrpgEQ63YbtoceEp2WH7z7Au3QaR4xAGBGwyVJvgGzaT9xKoM94jd9JMhHSFqtSfPtjPMm5L",
  "key35": "B9Lx53R4DfBfBQDkkyCwF3YgC8Du6PVK2uMfEpjJLSxdmLTZUfqJcwHGoakCYA2x8egHJsdPSz1PoT3sZrp9mE4",
  "key36": "27xUAqkZaEsohpqYAmHstJ7rzmDH5LHMytQq3rwNfTDeJQdd2j8skAhDpn7X92M5vmoDZQL5nbxVFDsNFDXcmEHi",
  "key37": "3WuNwM1UN8garZF5tnmZB6WRMZYn79PDeBfNJHcKp3c9g8i5W72TGrN46FMjMss2CVnZZNJkuKh6NwUHVEWAhcbK",
  "key38": "H3cyRWHVJ3tmVtz4e8tdbHGpDodMYSiiUCYQQb6n77AcMPnXiFABj5pmgjHE2au7ZNzxYfV5BHSfEe2k9jra27V",
  "key39": "4wvVu5AmJMZ542CVaWx7NGyMBv4jpxmDgVZXBMCdZ212BLhyW13Lkey5eNo2QMJnok2xfRAdXgYwAiKENd9fha1C",
  "key40": "tNHXezgk38r7zxDCFXPU1FGeWgZn2qBtLERtw4YEHTUyqvjrqVY694Fe8whoVhqos2dRkMA9fU2hdW9sPehsWqa",
  "key41": "4mJ1EFigBtyA2THxVnRwGKCFxbckb38J1vPv6RQDpXuAnsvvXUxgJnpthd6nbRc3nPokN1zfXfot7y92KpuTMpTK",
  "key42": "2fr43MABSebxJCkvwvzup85cPTwKWXXvxWTFgKzsvjoJU2XdTLG7kAMjSPmDWVnHU1TWkhYMYEKLYpafWXaKtL53",
  "key43": "5oPkfsy6o2JnKyDUoroqfiuMwFmrPDuDYATQjfNHFEXiwFwqQSuAyVKrqKHsrvrRvp8HL7zoF7tdmt59RKJbX6bo",
  "key44": "7tRWEqCpXSwo5b2qenpDrrenEDdEJdg4Hd6Cyd5brZWAuD3Aq2VWqjfW3ZYHUh4evntNBEusLTtq8hDqxFSmTjw"
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
