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
    "XPcpSbojoJLfugGRs5bn2krAXuasibzacxEEw1taWcM2qbZAWHH8jt38AifNLrNKxe7e2EZf218S3n1rBAsWwVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PSmo3h86Dbe8NuPwiQfk2oNbhjZKFJhE85QmPGrpRnuPjoBNsti3pMNBdQNNSAtfau9xMxc8q83cxwBcBEd5rUL",
  "key1": "4XFgsPUaCxFrnSxSWPDfWm7VZfvsV2CWZgxKCx8ZQ81nCBkjLt4qkowq1BxTpnuHh8CUhWS59WJq6C5w4mwUeAD6",
  "key2": "4p1mZnrwFuAmnLVhToLACMgz6pidg5ArhLBLsCUQan7zSNMk29dEHrshorRJi8cstncRTvAMYgRwr6Hzbf1MrTCa",
  "key3": "3hX4fFJbAa1kgANUirUc48SxBxbikeg1hY5c94jdad4SNXgMm2kQbB1j2xCLciPEku2eiMHTKmhY4hWy1JbmxfaQ",
  "key4": "5xnyQhqmpBgy3J3tU3z1Q5JVWjejABkjFGEDYmCGKfxn7ZhHxbgxuQYoWnRxHSGxwPoWu8nv4Kv67JX4aDmCukQz",
  "key5": "2UQpvRxLNdg96BoZTTYD7FvRdTRJWEPHjjzcYZMnf1U8smHJJYGQbuNkMFSSHrUu8S6NZ9YcnDDY1gACkdsWDQek",
  "key6": "5Ef2ooWU9YaFvnhathcyDxDDGPin1TuQrbPVqwsStsuVV8NCWnm87Wwhrx73t9BswGYdtXtxoqWWuwyQfqPuzR3E",
  "key7": "52LxqARzY9qiCXoiC7zEEuVEpWywAx2x9B9zF9GBeWghaRzS7U58RDhYZKr8KPhoVskjCePeZkkbb7YuDNVujqSg",
  "key8": "3c8gc2bPvsd9TijkSvmLXedQsVsMHdzqUsEbZHMJbpmXcNFs2Md4xyVP63w5RrLoR2pGs6mL257gzxqZW1capxrr",
  "key9": "4Bj6abwmTtwqiCAJRBZguWt8eVizv86S9dQbZGfZPBFE5SpDuSdUAUvnhD6oSn8mfrbxCaBagzAnpjhML1GEKqAK",
  "key10": "253Tes2UYDNw89WuU6QvfUojnDXqAzdhhDiua2pbrtkH1nwNK6XsB8NSeMJ1Typup8LNYMEGaV2F6M1TKd3RcqTp",
  "key11": "ikPjAXY6b8BcdP7SHj3xPPkrXZveFN5CrGR9PiMDcZDQPeA5qPMYoMdHz1xEJt8eHGyV88uhrVyBn38XYS6e6ns",
  "key12": "3AosJFnBSqRCSZms28GgYjVM7ShqeRxNrVK3rjAC7kUqGCEoiuvUebpuVuHU5sQBVdogJq7E8TSbuobE9xTZaWo5",
  "key13": "2KiBMqMpR9FRQukqyRc5EJqMoKw4t2rVajWmqcji8uZC8mu5jo1xUWCnQ6ToWhEEDKbs2QG2LJXYmo5Kigx9sD2",
  "key14": "3Qu9voXnL5pUp42wd9FjDvaQNJfuxMRFMQk8k5EWTD1c4JKf2yzerg6fkHCxjLJAttqZZhSTsi4MWjrxdgcJPWnF",
  "key15": "5A1Fdd7sxpiBrm7sMH1xEekGart8aGN3R4mgj2GcLZTxnSJSgMMULQtxHZk6K7Zo6Wjs35sMnqjmqXkBbXXrMzVh",
  "key16": "3RaNeZpx7tu9nAs7i5rt9zX5i7cMubz5fa62PSPvJRBxZYw3h7beX29dKr2bZ3NZS8aXbxoc7EFxncAFa4eoZbLF",
  "key17": "27frWT5etWbjtp18eS2xCdyB9qjwYx8V3RrD8NeJVotadT4wB7eRP1mF1GHFnyRz94KkPqZmns2F2UkFzXN5mk6R",
  "key18": "3NRm1SnXyXJnfkypWiFn3t7nFqPBYAKVn66Frv4k3BwuDSJKSM2Ztm9KsLUibrJiZohj2Usu8n388m4HLJKmXLP6",
  "key19": "46gQqvNNi5VEhZ6gBgDkKQ1sAoD8dQCm7qQPvqcSmaqx1HaaazToLYrrkGw6TMwdSQcth2oEdEd8mkrGNp4DRj2L",
  "key20": "4iCXmmTF9riqepprnHPbYf49TiTBY1UwfGXNyz1dztDwAFYcvbUSpsEsUHwHydDqJg6m7aDF1GRu3FGPAN9jQiiF",
  "key21": "2bRiHZCMyAAinteBi1NbryZsKceXEyH62VNnvkHyg2S9WBV2fcoW6sRdJLHH7RQ94Li9U7QQfHhcKLiS8DAMQr9",
  "key22": "35hFzptgMVxpv1TcmKtR7KmWVUhGYLin5ixqzdBKr2imBpefV1A2vF3ey6ApkwWxUNSB9DhHRjhYwsPgPUktwnkk",
  "key23": "35VhvR9jr7jNBUq61uvLp7gW7uDGuggJQSPHgMFkF6Dmzub3L9Uk55WW4oePYVFTUYsCBqrxm4gnYF9PkJijW1uY",
  "key24": "5v8gkGGt4e8JJYvUT7au1rXcyoo8Lgx14eseofUPCKBoiR5NKcGHUqVFQN2DJQ7pe1JR5Wi43Eq5VZSPnm5cnzwf",
  "key25": "NCXaPAatDAchub9cH7QTwTRgAxg7mYKpUsiRr41xuPNAywwPoL4QpugaBsSMh9kRLHxQFtJBHPghC8o4DMC4tuy",
  "key26": "5w8uCgPcWqc5w7Kt6gpCpeU2Ai1x5ybTyaPpHntaS8RvsUD1kQwMVFRT5idKRLmVxcxpdZH4ap5Qh5z49WNKiwbY",
  "key27": "32e5GYFtZutASPQgVbBHvxK3Po1YwT9ehTCsDc2w88WBdZf56ZQ1ghPgeYcvsVs9YJoJudED5L2JZ9beZpm9L7FL",
  "key28": "5rBC6eFwFz684nfbAt2iiZXoDG9RidSEmJCkHtJWWjXAt9Yxaeu41QfibKkeN3dX2aqiiCLgoRjminimC5tz2VgL",
  "key29": "2PjXeudJsjcMBwRRzrMD2iNifhnboB9NsYtacuegz3oLcj2At68absYVkhnxfGroRgpTt22mBzwMf8HYBNxWYZDo",
  "key30": "2uq1EFYahmVXvKNYNZN7RhVDpcZyb5jfyTn3kGncB1QDte4gytqr3WxeLjAPRCVWSzsXRhb3qNer6h2Q6dkp4XEb",
  "key31": "3Wz6jzBQ4AD87RwpRB3iVhbQDqmAN94n1jv9c62JSPL382Rgz8WPkTgMCADWhQ5bP1sGRhXgsZg9nAAccsL6ATUN",
  "key32": "3yyeJ6d3SJzQtVV3jBmCm2vEYmxwouB94GiKbtNMnK4P9Qs8YF71vshStGFUiTisddWyk4Wdf84TCUAdWodQtrZh",
  "key33": "5ts2dbLKdpLv74X5rk4AwZfNSY6UmA8VynUimxkWR6eFK4tCiYTp5LfnfKpKzr85ypZCQZmEArTthk199BAsMyeE",
  "key34": "5reKW6CB1H7qJ2HYtKPvj538pUccGcy5mVbsqUr9T3Q7EH7MU4T5Y558cCi9qxqHSRp7r8a6nSpaYCnUg8FXqa4b",
  "key35": "2eYryZSu6nREuvVdbeGzKUVFXUudgXRUitk5n2RGoSuZqfTW2NA4Ww74n6QESbdy5zqyw9PddaXTtsLHcwSBagoM",
  "key36": "2pwChU8q9QZsJJLbsFd3yWDEJNuorgn2gMJKzfyxWJdMLaTDEzL3iaji2jEg9uQxonMJKjBg8Yzi1qymdEPpQjBi"
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
