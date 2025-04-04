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
    "o8tViCpyBLMqnHAk8pHnryXjyUrCyWZobeNKaSQsvciJrVAafvTDHrWUdGySiVFjyUmctxteokJH6B65nHeoJ56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KzAVxCPouvRj4YmFnRKa6CVNsMvGMLhvekciGQ4m6AoMV5h7gaubp5WebMvZgmZruYpYB16Xpwe5w2vNF76fshQ",
  "key1": "4YiYwvbhJ2x32QRjpyDjGbbbmF9qLPja6Cg3VPZncM4av3RJkTn6wLMCxUhtYogQQRG84y2PiHuCr3mDKdmn7gXJ",
  "key2": "PrTHa3z3SJtE8PZx456MQGahxgs6RhYG9DF5khF66FdxVFDhn6ACyhS21fL3Te6A4yhatcP7w7Hv2LFCFehkr9m",
  "key3": "5euirFquCmpxVWwdK5reaWtDnoy4ateGTPJftXL3fZoDzwEcbWiTYBd4Dh5tfwJTkgG55Tkhxb67s5oHpxoxFCwV",
  "key4": "28tRkjjEvc67Eu1xKvvgtrpVWyvtsdxCsDb5UY5HmgxRUM9qGdMT6Dn9nqaYpTSunGLNJSubQxw1RrwVZWMkS4pF",
  "key5": "5gDj9cFbQH2Za1kpYqKvSKTTaAnrmsDptxvaJmZJFACro8QKvxrwtmTWVvBWf7qcCimq9DiNPKQQ6shxPqmDga2m",
  "key6": "3Jb4CZobzR6NAwjYMb5X9SSQMv1yCY6J1FcyYXeXvZLPa5ivXZwgRZrnejbumtA5EBJNgt92SC8SA6d1VVNspGGZ",
  "key7": "56KALPmWS5LYiVg4ERqgSs29ftCEG4B7aUFpMjEmZv2adiBchmrCBPk2qjutYSrGb3jJ7tqF1drLG4Ke7HniCYCo",
  "key8": "495MqpuXNbYBetzYU6HNg1YY1SJk7St2LVMJAeLcVjwNXkMkR9RDgsS5nxjG42XNkVxtghMm18ok9SAQUzjtfRUh",
  "key9": "3ejAGn9PETbDmRPxX9dcNuPkARs6bZpji5889QE6Z6wyJHtWHssybp3BSwroGPEmmG6yEFsxoVnif8XvGUmQSj1n",
  "key10": "3Hse4mGXWmhd462LBBFFZh5ArcMMQGRbjsYsg2ncseWC3B96Z6HBRieVNLNxK2zt9TRZrRUSRSAR8qsdRmU32Wx7",
  "key11": "qg4cwmdkEnp4SwbNHMuTicAKmh3YdwiWS7wwPZghdd5UkzD1hwCuAkmGiAZhdZfNpLvWJnaXU3UA1gk5ZZELaV2",
  "key12": "5pqzZA2iZz4ijuhbooNfDYEt9dVzdB1egyvmvZVUqiBGfErEU1dBDjCXMwqG8rXAnJfNHwS3d44Jr7HVkY3cB3de",
  "key13": "2JKbsYiDwKiT1RHsFS9gyjbMbFNmvh88xHBTVFiyzcCP9SogpZxpD5qomqmsZUG5ejomhQYtWPsjWC4z54zbx472",
  "key14": "2Pp3F5L42Hp73dGpQiYJBUipjJaqdNhxzoXaSZEboDYUB1qGu45LSjPrPzNMPjKVXgvqMWk5uPVAxy9j8aL7zSk",
  "key15": "4PYb3N5XmcieZi7iHVZ4iePLUWxVAaH1daynWqSYWRHZCCztP9LEoWqhHnAvgMHCH52n1dtoWWQ58ZvsLn2cdpW2",
  "key16": "2PxqhHjjKrKHU4HxESY4NKcndKMLXhdGkxpdD3F1BMES2CeZ2bkXPL7ziC2UWHZrV7eudXfgm68URuhDF8DjfKk6",
  "key17": "2TRkmv3YQKr4UHSkFf46Asi5GTpoLTb7G41hfGPou3pCh2ghjaoCMLPg16vcqpfUe2bzt1sr6VhtiVVUXftmxDVk",
  "key18": "3h2P9i7gghFkf6P9KtnkEjtzoKMHR5fAysyWKm7MrATtjL4KswKBPLvnXCngEPBLicD7uKtyQAHbsjypFfdEAs2n",
  "key19": "5H9C9rsisj4y8oHateb6o3z9575XghksJUKbY1kW1m6KLNYFfRFcqksHVjCGNv5RfeDFAvPmu11WKCFjc5GpDi4a",
  "key20": "7BzfR9kbCYds4CAhDfETueCgorXntr7SMDTjyaUaWHkZZN2wGwpSNyrnJxgjkRxfvnbsWgBJY4LtXCWwSrXrdsY",
  "key21": "3ptdbBf8azTWjMvmAsjSUKC6drcid3T3RCPezQoE4z6DmfN1LjDFgE5YgevfuPrusf38un2AX8MKLw7yAy56YZ3M",
  "key22": "56aCt6UvBWxK9VteThD4WYGEQ5TpcMx8RzKVbtmTecT5Q45w5cGV6MWud81xStiz7hbToBTufv7snZ4LXVeP6RF4",
  "key23": "NZ6Jqz83vU2ntZBL4Bw2bV7gbHyhptiBD14jYu3DKgms8haU6R75c2fXeVJAQM49EEhFU6y5nLw6jHpfmTaa5Do",
  "key24": "4YSspNAgvd8VQhmo81ZyMtZ2LQpMiDpKpubm2vncLVH3G2EMC1NVU1YDzHEneo6aKigbh9hq78HfDvuznbuZDTfP",
  "key25": "3LzZ9Z1EDahVVJVhwS2Ee1LPD58uqSsyUkGXz6XtMAqa1A5cq53jV43GUGi9FAWSWBvSnsDh1g62TorkbyNXbzLN",
  "key26": "2uA7TkEpbeKbBWdXqeC1WGk4JSXNTfsGomqW8BicWZbtMWLfB58xueWdJMExRvGY7wmkAYuxUp97GQBqdDWr3DpJ",
  "key27": "5NyjGrwiEnMbW2wtV9XN8fTjeQoXPMx92nqWbfjYC6KUzRgz1qTYK7nMu1nxfogNuGrpjUD28K9h7Q1rxdffEZ8D",
  "key28": "26yAFVdcbbt45jFUkq7tQ8Fe2Mf2Un7gUUus4Dd3uZfAPuUTbVoKeJy1scudmTbm676mwTf6MYHvBLPeu66DvTDG",
  "key29": "myc4MCh1k94mce95HkQRP1huT53z3rbnCPueJL3BEvS6yYA6CLzKdD2bgJifGGtVFo5eQjg3JD3375gsTTSnEEQ",
  "key30": "3Xv2GXyWtbkd1bAXHNovHiCxWjacrQTS8zdbx6xhE5p5cDUgkCmcCPYp92aPk2Puu9nBdjVrG2Zf2eckUzTwVRpF",
  "key31": "2ixPrJjs2nvECgsm9V93nzDpcrtdjLNLFQVxRsYVA2xT8hTs1ZQom8Dq6PyEZov6zMqA1RhfAeJQA3ueVMcXmwre",
  "key32": "2QtLY3mcXBfeyzJm8gAfFw3Jo1ueHWXpjDgCpbAQczsUfAWLXmPmxc8YAaCD8vksEffyvgeuUJcqhyH7jxL87zmF",
  "key33": "5eQVXrN4rcWi1stnSFw7TtuuEFn7BMhFXBdR8LozQcpfmdReUwdLHWxoLQU5JTcPbFVmaJYERVRjdf5Nn3XRcTej",
  "key34": "5tiLE1C2v8Pzx8wH2wG5MsEYyyLh2LckpfRdKx7WywMe7XSuFvV4oQzrkviJBjbQPjHUFzDfkog2aJiCj3JHY8qC",
  "key35": "3gnh1ubhfAzB5XovaU4TSev27YmoKAvw6wV9zTAbXoYKqShZWBYFwyiPqCsHY6de6Aqy4X113wGDNtxmwweeXq96",
  "key36": "2Ueh1j514rbUNjm6zwM39JnqEGugbPb2rM3VrqtK7PHjF3ydLhbfN4P85RyLUbD3PzsNzWmbQHwMr2d7FGfr3VVZ",
  "key37": "3HXiBudWAj1SYPA1jh6Kx6ToHcvs9Z2sN2Jum3u7rAiRPuCv7LsQ9PyLeUzLSA8z2SQecGUVogxfnVVUyppPgSmD",
  "key38": "43NSKPHLrVrRLv8b2pMHMQVcvWGfPAn4Jo7nAFzrZk2GtgnD7FzmjaZkbjyemwvCaVjYkuYtAx3zDxf9tsG8VSiD"
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
