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
    "egY41zT5XHWtpt8X18dj2UTUWVDBy5sNcj3b73bd4paGgf3MiQLmuMnjsgEq2EN5YZUyoKZUjgD7xvf2REwsW9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ptDaTnCna78yZgQH3yBXtiJn25MXSTiACcQo1JbzFVYZ7oor6behAhwoPavDMTaREtGXJGYwvVYGKGhW1ZpGA9F",
  "key1": "4FBhzsiJ6pn5w4sKFWHw2mnMQtYTYsLnypgdssWtnWRym1Kmz6b1PNivgNoLN4hkCpPnrCeVDdJV7WrpSLHiq2GY",
  "key2": "4ubEmuBoBtLDhwvuDj7Khwy8jKPmuyWAk3wtxwi113gqWrsZP6qn5yx4VKe1mDzW5qaDbTuTJShWpwfqKuQKSb9F",
  "key3": "2WzUbVk6cRLXSYTTgFadX312iquvCNRHb7faWSY6J76Qpfp9rMn2mwz1yLDECRYWRuGMfeSN88bzTFLEgVNHseHD",
  "key4": "D2c4A4WbHwb3xQ4hKfd9ZeZNnWaeG1p7qM6zwDq7JpYuPaG862sv8zfCkWM96A5vTKVdRYGuze9121jCcov7Nvh",
  "key5": "39YaBGmDc5KvPLtA8YxBsfpG6LSdzZ54wDroSqwgLx8GRvpEi2qi1pX7wZAC5H1aeEyzubbVW78YYdkpf5vsVFWJ",
  "key6": "2gPGDHJ6cYqWcJxoGtnCs3rWY4jGfCfNWsd1tMDntktLBYvvgJbGH5mcvkNd5oGxvFiB2ftk7tKvzkzZabXNHfHD",
  "key7": "3ghTTzgTvJDbVY8PUzQNs4AemhekYAqSPERFvLkYs1eme7AjdHEzbx79tRJ551miu8gYsodEuhnghgVzr5aL5oFf",
  "key8": "5AX59rA45RMANuN1X34JYL67nLTKYytfUehFnHdgontqw3AZyJM8kPJciDt6J6B8Ji32qQDVZtzB7bhTYiPdsSwY",
  "key9": "24dK8jV55UcGePTDR6t2XHUFXMSp5vPUNqKsHR5qx1ZWYtbX9A1MdRwZ1b8Fu3vE5JyHVHAXppLXsN5Quy8wBkrb",
  "key10": "qziJcaC4tBz6JhEMq4VqodDCUgRnt6Ez1PW85jHiRakJExdyRmiM7siT5LZQZJcMTZHqFxxrf64GT4FvMPg4yhu",
  "key11": "4xTVZBh7quCg8cdZnXCaohJPAh3ddZTbjT3mF5CJr612JQjatRZHkEKcT5GNkaxgdnm9TeYJKz6AgLd6JzhwRRp2",
  "key12": "BJMmrPzkW5mt2kJbTySH7gskuGBP3sTJkJL7rmTTHdj1ozSUCnS8wRLn5EvMuAT1bM4Tn6iNrqnBfpCrEHJ6XtG",
  "key13": "4ZUaNdKwrBcdZXJRC5qVP9MCBYvK1e3Nr1cRtnMKxTACbDDdChuwCb2WvcuRpoFdup3qyN4uSQ7BC7b2q4AaLmJd",
  "key14": "nUqMwUakfuL1nmQZJ85NLUBjhoFFGnVNeehUn2xraoeBxCWRW6moKSxqcA1VGKe7Fd2oY5agigW3vXYWKttT3v5",
  "key15": "5hbKtmnhrzguiSDSS9myGFgMoLT9KRt71MyNgtnvYaY3H6by7r3Yd6zr5jXdY2AN9uU3hbhTHUqk2aGzqysWqa5D",
  "key16": "5vWPrYy7mre28jRv5K3DSge3ZYmqWgXbCke6diUmqc33z4CC7GQpThpJU1b572yQwdAtMw9bWFepvq2dwdSfWKU1",
  "key17": "2aKKsGt8dSS7bSE4KwdV77qYMpD3jXg8A1gJ9L5LtVZoDaCCvJ37Duge8nU5ibr6dp4SESw2PwZTAgTp8efUnS3s",
  "key18": "4pDEdgGA7oNWw3sYvQBBtHHHLxScKwiEhtaEav8TKffnYBbyFMefMpHgDZMTmbHEA6pvQZXZJjdBAzmD7UB8ycdc",
  "key19": "465kotVAFpxsaYq8Q42q7VJ9sKCYHMKhB26QEBcF4EDeB814ZmNgwse1UZ3mKPoVsc5gQ2kgBRAdS9qaxZf98kFS",
  "key20": "5SLjmC673Ppg78ckFCCKSdi3TxRYEgsjcw6ci9L6YaXf7i365DdTw8UVmVYZgNxJC1PjFbjKnzHNxMXVa8hGhQW8",
  "key21": "5fBdSoV81Lgn7z6w5j6wHCTJCKSyak2pE7L51QBm98cNSksU6yhvxRrfUabxxJKT7cqRvUA7HxDp9HGL7NadzpYW",
  "key22": "63XCYiaMSFadEvWBH9qZ9SnDQATLirM5FStsXsfeCA3u1z6fKsn6nhKFS2GQiCQiocNRaML9YpHwcoKRZWEi9VAy",
  "key23": "4kXVCNhWcv5xzavW5iJqSaMkyFxqkFUXKzYGnU4MCEy6RU6EGtYyrbNtEUF29M9eT6aGUPucKg9zoRv54BCaQ63v",
  "key24": "5ZyM8y1aw9DwqdRzTCybprkE59HWu1LQMNU1zbJ3ysdXp1ubvnaq7gneFVBC8ooozNoUJNSGFVP4617HWfDsdfEs",
  "key25": "2G1buQrUcP6XXRXaYoaSyysf1avUez7DAxmfjmfU9Vct1ZpBrAk5xbmZQmiAWsacM7up8NUnpy2oD3Xd3nUja4fG",
  "key26": "42P5AK3SkApUfQKHYpMyLHAwJGzPGjphbe6LfgZmY45e3HumeNuYsEN4F7PsoyNojAfjgKPWccgnWYns31j5TJa4",
  "key27": "5b5kQcMN3asACH3uJEXDHT7TZPsVv9xiaRxFvTcSD733E1bFXZmhJydLshGB49YKYcfQ62kspKh9M6yScnVd6Rj",
  "key28": "GGbKkaPK43zt6cBrmbRMPSRUzUrKgga5dRQs9E7AavSAiGJgdcGh9thYyGCdbj8rerziJYcFs9SQS3WfdFGeNTQ",
  "key29": "3ButTqZ2PAww2Qdi2mcbjBJ5HJjisH1Pg8NqW6mnMz54YNFftNfb594tpbZz2tJ9PGuvB2mmhovpTL3SGgujKL6e",
  "key30": "atKSffMf9qjeU14GkwaTcvK2oZNjHmja2deZbQNWnGiLqvoZBX8soRurxPyGEdkZqxrPx8YEpKdoMpJgpzEwgpC",
  "key31": "37sEs48eChpemZFn3Td1cvyVVXHBiyrgV3zwD6sBvMgZW2htrhZi1w5MEnAfkmw64etfDvdVoXVPkoxHJotqkpDf",
  "key32": "4VG5erTCFqfyoKVXsxaLFHxsFeSeXbNFEZCG1tjT7d58nmrcybAenhL9rKCNKSx9cT4M1AmzzHL1kqr1NRvYdkvv",
  "key33": "5VE7UMgGoKbuMgpCTwCrUqKwjVv4FHfmgDoRxizj75H97KZsveveBPisfoRXf8i7gevSTqp3PSVVquTQBVTSWRTb",
  "key34": "3SVtsPTwFSVTe2Cyjt8g5tRrRVYdEz4D1MC4NeEgmwTfybkUhRTjKL6R4dfwGjokWaqhu7msSEVJjSNN8kxyXis7",
  "key35": "kgUgzk62hKzq36xZjD8VGbFa81i85vjFSpoFwXnc8pjTHGNhi3KMWAJYaXa2oMoMs46VMm8a4e1i7wBNC97jEhn",
  "key36": "2TiejDWGWZ8SGAMGbi5vzaXbzTfPg5SUdso4Uvd2nqwygorJZXq5zvx6nTgJiry73WQ84rqzu1ca6Guvu4nYGLay",
  "key37": "9EJssPipBdtuGY9fBQzYe5Hh48VWLqbHswKkduhHJ6WDkDvv7nbLSLs6x7xrNCPDfJRZB9vD6bpNGo2BuUPLDeD",
  "key38": "4tR3pB4cC7JH8he6CLGZ2NJGPHQSWXXatMmALRpFtHqk8ZRbppWCPFmyeoA3Bh36yWofZoVbUYEkZQQr48XrDw8p"
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
