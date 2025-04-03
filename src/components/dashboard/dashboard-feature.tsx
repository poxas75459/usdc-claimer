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
    "3Frizmff4YqpkB9fCmd8x6y15knN8DqfWdP7vbpWUCGEbmKcdwiAzxLGU8UZoAW4mJwH1ghXbH1REJjzZgeoPbDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WtaF5grBy7tGYtmKFfBFyqtREZJr6einS1qBioi3psocDY2rDhFFXuJSBkhZ8oE87fRWg5FJEZDZgHZFMocQiS",
  "key1": "5CTPyo7KygNV9iyJ8PU214oi93bEWAthTYw7GWnq9WSjguvuqfC2gJCaT8Kfmm5smhHPwEWJAtq2Y3VY63bM4ciD",
  "key2": "2NchgUqegYvnfscRxng8aScw97gkvo7W2DYum1JY9c7wfNqBd3XKmffV4tr14kt16u1xewZTFqjAvsntiK4BvV3x",
  "key3": "PtKbzTaWghH3f8FGrY5ia2PgxDd1542PKhCVYJc5pL491EUuDm1drvz7VjikWjVSHSdSuYfQDrhX625bd9vS1s8",
  "key4": "2bub9mg39jbu7xfNnDqr6hiNaMYiS2BMCUGhsd3GZatH7EsmbcJb2zDn67k36XXgm9AixQ4f2mCWRctQMQDXZ4bq",
  "key5": "5jgmGGEjpPuuDC6HnMRrmzVwaeAV7JboQYPmkrHprdoLM9jnkrM31418N5tuH3fU2Srij6Bkdw8FQ5yWteeDJq2A",
  "key6": "5b4nnddX3NG5nDDTuxrb4pZ5vzB1ykrH3Q5tTQbpVMTuREY6W7cuoycd7zHRkCdvKXWn3bqVxkM19T51cUF8thTn",
  "key7": "YeErbndAMhEp9CEgPPRd84zSiBZimmFZzB5WqWgp7Q28XZntLeAbqH2UYDYqX5h6737xWytDWGMRkjqcCovVNYX",
  "key8": "38dVUMG4Hbxifq6fCg6Gdrt7apt6ahX1XhpbUwCra6SyfZ9s2PFpguMDjXpUrXgajuE5eLy8zvZHeBVqLKixf6ZH",
  "key9": "EYLU9sMBZ5SkVBoSTKiaPZUnLz44UszDdKnP724RoZL1NuW3sA3RomrXpdfJttr9geV7oynvg19xFTrJ2SWKT3Q",
  "key10": "32RyKVue7m57Ce8TGpD1Ki2bufRGhfZp89TWgoLosdASu8PGA9cqqx2gBxkPXHsn6hjh6GBAseCrQHZKirTbAVDZ",
  "key11": "5GRvjNqteVp3L6tKk9YnfrDJzBsL8P5VPwMFwk9bbZcrFUr1durYwA1AnjCDvUJBBVk9hBHdnAhF8NRv7meWzBqj",
  "key12": "2Sx9Q2Q9Sedjs6KeNGqip4DkGGavzCznnRkNmsbybPQjCkSCXkX5Nink2pxDGF4JMToVVxhgY9RRJNuJPsfUBrpm",
  "key13": "4z5yb9rkpWxbJGszDb43LwQZjwewdVtdg6PaCz43mwVNAcrmkok58iS2D7enoQFQWKRpDa17rWLGuJzrKVoDHWWs",
  "key14": "2EAHT5yk92XET3BPZE9zm9ekvCoGYFKhjv9KAAExz6Sxx9okFbcVTwkrzc4mDWDhgqLGPYdG8f4CnZ8UtJAyEWPU",
  "key15": "m64g5Gvk12rGQCRWP6A3PQTtCgPTsrcYzXVUJeet3CgvSRMo5CVxtjyumPRK2DjtLkQR9s1C6DdSvdKTddiC2Di",
  "key16": "mJmAg9n2dWjCRuQeynyPRFDSP5Aq1fDm7QoCxsCdUSEuMjgCLkATvwcjji2NxHG9XVZfwEDt6yiSGDwXmowEg9p",
  "key17": "43KG17KaBL476LhwdiSmiodNSSHyueoHvtHB7ftgmC1CNsDwVs7omyFX4RQPaDpy63MJ9xNhjTWZxw7dnb6ANic3",
  "key18": "3bHbg48kLV5PCJzPmuCrD4nBVqzbSmsMVfPHkfR82CHHthrqpcGC83mMuRcTtmZaLGE9LZszCSPVEZyDyZAdsp3D",
  "key19": "5mq25knyeqq25g8MDoCSSYDPQoRbYKUXMPf3Ls2MsFVcbX9HmriwHbAhofJXhGByXdh6XHc5dZTDgAUhdHKUsZGj",
  "key20": "3dhiANzNTKXBGFBstY28ZAPNDZTX9wETdLoSx5maMzm8JjfKE3o846D3y46u1nXi5bcpZHwhqehtGGvexU1y7hmE",
  "key21": "4AZkemK2oz3zG63wVKCigb9tiddViWs233hXWaqkBFkB5tseKFmrS9EXazhr5XsXBYFdoNFk2NGmNYPZEfoUNmpQ",
  "key22": "29raH6pCrbkUKRwn8qCSv2tqozN8vGkGm9QpYLQykXv1psd2k93Y2hd4CYT1kvr8rP4DBESLfsvMThb2DaGpTHaB",
  "key23": "53SEDHNY17YcRK9w5S2JwGebz5MrdwoJEtCSuWa88oWTdbVHaeuGrREjEFj8m46SeaAmnRwAq2rYgghXEZicGgSC",
  "key24": "2WDLnYsQr1ngRuQSUh31Jjm6JRFaPtedS9G1GcwiSMUWpE9kSsAJGvf4xYvagM8yUw2CtAvTtnBQp1RjFebdCLN6",
  "key25": "2LoxTz26wzndTT9wQnkUhXEF9Qpeo8GhYVF9jmpw5ybL4Pj7QtHqHiNshGv7pncWeRjW3GMheHarrBCN1kSbNXbG",
  "key26": "2YpQ6zVrALdmkCuerUJ4ExB3oEyqMuhJJHXMja7NfDj1N1tQGPVGzgdRYmMpNWy1y6tGtCWkzvkJt2z189HJvof4",
  "key27": "5UQapXSogUXmdhSKhMpMiij3MMKTDWGqYYZbxCeCfRr47UYLQtTkgkXU4gzju4kYeBf3EwTf1A69aMHLzRSLACFd",
  "key28": "5pCdNva5icKWu4ryLABCZY45r54v1Z4jtEbHxTRyfDt6hv7cPeZG7zVcRqMkXTZU91uR41geCbsF3zmLMYhae3Yu",
  "key29": "3NabHx6YZLG7nuy62ajuJAJM6iLkCvtbKwn25SAHEdAYBWDqtFS8spYdQrKwsvnoLodonyH52iYnJi3uwC3Zu1ss",
  "key30": "9mEGwPqza5YwCbHxaRareJM7VE79SQ7ck1ZVgpoVn4oiPdfJqSMmsmiGdX4iAaD6Lx71fYSJGkuVZBDNYmF8SSD",
  "key31": "4b1qrTLWJ21akzWiNpV2Tx5wDxXGB3LVPB2eKzxuw4LU2fGsStkJyLXY6cDHmTK5YX7f8J859CwYw32myy4yMFxn",
  "key32": "2mmkmcUNNBdXs6e8RaZPtkqS7duYqWy6LrLDvEPtdx3Z3RipfY1ndW8GNCQMEMk23KcFGWcLJZWtm6WGoAFxQHVz",
  "key33": "4ygRjr9Y4dKyj6QcDwvuk1qS2vuyLFRMmZzKg1eovNHkZwHFWWpcuga1XBnb522o1vHpmvvRGR1HZS1zf1TnTFdZ"
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
