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
    "4fkmtz6UbApkHNQ3XWnEGryLMmFZFWaQr9u6xUsLS1zv631EvELDuQ4vWcpDtaBc7cQaJAmubgLphJGvkNDAf2Aq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UicUVDLsDCqLRSgHd9Gm1Nt88NYi11jeUiEwWw9q2vMWPZeRzHCx1wE8fKyXWGHm6ANgm6TcATjiNRXLmmXTW93",
  "key1": "Ri92bFKYWB5MEaNhdnubmML5VMeUhcX4PAMruKDzgH3W2KekL1cSqi9hCJa8jyTNycz3pFZqRoZ1RiDNs3kGhjE",
  "key2": "33dNEMkUKgR6V3HDJkx8EeMSAEmychirnoDA7G5x3TFWnvpbW8xxnrtjtJUmKqbFSyLBQMUsZBrQYBp2FHqPxbkU",
  "key3": "23VST4aULWEAgNDoz16Ysd6htTdcZitPddsu1bJsfVGNYis952dYzcmFYYRRhmArX3db89wsp9GnyBiLHhbWXYNh",
  "key4": "2Lnit3SjES2Wgi96doX8jCQbtWWqF4PDJEhRqbVERXgGo4SjfNoSFe2YhjV98iB23HTswMPoQS1SpeZ8zCyjsH5b",
  "key5": "5obUWtsStpFQNyboQnHdCpmwFxA9JnfVpABhe8kzwTECvLhrt9uZitdAMycQreVLZP6SHtn9FRfhLoSarQYFfJ8A",
  "key6": "21hEW4UUAZKvra9cDdPr3UB1pytQHfvkebe4xaTbD6Hz3GqLZ6SkZMeYWS5DyPAvB6jfpDRyp2xf88ystRUG62mT",
  "key7": "28BtxzfH8Zk4W1ACMNBZJfwK9JLcwDsX32RdhrgbB1SMVLqkVbH8mdxoRuzWRPrUVyH5EsxWPiFzJouyRXfdoqVK",
  "key8": "39LJktCemqTfg2wESd9hmABy6iR4TAvUqLPDWhHMLhgzc3g28waxFBkDXyAGkteSSCoKus3vcgRd7fhaa3XXb26B",
  "key9": "5pYL4ji8ex3gK1wBdyssFSyfXJ7L4zFS1znjHwmgz7fH8JRE5S4Yjatr2RsuZkdhRHrDLBFieNHNyCUdR2zgqzTR",
  "key10": "3EPMskJBggnopJGrynBUvGjGEyRbiUzZCnV8hXJzqx73VYr1yeHEtAiMW25ZcnPRjnxxEXoV2ThwjNBg3QGRhmzs",
  "key11": "2hnhCfUptUEGEZsHUmosSgZWpLs9fNQBy4Qsw96GG4wzSaNx22XumMSm7on3ayrYUEy6Qqb5X8acT9xJcJ4sSubN",
  "key12": "3sCRrdNWM6Conuxj8piZWhXguApEaC4TRwZy9G7q4R6ueY2LxB4ex6WQs9crUgzioCWRv7BbKy6JmMy852fzpMNN",
  "key13": "5PBv6furBniKDWk21T13zzXUDvCXACeqjqzKzXWuMG1jPGbiHFZTUFpK3ufrBpYedw4VuCsi1yLVjj4zorZEe4Kf",
  "key14": "2XqVqHAZC8CJYoAHWVnJAYdPHxH4NVQbS961snwtYgZD1WdZi57ZimqZCXsjsBJV7yxQxxhk9R36g5iypthAhouA",
  "key15": "5yRecGPsM9Mp6mEkWNmZetnzdcgPuVJ7NZDxdeapuE2ncSgtrSYfaxibZ6GXx3czD6pJ9fzVPmMH1NfokTGoRreo",
  "key16": "3GPe1HPfa5fgRdL6cveB3iPN2HG3prxkjuWaYKBS2FNUpfgzTX3m5zQiZjuVoo2zV3FF2nDpad4bmnHY9QRm69JF",
  "key17": "3J9g8wdmik4yf8EkSbTDvf85KbQ9f3sBp4gSMrRSkdbfXrRuNJxLRrzrbVouNzHNAxUbQThLd6ERXVeZZkiR5Ege",
  "key18": "4yA9A81SH9LCLE93rFriUQvbcwNMBHNwVXGDzzBmqXpiV6t15rirCXWbxMix6LuDZdw2vFHTrtArdsYoBtnmT46b",
  "key19": "5zp2821dLkHt2mNQv32R3X3Gjba6X1datsVjUhD7JP8YRNk1jTjxwBn8csreyMWQ5Tc7EzG37qXcaLcGq3x1MgMX",
  "key20": "5s5sN814PvHNQgFZegULKceaofFcNvaseZg56SpqQuswQQURhaUDP4kZmLc8c7a4o1XQbcZqJ4biGgv2QAhxeKPa",
  "key21": "5AwgPH3v11XC5C6168VYtkoLG8onhy42zsDKQp9NSv39dpu2nXCraYJo1ZFs1Vms2aaJQkoAegfbcM92tmEh3fcH",
  "key22": "46ZfRHZgf1AELZ8bfAMi4hfFJpp5UBV19nYHuz8ow3WoJebvn4jyJhQ2qMBd7seDiKH6q2PKXCrLF5J58eguaWhB",
  "key23": "59N1EfJJFeukJn8hbgWcYmouAqXZbLiua4zsNv2ycqdasBi7mDvTVPTxgdF1nXtfP8demq19aCHN6m5JhYpzQWZP",
  "key24": "2xXftJqBHEqJSRzK9MUPg3EoQtjqh8PNetEJ1Gf9TpPpfVTLgg1bQTDw3EPMLxpGq27QU5qyeh7vpFmqE9kr5Teg",
  "key25": "3ZbcZNQGXDZVm3Tca79Kta2hDuhsXMFt1kS4TjbcWGZM6aqKGy5pPY7RyUpsAc7m9brq5vYDuXwHCqXwCegZvmrE",
  "key26": "5P2r9ZMor8CgRVS1JMUYvUmYMe1GThQnfgMiquXiJEYjaxEzLHAGG89sf7rFadffKgXEH65hnSxuAscqGQyhdhHD",
  "key27": "4sf4YX7Stk2UTAwhzTWzWdWpTdAqZNfmhXs7jyc4eFWteCadsfi6qjN4twHMd7VrBoEvHaopJWD4VTuKkztzHK58",
  "key28": "5frzsbTJRkRLK8zi4XYCZq3BL2kH3vZSiXZhFVzm3LnkPVu88biQe819o5k3GGzYBi1cFJB5vuF8B8tZBn1Uk59U",
  "key29": "2fvD4Dqs3C6NPuAW3kqXih5UMVwnsCggt1cKH9nMFytCAqaZq2Esc58BstD7u3YRjtmiitJRRiYtNf84EUvpdKzc",
  "key30": "PD4E8vBMRM6mzQfigACu1x43Y2QwtQkEVN7n8EMJXJs4Mz5ZMCUji6tmHTqC5xvm1HSH3AZfNqVwjuMkKKFQh5k",
  "key31": "2FjpHLhVAqpw9XVgh3Ay8rWFn9sSqEnNVR6DpbHqFH8fAYowrBdEr6Lm1HvwUnaCsCJR8VMAR67x41Ks1MJddGwC",
  "key32": "3LCEuYUqAixmYMprc5piMUDwCpt8k2VCmsQYur3WZ42eovJoCxSuuJ9q588xCRrZetBXkCvsgADoWApTzzrNkn5W",
  "key33": "wyZjwr68wnaQCnLMeCE4xtAT3PaQenP6rGtqqnkJwdtdNP5FN84rLvHdgaBnJiRXCAHR9kQkHgZyECZ8BhnCBkJ",
  "key34": "4FbN7xExCeajWShtVxf2hm1e447JVi8LSYu4ciE8WepuaFvmLJYEAT2vkY46twsHatL66EMah1m1mNhXJ4jYvjhW",
  "key35": "579cqjfDiKt5EMfxyp3AUGjPrwSniAdkaJQ9d7Vieoz3qpwik2joLPuxmD6BhqJn6bm4q5wqDfXwrz5WoP7zPjA8",
  "key36": "2JypyjeSPGUwqi287i6UEjcBtK1QFTGACmDD49UUgF2YmWKjaexXiZ1iTCa2NFj4qzmVLggagQr7cn597tBJqVPv",
  "key37": "4syH23RFsKsxrKpxVHJpbX4DrPKMse5WnveQEWkSRSp81EDpohV9C5UP4k1pXUKYC5TDLeNAuKAzcN5u8eSaR4nn",
  "key38": "3kEA3eeq7LF1b6S4rRRBSRwDyR7zJvfdYhjRFx6JLWigiUj3GcuwPNERaWDuELPLNup3uDvHZCt5RCZE7Zb2rYzW",
  "key39": "4dbS1tH6N9CMNDYmRdNtGD5prrkEeWBcaNCEaMTZhxMcc6hWWPnMdYqMb43ysE8UmrRAFRoy3tWAkuKgirrEMJKq",
  "key40": "2dei59FPvV2Nnfke6tWH4WQHUPEtQPnbjXRuMyXEahedTxomre4bejRF7ikN5zgjPmov1uofPKgKJZHtGFvAqSRM",
  "key41": "3wcyBmnYu5VsPBUysvCcNQNtNeW9DrfCerS6Gq6Few6iRa5unezy9UUTcDZ73JJYnCjq4YkbnWVL8kzcDJwAfifW",
  "key42": "4GmDEHe41uCB5Dxqc5hn3KrBgvqF2ZTqkHQN7BMj3XpqwT7JqpmPgYDUSMC8dz3CzUw4QYerSEpstZWtxwohWXVM",
  "key43": "5kL2siyb1ah82wPq1Z4tSEa5XD1oW21gMWmZum56Gv6933zswLSgSP2eADLr5ejaPyDjf9FcbDHn87sqAt5QPKuG",
  "key44": "52pdv4nG7SDzNyVqkiRtB7evHHcZd3zzVvT5yHJmVM4Cb1gYPTCmyLHAwUQNrt4begLBcTQT9hr2GM99m2cwFJ1u"
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
