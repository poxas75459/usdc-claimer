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
    "2eW6w28YXYshFiw9RkcqEPH3tVWNYptD5GMJ7sQdzy3E6F6u7pgh4DAKYdJ3bqmURKWtS6qmfMYqTgukbfufokV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46B2NxXyktMjiCh8KcpGeXq3GyowVVVhWHKA6zFrNqMFcwz2AjVKaXtvs3uBhbZggaCndCNrJpEKWNN7rVJpiDLf",
  "key1": "3eKES2AqsMmPXBxbcE14onUFRNpy2VQh73EsV7hUZrZ7yPoTL3rjJ1yQMqL1Xzni1C9HRfgHNL6JFjcCBuU3Mbog",
  "key2": "BgvtPjnDWwAVWUPAhoTrUhMWhsDeXmW3QDz7WtBKVVA45uzmyc8UECPEghmzfdTMhPNWiHySvdQgMH1V2tDPmdR",
  "key3": "3onxhduMJ4w2Ctr1zfC2NRHrrSb6NMHrfH6nZq6u5T3eUP54bVNSYsKM9wNMZQPpHKgaFQkw4LmvCuLMq78Psj4C",
  "key4": "4Kyk8wKLwZmYw4vUf8FdaF8pcKWQyt3qFqL8xXoX93KRf8c3D71NfjXRZdTd7VW6MDEvQFAi8KtnPxTTnijqA2ve",
  "key5": "2DXWZK1VKU5ujGHJvfHgCWgjgvFDYDR4jwqzqDfJWEfxUaiUXxvJNg7maBfingdGEn8qnLYLJd3fdUJdwpkpjwUG",
  "key6": "4hTfupJpRdbSdCeSqM6GfPd66hj5P7GCZ8h56y4grNUKdRd95js3NCXP9UHwHAjaStdmuuKGFMvsGaVbz93fZy8q",
  "key7": "2ePzTNFcR47rCFKGasi5rx1ZdMr2J33RVdqcPQvgaZnXMArJqs4rFc9KPrNsUmXmu4i8pWAEDTRQrCWqB1wiUYLK",
  "key8": "47zUaeGFvc6RDA7khFCQuqnwS5ZyZjhif5qbfRkySUAqq5XyZVqago5ma3TqeEEY1K8ytCRXiSfAb7Jr55Esy6U1",
  "key9": "3vGAUQNeBcdAEhH45xX1JPmqjfhVdXEy7i4nfEJGULEY8MePihWD5oD2C5isqxLY3FZm62G5nYr1nocLdYJmmRnN",
  "key10": "WV7mfJLNBkL4cNAZxtsRKFok6UrBt5r4Zk8GhVen2TvSfekNKMkjs1sUfXxbs5dHUnt8EdqvJZQeEdiaH8Qn1gA",
  "key11": "46iFLNP6vCS2J8SJyYn7VttrSGcyuNi7nRxwGGGiRVzVfvCpR9enPGAmBBpxfYASgCffzspZbZan7ggGLkzujUvm",
  "key12": "4FbeQYX6Pzk8ji3LfE9y48tnrnSf2SYQnXia6NCtsRdDyHS9PB4khc3copBsX8g26hB6NNPNd18eHyp3Bfa6Mh13",
  "key13": "4jYD6rurLwkkD3fsKjm8UQGQ6cHDumRgaNqERKzQvWTeXmwXjcNWbLJk9qz42EkJ9mAtsnhZ5nxGpkpJzhBdGU8f",
  "key14": "5xLVMQHeNS89NB3TQjWyQVY8vG49LjM6mAA2rPghHVkZBZUoN2gvV5jAT31B4pR1UUBPoWvkoWgRPY7cMMwQLpJG",
  "key15": "4XXHc6HNMUTEbvGHqUAh4hTSJmMH9fKJmzjaq5hkGzGu2RmmkoxaVLgfsUoo9VWtykW2zkFYdkqjxQMnW19ebR8E",
  "key16": "5N2yPvJeUfG7P8hvNYQc388UkXXbZmzr43uuJocSEQkn6aS3edQMY8VuTPTuNBNR6rZsfgoogsJFsXJq4FqVozc2",
  "key17": "4KNW7YAGNw2hDvBGXDqR9CChGkZyn1qvgjGL7yXRVcFPxnfzYKRvM9YA2fUKfiYWdtAMyWh3kooFr3fSWcdL3AKr",
  "key18": "h83EqqSVaARzwJaBNsjczELgR8AjuMMWKE1eQVoiWbhUV5sBm1CzLcPktmr1f9Z3M7gLerzmyNPYAt7TusiQZv7",
  "key19": "3pEYt3soeka8bRHvqt7oVbjBhkiYDUYEBtTjMAnrZfvuVXXunB7Dph2NiwdZN2zn8Bdq5LSSKQ9QiqRzzpCgt8dz",
  "key20": "25qq4Rt5D36GcSKx23hp6qxXR4DLTMftxTnvqdmXCJwVfVgW5a2Aph1Yt5QM1YYxRQsUVrDKQ49MC5DZ8Hz1hik2",
  "key21": "5VaZ2vjgaN2gCZA6KuBuKiK47ifuYYfrQeVR4hhStvptmHfYf5rJ4dy8dTPniusmdgr3BGdefZEdqpT5cBYxvwoc",
  "key22": "PjC7C7eXJez8F6venheGAfW7pxbWKvLgVQUsfmxVXzCNZfBrmz2RXaq38kvkZ4Mc2XCJpJP8wzyZrp8RUnV29oV",
  "key23": "2ouMfB34GrgLXG4SJ4DZ3qLYmL6ebiJ7YncTQAA33aKXhSgW3TWb2nkhu92R4XLCLZbjZtkA4YXLC4RuwyFJyuiS",
  "key24": "2QYosQfHTxRv9TMcjCcuMuHo2n5XEfa823MAjGTgVZ7WrTyF6Bujr9DvECtS2RThDL5QRM6XyfT157UKqMkaZrux",
  "key25": "5XiErfUSwTFGZrp2ngiN7WuihEsVEZ3oMrJtRsQ5s4hX4cH6rSJV8if9YfFpuKnvhLE3iXUA6nxVJm6LPTHnUPeQ",
  "key26": "5nBVSv6eThB68LY1wywMv6qh5tk5ii9Mvrwct29tU85uZsbs3fVThcHMVzdF3JJ7pFEJys24zYeVwvJe4uma8HJG",
  "key27": "872p1z6ektKhsmEPkL55BkKkTWL4nwmCUadpZtCVrGiQTM7QDW5dTufD8DF5yJzg2ggJduxWUEr1fTHi17GxQBD",
  "key28": "g2cv6oN24pWwh2mwGCiMKeodEDX2dp5ZxeFzpCjCuACCuZPHSDVKTj19sAmup1Z3Pj8v4H6LTJzxhDHY5oWLVA8",
  "key29": "5XnuyHxNU2jZTBBYvGsUBWfrtiGRPahMNVxspWP4DuQ1PNE9p1xbGoJGvHjsf3vEiSAGFD46aX32EkRq1q3hEFXp",
  "key30": "5LcQdw3XjDYgW5f424Nr2PYwUxyDY3a4bhXbcEu4eSBT4eQAoKJHXrkfjDniEw41fmC4cbo8iUuYNWLrrgBBGLfa",
  "key31": "4wWKJETQLfZzAAD7rjfEuftDnfJM7fr7cBDaoVN8VZ5ZxrPpzuV2tdwTkbtKxKiEHSSzYjqmApBFQThnaGWCQege",
  "key32": "VsbuE1igek2o3xVTEdZ8FgeaApkn4P7rnokBC1x6HVZmjFK6FXrUpTJHddf1yxPmVJuPxL4Ekjm1ny8A8Kj8Zhe",
  "key33": "65S8MGvNJxQfiS9WgyNmqFtUiQsPgj3BLQPu7cUPpzAvn5qrcS19zK4zd1nGbiURosUKiNcRanHKH23dakK9aefH",
  "key34": "2f1T74oEpQrNH7uF3QXsuDwWA7r8jmZcgNe47FkkrFBTjVEyjTCV8iBsAmwsN4KnTSHusp2D5j9Z9Jqzj39CiC1F",
  "key35": "JktCKKJmbnMbZA6Bq6f7ZmbuF5KBzUn9mySbnD45srSXgBNfpjmLAPyNiT55oWscGsxAVFmovxeBnAUNwimm42Z",
  "key36": "6gy4oi2yyYvrwgQMvjgqMCyxwVYpYk19aRU9hifm8UaZN1xPGtbUwBSQb3UJT5JFZPnJrRDCuo42Rwtpt2nVFvV",
  "key37": "7y4Ajb5kv3F1E5atQq5wSCQP5DKrfPa7yzL5RaUfJMV9cK3ofyqbU7VNfb4vbkqxyd1fMfsdaTtSJ3pDqfNfEUf",
  "key38": "WXjLRub67JrwRs8ZXCT6SoLubdJp8nj7fzugumzqLeb2f26VcbkZT13TScWF6kgdT54VgxZckSz4HUn4R9Yyzac",
  "key39": "oqY8jUJoecTH63ti8hyrCnh5HC3hJbz8rfWup1mgadzGpnwdLvdBqiasaCfJxErfDysqcw9CnfUjUc2fUXyn3uF",
  "key40": "4dtBeKdXsF1SjhEgyk5ar9WUEtK3yDg5Z5fnCdsZmSrn5G3hPZNY2P43w3nBW7vFrQX6tmESDrHMcYvQTjxrUDAq",
  "key41": "5AvY6rGLHxNU14xNezZESJqXFpSMx64oVB8b8bYyKx5FLZZkPtKXTeZJnRpr1iC5amJoQmdCTYyWAP7AQsRYkW7R",
  "key42": "3AAJVfRMe3vrfqEewrXFy4fsSu41BoDivz3KHnHwYAaRhUYoePc2HSBqLRkHew3fstyUZARGMSGKCvnUw7pC3TWv",
  "key43": "NXqqGx8VmJkeQJeQC4AdiKU5ZywFM8oVowH2t5DVzvwuGf4s81ZUWgxjmu9PVfs27Ja8FrDs5513YKRzSGj2gfc",
  "key44": "2R35nufdLCLWKW5MjC5oCNKGNqd8vabaHnKy9NBQgkckCbDf8855CMduzhgugjJbrpzJ8WmtHQkcNqX5egPyy1Rw"
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
