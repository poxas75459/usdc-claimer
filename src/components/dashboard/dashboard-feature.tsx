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
    "5we9E4qaZBqApSrBwGYwUvU4GdLGXwpcCgw7UC51VpGt9ZBqbrYEA7NmJWumrFZtJjXRp1bWiXvyCkC7dtADPSYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5miFD5fzY3Ue6mrWvmFUwQxWnaqDzcDwr9gEQnj53g8DcRNs6ogvmE3kGNMnjGjEAafB1ndG32uE2zLVHFB1gFQc",
  "key1": "fXesowJdbGMESYmZ7zzSggFThQ5qpm7DUwJU6zUMUu7ZyT7gJH9bPsM5aep5xqmY4Ea9S88BokwMKAJfSbov71k",
  "key2": "66cLp9NABdCZcx15Y8n7ZouLrKxsA8i13FPsPqDUHax3CUECSSvmEMN575cZtasyYrmJyoXtfxetWj7Fw7Emq2Zt",
  "key3": "XBVFPFjRynQeMV7tixezvLmPQsk9LhF3CAhMmy4t55oTitSrMzkWFswRRtbWWMq6ZwzGSe3t6qprWY9gFZm8PPU",
  "key4": "625FqGcGqS8AB8bck9XbS8gzLD3JrSv9hDMsXypE6A9J3hJfXYJXD9TEinXUzpKnWfBbYjajwW52XuTkqTqU48NK",
  "key5": "4iyjkReaQp3bJHecao3mJ8ctH2vncmPhWPKzE5GYtkJPQsEEqV8uQcaKeusTjLoqxLzPTZ9KRWLVMiM2SSRdMohK",
  "key6": "2h1tvDHZyULJ6Avnrum13Q3RmQLAEozb16jhbTkJt2oguKQrx8soyGNnBAXB3yx6sxbmpEVFPDPzrgU85tqhz6TX",
  "key7": "FassBGL86bq9vbTSvpn47rybYwE1CxGurcSsfQwGsLHi6gJTR6jdrJZTc8sX45iXDfpPmjrzPgC8eU38v4LmiDq",
  "key8": "3WCovsVZwTiFccR5Jpq6aVsuXwZiBHuoJsExz5zXGphAfQ5xhncJGd7LhGauZNj1FQgsr48BLvQY6FSNyVbdGBvG",
  "key9": "4agSseuP5yXfu6JfP2zFKXtAmhQ3rYF1Tj5YwSwLaRztZuzWMCsiVfrKgAAKwNnTrGf1T6hnD7bfTymUhqoZmJbk",
  "key10": "sARuunCct5v78mVHFRZUUFMErv71PmGB8nyDdqqY5GNw1cEDM1gYU6KUfcauYaUyiSmfWcEYBBr4rQ2R3Etz7yb",
  "key11": "GQvDAmmYUWVan87UjwkAs6C5dcNAGfYzzuhxrjgab8Ry2s9z6YBWp7RL6pSQNP4Skk6emdMYyS9Pf6JzAGbUv5d",
  "key12": "2jbH1qjNYyeiQVDkqTdvPJSDwJavbgUTCobHgBo3REDB3QkEvgoWvK6qagF6AwYfkD3Fqi1mMJYwScR98jxSTe5i",
  "key13": "15TeMqYiiN1vbzMcJ25fs5RFiWkWaY5ecCsP6J5yMrh1D7PFyfnPrnGMPkS5fZvDHQgH3Nov2YK6PkGaBK3yCcT",
  "key14": "27oKCDiBSGShQ2FFppH9m6jprG7xT76yGefT4Dn2P9BpqSLT8HQoc7NubtN4VUnTaMSXm95o3doPgdyWTZH3NsmX",
  "key15": "5vkNXUUwaHtQgrJCM6zEJxE49qq5ec46iXzWR6wGK3Hja7kNEE9uzqGPxoCN9Y4yqEeS6SfmNoqUTwhcgCuRy5Xw",
  "key16": "4SxpAUgVfrHkZPRffKajc5K2DE1jGMxHhwSKBee8AAsZZrsQSsPAh2owFBiNftQakRGWhDanvr8q5ZEMwHZcDtyX",
  "key17": "4sWpSPaeEJCoEFqX5F4ab3CDZAYDctRwFg3bY4WsrP56ymkgokGB5tNcQUJ9Ja8oauNV81N3SXWC1oVdKtuwn4zT",
  "key18": "moXFUqepwcRkm8y8DEFhiYMRA6wjox6i33BKz6XhfKyH5QkSLC8U1T1LLYHqyXFosHMoVxpsEL63zHsZUkP5iFj",
  "key19": "3dMyof6iSsWyHQvKwVRy24RKnoTUxwaeNRJU7uRs2fJRTXFXWdiyUsAhqGoFj3JoiHYjui7pv9DQK7SsmmAwbdXA",
  "key20": "3Rpfcbm5h5BNvsw3ZDpenENgWN9MLivUvsADgTpumnjhta4kCEhXfTAfJP96BLNucfHg2jEUt5fVPGL3MXd9zang",
  "key21": "5JhAjF4HGnZBxzCrCzRV3NAd5DM2ravobjqRTSu8N7siHnwDNqsvZ1apjj2Q7gTq8fFEHZngwVbdPUzap3U6ZBos",
  "key22": "2t5Hs48fsUgVtPVpzxUWV7VR3fQWoEUMHb5mwg2s7certypbRZPS2d9kf1dS52jceFw53nnKRoRdKWqdT8EtJ1o3",
  "key23": "5noErDeSPzqTKaVF1aUHE2xWCGdY1sPs88nRi5H5QDerEf6SEuavCDxFborKfSePqNPsHth2JjxQYhNekw9Vi4J4",
  "key24": "TVpCtWLsbb2vQQDp5sjBWC7fy3CHssduPbNXEfvBC2MiRNQxHbgN28MtNbG9EjEg3tbCTZHNDw2dgrhGpUdA8hX",
  "key25": "4fdV9p8Wmt6XZLZAKmcbhf1cDQAbQvET7w5PHizRqgahX2CD1wNS4L73xUWYyjsPzHAKPsXwpKwFZ7ckJpSi9gsH",
  "key26": "5jqi8GzWPGiLhxAXmLFUurJnJiPCox6CXx5xwdgeAqSNwWVZunxHNw1DkL1Yp87ajySVvCwtdw12WEnzeSNLTYWQ",
  "key27": "5XspK7vthL1kxXk9HfXNFMLpMW17iSTeUNwsKMEx8iN4FRRL11VM9wL7RRM1E5sw7SzFy97mvcX4XC9tUdttHkiV",
  "key28": "2kaHVDyCmZEPPWTKVG2j4CSadMmddZnsARn89kjpUWiLwTa758LHev9XhTj4hbgbP5uJYyi8XXA3qbBBwUp9b4M9",
  "key29": "32HBtmdADhSSyxbH4hJA8i1fd5otaNvHEZVCvFdMDvuRmExJKaArGpCe4t2wpGaBU6ny8Ey9QCpgJ3GrmH6mE4po",
  "key30": "5YKuhpKosaPSrYUc6VQyQxbB9q779pyvJiquqEV2HTjc22n3YF5cZvBUGpZNjxtLbTKZpjKyuvGZ1vvXh2RfVqRW",
  "key31": "22tcHnmBXg26zV4Zb5m5quHRTa5KUT8vDhg73KqadtjUXgGpmWKCtw3TPLx8PMHXEPfV9UckmUFuqvzoY72X2JmU",
  "key32": "45WREdyCGekb5f7mkKfWVPUDJzGhMsFKKKtDCTsBrAgAweVKqxxnZ8J7qksandKGpYcjx8Ge2CcMfFLyUPBVjc4u",
  "key33": "5ETW3RNGE6NcVCbuRX7CLcP9NvRar6NiZ89tjED6ouibZBbXu6eHCCbZ4KpAHreMZSzgHSFG4LDSQz2Ym8nCC7S6",
  "key34": "5Jk5mMQWY5JwwJr2RyXJD8qbKp43ZqHzwHYvMQZXe8ziuqFZh61oP5fxrFVxyVV9PJ1t9fZjL5myDqZa78kCQSR7"
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
