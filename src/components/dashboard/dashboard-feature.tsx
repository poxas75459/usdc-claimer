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
    "5t4PeReoxLx6Ur7Ccspa6eCQs7SgmZk4DcbWpBbKm8Pq2u97jQtcCeXXyDKsShY1uJK9chmQCkbkr9F9MePrmxGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58rPnREJrzBdsNg66QjhoTMveyNj3sr4tK8XcpW7CSDZmiFYf2UC7o6MVHTsyS38usFQtax5psdopSVpAzur8VB",
  "key1": "4gRwsQD72nAJiMkt7cNcvp35WH2p6aEkpKQkMmb1CCUYDFEFpCcf4oe8zRfvHirjRdexomBB4MU6C4EBb5JkjU8Y",
  "key2": "HCphqJqKJmwVFT3pmnpJRgXpgufs1bGFbfroBa5nzc7gVk2SF3XZ19zfc3dhredYWRyrUNth1mJrZQu7HbPv89f",
  "key3": "uizM31cAnUvA43ZSKvAgpL2WggTdxq8zcTNQ4AKGX8fucyCRtcpUUP4oCuFt2LZvTDbdidTLE6R4CUeePrXJici",
  "key4": "3aWhU7g5LSbDLaLHK924x5f6X33j6kidnPjy8N1eDbKkD9a79D6quQmtqtReYuYHQ7GJAqUMrs8wqRyUjHQkeJzd",
  "key5": "3qmufanKAi8jumCpREUddFDCQ3GbJ2BPUURBMBqnY7SmxWFDYHsaYR7EjY1AzRfvBp8c4BPmhvT9nrB1yhNeg7P",
  "key6": "5h3D2sydmKzh4E8A3KmdzgJK9cLgUaNojisczudHxmyGhvdAE3NxcKrsQ45pZtouKfr1t63J32XbhjZMDgqWSoFM",
  "key7": "37VMZQ2cHb5z2KjEZZWW4AfTvY53hQuSLrnS5CoDWXAdy4ZkKLi5PRRrdEA7NudXxysawM78BF2zB5eYoiLvwrYX",
  "key8": "4npijVUbx3dQtfEfKP3N7xw5DoEynaxrwR3QGgfyfqDQFqZHnSr9AAPRWmELgaJChRsqkBxEmQRL3rAq6QuLud5B",
  "key9": "55wiPrfPkb8E8BgWt6uWV65RmbbsaTWsBVEnCV5eNYAYz3SZfdgQDPbw3zziQxAdLDjSPYohnL95QS9PXG1PLgED",
  "key10": "5pbazC2RDTK9CEXqE7cbxNhmTFzV3Hsa1GkKhUigmQp2M7cZUiwCNBdvnLcKXkpz6pBrwLDTe5dGX5TdaQjYPdmD",
  "key11": "4mnrFCNEF8aXb79H3fxNrBnkHz5o7ynRytiz5Ykswb4KvdNJ4JXpGCNqBECMPiWjTjjyGo3couLrzpnd36HQ35xD",
  "key12": "4YzYFYSfj22ZEQeoDsv2QU5cB2JYBkYYxxvtgnzERWVRUWaZnSQFrhES6DYVK5xPftCknbjbb1AAkqGUQwLypSyz",
  "key13": "4TPYeozm5kJjMEioea9Y1CaJaGnNTe5XdiCQ6vJyDnmapfjTdcAsmE4jTwAmGfcPXvKYV45JRvEBMkzQokkS2qUE",
  "key14": "3JQiiYnTQQ7BTFuoDyjFF5CBaAmneYdWuZRFPiEZ4pf1ANNvJZMqJs28WRYFcJGiKzHRcDTgwYhX9sUvBHypyoiZ",
  "key15": "5Awri8CxcdJPmoo7HWfHeym2f4j7Xnr3EYakG2A562pcAsizP2xHRAgf1uRf45YEFn9kfYu6GZkr5gYrcRKnJJnG",
  "key16": "kTMW2hFWSz5f892gYC1nn4e9jmG11Yo6kaA3wi7EckJsXoWjz7zoSihvvHe3k8q9fQfnbVgKCF6bonMECguLWiv",
  "key17": "32K9wUJtgzFN4wRB8ey9uJeRJaeJssPBbuj9fEJn586xtxhBN3TXA6HYm1YFcw9RCKYaEA3zNTLZjRDL4wVsyNxf",
  "key18": "2Eosw514r7iYDpn8mQk2BTnskJjNbFj6XqwkobNrJzQLwwYTLzyrhKs9ANt13VEzzJeAB1zRhfnYL2c3HtNzepv1",
  "key19": "4xPJAcbF2pSYY9WYXd1MDHevQKHjQKypvwAW2a21zN92SLyW97sxcJAQhx2kCsHDfFAJ6jkFgiJkUknRsu9R4AiS",
  "key20": "3AhYL2LVszUjns9WYjJpqSXvSd4xkweqRUaRP3CXjKJKsoxYhxjQgxtagqBMwCdqJPy8hHXnksvKASVsRJHrGCVy",
  "key21": "41vbHN5oV4fLjFSiAETnBDycH1uwAay439uJxMZiux1VySSmqQn6K54o5SvaX2nbtn1t8cYWaYHsb67PvGUXtik4",
  "key22": "APqAcJwCdGVihAwymwxXDFfQQwXwsFmuunHDawkV6CjW3t16r97ugqRvBozGrT6tqhMBVR6QPy8XBRbwhQGK4TY",
  "key23": "tdcwQGvuM1yBztRJdwqoF45jwyCHY8YFUBL7BH9ibFk98vosRevZrFdi6awucY7sM36fjSW3hxeG4BQCcpemzwB",
  "key24": "5BG6gqXoLZDRc64fRW1Hvju3TKSDG9nXc3FiURqv8Tpg8B4DQuwHG3yxGZDJBq3h87gJmcQ36nzN4ZXmkioNNdti",
  "key25": "4ATSVRpKpY646qcAx3681azrA5EEND1m1H7rhVB6wekX44PWgbx5SGyU6dJf7YzvdAi9HzJp5DtNGr2cfppFVqcD",
  "key26": "5qYP1EFbeLVDvupLLSVEeSxzk9dvuBpKd2933offZhMrn1Hrhnb1789eXazSZaHm1PiuodN9WkwkdLFNFSPxBDN5",
  "key27": "42XkE9QCB8SnEQmveEdZJu9XeE2fF6USupTfs15yvktGSz4iA9p5o4Nkr7wcx2WfhXLUtpnfLydmgzXeens5BBTc",
  "key28": "2iNWQ2Up8heiZrTKYuHtqVBns9XVURhmHv4nxpbF3ZxhUZE1bVcg25RfoWjB6MMbNrokVk4fFti3frmQYAoD6a41",
  "key29": "2CyUQdqfDyJuoDcDfjU3KXJc8hSYfqaaWNRwrbXuLuMS6FQxDzwRaXvDnd2Dp1hxouVij3xz6SG7PL718jPCU3FL",
  "key30": "4uBAo6gzyQaWqkuG6VV2EmHmCKLFGaUmYSJjfCQnHzmxbKtotPJej6TXRjTyycedVmUvLoNcD8mUmTTBiK1QxtTT",
  "key31": "3JV1tkvjwkCBb9HWGMm5YsT7JXRn1K3LWBgN46XyJB467v4m9CvMzgKAxmT2q4SrAjSZc1jQo8toLuAbYnb3v7R9",
  "key32": "3hYvMWyXwkeDbPwzTbKQhuVcT4iazoW5TrLWBqqwTfkfgJTwPV5ttNV71Df4eegGKa7GkKdYwMyvZR5hMtsmDWze",
  "key33": "2kRcrAiMJ2StcrjWZdRT1GBG4os3vLdRVmMg3GaoYhA2Nit3f8e4z8bwqHAbaTxHCwb7iXQwZ3yUe83S7EPfosFw",
  "key34": "5XosspnQuFKWTU9Hs4KdU9Ryusc6VcCY3GR4PCyum3cwGfAJrbEyuHjW9TasxEhCd63PZsgJ35ornhV5rn1M2Dvz",
  "key35": "Tz58kU3Vi9CboLgBNPHXtesdXDGj5CDoQ1c2u4bNjsVggcUoXAwAT9xRULM3YWpP9u5wx3CvhZjxRxCVqDHiw4p",
  "key36": "5tZJfegVEYmTmHGMCbo3vCR1tUB17o24G7b8zN9343e5x6UJf6TK325mxrs6uU7sntYTtybbvLVNJp3tkUnkj1LV"
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
