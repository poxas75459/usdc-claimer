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
    "w7FEn4MVQFZWufBub2dAy2nDxy3wkhjzEc4iWGa9jnKHCZ5YhQVpPSCwxBLgMj8m67HhdKFzB6tUDwESy8SU2gB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m85q8XsbhM4oi9358DnRhvDRW3F2vVqPbFCHH2g5B4ZsQmW329nVVsRigTiJNehigkNhrxQBQ1cCoZvYySomune",
  "key1": "3fmQ2o8i27TWALqWSyDzWT1iK2sbJzBmH7eyb5id3tyw5gtSpWqLrHsECLSozjbvZwYVhLBvuBsMPWRotEjtMgaL",
  "key2": "2HTHGHktBSZWYzJpQMRDK4gXFMRpmVmb8jKVNAAgJqwWbo4LXaYimDXEYKixubeBbt61K21DeRqHSsVBgtoqG95C",
  "key3": "4rx9E7ksBkhPj15zHGkeyPKmSPdWV4T1iekH4qctAMjJTTNZ5c7qFi9GmiUMR81sAWvDWudps6aMTjkicX3vYjLC",
  "key4": "EXyU8RFiH5wtjBJEHANYtzbynFSjNnkhg3JZjLUhzdSJZ5YRyxquGwuGzrUzei1oLKBhAW8dRcMGYJHyauUaWEr",
  "key5": "3XFCXScu3jMzwPCrrQW6vyTQrBphaHfsnQpuQWybkb1jqE9mMjxmyLGFBLyRF5J7f7pPt74hyCsN827srJ6DmSGh",
  "key6": "Xu68qBtD1sfZWLuyvbjETn7YGbkAFT6ozmBTk4ndHUBMBmC7kbA95mvK7fKYvNXpGry6gZZTwH2a4Kbys3WkhjC",
  "key7": "MG9G9TWpxqyPMVLB6D5LTjHBg2xX87PBJYiAiAva51rtSBT8EYMtbfkmwnEoLWV9KsV5ngUY23mmvuq9cXDSZqq",
  "key8": "3f5zd7V8CfCRDaSNrXu7VZ8YgbwLtqGjJBkTsWBoqSTF6t6X91YRDnaEVFKCzasYNzBME31zNdFdHjHETQWYPRGR",
  "key9": "DU885v8FHo1ixzL7679kA68SJ2Vv4hiaQMc6wHbS31gKEjRmQ25VtwQ7MwDWvStdLfouLwaKdTcGS1283bMq13q",
  "key10": "dm3r39WPGjb9FhS6mqE3kfhRneJL9troD284a3krTAbwNn4opXpGqBT1K8WYSoRMHoDe54MkFTZbWsMs6Yw7VS5",
  "key11": "281DRkhnEEasdk535XhJEyuxgqtykPYgzKV19akrwZ9ZoN1HYb2s3L9hBMLT4d1BbMC4kYh1Q6r1MUQaCjLcCb7z",
  "key12": "ZwFUnDHNEEq3QiLpeUUN1ocTrcBKwhWLkGc7uGoDTTQ4anzou6u12b5NFT511ZJXNAKenRHoGSHfg5g6Aa2hCJo",
  "key13": "3SqcWHtzkQwzCr8NoJfHDRLAfAqdt3MYbvAhZ9W3fJz4GT3H8efDW4f6EiTusexaeHBiza6gNLPWMgGSiDJtPeF3",
  "key14": "34HMJdQjKgnzrzFf8XXpsSdqv8aFGPJNA3P8qxdEetomf85iqH32wU2Hm2zGWh3g9brAuZstg7beLUxU5dJFw47Y",
  "key15": "4CHmNZxV25makMPUv7igcQGAmAotX2LqshAEpDd76Vr1HMMByU4Sqo4rkqZ1HS9Q2C51eu5SgKUR5Crvb1JZP1D4",
  "key16": "4oZhjBSmEQk9EfdJNwDnBxC5DkZGT3kvvKk2et7HvX6gAyZ2n7ChUb6GGwHsaQCw2VLknBb9JBjkreECHWNDXEt1",
  "key17": "5RJ51jjbXrYQXcQdeKryoQcoani9i8kedHHxkPT51HLkQ1JwTxMTbWhZJ5XQqnDDCarxQ7w9odXEeek23bCDUsH4",
  "key18": "LdR6cfu9ZSv6YwNbEGxpvUeiPWmo7QDPSd6FkXaPY1e7azPXn99xD6nVJUhspRTnm1m6mK2AZwR718yFbHfGg8F",
  "key19": "62RwKu9bxXXaGwLhg8AC5T4uALmkKJL1Db91d4JT2GLcHATLjJLb99bg5weSPQhrP25ejUvWp3fKUrvaahzFTksF",
  "key20": "3Shjr7LfyquDdWgUWgrPZJoLs48JcrsXybpS8JKT7ydojdBvytr9az3Pbw5HD3Xs7tvNpdiiwQ8bKbohqNj8b12K",
  "key21": "3RW6Wq4hutNkWtPiRtwa5abuP4omEW3mLzDsmbMDu174grn7NZBQNrCJ8KfY2m5tJwCgmaHiMpzgSzMVNvSLt5Nv",
  "key22": "2bbFaQmdo635uuTxbZwV3LHWquavtZyk7j5y1HSBYx4bStdKenZ9tC6kDqkCNpDWdeAXqx5hTydooGxaHFvk3a8u",
  "key23": "4rUr78P6gSTmTNTR6ATTnm8CnYtrGphnisCsqF7JaKmrirj22EosUbSTY5LkphcMJYE6xtBXdaN8e8NAjPszucb7",
  "key24": "4nnwUqYHRNSFu9SpxdTiMeu6wBwvNwrseJN5dYKeG1HujbLjWMFK7PvYhjp32svGjuTh2MshgmruHqj2R3VFp5PV",
  "key25": "w2yvkVwhM6Kuxp6EH15hCp2KY5DGM3n4UjHXEs6TjR75FJPtpV7qoB9mGFX94xMezSFEsT8rucQ4GjMdCLPi3Uo",
  "key26": "5fNgtB26CXtePJYySFYXTu4U4ddyhDz9uHQX5EhV1E3xSR4DP4GgAnc8TKuTskDEMTX83Mm7Pyw86AR3v1skr9b8",
  "key27": "5r6VMiv6bg46ZJnoBAr4mnXHuC9mwkD2jjpAt5pTEN199rePhAeKSRKheEcJ1ERPvqXTyRjGunXZTwD7Nr7fLgBx",
  "key28": "2cTU6Q1b7jMZg8QaWNgAAkLkQnHML6G1GAQiSZwAPpR4B62dw2jgCJbng5EHB7DAgXjhxRdo6bihmkNVhrNYciUH",
  "key29": "4Ha95NrFeNKxe4DxwBfD4jWEAdVHm4VTWASnYDEYkaiyYSZNptpb6YSfVjC1UMnvynHGeYbqWdNaj64Wnp3JRf6R",
  "key30": "4KumTvfRwNfrivZTU5M4nWyerkEYvTHjTMehnXkdL3UFFeEtSBfJtKqaGQQzLnBXm6dWUfvKbvFpzNpXVC37vTxR",
  "key31": "5aLXAK4A2kVFpgv8z17SomYWc1mJRfdeK7sFxvSWJGSp7RzNbitG364ssFWmxwYwiuPjqHcjMH9xNxhQhYSNTqRk",
  "key32": "5PgC18LZ4ztjWh8FTvE4hMjKb7SbN9uizkBLMBWQbriueoMdRR95TfRsoJ4uQ5iiAXcnaHB2Azhi7QiEBfRDFG2T",
  "key33": "29VgJy1r3JShz3gUQRZQJDnBAkBebURPkg8vvN5wYckw6dLFf6GJB5QwBHSwjvejuBs9Mj9QtmcQfZ5w2PxoW7uC"
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
