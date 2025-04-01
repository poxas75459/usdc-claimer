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
    "BjEDSWGSSAyUSygHe8HZjXFigUsvMq574szukXkaMzdGdZ54jtAjzDZsk1P4PToDsJCnqdzcNmNmka1JFfkAYBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XNsmW5FWLBjJp3qh972pmpfDScvCTHTHyGy9AZCqJraP9HgJwkB5Ag2sawAQxJ8GhGtPe7j2vZkZiPZhahJ9Kmi",
  "key1": "4s7YGE77zFNMXfPKzLAfvf4xF5ok55T8YM45FwxQLYrUox7iMRupqLhbstCMo8ixaNNVbFWJAiNHdS4QwQdRGYGW",
  "key2": "2ZVNrRnJa7GbHz8y3TbmH9dLTQXWkxfktgGSzoY1BXkXUrHAwskXE1RecDgihpNeHJqkMSmPGbccAwzZJwFohyK",
  "key3": "4tUU2oEnywuFNrGmgM4LCDQwtXJT8Wo5peLBs3tWvpmpzUVamM5M2yUhBeaTcbjKZWNMxrLQYj4iXBmbhj7oFP6f",
  "key4": "ShNuiQXngzFQzawY4YxUpZTjZXrouwkX7QHLT4j5tCq4vGeMLuPEEhY4m62NQa3XtEbFzvjbGZgA8tDpxZ1Frj2",
  "key5": "pSY7YJN8x7vdg4Dya3W4zW2pKe28oBZU42BnGPZaqzVtHux4s9qavs1k4edaE1L4PmFwgtDT3B9KcKCoUQ2YUdw",
  "key6": "3idtRN7w1DwKjaBajGf8MD8tN7GRXPuotonyj9jftysk7TDgYwRk5HTNjKZygQxseC7LMrBn3JMaAody1hudd3Nj",
  "key7": "5DT6b2gFXwTwnyPoCdBKir3zuNy25zxTqdt1nzAfCdnR7XPNfAvPm2jeNcudtCKKT26LXBQ1132o8QwPJn7TFTR",
  "key8": "2GuHK8FQHEQtCcoFid4JtyYTWiUtb6PucZd6yqFFHMMEb58wGHajYfDgffr7XQrmjJvnZJxz1ZgN3ejm8U9Pn5kM",
  "key9": "2ud8qBZUtey2NNLTFN284QPcvNfHcfvQ2v5svpk3sVBBnEGmmpwGLWbQy1QfpQa86jhS5XVXmY5hCgmusp4bug8Y",
  "key10": "58SraD8hyDwGV3WvSwR1Tf8yrPUmrbPmEDkvMeuGkyq1vNRbKdFZtAALs6UUEQ8yQ7wy15Um5G7bGtpdrGDpgeu5",
  "key11": "25sU7CEKe34gU6WKngRbAR7LXAnZdG4XU1hVy7q6mK6STZKrRsExNnsiV13JCPSi47jbDAnJFS1qw8MeVabXuSkE",
  "key12": "4w9Qm644p3aTpenc1oRhV8jb6qsTstBLJAd24au8uCtV4MvzkL3EUtLyvX95ACvsBm5nJha2pruEszhFtwicuXUD",
  "key13": "5FhczgjagyMkxuXezg4gVdrX2NftmZCkZcYfAPu5UCvbHCfpXQgcRvMeRGeXgbpciQiMj56WEi2BWWHBL5YZL1zu",
  "key14": "4xix3sNF2KjJcCSaCs7Vab3SrYTL8qiqWDtTvsdbjKzKHayRkTF6eGU8xCozknx7MTx267GUUVqgi1o7QRgtottt",
  "key15": "2meqUG2X9fNRBeaFdH1f2AzS6CtuNftuFtWRgWpZoXx3VXMyypwsSC1VCUNuFKw4HZdF27TPbE2Fzb49QMwWXGRd",
  "key16": "LfynDfuXRgJZNpNjswB3kkGvqbAEYgzvewa6Lbwuu1XVEuc8sFtYtHH8SCG9GWrGukas71C1faTUzmiZyv838us",
  "key17": "3HxAhbjV9GbcYowYerMJME3Z6VpHVheyPi5ThCa3MuJSKQGJHhDPJiZ8YhbHJVXZgPiWetgjSqhEtSVhksWaeBHw",
  "key18": "51Ae8pyLDvVVZJW3ck7ucoaL9KxUpovcDGUwB18GMghW9CVo3rqpDjV6LgzeE6i6RdzmWzNFDU1Lm5Ngkv5nCDGs",
  "key19": "4J88dHGx4pZtghiKdTHPiTJsAmKYbXdzVdCugjexzuJdVVBtMMr7879iiYTQ3HeV4eJSzqoXp37iWDEYWwUwMR8J",
  "key20": "5E5D1XhUPVXbA4T5nXWt5K9oRrVr6zvv5x7XXdzoerB9MZxAMsxoDcYxsve7NHL5iNXLK4HAV6YpCd13KC5vbwDV",
  "key21": "42zvhgxZUVPoZuCyAG5gKYitECdFHDYSnBGj9fFFihRngy86dJUEmj5sFJkAj2HcTwLuwBt8V9X88Ux3jAHmHw4L",
  "key22": "5x8YCcCAWcNpqEjKgXZnB69Qbkd46fHAf3ybSWWzUcMaj2cESnuqmHaZEnQBhu2q3aJh3eyJRg1xdTZsbfGB1enr",
  "key23": "S1DguSyKZ35m3hNvhFhcYkcxqygRTwyERfKKHAtseKjz6pBpuxbaVEAUMpV4ooSZUA4vEKaKuTDtixWoBazgXKE",
  "key24": "5Rd3UhK2AbmzwCfAw59tW8PwtiDeBo6fAFDEETpNzmFJHAETyZRUSTpkscyrZoQ2Kj9Ki8ZjC27v4RbYX1C8K7Rz",
  "key25": "mu1w8EVnBEcadp2Wchgr9YR54Sq6aqANKaKowzeMtULQHatmZSxQmdj7Nr8s2hY1N38pRJSQirXatoZhYiBSgDT",
  "key26": "5WnqPJX4wadHCpCe5ttj931Hfu765BuoyFyzUiCixJBzE2dz2PyBsXD8oF6FnSikntfPQz4D6K8YRuRcGwmoVhcE"
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
