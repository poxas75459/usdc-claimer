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
    "VTxKJbWrQUukf5GBjuvnw3rSZ1ZEqeFP8uVGkoF3JperWGbK3gxA1QWDM1uR5p5iKycGiXK4dPJ5ExxnWFZZiqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x7Nqis8dz4cXoqeuigrHkFCM5yiyiwr6xYJ5Eh4SiWiDzF1CJUqkQAnVb8E3SNsz9wUBKLUu4hUBjnCzP11ecpm",
  "key1": "2n61uKiNQ7NLHmPxA49q9pMX44rHLUFTrnFvUVttFSGhRt3DwtujJ48eg7pWx1qAydueQyzLq9A1UeYpPKnEjtQA",
  "key2": "5md4KiJBtpPfi6mzQYeif1Cn2ak5yyF4EqjaeKER81grcdAj3HN7m26tEJFDveL6USCNvxQ9nrk9hxhUUu91UUZn",
  "key3": "CX1DGHRqgzEA5RnXnvjsHTj1uB9LTEgj7DMHTybcCigmiJSgZL1Dod2AAAcV3t5uAhMiSmdh9cjWdJ3XmEMip5i",
  "key4": "6nWAtni4wLYRafj64MWruhW9cjaiwniQy6NbGihxEQRoqBvvLS84ysgbFp3VLnUpip3J9TUP8YoMXQbaF9qVt97",
  "key5": "3WMZFfJY1T1eqDvRBDh1rcSdsrNiQBuDrGjRiCJAFRDQ1SBn72yusrfsUxiZ1AmtkWKnEadAKCGdmdMyNqPsY2Df",
  "key6": "4CGbEBiZj2D5fTQA7pPUaHmwq4iqzHpLggUUcesTeXJQFvn8WsXoqgXUnVxndcewY2beaBJmP5d56mXAk8wpntY7",
  "key7": "2ZHSiyEMsoaVmacu37cD1QMtSKy8RLgjrcZPanih5TjCf7a3BiVGpe27wYizpSaj8FX2Svt27676CCmCLf54isy4",
  "key8": "2MrRmnod2g92oKPK1mEN398KtqyTWj78BXZYoAEmT6PnvShzVT8dfrxb3VnueVvTDEYqYPuSE12VH1kUkbn7z669",
  "key9": "2bWFoS4HXdr4MqoDZdx8K9thaV19sF8DkgoPqba2gyQEspxQinByNaKNitHzB8GhFWDv8zGgJEoLjZYmpVHGjc8i",
  "key10": "3CjS44XmwzmbjYiVLR3TcpVGnAJ8gLX2HXpvy65ZYbQea7zVtnZTbbsYH6A1qJpbMKMkNtdgg3X96XEKCg1TqQXD",
  "key11": "5DL8tgerFK9bwk3cA77XMU1aFcwk9zQRrFjyHicUqnJLbRx6CW7WieYikRSL9Xba2YfpS8HRs2fWnB7uXRK4e46Q",
  "key12": "4xVjFgMz1YbQrhbzdCZXr81pNiWoV4Q9SmrhgWNQQxbzxNMu6CeWifNU7659gEUqYMSYTw5F2oN6H8Y6V1KGmJdX",
  "key13": "2BTuK39xGdDthiR5HSkcsFHeUB6HyVoT8rzcEGigqBdPjqGFHwCSWw5MYZWLUcNZt4asQuXMV8hK6thAh49occ7Y",
  "key14": "48efNm2yCxPRrGzRLSWXr9hvGPxU118udzWkV2ZkjpNcPb9C2qQkmNwd3FAPUT7CN56naXJoM5vNWUfVdMsWhKdN",
  "key15": "osBmbeXPicG5af6UyJra8ck89PXGCUvy9nwNDqxfHUr6mnyFuW68FA5uqwdFfQhY13UATEzb1fRQEosUFJg8Cw8",
  "key16": "4JMSUdZq3KzJQiqZZsGryA7M7Em2mMZEbgBw9953bsEy2wrT5Sp4D1id1GnqcMtSLaPrfMXmMMTVn2GffVavH1ce",
  "key17": "r9CiQXy3tE3V8vf6FSqwStVeASUgG4MoceJfZ1giQRpF1NmY1kVDDCSFMwkH8ccNDPfmtp1MJL7GPD1fQSUhn2b",
  "key18": "4zWtwJq8Sd8Y9EgogDaGiYru2bWHXVGiRJQR2Je1cgBFj7ARr3Fvzh6FqjW4raSew4ak6BDtLDNibvCZPxoU1Kg9",
  "key19": "4DGgCGM5cnDQwRKjdtJVfwnzqnaH4YC2hzvwC3iVY8BsPaC1AnAgdLyEhEmvY7YY7rvafrJnjTE8BCfdiL2rDcKd",
  "key20": "22mmXZfVew2mibaYvWpec68nJSiKmRqmib9BBJRqh1ZdJA8SXSh82yfBax1vSh9v67JLciaNfUyPDMUf9sMdRK1f",
  "key21": "5yT83uX48iCnoxhk8KrvnDSjCN7iQERd6HesP2pLo7cxVGhXpM1f12MJJ9eHTEAByCz46RP1DMhrqXQWM3L1n1qj",
  "key22": "3bUDe73AhC37VFPATZxQ4aMdkFtpf4i61AMq43fNVC8asbopPBaNK5jbL3bZXtjmprRmqsCQE7i8sHQcM1uEz7W",
  "key23": "2JXC1U1SzDqWGDb4hpGzGfQg1dDs9CA1H4juMzbm8Dh2xoppcZatiiFHCrdX29zRASJdkp9XfTYCryut5f2ZYo2Y",
  "key24": "2v3xnzpyJtLbGiceNFjSNq6Cc9tB8MbCFPyK19tnWrAfkSNWLSg8mza1jSDGFT63dB3icEFyudX48QfeBiRA2F8y",
  "key25": "fnYskcuqEwmmFfL27UY9VnCvhiwf847mtK9Ek7WFep73Umx5AYoR5bQ8KTDyYVxYoDTGd2ZSRHiujtxEi5Vx1Rk",
  "key26": "no34cXbKCbjp3mcau78wVmtizKadJBzAp4m3bjbmCn2nUeMiTuL9WwffDU9vg1sarxFjqJRrHoThwcRLch4TWDa",
  "key27": "4n5UVWdaSUdEf48Wncm4wGyP5sNFUrQkPjtag4MyrRUoM5zjw9mq6grgjVLJgpH93uqA5MTgrC2r3kpMgdaTRduG",
  "key28": "24W1NjQWMySzqJqdBaKMGkJV8p49cxyXCAunbr3tvw8cUYCskVbs5qAuqBkuy4XXN4h1pLQuMyxR5CdZUHrtgvQV",
  "key29": "3Vjmze7AXTaz2PzVm6ryErBVePdGZ1E7Nd2E4D4iyAXRF8iemC9QUKJWCp618V5QNgV6hUdZo3hCoZbvZZE8X8Ky",
  "key30": "43T4J9dh9eiVJUhyYJY7s7wnBGbyoa5Dub5LbGNbLz3M9pJhwzzb7Bdx9ne3XNXkdn5SJYDRTbyAp8Zty9YCYNAF",
  "key31": "36idiFrwMLikuwpfucs93adSo69xMSvsS5V8FpP69gzt5N7H7jmo3194k97dMvjK8WgVShC5FqmjWLQouXsPGvSM",
  "key32": "3yEV7d4eVkGPHehBU87Bchr8qta5rDra91RM2dE6FUaxeTBuqihitgxNbWmSPMHDAJxDnYRqxaWd2jBkh295Woiy",
  "key33": "458sWNMSGUYRxQBRdza7dtX3D4Ssyz99LNcjzvnn4jQkhTcptmtRXUYoicVmLCeBKcWaXoUKo8fGdxHNHgMGR73X",
  "key34": "UXd6jM37kchYWu9an7r3GddNoJEgVnKvcreeChzFRA17uFd6tQtQNmQ2gyM3DCQZJTL7Qx2bZbW2YeZiEeLjwiH",
  "key35": "37npba9YQajjREtdyTF7RwgxQdKgfq5qqdGKtjRvccyVW2XvHcYpUE7XUJC9U9SibZWT41uEUh1rqEXdZS9QrgnB",
  "key36": "4vziTz64KCNKagK42PQzR9hMHTBeC5LCpD5mWdRAvjR6yYfhsnuFRPy7nHPNBKAsUJBXubAaLeAVRwFEgmCHWm9a",
  "key37": "4KCincJXGLpiVtfQPLyPADu3dobNRYfVozh1kLRZ4RAnqrAnnpLgX7tJYVkXNLwEsVNYC5pWyNvnyamAqbvPo2bE",
  "key38": "BwR5ZFkJ5ATF95n7zMvkfMcobUeEbSAAyxUhjZcEJqYjWhb4Mx5maJq2CMp2X227NyTaHh5znUCaBU4XWuaF3Sx",
  "key39": "2jgPTpLpqodQL3H8TdcUfSFPAcib2VR8LFGXismXHD7FdekrjdtRwHMHePpCWaH9KDKvGmVez2HTnqFDSkw7Tcv4",
  "key40": "EcZnA1D8JQF8tGdL37o1BRADV3RCLttfQayfrY21eoPoPY6uMZLh9SvRj23ETamod5s3Yqz6xzFhvP3JBwzdS61",
  "key41": "LbrsjofEXj1MKu3X6GGgrooES8A5UUHVczGbvfPKRj6fp91UNTkfhCyqocsrd9cpqmhxYd1ueLDWBUgs7aeUJ18",
  "key42": "5jYW8Xfn3RsaENDdR6NtVH3RNgZgzGjfXo2XjonXs2fBjrnmr8vVqNYNgXsMRnZc8HHcHcDLoqC2pJBvV4sW7Y6Z",
  "key43": "5DPyJwB2D1Bue2z66ncZH7LNcivcqpCaxpDsEuSrLHu8zcdFEKdjezj9nDR3LXP2V3hEGwQBuSgF74PdtYpT26jC",
  "key44": "2kMVcD6kwQyKYoqJya3Kq2eC4g3ygzmHcrZxevCKrLFyvszPzDXBt4ENicEMzYr4XxXLL5grzmuwy5kG81c7CNr",
  "key45": "Sx3wFNYhbHktw5xr5UiBkLu5GiBWzc8skXMfzRR5UFx4TF8L6DGp6wpozAkKHxMEjW9CbCeAUQSM6MG9dCSxhXk",
  "key46": "vAQEaurn1ndWmuUJV9PjDheaXKfY2yPrPfYVYULm7s9XPwLCYUUX4e5fKzpSBPZxxuY6BsM6pkPYw4qTFuVuQXs",
  "key47": "5Lc4fmS4V7eRUc74uJeR5LNtrto2aNkYwAdKsr9JsEPNM5LAw9pRroqsUPjDUqGfJYFcL9fiYugFnaTokAY5f5wa"
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
