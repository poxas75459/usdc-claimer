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
    "8NNUwegiDJutSgzpQcpMj7P6YiaYwMxWtiiU6iJufHwavVq59rzp2D1zQuF4X9KM4WrGa8MVhNgcoVMLnWKsdfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eT8fACHkgQHfWNBLUey6PE8mtc6PgHCPzhXsvYegbBooZszCPaZotdzYRdkL2jfjiB3FfVXmpV8De435cAMnesQ",
  "key1": "ZCLihatLeudecKgib4GxZGaVW582fZjrDY68EKpyGFzWuZwAxnrXm86LkBg6onLtsd3nzA1RDPfrEoTii8tPs8F",
  "key2": "3Nzc1NcXfH4jqqDkUFuhRgb3hj5W7PsjHaXLUiHRvBTCmKYMEMAi95wbxcaZkZ7pGRMv6pb5Sz8N8e1CPHJhSqep",
  "key3": "XxuZMoUoN8svM89vhzJHA2xqaqR3RrmZxGVj924CcWCRKxGhrVp4arw1AHyBoGsRerdoGaJvBL96mppH58aHG3Z",
  "key4": "65FfEoUDEJR73N7qeuXUTkuf2NaH6rmnHK8UoCzvgrJ12RGZu5B9KzZ3wS93YuqEQ25GJgHs6oWAhZZfxNBXuBiU",
  "key5": "4yhfuihw2JArR8UFbvEf279HLiHA6vBmDG56Jz7kp5vMmWPiy7VATyLn2hmuPHA9KWwsyU7QxyayVZFj6HRXFb6M",
  "key6": "61HKszT212p61aGVrS9iFFP3rG1gnKTH3CL9ZFwgen8PB6444vtexrcXT4pWUrjwxadr388xoyxan4qGbE2D5QC8",
  "key7": "kD37xs42MJ2kf1dVTM7oBxLgZNAugaBX1GzsSscwHCFNZR7qiBS2Hb7s5tuJ8eRWGk1vySsjCB7qGdRoJZexND7",
  "key8": "5Qs2C8EBweWSCU18gVMJ7pQC4TUxWeiXRFdFwsKhGkhJkD6quiWStmCA1xcFK2HYwmKc416AnEJYcSJ5kdUHkUfb",
  "key9": "2ULo4vFJmScwz2pqFBq2afjoVXkmqs7EHwmouoXneQftFo4TrfRac5uLtwxgiznwtfdxgnS8GMbV8j2KKReHi7ZV",
  "key10": "5qAvgJWouPgnFFb5b2wDJYeVCE61Dr8MqgLi34Zo2ZfM4q2k71JrxLoQz64hSiSEe4JZQfQKy7m4TJ24Q6mxis3H",
  "key11": "rLWDw9sx5cXqUGiSrVuLBxdhBet6X37M7Fgog2Z8oGtN68iE2ZyxYJCXEofTYmkVigwHoNdsYLpmpSLCGQCMyJw",
  "key12": "k8YBwqkQpzUKi6XxogoS5ddjuDji2djSdUbUYkgowkgsKogSVkRbh4h8QxLBYHMW19UmqHhmwQeavuJKhsgrNQg",
  "key13": "wibp9q87P3HgCJNJwP7p93NB9vY7WwD9zAk7NbAZUqLcMrr7ePqTWfeEursy28KiME3w8ofE1b6UG7HYvfXMARW",
  "key14": "4TkEuG99DgVU8ick68D1KmGyE7myQPewzFTYRthsoPbQCp1GwUNuUej546GV2zDstqF1eovHr4apYuAHEf8gktSa",
  "key15": "2WHqtgdPWDniNLpMXLaM3Y8JBffw6PcqdQ4QP8aSNWchy7iBZXLxXsnDP9omkTwYXnDovL5FJZ5Dgdt8uXkzJLJa",
  "key16": "5ybHcqPGzXnF1tWocJptAxARcQiimPc7gCVtAVuAiGefk6vvwuSExno2p4i7SzpLwktJxkatJ4CDkeN7EiqtC7ZT",
  "key17": "2zthgv1xFbyNG4er6fm3mTeeFkd7Upg4STfTqNuTVAGrNsP1wJG5S5Gnj2YVCFp2agJqUsNQx4bj1yJFdhg1pqAg",
  "key18": "fDtPpJDyct8GpD89FSPcKw891vJSVT6TdVb6EbUvjwjj7fZc4pWuqH6HudGewoijJFpPJcitvfgNwyPA3hN7Loe",
  "key19": "24CCNj6dr6cYSL6pVHQnk47DRM5ifB2mKtc1zMfthsm9mWwRhuVUxKmafC3XmLjAdHn2TuYv3SGmSD2jy6Zya78J",
  "key20": "2dnSWrpu41fC4GVNSfrGAtjMcwTo3ircwwvT17NM5PJKnLHCXDAHeS5SnybpUFUg7uEUoTRtWoRGymF3AL6gH25j",
  "key21": "4wL6jbRrVZdn3jL3rLorUSPCVoPuh5q9WPAZxbUTURSzfHV33owQAJddoYLcDk8jG5j4HJXNr7DkVorX7CBgfNdS",
  "key22": "4sh7HKoQp2Ph1NFp3a6UQDQui1jr63G6dkdEkY7LNE5AL2eMyXfGBEVKx4CGhMEUSfRrfJoGuxz667M3M3TofYDf",
  "key23": "2Ct24AVFW4cz25hG28R2pGSU5UWV7kyjDrPqFFZNsFwvFRzzSz8DsRUq1b2AuWgzYQVctNxTwGTkcnhA7W5tNv7A",
  "key24": "5uJ9QkcdNRDxmQwTe1n6XyHpFi62Dh9qSCSQjGJVstNH3FsDtiY87jtLsQNf4mYzuWxjexkJp7sgbtM1skHstGsK",
  "key25": "3u9pQeUz4a4oqubzDzgRVw3rv4ivtwPNkVcTYmL2NgK8tXm7pKpTUpTsQbP2F2U68DyK7tx9RJUofav6s7JZ4Lba",
  "key26": "3iNjv4YxJapHDJNH8E2BuwJUHkAxXpoXJKtVm1LQg1wBHqUGVJ7AdYPF4U6TPYr8c3xrX2EmT2zasygEeTYGwqBo",
  "key27": "4R4gFcq17CLVxveJZT2iYQDiSv8rUz9AkQWJjpyASvCffYvvEbaLYvMrP5zhQuN2tX8Cv9LjFjGPb3UVGZJqTvsY",
  "key28": "5UBcgSsFLw2VfuBfWPZ4mbDm666sXVgAunTMeK8GrNG7JeTSDFU2PXAmeYqW7QNe7iVgLm64c2rgC1Mvcj2vCCYp",
  "key29": "3Cq3Wd7GdjvLHGxnwLYryuK8PHEYpF3axDJwYPxp4U4o14ffupP2X15tbko8mG49FN3iwZoC3sUKKMjfCFRXoPsW",
  "key30": "447QMjR6d1aLHZMJSM31h2xeohT5TThjSzSuDx9pL4LqBMGStULRStBtYNgzyawqsJ6Pq9p8ZhqXCe7JwF12FCaP",
  "key31": "5yAPkb8xRc48Fyu2gijXHErAiFNEAg4rBLYN8tnDTB284WZzB4ZfDdRqFDHSFFy1aTFnhxBS4YKVjUDZgyy29ytu",
  "key32": "332zv4WM39bZwVfs2Bq6CUw7VJPXQMR6pVQvDc7xRtS1ot6jvU645cHE6SUgp6hHzfme86TPZiueQjkJB3gDqF87",
  "key33": "58N36T9dyz5d96dEHRJKsS4Bq5xfz8VSao8obETshgfFv9D1wCHRGGdFTuoGRG5sk6QLW7WkJwV4qgiWjiEePZbf",
  "key34": "3oE1GdTctPi25kkQKX4skJg6CAkT6aPWJArLwHkLV2g3QzbQpRDvFhECBN9HG5ARNLzTp7PyqKTNggUrnjs2xF3W",
  "key35": "2NusJFeBLinwUhgZdzpA6g2poiK7cT9N7LcRaP3rVYHdPbU6UDvvJZL1eeFrVxH6o7gkMGbJ6fV547M9Y96ZPp2V",
  "key36": "65V6Dwcg1tmaBBNHA74bjCK9K9wQvgbKYGMPPvSrzn6xnc4VXE8gkc8oTwXmvs5tN4B8k8iSYPYXvSEgaYJ1bw9a",
  "key37": "mbkhkuY2PHEsJutbK7KQgp2yjdR74L35cWJaKdcGF7EQsCwDwBrCuZDo5NqMmVboHU4PgZ9JHBaiRLc19xBStx7",
  "key38": "2U5e63BX2MZDHni5yeUApgarNGNZeypRAPBo8xnuh3dCEw2Pu82PMEW6trTN6b363jVEn3DfoN48i8p6zgg8Khg8",
  "key39": "M3ZjE21uu2a1G9Pftdc2P49BL2aiUa2Ux5meFg6WbyrWWLcsEgXZAhQQjwd8tx42tQTJqnX3sjcprqfgGty6HKL",
  "key40": "4g6PtMYFaqptC44nAzJGRo2ieVx9Dy6FBkTmDTcVG8Qiuid25Htfx7k4eKsurUu8V8FNjFrtUvFRxhcNhxmuUvNV"
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
