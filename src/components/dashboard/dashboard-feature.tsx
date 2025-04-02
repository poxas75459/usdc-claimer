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
    "4KrLj5dit4M5j6cp2yvTRo197v1uLL4zv5AeWPLR9647rKZppbCoaZ6ru5t7j8B64PuDTbfVFtxBxA75Yj9BxMTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cP1VMpPbE6hTQuPvPiEivwrdkpXDqpFHBMHxy7SRGFAU6rBPt47zaCY4sGh7nPDa1PypeUesKGR6pqybyDXT6QG",
  "key1": "5JSRFeENu93o5UdXFn7vSyn3TeSqdXNST7JFQ9kSnxuzjCUZZBCFkqvg4QCfyFSV5rdUgXxHz4ZS3mkWexccW8SJ",
  "key2": "2eF6TSqbFjWnpjB21ytMqMVQqHcLkHMEiC1oRn6EfGYPenj9hVwe6hbktqyJwXueagsqBnNfg87Tkmi9BCWM76yt",
  "key3": "21JnZJ2CxGHjWfSqVg7Nxekxo23FSAaQKfP5YmHHcnbQpkuVa59GhpB4q6cmP3Q7aUjh12xeDGWSWCA1cWHCqaC8",
  "key4": "5wfTbFG7vWZdADzwg2URwrcseuF2FoPVva5bkhurAsudmszJLSf59noWyUXwEsgFZwVVFJ36BEBwa6cCNT8fkFZb",
  "key5": "2j7r2TuGW8RYQ2YhtYbtF7gGx1VVmmyJKSkjtpcqvV61cnzE7CPXfVroaPgzTZ5xBEcDJzaERtgf8wf9bHKtGiUq",
  "key6": "2d8eKQCvKavux8TFmvtCVA5fb5EtGd47rS1jwSHZAd3Jjicg5GJ8sZZsHebB4ZSA1KdfGynW48f1xsvtDCQnibJ8",
  "key7": "3tzfkaaAUAL3bGoDizAd3wUBCrZSzHGwWvx1gopbYGakv59yvd7GjMqJALZTsBkkg7CN7VvisG2vFKnUuCJyVv4",
  "key8": "2AGpMbwpjyqFZhdUKPGFT1iQEyVjDVYhkFWnvBMbhm6uX2AKhxmpus2dM69mGKYhoFxmXykWkteMXi3zxAoUBDob",
  "key9": "2j6ckvuK7RaC3aCNtRjCivTVGmW9KCibVYiFbQbNpshrRp9arXx4pTEaU9ybYxGgecSL1NdFKcZvkTZ2TuczNsnX",
  "key10": "zqXmTqbDXeeuxvm2WFWnPVWQ9cjQkhEotKMjNZtRDtSFnQifUTNBF8RwuLnGdAJnhWGMfn3pi1Sjt8poyD1t3j3",
  "key11": "swbwCaN1gVrgMJLcGtmNHarbuiFwKAbmjDJZxyXG3CZwZg6gwmgRUwjaWybsKxWEFDGF8RUL6iZzRQrFTYis89B",
  "key12": "3B3RiprtQzBd1QwRFQsqvN9dYt2HVc1Lnj21ri8eP5ZbBZuxmbomKKkyroGbeN8DHVbZtQ2DLLJbLkgksbQP91aS",
  "key13": "2VqL8kTtuP8prib7uW9PS2YWqdvTceD1Xkoy4UYWcCEiDsUiJvYKQiZGN8k82KZc6S6sj9JgchZCwNSjmmozFYq1",
  "key14": "4JnxUUbSoexzZZY5LSwvawq1HduyH121ybioaCEmP62BPxcLbQ9YUdCp1LqcbtSYhN4tTwK1pt3oRdnuT56cpRNY",
  "key15": "3XTSc6zhSbQZCpac9zFzJUhCnx5EQoBFVPSHvhJxKTQwLBMnDT2Mx3EXnXXd8BCdZ2nBuinHwHMi1M7HSnhWYybM",
  "key16": "3xKdwkuV7zLAHaSuzEWMAznanBgoLQHscTNm145k21RG9jfzK8wJu3ZELhadMUzSEkfEw9zhNNoNDytrK47PxoEW",
  "key17": "2M3BnLUy4DoG8ez3fHPVKMQ5D9WKQyc6i26xeuhgqDfQ2QZ3HKrZrEUA9atD6iaVpABJmnDRAqDDw7PXQXUyg62S",
  "key18": "2wiaYEap6FVWozijHfZATotT7Sa4r8ijAZLWJkAkoE6rhDoTGpkmzNbXDJUT3V6UmSeRjCLjq36dar7X1RvFQ6tv",
  "key19": "3W4esVmJ8XuBrXeyFNcnC5fxhSAvjTEN68MNf48ueH8Gb6kQRba25Hmt6Grq5fM4MjZvUHVgZSYv74hWkTdhX4Cz",
  "key20": "4SjCfoUzXdWErYR7tud5xYvGLfvft4C6MZF5zQ95e2Z6ivEGtU537U2aGF7RhFz8MffuLogsbcKxbt1imAeoiXHQ",
  "key21": "2TcvvQK7RXjqMPNPxyiJQAHbM9wK9XvVqQXfmSyhX1FfQuyV5vMGMJxsY7fLdp7Y7u63JbXfHHFhDyMsWumsXvtN",
  "key22": "2m2pcZSKwpfUv95Rb57e9gbDqNeBt4yyndhLzt6HgBwNdoMszcXrHUmiUnwctUgjcQCH3Q2HhbrYBZsnmBTM8UmN",
  "key23": "4FZK3MRahVwPtsAFRLyPtWHVghAtxZPUxDRgeY5qXPhS5aniQM1Kpw5DdacLSWNbgWTWp9XHMg8vQqj7S33HAV8t",
  "key24": "3nXjavkeb6aJq5VVDKRgWw1vtWid2pVBmMUowxPWqHDwxkNH1JwzzYoG8SJiQTxv2rJVnAp5Thn5CVuVGSrD6AU",
  "key25": "nBCr4J2aVbnerrYNuFrF978MLNeYuFQMAuamBiwkVy8RU9fuw9NxGZxkEdno72FKTqs5bWxQsrJgj56S12SR8mZ",
  "key26": "3Gt8UXhoy3c9pvLfFrUthMjrUJL7ZwYnwDpMT6riZGPRR7e1uTNjXVsWMorJZ7FJoVLSMxB3X1zwUiQhqygzDBc2",
  "key27": "36Xq98u4XLbUV3Px7YHLQxuFhViAQx1JhcPbtAqQoqqNsBfEKActETnrN1ib5rt6WNb7MAN8rDADdPYGmLAxui6e",
  "key28": "2qkL7ya2Aq9wNDXHgKC6kdzsLpPcd2iUjV1cXrmpfAVrJEoU8wjNCX8YRBSJbWo6EXdY55Uq3hPPxMkEfHAfJC43",
  "key29": "F1zBnPMCeZXnogFBipFj1zBPZkAip2FpaYZapzgYzHckPDPL4jU36T5n3m5ZcwYwRB2WDZDA4dQKqupM5794tTc"
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
