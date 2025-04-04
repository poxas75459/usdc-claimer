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
    "4i8VHLKyPYjWzZgdAws6JzuFqnipjwgtf9Rxdvwm22CWsC9mBoeELHi6GVJZqnxMNHvC7C3E9xKmfwUfwAjfjMX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nyQphFFyV54p3rGuBHR5gHUNgjNP7RTCz49ZNqLH51gCznocj1BYG1crcXsKY9MYgRgZNR5wfw3BKiibHDQx64z",
  "key1": "3YfvnYzsffoV7M2M5y18rcNgYuqhCXsNCG5Yj4Dhuw9Gpjoy7axo1oYvXnPHCtM39LY32mNCouRfdXnmPxn3ktfi",
  "key2": "5FoWLv2tZ3SvRhtXgUKUk6Vuobp6JjHc2ZvAgZpmnotSAmEXAT7mug69c6qznAb4eSJD38WuhsodnKffQadbKgMZ",
  "key3": "3RA3r3XWRKCeMDyaVcRjqdkUkm4pu9dj3tB7VGd3noxEqmdhoHXY3Y2NcndLrcQceLNt2Q4pt398EjD2nM2oVKTU",
  "key4": "4b4G36dJxHszLSWqHtBRt1jpZJ3n6Wnuk41BucztGmqgiQwNtE9UwVJD5ZmFE1vy5nwufAGZuDEMwaKQCykZ8TGq",
  "key5": "24PNfY8Fe8dmETHxYyRJcHcFGM2QzEMjeHXnDKpST2qPSipD8KBPmz8Vt63ddojZDFqprxUi84HXTKr523xGeVKS",
  "key6": "2wsfWEDPuko25yUUuGb5GuTK68wT23RcotMFnnZ5mm2Z5mQ4CxENfs8Xzb9ZFySvFxKjoYoP1oX5tPmcvCxF3RMr",
  "key7": "4FeySnwa7cXBWG1XBUqTLC3frb6k5aJG1GJScxYQd3fcCwaCozT8AdaAeDSmFuBdhAUNCinDxcFfwqJWVQB1esHH",
  "key8": "3rJ6Wpn7cdeiWS7XGA3d3sbStCE8N6LSZRvcWfQzDH4zk7LtwSyxTeiz2KiCGtrrXq3xTxyJ2SCQcnT56u6fmc3F",
  "key9": "62iuf2HfeZkwjgVCDPzatgm7jJywBiSBjBkrj6LZV2GTihKjzTYPjU522JrwEJnxNoj7SsgndiMsCJv6eKQGyPhi",
  "key10": "223h4kxvFsStXrVKrJDnbLBfvgbvAp75aX1WpGKhUG3pfvfzd7sZ7FBnsncFSvug6rfxyAxh34BbMATySghzuA5n",
  "key11": "BD8bmTkqQDEkPHFmqRmtz1wBrY8xMBzgeb5xZhNCCsGjhjCZgu89SaDd8f35AMox46Fi6kjK5aKpYsPEqDT11yS",
  "key12": "3Co3q29WcosWERY7FtLDsBVfbS4QcWvXf4WwREyqLGzcbsncJz2G6u9fANkSqtSBzWo1W3mPMzCr8uLf4kK4HFQb",
  "key13": "3EdFa3fupN4dhqiF4h1hV7s1VQfAZHQSZGxcpGPKDMHY6e8TgbFyotjQEGrLo7qoN9Frpgqmwv5hfeMeA2QVk8g3",
  "key14": "5JzroeaPEfEoVho4Eua9Hggr3p4MJ7iueHizpRUMVHvm9MohybamzhLNDyUrfWuV8aibEffV8XBuEdUAJXboG6se",
  "key15": "2GZpBq63F72rtdgLnwapMYPEyBjwoFv8pApvpxst1LTNkEZLVN9FtEkBaH6TDYZyuWZHcnThRxEMUMEnyiVMrwSp",
  "key16": "4785uZZ8LPgetdSqo3Cxyu99ZK83ShaSSgkbJhtncxJnFv2yUGbrFSD4sXYXuinihYTtUu8vVPK3yieizRkafGk8",
  "key17": "5P1eSWDS2pctNu86A3ocNe7DzHiCjmCTRWkMN6rTV9TSyVv7nAr6rdjbpy3J9hUTRW1qyTasLcKKeGbuydu6D5tp",
  "key18": "3Ej6tQAA5muNMMSygs1sttWuQd97VD31qjxHu5eMoQEhAicGyLj2hS2CheskKcYTa9crauXvxe8AuupQXvALx4jD",
  "key19": "3MgNGQKvr61mJcVBM8NeY3eFoTKAoiXmLcUxsK397HprVeokSycicfng4KxGSaVUuvRB8fMHiDQAheN39LiWUNRn",
  "key20": "36eCnxbcQVByuH8bhqxCETT8zod6xsxkBi6fqkZ3ykAwoXdAc9F7JHgp2g578nwvY3y5ziSuyNeTTzTGeLYye6t9",
  "key21": "5fdDgiNmpku34o4sRG9ePFCRoVR8HdfoHzfFiQJZsU5dXva26FRxBqFe9i1MB5tLHuQ3C8F9g5UqJLYARN9Bqd8r",
  "key22": "5ATJThLgFwcT2XwmGf7CLeMxEbiHJzAjw4mbtVCJvWqn4EmKS4PjGZMoTtY6PcKrdsSdagpaX2mRmXracZ2Guwe1",
  "key23": "4Au9gRhUshAQxEfg6Tv2Vn4YfNZh58kQCYmBLUDpk85tFoyVywLoT26MtAAi3L949ddqDEph98xwMJ7PJQqndCzL",
  "key24": "3TGy5NcqP2gS4KJh6yhzJTkRhT62qd33ZFhj471fQS2QRAywGQDLCSCaY6rzTBzikLwYWgbBNxRm7E1ei4HiYsvs",
  "key25": "4SYNEp2TJVxGCrXUJZ1U3CRJkeVqieuNdWxTqJBRr6PorAP38tbycrGp7U2bDgw7VsH3gjH6a4Mr4GeERJ68mETp",
  "key26": "65LjnZQ7j9BfqMawkJTBFT89f5fHYB6pKNk3xUwXPwCMS353MFcRah8MKz4wkQxur3J43GCuCgfxEnTdFeM1xYwK",
  "key27": "Lgj5XBbwf71X8StGaa3pbHZphZ453cvFYSrAhGorTUpxFe5EwLK9tYDhRc26us4gVS5wBjP6rovaTed7kQ6rJdN",
  "key28": "E6FoFSAkVp5jjvXKERxfpbVeLTuDuMwBTPTKnhZ8Y2bjFykRcrfWTmum8NqMzMT6gjVrE9Y58gjv4ggo3KoKCdy",
  "key29": "4CotHzGZifr7mqrRqSVUNFf6PvJUdygKu4FZkCYKsPTb3GqnKCpLZAdWUSgJwQHyXETSjqJnmyK6Vyqa2nKbmqFp",
  "key30": "FWf3FGFmfUPGdDKm6vXPMFbSqBTXuPSNJ313HAR1PFHdM8ajZFQAspMUz6yw51KbxmXBV18PbRbBa1MeW4evKZH",
  "key31": "3ECSA52EkQsQhUYFnkFyxfQj8Jx2nBwwrCGg4yAQ1o455FgxKjCtkxtnUrQ9C7RjriM76uDdFR8mJvNZgXxDfG3e",
  "key32": "2NaVtFEVBjR333QD6Fopqh8tD2rTnuy6x9a94mkZq4eFEjRVvLDGXGjS6VeuuAm1zuakHk3ry2S5CrdcdvkKvDan",
  "key33": "3cEfAEYz4vf87j1St6bCbp6twV1AF2KcX42C8brX8YY4d1yxRCELhG5Qb7zKEpxA2ngUF77Uv9pdr1R7E6X6QbwW",
  "key34": "64JFc15umkiPasH4opbzrx6xGFJP4BY9A1oEQFB2oNwjqUukwoVDWaPP8Cw66V2VXp4tSwnGqN7gi24V4MWC5XVk",
  "key35": "53NnVWDmi3P6rkQA2AithRcaSndr2pmRyjJ4LjS7cnWBDDgLDYeDkZGo795cw6NNjXqW5Bp2DcAfowa7P3U8xExd",
  "key36": "23akLQgLJGoEGj6a8q91X5eSKGJ3mC2RYSxWRX2YZS7cQnQHANgj6bbu4AqwSWH4WazRoh88NAQ5aRXLFDzDRwQ2",
  "key37": "25UE9wWccuNoeNbJSVUC78FkyuN2cRW6paoPkBUf3cKBsZMNts2EiKVh4XQfx96daU5omRKx4i2PHcEdWfcChbs7",
  "key38": "4iPWMcLgoEpojkNzouZLhFK4sFm4BZgwVbgBQvCDUCTqw2fxFnrCDnpXw3T6KwuYUva9jvGdUXrBQxXTHyUYJ2ad",
  "key39": "5oGDkMaVH4jyspiFf2uz7WhdsesVQd1u5WF4enPZLJ2aiCNbCvTb2oz9aj7bYmcVMGaFzSE51VkyfHwtjU1EgTgp",
  "key40": "3RD92pKS4VqnCbhwZkz4mtqAbCfyEr2HyJyruVEKPDSUo2qNqMYmwkfqTee2qwSEmXqAo5wDTgL9QCFq86RJRnfJ",
  "key41": "5zWQ5BJ5YKQS6yXxtDoZ1skMaW7nriSetpPMfRCfyuyTQDFJ1XeLVo3xMHPWxy5iEMoruRL2gnseTNNwCicoPsdB",
  "key42": "4n3cpwDvVhEbPmr9KExhqP8TeytFX6PnkY6iZ7dPLXbepv5pC8uW3CQ3yyrmvXsPoQoLv3nrdvZ8bMYpTuJtmnRi",
  "key43": "5PP92vDhAUqfmkCDjUVsFaDGHrVzVznttX9jrbDz3NvKv7QxHPDRnssWTCq8bNQ1Qr51LHgTpNXEkCudQEGY5Cgj",
  "key44": "3ykbwkA7t6C6XVsoftUxLuTmQxXNs64BsG2ZsZ7byyiFk2MV15JU75XDbgrPnWMtf8zXFpGRE7DFNoiP83yUodhU",
  "key45": "HogD33peEBHz8MeW8qDsYQFFpXCHP5tLiHTo6VLttsFwMmYYqYzx8vh5qLampaRY9rMmBKQde7WAjK6isWFe4p5",
  "key46": "31dAKKibiDfuG8VTVXhLsVL6zM4XS8awLPbj6AvuSGE8nT2rDJu7PaB1pCdV8zA5XhXcuRyNW2b27UbL12iZPHVV",
  "key47": "2s1JZQz9U8FmzqQdU6KJ1uKzRsWg55SaS6wq8nhk3p3snXGvgDj5TKSgo22bA4yZjn8vPQKmgtadayb8G1XSC7ck",
  "key48": "ZN2SgkcqSd1nYZ2vdKEU2w8ezwd51AijuyHSZiQSfa96ce9VAdVMmbBey82YtErrNQ8nyqugZ86vS8n6rsTXAzK",
  "key49": "7SCaxzgSofaeZwhKZgHs3NPPKVqoLhve9D59GQX5E7XjM6sufAMNEACR6D32tADoNSQURGv5UXg3BXB7ZmJw4ux"
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
