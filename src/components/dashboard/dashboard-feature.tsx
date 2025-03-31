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
    "5iMQ42izgF3Jv11a6XVESxTyvFmVrNJQwG3ffuzTLWTmo7PaUpZEbU6aXgi8xVPhdQqaRJNYVX241hvpNbbx9swk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V9V6iXjqC5NSSzUaUwTugeDo2iBXDseWtzYThboBCTF2HECb4oQ9Wbux3CVWVhy7BFCDr2KbtYQjoasnVVYtkTK",
  "key1": "3EWPCLYxDELd2SrFRyoWLzE7BdLoxE5vHufnJDG31Ak9ujVvCw8ahbPXPft8vNSvuSVzbeXpwvBxBJhP8M4yfA4T",
  "key2": "2gXEL7cL7jnMG1rKnQbA2bv6kgNRdcTdBiHXpf97Np6NdN3gnCNbwD1BwczuUG2RssZjmPBiVKeRZeP9bafuMt35",
  "key3": "4TXcFJ4N1LCjnFTsJL4GRE1HoGemPuZPEuvTtosNNELqFWjMJprwF3SWLM9TA632ftNo2wgAF7khokxezBaHc7BQ",
  "key4": "5Fyo4gJYLnoTM1jMneg7CsaLqE5xwetojqAuEkth8mgpfYrpZMNLWjSs91H9qtC8tN63p88T46xYh2bHZTBbKS3N",
  "key5": "3GasT54d1fLw9ksdcGyfJYoHxgtdNMTQn86GPkiKoHBSEvGtUAdqua12vFVg7kQojpo75xUVHFMSomd3D5iSB8jQ",
  "key6": "5GG3bM9zzYC99wboLwuk975nP8nTbSRXxxB85EScC8BX9GEK5zfhkEBvuT3NDWtA4xF3Hh9geqE3RUe5Ais5nTmm",
  "key7": "3RgJaomEgYJDRnxzgvGf8D8MC4CATT1dGvG5wc6wtTCQzCcAxRsNXEyYfw9SiRMxhtSWgD5kKP2NRGxRC5QGycfJ",
  "key8": "4H5iRCyjG8LRhpWYEuwFqktqexzDHsBvqh3EBBiD9G71FMejp427EA25xa7SzZxkzCeYZbjLb2uDBehwG16g3noV",
  "key9": "47HKu6kdbTeEsYUV5i4QJ8UPX95SuRtrdyvhpRCFTN5Bz2egUpUk4JAdZ8sMjQtCQtuTCt4h4Kr2kxDCrKcSCm9q",
  "key10": "5HvR1hUMbwbnAiT9vARR7BRPBN6hAa9SipDi6J86mkEZ3fFpbRJZ33UZHovvTrG989d59zpEsSL5WC7eRoaqbDYK",
  "key11": "4waajDsoZ4V45UV7spHVeEHgG1zyzrBxkghGd7dBqoNXftaitHyHLo5TVLRZfYBfZ8gEzLpoPip2Q1oh7iev7yfE",
  "key12": "2gR7K7o4dRAxzSE5GZPDWKpdQnVrD8da8zqZsAAPN2zatfXLyEvYaJyByZirNgdUvN1vB93412KDFgRJAsipws11",
  "key13": "37DNxuSxFek2QHksLgzJCHSjP4jVwAeY6t91MQ3pdSfgbL72mt3aCdK4S3KuCuxVkEzn6mKxhiXEV7semDzk6MA5",
  "key14": "2KGxEe5y2WZkmeRLRywYbSoax8NoysP6ZQTiy8ZgDTPX4DV8PEaXaqsExMS2M7RH8cZ8a7JMew5yoE9BoYrKqkCy",
  "key15": "5AaX6t8wBwqCfgxrMgmTvfDvs2DxAijDHrezVmvVS32B4jLMY9PYWTPq3xKiDQa1FBLNKztyYr8uW1KH4vHF4nDv",
  "key16": "4jVeSbjyh34wtFdJzHsFiYXxu4VpH7UVXF49sGT9anBT3Vbu5KdJCwyQeh9paVQQFR8YPkuDmHsfid3wHk2Njhqm",
  "key17": "2frT4eDxi9m3zLRA5BcyDHqa7kvG7SLTHRYJi7ChA93rW55MRUivV7WbjBcNG71EiiNAD1zt9UyB4KfB2V3YFxH6",
  "key18": "53eh2rsGYbpivuk74axjgsB9Y2d11sxztbBdhveBJgHZhgEHkDXL9W4zc94XQQmYU7pkp1ziJwcuGo6KmLkUUUdY",
  "key19": "5ZX7ANffTmeEeNbMyZaTiu8PP7bqBHcsNoiqbcdYUmYgqRvGSDD1tu8w4vRJXHggbP6TM6CBfHMb3H6q59nE5MU4",
  "key20": "4CqYhSJPU3X9DHJnPXykU4KsvfYgzXw6xepcD73oHVoEud6Z4X5FUYf1hBrKYkwGiFvrrvA3etZ6mVdBNcyETXwY",
  "key21": "63ifiAiCNJAnxXP5kJwdP56EBdZy8XeXo5LMfDKkCWkoMgWVXk2UBTTHof1xG3CDJRfGx9nKQW4SiKsCLj84SiBr",
  "key22": "mKrg5Ly5JW4yFUDYxkDZQN6ciMExY1wV1JC4rVTrgfqxjyVb4BbMzg4XGgoVJNWc9XBWw76Qq3wNwRzpFhEBwYp",
  "key23": "3yRCZ7bwwPhj9Zty4VXT35HqKeDkvuajqQtyrigyw7c7umQrKfMrChutx6mwNMXg9CULH5aPfPWhxEXzrhvVS9pJ",
  "key24": "3Eegj971mJota4tR4Hp6P37LtCpU3yPmYbYu6zSK4gSDUEau9qPdBHvjkfYFD5BG6dVii3sWp5KMdeuqGhQYGuQX",
  "key25": "3t3vY9KFWW6QY6aMzT4PjPgGfL6STYZhQjpN2zVUQyYCHyPUMriYT8veTy5rzHxrWCtsZMwaP22KGnDkgU4ZCMMR",
  "key26": "iYyL3p6sh8UJL89uC2R2KHnziqxmFrF8H5akth9nNsJ6rPRRFwgq97yuRmRkkSDaoC7xF3Fvbh7aZJZKhB3eKJy",
  "key27": "2rwurfJPwb3YW1GjKbJwD3DYJDbgojEa4eBXx3XH7rTpu9rR5H75DEAHX46pLDoUZHqAoizWofWt9xi1sjxe9Ski",
  "key28": "STYkUnbbfGg6PsyNt3oRWkdWWLVhjQNhsQWum6Mv7SuCTCbowRP3RbjRWCxhoYG7sJiLv8QRhsoCumu3Nh3K8RV",
  "key29": "2u76pqoqqj8u7KJWow9jMLfEyAZoUk7BmiL7S9Rco9vN3hJSRLR4xA1y8QUf1NC3e2FDUcC8UyDdEFJ1GS6sPPKF",
  "key30": "3KsCoiYCkKv4i4NmHwk74JHRew15aQDd9d3t9nMpqVJDGHNNfeg3CnZmMmeiUAYjvPWMUEhBWJ3BQcy4vHE9eStm",
  "key31": "5hpK7GYPz28c2buPT2L8GX3imkqffTFLuxwa9r927R4hotKi6RRQPnu9BvQbe3gPTGYERxF7AEYVmaMxJL2tCcxe",
  "key32": "a43rvnEg2dZ32dnDm93jiYbLuFhz9kTMgiGHTmVeBD5wY4J7RFNMk25GaWND4fgSAQx9hWu9TM4uk2vB1twBMn6",
  "key33": "4RpQeWoxka4fAuU1x5mfub5EfKSAutpqxxYFgqm4eZLMCFEr45NosADkVNfAhhoZD1N1wSFdJ9MeL6gji7E6nSFa",
  "key34": "2JJr7wdcbjGKfEfKZqqGjb5od9MTXkbNvWUtPnqYagXSSwqtA2a3zid7xEPooMXHFUcWLGgcp2JPdH5zW891g5DV",
  "key35": "2YcB2mFwcii2EAaLoQxk9wffBSwLzXysprcUpxrn5RZCyScPJ6J5E4LMjyQjzUTidSmmKPFL9DbqUAiXC5sm2daf",
  "key36": "PbZze59Pv2m2YP7WPDjHYFgvPJV826opNoq8bzNdXRty2F3YYtDf5TpXdo2cfTYzBGSzAGFoSuTSXhQdb59Ubrq",
  "key37": "3KGHRpUATpCRNXkyjCeiTTMpSSfnYMaehMg7FE83WuZPpzeArCEFr6HFc8cUmjwzgU3iHKK2W5AYq6dkxDny1P64",
  "key38": "4MKXrVE7zAwnbYgRmy9yJnaPxX5w3Z9FxbKp8gwnsPivjLe94XGTPH6ttpCkF3q6XbNeG6UFTkLqoNRr4125Hxp4",
  "key39": "2r45h2kKjH5YRBEEp4EunRVxAwsPC1areHdcAQ7aPaGE2zAAoByemC4VHo1782HgVSu6DvqtjimL21C4p7vEQdQV",
  "key40": "4jhsXDPFo17zcoPrL4T7GCFjfxTXc5haZQKfz4ASKdTsCUEVQUqrYfsrsm4yjvdmtveiAeXbKYShkhLMceeX4Da4",
  "key41": "39DkuRdN1EYNkJWtzYvmPhSpK3biu8jbtW9sgMzynZuME1a46mSXX3H8Lccmvsnn3vPWv9e6gstrtAZWAkhEixR",
  "key42": "gXKJNZ9LXZ3L3jd4JU6HBQPGN2Docif2RAx6Fxgx3BYdQCz7P48ZKSwrGwXC3PUAyof69raZzLM7WAZVqEKe3C4"
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
