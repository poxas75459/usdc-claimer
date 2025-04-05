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
    "4GGh4Zt5r32VDCEGBtgrEP5DPiwbuLB9KruLgQEnfsa96668UkY31CRaHVdXNFerZzGPs5mgqPpXsTJfda2ZfkAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QB4zJYpifrL9hbAcTanyvaq6kenHnAMnnQE2PmDR7CwMG8nmnf2gGPp3fm5yVC4gZnZYsGc9RNDKN3u4Yttvcxq",
  "key1": "qYWZJL5ufST3g3s3BgZ8KKrUqjKVYvhLuRJdKZGBZnCb2sf1nQZLqjJw6f6mitZdqppAUqo6x59vYojMd9jrF98",
  "key2": "2pt3bpJAhUCKxiwZq2WNtuMeGVfGD46kKAyNG5LrqPwHyyM3zBnuccVbgmEHdiMVAPWWBReRrN4cxVsELAcMcUND",
  "key3": "Mjz7U3XDPFowQkdcRGjFRwZRrtxCTh347yecYqXD8vhymmbWyY2292theXMCWc9YyHVomDKyyN1s9svhQndwXo2",
  "key4": "5wZKWfDu9K2JxDVJHekrgqXcNGy4EfAipm8sPBUBDuNRkR4Ydg7CDF3YjGnPThFHWAvjwSDaNAKPxLnJLAsaAfi8",
  "key5": "4eQrWJ12DKDB8s3jsx24s64M19JQxojqeqwqr3B566tvhLyL8jdKZ8gZjciMJpgvnEfhfWhzPkJ97JRo9Tgnf4MZ",
  "key6": "3ti6b4eP1jAofG1stj9g9atc273NM7Mrwb1byuEYgxvmLG47bzE1BaUb7FVPjku9sofweqnYSxgRBJBmobTLzkGP",
  "key7": "5JZv79NfzzUubAraWhBMACXtXnXjw96t7feNKr3GQwWLvuBocBX96Gu4n2XRsZqAjrvjWcfdiEADNrwTmsqub9B9",
  "key8": "49AzxadBcdy9fgZgKQbXhknhCTiVG5W1L3wEkxcjBtamiqjCFxfiixJRttXtCrPU1vhWAncoFhaEjymEXj4ojVQZ",
  "key9": "4eAA9yNUwxQn7yviqNDCmLCbaGs6VksNfFMjycPJabbiER43TawwmCEvdMbtPGhsvAct9e2PDXpGD4dzGWP1E3p3",
  "key10": "ffmYb2ng8wXBPUKUqL5cHs5yGdLwH1852mkRE2Zvc7hpD6DocHeGR2wgbuPTnG6J5TWtf8GnRZtTs8LSkCyovDb",
  "key11": "32MfsimsdqwpRorE7xrN7gReNSzajPztiPztEoGJDSACBpuJdqgr9WCLNBeNoWwGAEt7ynwPoAt1AhcDc8KqRkvr",
  "key12": "4Y9YU3xJWLKTJiRxfNG5Mz49rWPe6iWmFcdJEVjHqhCpFL9gAByUyAbKxSbWnNNdBbMVBihKrgrXW2QfXGUSmhmt",
  "key13": "LM2dDaq5t1o5WwmJQY464KEnJ6Britr2fzotSQV3Qi6PB9Rw3PXCZEE7ShfuTZq3aoVQCwoDst5KpaExkRFUjhS",
  "key14": "3ZtejfythkgutoDr1q4dYTE8spWSMbunRpguQPLabJhzocNHWqzYqrKVK5gBr6qQxDvMYtm2MMvkfHyKvn7onHJ1",
  "key15": "5Su44n95iULJFtpzVTFc5jyCYDx2F88mzDrzmRdNbZ99R7egA4k2h7jdMoH8PqGRW4sRshJbucNCWGR7G79EHRhD",
  "key16": "ssxQPQxScZDHngoJGkujedPCdLqzNJ4tigCXBvqzDqr5xPyxFVC6dJ8btU4q77mNRvYWKaGBu3m2dLRrD7df4dc",
  "key17": "UicnXo8Y3dHKZg3wXx4a6AtCodbSraqVSHQgZ7a3VgyDEDYARCbkb3tsSBPaRPP7EXSzskk7JaK9VrKuVE2iAdD",
  "key18": "3SAStop615P9ypB5DT6zkwHfAX3kjdsRmXSBD4NjjFbmNDaS1kSMGYBsqqEBQijP1RjZhfBWwzp1mcLSwyZS9JuR",
  "key19": "2krVfYPcHMAvP7QuNLEK5JSxz9ZEjJrw8AnMbDYzng22FrnhwRSRXNVezFrrcrA6FcepLBAM6ufCyBMvFqQtXiNp",
  "key20": "3aaT3SxoXXfM9W1ZyNMYPs5VrZG3yQnbiC5AckSJcJcXuefdu4hFcGdqnXuVsUjLhyugQWCCPioAHcx3NT2t6BSE",
  "key21": "52DCnWCyf7mhvE4Nw1arymbDVZ6RVhRL7vd1UnZhmBhYjSskrFC9qmb9qBmDiD5Ty1ghN25eef3gua8YrvL4QDcZ",
  "key22": "3RxdH8AMyegAMek5ENpa4Ry97jFnVGACbtFPGxgsWu3r4mX2dL2d9mxmye1f9A22BsgCc56NZbdZpdGx2YdRw9sS",
  "key23": "3gXyTnpfshJqrFCDH7VDBNXevWsgdPmojVbZuQoXQa5zskBZbLS9PZQUfzHjxgpNEqyYRsAJj2T6sY9rsVUcsEPE",
  "key24": "5oBWPpkakWqfSniPGPCfaxpYjai3g2HKZ6w2KzsNPEdE7z2vVScBtVUmakz72oAd1G7SLdC5DyHFjv1Tb8dUaqMG",
  "key25": "2xcVb4qrWLWkDoX3sGsRJZ32GtkBjs347wgCKasPY3Shiz3sT6ByQz9ntppKwfR9cgAwziii5TqXF4nDvqcYz3HH",
  "key26": "9MbsN14qdSq2GBQmcTRJtJnFdFGmJ6Mi4S4Cp65xjZPwAcgB6BcNrL4dLczttvpvhc81NN2FhECvJktHjAa435Q",
  "key27": "3cXry8PGBR5WP65HTDky5pG1sRQDe1SccAFzR4Vf8MKKMwh2yJL97AE4v4sWWQ451cp8hbiLuvEmQSqLEfAeNU6x",
  "key28": "4jieetxEpWzXfY1rwefmiduUoG2rfVwSdDezh15r6DKXbn75moyrao2SzFnS7Fuopq72ZpWxv6vdQ26VQsgV98cB",
  "key29": "3Mor3uK7ELwSShkupKQXxiYTPrG7h1c51mkEVDqaXTt58gdqZuS1EPpeipkztJ2WroeV6jhwRQmSQPP2u3SQxfCj",
  "key30": "3jDtNEKTPQ7KkHU7HzCrSKmG1mgP1SsYA7nY5ibPeFEvwh7f8CWhueXNiNxPU5x6ZcQh5gqiwVXUeg8ZRz6eicsS",
  "key31": "n3oA1K7rW5jioRst65qLbfHudkTvSkTin5wNCHbxTVT9dd1GjWouNCht1FZfJsJDShLM3iAWNQqZF5ZHr6cNBXp",
  "key32": "5CTv7fMx54ysAa87ULzqa4bqGc1rfev2Z2PXgThvMzfB3WjH5H1F2RHcL6xx5M55zYutohpH8SsyHufCNdSavdkC",
  "key33": "2TRbQDfNUdUcJa33aymgV1L168o78wqddpyMNSS7KLyS14dvpNE39vCLujA5aJ65MCcyFPhgnmprMKW79CpXUwJL",
  "key34": "4woDPHBaxijP2884m88RruspJmVzhqiDNmZJgob1hWMXCzD3Qc8YbBLiKxTxVnQYQN2oaLwqkjeUSHiLpwB7Vi6",
  "key35": "wt2fKZ8h2GBB73xdEoqs7AdKf93wJCdRGe5oRoBsJM4dBsNHZYNY6H9qFBHNpK4WQptrqVmHN2ScSQgJS1rcj7M",
  "key36": "5ZjuPJivNuCafFPZ9eweSDdKoZ7SzjZRkuSHKKsSHi4sSDd9BZQm1bF2ewCGSE7xpXuyRCUqnghxsoTpkXDic7uo",
  "key37": "2a23N8nVbvUy7GZD1Epze6giNGeLgwk7bLYUQJzR5Kdsc4tabmXPmDoumXjdqPqFvmh7CAiu3z3FbyGku7SChkfp",
  "key38": "2WGnoshEYdaRopdFquwCiGRvKMco9nAFH8hiqTwZnstYjP1FHTuEwVhV3ARq7gTJ9KtemuJqXFffvXJAQ2f7G6hs",
  "key39": "3RUsEDjnCzCTeKGBksscjd8vJZ69vNCMpnsUEb464xyeEmbogL9kw3mN3GA9CxNNhybd1u8CYhSkMHEVaD1LMEtN",
  "key40": "4LZEbWQtV7b1QJSNnUqwxc2HXoJxTkXJVBXBSR36S3aUhMpAwcgTjEBGKk7d1caNEkJJR9DpgJWGKWYXUSegzxjY",
  "key41": "4zP9Eex6nmL5wvnN8e6FWUqg2MJ4vN3Ljhhf7N16zP7ujpuX4bvEYRGT8cZY7iWkM86NLqxjCJmzeBz1Xta1zUq6",
  "key42": "2E6wS43n3xYkCsZ2eHZLqa54LLUx3Ctn6NdJHrR7yshrwrRXU5bbiR4yjoixiGrx9ggHcARc9woA9AUfMjLqpFfM"
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
