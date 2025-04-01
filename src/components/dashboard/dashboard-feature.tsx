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
    "3HZ9LKG9QMcgaRk7xaMD1V56FzHHNAg9ZNHREPaAVkJw7wWyQCKejSwpVmMDPmXoje8EvTtaFQBwdhZvXA28MAhg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J3rMEQCBbLKkfGGgZRPPQDq2VTz5uXXYJ6eNHsbkRC2syCkfJAJsxP25iSZ5QBmfcYK3trz2GRULgCCAMfvASQo",
  "key1": "3uVe6L6rCQQHcC1vvXRpGXmf6b8Qq5s1M3A6tv8yxfpmeco6UJHnMFQbmmdWy5KGwqdYF3XPi9wKF2a2hHGbDxQB",
  "key2": "4aU6wF8he9f5UbjR9AiT9TFA3atpoS7gUjRngAc4btkxJBNrhD71gqbg2UbJyPR6yzvyMcySUwbDDpewLu2sUnKZ",
  "key3": "Kpk64tvT6oqrvSYrPre4DjTHTaLkaAKKHJHxezR7WgvuwrGxG8ynLE8QMC1WTV9DPr2KtSHhebxa4WjrY5wjU2n",
  "key4": "35oB8Mo8kVxWhZCozTUyg3dhsTJcdzw68NyAeQ5HU4BTdWpR3kKMgote4CXBwCBeKC72fD39566xtoaoMA2LJMbV",
  "key5": "3LmXMzjzUfEFZ5a5bCCeeQ3NotvVYYe9grQZNknzSWcgCsAHpvSQD7tbYM5k9umZfBtmr6gzeGUWhjRzBMjLkjvo",
  "key6": "3nFZmFTLJ4PbJKBidde6aMUubSAmaaNzAWrbVF4pprx65MZrBCFkquVS4f1DX3nszSgTJJFiZcNf5ytp9DF3wQ2V",
  "key7": "5FYJPLk299CGenQvJHzc2zqsonmDQmqt8EGjB9ShfnQDyLJRCe2V2QePZWg7hwvTtuxkJ3bzvCuVsas2CzGuFLWE",
  "key8": "4n79PjvBwR5i6rBsuhpccLFKDhoYhCEAbd7KtfZqZYomWvPcqQPXqFre4bNUhipacyEHoG8JXNrmJHE3iPpLUzTy",
  "key9": "3rXLMHbNdUPv3dEbJBCTW9jj8FCRNoA94DR5RuJYbCmKrapk7eiRhKv7xVDgmrE1eimB4eQr1qvvqACZRnRMe4JV",
  "key10": "2AJfpUUWZVB2HCGaCGZUAiRbeHaic3GPH1w7zeXbGy3iqcF6h3xnTWQHdodijv1JaELEAZupyVwhKqTF56hZegrE",
  "key11": "2PGv5US5tBKnvtxPwcMBshZgA18LimFNDsbMbLVCeLq8gbBpmBXwWRevsUvEYRoG4mEGyLzzR8zNqytb5VRpzDB1",
  "key12": "4FFmSSttWBb139GX2cbF4rszQNz3mWo1qgmvqKm1EiacaiVUDgUHJjFYawhD92W6Xeeh54crHKxfHZG3u9S88M2Z",
  "key13": "2FwRUpFXGH39bDkovr6583wN2FcCEYA9tkGjoDjdVLXZGspBWbeDxJTTejPMZ2v7LVzmBnHfzGfLDqArbVU9jrf7",
  "key14": "4CiNPEitH4VHgTpGmxmneEDGcEXsG3cHUeZxscf2VA96eob3LsxFPo7ThvkCkQAnYSrHFszzBD2b7hySJC117cbX",
  "key15": "3mZ3AVQ1v6q9CA33v9thmqLW8n5mBev2BFhGawbWFsN8RE5rNDgwD4qs97bab5jYvbBpniX76PT3RPz4UYQVChnP",
  "key16": "c3kfCbofErpCJAsT3QuH1whEyneoW3wW3zWGrgrH246j5gEwmKuoRMNsj3HzC4B6447KVE6UywsshYPUcrHDpHN",
  "key17": "T3vYhvRwisdxgfZCbwrcX4uDyP6zH3NRjJ8F4B8febYyKoQVMuBSAHPt9dq6Uk6hqhFg7ZgeuuE6pDh5dR1G6Wi",
  "key18": "43P5qzhH1L4XFjsCRuJBQSbQu973HJ1FSopuEE1EvW81ysRNMLPqy98UegweHXvFfALn9dVJ5LSwFVdwvZpMeGQm",
  "key19": "45PLPdsY6N4GMZe1ivY7RbT5icmDWvMyASdtfGfyEaYHTncZPkUtmdxVoqAmFR7HrtZuX2tFgDE8RovmtYQAY6Fm",
  "key20": "3RVfQuKfEDMvX9kaQiXESTZgFQSgg1reud5Jw9baexiBZ7UH68taG1EJhNFPxHRTZvFGmLzGApUX7MxghFgs2uVz",
  "key21": "44VpEyNVPwp1jkhEBGHQuAVNgfTo8yHzkxTeovhXRbJa9iFv6uVGQmTPrxXVaN5jfieHZTCthLfkuECrP3wXMLh6",
  "key22": "3WM74M66TY5fPNh5Ey6rUyRVubAKAJ5tFAgJWcgJ9wMLRToYRpN2uFJZRp6PR9fmL7RJALKeR5xD25BMHJ39QEYW",
  "key23": "2z9KSJfw5rUs82iBgpqRKZg9jhUSuCVT27LMTdjMCMj9MmrkfAimWx62TYwY6s49DDP2jTjiyVhDEMAbhckGs2zn",
  "key24": "LxMbXMEgEmJQfTD42bZMCSTEbbsXUZH8HWt57RQLESLCuHh8WNzDGpxVFGL6oRgUN6aY5NTGzNWqVcBbStQgRJr",
  "key25": "3DZjE3XsbPuEz5HKWVnMFBUn1rckNuE84PnW1VeqBLaSnqwFGmnuoYbQXmtbcFQ8iPAUUUdcDQCvZRbY1GpjHCb3",
  "key26": "5ynhcGNVTarCZYFDsCsvuSPQpbSbFVcWKPDqCj4jR9unt8L8vRuERkoaSUN7vnwQ33RKhdmMPMenZC5ttgFvK74K",
  "key27": "rXFDYYkw4bxQY55byjZT4GzTGVULXaXKpTMVERZyiaBLjrPscPrT1FcCn3GaPMESmophtDxbQaBxgV5DzYvuvTE",
  "key28": "5yEAe1sEBd2WXDQfeqMtBJPxgYeM5NvAbehQCK2KQY7HT6tXYLBqWMwJTkn8WV73v14vU2tcPJoZ8xRHtQ9Pffh4",
  "key29": "4GsgSoXQ11Ek8os2E8vxXaJihtm6fpjFr6vni8RLAbrK78GCcRMDQkuxLYxxrJNjsCjeQywQh8hhv1pXsWf5XwQm",
  "key30": "4WsNBQKFRrepvoueKntBsTKEVTzrmESFMriiHfVdG8d1M2t65TbtZ2SR9hSWi1cfgPYkJVW2FrARSoNiFevUMz76",
  "key31": "2dbZfXiKkL3y26PA1nduVmh1G8x9AnVKnpPXtLFow41UtWPDbSHKrphg86wAKi6QpRT6Bt2EZmEXeJuZk4ib91Uw"
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
