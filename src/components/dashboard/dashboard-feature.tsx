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
    "442VQwhQSgj7bPYQiHudyGcfdHKTtmfP15JEkTUqjjnx8GLrPcFMm8YPZiErd9Sv9935GLWneRvJsrvVdXHqmtmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RkJFwZYAhkUYLTutEycGckmHeahpofaZYnroCTkHJiKpqDd3Z1bS8AHrvF7FujacdV28iycUjLXUr483rSuEps5",
  "key1": "5RV3qySsSyHLS5vdymmmhLyKuGVcNhUgh6wXGtudeq4VMVRRrCB8tmsnXUWdz6fjaTBnYojztuEMfQgfU1Tvmi6e",
  "key2": "23WCY4RsTseHizUxkoEubLRpryyxLS4qdrbhZraUp9KcgiGNBHwa3jVipjfVwp7QaTXWMuQm4UrwxXhU76qBac4W",
  "key3": "5CWYXMvgBSBfkbhp9H8YJvJ8Vtkk6fLFAZ5ga2LcQ3gzSDqM99BcnWw1qTmr3WV4CEyhsvRHVQNXmkPZzSGgWiz2",
  "key4": "CwiNSoUqGug4CYGrP73dfgk1B5bq5KaihtUX6w5qnmnfaWK5gQsYtry12YxYN5REWegFUYD6ucMTb5LNRGQZzK2",
  "key5": "2kYMonqU4TaQcgtMoT5mrjnpLLfzqtbcxt5fKbH7oWswSNPWXNMaSoLUmEyzXpN9mJmcPrd6hG3KNA7w46Kes3Sq",
  "key6": "gNcWeDbrdBhYUmG7MMGUE7kRhpMzArUQsSa66xSpJL9j8vA4m3WaVMxN3s5PungpGVQw7bVKkKA6SEcirC6CZKV",
  "key7": "M1uE7r7KTdVLhEZtmErEcv3WBGSmfMDS8amkNiQcepTod9UawdLybVgHUzFhzyssbXR6etaS4ZfHZsRJUdrDmAr",
  "key8": "3Q56tgBWXqeB6ruk6LunrQwP5daSLGsekdrMasZyc69GLnjj7vTQRfJ1ntofJq1c4usMERHEpT6Xohevoj7Qfgd9",
  "key9": "5UmKf6vntpSD9eDJ2cx2zWCJQkgXzuneED2RLXUUdQ7vjPtQnFxBoKXu3gKGH94KpDbAnztEuuh6UYAPPL3QbQ5b",
  "key10": "2fXSsQBnRudUhh8ANNy4Pcz7kx5CMEirvrVSjMdTBvCcykVAz8Zbr3bcEQNz2Rbpwo81yKF8ksqLTQ334uScz91",
  "key11": "5wQGMFrTJfVGnLHb2q2ULhqET1iwzH2naygzwxiH3GYfuCuPVUj45EpyJ7rmYtMHnBkDHMnhGuC7143Jen4dGJb",
  "key12": "2fG4Z9xtr2ZhfAD1BTVsrAN7egSr7To5jBNmsQxUb8VxqoS3Pam4pYkSDD244i9m7z2W4fU4jXB7ZsF7KUzmS8V2",
  "key13": "3o6S9VdiNnVM2mSVjfJTB67pbbQHEddMVX2c7DB1DEaZCb6GzdPvyF5sDjRt9NPDRcufFrMCjdweQgJdgdrqKwv",
  "key14": "5iqFEgvbvziz7jyHgP4YP4tFX7tMMKLhxJviQyAmJ84XCfqFDqHHPBoRi7LND727jGhi2JHjbbvbXRbv6yBa8Wwf",
  "key15": "63Asq5GEp9vyjW7uSKJi7QYrFQzXs1oKBpkVVKYNrg3eG3PKqL3XpyjA2SBcnDZLrFZnTddzXFW2cUmZ2dVmKBnG",
  "key16": "fpiV3YYbhc9WpMUgqkAnTjkXhLYe2WyWmWqQYhyRuewfRVirnjGq7Nf1yNyTHWNnYnYunHqRybdiyGHEiMY5PJJ",
  "key17": "Zs8ZFjE5bps6WfGQMmRAZoBxJGVQHNDwv4diPn4e1xT9S2mtYAaMjME9C2yiXELawV2e9XosQvez91nV16cxkRa",
  "key18": "42jRZLjHNsztyp3ZsgSvJGPDeVvLGsQ3gqbHREP8fd9798x5DukZRugRdH5UtHvBo3DMn4GzjggMroUZSjdxkDzD",
  "key19": "35BfKbBBK1Voh2owu87jZdDto7tGEXfy2KLhpzBEeEY3HEnTdx2d2UAak9FwX4Afis45TLhEDnpcqArKhfJS32wG",
  "key20": "uWC9wuqpEr5qcjEGdKTxZPMp3D3dkesp66BUq9EYqeXracK3DyDrDDatAQNpw922AmQ7pmy6JN1vZeVxCRtYZGh",
  "key21": "2ucpQxozawhaPU41WM8k7FjWLJZ9x1jKTFh2ersBaNc6VSD4XhYfkf2CNef7TGSsTAYrE6nvCRAd1SEDzKenYxsH",
  "key22": "5KAnUvD7sfLQJC8QpUDn5YiMmXHLUMkqepgjimEkjLRAPoMJ7ucZZdEsGdmsTuz4vv779mjyGYc4UnxRSM7ZhmQ3",
  "key23": "UTGzz9WmRp3FJTourrGkmr2M8YMcxGDGhssRLu9YKXrqq6Udr9nymZG6b6phvCZ1WBNXeNQTPB2qerkebjR1XyM",
  "key24": "2kvANGcC3xyLh72uiXdQEfnXPZd4KBcjwFT8ZGurLUf4BQFCGPvnAgTGLQzWaHdZx9bQfuWi3uiPqQCop9Zpvwda",
  "key25": "X18TPpnsHW6iZz12tcQ1zhjaqQWG2tYUHo57YxSrS26otsYtf7pv7WGM1seb7NMLX8bzzzW786R4a9cTwfEydrc",
  "key26": "VcxnEsWtYoNPXjXBUEXX2HG6oT18ryYCTB9g4HTCiTYdKW7ywSqMimyy7ATkGdcMwFrCsdJA3hkZMcNphVhDbrc",
  "key27": "3TgnJL4qkijvwSDxBJV3SVu4W1m7MetTsYoSBynHaGaqZp9rgr29JTipFsmBPmJt8UCqRT3nfkNP5ABtRnzuq69h",
  "key28": "29dtbHQ3QtRVxcqyz3RT16iu3YuUnuF2Y3B9C6eBHA7DssCrtQ5GAEQG6vmYc8dmfM9nACGr3bC8Jni3aA9f3W9i",
  "key29": "W64yM2pjc2dH3KH8m1bTLzjGCogLw86tNakWeiJWT9uPbdXPhGGKd5JhE8nFoSQRGzVrx7nX1z3UcNjwY6ACXCQ",
  "key30": "4ashrr9i3SEDiWWt5VPbcoh7KiDhKCYPS83kVBES3cm8tsULv8FqQM9KE5oqgBpq2fBPrSL7Nz5ey4WpnM4eUXr6",
  "key31": "5rwCZrHhyR7EsE4WNAR9bgG6XXwg5MsxDT74cXXXQHGT5hAGN2wckkLs1aQ4rk71ndNs4uPtLf9U2M5trdssKLhN",
  "key32": "2PaakieQzhDzA6oWZcSQDVXgwYVsCk5edndxUTdzg876SPMxrM5seSRTsKKtzaeG9NtV4CpYhhA7oy3fH1RiKTrc",
  "key33": "1F6rc9FKq3AgMCL1mjgxvYpJYT9tAico4UC3FL9ThBZcWzWh4DZJcm2uBghLomYYgsKDEonVpca7fqRx4Ld3w7T",
  "key34": "JgmtEYCSZo9b6T59MtniDiQ8HPtPhpmG8joapTBQ2x5wmtsfC7cdUvvQYU8NFDG1hwUh7quWF5p1aoskY1hhjuL",
  "key35": "3TeLRzm1bPydrEh7wmWEEqyQAPGRgMhHM9GcjLSX1srSrfjUDWeC9sSzso2EzLpugsQa7z6kXG6of2fjwXb9mvPi",
  "key36": "33D5Bt155RL7QozsMR28RR1CXcU5353PuZayZHCGk3k16HWkaQS6ryRSVyRDmhUGntKLu7ZHY4YQoencNMpMmDiT"
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
