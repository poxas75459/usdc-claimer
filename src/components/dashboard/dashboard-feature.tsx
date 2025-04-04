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
    "5Whr8eQt3TRzb5hkj9g9MPTeFNuHVzY3wNbHQcJ1Gx6Raht1z2fmkP66vJiuHtVdYpp9jZgr4K6UUCjnCeHpZeFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e2TjQDuTMWZ7j6Ynoxyb9JQW7rnFsU2CHpEGYVjXg7HyXFrxkJEM5DKsnvuyPcm2LCo7GsQuFeL8V3FFJaQDNaQ",
  "key1": "23v2L9zEKkWxQEEPRzdqFj6fpmezBL411czf7MPw6ZgkssaNmsPAnbNLRXJ6mBri8dwgRDmg5dXENiKZGzAix7iE",
  "key2": "2hpYHywDbG3NJupCpNK4oGNeyBAegErBHurn45WEkJjkuv2drKoPVfLtvYULpCycZ1Lg979ms9L6tu2uwaAqpxRE",
  "key3": "jFmbZdFSF55MQpVEmhjet18DxoPcNqSqapM1wqwoz4Kyz4BN8ZFwJSkSDqT3NoVDQhjG4wcSWEBv1Kw245XyPHL",
  "key4": "4iRekpb4JDs9rnki5Ra3cpo7jN1TQAoR1GmhsC9WGEvZXArUzkyusvhZ6z1zMRFRiqymeqrN6kVm1CBmvGfsTTEZ",
  "key5": "24mxFTgc7vBbwKonAAQq81uFShHMviZu4oDhm1NNJtiR5obooJJjQ2G7NHNFFWxt57quosa4ivAbDndtHc5t33NX",
  "key6": "36EbFLam6T4eSgCFKZbycUSTJfNnhKheBxrDxSoBVPdsNv3A4PdDxmav9kQfNWub8xHembSKfYtkMrhyCJWq48Zb",
  "key7": "5YPQfSibyWEHL2UpadJfpwbzeWD9zCV8tTD5buQFXEmu1oWeokkiGmBzgPF7oPY9VXwoWPFJPjAi1juRwcW2WcH3",
  "key8": "qLm5rr18bXQiqbroR2MEH3AxxAe6JHtkqZSq3fzsTRnPVYxaB3PABqMN7aw8xNsjcfBHaAJpS5KKt2zrQBEodxt",
  "key9": "cS4j5FTa26fbrU6PuRnNVJiYxZP2gznzVxAeBEWB3BjXzNb5RWzQzSj2fYz6NqnQ1KVh2wsV9iZyJxtBHTiWwq4",
  "key10": "JLtvTZRJihqghBAXVM1GW132mrvqPPVcHHLqsbcuxYBMvvCqaiBPuAi3a6aDpTxNpr1mLCU6xp88ikuKNDfjC1e",
  "key11": "zujB92kfT7EYpPzLHS21NPcks1FmRZt3i7V5Wdcfb1NayfhpXPVKdHaT9LQGJU2mcymGaQQECyEJgL1ikbD2PvM",
  "key12": "bs4CeQ9xVoHnZQE1Uw8pL1PdAskAK1i318vG3bEiu9gDztmqHKsHZCL49QhieKguURTEFprXmsTTbpiDMms2V8j",
  "key13": "sabjgRUot32dtEr2hjatSZC9WdZt52uUKQUpYT644ddzJxhVEFPgQ3SAcABkbhP3knQtZaCQ6YiDq6bUfyv9huP",
  "key14": "2NaAYbbES9JMZ6AuktHpYzaKmpYEy5CLuZVECoSmzNjAMjrVa9qctjv8RH8uRJ2FW2qxYSFpziBqsXrufXBTCbqo",
  "key15": "3cDfdBbANyjFEi5ww1kZQTp2DFRuTkRE4CXWm7x6jsS5RykA4KbzCeVPUZ3FMvRJRuKk6aHzU5qSW5t9gHroJmRf",
  "key16": "Ne7hEowwvk61JxDWGzD3zwK2NKWfSUdXioamtwNJWrDqtdqCAeqTQRX124ApSwkXoZdU2Myb5aauNqpZp6Mj5FA",
  "key17": "22KKzA7xsqwn2uJqM7FuNcSYK2EExMjujLqoUkLmcjBLTLFMXMfuuUoN3fj9iDaaEsSv6EpzHsr52foBjcBfJ6Qu",
  "key18": "5BoVLD8x9xHU4Wrd6qNRm7Waf3WknJChrLYSTLRxh6UXqHE6Qkiees8uC52bDaWjH5zmggdbBqL4vsHhabkqtAxS",
  "key19": "5dNHq8NtWTPCoVGa2NG4f3mut47x74MMNWuQdQRQENrZcBCDpeToEEHrVit8b5dy9BqYmDWu44FPpZC1Pt6HZtAT",
  "key20": "1ShSgrbW7tuME74638GBEDv5xMPyLbCoKT2Y96kJoNf6QSFQuTFTkHNdgJbCnR5KKyNkAxCt8b89GSFJEmtz4p",
  "key21": "63nviaViTKKp4mrjiBUdmRPmwQwKttzheH2iyZfJFaoQmYk93TSHtxNPBmhhhVcDRiHmZDz7BraAPtvjHbPNdfQb",
  "key22": "RGkauBvF2r8WLWykigv8uUySnk1jnPXdRN4FCgLKseMdrktPS6c8uDGA26pLSGyBTP3aK5bte1CYU2Y4CjJjkfg",
  "key23": "2JAVXgQKLrKkD9BV63dxpKGZkuxJPoBk5TX81sQe2PWRqJYap2N7nFFsZQTzs6FTanLTJ6HdMkZRDybciQHgwWYG",
  "key24": "4RTASH4JHxwjyXS3a2pjcrQi95Uy6HqnD9WMzHHDoa7rYtJUUxAVgns1fZmBq361epkvQdcuoWTY6FwQJLmo9oq8",
  "key25": "49Ku9paeQCC74zom4MFsq36oT3d3rYTkLjgbs4yg9uUh9epwiR787XYQxLVbsNcJjkEvcYuxnbHLi1wRv4LXLvtn",
  "key26": "iA3r2QCAkd2jztSkh426euFLj68uzs1NrromLGqzDhUC8AvWM9hGizWW2oC1D2mAdWS3ePaRHe9jeaGxH84nZAX",
  "key27": "3qa1kec3Y5SmehwNr2QNoGd2uu8RxegsvmNEq7ELDgP4sbg6SKZqhobiGEGDwP9qDuf18qHJj7TGUBxhgCp3PdcX",
  "key28": "3tSkLJsQ2tYrMLCC6SK6rMy3SGzKSW8fBRzNGK13BrHN3dvwxnJFfTHFVDh8SDKSesoREUv1FdnxTnN64i7E2fDS",
  "key29": "5TXjQL5WLdK4U9oMsGpemo13y39UXxscbdbDtXjgs5mTtnGqRhCZ54mEV7UxDpXP37M6R7DPoaKtCNxR8xNrtPAr",
  "key30": "4qVFyqhqKFD7ABDrw3Li27XdEYHroRjGRDyJJhv8mFFRxhdCKMknqMziWTEnGu54YcgKGXskAG3saHKdDqpHJJjo",
  "key31": "4Cn8SsDUhfpcNv4Y9rZhuf1Mns1KNqLdB2o9rffUMMtXsexRhKQr2HgCWDGsVgs9L9rGEvRbZM85ijqeMSH2kWG5",
  "key32": "2ZyWDJwDFQT4gwExZy4JMpK5qiWsy6ncWYniH8x6J5NFfYBabxGN5cnVJCgLUpvEtGjp81kJyLvMdgPcZt1TnFic",
  "key33": "2qb53F5Hngb3FQK2G8MkVnC34RzEiAzt1wDCPzJnGqypHGvYSJNEyoGWiVAhEmtquBUtoMzeNG4Vh5p4dUfzxCkq",
  "key34": "tt8qXHFHR8HALWkoydRSV4DdPCMvU35gypzcDyYUT51FPS96vupgM7hyQNDUJdoRTUxrtseDVEFWy7YqZw6k2r4",
  "key35": "66yKTXprGVGFv2qjHz81vSRV1SpYszb4qrVopJufg8B5XXGgTX68CUNg3C2EZnZUv4JKvaU1zBcDptwwWLvtXzkf",
  "key36": "5Qxvr42GuYffiWi11ieDFpvu8XaHipMNVTFpGdvjYf1i99WSWfqcNTiS4bySU7eNpW72NJZ1M8nS5JneWv2sEoXi",
  "key37": "2kfojmVYW2KXDLJWbmokA88u79ZUw13Dgcshht5RQkKfizEoTqaEPJDcVDWkgndCsvAe3SgL1endgdvn4U3AiJLJ",
  "key38": "f2h1N3Tba4EZcfcWmCVPCC4hxx8dtH1Cce6nrs5KpEp7UcYis7qV9cJXU1PDPPsXmHhZZGm13NDGd5jqLVhXKaK",
  "key39": "4GsrYW5ppNgwFVxapW6mH86Qidk9CVZqfENBjwvNmFaA2T46sN72Yyv3pjPZurMFtwAoiZdtUS4KZP2zBydzTG7Y"
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
