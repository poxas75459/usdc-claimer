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
    "V5McAGv5hoc96z64p7rTUqmFdKouSDowTycVy39vZG7m2xL5U6vLDq3pYEbgJRo3URcUbH1hLophn5kySmYSPv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sc6TLPjggwsDdyRpPLPwLFn7JL6jJo8Kh9ZV7Se2JCHgDS6Z2TdZKhAF4xJVDvB1ZDAoNF3JAxRs36rUd4wCuFn",
  "key1": "4p4Wrz2PPmByvBb1Dfyf6eEtz9xJDjyHLnqufJgWXNhPDGYTuYpR1rKwSY72benNwBrGsZoCkCvRzPPXDPWQKczY",
  "key2": "2PvPwcKVWVGRWHKDt9XcQLFLXpiZdABqP6FMrtKkwXJyF9DnQ3gKgwycAioq2MxzaZ4knHqzN8VRUjCHkLDbkt2W",
  "key3": "wFCR94n3z5set7p5LyVksTJMcHv2UyeEFN2SWPE9oeWfJ6RmEhAwRbZmZBAjc3o6RN8adfpPxDzHrMeYvgrsMif",
  "key4": "4NX7qdM3gMYbxwzPXyJh12evTU5Nv3nPY7Cvwk4Wi3xrrVKqJR1JaStns21Z8eLKpQjae4Cik2BBZHK5thZmqdBa",
  "key5": "36dz9urS7u3yBjpHp3zK27d9KQgXS6k5Anu4oGdUCTApf1Ane9noMG3iW5qJKDNKYSMwMnJind3gGbNEHJ29uCd1",
  "key6": "3swapHN91qmxcTqQX4azMdikGpPJVcYSwaVoKWfWcKBoCbedmBZQnqUc7XCjszQwTv8ZZudr9jTViX1XPzVRHwb8",
  "key7": "5f4tnoyo1MU6ubnGsiGmySodsNNXheKUMhGYogF9vJwiMJRCKG8DfdwULFzSmLRgjmR4wooRAN34gNuhisoruQq8",
  "key8": "2iv9EeWwNC3jyvSAQTyEGVdLox74DCHvoxaMrz3FsdFLNhHPCyV7sDE7CstMBqvZQD3QB65fTosaBGBXi9KSYUHH",
  "key9": "3RfbVn9mAEYATTTqc7CGZAyTDkZ8SLggu4yyXbXDXwNXqaRHNKqaTMpJ9J2u9sk8hvi4ZzjR6SdPrDJ3U6dgD9MW",
  "key10": "5eE5zmtPvoMwz5SoFA6Rwwv6noFhJmPvW3KbYwkueC6h9LcQVZmonSByFWZUceZoLkWfCiwGDygex1VXn2Hb9p1A",
  "key11": "53UbgGY53N2k2p78ZaEth2C5ErFmnmVy4hUbvnho9ruz8ZzpWHyYfPQFR2YWrE11xe16UCXSreKAPExrnynEzZvJ",
  "key12": "2VDnMDvkL5c77qQcf22QBcUVsVBipX7m6cdtLz5kNuBb8eh3hvFzXHiBHQDSBvzTizSPrFydACjvra9ZCGZkSqh",
  "key13": "3mF2NPMWCpUdpUDJnofBo1d5KDe2cYesiibMnw8FqnEknuwkUjWcNv6h3wXVXqh6MxRggCxNDMAtdDbnkBV1bm38",
  "key14": "ExCyB3nQQ83um1XGAL7kUMtr2HtDFzUWjxjXg4kteP5EuVQfeVsPvuw6BKVnfiqedUx25QcXgVkvdqtz2YVGvX2",
  "key15": "4VGMKLNJZPJnHJC5oxjpcJopDc4RoXPqFbqYzAQQihfBz6uEXrGRtbFxZCRaserw6gJpEk6ry9DD7JyCRzcUn8AX",
  "key16": "4XGUxFn3pbp6JEZRjT3sAyRBm8wn6vhRt3joT46AC72fbyCzLFSUyaRK4pkJXuTaMAdHRLigUaE6Xkcp414CXgvB",
  "key17": "tfdiyk6ntSeh2dankn5mMAktZcE64Pz9SsNmQ9UR4GPQBcWwFsWGcvFsWK7PAxjbGzoaaLKfnacZo74M6URe4Sf",
  "key18": "aTprvXmbxLywiHLrtYZ1LuJLh7zEmnWFKDXbESz7kwbQ8kTimtsbET8xdavWP4MyQWcZR45q8SY9AFP5DbjERDz",
  "key19": "3yXStauVay6MX4JDVf1DNK6wRX47fxwXEYApsfhuamdKCMqFRdLMRaZmtS8LNh9cvu6mAHkwmuveEMW1ZX8zedrh",
  "key20": "3Tfi9weVYyELedDDWvg789xNJWu3W2vnNNzZWoMVeRJV59b7es2XwJbByy22VmXKJe5q4j7xJYJq7fqMeS894K74",
  "key21": "5hnfteG7y9qp3A35uFDTs5jbCXtk6YYUhTrnfxixGaco6PS7JEAq2YTpf8qK3DhMnygkvqSnHvVTDHKurJDvY8eX",
  "key22": "4EtM2ijiRAWtrcQa6APZqWfSuHd5ib8ppoSW5R4byEtVHzfuufG3heHzkS9UM9WHjVAtw47mdLzE1V8FLhfMTNDi",
  "key23": "5E6f5McX9zmmqLrSJRMt8y8sQy7hwKpE14D6ZYjrpigJ52sJBCEi3gcNc7vSh1LdhCAcugCMrEMm56rXjU1TntNB",
  "key24": "49m3VqD8aCj8QhCLae83D7VRz369oJAgUL8VNNZY7SH82CLdfvkNs94TTkn4aJWcFtgBCtcxW4MUKDdimKSe4ZtC",
  "key25": "25KBDZCYCno8c25vSttceDtPqP1AYMxJYsoPtQVg6BC9oGvbG5RdnCRzp57p7LysxHQ9U32YmJyrstnQsEfPsdpP",
  "key26": "4nYujBX47QUvCb5WaTB65woR5iXs9kXdUsc7BDABtxLQHD3LtYNHaSYbxxWTp4TgkrDgfBBQy3rFxbkqBq8Q7oCc",
  "key27": "43JQFzKZJZRBEEx1QxJVHarrLFCYtSf1dNDEDxyMxQXHHcz5rnm4heJ7XfrkfJEcZccWRtMGkLj83agETFvcXdQj",
  "key28": "3raPoDqRKhMYFXUr8qpFFaeRue3BDeHsik8R4UfDe8cBPYGFmUJbFChwyxmHKfabCqqNon9LehDcrDrsyq9keaVH",
  "key29": "3XFRyWTS3rQJY3CE6wXnW2uAZBgMNvEvgJTENd2dG1YvAkozk3cAtUWbf9L8XupRBaGH77ARWwyGGYXgQnN47ko7",
  "key30": "63UmNbY2623gBPJQo2WyeExV9Y6LSMpqj9ZJCbsfs7xJFtZUCDRcLMsRXJHWKzhKyJBzsYVjJvxKhD655ATrffBz",
  "key31": "5dcPMK9TkFmFeEYvHKd5tUepq6LcrkPQXTkC57LjVBojQPygbvZi3sLRDatPGAcPAAjdKjsLR7tmGxgsh3upB3d6",
  "key32": "4cBcXnyfbz3UWjcifakiP9B6372RT4Whtg9fHP5boL9g1ETr4tjeo8gRX7YXfvcDgEqhqyfekwokhGWcqxQ29UGR"
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
