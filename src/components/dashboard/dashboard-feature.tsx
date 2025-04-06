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
    "K84QTBg13sehRj2ZfeWeyqjrLaBqbXwWtrCzYAHQjx9QNG5rWNVCcSfJJBRJ7jHvoBgByifCi6Qr1vfA3QqXfjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dyqzs7ZLeWjXY9Thh9NJQSoSEhGDDnx2UGBrnGukCWQF2MQ1fhbjHgT7qZHJJwUxWfKBby4hyLfHnUhDbepN3M",
  "key1": "YnbFopNYHtWMMNCAEbpaDu69UKjAuDZophQPJhRtDGtxtXQXFqTF98xXYbdjBNNARQsPHUgAKr3s28Hn5iJC9ie",
  "key2": "3sZHBkDPwzt91oJU8mf7T9FvfXD9an3j6czUyzrtyV8GfzxFd6Tx5B9DuwoevJo1X8UnFVLgS3oYupGQHNWgRgSk",
  "key3": "4d9euVUKBGpQYUcSBJkPzSaVAMgn46MCSVRaEUmVgaHeFvYXbwuz7jaLwqQXtET3AgnaM6eHZjekzj224DMTA191",
  "key4": "pdQswrM484k4dct89e9nJK1Vpsk9fGU2TL3NTQc6X7jXB6jXN6UZeegbhPcAoLxnWaeZLvUmHxuPtNGDKDo7Nw6",
  "key5": "2Kx3kvAjTi4xpRd48v4ToVQgB92jDGKtcL1D48f9oG9kAjVSDczMekHuoN5vgEbufD8qxLyy1N9gxCzfHxFneCqX",
  "key6": "QTUPnhdz74hg18tbYHRoh8aRRkqpXKEe7qUfqPrtMKsJtkZvcXEFLrJc48EpKBKHx1xQweJ4MVk9HRDxSaN3CBn",
  "key7": "21kipyxfw6wMm4i2eNexm3gmDjgqCezXhqPp59sRVUxY2tNPJYRtqLsCfLFPfzw3Dp1UupitAjXRxnLgc7qMSP88",
  "key8": "4aPvY8AWhWaTDSb328yHEzt3FrfWdpGWDzdSbcWpnvjvDvjME7AZf8KZLH76CjN1GDmtPpySCn2JCLAB437cfdma",
  "key9": "3QdmF4BUFaRK3ooquaVwJVevD1xdsQGe57PU4QXi5qqCEzsQzwCgRgM2cmVYiEvnaGovxamwaF3MAReqN3efWwzi",
  "key10": "2h3U6rtMVhRv1KiVeaxHHHaYbFfxbQPwtBENWttbUskaerU92h3YWzhntR41tWD45KiPxNZ2eqBoAZpiT1HUXBoC",
  "key11": "2MLPsmmTAhz1L2gfDbEEnHSLTXRNfLbQ19FeAshCzMV8uW95mU56C4dwghb4wv3TFHzJuF9duQbEQ5RYQtDSEib4",
  "key12": "5c72xfWhoLDgLG4TodoiZgEXALLyoCnJm2iE3bEWmBTQbmVjkSGcpdbhBsH8hHucWL3snCvQ16UrJgFcwCaH73Dv",
  "key13": "DtAaUYMWnrmggGK6b8ahYeGFt6HCvegMbdxc8PRrUyArhC6ak3EF88V3Xnq58HqZ2pZLnu8kWTgCMePqZx5RfVW",
  "key14": "4UxwLov3PcnaLoDpVUDGZs1auXYYQrqEWMeTpdKGnEEccm5QbG6BEhDm2CEq22zvkQqdaEw7AXE88upiEfkVYouF",
  "key15": "C6eox4edzsWvUk5y6WNWckcnhBvL1HJJrPehRPC58jgq5yAdLZFGePtqbAXcMQxhMMAXZekcgLehUhuDL6g5hwF",
  "key16": "3Z2suXVp8KHHgFMGki1jVwhkHw3imVz9Ev1cnVAEqm6TyVPSobNRQve6ykXhNH9jU2kbFQsfsHfT6oiLAweZQEzs",
  "key17": "26jQYuNBUWiQVET1Xh5RdyH5PymMrekwLm62MitPCH28rsUMVxNkQdUfUjfa7vQviotqiL9xm5Zn2gqqxi2rJW8n",
  "key18": "3WQ8Q4t4uZ3sMqSRpaDbNpgd7KnqViR5yNviwgBWdMfFYP2qp2QdqLk9o9yNtgFX4Lkvf12FvpMFMEpVVVuNVD7f",
  "key19": "4xGT1aQcoUPcD3UjLm2P1ai7X3yL5pikxinieafHjLCkCBZwLd4U9MJS5zTJuh8HotYaKmGEqwguWv7D8MLjiT3S",
  "key20": "5Rf16EJvA78jAGAUnm9rqPH3gjXqmToyzN5KPab2x4Kj6Mj54kv9NWKksLHTzxpnxHnaijxYbbtW4jh2mvHmBjkd",
  "key21": "2NXjJBUkmBY27AkEjBtUN8LnSttJTtTimB8uHHgFvbEowRS3MqxLF11msoDofWsBwHnxMQQHGb5ZR2p1rgt3W7nZ",
  "key22": "4SRBgaPFbe6CQ8Kp5rbjm2AcbfwkJfcdYwNosXinfz7NNQWs1zk4U9rQ5w68oDtT3r4Ew7qq3Xq2sqidcmA8nPJn",
  "key23": "3u1Exhpt5S1XNSZmdg3eR1TVXHPDC1qwDmDxwbaPgh8mUV2v6dfm2Hwh4wvtZzzR2c8iE5n7aU2Wt4rw3UDNXPop",
  "key24": "4VxzkUy4i8gfZXch7sMmecaHRhfYXkb9J3tT3SQhJsXJdoBPzKCgHQQ32wkokJ3LVZw5fpgffSiupEbLgVmNkW5U",
  "key25": "H6Cp5dCnoE5GodaTVWDF1MZDnRmmhqvghFx4BtwHj2vwkKfudH9rf7PHMAmnWe54qt1GsVMe2r8AmRNB2dRZCim",
  "key26": "dQBZDgymngf5c3A1UFmWzb22QBeLSYPeEHpeZKEoTg7oUoB7hEJLSS46eP7TBB6SLtCczHMkPx5muufbN18NxLk",
  "key27": "4TDmaFK2LWCAT94aqscWLHmyf7ieeDXTTom92iNzXhAkWGMRGPzRFjkyx43iAqr6JVo8v9nWf7e4MEU9zntP5MRm",
  "key28": "4ncEvPLtXset5VKFztqqxd8cMSc8fByGMLHNg8gYf47JKDi7xUdcW35msVTGHxynaoRXYbRounetka8qWhReavCK",
  "key29": "x4Vs8Mwqm9zVvuzV4o8k6nPi8H44TCFKQtn7fMw5CvCpepSyoW76e7xQ6xE25M9EzveKhVd1xmyyPWj4HtThJYK",
  "key30": "52qi1fCebHKTfhD8rBeZmbZaeMpkgY8UcmMjMWoetH38Nmxr2udFcDM5toBZ3qmNs7Nb2zQHWygTbrLyACF6UzKx",
  "key31": "2QUqrjP5t4wgp1gYSftxkRtdYaEL9c6K2imerCjn8qhYhg4PzNdJR6ynZeBWsvZWcxofxGyjPSaMvpxxaQUMUpeW",
  "key32": "412AGXc2f67Eno658hWnXmeKrHFNrZGZ1uG8cS9QPQWUyiQjKsTzR1ctx1SZLXdHoePThDMurLkDFLYoU3g81Sse",
  "key33": "3HnJCJQWPRPgh9zFpxmhtsvdQqtEH4SykMjeUtQPfLW65zRavMfcHwa1KHdDGYfqnDUauXfkaTVdxseRwu3Lgqty",
  "key34": "4BQTUMehWQabD3Zqe6iQvpVaq9piYy3ML8bDwp685g6xLCyszeLBe2ncm8iFbNpqWC94oxFUgW7GD4z1JsGy9YMz",
  "key35": "2MA5PbqNMQhunjqHWjAicbwHHtTsaBVGi7QoFjGeonf7dns46eAEpm3jruJzSmTXgxDVcRRPwnXYAEEX98a3jgrq",
  "key36": "58M1BECpgMFv44sDEQTs2Unnz9WXB9GrFAFHGhKUrBtZCSPzvz3X7unP3ipAE2WvwhjpWyKain7aM7Yr1Vkhwwf7",
  "key37": "so6nhWZ2gRwyJgQyAyCZY7mXx8EgbEUAVPozUG4XuW1DAPHU3hsqdeVb1UJNofty6PCtchsvh5ycva81XPh6YPC",
  "key38": "2YgMGpZCV5DCsjsy53PeXWmq6Aam3FRrNB1QKhmMhVxrMU9GhGMvenhYTSB1JuCWYPhBsuWkYm6eBaDe2mAyjmuv",
  "key39": "5HE8wVN8Xanu7cwgSEVaY2nkuzgpEiwxj6gxkXAJxEVgkRUniWT2UnokVSyJ3h2kjKLAwcWAt9VhBLooZK94egaD"
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
