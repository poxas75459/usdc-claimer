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
    "5Lw1ET2Rij1MbEtiFyLKA1BL29hHnR1sRR5UKxTSy5sQokd7PZuH6e1G6iL8U7Vadr89SaS6Bswpgdq6GkZ3bErR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x8g58C7DJwAt3dpRVRx67U9Q7rWxb6rkmVEWE1ZnP5MaScHawhLZfYrvdTDQKxzqufQ2DcpPY4qTUddsLcm8YUN",
  "key1": "62WqNHh6C9jUryFb6xxvCJqtdJFCRXg7XzHaWND6EjEhZ2Vzkp38kE6KHbvZWSpbHdxWNu2Ui2wnuocTpJVAuVUQ",
  "key2": "49vtwMtwzsnBbZNaspJ11UKacF6q3yif69iHh37wzrrCg8Ns5U3z9SKPCuAoP4fZU7BEFo5A5RU65APS3PzmcS9L",
  "key3": "2euWLZPRLSgTELQbjnNJKwjZZ2DwzNi4utWz6S7ZHCa3wmKmezy5q6mqE6WtGjZbmCzm5c6jT3bZMtPBM2KR7C4q",
  "key4": "4WbwWbEzxkrptSESeyemdbyqzNGbuC17ZRRpd9Fetve914Fd2LP1cB1mCh5nr5Pszp3esxqN5b5eeboFej6iGy4Z",
  "key5": "3HLFmHy3A1e4ak1TNSYa9hXmZNNtENpmCQJuCrfCGFrDPVAPufebw9veaxLLaYNRXVu5cWEqXnN6BhBpMd1H49JD",
  "key6": "5TbJxN5NfuKSfWnYP6X7RTCRinVd3HZapHscmUJVoTyfsvYBR2NjNYy73t6RitmVv7roTcGxkwLy8xjXYuDwwpjX",
  "key7": "2uKaNgUzhXZ5th2FKB3PHu2TfRrH84B1DRufSRQESiwdWLaYJY6TorPc6sasLyqv6AeiwaxPyBabrrq1FEKPQiPH",
  "key8": "3UA2Z6VbAFEUZVRceyutbuAuJfzKMbMDP7KNF3fhsd3WPe6LBsCroMywH51AqUResBQowtTXMhahbq6d7mEX5dg6",
  "key9": "52P8dXtFYER85Vp8QdnMLpi8xmusmGCZNJUhi3CckwShFoiuUrKKXaTk2KXztP7cxtyifQ2dbtWTjDbsNzgJ455R",
  "key10": "28bEtxdzXWgweqYJnXGeUw7fAxnFktMtnhg7A5xMmhSuHZAHbnx2xAW2mzBk7BwEfhUxy2A1vTqXWmXaRxp4cAy9",
  "key11": "49pXYKztduhCE9FUzjweUoJoV6CBtQUGFNczmuEw8n6bsTP5SgzH97NwFnwcAtr1bZHqQBM6zPgePRnprW5VN3Zm",
  "key12": "44z1Y9Uq3x3FjY9AD31pS5JqACqeZCSPhwjVSBCLmLcLnDnP8LgBmkso6itNTfNC8dRq4CA1A3PZFxYGUnFxucKv",
  "key13": "Z36qbv2aa5tGwaKjv19hQApcpJX6jjWzFeJUhxUvdmogtR9Dk5NHa3x3TgQC92NdZCgzafnmfXSLdfTf6aWNFZP",
  "key14": "4yFJCDgdyiVZtS4kNKo51uAfbbc2qyX8zMXbxSwbAoFEJADU1djn9msGLDWgooaGAe3CRaZqmp6ZaLDXmZtMURuc",
  "key15": "gMAT6wAX9aCuNCLZvebrEUVjQ38a2zpWy55sSPs1kU6ViiDJZTK9MC4YnYMPNEzb5GHikE9gSt2pQpAgKDXiiSa",
  "key16": "4mGST1Afzw4v16bjfrXLxvsimVUvzFAErgRC4UR2Lvxr7p68xRMnon8BvcEvH7GhpvJryYKRSk5zWvb5uUhaXyFD",
  "key17": "4veT4DYKLE3Gb17fzPKtqejKDFxzam4JvEBLpPX2RxwcJwWKKQhEKiR2xLBL2NpMY8SRtHgqad2YEZpTDntjvC8e",
  "key18": "2tB9zbiWp3rzQz16Tvy1b2Nfk5vSBVSnXmPQbhgPG5u2vJvetDBviofDSFiTd4S9LQct1fvWPNPpUFbzRFZ8iH4W",
  "key19": "RpSbYh6eG5VefdDq4RLaiGxZQ3AgzjKmTxn5zoTow4frgoVevqQ7RuQ5Gw3NigYf6Znx6pMhMAvRGvHLH7cVd7S",
  "key20": "5gvF9a2BWCipiBphV9z7hfBzXpBhAFNBtCGLHUbp6nQDS6QNm7SF8iQCwjp5QbPWKAeqYwxfjYWjqQM5UbZ1RABT",
  "key21": "24b9y5SfANCKNqeACxeXUNBrfunrKArzsu8tWympN9nNPGubGqpGcpXvnSFo2b5vgLPGUb6t4uoqFdoieTGxnwZ5",
  "key22": "3PhejJiLCWoypYzJBY4AgarKTTP4qSivvVpM4sQEezZYCHUY2nXaJ2P6sxjoijNbsR8GDt4bncKnQD9W2y3Fpk3g",
  "key23": "4KUpKGjbGACaw4E9BRWoXNAsgSGuB6rcTynzewp5vq55KLT8iR1U8bpQrxzchsajZL4iE9zUhgJKKXgTPzjTBbo",
  "key24": "365UGz4nTxDCvirSVyfuJmwyDUgyZWnMzou7c4Tr53VYxRqK5tp33DoiqBuaFnaBVfDaPWJDdb3dWefSS8W76kYH",
  "key25": "465HVXcnx6YsY6sCJGWuVdH9eyEWVea5qj7Hh7iznc64MwK7Gh8fx9yF2Zyeq2YWnrQKJoWwyenwn8TRkmkVp2CR",
  "key26": "YUetWWHS8FEJhnc21UeYNcNDVnmaWvTVGzenhs2PCybxx9PwqmsWDaLhLFRNNPb8P77Dd2KkUGYqeynJEsS4wZ2",
  "key27": "5UQBTG9VyUsxaqC3ABMemttJL5qtJiRCC2jeUN1qWuNbWDvuk53uRj7P883rXuVAs29aHpXPKmbrqv4cEoP7Xwa3",
  "key28": "3dAzaLxX9U2GyvY9BcG1xJa6jrBsbH2VFBHSM7PABWZLTxF7jv5KRzvfNaKtGKWmQBbGCgbs4fvaYZUirY1fNbm7",
  "key29": "3ZZqx1RAjcFGWNMvdwQKTWnZQZ5pFzGAucJb3grHZgthwhCBJQynVEdrhAR7Rdx2YGaDL9Td4D8Z2x4HVkxeaCpU",
  "key30": "4ZfRN4rtwrrzTSef8qgkJmgZQ3d52srGAGMW3ygfYYmqcm3denffQveaKGZSBQrqSRsQfr1uexjBcTqZLq7ZWR5R",
  "key31": "1GNEeedke8RwMMPuLa7DzDN7kiT5Cwq8CH8afstTrdLsBmHcU6n46PXoL1Zu1PyXFWSzSumd21B8GfsuMkGX8HT",
  "key32": "5a3Wc1niCSB7QeEz2W4FmNxw5pj3cdFbFSwsRaVmCeB5CEaiHCCUURvNMxWP2DAmuYHWjXH2Q8qNYGU6qpqBHMKR",
  "key33": "By8pHEYZHNG3MP19YTAi5xTGvLXGMP5CuAeWKtXeTofug6arazdxiKD1NseoqCEsUL2rAAb8rGvazSKdFuSdYNa",
  "key34": "2jTAhtcCpBuCCoPg4tDurGckdcgtD59bcnT3qocNwRFJCfv7Y7t3nXUbeSfgi2qR28VYhbzpL6x4bcYwXL7yzMJN",
  "key35": "3MNXBy2bywpfci2sn1GQV6GVapTgvKvUuW8ukghFd6nsumsuoUiMyw9pBmrd5Vn9jMe2EAs45u6YWoaZF91wbo4K",
  "key36": "3GRPMQ5QVDgtuZLJcHkvkpt9sgG5HUwPFcJE27btBLGTmrkoqfeuiMDU4mMr4GjNJSieC1aZByReeXPBjNU6FsXu",
  "key37": "5NZSdGjzDm6V338unwFSwhoaPvJ8at8EuFNt7CRQ46emDMhfq2TzFzBwYqYdnQ36kWXo8UHXMrqcrQjzt9DQHpo1",
  "key38": "4Fm3hKjf6m31v81PqfKzsnxy6nbhuMrJic7Wk2yCaxRdJYFW1GyxFwpRMFdkgtL9W3T4XcNnUTzzoeuSeM5md8Cj",
  "key39": "5Tdrzq3efyXpnsw3XddXvMAZprcfnvb17BvDeCYKsFEwqXHkTFxn9ujNXGar1QTS6LNWSNrLkB7HGFvQUpV7LR3f",
  "key40": "2DeSm1w1QBC4EnGy2mgqdojvhR2WuUZEL552P3cndMpa3tRuJb6wvD8VoEhhcSRaE4TwTyV3G6sviLo7UjpR1HV2",
  "key41": "5svfu43nhsukM4Wpap7GANADjzmRjTzecSEGahehTCqyNtaAprvqoY4ND1HY9LWdHBoZHrCKafLcnZTsCVCxBsQ2",
  "key42": "8iC2yDd4m6PNcKwEN79kS8ApnMV7JAxHzMND56K3jBLQx1LTAKd5N5Edp54crw1iUpUu98SDuNqrV3ntj18qQmW",
  "key43": "2YbQC9f2nXTL4C2CTkBwnhfKGGf6A3EWUHE8b3sDdRjVX8dLLhv29fWUHTwf7qpf88yjsoS43J4vLHNXrFddPc3s",
  "key44": "2pRZTmsBPm1BLjJ91nYpLmBcqjz6HW4gJvwfBRxJ8yVzhAofhBYH8yUp4xDvxHHuLhLJRmvwu8evRXonPrQL7iWC",
  "key45": "1zmvBDyWxbeTgaRf5kG8WgwjzpzmyvMhwTxHH6CKVd5yJVCHTTTRPnkyZT47a4uv2YVRArBcvknKpLE6FVeqrF4",
  "key46": "39ztTn51tYLfS1R9jX7oFbGwdN1P2MZDuiJxN7UFgYK4KGaPZrePmZKfeqC5VnGcj6WUCnfm47qbKdF1CKHWZjkC"
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
