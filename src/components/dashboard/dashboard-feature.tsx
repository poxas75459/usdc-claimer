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
    "2V2hUz2xzar85dYX7C6Ug2Cgi9f1vnH2E9PDcaCsXoouPCjd1JTrT3iY1dzvWr9ak4h6Uksda38brMS4Do499jB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qNi4NwMvPV97JBS2ug8HBhZhMx7QTPmc4P7PLXCsErzET4VG8TC5mQorEewexmmka87kZ5MC8bDauMmYkFwEB4U",
  "key1": "5RWTcU8ymA5qZ36AQd3RbVYPeG97ejTVL1donk4aw3oq2SdYB37zWbyadcSpNRMuoEAR7fTwFKV1AMefuUGsom37",
  "key2": "tPfW6wUGzWoc3YwJ3k55LR1Z5CoiJ8NqoSY7KmHw7QwiUyNPrnTmDnU3MmY5eECe5GapkRWUE7J5N8UXhz3vNwG",
  "key3": "4EzQzjCent1Qh7rJvyAr8t8Vm6vKEFG2H4uGrAXvKcEeuXf22ycp8XqQq34cRr6LhjbWbKPk9vwtgs1pRJcJjGNb",
  "key4": "5A1QRr5JvgRXUpfsMD11hEtyuFbawfZj8HuzgDC7p4YHSA2gS72NwEthA2o8M6u45t237mBZEwX48ccT5AyEDhE4",
  "key5": "D8HSenJ8fsnNXdujk9TDqUAi1JDfCxx7dCC9r15wefcHydgNX2t3HzXnwXKsAZXXhi5gzzbhKYwyqLU8SWSFWN6",
  "key6": "5dZzeLBi6pCYRv5Q1udsAh8auovMNMCBJHXXvanpQLSLVX58rE21AesFS7y1eQ7ePfdaNysnSdDwRiDG7RaP6AYg",
  "key7": "2uccWEBR8Ucm9so7sGyXDBznLTdakcSuzoVbGnvstRsQ8ZDn9RhtDUqN9Hh4VAjRZnD7M9KEMouu6hfGQbPFe77T",
  "key8": "CVFcLZsveQYQsmPCpEzafJ5RyS2qXqCPS4qbjT4rSDHTYYXQoF2EJgQnQveYcMAPGKCGjvtKThCfSwaJjHZDaj3",
  "key9": "jE6fa3ehQ5PCJPo8MLX4DkRAyvVQx6E6st5eNikwkDj7WGwo3cww59TcqFPvhm5eH1XjEXK9tzqiCpdxDpnCKbh",
  "key10": "XHmGVUsK3NGSC4po5R6cSQ2mcJ1RP8jGtQ5MXC8immHbBQgnCwGQiNiDatTnQCFxZuBa9VN1Uwfk8URpvp9SH9b",
  "key11": "vNYDLrmjcRr8JH7EUXx2eNj1UaEhxdnoRMcyXrareHy3mxnhzAM3XsgQ7Nmp4Q8P9NUGCBbbFNLaygjkyJ8rJ1T",
  "key12": "2bbzZK8aRwnjpNdgCzDbGhAuJMXuWnowepG9Mx1geJ7arPRkhwH1ww9K8VUgr7U5ijczqT7YWcznjiD2noWPvuc4",
  "key13": "4yuixHWsGNh8FXs9mUC3PeBbDvrrFsET1EBKUss8UR9MG2QCejAn7Hfj2rhKzbdMVTLWsuWN6SNJLZ1W7LQDMLpX",
  "key14": "FWSnvstTPa9Y22YNbB8qDegL3SXNohHHu8WtLbV3Monef8QdVQETqQgEKzYkdwfnYe8bPbkNev59v2wnsLn7GGt",
  "key15": "2cfZYn3TFGfy3Y5tVNBnysJMZG5VmSARsqayyfhcqDuboF9rr1Roxj6kLZ3hfap6CCjXtkJ8fUx3ajnKBQb39jSp",
  "key16": "3T9TTyKi91yCRbgNdfXLT6Th72QzT2FwDnqg6wUC5TN4jiThrNXRXK4KEQQqWtP6om5xz6kgE2dmsFbGoKtuD43q",
  "key17": "3cypgsehqj5D8JUBGww4CQx3axee3pFokQVYKEMGsegBBSStYv1JGQ7pt1TFqLRJbdZGMzAKZtE8qWtVivvb9LoD",
  "key18": "3LrW91KEi1We1MjStRGUKrVotomtbUu9ZoMLwMYLSsoT8Humg5PUfzohuMttxFLcmNA7ntUiBgDGRtmkDkioD1kY",
  "key19": "4CBmo7jB1HPbY4h5BvoruZmxUYzqq8rkbWp7Xq6mzDBgkBET1QVgTRCD1cc3QFvVM3wGZueXjvUC72HDhrAWTK3r",
  "key20": "2XjtDgZwASkzzKqLFzkJJMNKjQ8uQefVTitnevxejePLLbJKkfMd2BvpyB16SP6wc9D4hv5SAbE3zzgKCTWp5reg",
  "key21": "3iLLJKyxtx1rBkHvw1HVfXvEW6jhuYCdvt2xfXiCxMd87gwq3bXn35iPegsisfWkPrYq91RLxm5CFqjYTzWZE2t5",
  "key22": "3mxfAyMGsdbVYrnq4bpEecPa72VJxr74Tm2vKmWq1anQkM3dwLpbjroUpeACSUF5BdMbWiLyWPkzBpaPZQFAPCUb",
  "key23": "5VzcZdtbWXAKmnF6x7zDC5s7cpkKnN6xsr7kLkBfcHQWWKPbmtStRurcWRtAho3FAVCzxw9csXUZ2n2ByToJHxBr",
  "key24": "5NGF3KJXKzWRNP1k9S8E7aqmzmVkRtg6S2Tixd7s8GuFQU43wwdDfxpAEX8qcbi6zDTRzAcYwipT66Kbtn4t5gnG",
  "key25": "5n9iGeETwgzVthk2YbGKkW3hhJcnKqNyDL628JE47toJ1rzSf13obK3DWVVpoUn1tHxnP9dH9nRzFTTnqFpAig5i",
  "key26": "3AdT9BiK6SxXLt5CRiRPFF7LLTByycwQ4HJQZMmG7m9bvkZRAxzhuSqEuFCCMgULjwFTZmy3oambU57n5x5a1eeg",
  "key27": "2ESUQdXK9rsspMjWfTeb81h7sCoZz5BstGeadzPsEY9wb8RvgUcK4wsc9pnBDUj2Rd6GohtngNYW5khzXspnScAn",
  "key28": "4p1nPWJoNfKMUF2oFzdjnjusyZnBMYXFMvSAXxybatWcDSedvBRvcubv2uvDvyfNUyjfov1oZgtgut8V7DzjA8nL",
  "key29": "5xkouBRrcKscPPg9mWfUCvp1GidQebPnRqCk5qntgYx5NACEsR6WtxoEddtRrjARDStp1tDVusuPrvKL1NASWZZx",
  "key30": "4vejd6UXcN1K88GKKX6dBMhFb2CYMJwBcAwefKGSTNULapt2vjsqxcECTJNU8mDRr2CL6RbX6pwxzfPCiBrF5qGp",
  "key31": "2CzuF78e1xwFckhiq5cdaTFPS6CJtvwthufnJxVP8K4LKhyvEKA69g4fwSmaRxYk7junDCEyjPfLjGiYmQ3QLzp2",
  "key32": "2ydeHna6CAUpMhjBKrLAM6KRgdh9qusbV4737wHicqic5o7vNPhVxkyGfSgrR2vf176zbDzERFUhJKwZtNVNYP9v",
  "key33": "45vjmADBLEYLrLJ1VqBALR6JBopfyF2w3kMm3wWhxM67ZUGp4MBejRMqsKkx9Lw1bMGmEVg11FX8V35fULEd3zTP",
  "key34": "4AWaP3jeiWj14WxXUNhJBjgECaNe9DMvMZz237zCjHJ1E41uEiAn1ztMhspDNgWZKN6afJt2S3h1PopcZ7pF4cnD",
  "key35": "5ybgcWyW6SBGi9NA2yWtDLAhYGBzXmzfd2dyim76NhbSQ3RFTxWQ77YcuxFxccUykQqZRMuyXYiUgVhmSZxzdPng",
  "key36": "WodAtdVK9sYwAQonc5rHzWkavYita5Z9yS5jH9pUiHPWUmVqN245GwPJFThR5VGqVmg2Ye2Au2UiqBaDgMxmKZa",
  "key37": "2hz45LFUe2mBTE2uzXJRDwjc6hRDs6zpcMwZaU4rT8XL387p6qnHWDjtLXsx5jtJXyVkwutyZ4oLKFhuLVizzAZM",
  "key38": "2sGA58SMjoWRw8uWhCQUafppqhgM4Me1CxBE8asqA3Fz9ckqyGird1B1JeA2d5p2UHjhy5ACrAScXvDQ7Ama8TiG",
  "key39": "yQBgnuBHzHE4BLwbNyERHSApX4TXfXs51oiEaokejZXLv1ii2nLUVCWznEGvnX1tBhYYTX6vG9LqkBkjQWGvGFh",
  "key40": "33Aq7pGVVMePrBW8a6KknUQeoekRrRq98Q4rsTyUZFrhH1NN5n9ReDYhKQsjcr7vWNpoS22AFRQQNCbRW3o7VVX9",
  "key41": "2YMNuuNpnczXc2ny1ARUBb92EgvcUwSiUUeNp6z9LPr4QCR5pGE8sQtJPfi5eyPp3uscNrW6HxoyyVYsr6J6D6T4",
  "key42": "62x3ThBM9PCEwgLs7jJwh9VMSGEgCChgS7122JM6mpexcTZaJZ2ME3DMPQcrmJBTv7zoMPhDsbvXR4gbsZY4CwaB",
  "key43": "MSa2E8yFQp1uTFTfLQv12p2q61zn1txv67pnhts5A2tft8sZSbpirwYkwZ6jT6HXp75dSnLSeP6FxofnnRB6A8R",
  "key44": "5duuXjkZfhUjDNSG37RX33oENxjPej3cN6KoGkwNbkc1wAP2G9AyuuANtHmwknHAjkbSJKoRBxmKcDc9PW7ttZP2"
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
