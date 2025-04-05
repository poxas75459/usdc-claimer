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
    "4FQMFdSu4z6x4hG9ee7PfTjjw6ZzPzb1tSMxFWr6xxARNeGJDpk7DWfpR9PUFATJc5vpgQ2zHgDL9AtLQGmU9ttm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23v8jpH7VQn8CE1NQw3bMNj1qKhSt8MFXZXojdtpzmSwzC7yERUVy4GoasDkk29d8ZgZG5kSPHYZGimAH5kxbLRr",
  "key1": "3DFhTLnfqSDva9z6tq2Ej31znH9n3vsQLyrwCnVjcfYD5QKjMji8WrVjK43ZbyNXMXH1g2v1SJuh869JtGUZuYkA",
  "key2": "RTSASn1MQLn767cizThN9RiMkfRtLsYZEfYHvPQzxMaQ2xrS6HEqmvH3NRFCtY7SwLaC9G4sgxm8K6B7tNCH8tG",
  "key3": "4MVWf9U9J3ZDbxbQCgz6iq783odomtpaKf7h6gn8U599cuqkBpkNTVLbxf7pDyXq5EQeSuEmZTHwG8tmTaT6fuQP",
  "key4": "2tneZghvvCJPX7px4hmQ3QyHiWYSs9iVHgdAREbkqcCSvQGdX9WM6Tfpo2gPG688kvEAfWEwWf2BUdGDyMyvG5yJ",
  "key5": "HGpDLA4tChCvvPZvEmhiLP7ir8fop8gR48Z66XVGnUGBy6NS2H9RPsGK6hwNYs6cj8idU1zQkZ7bt5ypwCedyQM",
  "key6": "25zuaDkxfkdDrmmkTKi833hVWtdYC3xyYxFGDGJzWFpgdMbgbg3hmY2DqNRDsrb1Pczzh6NE1bNhS6BJiY4YbKat",
  "key7": "3h5i8c8ocL7eSUFxRMQz1iTKPEo98r3vUgN38y6YRjkkyazu3ig3hBMRSKo7BggzTVQkGaP8JUqCFA9sdZFWAhRZ",
  "key8": "2XH8TFZ62fd3tNxCQ52EGS7zm4WdEiYy3nejy8PhcGxXMKyfZjhiiPfE9ztVyqzDfseogzo9N37Qo3hyiB58WSYg",
  "key9": "3sDwGd9pawVobHJnJj1UqMwm1fy1Lm6zr8LUGw5Q6kN6h1hazzgLzWHhgkXBhoyRLBLnQ9Bbj26t2RTqDDjKuzhP",
  "key10": "4SYLC3fw5HVettd5maJoQdWtpXG1TBwL6kEmJ8ZZhjyBWmUmgqLmkCGNEdQrErQDSzn3CMwuXnEjKeSjjix9t6fW",
  "key11": "46EevFxQyHcyYoxwimJpxszURSnUjkMXWzkcgmrMUpEAFEdGSrmY9QJrmm5VJdM9krARN2jWkmbCC5TFno17pBx3",
  "key12": "4EnT49SEv86bcwpnEG96cnLRRSu4LzKkVTMgeNKAgXaBo5sVbAgsKVQpK9uo2zqz58vpg19Di7i4qbRH1PTE3uZm",
  "key13": "52gznrhBXHzzssAWwPdutbf1oPrJvwtLafaLyjruzdu9JuA3rW3UYbwCzsmmUTFdxoZbWFfUZy1aLibgwHnzdeix",
  "key14": "yoooP5hmA8nXGVeuXZDhwMLcWSrSrsBHHx3HePYLmmxswSkFq3Wm2pBZvHXV2oNXMpi4ASTp5ShtCJ7APDGPnA4",
  "key15": "4jSqa4JPGy8b4FYvk1XgU8o8HMs2jvpmuvLcXPuEuVKBM4PRtyDKhnNf6RC8hJSxiJjUZhXQ2cPyuHBaiPSyKYBc",
  "key16": "2ov3swbi2Uz5jFDibc7Qe6uemMxiBSNekC7KyZhRYVwRTWVCJrmkJGQ5imZ1w2P7Ct9gzhMevdLVuPHKiG1YoFP8",
  "key17": "2YfBVrpmQp42zeA7TzQKD7QCUSG87wVjc8uuzrA5pWxGq1eWyQjoHwnUbeQa8RAoK6hke3J7w8arYeYw91F2XUSq",
  "key18": "41J1CKmsoei2jbcPqzcvK6GrThB2oCKVKg7K4ufomPhQ2sCcr9L6mZXymiX8ERqL7bs2DFE7AVLGiSeDwaSAbYt2",
  "key19": "sqX7zCBHpyGaLK9EhQ4hx58TzYBmhiBaG7ggDxjqAUYmVbt2GTfTPTrVSg5inaLWfy3939cH7HghvLgPDPCmckP",
  "key20": "URi7zvcCNaCYaHQgNsF59f7JVYhdvnBBhYyZP1uPqLS5eNrC1Wu8vLGYqF1vG8kUVUuUh7X1GZWCu1qjV7UcZQH",
  "key21": "52Lf2E3Rr2XuPxBxxvYbTZCUSruZHpjhnpyxS7KFTpUDkxKFxQT3PEs7fzLVTs1MVDMBCroQD27aMdo3akqiqW87",
  "key22": "5huY9QBoHbKSR2A1YVjT3YbiaUiArCz6uNogKRW5sQC6Hr6gZpD6pYanPvfuCr5f8bMEtcp8WN1ryDHygmfBcMmd",
  "key23": "V46PkxQCf1fbwjd1ZhkeAngAEYhYdbD3rAsiBs5h3yx4GuhGQaxcGpJ4NLrWBMNG8F62peuJ13Ar85yqtGdTagK",
  "key24": "4UHtxYtpacy3NMxydjpCMJxNxfRRkfFEHc4kGmsVqgB8ShF1S6em5xNxhYD1v8x6Q9WT9sFrhgQazMAFeVWWSJ7Q",
  "key25": "7vjzeY2fBZwPHcK4drtuTonC5ZLFuV9k4fny4WppVoLoUzHuHTdtrfCxL8g4E3pwWVuYQ1k7P6TTNdoEXaSjVL2",
  "key26": "261sTbuAiABprzjDEru2tgEA9JChsPGaYXrAdSn3bmUxHpc7iDhKHqaTeFF1B1AwPyRmD3M8vNxgy2sQaRL6EDWV",
  "key27": "5b612aaGT9Q8EvraECpKUanugi8nGqsiGjKvBGEQJwdzBPy9v7H212wKrvPikFkDCYQL67QYQPFpvQsH8pn4D1fL",
  "key28": "5oNnZGdv36GhTW16CbdfJTnS4cppLRyF55uQgqYGQcUKbjgwqGwsV9LKnhaHMRkAY46Gxq2iHfjPy9wFrGLe48d2",
  "key29": "2ZEQshuEru134qyEbA3zkc26qWmTdpMNpVFaoFKn2C8wDi6fzyiXrj9Re9Q9vBGteau7ojndnZcdc9ZQRPxHC8FB",
  "key30": "5Sj3Z9RFg6UjW27dJMwDU3jmTwwTXwuXcMVoTVEbonqbNRG8F14RNN1YQY5k4By85bouYQW9phHg1bkri8Go9WSx",
  "key31": "5MyELK4vy1VJcGak7ykh9zGcbgQBFPRNNr6gwFGHaFNiupKNynDDmC58ycaXso54nYiZPFEQq4VEnrWrC1gN9Ftn",
  "key32": "QKXcTyFBm6h8NheTG7RFY5EPoecRen5bGYKHAR7YKiJBJ7NDj2MM7uczcBBn8kYCerGimqFYtsDeVUHhB51tpDm",
  "key33": "27E9y967Fgr1eqKMittxFzpCm7KeHr6PL7qGoQz9eHmsr5QLsGACgZY5xDLGrRxo6q4GwUn8cpxq1ts3pXPLrhiY",
  "key34": "51RQQyckFCtoXiNjckcmkzgBxaEfYunxbZPZEUMQtiw5ppKNW58updLQKXbbZXG3SzFQDV8Ucp8wJ49q4jG4UK3J",
  "key35": "5o1FavbRZaqQz3a4phcn9Qic2osqfrUHZnFNecfnn2G8dGAa6ibyAPm9xPwEg3Yc5gUb7bkR2AG7pKHp8bDwJ2UX",
  "key36": "Vs2Jbk1G5n8HkcPK7NAX4G1VpsXgoNxdET2zSoMfesBmftcPJEndxRcr8Zp7SnTTg6xP2WRBN7vBWQFJe1JZi9u",
  "key37": "2BCqgZAcDDLM78m3dhv2iPqeDXZdHcQ22z5qpqNHv55WzF4j9msXfNbwAYCjijCdP1yqQTP4GvLvTLHu1RAMHfmV",
  "key38": "yxJHHHbXB96hiwBfN5eQT9LcaXox4BNdkoKLHLwirXSZp9Pc1BAcTYboTsJCh6b2brz2KVGpRtrdgbDBfgJfn3H",
  "key39": "35cxSWhT9vSBqCbVxfiqZSLdSKbaSummX3Momp27b6r3QT4rZPCmFiZM4R4WPWaZzu7mb3RF3zu3sEgyFFtN86W4"
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
