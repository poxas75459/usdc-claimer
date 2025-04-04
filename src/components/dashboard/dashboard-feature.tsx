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
    "5YFmPnAY9LPFwK1ZQYYxgGaduPc6JHjs3QHEXt9Bt8TtxhyrCDyD1R2qcFtaaSnFMXuei3JaQDKjXz3CCXBrAd5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u4u2SfteDa9WkooUCuXx5W5SgCaaCzkeXxNSJD5VmKn937sCcH8uVxqq6F9NWt5a6zSEwHBzL4NdHtXgG4tsXmu",
  "key1": "cqzNBCfVWtvjA7m4aNSossg8CitdjtWZo1wtLZ6nwUMuiRnxHnLbMnxfX8CmgAJKquvbL1pfWVW3yauFdhjpwvy",
  "key2": "4MAAAHDEPvUegLT7iqpuwHKzook7BimfHqq4hwdNnhwGUCJ6hEm7FwxW1eV2mPU4uwmKK1HWJLUi4QnAjaAM1Stg",
  "key3": "5zCLYs5Pq4CWovnfa1eR7Bo26JKcLSPKVuAdxMg8YpvwWmP9Wy4BywKZD9jbS3bwr4hnVUAxw9paL8hohEV4vfLv",
  "key4": "61tKKHDABRndj5LKVzdYsCTuC6WHdYKB4RSmXKdywgET1YMvNfG95ZuqGZy6fQJshVHNaqxwEa83ZU5CP7H3V5T8",
  "key5": "xK4nLwhZrRERp17JhXLcWzkAq31CKPrD5tdVt1CxTc8mtTCdLWPSMJPXryqZ9jPRq4z68dBTbErwZxZw55Rf37T",
  "key6": "2HQjj4yzmKwtuDdqLbtKZEvEskF17WMeocn6g1XioukzqdQL1RxhkQdTnTNVeriaVJFYNrVzByKtUKfBJmALrsK",
  "key7": "2VGt45TEzMXbV9TFiC5AzBGSiBwhvjfoJxoDW61zVuj1s3FEAEFNXXBhYCSmYyDnpgzsGD8x18GpQb37Wv1fyrBw",
  "key8": "4F7hVYsN3pzdrGMpWuP2Qj46xRKYaKYRSFfr8prhKX1kGAVyXXMmaHGcpZ76jLowFP97J4QTMv9TCy34NKQ8dpSp",
  "key9": "37FsVo9hSCMyu6ckT56Veqnzadj8FFKBFdXJxqrjsFZKaHr5K9gvEGs29hCDWoWLFrBvp5WNxsADNN8BLBrJYVgg",
  "key10": "4BT9dEe8RFHQgR7ve4mAT1wcQhKc15tNuozcqDWjFfNYjs3791q3waN9mAWmcheMVZdPdaE48c6j9avsD5wZpFw7",
  "key11": "45FQ7xSJKTCNmkrpZ2NtLXQNJDiRYFcuUvWNYUL5s95TYxSvFzotjSjf9JJCyPXr4kJXZxR1G7UtkVWHWCBoiM9Z",
  "key12": "jBfZuWvj9gRxmq3bH3yY88U7yFEEeRABSFPK9ME6Jt3HS9tzGoHDFenfv6d3GWaDrRMkU5bMgY4HBiWfTzpyC6u",
  "key13": "3Z4SH9D6R3m7FA2T8iXeKqee1hNn9ECp9xEwTWeF9sUiTG66aYa9gpQzvFqJPDdefXrYVdar5iy57SDp15JMmAHg",
  "key14": "5HkmkPqgVaNPdiDbBqYKjsWLu6uHqmsr3CZq8E2vmJZyyHLvM6CkPAxYTGEWjVzQrAX48P6KXwSi3T7wKASiNtbX",
  "key15": "36K2PVZDEg6sUANGoXZyz3AR5bxGmK9ZnjUsdtNFsha56MDgUox7ZDcgYGK7rFob5qA1BpFT2vuCwCvnXbDvWiYo",
  "key16": "2GD5ge2gXVQareZPdVjV1oSYB2k2mQbxydiPQqap5bpuU9dxLH1X9YLH6R2H8rZCnkBvq5mzwEzsgov2cZ2FhXJF",
  "key17": "5kMufmZgs5wD9SZHMXuM9QUzdk4SpVfy3BvspNrbtgpZongxD8KfHFy88ZGS2wA8zJ7Y5Kg79Fay3sPwNLyDxVg3",
  "key18": "ZBReYsJeeaQxUA2sJ3hPDnkNxN33dRhKcTQUgmUnGNvd9pox7xwX8Ure3o4zb1cHCmUPbuW5Yk3bRzhuw4QNV3x",
  "key19": "4c6NMuqcxajDsSGddcqiAbU5CeLsgiX3YUWGvvR15BYwDjW2s27xyjtVknBFyU8Hre3GFd69mzTKvmodt4iBMCmH",
  "key20": "2gp1AjWEay2r8iFF79vAp9NQmoKPYCX6xAsQHnj31oM5gaKNNCERJSxny5vkgqEGt4E8WPkkZZKCnrUoZKUXC9Y5",
  "key21": "5zRo7kBfsCWvUiU6ZAS25wTKjNe83EnguTEgnQrSCLevHpDo9JWuMExrfvEvqiG43XsQEGCdXpRiinpxyM2xYBPM",
  "key22": "5GRCcaawvy3kMmrUvpscyyJxhSoo5xAb9UeMYTHt9EjruhB7PwmMPXpdncm7UzpBiDVc6U9TZsMo1J71GRbsnJnn",
  "key23": "2f6vhc6cy23jv2YbNawuRTkGiF9pK2UHnqShG2Ji3tYowcnZ79bnxUbxkMRdBtrUApBW9yg7suTHo8hBfRjfZgZR",
  "key24": "4psCXqMovUPtisn1H4ZRfDBp3wpJ1KeRkkNuXeLLtqp8kvji2xsHpWNP4sDpmwdBB8dvztNZtsqysFKZ3TBzdj4X",
  "key25": "x7W7WY9vqYpYRHBBe3wnd3NPtaGJCd8f9P5UW52MgkwEvbtfQMD1sv2pCe7pqvuxyJZd9hcEHEKUDCJgvWdrvr6",
  "key26": "5DFuXSGeePP6mW1HjLvqHLPoEgk3SvvLN9xrYVpw5XheZk9NztfE74VaFiSY6Z4QoXWnQ7nwb54v6uLQF73gWvK9",
  "key27": "4gabAFZtkxpgo6m3p3HanH2UMfaAeAsanjnQU8kJ8boHZLUbiAKAHEBZ3dHEf1ngey2KBwcaybHohTovsHfzWu5K",
  "key28": "2GDyWtQeW536zu4NU9SAJ42S4VVnrnUPnauYRYiCPMan63RtCeAfQwfD493vsZa3eTcegP2sarV7ckB3a2NPX5zt",
  "key29": "61iHJfE2H3ytMKbbyEqJ2oRbPS5qAEhUhP2aeDxAxuyPgu3iLFWGLrhPrqPFcD3g5jpbV4YLTJ8Z1u8mK83K83LA",
  "key30": "4R9ySrNVjZbQ3udrvPyLdZ3RwHPqKaddUXhKyten27DMfj52LzHoJV5HueE8RGmuQo3eabc1da5s6jh929ZAy7CV",
  "key31": "5t6eHcq4PKt6YHXYHkau1P5g9SsxjuzRqeFPV2WhPqh54xM4397f8pjGzKEoDdxsVW7GeYVacWg9GwiHEo94bj7T",
  "key32": "5GtGXmkUZDowFK16YG6vozB63vb766pUWXsBrt2Bh8y767u12bHePGS2ZPUjc8xaJsWAwxKXXW7RV3CCRtQGcD2b",
  "key33": "bPkFP89mFSRbueRNKeqbRpfoPWPR2GmQCLpn6J8yCcSwgxWqr7tNyVpc9JDGxt1LatpiGJeMUKUvFybDJEuYAgN",
  "key34": "4wxvdKcx59EQug1hM1nna3TcEzs1HQ1rVzF55LUPSabqU7VeALnjBD8ubWaPfA5HF5ED91NQ2edXNLsaZAPpSDh6"
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
