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
    "5bHr97zrEymqtvb8szE37rACQ1XZci9mvTEu3gvTkhr8viyJFgddk2UwtYRPe6BP5nB8vzwJx8fJLVBFvVcLzzaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pH92D8Re6AZwEviRA1WwAQjVteGeuamS5VJyzjQszmkzNfnHvrYoq7apAFuTEKXkEjRVUTawckjWEKCb9kNmYW2",
  "key1": "3pbwSGYHzuFttRjoFhgizSuvPLxmc1UaPM6LcSL9NsxagbwpBFThg9h26uE86zaQcTM8rhF5XCLvADLtb5apiNsn",
  "key2": "RQdYsBPv8N2sLTczqiyC33i8s2uRt3sA7eygcUUa2BMDALhDsqJBcUvYiSCrQvD6chmHwVkWGjM42tq6h4uFViD",
  "key3": "3VB68stQgqBP5cvjSwJcNCFSGksHaWLYLiScreMKhurxSDxPEiiiGYFSLK8rKzcyRWCaaVo7PhXuU3piqfwZutWB",
  "key4": "42g6iGcfhVfoRove4y3tqimHbKMwwZtaQpkBp9fWSH6shJ63sXDaBL4WGWQ8xnf4vmCr7ebSUoHLt2hQneh44r7w",
  "key5": "3DHCUeN3Vap6i2GQCzuBh1Qh1Bi65V2mdZGvaydmhLZCvfE2MZ4286b2hdExjyHErd2AXmFzQbKRtCfwX4DvzjDZ",
  "key6": "2jdZEF9szRYgsVk6Ftc79CWYi5yNmyUTDCFrQ1KfE2eovMHcmpYHWEhrKCUUjcsR9KNnCSZY9JVBKwTwUknh8q3W",
  "key7": "3NxM3rzkAQJRA7H3sp79hBrJ7ccSEYn1SNq5o6T2SDhiyFFmd9Z6zV7RyCx8rn3mCAta89N2P2EZdWYxFrobbC6w",
  "key8": "5qdVD8HtAsGQwP9tWoHpJiXzrceKnboUngEpu8FfPpbhZcaVvHfB1GmvjNYHqBQPijJ7UvExwv81pCWa1itebjzP",
  "key9": "2N2hvLdfzKTe7pktp4PEETuEaLvNaoD6DXmwBWkkxk2wZqKnejVMqLRUeJzshSjAc7pYpy8Bp8vo4MWgyjujfYLR",
  "key10": "421owcLTymTrdvdceqitPRfjH32PVG3e5UZkN1A1hyoEXM7tHVZUvawnLQWAzpBiBjTbcCiQoaNYCCvd6iEwM6dV",
  "key11": "3YcJfLGvxzeJgYLinEDWNeixTjveUutAVjvgZyfYRC4KgjHVfmab1nLKKy3AdVz1ADmWALJYUF2GXeEBns83svsz",
  "key12": "3GWxMMEqjDqvhN5aEbwofEzHKc92nX2XaYEwPt92JUJxc47Cq5kwSm2GwgZXZXrxw8LRvnn9PjhnYzBUNvWwxkbM",
  "key13": "2bJdDwyCE5dwoUDTR1nYVjj8Jvw8xDaqN357CvWxTukLAwTt9jUYctPwZJ5Ap1SPMiAKDfMQmnUox3h6RbDemNdW",
  "key14": "zTx22q5wcg9r47pfBpvZgPtFrkvPxA6UmAWSQtsBnW6FQC95waoP2pV3MMtthCHC8st3BzoBeMVC3MWfgjhtB3K",
  "key15": "56iSU6zafBhQtMQjqNbyodB9HTss1zdWTeWHLoALmLdz12gthtvB4J3D14Dkq4SZjniq2Aty3ex9M4hsnFKGhvWt",
  "key16": "3rCoSF6qLL3nBu88phfLnsWLqW89qofjExDgvBUwXtVwiZgbJSnb6HKT68t1eBRZoiFdFVyWpnTMRakpMKJig4uo",
  "key17": "3aG5gJiYpnJudRuhkgzbdE6v4P1yeehN1TJHJQPqFBz4eohJCxvdiXNGq4h8HKzGik4pe3czmt3H4twjfgcL3kFS",
  "key18": "fbycEEZdCNmUswnjSot6ZBTawupjEYACBHGGx6frX3HVRh6hYrE6Zkw2PbdjKPbifFRs5JtGtucYXbviGi4snqF",
  "key19": "2k7Pr7ULe8GQxL7JC1uYqteyMYBJviGCvmG4uGTHYLvGaK3qsYR7C5v8LsNMBQWk4s1pR54Cuy1gxAHuMEr1GjUG",
  "key20": "2J9qANe5cbgjfdTvfdRPvXfrt94HBfQX7KeCYzVJybWRBcno12zKG5SmSM6rafaJkkhkqDUGSwSoi7wdPo8ecbMS",
  "key21": "2Xn7X86EPUP168f3nCqYoXULaqPgyGgPtX72uNa341YHYySkmfE3vCNV3zehCUNZ7YdrR6LrLjxArhRxvfHGZbfP",
  "key22": "5RhDFvLq9bm14x2vR6nbJYFsirgis951pLnoLJk5P9h2GCwG7kY76hwuGfhiGXoNJD9ceu8QcLjKfUo68ThCV6Z7",
  "key23": "214uHLgosb6K2WKRx8VwVcDgD4GL7QDi24gNoXStRsqEbV2F4FGVHLEF1XD6UTE1PW4jU6t3teogx8kyj5Qvjb19",
  "key24": "3PGpAPCWwZXZXii75UZLU4gLnSZ27jsbiA16pkKEyfHRaePnS6huMhZTtgFHLMuAtRLeEbKQX2WXou272ZQzMKTg",
  "key25": "66cHe636ZeV7Rc572tXsCVrDMCRZxTSRtijF4mtWNJzMukeVRE9gUUUqRNi4s5fL14HncwyxzTu9rQ3xJxo47H5N"
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
