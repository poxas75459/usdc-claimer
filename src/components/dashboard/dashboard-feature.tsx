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
    "49NvkXhVUXmhWx4ajYJu78zN3Fw8u2iz6grtzLCe9n26jzLLqFF4CDJmC24Mdcphvt4vTacCSudskV8ZLK6ZJAhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fTUmwkPZKi58WitfwdLD2sBdneNwG2UefJz9dPUmt27m4oyHTXw2Fw7U7pEFqoXaFYK8YHAro8CuYeTHdjz3utC",
  "key1": "2e2HgqzGHymVwoMgufG1zxBuEHwAC5L9DB4oah3FLKGPAmqKZtBGqkvGhxpw5tGs9ZtjrWX3qar2dCDaSrT1nJU6",
  "key2": "6urgnWm3A9of8Eb4LgXLapF3GGhNvocJooVrDvyQ9y22rvpdhkKhZaaJDzuMGod5BvveG6g35Z3Crvx8Swy1YNx",
  "key3": "eYUkz5uF4QVq4tLaEctyJzyaEHF6F4Fk6ap69gThXrGTDnvVEZgiV2mSQUoY8eoojn9QUcdg52oTfiGTYQdoSyv",
  "key4": "2k4sZGa1jDp1FrAvDfGmzamXhQcFWfoiRMPSzEkY5oedGtHf6V5BRY1cqFKMoFrjNb4nrYDpUvLyef5uRqrND3ep",
  "key5": "3fL6P3up6RsrqtvjaY4T7CkyadAyDWGZ57HDipkpo9askADo4Z7UB2267WaqsN9YP4NjZ8LTzsvgt4nXbr6TSTqV",
  "key6": "GVPuXpd8B6S6bdxnRwrvPNzi36nnvcuLH1Sxr7UVknboYuqQciiiu33QxeMvaFNi9kukWxTVJiiRBFCV2xiEFce",
  "key7": "5YQpwVonpZ6YrW58hLCk2jDFbcGAg6ZcvrhHWTxfMsKZ848kMx7X6Sf4RJqZM32LKsaiiSrkgDEDrihFznNBfNnk",
  "key8": "2bpuxt4gcJVTwgNA1MmyybvC4wSDSQCN2ekkTQbdGYQaPDymhr5pdY5ZCgYDMB6PZ3xXQeBvaTfQ7RmKhfazhSor",
  "key9": "4JnsuhQiHheBZHmwbZTQBggq6LAtJZMwtVhGUnsBt98bhu2fgxJamki4BdRsczDYuUKW6wDeCmwjZTs4vdqaKTbx",
  "key10": "3cbs32nxTRpp5NVQ7fnB3c9gU5tJD1wsMUgkJ5Qo6rpgai6EtFGUbVg6PwXP7Xh3q5bCt6mowf9a9aJszKMcGWsH",
  "key11": "4HVBv9enu3S8K28Ew4D5hbj7ePTsJLMbt6WuFuYSnVFhVWNyPidQVBXTP8Wp8PtTPmvTYLsehrisEXLMAYTMoD9a",
  "key12": "5FVZeRC4mQ9zZrr3tyGTYVFQJETspAKdz5q4zHiDa2P61Vm1KV5dMC98uEH7V27U8at2qknkFBXEMCi2hVU87x6u",
  "key13": "2ha7x6MNwZ2JRM5WzedJWyQMdQ37CXQVEbdrRXrTSkGA6t6Wc7cmeDF75662qzgsLLajX5RD7LCQFwSF5xTBf7rQ",
  "key14": "2jTgbXVMWjvFoxgGX1ppQJh6pxYiDNvVokdYdW8NgHMSCY1TgTgADfovwU7GwWngy5fh9mgbBfj8UVy1MuPjpTAW",
  "key15": "2epFvQhXRWDsYrvL3sHGNpa1QnmW6pfzBq1as8aJU1kUQht9Yekfpe2drs82HpNj6JdDefQ1E8VkrxEKidVitTkB",
  "key16": "64yzTdV3kRphSsZcbAwC94QW6ZBsFo7ott5FdZbjZkdTBdV11RuGSihnanxF51tqvbxmckyFyWnuAR2ZHeV5TrYu",
  "key17": "RznDaa8aFzy5W2wRNKc2SnQwj3k3Fych9QARwJrsY3QnF4HvgbWxYnxCpM1CiRc3Nu2PzcvAe6ZGzBTwKdQRSy1",
  "key18": "4mYELiu1TiHJkvNPywH6Tqr6ZqaZfT7r2FNFQtyww9PYwVmphM93CTXQUXNn1Df7kLGSzepS9foJbJkaQAG7FmCL",
  "key19": "28Fi3d8cBuovBrNrACrG67cmZWCKH7SwCHeKULWExKL4r87igiDPND8E44hXd6mXQAbEtuwbiFrbw2Rb83yfisNk",
  "key20": "31Wk1Z3n7h77Kf3dDoHSKC4Q9fNUqWWh7JMqnisq5dvHkESEyjVVE3wAFtD913bPfPAwdeThL39XqJqEv6SUUwJm",
  "key21": "2Z8HScE7RRnS9cAfdLhLLV5hXFqxCGVKefFYtYEL1zjWvog83MQTdXhFkrEWEsWR8dzCRfJxy9X2AhXzisUv26yz",
  "key22": "2EwH8SYmUrayhqf1vPe4KNAXgfS1RZDniaFV4quqPxNhfruTpihkB9UqriSEftjiShtrxjRBywF2Xi6ZcxYFHoLQ",
  "key23": "5RBd6S2FpHiLLNgwk7LieE6fiFQvWRdP2AFA9MADnfJPh7McVfaMoNMcLV161qpT53hqMMHKxhedCJ4wa5csvBem",
  "key24": "5k4PJpjjDjPouxWmTaEL4gCudL4aPnYNWPUjnqsNLmUGqXD1jugmQG87xZMYWVE5vhVKJ8TEQ9nVpWTMAmdmsy1U",
  "key25": "4BAgEPvQ2pmmPKagNcyk8NypWQoZML6pcjsPpm71HqXKe4g9QMpTdHUtQ8HvhnFDbepP3G43bFSpTnkVR9mtaoGV",
  "key26": "5oiyXxZdk9emcnXRePUhneVtYdQMjq9iPQgvMzAkRRkzjRkZaWPoaePRbXJvXWkqpBzAa9QnGdB6RV6bzYoNwnMR",
  "key27": "34vnmf8NrMUuQ97Pdg5rX8zwaY8iWAeWhnXSQJrR4aSYV51kuhGcw4KPUExi1XTAXbD27dAS85R8KuDaJcWd1Wik",
  "key28": "49g8Nu6MJUrVSyTTEnJwmj8zatCgV1pDKMcAXFwso99xrXBg63NTnZJF242shEQjpNhsszkgpz1qTYP59XcDCF2M",
  "key29": "9fFGPuZ7pPx9F9gr8AE9N18Y5FjQfsPevoN3pSQGq5i8inoKyr56SijqKguh3Vbceg7J2jnxnc6n5V7efAWonWw",
  "key30": "2dqX31yCWLDza8aAvNiAhGedV3oz4peXVayikti3v7BzZbVDWLCjiKQwLPQbHPQqrCbYWgEXt4Zz85f4SZaNmPCd",
  "key31": "4YxWAALR4Mawnie6gFHCEey3ekATBzQiVg1XWXuPMqpmLRoJe5mvjgJu4fd6WTZhsf3D8f5RKvpgwFi7gyDcmWmp",
  "key32": "311rW5i2Bf8XPtMSq3DxzYUCME37bN9dkXY3YRGk39gvwvg58zyyoA6TMftYzzbE6cwxKvwt4jd2LrPzLr93VKeL",
  "key33": "57RShX8DPHtGhaypSWcTbnm3TjjwaaC8i1kwdpUmCoPmCZ3mREUpmuj9ztfaKzDFVim8d6qKZDUJHihfs1tqdu9V"
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
