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
    "nA91d94i5oiUYz5g7FkPn88Kz3yc4RSeN5EVF3QCunr9QHZEVsuutxGac3TkAtqMG1Tu8r2tGHDX86JyARJzVym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y4Gv6snw2wh7LLaiudsYg7E6tYxYpH9kCZTybch89SAGfzc6mcAnYP6cj7WHaz7wbsnRPBz43fRJCJn3p6v24L",
  "key1": "3JzUP8qsTC7fgDnsYKV68chKvUNZ1VRJB92XuLdaQLJ1Xw65tXPuBmjBhWj23M6Ffhk4YyUpEFqL448yNTAw2Fba",
  "key2": "4JnDwFrfh8Z1FTZrUb6svA7NiCqbuRQcHi9syy94Sq16HyLpUV1rrtcvioXrjALFvo8w5Vmby7ay71bTRXqLESUE",
  "key3": "3SS4Jfx2jRBFpfYfCLG2i7Pdb7BqmDQraVdL7d7ieFVMPZaTNC5XoW7p7MnpfetTidCWcjRdCuNnJAcX9KvbkqoZ",
  "key4": "2n8JV9Lu2bjzPiZDK533BxAXd9j9FaEhtEA6PB4L8AuJzEgdGdRtq5vwMMwDU2TUE94xhgTbtxG6KkfCey3MHHhu",
  "key5": "ENMu7PFRYBfR4gHbUWGVCNcRhBij5KKeyyjRJPvfEQRFhdqe5Ma3Kuf1DqNprvMMfXT8cLHxNDRpKgqw3J6QZjX",
  "key6": "67p8uWPf42rkzM6HemJ9SLtKmv62B5RLqor2zegiauqqhbGJFZFT9P967TAxLABsN9nxKXu9Y6tWArFedGXqdADP",
  "key7": "34NKqmBLez1ENe7QtJVZGbg1xmrGGcP7vLwCiAovL7b48rFv23kdHsbAGwE2rSbxpGs8pRVPUTUL7RtHU2mNMwoY",
  "key8": "3FkuUYcxS1gDHbtzt7SY7GSWb5J6DfFTJ5nAKE1ZiCf2wvUofobJJATPMKerd22JfqMAh4m9m3hRGZaY21377W8X",
  "key9": "4yraGQE6Rtq2Rm3QtZum75uVYuZN5tF842g3vfyppyMLSqd1NreX6jNAGhMCAMJ54nv84Js5tCYQVoBJfXkSRb1Z",
  "key10": "gznaY9y6uyhPpvHETjYv26jyhXWo4anQ7RGhbrec7Towc4kir4DWp4UFe1N7jURX1MFH6czj4qKhut72WGnQsHb",
  "key11": "Jx144p6rR3hENdE5uxTXibKXaXdcoMJHz9Ec11Czo4aPPJBL6tpZmVhQr49NgvTLfSCJqmri6YbzywWbfYoMAHm",
  "key12": "9kdcQwJ4fqPn2h6m2CJMrPENV7sXPXBBWLGHbvzcdC7YoHGKrLvNQVQ3nECN2te2soPjQPD9mruMvj6NnBCvNW2",
  "key13": "2LHcdDCsNiTQ2kQshAUqEiES4PLMXR6eZps5QWiNLt6i1S3WnnTVbPRFNziLacuhLBSeE7cQ9nML9x8t2xH3Jzwz",
  "key14": "4oKDfhwqEXMjq9oVBr3XfNon9d9PkomqGWRQWVYNaQE3Fj7rD9W72HwjGBeN7KESp1vLvwZu8p7Km5RqGwZoRc5T",
  "key15": "x2UKoVoBKDLN1CnFYSBnUFNFcfrAt3DJMuExELDhE3gMzY9QPysX2hu2kh9mRfrjtdgWJL4TEVyjrh8gGGD6g23",
  "key16": "34dvw4yEE6w7ZpJEGfHQXAPXDqSyL3ikGrKdMB87C6U1GvrTEWQfjoioMQJjPoqNGUyxg3By183rFZKftKeAfENV",
  "key17": "2bVarMEpJCkQrFVaY6ULr3gyDtbPNGAHoFG8axDsMdG1zRWhXR26fQ9sNAiTp7v7EeDaQH4qrrLt2yB2f8WdWPHp",
  "key18": "29gx9LRmCZpULgbhp4Ba8wPy9qV6jwV733tyXTbZyMf12jbTYsdESd2Pi412BUnEvgSiTxajTHLFqVZdNcnVd9dF",
  "key19": "5H3gTMjZrw7y4VQRxb7QymMXScMJSu7BgAtWRmmCR4nVMCK9GfdQmKC5L28npwJAmfMQ2cXbXRZNeu68fHoJ1p5i",
  "key20": "hz8dasivJ3nHYc8ZUsW3ebvLLxug5ph3QkNJuLmadxguT36u9RjJpDSU3kLrWmkMo5QbodK5s1FCWsxhHSE9VTN",
  "key21": "2XUACbdMuGAvw4YYxQcsWmqHwNkiaWGpCaW5aeFbbJPpRcMYtBhLpEe3ngDLkEyV6HKj6X9nrgCn39NGz2q4syMX",
  "key22": "5Zx5jJ8ZgLNGyGaNqz1nnK6KSHq7xppiBGrHZQW6bTdC4cz2DRLn6d21nn8kU4jttVkU23xif1yTorhBuDWtv3Sn",
  "key23": "4n3g5oMhctrTyzEEU3Q54WWdgYrFyTPPrRk8pSLQouzTfAhZXBkjtpmriAyeKzH4HjzkVrE4SnU1LoU8DNV69i9v",
  "key24": "647B4qbGBi2pWWwJ5msrsrYBPNwk9Ta5Q9B8peJgqZmkq8wDJnChnWwJqbbquPjt7AkoRMTEfW1TF6oENQDeqpHL",
  "key25": "4NSLyM1j5LjaZNsHgHTEN2MByQNmtR3HmcrpwTpTiKjxRLjwzdXfHtrKsb63bDhcQjhVpQcL69pP6jNGQfSxBD4U",
  "key26": "4ys9SxUNoZwFqTDakGVdU3KUn4ixs2LERpHDDAUiTaNWFxj1JLvweVhnCmh65V7nWTvuRNvvrHwXodBoApDJvPN7",
  "key27": "88bejv1Pa6HSL1L3FqioWsGmgoC5C9n1yYeua5nXNp5brwWT6TZFCbvEZPsb756v7zwM4zQ1oYuD6zvCruZF9Kj",
  "key28": "4FypxMvnQANdXRcXpEjnBLfZgxGRxtfoRjxvKnwogfSxwGuiSSsWS5V76m2TM4gNUfjZj6dJ2D5NJockZz8H5tYP",
  "key29": "3BWydFpxrf9geTmMHnuEGZH74S3CcS29pVrsuvbyZp5QJgHrfJ26KC1EMzaBzJXTgYwCx6UPhMKSYAgiDpiTraRZ",
  "key30": "SDFXE6V2Uj4jzxbHH7bmag2KM1d8pDCuQh5jupZatNv8yr5zRMHUSvpk9R7TB89FjqTwvJMnvApQizvkEaKqtwT",
  "key31": "39Mq1FKiGJ9xSN1EDheX2CS8XRpqoovX8fvLHmE2w8xLHis3fdKdUcxcxokjCGDTioUFRvAbjVNkCS6ZavP9QJt",
  "key32": "2v8MV7Lv11Y48MW6kVByWSgbCSCgBXc7JdJjzwpY1GjiixsMfSa9FEzEZ9bSQ28GARiGAJeTXVtK9NbqAxa4oTE2",
  "key33": "67ppaJxPKttwRCsk7XftNhrXKYF6z2XzmewHzDjwpe23ioPLCKkagjRkUEePNW77KHytUKTKwftj2vmW9gduQ5LU",
  "key34": "5vPWdqCaGzMzNP3suXt2ggNUAeu2vZQAJC9wBZwsHyFMNk2GC2Be6mKxzB17JNrcGCRTe1aqH2KyyS9M1driL6cx",
  "key35": "4Jbq32VkaraXY4FkGR24hXy3ELRgB6ghGFLdpNxqQn7x7CFJXdT61nrEizaDHuMgyuEPnWseu5EMNkpt1AnPFDTD",
  "key36": "3EFrnnJGvkwisBeVBp9iKnkjVcY7NDT4zrXpJPzUk3RzCyhKCLwxZmmUwMzE8WKCya9Mb9oSE8gnMut3jGMLbqfV",
  "key37": "vQ12LQRQTEFoVYuMQnmwhJu6dfxPcpDoqkXAKKt9pT5aLqpgPHHbhd5yU9Q4XocxekrQNdv6a7VNerDmr7KWpeF",
  "key38": "5trYjHRL3MuLUF9sboE8A65kFj6ZFEBSwroJTS34k7n4aGSkwZEzFDeZQMMpCj5vt6m9upu6c2DW265Fn3MnDka3",
  "key39": "3V1ohghU2nzDn7Wpk8hPHXNrwf4HmYWGDBQCeEX9PTpc3X7DBELqJGxJh8dd1gc8RT5W5qGYxfPs2FwhvMGydxvp",
  "key40": "DnN6Vy2sv4wC23bsgyfrXcQrCGSVsiY3cVkcXW2TE2769QuzCvmYy6nnS7neB26J3GNeGAfUEVC8xh53TcPWGaJ",
  "key41": "5WzQoVJJN97eimsNk9vLqwrztR1XnPTovbti6Hu41pwrcKeHFQ2YjihdKLsKPhXfpD8WKkGArz1BhYNz7iyJx5fd",
  "key42": "2kr8tZ6Kjy37z4wUBGbCqFUhkZ4oRfKytFWNsgxWoiF9Y4xnGusSsJiSZFwvFLdcCnC23fMcoZB8Tfrk74xaRVHQ",
  "key43": "3KMhGmDSn4NrGBdoD7YD6VDMA7WUdZan17ujH2kUEbp4E1miGTwQXc3PXYY22Zhk37qzNEqp9t1CYb55zxLkLPQF",
  "key44": "4PhSsujXB6y71vx1sNu8tEZQswhHmbHcXzhN7UYz4SZhxTfueVkS4o6GYt2NKMVeWCocsPVJs5gJWsFcpxtt7AQF"
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
