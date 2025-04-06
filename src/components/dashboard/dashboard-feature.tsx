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
    "25ZQuTKWmfpCAUMPja7iZUdVj3tuhiNoGrrYeFVhotnz3v4fpW9PWLKdGy38FfFHk31DjLeq8D1vmgMEa2C3fZ7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SsqHEXEQT7EqnTSyr34RChDuA3wyNdGVnGUAqPoemETLzaAFT9HAbHo57riv6mDgca2LtVQfo6hK6LGNNYwKTxr",
  "key1": "3pG3oYtSemnXBcyNgc5UoEQ1xfuKAnTKzq75NjZtLdk1Fs5S38VytbFjX8M1iEX3ForJKBYUVurvAf28hvLvfqP8",
  "key2": "4TXEYJa3hspQECbopQhkcfn2wKmkn6KXWVvzwVj6ugz1K7fxWVERbouCuuZwH4714GqDu3KdQXAXtdVBhLToq5jN",
  "key3": "3Sajxgq84E4dz81Yn1EgwVfvnLBEYUaPCsaWUjCa2CWVQ8MRvgbPipTKU4M8h7bCrPHNsA4TfagfohLUa9i1NpJY",
  "key4": "3MSyxSZ76xUNq6CKUVSy2A9SjGk8zH7kqyDKrN6nMmx8bekFQeByfVqsiAK9rDzWqDQKZiJxcDZLSeS188qe6XtH",
  "key5": "1UVK9WhiicEAhroFNW1mZR7QKd1tvo3F9GwxGUSMUpkdt3ntWB6Wvi5yFEtiiHCihakk8RGJRjHZAMsLM7tD4ni",
  "key6": "4ogLzMBgVT9NK7db2CCCBjpHFh5kMkXvBz4bbhvynK5f2TZweWLZa9SSMh3hhjigng9K57yijx9FXgBNXJgeygn1",
  "key7": "66Sagi7v7GLpcFaQsRh4NEd38iMhshcd5ZZiUjzr3Eph4ohChnET9HSGuA8fy5UAM4L8sn4SkA4ipq5XG91ZW7ur",
  "key8": "2EdrUfb5GuVrDUCEtC4yA2ZwiWzqcyepXbN5V54JAkrqugqFqk34DhRsbrS8xFaUdcvqpPX7BNNe3Sp3VxQZxCHH",
  "key9": "3LpFTUyJ21sZhQMgvbsnuTQ63SaKRsBmnvm1qKsJY5oFSm31KsskrQ1QVpo5DXttrFJYKqJCBzF4GjjAjJQsPMhP",
  "key10": "2NY1aSvPW3iMCe7ePhX4qibicfCUAH67KkDvKhPqyyMH2VLZcwo74RvxKoDxGaFh2j7Qz5D9E6xskaywdEKhkpyn",
  "key11": "3b2CVYKHMEmKgMVXbLYtRPwnpMRdpFCN13N8tuhN2888LtTQtVHHTDiWRyiBBrDk7YLTeKwCm4TdiQz7A4PXQpM6",
  "key12": "5MiTK7JYsEEj4ayyKHMStBzEHfLF7GLNqADQKPzaAMW7wkJAdg1bfTi5TZxX1NgwHXxgnAgoFeGugCT4EbJUARtX",
  "key13": "2nTziQFYABKBf4gWFZZ5YLCM6k2L5cuJJTe4RP2RKUG6X86uYQXcXSf1wLwnsKa9hynmdgenU16zpiGSRLRuWnVC",
  "key14": "2ohXLH3xpNURQXs1hFP9P5xmB1SFZ2m3CTt8EiRypzsNb5LxF8poJVqYy5y9mgrtySBWQBRKDSybsQ78daHjxrae",
  "key15": "3mb8EmiJursj2eQLc2cqaVbpL8j1NM9744643TRrQu6XXX3rBxGwDK11CyPYr4wkwvpVdzRXjyM3Wbm5uXC7cJhs",
  "key16": "4FTp1hDRj1PhZoXhF2RhwrsfWvms8TC4ujaMvr9CT2yyYcjML8GpdEv1ETXY5gkGgdNRs2RcZvnz4Bs5jk2bWyhA",
  "key17": "54yZzF8ktrgGRrniDqBjWu1Y5hmApp4mQUV5rsuHRXSmFZKfacDCJewgPak47YLsnXh5Tp9Vaz8kPeAJprsFzVA6",
  "key18": "54wATw15uGHcf9zbrmguqU9Wm2PZxaz62hYecmpfTWHtNLjT9kFyNHqbT3hzjsi24S714wARqxnRmQUFSk39wH7u",
  "key19": "MfyT5f9rMrfTNoUUX6kquth7Upx7Q62oC1N3Bn19wu8UM54YNdbqqGzAB7kjV7zvmxb2arvVZX6iQWdA7YfQ2SP",
  "key20": "5zPEtNyTbttCBHPcCaSTpuV1qXnADWwj6SrfYEh1fneVQRqerHjWEhZEREq3Ry9eH8xWUjQtic2bF1a7jMzkZaqB",
  "key21": "2z43HPTXGrrx7tEivVt9mhr6RQ3u4WQiPfAGXsBy8EchM4MwFYqRSSyA44ov29JqYnfKS3HZLMkV1ZT4nFzqViYS",
  "key22": "515PgZvFL1VkhBWFZMViXnP1hJVT6VBgKtRxUV9KivzgezLuryHeUsBb8JKz9ExuHNV5uqxuaNNBXC4nDBdiuqay",
  "key23": "2dXSfQqprqnUvRRWwLBup4DYqGLunstYyKEugUQ9r2g11hc9FeTU8scWtjH3EBQVcuAe39RxPFtFUKYVFmV22Zbp",
  "key24": "5RhhdEEMSUrE8uYqzxSkRA619cgfKot9Xr3h87XDrR3uJBqTHwPoiMgrPCBX9g9zGvgGMpvBsqV6prM6Rxm7jkgs",
  "key25": "5WjdPUjigDVnewfephZmKqhQyAKxBbxMibToYEJG8UfgsGtZqMaEQjA5LRH36pePdRPwT6NPQDY7K9LhsnzLSYEW",
  "key26": "3mPm8Dy7Gv3Ztpzyg4zrgvYBc1XCrrXadTYjf1bHTHykRPxiQcZUED1GwpJEzDpVns3bzqki2Eephtnxpv7Re6Kp",
  "key27": "4CztRUeozrVBjhcpNZFfyCz61ia19a8yurm2uZQiGXGa4CgpUdRzjfsQ1T76kjPaCsWvNvtLU1EzhusJkqsn5mCk",
  "key28": "4a7fWL43Be83VnfhcqkR9YycxPEd1LKwBkyvdordgnzaNQtyVoprKpAQ3W3a1gsrs1zaTgWQEDxHhmdhkc98JnwJ",
  "key29": "3KjtGRMJsSTzefoPnndHnA3Uiz4E1FNwL2KjyZRJHfaRitm2UM9zyzGmmfAXKmdEdxjhgKHnfo9AEQNsa9cYmjUp",
  "key30": "3cGUTwamfrNfatxQrnmHo5rQUruk7XCWMMEQp6BpntkoVTkMUCf1PQJzXBqujGdqnj6MysuC597iLCKxUQato8Gv",
  "key31": "2PiY8s6ANmbizRvbfYqFtdoiMS1UBAKzM2BL3NP3m6WCxzR2GHAofP1cNrMuchkerAhaUjv7keymTxEM7vARRV3m",
  "key32": "3YCrjnqVZdJUViMwdvfKrE29W4HCW3zgrCUWdrb4fDwwrN4Anma5T1TMqFfgH54gWgyg47uGZXrqtjBTwh42Kr2K",
  "key33": "2nv8UcLyzY23fcMbPPLDWr3HrpME75E8Q5P48Svq3NkfTkhd1HPeLBXmjdCzWpQYqhirCsU4bfjfmvQZDx89Wf6Y",
  "key34": "iCcmtXqH2yf3g9MHMmNTKTUt4PFjdef3bKCZwzkQFSy9xpZgj5n4sysxbua38VvhJiV2uWwi6GFnore56etgh2h",
  "key35": "4gpSWitnbFibMwhshZBBTcozphRhmRtNZAsjE4oqDmKZupjuy5wxjP8G6BofEVzGKiPPKrq91VGSL2HjSTpPF8YB",
  "key36": "2CW9yNTD5xTrcY2JDAMbhq4ywykMK3rn2T4SDzVhkmzi4mWJvWnVDKt1uKtbpFMzRZJGeT4a9TcaYJFCZVQF1sYk"
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
