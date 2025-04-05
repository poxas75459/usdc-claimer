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
    "5E1bidqSvdWqqZENQo7BfLbCNp8FaCkNh1c81qBrtsMBzPFgCaAm23bK1GWYojFDm1Hvv972MwjEC6WTmgfYetnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LNPT9AuezcwhYnpGaHpFwKuMdJVQ2dFLGj9VMVbP4ncyH1gzT17MHP4wcB4ufmSbKPzvz5rczTdQGUjii14faku",
  "key1": "36PoMd96Zr7vK2fhyiMHpkxMEbowdMW2PyVvvkVz5t33Vjk2DfyitbEt9adjrybzVqNEMTKN2YB6WdjeS5ntRhQp",
  "key2": "M5MDKzAjLBRmbtqvmmntbmMGo7RzAdspkBqcxX1vg24z4hTByk9AZcqKqYZUSR78Nt4hyBfqrG1CETunT37xJN4",
  "key3": "RYGHbndteMwiiU8RFxhENF3jkNm9RGStWfgh8sBf2jBtKdnyEHA8xS2VriaJbmcL8pfw7TQqa3nse5aETJh3j8S",
  "key4": "39ywrTntyCHpNBQHh8MP6YVAjkQt6w1hHtji96W9xGTT9wU7T1AgR262KP53nE66a4Xfq4u6Qory7VEwcefDKwEE",
  "key5": "3ibzQnZ5ryxd9XZM5hv1nZbv5XNoSkLaKRJbFV8gzxe3qdDJSXepAJqzhzn5u9m19GHiM3xhzZGGN6CzDhePyb9Z",
  "key6": "5j1qBKrcXXctr9m5rAV5pSxSCNz7ACD6yPvuo3LhZg3jToWduzqhU6d5DiX4Pysn9GZcY6kXV6DVtwu7NiQvaL3T",
  "key7": "2LiDVBpLwkENLdZXf8oxpfr9Y3hY1EB3kHuq26hQ44UtnpkLrGT6Gq5YpXZVhYxGYeb8hvC5ifKjc6iCQiyoZKrf",
  "key8": "cJen7woRH93xmaqcE5Zcohopkckj2x9LH2AvP619T6boYX8c3NtopK51QgyNbxecqzVMgq11Z7oZTbbJ7a4qLcE",
  "key9": "4qWm58b9ybjZfXbWrm9FrzbmFhtAbwLgnEWJsaXqq7SCNLWMEKp1DQG8a899JD4otUJxwqAybvCiQQ38BsrwNfZe",
  "key10": "5e8Gzy6dK1fH7WiuoSv1PbgDrGCTK6r7E4Ur4r5c4qZGH4XyZAZjGa8JBZkUTh1ubbJoq1gqJaHR2uBsom5vTLhx",
  "key11": "4sTsaErEtChoYwYotrVJGnN3KziYKg5fYCG5gkGHkhgfVNpiWdWqbHAz54mGV5cVNjo1hvwkZwaqHm5LYoNF5zaU",
  "key12": "5BzE7XMekALUASEDF5XMK6MAsDGJ15Y5joVbjrEMC4Br4pDMB1wXC5f5qay1akPbtvEaTyRffssrVxRRBwi9jGea",
  "key13": "4wfCZz5PhGpUPmCRYoH4iZKv4tfkJa5EAUUayimZyi9zKAtS2SKAnuTDx36B4vHgzD1P2Xc85C3e3Py8j2MLtdDK",
  "key14": "2G53aMN69K17G8K3ZY8NX9d8DmayHW533xSJLqYeT13edHefesXYiLZQQwMRjZBMbTV5aHNnvvxWitzAB56J1q9j",
  "key15": "bqo5S6cSAgCwEWqgLGGZmBcC4VK6SgJyRyo2XrWeP4BFTHcHMVwdNVPESBQ1JomWN89WYxc15YdTUXDUNMB4aaF",
  "key16": "HSMN54yqSxp8pSHSut9n8NGbsVF5ZgtnC82qc2YuLn3ibM2zvJykjMYwARKyj9JzWiw4bCcen2sjWj7Yo1bPnFw",
  "key17": "2nf6f76qqFYNvpEYcujEEafZNtZ5X26is5WzS3HGL5AL7TyKkNgkEztirteKyjZJQKdtjuamYLkWLwwxjFbMFTSn",
  "key18": "2NyUDkRSxpgW5N7x5Mp3WSSTxRHN473P6KXmvCvG3HtAiEgwjN17Hs2eiVDVXkHNt2A2ZxeMdHTeujiY2vmgBgiu",
  "key19": "PPdzCshNCaAy2SSuptkUsMw94PJ2dxLvna7izVeBZi4HXitMwxi8ykHTY2ZGy8YjKfkn6hyZS3BVdggDcF37mgo",
  "key20": "2RbwQzfwULsXYHxPRmRH5wiAtTYjNgk4KUCCVL6H5G4kMcepN6VW7KxdcvW8K2p97C6vY1Yyhq7yZ1NqXDZJBohP",
  "key21": "9bCHcnN8tFZM4GzPgtfgGddRntU6NFhd3bkmjiyXusKzPzH3iTqgWz7uAAVP9HGqsrXo42pYLyZCLw7HJwadRxQ",
  "key22": "4ikRxrxuQYTC65omLsuoE67fc5YoCRfZoyfMT3XEfRfcahTBWazgKavJG8bPR7A92hdKna96QTXxAyn59QqHKQy9",
  "key23": "faXJdMnCvnmSSzNUvibys6z4X56igyZRTPAUCez7x3tGPCPLrEwwHNjZtSfaQ1kBxfXbC9184em3Uc62j6kTYWH",
  "key24": "5gbZsXh8TkAfSph8KAbRR3Y5ZrrBMvyo6JeLPdSJ7w6Euirat4PJ5PbQuPqNTC4z8j6WvBP7YFiuv2RQU4xcTPvh",
  "key25": "BPAo27StTDFHqsPGS2DWQn4Y9GVgZcvYXdREh9KTTifU7z77LU1DiDD9YSDfdWzNPTu77VSoWJQfocsjMJebCx8",
  "key26": "W8d1CCH2Z6poX6fHVc4aTs3frQoELPXH4tuhm3zBvmZ1VWEsu5TzXR7o1iypjuY4NThnXMXbaBvCUkwoUZhfGuF",
  "key27": "C7QnzRQTpgzgFne4cpioZ6yPzhFddqhSp23NDGSWtavsMoJHDQMEZqyUoQEBCHAy1iMWsfmZu1aQd3PpMkoeKmz",
  "key28": "3RAsvFwofPTsQMFJBjsdTPktALsVmW5HQ6N7RtsC88Nj7Rnh4hHNFtr1AfRSm6APS8n3nydtEwihz47sTGLB7gqr",
  "key29": "4aXN3zjKoum4y1vuUAnEWT2h3gQXiUm5PqpNS3KHjeS99vjsqpmy6t4TyKf253o6oJjjTtQ9vbVuPWH6eVsZomUQ",
  "key30": "x1ZC1bkGmFuPskJeVXEcuLKiJts8rFdXzj6YiK47VvXUpp39Vznku7m48vbs9t78FcQKrxdmF5BXeoTcnjmQcuv",
  "key31": "odDfYmuK8EH1C7Xd9xQH6pSQxLr3zfUYHsspUJB2ooXsx3MqqAkbuyLPZPeBegnUTbP6NQtu8qGEWmJ3XykYSey",
  "key32": "3xDBvjUVtHH7iMDJU9ZxwHXzHhfTunji8VKFEHn6jHHtf4nWyYA8314SCYSpdCgyb3vzkCedgmymQ7gjufm2dHKV",
  "key33": "27rWkUy3WULsfZdnNGcwxg1CpSHLCAYHtcWgkAHyxVG7daTCeMW1brtqDtFonxGtNVUbCiEzFDabbG5sSYeZCfK8"
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
