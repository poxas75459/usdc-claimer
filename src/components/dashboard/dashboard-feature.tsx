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
    "xXCFuJZfQxxjBk7njpEdw4D8wT7oHcjsseRGVatbKMrnS4a1TabfpMV9xw9JihyPCPMbukStNPPU5oHw76McCRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Z5MPpCDgZberUWLwXfBxmiNFpSL8txr7ESatg7u7bMRwF7otmPECCnR3eFrJs9EbjEPkdizgCgZBgbkC8WEf2P",
  "key1": "62TD6iG7SMBZmLPucQtJ2dAHhpp9eszNp6zDWfrMQy1fLb6EkoVm1YvpcxVALS5cMbRJydrpxVe2AnCoAMXNYrmN",
  "key2": "jHp2ZVrioFt32RHg2GCfkgVWwaYUULKnBqwsqswLoLGAen5deEG8mZAEoU3kerh8zg8f58sydMsGWj9B8WkcGRo",
  "key3": "3LWHcDnvLpJkk8s1Mk1DMN8ShD8SUkRDnXdDQCxnVvFPaf6e8nYiSZicU4QtonHf8tkqbmKZNTeiGUJTT2VF27WG",
  "key4": "2Te7oxzXdKVyCZ1DEdNGKuuWE3LMEg13En3KXF6Zj6bYf4dXzfQMBiffjobfMD8bpnnEtDFL5cxVJfZVrB2Kgr8E",
  "key5": "2uvuUE7DG168iLZXLT7k5Zej3HiLSe1PvbfDnjdkiLBPKFAHLkvNqdSSg2sDM1EtPpqabvC96WDjpnwSS9CVJ8MW",
  "key6": "4jzc8GX6MHLX7WG8UZd5SbiEtKXSx5NukVoufmCDo4SZAMF3Rmpj4gKovbKXPcBPRX1QcT82mPEMTXidwZMvXtLe",
  "key7": "TPA5Q7QZV2c8Ki34TZstVCu4vxP4ToqFWP7pNvUmtxx7bT8K4LZPuhFKGLhPr5MzcfpSYYKpSrQ4GJ7PZZjf48k",
  "key8": "5g1u6nBW4gEEL6Tiq1HVFGucTZabkHgeR8KfjmSAmvCGkq4vEa4PxHzpzP47gcXtgYbnRie9tW255kicnBFynFUv",
  "key9": "4kaERsf9DvVfRQvs3qFLMo1n3ZyaGLjXHNiHDEbAJAg8DCyZJLEEJGY5WrMT1TrQ3YTVQEWCYvzkQ1T3UUh6xA3u",
  "key10": "5VHEDC4SM75Q6knpRkSs2oNTfyxqar3R4RGpwPiPaENXNfTJVTSWUoS4XGuvBAWHgwTDoby3KeMJraUpKpzpNXFe",
  "key11": "4fLKxfYc7nTZpLFNs8hhDSzjMDzyucQvyGFxt56NNxLC8U2C5R3EwJy4jE6nJjv1rJx7L2DNQWYgLiEod9zxPfDj",
  "key12": "5RopneEgSWZaV8f1kMCkaxsRyyuCGSwKVBTF9BUPr3iQFu6wjmjmJL6CEg5zarmAYCNBAZusaCRMCvZ9ZQCFz7SX",
  "key13": "TGgmtM8gTD6zCUzsVkYPaa1VhdKH1TuB1G77jxm4TPK326yQHBvXJduZuuAAVAKU7DRhLLVy5Fv2sqN1GwgXNgJ",
  "key14": "4NTyDPDNoB1vx3NFNQ3bmsTTAq5pzd7u6k56pEBiQ9ps25qU6u6ZKqcWksUBG4FRAP6oqTSMke2Q6QNHH1SBvZqJ",
  "key15": "5PnY8dcx9tNPKm2UVqw4hgmHceuJZuwVRi1GXJLJAn1PpjSRg2tzxSzVay2prPpWTTKXYCG68nEEaJ8tG91kiEc3",
  "key16": "3ADBUQSaKq2iHmgjAK6SEDwFPtY1ATGGyCez5Nk2rizYVUjPdDfsehvHFFksMce3mJSvutsB4zUH9ZGfDJsJpjGe",
  "key17": "5mbba5LFEE5Goztcc8SZ4VN6VXEaVotASEAdYpSBBTxFdm8cxiSMtKRZQ5Xm3gXMYdCAfrVkW4idozSqg24uPu8y",
  "key18": "2fWUjbZqmjpdWLJn9wM9WbgkfNpWgNuLhv21ckgUZ56tXudtf4UcyxjxiMFW4ckJHC3rYrbcLgCxUNt1hUrw3cqd",
  "key19": "2pZfmhJz4vZNJdsTNPfBNMXmsKLFasBumk3n3pdi9SNUu4Tbruffo9eyZEvzCDfKTf3go4ZAj3uKtFQSW6G6LX2H",
  "key20": "4FqoNc7dPt4XxrKNY3Sh8BwJTiGntRtcwoCG6gGZnqCAXFPwKW499qnrDwqn5a5CXzyu63JzP3YgS82Gg7Z9Mk5D",
  "key21": "28u51GUCcwpxCr2gycRUtfFvbfF7iAuyytmFAK5Cce7rJHWd2b8sQMGo6D32yRiAaxT4zDQN3ZHfcBiuzGuytKQV",
  "key22": "3p3xnvdo3VfzL6Sja7eUeXSSSxxZo1YSBy4MYcndJBjDVnxfQPp5fvRaLiTKPKZLaTdSKpdejuFuSiXegCRCFwiA",
  "key23": "66jmT5BNrGit1ejV3u2oaggr29rKuHetkGhfW1mCGCKKHBZSKpLL36F2CqYpZeA17px85XB526Aik8ifqx3NMbAr",
  "key24": "4odh9vtrHiM6HYFdseQHLEb4XEfUiC55FmU5s8NoXEJFeQjjHSmw8gou3YNgJZu3Ru7K2X52bPemVqA27X6EDpTj",
  "key25": "4kYXj6rhaoqbmdHotKRYP74QJgBswjaMRhyBLcgXTcVLdhKLfVH7fGtSLqCpiM88rM7PJCi3kz7MbqM3JM6kxCeF",
  "key26": "5SLZVC2Y7CNEUFdNZcToqSKCYwEJvSMsvBsbarQN9GSRea7gnx7k2ihfZQWTmBnr1WPU8XRfnJYLQGxq6CMR9Kv",
  "key27": "3kZkgXethfRgZXr2jbwzBuEiuZQB986CMibTAvjtpywZnW44rFpJDddR6RuSPaLvARsbQ6ZTEqRhwBRmGZZWXDRN",
  "key28": "4fW8SNvhzTGgLsf7QRBwLs51raif8gerEqzKXM116irf4iiXjb39E81WM257HMuXt6cQ3kMHqsyeYFLg4rpWDQca",
  "key29": "5mTFuuTDdeQfTRXSxaTVq6amoXwCzTSB1K5isHEpRvv9UB51DfNMoDcuqufZE1m191oGnwjbMY2Go2iZpUdc4ngR",
  "key30": "kkdnZ9aHuDzM4zMecZ1HpvPsmbviPipwm2aGvdgKX7yyJBkh6ePqHVhFb7JCV2Rff22XconyhHeF8wSs2GB1DBp",
  "key31": "38Hv4nrDaF7wzasLWECs2Qo9t9qpNkbA2GtpF6CgE52oneYAmvdHsjyC5VMHfwzsXXG7wkSQ2cR2Mi1WdorexTKS",
  "key32": "4cQrjSWuk5cvH4MGp2xvNk3Nbd3AzqxEL1mELqXnNp69itdfTBsLkxtBZ9xWkmgSFH2yH9vyuLovCmdFMcnYr52Y",
  "key33": "3d4Bdp5YzZ4ZhJvH75sEVuUANUnEHvhhdqqvPNUYCTPhZss91BEFyoPmBtLJMLT8nd2zYeFBHMoUtQ8SuXE1xozT",
  "key34": "LZ5o6Ju58gVapAFchoUFU9krh8tJCA8LvyfiWjwYBixxJpqVB6rX992Uv6jSBDvZaZPXdoTqFdHSMvsm1j3rkrf",
  "key35": "4Z9xYz7hofcjXJXDmXHTXgx6cUXkpgxydshXpctqnvES2hxwrLzUYkCgZsUHgso7FyWT2LGuL7pzpZz4W9JjxxuN",
  "key36": "5kPyCHmMGWwhWf6VAp9tteCxrkswQDUJparLm36vXKL6BrtCAAXuDAonLciW2bZVv8mrDGp2mcZppmfufskFYerT",
  "key37": "4KwLTNFPKvWoKmuRYDgZsekMd2hMvST4fTVcbzFgahmfehGtrqrGF8dDxo3DG4RfojT4eLLNZSYxfZK3kGHW3hT5",
  "key38": "oiSPDJpRvGtLG397J29HuSuSmsPs6WVXk2YZofzV7M7rZBc3nHC5iDYZr3SYVNX5joey4e5BTKQ1UKnt53HQGxT",
  "key39": "5M1cgwCXsEzRSrYxdssxdm1RucvyyjMSVHn8sy1fcignvBEPJSywaJZtTXGbnetBJrzqiHyCcCkTWQQ7W6QkZ7uC",
  "key40": "5r1gQ3GoJNMRN95AFriios4NRsy72FgWtgp95X1fan6N77cYcrWQhtUBvX75QC9RQhcbbodHzPSTZwVPYnnroouW",
  "key41": "vf5hWUXDKj7NZGHiRZgJE1sUfCu29b3DUQudFWiVXp8kxuirEFVDktocybbqvjXwye928awd5dM6S7mL19xkG9V"
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
