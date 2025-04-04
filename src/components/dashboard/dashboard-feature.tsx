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
    "3eURenmoz85sPzcTqfuPdG6AWE1pNATS8LE3adMxU1rP3T5dy1XxEoG7gDfnCupEtNAHT9WkAyEHarnEAqyqd56X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qu8sZfkACaGnQAjbD4y61vd72RiyKhyicGsECLw5hob2sqxDaVEhLv2mGPEQWohUyr2T2sfQMvRWaBSFabiERcY",
  "key1": "3TxMvx4UqADTRcVbSc3JWvzsTMAGDkr1qHtsC7XhbT14svzr8rXnhRj6q8EUtUVsuJqSdxyLjPBcQFJe5chVopu9",
  "key2": "2ctr7yzu4U3VuyoKoMKHbZ4VMCfQTqunzcFMhPWrsS3z2eEDCqtHEFyFKFhSs44EeRNBPQKoo54SiVGb5XpM7fsL",
  "key3": "5a1p6mzd8Bgo5aimM8t4CJsysQ2VLSPBSKbhPWyNRim2SNBRFBcz9XB1VXf26XcAFD5GgcxaUTdX9YKuhh9tDsdd",
  "key4": "4RA1GoYLHwamdFTfgCwbvn3mbXRhKggELoFMUxTECJ2wBvXowStmmjTw3c9U9T42J8m2x2GGvB5wgwn2t99ry9hL",
  "key5": "5reMxBvLWyRZZok1oVRX3CEZMsLHXzMJEnyx43K9efnvynvk6qWGKQxkEfZe6V9xidHfxeKv6J8bXprCBrhfJjQd",
  "key6": "2CB5phQvBX2jo2aEdDF6RUwR6sopHrhXHuWdT3Mx7mwEtPjTW4UJ6d6b4hbhb9e5iEXQug9RH7juBvtMiJNboo3J",
  "key7": "28r74XvVVwQroxXuTCe54iwnz2hQputPjieMZFqBKHSEi8uwC6WNvkK78BNWjT634hVcrFtK8cGsor9dvoa8Cmvf",
  "key8": "5HxBbX9yksxM5226UzUPXSwAQHgaBCkR1oE7GQ2mRAS4QrTSuZUMEP7QCCwLewxrszvrUeK8RQFarEKufdarETfE",
  "key9": "5BK7GZQaGKAxWs4cfrMCuuzBjyCNL9XVA2X9usmuH84ibB1iHkDTwNbRaebwV8AkyofBELHngbDgdNedsQLT4FXG",
  "key10": "3iH6PxJqvVLFYUAVn9JXhBovDcrouf8D1rPWCwKZ6BH5Y4cs9titR6Qtu49o5hXjReV9qc26x43weTHvF3cPmeLB",
  "key11": "3oXsoYEXs8bqCCGx9jXQ3XrPUGoo7CUqmKykewDzauSs9zDEbQv11kPZxguuzoowPkRuisGxEapSbCCricRyxfPV",
  "key12": "4MvufeP9vBvjSLqUDxYPVUjk29HSLgL5gzwaFXXUVJ6dgLMyjMgc6m2TCfGgdew2gtcKwSGt4nDVTUNWjUxB2ywX",
  "key13": "2JdZMp5S7ZcCU7H5W6ocG7QEGYQLRK3qyjpFws5wvy7d4YRxwPnekBLEdkL68gCbNH4D27wzWfCWezfjs9idjzr",
  "key14": "4e9h5Z4NGLtGVnqazZavzknugeTTV749W2oyz6bm2TESP9PC2MwQRaUyecJELsPUreQ9tj2u3b3JwsohgLSUmNVS",
  "key15": "nXxdLQUjCLKyVsMx49X8DkLgQuvXiVeX2TasciHVYTeNg32yNuui5tk8k47YhEW3wn111p8K3BsAHR6kjv4PfH5",
  "key16": "2tdiYdL2R6RjdoMN8fzDKVuMUsmJvEXcyJtxQpdycV4x4iMcbLadFpg8i63vG8E7ik9KeSYC1r5Kxz3btmefRFTu",
  "key17": "53nZ1a8ZEB9YcNoKTSjgvecSpn7W7QNuPD1Z2aTBMHcHPF5Vgv7k8eVZY51ZnFLAzpeLCWvKx42AJe91s4WVh3eU",
  "key18": "3eLY75hfr9tmmW6wcrFAMmpqiNj3kobrDM1v68YHFfm3Z2K11vvfx4saDdBQnqZzG1iXndJTy5FdqMgn2fJKb6WP",
  "key19": "5Y8EiFbwonoJX8yWTohQ3mQYo4WeBRyMTYPkKh5GWtg35xsNkKoFTRDXSz7HgpDCjuKPBFK1UzZyaU9krAASBSD8",
  "key20": "Nf7ekEz7pEr13yVg9kKkMKhea8mvGYan73hgE8L6v4tsfuiUMFoXiJVGPnnNz9XF4yetrWDVN5PJanA9hQ7DzEC",
  "key21": "4DcbcoAaBmUyfMRYueCcqxNSuT3AxM2LUT5cBKjszSfeEBA7xhPiB97WzBVkE2vn9rkUkQWZ54FuiumWqx75Sv4H",
  "key22": "38YtReATFmQmTCWbzt9iJ1ovNZbcrv6if4THrKFfJnCxrhFBTTsyNbmxyhUxpZbYSZyXrHVdvsrwfFstGsxbKgWP",
  "key23": "56DWB6UJgWe8Psn2u7F1xZqVxtHVbR6ZigurCJf5LxU4deUWwNqv9nq2jyAjXDBhzRLBS9ZdgUsRV25XyeZZ4AK5",
  "key24": "bxh3LG4gHraex4LZcnPPMxRaCscXKwCR42da1ofhB6zabPQzMhwLfEj41MaoVpryFefa5MR62HTUA2GUJQP3VcN",
  "key25": "iBmvkyrCmS9KCDov9U5dyig1nfN5rUMaRVaNdFWoeVUv97Pao722rfTqLU9SuPGxjfbeTHjEP7CDSNZKz2FrXQn",
  "key26": "3ze45vEH2JdbmWhhm9seAQwGia81zpaqxoXk8WQStZ2Q7uYN9kciTq3pZG5LGCuFZiDqwQT6kWj77Y3JAzy1AXnE",
  "key27": "3mg9kZdeomQ6CcyiWvEar6DHRkKrZbj2s329rGmiSbSBXAypyR8z7ktxa86WZj3yghjbuiJpcEpWwPu6GHjabnRv",
  "key28": "33HobGUYJBn7YnzkY2vyy48yfHFsxARc6Rq2BmRoETcQwpEhAyjWDnymuNMV4ZTEtGm9N29ksnNaoYTwXHBPd7Y3",
  "key29": "4bppJuQZnHY9AXinWgv9shhirxKFpSw1oqEKQ3k2VorEcPPwJ9jYX47874RdAGdXhewJkPwFdnpDSTmjrKfhpL2a",
  "key30": "sBb2fyjqWgYCT79qZ6tasu12pSBogmfP7sSNyXL4m67kMC3ihxZBAmXqEiaumHo1XmLD3fUNVHHsPucTY8wp2Xt",
  "key31": "G7R9MERHjG9KBDGgYKxgWdqq2mUgUAcyUg3dvyjgZiqDeKxNDgYAPQmubfG84HuGMfUUWRrnrwSTL4xpNi4ooRa"
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
