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
    "3pjZdAtJzH8cNEveddUm1PVtDmN6p14UBkSYdNdrwAarcuJbkaBf2MM5Df3QDDaJQmbyfNp1Qw8Bwrw7xkVSpYpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ij65k7D8v6YkkzL87QE7qomX5K5ZSmBhKimarpCNPdT2d8yfyvARLksdhxSnZenfovNDbbN2WLFSEc8NHEazD8R",
  "key1": "3mjrJGvCnGHXD7yaJjwYZMiM9bracsnqZBErZj2qM3X2SsEREtfn1VPdAh3KHGSCzsErsw2vdoEhtsD6YB95QfFo",
  "key2": "38CAEmwMirFPs7w9zqwAoLZZa2tTjwMdwi7UDdwzGJh86Z6EBujzx6yzRjvSFJYpXqi2egXRufV4UysKoS95Qahg",
  "key3": "43V6BsMxwa3Uh869vPWGt8DGjYhHYCesva3f8dQHnZmw1ztHuHaQDUiUCawhijtREJb5cTLCnqo635V6FBGP95hY",
  "key4": "4dPowso7Ri22JTj7hwYTt5iJqLPfrZyBaeKTZRAkJiJ7oWdgkZcQTRqURscoRC3TLJFYMw3ouoVVExLjDgPUwFtZ",
  "key5": "2aCxYGGEBu8Fj2k2un2QJUpC3stfrJvjy3zdWauhonUREj4RYeV7PHRqmrESmEJCAcn2opAhM3iiERttnzmUtvdk",
  "key6": "4tzgt6ueoiwwV4KTTnsyxVLX6UMejDL3dWuXRVN3UcTL3ecAaXNU6Zr5PpZ3Bv4pkLNvnnNeVxqV8Q7bduKw4GLB",
  "key7": "3kAYEXnBhhGVUCnGqPc2xagpoWVdZPnPTfN2CfmJWXcxDPa2of4jumX7R8xAKkSMn8idC94n5WNdy2Sgw1Riw7sz",
  "key8": "62Jrpzjof8gS8fUGc4PR3jhfsG3GSPe6gHyiTjXDtkaoovQjxnqvsP5NjwYKWP4we5Hj3VyhcdEDPJxvjd4CB14w",
  "key9": "4t8MQhdRynDaBszGKnqAkVjiiCXuBqDaFqvQbroCHZARgrAMyF1E1kVXyxchMBF1LkHuBRPqC4fKDwEMXXoaMauG",
  "key10": "3r6jjF2oYdxxXdptinU7bife5zSWpgGMfYUucxmJVPCZ3pgwgPBk9P63Bi4R8HCcLE8FHKZAHrQpoZnftrnrKDym",
  "key11": "29RbM8Yuw4Ai56hmdtyDRKiwhfJbhPk8YidrtXeoJCqqKpua5FpwiSHterdhiYXMLjh4yp35fZ3oejDvo53eLTTE",
  "key12": "3jhoXF3NGBHs1yLa8ZTBefPfkt3Wozo9RATCCvJzCdVZqiHKTAjQKHABTJiHeC1y956Ax3kEypBJbKnM43eMp6fu",
  "key13": "47gaWhGEWb6QAxiQstTVvoCG11T8741XrqhiJ5o9Swet2RzAiVchYFjFA2qY5c3vpT8xD4aHnD7WUZmMNESRLCPk",
  "key14": "W9iXaRndVDLYUqC7MChoHg8Ed9QmPeT3PAPTTKomqwafFNsLYWBZNgAnHZMukyY2nhXetYLe1DpQEisw94aZVQ1",
  "key15": "2iAjji1NEmZ2FgTn72Le6XFSenTn9NHz9L3p5RcTRj7AE9WqkJmqstBNDneuqd8X2sEB2CurQDZ2H72ZPK9Z7W8g",
  "key16": "RB7nk69B7SJXbc98Y2m9kkrgQ47Ks4fbQzBE6CMFjxfpLxedGNyKxCNBzJCL8y634DSAbKUNAPmbeVWKvyTt38g",
  "key17": "pEqWqH4RyaRkgC7GmdGqb59HEAFvw1q2R14VrEEEv4MzuYf8usW6D6AxqLJhypFvFBVgcpi9Tjpc7Q3QEx6P3tr",
  "key18": "58kncL2v7HnFVRveauBQDeTKqqDTRy24JQt8618wzd6CQX1LLHFMZhUrnK3sVhcJYaFe2fh8FHqJj6on5pK4JYaC",
  "key19": "D9bWSppNBQzwtJuZa6ZpzL854oUdQQHRYA8Wm6nCzSuFony84VhfSKemQEwjmSkPPEpAX1jRKFR7Wtp94CqoCSU",
  "key20": "2HAMQfwpNj6DirNQWX498LWwzqksBnMGspfbgqSATzuqDLzJQczb8N5ydQtekXq2ZbhnNHXxJitJpJp8P33st9cE",
  "key21": "2fGr7oiKvNY8eEgoPAFoHtTsTnU2tSy4pWc4F4tQ7erNmfgZBhLTAprPDtspptGViZWoph1oyUiMAauDEt796QVZ",
  "key22": "3TU3ShETMFxfwbksx4x7twEF7AWdQVaXUqSU8iTg3WV5MVsyU8oCJdPvXbCutcvfe1t8cQBu33JYmBRKWDoWN3Fv",
  "key23": "2egqyq2XwyDmVrU86xdrG58NpKz2VACSWUatH27HJxhQko7mrikW2rm2JMVGPZtyD8NEdfAJR5KNBJLC9qZaQYma",
  "key24": "3XtKSYSjqSarWVVF5Z3M6kpd9WxAwWzw5CJ41HaNLWbEjH7GoLtFRPS8Zj3UrLULiwhXxVbUi9D439CW2BerpcWX",
  "key25": "5ttWKpQU5oY8j63ftgrKC4nnhBot7dyHtYzQBogNTuq84y5sxMU2pPcRrTL4xDLLNAuBBwry28w3Rt47fF9SeKPP",
  "key26": "4yiupkD57cnPSTc58y3WmwksuNHk3QHQ8VJioohk6vYeH4RQyuNEeEuCFisSwLGJx4cQtN2hLqS1uSUL1ekXSpQk",
  "key27": "2UvyC8EBwdNaMuradchrUE7qJ3WXP5dgoVF79Cy31rQECjZBmuhtQeeBSmAbiBJipmHdZnFJaufKXp3bVtXJb63D",
  "key28": "3wsXfVY4A8qUcWakRXboFNvXm8ModSEwAC9kf5gi9QQoencaucWRJz9ZhrLk1xhkXj7WME95FWB77pUDHAVJBpo8",
  "key29": "2pGtFYRzmFzxHg9FgkeNJboWNsQ6v5VVXSShyCH4K3mKBLstCUzgLRBUrXguBRVcG7YCfG2CNZxYZmNoVCaBqvFD",
  "key30": "52r2urknpJxKfqnnLusP4qQJAo6Y8GgcXyVzz8bcTYDPqSdhJhtKLdWd5QAEgeCiSQU7tP8f9qzfWJ8PtF33RjHy",
  "key31": "4zfsnHNsB5hGJYc28jyvz4c5jo8Jj5F8CkUwgpYnBp8EvXg7DRKZYyp3fVH1RKGv1og5qW5ta1khPNpiaQ3he15r",
  "key32": "5Hcd3uVgYfondcSYwMw4uMU2bfERQnJXs4FP7SYNvV6WwEnMC7MYH1UKvcAZu4HnrAA9VbSdDc9tV1Ynem4wzgYj"
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
