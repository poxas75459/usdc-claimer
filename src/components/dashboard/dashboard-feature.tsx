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
    "4fhR5JxhfWkz8iemXLTNv4q9oeDgHv1ejNw3w7Gn5YKocjtQY7VTzhPmZyXWMWsTYpuzATyEUDG5k4ZnxT6LScLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nwu56LX6DUwkrxSKLv1zT166oujZwnZ7Wq6bxoeukwjnMK9iHqwqTo4wuM7aoYa79L6CFJEC9aNCdMyFo7WjyR6",
  "key1": "2dyUvvB9uj25RPvTQhe4xKr3RtheZAJAthuqjTnrVr3MKGVWHgyNcnVjc2Hq9aEWr2Qg3rSSFZZ2JSMvAh9oUekR",
  "key2": "5xSknYha4BLFNXAwF4GdXsr8Rv3Joq55T59oGLPY4Gamx5efsWT6MLKV9CUjLhps5ZCTAGFwDbcwJTUPQ52ZUgAy",
  "key3": "3GChwVih1tk3Xis4ghHtX1wVCWqguBYVhxULjmnAmh5MDhPazrvxgqsoySPFnrMYvuATEQ8fVmDzvEWGeMVpHP5J",
  "key4": "gv8s9AEN75aD91Fn637pfgPMrSmhfjPNkpQ6uu2JPMLJQx9WbLTpUQ9cpjMth7Dx26XQkcLmvj9tew7px5JmS9Y",
  "key5": "SUeCWsyLZkzjshTfd2Q7jGAmdWGKcxHQLd14v5zxwPnvJN49FPJsVEN4rdvxkS5Coxk5or1mD1HNKsyJcfS97DG",
  "key6": "2eXUCRr25Au6nfMtwRt1QGZ3vajvWsGsrw5eeQMPVW2tCqmCPCFDkrvVQTVojNJ5fUBYXN1AuytPZ8FQy2a6JMXV",
  "key7": "3kkUyZ7z9yvt5yvDGAt5khnm8Te14GGBqXQ7QJJW2kL2PbemvHUvDoW72vtdXDrtSnz7BqGZN6P6Zkjz4WuhNLHe",
  "key8": "4vyiShtZst7gKZnytfp6A1NmSzTCc8SzrBZPaC7LJ6jv3HCWmqrWzgS9nu9sT6H3ppW9DKksF1AKPPi31kjHPy4g",
  "key9": "3rLrV2fuLJZNf5vXKYmAju8bK9TBD5f7jR5tLS5adSo1T6MZGqGkesGSkeUYJTA42SsckSt6KLiUZmKNDZtR8f3k",
  "key10": "248X2KFgagR55jQgXgRXnJVBVKe31n7QQVTUbScLKKy2ydAMt43Cb9CprgDDuXY8h1DrYyTanvKyeQ8PAt2koBRN",
  "key11": "5KJHcqxAmZmq85mkNPrMYxsyjuANGQMRLGwwFZ3wpHaTTH9Ftk2EF6SvBoD4vqDGpWZgrUQ4D6HthwCZjKohK3vK",
  "key12": "521p7i7M4QH3wjUWxzJe1yQhsgjjwcGDkK4BTJGrYN89osnKa2fMr56XYERWaFrfV4fF4SNrQqavF57WKL17CC5T",
  "key13": "634RT177Rfzct5zhqTc1Hbtc9JxxY5YkscmzkhTAStawiyWrgViXVTMCiFQcxV96AVAvNcuXZLs32K89aR1HDj4j",
  "key14": "3LwEtspYNMM37D2pSvNJVX8cyd3vXjfZK3msEwEv2kXBWarApKonwNLp2yD35NznjWmYeXvFqTGVbTdqqXcbUKEH",
  "key15": "hAviA1EpEfEiadNLeULWJqKttXzjVLGfciKcFhNugZm4YGgoc3hHa8mvWBrp4jERoNN2ujVdgoXj75syz88BfFU",
  "key16": "KJ1nLmpmbZSog3X6mGMuhr8UDsbbYABoKYVZvLHbW47bBA6kvi3G8qVbquWRP9Y3rR7wduVNFUeRJ8VduSwc5Hm",
  "key17": "4ainkwrcRBXyK6XSW24M86EjhwN2dH1z8gjuTp5L9HHhFRNP8BpznEkgAd27Lg77Ebnwpp5r11jRRyjXhpS2gg49",
  "key18": "4HRuPnXTrZBaBiHFDpcozTthHikTegjUWrdB35iV4yKd3adZYpPU7S7mNE9zQeJjLUS2JusqqZbPCjjxtVy9hFke",
  "key19": "23nTnEDQ8cHNb9txZnLy1Vrm46dpoGJzh6uFPA9QYtJvNuMopFRXAiGPCiFcUbtLHdthZbAymKg7XUc4CE9ASfNH",
  "key20": "42oHrRPGfUzLbgR4B7Z2fu4zw1ZqSaqFZ94p5nWf2P2Z2se6cXskvRjNBVWssJsLFqWZBdNwAFusGMKfXyXjD18B",
  "key21": "2ea1aTiECGqj8rzojHDydgXG9BRE62z6Fh3ZLYz4qBNDGuaiFARkejepWupqwZQzH2PXPmaUT56n1EW9kTJ88CDJ",
  "key22": "3HapFhSsgq2U1fT1zW2RLd8b9FdDtGzGUj8xE7wKxJrKqrHSmGeq17SqmvHcdPVnstvJHTHKY5kBCefRFDk1DuQk",
  "key23": "3bT87YMfHziXKSKHgGEtC6EuHgH9vGdSMQy7TTDfaVfN7adp9X1kiKJQVUys9ZiGGXU96hqsy3B5PmDh9siBUn7t",
  "key24": "29XoxzdBNtS64DJ3bNz1W5d7igMx1oJwPnAY9Ge28bd7YquzKdvLDn5C59m4zLhvbr2kSDmwSTzZScX5wLHWYXDB",
  "key25": "2maByfiLXxruN8j17Vz5sMa1sBVKN4EaC4Kbvp2WTLkEwqc2BNHSoVCgD22qHGTHcRwt62eDv4uA5jqYyyZN2fY5",
  "key26": "2yQeiUyLMpchP4hxNZdRTKFhSHFzzWygzN9BWEftWtmQJJkNuJTX29BABtWgnfpr7Ruh9LyfWetPzxugUQMkzp1E",
  "key27": "uU58WxTxPq6fD45jMUgDtNHYDZbEqVhWwRdhVXeazRfuLBoc8fERjXzFfgsF3XTU1fhyN7afcMhkwqrsfbASz9g",
  "key28": "46SUXgCL9JKc5E9Tmb51JaFXY24T9Bd6bNuQwQEXHshVtoqk9jZjvUh96dMtZyhqAvVCvpBYZ3Zbiom2ncjnJ8ez",
  "key29": "4SGZDKDrUNEakaMTcF4ZSf1BbmvpKimyxJPbGNNFi8t4LZabtR89Gh3s5gYyvY7bV7GM9kqBjNxCKN2JRAqE8vdA",
  "key30": "34U36UJbhmCkyFKFeYxm8CXXnihKHqciwn7FuNhRtfqksYjvjW1gHubCYm5jtPUYrPSCH4PrRqoiGAoH1NeAYmMC",
  "key31": "4pdYeLz1A2ctQQNvL5nzbvzcrLcdrhxMidFTuENP2e3VytmHAsH1FFGeordUBNKZW7UNx6pHgGWiYv8ZJfnEJqTp",
  "key32": "2N2PgPYrzMaQDJw9f7Ciaja78sw1kFzp1Tr752YDacNbeHvsesAvYdGkJhHvxtv2fmAtEx47jY6EBxDkkjUfGSjj",
  "key33": "4PVTfWJkm5GVfQ7QsN9ocxTYXQVWba7rYJDngfBmXJxDMw678XqYfPCmZ4utQkk8JJG1bdbTaUADNdVt6TNzZZJZ",
  "key34": "5bNFKUW6i3CpZDuDeHAKdWJnrHcjbtzSxSoZXcHcevffQgRZKcy2dA7DiapBuzppZcpRkBRYntP2QsYLFYQMTd4Q",
  "key35": "3DV7pzuh2Zt5Bxyg6E9DvUeRN2rHnnHcXPRWKVftt5ZUy7QoLXzXQGvHPRsConNnxG9YdufCnRKAWTYJE1RGQRNK",
  "key36": "63e7G978qUWAYgwMVU2TmBHweNx4u2SSFKVRzq5jXQaPpmronFjKMavoGWydW7vqiTvFbS2bNK7vVLQBmtrqtFqV",
  "key37": "5FUC69xTAydooJ9AwJgKK7v7ewZPhkQeVXp5Pr17Fuwi7U6piPEC9NX8j8tQpiAY5ghJT84fTa1wFREr8oAordzS",
  "key38": "3aCtBsLh5nBXCuL45G5riP4LfDx2w7uxaUA2KNjkbcyoGQE2uFBpi7kMS9tva6rVuK46TrfoE3NRuo73aBuGkLwB",
  "key39": "3d6Vci5YShK9facwe9MtYdzEmhygMWufhcNc8oS5PdH8duyrLp96evt1B2pPkT8Rf4QGWpSSWZvLqXavCUYu8jSK",
  "key40": "38PPAQf5XahfajE1iRsFtr59ER7kyavaRmu5uSJSDw3braxnmZtL3CiCpbiJuxGwR6cKtVPyuj5ATB7gBHuy6CMh",
  "key41": "3aFFXGFiWCKddCU7MRk1yF3RbboZoz6EGHWhbip8CoKwBMGTBFpZQV3QaE7VJLTzwiFPdXuDM4zBEGRAK27Ggdyj",
  "key42": "5PM4oU8oyYUej8pjSbYnwJ895BdzDnWN68oTkE2RPQSuK7DF545psthZbDkWXC1ATLxXvf1UXNEFiMcpSeXQA6Xw",
  "key43": "SHZwcU3SJbTpkWXbjkSPgGkbykmL9D85B4n9vWCVsM9svVDRCeGcWAyfBRUwz3ZrL1bQo6be5DiEZtgGZUomdTJ",
  "key44": "rqVmysbuG2BLvRhHSHf61X5YRXPvytybRpyHGEji7NG84peDbGRP8s6qs2fDANeS28oSi1dTz9RMdJ2RA9xqENL",
  "key45": "2QF9awTyesij9KGU6DPMyBZDgDp8X7j71sscasFiVxDtB7dPz9czAeh5MZSut9e5hNBfKtpQwuoUVXiRFzkH4Uqa"
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
