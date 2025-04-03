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
    "5dATccMCzdcpQyYYBzgEYejDEiXiAWukjCeNwZr2MWSuK8JXV5UCXSFaps5EazSwAdVGAUuLWVC3EwHJuy7agnHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zgXKzx4xouTS661nPv5WAvw5Vk1AyHww5Z1e2myr3RGLrUt53JAaDkaGxXbvt3z79vugtqp5ZFwtnp87cLX97hJ",
  "key1": "3u9jMJfPYCgAE6GoNSJNTGBB91MXzd9HViHKgCQJBqP7mvqut4gfJXdVigwr3FbDmnK9xNa7kjqxRG3E4jeVGh5F",
  "key2": "5tYsycdgz4uJbEbVksdCYZeaEZPEFoEHRV3nJ88yEoZ7jmNaJLTFpssQs6ojwTTFocxY6QyLAkmWHauQLTYnk3hP",
  "key3": "5J8DA4qLJqyfVSCgZNQkDYSpPDRafmrszyfdjzbe78chPQGzEjwRhDzheRog5u9oE2V1aa4XgukiE1Xbem5pZnD8",
  "key4": "5pajYGgoXaubCfngQkpTUqGpDje42tYMVnFRwpheqo2g3knFnk9cUy8H5UJX1CPsP25dMPt2YK7ZVqwLAVSZaHco",
  "key5": "2jFR82vtEggA8DB4TnDdjwgvXb79JKep7GtUbLDu7FwdCAVWjkhekFGgytXtfU1AccLT6V25MT2iMnFhYHEXLd3H",
  "key6": "5s1SSKUfPyRToUmB9hgCeHKK1HdQB6RiQTm6fE6AXAsW4jjtkDhsr3AEf1cqDjWgfx1FDbAoyc9JVZ5mPUQtPbfo",
  "key7": "4S3PQB8nX8JbLMJVR8JWyP5yzA7CmENh8xxmBv3tMpuvdkGwG7fBrLG3qWMAHpRJ1AWYUfdW7Hjbjg3goF8pZSMa",
  "key8": "3FWXFJcpX6T8874pcGDMgz86pVUvhMGAJEZXB5QU6U3eNjjiMsyqogZCrmmTVauXKHdc33b3PBrRNxquAj9CWUMP",
  "key9": "gTorMRZqXkiXAWRefGQ71XAU8zetkPrNtaGnuftiJQNDoBoTNgkDWx1aekGEvDEeQL6dmdRzpbNG3e3V9Jbvqtv",
  "key10": "5iNvr7kDhrQmpMKhvuEx2fb6QBQRqUMjhNpB2h4R5NpSHpeFju9brh1gaJoQTd4hGesKsgHGwFcSx4njbBKJ5sZb",
  "key11": "aaTEvRApazYg4pbdyu5oqUSXoAqMKZHuzHZR6wTEojdY4E3xK71BZQZgP6HsfkzDZrdJ3DXn31mpsQJWtUb2YBi",
  "key12": "32fDwMnAKEi9vEhrvVak4cUWYEmrR7ggN4zWZxfxNBiSRtNKzDdsVihVBhzXJpX36LMSPSnThgeZBnydzkarv8x9",
  "key13": "53yWg4VV2d2CnH8j6mE8yYyh7ZP6cJydM6QwgqNWCEkCRLoZ6d1CBuUFUUAqxX3ufQDHG63eDfHSY6edV8XPgmBu",
  "key14": "fdcwUzfwS8bgxQ6c9cvRxWYgLQkUc3n3DhpHDZ694pvgAkEa2L5SroR7Z6AvCUTHEH6Xbqf2eUm9oVbcpJ3fTQc",
  "key15": "26yyqbm633Fv9MsLkAu5vrppd9Bn7hpJRNr8YzEPgGbDUrgfNayo6VbjCUdBfyaENJst4gZRr9nvPjwiSDu2kLxj",
  "key16": "3jmYCirDgj3zRBQ9kpFPuCCSv1yzjiBXQi7LurriWJgiuPU7G32vd5iRGBXA78JKAFA2rJ6LTYWXx92fx4XYE9SB",
  "key17": "nxsfMwrzTQhPhVLwhD66BWh5Njra6t2pmcD4rbmkNbgc33PiZkJLjbjsD5yL8jo8mpff6pNDMNXkBi112pBbT2v",
  "key18": "4uPhksrfSBzYYPmu9vLQpajEsjxguPpoXDJWpdbEd3d7LQa5zyTwEhYW4SgHGJvFCuZL1gKhjqhApGPhw2i2wDV6",
  "key19": "545b4XAjNMLFnhgmehCh2EVZyCEjW7JHE4LAjCuR2dMhYd8kz1hWkec7og2tjBJtBcuyJrRKGZwCpVSdE9yoRRCg",
  "key20": "4qYkPnt9MUNQvajanqWk5ZqiR6PbAavmQVRMkp388BsxSpLQMhYf2dTMmZmNBxY936bpwR9xw6JdU3YW8Dk7nomw",
  "key21": "2bpqr3Nj5Ce7rTCjUjMEuCVRTCjB46JubgQX5Tsp5T2uz4Gi5c4uS1hxzCUBkowYUT3uexWu5px3Ty5J6yhMDSh6",
  "key22": "5TLSyJNXpq4xLBPAJWCDbPznKyC53vwgNcxUr5MsitLpiv9GWXJ6Kv64iTc1AACRvLE2W5bkcbEAo6esWMmWpgMC",
  "key23": "4xT9xX73c9YsGvGzjDvA7WcNdmRzKn2d6cALgoeTrHNGpdPZQe9exT5rpKCKywH9feXEy1frmeD3sqTB7os1dSjw",
  "key24": "4vW8tYCNeshheJ1Nf3GbwphPYQ2QX22qgsAG1ShPP8rzxrKFkQMwt3uZYgK3k9UZVTrkjBWmwbbQnmnhagvZztpr",
  "key25": "sTdGCwU5v9ta3hXT64X8rh9iPauY7EFnDB4k7X26dzwbNefoTep5hivR2J2PKUbvxrKrGma4doNqFGg21Ez1DpS",
  "key26": "3W2NfNUQWjXkTSx6Zb7GgiNCSbpa931HPY9JXjeVUm2A4Qwqh8dtw6Cqh5u7U6a8t8NgN7S2c9nFHVQCHMZqRV6V",
  "key27": "4THR2ihD5B5JSaKMzx1gsHvDH8nWD8fkxTNNpUSAXUbCgBbK5mss3Q7LmXFHxzaFvMjND36kXn1eJws7wfiP27dd",
  "key28": "2vJv3q91J5tEwGpuF8JmYzFeKCDHYdQAHYtyft2NSuzecj81ZDXzySDVa2pjJsU8cin3y9mdgiGhZyW4i8yVsvgK",
  "key29": "2XfYLEaYivwipvMuFSDHjbwWGsic25eYfc7GNX96RLtQX9LFc1MNDGGTXKgdextRGD9c3Q2TGa1waYmJ2WiDqPaT",
  "key30": "2Pma97rZCdKn43RFupndZGndXhxKjNXtQGa6oyFZid1N8ZvQBFEr71E77EKbxHYDxwLWJK9U32QqK76tg8jNXpTC",
  "key31": "v2wSohAyD2GyhXEtfR6GRzoieAjfZtx5PtemdzxiJEmaLh5z3jEzwvtpjw6EMYUyD3mbJLtXFsjv2EV9Jb5F4Ft",
  "key32": "3P9LPWcv8omk7tqeyrQFbhnuPPWZ9bUNRHZfTDWZm6QVNBEfv1KuiErTNWAbjs9BFb6pK8Jf4n4gCvRmDT1K5XB5",
  "key33": "2uovM6jUYEyWycC5zWQtLmKbPbNMpgfAmLGcCcT4en4r6QkgmfqJb92RN8fMSYGSXUKenrzzRJCrksSNhz6BrdbK",
  "key34": "36bLxvgY4qRxH7gnxGsMwXLNampU2Rtxe7vyxjuvWTWkyUaAekZcN48ZKAjoS9oB8DE93Xaijo7szc4eZpUeByDT",
  "key35": "4D1YNCoyVEU1TKB16PFnidtoLWGrwT2xhJeTpKCZaEdtfFKjg18sXJvWyysbPKcYSEeyRZ9TP3juGx9jnt2nQt1"
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
