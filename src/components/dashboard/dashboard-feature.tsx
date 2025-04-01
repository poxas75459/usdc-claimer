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
    "4pt86Ct18hWHhD3LtosMyJnAitFnnB7QHat5bt11kY5sEt9asda3fUBPRaQKWMtVewFWyMky6kVv2MWGopiCrxyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VWQ5uKzR6iLak4TmBqGgwMDxaiKCC8cGJD3YnGidVbMv9TJ8JfRpmzzkPZfinfXQ4QcQUYYhcLMkzHxVirwgR9V",
  "key1": "67ZGJrcG75piZ6up8vip8U5zEGvd1sruKzjrhJV63DR3P1GGR95P98dZXF6PR6oN5A7kecmTmXSdJsqw97dmovGW",
  "key2": "2mcrLD2erwK7bnRpYmV8cjHpjvPWs4MrbKisMaxaokppxxPoL5EvY2DduGwLEqai743j74aLcixaZcdXJ13htSFg",
  "key3": "Ft2TNiBaaPboKVnMV2EhL7hMcJosgZyEiXE2h5iD4kxvWifJSAdkJFcaCxu43GXAQwLCRymWJB1rQgyy7BkFWNx",
  "key4": "5kmC56s8wrDDgLRgEyNFnQ7jovDSbjw7YFmaoWyzmJgLjCvV9n3R2B639S1nXpRb7KGTw31JPsMyiv6BYSFSXEny",
  "key5": "2yWSmuteBDoFEpEspRxRHtxZV9jD2ihGmfaoPysAfT7V4FJQB3cVHsHry11VqCN2JjgBVBcYKQYxu42Abyq1Jo17",
  "key6": "FdRhT4bPiiS4DdR4PYC3fNpzJNSANGKb1XyMyCFFzNFoa3eC2FLACVFDahT2rhiF3JwGM7zAh2jBsBrWZtBznHg",
  "key7": "2eqMzxGTso9LP3Xsj835fMPM9iNrvJqRUBEqbapMMUPmj4pjPeBKbj8BV2zRgoQ4fBc5p31jnUGbxLJf7xCpzABu",
  "key8": "M6P1JS85yXKzXc6iSKaYUAWa4yTwG4jeSvaNTbyhdkyinCW2FQnrTYAJMVYsH1k1edsUUVtSvkoM6CpyhnbEoBf",
  "key9": "3uS2sVyQvRPY4HLzRw88b9C3YVkcdBW12NccmKo9B4TmfiahVDPs6NTniYYpvvGksoyXBGhjLUKEdNhQUWF8dmPA",
  "key10": "3kBt3SkQpXaY9JkRbWoC3QufMawKD76e6wQ5JZEEsi6Sn3QDa8m9tr7NWLhtSXtfNpoTFKnQDquYMdgaa4PDnfq",
  "key11": "3MFDybUMrhhebcwoVKBpkF4rZrMbwxqZ58vcmxVnhcTtuN57pDoAYfCW99qPqus7Z3K9d2VL5eLrGmr5qBrgcXJw",
  "key12": "5UpyU11KvkvPYZZJrAUuCaQJyHtrXJ95HkLYnKeJM8x9yHGDvMNcJyaTtEXeF2o8EUnwegB9ZCTEiQ4PDMubGBxm",
  "key13": "32dYBmCSkNkg8QU7abSGLLsvp3A6AH8Fq6e3JYpY7eYjfiibVWC9A3aneDCYan7RxwCaKcS5t3344MjhT7zoLyM4",
  "key14": "2mgLtXmXt1yE5VwXGpZGYn28nHgPDd46gQVG8Z7hmDAerbRXZSYgskFMZvDqEJqefctNhHXSjchMH9zeWuvJoQdM",
  "key15": "5vvDDz2oTcNtJgsqQNGQ931veHdmAx3i9FruSaf14yvWw4ugHaGG8YhvPJFUxVimZpH6RGe2EZezVi25EVCEFW5J",
  "key16": "4eKyhrtimoEDPNzhaX3yWcwLQW3Kcv1BSwVS7Jc6qZL4UULSMe1dLJcsANjq8Kk4xqpgeAqK6BfTS28dek9gvW2T",
  "key17": "4PBiEfp3s6sLz3WJfZPatw4BqB51H5HZcqXorKadR81TA5mdYZJxBof18yCK13qJHaeQHycZkwxxJWLPvLDG9P7c",
  "key18": "34HY2jDxiofKBL3CmMS3WQCduz6LLCr8xSUxx7RhAuEm6FWUv5Et4MRUXjFb3BMZ6yzs5jkD6ubPw5eS4fQsDT1J",
  "key19": "2RMa6XJUoHyU5B3qnaHU5tL2iX89SBhZuEPpzQ14q4k6GaD3zEhTGWjHwH8isQrPCi3oHnWjA3yAyypBeXbDpdUj",
  "key20": "tzjiDbmaDowRfRAUJaG6ewcoNH89oLsfbvVvfBmtz3g7BvkPZsFmuYnQvPegjGf5UBaTCj1w5mkYYQB6qqa6pV1",
  "key21": "rAz7sRouxJVYtmxCT3V5835VzSvLaQGk7Dc97ZdJbdUia57ZUYJejKhLF4HsCkMGG7aqsypfjajwwM9X5qb8KJo",
  "key22": "25PBc4z2ZYchxZ6MJw89M7JXCMk2ZUmTQ79dUKQZTdqhJHfy5X5WmzHzeebFztHngwBvrmvt7pNswj773Fs5ncAJ",
  "key23": "5r99Y4dHGsWWqPtvTNqqpjLqscKX7KFMWSkKAT7mN1Lrq5MKZRLoUen4XenYFe5E2eM4e45eWHhw9X5RupLGFsxR",
  "key24": "5b1b7swz78Shm18uE6R4BMJV7T6Qi4eLmZCKvWB66pGXFZr2MJR2wodwEneRhbjMZkSft2AxxwKAqTWdy6ozZBFk",
  "key25": "3oNZWVrTVtekoVVwtcC1vbMUfH5r28WVP9azKotUQsV275dmr5uEwVb4nwWmmuMtE7EPfot5X2ar4RXpf3qnNvgm",
  "key26": "KwtPb6CXvcxddtMQiieAtQm8vyKzj58bRs2C5rCj4QsyjjQNL3ZCn9Tsv7YD16ZKGjdmujaKmBrLoLcFK9Lokdf",
  "key27": "347LMa7ufaeYHG8GgA5NVuZVDTq1rzDHDZnqbFFGqVudJuVfypk4tFRjSAD6L71Yx8GiUHDWgbiTCdfbwje8n49u",
  "key28": "3dDbXpcTvfxojxQjW6TPHgdPfDusi5Yv5Bc3FF4gvJy6qxWqV6idJ57dViEGqm4Qr7x1bJzXsj5DGA2Qu6LjTAWb",
  "key29": "3yPgQgJywePPbzgNd5t5vNr68LbpamN7b4jXcTGbtWMWvmcs4B7WxC1JaWqWTWTfWn1Q6iaQAbF272vPi6EpakC2",
  "key30": "5TamjeiPU4VZMN2mPsvh8kBwH7NUMLQdohM6MqygEpX1UtWedqdC5THzffpyfj7fu94fjvqcHLrtkpKC65QxNNnQ",
  "key31": "36fUApDEyUvxMF9LJfLXMUyvDPd5GpMFtS1jfhw2oLncsM4S7sjRgCuzWaZe4d5aGqgKt2pv5tdSBJaWbq56qqN6",
  "key32": "49cRP4mcvPpmFWPB75DDdLkvhFNAhX9YRRSKMHXz5hQJSLdjJeLHNDUU5UXk27asAnABtW6kjyDGqPHUUheRw1F",
  "key33": "3L5dQMFwnWPE8C54GNYFe1QFTYe4K3MRDCnHkaBk2nubThdWC7bbCM5kbg6zN1n1ahFa6vcrYFqEhcPgM1juVbK6",
  "key34": "2ByarW5GRnCiGWnKE4LtYWz5ZcaWUqqVwMD1g5pBE4sfF4fwNumpcLPgJoE5rnzsWuByKNz5wWidB3ocdC6jwGzJ",
  "key35": "3mLQbbHz5rGk39yetqR2kZhY78kTJn8rUrZKDF4jLDX87m4miMjek3AuKJhhLrQaygwHDMWQTZWMw2UHZ64hZJ3g",
  "key36": "5WXtquhA8cTzpeH8xFBqvV2hebBRhai6oJ4P4JVgeSPMxiCJb5qxsZigjL7dyHVKigJvHBxsavktgNYaW316a7d2",
  "key37": "65VB3Xhw7fnstyXwVmoxgNfMSCM2NyWqeYQj3zKytfoBv13DVEJoghwqscuAoqyBs3gpe23vw63ihWNNi3zyLrHY"
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
