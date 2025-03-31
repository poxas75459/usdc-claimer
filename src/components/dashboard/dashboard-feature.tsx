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
    "nCGQhB1F5P8ipjyVMPSDKRaTtPkzLqduSFJM9a7MGUEkqLFuL1kpWabda1QxcL4kEt2AQZz8ytyYttCgja2uh8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aasSHprucACJtPXxPakZr1myh7jsaza2FxJdnhcsu47abSGtiicTpDb9X6nog4R5jMd3RAKMWDN356gWWuRdppj",
  "key1": "4dKYPgWAH9RZUSuHYNtG8MCo4PK5brSgXcPmqjdURW1MucAsUM6KfZNPbbLrmhMjsrU13moXnD5f4JnDaRceczMr",
  "key2": "3oMgu6ZDXbKGAZc9kfw2dToRKenf7JKbrCi23jpbRXgdKfiToCMmiWf3b6eYc5xNY3PWhACJpmsM1hRrALEURe4e",
  "key3": "2qWqjQ2q1fVDgkN1JGpn6TNxfqpttKtQzwYA3kiG6zozDunS7A38qNuiWWRJ2QuRcpoyRkWe3PevXZS4qAj58dk8",
  "key4": "4yt6LcWuqwMzvpcECVjjeBATMKRHP5eDMC7mkMPncwUPFDEKDFzBGj7jQk8kaGRkaq8PHudSSKkdhSSmmXKaCj6o",
  "key5": "2Tz2jpDTKUynTmdwwzLaR26xe63AFZfJUn1wqJ1ReprfLfjc1CsE6BXPruhXEeLy7ES31ze76EGonnDfx8vfMgBs",
  "key6": "BfhJgnqTtEZRB6yAE6T42YYkyoW7TGeRtwtDvuc6EahWw73wfAToEdnv2thrY6jvRAKAaqsXL7vVm6roFByHWaA",
  "key7": "4rZmf9F5FgrEcewg6UwyiougVac5eEEPces2R8wSoM59kTr5pS1xqg8zbr3bNZTipEJGcz1YsethTmQ3taUyLyNU",
  "key8": "4sYD8WCwZ2Kzkxz9YgW2KyKj6TFpKVZXpwqM3KCTip6ULNmyJF6SzH9XzqRkHUuX3DVmrCtkiFKmZ8FkQHYnNoVC",
  "key9": "25qhmzXRfaJNUnHJ5fCPet65WficKiJakP3o8qZBPXz1VqmpeUd5mZmSMw5vboLr5x3MwYnQhuhihdf87XBH97CZ",
  "key10": "v1i2wX9Lwco9K1JmKcNcRnKJ1yMswSUtDRmDid3cHYsrw9xLW9t66HZZY3g3xsAKYePYnB61D13ETACbShYv3JX",
  "key11": "2wP38UJRgyb9aj9hfhCyR4TaTrSzM8YHW4PzJ7PPifT91tMFy4KwZU1NuLgtQFNQQr2QRoF8YG2rXNhHPyCKkS6T",
  "key12": "3BBZQYbCir3ogqdJZbsp7wV4JBqYytJdiU4FonjqYpV5ALXXaP1qKuxn62XDejtvQXsgwVEXULUD5yndJj3tihnG",
  "key13": "56BfNWvYs3n5nw7doDfnsVcKSBbkJP9bA8CUaEiVVYtBUFf5ocLZTEXe1kJSFc3yn8sstqvXLkZZA8x2F6jD7bqB",
  "key14": "4W4wA1agWFvszEAVg22kErhe51eVmoHKhRyCes7s6tTzhkmmt5LTFjgchxMtSZoLNpVzSBuXPzCb7AopSW4hWWJk",
  "key15": "5SMcNdx7GXTc38zRx2XLuETKT23pBJokqmcH2WEiv5rV1reeHfPmzeHtr4wr3rmRtvwjAvsCdJWQq5eoZL6ucMuS",
  "key16": "3AdpSDy1fHXNzWfnEHjdDJboR7f8TbbjFx5ke4Ki11k9WgbbEkp8XWCGjFhZYRvb8keLNAyj7gonpLVMXy2n8KtX",
  "key17": "4DJy2zWXT5zGUjQUgHps42EzmCzYwST8xCdvL9yLuuvSGrdvqcjLFSZ7xBjp76wJNFgXCvDJdkCMNbU98NNTezj9",
  "key18": "52ZVJ7uRUfh8izz5j71s4kLTCcNDxtGdDbX3swffrfSdzxSSsd7e67uxVVubWVGjKCR8y5VLfP4Da8YSSpJ1W97a",
  "key19": "5Qij1sVnfpPhJ1WwdHrD6J7MmBCr9CbAbqSyqebTuriRQ2f57Ea1hdn8VTTTYa98Xk9gP5SSNNJDtK4kjkEuayMQ",
  "key20": "4HDKcXp1D8cExJtWZMtxZ9u5wP3MEXAKSik341HsYrficgAATvoYbp2NXoxUQ1RyCyuBK3DThxUTCzrkh9BF2q2D",
  "key21": "5BChwdKULGYvD8JiH95cRj8WYbriSrA17dbgGkHGrKvj8XU8jGCxtTNXVdDB3LQ685hRaTxFN2cFCiwzAxc8XNDg",
  "key22": "tiWWkPRGR7mfgwvneZcyvV6VJVTv5Uta5ypHDP3ixUHVwT21sdrTVKzcZ1cRKo1umCKiF3fe1YNS6pUxRP2obwg",
  "key23": "8iQgeRAcdCxBKgjE75RmhjCfehz5iYb2QcF53LuJwWnNRn266Hn5q1ziME3gcam5VGy1WXTmqnsVJbdD5cmcNxH",
  "key24": "25d3B4fwX8Re6KPuMnfa4UwRkNqCu548uyXqGJrVnjWv1jqwShkbfhVVf3kh3S1KciE2ZfWCbGSspwNvhMP92VYp",
  "key25": "48C5aDCrMEkPntJ7dXHtEZFQi1yAsnzSxD3DJT1Pabsq4w2uZYUe3DRHQrefugADuYenSDUXo29nPUyrKi122ANN",
  "key26": "5sthq9ypwUbktFcu8Uh2wNk4REcGxBKiuAA7Jbjsi3QYQ1HDANLiecmqfHAK9CzVTWu1iLv37auF252E7cZxsxh2",
  "key27": "4BAt951k8qBL1p17H9UXFs9GPgvXzYLZdN241QfEGntGcm6Ve6VdABzijxnYZYceFpQMwS2nN4uRgCvGr1N67q9r",
  "key28": "4aRavpwu96hoZJLUsRcUUwkKVod5PT476H5BjfswtLNGVpFW9bWQzue47QpWTDABksonNaeENn1JY1K5L7CBe9Gi",
  "key29": "48Dh79ENifXwjyc2DrjoRiWDGH9SKSJvHYoMrUF1eJPj3zc7wYAzZDekE3Th4hamjkoWnCNSe3L567kLzMkEQbqQ",
  "key30": "5U6PkfpDTT2fC2FQcvD7HnAvEZuk9zMzUJbLDyfoHvAmDfnvh5doHGbME2apGQNLp1STm3P2TreVkS5AF54Umng6",
  "key31": "t9wyTr9RfB7CgyToSuYbc4VvtBqB7MDCC6AEdfdapi6ES9JH3kMLb1ktZUuNcuV34hfq1bBh8vewbnqfZiGsvSp",
  "key32": "4WpRfwod2fYhwUVu5wssNV91V8M1CX7mzFuWe8p1iAH3dNAF3UJHCmftFm11bV6c8g2qT7yLvzQfiDEJeyBcDiqn",
  "key33": "2FFpqwmrUhzw3wxivmuC6EXdt96Fxi7rUCVvfkaKys8zZ8WhJGk5UDKbUjv95ZdUq3DZdmuqNRFLCQi4JKjLuDZo",
  "key34": "5WG9MhZsRZ6qih6QwUv2SCoMKeuPtoLKNEwHUpiceACmxWMxzSbDqDmhzDcW4a7nZgNW351Ekiaq2BdFMHwNJdoq",
  "key35": "4ZZQH5u5JidqgGsx1u88hFoUFiQaxyfV7H9uYwaaUqJ1bg9n8TPsTGUbJDWekLWQdUJYzXDYK6gPYPXMihyLUVmW",
  "key36": "2KcZgu3BDPXBrgzyFZKxVMHuS7Xufdu5isU45tLdEK4VdXGFCKMzfpGd7p7wu9YZQYpUrpHtY35XLdYmgq3zsEg4",
  "key37": "3bNFRBCBVo8WhbbkNFTx3YTB9k8jGSgTpnvyMYB9UdTtXW2gETBn6h6q2zETgHH4n8V7jWkVF383VfuZuvXFqJQp",
  "key38": "4DrFjCPyM9FAnqK57UJanQpcqGDno2PTmur5v9Co5HcxDd3mda17bbXcHTCxqPQDaDtSLeNATioktz6U2cXircpW",
  "key39": "n9qxhCzYy4gZ1vYELbUeDXfGJsGnRBiHdtJ7uceQT9pW55v5ZxPzTDcsjr6ao55tiXoeq141BzaYa6vSaBGd53t",
  "key40": "C9tjbdkGDA4kjuKtsHPzMjKBmRJuS9n4bdCPPCVUVjQU74tddzvASbc4TsYR5RehMg4ufj4N6GJKCknXzRJ7Yq1"
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
