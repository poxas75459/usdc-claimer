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
    "3Hs8hnMdvV2nqR2DsToagFVpU17aqcmM2XSwnjopkczCr8xUxfTC2ediHu4gXLTYoKWtX1mRyAVmFBt6TBbEGvjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2awhkGN3dLcW13vPyn5FJ96gVW8oyaGenyvVWJACZ5KHH6Q7feV4stsimU2exRXmXmE5Xf4dWgLTKoMhSUh7ZoT6",
  "key1": "3cSidY9WvjnzUHJfX8TYcMm8iTqZuXYTjNupQoz8gE8i8DKqyGJnb2on3YnuDUrNAXcnqr4eayv2sm2JzPuXm2yi",
  "key2": "5KiceMHaoTMMVm6uGzAhQdSzoDfGhejJQBPGe5yW4zm5L5aKEnPDrTNLn2d42wkWqLYnWm6iEXCUvZNKSCsH3vgn",
  "key3": "5Zot9jhNUTzjGBzsS7j9rNeo5qjBp5bxFbPeLnKrdNChnK6TijXP5oQbqFkLjrMqC57yonYDnZEukiKcV3VwnYuY",
  "key4": "5sPWAwjozkCKVs6YRSsQv1x98RmEP6YEW2dmxZk895qvS9ZP4ggKNiXxF5BiA9MucCUMU9QuJWqDtN5ZMDUrbSEP",
  "key5": "vFmDfTMySbEg51MbsaF5PXwdmcipRftfX3Yiyi5hNzADgfy3i2u5YME7SHhrMJWpqt6XAkyPniic9VR1rvQriPm",
  "key6": "23skjZFsofp4ac2P14yvZTuy4MxQ5enwwkVv2cLb7Kz4TpuAkctCW7e4nXKTffJrmPR2xHWDBQjiMdtFLga9KjLB",
  "key7": "nNh5hZWzt4kJzD436AsCtiSMrbvHPF42FyrZm8ATxZ2NtCamftfKE1ryaCojPp8vSXj2rhkCC59ywD2H8NtBjp5",
  "key8": "3Phq9xTcwwnQHZq3AMXkvRfXKrwLwnUtmgz35yfVDZNBAMqwjpjM2qJmn6nZV8feu5d9HiAYAjJSTwdbek6ynjux",
  "key9": "4zSBQXsYnpKEaxrq8yeZajFvXgQPKpsKdm1816Wyo3qWp6Rqe5TpXa4mZVxYdAy1x1FN7opzSnWNc3eQ3zbrNhFE",
  "key10": "58ayVsjVGN1Tikkx1EEFkunDPc3iNVrGyrtgdMoJRK24xuPpPXtdehjH6DZUzEoBzpwHw33axBp3xBxfELKD3YJa",
  "key11": "4KpErj6PT943RBKPtA33qaQSci6cHua7fbFc4bGWd2Yr8YPkKQqP8etS1mRf9PVZ27u74zERs4nVJzkXRBi9pDvC",
  "key12": "45RRnjWLQUA4iFJ2Prk1sLdAupUD6C9tEsxJSxXVeXsanYfWnDiYetJYd4gCt2qZjBoajAH3ore7UiCp4smKtBmp",
  "key13": "4YcebBFm7Zz4ZuNT2ZRrJzsmJCkALNRuWXruzMbYo7yfmsuBfFhXDhZi3GL1Ed4kBSC4kmsabrHnJraFc9J1GdDE",
  "key14": "4WAbZon1yPe3Vfjn5868ajDFaJcnoFWqc1S48NMFmuSVDQgP9E1jMWNtcXzuG9GLVAvuFkf8mEUCAcsKdo9AdVMi",
  "key15": "31wHj17YEPPXF6WSxTrqP3DiHUS8SGv8qqfYnYQRn751dWgheNggSKLthspNVXRBBk87PJkDmqcHx2fkae3fwKeb",
  "key16": "5TCfPzcGf1vHYWT8wbpxGoVDgtoGKAizsLsrtFhUYqH3bFgnavXwG4JBCRaeRiNa3zdRMAq2KLrue69iTLGEoxRb",
  "key17": "4cxzZqM9c2oR1MFmp21hVNvbqkirpn2nsuZsuirPviDVxoqBrAVjUeRKzavy53srDFLj1VWQK2pjrCDAJByQjJZ2",
  "key18": "533yWvRz1J86GRh6BPw6pU64nQMVXpkFPYfy1nz4z6KxjHhQiRa9trRth1ANNdLwmY6X83XRHop9nqAJFJKTdn8e",
  "key19": "qwyWmV1S3TKV2yvzMxEdB6NJSrX5MXpGqDHLgQECTaDswps1MnJfdcsGtnNWBWzXiMm4p2c9Bie2N1j2tBuTcSt",
  "key20": "5qn7URkxbCvM3st2MtUJouyMxPHQSyE8RcRrmjEEakyJe9GXoKnSzqRj4UyTU2K9JunVxEXSNYbqTC9LmiuJRweJ",
  "key21": "5eAMD4DWLe2o3XUCauKLqh3FQ5AhqrQqDK9T6bisvkeRgXnQxLY2q3txDgMdb3HjQb87HpN9Cur1D5UbaGh26rNb",
  "key22": "3UFFyRJRJmjqGeZmmLn33pYQ8m4JCGMgsbmgFQfbA9N8d8246RqaRZecaiFjESouPidhcR8fq29q2dqTZiRTnFFK",
  "key23": "4jH3SN8So2Vh1j8aq1CJqe7yMDwAcD1d972FQEmFM2tZd1VpPZKhddNxKw69iQvzBN7tv2GNoKXis6f2Te3KWYtp",
  "key24": "39m1Hq244qpm9nkRDHuu2KPAfhRopCDMCnbKgXrC1n2wUHwZVTERSHTrmSFp6Mb9Wxpw8fn9vNCR5kwFTZZbuwWo",
  "key25": "29BCwqKzXxWnHQ1DEYnAWXE4N9GEXKhFKpAsxRVHexaUZKhAzUsDfeNPeMqt4icKng5F3CKc9ZmGxTjERWLosjSJ",
  "key26": "4uHk6YeuRDL8ZxGbebhmnVCYeyA5hsGYfYTY7umsyjf8d2gjgaXwSc98LdYgf3rQg52GHzAPfLc3r6YnCAWZ7YcK",
  "key27": "5AShTS2WnhgW5zQFcsDaC8hjTJfkiB8sSEohSPhzTqZw3TQLmysqpmVvfjks8ReACBVxJpXYvrhEaStYtePSPhYM",
  "key28": "3L9CnQtUPZnfp9PJ6bGdh6Mytx5dEyxjDKxha1CAdWp5BEztfB9ExFaKUg2pNM8GevyiPMZJVJikkA4aAKMCKA1m"
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
