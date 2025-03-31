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
    "WfGtA5fNMJGz3g9hnjtM6EUMYffFoU23yx6k76KnKSBoNNMQbWuvfU6NxvrXU65Mu3Xtv4XMCU2ybV2h3GrJAid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mRJxcvT7spbXrw4tcYZpXwf6EQGUjVeihvwzmV5oWPApdayhQwjYQqdfcaoYGRoTPfYGRBX5pa7YMJgVzneTrWb",
  "key1": "2hEN6CJ9ybtWjLMADHNXqYMsnZ5rTz1pcWEifGm3Vb3UCwt1tYPE5NMgR9Y9yrfCZ4zyXKCoR7SwL8sY27haZAhh",
  "key2": "5j2aoNnX2DRD74QETHbj4nG8DHp2V9BEY1apKeSEz1BzW4FpsMPEWjdzepni7uLUDcePgBbtvurirPuvHAnwGC8Y",
  "key3": "4YN1oKqaisyEu2f5GAAmCwcYnQq7ttvjEQFoU7L8Wr6mVkQLfMAMAzTmrWAvojdLPxGyzBKMcVqM9dw962i8Rxnv",
  "key4": "3BCpTfkia1APujc9cBqUYgHQAGf1hXSWxCzAE1skBpFqG4PZhyCjUz25mx2qaSeQCd4NNPQqaUsJAMsPjrM8XvBp",
  "key5": "3RXq7G6AVYVhajKvuY9jSmLYT7uxRShm6C2ZUF19ebBBGqvZ2DsFGQcRh3biX6uCjjgPi1i8omYw6QEd3satxE8f",
  "key6": "3tgXx9ecYZwd1h6kxrcNzwBFJdjzSuXCjshDji9ranFysE4YG14Qoxo7FCsPfr62kmHqhEJMwsBCxhwQkprmsezz",
  "key7": "5UvZjCqfJrx2XGMdM2UMuGs8abt6Vqx9BbtbnBWMvCFfBbHfP35VLPTkNwHtNtYvRp7MXo8cbwVrt99pPb6yYMev",
  "key8": "4qF6UG6Fxcb9w6TC6MwimcMTp24ytFeCQoBEiky8RqkCfve3CPouXnmQbg5ZK58dSWiBMm4D3y735ybphqQRkJ1H",
  "key9": "1rY55Ygkjv1RPKCzkq4SzwRM4yEABb9bk5Fp9f3Rc1qsYJL7vnhbdcmFPV1Vq2uQBJxuenSix5ssyGkBXsdzsWi",
  "key10": "2gCsrGA5yVhB9nQfCWvdMRqavLkDbzzbvCrGh8FVn2yStRoAnsTxPV6DTPSFH3zwHXcF2zmvMGmSHmqwc11Wk9mE",
  "key11": "QANtBQ9cSangXmgLFR3LwZJw2LUE5cT19KX4uMAbrg3bK5GJhZMESUEip774PWyWh9tUfDgnhSkK4GBXiJTkunm",
  "key12": "R5TF5FnhJ73HZuQBFBtCRqzfvJMv92sBEcT7BVdsFQwgLXhDfeNajBcDpXqGcsFdgcMEp4x7GimYGtrqps4RCCY",
  "key13": "29WE7AUQDWVz6n3yc9fSQ1nDZBJ1pPihd8r5eWJ87gJy5hjPfHwiXZwQre1BnzgjCDUEss2R6nJBZyNqA9KTSZHp",
  "key14": "59UxiARfko4ZFq22GmbgSMsffkyHxBuJtUusRPXzFwgEZov8tuqu6ANJqrd7z9wW1P5ibqpPfbr3qLJnpHU7br5h",
  "key15": "4UJ7bnXLQg1nEps1mwFQB4eAihqPzPHbSyC6DCjqZBhX5VjdagFMyxn2e3hrEm222iLVv6zdAw8DTLTALB2Gwh1S",
  "key16": "3VvKTMqs9MQzGaXGJiZTBw9oxWqKzXBhD5ZFj3ToeVsUuecwMFziSCfxV6fWmiVkuZe5wMxdrzh8jtaDTjpoxNsW",
  "key17": "2wx9dZWKdwxU4vAa3Z17NZwsv8iH8hqTDFPyTij3bD7MoVWup83KBxsgH6hJ7h3GoHi6fo5t7Jeo3NGzTnrxNXAL",
  "key18": "u76VFbaQoi7AQYWAZAzStPsKqYaEHGrXRadbS3tTzDhayCT7dju8uPLj2UBDMJddQoxEgdWDpsRfgC9fYSVZDfE",
  "key19": "2CWXWm6vMFnWYtknhivHCW9LRNxWHk2t6vynSJF3TeyBTNPisi5ESefxdTJMy3BiSqw4EKGMx3xvAa8RBqEuVGab",
  "key20": "61vAdvcAo8X4QvSfgnhAaEt6zAYxELbnbUxm1zFobVBhiG7Gbq9UNAP26v85wXjUpcDaxySiGPuJn2ifGpr8NvLt",
  "key21": "zrs7TVsYSuB2pUMAswAZQueN73YNbVyi8m6vDJugxQdBMeGiZyLSXYoKFvwYog1qQR8bSSBDmEsgzp1FChpGkD8",
  "key22": "SyM6v42rkG2snQ7q2STuPunX2zqMEFerKVqHs7nHqnSRP2X4z7vfis4JUUoXjkE6Xm62QLVASvEvSuKGw9eypwk",
  "key23": "SH331EbT5qKcDRfhcTmCWS8n5jtuL2gwZhdZkX3m71yx6LGiL6HvAgjGCSSZzZJ3aQmEEykLr7qD8vQbexqsHhr",
  "key24": "3sestw8grbGabzXRDhC22xasPvnBBrcYAAwK5HWMNVSbnSkiNV31eZd2EgTtq71GSUjE8AVhRucuW1spCUM1ahuw",
  "key25": "55DiKosazsmT9PbuoWoWDv2nSfhHa5jYbqunyGZN6MPn1REZYJ6hVxKkpY3mB9f2aaaZvLMr2zCNgiHeWfefCmBh",
  "key26": "3hwg8cTGziTKoynzx4ZqW8hmKGiQV3YVQDXtcnMT3rV1Fp1ogWkYvcjfgqEGhpKhBK7bVR2GkhWYAXwgvtRPn886",
  "key27": "3Si1y1j4qpgdmGxqXHHgqN34PVPfegbZFVTHJUeGgeRNpgwvveCzjsZXXJHJBSvBTPSeGfQzjoR2kEKGG9JeS8Zo",
  "key28": "4Fyy5ThB1AMdjmvQa6LWh1nvvs3VCfsqEYHS1HJopGUtu8WfccAyTvTPxfC2egjqEpJhKEMWJWhze2VyNLWnmnuc",
  "key29": "2c1dFbXeysRxLKuxn79E5g4JcoWBqyX3ZBaL7tnYePNjoFEDDdtpeLUUpHVYcaMFBfr7SjVuVDtp3EEe6iK1Vq9m",
  "key30": "41mWQoxRB75zG8cND8LnspqSNM7qckYevTBMHb8npyxfy9JwKWH9CtDuhvL8RQjf64x2cfPAwFyVKCusSnr83B2g",
  "key31": "Vpzi9n8JAq8s7peHThhbY5ER9Jiubb2r5fkqUFQUddiDZ1pec3wZboWXWsbpsEbhNCbWYFJTux9Epu9iWwYAvqX",
  "key32": "2aE1SHwSVfcvVZHyo9HBJtr4oeLojMXmDKAXDpHLcvQzWbabJ4Hx5ESobtkamrEKX3KMrmcKx1EfuKmQJKW4CHvK",
  "key33": "5fiF3y4AGbrD7sPeQwMRsVpzF7AQQLGKtq1SiJ7ypw1Ca3D2X3rhoa8rDFUkwKHFMVPLx1XbfXJaVZ47bZYN8y44",
  "key34": "3DzmWB59JgHrD9Nn7BM8WhYaS57GoKRoedTZbZpjqrxw2DKPYbwui6PZkQYauDpEQ5w8TrSeXpkavBBqnNfDrTr4",
  "key35": "4fsvdGMohbVSZUJVBYTd2KMrXhrLXH1jm9TjBDGb9h31AWevwTwmyCAxbHPEJkaYaGH4b3evQFayh73a2jbmKpGa",
  "key36": "5tGXDi1XARJS2gq181LCRa7dUCzZ9Xqz1G7zY4vWt2YrTWMP4MjjcmyuizZNHqmUFWCt4fzkfrTwH1uYk3pWforo",
  "key37": "2Sko8LmRKCrmMp6razZo83ffCwdJ3YSend4fkSB8JiEUo3qNX3eLUqpbgCydq6t4cD6sZ1v7JmiSQwcMP1cYtTXu",
  "key38": "5HF3kP5iUSRqT5pxVsiDs3DviVnBUYEhzErkKe9QbGqxERBGj2tsaKqKQVFNUBdEdH9KvTQxEic2CRRiGQDF3Vfg",
  "key39": "64nyANsCygVzKvkK9RMSCHLp7zwfrKXkFXCyqHB1JSR9bcC9iv2hERvRCANGpepZv9Bv5F16KfS24ptdphJuZKpF",
  "key40": "2WJaS34n9cqpCwepn9DBLXW8c7U3LHDqspU5mHr6Exh7SgTNCQN2RHNox2i5Mi5ZqjMNP9qp8d8R2aTSZz8T7bVo",
  "key41": "5shTdeQVpeo9WWqiXXQgNManru9epoC94o6AvcyriX9kNT7sJxAdyCXGW45zKfEexjBaLxKtzsXkFbzzj6ZtLoR6",
  "key42": "FPLkEPFYDNij2vSy2EESt25wT5CLCKEfTcdPxEfkcB8tg4nMUy8tFLZ8t8F3AzarvDg8epMLCJyKkz3Xrok83cJ",
  "key43": "8SHABVV5PskEGt8CT6wGxtu9D4rmVDCdYsBTRLy7uG7nqRQppdTMMCkvumRpgkZAMXbAE9wRj3Qe6kQyaanMYR6"
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
