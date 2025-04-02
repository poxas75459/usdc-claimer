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
    "4cVTMmv83YFphCjZbUePjx7o9JNiXK2TuRBuiAjj8nKu9KN69PQgDqXQMiN576cTDiWLCDvgWoZbkAHg6yF4V6Sb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WwHpMPQpyDRqKoZmnyVY9fcDmteV2fjoSCy5AK4M2NaPC9grHmxCFwG7SdsAvk763UGR4sVnQhv5DGStWV4iUVM",
  "key1": "5H5u7UpnxoqZ3KNyNw4C5d3dZ72eR1WUaRhLnVcK9ctThNx9EiW2xo66vY3tEbmjnwZEg2mhjWFjjg9EaAPTutzc",
  "key2": "xgzSzLSmQRDPBNkCRDCJNbkAbZU6PJgbohyHkkwgnFhv3LESe7LBiNVQPtp2EfoTeEGoUj6TpHKWasjnLAvpck8",
  "key3": "37NEoChHKta37B8RpsLrVVh54nWbhRMmzAotfWpjr5gyKyWW9QqUfpFV2ePRVdKUTP2VNPwDcmAthTUr3DTLiJCF",
  "key4": "5Ay2FQyBiX5jHNaCdvBTdpy649reR5AUNViRnFZvn9w5Nj4zWGktXVdprw2mCp9Q6TamX1epGAxMjL9mWjrhJU1V",
  "key5": "9txd2WTJXXG887hhAyKdq7mUeDzXv4s25KCjmHxBV94wmnbjRreN3ksWnWFK4JSoMsky3xrkeB61rfZmPCfi5rc",
  "key6": "5KPEuWB5cnpxA1DNFvernyrhVua3XJHXexEXbqLajcUhXzrpRk6pxMFcwQtj81ZNRrfShAbW8bWAxsKkcpLuk7Nn",
  "key7": "5UM15PymHXcFBAUKrxsY4f6ZUhDNK9QpuoT2auE33obg5kpEuPTckWeWmEBDD9M1CNKKVu1zLrbLi4pJk1o3ktSZ",
  "key8": "2CXwukTr9WQgUfGrs9kcsCMNkqWBAsmz97wm5XSiyXLSb1cZt6aMq1YfF4hqXXZzDbaYw29Z9J36dH1i7NGi3oaY",
  "key9": "4FTcpz5xc47i7vvPyfopsoiS4ZBJByNqJM45d1exDpeY3bA1obNdrPec3yAHfX4BKLsT6vM9go9pm5opkoDXAtuH",
  "key10": "4mtkVbVH3Lg7bZJBnYKEdrERnsPVT6K45gKsJ5AnTnRD7pJ12xkPLaLRwGDFGWf42HcSXjLtBnbQE9E35hDaidNJ",
  "key11": "3v2qKzvUmBbwzeDCYCUHsXA6wV9biZpuvauPVEkbkhxz46Q9jAY2fKnxwLb3ukMuU3obnk2pJXqnGE6Srw3Bt1TW",
  "key12": "2xbNRBs7T5Wj7D6fhKZP6NxzSZto2JJ2qemkN8qR4Ld3o3AKiT8hbHmX4eLP4MJ19AUHvQ4g9oThcW3mRkRm7kzW",
  "key13": "5HpSCpsVqQWJp4GKhtNRRZQJDgjtAcSZtEKG44uSkLi4PPNyR9vCqw8vtSrjphKxbk6eYWxp8wXA9b6GkJLWu1nZ",
  "key14": "jEMGTGyZgicU8ASW84ru1P2AzQ6p6Rat8ps9JLE5Uq2jhp9DNK6kzd3r4YRJTWFAKV93J4y5EQY4yJcUitykrr8",
  "key15": "633DLmCUotbNXxBRRczYg7qZ5ArBTMFq3uAWuGXhcSEqZwVFnCKNf3MuJ6WgCiHDzmBYmXirf5eUvwBLTguMirDj",
  "key16": "4tHesXrvGCApqmNbNhJRiAQyydojrkL5gZMpbwodNYGSR5V7EgMzQzMg58FjhnS9UmKySnZXQSz7eqjr4VK54xVS",
  "key17": "5DxeM7cjwFoWNrfC6f4r3ECwHkEioGoCST4JuBDp4LXqW4TX3dJxcZ5dUiCmFi93s42PMq2jVDNYdQLh5SUdMHwn",
  "key18": "5RgApRKh4WkbTrnZc8LW9JUXJQ9Avtn9XaWajHCgDe2MgJh31vcEyPQLakdgJ6GmKLiGpYNXX8ZQX5qykzsyRoHh",
  "key19": "5SnAbtR9gSaQrU91jBpLYRbdjJ86U5Fp1rpAj1kRcz5PWpwfxbSgq4oGi7549X54n88AeX8ppZEwJVQLV3XyTuAb",
  "key20": "AUTrH3DzK5VvxEMkYvPrbopxouiNUJ6NcBAN8ioM6GayjSxqvPhx8Zv9uAW4XThBBsK91V6MfYsGQbQDTbFSpvC",
  "key21": "3oi8kWjUcpxs2cU7rJVSNg2xMkDhiQCabE4PnJ32gkDhekaV8AVEXLbGqH5jpNeSpTHj73HfWjTMxydAAwPk311F",
  "key22": "8m3ZtnALoCi3dv4pg58AR9EiLiYpJnqt4jhTfGc7mvJA6qtWpocd8KPGrA1qN4JQSVutDZyQS3MLnkYAtPp3Rcq",
  "key23": "5tc3Jp9x5UbPECr9Yqcpp497pMx3hceVh3wy6BhJZrqnidz5Gw8Ku7dvvDavAEtm6QsWF4FahfEtAJJt1x6iyqQ2",
  "key24": "3aEyF9PmbF1zV3PV9EegyyUTs7qNpScwiiicP4QBHiSEJ94Pyf5XN7T7JLMrXkM6m2v9Q9rv25WkrrG3iFfuYgx2",
  "key25": "55uR1qhDEmAEWMSg7Rk8L3Zz6qTGtwCpi3dchvfxESLPKPgp3U7GwzTRijMCtggHTz2VKtk5MJWZNcXnpDbvYFeu",
  "key26": "6668y9vsZvVYCY2aJ9hDHMgtKcWUQJsbsCwFuUccHbSw2orZeB6ZSU87NDdvaxouKqnUR9WkmsaaBXGcCufc1JPQ",
  "key27": "4YtRuLhkxYiwLM7WcBhnYRaiRxwCqZQ7sBwERAnfrPcZgZgR4PDTqqU9ZXswNPJtb8GL4n3hhnQDhzGzbhCetgR3",
  "key28": "2fUWXTZy6MtHrYKRiVmbpEHnCx6wXSbeni3GNecEkcc2ZYTGzG1u1iP39YZYm2g4tWyVLAzcPnHcNNQWKaUpKmaQ",
  "key29": "3WHmcnrgPj27hFNJx7FZ1NZPBeDQRzkyhhDnXQ6PrYEyC4xSLpt9k2djWJe92seHsAgGYtXXig7KypsVBV6cibiC",
  "key30": "2heQL1UYfYZcxy8ps23cugZKhsDaULNtqAPjRkSUecYbYksXMT9wa46qVqUyxinkr8tBjXe7ZXHsXUFkuzrdUXyJ",
  "key31": "2jNAq9DorXBtffEGoEsqD7KpVyjRFtaXvG7dYHwmEF9x5YdYvrQ6K6K6eSi7k62mSVbtTetb3qdYESRb56PGBfbv",
  "key32": "2QXuB7JvKRmAbXBWJcdwcoJK2hu2WbxopzwG2Js67T3HczAuto2x64YL5owRJsN9csgQJEh2u16MdHNMf7fJMKZg"
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
