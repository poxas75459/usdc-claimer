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
    "MEADxyvSreVExhWebG8U9rPgSnbpinHw3LKVP2tFsQ5VzMMFPYmqj8Ge8yXgLDYbLCeb7TKzrAYYMYyE4nZxind"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U7wjdzZntTSBbZtoHwmCi7g1c8hyhkYdN5kw3E87fKjNZdLeF8CEgcRjmqDicaG16nHWm3MTsuea9F21zQ4zHmD",
  "key1": "2t669kinkFoFvLt3xHxyz6SSfENVxxYtzBFivfSBdoSsnKqY5u7RbiPKBexAeL2awYjpAZLuYUnaP4Enkt7ko3vw",
  "key2": "Ay2qH1tgpJEXZv53PJLwDHKcRm1ncYobqT8XGDM7NsR2rFLuZ4LkpqzsKjx1npUuYapVg3EqJMujxoL3nPqHdf7",
  "key3": "3Qdzf6hyBdAfuVBA54R2mznkeQGiJLmidSSeAFx5eL5r7xgdxdt4tUqU4hG6SG7HQzoNoSuActDTnSE1WrJUou16",
  "key4": "4YEvQSzjH1mTLMhZcESawvASLhz4KgdtaJThYbbSyf8oPgFjLztUpcSkXzd9Z5MAwxfbZn35BuXJ5c9F3nboMia",
  "key5": "3jpsTq5fg7seiV6JEq7RY5hk8UHiDVyi8Mkko6YQwiiiPSyMGRfF458FVxp5k4nS1fGe5CstDjNdEW9EriMkYZa3",
  "key6": "31z5DxdVAqbpwV7goyZEH2cqoh7hS9JqLVzZA9Eejuhxh9AZ9jYrso1KLNyYLbbuxxvQdab1G5nTW85JyBMMr3Np",
  "key7": "4oRSQNf81QsRnPp1cwxhAuSDiZcN5hpawKbqeAtyXDoq1LSxNfPCNXGVPe5JDuLtELgXJm7nQB8YcdCfMwUz1DXX",
  "key8": "T9ddB9kR2iHbLBHJpsvHTd5c8dp9f9VC54GgAKhEguCA93MVryCiHWQiRKiJSiXYeGY253PBCoPE2rorG7QyeWZ",
  "key9": "2J3NCucdBwgXmygvWsjWUZQ4UjuZ88avjU3diqrKU8dwKHtHFT3By4pfFD4rkPvcV92m3i7s1jhfM5tRmUWsukF8",
  "key10": "3g15BmFa5s5mhgBDtHVyH8sQUpMiuJEAeongpGfNfi152GobfaAvZWwyB41ypoYJDQAsPxf3e5341JEr7Tpdbc9g",
  "key11": "SdxhJhMibz27nRVeiqHCBqWho2pZdBu6Q6jdXpkG2ubYNLYbxtjJGcYHNj79iaPuEQ9BhcSdXWMD3CTiuze6Y1B",
  "key12": "41qkayrPcpZKaJC9CHeeWkiEGmd23nxYYRiZykaizppaxUs7XKvFzeywgFipNPigXKh2b1eJrHoCehNmNuZhJJSE",
  "key13": "5pKApiHbirda8xvogKA6q2Qks8vNnB6bZERCyhbqAChMToyHRRP5X14ZHcznt981mF3vEf9f3K3zTGPaoh9seDVx",
  "key14": "233nDoM9sybXBctBUqQBQ3bQexW4cSv6A3mvjBtRMTLE3vsPu5icFEqEKGNj6fmtefn2AoXeWVntvB7YxYLZZbch",
  "key15": "2BbBM6VgqHCaSDfiivuduZXSvYpSMpB54EVRBZpx4NpVxpKPGzKxxgq8yyrBxMrnLGHBRnmZreXxdKkatjQhw5q8",
  "key16": "5z36nf5yWHNcytN7kpNFqyoy4cAcmPRX8pPQDCsX3xfuVU4V91PLBJeYgmHqy5kfwG6FQWW8eQjnN1GTDxETqqZH",
  "key17": "3ndppJJCZCYx44xKzbpsLEvHKGTRUtVdpH1AB4XyZ1Tz2fj4bDr3y8mp7L12nNWBnVpxBjS4kJP9rbVYoLgPoqYt",
  "key18": "2JJ7XLiEJMrmcatjpcvf4vexzMRRyzCVvytvak9H3ZefiEmqkR5oJKbjq3awphf1kv9aMJGxV3j476LysrERv1vq",
  "key19": "29A1u2wbqMUPpeY1298smZqduPSj4x3d3vkUMSiPecywfj7b5agTi7sxgoeWiN1NwbLP2NBTraV7GuYw2SRruJPo",
  "key20": "3NtVXCQhrNZ2zSSGDs5xJQ8977Q86n9xbbdg18VegwmLK3AEBVHgFysTLtMbaK6gqYSav1Zmvqf89ZwF7W37jVbT",
  "key21": "EbDXfLqVTPBb2FPVKbGH6PUUfWSpr6cVXwKPWUsHHhzbyHVnFxJyV3JgdUoVStLovTce3nAoENRJBznwNL4hEE2",
  "key22": "2hbECYBoiiLPeUUKtGd81r4mp5YC6CFbCmPrkWHDt3xpbYq7JCEtTTDwm63wRbpPraq5MinqytiBZza4AFFyXUA6",
  "key23": "4NwArE9inCnWMV2PtYa48bJ3Yvmz3twW5Y1Y9BAptGGJTTjtZJU5wBQjH37pywipjqEBS7YnuBxRkA68TKkpTGRF",
  "key24": "284Kho1v7fZ2NDGAa5g7JyqUx4vYKEQ8HBEsxHkYVcoQzfXd3b3cX5AyVcDub5KqNc7mekKFupqhoj1TEFAo5NBT",
  "key25": "5TnEsWaAEPCfG4g3w76aWNodiuexmjLkHHNfp1SLSeQfLgxqiRWUiq1BTZ4mYJU8psCVJEBGbutYDsf1k1hd2ayx",
  "key26": "2s6CMx1opidKmVFKLTXze59yzmBFHK4C4JU6y5RA7N4bXUhmSLv9kHFPW1dvQDioY1rgK4dFg594PwCC6hoq2ij9",
  "key27": "45q2v3q4CDv3cnDBnC1jRWvCZcYN7RUmxafwBRd9VBwEhNdf8GjiFx142JyRcpiHcDx1Yh5VYU1aoZvXHBttbN6g",
  "key28": "NBD3eoxHkLBLs6MaHZvejHMcxsz6jP5k99mb6TQ9uZw1iJrRpPapHPZDvmFxLfjFnGgx1DzEzL7tEkQPccjw1JD",
  "key29": "53nYtAUkSFy2za5UcjtoWSBNJeCGos2oeayaP71pvyH5vqpzmUgQHG7HpHDfQQZokHWT7nsyVyjGJorrufkV6JkQ",
  "key30": "4LcdjDqrkj8uzbxV2JAp3UWrSd1ELzCAwTJ1hECZRKgqdfpwR3nW6nJdJ3oAn56RFpAgyhsekR4PEprqTXkibuUd",
  "key31": "qyBN5uPRLj8wZSc28wobXTAs6R9Rqt3dew6TnPzyusgfEc5SMGzgNQBJWfopvVmxv4C23QvoV1q3xrtuHJEZy5E",
  "key32": "3Q9asbr59JnEcXa3XgGrHarwV4rJqQWYzazUGbuqseaA6swnWgZBqQXRBGo44ScPU3TZdGn9Dxb6V2Wh9Jb2CL6b",
  "key33": "5p7tdWT6eQJamDCdXgufBPcgK3ULwi4dtocoH3bEF95gCD3TG7WdQvfRcZB6QFQCWS4wsvLdq5C6bHfmmCqiCtsG",
  "key34": "5xDVjMoYiAUdCgx2jQJKgR8gs5io2pdreW41B2GbdL8oHSayf9EHWCfasP2JeNegEEhsXWKdGztGpCDEVpbmGWdR",
  "key35": "4oUc2kaLDqREvaiKqLr4ZM88j6J6A9BtWM2itv1mnnA1UtzCSqwefVXSiSsa7inPDaUoKswYsDEhNGUQgWTABC9F",
  "key36": "9bwz5fiAHeXQMsE1ww4v8AngTq7U74fJZ3ikC4aPCTrXSqvECay7TaJ6fipaWP7sbnfhckbtbJGkCNTstRfVtW5",
  "key37": "4tgviaCKhYBsTJd3gUmLC3sTNaQivEzK7jcnQ31kw9dhuekDQKNX5GuGcHJby3fMkbUph6sXybYJmXuQ2u5Kot9b",
  "key38": "4RjHUb2KUtwb4wzA6nSmSkEpNXJjPruELXwfXj6fWwsraMdXtaW6dyad2Z7ya92Z1Sbx4xWReNcmdqhiwGUZu3Xf",
  "key39": "3uSinZJxKx3qFNG7KtvSv9cBLQbDPsdP54iq27yfDEkk7qogcPK9UpQFdcPpQtNkq8HyuB2cwCgGyaW7ycAfvcAC",
  "key40": "61wBsRGRQwzh9WnUwwfhfByZqQJeM6reyCuVTz3V3ufiYPRGZHGZUSkRu7mhX7Dh8TKe34tkcBmeP7h2DYEbuEdF",
  "key41": "28SUdjDp5frgFzZzVdkVydLRRV7hxjFsL21GBRWkkmR6PNwLxCEPX6GVR5XbsvxTGT1WssLWUHJiLcvUoiDdFJ5a",
  "key42": "4X8GdCTvJjhTX9A3wFXg2W3ZJyRMQzKUZKfcy4B6n6PGT7FVdgaPHodbN6sCdpRgBe8xmSnkw7otriJKk18kzpCd",
  "key43": "5obxTqYADsstmj4qvXgRXHG2daqB4NPa74bCcS9YecXL7soSb7toTWGAbSpav64HukUB8VWQFdWCw8GrMD1dbGFK",
  "key44": "51DQCaCMeVrbxB3tziZexr9EkqDqUtN5DG6dUBzBcSxopWKePFLAaLkLwBT5UU1QAVYhbaHQTSzyjADC1gAeW3R4",
  "key45": "5nFTCZr8DajsL3QVsg7B5XjBK4Dzjpvj5M7anHem6qJbkBk1PMKFWKc2CUFFa59eAnP3vNictUcynMY6Bgtg5pgd",
  "key46": "38sGtCXHwSHG99HVG1bZ1YbvayjDYMzxeLuBoLzfKT5nBzRZpD6kXan7h95gapmc7CMSQW2LBKYngPweUgDsyUQ7"
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
