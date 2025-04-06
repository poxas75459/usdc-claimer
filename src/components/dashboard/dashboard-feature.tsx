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
    "CpYzk97QaV4S4eUhX1kirEc32BMw2aQFCjev7yTcCiDN5AH1bvgBQ416gSdq9ccf3BETaFa9f3vDvyZvoAtRmZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oey2e7LbitUUW3dVcSc72EKf1GoWvrBRNZcHGW9BKVLRA3hWbMxAmdSvcL35Zybd9EstMoXQkinJevG9csn3W5b",
  "key1": "BnT63DkfyGJFa89APBqUC3q9jjFbdpQYYHkYdQ2LFj5kHyguU87uK2qGevCH6wqQz3iebKaBHTnRNJ7mMUTdjEn",
  "key2": "3UY5pL7pLAs1wxE21DAoyXEnrxRVT16qFkzAapNwrh6MsPhVTTS9syvZRrv3kCXd1vfs7YLouMiFBe5DnLNkv2Gw",
  "key3": "58D63xWcNaDmSv3bSFoLr3rifGFgf6aUAfHaenbEe4QhxeZNseFhqkGE1Wkzyq8JGMvE7ppop5o5ujcU5XNSpohU",
  "key4": "3C5h36dNzkexNcmiY5LDxypTyNccrgzKpnjHJEfLb1o9TY3f7ixbxJkR112E65PEtpRqLhcTF3gMcutoVKdae3bR",
  "key5": "Jfmnctuf1tuicYcpWbekG6iCRwqHzkB433cJ1v4oLvQskFZBz4YSN1mQWqfvJmSH2bVA5Snc5bYE3ipokNePyw4",
  "key6": "2RipqsZKxRCd1L3A4BiuTZY8DFp8MdHcuBy7xvm72KJP16CKfKyac57notynYJzfX3SKnnXBk5a6q99TESnkir8y",
  "key7": "4cvEC8fHPuypzRvpWTaLFjyE9sze5VTCAnsGQopXfkzJfg3FcVCFD5yFRiAMvr6kEXkwVZnmRMGsAWLm7G5csG9h",
  "key8": "3FauycxV2nJamCVgLGW9fiVevkBiKmqEWfujocGRpJmo27AodUnc7hCPF8ZFs5noS9M4Ar5x2dG2Zo5b9N4hdXrc",
  "key9": "4WLV1nyJmAivRaZdjgiHWiuPMP8ZXXbUWybnW2e4CYsRUMwjrrLvq8E63bkcYcyZQeRaXzopWRMM3bLh6kueBfcT",
  "key10": "3i1WmmyqdxzvYwZQRE5XxnvvPsCzJoyvFtTDUAE6TntWCQTv84Yg8dhiMdiTPBikESzKqPzts19ZAy67qTpNcmNo",
  "key11": "3kXeh35QT1MqEpfChu2GppfbE59ooJwW1bhCZk2BHVWFvnN2srVwLF7pEmVK3ccPDC6Qe68PFqEox9qq8jF5JdAA",
  "key12": "34MopQExpkjvK11Tn9zUPdgbMsqnftjRR1TyaRChovavAaHSgyahQunRDpHnbsfceV8ExDoAvt2zTDfCsGkV3ZJr",
  "key13": "4geQiwW9ebTwFH4dB5v579mzktFsoQkkeTz6zT92LYB1yMz1qAqnFQtjvgLySYrU7fmajKGUhaGcDAPmVu8Jg2cs",
  "key14": "cFuSkVuY3jsRw3XengWdad6DPb8RU4KgyvSLnAgcmVFxG13vieJqi8SM7HPhW2vQ2NHfFYC6aVkeb4URQizeQJ1",
  "key15": "mJCoWv5zdfedt9AZqAX8jttt7mdMV3878AK7DWxFv2mTeqNvef4spUTnUYSeRcoDe7a3tsRftVk8bgaULXSQMUQ",
  "key16": "3EvTp4Dmm8nyuSLtsH1sr4czfAgJqLn8SAWjPkyDEhr4xLNDMGd1mTLC1sRWnYtmg34bnxgFi3jX95n9dLdUx8ve",
  "key17": "5rwT1ZLNWsq7Nu7oyiqPZJd8GYLQFzBfkP9wDexBmXTushpVZaV6DtgeusR2HUqqxQEYcnL36n6Wsee78ArTpd2A",
  "key18": "hgjJbQnFUxQAUvjwgUXn6m6t88XaqrG5bTkqU3Aaso9HRvesh6WV9GTDUZx318awpjvaLMmtKKuceE3PmPuZTKL",
  "key19": "5E7eujjnD9MvupfAeiXcJuPF9Qr6nEyTnQLqFxGRRT5W3YXDGXAZvmK3rbJFFhzfy96EPrjezrwKmzmcDCjib1gT",
  "key20": "2ZcLo13g9dVgCmB3jFS8Gdu8BiEp7ShmCcfrxBdk9PDEAojqxXitSdajzQgoMnsq2cZHk7SxctBodjzsscquqtaN",
  "key21": "5UKWbAmcxMjNWUAd1RhdjHM6yGg2sFw97fjsTjNiwPcQckvA2SQpgryv1bik8zpA1w7RLdQQVdgaBCk32RAEaoSP",
  "key22": "2HKCD9JFwXtStMGepkJ4imX68p1o2RHNHU45ehmasCE24v9VFTR6vEHF6HfZDA5czdprfToFQVsmpa7F3sE2dTJX",
  "key23": "3oZ2tqBnkF25Zt2Ndc3jvh2fSdKy1LKdfZHQtw7Z51G3waMvAPnmcAc9rx5WzekYHdqmHczL8qgthiXBqZu4tqCn",
  "key24": "4pBKCDZ7RFkwcJMAbwJvmXCpQ3PVmYwhTBNsaWWotzayyop5ARZbtZtNJo2JykKahxH1HCoaHpt998rUdtHNi5xn",
  "key25": "3d84DVcYFoUXc2QT11BJFsZqypAKXc3cuoyAbCNgTXZDretLhenEM7xb2tVtdSVpqqEYN18YDcPu5kd746Gz2s2j",
  "key26": "2oXSoPzC4FXnHyq8Knw8VFNPE88C9ZELqYe8hhk3E2u42nyu6yx85hLLoMMxJ1whAQrkcP7E3VZGm72Ut5k1cGXX",
  "key27": "3ZDYybsVyMe5ET3X2xk6stZD1KVeqLnEwCQvHbdwfn1qgJVUSyapSu8yKwHCS3VJ6eiBAE41ztdMrTMcQgoLz9L7",
  "key28": "MQaHXz3uGKLojb6Tz1Zc3a2FSqUFZzhVprbAxpAhLo1iy97HLwRt6HSpkSM1FipQkpV7UMEfryjwSEKdPE7fPjN"
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
