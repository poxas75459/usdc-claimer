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
    "4dRRHxahQRj5EgtwKPGNaePF8xTLfKCJyZTY1kUh5Hy8Vw7YaPzkpbm8FN57WKJtvCoeL5a3EtzFB4MhjN2N4bt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XBGdXNtmTwV1uYDaggKwWTyhZGUhzBDb3NWxk7kcMKyFQ8L7u6Whz8M4fkPTyxyTuutQ436ketbzdS6s1ka584t",
  "key1": "TRAr7UWfreC82XFXgnq9zJWusswdiH8vDdmN7NnADMhaiERsDTqHNk6Y9vFDyr5isTfjV6PuX39dLdfrv9JKajk",
  "key2": "jdr1AXEg7bTkXrjyXPWrXLW89KM5LDhtbECb9LRhTeswThWgahdqSJ3X95tpjaytz4WXBpWBeC3PxwNyZXxBZ4w",
  "key3": "2oFMUkYz5Gsog4Vveu764baPep2aCGTZa46xaGzW7itD8eSCRmF5ot3qoz28jhWCqzU5nELrffZocxE9atts98B5",
  "key4": "2Uyx9wX3CD6BHbrYz9vUSxDzTHFJXAVPyHfmCC6VmsvtWMuCQKk2ugDWf2fvdEUmyDBmV3k1QKdksrJnatc14G3Z",
  "key5": "4hT3DbGTygFTXMeqcPnMjhHXu4A7umXsAWTktEPNzjw2KSxC9t3bEdZjmhoACsjWwPwyb4xhwd59rwu45HJi2qcK",
  "key6": "2ncDFjA42AHM3jego5JgFXhfp2AoDTj2wxBxqqJATYjfYwTxXuSeJrqNYbyQ4yyE3Sib5nueCie1kzU5aXU1cZHr",
  "key7": "3BKhburidocTJs9MvZMF7ZLypikit54KZ27T8BvgSVYVhZ7xctwU8RYmHf3eKP5jruoy6XGNySw7LDSEsaHjj3EZ",
  "key8": "4fGK6aJ9e8hiUYTrRFuaVkCLn3ig1qPvpELsJEG2nM5JocD7vU58LNYexNXUcG7qf31wGmiL2iZEZoDPN64PzYRB",
  "key9": "4EoWRAuUs3KKNT1NDgt2JuqKhwCEZNwDCGpRvnV2xaktPfhzKxd9TeYv9jdfLxXQeB4WaSQWDpM1h2krz6CdVLuH",
  "key10": "2zpPZ3CU5PTnkXp8xSzQ8XnZW4x6WpWvdson2VbpRF4La3zL4x3gYg4ju8ufdt3XasK6hrKKVU88SmQgqiKoGQYT",
  "key11": "4yBSCJQq3ed4Z9EA616yS4R2tQWGCpaf7DuDZ2TJPvAooMRvqpeM7JHcVwbfZNfQovPkHxiyrdsiYGiYrYBuSeY8",
  "key12": "5us8g28X6XHjmkgvvXXoKVNCMpuAmTVjith2EvimZD4JCUVSrpHfmjat5LKKvkFqzSQAqTzKQrucCJNFkKBKF7YE",
  "key13": "4i6RiZZqx3qB8EEsXn3eM5dcx1nTCApF3x9krACnbdDdzNkHXkmJFCTfjdDBb4Kvt8bmteTatkMusTifqFAcBx5h",
  "key14": "3XvoUwDBqnDNwn2ttPT4CT3pzXMCDfn3Nyjnr4gGg5Z3PN4YWDEWk5YoV7pjZ2sLjgPwac9Z87wUe9VMvf79yKBM",
  "key15": "3cFYfhxh38hVAF1RRMGdpbEUCLnDTpBoSVxjLotfPDUW68HvsFPbz3XUDBxeeYJjuykcCYFQ7xAvqYSTo7LxpPtN",
  "key16": "5s7PDyeeyGZv4F8JMufoHEFeD7hHkuhAWroSA72aAuMJRyx3j3M7RDfkK6LV4U3XAhHNWsdzv71o6xc2GCqVuH5T",
  "key17": "25q2fMh1erRq7ng6sE7qYANFPDDwx6N4XrjmFAhoSrBrE9p5rWwVh6XfFjpuskDg6j1jabru1X8cvzGxsDR2dGCe",
  "key18": "3mqu94DLzb54qEbAuu2eWpHthwHUbXjVV9ipG27faXhxwTxLpnAmdo5N4j26eZbXuFjcKc8cZBSU5GKVpqSN28Ya",
  "key19": "2ewRMnAx3w26FtBymeea7C8RdxAPovM7bjSHyhgntMGRJi16shd3uojMewoqBUKKf1cCa61CZm2jF1bZ7wcbHGeD",
  "key20": "5KLrg5FZCTY9dz3yVTN3gMczVVDNgjRL35JYPrKwkxAcnRhexubnwQfiarz2A6oK4nuCS2aMFCXLGmrhcF9twB3Q",
  "key21": "tY2GaneEuwG26SQ7YqVVZoR7jQGppizQ7VmG19D2rDqbV6BqdPieYWeGzPZhFSvhJZACdisdR3Da14FfSbUdRhK",
  "key22": "44m1LQSawPSHTAaoph5JykSWmRoNSbNMoKStGP7sw5mWJhTjZTbCeRwwQhAuBKVehQVvQzXMTZdBXSTua3ev3geC",
  "key23": "3ZPRwSduPdLveUJ6e8aYQyg1WtaZWEHeVCHj7xMx5YyinEBH2fRsMSp1ytagErqgqbMcrMYAa4JE5JtGQeLewTmr",
  "key24": "5Bfyegr5eWLGFxq9HeuthaDxaJrJR1xxWwFJ26Tfukujfzvcjzp4iNGxZTGPT2iwN2G5EfndCjmwSkzAUGaKV3q1",
  "key25": "33MwoJd7ZWhVf6XvRd4CkPHjzxRPNqfbznKY7Pvrsd5sUGmacYFsns3VLvmLkwmQuMEj1PM6dixkQbg33zpoMUuL",
  "key26": "2Yct9u5tppnXT3fjbtuHeGb34nUgHSfTEfvZ37E9KaaehV28a8rePfHyQEkRPfWkeZPR5NLxEA71Adc8gsdgsEh",
  "key27": "3FSx2QCY8gvJJRrzvRX4zmpcR5UUZeYKk4zkJcDqZ9sHs47s8vCLPLGTMXhF5SazZTLje8jAuLJkVQZLCsGZzQ6J",
  "key28": "2k5LqKP5CCcBXJ7mVWnMNHXa1Rd4jy9CjZy6ymBcQPpvHkq92piwi4pYRq3Fng1tntLRj6AtN58xQW8QEEW6mKWB",
  "key29": "5nE8c5DodYBLKkrcuNK8XEKpkuGx2o1La9q9RW5usu1Puh8XF5Ay9QaTD4nRD3t5x1BEae4frKJE9nvKFB7LCEqD",
  "key30": "5HXEnasf1gD1CfxKJzEkPRTRcSC4vb4WG2oF8NKn3kVinKdK9BAR6qJmnDmzC1o8duZfDiK1tZLNwW5BjXF7NGVn",
  "key31": "5aVtnXDK4QCA1qUbufV2EKg9mc1DsHcaovvNjiLwSpu9ku9u9fGkR3RHFGxvceypAtAszr9nSfHPysLwJhYzZAE5"
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
