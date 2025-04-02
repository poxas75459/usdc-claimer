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
    "4aZQo718CUP6fy4KDW5Gm9hxxjvztiy12aLrCYHzissVctd1wbExqT5E25Noz1Dg816c67yEvs2an1VCJG3cZooi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FH42KuA2VBX2T8GeS7a2vk9DkFAo2py3jqLNupS84tXcbGL9h4yvpedKSFuenyC3PkffCqsbGVi1KPM3jKLF3Nc",
  "key1": "5VLTZUJMqY61rKYeVQRXGfTT8F3wXVbi2YmLSMsYw3a9FZvjXhV5GzyFRs2PTJUNLqBQ4kD6oDvC5vWns4iTprvn",
  "key2": "5BmsSfwG31L9MUvBjCM6KSMpDJ7r76ftqsoeY5gfh259NEhDxnCD5hzY6mAM8fgzQjnt2RNoSvzC4m97AiSUf33g",
  "key3": "4M3Qi58TXREkETAEfGFSd8V6riZzU7oQYYL5YK47vna4Wh4pFFECuyFjiJVY8UKK8Ex8zZjc8mZzoRDMVUuAqTg3",
  "key4": "3iyjRoRXfth6UNtAmXTQzpDMJMHLvS9NNWAnY2rhdduc7gw6npazywy2DZytQktdC2r2LpvveDtmcFMRjakcZm5q",
  "key5": "49dF8M2DxQckCKuPciCjzeeEZNJ23Pp5gv3RvWHRAHjswXz43ymunNRq98UBscbuk9LpRGdWT1csfHhHwrMi5ear",
  "key6": "2YWFYWrRZGNzzUdu3oDjrrD4NXTz3ADd6JtgVLowvT6pY5ByNqWg2v69faNPzemJYYLSowsi7Eoi9jr9irmRhbAz",
  "key7": "5DFkPzrieoqqS63MjUggdhoRhPzuX4NrAGRPr2jEjJkxdEoJ6WgrfETEk9hvvXQGr5XHnm7yhLRuBJbVQeEqSvbr",
  "key8": "2Xhm8baStDcKpwJrJWPYLHgwsWLhbZsst9kRSwDQDF5yEmp4UfMSDTwFMoYwQuxR1g63kM7rdBwE8b4pjpKKC6pz",
  "key9": "3kgy3d1UZ5v7hyvFpZtuX9e2xZzp41ZL9LoMxwxuMu5EvWycfDGe7YYtAQk9Y6p4TtuuTEGvjWYHpjz4jToCHVe8",
  "key10": "3GMcYAv27eE59kENWCUKoH2f796ru6hvCB6Y1qNts7RyqmLzBgLPuAm3DC9rn26xuW4zTVZZzFA6AFNCvN8ZWfMw",
  "key11": "8G9e3Zoc8SdpQ6LadBJEGh5h6qY3PVtYWvwe2topxsSw7343ukjAAGqYG5AjqFcmjzFPZnKgXYTLGY7dxSpEHTX",
  "key12": "5Y2Hhn1aTfuZLscHa9aj8Ew3ZNmnfWJpi9SyfpYifAhn2WzLbSaMakjQDjzXNdJ8ytGEfEEKyDZgQR3YdX15wFBH",
  "key13": "5WpUN3hUkaLiX5cGDiuMkbkFb9fxECqU3asyszuuddRAmRcdLnncbKsoJEinvx3EBxzqfMc6fLhxz3hmm16yvhCr",
  "key14": "2HgVGMZDK2rweX2m8Wsm7Hatj3PcxpjUyTbPB5QDZunjwZ4GxfiNkahjercdpzYBvzZxxF72Gd8UoS8N5HpQBfV2",
  "key15": "41epKGgqoT2JtbvqxhiFv77VV7WTapzK5wgX9htDxyrRw5DHP2bJNeA99CDXq7D2Bo9WZ6TYvjXoFAkUU1gA5BPk",
  "key16": "2vgPa3W93jr2brac34dnqTcgRKp8DE1VpXvRRZ8Abih3uJVfuj9j8meqGuFW7D5HTAyLFWmXEpzfy1RmmGV86gdj",
  "key17": "31wGgkoQcehf4YnrJ4Wqs3cumE72aPfoybvs36AdBL16Z3NVJJnk4WgEBXAEMrChDLeMjj3k7tx1psEpXKzz9inU",
  "key18": "4DfJ2CpiJEB6Ch3hSzZRTdC3aEt5NmsCgJQGwQxypfkaXoJnsbCJ1ZfJCM7f2wktPQSvWNoKRC27kS2ZDZxgjEVg",
  "key19": "4Qckf18KnTJT7qyjSaGdmREyuxzp7YAwdu7ovq11VasZxNKZXrD1P8C3rMyZ8Fykgway1v2QTsPJUmUXd2XZh9h",
  "key20": "3MgzJF6kg229GBaPNK5wEM9CL3XdrJuoWnHjxsjqaaviN22idLJW6EKwQv1RxQvkdnMWVFVzrRrGnNDtbPYc5A7N",
  "key21": "5NLCFgsQA3BdDtpqrfEu2KGTx6AVRynMPaRBFWyVYBgiYhn5VLz754DFJZg2ABDCeoLqM4QhFpXsSfnKzc6rAD42",
  "key22": "kCn8y2xf3rieENLonRuytsePuEjrVeZFXy6H7ZyGpB4R4cGpL58tZkuhp1iKYe5ahUZhmkHNsXWJxHcZTUJCM4h",
  "key23": "yYjFUJpwv654x8DZYvGgWpjAFfnT9FrT2TtpFrLZUxWexvA8hXJcrL5etCukTEFXpCcAqZiQVBjF6qH5RgGoBBA",
  "key24": "4vXcq4NV5CeYz1FAHmGVVqZybzBC95Aga2hg9ZMhRL7hdWcmBzto2yeiuG3cF2R41hcU91WYxzsZ7rHX2j4p7eG9",
  "key25": "24V9bz1bT4oXQWMgNaPmLL3HbGBN4b2kKZ2LrcXejvyoXLkctk9z1WFdi46Frfdy94BCp4xaqp7HC5nNzQ9EZY4w",
  "key26": "5ThV3pWNkNLQWKmbRK5HyC9wiaMCWRrDaGvdRjDH38xY9yjZZf3WffNCs8Nfr49BQLTHeMdj1fsbssTeqrjw4BtM",
  "key27": "5aGVRXBbTngwpnrWojvf8s8QT4cshHmqLJxHtwHyKZnyQYmgrGUPsfA6QXEGUkPupsGo6q8w4nXYk81gAa6mApiW",
  "key28": "5iC5g87apTW3dfmQW7AoaHM4Vf1tNjaDbptRyxJEVDVxHemJfi9KZJG1baZjhs4An92ieLTrdw1JVcqNhamhh3jZ",
  "key29": "neRM1jhUgKtAoXLaDxDjhC3QCVWRqJyELAGmGpycn2nhQbjCMUSLu4yDE6K85zg5FMk9kWziXCE6gwSJWjwzdGc",
  "key30": "qcXhW2X3ic4q6a8KgYvHTbR3ZQWsQRaHqn7c6LdPfnjiAYwLAGps3USquhnFmPsMmybNP7gMdzUxVTjXRjLXoFP",
  "key31": "QTBCbSf1bLJ8MHaYNuf2rq8WuDLxuFGpmDsM7eWiC1ZMBV41xWHAZEQo6judyo8rvdBqktbCVNGc2bQ6w7wTVNB",
  "key32": "tm5yvVTnsnFB4WJtYu7ftWpFUcDuScGvemoa5oZWKVEBcSFK7EqGK5a44qg1cAfKk1mnpBVQmfrpQS5PsqNb72e",
  "key33": "4QT2b3V5WN3uVk5b5EXGc9tsaZ5ZLLV4zPNfZy5aR3LD7b2aXJhXN4JPaE7CFo5c8uXSX1sVnuWfqCGG1VDeDu4i",
  "key34": "3jWGGsZg11ELVcnm3AXeoW2VhZzoqsFdUkig2G9UzozkUrACmgi4Kc7tvJ1Zi5RLzc3kT2MeiDnPXgi2JYrgXSjU",
  "key35": "2DMZgQYp8skRJCtyjThAs4tFdQh5yaTcNLGALm1kcBsEdGNMTM5oytcRV5VRebnLKgHqW1oNBbbQusjtRH3RoauQ",
  "key36": "5QVVYiRPvTa7LupR5YhCjNg9FdED9M12E7LymZkp26rBJX4r3LiEL5tA3qdeaTTScZuPRs9zAzwq37f51ZnK6DY7",
  "key37": "2dZYqrRwLLQoxNGMh51gniGj7t5GbGVi7mpBBihHaEegTxQWqqJM64wz5kMMDoRMYdPB4jdJxVBFteFYhU5nuy1C",
  "key38": "3zTHtSX4S8kYTkGREzpMonjNAtPSEybsKkrUB8L5sk9tnVBWTnfZvnCDxsUTpnbu1UxiGxKHZNrSNTev2R5Nijrf"
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
