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
    "9ZESuRBohcYYSCFN86hCFDKPTPehyzk31igdAWMXW1KdEzVz8kwSgkdJEVdsage5QHnippfgkCc1g8XFMuQcG2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iQh5oJ2si8P7e1e7SDEzRdcmkmFLsoYTTP51gNiJNRgRqBSsAgHieVjW5Z7aWhwzS4osSbLJ6tsawK9rA7TyfvP",
  "key1": "5B2S6EFCTYP7vqq2awZrj7aCQat7JfsxK9QikSeuCAGjYZdBBufW4KTTv8QcpZb8rpGePEiZ4pNjXbxVjTkaKgyZ",
  "key2": "5EqBy1DQ14E3DXfMD3WwCLEcixn2MpHDK6ptuEAf92i5LUMbonjwNz2gfnS6XpmjzY4Nqjqpc6QLT71TPvvLaWDc",
  "key3": "5BvnbqPFzRtRMfBxNAmCGXZL7cMPz6pASkQEVWX3VyYS48w2FqGNCsc9dtnxUdJ9RS97Tgc9qCEy6299FWPPpYPg",
  "key4": "37fWzEoSCGTJr2mv3dcJGxaF65aUhzTbYXXpBAXNCPBSXhDWzTgwi75o3qNDMbvVFg2rgGEjUu7ynBNL8x9bPx2K",
  "key5": "iVBeX8nGxmZFwhVhcCqNj5DEDppmQwB399P5CSgttg6y8u4Lk2pi1wb1bRxNc33Tog5eKBpFWSXyA9ozog4rgT2",
  "key6": "5qMMM3ZNn9uCd65FZ3VzNxswMPqaaTuAFrEExXdeEV38cPiyucj8TE4Yzk2MVK3Fy8AdJTnBaf2xZwTURBXeAtL8",
  "key7": "3WznXWJubtPofTChDgkgaeaysJgTND7axE4Y8QX2yBmR68KzQfZPDiWnfZdU9sG723t1q7i3ekRs6cwgpmVpfKor",
  "key8": "3sxLeCjyDELcMumjrfzAooAsZ6qs14cSYkFPxZH8xcwGAc6e4gKjH4GRr6QHT6X5UAadhhTnCc9J59xJtQmphP4E",
  "key9": "4n4es9FgVMerYE89SiUMARzjEhGxB6prc1YwARgi981Ssyxwoe55CTC87TSLdmfaxbvEsykQn4QZZHhVMnFNLhGg",
  "key10": "4P4KEyTqpKnAqqkhL3ncR3eyeXLHsGVrL2DUnFiUkdeeku9M9zVSnTJBhGFP2Qyq9gCzejNJvoPa3HgDq3zUpBDt",
  "key11": "5J2L6fsfQqjkKyP1JaSGLvVWQKogSH45RcGZkPW9tkdWVKvj6Vy977tEyYceKwa4Wbcb1riCyH28L4TX7VwDmDzM",
  "key12": "57z1BvgyRLYpj1AbbpZhYkzBNqnRxBWzcqLJQfQUkabKa7zVMBPP8p3phXaAQBScupVWtbfZhzMzxdbhLPJN9vDC",
  "key13": "22fekrpYwZW1mMscXznZxPfqGjxceeA1cBWhaqEU9hMGDonJRqZer7KmEi9fBSMH5s1oYSuXo4yMxzM2cw3SDukf",
  "key14": "37iGPLY5K5kgUJ6G2HeiE6PosWFAnurberedWpznw9pE7jmUvxed1YyetXfu5s6DWa84CJZ86kPVQ9ky1Q2JRsJ4",
  "key15": "Ra84ckytpV9sserDwr6w9bggiC8WFtRkW9BvpRjoTf1L3RSZZKEhJcqyyBzWuXW5pSQc1ipHAmPM6PqtuiM3h5U",
  "key16": "3VhEExMsHbtJooS2EH3MMdDEgd2FYGVJENza69jbSbA5Z7vryvpXoBCGbzxUhWrdWngLHSKWzD4cZDCeBcGgniat",
  "key17": "53GSEjroGPbtKchCowRvNPUnmKu9pFSR1G687VAkdQTteFe97oixHr33jHqfV3eZgNXtd8ys3w7HVUHYCAn4H5Q8",
  "key18": "4SWxoedL7RENX1wnjmCLjVzFSnXo1Mqn61cwFmyeB5BWoJWgeh77YMNMFcDQkuMiAzP8AMng8fLaKiNPsqYhWdAZ",
  "key19": "2fQzXAuN7u44N8DXmDNTqALvmm46Ph2TfQ38TbtaV4ktCpSskuRzmTBcHC8va5c5JFu77sMDWpHdygHw7zU7NtHf",
  "key20": "uhrAf39nHPbfDVt2Z8UN7bKTm5Uptt7GP3UZv5PyoL6QDKxN71b7g1oCpJPfeXxGZLnR1Z1U43YwokT6DiBVpHA",
  "key21": "4k4SCTS22RZrs5SDseDUA1YXVtk99ozrURjbK14cfC651BFEBz8naX3Rsz4hzPN1mG8yDpQyXPiwBTKYxHhxdxaQ",
  "key22": "2BePNtp669XANwFAHXu1VoDZwEyZEGjJUHLdCKA449zuvTLMsygvL2tmddyzhHMyYCSS98L2URUcT8yzoE4smCWC",
  "key23": "5Nocpw1csHegGvWW1xufbUp8suc6SjhiWr5R9QkaAfbCjSHXdSM4AWxntyg5gEQsihaPMbvzz84E5DkdA1fe9B3j",
  "key24": "3D8hYjsxz6j2TtYuaEcW4iMSmFLQrz47gyk2z8Cu3NUa4Dqpr29zsLqU7FkLscCWh5u3gseEK2X8e1zTBQGCJivP",
  "key25": "53ny7THnRxffhSNQpTV8MawFPbs2qkeXfPNTCrbPV2mzuzwM3dvmWLzpbYBTHCe5KC3LuBaAbmixE1AS8ix3FQaa",
  "key26": "2nUtgyebHcR4Y7FD4CrTEPAojHw3w7rhBKswdmS33t78NRDprGQi41BZjZ7yYo7ZPhtDSjxwv7aixCG3EjureCru",
  "key27": "E8fTG1McFQhNYtfA26iRXVh9PSvgbPAfw5cvcFspdyzMTuUhM9a2ykHNzwyYozWkxrfBYQvBL4eTGj4LY84ydL5",
  "key28": "4BtV8LHFoLpoweqxFVTXf1qNGZiTZavdGvHecXRh1PMStJTPKMEboGJBLXsfn6vLzjc2fdyvKC6BST9z5TjgsxkZ",
  "key29": "5rTxP7LUnJmBCVkyS1UbdY4ob5RgWDe5qswRThNcfKvE1rVEqhYuTKPSXSzRKQnYdxSnXkKnxPTm6wrWWT5EP2HS",
  "key30": "2qZwMQPjYjzB6E6CEathr6rh4osUCMhU2CCnj9EUgbURwcCphU4tWJp4n6BPgZocuSm7sErGGWkCUaC58wUp2Mqy"
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
