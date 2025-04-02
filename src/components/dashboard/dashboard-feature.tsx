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
    "3saRZZumKRGVpaDUCmXvqYpAaiGvDrZALxivBAzK8qNRBvLgXQ1M1XPF1V7KUvKb5ZkeS8Z7SpCnWhusRrZuVc1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "arMJ5UGnQhVtJ5ofve9jVKidXryjA7QffdRJX74XWad6G3HMwMAbceNokk7hokJGvwNPtAxGUrKTBXyQM2UUb9d",
  "key1": "4wrjnmpBAEL5Uus6JbqbRfP5k3yHsGZfbmM1VospocxNkZz5SZb27gNRtDJaKTY84dyVU7uViwmNuE8144j3rt5v",
  "key2": "bNwQqy4CnK7Gi6MVcSGKUyCaE3j4QQNogPZuqZYNqTAbvQR99wFssvHJsfSQcCGDcwfc43g2WEBFqNZ6tYF3hZT",
  "key3": "3hBr6CvPmVvf29zTfDiRQ1E3QvZXMVZb1mNNWhTX4vN9WFVaU6hEkiku7H41LhjsMDpvYpQ9ZaW4xkxBid33RDBC",
  "key4": "42FwVV3TUjPAqDyy2S6a1PnBVrDJGRZqvZ8zZh7n2TTjVh2pvu61Q2uQfkwdan4bYtEvBdJnobYCXPGRtWHvMrRn",
  "key5": "QcZCrd2hL3m8vqSmRDAWweVFHc2KEnUWEdo5xK3QmSXGJ95qGGipaB55zkFQBM7oLzy28BZ5nckJkDNhwVfXuiS",
  "key6": "5DerPy8k6ztpcnRRSmjsN4389tV3StQY625nC2n4Dq115GK62G6pjrtWQwSJLAk2Q3unC9LdecfxFf66kyZXpT2B",
  "key7": "5gc3c6T7F4i5MPJwKV7Adqi8LFGg5LGz98bAXszGFqu9yrjJCWnBR6XkTCFuuE4GTAH8kxKmhjv6C3tqtYxZ7sRF",
  "key8": "4iUy1CaVyMRhiTMTUjGRCbE6WA4YUEXgJX3D9V7Z7MRmnbmWe3YDFy2R3RcDRVJgkHWPmt35cZp5wXXFhnCEvJqe",
  "key9": "3txUrv6ztZVZnF4TNfVXb7iLLiXpbFaJHmkFoPy4VSNXbotsfuw2UGFbZGbPTSNU6wpDuvchfh6fzvn5qhidLoA1",
  "key10": "2RWh1oMLqtmM3SWGBiwmuCMs86LqjVgKNeS1ZXckPA3RZkXPqfq1gfUh77ZLe5aRs9u6cNqccKFfzi2sS64huPEn",
  "key11": "4eWAtBVH3pfTvvvoZE3yM7A34abwor1imLuwzNzd4RfoT6xpMzKw199UW2EjZo6EQamfzAoc4Y1TR933goDV6X9j",
  "key12": "48FLtJ7RwZHo1h6hC1o7ZRxEQnGTVCPcbFPr6vSijCMVLADiVnDXaRHiFdfUboxLCT2SrqBxJe3ZgbcvL3AhVtuK",
  "key13": "41EDQKzZgyEM13PiV91XFHzbyxymRoQkPsUFuF5noCZKo4qMBJxK4w3CGK1r2HBTK3oEXZFN4uFC37gZwV8Q4FHH",
  "key14": "4cypajJUZZ8BHuqFBQxM4aRcNaswm7YLs7PMmGqh5su5P5agBKgQEjQomngyBo24Qy35mBijJ9kiQYBFEPZVwjYa",
  "key15": "2YZeputWoSMcqGmaPKqhH5woDps3Axu2z2nGo9iPcDWKbKeTbTx8hNCQGY86WTnu663F5CsAdevVSWHJvpuqVast",
  "key16": "5MqceMYowADQDJrtdjE6m2Jcxk3TgeNTUmuqwLUxpENUteFmZvkGYyjMtrpSfxxhxDdeVumqy8wAWysMc9jkVGzg",
  "key17": "4Td76FovsTyo6n5s1SzDYVDGeeJUybsAdPFpp9SLuzSuX6qjnXJ8YHCePn91G7tcTkm8qsz7Nfpoy7r9DLqM13iA",
  "key18": "2EZjURQjkaRP4rZdfWeZCb2c8mNkKu42fF28WED8qYncoAFdrR4agkx8ThxPz8wGTDeo5uMFas5xjM6Qy6YdLL4Y",
  "key19": "4qaXfG5DeJ65gYgtLadV8p96HqvFrizAaRad9ne3suCLu77BvuG6FoaJAigxmwJurhDeRTo5raCNALW1M74msHPY",
  "key20": "2EGbeZ8yFpDKbXgBaW1fCHu5gnoucgPG4Ziyd9UPkMgDJKtkW4S2xbKEVEpZRKvvCsedf1jG6WzdgcyydNZmdnyJ",
  "key21": "589AiqXKMdeQy4gEaGQpB22X8dWjzT2EBCP6Atn6BeZTeSKLSp3kNxmP9iigSdG7c166o2aR2sS9k1R4vbsAEkmi",
  "key22": "2b2qQK1BdcNsC3CivBXnnCCnwGfanAK2RHfAikyMXPSLCPrVp2FCJmDRCTcd1PfiCUnTuiJh7DhTChJhYwfuyzBD",
  "key23": "5b3bjoM11Dq1XYj73rLmFVW8QYFjzXo1f8Z6CRHv3F9YM4Wf3WJLaUDFd1FVJtf5ZCAXwm2jgBB5wCZjnc8rs9jB",
  "key24": "FjJ2a1wqTeAa4QBSQqsYwLUCLTXk8aiJm3H9mxj2StkTAqXAp178vhG8hyfLQyg3DqQYNxV46oqD6Xy2J4aENyA",
  "key25": "3GDvxGk97HrGadW6CbQZhgvQsqpwJP2YqK14eJeB8mtQAGoyx5Gz4GRXEbQzprxoNBpUjQQYEduV9a8YbbrkFXJ9",
  "key26": "5X9k8X8WDXLYzTGsmfFsAe4JoHaSspDBS4DfS715H7dgDChtdd4U1EhA3qNitrJrDwMDYs75sxgBQdQP6hz4rj2a",
  "key27": "pFsH6hh1scjmB1LL2icSYchaPbLgnp43AZnbQPR9iY6rLDo3dfkBJD4AD9q8hGENAHB92CD4FyHhRb9ixtKXNuD",
  "key28": "5h5Sg7LbwTnMwBqkwTBn5ooRorfTmBxbm1whGuiHjSPWB7KTzvTSKi72ScZjC732KjrQQ4UDNsmUFDKwB2cB4qJq",
  "key29": "5yjh9DLtDCWRXvs9ViTYxQQYSFcqHrXDNbZJ3ZjGbkE1YbK157ESTszuk2Q84Ltt1TgtPGVCuPJiBy4yCTor6r27",
  "key30": "2NagyDW4cen2ZkuzCaGfY5yk1c9HpppYwV8DExRNS3vCGJMnMmv14xR6ja2FFiVAKfWDByhqgk2ZurPQn2EJn3UG",
  "key31": "5WUzh9R5adankuM9wxoSHMHHJnfz2cCsDVHnmqBhRmEYudf1x5k94Rm4oAL333KT3vDcyzBKR75Pqem2bx4GpyHN",
  "key32": "4vm1pHhULH3L8qZJeqgDG9A8T2szTKHoFNwnP2CtPUw9twcyYjexDb9dP7yE5WnRSNkZ6UpqbwwwMJGMKyeTp2LE",
  "key33": "we34wJuUha6Me6bCGkZGjbWBPjCtuMTXc2ygxcYRqCg6W7aVBRoyNZVFW42yQPLtgLiLe6QXaKK2vW9qv5Fmwbt",
  "key34": "5gPQhv9yUAXK7K8aiRBpt3Yu5zsAJToiWDJMSYuJVbNTD1TA1SzNZy2exZ4CEwjBygRgZCvTez7Ww2quVeauNiwJ",
  "key35": "5z8xUsW96WVGbmPKecF2XqdsDzpr21kEHSY9hnW3XfufvwjGk4xrNpMFabWXg8ZQZPXf8LCGPZ7ZLgN4E8saZQxb",
  "key36": "5zsE1uCDfBhFUSERQcz78ZeKSfB3BSpepf21BCDJAJB23RFm4XCkZB4qcPT1nmFnpug67Bdr1HJPF3ank7gXuQsS",
  "key37": "2AhqGEUKbhTRRSMTrho8eybFDuU8Zje7912tQ2Yac9b26Q6CQQ5oFSoX6cjUY2tPt7mgfEsiZ6dYvjQ54HavaavR",
  "key38": "Ck9XGWPSh9KWjub8J4jTcXPin67PWBG2pUMJkTwRaCRGFLpVEUgiKJzR4s1cq6hezRGuzT2RLvxNW5rWcwfRFxw",
  "key39": "5BMAUqKS97c9DobqygHatWV88tBcbUzmyKPd9DLjKsyKea8sa8tJPHHRrxkhJJM9GwsN3ckpuGsDJycGLu8ihTVy"
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
