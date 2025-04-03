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
    "3TTtqGquGRjmTSPqG69vntB4BhpzxpeGx6UaJiWbjXd8qgNyeUKTyJf2vERHyYLxf2AqrRcQMxcqx6uZ9Ab5c1qh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oQR3oncgxqjJ8AKGar4KS5yreSMdRhCCW13XhTzK4NSKx4euePmXvbhS3jSTbJcCZT2vsNh3Y2cBREVgvsGc4bs",
  "key1": "2n5neCCRVBzhdjPotbeTJ6RMbpxRi8JgwxDa5McjMMynhGfiHrB2uuF3zNd7V8Y3YnaeScDoVnR46tqisBSKtBfW",
  "key2": "3LXV5VEYZ5gkitK5ygLJ8QtRNms5ZQHGCZZagB3w9U1XevAs1EAfPz6tdjp29qJn5K4XmqskRdsz9gphrJDGtF7c",
  "key3": "4hmXvGvfPzDD3h4Ske6V98hhmvY6xZQjdSLBFTyKWp3JYjGZXmDLaJgw5f1L8ofpbTNzKkXWQwPSKx93m76oTbMN",
  "key4": "4K4pj5eu1yFPCiaaEEdds6wmwmJaYqmhPcVL9DAo69W2D53XZa5cHu7oVsgo8tUBQXzv1n5WaZiyi86Y793b2nGv",
  "key5": "5xNUtZZYigFVD3pTg3DEoRu2vncGGBYjTekvXJZCuB14ArhCyEcneH88WA1WxMYSz6wQfH24FspNQrQDrugfr2n1",
  "key6": "3vMmx5euzobfi9EhWjcwYRVfHuKedKdr4xbzDx1pHyCskK3zx531hTE2XVzU622hbc7XgezKhRx3CWgj6TUKWPoc",
  "key7": "4SELZXDGfxUNykdJkJsMCb4MidKTViw2N9WWb9bjFKh6dAMGfrWkKd4n7y9yTA1N7kPtwi2yDTGVu1aM2xNakd7i",
  "key8": "v4zHdVZXgjWxynsh78ZwHJiNjB2ByZ9b5N4Xz9ffCzu7qqRqEKJjVLAuqu65BP2u1JJN8xpJTJUhtjT1faBE12N",
  "key9": "5jcnKGSeHERofBNvTjPyZbuNcQyQj3cw6kshDRwg5XGB9f8mGaLunQrBjwGCV1dg34SoR9i7X2bTibStYnizMjkz",
  "key10": "5w4i2LNMPxN68AfF7WfMBbjw36sSbZrqfMDZvLgGNZUBJhjYT2L37GHeAZ8ZdUyhVo96DJHL3kNe3iCQPUruZb1L",
  "key11": "4rQYMGNMG8C99bxop9FujsCbhmRwZUY7HpnNm81YTStdjrhyDBcZmrUYM7VJjiGmkg3cZ4Qp1Rwp1xQ1UYJrdVii",
  "key12": "5w8ZsyRjrke2f8FStE3aQtq1k7iUkVYB1ZkdXdXoRpBKkpieoBBKCPkc1dfasWG2TizNwNfP8DqfRy1mbLJ3HoQv",
  "key13": "5F7iueYxUqDCBu7aJBQcSJxGdNSaQUtBAVmQNAWUbuNG5h6A6nX6MPRfivibMSEdKzX5wcmDUiR6dAZRBsm1mcvk",
  "key14": "QH8pkFXLz8oENVAa5VHo9tw4mUj8q1SMAfHvbMvjY8H7Jw2pauKQaUjxV5Nzo4kMQXnYR7aSjHkfQWx2Y1LYizS",
  "key15": "5WZ9NfT99dA1hcUFmsxtrkxkHGSNk1ZQxb9Ve8xFw8x1deZqmvHqaf7iHnzdXVxaPepyxfxBZm9qUjTPQp5X315g",
  "key16": "3WTEMkQ6c3aFBGePnRTG6usKDB9DtoNrf7zQfvYxhvxAbF9UHnyeaFeoq4CWL7tRU5cvwfRdraGBTeYHWQJZwQiv",
  "key17": "5v7q71EQo8eN5DX5LQCZyKs1rS58tTC47YLo126GqAM4dhSnnZgKA4doUtQxsvZJP1Axw4KRULLZs6nFnb5Qa1Th",
  "key18": "kVTvQcoejiLm4ihYBQKUWJGJzwU83Bazcvbh3oTkr8DwtLa2NSnRnvBefBT4zckVjguv4u3W7zikHodfcPpYiU6",
  "key19": "3T6gRbX76p6rQ9ymKjhVrC7ZKtXpoBWuZbeW5MqyySdbMPEMUka3ezBJwgoVz1hc9X6tNyz89PoB1xQLSm4xGfyw",
  "key20": "5iNb1ZjhejpAtBadQG9zp2WQ7c7Hh1foyEXcuiZBiJg4w8Ew6cr4ZW8iBL7eqPLWmLPyPqVgEDHiv5cYdfgHkUpT",
  "key21": "m2ErNxBZjHocZRN5krEAd2wjK9TJGxo1dAxYw47DPyFW1PTwK3Zsh2SSP2ytp63HtS9KEt3WyJyP6QHnfYi4BxB",
  "key22": "43DXMB9GuQm2cddQohzbhq6iUqqKgeZ3wDV3LdSmxec6GQcG5AfX2Y1JuR7G89ZUfjPVRaTDWGPAFJpXESKrwSTk",
  "key23": "5FfoqPqRAyazQ7u4dF8muTf2EfProuPVBUhf6KHKJmUEUgtL1HdhkfA7qytQY4f1YEKMvtEqzfYH9FMxyTNv1MgT",
  "key24": "28siavFeqUsyraAv5oxwj8GHsTcDxXR7x7XvovBvoWsP8u7J6ovYJf3yke4HG4tbCEXSzTBMz4GjDLx7GojtRaP1",
  "key25": "3BcmK78ox5Emkpd3m4h2E7F5J9NZHoyMBy9rbhp7ARXvxa9gvF7Bp1ca8vKiXyTbjjGLP7aNCcvW1aTNEm3Z513z",
  "key26": "496tERHyVHc1xKsV7XTLQHiAQPD5QyA1a4ug8dwp85eCuBTCpUX55c54CqdKR1musVLdjibpo1f1dhPswYWudVzY",
  "key27": "3zkxsisN4DDJXmH7RwoHxhrRyW6K41w8ozFKzRhpnTuMGRAkVVdt6BghQDJDASjJwwYBHVwXNoUbZfqKVgWwrDbq",
  "key28": "2VNEHEx9ik2YoxzfYBU6DzAZmMnE9hBZYnNFAoSQsMTGf3NR7UjpUk79JRAA3qTJcURXz2EwVpPeQ77DTxVG7Xu",
  "key29": "2QLBfn6EX36wxAwVr6DQwc8mv1fANNrefwtKsEm8pEv5hc8yF9NyihpQWidpPLeiriMubrRXMFjHoPufEP3tHjU8",
  "key30": "4TMezamupMDnCKsUdkrHowPoggND9XBYRiRjtUZGtbztLKF69qLWC2gbCxVe7NnN2RYkhBnDKh49V9qbkX4rSvoH",
  "key31": "2rkXdY3yigYQgwxhT1yStvVrePSkLgitT8Z39NrXd2LWUWNHTRNGfcupCMXCcceDGULoTCzEXRunMh4M1vZbVsc5",
  "key32": "511CB7ip8tkaQBoGfVdKQHcS3nPJBT36NvUTCEvoM4ngGKTUc1j7EnQgUc64D9uHDmWK74ZKtcGpxEn76kkFzE2g",
  "key33": "2QpMatwqJEV4yqsB2LATy6rWhnng3GGv7qtfxAMNzjz463uwitoMDWtdzzKse97q9sQXpR5wSiY2mrAQdgrxJmSP",
  "key34": "3PomForhTjVbNankaPxjfDSkHBoFETd8g4zsg47DFyABEqYxZ4HvkAYx2MS676RLDgQfgoriHX34Lhkoqrij2LYo"
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
