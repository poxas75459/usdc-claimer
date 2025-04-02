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
    "67FNZyJR2hpamAwqfAF22gq6SyfujWFucETyBiP7EPoWoy6VT2FY948nbKUGCBz5EbpiMkgWBXfjCwyPZXKyCrP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jdhZrv6JnhBMUDSmDKcRmUE9QQtVuRkKAP9rVv9qg4Y8uyBe93MPb2N3aY7ZFyLB3h816HqBo76xjEhLKbdRQSt",
  "key1": "YK3GogrnBxu8nL1TLrw2vXep34ZQhZgBGivq9GnVa8ckWcwcTRdW6AaH58q1gY7h6xggZxqVPKZvwtNew89DGaA",
  "key2": "3xkEi7B22SfsVLbNumYc2ShixxrrSjrLgcqe25pZmSTkbJ5NTjbKNAsF2AD78LkqF8jX9BPVbcyDiAvpmPaq64Pb",
  "key3": "4FUz2BEFHjajipSGcCWA6oTfhTqC7XPh4kKAoUNWjRxvxp9TWK6cF6YE6WgYfjcjSocwxWbpDZX6wYS4QPx5Qcj2",
  "key4": "3a7LB5DzsZgRDiDLREqxg4cZMKATnVPmMFxFsjjp7bk9sQGQsdxBat5hwnCXrQ8u3vSWUc6mbTcsHgt3S7iMRWXi",
  "key5": "2zzjkFg1bWhPKhNDp3CXFhEggsLz26sFktFUgnsZXkkYcZCLPbTU13EC8cwzm45BUCjnnKQifUy7gmjMs2hJjFEd",
  "key6": "4wvwbxPv3Nva5LcRDxLgDbH9A5EpVg6Yuf6yJLNrLaEUZnxe2ypoYkjNCCGNoKFznnFVunSdTHczXDhf8n75ZKH3",
  "key7": "4Pr8ieeHEnAqrwWR4YDD4BQhfeJkzPtPShWJoWSxBAFUfRGQmVYzoL63h5GJXVVAEg3nrwokKFtMhvB8dVkpknSh",
  "key8": "eHZ1jJRqJmkfWZL3R1wiqmJuS11kagi4FrnaTrog1bDPvspz4X7V32qdnUMWnGDUY6raD7tWqYNG7MjzmHL5345",
  "key9": "56u7k5szfaPgeDRhGBCyyhC7Du5LPPsiRXKmhnfdrgkKyhGueXReXQG9DyLXz6VJipF3Y9YuAbomCRqUUqCvWj9j",
  "key10": "44Bt6LcTXH1f7gJ9PBEMndpp7te9Xz8tZ3rw7MnKqan7Yuk6QnvZgdyZtfTPTqe4sYJTdKgL9k5hxxMeMQRQ6S4B",
  "key11": "67RxrmANy5YzTLkw2kVUnBkWy4nzzZnQrKsdypMRN1xXQif42m3ntdCdSyLPyZHygmtHZe2mS3GwevCh8w9zAcVr",
  "key12": "39wgHha4XsJMXSYpEVBVo7uLE52ofBX56uvpXYMrJdXo1jH8HNhKkNjs7jXFmtdCVYC8ViCpbcNFswA1A7VVyK3T",
  "key13": "nqTDbbLWNZxuw7TjWZNXFKdpBmuoBYDK2vZxT2SrkTY56RM1iRjqzhJZpWMuqaxTqLkgpXRVeo7gEeLNY2dZAXi",
  "key14": "3z8JXXLro2WiUdg8PA3FEQD7Tfg1McdAQEVN2tCP4X3M42apxsE2N5xycMM2jTQ9FiV2j5joYkNcFLjmWZqbJ4G7",
  "key15": "3UdZRBS6cHYDqqVSbvmGwXFW67EedUKp7yjQH9i5xNUp3BEfWrjFwsXFqabSbtgYVCzQKfHzvjxg13hgcEUgURtF",
  "key16": "5Jd667kfMCaKZzBUQVtAt7BRmwf4as9tSJzA3RBdSHvgnecmpf5WVZ45JA24Sk6dEPdFEEpKZPjAYyjSWLWq7cec",
  "key17": "3KfmYHdDg7GbbaqYL2qmUmYVc3cb5bCLSjcyoDkfFoasvwr1iTdHnHnhQ1ZAX1sopKeQbfJvQmWeKzZqEjkamLxo",
  "key18": "kZuAY4BQPNWarfpG8syuuxSFSmCZH4FtxgUw3EDYqa3HWr5U7PxHFno4nYgSLfW7R2MfsGvGkiEJ2QMXtwSsSyA",
  "key19": "4nEggG4FPqHg3XAgRB9rShJYk1dra3XdF9FqbnNAm9w8sWQE9qSrqJhx4TDvnRC4JFNP3BjwMSKANT4Am1D52gyH",
  "key20": "2iu671LzG6EitKNkBQCvXPJS7chU87VWYVbGUL32qxxWZrL6PxujhoaT6Ec2dGFqwEzkaxKKFvskKLd9B2u4YZQ5",
  "key21": "3ph96VngEt58eTehjsY8ReAdhkUdHV15Le4wzkybHfXw9FcZ5fHxDYJ85khbEMxjfdqQpWSVtvmbTePy43mQgWxM",
  "key22": "3L7X2SzeXdRv6aCRERmKW7QiBYCVDrVz3sVRBod5dq6cyxKU59Hcpuj4k5wQr9hvNmeWr5up3EF4QUfzBHSZETh",
  "key23": "uDSwdcz12wUzSbJadvkj2YPSs5Ub9upBPeKixjwut5d3oJUfugWnSY2repMq1m933XV2SLmch5vbVbgfTNdFixW",
  "key24": "647krA7apzsveiK4oQxVh9S9hmNkrL8sDHA3hZnkHRxfwYcp3cYD6TKmwZQhj5cJLNK8QNTmAnK7tmuyWtWTa3ct",
  "key25": "3gCmptKNUNbZ3wYSQ98Eq8kVckAGHMGdW34z2PLHXDh8b3dBR98Pkcyjo5HjYkbVzST529B8UypdVDxkx75RS53e",
  "key26": "424LW8Lvbx9GXyQgv5VwKQ3HRcUK9ANYp45fw8Q3G5Bbi5npdEb99BuiSy53z6nH3nmJrWFXoxwe9aC7aoDspkU8",
  "key27": "3UaMWwUMyuUtW4o6x2SMd9qz7iaNgkq3Zh2U8i1hmivSjg7RfTDKMTqdnUse9Y9FafvgvyLksDCNPeNtvQnwhLbF",
  "key28": "2WC4ttu8oZ9Hf73HZTa2SFCpGbnKaDRJSmmwLzAN6RmssKLN7qSy15htne817XoXnDsRVe45xjdzhuAv4yeqeuY3",
  "key29": "54SMWDyNZaanNARZdQXyokGKgeZSc9oPAecYdeJ5v1BpcfgZ381He8wLFJSa3Fw8cyWykoYPBAu8z3ddTTzxV3Ak",
  "key30": "5pGpsyRceEditXve6TGFHkd6GNf9e5AJy4uiX1SAQDfhKS4XiUkDXATp9UB56BwFeAo3fkHEry17hnJ1K2hrjgJJ",
  "key31": "yZvwfNW51JMCibLkV33YpgzLgFGB4rCd4k4DMJ65xfCqMSUfvsx49i4RY2X2zuVb49BbvP7VYrYH3bo3uJg7JKT",
  "key32": "2BopoxvYKAmwAeQYSqpKQ6g4wfzVCKJJdp8eDkJUZL6LUp4rrUez2La64pGvn85kB4dSaxg5JQasebJ3EvinHGgC",
  "key33": "4PbnU5gvy5zWY6TUx7ERef1ErabRo9Z4VMj4tBysXwSu1VwAxFzURx1LvHn3MKrZCYxR3XYTijuY9NVRe2Hkoqv6",
  "key34": "34i66oZFzUE3WQLRtoSQCGtw9evyVkLgVsKE4wGGv3YLoe7iVcwuo8SF4yGDssdVt58B8d4AcQgVfCNHgNu2XjaG",
  "key35": "3yPpsNYTeUx7Hte5fky4mBHeCUUmZ1MedY88gpUaFQrVwTC2HixC9Q86uBtyKyrXtG9Eh4GME2zWGaivjnQvd6h2",
  "key36": "2MwhnWNQZ8fJwk6afdvSpbWrmUVD66xDyyoTPWaYwSFt4MF4JGVCrkoawSGxDp51DjagkFWN48esJ3XsK3vDmZ6s",
  "key37": "2Ka7u8tdY3458jv8rQ5dC8ZAtmKsZPq2SfAUcXuoEDHV4qbRRnnqnvRTGiTw688tLkiHHcxiKXSnxXNswYHAHNZK",
  "key38": "4jMCVZWrDqsHUrKg7qiM66jutxRwDF4qGkjsmwMZZyQhAdy9nhfXBWM9JzPmFTUL5U6W8aRyCrTGfqt2W3v4ypw5",
  "key39": "7aw8eoxWu113NJkUjmHa9b2kcqFLGWf3YGo7nNCaKu2Cr2nD3ZeoUkK8nfGViB77jQEFBu7suPEduzEWm2RjFJr",
  "key40": "5isjMbZv9pQZ5GnNYa2nAECnk7PsmFZPfkuSkbySiJjD2LvwRZYHjyNPbBDrvb3nZ6RJWRcgXNEwzB1dgLhbAkGC",
  "key41": "2iFtEgzcqhGd4oMgH6z9hhkfgJxWv8b9KMXL3PB4iGmtEFJk2daCTt5mBNcjzxLWLQMir8wXyQjzqND4YTaffHeQ"
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
