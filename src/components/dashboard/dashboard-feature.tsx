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
    "2MLJbv5EMdaPqGNYZ3isCHD6dCYxmdwBFoKLjMuf9oRcbbLoPTaBngTWbV53URzmpvJYzaRgV99rPHFVsBa8s7EA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RyRxUZHprqsEkwW5Y8xyBfD9dyC3F8iuQaa5k6f7tdsT6TUHSRHRxSUeC27r3FswuGWVzoGfEU66dbsaNWpXW1s",
  "key1": "4L2NaZC5h7MGJ2qYH6EzRLkbHxe8myDcTdmhw79RnFozBRoawvHPzKS8s94FkXwkR4AYpXYEHi5YC5wAwD1k7x1F",
  "key2": "5mfxKPA47Ha5PyX9ZQPCxgEjkiH7vnPQTjC1WP3vFBs4EgxfoTbL3S74Wb2GnKDQfmhFJPTH1k9uzdBx9HJfyq1F",
  "key3": "5MHVsXXNtbZd7BBPddbEiia1PDkWRofXCx1HJY9U3vzefagGU2poB24Qm3QNE3C4Azj2moLp35XMnbujjmMnCzMn",
  "key4": "BdRtFBzWLXgtSuUTSU1sYGDMg8yd4L1dRkyqLwB8iQSwsGvZNSPBCsAS4WRVbEThn5pMpsTUXaDjycToN61Mt42",
  "key5": "2C9xT46sio4d95PmLT7t4KXFrMt9CQi4gJHQtUUBtHs9XTtUReyBqQHNVDVkVmwS8oA3T1gLVCTdCw567m1LZL2E",
  "key6": "2DVXAFD3oW8cRwPRjLG7XnULUi2BtVpFP5zAAGSGG7DDjoxp6RvQ6RhmbJXMgeggrPdCHMooNe5YPh1erDTk63As",
  "key7": "W2V6de81YA1BWBAcLQZUwY8vA4CWTNpmiG6Hzib951z9YjCxLs5Hf9NeP2TrEdev59Vue9Er1WWDFLCC8wAQMgC",
  "key8": "36UsRVrM9tWV736ugvfah4CNJTYojmFSxjXaGz8Eg1yEqFtf8c7oeLvFoJ23CkwBjt7JcBzftdGx96AUL4tS57VZ",
  "key9": "65dXqgYQwqQy48tF56NnfXvZza8LxtKWuDcm74fsb5WhfukBzfZ89VhixKksbAs9vZuXG6psYhM49mPWWuYiULXf",
  "key10": "52sfUfSbrqRSXu1njkAacmnTtW9cZzH8uCdAGFLf9xQpntzBir4RBbVhqhauSvtuvJDEABt1xJxrXY2rYzm9y624",
  "key11": "4WatWoty6Cow2GR5Tp2AFvoAHppomrYuAsPW8TbqeiFLScKeHtfJvwHCWAgVifPGf4kM5x9xGS5PbEaq1rFKokPF",
  "key12": "4yzvwDFF8YB895qVB9BBdj5jh61Bps7A3XpQbnbZQMQQnpwCyABvuwr1Sgg8aUhU49g5CwaHx9w55ooFyqLFPGMf",
  "key13": "29r9gZ39htp1o5Qd1VqnX8s3MDd3JL2sin7eSYXgiWwYwxzmweCrM21bG5rdedAtpyUqJ2DmioXcTyePj82J8jBX",
  "key14": "42n3truDaSpMPXzKsqr4f3CsqrNVB1tnswmusZgRte35UeUcVKSFeywXJELa763FbLELZpU4iiyhhB32jLj6eSoi",
  "key15": "AsCAk5ZJS4votFGkpyUD7nWxz4PxbD5ZJYvZbqpzKEvskk9fGRyNkpTSTaJDBGtexEnffQXtrQVpeqNG96T1N6F",
  "key16": "44ZhWJ461Ycqn6cUrtLrubEDtZGSF2BivWLtb5mXhMCyzKSmaCvUcnNHnTkYhpRFVY4FiuRXSkpGJ8Vicxkcs8rh",
  "key17": "3ghDdod6HKMFH72v4ZSuGw8CFesjbo6d2y43ftumsLTuiDCXoamCNjvRFGN5zpqj8h3cJKFPyQTBMsndEFRmAEQ9",
  "key18": "67FxKKUpDJ1MFCrATPi6NyJjzWwczYgComZCtPm8mJFM7fjFncpG7ZWA7TjSkHJjuNddgz8biUwVH2VJMGwnQBBP",
  "key19": "21xDgNnAcgjn8Dgm7XXGUhYFSsGPry7VxrfHoVNVDQaEoePseiFUtRg8vPDmd8ii2nTtSqR3pJWef4dCiF65Km6m",
  "key20": "2S8pcYsrF5W1xyMGyTChY7o6CDxeXM9THYmAofWsQovUZ9aHJmA6PuHfY6eAYCx7nvBsWSYkJMXagfbU6mp7Hwuz",
  "key21": "2MsNDjdXVQBdQeLxjHSeBmBap1AVxBW4aghamFQkwgyYeRsLkJRiFYDZC83xSka1yXK9LNttLq9EV6qiDFHZBquK",
  "key22": "5r9jRBPbfdG9wSZxTuNMnh6PhGaLi3QDsZ3GbiKQhStznS7fpa4C48oFVnk3ZYMuPndPDi6pUkQPf54etvZ5hcPH",
  "key23": "3ycAXu5zWRjSJrWBcEB3fRR11oBoW8zDY9JYvZBaa1K9zNq5JpzBh71AL49MkrTvRfW4Ko8enBS4NgXcgvqgHppv",
  "key24": "4Mwp2n1AnaZFaw3FSPfByAL2ht3EtxrPEbzt7YeV6MdAaEWwDCe57KqpaXQ7JGKJbYeNkR6D5MsRogHX3bF99DAT",
  "key25": "66MXRBHt72NDtT6U29d3jVbsvPczihXo86yXSHstq732hXKze8gnnzoRKGcY3jdfP1f8yXqMY9J1ihjPdMBPw6ut",
  "key26": "2QcN9x28y4cvv6hNb1hLSsJzV3xoKDfY5WQpC5fJF4H5QodaSifKMkADFpSRTeMCB7wheRR9WxQ4q11nUnSvvie6",
  "key27": "5gZJxNgYqSbjj7JMsSyxyVtNxwhJiNjcc8A4dXgSrpxwkL2C2JP7VPoVpbPEPaST2HLY3SWF119L6LcfQGNLg9kq",
  "key28": "5FRoRyJBiYncbqAL9wXhVZuoaNzUaxc1vVzZDMWNjEuo5EELvA6xGpUUjEuAZu2FvqncyzKmA7bWcfKnNiDwK2Mo",
  "key29": "4QC7szrfERxqqxTkXaYfhZGngRYg2soH4bftbsXh1o63LxRVVNygaYtaFD5L1GkdiQ6EQn7KahjwgLDBzdvFVSwB",
  "key30": "2C5DXdfFs4rcPancz8PhoyNJKVXH8LgAC9m7Kja4PEWjECaGi5yAiJBWqaMwmy8yELof5CS7hZTWmxZiiMahr4aJ",
  "key31": "24BJsrrRb7pMc8ZpzaSpeDc5MxcNKAWWGQMpCzcVYnnVz1eRPDVPYkjx1TkZRgJ1HjF1XERbmoLmAzU2NnzgX7tc",
  "key32": "2JLe9jDuypuuUv69pRw4Hemo4p8N5RPiiGKFhL5jLwfa3EiWwTd83foRv4tH3LQfRR5GNW733hJrZmiJiEr6J9q8",
  "key33": "3q5fVH4oR69n3QQPSkGmbNDjn2F1H7mbMNs5aeRFAaJmr3jj5o8SSGRfNx1qqCpi2hUKpXK78E8zZr8TEMB3tci",
  "key34": "3mwxGATpcGwjXVnv119q5vfz6RfhBhhyWYvukvi5ysiPzPKMHkC1wCK2ePRuBBpvYcamT6eGzkfkuRV26kXo9qfx"
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
