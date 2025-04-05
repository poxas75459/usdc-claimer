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
    "364W8oC1eNmZNPC1sat47umXPKkRV3emrnQsb1ezPcnSh5KrRY4Z9p6Xta45T8DiSsNiuUA9FMBJEyEDMSc8fNUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fVZpkj4J15ia7nT7NJegbSf4kFXQQqr7faNEEcQuEPhJN11vaKuaYuDguoHymJNJtXzb6Bxzhcc5XuxJ3ToMJF8",
  "key1": "4yghtgV3WnZTir9LmJWXvVg5P8pJaSxAkych3iXGxwHi4t3WrxvsmW6F1sjkAwMR2VdVdSxu3H7N2jd4dpzM6EuY",
  "key2": "3HHxYAkDaEJcU8erF2pM1C75rdq5DTg1WdDRyBkVFKTJem95Nnc5ecoSN1frXM7cUpNYd9xSFHkajJqyapL6h6rN",
  "key3": "2FUD497ApbU8mNn1Y7HVMDLAY8JfngApWYE7gegjFGytfqfm8YGeGFBZMLJWLfdK66Zc7L6JtjfwMpp9gp7BsDNV",
  "key4": "31yX63w2UgueW4nmPyKXHvVuK3dbgPgiRNcyT5foXv1uznk51eLo6wj1EgAfWgqmPe3emuBRDcTcoRFziTLZEsqR",
  "key5": "4aM9KYzFwxuH8XAruQw9BU24nTsytKiZrhyUaabeSHsv4fvxSeuKF4hQFRayGwUf82eGZaDB98BWyeNLcYhFba7o",
  "key6": "3QH9za5pgAjq7s8Bd7LLH4DT16BVitEvMotXvGLHTsAiVtY5vQys1PEZFRSStDYo9knUiVr6DXHzwNScW4RV2mtt",
  "key7": "26qXpiFmYyRTzYkMFotPK9b7X2eBFJrsfXkhua4J5CsZrN63R8QYgFTuZVqJDWnZUXinycGWGHq3KRMSM5rDWEgs",
  "key8": "2kZGZeUA72i4bke3eYCYqbEKNNqZ7yWUz6JcerufPGaAihvFbpoe9JiyuCT1u1Purx5UEQ9st5zK9Nm93fG5ipiR",
  "key9": "BvJj7vS8Gx7bcaoPyQcMxeT9qE58NcxZoA2DQG1TMAgrkgRCYJgTEhEGFiWVHmFCvWz4tGzTf92FUk3oaDFXdGL",
  "key10": "2dMAPR2r7wBLvWZ6DTvDA3b3y8rpaykN9LZx5xWjV74C9gFLzPWB8MXFWHodG5S1MA1DVZ8tgtmGvswJufmcK6Cc",
  "key11": "5CBWzHuZPQTCWkHb5AwhzZXoBuQkL2h7Hxx1uMoRxUa37W9PspVmRyo3zMPeMkr6q1etot9ty4FdxQM39L93tkdt",
  "key12": "2RjFsnpF7xptSDb8m83rPeLsiQPDh8bEeq9Guu8Hgo2U5X7xL6UtSiNRy6DthSfjHd68rVyqhbfQrGqJaimraCrd",
  "key13": "4ZJxGfyqM6tkuRNamHKrNDB8SASXp12mycU1MjBFEWwNUPYvzfMUQx2JyzhLVdRxzNhKodH4HxY5aNFHsduucYAV",
  "key14": "4vfai3kXF7hpnqhNAmiZFZs8VYDouTQ6JmXKErTa7HFwhiebHSA91nJ1pqJE5q9SytsE6ZpaVeicrfrxfhzcVYrw",
  "key15": "37gH592xY27wkjVNgpUWBS6HcrqRjPnHzfVWKDZ5kf3uNsRci3Z3MwwhokSESbjbHRH2cV3ZDxejsjUivZy9zmuT",
  "key16": "xq2rwqC1jgqm7prWZgqVgLdaNyLjmtSx5LpZHsshXGdoEi2WmUq3jjDJWuhfYowEwsF5HeFT3VHCHstdQwLNtLd",
  "key17": "4CPgv9CwjEt6ACkUzhYwqaRjWJ1FDM2eY14kvehT6Z9B9bqPUUPDyRkKH17YuxHs1wF2rpFPF4dgMBuQd3v5XJNL",
  "key18": "4TZJgDJzcyGtPBg7pat9v5pESyFvWQZ31SZgzqUdammZeTmD4727hJvESjJ2ZTEocsVg89zbf9EBmuSt1qPVXu72",
  "key19": "7nBzPsqKU7hbSCeSDDwLRNn18dZqLosWTU1Rs8wkZFk7ead7y5KBJrgpJR1zKRbT1FJiKrfHawfW4fK9sqDDKaW",
  "key20": "eWkRozytUJn7uTmXE6i6TmYAsQzXszSTPqmYjm5rL3XucTyoPnwm869N6ds3UTgyvDWG36Y7HMYT4NGn71JRD7L",
  "key21": "3GYZdCbm2FBPyXaJzJyh6FkDkn1X9ZZd2TxvB4YGZm56QZvgrS1VoxoU7Pk85wxaeLo96nx7pf1Zndrajg59qgUu",
  "key22": "4pPhmp55zxqU7CvEgAL3JvW9EX7ePfhbRwFoKKuV6BYuJxty4RNVcnnCTSXcxooAny6auQwAyNWRtpQCxatiTH4c",
  "key23": "22bHxU3a32WYfANt1bxJVWB5dDCPmKgPfnoUMkA8YaJQmTw8BVfNBA2w4Nar9bcVnBFhxKG7A8R7wBemJDpcFzbz",
  "key24": "1A8qfhKCDDmZBj5URmwgHYtuWnTxAZkt1CmxXVMe3LnnCZR5NzDDgmdLgBt7zLsbWdWJxc82TBgZwHVcCmTLomw",
  "key25": "2p4ifPXNi2SbMZTqwjoXtjufJL2DgAQfyoYeqCvses3eXgeD3B6bzhexTeMLPczgFQ6e5AYwUQcdPsjbmTyensG6",
  "key26": "23GtKZ3UC3ju1VMzYpb3Wpv8aTJTS23qvHCYzwRZAWFTTf34HoA71TaoJw4YsC21ZTxkMHD1FAyZEZ1F3KEjv9n6",
  "key27": "JPWsKejZvySMayLjCLRhyNUiywRRZpTmUEjhRaZFdh9SxGTFRDdsA45i2dewUCMoyGtfX4NsLJXmBbZ7Upun9Q6",
  "key28": "4HHiivGSbH5yLK4PTjCM7wMryapAXx8q5cHA62juQAfiMQLLKV1Vq4w8U2EixLdh5SJMvHFiFCSVYLVFB26Aq2pv",
  "key29": "2g7wcqRL8QKbvMBUzhmqLxNUmDeUSRrSEAHG9sg2VRSQQ8pr58ZwHFfBG7bqWFKL7wWrrnuQv9nL91No2FpLAp5X",
  "key30": "qQo4NLZbw5BL3jVXpybGxXQoKo3rEXd3KnEALyizMEohZFKxiCSGQ7zTbxjazg6N6VhbTBsBSvVjXjNw2iWSQ5V",
  "key31": "4cc1GrEzaeSC8u44zo4KBoPC5sp85zjzyei3ySMCCQ4U3aF8Ygsx7Mg5ZT22wVzgStpoHvdZvAWSrGPM3NuJjSau",
  "key32": "4XESQJk9cRHz6QjkJJZDF82dkPX5Ng1juLwQ4GmnkSeXgxc9fJNGdCx2dyKTqBV3cw4KXTkfg9ABmejAiHrh3DfV",
  "key33": "2d4S7ta4Jd1ZSXWhBnFSw4LcbtxcwRmYnRBfTEZdmrT6v9mHK5NJXtPfZ3jwKwBNHoezTNnzVbtehoHV5XXa8U2E"
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
