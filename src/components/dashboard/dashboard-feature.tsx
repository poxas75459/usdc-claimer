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
    "5sRrMyjwrYA787NgFDWZpwdgD9A5Siitv44VCQ2L8mRSUZGLH55uHdApYRtnPd8gy8SrRPA7MMCqzU1gigBpZyF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mpMPGL3rcccfEfaQfyvFyW48v8zRd3JNBrhnUx3ppdKicTesSYSTxCGYaRLVrj6oyRTEtLX272vcSGQjxXVA7QE",
  "key1": "22mJGtoZagcNAfiB49FAZGPRQBxkUhEP26NK3ZQ8svnJT3G8413hqvGxEgYyu4J1gZf92d4AgQk3vmCd3rQxC2Mb",
  "key2": "2PtomoECAkxDDQZ9UTrVx2r9aDTy6RGyJdtTM5xEUwTgTHfcda3R2HfnWY7H8gfGpvN4Yvvudv3gSGfbdhwXnSBY",
  "key3": "5cV7C5mRrZMHEy7dBfZC5t1y9Xc4XC8Mt42iktnwaAw1HyqLFXFJkzU2VCUXJnUztwSBcvPpoPkdaYagsdSjqx7a",
  "key4": "UYYiXJHbAJznuxbfYThww8d3Cp7Kq7g645zwxRtBgh99BWrysgbGeFmJshvvQcz9n3Pxk9nVjmDJGJ5dPJkCsVC",
  "key5": "2wEGXupZwfvg6bwHfuAhFTjfCqnKPNyUtZsYVkPaB7oUfj1zBhHYEvPzM3W9Gg2YbTtk1VfredrdcYs2da6kVyYE",
  "key6": "49LjFKHPrN5W4s7SJyzmzmxa6U5An1crPTHNdVypuP2W5oMKoaU6oFNPNQAptmSEh5ssEE5Jw2p9gQqrtU9k2U6",
  "key7": "3q2YTW21TcSrcyXZUbTr1tA4JgQ48wzbPuNdjAbAcw8YZD34UadY3LCxuSmo9w1iWSa91yQ3psgZWGxswzyootKM",
  "key8": "4cjvGULsJgE6JJpmumdTorM2fb58Kerd8TQGmXbizuzRZCccsQCyVYuboSr8z3wvB1jSCLnYHiEhBSRDD184Xjsa",
  "key9": "4uruZMRN9tPNUcfjXJDVPA6gd1gSNGvC2A8wZXDwQuqymvedugUP5VCNJyo9cCeht2ZtCJL8VWBzhkK7wJkMukK9",
  "key10": "ehqkARZM3NMjQrRi2VybDVReuYDQadi1LFkhb2amNXeKtqCBho6heGT4Gbvg1ay5YnqeFTRjVL2K6K3Fstuanip",
  "key11": "5HJ8CTqkzsuyh952mttntX9hHkGHp58m1NtANGP6KtWZWK7ogdVwZGBjWUWMEr4W1H1m43D9kQn4o2pq3NAxzmPR",
  "key12": "5u63bCqigPmiGp492A8zcAcVnRXegCQwZLjxB7yvUymQGANEc6LZEW8n64FGVmWy3xbjg1eAzrNqFYEsQhjxtgNR",
  "key13": "2zu7MyLgUJBqdPYijuebq7gPKVcXV1YL926wWodgPHVSF5uWXz1NfoEustPi9n78hcjdPRx5ZxE8F9AZ1nx43aQA",
  "key14": "jcK34zhrAqXTruJw97BFj9u56bXn1o6JdYWxvfVNvh8Qxb8vBWCVfJRi48JG81xo6xQazCYFf4H3acP6e36cqfV",
  "key15": "2eMcg7RLeioRbJ9fCgs26MnQtFxYDsQHGYxduTaaGW5129rYfJB2XeB1XLd2LSAXnkXsPCcBDpLvqeT3bAo6Tj5b",
  "key16": "4MYNkC4jhUPnZ7R18hdRNqGH2ueUF9c4vtXJmBGbsJthkN3nZGpixWaWoGxrDyAAAxWeimizCC8pBzQv8t6h8Ht8",
  "key17": "2EQaNHhmzmi3EXDS487KLwpJ8L9mCwVBC4ArrPPUatew7hW8YGPuRmzUS4DbeZThnBNEMBGAfzigRjVuWKry7itM",
  "key18": "4zKRLKt9zUd3YKbktSjVnwBNyn6bSdfiSdQRPKyYGdULav6jWd8VcwxqKS7aWRzSc5sdtVo4DsQPe7xuU5WMRYi8",
  "key19": "4bpR7Xw9nXSgBRCgMH4osjEo1mdTR3kboW9HBHUb7Jh5gnimK9g14bnUdPQQyAmQXHwrNQhWsZk7q6aziQmCXjf8",
  "key20": "46enJTqtZVHy4bsoVYqrqsQ3RkLij8U4FfGJNJXjvoU1zg6op8hGzNK8kxRDKkJi5KVszJrUJ6ctit6nuRT98tqB",
  "key21": "3Q9RAJAGJ2mEF1nQUTiTb3B3yGZwDKXyFtQ2oxaMmNrVuJCbGsH2rc6XNK9GabMqHxXeD6cPMJB87RLwrsU9RDcX",
  "key22": "5FzKQQ9o9MhpPJ6E5ZrHdh8x5mkUEGxB3K1EHM5Y14DEYKbacxDhg1cWhQVR4FXrhp6S7MNxqCofmW9t4ugAQdqt",
  "key23": "4AfM89vvxPSDRNDyaW4shPo1xuwDTqNzqdU7HSSTY1B5hQT3c6QSidHy2qadoKwf8SSv3ycySn4jFW8bq4wmZXAg",
  "key24": "8ptBmNsq1Y1Z2cmm4PJekgWP1kBTorZzqTVzzNujBfGns9xWAkYCvRK7ZvshmQ7CnmytUyVf6TTzUxQcXCzotDS",
  "key25": "2ugYwXDPvXxocpPE6ZjEgehd4EQzRR9tFuKaJwsirEQbp3omCtVndJKveio14ykWzSzfBER62m3NvZoWC5ZJqxxL",
  "key26": "5B5jsSozBWQouzPymMMdzkyVwxeyCyGfTdDxWoS9Vna8vtd5fFeHNDkDymxiKLrjtdujLgxEKD8ZrvAy9Zs1Gu2h",
  "key27": "5SVJ71vZ2Cca2g1n7zqRD6kV1id3gE89q6ayBF29KpdSs79YhxtLX5V1kxQjzeswVKHQNNX9Dsyfgf7C4or5Gfe9",
  "key28": "422fQ34HoMNBU59rNsX4kRS6BgR7U4GyqnXixjAEZRXiiESapP4rCr1pQMP8i8PnpDkeZ8L5tAJ7FgWgLvVuUaKJ",
  "key29": "3NyMY9PbcqZQhX1uthfJsfhX8SjEbV64FCwCAQwoTXAGc2yxZYMDcwwtKvrjM7U2BejrJELeTk7pvqHFh5S4ixFb",
  "key30": "5nuHgkC3UBCZHTfnf3tDsgUCS5T4tyXvvFRjbcoCcfEDp4YZY3JXQxx6hXf15vX8SZRNWjM3QasLnMNkdsxKA26r",
  "key31": "2xah8WbS3U9eA7zXeUkzAx4gyiMX5ML1hsycJjr1qsmpBdGjgmDhj7RdnmBSj7ESnsUHnqZQJ8A8CCwZvad8M76d",
  "key32": "82Sf4LYhf2725tstZaRBbk4EPjZJL1Rt4CJFMKkZ8QkSXJ824cKiHbfB1bi388BVYVosqQ6TEVhEvJM1L8XNnm6",
  "key33": "2eaNic4bGYiZ4EDLL5QA7Krk4dsLhxad4ABYHrdKh1dhgZepNmxVZMW75KoMUGcgHmpoFFBvwobjmzS4uzcdCVHk",
  "key34": "4fnYhF7LV7C5k1bV4yHKJRUGFeSZheZxijvMbaP4Au7XN76XWpEAqtst73QcuYttvjRM9cH82eyLXgv97C86Gmn4"
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
