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
    "4KvYEo9bAizUw5vyRbeq2dgH957fexPM1BUo4GwxMn3M6tYT5h5H2RVKKag7EPKf1eDkWfmYB3ayLfsCb8H4ct1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47PiJfwSMX9RudXfmEkaHpMCEarM2pyY3kSw7HjQxrqSsK1fBpx8JZhPagYH4LBTuQejwHQLWBYzRnBy4fR7q6QY",
  "key1": "NJgkBMzBxSpPqsa4ExbcnasGguHLryCzACAtJysyfPzpppGgpsHRyt8SNoY7NghUrELFCrjmRJGrk9Z377BeLUZ",
  "key2": "3rZKLXtUNLrFXeZ5m1VX8cAtNZxcSfDjGzd6FCEMiyodf1j1yhh3QbXAMqBC9cgS3EcH3bjFUUqR27iocury3ezF",
  "key3": "CcxBbM1vQCMJMr6LN39joLVA9DmLUPd5Y8Aja8UUS9qtgo8EnBRyH2vLsqWeUDhKLVCEEegPXuxP3QPrrKToRAR",
  "key4": "2DJVGTyuxMgJJWV3r9AXgdRfThtqZYXLXfVSvYJ5ymUo9ANUt3y5L7R4vyt3RLiiLReFrBhw6CdXZuNQH9vqGgHu",
  "key5": "3E4zW74qN6G2EuueuCnFLxEntzo9xJaKhiBcMELZYDMWw25oeSRDhAUSCpnSFV8MWJzypBx2yhccYhYW6wHcD2D1",
  "key6": "4hXbEPDMSNfCiKCbPi5uHkqGYApWshRyxLgK2iBcfch3wntUx5PBTyhtsj6NKbuu4bJ5MN5P44b3EzMSfEVqtxpq",
  "key7": "5nE2YRwvytGWnXuiyY2BRCbpxyUpABPLjFLa1sg2iSSkd6JwC8VTRZjcwbpku6whjoXYbZ7AULgieB6ARayhDq8Q",
  "key8": "5wJwhLPffV3ku1S9X5YhAMiJfw5dtvEHyHU3Z4JU9SB2X8AZ48hAmgtnjbAu9dqH6hrg9xjh5EGDJoQL7x2mjkUN",
  "key9": "2btBDwECTeXzmvcsXVFj4wvApwNqU9w872PdZPjxbvpih7DaojGFzDGHvDG3uEpYxGUR7RYEbRFQCTHZaXcPpQ6x",
  "key10": "4c3YYDnqxtGcyzTvPT5HmmHm5xbkg1H1pMGPQUMKSi9fkhgr3xv8yERGAjLP95xQVKCYKso2cutnyWLMey6TxRTs",
  "key11": "2F8nHRi5GXBvv2MFoQY4VokT7iQbyz13M5KnGkupRtdzWiq46nCqAxi9soabu6k1ghEzjpMsVhNuEu7Q6zf6BGgr",
  "key12": "hdDHpEips6UojE6ZpVh9ANhc6rtqBzYGtLJB1aXPa16LDybPLfZCjB3dAAKKik7w9FPQzYS5LCESRBVpMpEAJ9c",
  "key13": "44auh73BsR9AESVnBRUwRDtHwZFo5FePVAs39YK9c5uxN3f6T6dgJ6AAfWVaKnSQ8oaaDmmuy1TSQMGJutJkjG1i",
  "key14": "473x8M4pVTwjigqDPK5ydPrTHvouwtSK8k8iUzV8Z2GxRwN7y7PKh1krJzRtxcENg1QURvNakeH4HMiUB3RGj4s7",
  "key15": "2LctQXb5eFmaktJqQNL3cg4PKaAsqR5x1hPoaLTDqJmK4tCHJqA9WfvKHGyECJ4MHYGMo8bifonqTHqD9DtzyHen",
  "key16": "sD79JV3mLqK7ZZwhrSLaWdvFdTQHLi7EagTUdgspMy6J87RVUqMFCj2jQ4HoFqSLLrR984p8bECkXXMzea5Yz8c",
  "key17": "23Nv5G9EqfK1krkDYdF5NKcShGbKHVAmjp2LLUZbqMN3CLgd16DFtUhLCYabLha7e8wbesDAXvxGnnyK16HqLmUP",
  "key18": "5x84oNGaUJyxnpdeQQwWgoDL95i5cUt3SM3zXf9BXKhMVzcG4888P7cEYWYG7cFz186hMBUo5LawvZvyyvdWozPP",
  "key19": "2R69UCFQAWU5UPQwFcjob7mQTJd4ZjSUkXUAQX6ojujZ4ubDadrW4PwENHYruLWTybVQVNe5J7F7oia9zq4NqDtW",
  "key20": "3psgw7jWQRFrZLu8N7DTyjxL7srBbKtY74fwZhjarcgJHoRkCRCiQyQKYMFBfXErZp7eHne6hmQaBh9YsJE8jf21",
  "key21": "3Kos4sJUHdsBNpyo5DnqBR8yGj32Ru8aVkcb8fjqLug9uox6QcCTqnseMZWeoCeKQRrNUYbkDTT4HvpqQkZeZaTp",
  "key22": "5r1miMSjyXvEPwuyCmEzf3DWCDWgv19zYMsTQNxd1oPanxndaYxmZpGxgBeCoHru8HHL8civhZkrCdUHayRRMpbo",
  "key23": "4jPKw8GKPwm7kcvdh58VHYdZ1C57QS2VuarcTaXPLVANt7rVRDQsDbEsdvcuLHSciyDhuMfcC8F9HTaABpEwh6pz",
  "key24": "vfCfPmZSzjeuHZdj3KAEw8kvJG3Ajs4WKXv5DtMb9RW4hiKppjJrmnfYkQReoF1rWeSpcaADDNZ8kV5b7xSrXR2",
  "key25": "3RzP9bZT6qeSDwHX3BhimxfgVkauHhvtyDjr5u4FCaTxqnSEySnUWjmBqiGrmwkDNksVDHwzLT5ZBZuwLkA6nVfg",
  "key26": "4EBDuTzGeKpdkGRHPE9oyRTtFzosrRBbw2XRs8k7vBU84TJPzy5hd85NUEgdMocgvt1VKoiAZa1Nmg7mqz58hVBm",
  "key27": "5nLrhgfycs3iKxRxooTibYhoWNp6RjtSHhvyS7bodoM2Bd1KScJ83NzninWb1QLqHd9cGdk61D6ezg6Ax3QJAnyj",
  "key28": "2a5QjJAMAFAyBo3C4FiZUEtu2mH5UJZ736AhKiGTYSFc8o6ynB1Pzc1QfvrNDoeFhyazFw86AYWY3H3ey7Cwsk6H",
  "key29": "54fnU48PtjxHQkx8mxK6GEkd5iaKqFuKt9KZD7gJhwwyQ1VETYCUGmKwVw2MUrg5pBjGisw9iXfDVkzW5BpGByRe",
  "key30": "5oHdUoGsKAtHwdejiNxkGbWft7pEL8qoQj7a7uoom3hQjKd1FpqZTAAwZfsYfwjdAv8X6cZpo8VXgeTMrFATs1AJ",
  "key31": "2nL27isHcB7X6d1WFdYxeyho7tnpB6GeeNreVj8tFjAE14DD4oPWtsvemuzHRjoVeeF3HH1mkorTCGmGP2w6P8Sq",
  "key32": "5B17pWEpBPaRafjqTVQhB6dLo3i1xax888FtUeFciwddFCjQhB9ks51hZpDWeDEVCZp6nJrLHLsWBJHa7W9bZhd6",
  "key33": "3DZzh39PnRFBSoAqBsCSCRvoUkGC5UyvZGSBQs8Haygygy17uwpEwhfzDPMq5ojrFpQz9BTwC588WWUPvATxUuLC",
  "key34": "5ifLNnd4p2j8Fg6ie1JVPiC8qrgSmLU6VYT928fgfu7ArdEWqW5L7rRgfgeQKkXF9Hk65M2Rf23ARjVAhtkjv7sg",
  "key35": "3dMfsaMYyQjvaQiZ7EG93JE8yYyvC7YCxh3jDosNjrrhHTKN79o74FcW9aDVwf7uMz4ku6mwhM1Ccig7E87xyQ7R",
  "key36": "21LctJ1LSFiy49g1D39R5BBcRyAsrccfP5KRUssKB2E7Ze1dHyebvuGVbZGDANJgY5pb1HFWmTRuMGQfN8tDbVn6",
  "key37": "5cVc4P7Fje58SA7oQfF12h5WjSdSkZKGTKDb2MrXj5fd6ULwCXcVjCasWLTM9tLgdFFzDVRYeoKZgRUb8suXu8bY",
  "key38": "5spdqJATsPpkEnXax2T4LqmMTiMo8qeF7oBFcTscHbT82YUUfcCLjX8P7M7kraKVG31V6xBHgpq2F8qL5aENS7dZ",
  "key39": "3k832QJUHChxNvLHPwFQCrD46xowAeJSAL6idv75GbXKGLYMPS1xnLUgn9QaPrhkVXbuw23BVyVtZzNudX9XwpZH",
  "key40": "4n9UBsuBoBHrYjnuEqWrNbEyowGHc6SJ9U49BukA1hZoU7sw7qHQqLkeSDwX69V4jpiJPMrBVeSQcePt5uFmRCeb",
  "key41": "4QmMaHXh8x86Y13CwQyR777YMLUNht1zA5vPnLxg2nfZxxXZZcjQL3Tbn1gy1J4HRtNC5UMTpxdbsq1YGfzX4Apw",
  "key42": "37YjkdC2hXAF7qq4GVao3VtktRv4SPzGSw4rxmb7J7MovjTd9KXe45aRccsRRTEZB9NpPUfjcRGKTutCM36xAK3n",
  "key43": "2DmyBgnXcVCpDgmG9PYLDc9c6C2M934euKdD8vuHPJAkeZfUDaT48dk7zTMyXF8PBPTyQcvzdGZRGq33S97yyCVS",
  "key44": "5GbCPzCMUGonC551mXV3c6VnDVnXo2Qnd3q2GxiU7Qi5e6rccbap7TVAmXJWrsdWUEpCFhJ2Cbycj2jyCp1EscYP",
  "key45": "4T5qoNHtooqeCkxbhAvfB6KA5e1zZQGxbToCpd3yZaeBmjw9ybraXHc9GU8S88cqXGuVEvuZNFJB3UmprWELSKVH"
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
