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
    "3GW559kDpgnUpWHmcjfo73iSQjcVUMm2iHT9QYWgXGjNqREjxmPJZXXcbHGiC6muW6oxqBauNHcErAe9HPeBHudK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v3DeDswDn5JKyDC3i8zhacU9CFgW5gi821eHELDnUR5H1T8iKRUhYfyhDEa5V8Zn1RGewAQyiZfvsNGu3hSD5Bg",
  "key1": "bZt7maexqR7KRJcv2SmD88QgJbi9pacW2UXeAYCDYp2vw3CsH3jTHm6L4MuvmNGTcgoHaFU4bCza8jqAcDH9PAb",
  "key2": "3y9wwoZTt5ichDf5BgbxoMUYu5m8gCxK2uFaknc2DbN3rxSCWYmSFowYiGu4oz96bxfYnZ6efRjXVDRmhEv9yyCv",
  "key3": "3HLwhNVqJaGGxRazVY7bf6do9ed6fWH71rLVPB3Xtbq1RiGZuD3TsRHFD7SL3vwuogLSbsJrbzg4esfSSgRDeqW3",
  "key4": "2omw2q92irTq4hXcyXj44Br8yVZfKWdjnqZpfEAaN3QHJ3L7E1bkewmH6LDModU1N6j6PQkMpDrJpQbY4w3XqFET",
  "key5": "4cPYXdFTKgtV6PBWECYaEgkFMUFCPixUkTiHHacGJRfNXy7bCvmp3w6bsWdSmGwAF1Syg8k8tyJYMXmMaqC6pKau",
  "key6": "2bcc5Pv9PHooyqaiwADJoaK9HZSYVAcRdFfdKAnNjSsdXwta5dc94ERZpiqY7ziapA5idHyBTfJbuBL3MeCpBaoZ",
  "key7": "2EeHX7eZgrSYPPZTxpArW8X1b4wsxTwJPgJPZoMUZqY3jxqgvzyFJ19oXrEXaZypa4rwYtwjuw6eQBXKAaiioeJs",
  "key8": "5SmHMG6KcD7BVCE7BDUG3AEsyH9wmK7ELMjWfng5vmFJP3Gwv6UUuw7pnkjPRSHVLsfuykAJ8MjNtAWgZSbNsnyc",
  "key9": "4gPpHxo8Pixag3DcfjMB6sg6kv9QBC63DQG8PqGBdWTgsmGbFyYGK6c1YTwgcKMbEy1kXB9f3qziBcJFCXB8bw4e",
  "key10": "45xaSuLA4LBTRYyTfyq5yeZW8sb8mpBGPAt1q3WcwmAk218ASp1GUgNNvcbkj4F3sm9DcXNkxU2E3wpFEv8KnN37",
  "key11": "3Z6zXRRgKzEGqpu63CFptmBUQi8dxTZ1HZ4u3azmSiTZskVJ4HgZZrGGtneJAuDEvo7jJBKJau7V52VZos3ba6jW",
  "key12": "9Kk5gZc5Su7JQM9q4f6rJ5AWFvEeHRie7PkA2MLcgB7nXzEcvxwDMa1PfqdPbdRm6Jq2Lvp8PoMKxTVj2zfvMcN",
  "key13": "3J14o2RoLYZWqh4K4mneAhajF6qPED1RqPMNJudeQs734bzwguZ7GcLjDLv7TUa5UhnU12hVaxHfA2xXvRfEi7S8",
  "key14": "GcqcAa382JKR7poK2FGhKNLFXCDBgVi24VTp2uqZ2dApgCUBaYzcMwTEN8ZiDdJe1rxZMK5ieuXzL4SKsZZS547",
  "key15": "gAMsN36x79zspL7pELoHgivM7zajtsQXe8q3xttznpZEJjsFTsMANJZzi1aM5vWkfSSqXQp9LjgzBGHo3SHbdkp",
  "key16": "D7MwW2n89o1TxseZ2rhLBDVZWjvTb5qycZJaTjbo1Mc1X9mcNj5UsUNf5aaLqSVHSkrsHvVjKzdQZwtm95VVknF",
  "key17": "3v1Z5wEAV3p4CbD7DDXtHgdyj3GWBv3sV5ZnjiuGG4t9dWgtCerE1RQEKTqCTWg8hVd9MMsAGr4fxiPg8f1JHDq7",
  "key18": "3eHTYy99993DDrcEVhmP6MjHQPdVLrmHZWk6bPjStPpXwejsuQevZbPr5KZW997RvVxTg5avzULDPse2tzh31U8s",
  "key19": "58safZg9KbRDst3GwQ8HDCJYTajnft9zTbmmsbvV2gtArVjUiQszK2QY12gYy6n1UhaDYKT2QQPyfquMBnkduhGD",
  "key20": "ttjjdwRojJzEvXMhjZWFLT89ezURgVpVYhDHRDxBDGRFRWwawvEK3bVbzcNx5tL6SGsjxbmM1tSvqAAe2ZrXBim",
  "key21": "32PorKMaPXtiPJiMUzSg7bDVs8hmJxEZfSaADGTzy138wtuvhVRpUAMDf2b2bsAJhNagaKBwQskKPZDme86THDwJ",
  "key22": "5dSLUrPP37pGgn7M3NMFK3u9ifxj62epB6hAgJ4pu1GUhfWo4xikcYJvG8gviSFu7VANXnzN8iUQR6b3PoDidJgB",
  "key23": "2aZ2xvHsE4NGeEf9SiNteast2zyWZA1sxLhCNXBnJYGT9hQGdPBWFStyY6dkRjWKLAeaskDBmhLjkodHVh8QFu2K",
  "key24": "2gXmV5oA9wY7bjDoMK3YFQPm4jffj37rLSw1u3QBAziT7WqVAQ3KuZyHoE9YfNEkTBMB95NnwtWsJhfiM3uqisbL",
  "key25": "4bjqdDK36ApJyAXQC5G39c9NMFRd7VpayPWuSPmUB7NFV1PhxxokxnCcTWWFkVU4Rpbk5XSgXJFNpaVJopZgYwMt",
  "key26": "52Gi8trTsUBDp5thMiVhLbQ3wjJWKGyAiyzBeA9syqWkVF3nNi4AB8PNL9gCn8TzEkYgonh7r6Siifipcc9Vx7Da",
  "key27": "4EUCj81WpYryPU7QPexbTYDu26B5JWKs9iKHa7zVrP6EMgadqZmM3r8zzXBXCQG7K5qgSLzXcMARPYZJSE7sVotR",
  "key28": "2kUWgrNerKHTZRWRHdVW9Wy9BTJp7UTdtN1or3gE9PX3yBNjYtK8oKQsCbTbmU2hseUoqaxPiqnUmdcohWvwAmxP",
  "key29": "ZdPhnj4LooBFExc8jJ4hrorDkE7VGi8qFhtjD5SugDNayvyHgLzPGRXad34DMBJmryNEf3briCYqcfd26ZPLeub",
  "key30": "4hwJykFSoaJ5PH1tQfc9w7HvRtkKqtfxNYWAh8nUmmhsVwckRue21MwifwWf5z6GT4sYBHof7PgfshUsLqRgPcSi",
  "key31": "5i2pn23dGxAmBW8pnhfqgfH5ZGSzgFbtyoaN1jFbigeURbXDskLHH9MRHHcskMKtNeS5SsWXLgVnRssBn31GendA",
  "key32": "HiFw4KRs7bHFFH3YAgUNEvUcLfVMoUUBCnxGLXUNNtFxQjGg9neJd2eq7gMMWxdHrE8pGfqxHFpa56GCvKC9n7A",
  "key33": "28fiBv7gobyRyQRPdHbBafZXTywm1QHkNo7aqHFNfzwjmvqzcYk5e3qm9FWamtkZCvRBguUZdC6SXUspegWagJ2H",
  "key34": "2YLv9X4JJwXwqkQrx6KyjJvh4bR1ahXJdkSMp2vCLcoJPgXWMRNqxrbASmzfqUd9FW39NJQm9MTqgY51tPTMjP9T",
  "key35": "2KdmzmDBaykWvgPntSHYJZ3AHmQ8UYg9hpuqUFmm4pRYUtzsFmYfLnZjRu9UvvaMapskRmT9hPBkxZSZvKb147Ur",
  "key36": "PKmg5nvRpspR65PbE2tGK859Bb8pcfbHGE5redX4J4hc5cnukzQfzEXowHRti9gKvNbsLpZokKkQFWXog32VpRn",
  "key37": "5eYTwZEgAKp7755LQ7jedN9tMvRJC1sdBaNvBVVD4T8aZvVQpwUYed3SzkjcuGxCwdR6EHdAgaGqsPdALqUE9ppe",
  "key38": "4DjPofL4X4XcU2uCbqmW6cdMyxFizQQv1SC5ARmb2PPsrgRkG8V4m1Fr5VX68ow5cY4WDmpwgxuyGaJiekqUQgHV",
  "key39": "Anq7eXBMvkkvtdvXNys1xbeNMsAWTbSCdfK6EwJj8UqmZDi2gvosLXKba5CVaA1eWie64KStEph6ePC3SZbbKrC",
  "key40": "5bVFSWGpZFAkqaXTJCEvtAuvum7Hn2wtaAfNPCPSHCqRaPhCooz1cjT79aRDEDjjcxgEndNyxwvuBPCWWQKcuAJj",
  "key41": "2S9wvir9fvMDQT42CY9nDqTPzFy2px2XCdwW3r2MCgReAr1puvKqB7gAsaNNViCixBvQpjUKM75yopDLrKivresZ",
  "key42": "3KeZYswcKpvve6csizDmDCGxxeMX9q9aFX7oWSbUVWQ4yBAPeXZgaz79U9GSi4ad71FtqRwW8nwnn1vUBPVFbKJL",
  "key43": "s3pvkRjHwke1HL3moSYGKzBzsuXfh6FtFJLkqLAz64CifMEP7yQyfiR2b7Un5RdX4J8Em5mts8JDHVeqAMbxjbd",
  "key44": "65qP36ciiToARYoQbdq3zd2btJDAMRcs8tSUWcA3fPEavjYZrXr1kFw5pU8RkL8qzpigKpBvMB293447S1kSVqzD",
  "key45": "hRhJehBiroknBSwj8HEBefR824JFCs54XA7MS94M63jhFhoLAujGwANmeCGCxGhGPEbQUVXmrApqnhvmSYZPPzc",
  "key46": "63g1V7dxDTKPHYmijycQW1ZibXUihvo4sgbS5ReXx925RereyM43oKaJuEdSuTAEMrsk5B4ujvwQk9uQTyjYgjtu"
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
