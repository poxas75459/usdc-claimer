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
    "hnjAGYc9Ua9LqbrHTZuVbQrkmiUbsSmeXDoytuCZv31oMMtzD584UeXBBiEaDuT6YfZaVtRF2BKZ95YuzkShCY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4beYUq18p7EZngzMrYav8iJYmG82Z8j45PNSNCui8NrELVxtd2CF8n8rGa2Gm6Tk1u8FUDVKCcntuj5oiiZ6MKkh",
  "key1": "5YK6yVSYYmw953vY2nJtdsCLRpiso8jgoyP7T7VJdW7VZG7yiU5jmYmMc8vahjfxEYEgVd6h2zctGyn6yaKMe1o9",
  "key2": "RY16NWkedGYdWWVW3YtawcHQ18Yqt4xw1pS8HuXvHR1fpqksutVPBhRhcGSpiq5LvdsyQxZPNDN9mD3uHiDmkyd",
  "key3": "oqhsWHW1aivH5w7s6AcFBDyhtMBmtC26dePvyAHHy8Km1ndXAHnVt1e1TRRXERzyg7PKixxfDfX3ji4xDr9bQNa",
  "key4": "ZG3LSKfUkWzgvF7LZPmj2ELR6GCMED8DqChT1ZDRiiNa39j2ZfFvjZyigsDjdDNr5qsKvQSDTG83n2KhuPRqB8b",
  "key5": "66L98FmAKZFSUdVhEBht9MCMdmscy8617fcEyXZRYQvAdx9HYQyGtvLq4ZjpFAsMCpkwwBwRDaLdxD14hfG43B74",
  "key6": "3n8ZeSWf26Y4s1ecd2kEUWrYerNhWE3DvC8LwLxKzLZwp85e2tFZHAhT19wiiSBkFnBB3UcFTfzGg3aHKEHKmKC7",
  "key7": "4kABaatjq3nTCmwmWiaocvbEA7G34Lu3ofKmcX91tw9aRyZxGRRQmAoEhY5EW6TpX7U6kHvuWbT5fprk33pUKPYS",
  "key8": "P2Cgw3LZgyVWi5eCLVxn4HmnfM6kuW8mAYhhLLXhXRcXNxvETB3yJUo86gkaDAHcXteef6yyZW388EP6DDkbrEP",
  "key9": "3pUMUWKjSZfbPVJJAfid1t4Cp56EwAvERhr9aKZFHS6ti7m9PNXT6oozSeKJ9JuzEDHKq6oUAgEx1yGRTnZe6d6J",
  "key10": "YoW8peC9sRbnZHPXNwPqAUhQnWxEUeZkix4YmfsqNJVmYhcyVUM9xVMu86N6PNGPbuUTHpdeJ3dDhLpDFXdtCPV",
  "key11": "3DdkhEwy76Z8kSpm9WDzrWNadFbA4dA8QAv1wSiQ4zbMN2BXHueofoQPkYb7XyMRypJGBKn34s2UbTy55UgfLSoq",
  "key12": "4p1znxBmNYSCudCsn1GFkis8sqLLGVwT8fkUGiHdYA2RTbestRwhuX2xt4u5ZJkb8nVG97qWoN1b8unoA8ALBMjn",
  "key13": "24AgyTNPoJ8HGiS5btbbhmdHzXR7wCZkUFrqJFHrD4Fe2kvRUN6eqbTuxfffhJey3E2S1XV98EnTBPveEm36XaSZ",
  "key14": "EfRBGsAuybhUUca68ceAyZo5FGcdRdMv5Awnd9td6vT8BVMVddpLuxWM9ngEj6VMu5DtzMApMfT5LFweee4ncQP",
  "key15": "5hZ1YKEyJKhyBx3LpjTbTnRooQLA4PK6FSYhZKjWGpVhGHK6EsNrrqquttuQxjpM2TDQY7xBzywK6GsNYncMsNok",
  "key16": "64Ak82bjx4CKgoBAZe6218fHZd8EW2quuTh3bUUdbJEEidvKL5totNZkMY4RByUdQiZApRXsYeStiHKzCfxuYon8",
  "key17": "56fkHmGhLVf75GpEqZT9B1j253xYZUB5BDr3bKD4iWFoTbi3MPfQ9yfQWUwzLGSMvnMYtLramdgdY9XK1APMWYpZ",
  "key18": "2tK1aeQGR7d2dsMDhwx9ebBUJKd7fyFzjpkSC74DbYTrrkUJJGNY9VoUcqfDsrdSYex3xAEFwNACJon7tVmTBTn3",
  "key19": "5J3sZUvg14Pmv7mWcNpPdoqbHmQyyPAWw18kwMpvqZaQDh62nvXZPf6GFREuFyvYryBJ2Y3VqqwJwu3btKfeuU4E",
  "key20": "4qEAcFvsYsAysyTgyFFZiRe6WpyBdbMp7tExYZAtD7jE9bVE3CZc5ut51u5PTMQPz1tb4q4RM7y6cVsu2NSqf6vb",
  "key21": "3zrX3afEhGUbS2xFLpoK9gtV265xNgY5WSYsjaDiCfZhrJMSStN96uxFynbBpPsXZxsrZVRnXEQZbA8BsuVfEDZY",
  "key22": "5p9CCR7WTiCv2DodFn2PR56WL6EKTD7hTHPwECwC6XbW1rgXRa94ZLKkrzKmQRAHmXKBvzGeLohu9LGjxRPr5Gv3",
  "key23": "jYKhW2XHK2LzfaCZe4o5BsA7aoKM3yjpDgte4Mwp52hyg7Jar4j8JEEnwLAEWyTHdpe3XuFDpiAK13zPpH2s4tv",
  "key24": "2ZcYnRTgHZ1dCksFewVwiqqA1qRJ87hNPkq7ym5CmmpCBfumbunEDsucS8tVsVkMGLDAFhcQNZFeLtG12nz562tL",
  "key25": "4U2NkWt5z1siQjjRVh2yKxx13ncE1QwhsK43ETkeuodjfLB34tL4xaFPtL4kYV83rBqnfSPJv58sXU6TUPT5M7pM",
  "key26": "4sbBAbTEwnfsaKkra4QujQdLKMGTn3p5HTe12K8JqA4seTNkCFuCRFPjTT115oDmfh5ZTPx3wCJ6U7ujgBECcw56",
  "key27": "3bRGHupRwsthLLjzLbYhagPeVpbMkVnha57wUNHWMsqJy7Q81VtrhTDmhJQQR4gjmbgxJrFUcs94VRtisUVrWqvG",
  "key28": "jqmFvbCpxR6BnHpbrw5fjhLMAcPeWZVWQnfBubBbZA1844nJtdzkxqJN3YN72M1C777yD8kFT5uVAmuQ6HhPqZw"
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
