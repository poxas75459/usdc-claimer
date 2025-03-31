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
    "28esKiHUZUzkzCkqaaUv3PwPRJH9AxdDasdeVqPs3t2WTAj6ApjLSRy5w5gPKKUWwcov6Z8pBLYBSY9awH5RcT1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53L3TyTeLdpiVN9HhYAY4xbDwjR1WQd4YU3tZ2HHfoAk33xrg4qTjkGfpeouirffc6QJX9Vg6GoRzDNuNJepUdnr",
  "key1": "318zRyKT8tMyJQxnaWHHjjL6fmzHdZESbYrDEZ7nMRxtJfb8KurRfsad985w5LKXsKNeMaM8kh8aep1TQ2bVjrHh",
  "key2": "4HYXDiDwMmuh6poinZ3oRg158GQqFZhCuyQWAqJUmQn34NYx2hsc4bHXvGHGKLAvvk6tPU4Yarrjt9NByZ9jPpw2",
  "key3": "3vzLvGgoGBJoP2VrmE4kbxspbnxUbZqzhsYs7K9GHYaJ6wmutk6NSSXmzT429tUPT9jsWFUYP6MEqcqzk6biRCrn",
  "key4": "4HBCUQZXCghK48TiaZabucLkFbkEN4BASb4NrL2mbafJhF5565Bqu21AQJNcX4uhAg1z2bipGasmdMeqZ5b1PJMy",
  "key5": "3HjWestW2FizzUHHbcPLmRLLSJw4sbXgFPHNs8MTQ6kbo6UUsmp62G3ML3ZzkPeLACPX9NUDWp2jEeJZ38hvd31L",
  "key6": "3Jmzah6DTo417Z6eh7Cjhwm8RqDNEFoKam31mEYrgMAoe7TxAsP1CX4s78RVfXzYjHtJqKibDiakNtQtp2ZzJWyo",
  "key7": "2cKaYjbF6ECZuUAmLCt5Hn8DDRc1tiLfnP9XBvdPVaAimKRg4c5dE3orXAhybquBs4HKcgEDGbLUJ8wc4Cf2fr5t",
  "key8": "2o9X33QVC3ptvMUEpVByKe7xHXLyr8dFXHtxjCBR3yhh2wkjUJtXAQhgJ6c6NLXNBrPSW7bmV5Lguq6K2mNVip9d",
  "key9": "3W7QHzXewiXUfQaaHbCtyoE2FNDnYfAefDkDG9DVnS4jzJ5qPBAH7w4ipFnhtToniLnfUjhYukYsbbkef9aKvPyK",
  "key10": "4bpw8rjRg9nDMNyYPACid4ycSGjGMkzHjW3TWboAyyCedu8sE3T8thurrf3qNJkSETeUjqyp1kV6Y4PW7CtVBVYo",
  "key11": "5oQkU8up5sbMGjV8DQprPirK9Cvb2VigTPT16GEPVxta1t5BCZVfZdaHWZ3csKmSrePDPcuztg5aFDFCMNNyqJ1C",
  "key12": "3DwwTsJ6dX8zcXFk65nZUcAtC1Wuz74JgSBwJGBPE1mVJ5hhsSgJVxGC355W5VfAT63DB1a73AkTxgfF3NuVjCPV",
  "key13": "4Zc8XqrYHN5gRMRZRTU84AwVtXh2xcbdi2rcapAiCNvQwiBetStedcyY5zozxHyaTpEEyzRr8nHJmVbXxNigUw69",
  "key14": "RDVh4ApkhA8zTh1keR8bcnTgKEfP2k6MevqBKDsdTxcy9AdR1SDpnfQC1ih4eVLy87wPH3NM8woyTMnVPRgFQhD",
  "key15": "5kyYzE5AFdGHARiX1HCDAg9tc6VjRvKYudocYvvXd5nybyjBRDKxF2jRi8ivxLvRzhU6PkU4YskoWHg7hsnF82RC",
  "key16": "3NhLD5xYzNaTu9ZW5S4rWAuLYy5g982iVEZwLMjD2c8b9KpEFZUSskMoMtBfSi1EBEyCk7braZQGoJVKxC1Drh9a",
  "key17": "4sXHzwwG8MWsuSHrF7FTUiRMm7Uxsvuc2SSMbeZpKP2xjkbRNcDh1HC4V4eSpnMrk7G5WJp9Z1vDDm8nG1tzPYr2",
  "key18": "4jVbinergDUEhm4v4S8V6S59CmpvbaeG9C69Xjiyw37kadDiX45RB3KhJaHyXTpXcRiB9X5RDZA69DPWxtgrdrUZ",
  "key19": "5CB1HqfBdprgHpc4iDqXpCL22GM5fame676wjQT7rt9xJecLhwdpquGRFYo1ff4fNUrnjeEQxahppyEW4XnY5dVB",
  "key20": "5Fhu8NJz4MY7zN8TccbAcW6jHsgjCqErz3Pf5wW2tDPBjhznVddQC4rcaL4WFGT9bs9SzM1eertbkWrrTDFXeggR",
  "key21": "4UDy9aXryHwXfBJNijhxHY6SPHFGXDQqsV8atvwKCMkRp3medViifzJECecLj66R8G52CSxqJLnqRbxANwzGweDi",
  "key22": "5HZE1bEheMB8ST1v7W3HEvdjz1Zko8yS45aH7adW3Uh27z2jS7TwmFd8scB993fkh8vndLhAhDVpc2i5JexP8igC",
  "key23": "5ULMHbKjfwSpRKhFZh3snavvq8eYspULJCUF5jAGLDy4Se8vs8s5hzEi3DhqgSWqkLbQEEbqT1sK9geDuo9QD6FH",
  "key24": "3t2UR68evMWP3e18ZV27VmMPHjfJ6oMS3rA7dpFT1ASooRKFANP8uN1k4qoGQxg82rLhfBR1J6K214EuPLjbKYF5",
  "key25": "4s4132N8aEZTAs5s9jjxvpX47JSmH38w1KNPHV2B77VkkmZV8ixsoKiSESXgdkYemRcrbM1Sh5EMua1p4dngY7VE",
  "key26": "2tbPCHmQfBJxWeDzzG8k8qSC6bfVZCVaAoWxUkDZbJeyhZNKhcoQ7WCfTToqtiFKoaWrmP9eqf9kPmMV4HVq6Ue1",
  "key27": "4d6AiLfmXJFXwJgwbhWimoqEErbL2rvSCWyBLaKEsu3mU1xeAmJpeU65Vwtwvob12oGknNT1y4aRLCXYqdZBxcgS",
  "key28": "5oMDKuKWARhQEaGohZZMAaqVaGngv8o642PctvzWGd9onxtNQuXYbGz2TkyqivwFbfrZ3kR3LMfPaZ9gCMkXCUtE",
  "key29": "5Q1pDZ2q1dedDqwAtD7rrznpnhAc9VgfEoifJvsfuc6qyhsUnBtNQAq1fiBF7ERRB5fyC3edpvvyGTRJWCm4jexA",
  "key30": "28sXs6ikdJV9rBf9fgsYqTRAi98WKWqA9jfVGaVPSkHXjv1t8yWpqtWjqgQwkBszLbCxqGRF7gmvM6eS5FdkcoF9",
  "key31": "25C9uoRSHYAZRfLkQYFBBEgsJUAVcUPWtY5ei1JcDwe5gxEC32qiBoCvi6WR2C4F56HdxYaFpo84NzrdP9AHB8xp",
  "key32": "3L6macChnhjVzJKv5NjiyjcL67Rg5qfTZ5vgjrPtdWmHQS78Box1FRna4Y6ShaFArGBHzBfSDFPeeo77KgQz7fRD",
  "key33": "5F9cUVHoDbfKV38TzpLHAPGPH16kUkhQ9FWbKgRX6uGQBYJGKjhrVs9aEU1bcNHPnbAgdQJAzMsWUGHpU4Jc4f3i",
  "key34": "3rd2LZnNdyTiP1P49MKe4qrnPC29hoq1yZiocpqozN4doxb9ceqL9MvWfqufzwad3ySa4QHiMBBS9AUFks4nsag3",
  "key35": "4to6o1NzgyqxNYkDqF2BechCmv8xKV8CvhkPifVZks7fakVUYYPZ2AuvBgvREXmJyE4h48YTywV9sHKDHTSYCgoe",
  "key36": "2gAbny8hvZh4KsAJ7jbX9Sgbrsvd9nS3jxm14PCXbTf3j6CJTcwNQ8KDCpokjGwrSpc4wz579FTp7zjzxEja3gM6",
  "key37": "iHvWUNDLJDMskTkTziLSMvPASCDfFL7jKbUiq9TuNX4BnbUYfJyhvKYvTD3VhMcMe4aQitX5QBTW4Vu9Pm5ba3J",
  "key38": "4FLZpbBTQuHzxuGEStiYvJgcoi9duDAfM15MsgJJtu66Td7oiFrXMbjUL5WMpQfXjYVGHc5DbAnv6y7irSdGz6WP",
  "key39": "4GPxLBeHgUvNScktXqNhSaamc5VUo8ezQvKs2HkjetqF6CBd2PfdW6XMrZw3Yr5g44nFKoNnKKSWBPoFTMY7LZyh",
  "key40": "417f9HMY6tSdCDNj7fPbDrQejvtc1jRpZvNpik8qsStY2efz7X3aXxDifKRnEWWjn8hHHXHTaAvBaavTqnhr2gS5",
  "key41": "2XQwhGHVCoNwtfLhLvMWVHvAzFd85XbdtAp9dAfg7GHWFB3RPzqqkak3hHXC7oc2KPNPkCXZBk5iSg3pVa7XTboe"
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
