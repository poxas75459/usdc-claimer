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
    "32bT9YNhAwja3q1E3yWB3vtgouriaQGcFLjAArth5anaYLLg3G4AFZtMUHxJ8Djrd8oSTYrUBpfJbKEyQwD3XjRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oZpx9YG1D22U2CBHGFkvhbgFyYXK9ugWr7rbEwmaTKhejxkbUBNFR4UNZbstqSbWWy89bfDryRukGwuxxE8T5xg",
  "key1": "3yCcaxdczupMSmpKZi8mpK73PFQmRtwgZqW9PfcRZSNmTkGioXuUrhFBkGJgRd4grP9Cmwqd7swcocnYbsQXCMq8",
  "key2": "2wKKsAH13bFNmfbQGzqiB5QUeXCFNezNsVcPkMFK6RD2V71S66kaPGamcqUAubNxSGLhrQHhP7wSxfShMQvhU6PM",
  "key3": "3qjsRy9qRsMQdn6nu4UBDYTci5bj4E7puSivxZmNLiLXc63amtZ3CetxNQ6vDtc79VXsMtdxu85ogYat8aLokK99",
  "key4": "zDjPg3f6e31qimtd5HkFQbLNbjJMQavkLEPfZw52ayaSPm3RKFuLm2yhYN6YKnJu2Sm7Lg6NXQbpyaetizvAefB",
  "key5": "3nL1o8LVTY64sdaxJqVFKemMXE8nJgQBe3R4LECcsHhqLndRYmYpa8jBkim8t6BmXmrudn9dzpF46kBCRXBnjqGM",
  "key6": "3VNsZFvdihE5bwLa19PHhjk1mSA7qeF8Sjg1aiTzoW7kaaycxgG1XgVQWZrnEmafxyWwWT5YxdR5bLdVp4SszSkV",
  "key7": "2ZWB98RAftf3CsnDQ8rkfe7m2x4itr91ENLP5hgpngqkVf525rxmtEwY7AhuxXwXL9ACUbSZwmNJhmfU1RCMiRj5",
  "key8": "2wobUuSSk5fu7bZ2aX6v2yWvPjWpPJbZDCjZWqi5xSCCVubTsQbAURmPMyihk7fReMmE42VLYiw9jdscnHbRwU7T",
  "key9": "3KNi2MbitukhyqWuCwVvWkSD1xzAPch7r28ZnN3R4ZWKvSoRi5sRMDS1L4NwXgcvSyi6FPaT2k1Z6v18VS82Rp46",
  "key10": "3Qn6eQxVoRmnzWWuicdAoKEiq8ARDxkD12xFL9SRvMHajkj4KdroM9bR29FA4uCe3D4c8GvhSNTVNT8XTbSwHnn3",
  "key11": "37N17anYxivjBKiQKsS4TfCPAT9J9PpEeY3r65GoaHgGtQPRpb7LSQsaB9m65UpAmTE87dWQuEUtXB5pB9w5U7ai",
  "key12": "4mjzc4Fz4GypXK2Z3G1PdjG5inyEFtB5aAEp2xfqa5eRjy1mCS8UcNzThMxfA1pq6zi3nEWG1J9VXkhHVKWM5B1r",
  "key13": "45RiV1FXLUPMe2EfB4Z26D4rq8K84YiYs23nT2hKtYUoV2oqwojcjwEu8q1Cao78ii464BSK2ZraYXaqvn4yQdJZ",
  "key14": "fv49JSBWHxmfUxXsK5cmttg4bye3g4McZhKkxa1CzHLHziXKrvjmkaqxsUcTJem6zbKw3qU8gUFmEjiZa8bE2Kt",
  "key15": "51iuCvEFFiw4dhKYHDtJrkKMqtDmvvJa31odVZ8tMPs9Zv9gqQFgjJ9V616wRhCqxYkeSd73P2yf3QTrwn3ZVu6d",
  "key16": "5gcv2k1poHA9PL9ub1d9x7Y69vthC87mHqWd8XEDHkZKiN5E8qrC5qHPckLKDNnjpvsQxR9YpJ9t2YS9qm2kcSA9",
  "key17": "5Q7ictXWcw2QJS5eMuxZ5wKfirWuUXJGuk5mNBkzWDo1hfZKATFiLHzLW5PYE9hQhDcSvZCuAEan1UaaocrYzgzW",
  "key18": "vJ8jewTCpwRxtWkMEBxB2D6rejF6feDDBhyvNiJWVh4h1JdRmU3oPp8qDfSfnQgheegiiMxAvVbviWj5mERjKzC",
  "key19": "5LBnbiiXr25DuaWTr47Ez7FJcSFu5bYr8GQp8Pvo71H9htFqHqYY5gjKfrbT2sTRAUJvYFxqx2ivFaPcu1k6nMrB",
  "key20": "1mNudGKDzWAPPNnvYZMr7umPgVu9RiSAQosrQVNqpx4ZBh7MLYrRXpZawEw3uSMje9vS827kCMZSKWJsj9U341p",
  "key21": "48oMGu1tn19RAUUL99SkL6SHTSrW7AuzwLLyqNpjJV4xLJTZurcDPBLdmnkQx4ybHKY6AvpA1yLUhH31LWj5pKHb",
  "key22": "3cNxZtR85ut2RcFyzYpwCUovSz9p1tq4WrwsLeE66wADWAJEPTNEzGdLfBg7P9nuKmHCZLMDWSzrmaA2EMQdcHZ5",
  "key23": "61Ak3MygtaW9cyxk15zW3og2B37FRVos2xuceMozfbnGHZs8iuGfawpbs8cvmtfhpXAXJwUMntM7N9CguKCTXGo7",
  "key24": "3CESWFt4KB6wafro7hy2bbJAcvp5n3CesJ8NaSF9f1mUd37tBDSczhN952bbWcqEwGE2SqDUVhRFiCnuZThSQkxT",
  "key25": "3CG2xBXSY3rchepfUz3zHPnAE1xTmoEEXMbazJgaTmfgNRsej3fcNFANDY9RwA2uKi6fnYZi4xzDt3ftrGXXUEmo",
  "key26": "3ZgSpMGwgYgvPd14Wb7RNUR8jKNBMPZaCBdmY42T4E3YF5UBqxuXtSYPXBghS4z3WGxmmaXHhqXrXd2E7RipTGHA",
  "key27": "5jKGrErymY3qLrMxgzq27DmHf3KszVJG7QuNr9EKezaazvqKHvD21tCmJNJRqsp83CwazQAKsLXWogKc4uTVfgS5",
  "key28": "3oNWu8v9LhSG6ZFdg71S1u9ZZ6wRnVYe4Q6H2onosqcnZfmJGKnCwzWb5BhnZgUM6eR8TGvLCpF6iLgDJjGRYdRb",
  "key29": "5Jgv35F8Bzsevkv2uXVpb7mSHurNitmVizgZnd6b1JNRHdmA9Nm7yPYH6fYD7o8nhvTPGKNMg99zPhTuUfdrJn3i",
  "key30": "4GnxzhEFxCtfJ1xqpVryQSAZ9XPsmAuvZpeVbadkEriZmKdVDUjfBPaHE1qjHLu2CUSaUwotVKjyPZgS8KSTM3Mt",
  "key31": "57gcgSijvbiEjuxgZrHJj8KBy6MqHdDMwh4iB3681i7L1nbeebrykrZAyACyp6aBHAhgKMPUFb13BkxGMYhoy13g",
  "key32": "2WnetTMWdTvv3GoMLMru2xCNX6NE7Z74BGwe8QLnFN1paDQzEWvKUb4mxiCcFAoh7otA8GdKAkzGSY5AGThV6hyh",
  "key33": "3MHLA5syaFYtXG54UH4uQjCGHWSF8Z3yqftvkvGKFgfwdmMKYiiegeoJY3spYB7pLatGUsgHaUSEC3GNDRhdU89L",
  "key34": "2Vk5Y9CF6GNTfXRQhuA6nkxTPLaZ1TQZEutq5SwUm7DMmdJPVP3pcsQ6FuCfzN6GZ86iRo4YGdBngA8FtsCq8jpa",
  "key35": "3Gzb2qSUnpojvxgWQU7nSHzbxLMBYD6HMMaCP4x3Z82y4RMDYMDR23RDS7WE2D6QZTw1VsNY5MdFHghAFonyu1uW",
  "key36": "37Grpu5TiKkGaFVRruXF3G8VNoW7DcH852zysC4wgtu84vLmtBh4swQTr3Nv9sXGnmpWX6jhTgYHPEJSq29Jku6R",
  "key37": "xxhUwfbsdjAV6U7yRcwC2dr5DcGoPQR7tcRbuoEYoAgECFHWCuz6pWMz2fwRaFE5uwSYhrnBzMty7ZCfVMU8WLN",
  "key38": "24wuYDD1jiMweDHwDd49bxQ5Yf641QFiMaJDtybpKf6UhvPAS1JYcsKz4JdiaF4rdjFa57BGcwYwJr6Y9Zspt1Sy",
  "key39": "5xM7wFszJ26koNDZze72UQCHhD2ixwAsGZ4iZSyU3oLronc6Dweas82YSXJ5TtVyh6QhSPwC3YyJ9k32Mir1ag88",
  "key40": "nxcE2uamzUxabsRKAJuM9JcrR7rwo9Z3qX9AGz43whQY5BYBMPYt7SW9sT1rCaUPeXoNrdu1WReb7kxbCsnp6qH",
  "key41": "3TmEBxAX7RWyn6itQLbrnoPM8fssQAwzENhstqBqcCeMS6CPeJrgyBsrrhLN2gfWmKCeHthUTv9CzeZnVJjyvJnq",
  "key42": "57HpJnHhsEshYrfxHK3BJjs4TwQJfWV79wEMEmDHV1oLoR7eNJXEHo2nqsvDxUtWfYLKhfU44MifvJB3CGHnbEUt",
  "key43": "569JopV56oCBbD7jDNAWy7cSEv1MsR9F6cGyShYojJqMP9Ra2iDEvHrDhtJGJcN12wZ8zoXPBJssD8VpXnHSjn2Q",
  "key44": "5xi3wZ7QiFJEAkUbfQGxT77VFuufh8HviSStmRuMmtMAaVgu4sD7GQ857SfRRd4iqLSDNYb9SYSkRm6FjkDxez32",
  "key45": "JRALqUnRs1NCeM9U8fVyb4R47NpvLztAQhQ2hEFpMJtxbpEHCUKhzAjQYv4Voqm6CBu2odYuoAh1mzSMrANTFFZ",
  "key46": "5dkVjjpBCdqi6pk3n3jQNQKFPa8BmcJtMPkLnYFXytBHkjDpY1rNCMVdsUzCrrh48uMfSyVLzpvVaHT1H3REk5W4"
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
