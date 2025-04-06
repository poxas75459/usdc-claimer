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
    "3xTtLop8H3wR3DoDdK2CpEWsTfit4YDfk9UXfugq6pZwkubgp3bN2wH8qxiNn7c6hyz39MneLkzSW11F78mU2KX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bhTqyUdBnA6nvSCe6q5YLCUjP1UBw12XtPPBrX8jofsTkohXdEoUbtiRfXsWjRMrpa7nb7woikrxHtuo736GQnm",
  "key1": "4wr62iZPKCBkrwftjcFmmLZM3oRDAB4fpNxHCC8We3YdA3usvY5zeZUTRDMSd5gAx6eL1rWbK7cNz9gWN8aucTjf",
  "key2": "2rZUB7GMy8qu6wPFDMR5DSVcXZ7JuE94UBrCvr7aATP4KyVM9UgRhrMfg4m71MMtU1tqR2iJbS2vZe2mCacTJYbP",
  "key3": "3wF2GYJzvmbZ8pQQjm1BWy7swt9WqzNG1QyRxQLfmpgT1HjZQPN9Fq5rEWBFQpvWDAwqVDoEkhNn4MyMmBBaCAaG",
  "key4": "2mqQw9txManCdNP9jpz8z6DFkQXhr75GoSCLHeyNorK2JTFAEW9enNgzH2Rk1p8zR49Us7kSitPHrQfe6ptik95U",
  "key5": "3A4Z7vr6tZ2Efrn3BNJzFmnoc34JAkA63SrPfNywqeqaTVddpo3EdqKSijpAQT5ubV9Y5twjEpWEm67LqS4Wf39b",
  "key6": "2X4KZ5EtzcDkSx36kWcEk6KuCXtxqgUkixNWzCVsxCmEZ9vYd9N7YGghrZU71x8QGUcA88PWoJ17qHsMuuRJoPBB",
  "key7": "5cMtgJTcZcLXeS2vFw4jgmeobMkmQzqxyjBi4tRcdDRKjXu8WdUYTpztqF31bthRNxzgmUcPbaLkRRa5p8mNgCbS",
  "key8": "n7d9USr5KFrUiutGsZvyqoN2YFqjNAQUMMDiUDchssGZYc8kuBiSM7qBJ3CXfhiDKwZjSQAFq8bCi6pwjEfja65",
  "key9": "31P5NdwkMdwEajY5ty92BxqQBS174T1WThnYuD91ezeecq2wpwFJmmH18u5HjbnsCmfXgLfjuSK648ighZ39rweQ",
  "key10": "3Kgso3dcf5c48FdG6GpHK5epeZnrKL3FDDvYCG5ELH6Pchq7CmCK7Sdaj9kfYEHYVAbs5qkeaEZvKBb9WiR3Fix3",
  "key11": "4viULpcTGkK84xDoUqrQ42sacAZhaRveCztfqDCUpbtiAskvCRfGARQqjdwdqTm1GJww6zi6WqKiL9oSBFp4wEUN",
  "key12": "3fGDjezW81krhiRRgWPszZ1pXjZC4BAvBq98tAkRYuxfVRqvimRXkGbto3TheM7EvuTQRXTcjuatiK2VL4froiCh",
  "key13": "2AudEPxHeM92iuPQXDJLd3DrJYmQwhr435BC7Wh2JzQSL6Z9gfxJw8HUiAkfMMkK3ZCjLArgDe3swymrumAF9DUF",
  "key14": "31MUnBkivsyutHf45tk3UNadRL6feWD6VqpfHAtFBPwYx2pQPXXc2QxZqyv9QH9PxSMGavinXrMdSg54vDapcgQd",
  "key15": "5b3jB56aL1Qcff7wxuhyZKCH3EmEL63zcrHf2vutBNxz1VMUgrLiaAR7Nzc5uPYbJ25MoT3AR2ZtRXrHZhmmi3P8",
  "key16": "QCTpK1w4daFn34hDfzkHC5bRA4vBuvK1idVocsW19grn74kb4uJaZ6FYqHBt4ndp2vZgdt6F81y73AY9EvPiLd4",
  "key17": "2sr1qPooVv9jcjxmSC69C5ZvXaQUpzdmEVzWqZYkqezgC69NxJG8RnH1pSnspqhUsGsDJqbLwysNoS49JLaitVnn",
  "key18": "36d9SshRNaj2zkNCxS1ACP4z5GkxsWmHgXwH1veJkeim8pxQQqykwuM5c52v3XgYAURcPgSvg3yCycNYCaBcDvGK",
  "key19": "3fRRSGdxmUG7eL1EyFyLb9by558iZjq9hU4eUW2YBNBr5UGo6aRvtvsPKkNWypb3N9DHpcQTusPwJ8gCYbE92uQQ",
  "key20": "4sm1QYV1tEQkJ8sacha3Juj4Sgzb1HPLJh4bk8Xc7uAScA3KPoaxeQ7YNVnhbKvFbs89xDts2ZHFANZTGzEh75J7",
  "key21": "HdTxqHLcA6HysfCgdxVUmjG13DcTUfkxUusCPEmPsCbLLPysFgf4ytE8SjR7zYSsBSiDeNGC477avtrPPF64nUQ",
  "key22": "56s9zAxnYKKrfiUtwTMc11kNyXax26G5e1JHxx9vRDFKu9G7gkP9FxK7YkQ2kQA32UW7B9yQ2CKFZsStRGBw9hrj",
  "key23": "Jr7qmKxSmraeLsqRAGbEWEFpNuuGZup89d9n94adej6qeNJpeyoZ79vRkNrDMhE16AY8UC4A8wTZeWD9iumBNtQ",
  "key24": "3X1xcW95yDaRAvxH2wxPSWaW1vUKJJHwao5M1zsj5zY9NE6fw3eww4t59Zhh5n8XH7Njc6wRJDHk9xyYts8KFVUb",
  "key25": "2M8TgtwYLcGb5gHRYgZM6vKzUZ7oi4RGxM4LHH7temdF8R2dQwuN3krzS6LAKv1yPLyYhJvTmZkcFz85pS9qrAnV",
  "key26": "2iCHs9uek56CqHsrZK1vvy2cKL9kojorkh14MomnVUSM14xijHBtmZBBhqGWBCe37QFDKFLsYNiJG2WhKQJz8Xvr",
  "key27": "5UKqGJnxxAxmdc8gZbPUAXdbaFkYvBQVyuHVK5CeZFbqmzeqX1cmbvebxDdi7yMUREFuSD1X73Zi3CqN8p1ordJv",
  "key28": "3r4mfZ2KDyLpcyGVMTFCa76Le14XfGkihqRs17p41ap72nh8PSvX24ehdd6GVXJQFR8PD5pdRZsPEmH1JSFZvPSL",
  "key29": "21crZXRdAHe2ubAyktnaZDym5DZACb6HNUmDvgVBr4ggUTBbtJzopMRFjtBeDiuZ5XX6u1y3Rnk3a8DfcSxYKfHP",
  "key30": "2VYZH7t2VV3BgoQUBYNC2k7SRLsyd8s5scKTEHecd58RJhqfyeZfWsasa2kn4RfkZpGx1nxXs9kcH4r9ST1pYgdT",
  "key31": "4SaYQhySC5XjUbF55bPVYUUPvrYB9tuWf34SaLFrMzqVJaLT8cpeYVEkDWj8rCMMDo5Q5dT1ToW6EdfiLiWJaEx6",
  "key32": "qDR8tsnrix4QKyN6LYfhm27YzDhBZ1xtxCNxuyuaeXRKg1FNNk2qtQ68ntKGEHtYhibp7qnWvn21KXpQFuEY9nj",
  "key33": "43Y4yd3Sg22ZySHZoLoUm6Lcthcpo6BapuuibXoHH8MkYPXozqk4rfx6eMNCMChHHoauZWbC31svupaw83vyB7oA",
  "key34": "3Nmt8abFutiUW7gRmK9CRiHgy2z9egYvqrBmPz49CNtABos5zDwSQjV5nEbCWKT8g8hcaTLpDcUmkAbQ1uXXrdtg",
  "key35": "2vnKoN9rHesYYKrq7MsprVNXxUouvKhJY3v44F9PeWnXWDP6YsbP7qxqf3WVFxyv2DtjusktPxSNuc7TxY2GX1Dt",
  "key36": "2dvP9VLW642r42LN3tXuyCQNYHtJGjREAzHQQ976BAQS4veesotyNiXwgK9LL1DZVKHfQBsajSSTjcfKXP3FnSuz"
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
