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
    "3xm8igNUCsQYdqwdJDqj1APU2TbPdwp5d8YrHrtNC9aSKoNFyoSuLJKZTfroqrr7mSx4kQndFVbisE9VLHcniVPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "515msG5ybxiRTsnS6Ue4H1ZihRk4hSp3UEw5egKEuSfNe5EuAehSoB1U3YQ3VkLxxSVx157a1U1qakh9sjiAgZUV",
  "key1": "fwqiHrzaPHJVsWnMp1H2UKCLMb4MMmrp3Q4LrMFADfqwxZbCgQG4nfQV24Kt8aXhpcRJNdL11uUMJcLEQp8JTgf",
  "key2": "iXHisMkmJoS2k2fvaKzyVEYHv3Rt4EjLCn1M8beEe8fFJ5okkAmSkdaYS2Mb3pSzrEhYar35KUKCqs2jWcyYSUP",
  "key3": "4wZc4NBUqsdBVfcCbQLnjUxAeAawbEobBPbodE8YV5bp1Hxgy37fYc7c45vBNH6YiFoH68Qz57gghBXGqcFDzc3g",
  "key4": "446Gj4drmGPZmCFyAWEw7qn1MqqjpnUgFF9h1rPjkCHoh4md5Yw2jGzd5Wh2nM451rSzTAqopZH4JF7kykzBnAzU",
  "key5": "5kYLGirQaDAAaTnwNY2dMzAQUMNZrPAKDeeK62ifVyfPmDm2c51G49ioqr9cv5LG48hMRzfDGgjtBiF415HwAKmX",
  "key6": "TCyskeG3DMos9BxQZeJKu6dLnms1SBe94GPt5uCzZztEVbTBX4ngywabtE6cBe2W4N91GTziAoCLoAew69x3Uz9",
  "key7": "62TfS8kBsTGuhwHERRBJ8GqSCoED1EKk4e2wd8vQ7zCDY5kyV1F4hk3QVM6EQkQYWiTZG57iKM7K6RYYYdxT9NKe",
  "key8": "4eGPjRYFHMPyxXwoiRZKssMfz4XPYxVgrYhCybcrfcJx6QnjwfSiWtgVBUkFe3qeSr9BikeNEF9qsRvqbwy3fQQK",
  "key9": "4HLdMH8hboGAvdF56hGABXauVDQ34nvE7RNhj7B5cwsupvb3oM3gcUQQqpuG4VYg4URKK5LbKxcFFKbuPEUQ5UhN",
  "key10": "4Dd5zw9REy3m11NrQuJXbcGkm6yd5EyctzEGffoCkR8ASSsJVyyrs4U95Du14ssCGJnTHFCfmiP4yyowrAZ1Jkyb",
  "key11": "7vHkPfP11ZCAn8mwNHBjVYKejV4rEvSUbgitXmnrYtzht91nuwyonfvdBG6PeZ7S8AhV12ZuSvVKAyJD2phkhZ8",
  "key12": "4WD66YPhyw1gAarvphRyB5XiDnuQttTMHtLJo3dmR9X6raEhASfzRxVMcjktH1Mk5LWiaiMX5S87CvPnc6MD9yz4",
  "key13": "4tWLz1a1DEWSvwB2oNTHpj7Ap9U8FseBz6NsaGkQmRq859ukXFRDgarMyK62FdDsGdBJLyQ5i1PDYFCzYmqbDD6U",
  "key14": "HS9Zi4h3uxUkz1wNXoicvQPF4g23uqHHW2DSgDpxRUHgVy2pcHhH8mj8roqM8yCGqKUmHKthTv6GBvLo13HqTxU",
  "key15": "4Rmuq8ehmQfcmEPvhEJLu4XcLQjtXbnMPGK9ZfZedFWJtgMXM1D7gjE1t91uERQm6RuTckRX7uEtxus8Lw8LMcyA",
  "key16": "63TSWMpemYnDpfjxJgcWtCqNQZQaGTUegbjr7jmprNKmgCXUCPrrnN6VQc4hAzdJjnhw7FQyjUP6jMe7NVmFNg3r",
  "key17": "3fDEh37yQGL2H1neANDvta4x3NNJYEfQN7SgzgBuiPQft5dJuLDyA1bxqFew6uZx83LkkGp7Qps55DZDCUWPDy9d",
  "key18": "5NA3ZJvZUkepWywNk9n3yVMMksZmEsE6HtbsbghEcUEyETcUists6wVw4BLRaBaoJ7Y6EFNgKYtwgZiAYXnouyeU",
  "key19": "3DdprzsEgdYCSnb8eZRQieJFmeaQav9xv2DmQQPiqc9ozgshPE5ckRbcC2yb2PPjFz2f5h32KM8NZxnhoXSUBqrN",
  "key20": "4TSNzQDXeSfwc8L7xvvv2faVeyLLc8XC8Jgm6BvR4RGssdMVGwD1U5VZDHnQQjkfk5cgV9gXApEyS2fCCCs7nhyL",
  "key21": "4ZSbE6rqsysQ1MfBghVJjXDhC929b1FiLWY4PTAWmM7pGSdqCivFC1HFw17m3VDZJoLPjkUjbu6j6F2LBWe3pcPK",
  "key22": "3KBGZztSQvD1Q15QG8FAW9MXpKWFiKx5aokFJYLypLR9sWc7KBijT9o75eTKFaTcqTFkXq8PrL8uS5mfsaswxpeQ",
  "key23": "5F83aa1gADe645Bkwrqz2dmAoMRSd3dVsoxF9T7QtE1GN3MnUmBCVTc1QjwzcS4E55SMYtHocBUeza6KjismqFSr",
  "key24": "2bAA436hBmc6XJS5UHRCZASpNcyoJSotsKT3kLLhi8v2sEDYYfKyLRJRBUuk8YKWdmBdawwA1dV7T7eVAbvz7e9v",
  "key25": "43qvvu2Dmdb5vvNvN4BedainJnedWuRAFchSFT67jEdM6qGyzSgBKZZQsbqRbN6Eg2cdUjSobSDCk88bW1iQTd6N"
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
