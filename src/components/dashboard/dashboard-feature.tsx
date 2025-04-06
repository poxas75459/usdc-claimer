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
    "ktPep9RZv1a4TFAzwfkRpEj5ctsu7ENinHPgAsbm9nHXk7HvDgd9idmdxzUNL47BD1eXiV6E7tbgK9hcwpsEJqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51GjHhcDWDS1Q5gmFaszfQsRF4Ls2BrGKgcd76mwTDSMZFkGk7MqBXtC6DYasZbfSaYhdQkHozHeWfhctgatc3hS",
  "key1": "3tqozQZPXkfgESdqh7jbQc9Sr2v7iTrqgzBZFAcryRoCHYRXpBXrKyPN1njCQSP5HuY2Y33Xm6BDjZGDRPuvDCi7",
  "key2": "2fG2xp44eTfvPzdMEcicTrUmwwDgtqMSevBSrKWSyHwScKg5aVDTBUE7SFfPaXqtsLP1qC5EApnfgPD7rcE9MsaQ",
  "key3": "mb2AWhkTJAUveEWx4A33TPpQoCe4z3vynksu2Er4rdKnzLKFwu3zK9CViH8rxPSpbkj1r9d1x5JTTse9mqiPSKh",
  "key4": "4T6YBz3jERfQkTkEVkyZ3GtL3PTQnEZ6AAdKrF8rdDiMd7VNjJ4T9gg9NpV1iAWDYTBaE6tNFA4eXUoprjKmetEB",
  "key5": "5ZT2bdR4eJtBUm645acpQtnmRtqiVmsEXJT9AKGZ7hqULqVFRq86gYzxRHLCpWqibD5LK25o4g34DxX9ShAHwN7d",
  "key6": "vY12DqxBrjkNk9zoARCRU4jDNq3sP8ykGiQWQtAvHb9BX96XuLgWyCe9LWLtNUDXGVArQEa2ninw3BibHPtmdGh",
  "key7": "2S36Wg2F4Jrd9n2rvVSh5xfnPRjirJeYH6BT13pwgAN4Ja26CUF6Cg35xb4PmRY1emGDVt9YSWbbXu6NHd1BRx6Q",
  "key8": "3Y2NPMuH7H3sZQpStr3xeGBAkkeAAvMrPik8TTo1PJvN1QnDn7QCv71YDTxS46g5GMQaM2Aw4V78o7TjRKguo1Jr",
  "key9": "567rUspEgeb3KUFQ3BVz4xrCXC1AmYir1Z9RDUaexw9bn54bJaoGWC5j6jqAqq9uUGt1knqDLrKWaVfHuc6ycX9N",
  "key10": "Huj7XLWheYcWkb9grdYjdtAqWxf2sLUjzwNCQZeuxKTHvNrmFSeAXoYtqPmHFWeJ7guqgunRbEzZN4gV7AoALPH",
  "key11": "5pxwmwWZoxGJdDa3CDbjgw98mBNxZ4omFh9T3TMQaxK8EeemzQUn95huC5jQJryV2osi4Y6fBpxghHcxSCKdDwQY",
  "key12": "62NQcj3jZhE2cAZL7qPWi7xaQEEXrhb3CALHKcEDRVaKksggQDfBEV5NqCemwCs9gkko1y8Xy9cS6BRvpXoDGsSi",
  "key13": "4Gk7nThgAoHzoXYgAudonFFVB2wyyT6mdd77JJdbn85tzmr1paBZC2cPzFos2hSg78udwsYnuEXkNjFHrS65wp81",
  "key14": "43yDTMZJj2fCdQ1wpaCisNyaHx7kV6mbnaRW8MDWPU9mVw4uVyUdiMbSR3TsvecWW2m8iXsDi6RtQZstgvCjBaeb",
  "key15": "3t5hBAqkLkvVdqJqhgpJmfVVA1YnF3map8cLqq37953oZu9EUecLu7L1Uu6R9RT7QuHUJndWrScNmf8dsmes69HJ",
  "key16": "48C7bVZ6qzUiWS4dip3124FBUC1uqAmaqiXHTavqNR7ZgVMAYkR6BtiYWnDBjEzcfQ4bVzHtrqcUUCBMg3KrKgKU",
  "key17": "4AJMXnfEqZ7m9M9oqoonjh4CHBgcSpwuxJSVzqAVTFqnfSh3xHVh3w1LM6e71oHFvvkWBbRweriMqmrgj37b9bRL",
  "key18": "2eRan4yApQcjueQmbXUPCef1dngfCt9Gf3Rd9mFWpFoYbTJVQiRNyHi9dFsqRPsfNjytC99sprumTm8FkFpVNDwT",
  "key19": "5rFtFFKQtXhCEeQzXBn2mbAZmuFvfr9xeKyaj4pZ7idFbwpqRaQ48QxuqvwZRzY1pLgUgqhCtNRbNZJ56yYcgJ9x",
  "key20": "3iAFjo8ur3smrBubmV816Nrby2dH3wCcg7QF8puT4NCJcZGnfCzfJP2yKbuTox3Qkrf8gtGy4M7uL4u5zZySbRcE",
  "key21": "3KGwQ9CvHZ4eYDjziUDMA5vKMKUeaorKyJEpSxq8Vg6S7CFNyVv1wBAVUKAAP831DWsuaMBT9mF7qL1DYrSgk374",
  "key22": "3SQxC1sWkdR2rEBJ9mSF6hWhKxUrSYKV6vHawS8nVYBpJiCk3FLrCNK4RqEKMbBBDqehiZvVgEwZVJ3TrtN2MpZW",
  "key23": "2cSRERFLwqRzjpVzEpRia1JunRXfmNcghuxZxrbqH1ivJGUnVja3vhMAxa2H1dZG7EScQmQHkytYFQYKiymqXxQ3",
  "key24": "4BFCEPifHFk55q94MyeqgL8huxXmLc4SQ3cPXXcemDuPsf7djJPehH7yLo9w6WcVKJKEyueRzkoMqVfTvYzunoAq",
  "key25": "4WbZA5mNnCeE3HRsmA4oyufeaRLcuB9tebevYBCPFhd74MArtL1pRLBjsMDqELyeZucAzdr2rnWXunKdhJ66QhUB",
  "key26": "5tbyuqd17bV8eji5AdHbi9v7Jnxf8yEBj9ZAhqgdMXBZD4b2q3pDULKRuvFhGW953qzKtzWZTgqggNTtsy7wQW1C",
  "key27": "2RBd9kPYAKSzhtqeiFhmuy3GPTv9qdLha6btQTdkg5Zz1LCAG7Vg8p1B3NN7aiFWaGV5r1EQ6fmespmJLP7qE4iv",
  "key28": "QCQDXh5y4j3mGSRFf65XKnZFxK5CxtmqTFZvkdTmUijvHGFHFZfH9rT7s4AjJqjW14Ff8tr9jFGkFcjPmCHAXxE",
  "key29": "5ykVu1J6HCbH1NuZKfoH13wPLJ9gjGtwYo51f2oEHbtrusjETo1wXraX94DzPXL8cW5yNJuRmQgJtcUJoaD3hofH",
  "key30": "4FJnyKR3P7S9ey3YaQguqbKS1ftei4bkUNcDmfnT4PKN72D2a19ChMTqWFDkdFh3sqKtDLaG3GMBFEUqzbMf2QSg",
  "key31": "5ZVc3KL5iJhBvRkuztdxekPcMZdkJEg4f36AH6GhGsVhm8c5vAoCh9omUZKi2jcNu278t1xXAFKFUSpqVupXmy1V",
  "key32": "5ihhh3HeZerKTz3JST5Ed3smBmrybAztXmfcvU22VqGNfScx4Fo3nj3UGyWgFngxKqPyXsL4asb3LA2n23N6MfX",
  "key33": "4fnQHK8HhjTiiN6NCFDLZRbCTF8GUdB6v4kL4zXsahiZiL2sCBRj9mnqW5iV7WRrgeNVQdYPgRQ3Vayvsx3ivsAt",
  "key34": "4KaTsSyk16691xXasbMSeSvXrbantCdLmbz9iLM5UpDpibvoEJCpUxPBEVfrCmUzmPsUb3k9LfMHTWmsoUFjgLqD",
  "key35": "4rk3n7dewcSdweepTfKBrtCdeGCh2CoJP3cTvJLXyCCG6i932EfNSaSNhE5KebWUSoY55QBBBbmaJesMPqaYEs1H",
  "key36": "3nk93zjTSqrPkxnSAq6VcCCmH3PSnUU9AMRmshKYrrcsobpd1rL7hUhHS3bqjht66dZApUhiwntwJ5qUxicy2eBR",
  "key37": "2w2ZAdvq7ciSFDrsi2Pr8jdiyEqYnDXJ63q8ANGZcPt1Nm6UoCj7fntFG8qh7tmxt5dFFKDyTffkrL1jKNcpvAot",
  "key38": "5eUcJo1txnAdvKHKaNQnsRmGfEvMFggn6SLHXtgr1L58tLCrBhe9WWRUq9uJAq9e3tpdRJd83MwYraiMbuEytQnn",
  "key39": "3ub7yjJSz1trNbvx63tZGPXECxxCW5NT6RJPbGKURCCkrds3abFaJNGL8f4nH4BCb8AegwKUiMZFFC3tqcnrL6Dy",
  "key40": "3Mafk2K5D9zMokJbL9GHBX4chhMuVodUUydxJhHCEks4yLyphShMxXYLBgHuzqZoHcwXuYwG5Rp2WvjE3yFxW95Q",
  "key41": "YB28YooVWR7qyjuUu4QqMUpHa2w3chcV4vGmxPzvYNpjbXJCXwjqiqsjx2x3h1phQpvb3QEmfiWwqYTQhTWpbot",
  "key42": "5d6R99bXj6eNo71dNbo2EoierbQv4ejwTPAFdcFw2jyhZXPfsUpeQigupte9HD6E4r8UtGHyVDFAnWaVJZ43Rbxr",
  "key43": "5ZXZkpx1y6H3MjaAJQXmKgr9LXP1JXNMJKpoPVLApFCXWEWn7pbHVod6osksXNQU1AJC8a3Lf4BhKPuEKzRqPDjm",
  "key44": "3L4KVzMtNSYjxXgdTZjtEx4gUVecVwxMEd9eSd9ruD1VPquxn4ACgsVPhMtNBffK5Dgeb687w2NVZ3SAFMXYsmBC"
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
