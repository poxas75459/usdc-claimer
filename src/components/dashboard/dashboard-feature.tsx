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
    "PShKqu3foqVpZ7gBkmU2EzUTTXiRgjUpuZ45xm8o9Yx58CtUHGEaStjS82wRDJnYKQHAEeKZYZimqUhYz4ENkyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dHpaQPgBkqfFvQ49rcgBDkjN3r3p1q5pDUVmVaDP67MsenHRPMJoo4gaXKdv8cLxdEXQgYHXGsAV85WhMLPu1EC",
  "key1": "38VopuDi19Y6j7UEGFJTr7u9ufE1zcb7PiYB9dqQHoaEG52dZwoJ4DShD2miB7Qbqmi6eV589W4xcuBMXqHyqJV4",
  "key2": "31yBQGxbY2L7NZmm4zDVd4hBbMhMvDAsAB61BSaznQRnPUdrbndwvSG65azTstTKpGFmUkhrV3Gh1r92J3zFV4j8",
  "key3": "2QVrhp9RMmpbBwsDerZbaR2WDeiVBsYAQVvJ6YFGe5raTqnZCU6dy6wPr7iCejH5dvjPaRQUvDwY4ESSUmtrP8ie",
  "key4": "3Gsbn1P7JK52mpXcGGGC1ZwueU79FD8F8tBvRd2r7QouKzzupXFUc6Wzok6ZTXdx1BjszzybPXn85BHZ6oDxe2vU",
  "key5": "58MLQJoBf6XXD7EX6ZtSPqDY7BGqe6qVVicHnkH6xj33kbSByKHkGCV4n7GVrcfdxGQJAH5rn1ZMhXhF1kDnPzXw",
  "key6": "2haNfUHtuuu2S5kmFei3phG5dJqPhPEE5mxfYeookKD3ByGpiGwoNK4gxdjs8jWqn6Dzy3NTD9dTadgfqpKHcXwZ",
  "key7": "4bGM3Qb2tqvGzYSG7psXwji1aeb3qKEn4oRxmPmqgaaGpUmmRV9GYeUdeHdGQUns5GJwKLNqN6oT3gjhUC4ApoQc",
  "key8": "3uqTFgyUUBx4MhUZ1k3XnRQwgqw2QndNDFdG4AgNofLHY3WoiJvazwx4s23zcifStxSXDK7zt9i9k2S2wUr9TNZU",
  "key9": "35YHCTLTnJYjF1E7cXESNnsMLc4yyis5qTAwkZu8q4d7K5ajcRojzjMKiZCU6gQyr58fmLR53HH67S73nGEB5ViJ",
  "key10": "4unQGKwbHQVPDfNRGhbatvADeSwrN2UbgfiUiPfmCXYGEzXWZM1GwBTCgjfwG1AfWxPm2HK2u1cjuo4zzTYy1qsj",
  "key11": "eqVPhUTPDFbXPTYyLgd66GTMrFwA67fMi24eBh9ByfPTCE7uz2htNnpsU9igJYuiNHebZd5WA9yLGQGoeMosdFf",
  "key12": "5FmVXdDHmxDHxc6LiERf2jUrcZWMsKtuyCzRARZxbF9KFXUDCZ5DjewcEQPkFmgxwnDfi4LY6DJpmTT4NX9vzoP1",
  "key13": "3hbBrwTZBWgWYF7SByyJpC5SC6LpwqTNELVo9HSLrcwFkjGM2jqoswrBxKKW3Ws6pynJvsaJNAXdsM9MjRfE7pbC",
  "key14": "57YWvCRqjocPCTU51AtHTk24xYsAoHoPahzYpuBWgNDgyNzRW8sLf9YMxc6Y39D5v55EP4vbHHPj3CqkgKWj7oVY",
  "key15": "1VRnsg7Suc9iuCTPBN4efZS91thndQCerRFmNtunkVSXG47Mbd81eDNfneU5zmtwQkfaMVM41fDyaK7m2sqc4rX",
  "key16": "3uMzp2YSfh7EvqxmB6L9DGyAUynXHYmk5bEQmVT2nTGuZxhX4dp2FcNStFGT9hiMgqjtSeeSwbcH8Th1erhtpjgh",
  "key17": "3nLgEc6bof2z5iPykv56UJ2mUi43XkmCBNfcXDuinDkPG9zWdgmz2vjQN5miz8RsjUFmFERNgeNUL8kRCdn5Csif",
  "key18": "5Rfz8x3Boq8CXs159i3YWADA7eef6wjXK2Z8bHv44V1RqeLPk7Q8yCP62rpdUgyEs6TVq4sAQaeGaZ23YaEnxRGf",
  "key19": "3Q7ZU2FmPBCgHKEFY1VNu4FQEF2kL8Yx1LWhpWHjdYcva4Eb5bMzXs373han79Zeez8aUWaSG92wq1nxmxfizGDR",
  "key20": "392moMQjsbhGYr3An8MCkLFSssfToxS6K23BjX6Wh4Ua23erXFnTTk4t83GZcBUsQ6q5UqKcwvQCCqNRKeY5b2V8",
  "key21": "3MD5zFUtnRo7BPj1asbGGiSqrzp3Hcyci1Zppi7YB8vAhPjSXJBbkeeYoZB3nDTKtYNfFit6m7ssorYYJLxWK3pw",
  "key22": "2wkKYZ5SkcUP8ZGmYYSyZxCHz6JUgUbLLxGXSjdHa44VK5cAnVxQeYGToXdd66U5oFaaA1QCyH3hEj94RtQK8atv",
  "key23": "519am7wz9uJEyzHihGzEh38JtfwPf2yJBmk7eQgpif5wa5Ay7r4bzKZGK9DWciJxGQgp8Q7o4HtjfW1KFRvnVcK",
  "key24": "3BPRS8ZTTgA57tkcNYXa2x4fLCu47wK83X9pME69D3koV5HoeCaBEAEu9wqKK82yCXCjoLU7FEthjgxrmKC6GqdZ",
  "key25": "4cmt5z5Pwctpazg7nfB7THr5nCNiHL5YYuXHVykAuDkPmJ9aQ2eu43412hgvgq1bd2jBRiHSxExsGA9QEdUunsct",
  "key26": "2knZJZR3DGbizNYwVk62Fnfx7evxMpmiiejmWUB91rLgW5A9b6xJAuz9yuJqnGuT2zUy6MXDN43LYgGx7KuwQnnf",
  "key27": "3pdLgB5sfM5xy18jNvXW7hp4TEjrd5PMEyWtyLXk2cD2EFcpg2SxpTPDy3cXqEVKUegm1DoeY6BgvCFxsrzvKbRD",
  "key28": "5P1vicpnZ1wN2Evn7JSi54CMoyGfSjnNWyVk2Yw3ht2JXUieL9Uqss8qapPdNjvg4ZrEAc9LGSvpy4oCyHo1jezM",
  "key29": "FXoN4qzyjFYAuZFCKEF4ad9dXiJnPrVbVRswZprKXLaayszy67WcKzpJw4VWpCWMsGHiwD8r6MMsWNY2gBUHF42",
  "key30": "5aXLJUYNqUQbZXZFa5PAcUMLoa4ySD3FjpJf16zbe6Zm5fBPcRroEPVr1G2wJxjkaiUR6zemP3adppY79NfYaMy8",
  "key31": "5yHbZCCiNxQrSgcwUzUZ4FLELfY8436b2iGgrLK6nZe42uM2jbb46CchKsyPMS3nk3SdD7nDy2k1PZx5K3Hfktys",
  "key32": "An5xAzx6tXUyawhnsMpNaSLYpAsNHQsYphofRK2oFZbHV53zgMZjLhyR8hmQouVo9rUZHDgujxdsGeubymyirjh",
  "key33": "DBfTPQKnzt63wFoE4DqLoPtdY6dBu3GT8GwCP9WfxE5NbhoUmtkMuS5KqGnGNvxXuYzPQYRQv3v7Aabbz3MqXhK",
  "key34": "wH3M89q1zsxiYB2vBCazSUe1hidLnqpVsqb7G3iqgdzzCo8eRRp7QZ3JnNNJ9cq5zX7ydGgbhQngjiTMtquao6B",
  "key35": "2Br1aXLUf8emR48nr9Jkjd8LNSBifnKfqrPZEvFG8aKvU2o2sURLoEZAGD9FV8vo3zgsEMHdAw2oHHvTVWbCUDQ9",
  "key36": "64GY6vKe3Q2UqVn2B1M8kNAXivPCpa4CSb7f2SKVnccP3vAW7bH5qQ2hDKJbJQqDYi3r4m38kpprDKzhpBxYbuEi",
  "key37": "2cdh94Ax18hyB9JAZD6Esqdr8ZiYaYkVDFweBXqUG4FqEd1o97A6M7U3hn8iQBYX6EC5rQUguU8H8rKu92NFTLxP",
  "key38": "2Q3Xjo5xg1hXbWvnL7fYtSUwYvNQi6ccjUf9tfarA79PLETwq7Jy78CUk8AM3hB7HuZtbczswqRU7ju46WHRp6nR",
  "key39": "4dWTGZ9gh13mcUeS3hUewWKMWWXBwekBduNjWGZMtptaiPDUadkzGW8QYV3bnzkJpGWhW9hiefK7JRuQ1BA1BoSY",
  "key40": "1wg7Ad1Mpct7vCfPyijKgvX8eeaxisdJETy8AT1rBM3x9RqcQ4biyJXheWxmtaME7ypd8kzdJVTMmXqaDw43yGj",
  "key41": "2fVPxHwEA1TDYc9JqiWum8tTu5rTVKtZaVFh36a5QjXCFinoueZdVSFKmuCB9tFWZtqxSmRuAN1BK4CkJAECe5By",
  "key42": "2VjqB6fTz5hgiQptVsva3WFXpR5fjGDE9QWGsZn8NnrESsUNRUhEMEcsQnUzGgnR1yCkWAvP1QG4fnBLHiWbiYNs",
  "key43": "4w2DDFj8HQJwqSoQzX9kGwbLMuQ8wRqieQPSHdm4mS2s1q8bf7E5BRstKtXPmAcqdamgFQcZJ9qZmEqtFTiUJwEq",
  "key44": "4tiRe9LKRSUfnNmzn8wFycjmAGyqBC8xrar3TXRWxU3BVheU8DsRBzt49UQcfF2hpyEs2B4fEBHpviuKVsuqwmJM",
  "key45": "4VVEEuwquiwP3vhQm1fMs52vqx6Syxw7qR3cgWRezzwzA2Dsmn2i3cc72kjqAL2T15Dp6Fik7LsUNmTU5KHRJvNB",
  "key46": "ZGucAgWZy8G54mEGQcyLaXZtKvpzMuiEqo6h2mUhUNjh6o6SDyXHPWACF2uNc8uBUPTv5hhMQVCd9KztUZf6kp7",
  "key47": "3JYKznPjzMuiRhsJ9X7gUNvsapfiFd9Zj6DTw3Tk77ViK8RNXZ4Z646rrrqd8XWAgNMBarZaa5Q98tJeZjC3k4kj"
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
