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
    "36vnaBf1U46XrWBCBASMfnsNrnDwVrtSYWj5XnjHmk9NTR83Drza4QTyDXwYABKd2cGs3ksz2poVU6W5ZDzHaMsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yqb9Q7Cmfnkw2AnSY7V6J3pwtyJG5gcFvoAqpdJM3C8sjHWPRvPy9gGgyTS1wAcRfwsPzysraaLEwwM6GBWmTmR",
  "key1": "531zbKSw5Xpq37of4di27SqzYRM1TbFRSAco21Z9AEKymDEqVyLxzeD9Km3n4XRFVQEXZzvmCknmFYxDcymSiEdF",
  "key2": "4677rFFpVYwGzkUWY2XrRzKPVjzqKYPN1Kb7DCGFKUa8AbsSoqUhypSxVbkX2WCpm6okqbPwGnun4DQWLY5p2qDp",
  "key3": "5beM4wFLvdNEpUpSvqbLiSHemeo3kMXoRdkTysizsTCBTR6tPux6ZKq3Yk9M71NG3pcT1x1QD5fsHGxyu7s1PT6e",
  "key4": "5j1xTzhm2Uy2VzoMXVuAC47nKBmmv8ZFKX1y3G2tWB7rm7xBGRubqLNppekzQeizc8XAexjjV12cFMzLPuxHwzRf",
  "key5": "9WdsEsgwYY6y7RWZYfkbUmxjBL3dFbJCAEGZL16XfgMNg1iZA8rURzLmhsVTpUgvFKYu3AXnz54VcD7Fy58zBBP",
  "key6": "3MDPbAiQwPqpzQhy63doChb8jpxrvqaNDdBTKbk9wYFcFQoFPYq2dMxuJJCQoczWbh2133V51ub1e8ttexgZAqmk",
  "key7": "5ZHt4WhhokT8N54NZupXWyhNxxV9ZmytwN5hJp65RwjanJgfUz2ESvv5EXNytie7XMc3DmKFzn2q43hMPtjchm6a",
  "key8": "65gBHAQMtJsAu6wxwxQWZnNiQZHq81zMisjth7kAgcfxP4TwMvjSykdh4iD64r2uJYrybamRngQ7uy1FY6drb3fm",
  "key9": "3U1kzZwh3Hrssq7jWu1kiPSJNJRTmkM2dBuKaS1nHXXVkQVA7ATqn7s5PcabYrPXT9S8g1kqDQZqo1HswBHKCsZi",
  "key10": "vHHAM3eitFrPVcnmCeyH7rfU3kAoA5nVXvSqArnFaSuYCWkz8XcadAsi2MtmcguPLv6GXRwxUos4k1tpxdDAnpW",
  "key11": "4E6V7sZ5UgULjNteYHv3T8dvC3MfLjJNxfhnQCSL7XQ6AwxvW53X1jg8Eavd2R85Pwh5FKLbkfoAdJAHKzDWWqqG",
  "key12": "5JoURPkbgbzaGnCZznQYtwyyqHof7SkPdgcH5e1dmdiaV6A2LMttDvj2tVA18oytAWXNU57v7wsrqjn6Tq9evrKo",
  "key13": "5HYPspVV7aJqZgLLn5ncJsSdyEXcrHz7tZDJvSSY1TK6Ch8JtiHpCKzikrJWMxZeRMzqrTEbDd1KbZsS2svD8RTA",
  "key14": "2UqjE5bro7NjxRAW9um2JA3q6tvgEmrthvD216h21CmU7PnyTHSs3BZUPw8Rduac4eFZbffMo48zDy3Wd2tEuxDC",
  "key15": "2MDYPAG9otDPMyPNfyosijRoJutTxs2Rc77hwx6e2fEjM7ejT6Q9fM2x9tsHLGP5vfEUmiThiN896pBW53uz92fc",
  "key16": "3ddEXKVjrYHTj3TUkXjoHJWCLzYDux9YXBtAje4oQkSy7mPTUnpAYXfMw61FWbJQSbGrf5Jai3hq1jcEyYwXmLxi",
  "key17": "hxW6Dj64BJpsxjxQjxcvEXXrD9zYMgKSURAoXNtzBPTEm4BNd5UrgQXS715LvL6YwKnUPbajXLA1FcTrfM8UMmz",
  "key18": "44f87TPyv8SLYzDJcDD1Jv85VEuX844uCGHskvZGUaTKyspvpHdE7jti3KKYyBKayM1sZBZT3ZEa96a6mBCze3Mc",
  "key19": "4i5cfFiZDFmhRWn5vYu6rSdxySxqrf81JLuiW2eaWzbNMEPKfRAVbgzRWwAiFjSnAXfue891haLeEMa1qqrpGxSb",
  "key20": "2scJVZefCYk27ofs9EVudEYLUCvSGmNfpdwnQVLoFrnfiP6y5j3suyVvJbji2yBgZdrUWvwVMbE3w8nQKFtqKRan",
  "key21": "Gkmi5oZg3HekSoogh9Ygmo2ZSJTRgn2c4f4B9nJyvbg2XHyr1z6isxz8JTKk3QxTs2zZT3XJyQLw2ZWwoEDZDrk",
  "key22": "319suvTv3om4VRuebBF5Dep8UtsVm2LaSGf9DBqp7PQ1d6PyLLMJnh5gNYeHhAWSTJs1m3GiuN5jXU36KBdCBffT",
  "key23": "F5QmEYWmwc8HJXP2Uo9uBQegyH9ycpFoPiah5tzeQ4fZ7WXQ4HpPjp2XXNyN39S9C3dDrtLoXKnmgkwzT3PFdpc",
  "key24": "3empk6XADWZYdri23AeRYDc5qTKwJvUo2z5iy7N86LH81uydMRF6aNP83BDg9LyxWdckrENXdX9pzH1n1RdmaTGK",
  "key25": "PCF9LnhfQLTB4usrUns4gUZJigvyk3gZtDyXjwSsapLVY9tSyeNFWug1WowLnsc3LXxSoNUVB9Er7f4Fc9wFbRj",
  "key26": "23v8ZaKwQjgnat71BZC7kv5hYhcTVmp8Xc56ooYskPe5ziJrgzd6yiBeMsXSgy3xiSiZAL4X86tVE1wjkpkSgL9i",
  "key27": "9ZMgESyFq8FBfVP96kVzFpvbcPBkQEMVfjbnFpGwLkR8Cvh4wyTZKD2zR6trZ2XqwsJMZhYUTR1cg9dT4LHk6qB",
  "key28": "47GzHZSHPosKmRG5ko1nHa5VktCPhy4izq7wkJA6FuikZvV7pEeoTRxybEHUwr7Z1Dmw4DZ8Nz6LbyMfpoH3q14V",
  "key29": "4JJQDqFRavDCvkVWa6QbfADGYpqtUjU7ajmvLcuaFPSXbD2uExtCGT3xFkHf73T4BRquHWNiCwpuMJn5Dw8Jw2c3",
  "key30": "2hyrdkvb6VvfREW88yp6vdkfEPLmra7oKxY1JnsqXtFNhJmgfGhnHsycG9VX7vWQtyPmBtSUp1x6qQYhdhXYsJhc",
  "key31": "29B7XYohLcqDLBt4kkb6fV1pBxbxRLtH6qwiscta18yPqGSpv2H6YQiXWqwFKp16UCvksraLK6x3LLUtS4g367We",
  "key32": "58sjL7JKfRD1kZo2Lam5wAzctNApVYwSeRZk3RoeC5nRmvw54iZWu99eHqvrQS4dQ1NGbxZ6XpfyyjPX7SNRC6nJ",
  "key33": "5Nt7opx773tDe5CvLqrEDHEqL6fmgykkxirLQ5mChjMyuAYXeSywZDKUhwxZkWQpoxzCcgvqLrYwjkFGxeQ4xooY",
  "key34": "PL66gktaf7bHWX6b3voTSbM6fYn8eJGYBUDrWJDagqv9DmYyKXVkw93rcPDSoj4ph15tJEdqide9uuU17y5z1Cj",
  "key35": "4VChyqdKkv6o1nGvnvDRMqjN8c1MUVAA6Bm98R4jQyHtGotPuBs4YK59XkSWR3Yvv96g2p2qDVv5Jw3eZxCPuiSg",
  "key36": "53HLMA3MJmrCSPK3B89jHQsapKhgw6jNe2vyqz3DAqZG5ejFwAR9BTPuAjfgLgQsQEafqPyQaezg4RESzBPUPUoY",
  "key37": "2Vsvaw9piEr26nSxCHJmSKLb1GwcMPHwghMyEFGebLJUJfjMAnMS78kiCedYrKQGRGe1uvzndaSpCWDYB7oe9KUy",
  "key38": "2bkuDWVrv7Cd4vEkAJw5qJhf5yFgt9nWBdsw9cTLKx7o1sErqndYWeWGqNCX46rAAuYwyuhk2DcAeZ9qr8MnADnh",
  "key39": "3rMDMibcTgLxNSZZ1j7smPEF5QCWojVYUc52ZV7wDMivAWj8U2aNzz7DfRMVchWcKbYJY7B5sniMrwnXmDRAsRqt",
  "key40": "3rzcZTyTt6G5LEJERUFmWfgmW1JmqmpYE1Y2mUkm6EQBnqnetghCvYRkgYj7Wp33P9gH9QPU8E7cBBuXVkwLMjuQ",
  "key41": "21vDw4buPUrnLisJfPFezMT1QC52JDLkjU6Ji3KEiNCUupS5Ue21g841iJHxm5yyH6woyjZMFpFqdGwLAPiWXpVj",
  "key42": "4RhVRuNMK2YPmZe89rY3j5LzQwgqzYiDyMMdTbVqyGqx5T3QG6soJEzKdi98NR5hFmHmCD2kfK22PEuhqnRJSUo6",
  "key43": "xQ5Pq6RiVM2D278kxpWf58PMZXsqAHD7gFD2KCpJkdryroBag5UoaNni32U3ayUKWPKki6ST4kHP3jgfEQ9TgRS",
  "key44": "47mffTKHf9GpUEzMX86w3K2b7u1XXsLgpSHA312b91P1jLYsBR7NretyWtZswGya6GnyFA8jk9vmELQp4o9jQKK",
  "key45": "5Q8VPyXU7nrNg8KRmpctTvcft1bXp2KC6SA3MwHVnSCY5CKpidJFmsHd6y4jtLkNvLpGKDFJzPAdj9oo66Y3Reo2"
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
