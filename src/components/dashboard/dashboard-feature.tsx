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
    "4E65UQGJUsZtzZGG8pHsSnyALgusBFjoMKJX2m3EqjA4jSh55K8QhsRgXVPWdWpCNuLYPWW7w3nt2DjJXkEdYCGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1QKdqqDD9toUQY2CWWdndmpJbpq8v4MPKwpwdpvvPbfQLNnzv1A3AVhA8uYMw5oi9TUvfchcipf7n2TxaaVbXc1",
  "key1": "4itv144kRQoTZDUcCBW16xB4exrEmXzPFmJfcBiTdvvaQzEtSJ7HerBWvkLjKUmrY8Sy6yLNi7REkTh9HpewYU4B",
  "key2": "4WSgwTLZzMwdwk26yZ4XnCXxnb39p17A2kxPRgYgRDGLAbDZ9qz7jc97Eu76ULh6RD3LxjKtDEJMMhixKdxY2vrh",
  "key3": "4kZ5U7hLKSXpsbJd34KtjWuWSeFws48twRG22qjnVnf2BWAo44bFdDEtjbg8m4m38bvBkV82ymWwmW9u5PVEdgQg",
  "key4": "5Vzu7VDr4xn3gLwcQeR2dDvEyQfsrV3DVuGcQrWWMioMDnMSPxE2b6cuVvS6ogjcYa3dgWA2syTdPdTDJuVYtwBs",
  "key5": "YRSDEBNYNpvVwwq38adyV6Bdj21PsQLUUa5SNgjRmi5YETFk2RAV9D4fNrrQFzXHdoeE8b3pJxSRBXQCSyoGacr",
  "key6": "3P2x7MzEqEZQYue5QLHXTtAm5NZ9o9Nnpr5McAQ2xixGq7Dpt3h3FzFePQ3DtvVR5yao8fVY5BLruaCyChuseAqd",
  "key7": "3DU4AetRATRU1kd6UgZFzAUDgduXVFGpW3XDzss3JQUfrVGX78M1hFGwjcwvjRLFwptUs7oPzxx7KjB1xXHJzSMs",
  "key8": "5a287qES6cicMxBGviKJ69wnCfKYKyZZmFnHcbiGKtQdBEyLzk3rgHd4HUUnvtPmfGvNzg7eQBkvQuE9UB1z6Kh2",
  "key9": "5o14XgN3wVPbWDJtEVpy6WJi6aAxp4kZYY1Yu9q71dVDR8cMq3Zz4yN5bhJCW5tvq2hP9PVz99odrTfunjngQ4sT",
  "key10": "2i5Z21s6nL7W6TRsFARcBPufFfqv4FRDgpeqNLGb297uVn9DrEgTUk32BVQpUZZohCZD7Kpb6XpVrG7yjS1kjaZ1",
  "key11": "61rmy7dCb46TBp3bwXQCMCJBuy7UQErcYDWa7bRSMJngW1DMa2YZ6uuPNhAdD4xVvR4pKYteEwWpZADHj8sQH6Nf",
  "key12": "5ykEi7KEBHKqNAKXLQ4iemdmRS828RwH2hMQBg41CbBUR8FHEtJiymQhYVpHh573DCRjBZwKRTxJfWbvbXpe3oN1",
  "key13": "3soLWxbKffjcyBnAPLy3fejQKKPMpWQdpqnuAe4QdSHex83Qwd8tn7oTrcHy422UCfqErRMSpksszV3RvbYF443M",
  "key14": "43SZy6aLAHeTiVot14EwobrPcB1abcWDtxWtX2oFvZC9hi3mCD2ms7TgDo5ND7vuJkCorK1nLSHVpBirK9eNr3A8",
  "key15": "3rU39Cf7zR4SGS3NK934DZ5MaBSKJFvn5VhAGWL1hjUJsQDdAqrheg48mfJ8nvAzuhVNjBxsaHBZBHrZTeA6JwjE",
  "key16": "3t7FQDJkEnQDvaowoEWh3nzoUGa8WuPx5P3CQzbkGNuYpGAfNjB2DtWNgwgEX97vD8Z7hZ1BXJ84QUcEARUSZjt6",
  "key17": "62RoyXvVoWnvQZ3J1shjdGSGewpnoDP9LRf6YpgtG3oH8iQmgbS55Um5HusPMxGqFBi77HZHkZin8bVomGvcpa38",
  "key18": "3K12umtE9izZbrC5sWy2eXtqEgUkrrUWTLYahA6RyRykbmwSJ34HArtHqqQRsfzhbwJyRJUuB5wHvJTdff4EABSz",
  "key19": "2LUMvp7c5a2QcAKttuj6wKnWLaagrzq1W88hXkJExYSHCRq1rs5B9Qh6NiXeNBqBNbt2iuy2GL4Woy2eBrmNMiN7",
  "key20": "k5p1h7HoKPRZKCdfU7TVbS8pm9mFTp23GvcERkgbEs9iXkJwa1JhiDpbCYEZytbZELYNK4ZgMp2y9xan2eqKnFL",
  "key21": "5VHLxFUSeGCgA4kd1T5fSwxzPPiH1zPudjsYdMwbuHwa8r2p7jgEa432wJmNvdN1fJiSV5fS72qBJ6vEoAaLR99u",
  "key22": "2HF5SPEA7L4z1FdPRxoDanG6nRTkQakqczQiRt8QsTQJZ4oywniMAKywp5NKwe2AyGBCCJ2hZuQyMGgRZfvECrUa",
  "key23": "Hi2itWP4D29wdFmumm34dQwNv71Vr5JoWcqGBNaRug7eDRxAox38HkjJ4vLPtgUnYmVhSRSgAoVrsZN5CegBUhz",
  "key24": "2tE5Q98Qhr13BecZpcKTkT65tkCRrE1P9v2oKbWsQqc7bfSWBnDJ6ktUyYwcVRv4NDmiP2SXiZJAtkYdRbvmgv58",
  "key25": "5qztvfjW7x1m28yDzJePjvMW6c8TzJgfpYRnUc8EMpSUTFUX6g8fLZWjb6YUKrXPNDGa3x6iquYFG99b7yL72opp",
  "key26": "2PjPgkbMEkPihKa2dagBuutMhQNXg4Ae9cBAVRTUMqtFJxTQJEi3Pm1Y652aQdfTSfGiQyGYX1TtaNyx54GGy4hT",
  "key27": "4kLTFsCeVDoLbksMfRAysTmtCdFvxcbv1DYBMo2BEUkMwARoueZjczYv9Da5YzBqZCcj3ivRAeffLKiuFTVEjzCa",
  "key28": "4CwYhS1sJoXqB4ZrCivQsCg7gSN4kbHgeQLgMoz5cUZF4X9buoo5n51wk4CPtujPS2qLHStDZQEv8aKoPutui2pQ",
  "key29": "5PtdLcNfMtBM5SD2AZCAxDSgc45gE4HCcp33bnE2kPdVRySH7Sjnjra239hfzoJsezmZGdgkFo64ZnsPN5P1yxfo",
  "key30": "4HLXEBWdT8eJtxmAUrUex6369qoqWabaMzP43rC7H2QK7urgKeeFFexnsY3kUG6edsUtFFSZK9yAQGg934S7JFtQ",
  "key31": "Y1brk3aXf4VQ4nfDt1ZJH3tcf3tHWTJWSjequuFvjANW8SXttgfgMTEd8aL9FLafPRfWMsU6BaheuihBt5KudDY",
  "key32": "4vk4JhDCdxAnurjbCwoSqhRHiQ7rsD95KqAoRtu5gVEKP8MQNMj14guHxJg4LAbMHRjaeJ3o4Y9crtu5nE2WN7FS",
  "key33": "4AbarVY4rw92HRd3oaX5Q6tiyC2uf6JugxGDQZHM6AfnZMVjaKSqFyMkjikKUC14neVotBWwSWRzNb7wGmZYkAes",
  "key34": "3bMiZS9D5FqRvLwFSAwxdCWV1BC4HWCFkNWboB49rmwYR9L8i6mfHaLAFa49ejnZZRsJN5uJ6EAtTcs23fmHkjR8",
  "key35": "5h8Wcpb6WqXRfnXo9Wj9VdaTpiMgH6JmD7SaPjxKVWxcNWSuniTqy5jBJmXBj95FMMLbhkfKjBw2TkLNmcCn4wMS",
  "key36": "5uBhh3LKaibTe72WTgKeLQSu951jsPDz7rGGnRtkFvTfWFuhmbNnkPvCpXUxwFFXCWh15JnNjrJK3Buybh3vApgQ",
  "key37": "5LCXEyyAzMWtDEgo76b5MFHS3B91XR4wVbw1p6QBqjBtTsrnxtCguqytTDx7gGxp5NuU3jeYW6qq2zT4cn18Ub4Q",
  "key38": "ExZko5FvEvgipknQ6jueaN2Bp11fiyZxqgWaiTh3PJXxYSiTdXoxVH2Ko6bcxGLsTDJWBXze4qiF99Tcxda1Mnh",
  "key39": "5zXLGJa7feQRtY9SvZj6gq1shbvtLycywDFJTKwhBpKhLoyqvSH35nsvU44zmJJ59sAYzjNvoJeJ3oweTaL1heyL",
  "key40": "2jvkL9c8fqXzWHwRmUf7ruCugn2PGu1eMCwEXUeP2XZbxrjoEmDrFem9fkj1bESEnrDuJ9oDFMH5kzVmkLKyuhRQ",
  "key41": "38d1yETr1ED2M723DSpwBNYMCePNiJ6CZ1JrpNjHk71SS3db2md8WgtUq6Vyyd9Ssi4nH517D3rJiJF6DRETT27S",
  "key42": "2jDfHcCRFnAkG78EtDVJMDkkVNXTcSmUnwRPkYik8mkGX5LN2dRZ6xqczNbVpk4KY6cMPURNMWmDArqVir6phC3n"
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
