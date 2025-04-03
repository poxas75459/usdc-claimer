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
    "3kPjhNLy1NN1iXianct9CZL5QNhXHQMfMtBErog71KDAafXMk9M5YGcHLUzjCLiJegaLrtPrUEw2MyVqZJ3reasx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LaFyUWv9pAC3MpHYpur91U1uThEStogCspMBMsH6roGQMTaZWKLyrKrjML76drgcw7Lxp2zGCfDag57WzWUUJKd",
  "key1": "22SxqcaCPfwcVNvhc3gbqekV3WkwfVmNVZTQjwDqNWNob13ofnhPHmkJEgvU8VxDDRfDNMtxZoq1t1vXnJnJ4p6C",
  "key2": "4Eh6gCuVDJiyikuuGP2cLtqAkDRyrzFPxNjtUxoJD37gH49JqeQV7sYLbX9NTMimDFsMbcfzmr46DwG2h1f4TDbN",
  "key3": "2EHZh3U1hDZrYrWn8f3iBWNYoN9VW3KiYZCuQLQv9G5V6CbRWkVWhfDa8tbBFtkdFSzgguUyTBBLa4HLnESrZYVm",
  "key4": "3quQ91yKUtviZVzUteBGLq8FuyLAtWUCZbXdExgxbkks42ZjqNoD2WVy1kqDghtNdmd9jN7NfBetpksE5GXbxWvU",
  "key5": "3tVrrt5FUQByJZKhzPNxyZQbRFTKYAzawtibp4bfYaeFb4ir6y9YELeHDT6jAni14fRHMxcJsMkMNWwgBhY4eNb3",
  "key6": "3DsgJdWx6HX4BBVA8k1dcLHN9ucSruAqU3MXaqob8uwDWg8y63ZPevitp8DDsVXxekDTabXw1UDQQrK1Re2wCnMt",
  "key7": "pPqh6XGCZbEok8XVNTFkJptnNrTYF4Lwg6QxRq7JFDbM9Cta1saq5dvNcrWqxrsghh8k4hjzRn5NcVjTXSJDDcD",
  "key8": "37cdXS7JkaWpweWN5SRVPSAhyAS3YJdderR97jLrTtS2He3YfGS3Wh836nvor1QXd6EppNH2YnrZeLqccBmsk8VF",
  "key9": "5c78ozRNEhWCyXBn9sN7Lirr2ae6qEWvEntMGo6yY69nEbMQwpJjqpUHjAW5dj778ikm3s75GQCWNUgvmuvAux9G",
  "key10": "hKVjG3kBZPLV1g6gkgdc6wvvbX5gGVXjoR1S4SP7ZBSXzmb5Zv3UXHdaqRgtFFqLf5j2zBHqiE4dSDr32hoiyFN",
  "key11": "42ZQAo7PJ1k85BMroFEfCFsn32AaebCqW3Qzh6UwGzjjpm9D8Pv7zkGbwDCPLYpk2hpw9BK5bR9xjAr5HNcnd5nr",
  "key12": "5K5Yger5j2ZPRsqkcMu5LGPvx5dHxUutCnTuwjuQLCwTgp8vkJb9ggsFsyArneTbfogu9bCssNiko1psCDzGFLZc",
  "key13": "3PFpK7jtMTquPJKGTJ921MPoddUtg3j4xsyWifSx1UYbSbg5bUT5eMqVwQacVC4qqTkCbwfNXG9HaQ3LxN9AQmav",
  "key14": "2PXKNhMV9aD2e4Y7j6Seorrgn1SPS58jUbFphhpckgBegTxnJ2qdbuvdue2mECmf9xhJbJiQwMACt8QdKnrNzUTc",
  "key15": "5WGht4jX1AQTY1bs4aMaxXeKeHrPs7zptJGg3BrZPDhtDYaS5g1j3AP7pyoTbnF55LMB4UiRpLyMiQDvDsJFLkFG",
  "key16": "26KdH4f2HSojnq3RhhFYJ8UycHGW2oacXRUowsKZgjKFNgWEVRfZhgGqXWZtjTFtncQNwcwTzxpj5EuPCp19Mgz1",
  "key17": "3JA8ifoJhN8ELeMp3jP7EA5TU6o6pRkxpqpbymuHnCnAYEtRhfb5uTr7UWhcPDGFyQkpSYtqVgK2dJY1rT7ujRQS",
  "key18": "5Smok8X37TUqpXAB6VNm9MEFPGBt6wJ9bz7oLtFdrgak9b13zNrNGK1eZxFanC6AjFRuxmsdyazZVpCPm9iSKrQa",
  "key19": "2wArcVa1r9hZLNaVWghcY4k6bAttoyJhsA75knPZymvw9uk7skb9S2MRdq75Scos4jc3WtmUc32JyNZf3pY4hKTk",
  "key20": "5ouzcyS1UZnRhCRTFgD78owxjQYoS8LqadvzGSwq8wkZzuN5XeafUYS93gfbnyvFhLwGckboSYvqgomcjEcLn4Hk",
  "key21": "YtcfPiXwYzEDgv6KkLWyVTncW32rzd24X7BDWLAaG566RAZYmaqumHLgKG4EUz6S2TpdeioGv7j1mQktdAbSbVu",
  "key22": "ay9SzeWyeX2AUDMDWTp6emPbjpqaHXoLxoUE4YCp1xvpx1px8hychoDYpap7Pmh7FHmNHcVhF5yCZranXVtrxFz",
  "key23": "3PFGJXovPfZBb9GLfHnu8PjvunE7LxMV4KFd6T1erNJtpxTNDeHKuqwWLqwtWBmsH5mUZgk1dfH4aq3giHHLJQZm",
  "key24": "3CEpCP8Y7fkxAYKhoa5NeJFeCuMdSw7NaQqMFVVL8kSVTARiCJDdwkRWhYzLoMJhWWaLHvSZJ8dzZRi3jjiM4Cjs",
  "key25": "2Q4wYu7dTQqBEWACsBHvCZaDrMCh1f3JS37CDCm9vR2DoWN2NWcQVXcPBN9uZFQmBmND2dgmCnr59FnVzojNEuAJ",
  "key26": "3VUTFyz3VW9nhWLMMwZySEMSuTWLChn2sjfwr5wjJAkEJagMNghcajXXYcE5CfHuBByNaMriBftkH2iehm6hcwsq",
  "key27": "4wmGcsDyvWkXRDpDF9J59LidbJaSQyQMaGo1oaUx2w76W4WufK8bFFNPxxps6udx5hAyPgYKgTe8bv4kCt4kgQn7",
  "key28": "4BtN5MiCKDXikzAZyHiQE6uaP9Q9p2CgHf556zK5VHKF5yxe3kBD9pnh9EBpYpDeTJEtvBbhn3ktbUU6T43C7ivp"
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
