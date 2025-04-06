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
    "5XG9AizqANARUhdjeDrgonyqKa8XBDQhD2vmUQ3vt3AgkFcUTCRB2rBEX8j9BJLUHaPGxCtL24L8Hw9FdBbp5Q2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4swvz8cRDNY7R4s2PnNwJHDTZz4UieyuVHeFLSchJbwAFwK5QoLcJ21YqJD2TU6DfNgb1tX7uukZafZ1zXK24Epo",
  "key1": "3NzpC8CpNTTJ89b9xxqWvoWUWbyrfzHBAhJ2fpkntUnN8JUJnZSrYs6fvwwUv2pg8zMu185ZML9qWpRNoryD5PJp",
  "key2": "2TayQZ6t2kS6HQeh4DUwXfWBYnCUSh3849LTWzFAJM87WykxAecfvZBfpSmLN8LveMXsbccNFLV4SmoAwexpsBVs",
  "key3": "2ymkLcRUwVMcUaCARUN7Z89ijhABQkKkiGdz2tbMKpCeqhuc7xiYe16TKTQQVdtJECeiuEwyWymy9erJtvoEMac6",
  "key4": "3e2SPNThVMzWfxw4BDJraunMMwHD2JgrGiZz6oKZkU7wwc1RV7378zV7moqRxvTCXGGeCahwz7h5bjMf6tw6Ev1a",
  "key5": "3LENDsdTWyg2qiAkVk9Xix4npwjTJYk7d59EXc1CpP2vtBeskaR87WUX9N4qbe2C32cDRBJz86vw8Z3qE8RLQVMP",
  "key6": "2cbuaLogsY2giQqSpKTzJZPxX6GynfqGoE6t8Lh1QzzL6xPziKtPUmxx95Anb3S7eZyWXB7PTU8UpLQiDPHZHxmJ",
  "key7": "dQrM1tbN5FJf2dYubEvNcmbsMrKyfEu81mSWHtRqnpzZYjnNABXTtiC53FycVHoREEYjN24eLveQB4jCYkMZNKr",
  "key8": "5TXzHiX4VFCXdFcMHjpCkPTyJix7vNS4JuRxVmu6ctjd8KExZ2donmDambRL6BZxrFcgnG9gVxEEi4U7ytXThgRy",
  "key9": "2NLRJVWKFsJecWo4xJJbPLcCNH7xiBrV2uUo4rq4AHML7QvsdxJWkMcV6evnUD7GR93TcMc59AKZ3xtvRrk38o1N",
  "key10": "3LLdD5GgwzP1dd1Ci2kMjSGNkF5urVCvCjVWeTNjR9PVjvrYguwSjgpSe7nm7v9x2HeQhxwxNXii9nR9U2FY7vK9",
  "key11": "NwLzp3KWipukdpnBfC1FRvj3HZU7HBJwyEoxkks9DjqPvGG3FHxqLU5DLVwuFtCGKUmijsdpUhRQdmEw5qjZqQH",
  "key12": "46P3s6wvsZ4UtiqQwXgbb9EVRdvUEaJTGuMj3UY2wcHczUMnGjqx1GcVoTHwxe34rFHewTXAeWsWA6ZMR2VRk6rz",
  "key13": "3hBs4F6s9wF6qkMNaUzEZuTgxSSpWJ3WCRtT39AjjQRWJp6bpuz1Gc2r8rjtn8AdUqfL9xa3YBWdoJzh4HiJ7QpD",
  "key14": "5TSTdF8iZmemETTyuJwzkRGXfxngTS4h83CH5zYmUMxrZvTktwwi1y5Qr53HAvugyo4RwXrmMuaVzDeyfwoCuebM",
  "key15": "BYdiXMmQHFmBGFL6KtX6bqjCnsX2TmHseYGytcXvuGqvZACcaBPecvhyVHmwSwHLPcyeuEpi5zA1EbNRCPTbxUu",
  "key16": "3U7wYXZv2JCZNRx4xLXCgXMNr693We73T9hdLHWRUNYbJDYb37RPvaic8DPWqjM4ufdPAKVk1PCseuf8CrNKcDN7",
  "key17": "2pdyytJzP9gRr7KebK4sXuCF3h1dhbShcrMpGWYcZdJu7kJ4mZjnUDFdUB5BK93bDbFz18XS65MrnEJYGwLEbQ4d",
  "key18": "54Uzsx2jBJofMFSzi47qmtGBhybAKHMtjQggr7jhh5UqFhYh1fvWKMdgabWYCQjkxwxmcjBrtEKCfnNsYjxak4r3",
  "key19": "3rAFsoKMmwWnRxc5CvJT9VW18xK49M2DywX9Jx9o5SGYKEdrNX2LqbQY7DAxbsGNKRUCV6DEk27WtMDZ3AkSJbdd",
  "key20": "216U7Jwo998cyHYZVybf6Dy19bBdLzRpNSHMq2GFwo91A5XNG59vEd6Du9i5gSTANR9Pqk1DN5MoJ5e7n1U18RGa",
  "key21": "iEofhNXD3mNQdwWQvRFQZB158NNu7yqUbtBzf1JmM1NpMCtUwmURebg3UGL2sFj1xRez3qTzLX9e9F82m4S4kJJ",
  "key22": "4dQgPZRJefZURUurqpd7hWsFVZXcMzed4SZXDfapTRsUMV3f8Fj3DeDCp5sBA5FnUnS2m3QrSG3LgdEcEkzkaV5V",
  "key23": "644UZpphy2cs9HuZsc4HR6HxtbwvX1vCsAmvzVpHqEWdPvXnNUWdodPeUVmUEbzQgxDxStok98QFELupNdGqPN6M",
  "key24": "4Q1MUAkbkkcqSzjoQn8b7YXieYn22WqTC3kwUXFDziP32V6oQF5fhjgL4DNtis4jq1BbGWEmU5tae482VQhbdnpM",
  "key25": "p4BtrhTbHMbmhhMeaT2LQb3hGZJaBkLqQBVKbsJcPorVTGVkkWSDb7LdxxZVNTUKQY2tdwheq69jz9UQ1ULSgji",
  "key26": "4w6jVrzSc2WXPe2CVLnDQ9T4zFKKYFXjvHU99aob1VmH5MQMJ8dzKdMxajMZ14BRAZZDLXCQg1MLhFyVSzkex71Y",
  "key27": "4fSNXm9NLJrNV3Ntj8dY52PsYwKDU9dE1y6NEGsrkok4qkkfZtXFni5RJKzgth3d76SW5zA5wjPXp2baH81uYxSF",
  "key28": "4ZBRdF6j63vLg3DG3Csnrv1QrREiyEmeDBSxEpMcm4MYrqWBzbJ6aoM4fTWy9Gjxp6KMhE5tvpoRTYPYkJtkEuMw",
  "key29": "5pRD26UQXjQTSM1Hhanx8P3WFkc476SP4XyNRFEhnNn8qpGySBuP816VX1DbGowEGYZX8V8mK7T6mWzpMLykETyT",
  "key30": "yPXj7svA24CXz5ZqWEjzfHjcdnnJyA9bYHtCNzgfVptsDZMdqvwWerutuB9K8isFA6pCZWco7mfz8MnVcKYYhwK",
  "key31": "Mfh8xtkXfavomDsiy6GMpfUtmBCKqQ54fxN16ehqySFeFVekoFCnKt9PD72AMuP6T4nVHoei8QLk7uvyhMf1KpB",
  "key32": "3c4yMKXocQC7ZBVx1w23TSfyr3Zk7tLEVJy67hPRWSmRcW981LxvKpWQ1VpeTNpE8kPAKPbM7RuAqGGCjrP3NpR9",
  "key33": "2Kqzt4CrE5F59SNiJfgXHeGWCbE2FaojjnyXqDLDFBdQBuiYAoMMKXcb8GyKZGPZLYWf23Jq4nQASsB8ben3YXNW",
  "key34": "59Yh4e7aCCpGmtswE5JorJxYc82Bp5zwQqBu6RVR69yDEsYrB4xPAYXTgCbNbktvu1Zg2HWBPfcrp2cg8vYiK99g",
  "key35": "5mBkDCgtCrkCj3HrwpA4a3p7r2NUBG8ojNtaSUKKCK5RCYHLLBGnNNwUZaDFN6K3waWjJhZ68ijHBZGE3BspvaLh",
  "key36": "2GCyTH556z72VSUSDnBqDuKeazmV1EcL8PcbW7UXQPdpBMXvtrHFJDRPtEWjHK1szMZjdF4DnHAEL5i8CCxywP7M",
  "key37": "3tN9MKiLdu4AYAR7TXNA9HZRdcSZLfVvgQ345J6WYba9YAPfSGY7nLP4ADJqG4Ao9C4XpX7TcresGGV5WjQDToCh"
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
