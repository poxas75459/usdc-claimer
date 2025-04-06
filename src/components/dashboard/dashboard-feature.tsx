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
    "3VBSsqsinFjNKsEwQbB8AzDfURvZQWFK3DkH8x7vNUucAfLR57Ugyf3iYK9wB7mury9z4wrk6dwJNgXNZdk1BBsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W378NEoGdHXuF5UxpCJdfiu5QCmZ2vCiVmeVNCNNGM1c3MHSVnwgDo7SDesTsM5J4oPe7ZhRpdggvkxrtDeyfe4",
  "key1": "3wZgtXrT3JsqYmjyauWDwgxZDocMLm2q4MamDcKc842mY2pqZpz7hE6EKApgXQwqxtjBRL3qpUnv7GSWcp6rmXUs",
  "key2": "4DZQAMEYx3jr543m1LeMXtUCeFUneUEWQg1RvPsQ9TjFUW4FYjVXoTHBWDnWteMZ7XpRxnn1ewXnumQ2DEMJKCgU",
  "key3": "5dgk8JmHtNN2VvEw37yVFP9wkeHW3iYHSqNn3XUTqbWVFixu9bVFSQtyqbQD7BtEWSGhcDgDPsSHR7UdVeejcFNY",
  "key4": "rVFPvuP3apcV4K6kmwshMfqueRMkxHBsTxagJFq7pGje3UG3bENCYGd31xxpAe7sGJBAQMoHn9vVZZZR7HVTmqP",
  "key5": "3qqXhJioxiJSwyHCuqUuuV8h8cNZfCyLceVUdRLBZojzoCWB73GwJn7gr7CZiBzkmQDJFcfpLSMQoymoqrcQwQLD",
  "key6": "4S1vYHHMJmcnJLb4zhGpru5cTtqRHU2fCgjq94vPxQM3RZtAo2q82VpZSjvq4zwzwrScEHHyuJYM3i4w94SbmTh",
  "key7": "5SH8bDHe1wXPyTeC6gFpTSfJSniADuXMo2TzmZrSHxWddVtkGtJPQezBqs3up4ibFEyRTgJXpQ2DkFB6WbGFsCtp",
  "key8": "yjANnBYTtWur2dXgXNYUmAHFbmk7rss316eonVswavbvxT1wZ6UoN2rUnnwzBjkrPzzUCiBmUkefQNzSzh6SkxC",
  "key9": "497y3LKQyuZKPmMYSGER9eB5KCuEyihK1hnW8eVoU4mqrkNK4jsukHvgRL9MwTqvv4BBYSEPVYkTVA8YVALLRzAV",
  "key10": "4E43xSbhujGzMX9TArHeLNuTsiqRQwzJeWQtk2LJDH8F2Do1bADon98hK9ZLFKvyjV7X4w26BcoruLVyrDsoX2UG",
  "key11": "3sK33MhWVU2aN6xjYmAUhesnkByhm5PrGLYGkNFQRgNBaWLv4cGg3dwLLdkAgWmFGt7vuSdwWN8SX372CXKuCWLr",
  "key12": "31Fq6zqatNuJjcu64tSZHZ4Dhu8UoDT9yp1M7qJkY7434t9DGvuek5fdbAYHKkVrgp2eCQRLtqRoEYYPHwhHWZvp",
  "key13": "4x2MWUF84fi8Hk5igTYexqcpTEXmZnCsjGZAzayNAmsVb3yYuj3rsqLauHXZSNY14P7NvdvmXho8KyXS4xrV6tfG",
  "key14": "54f4MvKqNk37UCQk8XgHKaFHGranVRZhKxaoVtfABUPswCxuxAfz7S5hdAHwVsA21jF11K6JpqRY7M78GVzdyVLP",
  "key15": "WAJBW7voXKo3TWQsEMmCahxA69EfHZZpeoUEvB5qxHYWaHs9rWGk1GgKzkboa6tTSa698rjXnDTz44k1m5j3rJr",
  "key16": "43j1fCX6CNRjXhoX61v1Hpts82TXEMzexpWLk8BKafbDvofaERGQH6282kYYbuEtQqu7bZ4eWHJkfjFJDfRdjAFS",
  "key17": "5Nd2PzHrGAXpFjkwQS3v5NgKV2Wne1Ac7AQJ5JV64NAA5DoJfZwysUAE4bKUvgKuzepmthSg6YEswwMMPaoCBVdG",
  "key18": "4eqrdQMjk7PCBDyLo2NVqanubdcTGeumBexdvgzPz2ZuH3UJA1YmpdxCtFGUQUZWrXke4RPv3NE2nAScxQZWaLEm",
  "key19": "3HCggnqxXLNEJh3XirNcTrvYvT4iEsAggivG9dox4t3QYuumfHh4VTHjhYezCZYTGsuvW629UmmDm7TxHKCStR3T",
  "key20": "3geRWBuvBYYQsgE8sJim18s1tStJu41XPVqSzVDKCF999hRSLb8kiJ68wsy9vWp9jTNRTeGdSiLGGQDzv1WD4bQF",
  "key21": "3AnbTGXDDGxJyXnn1bWVuMVspTqBQjbMqr3NKt2GCfypfLPSVcdYHRyEC2C2TewggtryiDNCZLsNvtts4BFgY9KM",
  "key22": "4iYoxVvkCAu4QbZFHnsjcoNHZisjptNA7jUTyjsZWiVM6fJ8aZqH6c414277NYoyN53VqPPYCUngZpsBH54KG7as",
  "key23": "67mi17VLALZJJjNpmBVnqUPQSuVwjBvE7Kxvv1koFmoCuuyWLgXSoLEwn1Fswt4qWsBvLYfN6JBRr8KBNnHDMFrd",
  "key24": "3hPX5YKVJ9Chy4BCWmihRAG6MLZ9zMz5TgB64keWDzzy7WGVheb7dtN9NRYv1C54kUmSEbFuUH3dy1VMxWjTLG5e",
  "key25": "5geTr6KD2RoQUamb7pQAH9GzF6t7U7kWZqWucJLnWc6YGQW5pgPVDAtjQWAV7RtXuLdGR5r5KJgAG5bfhd9m24pW",
  "key26": "2rUJuQfZAxVVqAoGTCKkVVt2jUWKGFsEQxCUwSutbf5GRKcEwouNJsP1cZRUbSbdzmLgojiSsFUH7vUL1EYG9x3y",
  "key27": "5zTTf17TX8KTSnHMBifTuC2LgmgasrzsWknNRLFCj9AshibeDjmTxG4S8L7tQHf4D51inmp3NnKKkxY7FUsETuRw",
  "key28": "5qtSChyNsFYhMMhjP23y4QizoGEfWHcuZMvUz9L4u695zHGt9GQY2KAsVnqNhCzdoSpiSvc4XHFUvEd5sZ7rMpLg",
  "key29": "4VXgf5Vqa9nLFb333umTzw1pxsd5amcoHi2uMd7SB641S3Eydv9RdZcM3kTkWjpAjCj6RFcBHdZ2XoqH7RESvq3V",
  "key30": "2ZmXNX6iwLuiJEb6sE7ZoEbgisR3htG6zTMBjtFtHm49TeHnAXj4kHdPxCtqy9bKgPAF5Zug1NqzQ1FT3RZFfCxT",
  "key31": "3U1X3ESg66zqgVs9yeccRGFUmivKVJBdRv5y7LMKeihRFX7iBWgfyhdaDxjY81WGLfCCaF5N8WWgZui9qSkBxepo",
  "key32": "TkJ5TNCEsvM2AiUcbrX34erksS2tda68mck6uig1yuiXcdhz6GQCni4cxzGwThhPWTvpiU9XVaZZKmhA7JPLucQ",
  "key33": "3uHub4WX9V5vHC372vDvQTGEWBdZF1vSkv6d7PoQGHNURSLHjZb5QjLR877EzxgTw4iGRMAQfEns4rJZ6NvvBuT6",
  "key34": "3FYE7dgtLfoZ3nrtu4bH4uxTteDYy7XjcMAkaQn8YaYSTRhWDx6C9scFx6eQBiW5ctMbgEnNY8mop61zV93wU5s4"
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
