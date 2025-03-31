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
    "2oJcH8PCLezsmfMYX3o9ziHze8oN2be8dNWHmyp1KbgYGQTLa9hFp2VUtrHHpoDp4KaksQC9gSH1JEemq8Nvcy8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EVy9fG3eeTERbb6VVSnrE8ZKdC8vyFM6mxuPxrLTurd8nxuNjY3Qxu7XYF637eXes5LA8BQL2SUdi6mkPqjaH5P",
  "key1": "E8pFPvLC7S16ZBCueDPkgspywgSLkeY2DiFcDfkXuffg2HY1AZ7nz7JAeQC68JEdBvDYqzbtfF4tZLX2vHL3dGM",
  "key2": "2hTabjvXvPMxQAkhQar72xSDsvSiUzFBnfzeheyAE5YTBBMKZNogrWF6ymDZLdAGrUCpH8nLQuFywgH48RYGczB5",
  "key3": "uFuXCCnfCTBLMxZVbuhtE8FhaxReCd336atQoo1tjSd3RzcuZBrgoKR3gonUurHt3QCw3FdvsEhQQj2T6aQhHzu",
  "key4": "4s7o8QCpF4sYVNMhw7jk1LzF5WnAx3mdDxKgayGci7gcyzgt2Le66NoYJXsW5QW9FKifoW3rhUJoB578V6RrPHAv",
  "key5": "3wVxFrEHGVNkAKCDCoLJb129hcEryFCEcWjoRpXRJkHfnNX2Ka1ohQsVbMrBzR8LDjiMP4ov2SV7Qhg6Pqgd5ZH1",
  "key6": "5th5kDSoan57Lak26bzxkc4y9HBkGkp1o7dpfnEGyPcU6NHnNfZ41GqwFaqTW132mexbpDhx8LLD4GZdZoJCiTMD",
  "key7": "3henp6T7r3BeYnPwaWjtuYBkDXjPKzKfMWG2QZprtCSgvBbZavUP9aVhF4Q1vMz7wJ182JYnWVwcCDYd778cvR7S",
  "key8": "4ACBnEeMUi9fTf62yAJsJAiYeZkdabdPiErAkjXZyrzkk18tcrtvWkDzgnLPS7Wgp8BSScJMWqTZXQrLPBLMi93G",
  "key9": "4ksLseTovg5WrSwn5zYYfGYaG3BxrCZvvMr6rmMgwNk9aX6EAavogFwb1GSDK6wQERGj7PS4kRFbCnMQp167fKc1",
  "key10": "42tUpHuVceNwpYS9YsWPyk3ig3sbwbx442CFTexye5FMv85DByzkceHWc5CgDe7VyGP42mxa6bnehJ22Kd9R9c5w",
  "key11": "3DPu8hDibmuXAR43VFfRHRNf95zcxF5H87YLK1Unepb81HVUy9AGYqHYGL4QGFrNNRmYyVhea8xKSRerY6fT6CuH",
  "key12": "3QpTJbdJikwEXFYg6TZQUvuizgJXWZLfJvbM4QwSwWy8iTGmJ6RM16LrD3tk7LxCiRh81816cC1yCTMKfTu2t6n2",
  "key13": "3mTDXiH2fBG7w6hTdb6YsTe1YwcCo3vWGUmgN83tmncB7TpdTQ5YHHF9kYzFGhAhsiJDFpnTySyAn7swF1XsRw5R",
  "key14": "4YmKFc7fzCm1BKwGYYpbCGX9fJxSGWQu338WCrqfZE2fSppxQ6k3EPM9LQdXAAjC1Gh4ASGxaSA9GRzWGq1JhTYk",
  "key15": "55yJq3t8sTa8xzLLDmv2e5Qdcj77Hk3NzXufo4ZZNHi5dAMJCNbxnEK96UaAfL9f8nNP3JdYMzamXs4xVbfAhJNF",
  "key16": "4jmKptFjsnk9y9VwX1D5FzsujLxFzBR1FTUCjhFuTRNJ7rj6pCPmTBcUMAoPVA6p1KHz8ZvgvDtd1unCATUC3EfF",
  "key17": "9pAHCHcogvZosUUERs95hR2zFfdTkcoA7h1tnrqa8vMcU39wNUZLkzRGx1hyqfW1x1mQwsTfZ9xf84zSPwr8gJM",
  "key18": "uZqXkQzqiM3As3duMv6LXwwNmiHKTf6VkR1FBjZHJZ5yR96EDf1uRWe8imBhiZK6WVVeQnpTPQ3BxTHwuWfAz7B",
  "key19": "35VFr1e2WMXR5AHPguhenFEtPcpgkpwNGUGZdKUCzzKcAvAmBF9oXGuQs2PeuYnYkmxgtVfPFvFvmz1WcEV9smS1",
  "key20": "w8R3Q8uRRpSj5n3SUmssTUsHnMySCFJef1r4BA5KTgWiRyCMcNVufJmaAHg4xD3mPKDVxrJqZdzABeV25PdANgj",
  "key21": "3CHFyJDnJK4nuKa4qucFsnSitkaZv9SnBhkznQoCp9v1hFgSGcGXsaVaUGSgTHagUXBTsyLmiRY4ckd3XeZHSaKb",
  "key22": "9xU1oH4RS5kEYPxYGayf8uu9ZK99wN28fP7e2o7fvtTfdyNF6J9bHHzTqEPD2xcAKBz2AYXYXuY1X6Sjr96vDH1",
  "key23": "4eDPsaHefHZVPVoswZyBioiJRSHCTL6pc1V278NRSZSDpSEM3WfgSZPpWBbQVENfpBrqrmZcjvb1txL4qUpw6Rkt",
  "key24": "3aLJQBfzVKBESn8JiQ5aESyzFyY2ybuLM5jgCSXimyw94fxT1nLrmkpuRbSuPTUGXLTgZzUYgtSjbXn5EW6LFL7i",
  "key25": "tXHjyLtjwhC2pWZPR2VGhZ24NthSfqy1JKffHzSBQRibD2kgaTUxy6poRhTAJZU4nYL47w2sYyxykMtghwjory5"
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
