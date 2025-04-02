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
    "K6Sdx51GcLa8qbaXxWigNQJCisyBe5zZZjDm94d41ejXBMY1cEdt7VkhyVnRzJHBZhdiaDJaEnEuahaNvVKiqkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TFMBkSQgastBVwzL1dTrB4VLkdgzS9hpXAnP6qqMu2ejQ2TuMnN3gWaR8onZcJgihBXjs58vF5sU5XsoN456KeV",
  "key1": "4Ci1mVWL54Zu699mZpQ3i4L8eDmMgLDyg2rHYgSnxXtw9z4oscVyv4xCjK6xthzeqL7iWDCCViHVUiANZrvKC1wr",
  "key2": "2XVTPrJUhjyQjCAi3tXtXT7j87ME3SAJ2sqQrvYpTw7xhmb9SrtiGcvyx14vXE9qNoqoi4QP2snoMWfk9PGdP6Ub",
  "key3": "hHMCyqtkum9ygzKMJW8EMTgESpscdmdSbAzSdWcyWMrHbmJa3do5VFGGLp9A2tPRY12h8R8n4NW5eYiFG6xJBuK",
  "key4": "5ekvBFgZtMcZMdUkJYeNYGr4s5LZ5UhjK5C4x1DXzGXVScsTzUWdu6k2UFMVTWz15x7z2qgY1VRTS65mdarq68FJ",
  "key5": "FmtXGxoHbrhoXvEyJegD8ssdLcfeb9GHDU7tJURcx1NNxJNGKjzzi9DKdyKpmS44k6dkPP2LS7dEzHc1fHWCZNc",
  "key6": "3NFrGMpJKXsjJjdZ2iQJRaaf31L4pbbmR15R8LuGYUnT2svX23ETuok64SrvFY8FoaZ1h3xvMe6YYweVGgbsPz9d",
  "key7": "46Fq3vgDLUFqawMrpA89V5oe4FfgAGGY6WrFmj8vovK6UNAKd2S43SME6eVrAKsyCFaoQ5Bxbun9DXMqxBRmz4Np",
  "key8": "4G4MrkkUBLNPzJwNFzHKMKtJdPcYCTWuGAdcuKCtS3HLcnZ8K5jUcCKSWBsi8ZCzr8KfhDMAigHd2gHWdi5CJXDm",
  "key9": "2eMyZDcrSq1XcsPCCBhH91esDMPbadvoN5JpUt39r5z7yjtBWvrrLxUBvMTdVvaUJqyk8RoGAseo3Zdtwoiv6a3k",
  "key10": "2dqSUSbXH43ST7bS4hHJRNYWUteu9dzNpjapgiMMnjcxn6cfc76tCX2WUeCNGLYxqU4CeXUVLDYeBjMSMHJPvZsq",
  "key11": "5fE2X6fTN4hCQurf9H4Nn8KpxjkFkecMpHvPFtGWrtU1jYGK5xAYjh6tyAx3ocUkG1v5Ns8f1az5S5kbe177rUMm",
  "key12": "3ivnCeKQxDE61XHH6Hx7PBtHCtCGK2sNozdPmDybuUxCKsrQtLgXqXsdz2qJyuoySBve1ms6WuQBj9oDB6YDHkp9",
  "key13": "2iVFVJPGkUicN2VjwKqKPHV6DUzLcuq6niMP1YQrZ9K1mYBbsL6iTUEtPK4C759dNf5Bg624LtHTgaErXkcuN3NZ",
  "key14": "39GBUnzPcJbFj94pkN9Q6rs4c6y8BDQAnAyG9GJpmSSmWtpYtdgkLqvuqQNdEG9YR21qPMmuGnqQjsxPrm4mF8oK",
  "key15": "4KAReKqSzNUBa3Qbe63gAWv11i2HH577esY9QNkN3ciameHJiir8XQ9rcSafKZcD67eEM36cKdeLBqAYoGUeVYjq",
  "key16": "46xTt2oSYJHyiKfXovPh5NuS7j3W8wdkbYhatfXgNtpMvytGUzj8SWu2tUZVcemFduWR1yFB3RorNoCEVG5Fr3bF",
  "key17": "KUmgDJhyGd5VW7SfeCJg3wAc49ny39fX3YB1utrT4MvQBZfqyLrEf7C6dmHTUtgu12vvmFc9TqHMiP5wjhq8q4T",
  "key18": "9q8Z9C3u4fNPbzPTt8XkjAuqdFFAZ3zwgBG1fPBmfzmVVp3ciDjWQpAYWitGd1LYKsWXh3cFhdztybNkd88SWSj",
  "key19": "3E5ioXJvTsZwKV7B61G1VTBW5ExfxwiBK6XvaPLT5xjYDwfjJ469rh8TBKGZckDLtjpoCZqtBrT4hf2L5bPTScac",
  "key20": "2yWwxwmqdz7zCUT8nr54uWounyHxKmwU8udWb1KNmzvcA3TsbrFqZL4sp8Bc4MoHB2nFB6dnJMZEuF5xE31SER2G",
  "key21": "4NPUui6yiV2oJmWjbcDzRGgmWKC6DQu8KPSrvXyCNK4L7rmpnbk9DEwG7yA6RVkPgnNTWRDDErm4vA66uGJA4jbx",
  "key22": "45DDHq5DZvJFHrdd54dRH9SFxXXSqv9j4SDH95sGeuG7eGn91Kd5bNLQqZuqjHU57yDqR8No3DPJzUTJX9MNUWMe",
  "key23": "AXiiwGZXEe4a9zz4viFh59VHmr2oNSsxDYn1svRD7hToZn9LX5CieX2oCux374vpYJqR1KKbWqYB69PBJ1EELot",
  "key24": "59EJyRqa4isNg41ZxF7ocpoSZYJULP2EALdC9QbtVUX8ZC3tipLTs7QTfjw3C5GMBvJ7oLrkxQcaPLHWvwtq5Htw",
  "key25": "4P92cUbiHheQ6Rd37J5Fy8a63sNjg1pdTVpBvapzrbJ7iLtRMNKPyo7WmUPvRYkYFa4kRPaWYiYT3T2AcpuGFnSB",
  "key26": "Yie8Cbq67P6xJggvAFicrsRhm2eYYo9ydvEUdC7E1iH8LRLxxp7SEi3kDVuJNcpKeSbPQNW8fEwdHdQ7R2D8Mv2",
  "key27": "4qMdJy2cKWzXnrpcTHy9Xb5Rg2rYmwz6QfMgM9pkY5EjjBSk4hTVzsgsfXgyq71T9txYjEfbEAV8EtSKej1pgq3K",
  "key28": "2u4czaEwzxDPNSUDcr6dZoNZbfUK8yN3LBYUhoiDnsV5DEpErsmdqTdVu17s3UXJKZ3ZkDKTzRNHGRjZMmTZBXi1",
  "key29": "3Ewg4MU6ErBfuFHwhLaTq5yE4auXeBkC38fRaPiNmRaMEYfqBBhqyHsbZKfDhDS4YoUMsA8GJd8vg75WAkxm9Cvb",
  "key30": "3osTspARo5a1M3FtA4ENkA8eDr84xCxDQdcDXmiHTnj4Qe5L4oRwB8FWWPvLT1TT14mCPrrYr7zUPA3Gcjbgw2YK",
  "key31": "3NFQn7U87zLDq9AHtZ5Dus4cfpGwZzA1yfWnbApQXJ6bsPHfyRZmTgUGo9N8iNNFwn2g5DBjfCEXGyWj5dmj5Y7F",
  "key32": "5WU3UrcYmAmwZc9oSdY882oo3fP35BuEMqwJ17Vz2XPwR95ZgvDUdNJ9bJDsXWkt8wyHLXJvwLnAYe9Hdj5k4DgY",
  "key33": "4kASGosYoxh1T8Ga4ToEdtpkyS7spcqx2u3FJwY4ZuiguvNQUMDvQdbmDNQHkX59M7BKQ1BJ3MpuXVDkEJPXwQW7",
  "key34": "5bm8VBGDAWecV5ckkQ3p2PQmnfgpLjw5dJaGnpRq7fdaQTCuRShVeenCKG1M8iq3SBZSjNt3iGV3nsDPvhkphwZ4",
  "key35": "5tKWq8DKh7F1n9PghxmPxrr5eodeia2vEVXFzeWjKXWvDtJt1JzKYDVN37wz6isU1qyUiSSS29YTSH5tbP6a64Vw",
  "key36": "2Sn9uJcqedVPMxJhoKGED9H59YRsCpZuRmwqxX42cQ7bBqMuY5bbtMh7xhxyNZR6mQhiUUfdQMLS1rntzxQ9uKxi",
  "key37": "41ooaEaNfDJpe61vWbJSHZ6cCkHGcqAY5YmxerjhQKLoPYHsrUns5CQQTuDViAwatid6bxY363id7dcXpx6ExKxZ",
  "key38": "2Wy3aeQBPveUHkZcLqg5rUjWsFbSycq9g93ML57vjcxfWWqc511dWRp7MmJMM8P4cK3vtqhM4tGyJyb9s4DDeCFi",
  "key39": "3FXX8npbXTHPsh2wroccgYUiGG87aGdspq6L4h1RTExZ9BnRBBR7MtkQ4J9hwS4EpvRocC8EnqbM473u7bry7p9e",
  "key40": "4H1eFDdSCYyaZR5tBctw4CzuUygo7YVB4skidnxEZrtb7tPEvzp5mNR76gnP8KyMniEBrW9zebrgvDupzMY19Byd",
  "key41": "65GbsAJVKJWE7F9c9HQWLdiGPcoR2Ub3jnrJ77hhUN476NCkLcUdNSLQfCC7PFHRihE9iQH6t4PdMcPNmKtfV1LS",
  "key42": "3XCy8qP7RcS9Pu9DqzsTRH1qoxNNj1rg5M2CtYdz19bVo6pnNBBapRWJEqf9bpQQVTob4UEGar1vfJ7Y9PaLMsMo",
  "key43": "xqMJAz8cjWbhqMGiqtJj3D9d6GgA9zzHwvGSPenzT3PDC4zUShmtAkWexzL5bXypHaWMjWv86YcUPr3dh6VHTrY"
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
