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
    "y2atnLpkkXR4mp7VpYRbCjr4ta3mEoKenmr7UBTm7hupWxBzVrFxSwja7WytTkfeEoDped6YjtQ4cycjdFnYgM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29zQGAowEymZ997aYzKfT7xkYunkWrVBWkACyQgQ5FfmgT7JDVPzAJZjm7JVVSmiDbtoQov9cXouQU2hmLRjbwNS",
  "key1": "23yHRLi8f6EsSPv3KNMQ7rYp7HZEJ7u6NuKtFvpKztC8LMkPTPJesQbqC7TkZCf68nbBVeMPaZYsPXg1K7uaLKTL",
  "key2": "282ur45PT3SQiP4xWzvc2kb3PjJBTkFWctGt5EQNctZ9gpvuyC55ng7nX9JwyZVtXiDAMcgTn7Gshj6uuFzHFmoq",
  "key3": "2XwGVUZAJX3WKURQMMuk7AosynU91fgV1R9CtHKDZpuZJo9e88fZwa6455n38kPq4t1XECQyg13BkBWVcRrUmkD1",
  "key4": "2zBseQUq77XikLiTgoEpcPNeKVNxnhbhiMy2JtmykYj21jkeDwHscXhYbKi6b4LekJnBSDGYPtpqMZrqJgiAoPsQ",
  "key5": "2rG1xBadMahaZXz4Xaf4HWdVPnkppF3jWPi3Vi3GW96CQSAi7ibuZrpgxowXLam862gX6zFaVVYHWHw4N87nhPW1",
  "key6": "3Ag3QXDio8S1wcCr5i38aiW24AYs3H5sKpXnCXNZLd8uwyrQEwKx6oXbD3erdd8v6eRuVM7VuiSg3ppEHMHVg4nq",
  "key7": "59L1UCgYtz95brmBJ33pm791oYDrnx4KNwtToWZL91urk68PZsZpX5A56UL25sNrtoD6CUSMxT16kAA2W1Zj6BuA",
  "key8": "3sV9uYNG8w5abtcN1of5FMV9Pr1ScmkNrU2kYGKSjZCSysAEaKimm7AVVr9EzmuZQg86XDrFwQkNt7YYJdhyyjy5",
  "key9": "mR2YwgHT2tHDE46YmDEdNDCGcTBUXCbZ1M8qoB4rzK6rUj9DQ5pjA63Ss5qF6fm1cykaixwctZFNkNEUBsBVQpV",
  "key10": "5MpVfpyZiB5UaS2GXvHaYC7i2M3t8NQCTKq9noGNEVupN7xWjcxYovDBEBQ5gPv8YULM9LYAyrLXXbBzqeR2ExLS",
  "key11": "1yphBgvxzkLPNYs2p1QK4R4CcN4m2eagaNW9SYkmBYZkYDkUtcHbSXxZi3h96VzjVxsrCistHPWTDwpWNwKa2em",
  "key12": "4mdRpSeK4TsDBY1MPjzFtdr95tLtPAiHfjfy5YwXpv9ZhPEZsfNnThNWfuLP86yV5wmw1RmnnDMy3ZMoqztWEnPq",
  "key13": "2ggVpm26jKXPbscYGFJvW39CCzfQoKSChRDJ9vFQHpiCFR9F8HnpKAV1psJ23rEy4aXA9VT12vRDyW6RsoX5SUT2",
  "key14": "55GgHEqp7kn7dcJzcanTFUZmEnWciU5CPUN37LigP31314Gd8WWjbum7oCaSyArTPN6PZJRL3ygFJooHp4NBLupw",
  "key15": "5WSyFcuAT5967bDVmu9zucxZYCwXRByzAn8pEiH4Z6HRmNMSqS91MGzwP7dg4mDAhmpSyGuve31GoRSGsiciEvYQ",
  "key16": "4rQwufycxPCJMtdz7q5hY2jRQotpu1ubeyYPyrg97qKRV8t37yy3qPxZJrRjWFcCiNBj7LFgz1eFDFdE6VUYTTwg",
  "key17": "5NxqvqVma1esKmo1vwp3UY7G9CL1RA8uPhSFR6CXzuXDSRt4RZGTCxzH7hZk3Smyu1QTRcBZSCWfGwTjeWMgbRQM",
  "key18": "YjECWmv9aumd4GuqDSo2KwW2v5rzspArnig8gGrnmLDBqPM56KcRPPGLQtPBNSLiDJ6E9qZHCVx2HbwcVuhMkRd",
  "key19": "5NgAgY9nfHN6ptwUytyHSZqR7ziQ71npcsrjK7o49GJWrTi13A3ppJPrKAWqqpEqkU3EcsRKjTfBRzKLz5rDxeEm",
  "key20": "Z1cYfrNCVUKCVhHDSu8PdX7cGEycvaoKjbxDGhVRdSBfSf4FD5P1xmaC77bhyUfGUHwGcVRbk8QCg2X6Mn7DLjW",
  "key21": "5VvYAbayHo2nNPFJzCV9RTNxGgpyM1pHr3YqSnhjMVQQxzQsLxXvz8BBx5SfRuJBZCm72Z7e6DRTqtFyrQ5SpxYK",
  "key22": "6wadhHaCn9d6Xb7XXuLa9L3hjrQxBU9a93Fx8CgKfqa9YPFkAJmLKeiHUmAQBPak9d7eVsN6Hk6inH412gNmhAv",
  "key23": "uZG7fi2YTUzG9iwZhukRsNaLpNWWxjFQjnYCFqryys46Wi3ZcXm3nn6rWUVuiiqkMdZypksgfLNW7d5sX2yPso3",
  "key24": "3r6doFX4jWdTvaoctRYC8RsJVkuaRCZiZmtLDD6o1HoYif91ZdYwX23mds6CpgvCfo9RCJPxHeXftfZLtGXWGxpH",
  "key25": "4dyWbUWRntSA4PnWNG85CgGcLgFL3CnXRo4WoMx9SVR6HQzL4mxKvM7m2fUZP5t5iKaqVVtzWanm7udqcD1AgGc1",
  "key26": "2UmhKKpKN2yTqHurmiUuXAyxPpEEdFmBD8Y86TzbVvbKvPeZPquS43SsbCm5bodhowRbV218vtucDpC1zzRzq8sX",
  "key27": "3f9KtZQJBb8P1S2vTYUcfz9wQAgBFzRHfktevcegHD9DupV4GKuh7zoyyqhaHT56ZUnz5BKB9xzfH2SHzXMAmime",
  "key28": "3bQsJ8nqV6KhpNfLXhRAeCPouXyZaFEP99iD7HHVKC4Pys2wmwmJVCqzswKTJQw5g8qrLyViVLNVtDX5T91Fb6qW",
  "key29": "5kbZfmfcpysFRmGTDrZZZRrA35QQMyo4dcX6g2wUkqsjshPRRWmXCQG9PbZM1c4NNCmwNoK2L9uY8P29Nqbj1seA",
  "key30": "4kMxSgZa9gci6tfs6SJqaXQMU9J7umUkDr4eyK4zy1XmuwRRyh4yJRU7vC7XouBLB54BUzMcTohdqiCz9Tpu3QAU",
  "key31": "2xXNEcF2197AimcE5JssQtfvAy8FGWSxicvHR4orp9kirAPGe46xuTG8MKCjRWcX1KuAM4P5ntTek7G3rpTx3ktg",
  "key32": "c68xxEasXFkEvL7D5jLkvi9DCRYMbVSB9PnMGCczMjnkWmDXteeL46AtKhaXERfkSDYEWRHCEepfM7HwU8xXjfQ",
  "key33": "2zFkSdEYjA1J6SePZQ29Se7jbZb5eS93batxa9T7V65Q4UgKaHtUpXwX8qinyWcrSGhHa3fZzQxAMmJnETXQEgXp",
  "key34": "UXvpFnrWTaoY4aQLfLw7da4iY8Jk4hY4fsNgtHg1p8sSXDnN4oQ5ixAgSNK2fdvWiwga7gi3ZTTT9iknAL4wsE9",
  "key35": "3ZqyNkGXCDUSUX49WuR78dCk46z9Qct5StfEuS62wSue73VXroJces7apRUS1Rg5pvLa5ZBat3HxW9HH4JLncbZy",
  "key36": "55D6qSzkN1TGNZHXo4n487iQhbLc3JEiCabZbhV7UjLSGnZF6jmzj48RPqnB1eCAUX7sGLXmhAWy3YAtcBA6dmet",
  "key37": "59jBCLJnXsSray8Q6a7sxiorBRFroe13sdBPZ5mKdCsv35nVVTLcDMnzRkTkSfUt7z2MNqSTou4ZskBQu43DLWgp",
  "key38": "5UXrtxoyYSr2M219yqBdAGmgw2N6U87Bjg9nee5HPXHudhvXqDs4DX1TqUZnShe8Pa53Lmsh88TnZjh6TZjnECfp",
  "key39": "3JdtyBRQaBfY9hSm5XH9x8VtP1j1ViTPFRqzVLRwUWL8PLx58KgGGJV7EEM7vyosMM4x2WzDhUbchMYUPiGKuAcY",
  "key40": "EQLtzohyqnGTW9ji3bpufR6QuSfmTBfVuCioAScdAG6mD1U9tzpGrK4XQY8kq3sCRFtNHc3dF9yeNviFJYbhY94",
  "key41": "3exMCG5P9mmaAcLifL9i1ReeZf2ZGqSXmiU5Ef9rg38Uk79vY3TRX7D9uSKyU1NoV3nVyLpaPgUENNj1juwotRP8",
  "key42": "5AdNCdYRJQef6fbCzUwGWHAv7J112ZCzmtWkNXbVxTvDypCF2JMWH2LbAtT2dW9566hU27Lup9QioYUSa9ap646y",
  "key43": "2TYDukKhMepXH2H295afSmELcjtYNk7eJXNpvXaAbAwUL8368jUpxomg3F3U2ayUKNucQ8FeUNjYuAbY6imXmmL",
  "key44": "54ixAFmyY6mxcjRowZtv4GcAgW6FD4weXoToC8abKjm4t6dddqADyop3U2fbCtyiALTbRaLCZqCKWEY6oJcGYrNw",
  "key45": "397vDwBetLxTVLnsD2CaoVh51qMgKZGQY6GNv98ctSjPjw9cLhi6FXeJ62Gx9RbU4LvKmPoVXfmxhKmk4CsMH8Kn",
  "key46": "UmpwGGyqUVJijNQqejTynWkXiXgEWiCiZPFPHJyKytu5J5MpqmA3fiDZhZA2682meKH6YWTruS7Y9gJW4Utj3vF",
  "key47": "N4PFBFWUdwC6gK53h6wB5M16kj8HG9BiaRF8X7st9JGggMHs4A7TDpc6D9pU3NCwxKNwAS8RbPGgrJZWuFP2Tkv",
  "key48": "5z1nsjVbGch9L1xK7Eq6DJous6d7Knsa7vKk55n3zY14kHEREbpAx1z7KfZjgJyBpK2jMqKknQo9PmVpTsiMcRa3"
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
