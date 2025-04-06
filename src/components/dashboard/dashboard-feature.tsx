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
    "4mqh3Fu5323Af875dijLiLFee6NxY6pi1pr25NWPBnE79BTvQFzfRXKb9pefgW3bPUPqnJk5TBAXc3pCwLh3cAHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jHX96zWQkPwdetW394ndpJzWRYVGApgEmwyTNawJL8E4yfN7jzGRTD9aUTLzzdYYUnd5T6HLfGExdEsSfFr2M9U",
  "key1": "5rhJnuN7UCdy3Kw6yS7wWdgS9FwYj4gBwHTYqHkSE4a5LkQD9rWDsoh5Nf4GezxhghoxAvAjF3UJ4GuKpk96arpc",
  "key2": "6K9LehvqcFTcj1M9NPmZqAJhDT6GmUtq3CGwdiYQD4wykuTE1Ke2mcjGWa9acyqtix7YybM6xk7L28MKoWDpAUE",
  "key3": "4RXWP9UX6iRiobMPKpNokpEzCdzSxgGxE5sKfLNhU6ekGCrnq9Wk1btq51R5gQRUGmVmZBEd5M1ZRNPcDP2nEzsy",
  "key4": "4vVdCRxtMFxPWML4AFTVhhp5sLvm3c1a2KL3G6CkFrN3pE6jZb7VkPEcifP5d99y1vpAsfL7vdn9zgjAkiVrLDAD",
  "key5": "4sGv2mdavLEAxBgjdbu1JDyr26GjX7cU97cFq9SYDskmz9gR2mWF4vJMXw2bwuM7wZCApCHDsrzS77pCasXzYyeK",
  "key6": "2CFmnPWHxuJmxzVwHF9iyZeagMwnUJtxPdBHSTkGdvAUzZZqyaybNkHB5uWqYKjPcqJqLFoADpgxJx49naEzCEAH",
  "key7": "328feTFvAUx4wrtj2SvFfLeygw72hp9XnbJ5vyvcDoDFTL3ZCD9YTV251sSG6p58kyTJv316JBnNEcqwfiv6ZHoA",
  "key8": "stDKzK53KLsv8gtyTafFeqxkzfLmT6oiX2bsnUa8f3uMD1VM3djqKidTyRU7ykTUpHfY51PqJMz4YwUqXWSakCo",
  "key9": "2cjMeTZXyFBoqjYKmCDGeaimCB3a6oRABjMauutVFngQyzPjZuJh3cJgzcf36sLc4gtiQTwFcAUwduUchvAGSx6T",
  "key10": "2NbEKrjFLqDYpjqB1VY21ZyekTHzCUMefMVbZJAKSqjKJE3yqbefkAmbACUd8A72onFfSWcyPms5mX2ErGfwppDG",
  "key11": "5nqr6jay49jcVJn5iVeRMMkCBRwEJgPS2XWFKcGcuSAB8P28fxixr91ratdVzoKarZU2vjbWpxuCBK6JoXqeKm5",
  "key12": "5zKgNxr8MJv9eD4yteLrS5y4LPBDHtPDw7JbZugDQAspUhiHQoqf6TufXsTPSNjp7oNWBtiDafVA8EXr3Gd2KtK8",
  "key13": "26f98gmH2xPFKmejs5VUtUkeRLh9xfnZDcVe2KYWRfcBMWnSkDsfuPMM5Ybu41Q8gzxXUqAhKtMJ3kWeSN17qxFb",
  "key14": "4XL6wuk25KHqi7DVX2AdULJNbkwfDJJ8hqSDqfSfeJqtN4eof9QzQTqKpWSQ94JVDAEyHjB9tyhf8DfjovvVChPr",
  "key15": "3HuAvAvWEFtKEEJ1WxUgZpX8w8D4RrvaVcP95612FDZfdUSTvGfnm2vFNWa5QzqKw4GzSUW7bpb8utiXt3ARVBDj",
  "key16": "5XJy56tFHqV4m3e1vjBN7kEBEYvLE8N4d6y7SeqWhbL3Mq3KFKcduyafeAco8EtAJNZU8vesoKtqwVwfHLvKtB88",
  "key17": "wWWNpdThq5CbrNKNo1C5HzGt3Adwjzd8Vw8TRvM77nGM8bFZG5RM9Ycq7EkKajzfPBYu2NPYxnPXaTtcgmcFak9",
  "key18": "2CCiULMCApWFjmg2iRzqaUS3EjXXdnSuCRDW8ZppZguiMK9hPx4eWVCMRTX147HMghLwQss11p31deAmaQmxERZu",
  "key19": "2MZHXocZ1NyBzVdWZxDgyoHSzEghmorHpdR2165PmKjMQy9SvfyMGsFoZCQ49Cbeih8iy3KHm7EHMeSyy9kHHnHA",
  "key20": "5VUrrxJAWENFruf7xMQr1rvjLmifRiAQqwK4HUz2TakHF4QctzKQrZ7e6ixpmkVUZrNj1YqjTUUJe3gdPLT1rYFr",
  "key21": "WUgWeBHEUTYPQrUusf8Te6Z1Chc13iBHSc1BFC4qCg1i7F6tkjXxmC899Nw84DPqVxK3MWmSo9V8dKGpJpfWFR4",
  "key22": "4PsrF2hYQMv589fb7LnEg9TbMwH5Gr2AQ7Rx3JR5N3WKZh1Vu44ZNBpbGTcEJi9jFV8CdR4JD4WYN9vy2r7hZmMA",
  "key23": "5KQp9oiXPev4txfsimhrbBh884SrhAhFNKjbZ762jt4svFXmNNj7bXjpmiFshFhAE6FXYeQGK2KTuv5AjJGgtSz2",
  "key24": "3cMQPDy1oHRV52pjC7gzUGwmSm13w1Mw23AMXZgY3pnVouGfabeDf6e7FWBSJ7U7jUPeAfMywu3ue6Hv7RpASwHE",
  "key25": "5zZ5CdhAUAEDhn5Cw7F3vhDfMnA6a2sg5QfNDXYexdj6xKxvMYQCEA47Ckuk965hg2zP4V26uGeS79gNTMCAwZBg",
  "key26": "2u8EuugVeDwAgzATxMgba5LexXZCdWT45kPWeR1WMVSJRYcFHpdmueKnWsYZk1fYCHT7jx6mfjKe7XMyQamb5wrJ",
  "key27": "3BMMCnaGWJRHscxGVo5xg9eXRwnW3HRytDgzRibUsQi1joMSfpavoDwKhLSsAAgFuQ2WsBg2BmMPhc87cvDCwENS",
  "key28": "21PJcGEvLKaGeD87hozx648Z6XntTbDrfWYwh9ais4coF2o9R4W5hBSBa357sLNczUK9p6vuGLyJmAhS9h1f91vS",
  "key29": "4pTLiTZLWL2UuJ7ED7snPj75uoUUS8Uu3unSYS4uAa5aGNNcgN2WfbRKTWacY5KmJvczMDkXhx1iHdnXL9E2858d",
  "key30": "4ovseZCkDhkcPGR97NZiZneZqToH7AMZvz9NcMoHf3cz8uxQSEGg7jjAotmyjGD6MoEuZn2MPYZgXNc2U8iLJCZR",
  "key31": "2xoZrrrpfCF2zqKKFXig79Qu8Axu189b4K6V1zHMVpbHG85wFkAxUQwXMhSMxyNXb2Pax4YhWGoVdS2JJhbDyASS",
  "key32": "3qfzH21rzhLPxvr1aWt6gWG6tWUgFY18HKy9ci7g5MAk56wJiNzoiuG7ei7smgHgCt18M2MBDqsb5Tb3Vym8CAUD",
  "key33": "415hw2SuhG45WbfNrEMH1sTZQE1EsNr2M2sTpZ2MMyZFbumHz5XxQnHABTe6jewWosm2aZtu9B5uWdqKMebqJ3c2",
  "key34": "66R9greh1jdG27uCc2SP8uBdU1AUJ26zyxrFydNYMWMLBDy9Y3EcqfR6uCxPSzAgAuz53WjbRpib4VYE6QkoLiY4",
  "key35": "5xAH7dt2FuiTdCK5oCCe2gtB8L4qEptVeiyY52nVitRnc5HLjsiATTFSz5oqxqDFFcqnPGewJ2ECn5ZeVfke6G9D",
  "key36": "iy7qq9wbtKegtWBQyUMnUee2qZkucha8hSpPP9dTaQ9SrmchPSLfygJS59RR26ga9dVMszbHB28GPHz2snPDkkK",
  "key37": "uXxso2QBPyiWDq5wJQZaUBcJVhVY9TNDbtNsZ7Von4w8iAD18nygBN4iH1TP3yDvmXdJSWKLZH7Urb8PdrF5kFq",
  "key38": "5SoowUjyYVYsef3kRVLAAsimBTYQ2D4Q4VUvrKQqcRmdr8AUj7Nrjj8F83hkpzw12cfo2KhCUEj7BBTxUyPFzrKt",
  "key39": "4nyAx7ZX9GJJ4DR1xroo78VdqfVWMQ3qfe8cmHGHiZBCbJXhjJBQ5JDhDiqhsGB93SBwEqSTuSwsuDxZRjVa7APf",
  "key40": "4kbU3TBg3bSh7WgtS6C7WQGajrbUvz3Hw4M3ujBYh5rypPv86SkG8Y5kvZwhDdfVtRKqfybiTWKDxqvjAQdEF8g5",
  "key41": "5MsD57x6kQNbrFaBQgoJH8WcSFqZDaZGWSj9KMaH7D5KMV3FKsPesXWyUjmxDcssZysvXFCPtqr54tHigYkKpXYv",
  "key42": "UV2rLGvEQucEbdEvcgJEqrJugbMvXkPuPBeT8bm7ysN6Z4XFWxMbWNpa58yxAu4bYS7nAMfbkUVTHC8oGVnnUZu",
  "key43": "3PWDPT5s3nzcHLaNz6UsoSKAsrHS7ukPFYPiyN8q84QTKqoE61BdKJtGcqojwWbX9TExeWMG7BCWQWv4h2PumSS2",
  "key44": "Rop24VYgUzsu7cyAXgpoGZeZ4n5V9rNnt3T4zwStTiT1jJanaPUXGPKA3HbfiNC689z45bji4HdAdRdRTbKCHXS",
  "key45": "4T2Y3fRzGUXz5BBXYRHbnPGqTDfzQX1QCvde8zok1eF8dwxQhzEo94TB3qopfvKfAnU2gUZCAz7ouDaxfUgmjfwM",
  "key46": "4jqMXYLksESC3z9TiqR5AgSJmuQazb4t88ESnZNjoEeeoyNhJs25qLNvndi9tWy3ZYczVgHGmPME2gb9dzwek9ZS"
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
