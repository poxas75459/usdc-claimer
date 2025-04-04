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
    "48oa1GhCxK8AqHyScDeTPYjBJtVsyqgE5WGeKkDk4KQT5BF5H3fWWBwjPw9jr1admBcgGobzNAmxTJPwMmkg9jTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m2V58svvaNHY4dw7Xz67MsoexyL6oaqZ1DVhh7TxHNvkVXoRo5xUeQLpHNzpLLJ3yZRkd4LurbHEEfMuVEeq7Tb",
  "key1": "2kEmh7QgSbkmNMJiCBW1wuo87q6GxCWEs46G7ov8k8GY1xpAd8U8TWSudrgsAPA6Si84VA4a4eT65uzCaf1cDLTz",
  "key2": "3TaqMGW6ZJnafQVnQA1fzNDnQExEsQebRRNBYLxLzr1GHNLZAY2kF4t1z31hN1oKoqWN3s3YYNQDjJ1xJ2pj9uKb",
  "key3": "3fRdJ4s4rc7Qsyyoi6Ac2Z5WMdNcvsa6RA4fQXoCUJfH1s43DgtfcNCKF3MjbfbpR7jAd4d4efNWd9ARiqLmDNJR",
  "key4": "3S52MmNURXUuuiajtyJp6UErc78PDPZRovxnBY2Qhpiwu5Psmsmmt3L215og1ZzTuv5BHcYTF7KJV6vA7gqcTJEx",
  "key5": "3DGgtd1KJNJzre49KQYJ8r8eHy7JSgBGVJPvUnnteDuVjEj8PWHc2HhWZ9MgbUrZZXfKvjVGnv9grVdg1waNSSbk",
  "key6": "4Lo2aJEYftc9Zp73nhdP1hVF4Vvuqb37DbaE4MtYhGBJrtENrkAzNb5mXiTcgouzG4kdH6soSJR49d745E1qCLfM",
  "key7": "3NcRvEM433NeE4XvkXhNynijVkpfCeUsRaTKE74EjCmfUjUJBWoaJziqfmxd72S9Xo47dtjqNZ3wc4kfR8E7GPhE",
  "key8": "5WybTXkb6Rmrz6yDYhsq4jYzExKiqjSQ8e9Bwam6z5pCFYRSJvS2P3Xsm8RUPmvT4To2za85UEqVhHSR86TDsfvK",
  "key9": "31Ps9yVSeJxkxa9Jg8srQhtfKvULRPzxmbik5HsuLpTroMkafhi8av9PTp1oz7uNkCBCRTqWqkL8zhcNud6XZrZM",
  "key10": "62WAdzLvte6bJ1ciYze4izqyva6NGNL7bmDLqU9r4ERpPbBFdYuaJPPiXRaTpWw3n3fPzTq8tiGPmnEddcvPQ34h",
  "key11": "512RLjqBPwUspt7S4ySyybUmcLYkkigqC9oLfcRE9NdYXsPNEiEA862jzCMC1dbp9oNyJF4nin6XugnTwdvzhwKU",
  "key12": "28AUZmR3jxf7dRz2tPAeH4uGFQS3nHAZdzwxKiWCs7DhREYYzTQFq7TpN6onqCP5dyo8mv5dMsGLUAQRJNmSnixY",
  "key13": "2caX8SAmWtQ7LPbRsawyUZfEsKiVqDERSNeGu2L6yniHbfMu4H7nqyooJpiHQzfZUgfaSgW7kSysFu1hNAvys44X",
  "key14": "jk2B3TrAErCVAw5QmfSBcfj6cCgvrur4UHCYYxra5VmJLqVvgDmwWziJxxTNHPmdUYoGTeRtLUa6DDDWNV7dDeT",
  "key15": "qm5Rin7BKTucYim3Tp26j1pYVK5dj63xoeQv7CXYpD8E8vGAkMau7EMGSCbADP9on6TBK2ryHt7k23zcwUnT7Au",
  "key16": "4vH5L4ETTRAyuwzqcddjpsLuSam9QWNLYLjRoyq3gzXTgxhsNm4pUJNfF76ivzLR5fxLuozZxLJzRgLDjfnoMJN6",
  "key17": "4ctWdkchKv6bz7aWEJYeQD9miQzYHfqnWYxHXn1PYiv6jRMKdWncFCKcLuf4jRvguEitbSvK25afvx4iY1dYN5PE",
  "key18": "5B9H9PvtCyavmzvBCAg7TJVnk4CBndxcvLKhMyUoT6KLUmg9QDzPxLcpiuKNGRTRHCX9aBhff1pu2gsh7cjwfXau",
  "key19": "3xoHgcgkconyY76BzaxDTMikubmDZBjvPPPastBQM98UTCd9iftXyALcxPyWUgu3jkx7SNyEBsVSu7neiDCYxrYY",
  "key20": "2h2GQhm4HPpXurAumCPpP32QbmPgEXS6D5T8pqUVPVddSaJ7hT1VJpDzmNu4kqnaQbMM6JaiJJzGXy8gFxaEbdCQ",
  "key21": "3qq4nv9AaEwt2c4mNzNLnDQojpgpXoWacqRy8VkpBo66pmUqgC5W343515fZJE75wmj8nNb2dBJNmcQNGCcuN7o",
  "key22": "3SHTngnaUeEfuPr4oKhwvK94dJLXKM6BXWw76wyGk6VPwC8BQngbW4AUyLjREp4zSiXrXGkUK6LVCLeBx1jMa6sA",
  "key23": "4hdbYuxPFDKRpA7fNBXfXFSTA5wnrFBf7RXJpdc1hBmJWR3rqZEdcwXYCP3pHRqR7PqDMmkZU37DrUc9BixRnpfB",
  "key24": "USjvYc2stTgQPXH84TrFTWHtWUpEn39tDf2hShCZDWnw2Ui4i54eQQXzN4wXe3CHeUyBeoScJqmqCMUWicReHUZ",
  "key25": "5jAeYMmPM1mBz8tw8EUspGdiwj5SAMSN78o9ENw9QtPFG1dWKQHBfZ9u7GNJojsduqQhcE7iR2UssWkVsDacXMpW",
  "key26": "2PHfZcmes5DsXVrZJv64SbPoghNXKEZYwqFydBaepyw6paBZFn9tEVhmAxUJFSekNu86sJxA4pyWBdDE1mw5jBAf",
  "key27": "4q9EeE2CHDJ2Bf7hWsvNi8sZ22wevgLKeMn1F2SexUzMerkV9QTMuK3dYjkvuZhCC93UYTqs27EBnJUg73Dx9HWJ",
  "key28": "6pYo1fwKdUKdUhXweA7KKyknmWskwBSwNa5SHwPGLicYTP1tPyEiFFnrJ3kTptJt45CXPciaFER68QGWb57Mt9y",
  "key29": "Lx4GbsmTQYG3kXW5H4cpLpqEggvN2MUbkCCNHsgMgPt8N9TG6ynL6As7ziFmozt3rvJHYqK6ht8GAoM3drDPRmV"
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
