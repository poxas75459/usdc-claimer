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
    "4bsTyKvEVkZEB52vni7a161rx6YJU25HMPw1c43ZLaGVCKSxP38H74eepnrRuKexbLi9GdotEPTCzu2wYvNPLrgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b1sSyqro8KPbNjS5t6BqCN9YrS2WbSQFDa78UeuKp5BWUH78HDR6hSc9DdJ7VC9UFoosyafJ4okLVuHTrtKNbSj",
  "key1": "5qYQ8RUm22jFuEdctKozT6KGiopV4Ex893xcpEyHddjavqNw31w5VoYsf2a63wNYyr7v4nDKEUJCJmtzskaNzD9n",
  "key2": "3U7YgxwuZBFGYodJusCD9ALTXi2uHh7etfWrnm8kLM51V6zdPnMrC8YRh61PGrZQUgyFxTFuj2snScxoZjifB5Gy",
  "key3": "4BWnTJLpGUrdngXmC1vaMxsjhjbFibZ4mHjMo6Mcc5RLZUWpd4mVbftYHpjtAHMDPoaAaGW4eXDee26xKrR7trWb",
  "key4": "9Ri6jVusJVz7rfkY6rF7zgUYTzt88D1H4oLfGQVyF2VabQtQBaMD6RhMmUqtU7V1y3ZjNzauvjKctHHLnd9zSM4",
  "key5": "UFTuQnBSP9B1CGmGo8FMfgHBjfgx3Mhvzd4ds6qW1N67doZ7e6WSRE78nGsLK9Zr3xjo6LL859d4b52Gb37b7Sv",
  "key6": "24aZngux3wyDiBZA2SqjsRaWxywrAJsYbaT1FteGzkcFyu5q66hPX9VWaVV2mFFCWmyjmWAKJqxTfKF3tKNzaRKa",
  "key7": "2AkWEfJMZgS3iigMtGp8CFAievrMSXoygGwVLFHWYsMn2k4aLwXKTQkZPq4u6x5kEVqanFwbhcpqbrTeHZxKZh5z",
  "key8": "4hXNSEKeUabFgsRKU9btQJ9eSYtZRLf2H9HMhVRNfigVrSPJZByp8LEcZ9wNoeLM94t75NzoFKsCgERZasHHHiYV",
  "key9": "5cub8myGrraEWTgKo2TfNhVmuymmAN9CQRz9Q4Q51LQoRQQoTbcdcYupjTwv9qtNWrboFoaqa3rohimWDqU2Lknp",
  "key10": "5jV9XVsuZjKdHk6tVAHsXjsX79QDAoj3k5GfkEJiaRsd1wTSXU1sUUd6XRw29kKrWTuQ4qdKba9n3J6Y4WiAZ7ND",
  "key11": "4g23H4ZrMPtPwYT2im4h7Bjzpnd6o5kceZKqeHFEqbv1XqeThkCiEscr6tQKhwkmXuTK31RwdDfd9qNcUT4fgZyW",
  "key12": "5aua9My5jLGtzDnF6NxEpFNUhgr1ngJaEuj5PF6qybAXtk8YqGjJoah9ECNpeR2vYwAVyHzs7c7eyFWG7i3KKmgH",
  "key13": "2esEmV5EF4h5DWdenvAh5EyCCjGWepRjBRTbnRJyhLzjUNizSsTQHwGNKh6HK4PpstxBtBWpBCN7cQHmyDNeT7kZ",
  "key14": "tst3XHMZyCVLYeyV1n7qpLCx6sWjeKuiHYv1ryx7RPc8BTUNfYgx5c25EYnZp7orFWy59zmNKMCGDZ9czT8xe2H",
  "key15": "31e3wfZZNNv1y4GyZapPzak1Cef3WyPwuBtVT2G4RPM5eP5va7Ybpa7X8US2oBMuMeJXx31PzxpSx5fxEQfGHWzf",
  "key16": "4Q4FPKV49sfbJBhYrro2vTFHJJ3KVaNaDWKKy28wR8t9fDFtBWgNvfgButpLM31x6v3LWMaLM2pCeUtHFhm5MRz4",
  "key17": "3s9JT2681Tm6SPVMo2L8GgPGLkgjrz8Q2RWr7eCYpjqZFxG3oHZqeoLy8UapBhHfjmsex6RGWPBVwckDA79Q6fXN",
  "key18": "4kQi7xKRyHdCYPZcCvPY4SBCWLMFBKCvwcmfDwXJccr7FrMSJj3Cfv3wYqXZWzNnUNytWpcthqAy7g72wz3aSQ9r",
  "key19": "2r6BP7YHzhX6RPK5SDBMknMgAkscDUF5DJ2WzjXV6qYdEPcAhHZR5SJUKzSU8QWZpgrebdEj1xJRrt4Tsza1mjgE",
  "key20": "2Xfb1iFjmQ4jv5b9baSe7orDBsNj447dnNvD8pCQtbgdWB6WQmxryaSS2Ajv73JL4KedgsdpALm9KfsDUp7WEbjT",
  "key21": "2yx6M36Kn6YTfQmxCUimnavmmW46qcpW89uThiUUVN9pLXrvTSoSU6GMFtbeWPB7VsBSL81JZrzjnAzYXNK1DnXq",
  "key22": "TCsRyM1pns4cd1NJ2H3qfNwtdNAbEwAxTVGp75jvufdnytKit2kfNLMhurZv3t26e8ekxHuphze5uv8dwGATRTU",
  "key23": "57LWezyRM2oAMboQD5AKXJYSkDaR6RwKwvu4XjLVQLxEP6Bh9XHoThwscoHi9SUy2HNTjwbDrN8EPbZn5LqDW8Qe",
  "key24": "oMFTbHbB3HhKxUgZqGWJqNpAxVLVDjHbHFqwDHSq6r4tXfTDXssiFS35Ze3sTDNqJH74EtMGT6tdXaLV9R8rYqk",
  "key25": "58GJmNkZmVzqdAV51K4NdNsaVXhdPzGaNQPjCUvpf2bGFifvrSH6MwqPbAgMqPtJodWomMDazBEGzk6hngMB5dyn",
  "key26": "3XMFJ5tJm2Jt2aZQfroDWCZ1f4GnX6HZ84FPDibKf7w71XSaR1svmkH4pGgUeVXHdjDjiwchsE4fPLBwCm5SHDSw",
  "key27": "39QpxuewzdP9nWXQ5jXfUFrPX8DtaXijt2nFgSSVThpSBmJ3HbSNnUVWCHCCJ6h5wDKVhTWcDgs9QvUrWW4vWUJi",
  "key28": "2Q7egDrNnLay6ar1aBaee7c3Wqr996j6LYPb98y135X2zaZftjjjmcXqbqGQzuPJ3TXznAKV6xAAAa6NCrxTEfJZ",
  "key29": "4FhcHjogCpYkwgogzVfeLusAfV8TRy1sfFSPu9oUoWwHuzjTqnYgcyQ7XRZSGqak1R6z1LZcbjoMNbj2G4DV2r6v",
  "key30": "2NAiYENUS5GJvE9keKF4KWi3QdVyz9knZiMtYzM4ZmNHXCQu7KFJVkUkh79F49KaeVYvpqHMLwFhbUN8k3zXmyPG",
  "key31": "4dP8qu6VnvDzR42EHn93RtSSkucMLoydynsmeuuJLoaNK8vzoMZe6mzHPqomwbLp4NbXrdDBi36rLY32oUmxnzEA",
  "key32": "3rYFbkpPikJc4pFQ3fF6pf8ToqsNkaRkJkQeQ2ErA1FHKB2HVm9yh56udddZP78XpoDJUD3iajBtLXGsndj9Rss5",
  "key33": "2VFsG4wJWkaaSoa61sNwGaV89W9w4d7DAtFaz9LKGNqqACvGxLhZqFwu49zdU51cY6hgWM7cM3JKT5BwoPzsCFZM",
  "key34": "2qtAgjjGesDVGxTbn89MhhiJXN4JQcyMYKvKjQD5Y8cTCKzTGaA4htoEM6Pxo3AsRxqJ1nEUUNwGpw1sDTezaXdi",
  "key35": "41Sj6KFmC16HykMK5bCz7i7WLyGQvhNd3MXTLu5bHSNVdEGMCdDJvAuFK1AcGHCZdyTyCRnUXDkb7Yk1BjYmePEr",
  "key36": "5sRvvhDaQMTx2ejeQYFgoGqQixbRvcb6emKuDMnv5Z8khVKryyMNEwTaJCvEoNEPMcnJWpNBritBUsirdzxqnxZv",
  "key37": "4QcVy3Tgvakbqvjbnx2YwLAddXj5mQwJMeJFjnLmgDYYEyhXx9XUknQKk5GKw62jHpdjiejeDQ4sonForufD7HQu"
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
