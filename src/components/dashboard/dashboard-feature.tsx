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
    "3ypkUifYxCyHLhheC4EEJR2FDruFQEgA99ZbbdbHAgt8UZ79wZq8WmaPpm7HQnsY14qJKrDF2rjbK1rKFf7FtZPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Rj9pMEUkeiD2a886Q4i3CgAirfcbS1KXySn9PTcm23zk97Rw4x3fQehg6EDymXfi9D9EGgWkd2ygcxhgfuYTpG",
  "key1": "4XrpLwqzNbMksrATqgGoW9xu5F6aeB4HGxa1qPaCzZEj2XM7ZaZ7525EHjF19c8bZiQGaVCk31enNzp3PySVAqRP",
  "key2": "3a5B63hSLGmCbRzvLQJ3CsYsRVqjPKCCoUgZDwp3wRGyFFSaVzBizk4HzvpSrJyEWWjjyV96mzAXoFXa6ZM9kdwW",
  "key3": "3rqA9RD4LKoeewXqz7m5Bu6M2dyBbfFEEVBWQMFFm7y71NgcJvC5oZBuQiYUrmzDFNGZi3D5der3BazjsxWAi22B",
  "key4": "24pAMS6YGEJPjS8dZSkNjEQMdjwaBopB6wWdeKHH8kSWXqDL4TdXye85PWjW3qBx3Hru7qFuV3VUDWAz3UxsR2iG",
  "key5": "3wdGP1LE4hapewKDnwHh33zMrgWzTTchZwXcD9A8AJ7FEySRYdtvsa3Gb27eTrw5SvWBVbcoRUpErmSWswe7KqSv",
  "key6": "63zxw6UaZFn4BuNNSNBJbgeJymHYEM7NpiGFcw7N4XSgHRwUTsse89a4BFm49gKetMKDn3NCKoXdh2Nk9UwSrr6E",
  "key7": "49WxpgWkNmCeWaGpfpmuschTgDzK4J3iEYUSrJZz8sF3sDAjCinrjpqxsYCieTV3H2wB7VoxfGGjPVGTLTLSECNs",
  "key8": "4CAfF3uaFt2ATWNSA6zeSo5eZb2eShpGF4XA8zWnZ51MVBYmzN7CYcMRS6RVgcNjpd4agj8enpUBWB5UM5p9NhaG",
  "key9": "2qpNuhTknreSzguuKSwaxsB7PCmWvacpnN9Ucfrt4PgufokvBadSt1SKJGLsN6tP7D7fQQMTGYQLAHkup7bgBgaS",
  "key10": "xzeU2vSWhbyRYA3H6JGwwzKB28LpexQB28DLuNd52263nREnkXptkt1JobvdurVSdiJiZY44uc6PwwirjFTuECw",
  "key11": "48RAfYNGrUBmKMKnUYoiZmtPon3GJPK2yRoENr5gB4z67nZXHrvCCFt92dpG8ggNZfcqE2UDrdygnPtMqAqFDqZC",
  "key12": "4hdTTpRsNTTFm1fqie6hpw9unMkpetBkKJ6twKU1SHCczz67A2oVPM855auUwEJyihSQbLRFockHHdytZPbBCb6E",
  "key13": "2wc3UXqmzW3PcdWS21W4PWSWpPM61bmyboXAkLn5dRcHBBH24hHXT71NhYVRKfpKPCXsDgFDcnvPRWAYHL4uA6wi",
  "key14": "63vLG7RT5m2ETfAcxu6csaqoMcCNEn1SrJoy4HzTcyEJ1XvQRp2nmtDByhEWHi6cuGTMWSsKukp8GbfurZwKFiUQ",
  "key15": "4FzYsiGQUecDUDKpRMzzzJP9qZQXfivep8DJBz2zXXbn6b9hMPZBFwTtnRnQKaKLFyHGa3YR2U22V6eLMFbGHjMQ",
  "key16": "4h6mjP38qnobGBnCMemXRK21kpkKTchCLiq2CHwViEqJDy17GXCryi6dZ4ci97faYJZtQ2iuKBumcDkSQTsbGDR7",
  "key17": "4fbdh49a3k3MEwTpL46XEZ746M1MXoyExwdSybmU6ejrp128L6YyRE3T3T13b5zApnAjAC5z5YLJ2qHZqwTnFdHs",
  "key18": "4VpjxVGU47nbqos4VcEYmKD4iDui14fiTfsUpFZXAgn2BW5z8VnW8tX2vxb5zTBehUNKhq396sipg7E6GveBDtGq",
  "key19": "5h48i3eggZ4u5NRHi2T3bWkqXuTQQCg68XhJ4YV2858Wg1kZoUbCWzMVHHvJEvfeUp6wHd12a3tUo8caXCxngrDD",
  "key20": "5myvMJhPmb9DRjpLhHFoMLJ1SvoZx1bxg4tvFpT3opPT1bSrN7XiQSaaAA4EKeWJT64RSyqa51qaLJ8in6UZwiYy",
  "key21": "CyTJaEhbxeeaqY4nHtgVcyJDyRX4HHnZwttM2HQz7mwSGnYnMJfk2Ta6KYg9Zkr6bqUYCLkQ6K9xATPoA1QLugb",
  "key22": "3Kem2bkYtZJkVufD3DfTrbYxvBxst4rejsokXyQSdY4wyFxtgJkpCvJt3ujLshsVLMEHLdLBKZYuUhbJZCidgxZ8",
  "key23": "5jq9JSDQzyTMQgMsLGa4Sp3H4dYVFB9jPYnJ3bm96AyqvNNLyEtYvfD2xusFDqpVrJAodju8nvmkp1qDnbsM9jd2",
  "key24": "2hWQofQJwoDNVus6y3YGsuVD3MCRE44T44pWixS5ZMFLML2XGr4uK4D4PHETfGdVtv63mV6urCC3BEXtpQDUnSWw",
  "key25": "3RGYvb4Sd4WUpCko7Pb9A6jz3NwwVZhJoqPdWsxFaiwaApwJNU2ogt6Rm1USr178kcdFjUDa45w7EMrjmQ2D3vGd",
  "key26": "5FtgSM25431AhnxaJiDV37268jYSDXj7TnPmbuLQ8wKJ8HkRojs57unWWSRUtqdXojL3okyw6Z3BMEURNLJNrMyJ",
  "key27": "4UUSBY8uuBtpxpZYB6wsBzZ1aNgowpyabpdQiMq6xFMFRSVJ7qe25JwRPi2GVRzz8aqQW5UjjXPVZPYsoXDrCZbJ",
  "key28": "2gTQ8QcE2J8ZwhLWSzbFyPS1Jv1HPxyHsZ3Et9YAMDRcgijMif8BWTKFf1S4vhWT1TVSiHdXnu9Dis9ZJMZgyFr1",
  "key29": "63gb4sp6LJtb9Q54xURZUY7B2WjxCQmdMD8Yy65Grk2jfJDPVAhLdUJPAGM8ogi8yJXgBVAChwDnkoE75ufLAvoE",
  "key30": "53BwzANa5misPEqQw9XruH4sLVRt2aHL1rztDBnGwiWEiZjPiChhibsrLeSFiyFYdwiuSZ7ukc8hBqFigCDCxQfy",
  "key31": "EHjbT9fKTEnwszjW61srYAq8yiLa4bZie9nEKe7sEeFoXUffFiQEoEEUV9T7uokw1RaMspLncsmm7DyMBRdeah1",
  "key32": "2oziGAvhoxVPmUnexkweuGRRrShGBqNXVzY1wtmF6XmiD6ZSUNjc5Ugb93USM3RdJPDhm3RPMTjMpRGMnhWzXtLq",
  "key33": "57Ub4XnN4YKVZ3AunLngE1o7JTK73tyJHB1YZQTiLcCeqSsR7PKDDZigp99YXFyUyxJvGey8KyNEYdbwXGyjyfBc",
  "key34": "2Nq3sMF8DS4hbUoEx9FoExjWxYHbGJq7Xs12Q2eXGfAzAeGbyJKBStEA6TDSz1VYr2jVwtcMTsv95Wc1o6Ge6Cy3",
  "key35": "4MH3HzcbjqU6Ae4yz7QhQFBy4nx1keYtBtJPMTUnGV8SkJuqfzDVTDZhqRJ8dWK2yRNnUUNXbbwVWLw5rF4wfqnN",
  "key36": "5iWWqA91WiWPo7irb2RWc4NQ3XJ8f6JwQxzAUSys5RjJ1vuKPpS1RHXfRUbJKfFjnD9PQ83YhACbdAjC66QbaUFU",
  "key37": "3YGyVMHnd72SsxeKm2sovjGg9a5NxCZzadjxrFKoG7SZjFw8WfbJWHNwqY3PzAGnJexGq5RUafq4n3prNVFv6kkE",
  "key38": "r47bjc933SZYqQeynpGQSMn9ftpArcVc5g3WR3WqzJs444WwnmAokfgFkGvr3f4gtWExFwc5QrYDKBkYp5Rm4Lh",
  "key39": "5NWtLnoLCV9jXYPqAuKk5NQYxL6PqqF6MatSX9KZN5GbBjAra3xTwVCjQkzTRrjQDd2GXY7SsUxaitACR2Xf8yEd",
  "key40": "2quT4LJYPM6bdGw2YAzSZRvkx117ijYjXMQFpTU27YMhEErXc5iBg4Mm7Kp1oQ9TFMZGozoe59a5k6F3japcE43s",
  "key41": "21g9124MyzDzxELJkWr7XjP5sJoGQydkowgBUgy8tpG3CWjMFWHwqWn2HbZ43bUeH5exCfVPhqDmaTLAkhMmRJ4L",
  "key42": "4qMd4kMJoZDkmzZZkj9pDVyYdaUJ2ZJPDSrvTdyz5YRUjvdoz1Uak53uafYWnMFw15M1RKBg1tmCS86xvB7qaMAN",
  "key43": "zioQsfCCnLjjq6xXccZjkX8Xwf4ALm2vMSBXVbhCS6rAcoJCEDqThKiCH3SmjhQe5xDs3h3vjmF9C7yrVyh7HFs",
  "key44": "5aa4kuoscnVizj1pj3nKYZ5txwQnM6uzr82MJZ59pvEVfb234EcGn6u2QC3RzJgp1Mnwi7DGzgJGUmekbBBdbsH9",
  "key45": "28GSvUoPQov4fMJZDdFUZ8weaF7HcrhFX3gBLD5Q3CXHhBJjAj1vx34d68w55dd1enk1vmknSseU1kYcx89MfgNG",
  "key46": "5ncGk5Bw27F5P6qp69kx3fBJZ5sfHEvfPbPc3AXY1WXZjUCm5LPyD15g5GePhCfFcGjEnj1FgT2SoKDL3B7F2FEq",
  "key47": "46qoCBFGUoZvfC3k4b3QZM1VP4fAwbEZhdLzVzfSD6bDDtVzGh5bznqquqyiahnH8fQNZQAKx13Jb2ZT55jzYCw6",
  "key48": "4FerxZ6FyYFqyS1GfvhdjejGe5tv3FrjehU9DYdjP4zAoZY3cgpFSPAo8s5W7qCiZPzoBGRXUUk5vVsxUGmyehH9"
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
