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
    "w8LpQYCr7uygmbXdeLxytRTwi3ZvYnjg8pxFk6E5gmquryYoh2bZzVBbH2seGDzUDjzc4C6vXFBQMARu7T8kQGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SYBjDjAWYECELsCa9QnAAXfAWkdocoCmL88rtTVWXWjcg4DijjteAxhoiAvsz4jT1ds7yb7eva89CF7zyTkYjLn",
  "key1": "2UfAgvhDf4CUaQGDQPMC2azyEuDfQx5VTQrFVDRdAVVz6Xs8wTgr2R1arrzv9HheGgRpjuoomwEgge1zENpaXmQ4",
  "key2": "5ZM6L3H2GqwvZ1bVAzTmFheUDtCrjssC4j6fw2iHads2K7jpMyZghBBAw5a5rm5zYLFd6BmmBunBfJTsMLbn6VZj",
  "key3": "2FzkXHQ8QtiFoszfqTKVgq4EvARra7HvrkNkXXg6YF5depjNGokmjFVRDptK4YNAio8H67NxMT7tdefgEFiBzJTx",
  "key4": "3iU5oSSQHAQKTYgwxMBYbHuDYbVjEZ8YH57UxKN9M6aVEXjukRHnEzSWkrWDoNHSQY7pXzKicc4bSuaZxZCCAaZm",
  "key5": "55athhZ6X9eQn3hLMs4gWyznn4WGfVDfKRUnGoEhHoFwWSPhqYHTxQ2qo3nuDYb9mXwfcTAnfXVHqh2W25RLmNvi",
  "key6": "4tof133aVKLHzCr8YA1Uc2wJYSgWMsDDWeFfhsfkuk9P9rSPxdPY1zk74Hu57qPq7A33fdxQYNMW7MPvicHkx4fY",
  "key7": "456ipQ7iuA76ZzBSA6ZZwteRSHVyspJJzCCfdRQmRPxbTBw9qVbdDzuEcwGaP8otaKT5JgFpySfozSWYzhYFs1xC",
  "key8": "3tGveRVaDUBZkmvDvmNkNghEwgZZJ7hePi51xuhyLBvtZTvKG8XzikS7ptdUmdDGxwErBoWaUgm4P3aD1cL22ftK",
  "key9": "5AWf19uiYeaEqiY4Lsqpfz98oJrwpgxVPqYv6cAi1hwncwsJsuWvN9Gc1fVJeDcyoD3a6wiuNrE5fjHJ9fPNseNA",
  "key10": "3AKF1L2mkqayzLbRFsBRxgqrQXyFDpxAprfYz4aZRnJV9of12FktkVN1myND4iXb1cuKTNMkB3rArBdejMRrM6dH",
  "key11": "5Stb76SfLkXEFBnb1CZ4tooNgBjYsteCC7N8GLGeZ1qoRrz6sBJvF75Nygt58ZARa9Kxmf7yZLYNXPNbB4rvyVie",
  "key12": "Ztkpneo2RHaJLfPjuegBLTcVBMxsn2Vro5F2trn6PzadH1htwsgksoDAjfyd8xnNJgmqXgxcK7sJQP1K7pK2uut",
  "key13": "DNdjRR1yhMFwtkga4STRK5JeDxwc1cNK7eFqcRR4Qjsf9fbmYgsGwEc7TWF2NQZpJbdUkaHNCAvyffr9LRLPHNi",
  "key14": "2HQtjq9uA9ox3FAhxy8qkdWKwDaYHGFs9ubYWVomwV2MhTXhGFdjGESNaPUeVNRprxFEC9LjwBGE6rB5Kfb9YBJS",
  "key15": "2uRAc2uTtFYsC4c3mEn6hJmrprijTfzKs1xjHRWoxVrDoFjaNh2fcv7YjyQgNiN8cWkr9MgKP7PCn5WAwch5MK7s",
  "key16": "59wFbgBB9FfRV275yZCUE5NGPwd1JDDMFg1kJYicFpFtwSAYgjamvQDUck9K2y3PCcXru4CVERKphtfms8bDUgEi",
  "key17": "PkiJt3aqseAKwLGAwVcRskKP93pAWbE88KXyCuMJwYVHP1ooqCni2SQFn27LDH8KHogEWzZXeTsyiFX8YoPiFcW",
  "key18": "3RiZu8GE9e1xD8HFwV37dnGFaxeHbqwuK5QgZLNtaN99mwLNPQM174jDAnXX4EyUvHPUiwzsi8jyveSapRzcEQB5",
  "key19": "5kDegf4o2eXJJ3Ubdq1wP7u4ELctJ7Fgpx9hpyyyptM23XoGFbrSWRXXkRzUyDM79oYtGAeRYbbrevyCMCzNt6LG",
  "key20": "4M9ttj52VFheogHqvvSEA5RR3HqHspu2bbRwsF53B5DD4vgxgMHGC7Wfo2ZTk4eEz2ejGzkZx5m8iqNFChfp8e6E",
  "key21": "4GNZYELgA8x8THX6TS17HzEFvufDHkzYw7cGUx6CSh1z7EiRkECoawcEEHupKbZTgZSG1p1eg8h7wwpHL9gzx3J4",
  "key22": "3L8DfMqvBsVssUPyyvMkzdu1o4i5kwyUFDhUCLJ3J3Cdf8Skf6HduCnvCBZpXZEfJLLP4Yfi77WEKxT2CvDNWQaT",
  "key23": "5V5xLsyaGzUUqbKZTwaHTkSbpUZRyC7ZKqcdQCNAPLnDy18T77gJtRxseiW7sWUNSdMmMCGkr52x2LrvPJyJd357",
  "key24": "4q4XRph6dFYHqcp8uCHohk5dobTQpQbusqeGZvLfNHduuivQZDwPh2dRYb4LgV9r8g9YzJu6pY1nuJGhZwyLsTbS",
  "key25": "3SA7hGgudMiSBVuxbNYKQHVwvniTJuHEbBo57m1HLAtqfikLc1ESAJfSycBKUMf9dRTThrCJPmPPvpAGS9jKzAwd",
  "key26": "s3RrN5SgA6WprbB6hdcVFCQVqHtjgW1pY1GoZLdFiNyJTMV5L2Pw7xAsJVQQkEq88titfHyFesH6RvQkHXgUtsj",
  "key27": "2VbrfPMSGisaRw9rBQ46zC9g5xPgTEDN3gqmvpyRANt2u3HBQre2bHFAo2wXBWXZw9hS22jNZpM7WP19zfxLVygq",
  "key28": "2Z8ZF2pGLchJnn9umESdHDRkRk8wk82NuA2xVn8LrhxvC4hWEsiDfwMdMR9d7wBF8JmUknu221bQ7Tvbp4SSKx45",
  "key29": "4juXB5MNLesMBtNsqVq42Q4bPuw4sS8tG1dnTjmECq4tm2SjVgffeZSVHFAUCkToomL2Q383CfPV9UfrNAzAe7w7",
  "key30": "36Q15aCVeK6SkTZo58i2cvzM9QCzkM3FoTFApsSMih45giwm54FacFVVDN9K8RrPxL55wLaarufo9Zjhw9XZLYkk",
  "key31": "qTp3P2A827ieCQEEG6iJEkLUHRjuULX59TymE83fLFUdsHbRU2zhSZPcRMKpSv5eu9gthxDxSdDJKLL41AhFrbF"
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
