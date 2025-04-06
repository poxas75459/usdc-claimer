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
    "33zHXfx4Mh3wsNJqBoQqrtWFYzutfzzGEKNhT7Ydr7Ucxqnnmbh3amwr7X5feGrVTMz7SJps7FU5rDPMDEhAMGq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FxTrvb6Y4Mc9nRzgodxUjcpYKBs8byFDBrDuukWNWxx89M2dFFcG4JzrSeQuJaJrgaf8rNeZvTWfNveZAC1kpV",
  "key1": "qfM8fcYMbNmGeGvbx1MfQEoobLQ1tq6CBro6LPCpzChZ4iZf16W5aEKRURnQGuLzTqzf97ciRGxNdCPkdot4vzN",
  "key2": "vLALWb8FMiKSUqn4EJpnoLCweuLzgqdWmBhZ3ty1hnVyskFaVeHmPjWzr3YcUAzzQwKgJjmcFaBpJVMpFyHZ4Ld",
  "key3": "56q9ebLeB2fcDK3gFXhof5YYTjdshWXmpCCri1rowHBXRB8NFSgSx8qnC1KEaKVLNGHk7unByhzYEcJWgmwB5z81",
  "key4": "AS2te1ZN9jqpXqK5hFLycQCyPBGUdBR7Gsk7XhitpP1ri7gVrtAhbgjUHBYvTq8vFUFusPfZefG32iwkoN1ktYj",
  "key5": "2PEiz3Lzg6tWR4oR6h2pGXisF4F7RdvJd2AkNbf5TX7whJhZuNdDSBSaZvEKJygkkj9HVVsrkbVeY9j3ktN9YhVT",
  "key6": "2jgfypzDZJeqQPwrv6JVpB82NT9Vef8bTfQu13NthPGgPJpquZ2rVep8FXxKLsWSSinWdKGJJtaFGzH3yJDf4xvC",
  "key7": "5u8ajKYj5RmaoCgyxDjps8GnWegZMFpQpmBTxV4mhZBLDVw2V2dSMpDsAVbfsG1SPrdeK72s1Py1Ph1RhR19gh5b",
  "key8": "29ViE1bXCsLNzT9pWHmAGXNy4DUiGmP8rsrxNUYJbyJq8muUAbUcEnsUArKHggVPhJF3efbFaJGspi22hXQv84RA",
  "key9": "2WQcx1xjZNJtvv8kx2cBumAWCTTwdAxNSTnne2dwnWzn65n6rU7Qvz9e1dz5BFttS6pTAZG37g6Kf2gQrfcNUVFm",
  "key10": "4G3eJajmLuo31s681y5MtNDGA37P1q5JBkZ12fycPAFqafnn8Ntw2xdMPhfF43Gxkv1pCnzrp1JoqMhnSPRB1RyL",
  "key11": "3mDLZ7P69HnA871VfK8FTWAsq6BLWeDCemYzTifXfoHTUBvigDGLscKM3VEr6EUSGEs9gATJq7yRWqs5tht9ZTgh",
  "key12": "4HM8WHmud2HT7fCbxqLCrenMGNBahakNCMaTGKTVp9ru7odFdoWNKWR9ZCrPqjHYKRVYsKuPtfesY7aRsk7ktP7w",
  "key13": "38N7aKjEUkTWpYbsRhzKtZ9NugMiwQ6HWCeQASP8SPxrTqJVqv9ivG9GDqhtuy3qKQBntCEdH6geimaVLBQPUTze",
  "key14": "25zBGbtGQCvKi66hM6c5xdmro1RqhodgjcHfGgvprMyn9SDE6NyZiY6t64HiLNY9W8ZU34YpXNaLUrs5tYzby8UY",
  "key15": "2WxwarwHevqSLkBJjyXuRhdsas18ezBXsKrH7c5x4R47CqAJPHR6SoN9zYCGgHh1oYj4Qb4gwjqZYSZmJzDVjthR",
  "key16": "47CQuawPUuViFCkisHej6zbvsFUfC4wd6PP4P55V76xfRuYeDPE2pXc9M7ypUqaS9mSDyHmb848vZUXNNYfoLSsi",
  "key17": "5gSEK59t3UTs5wZvwjY398ftkKGZjpurAuZbkVr7snFdWMCkBKT2GBDErinU6J13svCzrQ8i6v64Y3L7kxDLBcv4",
  "key18": "4Jg7725f2Udw7nZryoRfNpk24nJw1H7mGhu9q3gvb86EjS2HhZ5PaBKGMarFoZRQkJdJG8A11bJBWe5rBgKg4fnJ",
  "key19": "64nsDT5tonZztN9j5MQtnTYyj6J8crD64vnBW1keroK7jio9FaBz66AX9cqfyifgGJa4phQKLaat3qZwEwQbgNWu",
  "key20": "518EZ1sWzcaxiVJVwiP8vK1fDteuByeXdkVNf9XnXk7vHHTEqVNH81RiA7TALguUpUKYqVzsApiL5198vMqHyTRx",
  "key21": "2gVJ5q9FnyFnV5csnoZoDD2gGQr196QbJr9RvpHS7553SbDsGaDqmNYCMqSGDAhcMfKQAhzesLq9Yx4mqYhD9u3P",
  "key22": "2mQWp969BF7c81kHvQvb8ig3W965VpcHsSFVCt8Wgf7ui7noNJTNabFn6VQAoi3yrfoD91SFoqeJKcZfLW7bXjsb",
  "key23": "4rNa4uCnGd3sTJiV2gS17NHNQoxefQwgjcuTHXT6gBXzrLvytzEae5ui6SJ28zCmnDvm8WqNEeUZwYhrzyULBVk6",
  "key24": "2oRDyGCX49ymts1SX2bEqxeFb5hpTh9D41e3ZAvn9MHaVoxszRcNfNozD5Bn9keVJTvKi19MMZnJCPVKZ3pUFKuk",
  "key25": "5hegCmw39Pee5qRVByPg5TVkgya964LffWCBYMBeBQAB7bpc9RkvoekZkXrFwMoiynNQu4EsXvtaaUbDwwXPTHLb",
  "key26": "3bbpJtyFaJnD6rL6wGF6dXTYnoye9VeoyhLGeeq8MkyE8iAWBnYmfeWYQwp2umQ3nx9gmSQMwt88pD255JPATxSi"
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
