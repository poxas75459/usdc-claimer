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
    "28D4rXGFzFgRZAMLc9DBXapVfSuhRnAcQFHQbWE8usHCempWuJr5yShxgpNYSs1unBgbGW1byF8Z7LQ1C66zDejz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rpYQBVmVYT97rTyuj7RukupGLzcqYRsvBxm9RnKvTC6Q33zUnk8QJ3q4LthmQYoXdT2qLBF8FEVGmNhznBSn75S",
  "key1": "65XPT1iG2r1x6rSuscMFqbEKk7qh5huiPFQDLApQCgupbnTi3g4jNLZQU1E37j4vp2aDCp8VoGsNcgvo2kbNeFHn",
  "key2": "shceGxug5U8i9TBqLc3hCzQTyiAxjf7EGoWwNgoBcAEbLkx8XorjhxyZLL7g1oGGCHonhqfzAvMMkcdgkMwTarZ",
  "key3": "5kJBLEk4DYinjEZo7rB2YJ6W3yTb2egHHuxRnnBbrDpZg4CpCoohtthzkxvNopBNgab4jPGSNg14Vtg6g2PyoL5X",
  "key4": "3n4KbZwc3WsHmuJXk2pqcgMTjMumCoe5Dbq6oSNQeT8kv9Wwu7RBFohp5JtcvUA5w6GzWXWatap7f5jx3gmwjAfm",
  "key5": "28jxAjyVg4e21A1C66h2XMrDHvDZ2SRN7jS1fuFtWMCHXqvhZxDaayfFbxo6Ce6RYW3DJRGeaGBn74hwHXEfXyCk",
  "key6": "Uh59PHpueLiPvWMggkLwU1MMFqXLUAo21GGNkQJehs4ptLLYt2ar9oaFV4L96v63v3ut27rDYXdQduPLDn8LkJd",
  "key7": "4KJnfFJp2Ety5Z7h5btoTpyzcbVVMTDtG5sjVSUCqrGLzueUQXX3coA4YeYRzNGdQ4aoutEVvNwKCEcdq7pBQvop",
  "key8": "4mVf5qJVYBJPQrurjSWYdFdoPFKFjYYgh7ZN1udPGH7fN9fA3Zq215KiKZaKRXsBcKarzGDdrqc6kg6bXnttSW2M",
  "key9": "2Epd6kL4nxD38rPMLN9msuz6iEdcw9DCKfnjcQWjFxwJsk2hbTwbTtAWZiNB1azHCPaY8VaNrhRiiLHFy9LNvdT",
  "key10": "4q3wqsvsRfTNR326FFWNhFJKKjR1WDopq8YBFTrijW8anUTjL1oziFBN2EnXXpKFmFHgtiPyRr1roXkJkgqQg6z6",
  "key11": "3ThNmizx6YMseiWiZ9JkQmzah1QqRR7TQyGiB8f68CvF4ZcQthZnsVSHykYb16TLKPJyd14o29vtWU4wcWeXi7KC",
  "key12": "5GYDBm5Jw3RCuEjpd7rL651Fi1B2DrwKqdjf3cjgm4wV8coHRhwJZNgjZFsks3NmCBpyw6F8jABzyVGRBMtqCDpt",
  "key13": "2Habc62Eseer9Cj7a7YTkn8k6WTwMLgH3x2wyBwebp39YXDLPHfRpMGrVSUjcMEvFaa5NaHuprwdf6uWYtJ6sXzJ",
  "key14": "wuByvJZWQAE57HTap67SbxpPnKtJMVzQY9tWra7fxA5nfahLDS6VTtXZLBRooGnBmancHhMtY9EgvKTiGa8P6Lw",
  "key15": "5YhmMDSEX7xGyN9xwtu8foCqmEwvd2oejHoTPhM9jsjjyQ8S2dVsrTBkEWq7Fs9q7HtwSPhDVzxQH1yAEXRydiuE",
  "key16": "445CmaG6im74ecnAXtGwVXVZ3aqUwXvN5CrJsxbF2Pot5dc1nv9ASgUBUKkb5y5F2RqbwvoBTYipKeDKZ4G2exvp",
  "key17": "9nMczQfUKerUvdVBzQjqSsPfspXRP6znueZhpGKejJPzp7GeFdLyYgffXX9GFVdfM1emVqC9cbqvSjG9tyn9CRW",
  "key18": "YgmAhZjUYjpRRxNzFw6AqtG8nXo7t121a2koqg5iycHtryGktR7xzRm4SwGZTjvZSiX1JSkqUXkZ9XSCD1VoZiS",
  "key19": "QJR4vz226gq9zGXCQWDCGdjBgL9DdZMqjTwhj3CFKE9ayqL55jSU6aN4gXaYU44RYDbmxs9thGwd5F19yb8WToK",
  "key20": "4duUkQUoyYccRg167vu3Sj4H1PjbYQ8aq5pYQExxk8goCvCvxFZfeTHomx67LiirHnW2qhuXWjvzM1YUUMUgsG8K",
  "key21": "h61sh85mXw38eFQcHYo1sqEhJMKmY9xHijKWX8B1EJZoCqJU456fuhR1Uzqn5nzmJ544EHbdPJLFSqKbN54pp5W",
  "key22": "3Zp3UW8BSvTwe2kun7URnMvQtHJFkKsdZmZrXtKCh91rhRouKXCaVxsVVox42C8Xi61emk24z4o8Kf5hic4Re3nk",
  "key23": "5jrRrTQxsPHmAX3SpDUDAP8GJkbUnCzyRHQa6ZBHxbUV2es3qQ7eVofNeZbDoSU91rM7nff34dpPbo777ws7FmR6",
  "key24": "4SQsEnppUwASQRJvN7EGLu3RdBKksLsY27oWujB1Th4TA3aLRqoCv4byD9DMxzwEqHo5b3NqCGkaZf5wofHsB8Dj",
  "key25": "21s2zqMVNwnbr7soaxfeWkKU9R4vrAvBsoJLNhsFzcUFGHjXk6zafKhLLU3zhaLnWRGsKkDv5cBvkp7kB1ppxamU",
  "key26": "4611zFjs9ULCtszmbtMVsztmiiaqUYKr2nhvtwMhB6W55pZvZpMwiuaogSaFXfHJKM734kYHwPRBKobkJ5kKCtAa",
  "key27": "ED1vj1QAY7msCoL6GcuTAnoETkKgShtjGKdHeDXyofPp4JSPmZ8kf8NXBBhdK2AHTXgGoSrdTbTv5EDZchsRo8U",
  "key28": "4WBDPuAJQMv6XiVgSB5ea37L6qGDTTrYoh7cDQR4xxZq2fwLwiMYbswR8RKkvJwRL4uvpRmgL8oVWTxgKCd2UsuL"
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
