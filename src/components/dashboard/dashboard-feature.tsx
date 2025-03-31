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
    "3XSYff99VgAUWwsdyojPofvixSh28mh33gLFE6MfMND7n16ZAQDifhequQkgyz9epxyVp9qtxwZ1B9rmx5X8zonT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kG8LiT4CBGYy5NJALVgH2KEL1RvHstNcYY9RvUR6vrWFovigAVMww3GHnJfmPi14SXwfE6TtvkaC5ZKQJbW3yyb",
  "key1": "5Z9Ka4pwwG38jhtC2qwyLi9XWM6keV5gfdBRCrEd1nxqqhCtmkni2L6PfhUEuAN4dUo4XRc25juMCGoyPnAk5Zpp",
  "key2": "n4AJXS65nLDBs1Tfahuvjv2nCgJcsneudFrG7zBgieue32rsw9PsMfMNtN94F1TdM5mswjw8KmocHMEjtSgPcQf",
  "key3": "3AeMGCWR89NsyPtPecvogzrrRuSY8h36V3QtHkZ94JNMQ2EYnpwMQZi2anCqaP49PW7GiTjEMkRTTUyeP3qfvnnZ",
  "key4": "2UsVw4qNv8VKRyVXmmyV9xXiSdeMw4Hm7y2ZifqGpvrmWDkMqrvdn7NCgskfqkCPbnBs1CiZUeSLNFaumxCzLsvg",
  "key5": "3b1L7sgjphHA5sGj5NuEpasGfJCWYR7j9v9bQrzd5KjXcAnRCR75i4WyGrcYQLB4dfVT2BDcsGkjCg2unyZvgGc2",
  "key6": "3TMFVuB7sJ1mq5okKnQWQNVf5CdnMCjJrEmD93Nmgp88Z2BAogcmbgz29VMEWbYpDEoLSQm2GKykT1YpmCWnhQXm",
  "key7": "4DaXzLETuCTUSf7uFf1ng6dDy1TFwcN8kXZyYW4nXUhW2WUudssBUp8gGV5pTaiQEJWes5sfB2FLiEY9hPbpJbmo",
  "key8": "2K47V85TKY9P2fsWZ4mKxtknaoZyYDacoTgRaVWMJTvdF4r64iCeutYW2dhHYn2ZbNp3AE6KwQN74mBsfQBz3VZQ",
  "key9": "4pAgKg645xqxBx7C9p4PeGpasGEqiGbwdKYgVNFWbn9PBWUfiMCAZMi9sGJGjfqQ1McEDjVQUWC5XvmGbeNu3YaM",
  "key10": "2nFmHDzXQRoxQ5ApyJorKAPe9gFmtWXZPZ2F1VFndj2PRqTyjcU2Jt6gbGvUSESrVyhjzTiVZNjyjsiW1V1Ay6eP",
  "key11": "4DR6n8SUxoAmRauBFSj4KR2zZ9FZS1kGCfEWxkxH9nSWa6mWx4ev3PXer3oXheTAGNgwXp2GnJmZwpfS3vVrf4qx",
  "key12": "2YzUm73Hkip5Npn9ez11xwwhfSszAtxySmfhbpcucC5b2tq1Ad7ksE1EUUJVnhgMKRygM9ZCnLHoJ8JyvX2ezxfq",
  "key13": "5D8EFrGTZ4X4jSjXajD7PM794T4ng7yuWbJYPQQnqS6bJP1vY4UuXsNbPJ78HCXmZumEeJHaYBmEayKyc6sPyV8D",
  "key14": "5guGi2qnQcAwnWYPDMcChQzpQ4U5wLx9ezQx6V8YaCBhrBMbmQ5mYe5Ax9zRdP5fEwK3LXb3HomxJizd4UobbFUp",
  "key15": "2PHtn2sfgVDZD2hLRJDZaabrrXRYWGDmxiF7mU17Sbdw1Z8grbPwSvfyhFi9LTPeYZ3Sf6Vd4ZWyTD2kQvQpH5VH",
  "key16": "2f4nJ2zL87eeSN8Fcr9sJk68Xdi4kvj6YN9A2443MZiPWzbM7mEwb4L5uChQ5JzznSZiFE8zFsBVSZhM8549XG2",
  "key17": "L29n64QUF4ZQHXDMzHjEXcQjf6aGZ5DiuTbeCxWbqr1WoJfD7CxQS8L62F9QFo6zfYRdr19DmGQxhPNwPxvcBP1",
  "key18": "etQggoqHXXApM53CpMbDxJ5jpeJyJjn8uYaLY6w6bZqgVKvZ3PZLUe7tqhHPR3FhEFJCbjVDtySq1sj4ujmjgGM",
  "key19": "3AN7vjJqLAw9jW4UMg7pmkfhjgLpe4MgSFVSMWxgVKVj184zsUxc6vokjBQJkEvWNtuNpKoGASESU2sLF4Ednmo2",
  "key20": "3CjMZeLY5SkQtEfKg4KaQL5qw6oC6buiXH6jizEmsj9vJEquqLr34nS1pfZzcmubYPSDsGYwJDegzhPsnRbQccEW",
  "key21": "4t7eTyPADtcSNeSAArDdcqfvL91bLT18MmRsE3r8x2iqcAXXaVtGaQv5jrjgZpqykvugTzgZqox2SaU9fi1wuvjf",
  "key22": "3FijT1EwajavHCE6rvGpm28Usyw4vsoPArRz5cKKLxWb5rGPQAaq2U6Gu3DBhsfGM9kW4TBFZgQfczou1ZvLWHEh",
  "key23": "3o6SYoquBmP3AmA2QoD5wCfaUxwCxwiZWGfk3knbjRBJxDkPWqr13dnMwGKvxMGE3RNrZY4eGhG4FTdPZUQPonGc",
  "key24": "2pDvweqc6ooP2MJA6h7Wd95989cDkfELmDsJpq7JcA74Ei4LmodVkHVjwoPhanx5MznpjCa9KnuwCRF3qPWDDeo7",
  "key25": "5Mjg8RDF9a5nijNDG1vS1AciQEno26T595BhW21Sgivqv4wvwrQNDfmnfn9DZXQcJho45vUEQojpF5Wh5Y7fURFL",
  "key26": "5qkfG6MtH97DduVcgXsGgRJgATTrjCcCJ3YM2WQwFgvDJQVRNExH74GSDBQNE5aYEY5keFmj9J4WSrBcuCjo6Tt",
  "key27": "49Z8bqUCDmTP2rqqaqNeztYuziKPS4uZttoqQQhvjTL8YVDqoBxhNuwoshDPCEWCU6DQxbhFPwg3VL8ZsYh1bfaU",
  "key28": "2tURLmk9edJRCVcX1qt8B8fxkFpoKj5zwE2uzXtAJ5p3KL6HucD9MfK5EiaQKLnmFabdVc1wGsXWu41itUaNpD33",
  "key29": "48E6tMbvd4BGb2ZSP5gHkm1iPQ7Ep9Rq6kk9hyJJLXQtdfnv9fyKRvnMcS1moFhgo8gyukQtMfEh7vnDAVdSTW7o",
  "key30": "4HRdVErm5Hn67fCzokzQnJUDdsys8SgsqX6FTFrQmcw9iBjmLMxCjyWaA1qis5LmppXSwPVNHRij1MjxLpCBvHrp"
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
