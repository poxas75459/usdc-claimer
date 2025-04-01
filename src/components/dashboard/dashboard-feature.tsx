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
    "3sM3SLxGm1esVPtqdQHDjRiMMsgbEY6BFpzCL8ob6qzRYL8SAq3b71JU4yvKYk97xAKsNWqLaQERQP1CFtgyCMP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rStFavV8NGsqZXyvuWkJ3ai7YEZ3gygToAci5w4H7Lkx6PGuYY3mKHzyjFf6DNX2rhJKKJaFu91Xdh33Ff1QGif",
  "key1": "4t4kLNrabd7yhwrbhqxrN1rDsUQW1RofcrgvBwJgFJJoKQheZman8G3538su8aFncPLjbv75DUqfVjTWk6ecmpdu",
  "key2": "51sVntLuyH1Wkw6EfvVrpgNJQp8dpFBUhvoQbduNCpzbmutrsb7bkYFxpY2cozuUjdERm8PEDC7RJRqajiYg7LdZ",
  "key3": "668UzMyqTvYwaNKHBBudA7GNfjej8ggMY4yEFe1DJY2jAF5v2ak4pLtv1YxyyjTktcb9TGbmB6oN4hSif75uivd9",
  "key4": "3QtwkSemkbwkFmjBp5PB444qAqr6wFuLPKzNn13b9YrKeCUrgfKZTP2UAdVBzDhgq6o9c836XXnznWWMteC93Vwa",
  "key5": "43ANZsRT73DdrSCnrkKzCb4CQRgQv9zq2sNWVHTdhdZvyZDd1UcXpTd15UY2jCZ7KVCaDNzV5dAvBBpcPFE5FLu8",
  "key6": "3G5tYELt1eFpT6jrDBYhqjL6bwppzk7tuxrMvQPRffruAoWNX2MGyCGjfCZMMERwWabWFTKRkwVBU1TphtGB3wvs",
  "key7": "ddzSwahkcuuBuAocZNrHPbKaiYs7vvZqwWSHAj32xmz4EEjrwXtZsKew5FnVJYyo1cHWmhEBpSXpCy1FGeSPKpi",
  "key8": "4q7Z5ocJZubjKFKUdJQ3aLuJ1kQAHGrRikyfccZ7rNrnLm9eEeDuJ5xfr5fF8bbqgVfv9oWkzfLnBkgUerznrtNu",
  "key9": "3E3oHU1S1uCMbT5FjFdAbpyi3GYNDW9xjFJpzEm8D6oGeX8BpUTi8hDMArPFhjof7zsG7KAAarpjhGA7GwPCY2KA",
  "key10": "4QdzJouQntawzenEwSd7yKkaGWFGvz2sywMAN4KnN3T9Rwzt5agoQN81DrR58TRUAksbK9QcHWpzfLrzHz2NTMQX",
  "key11": "mfRYySHNoDoVaVdPcR2ERwBjoHKoAcwV17xmmcVL6r7hVeWcgpLgpyVTwUme1Rbg3QfEyiJ3h95GSzw7jumFDtC",
  "key12": "2peaoycWEsDBcQht7p69yPzPg1LtG6pCCRZuExM9uq3SkaiJjuPeqGiVYGkm6BG9zZ4ifSZQEo4VbRM7E5xCfpXu",
  "key13": "3MHULECDrezsyRNWS5kpkf95cZ2sxnV7A5ehzouA2JN6DVP9AW28bkP7cPQPjd2c7pj33PKpgqqjnnstWg3NfNKQ",
  "key14": "5NQSDmB9A15S5mBhBSdxSASNuUkKjSSRm85nMWQkkB9Y1MveLTP6Gj7wM9soDvxwXnF6wdH46D4tvbPWJquf9Doz",
  "key15": "3JYq7uetNM6bes5FtAXSHtaHEJB1r7HuGHURn5R8i8XmVunc4jYeWapvNKFVc6CAMqTbPMXoJLbgCjg34AB4tUwJ",
  "key16": "mB9tPrnABuAegdsfvDWHSgXHJsQg53YbQpZr82KNCzq4X9LnsMEybNgP2iFxfJVdXzgtwKMaRR8tk2A93Gbz6ND",
  "key17": "56RS6baaXtP4dddSdaXNQUiNsPbFTDsQzuANdbvNYUVk8n4XtcTBcU8JqkA2sZ4LkA5eqJ27CgQNNGBjtY8zznRC",
  "key18": "3BEfTehEzBurNyRLxPU9FZUn3WJbt23AhaARSGt5WPnspPGPZehQ9j2iLnSjNak2H42FQvAbfFjSj2t7V6RgKQyJ",
  "key19": "5XmRwXy23r4xo5vY6znWdoDXx8Y3xQgPqKaDdgWgEhXF51kyBG2qsdPXHXTmg1FVGb2PYbJYRDWiSjVprZLh5qRN",
  "key20": "5LMrPLadAyrCZWo4ZkaDgQwrcHkz3To4KiqEkXJ1BWRMiZBbr7fPdsxWVX8oe6F7Q22a9mS7snxgvymo9P891F59",
  "key21": "5x2SQsjsAPUcD6NQTTtuaGiYBiYCtorWyQDRHHioDZkBLjTzuzh46VzuPFbB1f7WpaSUMe9BYATa45eVBRXdziHt",
  "key22": "3sM8t6FgR1MmgmiCP7oYHSH4CSgMWvPvjsXEQEy5p3NxTjLcAXh2ccRh4ZnPmL7ZYM5qFYdvZ5zjpS6RHbT2eu7m",
  "key23": "4ARD1Xm4S4omcpZkhoHZcEjMrsTEtjG7wAQKNfncLChrtU19QipHS6PZjkvCygPsWZQi7U3ESCtUmatQ6YzQBrUX",
  "key24": "2P8fdye72pqFXaGXsVbjKZUPqxb89AerS2HXt9xnDKki3FkK5h3k38rpgVenfV4mccT1zv32oussKwbwatKyQB6J",
  "key25": "5XprRTn5ruR5nwEyt2dUKFB3ZeQt4pmozrqvJaprhtr9qo2G12wPMFn6pxu9aaRfzm2dkGJLwypLq93VNUtS2SXi",
  "key26": "5okjMyMwbGCYTvh7AphnKmXFjU8XKS8Y9Z2YeprUxtucnS54veHpp8xuXj1MZtVAoR8sLwLbByYo2UFXy8FQsTvV"
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
