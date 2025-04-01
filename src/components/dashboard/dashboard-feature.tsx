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
    "361EYjqgxLUrzQt4nAPBrAYXSukF7Ncpd33DVTKVRCJV9A7JR7wWrNqFdq8Q3fomsw1w1CzYjaXGVCKTEY7yLuzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fzohV9nFspriusXkh6jmG8rbZFAXQ83hj5HQEWzE6hszKdwKykoWATFrv8qbmzaMibWgCWYo6r7Rcfd5fwqqLgY",
  "key1": "5VZPYfAAM7NYvWvFqMDnQkrwfGugytabVYR7aAEcEcU8D5o415skCht5P1i8QrnzAtx2XTgKxwDDgoiWZE9Fh2Bc",
  "key2": "j6G9tMGFeR4XzRiH2LCkkoAUV7pfQtMf3o9TQjtA4S6Y8m6DYgBzrCYm1TQNTjH7pwfDNy7NnVfSYpEqqaGM2tj",
  "key3": "3RnxJZhSGvsg32zguC5WhnnTvYQuo66z7n86FiPWBznigpA2f9y3Do2qbTLMmbtsQMEbEabgUBWTg7ufqgjokcq1",
  "key4": "2kP845kuG1csX9ZFutEhiDMM1SnnQ9zD3DSA6vvTrcBnQtrc37hrGAqXzSvNsq9pAzqseYtGK67uZjL1U9oyJXfZ",
  "key5": "5mWdvEVGyeq2VeerJCxMKkUast3Gykjn3azYBtFxbsy5zQTALX1QjtXfF26SLzzn1qhAT3xGKT16iBkvijJ5cLLW",
  "key6": "4dWqaJbE2wrGhLBjkdU3t4WNw3B7BZimovkZrK8oH5t2VpAHPGzzeAuSQT6AvkQNaLjR99VPfUVZejQyTb6nKzuR",
  "key7": "5ruL67m1Ab4wA2pkVq4Epx7iwe4cbPuctvSNz6eKJdp5xS4cyZSb1ou6hnViGRrz9J2X6GfXngFQcUYSx4x48LbF",
  "key8": "3AfoczjhwafNC78EYYaPi7DJNohxcZvmxEELEB785QJEyo3Wt4MsT3ueFreGQtHwTQtN48KfzSoWbiWmt9chUK2m",
  "key9": "4eGqCPESY93LcedEuPzZ4nuCPrSD4GisnbTH3MCA9ktTdSKppGnpno55nJquiWaqKNmRxsc4FeTt1EwYuRsdDsyw",
  "key10": "41AAZCMY5R5jq4djFKJQtnthJgc3cUF3KhUTXudgswdxuQ4X8GDhdeS7DEBqmvN76VCazpUWeT9ffshZmDwy6eoT",
  "key11": "4hFqWedoq22sCRoYLt9kP69tvPFf9KsReARSLRufnVnqhLF9Pa5jiCmZkBdyD5TKdwJFiAruRXH5BWwnLFK9YSMM",
  "key12": "2uiDHqExuDks8795oU7E8D6Y1ZW3fNpKDkJc3maVNnaHGMKvfSAAcESKxA9ueFXyeRxGHpfuR2aZPxXQWAwEemPA",
  "key13": "2jx9o6bohAec7zgZSj9HTktQu5DYY8C48o8XYv8mjQ7SQTGzTmykeZnC1i8rVURdjAtKZGsDbgwc3FNMoffCa6eN",
  "key14": "5JfjEWR6kkmrSehdgrAdUWbbHXnmqmnrGhn8UyMAxbf8oYgTzfUfHgWoRe6DDmAdwjaVpnmDCPzsSavAigor6rEa",
  "key15": "Evsx6JLZimzCqBZ8haneQvwmUp9Jyx41uDa1c8y8PRr6R2MB9yda2B6NK42HeCpTza776sSkd2XbxVosuQCQXeU",
  "key16": "5fDNX8qUPYspeQMbsUzYK2Bo98ugQhUY35CL6abbjEQPF1n6QyAreszkeW7PKgpQXmbHx1QMKtyqiVAyktZeGMXn",
  "key17": "35Jj1yZbgaxky5wLZ56yumTipfnooHJY28THML1tySm6RoC7iwT68oEoLY7w4GzedCoCkwLqJyaNDhwoLNsfg6ju",
  "key18": "4CN75PoCymJZixmhtn1UYxAZAzb2ap3d7smrTDRexUGGdrhzttz8kS4K7Q85a9LBFnycLwVMUG78Jt7LdXTqed2q",
  "key19": "uES6hhqXn6NDcuRxvWN2e8zCZnNX9nnRN75PXcfvLddAmbXjQrTEbz2BCiWkA6eUjZRUbYJkkjfqFMJLxpztMhM",
  "key20": "45sCudJCgoUUAxbbRonU3vRG53ktJzrUQA7bNG32YAt93xsgKx4Evh1NpDRWRXFJZEPMmvSPeAQkKeUu9Wxokrx7",
  "key21": "saLXiUmw1s179mTc4xWcQCwnbPctA68gyRfPaDoAD52hM7wcEqDQFKng5gD5KsMkzx9mAMwEso5NTAahRo78QxH",
  "key22": "4fy7XVdFsLPjQtD3Fat85KP1tksVAnVobFD4W6Y3tEz1qDwKhU9f3hByRZDoAtbejtpEH1XvNLFpqQK1tePNo8E9",
  "key23": "5YNxog6KqiB3NnKhA3etFUnHrATvGgjv6hs32U5T9yKAPvwaWcYhxoBC3ExB7ZRf69tke9PLcUDYfCQ82zAGu1vG",
  "key24": "6571c8VaxgvfDqANaWepmU9us8WzjF3jMY3j6FkEaawccQrsT7EJ59HrZU1PEnjZcNSK9UuKwQVZcZrVgy1tJgPK",
  "key25": "3wUub1BJACx7bva8GKWgRJ4bYEFYLEbS2w7QVotKnw3NqMcNkVaU8SATLp6kHq5afDEkKAVcdmeY8UDEjds5CXwA",
  "key26": "2zVWKQsdFUsvfNCguMQ3FersVcwbS1CgxYddKNpyHRzXZTe1RVfAxTajYYTVWJNBD1MzbHTHTDXYNeknpJ81e6np",
  "key27": "jVqpYRaC5xdjQo5GtVvBmFdU8oQtPaguqXUF9d1RJLziKFuuFRf2Ds8dF1urB3zAtEuHLcdhxTuJJzxHSN6mZuc",
  "key28": "hXveGvUWBoeNhVSgHXjt2DrJr4v4pTQRmqFJ4b88jbWbyXLAA9xXGqv6XvZRsd11fRrsqHh5EYwkaBgQFd2SJ3L",
  "key29": "519WXKJR8NFsnmEHyGzjBz9ziDV5kN6qx58vpi4WcTqER3bBbJzYPb857vWbkjcMXR66UtujFCVAaApNExeuMJSP",
  "key30": "2Mj9eyLX99mnjcecByYMdi3JQ3RabDfaCr5AnAhSKXW8LfeiynAkf2JQUQ7eXNSR9WFVKCGhWba9xCqMuzN43iMi"
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
