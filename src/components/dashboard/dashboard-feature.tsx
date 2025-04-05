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
    "3siYje36nm9cRj4SjHcVeeBciiH1H74ZiJ4wkyaoqfzHmFkDSpA41BK5hfRJ1FeLkpVPbxKd8QtKSjvAw3gTtWQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33rj17oKGG5Z3GvTWTRZJk16mmjXuKdekQk3zbm2bJ89kv7UBUe8Rcpy4cwk9sSxjvHKfg7FB7zC8y2FjAnyDzwr",
  "key1": "3UHKxCpy9pjtSK3KEPsk5Gt38kn5usUXtoZzwWG7hdYPcWTdzB8Q3QoPHttDKx1img9nEhXDVeL4TgPygbWr8uga",
  "key2": "5wUthrjQWkxZKiSBogkBZbWcvEkjZ5p2T4M2CkpNnsbE3P1WgaPUaSWKbThbiwdJWWvvEg8rq9dYMb88UNdhhHzq",
  "key3": "2ZThAAk73CfaEJvmdxWz4LLWt36Jfe19ukuQYdKF9AKM1er89G67vnRZL4VpgTnoKNovBES9nCGZ1AgRjfgTNMym",
  "key4": "56DYgmDH1mjNmEnE4DasckcMEEXJpQfiEuhWXgP7vyQXhd9ZJftZA7AKxAUHrcQG4zwQf7EaPUyTZiEA5ewCw2hS",
  "key5": "4sqho8QuefRfaiYbyNttfgE89nPMHbdaPev1PH9YRg6MVRiZbDNok21f9pHNJFcEcdn9qsnJL1jnXRp4gzCQsfmA",
  "key6": "5AiQauvK39sgs7gq6vZbnUa8woHBqecEm1xnoZnyyGH5WowuszncaqkN3t1RiPYCWPNdbkMtjVQZDjYTiLRpsbvb",
  "key7": "q1NWHv4iuGgBQXxeHY35WCUb5fiwVstiBwxxJdackG6Zory7DJW9A45BUcQUn1ZVdsZTnRuMVaTG7q9z5cVr2Ad",
  "key8": "3MT4V1F5VTwq4YMe5iLKkV1snj5nD1xneqqkaVhhnBRnidW13mQNrU4WCGbq7gv2xXHQhJghtW1WZ8X94x3ySZR3",
  "key9": "3cdoLYthtCufXVdDBz2JSTbnDauttB6kuKq1b9BNAgrKSM8XBYKPCEP942xiE8dtCS7KBccFsgVz9XVwptKPWnyB",
  "key10": "61qnzQh1mUmBGRccUuudbmAUo5jFWqoeTWfyg6AURnVmnTaRg8KS3DMgeNfkPDmLckSub9cmCPTVsXVLjSBcMu5r",
  "key11": "2sREanQ4vXRNxzwPKGtf1XJ4WEmFrWfRdiWLJ3P7cYNqbV7jmcCheMX52LAYCzscXdiYv7hhWn4DvSKXoqxqf3Mh",
  "key12": "4tc434Kqk12UhBjGs4Ukr4zE5Tm6z2YJGcLvrXZfpoaiBSRqXLCzQJDsKp3TDXiLT9KZQpYmDPtn1pBuRJVWfyVB",
  "key13": "Su7zLuWkrgzcnwztySHZMhHvtErbm6JQBaWUXrfDqy7zmGgAkBGUiAXM76T6kjXmn59VzZbYrZPh2qUa16Gak1c",
  "key14": "2thMxsh5B6AdVLNp4GfQairUD4Yxv8VFQP8hBuRpqjXpiWhut8nS6esv3tiLHonGUdnuqUuXrSrfvSgjjjhuG9hg",
  "key15": "5GMiss31KweGBy64s2KYvPjWdHKGQ2j8SQr8XK6DxxayMdUyrDVTamohz6ZL3xvQgiVagfYTLHpiMz1v8jCbZKkU",
  "key16": "2PbBPWWA65KCPzYj7wyb7fgFZS8pimd8DGV5GE85Wz9WVddehfW6w5qJiN9QekvF9DKXDtUzvygvh6pqJiFpH6rm",
  "key17": "bHdffynkbqCH6beNrBU2y73DYCjPauHCpTj735dCV1tZirAzs86vayieJkYg87TNTyKdg3jmyywD36W8VZQBDhQ",
  "key18": "TECRhtbaNg2y8q8aVB1T3jWCdHn4EM5svbcoP4ireHn228J2otLzkAVYzmF7eXpyvMsvRTNhBDszfwuMcNQRr3z",
  "key19": "58ajepKYuagxBAGzBRhaE9Wyj9oxDXfjun5Jycr6HmNWmYpvciwiUUrcc5Lu6J9UrZpkBgsdoxTMSRFfP2M8s7cH",
  "key20": "5EKmyuRGRj23gSrWcco5Jd2RNeJzQgjELaPgAzi4AjET6JU48ko1J8kkvqWCV3pgftdxkYuWwwtJ4TpvJhZaSYJH",
  "key21": "sXS2fGg1LGmw4CeUV3WR3mREpoy7ZxP4iyiC7xTbSEYswgt3cGbq7gbdkJQqtgby3u8ZxE1BY84dh1QBAoJS6SK",
  "key22": "479MN2ndevoEezehb84UkzKhCvFsmgEZrP1YR2iLfPPJLPX3gh1MrDsj3a8ND6hETAwmNtnkRsBy15M1ue4iUdXk",
  "key23": "2oQngBrh7zyrLZXzEg9YvCvZdaSH4PRifQWrouuka5Lo1e4CYx6Cj29NxYFa7YCiGjgZeYtaYAVPZPJ3sVEjjA7h",
  "key24": "464qLG6LoSEdtgsSb6Vd1frgrvo4RbRimoAQfHULquVS7wUpZkPoLxJa7v67SxLT8PZGTuG1Ut94ZvvYLmGt1jy2",
  "key25": "WnhdKKZbPqXM2LcYXJS5TsU8GvGPdZ2HyHocmtUPVQJqeV5w7aycR6kzXjSQh3ArptHQPuVp2kRUinUNSKxqN6b",
  "key26": "62aWSAjPHNGkBENjuPTATi7c6GqaDaVJkHXc9NNSHMSwMCHqvkbJ2vdRNxrsQacNU4qZWLqkkTgiFZUXazTqDpkk",
  "key27": "5S9MwQZ6Jk1FezgmXPGFHtvX2yqxCfHZNp1ZtEbw2d7dwwfW6si6EQ6jCPw6yXHEnUb9e3n7fZBQmMuKDmoAm3a7"
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
