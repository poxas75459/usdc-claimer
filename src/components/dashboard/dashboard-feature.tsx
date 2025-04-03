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
    "5SnYKvjsr3MemJjRksP6SFf8Dk8Ex8P9pkpdi8matAqCvAUK6HbCUfKQFfHk5NPEyGotGfVsfxDU88oXnX6Jzu8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RSFmxscZZ5pgZfpyGpPCbeYntAe1qQUETWiYM5gA2BdiAeV39YpCN8NC64bpeFEDE5NBUhKyMane7LwQxexnCBF",
  "key1": "4pFr4LSzXDcaMR3xpiXR2sffmhJbfUJG68kHwRTsy8WUBcW5dupLQAhgbxPXvWW8jv3ifh6VCv7UKCezSwxtR44Y",
  "key2": "2bNfAUVa5w9qEHqyh7YEDStMp6jXZnnqbt5Zcavb47AxZH32GUu6X2Ee33qGLpkTXZ5mXiDJx4QQq6vZPVcunko1",
  "key3": "5dxmCiE6xvP2TcdUUJ7CBrhY2Di3uNLi7SSjBafLbxMD5UjUZGoWBPmp8kFPVg5ZrxdQyxm4SoA4E6SfHqabzewJ",
  "key4": "51V2y6cFyA2DpBpH9U4i6VjQVVAwf8VGm4v9yUBmYKyyCYPEHtHdM2ZHrvhqGmShYHzu1sHqoE3dWmkukBMiL9Bc",
  "key5": "3dTmyiGarzomYsostStpaA4cF4Cj6YXHgMVmyajbvbdBPjYGhFdLTwd2pfcANJCKMR28QGweqeyAJywY6UAX751V",
  "key6": "3y5uDgAzSGeWCtsfQCmT1MBYQq9Buf9eE4Fnq3fukXZ45zR65LCoTamYaNYJHaycAZgeN7hDjAPVKrVsCRB4XvY",
  "key7": "exkKm1kcKRTczVZ2WzkrRrtcniyz71TVo6XVN1C7EZhN73nSimRnA2wN7RyieFGJYyPVqCfqdZ1UKduYXyh5ewW",
  "key8": "5yQBNZKNJhzE2jPh2uebRsGF8fmjZyMaxySMjdPikrf63AbovJdx27STLq719hgabh9tfR2ukSAb2Rrw9RGjatYp",
  "key9": "2VmwoQMP6g9PDpGxuJfdyUTrziEj2nNWz4LQgqDp19npe9LSqqQiXEqNDBNeaHr9JpQozaWQho62W4rb7oYye84f",
  "key10": "xNfLGKQf4XPjJ6UQ1zbsaqpgr1emDmhybJ4SsbbbpoXRC33eWghhh3fwtiNh2Eie91i1xRJ4y5ePpyPFTRgioVJ",
  "key11": "5eaLHHDG6SiwSk6SduXhCFPuwUr6UTxtnE1FzzqxcY9dn6x1ky76thCHjaZvArj2N2RqEXkBTrLa9xynoYDGENGz",
  "key12": "657Yjg2Fb3P4bcNZDAxA1AXUguy8c25fc7iuzttnFLnwiprn24Y3bcEiVBwXcXH6EfxB1YGvt8jEju3kos4yFXZt",
  "key13": "4PMKioYNXLYJ2RCiBwuCVxqkLzuX5j53RnrquxyYEPVpBnGQ3BUxSuu9LFgQ99c7AFe2yS2Wog4FQ2Ntu2CkESyK",
  "key14": "4kXRFdW1Cws7KdonzbcbZ2xhB44xDu8JNnvRS5avDU7xiLuzQz8EsFDKrnaY3mUJtAn8KGduc3hEMxCuMUwLZUa5",
  "key15": "43rRRrENh4RyvEoRxwpsXsDDPG7FizrcFiUF77mzX64siSYD7wNGoYavN1zVkASbH6PBPP6yuPwmtFPSgKDhVutT",
  "key16": "5mdNTAY6y3YGPeBz6eV4gXx1wxeWJKQuqP77CquPZgaKBNmwwv9UaChtAV85wSYmwsLNZ5YdawdirNm7fdCTSv6A",
  "key17": "mm6yzWv6LrSS2SCyudS3Eh3NxTmP9WHwqYt7sxmf6deLipFXNW6gRiDTVc8eE36WLNiRWMYHQ8VANE3QxcSvimj",
  "key18": "2judJEyrAaH13oCyAeGYFFW4iGumYWzAhn9zDvMxMy71X13qER5PJGkbEsAeMuP8uosDREFwMNLPJFCvfG82gbsP",
  "key19": "2bTGm75v5ZG62mYwmQ4tbdQ8Hba2iPmVEbxGaWP1gf6MVrkuJfdEUFgJh8kfXZXD6EbfMEHyMZuEGGYZv4QZo71s",
  "key20": "2MVhGJ2Fx41Gr76DhAiujji2k8A8rhQ2UhoDuYVhZThTxmM8ni43PgJxgUX8q69p3fgnh9HZSQRX1Mnee8RrUSsp",
  "key21": "7qu1wAMtr4vKU4zryBfrghxBcxoFQkN75MVmwMFv8isCuTGV8R3JjnVBhYx4ify7iryLd5nCkwvjwPz3xdoNE6f",
  "key22": "7cEEVx97QqAn2sCUFfMyhSAz6bE5hzawbJNJhp85favR1eocfH7jNwm71pMiMrHa4wUyeSQ6rKqa2RH1EHDwDEh",
  "key23": "23CTUNPskWeVzrBrbX3mypW3qHDa5UvmCyAJSmMDSWJaa7JTKWA5LsMrUx8EHLw5zWePUxpFGWztvYsHXzrtCdn6",
  "key24": "3Ch9f3uhn4xRsUcJMF87YcuGZHSRX1Tfm3sRDWmaj1yXbQ8ivu9cekHgzb2z4kMj2NjGmmZHKnqNQhMj5vCms7Ke",
  "key25": "4Kbo1HGMFjNvYbQmMQ219qTTuMAh9jHSrWUEh1A98JmurbrxBYCED1LdG2AzLF3WMsPnLnYWDuXrTGWyWyK269q1",
  "key26": "2c5MgGJrn3GQtjkRnWQidpZNf6tecJCEXsb89JKrL3LTB9zRdYY9Rj4WQ1JHTNVUewQ11u3dSvEP4Pm86xaQdf6J",
  "key27": "2XBrCj561Yh9jsw9AJiTnJkP42Z2KrU6xM3bSFuomku74y9bMuxMNf9cWiNMVgAgbWnkETbxfxp4XVV9mWEoQXKY",
  "key28": "4sYLHLXeQFzxr7Es5fAWVdMtBqh321BaSAKnUAskr4H6sb8aqA7daBk45SwWK7KchkghwGSd8kaL6uD4weBEMadV",
  "key29": "5Sz3vKC43eU3fe35jKyuh9Wc5ZfVWGW5Ya76yM7KEeQpeoLLTUgLD3iezSAke8ukyW2cvkx497bxZQkPXYUuj3aP",
  "key30": "2jh4N3SAVuMGSsUywXMS2Zo4RqPHJipcucQwMT7tHStJ15jcisVp6oaajCkmAqdca6VvaVaqJJbKYNM1HDpD9qMY",
  "key31": "3Lm7NB3X2T2XviWbe8AXjTBjzBCUco1tQeQu8o8UZ7539NFPUiK5s9TA9tbWxRjPGavYWzwvnrHbcV2hM5e1k7W",
  "key32": "5TD2Ky2nMaR277CVmojb2UEykdvyc3dTQpwKNELMpGQotUY9adH95XgMSqo7fGjH5XhtzmiwAEiiChYPLBwtTjBS",
  "key33": "4j4YBJxbP5bBqD4DeND9TWBeh99cUs6GU5Dx2RPJ3QRXGt3iYk4Wyx8MapYfkMvR4XBRhDgzV9q2trWWjwBw8HXJ",
  "key34": "4gYQjdKpDAVF5ok7YZcd6hpYefAYgqazYRLCZ4ePwGUAVGpNqj8B5ain3LcuNW5LMaqrY4eHFnjNvdrYXS1awMfH",
  "key35": "6jhLvtYQgSXz7ZNzVNyJ8UqKetj8NTGy8NwWEHLBTKSYAaDxatBMfF5is1FZhZaEmGHJhNNwXCSpuEsj5imkWMS",
  "key36": "3oKfdowjrksUtyLjzNaWRAzQ4oYzm6QZLhW4kZQ9tvzrzGRzAc17JwQtwiffJZhJyeEN9oNVxVsAxEz7yaxtKJr5",
  "key37": "5JE3cEq8sVcwm3WGmHMxJYEQ7C8xwo1rPLKRV6efPuQjuem7kSZ3yprbcmcufmSRwmWLc6sp1Sgr8LpZZpXkvHx7",
  "key38": "5sLPzLX8jcgKNE6TjpCLKZRf6WG6oGyak19MdS1frmVkwf7L8aSkgSjNcTesobHKFAqCwSGDC98SgqzGw1EoUH76",
  "key39": "3yUgFz9oXhNxe1Sn9Z7pPjXu7JrPrSmfqU7vcvqUhrXtec9Vf8Ew9Q179Zjzc2f57uajoh1A8fpR4WYQkJxgFK3U",
  "key40": "vCygpyUkLxLXfEuavJd8gdPKu7QRntnt1ShwcqfaZ3y3LmQg6aQrgWb97PfPbEysSwcUN8BYv55a41G1Qfht9ck",
  "key41": "3HWSRxik6pHwyndKABCtHwDtdUYophUg37MCSL7DuG7iLy5Dik6t5XvM6JUB3rFthZXcJvESnJbKofT2TRs3opZU",
  "key42": "2hCRuU4ZwaL3BubFY2kiGqL6LJjQHNwFqyJpxHAaDCFCdnzwNd9Sda5UWN57nFmJ9FXsKSBzN5JBGYKURsWLsWzF",
  "key43": "5ys4LofXPQF8PuopVWq9JbBqd4DPH5Rb2dAQDZBQY1GbD1wKN6Zczf1CLapZV8ge7yTYGG9ASawAbFn2HzADt3nu"
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
