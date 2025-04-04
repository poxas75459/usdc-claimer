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
    "5RhAWcQn7SKRUJGW8zjfqGgyWk6aoXDDKzHB3QZj38gqu569kipNcsqk12EJxAgJJ9tkP2PbPrwb4kNSonGKAxrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vmYxssveyjBZ8JnfVkeZtRZpxhguD19tyithYNzrDs8d891YpmXAcWomDbigWAj737SKLVNXmp8DnM3UbdSHTYz",
  "key1": "3c91pKcrirHHTfkWeR72bKRjsQEoHRVTehHqnPyYyvh7JSMwT1edeaQPxxoJ7jPBi9QYASmzXAKqph7mQaJPAFum",
  "key2": "4oFFwL5joYejFSwwpbBULfrWgCJLZ583ezSC4qNPS2gNBXcWNFZ8SHXpoHPH7knnVkwCzi4mqzrYvP2WserLBxAx",
  "key3": "34YsDgBCwSpQm9gkShRonfqNCviNfdzTXzSqcTCKjgvxDvxYxGogQ3gqoMVV7BwuSfLUz6JFTCgUvPbM1VM15HoL",
  "key4": "5L9T2Wgbyd6cpF6xbtKY21F8XPtp44qfUehooJ5vFUXmPNcB9EkLjJodcNc1CCz3fobRiSxnxKb6X8RBEDzNkwgo",
  "key5": "wDqxcz6p74DGcTFrT2q4aCSgrr9VK1eTcw8KRXq7FL8EzC1qDsinu3bfHdPTeCDZ9tsVVuX4c6ArzcbCnwENrEF",
  "key6": "67TPJ7yhUTzn5x9N34M9MNHT3iPEvYqrJq3StgBY8hNsdKwh9ScRG1e72vBMpcThNy6S7efKgsWL74EhjEvA2B65",
  "key7": "4tcZjRuhANKDt5xGapbTx2yc4bsGfC9QTCvKvaK2VAbtDa2jTh9zZDPkf6nAWxeksXCBRvQuDX1VSW43KCVXjh6m",
  "key8": "5smSiJXzfX4n5ebYyP7mfPjbUPJDh4JyRyETC7bBxXqjiJyD8VPgGCzjeEbegzgh3zAHVoHiKTL8r4prhL84hf8U",
  "key9": "5yqBMEKVkRwDHEDfiFN3uKAz7h45EejmoFvG5q81aMB4KSNSG6Fgfyc3HnaGF6ucMRx8pAmvmZJ72LPGjebZaE5V",
  "key10": "3PsAHVtBcXnFgzvr9nkb72DoNzeoooCCuzgqf3cFFQMS5QVQ7xEKc7tza2VCVJ12XPG3KxeVFfmxgnt3Bm1tuGKb",
  "key11": "4W16dmdczS5dHNDidMHyLiv4DXwuX8QZuNWnq3UeZjKVxMV4vh1wEKKzS3nTHWttZuuDQ8MhtWM2tMxYg2W8FLzk",
  "key12": "2ULHHtLPNyCa2iNrxXePvU5r5zofbbYfwxw6Rm7yYqYaofniL9nywDZ2miFQCZGuNuyLCk57ZsnrKDJ85dFhrLJN",
  "key13": "3KhPSnHy8Vq3JtKT3RyXuL1DuyNPn228ahxT4R6KigM1x87ArxWHq7zSA2PHDgxyKTptKjLaywM4ydzpDqLeB9TY",
  "key14": "4a8pqwVSDoXTTwfHpS2TbpMseAtdxur2AXmoFt5w2pN1w21BVGVytpxJQrRA4xJeufWhpE6swJVp2o2GVMaXn5AW",
  "key15": "2LPyPP5QzPyZTsSxfYN13tAZh2SpseaWLduv4ThMFuH8Lawf7RTgqLNHqxBSDLcQCejVCSpDuKCd82phKep4cQix",
  "key16": "4LEg7XEc92bxg5gcCGTTSNy9MLBh7fN3Lxde9Dh1vL6oR3sGybsw4fWytWvbeK5SqNP4C2dXJozAMqXhzKg12pmn",
  "key17": "32aQiRTnvDqrj9W117KRDwkR6hNMrLjLnczkyS9S4R88PEUxQqfFPHQmQYLJoMvutckKNzy6faTdiivP36zWH2AY",
  "key18": "2J4FDzS35m184EwYx5Ag9fAVWXM3D9FMC8nZvuB9yJQQBFLfgTf6UstmyvJAqSspq5HHeLqcwvESdrfAiSVDZweX",
  "key19": "4KBY269RdhDjydVC6GH2Uhn1tzZnBjAymUe7AWbHkN5FDEN2g6FicANg4Ad2kWtKrnq7GAfWCiEd4n863Ybwwv6j",
  "key20": "3jGnaUGgRnEBpELoyFkygNVsYZhMgAbWofWwwCmGoNkaH7EeKjsgczt2YdAUDkqjowP7vPfDMxtce2akn9dxLhu7",
  "key21": "21CWXcpasNmXToFpB6ArfJ42YK3uZjZDRHT9YRZxtG6nsQsUuDT7nx6FyQ6j331B6NpPHVHwT1gV6f1NogxHRRPm",
  "key22": "3b4WzfBohFYXcLzH7BhFHgYmU9miPTS9PuKAR1yAQfrShwVzHiyVagbNF6RciRmvdqS1FtQg9vZ9LfyzUSafucFC",
  "key23": "61bqoAxn9JJ2fX9GfHVmt9CYMQb7eTgp4jSRpUXxY6zGSN41ZpADegzooHyQQY8mvhYf2KQCeR4NaBrPJHrY4gSL",
  "key24": "21d3kyF6Gud2hCbtXvZwADiy6VotKGTWpPhTmgMDzmC62v3Hm3aVLD1M8BfczVekpWCuBs2tHNNJSNPRMduTV5dA",
  "key25": "5ZmBq6jh32xAP8jFRNZ8zR2BRfMejzK2w5bXJQjjrL2qq4k1saUbGZXNupzxopi3a47d5sJV9PomTqtnRVdhPYfP",
  "key26": "2vwiUp6faEv9R9MmoYKzxiNehEsF3ztBLWRALWsgKRoWX1X1yHvhLsfnYnPMpwXzQEVQytfjzDmqN6e4mqjiPi3L",
  "key27": "27ES2yF4ri7qcqGCkshPgT29WGdNzTXR3faxLL3iR9fhGkcw1AMH3Kc5vKo2RrobXQzxPdAx3WPbprkwwB23kRwS",
  "key28": "W5Gsjj5UgcYi7ERxcF1PKyeBPhai36v1hpqjpYsHvDnDz1Cicbmzbz732n1diHSnMP2cwq4QBCL45qzmyz9mimN",
  "key29": "43e5W5vS1fAMyhhV4m3zzbmcinDQyykZifdrNu2NN9BjZgZmtRy2ttrGDVVhihCYH9kAgJA9DPCEZ8FiL1hJdzqx",
  "key30": "65kx3DZMHutxbyVpxK5y1ZaiPug3P8KzJYfoMq9j3MoasLWewxhuvXFSAPYK6Z7kZQx2zAu5Ejz3DPSJDopBJp4R",
  "key31": "ESCfHUE23zxD2LCLKf7Z4RSq7iop84b6SUDunKMuk488zwrLoBDDKLg6fHTFhSkcPN5wNkaCSTraQHMqShPYvES",
  "key32": "xNfqTawhoK3c6PQpUambJWBb5SNdt3ZfMh1EM7GUntftTE9vnGkcXbwGdvsQjF45vyqkSHoBt4z2aL3Eq4vyGB7",
  "key33": "Pws9oV1yKhT9K4nLH3CA53nRExebRaT4hfi9tq2oAMuQRXo555GV43G7x9pLEdPzWscUTwnBVQJwvDSHXQtCNnc",
  "key34": "3Aw7siBBCVzdNQjxwf5jnQDRaxWMmDGHStaetdqeNJcjyxKgSEzw1VByg29jEtErbXKup9BgBiqRfKAf1jjC4p2H",
  "key35": "2Jdfjs8xEfwvQn9hKovcsJCyUotg7KkE74aDQ7Mu1fVThAsczkA39cE7SKhhHMPHzPUNzy39UPV86EprMjbo6RTb",
  "key36": "35A69znvvBUNNEsHZ3V9uoVaXa95dPqvBb49TVwEq1MUD11z53z9WoyyzU8DNYsdcsP8C6PTGhFcvrzsMAX6fopb",
  "key37": "2AN8YZ1PNJJtokFUbuvSiqRMPDNRjXtcM9GbKFkG4zz6A8gxzrqbJ1VS8gocaYtCaQR5fypgtZZJJWn8V4s1DJRc",
  "key38": "2GZg8iR2QmYe5jnppeR5y6oxPqgc9C9fAYeWYUbjGpyotMQ4SfRcWmoocc7UZHmxaHv1cuzWaj6P37JStD18e4Xr",
  "key39": "2sSjZGvtTzNzUyzSYpfomqz4Umsd8UgkFhZunA8rWqS4roQVi1dyXbMPFv466pPWNwB84UxponYpT6RXyJ6GiBR8",
  "key40": "5tdQ62HSDDQGYgWnMjtGmmGJAr3qXqfnHuGArHvC7wmtoYhUBRSCqKNvn4PsmH6yjZTkuTd9v2txfRJ8ena94wtQ",
  "key41": "129cHg3XB2dPTkUR2f6Ti7tLk9w4ZwhFn4FR9kwTd2PjQraBnz2eyrav1tMKxG4mSEb4WqfiDVP4weE6B6f29L32"
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
