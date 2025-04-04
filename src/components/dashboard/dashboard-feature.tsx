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
    "52QL9MG4RZmuS1CnZpUu1Qaq38qVvRJuXqJ6M3GJCT2FDHdJuukKVrfBiCGuQZgyQbkMyxnLAgRmg1LZQs6qHga8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HeWGmCy7GzJfc464MhrAu556Ad7qxDkymVhMsWyKvdYoPBE35wcjTTPt1NjqQBiVegz6FFLTPSQpNh3amPqjACN",
  "key1": "SMYEQzWFeyRsgQfVTctVcfvdqGQ9Ah3xk5AWpuDhzVdt6iL3RA5PgFtk4V5nR2JM1eWRaoD1KQRRt82Ptic2JVM",
  "key2": "5xALWucfgiPgVZ5P1xoo8gXwXn3ZiS5w3exea3NRncwztbezFpqqn5SJuoGUBhFNLJSU14wyojBAJKKzsyneTkAc",
  "key3": "4rXBKLZLNquMgygRgL2P59n2tsyx4ky6AVe2jTH3nTa26PFgqutU5hL7fuDTrGbLpazU7iobdJCArYYeytfnym1z",
  "key4": "5NWS9iw34LVwGGeTHYr36VrzHdcEyJd567yjquUZ2nDqcoU2556teyTjJEPktp415HbWmW3J5xyxxpivW21ZgznV",
  "key5": "581bM7HBxBbEDkjY838aU8f9pn6ELmR9556BsNTXVWXQFrUZ5539ygmwMUbtgRNeHXQMPuFsvAz1gLsy3iLzGXHP",
  "key6": "4DbxQW7Qry2uSgitt9EVAojriSBWtdj92L44nywSwLyo3FhgRgAyQtjU4gQ2Zu3XZChVMAyDWdX3Jiv6HM4XarWK",
  "key7": "owJms2zMkTLvxeuJgvoF2ioxzLcKaYBwWKobHEGhGQi3zvjeyEzV6mjtj7nSuQfGWYEy9zcaBicX1G6cs87BSaA",
  "key8": "oWjGUmkZDnm1vRQQedeuCqiWZAHdNfamUwubYNaRMyZSSDZAa7HAXf7dYES3GZvWPKaKdibkcXXjudcwdLzxdbk",
  "key9": "3zXaGfNstvPNNwaGRP3W7RX3mVoeLcUYD9zbdwLFZhpeanRrBH6S9rvxyatXEHUYPkPLe54Tsteyr3V6iXDADso5",
  "key10": "ybWELPX6x4QmeEpaHsM5YLsVoiUp6eTFRUZuzATRQXCSzHPgUkYFciEUEfgMS4o5hZFR9PLpGF9gvrYUB9THvg2",
  "key11": "LXTpTJ3AcTazwrA6YQm3go8dtq56qJ9v7XZfzgpqpwQP2pVSEZbdZPLNK3EfiQ5BFwJCfk6EyjHYWpW1tkDKZoC",
  "key12": "5eD4ULPZsLGxtaGYMbAHj5H12gtYmHMHnyCLmnySiiPc2bL6fMiFsemJ9BJadT2nnHhm9HySL3FJ9dJAn2h3nhv8",
  "key13": "5rSBkWQF8i8JSDgBgt5MVzpgZwXVTmCaGxBSRSWzSm3uNPyG1XGp5XN1fnZjNEGaTqzGXH6sKVDkbWmXB1YcRt5y",
  "key14": "4oJdeVvJUVyVz2ZVuTrT6sB5eHCPtcgh4H1cyYMfPUTDD3VYoJq8YgV9NBcTCfUkY9UxZL72Xp7WhqGYyJggkVCi",
  "key15": "3wmFoXNi9wcDwYAq3GMwuf5Y1ywh9s67mstbRkd5oDnRWdWUTtJNunXrBbPqqvLtttkgBpeLLktSKJMNmcwU9uDc",
  "key16": "5y21wmKTxWQb5e893TNfLiVa8xoz4Ktg2HPYFiwkKpBeDQGg1MrzJFFgVwfJumfzRNQiP4wZavQRoYf67JSkY9F3",
  "key17": "6odxbPdBU2qLN4bomQVgRZeQ1ZdAsqYJPx1hEzPMf4bGGB32JisWiLouS9RwpiLCAmRWNcwrJDSn6j2H32DLdnr",
  "key18": "T3rH3AQTiPAG7LEjXyvtZReVpo9okxDTphzacDKostqYL6waDKVVd83JbuvaUXkPnU4xpkimdQXL6vvDur1tEAe",
  "key19": "4bMeX9iGTqabieox8WFBLnQahdCjngC41J6x3EsWi2sUQcYGvbAHG8RqbbJwxDX1zRiMHRrSTA9hHhXMw5KXM3T5",
  "key20": "wXGjnKm5P9oZx5cSrajUe7K8PTJabaUd1mrgMQfHhDfQmaZELnWjoUhwVFEJDaLyFKRF64V9r17MvvowAuixkVR",
  "key21": "LEFvNiYkwfEEdYek8xE8tvd9b4Fwyt5uuwCoSTs7Tbjr83XBUU4LxcUZGP4hwRiZVkJ3uDbaGJzHRVZkAtm376e",
  "key22": "5bAPAbbaGDC6cQhNejHbLC63Bpan5HwqjiuQL3LQ7pQJLHAb3gdE1jNixHvybLoxsupj4wLcASTTwivJ9aiu7aBt",
  "key23": "2MSWChMesthf4uLgjFnHob28kLn8ghHaeNXb5xhz4ECCFHfHfN7tw1uUQX4rYex2wg9eoKTa7wxhH4EEMch4vVVf",
  "key24": "23dsyUh5SpqucweWsXbptijSX94nBZ5EPVUXL4mHwnG7Eibsaa4pLh1LXXEzRsqWvL5VzLpxNGNAUbkeeYcLT6bk",
  "key25": "sGSb4jiJ9fqgd5TRvJYDwAnCR2wCVajKr7zGe9rDQhhBAQBFkiipR1TBrMMT9LX9Z5x3g4A8qB8sH8RYo4aK6xa",
  "key26": "3dvf7PUCq7P6DhxkQ33csW2PxeY5etCbjtRfvqEfWrSSXEQSjSkyjHFXxjVGhuRVWoKc5vMR8yZKB6NW3gZHZ8RQ",
  "key27": "V33tMtC87NvPVPFDsJpCqzeEsS3p2Pk7tW94jYUkkkD44enjtEEMTsAWh2F8bu5XbgAJag7Go89g45y7pNkhv1N",
  "key28": "5F2vXxwTXCZewSzu3Y9QibwwNLnpkNa3ok4ZZczkuWsKhxqH7ef631XhLcn9BLeZnjnsSsVM7c9zTEmfjdGtVAv",
  "key29": "5WtMt9wxQZSqzWDnw1dB5VnRoggWMCT1BS4vDS8dnBsJ4Z4xeeNKSHdYpCG4ANB3CaLwvBoeksWh8x4cuL4AQDwV",
  "key30": "48a4ckj3Cya9XNLyFiKHBBHaXYa5dUggCBNX6PnpcDaDuvZAJiNsKc6MmyNTnEuGAA8UNkySqXWc1fnbf7e3oMZT",
  "key31": "5T6wyMXPn2rtRtg8TXK34bdusq5Bg7cjtNDonM2xN5zih6p3XwS7iNhpweaXXHx2toGxeZ84weHqavJ8Lpf9b27F",
  "key32": "7ndKfy8cSALorxgyvEb7DXdpBKdkkfoNfaad38LwALYY9qBK9QSisBkC2irQAu5apjQGijDutPBdrd959xzxymZ",
  "key33": "37b91gchSowXpfJwVgH9PXqA37qTcYNRHYDgQGteFHcMk4Lbm3Z3pVZdXA8BsvoxBGVuTnYscABXqCANkA6PwWCH",
  "key34": "3DciF3pggzMDexHqqDoCx8KPsMzZJkZSbswNbS3v3BpbVkQjXG4dPfkeNyEr7uanHmjFbojcLeYRVL8UNTNtk8dg"
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
