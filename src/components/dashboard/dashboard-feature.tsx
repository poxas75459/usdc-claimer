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
    "44b7dPXYiNTqsVcHzQ4CdAfLJegtNSDXFK4jpBf9ZSTJVBR2JHhBSztpWFFpa8XiMRHKGEivPDFZNFmj7vbLAwUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42bvJcTYha4N8YUR164nnbse9FKTm8RC7k3LkT5cqrYCcNyjJuEgKxoVT78CKbeCMsh7C2rLH3Vo8WCwMEwig8K5",
  "key1": "4jroRg59f9sDr7KNksRrqa2e6RwcmtFZnhnmnSZcQsBZbCkRfNcoGy9UkPJWhWQgsYprf77oimTTeujd6ju4ZRcp",
  "key2": "2NACHYXQYkKx2UgYu2YSmdwaU1uP9obaVbJ4Enf3iwiwukZuoDYJJikF2fDacGTYHTmyu7yVW8hYUs5L9DtzMHed",
  "key3": "2wsJmfZWRx6NWKAhe2f2mTK1fBQEgpLbUkYj1DrSVoBB5QoDsMeniigJdESiZ9Y7dLwofDzp4HBQCPDhFHQAYuQP",
  "key4": "4eB5fHZKqf3NnAHriUt7B7QrnUnmca1iKrVSzdR4334DqucA9PQmtFWdT7HVHAVLs9sBECSKAMjaLGotAPKYsFa2",
  "key5": "4GuPMSHBmMEH8FfsRGquj2hJEFuM6nnHChZ7m7mD41Q2dSpj2n5rkwyEy2RRfEs9cWpJG9u97GFjgjd3bpPgqb19",
  "key6": "2yD4xzSALRW9msVFBWBtJP6wxgvSbuditxV8WPFfZhGZETXfjiAWEjg6GnkVeNt6ZP5ftBDaDUqL7hRHWV1z5UYd",
  "key7": "38sVjWKgjUBKy2y4Z3k6GajMnTXRvJuD5doNeL82Ta1tgXsokZpHxhcv23sGoaUg9u6qNdB4iAeLNYCCWaVL6Ns2",
  "key8": "63VnCgQc82gcKCjodCuuRUL7hSHb2j2WaPZT38ar4C3qVPVs4cZ7CATHdBGqRdVDtXTPR68F67CFWH3rApJwpUa5",
  "key9": "GtVhXeXQfSJVXoWef7zuPWg6XvyHNdihcYqfUgtwEC7EMWSpRtN8iCARZnZo8DCvvbupbwGvCpEqHgUZvuUk1tc",
  "key10": "xoV9qYkHqNAfovRGdctFAXUiktakTJ8cUEqarW9dq8cFYc5tATnxux71iXnPkta1PBN8DMqUcqCyDgjToNgoEcu",
  "key11": "2Ka6sQw2UPsZgaDQ3AamF459HEWkBmpQLbLd7jxmRWmqwCFp4BadDWmmdpWyTWuaFER4BRUXDWBbPrb8PvbVmPCe",
  "key12": "HmdXuUM9vJGrarbJ7gvPdy1R7L4UYzYz8chC9CpmpnmbwVZ5L9mWxnTvjwPjd2yyi3LsZXAYT5LDds461fc1A2b",
  "key13": "31acE42mfJqPmByvkHNynGkWun1YeAqJkJLUKhuCzHw9ZtuaVgewNWZg4QkRLVmGdTFdoVgxDnJ1UMyFDXNLesh4",
  "key14": "yRmuuMUFu3J4TG9BFmCzkxDgygP2R5cZeEs5sV5fhkJdGNzVRAA1ahTUqUF4Wb3eWiNFSb2R7HMqCjsNjyhyGfz",
  "key15": "61WXGzfHqyZRpqxZ7RutsRRnpEKYwfg68EAQf7KX6MX1cC99c6d2KtTXvERp2tXLe9y1bw3g1Q4f4adujDjpMioX",
  "key16": "xGBSe4b3BYRs3KRAytzKguEDbXEHwzFA6DhmHCUC1UtSVmJp3tAANf1rMPaJxsubAAdtJk7rf18xLiGNoXLVCMp",
  "key17": "tBoKLoR694FxZAh8A4qnSgkGF9pj7pL7qPq6LNuZe5ADefdGj8q5keWVvmBXYqprLiomojBCBtpMPtgASgHWZX2",
  "key18": "3LuyqdfN6nXGEX17Z1fvieuCy9gEALZpXWQvrR3aKW8ehJnBa7pYjLauqYjZ4Gk6Gqwuwb43a6XaeYSy7Rari4q4",
  "key19": "413ApStXNV9TVLBT3gxA7MeACRzrS5Hgnzy3ipQHw7yJQibmgExK5fE3UHH3Va6hn61Pw31URXFLLub6BVowpDE9",
  "key20": "24XyQQfVHq2bYY7Em86PWNQ6SsKXbAP3QsfG5psvNDCBcgWD6e43skN9aCVKpLtW1jTP2okPKpB6iubbDv1i24pa",
  "key21": "51A9Zrt234GAA52XBycMb3jFakdhanrgvkqD32hVWxvPbu2HbuvnA6fMEajYAWgnkYaj7AfZFbAhqVS3trw6Kpt1",
  "key22": "53iZ234AQcuQqVj1BGCCrkJY6RW542N5Xe4SFenJoGTkpV7ifwg5gxfGS1mETjTG9TLMkhRGbhYRJCqk3ZsZF93Z",
  "key23": "2ZqwTAAQi2bMwqQVAk9rrbpmzQQQVA5bPiCx4CvAm8BZKcCVVRgZc3NQQWat9ctVuaVycpbYHRKngquRKaPzpJSm",
  "key24": "5pMRJq9poEMf38mMeEUiSu6cPb4451AyNuzkNJWcEDwLMit8Lve2vjN5EDkVp6JiSCbvHc5WwLRXi3Uy2vfn9vbm",
  "key25": "2rBr9PTKCiHNEQWKe6nrR2o97C3Mc8mob9QE9uNSUJmrNTeTxfXY6sSdeze5QeXui8dY2TG94rV85j7GitCNxnrx",
  "key26": "3CHtLbopyjmjqXpAFBMsvLenLHvoo5wczwZNjcXdnVRj7AwqNHEfKPxEPk1XErEjANCEqGptS1VW28DfxTEQaJgX",
  "key27": "58MfabFo4bM21qjUpMefHsNLZWapTAGK8cwL92YTgvAnwBjMBhvhNTvZV7xfepjcGa8fv5w5Emm4zgnterXa9ZES",
  "key28": "pQFTTxg4V3M3eiayXFcrVStHMbLu5y6uTxjSUcESVUv8ek2tc4GrHZ2qMqFuoJ5swSxUsowBv5PA9MMDQN7ACcg",
  "key29": "5EDA6aV9ZBqtfuaybnzuVrYbuCmfvQXtn6VEhJpXJF42dfnuHQHsWsdMXbhoCpvuUeq8ba12dWaRb1ZkaB7A4ogN",
  "key30": "2BbBU4Xc8i5EhfLoHBngEkK9MF3kcsWdabWsSvZJEB6cmWPfkzshFGmDcoSgBZoBbfkAQGtFNqz7pf3scZPoitBh",
  "key31": "gRyJe7sQ9SN8XtGV4dzLcL6kBYtQuM6T6Lf3gvFX1wnpu2F1wneo1TLzpLvzzPU3C9Yy69yn1p5ZJu3jZTabw8Q",
  "key32": "2dtuGxsKzN7d4a6y3eB5r5Mb9SPpYPaQHa7DVUCKvmourUX9KdyXs6qgKMx4DzXm2wwmML7bb7J1Z2F4WdcywM43"
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
