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
    "ff77BYbpbycs7Z8NRAGar5aX2X77sqRKNqonB7oAxjiLyii7J5WVaTxVAotz9Fvd8Z51zwKiezGxSuHjsxpdceZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "irvZ9f5D97NxwPA8NnuBTrcb7SgMNQHoPTahdK8P1twAjb3GsjHsaUie7n8dPyrmM8TdP3EXuxi3AU8wrixB3ii",
  "key1": "gY82snZBbbLhE5LHhBJA5RyZr3vZyATHvrcm1Nav8WEPdQz6KEwrzcqKTwL9z2NsXMuifxmEkJFHdqqorg4rxA1",
  "key2": "4nfrj5Zq4kVUD8fgzJmhPy3q88uqSs57kPMH2fEZgpRHYGXtAMaq7y5qjhJ8ay85wt1jps9CgHqVYDLM8jF3Eh85",
  "key3": "59bJPaNouMTLpytE81s55koHYr2dds3JhKmVTNbNSWnSRNHaqEaaPKg7za1uGRQSQWTi4w3rqY5PGGH6mH2qXgkd",
  "key4": "JJTjXJvoP5jmffRhm9tVdPtdJyLri3yWXDzZbQuh4cLkXwsBFzgVVJ8ew7QQfxTzq2QG6sXRbPxLMZYF3renbUB",
  "key5": "3FjyLEHi8afpN33Pk49iyaGgLbBq4rv6Sbin3TvWgL837ufz9WkM9jNGYADGzDz5SS2SAeJ7viNhzLkGDET8sTK9",
  "key6": "3e6J7Z3e5tj58JajADdkGCoLaRW8iL5EVCVVFtyAQ18ztxnWopFE9w1xStBvbqdxVpujQbZcCeQA3yaQCgSPjK5R",
  "key7": "q9ivaunM7LDcKKyJ4aibuDYLGqqtzmcaB2yTA5rJF1vaq3gpfEraVxQxuw2KTkUK6un6x6gC1HFtzBv6KqSHj15",
  "key8": "nJN6wp2o9oySXYJi1NxSrKJvUwBkRrF4dbvM61p5qaQzuKp1os8tLfrimJd48Mj6JwDeY68CVVtRepfCLLBpEz4",
  "key9": "26267ASjUnqMZEC6yrK87CjPkfvi3ABd4mkmVKEyixLhM9zZgTzghWLZZnsTVX52PcnTbzcpuNQ9nGYrek2buNLV",
  "key10": "41F8mwz6ESccEbZ4xJ6gJMpNERGjh9YvAhwGUTssG3KgkjaPPBjrCW2S4BtGKKN9zRezNEeSGsBWPETTwpg58pH7",
  "key11": "5NPMxwUB85czZN3nRYn6rFG63My9g5Mjjvq26JgQFWmpNaes5hY711km4iy2EMecADXRBuXSwTtK7Q4W8uMRgfbo",
  "key12": "2UWyVSZHDTUP3KnyRG23TaiazzWDb8EXdLrHrxeddLfcEXYCiWXCULzndbTBcCWhhE5pDCXfXt5HdQ45QpeTRy5r",
  "key13": "5YWdqroph5MR9jEoH4afeQAxzAyCJ9WLXq8L1wPo1uNTiXn3T6ckyZd7bMzmoXPCKM1RotA4Hgq5JBoayphUGjqs",
  "key14": "2XsNuhHoLHjbX8jM7K9idnzDDb8ziGoFqjMVionPgQDKp9Wj9yrctdPsa2sXZDoz853aJUfQhC7C6tz7zBHpQXVX",
  "key15": "2GLosJRtVDwwKAemRAVdNQA3uhPcZndvjopHjmTMcVQMb1fDMP8oozxjV3suNPa8tQiZqgWqqw5Ezpn61fn5eeHH",
  "key16": "3Hqic5e5v6Td8KNhZp3tsnNwWmESHxiw9HocXKVH1eyNFkU89LQ9KiD2DD7R1NPDgYRBiuKBg2wKdQDMTNVBu8N5",
  "key17": "3eVdsjMFpVxYcyWrXZTRhy3wsdzKFKwSwCWV8bCC572xgDMPQSycHZ5VgqCVAimpKf4exLLNkg8MoZg1KNK4ov5J",
  "key18": "5oQsLo7Fx5WuDPJD1SYBXMSJdcriKkxsN3zpoGJyGzbZWBQkmNEuQBEW1R9Zc38xoC7cG1FXGNRH7ZDjHJRNvPJK",
  "key19": "4GpuzG1ykES9SiASzzJnSrAdBvyRF9gah7W7cfBwDuwwkzzhp4nnPoC1YWeCFhkm1uWWdnpMp1MGcRFiL5nZTt5B",
  "key20": "4ojzEAf4fd7WcVKbJgT9mkha3pcJ9RNg7FVHbzwYTBbdb7XWZzpA1EyQCLaTy6PyHXFBgC6hBP5ubo17xQNeNmbf",
  "key21": "4hZBptfPfLD48oLYnDh7QXQgd8XqxHfrGf2QoBLBovPfa8CX32oQEBqVBa6ntDBv9xhVkE1UKKoWPrJqWHcGhGX1",
  "key22": "Nss8dv4PvcCCk8uBF4EDgXJBnezivyUL5FpMJWz4vX3WehEoPTtysEGbjeJFUtd2kbBHxDJBuqTWgZX4e7Vydh5",
  "key23": "2ADy75ShwRh4fBbcPvNgkCPmeC1WNPds1dwvzb9rheSXJkAfpCunzkC949ZYgoZ1pebxQgQRr3gz53rjNPpYdHiP",
  "key24": "wMLBrV6JSPZdmYV9cgfJJEWxiEGRp9o2Ht2BzgdtoWSko5oHwGw8NxqQZ52VrAjdxsbtYYgztdceuHwwarri9he",
  "key25": "4sUGCYbbY4afZs2qRkgCfcMRKQV5XxoNFWcBP8HgKCEG8ugAKPFrd3ygvBKJdV4rpuvpEGN2hbZ1JfzH4S1uEeXY",
  "key26": "4dwLVRkuqjKRAfSGz3mFycvPkTy6NT5NsPc5ruH7DVBwkuRh3gvTG5LFBNW9m5Jzfr3Ft163QZpPWeX7krbm1UPJ",
  "key27": "56sWsGVU3GmVwSckrw6mTCiwonk2epAUKJp84vt1kpewg3zvt5xCFKw1D1FwXDc27MtRx2NFv1frQ1VoX7CBGGcD",
  "key28": "3VSvEByuDYHUDzyHDfWpHCr7pgM3z5DYRviKqcgehidpqTPygrNLRUDfCrg9bq4oLpHDwAGzTGvJBEiSMXhZrxEX",
  "key29": "AHWXF8cPfn9uJ3C3jEwtECe4DJ5QK7Dtu3s6tUwVbekbEcGA7EtiRLYgsoDqQTmNMZMuaMSiqR9XEp1PRWYReAX",
  "key30": "5m7yXb6RzNBpucQ4MDjNEVrkQTnPZXGS9wfWuXJLVUTcN76Vw8oP77iG1yKvi8cZZfPcqVyJ6NV8Jv9e1Lq6qbJu",
  "key31": "38g1SW3b6RRLDX7rns8gUMKLAx6mCamXfPT1o72ZouK5F3jFAAzimrsatNp9TWTBKpkLeZuKL7t2XNnJnAHqbe1T",
  "key32": "TG8mLuYWJLVaqt3N9FsA2cVLbc9rch8JwrpqX1CsuN7p9SNRitHz7v4YXKTNpMPBHxHSHZED9Ac4RdYY4uiAn9N",
  "key33": "ftSvTznv6DSj1QeT8moGM2HEofhGhL2rywyJf9FrmS66z5Gyntkt2Gi4SLnTG2BkhrEwCTSo6wn7Sy3YHVw9hWW"
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
