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
    "5dDPA2rUtC6oCevnbuLHXxfBkvv85ErLfhwPTTPqpxUQCDzQKnUnJ7cnru2VnoDWTUeqmaEmdvcFmek4GyArFcSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zdhG1zTSKmSSyKDUxCYrfxhuPaEsNDg9QNVfZpatZBYktEew1tAo6xGEgsPyoRGCxLK8miLDZdybvdd1Rkkap92",
  "key1": "4vDmfBHkHTLAv7AWh214BLkriHQLHQSgJ8hWCaKwQzEaMjSBw4X7gLDWEh1W7PWE1LUYKAd1ChXZtpirzwc55oNK",
  "key2": "49YHvYJ3iVerLd6jTWVih75iUWWnzFFeN95vJBKxuUAT83DEfZN8fro1qnVyq45jFoD86n9WtWXwqTHGC3XzKrjG",
  "key3": "4ZfcHHCoVvk1ULDfbN8Kko8mfWs3kfojLYhs7K1WuUPpBKr1dGihkqafHe9YELJw9fQjXh6y7TksGYkK44JUpHyE",
  "key4": "41WzCSKrgXGoPXFKZiKYa1xYSHbs5GuxuAeRHLQHP3SrH7Z66FTmX69FNYQkb5bSHz65knssT3yvD8bghCGn5JE5",
  "key5": "5LNADu12ZdGspHmECbSmkUe8Ke8oJGhLu79bzWymRjDARqS7HUFX9b519vX9XbWCsCs4fQLbidis4FAcd7xnJQYX",
  "key6": "3aamrEgNYqPj4YVfmRNRjYRCCyUzVN7YuYCNt1xRNC2c88kmGKrEkJhynEDMELM1JoF2G315snpTaY96yLR9kn2a",
  "key7": "5ZRXKcLsoZW9h1HjdbNYMvHBhcbwNo7V1LiB74Z616s3iZZ9M9RuwY8WjXrSpvo1LoY5ujv8Kr2MC74WSDymBxYY",
  "key8": "2krA1g4V66zSFSB7z3Y3pdkWjQFqed751wy23deS1BqAuRLSugfSsFr8qP3RCaxujU3fwNGcAinti1X81aXzktei",
  "key9": "SNLJvoUZi3NQNXh6zue2EWFkmNzsYF94LNqLjaFjrtocYH6twcoEnwesPZfvNK5RfnAiWoFv1k3zogNGqveVPxK",
  "key10": "3uXndGZZbrx3FXb7Xeh2GKzSU91qUbDFjfK6gmLHVkwqQi42sGfYTDturatef2N5XwH6dPYtmn7zii2Mrpym6Gz9",
  "key11": "3xciTFEJYQnDtxDjgKoWWSnmhie3ofbWkXJTNM7GLPi6HZTuK6darWBJswcbb4H5UmBj1QeAqZELqKMCNXKCjz3J",
  "key12": "3jXuFkYNhuiDUnnfHs7EkBTcPcCaU18yjNCSKaXwh4ouksM1Th4DkdLMXewPB8XHsHoajESXisrfLKEYeJv7XNev",
  "key13": "3u6N78hG1zmZqFZc5usRH8TkMxU7ZZbZrzwVVLXF2V3F87BsPNAgZZoU6qogfrEkQFRPJtAJY9LZEaEuLuvCzXoq",
  "key14": "2FvcTSSGouCAgUm5Du162ExDmr4h5yjqE4E6JoTRTGy4zxaoyAtmjpUHkeY6Qd624Rn25V5deMhBDzzJh7LdyGj5",
  "key15": "2egwtVmoBdP5kEy6KHofdgFZNzke51Vyu7Ev1CoVXUqcLmHk2aWuYBnf39hidGFhj74Mru79fmubYAkHDYEpdDvW",
  "key16": "37euHirX4gdaRAZRmNNvQhCPzKQasE56a7wg9Sh4WZUEVjs6cffRCJEJoZRQ987gVC24AQwAn9B8qREF8hKThi2n",
  "key17": "5L2fSn75WHrLQLkkV59ftnYdZcNkuCLCrMkRXWHdiiNC7Jn6yMc2eMjKhpvggDc4ftWKEYinoG7XKeDLsoEv41Dv",
  "key18": "2nHE8ZUche9JDZjHD63fPdUj5x6tmAtG9MqoKiQbEhcuuJtskqQofNoWoVy8FWnY4njNUAXgWTjboNzAtVHdq1Vn",
  "key19": "54Y9cSHHPZYfbxAT9KqMpJUAacBEL44seWcQeVqEotHXqtp8CcNcu2czZkBoD3hVProDqfXiRCeLz5MivhqWufv1",
  "key20": "4m2ZzqGAoxRRBfpnzhLS6qJunypoqx1cxPcSat4RH1K3uMpUUaR2Ln74WJDmbJeEKJeUD1Ko4RgQjqVWh7FP1zZT",
  "key21": "2ZX7wXK1uoiUVVazxEuCX8ngDqGbws6dsvxEbYJpuQVavREt1ikBGxi7nTjrQ3YnyQK8BrG2fZ5mAusLiBNHQFWF",
  "key22": "32prAZqsh6NATG4htUYi6oiSzjPhYmFjWtGze8pf2LRZi3TscLFvWjzfqwhniEr2z3dZzDmneaur5PnvMpwJL981",
  "key23": "4KKB2tnXQETTLBEZWmxanuQYYPG6X1DnLWUeHeKzVjWqnFMqpJajiHDxnsE8L8HRaUMnGgVtCFDH3CfQYAoVf8vp",
  "key24": "4et2WPXRRvzRbVkNqcmnqKc6vHqTv7B4XghUhifiJiQuUjCGWyMHf7qkFFjVBj8iWd71mYt31c19EPZU2TEVz9Y2",
  "key25": "LhNxYnoFqiofkUegFMXMzRXjiEjgBskvdeSLEA1WsVxoTADFEpNKa3deCKa2quCbHuffC9GtLAE1gTz95e7Q7R9",
  "key26": "2WSqRmm1yLSVxMq6nQawN1GUiqPgYBHrzvrfrgwS36ZzLEMXWrSDVR5utyqXPViNAMp5XM2AZ9MSEMx6mgbc8pB1",
  "key27": "3XzRY2AVXscG7uedWYksbMJd2HiKYZkxvH3xKPgiEBhiE2WJTAdTgeoQss5bZdNsJH8SUBaNPreKXwwvvmfNA5rA",
  "key28": "36ZXtVZioSrGsKz12z1nuvHijn1zhmNxCrWcjE36PqHEqXStXetf1o9LNKxs6ZuytNen2oqrzTDwb3gVwGqVL5V7",
  "key29": "56AvG28UJX6ZVYy5h36Ay8vJkUtC3Zp4wP8md4zULUFR8MVqJ5rXDNyYdQqrmMvMQB21zqW4oEkTZE65DuZwRw3w",
  "key30": "5c84wt3cs2PnAG2UN4qMyREvLis4ZqAGLjmSWLupSs6gQKbHw9xHGmAeEpw9mFvRdX2DCpBo8dgHn3P9QUnjDRX5",
  "key31": "5p99ayQqjne1rbi126ENyoph3pjzFMMaVZcKmSwWP9hfU9iCxmQJReYPtb32RvukbdZTSjMWVNGTxqdCzEN24xBN",
  "key32": "nrSfZTWUteafoCtSYaZRkY41SUpLmbbtT8Vw9ZRMvugNKgnGtRoKRzMWmmbcwZy8JFKtue8zutY7c8CaaN5YYy3",
  "key33": "5taQtPBJzP8E5ZTG4h9t1rK9xNjsG7iyKACqqVT7WESAfG5xPkoBi6LEPumPwXCNisT2jxwB5r717ME71tGAQnWp",
  "key34": "2P6WCohV9DXRdSxVbWk6fwrY57Q26KSUYiSJ7miVkYyrmGCyQkHHMscPFESiy2fkoCQJ2NUkYgGXBVgJfuiforcg",
  "key35": "3pt7vnfyUY5KsT9GzHbt71oWFBY8VpgALwADtvvsp8aL2WrZ5BfUg1u4iVixUPc2zpkNPgpXjm3MXhxgLwt5b6hh",
  "key36": "2WSbtDUNJ2bAPf92wzgrS3N73nySDk5Q1XBhNvfBTW3e1VV5Dpbop6XHMJcGQSJvQM2MnLCVeGm8Daj1UpmHb2UX",
  "key37": "2taouYtM2N2hzhxbwt2ZuvhLgDcsLSjUT8MgNkbyKohZRMzTfjpkrtjPHthy1kcQqa9x3mDHxyqk9XaC7UScrPq1"
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
