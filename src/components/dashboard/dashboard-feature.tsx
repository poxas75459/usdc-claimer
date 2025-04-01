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
    "3Pfqv2VH4pznamDwsr8ZCBimhgvjaxoBbm8AXPCVygmCPitgzr9g8MMWWZaiaBH27Fzydh9JaST2UqrcsbXyo2T3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34G574W3CUM8ga4za3jSb94Yt36NxVW2kPzVxaomHrYPwFdf79Szf7JrKXa91eAC9styJzKu4tNJhKZVabGvqaDV",
  "key1": "nYN2ydgLPVJvY2d8ZQpwekfJownVumsKwZDVNS8UPP6phNSTwCJiySPs434QPmBbH46JmG1AZoue3adf9wqWXtA",
  "key2": "2rhPqnKCx7rcDDofMhmSrU72WJSktEG5Gx3MAma44VSjbtFQYNfNaGuqJX2XBwUC4iuRm6uNEEtVrpgTKQRh5jS",
  "key3": "3zqZCvFga4fMCdonNBYkCdmKH4LuT13zRZUE4MvpsYA1QbVZDT63dY5gEBv1WUKjXRAFuACNnF4GyEgxo5VwBKXP",
  "key4": "3Y8tXNupRFqmnidhcyNeRn876LApQdvcdTcRkv3avTCVcrS93nhPZ3faQjerHqUNRZiFvXnwFrKWXifE822Khggw",
  "key5": "2WkuuQSt8g13UMRMZ8uyAQ7fDe5EdgTSRNE87dXBVxrwtReZgiqFa1ZvdS9uhZiRMeqgnduuur6AxBgFza8sFuRk",
  "key6": "5QFwpHMJkaM2YkejdKUKCmnGerrju5sudxC227xrEpRLeVVu5QDS2nfWgHKjBx6yd1oqgra6uPBsMh38DM7W1oTM",
  "key7": "4SM2BdhCcu8zo3qxzvUX3aBoQFeqSFsVqQzzBX7dA1ZSgQUUpdT1nLk1pusiCDRKVS1EXJk45LWZVjTNVbT4XViy",
  "key8": "97GnttsRx1GBx8EPkaEAiTLdyc1c1Zk9k3vyX22igTfcyLbbLgo2bSNcpWtRKF2xruAqXwM16CsHjtqK8FWfJ1b",
  "key9": "cwZDj1mtkh37Yjf1ht87ruyPiKvuwy3A3Yh6TPKEEUhva21GymjT5XB81q94v5u2kMrLQWyQ3Y9T5xSZ17P6m6C",
  "key10": "2CztczSLNm2gSctFEVBw4Jgc4zsr1nbovPtRk86pVM3W5KMvdE34SXq2xvf5QnRQBbkowRK92Kbg3tPJRvHs7PbV",
  "key11": "5AThaRUBoZHkBurJjWdr6x91XpzCH71E6XWZxhEum73gxeqLYEEgRAJnVCueNhum3DKNDH7SHvkXBGrVtPEBTqau",
  "key12": "2aSU2freUioGPmLbKXg2PZEvUttX2mQfvpZ8KTWF9FfD5h9HuYybgZKXJ7BmRJNDjcosJ89S53ycsb9ic7W6fMUa",
  "key13": "32ayt67rkPZoyzQaZ6WDRt7XKLRwoZfnPowbQLW2FEbsvq8mh5bUU1gYvtP1QRkuBjxJw4H1fLN8nvQxGY2pr7KA",
  "key14": "4wViSAJtQXavMbj6ToRMPyAm6PtGjWaGr9W8m5jvYTPGriU4mnQDqDiA1kmP7oqw75aVwKozZuQFL8S7pgH4uAU9",
  "key15": "7ZTq1pFGAwYeiXFDV8vDGve4cvxZ3r4GbqiJxWmqvSvCd4WCARR6EtN8sAJTL5EW8hGarfLLPiu57onjY8oCMvr",
  "key16": "3oWY7r94Mm3d7JD3i8AhZHERFdZcGLnEZJLDpdVdFeLwxT8GbvE5am9xGtgMYBfJm1b9s5dTsaSubU5KNeb3ikhC",
  "key17": "AoD4yRhoou19GTfyDuGFhFhQqikobazcJjRwAM5xrgd4gX5jrbJ8qdvzxEZkJcjv4jeHspwee5rq1z3X4k1F2BZ",
  "key18": "3rQTNAxSGnrwCSrsXeBWAgSgR7Xf68dUnSQon6PikTSLor4CboKNFKQnc5LRnUBSXjAuBpbXib9YtEBjwC4BQarK",
  "key19": "3dfNSdAyYHqi5UqngAujqVzgRqFPbd71j5cB8CXodXGn7zKdCAmAnKGvfRumx9DJySuqWwfNJLWTH3tjqpzxsMAY",
  "key20": "5DMkDeuAqv75dTaiE4mto7NpWY9FWZFkf1bgExuf8JamD2jG4KUZ5T6hEh7fv3uqEAJJaEKgeSLikFc1XpK6Y9Sb",
  "key21": "37Szn5eDWpRvwXVpcZQehc4RJuL67QwBNTGhBkxh4VLePxsGfcvehP11u9YEhDhjVvMiCR2KjVsdzBCxeccYEzbJ",
  "key22": "5AjDKR6yvtXMVm6o6WeT3it645adCxYcJde3jvzm2CHsvyEEF3iMvS323LgiqA8ws1AMHzE7ftqm1UMYAgmDhNgX",
  "key23": "2136hfBheLbKUB2m7JCJWLH8VehYNDVw9vdb68W9i1PQU4mRY7nFZSAUhAWWe5trJh34FBsoC3nbqsJZkVUUStZb",
  "key24": "3dcngU8Xh8Szn3zxJVPKhhGp1PCeirUv9BMteQABGSBVtt8a7gDUaUcDPX4Cp4NosKTCMN8CqRf9ZZ5V3gPiH7vZ",
  "key25": "2bfcYonHtJF8VnAvWRTdhurPYGSJEn6ekenTYGYHJmsvXujsvh1HKGdsBf24dUtBy67nx182gt4fwDnmUEGRmg9c",
  "key26": "5ibSwgf6N2LQ8MLD167mQzreu7qDckmopyUj4eeE98K81KVdanonLBrH7hCWwTHUrMTncQUCKC3miBxCzG7nFsrw",
  "key27": "26ppZzAHEQ1o6Tyu7obdn8ct8ZA1kuHHWvEdNqoRu14YMXgnHWG2w7ZLHLv2rNhk5kVEYF273nrzjNPUJXxywo1V",
  "key28": "3hhwPDgQEjJWpny3eZVvP3uoY7DGWwd2b46G5tYrKCLnHWzTQzgEqAudJXzJt4c17Q75fT2rnNqr87AVxNRknagt",
  "key29": "5KkqyNKCkJjbnvuSzEYDkagqo4Magv8is2VGddMC9knKeJeKRuxJhboyZg21PH6CWguNTrPg3rCmmC5apGkjm3HV"
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
