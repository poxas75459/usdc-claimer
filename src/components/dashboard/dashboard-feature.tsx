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
    "4hnKRzt4JCoGtsVHV9MDn97nXUHy7FWNiYXgHUL7ZgjNqQXry1Z57d5vu2pPP2pwt5ayAxZvxJcb5wxnHrxi58Qu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TYdGsDRMEUNqQC4Mo5W6JTGrfve2zQYVH8tbwkqJUdLJBq5pNJy8eX3FCiJgpPbRZPDHverHvd6NJsEr9gZFYSf",
  "key1": "4vNA9LgrgM2Nm1PbVaZAQD3F6LrZsgmyneTNeDqicfR5a6Qw8LyySoEmuKCdBXxRXznhFzMhjRLEHrysFjMuXB6B",
  "key2": "4FHuobzmfDKoQm2UySzD3fKiCFi6YXGhHVTZw3yeUUfsH9YNZ8Po5hLtsBYitWkBmioqZKXD5njWruJPYAsn5bTw",
  "key3": "54xHHpeTJJj87x98iNYMZf25RhSqr4iyhBhELAaXkVF8omeCsanz7FZQpUm1WLFtSgQNgX4wcaWT86sqAaD6HPpS",
  "key4": "2auyxTdEdffZFEqvA21fsbFHqcLSH8A8PMNrhe5T6LmF2rotBxwyDw9YqMjyR3rHag83NeioaBxEm5D1JhpCvc8Z",
  "key5": "4YRjetf2udMXPC9hwUJF6xVaEvvscLcRK5r2eHs3d4vrkQSewmwQYDKNUZPfLnyBegw5u2P3Jp2GHpWvh1etALFz",
  "key6": "2ztZEucKdwaV6Wov2H52Df6hWeyYh9Ym3JozzR8D164KzWD287NZ6AUpv4jNYrJC5Cx1JWPFLE82jgpTGSNFjWuU",
  "key7": "55XJTxJmLRoQivUVyNXYd3KCja7ukcJVCJctWd7ngpUVNZa281Z5YLSLqvxvS4ZjYPRgY2uAXKoXswGPkYhUuobm",
  "key8": "n1veVUYJ46NK5MenWJptrbZGtP9rzWDJ3jHww9kadhPrk4r18vKjeX8k6QKLC1kuic8u5LWt7HnsVqCjz8xFNKY",
  "key9": "2ub1VMYBMFB6F82CUpz49FTiyAeSE1RVwEGWZ8YLmUBHHzhGtVcZKMZA1hx7LBNEY6PwMe4mcSLQxTERgxprGEci",
  "key10": "5ZMs1gsst1iXScQvUsE8riBskgh7ed8GXFgGz27Mp6wjqy7zZLa6hwsGhu1yvHZdc6uxbQ2vHjrah18QPfUyaSZx",
  "key11": "fUKm2vDuxeBygeGFfHo82GKbViA4tdVrygCQygKguiU8AuEJi5ZfBd1BpwnpTaK9Sr3aWhyKaBMY5Q8LSbJv9iN",
  "key12": "271PXMzQRiq4uw9dRq8hqNbYqbgREPGeK6cK99CqtN27jNCoDJtaL8mjTMQfWL85iTUZ4vS6jcxRGrSNV4eGT13s",
  "key13": "26ixQSbJWHwpUsA24VFQJdnwoS31W9MHnJv8z4U1Q5mnZzn4zhVVnhrmKGtA1UfYtTvxf9hauNdHz58StW6cC7dd",
  "key14": "3qc5uVEcnJf1nLZQTBdGmRBtr6UvAupkNtRqfVzjtgWeTBc1C8cuj5gByEdqydxoxgguVU7CmEtUEvPNQ91sKVXu",
  "key15": "hwATa6MSjxRQeAVqnqQQRcmw6XpeRuyTHWSZcjrs35F9XKhLifgDp5kxJv1fbwckF7KAS26zMey5Lvii7v7XVGr",
  "key16": "459LuzHFYEeixsXqzyAH4G4h6RhkLKGepnS9bnWqnnyBaowdCSXsTkLtQrrwvfKYMLogRQWQaPBa5paLvwL1jfSy",
  "key17": "ofVR96VUVHKu94xASD5XTJ8mCrUYqT2aBJkPMvNWtgYSgok3eL9uR1LcXVHkcn8MSvCF4Y9Knvabt8Kzd2CFtqV",
  "key18": "398e2LuroQS8QQn7dusNB8zx54D2oZKkcxX9LWAw4QiEu5dWgzovZ7CrrdXXQVvSpFpSmaDZoJDN3VHXuJK442mk",
  "key19": "4NKT8xyY3bNAVi2MhYQwLi88rmY5xmRyF8RPQRnBHZYUNbYct6UujCSSGBcdwCTCcwzK6fVhCb3kjiBSmDpucs3",
  "key20": "5rm3XuPsg5BsDBP2JdpHWv6aZAspQ5BCbGYfBQbaLvDLx35KGYekkuggkZBkEtxdwxNWv6wqjyq6bt8hsj7mdhV9",
  "key21": "Gsw2ZZcL8Qm3TywzujPoPUBF1tBaQpCnVRGvkA5ZXLnyeSYqCgCD9mLdA13hN9FZLoWwrwqNCzy1W1wAV7kWxDu",
  "key22": "647bQtChZTr8otWfzEtrxYmoGwgqTCKMQf7Gx7wMp15jVNXvgyzjH8G8afeCqTxwnkDa84z4ZwCmXC34qZi32SkJ",
  "key23": "XMMHRUokNs97cUKrmfWqEkiCptukU3RgChorcHELT6rgAd5jSkrnGf8AmSg7JPuEg71DjMhJhT8KjQh4dbtB1ik",
  "key24": "NRDR81dvhTmfmBz7EtNJMD8JUA3jTgjSFT4XFgD5Zv3PXASNC1RYw7c3Z7TQqCysxxjMnKu3876G5TBKMdJAcdA",
  "key25": "2VR3Dya8FnG4w7wjSZji8Dw2n65pixgJ9Q1csbY8cVQ4EWFkccCNaP1SW6pW1AQJhLpUKnnifgbwFp8aQhqTUh4s",
  "key26": "56Z2pe17AUFuYwHhrjbTg8GuhQr2mkfHsdLEszBLU6tKY8AiyTeD6r8S8FM6UxbqvRifGkYjunf3LSamvxy77kXX",
  "key27": "57FoXraVdqmPrhcNot2qgGLUWpaHm2BCo6gSjndg5aMbmKTwLZmKFUM9g2j2jo36dSQFTDP2UvTDwVYcp6WmuU5n",
  "key28": "42R4kUkEfAtTyQnAYEi2b7hbcNqhFHTNJWChzifsNBf5wgUaRMp9X1S4VxgL1DbRwcJSApJynWCASaYniTw5Sqf3",
  "key29": "3F7GG7RhSJdpaNBTKDuWqNq73zVEmx6aV17X8h89csrwbSLSmbKeFya1MWYHkhho9JzAS9h1mF879zGcdQEdmRf3",
  "key30": "367Wfc9dfztTUgvxV2emyrUUWUv8TVZk2fY71x8xnEzVv2KCi157Nr8uarGnFPwxFce9xkFCLEvYJiUjnkhbB8fL",
  "key31": "5KEfRAT4W73Jp91nmnNPtaXcnPu7hPNTbSuyQ6VAgaBVUnnMQRGGALnGitGKB5riywkfWnjmwzu125WQvC2HF8RH",
  "key32": "qRspYUkfH5WwAEnrPtHa2ekgjh82DqqtrYb6v8eD4WM226jq1h7twQsqRT6xLnzYQK8wf95BtENQPXrauPjmeaB",
  "key33": "3ogeQ9TizuvdMJmR8UsK4as2MU99YkPZkEMAQGnvPJwkhfStxJteZQxLE8qNgoGLkGAJ5y3DkaCxH4gBZ6YFDhpK",
  "key34": "Uwama3kv26GeqnvFKbeqTWgxJ463qt4qRRY2b4Jtrap6cTD1PZpwd1Xo1MEQNydrpTySF7r9sd43yG6cmEy1fFA",
  "key35": "4CsY6gp7MgUbxb86uw7yb3CZ9vgjbWmz35kPtYxEwEYnfjGXGQ2NJusdJLEfR2rdxm5fbMVS7VZDjdqmwvUes68N",
  "key36": "4z2epWsgAB1diwMy9aoeZaPYZzMENsT2zbDb1899sn7dPsA1V3cAoPKpfNGiaB2Pqq7pXVnHawF6xj96UcxPLgUH",
  "key37": "3oGkpyhcFRaRsivMzvhWpw4wZC7VYzMy3yMYZTJLebRV5kq4FTh2hzicYuWZvNvXLpDpj6dkvXqemz2KLqdxPHCD",
  "key38": "UQNQ7fhHDtaYj5PGvzQeVdVpc5hCVs6GMQ7JnSXVygN8NygQQvT1wPVfRVjpsRnWuRsm2RZ1jm2JPvGEYaTmJvH",
  "key39": "pfQgeEnc5oJActBNNmBVpHYk5QVFXE7adiWRdznMbu9ruAyain9DjoSgvMcfemQjCZSPs96zVy52ZdctNxWGyDo"
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
