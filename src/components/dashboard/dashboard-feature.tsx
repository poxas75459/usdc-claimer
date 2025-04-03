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
    "2nqd5Zrh1csR4DCNbJukLycUFh75zrZ8R5hzScRCzdgY4X5N6Yen3Ss8NLvkxb1znpN4pkd9NvAcd7FdPxdVh5zs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "515oFUEDHc6D5A2YRy6Sb85SbRCmxamH2coHnirW1W2YnVLHw18S3VaCQSfsw2uiYEawdtxPfXsqJjL24Sut1QeA",
  "key1": "344iASho2PBJ7RA9mLCqhS95dbMZ88YR4rk5SETSM17Egt8aTcLxr2NnKEGm98PRjpk2jpKSZaBUuzK9EiuGjkWo",
  "key2": "2Rw5KQ8VYTsT9zDK6EBVYvR12yeFzPRcsJkfSf8qSN1XrHG1BazmidbA56yFVuY7TbTSyfZLoCK3iznrcHHfknU7",
  "key3": "WbZVq2eVFFEkfq2z3QYmWjZx4ULDdGNs8gKLJ9Sa8bfzGEiFnVAUiXVVGqpru6PbPo3GHU8BtebsqKRcG5Xci6B",
  "key4": "4K5wDCLhyVzWNr5PzHj82NrZk3MPg4mc5b73ZvCqrHfSGv89KNApCmXNYACwcyvwpPBFEzBA2T7L5ARZrqAjJYJ3",
  "key5": "3exmgK8d4tXT9KyWPZxqhw9iKX7vi4stp3rcVNXraXpX75772BXbURweYUs9n4PkGFK9pFYZxC9WqbsqE3vjSWbR",
  "key6": "2x7wAVTEUgt4cF71UauYTrwZ2Xj4BjsiT7CLvr4njgCg3zHidyHWWNwFSez3wc3AavVfGmXUioB3XoZrGY9in82Q",
  "key7": "2fhn2mDgeiqv4Rb9DJhET2sLSDWStprvYGWKmep1xMG1LSfU9jpgGQftPh4t1D8anHcs4NPq9YqZfh2dmTiBe6pw",
  "key8": "3qQLjpZipwnakU2B4nbzcgHPt7svaaLaTQ6AdcTbShiaVKPJq1wMXDm8HFeCpbLdbMmme3RZKV6hUx5gtEkJzWru",
  "key9": "UFjAYWKZ9b6R2cJqoMDxaCLwiK3JeH648tjnARvKcjvpGm7RGvCgAZJa6GEW6Y4tbWLVVLqoAkYFKdYxAvB5gn2",
  "key10": "3b5Q2dFJEgwG6ARJqQn7UfvqLfp4AEhTu1roXtFRVGxEgeemARCtny8mqNpvwQEFnkaLz1K1NRv4d9dyD8t7YmN4",
  "key11": "8VtVu8b6YoVrRP9QoYBdaNsCVuuDuEn1CobdZKjJ9uUvUYsQaTihDwGdYYjh8k8vzxueYdp6VLtLwYgCVrHKCMm",
  "key12": "5cpQVqPXn2a3mE2VvF5FzVKjFdSWJsn2jwMrrZtt7VjwXxiZhvXCfrVkyjhy7AsLPy2ZXkKKvetbbYaykbSX6Nbc",
  "key13": "2mv7K6apGLGVwjFyCaauwUGB7CGiw8XeaHvLmSbxAju72YvG9dwCBT7gJJjfY1GoCq8MtY561dp1R3ewzUMEJQGC",
  "key14": "3xRFm9zadMZqAFFh8oKs4b9SXVQSKF1chsaRCSz6e9MrmovD8P1AsvfgyVCJHxf6a1fsE1CTSiP8uS7RBuapo1YN",
  "key15": "26qF6cLcR6cidAxsCUq1FBkKDm1F1bQrgDBLD6Cw1Y5ERG1fTnBcCCLtARF6bUFqyYsPPeihc9uWJcysnukcF4Vb",
  "key16": "3Lekvd9wWNjFKA8U4ubk4gxSa8w1UM7LJPyjRcNr3fd4uQWPAHSDY274WxLeTnYAG3hd9uxj8EAewPavW8H4bAWD",
  "key17": "233VqpiMYgBeix5JVBwtbCfreVuTyWnJ3v1f86CsbxvKrfAmi8ENAvGLYj9VJYnCWe92b8NP7BzgUhRHuxw3yPq3",
  "key18": "5y1PRBETBjD8W9cEUrCR9JT3TY5sb3zXteLxzxfLjWmCbeBiug2ptLhRQf1oAmtdYVbGXA7NUpSZjBDieWfTrqoM",
  "key19": "3S1h9ooRurn22NvfKeFS38icfUzmPLadXAMgrdW6CFxdWRDaeA5fraxBGEBVenwc3ZRARbAjoWAcamS6YSZPe41C",
  "key20": "8dYHXUH3EUAh4JMEv4iK6EHL7M6JBhyEZhqQkJhVrjZZec6dfjRnZQPyetv4DFbGcQHdMaHx6iEygzYY2KKG5EV",
  "key21": "3biw7auC4b2Qxc8gx6H9xgfyxNgQ5UvEiU4rzzuGezqvCqmrs5ttczj5FDugAZML25Shyik6kuyMfp8kWdE4qCNr",
  "key22": "5oTSxNA7PUFB6qWypH4ddfpjSHUep8Yv1RkngFkbhivEcdD4AfFEzxy13QLG94ee7hB5TeshPyxg6sAUz7cjGWd",
  "key23": "p6APf1APjSr5iEcSvVWucRafhbPh3e9sjZmfaoPeWjdmg8WBV3Q87C5UMSLVeAi1pnS99dC79b5JDCChqTr3eWK",
  "key24": "355tZbLKqCqwTAazTQfwxsM5FTbKT4JCy86mwuNpF2Gb9d6WRXAa82vkAnT7exxYYqvDgAdcNX1276qVBu14DxjW",
  "key25": "5swsNwkFTcA8aWNJmHPar5tPGDw7mMkLGyg29szmpXWg56ioPyt3ADbX1fZq79W2CPmu8V8W4cZAdTJorpdfkdzS"
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
