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
    "3Cq2t3vqZbn8rKYBhwhBpdFhRBUm2TmxhqS5rRANiSenhmPi9WprPQFRWvHE3AAc1dakiAot5a6GRmSJaoDRSktE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JiEqB9Hbz6HhKRvnwBa2inNQmrxVQ9f9AbLf7hRdepffjQhUNWMGZBgh4rhWuGuH7rAj7gmBquVHjKkBxE8WtZV",
  "key1": "2XVGs9FGqaBtNbbq4WYu9cVVGVEvwAHzNZfnp7MZc6m7neKm93Qm61wSe27DXy8UvZ3S5dNtDmbEk7wKnc3rg3Jh",
  "key2": "5nsj1Vi6BUukmXA1w1rKTSSJYzU9apJqukdi2wyrZmcyraK4aW42z1BDCzzDSN7vdmRRJAh6UTb7EDRenC4tLdks",
  "key3": "2a9GFvVv5VuHxW9jrXFdvQ3WcaKGnLFu7BWwyFraDQLQT42iMU8fo8BEeFVHJpAXyEj2zBDW1qRGBHXTbfoinjZ",
  "key4": "4eV9UAN8rcWVpAbxsJxQfPpqYFKpeNELXiV7gzzH19UqQay7iCYDmeCgiMViK5WLAi4MmLhrUPx3udVAEPSR3HzW",
  "key5": "5JHKAti6yjbGQpBJGEwdr6HX8H63ibGMvw4e8ZaJ21VhbjUddgXyi8XHtEYLktLuCCnZ8pVgNeWzATzEdN3EX56L",
  "key6": "2MACyWJCfRuUbMFZQVY5vUuQPCY2r6fwREyZ2kQWBkTKTdKmP96gMqrJxSX6U4rFkRh76CtHBzuSQYuPRBcNfkby",
  "key7": "2RyGinLAC5URzEmmgBBeoGCzPHJSJKtMpcxSPc8Yr5NwSFZXq299yFGtnvuKycY32Jto8ujsm4uxGCjytJjwwLtr",
  "key8": "uDHMSNxJyVoctmb9Jpcd8tw64E388vA6ipdg3hVM72U88qMgasAb2nPAdHXueAEcFFqFVPCzouLmqxJwDiRLfUu",
  "key9": "3e4niuREcMtx3GWk8jqeworRgNtbKgT1Qz35toZ1SkyqPm123aA2WQF89ADRmPBUxftZ7Apb2B28wrJkghUHwq2v",
  "key10": "45Vb28RHyyhhrf5DCizgQbQVFmcwcm74mmS2x4wtqkRv8LdWr3VPGgFg7Jej6qoRxxQjvCJAat7Dbpnj7DHrjxoH",
  "key11": "2C8qJvhcvdwrvi54MnWcvGXPLeXCBCkqNT9qwpf7rSHMQA3muzV5XkK6iCP1KVVgF6mxaXKmDZvpBL7rQYsRTzqd",
  "key12": "3ztLTJ7GChEDYGFb9Rz86F5TbCYkZuGYuk9pMuYvpmjj9GJmDWafeJsaABCFPFPjsvaDxc47FWdViLaw8ysC8mEU",
  "key13": "3BoyVGbgjfocHtdFYzEZLyjTLCjPYuTLQyJztKW9z2YVHjpJJbFTsj1BNSdSLBp9q688uF8VbsXk46pVuczYc33f",
  "key14": "315KMoqMjkBkyD3MaEjTDKPHJ719CtWswSHHedbEPbbhroHWjXoiT8KaqKCX162MTjAwBxnmRo6CyTizRMUEsFx",
  "key15": "4B7f6oAr3B8JkpK3RnEcF9dYdrQbHR3pvM8wgjxDRaavtU5HNQGDY5EwWq5xMUDUyAzs1X86T63ofp9fQ3EbRBXx",
  "key16": "3jM7k93gJF9PawUpCSFPGQZRCjCR8C8GYAyZdvHrvnV69yBGoxcAi9GKabajTRLXzuffCEsafRNiKVSqM8uE3ai",
  "key17": "4x6k6YfDvyNJQ8KawgQpnTSR2dx7rfW4ASHkFzinUehmczfC2eJTMwdhBtgYeYmva6TAbkgr4mSqLgGtwDZ13Emt",
  "key18": "6qRMZLAzD1veXpR5khEGN4U8wegJUH4aPX5EDAGynfVijhZkxj288n7oBgKZbahrEwz8C4DYf1QUgznhJh2QR1P",
  "key19": "21oebiEQeXcag5BAQaFj5TyRA5ED8nQr6v5FwoEYGvafZxYEgYhiLnG6teCLJhtz3qZuhyXBk8XA878qJApKu6jU",
  "key20": "26xq1F7k4kb9GbZwB2iVaoCYYCBqwzYyQxtSTVdosP31JvDXiCf9tmbNtxhaZ9ZZE5gfo75L2VGAaARjauHSGjUu",
  "key21": "5s98m4n7EtPey6MLX8rW4xxU6NV4XSDaafD5KwhKFR8gJF8Ct3o2xptzwfksWJTDZarbLp8GT32Xtcyi74G9qB3B",
  "key22": "44ZPpue2WuPcd5qsdi3gdhcTJw1dsbT8VYV55RZqFmkHPsP7yEA8GT5VMrYj7GHUtsL9PYFKjCpU7a2WKkhQ6L1K",
  "key23": "3u3PYRH9ochL22WxzXNzjoVbErBji8LfuGHEDHAdCDSAht976iDSFhqitgQJ3Wc32Eyapiu8xSDiS4vqTh4ziAAD",
  "key24": "HMV3UqqY1UDGrAmGsvomuBCWqSGQ5rKctjQ3SNzBjEXZPa4ibbbxYTVP6ksL7ftgPxgYTqNzN6YphTLVAR8Hkct",
  "key25": "4PBtJrqEZCDr5xQdcgChdwwdmQya9U7crz2gpWBFbxMmmPzaysKkGkjKgJChzPwUUUNU5Tofmg4s6oqzdcCnKp7x",
  "key26": "4QTg1RmPswYCngS7upKVVUYeksW1PmF8nSBFEvF9joMbt8JzUoEu6xz4xqf88MBJT9pvrVWEfLaiBR1ux3WAZUv1",
  "key27": "3M6uaSnHE4aVQMSgfPoMLPhYRVtFjNrLbNcjtBhzPmqdVNFwNMk1WEcTosN9KcWZC8QrDAjJBUjowAzjbvfbcchL",
  "key28": "2Wao4RurDRawepD4vbxkdSvqXxQv9J3STgprhWxDpjwvWUnVhZ5XupkssSTJEZnstuAMTFQUH2jwy3AbP29wnWf9",
  "key29": "4pvXsbicTmYF2ZktUk4tYcEUDHZUKkdFwJRPbH3pTSTA3kP1JN4qtzkxRKS8v1tKYhnhWYepij2Q4T96huwKqQC5",
  "key30": "KLjkwjfdfMZqazCKX4LSxDixDBacG7ZJZyXY5ACosA3KQNMEGEHSsxganfWjtDikfSvo5ytNS6Mpr4aoSAoyGc4",
  "key31": "2cpDeuqVTHjGEsenYpTJZqYnbacypgbKpuV2XyRkhyYeWUNKZsKgTQZqzSYjxPz2CVTm67GprBP8DJGehwg51jj6",
  "key32": "36Mp3NNGCAFUTjmy32cnEHgJEYVuHwr3uDNNoYmMGVqqMr415sQ72gSToHy8hykfUFwQusZrL3byMd9gky4eUDz4",
  "key33": "5S7YoQwGZL1E3k4aZW3zBmu4XvqD8422QUfNDCsFQSXTTqMG2r7sKEZQS63GyPDBbF9TJDMyBDmmnT4sKMFDgCw1",
  "key34": "3c6S4mn5TY3UTM3yMgLY1Msbb5Bu5Dky9SfZ3cEhMLEYAfbxa4b3n5KVz8h8aY4LqqPXcTpQDyyQCBQN4ep2PnTd",
  "key35": "5CdNdQycPkbR1YocEgN1PXwRA4st6s7fbjfpBRMvynnZ4YGUFF8rXHHjariefNgoeaJ6pK52MxTg6p7YCywtY794",
  "key36": "2q2dx1Ji1rrxfE3ZZsZXxLxRhfLJ7mQNihVv31zP6rpvZJMTryVYtHMnynRJBkffrC6NQNjBhfyJUz5nQRYxrirp",
  "key37": "4DgkVNqUBY1KYMjbf9H4LvgDSckRUeWw1ttgAAukhCtCqMJvaGN6EMerZMGTp1ESFTrQuCLmiMcw9iFGQxSbvfBy",
  "key38": "3T2X61S4y6cpcUw5gD4oTpiBWDJ33FJuCTTUAs4yAkc84xTC71rT8MvmoPxY2PULDCtWtoinKs51txKr7SE5Zsdw",
  "key39": "3YmWvZXVtrkvsSzaub3esgefAiSWAbCVYYnpe1HvrhjbH6nruKqBYBTheaGs2wBsuBTd6GiYJBqaBnhdwqU1KL5P"
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
