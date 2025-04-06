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
    "5wwGcXmtH1nYsyE3Xeaexvr67KtStDiDJ2YxTBHLZKSxB7pkiUWjoa97wQQTZ9ZcgBzgALHNwhEDnWh9LEJ7BDNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47axBebvBnoWgf2PJRugAGLKNGjS7ayB3DTfmwkFMLfKcAj7YgLAuG7qCn3pmSP2PFctAamaELKFdBtJuZ4hfZAG",
  "key1": "3HAnJ8byGHcvNecNvHsuhRmCTfG3b2WTHvKMYSYSu7yiZLoEaamqamEg7qY976RTanMSPcNZrcyBiKy2a4HWqm1b",
  "key2": "5Yqmn8zNtWQWEhX1ws5qRyr5LqPoS5XyBPpBDqGzobi7kiHRTEnX9iGhz3NhidVqVSR4nZBfy4asZYa2qsk975CX",
  "key3": "3XM9mo79WhdfpPzEcdBo8aNhZE7zGyLmhFsrkfW4hg4JnPPH5w9b7uHmkPVErm9ku19NF7P8rYVn4Rfn21dWGY4p",
  "key4": "3wLsLggZNcAAXMWReFdW7pNpq4KbmphYivSENE3VYDVA7fRTzL5KG6T576wvmihAJPhTUimwVZsxMVnKQJCkQ6Ag",
  "key5": "3X9Ake8j89qwtubcztP4qzScD6GtSAX8aD6sfdgsJvCbu7SndCXDLkMhnfQAnMs6VsqVtw3rgBTrN6F9GNtZqZpc",
  "key6": "4tFvRnQa7DrCfs9sNjJYnBavzk5fNGoZdpGzDXXzApZhrdzoL7iB8Yn3fPhe9ng1aU6ycDZZLPoNAKkN2S6N7dMK",
  "key7": "2PHQJ1AK9NCeoobVqKwsxQ8JimYo5BZwAxuNrnSVsYHTbJVkQGRFKHge5bwh7vRDxUJSvz2fA7jM7a6UqGonDjbH",
  "key8": "npBb6b1P6n9TwLjd7BVGdyYTar4PwSZiN86a4w8rkjskNtW5srNTJ33btzfcxzH4rQ4pyZDyb2ipyAbEnLwe4Fw",
  "key9": "2uvz2hf2eADiV6Nybj4qJERnet1dHQRkKXkrnBqT7J8T6DVRRqT5ex6ocEssTd6MErHs6r5Dn93jEiubHcdNvqAD",
  "key10": "2b3TcrRw7zniXb9PLQQ9tJqwusEWLZ2ZxPLvwwBcAAktkmdjNqR7o25rRJtB7fVB5MY4kbcSp73Nu7Mc8xUw9Lj4",
  "key11": "269ZEUH5QPbQYLDFaJNS17EzERUcDnd7NeodZRCDWV2DXT3nt3C2xpWHPdm15bDTkpAnZGY58ZudbsSB5wJRDocY",
  "key12": "qZMr7sKnLCQ5iUVfw6SUpgXWfP3BfZHeWYJn3k1jryj1rjyVmR1Xx1V2p6wqpFu46qQRddxHT1LCAmRKBw4tTCt",
  "key13": "2S5RBahaYRKD6SSuXoTMyxwh79Dg233uY8Y25gxiubGnRKSjVATBqVrX2JupihTgxffvS1T6zYnyrVTp7eCnR3fL",
  "key14": "3KNxj8JXjn1tRDgJb1vfsrw3WmMWVq3qn1S8qXGkcjT1rFyZcfUooT9uyzbNkbJy9AJFqcp6n3VhvEuajcaxYqnv",
  "key15": "348tQV2jgwDo1fhZQ3MvKYzZTXid6fbsz36ZgqPJQNxsPfGjur1i89QxEWkcnY8u4JLD2w7qBRv5dVygQVvAWMLp",
  "key16": "3ZirGtp7AdKEBsfFg9YBwyBuCt8W9kqnNMCTTNU9k1JjPR5o1nbimpVM3HR9xV2wcQwaS6hc4dzbg4MrhRhXBsZW",
  "key17": "54uYmzbjWybf4oWCSYn78tvTdT9L5LZzyUGvBgZzxJUvv4rUr8drnS7xDucC3whmH22htnF3cWJEjKsoAg5BPApv",
  "key18": "uCuKCGtqaX3mP97WTMFj44rViAAdnF1kZvyW8GpbbFzY83zd9B3VwQzNKGe9P84gXyPtFHgKiqQVdX8SrfEkGZz",
  "key19": "wMp1sLpuyJWpnqAnLnx2ZTsnyMdp6gRZSJ5sinbtwXozQeGQXCPcSixSCAgQkgUPQdosQzCyywJvkhh3msJEjfh",
  "key20": "2TCSuU59YnD5UkiUGJUTnwh6DTkgp1pc1Boip3KZeYn71TnvyVhqvpkerjDEephWiZGh2w8dNob3mTXtQbcdCBQ6",
  "key21": "3PdgP666vL6H8QqUqsLynN8UDgqq1DDySELc3dDmrRpS7sxmmugWBSETwF7sdrdYVAsG1CQAPqpzT3jdoQ4UdgWH",
  "key22": "N3kYfPfqSaGU1ChknGuBKu3eiXMvYUXqcHmeVEa8UXqUut3YDUhURpv9SuW8ToJyqLTzU8XQiGiaWqq1CuC9iR8",
  "key23": "2EjHvxwS6SMEYFqtSZ2aLN9zKPYzsaNPLzwXxPxvKfZtK87QYtK1XWmgt78qB8BwyJy59WkSFvEHXxXdBrt6CjNV",
  "key24": "5sNo1hmsWPE6hXbsFttv4Pf6zBA5JrwMSCiQSfivpuAEEmo2Db727AjdiTsnbqzwKsiYPt8V2uk6ie3pnUbxLDy3",
  "key25": "4usrVYjxKjxRJPvqRnwg78EYLc6833EmrcCvpofX1QNrjFfJTFTN93aNi2zKof7WvgpWgNVD6vhawrCXR7Ybfruk",
  "key26": "2A7ty9tjoYVz1rECyrjYd8LmCEFaCVxJQahiJ6jBSR6shYx3qDnuNvMGgtorwYc9DG9x5rBuuR8TSGn9Jpsu8gCc",
  "key27": "2bbnDS9iC3YzpW63Q2c3RAKgBSMKT9RVTBjJdsykTHAPC895GUEgHV2XHd61tuqEAnL6zv9nFwU9ULYSywXhwQ8s",
  "key28": "qiJRKDA2Ys8VKDqWJhtc78WbUAvwGHQ8RrAG3DZX81kEfwjXTnJARFqhnMpnmKwGXNPXQ4p8ePhTYuVRTBiyNf4",
  "key29": "4zibkHJQf7EYby5riRTxa3UTfFJYECVGKNvrxkvEXvh1PLTFfM83N1NCogJAUQUW8gkQKfRdVfkh1WN4SZfJrQYs",
  "key30": "4GPgoUsoFWK1S2dqkpg84guPNTjmYyqtreRkYLA4FCjB565SjNToJDhKHkE7pSahiFakpKVEouzA3Kp48szqZ7Wy",
  "key31": "2QUTi53d1y4ZfXEDwe3QXDrN6UKW6SGGRKzTKhBHP78zpJ4VrgAfeYQN2wUTjdbCPgiPSSzwHzYSpbEsTZsU9W2m",
  "key32": "4i2BGWfRL4P1tkkSd4f5FRcmVhcehMz9r4oNXzEqb38JLHcodeiz5TmhxRq333iAGfpCpWuBkWVqyNePDArvbQuw",
  "key33": "4LyCqMxNX6GCtvrNkqSzeeQumFthCAx7Fc1o36JGKLEQfLz6WgSLtW9d7YgbUthPDeiAUjP2tsVqaEoQqGYYvx6j"
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
