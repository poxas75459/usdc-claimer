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
    "Y8vpCfjmXd12qVZbivP8ctuYQSySv28E8vhMDf3x5av4LCK5AVddPYmZPPjcN6PuEQSLLPFpvEuQmsoNds25Mat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33ocw2Dbr6BNdZjPnJv194cGefFgygUijPwdvM4qCXnKFjaniRwqXQrzceWZFKgm1vv7Fj6V2GsnaXBAEHnpcbER",
  "key1": "4vjCY8v5ewQUf2ZpPjaL3G3aqyVPwSswFfDo7VbPtFG977HZVtawpMD4oqmsdc9ce5CJrypZYAYwT4KzrkfAqWM4",
  "key2": "21gHR3ZiQsyu9aC42tWnfwuuBQ89Ghu5hX583HJjqVJQfn37gTAS1ddYvFrvM8LKDozKELKBtSzBsrY9gQUFdF88",
  "key3": "4Py1BKQBJxi4kwjeN28Ly8ZKgBa4o62k2pcpE8pFVjeBRhhJfPeqabFHYEbbfr8SHwbHaeqhswMwDYfbPsRN7HE1",
  "key4": "5hCG59fMqVzzcifzrVsUJXjhRbLFLcMaQ8j4VP5CDtf6BpjxRxXXw7U2Tka1aHBwwQxXaHTcemUq32AtdEcmSezK",
  "key5": "4LevDPscYEsTVbS3qZUgFoHDabRHemEKMbnNKhqRnqUQnYHS3tLwGRx4pY6ZL5MJAYDLVDBN6cBpYpSP63Wj8UB2",
  "key6": "4cxjsJUPkCNMnwczda4ECTmsVMWDSjwToqwCewcKj53oCpFMbnkFcToFpcEzpV5myVTqyKJU87ocTw5oeKGiNCD9",
  "key7": "5SgWhB3fVPcFYufWTPD8DPZVGqGPuPNpLci6C17Fhp7qUJzaTMWNsQvqWT4s6fwn6QovNRi561pCfYotV1U3C3Xe",
  "key8": "5RabADHsfkhcJtuj1nxYiY3faLo4aotD2Pg5tWVF31rqdQT7eqUj68s7LDCneVm5Dr9jTgyG2jwPFq49RMaLi7A1",
  "key9": "4ryLjLHrNMeQojvfWS9QMhG5ZG3PWvNTEz95Bz9CYH7Zmtv53Z5VeRVpc6H3pwHM9MPUnk5AUdgNru9djnfJjSqD",
  "key10": "wEPSzYeehfesAw81V7VSNhW1kKL4RjZM241GSyPEVJbh9QY9SMmoAJUindhmZweYNWe1zk5viYKFQgPfmX5LrWo",
  "key11": "2uuMbRsHPmMRDdaA9mnhLPbbfMGLzFQxAn3Q2NSzYRdFpvfrpYa2RcXjuvpXeFLuzUBr5wWBSNwsqTW3VZAwnczs",
  "key12": "4RBCpYzJ4k8xXSi8dV3gdjHnMsSXNtWzA9DYHrt1hCDRijL5DrrrPDg7R7rr59QRz7Gc5Kpokh4t9Cm19J4Gqs7t",
  "key13": "34dJzj8Yc9ndbgogFfrwmwzLD6zDqATgDHEXqGdAYZk9ZhbXY1evqm886eXhQh6x6dcybDJWzCHyD4RNJQGSj4vG",
  "key14": "2oeZDjsRsbt7951asVvH8fCYzPrW2nt8qFHvMqxQybX5LEc9NmPKPdcHo23EB7cXevypCKAW3qtywSPMDWKVvYXC",
  "key15": "3omEMuHZPSDQ7J9BCbgUkzyUDDXrrj4Fm3ekdZoDhYWcXDMbM6iYQEfQ356Q77ha9hYeDqX3nV1a7wJK3hMXFEWx",
  "key16": "4PyUMqM5GyEZnb7b4j66KWE9bvgtp36gTHNUaJXDW46RnEvceGWCTa1X73N7RM6FB6KKMRZf7Te1NSeXNiPPtfKw",
  "key17": "sSEZZbo3eesFhpSvG4yNvPCvphGdNKisF69gdNZrmZqQyWuL3sxxyZPZiK4LPADEcpbzxNb1Y2vD2XHtJtGfAsC",
  "key18": "4ebRZyuMBCvuTxwKspbyCLq9sV6tZ7cRQpWN6vWyUzNmR8g4hsszK2d6DiXpCJ5ajGDi4nM8jbXPEpGS1p4YW85u",
  "key19": "2hdn1wTAefiWthRy2dXEVYEeDoA6kykteYYLVBLmh4Apu1g6hdDWQt7wawKm37g4f2TUurUfsazmR4re6YARKGsP",
  "key20": "2MZu9hVdWsJNVAZjYwwTwPGqPcVH6oFGUmDrHJjNph4hjiir8vaBZ3Bk2va291jsC4kjsu8MKzD45yH5y2KrRg2z",
  "key21": "3w3Ngp4gTFwsRUw33acADym2fCnbUeCx6cTNpnfQmbf1kddvGRnSsTw86TrxyugaCsCjYQX2bvj9MWSJznFVznAw",
  "key22": "2KZr9aHuHiBesNE8vyrbu5QRYxjMnH4nbEbDe35xw5sJD5JigHGXkPux3G3yJSHQg99DawNQ2vCQJdBZpHiJbLxc",
  "key23": "3ySM7qgw59VXenYwNnW28eXcgqJfimQSUZYuyKsW9rXSmxY585MwHSfpcEbmaTP55sNxJCK6vvr68YCtQBPeMzfs",
  "key24": "4kq3arZ1HQd3xg2L6xYDFGta72R3WnReZM5w156vizgfLpeiWj1esT3vF8HFrneP3LGoZSw5Zu9Y2kMZt9PGvopz",
  "key25": "2xpz8JfqZd5RiWAmNaQKRhgKt5BszLpwj9mKRmMtvRLvME7eNdf7fnpXuVCTbwLveFxKZC6dSAjFHSkSfgwzEHCB"
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
