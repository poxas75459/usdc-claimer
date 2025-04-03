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
    "5MxmRJePMErE8odDTeN7NU9zuxjydXP1H7aywVPwEdt35P3Ss5qZ4pLBfePmLdN5sdKqvBfMxviP8kEcpJQzvgSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2duxTjZHZifnwZkA8T1jqA2Uz56iFTRJfJmpqhNCzLrmtbwq5fV7uLpDsofQG1m7efdV13RB1syXKvKffGrcC7CU",
  "key1": "3TKTRbUn1rC4GzAhL62oXqp6A8u2YZUkGBqNDyEd49b688gUcNvf1Vn7XkgYHNt9jjJhSa3FkgYyU6XhaH74burd",
  "key2": "4nXvrPV3FNE5ZcmymwLPASaBnZYaM2CGnApE449FBi8rbJkc5sNGc7NAezUCeLsPBuJYk3ufMU9fCCmjfNiscD7W",
  "key3": "5LYcsgGmAgNYK9dJDCAScWQ5pz5DrrkdqdKDvL8hiEyYouUXw9VDy8bmnhDrnuqnfrqrPBJhs7QQq9nn13thEvZK",
  "key4": "4nKHJqq13wpcvnvAkUeTE1cZ5vU3M4MPjdUiQpc16KihQa4DXWuDEMssCHBvSuLKgCt3kEoeF4jyuNhPX1geydqj",
  "key5": "E6ZcmpmkG9WpDn7nXi9Fz4JGbvcSoYNrVe8MhBdaYgEzmC9wviwa2oPKu42r4LkuTjN7gk7UVaguHS2dbGstg8Y",
  "key6": "2244pGA8jA82gPYTYdkWx7vhVtEpdYEPVFiLg3gKYLEbgaiexVpwfaYyiGCHqaKbp2nWRn5bE5J91eUfdoHfj6MN",
  "key7": "5FHiDgcRwthZWVKGTUVrEYzVBt6dYszmMSDdTnCGK1Fe8DDRHYfHkzbDri3cW4z8KKrCZnpRqSxKcYHCb7BavAFY",
  "key8": "5iDtLX1hMzLefXLLN31JnbnwKhbHTNsWKmwdj1RUqmeRys13D5MT3gu3AsPv8XX4x4iQmKtG6QUkE6NFMpXWhJcU",
  "key9": "5HrjFGgQZw5iawa6pZMyieJJXYy99UYxWwqdWXVeCa78QSfG8qtLS51Q1GXHAFkciAzrcdiRbVL8gAWUzEgoxFJA",
  "key10": "5VuQWxegPz96FqBYA4JS8kfKwC25ckmBqWtLnHtMcRJ6aKJM5RLaoW5fpWpgg4PGXhHy7B24PdhAA5FxHVxHr2si",
  "key11": "2xSoUAGWPJERes2xysJcAmspypXqtZxXfM46ewwP3jzn2f9QFqA57Gzcmb81WaM2e1xznpuMb8yUcyumCYMDGLn8",
  "key12": "5GL3r9mYmiiExSWSsQfkAAS4vUdN9UaMy9EJMH2BWvokz6yFgHmHoiXquZXJYFY2TqyZVqmnGrNfHaet2b9Wuy3H",
  "key13": "46mCpyPefCQGbbJKVkFHdFrQ7BrGPW6BSMMKvoM6Dx7gMz2r37i9NtcXQT2BqiTzS3xFhu2oiigYhij7iiBnVNMM",
  "key14": "4EaTDcv5bCfG6NiyYEDt8SEMVso7XbsnBvmzZZTHUA65bYc1buZCEfyAJ7itip8svoiaRoeNwRMBWn3mPuG1xBiX",
  "key15": "39meEXDCbj1Td7RpBdWdLMbjpjvaze218m6nQjzWeDPbHbVD1QkcHPrFyTiYibCLo7CdXJKVhaR5jT44k2q4pbpd",
  "key16": "4yDjQKHfMTWustnLWgtp3wGWgYbg7CYXrBGwBMesnrjSs3qMemeMFbmyXRp7PvQG7YqzHr4wZVfrdMk9RxAm8Dbo",
  "key17": "2Zid8Xd7MuwYp9atzt9QdqTTapXbxDX3n3SMteuk2x9xe9AwCHNL2bXXPSZP62z3BrRAYpKkWSYXVDrknbkuxwhX",
  "key18": "LAB1rJXy5SjyCfM6HrDoL7ro87fpdb6rx1UgVQoPUNTwa7a5sMKNmA83bbhusoi3AfpjZCS1Gn2bUkVwC67fu1V",
  "key19": "34qtdiLsp8sNsx98zc7qpQoPKeZPuUMCNs6JM5ELNeYCn3oCjrFU3HFqf3MQxxJAjw341kLrdgScZVkTMY6eKkTh",
  "key20": "56eMP9RGAGLSbSQcDoBfeM2jKWQyW9HsZLB5c9nXDbejjDRpuNmZompmK3HxYfv8EjrkxDGS6yeXzbe4cGeJZXVG",
  "key21": "4qr81SAs9ym49aXLKLRv9KdWRcAHL6ZKUgj7XPrSAZNRxKThN7aqPt5YtffUB6Q9VH1DeqLPAFYgNh2EpghZ2BzC",
  "key22": "5FiJDe9LYn12tw22SGLn43CmU2aifSw1NtU2yFCY5ZVdcuGF2eRQJ1qFhSt25W516Mv466rErHFiYbKA5XR8mVuV",
  "key23": "67pRCQQmBik1iiJUhXaQybq7xst7bQBH2GTVJFp3pQAigRNEgZqXv4nF7MwwkWrB2465nDq3Z88c5baSERQPve7h",
  "key24": "2HNBVZKgrVN24Xo1y41GnyDPG8VMtYxcQW1cr3CdQuDrpUupyQijdTc9cXoYsPGewqUrXt9BiB3RUrxrzgVA3oNh",
  "key25": "3Lvm6jwXYi6ibsfmcpCdnDizhKxrQuFWV8r7CiAQ76KLrnAk1uK7zAzfgr7GwFSzfUdnijjNjzYptQJvbcJ2MUz2",
  "key26": "4c4spMG46wyVVAtM3LQKbWGmYDAyjW6T3x5RQRBQD7sMMARyDXTSWFtECLkUQHMPhp5CPwcqic4gQw4CjgdmrEh2",
  "key27": "3RysRR8VxZNhC2NML7W3Un6uxXNaUrBumMQyFx59jc4Se9wxULSktesnm1QLzV4QL8BAFqAMs7oWeTFtZVTpfKxM",
  "key28": "puywAacW19smCvCVLJJctPsEq813R696KB6g5Z8gHvqXkTvcLeArcb4WQVYrctxZJ7mATEXoEtNpGRphhp8UCuL",
  "key29": "3DTyBAdsJt6zo4cVPijpbJqGZtxY6uEBexwkPfqmA8D7hKU9nnJibrhPHbZN1M9x1iRpcTMuXzAmuSMBkVzUmFwn",
  "key30": "2JR2EtyjUqE1mCcJrkQEMEv4paR9Rr2xHEpKopGg8zNmy9EuCDWXjgBwiAKQhQUiXUeT5k8UvCgTeQap34xk9MWY",
  "key31": "5dwkNmyYtWeQnAwZzFfpnuYhtLCkXP65P5NWNJU8QZz93iG4E4ec7XAnpvXei8JtNmjJfVtohw6mVAMMqGoxAba3",
  "key32": "41p7x8A8Vd8odLKN8DtGD2QgdVKjwpRHYbYFLbrwV7SCouZMNdjiiZJAwMZMB6Zoj5KxgpT9vzh2X9LGPX9qKCXb",
  "key33": "3VaFFvcfh9cxChzYUiRSTeUiToZjHqx3xBVQNzCz8XmJ4cVFStEnJj7CskBPELXmoWcbG1Z9AXMHbgd852BBfcG6",
  "key34": "4z2zb9ZDeXEZJFb64XydearyF3i6kF8Rshkq4xZAwrwX1U9V2YoLCRDQhzebHTHasnoAne4g1QJKVTroZPbVzRbN",
  "key35": "4xU39GJPRdXgk6Kn9z8d9NSNKtPb9zXHvMWUny9GzKQbmmanjGo6nFSRXoizg7cnoMzv26Z5r2JmkfVVddWUZCCQ",
  "key36": "4EESYeybWMQh8HZqyZF7C9tcEfrfXMngg4WJ4GvbNedfcTFSjAecCTfTTRMfCFSRqi9wFiaqBQFUdjAjjygv5tPW",
  "key37": "3CzpjAh2hR5wnersd49Q1cEDHRQaucUH4b5AQq2y5k2yMaMcoRJEJ4fMiYHrUFG4a9RntdCDtAzxjFASyF8FBhq6",
  "key38": "31C6cT73FD1KtrmHXoEh9isLp952nkMoL4FpbR9RzPzC9365TwUgyozz8QAQeej4P2j4DkYkATZuskfykZhbXvAC",
  "key39": "8KtiNVQQuSuS9LWkTA2NvDunHLALfcQvnH4FnMmwtm8KarcPX4zqPQ1UzoV6PccG1BVbJNqgqEGh8JbdZuiEGh4",
  "key40": "3hgz1t5HSXK9NHzSfGGBcDXzpPDUu6eDx5peWJg4awKAnDDZnFCoej93za89Vgbd2RPbteBsJDwSuXHVHVTen9g2",
  "key41": "3C7Qgq4LFzQcfhrUpK1W2MBG97s3mXZrXvKU77ayJ4KwXneGagqd36MZX2ypYFKpSSkGQWPoptumgC9VALooqRfs",
  "key42": "MHJqRzqwPoK9SHzyGgXgg1rYkPDemkqCdn3QZaMPHDeGxo6q99ENzvgjPqda2EZaxZjfR8pWfgPCsiiSKJCu6Ff",
  "key43": "Tip9eUiw8TLCj5mKLLHXXYB4zoHmdUGrq1rxBELn8tyDMstgSZN424pbRgVJNkM6tc2PtRavCGuNCcy3sxo3V7G",
  "key44": "2FLBZZ5w9M8P7u1etHT8epJtdJTTYW7mXpLQRQ9WFhC9pdHyTkktDpUV4gmtFXczwBKd9hiLv8vARmABMdXVXNyQ",
  "key45": "2x8x3co9cd5wxbvPUqw4ezPWDV1FvuvGVkwwCfKcqnoVKtQecQwNQk2JsydZWfczTU1MnfpwGsqpsedtfWHHkW4Q"
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
