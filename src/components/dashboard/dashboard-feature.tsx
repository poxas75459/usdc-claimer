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
    "5jAEHProv2D3CboBoLrYStTuZhS7pujtXQLi5ApFEU2BoLmQmh6gmbUKoeMsdfmXZ1LxMAHb4MTbcmQvG4mSbFBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49MaV4k8BLbnTLJC5kmWdiZ8YW8CqHgVCz6GwatWex7kuFQWsToG15y89ck41vsKRcD3jxtjSJJ3H9P2w2QLPF2R",
  "key1": "4v3A8baxYpHbJnqP9RH7KLwomAugmyEEMNnxGhW6ydYGAJYo7ditgUnpY8ufDYtpn7PDXnN84wF3jbSU5nFyNSZZ",
  "key2": "3HrKoVzE6tWx6kmuN6SfsVwak3Sd9Dcz8Sn8nuH3wWT7K4SFz6m1ZmnyDpm4UFnEGJBmLDUZ46UvxKTjQFfvL5p7",
  "key3": "3aYpCXfnuytk15rCeCjKT42kGURo37C7Gormtf9ZeYYyDh4mRjW4fKr9h13Fym1uXysWL1X2ipYuKarNSNxxVH4B",
  "key4": "67VH8iDJcW4XN2fN1NzSuYc2FaFVNkt3KE8UenXn2hHWzprCy3Rx21cQoYTGrZXCNicBWQmhHC6aYxtx2oNDi4pR",
  "key5": "3Xgq1x3tRn91sRogszQuYpphdbv5KDWZVrPzaprxrkPkuCvAoqwNA8dNVJAFW1gXUCegSJDWojpEDcsATfqcsFJt",
  "key6": "44C9LhrHjmuhrVkQVGpbRCCcVGPgBivgFJYSDAGch5hpdYvsmu1oPZzVynLAhx64TyVcCsSdkDYqnTJcKWd2ifuY",
  "key7": "2CJ3KH7msdo9LASsiLv66MDE8stPQLw62rQr96iJgbmm1DXvmJuvkRvJCs1WaVKucTfHwFEEmf7mpV82cR7ypxDx",
  "key8": "5WtnJwurhJhLTB9Mr9rnk9LGJAUondArE5hETxXsn6ff3DEPmUJ55mum2W4YE1oMuJQUPhGRfZXrjtFwQTkuEKnB",
  "key9": "69qTFnSq1NQV8MuXsVhbYD5DH1eHQJXCJsmoiyGjVDXweq31rb2L88sbU9GQFKWBLQBHS2TXjJ4eUqhrhJmsubw",
  "key10": "RJXMyjTYFbGezJo9pYANy34fyia1ja63deTfGSzjzMKSaxmxKg9Ry53LTK7RNCgfRsAmzggL483N8vSGurC7Y4P",
  "key11": "3eZCPRLrwwAfbk63JQa2xv6xxannQeZGi45mtgnUadGdwVSZVDMATGfEcPo7WovqbDzAN5uNBhh9KVGKt1CQDttx",
  "key12": "5pBJo1hGtXw8XGJT2d8ib91xCpDWDzrxn7AJr7CHYm3HpdJE9Uu1uebnZsXAJ9jXhcsZhqfaft7hHbFdtSPY2rEE",
  "key13": "3EpPcN89XKneN6hUvnzJcqkDkVqEwTMERscoxND6uTG26PRemVs4f5Ktjy7LQU8MCrdKq5R8gq7dFAi73mNiNwWh",
  "key14": "ZbuicbQEtEcVpG5fQzGLnnbNvTivTepZqJGtRog4wY4aAjMppNRScSCP7cXgszp777Tsnfq6ndg6NsNHZjiN6ba",
  "key15": "4X65KGEodtvuoby4MDDB6SxbDrhH8AARSmfct9D3ZsRpF4t9zRtzSBJKdjG9SC9aAjAVJ28Y5YraaoSGHxQk4ZR1",
  "key16": "59h7vAGKgmoVdS1GZNVRmw2tThfsTAopHK7SRY64YJExnFcf8DspofPiBh8PEorNMT3iv6uDUs1bcJ7SzwxY8LEe",
  "key17": "sewvdhSsrsougNEi6Nm3mCmqWBDHmPK7xVKY4g3NKsoZEmYMPV5rsZVuTKfyMLDQooErTnGATGNJ19UBB6CXu38",
  "key18": "4b7rgWANHFCvLupxXAyLdLM4o31fnSAFo9cJGRjKQkyVtA6wKUfNTqomVCetWxy9JjJMQdFSc2AvoAJ6cvMghMym",
  "key19": "5FfboJLyZUh3v2ogsByisySv1fCNS6Rv6aErPvS9mayqozPLDEaqNhjGENtCkkHjkyJxtaU6mFmcAHaGNFY1U3rQ",
  "key20": "pqfSsVcYXdP9YyeDimYT7p7SWgtKuKrFuTgbt7TSCG6FZFGHrh81tt3agSqzaMkU9xCwmjW9C5bK5xXqJBHzfFq",
  "key21": "4FAiDzSVxj6wUM1g3TwLztQ6vHknNCReBPgkKLdR4qxwLmZHcvoBDZPMMgGjSbyBFyNwvJ8EyGwhZZoE11mYquTv",
  "key22": "5dpCu79LnEEWdpJNgicogUMjn2b2AFWtJJjDvpFBnR725SspPDHKqnWV3TYYw8oSPe95ongojGmq4Y1qXzgY1dqV",
  "key23": "2QDWGZg2wxhs7Q5R9mhW4UB9K2QVCDf4dGEGJ7SUi7qKu58tWU6P4AfdmkBKucpoxBDraA3BDqFsmRXeehcnK5ox",
  "key24": "2c9YWNuzrFVN2KJt3GdAZMGXu5VKzTta7Jhp1SkwJv7PkoLvkvChJcyxhMpLhL35XTvAqRmMcSTL7P3NdjUz2YuA",
  "key25": "5nRFVFk8Fu1YjvEwwk3RDqePMvcSeAm92HAeiNsAcXw93T11VGBbabf2FkCc3tgQrSTaM6WgevezEUkbqUnzUQgd",
  "key26": "2FEhCuBb18krVfMKWKUkPgwVz7fxuMigHYjtMLiVN1UkRH21jDhVtx1WyWGLAaXqjnLWiPYFeKb1RPVdEvwyEZte",
  "key27": "44A24UoHe58KYUNcYyYsZ3gXLcAhXv5ayZLjDLujYjyUDmKPJDq8iP55rdSJeprte5U3vf8njDWhoc2osY9BuCav",
  "key28": "26Ze3sPWppsaJdJ4jk58q252UhdBk2XTUm2RHLzJ5fWfQruar323vPBHEiz8SWMohxckhUnVdFbzWAP2Qn4xPnuX",
  "key29": "2KM7gFdd8WiBRBqEqqbjm5uftWK5MrqQQjhqK4ufZXZHcuzw6SyYz2nvgMHKn8gyXYh9fFTMcUDD5nUfuwSy9xYy",
  "key30": "RNTXCJFHYi5pcv2VrPDkHE6tA897Ft712kCP4tC4DiMGzPJTagUWLgUurXe6NW72rZSbGrrKZKAi6FbvPpKRyS2",
  "key31": "25n36FVjf5Pdu6AraJsyCEEZT3Zmdm9QzB1iuebzRusRxkVfc67pqn5hbbkCTziBJoiF7NR7Vk7uLiZJVNfTwiGy",
  "key32": "LuVaDq2AVDJhLqwXkAEapU8jQwskBH6mNEyXNCetSZSKvwipArkaRZZpLx3tcFqrmZdc8fh3FKDirH2V8354EUu",
  "key33": "5U52ai4QwUC2H4W1jkMzqF6ZNJxjwMPbEFYa6sjmUguiLvnhJ7mLqneCyH5xNV4DBURWnyRL6eEhZFxMZwTWSqAB",
  "key34": "wo5R2XjKrDuGds815AtoZuMH17EzGfvNz8qunoFjWCxZoc8pL3Ptijf24ksdLy9jB7MB9B5Tq7UkNkANhHrrsQE",
  "key35": "X4ym3iR7T861V5vXQHSzwpmBCDYehoN7tehHCDoDH9Bi1Pi8BJS2mxk2dDnRcSibSPyA6zJjDqecuPFUbP29Xhu",
  "key36": "2jDu2svz2mHc3R8fmfy3gKVx9MShLWSLbkuwhX9LbbXqjQ33yn5Pesak1vvNft2oSMVhgHZTMMhiMR71gMFtrv4b",
  "key37": "4tRVSKYwWGE1jq6gJxhM1kDhGH1UZLkzQA2xJJBJZ2ZeavF2cguxyWK7erky8HjWJ43yQaYDqB395d42zvdpSxWM",
  "key38": "4H1Lfo9HYKigkTC8mUWw1jp7H6wWHzXL9k8qvL4ifVagvdKmvuPqhP2WKXAdAEXLT9gEpbkVrcnz5JbbHv4TRUxs",
  "key39": "cwooZY9DaLaFPtzHLeMfAC7YcvYPvH6bxBxGpiQK5tFhEq3BJ59sPZTcTCFA8if7fG1YE7AzbV3vhVHJTiGWmNF",
  "key40": "3Py1xmkiwyi5gBSJr8qSWtZ6cKyXsPzb8Rb8adTkeKqGXJCPgD3WfDkJ4kXcp5TonwP244VBmQB8JbdGi9tQicp3",
  "key41": "55DvmJd5wgejxESMQUXBVDFzhrU5HcDWYz7WjF5Y4UQn5CQXzUhGrvsdh1DXsyhvgfp5GKqzNQB8sPPNbsiULAGx",
  "key42": "hmCoeLQvUToaUrEqWndikpS87c2crzZpibJh3H14JBfTiLMtuQvTyYZWL2tTrUSYip772hoUeBycEmgJLLiBLKv",
  "key43": "2CorBkeZrTkGnkf6MpREnojnRZ4Y2EkP9EjXtMNtyLjX9hp2SZ3CXKhSi5oGEbBXCGXMrGtqcEffTqsVziSoURcD",
  "key44": "gEfPcNZ5DGENBF3CmFSkG16wFedLz4PZkW42WzRocTLSwvZrHxdK1aSuNgjfuqq67zrdFpNc9FLLUiU6AJMkUsW",
  "key45": "34LTfVr3HDYK5SZM6aaBNitX6sqq2hHZhQhBvJHPsxPN3HtG5D6pcC3zrEK4oP83YooFbCNXBG42BHkMGJssUyYJ",
  "key46": "34dK3qjcaTCxMhKbmRyAnvz6J17r49Yd7zSNFf9iFbhy9g59kPyqmXiR2nAFGJXNwXHYfWFNBF7Ecexjcx31A2rd",
  "key47": "2DhkMMDx1gavnkXCdYoXsUeKKWYFrYC4vjLCSogH3kC9A3SvxWS75FXL7ySR8R2UwZvVo52rUSq8y7giJRX62p68",
  "key48": "5R98h7XJtJ2rsvvceW9ghhNGthLgfTcMB4JKNWYaRsb7KD1fLfKnonMxwUfDJcTUqLXArqSbWAw6FQvvQkJDVHxF"
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
