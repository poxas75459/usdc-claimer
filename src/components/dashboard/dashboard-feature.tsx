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
    "4fstAxp8PvMdei7QX1MCddtYRkw4jC9RXEYf4r4pYPq7jKwszYWeoumxAfrLEDFG8bXeDatjWjmAa5Ms5qEGS7kA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HkdHdbo8HxCFh5Ys4R8eDB6nBS3p3LXWoDtpgdXe5rpwA5CA5bhACC7DBp5JukQ6CmtnvDEhi7x8cdEye5NciPs",
  "key1": "2RESfePgo8TadSRSHpxYr3xApPD97x9kTou3aZyMscicwZQjJtEUAupjLR2kyJE68XFppe4zDMAq6DhrnmkHbZZr",
  "key2": "3VpPL35kCzwDJRSWc1oFf9V38r5aFxPUHxY6KrwVFGD3SFBLAG8LsiFVE89gwqUo61cRHZtPmkjvRhftRXz5MDeu",
  "key3": "2576xDui9VZUJMcbH483YsEYPndVZoKimR17mU1Toc5J5VPxGyxqx19mqd9yZ4HGNf4mvgYasuPE88yvAyWwTBdd",
  "key4": "21EcYyn2pikviWLoY7tfbKGB8QYvBDHLUCS5RvQVUygov9JvWBLFGtqwYRPkhNvwtdQ7ptkKad994QVuuHmxNqDa",
  "key5": "5jaQ3NgcwnutRLzMUmF8iuX74ETUrYZ2o7dHnPoHv2RCJDbfGZv4Y6WmpJWhxZSWVH6CeReG1vrkFXDnUHzNjp44",
  "key6": "2SoqVLd9WgdjSHoFMuGjMbTu2yamTrq9ZtgiCqDsj6TDfsjqUf1aPkjRcG2jrJUopjSLDPKT6T9PLTs4bw7cknQr",
  "key7": "2GrUaubTeaLRYxboxMFqHanMsUBBF546mRoreEhfjZyRTTv6gVBgbBzhrWunwXSXbtuHCLsS4XHpCpT2yr9NZuoU",
  "key8": "4HLc6UnsgUwBTYcauw2iUqQn2msGPcCfaZW528LC9kEf3gG31S5M8B855kQ2BNCe7m9nWmK569VTaEHab8qPMfC7",
  "key9": "3c8tAqZYBwWwVE2qpeU8G11uA473Z1X6nArDgoiHNuLt1BKZBBpMbbgX7G3hhmeQME7ACB6Vf6Ma2yvc7yppdCks",
  "key10": "5ELxY9bAC7oCCgFENcVHiaxyKsnAgc5Bs6jXBgR4wrF2i7ZycTmoqhoWPAKwAEAg4t1d5ntHjQ7a3VhUpCmbRYCh",
  "key11": "FjNLSdj87D9ozLoMSzedcdWrpogKDfFyzyScDzLvG346NG5LfvCbYSiQtCKEmQ1NZffnQq8YKS1KNa3FRDnifNt",
  "key12": "M2cjpXpVv1ZXBCqwrxeEQe9YquBncQhFx1cEqb3HqmaAa4FjafqwiEp1jwZnF7kuQsj1LSq5HQzEJKeSK8swkrc",
  "key13": "XjekUgsmPqjMXYq5e2mZHxzEj7A4kjtE51csXufkY4FLS7v4CgMy82wGtPWZN2tGRbEMGHUA6pyg8DbX9D7k8qK",
  "key14": "55U8cThyCVBP8T5WTLo55jDm3i9nHnxFaY7PBFvLkyEXghgHmryp1KQyueaBrWEFQ5an878Z1xxsfj8YsfZEfriG",
  "key15": "5EiEmxr1Fw5S5ifhXxv8CBVKw4s53xzRASE43ccNnXkLbF3WZnZNLpqAS2nFDqSuWEwKvcuEQUCL25oC6e91f4nZ",
  "key16": "42Ea5ZKJ3oEUv3WE4MKyT2MMHf6KRWiJApJo7PjaXej6ZGYmJak8UKKkZJCcpRzVf5sCsb3t4r65Wb79WNKjc4A",
  "key17": "3pE2mvDUuL1kQQdEyYpBdfirDtpQKdRXa9ow88uiBCbpAKvF4ooXRvev4dbcYuNnE3yDQo75k6XZ5Gjd3wLWrmtE",
  "key18": "2BLMVPhLn4r7XGAzJmSBQZFwmFipYDkS1ypXXjtg43C45jXbXZGM2Dh3oJny2xNRH6HbWHmgh8ZA9hbtaSHBzAXi",
  "key19": "qPdb7MgNn2YVqHznfZ81Q6fgpjr34KeRufvAJ2f3S23Tvj9WJqSDfifARw7ELMBY8TjhSy9oba3YZPX1NbYcdrY",
  "key20": "2ouew6CxtYLMfbvfeXjKFUbTarczwWZAfZzFeR6FuXxdH6p9CF8mUtdnL4wcc4FM1SqejM3Dk5p2bA8pPTc4gKgb",
  "key21": "33CjhwKKLxLW2dujVL7srxgCiv45DKzzLBDKcPg1uuQzMjVbBSA2R5Pm42To1muMvVP18xgT4xQuTW1navkkRSaq",
  "key22": "2aJo2RbF24iYAqGthojfZsXpiwm8c1jJY7BZAe9vddkrpjAhNLC1Xiyrw51EMn7WAbDNExLkoBYG2g11gkE7EbYB",
  "key23": "3QQ5SJUXgutoS5KgYjr3HjmMfAmdiCNB26qXhEmbtNQYce8QGgptqj2ubQBztAG3McU3wd1oSPEv9MaR5ojQ9Vu2",
  "key24": "35XxZa9utsvSCWaVFBUiMGUK34qu2PNQNFFwUKSykEJHTSro7icjJJhidMUVx15oJ31nFUccyhgkg71LCxkA6DNv"
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
