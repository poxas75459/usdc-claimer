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
    "4mJ6cLdR8Do6YbjNLemFjafmi8hUxdeKoW5HEJgDjS8cAEE4TBKNrnqdhRjBJEFMmDynWey7Co7trAkTRuePKaiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y3xHHsAxVfYJmgpdqNsbc28Ad6yhwNLr4Ebp9hyxsEjfGNv5a35kY2mbHHQn6h76gTxG7WZMxhpETyTV6dknVHQ",
  "key1": "4kaL8MjfgE8WGdy3KXCuuw9jWPrj3v9QG9woJ3dVNxrmvB9yVS3ZLbZgDHDzjvrqQFqbctkWbsyzeHGS646AaQaV",
  "key2": "5BAqQTGecoyKsWcJVTATqFEVaBLVnzkPvL9mBjdzgQ5y5uLrtm89g4zDT6HaCwFNau17ugXvuxWbtrvh2bV4oWVb",
  "key3": "5nK3dqd3JcPxNK7WrU6L4Kn42thD9qykSqERgi9mFwtLAm4naBE5TjrPKfXoSN3AUgfLQcffjS9yD8vUxio2NLJs",
  "key4": "2Dh5fx5wBsFyrCuJtET57LEfSzphMMmCqQteW9SujDVr1fLMWqAUfSEd4AUvMFcqewk1LKE5aTXopE7LUwtJnnWq",
  "key5": "31QEwzUNW8Xo62DLMWjy9HYt7YZeAUZZbaXyvEZZg7oj48zVFMcfkRafd9NqNHmx4qH4foZvet9n1CntYLo8TVNp",
  "key6": "574HXM9pR1r9Le6uEmBajVr6MkM9vBc5QdsPg2akefGpsf74jDhpAykFWLT5ECUXgJFXbA5ebzVVsbFYn7i6szYK",
  "key7": "5HKKSJuoBe3AQRmR51B7FoBgn8jkFv2nv5nZk9vF4zp4T5DpXhJYMWfschWLV2zjchWWrsQksi6E14dBKnk6rm5f",
  "key8": "2dV4zkcMytoDN188RD7EEZ5qQzg6Mqdzvi5UwQaLEsTUaKxDPcRjrBnFzADzhfGQSLzPNWBm28QNxJDUKjeTTH8v",
  "key9": "uPbGj43J7QCYkqFSYxo3iv5QqE9CkoEYH6BXYR3cREPicsA59q2ZjMX4PkGRNAN5qEXzbntkNqsfTEhHx74c4VP",
  "key10": "2yYAmbZx7miQoo3NPkm9uDKxFZfMeb1dsf4844pWnCA2FbPdvijQPyopkLcYjwkTqTTEyGsxsHaFKvoGUWQBapio",
  "key11": "4tJTebK1HczKj58MERJECBTxFHuzyFF1pSMtCRxkvmgkFN9xQx2MQV6LT56hGgz9gzT61Ur9bndeyaxHU5ajkzqg",
  "key12": "2Yax4GxfU19xtgc5xf4XbsQdncdSWkhjn2kXtvU5ydjHiGvJELw46hYWQdi9dYGEu1MPSdXKYgRgwed4H33as49v",
  "key13": "3RbuGfVpjC72KxtRtbWQuFJyTnPLRYyyZ9wzrFxrHrF9JcVZkEi7SXVg4M4EYYKCPk24CYnLaeMwA3WGTtgcuTFj",
  "key14": "4Mh8MaXTBhw3b6enF3jecALRv5b1w93AKqtDdUDVQoqJ8zYFeiCi56BBetm3mcogRYY9ZLbHQUkPZVBaCD7YxTxx",
  "key15": "fVSx4gwqZcAhqRGKWxdhAKjgb5rPp5KxvPHhhwSrVV8cNUBLt7UkJ2hB2SpQkTjW97Ay2MivqpUfr5CA48Zxp4y",
  "key16": "26CoSLABArnsaHRBM9Lp98D971mR9CvBgM86tm32GtophMYMrW69ceg36VPBoKBgkjVTx3oevMeCe6aYtTgQxbmS",
  "key17": "4r4QUYYkmyLztwwnyyhS4775f2WFCGu2nZLT6hk9bSkj5TVabomAQxvXEwGfrU1ugQ2YLo3kYoXXinyZBdhChJ4i",
  "key18": "54hjwXYgwoyfCeo6TjJW2CQv89iWqmM8mNwnfTAoqayax2t87C7Y8k17CJqzBBpjbRMQtSBMk2jg8t3azoeniMnt",
  "key19": "J4VXitrkuC6i6RiU2KqYepGD6HNw6Kx9eCKD9s4d4sZHNyT4iwbVVXXyzKVDkNPHGLNogNPhTLPEPKgVnrXrgL7",
  "key20": "5Ag7eoRxEbkmUuti7rZ8AsZK9n7FgoYn6NkPCthBszJNHoGF2FUVoJx5oV5RPNzLJ3noSoDxLsoRDYq29YaYyFaz",
  "key21": "2AkNxjTyyRCu6RL54FNCMbigPPq1ae5mJwDh5L6M1dhEdxQxSvUix8enZJAaWkmYmHGHoaSJN59FL67fFEsEne81",
  "key22": "3TAJ3BYH44BCqytKZn3K2EcjUTrz2VZbbDnsxPZiA6LMBDUcfdK7sqvMLEdvpC1pFQMtuTDWroBbacVTKC8H99Tc",
  "key23": "32FUzTZYaKHWvwdiTuMecm3411dCmogFQkTMt4KgAUni2xCVTLsX7gPSkxMgCwEf1XC8arEvrjcyxxtuHqe9t34p",
  "key24": "2Vyu92aiQ8yabhauuqn5G1PjqCp489DTB4s87oRAuQn2iS6arggK9EC96o6pF1EoKqSpf3r3Ws8vjC1KHoz3ZFNk",
  "key25": "3L9tbXMcCSysRyGXvttSyAbr84pKJufscRMxB5P2rfdxybYztvZ5PzETxvfAiiBanrstNMM8itWhBHWDyq8HErMj",
  "key26": "4rb3RTHoSWomCtridbWTRp99AAnSKeTU4zmQdx7hFBVhvJrtRwWBTkqWnwDZFgaiTKKRkX7RBJNPtAu9RShbT1Rj",
  "key27": "26qKEmgxFjidbsxs1yLyQvTM2ydNDWErnWo154Z8MngukYc4cibe1XzxT1CnvoEEET24vm56f4DW21Vit51AthJ9",
  "key28": "3uSFC9CZJq5TF6H7TT6AhdW1kSEhjuVnHybQJGaCsHiBLbLWb7xc7JGa5sLUyM5WvSXYUr5UueSHu5GE7kiWMX3y",
  "key29": "51AFYb2cBGWteceG6EbQvWK3FN5bkkQT8hAwC5kqELys929xiv68oReVK6CVXfm8koHnT98nfwEw3wVN1HvYm1FV",
  "key30": "5GWBLPaP32gNxGf3wjNJRXz1usHDzJwH2bd1AKYqQKftPRLvABJHEw7V9CJQUuEisrZMmDY83BYSZ92ivRnsGMrY",
  "key31": "4967pcucvZTW3uusmFh7mEcrrQVxXk6HwL5swd3gK99vaSRAGpth62t5sbWEBLBLaV9mV9HdojvjDEUmFELD4Q6Y",
  "key32": "42BoZPucmQtjUq7KpUBwHfm1Zup7hmWgtAq5DTXdLivA48wWBXvmgLRkN9QqTbKdWw3vq9gbntpMwsVK4MKWSWx1",
  "key33": "3M62gznraC1jcz2cKhhQrruVnNwBySXKozwZUPCVkEde89Rdz2NjGBHDQ13cJGwnSGSWcw6s978eK36f2QPSxksv",
  "key34": "4xLUxiN2ThLbTtJscFrT9sJVZuEP6Vit7irqoFGf5ptExrpTTvCHpWzDdHw54fLGFPzLEaKunHnBFs74oEdCovZE",
  "key35": "5BVs6EbPYFx8AQjiuegR1BmRoF3rkgwxdxsuEghT9vjgbAv4wC4fv2sDZ7X7Y24fiKQ2reHfaZp6DGst8np74crT",
  "key36": "pwBktjfZGoNuUnk7khmzUoMF2tKgtp5dVVbwY6Vqk6XpsLX8XbWGM6cMKfTxnekAfYDdFVdwvfmvDS9tYWzKzdw",
  "key37": "5PADJkoHsdPGsE8jkrLqLyYbZduhUi1fRZZbo1EkgbhvBsDeJTo6fzSjbSTQ1qfsb73AzBmtceUqYBjn1CcEfsZy",
  "key38": "M1s8qcJzpfpGUVhnvUviQUQcSVtzkkr2EX7ngoAZNNTrVjAiNKZRtt9wQZ9S4rnzaTcw2DZ69fhyevNbfYSDTSH",
  "key39": "4iziuKrwg1gX2BbPXXaV8AKRvnNHuGTkRmZj2H134Qv7fTwVyh8rdHyxyPnj4cHTT9TLrmgPxrk4Hp7QTFSTyQXX",
  "key40": "5QaMrXuxzkWmdK5PXydwbWgeePpQHPeUVmrmQyHPENRr2SDxJtQ1qUowTu3qF6vpuPzeHkgBrMMUT2PwAV5XxgZ4",
  "key41": "nL7uUQv5A5NksWzHeyMrCAvRWqSPypawpHZkToZEB8rkMPQjKGmZSZRU3PU5iKPHJgwzKv11L5qUgMFhYh98rJh"
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
