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
    "3fE3WaLGZwsZeAYaXG7riiC5soQcLa2qq76swABoYEtCx8jkCwMaMXAyekWNrc47nE7y5B4gshwMgNxNaLx5iPMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qYvynqKLFfPKpHLvA7wEW9ojXVPfPibJoEjhFRwiCBTE4m6ov1eq3y9EtXhFFqB8BhZxKwDH9HkN3QrHBEjBAPW",
  "key1": "21ATvAacYtsoBK4rfRhWSxBv7d1Y6PB8s3CYa6Q7aGnB85VkZjVetPjE6bqc8BZ7QLwSdAoQescf1bVRjgMms9SB",
  "key2": "35wmzQ8HcHznd9Sy4UAfzDtBiubj7gBd2Qdz2aUXrdaCXBvDeCVx7sQomQSAtQYBJ7Fw1feF4x75ssZHf3sDf2H1",
  "key3": "4zC241Lm2Lsi9J9zRFqSajEnPpnLpuFvhTz1bY4LyYAzazdtDiFcujonNd8e4jB37tyQTK9gFsE3ZA6a3EvEppdP",
  "key4": "iv5ujzjswoxFE2Zm8vHeZE9xKrPmLTALkFbu3VvZ8YF9gEjAPN1LG3hBzfSU6mQHKpY9cCvn6p59SvTuP5QzvPy",
  "key5": "4tyStDdXktbvnoi5MJKrMXxQtuvBfEcpKXuu8Dp5e5Ye9eLR6ZutBYjC5DM735hMdWkJZAd1mtgDBZoeZkVhbwsG",
  "key6": "5M1twKJvMUZJ4JDcV1wtnmyczxYPZ1wzWzqyi7FDsxQ34qeg9WTJPKEK82Hh9xZH3Q62e1Q1fBaCZKNeNcXe8bbD",
  "key7": "4k1FgXozzcvovzy7CufgotiURvKmH14wLNqy6zgGV7K1NdXMXuXRqcJP5puoMAi2MygycedshwuH9vTF85QDNkbf",
  "key8": "2dygToZWLLgX4njZ8PUYJeaBHPB9wpYkg9cRNa3rKieenLT7m4pmPU1xcw9HU3g7fV4NCvNB2nj6BjeF3u12TU5q",
  "key9": "31CzTjPZ3WFCmByPkCbFDHdexmDgQ3U1pbtvFqTgfAUKjc6bTLLHTDJWXadh1FSwDjRdjfKUTMRy9GzfoExZ9vrj",
  "key10": "2iszNmBjsURXhxXj2vzemQwxNx8zAM4K485h1gtdnvZ9mnZ5qaCXDi11FW4kt2MMeGTS9FWPvPDp3SAuLpivDHzG",
  "key11": "2Qxgta1MiEgh56Y7Q759teSPjsjTroBvD8WWELbmrdY5owshkULsi127aZARos4rRHn8cWYXBd7n1MEcsjHBAVN1",
  "key12": "3Z8u2bTNBrthP4xtU8FzNMAayrNQUWxNDVyhN4ZgH1iNowBnYbsHYitf3Bdwe1FpyVEPBtpPP1ibah6WWzUCF43D",
  "key13": "3LUNtqVpEZQ5rrQeJKVSwRrkB7z9YWeR9bzW8s6ytuvZcAVCV9snYvBQWwcHyXhYjDmPtcgzg37Xi8mNuEKao3Nw",
  "key14": "2nRThUk98dZ5u9WyWA9jnFdKDpXeF1g3qrmFHtjPBbKTXEq6Vpvk4ykNz2b4aby8GkWULetY17vUuRex7wQPXLQa",
  "key15": "62oguz7aBPKvebbrART1afqcK4PRJqe2kv4jZcJmobcR3EGG1Svg5NJriB9UTkqW8W8esVDzz9uqxpoSsucgNmzg",
  "key16": "D1b4YbQBRp9rPnHvbATgtk3u2AXPNNHoCNNrASKU7pZhtCD1i2CrXofCpk6Tbq8tn7nqnb4475QT9isPgsfwYL5",
  "key17": "2bS56zAHeaFJ5vKazySnBkUU8ePH5Jpj7qLNnNm5L8g4zZH2pigPN8GBjaWowTtGnF8p2VtSL4xc7jLHVRbJs1xo",
  "key18": "5y4dwiiG86F9EghV4wUkp9rmd9a75SziwQXNa5CxMX2jizmYPxkchwKhkAGUxd5CDCCLq8u3tsxdLFhDh5boSLjd",
  "key19": "s5f1PxncucQq2gFWSZFh7NVjjkufEQLGnWbQVduJ7SNKBiPeWzX5erdiPf62XBL1DC66ZCndNStnTvjPg5rFP1U",
  "key20": "Bki1McaFqGYE1PXKMte2ZnmGLgnHjaaWYDtXA6ykaLcskFWtNPYQw999K8E95UUdYMCuo5ssnvZSqzn4K6keE4F",
  "key21": "21cXsyrAggRDFrjxeenLPGwYPbsTz1QQ2xK2WTtZzEdgnNweuvxN7LDjn5TDvptdsSdQmSo7rszfrkkWR4e5W8wV",
  "key22": "4Pgc7qRMaCL2xvCTLJhP3oAX6sQ1cfwxgZwQmMPFMaDRajMqoKqcBiT33k8UCrm2jrfdw55cU3rhGwfBKkhJvdou",
  "key23": "3Kr5dzaC1txaLXujRuxAMXeAwxpKsKbNsnrdYdHjt7NybKcs96qsaXYuxw6XaoAinc16QV5dc8H4za11q99fs3Bc",
  "key24": "2dB8KU7vNHJqMW7pNrcZy1tNVuJxuAnuTpfcUfBnhD9M1Npj1qSDB69eBE8kFMFevHTAyQLcPn45TzDUnGUh3oYs",
  "key25": "2VwLcn6KH3rX7NqmZFuPaLQeCvTTzbWGz5CirWc9UPc2JF8NJuGokNXzShuesJ5jWaPPxYD8iANZy4wwn3U37bmL"
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
