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
    "DNp6vWhG53uSeM8JuJc8NjrchsheJnTt7eoEuRc9S3fbzko4ux23avyP2TV8xMePNAev7GSGMDCqEKnKNcfqULF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5deTmDdvqs4x8jQkvBwZugjJKGPo2Hp7XVwFAxmUB63uDpkvYzjkCgjg8ugZMJTTgQbAJWevWfHD8dh9DR2yXtEy",
  "key1": "2THwAtckijAkfqoYjcNLNi4dbHYPno2Zoe2UXrrrvPvzmYCt3eHAD8dyC3oNpTaayPAGNPQV5r1c2J4UYmwJSKaW",
  "key2": "7BouqFnZ9T4iyrw2p4ym2NNTQJGkiLaB7C9qB2fde9drtJYii8eDwc7mHCdZUPEMbgopeCAzytR2Zu1HumnKZ2V",
  "key3": "41VfHSZfj2oSmdWW5sLB9sWD1Dnd3dVhnrFtPU6De2b3LMnL3vZd1nh6J8wnqkyGcD7PVCRwYwU4BgpBa1C5W5Vi",
  "key4": "4N13b1kcioMNt6zM29AwByv9aiwNTQVo7dGrHX5XbxZdGeLhmtbgGh331G9Qx3LZoRcqZoRqHWns41MgpKmvGo5F",
  "key5": "48BJgBdWBMB5p4exrz5mKurysQyotFnYJsh8FryNvGKqDD7UzQNyEctpbEEfQFNJAd4doBLbYDfuoimccZAA6ioS",
  "key6": "3JwBywW21kmuWGHtngvTWgqBcgeWxTBq58NPchDfL7YzHkBsaayhoFbDPngFXsCyDqme6C66CrJvpoWneVejx3Ch",
  "key7": "3Wgb7ZBKbTarJhZKahUarGbTchWjqGA3frcUBf7UjSTCCBp4jGsmuRMRaaUXBts9oPnmnPMJuQACE6sH3rG53d4s",
  "key8": "2gUDoqYnKcrXNZP8THVGY5hqxPNRrmppytTE1D3q2dCyr7VeeZatGUoPFZRWLr2VtVNUsBEkFtTVzCL1pCKF4KFq",
  "key9": "3APJcn1yFuoj2tjdAjAzRzB2NEHZBHSRkEkVePRRvTPR7mdJeSswMh4kzYMgxTRpQercE5AvYte9hoCqkLhAZMpX",
  "key10": "5YTTGBQwWZGrhaepSfFpwMPrHcgcJx5FUt8meUVJtq6CuPTQcKNnKPotvVFGTHGAsAY5bdtX85mLZXqsHRUam2bd",
  "key11": "549ZHdttNT6wRZU8WM2F2NEgjt39pyPpQw6sWwVK5LDN6oykDewZvt2Ts1sFzgHfVvovtZNTML3Z91xHraoTSMj4",
  "key12": "5yxwtdsFykFJJBHTf1No4RHMLB3sLpwy8Lxjwfviv1oLAm26gBfcCd1k9BKKEEpwpTnRLENedtYwKd26udAAu6ED",
  "key13": "2WwKxvc79L7ZFAHWgfxV9v3QYnwwyy5ths6dARbhJetBA39hV5aKbH2kEsWkff9gbVNR9mQDW8GFs3v8iVjWF8hx",
  "key14": "3aVkq3A5oGLwUsbZwZZsDFHEjzcUhhe3i56FE5NNGE1ovnkke4AK4QuWAhDoTXWWP8jrwDdCdjjAHeNdhb2TXfsV",
  "key15": "5MabwhEowX9K86B4ddE1hGeDkuUbujcvNp8yzrRs8W1XanL82DM8xSZ5LJVsu8LG5jgerW9LVzu9kkoH4BpVCrs7",
  "key16": "24TYMddfXWshFuZD5HSgNhXgwCHe5mfidwAgdEB8HfNJ8Ma2DeN86ie3pUsERHX8kEFSWbcaUeTkkQ9N4r5NCzSv",
  "key17": "ByvQTyWo8M2P5ZivJbC6Rek7m5pjjzJm2HRY8GDxFYtqhkEUjJR1eVXW2fA1JRz5fLy57b2Lg8ssGn3nJptuEgJ",
  "key18": "2JL4KcLgeJGWGK6shpXKXaec8TWGhisjqtdBUAHZKuG8rJRdBDu52dFjTa68VDZUzd9YCWK2dfijZcDHokHwPyqJ",
  "key19": "Zi9ZHcfQF9QNUQjBAx7BSLfjh2L3Qujuytki6j7WNrhNivjb3bDeq1bxu84U7rEy7pfQ1XDF8stzVT9Sb7scZ5Z",
  "key20": "2zxwvm6bZnW8rGRBjhS8YKq3eie9yUqdK8SgcAJqWxzhMgg7mPr4FV6s983uY2421RGg1TkKhvNJoU556zs1xrf2",
  "key21": "VvmaWL3amZJ5QsM5JDZRc57eKPABm2HVy4J78G26BHkqpGLqcKYcZVKocQ6NtbmZiAhjqoeKz9VgfMTvbjYC9of",
  "key22": "5LMgd3rXzNsJUEu4j55QvX7727mYYfp4EGAUN6HzVG6tDipKqPypyJkDBLG6Q8W6aJVK4nCzxY6iESVTA3pHvGbe",
  "key23": "5sH6w2QiM8TzSLZb944avun5zujsBANuzfPF5Z9V9cC1wUCsa88reNzspGWHYQnDx4M5CKy5TJnpcNP2Qg5B9xUu",
  "key24": "52fQ2BRAGGgTA6NXQP5GNUPh8F5oXnuiqiPnRfTEDmFAioAfEkT8V7rae6FX1fQkAoPLWW8B2x9d31cTXazTB21F",
  "key25": "Y2cCVvjRTzJKN1R9ovh7QTzafwbZrDdRd7ebKt7LsC53ou8rN4KaU8v5yNqVHgvsjoNWKPB3ASr7yANrr3xeFcu",
  "key26": "viJjrbZSYP1PzJqJSPu341Lhgvzwz3mYKRfudPZQZW1dt9pS4RVMar4zUXA8iLT89SU7SULPPqbKBAGvdxPnJmW",
  "key27": "5Cdz7UimMCbG9hyJh45JWGgG8v8MJmH67tdaaByrdYZwRNi59xSLX8KQLkPvNFn2qenpYat8CbU1pEv1M2nbvhtV",
  "key28": "3E8joeZxanAe8UaN5e6a7Dvq2QoEMd7oNL9sMNk2wgyKxAT1ZtX7V8e5Q7n4poZJybpA91nqfoeo1YRJXaQB6wFL",
  "key29": "GKDDjPeFZeSKv8thdGKuZjfvKbSyuzturHdB3gkvyr6yZx7kyGZhk2pCYFTPe9RE9xb82FAkMXsvRZBUebDBUYB",
  "key30": "3VKpFcKtnPHWM5DZm8kzZWnT7s6vuwgpGGJ2aE3buMmEL7cbfZSvbWqcDxbtJoNyXQjSk91EXjsGGdzN6BXRnTKP",
  "key31": "CPthCdRxTAFdMXeEP8tzYkWy1UZRnvPddS1h895vzjugChjPj6Z8V3zNhUW4fdXWcGCdyuPAzrrKrELHAG9VVQd",
  "key32": "4baih2HYvX9To1X78LSQJ4LMbtjNi73ueeLLkTL3GTCRo996Vm7cfyEwDgDsMsYEuBXzkF81U3VJS4ds9CmX4edN",
  "key33": "2DR88Az3JAM3SmJFnUqkEtr8XVRZoF19e4jVgTTJ3vkvWzcdC2PL5ycQFBAbpVrxLs8Whfh68tzGCHQhXwikqweT",
  "key34": "2jL6QvhPURAKVyZJqhxxpuHjXh9QaUY7yYVsjzp2nr5Ad3jBmTvEwqd64cFiyo1hMEWAQLYsebJUZASoiXgqksSN",
  "key35": "5HMZVSazHxF4scTgwN53ZkEYhZRsZxpKJCs2sC7q73FwYrC3e23a39dkLuhwAzfVqFeSg1BFNaXWdbYFXsZcfvqS",
  "key36": "rFEs2nUJn5hUykGycvCphQh3DRmJ6YiQ8tfB7fPToFQAWidqqSNdSmDaey5j49jKrTR7Daa2Qn7FMYmD8SgGe9d",
  "key37": "2k7VGr1bCBJeeavvELgvRmgPuGZyjZxtzfwZxyCe6ygLaCBSggSbx9WsUT79J6RPG1qndnmbWyMN63JsLS54VA4m",
  "key38": "2jy6Go1zLs4cxnzBoUFwCSMuhnde9kwZv4qHnChTH9t28LUsYRf7TPRo1GVbmfbNzDQJZTm52VNaMCNKKKrk5Kjh",
  "key39": "38p6pYui4D6Z2X8joVPtcQs8V4mDEPXBuqHKMvMUVmjRtuJrewb24APGLKZeC7fNYDPpLismtn6Hq6sv7z3KDACT",
  "key40": "Ds4JK1QW6gp1QRrdRsUBFCR7u99UQAKEQEpSbVN6Qunb83a3oZe1XCNtiS3B38rkZ1t5YYoZtsTBn5zn6fiv1xB",
  "key41": "2zcLYvYFRydds6dDq6KDheaZ97MPFkmD9XFXtofyTzPh79ctkgCQrAsPjQ1NMgLmGZL6NbEfGzqTEHdA18xHMi6u",
  "key42": "54oubdeEk3gXvsEu9h6w6AdwLnXoGTYXYY8QLCkwhQFeB2hFtVRLwHcKTbCCeXRJcNFYkZsVBr9JTDtPqQkLxuUp",
  "key43": "3joU6HX7kyagoA18pB8kXJUU1s15A4ami4oUoFu4ax4JVw2MkXNhsvHjjBcmqEojqKYwWsCezd4Z4Kj3WEs9HYPB",
  "key44": "56AFCPCuVvnsZGFLtE1kLNqwtCAM9iyLzy1hhezsCr84erU1aTixuLrn7njCv14cUudw6CSrLgh2EZtLthinmetw",
  "key45": "86wweNnZQbXEzuGoQV1pa189XLb7U1BcSP45q4iVU9RFr9yTWmMPvzEZFVEBdr5SiR3S5rSyAPeoviD4uSFusZR",
  "key46": "3WMJn4han2VGomhMjSUj9bGTi9cVVNM66aXvTQkrsG6vR6xLJap1hfAon3cp2tVNcMXFi4ZaymMx9o8MhN7kqiGt"
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
