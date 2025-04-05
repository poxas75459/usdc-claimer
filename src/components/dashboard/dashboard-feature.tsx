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
    "3gVMER7Kcik4qVhmWABFmkwV3r3mnC4VC9geDi4pZgCB8ZMWToDtiVPY4eSo3DSK758JTHZ6cHpxCHPWeS8DecPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66jcpfZTyQVPRRhJrBALqLH4d9bYRifpUecsMYMwCnBN24Ca1qiukER3hcRpJs4hNqFMq7ZsqDdBTNJyMUh4zXzi",
  "key1": "3cvuLdXich6Z3djrShN4dioXDKnE4543Jj6U7sZxPYUjPmfW3GWWdAEXnXWEJu9gFuCetnN7W6bDpWesDwjrBt35",
  "key2": "43EQu9XbkyCvACu2vLpRyUMPdF9S3dtCpoJaFsc513gdE55sJkQLxewsmXi9HwFx5ErUKvAZHxWZbwuD5BCbtkGW",
  "key3": "yK6WzKPioYfZoJXubw8oL1teSJES6i8nJ7t3TaQbPunVeuFYNF3a6ZxZYUgbk5aLZYD27ikspVzggF7dHm1AeAa",
  "key4": "DoRCS8udSR1nKU293ywTTTxGKdtXvDUS7UiXwA6s96f2W14wasNKEuS3pcr5Rxj4P3Aq1Tw9Tmp5ahCRyxBHZ1P",
  "key5": "2TLKmaerZSFG9tnnErSvbDYFrTsodJYKyz843d4XpWxEot9vX23Pk1Gfv1zhWPky5ibXxFggPJEzgs2KP35s6B2B",
  "key6": "5FpHCRx7H71bQVfnzftAEaefzcHhC9QQSKkp5qoaRkvK7K7P4nD4Cpxb41Q55Pf71iCWkecHjjU5h3jnrs3zgibd",
  "key7": "DL4jSeimoo31DKaJKKbRTbZ6x3kZjsNNBaYXvRYKZH69FE7U3rcBny8siprbyM3Vn75scJnnJEahLv25ohjyZSY",
  "key8": "5kf7yvBUU8yvhEuo3iL4NXzT8yfR4nhp6CL7jAUnvEopfz1oDZbZREyvTaBWKyksmuKij4ukx1uhmgszwJxbY2EK",
  "key9": "2Ai4QUT9CFGk18VrYbsuXnXa9v9t7dSekGUtwGyNjTPr9TZfJ9FJ9psL2YRpWvUG1D55DGSpwi9j4nw6zuCxin5h",
  "key10": "67a2BHAs6j7RpTMppfsGSaPCjE2ysbpGsD8hEdzt2YhfkHJu7DS1gmiwTjZ6fn2vkxAkXfttktqNp5wxtYbYH2Yd",
  "key11": "Yb1unwaet643zjEn9x6GPvh9P9rNstc9utzv9PV8jMcAcET2oAGYAeBBXiWjjgsxfbGWepjDdnsU62te5fVSAoP",
  "key12": "nbjQU1VVFCt7J2uPVdCfxkswWgUhFd4hwzE7kAgAZGbqCnQXaRzX9Q3cMXrJvsRSN4aNKMy5UZqfV8gaj4LCGmF",
  "key13": "3Uf5S19rP6UjfnfAALqNLwJm5pvVsf3dkjCKgd7JoFconYNmpMTmUrnazMWFSzNMDkMQcDP7x9UBpvr3AN7vp3v3",
  "key14": "1nwxQ72ATycnG35QsbEmSNWgaK2XReBPaom8EMqU1FhVx8iaXEe1TQN55S4S3ScteMmueahxYUppG6YbrTELL3i",
  "key15": "3mBLXiZRZf3JTZZ1RLFDeuDm5t2uyCurx7CD5XXEuoWu9WVFP3cZdBPJXymHLPqt6kiocP4NhcWA7ocnzsnrwwVV",
  "key16": "3At6mzVGJYp3BET4EX18mmqmhpB3N8yw9ukEWRyPrRwzAvP6dEAR5LMx5PTpojQD1cBXZDvqYNTr16DmTtc3QhtK",
  "key17": "jp9VrGde9vGLfEABJnrgchwv6LuTWcmkNQJ6EzG7ybcWZvBoG3aNfvoiufi7E8PEiNGttYvjr2n4UdDXCbo2XtY",
  "key18": "4mfhcysGCd16ay3wvTNhebKR9dpM9mVrbigZnMVP1V2zx5bpKnFGNeLGZAQ2pFAHirutnvDuw6hKwFeiK8bMADFv",
  "key19": "2Ju3SryVYNnm68sDSwNhpPuzYc2Hi1V5JsWVB56GsKx9pTbabzBPNXvd2mCZMmJbfvrbqRUoWsfkFNbprQhvY89d",
  "key20": "566XHUd5aaJZf92dXYYK4jserTXX2AoJnoXirMdoGzVyJQ69yt64izVaTXy5XSdc4HJSrLSDmtu7X5XcojgLBkPB",
  "key21": "3y9Tgbpk4FQPttSXPB3XR6WkGExp6csTHMvauAvzR8G7LeWohYZQMKcu1pgdaj4sybKE6eBb9SrALm9FDTgMyUrj",
  "key22": "3zKgYbLHs2bCd892tVcVwbxK6c6x4i5FoC27Zex6158NPNMqB8FYXjjBXWbAY7Ax6qE2rmQfsEcyUimhA8faJ6vb",
  "key23": "NCFkoMhHYjMsy8fk1FYzhMmgewXNrjb94wQ8ynJBxz7hnTKbVWSuxce9aPVztmQnssYihyLu8KQZEaBEPuBb2DF",
  "key24": "3HYAEAQYtgbYCVVsexfQJkXxcDahdRYSYjNgKVDrDXvZT7TP4imcp8c2Y2g7pUEva524ZxSz8XXWfP54UzYyqVug",
  "key25": "66QroZTQjhJcfr6Pe4P47FphtMk5sSoyha9LwRrjmLgJSg8tK9e57BwYmNJqzwmXS77WpsKvQDfXbs62raUpgBjd",
  "key26": "3hHm5vkHAS3MuoKUsF7gCabSVyJYFizvnXSf8zKxt2xYDD1msvNSPD2uXjiocmtg61Bq26B6rFyJBu4zyGacNjrg",
  "key27": "SdAZf4TMNAuEkpxRXR5hqi2oko3dumgMQ8hJDTJYmzAn8soQN7mDjXAo7Gok3s1rXiqRdGpwsvo6szhGmib7Uo8",
  "key28": "4bEnYewTLAYSyU2NeJeNePPCT9AsMSpC82SSQnHSDNdWzV1JWyyn26r4Erdz4Z64HXJ1fvZK4GDFsfu5RTSA6cT5",
  "key29": "5s2mo6tj83aBb3QKuknQvxc9m1mdQ5HeBMKKcwZKeQyeCPY8eVCbQb8wSMRRbyatNPzA49RT5HUqmn7kv1Pd5CsE",
  "key30": "3oUFJFtDcS7VWBa9niPNdpC2h64AaNCVRWWYoTcD2NZnwJUtdNSm7UWVeeX5qMvSfpro1hhVtNfm3Qox79uA4six",
  "key31": "2vLg7dohFMkufGauVWQgVXcinUgoDZSSCDdynHJXFUjjLT2R9k81WBaALT1uH8s3UiZ8Y9gKRZGTanLHr5YQNkEB",
  "key32": "5V3P9sLwffDziKNnvdwAo2feUioLmuq7w9CPs2zZ9kZ4xtrpvGvZFgMvmXqVf1Yx5wwZ63Z27mc4FCbaRBCpma6f",
  "key33": "3XMR7Dkm2qbfqinvfTRaRdPgpMPbZTLPZAbeL67UCemqP4a56fcSLLXcn7z187aaLsPfgPmDsN3KWR3qXV5KjJoF",
  "key34": "7A5hEiw7N1hotvyxzJyPdLw8cHunybmyiWovznHiw6pZFEZwZp5txagonWQMccDNwCgFAqWDgRWKerMDiRgXw9W",
  "key35": "5C8xXbLUoNuwxqXhMn8XYWiNVwjnFP8sCZjEv4Mzd2P8ieHCdhUdUE91ZQZPubYKEjz32VDu4yCwUPbvK1gRYMWy",
  "key36": "273ZdRW4tnZc83ArQSjXUeFTZv9BdUZdHt4oDd5N3y9xU5bp7GuiGZmacxJCbMU8qYHKB5RKkaJqDEYjuiWjbiSa"
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
