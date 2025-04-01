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
    "2KNzkuYRf6E2zRJPmoRDqjquV4b6ACrh8aTKj2ZW1QNyQ3BCjnCDr8XaeZdLWpCJJ6HMwDEmwt7c186r7NCuaKEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zvoZxrmgrw6PAvhzzxik82odxu8MgsEtPamfoe4zgRwP4kCDYqMq8mkTLEdLuMQnFkgEEwbRMNwcGTRS7Z2V5Cm",
  "key1": "2UnSdAn8URef73Tmm824khCUChr3jCLog7HkYUk6odVHVTqnV4maZcmPN3Mioz1MCSfd127oMMgznYCKcbzgwjqV",
  "key2": "44BqfCfmBDgCAccsMD98pV2rquSAjQoepTGwDgmB44ntgxd3QPTXpLrEhLwji2oUj7zi91Gvg6pVnc8ZqbUR6ybK",
  "key3": "64MYEtHpqonXT1iLnXNVBdiNk3PUsHQTkxu4ifoRcGLsYAopsZmL8SdU7zLvN87jdyxp5w4X6dyEh5hyTw9nUUkQ",
  "key4": "261Uey7AaZgiLMNHSM6EbG6qgHQ3EUn1GoPGkYt4oskmB6jZSNTsNkzfrh8v1dXUnmubVjhJ3kLR2PKRcaa8pdez",
  "key5": "B8k4daHswnTuxgzAdtnSfPuMoPfoZ4mxoAQTfchqXUrZdGoAg6pv8AxMDtVaq4Fso4ALB4S1HTVurFMg4VJ8z46",
  "key6": "4zhRs2V9aXKvJz1fyFN1ZGeECHB1Rwycs9fon4FQJbgPF7SUgD3cBj5PK927EJhKVDTHuMYUhGxoVKFiY3T7RCEy",
  "key7": "56tYHkkepLv8MnuE2uH9KpEnwqn7SHvLueTmor9WTZGXkXK9TEvyvtwVYCRw4VS4WtkTv5QprbLMHpAbrxuvkaEu",
  "key8": "2Hv683ThekHeb8m9R8yiCdrecQ84pSShaJkBsZufbkNsGu8tZEjWMeaCuQQygeFnCPNHTVnqUB9QR6osWkkJok8Z",
  "key9": "2fwCSCga2ogrbpiu4yCLsLHdVsdbQSB39JtEBmkHnpPFV1uHrqcC2ykQG1EGSw2WhycpPfiwuRJ6L4hh8aZFxYNb",
  "key10": "4x3rGvwWee5BAtKNcs6N9hwZgGcFhFYZoh7rochWHoWXRMoCZGjSCyCSEQPcove2UQk9ZRCyJjRfqChzvcVjU4an",
  "key11": "996GREiBa4e2i9YSe7eWj1cRvd8rJUT773kUmzBZm2QHMqcmLVqEJAjcEBUBZYM4vR3qRZxXKDLQWT7tpxgDvXt",
  "key12": "3A3WQyRVW6hUqX3u52FcfKdLRyFAHdbjAgFVykBi4avdAHbrgiM43RzfnaVoasQUySTB8qxQJ272nZFFiLQzd65G",
  "key13": "5N8uiuaY6FJeiYvFP67JHnh95uznAcRTV7Cd4YEUMCNAHPoam4humwPXHGjjFvGxbR33tBFfmCHDghts64uyJA94",
  "key14": "3joa6QFLn7kEfEAsPLiyor4jr12ErQCEbgYDNK46BPUxj395maKpF9tyV5QePKQEoh11jnvZygQVd7SUNESfAz5K",
  "key15": "2No8eDYypeGCehcbQS1ufeZecYHGRMwXcevGNLLorEF4QoUAxqcPAeVqPmGy8D8wMb9jtq4jVCppDdcQKEE93SVd",
  "key16": "3NQ4fLfQawXhEmZ6c8t1yj1qebwT2CHGCj53YrbNftEGwY2EKZCizPGvp5cTqsfTHFPA4aw3xbwTJFvy24W8jYYa",
  "key17": "4YjpUe2tqAeGNc5zvRPWoqrM8qEfe6u7zTcffF4qUkWFWkoSFHWobaPqpvAUPPySERtaPwmxdARXkhwe5sdb9HAs",
  "key18": "3ZptL1m6zvMQcnoAuWxD2K2djcqjFtnYLnyMzhnGXDS6RdsvD9SuGVtpAG7hoEVimR6Q9j1MUXa7haq2iWdqZKQT",
  "key19": "2ZreexjftWNQbFPXrTxHSR4C6kakP5MXVX83t2oDyxEepRaGTzVRSt8LnjaDejXzgyerB3YH3Vj7u9B3Sgao9VnQ",
  "key20": "2yGjq1riHomF9gpwpMd1pqZYxLqN4aQQjE5J6PzYMG4p6jKGJqZzuEdG1wdx6sjGDnGkJX1sETbf1CoTupohTxQL",
  "key21": "4v63yC9aLwdhHteczmF5GeuASeb3HGjjezjxP6fCMC4ddm5ke3Qc2Xv2xVYPBHr6dhnwMUPbYcwNSrMNk9CpYzMT",
  "key22": "2Fh6PnE9iquV1xWeLNHgeZG74mV5zBPo4f2QFoWUBKy8QiW3gBPQsJAWdcvSUQwY2nsx3kQyjNXWX9GCokBNckho",
  "key23": "242DxsrinFot7HyEdigDqGX2t8zMKpRmWsCMqwe3eNrPqEKRuY3ACPtaX8Lsd4cGXRmy9kNBEo4iehYYoiSEuLxc",
  "key24": "5tjtgCrPDHXpnxJMVnctBnpg2jf2Ki9UuxUtagRvtdC7ifvC25hGiRWuJGpEDKjqNsq8uyAi2oNbNSMZJb94C2RD",
  "key25": "4n5yCLLfDmhDLEcZvrxTT9TUFNT25wN5fSEqZ5Jy6qxocPdGCNeEuoWooCuP6kF8sfctbqmLiJCK4rEj7KWGu5f4",
  "key26": "r17MEkLVEZmgP94dPXbUTKHK3AVgHtZUAhz6yftEMNBvyZRqrj2AsrdwKTftEEzLwCjgoVDwxzEvXeeM8bJdEvc",
  "key27": "62184vxsycJKaJqkZG7dc8372gZNMR2ERt3XrdK8xaV8ybBPrdo2wx7CU1kgMh3oDX6hq3XFhFChx2bgtzA1bz33",
  "key28": "4yutNbgVC8NsjuQu1qTr333dW8Pef8LSHNdNgT7atAGt3kyiNHSHxAkEUBF8QSkB6e8g65RqZQaWfZf8wU55NAar",
  "key29": "uuhGgtS9p2ReRBcBeXPi4fRy8TtqNYmWspjs9fi645cJKg6FndeoK3QRfN4AupFzq6DoAV1bpfwNUGaujuk8jRd",
  "key30": "2RRZPbzbP28sPq5HChrd4qBrdt35zzGg7KYAKiUjyrj4hsYBDL6SrKXXPyBLLA4eTPobnxn1q8FiYSS2oXdtMV2K",
  "key31": "5P5yvEZVB2emnAQvuCq4ZXyqjvs4mnu7Dqinuc4zkJUghEeemANJroiFn6agmwuajmEoM77a6H5p8obziG84Vgo6",
  "key32": "2qcU5LJ6NqRzaiVnGK97GQGADH6jtRbntTocQyqTvM3vc7wkNrDVvt9ewX7rTKt3YZhyoig8MZyGFX1XqJd141hZ",
  "key33": "463bGW7QhoMa86VtmTYVbg15n9khqWwyuSGqyFQhFfdgkc6mzFhrWTP8mTKqG6PjTn1Wc8eDg6ysFWRB9oEpAuHB",
  "key34": "5vSegMNVjnRN7MJu1an5mD4AjwmduYPqZLx4wTKBt1T7DSf5uzhCjXWz1dCZzZjjDTgdu3mQ8wasmGrAGDADqL3T",
  "key35": "3yyCnnU5k8GMhRxPhpDV9ExToxctuVQyV5cv5UMDGarv9w8kqmYAuBUYWLE96tLunYreeTUfvnFmmcjH9QVL75To",
  "key36": "jomtuhNpLptfrSxks4PycynZc7Cd5j9EvWqe1eQNdMuZCZu1J3vTGsgP965iovSPPykiowFzczWZvUBzToMJYNj",
  "key37": "5qc1zFraph1Tx2XdBiKP47rcQjcmk8aXGKebmDA4J4t6tFSFxB3kGd5rCxDsRQUiEpy2oMQkYgWESkXmWisfHMn6",
  "key38": "v6rx3x7aatUz1NGjRA36YQC4fTAUnxdGRfkDBRxc7SCbQsD35ovzMcNvuouFaymwxjvirV1e5UzxLRXBv5cjL3b",
  "key39": "5Hsx5LSGxH5r63qPkNw9TPiRP9ieWK7zTe1kZ2ARgbBvRRJd2XvMrpUt1fwFo8GaZMzaP5DLujTmpJkgz5FaoWTd",
  "key40": "3GyheG6EVxyzQ6PB7reA4aP4N8jtrmJNKp6uwtbqvKfbQhvyTefg7v68eTMrfrSTutQVYpHuNABiSNcMHg3o9K1q",
  "key41": "5f75XXW6kvQhTa2YaJNWzZTZG6yHEYK1f3wzbUbBZJpanmruZ1oHS1gsV24huSMKTpS5WQ6SVkvhvpwWPLsKsnr7",
  "key42": "4urwdxCoQEFR6QpGn99zRtaqjrpQU7P5fCgtKn8L45pJ329UjYiVfo5gkEGtPErTdLrSZhLJARNQgRjDCudk5zDA",
  "key43": "5CTRC6QisdTe49sMYn4uNqR2xWY2J4vcLh1ebxLgxwVXoCXXVokb4Aui49UsDs4RoMYzd2fnzPYnSUgGZ8VU95XJ",
  "key44": "4HNB3HYB97QizkAybVH34ZjxHdheFh1NRHWgiXw8y1tGSaGyfJpauQSAFfQoHCYWhFFH6b8wPAjLmhBinAF41HEf"
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
