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
    "5u3Ys5K99X6gTePzRRwDiaXThAszBytdDuXHoggmGXxTyhcLv1ZUGoRL2vTbMek7oauG1KraqsryMCAzpMqXh9eY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SECoY8uNasvhTLmRcFVvaagDJdVeHS6yUcB4uJzb1gbwj2Napko4orYAWTi9KuXCgHBFQZJ9qTErtMdNFG1mGdD",
  "key1": "JEXwiMhNvFp5giUrKWQQso6QiFXgucrXBMR5DyuSi6NkobmeE2DKAsnejofCXH7WFLqas4TCpp7vAi3ZgYzBwTQ",
  "key2": "3g19hCBxYJogZhn4Q5JsPnoPU2mLZM4NDFt2v1N3DwD4g9xJUnUCvPVRrE5N3AZyT3w2sHRR9ozHFQjK3HiXoxDE",
  "key3": "4wdzzLakdsYK3G6x9q1MQQiSLRbQiinuwq7hFkcmQabr8dcn7duGoqP6GWUTqsSWWaaMiFXJgQy3qooaHprAC6SB",
  "key4": "4cDyTttWDWoYU8VALmME2GueLb1AaJjSxHTucbAMgu2c5q8TEa9a4FBgaUVwmAMdpRTeBksjtBy2L5RPPpUfZHVF",
  "key5": "PMX3BSo1ND5SJoazEmtT9KKLcovKuKc1UqVejw1iJTgohHNPGbsi2KLkB69okSXJuFcDRKBTfdhMrxt6yCaBYHN",
  "key6": "3BoaXE9UPu1rcBaPVzRkbKB8e1aDcrergLuoesSHUNUFAX8VvE2bT98V6Y6A5H4ju15pvZU2j5AD5cvNmJ2N2TTb",
  "key7": "5nr5vdBPrxviBn23cuw5EnqLiWRoi9aSqEDvGFVTXsutxYbt6ok4rvojT642jrnRXTzvPWfR7FK1R1d6M7WfNZQb",
  "key8": "2r5ocZvF4taj2gGCAMr4QFDTqFBbRJos5XkoKT1e7fWyKdLiuo5p9vVwH1Eo6TBAa4WS33vdSvcbZyJNduT54Fo3",
  "key9": "3ibDrP1CNZLnDXCPahrD5gXre7ZAkAGGVWTr8rZyp133eywob6F2DHNhPzZo33575gb8tssQRJYJeQg6qPsaXJBw",
  "key10": "3EhQsEsWBtHfgpxaBX9qu2vSE1NWbsyhDVxbRmsJoR8pxMUzec5Zp9iFRofehJPvhuBjwbyQ8kPaFNbX3sjBXFsP",
  "key11": "4JaQkLnuv8nfqNXXRQXXP6Dv2ztnS2hDR6M9RG8onteG7u9pokTLrS2DZnevfEJmTWpzXUVgcrmMRurSDk7DFnDy",
  "key12": "2JxnTCBg2EKYbGRcW2QpKMkMkmM47zgowxYE594oCwNk2uTLi8HrwHFJfLCvi3pidsBLwytUTbw61NwFQ5ub1rGh",
  "key13": "5ErX3GGyBoCzQVaJeDzNjn38ishqChTzUEzFYYkDpUFrcqRbauTfauCon6LU6BmVUb7czWkNW6GVs1GMA49dGgpd",
  "key14": "5vyN2WzbKVDXHsyfnd9665S9cBu9ehaxUeitz8FJr6gvm5ejn7cCvYCJtGWGwHnCaNaNdKUzJdTA3qjfGCntNMTF",
  "key15": "37nXR4oUEmUPNvTNLeyNL37svU9QVNZo2P3MnYidv5jAaA1AWBa91kDBkv66jXrwoRyErAoNR5j3PdC3nxqPC2ue",
  "key16": "4eVTBjPS6UbvBue3BpuDzCfdzZeV2GAxwQA8GaWNtZ2yVFeWh4yR9L2nx5Z51FRiodrm3MMue4922UBuSe5M551m",
  "key17": "3yZijECX7P8fsbq7QxyAcvSnpB67A8kiftvdG2fVjNQ2AbQHu5q1aXiBHEJcc897iEePSgVUYiBZe14aa1VkzYhi",
  "key18": "Nxuw1N9HDYLw6i2DuJRFSLuYPZJ5ee8iy4shyM27JYmmp72ot8ozU94ZUmUwokNqb4ZVEMTjnAzjBjwMLYPhPz2",
  "key19": "2g2jFFYExDk8swtXJZTu9MWNriqpQKdwB86aGURhFNqirxqxXdnqtUWWj8Xb3VRdDxFyvphht4XpGnDZNPH2hcTm",
  "key20": "5P5WZuenQvhFf5R1u5DbcrVX2SouLUoJTy8URoNkV54PRUNeuYNMQeUzRsFFiJuW8ZfhEaw9QyDCfu29FtTUnjRU",
  "key21": "4wLF3SZN95t67WobHZFJPfkKJG9R4qRQGN2b1R6uzegfMKZVZU8hxjCNWbbCvFN7rmxcrokkhNKUTAZdWG3kFowi",
  "key22": "4TGBXAc6aCqF8aMZb7tMq25ycw6hzbZGb92n7XGzXx7VYeWBtRLYgMFNGQPnEykkbsUKS7dvKELiG5ucZZJUoqWy",
  "key23": "vSthpFsFQsHFVnsSYTQ9czV1B9ounXrvwEJVMvHvvuJKuY2bMWRnbki7hLeSVLZHVQJ9s3zsAy6EuFG7A6vDbai",
  "key24": "4pfaDmRxKsfyVzgZyBA8E8k64osMtcsVVtgSJDnE2ieFU4Jc1uKPHvUM3buqdjmfQx3FJLH4CYzQdt1bzm5dmKo8",
  "key25": "4VnSq5HKgLihBGZL2PigV8tdhFcSzqkLmNsKc8YoYg8z9ZVnDni3t8T5PBAwJ2fgKVpXwnXidmZPU7WUkWzzAmcu",
  "key26": "3aw6cWWHZm4UPeToeGGKswiQWWGqvXyJZQAfA8xnsmih4Eb6YeFCXYyVL4qzDqdN8J2iaC5pL7ZpCx1Kv6QPJnde"
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
