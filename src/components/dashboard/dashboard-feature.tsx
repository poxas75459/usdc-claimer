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
    "4wGtGZdp4w5jqTxD7X8ZEgt2RVr5UzXPRKH8r1y9LgRHw3afFH3FjF5dW3g26oz5rhxB6V7w3xVoE9tQCG4mzXJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RjoAPYpwpWXBbBynbXGohcEjYbVKendUB7YAvZi14X5q1nfkdKVhUiAvQ8GdVYtkR1iotxt1cfZezPrQAVmxHXz",
  "key1": "4Vgy3qpEk6kV1L3GfDXBTwYnUFDSnoK9ca6J9kpLzuv1SFAUSTirDFYPYtPYXq4mAHu4PPEGG8g2Eo8AVaujhz4h",
  "key2": "2qnDGbdErws2pceoQXdffEnToF68qRnNCpXiwu6gpe9WQZVBvAbGn1JG2VNB5hiFLMVBULqqMLYXxuRR7T6jxFUn",
  "key3": "49duz62F3xPN9z2VLacsNdMi6e8Whk8BQ8AFSkLKnvBwkKtaWxzRAYUm6u2zVQdTEYxUVLK4eLDyCFKzkq9HwmVF",
  "key4": "rhJtji8gDdhHsDNHJw1T3yMRnrUG5afvSydaebBYYWQeutZCCZ1ZZbkTY7GbcDGNzVattLTL9J2wf8c39j2xvRL",
  "key5": "2KEbiDtBCDborWC1ZsMidtbVRy9qux9HQoypTwKC6ueyaSr4YhACYFZd7iEogfLpT9cf85FfNaP1WKrPZ6hWKxz9",
  "key6": "4utFHxo57bd81zNFvoriZEcnSTcdSohP7KKYDCgrDk85LVpktvv2kvZ5nGwGZf7bM9aqhE7WDgZmmj1nsnF4f6Mv",
  "key7": "2AiAsGS1WQuiyTcJ2FSLLtmwbiPPKUHRUQmPnTkU51Mbjfn2qPTeJ5842itXnGQJ4zM1No6s6MXcvbqQVy5YrQj9",
  "key8": "2Xgq7r2iUbT1Aw7YGrD6Mi1LxpDs2XpDKi2ZJAMBzdsmG9wGoGYn45Yutj3AmpLGT1Z4cL9cjiB11vWqnq8TeqBC",
  "key9": "86Acmd3s47pvk7DwbxM8oX9YNW6oi9h1mdTyug3dJt1GrVRS9UuyLB7T8ERTnYxgKbmEKokasyGSRQ4SVUMAvcR",
  "key10": "5g6us7wVh6QPPNa5vK2r8dEnSDPqFYZ9TqJeqkCLoR9PivRi1foZncpyPgvq3LopwVJWc4qiqqe4hMtvGHjWGFBF",
  "key11": "4CBuSd2JLg8Wh3vCCaPsz62GwSobHNTJ6i7xxzfPwb9a2HJ6n4WF9pUNP1wVB9CNyFM9tVeSaFvgStphkWmzL8yr",
  "key12": "3YuV1hqVtXgjpz7p9BKeSHBoYdihq2KsEvkGH3RPKzhkejbrnsHyK7eo6Ua2kuxmUU9CuQkGgumUgBUJRVQF7yQH",
  "key13": "2Gs4q3CiroYU7msKUW2NfwfP2t4CGAekJBgk1LxNyDA1wM6AnuntqSn1i7TD7GQmS1Be6ANA9RfgWq91Y5vXozHz",
  "key14": "3Gssm7NNeXKjVisXxhKF7Mce2jfegoB4VcyzArGCpRAGevTGzhNkEjhoJahMdiuSPpwAu5G463efEak5NFCsBfbk",
  "key15": "5xtURhGQ4p6a3PqTohP8B74HuSqbp2bMKPqm5HKnVkfJEm4ZEhb96m82HrpyFKAiGcSkQXzThUvqCRUK2jfoc6YP",
  "key16": "3oqQ811irdqcKvywa3c4kzMWcgFzsynxAxMEU5C6zeUMeeymDJCAnsyJndDHFnbWV3cQKvmogSvi9CtTo9eoyEn3",
  "key17": "3WPbsSnbk2AnYkKjdcogQtNDSfL4rQax2cFUqeVhBYy6A11oidf257oGPnZpfWdjmFc5zi4SjtdN8pGL9U84Gk2m",
  "key18": "2NAeXhZWRXHnG6v6aKchyPjmyHd9BwkcB8btqnupZ6XP5VnLpG4wQM2SvLJRmzcHsdLaHmEHKFXdA3gD3c2yjUfw",
  "key19": "PSADWYbWnPBtRcux4wKMscjMXdc15dt4QHrwy4KUNtfGTMueeBzFc7XA9PUrUMjQcCPN8c1aUzopvYTaXFDE6XN",
  "key20": "5gtx7h7k61ogJUk3X8VFZfrRTHQDrcUs2yB9vVMd28tfpjtb4catcufTqaine28yrNnm7j6uePkk1MKHhZSAYv37",
  "key21": "3J4eLCMkNbJ79WgjPGH8yzQZa5JjdRPBysuuPuxmLaUPVZbXZYnh3v6zZDAVrXZ7bRwTJqmBkzhmyu7vw5FxAB8Z",
  "key22": "3y56ppb2yg7xXJq3AbhJF66Qj68k6UC3UUpJBYEPzfUper8czwv2HufpgH6N6rGfqaaAcrCN4UhJqR42wM8bSffN",
  "key23": "u1JKPWGAprGrUfm2otsfAnhyx9LcsR5Fq4VKkaqvmGHz6rjYTJdpPj2KpW88h39YEMBuydSncbYRD1EoG9uURjk",
  "key24": "3Cp9sczpyLhAVtjo44y7mHcRZ4pbzVYJEYNkpfYpNwdmhDYW4tJTqC8dzN5EWwJVwNopJd5m1BSJ2LKX5J7WAMfU",
  "key25": "5kwXBaLbjs3wM3bq31ydiwuEFBC2kw63bR9xjnvv9GXpPfN2VZEa39asDSk8JBJC5cjf6QUaGUHdRKthvQW5XHEs",
  "key26": "635BZy1MT655e83911ehJCXw15z5GZMKX787RyeZQbKYZi8MbpLzr8YzWwq9F1G7JrpSpKQe41VaDXg1t58Lib63",
  "key27": "puPXLz6XQaYY2WoHuTVKcjnKUyes7RiXgusqsDMNrMQV6VKLy5jmd9435JbFaerwz8kRyNgS6D2HRiXCq3quhcN",
  "key28": "4DvNkYyKbkFoY3KhJk2eoqUmGDx7JjMHsYpKAsqgjGrqpYxHb3KujkHjeoU21txahteKnByHiv8SKu2B77G9YrSs",
  "key29": "2W8msg4BpcE2DE6KdZEirDSDbYobtXowe8c9NyUrW51btjL9v4SvA6nDx5Rzi99yEDQvAV5k17YZUyd4sxwuYo3N",
  "key30": "3tR3ut356idU8pk4nXmqNPWnM5WpFibS2ys722UoaDPyhc3r7ZeDr5zMMd7YvdriAwpehcMGsHMEUkdWyFqT6ykZ",
  "key31": "HeujAUfTVqb4cRMPQ1WK2TRQNyezZ9vCgX55GZA52RCqYSUQ9C5XBkqN3w9BsrAuJv1rgmSVGPfH8K58snvwq8d",
  "key32": "3s8SmvPapg1VCaBkBcKFvJGKGKUWc2J9EFwhmLZ9puK7Uq8qUE1ZWTo2NDL1wnzDgHao2ysYVF1HJ6a387a2eJSt",
  "key33": "2DgcGkzsQjQRRWoeAXBuQYQgjR9xTVBdxSnUN1U9r7MZ2FByi4c6gvzAzes7FYEtD5GmavrgZzm46y36AwyMh6S2",
  "key34": "4enH3rVdUSuUTybCLGxGcDBLgvqdS3Fo1Sg1BNEDUYM1uQEWtiwwWSe74kH2qKPCvt4oPCsxySGWmA5mvneHt2Vs",
  "key35": "5Qi91QFJWZDeSoFB9fjjYPyrU3R6xE1Wsyz9nQ6ZKp17ui7vcwDPwGDJHYkBd3rywweBuVRZCXB6L7DWUE78roJK",
  "key36": "55Yi1MQca9AbaLvUawnvuZFZuT2q8G8KYXpnx2mnFT9MWUq2dcrjHtbh5cpXV5JbBBwGLn981uGgnaZmqm45aFHE",
  "key37": "sk7pn1Uwj3sBkD7oE6aJ7xFoBEWAsD4Giojq8uq77RifEYuNm7S63P9AXR7KKaZpPiJ4tf13dWs7RikhXP3DUJW",
  "key38": "uYv23zjPSnWWewTsuXeLxnPym1pJebsnUc51VcLcpQmLaLqGThuPXEj198ia5Q4rxRZBhrxwf1vtQYuVMqyYt2Z",
  "key39": "2hY62A95sD3XwU8piNLyqHrXqxtqKvrVspHn9DqUAran9RZkdohJARs4dPaJkXbE49ZYPLwKzNPZyBWJXaE3ggFy",
  "key40": "49Evdm3SmVhmzJpiviqCtTZa1Fc6URiShu9YNmaiyVW9vrWamWN7P5ssPd4fexQZULUKefpzNtWVWDYjSLaKQwna",
  "key41": "2iAV3PMeLFzYsWfwPEtLsfL5rv3oiUXRBTzkHiW3eEvJBdqTFRWRZk9NYW5qGn5XcaBAqNTZ4SzLs5R8yrDPqRWi",
  "key42": "2PxxJD3v4F3VShcVuWGoiYUaeNxoVY8wb97S84pnQCUMU6CJr63Ce44793c6tDxbzVqMPpwwg9VSBW8mhy3TMQaw"
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
