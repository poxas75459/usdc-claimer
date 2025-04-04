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
    "3fZ5EsUJhBsEikuw7hBAtDEemLibaCyAyLabwPLweenzq4MJQg41iytdmAv16Zjetn9eFVmV8nrKwYiiM9h4w2a2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RN7TaSY3ePixKMhU1rFww2tn3GcpwrHjzfZbTxiRqDvZWDcY9MZgdjBMBdUGcodwhVKwds3SCHtkgoWZ1zMagij",
  "key1": "SfnGjJZN6x4nviF1qKX3bszCWYdYhuhcoiwJkxvv2qnfHUxpdVpx7xd5tebgWXH4gE83yW4Y6CyRsHGoZn2tVCq",
  "key2": "4BLAHCv4rtwVRsHenjExA7Sp3rqF1doWn1smtjeYjyUvjjDYrk17p4SbMGo3RKenMsB4LcwxhcrWiJfBq4VjkVBR",
  "key3": "47EzLmoYdZYZ2hYdW6t2Grb6g42qj4VtLhNj5w6WijwJKrPZ4Z4bXV4eiWZrYw93kGxohP5xUytZpcUeiZL7XgUv",
  "key4": "4RAXP8seXytvTtcaXPjBRxCH9AbbjEWiW16C45vjxx4JnKaCwoBwUJ8QEbwkBtHLjvSRZ3pcM3XmCrsaYkJyw3hJ",
  "key5": "2RMtcgkb6V4bX7EPRYMFpz56dAuojyAnipBJ4naa67ZJS2V5Zqm5zyRGuLWghKhioWsj1jgD8oVW2VvWhnxZhsxV",
  "key6": "phbq1qUmsCKiqJr6sZF4JrP1KBFpj89WXnteMKtm6x5yNyn4ua3FqLxvwR9sjmZGayqRzGCnkT75QBFgwzsm2Yh",
  "key7": "3UUaNdTjZqmYwfAooHna79WkqULBVpKpJsCA2uSd3s3qZt7aVFpksgi6jkQcFrFHzKVRQFgZdtWjr49htc4SJhPD",
  "key8": "5WpHEZTYXp7hDedLGoxCYPMfTZDi6ugBZJrk7VHrACRy8jMEKJoYy8LhE9wsdosM8xr5EEpejgdxJLBunJkqZuXS",
  "key9": "3spawXb5VgY3u6JDTFGSjQh1KWfL1poPhbMLMiXPvYFQpyDNfJNQawcMWERUCgBSeT3t4AWpKgK83wHYVK5EoUQ6",
  "key10": "2tvS4TXFvpJ7gbaNaVKgaq9ZosLmefeNRR6yipmhs6c3ZbjMjoAyFzPWVrAqccMb1ivwBbFyASmkBiX3WAPekUxy",
  "key11": "5rkVeT64GEAVCrXzUMW1xh1jdiEA7muhJbU2KvZ5bCRYyhQ6TwKUZXw85PSmJJrUU2mWtFtvhomuA6MedSM7whbL",
  "key12": "61ygXWVx1SPoLF8cbcRDXQtCmzzyXPEiWRdTnnhkVqiEc7Ccv898fxMcMQuU5t419hWc1xKxxSJiMoEQ6uyEQGz5",
  "key13": "xRPqjNPQKeYmpsg3LQ5cFS5qc1EFJooS6d28tHEjdcYTd2oUBCe1Nde12XHVZoNVbQL8thZaWE9xVfJHrenjsqm",
  "key14": "6pmTxeSUrEUgjadVcJBbxu9XwKx4YDo4cmgqVhGeWqxbn6m7839jX26neqf9UrGPiGihSpxLhhY7W3xSrha1REE",
  "key15": "2Nv2ePoxWXAYNhEJmX8tthRJVRh6jD1PtPNTFUwecfSGTah4Ynv7DYQENPDzPp5Jy8sajNXTU7XxyBRSwLEskLDX",
  "key16": "8kZFJT317wrZYfcZifXctQu8jmWZYWR1jxmYwDewPdYrd83WxffhkmaZgS9eMyZLXGyQzhtSjPBNHZ3B97PYrFF",
  "key17": "WL75fye7CtaonBpsgUWUHDPcP2b9DeavcNU3uMHZTdVT3NiZTZnVs26CH5k31nFH9L9ituEqdki28tLHzV97sm3",
  "key18": "5QQ19fUU7cWRiHdJGZcE1mK9fkWhYJYGKj4KCma1bcDgde2Xw4MPwwwBMQew7vrJu5Emm7UQfHnYaznHpkfTDpMz",
  "key19": "2ue5ruM6wGh9FpecFt7Ts1fPSNvzUnVF4ca8QpUb6XJTrBehNLdiAW89jipaFcvG8zWkUB5kv4rpvYeEuV3NV5Wb",
  "key20": "3TiZwiW4E7pp2kBS62JnsTzmyjAm3Bw91f9ocGoZRDZ6ti1ADsMBLVRDgGtPkvk3pnLnAiDXqwNHKdJsNpNGmCyx",
  "key21": "5GHWG4PCM2ehpV1GsheS9HSWvDGar3sebDMRYoU2XDTP2TrmrjUccykrLdXNkRR2zxV1AnnBDVZQ7fRSvp78uops",
  "key22": "g29pHGvcnXypgKsKSAD9AadjbxDEK5gcKgpKTLesAcUKP3VtSpPYpo2bp7FWQYN3QMTyv54rn4r2mPoYAw85jbz",
  "key23": "3q1xEtb1iqBAwBHKsrZDTGEs4cNY2Weccuv3u7U4eBeMbn5stQ32A1hFPbmM8nPHVjW5WFEHo2umRBpEvTAwCYR",
  "key24": "59skVJyMn5bU7hYUP1C3VPoAet7C5Spx4DP5L7dmwskTcXf79e9ZkCC8N9s4Et3cDBtyty7eg1dMmpaurzujPsJA",
  "key25": "5mGytXs9Z8ZyanzQaxxiqStZ6q5B1yk9YtTDGwsMr7hLwsaXHyGL1UFQTuKzqc99tVdMpra22FZP4oSpDnEn8ibA",
  "key26": "3RdvhBgDpRBJjUJxrKFPenPgMTs2M8YVS4fQpEVu2dzEgEjvZSPh6mVKTh3nBKqYbVmz7JYwzHZEdAXmWg6qCWCZ",
  "key27": "4PbD1miWbfktybsyVcsKLefrVNf3dYEbPZvQffAJbJiXp9taVwq7qCatwyiJTCREu7H9oyLK12JF3JHeoG4LBrAd",
  "key28": "TJa1gjeSzHxKD7CvT7LmWuqhJAimnqD2k1pccBPrrf4gVn9LwKbobWWtGyG8cg7KY44N2sVJHFB8xQKzbCaN6gK",
  "key29": "4igH6UUCSWYkHZp6F46ve9Gzkt8dDKRdZ9hDU3YAXMbxczFAzDaw3YnDJttay7HhjG6pCnnhjscY73jodgFe6esZ",
  "key30": "4zb3QD6BpzJWNqXHhRJw9Z1ZFNkfAUsDy34CsFMzBRqrp6GAVhv4PCw189z3DqmPuffMBXcjcMKTb1QnPU79JuoV",
  "key31": "ZbKTB4ByQvG47ZDsqB9t4AgJwsj6MR18GttD3KESF6dRCQb5EN6D13ofAfZ4MGoNg928xaLLc89Ux6yoGgvckgn",
  "key32": "2juJWXtxMnNWt4hFr8umC8wXB8CcyoFpYsfQBf5iZ7jNPzcokB2fWNp3AcDb9cKfgbDLNBpYRcMPVMJYtf1Jhpjz",
  "key33": "2EGBC5BLiuybHWczBW15HiKcc4xY8XpK8EaXUc9R5w7f8rdXHoG2NkXZDLkRUJ8xe4irAmUgXcT2T9DPaiTgCUab",
  "key34": "65YBUwwFHTQNBt2EEhHWtZroNaMjE3WEAdXnunFSwcnsEKkDxpA85NJAuaKqQVpSxz6FxRgiwpGkeE687n5GsohU",
  "key35": "hZHeiUxdrt7xt6aPyJ5bRSWCLDesZ9VVEX6Tp7KL3XuifEvQeUazq7dkB7XuMXvMgFVhs8rH1WEhGy4WGA6FBQX",
  "key36": "4qxDTH4SpvdvpDLfgNbkB8hNwRSrbtdJ19VKVvCGZZiXePMfDZ98HkzAg8PXHwUGULLknhj3RGd1G8n4JYCTeFsh",
  "key37": "Zq2qCmFEybChbAfHBwE2Nmq4pLLd49n4HGQvMT8f9XpyRcJtmJK4kMpyGrGZCFRJQwcXz45Fh2sEpBeLownQsyB",
  "key38": "5r2NS1hbmcRTiJrMtpdLjiNZeULZXdT4JthST5gJUWBKyn4roJrB391gh3CtRsDCYzaxWseDFv3RsEFoy4bbiNWJ",
  "key39": "9VS29wvJhMNc9Y8kJT7zEd6FLDr6wae4ago9X9znoHcpQYga7uWXtC9fSuCVcZoA5UqwaTF12ioBXH2scS2JCot",
  "key40": "3k92YZWiTT193XfuAHNe9ezmyQUgwACGWKhrxLVHoUS3RCYd5P7kuEbvqSA49tpqMqcMqiLjtUAsqWGHnPChseQG"
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
