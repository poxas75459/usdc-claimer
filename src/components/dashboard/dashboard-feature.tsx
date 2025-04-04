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
    "5xZPh4jRExzcJVBzEmCnMUgYfy3oXpUiLbF6Ce5dokorvp4nfmah64RnAQBXUC2VT2YYK9rgot2U2kPFDEfiLmYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rkxxhWeM1QcJLBwHUKWBNibbC8uTXqpddqaCu6yDoHeg3AeM38oShYiF28VwfzkM8vtFB8xJgPftFxQoncbuSsA",
  "key1": "5KKq3zyWw6tWrQyM3hCHXLcMYrfvY6ADrvFZwG8Ro5c1TywnxtF4m18Ne1HQSnb6yV1gZ2NXRyFGGzWURahw2WoM",
  "key2": "5L5rkihn1YwC4ERniirKCpPvEcApZQRGrtiaD6S33xZymMGVvs3VighQpN2BT3p7afMuZgXhyr7UT7kAvYAALunq",
  "key3": "Sek2CPkdJvx6knykCvgiNgkPTXKe3eTutGq2Swqo6Xb5EMVvmQDJo5i9Guq82kq3rUfE8cRjoDHhyw4VM2wecQC",
  "key4": "3nNeca7tUfr4ZVuP7GifnVMFSp63xVGbrDivZf4r1DxH9MZsSzjajot7Q3GK6qVhGwW94kQJLjJ9BSWmJgFNxBAB",
  "key5": "3JoosDjbzqGErRK3NkCsiyQsyWxde69jkt52ebLx2h3LDrXCPFJQwpdkHWG9Z81A2bYUxihMhb32pPLap4rJ4Tn1",
  "key6": "4eLVdkEH4TUBsUYkuxUKkKg2VGMKNyfUNTyTZqdVzFzwP6DuVuJNYr2QqPZZGKLxtak127WYipM5aiNAnstYX5jg",
  "key7": "3Sau8gkxQ2ahBFk5CfusEAavE3mBGWPVPWn1BVECBqBJ7ipJwbaZhRbEyavLyZZ3Ten7oy9w76xHarLscAKmW2zB",
  "key8": "41T3wUKUnWNG1vGMwmiA3LRq3Fh8n9Eu5AYz514SYVZZ6JtDDspeqVfkMzoFaykja7kNa4ZdKfoErr4DGUhhFwHt",
  "key9": "3kAJ9UGukTnx4ZQemQQPqRdxjyk7XdV413bDyde1CA99z3sWD937tsEddffHa9FCDZjUPmN9VLZfVwHPeLEZRsp7",
  "key10": "47pAjP3XdchoEaVbCKubAiNGvGUNJW1tE5Usmdonxx6q9yUwsXkvBe6r4xBTibG1dcp387axLsZzGbeAPviB8RnH",
  "key11": "3WWJxHqvHa7Q5g75s9pU8SscvwtE3Rhxw9aKNPrQZBLPZNVBQyA1qKPY3XSEMgMCGP3y435emmmox9nf6L6Whor4",
  "key12": "Qf9uYY3APyXAR6XD95t1dAuhgetAwLbNB8zVjkg8bjak2ytQEz5msLzAzsNnb6QqoGb8bP5a4zV7DwRfPRFGaL5",
  "key13": "5Sntfj9zXVweLgrhCTz81WEuA3upYtAgQYMNbAfieWQjNevccKu7UY8xZhDEs8MgpDyRUxg7FHGH1ABqEMsfRRrF",
  "key14": "49QfRZQZMqLo5vmaTED2hmnmQBsHFgigKYLU3mV5ASCCf7mxEp7apFdV3iCGNvWFkC2JEmefi2cpkGk18wTm31g3",
  "key15": "3VQY1kcqTe33QKgarpkz3dAWZfYwQghFtLgG3zSf1bT49UJ256s3X1i6trpKhWAMyeuFEUJGCCF9tHiRksmthTNT",
  "key16": "56YwiEWFraPRTnXHBLbjZLn94vivmwGxVE63MZjLW9gKWNBxBKSTYwSRGZBiW8vSyNS6XJhkYk1FeKZBAHF3dnS3",
  "key17": "3rf5uwg1StxeToRt1RkZpgxfKJEvxPXbaKVMYijq7ZTfeXJzEYSGBE1zmLeKg7tBA5Lpf4ue94N1Kn7iHvqtTkTE",
  "key18": "35Giw6xmeaBMAL4HXuddwaNCjxuejiZetWGXLpdB3YgxYQzFWS3v9Y77LmmNkhvid3oVSN8u1a9MJYVVvJmL7TvZ",
  "key19": "nNxVr3gHYf2Sr3dvUanHEEh1YSVRKuCGJAvRCphfcNoN1zpiu4qQkYuG6XNEDTSQDhBV8GauwF3WuyHYB2pDmQU",
  "key20": "2nPatT29CCMxcDbkZqqu5BzsHc3m5B9V7ojDf4S5HUDj5nv9idRSLdMvVnfPv56pwUQYK5jSBMLhnaTrZ6Y43DhM",
  "key21": "o3Hn6APW758vXtBMPk2F6aDcm9uSq4qnv7osowgsJto4gDAZAvdP7EiJNyKMp1p3JJjBuZoT7pRnrwKJuUFGodd",
  "key22": "5T7A9f4vNzXGfV3GXAEGzPD5Mo2uQdmVBmAyr9BiBoETiN8EEJiBnCFHaMSkiLGXG8Z9uu4EdU8n6PSwRYwNVyHq",
  "key23": "zpi4XKkZaRatLN373KMVQeBc8kVtigdmpb5Tf8HHJzDpnGZk2Rs8ANyMrmz2BiFsZYdEN6hDPr8TU7A1JVi1CnT",
  "key24": "LPK6F9d1cCbpDLmvtpiMDARKeAsTBiibLhScWDRMqZSbsLnC8p2h8TaFrv2o2LU5igsZqtCZCMcLr9YMHRdxVoB",
  "key25": "nqDSbtFzr7KJNfxqso6hMkZJrxdrbhF7P7tfTYZYKfd8oXLKDo5GxMzyzeWFroQKdMi6pSM4UcRnSDRaFL58aCC",
  "key26": "3MBEBhtpVaHkS6GiZ9bkRbANw7hGQ1EXQ4wxseh4wZaWyQLoHr2RAcXSVWzTPNJn8YSuXGRCQXeVsjfSGfYXE4q3",
  "key27": "5Tn9xrZeX9NaqiCsRRCe7d9o6NGc2sBfUjpvosG8teWQhjXWxuZjPpDAypjDx6xUKeKnBFC9BsM5nQYC56gsJ3Uf",
  "key28": "58e1Rdu6XLK8CTmdqcqXTqZb4GuRon2eMUUpZ52GVAEaZfe1giRx6ycoZ63TDFpsynYHs3nUjJAzJocAAnr3D1Ci",
  "key29": "4qQnU6nZ9DaXFQVgQGXC92xf3SrjNZzsnQfo8v4mc512hnwVPzZYdGvjx8bcXeXogPTiCAPz5wuEzDwSzzuQcdkk",
  "key30": "5JDYoDRG2Vo6Ry7wqbMGCzqUgv9dbyLzvZSpZECuLmx9H8F4qizPzrHwhjSzzyMN1T9eZbePGsyXM52mDrvKAart",
  "key31": "2usNC2FpjEH4B4gbJFUDd53Ut6wMeoBacYbiV3cbBRm1Lso7jqnAnjziY2s57hZLEvGv2xUUktbb4zehqoF5J1rV",
  "key32": "2JEbeBMJiXKAxwobFkRMHdonDLSDee74sq24eitC652VEremzCFFDYLRodM2hjbvgbREuMbepm57weZHBB66Ww6D",
  "key33": "5iJ2tRianjxWnMJdCowzjHQfm47DeK6zVGnP91ir9cG7XBPFBDs7rniiZcm5VPUBiBohvas3VSPobVfh17MPh1Pb",
  "key34": "22W8NftSJ1AmkiEZr9bh44RrmeoXi3TV6Pw9737e7F81mJv8K2oW96Nzf9pP1hB8YnsuViA2nkhHB4qPypFYSBd2",
  "key35": "2JfoRiLBnUPbuXKrDNsJZFR3iL7LzBNpDSdiXcaTTM9uVeDHUyV7ckfkBJE3y6LbHCcCk2g3FD78pb1CzSEwi659",
  "key36": "2VJ5xLp7E8hcLJXhnKFNZGLRphpHn1BgopG6emLQEKsiom7ndyCVD178VS5ryYHmZqe1xvWENXhvG2RpfLinkYu7",
  "key37": "2bnLbUbDcf9SKjKfvhz2wec7MDweAosXMYZ7n3U9std36iHbnHvHp1HMKwJBynkDtE3wkNuZ3Kq6ybGgpt1ys44N",
  "key38": "5vj9taj1gaeZruC1vnXowxcFqubMGcPo6th8ZFUFCpmbJC2rnVaghioXuZZeQQu6uEZwpNewrZLdWXrvwhJ2Fruh",
  "key39": "EzJ72cMcY1dQw5gKCd5ZF2oMsbJ38WGmxKjcGkWGqUgq1e6vzF5W3tMECRgg3FRhtNrwW9qoPA6T61zt2HxfDcX",
  "key40": "5G5z5db7ZQioUfPd4e1QU2TiDmS4T6PAaaG3A9YnQAqHC46jozxoFR6dJgZRoZViJYCmn2xAku4DDdyXws1Kafhp",
  "key41": "3UPz3VGArDE2AxpicgdwH3qaAARGbDAm45TqdnZH37Hn2XAuhxV1LMs3pghk95fb8e2mctjrWtx6oqkCy8rrMRtG",
  "key42": "4fdmMwtcjgDYAmoXjAX49oqKHFfnrRenc94ZXfq15WwUnVrY233ufMwjgX5JgEnR6U3MFCQXaEHDK3ekR8ArKpXY"
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
