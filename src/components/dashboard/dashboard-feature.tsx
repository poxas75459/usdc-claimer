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
    "2snNcN4ZroZMYgqQqukqTPFg2VqsfGgfnbsXRLNWoBZQpXgpFD5q4mYHqra9ZKfFw7PCqUo4KACPxp1Z7N8wwNVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h9JjLzi61buTSVZ82d5uhk4E5iPtJyT5PczXGuzPe9FjdJo75CG2S1T6sn9cCT7ByGhDMacfQ99dHH4baJND45g",
  "key1": "2J2RnWEL5qvvDSXXFdWCfAsbTbn1vqLRYCmrZiTtUcLXC3CzhtvjeMhR5S6iNzix5EhSbR5edX2yBgNbD9zaKoAg",
  "key2": "2XbW1utNKh2JisDmam1ZcMSyV4MXoSpc3Hsd3NqH4AVxcuiVw7MkjjmtUFFd5PR4jQviQeL9ZoAinv5E3cV1HN4s",
  "key3": "5zE77AuAAxsPihZPfhCQSRra1G65P3FpdhZg9idy92iHJ18DRwD7rAx4xM7GYRhbvDKokbSwfyXAYjHZTgjvsUqb",
  "key4": "4dAQ13dFnW3CKXyi38XSbVKdi6b5HcPnRPQnLZyAf2LY55u6mS1H99T6bN1fh4kKhwt9h9CMyuKMc5rFPzv4yyrx",
  "key5": "fbk6KJGtGYUTP5Gg1Qvc45kDoWQsWRXiXF5iNxnebFFPXQ7hd4z7XJfd4xXyoPC1tBWnjaqCLuoMKn7V84egREs",
  "key6": "5BKHayBucVioYKJ9wZgxVQuZYY1XFU6zGBU8m88Y2QXawgBKpVRzTyV1wXahoq6hRzTrMUHert4Yyt3tgnj2gkpx",
  "key7": "CdywciH9SZB8b7jDP3DN2Zp5758bTtwpD2NzCAtKFu8ERhjVSsexYev8hnWr4WdWtLRzcsuFvvQcxe9VU6Ct8MH",
  "key8": "34Pnb52bHEXDeN2KRh8LB3bpXKhA4yp4XdJRqFKm8Fr7867Mrjpr7Ai8CmXEJtfZsaaN7STnnZJLb1L95opM29Eo",
  "key9": "3W5yjT2AjmPTRB7hhFx1BzRSaPQMtjKnj76AcLQF6D5Af7FMjbTkewBHKZiayiNUw83qxRg3rsjd24iSHCYXf9QC",
  "key10": "BL28JbtYBjXiyoQ6wVxu9pfudmMHdQWCHjgFJPD3xKPYeXNxzE1VqVbAXtuWRisXrh8M4GWrqptfTcaAwnmMJRN",
  "key11": "2nsCvhkjpaZhED6FiGcZkwutYAaCG8j86NL78Qxne16vuvHqjkDM4ZmWU77yek4A6CxEx7sBAqJPSG4t6miZ52s",
  "key12": "2yUQud9iB46756HGAnWvWzV6M486VPsx2YrmujcuBH3951q6GPeyZNGfwJDGdXmFbtWP8DCFimzMnD46kWgnsoGA",
  "key13": "4NZvdQh2vqiNz6xJKmF6E8KuXwS676apNM2urgpRYwjGg9XStJc8fvZUoJZU2UbdcfqH4GX6ixaz2c4Bdj56o7Ry",
  "key14": "3EkuZPYohMWAsg1EGiNhPK2dFdHocmuCA5inNGrtgsWT1Q7uLgtt5SoCngHGMM9JgQ3ruzAB232Jots9j7jifTFV",
  "key15": "5zhqoSVq7VAsP1scoF8gjNVsUFNccmmqxEZfT1JfnrkxvSja525GX3gxkQrSm6JU7qYJQu6YsD2RnjM8QSVsLD6h",
  "key16": "61M9U8VfEQumK89NpqASd6q24WtefweKAeGetR6wdzQsT69isXnT6etGFmNXA6pyfU8fXmx3rWiiJnP8aV622cEk",
  "key17": "vNCqKyZ3o84meKAzn9DSpYJKxvgoFTRE3FyTNRGU2tqewzzDDhz3Un5bMm6Ji9PkR5GYJvxCGeqU4aKNCnCEVsf",
  "key18": "5r96fcHRni6CrAYAA6X3PB9k7hQNf4Nnz7JGf1sZaZuYdrCLrb7hqmYY4HBLhm8KJWCVxDiEv27YQFGCdUMEbhAf",
  "key19": "Zveep3wsQGAQJVJAxX6cLhMPz12hBqGp73JZy3xe7xmW1gMHgpA96H6Lfzc7GW7bmNYbF3RFEM5RQseSd3werra",
  "key20": "4ob7QfMR2EDX9YnR1eK6jibanJei1UGiEyYwDjkx3B6Uxm7GyEFuftExPGgR1hZ95orX9P8zKCvUmYr13DbgaFqA",
  "key21": "CiZUa7CQVQqMRsCnMNnSPoNDDbHXbH4yEztdYTibBH8WbWUnDCN13cUk3cW6EaYesLi3e6sYsEm7fDQkUXn76Av",
  "key22": "4CrZGfoQQJMfz5a9pzb8GWrVzQ2fWKQh8HQbYGLLjHRgyo63JpMHaVWjNAKmmpttH4yjT49dqL4CFjcePfJ3EDbE",
  "key23": "AXjPGvqYgftuxSNbLkvu7ESmMfHKypkfBzHstE2Rex22cPP8UyuFRqG5UMLp82AZCVerZYC9FnavLcGGfa4zqdo",
  "key24": "36jRDVTzHPsj9v3HdmZJTV92i7uxRjteGFAHgmHzY9oj25BhQbP6pqYpBHQ5bhiYmxNC72p78YMfmYMtSq1XLe2y",
  "key25": "2RemoQ6AjJih7CFVTHG4bSMgTJ7vokKXvXVrJpWm7P22jtzErAXHCqvZ1F5Qpyi9pNXrKYeHWezb7d6ogFsFokqe",
  "key26": "4Wv5TT8yL5MfdJrV5KcvfHzFFfnc8kDzexZTiXkHtYAM4EkCZ6YQqPRx92Xu1pDFXyMojrKJCTgkcPFUJ9DHeNVS",
  "key27": "2m6aG6CZXQfeZ1s2BCzTuGDX5LEspAKhuSVDjzkwjVk5ECDuUdHzZdQQr7j7cxudxhYcv6tUJhvsSimEHUBLt9n2",
  "key28": "5ah44dwB4ebH8zCLRsww59hvf9RBbvUpX5NHNKmWXDJJX2aCv9eogyg1iecJZwN78EzjUEXZP96LSMrvkkjuUJm8",
  "key29": "BQtDXn6SVUPrcg8NHsoKQzJ5s9XKWBF8DGUkWTBsiJULA9zJwLHbzF62tnFehhLz1Lj3pc6PCdy5PcxhC5x7JR1",
  "key30": "4uxepyswS7ch9L2rLBEMYPGQYqCSGBJgEdnzHN2WibpYtfYkgK8tSxcK2jvnAdhxtVRqes1UZCD8dnsu7h7jRLR8",
  "key31": "neUt3Den6FUAueCXQw4FqDMrV9Wz5LmnxFe4k7gZsRVcDqMNKLnfXzEFFnk5wCcvCnajM8YstW9vdJ5Sa2G3cwd",
  "key32": "4NBLDLfM7LimKNDuH5dFtQfhQARYTFtVSgzmsB9tZfgLF732mJDWTaaWyJoKPz7NM7owXPG2RNsk9iaDsfXXoSRw",
  "key33": "4Dp2dd7GQsRhSrGgfBJTKs8hVVjYLz7o4XKzLKX9RztfExX9WGCc1LXVUGdd9JmZMT46GhvDgBhVc3goBUxksMm6",
  "key34": "49dPFCehgRjfc19pvKDwLhoz6bBCXdyP4z2Ur8ii2RmoYg8w6PT865dUfztPQNZnGRvhwyf6Ukb1zwy1MuWxQ7mp",
  "key35": "47unF4rCcLgBMovN2gZ9qkYA7x5h7cw2gHNxsnrsDCf6TszxP9qEyFWLx1yTUWdf8AFq57DVqMbGvHRvYvGJSiEh",
  "key36": "LqQFvcVngZxxfdXeMJcBtWKvsQLGgHdHQ83NENWTJur7bt3nrZD8zYb4zxG9ogJg2hTLVafa7buzJAqXAkYF1Jg",
  "key37": "3ut1SVnAAnKzSgJWmFUyj6Cx6evQxacviNbvVmaiA9HpnZkPHRCCndtoXChW4vrzYxxyHytCRV9jpDpnt2PJJqo7",
  "key38": "yymMSnHKj8o2cx9SipWiDKva8uvxube63e1yiKncJrQnbnZeH1feEUMcs8ryGmqcWvNXU2umATqmAgihjGYS9Hq",
  "key39": "2FJ1aDBEGrzkKJRLj3nMKb9Vv1zFGcpwirnfUuJ2gdjpHujAgo913BSZwzG2S1qqnD6rxHYGHby3URvZzuZAMb72"
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
