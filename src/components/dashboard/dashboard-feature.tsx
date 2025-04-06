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
    "2cFJfybVtx53wm2SSUEb6wBkDfqUADwEyWGTMUwUE4oazncb6YJ4NPw4SnVeSNzV958KvoyXv8Wbs4vBMBPJ1GBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EtCKyRoNZAzPLpa5Qg7sz27vZBfQarcsMZg1HSMFmXt8fkL1NKi5YPtTtqZJARCarqKRHuD9QW1gw3bKHZdDAqD",
  "key1": "3BPh5WENt14kaKfw73ZR94KaG8SPec8j6hxsLpT9ahPF28yqQf93oW8m9XDuvcvbhDicPiwcLjYxFARcBY8cjKPM",
  "key2": "2Aa26GnFruWNuDg6LeXN9m9UHgamzLucUdEXh5AGRZHD3iZBKYvHHeQQc9yNZwCSoDTbCaLLDBDNtKchVKqEGX8g",
  "key3": "f83BceSgCPySuNPS9pdMizCTpet6KaLasQm1hSgxC8tpnxrZmHMSJxCjC8KxZhyBitVJYxZ1ALvtsMwsUzvzPwL",
  "key4": "5TN36guYSDPX4RiUWvMk5iyCqtHQRaYUEbwcubwREdBum8dyFWNaTfSeSbZ2iF2wmnvGLuAYnJRVVtrm6u7CvjYc",
  "key5": "2w8AFTGjX2wyZiJoC9Mwh1uJnAPSK36JeVUorVZhFuzSJ3E23qDAK7jvK2D191XigZQPyuuB1Z5bZJtR38YdqpTq",
  "key6": "3NR5xqkyTxxXUT5JXs1rZ4ifnaNyKNeKwHt69DmEMMT39bD9zvFcYPi4d844yViNySbWo3GPKh8LxKPd3UnqDR5M",
  "key7": "4ghjkNrc6n2k2VyHtYJjj1A4Bs7mbKuCbVdXzoqDVBybL8uFpejpJbcdvm651gSJrK92fez7nrA5yyw7ET75assq",
  "key8": "2KeXrBQ1i2pKqpMb8XCSRqikbW5eBSzdoUcWd6rjsx27pyfKbwakTHnB2Sa7xXTXxZXSKXjBRJFCLGv5PKWYDPeC",
  "key9": "32N4gfrCc8ACpE6FBSCYMqi2LDaJ35RYqpW21LmR8dk593zDTdzd5j8zBjoHPozpeiLXFKwdU1m5TvjukwMH9emv",
  "key10": "3gsiDKugWKQ8Z1QL5v4wARXWKktJckT92unnNf5PdY4P9yiBbz5D3bFLgtCXcHqhJcWerWcbT1PvWM9kjBenozLh",
  "key11": "64qNjqz6N5EZYC1cSB2tJ5Y3FxUbqNX97BRVu5cCi6C7TPtcN71TmXomSxvbX6C9PFvj4eF8RYjh696ndTqXQGxx",
  "key12": "3hRwYjvxCr3ubG9cMtrAVvdDYz6xabzdeuvxTeThK6oKuEUv1xx432UXnNu3gDZ4eud66tvMofmWBaUojcRuCPzF",
  "key13": "asoBpZ3BeWnWJWfuL3yWJXXMPjBZfbXzSat3c5ZKzxL8huShwtYQ96hgEhCwGYswc5zBBn4MXLxo148dHosDoim",
  "key14": "4XAwPsdkTAAaUcpnkWiJcMjyqUHqSJ3bvrz5SbGEvo93ufVg2azT3YPNbogXvGqPdkoFCzwv13cYhhsDexZNshyH",
  "key15": "2e1EKkuoa1iMU7VjSWRrhd7LLcishySqbWBziR8G3uYZ4RU1uoS7CmKLtAwSkh6YTsFdypFdyM6oWoAe8yD23D6r",
  "key16": "3qjEs4sUFVVzgoRLar9o75igGuEuhH1uHqQiQvpajmy3sKdiKxrgnZyeN8GSbrNNFCcjvWnt8dgtzmynkdbQnN3k",
  "key17": "4NLRvkNRqnWAtE2UbjLFUVJi26B66Lr32LZMctTp5ky7MCSxiFCvvxr2SbynouWBUqSF3dG4h3Fcoq7BooMSYX72",
  "key18": "4FMYj9HBXrPfUqMijKZVsqz7HbUDEFwqNyCazPEjLTrDF71mDQqh2NG1iuC7wz4mPbdksiUcZwYLuDKoEZYbum32",
  "key19": "h9VpuL5FyPMoiAQQsHWBYjkyARcxQU52jcQk1CEixtW6Yo8W1m8d8W2Es4cnHXAkwPdsLz947XPyaYLMtMhzUhb",
  "key20": "2Aq3a6RVH2DZdmwygRXATEubYY2Di4bRpD3qFwBJpKXvrDV9XaZz4G8ADPeXM8o6mD2b544EW2fH9c3n2JnthAeE",
  "key21": "zfvpT6GktHhHZQEEGjz5eJmohw58LcrVQALyGaNSUqKB8XQLgVQcPshKVoZA6QQfHZfDyD2GuGQZwuQRt6UiWR3",
  "key22": "3u2qJjmsTufEDh52j5SZuFh9iAJQQhpbE58aXHSmATCXgFy6MeV9L8ZZPMYMUJJUAoqZRaERANABoeDFgAxBBWAD",
  "key23": "2kNdDZigfcD9SAu1pdgh68qNMN1Hvwq2xNGs1NvxYwGmiVTWxbPGapbjV2qmj8UzSK4TmB7MiBEzYjGx9PgFK9qo",
  "key24": "28kvDuaxMKcFbbMve3ewKxTZTQc3Chgb9FVw75h99xUidn9KzgJGp2pTeguoW9jQYF1dEGQU16wrKtRBCa1aPMwH",
  "key25": "3oWHvNPiKPYfCFZreDGeLuW6gCwMFcGi4VfCoqmhqF1fciTYTbz1qMepZNuDC1bvuiCvPb42ngPNLyxYHJLYxuyj",
  "key26": "wSfF6XspMFGA1btYR7bc1skNBnQdNxQmrvMnwdmdYocxggMidVpGDr3yys6Pg2xm8Ad2GAF9hVzh5N2TnmyQwNJ",
  "key27": "8JJTpo5gzvjtkTREMFQ3VifQCRqyvB3ZZVDLAa51cw7BnzUmzSiXV93EfzCTMwuCp8TtBNMwwn61cS2PLuqnZn8",
  "key28": "3NqFArub8ST1ENfKnv1Nh3T4ns2wnpwX35Ze7ChGed2fJJWVizfksBre4xptMPusshWUAeEyCDpS8mdd8ZtjHB3U",
  "key29": "5yiKxy9FbcTtzrSaBaM3aQ4AGwMNhV84rjnKMP1pnmhmHDMk54mbE5n7PPX6yEeZBqRkcSq9R1MwoAq36uz3ZdTi",
  "key30": "395n1hDmL5MVj7vQeFBTY1QXEaw7AxeMcT76qZyqgdnaUyinXscAJRQuXLTZSMhAqC3PW5pmqg6uN2f4FjjVH3p4",
  "key31": "45Rj3JvYvFDbnG3CHg2ZHcRqmSYUjrNiFftufsFbL9YtnHAZ4fVJ9U6ucdZtmU8rgATRdAiRSA6mSqniDPE4nhMn"
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
