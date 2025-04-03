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
    "2WSYR65UAfzaFWn1HzcD4tjQjSC6GxT7XpiiApzCZW7Xtm39y7EwxrTNnRtXdhKZFFievBjgvmopyRazkJqBTDaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9tP39rDHLbtQNNLDLSFZ24snQ7QBPVyQNE59jxVqkzpJj58xyCECnAL1yo7ZNtDUf1mzExawGXpnjct9SDkLYar",
  "key1": "2ngxg9WU69hXj8UWHXdPcPm7dqa7FxdhVU4QuJGid82e1KkwzVLRwvQUvRevtz2rSU2YjgpsB1HN5U6A5gffyZdG",
  "key2": "zermZLBe4kdRqVoJF78fYdAhcce5nhhEqYQJcBx88qrcL6MQEs38KWXRiGoQdxUBmooeWgdjXrNNzet5verxHLb",
  "key3": "5ojkXvBEgVDh59vWW3noTDSWiaYTiqNUba5QLs3hJVt96Yhn3u7huXrbWkT8PJvusaKz57UXTcGwau8FLsPaM2sZ",
  "key4": "48ZzqVDDFXMN79zhQBrwLo93p2PxeaUq4CtbhkGUFuoMLexptcWsn8yeBKBd7hq2FKcRvgfvuSDHF8ZkntUZi3kA",
  "key5": "5dpAWXFywVmgek6BJ1viWNRmNWY3snfeVAny6PhckRkMhJoUx4NL3i7ghwWSZm69jpJ2vbWLuqcRRBNDB6qLyDdf",
  "key6": "R5sPTjG923hKeerUCjo4jqFJD7Qnn5ib12A5GqQB4wrPwqYMEMuvJy6YrGiT5JkAvSuc7kGjRQ6eEVnvkbnUu67",
  "key7": "2XHWEf1csQo8veViwyXwXbgxzj33uX8ZkTPF2XsbqGKTqH2GvYFr9EKytsyE8K9SxHLtwJJk2qmjReK4ZERBiqDV",
  "key8": "q7JpRAiGUiP4BnUnJKcwE1H6Nw4fCqTYnxKs1tC4RbjAv5HNvELM93oLTLhjrsTXqaYqQEgHB6UHPB6TjnokNbH",
  "key9": "JBmfCEcHT2X2JxCbxfRgCdHvd36VSciqTheWE3aNnZmpPDA5AKu58bVdqTZczKfXNfJi5FJMHsN6bmE616FL9vE",
  "key10": "4AswH4gZFRCPUPFhGg3RaTNZcnN7keY5KaTy3HTSGVwKE2cBWiWx4VwiPrUC1Piv79aLXiDTpZweKPVxxGyt2Q3A",
  "key11": "2rDwk9a7C1WCWQSnLoqd5YinB8FbZkKATYB1cpCR6f7R8z4NtJSrpo9otW1jwSui5CF8VqKUNVx41AR1FVotKC9b",
  "key12": "3h1HXRxujkmfqtBPJfb2hWadhZHCBkK1Kg8C3mSJug1fu7Lgd4VU3eMjKGJVKy6CHcu7q2VKiM8kuBNwWzwxpinz",
  "key13": "2Uh7XqsfLi2ztxueaVdHqBtLFZoWXvB6bs7CU4GSynEs7DZfw7usZymvTgmobwXi2V9t3WU8vqzmUN6aXT5vAKhM",
  "key14": "653XsddBtm5gocSheGgLv5z2QE3ftbWDajEWipSjNztqHxNEFL5A6YEpM1VaQqJQ5H7ETp8QNJsnfJrM31QwVYg1",
  "key15": "4KD5kiKWjxnUu4MWYP4D13mK1AKTN7pVsgjEYEUG3v6VEAtJDdGq48HCDQrhGr2ysEjvPST9MeWrwwdgsfHhkWni",
  "key16": "2TXMtdEYtzCk6LXFZy3FNkQXFJFcJzRu3mF8hj4kbEvHpRkdUoRBoHxWB24MGib2mXNqeE2CexvbjDEae5F1wrDD",
  "key17": "4EWoL2y6n3tizm98Nk1DnLp5CC4AN6VkLYtM8G5QBFiCpQ6j7uTABtrsSyMPpQa7N8pmt2Pd9LsWUr5AF1Tb9X9m",
  "key18": "61Lg5SbrVdzMH3P2ZvKAN2r5aQYoy6vgRP3hK1s3iNcWJjdTExLJpf96DLVaKc58WkwQeJYj4qmSAqRrDBahbsFG",
  "key19": "4CxZTxgUEKDnYiR4MjwccqDrisqZZ5gMcoX1bL7yhmARXZXB9GCVaZAkdXCud9ZSdkorVDQcS4znWAjm7Gcsw4S",
  "key20": "4aapkuSREUWSTytGnHG4VSaRGrKgPf3XqmjEWnD6HyFbZJhWMmEt5Hrh3tzHCHyJQGx65AeJgqted4SNDMGrXBe3",
  "key21": "3DS1XRrFAcXETjrAtdnC2ZXVxZewKHL5xCpYMPdR2yRoPMiDNLKAukuYNpNNkYSg6uTs1rXq7H49pXoDJ69CWmnB",
  "key22": "4b8wTNwzDyfdx9iYZZuXDt67CNSB5KpH5dfza7UfVRWrn6TuQaceiDgrxuQunVoZiNoPb5eLF1LUtuMqr7C3zD8y",
  "key23": "4MopT6YF7QfXrtckD1jRRB6a3kF2T7TfoyMiJJTrXN1hNB4AqgTrz5WanN6EsuQofkT3RmsYX2shz3yifGu4zE8X",
  "key24": "2H9CTS8ZUiuZSqNAEAjPCXYXC3ZgBKW3gzXgcFzMVnuCrUjhkn8YjkiH2aBjm8uwLUtLVExKeMMtKEnxBBKCqTCi",
  "key25": "H8u4juUKWHZa7WFaqY3uA9zy6NiQN8cERTrHuENatAcHA3oB3BRMPav8iiZJzF1m9pqeJnLedSnTfB9dai4BSnC",
  "key26": "2nMMbmqEDq71xpvjc62StkHGV8BKMyRbLdYKmnj4fpGgKXzXcAoi6p5VVFKuU4YeMkhC4ao6Ux3atsV5kcySTckJ",
  "key27": "4DjnUWL2cEsuMU7VhY2AKGM2d3fvm6nWsmGxENVxWUnhuHffA8RGT82jeL97UfyNXKQuLSah65PssXfRJpwrDeDh",
  "key28": "4s8wGQWDxesYG927dL7n36Fnk6qpVK9q2qCCd3ou9v8MFn62fh5ESfJ35mf4mxiUSjZoFpbNUTsxKG6T5gmY288Q",
  "key29": "43CjGfvy9CFdUeFRaGQgU1cZF88gMHbeKQr8UPEiw7haHYPpWYFAgm3mgN2dy7V6TLXD4nAfNASnHHx3rbSUW9J4"
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
