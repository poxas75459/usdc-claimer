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
    "4fRuHLq9oa5Mvxb4RkqH9rsLcKGBnLB7DknLUPZG5pzt4ec1ZK7UtgiCzAkbJugQUtDWLRGYH6yZrkTXWwvUwXNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KVHMssM1SGraaP4MMDa6jPAb1aHkiPRrgTVM8wR8FykmvNNfMqH2kftrKK2sLut4DztHB2xkqJKayQoJhh14q5Z",
  "key1": "3ADbJUSTnoKXJRDT3yJENduvpcyRWJsMJoMRpcYo9c21iVUbsZsy6tW57uxPGhmNV4gbKnfcXmSJ7pfkyjx2VkM6",
  "key2": "2AHjTizVmFXiRQdz4VxpdBkRf8AZF79Ditm8NbK9q7S6AZe4BbnSsQtQ2nF11KA67kF6PqnGA9wK3jrfjEbWJY9n",
  "key3": "27MJUBv1kJQcfD5w8vLC1jG8XMVXeJq5mD6Z8TKvQN1C1BrujAbDiA3mmukEbCMKLs6mh2vSyE7Xkj5bkU7ZnktZ",
  "key4": "hVC65ar5ecv4pi7RpKmJg732vmW7HF8JWnHCLNbMJPPVUZPrAbtGX4aC8TaW8fRxWMNcRtHHsZRXp6uQYjXe3Jw",
  "key5": "eGo8hzLmHNgDVSDkDNZjCszfkhWakBpptTjAURLmawxYqsXipPgejEvk85w7UcQET2nLNsgQ3e58818y7EZ4pNa",
  "key6": "kBC9HdKac8hP28GYFXLVjUBDnfUUzD1CKx7SPLHPZqTbfUJKWG5hhVQrzpoShJ9J2pu3EEmSnu4QSWVW4FrNX2k",
  "key7": "22JWprk6xGQRXeWXPgo9N64GUncnL2teARL1Mmn9o16yRFcsjp5BPUUUZ9VFpUSGc4BWc4xF2PmauXjts4Uazh7t",
  "key8": "3htAYCuiCWFtNFJQ8NFzybpxV1DRx7MKX23yjNeUYoQZRUzUYdvyMsqEhCFgrpn8ypjRSEHbnsYVdERue7sv5jUV",
  "key9": "q9G7XGoGijpaRTgfPFQmFS9DFNM9Lj6TgFhBnoA19o7SLYprF9yZGhEPcK92EmbTgCV2RZedjxndUo6r9a3nrwp",
  "key10": "4yooDiafPinvwA1QgQeEiXBxoazh1VsDR237CSHM6tqTE5AdZc5g6m7vxiMDkHYNhcFcCpMLUrLysbYiLpuAVuqU",
  "key11": "4H8jegBNkrMuv7KXN3ABLiYgLoY1UpwB27Ni4C12dfaDec5Veejoe8iVcUxdUbnGoufYLLjndQGnApRWYDFPD2Ho",
  "key12": "31hhoYGLR4trax4F6jkrpm1NeUmrXA1nVaq8zEJ2hF8fxQJy45Z2D4JhGaSVjpsd9oAsHsZUnjWajHnBaT87fPJ5",
  "key13": "pLZUnGwdT754mCx4mfGU65uCd7LfycPaNhZ1fcamdssKRhehGBDMNehbUbgT39wjjkjj7zLGXuCBdT5WK4b7djD",
  "key14": "EEs1HsLLtNkPmfbdHTpT8GmC23XW3Y23aAZQayv12wA7qdqokmqQsWs8d5PaCSNKDSKqyqbznBC3cHpAEEB2TnC",
  "key15": "2HPqBvY54Qz8NxprjuH4S85TW5th5D6b1qwRtZJxvSK7EoDKuyJQ4RWNoC6kdrh9kPBzsV6gUinGLKxPLQozvNte",
  "key16": "5b9q9AA4WYBaugVF7YC5MFGQLucDNC6bhiSgBQWXXNbPk5AWHEpveagjszpTvgvifhhdeYNu68DNRrQmoDFGNMQz",
  "key17": "3Qu5E8yWzo5ptmtfVBvZ6r8NiAKhAExWbNQT9KDkuj27TSuL9yxQte6v3Ez6DtBAd8DETBJUHyqmkKjM5ik5ejyW",
  "key18": "Ur5QjockJKfQV9TMuQBkSu2VEV69dyA37QPzfHKwSXzFzddcf9dNDAMJUY5cUtGkt6ZZBf9j3AzeehYBZjMsD2d",
  "key19": "3zpiMGvxZwV7c9N8HQyhAnk2UoshvwpEJTG44MwoNWwqKH7BJ7XJ5PqXaPrZsUF3C81hMqe6MwP3DX7y8qzEQCV",
  "key20": "2bPkaU24KrPs6cQYwMW8LrJnYeAqecobnhbMxBYDXLVqqywusfEYm993AeYztJTZSudcJFRrWx3ofZH8hcsuDSkC",
  "key21": "2oPNaFwkGf6QKZjiRsQK9LYZZrHxc4TwF4BB4qtzPuBVsjRu1n4pALZDJjqvTtvHerU6AqiBy26fjyBJpjberu1k",
  "key22": "22UDLn6UjWQQmM4FhE5Mw5bChfqpJvFbqKfpJxBqhDL8Aofgrw6wksatypeURMhEJJrHhLRfSUmFSF7YMsDJnFnR",
  "key23": "Cwq3KrK4Z6vA3RUDzkPdrah7fKLTFRsH4j34N9p7iHkBYVxfreyGr6LK4cMPW7LBPzruuKZuzZBPErYwVp1smS2",
  "key24": "53pPvbcYgjQ7RD2MuizdMTdPJFrvwsHDxWmp9FTQ4X7iSbtBUEQAYqMmar73TBNitvsByP7sKyHdiq1wb4iqZ13K",
  "key25": "k8HKjE6poXSfLJjxYU6SGWFR9HHmsjYxLEZqGc7LMZ1FtR9UuviuUzDpu7XiY1oseYau6FQJdCCzajhCZD9fyvF",
  "key26": "36QeaUnjyBAsz8HABPmD6RmiNeTAqkc5AKKnw1xQQ2FBGLmkjbVjRPExPhE9Z7J1qaL9qFgGyfGX5fVqnjMLrChz",
  "key27": "dFQ9TwhC85JawZpBv4VMx8FRnFufdZBhchuUiSsNuCXsjVHrcXxFQjRkcDgRebcvAXmKayTX6LCY1a2hi68YUAu",
  "key28": "52BgnFb8eN8zw2zyDr7DNGyxuDLbeVSUtNZNpN3zojy1guDnkV32BMZFNCQSsCYfqVnRrjYB6rqs5oBiWwjxvYqV",
  "key29": "eBW1TZToMfZ4zeYixJWbt34RT9FK2obUXn3RDFgsZNSumLfD2vfqHVQnQmashBfBe6QyULegbCm7ZwtvcCcJMDi",
  "key30": "3oQg9uxEcCUm7KAU6ttbvuz3U3k67u1dUgYbvuiknMEMp6jKQqr1r2FomLT51BUvFjAkCUx3DqD3fqbBAcESvLX5",
  "key31": "3nccLJrExR89CAeXDDrXEKqFtioo6EM8BDbsvNPYLruAKs8ssdaCh4fow5EcmGqte6Wb9RoXN4EyyCC8DYb1bTd9",
  "key32": "4HuQj4rsWCPSbrf1Ud51QwPcMeXLX6Atyumm9ptHkVpJTu47Eg4CWTmf2P4S7nrCTvXDHas9jFwFnyiZAfGmGYUd",
  "key33": "j3nzK3D5Krcapgq8K4GQFko22WyPcRPChcDM25qTaTQoC8JrghYeHVHngmnV5uaYnKxacXyqrfyvEA7R7b6fNSM",
  "key34": "Hhk1Qkj98WtLn4S3bq2TiZFNgVSnS2113G1tfk9BV9nPoqtJVuZrjVKUubkPVCeBokDkdZ9AzDandwFWpL1ExCT",
  "key35": "5QpM256kxaX4EzkPaZbWA9jXC9tuLW7HyhLcCestXL67zJXUhvMNx92MaFD6s2BvC7FqYj5KAxmEuS9cqSRVQRsb",
  "key36": "4j6T81mexpcuSy9g2fjA5chPK7pZibwxmczV8TbupDNqtzbgPn2jTvF9z3D9dWf4wEdzdif4Jv7hz6YUbb2N8cuL",
  "key37": "5w2eLafnmHu6VHTBzpcENDkQ5TvzR4zWuWYPr95QsGukVXbDjsEkoK5c48sBj9zKrewSP7ES94UF6jraZUA9LB8n",
  "key38": "3U3b4UnX9RGjFQRHFJL1Wf44vH7s6gBBGWjiGGjaarPTydSWyy7nGoM8KjW5m7Qfa51T15AztNvRaLJvAzKVRjrH",
  "key39": "2wCjg7oUtpMHjdCyMv4CfpcCc2cvTAZ8d7gpXf6Ueh7wLDQYU5GAFUsSUZcr1YECCZA5uwrA29MLCwuQdjhjyVxc",
  "key40": "4Ga5GcoCoKkhiPhVdajTvSvrVAPrRSLGeXq4D7GquRcupuTMM7TLADdj5k2VWybLB6jRHDJSCsvt32SDpKNWt6pf",
  "key41": "5wa4MBRjNm1cSWwkvqvuLVcj4CXVY8V7x2wy3FW6FP1sBBcEDNSay1VNWBoAn8UNPak6hDA7ThEzW7o6zdyaNt1w",
  "key42": "623nDxFVHBm9wHu46zF4UM3UUx8QBvcZA26KvovrbNusmwHvXbVi7MBkuespwY5ZEeDREctvbpQ3Z8u9RtciVFaj"
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
