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
    "54XvP2oETXGMhdMwPm76FAxtkXJ7ZoMP5Yvb2GMnnmUNraZ4A4tSjHNrnAx8DRmrAN396pcxicmKmjwHXgB1jk3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5egFWJyqF4BkzkvstwkRGTkHVjD6xS74QF7Cf2Pt6W2VLt1Uv5yrSBfGn26Bg4dN85Xu61xyUfTv7hZS5bSPBy1G",
  "key1": "5vTaVLp7okGBcZiNVguEqZfiPw9C6KCHXwedXuUWUMrwZo8RagG9ndN6TRhKgfwojE9eMGRgGNYxKooXUWfKQ3qo",
  "key2": "QSKDr3frVasCBMCoNrMZ15qgTzeTfrAVi4KE7VzTAkMYD3uUAGZB3cqXynSJoc6FjxveBU7PinVZH6EoERHZP3Z",
  "key3": "Lg5CPMeDQjcEAsB9u8QY8zAmceSh8hMwKxDpdXXovHdUCcdusKeEyw4xV5KcC5BTFyDi4VweJuagFfQzRSKXsfH",
  "key4": "4GhRKW4u4KwPE8CRV4Xuoo77XKKbSdfydeSwTNo4fxRfynzdHdgQS2XbsQDTjhetbEqNCDRZ1q3m4VcxGqZbXVy6",
  "key5": "Uchim5SGKym2yEYFfCfgHnX4gsx85VWcorkNhRxEYwy6CxkY3PhFx3AgJcXaCnrEZVDbGFoEudP74xjpKEnRYCv",
  "key6": "2pyAVApFD682of7xeQSqwJhhKV1JJBv4Q9W4vDbhnHvq5ggNzxAeb49EBbi6M13qVkmTx26oMeACuxDxC22BFKbg",
  "key7": "5DEKV7HHT1MsHXK4sEamz2wMp3p23C6kd3b4ovU2y1K5sxKCe5VXtbZJpPLNCcEtnpP9VUQq8inNGNgZdrbXrnhd",
  "key8": "eZ2TofnhT55KGbKrTC2Y11stUaPhicMay333JdXueZdAuTwrpGqxAmFuiAFGgpZgAePmde4Ev7gDTkpiZdyuD9T",
  "key9": "2UUcPAv7dwPww61cZWJze5LDTiPW3ma5GqQ7DHhM83JWucgSpwyyUMsqNpUBcAqjEiu5GXuw5fDK2yzmLFkZ6ScU",
  "key10": "3UVLyMpendR6XakDCztNUxMU9pof2wXz4UfRABYEc1kwpqnCda1fqnHztv2GL9NTDDFyzdS7grqrRyHrGLoeRF7k",
  "key11": "2wYX92MaUBpfZnDEYk6pfqspLqgxsZCRmhy6n5cFFLeUwYVqo95hmHS4FGwuNbxJ7NFAeRsgETDg9h5Hk3NKSBwA",
  "key12": "4cLZV14qMM56z8qzY4FRCGLam5eE89eo8dUbMUiMTRFcQFH61RmuFiYS6qXx96G3U6WsA7Kwn972rdFmoznMLhAx",
  "key13": "S6UF3e4ApMGXYEPtMJ2FyGjen8aDJ9vxQi1yq6Qm3epk62ice6C1ebtyKj7trQCaAJVXTe3DqChBPGQxH5Hsh7u",
  "key14": "3j2Yze6Xse7VKaQDaZ7VYUdgQNZtxuQRwXTnTRruUJWseGMiAQLwqxLzBCbX29Yms3CusXojJrS3gGmFB5Gj5jLH",
  "key15": "4AqvFC7YVtxXGxM1XuQHEyDKB2jakrGWvTNfyawxHqb55ebVZqN4JxgapD8rYH8UxmbKYVCAuFWggrntCVEXskPX",
  "key16": "4HQyM9LcDnNyticHJsFKEpp5ZezNmR4UwtWfSvzbVR7tA9rVKFez3JKCtp6hCwAwFtHdvzVvWwtYHRttm2k1mywg",
  "key17": "5sufrNmUiBkPB2manSRv3ewtGkqdsNW9CEdN1vPFeptH3cyCf5u5s5U5oCGLqKuZTrYEUqA92fFQviKmD9DsUEYP",
  "key18": "8qTYhxyhMhezp8QrpdnsNmNF1V21GC9HZrbCAtUTda5LoyRaeGi7sHi5vPdVpDp873vVsf2BCEe7SYfMfvSHqAz",
  "key19": "5KLpNNpfEwTK1qhFbDMHU2DkFmcDnnRNwRmya4Qn2az2DKy86JAzRCvmodpBk8hCFVMHT6ppYaYtqmmwBR3vbZVh",
  "key20": "2QN8VWwyp7e96K7CxAomG3W7Ca9pV4oTjHMUNMucX96995gkZhzLAN7jynMCni2wX8t6P2Fja4fS9qiV71cs2nqg",
  "key21": "pgWZpGqgdZo6kdL1dPT7E3FA5ELD5Sj8V7bLSmxXEV1EQsRQnHKQr4aQiZLRmbF8qpyu9mia3qFQkjJh8Qnkt4W",
  "key22": "2nELTvmUvw8N9mf94p8mH6LXBzd1TTHbzxC1jtNroyfrYxJtgHdJzaqcZVGTdCKh4CW26kvRwbJE1bdBwm2a5FT6",
  "key23": "45tNubSQpXnuA9zYQVN98cE8gGjDFsdHKaiEo15vSUxLVv8DS6tMz674LFgJsvEs2oDnTD6kDD69X1QBoNfpfm2B",
  "key24": "wFYihH42kaCsVexEz9ovrKwjWbsBxNvuoxMV1RmaivYQvCeBZZ4EpRFVkuAfLnUomHWVhGbNwcfBTWmjkAF48h7",
  "key25": "2uSCDu5EgeBrazu63tmfToT6m7j7YMz6TgM65trorG8cZAvVq85QBYw83G1Vmxt56F7pbyd5B6E96PmB4uxHJjdR",
  "key26": "4WhapV3yhAHefdPJZGk2RQ6bExnf6xnzuKKttQJf25af14MXPyqpJkogHKuDZp72hrEJH718dLhwEcy9am58e7U2",
  "key27": "4KnRdt1chBTKrFp6KzEhfDJiBXZi8eyYCih8ktJ5xCvq7YZ2g9bPvPkqWixnTKTfMibKrqVrY3YTDBtQ9AZTU6PT",
  "key28": "3PDxBoQNcNHbL1sRMKdvCzYekREpDk6Jz83ki4ipZWn7xYvWNkaS4xo93TDqfudeutbp5R77g9X22emB2X5MGVWq",
  "key29": "3JsbebdURGqqJ5nzbZeTR156ohbf13t8ZBtqfBe7fFtTsnr2fmb39zHaBzZusDRnory5w38LT1Cjjn9Sr4ar8cce",
  "key30": "48t1mhnUgXobC5zRJJoSgCez6XNt3YYu8RxhTD76so3EE6vRs6ZfV1993Pzzor4yuFJRFfEBwXPsgFjxcgLTHayj",
  "key31": "ftSQYd6M7tJVEyBsn4Mu6kcjC1wd41c9aQxp4Gz9q9dnYuYxND8esKfqGXnRBTT7nQTyddSNPqpbXqNgQJm9Ydb",
  "key32": "53BGqJNYAfRkKiFNQsJfyKWaMLeMDtZiUVnLDrGt8CB6bNNgY6wT19r37VnMfLADSNp9QxeffwCzdZuEndZGKk1s",
  "key33": "5ukp5CjWhkne5rkdnmtXsQRU1yz77iAFEnqMFR6fVantJzsT3EVvoNNDyBpBxff5QFMWsYzeS6D7RhPLq3y96Cjz",
  "key34": "5Ny4Xt7spquMNcUwyEScrcCj1oC5y1NiPW71ZD5FdawsFGbkH5HaPu3sBLVD8nozJyZTJz2SB6f88ainEjxWpe9a",
  "key35": "2JCrzjJ8Jim27KpfLLCDsrbxZVc7g9LcLu7X2GckMkBunSk1cBhuf2CSVip72xrHBNnTy8J7GG1fFsJw78EoUG59",
  "key36": "3wfAMZrMA4RvPSNrm4JnMDWiMDCiqcrg7FcQ6mFxbtJvjzKZebXBi4KyzPKV7tHvRdwpng1dLAyqWR2GJyuLSMyG",
  "key37": "4jcZYfTE8mzyvuVKKRfBQ2NaDyGzuKpZG4j8NuB6psLSYSEg2uv9HNaRcxbegF8GBZcUU7mzCzf1t2Jc1fySByg8"
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
