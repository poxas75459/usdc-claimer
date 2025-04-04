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
    "4gHpapCRrPJvPYT8fVvjZUso6V8CCN8zJCUoAUoobdNmturPcYCFxa5hdRgQyofxgcq7xDY6GCCPxcrELhkPZ6Z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M538J4DMZqTTdJ5E1tZsWE9GHeEUEsxHvvTCmMV5yuiwKJLGdEyQkA1K4F7zNoLrNYEaBFhjR4Qz4zQ3jYanmiF",
  "key1": "BmXSgSuFGWeepKkyFRFcopXwWPtMd6fzkKsG7n9KnA14BK7Sun9yHgqTx9yXA3hgAguxpCYTGW1iV5B1xKjuLvy",
  "key2": "3TvDipx1acuRxLpxikXqq3oanNaKzhkJFp5BiWtbQaZit9zc7J6i4nuz94nSsGTNKgq8Cb4gPoDYDnrDXQWuvAPc",
  "key3": "2JQY4FsDzaaCNSn2EwrwFKForPAzXayhnJdkkMp8hUnuA3tQVrzgjjnKpFbq7FHVAPDyxuwg5vZMS83eXq3FkuF7",
  "key4": "tyFDmLwrgqJCycCkMdYHiLVnnoieN6EKwtFiGRkvdMjrht87rtgKKv3i5dzxS9GC76TJE5FZxJNaaodSxBAH1YA",
  "key5": "3opUn8QzizJi61jtCfei5Jq37k7xgmiLfZpJ7cPaSGtiEzsfnyWGZT6haRUxnue5ANFawMELj6V9zH7fxoZf8oXH",
  "key6": "51jCvQbZiGa3LDoPSDm11YUoC6mpMrh16WDnMd8M3WdRwspchgvjxfxDEzpjhcdsvVX9r956ETsQGSMjsY5u85H1",
  "key7": "4AFH7k8b2WYB7radhHV6UinB64RBnfzhc7grGmJHR5sxh6jsiayJa4R655oq2LWPx9HJoyNAPx8yLSVUTCigdemC",
  "key8": "3iaYQqyDAxiiEdubztNMTngo5tr4BKiJqi15C2v5Zqa3k5ZDpVpKUFUKX5vHzzbbS8AiF1QPCJcdCQ6PCGd8iTLm",
  "key9": "2F2tUAc2TB42kVvVgEu7g9am1hTDEeDX5WyYxNwGqFigWfLe6kvbCJ9on4d31BmtioeTTGVwiVgzHjxY7ddExaUa",
  "key10": "492pSHgg97PCgwg7fkKoz7ciMNCd8gxHWGHc9nzbVLBZRxKY4WxmLwaUmWWYYd56XacmvC3hsM7mAysjJBiUEJUD",
  "key11": "5BdzSBnWEUAp7dEXwyVbXpMFAwFbRGpdfGQVrgS59QZ231ozpAv7TNduM6dJ3CdWDYd2chsXDmYFZGacFySyeTMY",
  "key12": "3hCFKjmQex7gPZj531VjKksrNLg7UZQ7JibH3MeRLLRH9GR5HJnztRRsdxCSxwM4pA9YMYJHQgeWn7jquxoVckDa",
  "key13": "5Qqcv7bath33BsibfpYg1Md8xRDmH9x7jKmv4iZEeyspuBWEQA3CAeSt6MUt44pBELe8pConz9gu2UuEqswDJMQ4",
  "key14": "46Gjsz1ELKmSSF1eQrG7gL34hwS4noAdBnbxwcKJ8FaAANfQRtACStv1pgnGHt2qAEkGuxG8qqSEEsJpWW3SkUhv",
  "key15": "4FxNa1o3xZCmsNLpRjrw6X4fqTypcwUQVJewkniHWC9LYz7ZMraJmNto9RpbQe26pjFbn31EKX9suazMrNUevWsA",
  "key16": "vmjb9dkp562kLfLqpDqnmsxGPhZVb9DbmxiwG5CrXKaN5EuYX7hsooF4XHfdjbmNSHp99RoVrg4nzRYyKvbYyXt",
  "key17": "2ux5k6sYXpJnwjoGvtFaS1asYjHvQbrz9MhHgjxyENfV4AN7ZjpcLPq8KMY8Zz5BLzC4hcmysSxB3GEjWZLDrkYp",
  "key18": "2NArT74ipPFyzQDv9SvwFQbPYW5RdW27dgQ1N1ekbmmxgm9ruWWFJ7gpo2BzuvgjdbZUzEpTwybS8hZCNEcg2ag5",
  "key19": "4ydTEtXrSMy4BVP5ogZmJnQ5wDgmRAPhDR3duamaN3z9JH1i97XAFMzKF3eVbqSj1koDC2ZSYbpnkQxdVjw8qYLd",
  "key20": "4XUHSFo6fHscUqy57qLikpiBuLcfQKyc6dERwDPRLn5WkB9iy6qkBcN22yzav1UwL61QKa53yPPprGQcXPDzK1ds",
  "key21": "4ih8ViYrS1jN5yPt88sNZFUui2z9jBZzvCgSoF9umXEP2oVmqeUk8GbgxXuRXvu3XU6nw7UkA8NoorwjU4qF2W4K",
  "key22": "2Cg7kSABV3amnzF3f6yVXaNzkeQbC8GUSdXP1abD3Sbu374UDdLwvyA7X19wzT46vQGrnaeK6mjXjk44GPRmd38h",
  "key23": "5UWJ31vYtRZ9qg6JcUuXE8N51B91gHKEUZANXsZjkx9DhLbMTwkLaebWg1skDdeKcZTqjyZxjHB2oMa7pnkVKByZ",
  "key24": "59GEB7ZVdTBFdae4WPGZswWHxmwmKKVwRHcnUS6Sp7FXqgFKXFgT43hyN3tUGe9ATUTH8zwk3G7zJ425W82y1GnZ",
  "key25": "3d3WqTJMH25fPjwvMAumz5MC3eBJYL2yUt4x1tjf3wCX8XwpF7i5ouC5xfZB7GsvRFJeFErT8kUpusfZKKTm93r5",
  "key26": "4EzwvPk2sXp8qvKS1Fb72CYWk9LQesa3DDSY4DVW162oEKFLPsVH33XFo1uqqxppjoaywVA53Gvya4LL6NrxDBuY",
  "key27": "TJSP14tiGFcxkmbjhVkb1tkK1vcjXjFK4aZKmp4ga2mD49xNmvvnAy2CMECMwRynp2TgQm57a5qdwWfhNJMxGNT",
  "key28": "5otL48yzSiERQLpMRcwRsX7oqNvsaLHq3dXsrd1Uqp5KGYKkWbn7zCyhwsLCyNjh8ga4oR8jrYuD1eVpdFn2d2VV",
  "key29": "4Y1b6E7MDVjfi71p36vFPDihhNTmMZsY5fWrzo8wcoqwESEwD2KhaqnUbndzRrxX9c6A3HEG3V8kZQYjVRvX3q6V",
  "key30": "H16eae9y8yZSe18NXNbhizKWFEX4MHNNwyXZLWeyjrMFG5chDgcUih7W1yUsW6siYWZZuxhoiukgajq4VquKNuy",
  "key31": "c2gjEYe9u1GC5bqHKrSgaNkFuMjH26K4hAavFMTtQDPV3VqchCc2MjQGk7skreQZcad1U2dahWLr69MqSGTxVPS",
  "key32": "3opwNoiupc5tQ5YpfQsbfWAqiyh451uXAYfh4E3uP8FuUoK5Xf6kB57ZhXGr8ikdBpkbdTRiSfSzKgvYG1H6nooN",
  "key33": "5yz1UJgCaZVP951GpTHu7y6JPz2oJYEXTisP6YHcpduLx6pquCKiQGj1QSUFmQERfV6ZLce6186PK5d1KckdW2kH",
  "key34": "36V3TZM3DLshmuC3u4CozDv7gM92c4Czaa5orpsXJChfa9RQFSe4FvvthxCZYDcVf6aQs9Yjv69bR19Erv3Uktwt",
  "key35": "5Fuh2HFQ6Pd3NkhTML38V5H4uGHyLNwWtoQujem9rBfu2cnsferqg35DPW5o7cDofKzgbNmbjukoJDLQngzYN3vj"
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
