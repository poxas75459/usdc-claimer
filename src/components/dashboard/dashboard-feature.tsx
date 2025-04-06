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
    "LDhvRZSiXJjwS9ZNnAszmW6HstvBy26BHNkEq3kdr1Ht27X9Qm1w9TvNuPouAg6J1fBd47zgZbETjiKr4b6R92e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gVTFC6WktkAE8CucfrB4ta3icDwD1PoyuZ7v2JHJgvorB2yAbXRqW3xN4NGxTA85hrBRqskZkiYNJ4oZfhFe7Z1",
  "key1": "4hhdzP17cLmV2wppciMwxBZz5PSbFVB1UcxrPkFG2hpX2EH5AtQGeJwjmowYR8BSPg8sPCkbbPHjp57JeMN45D2N",
  "key2": "iMx17mMFxwkPz6n1qXzWLFw7AAVaKGu59dK27MjsKJF7roeX3jyZLHd63h8wZbHqPmxX7DQ5vb9DFFzQveAVg2g",
  "key3": "5LdC2YhuVJa3xHSSXJECyMZyF2WD2XaXJgnxyay3jacdP2XxUbnzYC7RHTYjLf1LKhv2mz9zP5FbV6zXx3aMDfKo",
  "key4": "32NywA7DcUXCVUBhXD9erpUP6goYVAmrzaxEnUQGzW8a1j3BL74WZ2xhwFsVNHRijbVhxcWjYh7o751YVBaPB74N",
  "key5": "2HTbonu85q69Le2emsomw8fLzNJMUj9wZNDbL5YD9S1c9fKymCE378VhgP8DyKNsTZSgMk1VX684j6Ci2N6QKk8W",
  "key6": "4xgTowoyzbNfWTrPQgBkDJz9cLmnNyj3nSFHqcCjqQjDtMqPxCJgsB4YXfD1uPCL7GxD94pdVjDzSLkerwF2rBP3",
  "key7": "267HTQjx1T7fZPXQ8Cme5Gocc82fqHg55daWjUsbQXKJGwRxpGeRU2YhynupvrZJjrGgsg1xeREGYNbp29qN3rHu",
  "key8": "4ixSc8BuVVRsUrsuDvP9qdkqgrJ5BQ1PidRD9X1JPJ6bkq1yWBRHntYD8SVBofjXQppzujNsWdxvcc2dKnNsv5op",
  "key9": "ASHuTHrtFHELr4JCLNdb4jsYjYyb12Zp3q9N3Mcue6yb2QHnPs6yynotZUSSB76k5xyddRMZaiN13KmbH79iZDn",
  "key10": "5VTY9hKERoDzkDYgAg45FNhdGqyqCtj9HMdzR8hTQCR31Kg34RPHww7c7KLo6d8DMMHGVRCA8vMAnoa2YrR3cF7m",
  "key11": "3v4wUXwrcPKff2QcNvZWEiNyJGw7NZUhBEZWy4BNWXE4EYuHiG5PLAnyBF54Rg2L6Lk8ra4MXWYhB3Da4c15mWf7",
  "key12": "5Ykv6TJGb1b6TK4MHSqri9ni6AJp3ry8VvWpgkNRHhwa4rChTE71u3ZjoBzJkFMDdo6bvtgsheaBpY9Ye4bMbAma",
  "key13": "3PgYmc78Vsjsjm4CTS1i4exSJJpnvUYZpUdvs8znxiJYRNP9Q7uwoZ2zZEGKx5h5HwStpk5MczZ3J4AtAppmEgnq",
  "key14": "FRXSHkorwtm64TQsATPaFPaKyC6cFn28u5RVNF2U3BHeJ15vMeeK9nZr3By6Qf5WcF9WPdSabpHAPDLD1jeKo6e",
  "key15": "U9xks9ig9Fksg8LJdBRX2A6d5ty2e37JDyFck2bhzrK3oMbzYxGqThaykjRtJAryxQR44q4svzu5KdpKqNJ1GCt",
  "key16": "5LGA538Cfba3hf8bpuFH9ApXRxSPRJL6ANq31SB9V3q1rjFCRAGQ3oX8Vh4VHbyQcdvJTJjwFLWEWZLu87ZW2v5o",
  "key17": "sNr7XYAqMfbLpFCF8d3F92cj5Ke9BTVPNMwhq2UswPzhd5YNuV86wWtpvM3nD8P7Zh91nD3cFvC1A2Vu1YmG7ts",
  "key18": "jnpDnZwQnG5TgoGog2hjCzjkRJUB8paTLLJD9D8JM7xvm9EH4seUMExEyYnibeum5XrGx9iyPRhfRBv9U7XmdEC",
  "key19": "3wJCqmUucmFRyrGZZ9JbWVtX2TDyAsBM5GAVbj1QpfBK6ybj2oQPoNVKiyXRtvo7h11REWi6NnyGSevuvRFkVWF",
  "key20": "5GcCTScBc2nRq8tzYitfNDbdHJBG4ZYJy1ip7agM9Ehqj5Gorgm3TKfaWedJJ4JY268EdbKuY58EXw1bepcqwxCe",
  "key21": "5eYnZBNVdwgqVxVez3NowNecF5kWAZg8jqAusEpZLFQWmsnkPVUukkBiMswoGz9mn9CDXxasBdjWogRs89P4pYsK",
  "key22": "4h8m6gBFxVm1jWoF1a2TCKaBhJuyPWzC7tVxXrUTh3nZ6RZ25qhaicUZDD7agCSd7rzBobMVX9T7MujkFLvZjqem",
  "key23": "2u44htbSbyMgkebzRNL6J9SPWaipS59XiXjwnBS9beniLmRQRAm7hEAV8uwnSRUugoDrb5wFj7xtf8MV67gdJfWi",
  "key24": "2o8MBH1z4gNkUpLXS6VNG9UiWY4XXGfnkEQxE2AnMSAagj6r6todv2urA4aa3TvYbyH2XEf1Qoyfe1m6g4Gzu9rV",
  "key25": "2pntZvp1kzWN9DFhTs7CKpANtzmhq9ZsMo3ND1JH3CgJjjVeoMSnQGexYeDQDzCdXmaXhuxtEcWFemLnb3jPUak7",
  "key26": "5BTrEUhvV4A2t5Gxak4KkjaXaxiPZQ98ojziubbucZw3f2hAdG6N6xxioDrmdrEap5JpDfwqn5cDVhVYyoJaN3r9",
  "key27": "5n3yYNaF5dVLwoiSrzU3Pbs6gBh5xf2nqC3rTHsDeLmJnb1rWgki5TaFCaXVi8bNXp5sm6m89WAkZaiunENWQvdS",
  "key28": "32c93UQSQkox3P2ATFjKDrPNgSSGrRwgF6omSn4CeJkYYChZpKGHU3W8sfrfKHAvqhrFDgaBEEzkZDcFK1vGoYzG",
  "key29": "2aWtJ2c8NEzgbQBuswDA5tbjfFd1B9pC1j4VVUTeeoFDVrfTsrxEYn44LDLLxncqfGhGhYvcdWTuZKFHbdMQVgnX",
  "key30": "4Lj9hQdrkrxXEwBf8j23vzBgg7QHvD7FnPY11EfC1aoyz4zznUMxHcuMPCyMQECcNey7XReqZdQfSjLaWqhNCwBS",
  "key31": "59n8BuLaBXZdpM5yUzQccSJwLRGeQsTpcpYWMeb3x5UiYXNSE2YSaoQPpXRFpv2BLdNYBqtsqtt6bBe6dJpAQYgA",
  "key32": "5gwDSxQkq7TKmLDR1uLsb2RZ1xTT1AAT1UPw8YUhgK7xk3jQV4vzNHbq7Y5WAQ845DCi3a9mr71oszn4Ygem5jgu",
  "key33": "3QYJeH3SZy79tTZWA2eT72bo8KVAXFAsohjkG6En4QUHVw3nkNZ9hrJyi4S4s2UbhRZU7MLC43zdYdoEMquHhU88",
  "key34": "4AYASMRiTCjxba71XJzFL68ba57pNjids2xVs5bvYhRH7fHRhYdqpcXdGBmUfun7XrbtKtX5f9cQekFU2AKHGCUu",
  "key35": "2u7spZZwn7D2v6WHEdKZpJre9o1FxqYuZcSctmd4FNy9Mu45cZkDmZUXNsskmSC3Vf1Msbf9U7HPfzxd8skq8Z6T",
  "key36": "4KpXdKYAhSZumtpAKDXzDHiS5NPxk6g9MP4baK4LGJ3CGtWDfrEwXzkY8Fi7W2sN8gbsKGUcPxkDnSEvsrQcPghg",
  "key37": "dhaU1FH3cDnKWDtQKNsiJ2mVo9x3Q9cTm54qTcugMZveyRXSLu4ZAudd46Ptsi2V9JGqMbJbJ5AGhm77qKVNHYa",
  "key38": "4dNjaikq2HrPZEzST5wsPoWc4XRJgBfpCaLxWmhD9j2Fosjvuxy9XnH5Eax1XZMzjiKyszKnCgnvxM234FuZXQ1r",
  "key39": "2Qh4s8T4GkNXVVuEq8r6qyMLWYK3Mc6k2KkrXPjzrMD3ztSm3Ygsr8GKVWkSWMQT6LaRq6YPtA255hrH2DEMdTBT",
  "key40": "66A1djwFVqm2FH5UBqozMan67ih774FG29qDZocsGveAPTVoL9wZqwXqzaKLpTyzARomK9Mktr1SHFAFQhUFhSXh",
  "key41": "2sd5BKcUMgdBYWBJ54cB8QiqnCZw4oQWfBEgd9Qy8VXgB18fxLdDzZFg3WMcUrxk1KshBN4F32dx2aTk8rtkYDf9",
  "key42": "5DuJ5HUknJ2h8rnjwjdXU8AyeBkuDh9d91puV3PuxkqsiXh6AcRMsHU1aYr1PCSvk5rppkHqcYEfnL16e75GQnHG",
  "key43": "3arUJwD78n2SesJxk3xECByXgRFg1PwfaFt456LgAQ2qmzoNqpFijEkzU4fe6tgfL1WEtPSsArkhv4ToqbWiBMPG",
  "key44": "3C1LVd3gkhRsaQ28LGHh8fzfeWGnqkKG9PzVmaw4gzBR2xdKqDUWmVcMCp3c7oiakL4Tu8KHZ59FXysjwmivTWeu",
  "key45": "3bVCrpCcFBqcK9HzcAKvHA7fsQUjzGb6X1AyKdg68WrEqHVM22s26e6Bzs6zhp28LBsC9MbEuRjitRkc3a3ZmmXm"
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
