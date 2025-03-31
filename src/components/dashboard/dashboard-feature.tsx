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
    "36CPwV251NmXewjq6jHAQSVGZvLvdCMPXB8dhU7cQTfbaJJG6Busn7dPHd3EQ4MRagtyykmuCCKDkSBwW7RERBXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QCfwWahnL91gcEQDQob1CvuCupYu6qUZi5BUsHEb691vbv1hvESt9GsCe2heVEaiQynVGaFSPNx67Y8EuJDFvk1",
  "key1": "2YAvNy5zRiDEtTYWbjXuCMAFeRsRqpKsUmyBVMoMHtmPLpj9scrA832J3ozeHSyhcrvSm3pb9d86UVXDTcswXMqv",
  "key2": "5qe6upLWyCGB5jLcwYmQDvgwGEJvxKWRmePBwHrvJoCwDcQSJPkQG8NE27JkBFH4indF8pckTJVBVPMvbrxPLPq9",
  "key3": "124BSQscYDcGRGzRc9czuYj6uezPjqdE8N6DKPSjsSq8Dt5N37aPPSLLoTmiBtxBibzmJ8qa613vog1R3knEMQk3",
  "key4": "5v3hmMTqjEtVwJgxcZWvFb9qYV8Fhrp1Mg9SLDZBoFez5ubgnk2qtr1gzZc592uWNXSpQQdT5GSwz7UcH6mzsDUQ",
  "key5": "4U68suZccpkmieNQZuWfSjhBk8Xsun9bWHUsWs3TRLdbauLU1RZBcmaAe66RYSFUhLtwEE9U6pHEgh62cUK7MoxB",
  "key6": "BjUZExeZsarCDUQN5ANVrHGPBV5RHKAQkqg7RHoj9EEXSFijvgi914Hu1U9Kdwrd7ze7nrKbA9t2PdxZnJ2fREi",
  "key7": "4tghpxHXuoP6UWba6yFis5GKno6Er1XzGKYouV8pzCx87BhYDDUvCjHUT93655GGj9N7e77PmDfgpEn3mGkZ7A1v",
  "key8": "bkqm4XTgkt2bwhtAzNEpfA7t6rV7gAQtM4qfJcjUEmbQy3wzjm22cToVmYsXeo2JnbuYYo28g6bbRCQ6xXtKyQz",
  "key9": "2K9xTvxBj6s6u1mHenS2QGKu9Vcm5vJ81ZDaXVEqgkAoNapByPFhm6EUoppBVpuTqUhqDvASw59Hg5Uz88rswy52",
  "key10": "5F1LCWsG51ZX89pSkQA2RwEQXH2eh4ofhocHBaktoBVGymtroTThfzuqMhSPXqEbKCXXzgipk4QD9cav8MsCHaPX",
  "key11": "3fPJXtxGeFzhkZxXg2B64axv3opK4R7TYtNxGAMjVtbNiqmTRBLDHnYsYGDbgRLV7cjQN7mjd5nLraop5fokd16q",
  "key12": "NBBVknZAxqTJEi5fHSCmn5ktDHe8GJNwSpi1hgsLsCH38pHtPBQ8VP7wXcjbto5Cr1Z2QqggEgj2gHDVSBwLWqX",
  "key13": "4BRANsXL5xCywBoscMujetJCdAUeVdDviG7ZGXHiuxfm8wUB1VZEBqYjQEaSDWnjoLz7GgpWnWJHm8N9gsxPNCJg",
  "key14": "4tps1VZ7eDywTh5HN7cvGwreAM6kDLFeHP28Rma8kXwwtkAPFbwVvSuW4qrJD33ZXwMB3xUQN9S2Je31ZZeo7UMf",
  "key15": "4MqmdQ8ggfC4pjBgt6gFrUVDD5kPGronqoYyTmLG4Vf5jyGEtF4y94Spat5aaWUwpBM3LnazC44B9toKdm3KzaUd",
  "key16": "3ryzkzgzXwCKAS99qx9SpMQx6VPxo4uzoj5KFFaDSKZGD2ztxzZkadDcELez1VLvgm8Eo6giYu5NQ17ZqgnqmErU",
  "key17": "3soMZu5c2oSXRrd8uKsMbSd1p6is5vnV9vtbLuHwiFWbWPEiHJ7wp3N9aQL6eze1oHjmQEbHXMuVyEWXtWPHv4kc",
  "key18": "4xnZoZgpXqB5xtqGnUf45wYJbweDsikrqpH1u2yTqJ9bJo1pAzaJLWSyvdLCsuazPk5V7PXgWGW6ZXGtCmJLea1d",
  "key19": "868PYJwt4aWTWQoMvyyGpSFpzFB3Dms3MXqkPnXLf9KTVisJ4sreFS7NByBncnSUKcB8HwPyL5bGyirXcHcjETF",
  "key20": "2pdNNDFnTAmRt6YLHVnXuh9JFy1cQzVZceKHUoc5jgbidrXbcPKoKoVKeUZ41UREjon1Vf6wudJe6ymdaQRzpkAE",
  "key21": "3SQB15h9PJqJcgxEtueYUnS1DHfwuPVsFrZy9UwuwZudLZfU8prmnQcEVDxnVQvgNLQTaPmFqqtH9y6Rha3w4f2n",
  "key22": "2vz8VMsG2j65GB2et5899MKG4BXRCr7oxgPGg4KymuX79NTDmzvXTTiuJc6PKEenD6fRHbkqcdwhoL44Pu75kFoi",
  "key23": "2335YF33ZKBpiLKp3ZY31voNq7mjw8ksZcqV1ek97jGRY7wqfRQVV98gLsXdkzDnHkuVyx5YsfqbzupsxPfHvLds",
  "key24": "3TayFgGL2HHdB53CYitAjZvgc2CEehvshYfb2qGN3GWX93JJ8aX1224YmpLtUQZ7jb6jvVzbHrn1geEftNGoejRJ",
  "key25": "2212dDW94x8z9asLPxeCp3xiSLcbvZseZzLHsgtEbENuAQQ9soL9eWuhRdofzxfN9YP8b5Atv74WkBhf28zrYWBC",
  "key26": "4NB6QHphi2cCi73LhD5LiGbxi71oPsVeQFo2uZfAwYMcqFZchB5VZrAN2kxA95UV9tfZZ68xkJDWQP3dAixZEcd",
  "key27": "5sLLRESX1HP8T8cTqFqGbvo41UqZxj2W5kKfWvLcefc7avJgStKeZyKJ9Tn1WhS5QaUF1CMV8nXPDcM1m3eJNNnn",
  "key28": "viJNg4inFzooQzfkyjPB1bMWndzfW2VsEBxnhHVLKkqvhMu62VjET98UfdL5TdSmC9tutravbkzvddqM25btAXz",
  "key29": "2WFwL87dwe1drNPHXq2CaHv6GEZmzTkfKJfEdUPfNY8hr7KqFAh3s5PieY39LgU8KRH2xtvdPjBGf4JRKdeaM79g",
  "key30": "5zLG8JsW4RNUhpxswhqx3iYZaExhWPdvPaYrvDYpD258yvfhq3vX94eDygtwKxZjgxyaWhzPzSP32QRvePm8bfjh",
  "key31": "5xJXpAo7d2YcdixJPdWNRJwhSQL3P3aUi2wLKJEEmXBUW3MuGpVKvq76Mmx6n7tJC5EHkddh1SDMWcaFvUhTmiBK"
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
