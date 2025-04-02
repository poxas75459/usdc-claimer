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
    "W3zrERmmSzN5bNPNn6ZF7zh3VRMC5VQNvGs8EvZBMujF3Qp3P6Di22hYTt7dp1GJHVTJ7uEvQbcXsetyVG44mn9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jSYXwhdffooUcf6x4daBhv6yo5AKpqeSLGz6UYYzhtqHKVi5t4mM5HQR9m7n9vZyzPjJ2SUspyMqzKarRSfeTkc",
  "key1": "254Xmf6MYMkqDrvDTXxay2CCgThhjHgiSoUwergQVBPsu8dnjT8NwV8YkbCYT6NuRvEV1D9mg2WoJr24DHs1nhxX",
  "key2": "3F7NmbfuQcAX3E9zYttLspRQfJFjE4vftfEHPiUrnADrLoMkfnAkAwHjZEkNtk1qAYxSLRrETRouWkT3tAHdzUjg",
  "key3": "4XJJ9Nq59XcQUXxtmhzKTVHwAoh4vsLbKxKv1JNKS33ojwXumBhyyVyz2wEncEGhd6UfJcNwftSaiqQrScdpfx4c",
  "key4": "2PsfeX9kdNqVm3w7fC4u6UUUdjCDfrgX5uytmQhbxrz1RoHHfdonKbiMm5h7vy3RsLPbxQY7jrhgAMDJfPesxUgu",
  "key5": "2497PL5JZNK8eqtsqsCPp5UU4ki6jNejD3cMsV36rh9zMei5sfRR4V5xtva8f3q5q52E2CVmUfcj5AyKrsCWtAiv",
  "key6": "2qnSRbQuC1aEKb2GagPfRYhdcQGYYmbvVNgR1DxRrTqFSToUPFabHkrvAmaL9CNLAkwyazQ5P3eaZyvvHVJg8v9S",
  "key7": "PYVWCEodUeuPWSp4YkXDomDnp9TygHxABo1hjoZ9jL9HCTu4LfAJFsGW4To6SEEXYRdQg3xb3Lb6cLfRC7psPEU",
  "key8": "4CsjKQcCotJN13fyLdHQAiHe1EmVEya68HQDAU7Wju9F49hmEL6M53NSipE7oEDx46kWFBWdQx9B78bpXD29pWsr",
  "key9": "3FxJwGLSxTGJJ9Nf1AQ4neAUxaXA2Le78NYq1gqMzuU33mfZE6y38WzY5UK9kTdYRftTTCGnhyBHgi2L5Nnx87EK",
  "key10": "3qc55iDfeh7WygmVevBrhJFSD5HZaik9HWtWiqD8C53mxa1N4Zvx5MwGuKhjbbyJ8rPWcBueKXvkKrtVkCpLa3wC",
  "key11": "BNr6VLSuFabYwQSGrorZ52mbBAXiMcApajhCcn4aj55HHFrnpAf57dGmuBkPmNpB6vfsULQEhRc6VE6gRUtfsXc",
  "key12": "2CdFbWn35P2udDFE5wScfZ35Fuxjb39mPy2YTRYatbLdo4M5X3hRPx8VLicz1TUhqRJRgAzUFognA3JFp6H7tqQh",
  "key13": "5smfKQCX84yMPYgrrxYnSx6dLhyvAkmhTCoNQ3D37MrBXUAkckZB4ZgWQz3hm62SZKf24hAQp58BV4n1cph6YUMN",
  "key14": "2NzdCmmmVGCq93kBJA1GybbKhmZ3KYtPZCYKw8h6MGB5CgMnBzYL8zDH1hSaE5yaBeod4PcN9siCajg3WX1KF4P2",
  "key15": "2p9AVWf9WpKnUVmeictos8CKPp5epFcgavKMw7gyXneVNcmShNqUG4EQaEEooHfPgsQr3beQNMGedfeLKoBv2Rov",
  "key16": "2utqais577z7f2PaTY8iLhfNtd4vs214JHzxUis8fZEbkvpNZbzBCVYbbkEB762RYcRcspFGUaHQHifFojTYJeeZ",
  "key17": "3Ag9qwxKJh4d9eURNyVrp4PJJf3nvkCzxziCgLa2hjyF5NUFb15dzaHEXBa5R1JXNWj1WyKxiWgh9sDvKivaQ4Jk",
  "key18": "28kCS6wRfZAyzgTmGtYHBd4psD9LP1mmKfAWFUhH2y7pcFPHXo8V1F6E2ycUG8yLctrsGMW6DgHPXjXG5uCmetRg",
  "key19": "27ayUHPFPcNaLi62v8xTC5Dm5DnndBiRDwgVBQQ9pBAfkL3k4teArNMA1jKFW8QX9q9xsvB1QKz6TovTyvQUToMB",
  "key20": "X7Z59uJb1vE3AfQe2aC4HF36BYuXi5ME94uqKrzVPg4LNxsVyQHPwpuHkEFpX7fiMhGBQ5avnqXfsCXHNHSmzx3",
  "key21": "2mP6V3MmZBDnuKNhsTVwRYNmKa6MCB6HejRNDkzLSeBssFB9deK1X5JmLqkXnqybErp18YudvTjwbEevep2ozAFP",
  "key22": "2eGHqvahkLp8Ax6Tjn7aU1vLBG7afRkp7LhKxivsZYQ2SeWAjWuubnGzmYpHgjbpJSpVFwqbBDDMjYkMxubKscVs",
  "key23": "3NJ5HJhxTnmRUFT29DiiqBrAMVRBuXpHHMn2wnnytQbb3iw4r5wPcvBnXY87xgjjpakdNSVj3PPsgD5WZhmUhfjL",
  "key24": "2yxsf2hLgA9er6mPoToLttzekYQmAuAspE7DU3pLxudqdeNDYJrwtmWPdZHnJ41tTiKy2kYvMec5sDpaCKHUdQ4f",
  "key25": "5X7sjgqpgzxF2XAWA6DsD9ZhxMzyEWmebHYYoD5SMh8LNpEUze8xmeoUseBWVNipYCWnyKXdTNEHAh7QCXstgGWF",
  "key26": "2PBBibSAv993Gn5n3ekHKt6Hqm45EAV72eHT6X1fSpuPipoCeYh5vwJc3YNfmcdDFKrRR5aBFLxj6NsJQHWayBKx",
  "key27": "24UFoTbg9hayVJCTMz2Bdd2hhHfYcLtcbDnZGaAm7mq9wkgYmJFwjftgVLht8aXQNhpxMBF7tEUmsPcD6XVrzxAF",
  "key28": "4AtKXXjfTGYNVjmjAxeEDDnHKcs8Guh176ymHSxvCTECwnbg8PvHCrpimYE8wt1GNdQKGjd6AwiJ8mnUnMDKNcBn",
  "key29": "5Z5nE1tjhYkv3U9cuEcNkcXrinv5fuhCnhJiRWbrU8owvbCb5YAKDevfZNRgszeVfzNdXNYZ6Bvq3zGSqeTMXDFE",
  "key30": "5xh8Hn1fAne6QYHekSoUC5ZzpvFhFqa5tYEr1HfzVp4w8UWLjSLAusFCsMCUNK6c7Vq5GFR4S4tnJownAdcQpbvS",
  "key31": "5HG1B1PUm4FzTCQbpkzMcbFpZo6hVfQPh13gDiHjTr5Wk1hSJAkK8JrrV6Kt21inGcijzQXxGjoCPHtKb7doSzCi",
  "key32": "nz5rT9cdeRzwpSX3shoYMVCq8sj3e9ueYQros3ASUiMisvVA6xWPGAU3HGk2EJJG8vFF8r3hbbTqZEYCs9CEYPC",
  "key33": "3CZugXHCW8kaFPC2ZYg7fj4zXVkL5W3Tr65r6DQVn1dgdaoC3zFwivBUNBDQaYvDfQTrud7U2f1iSzXZ4Czz5vK6",
  "key34": "Lwi7ek5Pe93NHrdQb3LaTE5N5ygyH12oj9B1WcAqWCAsvftXUR9obt7DtS44fAM56ZJ8g5CrUos3qrh3iqAx4hZ",
  "key35": "5UETcc5n2TVgz5vP574697ndTBtumgV2F9FL4YZ96b6FNGPA1mYv8ojiCbGENmaZiPY6Guoq6cDQfpw3KjfNsKL5",
  "key36": "2RRs8CDQfmKof2pzVAoNdb2wQ9Ztjj8w5p2a1STu6pqDMaYRxRvMGjk4xscb47G1GWWUis5pz4yGLgiPoH5syWHy",
  "key37": "3gzQqPUffvWkeGbDC2yVdKMVnUoCc4iyLBYHz1hjMnXoaoMP2f43aX5hAqBDEZWnYqDEQHKMR5QmZbZYLBTANWv"
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
