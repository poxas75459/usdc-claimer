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
    "5PUv2WFMmqxm5EtjqafAwBGi7KFFQn3FpFLCtWhBdMwt6TuWEtcaDc7diwPT6mrv6rYNvZPwvW7uzL1zDSLxLimG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C3PRdhXEUyDkZBMecvksdJoS6PpcFmi24rvMqdfBo4fesgaozGUsiRfjFQEwqfVZCEGozCiNukaYubgBRKh9gKu",
  "key1": "39hMa4T8bodxkfh1RPJmmKcYBY3u8Gy3skaD5Nff5yL69MmXYwrvkHkPEzFvjkTYeMLJQjpoSFM1c4fqP2qoEkFK",
  "key2": "34mha8ypuFN4xNZ44Mfun1NZVpvMZkgHeyrcMkKZiemUAkUaquCPhnh6zCSSzdpFbcCybnqqNumX8tKAFKtV4euN",
  "key3": "4CNEJPQ2QdZimqjwVvKA8eXYpMWRKaQhABo4oZwNtytVSaWEn6MrQ4EtiiUq4zgBGK4KBVSWksGcYmgFfBuMn81P",
  "key4": "2u9a7BQyq38Vmp1rn4xKFmG8MHEA57kZSZf7vASNmLtnEeTe76828zConDQCyrxYWob6NuY9PZraxsBGzdV2GUvk",
  "key5": "3tmoMzh6f6v3uXDRCMnoHCLRfc9nbv6SxMPF9upxRmFmqFfu86nmo1MJ5jaFoyxnxreENBhJfVQHgSB9Ds7vTPMT",
  "key6": "hRobEEV4rJ3iu4RzBRhxv13JsUyYg4hatQCHUgaBfzqS4MbYP6v6GiG3w6aFzwRMvKq35gvojXE3PAWDyNqRHxw",
  "key7": "57qaHcFsDPvcP1ZCGra9sNquTPwzWK3vkm2roxCJeUiYsgUtSZqHxLAUGscp72b7WSvaFexeDStYbWfJvB6Yiutn",
  "key8": "439DoJX7yBkc2crEbW7RpHYqMPTtoprr71bEG4btxs1rHkoNDdCVaJznewYVDBApa1PQbfQgk6Vse6nWGPvrBrkB",
  "key9": "5wCLPoMfU8U4n7WSpWtuSFGXtG2A1n1CvrPQWWCE6CtATNEefcgSvShLCEpJSkUEp9wb4gPxY55n3RemSjVQHsMu",
  "key10": "4r2DzsusHeePQRTwRnAVFq7rviZsecr9WZTSUX5ri8o9F6iZChNfh9fr9H24qcUbCD9hWHGe4Zjcnrn9R2wPtGvT",
  "key11": "5dhCYZ1pPVbRCQRXshPTbpyGP7k19J348uHeoiZaxXPLRrjPqM7Gcctt3NpqoKdmX1h6tAW2C7EuL3jnTgf8iLjK",
  "key12": "4P4SMpJRBRoKhi6k8ebPYSWJeKGMV8pBtk1CTyUPPvq1SiJkJRyzfvd31HoMhqBUK14Q8BvGM8XGWxN6a8ph4HxG",
  "key13": "4W4if7y9MKhh1QJU8W5mvHZR4zSdrJWtGWp9LJrFY5vRanmqDYqp5BkeTKm8Nxp45nkQb1tuSEQ1QW1FcQZtbCpE",
  "key14": "2A9zP3D8Nqj18UYTeGhsMDsJrAkQ17X6W9vMDUsu7wcn6aFxPBVJHTYsdxkzsESR2PMWVyV3h3Mx9WVvKFLATMJR",
  "key15": "1xYSyzL4k5kEqJFmdbcdEmdgUbjA4uLpwfKXUH5gjBoyR8Lkdyv8QKwep47iyrb2VgsiBywzb5gjSTj1fxfKN8k",
  "key16": "22PMCE5SN8QSja4YmMKU2wbxTQc5k5v4DXJrmoVWynvXHpdaE7tnsDobWz2eDtt9sUj1kMDhMSzUCw77w7DYCuRu",
  "key17": "tNBrQXxe46pyAfoWfVgactLZwWpsGMUb66zTaQkQ2FS54sCGFUkufPxKPi9J9hWUDgN5ozWonfzQUUtyvnsxBJS",
  "key18": "2qqPCWF5qbNTtw9hUqZRuzyDd5oAH9GMTCUSUpg5WX6VUVdNZjtCVCCokERtvZhYtAY8HhsTcbMD362WWCTszuSH",
  "key19": "ofRQYsWpPzHiRBEubGgvVo4C5MwenL1oQmyp8wzHAVQG4oC8VA7p5vdAj38ajTH4pHMmR2Zz3hhWYcj7ZGEJfh6",
  "key20": "2caK6wYc5VZb4qU8GLM5tEJWqZZfABTArHQCme8rXjf96Fja359SkkFX7fS4wMrjfx4Y4LJ4ixrwjGMrdhtFCUEt",
  "key21": "2rJ7CxRNmA1dQ64Fsincwa9uL9A2gS2PKNcUv9nYmvz5q9ULAPWPgaYPsqZYGBH3UJTfWv1q3DKBcYYFJmmR7tRt",
  "key22": "3nNKzmSavB794REPhGwVr9rCjmv6oKGHLLncXmmfWbRpoWMWGTouq4SdjTVCQJ12jcjYRZzQfUkXDzS6xHSgwERU",
  "key23": "5MNsmNiDNRPWLPa54KZvzRHsvjQKk4Cp4hEnHZXz31pscmAWXe3NaJsVb6iUvaozpMitz8ZjBaLcpKjfxoqwEjSm",
  "key24": "41eirhGgECdgxCscxB8dLHuMx2RfeBNTQoFXwPMPjoKvre2KL7z3RVoXnXFHtsG9q4U9HjFb5YFhYnynddMAxtPc",
  "key25": "nxxx7JfDAVnVMRXh4h2TbjWQPP2rHcx5dotpBWnycXjZLRH6nKTV4wHKfGEBPB9BoHoK785SRKUAFQXzx9XD3SY",
  "key26": "4pEPZaL3kmMNCS5Nq983HhYvNcFK6gQ3YjPrAYZ6LdLjZfnvtxQreUXqyqhXiJr5Js9PH8yUm4KFy5dD6J2r8dhJ",
  "key27": "59XBCMxYm97KqcLZkVsTLJuVrbpaQfY4GYPawyjtZE1RMFqpLNChtfonzqqjUco1RWSYeArZd2jDWTMQtbXmqVPf"
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
