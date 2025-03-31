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
    "2nq3j996ojtmH1hpLvnAW1C39QRK8Nu7Qww1PqtunhkoMrC5EGSyjrHLRYyWcaz6u4CwAPBiSP4aC2fjf6hUTZBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "avgK25zwayFtyHwSUYxduNAJasNbinHEV59u6iUUPRRGQ1ZKB1yjH4SkECLYn9icCUShWvo8fTdTjs1yTnDDGyU",
  "key1": "4mm6jvdpeeMqxceTA5c2uwDdX57CceMJo62tsMsHDbDs23WRbBBx6yBRhSWkAKbPpmoxoRvukogdiWVmRV55ggac",
  "key2": "5s4bEGrseYGZeqs8UDEjYQTxKCvbVLBkr9KkcZduhTVG1h5H58hu8gAVGHJKQvRPhKMg75guNdNcwpz9quzzK6AF",
  "key3": "2tUC9ieZdhcgwyZnUbhnizqFjZEL7mr2RLiF5MPsDEyLaUFt3e6kZ1DdMn3mx5XRf1cGmTjf636RCm3yVPTjsHvT",
  "key4": "2LRioj288UdxdjycbUpYkX3a5wJnFArf7pWTnHrfbPF2A6KmvoTXimwVD7zZHSfMSrqnKskExm6oo8Bxok4piCSx",
  "key5": "4ibobpgFTxbXrKpxL6apP4bvLttUiSjfGAdMheHyXhcwWo5wioJVLgQ8G3XNQCQTv7dM1DdKi7EJH7Cw2mYhhcwX",
  "key6": "2pPaJ7eHPG2PBpkX6FiKi2tKiaXerNcLseK5CSY2Q6uGBqxadVSwRoyEKRRJS4ApHkf3smRhaPs3kCcSVoVsE5XX",
  "key7": "BQP8NSLMfEn43Yz5uBBJwgTT2EA7dWi5BKRHR7EYgxQ9MeNhTKKaLjFp7265EzswKohXcDzbSzkFVMrqF6fhjUP",
  "key8": "2fLg9z5AbGduuwaTGW1JHc7xCrA4swiwLc2zmsx5dzoJB85Hk3GxTRPL1zDUQ42R1tiPoyfyXQ3KBowivdRVNcML",
  "key9": "47qMY1btiNepBXP3ugTy4LG6FgT5Tsxut5FcNc4AiWBeU77FkGeKK1KZvVqAqQZShLS3MjV6pKjAUrpuBnEm6ayd",
  "key10": "4f2baKuzWUWeyixDD4mTejaJ41ngzT2eY1FwEbAzazihnqJaMWnHT5jAmDcy2PpirQP9juQhpavjHxDwwncwCaYq",
  "key11": "3CcKiHAayruqgjFEqH7FEpaXQNMv9gFWmE5b9vXyfkT5q5u6TQxgrMuFa1YB1exH9Y7iHcpt8DK4bHJ56SXU8APU",
  "key12": "2U6TDxcj5rKoNERhQP555ikxbuywbYP4mws1QDhZyAndqdaJntTsMMht1C7WYrn53TfwyTkSt5hxHWxUAEnsy6p7",
  "key13": "4CembjKPuhypiSVQy1T9sb394RuaS8DFyyCrrrpGNfFCd3wvR7P5jZB2WtqKGETCrAQPrCsfH4hfhK32TKni31Yp",
  "key14": "2Cx8iaBcL2ffBwmQ6iB7KjanVdY8Hfjd7knJ5JrMqC3XZeuFkafP2sjDjaWKeAmbiuhjk2PQFe8Rnu42w1EjPaxx",
  "key15": "1nBc36j77itgXHvho9ZTHjpVrh2NdHAKnmAi2hFdQrBGoNw6XW8awodWbdAAysd42BQUqz3iVvQNSho7pdRWsYH",
  "key16": "3WKLtVJici2MND8W8HNHEz7fN5bUYRVxUNR9Lpi8vCh7TnfYW7tmvrbPu3qwRbyKRUxHjBqaDWdvvEQ8RHqzxFNw",
  "key17": "2kwCWD7CeNUeKQDGJVDvF14JwZhCvtTGizRytVndEawfLAwDwac98WrAJkmUtDK8s7ui2K4pf1kCPHKwGYBxga4K",
  "key18": "2qSdwLjrk5pFmwCdKXEbp1t6Brn9KAN91dtPCmo32iRKpf5XGvrxRBX2A74GejXvGLaQ2AXEfPWpfSF37WmSh6z9",
  "key19": "55Aa8YN9XrkTMXckiq2TzzJaupsRGWrh34F3cCXQERExRj5o7G89gteSDuuBiZ2PgUSdGWdLMKYyB7ZNQX1YY4aw",
  "key20": "3Jzccbjh9g3rhQrAi4nWCVVWr34eCaddikvuJg9NVVPkF644ukDtEqoQ4N2BmzAj2hQyefWVCBicUVDqLDkm7xL1",
  "key21": "62Jw28pveXLoPBv1qCF2qV13Sc2zx6TRQ2n2kRABSAXV6z6uuSHytsyGfxeoQ9ogLfJikmMem4PvpXmawnAbUkAa",
  "key22": "2Fs9Tdhj2yu3q4HEko7enJ4DonDc3Tw3AbqdUX92JZEH8rX34ibCpMLxm6HsMYHRDtECHMWqM1pPz19E5gvYbmPw",
  "key23": "4T3fHJzsesUGFg3Q4nye3aMVQKrnpBtCknQLMW8xGt6QwYBuNtNWF6G6KggVDBuFBpPvv2S49okp1WrXLgnHSysB",
  "key24": "G6q9vLtygnWiPAYMfX2jC2LPAqStWXSVMPEX8wV5rwRki8RkxznSJ2PjciuUw9WCRXJRJXgskWWp8Rc1bBKf1TG",
  "key25": "4Q3nkmTCrgkxrhXfB7zKAGBU9ZPoCEzGJcqjNhgW9D1vdbG2ioWdZHRdFUcmSDcXQtAdgXjdUgjD6vTF9vHNmwU4",
  "key26": "e3JFbu6CVD1bCjJovhhBbcKmAX62fmZFsJ7JDmecR2txr7yE8SU2vsykLJToByUqdchnthKE3sgCxKx4Fsys1pj",
  "key27": "65yoB8sjgEnZCB7fado2Kgg1Y3KmjZ9AFVVWH6qyEMXgr6hPhrC7FbZT5jVvf84TsG75kuTWu4617m1FJjjb186k",
  "key28": "5v8LBmLxJLwV8qnwNTZ4GAMc42A4dBVAwmQiRgi9BiD7jwxUSc8nRh1pKZmNEHoCrmjPfKo29CzET9vyAgZdEQYi",
  "key29": "4PHSnMFAjiXN2vjmnJm2tUnQU4unkXeT3pwAfFsywe3Zd4DzNDNSZvmMN3HeAjPzwjBZJN9dEL1jttg58As8GeUc",
  "key30": "4NfVC8BLbEY3UebKgRJSaHGFkUHSDb7K7JTEJ5B4Vbny2TY3qJjnE733jhjKzCRh92pxBeomLXpzbHXWxY9uMGKi"
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
