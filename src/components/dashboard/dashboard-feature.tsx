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
    "23Li4VZwf1j3Nr1S2ybPJG6EAFVP5SpWCEr1fV8pJcmCatZNUkdT6DzYaj7u9A8V4V5ytG9DGUAuH7uZJBjC29st"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zXHeK5JhpA4dmBRvQMuHCL9tnDYjasYd7Xo7CghsFjoZHEaZqyc7dDebUwUaX1yu9en5hnPD1S8dNVNWy4mXvv9",
  "key1": "4DfBEER381TZXMtMFKmMCyjuBAPTBm2nXQBnyaB4EnpUfHsZPMxP4V8WwYp4WnfhAgS7Lrrf9U2SfCYJD7Su6wVz",
  "key2": "5KAb9bubUqLeN9qtGDcE6FtvtfRPwYJ6dDCb6yDHcXuw2RjYakixD9yTFQpFFiCyxv8ghFvts5UJwdZN9j1P9v6Q",
  "key3": "DbwdavPTjo9rdFcukwpmvNbp99G45PwVq6ucmAPyy7Ser3Knz4ogoVVNLGzMhXs2EK8wNNsaJdXTRxDfDB4Qmkt",
  "key4": "64J9Z6EjnBdPsTf42HX4dJwSnepRtuqDVAsZirSvTL6HR7YimFq3MVHboQXu5qHGvWCNL8xp7fHRino31BGnS7JZ",
  "key5": "5XCusd3a34xt9WTLzphfnxLtis2ydPfHp9MmJCxfnzLWytF4u6XcFg4vZgrXy2cEHjDtkSsdChwVT7Bh4wLWoZ7x",
  "key6": "huPXy9Q5KAGaRurWCxk7Vo4mhD9qSGkoSuroCXd5TUryx8NyiF69TaP21LbSGJ6oSR87UTjkvfs9q1ePAs8sQan",
  "key7": "4z71ywjNxR6xzbEoEJsmbyZw8UpV2UQfwUQPVvSrMzG9H4ZR2h9vxHxv77VWkD5u711ENU4cMBcLdY37KFbwkb5Y",
  "key8": "5yVAbdb6qcXHGHcno86BDxCCxaZRmZMMzyJ9cU5qT8YquUHkdoHG9WTMXEJPBTUBPyHC9znNgLWG1YYDHFs56uET",
  "key9": "2mDwgAynXZ5k5C3Mce86yF6pfQTjfKihGgJnLzWFs1LZiSBVGDCHqpseczCEiHAC4pqJiwKcUf56cPNaDM79d8uJ",
  "key10": "3xvYLvVQSt4NvL5jmffphHPvPrB4dbPX67S4TaYUuCJmjhM1Zver5cMkynVpDZbm1N5af2A47gkHb4yVYK3KqW79",
  "key11": "3qcyx7JmuLiMaPSfBqXm4PtJwtMckY5VQdVf2UCPvz1APB6cvzTkreixNEo72VtLPK9hYGpUWgtiC1EZHTSxfRbm",
  "key12": "5BYqbP9dvD3Vsi4Qa7YDDcnLhCFrf6VN9bMUndsa6jtHVaY2os33qcqnFCKr7eR14rcsKc7mPyVZPdC7oRUU7UHm",
  "key13": "5Him24tdmmxMzrSfi4huUTKdiKHL1dPJkN9L91DxPV7aRfisxQK8rHpZYSA2vVktxvWUVKqUytg1HWmoLLdCggWk",
  "key14": "3NsxGmSRGpeQTmvisqGVgJToKzNoQNSiGX7Q42AJvw5NWVtyuUkaUJKHyAU9mvKU4YQ5z4sSfNCYHRb7ehyLjdSi",
  "key15": "2keF5CN5NJhsTwZEgWTGjTgvpRVBGaPXAPptTiRZoewDLungDrZUJzwzhJRyg8NHdPVZPUUG3Umbks7UVpLKMJNx",
  "key16": "Aq5oei7jiTX6vbX7kJHGaK85CwKF2Jhvn5yjEDyR8JmWRMYfFMVXGmeUvUsYjFoDzhTsKgxT61Ywh58PA4xNFwc",
  "key17": "64sVsvPWRjASShtzsEKLQAtBKcvurA8y5Bt6aYkCKW7TN3dMQK579PrCzaghZEHFqHdE44RBcZqkNxw54wQBRoco",
  "key18": "3hQVuqXA2g9JKwgUpF7kW8xK3WRdKtALSgEoHF8yJ5PLjHPgeLTJhDeUbsMmLDZkAPhsVuXGLYZeZecrPe9L4i24",
  "key19": "2fsQ6MebztnanCyfamPTMYPbW9izBvq24D5YPYXeRZik5CeqG5PCP9BLzt2xXvGrJrg9qEXSXx1wM3ovoBsFzkg3",
  "key20": "3cijMa7xmti1vrjyV1CmNuv9wo5oNgxyhLsWa5qsbpHaapFxA8hqzNDnpY4AiJWLJftinj7Wn1AXgKoLricMjR3Q",
  "key21": "29LmCU8niwBDFGK6Mzn2W8Ty2iLGdHrBSLB6nY78ddT3ezT56r3aKXrRMVt4qpjeiaPrKephhFKv1dVMqVsQe12d",
  "key22": "5CrM9cTicmCGPv6YhyLXpvtWiERVGUjAquhH9nsYR9tsSCcinS1H2iRX6cMqUoUBHDWPrrhn9fL7xQSBfVxm5jLs",
  "key23": "3i7BfcE6kCaP9ZBcPWmxj6RQyvRTu3QLTe5i9CSZXDFQmZCcUqooKyaJQNzN7V9dVrfW8uF4vppCM79eUb2WhVpK",
  "key24": "2LUxDHZKgt9uXvFFfd6PHwnwfZQku9wxrdaB2u43ApVu1HkFG1CDGQWZ8hKqgyni2coDzS5yxzQg1gyJBonZkCPj",
  "key25": "4YmkmbSWq52sF8D61hffXxrrSAi8QtVoLVt4a6ZA2NjXNbrLKw99SyoJ29LhoTt2Tf9jPMipXgUH6CCRV9S1koLc",
  "key26": "5dWt8M1nGCWHqCk3W9UZtYSG8npZy2pRHigknNwYAGLfQndWPZj8vZeZxP6i2K22QBUsJXGkzJJW5ou934Fvksu6",
  "key27": "5Vz94PCggNMJkvJRZ3ed96vyWb12m1VvdvmXj8LYzpWyuSes3zbex3RR62iDtuX71F3Bg1m43hm3VoeiXDAjmSSG",
  "key28": "4yRiTQcG1sudas37VXevYtL1kdyECjaVgsAJQ2Qve8z6KYAYMYHbLEUxMEnJZNGDMh5ZpApeVrChPhLF2VUUiUzw",
  "key29": "3Af5M8KRStxxXrRfQpfCwMMz4HEV2DBevdtdp9H2SnCuu5hKSezuxJYrvb5NdAkAi75wXD9xyww6ewbP3HMt4sCU",
  "key30": "RnsxqKgWKxEfewh6tdS31ooNFsPQUgm88KqAqQbN38DyP9bzAZXMez7nnnN6Looe7snw269QFw85f4x4z13ooA8"
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
