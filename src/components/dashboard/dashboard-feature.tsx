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
    "iKbnH4aXtewsWKg6WE63EXx9r7uhFsbpVbFscCbcxyq4hUG8Cy6vh2kh57qiiaSCCyHQHcbU8DNBQyesVpd67k5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B1ARLYXDpxzexrKKcbosjTNUikoXnJXZ6GjHMH9KRNoRtoGaVgY8LruprsQfqxWBXqrXKeLEfYbbVsw69yLMsgw",
  "key1": "2N1DhtRyLjVkW4jrbRjgiZEVAmtwjpCnhaPxNC6DGF2vJTWfd4rVMwj6TThtmjghHpG6pbt7TyXhceWRvGNevDZt",
  "key2": "DbAFAgsHHskTVyaiUk4ZCBh5pXi133ERXuDySKtB2jZBrzauX4LiLUdgDC8FTSR1CG9sDDDvz8o6FTyYtmkULd4",
  "key3": "35UX2uLb9GkojoUzy34Yrcpia1JZTFV8sjKmjLADUntPbYUC3DWChWgCGjEmNRsJg1Khi7nSscoB9of84JHPKfCb",
  "key4": "5TyVUv953BrzCEEvzGibgk9HHGauyvSBk8QCJxKpk4xnm6cLpfNupnr5igFZtt6vTrHBiezkT6UpBr3pzk1UsHoq",
  "key5": "2VGtrnDK2Jb646mm4bxvLuPBrP5hh1j78Lk8eGaQdb6cqrdiB1cyW6q5kMBmt8zHEbxps7MDnzpT7FjkaS5MXgXR",
  "key6": "sAZbfN3JJTwthksVmEKZhcv5R4cgkecqRwpEdxvcM9Vm7wipyR7memJfbxuatvwMhuS4BviniZCbB9sKnYhSwgG",
  "key7": "61eDwEUVvw3JbFHT4cWvpuV3LV9svfnRXvxyX5nctAhc2cUcrSCcpwNwEXb71MCtJ6mLjumCtLnRRYTcJBbRt6Pk",
  "key8": "TeF4M4ci39rCgMULtcVHke7RxmD7t2DC9jau3xhLeLZQZQxC1rgMV8sVFudkBkA77r9p3f5mQtfMwz8H7REdWF8",
  "key9": "64Df5AfsMKxBPiqi5JnLu4XEgPpHEBkLfZHQvnsKD3ipsSancqeoUqyuUNwgv5hhUrATUpM7MhnUwUhbVUq4Xpqo",
  "key10": "7MwubEoQfS3wAopKNVc8DSwdGS9b5VGSFeevfAfqpyPrFaXX5UbX2nYnCv1dZAYEqiZMYHx4ki9vA5XFMrRTSGy",
  "key11": "V37AgxHt9EXpHWWSCPUNcTyFXEREVwKPmta9jjTaEjFsHmFA4u6okA2Ln5aQr5wVKbyKpXZVF9fMTbXso7o74B1",
  "key12": "51fKJNN5S4dRp3e3ue767Aqyfa7ifpZ65T8SM8q5YKMhcweRRTwVqncTG2xg4E8aVzjSEQoUWhijgiKX6dJGgsJw",
  "key13": "4hk2328mJ45yTSZMk72WBqpGMuMuJxWt4DLAERp57vUjQXtUMrjppe7t8jK6pkNQYzWxvVn8vp8A6Z2oNKtNHYjD",
  "key14": "3UtYrZTKsabGv7XFqw9k9qn3qUZpHbpaATiJkAtRuRsJoN4nwJLjAgh9z3EGFmHj9hisEbpyDdYZBKWtdSmjmipj",
  "key15": "4ZbRkcMDTcH1Z7hdF2tid6YVuuTWZYSn6Aej1axHs4PCdSDKx5NmYJJG5z2uQDGX6ZApgpJrunqu9VwETYhCiP5D",
  "key16": "6768wmL6qxtncNGGEaqscQ1EnkfckUBp6eXqdYvigquNciujP99Mw3aWVfrdJmpNWUe7JSmKpmXQb5e2SyB6jpkz",
  "key17": "2MdZTSGistj3fFECZ8Lajd2NzwGre6SLX6nRCTx7NPWTc4kmpjzDNZ7CHHz1nL6YXFUnU78WTnD5SoQmaf9dc9z4",
  "key18": "62v7uggHas8zMyGsKHLFwSMUo5DLq3zkQZUyiEbN8Wzre4g97UcQ17WDCdffFH8wzf7Zq8GVTjwgHH8eV7ncXtuK",
  "key19": "ZwTJkGgUST7UbL9yaJ2v7rub6CrtqqekQUuvvKaFadcAJYxnx8CjGivp76acMVd4pNpzVXw1MrfpZweNnQvTgwq",
  "key20": "xyAcpcmW1UMcsAhSzL46Dm2QxRVZcQGrSjvdNcmiuK6tXNihZhBdbnGitAaQiBBo2pBb4aFibhrV1Su8HaQs8D8",
  "key21": "5YpEpwHdkyFV9yQ4ovaE1PS7tJYtY4vKrFo3iZXFrMitj7M2y9N8Q3qHtXVVx6tS5XBiM9WMpPBre3KQQ78bQbDB",
  "key22": "5SBd8czQ8zf5etkNVDYXX6VPmde5kGvnikFuNkUQpn7qATYSDCJebSVCqcNsRhywY6UvXyyypWxAew7hxz8TbNmf",
  "key23": "2xLjRU7xQHbLDKonGUczBr2MzpWUr7rkzQ45KMDZPUgJ4Lg1RWCbuKiXXTAw7ADvTURFUWShAe7XjHtLg6FhZyjk",
  "key24": "5y5vpP8hpYLpD8LZ2M9UCCEk6YaC8E4DLntwHJ72VSAdPCMmZeDqd9mY6coMybin2U5ai6jiQQVov2RZ6eJ4HfeH",
  "key25": "2hAhueCoEjoBrxF9phdFyZWDuEsBgYX79rmidCWNBYiiusXMQrbUFws2kHzrFm27uxyCPdqNbc1Xvk5yU2YpJ5Lr",
  "key26": "gtCyYbr1G6jVWDhFd45sibPuTdrfs7xH5Eo8UXcj992855GgizbdRE8ZdjpTify4ve9Mnt5hBRbduvKtwqfZRTR",
  "key27": "5awAmkUiM44o4W5jbQiCdq3TpqLGBYoeEApk9mqAe3NzPChsuBKRJRCmEeq2V8Z8Ww1rPKAwX7yXGWVEdwpc4EaB",
  "key28": "3Gn6BofDiQq7t2eJH4oAjqjJpt4EHkWLpNAvESzfeVEg7vvC32BWvKJigqiDFiqh8YpEPxuZZReCcrKetGJizVGV",
  "key29": "5USwb3iXVaAp8Nkdu87ET8nnuBZi4AL78JmcUAoC9ze1j6WRf1Ve7eamzCrjmoQ4YQf9z9akdHv2rUgVy4rqxh86",
  "key30": "5NjjBST146xgpTxbmiAYDBTvRyjhxoC5To8VJcm9YFVXxVDgLtx8zCvHTDFvAeSVYs2kX1hZm5FrooYJSbj1PuqR",
  "key31": "kGyT65zB6TnbZDfqMYLDkwBrWNjEzR8nou7rbLd6aUjSx6ALTAGCLXTkpSFjG7vS7QXiR49EMMDHFX7CUi7zExA"
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
