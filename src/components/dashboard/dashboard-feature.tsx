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
    "2WqaFp8aHFLsBWuZvp36PEnRG16FGU1LgJvzgKW4azi9NjPMZLbFyHLCuZ8YsknxFgZqDfJaLtJnn5AnGYQjQMk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59TbwWXXqSUdJw6NVkF7a8nhpKmVzUJkdRnbViy9e7rnmkHJi8Hto5ZeqBgMGA9H5TuTUqUR1HioWGd5fHkAXGVD",
  "key1": "2vGWfwC9aebPQPDBCQo7GzWvr5Xr6Yy9pomw2zU1aJByG71ECpmd3U3iiCkPiij3YbuPwmToCNgGc21Vgy74eXvR",
  "key2": "2w437gwFmfj2vomnq1HRc8PJnpcpvcHZdKNDKrw7yCmEsGWhXjD8tLDnRpdWvxmEk6pLgXrN1rJzLHR4V6w5qjeo",
  "key3": "4Dq5iUhVxvAFeH65JmY27YGKSF4GXZdCgnxp6PSiQaBTVjPrF3CiVjhZBC71eu7euSYCtnNtTnwELshqWpNBKkpZ",
  "key4": "36CdfCkGWaXF7Ydw7CJWwjsrZdPVoXVhRmdbikxZdx7D8Tw1akey9tYJy5YP6fzUejbr2GhW6yqjv4dfUXYymQzu",
  "key5": "m1CnR4FbRUuuCua2AXYncRe42e5TskNA4TQSVJymSMpCbLCTesxxmHWsLmZq2BwNcCmiLso5Hy8x8VN2zuGx1Ca",
  "key6": "564zX6ruRSz4jacbvzDXXeXugos19sCnb2k861z3v9Nipn6nDDMahQN1jvnzGn74fVYXSSRCPgWNvyznb2nLsfzD",
  "key7": "3et9eVKp6eAm9S8qApk8EgMS6t3dkVHou3anQziMdmAXueWVaWfejexu3m9vLwNpdLo2yEWhUfBmB64PDNLdHN1L",
  "key8": "24ZmdBY6PWZQTbxyYqrwkvdy6FC6Kz6SW3eMybKyoJD1WkTxbgsSk1iTjUiKbpYY5F2MAazLFJDQwHrpcjZTWFmz",
  "key9": "5VUviLh5uRcxaS5va7d1UowpL4yp1AxZvwwJjBXYeNRLdWYFaiEjnKijXzcyk8KmBytYp7i61a2HLMKpC1BA7GDt",
  "key10": "49eaoUfrt4NQ3oyPHHY2YTQB4CqUEGUjf82d67EU2KZ3PNLBcfaiBvgno73eQoPf6uScpmA3eVSEkjxuiZj7j8VP",
  "key11": "wHCXg3Xet8q6fNPQqpXd8FwWjxMtcZBxQy9sVvx9XEa9Q6HkH7HJK8NrUcLWNhn3NtzipibXr8FmnDDMCf8Ngdg",
  "key12": "3d2TjaLnT5qFxP6CN2JrEjjztg4az9jNhTkZzbGMsLC5UiTB83b6JrKurhyfJ5xZ6gyxzdT9Dr56ZJ4NsoDiNmn9",
  "key13": "2xNTxnkSHz5u2DKFCf8eYbMRECLAtFgRD4eA9yMygZX1Bde8dzRi4v4sPAmJNP2qsZw4p5YBecjnGM3b825nHpYP",
  "key14": "23h7RMNpHPZ3v7i4MwsWWKRjPdcE8vZZdCzNcStRZZ9wYUZnDgPSwdgRE49eqwKbVmYTy52cx2S1sKUsk6ytxeXY",
  "key15": "4rSLmwJMt76Ep8xkoJyCcHaoPibrSXdUsbPZd8HRB8vaHrRi47sbhwF72QecbQVPghA1de9QXisua6JSt3XZQ3n9",
  "key16": "ksTZJ8QQphSxSZai1TJssWwSQGgAH2pD1aT19URABjNqfrKfBPqY2sbNhjqp4FHnB8T1gmgwH8W33KNNtFEpd2G",
  "key17": "7aHpggPy6Wmk5yDaUvsgRHukBbugE5Lf1A7HSfSUTvoHzDYcqfotorR72BuEyEYrvi9k6U759RhDWRhRyA5vWho",
  "key18": "37FN5jNdGEbgo2LSdnGGxMVhRWMVEwpajxsYVRVvZxwFPiPzcf2at6YXdWwy5ZW6DVfZ3Ti9y3PwxwUWDgps2GRg",
  "key19": "2djVbx3THQpsTSgx6ZKAs9vTxBnvUpvV23HopCjd9taT7z4axi9DcPCfF7dde7hsL6a5o4aXAiuhi62TMU4VyD3w",
  "key20": "4SDSgrdwQQThXummsYNbUUNHmHLhxnQfqGpTS1zB35yHyFSgRyFW6BPF4eMgSA14U6tYPHzDqdqxMAz5RQT2r45o",
  "key21": "YoLzo7ftZYxVKenGftBgiTigNowFH6K4PRaU5BCU5vzfCUZcNZegjtLuk3DX2oDjjFssFfofFm9heH6qw7jUVcL",
  "key22": "2mLseB9shvPKRmHWcmyBttbd1NY4PT9vENzHpXYoE89oM62y2wn3MkJfmkvk5k5zysxpGvV9xBUsiq5RmhJ3t3NL",
  "key23": "45WRDgTgpDE4qNf8Y6D95gPdm1iEBEYjr3Feto3XCzxxjW96Zv3b8FdeyV92dEDwnFATxYCE3mstq8UFQ3RkYDY7",
  "key24": "3B3w7hinuahibxsyb9NCKqQS4oKVxgtPXvxxge35VDg52Qx4xX5GH7w46fVKbgooVr86jmoPJRrJN3eX7wKs9LPh",
  "key25": "4YqWz1L1DKFZ84XyxmKrh3Mws6CvjzKT3KiWWsZsZYCfJWykaQPuJWf2AmdYFw99SEksiaEmV6GowpwmpMx2Fut5",
  "key26": "dSTW7DqTpCHtSrQpvq74JH78qoyxCzFRTQXhFRtLdogcgEJTLk9s5k1DHQzbuABi2tkX3XNgXLnw4a4tsh9P3qG",
  "key27": "YGF5AHBt5WYfTgqPF5WVc1n5xq18uv2EvMUYhX6pHT32SNSNu5wdbXZLssMDKNfbVb2ECEnkTp3LVFuM4ugZqwd",
  "key28": "3Laxtzv9VVWTzPnRzZASuhydELGGoBjJatb3jsv7ZFrtkT1vaaAZp7Csn1pfkKYWj9hSYGFhsKWCcPhiuGovasJQ",
  "key29": "4GBBgeH2xyqUAecQN2T9toNPnDxLD8gJtvRLzWXUaB4Y8PeMEqfKGbYBevNxbQjj3MY82cTGFKwrFesJDPQZW7YA",
  "key30": "2MEqPw4FRYwoVuQGDWTbj6FRXtr6q4aBsycUr1CJ1pZLcHVzesuV48ENHAQNHQuRBSQfnLnfynPJgannMfQ9TQnU",
  "key31": "3BLJKCoLGh1KJPhcLDqbNAEmuAD1815Dd71vUypdh5gjKDed1NxgpKDKQrSUsVuXuCyx5BphXVeHRLTYjZC1wxqZ",
  "key32": "4dJxXsLqTViaQRMgj1PNzJLvtJ9v2zos8R8boaFH7BzaK5yYfPPdreaj9zM4uYBWQd5V6nFekaVm9KxWwpCmAgx5",
  "key33": "3MVL4H96oZ1w7fyQHHhJKeYW6UkSRmQPGhtcVKjWBg8mStajPHjiMiF7ncsqDnvUYuNv7z8Nu7cpHSD9Yb8EUiYm",
  "key34": "EpwE36je9raUYsCGXkp2YPVR5VVzUg35nKrJT4wpFYVMbj6Xvr2sX5jqKHegK6jozVyqEXeqrGCGJ8vn3wszZGF",
  "key35": "mVovzxBzKTBuU28tgzx6fFjJFGNwhQ7VfGpbSTA5m9qmezB9mfdkspY2DcvGtkEkgyHjvJ7EMNi6gvoAWBva8me",
  "key36": "2jZ4qByJ8c5YmjgpeoQCayR59NMpBYw8hkoW5bj8B381HS5Cvx3wR2H48mJyAg1bE4heydDHLVMxDZrjXGoNX1Zb",
  "key37": "58adjE39JDpXaMR1SvkJuDuHzsPuBGQtixZR74QMkWimYMaju4Q3BJLSH7ASPizPAp3qGYvSJ7oZjokavvMmvM89",
  "key38": "9paQzQ5NA3pf89WZtMw3S9mz3ZhYMjVtb43TMycMXA87EbXvfXbZH44UPYhps1N3ddYs2B1GdyxTqxsmTUQaAVQ"
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
