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
    "5vkWAKm4X3dHposBL3UygcBiJREGx9p1hpKsS3zZbfC9yrFJxNMbrZSeV2Vkzf77rvi8SQ1vAJNoCyBvvokQmB5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bFEDwxbKhgUJRDjikqEpffvLazo749JPnF2Mus3P2m9HdZqFAfNrNJhv77UEyDQ2Geys2oydMAr6eSKXPBT5prK",
  "key1": "3UToBPWUiXwpNHh1sb9mF1D9m5aQwAr5BN48B24fquGUzL4iUCRYen1M8oqVTrfyXHCaG8SY2HVKWUKQ9dKqVXuh",
  "key2": "22J3mXkaWidRf7MYdZpEWyZNKfNyePxTjVR3mcbzeZACFLJdmhgoyyJ76ub4W1PsQY45fE7m4Fg9RpN2QgWBdFLz",
  "key3": "2yUQwHY2aTDAZgn4aXt2Zc8VotQKEUkmmj5iqzBQu6bYcGobfq2BD2VxLcG4QKQUnkYQYcJmM8Hi3mYXVBQZ9qag",
  "key4": "3g7rcMWZM2jwFpWjfkThEyWwYAd73xL4yheuPThHYzdcAJvziGvDtwa1BKzFhypir4xw7aX5tCnHh5me333wLxC1",
  "key5": "3zVsazh8KGsLa1RYxeQ94mpk47nwGNyT6W1fQDW4BQrybuRFsGKb2mu51my2TuquZYauAzXHV5Y8gzrVdpwaDif7",
  "key6": "3Y76yWMPRyLRTnvPUWZogLgMyREVtjHmVW79XXZAj6HQ2yxkkCFhqdJj1HYxcjDkyDaYV8bts8gzKstfsQAcjVmW",
  "key7": "3CJzH4ofxpFAkgJBd4aDNSkEyc9ytWNmgcXb52TWEA8ZTaL9WbXiAfAQcb2Ky2J2v3QCw54RKH76iRWPn1Ua41QW",
  "key8": "4qsedb8JRbVAMXgfAU5kyCkLKFoSDBSQY9ZeaHXDqzvogf9GspmToaeXm9TKVF36KvfUQoMQWTT5knhG9U2aj5R8",
  "key9": "2Pcxi1MBn4u3PnpTLgxvuePXbCEUuDk1itcGT9HFPz8MaV5avsR7DvGknTDfM8NCJwoC7FVRVawh8SgDiYzoodvW",
  "key10": "2Q4R3oGqZezU2FaywE5Ds7W6ph6jaiWH7LLRinFC1jU3GgW9FqnrCsSJ1DWGZ8kDKJeVx4aLAiGUW3fWtV96ZMps",
  "key11": "5ZkiwrRcQd11NVhwNcaTCiFq5PUFbLmG4knKEo5CEXJ6HqePR8jMEvPzbQsp9ReZXJ7rTjSTcjjengnBUC9TKoUn",
  "key12": "qzahfbj5Nx7wkPsN65Wwh1AhKFSYWNoWC2an8qguejDV8sqUvpVLrohkuopmwJJhD5GZK5yjqxMZk3bsmjrNTUJ",
  "key13": "2unCCCsh7EnhAoEzN7pKgZkApne2iKDn57k6s5peBqLqRTcawjd4cdsjm6k54wo2FbePbkkgjycQWbye1SbZVniC",
  "key14": "3aQgezVpTtCcW754o5tKjkDaMwYgLLLkuBjbbvzg1Qa2KmjYxM4LPeAXr3rD6DV5ELAEJBsEH8Un3xEngAf6SPYn",
  "key15": "5sQs4rvZeaizFMiasdre3P4UW8FYcTEMt6jenhBpN6ktXnQGso26LGwSYo5ggWBvdTYqtv7RQJ7wmnQacG5RGo5R",
  "key16": "2Rhmxve15vu2rzDh6vUusttM8ipXM2QXFCGrQjiNBgnWhLbFHo9TfUS98yBigcBDuqqxCyQD82kNaxaJSkvXCQVx",
  "key17": "kosqqUJLokhhpVo64KY96vd2rPpzNStoCeoMAtgUcH23z7mhHioZUhwnUjr73yWhS9h1i38ftYBGprKFKiJodRB",
  "key18": "4mV88AbPhTESCpzZG1gg1ysE2pZKQ5HkXFT1UhwdKvo4uNXJZVJ5RD3ae5h2CWBtd82kf5g7f7txBFKynB8c7qdf",
  "key19": "2vFaiNCkpnyddcV1Eb6Ki89QB2tCTJsWG54qc38ekMcocfeVQ29deKPzVb39fe8zEkfJekZokVBSZYBaVDMHJJaZ",
  "key20": "2FQRHtKN88ekG9h4EPPFD1e96tLjS318o6qaiPM2AoobSGbSD4uLzRDwYreXZGEr4uiP5fpnox79vyK9PoeYjir7",
  "key21": "4Saf6bg5eReJrh4UFyMCQeQxMd5JN5GMjYjcYcz8uFNgqSF6kpAsyZ8NtNSxsB4zd97P777W8E3ap3baGfESbCfm",
  "key22": "2RDpUVKJnAZTGuExd7qqUFQL6U8dFq95gxwM6HEYpqgVaMdxNekBvqejVj1uBH2bu2fkbXrbzguV5AJAfF2ytT7t",
  "key23": "46nuPoXzqHwgXpxoGQ3NuUxoV8pg2TMomACcyLJd5kpUy9AWtvsrxYzteP6RwNpR691wZBU9ivHvzeGVhn733R9Z",
  "key24": "7FJJMLQ4cssqo8CtMsWwmLhFsjX8qv5E2TgvUXUnyiGwoKWXEkEKgzrJtijy3c3oavAmpoSVMEioZ52TZtHgtWR",
  "key25": "5cSdZoVz9RRARC6usiYD7LDSrnPzVFHC5Ttcitegcu9EoCyeJPvcQLGhav412ETLSJatXi6Pb8EXpg7yjkZu9QjZ",
  "key26": "4z44PbwqttCebpSkxrWK32LJu1aeCAQZ8gTCeKB8sBZAZeD4pgixS4vkGghAJDhnddtp3DyL3VGmZ8J8GVmeofJM",
  "key27": "2qgWwUr9fUqnietC8PdmEzyRZ5wCfixSguGfE9PoqD2tP7nAAbB8iGnrgn4KZn4dHb3T2kfwD3ckbwHapop4xmT9",
  "key28": "23WZbV5v4YwtT5ZFKq33rXVyP5PhaHr5Jahfhj12pJg8V24kymKSHZFYmAcwfQRAqmtS699FcoKrbEHXFnZNXTBt",
  "key29": "2jZfEZTzijJhTzGkDMyroGHVxfJisw3XKsVb1RFekf6vZn6X7BdyU7TJia6UcqSznLTTyF27njx1CEMTMgiDPFLM",
  "key30": "3a7pbohPXxBQJbam4UfVJeyE43xR52NvcpY2PZzC2Ycqxuh7Rg48QriyB1dd41XDBCYrkvCBDaanxG9hA8rMWgVe",
  "key31": "5JnL2EeCvESZhgAyxRfAbPNVT7CFMFgbA7HWck8MpgqNzNapYzqZP8mGpykTMCPdG6CMNJkRgJfy5CKL733ZgoBX",
  "key32": "51sXGCitBk1TME5fK6Nx4BoDvkqidgvpTiibFpf3QwsVVWBsMS4KPnxM9nRx2UQGUJnWmZQjus6U6a5kAw2m2Azy",
  "key33": "3YXcgtyTd4oMM64jAekwcnu5JE58384NhLP773Q1anqiK8PQimtSaDD78SML2LgRcpfq4yffMP9FNFocTtrNNXfq",
  "key34": "n5eACwTzEA4vnCSfFSBoCA86ANkmMGNjx2F2dfVC2udv9Ji9GqY2ECte5QUtBqE28dprghmrzfvXNRwx2KftJhi",
  "key35": "ecuYoDDxWoFG34ZxC9NjqP3XZjdov3FtJ9s3aeBiGAWjLHWb8oMUqzsZod4C4pKYqcT3rVNfPfpCAXh6VwvJnG8",
  "key36": "3JguXqLHUGosHiGQUynqutaM7yJao5HojYVQYK6rN9PLvJPTqekfNw3DXSs8gTJToFQUwXEv3EB2fSFyfpyF5UNv",
  "key37": "2FwmSdPputV9CX3bC5LgTNbFcFQNyTFXiHL9MyF88A54X7M1LPUe4uaGkifLvZ5KpEQmKTZn4ym3Gqg5N2zAA4Ty",
  "key38": "893myhmC6AtztEZCn37CwqwvJ1o86sKsBi2cVG2ZexCFQbuc8PfNRyCF9tELgvEpUdAgikRi8M29XngjN5W5Fvm",
  "key39": "5QhKH6LtoPpwBmRCvsW8pjMBM1kcFuATmoPMDtaZMKH3kMB3Q3NXxx8AvBfgpPgv3jbZAwZfdfM1zmKsTvaPzE8q",
  "key40": "4pLu6fzFAayuv9iojFwK9y3WFj4T1rte6akVo6hpQdb8GVNLKzQfi4HdcBcw4nBxdd7RUrv6FQjvg3SFjHdy2jkX",
  "key41": "4BLYniu45t4wnUHEQ8GH9zyXebnyCd7e22ErnKRQP12mzsFzK2qKyk5LCdUsU8JTiqYwPLbHhJMcVQWWAaZV2m14",
  "key42": "wh2bL4tfYQbx7ZD7jtywudQpcQeM7uyhpg9u1MG7vmd6QqPvkdN5eL3Dg1rvqefmGEffJqitDw4MrNDBHnvDseG",
  "key43": "47sAd1iPLTnjz59V9ufd1EVmuD4mobH9SNd9vNozXYQe2jH9Rcb4ywVYfpBU7gWboisLmqjd1XRPo3hoo6qqfTfd",
  "key44": "4mGW1ntntENKq9hjdS7xfamfHcRETcQ5bLHvpqeZp3nmrKQEKxn7oiiwcY1ai5bP8dZtwb4hdWdMgbihoWJkW8HR",
  "key45": "5YBUv1CNx1roZRQRcRrhjYhTsA8VGkoQHPu2bY1rd2f8gKwWDx8YpgokJ8f4LiTLwgtbpHeRezmFuumRHodJvvaa",
  "key46": "3WiMgv98Z2bbaTcj7dM7ABxHUkRdgzU2HCY7M24CUGmpDrjyAi4mEth9AoScwk6qNdohivnSWiyr16Lxaonz7aaJ",
  "key47": "3EFAQTjD14yf6imH19WibhCnXGxKkwrdngzHRBSGCCrxrneTRfet8TQFzpCfRECSZKZXkAW9dHuCBsmdDpZ7XEWS",
  "key48": "n9ddeR7HeTZhwbfwQsNZ6dK8dp9o2RJncqeBckgcokmTNLA8v8HhGUSPWAoLJFoDtVugp9eVFwyqNJXM5RgkwyQ",
  "key49": "odC8996DayFhA1a8GGVU6nCKjJNMPZSwVdeUTD14vJ1Q9FC3rCkz9DMsaX7J7ffKXTfY27uGsAgoko6YrN3V5fu"
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
