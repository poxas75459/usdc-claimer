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
    "4mrhhxJVa5LHQACxNxLvSubba4gVeJ1cqiNsbV7RB9T2xVEgdz5Br7kBfyvVWKjr6Vwz6hq4jQgU2sGU1YLGgbdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YtfEAGjJWDK8N7Xt8xwjFDZ5njKehXZff4Aoy3kiE6tGkP8xmSmgGH31kSEKjnaT31a9smfTcQG9wCVe8z1z9m5",
  "key1": "2poAFR9C5bJAiJghsH6uXqkBN3s2xg1TummPPTKWL4P5WmfYpXc7HtX6y1VawanTKyCLPgLLezjS7WNL95tNcs64",
  "key2": "4vMUP7p9hXzpd4anTDW5zTTjpyKumujcJaak5hEoUyK1Bekm7pDXNRDFiizZ2gLVs4GLf6a7sFDQdHikFmEDeEvL",
  "key3": "351dmMmNZq7ix1Qwqtayvy2LCL9H698khqNqGEdRaoAsQjnsDv8WAoasRy6o273hdvqwbj2RnoD1kovbPCfYKkAA",
  "key4": "26aYMT7vQpeTpB9kYpCwLpZnABJYDvEhcZ4SpCtDkVxorm4Ac77XPC8nPpsQBVsgN5838aJQ4wLEVRXLAFvHvRFd",
  "key5": "57YDwpQNK791NcaDFSwS2ZGMvdUFUiSRVRbYJoArCShgtq6gpmw7KYiSWGNQEfGUhZc63kqGrJV8b3HiPJcWLNvR",
  "key6": "4B3YBEhfJFZo2aT53BjEy33cbT8x1Lswfi7oUMUdCG6tzhmAJRALYExp7cjZUyV8JvbmirHjxP3T7niSDD3PwN2x",
  "key7": "36GRNvsyKPcRMWwjaAKRS2kgXio7wrshfNpLmWspRPd5goKsQXMTniTCEFiK1TBRyCL7EEw9GQLLqYgSMWCwJCph",
  "key8": "bgMZpVCZVVSbpHnbR19AeZvRa7b3jfSSDF5Vz8gL6GcY9a4eQwd3sCjP17j4qV9tMknYQnAr612rTomoxJe4fE3",
  "key9": "3mtA17ahR2yYWr8eeptbXKmYb3QTj8oN8RwnrWk5yr699A9CXWyH2Qer5xxgNqZ15TVBrJLhYU8UMytwU7xwfTUu",
  "key10": "2bMgcWPFRN8cGChJ8Rkp6Y5kHL3TtZkFpQpePSPgD2LAvLgXs1sMsvZHCgr3FgVPR7g9HFAv6mUUKnpL6c8KMwqX",
  "key11": "3VnDHQ7ec7SzcYgR1P5qLHbozqMP69p16b4S1ykswohA9gJK2fmcqi5ViSWpABaNDnK3q1U7kpNfS5vyDLue5mLg",
  "key12": "522hqdycgpNMwPJcqi76w48ss4TTxjJvLun4vEqHcKfJzY8kHRqAzgpj2wEWQjsRuTUj9qab7b4bUyzjhQiPPsnv",
  "key13": "5Jrk82KGWZRyknprDioTw5bEHP7gVHzmkoPWrXadkRJpxWbNpMT1bKG4Wi2VNxVpYoLjZzMhLoeWN7qHGanpwSKX",
  "key14": "3Xd2d47eFDHnnY5Ps892FcNhhA8mdd8cEBTXUkzCMjcMFNCsZ18nbTdYmhqNqKbXo67Qzo6GJCaaUtREQfJxyYjb",
  "key15": "2w3v9y4v2BoksiTPnHoXvRcAk98vYRsNGbR6eNVR36c7M4R2eKJz18hw7K9WGfRttqSWHf2TGsbE7D6szmjXLMLM",
  "key16": "3sysLiNvtbSELspudhWWVSp2kEdpXacQ7EY8SvAdcoxNV5LHhzLeqGfZfwHYUViQuaFz4sdwWEHjgUJxk3KreMup",
  "key17": "2hyVpYahf5Y6VYGjtsujY7veuDLTV83UmQjK8x1y83zX3bGTWnwDNnLkKgrMpwmAkRjGhfX6qyse51hDGCha7Wbw",
  "key18": "3tse9CdeBjL1T62hopMTqVhYVGataKisdScx4snrcgJpX5C2D5mMWpfMxoKBYkxWAUam4MadqjkKvv2amnjbsYeZ",
  "key19": "65TdgFcWpmf93rmfCesu1cHUCfGXbxtyt5BtJoWoEqQ7qBjCYLfQHeQUd59rfhp6mDNGZe93bVbMHEy5SrLfqRmE",
  "key20": "5TKahZ13dkKbdpgEbEbF6haRDtFx4S8nXQXoqfTwizNFDwDDg2EHUCdWr4tyTfLhDTJxu9DjE8jg6FhxaW3gbhsN",
  "key21": "TKHDwgXNGKp2zFWLi96vYYuiP4YSUcXZwZJ7kyDbnTkmSkmsRMQQy24rdFWwJk8FYQFbUF5aS3o88TUgi4iz6CT",
  "key22": "4dGNF2S9NqEtqgZA8hZ1aLJxbKSsicAnqeDKJMrt3dT4argcNfTU3fFx6hK9QNLvRmT1kpaZNavjDtjzuGcQLdJX",
  "key23": "CcRSeh3DiLH8SV952PnxkC8K2VvaFtPYgGRB5XYLVnxmuFfwbDhwSoLkTP2ptZm3FjT87eTmy1PKhgFKKf2jD6w",
  "key24": "mopVkbsZcPsiT8VUvq68Lj6kQMNTrj5r3QPsBzaM2bnhpYkNeY71DHXV8rsRgsA52L8STrrzE5ghxta3qQBUrUm",
  "key25": "3GUVcC4csNzh3PaLXMVDtcfvfKdjyPNVJS9NCU8gHqoqCwdjoYX7EHPuef98BikhKGEzXdvFViR1byKVKMuUnG8C",
  "key26": "4WEyA5KyF6s3dL5XPTSotCSbgwmNHWr1G1baRVfMX9HGzVuShSBwH8mFo4ibomC6e8bhtZ2H9Cq1kXiPNWRMYbJh",
  "key27": "3SXHRVnJzoXEM6STtAxPSujDfwoFbzZNhWVVWupah9vYyQBscm1rgRTv6V1roaoKPwC7C4GMjyJno5GbwcEjRNfk",
  "key28": "t7nDzCfAMhpEjm3ADnQEc8VRVTWUFaPGWVA9paRhf5HRw2rspxVE5GSfFeEiAGe22hDvNxokWnxi4Pos6tFLhtN",
  "key29": "4mwHQwD7U5CgL6vaPEAzdNxUPZRMi2QDBHWj3vbm9YvVsqK8dsh6e5FggkmteXU4LELAnpWSZ26b55ETqEcGg21k",
  "key30": "423UM1QVh2chkfJx5TKJDUXoLPjRdps6o1vkDPY8tChFL143oRC8nP3Pc5z78PsxJ6BS3FxsNNQ45wWxwwRvfipL",
  "key31": "4J8yNUi1Cah4zBhmuPEm2zTUtuWjJkvToBcQA8awkKHMaqnncK2dHyzRVZ2r9wgB37NaGCnzUoxKxcWsuRtSb9J8",
  "key32": "42rN96eWpGq2CRdCipuLSHtAdzjdePbkAy91KYiawJXYM5pxeJqDRo32t8eRdYAW8W9CnipY2AKNurbcdUrrCRRR",
  "key33": "63QhUyT1ZPtzN4ZXA1KFPenrhhd2humHGGFEB33U8VzR7iBRSm8FqF8WQaUktNWcE6i1GyFebpH4mUcKiQXgURtU",
  "key34": "4ScbNpzyRzPi6MFTRKVPCS5SxwajiSa5erMZLM4WmMY2ckT5k26uPBjLzzWcJVvU8obVg3f2jnwEggrFEJvh2zgK",
  "key35": "4nBtLySnnWmxhpzPcybEd2Y6Gs2D1NZscQwYprkih9KjAmUUZnk6QG1EhfzTk86F6eS9BzxMkLwG4LFkunPXRgHn",
  "key36": "4io3KdWTopkPYgQXj291zUNdtJNn5nUMCX5QNG4HVB4G37cfQGhUk1BpQNHnwgG57Z3irhsP2mZR3smwoeZVJcvB"
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
