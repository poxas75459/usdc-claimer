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
    "2yUuWR6aHUbAkM6G7kDNTDqk8A6WFzmxaZm21LVci8ep9SrhbvqNx8CxeFh9UZiUgxiuPmUFzhcnRERHjMg2fT2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iUAtZgNd6inc5Vq9xiAzJKSP6omQ1soD92wbEzJaMdiuPnSvM318eJRBgB2aB41UiD4fHZSK4x1QtEPpFxG5NBd",
  "key1": "qm4ENhH5PLsrYfokuci5HNsEaeiCDiE5TUJSHaZnpSfJE6ao2zetxxHeAZu8MwGS8RfwVHTpQPBjBNMVBdAHNXV",
  "key2": "fw8YumaKcVsBE2HSQATWfS63z2G1a6B63sYsYY1bUHhxGPLvzA9BhQjbrRbGTbzWwWXXizvPNb8AzHwAtMHbiWf",
  "key3": "52ojTyQRGMN1KxKj3BqkVhMsmBCjvhJKRXWCYEj2h5odfcmDayTBv1GxQmtqfooCk5Va3AZ4rhxAH9jNjbsBAFDF",
  "key4": "YJqDwp8g2VYZuwnWPRBKc6Dyt83Tc1kSB2BPhadJx1v4ZMABQjBYHRGHpjLoXNTW5nTND24e2Mkcaccyu32ZzAJ",
  "key5": "3vH19zJbkNKSdEWj3io1MWLBWMgcCaRaLTNfbXBEAJP3a2dDvvfZbhyWNbZzvTn8YDoqyG4wrFJ4Fr2k9ct8pUBR",
  "key6": "2epRZywYCBEWjstJTTPC7ZNx5iGeciApAitDDgdc7wT5HLZdHg2BJZ41EgGcJsY5QP1JtSeNyBqBybj49j5gCaBn",
  "key7": "coZ1Qhfn6hS5wMQDQx7tMskuzuhm4dYKmsJcfxtaCbrRw6R55X8xvyT6vpDkZNTuxuhUnViXuoJ3ycDWUeUQr8D",
  "key8": "596fNNyjbYgSXHpMAv7fvuQvF9uF8q7VSXDP1TGtNQJ8nVfrQ1kDfpMNVSna3RWv86khdy74eaRav28KXsU9WiYB",
  "key9": "2BRzrYjx1C5krVaVHx9wb7YpvdRd2w8LxRoJStY1GzSTZSmjJYpfwooasaeGcbsS6g8e2tU4szkvd1h8Mjv979qM",
  "key10": "5ofnLYQpHV36r3YjNRawgmaYyAUqgiEp5c3rTULPWRTbaX2wnt4X34gyf4MgFR5cf99vs83CoWFKKFXUyr49atZj",
  "key11": "28WtJdQLshACu89gdTC2i2DtFu8WogbxhLqpwzuZpk9e5tm2L3HtntqjyYLiMsSwz4c7HhNRS7HLoqJSeLBN9w2g",
  "key12": "ZbWBMGJZ2Ti8QL1YgY23BLB5kj3epUUobGJLaNVRfcGCuob8y8bGMy39dAzQNAYedW6Saw86tRkQmcwNsaksNqv",
  "key13": "28jL42KSbfpJRG4baMSLndkqxjrXcxhUoRxKitJTdyfFTXGhqQcT2ZYYuBJBvV3McaWjUi1QSLs3dvLFmjiRB2Rn",
  "key14": "56gLewokW1NUuXAQWWnKky1zmjoTyADdy1rNM8Yd52wvAZNkQJJ1SHoUaBYdXMVfoX3U3i4UxVv6REA6snBKYsuW",
  "key15": "2A5eHpoqRFic1tyhcAdzWTp86Q74SZSnUDcrFwP1Kg8LEN8jWWS3CQcAny9xtE2ybiN4gXWzhijyXnitVrM6dpna",
  "key16": "3KXZJ6ntH1bxDYwzLLpUkzhsHZJabHmWfpHaeREcXbHXUEVsqiDfK2dirXfMKJGMS1Ny1xXdjFurEkozuweubCEJ",
  "key17": "2mQj1BM1QyQaKtHbRVCvFigdkbrMSjRbhuVZiWQbaEKoS54PAFFPUKm2xKSBBmDzej4GgYcaeK5ecfsmMZEXSKdk",
  "key18": "3sPkUfAFbaCaYUg7Z2vxReRiL9oQ41tQZxdwjpoqv1iVrB2fbeaQhgniwBGREqvDukzi8uFh2VKyw9P91q3jZhM4",
  "key19": "3Miy8Q5bQfgecjNv1ZTFttjzpMiZMnDcnKhDuVDDjgzbNKa2zqEZu2t192hKKeHA22HW3awXdc5CeGLKcCu8f8ZA",
  "key20": "4yC2jrmNuqF5zUgqNezr5hZ7z136FSaDEzNPe8vi3bZJW1aMXqia341g78TSmPy4E8hPKEpZFDYLyAJiGAMWnGbx",
  "key21": "2tg7xBedjNM7uMhjGQiZmEFnSkv2tc98yN7U2aEPZsJJ8dGzjzjBqgroYiTxaLNcmBfetz7icjrqvKXGQfFTq5DK",
  "key22": "3cTPpK7oyFY7VTZtgNbsvuzDzUTksZWtrfhcShoH4n6iWqQ2vShpdh4MbCAb9T8f2biit64tmR2FJDiGcUdvKZrS",
  "key23": "5M7jcVhzxG2TxmAXFH8WX3DXqMQ4DQKGMbvbvys5WAtv7e4SPT7jWaDNWKGDNrsKmkQNJRRLWidQEYbbSNGJENff",
  "key24": "5cMi3xjF3ofcAKLXRjP546nLECbZDjPFc6evEQS5UPr222MBx9tKrVLSZT6d4ybJHLwzmV5iAtmqJBXkR4jZzXeE",
  "key25": "34mZ9uuyeu4h5ZD2MKLB5jMPn78fsVV8dDqELjfXDKnSbSPCHa9ozgk8GFijPTLfv899kaYqhPnqSRaA8G8nwRPq",
  "key26": "3yYdifpBqjfku5TweSuEY12TxXT3hBzsBKvLfmNwzfF4fD4CQesZ7jKxqU4YuWjiWGCsoarev8EDzkfCYUqU3FvN",
  "key27": "3rt4mMAD88mvZ8DMMedjBP3mbTQJ3g8bT38Kd6xrfXJaKZ6XqnP8GjSrZinjFDxwa6yknMk8H695D6R7stdfefWY",
  "key28": "46BBeSC68MUAzLi3iQQkrmo87CZ8Hg1kvFtyVHqBagVhVhwygJqeCwWJqmhxC7iMMYjZ9HBhxCktA617K6ed5C6V",
  "key29": "HoXqarmjpZLaH7pUpXkGyyZe696Soxd9nBC2YLPddRhMJzB9nhJHT1ck6mpgXzyte27B5uM1LkSD48i93dMhHeX",
  "key30": "45RTDC4XRvbLnWVxkbH6HY16tQXT4uNwPDUDLscPuZcrn6hAtpjpLeRHXbeHM8gYQNpJsQRiSDcZnRmmEcYKC9g",
  "key31": "3grikQyykeMAtzDagBKcwnTkamR5CZRTGn2429C5yZrKhaHPHu4QJ7ukLWE56A2rKfLtc9n5YvSstR4ei8NhiRdn",
  "key32": "3XuiTMGJMBsSykQW2GNSGL6vVPbuv2cNvQVHvvzkDpmuJiN1MEuFDXzAyv2mqCQLcJfMdMviZTCk1Tom1JbsALYo",
  "key33": "2UHRATaV9wnWzd219CEMiVv149VRvMxR1p6cGnKDKzMfwj1iRxBDGdaSvk9N918c8nRCsVDAS8bvQ5PGifLvRG8X",
  "key34": "4tVVw6CgNnLjwJyu7urcGTWn931pW3awa6sJJvBNtT89N5Gw7T9Qr2jwFJ7YNuR1y6nLegYdRwC2hbg2ko1AofFP"
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
