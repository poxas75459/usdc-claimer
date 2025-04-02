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
    "rSfwdt6ntn9EYbJTM38rY9yVZHGpzcXn68vYmq2689edFqZVxffNKkxwikAJvQFovbvJxWyakhSu17kEpof93NF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KrnnRBpNsMoC7YGWtK2Wei5SPVwcFXTKMsU1cMQ5xCtTEWoTsDcfKUCHJyeyB5L7V2HB4B2JB5sSTbJvXDP4wET",
  "key1": "5uBhVGNXJrhLC6Pp7jPuZ3ow2NvNjptvruFaCx19cDHsVRtMEHRiRW9tJXjcyY3gzMQxR213ckj4VGJTaQe9Fhdr",
  "key2": "yVkdFvcFiqWgRWKfPcUg2AxhmPMTeSLe9LchVfiBAgbgtyLze9QHfz1dhg7RbB8SRETmM8WVfPhwxTzrokjvaXM",
  "key3": "4Pp1cTzNEt6q4vqjNP8D6RwtJbDt5yft8iGx5qr7Nob4MdF3WkYB8YLp9Vgx7oXeFQgC6gGWeuSXYVgeBgXe7VXh",
  "key4": "3NJMP3A4ZzGfvpkk43F5HALWYrptFN5QcvJfhdALrCVBtbKVwKDXDcPe7WyQPLHKn6EoWJPgZWWTr2PQ4qdagiu9",
  "key5": "5D4wmEvJQxGteHHz7whvig485jfRDT7Q4WYYcv49s9CHdnQ8fahSyLg5ySZBuqdC3UZ3hSGWEjg9JLHBULb6VWRa",
  "key6": "VWZKeHFSpbPMYAe4EF7mUy49dzShhrBNEmZHQfGdiBZ1eYJjqfkATFGpCPcJ1cZRfvxFh1reS1bhqAkFhidduyV",
  "key7": "hiVTF2pyi8yn4aKenRaFnD2p9qGzf4hJeGMhzPkysfngAEmUZPsM2x9K425QXY96NRcoc4q5aZ3Lez3SecJ7gHK",
  "key8": "5jeuvgsbrQFs5SjbYvGxYmUBHNCWGrDZEHzYCcvbvT2L5kEFaPUWA8MGwqURsnx19UF92eEnTvLa6gNX65XAj69",
  "key9": "5oFUa2AVcHRyQgsJRMxWrx4Tt4tceAWgApveJVhYJdJkhBesNb4dQqHybxBH6MKnZMea33i8WG2ZbKqzsUtkxSx7",
  "key10": "MTsBmpDFuYRPrG6u71UTTLywAqJtivr44PxSQw2mhKdkxuLSBu5Fqjnmyyg9hguikhbUP3z5mPxv9uQiSKy6LvU",
  "key11": "5a7PHfgjcev5d5jT89mkhsbCzquhqeJy6NNN1zakTob8oXge6EC7D56BkQ1Wtj1y3sUgkVtAjWAnVqKFr3MBaybj",
  "key12": "3rimQNHuhRtTiMYKd4Wt43JMMpz21T5J1xK5jcnK4Yjhdfq61Ei2do6snpoBkHfqqLrw9RWLwLSeUiDQjWiYQzC4",
  "key13": "4VtKdJoaSamVyB53VSywvfeZFwp1FR5NLVm9vboE4MTP8d5uCKbGjGfKFpPBThDJTH8EGR1D6z5QLF5AhyHCsX9X",
  "key14": "4xjwTWxuvqFqCgwiL5LeYfxpYEy3SyvXQXWFjiRwnV535hpr3x9NWDTmF9ZW1v3dc3nBY9nto5vcM7MGMZih9ofd",
  "key15": "45ZV8RbeXnm2NmjyVnUvCkzNu5qTZGtqrdXV11WWtn6kJDCNAZ42FrLfKemS7pCfybBwhMGkQhx1N2WrfEpxtkaH",
  "key16": "2nvoCqykzRfj7yjPNY88yp3nr7HBzsMrRdzpPW4Ry3ieFYkctFqFFfCMYxW9fsAftscAmbBSv6y8CFGZNbiyfgzE",
  "key17": "2FrRmXGU7gkZnHF8V9ZyeSQhYJd6Fr4sQBehQGRNfhiU5GWUiLbMyqA7rEKRfVCjHpSwetVr2b3GtEbv8oAsnLca",
  "key18": "3ggJUKEoT5MAjivubnfE8nDn46tSSjf6aPbhkDemHdDjcCjrrxXt6WcNJjukzjApYQ9EgdJQchvSUbFH76T3k1JR",
  "key19": "2m6Td5am2mUWRhSqpSa9DZ45gcNEUYtvzizAasEYKJkmSuRjxMr6hF7gWfBBB19xnsdnPNfAEB1ccBaAhMo1CfcL",
  "key20": "2EAeJ57S3GVxkRH8aYzyo35YYdHZKa7VJFcuBRaNQpbjJU2wSGcxse3KY3zL737py2x1orrQpJEg1dcFicPEV1vj",
  "key21": "4AgH6R7NEbZkR8ALurMM3ewRkkXoDzCD9jWfHzbKGjhUeDhFXUgH3b1rXzk1SD3vp713GBjmDptpA5nnupnAgBnf",
  "key22": "2fCXjbmYWXzkGgNKSnzzrPSFMJ5jttr1qV9s631hs11RTVP6TViLssubazWqx6LDiSv1E9RxUtdRu4oV4BrQ1Yjc",
  "key23": "3fqxtiZePHSmao8ZskSFPKD4HZETUQvEgDeeJZhTa9YLRs4pEDbMD7fMfSg78YtsdUAmQphu9mWHHqU8HvsJTCXo",
  "key24": "VMbwwTSJzTBtDdfCxY2AEuT1GQTAC8iUFWn7FHAf1r9vZAi5vCxa2aF2jviAS6PtgkH2qcbwQYZBBXkqfjRMnwq",
  "key25": "4G6CwsH9QLYW366nqhLhryWFW4D2sh6KfnyCLGwEmoEDXfTiZ2qJBY5jZEatS3aKY3MyaGaYDPR3CUt2TwYGpaFv",
  "key26": "3SSH4EXqajj7Aw7JWwEYNhkx6Jb4d6dJ4ivcR2SKzykNMBp3vMZHdusx1UBrM6G6QHfd4XZfk4SZbCoc8jZwWYdL",
  "key27": "5iYmjnzheY29HmTB2aE6rsm1vKx9UyHFi11DSib8tFV4sPngRWP9p5NYtuZcXetf4WkuuWpXwhAXTzP6BMQwVBb2",
  "key28": "aie4mu5RXDdihwfN3RKiadc8xdgZqSKrJacd44ppknHKMmoroYB25su7TA5PXD5MY384W1dNLAFVDRUQtoosbum",
  "key29": "3oPi8n7xYj8eX4XDpMVWK5iEKX1t3pnmr2ZxUtv6Kakdu5akanC5pTqSV2BD8ZPAiy1Sq4jGGvVP4xHPncYxZotN",
  "key30": "5wAiZKcN5oG7LXBTnc4BqzAMZk2RJmQ1eb4XBwrEqErMLzR1iydHiwpQhapcFeVaWyF7SJUAe61hLnfzVTYywEAj",
  "key31": "57jsxKZ4R5Ss9ooKt7JFAJqEnbWf3X2nKkeGuTs1JjoR7gM5A6ezqrGNFzdKwDYPuBTvewa4yqQBG3QUBjXH5U49",
  "key32": "4CkEaoBE528TtpRrPqPgSHxVav2s9Pap3wb8rLzWzbJuw7f964Bz8mAiqmLWJtkKrsvTG3H5Gcd1bA3haEunhKVn",
  "key33": "46xDv9ZT8gQdWBJ1hAL6Hw8DgyGztmJsVbcGDkJSPjLYphNDdFrWBE8nRWq8qsqaxNLUNdDNwzNWJoJFmFUfgxHC",
  "key34": "3Hbjsvg3swQG8EFkt5ZTtWTzUPgYMC6dVinSVjkpRsA4RRQxKmkUHMaKhu5n6dhZttXzDQqaW6Z5g68GV8VP1p3M",
  "key35": "51ruSEUe27EySPacPPkARmHDfjtKXFPDpRxCLJmgKok2P8WiDho8k496f5mKFunEq5bDxLikCGKRH48r3tPSdEoL",
  "key36": "of6MgpS2ez1hrAyeqwjFJcQxfH2nnKMrGY8B54WmBbCqys9U9H8ejy2WjqyLztBo421b14JhpvEFpWcFH2A469e",
  "key37": "5p92EPnzuzeUuaUiiefKpipZWHZg7Nq4TS1NEQdwQHnvBSPXETSDg8cm3tjno3QrrZHSLypdPfXJZ9qKRx7iEhuN",
  "key38": "5gVQ9X9VnAueLevKiGXKzEMm4RXHrbpmXDjXFsuggGMm6cG1cjM8YAMd4aeQHkGhJ4FHsJWH4S4KEfSSXVPDGQ1u"
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
