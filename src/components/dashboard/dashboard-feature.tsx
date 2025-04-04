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
    "zo3eavwrFRmuowkDw39Saos5HZpm1okF7L6DZ1o97ixBUj2wdckUAYwudcYauTQ1pCqxSZdXbV49jEKmCVAWwUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24dtbhM97rEjjiDcGwzB44QHDHy8PR2qjhdZRKxXYEd3V2vaiKc36cDLy43CfYUcxKMZ4Hq8rk1TsSQ9gJtkJ5jj",
  "key1": "4amKhVWUqCWynhWP8d2qrZ14hDekHzyM91L7rn3vUMeHkhkjNGiP3oxewxShzLseNmr19t87sDU4DTCm8JuEDEdh",
  "key2": "3ZYevmPJ3EeEekQdaZiEfCzoshfA4LrPafqViNupeyHYtZ1cEsuoKRzEDWPpXVh7VR2X5zkLgcJzbES1mMV7KDxb",
  "key3": "5EEjmNKCSJxDxcxaeDxVsYVU4dn8sZdTEC8J12JJii2JmoD9mR1Xsq87UYzAJQVGYNH5jA6jMDVKCkGcsmgEPZYc",
  "key4": "5PFBTSgPFPxMswEi2Tsp4tto9DV72w8ZQSWZgN1VbfFog9bSUuc4TRrQh6B9hSdtUsGhpUavcZB2wz1LUq5SdmPd",
  "key5": "5VSwqpXmJ2vz9KBBDnGBMqm9117v7pH75BpQCv1C12HqxCEhAqjeURjRETPjhjc3XECy8sa141X8KVEunHw33C1b",
  "key6": "3CVixdJSoAgiuiE1HEek9utQZ2tU2bMWz9jfWQRzKZpJzY6822pmhGPKy79unSpv7f4DwyXtYKwKbMDypb2ttRts",
  "key7": "THLNqmbivukzKoPNTbfXuT4PwZS5zq9vk44je2xJyK7euyvtARgvvDvAfHHwpb11seqooRiVcqZX3gjyRA3GyDZ",
  "key8": "2E1oj9TazF2dQ4Jud7YcbryWWcTUBzeqC4JB9FG6aaABQfXnLZtnduvBsDsnwJL57WehovfFNzqowECsjz3YSjMP",
  "key9": "3zdTp49d5Ub5FXWQuZ8bEhhBGZdA322XN6buP6V1VNHSwqy2dgcQnHw7eDc8h3ySsbqmRpqM7MQmpCSMr1sTgWkS",
  "key10": "67faVMNgDXduq9RdPuFeYHy3tmQZf3zwCyNN1q6ArQ31LLggKzzDHNR9rd5AP3Vvv5LRZzr9eWsd4RTKmmiMXEjc",
  "key11": "2rxrPLWZx1GV9M8eWTMMs7PTAW1FNbKRxV6L4DsGipXTRcTjRc2nuDFrnMbQfWLTD75MUS5RE5ig4PUPT6WAsBgm",
  "key12": "55UczeTVFovs428jg5ZTZzyJtGLk7v2FTRGciLK8PNh75RpWEQKVca6mK7QRGzs5pByB498mhsjd8uxabk6orDqz",
  "key13": "xJtHV82HrUSnzVDjKgDBwR3QNp5TDSP8Am1M9cpEdbFHo9Ey9dcA6zYBFyAAbgciUHkkpNWDghUbPuFpQVMUpuE",
  "key14": "WY6vrDFpiqzsSwnHwuxWU3YuNYBNUY3vNbQBvbHcZYYqMXqBsfmFbuuLP8UbmLJVVdpPMY2X6bJXvqwBb9juVTz",
  "key15": "2zFznJaqqRuwujrpPDRMibPTYvvzyc9AqxEkALqkdv5caEuQDkyX5RUqCUN1JS9GD1Yp1JT1w7c45DvsgT9CSVBT",
  "key16": "dTSxnWW2mezEyvxLCpPNbdmAxyA19rGgJQYkFDebCMX5L66vJcdA6VnbN8EuRSnAoVFYyMtsqU1pavMmDoTG6UX",
  "key17": "44NfrskxK85s9YdfjR6em71z4piza8WT2NdAGEsT7y1TFu1vU1rFdDo5eUt7SC5wL288rojnftY22d9kyqwNxok9",
  "key18": "4Qa31MgobcsDNvdCGJvwV4BVkt2J9124kkSjJKASNDnNE8az8L4ntCcFU3WxkeCKuxQQ7c9AAcUEMTdXxQhsbBmo",
  "key19": "fQM432ZQTyuPhPjA79eftjTwRQDdRZWB84NruVKUoHmrePTXFYoDb2NAnh8X6gHyqT6ptUGa6GirtUoiDKureyx",
  "key20": "3ScVYhp81swv6GgxQgZ2GDAbrsxtemBVEmykF37BF7jYZTpuhjCUwZrS3ffi6BSDbvQvvK41uiirjph7XsLPpvnv",
  "key21": "JV19en84MkJib7BC78gBpigL4Dcm5STG7nwqg7kdHTtWu2cJ2EWW4gWiEijsJtJ1tuZhWdUzfnrNoFp22yb7Ftv",
  "key22": "4SH1QDR18LEpNR7Cp4Ju2hMac9akeeptf7kHbywRjLBoeq1abQkzBq1hXVzsvHjKxrwnQa9Q5Sp4rKqWRxQiKxkB",
  "key23": "5hPeh8cWRocN7cNt1QPz96EppdjeuzjzaMTNEqvcjGwpD2rzjBawBCnnUaSwwhYQoJAG7ji1eCeprLbabBXPeYas",
  "key24": "3atNq43MdhfxovrHrHrXVro8v3yr4dVxcJqXFJhNjAtyhVEUe1rXztW9GNdU7bpwy21spGZNjKvMgwRNLn6GPFBL",
  "key25": "5FVg3dDSkMSqng8KkYhC6mynzZMU8rmE6Um9ts8RFRM4D51YKoJFqTYQGw2LpHvDzDGB2QuyB1Jr9uSwoL5sfbp4",
  "key26": "2o7S7ovXmT3wh1miEdd2S8X2KHVwopNWBKeGtuvR9obsCFKU2TWygqcYM79k4EKXXM3Zke7MFU2YpU1detPo4eYc",
  "key27": "5XWoQ4T2jxvaLoybjkRrahpQcTfkc2xZcmYQCv5zAutWZoXJpkzejoBG7AgktiGVAVadj6KskbnYjW1jGUts2hqt",
  "key28": "3oBAAgQr3J1B5WmF9F4fD4E3io5Tk6pzdVmgdy6BtrHzznwszmzC2mPm1oUUvXV4kobc6Z4A4gY5JTE44o2MiFAj",
  "key29": "2z8qGV3fVHGssPbiAbPnDJZAuKXpWkAx4KzR7YLutGWsxP3y3Fn6FD9Pz1iGwwQLFiiQaC5ULnMw38VeXDAnvNzj",
  "key30": "GEokn394A1WPF9QbZgEaN7k27Gj78qdNJT8cYvX5wW2tvBP6pcVSjyyDWnXcqCJL2hRXtMiLS7xNsFXaHbmGX86",
  "key31": "49tjRcPWuEhRRqmtny9i1GWH4sFx24VMJPamoudVikC3aRMd4XC65URonoHwSd8pp2ZhPoqHisfepoaQffkoBaoX",
  "key32": "4rnCf8PKWtuqfAMqa1Yaoxu6J55LFWfBjqWJkAxexjANcJgJb5gZxxTPog7YEqXXZ6UXCEEZVqKor3dHjNZgP8An",
  "key33": "3W64FjUKDFb57veyYhdbLTUK74BNBXKMAWUS2P1r66RA5vm2EwCXUQsqeJKYdfGNg4PGxExeiGcFeDfryrrFqrSq",
  "key34": "NYTTeZTtVxQ3R3qq6d9LDynK9XtAyMyv3HYPMGtCQcjLX8g1PQAo1ExWVT9QbTm2ic7aHmBDCbBwFEsM1U8FLvJ",
  "key35": "5V986pmLTV3xU8cFjrwMZSLCqPbnUa56QJ2i79dX97uwLaMrH3fUKbUa2YVpjoNufU5FxsTiPDZsw8XHWPfmquSX",
  "key36": "2wNa3pofiGg4fRZBy6aFudC1Aa7QpCPXh143356fVWQVZEAkmj19tQ19LopEbZ1Jo3ZVbFJezBiCnuCVtAY463cK",
  "key37": "LP15WjeFAfpX9QJ1u6o8ZTCsMrfrHVFg2bnj4R6fjGvfA6DfzLoFM7tqLSSRiPHBTqzXvQRkmE158ZHoqhxhDp9",
  "key38": "4wHpKWU9EFD2TH6Vnw1GNSF4m2TSXSoELsiLwqn4LVTh1tzY9jq3Vxd3QhjugsefozejgwSBWLCtzfdeEUvuL7aB",
  "key39": "5LNPr5BQ547THDu1GJUvSGahHhqnJmNtopSU757vT2tbcufihB2BRMGXv6smVtiQHcYSA4DT5QbFGZrAZfLn3UX4",
  "key40": "5ymB7CHwGL4b5wwMHhfGWcznsfsHdxzyKP4NfeJi41JrvNdsAWkGdeeG7uV6tRPxaqLmLfPGNAxWo22a3qguddTi",
  "key41": "k3qzKw7DpkXYXUvzGY7F5fMwaSfVZ1C8Ju5gzvA5XBwSoQYguWsFzQGLvNpun88w44pCABTQBYdaoGmr3LKCPzo",
  "key42": "qT7syVsvz6HGayupj3XfHS1oBGYgufRPSYppxnzQ16ws95WVRVCJmSAhZxYmcdMCw9wcJKzVBAw7VSF75ZWyyim",
  "key43": "4xWcg2JrdV39uvK9LgQYrXrWvKWaTYCtJz6dUuLS88z9xZZUAzyvBqVK6FTJuuhDpb8xGh8ZiUvwm99RGiMDS7Ft",
  "key44": "4sR2LKe6PKPcfLvMFweximkHyKZo3hCYDBZAiJchxdyXod1qTCf6qqj2horGpj2NCC2YxP6bUifnunX3xxJ1ySPe",
  "key45": "2SkcUpc8hMKU775pKn3AmCPeHRna47pQMC5vrvaievuh9MwARwgzn5Pbj1fLMNekv8WN9vSA8F1DZxcapfi36D3K",
  "key46": "rHXdZSB5PCMa69WNYcyQk41hYJDrLTVxQEQiuMrtEaahJPyHvkzbCAV13vzoQnfMTMrJkpXpUedRy4qz6cnzY3R",
  "key47": "4PBiDd7ZV9FdCe3h28XQ5rKF56qkDeCVnvckBqCFQxrwhxWe88GwR28x6KbNLduvWvPtwjK5GEfHnsvVh6mMPX5m",
  "key48": "5aBGimdTR1WRySihnRmm5ZR4qaKQ1B6e6vWowhqrJmiDGstTvSyUkB9hYiS75cR87UBZ1n4VTLwvG75gUymQE7kS"
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
