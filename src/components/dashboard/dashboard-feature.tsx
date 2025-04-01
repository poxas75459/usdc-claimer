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
    "45iMy8us5JAJaZiUm5rmcJ4NVFAHztrBWPh26H5156dDFjnJFC2aFWfVfVsqa9zfZe4XVm893iuh4iJ1uDMHvZt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wdGWqVfPgfPJNQ36212Y51bVfNR6MgoTJp1diMbwWSz8xVLAoY2vQnvoEDZRZtxGnuf53jUhpxFRAo2BDfpxDBw",
  "key1": "4MuNH6N8N1Fmsoix8X7V8YRpDPkj6yZpJu5FCmsyZrGieBA6yn6dXwpz3VWm6gdHAiGBY3jR4jExwmXEmA7paYj8",
  "key2": "2hGq3h95Zu79aB3zp9qhwudMuLmwE75wSYhzmJkicWjZyTeGK9qUKTMqnT5rwJw4EDdb2ximFqmQb6C9e1geRLVM",
  "key3": "3For9nrsRyUCcig8EERG9aatuoD1jAerVfohBaXtenhQtBGFeK4wGA1MTUgEKGMgJYiqZ6WrUzcfvsntSvqHsmBF",
  "key4": "WKMpyZRtGqVuq3SVeXnwm31DHK6nEM9s496mp6SNCfdvf6UmimwKrrtaaZaYtvqc7GrRK21QjUukMYdrLKwj8a3",
  "key5": "4rexD7FAra4vtMLVHiwFDSHwVwCsDFYqhXAzA4cSDfZpLNX3NdagCnxyCJHA7GUd1BM1nbrrqoqo5iW8X42qGMVm",
  "key6": "2e1VYD5Rf1GhoHWVhe3gmYdnHaEEqeq5LzCeZc3jrz5FeAtn8z1jh4oxNBV5KfUvwXJrLF9DW7KkMhRnYUZSkeCC",
  "key7": "5YDwiuGGVaJqW9mFRmL65Q2WFpRCTugsdxeH1JfKBJEeSwzB88jBXgz52gyHQXtDhdGagxTzbbFDW9D9fYUdXgmd",
  "key8": "vBaiyWWqCkz5iqsk9yFBkS7e4XuFfm4Mfr5Ckkp8y2gDdMqV73ujYc6MNqSkEefDTkd4vMmBUkZsfHw5fqVKdRx",
  "key9": "3St19cBNu83LrKnTc4ixt8a3PHyrEuRfkpzJXqX6ofeipKbQppzgGzzBgam9FMozKZ2SpzhzUBSa4rzvAYgjTh5U",
  "key10": "SibnJ6JPZeiQm57CxPVvikgp2SMpdHLdM2keoXBPZQde4AYyBWfXUq3RnU2uZWqTNj4XVJgnJLpRXEcsMNpGVHX",
  "key11": "QPNpheTT5h5WzyNtMdmRguuWRZE7L3vzGekWFP2Ug2HX1N6wbuzNgo9xfzuQBRQPNUsUkYH93uPnbfXQdgh36Lm",
  "key12": "2Hidk62GRAHcDLb1CJbHhZwf8dh8Z9LKjnVQUsP94GFRAPS2v8PHQoKCbX1X6vPeddLRpcUdophztGe8KNNPhHey",
  "key13": "gMo9QNFv2Ak3GbmyW4uSTqEHuhQ8hm1EP2QbYsEiYY9AHokm7QjpiF6Bpn5jbSLC3Ssc75PxtWb8sh2NHbFHzma",
  "key14": "aYMyw2MRVpQVhyJog7Y2gW2ocdmuaRGHFGAcoW7bqYGrcKLmcHDFQrQY2ehJe8JggJtmMQf7UC1v2tZiY3Hf6LJ",
  "key15": "3rmqcQfhveRhyE7FNBZB4NUzkj4NDpPhnC8aMiuPjwvoaPPgLzGwyvDFn7PCWWdrohYFYDTtxNPMHGbf75XyS1f",
  "key16": "3PSc9VUxcJYwJV2Ub7wByhpUTkPdUKWs4A15PH87mn7Tb29vRXnRVn1k3emHikXSjrmaENyhaKGWeAJSAin87xnN",
  "key17": "wqUntH711NGvTPSur17QZFaKYr9oMDBa7zGkWD8j98QsYooe5LcdkP9P8AxiMvdfpY9ARLPCfHET7JvrMNrPY7S",
  "key18": "6ZRCtVjMbiEA8WZAJgZfnbfs5ECiF59yv14JyfvvrvpcLfxNHoGt32nFt3Yqq4DEZ35acAhRZkbyT3HEUXYNqA8",
  "key19": "5iiJuKXP769t4vGKiZ4ZaZE35V2QGTByZrCZQ6pmEf9MRazErcoKz4taEKWuPxrSTCPDEFE4ND7cDKhfhh5yuM8v",
  "key20": "3x7NsrNHjQeQFRwKsX7RogcVoj5uUWuyGnL5ZypYbARmEAUS82fneCx6CGsCN5Br5iym8ik6N88wvF5TfvjvvUt4",
  "key21": "2NNK2EwnhkQjEKZ6bVVL8XaW4MAvFDcPZbnYKUAqTgin9oPgyLSkvMM6o5WZyTiLR91NEaVqP99aJPgZVUryVMfx",
  "key22": "2FCbmTjVTRqZFp36HYNN3B9TF7wU5bG8G1FQSSuSiJ1ZPFLzNnWsXhrD12MVPEpJab5wXaq77Fke5Wz18iwTj6XG",
  "key23": "4bG8tNqTPu19MoPf27YivXkLed75W6nUzmfnmffAeVW7eX9hEHbqFX2uW6BJC4FeVvo3tWdkiybNkeYvQttgqsLf",
  "key24": "5ja4k7mqxFHjatAPSzEHumgirSt8kgrR4m7gpntLCdqpr97vfPSN85oY1NUji4bzuwSngi69WuqwdVsAk1NsZwMe",
  "key25": "4xFyuNKVzBq5ZWwnDmDGuyqKtbVixKpprmnG58JL2jwu6wPniBE4hpU2BuSEvQcNgzdxnm1p62punXkcY9iutBiC",
  "key26": "4D3UtspKcPwaA3LRoVADzv9CyXhSg5idaGQRQNpPe4gvPTHPzj84WvFkaop23f4VaC1o2UjExuZqJrLF8dWbEsM2",
  "key27": "2RiPQq2hdnWMutrrc9CGJmwGYyBpCu256Am6DhyhRcXZ8VkLTXfPcGaEgpUho5Ku5dxdheo1mVmQ56NQKmxSnFxc",
  "key28": "2xri4GByhqCu1waoLnuLcNetzp4RxsGsCHqHgcrGWrmNYNiYf9ANBybsqmERpmf5ghM1bET6yfkdDbxJJ9ZG7wK7",
  "key29": "qnbw6j6roxQr7tCx8Q1phehSwscqJqCNvYsdPM8NMmQJ4ta29jtkrM82w7vvN6XZicPZATJWoLji1DP6r8nwd5s",
  "key30": "2qC7UYUZJCMGTLViM7GB9cj4itGqzGyJZAMBiP2SDPEyC2rUX6ZPxwGXaCVC7RVUxKh2mhwH9fN6J2AbmCcvJ1nN",
  "key31": "5SJk6g22zR8YV2SkWCCawzMLEYaCMxFxYBSmNZ57NUevPTAA6fWGAqy11TpTpHvCMG7EcP6tizBqFy4AoLRxdjUm",
  "key32": "21r4np5rev5hTidors7GpaxyzX3gbUvi5pag3C6QH5RfcwRy2LhjuiL7Z4MduphQdKNPX2uByGdcb9kW6oeuHRbD",
  "key33": "481GgWraY5TCb8h7XhvEm9D8KFHDFdc1RaxM6JuCF6FB3fbq5voRSug6ZtCNaMTqP7mtQ7tWRXSghn37aNcXE9fb",
  "key34": "5HDzDrc1RZdqeR3knEi6vVFNo1Lxrx81rFPnSJsbBaezQGQEWsMQhbckn9nhfqVUKgpXgXM3oMLQ75vxsQjiuSd1",
  "key35": "yF6HB2AcqmW9LGw5bfw5x8oqnuaU9L75x7ZdtyqEk6ajvGiZBto3DQpFn5mrK51WqQDEgcyJyzqqQTfXKaxxn1E",
  "key36": "Lb1sidLappmaZ2pK7YdviSdzzwAeD95hxv5ZFArNZ9MDWFZBtfjPmsjJkzfS84Moxm1BZwJYU9z3694pHnUDREH",
  "key37": "3qKuPtcQiTtjLTY6DgoN8uRhcJSiASws2Y8F1MsvFoBmvp2ghBVhEs3SzsSi7TSsuWMcHRhzGpfEBbgiLikZXkrS",
  "key38": "5JV89xhmDhqags1HnGTHw2t1wYSatQV7ky43D6g5bRe5tZKS2WAj8Sv49sDL2ryGF79X5A76qUsLPsxrQWBakchK",
  "key39": "5eByYNoXZJhgujybwNWPghGtPutRqwZcrmoT4ThqFWrzRPwNKtgEXktcAqDt5NhwQkAFFUkMzLGJMZMQ3f2artKk",
  "key40": "4EnHm1iKY5gbVg2psBzRpALUzisfz2y5xiFMtoQjjLQwFGNEiNFUr7e8zNQWxubpH66tjbBjDC1HT4FZsfvMSSar",
  "key41": "2qa1GdfxDK2MusN3s2ZCMgjBZvGcvWduuJcatYXMNW2ztJwtHsodKSaKnq9oSCPHfwRnKxiPt1SBiaDtfWK4ehK3",
  "key42": "4VVbdfosvtUoo9QHuCWNWEt8fTASLfUbmwbA62kviV3QRtcHBWaVfjKMBST424x15cucrB9p8ywyvfTiDGAY6KQg",
  "key43": "3VSVNMw4iyMfnpSt6tje7dbsPutkmVScxb6PoVDNkss9HwQXrd45VebgCznopCGDpTsC7miXf7oxMQVnuzun9PV4",
  "key44": "2CMzoswHiuHvbL5XzrGrRtudwKSM6CKfdnQCU8ZShH8AiJERyYZG8RCijapGueVNwidHQ9WBMoo1QbnpWWuNNqBs",
  "key45": "5o1VqJxQEHLZ8zhiMGaXjNgpmzc2vSdrY1CT3JfBb2VNCj7qukcp9CSbmxvkwnfrcya9anBEyUq1ZbukEnvhLrYH"
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
