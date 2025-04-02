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
    "2DwVgVHsnbLZE9kd14fsFFGeaK3n3bFfUoUCjEhdXuRjjSEjbrjPED5P966zHqmAExDwZkKw9KJChzYiWeDxks8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52crxBXm9SiWYHbRnFgu6ELsQ2rqTHtKUEnbCbLfYJ2J51fTX1xWCynpQLe38VUWc3YotHGA7dGxVAyXEcpEdi9C",
  "key1": "4HbcW5HQFD84UN1FCws5phQb3iT5zP7BiFMB5E7Uj1TzSbPV1DR8W3LRVTSBupamoeLZTJmMaZarwXddrJWMr21A",
  "key2": "3RaepPEKkxhMKjH8rD98QX499qTJ9dr9Yyk9uKa7YV18R55ncTMBeSh21pp37GNPYnr2srXcoAD8jdenEVxvEjLK",
  "key3": "42LLJJT329fERLUputAEnc6kKJ8LDHzgc1EsG14A4ynkusdMV2mQsWzArf8HHnJcdD1tr5srsNhpYxwxRZaC3ArT",
  "key4": "4hGNvHoKRdDPae3XHVGLwViSYDfojkSTLpc5TWWnXCt3ydBGdnMtfTTnkRKaFn8qnUvMQ2Hqn16Mm8VUTAdakrTJ",
  "key5": "4QwpvHe61W34mXwZr7apMMaKVUZ8igyMppgPVUtKHFS526gGGCwgAoDZox7hy8jBa4tVd9UZp5ZdzF7pKoBdHcdX",
  "key6": "3Gqdy8hEsjeBcDBxxgC5pSPLhEginkZXSbxWu2jsETPBMUt7G9XYj7bHswpDSEXjLtVMxM8kXzmW78ggkWTk9j1K",
  "key7": "5w7wSSxrweAYmR9dETBNesFXZLKLqL1em4Yj6zhD7Z58zouyxni9WZ8QVVbh6auwzLZg2khNMSWcTQfD6MaPqKKv",
  "key8": "3ZmMHHhABc1ahke9hPvmbjxn1pCNNmkozu2etX3yfKtNVNavhfdve3TsovE8wdj9sKocE89FNPme1CiPnevFzW5e",
  "key9": "JL21FQ7Rq2eJp2VhDKKchB8rHHot3nteNqKnVQQqeHBPnZfRSfrj2p57NwvEFi8JeDHMZTtj7aY3pa96ASsF4m8",
  "key10": "4RgozdodqkxERUwAW6rnMPyvSrtKuW6LkRpanLC6MNpr2GKL6tEVMo6AKgd7kJasts5KSMcUsTXBxMhhYmEHTX3W",
  "key11": "2pd2w5QJGiQrS7YG9CNvZndBuwzcJx26K4oMmjwKNzTzFEGzbBMxNPGmLC3A2xW2Ar5S2q7XyYVTiuyvkhFw5ZHN",
  "key12": "595a2njUqL8fn3usCfofKJApKhfj3EPk9BbVfppNuYtPhSxWjR5WDSiQW3JuxgDZaFg1WeDzVPYBut1ns7DAZ7tK",
  "key13": "4PdQgqihwevh2Uv4CRVoRB1dRocLpczFV8ioc16ty2cAhr3qS8kBgvFuZV2CpVNwgBexPezW8abwoTrAZZ9cozYL",
  "key14": "61eDmGXoJNvycSWjkgUyYxDDpiYYPTGusCG16QGgTzzvtNTeHtwXZyRhd1nvKJsAdx3peCy52FuQAi7ahnckSDVh",
  "key15": "2v95qsKs8Wpc3ouV7t15ZJD6gru1P2TNB53dR2GETKEg31X62n83ajUQG7EXvP8vpRJ9pJmTksF4Q5RSC1Xvcee8",
  "key16": "3LYZdYnMnxgTEnpouTF2GBHHw5QNTkXR1xEZFfP9XapBH2tLS8keHsYnfwcxf3qX8zPcMXtCYSNmbEYnCmheabaA",
  "key17": "kxPQYVv3TnTMMg7xYRy9FxA5q3eWda1GEXGQLLsouQM7PCrA3YVLqNMnvNkBUB4Xe5MNezKYiWanJnYfem3aXxy",
  "key18": "5Abyvu7WaghSf4fzwNMFTCUR7pmKvVhJaxxJNB9ika4xqwuq9bSFX4HRMhZ4TzkfSsNrW2ogoEwTZUpJCQdceZi9",
  "key19": "4qJrUdNquQM7HEeEBqN1TYNUzs6P3ia46UoXDidbXgKXFeB32982Evp8DcmjWLuN2JBdAZCjJ18p1h8ovJHEqPL6",
  "key20": "5mzsC56hEReMyDKnnFPL2CjMxhfQ6qDuEpzBUZtMUm2BBDVnqvjT6zrgXC6jXZ4WHy3beVsdSH5Ejuf19Cn6rGn9",
  "key21": "4yxtu95aejCidzTP3UTX2gjqf9tDF8QHR8LTMdupwnQpEJupdtXRHrM6ERRxZSRiU6s1RE81CrEWX3g9La2dWrtz",
  "key22": "3MvfdKYBDFbd9BwLKyBLEN7n1MgSESJSQXiCBP7KZDC6NGu6F4VezSGRpok2maUCeUoqmPKQCGSd7LqBvcpYNh3x",
  "key23": "9a4xARq2wdLJiFg8PDhbyFoQssEtkZrnJSkPggk2dEvjefiVnPUX45eXu9FvojukCaWnebhcK1pLvA91vBYgEwa",
  "key24": "4HcTtJkDevbCJNTRMLmqTduUdVRmHgGBhh2vydoFT3XYNqy4uG8bgqJGtGq5EMZbWEqNdkJqTq1GtDXRmp7Yqvb7",
  "key25": "5gnBVq1LoWaJynUvyU1pJwtZioYmNnkG3Cecdw4biT5MuuSFd11jqmSZUwPuL1x3WF1XRyBsfxrdR4B33wpD6DxG",
  "key26": "2r795FMc7cTVsxPp6TpqbijYfgBqUoHwk7ZJfN7i5whPvW4f8tXji69DNB3k4q1gXw9XkJsUeRwMfXvEWxu4Pq25",
  "key27": "oppzZsHeJcqTcHh3KBLzCXeodhFJatvcivnEXzwcu7v9oVWe2AVfcHfGtkP2U8gnYrfY1FGBCgesNuTiidpFcEH",
  "key28": "5GznJZJwvi5sfMLyH9hGRc5f6ezfuTzPzcso67adSSJgVuTQ8YE3EFEkx9eQgfQ5Y367NrUxuEVAdHJbsFjWAaE7",
  "key29": "BcSu1sKw9ApAKbLbdbFuhnhT5JAEVTcZtn1HoSQ6sx77qjdnWKRTgPHotNSDseM5aggaqF8M5GfkLoZSrgMQB72",
  "key30": "3WUyeRk8fZTbCuv2j4LmwRBmbCz6WY5mwGpebHTZej2RKMeunMySGBJP7qn92XJEooZRpGU7DVRGgFWkWZKui9UB",
  "key31": "2CHU8JmMZgKJzdMZZfUi5a4gS3WGpMsZmjiXsJJu2ayM9QquVLBW8xXb8VxKJ88ecQuns6YvwPMSv3WvpWJt86dP",
  "key32": "4jp8a6mDZBsuxfhtfvBrcd16HdH7y3MATtF7ZTafcjyrzYB7fRYzZjWWnSARRYb7dBxqN7iCMFh28ZEJHbRKZ2iu",
  "key33": "3h9nR7j27dNCFbptRrCszzjNVQVoqoPZhShji5tK7q734d9KBuMUbmnSn72HrxfV2qjDnvyRt291UB75quLJnN3t",
  "key34": "5MJnpgnacyKPHZMJVhLQJuj2KrWJ9XNB9LQWUPBkuCAVeigiYBdVRE8M1jgz8Wgz12YmX7cygerzEUPuW6HKdHby",
  "key35": "3Kj7DZtrArzgm8puQj5N1fbDybWLDp4dzz9Gvq83QX1mbabymL65gmy1xiwisnbbLDN8wTkUueEiiweH95UYsnN5",
  "key36": "4so2aVQz6mE7MQQwgHsvYoKzLG4iRs8C2mA2DqTj1aqCqUxHdg8TobXHZrGRBcatrfc2WdLBXyTgh1SaoUQXV8Q3",
  "key37": "63AsB3zn6VCGssHEj4SGjFZrMSrzE69CTrw7GCihy6yuY4nxJFsjZ87isyW1G7PScGwqKDcNvntR3PC3sx72MXw8",
  "key38": "3Y5yR4EcxBwx4kRZgHiA13gqq1eAVKkgd2aKYhjzPEGKUCqtwQRZf8SsiLNtxPbUN7Nx1Vug9V3tWaoxwP7StGdE",
  "key39": "4GFckFWiVG5hsNjUzGP9wa8k5o5Z3QcWeEKsWVfK7MRpUhd7au8mz3wr8petAKDf52UqMKx5iVAZGUoPLxoxQYUS",
  "key40": "3surN6VfmMUorV5sxYrcr7d9c8NfH19RoGmMbNkh4aR29UTawLo1XJaCivFmzNXxdMp9vzu139yFhikmia9daeQ4"
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
