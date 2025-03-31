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
    "48UGKepQ9hPMuYqEmYfA6nxJy8fGFtpR3Yuhu76T21CGAn49TfvUbx4vMfQsFNW56iXXUENUA1kjtku9VmFfULFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tocDwcTpdEwKBDKQriVxs8UG6eYJ7WnGU9ZEYcHkSNXHcVA1vXTgqNMLTxdVAnfXFxA5mtnF87ZytU61F1YzeJu",
  "key1": "5Ji3rbLq6eiB1pMUbeBBAUCHHk3V6TpvNmBoyVXx3vJfwBxUGzB7B1hJXksvCyb2qgckVvKKJYz2Q4dmGJYTQDd5",
  "key2": "4cRLBs6AFY61BfnfFLbhSafoycvjMRUDDrhfzSdb8o41zPt2KDgqo4q2LcCr1pb5ReR4B3Rgs3YDYRBPbxSnCLxR",
  "key3": "4RG8uhqU59AACAdFSGcih2Z3ZDbPPTqw5aNS67M2Bsx313nEGFvhsP7X6MbqLA3GmhCsaye4xBrUG7979X1ZFiVf",
  "key4": "287B4tPhXkgPTFuDxvvJwwsJ3gMS1LBMgP5JauQP2eTPF1NUZnTbSt7TMpChyod15ffjEEwrffb7wzuWTwT3aFZy",
  "key5": "4x6wU7PRusYLGbjeFM76kE98nThKxHwWPgeZQbCM9WLaqGiu3KVkRwdiEikyAW1jBYzD4AsLFwnrkucvzWYtsxMu",
  "key6": "31SwSjphCcuXr1VBVZWyBQ2XCkeEx1dw1hsjgzewvta9CWyM9GXowiyYHQwnybY7M6x9Gss1X1W18VkcUUj1zvej",
  "key7": "2TK4Q881dcq2sdr73X4tfArZL9Mxrq23eV8FvFgRtzSgfik3xH43gc5dqMgmYzoXZNPo6KSgELC596bztum1HvH2",
  "key8": "opeHiXoM6jmVGYfPCd5vXELbgQdHS2hZHQvC1H18hUitQ2rVajXB82SSF2yJ9Mvm6TimivGmk76MCVB38rK4r3v",
  "key9": "3wgG9n5z6EvB6iAVoLv8udYjWstZTJQ9cwd4wsE1xXF1Wc1WTFe3B3bGs3wwAuLYtdJsWNssPtyMWuduBFNjwmio",
  "key10": "rCAWfd6LJrnfjMPqWnWsVrqKz1CpcwSkxX9vXxgbfUrbEfdUyGLWsUEnqZJg7nR96HnXozA4rA8Vwsj3Dq42GfY",
  "key11": "3VBghVxaJM9s6ZSdSbaNosJ7UMpCY7rMPjAtfikYKZR8b7xaMMnoJzTsJUUjuXbGtT3TyarxFVqHdkyDePzjPg4r",
  "key12": "3RcVGKTACEpeqNWShJHoJcAg8gZvzsFa96KPig1fnkRt48px8eGyvLNHwAU5y4LZDEGVKLdHyC13w4UJka6BUefk",
  "key13": "3YsLKffPDGVbcoo43TethiG6EDqVXvHg3yZJoEZe2rJJxS9k26jDsdEuNuRA3c4titiTKjYSyLYYPmUWJmgAJuwt",
  "key14": "3t3TQXHTgDQQGhEn8kVtyVsvHb21TY9d1qE1mxyPXsghy9J8vRJ8APJH5FkoUu1d39PiVtecjHGBKJrYXCgJc9RS",
  "key15": "5j7HFzDHShkSpEv2kQgZTPD4P4AagFvkyWSNeHfS7JQs3db7XnWWVqLr6qmGPx6EQGaruWvz1RJXAYVsyswvYrtU",
  "key16": "3Toeu8RKJu7HpmCSHyxmTwjwAqT68zcerBVsFmNTq3m1vTD5TsGEYyNQJMDcMqH3nyB5xxysWazgdi2ZzckBpFrc",
  "key17": "3qqj43SKc2ek638cVKA1YKCMYAxhiYMf7FhRAtiA97b8Wh46PnvXFJrtwGwBFv6pyyD3jJ5Wx6QAMnxG27iLcLYr",
  "key18": "SQ9w6iawzjxmkpwhUVaDEmJYtAC4UQkS1QP4pwwqxXc93VtV9prnQEZ5u9wciEFS4n8tXEHnMRYC7PWD6dGe7Q4",
  "key19": "2Wo4g8wZgMkCxcWYoag6M3ygZeRaCydZ5dtXgT4AcfaF1X2azhjXgKKF28xxHG6319GiVitXhSdoSgWJTmJqeHcZ",
  "key20": "5HGkDCKpZ17dHWjHiHYnps7o9h4k2Jzp6Pb8tLv82kDe4vGwnw3qRFoANRg2xKxahDyphwd8fH6gy2L6wnHr7GgE",
  "key21": "4tfokYw7YyXZKWyzpZPorkeQq4oudbqRTqFzQH7TH59RUWtDrhAs8h7JGzCYQuJ89ZrGQ6N5Lma4SS3hKWbVZZdj",
  "key22": "65MNn8sCFeUrEx5EqTcdPPtmR9ub7T8bhGWa2uAP1Qr9Gqies5nnkJXATLEPu1rGBwQtwvtT2UGyvjwSGfBNfDp4",
  "key23": "XHgiZ73rCNjRCfrNRDKTRE9P5LjBQnz6GfMw8Nz6JNeVjmXPMdcz8WwLXnGxy6y4yyAUQ9rLytx8z2KojWA2Nbt",
  "key24": "3MCZdjCq8SchXJrsUoBhVCMWmQEUPfTpuoTPMdSSFuw2k6yb6rhZsA9sENRBuJbsZwcFiyQfqkxSR9nH5gRZRWVC",
  "key25": "2eaD7MBZs5cPetPWcFtAFMz3MHGb5UCpDaqEWE3YjKh4R9LpbtbFAF6S8SL1zEkYPK84tCpin6zkx1EmrY6d17zM",
  "key26": "LzrFtQjDkgtdVrzEumsZzfDfLATFrU2nLBo2X9jgBaaV7ab2wCiUAoT4Qzu6RV6K5tDut61usEKcynjcQW9Dpf6",
  "key27": "JakzfFfSsYm57jcKoGkHzgJ1Rq4LdieLSZ7Ae6Pcyue2oHqERK5sWGeExy56PoWug7BM8Mryor2ymF2nRgveX1G",
  "key28": "5dXwj4u5PaDTK6AERfj2xqb3dnJXMPZWntXP9amU8xSMixvmwjD5zvhsrrS3SMGbeMKmdzCkDuHdH7SSw54bV5vU",
  "key29": "5UM1mLYjLuMqeRZYkWNUMbJqUKGFdRHGTvD96EWgbfP8yq52CyubiW9yinHqTtskK86TukNkyLiQWS8meJRc2BDV"
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
