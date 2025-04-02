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
    "2CPhkD5Kc72W8ZkJTp5RKkR3d8kDoEUQ3EbCh6xG7RZiUs47TKBHNghTkgCiRgLHW5aovcCZf9gpM6KatJdz7Ttg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S27gB7qU3Fv3fr7vQ7FxWBxyrWJNZy9RPJzvHHZkzgSkGB78SHxA1wLR1JaGqATBbFbsKDaV6AhrWSfsbEfpyUU",
  "key1": "pe7fXgXcqSghE4ndPyd5PAfW9gGknMnmRuWS2mUQEf8YeZLRVStC3xcnsuqx6XQubRE8mCL74HRYhPrZ9dxZAuP",
  "key2": "2fLqGP5DCVWPsBHbUsf4ZUH9ajXEBvh8G4L6eZSAK4nRb3KPAzxeyjo9mA7u6thWfxJTv5T3DwCw2ZY3MB7vr9M9",
  "key3": "2R5CmNd3FFhR4mNWrjnn6VXTMKRxmRLNpJ6sXui7W1i1Eij9A2vmQoYpW8MpJtwGEQywAhue4Tghh8WohDBVTefD",
  "key4": "3sziEN4aqmyAdgKKZUwayPiQGpQTvy9XJLL3Y4J8BhanCmnUgdw3tLKn3o1RwDeMDC2mDnWLyqaAhDSeGnXVFwh8",
  "key5": "3hZNavbhAaqc4Y3HY43mVbW8MUXBpnDnZUGCyo9S9M3movqRX4hLdy4jL1Q64R23Djd37X7zxoqRNxUysSUVMWD3",
  "key6": "5x3s5bHvZCHdEJ3f7FdU1e86WFmSWXaLfPdTbZTzZNRUZ46rCVgrGpDmQjZvKis7PhVKiuN2vfVGpJh5VPV1oUCT",
  "key7": "5q91eFUvRnfiPdcnWdXuSHhuLk4iqBLSKbGD9Es7S2wDxm4F6qvT5KgwiNz9VLxMUpHpLzY12XdjvWFUkt3Kv97e",
  "key8": "52m4prFhCCWArMgNAfaPJcwphMggfcKUu3HXrgwzK1jusUgwaBfkgveSjdLuZuFtkdXyK89jXj82nvkS7LDRYv7J",
  "key9": "37fLbfJoc4NkGzmnT5YwKx7xRhBKKSzDwQbgKDNN9tX3b5kUWbSDDFVVrCTNYcyry7gxP7rToQCpMYsQPmM4cyuK",
  "key10": "5YSmhnoqvh6vJ2TbAbjPMtKYAhwMGj3EGr5WsnfeM2aZYrUS2k58csQ2FSgerRhaBjvJJX4KKk2aMKJNLCyMdxRL",
  "key11": "2RwEpGnqmvYHUAZ4A3DvVNPDGFS6K45pHPAeRWUXdP2Rqz7dKEWFkyQoFQX1gm8NuCUuZ7gtTX5wtWBGrPx9Tju2",
  "key12": "24Gq6JVBPMfNLd6pNWeodbmgexbFyYG4JhPNodYTNpwNmtnRYALnvENEEmrYBV468jaJdHw25W7LMpmGNNzBLr1h",
  "key13": "1pMHAKAwUqmdeSrxVHE25iErdsT2xy6QPMp2ejGJiXMktJ6Eod5HJ6hn4y9YJMECDV1YE8k2CrKBZQiunJaG27s",
  "key14": "5HeEPyfd9aE92p1WkLfUV4VzyjRcgb4Gqmjm67KnLk5oeDaGAbuPwtKm2UaEch4GJhjAtSvPKpUiRKhouHrsvjw2",
  "key15": "3WKJ3vXuMd7BVwSxB3ZxWdXT8AoXRbDL8N1Bf25JXYZMC6zVqpxLW89tfbHiQPm9pk91LXyPXG5tzPj5Qgmpu8MT",
  "key16": "21dczxmH3ArEFMoSXjjRqqZHrXqZR768J7AekbLLKGNfhHpeCxHLksggrYfxxf7PXSR5oZeZ9jvU9eVxQGBqJ1GS",
  "key17": "2VMHDgSSkFxqhA5oZRsy5qodn8U7DmAe5y69unMG7u3dz4nsCMQZjS4coydTiJSPfQKNSCagnvQjwhmJaBFSTyxg",
  "key18": "5Vf2wKaQfW97B55RTddszpaGRZjCJscGdCmmqNAbgKQ2aiPZKZt1HiefZwhpaYLx5vFpAS4Y2nCQJaaAxCqckjsi",
  "key19": "3zH71DsX21KRCRShNL9BB1v5ecCYJGC26VHKLqj28qVYPcQmcC2VuUBfgXcTQfDWY6YyYW7bKH47vm9dcz2J69Q2",
  "key20": "hp3S5ApMjqc5wUwW8VcRreNZKgEebSRQMR5D7VXQmkma373CXrrt5kbVirFgqeer1TUafDsm8kWM3hqUwXLCoN2",
  "key21": "3DKhzWz6NdnHD12xyonDw7djYR4PvH3FVwyqXzMVa1dQ9jC2wNPx49h2Y6vbVZR8NiH8rBjdwsRjSZrcXhTQRFXh",
  "key22": "ZP32xMUXdvLta6ASUoS87eV9VRL7BWUU3VLfQM3ZsKg1pN8bQyPQuhHxTL7hAFuD8KxNZqbUTSRSdhTUqsHuRGy",
  "key23": "K766W6PcMhk7krtNvety1moj6nfDhV4P4wtRSJbUYqvxShvgBMRvhzw6p2nmsshw3u2jmEt6wt4TwkRuzidwmEs",
  "key24": "46nNqtsyMEMCuybr1hRJNRj7YrBi9DRTk2aLRWJMoHZeSppiKqgzHPGgrizzvTBfm7JDFsyMFsZA7Cf3Qmi6drjo",
  "key25": "2Wwei68rqKcotXCzdTLpJgA3jUxBjw7miNpSaYWYeVMXcXQmRDhC1wRG1qz1zxFFVuKMXnrb6H9jKagtzS2MhrP5",
  "key26": "5r23KwqMFPBKbCmY7f9y6BPYY5PVghj7SkGfpvZWETw85sJeBM1Q5SZEv7D2d1HDhYb3Vwu46geuhM9VYYGUKJ1x",
  "key27": "2aMiJxSCwqkoYJ7Jv5UDgoHFRpPACDtb96NGdQoTYn7fxnW8KxuJRTKLV9ZDwnJkvJ1qRSLSrwrbVhZFs8S7kBv",
  "key28": "3WLrbbVzxMvo9KqdH7fb2mX69idNbERH4bYEQ7qvbQ5op1W8cXMqxuYtgjPk9sUB3mSvuyuX1qGjpRbLyu7KegPa",
  "key29": "2FD8jXY5qYsRkWWxJd5C36nUi52jsPhkWJkVQnQ4qBTUjqooT3qHvHcMBXPKVmZeuoj73djgTJZJqUYu3BRzZ2mu",
  "key30": "4smBwEyh1AYkY7sGKqNUmkAntRuVZb563CTdEGACbKJEB5AQd2xhWzBN6DNBZQz6TdaPmQpgTLGGsPExj1DMchH4",
  "key31": "3FdKgdt8q3VSx5gB3BwA6yuxLk7eP4QSuoCC4GhmV3eNMeDesdJmKDgH56FQvQtsnoru2sWEiEmpmZAkuz9Cuqm1",
  "key32": "4mnY598VKR3gKfKb8oPzD5neK6DdyNusADU92iBBWEuA94NiQH89mKxv76jkoTCTB6UbUEWdqRsNr5wuGigbM3sz",
  "key33": "3X1ZrVhoLaJ4WjvydweV4FCLNNAsecxHxZvR3sBH2mxoWx78x2zrv6VwFitLtpDQUoREQoThLD7bUL9ckdAxF56i",
  "key34": "j6JqzYzFgXuUbwXfSLq4cRMraWVPKP8fT1HKP7RvfkZW5P8fN7F1MZTxex8EUqGPoRzgyLUM2F3V2bhwDUTzkw6",
  "key35": "Xbq5FzLqyQm8TcdznHKx4r7vmaPwMPywJ4pbVvXJ24j9bz133w1fbK8LckJfA1AjuziuWp5h7DYDwjCGFgFbSRP",
  "key36": "5HgyxjuQwdBbufquL6KQ1mjvSfyMrFUFxSUBoTDyc6SXej7U62EbEy7oKtUCbAyjyURmd2hnWwcUbZZrY8JaF1F2",
  "key37": "iYsadGUmxCLrgUr5pQVznfQC5WBW6YPxFAx69JCUEPDve13VFuJjhUihvGqMTAgfe88Wo8d8BJf7rUAngURaeus",
  "key38": "5BWyp6rduVFZYxThyoDhdw4CoJE4ZD8MSYNHuwm21bc69sM8rnWe8PM4Wr6MgWmPQNDg192ppHqX9dYApXWCy3Fy",
  "key39": "21JfDe7QZxzrjbmfjAasJLPjXEvw4twmiXzxeK5nrropbxq3S7UqZTxh1rbYFb4tNXVebUMpTApAQNoJ9yPRA7Rv",
  "key40": "3hsNhw4sjfeCvoW47GqQ9ekq7cXNKfRuhcFSmgNRf6Mo5hbkAsi3QesCK5YtWpYHqTNqc69xMuUncKLKevghafM6",
  "key41": "2i9CRpdpPCLhr2C4kkqcuVw9Sh3PyK1tUAa6CHyhtP9Msp7owrG5ghkF4yUEZ2NVVDSCdAsRRQJqUzjMNWyPZ42K"
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
