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
    "fqMvtZrXaLTxCLuTYJJ6YXE2EGcwppR6uLUvf3Ho9LBeoJmsqGPPNuvi5EfdQZ9tqbmrMdj9mKDeYY9fmN7xm2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Sb5nMMAgT7N6Enszbt3qzhxftzTbU9EuMcFDx2aCQk7ujECM14rcwUes5BfdpuSLj1qTHZpfKSsgQoL1ogX8oi",
  "key1": "HMHSXvsp8uufNyFBqKu5PLt8VWubzNCd53Tf6SjzLkacAyv1CVyP7tM6M6ENLKkSnCKkyAE8A65wRV6MP8XuwXM",
  "key2": "3aAR1Lr1r5bEoGX8L147QG8Bbqwq3RYNW5wMcMuvuEqSQqXMfv4D3TvRZy7WzjwCVNDnCMtRQix25EbWPuUHTgqb",
  "key3": "4G5dUFMsnKKG7oDwv157LraPhF4FXBQwScBpmu1C9Ef394XsxUGKbftMaVkGNQrraXwzaScXAZusrkz5L2a56F6G",
  "key4": "4uEZcRihMEVA1vZF8us6szcyMPw5623zjtz2M6Qipgozxxum6eNJbKdGFm7aZqHYqCsnR7rGLhN5V9Dbxn6yksh6",
  "key5": "5VGd6CnjB8MGeZuD9sNP7yk97q3ZfyiGP73wq1p1DzLWjZcm2y6iWUPaTycWSvLsuHEaF2LERc2GnGdysqpYnsLT",
  "key6": "4j2Ao87rPn2oQeCreMEFHsGyiLjY2wBcfHHUm8ois9WWu9hinQe2cLbUhFHW73CGMx44ASwTmkVX89bJGeK1oxpG",
  "key7": "5YsEspvtMUjfgY2bYbeDvJewAjXKjLuCZvg3h6y9YhLaiD79xgjL4qQDoer59vwgcjESDCH5mrLTvAiQYGP8Gure",
  "key8": "622S6cEtzXidN1nKrFBChDnqmUy1bUYks93437d1XeBvdBDU4rsWthZU6apSTV5VWtufBmxYR2z8YCz8fEhxx6BJ",
  "key9": "5j5vsWKFLrm4bpt7diKnmExf9gMLKy81L16h5LxxzCvsX6ipQ5mC9xCnpmJefGkuat7VQMNWiuw7eN7YbkQK5Bf3",
  "key10": "3JorJknSLqWWzpfusA6W5HqhVMk2XgR7j2qLsJQ2ogRm25iXqoVojPVqtDZcJ4ZZLsBUvgM6MEFy8mjjtHsUWRkS",
  "key11": "5Rz7mtsufBq41VLASM85Aj9o71rNyGrFD51gvg68jh5fzCYFS14fi9Xk9mkpYU5b82RNzgUHmcFUvKVrK7LpPqgn",
  "key12": "31B3xWBUCPUtZWdo8o13EBwb9mqJPvXNoQcoqNr3j7MkeXbD1DtfiXgvXn5Y95zrEtGH6HzyL9LKbWiPZEArNSCk",
  "key13": "XvsgYd4YTEgWTcKhQsX99REQEfmXbXtyJrQPh1bq5G14vtRT4FYPcwBRUPsxegmXXS8oLa3cHdea3dxBSFM6kW5",
  "key14": "36JFmSSMsbiyjLLVWyNhMLPJAbthA7v6QbNXqTsRDMu7N6TJQFQe7xeYi9kobqDRB2Y54q2dBmSirpwAEPuoF2o6",
  "key15": "RYDPK3wt6oNvuqchNjUiYvMeGme6HbZfHSTS4c73NiHyRfLAZQthBh41Ja5TRipKqgeKjiEFD5X3jmJdgEAg6PW",
  "key16": "JjwKi5bwb55VUJhCZM5fTQjUbTWzWycd18Tm519xtCECenSaQZaqWUaUP9FVmz55CQTU3gWifC2res8uWoH9QdU",
  "key17": "3HaNwiNFwP8xP2sCBQP5kHYVWxXw7sr1DiNeDtEcDuV2B7LEyD1eFEL6a17mANsc6nzfZLgwSjcx84sFrF2Ybj6W",
  "key18": "5e4oZuGjQcUAieHBs5U54hKq6gsDPxmEJgWwdZfmBdzujS4cGSEGDqP6Ba8wCqc5YE8ZVpLdf8JHVmWnt5GmhuBA",
  "key19": "2MMcMRdY3a9SAFNHPsAHUwF2bi6KtD4B185tQFSJq3EBeZE5FycFgxrvrG2agZo5HHBpv6KDsMbnHYkx8xAK72Zf",
  "key20": "bq25Ea2TaQcVuJYQVfCj2WvAS8opkoMEqbjz5V7y5wMuaNUADEd4p2Cw4KxytDaqZVrZppt9Qrxq6KcwjR8QhiC",
  "key21": "Qfo6CQKbBM9wy57GoF652Kt3FhwkscqxhAUq91kUQWWFDVxwryRSeBgceATBcRPwieYRNX78wkdTw6AFRWoGt54",
  "key22": "3U5hpLwE3Ava78ueGV8huCLA5FthKJhy3KF2ABugjvs5GJ2jq31D6kZRLpQh56cCzwk6JvEvL8sApV3L8XBhJScW",
  "key23": "4qR5rDFY28cwbcvRSq79bMLLxgYppyFpuJgmLo9Hs3zV5LfibeqAayAm5idiz3FvURfYdq6EsUW2YL585Hmhh9Qd",
  "key24": "3T78DJ3X5UGnc9mN5HYcymarocv1oJQGto2NY52xWjL8VqTjgLtStkBCHmgqspYXA63uYvHAk6MXXBa8VgHf6unf",
  "key25": "23DnR8AvEVH56Ew22cWFijsEK8nBhz7KWZ4YpVxHdHNXwwRh3DTJUmE3rPLYeeG6pPJ7Dnen2TPy4VHPR1BvqGVy",
  "key26": "8fLQUdJugNkaUgfHNzJCqTi93PUqw5SKHsfoX5Ch2NtnFWmvnLfRPzYepNT2bvUvLqGYGu3hRHdFZ2uMzkYZF6E",
  "key27": "54xdHyM4co6nti3joXci17KYbDEjpxJCKHeSQMRc31EUXiCr8qbznr1zUsYKruf42NhCWHRWtU5ZYkmdLVoWg7UN",
  "key28": "5ftqmn6a5yP4WVB54NAASX4Nbww9hHqwgRYtpRxo1AZ5mNwmYKdQjojBFjtV8VSFS13xPULZyGrHre6aJtVvmkX7",
  "key29": "3mD9ADHHR6fHbLWHAMUKwuVMEf629GaxS1vRzo6s244opaFJMZYg8kweeo18LTFCxMLgDjPACJPDbVE2j1igUMqz",
  "key30": "4E7oqKSvQQUEBXHBz2JKgKWS5CjdoREeAxiEcJCZDYumQ6JtHUCouqdJnVpSMcgsaaBvJHzA1BxvK7q52bhnnNvg",
  "key31": "NqWuDJZ2t6RHauDuQy71XEC9trsFg9BpztcdZBtow3DinRRAdPx1ovc8gPBGxUXrcpwvi9Wmd1WBV6EEzeDGxbg",
  "key32": "SHHs55MRZbsX8HhVMz6wPmeDhJD8NTXWrUQuSnBes4sKMmiv7iLjyW7yYWC5XnRnXjfeXJpBUqwgboeujBe3fuu",
  "key33": "5C1VGNDMhsiXGS9v2ZhfKMAoLcu3NmwsctNH3t4bq6rKAV231jTqCVBWmvgqUBz3xHEW4Ubx8WMTg4fG5jHfhQfH",
  "key34": "3cAXKzMEdFBQDfDdVdHsKXCB6vHy1StkP2hNbxNFmsaRHkLJLuep6CdQyW2eEjX3XJHDD6PwtjfQHTovbEE3LavX",
  "key35": "32rZ8fi7JVdpxWDU2WwiS5w1MbWhyUQaTRfgwvmbpWzBdzXaY45bvPXhiFonBSHSG6h6t9SjA8wrMsAwX4FL1eW5",
  "key36": "3SA9a1VrEMQFKxdsm1HADBVNEYt49mw2une3aseqVssrNXLUqyxZKnB3AYPUqn4u5z46XBWp4sJjK5fNbZK8imZu",
  "key37": "68gBvqgr2YGRCp93a12wNfdKdmM67UgHZXLAcRPrQga7rBmZD595m1nAucMxmf8NFYCanDBkS9x6PcxM74ANcbm"
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
