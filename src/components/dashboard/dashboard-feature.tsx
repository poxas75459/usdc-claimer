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
    "2qWxsdYWz9LJoRFDSutf6S1cN77bSWf1GQqyefMsFbsfTkdE5f1sr7iJzzftHdGRenFgzXFbqiftus6oyPRY7YGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xiYnQquBqwfW3Y2xM5BnyC16FF5z9MpubesdYPNLhNz1PFbdULeEHkVNguCnHMSCANVtgv8nF3uEZ1inWrQqNfH",
  "key1": "5KTnSLP7tTVZcVKvMgFRkc871eEfccs6i9HEcBCveP8xDYU5yZTknev4jiSapx1eDXfHtqaa5yd1o1Nn6Cn7RHd",
  "key2": "EKkgVBWYL8sEpbJJzCVZw84fTwyXGtLoJRWjdpAP8QokUVMTfXQ2fSUmgMSk56DdT6o1Z1pfuLUvmDLrpFaSxJv",
  "key3": "793ECV4dKd82wueZ8qRsbyL36v51RWhbycGLUfzhG1mcQrCHHonFXE2cKLNRD3d42Hnyae4jP3nQQsVbhLoQXr7",
  "key4": "3UHHrjXEy1VyT3XgLEwPJt17eEEhMngycgvSnBs5Dw5NVYNa78cK61cKoHbTe1RHBGTAbW71eJGSvCdvtyRxJVSC",
  "key5": "3VFeWJ1jux1EGB8KKSN8UUTraSvuhghJ72dS22yCzg4SzrsSX6L8yEsKqV1fHNhBMmdHSCT3d6DbhyxLHxZCfVPR",
  "key6": "D1FJpfMcv9eXPhBsTeCsHgvjCgb4KLL7MzUzwrYJDjttv8JAoJA6QRWfgKZE256nznqUj8ceFBPiKvwcwrchbQc",
  "key7": "4d4yEvcMuaHFCrW392Qv2zDeP7aSWhQ36QmtMBn3GwCCZQSXNmHFkwqD2EGgYKZp3CGtHFEfQdJ5fbFnT4tGr8z2",
  "key8": "5nS4drc6BFeT99hzMbJ9HcqLSX9eW4J5K5qfoSrSeV2FK4gvQmrvAa3cnqDWCB9Y5ofBVXS5kjVcu2YiP828ewfX",
  "key9": "33QqrWvaA51r8LLammPAJwi8LMBkWw9HZfpWrKRPWeiDp7fid1EwPHrbCo64DmRnr1XfNNDrcCGGvqfRG4PX7CcE",
  "key10": "3L586BNKE4iTrx3CSrdETMUARWgdQPQH1ng92BwGM5J2XYUYxjbTyUSpCSBzm2AG82KbvY8f8wyaoicixr4eSHS3",
  "key11": "2SsoCaMCrK4dpRxm4qPbhhcFz1yd738sUrBkCeG15z8cjHUSpGhG1C6cTZEDQ7yeaoxam6oBMJN2TTX6ZKmFLKDg",
  "key12": "3xnfzSCceZvCZuinBiqzfRJVcceVo5ht4wZshzjtuoY81UsPbf6NJMkJAzbJRvmwti3kJJPACtHhJB7AYpS58Pdb",
  "key13": "3Rah4jr9oxJXJszQ74Q37wfJeq7qrwppKKGP9e2xFSacLP5YDY2BGu5CZBECHWvneEUyymXSzYq3eC7eAnbxEYkc",
  "key14": "2tAFzA1WYbMqZx2Tyw6QWJRgqdYg97VthfAVbazFDhFcFn6xgzjfEHKkLCJt4PuxiP4kyeL7qLg49piQq2xt9Kup",
  "key15": "nHG71deVEiwUUMbRues7diot5SuSooEUYWUcj5LXJ9wFiHPBfmzxwF6RN8ZzRnxZHJaGgwx5mLYbwuQMzioxHVc",
  "key16": "4KCihUME7MGuYdxz63yy2iWBbpGTGwqPdAXKNf5cHkRvbEtDKv3Gk2dGPKzJuMPraQZQBrGyNWqY6ydhzDDMXCEF",
  "key17": "hiRtvDnFvWMbbrEU9ykVCggCcWGoW7C62eofEpbeakFkMdRnhhSGmMcNoPYRsz4SHZdXVxQE4GhC7RdyfDQC7AQ",
  "key18": "5YZpEMCL9asKVgNX9EunBquKnLbxitZ4zVPtHSPaUaMbveUP6Ltj1WEzXqbwL9Y5nut3FWhbmZAfduETBjeZUdAq",
  "key19": "JMbWSdKH6gk2Z2Gr6cda79MFXjr6ryF7hqxC9Zi6JExtBvWL6Hi4kVSCKQeGFJAe4dyk39qs2vZpn6S4oitwoBv",
  "key20": "3utJP5PniiEJMqS2ZmDF5zytXccL8Bq9B7PX2Y5yihSQCR5iPP4SDASUN6tofmXXtvNTGcrbebrzFiSxu6LL1XuD",
  "key21": "3t78gVf4XnBj1ipbaWctM95zS7uYCh1Xxx6ZT5As1SKm68AnDP8irLvv3gK5YxwXU6LEV8RERyNo1H1gF1vE5k8L",
  "key22": "3vT5w28CuQTHdFrasfXuG9CZaE1tP4Yh78GDYUViYMDiiSU3jMBDzvLNmV4d7sWG8Vjdf2kq8kakABn1vzFUSyAe",
  "key23": "5qeEQzWUXaqEzn9eSx2rVvn7rAxdHH7kZEphMCnAUVdLQpPaAD7trc5CdCbS4Jy2tBX8BDimiJzPkSzSodspFADc",
  "key24": "5dShRuSeSGEKMT8x8QKBMHko3DNeM3NzZnWEkxYpJ75T6vQV3RTQgmVwTf4pNNijBddsdxePYmKJqCTbQhLufFFF",
  "key25": "3WXCfC6iVf5dnKRyuSuKCjYr66GejrsamqGVEWb5zKxWLBQRLFg8jdfipgU8Lz3qwirapcKMWamgRSHWu8Lrfqkc",
  "key26": "N2sDJ6XDCDuBq1cbH9kmsiGmXKexUBk4YWk8tsQrb1GJrSEccT4hCuRQJiRmtqkq4uDzFnAHBpwTMDx3SSHeaA3",
  "key27": "4bSe5MienVZY2xJJVd871BA2qU1QupMkuRF4hPXR1YeEhPk2bAeb373EkxC2cDXJzA39rMiE5K65YWN7rqFF3nrR",
  "key28": "3waxK3JXvqPmQ5StkxMSiiVJFQpYwcSP2koYJKEnpmJNwstWCEMPjEFSE2icYGSbxuVeRzm1hidMcrfif4n5KfWW",
  "key29": "BzcLQ2sE49kiyg9FTrp4nGKjwGBYN6KLP52NpXiugzYWkqfeXcfFnTBpoyqhHDBffxhxPT95PGjQ4Nt9pGzLWa8",
  "key30": "5qxPKDjB8o4atniPYWMJzFYRbJbLMwBauLTKHRaiypw22Q8nwMSZu1zcucGyyLsvGKzK1T1RqdPkt979ZrmUJago",
  "key31": "4BUb99ALvXZP22hXTynMtLWwZmGkEaMurZcpbqgCb7SaMx41uULfgi5TbkbQCMbkrL4mYQ7Kn17gsqywNFnuMzaP",
  "key32": "5KkqkUWjyBAU1pH1hkbKjHPnPKd2oxpNHNWyfrH97debc854gMvYBXt7jmLXvSN9bF3xS2bEwXTXb3LDTmsbtyRH",
  "key33": "3FrjKrsviAcGZ5QX3A91Z1bbvayVTNFR227tJsH8av3ZdDVpp1eYdfhqLCpC34Bq4cbiDB2vCPTitxepTYUMeTax",
  "key34": "3rqwEZQL2TfnhhfNDuquM6f6P8jB8VWXHJpXVa2fnPtGUmagPobMAXti6cSuVpRdcn7WB3rcQchL2WNyi6zTG5Bu",
  "key35": "3jYJVgEW3gpU8nKkBUSMirFM4pGc61WTtozCxmXfPZNJrdedHPZ9sz4TdCBhUunF7sCtxXqa74614DL25iTYXDko",
  "key36": "3WD48mhkNHFooNw7xeyYiNaebGMdzAaaHo9dhdVsd9muaDbYWcQJV2MQZMNFooFNwnXApNSpECTb65XV3M7ChkLS",
  "key37": "2CNKC6jvA1H6g8D8WW3yRiHx5QP7q4eBtxrYu4aPz5T2GAJs9iFT4oCrCVD7WAjfpGYH46SzWNxrov4arEmHNSFN",
  "key38": "4Mp7uTmgXzojmsmYs7mB1aPuCZtQGN7wCESRJVLvJRa8cHcKGz26jE1ucQYwWDDps9ia5kNT9uygkniL1a9qooL6",
  "key39": "zSfTwhWS5gFdmn8UcRbMRLYUREXPNWCGSZfeTy1s5iXXkUw48iPr6acqhzAfJGy5WHEatHjJng1WG8RyaCuGKgr",
  "key40": "WUknxs4Rcs5hfG3dm1YtiFKHU9BrD3gsKDHZSXYe2ymgXVVKHE5MXtYr76cL5nKjudWq7pxWvbjaVVEzYT8YpGA",
  "key41": "51zZtpiBbnAHhX4uTGzMkLazpqcC2QKT2zruH9agAAKYdYj3vSqrum3dyPS6kUyUNXeBzBfGLB8V2iB3QHetFg5Z",
  "key42": "57EfhwZKuufFezTV2Fe21TgroweyYpVvQqMr8xxC4fATTKksfHi1q4NHwfujKfnNF7PQZjQKPAQWZmt7zJEmS9br",
  "key43": "3qKYBvThUuYdvEv4GsEbrpY4Gg86fjod5W8jy6EbqxTsq9tWrNU9WK9SuBs9ZthXAokfCci4WvELgtFxHnwFggMx",
  "key44": "5ApcjpQcs3DCmPMaitF5xj12UkDBaeJoB9Qx4ZT2Re6UEcPeEiR3YrCnGhoa3nXq3V6xd7aAPCSir8U1jgAfEyg3"
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
