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
    "3EYS6VYkN243s6CYsekHoVsohJG8qGZN2xw2EqqpeB75yNJawjNe8PMiuP7j8GzHMiFdv2HVfs7s9kaTc9WJm5jB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BNW7YT18r3L3cxkzrrj39hvH4qZZVwvr2PvvZf7ZJSxdxMzTwuLqKQL4fA1SjCfQP7ejDXgXwLiPq8ibPQXmDMB",
  "key1": "2uqH1hz1cGAn7pACPGeV2dyS7tBDvizWxrob5WMJ4DLFHRwrpPicgqotJcTYNg6e9kiEL99qz4SBhxewZPo2mPAd",
  "key2": "MF4ar4hWxM58MEqShry1CXSSJ1pLp4Vp36XEdYtSpuUW77ZB3zdgMQEdfHEo9pmN4AXRf9oz13Nq1eFtdTU2f82",
  "key3": "6RsWjX6WGSyJ9LcMfTHqmfXinxLq7RhTNCHUdiAdUZZpWffaqirvVfQnJZK2dNWiJZ4rkM3o6hDqA5GX5uw4dxD",
  "key4": "UFLRawG9MNcYpDfEms8PU5EuSYi5BnvUZdheYMgZj74kw6XFkb6of8iA2j8bxFwU9y7od3wGKkLP7rdJiZ6vdUb",
  "key5": "5bz1PjsEmaytiRh9cUtHrb7482aa6wkUco4pmgbTbPSt3FVQXvyvQqEjceutRAsLaWrCwfwGq77KoZEZLtr5XkEz",
  "key6": "GdiEzaaU9saq71RhyHp7QHwoQ6kgSE5Hk7iojHnbbdUabDgvWcgEPSLJDsfEFEbwrKHPytvjSmXwEWy6gLaUb5D",
  "key7": "3QBh43oSqE2K8N5w3DtW242GrxuJEA1ByUn41JyDv76verNXRp6PJxLmFgzRUopoZfHgbDBdUZ4qHLy6uZU2EAES",
  "key8": "32eUL81TfvMjbx7JmnJRCMgm2eMo4mKcpkb4aDzBFtxQUe1upJpugPMmV5EgvtovqMEuYQJULh6HnnPZxz3fvKkL",
  "key9": "4NMr6DrkHHTfAe1bb7MUHUt9ojTbCq8HxBkNcZtGDJTkGxaKGbMRoYHC3sSd27Rd7iTdbpveKhgejMDJPRWoxRam",
  "key10": "ZmfmjAxJbxQzDtwJpw9FbAJGhN1deHJsdgjraCA7EM4h24Fbuqef3VRSpQaNWQSDzgiiQuZYrYQ43au7fMd4DUf",
  "key11": "5s4CWEg5mZRwC7wsUnu1VU9pb1zG2iLSzHe5AMmHGDr7Cb8kR15tFD8msVd2YfqR1upgRrL87SgxPSqmrXaJvuV",
  "key12": "2dMcPmRuB4p5i8hLiUKTCDEKiLahWzDLoDFZK3ScefqUwwa6xS6UoHAc9k5PXE4uq25BESSHsXfSjJfnr7ZWwxcP",
  "key13": "57mDtN32pNmhgzGV2N46QXipaoC2zY4AyJYm8WhtxW2p9RsZ8zQP77Uif94DhBpHQ3yfBv6b2nfcWJiMSNodeHQE",
  "key14": "64BoiGd1hHoeXZAxpKsfRhzMM2HZRbaA3hME4PqYMHajQ7PxgmqZ7qZ8n74aFbM9Mj9Qibav6rZFXQhswHDubaPQ",
  "key15": "643BzPDCVHxx91sV8AX4M9m1oVLddTrfxHEvqpp3TBUCHt6WjCacqudAEoN9WeV1Sjoq4EUyPPnAzweop3hhH2vj",
  "key16": "66Db8adjChraZQLxEpvvZcWHbZeZfkYvmeNgihDo8yWbBKSFe6koEjjbhHmP8UDWqD5g7jmigahr5bJHdKkvCiow",
  "key17": "3K3oeBRHbk2KjEzhqXbV99tsbqQS2nDHYp9K6CF21hdT8CHJsU4R2EtgQta9ugeKN2fCFLCuPMNiweTQLYN5PLgH",
  "key18": "rv16LPwCefiUgTaCBxzDQtkpstWsGZvHsa72PeFseVfqyRPUTqnjUCJt6rNzXexZQsxBLp6sDUgdrFiqmAonxFp",
  "key19": "yvSqWsxm5E9P3JF3MKoDuTcPM1SVpQAa4EKkZ2xP9HXN6AXLmtFhMfaMvxE1HYq43foAcvdx9n6QikhPrAMr8oP",
  "key20": "2B7C4gEKrJMHmm67eqntyr6WGoV7W3V1bT3WUzqSFeRPJrFhPAwgVYa5nJQkSQM6Ayxu6uM1emStnAWVBUdZS3im",
  "key21": "3GtDPYSDSfQGGXSVKyBZF5zPeoAeUqGkaLKwdAi3u5X6GXypKqpPwJW5AEfPisUemGzetLkTqsUsFSZ5o7NdN1Bg",
  "key22": "HbCqhzWeZuwkpvVBsj5uMqKWQCeDBW26bvfU5ZkDc1uGb6MMBS2xEtnqk2Dg2td4upNxNMY2aKao11Uf8DnHvSf",
  "key23": "SFZPTYtaBPppkvoFKPjsoUBGVfzqM8Y3rmu1rngBxZKKMkrEwYbizWbRDYqAtqJXEoAjnfNprpuuvppCbfASBEa",
  "key24": "45Whet9owFa1VevQEJZBFtNnAs91BohtKYFiUcEk3jmX14t7PQq8xNMToxnDd3E2D5h48buUFiuSKPvnzphZRcvA"
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
