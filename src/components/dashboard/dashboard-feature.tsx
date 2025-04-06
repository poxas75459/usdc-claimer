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
    "3ovkFgmPEmdW9xj6pXNZY482DzrtUuPWzt5VKK5CS23BizLV1gYZSh6iM2q5dcozx9iFMTWBWF8X6jEW8msYvDg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tKJgFnDD61tMXUHi36vp9Nsi3VDmKmK9MQTX59Zkv3PQwtaMCEqTs5GQJ367UVhHNTStfWp6SfQThYY2EwZf5mL",
  "key1": "47vr3me3SdTZgNWw4aREUpbA8C3gHCRPdubdhoqEiBHYGcDjhmZ6h1Q58ktd6Y8JFLoESQRYwky4VxY5kD8gspoL",
  "key2": "2AtG346EXDq32vqpAcAikpmjjc7YcWHhv84NNoeiS9WfGiEG3v62tJxb8La1GCX7PrQVocpWwxjZcepoMHrWQ3FT",
  "key3": "48JnjrU56kPsSX1V931XYfg5mnZRrhxXmj471aqewF7vBGiqXmZqB3mybt3eVwaRjJMreD9gQTvQSDvMJLXZ7XD6",
  "key4": "RgPsUwnVbNdiWnPbQkVCH1SbPUeC1y9ARHn6Bupi9hjEw6xXEKTxd2i189kznZSC8fFHESsYVmkkYwsWXZ9k84L",
  "key5": "5tmVmXc8k9Dv5YFbnrUQDiFQtFy9dhSLd8tgnBqg8FBKtVvgF4jxJYCj55N8dmqQD7GkmKXszjQJGJtp5Qj1GRZ8",
  "key6": "hyiDZ5ftQFZBgqoTvbXtnEo23vfjchKMSCJq8EDP7JYMnZ85gp5R9tpKVs36vEMmUy2j6HvjoPWzJjcd1afmkJq",
  "key7": "5g5ExZCVAiXdtEAFfLTNHLP1Hk3CXfh96FFZzY9JF9cVDR2KJF1eAULLmwLbv9C4Ep1ZvMmP116WW1qeNkVPZznw",
  "key8": "u4FVzJHGssmQawReee9Lz1AZdvXpkR4NnosL8tEx9BxXUm498KEiVYnSsHvncpAoDsvyzXhEEpCBqn1cBsQMzpr",
  "key9": "2HrFU1djpgWphUbQXoSVE5gh4SWDTVG1Ge32cczWcALMsrP5QybcGA6nivY7ykS23f6BctRUM4pi143Skyr7Kxg4",
  "key10": "5FF32a5WgrDVeDco6BRUq4Dxu1QZEBH5wmFx9pugbntvrqKgNWgKZSUBz2JotzwjkSiT5DUvEjGig2xdTrTzeVfc",
  "key11": "4BcuvPBUgRTm6Kwo4cg6asXH15NykjF31H1mzbsvhPMTT2sPixTP1wxABCNnn6wVmeWNiQzPDTT5QrJEsWhhdFp8",
  "key12": "2khn19hfULQSbMaQtY6i9EwWHxr3xagdD34FXstDodrhEFKZTE1bvftLQx2zPpsgBe5zrK8szrHyvbvxxKsHR1g1",
  "key13": "4fZiHxrZJt41xwHfSF2whPR7P9pqMiwEpLGV9xUvaGg96A5cMVhAdf4pcwDsZ9T3ornXKdPudbYvd3zJQhuJHoCG",
  "key14": "Dix2SzmMTwQvMqysof43PqHE2YjK8W7DmFUFwAbsLJeftrTmzHHmNXEd29Aua8fo8q4jpgSYqyafFemwQt7nmk1",
  "key15": "3fkwKe5SWtbPuf2qF8uBj75cerzwxLyPvjVsaVJxhqsTWJuPAUaFdzNz18bqoQn6vBymwPMNwnWJWHzLXeK6kqnE",
  "key16": "Rhc1sBj9YX6ckLagKLKVaCsgaHMsBSGr8F5hPjFLSqoktPwT5xVMSzutX3dKcecvRDpt1QFEyEreY59JiYEQ6Y6",
  "key17": "64KciZH7BJ4GMMYS7GR4kTfZA1381UsdghnPDES5tBvJKYJRWNfDLTWyppWGg6AL3pyf3P3RitjBUHNbPRx49U2C",
  "key18": "2Mtwt68DGrFAW7Sprz4YtR4hTetbuNiqZob2WE33KDpB9SrP3pokXNRqEgNgRModrv2gnF5dTaHXxLJ9qPoXb443",
  "key19": "2L3hgPnfxu8iRgdNqpfjbybSyxvNCQMXG87dvpgyD4Vki8c2jMsb5BMG8yrH4mL3W1AeyyP7RznYiC1hSoDegpd2",
  "key20": "3FoyXiE53jEZamJXXY9f8QqvbtSoNca2yqehXGrQrRS2cHLMf2A2EfuyN3HRiWXxM8sv3VziAdg2cx3HZs3KtWAu",
  "key21": "4TTxKMVJaZTVdr6ksTptsK54uG7WxyPv3eWPc9gNEyUF7915j6rseZgofaddBpwuw6KRxGcySFrDJQ4R475MSBov",
  "key22": "3XegK3WEAErKxLbUksuAzDfVcbc35Dmm8dBTd5ieZJKgs3qJrmZGieNcQ2vcDSkXSA6BzmG72RoNyTYR9jiNwFEK",
  "key23": "47RvBqCRdpjid2EGBXBmNZ8qRn63qCGqP4Ym6eMcx9ADhv2FPYX5VN2DPW6mqf5t7DQTBmZh6FPignBqGZ5SSTxX",
  "key24": "21XhxhqQNPbmuU36bZ75WNnyJmTMZLVdmtT2g4kW6PLTVLVkSRAi6wHJAc2ihi4h3kQWucXe3wQmUF4KsLNkt8eC",
  "key25": "zuLXzdHqg5pLcjA8511vtwnXx7vxNXxvbgAvuz5xUFVBnesBy5CdUYUGwrBtx7cDKAD2Zd6HKrPHiVeivrphqie",
  "key26": "5ZTr39s8C4y29nJmUFndtfvDD7k3LZi7zjhQBwxWHTfvh8xed8PzdoZfqe8EjJNp4gUVyy2jyNM8ZU1vne4uMBgV",
  "key27": "g5gCmrtSg9o7wqYN7SyPHjYaKyA9P6ksRSGSsJhrxa5urumqRDF1Z7AYkaqeQAPiJNsMh48C9uHRPvSnoEqNbSx",
  "key28": "5Ppve3mLRHdQAnStNqhZR2BWWSwtELAanZxkkCjXetAnhgQEkBrDKEzG9E4kMHqfzegY4rFtmmyV5fhz6MmBikTW",
  "key29": "37rrEcdEpsuzLVPYEacxXji3yYLg2mdBvFs1RvDootAc29hivCWuM77fCbP3kqQvqij5irRLTphtRkj3PU3M1jZg",
  "key30": "3pLZWgGsSTbUyV6iZuuMRr2oeHwjEXAXJ2Ug4FHJPoZJspLo4fUfSGa3XUUjM2dCxomfiBMCibAzQ2xPFSFMy7wg",
  "key31": "4gMevFJQgpzPU1DLxrZXrHGwytBpaqtpUQahHeeSQtrXU14LUvGpnkVDykWZfUthdTmHYYJg16XnusXSqzH6xRQJ",
  "key32": "2PGpkD7gzMiXWjt7p8cjTez7Yb57AmxgeJnamnxFB94P19piis1RQK9wj7j3f3zhPjGMHtBQpYe7U4DAK4nMjQny",
  "key33": "MjkxmZFhSk3uLRVthTsAXWBSM82r8Krq4EuqiNJx8f1CVE7WMjLA5LKc5NMzcibavWNEi8Pse4jU6hgBVrHY1sf"
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
