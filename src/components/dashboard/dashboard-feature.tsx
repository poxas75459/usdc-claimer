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
    "4wLB29JTiXEyGg38QjUp9Vb3EHFNfm9PpzpciZqABx8nyjRuq6pJwsgmVWpRH4UMFJmZ4LKosu7ZdUnetjhTqSDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "czDw4zP1eLxzq3h8g8QTv62YXgbNaBdhpJkEKmnZMGaCMyhDMJbfSWG7gcBBm7EM4tEjD1dEYpnqAYG9xK5THs6",
  "key1": "4iFkhnXfRj1nZ7eRWrmW7bqkP2WL2imW7gMBWhWqPmtrxetCvpE3y1xhnt6xH1u6s3VG7P1Cdmn2z5hRmDzFUttp",
  "key2": "C3oc295mZKq4q1F2k8ixWwST3A6xghGPq4rmzhh9gjMLv45qFHPufeJCi1MLtxi4dv8d3StWqZZCb2gNutjtRxT",
  "key3": "3r1WvYawDpmdxUV6ZYTCfb8NvQykK2ghVCYssnpEmqKh1gtQBDUtwfQ1b6utV6AbWNvNzqGb8FKk6XVhu72kr7ft",
  "key4": "CbUmqcWXe4pT8zRx9WBW5K4u1Dwsv5DnmKNCdM9gKkdvdDybKPceUqSYwfmYE9jADSyXhcs5rW8pqTi631gJuM5",
  "key5": "5xtFJR5aS1irEmSixujSyipT1YWxZogXKkHwiV2H25nNRyLBdNXFYXqzEjonR4JTbqBUgCbECxyZCreuKbWzUTsC",
  "key6": "3eR9cvSTUC3rcBNhUiGjch7LEYXzg9Ps5u5aQx7Avto4Hi3mcL9wepa5qVMVPYWweV9SaxRfmCQUdaCjWFH5iRJr",
  "key7": "j3G5zifEcNmc412dikftx1siHfUBBzcqMr2oS21Vgsi1ywuS7TWsTSxx3i1VbVG4rPznYYTaRtsYnWYGddKd6hs",
  "key8": "3M4oZci8nqw7zYijdoWmrWWYFW3txh9EbWXKarRmdmwVN1tzUb7RPfeyYSF5thw4gFf5D133S1x599fTZWxJC3NB",
  "key9": "4QFVPQQuf9wCj1cwYRgQGpJ8CjcfZm427EUkgohf9JzPV6RKPLFrQv9c9w8F2hBYcoNxa4dDNoa2TrxaSwYqCCGo",
  "key10": "32EbNQFNrvSJzJ4Luej29w395mRtuAD715bJkgWQYJL5cU6a2dJKRjZof9fhDGZBXBepVpDqysWUdGa6DrqLqk9E",
  "key11": "2aagj4mY1yNpaGkBGNsduk8om8iJzVakHthjY4y6aUJdpAyV4u4B8LjypQWUdoBBUTusmkjvqqBvAtoZEEH18NEc",
  "key12": "2XeM5ufoJdj7wuQMNBLaVihyfC4S64sgNvNujJNDadw8m2FZV6SELMDrvHCaiNA4fFKFYqvk9ZfY6QK1SSqAaoso",
  "key13": "5ZQs4wBYi36WxQa6xhxUpEHXbFsWn66VkAFyBRVgqB6AjkiRZSyGVoGg9HE3bhfoKaXBLSF1osPoDb75vpjZrFsC",
  "key14": "4FyoHfpwgWNFDUxzEm2EFQhNgrGBxGjmjEnPMJpGc6ZuMwpy27DKpd8rPnCYK3wFiZPLqf68nAC2V22SZvE5dTNp",
  "key15": "5wXQUdZ9NmWAYQp9fUkgcxubjTrWCxwz6TmsycvPZNE83ewUWphsgm1eqjxyP41K6NnSjuqaJBPzNMLe4fcVMdTq",
  "key16": "LVkNoqRykYYbYmnvccDyeNasUa3JzDcdGtbwzpATNfhghAa2Guq6ML3uqK9VBM63EYQQQ9zEXH83CLjR8thx9cr",
  "key17": "3gX5yREV4XojPAmffjZopRsFAbvpcCn53uLk8vvTzdj7Z5uiocRZFknaLcMnb2DfuprNhbeUd5VZwcruJzeMGpVW",
  "key18": "2W1ThmgtWWsFNo6n2Qh5R2qKPMudYcPrq3FbNfp8LVCV8YrvG5KhDqG5dbr8wfmMqSSeTa1xF5TSSCexWaN4GiAQ",
  "key19": "46cXUiSVvhL1EorY4rFi9zRpY7xdrZZAUMoGCQaGZtNtXsqa6MqYUe8Z3ZtkN4yUJ2hj6aVnpmw1xqrPgwsR7xGM",
  "key20": "5RJ6xJaXQutFvFQmGbZWNGcdnXV8R4M3iuPUwWgdM8z2bn1EEKwdSxgFuX35AHvNXC7ZmM6oQrdA3xYQBpnZj8B3",
  "key21": "5FQPtTDuSmx3fw678qJgMX7qZsjK4A3anunEZAXpuxCTdwMcX7GhR5jakR4rQ5PSDKhdVNAYXxbBnX2LjZQti28L",
  "key22": "2dKzxjdcaXKxMTr9BdsQd8dxf4z2CLJF8Zv5BSaWc3Z1AJbzyvW59oTyL8KY18KkBgUXFvZLzr36cmcnSZyCxj5b",
  "key23": "2JiGCQE8iJ9cPPuBD6E1S8BSd9wCHMNX8CVSok2oRto3nvP3PYxrVSGF73sWzALK6CmaC2JhsH55vTFBZCmob1Bp",
  "key24": "4bHUjbf63HqozWHwyv8WrfPZKoNyGnuu1UhQTVScFK4kXrbPyCcswn2trzFfWg9foyQ5LxPnmwtNuod7ckoAHgot",
  "key25": "7qAnvUq6G93uzgstpuVieAR1msBNg4gokpnsyQKuMYJg3ta3ZXJj6QfE1w8PcivgDpoMb72Qbvc8UthGP5sYYQ1",
  "key26": "xwA9uW1u3qw47Mccej7hufP46Q1eFG5MQZz3MwxoPYwDJ7vRd2HgQo5doRD7qYLQ4GsgJzHGTwWmDCFMZQK61to",
  "key27": "2nJqjB9XCF2Qzox6y4cSszaUE39VDDdAKfaasmBaTbwvJ1oKQkggQQ8sLpuveUCqhyWALMQsXYy8MnJY84DDsveg",
  "key28": "2C1mcmSq57SYffWBJZ1c3kzmS5BNrGzUgF4FoinYP8LMcTwPk8A32ggJJeFUt1PAz3FM6UXSSQ1EwKGGRBUPUm4d",
  "key29": "3V1V2kfr9kBLQvUNzYDoNx1DcFJ5iauTH4LfzKJJDVGB99MWi6dcfThqPSULqibNVJSjDCwAQnhr9jJQVus98YEw",
  "key30": "4SM5oCd3SGCVGsyLGKdZRA4iHfFRBvvvDvBb2ruBLgfn1mjanRPYSzVRyeguxrFqprNtdhT9kywdnSr5QEr6TqmL",
  "key31": "4jKbpZpDqJfcsMgU2QD35brdCreAA4NKfvWNk7fe2yZdNyQGxFSc7Sw5yeGAi8fm3Q3amG7bg4hpoBthuF3xqtWd",
  "key32": "5HQAbBjZCQBDBNPgpe8yRM4w7nBNKcrHGXPmfaMtitgDKUrFKnGaW9UBojfA4A73fdnZJfFDRv6ZJUA6K8DZzEoF",
  "key33": "4j1rKqGMBpLhPEKnHd1naz75CeSHCjeY2SvjgoDaRKF5XVQhe14kGiWvpiLD9bxf54Txgh5pMPyeDJSbmXM2hEF9",
  "key34": "5rttwuny4bMQCneRT8mPFbcwgUkbe3Pni8TvXxkB8WX8hHXEmfvKebhffHTQRhprm7hBPXwXNoQWUJ7WS11oc9Jz",
  "key35": "4hWWTXWz8SzTS4KbR27UhKYnC8awxL478MPDC36RsDntcT1icEAEMA8ZVi3b1nj3c4obTwBgogLRGaPQwFet8Rsp"
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
