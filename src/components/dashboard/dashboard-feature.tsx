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
    "d9PDgnSnqMCEfxqgsxAkW2nZ71scZASt6AsQMmVa3mgsYfN9wnooCwchReSrbpEqE73zFeSN4tM9ncNFkE7sX5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XLwAwKXmLFFvopt5Mb4ZQ62g4i1acL3mU71XjpN8z48aDGfmJhpZ2wokyCZ7cPc7VviP2SFQGKuPxXKQXbLeDBR",
  "key1": "3Ziq2Jvia1DwjuDpv5vwGVh4EowN7GL271MhjLYkmHNhvJiysy8Luipyco9UPun55pWcWzbCEodkkhMEP7TKnE2e",
  "key2": "2SBdBDtYF944sVPYqmTeGLCx1py5P5FgBoS8qLeK2s9dQe6gYUthKXq2dvEXe3uuCjmZdNSwCAf4tubmJLnBM7Nw",
  "key3": "2xdo1M2qCaAtFVuKYR5nvNjowDheWUyxjzo8dv7cj2TWvGbLE4MihQTAZcuv4uR2fxLmBu892AKR9rFw7VMeefUW",
  "key4": "385xzMhXpE9MyCykynxrv5piDvPgr2mXK79i7TLgbDrrDGzMMj18NC4cZqBFL8Nktu4FvsTcNjWrbRgLSiozms9y",
  "key5": "2TVA3VQMCg2CjgkTZE9scX3iirKNjnCerbw82z7TMoCmuxCcWW5M6FFmkZ4CZSKTD5KaqAAiAjkyDMsNJ6b71kvC",
  "key6": "2s9HaaY79hUBbosqgDFypCZnrzNVUBRhEBJz7g4sLfNr493criqz7Be8jQhBZDmkJmYDVBvkuMMXXAhminLie7u8",
  "key7": "zcWs1RpSzrK2fMABnMUVvY6PL4WzMWCRFPy4QpyNZsuitzkBtUSmk8t67wCi2mouCGiuCxwLvsjLzea7X8jj9gG",
  "key8": "UeVsAhjFQwDgtbNnSabcQZadYsdeJktVap3xkeqnjaEPoVT9iSSepvFJzWTzaEobHwmVKrHZMKL9bdq95B1eopx",
  "key9": "51896uKcKH5gkE5W3vzJzjEARrVEiUs4xaPmETAvCDH1WQbZ5j9fwzC7oFu9tviJAwet9xwtgPeaEjjzNjdNSaiS",
  "key10": "2WmoSuhqb2d2LnyW55s9vgAGQzgQEFM1rWbpG1bQFm9nCVc23aUa8958Zwzcrqkt5WvEDvYSJzmxWnLs5X5p5ud4",
  "key11": "5x7HAwtDLPQ5XY1WPSzFA6fEUEVoSBcP6zjFxQ4DkGcHbet1zbgpkm2xgbfPoquDAZXWhAbRFheUaMuAiJ6wkTuw",
  "key12": "fGfN5gVPN8opoeiq2D5LA6zJ6jzNgQyeHzbF8cRm8iDzu3hZJys5VphMYVcLc6RaWBQxaeCPXjfcc7y7Nfb7NWL",
  "key13": "3Y5bYqVhz3JdM7rmJxRXxmVm2syBgsTZyF9hzhnZMcNocayYit1mUwimKjmd22UEUz2RpkcMPXGkKhz84czfTXfa",
  "key14": "2Yo26NJx5dEvgCK6HWYKPRDkthKxwN5okQMTkbrbMXufgrVPy44PW1BVzXA3djGhGnZxJjUM2eoZD1ZDjdXxEta9",
  "key15": "4pGhkwh8N8ypTV5R1GmWj2dTrhX1DiZgckt76ZLfMajSAykBCtzQiYbdi1nhpuE6WEJUFysmCStafN8AxRtafqYb",
  "key16": "5FQcKHPMR8pvASkUN3ZPre8eg1Dq1NU9shvHFe7AtCboyQsiyv8n1HcG8pwFLyEdtfbp5iVFgqkK74TQuWAxcR1o",
  "key17": "3Bc6MWKMETauBQoRQLJdALa5YPp9u6oHPcvVXKhRWbGDHfvS3BTmUj8CWtZ18QzbFVBqnyGxqsd6GAnzfjKYM2ch",
  "key18": "5VK4TZ5jHcai1Td58SYb37ZujbovchByQG2HGaB54AocBKAotRJSwJkwrWZ9b8jDf2XZ5cXuLxwELW1gdFzLozM",
  "key19": "4WrNwYUTSLByW3xmVRGCWzrBbvM3UHmczWTcK9Lzc1QRMoHYPC4cbht5atPSDgtybC13NBXWpFepBtFDHyyKujur",
  "key20": "34mY5iWi9bZr9gyZvfkDBJAQ7r73bQvmsZFHNvP1Ki65zJePUwk4cf7YJB3WcF6pJCMQ3C7SEzkDuCda5JZNM3D5",
  "key21": "5FMW2wMYAH7FJZU2mBhAUrwsnKEfDz6qGRyuxTKCUCpS34cn58yHHp3nrCbUXECLr4Wo3yZzMRuiA8fh1rpK7P31",
  "key22": "4B9852rUjY2jViAZUDp5kd2Z9GYsFhMZp7S4HSTvWVPrUSUkNTTfo9JGLaPHJrMtYSk8dpJ19Nej49izAamk6VSo",
  "key23": "3EsAcuipTFy2WGYMxo98vsTzFkyQHwd9XtmQS4N72rXowGD5sF9ZYgjQZLRBKXot1ZGs23vFx2nxwFoY1F22rrNL",
  "key24": "2NvintBzazo8gTj4DK23MnxEAVVuWk7pS7Q56ruqneidPd4XsohbGnpkcrHt68gY4cDWbB5dbnjri1WUopicWVWM",
  "key25": "ULog4iHfkmNDRKiTf35Wr8shNb16JDQ4RMPdoERWBFmSHQHZ6PkrPTkrepfr5JyAFWPp4ZPhdxsfuxFTcsysJh8",
  "key26": "2qMYKFaXzi1Ft9U51YhvbSCbegnEFTeXqvkyY8qsC5BXXSoY6hdx15ueQWXGvrXCRr5EYz3vCn4SBoxWG24j5qsY",
  "key27": "42kyMeahgaQMmRwQEDE7nKBTqDxTNnsaHKJTu33yLG4pjM3NyDf2f9W5vUvSELGze7cpbdUJe6VAeAvM3Z8JqTD9",
  "key28": "2UbZS95tL9BcnqSvQ5hjSp9ZBGEYTCKhKjDGnwoniX5TZtCkLKXT1q7yszY5pT5rr6N5vtW8U2py4MJ1HCUXj2aa",
  "key29": "3YworkuwkAQ827hkbTrMnCkaAkpFbUowmmHprXqh24SnvBdvW4iz9HTJL8HDgGLgb4CZda41djbs3b8jpgNSuXX1",
  "key30": "M3gL93nfbXLvJByVZx4Egf4EYq5t69AxhXs9YjgvXHyuuXevudEBh6dxnkVNaKCgEHacFXq7tYFWeJg4xnQ1VZK"
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
