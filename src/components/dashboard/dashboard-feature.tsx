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
    "4oZiXTbbCaFq3VYgVLGsfPSf4ceDMF7SffXQsCyHYJHm9MUzeF5u8S6UQtVnzSkRQg7KK9oWzDdag34aUQrL17GV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HXcaJoz5ntyEU35afxrUxZo6gJWSDd5UzpSmFF79ZJ74Hr4Lec5ia3uVgHTxYXoL9jah5quh6iVEVywZW5PYHLX",
  "key1": "3cJVqPA32HV1RV3PdescdeUVGK3de8rq2wVALGwEAJHLbt9TexNtXAfmKhQbEUaA2rWHztJF44tdbAZFiMXd3HZQ",
  "key2": "4xB6jgKLyYMCvv136Woed4QzjKGEtXwsKJ3CZ9RCEVbQkChK5kX49whs1jYR6Wq2TgCZHFy7JMGH434KL8EfeiXc",
  "key3": "37aaU4UwnvBA9tAnfwcpaBHU7tMbv6bjifUyCgPbPLbca2YAseFf5Hek5PYsdEMFMnMFSdbnBJoxfHsUx8V9PTry",
  "key4": "2aaWHfFZXZDbQb1BHJVZ7P5pmbRT4fDhkYhqMnYt2fVBqA2g4f96WDrmmqvrkBQjDzsre5Rqa31fZzxjZgxUXNaK",
  "key5": "FfqiZwbe6pDrvKttfnbyNjQBPWUjarac2oyL1SPEScy1AyiFBNekEx5gfUqKwGrdaPSBWC2TdREehM5r7f2QxB3",
  "key6": "2dZiqwB5nbvgXbyJAFSSb8vky4RKurwfrhSsDLNqbwXnC9Pikk37UR3b58jzWmEMNX43vaHVJJWFcPEbFm7fJcvo",
  "key7": "L6bLfk3DP8i7QUYWwei3UbuNkPpYCAGWF5r3LGnaYSq5E8EqYSvTGFAPQrRVkXvdNS1rB5roRxcoZpnqiEAGySX",
  "key8": "4ezn2M8DQfp2zgwnMEaKEz8r4rpqEoHb7eeoenYnEbVQ5QsSpTqk6PnAoabEvEPDwXRHmQjEgVRNAhY9VP651ux6",
  "key9": "4mg7qk6R5SygxYCqAtTEVTUvBvYKr7o2GkNymu9hhEMuxk7KdTgQG44hm6kKMxobvKPLcUicQK6MwrSy1Pu2UHEM",
  "key10": "3SmedoH5K32WN7oWcgKib8pKAwdyf4yZYpTNPjMDQxgdcRw5gx6hbfYvF7jB1u9NpPZznDk2yyLwYd2wc96uoHKc",
  "key11": "2qVZQDwJFu6WfBDUCghM89zXGJebstk9K5V866nWJHLKgWja2XCf6i8bEwWZEadiBc7mvbruzhwovgoEj2WNdoCC",
  "key12": "5cVZz39n3EJ5YuxrgHGAiu5HLrrpqko3sdTxxG99G4cDD49BkoZPyY8MiSTJ5JpU4ACVdYVVvGXjzV8Ta7KHMCtj",
  "key13": "5iKw7rsNoHWC2XJC3gHcLo53MABk4SpQQLvdS4N1DhTcZSdve9VkLtmz6HnuR9qUFp7jNDYDpooSF2gftpW4AJVQ",
  "key14": "2RHZkjPTFCvDqgR7L6wSLaJZ5xpvb9VPWRG2r7AC8GvHXv1iGkY9fij9cmoZE6rM6fpfc7S3aJTYCGMzCuvbQ1xW",
  "key15": "24u5crLH4ovf1jUdYUYDHD4gG8hhxBwdbhuZwjzLqULGx1vTHHYnDkEyk8zwQNfB6e9viJTcDHjFcKvuVxWBzk9K",
  "key16": "2LCFWSNMPfw6oNQUPCpRq7yueY6sF6RdkkUqPdifh3aLAm9hr6nrSJm5AMdAmhhtXMbwuuc9VAAGsCx5Zsi3pbUF",
  "key17": "54HetHTf6xo2XftFsQ9VLUuhEB37yYDYTTqJysEbKvrbq7oirkJdnCjHApALwdS7WZ1t6jhTW5yzBgAb2EHBMgts",
  "key18": "jXqmZgJFfVNXfyjMzQek8DBKfKLNnhPsiYhJDvK35QoCbYvnvYYuNNYBmMCrYTpApebHCzBhKNdY3Ck7GwsYk19",
  "key19": "5MCxHm5UeWWC8hRL4qUpiMFLqWX7v94esL5nSKZqhDZ5HfzBnQxAcwgBhHPwf5ddkZkowmjmX6rBpAyL4GVrfnNs",
  "key20": "57QrvtMZQkUDznsWdaTWwLGhC2rqVukoUUVfAMVoMVttjxprywae5a9XZvkmXeaJo3cZg93J7oK47g6UTaRRiQoC",
  "key21": "5gCed3aMvvAkChwY4aSDdZbYfT4EBR6qfyMhjYoNZbFc3twDxycwdYwhygMyy1PXtSfFuRrvBTwSp5hMHYoAaNNi",
  "key22": "mTtCNA2kDpBijbftnWhgkQmGC5ec388EaooacTcf4Az1Kf49jjWhD4hKoJj5mG5smVuDXxwyYTjPnrXHWtGjTfg",
  "key23": "4LmXau5ZkQ3PEN33TCB9MbYPpY8gbLKTTBZFqDJrA1nf2CYLMwdXwrZ1Y3WgCLxEqMVER6vqmYuQyPCMs21WMw8Q",
  "key24": "nVzUy6v71wxhhLgFb2FsofAywQej1BTs2HBpF9vQG9VULmv9Tnou1sLAfVFk4kgk9AYjAWSGugRYbTyj8P5XVDj",
  "key25": "4LxFE8dLDBsUhSv7WVzFNEwnW5DsEvE9gHMG7ayMgqfmpAP2L91XnvbqWTTU1689FgAEj1xMSsjxjhf53mKa2RTf",
  "key26": "2oMPNxGPt1iHNdjJqz39vEk24nWpfdAPvSdmyHAR6i3AU6FqkY8Exx7ekHfM5xWbuNF1ChMLHsWQKscbVMg8xcpS",
  "key27": "4rqLHWSv2eicPDHU9otsb8YZ5nyDdJPiocwabCm87vBWdyTbGTSEYadF7cySPdbBsEax8uRwtiUTeQh23frJvf15"
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
