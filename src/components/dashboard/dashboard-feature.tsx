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
    "9MkU8tzLEJqmj4pBwCBRpPeMnAvXS1tziQ6VaTkWb6iwwCHdGy5dRJvmYGCPZJphbSZ4DJJpJ6R72gGxZ9fVUdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AU4WDHzdLPPKjmHEMFbcEujxmdt3LTev2Mk4Kbk1tga3tMq24sNzK2urF3xGu6W94C5pHAWjoAfrxxSZ2M841Le",
  "key1": "2irFSKoodvzrdNU5aUmjjH3MutP6JMhEKe4CvqGfMzjgHj8jHkYn7VB1AYLTqk4Musv2XYBca6H2exHonDrHYhfv",
  "key2": "5izPC6sYQzEWGQED6bZYa5SfiRbQ2xVBi9E96aqyJ3DWUPiKFZ7tZ18YMTTpL7WrGsK4h7GiYeCvfixqZ8coCZZJ",
  "key3": "3fkEoZRrqDURGQ8iZWahMFwfsjufUBn536ESTLGs7xTev5yDxkBBfmsLNdR9L28hFS2w7xDMFyXuTqKzZbK2iN86",
  "key4": "3eErycTSqpkk7y9nhQDfehWdwW31pRgphfkiN4zZDgvKVZvpvauNoWZNqZZeWpNm43AG5jKKWfhTt7hNFkbzKLgh",
  "key5": "6K5f3dCrdnk5LNzAabmGQiRH8xZ34rajMTVgL6QvmfTvSeQAV4zkwsPkeHnY19rBNEoW87DXYQNCRRoXB62TjvK",
  "key6": "4bB52DyRAXC3DHfXoRVKdJJZZMEC5NrVXk5SEipuB8qDPGjoXVstDWF7f2QZLArfFsbhiDx8gygu8CStJvisyPnY",
  "key7": "5pqURdwt3F9cydn94s8m3vy1Dwxg9vaBX25K34gzrFt2PCBPZyo81iwcubddLyAypjmTwad2Mvz9w2DtPTcApCnQ",
  "key8": "2SubfCYwA8xz2KMrtAUGpSR53zKqBwKYtfzfNMnDbKDVHe7b8YmJvRegfpbMsyDKsq76Gs46dpyPidaA4JhFKP67",
  "key9": "22qPEX6jtvAx3DwQaPcQ9PQjy5BbfRjydzfcVRBNm6PqePza4zsfTLUi6vjNrBgsGGNsZrpoeu3jTpfriMPWCMj1",
  "key10": "zQeVnjpzWBmewR9PAi8ZkmKufiDCgu84wAY5CafdNB59XbgJxwfmoB2t75XiTX6pvomxqnwDPWxjr5tSsKA2HDD",
  "key11": "3ofyrDZSPhuCXhCipKmvU6JoxdaF1Qr3nfXq9DXhp8KG3eR1gUGBCAwTRmC8Ezcsu6u6vJiabcKpKB7YB4qeX3fF",
  "key12": "4TvsMrQp5GUABWreBKyMrHdVe75eRQjvky8KaLSSAh8DwfQiC2WatK2KMyyhCiJNZuv9GpMGjiKwNhu8qLHSadoc",
  "key13": "4ZGLx8kTvvSHh64wjDASV9o5mRayY41PEpvTuxCsV3yuzNTNXGuL5993p1ccAwmxnnBXWsRsZ2tzoavThhmU1rfH",
  "key14": "4EniADDXuA5M8obq2kVBwDm1j6EjSMB1sYsa6w7yZToc6J5MHbABQdcK2rmgmH6YkZoZYULtBZ28achBj556P64W",
  "key15": "2H3pkGH5AsrsxcyE5d4BkPHcwFr83ArikjhJSEfK7TfKVVzVkHeMDm6NwWLqqvTikjNmqyabr7q9Rs9rmmz8fVHi",
  "key16": "4y5re8qP3SmSsQqimvm1KqJghAZJEB7wtEZ3h8jsBdAKTbD6Fj1X3ipMLyrzUMExjN5RS6h9WYyLoRFposT7XCcj",
  "key17": "5n3LySGutAGHBiwns8nnjuauqywd6F7KYrVWCbRdntFF5MphGgUDwmn1VqFkC4DseFJ2ZnkxKnCcubXcjshMvCMf",
  "key18": "2ngPSHjDJYfPTNV3gu25xJmy1TcTxtMrUJEsEKsiuXxS4E3MLQwPBFiU95L5gUXkhbyZtuxT8o8SnUmonMvNm8uj",
  "key19": "3AXwfmsQApEnJ1pQjzsdLdQ2Qsf3nNZf52ztjywcY3J15iXMikoWbjPvP3Bj3derx5eTMHKYfm3WuLgeaj6aNxnB",
  "key20": "3kmCMPcWJTY8VpRueKc1jwAv9UTyKYn6e3Eij24bR1wdDiL8Kwi8ty5Xkh2MuE2rispwrcTEn9CmC1DJ7NLZM6iN",
  "key21": "58yhGAmcyhmZ2fi4GhNg17tzLL7ty77iLYXs83HtqoW7kp65pTwrzUBFF6tE2BAwW6imaLbavXc8hxjxzSazkfwG",
  "key22": "3JvC1S6XQXPUZocD9QWaAeQYXA978RGLCXL4HxWNL4Dw3gHHNJhajkeMV6qCBPeHjKWLX86TCKerToaj6zgkWkVJ",
  "key23": "5pGUAZRxvg1FAf7eVCPxqSpxdg5XHtexhd7bTmYyGxXmtxNp6u5uaxaf6Uy3sxrSzmFvcWQUjTXudrd8aPweahGj",
  "key24": "2Z1WboKWnK8vgu2vekpaUPCN2LaDVQKgQ41BAkkyFoNpw2LeoiJ22WX623KAbdkPHDaCG94dDSFdvds2dbvQbwtQ",
  "key25": "2XGEewcHE1782sgCbyeZuymoKhN5tpnNZKrWZeD3PXpV7S74i2cyDVgUZhkQMzS5rrErHTezvRGpiV4KbuWh1Daa",
  "key26": "sqgzysmeVDawXoo6r2XyV58b8rodhEkzewUetmNcLdtYTknH9KM8EFK5LVVoSXPpbzpdTBVaz14LTX756wEwM5p",
  "key27": "61rUhxLPtjEgkrM8S7apoFGz5XSEoU15Q9SFVhXMGzrnAduePejbs7dGgfFTwxRBThNNTFJxgZUfQ4g9REPeerbj",
  "key28": "3B7aH9bo3sEH2aCjYjAbsHmo7YLVu7xGApmueukDtYYkzojdZAY8q1BGtrtEGCrcKLK3f33MWde2oBop2rviJj9a",
  "key29": "oGaG8YfwAEuazqrx1APbxyfRYcqAV5D5PcEChaADogA8xnG5X8AxaVCNoSBTQLt1NpdPq15xM7cQCmZiFkPvFNg",
  "key30": "Tv92sc8Uf2Tya9e21obsQWC9jZG6LzccZaiAt52t76czjzpkUtoEFL1WHkFN2YcFq2jKyDNRFH6EA12iqSam3Q7",
  "key31": "Sq7N15hti1C1Ejx2b8yKZnMf9zdyD5ghUtimcC58BzskPYuj1hRMRES9oAhjBvwQXChWcQFttfsujMtHE1FJSCC"
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
