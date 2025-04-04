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
    "Q6dsT8QDWdmhEQoHLmBtNEKCmjXSpaSgLjWHYBWrCDaXGwmhh74cri5n3oEc7ns8JojwuFiZZ2ELwok7tnHtuJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ocawqTUgkFhCoM54NTza6jRhENB8MwznAcC9FTx67Mq8fe5sdEbvj3ggZfMCby6AvJ6fhBz8ddFtG77hEGTMCk6",
  "key1": "2s3aJY7cZ9QXqjhompS5BNDijK6NPQgr68gusQwYVx4EydS68DwHxH2P6HnG2XyzPiGwBJE9MmbeLACeiex1gxxa",
  "key2": "4yqSTdqNz2acjKEEUipJK3aDCjNj62o166eKLunPWVbeUACRXo2RzzJz8fKXXpsZ8kbyVjd52adNiP2jWz34Saz2",
  "key3": "57fjEFV2ry31CjBeN5RfwEUPnuAYiRSc7jjutJo44aZCmGSpYDnLJpThENynRFQf62KCcw9xZXXGW3vGHDsMpgJQ",
  "key4": "2z4551tiN3Ttv4L8EyoC79tYYcpWtTDuGp1Wk5yYqKzGtZ5xc57Faj4hVUpYU6VUGyyqiZJUZ4pZbWoSAqzazoMq",
  "key5": "5RTPJwk53pCYuUxHqGwWgrvmtmNmEH7SmMWs1kCmeU4BAmNgZf4N7VJUa2aZK9GhrAEaci8dCDjTKanGwTsm1NK5",
  "key6": "5G5jm5VLPysqrzN9BZsv9JSx8Z4dmYPanHRiCAyfFJuhAKA8ZRxSNAHvrrHnFeM59uAZpveEm7JPfNkNcYstdR6v",
  "key7": "4jQr8cEDRkUmBKhPUZrtzX9oTq9oXAPh1m7uSvnebmWXrAP89q7HvfmcJp4LPLkdNEt4XDkXi17PnQ5sS2ns7S8h",
  "key8": "pk11sYPJiUcXvoyqfBF22JUatSTBAqJ8J4L3Exk94NoME5oAVZKKp3i5VBceAyQ4Yx23XCCJcdX1hCwN8Vd4QAT",
  "key9": "5FLDabjJaHTbc4eQ988GyC5D5sXhsYvEBboTQhNghGAHruXDmeENFdK34oWZFunH6H49vyYRYCyVSTvKF5hWdPqf",
  "key10": "3bw8fNvR4wsgu5PbcmDPWYVbyYhTdyQWFG3dHANQdaP1Xmf2izwty2kYtrE7YS61Nc2nyaS7tC3tyTnHWLMMuuir",
  "key11": "5ZVFiz2Uc7ZwkQACsRY17kqa2NxfGZSAPgbH3p3Vq5EhKeHsywYeAEKPeW99Ky4sthMzwyodgLB85B4wYrZAkQL7",
  "key12": "3qEzyPwV7qiP5dmpJ6nJMDcTQ1Pjg64iYcCrrH4r1zmC9476ioTcFXc9YbsRGwFCaNJy7bEKMvW9EdW7LBoC7JmH",
  "key13": "2VQ4AyTTKww2j1SSEhCFBtPXHM79njSqi1htzsa8ueUkkZUsxys76owVdHCaAyJPgn1xPodgKebW9cQdaFWuMhMd",
  "key14": "4PxCDqgrmXa4MMKRUrSbgd1cRJTSWMPfxjBD7GyArEsdPxzxA5pVoyUaEGxnVkH6b9Ac5uqPsT4eyL4fFn8pmDtM",
  "key15": "2EiFR9ahrV3Mroa5puB87tx4PSAfuyYeNESSB4PbEq9c8u6ZvfmkLSQ4uHjGznJQLw8Hm3kXnZ3ZJxkEy3rWA7Ct",
  "key16": "2ZwN95gAs2YpfxosqUQfNAGGdJnYB4cX6Mwx7cXJ9WtXT1LwEk5hvVVJikEpC8nbcQfj8Gk46DHPjovFrBVifB6H",
  "key17": "2NdZsiE39xid4TESfsvfC8G55RFXVQRoT2e2v5gWxyEbY6xshZvf5E6rkKfyGgxncbfbDYCjaeCx2NUeWssHDy3o",
  "key18": "3RYJQ1iLvyxLRejQfLaq8dSpiuQ8gFrmT1xArWtt7CJXu8WHmT4zxe1w1V2oERGJb8RXiQtmxA3GT5jw6k7BKG5T",
  "key19": "27aA8bHanDPawnCak3WvkFqRm7yWKN6fDT4z7Y7eYCG5teekdcNgyNkwXS8XULEnyDDH78KfvcJbD6rHjKSLWPNV",
  "key20": "64VAKx49guun4dYDdZPMd8ucBWqdkjry71jbSw4m1hrHs9j4iagkhZGEKapaw5nQ4f3KTHRTaGYPqXUS8kX2FGZE",
  "key21": "3yt76afhJ4Pfi8kDTMpwfgihVuy1cnii2BvmNftC56c4udg9Bq4dXJZhkoaJDLNgBpirNsDQadyYV6NjAGiPHyeL",
  "key22": "3d4LkPkVGsunPLckUEQyJVv5eR35GaLq64jxYacfcwMdAKLMsyW6RUPs423FiDtHRCz9zjLr372vBk7qQViBJ7v8",
  "key23": "3j2Y4yaGgR5BDGPV7SvuCJxog26svHmeb848cth5KwghabM2nWiHWB7BkBqe1BPWymRnicB4kxxGGH4jfyHuebek",
  "key24": "3yY1jyj9YaEaNT2ja99BoYBaMeMfMDhNVGo7gND41doedfKWt4ZsgQTjRMaUKnytTBRrbuJwhd1Z4BXAoseFDuLL",
  "key25": "3iNZLTrnSbpd58gkHe9KEW6gdejgvksZBsap8fqR3FboXY2aDYKqwvo6pYYcnmznSDkb7yTfCLrqnSDpV3m4FZmA",
  "key26": "nFokmBuaPoY2B2adeEmmd9fa3XXuMrPiWZAbnV9rE7r1UszPGKQwvfDYhCek76Zu9KofB9bH6VbYq5P8rirwKo8",
  "key27": "2uRHciXyajjnANKxK2uM7wtmV9q7Bqj35WWWpvPB9yKmjRSJeYQUwiVdW7bxjcaweuAp22tJGi5wcfGcU24TEsFd",
  "key28": "4imtnHCHwupu6N6xmhqDEVmqUduBXyvZVFHCDYVkoiE3wCjwXdnLFr4pqiEL5mxYZDvDgrQgG7noW5L5EbE6TMj1",
  "key29": "5Un7D3zsMxNvLSyZroJfMsHh6uPwU9YcRcXvXfruob14C7TXJXRG15Z5TUT19Zcif1qcDWRmTtqSJgxhpWm9DCt6",
  "key30": "5vTCKm8G9Pa9HRVYUQmQ4gdFaCvEJ8aFk5XKK3aH5xrMeRFbDuQagjryNURTt8kyEZcKdsco9sQyYLNphxHn3Syd",
  "key31": "4Yh816NqMBDuB83CZwZRugc9vCqBvMcijqPpiupZy1QuNH1DMJBrqxKnoby72YZiS8xXNVVNSf6MGRrfGubkgHJF",
  "key32": "3QfKbiMS848q9LTrFJhpfD1qhrqUiN69jkGYoYRCwC1UgSv2skMo4CPMhdvCzSzEmeQGKHVFd66RaCX8WaU43fyw",
  "key33": "4W6NBotyfABhzgPS6GDJSbxMrmKnsyoe58PF6DdwLLmnqBsw6PWmSjkoFGPsJjsXEWQq9VWJJwZdnq2dAT3G9ghM",
  "key34": "2cwDbZf4XZRWYHGByZaQspsKkH3syM2g7gBp6843aiVkzwBUe61VaKSLrDnWr4eWj5fjjvXpzu3sRCjqXMrtfRgt",
  "key35": "4PXjoDrSPQXRWWcMHkJRCH8pkHxqR3tafiYizJUcERC7YyRR8qKgXnXiXPcYt5f7iTJ7BDPotzBESzo3mKQCS3Qt",
  "key36": "2eaDFfNGZFaJjnNFxjfeUPVbMgA8Ug6zXKGi3qw4AafBZn6kZMz1yHnyjBXr6sjYNge4nFtkcNH1JDSjh2kShKAq",
  "key37": "46D2yvjZhnhbjH1ZQjhMQCGMYZyTX4qv9hNUndYPkG2QQ7d4wTjDr3bUi114v5AfGhyJDtdf2Du2A8ncADgYfRCj",
  "key38": "4VzJitQXfhGQpbwaF6W7xsXisFFRGqEtWgMEfytWM6Efu5UeNQcBRVDSjyqqJVQNz7WM3J7MhAX6yk4CgmyyVFoS",
  "key39": "2bcxFSdG74ADL6Dxkny4TZ5iCX9wqYzjogQArNwGFVwNTeoFoaSFWPvN4Li4kf3cTdNifZAeLiRUcH9e9a8Zo93",
  "key40": "Qt94X4FTK6JyPpQk7h29HZLWuSsQyzUogkMXmE7aSbfgAYwPEvENNdUhwdqTtz9RYirDCQVKRBcPWZPL8EWFThz",
  "key41": "27dpBdju7fu9NwvYENj5uRL5U72iT28Ygr2B8CRxN45d6Y9yFSAdq6w4yHHvQEdKUQFJRBe4VQF7u1YXDoiwhhv5"
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
