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
    "2GsK3CivbERfPaKLgdnFauwP2dXYDBRfG13oayJZcUdzzLzkt4hehK8uVQjzik8hjGAdmpW5zHduWjPespbCdEC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o4FBcdDBqc2A4mZazGMwKhiQxZEEiPTxHoKkJGqcMN2m2AXupsSSZg9xaQCXTxEwdGQd8bL7E7LtXQKCn8q1dA6",
  "key1": "4JfhNUbQpiFso7CzWEXBPuHpEogmTzsmrpCgXa9Ndh2AYdE7w6G4hNrTPFhyDFiULbW6WQaDA5nMjNrB3EsuPu81",
  "key2": "2B6gp8oiaAzMvBJ2fLQfH3Qnsp1M4xy8m9gj27i9WvkD1YiDLw6ctRh8RXQcYd2hMsDSPhtujm1Z2mz3RHGPcPXv",
  "key3": "3LyhJs7dKutVmQWaGUoCqsQtb6NxH2pp5KiUGXavfr31sfWsCFBFZ54h2yARdrxzQvKqn4dbxSDaMcrrZRJy13zd",
  "key4": "4kRvjKvttUicoCVps15M6uJqELJfwqYgffE6nGE2Eu8jFbrKwTMt2TdGaLReurenBAPZmPohks1Sv17XZgP4758K",
  "key5": "62bUZbBr15op6rVTPsd4e2jscdS11GtAKKt3whspSkoYLssF97GPTttGYu5S2dWHgysR8a2cStAxEUfY3uwSwGnr",
  "key6": "26zSd1aX5cxe5o6mrPvhSTJBrELy12CmgdvFpa72i7BgCGr9PaRHCMJGCJt1k5VVpMaRN8nWhYBgWx1VpMz7ia3j",
  "key7": "23KwSyNnBojtQhePcK4XkwaRPY8x689M9GNwr35ahCoYR7HaixTcU79y96BzPkvRi5B75qZ3KM76pPXDRD5CF89y",
  "key8": "43RvtAfnWfCFZf4F1nwcEiVEXkspXK3nkJrAQSKJSb2PgK3S4CWy4qXUVqK7hADsdzqmijx1Z4mgDvdNjgfvVnKA",
  "key9": "554XXfPXLDGYkQQWr4GnpNUBLq3WvvnxbuAh1RtnyZ19WYRrRMxkn8F4boHbm1M3qZm3jTHHhEAF78vMcrB6vB1W",
  "key10": "5ibq44ZwSnceYTDX7KXsenDsj9VB2o8ninAo6hAGV9wY92SshMb7j2oZA1DSJRKHXipcQZRdNeQaQurg9yLTcq9u",
  "key11": "K1JuV783PBuvoJ8pWciAi685zDL5ueDPeBqFqs96oNvdgxpFGNy8VRALU8Gvt6jdzy76bAovX3c4opwRL6nFLUE",
  "key12": "5PcvkTpLCmcXhHtBqs3TENJBYxsWDCuBrghWneTWJXZDMxabjsn4bsLdyq8WRxxv4YEpuryDDdacHJ3waJ3Yfp5x",
  "key13": "3oiFRZ5xgPuX4x7nWz9NbPKNVFjE1DypVGRK4tfNzBL27tNYRCNEL6moRjFBkyX5bCyh9JSevSnWZB1o3csGJYZU",
  "key14": "2honuYCYW4Pz1w9sPzRAu8qcSwut36vQdMgpLLnFSDdFFyPBLCErkJMwVvVCz15XeioipaCh6guo65kDoPjLeAKL",
  "key15": "4j2k5S6Nky9q1QRFRhWtWXrtY3uTaiWRtmdzn1ZH1L6qrL8wTTBfsPEVfxtGkdVs3pQvRwtJtNYyS8V928isJ9Fu",
  "key16": "2LmS2mbPQDTRyxpXN1TmBngwhb7ooEcnFLuxYLDScoiJqhHF9Yyqtjtph4ZkkkpsnBxiD61ECoi7gqqoLW272bwt",
  "key17": "2TUyJdZAQwEWwtAhpDnjasxqPRffAMxVoSqk8xTK1JgirtiC4R7XmCZf4ALyvTGZy9fZWcBksb73ateBPSWyir5Z",
  "key18": "1mPubxXKRnuy8ZWWWYYYKjnewCy21ha4c77VTL72yh2Uf6DGTfhD9AmPxxWDqpuNjEiTTKbSJC9JcdkeARDvZzA",
  "key19": "24yegydvvr6MATQDZAL5PzYAtNNQjHmZnyncdHXZExgTFHxXdcw7TeS5nMoJbUPTk8qG59Hnv4gdPijdn66JevQn",
  "key20": "5hj7bzTNHEPvpAvAT5jgMNKNhDYT3GyjJftFBpEEBrk6YJszFdmof2cApvNNdEHnve3MKingu71JJ7HemKtdCb92",
  "key21": "4QsdQ1H31ypEAxfkrMPjFCgs4tF51QQs1KeQZJvZu92cuSwEyC6ajwtPdGFu9mxisc1MBrCEfVTEQzc6Y2qJWxET",
  "key22": "3pLwYut4hToNcQiLrFXBb1tYPQHBmiJXR3WEGKqm2wzRNVw8rBTquntDTPL1uE7WA15G8hpM63cgbjz74zab3cyp",
  "key23": "8ygpFjQdMh9Gni7G2kGU4d3hQqQPP7kXZi9YgEpyDh5kXiqfBQQtpoznseNqn3YVt5rWV4JPUt3PCMHMK14HUX2",
  "key24": "61DoGnK2yRVTfYJ8edNL7Hz6yrikz9qYdSvLoEnqwivXafUaH6QqmArtnoScK5YQj7893AWsK33pDoY4Ln4RmB4S",
  "key25": "2K9k1c9ApkLHbrV1TfUBKVzEU2eo55tkDJNsPT7VwuHiGwhnfngqt12xzRwVjqgsZyGYEtcUjvFDmEawCgLkHLp1",
  "key26": "WuetkJ4fVhGfspepYYEBYvECZhzSWyqvQDRzpT35cwaC3X5erLqJskGg9cG1TTtu6odxiYXrGung1UVvfzhVN46",
  "key27": "5x5dWgMP5JHdDRXqBJoUnMGBGyYP4awghJx84BhV1jBBLmVQneeCfxRFKikUgtNYaf92oNiSabiTXeqEQWYtzDJX",
  "key28": "45nbRoBR96W1AXuAs18H9estrjctrT2Y6BfDYFFAwbu5EF35Ns348fgdTe8ckX6o6bT2hVuSCRHZmdf9i8Kwmj9n",
  "key29": "36f7biiT2udWQucyG7rDpSyZZiooaDHE7JZJX9nxB3K1rV9KsN1HhRMWfNSzvpgFZTKHk82orhLMa1122rfkLxYB",
  "key30": "2e5XzUhykaxE3UZw3LQUgt16FinQxUWWJmXBNY6czLBpb8wsuySCZf7Yq7xUzT8d8HYBr6kZSZLS3EBtF1JEjRJF",
  "key31": "2XvUvf5zsBT444PVQKgpXhDrKmRdgmoYNE2vMzMFnmDjYh5tSEbqwM81ha8gtRd3mAtEnndfjNAN5S4cRWYAz3xp",
  "key32": "3KWakr1h598EboMBEoaA65W4iodftBbPnhtkNjTnMB2KMQEwYGpbGHDNuNrVh4eyxCVbma7ihYgC1zJEgUFQggDj",
  "key33": "4C1ja4UJWN6nZs4rHyywHkKdg9ZUGiSiU6hJZ376A1u9qqoU7azx35PUNZyvBnom1CgDXBPMDheFg71cvZkxAZn2",
  "key34": "2KXMNm8dkpS88VhjjUDkt2hhiRoHVNHD24a3Q3Awmp49MvctD8eDnBvX1zH1i1DtwuGHKnFAvr2Db7qqXJMiuRCp",
  "key35": "4BhXXPKTzETT3q94n5hBLa37aSBjn7WFWT7gFyvgWJUppUHDsLS6pEw64MTPupPW5rFA9dVHXtX4kbo2zxADY7wy",
  "key36": "4Nd9kvMgmNgBX4d4V1ae2Z1z6Y1rCzv9wk8aRE4hYeZcXJntK5U9KoVYWaSNpXXzjU16EechEKTY1hyCCGgeRVz4",
  "key37": "4G4i4Ez9vj6gXWby5nRV9ypo3h1puznhbVoWZxJjrphprejgDErXQAGbKCJPYWHktwFoUBSnjis1XYV2tUQ9QhRD"
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
