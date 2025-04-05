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
    "4isCqy8U8EaMs9K8pggzJMZWMD6UnhQ1sqxvnC1x34AvEaJ6x5dFCqSF4uiXKFRhCmP7sa1MKtRuaTDH9yEhLw8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o9ARWMFyUax5fSvN9XysKqxvZE3tKidxhgrV5C7bN6aADht69RZyoCyLsHtPULL67rxwP29o6ADDGifpH66mVo4",
  "key1": "5LVV9S99mTmqXKzHdny9gEBCYta79LkUBAiJ1YNGNTg58rYmP2aJoSsD4wZvfLWkYbxFiie24DWbaTZypJwnq8Sp",
  "key2": "6mWsN2EvdVBh2fXm6PFkvn9EEnDJf6yXonKmfKMw9u7BjQiUfUX5vKSWoY3HXSuSoxg2SBroCA8YWytWQn2QECu",
  "key3": "2kscePpBXSPpa2GzwFTEDUAzvpQmENXcxsNeszUecH6Fsvyj6Phy26xnxt9QooVGvphh7qD36ksbFLPKijDsgwkS",
  "key4": "3gJKvD6kWwUVjXpaWfQ7aik8giepXNzW4gdGFXbwewHDtPoegdvYcBfrg6chA7MgHDSk9unUNq62HZKo9ZxSj8DQ",
  "key5": "44jJ191KeRHhkTbHWbEEf5myp92AyeWHECufYcZTThr9JUaYguNRDMJ237mhkjwzdmt8bW1MtDvFde6B6ueWMtWM",
  "key6": "3DEgHfY4HW5tioQbzNp21RjdyHEn8pahnqGres3sAks7bWf6spTKSijoSaWBCWjBo32U17df2bM2FdspmSXQKRip",
  "key7": "3TcbJ7brjEUJAzcgqpprATwEgFgxjUKXMGfzqCCzYFsc7pLExnpwXVm5pmSf9DYUR4swCr2H28BndJbA9CsfFrJt",
  "key8": "5fWGwuAtAumLaa58fZF2DAE8EB3vedBTW3w8iFrEtSWi7nWNKBrsgyLy9GFZ8LSJrwf7Ak7oDDBP2aUyZ7gVcGbi",
  "key9": "5dbSEA1YsYWrdqGLKcYFZZFFoXTGwmoVNjgYo1c4YA6A9x5H3VUJSqXFchMndAtJq6FruZeAbkehXKuCnnA5ozZY",
  "key10": "51czNEDZ8tcs24oo29tSLowBYCRCRbeW65q4hWPDftjwrhRJ6EnypdEVUfis1bhhSvURP23BP6D3MHdwtp63y6Rz",
  "key11": "56fR53t4bzNwconUEckhWgCqve1s9FTVnmtrxMfKj16YJdV1d4FC7Vb5wotpYKsLnAtqxhmpsoRccTV7q9MLbFSz",
  "key12": "3HhADL6vdU5rxG4uAakzSZTv1VwyPfRax2nAMS1soFuTCN82W6iwxkn439Q2vzT3iEiKujfFtNVkedG48BikppyN",
  "key13": "4txbfAs8byvcRcBXjk5udP8hAEoDHavUHdB9CM2ooRWh2o87PjnTUtjnWxkZVrukLnXYNhRczPpswjD9WQGq7mPy",
  "key14": "2GaNJm7RhE8SWCSyHPretqNfpT6dLzkwKbWnmjzHrcZ5RNk7UK53q6DWFGoSLbVuubotJRMoMdpSGqJgZde3QxTk",
  "key15": "2KBrmcABdpS8iXipoMiLazBybAih3DeDwoLb46myTkqAYcH3GsmWWFAevhPc3HmGBwGdgUwh9ynVHzKA7u4i5UVy",
  "key16": "3tUTwoDe5V8i57xBZ4wxCvK6CHEr9WzsHumJfh9tGtFwzsu7RE9PTt3YKn14X3Ja3rYddxnTmrm7AtyZipVBGNhP",
  "key17": "4qvpnwsNDwAFNu7YJHRWbiy2XtNCKQEoWAPwq7qFLPXTpazCWb8xe92oTsawwZTY3oZVWz3hvMhu3qkKDch8d3pZ",
  "key18": "VmBob75w4TRDa3gvrhmsLSFavk2L3gefnvn8Fqz4P7TT4jcYepRM1bcr47uMnEa2Kr9pJxgBRe6szbeGHiFhpM1",
  "key19": "4URrfKkfq6Su11V6Yug9R7dMYdp1nfmnHVksczmEcYccdg5Rre9EiDAesiCeA3ZUNDwaRogRzqFe3mBBoBhTxJRY",
  "key20": "2juFX7Ns1t1FBeMGYahq8xGiQMaBGFDy4tHc5hG28Z68peLbZY1j2bXtR24RymiTLeXNhe6V9Gytbn8QnTjSGhAP",
  "key21": "47eNxQtDFMwGYLvd3m3uVV3RKFtVCfcwXHFezZoKApjGSaC2EgjnUqAEBAat6tfF649ywV1djTzLPEJM93Xo4vus",
  "key22": "3jKb27i85aXRkh3V1xDerptznqMXsRCZ8NSBiPdoHZoX4eC5KfcbSf745o4UCCKm4pkvgiS9cefhBGsgWHvYneni",
  "key23": "3bsAtgiwjDxDpS1xag8dq7zbR8frVFV4WLA9uCSwdBeRkPUEJBSN7aCfhMmP47E4m61QkHGSpweALJfGVJBRjp7T",
  "key24": "2vxFBjH38XtFc4vEz5umuog6Ktxy55dKuymS1ZjvfLupxV3jNQQ8ypH9Jw1q6pdDiGiH4EkeyudBzjdrdF9WY1aN",
  "key25": "5M3XufB38ZKwwAVcd5tzNe5NuwRc345qrBvmBLPZLAkDhQBTdcxDgRxNYctSfoXvRg6aMMcbRqVwEazg56aFPJG8",
  "key26": "33i5T5dbkBb3QaxLioKcA48o4r26qoXSqZ8CMNCjR6Pf6GA4K4QxJ7nt9Z6BbXBhvGNoUUqH4xSuCqwaG3SPMGy8",
  "key27": "5oqJzq6h1YHqyMqa6RF5oLHSH1merpJwD9GJAXLA6aHwLwUsXpP6DWKjTw5sDz7Kt5mSq84t6gHQVq422WmtJY9G",
  "key28": "3HfizbHW76Aj7mCqiKrakVMc7s5YwzxZSnSuNijLpyXsFMegKYQ8axYsWiHxxpYt6KCaNQyHJ8ifkuWiF4vuGYwH",
  "key29": "2XQZLjUe6pobHafJQzQNKAu7vY6e1vezA1BmUDAqBV4h6KCphMkmDBC5nNLFTzepuXrLFVYgVK59gEPuRAVxiNpL",
  "key30": "2AQFtfM35ZDex2U3FRQkSffNDa7nhnRvGdEL6rBmor7UnNrsRiwBFhH8pUmwqNwcgFmwyxZZPadiQAfjJhBod4Mq"
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
