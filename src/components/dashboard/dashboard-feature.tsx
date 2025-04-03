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
    "2EVNguFjz14G4CcKFF55t8R71dZcBo5d45gy9tkbJ8b1EF4xV61zsTGdjM9KhHSP7cXUdT1cX55vSehEA8uz5CLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fUSg1UArunvx4YMbg9kNPzZmMKCVKYGHpEWvhzZ5dGEBLdfgUAJ3fe3niFMavtFMW3AELj7ExSC9WidsB7QEJT2",
  "key1": "3vpser3pHymzx8CchFrS6y1ZutatQsfrC2tQX9UxZHRsNyC4N7qmb9AzVwrCWjfY957PZfHpS38HLkGzF4kYYyVM",
  "key2": "kFHcAvGoAgTZaF6GBGBKoNovVDyLS48EUMHQF66Z4Qu1JQi3VcQm8y6QjQsHKX4D7XZGhKNTWYEg7nNbmmihQ4u",
  "key3": "4SpnR1MEC1Ux8enKnnJgVoGc4W1ULXY6i8oFdTqcGnF329cmyabpAXpXCBvFxJiiLeKhmwQZUVMq8B4E4Fh4GSv4",
  "key4": "52n3LRNvNttiuZzAJiUSR1z8jTKNd7wWN6xSFfT5ib859M4QqU2GxmsP7DfGoeHQNNV52pK7zJaZbwexbbv85Xv1",
  "key5": "3DGNKMzqR1Cs9WS1ZVggRPcbJSWCvndRYb42o6giH1TMnTt34zx6hSir7mvWqZeNn4yUNHitYPKACU7mS3C4XNLT",
  "key6": "CiAetW826UTQYqxTxnCXTNML21ndCpN6f1ywrzL9xh14n2VszpTPJ5k2vNttmYKAYhwUc6K3kUp8Vg1QJaPkpFp",
  "key7": "21P7xbZmrhznPWhXJy1y8gtjjJVaqmPZMzi9rFU7jJ6znu66dTe7W4XvYLjsPHhEUK5CUdCpoi3swMJDQxkVcMjA",
  "key8": "3j1UqdMYRn2zegA48SUN1KgWwtFCdxe43FTJQEn8PjUr37XXogcd1b3ftjxCzVcbm29kC9CBw7aUDYrHQvvXZsW9",
  "key9": "61yLNmc7ab15LZEmpEKFzpj2gJu99rmiYTJ5Q7cK8V6xywMV9AhzVhcWKLWBHcGMUSscV2er9tzo66aeByYLCsvB",
  "key10": "V7P16nJqFSrwQVAqyMUrWGWPzE4sNWFhYuHfRX82tfT9xsSJoh1xWiT4ohybUb6A6WAPRoYyRQNfCRGouNAUE1J",
  "key11": "38M1yK3wMFYHxpY6cKvvJEodjk1WG3VQaPwmtzTqpJ6snjUPZRshr9RFPL9xtCKNnoHHEhsVx1P4K4oumufwM9at",
  "key12": "3NUGLc7HJH7XgKLWHqMFXJX47syVn2xXaB4Fs2W88bMP68ZyxB5PGR1UWn8ZegKYRKckPAR2V4FF1g8rBHrA3pRJ",
  "key13": "63Jo3KCFwLjVpVZ6kHWwirNr7RjArbCspEEqTUWJ86TmkjevAJYctF4TZ4HjZP3jAZkQgWwAaymFrQSFvQaBfD2n",
  "key14": "4GKuWZMwEybn2WeeCFkx4dB8jAXCGGmcdAteJGKZ9rJ54AXCsvYT3TRXcmvci8DJGw7HuJZx4g8CU7r22axdYfrv",
  "key15": "2sDzmcXXtTPVeqE3rD49LEeSFrXZtKmKq5YY3XJZk8PUMasWXYeRPX4NEwjJBjWxFu3hRLAsjFPkvLYUTHM1LNCT",
  "key16": "5seDYhTVgZL9fo2AeAB8UGAXsYhvEi8tFuVbcTa6wnocToMJh4T1d14rZ9MfXnZxLzTMfp2D5PA2XLFs6CRSHFst",
  "key17": "56wD2pHfDqxUfcQjMFd4uiBpgVoQvLqZqLdurAN5XuLMKqxNYAv3H4u4E3hGuHMMcnmJ9Js4EqGavwPmkGs1Aymc",
  "key18": "54rCJEqr5LpkQ5H94GEYBwYbpZ67trZUJqjjJTzA5VTswz1DvyVooZNmLZUDWAUqQFSu7PYXhL1kAvMBmTMovFhL",
  "key19": "3QdzExM2NXg1HfS4zuA6x8djcUBRdEzG8CSmHiW3yqSMDNp5iqQp842CLBUsJqntiDVbPPXS16RM5FMdhhVuooRJ",
  "key20": "yShKdppEef97VyE4J9TrNRjVWuSfiNndcbMyGCURzsvPu84NcMRP2aXWJFySVXMXgnGdV734wTcbhGrExESYzSt",
  "key21": "5Y2QNQ1Lav3niQzP3vhR3Tk33XEG2bZ7fpQqRASxFxiFZTa5EL9B1W8gggzk1wiLHGaqw3tfp2ZNVRnVmPn9rQ4x",
  "key22": "2HYq1vyi1T25d9pAnU14jieVJ9P4g51DMUESYPLizM3cF3nrVU1BoDFZ4ZTxojXqGSutPGNUg7dVkcs9DybStXT2",
  "key23": "Mz8w5TbL8w5qKg49ZKkUXg7Nr3msWoBRu3VMG18UKKvPJ744c8qoBAwBKWHVSseEnJkPS8W8xcTWRY6WBdevdue",
  "key24": "bgfB7iMCGeKDbEB3b81HKc8BAtRFNy2fVda6EcYty1M5LRdetV26hMHViNqetiNHey1m6bacfD1YELmH57Y2C3p",
  "key25": "YJsEWv7HmBG2P7WwK8kuTdawKkKgfYo18CssfV2mzYmZyETgnJhoj5XoBkisoaf7weynenvtRXH6K6wtQPHYaR5",
  "key26": "SWA7DH6CYbZ9cuY7i6nC8frKbJucSTrYen2Sd2idpdNbZCSwad7sXvL4Xjwo4JqZAbc7EoFovDWLYd8gp4eRmM7",
  "key27": "4an9vaWhE4WGsKGR69V7dGnsTDZN5ZcwhTxwexq3DgWTtYLHmJib1cASSL3hW3MB34N5XKt5V8U7d8kGxS94W7nU",
  "key28": "4AhBDJHegaX1Rd4tHfJLDa6eo1mb6gBjk32FyX3rcaNs8HVdf2hnwKsSEfBbZGSD8d1D6JcMCKR3v5anFdcbPpc4",
  "key29": "277nXZ4F7ovUkCbrBXgXzWE2Qk9SL4QGoJ1BafU96iKxzjiGtErqaC8vTT1WqBtbgDEUhuUyLfm5ufM99ArgKCit",
  "key30": "4iEhb2VmBPnx5NoapCYyAoTyXzoRDmLiASyyMx6E2ciidcm1StCc3TSTscxgQPuVE4QHtMtH8eVpYEXpaFeXybFp",
  "key31": "41d1t7em6hyuWA2Wtd9s5ArWWc4dtF6qodvkTHteMwTjnySvnmSQDufr3KnCpmLH9EwZX9Sm7fSENcM99wFKWVjm",
  "key32": "4mBivuLCowseDF4u7dfXSRzLaK9Y9WSVQtCdLhFDhEZhtDMtgdX3YK5msG9sxnQG9FbVXxqMTg7iqi7HnkVdYd5v",
  "key33": "tSMK9iXpDYoj4KH2eFvspSVcP4m9Zgz5PwFNarpBjWTo5mT8FmRkaX6GNKNnzMrXSiDuYaZb55GEhM7bjBm9UpR",
  "key34": "5rrNnoti28jexP7yk1SPvYUmDnMTbRRcPkorq6FK9s4RtALQutr5vwwVFP4G1ibJCnM5ixGMsAGS4sRWtVh6guAu",
  "key35": "Y9TBFNfjjHsuutNVhQJrY1uDfYs7MSjdAMnJPz3XzCakogRKFNki1kisumxgKw95Fszjx5zfWCkmeQDRcNyJz1w",
  "key36": "5ZX8mRDZJ3yyUfUBMkkuLnDc93TAsmc2xyx8gyZKhKhMo8prg5iLtmZGmTesiyc2FdseUcCM1jykjyVJ6oZNHe4W",
  "key37": "XkMN9bgA9M3SLuQuk4ancLwGxkyHpV2Qm1ytkR5MyCE7Uh9h9pvW9VGXPdGUP832cTGseGLn7VzTTpEPXZnXoka",
  "key38": "2yiAa7ecp3FuE9SaioXe8bCB1pvnf2FbqYt8UYcfs4PzdW8DGnVCqLhtd7JfNwaHp9huvmVBgtAAdfowyoUgXqmT",
  "key39": "5oSiUWBuoNtWJzeuYgXzXQduD4SCpYNTTqazGKUbYgVvMG8oMjk69NrYFmG9fXALMnR8mHuHQgwW6vbQwtcGjTFH",
  "key40": "21ACeJiEG2K6FwMHhrnd7uZeepLTX7owtWQzcZbUY4tXD2End1jmPeLTdjzR3fXom9Az4fLJXSCAmxj8rAuyx1Wg",
  "key41": "DzVAG52y7hhisdWardBQzjKD9EbcXTqdQ1m9wdtvSk29D1cbDdG51oqCw1tYTxdrncQWzc2z3P7rzXwH18zSGfg",
  "key42": "41GTAKjXU3EtFNsDv7y6Kxpnsymi7aEEv5A4hBuw7EWfDZUD3K6Ywxb26QjfDoVrwVFdM5mDRQ8KwMv9cAdfV2gq",
  "key43": "Vtobb15objBrosXcSyjNy8HhD9ZBEFTtiVo8eEjN1VehLphdDFgb6BqXK9vpeMCifYf4xfGo4wQ1FZW6LNNPrYi",
  "key44": "2FxvnLXoaNhxiwwAaZBt759sPSSrkpBG4jyzF4BeJdxgc8D6D1ngUibjnqS2jFfrfF4WUH7xJ3613WacaE2zNPUX",
  "key45": "fw4MkemC39AUgzo3qYnf2KVyNSHGZzDtx3dzsLqvXHDr5bwLvUqC9is4C4CT4oB235494APG6KUSQ7AKGWr3VR5",
  "key46": "vnHRdsQjfKFgYmgh5F22X6wNfjyCSoKaAbSmmEeRYXQMMh1cLd4zQMmcDvN4GBinCm852NFMnugfgpdf9xg17hv",
  "key47": "2sTT3PNAPAsF6hS5A7BEXG4zzQb4XPuCnmsgxB496XWPDW8LRMmC5m5KpqmkeWi9iKML9PxHjHRyyjHNmMWQbZzQ",
  "key48": "uACQbN3FgaV4m6Tjv4jc2FchLEWwQPiHWW85XnyJYEWTpyPNbHwqF6uy3sJWfvFGmYukziHNH9E3tL7cXQAsEys"
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
