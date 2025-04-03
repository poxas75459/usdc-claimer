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
    "5bJKjVfXdujsEZZvzR7XDSS1xc1pdsMCB4kcrN2pBDr6ZJjgg1o2HqGH9afML1ZwpqjemrsoY8VLMwChFD3C5sd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aNgFj7MUxhjikUT3atCoa1RqcAZd8G8Bgoxa9bPJA52QYd1y17DcBePR21VUdXtTnSee69sfGNbugzmuKo4xzTP",
  "key1": "5b24Jp6WZrFgokuu6oM8EEdGCy8MCWt47H9s86L1jQgyCAUXc59DG8E7CgZgt2yPcEfJUSjxMpgdFbrZp6KK4A8G",
  "key2": "3qGmQ86zWYZ1JqnMthUa7vyYZj7nhSDb23SXASuyYa7AwF2EX1MmZKLjHpH5v8SnjzyA3x3Ve4ShTw4zTupr4St1",
  "key3": "2YCWQBicNMJHZBQuRCPwLJWT2EGNFp4TVZdXAaG3qDBnsgGLSEiD5tAAvjepzMGhFtAHQfj8og78h48surRY4vkg",
  "key4": "2WXvtVzkDKAwUbrEDYwn76Kp2QWWG3cAZ4E2BBZdFomXX18Yih8mJ9jExRWCawZjzNDR5RXTVHCgr9evTimivczh",
  "key5": "2QzyuPaETm1t5rTiCZTsgkFgU6YZnpnZs9fBH9CqiNCPdj4a7gZPQdjFgErUTsBrmuqndVHiyFWM2ZkwTjLdFX5H",
  "key6": "61yffHcbinzjZ5MvZ3N1M99p4GG9ECpfV7TX83wh5s4gYCxjcnZCRP3yJw8wY3yMnZPYvmuVTZs5KbWcQcMJYTz",
  "key7": "t3HZt4jnMRNRdYR5dpof8yJT75Hcx5iSGn8LeBDR7PrXsMCYFfctUSUKSrqpZ6zb9to5aPTLNGCYJCErQX4CEyj",
  "key8": "5NZ84FyToa5GWJbYk2vKX9BBvG4S3Yp1f3fSNsPFX4NY9SGCMzHXFMjeGuAiQe6HUuPM3BiXkNz9J3YXuwaiiNhF",
  "key9": "2CT58aVN8y5WtKavEvZmTCQkfYb8QqPq2uDhQMJ2TkSKSZW1LNyHFyFcR5tfni8dHndn4ja1H72B7dqvycjj3K3D",
  "key10": "2LNhfHKW8cyemXd38KyaV4p52bQZVUJgv4w179yd4jbFQS3LFTD8ezxtXin1CRRZyCsxpoq61qpNaDbjX6k9RN9R",
  "key11": "2ujy3ciBd6N5yUj6dppfCybZiNXNGCNvhkPj64tVozUFW8J32D36SJH4aZGgTU4Y7M17jF78wB9YpR7wUtcdprSt",
  "key12": "2QBAkf7UyBZwaxmQ3UkgK7e25QnU5p9GY1iGfcbrDBC8HwFiU1Qd55oLGTN9xbHigLM9T4TuxMvUjtuibJ2Wsgf6",
  "key13": "5VqHWB4g7aVLFi7UMHvSF7KW87CMiuscrtY3EQVKVHcA82QYUGZDCPpT7qmfCJKtbY4sTRTtiUGdq4uL9JB6HQqb",
  "key14": "5i1dN9mQCPCoNTCkiKjyFYpK5hK4dYMSMjrDLkDSE2iVQXKTekBdWRMr6oieNkZGhk3Dcjt8BqjLm1762NwCE1LV",
  "key15": "4EbDqKFMfPdFG9t182C5JmCGUojKxtNd3c5vy6xZ3xpbhBWLEJPz5J3YWaqCkq7An3K3DLHHgVF6s2W3BzQuGGLf",
  "key16": "3oSRPyzwkdN8XtTGpvMfkGUFEfieJbcwoSXuGG4faTuFsEpCWKmWkg8CabBMhzZtijiax5UW9RL9jEv5LgCZ6hzD",
  "key17": "3Xjh7dbPQ8uW24yX8pAcYLHzjAcNc3hsfms2v3e6a3Tsyhy32J7NZdQXgBsUBGbM79JCDU7knUTsGN6xCTGLaixB",
  "key18": "3V4uAL3jCJMWfpJEW84g5NMjp5mH7C3PLkXaBfjNyJRfm4dnvADyYfVfms4JxQSjyLPrxmDAvALryrifVyJ3EBEU",
  "key19": "64ZUyRv8XLNngriexp67MGYjEjRGUhKmvhEzmqLgpbK3xUXiBSnvCZZEgGg9Wy8edRgxipHZ9yAGFGDrWmVeL6Vn",
  "key20": "26k2X6evQ6BvCT8Pi3Mw11gv7xoGj1bFgQyrr29fxnMQtzY8wGaoTn8w5Dd8TeKuBTLDg6TZ44TjUR7NSpRLnpQ2",
  "key21": "3VwwsSr6rfEgTFu9i5CftASBZhKuXLvBNkwUYQKYs98Qp7gA9B5u81uFbXb6Wrx66gMipR64yWT5rNKyx9R6zob3",
  "key22": "2vkYGUeejuGxJTiDMRgkeUEG6M9LrBuArk2aUZZwRHqvd6x1pAoaD7HxeBFYNXtbrDu2obUjgizauydFT6FpJArR",
  "key23": "4Tq9AVrD16zQoWv924JjG3kLyUSRAfB8PYdt3gToJEoMnQngeZQye16bCXVAe2oCErxPBP7wzMqzSEB8sLTdDxRh",
  "key24": "L5CZNfvUSEZMhBRjMVBxSkiepJr4gehU5GtddwdT37Ngb25qbXeeR31DzYYwihHjw4fDZCw6HJpJX8bDTMv8j8j",
  "key25": "2MSTc2HRoC18myTy5PeH5ChqoWZZmqCy4EvmTZwnDPx9oLyxqcSj3EUQBFgudFTMTHnbqd3ZoiUsWCNaKKcA3UYh",
  "key26": "5pJEmbnEuhbc2fu9vjQoxx4PmvttzKMwqu8hP4Wsas9o2UPKjxMSSxRXKmMhDGEgM46w8bgHHYPTSnE1VdPZdevw",
  "key27": "5tUYze2duLAFxnEyvGEM3y2Xz1DdKGc5HR7UBLsEtRPkGggGMoKioWpDhNM2KWDFPA12JRbqp6PwbPE3gQ8Wte3B",
  "key28": "66B2EGCP5oqmupsCBHs99YikZUVMrAt7cdk8EMEFVePUg9dyw8s191oEvHChr1WtUnoSV1Yd7bF7cqXhJzyNBFMx",
  "key29": "5zxQF7zHUBJEZiKWgG3YbqJCfFsLaevrEFx46C2WL7B1nm7HjWqYhrQwaDZDbhAXTGdafNiaia5wmgEHU2j126XU",
  "key30": "2mdCU4vgJC3qEPDfycHTnrFri3rYoG7mP35GWodtTP39bch1gHADmcBhur1WnvGfwWadk2SxizdSCsnZoFYGz8z3",
  "key31": "39P7N5acb6kLF1VQvcxZxxt9PZm6b6QDpq549ZvrJud6hW2Z4eKBHfdGmNKtmthRaGJg8u4z7mLW3cCVSEfJuNXD",
  "key32": "3VcdT9e33x8DnSuVeR1D5bCTGxvNEvADsjz2xV2shkNmKKh5vRrSdaKMHMkkQKbjcZa7iizV3TZASJKeKycg6hEd",
  "key33": "2PvhA2kPk1Bm6hUCANh5viad8FKZ3WA1GvGeFEjyjUcKg7jVS4QuDidJsyoYAGznEKi3qdfQe3yxpcgQmU2y4AYj",
  "key34": "5Fz9zCFihyGVgei2rAz6hBUm8iDYFwPyvfvayEjcechH4gFwmT2hUoumNaKiQoktT4MX8GwggzdJG8hY4BnRK5Pf",
  "key35": "2R8DEDnusDRnWvpbyNWEesFmgpYcaBDsSHmyYPH5owQkmH36GGq957owpD64kYPufha9xMMBqhWN1nibTCEB6xPL",
  "key36": "5MXR6G3Yu9hbVdqxhUukiC7oidLSkPtKh87RFHpJwt1GVyp1kqEu93g7FNMsJNxWPyQm8gpgXNyEhxPvjHgrr2aL",
  "key37": "3ecaioDdn5qqeF1HPZWRw8JC4QKRAAigHFBagPHAiRYoriXzJXkPDEFaCiAYnbH7e2Pv9kjdSjaHj6WePhWK4NAh",
  "key38": "26f9WDHcZSsVSEaNhhsGVksfwbVwYYSvu3ocB2hCYpxfmoh2FtCmdAdoUEvV6qDAGZmDgusiTtSLpL1v3zKZ2yay",
  "key39": "3yScSswmYXyVgMFYrz3jkfJNxin7hyUNiEycZroubqBQb9uynuxydiSpTvcg33C25EKV1yzK6aUr7fQoW2NgASTB"
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
