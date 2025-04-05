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
    "563MG8MDUWBwcmf9MbKDArGaHenXhDthA7o5aUFoKpM9FjFZWS9RVZJdb1547vz75vWHYwPhTGphpaFzkcc2WeHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26ZnGZo8QQhDzFsqxrccvMPx5AaL6EK8XdmrZjse7SpwquFfYmZu4HT2J2UYfs8ta5aP7evPgQsvPKCZX81eKt9y",
  "key1": "4ueSAzqdGsLV3R1caYMLnq1kEBcpPiN5d1C3cU8C7xkpig4sUg9hWj3jcRcySdRjL1VWjDU1hLJJQnvYJbTc2moA",
  "key2": "41K31ZLT6TT2bV1BmfFmdW5oEK1Mf62eJLqyxf9yPwsAfi8CrY4RFyonYQRoN2xVcoZr6y3PAPxgnAgYiB9VAYuL",
  "key3": "5tAUsaTVdMZ6zJ8a6t3NB7YSPkJqd6wWknU4Vp16Gt46kD3Y7x4rcrudxFvqBVXqLwpMnmxkr43rM96YPpkbawi8",
  "key4": "4gHZzFuaz9kS3KpnKXQXkBKhfKZyrib5XPVMxynq9K2oq1GQm8QxghvVfDTZ8q2yWSDNA4cEiEskhdfyt258V7HB",
  "key5": "3TXahFeN9zUHxex9uCHXM1GCyuGJaZECTyrZzmzLy5KEtVq7k1XdD5mxNZeA3ggapc21WXwfbgjSUPWVo8416Zti",
  "key6": "2t69ks6yvLKjJYzHVEiNs9gRJQATJTd7wR6mEXqvdhBQKNKM84Fnik1xzsCxcv8PU32Py4LUc69z1hCETwLNTyAK",
  "key7": "3ReQ2qw4kYdGKeXvHCHhfkXLFPbAHgTNbhbKAzuZrSMGgfz4K1QtYhDuNXK4afmTJMxkMcgTYDimkAp5jWmMux7",
  "key8": "5pQuUuu6dSAF3T1wSav8ZVqwXh1VxSeQtAbbHJz1MzUUwNUHWvjDVAegLaNp5oCXcVnGLAXYJWnrCHdK3sgtoLWK",
  "key9": "HCD9AvcBW9NfNhunN2EtwtQSDMw1PTqWuHCEgbqNQKQKk8VLz6n9aMcJw9xN1XqFASFuHWKTXy4Pww16xem6G8r",
  "key10": "2HjgJpUJGJBARkcatvBdE4TBQqqbn96TuX9wUrVQbaWzini8rwr1srVUnDsybN4TfWKAE1wPKjJ2K5ZjfqAjVuDi",
  "key11": "5rgFNXfwuSnHnAz6tkrP2UakgKb43PErwBL8s7v7ahu2ZnC1WkjWySPa89NfaReRagZniKBowpvmFbGUf5tRFAcX",
  "key12": "53MsYgKXNm2dJxe5yKXGihxhvtAcjso7VPMPTRc4xosbRdxx5hS232Cj2C21PHe8T2wPb6JHN3WicE9DtTce7SSZ",
  "key13": "4K2EKzQps3SCbPbc66gQp33tMP4VRAJ95VFCCt5UuJDxo3wvw8oEwEaxLbizNZz4gtXEaDrFRt2vm4Sfs8xPy45s",
  "key14": "tcMh9wWahpSTis8tJq81pktS3gF6gKEuWzb3UBWcqT9ob1jZdJ5UHkEqjkXHzD1MxRLPYRSDfHtW8HA1TdVu6Yg",
  "key15": "56v1V5mVqKAaxtpbWhjGb7PWtP53LkxjNqe5tbiTfXdzSHXumwEFA3jQVKKZnQKm3TuJj1FMXpnNMr9vwb5ie8DV",
  "key16": "3jsuNyKaWG1yGumh9F64ekpiwWCbgN8abdiyBuZeTuReYACRXroVaGjhEnetmpdEYTGpHiX2Bjac3iES5XfUL1DV",
  "key17": "2nhphA5LM35qBtK8cQ1KTE5JHjSBpGpv1T8s8hc66BNAW5ArSzHXUUDx74QEHw32ogkjZ3dthjUZbJeuLa9FrkMV",
  "key18": "3XrBfAU44MjtgE2S19hWNM1J2UxfEK8fJ22mLjqVkc941YGsVrfv7Xh1C4HniZW2C2X6T6yyUF6pTV2W7xqguowf",
  "key19": "5TzzJC6Cuw1ZkwnNCmrxLdwnHvrx7X6vdEFFK8EWmvBH4KP4NKDkXag9Y3kD42TppDsE19TuVW4xfznPbEyXQrUJ",
  "key20": "adQueETtk5DXYFHn9Eh6QxP2LaDUrZz9D3VsQ4MKiCTRNzStcQyVoRpn5VkSPjo8GxzoJsvnM27GnEhoDLjpAEC",
  "key21": "2JnAXLcf22LyUyFbstDUq4dF1sY31RcTXmWLRJSGbfxmeX6WknsH8e6PBVRQNXkxWtsyCkoV1bUTRWTvCMctbkf5",
  "key22": "5kRShKTrht1W8geySRVRnQdJEcXzvjWi32hxCvkzat8daxwF1J13ZmjhaphyqDGkgKEt2q6tBna7rHyKGH4FSXpD",
  "key23": "33es9DJsXSTvY1tbLyhEYQE5cRDHR9F4oVcoX5irVzPCeAmhLFVi4N8RozX1JMvUm9qUg8wAnWnXuYnvSh98dL7X",
  "key24": "3soWsoFWL46PQHr7ACAL3hZfhzEnHKQpKpZtAVpp9qrd76vPRMeuP1gGrxk9AvfmSjau5BqJ1F11CQnuv9xSJuPA",
  "key25": "5ADoedzWqcA7FdEMJnoHED3jj5Nzrh4fPdUgK39476cHgKXWuLSyrMWWkV7ebUEQGq7ARynbsVrgUndWVvuB4E6j",
  "key26": "3JoF6ouHZ1a9cD3EnZWzitRjGSz9b45kmUVSpaq17tM2tn164VhrPwZ7nKdpzSewPMyeiCjudzmLTdP98DY6zZqY",
  "key27": "451UgrJ6a5DcAyX7VjDR2K2JiqhLi5DNfaBato1T3fLcuzjh44SJzbprFWFmLT5rTPpiAJgJgkGt1mgEssNeMFqv",
  "key28": "5R7zQETtPj8DEGXDvU8sUsy2LcQmaHsx9qmS2xVNH5x3mVFdYTSrQNFf2AE6SQtnKi3quzQeoUmwGtTdBuP2kLBe",
  "key29": "UKTeW2hsQ2fhSjz3DKq3mAziNKED7nhAguXtSDNvG2coGjFdtveT2CPk5ivKxLzxusjG5cLB45WyNGp5zeRLJjz",
  "key30": "568kgDDghVouRXcsewMLzR1rYtvpwDZC3d95ufHj3yMuavbCzwB1qEKUZGmUEzb83ixX1J7wRSqFNHSrqFgTB4Lm",
  "key31": "4czmj6dQjdg2KBRVYc4h959VnEGTQAYPvb15Sis6MSPqmJsKm3996PepnsUjgLQwvBMxkwiqqfturGH2968kdfo2",
  "key32": "4LMSVNCMuEsuYPfJepZd2LH7RqdBydGzAbHEKeLdwF4bW2BLvbvCPTenFV7uDbUvYNmnwCq7pagSuipmJ3cAnn8R",
  "key33": "2gsyRWrfAo9LXRPJtdjZ33bWNZtz9bBiMMquq8NscafbeJvM7MF6bDijhvzuP7JMcnHYUKGagP2dZw1dMiK6B6GE",
  "key34": "5jh4pxnqkwqKgB4tgx1Uh1MB54VKtMWd5VwPjtAa9q3dBFj9avb33QvVFk2c47VpiRfHZDWboHWJq4XhgeMbdGG1",
  "key35": "4jYTjHCG7HtHzejPd6vRVLpXn3MzfTvpGiCS4138HnAR3eRQHtPwPAgSzGaiq9j2ocSGR9sP7omBQPwtWsZbtMf5",
  "key36": "35rZcszNiBEdL3b7oQtEhb8vtq3Zq5c9usNxpBWUX8tw2WphsXi9kdXKGwYBCxTeUQgBMa2YD6hETcA7ZRinm2Nm",
  "key37": "36Y2RKWBxCiGFJdc2sAv4wdzAdfDwMjARGq9hvzmeciWCMiLx7orLAjYCEAbUaMWRzxXpxRvHKj3g4nr7Ago23Eh",
  "key38": "eeKYUqiwyMX8Ui5uzV7reGNJ2ecGGGuhKfyT5DaFCfTMynAL27FbFdvYAeEhW57KszrT8dE35dKYLJmoMveXHfx",
  "key39": "3n6xgSWpfou2UsVW5PjJ86wAo39XSyfW6ry24pnE2ujDAwL7Cy2hHnosxf5VMqG4vaRZwwjVBPt3enTkLkjxnFfx",
  "key40": "4xcVUffqcUALmv4SwcpiGW4srWy4mGszQkSfkHjbPwVxkiTeCKv7UT1ybE8MpC1pWRcG6ER2FWHYVkpVdjvZjiU9",
  "key41": "5pKbznt8xYRJL36N5EZo7zBA2W8EALcfFY7onrRKLPFntTBNM57PotcchebSYNrs1gVvzpRRi7qWuvGji4Wa8pF8"
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
