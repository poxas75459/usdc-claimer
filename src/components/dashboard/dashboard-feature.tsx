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
    "3boLjJCYK7qJCioN3SeB6EsfD2vGg5oQvkABjZ7V8HRHzEFveq3LqfvEc1VkwHnawMomam7GSuZechk9WzuyEjqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mv1MxEp9h94Kh2NfCVzE4PjkTENbBwYSyF7RgRxvTmkPqFZwncKHTMZkuTkTAwoagKWaLx2wNzGETSYERBiZPM8",
  "key1": "SL7GEDJDiTtxnRQKR3H13xUdMtbQoACyXzBpyYWT3v1svpjX4sLzUG1urtF2TkSqLxPLCLnUPgNdUJ7mzNotAEr",
  "key2": "3qJfZGbMcyuzH7ehqsq3C8Hopr5ccFGDAJWCcePB5Yzmg77DcqBsJcqEn5oM7DAb4j3xjD6XiqYuaWMQDQ47UtVM",
  "key3": "4F3pUYWZJ7QaK6UahDUjueru1p3NTHGHQP5HuNEfSpSFSUYDaGq2eKWHYjXzCY6qaaexGDeVh2Cbwvga6NeWbJ2p",
  "key4": "53NBMTVYuEhdzKTXZrT6wbCYWWxiBiA9BLyfGVrcBDmRHoDHrJtNhhM54qwgRyFBVw39j9sSi1nzScZrJsV5ng1f",
  "key5": "4BXsNd7DZuyQcHbrpEPXWwUcsUnQAwi7tuN4NnF3rMAmn91UG2JJJN4DcGfVb6GrBXm3Ag7oCFD1tiNonj2PSJSq",
  "key6": "66YC26QQpuAvnLZ86WKsUs4CFTCp8RDqSfLgiFYigkHBU8AtFaqcHuUDsrUBk79FMAjeFGuf9q7zq17HHNVnmJED",
  "key7": "Uz2KCnH68UxJuZCrMBzL9w38G8dD3Ny8CpH2ZMA8rJVLZgPdK72x9BjtivRTirw5gkCLQsGfJpu6Gm8LXAeJmp4",
  "key8": "2SYLybTbSguPEW2TBkvjr7GNMft7MVikvmmwmeQNfbVqEXB3LzhUkBgng9CXhkMcidTCqmPpfdZKwH8BZ8fz6gsY",
  "key9": "sNrpLBk3LcsemdX4Y8BDdpxEgTX6oggYzsfdUsh7Vrik4AEt6vMcWA185L67Nhf1gctBoJifxm95pnGXfcQr9tj",
  "key10": "yAYomQbpYCH3bc1uEHSn2nUtqXrGf68BaGGphrLAVkRaTyPJW39Ai24uRNjbA9a6oSF1JE21b23DqYkmrFqkS3q",
  "key11": "2i2ESZSDFj2Eut3kfSLx8x6wdG35qK3N6nps736ghhCZq1EzCYXv7XBFvSxF2kZoJTijgqKMiFvupf2ChvDrUY2y",
  "key12": "5L5CG8i38yY77dGUa4GvzvWLbUXj9AdJtQaHb3XK2f14fLKyAgbE2NydKkfcyYF3NMo3ehGu77knmQ5UPkfph2Cu",
  "key13": "JXZSmrGTuRaqBz83aVCwZim4jF1vfggx9Kdn79DpZdWceqYiHEKW49m4Yc4TpiyTp5RzaqPr5Ssef97zWREzGFU",
  "key14": "2upc5MrQgCyR3sHa2BZjyDuNu29ZtCo9oACn8xDTkpdsVcSdDsY8hUW8rt8fY4nPNMCXzFcdKzd57g9ZrXZk959d",
  "key15": "3CzkcAJdQFwZofUsHAC64LAfEw3miyDUEXiXjukC2VkZjRmojMeag75zg1oeqgcXPVP5oEJWXCHBfY6RaTrJo2ia",
  "key16": "5bvc3UFUfTYsPWMN1QT59khiZL8Y8K1QPYCH8mXWHZcjQrf5U4ay8nohnAk4ECEVZxpuvyJ3AV2bWpxNQgp3CjWu",
  "key17": "58zEUyyFym64tTTyfm71pXAUg11xLKoweWzg6r234FJH4gdNv1rf4uTreJjUgWKuyWB2uX1skWUce4jYNJM4XcL5",
  "key18": "4wvXwMUojgEeGn1BrEg1WciyumXpgLSiajLfYpmKybcD4zDiBhS4KDPqSMPXXjckaNPnJgsYuwcXEkADATzMFQ1d",
  "key19": "616pqkFY5cBvb4NEqE7pCHevyWZ4stNSnZwGdX8xzGiHxBQDVpZphsac8BK1ELiTa6uxJ5h5VfjKaToTp9FYGkYX",
  "key20": "4hGk5kY6LdfopEiy7xZ4A6aKjbLLLcXYfXaQdErSCAPHiPY7gDpjhSRauqeua8Pq23YYVbdXNWUcbpxJpUysmJ2j",
  "key21": "3gTaXvrqtmBP6ok1oXVJdVuNjFzBPtsk1PXCS6K4G16wJ184c5xsZSRugtNYKfeUENWSG9T9kUZfERua26eTp2z1",
  "key22": "265q5MtLUR6CPCu97bu2Yj75WaY8Fi7nUxVW4vZX78PRjrX2yEeAR7q7cyxrUNHFLerTwKJ6oHXBjtiCxUSCrRGB",
  "key23": "4LfkCjV9WaohFojvbjkC4yQbL41etDfQ6tiig9jeDuMnNdkmnVNzFM8nEAs8FmGZo9XwFHDbVit4da8aFS9XGDCm",
  "key24": "3HhBhBmqt48sQEgbrpKbrw8BhigJJ9VwabMgZfaNFCFpq4j3HaSrrrbSPkjL5KG9ABUqAKQhA66ESNU7wqGz1uCk",
  "key25": "3AJkTLZwSYTd774irJQeygo5N8z3ck3zB8BJ7WAGu2xuN9vsvcBvmqtCo8uFtLDSQ7aaemoPu762aYpLLVRLDFWE",
  "key26": "4iqyiMSatLhjE42H9vH3zQkF9SF3cJATo7yMUC9hUcw8jrG8RRjSFACP6m3eTVCB7QVQNoXkLfWRzhwfsNZHhjRb"
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
