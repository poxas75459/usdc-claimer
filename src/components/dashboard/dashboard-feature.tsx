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
    "5qJWs6vas4ZEXube5pkYuenLJWn1Y8GLM19vPV8GofMLW6NS2a1vvuj2mR1ueEvd9AUxRc5CuYvjVYWRhWuNDUic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZUjemp9U2xTKfQyRjgFjGzhpsavSRHnT4ErqbBpKor6nqc4ErsCdByT288kt16BkQCdHRMXDigFi154E2TmdrJL",
  "key1": "2A5junfsW4hPwx1oZrh4UbQRGKyUBbpZA3PU8ujNjYV5hCRsEmduB2ARXMBt7RuosscV1u3Mw7mK1yBLyMVevcu4",
  "key2": "qn967DWGC3jZbvwXZDynnVpbidxjq4YHgbNvu1Nq4SXqsY8RNNb8eYsggNtsHWcBCz2DVtRfrdN8rUxf3rCaW8Z",
  "key3": "3Sacqo3yAoZaFxsuuaj9qcmCVYk8Ck7TtfBmf7bUFk69qVHdtWFbn1VTKHNmfAb7HTwwBSqSLn9okRguM72jkZ6R",
  "key4": "53cZPf4pZVmdEeZuv7xdEDrW1AqMEvfjmN6bRh5YrRDUnU47N2SpnANTiPLyhnmDyh5cQF23WKGiCzDmtcjGLZY4",
  "key5": "5eNzdDkR4ngEkawcR8Spw6ZEcGsk9W2pxkKisc3CYtKpWvHAYTj8vdvqQnfWyiWk967nzDrGticZEP5JACFQ7hZU",
  "key6": "5uZXfjhvmz6ooPn46zpXY9TXgFDHMph4LxWNXPVVqPr9MNffSQoX3YgjQNtrmb1buWYpvrC1tqcUMPVVFZaxzqiL",
  "key7": "2BmVWowwhdMHsQtppYyfqYk4a8mtnow128JgRgGG1AqMusLS2yhGXHvak6EfnW9ff39auY8NKQZxoqdCFhu1yenh",
  "key8": "sp5q12QwZZ9f8yRa7uaMHVuXUiWviJmfae45eAng58QquPoaE1WkNXCG6vQFqWpbxHu6uJaibLYvGwT2spnMccE",
  "key9": "421xKJUcMWJpgKg4q9TfNMzXkTYVfbrQPLsFnGE1H3ckaJJe5rddYBd9Fjs5c8hUQvARCS2jrpu7s3T3YyzsY4w2",
  "key10": "2zn9xV83ZeWDBiKoRUX55LpfSN4Uhj6faUygbe6wrQXbb94uvaJeVDj9vYFu7gq1VLhhCsZ8jwLfxQ74mgBjuFm",
  "key11": "4hpHD9y1Jsh5WZRUuvJogozuzD5rj7hC2ahGgy7nZNnfNNwtLMiYCNmR7ffX7BxtmqyaAEcvq1o1JzBKAa6jrRi3",
  "key12": "yEpYdkvwhpygLChWLntFCQVZ32ySfYMHF8PUczrm7SdD6kMw2LExGdBkKXfuaufCkmvR4K65ZvWcBjz2LdEyKy3",
  "key13": "2ZA5bnhox4qigkGiSRmUxSgnVMnDKBcdnxHttZ5QtPmKHc4AFK2pvmWSsV5EdxrfPZ6A9XQ1CqT5Em566LLNisYh",
  "key14": "D9bVuZaos3pHytEs5osBNqcQJbJp47J5w2EQJasYrFsUQQDwzwqfT9myyjzexFRr8wbMWbWAsMr7XvYkUNaA7Y9",
  "key15": "SEKNWHL8WNLGcUN8Qr43dZfQyAhxmBkTTGsSG8papDvTV1bhzHmk6S93mP3YfZ2oHXvWHJiKzmoK3xXEjEKhF5t",
  "key16": "4j5UYQuh7mBs3Cj8EdotqitrWxGVMqhyQpdqPbaxCxmetHtuqVFq5iv9bckrVuLayLfGca2eXWd5QVVBN781pkM1",
  "key17": "2YRGBa3cquRmUH5cfYceZiZgifi6nt9tNxzQu63159eQx121E28KdJsV1LuB82B93JKtxnDpVvq8JMr7oVov2oZe",
  "key18": "5DYZ7UXeST21RERxbwjTACjLU45chSy57pcEuKrvGxb8iw3rxE33UgqqTQ9g6uofXi3edLzD31kEBL3Y4bGnvWMV",
  "key19": "3rY6nuXt9LnAeLk2eknB1hmRm8aixWRAaqVQAt1R1GGgySGvPDbHg2MPAkWBfvNheqQvKEVcgsT7vfxseyQo3VSo",
  "key20": "4BJhpZS7A16cueZEzRuAqhA39u3rdGkBFZ8tCBJhbtbSTN1P8CztGdAFmubCLiGnyzVDjYnuYzMQLmTFZRcWxyVU",
  "key21": "BWyVozvJec3RfenhG2joUxpRhWgauokX3wAfvkerAuxmyyLpHvtgdzGkb3Dv7ggcDtEt9EsrmafpNQN51xP5gun",
  "key22": "gSxD97b2WBGkcfnqnHnUdQVoT76jyvJHNP64oURqLhnrP6faV4f776TFBAEnyNpH9UUCrw6YrmpMHSvJR7sEGU6",
  "key23": "2swXmivdDdj86RrAJZxXJ5NS796RCJWtBrVG5suqKryNtmfAuodBFW5ymk2zs3UHCYZZ9d5XYewdGSHiV6JxaYzS",
  "key24": "28uFqSd3pyhurvBWtbDDBVPGjeLEogNrR84p21swAx6UM1T8GEuv2d3M5iSuk9mDnSKZvDD9n99GRcVZMQNRSWjv",
  "key25": "4n8AExT2cqn2C7pb2ax5WAWHu96bCbgNvJWZ1JQkphgAP6v22HqEbRHpbKBX485QHSsyYvvFSGN8Vuou1cehxPaE",
  "key26": "3YLzaGHZ4heaX3K5yad8vpddxxdeDcjh9foq1svCnJVCqxGALKDmyENA3DHg8UpeF4QWrJrueT5BrdWtdEXCiBAx",
  "key27": "5epG8ueFTcXiLZqS7pwABEt34NGULZ5Mnm9t11MeusBbBhf7CLUDcSWtePhydgnkUFVwshGEDJygpQUqPEAAG7rw",
  "key28": "5w8c3XFxjwwScKiwADbkg85SsE9i5SM8jVNrHZtze5JqpagG2GhZHu9dTNL4vCcMXH3MrcyEBK9ivJgnzKBbZGgx",
  "key29": "9QEG3BATm6WD4Np7XCEjdFWX7xfkU7Lf4CbEmmrUqSZPDgCaju93W8im99okLut8K7NeQVRMPBJpAn5fMY8k7vG",
  "key30": "JYg9vT8apRLr9KDws97h93Yu7LCfkZv1NckwqqK6Krb1cR74xBWktMjz3f9K6MgEitEmyTFfaXCfpteLmgAjtat",
  "key31": "4yttdb1748HuUQfHxrG3VHCh93WnPdNAhnaswvyf8vFxeGzdnwnBMtCXYctCwCTutLwG7o2eRRsDpTcjFHyUWLGD",
  "key32": "379fcKtMuPHfkkVXNecipWnNE8u4YXqU3y8GQRc3RrPX8y9qW6Dxz6ohnPeHp7DzoYssGNGaYQfbg6AKYLA9CZyt",
  "key33": "4xKKHNZwj8qWw5x2qtXLenjA5EdsC3UeFsqYdMspLkFztikvZDdkPmPL9Fe8WJjpVazhCnQmt4sf1LemrVzK8Pxi",
  "key34": "2AiQrEMzkWCyGJpoNHZu5dp6SVeEbDfLcr6bvrUMEjcGYX3jZWq1x8mEpvKd8MCasNFpfpeZ4xAXTCySpv8h5mPH",
  "key35": "5wapeUK8phiy4WDDFkfhs9wtYngB2qEjZQT8MTD4Gyy7jRCCrQEkGTba14xoWvuuRLdn4ZwN1e79mUkUEfnMhy3b",
  "key36": "26qSniK1QZVwSMis5eGzULhzZVT1yTr3K3rg4ZVQUReMYCx5oU8UAfAHCvgSi15vYbtb4B1pFZuT37L5ALowmrLY",
  "key37": "MQrHwLUNzP7t1wNiypAsntJoWowcAH6TRRHJFt7DLKJSwRigwjqexMT28u3695MaXRyAGfhrj71QU3DHkZbiVpJ",
  "key38": "A9WyCfjPKujjvC4oTd54zQQkfS6A2xyWAUzFBWnERvg1tsVvRYHN7FQW8d68Scz1PwaJsu9xJ35tTtiinVVukKp",
  "key39": "3uy2ViQt8JqtBwkkWdthtANU1EiWUBHNfnDNpLCsmKVbvjw4gGD9jswpzseSDusooDSno3fbd1gtmxvi2fkJ1Hjm",
  "key40": "4jT1LkwncX34JDxGX5zzenfnVNjRi8TkgngMwbk8yHoAxT5sBJUPXE9UWX818TPzw3YPisQjDdVEJhgMtiaM8S72",
  "key41": "2V9XJBqHKfE51TkKrQK6EYySRqWrQp8CuVHquHKTCa5N9YhBzDBxGuhnnxCWxfX4PTGToLFHP21ZDEUEyXV69oMv",
  "key42": "pJqs6FB1V5EoiomxbsB23TdAAXCqkQYjGnQVn1zHV48hXGJ4sQcoMiSg2yA6PcjrZpi5bCPkYPbS8cDn87fQzzc",
  "key43": "2d7a18XKfF2YP1LLwHy6Qc86vbVzTZX7WVyjEAz2UtFhERxj5jDxXrKkBDYLAM54f954jMfvRDRmTcs8o97vjngY"
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
