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
    "5Bkh4jPHAQp54n2cxsEjaCxec5fyzGZWwyFngYzBbA4g81vL73cZMnyLPubwRdXGL3QS4PQ2jWjFRTuJhZPQynFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pDgyNkscNks19rUYAy3KKk95UamQwVzxm9MGrx1Xfiyvgekrq1GdruZao3sCg4pR6d32AySK7iu2ERNz6ExRisn",
  "key1": "3gixzGTSXiaKkeDgin1KwKwHgWSVZjHtHJCadsa9vUQ7wURV2V1HgSD7imkkh4LhZDJ5x2ofNFjUoXFcc2dLd3eB",
  "key2": "3LDc4Q4e3k5DbUriS8NKc87JyAmXUG5ikKH3vx3f4nNfi1hbd9CmwXUobb2vABrkPAj4dXqUEXwg26u6h6rofE2k",
  "key3": "4VurCJKdQmJ1mGMBz1BERnU6KsajP5SVK3dKn5wLGqADCHfqC6WWxPZ6XjJTQc1QpCwF9H5kd3mQ1NRWuFwJk8qJ",
  "key4": "5FHWgtL4FAxcFYR6G6oCFevYTY6nkEuFGMBV2LmjGn97UNcLh1YdQWkkcosKBaQPEUNwmryLMKnVhtDkw797SLuJ",
  "key5": "513sWP116czgq68KkDUqXK8LK4pRnHkdJbVf7gAu9QqiLD11mmqGgz3Gg4dVFUofmKRQUX2enWcApgWH2ymVSSMW",
  "key6": "3pvac7APBbcWxkyge39E9bckVTjMWKZ393UdyFPiaxB4FDXuAdC1vAsRJGcG42ZPFUPzCgraVM3BJXjuhnq7RNNn",
  "key7": "21HJCm4rtNCmsfZxnCYHcoUzuPMAwwYd5S67Ctk6SpCtZAarFFx3c2mXHQZotB7ytE2bon9jjxMcWPHE2gihxwNg",
  "key8": "4hyH459jSkQXYSi6bsHKTAPQyyFoWMU8nSJHEhdHXD2pjKaNsmoaEEZPhwmGQ1fafqBFw6x2Hq1Xo78Wzksmufhp",
  "key9": "t8S4kGkUNqVZyFZn4EjFJrquGi7tUuh2nVLAkhS9Z5Q8ZLpV5mFesCbpHUPeaYMHGP66g55FnYBgCkeAecK6LAg",
  "key10": "61xqyUzzp5EJ4ZGeXrLVp53zvW7FKReuoaSvsyLjVvNuZuRquLiQ8GuYcMaHJUiqcdgn3zdXaEwgQFRtWA8MwgXB",
  "key11": "5qEj3mZY4ZKQdB3Q55yBTiqQDJa7KNeauuuezzRMpcNKdRTAjrjYa9VmoiTJFshXK96uZ23KMsG1LtHh47uhKHTh",
  "key12": "5ff7Nesd7srJJ5bwH7zzEmGMxMU4QDZZ6fuPEPDQZbnmNQvep3vLsEwDi9V16KEyvqAwwkJwrJWmsoeC12BSxoM2",
  "key13": "29hj4K4GqJRCaNzaWoJPSRamarmg33vm4ycLE2YfJ84hjrheiB6kwRyPSwhXvv1vBLGrNwmd6rdFRvjgCqdrjmHb",
  "key14": "412Mf9W374U8NY1W1AwAUfXhkWnmjE9gfVDViNxgwf26AwyKKSZiDtkzN4JjAtcgTWsma1UsvjyJPLKDhQwvuZCt",
  "key15": "sZod9HLfTUzL6f8oAkjZHQcS4vdEznsPA7qKrScfvMoGLXj3bqW4uoX9ZfqapzKvsUj5sCBqp7vof3LSizzxoZf",
  "key16": "3WJLjQZv9PRH6TrzYUwqv4KnhnoA1DfgFy7mRSxhtndU4hBdQnDU3oF7JGv29eRxUCRJ5PAEYRxcq1xZsYLjpKKf",
  "key17": "55vB4au31PytQUXisPgf3UhezVzijKWN14xuqfLQwHjXBzfBw5rwmFKm5hzXkrvKxhUDPdstCBwYwrgSRertj6EP",
  "key18": "2W4eYSzPt9uNgGfftKFyQz2XE681fWSheXbHztLzpn7uXHr5JUhhYzVoxob1N3TEq6Z1jgmGmrjoWNmCih26byET",
  "key19": "4yWd8vw7Wu9o81SfrmGB1RnvJGVsawxeLHRXEyhArfzf88DHeRcFBX3vppC3thtZwozAyBKjsb38LK9rk8AL3WSf",
  "key20": "sTMipyrQ6c7hPnEk7RgMpWLLJXt37P1Y7nHmkygq5u9QG2b6qwJSXkXhkgfGzQ79T46y8qEgYtBhs4YkQHfJ2Z9",
  "key21": "4ZTLNz8diy37EVMX68GBNesQvjhfjFEpd5xRqj9Mei2MHiMeFcREudYzPsZ39qHSzSrqQck5ZModYofinnGRtoev",
  "key22": "4uQkocAzXMT8DvpUQwKvNEMaU8zmdxk2V5Vu1aNsVuH49hddNu9M9BpvVWsarbT92ERgLNAxf97KG4mqeq66rWmb",
  "key23": "4QSY7vtENyKHyDAt3yBPDwGx3CzdfPGXT72gmNifD5T8EZoab9A3r3FiaMGX1b5jF4Dn4DEd7TiNbSQscUUwBQzw",
  "key24": "3rM4xafqupDkqKVvf5Z17QP1Mkk3pKCSUPqwLqhYYDsbF3ioNixdenqEbMCB875sCcbvr4Tx76Bc6XFESmppYGc2",
  "key25": "2iJjZLTEL5bNj5hjn2jtLUP461GqeimpccoABiNzJGyJdfvAUQ9mWy6gddoeyKdLzCfkdrykcyk665UptbdgGKgr",
  "key26": "5VBZjdsy3brKyQWoEVQyF3f33foSjP1DxoyPNnmsjgpAcPmAcrYHn7isFUgrs2ss38zMQmEDSi77Twe4ch2fVrPP",
  "key27": "2f86T2pRqMPsUxKuBRHHAGgPgjQPSkH3sWsTfN5t8w8UevWhrgcK2x2V72yFGyCL9pgb5VN6RJbetG1TCZNa9Wmt",
  "key28": "23gVu5X8uMxQ9nYTWSj4947Q8esBi4qXRVXrRxL662ubhTiPQJf6LoUVstXhr2MLrio8ZJVNJJyHC6zURNEAHwmb",
  "key29": "3nJ35PhhH9bNXzcJCv7g3ctbJUciPi74UjzTvdERNwPBPWtFspCx4wCsmMJJjwTMnpSg3W6VuFvDDix9CCs7oaHZ",
  "key30": "ABZXgi1BLMLxyLnnyBMJvESMVSQiy3fjcG5tWBSrCsWsZekuhkk8K7eRZcFHytPwrcZgjPUq1E1kexiYTe14hHG",
  "key31": "51tvcWahSA71DFbb5P82XdWayNmyg53usVBdKQPmhg3ttTKGEnnCqZjhgZ3SMEQ86up9W1oSU32LzzwdjqMrgaJU",
  "key32": "2dwUcRokFeNne2XFwCx8W4odzFRXjRcui5CJ3qLqMFphrEQ9KyzmG4jeKq1dsQeHpivKXbMj2ebT1hz2JpMg1FUP",
  "key33": "jzgFWn3ERbGG7Q1xjEDsjvow9ceCjKByubffSYwkDTGPyJZq5fazN9y1vMgzF8xCow9LGrZoFWTxNxuXr42516S",
  "key34": "3GG7yT97n1Uku6D7FL9Q7NnRQH58VXY1f6FMSJ9itWaSGFx1N5yXwYdudHv7MLBdhji5fS2VbEv2CBUPrXr3DGfa",
  "key35": "2525nMtjRDPy8J74QRfxquS6sjBS9Fav3j1UsJPvNvHJCbvzhoBSGpmvC885QxCJdqnC6y1G4TYfALK2jvNQCVoy",
  "key36": "453nKzW46SxBGFYipMuE1U2gk8pFM6d1CH4vtMTAYwJh8vDZ4wosjzdz18webyeEe9DqvhX2REEph9786dDPeg5M",
  "key37": "qWJGdD1Z1iADC7ocZNrBDUHFf1rXijJ1MgfdrrABTz4n2R7QKYVc37dPPWJzP4G1qxN8WQFDq95ibpxeT6yQSRv",
  "key38": "4wYRYShuqkDoZMVqaqtt1Sz4wpkTTqe5gAwYHfuZW2vod86GtPfqCxTJPzhxrqiSNXkktdkrBoYTfgJUCsuwo62o",
  "key39": "5fZBpBnYxmqANduc8NQNSQDztzWsg2yCLZuBq3ScM8jjEjDYVZNxVUnhCuDPGzhPiigJBdcxZ5SPDrMfXhvL7sQi",
  "key40": "2867x9BPtc6z4whbiv7mC6gVcSmBkHRKypVWT8T8isDTA9pWFRmk6rP6w6sF8QLBXwiARcHDMBrS7eaKq5xKc4sC"
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
