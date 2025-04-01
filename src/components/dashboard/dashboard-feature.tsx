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
    "2B4w371nsXY1CoxoZYR3hdcHyQCWRB96XuzaVGWdCtPCWKvvMyM83TnGfkLZcWQVewrupVMxDdQ7tjQDgErQCcnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ho4imQhgaj6K2gcdcgo6CPG51ubhFBDeLew2ECDXrQuqJbEFMDWSk9bfFpJ2VrbLWZnJ5guEcYxzrfGCCP15niN",
  "key1": "2zYqa3PRJWgeiybhXJSQPsHj9FZ1qqzV89uCah9n1tQDMrYV5pkn5AYRFhpsz94swpbEjajoX23eCEXoywJG16Hj",
  "key2": "G1XXFZ3NsycNh9Nrh6mjVWDfvZXPhxjRJhqfNGeXLuWGsJCS9fnit4jpzeKLKNwJgoXU6s8aKjKeRjGhzXWXz3B",
  "key3": "oYpnYcQFZUUy9W2PqUbDarQETzvp1MBzFH4xqEnVY5WMEggCbyBXBzBf34vvtmQUfJwX9qYWr3VTNK7nccPk4s2",
  "key4": "4xJb9yAa8JW89BCz5fWQZCDooDrqqxV2tmxx9bL81vBKk1nzX4YFoJngVnMWi3xdvQ5dvoAHJ82SHxrNm1ibYazC",
  "key5": "urXjdvuGKhKvezkwCwL3c2W3137VxaifXoXJ1bVTKjXDNhSh4TVsYLejo8TkGry9FhXSTAxPPVGpcMwNxUod9Md",
  "key6": "3qEgq3TUAEW9XWJ3TUe3QWpe4czBw5dGB1EMjnew357eXATGevaYWmPXZuWajU9BBY6cYArDJPJXV1SRibRMkXx8",
  "key7": "5x3ZtqVaPoWU1fBVmZqBJaaXkueGzwiEN2yQtnfdkFK3xMDicYy78K2mK4MyLbwtEs3diJwnR3VzB3uQjYxvdMw9",
  "key8": "XCsnmMuHnis4E2JJQwFFn7X5RBdWEdEAqBmituVFxLGEPVnunYMphCE4fUzqUE3aNgBD4rPmhxULS8sgt6X68tA",
  "key9": "3zrtwqd8u3wCLwHCz82WSdLWcGbaA5wT6hVZNA2zgMJeFZd3MHccf1YJyk8a63iR63CoRq6pJMcCwXXaUn6zVyxG",
  "key10": "2RvabxNFwBechqm3KuzT4RRhULWWxGVqLR8ssRoZ9mU7RcDJuBXM42n5kBATNRCTd4UkHG2gNTTCJaxYviKzrhM5",
  "key11": "2Sx8UCkE7Exx2oFmgcKGsfTbJbjQoqvAi6aarZEU1NCs5suDH1B3cbtWz5JNjAqP7HsYrNDv5wfLPRrPqCquujsg",
  "key12": "4TAyRa2soTKwbr3yZVEqzmx23Xp7AchaaoRc4ouNUQZShHZ8Z99MTTcxLbVC2CVD7dNm6kVDvg9ahaeaGQD1zX2N",
  "key13": "5MSWGhDgbBYT91QhxtG7PD9yvdJ8PtixqQytLzLejEtecfTsNKfFUUypZPE1Q28NRLY51DPRUf14N4VDNeM6qMkf",
  "key14": "6DEwGE6gGEoqGd2V3vG4CPW1wt3zWNaUkjkBXfQuCiuFSd8Fk5PyVASf1CDqyj6Bbz6VuX1P2xvPdFuMB8eZVwH",
  "key15": "g32KJ3uezR3APMPC4BybzvBDiXDa81jsohLzYj7T2AM13ftyMEmQpjYSRCZxH1tdzKEoK5gaKQgjGU3gH38sUHZ",
  "key16": "2uszojCG7X9RQApQBfK9YLcM9gAtv5YpLR2VQjUjYcmEgTxxDUTgJ82XK34zfD366SfGNms7BHq2XmP5JZFZgr6c",
  "key17": "2kGq2sg6MuT2MuecEtscVgSx1PpvgK8GLCF4Th9ez8duDcRjDPLosG5AGhcTrneUaGgdup2GWTwYc5ADEzTyfVzq",
  "key18": "3EC2jPhDfKne5qnQJAxcC4napz4ixJQpAbkk5e3wJHiFtQYHuCKMRPyLBZRoenb3PHoxxm4b91seUVToTXS2p6cM",
  "key19": "4LpfHGSM1FwCe3FzJzgJeqn6J16EMJWmvdAJ9YW6piBsMJDR3R13k4jeCoxBCbLv5ammXQebf73smPnNGp5yJpK1",
  "key20": "5mR6wk2EQEafGZnuVLzruTmvXSFUPn2NspsUgPDtcQarmC46aj8iG7RMSDG8VWfXGH3WACBzLBGUXexihaYC4WJA",
  "key21": "85bkpgj5EjTaoo5pwzq7EQgY3oEDjF4k4BaLC8ioYgnZqtRnYoeWvi6ga1ssZccvqWvqmhgXYx7i5GsAoCvnuNa",
  "key22": "51o7jGrN7EcmbP9kiS6YPqU9bnGUXCMib1hMi6fmBZuAy1cGHGqTeT22ZxA5MGnzYUfmaaMKe4TM1Dxp7NVbuGn5",
  "key23": "m5N8mU3gdrxEU75iK21n6wNPYXuLHutM6FouS5tPngnH7qavpBs45yQPaayu13HpDrwWaGpzgmAV4gbDXBapgLf",
  "key24": "MgTQYXcnDJX7P3aiqHVvkfvPXisfEPAzrUExUkUtTnioiyubnnNf6hfKCWjMfE8Bnm25yDkAJ6dRefovyFU8DEH",
  "key25": "2Ld21oBcUaANnca1r7vhw1G5q6WGGf6i8yngbaKJEh7xiNoLAyTMK87aBg77cNYQniRhKCAZ38PkJ3GBH3FBXRzf",
  "key26": "55x7357C5REPbRjSjpQSEP4wQ9PygSjZgPpZNuBM6Xj4HJCcmi6Vw6EaMovWUMGv7a53r2HqZdXTcj6dLhi8CuNZ",
  "key27": "4nTzmtuhyttcmTbGVLDhB6tqCXAM4SyrPSGwu5BsZMZV1JQwrPZAFy5GJiFvdBKCAyxnV8oWU2nv4Xq6NMQewnGy",
  "key28": "4HAs1z6VYCu1dtxiSjkKAVQce7L96SAmSTZLCE1CsYRUtdupqTa6xVqJjR74obwdNYxz7kK1hC1joycrgc9eXLcu",
  "key29": "LP3PetAdBJ9EDmSXtG1SXw3QPQ7LLgR7ZMCDAyKP7YZzJvCxPns4FX2kmSgHS3rDgewvTSjkpcfL1RQsyaBgodX",
  "key30": "4QkAD1JdiSRKG7MtB1pCJso5AsDH6BSSUpKoyXvYaRrDkRWDS7sh1ke8HS4ovTNwTDX2Vs5GY29NQTREhoGaRQMH",
  "key31": "5PGqfmcjwDqPuUStubWuhyTqTcNceNtXKv9W45AHMXhDa8WdrRzq5YeeB1gvH1yVYsJxUjiceRsp25zwUHovBQsC",
  "key32": "3jQjU3UGMxavJg1du1HU9SqmapBhQvviF5xgykGxoi67hUHTbb1V9CfJ6jeDRgHkegoLtryKH4hNKddeZLhk1Ft",
  "key33": "3rifuNdiLqGhUvXF8jehhzVCFfWPPyPinLU2vL8bZUFxxhho7igo5x4xrqcpTTXv7M8DYNnSdgvGGcAg5zRn8Hun",
  "key34": "2ZmotuVQxoiW4gzkd8n5Yszd2TajUB2mtwegtU3dXzz8wCkbbBYMEV4nUrar8FMz1nrdSVdUxDCszcyh4ZWQftrg",
  "key35": "3PsrtpmuDHz9RUPTARPG4SunHdyfRFT9sUwaBiRw2AHktB8CQnh9ukaV4aLpiKn9GpADWhBisLiuyWoU72cmboPg",
  "key36": "5pEVD4EiPbR45YQYZ39UrosPmA1TsTPG5euD8AvaJEEGPPurd4Q8nB2jV7w3rrS4NomijM9pY1Y9HVHQLqYjZ2L1",
  "key37": "3Uk8yA4iJYSQjA1Z4KW2RNeNUvLuv817wYpHGhj9oaFxD9d9Th2ixomvSmjxJYNakWQQsEmyez7HZjrB5Ls1eKg1",
  "key38": "3baEMbVXSNKgV5aqCh29PxM4fKaJAkkWov9H96eZJ8ZrzD3vfRj1stYWHLg2aZRujKKw863mZEwWgLtPot2voGUh",
  "key39": "21ue88VDxrQZxAhs7YqBcE9uKM3z3nTdjzdeC9MtF9vEVycyP5pyYMzKrhJn5Yeo5F2WZEae63wKEdp6VTdMqp9W"
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
