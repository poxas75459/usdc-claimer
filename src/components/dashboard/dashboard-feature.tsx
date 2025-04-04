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
    "4tAa2VD1ikzJ4axbfWEib6CEomeknoCoKA5ozJaSW49a2eMXTGX7Aco79zcJCsiahURm6xA18x89CGqGj3zfRb6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RCcoRukaG3CVH4LZD5zvGmw4WicJSstTiSszcLQG9tFwoshesjPQtFcgDZ1caiF2xQC5gGuzmy3Qfxx3tXVVTKM",
  "key1": "5pQWHhfozMHvowdj42BCSMeAds8c1UeMpNLN54KHnxSkdLzvZxgET43MXA6cBbtGcvuWyBoPe3MFsaNFdRgHjCYQ",
  "key2": "4iRcJ875zktuMUDeY8vg2kjCx5mZwNig4KsgTCKquxot95HJxmiaHAtpTFjGr9UuAwuQWdSudqZGVSip71Lu9WNd",
  "key3": "5CABZ5qyP13ULrAYWhpV6oLWdYiWazbdXAbs4MhTeFjY6hfQVYUt18jqu7CU5foLJPeg2pNXNo8P4AkvSWH9zeAX",
  "key4": "5URU66biTDUwbH1euvK82r36G24b2AjYLrtnmTt58XB95ZtiCK7Ax8dNfcjgYH7W9KRPexftjUB6kX4KM61BuMV",
  "key5": "44FC4BjixfZmprw4ohxYwad3DFCvAbLL4FMATXwLKc1adfRkHWMXYVnHrgb76iHV26SniM6W3SXMzseT8n5Q9KRW",
  "key6": "XgYLjRtp9otQTDaEBEnEdo6ZE3w84mHtnjeqM28CYbVcoviRuWC1Wbf3Yb7S636CGooW3HVujuZb5kqrrvdttjb",
  "key7": "2esYiJEW9yi3nnJu2zxgNxiZDXAHg8uBzGbSLRqUuHWzVSaCacQk5YQ6BHbCYoW1qdYnW5pmQ84xLJZTADCT8jot",
  "key8": "hHEGAtKVyZdXFD7ipp2s4k3rDwy5NtwZmbVniMBSaGaKheKMactM6FRqN1zBiwkoNbJT874582WaYgvqsqyP2oJ",
  "key9": "4EQQ7txmtiPqV46CBV9qCP2KMtXxzXDbBCg1sQfNDF1R1viJVWhjqzZtJtgh7mM5NXLis24iiCoxnWCz8KwUM9KE",
  "key10": "3NF1iMgweTCABUMNi8obQ3DbNHcQuqfxBeBMHbZqMfdsxWY8xEu82CBcnuYxjK1c9LQJ3yDgEcYYF8uRup1e4jFU",
  "key11": "23AMaZEWaMH7nAm2Qq7QEvNZ4mKbVhwWKZmRKFVkv4iuoqAfEBW3Fw5QF2txgvRRUKaYnrmjvP1eYKsX755RzxHB",
  "key12": "2wL2h3QGSetFJhqFSZ47epSp68nviSukwGuEQKzLi5rgv1svdKp6zCcAL8jCXMP6y5EHv9qpPAddVfCVAmJ5YM3K",
  "key13": "2i9BCxvFBpJJNvZo27JXZrsBzJm3GXmQQZ1vMpmbY8tqAS6C95CRcfr94EcNJDJymwMqiqyC2fHwmGPDGbRZFfck",
  "key14": "5iYBiuKAbu4CGuric9XAqqYW8hPaqXuAfrnELFpw7aqpyNhHhmeE1NLeMJZdUXsAuhvnHKCeHUEX2UzyP1r8W6LG",
  "key15": "67kum21QMixsL6pan7K38eiJUfnhL5Q813YTYimACizzEPZBFCSAxPW173dVXN24SX4U6uMRKpRYShx2Yj8tgCk",
  "key16": "3SCQfrrdBiGpFr6b8dcm1AVmJK2f1TyYkaMG2RQm3VFGTiZ3iyZJ6BvcJ46n4qpufXhowxTVXpbAcffpwTo3J6ed",
  "key17": "3ZcNeaCj15mEzjnkXGnPBkXcYTyd8JzZg7AL2mLCVYT1eV8tpEC3poJj9dWmBEvzTxFd47B44AToj3SGzxENmWgx",
  "key18": "5hu38b2GYsTivvwjnXGXe7iP5BbFJrWFqvCG233yoYeLu3hijbQSyy3WRyDvvZ8mGrVbL3JJExzRfaWFL5r3YFfd",
  "key19": "2MLRUqUFn5p4tshrZgHa6ZrYD1YbU7tedMKviaxCA3MuUH4pXfWbRPfnptwA5yJ9FKLN7NrKDuZDEzuh1XTQu8JW",
  "key20": "3q1QPY91YoHETB8L7AN4h7K2NYF5rrqjrQpXHkRXt37MqRkSU7CPfw7eQ1WexpfdZeBfqf1wJYtQ2McrupVkY99i",
  "key21": "2Xdv8fzB9sooUMngsggqRKWF1YbjD9AbV43nxu4XJPpmmfMNZUvbR5hUDdmuFoJ8jQmd4jQhJ96RXRjBh55YxNcp",
  "key22": "4LC82Jxr9BsP687hndewoPJErttG6fnix96tYhq6o4jsC24At7AqFqTxtU3dhpPeLzSYAvF9KDEDowAgzf4ARe2Y",
  "key23": "66cDC9AsZfXQewRAz9x1vnYvsyrKSqetvHirHKtVqXWne93UEGS7NTxU9VGc7oSWTLdu4cFMr3bTjjjUh8twcC68",
  "key24": "2ZztkHHrRdXFgL42BARpNUaMjG7qB74uTPc4LtxDkEYuq9xgjNgZpasAwNpREscKL44rw31i9AA3A1kAAA4XnR2i",
  "key25": "3QdKvDKsCtFLSVgwN2a6AoVuGoyxVYY8sQ2xLZd2SFhQ11hcN6wUeti5HHYHtwkAEq9vNF4d5mqmFACTuEAAC4yL",
  "key26": "4WmwLRnPJuw1ac8ppu5757YMrkBhcaitLGzkcTPkoL9ntftTSQFYmUnGrLhtnjR931xY59X5kea4pTuuDtFNsBGT",
  "key27": "5J2p1DC8F3eAEpkaumQmGd2yDNWuAXQR7xokMRfMZmuEdZJtgWQAvb5Gn1aXzqqwYJ3sgK3EP1mbeAmGPfW6U3T4",
  "key28": "62GwLFxszc29rV2r3nXSu9wVcA8gXpJ8rzNVegiq6syrme5ZUiUwzwmMPngmoS1cjUhf7b6VpjZtpjjgvpiNeg6t",
  "key29": "5BLvbSp34nUAX6R7V2NKuEXbmjdkk6ibGQn6SybGHVYk6WvSPNACxWqp1mTEtrcSsxsPNQzNSCUZ3FZ9boBeLSJS",
  "key30": "5kL6Lp19aT7Vo7umovn3xJd8KgLnYKse8yfXhNTnt3kZqE9wPxXN1pUU3T6HxKPHjNc28Xf9nFwZeuhPLHPL4UPo",
  "key31": "2G4Gb4nqWTnCod7K8cSKGH3zvgQyThVSUpAz8bmmkh5oTW7tUo79fF8cYH5Dx5YnTieBjBajctxJKSjwWjU3ugZt",
  "key32": "21WcEbeEvDLMftgCuFmULC7VbC4aLsE9FBWTCXqW1BBWoxJdDJkpdUmkgd3ENr26Bs4UPbQoM3LVGF796bicAmnM",
  "key33": "32hUuG4KpQpdBRQo3pSDWXi53ysVRq6L8thoQ9yqSW5PuBtE8n65hCgjbmqnJrWFaBP16AWuZXoqWgnabRMwLxcH",
  "key34": "3gTUk3v4HxJM7yo1MmEkxsWhxbzyEtVNSEPx64NWF22Aiu4RZ8cNywrjqgG3UodWQy5ef1PhVPoSw8x4zkwySpJq",
  "key35": "62mY1r37aooreqYy7KVSS9iSr32M1dU6e9uhJJqVYaAWKokFEqtt7KgzyBrP5CH5gQNTVxgEAwPSk7P9gqTpfz4j",
  "key36": "41nyxTdabnuDD2TqsqEyuQPdeTDoQpBi3BeMipCVYYQrs6b4TYjUcTuVhfXR2crCHcMHfBUKjpgx46nvK4pEfp9i",
  "key37": "4sazoCpsg7GDx4P7DoJuhPoJKxP5crdcPawLEdxaLEBrb9qpSd5yzU1MGYN3PBkWAzoop5YG5mCKstZs4WEJXhkA",
  "key38": "iky31GXuzVxmSSAyxSTUgrntvNyLUabKvdkYVjsCTNMmU9cBuwBT23ujVLiz6McD2nZvr7QY4fj4ask2WouDSfQ",
  "key39": "5rm11HH9HaXyTQxPAxNsS6oShA19HicUkBAbPn5Y8AWDHh5zNrdTESrtgmtriS454kUnFhELZC3r9uMN4oCVE8Aw",
  "key40": "AbwbkDLNamYkxPh6KwhBhbumPa79rGo8bYgknR6M1Nm38YQoRh9pD4ciWVELfRwuWYAzZKFhxHN5vseXrcCFbAF",
  "key41": "29JsLQR4Zfxw3CEX8FvbUH7DHmDQ4M9MQiBGQEMmMNroBMG3gtyQMuY4Pp2CpNEEXF6HUWiy2A9U79tdddJzQ6zd",
  "key42": "2JHX6S7TEj4CiBN4i6Y8uuTN4Xiv4881GaSZFmQQbv6qb2RQccJ2RrVq83fptH65nLLocNZUyRC7HxACWwRLbcc4",
  "key43": "59MZ1hYVAyFgMQCLTq2noq5o9HdisqkaCoa7D8wLPU4XuF4vyGG4uTSVoDBqaLuwY36sRuijnxKgjFNCooMiCYPR",
  "key44": "tF3LCdFvaF5FRq42kLAWy4kWxQ1VrKLPgQpguWnkbQMkhb9C18R8BsSHTMxa3DFJAu1st3wwt5jv7yKGcUgJnUH",
  "key45": "3k9uLHAt2TegbkSQANaGw7DafmBH1kXSD9rvpmsWuLmbZ1C2vf3aycAPgNV1Dkp4C9PTYF1PCQcoJnCjCAgpCShM"
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
