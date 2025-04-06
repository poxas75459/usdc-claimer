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
    "55vgw1cSpN5y4rjvjSTmjUSCGba8fmRkeSUQUe5SEtjjXUnkebKMfnyH2KPnNxYZ3jVssGyCcoXsNQDZ3sLzcGf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q4NPz3eUgDuVd5Mxv2G9Kh3DTtvtWn7AMmf8XvbYwyWMTLVoz1fusFgmev3aNfua31B8kwALRBhH9mp2b3aSHco",
  "key1": "JCkDNJ4F8qGcD8z5WvmCt5pLiDKK4BBfQwarKvT4vuMnkL94nKP5KijaVqcnaLVhXKvz25y1dpHj9EXMc64EtSn",
  "key2": "2dRh417wAUHg65B1SnLTdfz4npQoH5WcnDk2DoviApnBTL5g5mcUkBHGLLXRaZHgePWpe3aSsrafkUHrqSLENDe1",
  "key3": "5p5pXRiicFKv96LapFVVpp5RohuekkdD8VjC7sdXPoL1rZSsFJ34ZsZs8tNpL9YDUp429EaccJcDLFW6KE8zKf7y",
  "key4": "5oegvVkFK2SMf2uGHswEsRNNuQCsyYpMSKKmxe3ix271ixu59XaddGmBHdHBn18aX5ST2TN9WsweKPJWaPYZdN3g",
  "key5": "3yvqsvB4bazKrBifEwj9ReSTuQ3tc2SZcTGq7QcMwmcqXbkYbwQU6kqojDvPDwbU9d683xBfAJz6FZPMGYTeUdFd",
  "key6": "2C8C1G5R5qnCFN6mmKwWjSSyzYvqCmASoPf24wDpCR5crvNafwgTAKMLrnE89Tm5firH4shckhFQS2zuNXRwzG3t",
  "key7": "26CwVAoAafopgHokB9hDg5sNL9NxjySeq4YeUR7AEDr3RZtD1KopTzwq8aT2XyyfNazbUTfLo8N2KhTFRnnrAG2y",
  "key8": "3ZC5frYepQkEVg9o4Dd5qv4TnwLZSCP5DrsL8F5CokDXQW6QviM2Q7YMA8k9c7r8YeBQEYjTqhqhJ4XuqN4NjDqS",
  "key9": "226ZJHGLvWc11R8kTpcbzgFpiZmuvnfe1hWbkXT9MjrL1vAikDyr6697LFFB9HULUzhiJNorx2fNMHHQt9KCSPFL",
  "key10": "2MzZ7swVmpP12A1o6nxMvAgp7u34Q1iEYCqamU3LYRbRjV9SX89Nxf9b4Aidw7zZ44x9GtviLf2wioJ7XiZMYBL4",
  "key11": "57wDsqKqoyL1X1LhKuyYZYjYbanJFWEMGZwm2mPnBe1hJmqdm6yPMHM9mtwsjVCTt9dxy7zVae4KygiFdqSsRRxh",
  "key12": "56ooUjmiQrJk9EtivwfiW7LPn15QhdUgRJrhyHN448kDMRdT8QFA3tQG8pCyEB46zsBtZZ47RgkyX14NPekUCzje",
  "key13": "41Ptag3fP54u8JHtgajND6sjmnkGNcJg9W4GiDvonxzCYQjHYX1sMeCEQLeKLzTdujjbNhHeSLRueppi3EeKZjod",
  "key14": "5MNEJM45uX87vEf6svSpr2udHaXoiFPMZGtw7fqWuCEyeCmHLSx4Lh4TNcC6GZX7VWhRYWeGtqfoxgDQcMJWXyeq",
  "key15": "3HJzR3aojWiFPSwmGBEJ6qNbjuxKL1FbVWUcHbZ89EWqNh2xybpap9uXEBfW745oT5wvEMwxHdDncCLU7Q3s1RmM",
  "key16": "2WCz5TtfUVAz3hRvK8GW2FBLJ1Ak2EUtWZ5yEnu41dnE8MDRSLYVTYzaSvujbFedbuyoQZawt81ZiPTqs2Rtq8vr",
  "key17": "4sbXMkVJRwJc87oi94CiKa1p85i9kzBVPqtouecCz2fACt5Tr9g67iiDSNcS3j9QNRj2A5kkehezyZr7qzmxmFMV",
  "key18": "4uMzA5csN7HK8Q863PwKChSrtAGtcnFQNM6B1o4U4JunbU6apCzJAnyVRxH28opdhAWMyZJBjZ1j9tKmzEagaccG",
  "key19": "mHajjrGrR62rTiCaVH5RRCSvveE5ZCnRaT39PcZWD8gRWga6CSwhQPc3T6Y4HetgAa6jVs8LgNDXXSLwwSzzcgC",
  "key20": "26TMKaKeyL7RJzgw2cA2Jhe8xo2kcqypz8w6TJzFqPNVFX2Pyzp85MXHayd5cbwyBU8Du7ATYENs1tGF8ch1XJuE",
  "key21": "3a4oQG7UBgKzhapSrcJdaeb2LwkygVutzmnSqpW1gQEMrVSSbyLwogengCKLFCgLAvwaaoVN44h8f2zeHSWQoscR",
  "key22": "5DSjaKGcwjAd8NdonWsxuLfC9cnmsAbfdiCxJCnKLyqKLCeKcw8hWUdaEvg4Gaw3Tn2qZXShP4tWPZ8UL2vtaPX6",
  "key23": "2Zy1bSQ326GNvjVEWknqKruYxwGKLGwRmXTL6zMTJubtgtRrvJMF5sRF5wVsx8C8MjBykRTTqV3yMjyA7Hx3XCxv",
  "key24": "5WDf77zcjJMcsW7xSJsxFZGm7qF7PPUb5i97oojgg3rUJmEpLtxZ2wTxE5FBAhmBxqEnTqBo8NAM7sD7EFVTyUDz",
  "key25": "w3vrkTFzqaxyBDR3oDvpcNjMfS4hVdPBDhCsmhFgZv9whDzC1iQa8uUdVFj5tiSEyfQ5hMsJSmQs5aP6yAbuJsV",
  "key26": "5woazwTK8DdgVdUwmBMTJGrWuanystpztju78NimzAWFX1hEBss4MKNjwJECbcdjtQmpYXDY29ars27Xt84LLZpZ",
  "key27": "25mw6anqatDSKdJiSnC1d9SFqHetQfL2EQkwV4dUbrj94PYL18b6qsk6ZJ1rKWdRvDQvGDM7xvPWVUFQ9yzHeJ2q",
  "key28": "5s66fq4fNrAfcroG2anckZeBxS4jUFbgVTfgR84dpGjohAFwohsqjFUjNCR2uxtNC3ymM57f2GW44jLo2d6oC99i",
  "key29": "5631PmMojhWRba8s6YeKLKbEf3cprugJ1Z6RyhzeTRadeWxbJkhwaCUqNA7FX37WZ8A7fRUzT7eXcZHhjx2ak7uV",
  "key30": "UpN7NGb8uLhFFYNXpxzQotgYRxGZtu2xsXgpQoxmBhPJnFqTWsc3K6VqqyFEUeRdfqy843TcSAJbyXmJTY8WCp7",
  "key31": "4jBJtrtNYFeF3yFy1eMM6d9AVFtSDwX1cefqoapZtase3hM1KmrwpXMJFGNRL4WbQaAg366PTziDo2pJcR163LLp",
  "key32": "5gDEdpfAKt8GTviLMgxoLqpYVACepSGhasoMn1WhYS2QLXcreZsCpJrYHa47apdHySpRnjzhiQ8usVAWdfNtF9A",
  "key33": "2szyDfEFUDjCH47AFHjbg9G4hXpQ1p8S8ehZ16ZVwUZCzJmzuS8MCCkCBKmNqEx6gK2DzbT4fdT52G1QTVShTzN9",
  "key34": "4kimwSBMa72wJsT8cD3f7RnPQ5yF7nSKhgyeoXiXfEKExg2Kk7fbiSVP8qpJd2Q5xCPxqNKXVyjUat3qc4SsP3Tz",
  "key35": "43P9skVGsbnbVGX71dyuEiBnRr74aNzubErcwuzYoxXWL1GXY4iDCQef2qBTmqji3uZyTDwwk8gEALAUmFx9NrY2",
  "key36": "57vp92DZ1nvDxGrNY1aa7hzFgU4JG11jhhk5sTKpsYMPp82RcvwgzS9YF9rTXp6hkJF4J7WFSvdyFYva155qzeXC",
  "key37": "5dDsCQWZgD5TK7WrEDtN5XGTL6sQ7cdfurmRQq3WFqfoeYt79bmU2za3LMSJqh3H7WurKeq6wqkvhNM8S3wbayHP"
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
