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
    "4GrfAgfH8mREduDCdytpDP2VoPFrkKVTpfDHastMTG7CyjpWKvG7YMoerafodsbDweZFopp2AVTfrB5JL4VBZ9LP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hKaMdr4sX5BbzGVzZjV5BoQ3ttVDc7iwUPyfMeHQZqeVHnsJinFQ91T4MbUHf69HTYiQ6qPkn2v9z39NwJ4TFac",
  "key1": "tWANcxr7zPGCPLwaxCGzGiSTGsFKRuSDnPFY8fJGwzbinAkPNPhsUtNYL6Wjnx88F8rjNiG1eQJSuwAnq8RB1PZ",
  "key2": "4wsSxciXsp58tvxhdgqeFhJTVW1u19xgyp1WL3avpHvN4U6RseLHGdMjrYX3T7A6JDw8BNvEijJde1t6JGY3ydFR",
  "key3": "5c6aQ6Sy6isRtAkzNXGTgVGHnyfSkjidTxf8FqTFkyie4QxAxDXbqov3aemBRpy9vzFbCuKd1Vb8XcHMTt6bv8jQ",
  "key4": "4URiMn72F2zAuf8ATcJpvL15qnymkPDPiT93UqzntyVWnsCMQBHKQi8kCVk22BqyaaJFhdAWfai253SGc8yVbFT9",
  "key5": "4XvDNmKMQJVbgi18kBvxSbw2P52YnjQaLKzLb73EUXX1bqurYrA1C9UVnQ48wTTdnr3TfXXAu2SG1gcZ791RzhLH",
  "key6": "RNXqV5vDGr3L9pUCjwYyJgCwj9pMfKagr29PgTAbwKKuodhjcGWQEJkGjCeU5fnCoPGajn8gxRHXMMVZo5EqoDp",
  "key7": "48peUj6jXc6gEzKypVMC7WeD1cukVqfQxJM8b7H6zVPTtBXrAKqZS7HaxDcLoZpYnXXqFvjsP8c2CqwtMEAv3jnt",
  "key8": "4RWtpcsZFuboG8xn8suRxhG61AvvzTP3m4QWsCULpfVLC3Y3Kr9HWUyydmUDrwUpTAWc27zdU86qwFReY1eVsM4y",
  "key9": "5Y6mFsaWEBRDnUsBZLSnLac5ZnMSoVa23PBiW1BJjvP2jMHCbWR7gaQFGv23XJoXdzqaXd6rorHx6prH8VNy2Bth",
  "key10": "2AfXW8hGUeknMtZNwCVWD9M6BLeagnUcWaKPehUEkCAWqJafwk6QaM2qrSZXiaEtQvUrnUaevm3FUTULG157d5g9",
  "key11": "3bpbKQ4swx3E1NrCkUDuj7y89xh3yfpvjL4VnxwNA21DRB6zPg5Jai8Uj8TWdVrwFXtyJudDoNVTMG5pYWYAMAky",
  "key12": "453zSzhwhVhqE9sXQP11EBf22B2cBqjMxT9G9j8GTY8pGvBhT1nB4FPE3HWKqpYdVBppzf9Tu4UvhYVxAegPJpyZ",
  "key13": "5GK7hJs4rosPgvfp1hTgMw9AXYA1cTFwtiyT85DFhkfSziCEYUYMqvxqCfEw8bCUMwpn2pQXTVk3PCL4ceD4iPRf",
  "key14": "4SYYUzm9MJJdiGkZLqweKRiwPfKGpTDnaua8zp2zCNTq5HxpeiuKHkwXvtC9YreNY8JhYDQvErwK3h1dkQaWANLW",
  "key15": "3QbXXT425J6v2tQNYyqfGMPm9w6zUdWJZED6AThCLwVk9ArbEHfMvEUuexSvASrV8q7huairCqy4jZWvNCgLYrYm",
  "key16": "57T3P5UGMEqKemkCTdJq2WWTTA2dtmxpcYLorG2yh6TMwWnFtwifwhA3phvVTDzAVQV8uQbfYNQc9QyhgXR8KBUf",
  "key17": "2pFZ5EHoAMdGcW4EMadw7Q2TJx74QRjQYmVPBM5vR5zikLjvgEJy6LfX18taoRJ3LNhKjUysv5geYHPexLsnhWk4",
  "key18": "3UtapkJMbpucBpQNenniwHszVtsQkkr27KHAkdwhmUytSG8gJjtuVnUgiuAaEGvnaQfiWntXR2XVo99w4E5LMs3z",
  "key19": "3B2V4FLNVicdissHy4BzJLZkt3McMaeD5cVUPHjGXYDXpWb5BkRrRgwsfZcKbkNx8Jdwv157t7Qygkq6muN9XYf7",
  "key20": "4ULBdJjKtPAo467eopNKpZsnmFoPExsdKek9KeVRPS3Q3uWSzDxCgKdHp36qqJxT7kDJvnkPdYv9UDKHYnPEXVU5",
  "key21": "5TsF31aktEw8nrZ8d6TG5sTCEtGYtYEJmoWtPbG59tV3oCdFhuGGmQUvo5KixwzcWneQb2qsFthkxZfgheim6DS2",
  "key22": "4Q5xHFRraW8XWsF61vEEneNYhcLQ3AhDhUKdn2a1bZSsuTHJCvf5joWVWJbboDntA4FDhdjAMxqEytkX8UCnSJPp",
  "key23": "3Znu8N9ULpHcM8RNKcVj769o9vuc7cFCFcArpPn1dpR7LzDivrVr4gtu1Q5Kj2PdPSqmBwHFMf6EpEg3YiGXLJAH",
  "key24": "5doYYEyi7pyyfMYo5cLShPb2ZPaWbkxUZNzGA7rdrK5Kt5Eh3VEKe2MJn5AJ5cixhq4va9QGTZ6B6prDbiDAHMgK",
  "key25": "KLLZ4Mxuekr3NraorZjdgGWBFA15edM8rbmkoUt65ufuAA8AzkNUAhtNNfw5ePzfbLeNXUPfXknztQjCSrqxNbp",
  "key26": "3XJJcNo1BMV7ipnh8fTfYFmL5rHo6MtUi9v5BJXZ6ocWeHmQrPrsnRv3jNCVqrQyxYBQhY1w88q9vfcmcneuUK8w",
  "key27": "67pYxGbFTGp7uHypWGpGQAFm3HvUAcheomWM6nkRs2KnmBTnQ2SVj4174LfsSmfcEoDmpyK28wFJzs1RipScjkdM",
  "key28": "3gDtAkN1y9bGZWZmE5bFj4qCmLwxLj4exV5x9HGtxPTL39VqGgwx9X343sD7jnD3iiByzLtiEEGsYV58mWpTkn45",
  "key29": "5VUGzYHdZSPqeQMibPbY1TZnEorK95fnr2Z7FkAHXw1Wp8Fwju1jTEkd4ErQGXEBnx9KHMrNVTEWhpzmgVRUjTHu",
  "key30": "3Z6taVJH2duHMy5MLc4S7f72PUisXGckRkUGFvfNB4XwZ1NcLpW2SubicdnCK4B85K73GAAJwGv1o8usgvrNEy3P",
  "key31": "3qcMnD1MnwZtQrgE2gMNsSp5j4TRdac13vTNH6dfjddR18Perip2vsNcc4pfQkjBQvf8MZQ7q4m378s1oVpWUY2j",
  "key32": "124o2Ytd4uvUrc23nki67kcWPMEqhdWHwCuh1viEbcpVBUYuQ4if159VUFZBRgWANJTzdHqWaTnsgArnDsNTVNbw",
  "key33": "2brpBcQx7RDC8tRdBFisJHtai1LGfV7o1TK4qYVtNdyaJLFGau9ujEys7bEgu4TXncY9Bp9619vVhhgHjLvNevsp",
  "key34": "4Rv4ViYSHxeMtnVT3S5f7eor9GiaWDQad7nMjZwnbe9pRVr1TH9H1vuaAUGASXiBCtqJXwcJYLswYfDaKB5qmpSQ",
  "key35": "22fJVtsWCcGGRnjqPQwaYuchHM2P5PFAvkjAJcL7hbTgeN52tbrbDzUdL1zE8z3RXVVoo9KmNNPdpDv8mST39xxT",
  "key36": "289ra29J443uUR2DVXPeUWtCjjHmxra1nuov6XAL6k9pTJpdeMC1fqhCA2TUMUABaGPocRya8yP7CveSAr5HYxWN"
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
