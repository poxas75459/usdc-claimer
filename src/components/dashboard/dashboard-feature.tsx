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
    "3V64M6KGbGzTA2bp3MChDj4qbhKbVBxMZTyDjoN3Si7jLJV26Yuv9mAydo6LjMcN8TecT1yS97bP4ScFwaB9sqAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FH7DhSWUsfEDfK2sDHyic9iEVQpdMnFUjCqJYVa2HSQaHYHXZJhyiFAi5V4N9nxTMCjsCuu38t7vc94nLFXFZUo",
  "key1": "2go2GqQzR4Z8vFWH86uuf1TCy26sriGq2xbdCR9b6rd7bkzWx9fC7H3koe4E3U9kVgjNmGdidXthHbp91yKFrUW4",
  "key2": "2TAtqoVCcoCd3Utckn7VP66sinX9ENCLiJ41u4AmhAgVUDAZgE18SXnSjHJCQk63HE69jSMF3pAYHjGqhRBcqdTP",
  "key3": "4PDnw2d1HJgimtosXds5fo8adi2zDEDf1Y8Xxdyvce2cjFuLEFz1yToVxyi1PpBynbzNnuJs7WyJpmK2CNC1wvZ3",
  "key4": "PFaqCL5a6ZL1NLehHJkmemLfQ9ueoFxNYv5fpfH48eybwuJf3ZGHmcEEr4ZMwJD4xDx7bcMVuxcGGwYPicT8rWt",
  "key5": "BgCW9a6kGUuU68dGVpwWNYdmxc4ctYppTXv3eL5282eaww186m6AqexWAwVgtWAmRLTETSmMMkKX6ASmxqN7tVL",
  "key6": "5Dvd6o9EhurBh4g1UoKdNLqctpNdzBCd6caZPhoRUdXB3YyR31tRBp7ZEzWPVwYQvZ5zPQfgJevEDRG4tdKEWBGu",
  "key7": "62cHSAWmgwPJQdKKRBRoZEatUdkFhcQsbP5RC3RopeEpJTejo2WL8uHqiPW8ZKiEQeuGnPkdXQe3s8mEeqYsWTQM",
  "key8": "28VJ4FZNqEpnP3opcCNFqB5Umtry4bXcBY4hBRaQ4X6AHqgzPXYfamBxNNNvRuZUy5pn2u4L9YitxdqQfzMXVGke",
  "key9": "cdaQPJASa2T4JjSxbXvzEAonGSMExabv7YL2EHTRZ9o9hCWR4jRhBvjQUcN9wjcSam7MJ9VK7FoZfPzdkRZukPs",
  "key10": "5EXtAuFfUJ7zcqjfUijoAUZBtUau3XCWGzxWqEyZJWu4k5hVQbgQW1QahdCDcAncoB8soHBAMtRh6Vou5dAVakZc",
  "key11": "2JmayRM3z1vCEzBWxY8N16Vhpc2AFE82Xu1XZx1RqcZ4Y7U4Jry6EcbhbdTgrSomhwjjhshs7PvkHS5iXqGmGDz9",
  "key12": "5rMY7DtU6uPwwjFbrzj5h5GZ1TiXPCtqRgqLADL3A3nf9HE4YYefjuNPkuXiUNymDHzAwwgtFwhLsrjHwgX4pZvP",
  "key13": "3hdptUBY5PChHkrfUp3opvCwvNohJB7hCkWzJpxmPHCLapznifzxDD8pHnisxuMCsWXorY54ohBMjjAhjCo7Q6t",
  "key14": "5ycj9fuH8s3HwF763uZ2cuD3NzZhwQHgynzJZbvay2DJaduiNorK4fhYhZXeiTyrsB9yQTsKwMGNXc7cJR9m8JhD",
  "key15": "2X298ToFicSJRELs36nyVi8Sn9pMCyMjfqd2x1MgJNuyiMzZNoTiZAmQj3LnzJLZV62VV3qQGU24u1M4rDLRUwkY",
  "key16": "52WuG7AFojvab8Yfqgav52Nuqho5C7EzpTkEuy2C8pr6uHUURQeb2XhnaVp6tXChft7Qc9NEPjpW579hXRLesVE4",
  "key17": "3P354y8eSMWMKswnhM4hR9j5QUDXWe289NoNXurEyNY3AsrruUh2YqTy3C6Hn58cGq1B81pXX7CACz78K1pcdJ9q",
  "key18": "4nGWN2LNr5n4JYoyTDcVyTuaA4TD2RLnVAQmKPRjSN1XtNLPJiPT6XK5oVjNSaAt1aigMBmM3Stb4vEDah6uvnXT",
  "key19": "4i4T4HKPjLQ93p1Tg19zHVybT5kCJgqx7pT1PrTy5f5W8UHi5QFn5X38ocDuV78YLzjBo9cNCHqSU25cjFSS829y",
  "key20": "38fvL8PPvKSwtcQGkJ86ijzE4Vc318eJjUbYmkfVLFeNSh4EaReaczRNydTqknuioZ1heVNEidv1aWJ2sRiFozaB",
  "key21": "23z9B7FGv28dUNtohNkkTW7yUGzTbTQ3iHttSLTd6jDp567MKcDU2hMJMPKdvyvd8BQ6vX9TVX2vvevrA7TGt5TT",
  "key22": "2HZnfDhdsSnLWRUTtreupk5bQVFyvPPnBoL4e8nxnmNnaYT9K7VBhzhxXFG6BDLGoL4ZsWuJry2NjDbYaWzaK2Wr",
  "key23": "24d2wtVzFyyUKKz3TuyiqrTo8AGEXnEWfkMjTqufnC15ADrfvPh2ASVypx1KdmPopkFPRMe6Jy9eakJYUjuhXrZu",
  "key24": "6mrQXFsZyUa5AZ6mQqD71kTZN3ZbiXYtiFtvMNFA3hrPwyVHgocN8D1CyeXsEn7NxjU8LW1oYmkLNPNCyymxppj",
  "key25": "2heQM4Nnp21NijrAE2MbW8QAHPuVkCNGFuG42jZdwmBbAmJARZ5fP37hB7yMmDipwrvrpMhikaDhSDUWGwYFoE1i",
  "key26": "2qp6tQdfjzfXNSVHWa9HmpAUopkmfHSnh7pHFhaegGHuKB5KQJwE32odMtg56f3vvnBkjwCwRcdhQQoowyk185Hr",
  "key27": "jc2Rpm5BpfA1FuKBMSPchV2urvLdmMKHDifdztAZB5iKbL4c8c8NS3oYLQW3cqzydrjVi8dNyxJj5YJrAnEfVb2",
  "key28": "4WkjdKdmU9tYrfwiPQzN9PwSACo9ARv1HvN57sLD4U1LMhkLG6jn5eKTuEGxidS3M7KXVSCXba2Dmf3pq8dX9qHA",
  "key29": "3zJ7W1bq4z6RVzR8s9dvde5G2tFoi3Rzc8ecHQMbtFbbraNESec21cGDHVwcyRo5shdA8PcDD2MNDPHWRELXNmHi",
  "key30": "4wLUsvRGLrUmBafzTY68iiXZm2Gt3aFDyntRSwyd8pRzHwXUQXtuudr5Ajkvaup5rEDDjbBKCYzG8zdmPWqWLG8m",
  "key31": "5jnK2BWg2aaknPgZgr86haFVuV2zPhgpFh5ftGiFyMDLdovcU8MwrsrJZGUdtHPd3Ggg1YjDdA1Bm14fbvDdiKSc",
  "key32": "2sgbzziAhd99pwGTjWixJWc66pgipiq8PP3QfQckTehw4qufAJ3iktsWVTwBZg2imKaXNG3TzivN2AC3SwTA3LRE",
  "key33": "3YoGUTxnYUWLrynCuXyTzvQqNDgsyFWQUoiau3YWTRyEjoAfmoo1293aMYD5W1xVx4n4mWmgyAcE5xRqbcPfg67G",
  "key34": "2XGoAca696c2SRtnfuBsJGuDPbufZxecoDgYyKcdQnGekM7xXJ7NL2aMvGZLFFvcxys6t6EsE8WW4xyKTMnaYvqe",
  "key35": "2oXqm7ekXtiyZGNsaxhq7BMx1sf5ijewvEz1A94JSHiuK8tvRdwQTFagdhfD9kpEyjDyUwvh9a2mUoZ37eZq1bCq",
  "key36": "56XZTWeQu387fWMrHrAtvnMmJr97Gi7Lkpo41KVtSkcyxYQtHMrT5aYZBVKLw9pseikatKK6LBH2DcTSJABmf7hg",
  "key37": "bM5sZV5oibAaKSKiLfDY5FoT18M8AY4TMjVCGgspbsRuEUQckqnFoTm46uRbcvCGCpkY8jD7w2YKdHWt4YqGFyC",
  "key38": "4V2t6nz6GuDtNU4YAJNjhnNYEAizXBci8va8y4PZh5BPtPdTWey1ryFnTHmXggJqkjhkne4u2GqVzWH6uya5Rw4f",
  "key39": "48xDFnVKpCRLAH34AJNkCwy8ZVPw4hHp35wUnucJ6wEh3sNCeAgSYNqNQwAoC5kEyvZsGHzVtq1i2E4PqCm4Xzpq",
  "key40": "4cNyqDBBxsZiWaduXu23NbVVucSefNjBFiCPZ9NsxN4guGTJ5pfn9EnmcuFeiJznYtJpNMRXPYt2r5W8s4LMCoxe",
  "key41": "3UJEWpCw2fiMJiURpc13pbW9Cf94CELtnibYsYiGBhbFNvqjYrkZqq5TDc17wWLGw3sCBtU87b1cpSPMNk4SQzwt",
  "key42": "jsC7rc57qTDLvZs9initBayXSmqp1RaLeMGK5b2P1arKA1GK3RS7vjcjmyXVrhKpFQqed4risD6Tq8J6CfCoUEj",
  "key43": "ZLkBwwQg6298quE48QDDB5FuJfWHx3MmgEuWdvYZgo28ZC2hdfMjBERnfLVkK1rGoD69dsrL4A3y25xVpJgGBDg",
  "key44": "4yThQTiqWBry27eYrS73jwuP8tU4zCx77mFRyshvzhEYHq9DbMQ8yqSPrPoMwaL9zDebH8vuZjRXBCARSrRqwDTu",
  "key45": "fMcXT4LZ835DqrWyAaBTp6sYM8j3MLDkVZ91dSwEDQAqYuf8rWtHrS7fbv5xfQP14WKBoMWPNa9d7c9aTGtHtdo",
  "key46": "XTNKPyaoH5rjjmTHV1BedhPwBk4D8kJVWLJsLTHH4SVHn9ijPxVY7Gk5UyWoSxM9j9W6WXSeYCWsDGVxL93Dok2",
  "key47": "64WcwY5MDzZGXbAzmka72ZH1jQitnAYrBLR3zevvF2MiMD3tkbbh1YQAhMeBXozfWNneGKkBqJYgYqP1fhgkEHhi"
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
