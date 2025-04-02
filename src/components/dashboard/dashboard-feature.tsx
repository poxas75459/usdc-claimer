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
    "3uuBod6iQidnj7jdSv6QtNdt4zDBgkxeG1ngXSU4ivnHe1bGUJcNo6SQhidi8FcF56tRSi9sxxqbcyk6oEK5Ng8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W2T6czPHsg93aE8NCVe8iKyPR764o4rkuD3kUufAWSr8wvKExgMrsyQpTWjmkTDKf6kkvp47vBQnUE4ndbj63TY",
  "key1": "6ocQjXgkF4fQ6sSZoPz42J936mojgLjNKZwyhZ1yjuL3obKAwHjg8NVDLz9JthGo8ASMxffswzHQeTAoeGjRVQY",
  "key2": "2rjkFmq7sW8Cr2oiiG4vDR6xwvoMXs9FZjXayQcDsVQNpdCyaUp92f3teB9F3TjmxdMBAZxZdLdPGU4dcHpLNW41",
  "key3": "3ABKyrpc99RjFq8FMYQuPHEx9x3a3tesQEmgo1QnhULU79bjwh4yz3CreMhf6NwmXwe8U3eoqNfvWEmQZiZkJxfK",
  "key4": "2BeeET8jFPZ1r8EVenN8eAUgKoajV5KEYqhfwnq7gD7meQ5GotCBG8VMFSPHxPhMowdcoWJCgeA5HsZS3i5bvCNJ",
  "key5": "2YK14Wsnb1LavkHbPKujNzATTv9APUEqyP9z5GS5oCxXXwgDGrUHFqu4joyw7ouFZtBCTpioyGX8Q2AL9VykNqhC",
  "key6": "3V3z7BYreDeSkCKpuTJHR9XyQVMt3dXYk6w3pvQgYGAzZnPxxBhur62Girdks7zY67Q1oKiybZtPEZMiqVAQCGvR",
  "key7": "qGdf7NtHkfuSgfmJyPBWP2n6fEjP2fgjp13VD4m4ugywGHP2ZsqyhHDBW9tsWt5qm3gHiTMLFnrZRK8Dm3BayJo",
  "key8": "9utDLDZ4ibXUFMAfnKis3i6r2AN587UsPxVhhkpfShCmJetZ5Pq6XANuR2awPE9n9yPJ2WpdW6uGkcYwN5mgD9U",
  "key9": "2HYzmBLufT7xeVvmnZJjscT5t1LxysM1JFjv3KHBerfFvq8fuMNUctzwFdECuKFYydQHXogqMeGoGyLXsZus2bHb",
  "key10": "31W7sVsaSWWaq2RuRbD3XjgXYnbgiqJTMmfpDMv5Awcpx3KSyorX4heBa2xN1Sf8twSGT2P1eH9h4jfiAwm82r7M",
  "key11": "5r6YdGvZwQSmWT8U7q644TVtpLk2cAge4QZ9Cn6Zaunokcf6K5Tn672Mcr7WSFAGV1uRaA7WdASA1kyE7XLaA9jZ",
  "key12": "2twZJVcCoapedHveeXWo5cDWM5jXPNxXKMCMCYRdmLizhXMJaVPR9bdDRdAHH1GyLG9Ap37JJCYeeM2M5VGA52np",
  "key13": "5BCE7JFRvqe4vj9WnVnt1UYm6qzcjB4xjSAF1gGXWTGJr469bugFJbdsSf7iNezFXpNmEFnUk3VzjgD3cSeALYKw",
  "key14": "4wicJRt7pwbdKebKGdiH1gpVZjdNT9Xr3m1axHkmNPRNGoiwZUSYVtYUqVJfHb5DXaCW8g3LQiuvLPDGNmqT6JWi",
  "key15": "5iKYBNeGWvBr7VNBV31fLmSqrCnuzpvHPaew3VMnYc4jPtEwcJtqh5QwrzJmWc7fhkKu6ty6e9WGEa3ydEHCMi6p",
  "key16": "4J3CKheoCDZ5rtMYEBD4w9PXBTNNLH7885PSBJ6H1W6q5qz9YxqXU5TkrsjopjfHiugTUaM5bwQ2BR7JwAcdg7Ld",
  "key17": "632EUjPDX3YuQxk8vmNntbUzsKxRoSQVvhzP7Te8ofVkKatksz2bEYtgeUgKKuFZkkAwHgUC2Bk8DkjMy8Gw9TgD",
  "key18": "5KztqkfotfmbM7DFGmCXs1v1PysqEZAcbcAjDiZtaHoZnKxEA6cSZ4QejK349fCpiHnNyNLPeF7oJZpDqQMb5ZaT",
  "key19": "2xYK3kaE2tN2UBhjtryijX8SPwFKE4YSudW3uaqkLFiacM84aopPFkdzNYVrBtT6rGs87YddKnKgyXKGn8cf1ZT4",
  "key20": "wGAX4qaKo13o16n1DTxSDZBdEqhtWYftgdCkq7YxNp4LGLK8vofPKTaRWDfNw8LAtJHndhJbWD4MCh8xTRWrbim",
  "key21": "ohEAcD5zj2wTwgLW9q7vezuzF7MGsKpCfd4qbJ1H7NY7eZovbWKustKzh89Nu3AhhZ9mjbhuDuE9nYw3g4PDnSK",
  "key22": "2nvq2PmcDU1d4avHQNbDCanBbdBy15csefwkPeU7EF1Q6CXLDRZVDFB8CSzaqMfbeEL4JNsvp64TuHcG58aLC7Bn",
  "key23": "2dW3r6EeNP7t9KXq3opzS9YsRTviozZccydgtycTP3tu4r2FfABfajTjwVe3wSh4ofNADXoCdoUkz19YEwC2HpT4",
  "key24": "2VpdCUWpVH1FJDKWYwWR5Ct5rro9sedsK5kbVYyNZyyFJ8MfZozVwQXbm2Y55ySVoXXnjsEgECFLjCz2JyyepFpA",
  "key25": "48Ntve3xAPYXhbVmPgNnX3nnkujNSXsmdnXRXowtaBW4GhuyPvcPGfAxpnKiTyEefozhPckDr2uoNhMVERMKVkiw",
  "key26": "54BYxnp1493NmsgVit4o4uHRQfRJkhXDDto5TwVXWYKAGMPEjguhdJvfJ3xXtAkwh9ragQc5v6EztuWGxXDXdMC4",
  "key27": "3YTj1CNRXFy7UR4nPSygPTdhfvU6fboV2dwzY3jXhRrxSEbjxTbvTFquaRvnjBuV1AM42zD7pvAeWUGVLEhFsLNf",
  "key28": "3EQiLHLAZ2avBMbdyygWc8dmsB7UEAuzawgauqyRNkCK64RHffJ92WoWhPHKCr5nSMg1PJ5xnMiXkKCsPnrvzknt",
  "key29": "5oAdcqqvJ7YFZnnXzBGXaTZqoss7ukfjo9gW7bZiKDoChF6Px8QSutNJaLhfak8ZXEZzHijusuCcvQ1ZCiRReZAR",
  "key30": "3eSJCX9fZ3CHjWUizbBRMuRpPJdGkBCzyWN3nCkwn8QEFj2gDfgLDhFd5rLTeqN3e32kzNCxQpjR14ooySMVhGGE",
  "key31": "3tMmCXZYhzdRDYPudp1iFgGyoMUogfyXW8FgkFiUDfz8uT8j3jv1uwHkW64YTdgioKPxMGe36rvo1hyqDDvJ5ZH",
  "key32": "2XsLJ6rMpo4jdrnSmmRgDVToSsPukAcMGZ72umMJ8SMSmNsnCJYCuJErvxcV3bPaxU4SosjVZL5Ntxqj6db9wDvn"
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
