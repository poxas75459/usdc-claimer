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
    "4b3XdMKzvCfambxueYfu46xRa3i1ECxvMyPM8AJhdooNGhs6obEpkgyGDtTns82uWfNPEejXQcHXHDVb4T9pS3fZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33SMZnPeAcC7LAYG1y3GnyNHhgLonayd3CteDKotjBRdDeeq6scYqVTnTDwmZJmmecTZ7FPbEd3T9mD51iXshez3",
  "key1": "2yG5zyvXwLZ5Aizg6C1myVjok1hGLtfxC7Wyra4DE37qdyibyBDWoFG6TTEg3Wv9YYRCqt7W5ZSAu85Xxwo1Xfm6",
  "key2": "5fcHjKws6fP6qnxLn8VM193w1DeAgW9NQzJTXZnMEhEoa5Dmtto5kgmeuWw4pb1BB66kbefc9mxAGe83fmz6uHsY",
  "key3": "TUxvYZPRhQKUUejqiCtV2F5aFPSKJbYVxCWDCrENZuYhi5cpEYTMsAc1b4WnueNWGDiXZr8xyVGAMdsoXimS9VV",
  "key4": "TWwT9uuuVSezUJNNxR4mv48xw4B3XDvLPyW85Nm3TQVYUGimxJTcnDXDT3XCKqWnKnk2VwKDrHcem8HkxVbSybz",
  "key5": "5525ZYzud6mK4p2dhgRMn3AkmWcYyCEmYo5Umzua5WaeaCSi6LddHfbCnUciLMo9tYqeYGYTGEssZS2ADM9fQBR9",
  "key6": "464ukTwjMpticDie9QSqjAWu36DUUvQ8hDwN2JAfkbGiyhGnqsewnZc6W8ej3oqdMq9aUEhthguHdN6GQPNk57EJ",
  "key7": "5qEjyTwf8DJ5B9iQLzmpH85QVjnyGBs3mXn8FCRgrkBrNNCKbPg7F27wpRBjpqD1JTCEYLVSoiE8hh4e2EY9DfiH",
  "key8": "5H5zqk3WdcKaFSGzMJsSnVd7pu3bcSXQ2FR1Jb1LK4bEbeWTy2ewG6uooJNEAfQCGh2MWjUFd19TcnJwcMf21efX",
  "key9": "2VmHQuTBiAx8izdtK6XFWrPQKiidVCCEnXXTyUqucFF2afSTkvQuDbEDotisw4SsynTy1txH5tPSUKeS8gHEmXeQ",
  "key10": "63JwqU15HFWC1cjoxbvNLYTGe62n4pZmPnXFu1didYrB76LJpY4bsoEq2WeNvE2r6pLgahGmAtiKv1os7rYoQL8D",
  "key11": "5GWUzy9TmzbrSMz9rWxRUaHpkkVkoLVd9ngU7SaAxr2ewEjo4GyAHtWFvFGUC7FJrfy9Xs7JQh9ENzW7ECVBRZJB",
  "key12": "5f5rn9jL7ok1JHur6GuLsa9E2JnMa64pzMvM9NqMg9wKVfTMSPGcmnvuG21EfUXfcugeAmCUFobctuWx5Mj1PZkG",
  "key13": "5NDqUeCr96h8PSGNNVVUHncPhNPWGgmYfrUeABpijfiudizJpP8JhpcVeiieosqcikocjK93LidzS1VkadawJXQB",
  "key14": "3oHniQM4wk4m9R1X5689AoSwFoQQyLuz3zrmcLyYnunXiK39doG2THSuQtJpsu95DPA9h1ErVt964dfXTtR4Yc1i",
  "key15": "xiLfp2ewFCm4p8bSSGwL2UQadwzgpY4q4CnDFn48jYgCCHoKGBWrBmrBaKH6pgGgSPGU4YmZ1WxSsQfA7mQDEF7",
  "key16": "Ny7ksjAJiCbZrkRh1ePp8HgfdCVjA7P2r8wBjctgwkhXUEAwwF2VPALqteyf5cN94xAqftSYcWvpXj1GrbYVTMe",
  "key17": "62gQKYrrsggBkueAAHxz5cbjWr4j8pFisTn53D8z3qi3QTK8bKo4DJ5VJaaBnW7WDbUb2eQrtdakT8k89g1Y3ZWz",
  "key18": "5TJDCahUX9L1QjB5ao5zP8237vbBsjJKfR3bWAhD9eXmtjMVgP1txXYi9qDPdWGwj1wncNbbZ34sEKxtDrCzZMis",
  "key19": "4Aaizn7tW5JWEg6rFw26HaioihTdVrifRyTrhfimYMZvToptnhyc6VmNu8sD5MmrBVYu9P2QLuvQqSHtL2FvDdMR",
  "key20": "TVVfhDbLsK1ZvKpzwWEpq22rx3DXzY3w2bajca2xyES2R6mGt7Djq3tXv2HRHwVyYufJdp6tRSfTDaBjVKp2Zs6",
  "key21": "4jCxKUBxRJ7Z85rerqJaa5M14pJpjFjZUqMKAaerPFfMaDrn5qyP4fhripgxS8yhfRcjTgNbr9pjEAWMiFP4XRHt",
  "key22": "4HY9M2GHCxT8BYoS8ijAqRQqCgLuD3K9QNz443bLXb7L1UtvLMXdD867GW8vcWGH1mGFHofRfKVuYDxoEyqr8VhQ",
  "key23": "A643GPJyX191kDVtjECLiAH5uirjaKkVX1Ttg6xYArG1AH4ykkJXC2gYgECicxC32ETxDf2ztm82vkJxrfaAMre",
  "key24": "38czQ8VK8nxRzk2qyAUT7m8S5f5eH64fGNeVf1RF9btHxQw1YXve3N8Z3gXaUAXNcvwvRFMaYYauzAYVMhUgc8Lr",
  "key25": "2tT7HAtkERr6Y2ofKwJbZ5BxgxNGktE3phAeYuqnsaiDRhw5y8e6AsdEzzcD1XxsnwJ7UvLF87C52aiR7fwBDvt1",
  "key26": "3d52HDKoceba3Rt1vTtRMtNUXdThDoRonz1hxpB53Hs1usHH3ezs5PwCd8cfvNbwyvZuCbw3Qg2dcXGwjyagvK9g",
  "key27": "38r2BBy296mEGj9eiMkHnYrnNAjKNxek5GX4tGnVPmHe9pdug8TD7KKUxHxadn5xMTzJkwqut9vpCDD5UNmZDNn",
  "key28": "3HxWEhc2ykf2APHVEoTNcdyfaX869fLLDEAVCKZ5PjdWjhB5ASsBmWF6wUSjwGQjPvznE5xUMcJh7nrMKDt6pFQa",
  "key29": "2NvMYxao5aZDpPk7ZNUVvTJBHcw6Kgn4mMTA3exkmx2L8aMi1M6abyeGDV4UPf2urvwXT8m5uWaVsquhKssrvpzZ",
  "key30": "2WpvBWEQB4sTfyZgtU9uagfDTuQMwoadVLU4maHrmudSECvDbVtUWPCfhacWuQzJDNjwAFXwmGzsbehSAwsA87n",
  "key31": "49Gd1yMt2FiD75ueaVYtFzbWEofa5eLVLtT3z3U98twh4DH6dEhSHwTmpqJ1YoSmHzxhB3kVxdYeCgGpegi2tpkt",
  "key32": "j9owfCYdBSZX8ggwM3MwgkDSqSnT9yE9MGns7TFTE2eRrgtLzvETLGNBxUwYoB2s3Ut3G5snvjNfjcBfR2xss5T",
  "key33": "3tBcMGjj1mLjwENZsxWyAEC9eTubVUyyYdPPjXAFmYbsih3o23o2YaBdswBEpYkKrNRTWydXBtEnf7CgiuCkHeek",
  "key34": "4HHv1rmZJoKCCMwvaNjm1niW9YJxXvAiMT7hu7sdGRmKBUH4EiHgbX7imYsZTcuafCgdZ1oyvqTkvW9UdoF1jnnB",
  "key35": "5fPZCs5vc7dRczcwHnbG1qGWR1RZnJndYAH6YVYfKx66HqVNGTbW37rke35kh6EoSS8N4pyPnbNrpeTDXnSDPTuM",
  "key36": "4YcV7cFR5H2tgFuAxoqRD4bC5iCUKTN5KguDhWLjZxHfgSezxJUadFfzNbYQJSspJ8TmMS57hLsYWypTJmuNDhXs",
  "key37": "2DhREuGAUYdhzsui26gFkUNMieP1A6coQHikToAhsFVTkHhmaPhryVj3nPHYPAuLGnFhjeuzUv5UWFxQDHp6qDyz",
  "key38": "4WLrb2YTXNADLYHthc3Aw56Wt3dk7JF5DAUasojk42axGzd9xHVAZybux75LPVevAmWR4CJbb6vDmEA8df4dZAYu",
  "key39": "2nXMV5W54TBf6UBmnJU8Q5h7y76SUikXWxxRdxqF1mMAuCKXCGaBoKALtBVNZB2oWy5ubem47TRkPCHZgcaRmeC3",
  "key40": "2R3TgrNyY5cKtij9iDqKzZDrNY8tYSam1CrTQK3EgrSL5G8WDDonaQh6mH8g9QiTqTBpfpBy3ypheWrymL9Q5JNr",
  "key41": "5zJ5sLFV1aP71Fm6iGxH84zLvzazXfYfhQMYUBdFF12pZnXHk8WPHx18oihgozyWVdJDCpjzcefsZyC6cBE9zfKt"
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
