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
    "5Ad5huJT2YQgnrHNafLCpab1UJZnEarZTKEqvnhVGbnJ3URoSruLQ9A7R8ug9HkCzBdGf6DAjc6Aa2qQ8th9fMbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WaRtFrjAZBpFiofY7FAue4XRcMkaSxk6wtfXzEaSYG6oUE8VRQj5VYdS4WupDYZArMiiECTae56WNDigs3V4nuF",
  "key1": "3JrpfiEwGspMqgxf4Lw6gQk6BYcvWL2ZaXgXQsPrtZGWYuf2L55CsijyeLGuKvGe31gzewvpHU5bPuw21BS6VzUU",
  "key2": "2MqscdpTZtkxebt9zqE2s5Mrvd9Z7eJk384sDiSvXWnjXxxPNKbB2zgAToNRwLJv6Y5QChGGVR21159PPL8uE1Qm",
  "key3": "WRZPyiqQ7ACKghr6NRg7oBocoetjfbMCr852fKuemBryR8uQce4MKbdPP5J5y6SaM7T78xfXGDCNbxDXmPVm3w9",
  "key4": "3LbpUY1eS3ECtN992aqSTMdZ35XhV3Y9gqjMKdcDMSak7DJnJgXCYU4jXEtb6VX963k3zxyJqTtaPUort84eK8QC",
  "key5": "qdp3uCjS21yLCudsUHzuzWBEwzGuVgpnjqEmXnV4ALPs57m8AXwe8UqQCR8HUTHH94B4TJt2CdhR4qoDUw2u1BG",
  "key6": "5HTMNqXNotH6Y1dLZAFPSUyJmzjMNe6SrUd9zvzZnr63Mx82JpMTn6Qnr8PFoFQ4TZF9PAAfdD3TdR5cJSKjMm31",
  "key7": "494MqoxfTxmJTCMF5suDvYCvbR2KzELThuddkSTGvYc4Bv2y3E4cpTFAgFraBi8JejuF8w4AKw63joyuTSuFtHbM",
  "key8": "2pFrHJ7NcdCbYNrGJZMwgiig2L3yqkhrtxK8h6WMg2tZDyNzN9nRNdY7K2kponCtXbJF1u8bhh2kxdJ7e8U6KeSk",
  "key9": "3T11zAxCUmjPGphrv3Rm4XFbUFJ8zbB9YSFb61mhBdi2xjFEngXXNUy4mawsnyvyU1uXtXrWebheLaEb2AeZfuiC",
  "key10": "3MxNcwbjCn961XbJpXBsqcurAEPX2fcVkrKUDAMbmepgL5Fk86FyT6mSEAZZm9qDdRw5JMr7cyux6HTKj2PE4a7k",
  "key11": "5suXTDFGC8FR4YvvQAPBbVDyCgxv1kfpUzZi36g5cwJiHipdWsFbW2qBBXDpQ17D1cww8DnfzZCMHB1DoPBYJRcS",
  "key12": "2hHxQooy4TSfVHzrhs27TEPMefrZds6tj7kqUxP51mfHUGbDaDZpWDqziGz5hjFocLTtvMhFCpKWhuWWkuqTGZ8b",
  "key13": "4Ty56iRpUDTsdBLrAUi1biF1dvfCTrLmvk4HSx9EjP4dPRzybvSvVVDKUVHKfhECTeWhQjgCSQ2cJMyqbfFg5jZD",
  "key14": "JHG2ocbhZHd1sWHeFwvpacQjT7FrPuQbrCPt2BPUBk1PhtrDKRyz28RuDpkEuqqjFBVxpu3EmourXnTHRDSqF9T",
  "key15": "38ND7kbMQ17zDtrHy3mS53aCTArdxjuBSU1pnszHVNUqtipvmtNxPfZr2GR6v3aNjRkyd1JgKsRtznsWgb6zcuyi",
  "key16": "7xEf4sbEAsxKcgcbdj9GAn9dQps11f9ohH3xhk9kbwLbfuFMgtirqg4Xp69Qi5TgfAXiALk3Kbbq2ue6e9hX3Zb",
  "key17": "2Pi2GwgBqhpcBFVLgyy7isoAobw7pokuNwmRyoaLBNx4fVBvxHwWrQuSqNKhUDCm7XxKbrimsEzwEHh7PBQnehuz",
  "key18": "E9jHAh6a44hqPQFZRrqhfe6NyoCynezqdoBoGZd7ipJnyFAwhtgoVXmbeSbgQtB9vLX6JRp7xtfPJz5tg2a6DHp",
  "key19": "SjSQZ3syUvRcWdNwx1MThyt6hkWSKZyBoGWVDZZ32krdpsx7B4kR4JsMiAAx2AEiCg4oyz7LVgWBRA2W4LSGzPK",
  "key20": "5LsoPHAquQFeTAxeFZPSqUHUcx2rUWcCC2DZ8yHzdmapyxp4EJPvtGy2fad6mNsP4Vo12kzaMyffwQhHtfrGbzUN",
  "key21": "5GNuFLYHyfUE8JqGkyZjtaxBykUPRNGcmLvXxTjppJfv7L4F3tb5cBAy597uYzizUVhUuUbjWdB5rdFLvAhNAAMU",
  "key22": "3x5dYBfGNiZm3sxZurGqwBmgKJSGQFRw7M5ZkmtmeBvKXXGUz8vrbUHw6iQJq1hc22osNeXpBWis5tYBqg7181RD",
  "key23": "mPLn2RFejsavLGGC5NUDYoytjFkcQAyHy2KyakXEbqqPRRwYN3CC38ZN1p4NPWTXPEh6pvbQqZL5T4GjgGuGR3R",
  "key24": "5o4CMboUJLce98WuEGtZZRcqnxLTGsXCbZvdNbDCgoFHYvYpmobsJ6xLyRPnfEtesTbLcXFGp6dxpBkUiswJDMwz",
  "key25": "64Xinh4hRuvP1ELDoEBZUMSjNCeUBVfzApKermhymrz5aoRGJ1emf1piMZqKmrDCHBnkYFjYDUu2tEp43pP5UWDS",
  "key26": "nUTHezQVyHErtDp8CbhWgQJWSjyTw3urhjEje4WjjFrGLvgR9kj2MJFf4HWjrAEhb1AEvZbsGbqTKoiSPAsREvs"
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
