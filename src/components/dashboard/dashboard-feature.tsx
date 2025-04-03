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
    "BK4ney7DAFxZ4EnQCfUbumTnm7d1vR9XMHSm3v9p4KU57caXxPYqV8L98FZDDGnb7E5Td3mZgod6gCZUZoCtLS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Yq2XWsPHjtCnMXZCibY7Bktc5KEzYDb29XnSFJSGfzY8iGdXoNejc5uFWB9Tw8npCft3rZsWfhiV1ME4xGnS3E",
  "key1": "tkLdu1ahpb7aCvhLde45cBhZ4bJJqiLNxiARsh9mtd3pbzfZtxPAignGveunwDzp4BdCXx2TtNX7hb9HJdmxYLy",
  "key2": "3MHVmAg3tXvqma1sdEytj53N9pVZecXSf9FhD11Ai4JyutzC9WpJnoxZW1XgE31XVYydvAqE7tBVVvQDmR28ZLyL",
  "key3": "LfivaGNXimDs7nGand2jePVnFw4t7prENHA7p9NVrCZ8b14iPjEEBSGmmswKoceSbswKLMXL17ZuAiH2MeA9zoV",
  "key4": "fTmxdXR84o7kTUdnA416F6dH5sEtWmbHPJ8tqnjGtWw62Z3umMRsNavxRBZ3Uechj6KApTxGuibbN75EyKZZK3P",
  "key5": "2s7fYiMCDPZii4w1r2PVTxyB9mLRoJ2okPXCo6Ag6fZEFWd1B4eqR36gsSZFkk641DReaQBxG7XfbyKZW2JASTBf",
  "key6": "3e8NYNCk1hkcBJ9Mc1KpKdqB2zk4dsN5YFhUWRrjiHDFEEmTmLp6Pi4RHuGqH7EGMvN6cBCCBWvqyTWUAuqAhLJS",
  "key7": "46kXa3jnZCbZDd2AaThSzdCGbdeQJzW8LuaS3AhMiHsx89tRN4QG3mznNbxjYMASG6pz3juWoYiKLGBnBDX4Ux1k",
  "key8": "CweZJULDrYoDhKE646LZvf14qPkofbrSkwUbZznEau6Dzip8oVuC73v5BLqgRBtSUiFAcoKM28hVorgVGH2jBae",
  "key9": "3cMm5joiQ6t92meRrE5N626dC6NxSKHV1NRRR3AJKyErkNxMsDmmqve8Q8exMNaY9g9LCCRiJxjf52TzuJc7Tpr8",
  "key10": "27S7uL5McZFd7VVbiJ5HwKEsfiXhPRy4dpj6sB2fP2XsJzcNZF5tYWYtrQnGdrZR2g2zRnraGumGvEEKxZKjUcbo",
  "key11": "3yJGoPgEfvejoRtfaQJPXdMDFmdHL5vxSsfwPDTxbVDDbQKKeXtoiQCd8f3hU7dSUpT6pXLw3vLa86kKr7GfoeQ9",
  "key12": "5quLm6WiZxAhxaZ41WPWurAqP9hrLS79ioMYY7PA5tWbjCpvf9kCGUSUw5G38wkBY17yPbpYvaom1SMqPSXNwLNn",
  "key13": "4znChuVxsZXjsqgpy9Yc6VXMmQVFBef32P1aiDZCREErcrzUpzzjcJgt4PD8bi8doBnHh1rc6daLRf2B8hxfwiLr",
  "key14": "2ua2uFCbghXmtvfHXqqZ8vP9Yq8qDYNyPt2GyA2aP64sPsMNNn9Y5oHHpa5zRYv9a2XVeDjLXwpNUhCLZpMit4Ld",
  "key15": "2nMgh86z7y8jxmFczEwYS6HeEbnxkhvfD42j8HmGcCasvwJrE52WEZ3GBEq4opnBim9qC7W6FRZb1v3efYpUWoyH",
  "key16": "48NwNZQoRtnpDKC65ZCt672CtMBBQXmrkF6srcrvcEDhqg9STJjtm1aR6omzWXhCfQthyiX3jjiP6XTpL792rjhA",
  "key17": "4FY32nzgALS7MNtaTpyHjN2y2eWNsbrhcBc1JozzzezbTZ9MPAQPB3576iBe4fxfKBMcMz87ucCYhnGFkemSkzvW",
  "key18": "588heZmnpvZ9QJW9BM6Rz49HEBjXRNRrLn3zNyrPeQEjmuk8J7Y4XSsnAkvNnzhpMdsjPcX95cEqeAALZFiB8wQi",
  "key19": "3aZ4LzsQK1xraaNd1XUjq6nckMzvd3GzAnD2kxdGAMKARbUyMceL7uMP26pVgpVsbkNGvSEGgjLAX9U9t3XPRsvM",
  "key20": "3KDnvw41jEpxjofykFZGbJ3N6ofnsaskAqEjQrb1C1n11MejkJcLPBbKxToWHEzjGPH1jNqXngSbSfo56hPLf2A6",
  "key21": "4opdjgcmLEBc68t7JwZdjhPhzeGX5g6Cen1TfxHWSUyk3oR2tTvrPxkatsB8zHWsxtwYGzTeSzC3U12SzuAoKNEX",
  "key22": "3BSC7sgURpNkr8g4aH8bKPwsa8dF73nNDV4Lr1EubSoqVjepnXuCrYxWt2CYQFdzntgVzxhMizQPmQyBS3BLALcT",
  "key23": "3Z9cmSqjcwhWpXWMXBy8MEC28NdHCPj7RZB5sMEW54WzL2qThFvniydpv53DimChT9SVSrqevJH1VjRSQYw4sgzq",
  "key24": "5fUPQqGqbcceQW82kgQ8e48mpRky2FpaCGkBau47uy831V3sZFsqJZAxFxRito6xvpTvhp5vk5JYR9E5K4R2r32k",
  "key25": "4shCKxAV1hQejvyDQPecR5hmWTj5n2eMZVYuoNALkeQfLi23jKMYwHBdFdqPwm8v56yFayox32EwKaeebFPmGZEa",
  "key26": "12Dm2rwDSWVWqZrpgxL21qvvjgvVvbyBrFU3hy7QMihGTpSoG3LPTzqQoPLqSQwTqRzxcBRTDH3MpoSqALfy1Dm",
  "key27": "kS46gYPBKff2kmXkTpMavN4fNjqVEhXTKd7hmtKViJ2MTsxavzCniF57sdaxKk98rPz6eBKy4LuumNxY5v2GU3s",
  "key28": "4Xzf7ZheT1DJS3BhYXLrzYRnjMcBD7oS5K5QCULrXCiSZR7FGeqjZAkfQcQcA5ezrcBoBEzNB5rjf1Di2ZjtT2vH",
  "key29": "631ie5QFFHFrt16GtPgHttJQnih2R8hyjMCWcYYsgyrePSxhhtaomn9HytPLeoqAct3j3GUSA1jaw3Q8j2MwSAC3",
  "key30": "NwhJHkoUfLoe8B6dunaVbCSGzPqE5efAy7suzj7v469ViybvMurx52ACfEQqyZNPH6Uy7fYLkFAagpoXYWvDKMC",
  "key31": "5goJviMbZ6XPN2Jdk97ri5oPwwYzzpnrKSL2yq6jLMixz3njyB7ayAajp71X7Ez4qjtjYMi3hEj8dtmJtUo5U3Aa",
  "key32": "5XMkHbXViX3DU9Ga54DVHpBbTxZTyqq8TRK7UunnWZb2VQ22ErZVY5abPUBQtfVPkAYGsHFoLioMcPLfe5BdVb9v",
  "key33": "Zu4rV2erBYU3MQYM6bh8WUMdHibACLqYSqoWwutAwWf2bQ7uDS66nZpYscGPohfiagijGFFQgbHiWGqmPRt32ju",
  "key34": "3GADcAZwjWj8296o8SDopq3eMsEqcnRm3zXQ414cZWEuUrAUNbNKsTdmiVcJmWDUWrVhfSDjtzchqwLsc185Nh8B",
  "key35": "CgvmKs7bRcjDHp6fCDSAHfcw9ehXGbDyhV95itv7xHHYHKf7Nh5ZBAzBjm7rNi1UHFL7HoduUosCs664ZPnMR8y",
  "key36": "3FLweCLgVgPnTrSUb16Lf5ByviegNft7bujY7SKYjMeHRQcxLLxtVxBiFvCnyHXeoAqYsdd36JxaP1hxbD2wrfVF",
  "key37": "5Ufcda53XchRUZNfNKhT8Hr1ccfqcGeZeQQDBBczHzvYEmjyv199b8CfnVhjdzEa6LFf6RMEx1PyHaeCVUAe1Tcx",
  "key38": "26rX1bTcAxsSSPZCtosMJvdHszFa1UeBbRAz7koW8HqrLMr1kGRJSxQjFgAM1wGgz3Y8Hggu1PoFwzG4gvVo4EDs",
  "key39": "3mYUMaKp4XQkT7nX4Y6FkpusnqbKnzhydvHaYsjrroEnAqMwa8V77fdNef7SmVRio6Q58NfJq6sTSiiUVFjbUwjj",
  "key40": "gSBjAT5kA5n8WonhvCF46bTdtR12MFn77LkTBJrLCHNtFJB689BRV6u4RkE8ErAEHc6y8SnyHnbfB8uBs85Ra4H"
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
