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
    "2J5oU2JtdraVK4i57E36hsxJWFzZUXS5CS9Rczm2jC1eRdFqwE2xkTqZ4ai12nJZVLZA1RfmeuE4i9H7y6cdkzmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HT2NjWQAG2813nPSE7rrgmDJTW2yvuek2AE5idcdqtXjaLtmmNdU3ST8zpzcnuQ1yVkazf6aZNMS7LSpSAYF5iM",
  "key1": "2k3uu5DPfJDzsqRCTQUUAmgSuK8uWgkDF9cd8F15d9YzjUxPyPJXUhfCFuTXYwjfc7a3ZKH4K5jkcgGwasNgpvLn",
  "key2": "3jRb7GtV2LFQoFLLnRjATgEtMyPBivdB8zu2VfpJjoCzYX7Y6mf4toxiEgvwYhgwYbSS1UejPWBXYdKwUWb5RqP",
  "key3": "2VQc3J8BMWgNKce2gHVGTY27hf1tW2kFsrqZsdRimxwWKzymDosXDApzEotmPo7RuWbFNVLospDUiwWM3eKp9aSx",
  "key4": "2BNZycRqQXXr1CAR1zmeARqLzECyKXgpxPHMytqKgP5Lu6hNjY2jbvQKvYjZdLW4CgXbxTSC5FUQffTLWBGVvnHA",
  "key5": "5LdMa6Ed1TgcYoffpWihMdWrqFGTL1kLcFshoZb2tGYgtirVAEte3hSzKwnG1zegQpd8aBzSVYSBGdxPM6iyEurw",
  "key6": "5AdTPgwVV8pZ7P3fqABeusiScRiig6b5HobwjVz2WZ4MSmpsWJitLRpfgzWvm1XhmpqRHrVJsPs6bAztY9aLqXp5",
  "key7": "2PAdk7hMRjkvBTEY48xybhTr6bpriJZ5YeF26jPADZC5nBw5iCf1pwMJX7D2mcJVFHNbkVqo3rw1NxddKNtzkY7h",
  "key8": "5WA2EApoRLCSfQfvG7NHV7zwinYfpXi3AnK1nBTRydgd5cNMykPqYBfL8JCyqDsYbZJgxCnZ3xLDtMg9Bg9EjBbN",
  "key9": "4Dyj62xeRD4BRzfSJPcnBT8FTx23twC2HBi5cFQ1du3Dhvcu9inzDQSLZioRhzqQ1uCmpfJtfyX3Qfc9b9MPD1nK",
  "key10": "E4bXoBMvHambJCAU7ZCaEMNuksvqimqk64kQaNxZ7Kxv3q2LDbKCvhr1MrGrjoM496LRQSmaydemapNPZ2Feciy",
  "key11": "3V4BmFTdMjuzCf6eYikLDkUXmd7PzZ6gGVixVq5vtSsPAH79YQ2k9pEGh3NV2kzWjjKsRF2EofSnjAJnoxHeD4J5",
  "key12": "5bAvmWa1dkpf5y3u1LVVyXrWAh15pLeJFppcMwBLv6hLTfuojsGDhXj5Q99hLLQTLodkXECSogb4oNkjJFg2kWV7",
  "key13": "4Z959QPPgkFcTrSUuWqs6mgrijLKpuDxvsA24e7SDx7RuxKy7Kahu4JBLPRdBqDegdks5KJiciuZtVRLzqiiw8CZ",
  "key14": "4n9hLiE5bkQjK2tWkAaYLznSDg3YjjVfietnoZ9uUJD58eA8PzLngUnfyTZU1FzPy4do5Q8dhGMDYJoyVorzZ31r",
  "key15": "3fzgmkxFmuHvHCAmhoZUVbVscTyp7SCo2ZFxv2i7zKV2hv9k9Cn9c4UW6DG1LGSM9k527kZyV9XcJpMxTvcQh7HD",
  "key16": "5M5B2cWdbp6nVgCFg3zrKo7k6NpMD5Pmygj3sc4zbWci8oqA2Tr9nA4jmUf2zsxt3ozsyZM9pjLhcLZYZB48FQuV",
  "key17": "4pUpW8ZBgunFeb8uoX2uiRUjhJBnFrW3sC2mtRrcd4zTQ25NYwt4p6x9S5JkaLDDFK1huRRTmzKZkyY3JWLr8VHM",
  "key18": "5RkJxywze9CYrQm5Q1w1KVzAuqiwKu62rf9o3Gjo8Upa5DRh9879EQCsZ52Vbxuv4vkBdRmEiccJf5KLnKWthLuF",
  "key19": "3c3Gu24bJXhz4CUPtHtZxjMdfmfjoPkLAZ1WYzDpiAxmNyAYRpgubRMBoVeaPmuvdX7DojeyhN8mQT3qfzyWmVvB",
  "key20": "2aFWq3nykX2BWfn5XqBr9nZ74FdcfMjC4XAgoPxEMJSACSp6xWhgrt5fYauvvyQPP7gmSRa9a7CbaHk7L2ckss5v",
  "key21": "yjp1Nqz5TeShnQZxVnGjNTW8YET71vJkdF19ZkN1795fYkvNcPaqGbNzvLyYEVATdGQb7t8z5Grgrxgv7PqG8zZ",
  "key22": "5kEkKxA65zFwVCUgWD8rxzc6sFb2htSeCehhsuddb8Xc53KZfzgSG6NiphiD7KrwktrBFqYz1qPAPC4S2Xrwo69r",
  "key23": "2GDoU6bmuDNxDAh8tfUWBVYNqAKMdC3rSQJsJnyCjYDoT73wExDJWzzigz5ppCq5rrn1zGpSkb2EW7jXPeNS9bBP",
  "key24": "N5cJosH2J11cNcJKBZqo63qbzn5diE2n6YhUhBTGeTPc2ZefUZsAvURXr4SKZvcDmUsyGAJ4xdk8Q6i9sAF6iSc",
  "key25": "2u7o5NaER112usqvVwzSEAMiPq6rYNUpxw1Lmyeiox9hWhm4jJynPedqHVUTYhYrhTs6Cs3BzSHftY551sGo2Skg",
  "key26": "3a96cMH8aivbjHYexTxLjsDtGYnppiVDesjMFs8zQNhB4TSFYenFrLz8y81JZefbhF7WstpEf8DBLz8kKu368XH5",
  "key27": "QvUtdTc5BX8PosPkYh9i8dLqgWJQJ8tFqLY4Fxs8fF2w7i9ba3QdnW1AzjEbeiRD8Ay27w1ktHZ3G1YKMuyiGU5",
  "key28": "34vVkrgy8iiQCdyCwZsxsjm2mXgx6jzeaUGKVFDF3w3JXPy6gZ82bKL7zHqoYLexpXT183dEaLEvoiDRMCdkUdwG",
  "key29": "4nMszuU4y7bDPUA7gzgTTxq6HXTX3HgKMbFMas1pvyZm6cZ4G6nKUzNVSFXKD4JS2LvuJFG5swaEeSLwysAXNY94",
  "key30": "3X7jTysX3DBKsVj4bg95qd2nfjz223gxhSwKLAeNAjtZc4rqe9q4hiT8TL9CgfuftVB3BCiTDMcxc3c2dZ9gYqWj",
  "key31": "449uTvZ4mZWjj6Qf3J7K8VFR5WJ3UXXPVMhP4eSD2MBywE4YS94KU7ZGrqHjD8HCoS7Su2ikdPRoyQZWmHfyAxF",
  "key32": "4toffx5Da4sYnUsKBrkg6Jp8Re91NrpQCm3t7J1udorgoAY1WSKtqd5oaHwmKsoMjEeXbEfPR9iEnhKUBPP1ANSF",
  "key33": "5QbSJhtjq7SFHESHLRk4oPrhVCNaitsqmqWgPB4xsG1oP6n4xCW4CNHMTvVFeR2LVeGyXEG4bqkooUS71pgZDNMo",
  "key34": "SdVLjaKRkJvEzNT4j4ySjNQWuNr7xHBqhAWaVLHfmZ6JRcibJKTDrwj3bZiKEXHW2uwpGydw4a8rrqHPpt2a96c",
  "key35": "3rLddefE3TjvoHCANkuvzRvgHpBwALmD4eGg8uY2rAPddv3BLZNiZoJH6Eqw6Qu7uh9AuBnUeorkw92cfXSHvsX9",
  "key36": "3Q3K75CayQb7NyNMnXLX8xwf9Jjt1USydxdsNiH6MbsRFRKxReSHoceuT4He51dKUv7G5XtFDTXNYDYY1UWPeWXb"
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
