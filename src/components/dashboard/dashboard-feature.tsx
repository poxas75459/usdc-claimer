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
    "4RGSeWJEij7fHLG9oK4T1S9roYNv9TMcCj5vLb8R8AaFSgH4ZBRhrhSQs1p4gGX75JppsLaZTcWhwo4Y3esZpGu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gfSZKb14Hi7MwxuecBfDAMNgtdiBbuDLvwbYCzFKv3MPZ6w8XWgKwTqPicvbpncEjKEY6G1UGoq14qSKrHqv6Ma",
  "key1": "5bxTL1KJGPCmsJ2KRXLt7foSWdD2npCgks8UF8WcQFbWPCSrBJyWiGQEE4j47k8kfTwaASqMVkFggQxAXy1b9x2g",
  "key2": "KXqZLrw7L31tJghsBANQDYkdSarsPDgFF9TVJhHaqTj79qV9Aa8yV6BYgL14apbktQVTWzwcmQw66HPhK24WrAr",
  "key3": "5S4jzAL2JpwwJNMTPPvfimHXZURQ7kbsZGEwgcNT9zhpji4kEJKCLrxjV31ru58Gi22XpNFKY3R45fxqohTc8DtZ",
  "key4": "hCc8GRxz5JhPBV8dcYUy6Tycj9H4QWJUEsxX12ecK6cJGEgXUBkBYJvKmtJ5WMVFx15dfK9BH8GAGb5JnUSMdP2",
  "key5": "4ixBMr5ZLwFKGDamsRQMqBHS7aSscDDuracBRAk3DCjoc83Wh9W6PupXqHJpTs3fpGACuUFWN9N4sXKNZneXf1i3",
  "key6": "e1Vr9Z96GY6wPutrQ7XJ2mia9xXf8kXtgJbPNq5DdzUmifWrAh7zLBq1jTkDNFtWFAgk2kxCJauhFcFTDSnfBit",
  "key7": "5yihSGvPJNYXBAwoEw7CL2FBdUjGbJyAQ9j4632Tqt5e1sfhdH1D7N5mV2rMTYLgnWkVSLAxNKf7SkzgCjbLhWko",
  "key8": "2ZcFSaeNDkwEaeqqdPT44MZxJRJ4G7LBz32pNMzWwoLUD5vxKzTcT7es8LKYZTktiW3pTCA8U3R5pTrJw82PLGRx",
  "key9": "5dAKdr2iHgrY2Xh7hsKbXj3kzJo1mWAYXVkog9xrzsH1sA683K5T1zyXVBQnmWPug75uL1WzsfsaY9bxGKocFea",
  "key10": "MSpNyYmstnpj5qFYmm7og587uWQX4gfd7MKP8uz7HYNKbrMb2hTpaeYGsAcDVrqRjLxJ3i4vdu1QivRxMtmo9Gs",
  "key11": "4wPn1aBqjZF5iC4aJF6jWNAQPbVN7UFnuKKxCFAme547UnjqGUBr6B8xHmzze1Uri17atFsuXGCRgbTU7DxWaohd",
  "key12": "3LVHBeTiTZ6e4h14z3HuqnaWjhJunj74Pis1Whf3csKZYWVVqNdGGBFR8YmhPi1LZrwDUcBjgUDoJWXkbf8AmAK9",
  "key13": "3mYpUW1LhWcf45iCYTFQEMG5mu14fapS9Ay5z4aWviNAkhBkaYWVdq6wY2aV3JmTK9TZtWaoJuvVjjAakTeyFTed",
  "key14": "9sXqmL9sv837CFs5kR19apXgfvzfQ6DTwCFkXZDhZwspmU6GVMAPrdRtbT6bRqJEoUEpQpACxFGCQV4wjfcP8Nt",
  "key15": "2Z2515nd1TXn38frSThrFif6HcVoBRAjbADyXxMYuPSknp7XcX2NLcY279bxXyya112373XZDAMRjLP8vnS8fPwq",
  "key16": "5kaZtdoj2i1FpHvuo5GLmbHgtY24dbi2RcaFof9weXW4hBCer5orK4bZdTc4gT2KNzwkHZRuoPgdYMfWCcQvWoDp",
  "key17": "u2x9RdzLBMdaZe5saakYBB584Tx8Eshf72hoCtibP6p2NeTBZNCu3oeMcg3iWdauCVugJYLoXTFQXbLedSKEiku",
  "key18": "3HWpr2kKxsydZkZuSHRLBokW4Anw7H5bbn7mrEFAVr47o2CpzMbvh4o3smrmQhcqa6DtW4nuzVYFXx5JbgCb5Lee",
  "key19": "Pz649MzvKze9Bu15u2k6BfKD8nWPJbhiLZP8i3o9cU3FyAmysxN5Vr4TmN3yjBPUBXUg7yE8wj7aT4qS39nNrBa",
  "key20": "JanbCGRaFzxqpbvkBaGoL9m7mnT1dYPSticYZDqF3QDhJi6kkWwX5Eq5TafCD7GNqe1ER7zoyBbZqhq7Setcv2o",
  "key21": "5QSDjuVV14cbkutaBCYC1j1NqizgZbJVdX56jkq4ADK1g3AjtM5W6HLc6znXzztkRoonfuFGyK3nWmeGjYtbYCNs",
  "key22": "5h8ZT8ra8k4tFFDnNTCyguigTKzfiGwEuLxYKPrPXeQefGBuE63HZGCRwRfziSVx8JjVPFT4ognRqP2FSMjFcHG9",
  "key23": "5GkqeWBZY9EhxaHK6uJb67KsmtJWbouYMKCarKRvKrUKq7GajuoN2zkCu2KY3tgUaMqNAHk5a1JNjUxRbQKDXc2S",
  "key24": "2QFXp6fUPNyqvi1Xigz11sCkRZTZr8i4vcfs82EExTJ7Wf2LNtKUKAhKzAMpUZfLJWAg4xo6vgiCnReMCHbgawbG",
  "key25": "HKwgpJnCfS9pkUdgqR4DKMWAGBid67AC9H5tEJsDyjPZRm8kA4VZH6KKrkgXbiyz4WLKweHwLBWo8JgcYBmcP5Y",
  "key26": "5kfnd4zyrTGnxFkftMKyscbGmbuVWnL1utbToGYKUM5K9pkCzFKRFtCHsVjAVyBwRyVr9jmFEeij9LC9pXHUwr6V",
  "key27": "2SKm7yU9aB7k9AZKdju1ahiAegJZid4pzS81u684tgEzugwuFa7jTYEj9WQZwiWL6Dem7B69ZmKcSFADKghjWxjG",
  "key28": "33qyQ75cZtMiG4orfDxqkCmb31wyUda4EXpaXC6hYHMFT9sUdVWCqj1thgBbjegFFVcudgxwRJvVqgjC2qvLES26",
  "key29": "4PHwgwnD4rnFVNp8Nz8VDqYXeUYRCCoYMs8pLAhFWa7w7ZJNAcXpYjyYQXZMh76GKLDZkQXmDyGnF5MKUzxRE6CA",
  "key30": "dH7bYxReQtCSEL9d6BdVhYD2KfRuqsa4mMAFzQ4tfT25dccgdahKVGFhuyZTRfpHakqn5rjYGZSMFP2rYCAbpNY",
  "key31": "5SRKNfYRM8CWDBeZycqKKtgUTiBTmjnMtQxnVbCHu8dsH8k94L2TCaSqUy7VKo8R9EdB5HRLhjxXcxxt4uvm2yjZ",
  "key32": "T5QAQX9tudJ2smcGoMNHUZ6k9Pnj9JV4qqi3C2W5YFEe93CAfX8w8QK1TUFWYAVfDjFnvhcp9oAYZ1aRB9WPHqH",
  "key33": "33kVvbFuX3W3PXhXXHjxcfWUNk62eJrgXrzYECbEUVZMRNLUa77E8j3cRizr4EUsN555ysHJY4e4QdMBc2jwGGVq",
  "key34": "EhTv9QtNawVYwuzQz4MvJS98Kwxc8jb8o5e6xWMQCkbwssRcdR3ERizv8pZDajUANq2CoTXkxNX5WtWegE7MPfh",
  "key35": "DnB5uUQKnEgEhBHem151Sxv5Ns9CHiqLtfHwNYAFE5yHSYCywLeAkfN8YgXeWQLRRjoB681E4GhcmAKmMpYxRKb",
  "key36": "UoTkEpYWV7tvdDqMaGHnAn6nCtJgaP33VzsGA1SoyJrsYvcsPBcRDzKMq1k5FkRLcFr5jZAZeucYHhXdjLmb9gZ",
  "key37": "Vtwfje7kYVUrewDBSNqP5gHAW6g41m5LsnybKZoQtPfzL42ar45kpTfdceJ93LWnVE8152N544GgY5xoEhJu2Mq",
  "key38": "23FsG4q4CqrdZ63QbpEjjUECm2ULAkVoscT1ShuJQbLi1kY8BkLFgW5ZcRPfeH4ZNHhQgxmFU673XmghqtwLBW6d",
  "key39": "2HXfCEZGiLpr3va73cF6S47xC1r6QJRoCmjMTretvPtoW5Jpb1m8srk97i5XDA559KvgauuQ7iyfqHPckcNXkA21",
  "key40": "4xXj1Upf4GGVQQJpWCJ4ufBqkYyniaSFbAaX1RkLggPeytKutA48sr2aB8SaL1fJ1XhWqXhvGDNJQhMgbtnvYdmg",
  "key41": "3CrnGbYJCFpVg2z8A256a3yJAi6DFf4f7YpmaNkCsjux7Y3d5B6FEtWmmQKiMV9AdM9kdf5P7rhX6BaeZ6r4KaqY",
  "key42": "3ELhEdkGU6CLuSwp8yqixvtrBwwRr34u2s5uwk2PEXKDDDXHyLsgc4HsPPZyYuH86RwfxRVY9GathcAevC3eKjEC",
  "key43": "5ZuFb2jQ7xwqoY2QsK4TrBVLRxVfsxUzxoMau9pL3FSA7dAtLFbPShFLHBc7SjsgH1e3BFtenNfhnT3mGgLTjCjf"
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
