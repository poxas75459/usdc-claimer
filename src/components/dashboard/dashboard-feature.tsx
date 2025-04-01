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
    "JNt3QxFrqjvzXPb1hDbFYLySjsupon37NRTh6HMpnjkNvjPA7K4NPJiHj7qDGY1pgm3WrfqZuauVPVACDonDD7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T6j6SqkszV9eFtLpbgGADgfQxmESQGWoaZSQdampU27ZrCEbed8pRu34vM2kXfKfyNVScX2mURnAsmseZ6ok5KX",
  "key1": "43oDK2YY8cCzzeZN7Rdq3BUoF5HQqR2UWUTzF9krnNuzt2bFkg2gNgCooRbinzPV5WnFjr7TGnRaGvc2QmxCGrfg",
  "key2": "4AcnobcbZnHT2ErXsikpZkMDj4iPCH6GYB6KNL8T4QN7RBJXEff6gzjnsrBmUn3YVtoeVfWvep77MKAR4FjYGs8F",
  "key3": "3MqMHrcqDMapoU77baSLj13M5R1czBaEuR3sNcmvJFXbC8qYez5nFTCrE8QhiVbagJyTtj1ivb6ZA3pAfbp3Vm53",
  "key4": "2aeCESLfNPzF4WZnBfL7xgsWjxpBaDE24YhDqCC3ZtPuZPLQegKzRa2irZChCAhUkmKnu6UV5aLBu32ztqWBEA2Y",
  "key5": "4ReQtq17ZuC8SWEbCn7wyEXHz4gDR85BwJY2SKygntatAJSCK8Lkghn1eiinK9UGnyATZoZyiTRDXKdWiaFnZZw",
  "key6": "4bKFxadKTZjGqDxJ9gd1UPrcHzyanRDjuyjkcAt7Dz1wWo1jzaZCngfhx1av7qCsVK4W7y7FBCt11aQraBauFt8L",
  "key7": "49vf3zszgm2vjDYb3QHi24Sw7QgCFiXMpJe7X4b6jd24d2FTb6XxZFMG1rDLxyXs1uvHMsnRvbdt2rNMga4oghdU",
  "key8": "5Y3TwS79hYcmkGWbaj8ARoRuoEsmRb6KFexupRejGrPV6Zk6YSxqmrvqxaw4xUFYvzJtHVxqvPBzbdMXkDiP3kFQ",
  "key9": "saj36ezH3CPAq58Q2rjRjT8KWnzsYd1S1W7spciAq8ecZz1xVdJVZN2Npwqib6S8wDgR1VajvPMpewrhvAcLpEf",
  "key10": "5C4whqvY2ToXfKHXNzoDHu3iJ3ytRxHqX6EWtrirvm6Eqkccexf8cpVP2d3UCFdYJFxjwFu8D8A1gixkvSyc8s1U",
  "key11": "4jPmKS8zqRjCPSp2mxmyrQDLFvx6K4NBQrBWe8M7icmcRfm4zcmrAaC5EqnAoJP4qp7Lz1WbFSrgRyxLmY7GtjXc",
  "key12": "265PhPxXTXG4Vfm5NoPXLkq34W6zpLLLJKgcL9UdSDAArrRaq7jPm5uuE4RoRU7QZWViHfn9RFkq4mPBF8ZSjcYJ",
  "key13": "wdTFWpBZv6WcJGCucy2F4MKucPGctW68LtuwyUd7TZua7Qce7KN2LeJV1A7HjHDPeQ89Hao9LvZjrietV215F9D",
  "key14": "3PYnzkkSY4RTM6TLDCtYxQq86MGbmMuu1Ze28nMok2R1yZkgzPS9GPxgV67veXCNJgPUejkdJkVoNcFW1KmMk9TC",
  "key15": "4T8RvcHrytMovnNyV7LkebkYKaMpXa9Kudr9fWgRNL5rW6XbBoF1Dn6b8tpqTmUF4tJ8NcoJXaJdMtS774tRSZer",
  "key16": "2zooCVbfTatVSSUvyodZRs1h4KfhRnzegZTNc6DkSyihnJ25oTe5UHGRr9hKocyiAjHVevWiQZMzfokB5u9kjvdK",
  "key17": "3XWit1EGgzACBaD2r7P1LyD1UwYwZQChpdmAdt1DE2jV5DWY46mtMaadLgQy2Dk3wnVLdToQceAHUUqixQfQThf1",
  "key18": "3mvDvw9vFSoASYf1Wc6nR7heZkjdEG2T912b7UGTin27pN31JUA43b2Dx86b2BMhV47GhmRuFDBfNwG7fBnJLhzm",
  "key19": "5tetmmBzXW46cmSncE6T3BfNYWV6x4GwEdrdGzqiihCKSRxiZCbr8EjdMTuB3ikp7uv5soT3t6jMiZfuUcGRtskK",
  "key20": "4CZz7J1LYdvTvWKXm8seceNmVTGgQY71pcsh7mmTsyZjBVuxbY671kc7sPbygQJgQW5pXgEShtKvGcAdYx2YBrsn",
  "key21": "qNiEr6o5mFc5s94oH5qu29wLbR5PXMQx6EQGQTxvec2QSU5JSt4Sjm3GpbMbA6CFJdF5yXAfPw8XsGbcYmUZhha",
  "key22": "3U3goRqZo5zwizzxexszDSTkLrq2fpiRBZYwdkRmHYuAtJdStdVB3YjdAFjkeyo7JGCfKrwYxgUfbeuMJ5b2EJic",
  "key23": "5vJecCfD7YD98Xe7cBhDFhwXb1uoXafi4uEStMysBNB3beCvbGY33AtT8fFvFR9yFp4u8G8t11c2ctKh5Usii5f9",
  "key24": "2i39iNG5ExYBrHuvaiz83sBp7efaAxAdZgNLiwx5QnnaXBix8pH396nKdrj1GR59pSF7a3jo3eparBgPsDwtKiYM",
  "key25": "3JJ5uDhasowr4ySP84U5coaMrMDbB55SSy8LB8DJTXCgvax9asJam8Q1R2zRPB23jwS7U6r4T3K1ctVBkD8RaNcy",
  "key26": "42B6gktLQQcN1oobqsE5anZtPcx2ZEjLk2mpRxjae3Lec5oUaC7yMsYqqrXD7uVUxVdiDdZ9CvbZZB1qUtGPuGiv",
  "key27": "5zjmdB46AJEYwTvxCc2oAGRFpaGHvtFNCPigez5JVfFbigU35M2Ykuz2qEG8EH8Zwk7taPLBAnFcfVnoWXETwhfz",
  "key28": "67TswzQQ7HPMSXnTYXE1nrptT5qNNnFJrf2jZnbK5haoVTZSAUUHkQPpp1vF83MnbtcFvkMbcdYZr9dghvEC9Usd",
  "key29": "2rBWx4MdjSBskvquzCVypqXM7K43V4BsodAmxHKEdqA1xRMHXrkN8QkQYh5wRk5DFptGVFe8GTD2FBkUrLfgu8o3",
  "key30": "3fpwPGDAoRm5ZsKy7Mt3XDKAjkxVVHoPzV8KsHa1C5SAk7eDcNybadAUqdxqHWKyB1Rmd2q96dWSiSBRufdyqpP5",
  "key31": "2KhGT5aNRGWVXD2UAFpqJvaGSvpcW6dVnPcTRERgLw75BoNg3xaZr2iP1ZnYHgyaJ2YeGxMNCfXY3NAsThEbLsXc",
  "key32": "43ufh7qUxp7YqHkVZisoWjimzPqhVvLFCHD8gDw987mBVQCM9832XX2Fa5SBe49CtjnLpnFMMrERj7ADg5aKhyCs",
  "key33": "2qk56NkVAmMSfgMhTQCKYfpDsVEye8FRUo8U2MfFqYPsDhH6nLZC8DZugCpGBG8UxA1bvdqKUNJSUXBnxkjwSDox",
  "key34": "4aWhsZQjGaAyMtGtYXLHc9CDUTk8ZMa9rdqEz8GSKej4LkWG4z2sm7qJNCDw5BnzhB6qcyG2Zkfig4vmLbqZArPs",
  "key35": "4EKDCt8MBf5kfzEdpJQYCEmLWXGQ7vQwWnxisAqPCF4ebqBypugPzMZRg79dB5sYcif1aoBgzjfGCi2MwBE2jKhT",
  "key36": "3JDPYkeuM7Y6LTH4KnPUWckNS1xnCVJL3piiehZHYCNMCbNWonjTFwzfE6xR8gd5KghGqXBjxXVpRf4eWj923aQJ",
  "key37": "3H9erjX1eRpHcY8PtkCvFYpmBRvqL84fQCgnFn5hmMTpoRhS7yD5rtYTapePaZW43x66e11L6nCA7enUHAjDZ7Kz",
  "key38": "2DXdyb2FwmfxWvKxt1FYqrxf4eKuxNEWoNpt4sDg6wvuwYzzssUbZ1CodKCsJHBd8XeT9vNrQ2qsnqXvQW14Tut7",
  "key39": "DnRDWH8w4rvFyKKRa4B7dACEskhy3ibjKan9Bh3vFRHWRpYbr9WWfZrAFKeFn42JpkRs3pgrStBgVrGAJxsawn2",
  "key40": "hLFbdbpNrSUiqqgZTppTnxHvGsSeVCcG3E6qrCWzDiybnPq5vRxFxkpnoxdKppwrj4G54JGZTT4zR12kCEBmtWc",
  "key41": "2xuKk33qMs5JKKtR7DZSM8EBK5jVGuJTY4P53qTj3hap6Ty4R4NECU6VXvkMof6MHRGVNAA1LwGAUZG8VC8qDFYi",
  "key42": "3gP9YnT5LXgagTgXNki9DPtF5S7TzgTXj8qQMA5y2qHTeyNheqkH9HbxuuigN1MAywPF95BNyzM7S4nQVX7YqJfs",
  "key43": "2JVirCg9QAiRjn2ccTLmUh9U4g4nhS2BNyL6Y9KqbcBP3S32V4PMh1Vnk5HB8QjLYavxjq6Yy2y6Artx3dAb2vS1",
  "key44": "2YucZqTiN69q4GUGsyjZHtk6Zzxk516Mpf8ZA8ZkzKttxP7gB3Sebb66HdYR3gjGwN7pVy36ZXcdPLgwD6xKfNh3",
  "key45": "4yBbpRnVhh7ETnRmC69wcUevRtXyR7Yr4MT4QD6REWhKPdkwWrsbYB5nwgcZDYHMfunhNBWQ9Sk9aKHt3unUiTtm",
  "key46": "4yTz42yGnBbwra75BqezAdgxx3MSpeXuWGgjAE2TcFE2wYiWDWTkMWvtMtQdJMaCybS7Rmf46fQMyqYCLjBQXakz",
  "key47": "5t6nU4mVMjRMZd7TTjpDF3JHYghm27Rc2uJQjc86pTzY6HYqdjyoUYYWMkJDi1tPRXMBc3bB9JQnddh76psUUwTD"
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
