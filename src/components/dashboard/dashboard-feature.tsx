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
    "2gBmKmQU7gZBA8wiXmMWixAxiR5YwECBbXdautMWwc3MFJLJu2CBRZ55hcp2hdfSSfLv8v3AWXVDdPdna7Jbnq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QBf5nfWdr9L1UhrjZnffC3KMjmqeJx3G6A67esG5ZmawWywWeCyb2W7gg1z7FJYw55R6dgL6jHxqSGmvi3aTuJ5",
  "key1": "dwDjNjpGQQn1dm4JLwZgePM1pwBkr2tFYbYrCxCat87KifKh5BmeYYminM2n9QwYuMZPMkqn2WhAJUp4ohjiW2N",
  "key2": "BBYm1yuxfNiKUxAGUb1FkjnXJkUcymkwP36vMNkezy4CXePqp5DQTzSEoDkYUaLfCAo8Qq847pSuXyxMcqmpZZk",
  "key3": "Bok2kr5V6KCnhJ3KCrktFAJPtgrhiQD9Zbxg126NYvjF5c25m6nzNwjpvM6cudufQUuGSYMMRTfSFCt23JFQNGR",
  "key4": "3SxHNS2HotKwfzruHhyUr2wS5Jj2tKQTAJy1hpWkEyRxkPkoQ8rf65K5KECzKfuavgVbCbVfdLExVUEreT3YTiYD",
  "key5": "3RC88PiwDNjH7Zs3WBFDiFzD1gCg8wPUksVyoDaxS3wom97dnH3hgTodAig7UEPn5ysTka6aQrhSPb5i4JSGfcqA",
  "key6": "3jKPv1zJmzmVeUQA8nZuKP4mTLd7cQBGJGABjMrSHSWJH8QP1jcZhivLABiARfN5LLkiDTU6g3Yg4XLbfFr6n6A7",
  "key7": "2MW18XYyP988xbH1z2V3KN1Zqf5gfmKQDu1FiVthiDwS1kMAzDRRnKkcNNnZq71V6DKPQ2TjR9T1Ztag88RzS8qh",
  "key8": "44qLNFBA1zqMpsQM8ZLCzjxURcmLNt4BXTzsyBef3UHni56RAf6E5QGXozYUhpBzh69548QHeqDtMoRUwW2Tiuc7",
  "key9": "aW1aovVnRYHf1eeTqVJhxHnQmXtRUQW6t3gWwzkR9Qzpn71jejynsCYnc984ByaCLXXroQvkbWN26QxybGKQF9j",
  "key10": "ciMDnDTJ2PQSrXgBsxnW1ftmMAHvt6xUb36oxc2YVyPotVy4AaqVL32d93GxfDNTVZZ39pq3hcXeDE3UiPLbHzq",
  "key11": "EgW8uF3HzEpQjSd4pZBjAHEY9CGtBXjA49RBKVmxcKyUGwJe3CMXcpxh1EtKGRU8s8fjXCCxMUPV85kmRLZ7XqA",
  "key12": "4EtURyodHvdPRf3JLk2xgohhRYbhk869b3WGykRGEhytn38TkmPNMUnBLshXF6FGPiUAxckBTHenze1adUoCor5n",
  "key13": "3TXfuxm2aHyqfCKPveQqDLV6ir44FR3jdigQb66kTEMWvjzXWgymA66K2k3LRpYX2jTeUwHingsGYgmPyYZTHLLk",
  "key14": "38sUZjVEFxaD3xHk3ocom2QhGiVWWUzLT9ic3wcDEaRUty2nyRVccp9jVf5UFdqb1nFkg3ZucYCxe9iVnc3kV8cG",
  "key15": "o2d56rGZfUVN8fic4sSzmtgcErdVaBnzLc7W854PF6HJYRfsTtMagRtRGazf4hVdrbpzudvCMJ5phZuqx83C5Ug",
  "key16": "5qsvNsjs3Fyy1sogVsT5EKBH5TDWHNczvndpGVrikbRir5KyqJJxkTHDpZXMyvwgNbGARwmmTkWKfpgqBuYejQx4",
  "key17": "MX32gV3Ug5UqxJHTdXFwSBUYQqATo55Wy8qSUieVmRvPisPyT27JkhGtK7HSeqM5SKm17rhHHJRdaffj3VzYZcg",
  "key18": "VrjpQe6ZWu87zgrkudks1DLrxV4E3pSazPWojFV3UtYDrxurixDQYcnrWKjX1QwdShqDGaLcQzo8Spe8mcdTD6d",
  "key19": "7tDPspEzcKSWujpjU7GQFdR3JEZvrZReBwT7xAu9iJnPDKE8imr3qVnTYX4Dr3HqVZzuocTbaa7273pFa8dbqgb",
  "key20": "hs9YbcMw9AxRrPjvFhDziksNwCGSayj8oHVVZ1p5q2SFu1B4d9BgRSKBK6hAHbcZ8wh7VdgiFPaXbMJnXL9kJgi",
  "key21": "5dQUH2UFyJc7oBPmfvSVAFTn8rGEuWK9GRz3DBoSqgVZKcKEg4sQ8JoJDT7ZspAxfpjEA1VyUZbknDe9b5s81SEg",
  "key22": "4xezTaY1L8mw83uMRGtQpmQV8xzznYwGZY1KFFdznVz3CLMFKZQmhSKcrmGxa8KBQxAyWvpkrWFTfTjXY2b4Kwk",
  "key23": "5wjHhpW59XSgerx4hDQTyx1qh8ZrDrVY4zt234BQhzU1YLVh497aZHpeRqssTd3sW2zze5xEWibGPCDFXdeokWqM",
  "key24": "4Ss2612iaajk8jvM82oVYGyuNp7ajNf2kW3vcd6C4h6xb7TSr62GBQxYTz37xaqBm2q5d4bM41rCzo8MqHY1m4aP",
  "key25": "3uUdnkfmpX8wpALVcSKrKs7wHZkTa4yvzMmCu9ozRHtbMMmVawzzbidv6JLqPjDDPWH1M4kmqRSwdyn5nAgKR4nD",
  "key26": "4T3HMHQoFVGAfZxsqJrRrFHnrX2egeFCQeRtoTFQogQusaEg7ZYRDFv6Z4WRGgSs5eg1HbeWBLS2epVgejQ9L9hi",
  "key27": "3ZXUZRTazp1dKTSzV6upY32LMKKEkwsBsN5y8ZsMXVAq4xGBMQ1xKGZuBWXqNLft6KinpCQtSZkFt6ofjSem5wc",
  "key28": "SPt86V2gj7hN9f7oxLP7JaDVaZeVcQ6GVoUbbsYctDQi3UiPFQHmBBwmKrdM7fbRrLXpskinjyZyP4i6cPWdfjx",
  "key29": "Rpm5uyCkwJ5ztNMxLXs2z8rRmFbzCV2NmoaVVGme3Aqjyk5sjBEeS2xxWosRX4G3uumTouaRftk4en9MbxHgUY5",
  "key30": "63Sb44MLKw9XsWpCa6DYS1zVjPpVXqwNgkGvnadTAtiX9GShR8kJs5XcP7yTR1V826zU1jGMZQTmaCP9Pwg6SYpC",
  "key31": "2vQ9i5rm2FP3dyAthE1HMURf3tps8yf86JcJn3tBfSJY8exfHV5EY3yLwDciiJqYuUmE24jGoSNe1a9pcBkoVGx3",
  "key32": "29PZovcn34o2myjmxejf5yeFhK2LSUfascrvpkvCMmBEAgwo2nmcXqPpu2tfMZt18oMcGQV9xem4uqXjp7ZXDBNS",
  "key33": "5t176TjCPEAJXBDhzojQ5eSLohkKDUZvGn2fNihvFmEUQCKP8ePzYJyTKxNwg8CejwcrqifPqZymbd6g7r68NTn7",
  "key34": "2KUf91f1rL66VhidsoxRaPF3JJDZ9241o4KAW9gNHBSukrSKNoCo3MdWcrZmhcJsBsmSTSWaW8eDp119T6M11tyz",
  "key35": "2gLFa6ufo4owbgysrvMSrBq9TSBkpTucRBcEaJjBnS7EStbQ3APC4XWuXLsE8fRc8VwvHY7BEXHcUjpCZtNnVqio",
  "key36": "2ytSCbY47brrQXcLuEAjLzrTCKyX4oEtFM5tzSjpzQN6AkvYeixWSUfmAYMyqaFYBjPZieCVqicrmeYqXkog5s5Z",
  "key37": "4d3NmaTRRf6oJjJXwUuwwy2xG4Wx18RALD2AYHuVKerJxLDcZ9vnWPPjUH2fnctji4Drm3fKHFwoHUmY9wrEvLir",
  "key38": "3uErMtLrt7y7jEGY6YB6vjSrNAccKtghBiks2hGCHu53TtRAcHkV7E3HwHGn3Tr4ccGbr2kgup6hfYHDwGo8MKtm",
  "key39": "5mRV1D5hPJ84nVcYTJXma8syX7oLPcDgfuFEEiFTxT2RgDmViLUAe4C5LjpmAAr6zQoJ8tBzPzaydDi7dxDav25d",
  "key40": "hwzqQHavdoFazsU4AQsdJ1Vr7mYs4RLYAyxEwY14R4BnJGq7rEtSujr2mdJCm9gePPsRgmwDwoSnN1bTAF7ixgW",
  "key41": "2DL6Za6XHbpXSA1Qd9SQKdSVC2Y3YkK1wJaRxskcDAcYmeDDLcKVxRuqyCfo6DYbQ1EX5EXx5AM3r4eqbgbeTEoz"
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
