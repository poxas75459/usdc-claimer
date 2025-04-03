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
    "3inTZCYqoyt3LUgBxPYTZJZq27dGZdy8BvouiFvsMU1Msa2qxPqDpar7Mex2wsk4bpuAU1LCFR8PhoNn4n3cDk2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eSK6HsGdjRomB14KeHqpJUMagX3SPdSw4SayWCatef3d1NsxMLM5f56uUYQZXRcVr3YnBesokFa6qLUdYBuqPZS",
  "key1": "GHBD6dSMN8LYH9RcxateTM6wqc6TMfseBXt3tfLQUeq835FRxGj45SSh6Td9TpyNpBUzEu4svqYvEoLsSsTH4kW",
  "key2": "5QpZcrJh3aLhy3TXfw3bk4AxAxosipu3QV4ApLrUk521nXTptTc8cxVUN4xn1dHEm9bWwBE7fmruMBJ4Q49pWdMT",
  "key3": "4qsWhardWsCXX3pD35GnxQ24JXt2Gw7Y18xFne61NbRJk9frffJtbhUP4wd15q32J6iTpjs12FiqFdXYKUffBJFG",
  "key4": "3b4W8gXQTw6hpcV8BDy5NvhtYWXHg46Cy4sWrCZK6uppCdNV85Nh3h7nsUBcBPTWqZMABMiejzAvKYJtLTKH543J",
  "key5": "5iYTvqDMGd3b54S7shYLpzA3dU8dXgLHhRxscLc5ziAuqWMEpWHPKF2dcguAhAP15Zoj9x7SsBsX3GVTG4JTTrdF",
  "key6": "35njbS9npx3aXcvP8ejbUoLN6QSzahH5fokW5WkkRV59E95R8zxTCAkERfrT3CqYmgzfTr6qD5ufcLKUAxC2ormZ",
  "key7": "3HzfbuG9xyS4CRDntYcA3JBXiFUgEgxADgXzKQJKrbeYyD3Q25nu65ZB1QbyFqgyJxrNFDB4M1MhQqpq4DsecFxp",
  "key8": "63HKrDaHUWswZz8MWCKenQHXKHhfmne4XyYkXA2kvH5J64PdL8amEtKNnTYwxVWZXNp7WtU73H5oNuMohHV2LpcR",
  "key9": "4yiyMXaEfDdRGiMkiRFKSeV9HtVTKmzhboZPuudP7LpNJPimKyGgHCCpbE5Gmyo8ZXYvsQCoeoLWXDKEUYstqkaj",
  "key10": "4Q7Q4CArAkM7dmX2xP8tMVYKG2Ue1UaaJQ9n2gr6yzuMgGEPWr4kEDTrXiDV69e4DF8zxM7Yh3ywC7pmysTY5Axb",
  "key11": "5S3HiaTNSYUvdAfmBVSNWzzqdtEYGRbTfZ5uiS2wrwAcqEmtvvQ44aP7mwvNN3y8DvWRgbs71wDbKsnbJdfyTbm3",
  "key12": "67RX7q2ZTWAy3hGiVeJxt2ooNAA5hkFZdyXE69U7ondeYXqmgP8FcKEFbpyxfQFbJJwvcTTanG2d84QCjuFcP7L4",
  "key13": "2XaS55uGgZQKLh5fUDvt2NaaWuQNC7aZZNb2viGcU5DcTG2jPcHcTcaYtSvh8TLonDF5VBYQZG7oi9SiJS3jG3bb",
  "key14": "XjEMSGctrY3QFcntRc3FbrFw5ponkq4m7FH3LjcV4SV7kFy9UbHyVEvni4hzkcY9d6GajZaMCqsTFFkM8RbaYqt",
  "key15": "5chj3LrJdEPftbsuEkJZwQUWYsYTkGKviRENyvELYJTtsqCA46YwUTvDmbb2f45xbzRwLAviWBxMjCjTyQ2svScA",
  "key16": "3LXQyy6w2dp7bj2BL9Yw7DMNsVWNngsGa3tCtZcRsGx7bskeiJUaaRNjw9wHfyQXLGw5W3dr3T3gdHSo3yPF4iq6",
  "key17": "HsEmrVqJ82uu75uLBCg7piKSuKwyeGjaQEDtPckfnUhYQjxPcDfHfi5LymDJzZc4Cewnn4g2c5rxjWXL6LxUzm1",
  "key18": "5eq6Rs8hsLJ97K6RPph6v7C5fwk5i7V3g6dkVDc6XAwcXj7qyyBXkhyCUNP4JbfAxcEsqeep9FreFZdhyEbLXxcV",
  "key19": "3T2JApghPTYRp2VEM18Nei6WoynsSS2ZPQPTcFTsPBrWbU6CXq1xQ8cNjYb4fHsCvNzkLon8iymJpQsbrAYkQRpb",
  "key20": "49tR99yWaFfV2VRnZCM1oa6efLbsYvHFVUyuMqh2qnRGD13dS1tHF54rozbXDE5768tsbU6caXCVPw53tDkB8L4r",
  "key21": "WxgT9DyrxoVd6oJVeyE9fdiQ8FJ8uFdKnjwrxMpVJBJarfK91u6RAQjvcYXvpza65Lst4MHo774iP6Wadvj76CP",
  "key22": "2tS2JhD6XUrjU4jmbgnQoiVVLEHqkTPwx7isYYdRexj3twmTSiS2HPM5s6hyrg1KoiL2oGaguNKkqmrUVT9kc3Zh",
  "key23": "Phv6qyCrsuJKRFiUKZujQBheYy1LGYCRZQNJTWvZs4ZF6NQAR29VfPxuktYPLgv4BRQ8JQaytoM3bq1yGSDENJW",
  "key24": "3om4Kp1Vrwv1zN5fQcL4YHLUzGof6jm1gybdrqMT1bcNccz2gvgEftQb7jZxfCFCHzxDnpUFGcgisPG5gdEpMayu"
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
