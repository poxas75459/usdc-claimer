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
    "2QLcpchdYSMhziQZHvovxV7awpFvnC2ydk6iAn6VwLUPECM9ARN2uaa3siVRLQAXj5ui4xbxPCN2MV3Ai4tn6Fvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jkYhpfHTeWPoisfpDYwUMSaocEVUSCnhcidNnw77t6GYrFerejfLDUgXiE848yUa51HQNdeWHePjxf6Sj8zFZHA",
  "key1": "4Nz329FJ4xPFJ4He5wnymu6uVmA4P4ATJjFZugUaN2eEwxypH7wBPkCxBnuaiCLt3776meXjUJu1jVgEqpHCTP4s",
  "key2": "5VAUa3hVDsY9EZ858ZtcJ3H1sznhMSkk8msM3NAQuWsyaRKPhXZja6zLDmJR8s3gHrABpKNTk6q4m7KAhmB7f6qd",
  "key3": "5M6t6RbsJTabfn61J2CSqi3xbxdZxweBt2QeRYQHna5AmzbzXkdnXSujxVsgUQBT4efTHn9XFrE6dG4QYSB8wc9Z",
  "key4": "3UzGWS8ymE4yjhjYvUpgYL92vTpz5ceaSGGyEsqbS4z3waZCVShfoi9HwrPoNvBn5omnC3FC3qsMYh2gMY8FPoTw",
  "key5": "54JHHWXWssv3TcQVZpifKrradG47F84Mm7WrA1Fs8xnYYgmaPcZ6WCXSxUGN1tXoPoXPLpX3k6z9yjejq5hdswdu",
  "key6": "4CXe1ioNBYwPSi28khpmx9UqcX9epRd7xcyxLYA9ASW687bfjFPFtqEbNwHYu4yXjMmwDP2KKM9K1QtBoK5sRb9m",
  "key7": "4PCfN27cUL1mLx5yQ6WJg5qc3WXYbupsqNdqqX5BfcxgtDNNEnJxokfUxsFE28f1Zq8W6WtKopT9hsfFy1yf5Mnj",
  "key8": "3dbfYzb4UrPSCMv3QwMT5tkVyAUxPfXZECopQiFzUVy2RhoWAkX3YihUefJ1zgvbZT9zup1U4EhimXMhW29FuohX",
  "key9": "2kiRfZHoGTb4MiXfhRAmbG3WHs4w77NNF1skZSSu4TNkMd1UfvYJ3MfExoExscSefcjgyPMVGzqDdS8iousCerhS",
  "key10": "32o6AyXdqxTFbQ1B7LhXn4EUDbPYVYYCw9HtfY16YHrYPsBUS6F74QCqyyun87JPzM1tfSJMMCNorkNYsnx5y9Ah",
  "key11": "4NNewg4z2gVteCva6K84HogG1R4SraNPJvdUtUbc1CGVSZTJSsoxn3yUXNfoHwbUyUeQzeCCSs1DNAS2yVnit8gn",
  "key12": "2wBaXX3qpbecG3vmmzwz6NaoTFJjJJZuhAnN8g9oyiqME8LaWVF33oF1Rb6ratGrtesjxehXroNmPKk6mcsWvKC5",
  "key13": "3sTH7TUWUM9JrnWzgH5fXuvSnp68e3sWdWNW5d1nhQsw3uiiqNY1ETY1KryS9m9iTvVYPXGUuWytziKNhpFys2uz",
  "key14": "3oQ7Q4DCetMUey8LuiJ1Vk2uhE7zTEX4LUaLGTBbmJEjsLBrSXuccTYZ51bwG6yQdBVVJKWW5cn19qQTRVAukmzq",
  "key15": "2ZA8pQQqG95aYBaE3MwgMURtCVpuFFjjBGCwsjwioSt5umX3PEkcJ88jiAFWETuJ7kULpQPbpqGaQW9y34vjDXF1",
  "key16": "4fukL3y2pbNzY2BuuzNkULHGtVdq8jnS3je82RcSn3EoTaPvGdPipZ4yHUyBauhPb6oSBcraVY9FJ5YDJ2wdzomx",
  "key17": "981oey4h2dHoRbDdFyNcb7r2JFzT3qfVdnP7U6eH5j8n4kNZYLr2Thdc4mhH1PD2UWhBqWacmF745Y31FTkbA26",
  "key18": "21ZSyVe5gnNGj9NccYi5VojtoGgoQsgSppubPaBYw6WeGTFcFBWQu7FgazMi3tcvaGNdVtuyyRxojTYwufWzFBgL",
  "key19": "2mZ2j5BiqKaVeKVs4u4ccp1espU1Er8mYbxNfXP8u7tbyUA5mjDE5nnWB5UHMoR31ED3g9XQfrg2SuuWUPQSN4Du",
  "key20": "3fSVbRiEnaaMhU6zqWeVvncXpjPWe88a2hDnrfLGoJksd6hYYYMXVV2M3j653ksC6V1vYm4u7pPoTWr3rpzhQn6H",
  "key21": "cioCN8EfvJFmDRSX776r9YtTfjKmZWtQZFr2X4WmS6Lt6RzyeHZW7bvEt752ZGvK9edq5fRCBswnfc3FTjGUzgD",
  "key22": "5RjdxcENg2m2ppmz3KfoLvN7pbEDo1eG9wHqQynA7kJ42tH3N33x83Hxf9mjNcHonXa3MzgZKAQokHi8cxuUd84E",
  "key23": "4ssT4BWgCEfjbS34UfzzMS7592C8XA5XcwTwz2mWRTQ62oMAtN2zhyChyQtoaLzn5wjidaSiDPsWRTaZZLiwUHeb",
  "key24": "5hGc1cxT1uBHLgYsFdg64iAcm1N6mcPfS651eSUAM9vSfYkmHiM6TJgWoTw7ZoHFVDcfdQ8effQgngh3hkZ2PBmZ",
  "key25": "5ByTgWxgceJvLCQUJwiDA9A2wrYA5EXQhLX9Z9JL9z5k1YXFWRaa4w8NQ5bXaufaV251fDGX3skgP9aYj3AbV3qs",
  "key26": "bU1aXVHKD5tWGAfMrSW3fF9p1WcauwH18hMUuvCjdmhFpQQ6y78w2LtMbR56rsJjTJ6WBucfGoUDyYzLnbJ2WJx",
  "key27": "3bBxtjMpMsMmQiME2kdqZSsW66oEjNM7db6znCf2tUQeAyKpy8WbTzZCu5BW7dP1VGfZyxA65vWYskttkLLqydH4",
  "key28": "DzgKzDbaivWvM8rHyQR3MBFDtk5LTwHfDcuzGhdgf3LXxRUPPdCAQH5NQPL4k1gCzY5S2SFnMKJDSySSCJufCWN",
  "key29": "45M7STHj15nS6feUkMz67r9LTWGRZZiqyyjwtXTGr4GyaHuc5mjU86Ua7FgoQi745HVTbyRQ1Mi4LwdRPo32t73A",
  "key30": "3mCw3R9rzqgxt3cBLXCDzmSNm5nhDtc8rF7cDBmre5V9UFV5NsN84snA5xACwfFuJpQJMMm4b59iBSAkAy4dACTb",
  "key31": "58osfBg6KqyjwYzXEQw4qiicekxcWUHPjaSP6jYED6wxhaniyX4XZ14g4EFuszojz1f1ZSgAQ8954v6BiJrQku4",
  "key32": "2fyeTu94jcCQyL3QM44iKNqi4xUAEvSpoJpJ21juqgyrjAgMtKtcr92zNfrHPbiZB2EhmTTUXJprc5aEhrmTxS16",
  "key33": "3wGxYcqaitzUAsVs7eiay4efiCFai1jbRuoPu3jwwammhxFQMPczZABEwMFYdEqhn6iPr6SDAB6TgMMAgUJVmexF",
  "key34": "3gAMcg4eNQmoRthmLG8WFZoWgj38kveS9b7MsWu25G8ESgh6T2hQE16J7BSGvwD6GvXjW3FMnQ7C3TRX7toFENJS",
  "key35": "2dijZAeq9dEpjMcTDVKEN5W198WwzgJ89EnKvHShFszdZLZs8pzCJbQSDBZwPY1zzvoD6jD8MtZbt6qdw9hR9Fsy",
  "key36": "3mXCEWWB7h6iRK6b1MvC7F7dsLZg7Wt2Ks2kNCRTjou6rDosSaRmSb5YXgDxsdgoCPheUsS6mr4ZL4cKmysiJZp3",
  "key37": "4RhswqzpwMeyT6gWNsLumni7G66N4raTsSgj8vPZEdAov1SdhZsaAYDwoLiLjzUZFx1x7bZfHFtaDX575nGiHMxn",
  "key38": "WLxjAT6u3PBXZVXRqPPMqiJkXeDtCe87xGbF51wVMfyhi5fLwaiZpwrtEvNPoJEJsmhfS6tyGTPAVtR3HSb5ifA",
  "key39": "297DFx1rL7SEA8Sv39a6CTwK45yQAsSMDwecWS2siNcpzq5Z15fVfTn2X5Qge1SAqYFf9NLSv3ZJJSkWFtL4zqC4",
  "key40": "ek8DGKo9QFJdBXq9wJriEVVcbxP7ypMbFvwxiEEKziKxaUNPmCnkFqsUkWfW6ZKpcS212AARUTL5GVi6WiKdzt5",
  "key41": "nHYmpPR3RTq5QZEsHqbj7tQsmYeYTS14kuFppqThoMvVp4t8FuosryY7eDx5AcPFcYENBToq29RZKjyn6FBVhCy",
  "key42": "Ui4cFz2Yh2AGSJw6nYphUmhfgCSJmgTaw45kUNjKrJsaNkAtsicGjgbNnx3hsHeo4R7iQzSQZjhBeVB6GEYm6yt",
  "key43": "2WmZgSG8ZLSzkimJHs69amoZMT4rdqeS1c9MWs2ptpfz8NKyAf82RhqCFmWw5jrvXL93JNAxkSBB3SKunPyxfsDj",
  "key44": "3hr2uRA69BbtQ5wdUDgbm4JCctxCmZQKnz4U5tqR63YbakJAcp8sXADUZRW7netiC75PUNsTqs92fkfTG3xNvSRq",
  "key45": "2tvP4jTMy76DPygg1YSgGNBEpWnA9XW31R454mxEDmm1asE2CdSte6TuTJtH3YSi9YGU6xTcGhnYTdETjGnX3imF"
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
