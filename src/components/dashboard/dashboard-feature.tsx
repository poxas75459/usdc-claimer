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
    "63GEKUMP2XaWmrSDpxKwypJse9PZL8DBGw3NRd8ae23yhhBAWZy9oXQvko2PRi5MDS6v53XX4B4XnU2VwWuduawU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AoihsPm5XGvpLY3EjXAmVXw2MJBqiErhjg8TrgByY38wahGNXhKWaAZgKcT6fYoEXaCNFyCtuXqHwaJSUrUXXSC",
  "key1": "57yiGndXrMTQWTzkEXzTH8T3BWXp9pRLftjzmYPNNaeMpS8bVisDAkodQiEn5aQb7GfTKwcfbkbNLmMWBGqfqBfE",
  "key2": "41ipSxq1R8E574XGrCBPNA2RcapG39ywb4rHHJGoVrabDVzi2VZSH3xvCziYeKLKNKLp8AUaJ1bcaqCMEJzSMR4V",
  "key3": "jkkEEzUwaRcDcWMAefSJy3N6khDBrCUqiGMdM3saKFz8UzcWr9MEFxRkaQwGd8QYS2E28KoxMoVgfPmBb54x4BK",
  "key4": "2e83Si1aHUoTCXMT1wnCTeGQDgQ3eW2e2ENTeXGAKndCVR6abEHDwXZRL4CzaQTDdDABWfq9XKBMxNgicjHcbz4q",
  "key5": "3Q4JBmA7JKZF5fmQbUSCi3Qo2W6voHMYU43ALMyWf1gK2p4FoE7xz263qXMnCpooW89dLHNZ3mcznwxQbzA2gCBG",
  "key6": "4TsE92QcHxtwbWefPXfSoHd8onMGmUcvQqWLTWyutobre7DS2Fz7gzKcaXoX65bJ9B7PfaFdCofdtPLciBKyKDG9",
  "key7": "5HW2j8PghPaGA2Qvm4G6HWNygZkfmrcT1D79dtaohqfNb1GVggUbPWXSJxaYYDE2chsts2H8M4mtMGU892JfTA5h",
  "key8": "481TsXXNsxxTDDp11A7vmVdNx9mBkKWgRxXCNLhk7eE725AQqaDZJr6ggnWNchb81LKAUXWGYmTLWxCe4AFvpKC3",
  "key9": "5affbMDJ12SXmsf9pVh9VipWYo4GoAq1bXxuR5kMngdob9gyXUQhwF4NrV2yoLr5dEP4vySvnhDFnDo31RVpXbqS",
  "key10": "QzB6uYiTndhamUwtVuRAk7QTvXtikTzM4bcVyAuxdZ3yQG6fEuQgoPuhnhFgJFin36CM3EpBpVJUdVcDCmYbwAo",
  "key11": "2LGZW7bGXym7aHnL6tjmAom2XeMayYxVuuNTtGjBDkMMT2fdLqbTsx7rbxaaQfkR2uRCvj7pa6oxudikb9GhQNjA",
  "key12": "2bETBw1VFoandtqfhwLMNoHGAoALgTShSykQ31MiyukMg3pSEtGUnP1htDGNSXJEUhjwU1YZaKV4YwHMd8baZUt",
  "key13": "25pW4gxex9G7EAMtA1QF6hpERvtdBaykPapQXiEaZQ6KXngtyfXocqBc1jtRngXwvgiHL4F2t7sAmyBqnb49QMyF",
  "key14": "itMh214XY76GEQvVGoGdw76R6pkpkkQkHXZHNSSvf3FMkpbTWPo8sFNSTbyRHqStNQWzbh1fHp8NhkWH1Zj5j1V",
  "key15": "65ywckd1qiwA3w1feUt1zKB8C6zVnsvDGRApA6TMa82LBQSwg9bCd1eBSTdubSpbdGSiCC1UaYfsryhTM1WHd3cx",
  "key16": "2u8xf4SDaTMEktmBDfTqT1Vo22PKZVHd5qwjmwr2xfTHmWN9HB95V8gJZTs1wYJ4Tb1kuNFjGSW3p1Rt1xZQJiH9",
  "key17": "2N5mZkiUKyJwn5zEjDuc8TRF8LMiVhSGR5WZKMWsUm1m71zmwJK1jn5wDynhYRs13eCWjPyJX29qiKaLLRXEzQtM",
  "key18": "4APsWPe1D91a34yEuD2mjrSMswzUMiET6Y5PM2VjRXP3ZZ1oq6xtC7tKbi5tc3vbWhhY9iBZHzcidvj1sNkeZUFX",
  "key19": "3ijNptMncjGqfnM3jB6ejUiLqFJ2cCN3WyQNnnyUxEUpMZM25aKx1ig1MSAFBauxS3FVp6cc1XsBXjnH7atmrXD7",
  "key20": "4RoDJbru66L5WZ3MfsAmZK6N5atx81wW2r16YabhqZgTLNWqp7UpttT9zmhohTtTmGyCB1jE35DG1vG8rSkVLo9e",
  "key21": "CG7pFqM9rxXawZbPUpzz8RNo3HZESsxLvpMZ4zqt3qk3vgm4nTyaHL6t6MzDKw3cujNtdo7EoSoDZVYkdWUdRRT",
  "key22": "3BqFtZbv9UEgkUw1aX1GBvzho2RYynzWBkfEEy4HFdittQ6VnfgobP8n6P91kwd6W6huotHGAwRpJgXy1kqxphSd",
  "key23": "3ssxSS4tSy2AgXyYUXpxzVgYMsWtAmvJEuoRYAurJU6S7WnRi1ZWKj3eQJtfp3c1hiZRw1p8Xq5QVA5dGgsUFGDe",
  "key24": "4iraJaJFSCtNMqmzSbfQZfft2FcdE9w1uL8kkd4hiEhVRYAshtfguyMNi9Jb97z92b9viAJYLcnMNqgNYqf4Kch2",
  "key25": "5P6mPWpQiYwokxDjRAJ5UhQoDHeP7S69yJQx2qkLVjXbNv7VMGhM4XcPHZbLVZ7DfrRoz8yXuLQRBaG3Z4BXoH8R",
  "key26": "3Sn2FJj8j7i8NLwThNdJykUvqyAmMgPEEmFN8pUazHSVbeJABq2mLR1jPm441SY6sEqpt8CqJJohaMVUrjPh3JHu",
  "key27": "2o6sz97avvdLtvXrvQ2VEMfvYUUgJGmr3H1PXxJFosyseKKKE6PEfUTkNGqEDB81ZP838Mk1mrLYZ5q68ksjkpaE",
  "key28": "2vkL1uDxRE14Ga8ScQyjk7ivggqqx6KMYTfWbrPAV4nfsG5kXgU3hnQcc4rqufJ3nuBdUp7LQRAarFCyQ3BS8Dvm"
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
