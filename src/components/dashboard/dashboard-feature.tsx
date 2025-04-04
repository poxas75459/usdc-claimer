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
    "2BqvrRbUvsGgqLLEWec4Xh5UMQBc6oMgHykVqXdoHFHHfjvdrLTAnJpoJpJ51MseBFLrfocvAQZ3FLACDdss5cwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W9SRivUDvSkhKBYcPR1fZLdxfrs6PkPoec1pnHdDCuwtuTYyWa26cFqVDV4AhzPeSyykeRNiMqS8kuYrR819b2v",
  "key1": "3EF7dJxPG4c5qYLLFsf3UeXVN895hKmPnWHVVUwsaK9AjgSTRreTUkXEydAsty687bP2y84H8qTnNVkk2TQUH39",
  "key2": "3sztXK1PwAKxjyZ1CRkYD6Gq5yMLfFMLJE7AnBNPGAQZvT3F1U1eXYqTTDozZdUcjpxV4SKfBmQeBv7gY83BuSW",
  "key3": "3mTB2Z13FbRo5bbAPnpWBxrdVPnG2v5AKfkFWnKzWGcdy45bhnZtG7cTyjoiEnpcgz3WHY7EArnAfakpuxCMjq5H",
  "key4": "3FfjBudTsHLpBqWBe6NNyBXyn589mkVfPWwhcQ1geCtMyQfCmhUL43GN8sJnYUq24sBNrv3pPTumh8VFSQGoFgRA",
  "key5": "4FnXdLntDecqcg16tSR5kt5ZpfkEZQ53QCUhwnVqoAFeWFsCCGVQ9kwaSh7FvsmYQv5eHY4mcSNTSoqMsuoLer2z",
  "key6": "3wipVFGh6VUUqdQAzV2j6yk9bkzGP9Jg2zMqteAJhcf7Q2hTEDiMETPN99nB7a8DSHPr2j826reL2yss3WxvASqX",
  "key7": "DvS7UzyUi73mkUyAnnaHy2XakSu9EtZrf3UrYPLLANYragxCSBff2CPw8CE3LhWPYLhdu5Fhq9JwnictXVr5YYD",
  "key8": "67DHzPVbqRci423aQiXn2g4eRGzxT6u6pDqNEfx4t76fPAXdNTvnk1NED3L33HH33Bnzn74aYa89Lkw41mw5PEFk",
  "key9": "3SXxMj5cQSjak2WHt5EogBmVK1vwVur2Tvpv6Le5SWRTPaoCkhZnDoHV3X1jAd4VyaA1DwaRYWyzo34pETxzFht2",
  "key10": "5FruKMyB4ng8yJ9Gecqvt3TE3U5EcRryfd7nUzpS9ht4FhPhKVPkKJSzbhDZ2vUF7EKEwFnKMSFgagW1q8UGsTtm",
  "key11": "4wn4XAqpnTg4rGmW12deyryNoAEHHsTyo2cXDaavW3bG4stfLXjZx4mhifS1v6buG7hoCBMmd8d92UoQbqjfpWyW",
  "key12": "nffy844dPKPKengPfPJZmcqBu4pr4kxZNGbLBReFEjewcAEwwyapoEwW3KpNvHkd3qZRzTZvqt7bZnYEsXSzcx9",
  "key13": "4iMCbi7XufT1dpPYoHMzTRr1THqDdyLPn5if1Ye7FGpiPTg4Y4ZBNSCr84jykfvmtEcseYKUWntNJL3DxCsMcbnB",
  "key14": "3WXCSkTa5Ja9GH4WHdxo3V4ZHGUThjzj9eBmNpHBcuc1o4CZmMvTJJWr6EGYRLBbSdYYDrjptQeu9uVDkBW4ZK5W",
  "key15": "PotzFYCw8Dro1eoQk6e97Jh33TsGoEamwJyjpAb8jGTfWzKfkwTKjntjpgo3ujiQKX8fQsruNRdkg7sFYRvBuBE",
  "key16": "4WZurDv1shePpxErD42iSHsRNQoVRbb4aDHkjiUKg14Xamte66mMKDNCycrVhmCNUQaHR3yv4Ko9ATG3hnBatSvT",
  "key17": "4JJ35PMSK7Xs32dxL5Q28aQt3siBEZaMfCSVETFCqn81njHfLvpVpTa7dz8ff3DVtYUEQWZcUBynCMoAy5f9PqV6",
  "key18": "4qaekBoW2835ZisFvKh4fnorj7MFwLDCJuhDn3kFWqrZMDNyVpMp2xJWZu6BZiMN9cXFuvxetAwiCSVqSDCb9MiT",
  "key19": "65Jy2VaSdrJnXLB9w83EdWZKrJ7ueYWLcxXFeucvsQy6riUHAFiRAYuJbcG6rJ1uZbPg2aB2mv9mU9643tnVq3nn",
  "key20": "ZQn54FgbF6ehNjZR7D9jRGFWefgCjkuDrESnHZ2yyjvwAjQT4hfnuh9tcCrCXywgubg5xAfCYJrxyoxcYaSNpTP",
  "key21": "4Saj9wBomWu7286SnZQ7YbpiTgHHcgx5EM3i8MkY5ue1LzQCuA5NugWDFcj1isjLHuqGvLS1eX9LESgXjntxvgfw",
  "key22": "4QYtzEbSRcZWVhTiq1bPHABYZDJW6HXNcQ4kGNV5bZ78en3Yugux37UpvTygEPvCz2VUE1XJSVhn51JwW6qcG91D",
  "key23": "4rsonWZHktbYHJWkeRZHcBZrABrMN7FYB1i3YCmP6bXtDVfP2qEytFcKMBTpjviX6asQfBkNwZtQs6pAUB6cFGL4",
  "key24": "n2smbFPU79ZkU1qL9gLLQ9rUvUkJ8pSdHKXmD555pd53VJuNRK5Z2QhYAET5on4BXYSmLATmXFLehTEMMc8WCc7",
  "key25": "5ucwfua9V7LUnxGRAQmwSVU1TFLNoXTz8TzQHjoCL3R17BVwmUmX9KuKs62JwSPHLPZegkdTGDrhunUUqdnGBkhw",
  "key26": "JQaptwPLwHU5zpfBDa1GmA7JV1rwpAxtsJt5BJuHSsUehTJxzhXFiXipPSdvYFpxNEHLMRKP8B5oE2C9hVL1WmW",
  "key27": "2mNYZyoLgicB5LXBNv8bDBm6aYnGyvnTknR9ZFGhAL33pXwzahFeGq3s8bYiwAmHEMFhY6e69EXEUMk1CwtNvZaK",
  "key28": "5QLFQvQLvPGP7e4c747Bw8buTmAXJDn79zBCtVogpz7AFiP13Ts2YJuvuUmiaQhoCSLq9BT8tYGyaKkbcDPDa2Wu",
  "key29": "2SjUxtWRxfqVHQZYuH3x3DikpFGb15TpXAhaSwt9DV24rE6vhVjYfB6aH5wnRW1jCegZtj3GSekU7KoNLhJXZwVQ",
  "key30": "57sF41qAgdfh5rqq5GRdrAowqAEUFziShEuLemunHw3Gm6dQcQ7FWNwn6kHA1dtLkjqu57CwqPGzMYjrDCfL7WWS",
  "key31": "2ba9kDTsU7V3qtsJBBB8EqwWWUtCTnKc3tSWPZjLzuk1LBexfm6uxN9frwUb8i75Gxo2ndPZCFfGeSYr8X9uLQbQ",
  "key32": "4L17aPQz9E95DnnwJgHEQi56csPHHKKfPFGW1xTCjBKfQ2uoxTaQbxYGCJBMns3QuaWpYeLBg5a1E8Uam67jBLtU",
  "key33": "44TRVQgF6GE7HcAQjD7ngEJTFH9LEd1exWvT44GweCiS9JrjNvNG2Kka7aKsP4JG2GANGcZgBKbDm9ZbFKm7R3sG",
  "key34": "4MwBdmGhxu8jMx34FiZeVo78JVWoSJ6SZgPkU3Ru1s7aahorEoYto3UAJr4CAhpRUciP4WBaV7UguwvP6HdtBomS",
  "key35": "66gZThPyHYXFrd52ceShpzFkULDkh5fYb9ER4gueJoH3WrZZJSAVCD73yZqPvNFChRSya81CVADWUJkAmdanJtDA",
  "key36": "zP9brnjGTFJhk6aH7X3wyjXyW1Sfz9ac8gy5DcgeS5dQmLKUtLMwqvYxPop3HZ5o57sDnfv1iY7sGvbbGxRQqJW",
  "key37": "tcfgvLWK4X4xhn93LDvVkuF2K773cCuhQBrHz5RSyB2qs7PnniNan16F2dEAeSenCSbQkvG5GK8Wxet9e4dwY5s",
  "key38": "3Spp64zXN8QipSysjokf65LScTa5112DPshi3HhR7TrdctZ4ByuotH2AaupwDaGMiV6c2QEH3pSUrX4TKkrQrRNm",
  "key39": "5nnzdS6WVhN1EJHzFHmShejUFvEEhW8NzaXRQK3tb1y9zcZk7uWFhbYCue2EHeE62FbXWHpTaqn2ZyT72jDPBKoH",
  "key40": "kBs8CP4VpLEE3TYzZt3gssyvQuyizyAuibKNpogTDmEp3rvqJqnurDStCc2RaKY4SAa22sgY7aCG4n9h637b2pw",
  "key41": "3DoxTpDSN2jCHycbNNE3uUgfUvaSh5mggrAdAbmUAt3AE9wjtFEBrsLeKgCMPgAmky9xHXziQxpJEdF6W6VNZBVR",
  "key42": "4VC6JEDJV2HkhT4VqfXLc2MkGU7iUcY9C9GJSnbewAN78hJvMa5yXKYJYgKVyxwbvPdwghVqgA1YNwufNPXfeXEf"
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
