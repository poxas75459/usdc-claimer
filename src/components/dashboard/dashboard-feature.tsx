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
    "m9sH3xAmM7KFrsUw8ymYoF3i3ZgtAQJ9uZmNF2jo7isadtBTw8x6saNwyMATdDwFRi8RdJYC3ujkxDLm4RoW34P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "636e92H7PwnzchRG81ZwRQeERWi9z13g4gQ5M6KkiHUwC37yS1JG7xeboBgy1boL2SUb2W8nRBYmDomXtPdqQBG3",
  "key1": "5sy4ucDenc5skS9rZRdhthtvdngoi6LgfQZXEwJF6K9zvZoxi18aCQSy4C5kKsxKnZAQVVGzuxeTSGdjSGwBjMKL",
  "key2": "4wfkYKxN26XfeYc7Um7iZdjDKefuPSemtG2BUMuR4CGHJrUUR7643xFrm8YsoDaQg99kjKUTFPuZK4QL82Xt71yp",
  "key3": "21hHxdSqMjrkpAxUpdu28uHUvXTKnZYMg4XjtvTGFAgHbWu4L52vrhtY4zqRVproKEzvidWfsrQ4Mc2EdukKK2UM",
  "key4": "pFAZDmactVi2QGgrqEBX8fwFp44W4YujSW6uYF6D4nY4NYjjhKoQjxyp7d5R8bgfhthXyCP5hruCAiMJ7koyPUp",
  "key5": "2FtSkon48FSTaafu1frsgZqDqoLhsyTxJZgsUwcJu6rDCGyjanpYrgGJbUgs3B86qqmMPsS88MgiLdQrY4RNgSxp",
  "key6": "JSbagXunYmuAA6E971H4tYYXg8jqeL8Lj5Ja9ZCjzpVz89ErfDJVq3gRQuk6J8FZmKAMVDtBNAEz4aHpaNQcFb7",
  "key7": "49uHgV1VgzMizmmFtQkmCWcLG4j5ysKyAzLoTQFkzAsyFNJNY5FKLiySVXH6WurHK7hD1CDGn7o2DU666CneBwAZ",
  "key8": "4teszSrUNtqKJubuNVfsWSsc3Bu7X1izdA67L6ed5ti6ZnL17Wnxhqe6MtEyS1xU1PKNK81yY4NzKLP4wfvk8Ra1",
  "key9": "2YUnM9prJYN2NXxY9FdTK5SCrBPh3sRsGqzg5BiaXyboKPnEch6m3DjkA8myRRSji99W9d4zcSGYnNATBoyPYLMv",
  "key10": "4Bg61dmuW9B7WW1ddwPFivE6UoViKSbvAn1ymGRiysVGaaNcPpsdwfJoNS5RykuL7jnWjHVEANM1CKZ8FBydhgVV",
  "key11": "w17c92QVupw1cTyMTppBG7ysgSRenaeuxGZmFcE9pv1wjveaj6yd18iuUGiHw4wwxKmgME9NPRjMoZZKHhWGWGn",
  "key12": "sF3P8iDfxGXMb2yKVUqD3GDsNvGfPVK1KVGVi9Xx1XSBFHHsXBEPar7gn3n4a48HUN7FurD9tA8XhmJreMfvWVE",
  "key13": "2Wn1vjzw6Y5GQ2YBr5ULuhycDucz21AEEpa1YSAUmXuStAFRYRijNdik1gvvHfJEjocnYKMLeVggQ4Tmw3Wn8Wep",
  "key14": "dFYjHSZsJM6m93whzAceHKyhBMZFaGXRM5WDBucx3VBXNAewT5XYqJyMiGdesBRE38drAKnEmM2jeQxzi6Gi6gx",
  "key15": "2MnG1Hr2tS3cAn9T6poqFS4BgwQU3EJ5CBwaCMefg3a1aWNtiUsPzZvYkhyyJgbq9Q5T3r2DJGVAeiV8w9sr2yiy",
  "key16": "2faPUUsXGoBrZp6Py92Kzgjm1BFkKdYHNEUypCr1egkSrJd4xmcXdtq5sJndRim94HfGWbNJc6m1XgZ5gNmvC3Go",
  "key17": "4F6FdKimvACJTpo9drQvjeAXxiBELieTfT3iB5pzZZJadGP588SBSi8QRZ34EuPyoHd48LTfrgz5vXEdfMcKB5sa",
  "key18": "Yv5oexaTK9LCZWQpSPh8RVNfnMdnaLsfxQdpPNwA6xF4uQc9guYQtFesrgFiywfCiTAahhymzc8Lcg2baDxva93",
  "key19": "3nynZUyVStDgocbqJYS3oxHHLXjy9WcjPAMtws4N62n7Kr1Rx1WmmGRkpS62Kzrfp3K7qAKtKGCkZpUomDuh4oQh",
  "key20": "3Lipg2D9k6dkN875Cdz8iLSQScQYw1FjS7z2bY1SsZJKKHZsnk792k35kwWYoRs7HPgPFvDeZv3bn42mjUw6oWYG",
  "key21": "2Hr3126pZUpGF9E3ZkVnfPEMiGkPE2EJ1ccz2GsBtU2Y38ZdrWbif7un5yQDbwngygjGG7hZsRPdTU19isWkoN5M",
  "key22": "466Qz1m8VQibsijRz3V1222RDH2oGAcqrtLV5RygzEZiTBKGWRCK3BCH9xGTkDbhnW7dQgJPiScK6y29tKGgBqoe",
  "key23": "2oUqyFZzptJZCHvMwyfRYyToVAAnD1yJbHdps55p9gkuz2wdzEx2cQVcGKE1R4ed8JT33etJ48b8ZaCQipbqKNaA",
  "key24": "5zeLTeG3RLpWJ2P3jbUL7dNy4kbEGPDctFzYy8DU1Yx4anmq6DaX1W1BHpPbfiRaaGUPKuW1T7zGW1nXWB5JBxXy",
  "key25": "5EAnMpyk9FqUMVbF9KeiAT1umXMvw51zihzYCq1M8dGRJRqBHuc2zUfjUrBLwhp1WdzkkHoQhk8wRzNiB4G93tuX",
  "key26": "28ADGViQTtaWKKrNf1n3cPMbTYGZa372HRZz2nPZc1ScSUrcpFsdZP55JPEuxxE4Cwy21u4DDzawqQRMonbvmBsM",
  "key27": "4R4HsvTM7ziPXHZcmzYQrLTLQWjHQDjgd84Pd9rE9dCtsaBsmtc2TEwxbS2aWSURY6A2jy89e8HdLBGzF73JoEwq",
  "key28": "4nqLR6La7nxB9VVBpbww8oy7dbbLtTqDM5pkNq4XTLGsWJWimSVmXiqyWQFPj3bbcGbN3agSd3e8vyATAJqoNZqi",
  "key29": "2tXqzoyUwAV3MJMjpJZ4UTzU7pzPUTWL9FrBpjjWrR6HBwhU7s4DwN48QoZt48BjnPceHvLkWpEBMgByC9nZeKar",
  "key30": "54stacxGSTJzpC7NKiVpfYRKYxD5tcZEBLvgxgB7GWtXTaUJz4atmgCejke4uvQAfsWQJjE3XxtXLWBRMfu5JFBa",
  "key31": "44GMCFgzPd3Yy8ZQXa6SQVJMSEGM9XsfMXgbCJjRPn6aYDk88yucjn8qifr4ntvnQtFmGwHrRGQjfUi98deLWasY",
  "key32": "4vx71TvQz5jJUpbgCACffGTCC34G5ESeMtT529tWf1dMpHi4SZF5DNcSYWp9bKZFphUoiSeCT9T8XmAkHDzdGeJh",
  "key33": "5HFjHVEWAgcTp36SGeHFN8ZUnMKFNHGHiAVhiBB5r9fa1EeyRLT2FncWD5UShhiBpJUKYYk8Lkd7dPxc4XFATmLp",
  "key34": "5zBh3m85sDCi4CgpLSAFWJ6PQWVzqFBLykLzHqeGCCCYcJxFZHmjmvwVfk4afb99cETkXCLomd6Ks3KsRj1aQuF9",
  "key35": "4sL3biny6XXTFktn3brPQouQfqE5EKotDjS8bBePE7mUJNQ1nfYWhefGFLjj8uU16fjgesy7WKWNxtdoaUPSvPRJ",
  "key36": "oL6raqNasmt8FFmmA9vctyE3D5angze39zY6pt2GyDJANigCyvoWYc8Hxreyg6eXPh5ektabt3x8jYi9jRNaYez",
  "key37": "4zifjCRdnN9yRihNyBZBUZTv2phVCq6Mt6HAPEiTaHcxMNWTZwVezfNLtnB5GunEPW87dQpLG7ErTdQ7n4ft4e4J",
  "key38": "4DNZ5HnMKZGJJ63kX9qxR3swaWUDo4iUVEL2Dtg9mvWpW7qas6yLCm8SKro6TfQWiqit32hem8qPhLCBNykhKDtp",
  "key39": "TMF7PvqYmDma1H8rFvmaTTD95ar869bRyymxNcceJnh7dUVYYA4Lww1B7QeeiGnKCgPHbZs6AN4pVPMJeWXw6EQ",
  "key40": "3qHMoLe26Zy5CKyHng5vPduY9CXDFwHuY8dM5PoTM6m8BhWFJiCASpVyLwsdLW5PBJPeUddSoZuYZTQ9YLdvqHv1",
  "key41": "5AnVL2igQtvBGoeLWcuCcpzimgAPAiw7Bbe87WWU9pSHJHicSoYUyEpyjbJXRNn3UGxj8YVX3w1bthu3RAvRViYS"
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
