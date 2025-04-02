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
    "2ots81Za6KhxGjq93yCpFYVUUrvEX9AguvsWcpT8FXHTaDipwRAmpDShGqBy89tdvhECFg649Ci5mVHYBCbc1H44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AX4NNGzSibP48yejoYANDaD8eu6yPkJaKycZdLe4G7zjFNqqy8XXjHxW6bdzQpRdjKtEdhLXSw4UjYhjXYfcxBi",
  "key1": "61V6XTJoSVsWWVDAu2Zr29FDePyb17o12RFtdeYswfDDaJFfiq3yArfn4JrzW4hGW1wyHPfo9UzBrm3XHtLxBrxw",
  "key2": "5HkpmE8vrQaEMrrptPKLCswNcePcqAK6zfeWyHMHnkMyLhrgiBYhEWVRZQ4FmWkeeiw6E1V4U9nL9w4gXQaijNAn",
  "key3": "2wRKFw32H2S7b2rxWzo5dBkJB5tGwoNwaVJdka6MQBXkSkVJXPPmjdUvaxKCXMJsY9AZHRqPjT82rb9FAnNz2oWn",
  "key4": "3Ahox9gariyFNkkG23EGLTVuSNfVK8LJELEaTEEJXwFQTvcLHc5W4jwSMMvXREsJEJ2BKcyxenZK15QUSRrYSQvE",
  "key5": "CMJTrvxQGbyW76BYdSvZS8s7LnmyS4q3UiTKY617mpg4qUYiGDtZYe3BuMQx4y3PUFQvFfMcAenaUjXvgNA3XvL",
  "key6": "5yTJ7WZk9LaiHaqEH3M3DWG6qahmX5KxcptgHiP3mZrtopjcmmjmuuspoCM6dMXPFu5TBAeS4kHRohSDKaokcXuQ",
  "key7": "21Gr6r3Kdx5Rn9cMcfbJVQHK5gpyQKRTK5zqQ6QhZnB54U1rm9xscgxK9fosDSUygVPfFjzAXEb3GFJk8sB3jeoC",
  "key8": "21hJwjf8mCFGYiURoHSnk2tjVpJppNpFxaPzPo9QmTceR9EEdq7cgrne5MHqUvwy71u7DWQHvv6X7aCL3aZ4kP4G",
  "key9": "2rz9UGwt6W115ZTYKZidmuU4wg2goMw1iNMv5rRH1nChvSqdjNUA15V98zkkpyEpqMMBgwpme8oBqqpUtEEzfxvh",
  "key10": "2M1rfR9Lkkm6sD8gAmtc4q5EsVYSoj9mgC3p3k6JPzxWMGqoPj1Vkbv8phbDyprszR4qSkptE6iZrmr8XaNT6tsb",
  "key11": "5uoWWbD7p2MsN28v9WrhJBQNaumgrBEP7227mg2sD7zCpidnp83h8eoPCkRgrPVDGUSD8G6oKo3t88zUgq7uJNor",
  "key12": "4u3aXuzFFUNkYj44E9AHN4m53WZUwXAaCWbYZAPhG3HYriiHA99ifaYRJaMxrqxJLzTap9nvBt4zgSaT6kLfbkeb",
  "key13": "ocAT6gtV9CVTxhwoDCTP5U4w9NiNHUvLpG3EVS3WdzGgpF4e28LxhzUPio42DrhTuy27pJ6zNwzYESTWWpxSTgT",
  "key14": "3JFWBypSiEjeb7JR6if3c8yLWjrVuky2sCnUvb92paQ5sfZgPSwqSnG5ezVSJziNgUYwDteeyvFAHhhQKpxxE6Lc",
  "key15": "2H5gNc1Ww9rwswAMy1p6v4XTHMEvEGymd2W623m4oT7JnPLAY5QovYoBsSFSSCpmzLKLmSUD3DGZB5ah7AgJ8ikj",
  "key16": "3aXkL9ny2hEx49xoQsLPRzMSpFo5Hy5uEmPNkQW4KrpsHc6ARKgggkYtoS4LZt7Dfodkn6Lm5S9uvXcGaLUpnuAm",
  "key17": "r1XRTiCkEpyv51Nj7EPgZPoRPKHkVBcCWRcBG1Hi4dJ5UtX8v4p5s4pDZEAQCnukz84TBsfRayyBJuGuZutqw2p",
  "key18": "43H3dMHP1TBJYQ4y8bABwo7jLiQv8tGTd9jMEZoFYgV2mUw7teSMEaTtkK96NYsxW3SyNj7JL68EL8ZNiojmC6uM",
  "key19": "3FDoCXruVCUeigy1oAQUGjuqDLBfs4kroKAupDFViDdHYXSD7H51zP7SXFXVvtsiCm7ZYHGM9GPFAFnzpheHfJUo",
  "key20": "5aNeGWGoHbi28DyiSGVxY5VUNS3CA3trwTbnM8PspjUoKwzJmvGXHPc9G2j4WQ2nmwx1tm45Eoa2YLVGaUd92NKZ",
  "key21": "VYurtm9Xu3MSP4AQaTLfgND3ynBF5GQNf3WbsqrGkhXbC4jDcTUpumLLfewXLAzFtNHo6E5vXoLdEEGU64Wem42",
  "key22": "32kWQQQ4batjGmLwYhD5W5At2fSbETWhd8z6TffqcBJVrnXcZkD8GuKco1rYFDH3xWsXCEN8azydTRRyQPBFrsos",
  "key23": "42eoAGK6aBV99QSmEkffViqSG6BhPgrn3EtmXZgqvNT39Mhnqr5LPBKbLaWkreLrfYvVUiRxgqL6bgjSd7aFmk6H",
  "key24": "2MVUQLx4BeC9hnXePKH9K4iuCAtDnfVWYiE9ewEiQbdsJDVEe7ymaniL5vMdJNQ17w8sMX9mUH19vNjLZox8ENsc",
  "key25": "9gEVnBvBL3JpNxdFa7RVw8uTpX6XGMsTphEBYLCUb6E9hyP7KE6jnaVfxGBESuB4gNXKeq3zToHh83eSpvkHW8V",
  "key26": "46zEDuaC3YxQPzRV59rVjMsptfoRw4y3yg1fxzFiJLhyikTmVwkRx4jNdDQwzaeEAF9R86KHmuY8njU4dYxDYa4W",
  "key27": "41yTDX2G2EAMH4ESVcGeXb9HxJTcGoVwA4p5cT1cFVUF42VrX6gyx3sznDMdskxWRkGQn9JGk5b5FZ9Ba1wSV9px",
  "key28": "4NYxi9tUnSwSjYwAxWqSY68yhnjR8sMAaHxbpEjGm3d42hmk38t8C31uk5Ufsv8zYMzQhLy7eLCRQLmmKzckjtwu",
  "key29": "5ZvAQ4ZfWjg221CtXtZ65j44rr6rc7m7P32594SUmHfCYLqHkuNVQg35Wkf8hrGxxdoHHKRZsi8b7fbwRTMZPRSh",
  "key30": "4tAg75QDtjjuQujhyBRM5mHVXnBhKqXuhah8EmJ2WNeBuANPLZMwAoFEYy33MAk3PBUisntjjonfAmCdtezSDEaa",
  "key31": "2PN7vVMPVF8kuzMr1Ki7CMidherPDhkZ3ctKUvcVrEzv4tes9TXaRnCF4nwYPQLDPVRB2FjXHTRaKcyPghtzx5sF",
  "key32": "5crQZ5oWm3kyK2NFwJrGCfu9ech14HZ3dsXcUzEmk7mgbywWoqam5nVSUQNipLapk63bLqhvJGT5E4ZXqXZsy7rC",
  "key33": "2fgGy5f8sfKLAmzR2JNxxWfLtwxPnjxakU29BFi8UX728ZjzstnZpP3b6xDJiWJPncAVA3pcTuksMMrCsGgmvWzB",
  "key34": "3qzFFp2u7bCipqQoFMnfpFoF1kUU3iowXdNuTp3fZhJBBnigToa7uJ3XPvcWxpiE8yb63GTTNqQx2PDZA71KsH9q",
  "key35": "315d591FPqs6yNr8XWAWaxiyAevWvY1VVdbwcsNPkqVdmEdMxgCee9NWnkka8DeNZiSpSJ5XZsioaoyzkPh6FK7B",
  "key36": "2majBQgws7M5JAg9sPZm1N3YsoifwziVLStYcx8qCJJT4zoggXhv61S5EvtEze7wGgqC6saK2a4MHPDaAfnB2hN9",
  "key37": "4dXMZiAscRcRqioG9ZL9eYUhLTARJH3TK796RmqbmXrXTPN4wCEGpcvsFdbuJ4PYtbjcuUvMdCrM5hp5SNJAZRZK",
  "key38": "5vrX4F5xHo6s1RGrEHwVuKuT8yjDGCUwFPmWL2S78zZoQ236B7pfBJxppV6tPVamWQyFBUDVE8sjtzp7yBniqLUi",
  "key39": "5wwBKJetqUAzEt8vtnaSNr4JwQh1rgYULuq5jCDdYK4LAb9NzuDC4mmgT5GqhNnfXHEjneyYdxYbKqw6zWTGrrnT",
  "key40": "5Pcnczb25hKZeQDcxLGax79CkNZBM2XwTkBjQM7u351kqeNY6TRmGt9yR7NdiUNgZpj4pSEgkBtHRxrhK7cJF19w",
  "key41": "4TiiJVTHTpb2jV8jj2cze7oyeKVrtmrQJmUs4we4un6t9JToP6FQ3CGACQDDVRMVAtm9yw6eL7m2f5nxrdDRqMUo",
  "key42": "3dzr2wrNrpnx3GquhWN2uf8c8ysNutN3Xj5NcMx1pcQbhN5z933ZjxXEj8izkjBCNg53egD7uctSvEiDnz8REgWv",
  "key43": "T7Y9ELJAv7TfV4Pw6HvLNLVCwFQrqLEVDRvnBTjpKy9Wk2EikrJAExgr7aHGCP9njAv7JG6y9HymNUe5jmG4Gpw",
  "key44": "67WqznHtS8Q48ybyo4rnY47JenbtD59kfan67wTBTiWT69e2cWrAUqNTAsd1FeGSjdzUQ8FP7FojPrDXDippwpRy",
  "key45": "53BVThniNVoTunCVSQXq9W1NFJC49B6Uer1fLKW55hmMq1DsbqBg6rZHniYXs4JMrV2dDw2PSqN7gmgKmWQyrzZs",
  "key46": "4cJFYWrtBSUZeiuwDtyCXCzbMy1knZHYwDad3Sbu5JcJSagWeexEJX99LTPbnzECne5BcLCtS5zTg7tX5APvQCnj",
  "key47": "27aoRkKgFsMWLPJ1HVD3CECbfCKdSXFAeFdStTR3wfG9ZdDGLa1rUCX21jb76nNt53WNjJv5LTQWvnRnQUYYZ2yT"
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
