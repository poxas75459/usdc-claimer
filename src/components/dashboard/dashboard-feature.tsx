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
    "3zNyUk9acGLfYySNgnqvRnJdU8d5pS4vZMgG2HrMfNtnCovcouwttR3Ns6KYFS2Jrk4zQ7obsnb77PShQx8aAhkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "raCZX1abrNPYQ6VCUmsLMW4oupNeRcsj5jRbefoHTqKfQMr8skoxn8VsgBNeW689bX8uBcGPCxpGS6ECirVizMY",
  "key1": "5W1GztUQhrEnwm3owggvAhiupBoNMCKx1XotNPX4uB4JJAUfuACG5dxxnysxTUN45VUMLdasGnFnce6AHdyAxcRL",
  "key2": "56PcXxAWY6phB9ffQzrj7wo9yBJkHvcx2zB9VYGZq2pymNAapaYcP7hMqpbi9dMuR9u7WXnjspZobYjtEhtXVoYK",
  "key3": "GxtNPK3xarbJ8fAzrZauHY57frJU4q2QWx97uDoAWWs1wVorV6gJdW1NPX2GrVibi1EqJ2gF9pszGik3GmLp1Rv",
  "key4": "M4LRwUtCrSh4WXmU9WA3aB4zk4EvQ7dqYSFH8wKwYkYPJn5Q8pyFediJRSgk4qpeWqug9dJ5he7Fe2XHZXib3aJ",
  "key5": "2QMdtJ1QXGxqr3PdzGkyCmH2gzFHWxUmBrVWvazwaoPTcKeuuq8MvEZ8xgziLK8M8GqjywPTVFNoVu3XAWq4B5K1",
  "key6": "2WhBjcWPwgQ8dUD4NLzRE5zjXZWznGsK3oQvveo1wyvtmbxoqpdxxzmSwaN1nT5oFRoTRWhpfUq5FknYcnckfGpd",
  "key7": "4VqdGQDQqnqLaCSg1taLczARxH7eRe8CzqcSKT3GdA6Lb9PHdQBFPcy6PUQzkVPnaSGrWJaXmVFqDHuVeGPDbGFx",
  "key8": "5Gy7gFkksn3ahe5MyYLCoUeeU5UfaR9sykiN3pVoqFd18pcauJn2hvLBsLBYdbP7y3tk7fQxZNHpFaHz12dwpfAJ",
  "key9": "iu7u6rgzdqy1C1y2KNq41dJM29hYw2G4mGtAUiwNofC3cResbdx1ka6rBMHWh8V2ZPV7EcEDybDN2QoMnnDMJwQ",
  "key10": "5u5CE8Bu8ytVLdGiV22TzBXgKec7PXkVAfkuyzSJgxqs7JvuhfciHzyRYXjDQVaw86ErqtByUMxXUMGw6MRKfB7F",
  "key11": "2oNCE8mGQ7jizzwXxhwLMgXjigFdNvt2KxAT7ZqEgAXj8fZeqEA41AWfqoF8WZfD25yAJDxBnELnXzj7tE9UhKoz",
  "key12": "4cAQDErPwVa2256Q6PEtJB6xKWFRjUipV2uddt6fCTgdXAcviBNYnE3GHKrbeBFyg3qXfsfTQyWSis9wKTg113Jp",
  "key13": "XEkHDCFaRi6qHPoBKu2e5rWkniRCAE2q5hrosykNdhFNcmFi46oQP6nSTHY2MprSAEt6YFE9Yb46g52SRHfQAVY",
  "key14": "4AJu4AmHhBupNRpJrTvkkAjbA4Vd6tpAWWzDCEsYvreRwPasi5uiW4AnyeqUW5wGJpb1acrkjibBHBi3tTxa6Ccj",
  "key15": "45ehoGpGwZdTxbGUJDXg4jHBRiasz6gxP6kLR4YLjGUHJW4CV4JsfrWErRPoqg6Kuizkk5GnwKeKrVxxuQpQFJqA",
  "key16": "59U1Pd71sMVSLG8adAY8L1CMBobu4vCLdxma5RyZ1JDbvaQv8BteVpaExHSRkEaPwXwFbu6o3wZu2VPqnjATFzHq",
  "key17": "38BK4DGjbwscZufRWyunjr7pyekffFWYMct8CeSceRySR3ieZUGQ3d3twfC5FCZQ5zSLVTa4SL27aZDUNxqWdVry",
  "key18": "3ajVG35YLGoj8dD7mB2nJPJG8HxjNjeBmdpgu6sL44DPitwaXFYsYkWLrcsz33j2gYnHhWzJUK4QC3zN5tXfgddX",
  "key19": "3uSzcQiieeDoxjNfSTksB1mn2jn9QTGh3oxCzdmznSXVcrmbzr1NQrYtpVZCmzavrPcX2YSNDX8DavTotLGqLBhQ",
  "key20": "5c14c9tw4ikcYYhPpuM6SrFY5CFjJWgZz4KFS8bb8kvn4smnzW9n1gLtxeJbMd8FhteWbDvsRMXn3iJXNbkT5g42",
  "key21": "pTpSz6Pd3Bm5xfi4JeFjLiJsqWv231cx5CQVKDSn4noFU1SHHEGTYCi89UyGZZTrrzTBQnCWqFk3SUwtukQkkv1",
  "key22": "3zACwvf4RRNh9Fh47YvQRhZQ6P5c9zZTutYFbcoREPwS6VJ2YpfsqVPRojsYqoucCVZaoYxxXtFP4r6c8Gc8M4hr",
  "key23": "5hbXjP2CsPtDqaoJLgR1vL85Cr4ppazqrj33pxpzfRqkMM9CGeqkZtpvc62dqRZFsmWEszijUkWjcEN679SUpnd5",
  "key24": "U5218coqyBkRN68nSENokdco4DGRQ8qzAKcdLamTKu5Kdb3U9gjx6WyF7TdZ7UBcFPXYedoa5LGy1PwERRpTZRu",
  "key25": "3hfDKNjmDpKnCZoLMq92iwxEp3GKCNoGanD3CfKPVWEK6pzAxzNV3C6QaH2EHp8rktm4LJpXnwjr4z1YxwSuvp5p",
  "key26": "5mbQnJ5tW73PC3pvZnJV3usfyRDMMWJN7WmKUwt9igEAUvmEPD6BdbR8FWmkCSy5kRPavSRPhMdaMwWQ9sYUzefK",
  "key27": "4ChsvSLPEwqA8B3V8mq5iXETs9moHvto7fBZnaJje8rxdiqivSEC8XqokLvZ6Q2gvBTbL2Eqap6rzPkSvGUc3BZF",
  "key28": "2spbQgZhDPW1c1eiNNHSfm781xbSHfs3fmdv8J4J87vcVuwcCBvXDF5UtpNjFsaQTnZH5iZibgPrH3zxNw6hcW8k"
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
