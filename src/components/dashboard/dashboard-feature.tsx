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
    "4wcJtxuC794dW1G24B1voDJv1PGu8wNvu5PJdK5qzU5adK3sJx6MpcNtr1KJEkEj72AqwFkaYHjiCpZnXme7pBak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tDxdNQccmenpta7WQ86rpWSiTvBTLoiLB5KgKitYenwiwjygue6Naq9vq9FfuJ2iX6VqaVoWR4SUAW6xHoEMgkd",
  "key1": "4HJLuqY7EivRaXSzsEnRX2tkQiM7TcWQryqprgaNnyFdeuvYS7nBZMDLCcLpAMERaoTUPC8jnMnxM33sQoQmMM8z",
  "key2": "AyArXsF4aSPnYt6tm7aHJJH5ANzVk9PxcRboxYtGfv6D21i89AmiQ1gxVmf2YNjvzSo8xSTGTniXz9rSahhQBbu",
  "key3": "3W7dDyVWSiZp2miw9EeLsrPryddxZPGYhDwhUPFTMuf8VhZMhUc7aqRHLbT4CwHhYe5Cq8fYAR9AfqzxFhPmKBy2",
  "key4": "37qr1e9WCqWDhid8gBuRms4DebTQLAbdkj4A6npWaKnB4Y66N2jFy1eL38zsW6ox1yTxSP56c6VS9Kpm8W8kWKuo",
  "key5": "4eD7EqKCzyLZyJJ5GgXa3ESgsH6uM9MvVYs5YeYbsKbBjvAqf4WhcK6G4sacBJ3eRJM8G9GksRNMUADG83aFfTiJ",
  "key6": "31yaBr3z1FHZ47Y45qm8SEGFdU2RietLaLe9h932VMmFDEMLeDePrrCb95JSFwG3S5e4SnGkVwKEqCmZnwsb2pN9",
  "key7": "4aDKSNb4D87EoY5fh5j97gGLcRaWgcHQYbh99sF3rTpMwimwnRgeY1uWaPHSD1ooWjEZ3g6sei91iCwqCMzHoEVG",
  "key8": "3NiA78v4QQKKGB4rRGn8sK1ForUaWtvLeEeDvmf3wDm1bWP6oRU8LoEdVpQHRwpXzcFF3mmkZpzZ7xyorSGQbCeD",
  "key9": "4CLDf8oEjAU8WB4wPX8g4MSAHJY9EJ5YbHJBDqQymQysYTBvXW3GYNNWMdQQzUR3pmqT5eLvmZhTdED1xSyW6oZK",
  "key10": "ZxjvQJ6k8Z9ZgxHeeupyPNEYKZ5zGNfboYKQ7aeaCkS7BPffj5zEh9r9HnANTTxdXUsM5zKv6KnfMAX717mJaX5",
  "key11": "3gpAkUS4fX26e8Tmn4HXcf3b1PPBYWZmM6MAe8iBRac2x1ahmKkf9KSGdUdZhopEopFc2uzFWETuAndHQpqdkVv1",
  "key12": "3wnufQzQBrW4CuYeaR1NFMdqBGmz58B5SMDrm3TDh9nKPD7wXbUftF5pws8C6bJjzjgqtbvWbaqFR8fecXU7f5Bw",
  "key13": "2diyv6aDGi5AGvuUJFVVziub7sisBMeokP7rgb8yQcsVNR5RHN18KZqXu7ZpTsddkmwLWY6QVEECmaU4QJ6FoG38",
  "key14": "RaHmdkChYypa18tQ2gYMqE73A51ym38wkNuqoKSVgfbyvN4WaBQtzgTM4TkzpEKMbUVHZ3FQS32sn9CKkLFFzra",
  "key15": "5qhRsBbpwSGNzGASwFwqXy5L9ZSgMWrU7xYphtsD5gTC8gx4Pdmy2BVaAWFNNGdCXGrXGaxV7gh7ouysAPw2YjnN",
  "key16": "3qPxvWj5HEYDdsMVxzNbrctJBpS5aRrLZgTN7ScyF5L7YWENuxLGe9QALgL49qfkG6LQDnV7ttUHFFjAMV88Y3vH",
  "key17": "3TQ4yyfUZfKhADHh1EqrXaFQ5yYoYDvKTp8ac59C2mNKGaWU2CL8UihhE1tdd4DoPVxav8Due116XphZaumbygid",
  "key18": "2pj8dV7ZRLhJaidTwSrtxwx3U2KC7AQakRwrraGXqZZb2CCspfXQ1hBrCNE2ERDVs8UDEbdc5qvsmVLg99BWC9nk",
  "key19": "2YASD3WRBnqeMApUvbetxMNfQs2jPPKodjuR8YgceyJej1gdXSeJedChFQzuz4KsXQt9e7BPsNiydV2jeGnf7u7E",
  "key20": "3tXPiDPuGiGoZ9fQT5pRFatriEZCX2mUdqGSRVv5KkCKp4aq9EzKqRMg1Hv7Bqrq5HN9Y66tpSomT86oS8FdQcdb",
  "key21": "4rrL5jxoHLMjDqAJJCAjYcrRzyYTkSrfBiXssaWVb6oxdavVA9dx1i2MVJuTUubaACgpSd273UYMPUrfJdkjWhc5",
  "key22": "3SzV3CJmmSRREmo8xsAvPt6X2H8W9bky874Xj8na4G2vPKGfQJxJ5644D85azwVPZPTCBSVfcQuS1PRC7vTmGix7",
  "key23": "3CYeP9WA633mqzP9ZaahRD292EAnAgATmQqWnXghfNyv4BScjp2uEx8jp2f2mDjXs8LzESp5RPgf6pXKbpjspWig",
  "key24": "5nb4eD9qL2EqwanL6KnGZA7wVp32n35RRu72H2r3JAHJxhbGzzqCKo8kFWAPeBRvgpg7LURe6nsSG7otT2dFgqiJ",
  "key25": "5bkSQS44RRVCa4revrvm3Ka6pZhvePSdA1zaWyq6eS8iNo2bTg8sQiAPojiDNDVUwEmHEWVYe15mXBrG79UKcLHd",
  "key26": "4e4AXnZwHbpuTn9zqiN3J9xfsSwX97LYoveZqLyLSKqXxG3f114wP21bid8fqommN7RhJYZXLVykiDfADCAgwfA7",
  "key27": "db3enom7SjAUpJ21UKPAnpcjQyPGmctZTmaSgJVq8FCRSVH8Bpr7X42ytn2fK4q71fPzkLLbb6dsR4nDpeyUHX9",
  "key28": "5juf8qH8qTfqvB5vCn1Pw1FzqhngxwhF8FHbbNoibrjAug5cvn2Ksv12PRkwkJenk1MUhXdnfKvGvbuHrcFPWYi",
  "key29": "2v5HCq4cbdqSQwJLpbcC1fJJGLTkictC49Vsi7z98erPC39UKVVPF29UTqupZNQDZWrbotANv3Cs2iFUr68fDrBB",
  "key30": "4LCGxffgJp4U68CHXswaZU6LjQdVqA7bkuAMh3EawfQXZEpXhpQjUGDEH9A52TSNgFfKtZUVnn5xHHfiCXJDxuLK",
  "key31": "PeL8zXrpCKN1DGSRowQRwc67SorTcPho94rMJfFrvffkxa9Pa9Em7r4eG47SU6adUHFMXhzpJqi12DwvN7iNj21",
  "key32": "2WEQNC1qFvb9eKGhnEFbye3qwUFmiKysCi9QLW2E9UunDFXDLXFMdeXroQN4PWUMffWsfxXF3FNn3YfCfNeZQkM5",
  "key33": "5knUayh4jNRmCy7W3PnpTokfLJKL989TYdRWdEnvUfN1jJnB471P39CsUU3sPKR1v8KdwCfm9TGz1xKgAwo6tGZR",
  "key34": "3ZTYWRnFD3e9sGJtRQ8xxeu2R9vGvU7kAgp4pRQ3m15PNb7kZBuGVWH7hiAMa5bK2MhRTpjYkqm8LX3rv7osV7mv",
  "key35": "3LKbYLpQrDujpF56CKEUJTLH15sbfNjoKfyAeJDV6xTU8DMLXihyKC2Y5gep8VhsYMKDrrBLmNrYEEtcqpRUiuYt",
  "key36": "bdaHDZt3JU2JDRG9gbFdrWpE1fusRjWbJkbFugqS6BAHuZDKk2iD2fbmDtR6XmEaxN6P51jKM2guTLPArWXRX9i"
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
