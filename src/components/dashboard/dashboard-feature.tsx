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
    "4egF7GvN79jmzPdLrkGNG4NkmqiY6F8GF6CTHf69zBs93vMPGiYqT4HsK8eQitRa8nvGrYc57VceMw9HZzPffzA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z8FXUFnFP6QHA4d51MF5dXwztnxJY1XEDswz6EkQ4B24i5L5e1r3n3afqaMaDSNdAewSUFrpWAnXpzb974Q2Hn4",
  "key1": "3reqAmYpT7Grn6yp75CCorSGoR7eDJW478RY73yG5wnAY6bXBzx1eZtJZUGkQpvV74SYKP9P7N5EtkY46Wdcay4g",
  "key2": "4ZNrdZkR77is89cFRZmEnh7ADqyR2AjaFCKuH3syXyR1RQePh6eikUkCZjPthQax8Ab7rmVNUFrhYQ1VbND45UcG",
  "key3": "2niqjYXFPALfxhAyVH5VmAfJb7TAfVGs31hit5mjv6i1iFrjbAbbRfqdQtmV175C7um9mFCkf69PR8HAA7fPzd7J",
  "key4": "hADEnrC2M5mBSh17d3W9ormW5qYPskVnuo85R6tNWS6s19nNyanXXUq6xaEFta5AY3eTzU3yLxqbLvknJ95kJU3",
  "key5": "2xH9BYzexGG3W18usSqyphWEWWsdWBzc7d6MFXStFiFnPniviHfE5FKhosxdbEbSgAYLdX23xGGfkqHNRLP71Tgh",
  "key6": "5g7BZzef6yVrznhR5ad3mBYhLebFMts6iP6JzpkzV3rQwwdQ9EycvKs5N47yCYUqdo1FnFKhP7GHWnYR4PXChEXN",
  "key7": "4t8fWgmSF8aqwJckrUTcifanM7YxvUNNY1UUQhVPH3d9hHAcC8re7EbYLRywTshq8LCpzD2R3HEBwnFJMYWd8CDF",
  "key8": "34u5hzGGT7pBqqwQh2yxhCt6WzftAKaFBiD8abDC2dky85Q9nJLbEYfETix4kLwRAAeYX2vWzbk3ZLW4Rfq4bVsV",
  "key9": "4XmmTdBoPdUD2DyZn2nPC8yTjfYQ2tzpBUgvBzUFr2h37VzkiE9WC7oVQyr2xU1TishM9jGphXAdfk12FyPt7m7k",
  "key10": "3NSV2s9Md1yx7LeoUPgKbajhiXG2XyUvPUJUV4rV9iMjH78CBNh8jL9Sd6cmtEh3FrRE6osRRyb8f3fmvVQs1Z3W",
  "key11": "4Aatz3RjLJ9Exh4pbQfoGRtMR2DyQ5K2BX7FAU2b1tTTJejtLTNR8GwiaVBDyX3UvrspmxJFETK3Q2cWbKZM3nCg",
  "key12": "37mt2pxCxBT7Qw5Wd3XQ2ipQvS74ZEgxGzdjAZ5zJU7PsxLLfmVsbuerjUotZajPV6XPCUTETSj5Lc9MjYDjGhuf",
  "key13": "43EqfEiCUunDcQz3rQsnh9RtjnzR8REqkqfHXAC7WGEULq2Ag8fHU8NkSrZ2Eummwn4MVtqeas4gDDCxd4TFS17k",
  "key14": "5tNnb3RcC6WJJQ35sZrY7T7TXMgmdK8jR21i59Ce3PYq8Xk3L7FRAZ6Ek98kNDJGuqLwbLCMD3XwAFGMEBuCku8i",
  "key15": "BganUsfJ8q1JewC7f81xF9AzvnLShFtiPaXgDqdvWG5TP5WmPHjiESFBDgKDtH688ZZdejzFdBiwdRzqEVaWxot",
  "key16": "5RbP47AVM14DroWzZ9wHcWH2hwf4PLQqktrXpSN5e7vSapi4wkfZKPa5ktin2vNWym4weCGEH1gBB2D9fc7uWT2w",
  "key17": "2z1bPv6QVFXtfqHrmaoDSxq8pTHHUN4PMQboJMQFs1fHzPKCmzM6yECxnnWzAN8FNNXkgXCeVeNC8Cy4ujeC5azK",
  "key18": "pLbAQVvsM2GBcqWeYhZmwVtwFJo6nce3knPJFor9Kh9DrNfy4Boq11cehhLxEyNsatcToXPZeZu2VcKXA6icC6c",
  "key19": "Kqy5nec6Z8rzF9CR1NPhnzrV5kRe8Nzyzz4KrGGHn2mGo9BXR6nRcrPM4QERpMuCDNzcJzznqa2P1SnUcLjUyCa",
  "key20": "5bMGDiX5syxVaEcDq6zrTjAxvt1ETpZSmHef3DXfReW9o1nU5cREV2zaoKewddh2G1BoXvFoAJK3arQM75CgY6xZ",
  "key21": "4UoMPnPR7Wi3UFGtxqvrVX3QNLxmXbGXEtExAL9NeKhVpzSNo9HSWJXC2RtYEcRcVzUqW3cPoVoxagtjj3icPnuj",
  "key22": "3Sx59h3mnAJXPCkye4CbBavdsUryZXPAtoHdU43NLeb1zyibZXEE9TXFwJNcRbVB33cAoRwJ9euD6yBEwKqxyWyV",
  "key23": "29n8iCJRVTfQc4wBaJY77a67K4LX8sYhPnADW1dtq9TLrivtajrioaLSbRjqeqDSgmUBx1hCaPkBueLHuEG1sNYc",
  "key24": "xQDYQ8xrrNFbwaQYBiHTibHBnv4hk4aXM5FSY3F2T1PUZwDQwSWFp6W1VMbYF7dbXjXKwHzLLhEgoCsmPvGBJ57",
  "key25": "5wCvmkwYGzAbn61fuRkM1Xpmvu4aqsvsroeRPWvr6Vscfa71BpdWKWDsgniJG1b7tzEnUc8uGLye6Xvy8WwU6GJq",
  "key26": "3z6b6NSDLTNWMQNiC6Px2fq6KJMJyUUEwXEk3PAgScnYzut7wDMXggF1LvnQyG57T7NW55Gubx9y3Vtsm6s8bdkU",
  "key27": "3QBpTnZheYXbNESx2u5PgKuqq6cAuF4eyBKEUHXfY9ZR6SM994UCp3HDW6sX9LD12yqCYMosE5qLcrRTjKjRyAno",
  "key28": "3JaW252eZr7gF8MsKu8toEezEnWruFK7RwLNG5KcJmCXuacYX8V5ijp27x6ug1NdAieRtaxQLWLKujqyNm9P8G5h",
  "key29": "5ogHWSMJW8EXD5AfkdvXGFpQLMcXsgCtkQs4RSY5WkFq4dWjKH85zQVfjcy8bXvBGgCEpjTd4L27cFPqDcRsML3C",
  "key30": "2vGMRUq1paLVv8LYZ5uxhB32zKNsY18rKGsK7yjirEoDN7z9JqZb4FkDG1Tz7GaTCv9ELnxwdRqRQFFrK7mt9az1",
  "key31": "Criy1UiY7vSzwkhcgoJuZMZAZE78CMDckhhe2Tbq2QdKnbDy7ZXG3ZyqhF8yChB6EZdhNdUsjd9Gcb9WaZ35Zii",
  "key32": "57Bbgn9QRgUsCXRfPPg3iv1zWGXrYz6WSUGsqo9aua8dJcGhhbo4eJH39PbYw4V9XoJfkDfaJggSSehGEXJJRGMY",
  "key33": "2RYSkzDhBtQWJwn6Wp67akSLc9Rj4m9fAH6sR3QaqEnPQ72rSHxgND2EqwRbZoQTLA1eQq8iVebnDvANwtq9LGq1",
  "key34": "4sBXF7UuSJxdFTrsdXK4pC3J9QjUWovf5dR8kd481s5qgYCzVrvvPGNSBtwEuu3bUYv6QoVDrJPchB1fr7LGQbgi"
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
