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
    "4BaEXMtGS1QCcYM7h1UEAxVh2roZEF7YLMQwiL5HWp7ebwzLzVrHUf5MuwiNLX4JymYAKo1CcKyDigM1Vg3BYTYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N9DUMqeArD1tdx3w16c9Cyh9bUEQAPR89joLfTo34srrBBMLiTgeQzhuyMZefEeb3Mop2qYdMkoyzFDvGjQfx6s",
  "key1": "2xjCXbJaYnGizG7K3A3eJa1PFgWfcBGdYLQKqQRD56djQoogyKwWJw6xNthrkngk7bZRqkoihfxnonjq31mkwGdr",
  "key2": "3to6WPjqtL6z7fXTk2fXEujRBN8xaW2h15zyVHUEL99dbQTSKgZWUE516iDmQdbFy8F2u8T4yZbDLa9Q9Aj9bjxW",
  "key3": "4MFNHSDm4Cn43Nw1V5EC3p2vHRBRHHC5VafWZHZWeu1A1NRGV8k7zVL8gDY3Hz67nLoVboyw8iS71ednBvXMVVUB",
  "key4": "4Rh6ZTGPEs1GKoLVjogkZgjRyExw38xsSrWgU6C2wFvimPFzwU2EppsmhoSSZ5uVxZHNPnT9hQ9uucdLCoaLLxP2",
  "key5": "5wK14n456jkMwTixhjAtPhVJAUdnpVcy9E2AJFadpbrmzUYygBvtsyASSwViSAYr8gW9A5poGDSx8nspzjhYsJun",
  "key6": "5JoBhLKuVXfsy9DqGby3piTL7aT5cGzDrdrMwCCMR7Ecx5fqxFj9dtDBsc1Q9CrCap4WVtsv5ZKw3DFtfefBqqtX",
  "key7": "5TdXrryodjwTnnj58BWvTa41sQ67GAixt2WARggH52QpCd8uhU8mN5PBZDVevLPrnWhxHxmxEypSmNZiMxt4pzT9",
  "key8": "U8EckGzqtrMoAP9nUWFxz4mdpuSGRDEJxt5oG5YeuLSkPC2CQHvQgmfyQM36x1HoZe4cQdgMaDM6JMfrfxK4KZk",
  "key9": "4BbhdNGV9rzn6b59dJQuhZaYpkWto1A5UDYTLoLWPox3T4GfTJHi8BRm3e3yFvP3GKNKsGZ79oEjUzVpbASwbgb4",
  "key10": "33DBEaHAY8BvdRSDw5Y2mXuUihS1SEFnaJk71z4934X2qQB259fTbNSF7FL9GHG58eUgDYRSozaMyJxcR5GuNZxX",
  "key11": "4Fis4QK5SWMtSoMcZ7fKh4SkimwcYdVY8oJZdsGhyUfLHzrfibqXtGBnNmxbn59mV651oW7R46x9fYJcJ92u7jRP",
  "key12": "57pmVHjimBDkb6HgwubXHZat69nmUFmi2yfMTqPEmyYHgp3hrmTyZ4aEiDsTFZQ6216sK4L9xgo4cZT9Mdm3YyBU",
  "key13": "VroKXXtwZfC31G4tdkuAY7pLiN8ucy12XEhA6ZPgeD4BrUkVBNsshX5jkECxqinfwxKdYDaBvQBvQoDXrMPm6xn",
  "key14": "4e7MWDSwM5LFp5ikBDaPEsEv2jpppjXs3mhHHPdNBqt3Z84XH4QTVPA2QTAFpV5BC3u85e7zACZ5NJ9rz7cdxMNa",
  "key15": "29odbg71fwDW6NSqyVQFnoa59VVK2jCubXmzDXdaccR9rVi3GMzZ8Y7EyymUF3ZwUveU8AzXcJK22HJzDfecRwu6",
  "key16": "4FywCQgcFVCHHkDC2G2QYjQNcojisbaBu4NyWuo3hnMTL1WxnAbrpaS3bZfS2bJ3ymNtdHqgoHTCKKATaK4YSrPM",
  "key17": "3DLoKhWAMvnntcQcUADqpgdgaDHxcvKcdyGrVN2fWBGXxfbWwgR3krh9Bdsy6J9LngEJ6BGzmSTTLPZus44HoD5t",
  "key18": "5ksJPEK3sePd6yvXLbN933dev2xeV5hJoqF623pN4xsWxn5k67nwq3ssGE1TFsujSrJgsYHYa9tGurh9aq9VQ8s9",
  "key19": "ApVwC86kXgk5MaAkRoAcYQUU9ZhCTbitSt9NQKJm5JP1mjW7dJAUMJhNH7Rmc5MqRv3R974QKzxsoqzD3cAS2hi",
  "key20": "4h3tFmQoVQqWGDJZdeSZJ28NreUc3E4fKSkU6Z9sufYZdKuhzoo3N9LGdFCi9nBjqTs1as4pi821gYJu92Ad2fvw",
  "key21": "4WyhEmEJmzhe4NLoKDmF37RnAEZX1xeKs6YpghCkhynYizxowoDGzAGWGAJiUkcy8ikgskx5J1Z68tAoX2b1o4CF",
  "key22": "59EUvuyS2bNSmXLEg28ATQ9mV5dRD8VR831QgRXTTxRN7QfoKyuUXdGQoMSjJnzhXvzpUmnoYY4aSqmgE4qawsAS",
  "key23": "p6eTMxEs8GVd4XcZobwUHqNaqvfAV5FfcMQDRnxtfGeJtBpjtw3zTh3WiKXaJofWKrqwVBBwZH78BHZetqcK8Jn",
  "key24": "4JWsBoHxGvEzwefbTkh7b92jBnwvUhsp5DMgv62T4EkiptDfQP4aHBR4KbJtndnvShhZDk1Ea8M1jRoufJVqWuzq",
  "key25": "3Z3vzNfLAALEhkTZLtpEzpYGk2MnKkD6HD5nw11yaE39NDiu9kHNcHu3zDMARLfr6xmQ1wagQAU7uAbbJ3cL7Wrc",
  "key26": "4VGdsqSgib27tknZ4VEYWuYk9fYUe88azjNrapBYoEjyaCCqzKHZBTfM9rEuo3UNSS3ECzFCtwkmS4czVMo3of2X",
  "key27": "3goTsq32xUbdXoVKcCJmBgxR2jW3wS5GCowc1LanAGuDacsgo5AGSJr9c6GzM4LBSBaNvusjwoHXDAwGN2NWsbEi",
  "key28": "8tUtJz316nALt4rjxN3HxtGWQkMf7WNmn1r1h2tRHJXE3VLXpmQGJsvboGfNKQjyLuHcdMEFZDyNT1EpuBjTZqs",
  "key29": "5ZpP9Jdge24jidpvPTZEEwWHJtLnbve7Q6QAUk32XPFVRWFJ2G31AiWVoyiPsNiwYeaTbAAWHW6f8pj7G46xCM8R"
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
