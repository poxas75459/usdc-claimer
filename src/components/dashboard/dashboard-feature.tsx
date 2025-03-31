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
    "vJSbxmduicbKW1PJEv9YLq6PuLmQ3yyq1mRs7tqoPHC1e35Ycb64UsusoaEE76n37JCfrLyoPRrcpxPmuYM6hyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MBFrFB7NZd8dnpLbcvGLhtqDyrTHhtCNjzEVnTEbT1NaTxTHj6Bfw8ZzZonBuftZ1jepHRiAbvA6m2basmYqyFy",
  "key1": "65HspXdyCLP4zi8yK3DUdae8VKSrejmaPthmbed7zoCLwW65xgEVqbjqSCodNUhtiF7CDeTSCYdApvRggkKmqWuU",
  "key2": "Nn1vmgiAFC83Bi4b1aT9qqHqaQnVz9HU8MSdTDScv8yqUwqTN4eYWi53HnBodTFJi2ixN5rQ2ckAqLo8hVweTZK",
  "key3": "3mM4BysgwxZzh3ctuffTYjBrPRYRoFmL1cR2q8KmaDSB8KwdoxYtVeP15PEjaaFW4aBb5oKMsMiJDNXkz9U8b1j",
  "key4": "2JubevPGFbypfVaakbPbmq2Ko9Jp6HysWt8Da1QnEuMn47eXDbxpjj3YbMxB9UT5yXUn8E7AcTvqB5Wfiw3mFr8J",
  "key5": "4WpJ5MMLe1CUZRgkexL8sFJGT6xKA9WiUBDbyBKCUpuJ6ShumRNiVnSPnehiWrnMbHQtbemPqgAuKeBPbzkKiG21",
  "key6": "fPU9pr2MaKBED61UWXFvjqVMPifwgLkj8rECszZTdHJoffvCngHFrd7LhRh9tjbago5ueB6A4taBE2A8oq7NPvJ",
  "key7": "66xTsB7Kp9mFie3ZuhJVTvdVkt4gHcpR5xi4VbJqAn9XDXhHBwgXyxiWRSS46tihq7yi5eNE1nWTUs4TSPqsKR6c",
  "key8": "5jQte4VMDeuLaEyFCfi7ZHqRBYpiRNkxaKr792NLHfK8TYmJPuyvVtHbu7jvZrZH53Xa2WtS5K17JPga4pNeCeL3",
  "key9": "2Bq6ANfpgsEw5CNvYfEHqZ9Hae1SLCtvvW91TE5f9nrWLddRtvxqYZ8PRyj36gwr56syMrgMiWwZuTt2wpj4fHmJ",
  "key10": "3aF6yzBqyrhWnW2Pj4UPvjYeix8M7eN4KPR74DmEr27hNKwVdXEEst9HSVcB8vCTKcSCetBSfQ7dQu1ahfNmarHi",
  "key11": "4xzcCCAJSC96oxvJrPdWjjXoHoWUJz5JfRzPErXckLDMUuqtkCU8VtFNM3d1YcrXHTkXBwsSAq2r7GLkLM9bGRcd",
  "key12": "vh1jWrYei9x5s91Y3Zz5FHaHZ8fZuKVMTygwK7v35aR6GfoXAEV1xJHVx6e2ykeWwNMpCAd5KahPVTz8HsdG7RM",
  "key13": "MkFLMTZKtEwQFhMhQZmxPgTHzH5ZN2Xa88hs2WbxLdz8GtrmH7cG14q4aRx6F769CZiXsEqNhkbs5fWfFtW53SE",
  "key14": "3XFdnumkbifSundSz4EPZfwvAa2xzkQ2KM5Q5Hk3M44vAVG6vaxrbrE1WENbHuDATJiVBrBVRv8SgSbeiP2Wbaq2",
  "key15": "4mxaFDSdgUdBfdrfMbLDNSsX6M5DC6PHDKA3Fqneh7wGMi244U9gXVvYaS3HH61VjzDHEHebQXHoKsvxeK452kQg",
  "key16": "3BRvx52eJ4oqJ7Q9wpfvxW3N9GRtS9h6xFfw7VGQZxHwVy6MyqoeirHmvDNWk2Y4zvH3gCbbFhFS2c3RvryRFcRk",
  "key17": "3dkHD7b92iVP6t4hRmk1kN1eRjnhpQdMP4y8n8CmkiPLu8LWZRBgpkbWZncyNb77vrbAxUy1zgeRm522myuhjofQ",
  "key18": "57TUmrySJsik31FEf4bsmKrDxK4sA4UynK87XSmAmn7d7DYUsUjuwyC18mD6EmWnUQUny8bYNz36e83LbXQBCW12",
  "key19": "2bZ7uTRAS4m5xVtB8y2DaArVGxurpDRzD3sPRs8a5K9NzeG58K9g4XZccnE73DnhffjD8se474BQU49oHuscxRjq",
  "key20": "59vr6Dc1nsebQwfCBL7iPayQrWE2PgxrotYxzs1hLaFGB9wPbq3t9sXbjwWj1rGRwbBAx7KywBRbsyttXKVCJ76X",
  "key21": "2jH1tHHnFpZJpE9RLiq9vJJow7zqp6oBqpczH7Fa2jYdow3CP22ci7LP9ScGHWJjzCBeWyb4swmsRSL3JDXkkxSd",
  "key22": "2EuSaJVwp6v2oB9My4FHAwqAXGKH9KCNMbupr8VBPsfMi4fssLsu5rfb9XVpapGTe4FHiG3jeg6Trs9VXK1SAweS",
  "key23": "37Nhyou4gtxaKppFtTxLzDctC12xgWdbuLAart3sLfB1fpA4q7gfofHm51e3sDN8m49Xt7u7fCKwLX4GyJ8Q5gRX",
  "key24": "ZQgiFCZaRuLwaTFLa8woQG3u6vwwD7MUbS2YJVB45p8ZLMRycfdzNopcfz8q4kRfCuxxGyRqvTgqRtRPwUTV6X5",
  "key25": "3scho7G2su33pcs5HjkMWiTxTofkoRiMyYrZWmrTJpTg6ufHxr64UJJwUv4VVkZGKQKMgvX8wt3bqGxWcEs6RBmA",
  "key26": "2mTXZ2NLFniq3z7AV1JTrnqjqKAqZDwsxwPjoG9YPDNYkPguZkUV5CyJn6APK5QtzdSp7vnT8gy5QufDPatvFS5T",
  "key27": "3SaduaEeL2KadEUH741RxRwmmTPD9H4LkVYN3w9F4u7ZpEM87S8nt3uFw3bSS9Ps3HxLw5qyFPAmaJAGescRnzb7",
  "key28": "eJdn1qLd2gMBuQcdEGQ9Ci2wpjsJKwj4mZSvztaehVdZtNcjzwg5vmxHyiRmwgBCKjy1xz8Dccb1LHQkXC8PD8c",
  "key29": "2qgEzwK9dTwzq3LS6NkCnJ5NqzKMAxmJpF57TFagNrfciLnVMFEJy4nBdmeYFjmKckMTSz5eX4CKhzJXWSx4Xfbf",
  "key30": "2tzCWGPzpVbsNV6tMW9wzLwrNVQtR8TmjVJA8f8JhTMKBgBKgCCJoDkvYbx6tWeCgw5CyRVeKeFasxGdAXuWAW2E",
  "key31": "2nvVCFwomGCSrTV3iZJBoNFtffTtWi1u6WT9FNeBMyRRXCsL3u7BtvySTrQbNUBZ3cQxaCiTsaqYXHpn9skStigh",
  "key32": "61aX2o2Ey9YMgkhQPsw2Cctrtty7T1W5irdJfQsWzMrpGeL5MZ9Bb8cHjsSPbWCEUvRpxUxDNnk7DMGFyTuyafMs",
  "key33": "2YFSd8zwPbwYZn6mgzP7nDnNHBV6A3PLE2GRqXvQxi87NgRhuyTiY6NRDgmiXZ5GzGkkAKNwWcgH4D4WHJGR1RaL",
  "key34": "AVgBTF6vi1BLrnE7bfN799npoZcZbseFBZNyKqWKkW5WxQNJ6LxosVwjhnYizH4QpW7ujb8rfaEZ6cUJPEv7MQj",
  "key35": "2oQNFViCyDmT3mbuAVWBkFfjQSa2jXERsMoKQoVfhbqgrMbdtG9V65q2WEqJmDGfDXHpyhUc5xMVRnfKrsYZLWjh",
  "key36": "4U9pT8edXgHfbZgRKief8fnLdyNFhqKMe1FvgcU4aR2xV396HsNQzu7kkJQouXp4MZtfw8GvbqhC84EsxmodxByU",
  "key37": "37ifrK4pvsDqmUaQ9NcNyrR3axBVxQBNc7cm8tGQ97diFjCT5MfwA3xY6WAx6kScfdetutkABNPpz2drNa7aGSaJ",
  "key38": "2T83Wbb8LGYTuMahK7NoDH8LbUqsD58GRyBPYF8ATr8wKqDLnhL5Tfcv4r3fphKkrjNQi1X2djsWb1xU6HiTwSDy",
  "key39": "3onJd1D4FhmHEyXSvexA1kfwKuNJtS8Tr8te6Aehf8qUVDD8SqrK5YkfBfv1JLf1kiqjiQ6BHpKmvkiJcPqpyHBV",
  "key40": "5RtoZmyqu2VC8Rmt1JFJXjRmdDASJ4vgUJzkYFU9zcp3qZjML9TscVZ7rw7qsN8YL6q151m8sftjJyMHT96veFrC",
  "key41": "2YLMeLommCZXvoABRDapgaUvqYjsRburmifxfMKD2sxkUu65Yyuaw7VjRCTzCj1znGTCnYyvJdEjmiFPKmAwdBpA",
  "key42": "3gpyFAKBMNcCh6pkoGJGLx4o5xtUduamZ54aVr3guV49DcxmAnVH3EDhJ93uq1oyZekUtBAuUcSLMN9rtaJY3Kq6",
  "key43": "gWf7KqrHoBtnK4XyEJ8qmxga6DoaTE5WZe7YnBm9SKZDZcqoSb1W3qkES1yvnMhS1E7SfPkAem1FQF1qh4kNYRh",
  "key44": "4gV285gUxPGnfQs33wGvAC5wz9FSTDYCkWkTbk6YqVcRBmPtwNyJHxXummLbwbyoRvMDMhwae4eSrhe44S2MhuuU",
  "key45": "3m9rDY5hcMdRsaDUDEXBDnVjFTj5EeLT19yrmfm3yVh2hgdAwW3jHqrYKTnb1qNXBBsshL7ezrm4kG5wMgSREKwM",
  "key46": "4Tp7WCEeiDoHhF1WrSrMJDXKLxxie2vZyi828MLLcij1wfn34XmjnFKKbUXqhVPw7cUwTWQuCSArWZoYEThzWPjc",
  "key47": "33qQ1TWJCrWG9EafR8cn7Xe4ba6V5Bom58T3kkoo8yYLVvMDsuWpHWehDQwcegfyeYUjR2NdmWRvtKyZyux1DN7d"
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
