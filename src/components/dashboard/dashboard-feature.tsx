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
    "7vcnSNGey1XpMh2ddasHdcHyZAekoQvVk9qcDL8PDEdad49FY9hqNXQSvihEBUxEQ1vyQ7tsCYWv1EGT2qWen67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rWsPfeEQ3Y2SVHtJwVhR6zB7NGtdRzmBNZsoy3HEiFSCgVFgNF4FDQ1cjti7PgZRHwi7pCMEhKPY5EicXgwhrjA",
  "key1": "59P9VrTwSBJx7Uc4HEVCgSVhchGXg68PsaBvbwY1b6PNErVAvNxNbySaD8UgpkbC7dtLqAXZ4badzTwsvdNv53zQ",
  "key2": "4L4yDAPTY18aX4rc1QBThJJXTT14QCXs4iLbncdkR5CPCfyXhsKw5c6vWDhS5yw12R6AqUkw5NPQjQVqW5cYHcXk",
  "key3": "57Xn54aB6pMz6QWWMSZiNEmRDgmBEC23MERagKZqq8G4f5kK7g2NZoMkkjTJ1wZXjWujfVruSfcyCJuJyw9JQd54",
  "key4": "GWAifvJENAWKT53Pd88AMMXma4PkT7sxuuR392brnYdZ4RvW9ANfrbWKUGDHjmDJ1zreh9Ug3TEe7UR1rbY9CkL",
  "key5": "4DkW4134vxk3refWovLvcTvust86E2AmB9huqSo4fEQLEBT4sbXZTBWnFwevQZksMvT8xtxK27CtXZAE2Hma1JC1",
  "key6": "4DpFFZhJsYqp1mAuh1HxSzEn4Eq3ssXgr9C6wh8Y2XtjV7dw1Vb6uc36xEDnGfgLh1t4e5FA2jtocr1ZMoc65LVz",
  "key7": "WD4kBquxKUG8ashJbzp3pcJMikAYskfsmUnSUwMVz5haTsHzStmXRQeLz65khk4i264xREivX6Pyqed4W4i9c3V",
  "key8": "3WUFX158vozQn3RSBstLvY43BY2LLZBzC12AgnvCTqRJKPxBt4cBGat7bFappqt81WewN9vRyQ5uVK59UGDDAXmQ",
  "key9": "4rpDBxSPqWNakUvgd95EUV16tRVuNvtdYEfPdcPT7DkfRgKYjjfQ2TuRP4CsKKJFDwnMo2NyMVxArnZqBHH5RaRC",
  "key10": "2gBhNC98S6omrfqpcBEGbdqmA6e47tNSGJGaMrLbPstQFq1VgZoTxnSbftwfesjMxe9LATAJcEsoDTQqtTrpUfof",
  "key11": "5fh9k4HsxmxbsqVuJkSqMueTHj8weZKnFsKrwpweZ8y2Un969zYQvfSVWBFTCm89ddX74sQJLK97VgZr2Gf5HBsH",
  "key12": "5c6ctbjLddnSAsaQ752UyS8ErCKmHynbbjhrQM7gqAyMsbuVGwfKnvNMHJVpdhcPhYnq6FUCTiQ3if2vnTtRV5aD",
  "key13": "5KLnguRm5uax3xF3hCzRQDiYVK1AcaXwjgEhdQ9AWeqnLSrV1Hk9XbJCvvTsGVYinh6DTGY6iJWXqNNABG8w8wzU",
  "key14": "5uLt6rdubVvqqFLLQCphwBevS6QzqfQS9Z4sLKTEzCACaG5nFHiW27V6Yq3teovXN4sdsPA39H7ZCUW36c9QzBpr",
  "key15": "3Zt7yeZwtNAqi7AmL3BWXvU5TdAVmroJgCGLU8paxvJkaBB6fuowuvNvCFQ9adkXsUTBdFtP9GKcJNHnpMifpthY",
  "key16": "4v32jRRTuTFuMN5oKaBN35oJ8M1JuH7PFEdL183JDsNz4hHkabqo8zob1CaG21dqBtPXy47SYmGtVMU15s1eD7aK",
  "key17": "5b8NXpaqo6xCbMLJri1qeqo68Sf4ZwKEM74aBw6FayLqKeey32Fd6sGFLrTFzGSCQsCGQUHyArVHhpjwERzQ2ke",
  "key18": "277JVPAKUEpDFiMw6p6gSDA1CzEeaHrRgihD5Yz8HbwvFDKckqSNhUX4zg1aBFHo1QxckEQ3p25kRDjiVVuLDJhW",
  "key19": "3d1dbmatUX8jxHwou4rKeHzcA2pkt9eK1uFBwEkjVshzVgpfepZSvDtYY94pjXkifBw6GtgUvHyphZ6PStj7E2w",
  "key20": "56b9UexzT176qVndw9qnKZfYcDqsWzdp6obMRJMKyvmwXDfN1a7E2QEyW1sZ72GKqWNGJd4pRxqum9stShYamy5g",
  "key21": "4MwB5aqgBVJndi75H7HNWH4SpJQhJrSiHdJgzonWJRa6wQModNDzZ5vb82U7BErVApLAcoEPjsztb4Y3vgxKzNu6",
  "key22": "2t7gdJhfiMGJftGcf1f8HFVBQzz2Y4xhCXEtsbD6SDLnnBZpYa8mEuQ7CjL9kWZVmr51wrG7JoYcd2hx6MZYYFDD",
  "key23": "2avHR6hZkVFPyvQJTkhXwBtSZY3UmDtwnpbFhkT42pwf1thMeu5yvdS2vs9sANi7jYtFpCrkv8siUPdnQ6L9xkCk",
  "key24": "2x3ak5gEjskksiMr25yGAtiCBXFCDLWkhLMAAgyWvpFpu9cxQJ5aetD7guLffqszgm1UvBf19qdUm52RwTbSfk9E",
  "key25": "2K855yzer7fhM7JUPU7ydZ2Ad2X6qP8A3VpiQrLgiNSudDYGXW2rd8YgzF2zC3wnV8fs2GL1YrXQLESXpYuWy2rF",
  "key26": "2DRTvPFmRfYqTgh4ZAPCw3Bw76EMmH9XJh1Q23nX82yoKhqtTbW62VTxo3vXDRY1UBAEvMYVJBqUJKhakJCM5pHE",
  "key27": "2ms93AGzy2Zp62EDdU9DTX6ALE8zQXMqs1KVV1d9ssS4rtoJg143nUuj5gnxcFkgeFDo4ssCWGTjhDGz8b5xscwr",
  "key28": "Fso6T7Emnh3pgp9z2NxfsufWmnFR2SUsy3s69teiRQgNHGsBaZjtHutxGkHd4AA8rH1Sz2YWUFLuVxPbcxAeHfH",
  "key29": "5676zsRbDF2m7FLs9XtgVZTPiaHc4bbkDebt38jMHcaCkJ3AkyVXziEncvAVdDW73Z8X29nGboeETA6ubeXCtP2g",
  "key30": "5aq2mnhtXbB1UYejVBa1syKgV9br6qXaAL1wARiyH13BwJB46kDVvXVLtr1aZFzWaRkkd6f59tPAsdF332DEKVdp",
  "key31": "2QvGkLtirAa8neSRWm4wLkKiLPMmgk7k6EwhUmLM2zomBgSoq7dX4EBZTyYmktzTtRwuRGDJhLiRTWC7UTPon5Ze",
  "key32": "3Fstyo2YxBUgjrYvkCrVnYSfkvVqxUcdfGNK5EPoyuq91kgVPn3zRRWP4Dv4jjvUrc4K2dTuKRPabpcJA8GYTim8",
  "key33": "dgCEaMuAYzYBoAGBBX6BtzjNeihSK2iUazkb9HNTNbi5NkECBipWaPT8xiJXJcotzW3PdpWbb6dC949oEVha4BM",
  "key34": "26WePNdCDtLWMM2MHtjJimfYpDZstDmpGScfCBeLt2oefQQJ7bnRx1sbqGiNGxDRem6eghhuwuh4MZU68575jWht",
  "key35": "4r28q2De1EM5a5Q9HHVACcVdXZMu7jwkYBvbsgGqPShYdsFG8ehrdymn5enHEj3VJmLbpZCLki2UiQYiBT7HciKd",
  "key36": "59rNQKtvgQrFKZPZeXd9SndjN1uQZKPS6BJNsNXinuUPFXFQxtBjcTkm1fzbuRMs7JrcaXPYu2Kpt6kLw21n5AD6",
  "key37": "638UyV37osMsDQofwwmnRUyzQzTQV7y64rgkoTztR147gNYPzGyuGnH4W9T7TB7HpmyaG52Weq3jVeu4pxDQ3mZC",
  "key38": "3pVanwFZyN1QtEnAp8NaFj9T3rbMeJqxri7YDr3P4BXThJBFyserFcVs9mcHmBABsTGjqfP7GJbj6cSnFYhJMeJE",
  "key39": "2dedzXCrnh8ubMfdhzWKqxdmxHtXaU1jW3wCuTPxYQ3R9bnsd2rd1vUxb6npL9inU31Zgtye2aHM1Q19SsRQ2kGv",
  "key40": "25acaWtgP6gYuNeaPXx2rYRQDFiwwVdXB5rErWA8tSbGJ5U1Kc49Bk9zo63wn1bApJYsPcxPYeEcWj1EnNSraeej",
  "key41": "2PYZLAbi98vGZJxmf6sK7XgPjw1V7HC1Xj5KSVVyRKDQejJfEvU6X5tMijYsq1GsvpyLd3Q2pugtq7F9YTtGGoU9",
  "key42": "41Z13jW87773zdhc8hnkBKXco5WLpW8Ee2A852m9q5XhhKMBovLgCHehFaM17xuy6vyYwqpELH9FMGfWDt9nrcvB",
  "key43": "4w2Jtp4me9ganvjjLJiPWYJo7qHpbVZqJqWQDAo8j5RK2yzieLwJ7k1kKNMg6zm964V3jTEoNkVzCgwNfRxL7Rj7",
  "key44": "3f5LMa8svfR6oZo1Wwcuj7TT2UaJqCKtuHCT5kShuztM7bhSUFan8iUeuLtSoVz6CBd6a2jcADFz1UhfsfmHVzcq"
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
