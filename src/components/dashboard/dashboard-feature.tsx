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
    "4W5oEeK2HcrDpYg3SGQ7JmSoVwktvBicrVWBbtRzWfYEAG1QuNkYTMjGy3L11GyEEtfyjy5omTxx9dK7211uTWbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59abBvFbvGSB8GeuzB2sg3gxCQ38G4UA7GzcrFUhCvgGighQY7S3GWzKTLWuGnDqrokcGzwcEMJrHMtGYpfuxWvm",
  "key1": "2LD6aags2rkcRaDivwS9B35vzrFkv7TjKPD9fbuC4VgC8bFqwMJVg3sdnjrpHkdEz2KR7BE4D1pb9L7YzatbDpKc",
  "key2": "NNBFqVxrxLbxSGDDVyLZ52ANUU7SQ6VNars9QpsaZQFs3nU8ARqEAct3QqqMksv3KKKMPxLwHogxAiG2pyCfDXu",
  "key3": "39jwbFwaBgeKL8te8S6fFqtVpaHUHBjhujEeeBP3TAw4PAKLqCAHP7dW35yVDd6H6fqcvHLFzmDcyeebuf1WXhqx",
  "key4": "wbu9j7nW5gUKx8DLrKoaokXFjVtJZahLxMjS6xpNh2WsdBxwYiSmmrWqYtVNfdgdvw2X5hxXjoduRtTnLZYxyYp",
  "key5": "4RiJbE2DiWLFvQpn4Kd8QLAfyr73miQ2vvbQmS99MUHh4nm25oRgiNMNZ9cwixEiYxh3js9N8qfASZeUSYEXjHCX",
  "key6": "4KEZwRumggADMfWbCtHuaZg9aCwyFxcBxsD5p5zL94HT7VrLERNFU2BWdTYFMe2qHmMFWX73XS9vtSckGa1tnN6c",
  "key7": "7LDCJZkoVxzvDALB5JYyvdZ7KcX1ps6qFXeLsZtwWpnwQbPg6hxixsLZQsKss5bBgi6EvX8TPpZ7CrS3pFvz3fD",
  "key8": "42u8K2XNzfHQNJmXSxsfDyXwLPjCspTaLG6xS7KiMqvPd7WFVydFbjsHsMBcSS2W4HiSJDaku2huUx1YRBST66GW",
  "key9": "26Wn6BsrHzsEJ6a8F1HREex23cxrhr5KNzi9Wr5QGouvfL8r7ZVckefJ6smDCkrw4VpDxi2cnveCrqnsJyHNYu4U",
  "key10": "5LL4epjcG8W2BXLywJVDGjR5uC1baYcNjDg2xVciZ87qwL6xQcahW2TdEDa3uvHZGM4jgaF5xiehdMt5Zz1iWNSi",
  "key11": "PAFcjK8GB6vXmzVVpyDb49A5xgBtVjPztGK3FV71Bjawj45j69ABZ4WeS1sMdmsVmp4WzD7nziupn9FWPmGp1xg",
  "key12": "5qt9ifEgv3gHhv9YGhRXGiLRLRG13ep6iDaapYj7seTa2eLGPEic73G8uiNRbjPmvDBcAeoGJZ7Sxn6u4rzPjxmS",
  "key13": "5kwEwGmdtWjoojzDTpMqTAtY2hnbAqAzCQTG53fExp9aJCGNxkTPYP9NXE4rtNsgwDvSHntavDXpyKFtQECo1hD6",
  "key14": "4g9KNKvodrN82wq2HBp32xHUAJU4AFeafEV3eKf1NAxfPd4amNJZjEiZkBPBboDCrksJeT5Kv2WWjFGcLcyACh38",
  "key15": "3i1np2PCNWo9ije1HDyetgeWxJkV2iu5Zenuoj2aG4XF6e8CibVD7pVyj9YyDGs6Zr7WR4X4NCb1hLKBgUWHAF1y",
  "key16": "5d1A8uhJ2VRJuxdPZKiV1SyrWTWCRTi2udU3ZeJxQPciwupn7CSkRbEfxbiGFFhDr1YiFgVw4gWEVSRqqPusS4cy",
  "key17": "3oUxyKsrGmKAteUqhpkaGY4cPdbEr2JnrtA8r3AN3rvPXS446xgrEjxborwSiX2xJqjxvCvYZWPj156RZQgk9yj4",
  "key18": "3mfv3qFBsF5hstJPr3HcFLuZs2xomBWmWQyyByraprzdgvjn4NxsvhX4AcNdpxssuacCTE9EXBwhaPfnyVfc8omJ",
  "key19": "2CctoDmdQy8vDKb4CByFrvJqb8mDbsGnfh5RejqEHS8MyfTptJRPnmwMbcs4SJvuGRpZR6An9AAAjd49vCdEruSd",
  "key20": "WDG74BoCNjXE3Gu5PdhjADZRo4Nbz2NDupY6ysoxgQexn1boEHNLbQpgcZG2SqfLcHXNfsWmDs8fPyT4xmLcyKR",
  "key21": "4XJfbQXn1tE5nDKUCTT782ZgA7aX4dunhJu2FB8XsGVQu32D3VxXZfXAdsqVjA6d6ZCL79NrQUmHMYYemBkajARU",
  "key22": "4cJWxGVSkiNLgd9FixvY5wBVQCbYGAzDNjFuF8NWDa7KWBwD4g94xN2XYAJRqbifE9iSeTLi7yXSfrvjLuLZNth1",
  "key23": "2qnDA27osqGBVW1tdy1FUpDbQkdSDUrY3YHSPue4GT7BYNCeTDx5qn2QaugoVvUmUQTDWT34p2f6Jv5FKWxvDtmN",
  "key24": "4zLQoMJXRxVkre2RqU3HKrdtNLZxVK62D19nhPt19coCch4TYvRCiaoEVQnXzTAUTinebFPaDCrdjsyxMcCZ4Lz9",
  "key25": "45Gt5dBRL4BHK8orugmrgeYWEdJNwRsmNPhJiNfCeRGoUTrRV1nQmayWmcnmQr8xZg6zbq3Zb49RyAC714G5VYuM",
  "key26": "2BRzDpdhkNL2fecJtxadRsxcVqxJXM4EVzgDvF2YJPa8aMdbnbF5oomWinxEPkfs8EMtRvKXUXABe5HFjdJ1Fjod",
  "key27": "4rWDGkcod2vX9D48w3ohYqaUvMm6dk4o6uytVC9xUZhb8HcaipQSC5Ask6PDVQmpojPt4Zkw2E14AaH6jeEuz2fb",
  "key28": "5ZpG1GsZ39nSz1gkZ6wATBBTnCTmA3zDuiL4VZNR8WksFPYMfc55pQSfBkspXMZ8ggwN99VPcsomrbt9Sw6bLGMJ",
  "key29": "56eZxhRy7Fm9ghdV6R9Mtu9H1ZBvs762qGuCaGTvyQSBCRQbvWqa2mgKnBHrCmy7Wxudn5uLTLmdSQAXWAnNNvRJ",
  "key30": "Ej4iu9UBvQXzLZVa4awZjk8BdeeYXkg39M5ocfsDKMHRZ44j44pqpUeBVb5exa6JUePnj92tKBQBP7F4brGysXX",
  "key31": "3Xfw6Re8a3GAoT74Rd3JFqrPP9j2mt5tjDqbgyBT3BZnbFHhCeMv7oDADVhTa6BSixva7b8CjUWWih1QMQybPmGr",
  "key32": "228Vfkb7CazZt3TmvamoeT9nqkHNJGQ3f2RtvVx61S8DAbXjPWvtcLjddDhQ3bXyrXMxL49A5bbAJvbqrCfXQxFW",
  "key33": "4LqDsRz2nAbzwztuvHR9LvELVdsoXELZpYpgaJY843rVcrbAJeLaVFYnFCeaP97dBPQsUyh69J9vdZcjKQXrGrYs",
  "key34": "5KY9kRVVEjG1yNsRNorS4P8P5VdTDpnB8AErmDRmAHyBtrZNH7We2KVfLNwjYZ8EcuygYgq4drfoUs8m8Lcq4ei7",
  "key35": "5bEHP2AqMf3JP8Do13oTkT1AnhBCv8i1TViNocG5JyqUurjr7pUKPPzHJ35fJC7rnmVs53Pi77yU1kE9UdMktYP4"
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
