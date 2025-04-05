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
    "5rjTohs1DyQGxkGsF7u3a3LCftD25z6B4Wmfr7LCtMJgWqtZCGdcJoHbUihZC2ebu2MJmKVWqAF2QE4yR1sUdHGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gMVpmtqPEo5sfJHF8s6Nm1ebUucH5rozXLm2JBTTAxXhbWVKb9LH39zGWuzCzLsgUJGk1Dkk4oRXMjnUc2JSpNe",
  "key1": "5LQ9XDg9nsDPfj5yYbkbtim6CKTRpQf6h2d1xgtmKgWsiYpc3vt8vTzFQCVRgggPJsa8fUtdNns2tct6c8MTc2Gz",
  "key2": "66fjRWjxqoLSJpjrzS962LrpRm2LUQs7CcDXteiWnSVBwK6yKFRNsYkQnnhh5WV6xJbjF1wjFLpgjJr859Yi9Ymv",
  "key3": "3peCuKF3iNbtftqxnFNscp9KhqbkLLFtzvymzqn1cDW4gN9dnkjqvLdgZAgHnPYjDuZkk26CuX4yhsQuk7REQzLK",
  "key4": "3tprNFT1PQKFZcrsoyGoKfwCWP43DrcnuvxP8mB4SBBMGwkunWQn5RDMJDNupA7hQ9N9BW417racVi3pd3tHJLoQ",
  "key5": "5WnkX7BTspnBMuF9pE7pQoRuQbxmmUDhu5STWkQUew9RYpFQvvsoYtK7MyJ5gZ4U3YNJsQWkpdC4R88jgborkAhf",
  "key6": "3EesnhGfgnT1sEpqCSrNefi9MaabkMrFF2joyfiqfrgzzxzn1P5KDxQRDMGZ6NHcV7P7BgJ8FncjdN4qpurjptRf",
  "key7": "41cm1HvoqJHqzCBzXNxBqr4s521RqNyf8FFwUsqS1XTdiZSZ1Ko9gShSS6kpkpf53LDFzctRNfyY3H8cmvHdentL",
  "key8": "4T3NTZJwfCVPjpMv6nTEmG3g739w8Dfa5CgEQFUNRPa46HzgKhiMLCYY6h9Z2RbvsiFo54yVXPqDenHoAKnGuwPN",
  "key9": "5Vf5sgXYnABkv4SqhHqyeM5UoP5Yh6Qk3UJ2e9VVqh2ou9m2NSJ6QMKj54Fm9QRRia2F5n4M654YkasSTjgXHDaR",
  "key10": "5nvMw4mJMKWFQLFuk45NxS4tnu5AwtqCakwYhaoMyyqm3c2rvVQ49UcNjXqSba8Ds5q3a3HKPWqNkquySrYkrd5Y",
  "key11": "wo7o8Jh8sRrZGZaJWRWSgpozEpduKSit6J6A84rPVUNrDvrbFdDBp5r38kxZ5zWCftZvmdwvUzao2uCVVAw1bHB",
  "key12": "7YKijgQLKiagW8M4bAuKpsTKKzthVfaZaQoKTh2oqLCGM5NFweQVSagTLBHdzF3hw6JPfrojBzcWVGUA7qEmwjJ",
  "key13": "5xDd2yEFayudqotCUzZR3zQb7s7YN6HKW1MVietTqnTESg6Rdhdr44FSybiNFNyz7N8owXxNhCgfKkZCMG4KmowU",
  "key14": "2voSFbN6T9ZkrScCUVh9nw8QcXgzikzVLV6vyTEqwVUmAXeX7KHFSjsSQPE3GJR8CTDttqqrbMAt5gTyQhqRobNr",
  "key15": "YDvPtwtEiTKiHMYSFVMbfB8gMagwXXspEni7MdaVuFPUu6nLfvzNhvrEfuaTSTgRURXJycAivHoX1PkDYTzzfRE",
  "key16": "hCPuJNysQEG7QXDZvip1fbwW82N3bDHFMUEQkc1bvEEcBMakoDJ2gBXm8Kza4rQaZNCimC4HCW2DZKRH4bEMfN5",
  "key17": "nmpgpL8QgPt8SjnzAJeYncjVP7immy4Gg2582zijkrNHcBGREx4dCn6aCoySqi7chp6zYwvENVvXtE7v9mULydm",
  "key18": "26Qo43Grb7fFGDABFKUQHwjftxkPNNzLL5Vf5ndLNfGe1hBUK91vfN1LjbAU46hGkk8rYGZCJZy5RsbnCxk5x9U5",
  "key19": "1ADC4TTCt9PDFnqocbgKpeMywM3NZ2aodSTrgjx3stZiwgeCx66GgnAp1nFLcyrDxS8dkfFNJYmGtNW5ABeuceW",
  "key20": "4rPWK9EzUbbzKxXtaNXgngH6LPjsXdYZBZn11i9niCjoibLbJe5c7aG7KbJhxv56K4bZeG9feiyYHVk5y3bsi6h7",
  "key21": "5cmq48ZR6cpeACJdNTf9VvRBAZ3j39DqpQzq3TtsRdLmUmfiXDYrTR5iF1vvRKycS5EmBkg79B8tZUjUSCshaSnb",
  "key22": "2YKgzjxPQB3NiYvzQMU91mwdgE4p8VDRhBQGDnuLe3Jma2ofDdRjuxCAfkKcunEc7siccJLwhrrgHRRwKq6zUG1Q",
  "key23": "5N3PRcRnVsHWeW6PmArAkDfuZvDTYM7KomxbC7EKVd8zRyLWoRFgRkeMwahANtXZ741S326URFR5BaW1wj9GnGJ2",
  "key24": "71rJhyRY9QreEXp799zR3fXuQ8AGJf8ga9BEhQwvYsodVqT7zm14Gx6HMhHjwuie3YzkfRCZwugUXtCkqJdJiMH",
  "key25": "2me2Xo9gRPBSxzUNn3x7bVUqMnCFhSrzaWcnnQtK6PeRbzAWwnyYPLAzkAJN8wuGk6PD8ctQS8VDrS4qyMo1W8q9",
  "key26": "272izqma7tCKoqqYMwRCxFrkRy9f8uQ7ZXTEq5JpcE6ZD1J3hTQDh7oSDa7VyeeNAAckvJPRMXurYc1GG4egRUjV",
  "key27": "35FwA9hkmK2EL6zxkQ1VdhqL27qgsW5daKRPgwrpfUC8q1F5SvREQCDsnwRBZL8mSp2wcbfTshVmFo5yYoQjsNay",
  "key28": "4iwuXmfCJzmfTBfFsTpzNUiHfTKCFuTN1CyRtqKW9w7exniDkHTNzQ58vPVVtYQrpEjejuXgL3DJFZCt4FqJB1rg",
  "key29": "1E9faoAcsJSVExRjH3Q1MvymqHWzntj8M41cVdocg7n7MQfVtyvtPSugDNJ8jfLsNkZZ1yiNmy1kFijmyr52SgG",
  "key30": "2tXE5pJUquXgjzVHJ2zugpaQYQQaYryLHbw6gbQSeso8Tn9UTdnBQ8pmH3Hyrfq9x9yHtA6ysiwF7n3APhVVxShT"
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
