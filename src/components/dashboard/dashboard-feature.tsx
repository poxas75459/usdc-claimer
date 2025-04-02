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
    "4ESoxgSrdFScuVDR78hp2UJ78HZL7cefnFLwac8mNiBrUcvLtXCs642Q51D1oBTNQ6UYUGxr1cijfnrrC1d8gzCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DREFaBptErjEyG3xomjt3o8eq5TCVPsSobKTEN8tHAFFCNGLnC3BjGQwbEPBaPGZEWaLegFxL6rQ784qXr1qZQF",
  "key1": "3GvfGFVku9b5xcuB1KQcwE6mYNrjYcRgnPeojE2uLP3amLLR66YT29phBBedfHt7ai6FvxvJUHvnDtaXq95MR3nf",
  "key2": "62iX23eeKqdsJsUeM2oncPJrUzVUytdfeiZe4nZUjZmizQXjVfpSVzj9rvkaEeGRDajvnP2LgfiGNsLQKAnEs1ph",
  "key3": "5Fqyguqbz9CmgzFUeASbBLVtNrnKi6oX1iz3A8KNeEtNpDBoT4dmQV9o4pzHZyqgQE99k5VBnJHjy3ZVQ34XWr45",
  "key4": "3cnpSgMZdBsbejQmX3Jz4NCnw82232VZhzgsRxABCAM8cmxShwpA7SWtdCmCC7DiW1hAB9hmXLJQB61tbmDfFhav",
  "key5": "3HAkDvh34wt8Zsry4iNfcLG2V5CMfC1V6ricd511ERUTBmgKAYWG3jeHSuD4gFkKzn5jTiEHgWTjkVMrPKUa2GpZ",
  "key6": "5KHnUxbaj62WNc62qo3FbAubTyp1FT4YPKuaCpU744FhnCesjYhWsx9rLpV5tyuzYZbxKCJUL9Dk9qrh61myRPSk",
  "key7": "UX1RPr78G1tpFK7Hbjg2DxbfnAhpiFwPguiVELV7iHJYsdgYwJTuj7BW4pjJPAmY91xVySFcMiaPu4HXfWRdnpA",
  "key8": "2vAWrGvHgixyiLJKRTwzWUrmdrxWFPV4yB9UadLytkG5h4VPTmhuhAkSiJ52s2jWCybcBueixWdRrjJVXrx7dDav",
  "key9": "5h6bxJhq1nk9kxVFrSu6c6t3p2qTP9bBx5WSFVFi4CE9YgTha1KwBojbfkmwK1FtD2E4MPPcnB531e5HbGmri3Yd",
  "key10": "5nZK9HPxr8R1wK4Jo9Uw76TxuHyP2uBiE8FSCuMkoSbvmReoauUshvScx9QTNSkzL2QgQa359sxg1LFxawumbWiw",
  "key11": "38r3qcvC5HoVJgzPM8LSu6Xx1FmBCFrPZUCrQCGxQDFKRmzP7i7ZJpyhbzMUxVkWhdceZp2L3S8CHSBLpJyM7bpS",
  "key12": "5GXrBZYKojwT8jWYn8KwZcG17u9f8x4rkjZUS4tsW88XvF41LPQXTguTd1iqK1yBnkphgcvZEKYCSUxDc2hrgoSe",
  "key13": "3PLPVZgffEVbBa3d7VxnfyBSncNKrTTk2AMvP756oYZTpoUUheQ81WxcCdN3ZH7WNGFQAaLxPvhqKrW4UxNPyRC4",
  "key14": "4a1C1copQfekxByxdw8wLA816oP93UQzVaFDCqCMfGkdzAU71vukSV11xjwGatZ3QM3xw4LZuWbYXCniJ8yV1PNN",
  "key15": "35BvchLdmvf3sHwvHpdcTLwjEkd24wFKrUJP1Xm8SXqvFqxWfYwsXBzZY2mMH3cQQH72pCPmDHms8WMJBsvodK5v",
  "key16": "5KUiM22hCfBR6kKaCzYGZ2ip7j9mWHSS9UnDGoFK6sKaBVKaW1curVaY4sUAJFTrc8ZeQEhn2ZL7GYMDjVkNkqdS",
  "key17": "DjtX3GB3UB1difYWQQPQmbtFcK78NTiKd78STvBKse3uaaSV4rXuoRwFCNfiYFqaurhdZSm3GtYqTDFVxUfzUUc",
  "key18": "SJ4noi73qCDEER9L2jFe9SUnc9pFuzZG2ihGeitPgEb7yU8yywupMpQN7pwHWprromuYV18hj2u7E7bsbGPFFXi",
  "key19": "5sRXvQuNnHBs88cCXf83ucVL2UZmvCAixUHUYvQyuMnc5DzZFYidPBUnzg2sqrfAkR3TXrNCcUmSzwAKvrF4ctXR",
  "key20": "4f3YWYp7dLNYRY1nUdBpiJN7j2hXRkofPigW7JtmCjw7SrVm5hssTvsCwJ3M3nc983SuVfWPntnkkWKV7nukJTh",
  "key21": "tw7VQGacA23KYZs8U8nW2QPJYnWBsjs3CmpPQMrmJgi9SioLANoFVomF579x8iXtZJvzCoUUPtEy5t3nBmC4ZGR",
  "key22": "4jtpyCbsiC3ohf6WSqrZeWEHiKuSn2424DZYtpR3UFBm8RLD4SbwVaFSJThXkQUihGsUje78mFzhipv3344tG5KC",
  "key23": "Qqphp1ewdpPVXqfvzU8YYjEZJcNETsJdgkw6BqJGJxcWwHGiGSKQdgUFrZhHgHVVv2gPMeyTJzjAYbWwHnDNNxQ",
  "key24": "4GEktGH6cuH8PsFKNwuVz5u9dd3wBNFKKxtuUif38SGN6bDUFMsmcdNkbxFjiE1zz1ATD2mahZYfYjAWZM6tNNgp",
  "key25": "2MPWwF3FzrL8jU4cJkg9xsamEyKzfh3ZkDoFom21JaYoeQwiudPXGYPJfz539WRJMQZW41Fxk7cJdmtvG9uMFWvy",
  "key26": "fSQURTStazkaMSkGy4eEGaxr4Ym6ddWHmXjt8AKfTqryiYvdZpmMB3Jf6VYWvGHQfjTZ4Fowrmy2rzaqz1GAHPz",
  "key27": "2uXLwt6t1ZQsUNrssniJfKKFBcJFZyZ4fYaPfJRcsNvwGCM2REeULF1C9g33c1E41Z2bYvLNnTnrkPGcW34qgBWZ",
  "key28": "3DBW2daCnKNjW4Bt7Zmjaz5pMB2pQimaiyvCFCw2TfnRq2zGfcAbFgz8iodA75mjvKhBAtFkubMQ52ySuiRDiamH",
  "key29": "2aA16AgAKyZQLf5SRzPzYaV66V7YdMsbMm356jBuEQtxP3f5ZtpLs6Fbdgw5hQS1sqnExxhjwxpBFQAQTct82e8G",
  "key30": "42Z4M4saPdD6B2YGzHKMh8E6AKLBD15RWv2U2f5oAypsKefXP7tYFLSFvMQaujPyKZ2xYoHVXaUJPSn4wjjubX8G",
  "key31": "4tNpQxapZ8ky557gSC3CkyZvyLkTkgubmn9JEuZRcvkMCjEMTRQsTZYvefTG93EA1SbjWzSF5EhwvKA4TLfDGuoH",
  "key32": "4C3HBZxab5aQuCRasmrfkqRhm1o3yJ2D5jVcpU8B3awBY1DFmautQ1tRdSYsAhtb65wG98ndFRR8VjXo6QHhaGPt"
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
