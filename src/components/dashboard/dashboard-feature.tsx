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
    "2BAriZNS9vCKD3NGDZiVgE9wbvJWjqQCo3Fp2xFLFUo7vpiFxrW1gCgtHmTV7NGtseNGSF3Div1QuKK8jV8bB6bD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UNkoYzqVGv7KBuviiQEYR1j85kkNP13Xt2nbpXZfNq1sxPJaMDVb82zNNXr9ZwaH94VCmg7DxWGT8RJNvaDSTvA",
  "key1": "6Uivj6Xn5WePJNzTyCLLN9sMxBj6PQ1cwrHM6ek5vSymkWSa3UCEVMfcfomwAxu99ynimsJmqwpxbVMqrwqdqEr",
  "key2": "5PbwhWenkcdHQa7aS1k9m6WnqfCA2PZggDHsK3Xizme97ZXYaTQ541qyrvN2ai6uUR6ebasvpehWySc51YC7YzdA",
  "key3": "5jFGPBVxCQcHxyX2jyRu8GxkENwEmsiqasevGmJiXzNWR81SDey8ZiWeZh1v2FZVFEtib3sxA77mA4TNTyYRYPi7",
  "key4": "36oEiCjDu3N5MutsTe2f9muts7uxowpzta5gd4sRUgtwLVKtkUKrQ6vN2KvbQgn4HP9uQeBWeHL1ZWiasA9s23ex",
  "key5": "2bYYe6me8wYE6BfFfcDfPLtFq9t8aHDWUG8DkR7nYCJLpCF73pfpnED1xrEeMHGzTDZcDLTLktX4krkefJRhNbhC",
  "key6": "38q9Z84PmKz74rZQhYUDs7PacpWqPNJzDcnR9TLSvHt22sbPw5SVvD4yMtzdqVWEkum21mpaBjhHTEKNpYFFNKbF",
  "key7": "1wYMdnFW14bYcyoFbX9BewY39tYnQSKXhogAwG82KwfuVDyPQpocsQiS6JczPyKQbtBd7xfPM1Mmh4CftffTy9Z",
  "key8": "2S5qyiyxwE8UhoCmu5P8r81rB6ZRAk9wim47WPwic9ZzHBP95k3VTmDixvhBUisZ7hCvwQQfhEp7nW6654VGH9Nz",
  "key9": "2yjN72nBJFSA2FRUFhTWq6hm3xbUPVfFbRmL6bfwybGR2LaE8gEHKcffVDybr2oPPbbLc1fkNabVDCqJGbtC8Myj",
  "key10": "5uEprXbTLjGyi9VJHGajzdQ1KbmBAB42keMjZ9mkAaX4WjPTrWcWf3wPs7dMYBybXcxagEEMzMc2RqwnJekr6aHT",
  "key11": "5yxKauLuuBrM4DKvChUitT6M5hAqwKaqLPjL9LggyQR1aqJtxRQg9pD6FuDSZ5y7bgWDUQxLbg3E4des99EYkfy7",
  "key12": "TnmFHixbhUgyEhNmNvhQNMot7cGviLCDRE7edpaGRHbXbb2k2pTwyasby5eyJPdb7HJV3MZTzEfFP2QP8e1rBEQ",
  "key13": "49bvZUHfKwAGD3MuYGg8L42RZ6Qb33PpoXcxeW3CD6dHEj3GU4B1YymQ2EY4o22zpWzq5aVQt4SWDxAycWBRySEm",
  "key14": "4ap2dToELGT22br4QW1zSDtavMYtnkVqsiJGQeZHmcUdDb6CAPFVKxPecp5TX8rQomcJPYopubL5Yks6zKj3ra42",
  "key15": "2EM86DxEbLghBvcDwQArS17rHgF8DTN8NfSkd6664vnvGafdFvnbSgpTnK1wQeG7FyZAX5S6F5vjLK31eXnVV2kD",
  "key16": "3XVvbuHRrQhTMjo4WVKXSmxB2E6aKq1NaeAUcYpHcETRipcAsuVLyTiH5EZH59ycaUeB6gafwLULX5mEp3ZZf5xo",
  "key17": "yLW5W8PiUgmFGb24b8PQnQm2V73Q1zYsqVkDKGjokkEabgeTfEG3qoREeaE7qU5SzsoiAdaNbZSRzuke2LsD4hp",
  "key18": "3YrNp1ukaV5QjrbashjEC2nyTzvBBLMo9QEdfZXjtJEDgeEyU8y6PYqxnLqnposbAqVB8SfRKvSRXV937Hv667DR",
  "key19": "iVzuAjwnvuDquGiNaw3s1tjknCCtRzMfYTVaFZ9F4XLpDZpqgzjQniQ3MWc7jKSYjze7GDgV7eUFFUmwaPrmT6p",
  "key20": "5h4AMc2frMmF7g5cHGN4crvCNx52Yb7fT7LfEjow7X4X4LmeimQy8U1SN4javBTWVvCz2iyLeS1CT72Anc8Ngf5i",
  "key21": "5KsEN33qWrFUKKeq8BB1LBTpxvsqjb6fMxoyHsB23HVSdFqV6E3TPdHrdHnqb6WLei6pVdbp3kDHef1Xtzza7Pxi",
  "key22": "2srRqtm5CnKdEmwWbLjVcWdAoCkR4szCCssZ1eV6qqUn1tEFAiUVKSb5MA2y3fsDfh84tWrurPE46U5uRQiDfC2d",
  "key23": "3pY71TQCQpowgpo36AxBMs7hxEeCZCJxA9Dco3ubfa5nkkJJGr15yRQGTtn7ATyt3cbR8PqW542U2hu9z7pMZBjw",
  "key24": "NUWkJN37sTXfcLZWzG14JD7EcQQugPrPgmZEVLnr9ny21Wr86Amqzf1rMxpfm9epTQrKKi9FHdXRUxRA8AsGEMa",
  "key25": "4m4DHL2LxJU4jEJMXUs9mXBq1UZEjNWCWMQM6mQCzcwEFRd754uQsTK9HevtkaicHnyEt3uehZJWoJSHPbsXxCqt",
  "key26": "8mTvvcSRCoywLbqBKP2yGyHerTeqSD8nzZhXnuiAi6xD3q2d5UAan13GWsZSX1zPNjRSjEAaHwTSPojd6PU9Upo",
  "key27": "46nPLCWxavVLxH7RG3J1KJbmKDW81Xyg6o2CtbTdBRa2TS8Xygm7A8cazPSW2pU351uBF26uqTfW8Q7KucUMU2Gw",
  "key28": "SoAjsdmZaMzgNAisYJxpg6R7zXZkNCnrWVVSPDbudk8C5a2mt8pz7utGkPDU4aSQhs4nuDH8toYSvbngXcRVRNx",
  "key29": "g8QKuaHBJU7DD7Bz9EWmtRAjQRxKLDq3w8ZQaS4oT6ztMbGTP7C9hSvmAtsKXr5FJ68hctpvfRGen2fm6YKZWm5",
  "key30": "5Z3PvAwu8UYdhQ9KXcadF8Ctr7f76yrAYkxSrD5SKrEnTepegfJTUHit1uuvofLDrZfgp7eNPL11sfXSnRAhZyJj",
  "key31": "4pWzCtuiF3MJuxAJAA1hb5CSg1YF5ZF4X3BQK4xz1io3E6fVMpbgRukYjMvAE2AdbqDkzdx3t6K8UZdauwz8aBYR",
  "key32": "qbH871PKZAjRYhC5EUAgFQE6sbDuGqCxmwPydJDBTMCbF7UUNPcxwFEY9zKa9sbGY9ZRHjYSy616ABp8dcqBwvR"
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
