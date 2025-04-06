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
    "4nSwFBjTNnTtc7DbNBZQAWjCCiYfLLnhsFXfKRrKFKtadcJVY85zDgAkCB65kVfjUhuiNtPd3mbRqeatVqj9Xt3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KExfA8sT1rrEj8yJ7zFAK4Cngr386tsFoi3sGew4ZyXgnW3dw7vQePyecnqPpAVdRMJ4QB84BHCWRVCTB35utiU",
  "key1": "4hyV83BY6FFKErHBqorZGjZuis9BgakY1436g9ppbYU6zWjkyw65TdHKsQfk4TDqRXVVWucV5k3x1vwThxSgFUpy",
  "key2": "25ZzvN9MfJ9gbFYMXbUDXAR93Tds8buSKUDqMQ2HPU6CreWnEYcqZMjKtVjqBY7EzwFQ4CWZXx3DxAsMQW6kff2y",
  "key3": "ncd1C7PjoeBtPNaw33vvERNukg44yJYpMLYRdAsqDLZAP2tMuVpzEbubURCVECGxdDFLdv1mL633iEjuo4scNo2",
  "key4": "2yaEnTBj2ZUmLR6BRM8dhCywRSLzLmn5j6MzHT3jzVSssVXxbnwDhfAFfybGHqavFpVhJe7NDzZFdNQJRpVQt5y",
  "key5": "3B7c1a2A5asVLfAihGkvwhdgFNzxnJRtkg8kQDdZiAaST89H2Fba1qTnpk1JLQ9eTLCnoiBGiJKSmMQLuN4qoELm",
  "key6": "2yJyZhDJWA2yGcnGHj1hPN27oWojYBH7EFxSo6xkANRoHXoZtYcPdx6Xud9DckcCTpvipd9QfoHQKvDoN9jhLcba",
  "key7": "4kTvhVXgjEizCaV11XaJ4WHCdh1EjE21btqbQVLqPDS8CViCiMFXknLB3sQ6tvdwAoSeqpJGfxhn6MNR893KzquU",
  "key8": "63yMxBVu7rEBKXsLurJRrJrkC9naV14AfQnnwu3BtCDH9AuhiXpapprYxaJKZ4DHLqFc8vERTmJYfP4zjaCXFJaa",
  "key9": "618uqdednMzmd1itrA6rSnEHLFf9VpQBvvuDTdyvxPZyNh9aL6A8iu6q8KZAhmvD8VuTA6qL23AQQ7iVnYs6xhD6",
  "key10": "5nAtHEgr2Vif7uXg2P8WgLiThZNwR6sWMrrqQ5Fj7FpimmFoqr2UnCqMRXjYaBEAXsnA3MBeeY3UdgAicLhpXaeE",
  "key11": "3fgsKVLyJoLjwvAs7B1PdgY2WtR6Ue8DJLmcxCzvUFvYZ927pBiSPDnucE1waLpkxH6Qy2WRRU2Q2SdVqevQMtcd",
  "key12": "3vL7o3U4KMLpD1ERzQjU1B8P5uRhk1H2rvXVeX9XgLJX5UDW6eUnbVWeDCtT3BfZnR2G4fiKiHZjyeJ5vqXnTbT2",
  "key13": "3VMUDWYqW43sTAiypdtQJvELmcQ5xkEx8Q7NrnmiUGB1vtjHqaRqwceEvoGtUovg3VirhVBHbCDYWTdTGPVMLup9",
  "key14": "2aipPK2BZNnhUTpdgELFZAG3io8MGrNw2DHz3FJ3LeUfZ93WeyNUz8jCyYF42RjXsMEy4HTwgrKWYVD7NDgv4vdG",
  "key15": "2SqtjNJ9j4CNivP3FnBD2SMLrvfunssCQHonf2eCWFoLUSkTURYqdE6Xr1Zsp6grrtyCJCAm2KacmCM4XhpWspyZ",
  "key16": "1d9qs4UpQKomSrn3Fp1LnhKrbQnm68v8RzRMBGwnB19hWJMLyH1eys79HMCGB3yWUDJPn5ofmrnfCpE6ihJgoid",
  "key17": "3Eyuv3JRXhqqZSbSV2Q8Mi5CcnWPCrH8W7Aj8imqQ492mnKt19DtYYHVZj5hnUN5c2StMUytZ3wE6o5tWPDH2Pvp",
  "key18": "3JX8aL7UecTXpxLvbZs5GKPhM841Tt3RSuiPcthpyw7hPE4Rh9AqryDnT6KC3FWkTMFC9G7jKsaouPdMds2Xfnii",
  "key19": "56FHf9VNSwrhQ9TaMsDPkKXdM5m7GZCQo3PVPFdA198syVY5VDNSCiRUP6rgWcVC6WpDWyuZYZgHb2ksWhXS4cnw",
  "key20": "4LmhaGEinoUKpGhPDzeDQyeXpqjfW2kVdNq27YdqGGnbEUMkjQdnLRgEs8NqYLkXS2Mga4L9SDxCvZwvRDmCWWMJ",
  "key21": "H57LMkgzkbC39MAz1B6MF2Mnzj5QXfb934pSfiUKNRCjJwMzSwxfziPEm7usiYvYek1tthV99AvZcFYFnhghf1c",
  "key22": "W9jv8Qy1KSgxa6bVFAY57p5DDFjBwK8pVbU9529Axr2UmHeq2y2XbhTs6Qrm7nZjEPWRuHFgUyH7FbSwYhP9f1p",
  "key23": "2YYjRE2aH9wciFzTqhjudx8LVC8LUeWWpB8XNcnc9gWkm2Sx6jqVXfmA7sM2sTS2TrjuumjefCXWGQXj8CMj3MP7",
  "key24": "49Q3sxHNWuNRPkaeAKwE8Reo63AiqcZxYGtwKHs8JLuqTKv9g6yC8TMBwYnP5CWJ1GiJo3QxgimoyKFNJSZSVovs",
  "key25": "4o6c7RJaurnXNFKkGHmy78rddRbPTqjvamsmfMHBn7sjKoZjD3hTvLmSjKqqcWhKstTMAbCHvPLcTBxWdt3kuiZa"
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
