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
    "4e4L2pM27G1sHs3FVsMKWudttEXCiA8sMkuCfzZP8vSXk3rvFeS7zdawPSSBGeU1GUDxfUx3qo9mVhMqGLmZsFGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51tJm39HYduYhcG8rrqJkpoNBEDFoo5ZVms5h6JYhBcRY6LEa3bPoxUJ3rMD4HwDabNQVKAT37ci3xoy4M2gSwUV",
  "key1": "4op1E3A1mchfNMqkU7aHETWUTZyg1iSCfR9dmDhD36nKzGS4eFoGPHopNMG5Vf61CDXpqhZgJSiT6qs9DXjpfCbc",
  "key2": "4BuHTKL8eyqppAAKf32bE556GeLvUjYD2QkEQth9Z3UyDSnA7wLbx6nJqfEyUe8wAfk4bu2mmsxQQmtixG7oEQQD",
  "key3": "2bPuFghaGjbsUb2fmp1syBw2kyc4LcZDt4cbLttWGsCa5x8auHrxsBuKq7EJ3WuAfWweKRUg7BDyQYRYi6UuzwDB",
  "key4": "2QvsQLCHmXXUZvSHvY2CYD1E8VfpJSNgccCHPJRd8AopHtLSZ4LMhiPaHmLCgfmcX7m29jHxyrtdFyg85DVBa2cq",
  "key5": "3ojdm9HgXiEoYJ4Aft9w6KCohv74T8maTbH1iLrjjEANQuTDd5kZvkBXzdVTMbb7wJEauLjQeCNy4pdD3caHnx3T",
  "key6": "3CqsoKWgrgbc1J2tpQArnSqvNQZDJNoJTjndKVn4j9qe8Av4tUXYLfdUvDFV8J5HiftYy8s6ffeshibL1RWdTw2X",
  "key7": "2edKXcfzCDgS4GSuxXKcfaWrvmaXyPddH7npfgYEgYwvmu5n7UmggjieQ1cHjJeqXWq7pzR7V3Up5Pv5GhZD8s4T",
  "key8": "33ccUN4j1pvTBCqvAKbGkLfA1BetpSsAB2AWGzRHg3H7hkSpREsGPchXVySKeYkH2P2F2k4wfmjzPLksHdeRw3AT",
  "key9": "3RXZ5MziTBfpBwmrRNxEJPsXK932KGuAogRbCaLoMxmKv9T2UXMXzxKKpoRtKzZ3QHPtopHoGkjejHSLYvpmTRYZ",
  "key10": "2pgCUb2MvsNozZFa84DFME8ECWGvAKnx5qG645wUJB2eCncYnymCgHx2LtjXCoi3fyqpfZd23mo9dvYJmX3d4mB7",
  "key11": "3NJxu6M6QKJ6bj3Zww9GFjpQrLUpWkhHy8Di9BSR5RYLaWWDTFMeMs7z4WT6Wzg17JfdPMSmLEgxowVTvogSUzWW",
  "key12": "DVNeBKsvsynSTSNFj4gBs55e8LZui4Sj4MFdzx4Hcjq3kJ3V3KBRykj73CUpBWAqDEN3kcLpNNTCsHLSZEC8SUj",
  "key13": "7aQ1UYapsWjHH1zaMxxo7n2EDzw4oJiJ4Gz17DmETNN2dUShxR7Jni8poMVtRgwDsP4NpYDtVTchvDjnXzVXV3Y",
  "key14": "3gZ3EV2MQzn3fmgVDCh69Q2damesoegSi8mK1xgSYY1ad53d2wajoGTeRMUCJCVonJWQjHvi9mPg76eCBTcMpYKJ",
  "key15": "43Gc4RtvTxgHiUynNYV76kiyitiM2cFDoU9PeLS2wTznsVmQhpWdt56Gfp7Nhkhpz2bUaEJNqqXhAZUWobhn76Pa",
  "key16": "1o8DeHjT21B6ent2LGFd7Ha4X6hCvge2ymb9Yq3E7eAoepxfXthjPpDGNQSoRrXadwKZfGz5GnutF3JmWtvogXk",
  "key17": "5KDPVJXMKqmXgPYS48TgRToHLvhRTgPbKCgayAhSrjUeDisFdTdCwozXtxGg7b43aGTBKe6JYmF7jhMuNCwKySZH",
  "key18": "cvwLnMNcdFDs94GttMscENqUsRwN1tNsuPNoNJFsGBgjsjmyuGdZGKNZTQUZSG2NyMxGuQXgVDBtG2QurMZiYBB",
  "key19": "cjianpbED2izr8gwTT6aXHQPRcPKjtuCL7Ae5m7CgZEkai1QrTPpj7uLiEQ3iCn6pemsPu9U3r4yKhTJ6N8nNDs",
  "key20": "5TFAQyY39sPBzqDkHTk2Cpmqn8rR3uzhGnjdKPov5EvdB6EtPY966LndQqmAr7bH9pcQuBfeb3neCheTR59nF1B3",
  "key21": "2FuVBnQw5nMEdzdgCf4ZV2iFWHHriEA9hFx5xQ6qK3QUWsojvj44h2rFFcuqakvs8LJZXUZFKjFnvhneq8h2tVFQ",
  "key22": "5k1yxWjeYh58FC636u5M5BS21Dsh9U4AGWC3GkgJQb1LKwFst1DTbjuuW3HipPReicpCZbC3Afpzg576HGXJuTuF",
  "key23": "5RREj9ft4byoFYoNpgPfCFq28MxmvVQ3xaN6TLFf45hjE5ZjEpW8Ro38Stwnn94i1vv57JhYyD7hCiusX24iCFSh",
  "key24": "44TUXQWu5Wcx6yX2tg9tK5XJVtvqsqWVCZF1iJedLMWzxbaLVtBS4EVfhUzM4fuC2WzA4ViVWGzsqSLnT64Xz4wB",
  "key25": "46FwNLpzdNuSKJjeQHu9mXmyT5FD9VJtJq3Xg5P8ht8FRqgq85kCJ9UwQbGo7uMWAyZbLWoLvDekFdkhEyqeqDw",
  "key26": "4jbb1pR2n4VeDXnysbHVqDCag8yBECpdHgioRCuEpkjBQVqmcnRSVZK9VWaagwDgJCjV7LzwFCg9xSK1QyhLWcLe",
  "key27": "3berpWThGzftBtmqkJkB1nxQjrQcudbNLBuvg34PQMxpK2uu8iEMudFaUtwZKbriYXXmsEMc2VjT7mVetH6QX9Vd",
  "key28": "5d9gZ5eK2FTzJKqLMGCqF96VysCRdtg6CMvtVQEUUHe3qo6wKWzm8EKDWMLpotVkPQWCmQP624wLdGJKvvABqj26",
  "key29": "3NeL62CQJVYUwiH3yZpDJc4Mw7RcMWKvDfUMXxW8v8hRTdqqK1d4tZEdXYWyiRHwntZ7Bmu2Pr169angLRWtASQX",
  "key30": "5ja8nLoxjGksWsUa58fg8rKYVHBUQawggbVPTHcDesRgECeV194JnHigx9fRxnbACRbaPMrwjNvSSVUNevveCuJT",
  "key31": "4Za6hhKqPez24prEk8wjqsqnX5UKkRhfcMxiSSRxWBbvaPSwASCGgEGv7tEN3kZwySPgfrp99mBEuQLrbqFouBUK",
  "key32": "3uWVhWre7hGF4AS4JQUcmWuN7cvPtGs9jQGtVy6acq6y5Fap9aJNfJyzG3nhzrnuaCaZp8xmFoYYTtvsyB1f1HFi"
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
