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
    "yJL99FKUZWgp6MneVLVd4Fi1LoM57iUhEHfxHUDVkadp8mGY2y54kvwGN5iGRwZHVsfF5MQJgDfN93d6NHRKKcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y4w7TLfm2Avcb5jmyCgzxBJAj2RfESUzUYF6E3hwXcbZSNSSykt69tiFpWCHjc24oqLspgDwDoNCbBqHiigC95X",
  "key1": "5xpYQdpEKK8vjccbRB6YLuQMXer97CXsgExcCm6XCLaktMgKHrYSNg1iLqSjwMNQ6wdVqWz7kgeop7jnG1ijTgmj",
  "key2": "5gt1VEiaZvZp321p6p56T6H1TJsEfpeeeujQsoQXwagCtPi4rnDqPAjUc9aHDd5dcN6Ci11sdKGFvzuUEzgLpJBx",
  "key3": "2cm4JX97LS8hTMnzbhcZ51v8JV6i8TVk1gM75F9biW4AVSsivLwM7Xiun9yVTeKDXgNicm34yQhFH4hr7VF3FcUF",
  "key4": "neG6PX5uaH12zKxCqHmNdVDiq2SAz8Xbzgf9BYW222ixZBfPRozFf2iVgSqMe5ARWCpqo1j79qPswGVKTwo5pHo",
  "key5": "3ggn3EoLoyXNxvEKxtV4r8YCRWif85mFPeSsLFokMcb8wY69z7cnKVqTGdr2niAsFxNHnHk1vhaFBTAfCW7tJNG4",
  "key6": "2UsEN9R13aGtJc3MHmtLmkhELATtagwNzjytwsV4sFfdi4Jv3yaadua6ANiXvKNhMbESdRMvSbdk8LFACUhDrUuA",
  "key7": "5heFcZ4XMGJzNHP6uhkEVFMcAmyMhQPri92csenjBfVGN5No6fR3VqMmcWaKiUNHDpGtYYzRGKsa4CfYmXHDBkZD",
  "key8": "71eDtrxzqpSFeNEE6GR1ccktvz1TzN2XrDMrFFrmFZN9NSGzbKCDchF4bUaNVMFfEk8aCqcyLVq3wzmrMdJkBFs",
  "key9": "4tVu5CotwmwZPAVsvofAtT4NzBKwLQypQrhHfB1aUcm3d2d1EKhbkKFhjVe4QWYrH4CaWcjSnC11Zr3TDL2oGTb2",
  "key10": "45E2tiqhzDhphjhELXNUeFbLSA7arrH5viic9NtZWwyqAtn1PSCM1j7y9ffCTRYffLJW645ns17smQBtisjuVmmb",
  "key11": "Z9csz9G63V8rQZUtGDJDWsAS69ao5CbqGcybo7Pfy4QHp56iDrYQUP3Xr5jTFAhavFXK4kdR1Z9Wt6n7iZgFpfC",
  "key12": "wWn6kAzKZDTsFjF1S6uSrssGhjDzPWXfjLEQBjrfuVRUSnNbaXWKL8xivdCYRkhTDe3w9NmpCkPirmswWSq4Saf",
  "key13": "5CHhbU3kFXZTKQeK33RdVg5TpYB62VpWtMTV1LManxgop3e7Bwn4ETX6ThhDKHu2ibL5hFrkvz9sGpDhiG9ZHgKj",
  "key14": "3T3EwAcdDpGx48yvdXZyEgywnJyjQZkjzKNHN37pbbAMDmSSKEHLt8Jbn3uYADza6YBEa4CmotLoabDmdYmDZahM",
  "key15": "26wMVYEzjAJzvuqHtA3Jnh7J44H8GXQB8dvCSzAa5FEr5wE3fjVd5HqeJ6Febu3Sg45cKAEiQUEdFr5U3cktiNSC",
  "key16": "4sJpJbdeYFkHGzU6TtgoJH1fRiSX4HfsNcwW8m65Rm2asJXHgUycg6WJyTd8bA3m1E1gofD4E8QfWhfDRzrzCQPX",
  "key17": "45HJyECnPpRTbMM2DmD6NxdBHM8SsDNMFYUtDTLMUJZWidpGB5XGbs6LoDzpLFDby5Tv1DxJWmfopbRwtnfaYsZW",
  "key18": "5BVcAKfwrCnBQ7JrU6s4Av2yoWpPBMLdixb7RMSoQAYcp1eXkMQtk4ZTCUfNa6WtqYnvkxrkUNvt43RMGMgKbqsE",
  "key19": "4qeYpAnUxoGRamiC6rftLLwjqoomUHvx7zem1cPADBJMNj1AAGUcBC9YusjSp8CNNPhXQUVSRFWat7JC7DekWHsc",
  "key20": "4hjJRKvR1ipTKcso8nuQY6RzzLDW8vvjBy5UmVN3mNcDpzm3B3WnE4GhYi6Bohp4tFmRN7MsNCfkoLWyyYZL2Hst",
  "key21": "5UfTN2v1z1evN8nXkABR1PpUdFyd2zxtmJuUxsg6imqEaKCTTMc1fEpNeVbk2xYrqnYZBKKTbCoa5nZAimwSk4by",
  "key22": "5KWyv4bhuu3CArxnM8RFUTUSFVFT68x9QLj3ED5bHyUDkNhs5DR5RjT7Te9jEuUnfUBSF2WwagArw55nf5f8kSxr",
  "key23": "3EKdYKkCBZ1dZ8Jo2hupzsU7uLGQbHjtsnnqw7x7YQosQAssShCNScz6qzstYCx6FhPXRPdHCRE6vSJRAuUmrq9s",
  "key24": "31VrVdPzHs5xFnn5kM3bbrTNfzWrtM8tmQgj9VLAyVwRGwPP6jZ3n7LEJhTtDNpq6BffZs5QpR7kXJ9R4vBqHU9A",
  "key25": "3Nzf4AUxericyem7Vo9w9o8bGF8wPQJkC5KE8EGYMKBPaPBpRKuTruY2saQJFwTbQAA1cUAMbzpaxKQFoQaZGUX4",
  "key26": "i2WeRX2iZf3M2jFmA6cRuVABmA8WZJDjURJp2jiKmoQHFXMsDNjDpEjadCutJL4yE174KnAkBRhmRju8kvG5gSn",
  "key27": "3Bxtc7z6shPK5cqcuZVcPhA9Rff1HTRn64Uot7xPcBL3iyYTvYVF1kggwwbrwTuRpg5yFkVrQLwnuqoTdEJMfmDz",
  "key28": "2sRkuw96EFkRABAf4siP9a9y8Gvqjun3AYWGCj2bVkJkG8ARZzir6yRVA8j2tY59iGNXV9yKhMvRmnTriJDKEZJP",
  "key29": "2GuU6cy7x5rjgHEJ2wkbKDZwSTGuDpXPnKCc34hugHJfPQuMxfsifG2JknSAhYWfFy6S3oe5fQ5RWCPVkvNdE1V4",
  "key30": "58sqkWQMhYLpbx58eAEfDxXZwUguLhibPvCKLjkFLEXF9QCusvkcc5dzjxEK6iztMacPHVeaqs55ciHKScJpxDvi"
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
