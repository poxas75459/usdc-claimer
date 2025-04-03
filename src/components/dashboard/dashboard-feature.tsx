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
    "42ZUFd2CogdcyrxrtiVfJtoucC5mzSC9tFKZQd3E52TAskgeKXYE4JQHgPLHM8FTU28LwwQdBLrJFfCaPHaCzYZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mLdfgZRXpNds1TyoGPGE1xywWTb3pzCU9kkQnU76NoPU9SC9PsrkPsTGk3pXU7KzsYv2ge6EMCJ6MdEjUHJoLGZ",
  "key1": "KtPiSbQ8JDD6yJos71xNM9Am3iKR2vKDWzyww2UNxezNi7bGAoDXuQp2HhU3ESLQTwwGmxvESnfqALu1NRo7bTj",
  "key2": "2q6WhCHU7QJv6RKfvTvZrGQKjmRCVvEHUTpGEHone55Li8S6mm2shEoGSg3abLNv4Q3aBCzQ8FMz3uat6rjCmhAM",
  "key3": "4E7QdKHBV4XNPvqE4MUqKDeDvhDsLdHx9MhbFF8Q7RvA5BrJGUiGWwnycQTrDLnoDgqXMCxfRQeM5XBaYJ5HjWpE",
  "key4": "rCEbS3FxzZdpVy3uN5GFrCiL4mhAsHbkjLcBvqvPS1TRSjZ72oVLt7fwH1Hav87hpfh2sjbhE7jT1rZBumbhpEe",
  "key5": "5m755PMe9d3TDwNmj9ZEA79473QDvniDwAi8ZSRmVondEwrzHsi5zHppfVof5jW5MrdoGY5qnS1agLrYJR67BNco",
  "key6": "YoYXToU26rmhEgAmdWtxPLFoZksf9z9shm9xB6rA1XTWF2P3SM3MiazSa9eLun3Moqk2Q1UbkAuW1XDh4Kbd2XC",
  "key7": "5hReB8nX6eukeuHxXqtCEnuPNwamMpMHnaJsXiqdi6sZrW6fF6CeKqnvUA3WUzrLb2D4BzbGgCc3a7XC8R6Krs2N",
  "key8": "2c1zTDQ1zW8tba7vLV7SsNGYMvuBHGNGZC8cWKmKQ16LkGjhxABTnapdPbANaFV8gWfcPYxDCqB2mp2LA4iefViM",
  "key9": "3EYFZpNx6tXMGN4NG7GSTnpXD22ZW9s7ezCUmoWVJHQje1m8UHFak7anMxUMmqJMGgsRStzRQq6AycwKbcLBea7G",
  "key10": "32QsdFcCuiuAZEMCZjKKScBEzEgmQuHUBVLGGjG8emQR9d3GUVBeHvWP7cdt9QWXUFyXzvPrjwBC7x69sFC9G2mc",
  "key11": "5hufFQkJuGhpe8Uz1nyDD2W2sLYk4V8ZAELabVWT3DoWHcrGSK72aMmTYHqQmnuYK1ViBW5pgRDZrpFLfEMj7Sba",
  "key12": "2pgPVMAGHCdZsexuRBzmRQyAXrwX3aYxaaCRBGSed4VQHyEShNrS6m2ksBAG5sCgwa4tGfmks9G9TR8PrpnPSUXd",
  "key13": "4uJRhZZgZw3wrEQXYvBdjfYyuhEwWo5VyL4tN4jCsXr14dzwPSb1f8Z8V6XPhbKJcksTVfsghpkRs13r4BuxUAzn",
  "key14": "Li2m17Bo2bPWJSobXKLB2kVnCWvvdUVXs2LTuMGb78Akf6sEV63HRGZfw4EHB65DPvhbNR8cUonyPFuSK92pY8u",
  "key15": "34rCeS29DB63cQQhAiZYvYvMHE2f9bu6SxbLevYmxa2L9edB6ghGxVWJHf6hoBKuLmVsD4tGeHgQaMHRNPwig81C",
  "key16": "47838sxjNjj4EFHYw9a22FvBeysAKVuH5nGcQmjhp7piHGQSB5K2t2A6dBDg55M7aJdAW29j26JCS7i4z3Px6E1N",
  "key17": "5CUB3cwELQj5oyCocYPCFRZASFhAbcsR13Udbw5pgzqzZ2fsJYQXHzSQcKKMf5qMKZAoiZGVVGm8VQykcpDS1rVN",
  "key18": "qwaEhreuG6PsPzNyxnzJEAH4jfi6VmbhcCmtX5irvUTHbpMStrZBLJRYoni5BDK2XPL4rgWRccmXNKX8LwD3xyE",
  "key19": "2MhkFYG5NoKgy3B95imE4aNjHNy9dGugZ52isGWBMwhYwFB6KQa2WCP8TvnaKZHEUR8iHHXiTLwNhvXV9uMXrzwv",
  "key20": "4W4jRDwo9jRnLToXhEUcymEamP4nbC18JGM4Qu6GJRbCpJEt3R35LAwCJmgcVLoFYsV7s8hbAunPmgdVMSqHPp1y",
  "key21": "fyNDXaCBoi9EG3FgACSMstKMiHKBg6odVr7vfmcxvfQVgEPtkfWygdGg4XPLnPFiyLKz2f1fy8ypTu1NUAMjSsA",
  "key22": "5kwpABjgwy7xgpFrYgsKLtJArEMM9tgYS1NUbixhC59i9hRVRvs4CBpwPc4nqttAUysE5jyVLmy8SNohdPusCk9r",
  "key23": "3mLJoP8jxHqiguYpmgiXCtKqdcZEiK5264czbz2aBmnSYt9fWELRuC5BWtzGNCdKU4c9VbxjJDb8CnWohyNq1ogR",
  "key24": "3SmUk5JMsng7MzZ4Dw78ob42dDBozAGM4bFFJxJwxWcfVPM2ySQPXK5qxFkmyPF1JvBAss93wfMwMqTzvTbZdeXg",
  "key25": "3HAYbgRsnvnpWfZ8hJEfy7tq9rkCrqcDexu5wz1AEn4usSUxX1tqRmzSe5PNGyVLCsNjQG9oKPkNWEcFKWCS8jXY",
  "key26": "5nNp1zMzEeBdrRf3aZuo798P7EDQe8eSbG6ph3KFuzPnSJwYrZnhV6twNkanymEdvYmsfgc48gdBz2F3fKxM7qcP",
  "key27": "3P8xEGTf7u1QmWjVYDDpKFBpcmLUMWQgYnGFuD4oqNzeYDVWejB2yDduxZ8Eu7EVdaw9PwoDw4bRDbHCJbrCECGN",
  "key28": "43DLo9wnGLefPJi8UwQxcMbRYQPHK1LoeeMZvfDb9sSVeLVg5ZSQKPHRzQwfhegFqvidSkrEoe3ej83Jncqbm1nJ",
  "key29": "BknigWtXU3msAjcK8WnLrdyrJAX4o3MbS68R7nXKJosPrtc3jt7Xc29t1W2c7fmHjc312LBfCsXRhseZ69eNxH1",
  "key30": "4SePHEdFTynpyxFjAfKiy3Qc3Eu5RoVXMqPE8PACFxUEvHpboWrGp6uxenaZHKCM7L7jB9o3hrSXLYViKo6q6i1i",
  "key31": "2kjeVb9bwkow13Jen6X62FAHW4R4MBUShHaFSJUVCkfFoRZePS7AFHzC1wbtD29PHAogC5WkbF4zpS7SX8Gn94sn",
  "key32": "3iYSbF1YCE6ak2j67VLFWNZn31PnQhch6nWXrTiduY8UjwAAPejoz12VRLUZ9hMEKMPyKHWUR5DRHExkTLrjkiK3",
  "key33": "58EhKBDNBiZqqvD8rhRmZNVghLRVULUJerFy6TQbVhEhUrDMkR5xUTnxvSzjQB2EenAk1dtRzphf5tLpAgLi6cTM",
  "key34": "2sx2bt7pHapk4X1M72tmq5QqjZUuvHqjWinVwbnUScZs2BFdASMGdx599Rk2Wg4KPvSvy5LoJGFUjTtooQQTs1e9",
  "key35": "fbyWsDV9hsBdDGRxcjyNy3w8JsN2XFtatmXFKjpoYkob1TfLVCgLfxE96XHcBiecTkDYXv58FFUmXJBrAuNKr36",
  "key36": "4Cx2PEFLmayCaHSZPo5gj95p2nfTfUNq9C4kyhyM15uck422jpboWcjWPaPjsx3BJB8A2xsMbN2pY8PhUQ9YqB6q",
  "key37": "5A9nftzHhAYiZ3zk5gPpai1138oopWW2KsVQgYWZJ6kQebdTW5ZdyswBfwQFZR8FgwcpkJEgxM7PbznBSe3U38kW",
  "key38": "5xoHDLJq7UYNS8MPY6QXvkpLfc437RrGxpfSUCJK6cboe9suFiA3qYfzSXnkpKxELGtYEoWNJKZjDTt5R7BmHeAV",
  "key39": "3wn2FXZYw1t8R7GReM2RxB5wLpaMTzpdi9wrSakTKibCtnTYNAxk6nndbYdo5botiQxpmPrKD2qWsoaaVw3cdskr",
  "key40": "4ruiN4zwC8FKvLkaT5wqExSXoZ1HJKvh33w6GB8Y3P79A6jBNZGaTQRbXp6Z3p8K7MFRdkbxSfFhpxojDdi2kxXS",
  "key41": "4y5E4UJanbk7QTZcDGKVdDYNvPDw9tAwt7hwdx5AuCDnq2cMMqpMXistsZyTLs5pUJHhw9dqcKd5hesgVehudycH",
  "key42": "9sjyGvjeMpCpfz8BBTEhWPcgGYANi8jKBGLDqLs3ECtpcAjymVJkxW8RtzLUFdSgsXy8YGQx3dginVq7jv81L2a",
  "key43": "5q3biL5ZxAJKhCrMuoLBF2VKrhRTTRByrReXcUA8DDUEqVKMacYG6c7t2dyBAfXCcTbaoBc9cV4qLNp9fXHKUJDy",
  "key44": "5tZxMmVePivqdxqvb9GKRo4KGVSh6qzq1F1LbfMLEAaPA7pjpTLjRNhB8oCeG4asbVYSHszWreTcQ6seUgVweFF9",
  "key45": "283dhp6EL6XkwFbNWudoCLaiwnDypqqLkddZ23c3ZjmJ8xBF7ttKQNmffe5sgzNv2LLCDSFUhYyee9Ws25Vi9ePe"
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
