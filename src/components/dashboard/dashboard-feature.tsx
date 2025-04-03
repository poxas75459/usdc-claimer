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
    "4mcf6G1tYNghzX6PN72dUvWDCM7UwkpemvQHAfJJNGvZ3buyHFbruGoVnynKo2pHGQe2svL3XuvRRMVfMSCEvZzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V9nUGSsdQna2bWmc29A76eQtPkCLPWMZsGDDmDCEexymCWn8FpCNiAy4K4feLoZXgbZFPdcdS5XsxreZHjR4CZq",
  "key1": "z6JJRd9t3gjgkRHG5VNBttgacYV1e4R4eVFG7iT4rBUC5Wap2T5YuutFmSwtySBgagimpssA77zdohK6GD2VRKK",
  "key2": "2SEpuLC3W39QwF1xsRhAcMhCQewUogbBc8tk9mdyaURbLKRZepbSJ9wqH833hABByaJpiuWzND68rnCLLAsSj1Md",
  "key3": "4jwjM6LMuF1sqD9idsNzskVMikkWTNyQ1Nahiw5sL8JgzuxfmznLSTKQJ7nziufhtb1zWtKHFNcHxGnfUckXs3nF",
  "key4": "4gS8abqg16NySd1zdc7XckEydT62ukoGcQcH8ts24XjjjT2ybg8dXEVdnXDbrR8oMXxJotcj5heRnbKVZ3VdZAPk",
  "key5": "38tfAidQtaKbtH6xfqMWbYgJJLgv9sfexcELKfqFnw5vfc4baXc6BYLibAKEnpTNut2qx2vPwiGY57St26RtriaX",
  "key6": "2tqaqzqkgytBcx3hCWXGHMR9ectmmUkKUS2wu7RdiwLGTPwXFMeLsZ7AcAvUuh5vKVjW1FoFhWAagAupaj5ZhT9v",
  "key7": "4ycTfAwruCvkMSB84chRfYRagMmRAAe3Fd7cG84vRUUX1UevZr1EWwzi5QoVUWKLmiHPkrqQDMs4jMC3xXYHA9kF",
  "key8": "Y5aPChhndS1KBFFoqeL5zURtYdkvciX5Lz5sZ7by8kYE47gnN458TobkcvKbrNM1875AxebsHoroT4kHrT1nu8u",
  "key9": "Zh8woKuxVM26fW6PQvHHpKci1TWKn2N9Kg9jaPX9JtG5L3xMCMEnJgRM41xsrHoiuSgV1zDTJzcGo9HXsA6weGe",
  "key10": "QSAobMgTKqDRSLvcoJD46KRnRmvaKqFrjykUS9dSu6tjk3DhPCW7Tm9gZwR4tQxcmkJdtb1GND6E8v5sT9ksM82",
  "key11": "hrSzrPx5ewRDnHcRj6dLvnGL1tCZ13nyoLeWuNgjguT2eMidx9xnSRsPQKbPRrFUekaUbxNriXPJNSGqyXQDXVt",
  "key12": "2Ka66woi7rucfcvL2Aw6EoKY1WKssNP33XrpHCw8RivA34NK7duXWRcDRgP1676k9T67jD35gTvdGGc71cBLMhQa",
  "key13": "21oWThYaHsNGeH6PLABLJ4YVkdDA8jsE46rx3Lgd24bk8CDtmX9s7oPFAqw439Cko84TjNS22MA4Pikej7qFwXK5",
  "key14": "dwDM5sYNfFviD36smEMjkoKiQehVMUGmZn1AixYg8Yn8tVbDz4rbzVpRgJgL2EeccTAYXKH34HvYp7DdrPvP6AA",
  "key15": "JCw4NLnVEoz5bsCWaZq58uJs5rvhUmEDFNFK9dyZBJX5bEkZW9m67nQsf87waFBWvNxYAGpjAy6hQASVgyBX6Wb",
  "key16": "5q2gCqYvquRxSFZC2PtR47aJDbmoey6HCjGNvVevZzYuv6GhaCiUo2zT9Dpx3xFCHC3UBHsmhCg24JS7g4mhq5NK",
  "key17": "3rYyWahbZLGTZo1dpxawUXimUHDNriBEmutKYLhUrJ6nT77V8YVX6hcqtXGaeT7ezqhQkay9td79VvW9PeCnLBck",
  "key18": "LTWMfq4X2G4pQywWsskEKjNwkTWgHp97quF9v8Wb7Mk7R5U934aUMCFVmPqSr9qHbj3DBmYdgb1Higuo4FZzLGf",
  "key19": "rJ84eG2odznN2afAvxZSeLA2jksGv5LYPWZDc4Jb1uJv5yVa4frSLYkgzChKvdGJbicMV9o4S4xYa1G3ynAZiCt",
  "key20": "4DhcWjZuGZt3STDB3G48JAqkYd7Pq8qzCCwivW6F9fGk52WCgY9EJzg1vBYHH1Dy5zapjecZGC8QAJ8axpPDWtt8",
  "key21": "EkJYQEMbiLnrXME3A5Z9F4jP1nJjN4hFNAqQtFNp6f2pt4EgtSiK6Hhd9wvApLDSkyswTbJbEWaWqzAsqkzb4km",
  "key22": "5EtJ8Zvi5KuLgQqehd2hnZuuQGgfTdZS6eWvgWAvQc9okQCnUYu66Y5oj81xBfyxUXGUppsZ6joPMDvBRfLvFYyg",
  "key23": "3kCo65WjcLqj9BCbS9UN5VYBpj9yG2Ge2FHp6J7H523hzmeYq2iJoxBDXmjTWKp73ewut2rUNGMmFWbpBPiqTWrd",
  "key24": "5iq5GYgLqupgDPz6795rdTMGTC5rJ3sSJqYNitDPJktqzdGWLqBjTapKAcYvcitp7FWjZ4jJCB1p9KnDMm7YiuPt",
  "key25": "4eJPchWhby3UbHgY8zPbAHeexseVS7Y5DzQCUy5y7Tyq3MbB1fc3n51PigkMTFyc2MnhtUbGKQ6ddxHrEZyXcKho",
  "key26": "3BQW56VsXfkJUwekJHFC8J1o6DLH1YzeECKxjxtsKChVYBLnVJwKcKx1g5StPPNEtq3zBf7uGrDY4FgAXXSFgUeT",
  "key27": "5Qzd5YpTYRL6EqKFKcuch9NAJNuttMeL21LdBktt3sZiuE5BBmCa5Xs6rfnspcwEN9WWf59mJHX9FGzd8cQKjSUj",
  "key28": "2LQ4uwmzuCVXm6PwedzRZCvmfHTVuxbAMS7JecRuAMNZxJEE8Vmv5gjMZBFJMJ1s8iQ54f8v9DtgMwsK9S4bCwPq",
  "key29": "zXZcjYaCtGgg4VRrNWFFoPEP782u9on3nap7ghv1GURW2PByhFtpFfzardb2w7d5YPRiumfoVRbhKAeTWt5e9FZ",
  "key30": "3ESNGSmkV2ohS1AM8KHZByxc8cRmKAQx7NTaD4Nvuns2J4YegpWRBu3JTXGJurZef3SN6qUZy9oPNziyR1apZfKn",
  "key31": "3ak89ry77yqpvE8HZxaWYrrvqHRoxy4DypG6oB4KZpVYSusZ6gxKHqg7ysSpZT6Wd9ZmV3CGP5gkpv48fyf8UsmK",
  "key32": "5Y3rCeUZHcyRLxfhfBAjFcckzkGU2Koy1PRhrtVvAXwAMuMuekJaSKdMPEggywgVuDD4dBRYtFa9UmVTx1x4SvKN",
  "key33": "3qiEbu8UV8mdR8hUohReH9fA3ESuF2dairJmpbbQNCGVBkuPvj5jMUEEBmNyyCf2BwC7eVAhYpucgHAJqQcmQL5n",
  "key34": "gTjoBXReuoxKW7qTfRh4EtYkQrwBqV9HjVZaKPSE7ECSybM1em9qHhVq92DMrJFBT28NSTmYDm5yLohycpWYvSy",
  "key35": "2EPmg4GZGdn6rcUtXGQtgxCbZVWxB6dt3w4BEF8jZ8K3Z2mmrPwqDJVGYcfEQkXa8uUzrCQuAEoexen6wFmC8RxR",
  "key36": "4rSYj5z99AuU9zQ3eyNgFr1jRUD2gpW2hhAJ949SXv9cxvGWHLuSwGEt9XcWtkH1NBV6cAgGMo7rgFtWrWVkEDX4",
  "key37": "DqNsigi1HHNxJftK1s3uZDKbuzEk4dysniJCAfMYt29wuubFZbYu2MN3ohGuF7pVpRcHptY1wnWoRgoxbZwmpTd",
  "key38": "3P7jCgaiGLaRDRNqqpCibqHb5z8GJRvSLvoZN3QrMj1bz7zzZiTakRmQJQKBGdcYEk59etwQAwy3U4FexwXHZAR5",
  "key39": "4hfo3NLwpLUvJRbQr2PmtUjEY8Z14cmZaoX77fAgBqnFGxL4MDJ7PdwabDe88V1NKFxFqSeqbUWDvWu6ez7vWx2b",
  "key40": "4BDPqDXJ4XcSNe6JfdQXg511zrHTSHcqYcGdDf3xViWkCfZgGPo6VzLjnk8HhWZhCHmDskq4QVHZH9WfsyZ2Q5Eo"
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
