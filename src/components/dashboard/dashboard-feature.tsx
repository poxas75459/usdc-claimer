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
    "2EbPbDL59xVDYDaTWxaJcp9z6AMoTDzS97CRwPLPpBjrFr9TK63nZeriRVRCG4cAvViynjcq9z7nUfx7hFfyknoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32C5hjw5xDRmgmZzWY343sgJpSSZh5w1X7Yz3uJD3SVZvfCch1KoUpWmpKDwogZwHDsA8GWtudyrtSD4KNNoPZCy",
  "key1": "3i4RFwmhL5AkARAguoudaPBa3Ce6hoH6i7GSgkUYWJVEPfZJb4SM7cX1jzhuwJF5SdrRb4q9DhchiPRj3x3Xghv3",
  "key2": "m2qyeBT1GjSMd3Uj9rTr8NZFAaQSxpb321PrC7tnDAQTcJyvjq5FQwRE2S34MczxUyRjX5TQMpCYRjoqg98BPQg",
  "key3": "61o6bFehZnfKtc3HXn5Ef4tKVkbiLokzohjUZP2K6pHw3T2SCX8tNi5oxBq4ZF7BCkKniptzeBXWSeCiYdasHRpk",
  "key4": "4KseccPvk33A1W4eVZuMLJRza96JG9y3LNxWLFirt2mh7A8AmTodJV8dycUbd6qEyDLoFV2X9pXSjoD5GbA3E76g",
  "key5": "3otqhwY69C4VPZB11qMiBTh42WaQJoYN73AutmPpyq8PHG8WE5RVp9w6xK2v4MFxiTabmhQWYzN7ntFXAUTGeHsy",
  "key6": "38N36FFEaa6Jed5neafMk4Zn63WuKBZxWAsZhRGYvYYKnKm7c7oo4ZiuTAtHodgnjRGXSF8dAfyVSZT6QXNJNjVq",
  "key7": "3kV4x9aSeHF3xzfFcCPb4cGUPVAjwbooNJHaJsMBREV9je9JCbtoKCD9n2sGJ4ZknyGTpdGYuNeUFN4WHB7qdGGL",
  "key8": "3kKH9SrDFgq3Q63VoausEagxG4SQLq26xCjUsjE12xKyhpTYZmTaWjQz1Ruzrg1BGNHDDUywEmHLqREvJDgQHQju",
  "key9": "4Sv77FuZWaVJwaY25Ycyw6sTQXJgtQwGreLdzECvUvhgEhPsTqkC3r55z28nxSUv8mRDGbCNknuNPowfkRrnTUF7",
  "key10": "2bDbHhyPBamcB1nuqQsGRPsCHJVd8mab7utzS68bZFzXeZMzEiH3Nn7tyBXn3DbdttTGgSUiK2UohxEgebH5XB1b",
  "key11": "Mcu81Gjui9Jh9RzTRkZJLZQudrQGfnh7EsHctVefkQXgYzvGY1iCSjE1L9jsjiGRGF2xFhAKSyVFSsfN2Kaoj2w",
  "key12": "31sBd8Hu2TRqfuttaL6rDh1LsFdLea9ftzMmXdGDg6ijQ5XUaMHvw1UVcRTvbER4shSsU2rGRFYGP2JvHtHxDzhW",
  "key13": "31if3bcfBNsMkkXeL3qt6NnAsz5ekAY513a22RErZg73DStc42UHKevfG3sEM9ncvQ17yN92CznNautXnmyJFsn7",
  "key14": "5qzBcCfmwPJ2dW9ZudFQtAR915x8r43scDVcUBdhX1XFfu111ghjnr8FEcKwKQqoWBJzgHpQ35f3vTTyQFEd36ZY",
  "key15": "5qdbGsQP5DM4E1Cui9h1WB6LwMnbynj5ptDSSkeQBvm9LfuZ31gDdtsfxKBjWCSrHv84BxtZY1oL8k25RLf9Y5cd",
  "key16": "24wdGV2o7mE24XD4tJmkeWpu1xNzTq1uPF4Rn6vPp2AYQowhTwLAnkrCGx5xtwXMg9XZ5AF4gdYmcnidkRZoMhdu",
  "key17": "73o4Qcz9g5BFk9U2arUHJMocNU62UcazMkrsW6hgdTR5JCdJYnU8dPo8Jug3yp8veMsDMXe9LB1o2GJQjNFTQEi",
  "key18": "3rG24rtYkfCxxw5Fi42vNiwBmsTogQ6SqbxCQMtoPjKDCJea7XdqRLs2LUt8vT6FsgQiShRzweZUamavCxM6iKVu",
  "key19": "2QtVyLHW27UMKH2S8WiLGXLAG6fgXGSqkwbFaF4T21SYyZXNwtU2EL9JFN2uQbt7eBvKJTYyUU2XmnsYvb5TQ8hy",
  "key20": "2rhVwnLCiy27EnvnENqxaW8cQjkc5DQKNgQRDoXHfBdGSp1E1Zh7YDci7VK6Pg2f12beDPPnZEpapphY8X9jCM7J",
  "key21": "63UCPtR8TkSnZnRjaSq7J3F2zkqjgZuffxMMdN77Qru7mBGu7cff9iKahCCDHQZrDsmKgFb7uNfTPzssXdRMY73D",
  "key22": "4Q75FD1GdEbacUHw9PJYWv8kVMHMj79CH2EGZ8m89CG8SqgeMDThQmtgZ3E4fZ1TDfFUb8JwYRqU5bST6nFFcT6D",
  "key23": "66oQuqsdjQMQrtvKH2jwo63k4BjdxPXxYGigF8RoZxrZwGvH5cfTx9ekAft9qQ27wibwZMAebav8uNLeKfvMcGsR",
  "key24": "2QgVHgHeGaFwsZLJo3DcfwXrZXosHQmK5Qz6ALUdYU2vCGekUTKw9xMwM1AL6ctx27nxNxzmfARg3cdcuAmzWDoq",
  "key25": "PAWQnR1LcVWwFwpsDUYLNRXo4Sp7TAzXo7fFKEbYxydyPviwpekNUGU5hxfZW1ZvpkjpgeZXwxS56cU4Dxa2Pe2",
  "key26": "4fkU7C7ZrcCPuywireYfoJnfSoDzrey7MpUzmKHwLZZPw32bM36vdzhTZFKePkUzHKVkdYwd2A2RicgRofGgHB8a",
  "key27": "xYh4pWJipmPM8Cq7YxxSuwk2YgrDThZZPWCxs4MKGT658wt6m4VNuUYVD69ezoVNno75BZ9cRafw9ikStDK5xc5",
  "key28": "5NvkZ2dRFfbTjmBTVejUU9Y76b6pGxmGouEEFRv7CBKEjoyELjyxeCSQrzL1LR5q6jgLoAzWFfgjhaBzYxFhrtVA",
  "key29": "5rMZE8nKnWsbtJzgdFLpDvivxZG1RJy5QHfFMSBKdAzzYgAPCEPpq3Lhk7fuMUt7AXea1BrJU2u8K1dSUAbyi7q2",
  "key30": "csGohUvPPnxTkB1ap4Y6xPafWqtwJf42xyRms3fMpRTbMmXDETJxLKGvYJsdwmZJVkMCmSxVwhGhYVgNL6fFpUQ",
  "key31": "eCVeeKWUBY6396mMiyRGGhpaoPxcjiKQ9umumMCAWhERQRif6kd11QaMMHEjqrocJddVaKNUdnUVyZD3XrjDr8S",
  "key32": "vBfpKB4bREz69ZeECjMoA8BMJ1fgzdDSyAvYw5Fz6ozUfMPFLPPxRdPX2V9WiXA6fF3ixy1WpbA2ME4dVUGXq8G",
  "key33": "Y7CYoNNgeMvVBPK1UxGLfJT4R3ZeYdJanRfEvDig6BwKc2z4gbZpuDn2cPU7xYCR9ZDo4a7fHzJSUFTwYC4jaiw",
  "key34": "4Vy99yMGuCTJMoZ6XB9FvVmz7jNAJ8F1ymMw3UvYkBF6W8T7evJKSpu19Mu9QbzvhkhuBhrdeVaTF2WbTNmpX468",
  "key35": "3TCwsLMxHShe88F6Sr97gp167jhNxkjVx9ueYihZbQdx7zCo4kX6RgkosnnrzsD4e6xwREcoBGRohCaCHGjfbh85",
  "key36": "3J5T6BwfekW2jC6hEDQte1MGXPbZABy3FMh9ZFa8nGonepXR6gNof2J95UZBKmeEfaDsihVY5eijPbmWVeLr6GoZ",
  "key37": "5S94GU9brPrxzdCjULF61XbK24B7ZJ8Qnk4QBiNeKE5VYiAAP4HYsRY2JZdX6KbNjDJVSuHbh56s3cPsgDBKsFAq",
  "key38": "5jNZ7RdBTkDeBejGUiMLEbragDyz17k1Qo62T66mgDQyrsztUmmaXvLx2X9jdYVWmX4WENfBhMxNW8NZkvfckG9X",
  "key39": "3k9QSeshZ2HebkCdwDtcEKt6rx5ETLeerytQ6aTuDC31fJG96Qzj8feqrqMrvQJumo2QKpDufu8Qi2kR3apf48Qd",
  "key40": "2cW5eZNWqDPHENqgT3b6xd5R32EY5Qjb5X1BhwuB4jGgcchppaULXkfkbfkq66DVZ1Bisq5mD2BMC13ovvh12Kjv",
  "key41": "Cz1zttMZveLEYLCkkajWjrUykHmt2N8HWHVTsWQoU4Hj7pUYeT3ekq6X6kX43sfUbHQPt4qExEaJVpkpA35Qwha",
  "key42": "3qtFrjNuBNPu4oyQsDzd7zzZ5JL9UKsxf6cFVq1V27BrMMEiCiVXDszdfzBrNbLs4UQjQ1kS9twhYQjLna4xkhcH"
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
