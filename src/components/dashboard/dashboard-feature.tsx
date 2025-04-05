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
    "3x7WNDPZ7wM9BkU6t4bqoDvvTAfN6FC3TocfRp7w93vhNQJKqukV89HQHpwZkjCEFF68Fu2NYkEGm84fTwoUgzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZYw2LcsJRYtxMdGVc4g1anA7LkvBZDpHNtKJySPyMRTXhWnjVehtPxECH9fBdjcrT6phUUWvLFgEQBpwQNN9BFZ",
  "key1": "2iTQACrkeyAaUnDfPJXFaPvPox8XLkEpFZLs5Q6nBQBBjcHMDPQ1JdWWcvjeb96k2KYS9eFwzMyR7JJRgt8NvojV",
  "key2": "59xcPnTfxM8bZBw8t6rSma2KpJggCPF79ag8MjwVqXfLReU3uradTTAHLnp9TNENkcSv9Ue5tkdAeovyKgqm21M3",
  "key3": "2uPyLr3fwEoo3JfypTHd2EsxUUbVTFqraB9gvgowQE1q1ryJ6wdSVDVfm2nVyoh24e3ii9JHPWict89fJwKzA5iy",
  "key4": "K9hzP4fh8DRj3kEvHwBHEwNAzLjxuCPPNXHu1UF28qK1CRzahZMWwCpCZNB8CLd55MD5rTgku7PWsumLCAkVg7T",
  "key5": "2iYGR6wuf6Hn82nYcPx1HyGUW4EiBtBUMLj7HKGpXC9DCXVpepnmcWVD62kdVd1tKdE8yLZdRFriWVqmzCouFSRn",
  "key6": "5PJpdF7v1YoogapHjWHJLHg7FFy8w5y3E3zjBwQ8z7VqE8oeWjk7buomKhthC7pt1ZW1uccw1RjrJ7fnqaeRZSPg",
  "key7": "5aeHxWfnPsKw5EQ2PHj3Kd2ExsXmmsnm1r7LkJog9zRVX2Jpf6VHqRc76uZBzgTn2iSn1o1YtUMqwyD3VZc9aAgc",
  "key8": "5c38QE4u514tEWJ4JTUeLx9sotE8VTotrXF4avAYPY9VmPKxqyMRp9PxBi8gzp1fuo5v9s2EgPABpAPnC3P53suR",
  "key9": "4ynKMQo1xb5yj2We4yHRhedbQcqfpJzZk9oH99FXeXRqsuThuVKPoBK2XWw5HDpXkcb4sQi33ibQr9o6aUVL1xRQ",
  "key10": "3n2yHiky3LVmMwEcWoRR4cY4nTRTVQmD52CKJGHRKqaboNJgsvuC8gTMn8AKetCLCsA19bu4hUDH6ejfKQGPhGA7",
  "key11": "4YLUUSYmiRHew7g2aGWdUxzUFHZ6E7zs85AWXc4evpfNG53sheVU396qFwvffh5LfGUg9DvZckDaMqZMxYGRZ79f",
  "key12": "2168in9XpspvpTcTYnHynAKa7vXp8h8kHFGMuWWdPStaqtQjAPhn7FLvMghTCe29RJYTR9sQq6NAz1FEAsE8PUQN",
  "key13": "4WZsj5uaXGSPcGhnhbVtG8RDerNmXXWMt4M5SNA2rNwxUtsQCtPYNZQAdX8LMKPTXJeR3SenMXnq17kfUr9mQZSt",
  "key14": "5GGieGkY2wCpJjPTrRcNfXxPPpJf98K4jWufgJgJ2pmWRTJA3AUrpbjpnS1Q2xZwZ71wc53sVjibpMRHJaQE5oxY",
  "key15": "4capEoySZ5PyP8gLRVRnKZYcixXLnAw7w9dugA7ZMcnaw1hFxsoWiPnvHnVvLG1an7pM8TptfEUa6v7TPNTw9prA",
  "key16": "458bPsRyjPn7EuFZM36RfqbMVeWdds7koLJrT7DUXeSazzH43SvWDN6my8gHbx1enLkaVZHDqp3UXoEGZjf4vas9",
  "key17": "3Hu6CYPPeuuNfMUXtGEyxHwgnVcePsQ2nPX6QDE5ixBiCEnpyiqViQetQ8j2yb2ZANeVvHKSThbtArs6GY4fvWVP",
  "key18": "F5KyDFKe7U8eqvBype25rcawCHLJGpUUUC3oAHUXc3gTPG5kFei2PudGa8mMxoSfc97DLVgmDRrw6XqMqwTvxMx",
  "key19": "LeWiUJ3skx7v6LWhPv1VYsxJXJYFp91KTSR4kCY9sr8Q2ptW21ap8f88Tau2t2pfTFiD7xM9CYQJjNJiri4ZzW6",
  "key20": "4t58ExtZo2u8VJZvtbAYBovVJJkbPtAgD6Tv59FuEja1YiU6tS557YS5mAb6hwy28oisn278mFGWwDA47ttauYUy",
  "key21": "5sAsCXfYvYs9aYf2WqbGwZkaEbgmVbo1ftjdLwvyYzrcPMNSo8gZhsQt3cysEMMWSMYo5eDDkws8EJa4bTGSY7VU",
  "key22": "3RsV4WF4ZX3WBCfNwF52gRWaSSy1FGWseJKiV4tU8AhaN34UP3gqnBARmTffKnpFatZATqrL51DVBrjYVWLkVXKL",
  "key23": "48yCWkDMnAohgk8mksot5rC6qJchAaQnS5PMLxF5h8Cnev56mdtzXMxMGh4y2S6GNpgDKphUsCrovuVpRAcySqx1",
  "key24": "3DCqSbhE6GiuPhsqsapXBKJaXVqK3yuwkva3azDzS5tSNJKLPeT7wCfy4zYyBDgW7zYfbzFidCiQHYcGVyjngLcu",
  "key25": "4bBUenHvBnde3HYJyXmm7oLiSb2wriW87AwupxjT1mX8GRNhjzqmuXN5esqQeLzijtNFZaeFAi3YAzYzQxRKnEjP",
  "key26": "3iEJtz7TfP4S49Fhc9oRsrzMTFqUQ1praeMGFJHk8H9JrAtVsiDAGw7iMsHCoBhmQ6QjFmSNj41oC8LrGKbwAMMH",
  "key27": "4FEMe7XJRVq6FPs8ecRBgFHf7X5QXsbg8s98sqVXsQsLxxLUKdLW1XxRK6BUtfF24cCbzGifLG54JbqAn2WZJWQa",
  "key28": "5oUNJGvHayYdyNXghQBN6BRPSLcarNq5vf3qguNdsH95cXWTmsKkGW5VA3uBxjTQu7qZ2pTxCe3EwUzgxptS1XGb",
  "key29": "3MCsbakZ2HSA2UxWXeMC1NDMD2FDXeTqMV7R91fC3WarQS7t2s3SeocUp4rVPhmeWouzUjaxNdhr768kxb5X58QQ",
  "key30": "5KTa2VN1V6m6N8MwgDTkgjgeiz1zzMSidvVmfLFHxf16tNFp7puYZDWuGwypyGuzacQwegftq4QtEDqoUmhdpoc3",
  "key31": "59KZjwf3dyJw3xTG5ayGkBLSTSaMty5N55Z6bAGWSh9BR6gYAwEmvAkPxGKKicmsgkYXCBfDkohA7HZqenWcnuXs",
  "key32": "3AaDSPYhNUhELFiEQ2zdNEDUQQEDY4UgTrWzDM3BFf8nXn5RojW1ELTXEcuXwMK2GKq49eUBB5M99rwiWTCbDyRk",
  "key33": "2gFRZqj1QRyYeb5KtKMy316oNadtJEQNLzMzKadMFAwJqXv84s14BW1MUZrv9Cjcn95Pudxk2fZyAANDyXujBMCE",
  "key34": "rNT15eLqsGaym7cyhNrthubS6CgKpfGHht9H1EFV3ZcvM6N75SjtWp3Pxq7KHCKGKHbSqW6SWp3tXTurt9Btgus",
  "key35": "4LqSxSBxggiM8XbHmCXpLPyQt9mPzDFY2qwBw2QaXLCcjRYP6Ld784xDfamZs89KHUzBNGdizmYz2sWJEPBqA46X",
  "key36": "4CpmNFxD8wgojvPG5cDxW8edDrR8Wm6Qf66c2vFEzuroH4qxy23gv9rMfMkmmGs8J7iswyh7qGFHs23QnVYfngyw",
  "key37": "3jPcqCjqcg78eRn3zomaMXdGxkYUCVmhJaSfT1TeMhE7QaMZpsJeFmWZwEsXaUzEuofzaLLjaaZHnmpFWTbhpRxK",
  "key38": "1xoraWSvNEigjyukRuxg7hXtfQaEw221JC3tP9482EZKLBxJvpPpcyxAsdTEau5b58bzbYEWoxuyYH8at6RKhGv"
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
