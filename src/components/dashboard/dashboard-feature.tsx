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
    "y6kSrdDayE6q6z3eadVKLRHiwNVV2zkPdVAWTLEDCguivyf95GgZAPtbWzskRhzFYzD2sZbq1keZ6y1rbDdJhEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DW8HdbDRBswehkJM4asNrWrpiSZp5ugs6W4wGazYgWE8mCqvbj2VUmtGtLGy6yWEknCodo5pj2JpswqBcutTJhQ",
  "key1": "W45tX6UUYTFoc1J1tVtS6cbRH1zeVdR2NhgG32av8SjMiHiZYNqS8UBC16ETy5mkLLWwbCDJ7WiyYha9qomp341",
  "key2": "3xiRpnNEvvMJwU8M7hKLiVd4UJDDDUXwRiUxM7h5aNbxpq3GpNsgtVpDQEwwESn8LwZuHhHar86fXskjchxLne7Y",
  "key3": "eR9orHcjRWvmqxnWJqk1mVHvEFNj1rQJrVWd8XUkaNartSdDNdbkibKUUa1W41Du25jQ39rSBXQEr4i84cpSVVj",
  "key4": "3RZ49zAv6oQo8XukMPq3ecFsRsEJR9YR6Nq6BCPw2L96Xpiu61J5w83CNfJvbgPumrr6CKNSoQ2tSANrUHonrBN1",
  "key5": "5gUibwFdnzydfmL6jYqfYCZLB8VSbNZUd5EGiPqaYTK2GH3AAU5BVHySi7wEXK6QbpmaBpQQx74fXNgTogDMmd8H",
  "key6": "45tZvkJWYvhUmapeLZapDNL5XHS1jrZtej9FeqsoBALCAeH5AYDegfrr7u2nEUwpr3K6q9rTcBN7v9frezbpcHvK",
  "key7": "2NFzLcqQSWuQcQuutKHDYoNCgBdF5t4BqAvhNAfFFRzpUvdBdpJRQfpjvJC5dLEho4b5FwGp98NEwKT9fVrTnLs2",
  "key8": "36dpCkfrbWtjSP4o9xx2N84ukwn3H2U3nu6L4YM7evWQfQeJ7d8oWzhHRMVtRU1R3apYum3V1Zt3NNKAAoVaqofT",
  "key9": "5ubni7jZN1f71dsJxXDm6Z1PzgGcEfnEeWxiThvKCwwfHJZaG5nVTb9rvUndvmPhpprbomkab3XEbChHhJK8M8Zt",
  "key10": "3nt9F34XWdYz64GPLGpBr9To9EXZkntqF5ZxMJnE47ihoEvP6fchaquq6Di4n6ndVNuijHc83Zzr6xi2svEg7Wpd",
  "key11": "vAqZL3vTw7o1FNGCv97h2PXqLqoAeCPRCUfHz6VSSFh7YXbirf7Ce7EWiH8KPxWJSnfnCFKEgv9QyN3RBrdHpLb",
  "key12": "5AKR7wG6Pc4VtPkQcUVcdRi649TFWgaUJaJHLfffCtqEjcsnxe2ERxpK8aEfnYfTYgTtNYNRCSY1SDQHsaMaWass",
  "key13": "GSFGhqDBBqJffCQd3uxthjAdqNnGvWpzm6kuCTp8H36B31jeUeef9ATzMteHo8dkKWHFLk6Ev2MCJbmSLS7NiQG",
  "key14": "5THyLXH1i7xFcDVscCLA4C6mwhqBYEbCcM1jybne4ndxTrKMgHMQbmjN8y6jw9NdVovf3FNFiYZPQZTSmNH2jFHu",
  "key15": "3wD1UJLD42NFAN3pvivg9NPecUdcKcsmKTB11eCdmpsAF5mgtXhcd41faVaGjwgZwWDB46Yf2X43b1r9E31ETJZC",
  "key16": "66hhiZUxrwQKE8vo5j6ZwSsQmGYPeYb5ZpP2HcY8C3ZD9MvQfJmi6G5FoyDWb93jq8BWeY9N9Qa5dE8AJWZQ62oq",
  "key17": "59zqz9PU23a7CnDvRrigLgbHtFYHCgDcFaYmruGYioaUcw4i8CpuriuQ6UrwSExD4ktUcPNrDWbvgqTA8WFcMM37",
  "key18": "2UnbjHYeRnj1VdUfvc8eezdLgAGr6pYgMkCmC3FFGNCG12NjNV6kM7vDAqcGxraXSjptPjvBsrtgHdkrxAHiLnpT",
  "key19": "B9Qd8BHPb9o5wc77Q9WaYFcNK4n3VXVgU8rviMMG7gnvPapCUQwjM4tHtgteYsyu6ok4jCtqeMB3eQBqp68ZrZT",
  "key20": "2G7SWrKnMVbXGE9s2ptHUmxxojNcgQS2SUwsPoa85NeSWqbTuyfy2mDCgAgehAeapbkPgs5v36c6jV1DjfZm8E7n",
  "key21": "663dPmhChqenzp4ALq89Mi8VrmLJSJueyckLpMBxEU3qx5cYP4S1DHXxtJPS3QjsCATdkCbrY16g2XKLyqXZGktu",
  "key22": "2LEjyxGk9AwRkWLFEpR4nv27bPx1CTfRjFj9NjGhzoLbZJwxLGNZxRNP7ySquojXD2tn6A6wpVdea2f4MT5UUHq3",
  "key23": "3WKL5JuKYaCTosWTEejftD4X3B4GMZmmCDXtVEPJLGqcV8GuapApBnbLX3aUsm7WyH52M2jLwR6tR969NQGw6BKV",
  "key24": "395SKcwNqTxZaCKHYoKTMXNZNfRcceZ1wmRyPGWHJsGeSUawZgTcPBWKHT4BGXTL8AzB13fhe63g3wx2pV95SFg1",
  "key25": "3Ucat1QsKGxxrchgf33SgRGnwrmtA3PypLrJTwwEhf6V7nPj8zXqeuKhH85h29QHhxCkXSnB7podMXjyWkA5CFWp",
  "key26": "5fXMBGNifgdPNr8LJNcwHqseLiVaHEpWV2RJfEaA9hbH6NNu57fQ8cMW1G4VQYvUZWXyj46ERB9pDmWUzXJDXNh5",
  "key27": "4DbNmqKrRJq4AGtCXzvBxESowyWLXBxUnw5fkDV2bRrFNYC1cq9pCi285vGMkjvhE4q2FNL9HYPbYTwrKpLeR6CU",
  "key28": "4nM9AC3jre3jiYsRVp2TH6cbxpiZvjwg8QRmNQXaLgnr3VrRnjnnm3zZ6XxcsWm7jwCcshHRfqadnTFkLXAvz1Rb",
  "key29": "4HsavMSzdWYdqNWjmPhk9KubSBViWn5oZETAki4J9qUc6sfNrpNDQePLn6hRh4rCN2bRuH7tt2yAcTnZMpLdQWLZ",
  "key30": "hGnadtaY9DkfsWQpBofPubG74sAed645bX6ESkUKbHrsg7TEMwNqPgrPGkbjK9e82VEek61eV5xqCNhAbddTva7",
  "key31": "3Qz7FBYqkqHEQtgGtNpwqi8eR6DHYgia26PnLmZMrWjDZz4HXqYn3cMjsot4HfTcspo4G2g2WTHaswFqn1CXUg3G",
  "key32": "2KZ11eMZ438uLFnPuv1RtJ2b3tFTLqyUVdnjkqQEnxjAb64qSDkLVMTT8En9wwDmKGWJCu9rvZQcPgm7A8YzxUMs",
  "key33": "5sMrqbTneARC9sujh24nVb9w9R1BsNEqGyx7AkeCxENE2TenL2KkqtVKdcbaVc2ck7iM1mgmHG3rtwdjhhpfSyoA",
  "key34": "2moicsfrPxHXHTCsJc5DFTYY1aokvMjiojRBVov1JDvFm95qhbxfgLZmjZHtDjZYBMpAQfyci6v1veGAGaaeDJJ"
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
