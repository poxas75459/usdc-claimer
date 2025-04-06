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
    "3CgbivR6E6xeixRyYrS9Z86ky5DKdv4okZkQ6bJoKCdV3eS5QWoXC4K4USXcb9qKTgefjy6ZTuo1GbVBrcYNVSEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SAC6AYZFh1Xv9nXvQYYdDK5CPGjBJbUDf3azQgVm1bkvTvsyAW8QswmYWXc9Jgc3wpMfrdaMX4sUazRNGjMuUcp",
  "key1": "5RSEV6c6eHmNvhKSUcGj8HPrMEkq152NxbAh3JhUefCQAmDd59cUeNchnpFd2eCXUQ38QtTrGmUVsTV7P9sU5jNq",
  "key2": "5cB8rnL8KF1to4cwtwrDYzyV2hCS19Ea8pYvqZcwGvH9WKrcJdQ8TuKrfhfT2xpm8X8YKTMSa8Xsn6f7bSA3BjvY",
  "key3": "VnBQu3o8fjBtHEbDAJDbhJ685dxFk6nehyed6LCjAPRMKzDQNr6SRJjNi5jRq8ZWv8rvJAmBBoFevxL4JMEVikR",
  "key4": "2u9gDTXtcuKHJPDNXRbWKyZF6bC8KUV5yrqibMekvEQpycHZFNPrHGAEF2at9njLa721hXUbh5fgSFwNuEzxMzsX",
  "key5": "5VvNnXrEt8KP3gtNwnARs8Jx76JqEsYyN3rmyCBaR3VUwwpHP1Gb2EzoWmgv1k3J1HoHcSKuziBCZTjwX2FN4mJa",
  "key6": "4eySX2aaqZNzoJ1sf2pj8GffuhJwxtLvnAxMQVA2ppjBrAQJEezcATrtYh83iGymPGDxsPE8W6UNWQnJhM6nYtQC",
  "key7": "5h7goWTwNwJ462i3zVDsnPHJSVetacpHQiNBUKEeHTSyXHpJujThLFj4oj4YjfffM6Z9x1ovGC21yfH6Z5ufhquP",
  "key8": "5qvSvWewG2yPKzZs66HCf1VfBXzuadYzhYxGUxdiKKjnDRffyFGu5WZHTFhWoTAC8Yx1ix9r8ykue94mhDg6UUMT",
  "key9": "3sJzZV4AsYPzhFoG1hEwwJPvKkDuHjFJUshJRDoCn2wCUH9YDWEw4aSs7T7HFK95gj7AchvmHjgN3g5mjppEsCe9",
  "key10": "3ng4mAE8f4zKxNVLE8qZu8kxk3XGxJhW2HsV74vUce25KnX2iWKXB4G7SYdfeHC9Zw1m2thy1FBNv22N84TNdN3b",
  "key11": "5C1rG3AViUR7g6sjYk8d4uuZPB1b334XaUNSZM16bALxgooZKaNrPS4xhbyiNvQLyefFw1yxjCRLZuJ6wZuaBdcV",
  "key12": "5G8BLjrHTgsk8T9uXgK5xVFBbTo1VTNGjhJZFmfpEHVd2pFhFf1p5bxFkUBGFkfSHpHN55meqGch7FvXYmfKCgWQ",
  "key13": "5UreE9MgNqWpTRPQ7hco58j39pTefrmYBrwWcbMtnnXrLgywHStS8nduR4sJVMhuq5mYLcQ9xfvovezU1f5ib1nZ",
  "key14": "3Shuv4n2ZfwE1vvGaYt2mZWNtDBneMpeXPesUrXmc4T1JYe2MaTuCHdTzaY56F82BM3aNuSmb1jF1FNFarakzb6f",
  "key15": "3tQsX3XuLpAZgTfRLsVWjEYc3eyHbqDJvdo61UuWy7SnctFMW6GbBjGQtBeW64nLCr9vgw7hWrvkZipZpaSG4Gvw",
  "key16": "2XeYsWzwrPPeLti5wpahX7njB5fR2GkCWvfyuo2SCp77TeiHRjuGF6iwVxC4trY4M5tZM8Uy5dM4MRx7UYdnuALT",
  "key17": "CHrbZiYQ2z9gqoFCMztaZntcHjrzhvMAHyHjPq54rD45eib15PPwwkxtv4LN9um3kLTqSk2dStkbaNgbdYZbPs9",
  "key18": "STFePSC8QiGWaq5yF4CH59DTHNXqkTBmCg53mZoX24whawR936VeFY2n5Z4BBxBmHiWLhdS3YFZ4FHG6jJApBjv",
  "key19": "3zYTH6yndtavcuiaor6aNdpmNVAvkMf7fBdrLMeYK6KcCAH9Kg3u5r5uvKZHWXQyxbGfZfCFdNJbCzvWBmwqV28L",
  "key20": "5WYkbGYnbj87yb3ke37hLn6WgXNobAKvU7oddVDwFy8KukW2ceycNoCN2sV6rMpUFMxN5s4bGhSjc1JS4fxUD9wN",
  "key21": "3E4X1LrmJEPt1S47CZKtZ6GBkPFFN1gU1f7pwrpZh49GoGnPfqv8xt1yqGk71fSzQFhb4bFeGWjWoWpc9zPjZ3Bh",
  "key22": "7AnYZjhrdueSNcPzxweLT7CxKf9118Yfhc5JHuaWnT4bvhM86NLv3Bsrjfar5vSagjsKut9vcpdKqTkK3amyq25",
  "key23": "49fdZdFV1D1LDR7UbdL9GXi67HGmaQsGJQc7jWaETY472uXCPfgRBrXEFdyiH7KYhXfk7rNZdwbYJoFuehZwFYYz",
  "key24": "2XiWZMUjUxPWgp5wtHwTE6V1nqfhwJ6NaNKs4X23MiTgV92Nar7vfHGyZvEK8MpSpFiTXZvig4HkGdJqKu6qRx8s",
  "key25": "3waFP4xY532X9U8EiMqCKSDMC2epdwZPqifaxHn2VJPAkasZBXsvGYE2nqhBLT3RkFHPvJJBR9g8M4EeT6Y6E1iK",
  "key26": "4Rq9L2vu6TDfSLXGoPXU9e9YAJtVgoKcDxCTqRKGihsk9WptFh9upuEeCsrfTDWaWvGL45GCT531Hc8nAS3wnhoM",
  "key27": "2K1FnqZQd4SjwEhn51Cpn9GitEB6PZLoeBCV3z7XUDADtiVnTCaFWhNEPpDpHmEypJhCY7aZfR9VTeZFH12v3F5f",
  "key28": "3WGGSev2JjzstCVVhbew247j2i5Q9j9yhtozXHebJbNMGRBjiToqvdTpi5pwKSPn7kvAsjHwXBH5CKWiAfb9esr9",
  "key29": "62rdWpjMGufGhJWxqCZrueGQ4UXiXY1nv33V1xbMHrWUdNE5QWEZtyKSp5M6Rq1r7wnrV1mp6S8cvCCLcrT8wU8k",
  "key30": "xBpuNoSQX8Y4fNEUS8d4ccBT79mqynHxkkJUw2xEWsYXJZwgSsmfbb6bYzY9BK3MHPQeTu1iThGrjBaX8W5jFUW",
  "key31": "2gBPc9ehyCDuBpzY99kPyoVxJbCtW7mKh7udtrj5JJtX4NCzD2ibebgnQC9nMu1HLd6kqFNGAmA2HkzAPMibRGro",
  "key32": "4GuLcpA3Rp1tWhFcxc94cbMRhZmt9wWhn9fGuGUZGCRGGF72m8bCXeK9qg2pArEoiECJ9393G3uoWWhQKy4VGTFa",
  "key33": "2pYkKR9EPHEXuRBV3CKjctoy8WM7mp27EFbnxNAYJT2bwu3n1Tba4nmC3SGuLxHbS7N1BmU5GLp4YrL2rV4NT3Wj",
  "key34": "2viDriQU1VEFBYrDjJPcryMVUgZPtcb4S3HZVm6xazuJygAw5Yrxzc4RRyzZfhWACmcvmRaoun1CNw2Lm5fjU5y1",
  "key35": "2d5puruWe4YChANu7YbtnZNgxh91Zb5vMnEKfZmTMoAjD9p1hfNLZaEX6zNd2GedTfnTgwkd7svZN18X7882KcMs"
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
