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
    "iizttUQ8nL9LzKegAopKP31pBnpPJDdzQGgB36svriKetaXcgQ9kM7nnu6jniHCx5yMmywQw6edUxMsNETyoyTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QZLvnpstMsNsXXwkRfNh43N11mthqpkkHNtXQPmqxrZ3CfRgNwxoXGzR3STTw4GW1oid54RRcRwwHnBS4wUEFZ7",
  "key1": "3AAcZKdk3kAY8XVLvUh3fQ4VuYrBRvHzLj5W8Uu2UJYkUsq9MFbayr7r3Vm8any7rgNq9o9JQL4AkFpcXwWH5dvq",
  "key2": "26rGwoRF1cv4wvCawMaLBxSGWrzuAUQBJoTWvFGQz8sUbN1yhpnGSfa9erfRqCgpDeyHbemQBBXZBZuPnfqNrZrZ",
  "key3": "2xXX4p1TQnuG9xqPvKhhbm51S9phu8W5r6dg3v5n9mr7MFkFdpnePRLxQDdLhVeWVoqEeNUTQSHuJ7a1LmZcaoF",
  "key4": "3Xu3Rtw45QfMEJKzMPAMcd1Kyiu7deGnn1Lg2YteeMMnq2mp2Rur4oPVpGQTAiWLsCH6ghDx1r4Kc8LpzAjsSxE",
  "key5": "3sxLgpP6fPxYyTMLVUwFQn87pziZw8CmYskaCYmBom6TNifJyJrtWDweMd4kE6SwxtESeV86svCVGwFWA2phsXho",
  "key6": "3JkXU3Leqms1J1qQijK5NiUfTgmBvg2W9ujsiNo89L9HJ72CtirzNCQWixWKeijnG8iBe5hoXbiF9bFGzjkB8JAX",
  "key7": "27VmDkUu6HETHqvabJdcDQz4MDmqRu7KfU4Tq3X2JDf5tLLFpoDCUGx2YHgdacTGKAwNpw5VGbL2PGrzFrKosmZE",
  "key8": "5A8oXumzicfNxTWgJYB3taQrG1foJ9Tjofa4izGooGKSyGn2daYWrXEJf2tqHXu69o5o2ktYLWnfDYjwu6Vq3aJv",
  "key9": "2PT5D7C2LrjrUJKxgPUrLTK6TCHW8qS53Rs7jRw3KRLAhgcFBFNM9YQW7XBogzz1KGs77Zd1aVRny3bxHMaKG9yr",
  "key10": "3UozjourngNJtmkZvnr6i8zW3dYn6VK9PMh5hqZ4cyECPH2kRxdsnA8fxjsxjyoQv3rLAitmkGEXpkv9t1s8DEXE",
  "key11": "2mEvz9Yr5osbP6xCnRbazFDhXygTEzA8idnCfFcRNWcCedRwiNvtjGjLRWqbqUMDj99eusVriX1PLKj12otMS5jK",
  "key12": "2K7hJm2LRoQLCW4jXbGyoo1vMzGUNoP1a1LPv21y79JuVX9wvCu5LZE5wSXpJBPcTjHUY3UhNfZFhfxx4q44KDy5",
  "key13": "32WH9PAX58toumWtL5voqfq8NHEGkXtmS7R1F87FXBK495FwtedSwRtEUnovKkVi3vba28Eqig9Z6ozyRSs3uikD",
  "key14": "wSWoEXQx9syEmh4mg2z8Yy535wmoqTyzjJNdj5Z4n2y6iNmL98FcA9gyBWj9q7m1HSp2NsWptYS9zuKxHqgQza1",
  "key15": "4rx9XtrgVrk6Z99VFgiboNsjwv7zRWbGy35JU7EoFrW722QbVpHye3nvNU1oA4C73ktqUrFazMnk8x213QSL67Uu",
  "key16": "4SfP85mUBaz5c1RrhZytBXyFKyoU1zxg3vW9jWHEa612Cg9di13ET6gGf1rShHHNx35kv5dWhUc2848tTcDZ9Q5s",
  "key17": "niHuCDT9nsYycXjhbrpeCytp2yUbNRmUZe2jnp1gAvi7obB8B4ggdgg6TxxKgtGqRqzJb93ZEEFUuuRgVTiy8o4",
  "key18": "3BxSf3GK8S1rvWQ9jQUERyWxF33Jp61WNEnUq2RcivkCqhtPZeSJribtARmGHrvaPK92znY3xR9K5iUEhe8j19wb",
  "key19": "rnaUXDGoeZSc2oszXBRfNNmSkn4FY6VNUnMUmNHFFc4rpqUMnF4ueCPUPqBz47H2n1U8pgdFXDoyRSBhWaB9Fnv",
  "key20": "3mKkoAN7eakYc2EokhFSYuW81ZwshniWvrsvWX5NknjHMTRrtZseL2mriZyAt5zSWmmhTCnS3J2RMRbMbexU6rLw",
  "key21": "2Lbz54BVejw9vwxjauNCER4zbgZ82EctkRqDUB3dWaLwDUuoNfUT1QZHN9mCM43xzuWnHLGy534U4q7RgVA7ce4y",
  "key22": "RTEpzd89aPAZ9H9zi2ZnWQPhfUgHdqe4yZwmBy6V8Sm7X9hCrpBT662Z36W1PCjN6mabx4kTXZknX8YgdE8pCVk",
  "key23": "jKT6kjbrc7P1wnSqy66LnTXNJUSGbf4wRSPi6DF1PQd6aKCQs4RENaNWCeE3Z1NuMzXymCTjH93k47Q2tPD7wpV",
  "key24": "4gQZ1CRZR9UaMjandshtmK3dPguBXtTM7QNEH1S87f9Hk16bbE2VB8mAHv9nUW8UMsBT6oHDBGgnMPTuk27fAwY1",
  "key25": "fpu5zs1tkdhkiFqQh7d3j1yeFQmfzsZAeQ2evtb1nuCHA6A8c78J3LmeMF4BsqzMh1mdaNQqzNNm8sztwVnSxEF",
  "key26": "7nBsns4KFUswXDjDWZisZkgZvYydauF7kWHdYFUtHvLsBJdXdNvn7jfkVSLT23pf3SA3mAATxfct5a8x2vQPftx",
  "key27": "5aJJW4qKw7SJdv9pUgcNLJR1NDowd5yKRRAw5Ak9wFrFrzSAJtjvGsc55mKMYZgR4tq36pUwGjykxvPkcc3v9BsK",
  "key28": "2CV4rRPQwFrUUjyRKrM5wm6KJK66u5qqANrSrkbDLaS4tVohkExz4JYCvfythbaCiaRYZmrF8shJziTd4PK2YCPv",
  "key29": "4g26TtcNvL8r72ULtb1XTugm9PE9R12BPs9kNe1nmJ2uWZ2aienrqJmbd6DmUP7UF8JAcmpDFHLbqnv9KE4RkKrW",
  "key30": "3LQiNh5heyfrBXRuSPjPxfoW1kEVvdMfh7WMo2sFmr187btqvw1GMKgiyTCvwZTNhSycQUFF8ySjSxdkQN7g1tNf",
  "key31": "3QrmVKMNHJYGY6jX9ef83hCoU6x6fb3eeYRoS3o9n5iqQA52FRdzv9djw4rAEsQYa7Xk9WQkTKZ4Vu7g2KJNdTNn",
  "key32": "3xfYKKhBvtL4GeWQvYL48XDHzVD8bYkpVwZFLfEaF132GySNBvhQ8iUjwEvivNaZgJhfse6xgQR1NFVTEwf1PPM9",
  "key33": "4YQ4exH9SzWRru5zauyMzLyxz8ANNr1pypsvncStRpmYzVZ1pbP9ST1RQnCjpBF1yTd7PbD6rBQnr5jHAteMAeaa",
  "key34": "5VM8mUVHWeznTfv6HHo1WApAhH8eBgQtHrUAPPfzpCE4zm7YC9kQucvMPntiQ1xEtTqMSotry2fWuoub8Poh1anU",
  "key35": "61EKxQ61qzYWcdn5LUCyYtBzkex6QNMRUGE9oGByKFUM3TcGJkChcy5YWvv6jDLmWyh8BFAQGmWpQQQ8QjPZiZd3",
  "key36": "Tvym3YuUSRP7T5S8LV8VsAYEMBUUXptaHy9NQPvpiXfaan6GDbYso6QENwpXFs8Pnd9Q2nLLErGqqDvB1dyGGsC",
  "key37": "1Uh6SWWiLdk11Nk6fBeV5ctDPt5KDTYvbSCytdRPZhNGn1hPvk6o7pphuaDbM7bRUR3yNFbvtR3e5KPck7FtGMF",
  "key38": "3Ky5DrpV1q99NFdRVQ7yNve2CNj7yNJsaGHRd7VWtyM88PwcpytWF3KqX25HgipFLeifkmTXkv3SJu8dvawWehnS"
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
