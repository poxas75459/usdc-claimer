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
    "4VHAWvsbY7vuCyHPM71UpJG4s9vjH3TuXHdfPNeNuGQRUGPisnpGFx8xdGkjgt3K7cBD5YcC2MXFXnHgkDXrb4ES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24DDhPVcYgHnjj9CynxTcVVwR7vecNAtweYCSph5gGHwqK5hjrSxc1tWkRwpzwhTHrBxaX9SaQUJWTR9h9bfp7GW",
  "key1": "4VDCEDqjWcFbvE6xexCwqEsfb4yB2N89ZMdMLshp2iStn2b2nMCFMRNwJVqRYwy1CcRMm3VHrYzAThT6m3LLC4Fu",
  "key2": "3TKRVrwT1HvnY3dYtcLVgsVERKnSTgdMmbV7EKcz1SnokKQKVehYKnrwLWeUEhfJ31XGyveiq7mv4qNJ355tJpgS",
  "key3": "25hvSQSyiErz52kLQj3QcuKyStPZaC45oZHXRaQv6kW2fxGdbqLRQJDYfN9GgasiStSBxHhCDV7hdcYonyXrehDx",
  "key4": "2JEEFZTBUqcd7qe4hWHwysEGRqhEbz6c7aATUhksaABLoaxMnBLAW1anDEGEJHjNtUwaGd7d3FU3bG1K2ZK9ToXY",
  "key5": "3kjmZ63dCkPTyHVz1nQAxi9P6W3G5z74JJRJSaRG2TAA9VApztM9UNnuYpUhRiDkixuwrEuksWUpAaUAFWa4LgHg",
  "key6": "4f6vz9xghzK3yymAKc4xpUB3LgozKJTtLr5qtqKYmvSGY8EgiwzD2YNHXaow2vAXK1Ep9SG4Ekyb7AKvoSiUdrPN",
  "key7": "3oJcZwBjxtz1EBG387v7ZuLHsEHz5NSCbpLBDti6M22BrXGcEYbJ36b3cB4sLvGXadFc8y1Smatt1aE1pP7Tx436",
  "key8": "3ifph5qRXked2sctxpWnV7ixzM5Wnyggv4DtVPJFGepy5vMCLJ7YzyttvyEYjt54wwJjrjvAk8H2droR5fQsnEGP",
  "key9": "4ZJTJmi48x6Prv2Dm6AWwg9dUXa1mhoU1Rzxq6XSG7BVEWnUiKCgnNidHu5hLtx2jAuyEYp55BNdz2TP5YR4Xwus",
  "key10": "3bJvmprXuZQZKgFuDymCdRMwmJe8upnCQY4vTn3jf4JpnCDi2DesyrxwBXqkvEjrjX5HhMbtYNHXcKHVaXo3VbWr",
  "key11": "66fJdCv9U8rMKXNwWkducrsgDhc7LuVVjSXXriHDB434YfU5yjSRypsW7igoQuuyu2GjFHd8hcrw4JfugUCMyi7t",
  "key12": "ZCRhmJEYRFRhZKfwro9iiZYdmXnaEuXoFhRG3rsatMyqsUHeasKEHHYNSX7opDWq3DKUCBk9tcPw8ddUMa8dxcb",
  "key13": "5Xad8GW128CYMKDJpcM2iAmSv1RtsmGEge22dEkuXSzDNVWmC24G4HCkcCBZzXdYsMhSJcLSk8rTp7MuPo5EKKGg",
  "key14": "Avj6YFXLpHY5iNJ5zg4esQuJ4of2U2fpGnJYKuKhihToBECW3mQNyrYLZu3euf5cuHKd9UuV5DuvwYnh827dtsv",
  "key15": "5E7gfxWLB18JbRykoUhanKn4wt9cWXP3dzruaBLo3dgJ7Ekeem17TWJws81YZ8GYtLzERES3cur9AaBr1cVzEeEo",
  "key16": "56HSyE1VWafqef9LVQy34PcaY7xFTyDH7riSNti9WZYjtUSWN3pTYhNfG3yToeFeCJj1rEwMQGDAWh21PS598eMr",
  "key17": "3Nkoc8z94pkK5DsVNeWPcUCf5aTuThJDusRrMRUDmeePNRwjoGVeRVq3PSQb3KfXR62T6S1vkeQ7t7b6vKiPHqDa",
  "key18": "2wGg6hi5PdWjsiPvqbsPxtnfDEiBhtN5KPB3WESW8DH53GtfKZ26s9ptfdJYE2dHqHhDmNYS6EwsNBdpB5jizvPz",
  "key19": "48cVHiDGvQFEpXjgEUS1VHd3QfLzLumCo4ZqizXo4DxNQRcBLE8wbY1TC8Gqd7hf7idkLgTk4kNxQW2M5Yq4qnnn",
  "key20": "56gLvY7zeGjiacrwPm87tmgpzcY8bgUKvwruxHn7kz3uZ1o214g8zoRMKoyeD5aDgmHvUZb1gwtDUERCa4t7G9o7",
  "key21": "2y2BeKDtTwUR2LaxXdY6bx9At6nbA89PEkaeRj6bYrH1eYVp72KS7ExBVMSKtbLax2WSdoR8gr6oUYcvDmQkxu2R",
  "key22": "3VowFUw2EoXukLJuCVLKAzmC1jbCLog8X9MawrwM8JVJYPYaPYgXPGJcSwXxZZqyupgdDeeurFtoZw2VqtipBKmQ",
  "key23": "9zxzTLW3j52b4SkckyjXPXgRT9HHhrXPZZDsLM399KUrmbXSbiCePZLGx2ciBJrVpkJynciqHsq146ZyaJBTipj",
  "key24": "53KSPKzuL3GzDF5j8muHKZAHz8g5JMrUH7i3w8Hup7pAp3iB6paLyfi9Qh8tbC11KAwhZCuLAMHBif7B52X7b5Gi",
  "key25": "3G5wvkFbsUVPpV8hgBpPyz4TR5vznyVb9v9MHspzsn1Jwxn8u1DeVDnmJGBYUyRebUJ1oee9cFjGah7qnFuvURnf",
  "key26": "3eNxVJVoWUH32TStHFhsbFyVrNuPJVtp8UHKkMYEBA6sTGfbzVGE4gFFb8bjZzfmWpaB7GPtYY1zzvEkF8S49csq",
  "key27": "43QhCEfRpUCCtk4z2MrUnJqoz2CsgBSJXaMgWPRkHWfYGW5bDXQAXcJVESw7qQEbJ9wLUsWYm6H14LxJ5XtV18xx",
  "key28": "2cbHkeshYTkhbFv7yT7PFJkk9FdjdcPUjfZkXq1CX3ft9QUnmHv4PDEsAeVEKYGBBJ6Z4vujcJ9EspVBpk9MtjCm",
  "key29": "61HqUgq3nPiHMX8jtCjuKx8AzQhMZ8b5S9R9JqHyYRQXRTLv97tTqo5WdsWRNxqZEZaFg1Cox7J4MwDgLRsDTEGk",
  "key30": "2JAbgRUxcetHE6LGhZX8uk5pzWJtgXBrNuew5oLmWAicuhTod4w3MYdwvsvW51Bjh5zbs6Pkudqt4uKnxVY6Q1ub",
  "key31": "43qFMxPyZLBoXAVGrTEBrX1igPE2sa4b93BjeFVzQpW5enYyzRieF3A5T17mBdZMqb96vsmgZTGVRWWZG1DKbSHi"
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
