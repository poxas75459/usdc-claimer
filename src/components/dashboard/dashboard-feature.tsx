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
    "3UZpoUaVuURxTDdPDkfYnRJ62BAKnMwvuNosrUNgqUF3pWbzawYUEmmc2hXj9uKrAVDfLead5zhatdu65xEAicjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UuXThYMTWj9swaGTiVPrG9dChLiXBhiwQVFpJo7kjRDhwtxUKzJb8AhgkYCS4aPQnU6chnxcYWX38H6w6Sdp6PV",
  "key1": "414JQJxq4UDYTBPXDzSTygTjE6ZuSsoUUPJmAe6EeaWCNVPThWdT8Zc52uQYLY95KtgMqgDt8jnma1yU9PEn7cFS",
  "key2": "5Bgbh1Sb9agaetp2b8EJxMK2SmssZrwQwtQTgQLJD8aYo5YtnVCbViJ6zjUfgZoohTQAUrzjBkXR1jN8ykstT4Q5",
  "key3": "5ffQwGUExgg3JsGjkLrqEBZbRLkeFn9FNWWbeAzEAvDYqyqJCVvXqwZb1shyiroiADubU3V8Vfn18KrnfMHr886Q",
  "key4": "4GnqSYVTyMNxbjCczDNoUEiauBQuaEaafU8Zq9CmHsuRGXujGNAkydcrRbhiRyBmLrA5mFVu6ZW9QK9WE5pZ5YfX",
  "key5": "4aT84E6ZqtT7epzngoc1DTDrW3TJnY4Q34PWQ7CVDZWuzGSqhz2aeuNfo5ZzzfGmJMeRJ4De3AsepxYeTWF5vnry",
  "key6": "tnxfd9ihBdCPpkN2MFAbqAfCghxeVKrD1DHZVJPacgRDPHVyp2WGeoApQo1jYKmDr7p6BEWLaLqaQHGQm9Rahdv",
  "key7": "5UThVTRFS7fH4yoYrVKgiCMmVMwWnqwVXs39YwxaBKevwBKZbfPrsZUzFWVAbrdm3tV2sjYfipnF1zdQfHu3PmSb",
  "key8": "4rNJvbmc9tFJzxfmSAtz3xAq6Z3eqYXRsho6WkKrsSYtfdKUC3LasiDmLJ1WXLfofScw13WHjF6XgdWHis9Wxt52",
  "key9": "5TKCvi1ya1v9BcDiziwHLRBswXcLiqBkH7odQ3FbCYEcFkFHqfYCbTFbarZvrYKbP8LxcRSoUtRWUbHJ4v9C8hHe",
  "key10": "5QE9Eh2jFfSfAt8TgYZTB9ZMH85M8iBh1P36h2VuFogRuAtoJMzULQuKRSiwt59j3u6fu33uZs3NuWPWSeAWiTEE",
  "key11": "5EybgJAa2fVxRbmNSvA7pYJwYCzTHCBzX7fZJv2Mesjpsk7BHgAQzryPTZtSRgWzSjxoGR1Sd9MhHU7ZiijeApq3",
  "key12": "596QTwGkgWBtrrA9uhC3hDibyMCRsCCFKVZ6C1yd8xK6nNZtuLxyxMTpVS4dqJ65nJnW3yFGD7f7gNNTRTTgQbti",
  "key13": "2oK9RfSWka3Wmn6B4GPMC5xudPPZQpuq2ej5nVtYg7Fxrp3fq7NwWe3j37ZkgcMRBNix92A66a8jgwb91CvsREQL",
  "key14": "47B1UHsepir8kKj4qXFE6cmDFVeUF3b8WAe8tyMpyLUoCGQCTHcE8JxgbUvRXjzFEceVTVxQsyH96RMPSd9RvPhv",
  "key15": "2ZvgfeFqUeiHvWBZhQ4yNVeQTg6iRqCwetvYBh5WFUm8rS6D8G51DPKG9eQAEfrxQQT32yR87DGmd4ejyCLtq8wE",
  "key16": "dAEg5Vd5XnM9TuvowM7iTiGvSgj5TEDgCGCHw3Pbcpp9XjZUVeNdEpcneDCpJ5gNDMTAcBAd5E2oZaUcUk4VqcW",
  "key17": "3tN5A3yKjukwnw1YmmZFXrwEPFVyqADU5CMZfnzKTAdetmRxbTbh4SqJa6cs47vM4dePNS9zCB8vZwZMnGSoENEv",
  "key18": "2R6fx8uEFzu6tb5gK7RzNHh12e2aMBFyrerUkh5v86oauJ18JV4FQUxtDDZMenfMUxxYZLUax5pYigXoa1pZY8LL",
  "key19": "3gHco2TDcSxfYMTo2C9W2KYoUwMrPz8BhcSK5ZcYiAHHS4HjMS3sge7zMVXJmCyUAiXyUeA3fCKvx8FGcSxx5NgC",
  "key20": "31Cznm2cppjQryAg7Z6q4m7puidN4xy73CFgpzNvU86Y1j9NqnMpAPgsZwuMHGZKDLjWF3BBBKUm8Zhw1HeXWHCs",
  "key21": "2BGaFK4gY8unpR1jqPbdtE1Geg8zLmCTEiL3fSt7wNyjKNpaYbwV5RwnbpQA3wNDctfx1ekVkts9zJChqkcvd9B",
  "key22": "5Hg93H3wgFjNGY8DH3xzo2y4SqqSziq798pdPttZwjjD1w9Me8cEad9Ctgn2wnSjM5LYJXn3xgZ1qPK1cp4ND5Q7",
  "key23": "3R8pTUsZA3qZ4KFk4hk1o3W1MAxTxS9YnEAptGhbAd8Kb8bR4DWyk4gBeiQgnp8ZUFM1kLyV52Kg4uz2u1QCn7Xf",
  "key24": "83YiqX6abL9iWEaEdTDHxmFq5a4GZpwxZeuREpTFpZPPoM2djR8jb6VosatdEjVbtRLwK6GP57LdYmVnZeEGBqF"
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
