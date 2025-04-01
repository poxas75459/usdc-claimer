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
    "2xBLTBWs2ByZgD1Kf285U4Vbk1ES8aSkJVHdRtiwLyKf3YvTxo9Za3C8taTuR6G3s1dBMeeNfJCne2nvcDrXPv87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uazj6XXdayB5stFYMGLuT1U7JzUcSygVa1ri86wqWH82yK7Z2Kkb6jMxRSr1UB9MwpBPwQGkVxrfvhseuYwNNex",
  "key1": "4Wv3r4BoQWhzcrP2B8Z9jKMdjuSzj2y8ZMwBkLWE524YgH8HMtyFFykMCsgjRrQpZmvqKgop4kHaVcW68VPvLgUA",
  "key2": "4htXXwGXLTqAu1S6wvYduvwXpqgNXVdN8FUwiPVNQPQR4QquR6Z6KdbvCqkisDRVB85WV3J5TgGHbzW1vA3Y1meA",
  "key3": "3VAs4zJ7UZxGw3pwSEFDbB2ZUv84C2gkeq7dCRKV15MMeByNLzGzv1i5CC11yGPiKJgKAUk2FTWRR1sfwECykPFv",
  "key4": "2GpY7AQPKGseCzRKK89uZ8U1sRbGZkwm1CdnkETap7xevd2W1nG2Rwg7UnVQx8U2AbQYrKYv8ewZW9NeBsvLCu8z",
  "key5": "yqCKnHxMCemngbnimP7dHUnUphqNZRitFkpgMxfYmDVsVPY1pccWDiMktKPtBgteFVHw7qoZccUYb1iZGyW3K5s",
  "key6": "5dM6CVmQkVQXrkWSffRm3nXHJvfA7pJNoPwRFzxRfdHZpfe3GHJQt4thxCYhyNEGN9JR2uPhxq43jPGJiZYww5Vr",
  "key7": "41bveYAiHDBa1iAF9w6GN4Tp3529PLcVqnyZKthrwoRnj1qFEuiHrEWjykgPNjca2UL6rWZfqBNA5tNF2H6yNE1h",
  "key8": "4F9NEFJuUteUzbBLiE4VkpXbmjThnA5q6uRkp2vja1tpHfD675h5Px9YkxqhqSBTatf9rEkGd1GihWuK1TF1NE2d",
  "key9": "3A4smFUHqoTpT1LMJSm6zyzWijV6A3UGXQG6SxhSSAwsvSF9MaWeMfKy7xDmTguqouZ7wYs1i2H7b1EqpH5HFQev",
  "key10": "2esS3BcMcjyLnxehhdXBRhkZr6SadwBnZSpcyD21v3SaNHkra1P1b9FT1NCpk4Z3j3FnDc8aerxgdTFMyEPBffPH",
  "key11": "3jn7E1jiUy3XZqg2Cz86MHav51fnyWAzXMzrGSBVmnvwfuqvjXL2wcmFtDaBCRvMzPPqMadW8wyqsYDcMwbkG6L9",
  "key12": "2jBPQjceZVfQyLCr2BfEUbmyHLA2jDLVw6D2v5Hw1TJj5759ZsRa864cksekNbVbvDjsyjiEVhKYas4CyjdNgHu8",
  "key13": "cMbcUaAzPhtHPgKmgKPq3SEaH9ZfWcUQoQXfQ4XXZPWpw1wAKZer7WfSmFi1QccbGLFFBNm8CiW57d5mRzZh5Yb",
  "key14": "2vrr6s2n28oFytWVNvDwjUTWPsmhfSPANmtyAQpvGyEcwspz1NQsuuA7udzNk7ur5zTM73kk1RFNiAJJ4hMEV6Wa",
  "key15": "31paeBo83T3f1kfa8iH5xkdB9rG8RVkGFx7wBQBY6haL4FLhRZMUEWabj95mW9VnVTtc5sQ1j2b3jk5d5NCg1Rbb",
  "key16": "5DNSnvwk8nYRF6C56uk4VsQnKLvG4LjVxUufi4tYyzHXN1guWh1MXUpyAo1f9inBa9cEg5CZSyY17fCj6Jm8oPbJ",
  "key17": "3suxt8gbBjDiLmPE8XqbCmUQ7Y7JDCibFM5mzohYGmzMfJfMhNKeuoiVKcBXZ7bhr9vQ4im6jebDbt59Pup523GV",
  "key18": "5CtE3yAg6koTeiL5BocZBsABAmPAabcHyTtas48J1sfWSbkCsV3g3iKjx6Ay3depMFedSDbR8YZ4eUfUyUByR3PC",
  "key19": "GQ77mimLFkciP6JJCmy7JKgyeeWZ6WBZxzyuyr1bEf9ckcBrzfBqde9XF7LAVj2oGasBnnVu4vNUufPQRpURsVz",
  "key20": "5jpdLRmbHttiinrEy96eMWL7CWynxfrooTNsqTXURDn4fn8uHxFULvUpnLs7AKJGA8DWpF1Tud9dAQRAa4fwGTe",
  "key21": "4SC8wqCW1TQqemUWMZu1tP8LajJZjmaids41wbGWAUhmzQ5wqxrjE34X9ZDpoPgYxTw3o7NeDd49HkWuuPsvc1Su",
  "key22": "RjqFXNBFxCcjJtQsrCRqerJaWYirkcqohwaLT53Yd6bdxcY69Zx1VAUaaoj4HbR1k22vKPvvroETJbG6NeKxCUB",
  "key23": "2VW9cgRg3tRpyDqyy7eMccenUtJZB9WshGwHkuXXHUjsHa6q6Nkxk6Fyxd2nGJLJPgc4oNPPWuCJ7nHZ1auGHxXr",
  "key24": "3sS4bJE3Jet6moSfMng21PHVxJuYaTSzRk8Djv19TVo7JEjYvbdRnCnWWGzHTEhZM5sAEvbM6XhhYf5CffXZe8HF",
  "key25": "621r6Y5SG6Wc3Euohth2YJnDXbmKj7s9VPb5SLFHQicfY4tpCiSut31MFixxn2t9Rt5mVkex8vWJ2XbRpf2pionf",
  "key26": "24r2EDRCTLYjoJ548abXEcNFDa6PGavkhKCBkCPiEfQWypKzCW2Cny6LNkErc9zQ88m5K47mwJHJ2xpabrxjE61c",
  "key27": "35tWvL75jXvpB49brThpTCk951HURFNRVxAEkvVbxLQZ8Ev3wQzAWUUsawNYojMMSMMVonnRdT1ndjZWf6hyZxaR",
  "key28": "4tBeJnH27UhFmUfYNMAwo4EMeBqBE1zFiMrTfgKdsag9fVbFnq1g5kpyR1xD8DeDd4yE3uTHGXbziDkaXAGh4VRV",
  "key29": "5UgqMsT1kzKtdb3x4HMvQ2jwXZ3bdUZSZXqtTy33CxL4hPByTAWtWLv2PrbWWDZun2N4H3YH4pEcXE7ehVxQag6w",
  "key30": "4tzBgFKuhCr18obEu6Dc5dguumkcY5WmH4HUqGeHdS5V6eTdnJdkWyHJVxRtfUFymx25zqaLF2iCh1mXj1AisNB5",
  "key31": "28KozGvm3MMsMSfrfXMXpUYJoZe3Q2owDB7p8sA6EqkBLB4VTp8Lwgikk1X9EFnS6vCVFtYFwNzkMChR6Xe8pTfB",
  "key32": "2krExbF5c6BzgkfUry6NHUGuvQGKiJse2Cm8ahYW6X9qFHmJu3eNTmjNKPdgkWffaL7Ze4YejLmyzYhFedQ1rjpw",
  "key33": "te6ZHBoWzRrBoaXwJbUfPBuqtmNaNcP2x3Fi13LszDyVJ3j4x49fhaFhj2NhmaijnjfNSLZtwB2jbRWM6JaD3fa",
  "key34": "2moA7CGxPFSe4BdPTJBYRTN1Ge3E4LTUeLuFGYEWSE7zs49vCPUSas7jg692o9EPD8DE3ACEs3Mb4ixwGYkiLnnF",
  "key35": "35sUh2p6ApdtTTjfrDc2Pcr4UssAnnaq9hvuZfm1KRQmKnoGx25HaEzjm7vu6ujbg2YaaXbfyxxKEFhYs1buY12H",
  "key36": "3rZ4w4o3gmSoqstbq9dncpJoTXQMHwJuu1s7zqGG5K4BHSj3FgEVyVuLQ141WHb2XEKTyrN2Pbb4GRnqwkxyFxs4",
  "key37": "5EdC7rDnyLammdNansxRnip9Nf8xXHjeiQXC8P4bEstRupRDqvD2F9bPp1CwUSwu6cKh9Z3hcLGdtSLB1sGXod3D",
  "key38": "33YzDYdmeyfzUAKTc8BhrhpocqWAnwMnbDvBBH45Nw4Dgt7pQf8fuuw7ns3uMwAH1vxZjMkwfvagMDmw57RtWfQe",
  "key39": "4jtzqQTqkgZUWovfiAnsYrsvqUsafrTyV9nEzJcpGAbZQSHkL7vGpvvoyouja6NHZD2SfwAM2q15cgG62wvfT7BM",
  "key40": "2rNxvrBCrER3EbkX8ETFrbu8wcmEUuaR2z5gNMvRcbpE53k9CbL2h1QT6D871onhijVWzNpVBDnaNBK1knfudhL",
  "key41": "4nZ4cTQ1KSCyStN8jsArxtfKtHNkWwa316tQ9dVyoTqNyKHbS9rJ6hCr4GSjnrnmxpUACaueQyz3yQRFSLEVkZgF",
  "key42": "3yiPbBE4tqWE9YuWxhhMPA3wEum8cqEPJ5RWh8EMFkLxq2uCTFbZz1HsKNQ5M2w4w7NhaDgbnj34zSDTdows7Rda",
  "key43": "qe7yyv6UunnGmXr8gTeTpeP4oFBvVP1jDSdkZnkWdnBzmH3YrkuKpNv1w6JguYnrcbW43X1JTtfHjmZxmkMUUGS"
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
