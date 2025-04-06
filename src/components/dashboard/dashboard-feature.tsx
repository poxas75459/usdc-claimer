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
    "3ZmiZw9dbSz1UEP2rwZtjiH1iaxaN87Dt6UhbVDzaHkxBA339FXhMoSzx5jJpsMW8XJ1UWpi26vvP1WxWd29sPhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e531z1Uq6PKVM7N7jEJtLq7MEeunyJoPS4hKY2LV39Zn2LKpBD31DVdgVs4yq7yEo7UwBNQQKABZ16KfVQaX5B4",
  "key1": "2kJZXfeCQWaUT1CwKAii6fdch6ywUVr38W3cS8ZSPxPC42rFdPUP1CoXEHib5rm7huPukMcg1D7nYN2PAo8ckgB4",
  "key2": "2JodAay3QgJVXXK7jJCJtUogKaDh5athkojCjViJLJVmG4mmpEvjJwcWs7HHngCsBnaZrkbryTmrw1BKW4YR1VSX",
  "key3": "jAQrix6d8fXX3wu4BXCEub2weDqr6fYxDJfEySaywDvn3BivNa7QR1tuNMVNVMssXw8VGXrMxn3j11R46xSqUQD",
  "key4": "5NjFBAYNi6LD7yiRQSZKEAMbkSq7vp6HU5BgKU7JW1pZaS8JR6LD9wNE9Q4ks9gogQFtgr2bBn7H4GmM32jARQUo",
  "key5": "nPaPDsCAuVUQg5CWMujoFBJhjzWjtwpii6PUBHvYL5eeD8rzWYtWqBK4cu8cGYxTMfrUjeTQd9FVgAjJi9oHdEu",
  "key6": "4bwELwQGbFu3m2Er5HbXd1EX2D1NgP7Uu8ZK5yMdxL6a7VWJrZvmhrQVtiYvgzYecsmx9uYSYVcbasBtAYiC34Aa",
  "key7": "2WkBMdNUYjJGC8cuCSijFbs4M2UYPyJfgYnDXr9fnZ5tbkmpXP7eYaG6vf3TJxLFAaBSha3voUHWhm28UgqepUoh",
  "key8": "B9PV3TW2GH1GZr3Vr8SdhAi8LBrZYED9dEW1JLsAqqXoqq7EjZf57EPgkHuXYV96RjKPbMzinQfguuwNyn65KH8",
  "key9": "2N6P45TVCkGy24YiErzGD8BczgXrULr5KfvSGjaECZksU92BUKfJqAkpiivrjmord3oxLQ6cAQBvGoDKAX94TwXS",
  "key10": "2wnBba95fZxvpfECUkDTykaWmcSTPALfaLeEoTLAoLts2NsbcNMD1Ytc3hamEq9ZhFJcY1basduNVunpgk1yYVJF",
  "key11": "2xSNp54GZAQr77KmvJCVooSMCWHEeroHtL4gre3yz652HBs9ouF69c2pfQ3yhk4bDc2DKT5X3QNMEqw89js7Sp6G",
  "key12": "3kxVLiEBoYhvDKUGXMdZ1nJkui6yrm9BqPEtDmCkr7CCsn3sShtFUnSpcM3bqhVXz6XPinW9KDsLTMS3mfNJhgyX",
  "key13": "4hyDtA6UBMQk6DYPvfKintAswpfJuXD2BYgLwbpYPxcZgUcxtsRe617jv2TC6c6uzXDCYMbQ8r9YAsxGxWSjsoYg",
  "key14": "3NmV9AoPmMkLZABXVRqwmgz2R8Fhsiaxf76kWSsiMHU1iz2MH54aBDYdeKTEeWKju17iN71t4ci3moe27Ry4VX5t",
  "key15": "5AKiVa8Kr8oBiEsPHTdmVuMZHb1ABuhrCepmZuZRucToPLtkUW7EERvA7Xjk2qvPk9HcameRRWfLpmZG17yHrEan",
  "key16": "44aLdaZGMpj7KpLbk8oRV7pg4KkC5xWQ91R1zhRTMKSVQnqjwMfwTCnYJkQrxkk1JKCeEt71fuXacJ9jsx6xXx5F",
  "key17": "4GNNCWpd3K9gspKZGRT82nABaQZu3qVkDxgVsTGXrwfVnwd3uNoDyNYmUBmy1c8ncu6T5j48VwKrwYq5oN23R6ss",
  "key18": "DZwJH2TMwzJG3s1xfbznaHs6tknFLbUuqv4UeKurjZt5rERHDG6GkBzj9fs5AZuihVBovMkE5tF7rXkW2vvStk9",
  "key19": "5eoSBDCEdHdzpAcV5TiXdCG5Xe3jSm8Qku4yfYzJ9aQchmTC6bnPmy8WBjYP77pF7iwiUFBbxUZLu2fLvKhLofi2",
  "key20": "3RBmvahszthCawBuY2UXXkev51cLtCeiHnxFkRn48PAc6fG6L3Vqs7avqLgGYKmSGqjagR3a8hc166tswwRbzbLe",
  "key21": "3zgAT9oEToUnvczqdfucyB7yzExk3E5BoEEWTURRVAtuMYBKSQWvJbUscgEJ2oYwoESzf3ys1UNfBSYTd56AvJ4J",
  "key22": "2WVYo6gvgxaxQmptf94PoAJby2tT8qgYbtGpkvZBCJnSFKF47NcotwkbgJcLhucsN3WehrY1ckFZmBXVTjYwoQYc",
  "key23": "4njWNN7HJkTP5EG8UDUqiw6GW9X942FgZT24ejMS1DoikJ6nbQDmn72M1bNMDcRH4jfCYoZNZe8ZLfB5hwk8fSPu",
  "key24": "3sGFquv3gdK23PM92siom1V4gBTBd2mr9yELAKLrEKVffiGv6LYhHXuVXUD2TFxq2b4aFDdt2ktRDUiXMwY5GWhm",
  "key25": "Cx9b2xMVHX9YyhF94PkRAjMb3CsxMUMo72QYiBf93v3v5da6t8UtjV6cx6th8RRULRFrNUrNtUQyjEp9oFvcCKd",
  "key26": "3zF9vUSoRToQYufrwHkggukRDkdKxmZzm4zsoxCHKURmakHWsXi2qaeXYXP8azVG2rU3hgXkmFoF4BMtXDjoLqvo",
  "key27": "2e9jpnNmYVaZnw5oaYCArAsTeGK9VtMt43d6Gs3YosLxW2zDzDpRJCxhcubGno7E8H25prVUxNxitmFdCoCoa6P8",
  "key28": "2A9ys71GuAPEu6TdzMxd784X467JSHdeHGvhYxUAB7Myk6gYhofHKUVxKConTQ9x684rawQqPm2Fsjgk379QmW5n",
  "key29": "5NizAjWhvYuiGU4ieNyhwWuzA4gnv24DoTgVqudJ5LMkrdwYMAVjyWYVQMSQsYnLUie7uJ888Z1adhF3iDk5PmUu",
  "key30": "5TLdC561NvCwUEkbS4cNUXNvkEa9DkEsW2cbz5TXBWEoECSCmkdqFebo2i189eJu6jBWabNKLC58CarQmzFRE7iS",
  "key31": "26Wu6gbvQivbYvYbw1EbSEf4HJkYA4bbRKH7mVg2Y8ASJqTkrBWB2ToZAJReuQvxGykhU6W96eWz1av3qyzHNYD7",
  "key32": "5YFqrZPjCJMaDiTH4pSBv93b8iAj6NkD1FDxZm5ttC6CEmRbNypPRTwuRSvo6SqnjJCb11B6mWN3kWgufhJdXjM4",
  "key33": "eUnQAWH8u4vBcrz6MWW6oJXGdRh4W13Ydz3kfthBQVAjtsP89t7CZfR4zANy3XBmFfGF9xcxEgvfrLBKwm32m7b",
  "key34": "4BaDYBf7LtngWpw7X7VPN1t7sSFVRpp2rrBu3u3ix57Tx2qdUF55SZJDm2e2heUwNEzKWsrDam3zH883x8Q6UYSb",
  "key35": "3wP5cr2eUwykmNkww8WRwZhyTJcKHgrDNZ5riDnQLjQp3eRd66TDuo69iRJPJWcNUVe3jgYVsqbbdTEcMVmaaR4U",
  "key36": "6jS9g5c4UfEEJTZBmXZB568TchcotUJG4semjbPD6NsHgbCiUk5ssCLbdkAySedHuu74mqBgEK7HtXrY2eDDhPa",
  "key37": "44rpUwagGBLE1TPmGhw95nMv2NUTmdHjVbLCwNPJhLmdGFnGdyP4YU2poyfvP1QXY49EWcYFTLUa3sLvodFW29zy",
  "key38": "4VbpgKtzDvNy58euAPFeChoft26jPvHF9SKohi9oovdPLgvws5HacwobmUVNjxs7VAsv9BK6brj3YwnnU8xTJxrG",
  "key39": "41gAgBB8SwM1LPz7cNR7AtmcJ4WuqSiWfwf23PpJYKi694fiEhY23pwnPQuezhgByjxBDghWt5aqKBDGbyiPzCqD",
  "key40": "AtChtjbeULnM4XmLYjFrPYeMP1mWxH2CRv329S9cNmbAWCbAgcekD99KaZ1uNa8tQQdJ4G2pxycmshFMKdEi9RK",
  "key41": "23M9r1r1uWAtCBgYWEp5f1suTvwcm9ydtyXdbPgk6dpd2oU1Rcc2Lstnh8eUBo7CqCFNPrjMo9cfJvtvuVh5YmoY",
  "key42": "2yppsvYSLEk6t13vfHZGaXwpZUh4YpNM4gL5mUiFEUGf3HTKXprD9G9nY5BVzWtHFzzwEHdqFZ6LWAFeqa8cmY3h",
  "key43": "5Vr8MhLnSVXiFFY8YVShnGyEG3SJiXbveTyxKa7EXEstQ9ZARTpAXKePyKwkkYEgFnfSG4QLb4vK9C7acpsLevyr",
  "key44": "3ibC84Nf9UhXJ17Mntm5MUCUCiyDmPkiwhmSmK3RDGAKTcmbnATUeuG9SZPvdQ2PrwukYLX31cHQB7pEznVncLxs",
  "key45": "95yVZsbLrYyY1Co3M2uvoJ4h2tE5AZRtLRdHYgQpTwktzV1Y1PEWMJpNoZ36gJwLrDcv9VtMoffrYFdeDkBaiNd",
  "key46": "4UjduikKwGbYnnH9RmegcTNFJqJciGQtBo36aCoJ72rJDjR16VqvUSZ7wUuBz8TR7EPtXidWpnnVkA8gr6RVEZ4Y",
  "key47": "2KuxF4kL9BJJ5Df4Xyo7EEvCHa63exYyjqhgNdpmhkNEy53xizEQi8GimPLcyh7mdK3LpXzc474LT9HyCmobEppN"
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
