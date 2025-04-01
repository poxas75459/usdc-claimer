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
    "5PdsBiqDznpeJXriCrwxGYmTXSGCLo9J9RRDzC1oq3uUvt8964fbDppmfHeWhNayaY7QMHjMpj4Bt4AMmYZqFYRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a3LPPVScc72cJFkt2XkFX2FxPGy88jEUWvCj9MaqbixjFLjvJuSbHTkw2tyymby82LJNonWS2mzL4h99miNaEaP",
  "key1": "54RcvRcc4TJuEGSWFSRdnPwY3FLfCNVsRmCm7gXwiWMLQvSxyRcAB6DhMgMUo4MJ4qxeVHGTab8CsVdJCSZ78xWB",
  "key2": "RLqRbFE7rTchKrKcxb2PKQLPynQzJ7PNpjdqgsb4mxSTCufGhgCQQ8tqfwNPBkPbNL7xRMNEmNKEgMY63o7XMxR",
  "key3": "KxT7obN8EcwAnRP3M3A7UJHub5qLWiDSFZjZRSK6ZoWBmxNA9qEqJC3rw5WMzDHPxuG6frRkrPozfaqGGq8Ksxr",
  "key4": "3m8tABRDyytL1mWCNcEieLYUo9YBSpebUU2hthNANavrWyzAe5bBP28aFZftVKYRjiy9qmzoxkLLBq7J26vNHHGG",
  "key5": "nX2HzHVXzfNPpDjrFx95De6wGzYQ3sp5PszFEGJM9o4qTx6vNTrMCEy8fNGjLK3RKzPYdStw7vdoqg4DhAEoNAo",
  "key6": "4XBN7hfRMgyJk8aoFgG17dmoAQhz1yeDiSThtgCZHsD6Ge6zaYMzJrEY8ELzBBypaKY36MbKB87yE9NeHEXDocQT",
  "key7": "2cx1LXDHofjraf61GEzvf1eTg95UmjirixekR9cANwbtp1hLygpgp7thYu7ZxXE3jpWLRT9E39aw8Qd26MzhZCcz",
  "key8": "4waBxmrSNeKmwh5Ct1db1ShK7L8rjydX8GePs3xvvDDAKVYGNJKjjChirVM421tRUFFNzsSJpWRq23Pb1PRH3nAx",
  "key9": "2GbjpsL3pvRJb34LY3U7tSR2mqn7WqdujGL5mHNDuaUXipEb7JNJ7hPrM1QHnYmLwbteqK4os7218HnjxdXEf6PD",
  "key10": "4opyJW2VMLJmZxkNYXvEUsxHJFA53iSgEsABcaKBN7qp4Jrj6uDxjQEaNpGBsxcEHZUuNGB9bHWXeoCQ5PAPWEp2",
  "key11": "4JW9t9gZrgR8uEvaPc3cVTucMEAgVEgVMnHCxfs4PmFHbTWcAQgVb4Bgpw9yZFM3RgkhXdALMYPmAQv9hVnj7cZr",
  "key12": "2tCjfmZ7zHQvt4qXjWp9CJ9nWS3ENWfJVX3GoLCuYzmgtgJa1HfdgfJyWFkLZ3PmCJvwDm4QCF2oesXin6U1jLbf",
  "key13": "3nY52zxtwGVsSFg5bWQkPvSXG6grfFFbV2qQRQo5Tgx2cZvK7YheSPKcb2Pz4JqS2J94Gw3ofXmSTRHFU3UEhvRs",
  "key14": "4cD4yumpg4Z1fNbLAXj1QZXbZzfr52QJNDUgKYoDUsQknZCfZM4cRuqiUysKXSBMqKFNxokBYjw4GSB361fFqsjk",
  "key15": "5XJMbS4Z3WMgxQ3g1X2m97gW9xKY3TAvf2NwKpa3Zyu31skkX6K6Pvnk2kJGyuJs22Fu5ki3QAbeRTdhE9pTw5S1",
  "key16": "YX2KDyRqBKXcNtHVZ6xE4sYezXLC5jHXEWA4U7GciZ9PrRPDRtu7DF13ffqE6Q6Ys9iGbnZFCdp8GPRh8AjDgWi",
  "key17": "2TFFVSWcPG2DPAAeUMCFirtARy2Q7adpn9iJppUhkgUZFr6pF7RNSHfGCZMrHD8TY2wrjHxQjGEJcPrpzu8nhTq6",
  "key18": "4fAmCP9EQL2U72cRkASESTB1HVSK8fCQpWMWLSCPCkdpYL7aJpg2PPfHCR5ter2cR1AUaNF7JyBWHjDkKyHTmPYV",
  "key19": "5VLPiGmua46yi35XGZMDTAQwzSoqJxg8wy4AFnoTRtzRX2iMAvvy879nkHVtfsHDmgAnmi6NiKY2uTp5CGmQRVG3",
  "key20": "512G1kK8LV87gMYxQEimU6jX57zewwWdRgnCL3yFwFGQLnMjkhwdRtaomHBq8vz1zhtCxgsyeu2teruijXcPMf84",
  "key21": "2KcYy24FPNN5d1yQa21ZMxTX5t3bThNimxo1CchT8gLxa579CYtCEXHPHWmkNqS8RHtfMgtdMYHGL7n41MqiSisx",
  "key22": "5q1hWnPSN4ejM57MM7jM8z5VbVGiSDHTJM7E4ijXx1wMsdhzFp9VFkPjYV1gW58SWitiU9YKZNEpMjrQ15dkhADy",
  "key23": "M6iNGGsjAiYMJUQBzTyVHg5Sjopf7Y4GT21eAG6TweKaq8qnvjBdbdAJi5rp8DEoERVTinnEWCUFWa8tNbA7EG3",
  "key24": "8YJjW8msth1KCJuXHeQgnkEJxkxUWj2FYWDXacKH1cGiMpYtuHiCkRLSXwM7EW9jwWT56pnxmYWhgWpN778R9kZ",
  "key25": "2vCTGBKEr6cdkwPEJgRKEEvERQKhkhsF2DCnsfDdndebN4898UhYVXo2GpsEP3omFKUuCrccwG6yFWTsUsUn1mqi",
  "key26": "4Cmj9GuovLFuhp3VqkYoKS6Ad5mhGN3iM7BQHshG2EBiU7bt7VDnukqCxzkqACAf3WxWXqemjm6fZrst3dwy1btF",
  "key27": "233p7cKDCadUaCXL9i8gaeivwxF5EaWBudAQV5wmJAu3SYjFNBZjZnUz15LZCRfbERa2FYrjGS8PzVSoDQrK69zH",
  "key28": "3eLBwA3QaeBKQtLunRPFiKTxGa9CNEbLXYM8dzAqeJ1yg6MxGT45uoWccQyPF4SxpBw2BDzUginqNv9CER3J8SnY",
  "key29": "5grA6iWEaaAjvAqtBemfShU99nG1TFpaAcpNgMyL93fmjfd82bgP2GoWQq1nRzvifr6AyYjqF8qzftTJVN4JCN2z",
  "key30": "5tn5eLLLX3ck9oHS3eYPzD4Y2KXLHE65BvA7hhfXLqgX15WAPR8MjF5FXZCfxUQju4axMeHz5QeoJe446jWnBF8F",
  "key31": "2prmCzN8k3Hv4GC5uTAKnvTnTmGMWirfBtzMyqP9SrpikTH27tTu8NaMqiD34axpUuZu7TtHCqFJc3fCcSgwSwG",
  "key32": "2tVJRa7TLk63kFvrFsSX3Lpa53PDLUPfxTcpojF3ymDs7xMcHuRLgdfaAm8sivQSjrq7bbqLdDZ24ezuSjGQ43m6",
  "key33": "4KkNHJEn3Yb4r6wNV8j4ECYDwTZiNAaaDfGdQnAdgEPrTkjgia6oYTLFi5xgidfe9PfwFB8TjV7DerCQABymHsdt",
  "key34": "4BPSuTFBmc9p74a4xJrEXeTeA4GFx1YZ6E4N3U3hUN7JH98fbz2moEyrpACsqdx8WLDPK3xfkkBsGoMFXTRf72Xj",
  "key35": "DWszacgdH9mH4MY4U9iRWxKSDpXTS7bVXGeqVoFfjGrV5aEZfEtSWuiqpecYvq59V9beYB92hUNM57CRSfSXZxd",
  "key36": "pevEdew72sdQ28zFwWj6WxdP5LVJYZgPRC8w7FdLCB7nm59R6bV4jEm6LfnpEsAU67QTtNoGd9FXNhJnhA1dr2e",
  "key37": "2vrPFQj8E7vAAHR4CexNPvpLsVK1uGkZSdz7Ld5BpAwTt14JKKfSDGTRsaJk2vd3WTqoTZ84TumhVUjbsrYxVyPp",
  "key38": "3Fg39bAZbZjr3ousroqKfX9WjJvDcLjiJDMadF86xgzohEe33kf1rD1MmKDWmBY2dnjByQUfWHr9aHQuWdXxqbNd",
  "key39": "3v4jdWijksySnqbVu5AMPcKpD8m5W8XgbsfcVCeWaV9Etg9FVMRwu5k5ud9saHheDLw5CWTyuphvPFJhSckc7Aup",
  "key40": "5QHLFjzRNAiMsDGSnPEo17J18WMuN12YyTbGkPi4dtAwJPjtn3ZcWutF1X6mBx4T94kMmksfgQC2opamL6KGdaGm",
  "key41": "4tDiKzAmnCXGbhYmtpxazJ3p8PQ2vNoYmmKy7Y2jVmsW9RBct5npUKLoAQQZtDmzekfmDUH44qSdkwNGvvLT1vAF",
  "key42": "4rRg4wjASGzyAFRf5RYYjMPLa9hH9FDYk17KbBtqFwMFJ2AZLTAcyTtzqjfnkgHL5g7rQH8rdu48bJucy8hwEFuL",
  "key43": "27tfcASubgMGao3CcANMLszLSHVo1m5PEu6uagk4ZY8yjGBeSFW2j17WdbLbPLEmM4jK2QLxWgjbRrRsdMd9DbJo",
  "key44": "5nKWEFDB4B7r5EuBquWtTEaGKrjdvs52jHAoSKmuFAAXkRxvxgP3wQDmAgh5bvtytEWQgF5aG2Y1RSuixB9EzeH",
  "key45": "5kX3TFtZJV7HkjsgvsbW6WUXHnZkgaaGmAhaWfaFf9CuMcze6MtewRaYTaCDbaD5RHK9tAQwhWCjZKRxi7hnUC5d"
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
