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
    "3v8hi49QvPRjoSTLVok98FYqtuWowK47gctW6D8PRQt4rP4tW8vSJL1XMJZ9sz1bYAwqLJt5mHFsYWz3RkRQEncL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JShTRMvSLpc3pXVwSYyqxeVVXkiZEd6jc1tEn8XzgGyvkN6rEHXXVQzHiLG2kXM55r4BxRewTNuNkM573eif9P1",
  "key1": "36W5Djt7PJ8LQyw4kz3bUfcYXzGrsDDqLzRWnH686VGmGuE4ikhv4e1HkexWxJMThANYtXkJWidnDWxSvXdKY5aH",
  "key2": "2iCNaHBLrS8CtJxdtBLYyzyyezJrJ6n3kwTq3roqpEx1xhaaLnhdW7GzF5n5VzGzb1axKEaUiq5xmrBk2GMfw7My",
  "key3": "3HWDLjZPHxLjJxYhWFJzx816xrE3GPDofvU3ybwopiPYfrK7Z2CnmRoVbMUB5phoaBjGFSyakkzHtosGvR1edFdg",
  "key4": "v6fye9uikA6TrR2PF8JQ7R25DfRttEdpzioEGHXS7BVfrJBQa312foTdtXzteMk5XYYcMP14zguDGeRJxqScizP",
  "key5": "4jR3Uxr1nQeyDK6UZPqqUzkkgCKGb8V2VzJ2F31vpUoHckeNzH8zj9PgeWqMgNmUD4xgtiUxxG2Vyk5ZqoXZh8C3",
  "key6": "2g5xZyqXqofjt7whZb38yZfhHikq85GQaEquTqXsjhiNUE5EYi7MBJbpw9ztQaf7fXkvnjLkCSjwrVNjU2GQXZT8",
  "key7": "217aeRFVDPXLuKuj1dvo3JNPn1VyFwCLoC6FQnjbjpcfepDoeoFNvBf4FBo3KUF7Tzer6FtnCKUFsbjJ6CpUEJmB",
  "key8": "5sHVHQSYhEFhahMHSEZx5xsazpg3vzjnDCbQ2W2ShFcBdUzZoHscy5ve1NvLM7m8WmiYCzuKcSFbf7tjQbpCdroY",
  "key9": "2RCqMR6cL2WYW21QNQssM9biG6EkNqEcPA3rPBVmqr1FdU4ziipskqyJNFBtm2o8npJcWpUn44X7hLSDLV8WHtxx",
  "key10": "5DoyMGy3cvrK6E68yaskdtLabofoanYzFV2X2amu3WRBksSUiwwoET5bPfGupmVNXqJHoVU9QVdnNKkLWcgAU29b",
  "key11": "2qX2Xv2q7LNdGHdsKg6GnjXYHqx1YLs2CYCG3uR5JsMhkaKGW3FNdouBu7yZadFvxb8gqJ1mgvEyNSnBP8oj3gvH",
  "key12": "59nppWtmWP4MKjPegFbWmPQbSKrsWGnJwYo3XeuL53JMrCZGjSagPKfXBvASQHTZ1qo5wkc1DpcxeJ2eU9jafuok",
  "key13": "5Asma8hgwEjHWqASPAbQgngDWmbUxQw3gLiRHTKeyJswbyZ5ZhZjaYGYcf6bs3hDnLPfxxqfwgR1cd5g46ujc5Y1",
  "key14": "3a7NBfJZBvRT7fy6t6VCPoNmTQBxkRZ3ryrfViWBYS1EAut8WcTswwkK2TiUyn4WSetSL3MjbFaYneEhgc6fEgwV",
  "key15": "24yKgNPSPYG1TdCjAeXm8iX6q8LMmHxuXTfK3FNhsJpyMFzjRSyhoUdRaf6FHqxMaaV2GX9ZCBMwKWLAt4pFo9Tq",
  "key16": "3REGGHEKP7MY7barXFGY5LfhUiGvTCoRWxzpYCyLanrAqsthx4HNL6hjQmhhgdiTHbGRfJ4VpcC52rcEMpfjUbir",
  "key17": "5bHM2cL1SGgHyiW4jSK9SXnn9GoLLEFXMoLHRSRmkKMgBuHu9fv9McbTa7x5pXG2JBxXNFD8MvbR8oCuWRaAep2T",
  "key18": "3JsACXRWrWfBZfncPqatw1XGdxp3abn4w66tNcLw3axpq42n1xeJ2UmLuH57yzKCBBQjNszGtG9oobFqdzv43WcB",
  "key19": "56TCDDN5higQbc4RXBAGYn3CXbUmyfPiTWW1rHSzPNnEQip4nmsetFrW3XmbXiEA8YqMkb47jJE8a5gX45fbomtf",
  "key20": "3zRRdaTg8Fbfb9h6VgT1KCkyh37H42YXQDUiQTJYEmRV2CEuAK9mYLzovvrZd3TGBciN54HWe7NeQfHV7EkeK5Mc",
  "key21": "2T9DNDULV8X4nWtsDpbo4bty5FdC1VwTeBHZZQxwCBrZ8fpUKSDTVGpigfoxCZ6HwfpMQB9265A9PNHxgGGVJopR",
  "key22": "4u7aHySKRjQ8qW5Tv7X93tCvNoERkptGRscwr4fZosbZpCrVXpc5YBqzTPiZmrgvXaH1QmL8bzbQe7sGMBBiem3a",
  "key23": "3CttmJjPVttt4gQKKuj9aQhawfZSy9u4dgWLnz6YVBkEWTqDesXTWgpVNyMqCM2Rdq3tttPEZFSHzP5isdiGWwAx",
  "key24": "5qkvXHt1PDXMvJXkAhyLwFmphhKHW5FiV5GkDFk4679priH9zYw6pSPq2Go8DdgDfqmB8JxjD2uzb2YYR39uJYg4",
  "key25": "54LKiWqC7TZicP2RgA3CTGjugbgDPfTGgvWbSgzimBucv4t2yCxt57MvuXwSCAjD6i422bEqTvDw8pbtd2QDe1z",
  "key26": "5dC17cJrsZw3xdr7U5EVSjrXrCjK5dwsioSMjHvXtbbE9Reckp95EwvHqzt2oArXpyEvUmvArd9sW2KYe7kN4h8V",
  "key27": "5aR4tpqNuX6Q9RkfYvjk8ddB3D4Q59Y2syB9HKUHuTdNPyYGMhcxXv1UjaAw1vyN2DUvDi3jz6EsZLGqoUpJW8cH",
  "key28": "5mvraRXinfueyWRhvFSEhFipGpUX8WLDPfdKuVySr7xMGJkgCpJ8tcpifvDo9xYLoYWMAtPVPWF3N1vQVV29DM12",
  "key29": "2ppqA4mao9ePUEXsmUegyjKSJYEGipNK4iLjEFrGzxgUfHyxXArYVUa9APHKb6ta5NZguS1kvaCzDRDkcDNVoat9",
  "key30": "4hkHhRSxPQB9F6UPQwsj1Fs2GDxQQ2bm9XfKzVuLeBd582u6Mm477ReaAQ3hmsXg3Sfsg5d478bPLbUXnao3rGeC",
  "key31": "481t3mwhiskUBGuzAz5KtH79nh48fYjiAjKZ1WJtyxhTNF1j2FpM6bRy6hyrxdspkPXVQJ9MFGfcXgmamQLfZRdm",
  "key32": "5f8H9CPCGkKvkw5SYmCt6fMqBeF8SFPxnDfY4qzVPDVZuYsSXCmr6hzGh5nF6tkNeWQFxWTESiikAkypJZma93Hf",
  "key33": "3oy4EyZhM9hvtJ9L4kXB7u6LRhVh1wLpofZ5F1KDNs1ozSSvkL3cujVuQYsVmGHgrCt2bFNrrtbpr8B4mwfCMV4P"
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
