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
    "4HbhZorh98AFYgMRX8Pqaw82sFY9xQnCE6PC4rP1PSbXo42a4X5A1FtKeot18fW3o5R6zWrDMiDWgKytmsLQgRFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B4tLu2nt1eK1yjJG6JLZNZbLwecUg7nGu1dLtkAABJxihweBh3tZ2XuWe849VvvHXWWW5QLtKeTsa69UGKdBeDS",
  "key1": "FLXEXp7vRtvGFuyJCuWbBkaLokfiYcZ4yeoNWTt919qoQ1Jkikqgq11eH1ATAcMK4CrLqKTcCwtqKQgUhipfEVX",
  "key2": "JH1F1kq4ZvNooEAJvTgK5csBcKXnroqxHktnozwm8veeCRq1iwprx9ogytny9PHz4qUfanczDhgAZQsBidQ1LaG",
  "key3": "4EqHRUzHMFt985gnRHUGZjNDvw2z9t1KKNYDPfMfEkJ6gML4jAhaDD2R5Xz6gfZ33Uo5z5euudYZH3iBW84J2A8L",
  "key4": "YGUczwoftsHGZebmh98yRNazVKacdL79R1hW3rwZmj47UAewmb98jfhtJMkrTfC4caZaHB5HnxaBB6f3zeUZY5G",
  "key5": "ao7qqJYBiS1M8ozCHL4kdGpwBSjdXpHT8bJezbZa6qHVFSPSDebGZJVFWwwYnfVfDvbsbK9gysdkDZReyXrvZUK",
  "key6": "4Nai59iG8kC7oSXgK1ZmoLu8C6cKmBcuhsj4N33ToBDEFpNaZh5Vnb48FPbkVDvn5yiNVy4XQvkzPdvod6xsEDW3",
  "key7": "2Uec7HTmToQaLuA5hmqxrVuBT3JrsrXad6aNTK5ES3wN6B1iCzjBsf8VtgkRnQqPtWR6AoEof21Fj3QoeAE2uNFv",
  "key8": "3g3VnxBBCg7nXxbM4RBsxWkNpAWDa8BCVkxQGBMn433UY5MqaoemNqTHDwyxFzj1iY8tAM4MXAQpuM5Tq17KLgRv",
  "key9": "5Xb4Pr5WmToDkMMVWxcjj8p4phw7Q2otwM35JEKaPuVztC4Re9nnzdk3i6F4eVSr1QGDHdJVvNUD9jaCzhWSwHUt",
  "key10": "4BA1tFXNPE7Pg24J8DwRb6AJ9r7F9Xmi6cYaxV3CwgnbDw6JjgGDDdjkKwCNdKeoeDQuMXY9Desq1UFMhKgNtQMr",
  "key11": "34nQJcSXmaasyMCHngEKT5yFHBbGAgUFeGhYdMRd2fSUcQ5Ks2jcbxnvxfuHyW6LegqA8UL9x9m4jU4XUKNjBFef",
  "key12": "2ffFMRnK4uft7kRrmDtsN67SyW5u82k41p2mDYgX6QuAA5SnPELV7Re2cFE2wbnNN8wWU6WNCw5moZwpoCANraum",
  "key13": "232PXoKNFeihswf9tz1EGffptW1vU5aS3BPjaKCrCj9yKsBB7xsPiFkm47PerZKfqt9zPgCZudHD7SVVSksnmGiY",
  "key14": "mVRn92w3CxEY2WGoY7D6Ddnj7gkDT2MxNsspA4isfxBKBuhbWm12h2E7uMCuxdSCA2vNARcv3HnEWd4yZGe6RDy",
  "key15": "b11B9YuS43ectLEMAhLgMX5LLkyE4m2j1BSQncHTDkMUBAcjaUnwu2JJh3HufTbbQSUBJAAY2nAQyFMYTZo9N4d",
  "key16": "3iYnGy9YEWjritWuajYJs1ujMXsp1oEdwP6YVDqysuR8miagLPPV48rEcXweJLGBYg8Mx1n3SGqtZEHLjXgvQiAf",
  "key17": "3odfwpdPeN6zeQebACEov9V7u7NezTDoywetGjLHvHCGQ2LFFkqsN2MzL8ZEqNFbUmE87MdL5fMZhCxr8As2DrZ2",
  "key18": "2AEt3GM1jgceRBu8S2qu2V8serq4dzp7bcBFX3RUgmTxASuqMNoyjzBZnf91wHWRc7x86afJmkuTKZoNyRcuA9rT",
  "key19": "3EeMMDkAas5mC6X8JMsQKPLnsAF7q18GriyuDbiYvVGFn5SMH4PM63r7iFD3HVZgUpgesC3Gc16rV5d5ysYMgSNh",
  "key20": "27o46ULA6hKi49f6B7p2V3WYKr3BJiu627NpYtn5ap9fbq7kMKuDRv9fVTk2WW56o2QBVPMrk53mZ8tpS8iTKyVQ",
  "key21": "2GQnC3cwwuvqyECmH3AeBU3gzU9RAuWkGDXP2TYTVbUiZpnjFnhQrr4oLF8wokYGRBnyUpWq1m9wp1qdv2c3NTXE",
  "key22": "4xt3qQdekzTHLLpXh7g8HUc3ydPqZTaCTzig6gMwToaQRXwvLKzKgQ381SHu79L8QEgpdXZ7ayAG5KmKQqYRsHud",
  "key23": "2VuycL6WJMSdTbVrVJ48QqRewTZqKeLYhRWchBwwV8tKQWKXxSTiV1Kb4fPjXyQPW1tEVjvWvtFrDqocrCEzJxNP",
  "key24": "598ygLu2L36tDHE81dqYj8SL8qrMQ7W7C3jS4FhcCxqwAVX1WrBZC7NBRgXSRf7kxHFKvDEmC9x9QKmX5PwRwSBA",
  "key25": "42KYBieAM2dXZi3etS9dtpTB78yUb6waQ2NWgfGMPYZ8U4qpsMAM7qLw2bgXv7xVKA47cdLYSNqRdqf83aWauHMS",
  "key26": "3XKtgcaN3r67jdXgFtFCpXbkFpmRuLv4MJN8j8zJoYsc1ZebWWcEfLLNVBjqyJbh5p82SmxzjSqturK7cfEy1hU2",
  "key27": "5N4vXAykozfewzQorfewVsnndYmy98h5wd2S5V7Sw7B6LWjjUMB2mUkBc8Qt39gJjyGZzRARxSz69siJZqTMxU2a",
  "key28": "4nyx9B8bNJu6s6SiHteKLBzdzgMNzJaF5XYRE2gF4uei4oxaxiDQ4uFhJ75aymbRuzcxNkGJ8RwMEFRJDZ4kpTnu",
  "key29": "4i7hzRdbYn8onNWgEB7eNSb6KBXzzc61vD2SZwLd6H1Z3T1E1XBsThhTTcDaGA7aYVmHMYvPdncg6UaaSayMSu6u",
  "key30": "T32RJ9q7C319YFScEwAfx1PS2NUkSEsXex71anuRveu9acyMBYNusgiGS4oFnJDHrHf5kygdZ4g1SYj8QbeNjZT",
  "key31": "3MAhFVCGnW6iRDGv5Q3oAmovPvPkdRdoX6nNB2fA3k48FS2u9RpD7QoQe8LE4Sy3RWyb13oao43sghXQbsjSmMk2"
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
