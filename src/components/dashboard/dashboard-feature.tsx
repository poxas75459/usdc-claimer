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
    "5WUhzLSb9r8PYW4H7ee1WJKJsYC1fqzHSEHn2RZ8n5xFMHKuyPbcavnZeeu8gbJRcpkJkwBACNiQki73c8R5YuZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3onoYFnuT6GSvTAJGSFXXmrHZrzbzXkKcYZLNV3bxojX8doXMFat654yuUoWk8YWX7QLdbRPjAS9BszvbT84hqo3",
  "key1": "4zVQznMxbeuko2tPrBxBMztgZ7kwsrNU6DZEe7nMKXatkGYKXXWYj59ixNo6QWFv9zDzFPgwwKzJ6on3U8ckje8n",
  "key2": "4MANLQw4QCKALRAYyz5dmW7VsRbc2dgN3dBEoL17t7NUNs3jVmcQBFjCj88PCruG3G85hVG4XwTFtc958EAx2aqa",
  "key3": "4gCJ54WHp8VzJP2eQY788tt3Wkr8CTihQJBLVq6yRntu2AGjJC74xDrsXBwkRw7Y75dCVXvsihRGzsCHCmm5f6BE",
  "key4": "4SuohJPELZ4vieiEvEJxzhGT5EffE47piWHPRWgLYVynHqYvzRXXQjfzqK5q7z9kQAEcDngWCwVMRgzonAii3Qk9",
  "key5": "52uSqkXdgJv5g7rxBkL9vijTEJnmq38DDYFS5KAcDzJeb3ETBKgrrqkG2ZxGU4MUHFAYoAU72jRpT98u71xKhKNv",
  "key6": "93NU2MZKNjQzhwbBp5MKJ9qEse1p1Z3g3MMs6QyHiLjB6wJTDPywRNDJBVCvm1tqymKMd8XMTXXdWgZr2PdqPNd",
  "key7": "25rCKqFtKbBnveoTejw8QFuiExiVNVQfGAdjbr1eehhoGyv6AAS2CJTtWk4Y5gLLqotWdGuwyer5PV31dTRY51Sz",
  "key8": "5TSkQRGF2rBoto9RDv5y6qgG7gz3btyAckL9Za2n6LvPdK1fT7v94fLf51aspzzCRndLSK96Bq95B7zDU6rFwcJF",
  "key9": "dk492qH4d74ip1EjpwUuMh5WfCUKKwVhF98WRbKFUMo2UnqmQD5uiH5BHdcoFcmCkBNnmE2A8e7brL5YHXUM3E1",
  "key10": "NgXSpUEC7cfYnAZBKRasYn9i5fQB7S4wDw8vGqDNUhkFXudghSAUPdwC7TUUWwJJ35p9n3qT5FKyzYDJsojeHZU",
  "key11": "ghgyXjs2comD9RSKyGPRJxv7L5gcuENdfmuFTqMj5koLkAZ8W96m46KYTvgJ8pEmUKtMA7Z2NjWCogxrAVvGCD9",
  "key12": "2K4kMYGQPUg3xyQsnnuUxEYXJWUAEPjKAQFaRH8Hp875HGoEtV7m64nDtrQBFCkpzhaNESLyEstm8VysVus2DELA",
  "key13": "4JKAASYmD6jJe1xNk7Vy5WZVby7FrKc3cT8ezDKGiFv8i9FLFGWa3zVxuNmDSB63Uzhn9rwjgbUCTXrjcayf5APw",
  "key14": "2tTPqM2nrAK4iWSPn9Tnjtb82xpnHyJKhyuatoFtzwZfhARFH2KRnKABcTARgRFfV44u7xHfPbzEgfFnQRZPYCcD",
  "key15": "4sAxYibHpMMC5qgwHRmTKCzHS8wmpChkr4qn8PUETj3HXnpP9qYdEwSiGkM8VVd674TnnowpBZsMXP7iZYELEqtK",
  "key16": "3KLHEcf6ugGQNC4PBo21mgtM8B8HeoiJatP4mj2LLVQuqaauAFYbquJLkhWBELzxnLYcpYttFqGfBvZdFJQ8eeBo",
  "key17": "3aUD6TqKRQqfjvRwCdeD7SaN8iS1EoFnRR5dvGX32UfajY6ayDC4FqqjAfWXMV4A6jLa5hvV2wTG8JoDJsGHVx7W",
  "key18": "4r7jTKnNmuVRi8X6VWMz314F8sTeDQojtoijApCGAUFYHJgL8Naw1qFktwvcUUKNQJbbqCu1iJcu79kHvcuuA7hT",
  "key19": "5EV7TG4wX6unccyMg2ZWHWKYBQtZhgudsmR1dHDDKJRHhi4z6dHvY3xFVguFtZZbhYK1SicWTK4EfRByALwC2sbZ",
  "key20": "B4wY98iStqFzGVqdgMEpkzd7Sb5nHnbX7hoyGvsFEULMWzzdWJwjfpL6msjqWwZdMovyCJJ2hEBP5q4ebQeks6L",
  "key21": "2ZKBK888e7NKtjQh6vQT5cGDxsJVSWGCqdLqhdog5u23AAi7EJGSKot2uhiNo3frFRZhBihT7dYtcEUXrAXDwZWF",
  "key22": "4F8J23ZGumA3sxwi8xGz6WwQVz9htGNn8DBF4Gf5nMEN7tWuA41dEcw2LBwEeBXVTF8D6KgZKEZuyzc2XWpkeFCq",
  "key23": "JYGWPHfeD4KAYACSPnkcMhMCudB9XSo2y8GHidayc6pB1QDwhuyEaPtVdUuNHMuyobEoNbVYvYwaPe53yiB4kTQ",
  "key24": "4jRM9YFKEiSsvECGSjWcrkFfiugomVNNDTkyJhAbdgQaXb6TdKWypsVBtzSYB4MopnRRmP5BfyrDmwjxSah3N7xM",
  "key25": "4Js4LFHVy3VS4qGxEmEeZWssxu6DzwJgWFSX8PjmBpGRcwS6dhekZLTz8HrzHbPT1xdKmhqLqvvL7C11w9Lf3tBN",
  "key26": "eP1p8x6ib3C7Jbdw6m2eCnWjTxQEk5khzcNWhvHBQFRYdSbBaGZKpaefrkY8cNcnkFq9TrUeyhgLwy4PBDeFs1g",
  "key27": "3pfzQYtGR6rjbv6b1CXJnFF9cwvQCjtPpS7QPv8je4SgDayxdhmk6hPpJUhRt9FSowRQvs8Kygw7NKPrLqqPwxP4",
  "key28": "5LyFKqwrLiKXUHTLFDLeuWGNgMSCMb1MSL9rsb7byqNRzRkN4yWKkUCNUHq6vtCsaNtPvvk9L8f3KVEwEdzFCMFW",
  "key29": "DTvSL3jQtCe899dDepQGsGhfmw7FhEEvtWLi6zNGsuTP3qsvYTyRKL5vWgX1zxW7sQ7n9p14NYRq3MYiZAvv1NA",
  "key30": "2nDMcEyP1Bzch3DmPR828i8PxUNSfwqaPPh5Lo8C9eB2ZnVSdrfAgmNXj3DmsRpdNsWzTcK7AGJifaVBr1a7PKsF",
  "key31": "29p1PMzy2R7wwZzVr22tGFZYmnVTMBKuADeQQuvd5MtYUfAMJL9hGY4jHCS6gbVqu14PSiCQaujDdb5fyJqDhZhE",
  "key32": "57GrSRXTgCXkrWpKJfbtbLSRDHE2sqSKHa5mVrzvrj7Pm5LixLZtXnBHGCgZeUkcayTxj4Be4Bk9QX3i1d8jtiya",
  "key33": "4R8TfmQWjkrkuKdYKRwUfWvvpVSTr2tdK9cUUyuwJN3JW7T7KJ9nm8o5XFjQnErLw9X3McVp9gHKJCNGRgrQifzB",
  "key34": "4b2Jt826eDLkaCSNK8uTgtWkJDctpxLypgsVGZDpeXTCvVVv6cDuiV4W5jYjXGxLcx8CEZQ7Z3UR2E7TRwZBzCuo",
  "key35": "5NLfVxdMat7pxyRJkQhznVkXHFcWZHTiEJtKnRmaggirSer14xKRfEJZsszqn4Kxsn3QcKwoCsTwDe1PDzjV6vRH",
  "key36": "2735We4DCoaSQ5fnF9LVC66se1wvF4WfuQUSoVQAkzj1HkgteDfLy6g1NPHxaGbrT7ykXgwbExn9UjWXBN5TBG3r",
  "key37": "2sPW9y5az371QAGbkXMEJDEdXL64iFwwmerDCdPJTVe2aLEhV97wjMyaHv3XFdg76Zedw8YcJ7TYhfbpwBASYLVk",
  "key38": "3hzs7Ga8HwBYhEiMpptJCMWGMr9AQWtTTB3KHEqQfgBF763gWPZjFLycth8tNXYLFa1vXmbBwtxf4b1ehnZiDbkG",
  "key39": "zrX9WtPKeMQsHtPjxaRoEZeK44sMkdGXJnJFFG8f1iGFi5TUwiZF8uwyZrqinaeM1pXoDQ5ixKAKsCkaqYwgT7P",
  "key40": "2nExd9932XMZjKnU2ZohrNL5rA4QK8RXPJnJuAJU6VhPLyuoUzRtUU3i7fHG1JpKzsvCxUrNcWrjJcUCJUBD45xH",
  "key41": "5iscuvCn9YmN98XWXhMHJzAXGkSSVH69QyMaNoeBc749riKPFZ3P4kbjBNnppyeYCBVMioi5qtZ63skiEJt8NCjn",
  "key42": "4dE7JNFLRB8FYcSsyj4xjiZvF41QCC53nssfmMvVQZWnboQ4v4qKAtFqvrnKHdpuhzeiiRYsJb36qygMKRGp7G7z",
  "key43": "3bJWDLjzwt992H4f183A62vm9DrBUXgZ3LwycwWQMTJ9y357DUzRCK1oihmc4RnB3P56SCjTdNSArQPZfi9SZ29p",
  "key44": "zU33Ds6KfSzn3fs8jA1r5V2df8gecDDWRqU2CNfB9gXTu4GrjB29fYiwaet7Ma78ED1QYKYEFcn585V6UQejdPy",
  "key45": "4ujF1pkS9kWdCUFpAZc8jpz4r15oGBZ19LkXqYfN8kXkC7D7K3s6cqwmyai2woRy8AMzoMisjt75t4u7bFSALXMK"
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
