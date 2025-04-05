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
    "4PAH3wiJuGhUdnNJo74Zhau71ZNY8Y5K4FmxYS2L6CEyMA3NmybjBQvJuwKxyCyXSdFfLopngdc5c7R8hW6YLYBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DcsBpunKaWywt77tYyDznhAfNRErn7BW73pef2BpKbCtJ4TmUbBdNKHeY4HztvYZxjGrMhL768FMQjPdY7uYmRZ",
  "key1": "5PLVaCpD65o4DJYrRLqPfaWiABxXR1nEVmcBGj2u87PaouURbY8RnPTY6TSJPNaKsoMiTa2XZBio19KAMKnDU4qH",
  "key2": "A2VZjgHaofyTpXYafqAg1MeZKKumkPRHwCyXVjhNLkXb5TsYoazAbBdpC3WuBbG1na3AmkoH4EAxD5orVn2xhw8",
  "key3": "4g1GJZXM7HKHUVzgw7VciKpfrY1WURA62JqXDKFvvgmpkL8mD7ohYi25MYP6YUyzkQ9P6wTS8UVdoXmpUDGdNkwQ",
  "key4": "4gm8AQeen11q9koowrawjxZhFDdYQxAewEsqAjtf4PwbEym64x51xv2Y5iAJvjqghbpSg1bk52JvMGYAW7DveH8P",
  "key5": "25XQgoZynfQJFJ4gBiVMkFTLsi17K7FVGPi9yVQuFeJrUMyNVYrCT5ifGVhWhhaYi6J2Qp7FTJqs6qtmSW1Z45Tk",
  "key6": "4Ygorhfs9NjjXBPn1DnwTE2KdbRQ98zuKHTR5cv6F4EQgSogmNHNH1BbJJE52gh7UPwPeWLoWi7FCmMZBiMwBzLt",
  "key7": "67Kk7YHfTN8TssBc96pdfiKUo9vcTCTgzHmW8DkE8p5AsfW9vp4DwdeKt76BYTj7xA1tXWaNVEtxNqnFKwQP6KXg",
  "key8": "45tLrLaS55DBimM6x2apvmRPVJniiTsZcQQtenn7VBAcQTr15PwqNkZY1CetUSPwu5hEexriRPwZgvmMpSbXvxYy",
  "key9": "4QS4MyMw944T347d9rC5CZyNFe4TTLhMqKNDejVDGjJorASyfQz6zCAKpZbdSBqKtrFH3149NBTjyFjx93dnMybp",
  "key10": "5jHFkDaPCNFFQrHim5CXdTTHRko7ev8pGez8CV2Si3tsRoaXdknaUzn4QZEwuFN4mWiJUCpZaQbM6HuQg3KSUZBh",
  "key11": "nmNUKk8Yn9MZNxgEJce8kBo8cri8ziVySQ2EvQYbyy42ARKrFuanudFfw2znMurmFoGKAFBD5RAqavKA56eaXzm",
  "key12": "5qLRjA6fe9jEbp8JgmzXYVPkxb5qstzxxjExcLvQMxjFARexKTmcxHDXsvuX7xeP21A1wBkZ3Rjz8UM34Bj6TZbr",
  "key13": "3xjZraV6WskzShyKhEoJgxfqmYoQmvvGYxSD5B6Ttfi1yk5zGd3JyXNCrJJicBBAFpegTLbnrDtB6cLzPZaaN7jE",
  "key14": "2uVRCt2K23QDCantBTRqY8Jd2GYeByDt4JvtSwxNUvU3SoTHHfUeEPM9vEKMEKhwhYJuECd4E3L5vhqqFhNAchnE",
  "key15": "5GmaVAX2WnC61hm4pBHdPSPN2hfU8p7c894nqmWmEkY9Gsv5tkW3bGrZdPLzAsZk6Y4dZJv8RQTKuKUMBtE68h3c",
  "key16": "2CiYWaEe4o1JYL2no1Anh7i65aeYXZRfywwqvMYQZzB2YE9yqTLmu8DabssUwWYskm93Be7XReBUzrgi4bSRdAPB",
  "key17": "5ftYnDovecK3sG2nkCcNuWYAX1YGAEJWNKRmmiTyZc4cN4pyJ6JEuWyaZPwiiHSuVNfSct2RVxr6cwDaXyVp4JHW",
  "key18": "4PRnEkAK1BWzafK1tuX15U9E3jgrLWCNjNyUQipcPcmaC4gUif8jz6vF4LFLh2BoM8bkAczQ3QYfPA9yGofDBxY",
  "key19": "5a8KtkRtyvG6t5qExE8DCTLKM2MGoS8GVsKdKsNUj7oDnTEwmf97sMrBQ8qwRywqtyjR6h1keJP5VZcthYD4ar8d",
  "key20": "28G1BQpofU8MDSn9wPWaCLTGp9GhfAgDJqDWudzHovoZQ7JAtWR3jJwMxHhoa1hEnnbHHCg8zUkK2X47cmJff2TL",
  "key21": "5s637Ja4zXNdPpmPCgkfh8NfaywnasVSrnXWg9yxKihr7HS7yxMUBCd5HtwBu8KdxL3aBxEPcPLPdFLhfGikQ3uB",
  "key22": "31TuxYhPod94sUHESYvFgmzA2rNiYECwUqYiJLcfip2jKDePwthpz9enSHzRStXKRJyj2GBytP3jeih9fUdesCAb",
  "key23": "4agU9Sfs5sAsCnvx1xb2b57ZydHcKaBgV3xqvCBqCZA5ERSNQ9hSAnwj6uE55TrJcXkmW3pxtEFsdVSFFnUKMLe5",
  "key24": "2P5uCu8iMsPZWpSneE1qJjCQLdbdjzyBU8XCHVVFRhnKwJzmCGvxUAPtjWzCG1zXnNtbCfgMBTjrM6LREwHcUJkT",
  "key25": "2gpBUKaxpJi7ue5tGwnsnwSpwHbcdvJngAG2t8HqspTUceSkbRm7DrHLNaauRJ2FkYQjaWzAoWGnZtswhLE5qRr",
  "key26": "52qSmDoott93nbmXSdg39rgDPJvaXCMM7ZapLJw4t6n6UkxdfCgKjGfzC6ABeq7YkFk1c8tRuiBU1xevn8x4SWLQ",
  "key27": "23oFUswXRf7jj2LgxoN8uYaVkGXk41T1C4TuXMDMqiE3LviQiZbJQAcwny6qwhG3rmVf4EhrwPMqJoYTZyT8DF5K",
  "key28": "3wrtzGtBarDaBPf8cCf9HwrS1qQujDW2oHpH6bcjqZVd7goUS5JnhDumdt7vLgwtUqV2WqaaAw5aBEu1oh5DJzzC",
  "key29": "QFQs6tt751oAtgQDB5emY2rSPiZBcV4Be5u1Yi8nfuzyp9HGnu8Zjv71QaiDtrbhZqgzJoMuBBPsWQFQmQe3YRe",
  "key30": "4MduFyy6BCXrALjZtGgN12WHKaEb6k9Kg3U93QVynkphwzRrs3z4niHodzDb6wUmKA8FgLEh1AjsX82nyFzZTmtL",
  "key31": "3p91tY8cVGStKKCirdnLPkpaeu2T5HXMuNWxCxwG6WjsXoyd6qJgfZAg3PYmNzCyJi91D4TbpvUktrdw6myR1761",
  "key32": "gVTvUdPv7EXVdyZbspmB7KDqBHJY39BJUirzoRvVTLN4B7JBgCEgDPJjFireQHeJXeCt2RYVb5jXBPEoHjwDUbR",
  "key33": "3a7hqr36LzkotFH6bCjLJGpTc5SG2QfjNYjcFTpdV44gYhTbxuoQSCuSK193AUkUnrx1r2u65Vftgz4s8Xwbwx8M",
  "key34": "4oN7jw6TcRAqxf5doAdkWaN9hFzXq1Lfz2uB2heduoRVuMhgwxVdm1SKeJcTrqbAGTFauuoEVs9SiHo16dD84xot",
  "key35": "wWr7fSZxwvz7wK7pMz7ZxbCte5YsNGUHbH5VXkQWV9DaSC9RZeHt6hjm5YJHRj8A95ozcAaTt64Krix234aSoPJ",
  "key36": "4yCK2bbzp1n76gnQBarUKDNfdPm4QW8hMgCGeaqJLpypBZQ79jfvsTydWAYkS3rRG1u8vBZxGNm6uWYHTfd7ozg7",
  "key37": "5rXXXSc6qJoqvaVDRWENLLgxkdELHVFrZfAAgwKkucrhiTqaNChweLGEpXcxMwfuMrsNyH3bQe7GUBsXkwyHteRE",
  "key38": "5qK6X87etDxCC3dRbNeq7zrVNRrvNTjWUHLk8wQg3ecMWEHkwtNSMJbTVyQJRJCE3eZUiGzPBqXHjZsWtJw7zR5i",
  "key39": "3rQxKNa483Hr7qmYYbgLMPPjMuXDudjtrf61uZtcFiQUZ6fbGkrqHNmphQGMEpiQ8ZEUyKbjTAomGpj9zTVfshHw",
  "key40": "4vsv5HNNXUqAqpiF4yZ5Tt8As8pVvrnT24c1cJmQVdesemWNSaXd3xe7xD5XvjZCuUfoPNCWTE8MxZrCTqivwb26",
  "key41": "8ysgfjQqBrVm6YFkfkCLjojAHksdFUEQ8qNxPSLzsvNEvC9QF8tVbhCafJsecyA2qREjmovYprrkyy1n44MUdcV",
  "key42": "4sS9NXW4MRpq4PDVvZzVr7E9k5iaoS7fFCLhaU8yenzccEGPDGgacXWcnh8fddVHd8ZYVKZ89yR5d8qVxS6xVC4L",
  "key43": "55dPmtu5J2XX1EJXuURVYXXee5iumjYpsz7NU5UiZ6RrAX1769wbcUj2n2avB4774SjjPMuvzivXmxECzRYZ8pNu",
  "key44": "66xQYCMgu9m2m26aNTpDVzV524JstP8ap7ykBL4h669xyx53sYnoxH4BvSg7Q4QghLehADsQhRoSXhwbvpEJTzct"
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
