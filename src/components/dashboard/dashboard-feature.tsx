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
    "4GP8LjLACZQNBijpZNnsUEWnwCjWVKmDM3o9toAGrVd2VrvZTgtgy1rFyjUN3FE2G9mtYNS4VCbdBDtShwWB1QEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g8wcFSyWXEELwAbzucAvSYASELbebzNpT5S92C3wEZ9Bgf41fgGmxJT6wops4HAgCHFkJ1DhqnDnkUSVskkZ5LP",
  "key1": "4mtd4L2GLV4D4FokSZSyqciihmny6Htvkb1FV26wwF5uEezW8kwyt1S736Mki3AoJoFMPVgm9BubaPQWF1h5Lrip",
  "key2": "53vsBfSoKoVNYDFKVUvqZzaVW3QFnUnZAqorKU1ipfasySxqMBWFQiEZPZVZVLpht6QjEkm8mHg7ScetxZq51Gzt",
  "key3": "2FmSBdrVycsAJzxFG4aEh5RkDnLj1pa22bHxnRca3yZrtXRJscxqGCw5SUC5GMTHQR6o8Uy6y5HxCVu8pDoWm4er",
  "key4": "UyAg5U3BYVaXWZ1LD2dkVyp2vomQZzWfXqJRsD2YywJ8xCG5vsAPESBUqMuubhcw7bASigQBaJj7MdWfa8LMqsW",
  "key5": "V82jtk95TsKT4j5FGjNvCrboaRnqVbfXTcWvEq7FqiMm1a8zJEz7ZwcXkBXdbyLSkWgHEwnDoXGMw5xjDQ4Aspo",
  "key6": "EhcZAEndFZEsp5gyZBzVe9wsQDcPqeDjnj3PCkuLqMh9tMUgsivNqUsYHZ4WMV2XVBZPbvHzVc2tRVJRB1ixTBy",
  "key7": "4agG7Pu8tRDiYV8q9A6FqKEmCyNKT913CqQeHi2K6FeusbEYpXzFQktjFxjheNkdyaiwH3o6RN9XvD4UYDquSJR3",
  "key8": "5exq4FZ6pyeRZ54jqzuekRF9FLSihSBb4JhcBUQReBVrBeB9vF7CZMaEiy59sYDqzhxjASyYUMCWmAUizVL2FqW9",
  "key9": "3U66KA9hY2TmhG5PDyZWTU8hnFFKDdMFXTBBoU6qqb2sWkcNuqpNvaAB9kjq5tifDcgdP1mJPstJ8MHGyrBD4akc",
  "key10": "3EKE8k9Usviqg3rToYpxKgdAZEW3W3hDPc8eB841bGaW2JTmmLyfcwcAG4y9XrpPbnpRcnLbu7NG67vURd8zqzN8",
  "key11": "3iKUosZgXVzyQyBzY7aZjakKQMb4TiUjtAg3UpQMtaPiVB4D1uY2Kjo27KcJcRdeVQUro5z4QKekZJMZMcPcbY7B",
  "key12": "3kvLYjSeuHH12sjNMnhz4DM7RuNNiqqPGSm7McUXrnZ2itN3RZ6KG3UKeVC56NYoAFzSGdEfDSwevQJd5sWzAkaA",
  "key13": "67R3obJ4zFwJL1JStcKoK9wrCM3pUjBJqEs2hZJR8D948zaQZWfoLFVEMrKdMpdffy8QeC4nPCCDE2ZTKdV6ZQp9",
  "key14": "3yWAb4TJDoJ6wiSkvMDJYUvWgyaAKrQmAADG5JXSgfYDB29cf7GQiDr1W9hhivyxQuVdeG429ATUo4wJbWRD9yxX",
  "key15": "4kd4HuPN76CzT1i6qcnN2CW7BK2tD48vawaYXdN3cynXbcFMMLWuCfe5ndo8rx7WPKURkNLzFsaSx9L1MA8E7jsq",
  "key16": "28eD2eYCF8UgbXLpCKwEYRj73JKsMHDWzSB7tQRPqo8hEa797vCbETGXkaQRc51esFdAP8ehpjm5D7DFhQ31Wr6C",
  "key17": "2yVxocDnuyJmkVLGVThzvHUE5CLegqpBTZCDu3CWtdjY7GSgptcR2Ko3DuLsfJS1DNPT7hHExzKB8bqbFu5MQZM7",
  "key18": "5TAVAc96SxBgEmdKX3Y3hTkwZGWXaRHyUBqYuwGhx9coa7x7H6krAehhNFXxomXVFvQCQmkRrRkHA8MWwbzBxa2c",
  "key19": "427ZbdXEENk1Lfc7tEZiShaJvW5eYofgzJbZqkynPUpzrvbgYv3nYnt6KiRyct1Ffy1tAdXAdzY8k3hjb7qqht6r",
  "key20": "4PPJRTueKWTXVvKDEuCZ6sGy8biqJqg6cjpzceKTDSe2fmggTtDjtppUSqpzTiru8HmE7amESYR7NpdNSr6rhnYs",
  "key21": "dNHkdccsXAc7WGc3WmdjW7mPWs4m9HgXSu4XT1Rcku1k5uVGrU6rqVGZaTuMq7J3azdEPBhN1Lnf5UcRKRNWNNh",
  "key22": "2K2uSZuQucBdMCZBb7xwR3ayoroRcjntb6NvdDfYjZAC7FgwqsB6CjJZHTQRzcZmH8KYcSze5A5Vyk1nCiTPmZc5",
  "key23": "3C2dfQQZZ1m7GFUNNDVihRQgRmya44QTpAEz9v4SqtTKaMAWcdjVVWq9BxYLYjfrN9iVun9kWEocPHqKCWKDEF4M",
  "key24": "5BSR7RwjeZevDpQhqK4WD4MyJ1DVzjnvFrdt89uEgR2T24SRP3HJzzmhc2oZbReSi3MsEVsaPMGps9Ei3SqecDn2",
  "key25": "2ft84tkD8Tzf8itchYPo1cViC2J7pkzEvuYk5nVVT1CGNRQaCoGu6DVUvmxMvwRnj5Fe2eo18HCv4jLfgFHQ3hE9",
  "key26": "42RxVc9asJqe5wDL2wtrUnpvss5F1jWQVB9vCCxtgMS4qYSxFNzAHgEA9xYYoXmmYYQzLnfzo6YBy5wegwzgAe66",
  "key27": "42R9pNADXHwCM9pLCzJdSkPWoVQLZYFWZPqQxEgvVFCaGiN5PywsYjL2d8QHexh5QAEMgNHcEAG4Hj5JDTBhqEPJ",
  "key28": "5agXBRQU3u1EjcA5vouPR9tc7bLtpsXDkx3wSNSgVepuA75nkbPoD3i3mpstfDpQ13kruTZYr3m61wRWJrHL6Bzt",
  "key29": "492KSU4f4XGPHSgwbtyYGRBukX7pSeK3bgS57eZm85WWr9Tk8xCK1621C2pAjUvEHaU5gTLoi1FmtCyVGDkLFhJa",
  "key30": "3rRz3Ckj6n37gnYbNSEbR2FoK1kCg22HZpWypVU1k1U3gSsnDBiqCFB2XRBEwZMvJfhyEqS8hmvsywxD1E5uo24m",
  "key31": "5VRCbGim5WKMPyK8vTDuxfET4J5zRaGrXMsURMQMHSZdC6uEq1hsPhMwoZpdnQfCn33AWboKnoxpjopvASLXahRe",
  "key32": "3HmKZot2Bc2VNucd9nGHLTWKeiiu9JwPY7ch49F4JWf6FkQKH41T7ZMPo74UMPGJsgCr6pewZctD3KtemKjhyb2N",
  "key33": "5iA1xNoiPSqCV42n5QQ4vE6dTJihzQ9L1Pd94NtyxzKKXdHQpVShpxsn7TKa1dtD67j9rSdA1KoZwYuCHvAfx1bR",
  "key34": "24Nj2HCDjRtnrF44e5iXjT6WZsPXiQk19smtaBSFMHXfkTpVgYygAgrSe9MXhGtW7zo3sTR4zyzG6yJt1ud15pUA",
  "key35": "4qN4mLxJZSoYA6N8ZFmq3dNwXRNNABcBY7an5B2Fqr4sSagTgPrGx18WeLmAMYx8L35JXqqWXTRKb3GzKKNbz28E",
  "key36": "5pdTQToy9fq1yRXpCyEmkVGAmgeDTpqrt52b3XUj2ghFabb2zrBDrjZZTcKTsQ7LiFN6afKVB4JjkQTpsT2ZmRiD",
  "key37": "4HrLQxedZxmtTtdAuQTRjtjmpYwYdRYJW9HP7FVenWGJ6QsHs33bgSKkBguy4UzGGiQjNo3QY1FeWWXrLEQpP5nU",
  "key38": "4opTfvpNPqF1bCzwoPQPmNJpWNwt2prrNj9YXWKiBsmZGKW5rgDdmmCCNmE6d22cafvtcMhW3GKvqRqBxZ5hLULr",
  "key39": "DVCjSXgHTvhphyJNWFeTLSSeR6i8toj1bv847LyT7Kn4h4SWuYmkKL4s2TB77SvJnoVVqtFiZqtvjEJgBdbgNX2",
  "key40": "SUznVmW7sRY57brSHuasEiu8fWS1CSQNt2Uf1ubzjwW6tmNzyB5EkJbkVNUp6acTCY7GezspCWYYyntUvmahFtb",
  "key41": "46YW7qFnARUGBMe2rNpzWi7zft8g7ghfLsNrb7zugage519CoE3c1BU1JReLhfyqCnRatzz4NSMoVZeoERZ6trCL",
  "key42": "426FJVFWy8G1z3dv9RGTkc5CC9R4TaXgYwozQUuS64aKbwZSW6CiPGG9JFwRjYMqDcCTcYRQzERPDRjnBEbaHCRA",
  "key43": "3FaEpJNCu5uZ2SZYbHZgWPKEEtstJi1sXZvQVszGcVkVTy1nxSHTDUXEocbqfi4u77WKtLcBV92KjUKMat31do9a",
  "key44": "5b3wYAVUcpJbHPYw9FSAkvj7ZEFWBRRr1kUSLrKKFFwBDiA4M2DWaDGC696wCH6UPF5TMmCmYf7mhgo4ZiT14ZRJ",
  "key45": "5bkwsZpz3RSN91FEMM1q8XFe8GnCF9QArrVM2nRYeLFA7i5T7tbGQUq9KccWRxTsJTW2AfBykeCzJKfMfFJpWUBf",
  "key46": "32mWuQ2m45TG7tajHQRunmU9Nn8VUusW5MLvjuc4D7vce8vrbhFRGGqgUeZB48fdcj1wKXiKRGgxJWD9D9ioDy8Z",
  "key47": "n55F6HUySkc5DCkwvp9bKMg7opoRjsuu52iu2qq4qW8G7Euq6Km2C1rh9KvusnoFhASF7uRMsXzHUikByPbYBgu",
  "key48": "59MBm4t2vJsaFKTPUHUZ7GtpKKez4mjhQ4PBAUeXX5csWTuS4eDESG5tcKUZuGgioY3Vynm9sc4hkQPoFLH8jMwN",
  "key49": "6127ZCUcAicCNS6zh11PB9DTVkiHz46MF14aahXbKBaooZi6Qt9G9DRa2wLsShh797WR3Qk6yvEnivL4CdJNyc6x"
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
