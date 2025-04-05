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
    "3RZtyGfsWdS6xgkt3r2rN6VtEKcYgYKAiurPErRQACPZmWVEGMqSVizmnwqyucyM53fe9cQ3fkbqYmscisScvcmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kaRFTbr49iTC9tnTqAuP63DKpSA9qzCMJm9xGgfhMgEEG8ZWUc7o4ByWWoNPA9Rrt41uH6eyUBDPJgX5akC6QQC",
  "key1": "3rF1NcvPe1PUQqY51M9dVm12jTG6ceaSTDSPdGmWUbQuXSxKU38Nf6SoetksP7WqyudAymLyqk6c7bqGKnsM7KTi",
  "key2": "4QaHkAtZJrRwAu6zABLHTqzJ152PYiN5ryHga3EoYxmuvZJa7nrqeyQWxDZZSwJNtcfMMjYZoYNiC8dpYxrLby4R",
  "key3": "2vyMe6aPkPynyQuLavzVYLbTfRVDQyttA6mgAQU56S9HHd45vKrdWGmiRFPbtbCzkWH8rQMi6drYARLahvmgNAGe",
  "key4": "4SptRGmRi2WopBnvShusYgoVxVJNNcu8341RSrHwPXZm1FmA7oWDqoziHpeLobZJ6inb3fKwAJeEDoP5Uw2pPjEJ",
  "key5": "3KmpcX5M4yGsNUZacR3TNbYCuUq87wijGmE9i3uKzyPn6py1khBuQDRMd96RpV8iDC1hcLGBTFdYSLwZKFDkJrtW",
  "key6": "imwJNwMfpAXbFSXv8PP1NicdTS28TJ1SSAm598ngRwuTCJhgj7cBTDjkGU3sWoiTPD7PdSqYZ8rfTskHY7pZygy",
  "key7": "2ibjA5HCPAWeDhKVZvfVYwZqYneAEgGHqZwe47iCGnaJ3nzVLt6qqjnL9gyiRfkye264teZ4sqFtytGeHvkuPFy3",
  "key8": "ConkzCC3ntYuYtDCzjAHmdyLDHkoLPhB3uUBWb5ZoBktqffJpf5w47mAyBYXZRfFMVkTGkrE566M72QJF1oiyty",
  "key9": "VjUtgPZxWiAZycWEqNPVB8Pxh1U7kYGc7gc9GREQJCnB4jZrY2J74FQQduFP45Bi5t9PMq6PLAToWGswWzbJ5wW",
  "key10": "5cUyNYUi9F3tohDcNUT4eyiMJ7ay1vczX9oY3MxKSy1gQRq4FVq7XpXzNhjNfuwqDC2x7t3oB9VARnau8f44rPMM",
  "key11": "3UdXMG6pgLPKRUirkjzdYSPs9JfQSREoQVLBHgs3ssRSdgpSiUYGvB6dWNowxWYv5BTscjAS4wAGGSmxHDSjptG7",
  "key12": "T8TJaCCRUctXF3a35qrZyXcvjLHJWQbkuub3P5NawKYgrNXYL9gNpky14yYgYM3gSAo176oUNxfkX1Xth5mGPtq",
  "key13": "2nnVPoWvNFaaJ3jx17cud69JPhcHtFDE4XEvv1c4RxYVmF9sGEubCbdt2XGhGzoTxEWPVU7o1ZwpTu6VKnShhtNM",
  "key14": "3Asokgm2fsUu7TscxajsuRiaMjCjhADkt4fPiQ6g3bqped6WRqTeLCNBYkTRL92NUrzuSQqamDf3sbDNNTaPtfmJ",
  "key15": "4znW87FD1cGtyp7uM5cmayNKBwJv8bSwxxK7XzWHx1pHNzENcEaZaCgDNVQJnJaGX63VQWAkJKqSfVTc8qmPpMpG",
  "key16": "4hK8gUP7FMFRHsUph84dBKN2CMeE2o24zKteNrUtRasVmzFAxtCNGhLxW6QYVZJ6aNWND4JeC2YFj6TwokEMmUcB",
  "key17": "5NYWyXwgqJD1tHWMYbKPxeKfGzjkznAJEQF4Co5Dco18gyYnpD1rqpidiQQb1iKPDaXoapSyEfYCbnsde9nz2n8Z",
  "key18": "5Z8i7P5mpUSvBn3jAHs1fcbfGu3XRpCHVmiXhfLC9ZSQzZ6vk9ydtjP2mKNricGVVz4gRx7cKiddsjx5hJ1XbgUe",
  "key19": "5WAmB5FDjpCDH7B4ELqRKocezXHoTbkcjJ7mUChdQk3y4HabT3Xxscuy5cBDfYmKVNCzrBdXLBkT6nakRU7i3fAM",
  "key20": "3DKQtRggka8os3GEFo9ojpncihHWWHgS6AgJHWxHgqwocnGEdnELV35CZLxmvYKzz6KQ2Xw6gybPZ9XX1WstMSxU",
  "key21": "3DQji2yJM8xApPqj5EsRykfnNQ32xtAPAg8z8nph5pPBwBAcSKtDaU8DUZ2e5o6pH5De4Dz4CKNL6hWCNGgqeSWx",
  "key22": "2fKakYRPh1gERu2kEDgRuVNesnFTvDhBPjWEFbLAWDHswBJreH2X6YY26EygcFaHjgrmiGqaTAJ3eqhgVZTshoFD",
  "key23": "3cgGFLhpHDVvdncBDBRWQcC4anKU7Me7LYv9YVTDqUgoDMGHC18w7wZ1ipZ2h3rLtk3ewx6VrQew4FKb2wXQ5yVf",
  "key24": "5zcSKyZhJubHqmSwVkjNhSSSQEKZFkQ58HZTQywfL7BzNQMvjB9VaiCSD4cnZbXdiExNVXzoP8WYz2AKTHY8jPJ",
  "key25": "28mREc66hnvjt8z1maAwukS4GeBBakm3iuVUzBeqP4cnKAe3DbxL76b69BBMNRkW8ed15dhUhVh6sV2HRRJ1qw8y",
  "key26": "2YvJXLyktSpzYsngUaGntFyMfreLGt7WAd3k99QCcpZXca7z4dRbHtXUb1P4ZkvQ5oNvyHJwSr8No9TXX1ojufpV",
  "key27": "EQZhkjTjRtU5fkFhkg19dh8N8eGkzbNUcFAoqRcpUej2ZrtEZ33Uq443TJHuoVL6jnSiY3w11phyQ7i93tY2RTh",
  "key28": "5rYXWSN5dyCy2WchRwQFiZwmz5h4ztBShFPADhTRoq9iwKGFptUg7nvFWawQv7AVC28ay8wiZA5Wr1oxzLe22i6j",
  "key29": "54Qw8hLxPDVaQaDLBnohJTEUhPGdrSxR2nY7f3r2Go78B1ws33Agdg2a5JNjCRa3g8T4at6AKNNe58wn5BNWUuga",
  "key30": "3dg1ZceFMtdMcWYVRBd6Yo5S6FMLxadgtADajQPhtSqrdMu7vfNpV423EMjN3T2FJ89wGqAENoAXKpqVAf5w3J4j",
  "key31": "32eknrNjXgLZq7ke8YAdpt2a8oqvoaXhwk8s4mMk59S2YjFNXp9jVLamy1UtBh6rkfZ5FjVQYEwWXKjUBmUbFx9U",
  "key32": "62qbiPXSLvfLJcYrUVbrr5zB9HAgpR7sPPQ8BGwviR9Radizu4PG7BmMLGZkqCUZGui33HFkyhzRPVDF5GkNVKuQ",
  "key33": "27UkzMqEcsPPSfrCFgscMy8DvSj3p5fAbJFxcVK1TCrqe9CeSTTNzrCrbQtgzo7rAuP98SuoHJke9yj7zMN5jtpz",
  "key34": "4i8Y4P13pbe2uMF7fczR4961PtBhZZWRLf96BxgzdRLGoAzz6XSYhFNZbgy4GcSHzjg5ZXeCGbzBMPZ139Zed3kM",
  "key35": "3tMoaLA5sJmoP7Ef8qDbX3NKKLAgcpynx35FuvX8WzHjHYNAaDWxr81n5KvNzwTmxYvziLZKAKXfd3yh7PUoFFZb",
  "key36": "KH9yhaDfcwDcoY39udLdnmyNHNTpov1WDVYQvgSRvMrZSaHyAQgipjL6iXwbBmRJN13h9Sryz1WrbGz8N3xMxBh",
  "key37": "63oaZFiweBC5WBGFf3qL9GpATfgLuZkCUXszRSDAR24qpdkWysTD2wA9rnckg6aU4ZPwsvhjuxMSeH3F13bqyrw6",
  "key38": "3nGjzdyHW21co9yjphneSUYh41QjgkKxXRgc6LkzQft5Qjfajd82dhQDMmgyraWmuuQZ8S1Znd87sBFnPqveWtBG",
  "key39": "KoxLdT3tYnv8GqoFdpUy8pSKfgbj5ZHHQ93rmBHRxj6SWDFJmGm5TNn48wMShpnFerveTNWWd55qRh5ViRheKFa",
  "key40": "ZEDWXEV3rZR1YPooaEe8nvRcfp7QppgKyd6DN5ny7J6xM5pj1Edf8pF1qVNGeyZTWyMVwfMJfFbnk3vypGkej7H",
  "key41": "4iuE5NDmfxquiF2RZgAv1r6Cc8AD7uYCaEbwV53WpAnDzDx4RUuVxm7mYFFDZQTTKxyQB1xhnxk3cBrxVWtrf32S",
  "key42": "2JvAuHKQtFuN6PZAHorAGZNaV36sh7D43ducnvSB5rwDdEyZdYnWHWvbEzupq2kUibxivLWKkVoFhyGqFZJhSe85",
  "key43": "5wRFvB3b8eovaRq2iuwPv2bz5Gor48F3NCT93iGFtNZxnyQuuGypZ8rSUHwoKeRSTqX2dhzhgbuULzSpimVvkaxF",
  "key44": "4f1JuyQAJvCR11cUmuR6sRmSWuFUREqJb1igViLWieuNvRm8CBig9Pj542N4P1CrhoU3W1BtSzxyJ3P4nXbj3wWe",
  "key45": "5k3XoUaxWB1FYkw7V1Kpijxe4GE1RhUDg4ceDejptEtXuKVoDuBK6Ldm38Byqsnp2LQHD5uWbPtWvEFgm9tG3pvt",
  "key46": "4yFMxoScGVT2zRX6p1UMavtxCgd8NuLHGpMju8qq7XevH1eLFmxprbqVHoritkqapEjrWFERAJ7smFcbaCwHuP32",
  "key47": "5rJMpGNvUofD8UtVqQXZYuezGKVrM5ApMHMiAFn3jKmjNFrLJVqFToviQSmszJSBHG4qPfoviEzM45HcWetSDvk8",
  "key48": "PaayHLg921a7KZgAtkpJFRhm1XCzVFG76qr5XnXVKwdUMDfevkcwjJzuAC5BAWa1eQvQsAFD4v2TYUrwbg75xzS",
  "key49": "2EFTXZqsvAiMLKsAz4spBW62J5kN5eR37CBy7DtLbqxiZwD6GwbVexh33tpRoo5pZ4HXuQ8yLYnnRgiskSvmDpB6"
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
