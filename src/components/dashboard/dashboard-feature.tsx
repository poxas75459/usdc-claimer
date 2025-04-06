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
    "27UdY2DjRqfYqx8DsG1fyYR4xDWXeQSRZt8iegEmUSupvMGLavyFQoDiwyKwMAgJ8bMELE6aDuBACwk4U8wAocx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PhoipyCov58i2H8xWGPy94L9LiRpYeGZ2DyvbNJc917NV5tUc4QjdpSCftJugruxTe6NRSomtXJJNEB3ofoD2zd",
  "key1": "5dY6pfVcq9zy3NZj6YxNrgVnfdho8fwALQRKrh59s3jQGArTxK3kwYmaabjyEhno82VcDRhvZDHmDWZjmjQQQRuq",
  "key2": "26muj9F8AVPFjF38DCCU5jFgiMXmbRoFuQ1G8Lce86qQf8j8XXRMt3991jidwT2wprgpWVVU4f1egdzCL2wD4oJd",
  "key3": "5a3AGJm95eCpoGmb76WsRc8bQ7fkmv7S27oLBmqaMsQNfumQ8o43jArLzyWvW3BJLFcFYQMnBr8mSutbGowoP7wj",
  "key4": "3rJDFAGrR8Pb8Kxn5DAwnkXgqjFxGmBdyvQUG4EutYD1PvzSBaw6z1uaWHnPgbz2AjXQtSanpfWxooK7izF6jTLq",
  "key5": "tF7yHDTqW8aspShGzbbURcLCGuYJE2sGaxCdBdYXXWMtrwXRvScPYrUeq1HQHmQHSqsSpmn4LPTNoWc51wiomfX",
  "key6": "2wRMYWPdnE1hnA7zS73foKUbZFqEjKLygChVR1VZEgRxmGnPRhd933svHZgGmupFKjrkbbmCtb6vtyddNVSNszws",
  "key7": "3LJUrDAo4nB7x8gt68gmSGMmuW2ojfDVs5qSLxBcT2mv4hxNLq9P9QYViBynUUNKbgrjhrafgpZdGKEMBau4jWSS",
  "key8": "5B8vsYvBEsCDCdsrsGaV6dDpLn8LyzFqz9Gsgf1XUyuq2DHyPkJsrme2pdeDJgyw1D1w8TesRurmEwNW98WX5Zqp",
  "key9": "4hMo5hzdQwJg56KdnP9PCdsCHhyZpSBbrv8qHgfJKrAjPdQRFYFfRNsabDfqHkAcLPo2KZcs4qtERJTMLQz9Mfpx",
  "key10": "2TTsTfUEAX487V7MMThE7mVSBAYqraGoPKNxixHE1u9Fu9BWbpriisrQCkcsEdf2mcQSXYAYog6tMFcq8B2pSTsu",
  "key11": "2ZnyVowGWSmkypTxSTZbc948vuEQVjyMGmpSS6HtxuzXvKtX8vtFpCkRDuEvp9Yc5AEL3Bf98kyQv92VNnysbLYV",
  "key12": "WWviLTPyGvMaKUsuu6JuyqGRuuhXaSEXodurzqqSMyRNwsJkHsDYKFCzqS9NWvPZdeWtNDZ4tkcunNmf6MWQoCy",
  "key13": "3hGbP9Gew2QKwUNVPyX8HAkoukFpcDVXbZBps2xsMAiHvtdFqARmRyKKTYDt82pAwEeSwYDf2bueFfya9aQ76Cjb",
  "key14": "2hSCDtRs4jbEbSrUptwydGLagiqRMDchyaXmL3DuAd79Hmvc1pA9zqoZYRKfF1SNE4knmL7Ti4NGxqDhHfqRwzDV",
  "key15": "3bhWZXYSacTq5trcsqt93WFWuwQvSGaz9mXpVPMBjPNCcC17XdFeSsXMz4Pyt1r1zqQQEEhhzP1rkjH9Pr9BN1u8",
  "key16": "4V94Zgv3Htcax1pypzBHMdtAafRNHEherqPRwNjNoVRPh68wDHge473eqDbgx3ksCb2JbDbjwynaSPKuzGskgZGE",
  "key17": "XG1mHQJx54Pxu3vcEHZUKh2ahe27mS4srnRNueYLWqmCcEmR4YUXDQt3khi4HUNfMRd3qu42pKQ11z9vqYEnQRj",
  "key18": "5hkuXKA4v2Yo53THz52N1gc6aHbkEyF83t1xT25AiAmQhWyXmt2ujYDDPQJymhm6T6K8fzs1J9jyG5yeeuXLnwFJ",
  "key19": "hLDKpRywqKktWA5qCBFvuNMNtYJgZzpyzceVhpfb8aeDypvhWdNXtW8RSVFH1yay318EAhRW1DWr9JiSfJLXrb7",
  "key20": "2MpikG5E4fQYJG7LawznvAgAomLVEoirMnPE5gewiykcsprehnHhdMgo67pdFBDS63WYqM7iWKobXrq3E8zCEWVr",
  "key21": "2DvC1T2sjih9Yb41TMNxfuro92g9ezgM1i6bDLoc3aqDqzbwTYiK9ccsuEXeqUj3Xu8rxchFfbCWDk2e6VSUPM6x",
  "key22": "3g26utg2RTwzxzmKjho7GWTVd6P8G8LC9JVSw6vCPMdKGyALUZtNDoUfczNKoT7WV6Xmzkpm2iqq8eUJwX59TCoA",
  "key23": "5PpSyUaJM9gCztpuqDRfgNkUCxBNDXPutWcd7JbpNwohUPjbTZypTTnAAPQVicwr7wUfJm9emamq8H9pgxPmwM6n",
  "key24": "43qvXQ99kvhNFJFPzsUzqxH6JzR4d9tCu4c1tzXNL6jSwDXyDwXcDN6xX9BgjEiVQB6Y252twcU3TxzR4pBkGebS",
  "key25": "4brseYQDc9RzhDSBErTnQdFTA6JgWowt8mhWJjZ7UdT7du4PKnqi2dPgqSV2mvDpVpAUEzJJFAFf4HWwdKNAGLNf",
  "key26": "64KfKxMwxWEp3XuepHYiwMLcHWTnqnhbcwS3xWSzUPj4jeTwCbb4FRSwPA4yLQZQw21HSLkSYCaSGMvmvrb8iACe",
  "key27": "gbUgny9hgznrCfRaoN2iuufwGdgPdS6cQQJkDRjNtT4gphaDhGpUHaJAahYJ8AYFeJ4gQsiZtw3ncDfgrrjuqgd",
  "key28": "3P7oudU12YbYhhwb79hAUy7MgxuHNpPxr2BSCysC7ieHsowjSFXkLXTKJKDvRev1QDZZZifEX19wCd4pF5R7hhiY",
  "key29": "2Sb45gsReJpJyM8MbMtqwqujSk8sixYXdi4i8N9BmxS7Pbd7gsVD6K86x6aUzt4t1rYEruCUgUtX3FYykSvUhcJS",
  "key30": "3NX6grR7wgnZZ7iCbug7GfUbiRpLQqBSYYNud9qfqjovWdSNowH1GYUHC5e9D3NZDY9VYPgK1jz5S4EZFVAQrSDT",
  "key31": "4TJxxe6kRWbtYNM5yVdrRviPg5pKVPpcguYYA3arf76ewXzhBK2uT1Qq9cHQYVZAawUAUcndw4qLM1XfR2n9DjXb",
  "key32": "4dxvj1NnWL6cDz6kkFqviTB9mcFuyaXQJXgs74zLevGJZHKWZuzs5YwbG13Z5Y1bkkSDcA1SkBJAcz5SNWCTG7az"
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
