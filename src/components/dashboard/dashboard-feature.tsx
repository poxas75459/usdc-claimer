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
    "33fvE34fwkDHCCaFBKeis4GVymbA8zrTSvjbgfBYYvj6C3rmgQv5mWzMTbHZ9gWh1tmFknQyXcgeCcyXHzYmcqvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VZZyRirAqFcw2t4M7VnRYpm11G7JoGtsRzCApK7fSfcou3wBhj4iSXn2iWP49HBvWeu43W53vmjj3FKjHeQ3qoB",
  "key1": "57ifbY3faaDMkv5TiyUBnA4vjd5iNjq8AU91L6SerY1oAVYPgDbpymPuyTKS6edR8cPhrxKDfDfLxXc47JeTfvkZ",
  "key2": "2UDHzWWJzrP9b74TMJy1ACYDSzm4x4dkYP6Uqi9BnyShsEbEDUWyyHC2AYWJViXrRq5MQ48ANMTxeqGrqYdgW73C",
  "key3": "4VrsPcUxrmUL7rXdAnXAS2cbudSMhrEcFGdQjPkTGss5Zu3ppZwXxXniuX36ZpSojdmPzTNB96MoHmr54vmTT9P7",
  "key4": "1i5F1VM2UoJqmKPswSLDU2VLp8kkgn4qywMZZhLkcLGr4zxDw9awc2iCQ5F6U267VFVcCbESKJ7cuZPQYB6ZsjC",
  "key5": "Zx4KWZhmqqCWYyg1T7ezNatr63pG84z7Px8Z1yFEKzNRkZNBQavhf3fPuquiyn9JRaykxqCAG2qrz1pkj6WggkC",
  "key6": "4xQiDs91D6hNL2qJbggFk6Djkw8ztE4uq4umjB5NFPLVVoz74k7pWc8FGoCKK9zk3GsiimPFPfZtQCLBNA7TZCjL",
  "key7": "GheeJL2AXKshmG4fbgkxUvnp73HJQ3d86MH6KQYg3s8E5u28nF1PzcpKFt6orhFgWFYc258uQJtV7gLn1pmuyjv",
  "key8": "5Z61H1txVbKdmCVSnh5J7NsDk78htZaf8qa3UkVCxczddosDAA8Hn8F7BR64eijRFyhMtFmVeJXXu8jbLe7gRncv",
  "key9": "5m9GNKZsivC2e44Fb6s83Y5a2aULRYGe9w2Y31VRweVZzsxCmzuzqeUNSBGk2d8YZxrvXnXkMaRLttr8AZKyDFVi",
  "key10": "35uEnCvsLHchFSf3g2exnvtiD8Wcv1j1fXnxc6KZHFe4VZFoJYwM9pa8ZHggRPcArdPGYr7QNditLLZss3KDQcXi",
  "key11": "4engJMwWiiGbMKVEcDEjwZAzotS5D5hsnFgJQgKZAFzNLi5sAzLHFsex7zbyibwMRPs1WnGRxD33kMBDuKYWqNu7",
  "key12": "axQjHtvQAc2nxYmWY5q71zoFLQfPsSKuxxETCvMbGrUacAoFNtqxvjq7H6kQLZbjh52s9sRYWNZGTfBivmy8j4K",
  "key13": "2RvHz84nSfXkdA25pSVL5aihQYGagVcYKusnuBX9TYPCKf8RcETuJZYg44AAunnZQD7j7qnw3wQo8XmZSSfcmwKt",
  "key14": "3iktkdtFdUX9Bho6rtRaUzQd2yZB1a1JbgzQc4uRukcM1kw7Hd27dW8N3PRY4cCiNfyBzL6q1W464GM5jMmT9eWm",
  "key15": "2CAQYCY6T9NYitHoNK5fpFMjP5tN18C1KLbKWehrJLSTuyuYHYENW7zahgYU3W3aGc9DGL8Fi63Bp3RbbJJ2LyJp",
  "key16": "2KtPMjYwx8HRyWiiNFKF9faL9935RZcPt6AUnK4RktVJZR1akXeWve72Sdp3PGTCBSewKiBPpN2sgNrmfk4r1r8T",
  "key17": "52TjW55ofEEPF55TRauPSouBtMjvXCA6PMNQdtFJjJADTseEaF5hZRfTpXPQRWarFsMJ1dQH4qFN5ibKWwWNjheN",
  "key18": "46p65ULtYo7anwbwdYW51w65CUqL3v4vhxwj5fNjBcaNL7PTb1HKw1DsLKuD9n99NmYNhH1CRobYTwbxidmuVUuJ",
  "key19": "2xW37tTFSdfFNyEgC8SvmbLzVwmCQGTX5mBrrXikgMkc5cDzfmpvjWyCsUb6QQATN9nNrUESzMXHnHPBFE5bem6V",
  "key20": "pwax5q1xfg9eKRqHSMo2vugDGJDFAL218azwJq8uz2PWMLzmU1sLfeZa3gZdiwB55y4rvrbNvrptWrVu4kFiK2p",
  "key21": "4hvwf7VcCUq6bk5yH4tK6yFMMEdFxitF6J3xgGNc3dfU6Cs4BksLHiXNPieWKMsmFVKvzcCTZAydWQJ5sMdv3ktR",
  "key22": "4Zu2abxnzoDpwDwDcDg8yATTcuN7n2rmzYdLYPoTDHwXQfWJ7TncQ1vDxvToKJydMxJpMxvp4A8wVE87LkQPVTt7",
  "key23": "kaDo7hrj5VQrtnt8K3s6ZjBheKVJiYBqtpaRdCa4ZTUzYShcrM5g9NQa7LbMBT8ZEXz2mg52QbSVDvH5AXPsBcN",
  "key24": "3bxa8cqvmTyctrtRTYdZvSVhT4qVFxGos6TnjRDyTSX2aKnLBqhHpT8f45fswpqYHsoSHMe25G4TfhpUDcxeTKuX",
  "key25": "wrkp1Tnmb7EySCtAzykhRqCZTpmzdH7ULdMwhW1aufXmA5S3gZA2b3nzkTS1VGgghJSyUjV82aSZuroUGjSfQed",
  "key26": "3sdXEbV7ABBn8u2Z3919oRG38cr3QPKz5qdPLYUDkdsbYjFnywZhYeytVq57ssDNPCjUExWBxChSA8FqRPqszRXt",
  "key27": "3XD8tbGN34UQrX3nW9QDkwFjHq4AKTxq3ns5DbnhK4GgHQrTEA3UCaeaFH29rLrJkvnnTiCUkn4CpPvvtuFuJiZH",
  "key28": "4hm8bYVvLrpKS42nz5HcvYwQoWfNPrPrYTqtmXP5M8dB867UEvx6K2553uCHxySk1MKesAqvzVA3HyW37rfSWYtL",
  "key29": "5DzFrxJ5eBbbYHTdzMAaL4nEfhiNDLe4R61786PQY9udKMaCc7K3rJAmX7hf8UgruVPZ2texk7qbnVq8XrC1owtX",
  "key30": "3D2iNWCwwJECgMiXF7pWm2eva3wh6SDpuQLKkozCdsWRotdEo944iK7kUEig3tFyXcDxvaHbH3qYQYDFyddrHFfw",
  "key31": "3BYvpuJ7bMjAZYP6UexJ4tLPrn4PkBfSnbv9rtQ9GPGx17mGNiZ1v2Bm5tyJokATrPJjsNLfmGgcZEG3oazDXSp4",
  "key32": "35JsABiNE2bnvnNDFdVxnwC7js2RMpFhdKeARBxeTtbcxXSmaKHzPhaYKGJQqKDgWPLbWBF2VuPUe6WBiTkRpVRF",
  "key33": "4UxcPVZRehchRfmhGdvYdDc93EQEbctVf4KEDrjnxZZuCM3Xwj8WmqeCBYQyy4DSapTkQQR4FtEkHc2rNBJgTaWn",
  "key34": "ab6o7MNQRJFwrWrGjfit25Qz6VHxcAha2Fpy3ZbTEzxnnr8umwi9vFxkXaFN6gqRKScAkdAsaUaHb9taqx8ejDq",
  "key35": "5A1CcYhvSV3QT96uvF8tUSUwPbAEt778aXzjzZLzxnksCbG9nX4EiiZovtEP8FEZjzoxAjaFX542Tx48EDhjJMbi",
  "key36": "4tmU113nFH84piX7UcusQR1vL53H9YQUiHRd6jcnA45ozrce5PH618aSPeAJvvjbX6CdnzQUg8TkcDnTx77nZkdm",
  "key37": "4b5PsiHs8T2fFnT1NZHPPu6terhZJNER6pAFLJ5K1T1XGJKYHMBGMfcLc5RQdV5PQuWVkfvEKbR4rV7NeHxj438r",
  "key38": "56RsUnPfG6PENbhDwtpiBEvtnHUS9n3hpxxwCK4vfvndL9SRxzcaPjqwMKM99SmviVQu8iFQhSCmhXru9veCzott",
  "key39": "3GM968qqPaEJPzMxu4ckt7pnEBduADiiSPpQonZX47KvGfWHbA9i7EqaDrMomkRZBLCAjCT33UrrGKpyRBZhqhwT",
  "key40": "3AdWgUL1Le5ELKFEdAcQ2VqYhJKN2beyom5yUAuyMT4HModhdT7UAW25NLezk31CRWTnwd1QJMrHH5yQ8jr5k4wb"
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
