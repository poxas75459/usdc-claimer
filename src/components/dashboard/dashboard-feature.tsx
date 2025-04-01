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
    "4L8Ko5oArSGw1hVcPZqBPSY1JDAUeu8bUXri1UR3Pwi3Vszr1MXmvXbDPwNtfGnRJLr279vz7D5LhmD4YmGBdHn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56seBxRQ77cbb182T2HqbVeJHa9dZyMjx8t28Pf9mTowXxCc8FnqDc9VPbPVM1ywtja6ZqMF4sUGbaQCjKjAZpQt",
  "key1": "2VxY5m41QrBc3bVKu8yNa5kkLAAX7iXvbfPg2V7ymtrzgpssHkbjMcVoqSBCGfZvAMen7ZH4uThQ5E9iwwmgRULn",
  "key2": "4LHpBKFsqzmQnqbgCniFVfGfQ9cEpDgTKbnJzN5tBXCGR1JL5K2Mh8w3kHpYDBT2HvKTHQVYFyMKCq4FqHNaPpL7",
  "key3": "5khW1ZkVZXoAr7gBV1eMiRghWiXdEQ5FBTEoghEgZLjRDsHofSHsPRPzA1xtxL5ULPeHDVbPVUZvVUodKVhKyjQT",
  "key4": "4xdyiKEBaguahVUx83qCcE2L18YaDoEM5jHACa23JdSg1R597SrFP1AUqgLHncyCnhDJLvEv7morytYkFEDggQPw",
  "key5": "4xAzjMd9UcLAhkK5y8BrJy9VLcw1KxpWvrH2JvAaSG3Tx1HUn77JRYk6UWQpe9QdmApvmeKjqsYFinWPB9w63Vuh",
  "key6": "2bTttzb2KBfSQ28tS4DtkX197HAfuX4kNQdpKzGy6TqEZn9D5xyMakDZY6DYvaLUsnXC2UPLw7AmJgayFLimADE8",
  "key7": "4FknRUDY6mNeAEbwSzmjLMzc3q7z8CQZ4AgTUwKtgJJYCM5M9UaS5unKSzJRA1xnv1sTR4ipQmfNwh1YkQ6geBrY",
  "key8": "3WBqv98ybD6zWbpA9tGTSUQNie5tt1qCWLJoLMkL8RF45bZ6saPeigk5vcwNmPYUnq8R4GAfipxvPZ15SRWJRpuX",
  "key9": "5kbee2DSRkkCDtKEFDy7xiFoRbYywxPWvyar5s3JZgBzp8XmBrZATjvba6Y5hsj7z9mmohBXgYs2s14SzM7j9Z6c",
  "key10": "4zgLDz5vb9XDCacp3C26HqmZetVxDW4RBVtYJSzEc6wmxwkwAFLBaZqqpyHtif2DzXLEyif3PN5xyg3qTZvnhtZK",
  "key11": "3cNSHbc4YsFEW8iZcUUz1e9dd5yth7iV97UYGVD5ymoUYJiwkQwWrYJu3WPbPa8u6E8rtPM52fsq9aXnYgah2HBB",
  "key12": "4UZtWYGvPZioDxwcJ52N2xj5v6NqiVm1yQf5ZuD9c7dDNA16YEa6c8U3ewJzEso6ihYGc55aVW9A82LKcuS2gwK5",
  "key13": "5bQUfcZ2STit6ujKamZNgdy4B2t91J8h62f6BF69huhto3mVuFjowPMi648ECk8QrYptKYCUX6hM4RQmaFBeU2bY",
  "key14": "3Sj8wNuWSrmB3khpNCL1uLPfG9rxuNjHUUkjGsENRBPtmZxhFwxf5iNfesapK6cd7J2T7YgxR57xDtkKDviTL133",
  "key15": "2VSpzRRyqGh7seQ3Q44Kei7NFRRsiyXrEFwZMoV78XA3m7RCHXWHz77SweDWZjvQJqT2eC81EeUkESikhKZcEEmp",
  "key16": "SNPrvEszRwZmnVdGcp5MhZyavix8Rng1a3N2LZ5jKGNnsjHxqQF1qSPoQGiqhR221B9WJQwNqsNegxrqCBLGQNG",
  "key17": "4Zdn3GNAwbyfvbk3CXiw7tNSgoExqZH7tDGEmUu7kq9a8aeUhQoH4gMJK7Aaiin2qDUHkMUFAhRwks3X8Z2tfPP8",
  "key18": "3FsMEtgky97FnoFBJFnVutiYi5CSfas8SGtLjCib6tHM3erfyxHEJTpn9qwuazwWKc5VFgcPypRnzkahgFn35xxn",
  "key19": "5pMpug7WiKKjXx4kQRP61osaM7JyiYjd2EqtKxktyPuke1ZiXkKGWVL9TMVMXRDTPgsGxDBM3ecEjvR7bnQpmmYb",
  "key20": "3YvJzSi64c7vAGvzffw5co1vXsueKJHSMT2PVakJtKm8tFHMx7XYJcYkJxxwJthRvmYfoSjcoYnRz8quMLQD19HF",
  "key21": "ApoNazDeYkdjrSj3rZpVW8gJb1zNZBueKcUxQTAhWEPDG2nuWgpPTcxzrX6FC2xVHznm7ePQj6mVuPZs7AoFsBV",
  "key22": "3otrZGZx1GFibEYvYyYfnwajzkKrhouqdELRdWMNSxgNXpWfGV1XaGVYjk2Tc2oUCHvT7kJWwRkurqjWYKBNsEkc",
  "key23": "2RFXm5msdwXhRNUsDrW5CH9RPQzdjhkAkN3jdU2Bi1CF5XVRjYpSzHnFng4yttEnsQMUaHMoTLDU9gv8y1tu32CQ",
  "key24": "4XVZPbc9zgWc6PRXKRrkLcpmjdzvf1Cdw6BwEGoeWhi8bo5uGsQ6Enh6o4k486HVFsgc5bGKNZRg25WhRRm1MUjX",
  "key25": "3ZHxJmLrHPXiDUk9L5aoUX1gATEdmtt3pNp4ReBqo5gkoB3GRBsEnTH8TJAoFpKjdj9F9ShsUN1TXiwtwrfWwRcv",
  "key26": "3gAWTuQd3tokPKrtJd7AYLe4oik7S9ToM1bDs78PW92r2ydjTzNBrEXLiB2NuKQDhMcfSAyo65EbssfPqTVgSWkV",
  "key27": "mzikvND9fzAfaATJdpzbgPjZ1hPGLw3y2UBdKSzVSMevmnCZNYaPBZSc6z7RdwAEYpu6hdkbEG3n5EZUCdfined",
  "key28": "VDVeFKYvsXca69nwxP7hWkSdnds7q1vXMmU1LocoRqhDzuW54uTTBU8z8ti2iLcZB6Ue6RF5txJn7dyMtVPZwUU",
  "key29": "GpR6WpMu7BXnjV4ZfJgkFdPE4LM1GUYcKPVfh1JfgUovvzWiRL5E6h21HP4jZCkF9AEVfK33xdJMXyBbTu4hRpS",
  "key30": "55Ha5G72aRaxB11FKebLXTr4JAnbaTpaQk7naWADdcahpZ3X9ADY4PykyMBcmLSBZH6psuu91MXoBJD5aJwUnvtQ",
  "key31": "3VgxH2pz3uYNuqpe4LJodyyrKQ3MrWzJcyiqTGtdE8DAjWbDhs8tuB1fX9YMYRhQgjL5BG5FNhxcsT7w88CKMGVg",
  "key32": "4QXUZLRUQ1EzS3X5MkBUL9yuD8hMvrccEC21E4kvmcHta7YJLwn6iB5G7mWyJTMW8eG6SuuMEyH572iKifmrp1iG",
  "key33": "3vJ3oWeVso8QSsDhiYhisGMgc6Hrf3Hj1MMyU36LSeW3eHMSGpz2JgqFFFjZ4E14yb3soX2tLPbhJyXuvhYE1pSM",
  "key34": "45VPYB1cPapcFwgz9QJcePZXCaXNC627kPM324vXBswHkS3N4uqDv7rzES67tCfw1RmLXHej8LWNJCPksADSytJU",
  "key35": "4zUrky7kYoPb51tUF356YuQnUAaBtR35UogyzuhnxKJx66pEcjamvYLD28rnpGXTUFUfXEDpZbkB91QGsRtwj7Cu",
  "key36": "3g1MxsE2xVHLzTjqXrXYtx1JN1fqF8VoLDncrhg5fG9toK3TEtE5JJZNA3KtdDBFMUJSH6a95b77NAzd2wwUboSx",
  "key37": "4bff17Gg8mnX8e8pg7dc9szmVMwPU21MoUfxZ11AEwvcR1nomFrG2YZVFuQbRyibGks3eDomJyxj2x8tUNyP7zTw",
  "key38": "xLKGyNk54kjcCq1CDDdToMRZuqXTUfqCXGBfFrazzLXkbaMKCP5LGy9pVTHr5ZHaedt74kvLnMfLARhFzt8zwnF",
  "key39": "24eBRZ6Sryx6MSBgsLHH9hJs3F6jbZAqzf1gWxEyMpVa3hKCWkRzp2Nku9W3h99mBof9Ga9zCELx6xufgmJi9SXd",
  "key40": "4QbM4o1JdaSnrzYuWbCSfAoUo3xUTZ54ys7eoMkyXFNiNejG4QqsmnDM5TapKCXnU6MXSGo5LmKJDT5D5nYiM3bD",
  "key41": "58zh3qzpFgnFSodTX7VBLxWG4bdzZgHMJQRVeWXXwGWUUgxiFUxgRSEMxHYa7vRUYdpudzYdZjD3tYSTPEz9nARJ",
  "key42": "W76rkixRfpdPEdLmBxPyU14MEEqYCpWpygeFmVkPH3XxhnzCFSwYAxugz4ZqZ2wuQVpR8XaBhTU5DYG3rpB52vm"
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
