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
    "4neFqVbBo7sjvvT6ny2To6ceeCH5z5Gzu1VDGnRr4YFF3VwmMcJz4pa4vmQySMUSM6H1ur34QLPrAnsUiEUvZP7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JLkMhRjmcZhfMHDy22hhdTyrW3wVoTrnPFp3ChxB5LLqZtRGmGgp75MWLTEDFb4D4TrNJx5w6zRrgy6mbiiXzZa",
  "key1": "5vur54HcAHrhSKAW7vawNt5TJpVcvCYUo16aYgQwKtj29A7KuUSzGKj45pTgUqLV5Y9Yt4nz2R1ECqYMWVTUMEv5",
  "key2": "2z6TPtFL92YcedFrMLww6G2sWX77HBbJGjXVd7nFSUXZP21xwC7rTwHvn87BhuCisFNBcgGHeahzVwvXRrLuuYvr",
  "key3": "5B4ULhvTA5FeBECxxmvTJfUumHapEEdZDjb6fspXxWQJPJEHGbYzDeTxTZ2AFtrdffnRTreLUtd86tuWgFUuK21n",
  "key4": "27pSv3LVYW72KMv9tqyqoC4ue4vsa7ZJ3GLbfRDeENMAF7hH8vVPzjvGdwX28h1UvyF5cd1rMs34wJo9CDwd8JXu",
  "key5": "3De8FX1wLX78K5VFgiwkyVDtpAxNzqbnSBPEcjTLkLnJxSTqhUEr6qhdMFw5BYzSqiskDQy8W75LeMDJzK6RYPCy",
  "key6": "5ZjwKUG8af3jufuyjU7A4otev95w6dpjpgiPtsmn6Mr4AQ6fCW3BH87yqbNWh2pXfJ91MCRK5TUVHRo171oKwkhA",
  "key7": "5JXeSpPLUzvE6xjPsB139oboPCzc4zqc8seUzboSXLDkXLCioDgWr79QmJfn3aC5G9Nv1Wpksf857noASw84Wu1b",
  "key8": "3A8DCfXcJ8K58FrKQn4VwYRaeoyXqPLzCPfvmTNximjBEFZYbMrBCEJ5xuvWQyCGQ2ecUjG6mnHNpFRtdmCgywMF",
  "key9": "2zsPC2ToecAtqZ4tVUWXmhD7pRt8BhAkjVrpZYuHVgdExxLwNsf1DT6HFfajz29h45Nv3wxM49cmctHoSsdMBdcj",
  "key10": "2sqkoM8z7Ms8SzUHgs7vUm7yHk8sDxJ1np6XrH1bjZVp43fDzaF2LSJp7yREWJrLLphhmPmQupQZqbTphXCp929f",
  "key11": "65dC7zRQayWzBRrX2N8nmqZUigeK1NtW7oETjrJpQbpDFXpWrvGSkMcGxRkpSfrZ2T6o9MWfQSAFCc7k1WbjK1nX",
  "key12": "34Jc9ukX4rRS7cqmTrETvRip6pv7piYeByGwhDkJLHjVNCV8wqVkbzE2JLBBWNWp4Fa9sRDdnGkYcbd1oaApSyW7",
  "key13": "iPqBJb1ovHp28WaDaqAFbpN6BU6Lqt1HVQbfzS5B3CTXs6HGjxcnxYs4XiTHYjRA19ZR39A9pRkZdNCtHJzKpc6",
  "key14": "2vsquiU7bP9Re9yc3VnfQJAFJmNUNj3Ya1B9uFcbYCgLSZofRPzrY2wRFeQwpUzntGtTprxMh4cV5BRPTTzjsxvZ",
  "key15": "5RPGfBgy7HCo1Gt4Zq7SHEeULNa5VH6T4o1yPqay55XLa2MtN2GBTjXjMMojpHszgFhTWiQRpbcyHs2tQbJvkHTe",
  "key16": "i7sD5CnZY8rgBRwNPksFbiMgHpGKgEZ9BUyee7N8tP4qwBi6queFBaVCnrQNKniZSoVsyhse3XA9SLZpF4HUyhf",
  "key17": "2sv1oThC7z8VC7FvspJHBjntJFscyo6WNADUw1RzDgCJsabcwMMuDCVxDBh9QDEXv3SKJnRpNSLh3XBpBfNisxvn",
  "key18": "2rH71M5LuN2eBjyw7ewrqZPPUin3X2HmzbnQhUveT8K72GcAc1m7hLgFKuJewihYRUWKYENDuS4sK61sTVAE4n8s",
  "key19": "31SHEq2i1Eneko9RnhsjeMmkdKsEYze7Dm1xSpbXyjnX5H4Z3FASRCnTgo63CggYTWZnu5CgKMmgJi8NhpXWuwYW",
  "key20": "Zk17CNh5geFZCP1VbDbDZDRAUSBuNjmxDCaHa7AvUTLGmgvqwaBiittefmNeVGMaHnaVnphVYGJXdJRo7xcB4dg",
  "key21": "2HKb4r7it8rUzn21ALZdLPbiQU9vXJBuG6P3raffPdyet5Ru8ZBx1YnKqJW4GY16cxRjknxxsvDSceDZJzPCviHD",
  "key22": "A9TZJWJoN7TdMGXZNtCDE6LVYB3PmXJXqGY9uWDTauWBZ1s99nwzUurebuzmysfxD8nnkwNcZkHwdh5GKPXTzra",
  "key23": "2kLeY96MpP9j3NB9C8uGqe6t9KW8At81HcGMLWeB8x242zrTZNdT619ctcmFN6Ji6wRkauKgKbbYviKMnbNLLSZG",
  "key24": "5J1KDJBemr9CGuax8f5e8VotAamtXSGH7uD1eCB7rEUEXNDP1QL3JZYCY2UqC3YaFMS7eTBqcw4bV74VPivWfpZY",
  "key25": "39zPhRbqehyPauceAnNnbC4YnBKBFTWTme1QvwHjjkTgjGgicK6pcNg1yM6n6PWFyMi5KUBhokqAEUyHSFE8Q24t",
  "key26": "3nbMbvH8Cxj3RdmY8w1oycqiAnDw8GGXDEok8ivZt1Vhs2RXrGe2d9ngT62zyvZ65HGLFm7QE9BpvDGEQcJ6wtt8",
  "key27": "ojkxsrEveJRRhQArnDuHLNeMNciiWkfJbMWQJDVUTehTAfS9SymS2PgN9YMcDrwQnpyPUMfwZ3HhzGrDAqeY7VX",
  "key28": "b7ogYYavoQvx56jaubFdZbk18TdMKmdy9v8DEQkft8G2PAnxGFWqLe6DgLrpvnSV463CLc9Cawgr21PgAw8UHhy",
  "key29": "5zCY2uJmoF3JUdGzQFYw5Z3f7TDoiBcrodAFu9Sgvi4Nq117gtTDzkKvC865gbqNQCcTJcQcyksRPgkjUZQH5TD3",
  "key30": "5DC3FeYDUnx6chw4x3oZ3mZ9RJUd5kUc77DpurdEiSeijKfPaRvs4gqCmt2BDyRDnEaZQDbUfoU4RSEsz6ygUknt",
  "key31": "2Wykqk5iU9v5hZ9xeSqxNpftcBLCBXGXehKNBgzYb3CQP8Fj8biJPt6FNq2TM5MxAGBq1ENfcyTRiUN2eEprrgsY",
  "key32": "RN4nN5vgCKNEfdDFEUo63c16aPuiwMWAhVLvYdVYCpr5nFyL8Lrvs81m7BP17N1nVBHHFhnHo67NBKQjckjksV7",
  "key33": "2uM3NbJTMaY647E3xPT3p1ZqHyH4yXkebm8gJMkpbZPcyeoHFcYySiTKXKd9r2xiZxBfhobDtUbWobZUriTmsUaj"
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
