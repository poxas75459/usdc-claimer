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
    "4yxSPd3fnNg3wh9YG6tvEoqjowdDefTE2ZU3a9fyi255r7Z7sqMM2YwZU9Bex9WERbtxAkbxQ4HG9RvrKDNrTUnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K4PTJ852PogYuPKVdZdatwJPpQYxcFRVS7GY9ovGam36uibztw5hPiTnfTskKSmm5vFSRDiVJNY4x8XUKsUtMZc",
  "key1": "2RU51V9FLcCNsA2BqCP8dkWr3hnz2SsDVoTe6E8WYWuMAvAyaNKPvZmBj2xstxXkudjgmmJwg4V7vohEj7wK1ypy",
  "key2": "5X3thZLgrCasvoCC17f3z6TWfVBjZVXnhkL7v1WEk9akAdwbKbUKCuYeePPnNKJyVg6ejjeiHfpRmatYXkeyorkH",
  "key3": "5MDPyXQ5C1AhucvypKHQzQgfWKbQ5Vkun3ZahrwjgHtbRe9vJLgnmaa8JpzMkchdMPSJX4e1y3gvTmAuCzd7uadD",
  "key4": "412ofgpK3Myr6rQXdYvnSyS9eFtA3Q1J9h1N7FBuYLWyASZZ643KmXPZr71Db4M9GJ7EiGnPvMacr53VeV54gEpG",
  "key5": "5AFXzswwKMGR9qoYEhvqh4LXeNApyW3VGXYo3McAfdCxPjWN2Q7uLqg67R9GWmZDpcAie2aarjnBJEVYrCmy2nVZ",
  "key6": "3XVChpJgh1xmPBwG8XqYq2wboyNvzWoiPGPE4WCEL7WKnUC89tMP1A5VCGpiF4Y245Mz72iFhsh85tgJ8hoG5RcH",
  "key7": "5Fj5QwHsiWgCjsUXdqMJTzCaKRdBwVZxBQzXwJouzeq5WFRtFqKPVRNc3niRvGaqcXnqhubhZ5Xg3KyGEjyQF6fA",
  "key8": "5qzGAvit1jJM6pGVpMqA84JX5xsSPu5NjPH7h2b6o3M2zxtCeQXyYxCt4WffsF6HZRo4Qx98utnRUec7dv2gGyb7",
  "key9": "64CwVMR6dTzVD19GD4tnCgVAEoyLG5GFDBfj77BnCjtNddwVim6rDanhoyvsh4HcJyQwVitLxkWj4tUZcqYyhFiL",
  "key10": "RzerpGWZxavg5zH4hTiLzQZwBFRN3FQxMnppZM5HMLwN7UnoGq1ZEbJ6Hpa3KcxS1f7Qk1cwWe8wQXPv5xRPFSH",
  "key11": "ZAPsqdaxd21L5CzRjiAH2Td96rktDiMm7Jz8qiWgr1DiND171Si8SFrv3uWzQPHDeAJLbypHQjz9xpo3gmGxLQM",
  "key12": "FS8npd53DJjwUnBk3qmH5xkeNJKBCwq312GiJ7k6fKkv4oENTUDjgWSJMqHBQsWRm69por6tsp82nqumTe62DcR",
  "key13": "5aPv7SUSrW2Px6sBbSptKQ5npxJFh2JFKS3u7GhC9SLMdXZohpD3bNYgc1YJoiPrU5636eAGDBvYR9NRJaxNoWEP",
  "key14": "3mNueCubT2NUmHqWUUrTmhdnReG52RgdyWTemF44xTS9g7vr19bxGQZZPrZBRQjtpMsW161y7acDfUx1hoGYJepc",
  "key15": "2qM8QJfmcEpw3gbWHLqUQep7VLwZy8ynwzvES9CFCWjxofqiUPkLecjzyc9iUbbufTfmfMRc2Yfkuwo5C8idHss9",
  "key16": "3JAW9p7Rfe68o5RuznwJfofGovfjymKFEKLDwcpo7BfkEGqjUBPU6TGRwJFQodpbJTnsNL9UWx5qpaQCA9pYJcXm",
  "key17": "5fW5uB5MxGEDAQ7NpppccLRjvSGZ16goym7FGrW6oAL4YAnqwiscWHJxJwi1UPYw4nq1tteTeLBGvuYi4g993wTJ",
  "key18": "5hvUujjtwgZ4svKFrEB43mBdLXKXwn2GKKs2c62ErdrJJvui1JF1rmwNPcti222N5snhX78cZydt28Un4SxgDXj2",
  "key19": "qX7y5xUv4YwKtdP9dEHt3cDS4DASy7YmZ9GnLCpjkfgUGRARkpYPkRVa3jqQuWYDvTiKYZdxuVuwbevjnX5jeQs",
  "key20": "67KEGeWLuN9U1sfd1iUssHaj8MgPfYnbDXkv2mfTzF9Q7JAaPAgZK3gRFpzAnzEDXqt7iyyRkTcAnsQk3nTLoAsj",
  "key21": "xMLpraCjo26WeaHeojXwGmuUBoYDYCUGYE9ZyHAWaMf4CtkDJeyhvns2bBdTbxGKxJEnA2DbXY6ntoRFCy2d9pn",
  "key22": "2UN3qzAUY1jkhzp4of1jo4gMbw3RWJoou5d5X8pi4KJcoQzgEawd276UoH4mgtFmoGY34GvUiwiFqKHibP2t4W3w",
  "key23": "5pG23Q5vbrYTqeAAm7t7bh4U2H9cuaZbWNhKW3eQFRFh2vxZsibjHA1CX2xUU8KYnCbJT7cwpgPzXkmK9k1CoHS6",
  "key24": "2UVqfDZcUHNcUGHg91LMsEXT6HrkiKR972YbwgW28qu5fn4xw94KYpYMB9edZtMaZe1TcBiAhCyqaovKEeG8DaVS",
  "key25": "4PhfGT5tc96nLsdBwAjjPy67jrYrVysxvkce9kCCNuCY85bHYasfsQ3o2nEUhLax69Qiz6FpXWwSmv6E5aZdWrnL",
  "key26": "4wCuDsFgaRGxhVLDYx3wGFUdRQ9U6qxsPBveCpRgw5372XsuH1ZADorpdSgGUgtJj3ZGd9pqyu1P1o7UzzJ3MNyY",
  "key27": "2FF2ENUG9B6Tzv4f1uFzjtELxc1Y5QqN6cRRZWjp4ES1jduzQM3mKejXNrSWGbe7xo7zq9wP8WuTAKj2B9q7nkZg"
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
