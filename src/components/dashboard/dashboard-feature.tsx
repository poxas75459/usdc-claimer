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
    "uhxXnZvVgaEYgjU3CKJZWnPdpZz6aof88XcrDJNqhtudx8TWXa2NcEouutyqCQc9Yz7dVbCWgtkuTQVAWFzvp2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k3QvYfZD3osjYhoLmi3cUrpbbSNacdomGQKf2wdVwEF6hcYArb8GJ8GXsqEq5B1etwjurTwxeCJnUkwPJRANfgh",
  "key1": "4eUeSVUMEcvuw5URJ7v2weLWMc1NTeEgPqYzD53zJUc3goxyJsUAvhAZpqFPDcCMHD8LHfhJxfC8R4cz5tkwionY",
  "key2": "43BfnY98ERCmJCiJ3hoZABFPqd4MVASTWzLQ3pYA5wHrLVL4pMVprdNFAASwBEvFbU97okVieAnUyH3ASxTw2LEb",
  "key3": "2t5SxdsERtGA6Gvtcj6p2TXtj31kJpY5oFqEJPDnA1ZSwGEMtMcfTJjCf7f2ZqLNbE1BLWbQ8Bsu5so2DaTHxbQb",
  "key4": "3xkZztBuJxqQ9kj7L9AjrXcyWcG163rUY7vt4sT2zyQ9X5Nt6BT7NumwineweeZonmkAbjuEwVXWGL13WJTtgxyN",
  "key5": "5UzVNK9sENc5pi2pgcPuXFcMBdqdavrRpjs8UB1eQdAQMqDYEmVCp6sc9nLApA1fiSHARq5QfLqwip6Hkwiz9BHm",
  "key6": "4MR3pmcnXHyKRmQNqaJjFeNJ6yRvzKv4CwwTjRi3JCvkMCmynNTuAhE1Y1t9Speey3TvX6kxryXv6euwRpAmvoz4",
  "key7": "3tQ1YN8s8e8S3megwauG1r7t1yDwsEZraa4cdTStjR49ynsfsMRk24foSW8usXTwaULSsf91XgLNj6sb15o4gVmq",
  "key8": "61TVFENLJ9MLaNqq9ecwW8fumridYs3kp4tf7ndUuLNT2YooFcaWUQrAAJPag2vcwPrh5qBQ8taadhCXCcfMAGdi",
  "key9": "61GetYzfnADKPsZNEpvHjF6feVkLWvQA7jR1fAdDDUF9MybpML2nUseirx4HsdtvW956J2YtCTWq2Yxjj4cyPhzJ",
  "key10": "23UzRoNpvCy5GXXRHAmFjEduJ1Z4kFm39A6Fi9aKk9Awap5aQhGag5AWb5CnBE184AGkYp5b16FSJMrhex7nXboh",
  "key11": "3b2tnZv3ndwmMeLekzAz38QSYVrj237DSb9QXjL7bka5h7geNbWVxQPrNtfxZ1Rx3zKzqXrSc7QH2A7e86b1GxzK",
  "key12": "5HriYjZ5nQxX7K9zfFeS6htHryP8CF1HhKQqdyptPtC4VSWukjdSg79fmJExcWMjthU6a7DbsmsjfpoJc6zZErL7",
  "key13": "5MFwrh9WqB7VdqZVMEBtpiawDX5AiQUCpvikMLS34i13ajXx8wjS3UZBivA1dNCWvkRQxJzsDatrN9euduAcYZXf",
  "key14": "JotbqZr87GC5DKnUzF9tFQ7i5WHabyLn6FQZzJAiamLiL5fKLUs1QBpMAiS7viPtFzw2B2f22FGEuaZAP5SmGkc",
  "key15": "2r55LTAYsikVTHiPpu2VjphiRZi8rz7CpiFubtVT7h5Xsb5qXtn8qJgn3kGSZ9gJjb4XqS6uGtp4p7J7L9DDVzv6",
  "key16": "4g3F24YuaTkDtfdDv73uv1vjJvqzewBNLgehBTG59iEAfGo7EFnrTY7Lw2Kyeo7ML49ujd7zwZXjCZpQCg9q3pwV",
  "key17": "5CarA8wf6wACbF72Tos7TQS1sAPGLhFfrk8rHPG6HyyctdcxsCxDq1SiwNaKvMSLZeQ552Ebg8XmDmhJpkwiPWqV",
  "key18": "45RAXtVK188L3U87S5uJCCkbr98y7JjbfPzqSkFvxbUuSDjUY3YHEGbFsH3N8XPpwUucoNgkdQy2MEL4QKfXvLRe",
  "key19": "63jbjt3Y5QjxWsP6trtmSpTL5RJFBzsAwswvsDmKWUN3L9LsiqeR5x9dDfmwVsdcrUeUAuMnbRXXDFmg5mz2qfHz",
  "key20": "62cSFpZQQXrLNkphK8vhsKDc1C4cR63CniccUXNSSatyHKXPaVUvUzcwTP4KGPdewer2R2amNhovh19WshHzwzQi",
  "key21": "3rpRh7N2etUxGFjVQ9MddcHj8YmBVwdkbQkieKVHKNkofD2aX81sYNz7cZpJqYGg9x3pRRJnWZhahrgkCCRurYar",
  "key22": "3JGYRhGiWEgN7P6RqJ48Yh5AExT2gLAmnSCMxDA9eZxBJyFpT8NLyWNTZzNvPgsrfJTQwREE9FVeXqpkoL99jqah",
  "key23": "392CHhQGk43MJRu2RfzjeZFNTd4frnbYM6cYuuzWaLpHibfX6wstudLtgMbm7kz6hymNfAp4oyHYgJLHzZ5fR4g9",
  "key24": "3CMGK56LqhJpudszApb4YhopfvR3wb9JRA9ujV4FTxpKbkE9qd13Zbir5Yw2fMt8jfeq732fdai5z9mGUmzhHct3",
  "key25": "2otvGGRYNGJadC9zF1c8kcWmY9Jyid2sxrRK3wsxXHSBYefXYQoVJULqkbge982KhEhbUTbXUurYChRp8fa7GiaL",
  "key26": "2ub5TazRPAJY58F46g4eb6HU1xUax34hpe1ebSUPkckvw3T7dVpAXTK5VSZLB6TFaQAYtMMSeKgPMqdGzz81FkVv",
  "key27": "2KjetSjhsQjejqe47kLKnvognHJazDrNxRegpuJEycBgFmxYw6To3Z7mm3sUUdJCTah1xZujn8HT4wtRsuyeETL7",
  "key28": "2JXAA5Gq2GoHBrGiUxg7ZAzDmhUJBahy4j1pnGZnXLhiz6jK5JschhNwjCkdP7RF5GrFpLnzFDAWY4sf5a2zVzRm",
  "key29": "2bHccVTdUwCAgdmse5ec2aDVC1izi2xR6cWeYn6KCbDtWBwPyNU1HPaScrLgTjeeRSrjn9y9VXodsjr5PYFpczc7",
  "key30": "2JCUfobczpxPwU4rvtA7xUeBsssfQeLQzx1wEB8c42p7eXzBBZvSZkhN3NnhgTJb96a68HBK9x3VKMb2PGQjeVom",
  "key31": "3ZQw5kd27ArBszmpS9zVc5rP7QgBthgQKoN8JY8reMy52y6iurxFoXbhMGSA58WHAcuj1sTCPrVukYiB3V7TVY5c",
  "key32": "Mo8pizDLrQFTxmYjD5CNPmw9AnyiJWDg1E6gRXwBth8a768Xc6L1QBTw11JGXo8SxDpzGuT4nm8TqAvyPQDaWaV",
  "key33": "3QXC4MARRUg8QrJt6zpo1B86UWFEzmj2STKqJenA2ei8JuggYEr4C16qjfkQVZ8gy61SajUg3Rs1QfPbfiFqHiKq",
  "key34": "3z3o4w43xP7dUsBNBsvXrC3RGYp6F6KNaqjeTA4ss5WmVnzgDMT7SuXj5wUbtq6c1u4BskTwVEnLG5ocM459xdwe",
  "key35": "2s9dcucu47LFC9HV7LrfN4mdP9RsrsQGLXYS7e3jorbFSLTQn4hUVQvCyGEuX8ewipPYgqw66Je61zeFJaiDnwEm",
  "key36": "4Z663ApebVBt3fP5HVUNyQ37e6ZfEcqJQhs3vT7PCBNVCF8CaeLf8DVAFjFpaMTreaprGP3zdecZxQ8ghyQZxEPf",
  "key37": "51yiCKFdA5YonpAN68haXy8qAbAKxSsJn1uHvGqJ6ZkS2Z6ath9VF1cHPKSBixPHCq6vaLM4oCqxyi6zQ2GBu3TZ",
  "key38": "2DqZ3R2h6BSmq95XCtyPqo8XDLB5HmjGuKLoP8pGZ8D26QrWQgJ3wXfni9EAwktwjjoXooL83yKBTfTLGxQgibQS",
  "key39": "eiURpiaUyaGqd733VDXgQMieraSH54j8UdbWFqF1E3svcFKpqDJkZG9artfjPn6Mewx6JKEYA4sh4cQtm3qxmfS",
  "key40": "4G5knxj1EMudCFqyZ9DQHiKRjXyzWyysDTP6xdPH1F38geFJ39LKfybMSowy77kGN4kpgWaneL5ifPYacFjq37it",
  "key41": "2geT5xfBrPYyFirehFFmeBg7TWupuUSx9vx1oHBv8SUppyBahzxEbWf6hCBYqSUKcPFwVkNvoXyTVMVV9MBB94SV"
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
