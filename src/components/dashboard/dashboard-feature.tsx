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
    "2KSt234KUdQXbXCwvEGcAPah9odQMvKYPVmYgqEJCHa359npLnJga7ygv2hoL7DBmfqp9nojdbQhx5VuFRFsUHsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pcmhMRke4d7tm6Agzs79rwnapMMJEzTJ7oX75uXnNj9XUp3qmbVoa3aEUd4EBPwiwxXBSPDBQz2gK39HuDjApvh",
  "key1": "1LdxGF9nSBjEWKqrBrcBCRQzCZPiEbzfua8pNZzdXWPHBEdSKcmwDH6eFp94huinkQnJrrExqdZN7KgsU2eUw57",
  "key2": "atZC9KbeoZvZPKZZmnuiTDdi8aGC7ECxNJD89jvubCD1LtnwRmLDCG6toRqBPe6c19F5H4AZMNrWRfZugoFbm1J",
  "key3": "5pogqXSvupCg8vTsXSVpGXbmBaTcdy9usLQZjTF7UCrnBPKMZHCZHCv1hpCUSRtqyaEm78S9GENzAZqEPNXFmcdV",
  "key4": "5gqg1RXQWZhcP8UKrLiZHVn1aw2u6R8QyXLzh9jGEuQXACYvFKBCX12pCSQc52ULQ3eYsmags2pS3kntU8JYDExr",
  "key5": "2tHBcAnSVFPXDo7ungRgA6Cc1e67xcX8nXFiUWvHpPLya5ktVRZcKpdfmXXQcZbWbCZyyzw2FbYjyvLtX8d7iw8x",
  "key6": "4xt2n5tvkj8zZLEaFEGpEPUxFQjkMJMQ3biuTHbJ4F9d4kbMpCqkHJj4gLPCheQAenzUg3KkxnCUkBGmPT7rikhc",
  "key7": "3YRvMzdHsAT3AY8QzBmLhHbAKhzrJQrHMoXjjCZ7HSGQPkmR7GY6bxyS18diDBKM9jVUGsGHGEkXUhpRcZ2RLwZL",
  "key8": "2d7EZrbgJJH98ZH4DTjoRmUxf8uGAgAxn7pEgJA1Ba3JtrTEfZ8A74AEQo5wSWeKif76hVE2VAgSZNhapSdEPGUh",
  "key9": "2M9W4UXYTt9E8gBy418FzFJqYszGuXLYRzQSTMrehUZVvvVZD3bchP8LdpLkaCitFBmhvdkHVVvDbo3BK9wdxwP9",
  "key10": "4LFuy6zpXh4wxxVkbrSVhUXS92BuqLabsT8bXnpvDzPkUabdmp9u4WXwPjhBo2hCSiQns4pSbqhE4w7cdXKK8pG4",
  "key11": "2GrMp9bYmcBDrKRz6PrE96JAK59S11crF4Qc85nxF6dzhh2ywczxpxgpFV52MRuAWycxzoi43qSQJpUv9x8phVBm",
  "key12": "5Seggqwki89NebQL6eSJp7ouUX5rXkdBgM5ThDAVaSua4htzNB7PsYATmgKL64CZ9wP3rWG1sZgDGG8n42SRiUPP",
  "key13": "4qikr4DJ6j1pfN9DPWfNw3cMSzPLkxzYBdCJTwVXhtq7B5x1AKS23KP934QHEys97GMYQd4VBG64gCsnJPyiGBnT",
  "key14": "oSbgzihj4pRxBjLrMHX9zdya3GxsGRwzoSmSdUcjFX88hWP4rDNfvogtZu1jnCAeCqnjCTSzQJCfsKD9vfdRSim",
  "key15": "675qoeroWJDRLs9afALBnA12zXa4BUpPw5gC2u1t5f5HM6o14qhE4TJXKS9vjbqpZCNS21LacNR525VmTR9xcbH4",
  "key16": "TnLjeoXtnjGcozsFYiqzttkdSQXUU5ZH7XzK1SCG3qtncXicpLRARshi8KK2jSEsyPjnkSaPRxMhbAUUpw2Hu4V",
  "key17": "4ZoymYMr9YGFwbNvC6id6g1VUhFLH9NbLxb2GHS5aF5VJ6axxMr2mt8Ns6MWdrvvHUoFKAdQHsVWaa6VqLog81ds",
  "key18": "4t6SjyQa3ipanChqFqerbdZPtVfv6F97oy5UVFuJxQhzWZEWD6o8BWmsMJEFVBz4ty9Kzs4cNwQbsSpFwhREJutd",
  "key19": "6eTXAQopdyYATE87XBMdK9EFZP8zpvL4mgU7oSASAwrEvvN6ZTGYPLGvaQiXwWhsW1dxTL4ccs6bGubytK3vxGj",
  "key20": "3LFfbiSDpnm7cy7WnKRYqgvG8aJwcdGtrrZZSbA8JutgfYBe15LtodQfLJag7QyT4BN5FRZ2EQBs68SvEqoAsK2V",
  "key21": "3YcSZro6feEjSWkYcBhD3QUF6rXYB833bkNadhpcCWSPznxXiHtFBLH7fZwvV7GRoTHD6MQScwBrKJcZpv4tPN52",
  "key22": "5EjmL9HPxTgL5SWgFDadpuAv3mniVf7qRDv9GGTuwGwUfkhzKQ4wERcL1sdMtid6xcSTqGVvHevtxvrQMZJJhKCc",
  "key23": "62RgCJw2VmsTWvwx5H9X8ye8DZZPeUgGtp1eG4rh2XdKcihKut5Ckfd27wYae1LUWnjwRGNvTBh5g6KtP68nhcYZ",
  "key24": "3BC2eiyjmRmY9fN1PYKqGxZGzLJ6N8mjWtuJiFfRFcUEE6o237cjk6iA8gHBmiS8h3xEASqSYw1juGk5MHvUqVSM",
  "key25": "5LHtBYksgwsoxqxQoW135VeWa63uxbd8neyoAQtGefWQPXMoeeoGTVhVHRF5FUoPYj9NXaL8UuhH5Bioi7Qm96pW",
  "key26": "28W7rvh8KugFVwNCubpsLJitoGRVoStawtJmUMhFATXm2PuPyE4sVcQmRpFx95c13g7bqwUeRYNpxXKG6qZ2qcm8",
  "key27": "2MuEEchMhZc8KmTJPruNoDCDUpdnJ6AWWH7kdHvjrq51GkBxpSpK4254Q2ezjkAGiVxcTyYgUPTMorMi78uZRuzD",
  "key28": "3PxWNqUGVeNGpoUj3Kbq2vpfnwcxkyi9jjc3oqNhvVv4Sd5226LPsdrngtRwoWmTuqmcc4bb2LCGFSFPKw4gpYsJ",
  "key29": "4viaDcCDauhSjYbkErw4aukuYtFoxvW4QXGhYe6ZuNWLr84UxaGS5NTHKq6KSfviq1kJC6wpSChswPkY15MG3bV3",
  "key30": "45wyAdMTzvkm1uEUSZVaG2wSYU2k1aQq9GLPQzduNAtzxKst9Vu75UeaVXaVoqCTJA7h88PQ2apryWzckpSwddp7",
  "key31": "3TgjzUiJyLkBJWD9dLAZnqDYW66RET49rGn9dzcpqRpUzLR13CQSmX9v3yMMLzhLYZ4MjkWBQEan8cp1g32KqTEN",
  "key32": "3vvQsWH7fHPY9BeQZwFFLwghHF4pXuAdYikVpWiYHKCuMWVKidw1L81iT3DbYHF2bM5vpZoB23f6g5au3vjGtW2k",
  "key33": "2QYct5AQFCUywt178spAhUT5iCnrpCbdLgjgdvVfEvUTvxA6qwjRLPKJ3Qr8QUNSmvecRybnKy51Q1G7nDpHaTFQ",
  "key34": "5mRjsekrWiPwwBD71oXYVyeKFwgcsVLPMSjU4S4PPYLtYVBmqwbep38PbT5oAvR9Qy5iHCBAWVhQKbwkuyNhUS3h",
  "key35": "4DYLCzqpcnwp3GwpD4s4i1VhGDVekjneL3godsfZZjaKyyfrBx2SdE9LkPUausyoQRFBwtUJtQAuaTQVWJuXoM64",
  "key36": "kg6NFMcMsw6hghTzLxh6XNcKZBz5vy8yKDU2X3nGALo7LCMnziYfxipttEo5EnyZC9bgbp8PsEZBWSXaskZicBz",
  "key37": "295kT19bkRzX3mzrBJiMQhC46DqYCphGRh8zhsY58hLJyWRRE6zC8jtnXQmQbGnk3HoJkW3JTjTYAoK1rS8TFBsa",
  "key38": "S8o6P9fkTxBCDt2F6YoqphTiWQeNWJSJARF4EkxKauH9KB54D85hVJ9tVbTMfPkTa1YHVCvWNMHUjRYze9y6ecd",
  "key39": "3Tz52AsbTnnMcK2VyvHsbzY2PZkw5ck4ndeYrQsf9e2vLG6sVeKLzBoJKpg7KdT7See4nnp2VdH72wmcXuy4D7XF",
  "key40": "5UJGfHXXo7zxeVYCQXgtJuGP8QUcp1gJ9snERfcvYGTc95EbJ8Wcu4jpzz5wqCio7YBCD43ZKwbLWTk7xcC183Yg",
  "key41": "pRW7TarcQXAY8Jp5ycHMdQLoFAT5LAHZY7M2jCexVRcbJAXgXM5ba6dNXdjMxCPay5qA18JpgW1tbQ28kV6hgdP",
  "key42": "4GXj2tCHVchJU9ENQ9UY8tkJJQw9yjzXHi6ELYqns8mQMVNzBHWRXQ4Q8Rh5SZ6HSQh8RJThJU1FZxpaqM8UwdQF",
  "key43": "K3xseKS5apC6i3eFvAT3jx1F2V8rVaU6j6WEU7wggB1h5z8JqTLvYevDCP4rniZ2wCodvkpPVx3qRAAdW7UYJ7Q",
  "key44": "enKTqNhiVF3a5xN2uJoxnDjEv79gNEQA7za6TbAPhuMYCaWJTGZXzX5aVjUhwb8tNsjByp7zZGZW2nHhBUKXdEc",
  "key45": "3QVD3aYAk6dZ6m5J6fkvzf4dN2yZP7MiRpCpJWjcjn1EiH4jahCzGhBQRcWVgKj7FjEddHZYv3ckmB4vcT4J9hTw",
  "key46": "3wM8Ah648ij379SqST2JBPzcajdn1mtU5vgFjoeWBu5idRiY399zHoqZNiWJBepQt8L4cjzVeGSShtmoBvZpyZDB",
  "key47": "2dRdBTjg2vPeVrcYc3HXn9fkeKFAeCAsYKNR7aSpUwSi1o8MNQYefKNNBAQ5zw3hdEDaSz9JCtNWPEgrivfchPs",
  "key48": "5HXxvo2B3ZGqJJVuBw4cTcW7xASEU6HCrff7MEZQsmUDuz9yFA8fWPmXz6fZGirVcMTfJSW5ZBF4kCXdVwLP4Pyi"
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
