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
    "2bYVr8HCXAeCHmZpHDoPFYJPmVUTrfMMZLCmfzPwfCfCXP9E8j6SDZUZBJ6cyzdWqDtUiEFrsH7VNptesJ1h1w3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wx7MSdkwmXYEuZSpA47YDpPCDA3TJbtUTnErDcqEQeZ33uWKZPT6jdY98a1LAF8gFojfZycXzdD1NaH12pn8DnP",
  "key1": "5FGcZqPQmXtmK7PvNodnzGghN6bUn53mWvmaGzD9uxG7RCmXbus2ZjytfitL1tN3J3DMopQntERDypPMkW72ZhXV",
  "key2": "5eDUKne92D6ZVDbbviN3pju5WGD72T6EBHinEtxPwE5D399aL3RJxW8SmRQw4zkiQr1tTzUTRC7kbmm8gLGrJEMG",
  "key3": "347jQZ1PPy1Kv8wShwPsjhk8SqcfMGvpQhnh57HT5z6b6z3A1VJHY2eTE9MYioWEFbknrQxWSjLZRoRpSBQLBV8z",
  "key4": "pAk2BH65PBf72jDBuGbsJHeHYivTq9h5ymU8BxUYGDiXA35zmto38keQ5HBuUy8KFtDcuSpzbme2KxGRwiPceV9",
  "key5": "3r8E2bWevRTVqHrvJ2xvYm8tHDR7cScvivuPcTFLNGg3H3JQwQGPZjiiPuxMKkJJERVBDkw7Kn2Trx644CgoraMq",
  "key6": "2pEDiiyNsPx9BL2ByyPpWkCnQGs2v7s2N5sysbayE7v9MAHfhNDRcqvVsLVfuM7ah7nj57zZiVfq2ikrVzg72DAG",
  "key7": "33hSydwSLQ1bwFPxSPtCiQSDFm7xchRVJXCt1GNokkex2TqfZiWQFP8rrENWMeCvSaL6PJBz27W7S1MUEpHMnM5Z",
  "key8": "4JZnxnN7tZtEurvTwNc5YK8VgUyVvGi6Lg75X4XQTpiMn6MoaHdbvtXZpcD9CKNqpjS7CN8XJjrPvhxVCwJv5nho",
  "key9": "4kbGCpkZ9F1z24uHaejLGpgBXnc3RP74BEYRxTQ9GKTs8zYqtq4PU3d9zHUt5TuBcKBiGDEMDKham9c6DrbPRS6p",
  "key10": "5LrQEyMFQSAKm1TQgK3oJVDz1w8VzZyPVVdbMhknXnyVszSxARS5sNExisxFsFHduxKFigCk1cHFGYU1Y2shBFed",
  "key11": "4kpK2EasPYZUYXeoWfDmkQTPjeue8tobhVaRub7YiafFUACebHTSnjyeTF1gEVaoTdUbNGWp2Z6euV3hi4yMospm",
  "key12": "RsQtzSDQm6YRxVLMHoJxRS211XKtiXr5dLx66ahsfW3pAfKtVnhMM2sho1KG3Z1X3oiSWKuMY1MsAzcbWwf1hZS",
  "key13": "2xcNc9ttFgAdG5zYX1uBpoUVrouDoUQq5NRMNXUEhTG2rCQDwBLHsYuZuE388e9sRDtbqYGfV81co2ycj1jRqwSq",
  "key14": "2Vp1a21unBaGMdq7cKQVBm9xo51g3hivm5gpqT4mHDqzfhUqi7M1RBpQSSAwxEJ2CJkRxHz262tafZcAVAMVe7NZ",
  "key15": "Y6eKgY2R6FwZPxCpy7GeFHew7pRxYgzj2RakMZaWHmP87mSwWV8e9aomVjHBhigCFDnEUszFye3rzn1gE1V87SQ",
  "key16": "2VME2CqMEaQn6zFPTFDYmC6aegcsLLSVxWd9GVCXevNd3SWcooMojpWSJpDzsWkgRySCbvPqnW9D7xH9HG7Kqm3D",
  "key17": "35YCZYkJSUyWZCuAaHduNq3WicygyEZYCdSoznYdHa25gWUsEixBLEnyhDkL5DgvvX4Aj1TQNnkAwKQXTjDAoEsZ",
  "key18": "42tmxaPHKbDiw1zxDF51HFXsrnLBX6G4VhMVwBXwM8EUNtWDbKEvCdQkjPp9pU3R8WCt271VYQEdn72wGWT29UEW",
  "key19": "Fr7qBnUwv4PWsJi34T65gUSn6NpX8gHQKBA6XYH6fXgi9UH95As7zHASJRbnX1DJ83NWVZ9nETCuim6nUdKfevb",
  "key20": "2HFzbDNsj4Y82fUmusRzxGvEf7is1FtibcpfnsPh2ZWHz6gME2b9tcGKZRfgf7y74Y6UP7whkunju8Q9rCb9CV1Y",
  "key21": "4dKyADNufodzJwbH819CXjWWL4LD3vuLgAv1aso22RpaLeM4frAY73ZdPv1huzHGAFR3EsZCKnus36RoSqMWqsYg",
  "key22": "fzsQAsdbM8gehEDZUgFGqht8omUs3io32A44TUzmpMPJ2i5xveHuLzHt5pEnMQcvm2FJbWkcUdLtX4JcarmmeYT",
  "key23": "5vYVtJ4Z4By6YXCVUMzDMxxNzW2V2M2GA9WTLD2U5HxmearsFj8mc55GQiWyrP4sPH7bbR3BXqQnWBM8KVDmDsJa",
  "key24": "3n1ytzWdh2LbeX4a9H6HQnauSdyJEyEkuPBeSvMQnZ3gJwpaH45vChp4cZ9hyNWrRhFkP4pnFWWDACAp1DryeUmJ",
  "key25": "5f5G5WUxJ2TxMUnvU375rZA2d9DDNc5gRxERYVcEvAvPVK4mSPM2fXdvYyQNYaUQMTCCrqM532ERZL485Uv2utsS",
  "key26": "3T4yVCEz1RZd9tof4iWTdcKetBWidrzynrRBmRqFkZ253QQY7xGTruasH7f1z9xb3mAGSAhogAYJjdYAhBwTUPkS",
  "key27": "2QqmtyH9WMVS7eiYrwWKkimHMegnmbDjqD8yp2UitdMxPEPCEBcSXzPTXC8DfEd5Bq6V26cEs4rmpgdKopR1MyZD",
  "key28": "5B2V2KJcL2MiGDVBBGMPa3NAJEi4D6JDaL9rLZcZThmMvgQrtZf7JvkRXwJkX6nMxwFmXHYBq6RgFbMpEKvMqYTf",
  "key29": "bXrUqJ8BoyUU2c5faVjgJ7h7xkVQAXEX6GCVYot984BitQ12S3YPeVZvJ7xz6d8aUJ1JjRNbMUK9xorKhBuxGt6",
  "key30": "4VGBUctnh8rv4pNnnNMzbcPebW3Lfyjw3kfZwv96fwCkC6ALqqgYdzd1bfYHxBsA8HGQ5x47yqmVoFN8UwDye2eq",
  "key31": "2rq19ZB6a95bUtPddPcCjYb8WdwUScMs2srdPtwSeGmFVjmvxcbk8eTJBDFpL7qfWR5RJWHgnCTDkRgd2Pb4LJ8K",
  "key32": "4UhFBCt8hWpFaRLyZfhGpG9nrHijB7GrJ3hLyPPV61X5rFH3tGsyjUWcLkbEsxAvK7hrvoNz1kzr38vYy4bi2ngA",
  "key33": "hqSBgkUdJ1iC3Jsv6QfX3LE2dGYyFTUhtycfiFoRYJu2eNknNXCQF54JKSTXfX3S9A2Ca6uWYTT6w9rGmQ6g8jc",
  "key34": "3y7j69GuYmZ6dNyWwKDEJMHvChNSwSGAp39n375iZtsJSKgBD4DrrHQMcqhAPNw4huRg24YJpxkN8M81xnBC7PMR",
  "key35": "3RCyKrWXAAJjpPNq3twxeuxACGE2SAna45TvRP5zny9nqPx1oSPXjDdMzgVwr4F57Ty6ReCvLn4K52MSXwa4ycXS",
  "key36": "5Xe2dBY98RWMR85QMBzLce9G3JsTYJNt8jvSUvCVY2qPp2W7Nhf41YDe5uaYE12C4Vi6AryucaamvhSzXvMsMKpC",
  "key37": "3StUDiwfY3DHbfJN1hsEPupMt4YKQp38iC5bUVCPUGjhc21Bn29WDfPfD5HV7pnktBdCZkv1YQDnhsH3xY37K5mb",
  "key38": "3MUrVZ4guxdQVCNm69SwMqH2HvZPZR48HrTDv5C6Xn9htKLJfKGv3y4MUxB3rbikak1cQbjKcNtbiL6DqWLaXGeK",
  "key39": "4pxAbAgz2xAB6WWRTwk7nPWaM9PVNervx3u3JGQ7QexfnUWjiwFEcb63qMFczG5kyu4t7rHghNGtRBLmMz81zzri",
  "key40": "xy1dNMNd99HKbqNfKH28JnU4dgHvwnNkK34eXWhJsgZjhdrC53ZCFt9MYLGD8UQ3bDGhu9cSEygG9sPQaxNWoJb",
  "key41": "242VmBtnXdnkRTS7u6U5cREbdy5PBzuxDZLT2EW7MHHJqBJmDJnH8w6bLriP17VecXywC4JBs3EP1toKXi3J5a8N"
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
