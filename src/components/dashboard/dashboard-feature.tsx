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
    "42s7u9DvdVvhQt6vdVAWmUQG5WGu19c4jqVAAivf9Bi6rXU5r2ifwKX8KbddeJexpgyLB7wXFSYGSXVZFPpm7oBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31KYcpiqLjfk3c1uTf2DRUnh3u58jyC9jw69ici1KvtDHbJomyTu5GieXEeNucGZuYFTVNWpTrVutZTReRMncn2S",
  "key1": "7FPvo3unjWwgXeNksTUnVxyrkJk46hEBY6GLBMP25SJqfPMZ1dgyNHS6NnmwBzRotPo8A5H5iurLrc5U6tHe2py",
  "key2": "taCPLj8reZn9nd1YFDDsDZoPfveXcGXJXDThWmD6erkLxVrayKZe9F9sYWyUexSSNsNudZ5B2Zghg1YCVtRndtT",
  "key3": "2sUyyVpewBDSFatXqgeuJzUX1sMGZ3W4sEYaPqjfo8UX5Z9YrZdDYt9LHJhuKyLFg3cUnMKkxfnXMtqP4tdq75qS",
  "key4": "WFcrPxwCiL8ng5P58JJqc69PZHcd3JxG17m29EkEdga2MrJgTw2YWkFkcLbf3pRF4MXxC13HgzjcWBzbFYZGHaR",
  "key5": "2GmusD2WDCnQeuhjDHimuXrfAT96ryQP4x3QNhRKnJGXn372wd5UH5Z3wuEBPrr2oF88dJQiwZxto5ERHgywUTPc",
  "key6": "2C4P5n6xXtw9fRGPwG1shzA5tEq6xmfzSKPCQQhPbzucsc27zfPauAvrUW7SCanCbzHj7tQEDZM775tQriTmAwUw",
  "key7": "5dJ3n8Tvhq5CLqpcMAmNiD9G8niE1k63A596wLJwePwAgsBhowhXEjHucumYC4cbVCZXAwd2gKrDmVu1D39JbtB4",
  "key8": "573BVbs2imcwCcFhxTNynH6RvLC1eTLFX8HwKxL4JvzSEr5yZG96kkkELrgg7nbQe12Ub2owQ27WnwJ7FiuTaNUM",
  "key9": "5Vd4BiUNs2yZwAxVciyPNSwghr8mQJg4WPZXKm4iVT6AjDSbYUkgECsJtJtb33J289gHg29wb3HgnPh8rZZXyABg",
  "key10": "G2goPxfyXopjHRsvt8LFPJq9SbS1tWchk32VWt1HWtcZ6Ff8ujcZGPhvmLGUfbJSmVAcaVzPPdoxCsGv5D2nDFR",
  "key11": "DCZhPX6aVRGi2s9nrnTEZogKjttdZ3cz5uYMv4sFzEVzoJYaQFn9x1Y3tdEyW1qBcjyAVDnrS4Ck7xzic8bZPek",
  "key12": "5CyT3mQFJjp1Z2d7a8bRMDenpo1gfe6wUSV7UsUEQ5UgzbPHmqg3staXF87xD44TWY58T1kTjFrEWY2CkawKoz47",
  "key13": "49bZzisiV9uCaQeAWcnJDXdKQiCJ8m3F9WsbAeG7nRt8GGT7khuNtJH8JJGorsHnu4GJQAZx1AqocgjnFuxTJi58",
  "key14": "3BkFF25yXgZPHJ4g53BAtSu8RKnsxWqFN4hLYgkWwWob5ToZDoPPJHjmjuRK6BFsq9CRTpuydWwNntGp9bChzD9e",
  "key15": "3MjTm1PZeQtKmLTWytteeceiFerHmZKNyZxeCcfgConCbXeQ1suyoERQ53gVbF5nAk9YMAjuQUNNBtq6W7kMSUBB",
  "key16": "5SVQ1RdP4pkxHtfHu497eEd2es5aU8rTpLcxX9fRHrALk4zpSgWjjfeu29HEMHRvTSDCv7o2xES1driJi437uh7v",
  "key17": "45XE75oBiuNAYWkW8Wxs5XffzPxUtn8DaezCENfvPsU874Gqy8Er7nZQAuV26bBpiFughnPVQMMoV71wkVLYGtAK",
  "key18": "5Rf1yrCzjzMaqPv1hWPVrcvo7Vr9hhWzMfuvwsMML12af7xNdvgF1A7rqvEPx4EZqmk8j3uggh9MD8yfWwJ8fLoh",
  "key19": "5QqyUeZHYdaEnqAGWq6QY4Nqb2E5wbkMNsLHtf7W9UEhJtZ6e1XHAZzCE2qVdmiqGi5VqdvNPE7Lg8DGhoBhexxd",
  "key20": "4sQB5QPrryEsgPoRpksjFhgbHz3xGD4PvzBUJ5sZiZfZuRgacHwja3Uxv3nfsQczun8VZq5PMDnBoV8pmqMeK3BC",
  "key21": "4cRZYo1Fb9nfqLSdNFvLR4g2bm55c376sWcU2eiXBYNLP64XvfwFHK73SHcCjAmA7fiZv8xhbtLRtS6wmC1uhDUq",
  "key22": "5Rtw2XmM7hKUxxKYGdTPKvrbFYmp7mTT3Ux2wQM5zCJCGLh7j77HnxCUbH2GMybNL5FGG6swhX4PcQRJQuNHxK7v",
  "key23": "4eVLt2Mh2Fd6kXv1hFbs2tFu9RWaqWfAQvimCsjRqr3nDxX9PxDW8JhbKjANtyBuaRapzLYKjUR4EZ448Aj9uoER",
  "key24": "58ukuCy4cYaqc8m7yiXN2cgcTkGVwZRjRxtdgAqjpu4Kk9MDLSFHvJV8nmgoNYCPbSWAbH4HCc1s6bYd1dF9CEKp",
  "key25": "2TFuZJhFRmBgCNXHxRksihWtr1UvH19VYFhY5BmLuptvYimTatWoXkvAeDnJtmAZstm5LSpbwg88C25DqJ6zjnUu",
  "key26": "2uJc3K3KzHSMPaXrE6hw8zjpXNyJEpygCAoHs1DPwx2JdxYbw3iZm9cNJ4Six99QK8bbaV7PPUcoVCiJxtfkpRpD",
  "key27": "xrLzHqAc5322TGfmj4CVKLHs5PW8mYFQaBjsFc4TuyEPRsqTyUM47VTeY3UuQgwHHPnkKLdqLXKDbBnMgZW229V",
  "key28": "3aRggrZKMjwG5NVXE4ZSv4nxd8ACBVcBhkfWZwDwwwXuQSrnKJZpa7j1JRnDsa5xuHJPDRvUDXmZkjVe7aXbG5KP",
  "key29": "2y6bJCG33McobPP43QTTaS93RaaSuqcKwCkaxL54YWXveafifPo3Edn2BizvzpPW5eg8NUEZxiNx29FVUkJv2r3F"
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
