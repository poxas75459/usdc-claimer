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
    "rTanuLuQD9QT6xyRfC6VLY3dVXSgQVkLrGHRv2YWJf4PKALqb59qFTyJPmW9d9QZbEZaRPwJ2LdjikdUBsQGhjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oQFrDyPCqQiTfXXRPzDq4fahud9hwGYfDgapMbZmm5JJwNQf2vRmQ12A7TK4dH6gaspZBWV2fXqzGm4Lz666U1s",
  "key1": "2MXx2sFFzyLSxdWfAwXn9neEAomeK6yioiexc41VvfeJX8tB5SSj6W4Yrzayzj3231LV3Hct9XAzRgcvof8jrRY8",
  "key2": "3EufdaVWJebob86cWXFzHkxnMxNPE6ssa6tKhr8TrdUExyqTCLVqHPjcteJV1qY9RADGdYZ2cdDjHfqXXjAFryax",
  "key3": "5ZGgLEii8viNZoDmzsWcUG5SxXuNWZuDQWh3waj4NvFR7uuWBCMavqAdL1U89TuNi8GvV8NKgCgDpjpRmxcaniPg",
  "key4": "3SKfWaXWwoRVoEN3JgcjdjfBCHyHRFVsGHc7dJgKQzLhKz82sK8s2UaAxAW1zRoaeenSc9GboXpowhK4rFoUFPhd",
  "key5": "KEy3zV7vszYYcC6SQnwxXjGT2euvSPwywXwJAdP9veFYnTRQZjCNsWgdqSKLuSYJkueYUA2Xv2vTKpJTEWG21B6",
  "key6": "3fd2BWVdZXdoyS1JCJLCVBfqTk9Da8hch7sotrte4mtS1ryCXHBoWKP7fF3kDP3rAyKZyFvmmKiket9nbizXp6hQ",
  "key7": "5DpXJ4YFMau4tr36BE76Yv8oTtLNCxnEcHGu1nCGCDNcGtZzL1wYyadsSWY9zviSy7hfAK9eg95mz7ZgNp9u72JQ",
  "key8": "4Bv1JWMmzh86AMvCbcWKd2xQYW2Cy5YFH3sPu4FMti7c7RuL3FNPcPrhzu6k6yMuvMFMyLYBA8X3htsxeXXBhinh",
  "key9": "2BdxV6DhxUVHzrTz8UN9a2rocTWRdS2DYPjh8DRFKFiR2aLHty3yyu8AnAGZjTiefivWiGASs2HunaM9HFLcUJCR",
  "key10": "5DwEE7gv1Quvcj4zRhxQe6pjeH3q4eAk7HV3DPKQUVkHRqF8bPaEuPYEUU3AjPTC3ZNjQBcHEa8vGi4UxJc2CcKa",
  "key11": "5FgQ6NpvzEr3ftnKwPT9RWS4bhf3uiZnn7LjFpxPZe8cjmD3cyq8zVV7NVHu24LFLM3Rdb7ibTtGW5KsD6XL36xB",
  "key12": "4isSyrWFRGr9jMhwQNYEq9xKWuVLkPuYnneQPJZmSxRvvrAhWDcC4iokNnwNS59MY5sVZAdq7ogHTQUb74BUKbf8",
  "key13": "5ngYYyQfxqELqQq1KMvuq7BQhfT15xxy18EAkuoUwEMeigpBkT86eYYYTTLHRnHPBDsJgsrPL8txxi9rY7PSDUUf",
  "key14": "E4ESCf6VzRtE1qfGnfmper5RnJY8dQbfmQP19ghy8teRiBhqBF3xaJB5LNZ2BxEasRieppidhsGbBndS6rRt21D",
  "key15": "5U35jaGXr5RS5ZyEAJMdDVukZ3xNr7p1BjaHMbW3ZY1Y5oioXwnwAbTXS5zVjGZ5GMagDXUJ2MYLRu6bYe6vhVhS",
  "key16": "MegV14bJCZDm5bPn7JXAy5HKi2s4MXsZ7WPXtiUEiumGudJF91FkHVAPeru7AvGXS6XN2xUu8JfY1pvLSQE61eq",
  "key17": "455iLRaYM3dErAQcfav9ZQdNDK3oCDE89sLr2eoXnR49zY94QRxDYg1TrCRbxLFZGGx8H7iWdFYww4is2rhFWm7F",
  "key18": "5sMsUkBYHV7mnqbL5iHqKdA62UaFDu4QYJX334nbdkRgpigSGRSQKuYorUxbCoSHz88c6SM9CWzBpN3UpwAFR5yz",
  "key19": "3kejkeubUUBKV5cgqUPBERJiBmDHLGnxiFBZAopvNH2orVwQm7TSzmgiQe9fDsN1eejh7H97mJrVz4gUNuQfMYP6",
  "key20": "2NpqnabkxTM3QCaTc63wBmfs5rpQX8ydV6z5dYRVjkXBYhUsgdHmnrzHzpYDYGe5LBuDctB2GFaNpQdLxgZh1w2N",
  "key21": "37R9WL6LcbBX3acmjDtTFHXsrkiMskqZR3GAQXEPNwvBHeH2HALV4z8FqkpxKQTG7JQ84P3KNV4mewtFTpAxiw2a",
  "key22": "4KMZvdSAaY23Ga9hWLezWXqTMu6JAxF3aDvzBsr1oYKhbR7PfKXWZCU9GUPY4QFs8VtQcViwBdZNhZiKE411G2zo",
  "key23": "42hzDvZbFLRngtTHdkpSzLG3AWQ4xoRgs96mU3vr4pW2Jxmw7SMAsEbs9LDhbDBp3AXgJZmduReeVyJ69ViKFA7",
  "key24": "QYUFsBmqbdVwKg1APDwMPX527NGoSty75wk3MGSAVnxbukdSSZ52UMhDjnGc6yrYGbssucX4YTdBMVuq2YndTUL",
  "key25": "9QkBhXKgE1Ug2WFQFeGWvtvztJgpgbtPBSXbGmyZsBHcevnrA1UdAR8rjtRpagzEvME1GYJEAy6Zg9Fum38ujxo",
  "key26": "2MQGUxpmKkFboL4sDKJGweHaP1Z4eQ65iX8nLZyj7UEeTatMHMT7EydbFFykDQZyFmndRCMeHSMRJaZCcgonv4aQ",
  "key27": "3LBb7PYaCEjngwH5xKdM35rEyRhpjUS2X6gGKePJeRxeL6dTXLSLzgqvfdqyEoQRcChttUnpaDdkq2MsKKB4XotJ",
  "key28": "3hJ9YNXgacrFGwjUiaJcpyUhePwtGd6KjW7ee8Zp4Za3xsMxwi2SmMs1kCLgYCqEXG87kfy4v6WrSViB3UyADepf",
  "key29": "5ZGSTp1hfSBGSo8795CiGJqxV1TUaAQyB2XRgD8u831wK1qBu3gv3wE5Q56JqS6VdwY1rwiudxDbo3yt851qwQM6",
  "key30": "4zswD3YzFuXw7e3veUsHXEo4pKu1ud3UVz6aVEpfhqhVwakKekUbvNLJnZVfhtg4hQ7zQr8iEC65oi3rqLEz1TKT",
  "key31": "5bYB4uR9VF2hyJHHtYmJt4mkcP9yCh9y5voGLtPcTEBmKhJdkTBBvXoyjTTtzmVPk2V3oZxEMCNzrgkR5DE4HwgF",
  "key32": "dmNHqUivNB2vsFCiVgZmm2uBjmAbEjhSgB847pcX1ju4R2VFyv2QpFFnBJdFZ4MgYUWLFWwN1dA88N8C5gbYirJ",
  "key33": "3sPT2nA7q1xqYBvYJz7jQyWeGMKVkwmyJ5vqSTMkK55C3WL64MnMUuoYur17Jxtax6sca154A1pezj7wYZ8ye6dB"
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
