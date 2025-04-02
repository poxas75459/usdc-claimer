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
    "2tqaynXrXk5fX9wiLjXS6ohVCSnkmKqXsaAxgjXpLEsCeCjZYswrjr5i4mjXaK64VqmYUCuEEVWCcZ86sBWBnL5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bQ7Lxim5BuqwGJwGahsiUrSgWVyxnzowrtaqV6djwqyLqWxjyFdawLaokUJvH53jsBV5FsxR6vKCcMByg6Ekqej",
  "key1": "2xv1fhS4u5x5asMqzXzmouXsKCitDQ7UcfP7H7uhWqkgycPEDWTutkynYr3LURgtPvuojGcMUkPgpTnd2c2RAekx",
  "key2": "3zvu1Fezv1WUsagcr8NK1ELQAfLaVd7i5Wn6favh29UQhA1C8YoWswUHDfpoEbzrxC8JEJgFW2C81uCzQwTZG6Zg",
  "key3": "5nThNdjWV5Mud4s9tJsi9DCxnD6NFcJwmz7AT5h7SceXfsrHZZHwKPhgL8ajEbkd8TfW5JQkdj2TgtDvAMbNeqqp",
  "key4": "aQYZL7LMustsnBuzdc8ZMRpeWAif5G6UZuEc9VpuDZ2dJUDRV77uXm7W3qoWENPByaLoZeLsyg6JVaueVT9MRpR",
  "key5": "YyGpQ24fKCVdzQdfBUQ4SrkoQB2vnURkEDHcXtQy8iWFxwA8cDP51B3ZXBew9JRAQWNeRw1WBDNzgMfj4Vujm7Y",
  "key6": "5XaX6nSND6Fub7RR9KjMhTPnsPY6sxrx8nUqR5omB6ysHM9yiQnK8ncMumVzq8PVPn6KzGDnUgjzoT1xxvfEL5de",
  "key7": "5xd2GGXGR6YQm91RdPGDyN773WXHVkrrbWDuBJwKKmHHY5UYTuVX6oQ8nocEqYkjL54iM9dA1xdhx9oLY6groaH6",
  "key8": "5krzyDKQbY64fEtz36V5GhRRSP9UH7MzkdUep4iV8SAd2pNT1dNZuD8pQpZZMZU7zBbNB93gT28r9dpJtaSKsAZW",
  "key9": "5w9K6YrH2QYDS2Y1XtYhpBoMkM7JvyjdBXbDHBAodFvELb1fZCLHs87vQyMuKFGr6RdrPXq8iB3XGtdPsAt8JM6q",
  "key10": "5pE5wW8HpGjq1Srv5vNvWjRstCjVJLPctGF1upChF1omQ6g1F41dgaH3ECchnowPyNDgqoXi7SvrP9bycA9V6DmT",
  "key11": "66wZBituKEwZvzG8mzLHFP3cSYvQn5WwR2qe4uWQMJRbHcpTW5rWdb2E9BUNaJmbwxeJfKaHeWMZeEDkuGdZtiV1",
  "key12": "fR1jatHiJiUM3Q1N64AkBAuR3q7gUgLj5YfVoBdX6oNLTQNK1Xf5gxHcZubahxFp8RByr1D6LgSEupFLDDUr7XX",
  "key13": "wtkhj6Ed9i14dcbejBXK3USETkHov6aR5x9wyDitjDSMZbNx4RnzjD6FzRoLWX4myuKxFNwHAYnRcDHcUBx5Btb",
  "key14": "35HTjyhAkaNrtqUz7rAd8xQkg8RzRKq95oosUtevtB3z79ndR5wPXQedREcMKZjxH5yc17fRXkJRwARg1WEv9vCm",
  "key15": "4yb8fMJPb2UxcN3WofLA8148Dt3oBCSzmbQ1xqietxKGwbCBW7CRg2s1CJrFtauZKQkTiqCiwz9QWmyVc1hec1T9",
  "key16": "4rc9AMKnxWSLh2TXpfnzm2if9dfQQLCw6HMunrhx2PmxJ3Fn4B81pHQF1HpByQnrDopgAGAj7PMuQFvjQ1MgwYnx",
  "key17": "4uq6K4nwMyFGqHC4qmVDXqf51LCnPe9FnrNt7XcecXjMBDMs7KpzCwE2xkKnwSWxkw7ByRodzRgQdLQwgNJMjN6n",
  "key18": "4Uz1KxiZQ9F6rBgEq7XDv1bb8fwRBemFzDHWxhgxPjKHhNX6PpXQBUcTp11FaA1Fh2rPNosDrjnAiPNeiYNi7oNS",
  "key19": "zQHpNTUGCTWbFm3sxu3c3gfBoKUt7NzLxSAqUatqyZa2v434LSVVFBM9TaoiTje4rDWhL81nMVJK71c8Pkawf6D",
  "key20": "5R8pYcEh9PkPSQmC8DVmVpUGXcSjo44npap5DmThE4rkEoTd9YhPk5PT7G13WWBr5nuqnc1xGUzBZRaFCHJy6YKo",
  "key21": "2ZQPMpLcX84E5G6whhYTLj4pcXwhqYsi2oPVRYwZPvdcYrgG7fYh6vQLMpBedxmY1YQNMA4V7YtjGm4WpRm8Lutg",
  "key22": "3wSPg3LT2YrbtrZeGrov6rnsnVMtXtf1greHsBEbGgJqTTxNun5pgwnFp4CgVutCerPLYmHNZDTTnp4949PzkP6o",
  "key23": "4wyB2D21foqUwVhta3TbU5yXLEZd6NCrnT54sxQ7nSrwXDz2SgC6zPRoQD9kVxTStuC4PwvLvjLQY1DHpbgtBs6x",
  "key24": "y9f8M5CC9wPSTEYTL2n5B8Z8ZdHo6FdqTyxVPGE15KxD2te8M2tEiPH8nUepNCyFwXT3SVNE7ovATRWQtmVXWqU",
  "key25": "nu5JoADQEdSpKb5j1eGgxULCYfjDgUHtDdFrihmhsHxdu1LFuggTNzBmmy7HMkU7hBtggaFGkYAw2WdHgPoKMEE",
  "key26": "5utsmujK6dS4AzecqpBEtcKZ8VUJBHuTbgVdyggokRvStovnagv5zJtjkv8uaNxhv9ontHafYSExXitcM1Z2ZWAs",
  "key27": "Cxh7nUez7fKabfp32YXpyiFYy5fgYRT4HjjmY3mZ6FkeKYkCoriSLwpW8G21TcFDDG8NKHEdsduByWfL6yXwDoe",
  "key28": "2iVArJjMqxqoMGGioRdr4H4gAWypL1VdXR5eU3EkZtdJjtUvXZhiQ4pp83ha5SGKFhE2kQGMgcfSMZ2ZnvvJ4RFg",
  "key29": "3WvYhrc8NHSF3a37264iucaorqN3oAnPC5KmaPXRqDpsfFN7KGMAHa9EpuguqaVuk8j2sx1aQLU3MQbMY8Dzd6pN",
  "key30": "38mQZv3ow6c3zAs6ZnrNKG2exGgNZSk5yQgpWqfYw1Fqx9LiB7sPJXpbdFaSK2Rvi8cMtF1VxyjvzemEMKc2HiBs",
  "key31": "2PE6y5M9RsVbCfMSyBZEjdY1dQTG4kbrasL4tX6gwnugruuuZ5UyMHoWYfyi4a4j12RtWMTR7rtSg2LHy7ZBFr6s",
  "key32": "n4qDrJNJ7n7yPHDyzAWGpQjk687z6mQv3i2xYSB96nERdv2LZgtf9KLj15GuqLoVpb3et1JnvYhcxFoXhsVqPbs",
  "key33": "38q47yMYjycQx87apPCu1McpvATcfpcnNN9d1b11fBru5CuGX18bUVYSuXVHL2DwJJqRUhZJRMte1gzCkpZqPeH1",
  "key34": "3RKWoD2CeNAVePCLgvmwxcvEsDiUAkFfSJMp92vz5dhfG5sKhH6mqBFhqYnPbArZErhk9iDo2TJXX1ztHzfn22LC",
  "key35": "8iLffZzYKNvgi6nNVbrhCFEyVPfoQzx7VkLac7raK2ypUryfcP63CuFA2qnvGevpJdEPNgj56VWWj5i4FXCtkt6",
  "key36": "22YPFSMfbhwMC52RPxxXNJS8LzjwKmjyNmARbMHX4zq18Cj2SCoGers3txWhjt4Y7Sii4jxU8KXLk2Vp1pEiRx6u"
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
