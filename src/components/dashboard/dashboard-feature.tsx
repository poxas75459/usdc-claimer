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
    "31KReFLrJsQbEkcodABP9W4dtT5ci3Yi682K8sRSq4ADdiMtgZiuNhUaZLWKT38dJ53baFC5Udg3gWQem2FsbRfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xfPz7BtSYyQGDLwTFBGwVNtFoiPxUXHA5UyBaanwCdcydRu2rw46EJU6KEXwGNWDZ25CsA1q7Jwxct4QMqkJpPj",
  "key1": "5zH9jo9aRfPbeavAVH5pJn7GvXbCkcJpJ65Mv2M4pdfSSBTEyRoQvgEVycia9CRHYy4oMawRxjoFdGTEDSGQjXCo",
  "key2": "2HGctLNH8dyPviXHxZf6FHAkMexiQWqyacvDmnwKV19ztEVNToKq9hTvkcaPgjRkCwoVV4H1HQmHvwjbe6e2MSek",
  "key3": "2ZzBRvhByqsoEi9sQVZWaPcT3LN8RFnutLDUKF8X9xgy52VuE8NboE9nLKS4kzKznmkY2jJKZAgT1nL2pjsgNTL1",
  "key4": "3KufoSNjBphsMEzFWesXP82RAY7yHZjSePFGgJvYsQcXTskdoFpormdHTjmhrDtwUiozKvm71jYUgNDgeDYhBAPw",
  "key5": "4AwDaeUaVDozCi74BaDXddvwHpXQsLzcdeS1vtGkHD5sTK8mGDK4HiszEfBLd7r9L1TaMTphjkAThbs7TiTyGSsk",
  "key6": "3wZU648B297MoYqUypBpEhJmaVGfNo7rZKbU1eXnmTxvX4KMDVmMs8MB6SYpUvanHnA45pW6kfEhUwht7NuvXAYW",
  "key7": "4QTWbXPubh1vdAx9yYZiqFmHnrw171jGnFvKCe41Xw6QAsbqXATJAf8dZqEGUzXTeC7aTTF2y9KnfSzc4pMhMuA7",
  "key8": "2xEme3S9JGjLMh9Dn7BFv1eoDVVwHmAmnftKFBuobM2gyFWJ4ff5NKqWXdArv14GAgZg1DJNnzEBozt2RFsYKARx",
  "key9": "2UViNUjmUz7R1rKHqcMiteHtMaksYx3Xif196ARbLdq6Sw6ujJnCTWnt1rTEDieC2YfDfxNfKYANWnPUwFwTQ6VY",
  "key10": "4RhP4PicLEeQCoj53ZDFdhmMTMmfZsdSUVTG5ogmkZpgmThf7RJVw23wTKDYpbgarinykQCjqVDZ7STxDxbb3sDU",
  "key11": "PQ3KZS7ZmcdxuuDwB6fipeYQoRdEV4rtUGd8r1DbMEUQt2iasSSdqTFhTCHgpboiMKCiSQp96cMXXjbFnn3zWZm",
  "key12": "2g1t6LouuFMhM5YKfdxH5uaKCSqmSYc6C26ezfWYFyU9ViLoWWaT6J9zRnmVN9uyfc8Uq2RzXk1EJjvQoqfCYg6N",
  "key13": "tiGNcsAu6yZd3bkTYJpZ7jX3gRqAVptUyE9sqWZzioi26CFbXPB8pSaGjZCGHrmg2VhjJTx317J17bsmRogocSC",
  "key14": "d5xNNumSjE1GUR3u6KPZFaukhSQYCBxtq1f2joUHwaC1rNRVC1s2qvsUapop8PQwUyo4CVjGruaJ1VqAJYZYSVT",
  "key15": "4oNUiZRgaJsnz4C8B7n6RmujrR9AVVnJCQznmKHvArSe5G5oANJbJLMUjnwGARq2M1W4HJscvE8auY1H1xvHBCu2",
  "key16": "LJaEBZeDj7U2NwFxKXKoubnaDhadpLD3L7Q6CTTtST9p2VBvy9x1vXFxow7TXmp4rJoY5pEDNBeyzVEStVL7RM2",
  "key17": "2u1WkVGr37MB8WAMHSjTnqgyERx16rQwTWNH7yG1BY3pq822tG9oL1jnt8YJPauwyabnGB2kTwVUNJ3NXqz5eKsG",
  "key18": "4PDanxshERVRY9bQxvkb34N4khePZmYsnPoWHBoZARsHz3v6zFa2bmDiRcwE3TL4pDYjtVtyAmp661Qojhpw6SH8",
  "key19": "MxNYbBDNFaVtoHqkTgKw3KfprztdUgfAkvWaD4EjnDXmrCBPFEA1Lt8it3xDadLuukhDG6gFsVnX34amr2n8Pt9",
  "key20": "4gnYtsrX1ge5ffNURNpH348rkY1wDAVCBruKk5chgVUuaz2uEcHayYup4Utfr4dbm2Yxjqe9N6RL7MSjNTV9LW96",
  "key21": "2ucKPTDqUoKQhyCZ9poH827bCcRUf49RLnvLFwCzXoSkBrVYNgWgobDTCm9Q3vwqdbzZfDSLqS6UH92BzhR6sKmq",
  "key22": "5GFRv4x8ngpx3bJsu18dnuJJ7aikMrBDhSNc2rpLNJBnZ5MZQzpKJdtpWRZQrh91PUHLW1xxFuAA7cTv7ShUYckG",
  "key23": "3VFvnqbrFnZ9kdj16vkUJG6GadgX8jfvV2dpDjygMBDkfNa9wTjhAC3oJLgyzDSpdT1ZtBjNfmUqqzzTF4sUatMq",
  "key24": "24UT2yvYotwiDbFejXduC8dnqsRhyrhn7pDnU84aG9zHyyia8hFfFUopwfwtj56pkqNQofhBX8yPoUucFm2q7wFD",
  "key25": "4nCbKkdSe3jPNMzruYMErG1p7AtvU6je22hcG4QLEdrX2MQ2diAMV6pkVoYtmTrkF6MBwxAkTpeeJipPkByNizAy",
  "key26": "34w4pWgmQBBF378Mrim6UvojaBq9P88JGG453dm5EqV1hat6VuVvrgfdoKEK1DRK73SDMYqbtYsUGwwBV2jA38Yz",
  "key27": "3ja9EDdHf5UGEP4PcZ57ngE8xZ9GNXjoztyyqGdNccV6Uwi8HDySZYe5PD5aAbB89Zts4HnppPTUJDWYpN3kcX6r",
  "key28": "2jFzZaD8nWnj3eWWXrW4QpwoWqqe72msGCTqHMbYKSY8Eu8htZAg9XM9y6A6Ntenn33b2HmCFCNZFsNjYfcT1kkt",
  "key29": "3DFKq49mHUzFG9G8VPHienWcHoPUDFSxzMz98YMSJThZ8WE6Y76Hw4CSN13u4DiEyo1AXZL2W1vQ2hKnUdMfrMLN",
  "key30": "2rXhCkEXdQHbw8j1AEbWyH45MRmF8dWf8tgg9G2TVicVJG8Cya2wRrkbt44qcDEZnMAum3nPpSuMdGJMTwDs3EAy",
  "key31": "337U6baznU1Ux3iWznoLs7hAoP4nyPj2eGkrHtq8e17egUbdFy8gJauBvXi9kPqT8VxZVgMDB8Jk9GZAiP8ECu14",
  "key32": "5rbfzxUPbHH4wNbvYy8v5fCMeQWKPHEBBbGb4BmjZiPgfxWiF8GWAQVEHxNBuNVpsvp4Q3ktLFrVCoNiAd3YXpT4",
  "key33": "2AvpFJg2KZtMery8QCSvUjHVEoqvYmjfLBvxvTwN7f2tEUEy7yoXesySAfpsjd4kaP4HEDmHp3H7knAPbju3JwNH",
  "key34": "5EHgsqkBxtFa7XzX7mzfTQ1NWh1fX1uwPCX4mfzPVaCueyVRRQcdJCAoqvktrd6hXKZezDhgwjahvYnFBNXejrrD",
  "key35": "5Zqkhx2dHdBR8TVTrtNHjnreoGKaW7rjE3oiwtKMs1UsbknYcqnJNemb7zy9reujVyrjkTWtgfFTSo45APKima9c",
  "key36": "3TBxU6FiAvSHY4F8y8YisU9qBrTxvudYeYwxZVgTbdEkhEjHHdMZ8Xp1BUnVyH5iowuJL9aRgAbxdHKMrYff36fC",
  "key37": "QDoiNuZwBoumAHWwhxKG1mUtkxHyiQ76JEXMzeSAffdyRbjUDvgWQhqUqXhj1gNrq1623qx7NMQFSHntpDX2xuw"
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
