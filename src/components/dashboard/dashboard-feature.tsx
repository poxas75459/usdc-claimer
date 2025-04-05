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
    "2zFuSv3T5k4EfAh34s3VzpKuSbmSrShWV6mrD9SymrivZQGqEuAKnhLApqq5SNsJRqNmWWcH4Q1iNhNqbBsDgUoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "297y8dN2SNPhXGMKxdp8P89C8vxn3xmNRr5rJenuNXpC4Q6T7sNGUz2Rn8tS5ETP3snU8EZm1r6inJBr9PhY5Dmy",
  "key1": "57Ktkr3CammwmE5B7Feg1spWSmbiYL4nEUkX9wnRMcY2ZdMtMj84jMACRvQtFT5586MN2PheyZqEQ27UfzDiQpWd",
  "key2": "4HVBeVXq1EjBE1yxeJJccUv79vDxJPmpuAr883t5E6stvfvFt4rY8iJVtGQCnKKmCWhAV1GUsk23BpFrS9agoo1x",
  "key3": "pPa2mSyUiAKe1GTiVoQWNe1XGoD97ycFoZ43C2yCQmR2VRosiWm7wDijck3cTqHoyuEY44pk5Z6jJV6Ao2jMyfL",
  "key4": "zYUfX8EgUS7XVENeTdr7BdcYvuSdKsWFjYzYrwifaVdFdxN5Wh6BgqHCbiUXQT7C8CQt1MNN5Cm2k3t1wKfFj9Q",
  "key5": "4bVvstAuJTiJTX8H2X4tViZdKtFWcfLDWcfyKQGWbJUsUKUEbaM9eBDggAAE1UXmoQQD5rhmDQ5GtNxwkPgBAQ93",
  "key6": "FP8wuK2aM3SnVPhVY3bZVXvofPUBei47K4Rdr6WzCi2g9voMcuvF78H9EbP9Vr2AgtS4Syy8A1vE3v6Qo8PsjuE",
  "key7": "642WMrvSyRAStYkd1Bm285zZVd9FVyfAogSJo7WLvNqfKEQRaGyHagRAbwZZngxMjgqaLw71me8G6oaRgDNBewoQ",
  "key8": "QGGFBeNrwqeZbQpSy68yJ3xcxUGHmxwFtUQ9fc3GJYZriwKRve7K8r44sazoQvihsuCnjxfhb9UTtatrswACjcC",
  "key9": "59xNDamnB44yQznuJ3dLf3wnkrnv23S4damDrV6RVDjLZ1uoYWAoti5WYwa1FovXXjKkhB2ABiWUdh2TzYGxgdMM",
  "key10": "4X3gBQGqpHxFjAPbt9FBSyDFqVATdQ4wQ4LM3DEvMFSjMmRXJZMmATAQGKMmJ3VU1869yZYXJ2gFnDBpC9KTSDiK",
  "key11": "4d4YGJBUC7fDTYe1hn1xSJoAoseye3SUSbdevQPqBoCqWaWGLAxCgKr2vefmZgDZvfiZkysJm3MmGFn6QbVvRk8s",
  "key12": "5PidudqLXP9gJxyFNyZfZSjj7zDQBx3JyBKExw44qnPWWnDc2hY1vphF5uu1mLX47GpHDvJBGZZcB6NCQJ2i9WN1",
  "key13": "3Q6fyQfW6yDeXDJ9qmug5BXkYGMMMCaVJE4uncJZVmEEkKXruSCFUAHqJdYnKo6BvBJSwyujVontLs5tF9cqLDWf",
  "key14": "4MeaeXPTbR18cR4r81DTqqy3o8QhMgNqRv7ta9oAWDn2sfLMgMKChYeC6jjo9RD2xuyRnvuSTGCqCDkZU8ZBUcAH",
  "key15": "5GB7T2kqyjqnxEQPQxLwG38sDat9gkTCkLMjhda2sV1HkxvRb2nGMcRVHiiPHaA8JHpwktSMgDunS7YEwczhnr1F",
  "key16": "5o1CTwpNUb35uEp4EFc8EyiRBNhkEotHhBuuGqZPiE8RbHr211d1PAbimdYNUBXYeQ1MWcooKJt88anrLcDT7V1y",
  "key17": "FVSvVWrHsLYirK3tkQQakeaBrGTXNz5PUYs4tjTanpvcAPfv8i12zYELPprLMcY6p2fDDRcHgzRW2gKcZDTL1fM",
  "key18": "5dp8yPA5fPxRJH3UFvyrGBJt6pVKcJohQnvbx1EBPaFZ5QPZrmnduKUXYdt7zRwuH3KdMLnGB534n8WDNmNQ5tQg",
  "key19": "NMXDtih43NC3NaniRJwevL9tGMfFWFF2ywqGGj2tHkjqQMck4LTfTQi13AjaUgXQCrSzbMEGM1LvfZDEPmL4R67",
  "key20": "34HDE4ru98XwTumefWhLFDSdv9N7o4bvRWzBKA7QVrtt2fUzjpxSnuHCJHpmog6ZvDJyv6VJdZXkaqvMQqSjyk1w",
  "key21": "64gnDnmGXGrpeP5xTUNSUCZ5JnCtNJ22d2DPeinvzgbV68g8igXTzAryX4GrPM6zwoE2264yW65dGjTuVeMD5HqY",
  "key22": "62EzevvXBTC5sYxuiTTFi31emhRUhPmrrf7rPQQS6ZvpNcNjQJKhJJoyBHcVz4t54D9zbs5Z8oDJ9zKeCuD6kdUA",
  "key23": "2uEALFnHLyhgLzQFjCxuGdR8UrxpPNpuUKC4i715k1J576qkSjDYyuhirAdomgYyjzgHgxPRqiLcixRpWHzXJ27R",
  "key24": "4K1BUSZjEenswHbXpVaiRzBbFy6zbBMzXASq5fy9YfDx4sXjhxMJhnSBftCcAs9AMdcmzMQyNTG916gyUzSASHJy",
  "key25": "4ENnpFrPWjDhejncd8YGdPjLN764xQduWTb3fgSYEj4Q4Q7jbR2K84fyphSERcWUbAeHeJWTmkivnQS2cvNXx722",
  "key26": "3JJqRW9f7LJGwzS1n6NBVWQfC6szGRSr5BkUEC4LDhW22vbh3S3tKjxDdub6kSQsxPbp9NeFmHLfm1rjF2AEZzy8"
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
