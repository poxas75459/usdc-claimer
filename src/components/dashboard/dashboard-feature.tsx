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
    "5gjXcjke17ReVcWowtLHGpNHD5in9DGLX6Bs8Hs2PsjNz9ZxfjPiz1w1BhGQp2XwkeK7K5q1iRKHRe9hV7ojYFio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wr4M6FNHajzJ88KsqJDQ3ToRCyyv3Uv6Cz5bpTAviEQyh46KSBfqYj2FYvGzGVY6R4LyPYqKh7cB9ZE6q87JAzR",
  "key1": "5v71acDjRgNTs6uRjpU9rGqBiqZ6tWobdXNZw24KsgiuHLt3dKNkCuWLfDhUmTqDxuSyYocB5kpzZRBq7FhHaT9x",
  "key2": "5jZ43gDmsir9epXEiD9YhBEWkegW5C4QEFv1GkNTZg1j6ebimVhuii1nVGZzSuMfB2GaAyVUiDBhRQggHu44xa3w",
  "key3": "2FURxFs1x7rb8WRQUNTouALUsvGDSjix7cNwxpruaVq3VEdUZfJv8PbCFNtxtCYw6LWxu3CrdWbdNBXViHjBzoJr",
  "key4": "RshMQGZb3ntgLLJtrnGQtsSdw1XLPo8M8vXA3rYpWgmzmRQGNtsNeSLMRGf2SseQCENPZeiUjjgfj3fdNH7SqAM",
  "key5": "ftLoAPTjjq1dosBNgT8ZfRw6fzWqh4yek9aDCXtrKVWz5kFMGAfL7Azn3vhM3Qh2dmvJ39vBu7N1eqduCkccacp",
  "key6": "31dvcXfPLFETuNAqHgbSfdFe2RaEiPWsbqrxhe4Jrd58xFm4vVPUPg9eLs6cKzr24KTwPpdLrhqBV3v7CXGZotnX",
  "key7": "511Yio9YBUzBqXWY7NRpU4r7q4k5TvEv7j5fmPGdHNRYkk8rwLFFFZg3YrfZoPMqbQHQJK9QoZg2tELMLiYD7f5o",
  "key8": "3g2UcU2i6GnsCiJEpPJtERXt2HKeA9bRr1AJqpPwPLEoxq4BDB7PXQ71Etnvkb92pjRWnM6TEYrWd4VkhVcKS5tZ",
  "key9": "32YVbsibc47riLtxXx4utq1oWKTFifyc3dPWreBirXXg2rWWRdSMYeMkR1dQemMjhU2XRGqr7KvX4yDHNKvvR6PL",
  "key10": "yiiU2hweyVpF5dFJfskA3WsyKMBGELVXgLwx8bArVWo7KhQP2YPZUA93mG6Xf3BeH8r4V4P1dhx35FPRhRrBGHM",
  "key11": "4TNHzrx5if5xSGVkhKTWkPY6nkNC5e4YPixEjitPPWnC35eytbAX5sxaNdYHak9kuBJJAdiVH9M61cU3jnb8tZKU",
  "key12": "4T1iv8B7xNsJNnZBHtRVtNNQaorpukJtqkjEZMmK6Jw8ZidQrjy8X53Xy7wRyNgUf2HwDSz9ocvLxeAyw24pnTRR",
  "key13": "51p8mDUjViV9dXRJ4MvvkPiBRBo71NqTDomE1iFLqSMxDLP2kGZ5J46fVx76G8a3UFjUPznHGP8FxRG4DLWRGcKc",
  "key14": "2yoGKozgZc5Ck9dDFB5yonYmjuZSxMpgSxBC84NzacFpiGNg4CD5sHPftqwwaxezFYrELYAmGfLCRbBgUwNXk1Mh",
  "key15": "66g8ZRxNJV3vJmwd99CEzRbD1yK4iHjeaSu2qo5Pr7BTRtGkaCjdepZw3oJ8h1E7gqG3kDHY23C3SmGba2nZcUq8",
  "key16": "2FpzBYjqxdNb84owFvGDWchpfm7TEhxm7ufHKoo6DvdKJXCVPhRvosyaNBT7PBST1m9ZJtLveyoGzGbqMqsbY1ek",
  "key17": "4S9tgKfhSKAQxpvMDBUBdCFcynk6yYzn72PbX2xa3eizd3P5RPJcT3z4i8iHg5ByejvSW8AktQfqomuVEGM3NwBE",
  "key18": "4BdzBhVeyowLP3sWZNRg8gxrnYjCPbeqBmPumxx5v6hFH3LvUKEfo3QzYsHowVLNhe63ugdqAoBsk5RECdLxTMNE",
  "key19": "4wByVPRZfopzN77bkk223FXiDe3FXkRBPv7YRcpTxajfWeLXn69ZyZfpDDWi43z9UsdoSpeyef91eFFdYyxh1uEc",
  "key20": "2GoCusZQkpAyaaURxh7TcnpUfkEKREEW3S8MF5yhu3ph5wi3Zx6su8dQfiTwjvD6bdAnm5ht8p3KrVDkGc3rxsZf",
  "key21": "27gSafcFdMekxdZCNodFPinpeX9gUe6R5F995FP6nG6ec1w84aaQnhWs3MhybJcgDy69Dq7Te6KEwmdrZ3wGuCBH",
  "key22": "2JkhWdGdivSsdDAqUDGt9aUUVoxX7w8EN5GG1Uwa6sbAWDKa76rvJ8eSSCgkiqs5tJVk9J4ZmUCGuw96sCZVeMvG",
  "key23": "2AmWzSQBnphRbaomYDA1FUHt45M5SgtY19wvBUU7GYeAojwRh91L96GkeZnQibUQGgDByjyZGGZSV8rbJXyVuG7W",
  "key24": "3Rx1CNXkSXgMUxDwKZKkH11HHDskk2WbDzYwJ4maKmvQ1osHM7rwL2vcbgg5p8Npet19iopYER1aCuseWsvWkhKB",
  "key25": "2cfW64HeryNagGnn946a4LracuDmePEkDgsUDoLKpEFvQyHvU6NE4KAhyMx5K7bKHTuRzRd4pemztyUAdvJcb9sq",
  "key26": "5DVWi8xhGjDCEANGSVUfga71SQNtM7syzusXpTMrJg4CGKjiEdbQaH4jRedhrXKGP7PncgVXf6qjmPzWnCLXWGgi",
  "key27": "4g7nWrNWfCBVPmgC44D9ib31k6YwBGNf3EomuA7Kt6Mqi7xbqxM1S6iGFEB4H83dnQi7o1MdrxWBENCkJYGr9CKH",
  "key28": "4hHkXLK2bCcEpNzNGqHTTCN6VkA6up6ERjK9m6BhkueoFUnVLNxi2S1X7PDdbjn1211f58XSfFBCedTmbabGnyY8",
  "key29": "4WkBsH4LmcMfFTWUA4DexEcSYEwH9Vvi68gRtE5cfyPHWgxLHx8Z7s6ZVj6gd3djXKUGuQEZ6yj94wViHgrK56CZ",
  "key30": "2f9UrYDKnDWbbq25mS2eoBjTZuo6Y4iNNC65dLCAShb5oAT2Zyw5S4f2CrTWds4CSa5QJjURFmrpQPbwwdQTFzsH",
  "key31": "RmtzN2WwFvnajxw1ciL7DwVyZZiFfbKBGAwoSRwyhZa5Nq1agJ4GfRUkGFjwPtXkpTEmgw3weg7g8SAfguCYWbo",
  "key32": "EDqy3aBYgQgvWDbYY56uSiQSicK7WBw6z9BgWcNbsDXUUMA3NRe7P9nLaYE6yGaySGXm1upAZS5H38e9feuSxEP",
  "key33": "WjuD6HXCnHT35MyeMTXi6oRUQZdAXfGZGneNC5sEAM62KABmXPKSNXVqmYF42p3in1GgYNB4SUBy2SGgLZiXmmG",
  "key34": "368oGeWMQi6nDLhrS9Ld5B6ixqpgdisPvQvqTTKZC7vcmARuMhb1qX2omkCvegCNLgp2qMZqzT6fUXKrFTJkVEyj",
  "key35": "56qyPTuDHERbBsKh6211BKhVy9bcNyk1MsGboP4FtrJCyU14PE4PbzTiBMiSbzhDoKL6Q8143b1ZmNVVuQ7YjEoM",
  "key36": "2hjckod9mFUYSeeZE7YqL6x6i5ggCeBzYTHwZUfHsFv8RJ6L76eGRJg6ZnNKG8NeqN3DFa8P7NXoXqvZyHUsrNm6",
  "key37": "2CsPReTTzt9B1YZ7VeZoWvSCD2caZnxaz6e6oZeefDa3AJER67tffGwAz2nJNCkpwkZnD9CSpBvqzBd2TZKvkR5w",
  "key38": "QEdE9mVuchsKej2CyiMDkjvfYDCx7P3YowK2mC1wC7B7aBna46ARsEre17Yfoc2TGL5kc3mxx1gSFPrNZDLgaX4",
  "key39": "278pAFbMZ2GduCmUhdcTfNMcaut3TBU5PCz4bcQ3UYArFCe5yZ3kZCDFtVLJ8sP34Z919waMyzaLKtvWSMFJbWY8",
  "key40": "guZSmLzHFsa3AyqSsUyjeWSkhpH3JHCbkRmy4Apqd2P5HJYyhEZ37WvH6w9cDPwmPTgGcyMRC6QQaBVirQGj2e3",
  "key41": "5Ex2B2SeDFc6DANejd92DpbVTZBy729aUqp2Rfka6QiibbxbF5a6vzpUPKWS4iz7B6Yz44LVNJ4jrbpesDhRqdq2",
  "key42": "9SCUcsLbgbyFeFvKixCcgnhNZDc5bVzRTXcG3JFRvmrbMX342X7DZZobnUng7jSzRNH7oJq63biunSjpX5Y8Cw3"
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
