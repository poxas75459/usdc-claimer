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
    "3HNTdxPC4fBQKUSeB1iWJ1jtHGEepLVT8Qx2etfPJ3Si46YVhtBqKXPTTXVmBSLEXLwBYrLxfEZ6jHcMPgUcSYKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42bJGJjqC1jnk12bjo2hJPB3q5DwR7yubAGVvHScajmABccaomRsyZNX4gCdjK52nyHRY12hvd2bHp4xJmY7XrcX",
  "key1": "4rXowYfYnQpVggqmg69nyyfoTQuwnd9fHzrDtcCdYRttrLxq6PfyCjLZb6sC6i68ngJAmufVgNm6gdbdidXPBTVA",
  "key2": "rKpLUnSAYNjtpU643KZKZYCFcRssz4NHt95spHQfG9W6KZQYBxtqnyoecHMQ5sajEpMnRL7vUuh3cEoCRdcFAxA",
  "key3": "4dfNNT9HJ3PfUYu4DLuuafvL4KBHWLgqgfzi72qoVzfC3zKjUcd9iQ7mcbo3evDbgQdPLBUyEkpqcZJVgP1GDazN",
  "key4": "4Ts6N8z4M1nKKwsDcFA7tUtwajSmEFrMFsG2uxM96kr86TJi6dcZVyocWywPQHtxoGPRbxE6nsX4xt5zBba9ozo4",
  "key5": "uHymLYD3r5ZeFPExqLJEzCTkgVCnKYFdkh4M6jzucpZDRL8LCZezUAHerwfUX4aAnHkabE4xfML2VoSrXVdQoQz",
  "key6": "3cabf6wbnpqMhtY8G4nrhpxyikT8Re5ZuNnsExtgRYPkE4LorrSTUXio7LG89ns8BcXyQQ3zyFb1u2Nzy7ZEtA8c",
  "key7": "28MNLTHotJYDvEFZwj5mVU1TGzMuZoZGxXXiPdMrMMzMTJs1U8WNuDZBAFqb1R9DzCtHAzGoMBxf8iAouSXj1S5C",
  "key8": "oFMWMxwSLvjXF83sUSUW79dg6RUQYGr13NMZFhnPJ8dgub5GYSWbF3GoTuE7ggwPCx5CQcFgPKiSG6qwWFSAfgL",
  "key9": "tfYCm3ktQFLfg3vz2EkkDdNLBuia2KJXV6LN972SXzmizPQ3GqL4cA3XUn6ywJuNCRavyH9XKBoqDuaXPbLwykc",
  "key10": "Nm9DDYmDhwtQDdkDWSn9GYphcRLGdhysfkfwatVCsnVzduVim9okLfNsZeEVenNwZht7PRHVkH8dYpdP3Wrw6SR",
  "key11": "EbWx5R2jBC1TA3gB1ULgmq7bAvEeRybog8rxrY6J9faLoQxjXT5v3FbBrRirJPZHgh4GcWaDk6JNXLcgiRLNCQP",
  "key12": "5fRUcvPLAsNtkbWqiCdBm8THuSjcoUZaYAQ46DGH5yq16bh6FARVw3p2nREEY8sxCVYXGxeXYkqwta62tetxtksr",
  "key13": "Wg82uz2CT4dBiZ2EoDpdF4cbDfeQNNuxLJPChcP1BAYrz1qymXe69262Fim2QZuhX1spCYLBzsPQKJFhJG16XTX",
  "key14": "8SEnX4uRVPnyZYaS3C42NKpUMKznzq2hE3Ajej6YemiwCSysu81VPECL1gqRTWmsXZBZABcQsNchJ2V6dbX3oKN",
  "key15": "4uW91aSz3KZ11nvr6cqCr15oRJV4TEU8TyRshaH8vqJoZcsM5M6Ev2Mjdy9hsXdNQPiES53TwVTc7HW5eYgY78Bf",
  "key16": "4YmjSXbu2t5QqvTemjvQFEQxdKjNhtbucgXR9LumdGxAAcJTsVVWfx6xEbqtZPANnbAmtHJupTa51YTr9KnXoCvB",
  "key17": "4R5pPaorm9NTju6d5WvmYhaEBA2qsaSc5BHadghhXxiDPJ9iswqEMm6oachocPiTVxWcfCkypuqe76WYrxsB65Jn",
  "key18": "5J3CDqedUDtVNHpCEew9pSniX7qKF3m5Vu5bRnHnzMf5kk7AqA5PMzDgZaEEkqf4fgqvxigcbv93roTBmNdkbp57",
  "key19": "xuE1HLWQxAZLsJN62etYxRX6taQYfMiKtqA61Xv7NUHJ7sYJ6fNK7vwo9YCTHpA19zc8w4aqf7mAfFn2sM9E4RD",
  "key20": "3DovBYXLGHCvUKJmSX7No5yp5DCRhz9tqU7sPtdjwWmHtfXm7n7LHdTJcW7gzgy9BVUxqj2XgJTepcPHA6QHGaXv",
  "key21": "3dZab1nKJV6EPcxAtHCFp9XcXGYh1xbtcNCbkvjaNDWZkKSt5yRjoycArPcfioyX4kdC66zRYbAnivE4U5acWR7P",
  "key22": "3FrpxsAMCe7LgNPecHivg8tapfyzF7mzgc5BzebY4HHDJj6VJBNwhN1NKZ2BWBxw3vRhUHgXxbQrpnxNuK6vXXD4",
  "key23": "3ks3bND3DohyP5EfcrUtWnAbKwrgoUBAgmPbav1Bm2UADsf6BNh3ViX1iQnpcmXM2vvCZ55AxRUseneGzhwS2fQv",
  "key24": "5SxgAN4rbctKFSZKnP6NHpsVGSsgPNnCkVzRpe1JCjf5EhCjbptH3KkgzJd46VZw38a2tyUhiyaysqgTNbjLpL5g",
  "key25": "2iK6BNDqbJqo1PA259mzx9mNaDcuMawbEJytPJzBosSLpWkCDyB1UtbXEdThFdqeBQFooVQTPCZ7Dm58Z6D35huU",
  "key26": "m9YQALPxXHWmg7v1oTybFkVQKojMcYaMi46kxndrCu2XRZXMPpLvWzjvJRY5cVY4df4jNjBM75vgBtyaV9cLMSh",
  "key27": "3QyJWfmejgs7RGCChEYsn1fuZWxTyDxUgSc3qwLLcAh7eQqGQUgKU5hSjzAZNMwywLmhcGX5DNc97hGLwSLxaNqf",
  "key28": "4a77ydQwTWaoGYmL68PebeRJsQLs3KkQ4NUABfn9NypVNtf3Gxm7MGxDtQ9mrvPFHcFHwJzR4bcse2TTX2DTn61W",
  "key29": "3HfVUPDFzTevcNtBcKWEjfP3zFrCJnuNQKZWmC4ab6jRk7n2MojmqpdTtPS7Drbnk1J4PGUizT1UviBFgdMeqFw1",
  "key30": "2GW1HhX7D96gJZRbkxb72HHyNT9qMNcp9Xc8D76VhsVZt9BpSAFcg8ZjtGqCS3grGL2t4xf9y8sJ2937kXks8Puh",
  "key31": "5S8CNgN5PcKsorZJH9YLWnTiCx1P8Y1RacsWZRwBxvVmchqphZAhmBCkfR3mtfxxpxjiu7CicJMT4rZmL96CmZ2Q",
  "key32": "2WF16DsHhjMGtg6fRaWfM6hcmpAXnb2ZzCLcmRmTE9ACHkKSDuACyFYbTfTn733jtTPsKU9CoscC4JLFYGo51QVN"
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
