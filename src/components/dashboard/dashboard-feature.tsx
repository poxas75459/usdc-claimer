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
    "ng81P8LbvCtFTVLyJEL9MKCNWXRZRRPQdSamWwRxe4y5dpF6RAzkgSWsUG3k3A1dkMViU6ni7eGt4S6T4dzZ9vY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EsyP6diPrmroGQuJiPwHKpLTJmDzQ9f56HCyeazZ4Jsj6DqYLN5U4kieifofTYSmWqZWnRnwB6AzNFMJkJJEAyi",
  "key1": "2zvCT48tf55ub2i6BF4KtvDnKY7bzDNoYMMr1kenVhVrsWRMJQ9uXZ5LqeTKqcsVLN4Q47RNEwUkHjPu2qr1MgC5",
  "key2": "2NeuMuQL6xDiEfexfEu9a42a5kKCopT2Z9danDhfw3B2irC71rYaXnMrAtH7b6dLpduYVHAtHrCq779f5pMsKNBc",
  "key3": "3hV2yHz4YqFXtw4C3LrWiFXQreUrwGQfUNGZn3ug799zyWtEMBFAYLbs27orBq3FszE4GBZAhHani9XH8aJr1aEo",
  "key4": "4cmB8JiDLnkY7VWdvSdGaDD6KnwdwCwfp1WNoToDhhxqXzURddFEJMaYgRAz4AvFfFTFKxXc2GzpJjyfKozfLi78",
  "key5": "wWgqFYWGhfkSV4HaLsy5KG9fyQjJnVYg8DvyoNwLi8EsHxXvThPecuvSmEMHcPHrR1WZ57p4JGAa4mMV6SuKun7",
  "key6": "5KQvXDmHpT6Sh7vQJ4jn6GWjXSSoaWagpboR4i5mjdegQoRsXiXhcBfaTgoweUsLRLhk53w8EseKCbSLYDh2Hxsv",
  "key7": "3PQaTWZVf5yL5VtxD764hBpDrSzefmsD3tMtGgjjymXnVHzcMPZ9WLD47WjzJhE1TTwtmCff818HTDv7CUvy7k6a",
  "key8": "25gJeoyepW7bw5eL2uTpdUELphpP3gDECw6LfLBt8zcqusrgFRrVz6Ar483cUxdzFCAhK4NQja6241DKhrSwcq5F",
  "key9": "5Un7A7Hc7xcS8kq23Bb18AVFYanTqiWFy9yGpe78JNdvSYhmit1mRWr4ityttuvb7pY8oE9tPrHtZk5gtWxzya5p",
  "key10": "3SbPWTtY9rXMKWLs1Cd6F7WQgMDvQierbpegKfnnSHCZmwUQN2dkEUReUiRnrnBjSXFwTeH2Y5MPaKFcPqt2vdD9",
  "key11": "4XpJPBgcu344KdaVYxA5Hiv56DLvR8E45P2GHxEHSv3KS5sPSUGbkACnfnFrcWtv7oEt4A7VJPEFa9yhbNuQBcYM",
  "key12": "3ayBbqQNwcDLVm8VDTAhtuZmPUMT8ZmgMfTNUds5p9ipJAbPhJU5rkSVaamzSLFmhpEoqXmd5DHyHnXEdNkHpCmS",
  "key13": "LGXCkSWs16gD8LALMNeRe47yfF41BHGSahEBjfQfWz9U85NcYJx771XapskjJhfgpoktskCFK8gPHXXcg4qe9R5",
  "key14": "3LLr1mVLgaM3LrbDJHzzfRxSQ2rdAvr4NCTpGgYJruvAkCSKAVJJ8n2qrC1BF2VjbLaAQKJD3Gr1HdqNrSwmRT69",
  "key15": "yJZdL9iHM9faD7S6fTuwZGYwaRzsSH8u9mAkoRruRpKAdga5RJ74HCRWBSa3TPDrFoYh6Lkx36p3LpobLG2VP3u",
  "key16": "5Lqq2g6b3kMPYfpm761ebQuAUzmMEz2M9aWdkeBo7oXWFLGn8UhmThiKeoqLynvQcQg2XcYHwDFPXLuU6Vu9ZgWx",
  "key17": "55P4FZpPbJGUxZsK35TNBcaTPsHM8GK3z6pa8NV2NnEn5RnLDhbgRNPzL9c7fJLzARmJ86XAkX1SoyAdozfnRHLn",
  "key18": "hUc7QDnCpTqZw9iHin7MZdRrZ3u4US4x6p1Kz6gB6wSSfFd2V36b83SXebNTpZoc9KL7bz138kLFsU1D8mhsMwH",
  "key19": "2yjuCSa9CNjex7cQLeWSrosUArNBhNsEPDh9NNhEFmKTw2nRKza4Red4egQ6iq8WJkxBqDzqoMKMhM7n4DLPVU6N",
  "key20": "2qsvW1iNnRYHTUwEN9gmVM8nBW5KjvHCSe1eY9wXrreyXL4nb2ciNh4S7bWXW5aNmzSY6YJGCCWYvZGuvoTP6tUZ",
  "key21": "4mAKjFfSGmtmFNuK1aZMLhbC1Yztr13CvwtZVJjjJQwY21uEiPcvoAotHhdJZAbbyj2WKxE6niPpDEatNBGW3DBW",
  "key22": "5A7oqZpNT8hJfWVQiKtmkSZHn6MrRaZsrJUFp5pR9wU9dE1AxGyN9dW46J8qP1GGrHNBwMDWhymv2cwmhyaZEduY",
  "key23": "5Zcmh7odjJ6nDmgMaw4wDkwwcaNZyWaye644f2xn9gyQZCxNCcNRekL6tiTXW2g8SpyTcxsag52zdrZaR48bFaWY",
  "key24": "3KK4P9dEXV66v4nvjb2gP7YWtiLEKBJxsq4aCN9w5hrUBSzun31HEp4c1DAMXfwrLEvLPbRFstBp2FnzQxd4n1bV",
  "key25": "3wgriMuVx9veXkuLL64oFdAv2w8E7UQGRaJkRda1mhEdYRKbLefgR5X3sVYY9ugBuG63MNAmjCPn32nbD1M3hcPi",
  "key26": "wasmZ7isrx2db2evR8FVp6yXN7xZ4BKQTVdnyVgvPxd6jxtdfBy3WLb5J4hPjV4pYUyRVb1aHec6eiYEmBRaD1i",
  "key27": "3KzgAW21x693vttuSGvuU5zRn68ZCnDa7JvcWwaNWhZxEEdpizaRRTsTcV53C8i1woormUnb7NCLtPjEQcBTcqVZ",
  "key28": "5TkrfTic8vcqMhvYVXqRMkstXWUyriweHgcYTs7vd8QP21LW6fJdKWymf1HQcHin3kMx2dtnnapFYks4C253bo46",
  "key29": "4u56cJQ63wAnynmi4zpmXYfAEbNW2a6D7ihG8zvvMz9NMJBuobcKqychWWkJReh4j1jbJVjjLhNKFaweEYpEW1Pp",
  "key30": "3UHWLZ2XaZLJjdoNnm8CcqsuFKNTYNp3tZDcfihMiPMpvJVj1tj4LoQVoJK2vvzjuCv9oQJsZjkY82avTywtYv7M",
  "key31": "3xDgLnh3zoh2KjVbQ8VBsjdjdGfvgYghrRKTh5kqHi95KSKbvXQwQ7J4D5LSJe7Bn6BEguTY3vHmn5LMxjhnW1Bd"
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
