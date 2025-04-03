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
    "4pHDd62nFy9CBZVfhJwKi3bFs7hKEZRrMZNixGBRXstRJfYGPkdidctAnea82tLZQeqzNp35QUnmsFUE2DU4nZ79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mYNVUqKAdBcw494sGowjCHtqwiGSTZZVU4x9o249rDXHHEzyEKDxCUmsZkH2pZ6C1arMSkcm3yDvGW3vJB4M5AJ",
  "key1": "67YVfaCZXirGTuRhWG778NAQRZBU6rKGi5NkAaWZhS5PjyQKfmj1nkKx9NK6MGzHC4Gdz3kDMi6UVAscJFNg4s5A",
  "key2": "2UJtUA35Se74znMDPkqT5PTiS9hrcL6UAr2GSfpyog21uPmpqmJy2UHRXQ9ugXF4JYJ4P6e56wUhf49GedTx5A9y",
  "key3": "3hitF8jG4JGSNUPWUycCy57K3ifVXSHF1TnrDhbisAUMdRS86BouTr9zWzWxPjMHUuenCHnNw8JYkSCaqPWvrZeA",
  "key4": "3e1a9yeMKye6CYyz238Nm8LgmGDNXrWHA4boRLJSwJ6AouHYxbshcbV7XGTD258XQwHJb4E5LdrBhkq21UmyFjB4",
  "key5": "5Qr6zUKT49ZA3PRiKKmhUAGSYV1g95KG8FutW1PRnU7vJjh3Qqq6DWYVxs8FDyvA5LigVJWJybAvYZ8PY1e96ry",
  "key6": "5rRDFuVGxK67PwZyXiYvVjZUBNJ5qVbhmfcRhBzPwLrVKnu689vwMy57NrcjuX2T5GyM4ChqJ2PAwGuNSjdXCBfd",
  "key7": "nC5zCGcdtEnfWbBCwhYf2CPWwiCpCLsnBufrYvSJtrZ8JAjoLcvZNreizEHoWh6UpMhQrmv1phCgmLef9b6k2a5",
  "key8": "4ZXcBAEJ1vuTidr57PCKnesE6ZqzAuUQB4rus2uj43LH7xi97dQGZqWHCMF9u2JkbpnUhXmxU6rPzmJrsV4ESLmp",
  "key9": "2PDx6zqcRMU8tAUJZbCKU3RwVyDX4Q5rGo8oex95E1w8umDDMaZDZbXL3mNG6xHVUeaLUo5zfUDkCFY6jG45PpWe",
  "key10": "4tUqy3A8B6rvqd8wC34SCDGKStbbaFomhcuQ1dReK8ZSB1MxAZC2LcMrUaUSqz2JwyQCxc2YZNX8ZaYVfPBWFShB",
  "key11": "5yrVR4HZG9F1uLmn3rQzCiXWXL44kjukshRHuVzhwZfgXuAnmw2YHFPtqdpVLm56JHyETPpGjPrmVx87q5axgeZw",
  "key12": "eGmmo256CiGR3bb78UMsXmBQaHE8Rbuu8vKszckjvReLH97AqM8qyvcsAQKTaypKBSc8f6jhpNNhiP2d7HtLwb1",
  "key13": "5BWxy9s1Gjzc6JfC6rTnU1pu9LHc3XdZr5TjG76exDg2fDYyz65GX3P5j2L9y4esxr8eLkqYyUGr3XsPVmS5qvs1",
  "key14": "Qp9YMz2J7Yw1mJ24AvTxS7Muc3HgXzQh3bPP4yX8EU2UWH9xDQY4REq15TkMBeGJyGmN5sfPsBCcCXQXbXcPBLt",
  "key15": "4yPrzf6m5byKABVtesibXytXcQ8cqSqceGvkAHq9RysvYfjo9u5uX5TcpfET89XZ1fvRfrq1TJcLZcqvdB1u5VeW",
  "key16": "2EDbDPHiFjvbPW8V4zb9CNL8TGNnKJqKdUVggeyWThcZA3wja3PWSfcex9yDtm2TeY5Q2oXSbPPsPDamNNo7rgQU",
  "key17": "QsrCgVomQ3LvvEAchRfLqwuaDhzNU9M99dsRGpTv5c8Se7o8jsfohiozFPYdh6zZ2hgicJzGXMZoxif54FrjNRK",
  "key18": "3UWbyPerY3kNZaU6Wuf4tqRckhVwDeqrk4EVGrQosAGrwSCqNsfszNLr2nMQjUe6mMXwuo3FTVZdMLEuM4Go2stL",
  "key19": "BRodgb7FyJLntG85wbU3XYn1ZbS9341iAj62SDU3qChzkLknqi8duDctnmcexgvUbkeK5LDBW7DyLsUE2WWAkZB",
  "key20": "5vKMj2oihPDvMbkXgMFAh2kCVRffhvwfQexhXT4oGBdapE8La3tpGUHfrrtaEDCm99v7nuaiQqsWoyVA45ud7X52",
  "key21": "3TdQM42gZicTqvnGmYAVAHADUoB5VwvEfSAhxqwonvLiijARzrgBHw3FhyDxwe2TQJLFwebDYx63UeF9qbdXvsL3",
  "key22": "QaLD7U5aJinAYoFKkozxyEv7itGEpNG6Mq8VaJ72kV1Afzy8grgSps35yzo6Y9J8G9JqPQSHD6Y1vekdtJdDEu7",
  "key23": "GrUAUWxzrJGnH3iSjrhhfuDUJFsDT7tVGFr3RcUEDptgTNuWEr3rhB9J6uEXcyuErrc3r4mQDwT8ug3DqxBGXdF",
  "key24": "3RAaRMuy5jVm3G4XV53AnKBPHbVHQr6VLxjDde3VuyEi92VDyHoW9wQkfHG6KNS6746sdBN3rNZ5CT2j4rNLEYsK",
  "key25": "3EhZhrCXmZVY4aSK5Aa4U9uKBXBRei3FhHbj3c2EgWr3sYmb9GE4DG5vzcJRMvNkmKsHcK71JdnaLXWmRuYscH7o",
  "key26": "5CBpF89xpa84KDNsYGYMfHucuPPYiZjLiibhbzfjCAXPPoLsuDUGJ9aqAM77cS2SmMXe8haTiRd9nm7X45ndEdhP",
  "key27": "3EXP9pUngY3PMGpLcwspK8y5NBr3Etyea3qxbNEVMehX5HA2aQbYtWBZKriyf2G5bEctzgPtg9MNgkcH4bD1C2hz",
  "key28": "3ZW47u8RkPwZ4MraFuHCMGJK32q3TKm7D1pz5fGFXqupy78THQHeNqGNKKiLf51LF6TtWaQ7xhUhCawbjmSczsjn",
  "key29": "37SdTBVwFRTcq99QGcpJisbXmaPp7bJcJiCcgedpXenoD81Aw596HsmDHztmaaptpaZQitUS4MwGK3teyhvazXBu",
  "key30": "3UBSEekMbhixuXCXPXT6LTPQQEQA2HqnUbmr4q35nyte1zcP2i9tkawEsJ5f2qZAj4SLrdoggtCR6hGUJuop1tjR",
  "key31": "3kRxoF6LwNjQzsWfnZ6it4RLnXzZyHmPgFcCzR63AYe3UdcuA3FJ3svxAvzVtaaJQD277Pn7NykfVyZVVmkPrZXL",
  "key32": "5q9e6w4BBZf56JTayaf5zREfV9K1vKqE3VFvsp7vjp3ZP1xDCJrWK2reztNKXbLo9PVaCPCKRHPt9pw6ff2ztgbE",
  "key33": "4zQ4CiJcpcUWatuHZNqsvBWHPWYjgrzRNYjigTsZgN7Vc53bsndfVrHq1cG8833JE3Fkjh6n7u39y7eH96TMPvSA"
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
