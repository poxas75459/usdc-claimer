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
    "4RjVHBMtckwkYx6hhStbXLF5axsAYHfikAYyogUXESeRdgV5aFULvtxDCWR8ZRdTvJvFBB1mmjWzvj5LBvJuvaEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SyX1GrwbQBpbzduXr7UDUFCehRdJ4dpphCVtApMfLyYJivmdCwFoRtRubYNNeNV4u6asubtvoEi9hdtdnzduXKz",
  "key1": "JJMTq1PfFDB7qUKFyLR3iKwhUD5Ta6mu6SmCA8rQorbKcBjvPsx4atHWfj7sRoGYSUci8EJZskPJUXELKUXCV71",
  "key2": "3X6gY9mQzArrwcnSwANKfo5Yq47FZuUEfz3pMGo2wW1S2jktbP7ArAessHixJCMbreV3VkPQ9JqJyoaZyrcYLVsP",
  "key3": "59p37kMaN8zHUQRcWwgDaQTxFFxHrqurN6FpunGdZ4vu59KPAuvpkfmi5cQAXcrErFXX3UpBQYzxUKGLD5uH9yc",
  "key4": "3qqV5AcPbEknnvEGXhvNaXrd3bEgUL58nftjS45p1Xzk5sMugwxPrWCHgEd4m2j9Cptmkbi2Rud6QAWW73LXMYa9",
  "key5": "e2GU9kUM7t1rkC8r4d2aHkitFf5bLNcL7X8vUDHnLQj2L9KpgySeoEU7UZZmYg2GCQU8j45GhSCMe4y9HVxT1XB",
  "key6": "3L8dnTPVx8ydGLo7hPuKJeBX9sxoab6hb1h6jUJEjRuKNPTVEz4ksnCPMKUW6kh5NiJPv4HtpErqDURrVcwnZ189",
  "key7": "2Huadm935mJ4QeT3DawbUCnQkzVoQddDqYna3Y3F2sdJauCpt234aAFikhXvscHGMcMaXekVhydLQnQWEAScesYe",
  "key8": "2e7yUn3utAdpJNrn77qyEkR1Asechye4vxti3zDZUrQp1iVkFeMcmEiRXvdjy5AGCV4vWxdnGWZgMnd1TXPWzsZv",
  "key9": "2P6uKVQrs9kDLd342VotvkdENSFzsF4tW5jaUGdfKpfQWaRcmX7jKbJhCb3fhmrJKJtH1dfrDQVwd8idUhMFWiEK",
  "key10": "2Q7SGKWfLPE3Sz2S3cPJzNct7fAuqX485hav3yjbYZrj2mWbGMav9Ms33n8fBpmo6xM2Fn5hG2HjAPBXyYLeXTsx",
  "key11": "5nwSUw8bN2Wt3aHzjsmEkNfVRBLxfWdCsgV6hMVHJCRqAbwc4d5Za6dR1svKfCXFv5fhToSnT4KdGseG7LN5oVGL",
  "key12": "5CpBurkDPVG6uWDvpawFQDxhqdRF5TM3AC51q869vVzR6Ju5nFVcTXa9raoKGyWn9DVDyf7xhfG62NNWS9R4dvvQ",
  "key13": "64JQvSCVsNb8PpR4rxpopGZXCGSfPbxyk226FPdcYGZq68u9u68LLUdF9Dgd7F5GHFDisg3y7aTKGbyXREPPa6nE",
  "key14": "2SqXVBeuh22ipP1c3TU3YFBAVEj1TP4Bgcssi5w5QjXqXRirdMHieUyy9F75ncN9pQZ4qFvSshRJ3iVUkv71h4Po",
  "key15": "Ta1U5ih8AMXQpg2AM2ixvfvd5NQXeP5bc9WgvCjyi7Qe6RL8BWBdhCpRGpGtWbbVyafNPsm7smnm4gNNYKaoq1y",
  "key16": "4nQRy5wRJi22SkARnYz4hezBocbYw7sVcr76zDijaibXk9RtHrewoWLMhu6ZWipNqttm9NqS96KHxhfWbHYv4qoE",
  "key17": "5meRyPKcSdTnz7oxnKjauutURCEpqb6M9CAzqWY3GKQvNbxmbppkkLMz5rHinxNoxHN8u4T3ehnj7qhNXsdr2i3P",
  "key18": "2QCb4Ld1whVLkF9m5yD5eLyeTgZHAbeDWR2GqZUjr9hziNka9dKVsTX3kiQxyrwGv5kRS3N9fKjqKSxSZYUmio19",
  "key19": "t924Zz8eN6bshRtbuTWen9TEKdnr4yYjvweoAcvcSsW7wZwK8WZH8iapdP9ADMcWNYLwdUQNKiBeyisDNRYcXbN",
  "key20": "5CyabGYZky84JnKwnJdrmu4mY7fJgHZjLUxcHHoPuKTtfv3zKrfMEkBEdmrxr2yKi7f4iiUoSUmDxTggJ3X3ixGf",
  "key21": "2TTz8Jbx2GqhRp3tq4YmTASvN6Gk84GMWWJ4z9i9MFb4cur9PtoS6aop8Uquk3Lr9m7G2Df6yxpsrLe9CgPRZrzh",
  "key22": "3GWYCg6cF816VQ6K1QYyuBTr5g7QxVVGRJXdwGVqNrNFb6m7FkMyV8aAmBukBve94fZVfFGcDgGgMzfhJU6NPiPh",
  "key23": "23FBwZwp9t1pMH87XD2Vgiek7f4PcWSYWiLt6qHkj6eNs4u1t2i5rhhAEMDMPa9q6bViwCFxTDq4PYPpFuw8H6Gi",
  "key24": "5BGFjEodQuE6JLRreDbk4CZMDBmDpJHcrbUrDJCeA8o39z5duV6kEKCZWNimiZ3Da2fFcNrgpjgcWB4ocfP5ok1b",
  "key25": "3CmiK95zkECRbdWRxsKaMLjvR9ZkyGNkWnqMeXJwexMuqQBB92TbXP5Y45WaaevnRehwjYgKnNdWhRHK7sxbhFyL",
  "key26": "5m2ReEFSbW59rG12C77V1rL9ar1YrzoXsMRgS5UbYyVVvEfWzZ2L6S2CdVmcf8bP9LFU8JpDk8dUoeUw6UBaMAF8",
  "key27": "3ZB3mfVC8ZMvf7RwUpto7qeRUsGFn9y5GR9MJTE5L6Bkg3aFLVa3bKssEUXLJJJ33eMbHhEribuJMTkLBE3aZxbN",
  "key28": "at8V4c7f8zbrFVTnab6J77PRNuvvn43oYfsUuRn7XD4kiSM5SvCQpFkD21gGVEs7NARHTkJiegjWH6XJgahFGPF",
  "key29": "4opP7T3M5YwTWqD4ZwboQr3CzWQgQp3sdd9dRDz6JP7dnsBdcgf4uvD3vbBUgrhPtUjfDgRMKVV4pjVvpTRy2HkM",
  "key30": "4cD5sa9Z3fJwdJ9YpiDJyPVkWrmzfVWMLXbQQduSiUrkw4rTZcHsmtHQDBPzQXi7QUgzSWjwmqyKqGwJJHYAuSo3",
  "key31": "3ucFxokNi5TxdCGLDF4wL1Qk8VepQsiDGJsbp6owFi4cSSdmX9WScri65ecNTKAuEZ2D2zmkECbHWBjBUC178coA",
  "key32": "53UAGxWtSWSWL3HX6ktWpEpTZ3cZbXgC2JNyjuhwJ3z54212bMy1sYsvfmhQ7iCff3DDEB1BNCjWtThceYEDkgvL",
  "key33": "5Wdg3gGGb5Gb8d33YApS8P5q9xsZWGmPSkXS1LrcTniYCQuYf4qRhLwssZmbqdGNNbj1KAsFZUBBEthcyk8w5GAd",
  "key34": "67TNAsaJ2gZqnjq4WdCqLDXEoU89FHMAtUUxBazbReJyoDtf1TgebHNE6tmpfgLJTU9jkfwWbbmQJ8vK7Cdx3p5Z",
  "key35": "37K3RiwgGqBEtJNVEqE4YW1xH95s3Mddoy7XFC2Zk8qXGV6UsqmM5oKoD5UkwRY2qR5WG23ttgK382yurA5gmkBb",
  "key36": "124rDybGszEGAMvJVQFFfi9mPFfezk5rB2xeRYqq5xP3i4MpGdB7ZABPB3YwZ5iEw86WmtYxVo751bi2rqjoMBuD",
  "key37": "4jRd4fPo2zh73ekkGfZqTYiSnpYBAno4ERoJVdEkhv4byBME6bmD4ZUdjnhRSRVTCYCZJaKkrXTx5ouXhsJn3sKW",
  "key38": "5h4aWQ8Qf1uzr7SLAf9SLPaAjdMScaWfDbVvt7776cWuVwunkBLRpFQ18vuCHbNv7n5uDsdX3E8sJqcYGs2MuRLP",
  "key39": "24UFAqBfHLWVJSzzBM7R4BhLhCZWKFpp1dy58xzkBfdzTtae16YNVajD7rZCKJs853gb7ixrxnoDhdZYR8v8otc8",
  "key40": "5bqyspwKk7ogtxv5tsZ1yvKFGdNghQ2wr5BPHkbG2MGSNcbaMwdzVdpb98aRY4ugN3MJHrnjYZ7zg9sH13cc71fa",
  "key41": "2vK4T3tbHXTBsrY5iGwFMG1xhqtYcwmxN84XCoyQAxCZsjrnxQDZZ9rG8X2ZoceUn3X5U1dUKx7iNm4Bme2LUwpj"
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
