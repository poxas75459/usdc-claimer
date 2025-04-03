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
    "mj943rxQMxP9VAPRy5GkHMjczSEFSZ79PzyXYx61MHFEsFJQQtZJgP7ZKjjWKfG4KRRGd4qqj1YYtS6ZScdCEA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JbjtaAoGd8HUt7zer24HjPYKBQwtLvrQwFGoJw8j58SaHzjYntFWvLWBaQ5fVpF56hYJ2iLakTquda51vUUoQTh",
  "key1": "377r472Eo5hNsSJHgV2RhwJTdkFWpzgzFJqnBeGtMB6hZuX4UwSwrWenN5Z24dYXX3K4N5StXc7md3McssMZ9ogb",
  "key2": "3MMBLYRg9ggKRwPe3aqC1WdB5qwhTkh5WcCn1n3RC4YZWjC4MKevxkdUtkCNyeZ2PWcj2mQTUkpJYVBxkv1QB1eE",
  "key3": "3v1Zt1SGSwL7D2medkWd9SAi54KioUCvEJqJK9KC1SYwx1nazU2SMPwpHUDA7Sh3fQ8zC7wsztpc3o3jTJMNMcw7",
  "key4": "24fjAagjWrDxNg1EzVDVsk2skZNxQxTXcWFKkpGpfafQofhLgxHmBC7PZj9WPMmzkcdrzJ7BGnMLvf1N15tiWwcT",
  "key5": "XcT5xiZajyffy3S9KifdUCi2c4oYrQ6bWR4DHrvjTcmhXuGqwBiTSKP7ji4mjP3cdF6Adietauhc7gAPjoLWGEp",
  "key6": "XjYW48DPehnnYBLdJiSEmpHof92fpMgEvJSxKf4sktNV6dMmJwpChXhu91FGFD3GUtuuTXMMdgKgvXCrYspXkn5",
  "key7": "SixmhXAP6jcTnvBLqSqTRGiT18t59Z4jUCDyazJgFKe5d8zevjCVunYSVy55pypNgzEQAiFS5MR2QKtpnw4VDA4",
  "key8": "2c8gr99cxS7qgdCVeDkvoXqmL7sTRdMj6iCA1SxLhvtZqACsUvHJZBHJrB1KusUyytsqevNvZnFSG3yb73kJbzhu",
  "key9": "2QSzBeWBcrX4v2CKAvMxPpqbWFsUNmGw2uAipqqYnzds1DCN8qLo4ZPvyxaKtyzyMLKreaB5gXavLZncNH4s79jq",
  "key10": "31ovHwKADKzuKfx5sVAED2crfChCDD99NbjBgVtAxifLYSJQyqfYyQVS8eaUU7QJdzyv4mHmA498nE5EL43UnMKt",
  "key11": "3r8VzM2JruQRrhnyeWC4kV833BobEuKopaQEAcDrToDcHABPgu1WSdW8NimCaxnscjCnERh2TxaUvTm5o544qpY9",
  "key12": "2fT67b7fuDM5NpjsNMbVeJCmxS8zyQz5Hj8CYQ1D23HvZ6KQTghoHjGewJAekN626jBpoAsBXg5fkPsw2n7cRCqY",
  "key13": "3jCi7ux8XMoZVK1shnSzLSqEowB3PVpUP4Gcr3QuS8Cd2ZjS5TKnhGyrnMXtsGdph4reZDPiWqdmALebcgVQjnu3",
  "key14": "3CuZHVmGwKgMLDFsGrMDtuNzamD5Hhw56H4vtRWC5kqottcgdGtSkvGyqQUUjmVs6ao8xbLdi1JoW6ydcsQeNnor",
  "key15": "4yVPdrBuwLUM76SvoJoeNqWBnZWAjpVLmtXwt1uo8cpo3Pbcpneb3pmwc4yvA7YDynWpR47KvJWCykDuQbeBM2tx",
  "key16": "5xk1eVTHFSJ8jwbUs9nsF2zCHTKb5Rpq5usB5JNeJh1e4qWTd9u4JYm3qkNbMsvbDzCAKfqtVcm26NaWRCAeBX6a",
  "key17": "4MNfCs49d9y51wGun7JtPmBHkkMzVTDtKaVDT3UV6t5ysp7SZ1xyFEzFV2WgxWoTrjJR7m9BGVWCwXYyaQYt8pSB",
  "key18": "2SxSdb36Z1i9fD6fAhqo2zW4FL4cUEkFC5j75aF3jBV7t84k4buonz9fWuStTMm8umq2MAvW8p825mbfKgQTpHoF",
  "key19": "51pMu3xsQqcCBRoPywLb2uxJaGg1Gfu4Ct1QpC4dftoxN7gijX5dDRWB3HxgKoV2S9pdTegW373ckaKDNVSdyp2g",
  "key20": "MUdxNggirjpz19VoJJy5MwRSnZNgPcBS15PUDCvo43AsvX618coDHHUcM6f5SUSwFMPQZft2E5KcN8tmNCzTX7D",
  "key21": "5MccWnMCwnP8Myypy3feWMMB4Kipua85KEHX5EfnZ7bQHEMHnqM5FgTZPa9EKWvF49vBTzvicxXVXzZUWZTvhd26",
  "key22": "5mBTdd76bQ4yhG25dN7iRCRrKB7sm56AgnD3vJurWZoj8APg3rYEx7qyMQeoNr19RYqJjbjSww2s6NqkYpcq36He",
  "key23": "4P5Xjy5qpadSia69UMxmqyxcMf8zhA5ZEsEaJfSLmWSjfg5qCEzZnkaE2mXCckutaVqBm6eqH9RiaSxF2xLbLqmA",
  "key24": "H8BZA4sJa5qmxxH8Yysdkbm6VYtuFewKLxKpKgTaP7TvYnv3JkK4S42zTmRBo85YL58PbUkatu5wJjFdx7AHqyN",
  "key25": "5RaqHA9mFJfHJseHSLr7pfgZRt7goqgnCaxSRuoz9Go28PFeyrov12q124s1o99odoRC6cTLNepf82uV6ZyGUjhr",
  "key26": "6P1YdfCPs4aWaLsEPAQBudKk71zzp7GRxN8YjWZwJvTA1re4htVem8pT4vU78S4skLdXGr53bgDibfRfFctXp1Q",
  "key27": "4kkhED7J5wFBhpV5skfhwFUpZBG6ysgscVBmKGaMHtvYD5Q2yCnmmr2bLB6EnJyPpZ9KfCFpDxw53498B5od8EVj",
  "key28": "QZNHQSketEJQdNjvSGgYx7YNdJAFy7sBedxURTDymLmXhZm2LqyV4J332TvJFsqDb7AjDMttUaCE2zecHAqovph"
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
