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
    "HTfYQV4pwJmxVoUtMdxd8WhPLXsTVjW5ZjXevsNaYohdcKFXaLgKiKU2anGbJKy2oyS5VeWcH8PPHNyThei8nVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VDDGR3afTnQn4Ve7cwF7E6bYNgw5snPLH942Uxy9kWAko7E4kQ9f6xWyt3CTrKmmDccbX1HLv5MMaWWRkNXSjp5",
  "key1": "qkQZAJcbuZvdnd11RaH4X23GFn5BpG8gtWaQA9QyZNqVXhRBW57xqDiX7YKEswYEjqhJkPwAyrQ2dqoKethwkLx",
  "key2": "rzhie7FCM3kMdxw13NkYgGqqgzFRvt4jgFMS7THcn6vT9Zqj57bKGfjQQHvMMbnnZYeNGTPrrLmGE8mTRC4Ubex",
  "key3": "4VKBVcT3r24PnSEx8PEBBaUHCS8Euw8HNUtMftSW4c1N5xAeJrAW19ykEV8tWddqmTBCjKzKV2ZZmd686Uj8YQyQ",
  "key4": "5qtY5NfUQbRPcMEh1YShuzUGaexq8U2VfHvGXaYwFqhdgq1F1AdvZgMkUGQoyYmHzZpjSXSYRjxq2KRNnwsZueDy",
  "key5": "awS7pEtE8XnsABahgcuQyYnQeoZWEU66xyuzSBvUjc8UkFcnf788fPnnuNbMgHdeohpDE8LTRqmWKkSjTmrLqKL",
  "key6": "4zzHe4eEWGmawsBs197nZKr9FhmFhiMNFoqnUBgfh6dFyNvPufYg569WVnLUWDPsJ3yxfq6b1GkJWtm8X7mch2rF",
  "key7": "5SZFkKb5p93nHW5FKf55HM97aYiEDRvtYBWJaYYAc8YcUCHo4nU5zksfok5n14Hwgdf85AsvTTMfcHEarKJktWzL",
  "key8": "4thme6sAHyj9TFw1pygjv8P8WTG3Hpudheob7mnsWk9qCPd4mGvu67mx4K2h16y8epW135bQuY9iWimxdDMXQzAW",
  "key9": "5KGRBu8w2NZTf8U1zJJvi9anUzLu7H5Sp8USiFyJoMhSuTxUBAB1S6WvrfJe4csMGMUpVbQPJMhm2o2zMb519Zxq",
  "key10": "26RcTiPpFwgYUyqafvUVn4L79FBBpeKvRAKXaRxZ7M6kbeWbfNbBjeRjL1JnJ3ETHRkv91mE3kNXCNUBsAD5W6fw",
  "key11": "9zMnWLyR8EQ2C5QiQb7Rpd5s3aUpNGm5V4QpL4mGf6XZDMqJwztWNvLTiYVabhsEhBPMt6zyk19xHoyvaqA1x5L",
  "key12": "Pte7wqm2MRZnuMJBzQDoRtHE3EmTberS2gbsExhpWkbx7ZC2aDkerSSjnmZshbczac7X5RoyaPWHHGFdiaRvJxU",
  "key13": "2w1PFEWnDX5orzepp1dvWZzy1ys2Pob553UQTNgqABi1D3DjWtPg9UvhCoJtj77is2v7kXiNHFXecG54Zb7WyqpT",
  "key14": "5jFkFaLXEs5i8V6rMCGRmYqFF7uN1oR997yEEBLGq4RQC6H1fyqXog5C14zhi1b68kZuTWafMoKxu4mVZ76p1wkr",
  "key15": "tHgsnYwhTyqvwjqsHq4WiqGczAqrm4w9EYZYDGNqqiU8JbjsLA8vdFqhE578ccmnKzKGpQRcosn9ahH9d2rUgaZ",
  "key16": "2Lgftst1U4ZcJ33V4qx6ALqfMTdUkGif9wPduak9MSPx8yXnLqNYbqEo6pRe4AMhK9eNajYEYSYgZJPpT4D1FnZa",
  "key17": "d9iq4Va2YuP8kedcXsqLecTLLLDoyC2LWW3daGazAxwJ8xu62e6u4fpEeSZCtbZqhk8ZeNJkbMgB5MHibFtesBB",
  "key18": "3bMtMXv4Z9VLUfLQ6Pb7hAi1E1sMppXfFkK1jH23dGcY8QcefghtVAf5FdFCPonPVoGhKMEpFzf3oDBBRzZQZzMa",
  "key19": "5VN42wGfMQ86zRcZKmHnXuabXqwnThvLJhDruALEkGBsEcKCAMRg2gbae7ajk8drNmMkBbnkBeYXtwj9VGCqDmby",
  "key20": "5q7bDXU3XJuF8wMthPbEG9gGSw9ZamhfMfTQVqDG9Uqy9fEmpjkSAcEAYhvJ2RJJpFdhyHo8XU4e5swQZ7sNghio",
  "key21": "3Kj6vvWuDj8SaXHTjNWT4PJ5X5aQ3W1cU5aRxsqorMxwNEdGQZR8H9Vc9moRvTXm8aDHRGdM5uYGw51fem7n2FAQ",
  "key22": "4ihZMM6QWNBXTmSh1BVRUg9Jg9EqzWgWoqvGexFmUSbftpY7FDns4iJVWVzt8ZY4JW3dTzTa8kEuPYp2JKbjDdPt",
  "key23": "2Pp7DDwmVnqkjxTXAe9HSY3QQonRMzE8qF9HyT5s4t4YkW8aqMQxibtQWG64F2jjxm4kUBvYzW2qbgDi2hFtwtwx",
  "key24": "hN99A7NSjHZDfcUNiNZEmaMcaAor3Lfyzs4cL7kge8XLyUDFFCnyE4SHvYyWTdLSvvYaqmucXL3acDSDiQ9fMc3",
  "key25": "3vD68jr5Qpu5EJEkToLi6FNYSjueb9ChXxyB3WTx2Mk5QePkYPFhmDoyL7KPHR8re1SBbXKAu3vYLav8aqRRcZnj",
  "key26": "3UZbFbyxxi1bgYcTnWQaF77TS3mWw8od63n72ng6XdBewq5QKXLNVebw8DQTf4ays4taC5nrRTKSWjN8TDNpUt6C",
  "key27": "3Uht68XEr6GAvwFK5mbwjkKjdkVtWhQC4v9EMhAkKVvy6nZTi5LCXm7dVUNPPPMiE5qaqQU9PgxmQQ9HBSm7uTjM",
  "key28": "2cod3auV4isce4cxcYD1DDhuoJGozVCjMYDgNXjTPgtcVE4vs7e2MdHtPXHuzmeeFQYP49ycF2yyT55LdJn8RDnr",
  "key29": "t3u1uPAoVACGkUYFf1QCoWmV1tPcU5QowDQaLMzppR3z1dtZohw3svsaGjufgoYZ9c53zyr2yeSrGNb5YCx4nen",
  "key30": "5XYDJpKMUQdtT1RhyeB6djiDRb63mban42iw5JAiJaJZkkdUA7vqXgWY63Lc3WAwbUctqWkvCkszFBw3qNaonv3P",
  "key31": "uk29tsmk6Gmq3REQyAAVSJkmMv8WePm978nGEPQwL8KLAP6wJ1MRXfr1GG5aeimvEuhbRC9ZNtXkPCb6TUitQjo",
  "key32": "64u1EW6nPJRwjBBqcSiLwt7h7oEBhHqp58L2QoQ5uDU3BDHgdRBtiQqBoaW1jUvizRjyFTEbAdivqrCScEQ5kTwe",
  "key33": "3RMEHdbAehj8muQKeoC1sAYiGGFuwTDG74PWY138rvEf4UgxseByBnWRrqJVQPPFxSWWNV3MRqET2ML615vKkQXX",
  "key34": "USJmkQzMdABvi2cuCr8UrimduUPQBG6B8pjrGkssmcT9nqDDcY8iqrZ7UndZrqvMYv1ct4m5P8WeiB2RgDTdjSS",
  "key35": "4NYfgnjf8gaihDum2ZJ1xTN22gBZXhUKgZrxjCDTomSmtbWuo1igFnxkaTZbgLM9JfH4XTea94zYGeXAKWbXqQMW",
  "key36": "61BnPWvtrCgSJUxkst3ijhPRR967uivDVzAVmuQf4PC3FN2Z22FZsc8bj7KpGVbYq8yEjmL3v7D1F4gykLa9sVUw",
  "key37": "nvGp1vDDY26x9BPFjFSeyHRMneXXgB7sDPaNHg4DGvfL6PHPitVyeaE3xS61iQei3YN9FpjqR8CTXpZ7pLWthKk",
  "key38": "341sqdxcFLUd3dq7Aenz89mSWafAb6V4J4Hc68TyxDJtVxGzph2Fjuqc3qbgwQ7XhYzMewi1DvoYxRPxL3ACAv9c",
  "key39": "5fRnsjWXPkDoziYmwwjxwXLttLRi2ARYEeWFQL1zq4AWUYQoAg3qY2Lkhu7sGvh693up6EAZ29v4SczTFGYKJwk"
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
