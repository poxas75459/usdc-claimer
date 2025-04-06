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
    "UDQsDiphUPMwvBJnKh1XooUBik9xQnf4hVKupoixzzNm76cKAqJ3kjavfPeKSHb9fU5fP54dtVy63Q3eLxxhAj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kHHrWkv9yfc4gLfApwSAEMHDsq7cHQsjr3ZcnXb9yJC1Xh3o9wf3YYRCQtUYvAdduM3QPKk36uwRtE8FVyso5Y9",
  "key1": "48J9Ksrs7QJtdvMCNhq7qCzzCK7pomA5KM8VVqMd9XUsnWvUpicpfMN4oapvotFcV2dHk4Nt8SdgAVJc5tht7ton",
  "key2": "4b1oZuyjdJyQC2MKyUEzWBJ7HRjtswvaySszGTehhi12r3auRpTSvNZBkCkuin86exNUCfPBiSgkhtSsmkoqd684",
  "key3": "AqrBZKDBkGB2uzFKmeXH9y9AMJvFJdapPhmVDbJWfSUk8NS5EsUUTqtt5hX9D59pUtizeVCW8HzjmquUnvAVAs2",
  "key4": "5sG2cuNvtso5M8yBu1HmFhp7mwQALao5AuyiqRR4qmEnb59DXJKdwfTJ51C2gt87qP9LjnsjRWyhvojSJ24CPVn9",
  "key5": "22i9QbKaUj3P5MepDbYTbb5PQZKM7GV4yLF76yUBsx3VsyAiMir37dNBJwsAGxQkrVCowBDwixiUqSEZfh82jWsQ",
  "key6": "4JgUNRsLu4m98xGVzi6EiRckMAyEJn9aRdEYTiSi4FtnGngV8JHkvoJysrxrdqDcQY94e9R4ZTWFcx2UEi4eU4ja",
  "key7": "4mEDnzejFjvSG3BGofBU1ja83cm5Z19aBNf6eGjr1FhyM58NmDB7gu6h6uW1wL84wGd4dqcSuuTUdHdWbxEs4nu7",
  "key8": "4r36DJQttNi7d7atvWjQDSKCZBKumRTxN8w9Nr9F4Uq3EcF9k43zbZbo1tAuQTmYPPdDhik79KpS2rWFq7jgyiTd",
  "key9": "5uaGQJekCiE9kpY6PmCZgvVmb17eSXu4fxM1t7ziXxYPzEZKVWm3pTcVi9byzTcxshj2bhrYMPEawXTxm68PBqmP",
  "key10": "29QsBxMCxkesuUS7jf7UTV5zWHomPRwKGFMCbHTQnzNdhGtJi1YjmYXvHFuJezbbUVMiXaYPdd9WoSoGgBw4BDRa",
  "key11": "3YhyCps3Kmx9DnK1Cag5o2GmxcX5R4oVK85Cd4CJwNdnXUYaJjvFF1j1cDaM3D61D41pSaQk3ozMFi2zJJzYmJ2Y",
  "key12": "4qKsXxnkXkFPTuarMKbqmbE45BaUzCo2xqq3g9ShWHBoE9pBA37SEzQY6YiFXawrbTY5RxKJf4vLhfaypmdUkibh",
  "key13": "Svc8Za8A4C826u8VFYU62Je5jQZHVegGGXM2htN7kyzmgbqFn2yUbzUYPsJwkJPoFVnDuEq2T3DHr5TEB12gikE",
  "key14": "yk7rfhuydZNZdqC2vygMMPHPssTXpqMiLJEg3xjjqWoBRwxxKXZ6JsW8DBCU35fxJiMkJuqcAuxueCS4rE4CKBS",
  "key15": "3Q9K3HqWPmWtJJ1c6piEGE5BKSzhFd14a8nzNHEtxdfR5eCKXPBJ71hbRLKhDaJdXhp1wqrE7uu7k43p49b9cMF6",
  "key16": "2sDHV5NbMxg9ZAX4U8zXnwwxiPNEsJdKZvedz7cHuCQfsJGVtgiGCckSiKuGJKRmUQP7pBvMQ4qHZneFNHwGzuCf",
  "key17": "cQitpQQnGDNPqUpAurEae6W9knVtSicJX7Es8qSiHMmL8bodXf3QS4EAMNziZYowzGnuzPSVedfuAHMBAvW9vi2",
  "key18": "3NcCtgaqaqb3KxAPxYSZtjCykZheZgJJcZhmATjeZR1BfTaNhqbyL2soeN8kwRH7Q77X73rrDkKAP7w7w4ze2sst",
  "key19": "2obXPHy184yfMvN5io8Nf5QiLH2w6P788ng1j4k5VfNeEX9MhwEZu3kArvo7b4aKXBFjmR2GUJFNRzenYknczA7D",
  "key20": "4ZkD579Gqn7tYCea72hoLLqFKAmrRAhMMesDWEp5KxLj4szT3JSnQfFYfMt1o728FGk6dDeecrWnqVJ8Xj83z3Sq",
  "key21": "5yohE4Rz89NcQFaMW3fkrsDGDNXqXpMPDvYBPvJEWkf41LjGYDsKT49RkQ8sR6HePUakFPQHzKy1MSne6cYpFkTj",
  "key22": "66aWf9t2qoYf287PexB18gMQom57AdDBiEPJvaZagA88iepKo5RbzjeiAotrzTbxgk6fYaNXiDnFFzSA837YdPa",
  "key23": "4jVrCG4YnRBSsuep99TKrGHkjdBLBxzpAMtPCQkSWhWkZ5JQEhDL6nEEpHsHgYw5AVaAUDaxwA53pWThgWMeMUYC",
  "key24": "5wvKwkexitHg8v23tEm7i3bziCShY37HZqRdpuXmi1aXujUmk8AS9rwTBKS5Yo1EVZ8g9joc1pNUxLDt4wCTZREr",
  "key25": "5Ua1mLDUmwjjTFmKJ4L4ELq2Wc1dQidqnYZbif6ZDsZBTJ1TGUSPa3z8E2gZvCCmJWs5QzGxDwyEFWRihEzRZ87g",
  "key26": "5eeJwHwwipEzczMYcCaHXKUwUPka1tJttyHw9t6QY1EyxBgk9NzTmxQ6Sz4vmPfULw3FcArBoEomzYzzLHPj3QgB",
  "key27": "nmY3N4mWdWVvgJRaFvEyVhDKyuxmr2UC5NTfaayRKQcNi7CSxuKrXdHjddzEegvDs1cKSzXZY7YGydaCDRyNXT4",
  "key28": "5ku5xgzqiWbMFDv1DHZBzzYXEtY2PJSSrHfxDwdtVuT58EqDYWRrZcKQ48njfzUdzcXS46mmtQ5buBekSQSMhqpi"
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
