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
    "2zryH8DLAT6V94HnujELYjc75wYMAS1ajWyMaq9xkmMzdiPL1g4TCKY7qN2ATaDcSWHBWtpwTsTndHxYCEVefekc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HpZvxaLesUYgdLVfy9EHBHGMj6y4nHLyfbSuqf5P5HNKNphwtZsHZFXwLfdyoWdTjhNEevDUcTM6naD8sahfXKz",
  "key1": "5LBCTyh3ZgaLXVy5roua7Fj2JbSTcjFQgwSym9oXuAjcEMF6SC95PjvAYMxxamqmsM6RjLFoiS9AE7iTThjqBm4X",
  "key2": "5hRCdvUYLmK1dm2qynhCYreB4wM8XKJQPy3tfwFLdLHLonj5LFca3m45Q7wwqFbGEzBtJbQMjMyRuqKpV39vYrtY",
  "key3": "2XgiMdi2aFqJoGnpCBGCwr3QpZUdSTUxvCABDPk4DaDdrTuwTUmv1rXK52NHM4hVqz8kEf68N1wUfSax5f1p5rog",
  "key4": "36QDhzaoBVPcUYbFDPR9Qr3YqXRDbAdwpdyY2JLser4ccF1A6eNKfTKBuYZb5NbQfd493kwnaragdyMz6AEqKpeY",
  "key5": "3GPZBtMJ6DSW2qsJGHQ5o3Dooe58RuAXMS5ELMEDCgCysJhZMwL3Kf9SLzDhAY7FRiyERYZn9TZS2X8vUYADBerA",
  "key6": "nXk8CidYFaTtWXBmD8y3Cts31zThf65zX3VkuZWx4E7HTQkXky3GrDihPkZEsvFHGWhVsgyapbqyuep5wWMAYpo",
  "key7": "4njBdFxrBmieA57SCDyZiJbNe9mwVSkBcc96ngHAZv9fMceqSrN5MqbkmzoUvPeXGPrxNQW4HfNW5GjNL1BvgEet",
  "key8": "XBiKAWHYM7S9ZgvCZRERN3K1YnPonNLgeAEfppuRx79sa9zNnNpDXLC1W4ZZg3JpUjQeprLgm8P3ZqdmqmoRkxD",
  "key9": "5Rc8WzqEhB8C7KsegumWdfn8ByEKfivUA21c77MbyF5QR6QZE7RBwbg37YWybDVwQLs4jtceCSwHk3yQ5UGKvXFH",
  "key10": "2zJyAcoB5dMnSieV5m5Ja4s4bA9nPG7TQy5Q7Uq6bGWHnTXrUZaFwrN3BjvSWW2tWQYShnSwPpqWuLL6wmP7r2hN",
  "key11": "2fDKXCeZqmnhCodjsM2YsdS2dzZihcpE2wnThmtwbX9iAe7Y5L5HfHp77d3tsycQVn4kq8DsosNd8hizpjhGPgKJ",
  "key12": "2WECop95rjkQY1cyXisgWQZMfKqmLcG2p41n2ShFw8F1jWDX4jB6Y1HZWBkmjjESJUaxJGz5TS1H2gGDMAXL4zhc",
  "key13": "561xidYTqiXLBCnLSaGcQRiosfsFNzaskWsGjUarpkDisp2X2cA7eFCNxhMuZwe9qFpiQJNKDtDVqusMV8v6XGuU",
  "key14": "5ig2sYNUAmk1KRpVsC7aZ8rNSehFaNx2HSHRebqZv8B8zBECH1HeQWN5tC9WbohgmQheYzGZhqXGJaifMJSoSgnc",
  "key15": "4gxYaKZ33981t7hqoHCP4gdaKAHufzmWuBEk2gRvRKiP7CB6c2Di4AWCjXke2dnQzRkMqemX1qTfz3jeueN6McTu",
  "key16": "pR643LwuwRMck28F2QAAvd8rjazVDWm7hNyiyHZpsumF62PsLzkb6Qdp3miMvDqZqXVsUUGmqX58dA9QewdkNN3",
  "key17": "23nTNJV2m2Z1LKTuTevRwtup8tgMdinZEDnuFJU374zYY65E5mhM18xRzjEutDk9mn61Y9RGR2s1ixdsdaujB2hf",
  "key18": "3QbXuB7T44jNVxSyGzhBdUc5hb51Krt3KjVeeVX3nnzLtoSn6jugAyUuxJPVfYddF5RcHoSiEfPaP1JRz3rLEAQg",
  "key19": "gQjo3EXwDNSpmsSJg6MyMjeiGMPW6BVKdWj3Wq4y1TWU88iaL5j4bRn9FWVTaaSPZmVQYUQkMGC9tgyBW8tBeT3",
  "key20": "XL3XSp5Ez5WociDr7Z343bCQAYWGq9axYYSyyKfTU6shNVjkPM54v1yyAizCUKb7SKyjMsk94kYMWDBiPYmSbdE",
  "key21": "i9fx9iQdEfxocRTXiZ7haVZFq7SGWfd2J1GoegDDEjhgQNGrFn7UEK6Lnr9HkghyMZwo58zkEBfTZz7SXvhxesQ",
  "key22": "5hy1NVJ9ZThGEmxjdGR7FTGdyt9GyFTLZH2ZjTV3jC3zH9AWqdUt7KgJvWpDdvdcCopkgjkCBApP6BMc5zpBF8CU",
  "key23": "4jtQghpgvRH5kmxGHZ9DXebGx8J1u7oKv2SXgt3pqmnJYe1htgiSzpQKcjUm9aarkXJ9nLCejnMKKnkMcAQiUBnL",
  "key24": "5uz5uaxwNydtiBpNUYZD4AMo8q8oq2avR51SwRvjbc5jZQfFyZgP229xMakosTKp7UqviurbxQDNuYeF2VrqG3HK",
  "key25": "5RLfeJUQ29z84uZJfMwv9ccQFz3ghQ8ZhSyN3cPDfFnKg6qWQi562CHjz2PoqKvAMsnA7WvFFv7exXSsZQMa4S2K",
  "key26": "EoEWL9uvzLp1CD5FucZWbQCsjw8DbyxjVnP82u9twiJJKFrQfzgdNbSpXkRViwhJcwbyB6BmoxkgaAfPNjWPCCV",
  "key27": "3PNFPqYu6qW7tX96qxLnPyV5AJeJDTvJZibCkCzPTeDSx4i6y9R5uyNynjJ4js8a96EoU5124zsBbwa6jJwnP9tT",
  "key28": "j3vLcvj5sdPjrZqvg3VzgBDzDK7UsLW8EcTbdpQE5429rotEWdtKHHyUnYUocXVDqy6sqbJxxsX7Z8od8nVQ5fZ",
  "key29": "5BTmvpFDFjoFT3c2ZRVL8GERF83acigLN4ZhAkxPUmdFhVyD8z1H4zbKSEnLxAAMsNCHscKL61JiDzgSXjViXn8V",
  "key30": "3dR8uwas1WQQnDsK5JGrRrGTsMNumrksRSbbt1q5RvCkRVSLCuiUb5C4e4QrgYhss9TNF3awc1cxMf1B3FHAGiGu",
  "key31": "51pJhkT3hve5dF9xVY9ZPTY1ECdRo87njnCfe3CnEi8Y86s9iEP3voXvpxfQbdfSsc8mCMKgbHxWDwEbAX1J4auH",
  "key32": "5X8bHrPqLy6eRVakh6boDsYMu3s7nwjdsi2BV98AQ9Z1dXcS6HtjgF5nBoW2phzXd4e1D4gRdbRhK9M2MyLr8aq",
  "key33": "62UZ8L4sQAmnenXayJNQmbWa3kvfgJ9TEeGgEEhmYe1SXm5jUAvoV6hoP8KGUMEUHquXzy2t4iUscjazdqUfKtRp"
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
