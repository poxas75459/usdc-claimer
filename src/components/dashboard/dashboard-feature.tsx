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
    "2ptYrFe95wk1KHLwXSUJiFap696F3UzMDrUQEYMBCLr9d64C3AmHAdH8V3xKJ1xHmxTc1kHAL1whUAzN9vPVECkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hvTpgPjymBmzuKrVywBmuguz5iibKZuo6eJRcPVSwd75HUCtFHpmw3JPC2ZSPDvwNbjDpDyXG4HTQzjMh2bEv56",
  "key1": "3WsMDRakwiyiKuTSR1T6LxTLMcYaChhhCe91Mukc6buhzFLARSDxNGPUKUz469apWMfjo8RZP688CP7WcNhcQnWo",
  "key2": "3RHvafzBAcjdudAVanZ6Nc3eziEzSqokjNZ6isLz6M6GqnrggRhh7iLHvGW3GgsXkUvmsGYmidjZdUhWPAEsG2KQ",
  "key3": "5PcTgxoqDz6FoaxnKyXqjZTj5hVDuihwpydTRF1CFZw1jp8Rf9QYQ6rk6drKjQBQbsfhbSb7yMHe8C9Kf4X6NdVx",
  "key4": "4daGGX4FW8tXJHS1PZ5L3mfgB53AdCaHP5fyeFAn1dR7R4DPS17W4UqoGi1onSrPyyrzSmrNmtaGF5RCkSKgGsMS",
  "key5": "4NHDNGJTpx9Vzf1ignJjS7fbCgR9YMbs9Ff87Wa4i9HmnrKSMqb3nGMgyPsaa1pUWjaoCxYAS6hKWPA67ZnJbC3g",
  "key6": "3f4berWDz3TBzgsY3rfRwSrQcnd5xiLAdiYSRcSbKyQ6V6bBnt7oYH6yxkZUB8CimgwcGFh6dAWeWATFSvCrowVh",
  "key7": "5FuzJwEotkNPkykxz93khj8iR4hUu5EAbbiXwiM7EAhtSvb5uk3NJvE98iak7iketDrwxDjvE6QEZjADvbcuvm5n",
  "key8": "7AiXmZCswV3Ws6eaC7SxWFT6Ya7q3QFhgnNXm3xTy1Sr5xvdA22rCLVjHNpfrX2pBQHimATZqdutV5H39XSWtdK",
  "key9": "3JCHKwKz8HrGy4oZoKTFSQiV6pioHiP51JGaZwWcwkipXKxDr5fDn9JBamBGvBKZkzrS51Ee88AemhGFea29iek6",
  "key10": "5PVYnoih3buKSaAWvnV5QWs8ipzcMBkBgxFTtBkPi4f2jiwV8JDKeE7sZfKmiDdexvfEiyXqUWfQZZayyuZTMkVy",
  "key11": "38JyTKpTAU8BMnyFoPqPEiz8wJk2Wi3KZD8mU2W1L44yNB6R6n9ptY83BwHEi96ZKDgzPMfbt1PQBvr8EFCiWZC9",
  "key12": "28rBbPAPNjVXSncn9hAPya2VtTuo4c6ULo4Eqr9DbJpfDv6jFvg5BRToCLKRsSGjjgsvREe8sDkLzETehFZmWEkz",
  "key13": "3nMxG783JosQtVswE5cHE3GVxa1m18iaQ1NQguY1u1uVQQZ7RRY4n2KFZiciqoJJVEfCVRWSPRjQRbpySfk22Urd",
  "key14": "2r8Dgs1LvxmiuMScGTjHzfqdAkCZxzhkkPrqD6wFhKGueKtXYG9mnwENJY4XLcoS1nxfeeTGrQBZxAau7vTxEoVZ",
  "key15": "5F8n8RoRUXsofXXvFyW4GN2WBFtP5oDfvk8exktj7utQNLSU9cx5kKEZ68MVwxmHPe1siHPQNxNMVLqViQbboUge",
  "key16": "4Vb83YcDkXnUtBsLxJJWEQyeeW343jfQGS1Aa2dGypRef4ysLD6VtWD3J8BLy5xYhtYSSCqRuWo6wLNvS3GczzJf",
  "key17": "5z5p7m4CigRJDZ2uQg3kBYHggWj4XgtfebCGSGVwLYwosR32BeweSwUpCiSVDo4SmJjNzLy6H1juvx4a7aZaCFWX",
  "key18": "4HGksKP8TCfp2GQpZUF2VJqY4QAM2xsAUPCoyh8niLpEJ6yJryytb1aNcMBgMJu2eedoijSFCtPT89EdzpT5vjaN",
  "key19": "3mSN48xRyG6EF6vaDRhoz21nmGtgUunyP4ZThyq4RKBPL9mZWLuSdy6L1sVv8rkT8PYJcKT53AUEp9ki5sqkD4KU",
  "key20": "4YasNGLRhgJKgxHe66mrnbjKzTcmRyPCnUVQGeSnuz9qGzRsoWnNZqRibxyH7ZxnQHu3VEf6cG3Rro2fTbAKDZKu",
  "key21": "4uTUUTvuLUYjMafskbwCNcAMAS81Cw5kDBDe7bfjFkQ3fh5GVRBZb4TGoK1SSjkHgfQRZ2sBEKYE8NaCtKvjoJQg",
  "key22": "4NubCjk7pUH4vrNsUBvPZtWqnYWq2Fw2TrSEeCMcvhwNnBf7y6uZtyCLNj2fNv9Re5NhBK2d5Swr7BTREjzu3p9m",
  "key23": "2XMF3vpRLrdE3h6gUwzur2vwaN2Y16NC6yLfZ5jMsjKBarxggbBmdvrGkPLzPG5bouzdTTKLJdFstmsRRWHGSWHq",
  "key24": "2rHnaehSqbmXa6eeYHyma3K4J7CHzMqtMbzM29HLEWPaE3RZ3vyY5cSizdbwmtTrqymrsf1MB3v1VSTS45qvAXcF",
  "key25": "JhemKMtcuhMFtc6X52r2vPURLaotQQLbysQeDmiVFGwsMPFrjsh94SUSaje4cMXUuyrEr5zzs7tQG4u2GZHw5PY",
  "key26": "5gr7LwCS46qDKdfSNefCp7A8iAgwDCVYFwNDrt83Pw8zV6ZpcHLWvK23rrZgtiMELmVrWr6Qg5352VMoDJhMrUBv",
  "key27": "5nHRvHUfNqZG5GtvABkEZ32WPdjqjFkxYmdiZ2SSn5hRHXVeNxH886TQMF5w8gTxQh4v8QQaDmicosDizAMrhkca",
  "key28": "5qFumAeW4Q9fXLSVahyGAxEFMkUDGBAKVMLyjZfzwSkKShFNUE8euS1NXeGSwRC2Jcij2dcYugVknUMBECYroJzv",
  "key29": "4VcgxRpe6cnsr2jmHmmNPsoieCSr6hNaJyA9LX14sAi7shJjmdSDFFxoekRP7S6iWq8fUq1JRXBsWXWUgHWd8nvo",
  "key30": "3TkrXf3knfeoUZoQ1HcFD79x5SK8X8wfpbkKCVMwkWVVSDTktpmQw3fo7fJitwzAoySkYfRpXFB3aY59xeDZ9pzd",
  "key31": "oVufzfs7nUdfL1Cz81uxhZigGjdc4zYkMWmwJnKYGw6cgMwG1AU34BNJ5Kn33HyUpLGNRRkuEHGkY7BWk4zmxiM",
  "key32": "z2ZPG8ptzFM1KsmjH1W66aFXHEo7q6xgLjGTGygo6itzDkueXk7TJnSWXvA5UsfPo4mU25ww7o9yKYaLj79xKy9",
  "key33": "y8JMtEXuaSprnu4LkDLggyHUxN5qLKVz4XDiv7wSCBBrRDiWayBfu57MwaQXou9ui64qmQS7JyHbVw83qcxHutY",
  "key34": "3tLpfDMRQy7JDR3jG6oVXp2rBRnjTWU7cfYcD5NGdMryRgtFxBvoQdsTYWpbibnfDKRhcoKUx7DawgDfQBpS6eee",
  "key35": "4kstEAaWioDxoKZuaZYaJwVUwKn4SyQV2VkdgsbXC3DnZJEjeCsGCq5BzVMDJqRMR8gADh5BAco1h3PJPmJDwrUp",
  "key36": "SbDPFnThU9SiyQshqSa9p9t8BZUp9sH6xKcdaucPkWHiyxRF947ohkn5V2UF3sYinb31RWJLcyAoonZ5Q4QwGmG",
  "key37": "3iEPTiedfKWj1bYTT6QfNEKQcVAZSvid4pno5ushMeP2tYDzXEAbvUai3L9RBhxKx8uetQLuqScyC565FEQobFzP",
  "key38": "4PnSmHhEVCzriUEhyDDJYhiXiW6GUJpfxGMVUvrTusUKoMTXjYyXxTr47ZjeoRUFVRt7p5Lf4CubAyr5teNarzq3"
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
