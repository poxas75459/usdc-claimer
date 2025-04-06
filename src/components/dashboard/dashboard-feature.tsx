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
    "57Jsr1soYRbQfp49FnHrDp93yMaeVJnsJ6715bPXDy55NkhUyeGkfcyomef6h42v9xKHRwx2bdSg1swrBZsq2Z6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43JjnWdFap4aNgeYc3eJAteNdADduczMeM4qTxF4KXsh16zBD4JwMXtxbYfb43u6vz2GtJ1MVGQGgiEKCApqV5tJ",
  "key1": "5GEkFpzRRnSGQhpWkBpwS5ZSinCEnRxB9dnTXficg4JxwzVLdzGWpyZDzcdQCdCToZ7W84vKcXJR9AZg9ttYVtM8",
  "key2": "4FHVfYyrXGJTDUxnp7KpRLDimDhd4HeYifFh3wZeya3YccMaBnYFmd2pLpgFbCTCFZP2eeZzz1mxbicYCkUrJ4FE",
  "key3": "X2fA1LGqhNrnDzfwcieE3vxGmt98he6iGtewfNhhFa1SrpEDpSaz3fcfvyiibT8QPaE5CJA2r8FWmfxAwKHNijH",
  "key4": "63AzvCWB3eTP9vjA3y1tshHV9CUkt6RQemjqwQ762pUZqWgbRx787DgNgrSZMD2u476nnrajocz4Szfv5n1Np6tM",
  "key5": "384VwWT288brbd5h5d8i6HHd7w5UhxEUYF1fNCjryHcFBJ11HcWdRypdQtcvPqXeTTEE9PbkL8bVaxA8fxnFgmoN",
  "key6": "5J47fU21f5dZbgBGNWN99QPBZHv9xTKk4zZfpKHeUW98cUXjgTAVKMpMY5Q2RyHXzjsPpXzf8qbmpv17q8xXxRq6",
  "key7": "2GwsSCWjhcHiUCgaevHRPxs9kRttp627SvFrS3B7K5diDTm3cGDVxXWBLWZkZdp6m5mZD84kU86y33bPHJQ5aJ4z",
  "key8": "4QEFCTjXDufxxA3VD2amAsaEAVZ656u4HE6GKSXjaMmUSQmJVxdKY1jUeXhKtqmMBAasrrBMnu4Utuu33XxWKR7c",
  "key9": "2BcUsAXTeTv4jdt8k1sK3dALck2eyfadky8vwvvgsfJ1qamD6jzhP3jpjD4V6F7PppG99gYR3VXXDyfEbY3ygpp9",
  "key10": "WnhhVgHnq2tCfERmceWyVczHUpGFJnGQWkzoUDdBs3Y88GXJdmei8K7Aona7QezHQfg7qzc2S7ULGSyaBTuKgEs",
  "key11": "2w2NcnLokBtNEq9s9ZRocWZTU6R8aASgpLxzABb7DYxrKEnDHbYCByS3FKVmstyhBa7RfUn2Z9GR6huqnZs8wyXj",
  "key12": "3bM38ub43NtQojNmtSZ5kSpNbwcZjXrVWHnb2HwXDD41DeEfD19RxBmfv1tyGPWTAFBvqC3w3At7DLdEbWxx2dME",
  "key13": "3VBiSfsoEJHkY8Y2Eg3237PaHL5Zku1G6B59D3azxvQ2fL3GZGV8taJVkjG25PvKSG9heHrWEPdH5uKBwHsQ6APA",
  "key14": "5zP14momgRKMPxZqnmGeP357Tm4yezwd3pY9182aTojQ4UAn5BpJvc8WK27X6AJKPMW1GEDvpuoi82AzB7aoKNHY",
  "key15": "2J1Kcf4ESWq3fdXv81vs84UjTZBJB7FQc9AccC6fdvtk4saS1oL66h89PJFpe6yRjokEkop1gVswFGXKiNCPZm3C",
  "key16": "5ZJgkardTid2PWdQvSc1iBLLr1jkLQ9oNWZKi5QYtF1tDv2aWVgJMLPM4jYUQUKtZ44Fmh9pZUa6XtUMXNE3EFNV",
  "key17": "5nss9E6jpr7dZ2cVE4MCwcmYxKx5Yb7yesBPBA8JFJrTTMqWirfSMCyNL393yAC1qoWA9ujkKLdq4GkfoNmL3e2B",
  "key18": "4ZZPUA8CYi7bT5YSyWSUAFnzuQFzfytPhXKNUuyQhP2WYnKjDo3gvtgK3pCSiS8iHJC7TX16Ms7uxWZ6n3xGfmi2",
  "key19": "H3TWMKMZHkDCqLom7fE6r4RQSJKb7xLTeaa5Lmx9E9maFjeS2X62D2r2YLneW6cxnj8PMTi2fvmDXtKzyfWP6EP",
  "key20": "22dvT7cV1GS67Lmo36xSQfYHPMq581SJdQxTbHxyihot46pJpYqvNPi9A2SmzcBTsfLYtjeJQxXwfwuHXrT3tG63",
  "key21": "2NijSYBkYAv7bLKuMhUxorAXvWktk1ewfeyS83d6DV9PU63evzzLRZqZTEpwvWhvXPvczZYtcQntffqq2oiGWxTF",
  "key22": "3htoXPgBavfbpuwAj9v1qad4i3SGpYXAme4UuLVks7NMSqGan5AfZC6yUXh4dTfpvrD4TUHFv7LdmxQS5zhZPeCR",
  "key23": "5hSKT7U7VY6nXxbxoAyYNTqqK6xdTWr9wyxhzTFGuvC7mfMQjDXdhiiG7SDX7Z3mW7YTaar38m2MP425RN8NXqdh",
  "key24": "66ChtGG18CBQaqe61NnWTj7ccPoTb21vASphfMzaeRmihuEoyTcrySzRUonsxRPvgnZoFmTMJureE6n4xhDv4cHU",
  "key25": "3CXu1L23Mfs5YGcs5uTvmVCUTydQe73Sxq1NGYXxYcS5PQSnFzwXHM4FKuntjzuugDifsxPvzsQjkmyKpbF7RRP8",
  "key26": "4yTSdRizpRkdLo9oEQk6jVnvSqc86segr2VrvtWj732AWHsq41FKYH3dnE4cF53t4cpQvZ159QTdRvUWdJmN5gzb",
  "key27": "QYWmKXAe7NuzbkvMV44HMqbL5tHeQra8vGFLBwZgUvQKGRisNcNP69o2SdZ6qkb5hWpbQdwuBwNouwhCYPNgrPi",
  "key28": "4BXT421xwC9zJFreukjzXeAajVnrChXJa2AmwSdggRegA7Ef8gdae5eJEpXrvf9nWUZaRkmrukJ5TPmsEHE8sx7R",
  "key29": "2tfQGhp8XSmK4xjg4HhEiHx2pqx7ccPWnaPb15As4WePJFbpiaRg4f4KytzLpbvoL7VbDRzjKtqFu8XPNb8KV8wf",
  "key30": "3fj1NHfmZvDmKktqLzY7fwNqTjixZNrpT3TaER2gE1BZ3rkQJTagmEwRR8Tj78Lgy2GNCoZzbuj67U6DsYCTUVe3",
  "key31": "31Uew43iPkXmyF2DpUSWFqLUuihMgeWYUURmWsEukxfzVUaKtALDheDXXpit3fHCG5MudEfnQ3bSMaEfhgCnLxQY",
  "key32": "4GEk7T6FaR4uyjmZQho3yggEwbdeSL8Wx6FWgFDDta63fcU5XFBpt8Y64NwGWJMzjcS8z7q7f3CcovXpTFCZdqBX",
  "key33": "SWRM7pPqBGm1sKLt7ZeY3L6eHxHrYoA7pvKwbUEFuJqkncDtnhztYHSu8MsUPuFnxC7TcMr2KQSCXqP2p9HJcF9",
  "key34": "J9AAmQPJwvjabH2kLZM6qBMedAKYUFJtfL2ZcHqGbqhg38u2sTTcgJqsXKL5R48uS1c99qfF9QHuPmJMk88FELZ",
  "key35": "2it9mbRJH22epfyukLB1rpPtBMBoqpa7eDfkwFHm2FWBUWAH2UmZvrHMgLvESMof6LicfZarRRUfpnGETLD4H3N3",
  "key36": "vfeoCKPTApCJY11Zz82h5RgDVhRVXZbmQkLQe6WAL97cAsTXQBKbuHx4vwGDPgCtZrnngCBRFZC8orfNa5vArLJ",
  "key37": "21CXPEpbQmbvQfjbRNKHvthcutxFahiLj7AmPkL64pxSZnTRHmwpdnXJXeUiXf9h9zuRemADUoBVTNExg8jk5FUF",
  "key38": "jvD4q6Apux12ZYxNaGHhcXFhKqS366ngc4kHZpix3vBKrdPU6vtfouc8xXGTQyCVHwEdeXGntxYTgagU7AKM4ws",
  "key39": "44X6jAUBiGGRtSpmiVy93AaJmExkBMyZUnSLttoWAPwKLkqT9tWjGgTysL2zu4QH4Z1qU5TngtTWbiATCikbvQnv",
  "key40": "5xSXSrWeyu58eVPf6Fnt8GsUUUsm2LqXwqCBnfH8qLAexMXSXtf94h7iyk2kVm3xMWYp9NvAciP5xPBQHb24mDVR",
  "key41": "2JdjAj9fTptUM6z6R5f3gWGUAgMZsVXMdMT26tLX9qv7oDSKsMryK8Dbn3neom3o1Wuf1K7kpsFKn1LZR4mQtkjU",
  "key42": "Wuh262AmzzqBCyUxAmB5pgB3iswmpe4WfsZ2JGT2nnLvD1YCHLbqWetpZqCs2wFGCapHFL6WwbWxUEDdRHT2PyC",
  "key43": "4f2YtFyoNbXbypLYQ4YxMj9XHAxaykobkVtEnRyng32LjVPjHSHGqLGotKPRg3uF6kz7uxXU5WQZCoimz4dLkFAu"
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
