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
    "4RagVPbsXLhanfBYkCGsK5A44WwQ2UHURevBxQ5Wxwxfg5E2VHQB3BpFa3YWJyLCtGTwBxNWG4Jb4475p8ZHjwKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fZLqHvsCMvm7NqRWzvQjddzJUfR4hJugky7hj6a5wgN4a48fq67R6K1Gu8NQVzBQ6sQtuEQyFJ4XTdG39QwNKPv",
  "key1": "5LPomXUaqmy78eY715S1BVCwHKKj6LUjeRke12gdApaa72ixpKoCzk2WRJsobPGtFanJfpo1YcrWe3ai1pubv9k9",
  "key2": "3B733g72vsvP5hUvxm8qgaRVjPpE4TpLtoiyuiyeG3vG4wSNgL5eWLcZ322joCqQkM4z4kSzKn4W2NgdqYwLhTmg",
  "key3": "2AmiTRgqp3novwYLuDJa4qCDKvvLJjjGk3JsMGUW8ADMrpBjXr5Y9Mn3LvopmuRP5eJVNhMFg5aAvdUAnenJad3z",
  "key4": "4kEd8c2AMNXXxCtLySowzsnn1EYTj2n3PQhEDKFWrgdBQMFpJN81KUYQTtjiLwhxsesJBrkdzvwxQTNfTvW2F2U5",
  "key5": "5CGnP9ZNXU6uZ8F7DEdN1ECvX6TM7VG5j3UUBKZqiEm1npeWCYfBGMopnDu39AtzGQS7QZYTfRm9B1wnfeypGhxN",
  "key6": "47nJV5gkJV78tQeorbjQPy6ijcZqgmkMQMh9CKHepXbEPDCSuEJucQSDu74rnRz8bfBCaRxEAHnYKtCg4Cv6qA7u",
  "key7": "BjZB8yCLgcDkLJQ4USwh9w4TEW4gGudE6sQHEnHkzJMsLsBLB5FDEEdEgPFdMzupVgFtGxWX8V2YnKzLxYM9DEg",
  "key8": "MiQsbS64KviX3EkiUeHhS9BUfQz1TG5DonDF1SkXiDpjnwYxKQAFW9YXrmMG2ob2BK3ZM4pXgoct2tiyJrvgfQb",
  "key9": "2YRqudjuwHJcAKdJ43e9XLkc6GYqbRd7EzjoDtUR1aJjEbmp9zsBJzw5YJTMaZ2yv7h6yBd9GPXf61P9Cfmk78V6",
  "key10": "4LWc3nN7HnoYP9W8bkaxbyPRk6XZzX6MGbMWf1DXTvF9GtNHoAiXJXvNSDiabs52pjdqnUtTW92nEMJ7PCkp6unV",
  "key11": "3vw8DazBnhkwqusaq97z3FEw8jvEU5DtVSxUanBNVUfen43fkfGf4rPMNz7cooe2Uj2JYVsbRwC737NQjEGqeBQk",
  "key12": "66uMxYWPTgKzdwmeJGP1fnmqF8L4iE5u8QW3toAXhXqg6ijE6s4JnaoawnKzhx72DidurqnF2FHfjpHoqV7Z5iZo",
  "key13": "4SrYm4acn6hsNACuHEy167yjw3Jd4YToPZ3TmR5Hj1et8tfNBzK1LkmLJByYMtAnu8ASTwrEVWP5CPQca8zbU1pJ",
  "key14": "5opzKqZbNx7ytdsJ12dGGGnPjJgWS1XPKa9fH4JuPjk7AFE9Sg9Pkff6j5q3jHcmPvWqu9W6MakXtHWkAnquEKs5",
  "key15": "K65GmV3BZGnUqTuu7GArqzTW14ArXjhau381VADrZFCxGgDxaPCe766g7gRfVXPrY7QVx9gRpVR4FSvoysbXM1C",
  "key16": "4fBibiiyrT7QNUaakVRsFvoz1XyFJNWCpwJTT2heKmLNEa7jnuRpB8XcKUeUZjJYS79YRiyq6dYrB3a1zDh296uA",
  "key17": "g9U34M3UuJ7iCoYtLdkBXs182z2eyknyKfYgXiWnSrv2ByZUqEkAQPtyfbhy6zRD4NCnnyqRn9fFakWPStxB1yF",
  "key18": "3bFtNxckv4euJR95BRW4UQe1udP1MeqxvPzBmxM2STkHXgSSwDqyAgonMwVhvYvaPRFiwY5bpXpEz4TNHiE4NLx9",
  "key19": "RCPctpVuQtk5yJcTf26v2sSXsPmpnZpmFutoXdEDeEjraAtdW8qx6GvYaRhb8788NU9hcgRF8Yaa5Ki13thMr73",
  "key20": "5Vx3yWherPvAjzvvdWTjJFd6Uam3a9Rs2jPSbNnNDJc2QFinT2ocMLksMcwcCbcLwfDg5p3cAPkAxrntHDdWdYEf",
  "key21": "QTUsGEznw2SQHffbXrUNysD5puabrzNs5dbFN3dRsPgzUdVmePtFDm4cSjv9k9xewrTCF9PTKyTZpgg91iT1g5S",
  "key22": "38BsVkB2ryXkzXrQS74r5RMMhgYkYpWpWuBs4Mio7MX3wvQDQYB3xJt7KLVhq2mpXA4dgA8Uy2zCmphnaMJ4h5V8",
  "key23": "3sLPPPWbBX8v6Sc9HYDwETkqagmEDckixeFgrnRn3L9vZctDc3seY7G62GVZCJ7ScnGxTLWwuiNUnHuV3yUvWCem",
  "key24": "5jsvoKEejoTk2mL4AesRDicqp7LT5Myo3EsBcC7TQYsHiZqEgq2E4iLqWX52Mw6h8oB6kFCi8kVDRCzphUas1vVZ",
  "key25": "3kAoLSDb8wAa3ML5prLwVCp5t8y7j2WfKqRLTUwjdLVXWH1zDCxpCrq11NBTa8sR6AbA8DwAUJL4j3JEZWXj9iCd",
  "key26": "2Y88X5mTzLfaZ3ZYi3mSU4r2N7rRo5MWeMKZAKVZgUEWbDiNNVqv8MzzBC7SyyAzC3izvQAiAeW2uWCarptgdyci",
  "key27": "2A9AbUKFjGjPPBE1Z4tRqJPWG46iCRS4aR5XL772NJLJf8MbzaprWatsSTe85bSx5pEKxUQTdsrkww9K2kWsw73W",
  "key28": "3Gxn4ukfe7Dwy9BV8zKDabcACgd3wVK7VdAJUNkkdvJxkpHn5vBnE1eX8wNqSPxs1t8om2utGzoL4xyAHkgcVp1m",
  "key29": "4xSRdn99SNfxWB6bY4ArPMmmXcH8dBY3SMZ146eyHQaJFKBR4ZcHmbPdmFwxthJMiaWdMWotdYRYGLkZPxCFn52E",
  "key30": "2iQmZbUobzgBfFykS6AiDWrtsFTV5dv8haXTM4iPpEh6Y67SYS9HTHpy9Ca1qRn764zy6q6R7ViNnCJ9N3ddYRPK",
  "key31": "3EsCTx38GL4hXNgjWAcAFBwvmBiwwRkv9hgaN3XnsLf5SrrUBp9Liez6W67Xmcs2N1TSPJWAPZiD4cwJAt8HenK1",
  "key32": "4edQiX1ojFfYycZcaF2Rfymer2mb7cQSXw2s2s4mYYtAkLyB82PNfPNEcuXKRLqnFnReKHqq6ukTsGfJayjbJK4R"
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
