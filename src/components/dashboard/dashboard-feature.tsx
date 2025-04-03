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
    "3prdAhKWaQPZuv8FG6NWU2N9ufbcWzZ64ndk1VL3bKi4tHSePKJxJ5hWjwri43cwFnGM8H71NCqdXBXPHNaVQrbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AC49LYLRfEZ4AXJhXSQmd12viSSeKdLQ6ikXHVuVuHEJjuXYKQzCWcQ87nRJoErCGprTvb9fyRBXtzWaBywnigo",
  "key1": "3AKbq93P1fRHXsMTbjYqhGp5VAyoKSkBgdfi61iNDP4FZGJw9WLC9vNPejU9BduwWFiay9raPX9HHMmo6xKei916",
  "key2": "55wYqnNzNeAMiPVqDZrYygkkNRQq6XsL45bYK7gwECRnNA4RztMk7rGSPHD7Zw5nK3wie67mAzeTrNgFpCcm9yPo",
  "key3": "45UackZJMV3RP4bcUeyj2oWJMXQgww2dKnoH3nCzuyTrY1VuMR4meHs5n9CPSzJUR4rtYNddxwZBhw35ueyZtqCm",
  "key4": "wSpUFqzyb2GjijRF1h6VoZMtmP1AyNDWia1s4NGyCWWjXLd7zZCmRW2gL6b7jtLyD9rufwBGeXXtmVXKAXvXzR1",
  "key5": "4cBfDePqVndW2jr9MBfQvjDV7s3nuzkSyEE3VsCUiAXj4sEZjuC3UxCMVHbYaC8rbhbVmemR3R1hHyN9HvWoEg1q",
  "key6": "46E6eCATTDVVZMDr93ziHaqeSf9dxtoebZJJe6vyJPRv7rkdc2im936cJDBKboZex8Z3F6N4ujqBdHYqwESogW9a",
  "key7": "2fLShWTTqqUYx2Q6Z6yKvpnPWJdESMCj5dPvrUn9RntVrJQYK6hNATDRFvj9uX8kV8GX5n9atarmqrgBHJ6RzWrT",
  "key8": "2r8TBCdo9BdNBbyWpLsZNMd4K4UmPsCgER4wtyme6X1uyMWeKm36hDAuqGpQzqNtCW8Twm9T6h8HEromM4etoHm7",
  "key9": "4HsoSJbEucFxpS4ECsk2rybEcU7UpDJiQdvVZPwwXTySwNLaYZo44zCkuhg81DpCWYtf1HEZSjHraM8xHQKGqnkK",
  "key10": "22PZAaDqezhWLxf9Swzk5eJ4HkcY61d4pi7A7Mc4HNf5bYnVgTTccZ946YMYRSFU96L8gtc68frPsRdSWAF1qdrF",
  "key11": "5WXBx8Sh3mcLDujywzbQDfNVFaeXRCpQtgC6o4CFbaRMYjD4E2PKk7yazwaZHGvUbwo4HVDaZm5ZkMvnbBfSZB41",
  "key12": "212xChsVuFvjGxLjP7VfYJG99r5eb6GeiXfchP8XdXTXFzLV7Y6fuqc3eXfUTcXs9DbxfVRYHskPkU6qPwEWcd3J",
  "key13": "2h5khFw8dWnvseY62enfzaejbVtuJrn9nMoBKUP6dxrUjyKs9cb2fwXKQ5WsxAV1UWBu6UXjPmg3c6LwzzFvNMz2",
  "key14": "2zVB5fyXjEK5ajPjW6NZGb8WjnPfH4JZSKi5kXmwaaTr6mg7j8Aveq4sg98n2qwNmA3LofG74gCKM1yzuM5M9Cdp",
  "key15": "4T2m5CAvkqj5gvjbdmPH6sfw96uFNwR5v1M5zgpzKGMj5aSifJ96bJj8y4LjChFXk1qY5hGkppBbEGFx1cyPvPbz",
  "key16": "5VN58E7vXkymnLaedyerUKMbEKXCioBXWfsskwNRn3p3f8MVad8qJFNGFUkTZvq2WPc5XfgoffEBaCXtJRaQUAgN",
  "key17": "5eWb7HE6CD67q7n49jYkYzVnwjF1DJPUSR7r2UKb6ZwySwUFCANnabD74eZdbmBEJsZfyAnTax9n3DWQXHNyQPps",
  "key18": "5Rb7hTGNoieyqJk2byxM7moxYDNyeZc7fshZb9RTx3HDBxPbzm2DNKyME6Q51cfwKnfSDMKzuKYAPuSBSRerXXYH",
  "key19": "3ke9raYbuZDeEcQdVWmLTmi7ksas9K5i4zDhZHtc5UpZz43uX27DWngdkAnoUCwHuTynAHbHNX4eoP5NMoEju8DL",
  "key20": "3a8LJv2kdfghnxbGJz4ZQa9Pgdhv8rANUdjEfoQcZrMVcoc2gsVQcZK2BK219MLG5dq2Utj9JxK6aYhULzHHJFEg",
  "key21": "P4QL8kHTDFmw4rR973hzUmtmbQSKR8xFZtZQA4WwWkjg7CAjwTDywJnZxLfR69MzXMsBA6TJrWVoF5aHTMTAonu",
  "key22": "25ToegizQK3Z6M9Efmb85UuFxXkWke2cw2PpfrgmHaLxo7BQW88uRmDrxXFqSWZMBSLmjAkMTZXWssjjD9SgTeoJ",
  "key23": "2TdySYnUudSVDv4q745mifacSTkshC3WfmUHzQkK6GFpf581unNrCGPaHrLJNiy65w3ZZSyZ3dChKAz9jMjYuSPA",
  "key24": "w5Pudsxk8NSDWpsjdYhgo5M2jFeadGLPGFGwjUXQixf6NeXF7SihYvX5gjzsyCAnW7uysqmTLKNi7GRuBzxmoXH",
  "key25": "4568BZVhj3CdCxUoZBuJpbTNjSinTzUUgsqWe8W3jy2r3uJ7bHxEGzsgEnKz2zzUSj1mRBT7CS9uUZkSoNe1e5ML",
  "key26": "3fLsYeprBqYNAJapD9aTGuHdkrX27C2tywgFis9masof2rsdRMSYH1cb4oLDPEUPZztemmS7BqzhvSFyacGyyGX2",
  "key27": "4va9HBSoziU3ZFCWuuNLravKX2Dq1C25VbZ52pL9hjXsbwZww3eS6p5goS3HRD8ZHF3nqZHsHNfvskb4ozH9KKbV",
  "key28": "5XDh81QC2rEArQKMnkxceJ9cto2Ya4o6QoZnuY1yA6JCkMa7CjxomQcymA6YgNuSch7Ae6MQS39Zrd6oBzPRHWgJ",
  "key29": "B7sKyauEbJpABgKgk5ZXcxpL5e2HVKjUGv76i2powBJAX5L1CDu6EwbSSo7d55QpmM5oXfNbS3Tg3f6ZueGgxUt",
  "key30": "4PxDmBeWY2VivZWkTji7LsTUEzYNH9YugWDJcVLYWrZKD3xPovQiy9e9UZ8yGLAKJvx1RbdN4ie7dRBs5yF32bLN",
  "key31": "5iYUT77BquXaKuoQxERR3j9dvy3gG583iPFuKH3LBE7zgNcZsBEb6mxJKAwSz7sDRrTMGYDiYqYAXmxk3f49V5dK",
  "key32": "5UH93exUvbhCqT9KvgTjMZZ7CeaKcY9SKNUtqtPRcfvQUGkR8HCibEGSJU64H1gZdsXm2H3sXZYuQn7yxCrku8T5",
  "key33": "ieJBqFek5PnJ1V2SV89Znq5oZLZQwDNjAhNojj9grwziNi2ze1mfShiy8ECVprtNJ7y3hQEgCjGmQ9XNyaVDSFu",
  "key34": "31nBDH9rfRJ92GfUWhvvjBT84t6m2a3GZ9GLqBq4Qow8LckTJJAgMZe8h9CpeUHu4pkpNtnArkPSPZV3umxtBRP",
  "key35": "43b8p9HHxAhCGq2aK2EAb1nrZMSQqRWj1gWVD6DdWQJDHFg2dd758PcueHCSp5uedvi8MhjDxKndFkvmefjGkSaK",
  "key36": "Smg2NbjfgikiDLpXN6VesXvNn9NK5rNh7A6YhsVSypvSTAMy6cmdCEvoWn7VdG7Vje9ZoRLTAHXLK8fBz1dLsso",
  "key37": "5K61YjXt8uLtWi1uGh5bpYWwKx2Q3RSsm2Lr2buR2gcmwAycwPcGZ4LZcu4qAuxZcMdbsK92WR7WU1x7VWAXy9jP",
  "key38": "3kxiF57xPvNugYuLWj4sHJAgxj7fW7QzdHws9j7PAeHXT4jQ4vfAxF2Y1qpdjjHWMeFVLX2vqJ4hw4LJHFehszMw",
  "key39": "5PYevMpv1o2XNY1Bqgtmbr5oxdUCioB3xLRxhuNBrdAi4p6NQoZje4mFadjYJFn2MTCuJPnuPZYBaDxv3CcZoF1M",
  "key40": "5VELVuowdsu8d7mu2qb7ZAAnxvZYA3Crf785qzcRxtCsxB6ezZTuw6b1CEcbM6KP3kYmeMhJC19artAVukRTkf7A",
  "key41": "5DmSMTqRUbZ3JSMvCXtPSDavkDL9mz7dGqbv3tGxZDwR9hkxrKybKJoP2rxFnZLBxpsFAUafDqgDmhdwopf8rats",
  "key42": "2gVEGee3aoT5gu6qBJryb3pWYQFMvdjJWBp7vq1SpchhtHrr6WV82KmHUfmeNGQVCZ9UHPgj8zZDWCMsUdGoWN57",
  "key43": "4x2TfsxbBZUuU1iHW5Y78jmSM8fADDSaCtGoY9t8d1iBJuNKckBPYjEKBj9aS5L3wkKXkcVRomAd4M58SmAimm8W",
  "key44": "67aYT7dyc2xvgudxJUsSNMQ7Qonz5j6Hh14dcBSb3vkzeJDgjngDL7CrYWNQAGHw5xP5vEf8ys2erEcgQbqyiPmS",
  "key45": "Z6unWrox52oQUY6PweLNuh9UkkgzxLiCvSyVpj6UNC41NkcqyuuxauwiuedHQDR6pgBFCDaZRUeu5nkgUFE1AED"
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
