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
    "2TaNyRdfvgR3d4TzvmjR9vTXFDgExfgVERoooHLq9uPuoPFwkuwNRR4Y7YA46g5LCuuE32Xpczo1Z84o7dCR6is4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uJRE7pZWPbTiH98feLvmdPsZHUCxnYfhSnAyWxfozqzsgDnGKThJgueqDYF8DEJLxuckMmPTYpQGoaY8Y2ZpG3h",
  "key1": "2nPVDgqeyYKfrJVKETGg8Kp48CnGQSNAieZr8dqSG91Ak2VBgtngZABQvUb3QEK8JCmPAVzwmSuhaE5SgxeCVX2A",
  "key2": "4FqTu7DrnKmARzN4pBYfngupo8z8rrk1W9Db64hv9WtEyThEWrcBPefQcciUT5WTuT2SiRcfv8f2uXu5QKtxVd84",
  "key3": "4xGBVooaeXBcb33PCHB6g751QvBjFbM53JixnkJcWrDpqHWNgctZ6kebPujqPLkMYviTA69XmCSxTJQ4c7TBAkk8",
  "key4": "56md8QGia6NrtaNLCUBvH7HprNgSZuHjJjA8VBJt7FrWKo9yyJ67zxhBsmduKu6GA18atf5qVhQo4TUbWzzGYiwT",
  "key5": "3hWz7gvMnkmQudTLtpJcB1fNgMn85bj27xQBSpPTndFpvE4zesZYduwThw1V2eVaGPkZV2d397vq6pwffxw9R2a",
  "key6": "2BLEFm2XzxmZWUtnoNrR95fjVYyJugX8CuVNvFYVM1sBiqbMh3HMNLfLgcQt8GbC4i27hYJma9bhqHEaXxkPo6z6",
  "key7": "4PLyWiUHympsgZJ5wRyRm1oKWuXsXvd4dH7aBEHdpnESB6bqDwLpmn2AQnKb218uaa49hHBNa7nYFjreaAhkUdng",
  "key8": "4eX7cAzp6jnDz9HbEeQ4KQKrmJhJwQNXyhaLD8dbafZ1s4m8kxTYXBNrvDPmqLWWJJUV9RPchTuFsjikUKC4Bv4F",
  "key9": "27XTeQcBjuXARn7jVQtNVquyQc3vrCkxhy1isFTeqoKfCapysXh6Uq94aVXfEizqNPUpfhUYjEKa9aWusLdF9KTi",
  "key10": "5RPN1mhmXwS1To2yxJDHEwxAis7ZmKdKuRAmhbNbTsMPk5hmUBgbXTrSAXudfBpdRB8RVsty7tKDmV1wzJdewZoK",
  "key11": "uMnphFvGRJAz5PYnX78Ef1QUowqaJEUeMv1iWp6E8UvEzWHz3rMFFo1NCKuV7URp4auT8ao7YcAUSvCZxGhuavE",
  "key12": "5TCt2E8gBMiwwYDkRfHueTs7ij1nQSizpgfBjEHpc9o6cucQRkVkrzykk5bkuHQfEniscK8yyahUm9bEhFrmpgKS",
  "key13": "3e4pEbrhHPGfJDm8TDvAbQFGcW1wUaz4pxCC5NoL8nKgS4xu8zFxRAutibLRGDUL4BVUmKpUDo8DTrJrtL7GJqUh",
  "key14": "3iYJmbFXRrPB1symkvCixtnqHuwCbNuPXVozCoodC4afa62XV7vaMN2hroqXPwvBQwEZKZJYM2xukv3ERMHGSCEe",
  "key15": "3pfUyYwFVwmC78nPfeCzeZ2L99MoaGGkfe8oMgBJ47G2mQRAcKMTgfNN7mkdSWRcn8ixcj9djenheXRpaZQrTnoa",
  "key16": "Y1RgXgcxSYtRKcmNgnSnpMjenDuPkAJBSnvLTHTYVPsU4T4ev68WaSgo1WVwiKzwEFAj9EreuAGYZ6WNTufES8H",
  "key17": "2yT888KLPGyGmasaDnthXrrKCJBw5B8USSoMZVEQe51MXQUR235Q78sEfTUxLHykbf9U3d7ymHeTpPEz4GV6bGGq",
  "key18": "9UK9dXVj23tSpmZXUmsbEJ8QMSWXcJEHsKehfHAqhDdiAQTft7qoFnFDsKhzQEdt1QTqZS7qgFJqAVvp1NV9NMC",
  "key19": "3uWjp98YjWuQspr4FzH1U2usPRzMqt7oB8R9bDk5jjhpMptVeGUfkDZ19bwKg8M2XgNgZBYFkfSRj32qPde18tDy",
  "key20": "vBqZm9T9mzNMjk97sfHVKPHcDqA7wXtgoYNkRi8N4xCYtzdKD56kAmCQyoMGKF8MpAcGBnpPFvfZqtWQdALYqFx",
  "key21": "3YN7QYWVmcZxt359cBCbPg1FCC1hgGmhzAWYDRqiPQqf8gXQoMK8eeRQS8rSBgJnWiEN2UY8iYoAUWFrGBjVuxAB",
  "key22": "3scXea5epnP9A2He3WtqtFqwreNrXWiBQJmd4rYsNDquxYLh121CcgYnB1u1pnzkNvZJYBGMw8ZYAZt7t8GZxbLp",
  "key23": "GGWz9i5gGSGbdnShKbNGKotG6PhooH2ARyUkvBV1aPchgPEAq7yY694fqPoLemqeqB5dQuJU7ahq3S7uDRbfNiy",
  "key24": "5FgcQCJE8Xfp4NjPaLZd4Hst5CuReizvF4w9Au37Yj1MvgLbibsMrwJpyZdo1doAiPafsie5Z8jaZpc9m6fiokn1",
  "key25": "4p5U9gneWXGmV4QhJBa4ygDvVbRpEomtFw15aUgAydSwVskuWm2oDJjvpwb582rmMmiwkpAAnMgLutq9ZNvXesJB",
  "key26": "3rgtG8rXrnBKtpKeLwcaKxsHfwhEyPRdTLqeyD3CY1i5atU2SiBL4fCyhDP7SH1BvteP6Bj1YTr8zd4XUS51FzNi",
  "key27": "4CDZ8v9pL5uqYAvbfDGL1YEdbwc2rgaFUYE6ZiSXY7KwpDfi3mYBJYjvUoey8Xaj33MZLxSs9m5NzPVSay916sqd",
  "key28": "346JFx7dukP99c5ydP5LMZWbjZvohrx2ZT9EtXbvdkfWeaG4eVTtiwFdKL8oZry45HNY6WhVXWuxzprNbepyb1o1",
  "key29": "fdod5RLJVBwWoaZbFZNFf2tZYrwVG3AwZTgnwnwY5RoQU1LBgtQaa6JHK4SEmDjDUJiAVuv6nVxxLXFWd5pGpaQ"
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
