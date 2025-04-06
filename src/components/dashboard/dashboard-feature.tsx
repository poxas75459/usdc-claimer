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
    "2y4KfnPaimAMxf8UaTioW8yyASawD9Cv47inF6wmk9TyEEMk3kQP1VF4HUhxuirEBGGGeVAUf647oX8vNcV2RrVp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iD7Ta5sbkoGLN1gTaKZaZYRonEnRCp5bmrmf2fr1RVRhBYete73755Uj9S3LCoFMogV2eiRmD2XHH7GVjfLB4HL",
  "key1": "BmtkcDZjuDeXqgwfv4oDX3JmuXNinWCuLDGmExYoZ7Cs1MzDJNY8zN4Hw7URQpVgRWRajnd4S4EaD3q2TraMcHo",
  "key2": "5fWTSRvCmvgA5J7RjjgFkguVW59pf3bbutw9mKNDYNjtGCSBLaZCThaK8tx6YVjjLg47JetiVpDrc7abjWd7NaoK",
  "key3": "8ZMGXRCAGtBg392Dgsyw6TG7b7f6JZdEpyMQ7CTG9cack3TqZvD2vFaSrmjbDezCUjt9D8r8zHo64oima4rd3n2",
  "key4": "46qbqsdcmwzcFXjALoJTuEJrfoFWkwtihMQhCX41sc6QTDVX4AMQoY6w4F6wdvqJgLLodoLt789MB5nN6PCLbVZf",
  "key5": "2gsQ2y6t1K7eRPF1RKbYfiw3kdVcnyoJL6cwWJzKQ9bZqjtDYMqWjHPUhD6wxLhX6zwDmbnfyd8yjwDzrPxgSTev",
  "key6": "2MT4ffzqRUzAWaH259cx5EDq9EetZttRMYtaoodKG4MbXjJLTTRw5uE2JnvTgQaMZ3iKJzwGJz14jYdaXypAVn7N",
  "key7": "3YvFagDubAq23bNkcvWb9cjtv3WpmtAR5sae35SZqfDoR6KBD6cUPCLpgvxzsFgUmY3S4vqphfRGHQNsEmePHbSz",
  "key8": "Vx2KZhkNABRyVcYEWXB2uz2tGAGBzJWYQGCTWKA2vsy91CWJWNWUM8Vm71HU8iYHFAnJiVqcHbzLTgm4G2R5c6Y",
  "key9": "CYwuNhocv74ucgpfJY4krJNtBdNhNtbVKrQkNKoYR6qnHE5raFeG6YhJJkPLmBAW72akkDJLLX43s8NC6XEXmtz",
  "key10": "2v3LWqaFZCowA5TY324jdBKAv38LTFCB31cGvMsUAFssZZNLZGMZPj2YZqH9PUae3triVgTWUsWpEZBZMmC8Utki",
  "key11": "3mnu6XbqQABPj8grk4vY1xxiCMTiLHAa2umM5PrWeSz3KE6tBpc2tQNgkZKAYvq8c3MY1kpE96GtZMQC3kodd3dr",
  "key12": "2U29JnoHDhpb5k2eALaQnAcgfgGvvoDyrXDUU7BDfhKp6po2woYi1rSjkgFHUD27xuJnPbHbKa2QkVopd9ZuzsBJ",
  "key13": "WZJ7SJjo6FVHQV9Z5rqUd3dDoTyjMGy9GgQ7QZJKLHtNSfyMzsnKDQo3VSc6ntqqoUteupgVeU4hXei6QVGpJm9",
  "key14": "5Ng2RMP3Jceur5oUEpz9bcRNmrGTcEvVwAFNtTxSE4enTYYwWQvgAdWz1FATvehWTbsoMmPjiiM7cG3UMysfp5LD",
  "key15": "3cr1CPDU9JLDwVx2mNXuhwFe6Z5ic43BwWM2BpjnN3KCPJ3eBkcZgaD4DmDFLAgApBxqvE12T4za1z5wAAMzvkVS",
  "key16": "5VnZCA3fZM1KtPvjKfu1MV1PPSukDk2YWPwU8EfsTL9y4nQ85WNd6YYcEdNoD5ERhjyiczoFBinyYrL3XqdPeMLU",
  "key17": "5L1zqTmmRTdVm93dUnCRhP7NwXTX4d62pSudT1SU4Knzbgxj71T2Kr865yqWRJ4fTpEKw1owuprRnawLPvRMbtyf",
  "key18": "4urrQKYAfxJuutvsnUZMu5mPBwbYVRQdB6CYyd5kU2fT1McKxrwACjnvn4b8VK94ZSa1GaoSESL724MWHogk3JaK",
  "key19": "5BAKmqECJkm5g5mhEkTp5rj2UKpY2YLs5mdH7vh6a64eva6tzbj6vCtpmxZgdQ7gBWB7k2r5rfGDhxPaTRjtSZLv",
  "key20": "34uRyAaPMdsNELK8KWhcau2Vfie7LPFCLM4CnQZqkiDuvyDFSXRwXnbBZdjkm7v1Mo1aCabPHKrFbBXAiVeNf1qz",
  "key21": "4QcfmqCyjuJW9NJ9fykDBddmrmqnZopupuLHMRtxaXoCZDDNHfbCoKG6AWic38L2Eo76xb6KJBkR5vWoHjQiso4G",
  "key22": "49KtRXnQjdCQn1eLZQ3VXmMSNDyDo9k6cAhFuMv6PGeBAR8LHZ966smSn5qksqWTTKdnLste9pM2xmKACKhr5XvJ",
  "key23": "5pJr6RUpP7eXPKiTfvzWbT6PjdER9bNkFAAJy684R7cX13MkfvvThNAp9qSfMMpGNmz2R6xfKixvGVhJgcCKoZr4",
  "key24": "67KkVX7RJViSmQF3W7LRGwW8jrZzaUPvGSKuAHmiT6dzaGKy5na1UG2nesY9HaaTT8mPG48eLczSEPSNPivZgRSd",
  "key25": "3bUGVRe19k5e721mJsw6KpbHfhmPA9UHDdcgM9MHtiR6VGgEp8L4eF1oUNS26X2yZWS5UVfD7z3ttkx17qERJZmD",
  "key26": "5DQK5L1sVu6xWL6BPCXvpsiyijabwmMnzLPoVYCKQevN7t4DQFuBQY5UMrrXDx4Nqietog9cbhPm8ns3Uc59d7kK",
  "key27": "3PriLgQ6xLpPSAz1kBgPkaWG91MrwpGseToj9oVwR89fkBm9ttp6np9NTxFkvmH93XEgncVdSbZ7askrFRNfPro3"
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
