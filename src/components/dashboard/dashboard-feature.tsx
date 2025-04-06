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
    "529E7iiUytKGcSpgUfU2d1wxbh1Ljt8TWAyUJTLqZzEbA2VW5kKX4xnyMrLvQnBm1mrpXX4d2Y22mfFvogcDhCim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28s7ehqKxzszEre4LRxdBq6WX7rq9ohCYeVtnMrqz944SMxb4SZyPEJmKAVH6uawinHiYsGAnoYtWcTRZgCbciNz",
  "key1": "3iTT1UuXmbHDHUfma5XFuANdtbp9a7V3zmHBWCvDYXv5UgbtR31msh9aNvqpJ4nTCJZFxWxxrpkbuN9yj38KN9xv",
  "key2": "49LZzDTDWE9efPKT1Gn8ehwMLwoMXhUpXnL9aPce1e3qGMFZJsPz3WekdkZAf6Pba8NLdasW18ePMbNd4RRdbqNz",
  "key3": "61RhyxnERu94Zh2QnxuvNZakrMMakuWt3uMoZC1H7UqZADEmTkZC4bneZijnaK4LKHHRp682UNVFhVrdQby9VfZZ",
  "key4": "5sj8rBMZVnGcpoKA2eT2824dmMhyoRN386MFfXXrkXpbtYWcjtj7a9ZEKUr4VoywBJmDtf8iGdY1EhrvHDgAbh7k",
  "key5": "KF1aGxHvJQQyjfHSePdfBptN5zDPriG7PUP8KL37RXDA8bWTUL2s1Mt2caCchUDjfAU6LSJCVVgMQ6CSWQvTRAe",
  "key6": "5SNBgbngd3RouazKfrX7Y4CqHez7pgHWt46FJTZHZ9EnMEAtEXMqFXCTTq93NPXJEFQBZuy7RwXUsdp6CvW8mge4",
  "key7": "39gDJ71nsff12jHuvdHESHsJq3UkAWhD5c4PxFcbxd8y1UVpVZ5Dg7nDwTuBS1ziw4DiPmasxTK7pudnkTbdmXyf",
  "key8": "4MoxH1oLqUq32NzEjLYxLBADDXuiJsmYt3wgghm9gFsfGBfoimLoo4YbtCii4FQnTGxZc6EzjdsKgXjR59RY1A2h",
  "key9": "5tWoX1nt4bq7tY3S1jksz8LsGiBurTA8opZgfJAC1JCrS9c9zUatVNa5uoD5JTMaGpWzDSZw78PZrnhdt5BLiYHt",
  "key10": "3AaXPa16dXw92XJJ2qzQTv5LsqN5y5VhpdtrSfMx4JsiTdRqSzguAQ5D8AWDCW7VdtX4jGmQD9HHWdin7577Kwpj",
  "key11": "2MpdGqyqw8n5bZbmXL5MZb9M3sKeRdkpvXBt7FXFz1YXbj6CdonfTyLuBYEL33kg9XgApR29TR5F6p9N8TrtgRsY",
  "key12": "vcvW4hQu7sUWLiYaj6ZYykyFpoi5p1i4mmQHK2kAFQiVVD8BYhWuaHTyoUTxPTQLjpyu3eJwyxVy3QgXMgkfH5u",
  "key13": "3TzVFvwtK24jiNJfn1oC1qzqJ4YMDvChKeetAvZ8c2Rx32JG53owruo8BUef3r4Lao27qH7xWhGzpNxxxcp9s1TN",
  "key14": "XCRRxeprdiYifzihgpmyqVCxYS3zXFdeR3Twq3JXXHqkMsEBysGWVpBPmvfPuz8nEzSCjcniA2RemPrSEMnx7UV",
  "key15": "5z1rVpVFJgSEZhfP7paHJAhAqnjCDd1HC8Zqmmcxb7ajxXg8vmb8jnRHQyK9tYe2Y6d2n793K28PAQ5r6qnkW97C",
  "key16": "Ny3HqjVPg9yBAQJ4Zb8gsEMfmxVZYDedXGXvTqR3Sj9FdZqMRBvTVRVa3EaB1pg4c5gPN8HRJnZojsTomSeAB9b",
  "key17": "57fT1suGDJqb52nQBQ4nMeZDmMr3iyEo67bVzbjeKHwzBJXBUvMXR1wPbXDrG4S87H9WgjucxVFqJ3waTATg1tfM",
  "key18": "4TZBDc9nCaKWhcpuGpvSaYKgjug1CDHecegoG6xsx9TsiNQyCAAk6C12qNYT9r44JkmbUGeeWAxQhu6fkwtCcDTD",
  "key19": "4sGx8ApCb16fBYRhNE7ShpA9LEtpVLB1vCmTB6fqMUpbaRDMyxrUzeE6VXXYfaZMWTBX8nYes9bkwjGRcKnmFYNJ",
  "key20": "62E7oTpjQtDWFRSY7VYzrxNvBgyCCci3vhsxFYPG1oUWxNBht1iAp65ZXistJg56MG5u8iQTcxPdvTYKVBvyrs4M",
  "key21": "vrfaXwgTbkyyk76sxQj2GbLWwi97VfTyNDeWMxAGwNGixA97PTczxJwB2L1K5b5sLg5PXFinexiqkCRDKQHkLuC",
  "key22": "2vaV3FjFLVuAtgBsTNYQUpSifjgDzVjPAhHsMzjxjRQjUGXcjTd2fyrkHK2TKrABjtMUCipYKtVA1hrq8turaxVi",
  "key23": "4992vHzytjSBjwUm65xqWQq2RUmFCLJJH49WJH3KctZSQhHS27ZhyP9TMj4vuAK4Zjyj6Ub4kGRosCTHNvd7djFQ",
  "key24": "46YWD24MALQLCGcymYgTUwxuL6nGXvhGwVNsWj5JkdUfMR1FxCTkMf1wc34WAMQmacMREZgBiphrU6vamS7rDhud",
  "key25": "4s84d6q9usgpu9qXBEv7GSAQWwW2CbTNbiRgcgU9Rm4PhPRZ2cXk2XEQFPgdDEmawTEuSde3BNYFn7fFgHTygCHY",
  "key26": "5v4u6UVocjEX25mNno8BHB8njkh926sLroZH96MSdum2pSizc2efoobQ5C3Qs9tU4TYyLLHtsmpvufRr7ZkbaRmb",
  "key27": "ra7hENypkFFHciu11tXKy958LQLFLPuRbipoVnWoN88Wfk7JAxyhMZdZUZryyA9MHQVhKeMj3r9X9S5U8LiC3cK",
  "key28": "4B2vFxt6YHKsqe7Yt3H3MzJqs8nzAZbrjmUbHuPtp1ZdC9dnvnmLGbj22AMcwiXeYgYCPr9XtVxJExbRuuL5pwYG",
  "key29": "5DXsKwBcLK1gu5cKPL26oVfahVMQvZWBKuvepneSyznRhEbURFwKeTXiT6QKxMusFuBrRdN2sXXJLGicQV5A9Qoe",
  "key30": "2wH8vwgMH6X8Pff9jUfnUN8m3p4m5zpGTTKhAQw75HNiaqdyf7jTAafvCFLua3i4wuhBLQ6sgku198a658poNJ35",
  "key31": "4nE6PxPWCiVtQfkW2Twtp5qWjuvp8iT91NXQeLTikPW8Lu6UufPqHpXjjuk1i3RPTNpqkw1rhbkzMs3w6L8YysbR",
  "key32": "2znBapeVHxMzWKYssvBbwZAQ4XVe3oiL992x7GBM1r7cgLJh8ZVSuVVyzUyDC1RRiPSU3jDXQ38T6f1uwFnAuuHn",
  "key33": "2fVD83wpA9j7FpT4pWxjrPy1HyskJFFx4SCu86mArgvcz59yB86QyKSUiZHZkYiCP2AGBCZAukeAV6NCE9ohqbhG",
  "key34": "2HqGnLGXL5VvXZKNo8Y4oUac2mJj7VoQJ73D5jwsHTa2uMsQdUYD4GGTNb8qpptAq4n46GBQgtqpJ5Fkbb7PcPU6",
  "key35": "2yY7cT5vVYpGZaFSUQo5oXZhgUexaUPvAqWt8KuFVu2kiiZyFMmftAZeFzHD6X1b9oghAg4HQQ5Xf8EFzMmmrtUE",
  "key36": "5wZyrtfufjiNWYDcxbeBtkYyXvr81B9boPzJuGBiHV8KUMVsfHewh9kaq133xpGk8CTQTYvQ54w2QqDBBYeg7ENV",
  "key37": "3M7oV93Xhw5MBbnGSTefMP2mqeHBhvdi9h4VTtVW35Wkg3rESXXzhztrvXq9u1qA9hpzyFNZPwmhQXK6ZyQuHKuX",
  "key38": "4dwCcvg3osdGjoH2FpAiiWUppUmXE9hvQHZbkfPxEHhXMvRg3brs6UzMQc312V5fnSQvw25gYPcg3jmtijyNLHLA",
  "key39": "4bXge7w1Dbqgkk7d7EMy7abjuMyRBQh1Qm7XDdi756bXNiJDq36YjRkHVkXWZ1DL2rFaSMnRFzWSQoJS1YhNRYTW",
  "key40": "4c3kcPuzdXYVQ4KTFLBqUUCuVU57cQ473HwmvLYkgJBJkLx7puR5EFspSy4bGbqq9LmPH8LdcomCm2EsnXzxHZDS",
  "key41": "pJepGBDd5EgDAx8fr9cgki9WJTLWXVGd9nYmQrZWvynXFqbiezpmdGsTA2HSRCoueb2qTxNwmC5e5kwVMvAZLwc",
  "key42": "xJzRB4HJDeKYsnnZtpqCdPr4bQLpe8yhDhVK8qfq1HkpTfbkvScCtbNpBjRCe6jiJzys1BTjzDS812gfyw4D6rn",
  "key43": "5o92ha4eSSkrMufsDFvitwRR2vn2Dkdnemqte9CPLJzhjqMroRiV8b1BrmYGcmbBUSiUNQQvhoauqMVC1X3Hmbd6",
  "key44": "vDVsZKQRPYEn3X8yJG5YWqUD99J15Nietoh5yzwDxjzg43GTYVDuXPXQY8u9KnacEY2sswUpWVxAUkv2jgKFsNN",
  "key45": "4T69gRUNr6stdqD6NDS9hNn4KrsiWnSDpTzLt4wzyutAf5k3bHfyPYKkAPBKigV39FNW33RfruAB4fgsmX9ECTPL",
  "key46": "3yZ1th47FZyJRxnnWWgB543nnaP5XyfSfiEA3eBBn3ryevi3a5upbWbkm1KKrYiStdFVraFzTgwqoHWY4z1P5JS",
  "key47": "486hzDbnkokg2GSUe9xahtn3aVXumPoZ63brzvsNhP3UTT6vLJeukF6G2PxUC4YK2a9jBzbGBNV3Q88y4qXj8oS"
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
