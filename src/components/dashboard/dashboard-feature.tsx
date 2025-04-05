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
    "2Q5ez32137yNtDqUxS7xesjPtHcfGcQtEfN4YpGDDHfJAbbd3HYCCRN9g5ALw9juCBoRzMb1RFyDCH25RpB6xBC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1CyuPCPKLvPFgmcUsvabxpwrLPt2jYFrsQAn2pEe3hmmSzBCeGvpJXox93qKKq5zAXdLHobeC9tnw57Li4tcmpV",
  "key1": "3W8bjqsJptbevtan7WHADkcpNzCicc8Mwx1m3DMgJr7NFk9vBPZWEGe49wY122LcdtQrY1WEpFrVetda2N7WoPgi",
  "key2": "UsnCCDgUZQQsYiG62U5BeN28zugWv6dpQtKKNH1d4bCLQgYVFKqbww4YVVe6WA9BSHqSCNfAMQbVmjBsdrReTEd",
  "key3": "2gPPoUrmQVvkunioXjtYPtXzmG68zvtTWQLp2Am8GTaF1pYgA8XNBkJaAUKuEKBTWsYNmGiySYEPottQ4P824P6u",
  "key4": "5Jq8YcFqt6ckyZBkdAacfgbJDMqApGVHSxCRYBrEnaf9rYps6wFzdgQ1CXcQJryfGFEoADyF44WvyzLYEN9Fwmi8",
  "key5": "NaVC1PgRR82diL8HfkmRmUp2SB6SLcN1oTpeCYNBVTNTWLT3zJEPkqqWbXB3BUFoukMcFVfAxmes4qdjJiJRHBx",
  "key6": "UmeHWt25eFF7oFRTFcMwMtpHkYPykn2VszVZqPN28rgVMh1BqMMhB5n1VxLExQPHDivnoHnje8GsWCpg4yYU8cB",
  "key7": "43r6uX9JjePGwRhcBwqMBpYSd9z3mit7WYwNaxqrmex5ewuS1sktr2d9GSV8pau4zhgnurhKvjYn3ShDcJcvnx4b",
  "key8": "5B5JsBdVSu4rJQF4if1kD5cWSXSuELMTvDqyFqE9XHmQRJ39iXdeRWJwsGwRPB2zaDeRSDosVDDzZUcTNr4vipjU",
  "key9": "656ehGYkQ6h9Qf67GFh4t34GVS39HsaZYpgV6YtQAvFURorSKA4pbHVaarZBn51oZu3fedmQerNdCarL62B4EPMH",
  "key10": "3yVdTyFc8mpCCNXMRPN8WeciDVzLMiwZ5vZvR6CQCN8crnL1WKuDUDtDrgycqpyeb23wTRFhr8vRNEAxXsQxkALz",
  "key11": "4ZraXYJMNovTygPmrupMEZgba48BskdEx3Uqus2SLqSBgP1Q9gH4StoetVynTbwrpGDL2aHontbNKBHfxM6TibSF",
  "key12": "4RRnfELeYAVNoh5UxDix3Te2vdhwN8PvukC893H4Pd31Zofbm6EXcLKfHejFnHShaXyM54GHa4UcpiBxKgYnsffo",
  "key13": "4SaupK9sqsNvJqtA66zBSbyeGGQPngKX8rVBhTm9MZuKg4HReEKfPbThS44jJqwx4YmX2CV8ms5eZHHzQJZtEdRd",
  "key14": "8J4KoLaBiwertCwoRN1gke1TywigT8CPe9dW9nnNqyfq4aprLWKNhCNGET8ZUANw2U1p4UtdrqTYx8kLvZ6kQwn",
  "key15": "4uKdN8ugjPF8ou3UQ2eZZsc3AonkmZ4Vb3RrjxxRCXgvkxukce4Xz2KPF2PfRUXAYX3d3eq9Qism4oKT1ge2DMYh",
  "key16": "43wgXPeDkpqBCmbU5siNmcxyYhQKmEUMEYZvop1Q8EGE7Wot4NbBcn7iTkQhegXaYohaZmFHH7SyNwWxbgZCX18j",
  "key17": "371ajJ34BCwxnvaTBukdxeYgYYEkKfyyEsLz2f3jFzWpvAGLoUQeeHDEqtMz8G3tbqtxPc6CHxRrVMwkfTKhzwW3",
  "key18": "65XCGX8g3R1MqogYG2YYuZDjRm2oCfQSxA7M1ixdSys3rH7hcfJgUbT565DLTExSpjgPzyPyZZn1zTY9pDT4jugS",
  "key19": "SyiZmh9xDf2Q8tcZRfdp5ePo6AVdjwzN94LjJCmNt2U62uq26iM7i5GowpxsZBEkq8P3Pfo4PxB2pbsiiRdiCLe",
  "key20": "2AyRvgYcvG4d12gW3QDtMWSdmTDvqK993RxNUoFuH1qsgnRaJnSJZuQkMbt9iFrn346VSsZg1Ei26PGBwxTSkZd5",
  "key21": "2hJ7p1picpem245K7T2ZqyJ5wu7CdArtGiJrrBA1VPLdRt2kqe8PAiZsMJkjhNs4aFsdcydBNXPXWu4w8edVV94w",
  "key22": "3W5KgShoSs5udxvX9LhiZYHBytsTeVrdXrDJhJAaq2oc4pdn21kY8kuxbr6b4DnYLdGv5P3hHEQ2uXvzzu7HLoWx",
  "key23": "3Y3SS6ewCNnMwZq8ZDxsX5ojPS443WmvuaquJwFjWrj5vUvcYtKMk38MfCHjUFAo6CiNQEQaoBQUzFTjspUoJfZF",
  "key24": "5DW5PH4wuUru6fXvtbvFdMkwPppGUshCEEYekGKvtW4unbUZqa1FYNYDLQ9dTHXuo6SYdhpVxQBTX8rummSJquPB",
  "key25": "4dC49wYJD8tuummHQeSwDX1dkx4Ps7VfQrPxw4beTeaKQAAdTDnjBuvVFz8kPizzmD5RKWsdabHkTykg5EzfSs9s",
  "key26": "5VFpyGhEFzqXWJYbh3877BjA5iqYwv8JnPvXPrzAZZefrpUiMgYfaN59FQ5JRWQXF8ab8TzAALn9pVQ6o6mWMJgL",
  "key27": "3kPMo3UqmTmkWnghJdpJt6nGymKZ1N59tCCiW21f36vStaWivjLRZeB3wyLgmjFboDJaG85mB9U3iXPHWz3NbdYm",
  "key28": "4Y8fEtbhVK4YsTyFG4PnLgzBqmMbGBfW9JDnCZfSYFgmzTLRjK2LDdKY5z2mka7cUnLojafHwpPmwEycGN2Ea6vt",
  "key29": "2VAv6pgXSoytMQw5PPWUsEwAFotmjgBmN4yzXL4WUmNJJH6DdZTdKUEsMWp74VJiysMJEQUvpacWmrUtjXsoiUp8",
  "key30": "SXtrbs7rHKjpz2jxfCLU9YHWhbgMdwPixBPFLMss39EP6fYUtpxQCrwsZcJTqSoxpYgGBs4rQLq55AGZUPms7H7",
  "key31": "BkSWrWkSarzB4msydajT7bEs7MbkEWD9ct4cA3c7B4sLERV5CPx6DaWsMLpHfJxAHqw6yr6g6U1ahVHLoNnpqhb",
  "key32": "2JpbdrcCVKdADihU81tv3wa8SH8Tx87HPBxBbiKLJJzihsKdBDFzjdbSYZ96mnh29kCn65nePZPnywZnqHhEHSDy",
  "key33": "24J3zFBuAX1SrfoF4ejxsLwaEsqaJqJDi2KuZKEDn6LBUcBKnQVsoYWavaBR3ZyCEJxyKtLNQLim7cPh86JQpop7",
  "key34": "5xxiQt4pJTEmB4QhEc1LeHeHkrEn8rVLuNrGUvcQNQm543tV7Y6Es531kkx7dcTg4NPAmyVcxSubpTqA1vtWifmu",
  "key35": "5uCCvShJZSukz5Y5LPWT5U8hr6HKQmMfocBqy3GAuZKXErh7nZjxHFqRi5KW5wiRt1PNbsyh8EVGZoz7kAUR6kMw",
  "key36": "3puc3KHAf8wHfVZMv1eK2DxvzfYKFW23Hvw55TvuaoCnN4etkk72FzJjBf6QTzvo6s3J8eovDU3D5gCdRG6H853S",
  "key37": "YgAEPRgqnT7FfPWokvQAHKmAqg4jK7GieZC6sbk4EkraiVUGngK96V84AEW7Gxk4yu6Ctd2gzAytrk8jCqKykeP",
  "key38": "5qpxTR7vkVm1NnkkFwQh5JxBPYzRBLxFqYQfoGFjJckdEaqnLQKwhhAdbFsBvCsEEDPRNPYVMZjdRjCZaWcZNLQF",
  "key39": "WAGCqMoGigR2JCude7UfQJJmEbaF7NRkqqHJqbr2RM68j9WGgx8TsfHBzS2BvTb35Hj15osCF4pGE61Jsh4x6nm",
  "key40": "sAFPkaLoKbU1g36VnkL73v3s21p4HwaECT94m2nTBv7gfj5S3orLPfC59xMYuZuj1m1dpYnRF1XWvqiMBpYWYFf"
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
