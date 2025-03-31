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
    "bVPLwzaGy32NDzgS3Rt1DnJcGCVWMA7hFj5Tg4Z5JhrrtK1jVgqwwQPYFMaTTnJJ3HkhNeKDomswwjij9VCNZCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gqYjs8iXJX9ekZQSRPvNmy8ESGga9fW6wLo25ApphJRdyAvyvuH4JUhnDWtrdt1DAG2pqm14NxjB6PSrhMk7dTq",
  "key1": "5SX54mqKSJMULVnSyXiHMT6joiX5c1onCvEP1JdEib3hAvWgE1bCVYNJGbE15C4eDuwZF9nLAUTeaA1F8naK358X",
  "key2": "2fTXpcX64cYsQjxcnxTqwSHn1ozpCB56mDzBtZMtzxWUak1iv16Lwfy7SKyuhhnK5ucexrxhtsvWERJQ5vZf6GRL",
  "key3": "5ZKayWq2gW2A1uaChsbQWYJfVTzuPhLJZ1wexV8eC1QCYagfKUD4nVorEcaXnEAGc6X4jgbZNSffTkdksCtEtrqY",
  "key4": "479pEjLqWXt3aRwoXP1JjaW8RwaBegUTB1Y6DNy8wFbr1UaNKeK4eYW2xF3NirPMQBSxTvhFmQM5LRHkWkTe8AJR",
  "key5": "3hx4YVhFvASSKgNiyotAJiPqzsZYDfnLCfQf444xW4DgPE3nfi2bDc5X6ePyuGXUdDp3zePM8WCmEqqCaMUy1dp1",
  "key6": "2mHxjecXcGk6MwWuf87imvx6TuqpJUS6mNpHUJ8nudtZKc87AUdJefVGL55Kxb3LURpyr84u2fZPSEMnCQXHt1x4",
  "key7": "3uQiia1n2WXscwfXg2SHkhtDWxa9S7hqoxBW7tH1Cmbw6Vs5jKzKmtAuLaiDbERCmXqRYbvJN6vBtGpZ8YqrJm43",
  "key8": "2tGRwmyN6jnCLyTPRyht2ub4XweuLwfugVkVxoapSJURu5bYkQxnTXe2L2RmkCrBMzrrVxantzF8dSACCusGoTkw",
  "key9": "fVsuff5Pm3ejsvb9qHAR9HSxPn9MnEc5d4NUu1k9CTc3Eksoz4kKNqp97pgXNhBgL3TRJJriwFjkBCppNh5bGpq",
  "key10": "4GYbM4XQb9Ak5jBL8CpotaEnu7k14pxY2iw5BEahdMUwUZ7poXnSZhtT9RX7LwraCN6NGq4pdTqjSRTSWtMdNSB9",
  "key11": "4GZVN9PeXQcAHmUMvirfPZe7WWMQE9Dc4uE8BDrgongEjc9F6UUehUbs4LHCbuHQF6GVd5GNfchVv9QYnXXcSGTc",
  "key12": "9RwxhyrEKmmBtAbUwwd4J8uqMBRMRBL4hC7Jo6x414u2ZJREnMohSURpmm9zcUej4JcHpyeR7AYAGPphkgei5Td",
  "key13": "2jNtMzvaAe5W7LFj8iuFanUMfLUhVWKqsQqrEcc1pLCcrmxSt5PP8LRCvEV8F4Mb1U3K67c4rY2665Bs1cHu86Tn",
  "key14": "4JQwghNvv2Xuh31Vrt43sHxJ5PnYnxyW49ZAz34Avr2qZKepj1KcrB1a4Tdxt2JkgecptUPnU1zLZDDTzDn3EUaG",
  "key15": "ZBK4BPUTWRADgjJRS6wwyJywbNPwnY78i3pH1KtgS54LtNpwseHj1p1VW7Uh2KyyDG2425zDEGdRLch5oMszxEw",
  "key16": "22BLD42bG2jzmyciZtBoZEHjNWKWuMgaw4EwQqTuSBh6yA57jdpy2H1g5kg8ZjsXafWPGsCvBSAwGkoRoGsHzncs",
  "key17": "2eVWF2g4DE7m4XPasLaXSbG3MAv42RRZQiRUgWqj6SB5kXsxSUGJVPDW2WCt8Gsdgroi4acd2ZaRxxZ48dkHZJga",
  "key18": "5S6u21J8XRBp8HzjFivVNP6KFiuD9m6tmnv51KfjpnALZrPVVsyyhaCV1cj34Nye61xrMas47fASYUhBDtgWByya",
  "key19": "32m5qnWnUakrxKXQP8e5Hu5hRn3D2hCtYJXFb5odbH8cKn72yH3ZBTJ4GAknUwuLdwov4R5cUWKSxgmKLjrDy3zs",
  "key20": "4y237DAVreFfmgyy9EdJGDDbEhswb4avnPW68dgwjkiJ6bMUXRUscTSHNfx57H77PZDqXCmhj6q6chwzT63tvbTA",
  "key21": "3kVKJafaQ3mCcXt6K2s29WerWokmfrQRHhvUnEhjfDJZ1dyaoqPBPdwvtWFS1QzsfT4eY2oxe86ZzieDjrKBGxa2",
  "key22": "4qmN1mL7S7K7ifP6JH4dSTraeNeAbf8cd3dKfRQa5nDHmoMB7x7rPx5Qh59BabMRDCp8eGqVY4w6iEkiuvzJuahn",
  "key23": "425LMxqTDn9Pxocj1RGW2CxjMyJjKHCkrcrS2H1yLAQ7QA6A6bTiH3rMEYYj2UrZ6yZbb8prmupYrF7eSUGxs4Lp",
  "key24": "XV8J4Gy7rYeqpb9NCcszG8Au3jxeCibdsobinQEyzy9ZrBhkXtPAak5TGpLFoEi8azCdf2Xk64dLE1GaE4vP2eS",
  "key25": "5hpBTUxwP5P37PQBzeRFWQgxuH8PcUwvBkiUiHvs7jSteeGfhpEVZSa97vfCY2H3KRrwdJptJJAqRgVqTawiUkAY",
  "key26": "4PP6PmMHohez6xMKeEH6oxTpphATAQAT8RoLRcaSeNWCdgU1WdPsG5WzeK4489i7ksSHnzfniejxQ3P9dYxJtcAc",
  "key27": "23rhy3s3NCfEzU3MJNoEpTAo6KQgwnhmEFpRLBDRT2n46JpjmuhQ9APbjazr1SAwAmKbF7jNjmzNJfCxz7Xc4ntz",
  "key28": "AFeBVn2RmiRuiwHcqmDaNDsPmVWEnDZzZ8G6Lpd7fxuzrfTtskPLZz3mfKmxfS9fmcNKZuFqp6npm8hp4hf2k4G",
  "key29": "5WyZjAdti23Wmzk3jA98SYthLjZZ9gir5S42p2SMe3L16VJfAWiHtHaumrCSPdcSHxvXf6f6ovirV9od2X9GWzEY",
  "key30": "51d4C1X8NQCY3JojSdbwWTnpZ653fpbc3T3zMrgoLehMMF2eBL8enspkLbzaf2MW8t37mCZnjwejoVw3FKtvjLKQ",
  "key31": "3HxFcnRqVcFii5u7eiL4gh5bUSy7zbSok9WoZRx6Vd87NToGvheAvq2C4gCjUu6aaCbhby7tPXgjRPiJ2bv1mvv1",
  "key32": "3Af1Y7o6Dh6EarsPo7u2Tk95ncrrDff9xe5THSnoWrhoxbFPMdiAnPoGuYD7zWNFFP1mdkK1iQmjSQeFBqTC3Ysp",
  "key33": "5WuL82SP6KKjiKzw8E7f8hbwvAMKZwUp7wPC8MspKA8ARpLnNPUHenTMoVgqg4EQ99yot5RBrYc5pcXHsauQgUVz",
  "key34": "4QzPXh3bZFqGa6PyQB7faAepGnHP9aAwwnJF8hWV4YqEwox3S6BCs6BF1kF6xXDBid9LGn8z29TrP5Fy523LWD4G",
  "key35": "52BHZWmauWqHAhtMHi7jhdHw6qHqgfrpf9fch4MmppwRhW9vEErS7vm87yagAeuNR11Uioii9fSgwsp9WfjzPYc4",
  "key36": "4sTt74yjjwRRd47UyjtPpANsctWucVTDSoJBbSvPKhUSgJahCNbtsDjCESTk7PDNaoxo581pocXve3t7WqEWaVJW",
  "key37": "4oZM7B4LUSJy5xisFJFKggmTisQxTuHmA8Ns7V51xRTHZi8MLEwtXu79C6Pj9k9QQMFWKhXpzHGWZw9cv9sGwQD",
  "key38": "5mzSjjEK3kzwpTz7zTfqQPjLwgXbHJdcni6WD96cZCWWUv924Wzjbc7zvrWG23ZxgXxPALBZq4VzryDe6NyqrkGQ"
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
