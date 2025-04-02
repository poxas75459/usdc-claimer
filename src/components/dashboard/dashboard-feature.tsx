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
    "3MawRxLZZ3Ta729tiL3HAiXAZjYGkSg1UUJxVY28N5MspzZtPGm596z8fRphW6XGq2X19FksRXyrp2wS4yb8Fudt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZHcHVM2KDUAZAkcwgvpqiwRcd94p2n4eeHiFGYeXaJfcRqk9PnJGMwKQQ7kHGvtZaJPL8S2PchWGS6TzcL5sYHJ",
  "key1": "A3PnohVS6yJmuhnkwqRXegsdxMDyD6pUuwki2ssvUFCiah6DnY4m9TLSDhqP25s5Wf9zzeupoPAFKbYLpaedBTP",
  "key2": "5R5zq9oVfaFwc2k8rsGaeyqZmQs8aXjCvJhxKX4BtKKUbccsQFcnVsVPVJYsRnKqvtLaE9iuj5DsApuzpUgCwucA",
  "key3": "YCgZ9v2r4x7E4esE2AAwM43hAY6s3yLYPxJw19XvKH2ZBXP2afymNyUKMqD7cr581yCZvYDQ2j7xVRsLdnTbpaK",
  "key4": "24jyewUjRphCNkLueqhWbDhSRHw1sFMGQ5M46edGVuFW7XUKpmh3t2zCBCPc4tvPrstpLm1c732J3BFugFxjEU1i",
  "key5": "5iTsKdQLrYrj3cefZSyhxfYpVfNV383YNA7Axa9aaidPmhFExfPioGinowNJxU2NtWgL5svvahKpKX4HVf972vKL",
  "key6": "3CYbA9qPb4vHtXcn64PzfKmfHY9KCopgAcH3cKeTNpV6UxTxx6N8giSoFZd3S94FcepsHDTbAD9Y2HEVhxbc5JXc",
  "key7": "3DypgKgJKpiqqcJKvxwJoQz4ku55M1LWbcbEBoiFHjz4a3bTD7h2JQv3i5qyBdk3egWGNxPHtNsyP6eUtUXtNsQJ",
  "key8": "3nvh8ePSw8J2RTS89ZF2cYpgWhF3VoxfLAuse8jNukSNJvFnkpD7LWqJtZqUxbGMbDNyF2wPALLKgZhdL2Un9sm7",
  "key9": "5g9iBudCGW6vgYS7akiXPmspyQjtR9tg5Ru7DYLXHV9ksMc8Cwzkisx6dEXtmB9n42QE7yg38gtWdzZNKcKof84R",
  "key10": "3FG2TKzs9SauBpcRYDS5pQAHeBjBVMyLDSuFfFmd2Wo6RzybjB2tUWHNgGYC4KMPExbTQMKStRWXV6aLTpyynzpk",
  "key11": "4qJDrbtqB5pvrSHvD3rxoYzgiXveSnVRE14X7Qt6dfEVgnSPjqRCQvmJDLsEneiXvd7rNxUv2QrCLJLNA31opUSg",
  "key12": "bReomg1P3YrUqa3kdFeRvjBiab8gucoWjeT5AuMGfZBSdmodwkBy3N9aJGncxLKZ8sFuiS1wKEZKXWHntoPXC23",
  "key13": "4KqGPAgWCjVfu3NJ5ke4cfWHkczurdCJGYSKH914MZDgZBfDT8g2xmuBAL5vBvWMqGC9TH7NbrAHN87PJFSrSXhU",
  "key14": "5LJGTSapG8j2FmfmmshU9kzRcgfV8NpQ4YXTCkvJ3n1DBmLeVqdFKDpDp7v3KybrGyi9FLYe9grhhne7urZZhuVM",
  "key15": "QXqUjtctc63TwLLjWmA5VkpSAU4o6FYhDgfVZMzKJD7iA3b2RKcws73aG5xSxbkjUKb8NGGcn8HSJoBSmwyJKvr",
  "key16": "3Mi3dBxs9pJ4dsQmJUc9XPdrLfRU69YdLNZyHYhKHGKn6rXBhso9SnxmLgjUPrUTFQeiaMaFGtxuq5qecAPSPDLn",
  "key17": "45V6nhdvLp1588fjmdtqMnj9d2fKWcHxcvaxRYXpWfocFURExJeG9yTJzdhMcLYgt1RAk91SMAfamHHMGZMNeG8f",
  "key18": "3noEDsCvLZXeB3jDn7kFMFG9tLiqYV7LNDfWJGesEsWpPJoAkCbAkTGub1XgC82hapVnbEGeChfuFzGxNE8GkYKL",
  "key19": "JLo77Z9YgK3QGeXYSi1UAt6mjDEqdDVKeuM4VLo9QYiBimKgz3LYce6xA2scARU5xb6Thrbr7oRtCVtgNib8b3J",
  "key20": "DofELuKbe7eF1cSYaBm46NP7AQgpzkRpbRBFnCAV7QxnwUKtgdMufu23AeshjDR6LZmmFivKVz9HqCGZM7wzwji",
  "key21": "2n9wcwTXREZr3GWFyUraJyttb99FDqytQGTSkBNNijhUWj23evLtXRmkGj78LUds7Ut61rCJ6N8kbfJ1Uh2jDw4P",
  "key22": "3DuagGEFUNG967f8UVF3w32gZHoVUyrGZHiq1zZG4PLSPRdgZbtnmNSfAiJfUa7HRoV3KcCieXogDwo959KdgFdM",
  "key23": "3F8X55toppdisCpEozPKBKVqyaMWscqLNu8tj8e6Rq9nFR7psa34qHmuNrfn4aQokgF4dVoHnpC4bKv4XUK7zVAe",
  "key24": "3uSS3kSE8JMLcPSp1rsWXJtbWeBYVoNBsQbE26z9KKN9y5vXw34PWXvi4oH2vWQrcD9s9vpDNPuqnD7HjvpLtFMS",
  "key25": "3ZN62dm2aXM5BKKbiqT1Sj9mF6nVYB2zrs1bfbG2cyQS8pqSuvAUwj7sWrzkANPVpzHNfoXA1RtrjzMJS5nxNiEp",
  "key26": "4MMzVefkVsngyqg7QrNDeCcWxKmvgN3M7kBtQVQtRKcnQGkFq2jjHNg3LM1S5nJHdbNmQEE2MN7YtEsJiEGqngCP",
  "key27": "5Y3ifHimndhCyjAS16NfFLYEaAUt2eaWhPqNFeJS5FbdvxxukoQrTa692g8b3f2cwQL7jgBPpX2hYtSxpcY3gqSe",
  "key28": "5m7qdTkvs1gqqVFa3QX9D3L9r98R8FNhL3ny46pTk8zGQ1yytVeAUgEb6oL5gjSiAmFCh1eX5rrwLaExVxmdYoFU",
  "key29": "d92bbRPTVC2SK1cp1RRJVFVK8PoEsSgMdrqQxjEG95qVaVE21ZybxcUxSeTbZPSUQCyqGZicdCgkgnKS7JuMTRX",
  "key30": "46sqSPEfmJTad8srTK5jyAEuUdm2nLavxba98WsCFE1KCvaNeEiu9fCB56282mekeoC2Zs9CL1KepJzEQNqjVDm1",
  "key31": "2vfuR6XGHfJ6VfXqfcEmEX5gVYbrNbrKeZCL5xeVUKttwfDxzrZZAqfhmhk2e15tN7hKdddWRRCbERrJEYFTmjkW",
  "key32": "45NKquBNHv8zhELnWqKhZBYSU4inbrYybeQHFveTrJptK6wAkj6M6UJPxK2PAFvyHkPVG21eUH5gaE1PgnRkpwfy",
  "key33": "4KbT8ssqTkSPY3JHYvWojfPjbQPsCKxc6nJk64CpVjfjvKAp7a2G97K2qGpKPFuAKvac1oC5ARvk2DLhj6hPz4vh",
  "key34": "2LX5xc4B3zUZZapt6PgiRbb6Vu3oM4cXGutG4EkfZ1DyEuFs47n47kX9Vi6faLfZEQhRpgKr4mnaT791wf78ynxv",
  "key35": "65DXRjpLfB61vxPrnGQJ1aCMCB26WTW4jzLJ2YSoWBUC8AEACTp2mAfEttLwzNyUzzgPkLWRLWSq3xyaiGPtUcrX",
  "key36": "3C2e6J5yGfE1RoTChHEsTL1jxZWyneEGaHWtLt32Fo6z1CSL5brVGyh3TP1zZjfqyicJTToKnTWPNhrSqVEnDWKh",
  "key37": "57L4o1rCds38GM1mB8pmPFr59R2XFTCPLT8a3AKiCncHuJo8kNTjNhfpNqRPe8cNsvYL6kGjwzCn9f1ke9GxWVJV",
  "key38": "2weAXJNjKqK82J4VgfFz47uVzPT8aZLk2ec9PLk4ajJQmAfMSJspPsoYUVtDj4LyGZrB8zBBrCvtHQnp8BryzEKF",
  "key39": "59SEA5f7DGffXFrvu6pf82XcGGsySC3MuTd3GVVv7X7rPzNwbXAEmE5VNjwowucwSoKtCrHNwEt9gaD1VbAQG1Aj",
  "key40": "3g34Q4ncfbENkvKWMrzirke3TsYcMPR6C5c8q8zZebNGAyQWX2xeyeXdrS96TWo98JGDkvGGsPaKJf5kxk7FyxCV",
  "key41": "3tRbNSHM6Si1D7RprSkJRQCYkEh4aASKnHLBACFF3DUDE7awnC63fdNykAcVoHbt38JLff8puw2hFHW6KWsD64Gc",
  "key42": "5oMtqLPqrKBuWm1J621t7kRQputSr8ttNgFHKhkwX1XgSBnCjDDahrfrBGXcpsdYYSu4erL8PjtBHJjQTNfcCzG2",
  "key43": "zGUSRYkS5Q9WfybAL16LAUHxEhZ3AbDohHQt92M9ce4125fHo7gBeRTyq9tF3A57PzF2VwpmEZWcVXxp3pjrTH8",
  "key44": "3TR8xjptsi1eYyD6fyo4oHC8TnYRfL7rcPssmuDnMmwL6RjHYkoKw1dABR1WKTd9xZoqpRWwefG2bLw6GS2zysQn",
  "key45": "5jto53dK2iz3zRzwgzarUB8Kzg2xZ3eTDKkf1puSnWKYuFMSE5xR9t4jFAmK6AhfuJycvcP3kUHtc44abNzRrDT5",
  "key46": "5d41Bn5QA5P8YK2fCRB5r3ZT6gpeH2JG117eXLJRvwUZy7QJKmMaCa9MpTLT5Mvpw84g5UhhppWzMuksnnDoj4Yo"
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
