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
    "4XhCRWryzXxXPzjW7F7ajNQzAou88dorjPJfJqydx25TCoic21fDqK9eNMibfs43uoq63GD3NLhb9Gx1VXjwfdxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cVa4VQ75Wj7kmtMxQxMSM5Pv11ya7hto2J7Pu2kXwRt8hmm7DxzWH3iSm13fHJsxgdn12E4BKsbHhxSVYcYdNUz",
  "key1": "3ojXjQDapAJiUXfXeMP6uL9XWTjCYy9328T67f7EBgaJfFqydAZLqxp4JbweeVCNpXHpamhRcGHV3uKAY3EyFt9H",
  "key2": "4ZZXtN4x9V4BasPib9sAugX3pqGiXtj1mLg4WbWh7g4wRFZjdwPM2fWoV2dhjvA1N7v9fGznunaNtkQbV79xaFjS",
  "key3": "5pNvJYDAyRdkHw7opVDgTSR6b62Jm3tmckhf2RHzXhhL8vnmyUkhsUG3D5sbBHwhJF4N7hFMjxt9FQPGRxG7DCrZ",
  "key4": "57yBnemRNSXBZVzhwHx33hGMuNX1JmWCc6zKo3vbcMse1657hcfxoQnwhq45UFrDFsaJPKZawLFhPSUD17JHziC9",
  "key5": "2Jmoe4aq6euVsUQAuj4rmwdHMAsuGFUAmNAvBN7bezMg71cN8SnhAXtm6yBLYetpArwV643QLZ3RdnotJ8tdghMb",
  "key6": "2GnpMov4wHcGjg3WoA9E7XqjwwGkUob4S8GzPnKPNoxRqtzfgBzka7TDEupSJBmN4ywnEndSv23j5hkBaXCKKK7Y",
  "key7": "3wvVMJ5Fk8z3Dhvq3XYcApBMXxEDZjK8CEXMsiBf9jnFQbssqmxN1c7xzzSUrtJpqNrHGkteniPRr5q8YVz4w76r",
  "key8": "567qvaGFRRn13xVY9PLLEZyzH8GhKgDppTp1CnTnBKXTAb9CFh51sydan5cYZXZJ11mvy4dqTu1Ujtq5ethQaq28",
  "key9": "2VWRu94zY7JALN6PFhcTZRsWbd1d6ixZcVwT7a2e4Ns4Lx8fsktaZAqb4HXS6cfWRnw9LisyULptahTfFMxooV87",
  "key10": "26fPkiMJSPxDMzuByEXXDGGfoYx3dAAEF29aEnkjs1BLx6Naz2ktjMc2mqrA4h3DxNyD1urcsuiEnHCuGh6ejfog",
  "key11": "4CTyLmNa791Do6djfjchmDXz37g7XqLj4HoWiR9rzZkgdarZP6KmYhd6Lggs8storXoXnAM1z3HsPhbXZD994Ngc",
  "key12": "2SjRt8nnt9oRBuZThbx9VYJFWzhoLi8UJ1qaw1YARLaAeUvQtzfazMBNNrEXwrJvhiTQQjefXAb4zUp6Yzcp161u",
  "key13": "nPYsXtLxC9yyzU5s3PsR84qMdPZLqRLR8ux7DrtWfatsRQYpWUGfPym24o7iNfrsvVzo6HzGvuUzRaCbuR4Z4zr",
  "key14": "4YHawpyNKvpnG73TwQPehm9AuBMhnTsiUjhuc3cp1urLcTJLCUXjJhjSHnMyy5Nw4HbDrCtftPr2iTzPMJ3LGTa7",
  "key15": "4RxaFA9ggULfkWNwiY5moeTyj1ia9sP8xof1SWKRXEzCJDZ4QR2d5JDByAZDv5KHxgtWUEwsRdpbMqU1yLTVKZxw",
  "key16": "4nCaY1pRn8P7enkA5XmDbLSa2sL9fvTCJGfH5Kgut5ZgPXaWjNG3twU2ohKhaFcnHHJLBbyBUEPE365tQSPvxPie",
  "key17": "4Q2YNbnM1S8iN8sm6rKmawMfJPik7xk5H25Aei4PgHkkfnrw8B68c8MbYdfWhZu4r5iQsc9RF47Kvg9cVHN56H61",
  "key18": "2G3WsTvvJDuTPw3cBUSstG6vJRm3ryZWS4q9Nxf9fsSTYczJicxVUVmgFoNDgmcuhncmgJuJ9jMXit1dBKt6DedZ",
  "key19": "4jE4m1nMeFKf3cbmTeWUjJQeVaLgLpubAAgEYrnmCYujqUDk4EPYGXmEV1AV2dB6ZS7E6J37BKCghV3t4JiTHSU",
  "key20": "2ng5wk2k7fsqMoC8acCF958jHqSsdyoTwArXP79KipU1Fdwt8yactH2JkmtFWjYLbdpkxQGrhUu7FWg7CsUiiqF1",
  "key21": "Ao1U3hU1zzAqCifPGgbwSQDBSsmN1gJj7vMFQfCW18XJgMRyk7tnW6JpnRaenoZdH1GKFeNeTraqBooXHNqYC69",
  "key22": "aup6N7yQrGe21JQKQ7mWpGdjyD6YAeRPRetuVH1uBSPeRd2sJp1CFKGPiBLCXAuy2VFA3NNJxdo63uf4X3f5ZR4",
  "key23": "4nPrDMk2RMgFgjPGN5wg61ocjX9FnPPEYxhKn6b542ZnXB8rgn1m2jyDfu4e6yrehg4YZooDuVztv7DGxFzjQxhQ",
  "key24": "5nFGAQXC1TmNpJRebMGHkstEsZJ5meJ5pkTxbnoh5UY11SCTAvh6nqA4Cyt5RPVYY1sqHnJZ28r4Gvca5ZbRCAQ3",
  "key25": "4ERQ76iM68NaUq48NujsAhDXR8EaUgKxRNPtTjVsp7rBGFHjK13hVmqycMTk6nwGYYNnhZzjXGTxgQ91cWaZ4zmM",
  "key26": "5TeERa9w2MTVWYVxmjzaH9qyfjnRozdfv4oiyiZJ9Bey5AdNoGNeVZUBhXtjZ2K2rL4EDfV2H8jvqFk6UZWHBZ7Z",
  "key27": "2WVXEyj6BzX65MsLbWTg99u5JLyye8ueKogLmDgXsravM3Q5xyHxgsbvLHqFDUbFWLVWNXcSey35Dg9pmxvjXZ5c",
  "key28": "3e8GuVU9eDiprdJYPbnXJTNqSfZpoh4NmenshVEhmq9TwRNjg6kBPmVjtGpXB582hoDeUurUjfkvRg6E8ZLuqxHb",
  "key29": "3wemf7BKraXjWhn5nReW32Z5UvcknjbQMKR6TxVZAf1UJSibaNGQk4jkXw5rGo2qcfuB18iUZE74eKsY4CPvxqXQ",
  "key30": "5aNgq3RBzpdmNPfnfYGH4uK36qPLyfQ1oRYJp96GjidT3vuEdst6QxvgRqD8ySQf9SJD6sG2qwS5Nh6pAVvj9ajs",
  "key31": "3n5uhfRqDftVKNP132fprhupfNyQeDZ6gnNtj3VarbVqgTDfct7iRfkppbEj9Ve2euF7X8VPfZG8vYT6LAfD2ff8",
  "key32": "UmkYTj9eNKrSeNYex7BuzhmHgAMkQNkpaREu5bNTDBHGNFKtmT4djWG1ihLFuq9t9ZsznYL8J5foxRvEocYGWFb",
  "key33": "4tVWn6ocFuDYMugn4o5j4S8jb3Hrb7QYwUXnMZCr9QcgtT38TZLRyYT7wgF7UacdpRupPV9dWTx7WsiwTW96fewK",
  "key34": "EhFrKSQP8r7yMbJaxiM9JHUoFgqDtRvjE7nUgTJpbMHTEgSmbqeNc4wYv9AN3thQfbXxJzZMJzTFb28BGjt8HA6",
  "key35": "4dvj5yxthWYBww745G5xPn85HF32kLe9SoEXRpPoEqfvemXP63WrA5wkZR3Qy1Yq2Vr5xSngdNAj9BJXy1QZWDqm",
  "key36": "5q4QD6fB9WLP5RRhPJX9hfACVDGJBDQACezUgv1Xq6TgduTw82wCsGqPWAz9RE4qDKAQkjiZ8q7WeUEwx4q2U4Nc",
  "key37": "4zB2fhsWenpBd8Hv1P9ZyMj6eHGjUAGuLe3Zq6eYdsFDBjeKt6MrW4t5bnkB4qVcSZ4RrAFv7gwB97gXMxtsL6KC",
  "key38": "GjMUCqKjoCT8CMCLeDyVJHY1zWirjzWVcMKZBbJYswE3jSGVYREEjqB1fzv1SKN7B4GiA7Rwz2hqZKfrAE57wLj",
  "key39": "4CwyrWDQbuS3AJVd9C3Lbhb2NsikuvFvKdKuxfdTE5CEXdhdS4AXuvQjBjg8XPmTdowNm67ZxUgnXjRZCKsFvfZC",
  "key40": "5o2Z7bKKgYx5iDvcNKEYpomzxii6rL9aWzNRSHSizk6BNiwKrXM14HaaGjDUEQqSb2ZMePtDnhQmkjJwZnKX9gmB",
  "key41": "57BzYVzeHNJv45F4iEtCVw5vNjm14zDi9gHKYUcjA11fZNrec7PrFdEQsGaJRRtJviQRo1sn6Mv8kjG1z2bCU4k7"
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
