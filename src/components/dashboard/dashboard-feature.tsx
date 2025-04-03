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
    "4uRkHbcH9p4nMhbucaeqRxUB7Yn9EeWryTfdzzQSfQrZq63efid1RnL2jDAV1UzS8GzZ7y3kjsFrmZQWUAhB5mPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Nwu77yLLAzaidsvP32WPe1Pqo4ETwmbTBKH81mGsZLTraS8WK6JxQk3bT5xBdrMZYyoEAhyytPdm2hWgxiEbRB",
  "key1": "2KyZCvMhTEKSKBNweNVi222Ay6Yg87RH9QpYsaSYiUhcgHgo1npkGovfntNM6CuWgEGYDYDcs8ujexrR72C1xrnv",
  "key2": "4unTCNxdr7nBXKPBuDR5kBd82f58ypHtnmYkPoB7xa73WfGak3RK8RKQZVZ2YMmRa6wXCtgNxwEw2iFJd9XEUxMh",
  "key3": "4xe7ceEDEU3sUC82rjMCMgNfaXtuUhmpCojx95uRwM5JUZYCdU4jDZCFhrjuBXRZfatb83B2Hvi8nybwEM5rbAqK",
  "key4": "5pHfKd4j8as2QesyWpcSXjXP3gR3BSB9GWfAV3uYHvyzQwu7FBeKyJQdXAPgceZPVrbGTFzaX72QWVpbNq66WbtA",
  "key5": "5WdJSWFudXy5Ls5qz7pAdnBkwvqfykw78RcBToeJjiefHArV3JGNfP91aTPZDAuZSyHncrnmqAUwhkeU4j1Xoj1V",
  "key6": "5eKxziYLwVdLEvrBitTTB33VTfCDCQBvz9LEaFyK8gpnrMmjxrYkQykJWbE1ZkBobskLZhxJAM3HnofgnuAhcabP",
  "key7": "6kpuCB4vevVzn7V1unrQU37xj2vvHyfLE4aamBj5QHWaKfG3cB7j9HKfJ2Kzn6u3TKZPDn1QhYXUCuyUJPvNeHa",
  "key8": "4WqZqSp8Nrt36RgUxMTfLyRQ7hZaHKX1v7e6GraY4xy6grq7VZCSgE6RyHnx7eGAds2VKqKScseV2E8tox5hzZEW",
  "key9": "4QABVrucZohEQd5AQpUyvRg6Qr91YLQi6crfdpDHLtQwQKiRQ8EYR9GWx5aV5YdfqbttfaDkU653gQtpq7oLmfNn",
  "key10": "62gw4MYxVXeuyzWSj6byQdDn3dVXzoKQGevbSYZGqtimfWCNxSYW2sKYp4urgkWnmQh4MwtuqWCQpknhNGS29vKB",
  "key11": "5BkegtVeC27B9hC1suQkRBWFJsNqLAAQFPQVogdhDGb6tDhXuY9opfR2V7vDKkbZ1QfTCS6kAD7wzhnaKRdTnRhm",
  "key12": "9GRYUGxQmWpJir4LrZNqFLs6XTKcaYvMYCf32NzBhZfCsWsaSEBrDA47a9iYx5nRKRTRHExqxkAJa4VCrMGURQf",
  "key13": "2Ttw89oTxEa4UsFtvxAXQYMbzNLPywk83G3aj9Nra2ihrRCbes97tiGJCZgeB5pKMW2JTv4qirxvcW5wBKnk2qvx",
  "key14": "x88ykiKGPswmRSVxVgjxVj92n2Ewk8t8Nd5U4PRtNWjMXMRNdWKtG13MrwuCfFNoFExzJ3oV3Ypx3fgU1eWoD1B",
  "key15": "4EmxoKYdrAikPBPg5GEGQeoEynKFxkyg1abnBiNDdDS4gVVYLMXEMk5z3EZfS888qXqSEoiVxtF6AuSuoadPoZZY",
  "key16": "5iuhDb1G9KKsEDu2khQpBvFvWFnxTjyWwZxRxDyY8dXAsbjNCmifoHFsShxUP1zphz6Z99VciHbrqwv952yrMctn",
  "key17": "2FY2EY8c3gvTV5gJL6YsiecXvmwCheCDc9jPEU7ByjYXNgbT8krXSdb6cWVHGUybEUrLVUYnve5tfS76cVZgK2N1",
  "key18": "QmrRgatGnFVx4S1rr6WAvKdo9AY4Nw3nEeDwVK2tFHngnbFVLJjtHpHsCpuJ9C6pT1nAr4mdM355hWPfyVdwT6c",
  "key19": "5v3CLCY3pW7SyxTMjnG4jn8RgfQ5cSxen9fHVnByRXpwjZLxeC4cCwv7FD5AB9sU4XcKywArt9BuebfqmKkbgYAw",
  "key20": "t4KgfhN7x9dQt7PiJFpFJaizbTL1tmeVEF4BSQrwqDQ61bJ4M6pXm1E3VuQEhLt8S41J1MkADYY4nsWPbSGQQkt",
  "key21": "t1E9jEuSTwFf2cDomBWSzKghNLFzBGBPeWQVu7XiAG1qA1LqTvFZP4DY7QQY5sAZsugyPETQnwq5rEfVs7fVj7a",
  "key22": "46tn9FKRuKi4VQyGAGRX3qJadGgopaReQYHrUJvahM2xYNTD2J24CaYTdQh6puzsMrWZDfJQiAuMvNW8CVpndVW1",
  "key23": "5p2Wvrp19XumDwfj4PqD6CBYGQSgYmXoH94VnR17LQmVV6mvwJr6pWMKsTevxubx72ZUrSJ2bhMEuoDLiS6GUhP7",
  "key24": "3FZF3UBDManHgU3iCVPiFbjfuC4tHhCDw4PKcBF34dfFNVtSFeLv7wzMcnQA9FQbCA3KGXXhAvdSpPpDnzZDARgc",
  "key25": "4wETRDWZyUZ1QUHBV4MU3Ng9EdXsdu9hB1R3VNggfRqK3PShG39QgYGWRFzTwFmrUMTScbygW3hDGZHiQ8PSMHTG",
  "key26": "4gWa9Mrsr1BqxSXMp9woQv9CJPgKgtqweNxjXnBseMdceHAfRFYXv8MvVUCnHbYuTKxhhnXiPSAQXrmkdTxsbtVY",
  "key27": "5y59dHgjBpCpN1m1bRW2sQSV6KeGtbQPDfSiigyt7cXtHjq9jS2rhuTaC2g5LaVLDkhsT32UaVz8QF9LfVV79ZTt",
  "key28": "2ZDdHBSgmimJXbZR4Fquzz9Nn27vJ2UaSXbRikFrNLtfrLqK9TTMoXThtsUJttGm8PeFcPveBPdVaeySdeUYDwTs",
  "key29": "5TNkGg2nEhvk2KUGqJuvLCcKYcFpgU1yYgfuXTFL61YBWz3qSuY14HSepJLdUS5Rgnm2BpeMtV7rZYmb8XeYUxeN",
  "key30": "MJ636GwHKPCaeKMoiT6SZ2RW3SbHdonpi9Bdou7AWw93KcRfiuQCVVm6rkXF9VnWXU4svRHeACBNdqfvfB8tJS6",
  "key31": "45C14jeDB8tVso3AKSAgD1wbHwdbHhwf9heNHvikspqUXnX2wtJyannMzS5R2a1KvWLWSDMbHwrdVoSu5WRYQPXc",
  "key32": "39K9Txm51UNoby3kHYLBXyk23bMe8P36Nu3vaQQPo54zLVPZ2GbKkRDdQBxPahw2PDsES8LAMYS3sPx5SCoE36eF",
  "key33": "2EHbSBxyPhfXQ1mTrajmWo3xQmS6dDcM7QmLL2bA53PcR5VcMPhivAjuu39mt47P6gr7RERyhDuhbRciukN24HpL",
  "key34": "3Rjn73xp1QhNpCEVtphPc7MLqiQnf1JAPF7z6Y2Y8yXRk2QCseUhkERsN3UYFQgNjcPLm1zCUwkm7xTN7pAXd8Mr",
  "key35": "54BLkhH5hEPP1ssMswMVd76zBrZN5c96JjfKrcKQWZ1Lqy8EUoxeQxRNw23cJhUsSUaBt2McWsgwrDymnhv2g6of",
  "key36": "6zWyBAY94eaM3Mvry6vsgxKpKXStHU2z125XZD6ga2kuS6pXENrJCtBWS6H1dBDSeBi6tMMf6Sf8UxRgu5CxnKY",
  "key37": "kh6gxaqVRYY1pvD2sKDpZgUtMrXGkvmCtZcHcxLWviBF3rkzPxrYa7d21hoL83G7xoZ9gPAxSZ6VGqv5JAtqECv",
  "key38": "2dQAnUUTf2dwjbRMNEhvRP1NYk4s72513KzJdeB6feifuAUbBRCjo9D5BVSsPJjY3s9aB2MWuS5Zf8EMiH1TG7yE",
  "key39": "5tP2S1AzaN8m5qEXVFhUfjhMoMAYyvFNv3vYTzGrSibwF3kszagjq5bmPVdrtWgouFiRHjM29SxMdKoRFDAFgMyR"
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
