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
    "2HQQ3qvtC9YTGFKds4ai5SAJ2B4KAYd6cAksWySLuY2yfod24L6RZJ1yWTW7NBoDWoQYf3JMJ8yyUDiN5AJbLhTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qrcf1V8YVSmChebHeg5jYXe3hpe8GS1ki8NT4Pxs2ze79qS8Rjcr3zwDyR86RUsF8DagPbLZ6BRcBKnVRbHMato",
  "key1": "3XVNTB4bNtZAkx23Mxc9G849CCqpho17AkpFJf6xzLhsrYKo66u9Q9Qnv8R93G3NftGf8U4bBuyZagXrAApavYB",
  "key2": "4PbkUdgCdaXhwL2hjeUYwPsMHMmvTBn7Dufa1K6cec68RhhPUmz7VAt9ZLUPcojmk2aQCvGf2ecx3zY6v2FrrfVw",
  "key3": "5Y3zs9zPW4PSF6uv3X4ZPeUBfkBHiDdERdDHSxjNGc53cRU8M5hfrqJK3GDkuiUh5XH7btt1UoSjDDFqXrevDWD2",
  "key4": "3pzasSa8Z7P38tNXxuYQKG6HNsezRhUyxAzCh9xDBwKWzAMzcFtjMV6HHbw4hCFXKsY8hnZ5FzET2ZXPJYCwfuY5",
  "key5": "59DfbXZ8GsWeVaTd381WBUpEFFNdxceTyFgo4Zmj3YHY4GSDXxKi7dkiYZfyzjPTnFxkeToFQ4akwBVpPwkXjb9h",
  "key6": "422YEp6gqxtNfsi3Q38CFpNUNbbigS79mW6VV35JmyPM3xxPBE2jEnpHn1E2YrUmEm75imQeYu872SbQbTHXdV6t",
  "key7": "5bXVrVNbKmzggN6zYmG9efHyWGz9pzzp4jCFCX4aPNkbDFXys9UGf73Wbhz9yMU5TDYwEinkLa21qsScUMg5b8Sn",
  "key8": "kT7CmaK7vjuiGCwUYhreKNxTReDnHRx8NYKEKw149NuNbjDzS97baWoooChFAng387CnuAt6Ld6docErgYpBdne",
  "key9": "kTt7SU8GfMy3BjSSJ115VybZjkpfUinb5U7QjMzhq6AhzfzXUKTS9a7eZCcGdTvZW1mBdHP1JaVwTMJ9CWrmQcf",
  "key10": "n4CegmguZdpw2sNJPoz2Eyg2exz4Q1EdvbYmQbLhixBZkinVhfjrnvmCSY8iVUP663ScWt2Puk32bskAooyfy8H",
  "key11": "56MUFyzTaovcc2Z7ajChiwLh6iPpAwKrcNyKhZaNW4bVqkZt7kfnzwGWiYZKMSMarBHrRcyoFKmcM3JcLj1a4vXH",
  "key12": "4ZoVbhHaHbwC3cveAnEE7YG6hASuLQjVaMCc1P6KbRB9m44of1qJefZQRar4zTeQos1BW1Wzf693vBbBUzhUiNEg",
  "key13": "2b2dMR1SQA7cAVwaFLCjbUNefdDMnh74zXghkLDPmHeR7FwxXNTsD1hp2jQqEVew9CwkFVBsNwWmRaWRtZGnXZoV",
  "key14": "2me6tTZWpp8VHGisjM4gdCLoBzZk8kcaPuqiza7uj6BgYEXgkyzJHRLWMYgBhj9UNvYLjVQcNDXdNxR5yRQ4Srpa",
  "key15": "2h4UDJkMZABLruspw787ZpYYDE4zh1w7r5kMxtDeoMe3Yhg2JQv9zrWvQpH8T1xk4vEn7dcf2zVwK1wY1Q5GeCr8",
  "key16": "5evUz7v6cTDjweifoWDfQP1UuBMm51ZAaTkygNWv2iZSh4V496VmTUmi4rSvErRoVykKf9duP3R7s9Jq7rLuzbms",
  "key17": "4zizxXgGaEDUszDd3kv2kRXuLnrgD51QU6P8YnR4JzYeDv8mT2aydLSWo6kWKadddAR7nBtxaQgiTdoqcEmZ73Kc",
  "key18": "2hDy3DCsMb22HHBb2Ed2Aj6U3vzqwvbyaLp2cTToDoZhGPJAfeqhveyZ1WYf1U9jRxzDfcKaBATqijB3vPhZV2Eh",
  "key19": "5fcx8GnZDgazezdL9rZ7vq4v1TJimKqFU5d7BMvuGARQj8wcv6EwBMJSXtkiJ5z2ydqbeMej9ZQbY63ERroQ2PV6",
  "key20": "2aKJTZWUHbzr19EQVzhMJ8FnmvzrWVogtXfw51swWPdmFJfsY4swbxxqfPbe6F6eEwrns4jzrXdD3FEPE1qVFP1d",
  "key21": "4GHDbY1h8sgk76KjuKc2hks1ybjK57skxnJ59ZRMRESeBdip9ShNJzMTEd6uYh5zskdemC8fNPnJZTshL4kwBnCE",
  "key22": "4TuF5bhyTatAE6Mr3KgeBEPAtWjLLAurdyX28amPV2yj73dSNj89M7B3xKH7xonrKw1B5KQ4AZwxqVAsrb8AYWZ8",
  "key23": "5AJGesPLMbf1XUUkL3Wz73pF6tsYcf1oLPSuzvbUwGfvmBDRbzHDDbmf7qEAfn4JtNnr3B4RxLGwT5TJFBkbDceS",
  "key24": "5mdLs7bJfE9QTxF9KnekdWPRYa82jekrZ1x7m2F9K4qucdiCMnUJP8gdbkev8THu4tUTJRpiayuZhLmAwpcQD9zi",
  "key25": "3hVdjXYaChomtsxwrbg5m41axz7nLGZ2j3TaYs1CuJLug14i1PtZRUwRdosmZpRY8J7MqmnN4EEVGRNx28V5uLR8",
  "key26": "4r695kKxKEaFqvMrzjaJ7DtLW5Qd7FrpAksk7maWj9oMccs4rqHLV36UYM3Xs96TMG5Ei7nJTuupNKnaeh43Xi5T",
  "key27": "3FcwFfNU4vthvhuztNGfGhpFSuoNc3XGsbtv8XiYjAoz8qoKRZTqJpvTR7qGqjnM8jzNwpinuHAcrsGk7BeRX8os",
  "key28": "3XdBxUziWd1cKXvD6gz8yohWcT5THw9jBnKoMDVETj6b4datJiwAhbikxXqg5sq8d2usUTsSgyVNYMFPLNbvfv5v",
  "key29": "aWgpoobxHgFF6noGSx4dpMjdhNcc7e7arMBfX3WR9hzwhrgtbRThZmhXM1RDAQEQkF3Fec2FDiY5tgi4uW2QUru",
  "key30": "3rnp2MvHsgKjeCwRRDeEaZjbyYth2rVS6qv2ccEft3ob2uLLW8Lnz97cAWj8jFEmvADx1nCdPxRtqKMBAiHtnrXD",
  "key31": "32yzTn1BPYTkbKHcWkQGwWPoohsccLLDpRLUzwQhMk8HSGYLF5rkCTD9jrEDqYBtmPgGRsHEVogzABccESG1a611",
  "key32": "5Lw5YwhPNYLtvL36KYjVnZZavCV9KkTiKq8XDVh18k6Poj2SB1UVe6ZmvC5qenBwtPrzmEWvvyBu79fcJ63nAHxA",
  "key33": "8CNLJWzdcV6G79tMEpYofTqUS5K2o7PppYwErMZUcYx8S51pP3PKwecvbXW8MYJdAxa9ye9joLxYfv1ukvzYz8H",
  "key34": "3HAR9UgpCgWLptvfBJ1GeEtTTytMMRFxN95FQHt6CHLE8vwaEcdyc1MsECivcHaZDiGBVKBis5dt9rugponyUUgA"
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
