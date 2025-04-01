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
    "5864QxjQ3aNcojm8n9qPK2HJHFws6Pb58pP9S74tkvFgHMszvU8ferjwUdHR3XGEStv2K6ihxLH8QC5dTVAj3v4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wPN7VCNG5GWx6tWhp7BYzdFdhu14SH7e6bArbyMw7bTurw4KHLjb5V6w5Dz9Nh6Wtu13vo71MdgyNouL8HuckSB",
  "key1": "59UGvuXtLx9tPHw7Ta17rhgQdE9N5rA2vfR4Sunex4NPfrYdeo9n4CQ8nE7ShZeipshvthT1pv3rbxVVo6YAedVE",
  "key2": "2tp8PazsLWiYQqneaNfbQsB2aHc1BKqu9ZRneWD3dHU41FuNX3nGp7PVghFXzifhuU8LmtEm7DSwgDG6krWxqLtc",
  "key3": "2UWTXom8b7ey2q66VNtCQ1z4eaCTgt3YNMuF8nEJpvZCFReAaxVsg6hR4LJYH2WF2uKUB7tjcKFnv4LCiiJ2h9z",
  "key4": "5a1GRpmB9robBU9MRqcrCc9RFHhKE9H9Q2s8sHY6hv5UPQ1KQMZhRGTCoioufxkKA8zyzkEhomDGMoEWpMCrLHT",
  "key5": "qe5p32VngrMT6e2HQW4ugU7RqzucFg3j8tTksYVaQsduyTGQgZr3qjrKb7rGB4MCTvFVHpaZMG5z62gG5YsTdey",
  "key6": "oYC7g21MHMPGbQG4YofHtGK4aT3eKaJ1EPk1jMQQvjps6FYJ32zuvGypxjgpLtReqgZufKWCc2AcKgX5sGSeGCd",
  "key7": "4BD1ykkXBm9Q4kfbvXkQD1UV7GDEFUsfXRSAhmoTDcuY1wUwiH7TaeBhwfvsFEZzh1mEdHYvGoRi5sdHPzQzWEmJ",
  "key8": "5jUr9REriFZ4Pwyy6NXowebXB3RgAj9JLhzjdJ6BE8eeQBMvwSSR1unYtvqF79DQ22BW3FggeDDg2cnsfwFYD2Mp",
  "key9": "5kUNJB4q3jxmRfs6CVjzzRpFRBNq5nX2XGTWjY1C5RKd1NHBNr5oCZyuLau3UoFwU1FHHoMYjCY2cKiD7oz3nu6B",
  "key10": "4L2aUGo2HHrMdeMWkxDDwSzJQZYTend8EtXAAafGy47bsFgGcweewH8gpeXxBaJX5gEtrw67oo6BPXNo3UZdCmuX",
  "key11": "PdzDMqRx9Qq3tdxq1CXmcCPcia4qTBF9ciy9ZNP1TdRixW4Ebuup19Sr8dPqWcTiucFhfnBp1pyvJm5PGZ9rVBC",
  "key12": "2a7czNwGGHSFeHK8AahkGtyi9j3FVe24fqfYBr7V1Xhu6U3Utpb4r1DfCmpL463ontcJHmHwKKhhMkmLB7Tp9SWe",
  "key13": "4NTB6g2Fa7XZGsLNWcfkGBkjYZTzFPxqqdDzKKKqmqFEfexJ7mQY8mvsnaPDz2HMvKFdx1AkvN1ytpTT2B9PEWas",
  "key14": "4qtiU6pTyC1ZQkUXwzjeR9WSRPWsRu6MtZ4Dv4hDxSmddzLhFLgYX3n6Cn6XSPwx1ZBN3Z6xwR13WswqC2Skg186",
  "key15": "2bNWNkHs6EiiWbsCWt89JFDHSm9uViVrU255p4effTxVgRu1t6TUS4zVH2rgNYHeZNgkJcK8PAQdNvYgNUqGh8qN",
  "key16": "X3p9vmXmj9hbj1BiaRXvjy2wTxAdbKNcbhcxWm3x8jY12A1FCPXsJVDx8Q1SKUSyLJqjQtZxPv27xW2oit6bnNY",
  "key17": "2iupyNgk3bbpYtySLsWJw1C5NgfhZy4YAG3275zNourewSeAmNPEYYkBKD25Qz3w7Y3miCXaxSMWbrdHfiz8QtGh",
  "key18": "4zqvzUVxiJM9bYiS5Pk4JbztAQdJjCmbbicAdQRpcnEeRzoEEvb9A9pP3gPgiDP2JZswJZoYbZ83Zh7BTkvQjBvb",
  "key19": "5E3mgpyRUMJUCAshSFC4mbc6diNEq15FxHmJNdaPKGSJK2KGZ1yyRUirFmJV5P6NiMjpxrD71su4VbGGb5GnxyB7",
  "key20": "4K9KpF2xYv65PAiYjpRbqvumbCoETZXT4ccmDsNEJYA26B1HQwiUyFB7ZzMXiVKHwzA7hi5QiCpuscd7zN5jcAJe",
  "key21": "5b6G76VaLj8Dm6T85gRmu97xF4MSMeAnVaoD4XjfYh9iVTDCsZo216kYQLxttKCKbnLSRvczK3V4Qa5aRCPAjWAS",
  "key22": "5GbkC16TsseRkqRepiHNVfGwxkUR2nK624ZwRCBAS43xSAamQpNxc7ccYguKBWw8JpH88FoTfwgJP19Ru5pRjCuT",
  "key23": "2wyZZwCofiAs4tNuq5LSWX26Wcg5TnnMMb9Tt5wr23u8GvTug3hEL2TG3A1J6FQHVT76mHXQGpifZ56HFMVT3m1y",
  "key24": "5VqTG95ECR8nXAT161q3hrUfLn3YCj9u2v1es3sqehaHfw3WsmWVvwQh8HP24pXP59Rsns3trrgUL87VtTznM3Zx",
  "key25": "W5zzURCg1hwdySMhDbZmA3ED54Mz6KNswxL5CtdAVrDudnhn3Xgx8oHAm19yC9jgtnbNPYGeJZeuhYQF8EZnDJm",
  "key26": "QwLEVFKUUe3aqH5RUtvWFZ5iYKoXTXrJndLQbgVpuchEz3WZufUEKuJVjKE3SKEGAGUbDam4VCeVUrCqLHN7XM2",
  "key27": "2GWWiWDBWeguU7DgeXYQsmfRe1U5ZUyAxeaAbDNMwmuEQag3cDmZjUqDKotqheG5yfXvuGXfvDuCojEKPAeW2dRW",
  "key28": "54fP52yHeQFTiZfhTEg4yP11nPvjbrwdsa9afhj1kyLRTSiz7v21Pt9gaAgMozH8MdoQVstERBfJVjTGkcTtATJk",
  "key29": "3pJFF65wYHeUYXXHFs1nLpc21ugm3tUkcuiKZ9YryR56d81uPb2d2wDbA7M4LdERtcjfpuFBq7nSeN3ohTkj4M99",
  "key30": "4Zyp2oy7utwz3q1z6n1tZtvShr7vQrS3oLcGyxncoe62mDq6Hcoz3b6j6LDktBFGPoiEq7JZn1a2rCqMZCSA4vFZ",
  "key31": "3wCdTwmroUkeR32w1Cri2jsCbq2PqwRABiyfvQfkufYLGawug3gQTdxqehRasiD4pVzYZERphPDNGmudEqz8HeuW",
  "key32": "2HP1G7yWEa43MUcEztdZ6GXyKDkAWLdQGipxvv6qgGSLqGGFbiAqEnY7aVvBNVXwDtaLW9v7gJGoHKjGkM4BEtX8",
  "key33": "3LEhhkGm5pzfzLWYiPfKutTEtTLBs97wkqngLKxBHFv8rmAkTxvakiSwhTVFpoaM1MDHk2VEHU3qrUbiFbiKkVm7",
  "key34": "3m5r2UN4mPXyxgaTsCY3QnaqoNLNpRWf9pTmeyw7pQwtC71VZHvUoDGwLsgZbF1rjHyCTHfTre1vxke8KBdHuUGR",
  "key35": "2JchDbqBSDAVLTqeN2zCYW6PQX4QNAfXKF5uV7t3oQpkw38uNmmcfuvQuRbQDku7UYiZ7BAvyz2utoS3dH3B5gQ6",
  "key36": "3KQ5V8R8Bu6g47YMRQtuTudjPb7o5dZVwRLi77VdR46RBLLJfk5x8o3hBLy7mXzbmkPpnby14F96Rbf95dYdybR2",
  "key37": "4YHpfARCDrQoqaQPtLUHfwDkSxPe2WQBdgys7yWJRYyPfyQRfvLZni15oMe2gT5WEouEFSTjxzC3NoMVdyaASxfD",
  "key38": "45Y7eRCe5hgcVbv2kS4cKau94xHrob4SbHu9dhQHKC7GCdZ6wuPPaH6EhGLbhSJrf5S8j96tS43NV5T2py8cqUJK",
  "key39": "51b6jB3j17fNz28Rptd2noqcDrBMQqK58JVzAkAGnPR5BoRXUyDRrzwZ1ZAEMon2R45BXiqrnQMEscMeUCkiKjbE",
  "key40": "5qkpuJUEZacSDUMyGukUHM5M4FGaN9NiaGybBAxt3ZvRGECQxzoM1tpo4SSSgCUW1U5WB9J1aQiSBntodgdSjFuY",
  "key41": "Wp1wZKQHf563VQTPveekRZ9GkewZ1XjiHsbJg3TNSM7PHxKpEH1oMFJ5f9QZ6P4umskmoqDS9R5JtJqJYiacN3o",
  "key42": "4Af45SYfyGhTNs2VM3buDMsxXRsqiedwgTkuC3V5r2teWTTyafMWxJPabpxuiE9Q8m4DmkvjVTbvQft65ks5c5jw",
  "key43": "45TTvQBqPK9Yk8L5bYnGV4knSn1jhKqA2T9CocMQrPy6ZZqpyxQoX1PSoZYVFWA9F5UT1EovJvuXCyWG1hXYNLn2",
  "key44": "461BJBTWnArMezuYjHE4yQ1SzEGU45az7W9u8K8FPm9PyJB83sGZQdei6jrPjjjcCeszqezWg7Emx22Qb2aEKgY8",
  "key45": "KKXRyKpe9QEgnKZ93HCsPX2NEH25sKr5bRi3krToLWCxXsghiMMSddav41G8KL8YhPLk3fGBysLX4sB175EDKLu",
  "key46": "Cx7BiiTSXw1xbbj6HRhf1qywQaZDNhT71R7T3pwBVdDDVASYUWTZvDXVUBCUFVqUcg38HAswn7rTMXExrmYJEhB",
  "key47": "5zGpbo2wUn1oiDJYWG2kV5mXYUSTQa6uCG9m5ixNnazxPDGgxVH4iWWSGqaQdwZtBXPeouwMSzTwZ17r78H6CDtU",
  "key48": "5VNrnQ4fSF5HG3qUt935eUDK28xQbH9wuPzdtwX27HN6tUHNieKt5xkDXTWbrxbC5VA5ch1NsL5M9KS1emzU72j9"
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
