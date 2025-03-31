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
    "aGFazmEzGqvRiTDKTGN9j7vVfzNGHjsrrVTcfpGYjHUKTr9D7V4TyzbTXQ5BbZtProzswP3iBXMTj7dN2E7mJbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XmfmH4spRezfo7xzAQje8BdDQZz4dVd5CDhBR31xNoqzWaZ4S4eNpMuXrYpSh25TKGqJWhj1jGaNTXeyPxppkNt",
  "key1": "5MV9t54mQChYc3Z89MYqS8RWMFSQQ8K5SVmttQmsoVzYkzqhBiH83Ubw5zpJCzLpEBGLArKcZKqN5ma2CbkapCYG",
  "key2": "3BTAkScQfJ3VrXxc6ezyyT1ebpy568qPaaJSw757ueD9F2PDipCFjinhWoeqNAMoXntbXCaXgQ467SwYjSxuGouD",
  "key3": "uN1cQTZFCu4zWX1rQfs5RATpqnVKGGpSLWq7fNvpbEZotkY8qumPKeg4cPshDBQn9Ds7Xq8m9LdXEDU917YuGZw",
  "key4": "W7f4ptVPkWgAwsjXgBJAR32FcP42CJKCpg6ox3eRh5hiJ7TvvCAGvG87Ru2XCbU7s9MAEr86WSetEoGBMhkUakN",
  "key5": "UDYcDWhZrQQ77CBmyoiJKe2WHeh9jhW9U3oLUuoWcUFFn6QYyH2FwhL5C6ynVrZDJFac5i77mh5VjReEHnMg5Hf",
  "key6": "3XkbJASmubFELNgnAT3qiShXerCN1fAM2xNxcCKSEKqBvgYVo681w7ZXTbc5GS9bRbYAsqG9JiBx2oATHufb83ha",
  "key7": "65SGJWQNMSViiWgTitPVpENS9UCBkdsEjwJEVdstS556ubXQeTZo6HdLC7xpq3FGBwE2Wdf1Hoe9LAUEhGcLMTvV",
  "key8": "o1pnpJqJMPydoMk1rH4FSDDdPmjWcw4LPLoGBRD4mQ1nARL6YLJmGBpWsxxuqeVj4Wqw1eKcmLkjjPhej2vFu43",
  "key9": "35da5iBJKYcc3cq7urqeNU3cwAfPa8e39tYQfJTvyPvRZjFByNpunony9SU4JqJjfQNYtZjT4L4tNiEPiCtwbatG",
  "key10": "2GZGi52Tv87SfF8bpDKHQT9nXutaeLwnd5SZKFZegFasusLUyFJ7t75GSSHFnccNf87iYY5YJvVVx6TYC5G2AYoL",
  "key11": "21SDgUoGrWKmL3i8EenPz4gZ7ugFDkwmTz8ChQn2X3mUDom1R9kD5HgvZt8acxS2JmcLoTEGtUGCp1qrYypUqyxF",
  "key12": "5eEP618ZYru7qxVs26XYBDN7ekQsc6E9h2H4fuxDM7EKTEyxJWMNpsqGRcBqX8fwY5y7WxtZAgCzdcr5tCYcU3DS",
  "key13": "22WguFD58FgeTrCLZF51Ytr5PTiYeSFUbx2FFxSvUDmFnQg3GYQGRDbPjZu33Y7cqMRhCf1mFhAejqhJjNrLwf2x",
  "key14": "54r67nwheFU3n7EQUuMcuuhnmzQQjpbUzFPBZUHZGwDakVbzW6rHoWPkYGCFdBHDYqGg8xHTaPUBG4NxXper6p4Q",
  "key15": "L3yiakyiQFScJAL9WodH8dYXxE5joUtU8fLDP8RY6fDKKHuQSp6yX4k8v6KKYGqNk93joKdheUhCfc7x9mbpuF4",
  "key16": "5i77imWGRPpxrRauB3N3mrpjrvzdTEfhzRMD8AyH7o7bqHuFZAGuCpMrq9PyySJb4E5fytWcwbwb5qV1cvssriSK",
  "key17": "3NTdGPc8JWn5sjb1nDE2NPkHAEfRzMFPLYBWxCnD9YUoizZ8PNqVRWzWgwhbpTyrKkhrVaw9H3LMKR9BW6xHD45T",
  "key18": "5dmZeTkhbtkZDB7ufUUwgVBiEHftnvtD4QKBQ7rFf7SgouEaL2i9ozPUWVbjzn6L8aVEhedE4jACkHkNwaPyNAED",
  "key19": "5qai7N5r9P78bYP6QHxDxBUv13fpMagbDDd3v7tr7NFuaU7MsHqvs1Vj6p9DwEP6dqSwDkvM3dc9wmYbEdjmCX7o",
  "key20": "5dWSTHTNgEwZYBVnDh37kUXdQjEuahQP1bp5fuiCzdPbydoTC9Y895GZcHFZ7B63wLtmZ55G47CyFtmLaT6Zpqxd",
  "key21": "46rRwk3eUgdWmmkCyx6GQWD9fd2w5NbHwMaYJJF9TTVtgmjkSjW7jxjhmArveQgTgFz1QEjJWCkYAk12fNUE4X7R",
  "key22": "RPskdUdTkUU7PA3SeYs429WAKyx3hr1gzc6wvFanvWJ4Z4EpJfw5jXasxmA9GL2RUNZVCYyi2dimTwdHgZ3XCuS",
  "key23": "25Mn5VCYJQJLeSQW7hV16HU8NrfzuSWUHYWAYEbyVbh6xCkxKpemwEWoskzvzmdpCEdF8BYCKhMeiG9JTi5TnqbW",
  "key24": "UhmhDtZ4PR5Hhe7UPi7zTQsTg79jPcz58MfAj2dXTTX8vispxB6DMwXVWY5b1mrBVXBURLGfssXDafrsgvRJx1M",
  "key25": "5NWDvMUNfeczrxJH7hHy7BaNjJiDeumsrbVcfDi1ABmi1pRdVnyVWW7Rdmh1HzvZz5kxFaZUXjDTCWYCR6yKYAs7",
  "key26": "ynGHBS1dF253trYx9K8LVQgXZaNdV2N7VkiAZ4YVbYeTnMkTtirqK4YfbXrqicyH6JgpCpwVvnVjtiPjKXLSooA",
  "key27": "7b16SeGSzdSxDqg76ZCGSAZkUCXAVp92cMxGzQTywrbz44bEiqeoFrXUphy36f44BpGYLbBSSSV7jRvMkJ8XXV2",
  "key28": "3JnDkX9a3SVLEC57YCdBfqmm4hNvKX7WQXfkz8cJMwNJxGWAGrcDj7eiCTrbQ4Vp874aM3Fo62maC1VBmFfANt4F",
  "key29": "4Cb7KHqTsoZq7YawqctwDMvRPNmogB2wSsLAhAdo3WmnhBYEBqWswDbpVqhsJcXimeFZDsyXESo67amfujz1Bo3Z",
  "key30": "4f3MWLmqFK77HCcw4cm5chmeyiu4jH1cEkDb1eAEviQCg8x9yfEuf2nVQJAKXJv1iysfLXmfhxLSXBBrtnaXirbm",
  "key31": "3ExBrh5QdYUGspnQe96fXTMGJcbVBKJRRvUMkKaFSZFNqjaa3dG4WKetsEtiBGBaVo2ETUu42pXYGq2Pqaygaxf",
  "key32": "5rVZ3aLPnMBsAsAioLCbcbJG7EPFpn3YihTAZb3LUBVf5bJCgn27m1vxpWmMZRdFBejaffJGiC5RjtgS33cAT3F7",
  "key33": "3Z1goE7H4cNJpsvM2hdXGfo6JbvoTd4BMnDCgLxpuJiHVqPbnD4PZVTzZ4a74dCWHaZvFGzhHEtzKXe2eoHBDdt4",
  "key34": "4BmNRTMpcxfHhmuKbhh6CKdeahgLpewRKj3EU6csp1n8PLNcvYZ9smh9NirV6XX17NApdousiNPuZJpEZovp8tQr",
  "key35": "36smx9JU7SYpmbSfXNQuSPAD1gBcgn9S3S5BjXjut15CHCk8v9dDVZzbMnyp5udVpUSTvdN6kUZna8Hjg7WD1pAm",
  "key36": "jp2dHrJd7yJWF3nWyEUNf9X7YWUw7Tmozmkc8EUgJMCs2YgrafBFiP2rudRFmyMFXUWCLVMN1EsFmVodnSeSAAy",
  "key37": "3HMFix1KcuwyxHcDr27eyrHr66rBGkqw6uFm4EQ3pknkm442UmrKvQubiqbbxYrCdCjzktsfBo4FyhPf9U556SWk",
  "key38": "5kjdMZzYPckhSMCFWY7eKxPgvcVj3kkEWjqEAJHyVSF4SeRx5U37HZafzJPa6NFeEWbNdRTRoiHxDrF82RhtMSWn",
  "key39": "2JNySxR4KhbgsEzc84yjTgKcsZZfuWExbFVqDiz9hSt6QpyLFUJWZ6r4MmZ5R1kYKcBLWR8SvRKgSFmeDgMELDFu"
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
