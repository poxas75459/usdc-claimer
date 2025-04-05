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
    "66PVro8UEZXPuno9MANV2X9suHrGvZHJt5bBhWKToAUHWHYqTvxD9tddSsB4vDuJMVThfQzyQWEEkLxeSgiT5XBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5waotKprPWVCRmhj88AC1HZVP7pfAt3A5ZsWMHZgeTZShg3bZbdgXSK7D1NczimF3zdbuquRCZ1sG3eP3MhLNEk7",
  "key1": "3eSUtjrsphnoRLukDKrM7RYhdv7hGU4ZWZzTdDYALeGmNqW4Zw3ZtkQt7QjTLxBb35LDC7DtZZETgkUbw5H3NAG5",
  "key2": "2rnfeFURHV1CjEc2wd5BMQHq2132r3rWea7FMxcp1MWaHbjFJmTF4de4CFBLjkwxsoxC39XA9QoYC474UD2XGRvd",
  "key3": "4yiVGBtUjdXU7aznqZmSUVPeBdkVic4t35XrMRpFyWnjZp4M6v8TWTJNt8ZbixhE1H4JdJZAZTenhtUj7DXkLtZQ",
  "key4": "3aRWQAhDnb5jqnQQfnxHi7zboCBGZfUzzc7k6abnKp9k1GfhL21XLcZHCtSdZNwqKqePSaTvuJKCogkBcq66SeR7",
  "key5": "YNAzABnC38iawN1JQ6p96eH4oZgaqANKxShTg9i7KAUwauKEwzTNaNnivMmvdQajuvv6uboYTHnabKFVxpUSib6",
  "key6": "4NtjtNjzPDmrbcPdReXtduz8VVNNsTtqV6nrWoyYEihnuiR4jZcJ7AAg1DMemXNausk18SRr17mBsjcLKr5EtDjs",
  "key7": "67qGdQgYpBg8zoGL5gdxVbYm1NYpsNun89WqYR1iQiBG1syZVRQWTRFVupJz7sBfvGyqMMij8NYDg9ZgfquwiebZ",
  "key8": "2HtNw3aRNEB65RuTJqepnKAwqAHwAqTEq51GTz5zBpuM817L3JLXuvzSFtNWzXupxYYsKf9sQcu4K7NUVQk8U3x9",
  "key9": "3upspHgCB52sPRUcjwoZ5nBu2mPidv7oc1mHzknsMi9qc4aUeMVtz6tuM5FBfkRCJbugySxvn5SuJyqgvExMN2dv",
  "key10": "47hXLbvytBoKNjCpC9Hw1eGau3e9JyvLZGHzLXZiMJpZQrSTGmq7ofvfC4RRN7XJgsazysJorzqRkRjvJiEzTsND",
  "key11": "5hvkxmd3r7RkgrFQ23iuquqv7XwDfD8pHYLu51r2KAYzwP1WA4hKutabgB8HfqHbscD6WzN6FnivbefkEzG9go7S",
  "key12": "5kFjPE6Ba7zWqgkxWfkhhRjentm4Kx9piy7n5rRT34pdV6BT63JpKaEhdCCvYDeV6o2az9QfRJk8oVng1hxg3BFV",
  "key13": "j3mxmhPLGEzQhKPFmq6xeL668iKbcJ8sqYqME9QBajxUaaUc2iLNXqchybyt8AJaA2zw2UrN7F3cherDMCgcfuA",
  "key14": "jxmBNxE7pa7K986FGnTen1qqapmCd466z3xjhxrc35RXB4ii7YvVVzT8MN4CFAZrbEgP4znjx4GCwiwrEZDHDmn",
  "key15": "hNmnfiHB8zwCLfH5doD37ddHkE2BHZZo7q6dnUFviYdoffVfuARPpeteSxuH9ayirAxG3YDNDT6kjShgkFkJQxR",
  "key16": "WAudRLb9wzsx9oYGRaUAV3jTwjTpkxKApW49JDEGbckHSj1tqHpwSMuRjeejBwRmhATWr2xt37Kvu8mhPW5T9is",
  "key17": "2dHJCYThsU7vEsfaNmFar1PFq1ZrmZ1g8mYV8s6HKjG1Mqw3hgjyYVYy97ULSmXhfc1SxsiwBA93agGooSYQYd1w",
  "key18": "CyTETAFmdfPxXn2eiBvburv5dcTBr8mZA92oE2FeCFJDEEvDURrbnDmsPuvbA58JufiSocgbLKBa3HVujFa7B4A",
  "key19": "5WKApQKyJALtQLd3oUHNseyCmXeH8ujP4cvwwTJnbr6baeQWtNeL5yzC8psmZ3oe52huqcy52v3sdzFjK1ukLShw",
  "key20": "jsE5N7uxdVnG8JFR5N63LESdvHjADYPV5noSM1cJ84UfkUSyRjohP94tMTPQKaJGTQLYVRCp26nEgqmk53SnnSx",
  "key21": "51YLvg4RWmYAiqmELTpjNSxu8GtjWobWMFb1QwJWhrrUDvT2xh7jQY4qMyugBpQJ6RM8D145kuXQLzBHqKj31YTQ",
  "key22": "sJ8JuWfbWBcf33rusgKAxxJbHPaYGb9vN9d8aUbsHGFYoLcHWFr2Hk7WaNvNWqwMQZFJxjgxhrfjxqiZfLfvG1E",
  "key23": "3WW6yy616Edgra4EknQwVVDAHEJEJNxAMGKb4KD1jh8re9JmrgHfvZ1NQmo4WFxTTC9K5VXvSTNofusqS2rgPSG8",
  "key24": "5NwHuqYWXQ4LeVVqy6dwvFrFKxPh3h9Zjpe97tXiGP4xvdY2SFzwrxfVAJYvZ2zVMe9tm3Hzz6rFqYJNSnUYRLEj",
  "key25": "65U2JbVAfXMDWAst71BgH2i1GTsZAkaMZW2RgA2ARuq4iWCZwwZGcbCJAj7NpCrcAXHLtZvBMzoAH5epPieedXhe",
  "key26": "2AnsfPbYsFXfemFmPevuV8jF7RT6Z5y8MSaepRFjGX1GnqtsDkSVtQy1guzBXzRKg1ZdB4ZAFBKaXgJMjuMcc9ZU",
  "key27": "3FbV5Ftkx1jqs5DiXxUpkKVeLhy7TtnVDmsTfmgdetBpCJyRHp7zHUrex4ZTGzSDLG5Fo4QwcMZWubAycU5rmDbw",
  "key28": "5qUUK1BJyZosYYkwpfHu7hTWthJcikD7wT46zXMoyguyvmoDZ7jLueVGi6Gn9ngjP6zj2r1h7xEBbUzSVXpEZ7Mg",
  "key29": "5qRevPuUF6db4TyRwaMuXedX7SUytybxwFiE8DJJVajhJYqEdHc8UswBDkXG9x9BreNzVdpWtCdLb6RWDSuQFQxb",
  "key30": "5tAZpudia9mk9xSL5AaKQotHZ3eyVjDHSwqUKHQp6ZB18o8odMaGFimxxVmQLhJ8yPbye2wCQzYQwAoLRTH99qxR",
  "key31": "2pCkMJ6bkDZ9EHSqksvyvcCGBEMW81QVCQUgfTiLuoSZZXZvnJJGf5o5qUBo9LGnK9j2guHRZxfht2j2xcecmYFq",
  "key32": "3WynLKcHQ5o8epoEAMtWd7TMNhiAUYoPJ1cGXcuWf6fp9mLNdpf5joxiNVaXVdr15sc3M56YsNczWhrJ2kBakjNf"
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
