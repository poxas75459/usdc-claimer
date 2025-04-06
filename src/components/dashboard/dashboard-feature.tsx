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
    "5UqaVHb8cmen5vYEaNYDsrpQqKuHkhLf7EMULpSnUZ1TqUDppRWf4LjKnAkbDyiGBTMhtYfNzfW6KbEgNJANnz6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mcvp3uJskx345oBcN5fiVQCZeXVC5cv2XnsByhQht9g3aK5tDS7TugLxD9jdiViwhLeigpWi4LXnov5DtUU739q",
  "key1": "5kz78naPcn4Sgyf5V1xsXL3cRB2TH8dkAFHyjMuZ6zVzWovuUHAk4MhF25ey4beL98RHCcr4yCnd8vBYexf51yHq",
  "key2": "5z3rVzjah9Q8YTd3f5wkaCS8e6gQKSgeqpCsBFMz3SoW5KmPvZ2vBsx1h743cz4DoJsBFHZhFpbgmJSXywpDNADi",
  "key3": "fRerJqrTfakY1XxERDauyR61WbgaGUz9WRtFWUEsLHMCCgiunNYteJWcV4vqkbgUfuvr12Bg7zDHaLdJrFeWgeT",
  "key4": "5Az8GgGEQotSCXLyweqUdw963YPfg51uCRAiaC8z2qdmoWCZmEXkaisJ2wHQss4kjXQe1unEffn86iGgdZWnxSPE",
  "key5": "27g5RwDx3gagWQ1bRKGEdJvFBnWN4j5Wp329f2wAsou2W9pGrP5Jd3n8ZVaki7k584ADW4KDPfCvTRBmnauStNc2",
  "key6": "4tePqYnLSpg4BY8QWwuh1MPWzTpxPkzYX1kegq5x3qn5N8oPVh9LZ4vYGKXtx5tmm3J3Tf8dfA74J9Ltb5yMWCEp",
  "key7": "2KY5e4QKyh18Pwm9vS7KojjNStiamP6oAxVtHsrnmb8qppLVufuWCRj5yQbe87sw4Kdw6gLPgPCDAEZEHMAWr7Mn",
  "key8": "21qWuQkJRpycyGUEqJErMsDun9G7Lh91oWDDV4pKWEp4MS4bFKndRD7cjYvsUhzZresQM7oShz9pi2KLRYdiLtSM",
  "key9": "2EsxDozj5RXykCgAyneh8dL69YjxqhNJAQVkyjG9pegXGRGtS2d1jSKAzhH5WpNRLPsTEa7Rk1bxEA88D3J1Dbsi",
  "key10": "63PDRwBLHY3SYwzXjEHB1wcpUbZBFvnH1pC1HCmCRVS4TMBsJYdjFVtw4bMiUZvV7SrNdvLiGpdoE3Guu2sGuwBt",
  "key11": "Khpr5PUxZjVoEBi9pDWiBQmyZ2FsJQ72ghrqBQ29x1NmRutZo6nk4psdLtsePzBFhCbGdbRcpjf7Rqnfmfu8W6k",
  "key12": "4X7mQnetiDSqS5SfNkobj89Yjg7qPZEXdX5QDP74F9xRmLs1moCM4peaR8DnyUmXvPQJJTm7qfPxfjhx8s6rVd3W",
  "key13": "3pNB9EQqD1fE71AEre7Fo1tJmyCW5pZH6BRCmVhVc8fFtXq2ZyADdWTTZS7AADLEzx981cqMAAZ8TTTNJAHjL4n4",
  "key14": "4cHgUGSqhPWWPvZNAKYxfLa6zUCSkCCRKP4JRSffqUY2jaAMjLSWsKv78jsAFGjHQZNa9rzXggepNog9bxs68RWd",
  "key15": "41D4WxTe8qH2X15JyKGfB2ELLTFDanrRGxSZ7cGHuXwZgj1dnsVJX6i6tpsVfLRv23rRPS95uc1pB6PwmNn9od7r",
  "key16": "2AG7KVzn9a8KFz9KosTrqaNcq4UArLepBSyfSfW3M5MFykb4KY41MHFAzf9r3jghywY8hKFh51zJKF5kzjRkDZvU",
  "key17": "28Jxe1DcSQ9TyJEYdpobnLPM2aZfny3Ctfqs9a2ppzgLgUx3SveHpSS6fe64TVbQV2tCjqr71FoUvb5Ahbx5swqF",
  "key18": "4nXDmDQRoW7meBuUCa8xjjhKmzD52ns1acREbiXH3sdEaSEpHZHACzDxYRG3XhvDr19aRXNJRTxpCXpuktVXXazS",
  "key19": "41a8n3tUieLWKCfRXPeWvq1vXMTCgXkjhYyekiQHMwQsXMBvhJkftqXa3a7AU3bEbTBgXPKHbG6nHs32FdaYjSk3",
  "key20": "3rCyNftAPjMfTKpF9E9ZAvBd4ofCuDXgvHk9H8ysw74XBrmB3abde2ZuL49517ojdcm8PF47K9Cqf6jHnJZRpjXM",
  "key21": "55Y9npsXcT5xbim7SE3KbTQsicKpSL5BUaCbN2myz8xkX9HnniGCQUSFinhqAymWsRryeV5dC5hTeYVvn1KmZW2r",
  "key22": "2pYVGvRR3jD1Xgcb7HkYXqfPNraSBQ94fUPWuj7qPmFvi217GeigCavaGTnHoKTLstezJTsqHFu4o8hJ8hyUMdx2",
  "key23": "3RWfku2Tp65WL2czvDgK4VYCKBJK74kMhdaGJNtthsdzAwweVge2oFWHgoMMrUu51NWmAQLL7f1M4ZuQpDHPvr1R",
  "key24": "5P1FD7hwMPpPf5HJX6YUfvUu9Bx9Xn5QEtGFrRau779UDDTwFBs2FpunLojJNkucXwKEmropUE8bHN5EfzAmGSnT",
  "key25": "4D5ygpp9pvAHmHcY2KmBntHXgMaYqnqSAGHSKxoAjxw24JGi2os1WiMDtuQBQSVHLBQE3BBNQXWYVKdrGRtDDfHC",
  "key26": "4UCDaYLqSgKVqxQ5uTbXy2VX1pXGschAf8WuCUzd8AyUgxQqxkbnWDeoZ3GHhTuX21tAAdtmW3GvLDqEBeokJQFk",
  "key27": "5oAjkQKcqTo33EKhsdkXyN4uZ3joyt5dZnofpUcbCjEq1fj3qSdfRZdckDzhjy1BU1J5HRznnyjpf2uVyfn6uKVH",
  "key28": "4NUg8xh9Apr4gtYX7BZ5gLz8CabWAKMGMk7sMCxgku6hP4J8dtCGtCrSncQonbNkNYTZ5hkT17mXMtfZ941MveG4",
  "key29": "4LRhd2kkzmX54Z2k68jcrzkxezcZmLeHthCdKq9c5deZZj5mJfgr6E4xWbgatcsSt15tcfBCDWdqHukwg6jzNRtK",
  "key30": "5NUuLog88vkNtvvttDaemPZMB459SRG5gkpUmb6aLVMjbkBWFF286KV537uc3oAUWB1j8Eqbh3rtkRJMk9uHDXdi",
  "key31": "63XvRj6cF3uiYhVykc6eGxmYu9fSFYoLY1SzyCnJcsdQbpbfsLXib6vEgftDUQ65ooa83Dzvh4gpAjP4NdwTNnjn",
  "key32": "2aiXwsKKhZxdLyABxy8Pchxezmag1VTjHWgoY2uLGUwD33sGwF1QNLkp1DiMAKU9oKbLdEXHyami2BRCJvVVzEEQ",
  "key33": "2bH936xaoC67XP37BcuyMoZGq3MT99obmSFYjrk76HiJjKg28JtFFsW6cXeLR8FqBmuELdjda5CZqqUdcHTcN8gD",
  "key34": "i8YbZXWLLxRMDCd2sbFmgj6y1vDkTdwTi3s2nCUZcGsVCEZPquibVhZw195gj5PDTxgphQZ1FzgvfUuk6RbUqhF",
  "key35": "2cHCAKaonSKAiZ8PfeAt7hseqzKPRPtB7V3reUAasTmLkeQrrAhM7bgLrJrx4MPcoTSDQfGiDEnGZrB8GsH9fs49",
  "key36": "4MraLwwbar8f8pRu21yLvnhqg21AVZzjpbJ9Vpn4or8CBNgyEZNqNREUSQxt3pyyKTvqKTctGtGt31gMZBY7utri",
  "key37": "4QotbnsQKLyBJvRbe1zAqUn2iZbyeZ7ZbAvZeKZgHmnFkYVnajEp5n7NWgatzjDA1iAsJzYpR4vj1R5YxakHekQi",
  "key38": "4F7thZBfJQSCq99ZSDdS4Cm2KzJMn5dPBiVpBrkswkHjRmsft4S6hF1xMrGD7JAKF2fntTgo2AYr24uT1tZqzCyH",
  "key39": "osu369YmRj9dfg7sBau96fSBTjC8tNzZaSTCwjXy64NZzMVy7tvJr4cRASJqWc6hsFsRxA3aB1MWRMeeuZzjbox",
  "key40": "3s5jmsYPiY2kS7bspS41xj36tNHuD4RegVwmsxLZebczkK76Jp6SkfdW99FBYj7446kCvHv46WbpAXj7Mgh1uLtb",
  "key41": "5XkA6SNxwXhFo8914srab4m4VtMcW2ntWvcqiq7hkb7nXpobj8L1AcuKmnPHsu2Dpc1aoe6Ziy5ntwkM8zDSt3sD",
  "key42": "JzcKKFTnATESxCAX9sassxaKTL9HxAfPP5QWsP4oSCxx9xfGEjuwRmqt8DyozTWy6ehkfJdyQPsbDvtopQs32v9",
  "key43": "5mD9ugwxSM3nxGGyGrZjNQBHhLDAZkNABVRADDH3iFo9f4Hs2skC6jCNAqJWZevYS4sYvtSTkMmiAFP21z7eYCXt"
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
