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
    "47ysoLqgqGuVDQ1Xx9xaHA3ar5gPDGQQp5NLAFkwMhLs3AZZavFjYTc2jqHvissFxsCfA7zeQVqJGsFBBuTJPv6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qAFLWXkjCTQFcMPYMh4ozm3gDwrqeCKKB8TkdzoBwrcS1gsNRXVAVjQ1qgHeXADouEpxcQjAQYyrDZjdb7Fcbo9",
  "key1": "2yiT3uGU5HjLr6MxCbbjYWdL3VQXHei4xZb8hfgcyC4A4yD28P5RJhMbYR9AZ2noo2kHpyubG1DV3hqwZBvZ6iZX",
  "key2": "2svrkwPXCNsWAPVVRV7PdnTSvj74QLdkyne13h7d9kDFRktsSwGL8kyCzqc3soWomkhQk1vFCiHG56XjvJUnoFDv",
  "key3": "5vu1ttYuu8MKAzx3rgyE9Yrp7ujNqTFmhS3KpSue3tXK4UNBy7Me51uKSkuJsCyHx7Vet722EXcfVz6w1QCz8j7X",
  "key4": "37aPjY5qG5xXhPCgh3G1h1JSNn24SLxvrq6dDEyY4aytM8d2TTxQeBTXR6acCNSc6KcxKENkHugsauGtTFUE1fVj",
  "key5": "5v96FmrNt7x456gDYuqDoudcrLRbMji28iJUdv2gddHtSKCXD2eaL4ibBATSLC46L83A5M36Zfnder8kzE6itRJ7",
  "key6": "294aqhsGKhwbvbdcvY3w3vijn8YWmMaASd1kDwui3z3gmzwoPTpqzkeRPyKBw9jPPGFE1M9EiUX5McuxmckcS9iA",
  "key7": "3KT2zdiUDrkRN3D7GtLva7qYkF7KNnHohR2uvHFfR23818TjTeyLfLu9EKvwUKuoMYEfEgKXGEGkjvfS22LvQs3B",
  "key8": "4tk68UU6ovEcP21oPSk6zzcSowr4tfsxYpTnnNARiLdMLTZ6A7gwgywhbedzgzWFv16FL26rHU1sUhWYqLoG4A8c",
  "key9": "39iRwYhMpUZuYeCtWWCvhqA2pbGLp4KHYbm4Gxn3VkSHyGNHHsjyzWSbQUU5gc58sgBBr23yJbXSsXRg1qCYoVQe",
  "key10": "5Nu6sVWAEGYQPd4GsueVAun7QUuoJEjYhqZ25PE7zM1rx3t2NVvpYhGNVTwuMf79DEjfZ2KRWq1yGu8vQM5NKUuv",
  "key11": "DtXnvHKNRnBVCeaFAK3CFuC4p9xk6wrYLPDw495bFsvaK8QeYfFJdmBYBfZAZtyd5DBRUC2RH17x63Mx6tQmpp4",
  "key12": "2tiesRBz9L1igjjCTA4xsWNikyXvANfDJPVASbKiV3B2Crp6GGQZ29YUqVLnFRvpQ3FWH6Wim9tyf6d87QaCGzWG",
  "key13": "5xLmFbPN8XnKp3mS8KLLoW2yqFDB5jJDJWpYtQouhpdnrJPP2BgRyUjnQ9xnCth43uRm6hoG5jXPjgtfjiYhzfwe",
  "key14": "5LocBSatMUsQ72RKLv6gpvT9TzH6RHCMLmZ9eNMpZHFwDkNsqP92wrxVRAE8pUWgCWAKDLzecD5yVFTxLKuoox4r",
  "key15": "q3WXq6nMMjtcF9b5LXDzZzPbEEtvZfHM4XhVp44jvh4UcBA3NbmLyHHtNtCf8Pvy6Ukk9xeidTYMUjTabbaXZxm",
  "key16": "391sff3jCoGo55Vh4Zfh93EuahJJwmWL6tH4HiT4fwWbw3x1TfHDvLt9L4GmzuE5UjCSpaUfnGZtDvZUquBMGhJN",
  "key17": "57cPDUv19QmGHqMxi1szcwqDcJP89waziDdWgJipL49RSXc7sqiTz2wKhqcQHVf2g6E2Fe4cF7RPhS4qcyHkHLRK",
  "key18": "2bP5zu5EgDMa1sgofGZTkm2qabwfbUHnCeKA7xJdyZXfUU4AYugZhm7xacRUSXMKeAwTN6UWQhx8Z1uSCFkGgnT3",
  "key19": "4x45x79SfTmaVujjHj5eHgXZEsmLFrLjrzfMYrCi1oxGKHCwYfxLUZoTLN7dGRXkGi1RgwZPat6gBPfwVaJGFKT4",
  "key20": "3Rrhw8NzyeFn1dqZQRA64K626ukorz7U4SEoqenCftgjyp9tPWg1K36GZizaif4yXpWXUs5z7CjpPb3WRAiDfFEY",
  "key21": "AxsUphupKBh4C9NPbXsahpRsFgXtY21rDeJHiwsDtx2zamiFkTJZNJwtEMLUBsFdnS2GZ4LZ55ZRNFLkvUyaLF8",
  "key22": "2mdb9p1MTjR1sP6bNfe5TsmFJ6RRfw3oLENbX2CRJZ6uRBWUHdhNwKSHVrFa8coBsoqRHsGwD3wj3SP9QPtf7xbM",
  "key23": "3j4kEddVBhFMPbdxX1TTnozEovjvVMubDGw5SEWmZsq22s7cR5cXUtDhoPQiJSGX8fKPDwwAA9gXYGZYP79Nj3Ci",
  "key24": "2c4uR29tEVv6yTyQVT7Tvh5YJd5UM5wJZVHMemZWLjkBbcAbmKpe8gcmSaMVqyCSPuuQVewDw6KKfBuC1mz4ESuK",
  "key25": "2TaaAEPBGwWm6ZqfJKgapvDcbNcU7dsEprCe1KAin85Qo4NgENUxBSnD2tMhy4boTMmyPogr4xNr5ma6pRsacU8Z",
  "key26": "56Kxe5icCAv7wuwa2rmu7bPsrZkPiVriyxKMXoSCPLY24yU9SArwRsQnwkYdcsLpWR1xp69L5JcfjJS927YuZMUE",
  "key27": "5R7bnGAsfu8PXvuPvrxgwA1BLsDfXkqxR3mNb2NkEkyiiEZn8dSJHn5HryJTjhaeu3w7vNGKLy7hXo6DmDej4Rwp",
  "key28": "3DZze2nyrzt6gwNmh2qVUjrePLrhrHBBRRVTRY31HU3N6EZT5GHRtYBpThf2Su18G9tE6PTo7k7hN9Pc3LqBhKuE",
  "key29": "4aXhHWVxnLRQWvUhhWL5kuvFRguiNbkX44jWo3URDjXaiMtzDHT8Q6ECJ7mcWWx27wsdEizRpHcZhbnWnRYHgTGX",
  "key30": "2X66BBjvJkkunYhRMQMHkmHfxPnxJ7awmHHnvwctXXvHw2oe1GAUrMYhXr393CTqBs2JRH2js3y2QR4VJZi7Rdbo",
  "key31": "2DQnFsz6nTHYnTDrkbsgy5FupUDyV9XaCQWtBwDoUs9xLhRdQLEjGBPsPjN1r738SxkxDwe7Phf5hSCnF7SNtqxA",
  "key32": "4hqQA1P3TJtmPVnWAT8UNHzhpF7vhKiuTfHoZbtM6KU21oEeab2wGz7JEsdPYfUFYwJz93HRYAwr2B5dg1MA8q8V",
  "key33": "2jGv3SfvpHq5MEsr1a8JRzwAL8LNgkG6XABkG3Qss3AZ1XXDWYvaEkYDdTDFBVWdvRD6jo6ifdxp4L4KkhLhrmvb",
  "key34": "7WwbBF69MKC5KZ5btWzYJRDQfUQugstVeAERAz7iT43etycRBUyU6PktZ9k4FXVwejRVUZyHEorJ4mgBYwpLtAy",
  "key35": "4Xx6uDcVAaS5tiRganDEhHwC43PTpFGd2F7syPkb2cUKFHt6gB42jUAD3gub6XMfmUd1CaQGFyjq7pu2gDiiu6WJ",
  "key36": "5krru9co8gachmByoW2o78NLVo9JZJEb5nHjC2K2H6VrLpssRYxXaoDZ47z4d6BZmyX3jwMCShoKfpiAmuixZFUs",
  "key37": "92wERuCus1sEGPU7922evk2fhahWfHRby4euWY4iiSdBYqzpG4DRFoWUTsf1uW37yPz2Hjs2N7QEL2tpBFm3ufo",
  "key38": "4Dj4JdpztT61rjLuSmumEEKXUsptWwP569f9wNhJYhHzV32n4DrVDERBhcgWiGxTFrAqWF1qDNEvgcQoCkUtNmC",
  "key39": "4YLynGyEZ42xRUQkJwhzhBKLa99G6NGSdWK8jtLDYJYj82swM3UvGiLov4G3DYWn3FPgnvXSMDTRwPcPggTB7YTv"
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
