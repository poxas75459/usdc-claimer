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
    "2rQnEmTBzLC8uPfnmkRzf3MtzdGH41HrMrFdLBKaNALvSnB4xKTEBvHU4Bzd2jnN3HPiM7ei4zBdpruxc4paybhi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LBNV2Hwze1wrUe7iUyUqZmRsS528JNjQfZYbiD76MY6bjyTEX5vWANptyiHqDYTgS84tqZXErTWyzkapq9DLDfU",
  "key1": "4rpHbgGAGXfxjxpqn5eMhqNGFRjmfZYY2GTXhh8EzzLgn8jNbV8wFPqeAiMZU8SBjEtcHobc8SWFtnhcw6b2cH2B",
  "key2": "4r2tBUfZ4beyLo5giyh7jKYWyw8gD8fDcUo29r5VVCPafaNQu7oVge89ztoDb7cqt8eUQehsmJbcfV284XpUezKP",
  "key3": "51dnQ6DCikDg649HTZrG6Jzb1voFutiuTC2xRYER2P8R8QQE4nM54Z7USKpWTAHGwBHj1tbMey9LZr6ZQvsVa9d3",
  "key4": "2btAhWfUQa8EwTC7dq5KWz2Z4GgG3aVbEZhUbmQ1yjuSKgx66Tn8Peo7qUnTnxSGcay8uduitXXyFWvuFyLJh2wr",
  "key5": "5aZAminxDMCzBresQQk6eQZLVXsEtbusifBZYkcv8dRQ3XcankbPoN61VB6gHxN4H9SbnjYEdGXortEMuF5GnXh3",
  "key6": "2evhoeYenrvJtHTFoY2ZDLdqx66pyRa7HxQPjRbmg57wExEbYtm4rNwJryrnsnsSEdFFARHPfkhqh1kXqTe9jp8y",
  "key7": "4R26CuyybPdBURjSMhFuhZZq7p7Ykmjj3w2YCQNJ4USDSNVjiVezCEsQ8CMPbL31vezyxTWUrdq3AE3wdbDKnQsT",
  "key8": "AQrjxotgTehpp1BJMEaxpJujeiPnZnRd9jxHQuVHbnZuCyivYY2SoGLYCkJsF2G11Br8GKfd8k5TzHuErT2B2xc",
  "key9": "sc62zWS7f1gYVphniC1NuKkCjHJx6363YN9pgaJfDqaHUM1Pp77kGZnko7VgqTqzazh2vJgNiYgiEoXeztW11gm",
  "key10": "24gg1si1hrcGEnCQBwNyFLxpNFnJiCXDunr4hQiFAsBFkYFiRQN2vkF7fa8epPFsuZoPioc6EVkjKhN1RGtYgiqp",
  "key11": "4K296CL1yT7n7ib74dHAWtgMqJmveqpTEWr4FPBj8vpAUqvnmKU93uYXQnFnTwfZGhcPVSLaz3EUV2PMExYwH3WZ",
  "key12": "3zzeNDszLrqhMFG16sW5inVXqRRguxd7Gs4Fc9ifcWaUKVGUyth3sH9D1VAZATd6W3N3Jy9JnnXMuiFM9BD5MHPV",
  "key13": "52TghRzgpQdQqSYu36VZRjzTCQixaaFAB2rK6egMPoCCG5DAaCJZZBxaJvzpncLawQLgmQaeg2S1a852Y9spFt94",
  "key14": "3sxc9AFuVCX1jjd6vdwUMHPyAa3Qpj4r3CVFruz837bYTyAuoCL88Hum6j48cyNXcmJsFR4akhFpb1fd8TxG1uVk",
  "key15": "KCozqb2ENMc5mWtRBXqzfmqpn6Nx7tQqheFUMWR2x3PwCvZwhvbTN5o8paU8Rp3fJZsPSW1xpFbY2PqEHT3pnci",
  "key16": "5jqKPUofWxzfroB1kAA1jffKGCWRwNMv5uJVj1nwJZsdWyA8doRgL17s4hvFA7nqUZLrdUCGzNRfwQLBGnq56Ti4",
  "key17": "2WSoajmjbt2dw11kkYBNextEBWGeNVCBGfmK9hapG2Hu4ns6Tmgq554sjQoBPWi9oHfvt8T3BEdvz74rp5p6iAPZ",
  "key18": "HLGm3purntBGxW9AEWkFW2YghZ36rcRWsqsKZCWhfdLX2zyJrXUYxcPcH6cTrJriDqCXDU5tnN1x92uNM5gt1N9",
  "key19": "YP4YK62413KYDFkYE4KxddTQcHQgqyiLYWvWK7sSr3uyNzAzQ85Yh2m8cUcoW9aYcHqmHy7NdRnAGzvkYoyKmew",
  "key20": "3LKmyoBSFy69QxMxUo4hoXeNgLfsk1zqf9cjQcUF8UjBvvpyqJbbjW41eqyLYYABeXiTexE2DmSyC17CVDo8wjkd",
  "key21": "4Qm13HW1PTzNcwxN6DfsLrjrK5dBPt2G8U6qSHvVDEiufisz1uBXqwukpbmDBikWfQ96ztgeU345Hf4nZw7GLmzx",
  "key22": "36kFY1AKKtFS8Sq28iLNEGZAQw6s98nmKA9dpK1DEtruNpNmwvWoDPPmENSznjmjMADu7gh7cSMEjhdbXoAfpKpD",
  "key23": "5f6ZjDxm83Etamu411aT6Lmm4enkcruVyntB1kwAqxECLHaC7uAwuQF5ABgSgrPtZJab3u7p85GdtAmQdi1ohnQr",
  "key24": "BmDjCb3m5SgULYavKm1izqhSA5g3zRkGEi66wz1viafVdwkA2xFD6QXUgcYLpryxcAH5N6WLkADLDWVVAf4Y4dq",
  "key25": "5GeCnvRf5Zw9bXLZVKYMSUuS2Jnd1qXB3zuJpxZxkAxZCmCKgn5bczJjweca8ZKtTTjZs2uiejLoLmLHBKJjaa7R",
  "key26": "XCebUNcoesdUwpK4phSLkwY7RLucjHnsF1s2ZJVtYAHe6rMiSQvjqMsLHRkARurzrTUkkT1FwaFHSmZLortoi1k",
  "key27": "3je4mnMpPwF8qJShXRKEQFu21wv9Fjod7DP8BRXj8wSUqzBaKQyU3Em6eShhR4JfLJKAKGYGEgGi53eBehdWZ6PK",
  "key28": "4a8YWaWrruMM74m86h61Z3Vd2v1QcuLggkzjvwyZPpXxnUJysRfWRsrHUm1JXQmcGTCtKkinHCF3cEBd4e6jHNgS",
  "key29": "57tUgRYZP65JHrz2jyFttWQJLf5bufuxi2pmeaTfea8zmLU8MQaigiLFiKP1yPThZiG3L4j4arrfWK51gazyursT",
  "key30": "2j6isfjSW6GxTDKY8nD1f3E91vRq59PN9nENT8w4jwJousbrxxDXM2yfoGSX1bzz7mC3xmDDcpE2fK2bFR6UaT9g",
  "key31": "26brUA5WmpCVrTjfidCG5JtoZUYZBNoddmbxFgP4mX2QaeWRfcE9rtx8uJohXsh7fbDExDSharZ73V2NW7QTXF2L",
  "key32": "25XUUULvnU1KKxUy8MxahZbukGMJPQDiV3NviAUXHiNt7QRpS5T6vCZnMsjyMVqp5qriDutT7xLZgGRKsF4UYy9D",
  "key33": "Xu8JxQhM7Ym52kZYnsdKV5XGhGejHQ1qGjys5QuvTpgVgmmNZGg5UYk1aHm8vdkZVj5m5Hy9VmqBrG5QVKXEjHa",
  "key34": "3So4DpQ4nnxspoEFHRpVUSvC9LbaVqm3Z1G8FPcmBZQnLvg4eYaM5x1SVn15UkaEBFLgGtrhz8WxDeGVGpSMcTxv",
  "key35": "4d3nW7q1QmXD7X5s6uUTmokPEaxoAEEcLtgdsQg3NFSj6d4jgJrFhs7BTWiT9g5SscuHGP6jQxkr7jCzWLNZHkiP",
  "key36": "2fgeAZehL546nxoZubCcDQ2c2vpMk12BrEHT9iwwVV2vB4iq45PsqCSVVPi3XqBGEH7fZ6nNmYwawzoHytfzc5YK",
  "key37": "5QjHkGBXSvFgT6gUHEFU7uABQCDtb55kxcHLyiXqQq69y4NRVAgRdt6Ptr32suiXTYEojGorAFKDuPB8yCN9M9wj",
  "key38": "3UaA3ZbJ84W2nGP4xfD3yoafyo1f4EHEEAoHJ2jN8ZdPujPUZ3EJSYLLJmMoDywYVjY5qaHGv5BBZBNd37y9fHMy",
  "key39": "5Q3Nc3xRpr3sFKZ3YkvboAUDDgtVSGKpn75jMwMWpAvVecugPP3jBf5J5KBU91kkvSAp7FUzG7Qw6zytNqNrEDMr"
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
