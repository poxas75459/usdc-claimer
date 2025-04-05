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
    "4BDE78kmxHJdGTcFVLWAa3FLznM6ZpYWsr22an4LRN9BrCMWAZbsQjrdg8jcvQDoFSCL35SDnF7UqdooVHWuzfzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cGyMmeK2GhpUKWCTeVHhvmdgUAX2eQTwFMWo3xpucgDZ1n9AmGPvUDgJ6okWSUBEYkM4CLUR6ViExcTkWhoc4dw",
  "key1": "PBAxifFwasuEQr4Qk4AQTt94ghJgNw6CAEaeV6trH7bjy4xBDMBVrXeAbZecZajAbvCyWkDyPQFaTWFuTWqk9BQ",
  "key2": "67VdbRNkio3sBezYP73Ysh1bhxgsqUhyXwkmzvMWRJJQiGwwgvoJ1PdbDYZko4USrh9nSEiaDY2FDx9mhVs7dRjk",
  "key3": "21eZ3UrHcx8zMRAwiJNAUMmroBhxXbM96tmXoe5CqyVFbNmr32TrtTaaRv4eGZPCQENCoH8xnGhD2WnUM1n7295q",
  "key4": "2YEEuFTsJLwWcTvXSYH1z64EbQpDcngRdeVt4q3PBrDA856nTuYKriUoEQ1i11MjY62o4Mk7gP4sDznQ29aAUGdQ",
  "key5": "53XcxcnzkFr3y2Yq621X86iivMqiZaMrTB1zGcBx2567RrJLrDzogdD7MZFCB5TJNdeKVC63Fu43uZ5Cj1bniosK",
  "key6": "2qo7aPFw6t7C3zXW65LYvfh5Z7bHvRhKC4YDBtaAgpwhxMQzJxSmGPk4mLUL51xf6PjdhJZZ5FHcZpdNpsAK3ukA",
  "key7": "wCLez9EvJmSej3zhzog47Mob1VXAQzo6fbbXS4ZuH51z3ByaLDFeaZafYnQRuKK9h6KqkSEahJWaPYTrhARQCU5",
  "key8": "4ti1jJ9feknV2gN4VT9KFyZpnR6QrNkYJfBjFkZRkRDjMTPKSwCz4tTeYtZTVB1ZxCNdGH8258S9AsWKa3gmFkQC",
  "key9": "2ERWaK3ARsCCGHEuVcqHnzrhTCXVKHsdWGpuqGJc3SDLbFmxgwrqT4zUpu2tnzHJRgpZB2iwLTVdpeMP2euUbcm4",
  "key10": "648dL4L9vRmjtfCxftxB4NtopuUehkEUpFcRWZkCntjEDgwHj4FB7b1LvMek9HMNV6Yv8MVTo7e3F5tXz5e2Y3i",
  "key11": "4stkDAUyhwoW8J5XmKaBF3nY9MuBSWx3URA534dqi6j2NcHa1eMdhibAKhK3JX8pZ3HqUeck8MLmPvjUfFZQSUr5",
  "key12": "4LPtGdhYzw2KLBnJchrJUo1SjTzj5WzH4WZxubK2EZBHYgxVVY9f1oeQRiPW8Nij3wPkEVEBpZfA1Pom6BhtJA2Y",
  "key13": "27djehBz6strpe6piQCjKxdNoVhsPBugYtbTjjHgdiA1NAA8DpuDTPuREUucxSMAH4FkhCcvMv7GdCCeDYX8prS5",
  "key14": "352i5Y6E9cFBZveAu8WdWpWxKr9pjeMS9Q93q33A2kB1Wk9qRE1TeFnhr3R7sK8zbQfmjKN4N3N1T5QGTdt9dEv7",
  "key15": "5rX8BNPFkgYQdProA6GmX9CJWXizba6et3EmHoYNtaS4JbVMwg6PmhpbGu8VrRBqbdZxehfKjUCgobMQD9im6RFA",
  "key16": "2FKVPFVFYoeMCoKrcu8jtGD2rSoZaqHeyW5Fh78D6rj9bSAEPjGoMKiyKT1XRpLs2mQYwZwkC3M4B1b7fbLkBeyY",
  "key17": "2pAmfWuiHjvoqPZT5kwRVMw3BLXa1scr1FnH7MM2a1u1WV6GZNkGF8SG2fAn3XwZmCZQ1nBsx69z2mpYdXCYkQGq",
  "key18": "4KgqZmaZargUSGLfk1uoCQxH8e7jnEK6UHfKU8wutkps8yM6gt6fTgsga5pUVLmcDmX4rA2br5Busipt9KgjJ7sp",
  "key19": "4NmP4c5NT1ipiWMcyrVtvnVGfrMRQBPPi8ShjRsknkTLLet4axJLktG9Bng1yyQTh4TqwxcL71JdiQoTCkU13wH7",
  "key20": "4WqRsf14rsvWmm8JGuFbi27MZMmMjPjY3VmhEZzKuY5Hw6kP9LXNvztFDR8L4DiZ3wp5RmGBp717NFsV28Rcg1ZS",
  "key21": "3f8asUP5HdC9M9xMz6nXZHMNw6yFF2ssQoeLSxA5ihnXu8VR7xyBhnX2oKL65XiDxKBidoZSUHT2s3wY9AEUa3s6",
  "key22": "5kHa1FeTyHPpWtBVGNdv1ZA1JSzfvKqyuYUE6mPhAUY6bwrtQLbxE1FnvM2EzsgrkRouysg3A6W8t1vrga2KerrS",
  "key23": "5mBg7zCkr8F4Z56YGUGm4a5sGdcC1V2kFp16oQZxvyPxVhFWX1S4nCnfWDENowVB4ggsQdt1VYh9CHQZ4tCpr5e4",
  "key24": "2BFkE8xz6h842Kf5SDxa3msa4SDHuABQsc3ZMizze6iqg2BA2kNdpptWTCoEsFMdBSmUZZB2RjZvC6xi9EbXU3M1",
  "key25": "2sLf36g8asyVmpLNTdSMUVQuVGR8V4rCfZcQQW2RSrZwrepiyn4yMhx21odWoc5XN5zPHJCTGpRgmrKUR3HGwxdL",
  "key26": "bA5XRaVVxPD6j66nbqvHZju3mxjY86Y3fva3szLoezxmQg89RqHMtCPZBqfhkYGWRuNAfR6aUZKWnWcUrQHWeDU",
  "key27": "LBT5KQZBsviiwuSdtqF8d9BURsXPXCDkX7K27Gnonh6QoGky3863kkPeg958RQJWN9FK6bPNw6gkBqNRtiCEBA1",
  "key28": "2zePESVf5mA93d6JQ9qQA7gPzKigoizkK7aW3vejeA8BAPevZiFHXKUX8WVqTtG99PUEK2bqqvxxqMNaGdGXWVxz",
  "key29": "2ZCnK2WEpwN3NyYa8MdDZz6DqANjWr4osFsktSn6XiUekeuBE2BAFRMwFw5trBJJRuMDV61FGtUFzJHoaHQKXEno",
  "key30": "LG7ZZBgG9kw8oDQAa4UzXtjnqdzTcvMJUkJFtvUnzGXJ2BmLdxUcyo4q2hbxMbaH2QoarEyFA54asowCLRVJpwK",
  "key31": "5FsWdfKVz527g8Gp7GUCKk5BNfmxLwbNJwvoPQtBpCoyykegeGXj4y76MXc52sBYKZFJu5xPBuXbRCG6qsvJmWv2",
  "key32": "CPdePSaDS4Yms1G4tgzCb1846SKd7HcJMeAvudzD2BppZNf7P381kfVdC2kXFdcvrJwQSd4zU3yKNMTCutoEAZh",
  "key33": "3FQByXT9qJKiMu7dir64KgzxYtMcg7YrcnrG9buJHZUkDfUbCVUDEwivPdhrAJZVQCkbe1aMS84mH7KRr8p1VezS",
  "key34": "MJczQBso9RVkmVNGt5LbD3F9f759dVekNE1YnBBNcYFfwvnv9rwHrb2xLKmDqARdtkfC6GQFkyYWJVVoQcgc4XH",
  "key35": "4WViDoms66ZYJwxHwnEwak2j4ktkdjTt89stC9ZtkrbaBERfJyRE9a5XoGxpvRzvqajdBxrBdXT7aDiiYzD4Mhns",
  "key36": "5i8rX1dv82tsJ8HSMwZ9N37s62KJCvQKWx5RC2aPpNJY6dxyU3mQgaJjt6tfMmoVbggvD9fzmWcdaJQhJRXG7d6r",
  "key37": "55LX5HP9o9XPpf18Mw56TyspZBMbfgy4qcj99BBJMJcFBzx7C67yHy7Y8vSQraPXDj8yeAa8UvJiuF88fxmzZ8o9",
  "key38": "4paudVGggJKwPzzBHeyiLZUQoDHkdcfPatedmZsrM4dR8XXuxcVTHw6tutLo9GnwDzmxbCQiePhUMd3sWnCqi6Lc",
  "key39": "3qMRm4BjTFiJp1qypJeLkbA1yAjL3Mg5Q1XH1XtUGV2bgJWh7A8w3o4gG2YjCY8VjqPi2mTQ3DLJsU13KFh8U6yV",
  "key40": "3d3hLGtVxcm4XYdY68ZRfnj1HMMr48RJAfJyzhRkNaHJhgZDMB7ZrXxJmwBsgkMfoAJJmNApLCdzfMxEbQVgwkme",
  "key41": "5W5QgAtnfVZqnytvw7CU5QJSawaESf9YJdfP5PJS1xkyJgqkGuSuebjwSkV2EoqFcqzVbvGnHTLz2R9gv7ZrzcUv",
  "key42": "2ztyrFDt7fcizU3usSphsGGKHhDkB4CtbzoRoQF9DUvAZ2LTxz8qTv7u2NAfALuxRB2Bch5858RpkNGTgm2aAH7",
  "key43": "daRBRe1pTPehbrbzMb75sYHAfQT6nLg7fkZeE32zSvHbCgPCbMjFkdC1ybADFSMvA2fsziZmjcpXYQDXkakb2Tr",
  "key44": "45j8HTMCGhLPf1X9Tc9s38qJkyHNSiCHjWTYWHM4PVsE18QcLe6h3GHvtGAjuJkjJxzPsBRxPZTJoefMjAHV3t1e",
  "key45": "5UDUPjvV2JZz7u8vkYH9jx8MhpjgPAoF1DvkndN3Xqe3eWE445wJegMGGWrXLaTX5pfyrVP8AqNYsSGjg9s6azsV"
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
