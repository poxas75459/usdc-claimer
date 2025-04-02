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
    "3sichtWkGzTsjS1iivVHB3X4Svi6gw9qpTnniadWmPgtsK3J7wy9APyRbvDHNm93NFBJwELVSpMhAV172gtckZ5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s3h6UJ2gPe96ouix1pSp5Fc2BbXZj11iiMTJCPriLrFGLXBXoyEcxb6EjqzCPyVLz8jHgwKssszhbitivT1caTF",
  "key1": "64VHZtKTv8YxLB2QkVBw8trHR2WwEY9yEmwTUr7daSdy8UUtdZqpCHCgufkeVfwzGUjL9uPVP1vGHRTY3R7xtdzC",
  "key2": "4Yh4bGpC7hQMggByifW9PtzAbmWRwfDfUBXqh95ttkgiL2W2oJirN6ttqzPXbNyUF74287NDQZyxL57efPA5B6Wv",
  "key3": "3Zfe7zxCv8r7kmHQF8pvKb36EW3J5cJjDSBiqy1Ac6yCfsvYZWiJ4ZJBdX3R7GHzVtTEKXFdnk6fvUD5tuvyLjRY",
  "key4": "55jxKf1LaAqZKDupTJA8fXjsk7KSpPAq8xfYRxjia1ijUNcDiD55ZSqyPx1AVtinh6GmfXdLKB69UcVLospDRAGo",
  "key5": "5LSU8r1uawLpTHW8XX5CtbwJF2jYWL9DEdUaeDnhfFTsTiqDU61yx6MEBBMvWBMWJK9pENGFokJPbY5PvtC68wbf",
  "key6": "2b2bA1BsdRNWuKRk8qZsmcn4J131C7UdojxDKtwyumSb1dxR8ZRsdfVPd7LU93gpmkDEVxofcsYfCTmrnyjspwNm",
  "key7": "5ZjPSaRtPmBjjerLwLLi3LPPeexWxfUNf6GgGpY5dD5zqYLNo7auckwZUjJKY7ddsFwmfAFwfQsY9kPQ1qj6jyor",
  "key8": "4eejkkEyEQCFG9c4WRa6Z6cR9LU91izYb2RSFFYNtM41TYU3JVXqJZF2ijUthKnVcRJq3MVoLPhS2Ud8gHFv3TT3",
  "key9": "3NVzMeXtA6gv8WqEmtCeUZMpLPK3CSn3WVE5vkPNd1Vmp5TdL6E662tGDR5bJcAuSCSK1F8EVHwp12YSh6pFjLpG",
  "key10": "5syPEYvWtYxKfsPxz8aKTfTBK21R7Su9p43J7Kezjb1HXrTbmQw6SFwFM3pzQ2J67JpFGA3Rv8STWNW596c8L8Nh",
  "key11": "2C2AM2buAW3KvD1vXAAmvuqpRXdYMsgDNfy9UTFetSeHeaYFhVbpiihVngud4suRk1eRSuWT99y1sWdc6cfSKkWj",
  "key12": "3mcFVX2kgt7PGHbko6wDj4AJ482xB84xLHVfzPs511apRf54AtBuPCn5DNMm2E3HVXAzzDwX7kz51psL1gT8cu1p",
  "key13": "4wNesbUhcq7wkcGujMZDEag8xsQXVdw5zgxLfEtZkAeHmCVLPgo4BX3boPxTCgdJji2ULgxswMG2VveU1sCHWXVq",
  "key14": "5ek5NPruaPujERntTVx887oL5UBfCbuhsiLKnNQ43bWxUyjDCq3FV7JAHBy9KJebrHAvPQ237qjzMqgpBESVNsXL",
  "key15": "4gH19z2Ezpg2oJeHusLvDbJkNJSbyhFBch4RQmMm3XPF7N2RXEppTxvtt57ouBWKfamJErbfmgpZh7Mz2pjn2g9W",
  "key16": "4BbYELneMG66Y8vSPmfBRXf4pKx9Rsw157nf2TSm5VXshRm8DGzfaa8dEF5UvUAs7zdV7MkyR5HpY9BqiBZGChBm",
  "key17": "3eKvc615z4VVAiRCYz1R65GKQT5UGm387UrM7pEjt5e5SmybrigPyYQSYTd9e9JoZFuGJiUy7yKtWQk1vx9JcVLd",
  "key18": "4hvWzKQZWJZXDy9sCaYEeyKzd9X51X5BY4e7mQgKK2vwDdNdW787v8FFMgZZr9p7xaexxnzXdvL5RBdtittoF28Q",
  "key19": "2DYYsvWiFxeiQx4QbCWA4hTetfK2jYU9BpFYvaMjxDJMeWBgK7TY2V1zATAHk3XMCE9ZHZtsdbvXq5hUPHuegMFP",
  "key20": "3itT5AWx1ozEZQJmseeey1965aLp348YTHxXF8Uv3qo7zdGwjPsAhMenXSeuWmqBCZLHDgVqVsnSYsKnhrD5MSRK",
  "key21": "2kGy1zwAgaVmazxN3o5ooH54NFtFokbYw7k9vXSKMHPAhZthYBx1uPGRbBpXWkgG5gHFuygmTXqPrLhEXoz69VzH",
  "key22": "3ra4xJBAEmyHXGdTLRq7D1Uos1LDaqUJjeQjkYLRSbZEycexQtzAkDe2ftBjCL2kipYneYHvWo1jYUKYbM25WbUz",
  "key23": "52wDCPY1LX6fNtXx9wqtaEtSF6WFpFL6VKasGnLuhoSwt44ap5XxoNWZqfbdfxQVD9LokrXjqQryc1ppiDDRMR4D",
  "key24": "3AFif4AJkzkwbXQVUAYnmSvDKrZGJtUGRU5XGVRc41sKRznYRYKpU6E4YA2iBbTCWNSd3pyLLMPijDT2dovGsvNX",
  "key25": "3zA71yPrbaStx26ieTsx9Aeyr99yzcvexz6AbnL6MTALhS7Yr1eZiipGxEUTb4fcyfMatypC4pdsFJbsTEZ4s39w",
  "key26": "4oVdxAopcBKvF24JhyhRmf9VNZeSWaKpuZs4NNoZgqzZ5yU3NLrhB2cLM3jZc9qXjiHwbt7nyUzDPnkZQiycpKMM",
  "key27": "3sxoP1XuNaG1QUiTHtTdMK4TRzQrKeQUQm38LVSx9GmU3KY4RYxMsEEy2rCGAZbNBE21w5nuew45JdoxUYz9dYt4",
  "key28": "4rzjcaLzKQi4SsDybkciUvfAic81hmAK91Szpyp68AcKGEzH4bce3gWFrZXPD37JeC1cwZbVVbiFe1oN5yMN7obQ",
  "key29": "wYVLZyg5uQBmUtHPRCsPNkSZ9LH4aTdR3W4mGZrwuUYUuDdgzgLCeyyB7YZkpvc1Cj1v1bQUU2bjVAnpVKAstbZ",
  "key30": "52YjvvLvTvHgu8vCq23gbL8bYuC2ckpdcT4GZKkkKeLXiBmEh1Mkr9KE7B8VtEvPp7CztyiN7MSFmG53e4rg8BfC",
  "key31": "4esZ1taN3f92Y3nP587JCfZdKE8As26SmsHW7kiz2Sanzwy5V1q5dzdKYkH1kCUyKRsvDg9PLFdYCAtPmsum9XRo",
  "key32": "2zv1xkPWSWTbEyZFtMqeWXaQjfAiFjdX6SkgQ3p6NBJtaB1PWwCNhGLviEPCokwMZXEB9kQtwnYX8934i8x9d1W2",
  "key33": "3dKD1V5Q1ehvraZvKybnnkz11KMaPzDGTXibwUDp1bkVjrpjxCUEgD82HSKuEwRtmLNaPc3c5a2SCXRo2TXckdeo",
  "key34": "PBxc7yMt5o71PDBcHudCoqNQJf7KN6y3TCDBXDxRXUBT4KzJfcAUeEJLwKrr3CFJ8DSNBMPZQZ1G8HjtrtwgnHW",
  "key35": "4YVnz8C4SjjSuBxjhTfGe39qEU5p1ij86c6YWqT73Weo8Fm6LFP4Gpe7MQCr2S3QkszedXP1AVFWrV445fKZVFsV",
  "key36": "HLRSFBeAHNEHpR7YfWSvFBGDc1z8Q1t6dYFhqUYNbCHN7EeH7FF4iYiEFf81G5fYYjkpR1MKbxnQRCQi5MTDwzN",
  "key37": "4yaCRuFh5A2ufuowJSZgs3KzH3kgUujxVrCQ6ZbTvrGqyoePJM1F3naUSkhgQKAMRKjPmT3JXuzsvTshttCvu1Fo",
  "key38": "3hVyhixRa5L2t16HN3b8GJezgAEWarvakC6mCYLtMexRziHvN8i1zPUfseNVtu9mvNybcdJDrfQbLs4Az4iNpTwm",
  "key39": "4E2uPNJxfMdVSssbKzxNmU58x2yEy1NyTHmcXkJ3dn6V6pa1jRvWnLZKkMqEpSTWb7irpXZx9eatc6Eauxvx9SdW",
  "key40": "5AQizW7eTsHpVRuGsuPfYSDi6Yv5rU1vsgDdoPFXwGZQz96GFhriZc4uFpFJuFx7Ec6hG9iUSszL3m5qoc9EQnpV"
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
