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
    "fh2g1rHH6axUUTVraCBHqEVM7ysZjihnUG27f7o3u8zEu8E5PEHQeitpC85DsggMx1tn7JQK1dwuGmpqRuC8DKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TZW2Vn4fUbgn4fCkafhc6yBCCNFTgFzpJ8Z5pEz1xyj5yKjJwN6384wNeG9yFboCpDyyUF1ifGhwVA9m64EPBCa",
  "key1": "5E1JthGExG2Fsv1Ph3bAAFMh1p8a1HwXNjssafjmnifNMfTiYUJRcyavBU7tfAwpTWEYLuFMywgvp7j66Uy8TK4k",
  "key2": "2RTZuVb5RL4HJzY4b8HtV8YtsReRYQ3bKjEnah2zvrq17yH59x81ygVKTsQxrrhp9WvsdDMTbe6n7NS6JfR6JTZx",
  "key3": "3ghzg2MQ4ZhwiZNRxeGP3XSS9M44vUXhvowhaEaZvNWX7zapZiWoX9X91uRpmwjqU8vHUNrn2kthDjLTnCCg5n9Y",
  "key4": "2sCkpSJiseNEkeH4km9F9sKwESJgu1bPWkHhFNGPThvQrjg1FfQ7kheb8fuZW1yFvD4paBRi8XbxVNporbxmvFbL",
  "key5": "v3LTQDxDcp91S8wdCYSYL7343krZtTgYcfRyaW1U5RFGKmwYcbfn9fsukesNFVSkX6mnD22EVYqRRsPo6fECDVY",
  "key6": "3WRqTfMnUptq5PpFS57AwDfdCtwJaeitfgJRZcbBnex7oVdTbqcEkKXF3Qw4LtvBvzp4Wtz5nkozFkf4JomPkqUp",
  "key7": "311GzBAkGaoS32iVV4uZZQ1wmD9AX5CevVFsZDybf6xUaY8xd8WJmxDrstmmQbReEwPq9MwB2a5YtxRNxPKCE8wu",
  "key8": "49B5NvS4pA6pn9Gs76PAesMsjp1NNJ52AKAQ2diBCT2VdBK6ymovgk9vu8nw719pceZo3ns4pzFgqbXcnYoETBcm",
  "key9": "4DQxTgRrCtuTzCQedjtdxSe7MVcNok55A66KPJQMj8xYxRgx1r6A3LQuErRL84hJF2tCYRkdqUWSRVbSegWSCbFV",
  "key10": "oeaSTX2smssEtui1tBvavAyhfHUQisLWiTryWKAr5JLjbsxfcAfn9hMSatS4kGyrH8EXa9jEuq7frfsiGXQnrnD",
  "key11": "iLbHe5omh6ZVjDfzxKPAEi5VkBaLdy51vNLpj5GxBsMh1PTZ8n39f29w3zknovmiLjsCaukf59XpHLSzAAj4sRB",
  "key12": "2XZsXLEmgeasBcPXCnSXu1FTvSYgCLYSuGd7S1eKCRijZoLmuiX92eeiBDgaWvFae73XPjuR7ps9fohHcpZ5ffmK",
  "key13": "4eB3NNAxRKSQnjnBa5YdVFqpHVnZyoR5U4nxCZeKp828EVdbou6VQeQ5DaSmjf7ePuzuwuooLtf2MHEiMftdmR1V",
  "key14": "5oEKnxkYqtMxZzjMa56tqwPtitG7NuGq1arQdDSNqwcsfWzT129c8YLRr5uUoMqEjxwkpSAGVza4btxSDHxXo7hs",
  "key15": "2eoyfmWSMGaFmGrpSLiJNCG4LQLbn34Gs1Nq1AM3sECH6YKqwAQG1HiULQmhwd1tCnzJz7qPJ2UcJa5eR8Vvbryf",
  "key16": "5JLhE8TA4Dxra44FdXp65wLiMEkVzA2pigXej5kBw9Ksbyhw5VM1NzrAYtryJVx5iSZ6Pv8mYnLuQziz45Gy6jDW",
  "key17": "46wFVZjQrYpzPJgK3eMGzynZwQ3WTB1mjo5dkY1dqqw4F51LKaog9TkDKzWh2Ga3ZQjSDHVNtckeCUa1gmyEbcRJ",
  "key18": "54ZVUEgEQR5LXoxUjAcNs36Wvrjj6krzgztBpJM569uUooY97unT5GgnFyaVZXB2AttcGRCZfD9ejtxYVshPicPM",
  "key19": "4kKP43iEeQ2QSxFs7CUWFa846XnqXJMCX5Z6xo1TttMXd6zrh71g8xW5GeGk7iKVHXczZP4GqbvVy52Jopq9D2cL",
  "key20": "3WvFFMkVedede359dLiHeTvbLgLaBF9qso79aUP4imDBoNKnCos1xRMXWiSRzrsdGtpvqerbJwJZJ9Y9oeJCj2Yx",
  "key21": "5eH85gnvhJHQej4L8aiRN2wEcNPiRSXCS7a23UbuJPqLKvuwtZRsHayctZGPVYKKh2ZK8yRZjk3G93jF1mq4ywfe",
  "key22": "411vMYD7pWwnBm6yW8eMTX29WraXXq7KoGsx9XKYK62k2uxHnBmH7qofxwEK4SpCV2C5jCojgUVXqPDFHc5nfUVv",
  "key23": "38Ehq7QZQqBqoFNhhAnsJ1tFDYjsgufBGKGtnyRULrSkkpvx1P9dz2BSiyAaavEZKCr7Yv5PjApdLe3dka9Sr8Cc",
  "key24": "4cRv6mqUAYMssZ2o3QioC6uPaTzCP21JWCf5Q6FFTEU17zWRRUVo2WDMj9juQDQTLJmLE52MG1b5Jm3ESKPEWBUL",
  "key25": "aDx1N6JAfqMRXHwtCUH3k3izbafqcdvYNDiFSDe1Ns1K4SkY6TFup8JP651fRuhQQcaENG2GdknmiPwEXXzaeS3",
  "key26": "3x7H2jAYfeLXoMhtM3TW3eqch1bZ9Z7dUTp2EinoE9G3CvJZNRaZt1Ycac3Xc9jKP5GBVJVw3HNJZ9h4FEEu3jDM",
  "key27": "5rghTG9N6ATkheKn4LFa3UDB7RyhQJ8if92ELGphLihmk3tAzmWoGu8B9JKGhRa2fjfNPEtXidTDrY2ZhNZJJELF",
  "key28": "5xqaqt13DQqJbkDZc9U5PBsYDVf7R6uqm7qp7G5ALBAzx7JB4NpzhbhF7iKAnnpsQkoG2aYURes9UfVgoCTpTCCj",
  "key29": "5qtRZrJxd6gG48baEfk8N9LGorEMV9mngjNvehap15FzCjwkyxLLmVA23CC5o1UTaPuM9EKKcP8kRXeAjgNazPdK"
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
