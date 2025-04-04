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
    "2stNJGWtv3i8iqFXquWhPvcsHUpv76hHAhRsszD3iHstxXUZzYGGNf5ibzJMwUcvh7ToQquhk6jhVG8eMefJU7Ja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38MfE6roBG7QE3tKd8zsoUd49WiUHV6JLdHmWE2fNJC8dSTA9e65Ps7LKpwUGC3Hv4xxhgtTibMr53kDNPAKJf8z",
  "key1": "h1kZajeV6JCAuXTme5TtCsqaoKKpnnez9zE8jrudshwzeq6gVfE4WjomNDY5TXe1MDjwXzPNCvJy1N67b3vY6iJ",
  "key2": "3oM84sDLPF1ppgHWfZDpTiUboiaK9NiYwfrNxM9oyo4w9KE3QfuNbRWcwKzQCcN2rFv1JALeKXScDi94EdT8h96G",
  "key3": "67BD6P8u9n7yZkc9iQ6msbvkuVvziFZB3GFEjAFwXmqHVg5Af5H6TJ3gVoStTfKq9m7GRYmErqNgjZr2rnNvYnGx",
  "key4": "42swZ2DCsMENem9N6XzPEGbNiWfU1GaGuRimjdezJxSq7KuSUx7v1UC4tHpq65uojrPJ1CaLqm1mGvyTxAxHyx36",
  "key5": "3B3wXCBHLof7B3pvbHAvocQJQxZnUdGEr3Xj6ayDCyDqTM96rDV9rdod7HEDGNquwhHjpeTFsYFvaBCbxXai4jZH",
  "key6": "44c5YJwnCzm3CxGUtUkee6f8qgsXs5X17EEAW2bXMcwG24sphpcjhUKfTV7dZfzH6HCRn4jvFz557fTcvh7qbNdW",
  "key7": "5XwntV7qyRz2FvkRB8yL81KjZyiqgoe6EUiwccX8HPx9v5pvGDXTuUU6zWsQudgHh2oceDkJAD7gm9HzjnQ9zVQA",
  "key8": "3Bz7MaQ7m8Uf4qHsMsaSzGNXehfMYFSgsdV57KejH2A689km168bSyeJaJinyFVhQKqwpT8mTuHLHcMzgkrT6jyZ",
  "key9": "4dBfwu86jdnuUVwpnDKZ8UnQacHHkqi9tkMiu6aG87M8vGajWBVeRgtRmGVZci2aSuL3azHCE4ZPvxbc2M6fFwQZ",
  "key10": "5nUMCBp9NsD2x79J8WTfgd57mAmrtxmoUiZik4oBUz8ZqeEsq7aN1m2kSBX6cSYnnLoay4JMXrdjf8Cwz6PR2yfR",
  "key11": "Tm7eesLtDPZF8ueSuRAXumh1rQE9x3UNf1spgAnwuFexZJSRgw6m5e71Gd5NbHeLf54sgbqWJHNBKpfBJuoCoDZ",
  "key12": "2nM49EecRWXa9HMfKtz72EmNQNA9fCj6Sfq9ZxqfnVcYH9Nx1aDLV5jwfQrykK8yMDesfScfj55ZEcKkCUy5EqgN",
  "key13": "2oHeTWh8JSzFRciTURXFxusixVMhj3SfoHK6UZMfAA8avbaSRrvb8JjJY6iAXEomm3EHph6rzgUL4RbY37eLMxfA",
  "key14": "4mqdm8ik2XJg6aZR4VwqSCpqvKXUX8f46XFu6LV1ghHGXcQxUCrFaounHhTry8wAwQfyK3n9NRShvNUHbRQYd579",
  "key15": "4kuTwSvGMKvb5KoqV2xNVcBQ6UAXVT7sfTei3EEPkcjJe7USkdZsqg25jaECTie9JbrcX8etk5gNxnLveCPN3LmG",
  "key16": "EcmiMPomam6dstbCaKXQHSpTQeXTpwWNiTjzyGQYvcgZYfuspo9nVvbeToTK6h24M96ax39ykcNh34zMbsdNgtV",
  "key17": "2WP8RQayg3df6QxmGMLSQvNKiGjdvMRzzxnJPk8AedTkoY1jowR3ADQyReCCoLbvmQ3JeQHH4QDETMDJUeCmcbxJ",
  "key18": "548vc3diZgTQBj4TeL48zQGj4si7arC1cecPYXrxaSzdyjyxHTcGAW5e9yX8Pe7VKsQWHS6geBV6ncxnDHRs5NHd",
  "key19": "K3bXyobEoGTKGTdGhaS5N9tX9cN17D2T7U53pUfPV7A2T2s46Xo8MrmCAUcN1uadq4umRqC4uKLfytK4PXJ6Jik",
  "key20": "7zgYWMUeFghzPznUihfCq1S14V2MJ8aZnzjMvjJnqZHiZeUMZQVsBZwVUcNadvLV1XCeKXXaRxmwh5uUgCXMdk5",
  "key21": "2Da2DDDAsFqMewsHs4XCGzPDXCqde6ovuFnzUrrhTTxhG3aB8h9ujEz4UYWk7Z23TGE7bNCCBCkWQPEkABToGyi8",
  "key22": "5ty2Rf7AhzG8rJRxmmfj8WjWaFeyfavx36HCqSkbv7XSaLyQsc26Wuy2mEad8eaR77Z87LJHSTF8j1vERw9VBtdG",
  "key23": "2hRKW4yFX7K7bKnjruBSj9vUvbojshqTbuVBfBHjLVd49mNGRajEaBB5LSmYGdZD67oacsURdCRpvcJ7cD3KFJz2",
  "key24": "2cSpL3oJT3ciMXnGQMCffefDjP4st7T3Hgq8zHGWjdLU9dg6tSqHXv9gxMhaW3kj2UWxjuhXHTAAd1fnskVzHN32",
  "key25": "2bCvK9eQDmpGQ4MQ1NzjP8VWwFsYHXQZiurJbb7vomDDg69swDsU4itvYCPSNsi5X69o2iY1yDiTxnAauAnboRDP",
  "key26": "2oYMMthkeCsVhpPUP7pziYv2cqEoC5UsvMe3tUgQpF7ZHzyD1wWBHbHKEGPqvRNk8vw894sMShTG94omtjzDmCWg",
  "key27": "3iki2bYJKYTQzkqpetZnsdYz49t7o9C5byaq2PmM22hq75rEAiKf1WrZe4DWrQz6YiFVwqTkE4VG7PaSKz3z7959",
  "key28": "wFmc653KPeaRemugicRvmaVbetkRn1zfaAMSW4RqmFjCyFfG8udbVqCnV1KkJz8UaZFPV7pP1RF3W32PiqL7NKD",
  "key29": "4RyFE8UHYW6puHzBRxscTAvx5JEcjUpStoweb2yPJPuimmqekCYHfofsfSmJB3EKegV59qjEvTfaoQZjPWHkCgre",
  "key30": "2srrcLhjAcEkbnmd1jGqYmYneUtjvgASG5DSJ6rf4B7aPXNyDUhTWuPzEBeXpMB389b6u5GNCwBA53CGpg7znMLV",
  "key31": "5vmPSG3xfvveLZijTHEy3oeX73LzoNTVtX2f991kfVovFr28ucWdNhsEHqhvJUGv9CxLDgeHNNbCp4SX9g1vU9uW",
  "key32": "56yrqzXTanSURbvUPeKZjabykw4BSkrfwd943fdp8zVoM8VHGd37SkANNnsC9cG3hTd6KeBLR2czMXm5B1tX2GyK",
  "key33": "4A5wtg2Rv1z9DgssYPmsh8dW7vCmp1zVPeDJWHoAEPi3ihW62TuXVhQu1va57P9oRUDX7bAzpV7hacab2wSHQLZZ",
  "key34": "7x6K3M9NxeaZd5qMzZou8MGAEYcweStzSME6Fhr9AEUEdn6eMQcPHEje5tvsNdFQka4mH1goZWmz4w9YuMpNCeS",
  "key35": "UjCsYaQiBHKjdhzS3HLHcFGEBmBWRgPp7UcSrC6xE7jprvzn2BATJ3tay9GeKAMgdHRPhK1yVFSy2tFyNjwqJow",
  "key36": "4jjzyR5PXsMHYHVbPM7HfXGZtGWQZh85gih4EFVACFTFmuU5QV129aQ1TabGiSj57ePYdcdsjrHvwwFRu1Pk44yE",
  "key37": "3Vciiyg8L4gzckHgrzDpuzjR4Xyv4HBoAaPfJTzkYzsBYkonMZEbjyzx9uUEvuopnHyzgMa9Fb6eNbXTBDtetFmp",
  "key38": "S2UQ1fUVUCx4m6XJru9VLT5aDbUZ1UwyC7foF3n8tzSTKSfohxf6ckXM4kqNccEjzGDYEyWieRj4xqxcZ6mF7R6"
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
