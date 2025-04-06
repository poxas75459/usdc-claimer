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
    "nkgvfEvWMn1kx8wXnJ1SfcxxdqZFnQPX5fTLw7YLdHCrNqsm3zx35c5EfqiGZn2uQqcw51bgvkFnWcJnyUvqKpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RRDcfxmVXju6pFLHiMoYqUsFG5wgBmcYEnTEDibJ2S1uQGjr9vRfPwN9edFqEk3SE7iPa9cxNfpqJRoNpvjruYs",
  "key1": "3HYC5BJFwtcrDemKb8KWjHjxZR5Cm2q9n3i6P2d2Uqz7CUR1fVmSJSY5KwtD1fnhMTcGTGSRSpvtYUkigLWfcPMm",
  "key2": "3qgxS1EoNJzwWbDDEBHfvvxGYKPpLM1dQwC5CVdGEM1YuREHtxUyKJfP8KVuhw96wjcu97TRZwocJ3jwz8PfusQL",
  "key3": "2ULeeSwZCaucVbduMrHmM2eHXTwvWLNUK31wGcqPnxj739PzSrsd6596itDPikpkyT7qsznhJceYN8FdErvoSMnU",
  "key4": "5GKkREcob2HuxaM27cziSaftvwMyUooPzKkkjtKtyEqBDp5JV6TeeoCoyG1SnsYaaBHBVJvRcymCJsj7ogv1ZiXs",
  "key5": "4kBWrJVhUBJifqrouy9wmUyLAaUyEDBCiMd54879RWVok7voDW61RPfxM8mYHg2yrBoegQyC8uZaf91ZctUo9xdh",
  "key6": "3yXspsU3QYKNfiAuck6b5QjVaH9jLa6SBGKAV5kVjkFgWqyJW3hVKrpx56bWpWQmYY7cWA1a9oL7y8oiBazV6jAr",
  "key7": "5MUbKwcR1aVMkQza2UfMzPCwpxgqHYgZmfkXpoYiHhoBQeQjNJ6WYfiMn6r5MXPBf2AKb6tVU8JwjFnDQkSh8dcy",
  "key8": "4M1LYhGQfnevqiV6drsbTTyee3ggLY6gX985w8jeeyzrgqw99eL5PnSmZvcQLN7SCdgS2gX2StbcWDrX5bkgt6Ws",
  "key9": "5EbZaedccrAQghbDYig4dZGv9ZvnuYQyEm6VwrAMdahyV5WXiQ24w2wc811vQwj3xxymBTEoJk2pVwKvN1ZGbLFp",
  "key10": "64KoJ2LUoCGRXK6GudbJXwPw84VcEHASrKKRzZpKA63BxrjuaDekBQSyUfGf4PBrt6g8YgwZN6N34qY3a7caC2zC",
  "key11": "3y8yKTi849jCNyh8Xt6NPDd1xQh7SWimTZxHGdLA5kTtUprYH89Xtwaf2P5dUnvaRbCXxHXNhowXhsvSjwprN2jx",
  "key12": "4z3UgEppHLhqvhMRbufr3mgCL5X38qMWG9Wr4sEQ47kiu9P3BPyf3cfEzvwz4beg1Lzq5NvUhgbphQfnpapK2S1E",
  "key13": "3GMr7mNGyB4k29HTwnbReETmazMrJXnbXPwJT56LnospPbwXgMu2XsVomiRehm4gunoLNeCisCJFhmWVaJfC5NJW",
  "key14": "2TeyEBvCot2fexTkXiLdhAQRtjPMXV53TmQHe5dETBzf822oMm3jL2wcM32QwLrkdE3HbswfvvPgb4dswL3Vp7uJ",
  "key15": "3Y9UDaGjokfsXCaKjt4Z1Wff4swD6pQrF5ZJzVTdsw1ArXkRx26VBNnBFGx2Vjyt3JYhzowv323bfzVdm9HbNd2",
  "key16": "56HZxKhnaUi6WPu1PNn8PDE8PpQMBZCGgxoocdC45LLSLzWekSxVcQrg1UnB2h4ykKDnVfz744qa22FAYgceErS5",
  "key17": "3tjrMBt6Qa5D8k43gpxmKdrh3eg2FnwchNHdFW2gzppydD4Y561k6Av6e7VoBtufwLjUzAxAtTDeX3dw6Nh4NhCH",
  "key18": "3SLvLWnDLQ8cpsTh6oYNix5bEVt4mH8GyMTMuGMYBPixp6waHUzsSzYSxAifKFqyb6XgPSmGn87PXwtiCtkBHUmk",
  "key19": "hvJwBNN7LRsTMqCJYFppTm9Mc9SXD3AYDUmXHCFFLBGbPFVt4BbUU626Mri7XTBnDdEs6YWQJjBjzMLnL9cz3tm",
  "key20": "4iBWJn9uLF8Pv8WW1LQtKRqsPYB2jnAoZMWioX8Rt9ZxtcnbXYzTGLQ8m9hUco1ZdGwAstc93RDWvJiCiWmkCh8y",
  "key21": "3BW8EJp4kKuRY4ScRtD6FYMiYoLTkWnLPsTJ52gNby13GwLgsZmRyea4xVx7apdo377RpX2F7QqPg6zHYp3FQBtx",
  "key22": "QL9Lc9J8H229BkoJWZ85JjAe7bo6DZZvaCcUQjt4PprksonNuuXR8dpLP7ZB4XKnpyFmApUeTBxqrVHccrrGKM5",
  "key23": "dTYiF5mJi9bHrEBWtvUfbJM6jKfnJoNjd3wHNoZaiBRzaAX8wtMoowr5rAoDeszh3YG3yXmnLri34CNH6hzk6H2",
  "key24": "4fd1LDGRgmcEkJDTPFPmDbEzbnDJbcG7TP89nLeN5PPzjMmeGNkQ2xvQYEHJXrYMrwWa1kumYLNcnX43FZ8FFz7p",
  "key25": "5jHYNvNMJTQiyvXM9JLMMJDkmhv61PgmSbv1ZuNJssLVRi6RTMzeehAtUL1dW7qRxb43h2YavspEdf8toh3WpbXB",
  "key26": "2nQN2dU9RzX2gmtX9E8atENhBQpsmhKcRzh1boBPfYV6RQAJw94JbA69M9kCpbR1HREZHw2yUPQc4HT4qNFCkR7R",
  "key27": "38HGSR6arGvWiDAkwjZX89BNgMYH13QHRNdnn2BYWJMixWeGcTNCLqHUM7nSqpNRBbsbh8B9nuatiUAjZS1qtJni",
  "key28": "2P6z8m6VMQbL65B6aVZC5YsATo94bCfDTCXuovaDZhHETxx3nZQWbKwiAfn5wf2yXMHjS16oEx6oURK5BhrUshcg",
  "key29": "vwYJnzu2UpSZ1Q5YSrEguXpVCrJzwGFvRcADjGF6j122Q5p31gqDxYpMXGoVDt99PpevEE216TdSM9KB7tZPEph",
  "key30": "4NAcrR65UUrjJmL3jZyjU8iW3o7im4EMkTDHzw626NoKDHQV1vCVPSxePx1m4CFv1UcFc696WRi2PC3Ke61LygCs",
  "key31": "L9wS7xuy3CbbAtdRx9viWU9ywW26gcBoT2ZwEfvVgg7Ps86pfeCnW4tmZxuGa1Hp5YUBrpdRSYrLbupfXDwUfBy",
  "key32": "nX6JrZcGNBECPk5rzzTpJcGtDBQFdCX2RoVVHbs5Ay5h4qwb7PVP4omozJczjm1dHcMQhoAJSTx6N8FcrZkXAKX",
  "key33": "5Mp4Gf3KejAX4vLMwY9GMrvTedS7ixtZUFxN5PXHByX7DTnz4iivonsFYTVc8Eaa8kKxHxN6nUAH8VtNQRxPCL9E",
  "key34": "ivX7o64GXoxV34CTdMTfCTfd3s8PCoNgL2Us4XCNc65BJ1mSSW1v5m9GMfY9cYAKZkUFUXAMjtpAwi5yNEhGY6d",
  "key35": "57JpZKSCGxE5JC1coFYmh7hmPSJpx7GjtQNjzTsrbYdWzviqotvzEsXZibRaWNDN17oJi1S68MhPPebj8pbNcE1t",
  "key36": "5ak3s5p9YSwvd39Hyj6z4rCB4o2KDwEbY6r1f2YPput9gP1bx6tV3EQRQXJYrgtpR1XAU5GQ94rhceKf1msBRzmy",
  "key37": "4uG6sQfunaAajdLKxsytJxkbVPwxncTnEHspHXpqRt1Y9xwrT1JHNVu48Jt3GMiZBqLRyhsazvAHMEYirnLbXaNH",
  "key38": "27yj4DEppxbLMWJ5KykHG91jjko6sRKkLVtHqr3H1Fvy46AEjtmj9womqYJdepPVknjmrf3EBQtahh6JbhahE52j",
  "key39": "4h8WiyuyjnAQEQLFkYE4NSifvzmkdmm2igELGd5KFQM5RthDAx3LR1NrmUreWmn6jFYyTSm8YL8j47zGtwm9bgvX",
  "key40": "2yim5x4aDWs3QXkdjZyGpmNErZ1DXBY5Vw5JMYj3qC46HBYjXLZxFrtYXFz127uqUt7AnXSGJMMQ6282MkApoBEY"
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
