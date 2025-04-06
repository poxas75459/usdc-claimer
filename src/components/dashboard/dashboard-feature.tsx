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
    "JZjA8mtszHZ3cFJu6kwdp33HZidWXSq2goQz38Hx5q7Msmrox3R3accUyYkGVC3UXkaZMjuuwpL26jTsznvSwoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b3kC32r1TagxeJD831iYXiAnynDqLnm8ThCdUpSKzpqtQRN2RKqdoevWiSpKstndi1TyD275cjjjmRVD9suh1RX",
  "key1": "5zLuPwmN7bffznNiK4xuQh3ef1D6oa9EYj19opqHpydfxSpZypMdmvzom5PmpuFAL8TtYi9cEWN7N9qmY1af8LyE",
  "key2": "4EUPommuvUjUoMdZzanVRBwaSmE6tCnVLp2t3up36rA1B1mTekpRUy8Ca4VM3ZExDD3uCmBPczBProNNiTb1rfT1",
  "key3": "ZM1T8HVVkP8Dy2SxFdkmE4MqhRZgiuSp7GvX53HVryUAsXjZUQ99GAt9zojTbJLKbRtsegP36czKs6Ju1evXBk6",
  "key4": "4k8BsttFqarBbTij9Y9J5Wh51SG1Mvh2AiFb3K4X44o7dsdFmT49NVGwcvr8T8upxYyFXsWvTihYrr33SE1LNoVT",
  "key5": "2TfTDtv5M7cKTVCnP1GAVDhtzagKcbbu8VmLS81CyZAcGT5K8zcPg371fwGsa64cYeGQS6MK7JHymR4XVdMDypKT",
  "key6": "2ot9oY89NUAag4tYc5CCeBdmKisu8Gj2mRWdsMZAM1V5tsZammrVSTwFLBKrKx2Yhr8cBrn12wqxnVoVJPvvDiq5",
  "key7": "4uD9NugfyRnqUbiQbMxkwk5L673YudJxMhMXhT4Y8g3ZEXKAnSQkGcedNd1m4FGkaGAcc2rEPnuxffWaCF8gGdmw",
  "key8": "2VwbCaEAiUfaErmLfDMHjMEGorXVtsdGUsgPgd4QBCXa23bztvjpfncXibm4apAcCFS33c9EW5edQU8QbdfL9fzW",
  "key9": "4BkaCmMxR3ruK5XCDpks7bN2N2sKNgZuoYZS6zRh9WtJ7dXB5W7sXbdV7E59mkHdYPgNfV6v41LF5xBmt5UiJBzd",
  "key10": "2QBp9jwkuoWhN9v8bJVtnfgfxfqFVyyYVoefSH2dyPZdfkJe9A4QZhBXv4nqJU7rnzsu4NJ9bNG8MZuyUqPpkkT5",
  "key11": "3CEvdZMRXg6pQu7vKn1M18GA1Fh9TYpZkrJWvr2KdEH5rp73Y7hmTYUCDVm8cRJ9v69HXeu5VFbBP8Ygk2iMXY9y",
  "key12": "3pMjyThwTFa2H7uKkYuvNSqp879NywW78Fq63knfiarXFHbPwWgx3Y9dsr3tQr4Jv1zJq9bvndEzSA5UHhNU68jt",
  "key13": "2SpJSS3XXiUt25T6ddQHS6b6q6ZjrdWBW4ycXYPJZdyHTt61S8eGJ1sEAHsE5RHwmTpYzsrNxxiT56BuofAm4VWB",
  "key14": "648aDByDoqqe5qmC1c34H5nzuxJ3sQpzWs1bfMrcVJNvE1hUskFKZz269nwY3RPAYMyNoY6QGEjvMdEu9AYZWqHp",
  "key15": "3ZB2NtKHwiy3oHKj5p1soXhWwxNS7amQdYxx3mm6L9GoqBNFC2xgvUPwNXVLUsEs8w2KkpWnPi341UYHyNsqY2zx",
  "key16": "5hVefCs6j2bjt9rQFaqx5rM4emdRZeCFiDhgTJBMi14vHM89LYAN8z7PMksz6niYJXNTpQLjMmQrhZnwwp1ACQM9",
  "key17": "4LhDVqRbjUjmWrcC3BMJ5RLs4MBsCcQtthJjQfQVJV7QbmSPQeHnxEDvaCGfAHcTgCQBC5uwopiKm8bA21eTZB4E",
  "key18": "4B2DgwK8g1WNiayo3HuG4LZRyZmgp9SwZG1bUux51xFMw5UKxUxuNNkJxZkvv6H6aVkWZvrtRRvcrXCbqFK8AMGz",
  "key19": "2CChr9ZWjMXkqxWnfDDNQFy5RRo8p7AgRe32smu1v1gRFjeK2C7LzhV3JcfR9wgTNE9WPXP23RdQU3b3qNNkywiu",
  "key20": "5Qhiubx1T1oFGTKQq1y3ahzNEst5Kdm791xjyrHX1jUuyBBxKVmnGxYFxW9k14AeScs3CC711QBdaDT4WA2C1UhX",
  "key21": "KaPrXzKDn5rJoTAfeeQBTFD8NYfk3JZ9nabZw9rVw2jrRJecNBGrQ9LbxTnmF1n8rSFoJazskA8EMznJv9m3fYD",
  "key22": "3AsQBjTFNwXkF1NZyn2aBbjbS5G5D9G3kKMq8qkBYca4tZ6B5aCyJG6mZdzF2jRvoBbGRP2HkJkrjKsF5w13JcFh",
  "key23": "3dkL1hkGXxYvzBfZSvvDFsCzqxkAfqNrghFWPd4NA89n1BE6c6Y5NxuRETsvjxhf9FpBCxUk5EwMKBMg5mvS75sp",
  "key24": "w1RPaZEzcxndvGwuBAXchGj8nuLK3ZTNfGN6UkgPGExpY8YDH8EQgbyEhmz1Ltc1L4x6SmsrQcGeoCYYeBHJq1k",
  "key25": "2ovf6UQ524Z9rdpX8D5EgyzeWwPRJX5naPG4Tkbxhpxg6dEpAYSc3Pyqrkt2vhCX2LurngADA8tUuTWdTfRBSRit",
  "key26": "3NU3QLoS9d7LL87iQSKh5BRJugybLjwyCExXaWqdxvYhmbZoMRVsodXC3K6TTwisE7ijtPewTp8UmRxJHFJxcyj3",
  "key27": "kAspzeiLMERpW45H3Jqhkq5Bw4V9ig9jWBZkRU7AfaJ5kuyQ3CNxg9G58NLfKtPbqor1EsrHZtG6y2D1NFSj4n9",
  "key28": "32o5vgFtoTCeRdx8Eg8ASuDtL6dTjHtuLMjascGVFj3da5LiSUxhG3T1BynSVE54hRcDr7oEa8YMDGRc4DoXBFBs",
  "key29": "2myg77bEH6UbJiDCwXEF3tYXHdrDgavyv1hZxBtJdwxAAJTEAuvtPdJD1cwEYC9CqzVp2G6cA9GxDFz3s9QYLt2Y",
  "key30": "3d35tb1Sef63Shjm2squfftkwncue4FiA3f3CdEnaKfzQF9wJ2PBcE4cAugjxYrwUe8d2tM3zSEKD6X7b1rbdVjN",
  "key31": "4cU1ETH4KatRbYXRoNvRN7w7ncQY8Ppk5gqedevL7secJsZWpE1ZnBgRxG9LWyip7r6EWknEBh4SH3fvvtSnAyaY",
  "key32": "2FTDDZ1SP7kSyM1pswKSShjhGz6YKqpNhyTvofLhTzRErJQ4Bx45v8a5Y2hAkiuUtjYKs7uyYLg64EciUuFq44T5"
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
