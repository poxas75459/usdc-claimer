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
    "5Gg2UG5V1GuLLRiC78iNJNNZz7kuJCSfLpygdYoDeyLUDBQGhrrfn9JXLatHEuhY6o5JW7fey7DREcd5KQkyLV6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P4oBaT6GmCKvkk4uPnzxpY61Mog5qjvnCfNZRyJ3VfnF8UxfuJYSSNzKG4WhkBzSzghyXEJzP5bV1kim1WUVBhf",
  "key1": "GpAaYjxawaoojBg39m5cQB1UKzaWsNuSgRi5AUhcTXQQ3SNgQVBEvKcFoHrj27iuGfNk7GAgSUctJD8BdvahioC",
  "key2": "3DEoPaUHPzfMEnBRU6SdQybRwih4ccQZYfpDCwWdMmzCUUcFUwBELRiuAB2hCTPUqajuZH5eUpYmTUPw1gSVtngE",
  "key3": "3kRnzZ6CBJBZpYP4Rh9rpiEsa7r7ztjySzNKRGrE5XDEYmvRGwhWREQRoowg2NTj4e6TfA1kS4XDsEK7xBKzpp62",
  "key4": "4iXC5nKyutdZ851cgQhmn1CdAt7xJJnfwxyybH2WrNrY6J7o3Hpm2C4soB6E43JmSZtVT7uxH15qUbWtU4E9d1uK",
  "key5": "2XHCUqMHg9b9P13vydwPfjSkSV14LVe73JLcN2CJFsgVwqArZmjVmaEUzC3VcnDcTZScHjhRyYQoDWo2siiwC27A",
  "key6": "4VRbgAkRiswtK5jPE34ao4rvEi8xMeEwD2gAYwMSV91gKYJy4ELaUEL12LURdi48Ye1Msjzv5HKigA8xr5e9bhYA",
  "key7": "41dDvp3XUFDevohSdAmeVEQTUsd1q6DNDQaHDqw7udTgc93sfWP1PeSjZQw7a9dQx9d6q4pVNm1Fjhzw3nmwXteB",
  "key8": "3KT5DVnSreRgdYRASzHmwNdbnMdsb6gTHT4rzsSkY2tCp8vunW7tDDmDP6h67Nakcn3EeSjBWvFTA3Ehf8YyDHBp",
  "key9": "4N5LEBof7RcXoQ4DvFLdqowctJPsAQWe1frN7RTjma65Jtk6w2Xur8kPNWCUNGcA6T9kCLhtdbQaVQoeJkk8uPbv",
  "key10": "WnetcWgAiky6uE7wA4xKCa9U9gyAY9Mk1sV7zaMiRoQwtLVnYm7fCCoW1K2sMDYoYsaEbESTuoEVRznaW1Vjyth",
  "key11": "4fcEzYBPtRJnfAwrFwnnSLyEeQPnodKFHSMdhU5R18Sq6Lbj5W8dM4SVEaNr61wW7GWjdWZNNNh3i9ZMNZFskyfC",
  "key12": "5xsyMMj3GPTwQgasmSqWmmTqiriWUoisZeUGN1BZj1qnGxBN1z8VPeaJEDWUVm91Eb2G3dkc1K38ws9jzr4Arc5w",
  "key13": "3eo7E9QxevMDtGKgRxhyajDB5GsrWjprpXmkYaLYpnCVBVmn7njo6F6RdksxtZxbprPZZpUZxamhY6TRKwo9regT",
  "key14": "41MhZnqMki26u5KcNLt9njxLzNxSMp82DfXziBMRePubd2Fbor2sEXjURpCYVMv5WkYDNun66kUU6efUhFaSbkxQ",
  "key15": "3W5HzYJoZhMK4btSrZwj2yjK8V3ehZjL9PYiC9qHjURc3MswLQV5SEhUJEZPLBgzdTvfoMeRRDkf9BnugM9ZSo3s",
  "key16": "213zmiPeNnchGBhbSLaufPQRfdgDY3gWU5FH1PGzHL4HhsuDTGxJWYZ2TYUZYyTwjTu3qTrvUqhFT44RmnZ6eMKi",
  "key17": "4KVgcixHi8LjWfKUybJHnnjz8MBUFaKUUGDD8qfG3jqRhFLJ5U87pXUqYMDs5sQbBDNvXKRiZ9ZaHeZZ4BcoomLt",
  "key18": "3uYiQgfr417aw7pziK84MvMNJSqDTMyRjYfFnCVGqF2C2cp6qb2e46NYhdAZT3xYRZTak9NHZ6fF5S2u3n3DrrLv",
  "key19": "vNbo7TYBzkL2DUvqnatz3YWQn8LUKRkcWhAyzPq3F467U1JRfAgDHPN1Tb1M1vebWie8ydgk4j9hTnfQKk3kwAc",
  "key20": "3jar5yC6oG2foJN8F5eCaUco7PFNCqJa4ZN9vj4Q5bpueMuTqQKGfw8W5mZMrXyWAW7xcfx14bzQZhySpMcwSc15",
  "key21": "3hMsKwEg63iZwKhmoaWctCK3z6bRJJBv2DasTkn8fHj158Mw8vYP7jJTuUpgdH3PS36YPRRQzKdxdCT661opLeLB",
  "key22": "38YBw98786gn3GBRnbtTic74VtUkUHUeBvwsjH5dveb9d6m6MuLGKzQ3RxmdJ1NwjsFawTVWwKvjMRAdSe1Px3PV",
  "key23": "21D8qt2EpL9KwmQqvvn1GAjiHuM7LbLRqaqEo8DkmL1GU6mhRBmtenyHruzF9CEuEUUfj1iBZiQcbVCix2UQKmTY",
  "key24": "2v6mUhVoixyfgU6c7EzvrBeKb9ddmcttWjnH5R9K7cmc3jHHhuHTQgAjk9z14UeL91SiWMwAVsGKmBgKbabF1Ebg",
  "key25": "3jcKjYzg2CpDBAgDdqTh349g1dPFMAsKMjhXaxTs8svwxJd4bGb2rS5qGb4s61QpYSjab4FJfgY6hQtCDYm5WwWH",
  "key26": "tnaEUSw7ucwivHsVNTTVHFq2c2mfEvinASik5EMZTrjwoSV8AhqJm6jomCMkK2ASqWy4t1ZimokQAwAURrayVK2",
  "key27": "TnNQ94XoUZMqtDXWnc4UBkhn3MFkEnX1T1SFWTA23PSV2FseE8NEGUdPfCKodPmFkcjwGUKVA19aRunfZtcsFWm",
  "key28": "57UwYyfh5nSfiy5rUhv59FFHAg49sTZmNYDZ2BJFzXrcBUGmfZuKZdP6fMhrrrc8AcpH2YS5JZXVwMg4fNxqwPyN",
  "key29": "WZabXTT623MUGWwhZNDCkJc5aknJVkTgSo3sab392UDWA8dNfmhhrLB9Vffk9M5dBXYJAML7t4kEUmSqTk3g7EY",
  "key30": "4ZBkcLSnK16aQ5eYwBt7pUZPUw1qEYyc8vSz1UUNb9RdfSoNJ7i76PyQPRmLLMz9J19TUAX9sRXim4FieBaJstnd",
  "key31": "5CDwywwmaybueFGUgFJ2wQE1qcgt9QmcF1RYs6CvGah55dovDx5PhirNz6WALknxL5sEZBahw1MKL2RGv9BEYPFu",
  "key32": "3jJwRTJkfswb7uL2ASt5KDh4YPZGh466PVXE6UkBA17niZ2ZRwSYnp7pcNKyevwh2Q5jisTNf6VmqYo2Gp7u59Cv",
  "key33": "2ddfKwhUkRxHybCtGKLfT9awGGoekPnbrnWAmbQZmNMLKkhT3Xfp6cespVLjnbTXPisyC3VEhoV13iATxULmUEBU",
  "key34": "m7XhZAT5dezgqAbXwHiL7bwT2bH71Jp7LWukQMxGLj1R4Hq9GQtDcXucmKeRMTJWWtmtmF9BtLwDg6XbfGraSgW",
  "key35": "5c9N6dZLPwRCZ9VeMxepFsRbiUm9y3tMhaBZLqReVUmTRdkBqqRvCEup4UN2xwZ28v3EDne89dG8oVh6neZcRDkq",
  "key36": "2FtTGahvRGNuaQkcMTts4LD7jiYXWaJjDPhVnCt7EvUP1ZQo4iFDNTRBsRFhsxef4zF61SbGFdkouMkHkeimAYy6",
  "key37": "51tWWnDPb69kbfVNSaJuTGJqMqQ8tF8cQoLKZnK5z5C9eKgTz41CcXAfiGqmB2ou2VmJYfm6ThMVa7c6GjhBdzEY",
  "key38": "3zLSAKvNm4dH47vq7vhRrsAa1pTzzUdV5u8WdHi9EtxRQ6cEzHZNGbm86Wt7CjP4DhZYGxLDK4eQxnuPTEHMihCz"
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
