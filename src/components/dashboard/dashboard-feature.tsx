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
    "5dqpwkuXQ6tQCf4KNgDtRnd5QtLX4GQ2r9hEB6XCAV6eV91TzJD89oFFAActpF5Z8NReNyd2rejn7gZg8QkZQrEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Yze26UzAVhxqQfXkB5aP9Z5wD1cTCWJkuSRr8cB95jykrFfa3mii9udsGfMNJzjnexFZBJQ9m8gJ6X1rpvTKEV",
  "key1": "2mDKjLsCBXgwXx9bsofaPKHGjtCnzH5evg7NFkmHn4o77LrrMGG6DcxhUWQqSJjQXPMib5c2CSxGPaCM4hsMt3q1",
  "key2": "4PaxHViwCCfrgBzPTU7rdEbrxwnAFzNmxkTRTsxwv7KtZH3BsnCPSZErzUg34cZV9MuedBALMSRhSb4NFoVuYDGd",
  "key3": "4U7zGrDsLYyBUTVgV5SGj1exMCERTNE6gUoXCZ19rXW7jr9XZiSZ2aHyGyV9PBykE6WspMfA6AhtnivPGUvk8Xpw",
  "key4": "35Vj6DGms6LVpp3ya71dd7euefUbvM9QVfEgF1cFRvbjXH8q5FtKXDBizg4qb2KSWN5wiF6oKMFqWNbxKRLdoZEG",
  "key5": "3uwp6S2nDo2T7KRpBmjLgyJ9aMUNjVWYEDFpYsxGD7xtPWrqq6zwdcRv2VK1bTfVJjtPukqucXAyxRCc8fLYNn52",
  "key6": "3qWfPPstL7hKqT7pCrXxqq7ZsGxPp7Uooyd1P3Betowb9nUeioAE2tmTXeayXUCh49LqGfyW8THHfj6MbxkTqCTu",
  "key7": "4PvkYMfPkTVuoFU7q1k8pwHZiB2d1qHXC1zyMN6yvcfueufaovq99cypiggqXMELWXctVRG3LMY9V97GsbneazMJ",
  "key8": "26fLC2HD1wWRkv2grNhmjez32zeCGbonmGP4TXCTLKysesd5dqvnQ59JkShsLMfJCYHysNWDE6FVMHecMTzQMu6S",
  "key9": "5BDR1mZB7SZL9daDKsxyQqejZfgCoQHE6utqk9JHqvVZxgCKhkwhrzpvivm7pHQK2JCmdCs8wB8dTDJyYdGs3rEZ",
  "key10": "5D88w96VzgiUAVKjkDbFnZnkdjuGAYDc2bj2vgjo2NK2rHwEBdL4X1Zj5NoN9ejeLFnjTWGdG69o7FL8Qnipuu3m",
  "key11": "3KETzRXHk4DYLbgaQXGUYFDrPF9BTUV6Xto6LiSAB7diqku1RA9kNStqruZon97x5ZuZ4oQebF13z4vkFZnPahmd",
  "key12": "rs8HrMawcMGyscRMSEF5kAVychf7zLUfzr4zRw3LnXTKG4qWHYXhLB42p56aV5F67ULhfWVyYrsRRqZXSVRebhw",
  "key13": "YZyKP9veK9TZ3VXPBexUEfvX46t4q9CfA3ENs3GfoFTHaQz74v3ow383PN7cspUssuj8Nu4WBXP3P4uEESUyvVa",
  "key14": "2kT42iRyk7ECtTmp4jZgzyBTuTJjrVo1PM8M3pSiYLc23SXVjBcb8Qo67jkZE7uj8nt85oKjnLcgWUybaPmRZnZo",
  "key15": "qSjdrGu8BjVjg5pEUzPKTTafT4gpi1TWaeVWd68MUdvUSh4HzkrXgBh2w8ux5wYJdJJ8tE4km1yZ4UE4JFGtBQt",
  "key16": "jtcPQfa2PPNBxB5pW5sL4rYotFRgqWfoj4gbsg5dAyrFzqbUVuhjMmrmr8M8sV7KtCyPnvYUnwQxJE5qRFgSgQb",
  "key17": "4rT8nSuPr5imLuKhB5FkhfcHDr1v4KuLjMUoDU4chCpdjfm11eiFa7apq3dnpQDMD5ThkpZ8RL6byqhn3BYSHEfi",
  "key18": "4r3zk44eu9BTHnSKsw3msbrrtsSxtNAByBgt8fw7FvZ6ZAh5DdN4ztakknpxDWoQ93moATzhWXhmwZwKAXRHUvFn",
  "key19": "hojdVqJBCxSwjzLEpqEjm2q6kKmRqftPrw5ikV6165PGfvYHwtj6y8U4RgLngKnW3j5DNvxXCkL2G7X4DF3JSo9",
  "key20": "3UA41d1nLFSEs61xpLjuzwLHtmagTxGSgTxHNjUvieRrnZr8iME2VC5o9t9Xou9VmN7ytY8sgtgXyNWJXvnyNhxU",
  "key21": "3aseyXLNDda9NhGWGz2QjUZVKKTMZXaT6TD8vUv1qHSfWTqEcmU8bYUoe3LB5sufjUJaZFtFRPbEyE1ujPhWjUgu",
  "key22": "GbFdHGb9XshhJ5WFD6YMxGoZocXVm4wfRszb6KPr3zU7JLxzvYNFqNtxYR84qvQcG5LVeppF1L81d777xrK8ozK",
  "key23": "3WrwFZbx2mWUfuE4X7XLqdeDxHwHh6s77iYgmWPHUazorQqcrWBQToWDyM5A8GLcQmzUHzJ6yYb45Wu7yMQQBhj",
  "key24": "47f5H6Avace31MnyAfRzKqjVF23nDMzvAUBgCdNi9BFRDggFmnjUsHrrsxsFgrEmxzp2ARFChNx7RELMZNP4brF5",
  "key25": "5xeDvyKyNQi75X79zkRSB9YraQfjEMHe1MiZMTgs3mb1wLBAVeNozKK17RciGQfmFvYj5ZBXUzyP2eHfMAYoTVrT",
  "key26": "5RLohBtNqr2yPfZe7cg2vZx4vBx3pL8GHpyR1qYBjqihWgWn47bPKSopBuAcu6HEvqB6mkGrKrmQUxv3AsBS3Gzo",
  "key27": "QqYkeqkxt9cPJV4suwdrKGtbx9YmvpWVsCpb1TWgUWgRJp7UMdeKbz5LNeGyx6E3nXEKCkH4YiV3H6gBWcgDmgD",
  "key28": "41Y5LXN5szK19Dd7TxuxRuin5vfGmDarSSiaCXQBLx7QoqGhbZ31Wh1kDvzVm6StT7S9rpLs564HAHqQLAeo1png",
  "key29": "m8rv8TXF4b2bwMYyr8zZxtz1ngBcm54zw7qtnbxU6R7mkhcH7LicHM5KeoNdKgV3e3Ub843TaNkTBBBCkm3oxm7",
  "key30": "2rnNYi3qMca8ouXEgvcZpmAVg5XWQTnjAEZ9vhFyEzq4qCGW7sdHReiCaZ9eAJWWM2HidKpaRVWzSMdKskHegZ3t",
  "key31": "3H6R7WAE8bMMZgJbPY6fMkMFi2DUAfu43dT8pmfbsCexHMimtq7VKSqv4Hnwitud16F1hikpJRBH18z8WEFvuaxV",
  "key32": "2YFxSGoLV5NcWimjEqsAc9Tvw7ygQEqVayjyY2jabxPQKR4ULr9Y7fdp7as3VZam5NP6bCjD2hueY1DAanjMgA7",
  "key33": "4DLKiSxewnMV3AoTC2BXFEGgn5jomEP8xcqLXCZMghVWPbEQBBNwYCnbuYg8pgDc8m3LTsGyZBhBgtVWPvvGE5Zp",
  "key34": "jexjvF6FVMhREi2XU7BTkeiEuqUmm2Etk5AdY4aXZMhee1NaRmQwfqBaNYErLz4fQgGFaqSSGSYjybvzLC3SaNW",
  "key35": "3vErHYggTJxVUMSvq1aBdJngBUaF6RAoK7qip7LdjzNm9drSp5htz2V5XjVzzpXbhtMnUukTfdkcP6u3YKPR2wPg",
  "key36": "37dhBZzNiJJm8tgAR1bqsWh7rVxWQQ23eia4qaMrUNFFYCW9HzC1yHHKHhnTfvwTzDTXyQFJEjT4kPJuFNkoNqJ",
  "key37": "33m9Bau5sC9FMBEG9QrDbcDn3413JSnxF1hRGp6B3vyPPiE5uHJVmUJsqhFRhPQvoVfccHJtt97fWhsVWMQHVGb6",
  "key38": "426VPnLjW5Le2EHZWRadfzHJhWP1Fd5HFK6y5Q9RgPqXim2U9kykTvdX7NTroBFWd956xYX8isgnJjLQHjdWFCrU",
  "key39": "3ftHaHYWQNCAkLUfiMQVtBmyUx67HvWPHiTs9qhQ4TWr5fG2dJG4eUiT5egrGLLhgHMo9ZecqsNLUCkVTodCGKzr",
  "key40": "5E1sYJNZwD48vJCYkxaCGzP6ZdZywBAipKPR2JEghSLkfR3vGoCvC91vSdnPiAFvBv2UYkZKcPon32hGnx4aLzjr",
  "key41": "5YdqQLcuZn8PcHq3u7pniYe3CmeyYmK5AyN96yMJdsmMTTvXSPASSWsDvkpLs5KWCojZHFyJZLHy14KiDbXZnrSW",
  "key42": "3Bbah2PAidDumtqTZKU2drZQeBBMcwHh9h5GeJumC1SbzuBzsjTCt4eN2V8tzurrZ2dAoEoqb8Yc8owcP6gAxLcC"
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
