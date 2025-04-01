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
    "4RpBWUbvueSbtm3KRQxyUWvZ24hDipT3MNH9Rf1TR6u3dCqaH3ffMzJS9JCqfUAX83T8F8Q3jy7RNXtKAYD7gm5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vSHmPiGFmS7M5nSFFaiBokvMCBiG6Gf1zuXN6gdNasgPfq9tVGBNXvGTNTuNN8UFJzLLs9VikJjSJEGp8wEXuSy",
  "key1": "3pKGHZZLmksTMpCDgbddrMMx37NffAYNyXCKM8eWcPSFhaJbnXaRD1eEncoN8Qpo71VpU4imaYnHG2vqkn9XQ9Jd",
  "key2": "h4hS9fnoBH5NDdYKSCeYK3sqbAMKdZHftdmrmr33Dh4MXnrnYg4QKZBZRPgJoWQ2srz3x6xwrrA2qH5sEpBBPtB",
  "key3": "52PL1iPAQRxgYEqgfjBGkirTFrsVroFF8p5AHR7YLYX7onLArw4VfDc82wafjCjHfdaHbZUGovft34cyHj1dq5LF",
  "key4": "2Loqx2R6fPvMDkCLRzGfmp1Vmrw8PFwdMzChkBPUax2mSrmv7J54bx6XZfWLu2LsLsuFsPNXPXGxFecbrFhxHmQ1",
  "key5": "4yTemRjXzoC4XM3ejkQxyuHQj9s5vxx4z2EYPF8WSRccNcoRYs4RYqR8c77VjizvfzPoZCyDZtk6WX39UqFmYob8",
  "key6": "4gFtGveGYFeELfvbtSXco8ZRi7NntpyM4Q1wkVLowroW5F8miyfx3q3JnujYxDVtvkW9D6KgYr4mD9rLZzEuNL4p",
  "key7": "4QXjas859awN6TrijQfDkH1ajLhoMeTxgXzTHbPsQcEgK1xUQReg2a6XCprEggtcCFEdJQvWuXmFEtzzndpvBCkW",
  "key8": "5dRzt6BzkaAEFyqa46A3s1RJSsPuNh7fTzDbMdJsUvNX4Z8gGSMfU6z2ZTepzoRWbHkKKwedHrG33deZj89yh24o",
  "key9": "2R87ENKrrHJ1L2B5jzHAYyLxqBvRJsHUSFrdfd5Y39Ln5taNwSVCvvF9W7pm4jju9JLw5PCk5cCPAYcU9RtWEJDS",
  "key10": "636VZ2hveLJqx3kFgmfJcnvnQkYTY8Z3DWskNfiKid7uWrHFHDwFrfiYBtuh1asgoRS7qgTe2r2MMVLUU8hx8ZDU",
  "key11": "5kBNJqvVr8uSUErUtadX7Qq57zrUmmHcjme1E5Hv6AXK4vKrcqARKcXSfk3vVUNBA4ufPCVWNXHrGyZwbhF7hSpy",
  "key12": "5eHnExhDJ6qnjuTqrQG6oTuPyMoNvBsJxJQ8tHGG1af6TGKPQGqEPSt3kBdD3EbRqo4daBAF4Zy8nMgVRWUJcBLc",
  "key13": "2EPjJjjoqRfZMwRJGJQaHNaPsT23rwc9YMxdFmCq1xqPvH3ZomqY8bFXTuWJ6MLGjdBMqbe5zJYowhV1rdoQRnZN",
  "key14": "25kD7PFYB2pTvpHQmqUKXeHhkcr8Nc5hWvtiMRsdNYHwaQi1TjJngGfSbSGYZW7Z1EYZnM9ybjRTFJaDkpJpDFDK",
  "key15": "32f1Y1xdiVCqxaNgq3juAwkkS3CoC7g1DG7omByAQgUY7PzQNw4UUc1acxBxsbphc6YQA5ZpXXDhceNrtkBTVDyi",
  "key16": "46Y6AmVU7TgMdEVFBSXrkD97WVXiHFGnucN6ozHZmgCXnZwHGLpc8fPYRZP3BTMV6z7mVvjnjYc9qvTrvg5TcWMN",
  "key17": "2XUXYgwRTyaT8ab7VDf19etyEfLJ1hTFxxuQ3LTd3XrgZrsU3meyau597u8ZEcf3RCvmXQK1k9sprHnk5PvHQHXp",
  "key18": "35SFQ2jF5ZDq9dq8sgUFJr4WyNaE9WNGSN2ryTuCnsgCMPou61Mm8MzJnoPQ6LZRzzJykyavUQY6x47bgH2Fn9pY",
  "key19": "5ZWktbHZw9tRBqP1gn9xP59ECAVW5snfx3Z2mZckmnbNU3agqJVuci5KoRuJxLj5MHf8jgstvNsrWCKrQJsW8EfQ",
  "key20": "38LSRfpdkfC6Yi1Tm9ww9Hh1munHTNpD5uPKtDG5ZmSZdzuzAsrY2xvhkSczrzwdf6ZZTwfR65kVZZALNiDuq6GC",
  "key21": "tTSYyV8wPy1PPJhbpkhhmwgiYFyUP9hG1UQcQhGy7t9KBrjrCXxHYPLBTBFnhzAqpwB1hBcPyVbGtgLhpghYM8Q",
  "key22": "56RwzvmuSyZNrNEcPZoTQaoenjjBikp1nB6ZjGEimExRTYrnXzeDEXoBxYE3cVJnb8tbZfiWF8YAr3TEeaHeTyNV",
  "key23": "5fkNbW2j81GZwTk44Wz28WjVi9agMdqSzK5ysDCGhoPWaY7DEUSfkeHHoFB7J2pdrBHQzv7ZJXym3FdE54AH4pKD",
  "key24": "5xUZDzEsXNdx2zaimvLyVMDGgWG5DALbuBPYb8uzxVvZvtdHHz26CHKTP7ZxzU2eLw4zbnxhxbgDpzo1v4h7SJRZ",
  "key25": "5srCwg3eHcCDWTbmTZ1BYfANHNLbntWCjSHhgfr162X4zKufdpzJh16NN3FUDMnyZHNG48iaJYT4865wtj4K3WwR",
  "key26": "4wXcfbZJcEMHxLLu9KkHULePsjBeJWTDPkftMKNAKf7XgTqijuqcFgt6WkY1NqEEAMkQZoz9oDitoCqgvHdWpqM9",
  "key27": "2G57YUsCz7dMVsekh8y2tGxAteqFPbgnrrQHJvaX8sVsP8g3DBJURzrfeF54uMCz1w4WV5WTnoLTWVoSMLELBy8D",
  "key28": "5V9NNZayBH9aHfx4bQ8NjFmZf3bwHoBFtDuhJPZR4itW2Hrpcc4wVNU5pzkCeNChMDfiUjfxqq4nwHatHf22tQhv",
  "key29": "3DeGp9TVgEK4bYxFiPac6Vb6kEQ6zsTEqKsfbuxhkjga5ek2ABXVoXxTqgWzUKM3Vk4m2NS8Wwe1bZkL8zV1KRrt",
  "key30": "2v3xNCxR8N5hfvFw9Tte8363tpxi8pAH2Phe2g4FaVzvFyn2sHJdyabwbFdnTF7FnmhkvGF1iy3x15C5tsxuoYjg",
  "key31": "2j4try3VJMgkpQSragtJQ63BKtK16YnXh2zUCgQgA2kaRbr8pCW5eUHMrR2ZBeobfsVqYgEFgmGbLMYecU6YzQK5"
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
