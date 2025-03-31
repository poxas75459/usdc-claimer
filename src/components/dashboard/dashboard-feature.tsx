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
    "5x2R2gPCNa7GsHfzQrsoa6pCmPrwi2iHRwn9MKn1qqFSmNZ985WSg6H4vu3bLhX2jS6WmWnx6tTiYrsarB4grFKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SQ5XJahxA6ZhPcexUycPcKPktQju13QuNqxzADnvCWZWcWWFGWrijy6ZN34tTVRTarf6qMeN86UNgBrUGrvpq7T",
  "key1": "3uQwVTjenzwtJ1qXwAT5z7fGkHpBDoFm33emTzbwpMzHqjYWBN8jpEsSkPZZsLKmgjMaDxsWfm4ABaVjw6DQUViV",
  "key2": "xeJc8r2mZZwspu18te72fAVbFn3XgwEFbXgBMKAKofFgoctHkbFo3fjnMicmyzkyvS6DZ6oAH3aCcgmxkDLPMn3",
  "key3": "3ksPm5Y5Q37kC9XqT3hsHH588murgon85YTkZgjzHb3hxHXrd4tdsV6vn6Kb3Hw1Ye8BC4gzRmH4UKuDAJBkhMWQ",
  "key4": "2vUNLaBkUiwdDCHRabjf84yknLr5L71DzXfonf4WAPXcWSWUMP6KcwE6F7icWX9Xb7Pe97znDPeDx6WzWRUAEwqB",
  "key5": "2QS3Fmc2a4Rq7Un35DzSbqXF9f8buabecS2xQwJnW6zasK4CtcgpZ2czW6Riaq3wxUjfiGFQJaco6CNiALCFBShB",
  "key6": "56NBwKeofE4nEjwBnQqtQtZPpRdGuXZoPh1WjUoBmRpZPEjam5DSxDaJr8QeBm2A1iXy6ovy61eEmUvaC3LTTVju",
  "key7": "43XuHt4WixM23VbrsiB1LDnjM8igoLqCGQXM5WcscYc6iD3mPaw3ssWDz8HRm6BctzHBr5nQkCpJWsQd6qfvqVKU",
  "key8": "atGQK42BRrjebAukqyA8xuapUkD3ccJkxxahUyEp4BzCwZBErziL8Tw8WPSngQyRX7WAX9YPLYB1iREHSmockFc",
  "key9": "2z5JvwxTGvuZuAp52gom79jDrR29MiKJpFTdpQrcrffkwXpBaXbdKUBU164FknUeAcv7Lg2ppKcKFNz18EDNxE7Y",
  "key10": "4RaBmBYKAo3o73Lv6q8TVR6yuG3C5Yyo1VJRgZju8PwTmxrnSQmGUM7nMC7VuizAKafYLrkkMCHdvZZgPia8a5oz",
  "key11": "2gASp6dfkce8PXJAFmHheg4ksvkXys23FecQBKDjkJ3a9DMy52vpUZkjGJti2u3GJ6GpDhmojN5cvMWxYdvrbupa",
  "key12": "5js8m1jwxwXycicun8VE9Gu6PHZivbC7EhDt7tQBXinBNHULkAwR1gAn1mpvNB4tmop1inwUKvDfNvR89rhikenh",
  "key13": "MEGUbjLCHz2PbbwNdueq3WtsmCEHLmqo1aLx7Rvk31qvp64djGC1krsYu9yr29TKUSond4wgv5xjjW9bYJ3cDCT",
  "key14": "tYHLPyMBUUQs86rpkSbLPdGFYoxbqursz7Mfh5mePY3H4WphRbd6fooS9TetU8JGE6mAq6V8cxWnjiUNvjn5rbi",
  "key15": "48V24BC7VixMEBw48WvQP7A4MEea3gL1gqGSEhdK4f2cuncUuTccWRAnStxXkThiyBEpas1i7sgAobc6FgvFgN8c",
  "key16": "4UaQS7Ms7dRwBUb2go1js2nS6mmXfeQPeEKmsBB9EzQ1fFNVyKhzBb9cNZykQdk4vk44hoQ3rNmwLzUs89YAUAxG",
  "key17": "3248Adg7KzhFp38hrZfE8FsBHx7mzGyo4YJLCpWyM3tnHKXnCLJupBvF4gTq4J3AvoprGsR6twAN6Xfh5RYftMbx",
  "key18": "58ZQaNMCgzfH7AynQrWtjmgmL67Qk6sB6MfzTyVvvqXaQzv1xWbGx6ydaiFwk1AKDEDx9Wga9wqv7G72Tont7U8S",
  "key19": "Y4anLJdgpbTeW3RWiE8BrQFnNQNb8vriCY7DtX9W1RSMtXXmseddiPysQP7xEmHc1S3J9FLJsdQJVDTYUs1u8mE",
  "key20": "4V5ZijRonKJVJmKwsnnhxXM7f7tYtX4FTYJmSGhQXJZzMgPQKACBDJ7ywchjDecZuNf7qdncPVocqtovZgExBYsB",
  "key21": "4fUFtBifGDiMb7MSDjxpLjgWmEWAHu3LCLcmypoppQXJqEozCbdJLx7QiFhvCs8eg3XWtKnSDsfhDBk81HgMDtMJ",
  "key22": "5ZzozWGMvuk7Rpw3eocyY4snNXUUSqiTwPhqYvJhzBpUGUkR5QsuVqcFLWPuCwESdRr8TkvNaDUBcawyTivwWjw9",
  "key23": "grjd4KvN5fVuVfywFBVHasVfydx2DEa7JjJsArA8gSjcV3ojxyxrZ12DtSE7ApAqoXZyAkdshQ29tbVrPCf7TME",
  "key24": "2PvX3qqhgaJ1i9YDLypbRot3QgDft7KuLUkA1Dve5NhdgNpHECmqfGRX3MgFPhxHVvL9KscygKEGznUPs87QSMN3",
  "key25": "4Ru8V5EuKUJ4yLnwVhrxeWGJqXNBvYzowH3JYDpKjoAoZ4RHKLhYGhfvBZsRhgQPxcvzyq2UAeJRKeQC6aKyBT4p",
  "key26": "622JSFHhgMV3ih8x6JmtG9tHJHpR1q3y94bEGjrrtRAbUudZ8b7ahm2iuqp1vXArwW2Bo46uGf4iAVAWu2iGvCRT",
  "key27": "3h6qJw5sx5E9XzhdM1wDwM4jZ3RVoAo2TUvHTfUaFZ7527X6LHCknwVbeSxzbt34YnrnrvoskinMRfAxHTHstujF",
  "key28": "CHENS673H9w89TjcjzM3oYXcT6TfqfxH3Fm5kA3RGo5w93qyzeQmhz4iwLF2NRa2DBr5Rwh7Xrj8uBt6W2zfUiW",
  "key29": "4n4dHEn2JhYc136sqvEMRtURfpqoT2jahiJ6CrPLsLkFcWfx3shUPbEega5xt9CdPCxxqL4VHJ18TVMKAx6E4QZr",
  "key30": "uLqzVFKwP8ng3tUZoxrMwjpVEkHWXSQWpFX6SeJspoHTpndUm17WaCWkfgUNpjyVfe2sLD6nSJU8tDLWpienBCi",
  "key31": "yRnLh95KFAvk3pipFXc9ZheWxLJbvop42oMMpkkXXXGsrToqqHBSjjdoCYzrhN8pgUKoyJTEbXywq5Y7BgdhEGk",
  "key32": "4wBjFBSydk887poye5TFT48ZoJizWHPuKeTWvQy623P73GQy2LFULEQXJWRDGNDDzzmcK45Gk7eQWko2W7dS1BFN",
  "key33": "27EuAeSq7kJHCNKd3aorMHuXJjdcha3oXitW7Q5KH1yRRqd99Cq4Tsy632L8HKgGnJuj5n4U71sgBbyFUrkAeDbw",
  "key34": "4dR9ytMgkkP68vEVA6i6d4QprTjx468f3JBfYMCtKyUaQYLcyBNtwBTstTjxPrDrWdXBHF8kCyG1eiKFtkKGeuJE",
  "key35": "3tfPD7dnd61vnHKivzUDsapp3whpzVupmZ92h2p9HgiT11dbDZ6tuxK2uHLpYwv6JTLfgxQfLSZtH4bfBPJ6BEPA",
  "key36": "3bqLw3iWD3eTRCddazmNoBBJx6KtaYjCRaKo2Q6URWxoNs5h4oQSqEknAZeZPn5NrxxPNN6QkUQuepJeN25DYHdP",
  "key37": "3mHWbZStxXDEAo9sgaGvmHrfCfgGrkLtFNQCdJ36LxaoXuBperAKLfHVPxZ1LJuyVkSNEoohRBx43gTZnCNAWzKC",
  "key38": "24VFBjLBd68WJSPJ9WoBePzPSVWBqaVxfyvAmpmg5bscmTxw2fv5rAC4jRujHzFVu4UHUB5QWhCLzyMgjxHWbfxw",
  "key39": "5GhfHLwEKpMaKm7mMteXvwcDNUkezvWkbsCWTxp7VJ4UwGHrDGfwTK5hDR2jEPK2nKBgEyhmW5RVgKMCu9Gyd3Uj",
  "key40": "61DT597S4iw29rT1D96rpz74NaiMosvAGKfVnNA5kgHXAMve9Bxi2FfBkdnKXXBFjgjp6WEcwj1y4kpxFfyiLj6v"
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
