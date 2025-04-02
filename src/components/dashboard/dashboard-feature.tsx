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
    "5SvgedYqPTLT4EaNVsR68dkkNP33px4SKuEoR72KimRWyYjHvxe1BFmLpxXKoEPLHeLRu7svcwbrAS6RAiyJyHTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iQU3wBkQsL6TfjcrYxxnWpT11XcRDY4MW5iN5n3uiF5u1MjuCYhtHBFADiaRvkndRmpzjwUDivCPqbptqqFVCgo",
  "key1": "5kEWRw6cA1D24iGpESYUP4jujXfVsucNHBGEPXsJBi7yMVBNDrRaVc52j7JyhJZys3pvx3v94xkPjK7LtgvnnmX5",
  "key2": "3ELhvmf7hHE2Sv4WUsJkSBDqvqedazkdheHnNLYruGPssA7ZzaJHeDYsjHK6m2CeghHqcjNNVWezQvhJwBFQk97N",
  "key3": "4vuFSYH1XpmRFJBD7ADNnzSEbxE1tXEpfLD53QYxnTAv8m4NbM6CamBYXk6fmUgwbqEA97DWkC1bymeoL2FbkZde",
  "key4": "4vLGXWMav5crJ66DPY7y52S13D86dhQQQBtqTjo5w7qqEm5Typjy5kn6UhBdFhYUozhjt8J6QCdtuvJXDXe1Ghx4",
  "key5": "38PWySyMvpt935bqATmLZdiY82aQbhPiFpWKvzQXGD1NiDYh4zBBZZ3nNf9j2gn54YLUnCL8ByYGQF3ytphdcxUP",
  "key6": "ZYYkXeWbaASYzDDf4nUZxCsqYe8YbGUSWYpuwFXELKRxDyYmWaoky3j5tFbPDZLaEuRunc6d14kc3YTW878pUbc",
  "key7": "5ghd5ZRNyoTYSKHw5JFvG2MSWVsQJFDVXdA48jKd48pxNYCaS8cG5d9TkLTDvNHsh24x5Dp9MgGW94xfD2rGrLT2",
  "key8": "4uJTKSnJjL9eJo1DMwG7MwsCKj7bDxyCzr2SqoqpzPf1VwzYFR6xihDvtkfKj7pKJ1PDh1pfZccNTRVyXYP8yuj5",
  "key9": "sE1gzAVByiwbAVa5SWhwd68LqWCRK77ZWaVHVfQGX4Z3vyBkxyHVgs3vSc5o2D7V6qjojHpzUGMCHJk5jYq1uDP",
  "key10": "5Br1UHJ4qgtJLiD1upLCtTLpQZNbVBYZAKi7WwLcbJEWxJSC4V9BrFwwBMAS7oTn5phj5TLV2fa7PpgffJVuJNoH",
  "key11": "2JZNJiA8TSCQ9oF9fCH3q3FsRQbRa8LEMAMXtChSHrmpFR8pmDv3srYNNrNUZiWzYyP9A61p2Fj9GKUrGpbeuCmZ",
  "key12": "64JuerD9iog6tgS2REzQp4RtaLMeuQ844ancydSyD6cLKJFrBqs38dx4hUUM5WWH7rVArprGxXCLKjAoLAgHiidT",
  "key13": "5xUEYcCotkGT7DeTHH5uPpQM4hxmCdbq6aBouZ9kMe4RjHQnAAPjBgwh7WsHoUgvGABhEYPjH66PuRDFXF8ukSdo",
  "key14": "Wk892CqpYLeJoPdZkGutkq58vuzBgnWgJtho9TPyaDNwJquMuZWFEEHNtpFksSAuDt5TWN2LcW9VJkVoTL4YQXy",
  "key15": "5fvEgYtyXL5dNJXYLPq4shPyeC1pftpYAEG3j3XrFD8mTEL5WGdMXSNQxtPvWk7i1tbyuXjKhadMywdKQ59zvTK6",
  "key16": "vuavbk9ihLyMo8495WCrdwCpgieafVb3uZU4DkwEmbFjUuso9HmJ7RbCtxkBsPsfxYMZgLz12szdAtuSU9XyXZa",
  "key17": "4mZYeqQo9HLMPsPD7x1hrZNhVdGbo7LXRABSsXyGsaCdSTBBM26KF7FExJxC5fDkt5isErZsBMkLgtXK3sc9bd93",
  "key18": "2rrh39BaBUmeS9pGNCPWm9BxjDxk95P3j87sVx6YndKwKnhQeCdJMqTf6adFH7HWmMsw1Gf6dM79MjYqxwZdBSGt",
  "key19": "3344XvmipxS2YeoMKfDh8ozg1wRVo8BNTcbvSuVK912GGUoR1iu5Rp3QBdw7zSLSamHUp1cWo8VS5vQkTHZ1y4qB",
  "key20": "2zBQ7zyWr2BoUcedtrEFx3eTjBibY7196gErJYEHHgpc5RkVf2znw56rHHNEzUhxE5xpxPxRurxZvEA9iqhHBTiV",
  "key21": "5HKHuM1hNrfcccFJtdstw4fa5kwvjzXfVKExCyVjJoH297n2KQbwHMgaCVxAEzGizJSpKircYJB7WYA4KWXuDPbL",
  "key22": "7DMvSDTjqGEGzmRiDwkcc2jPHsSEnE9hZyDLJN9VoTsgH422WCruzaD2Fr5FW4SQxJyRctzTa9RgLFN5BTNHXpS",
  "key23": "27LKNZL6dt4wRuyUSmrtpWZdoeq4BqLq44kFtHCtiR89DndoNXd6pp3vZr86mZhR2j87CP9MRikhGNHjcL8ENE2N",
  "key24": "SJGXvu4Z9Cg21pKtCEFVDAxVwj1a9ppXkNz8B6soWvNgdcXDj11jFDD8PS4nWSLD8Ksrq5UCCNAB5McZf46bL8t",
  "key25": "5GdBaU51m3LSuZ1VLp1ekBY8EgZR7Yyh96uj5j7bLZ4TwgmLevuyM9pAKBAepWGXnY9YRMyWVxjakctZ92smgJiS",
  "key26": "2bT16ymR8jJC7KjWnowfwrXKvvsPvNJtCaHJiYBPKuk3qAE9n42aTvmi6h5i3Dwy9yXbfaerMa16qmkDBEJgEUUu",
  "key27": "5KNKRPzruBGT1qwxgBfH7MWqXXSzGqVQCtDvD5FrWqvdi6iRFNqoTB3UUCz9JmYsJoopcqRxkHiF3kAEsjwPbQHx",
  "key28": "2QFnyje14oc7SYjoi7s1MLztJkwDTVDErkg4NZq29vJr6fWfMjLfh1qy5my2ETmndJV6oBWcmzqtkLiKQ4YLgMVc",
  "key29": "4x3nPSPs3h3tNZs9F3rq5uBLE49nbW6YTVEE4cYWvcnTmtA4jfcR1DFbdM57H2FmzRLKe7KiSMd3SFooUHnAG3B9",
  "key30": "2dCzxDfXMZcaCofXsdCTWQx3fghD1dh5pztEqgjpJFcShiJ4z2VyvF4X3eRRedD2QqGKx6zfJ3piUTdRjjeA1Hbz",
  "key31": "2xYrUpRBaGeoeU8rScSFENDBmuArrpEsRebJLb8B66w2XoZAXRaZ76NHwoB6t7HG3kSAVu5oNu1DgYe5NjQwMNRK",
  "key32": "639RU7c19gDYCwR5SijHv6YcvHEnU1dpF4ognmeDkrTjsTtSCnpGxbzCoxAgqbXQUwvoQJL89dxAB4TymFUKjw7e",
  "key33": "4fY66V2D2YFi9mJRLXLTxiDRxV1NNt1M2F7obQecxDBus5tNM9xwExhZJpKK4zGZNQFX7TTrxzGAWFxcC6PRgjpA",
  "key34": "4PFqeE5VeCGMLpJNdtC65Ho4qZG4YQGv41sHuxVxY8ks1zBwQGZtnso45gW3FebkRZ8Njvy3hFDv52Xzth33ajjr",
  "key35": "5gtFRQwwEuDZLDcdHvXNWFCdeiaXqf1GoXS2E6m1XmmyGWfAf55DzQgAVr9nXjwGZwfTj9efFu7ZJjHi4PzcD5ZH",
  "key36": "3yVDuh1RMfN59B6k5ZispaPrgnGPjC3NwnaVsw5syMsGuEnsWKHPAj19hCpc4f1kRuaNoyXG8qQ6Z8mVqC49s6Df",
  "key37": "2DX1Mca2m1WQVEpkfZBPPGfPTwvxMSWydvU5hnv3MSExQV4yQpwKtbX65WFmFWLC1zY6JjekMbXmfT5qN6q1f2WR",
  "key38": "4DX2UJwoKSckRp6CLpgGXLQUJCu3BKk3JjvbxPTE6K3Eo8CoVyVrRmHS7GcxM2pzoBJevgncaSBA37XEqvMUCibJ",
  "key39": "3stTcZTUWDmz6C8jv5tuDrhzd2Xa7kC2JBzZWGzpCf4HgoiejFjQJd8tXS1fPurNJAQbnvLr7uY1RmShTQiV5sFE",
  "key40": "2JfCVoRUbRqSvfpFkv5PjS71XwXNvTZFygFkG2oj1SuKLEoUAX7SJAHEg6KFfUMRicxReDkB5DnXTNwWTDDw2Vr1",
  "key41": "2KeZxnDSHNWRGR6JgKaHh4zHBPR3vvJv7oxRiJ9r8yeASVAGXVWB9aUZSZqbadkjqFWrZ5LNG8kDa85uBdD5YX8i",
  "key42": "4LC8oFwaNXiSYjdYMRmm55X1NDvd3k9niPHCRGgVsVrK67vZhCuEemWSJeBLafcbMF1LDSuvT4HvUZboURG5PBYh",
  "key43": "4MBHvKxzRVt3GsuQavWJr3dvWnTKhz5KWxomqQkLiMasLHtauMukAe8xh85shdwi536W347YkQGzihfDKEoSpCXb",
  "key44": "4rQCDBtddKy3wf48s97T18EnXf9HnLevCEVoFytn4Mrf8GqhyMFcps3kAfNVA1eKyrmhneWj1qWeLLoqHdm3R8Ja",
  "key45": "43D7EktVMUFgM1wsePiMuyrtYazy4vXbyrptDbmVyy4uJVGaS9AVJcXhTTKAMuubJhsr4ehBXeQxG2irSPB5b1J8",
  "key46": "4vgYdyLseHesZ51VtMM8nhzVryAH4xZtfEfLtDVPEfMrFDD6FiKBPboVFqMmatwXSYB69w87cTqxEDktBe8NDezM",
  "key47": "5weVqY86zysoS7gnhBkFJLLUe3kkaTiSR3YSg6wE8hy1ZMaAYBcJ2Xd1pg6euJ7au4JeNvNUgvZr4Y1ue2W97VXe"
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
