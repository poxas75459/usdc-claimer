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
    "2cga3GN6q55YYAG1LTwt7UmDLPKWd6VrvJutvP4qBwfeRJLEcE6Cgez1qz3G81zB35gsAZr6yfqTDS97YEw79QJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dEsR8ynM6zyLqsDTZjQE9ECSJtFtF6cHLbjFkGERpBKzX4sg1hm93N3bvtGsGmcJts8B3aGmxBLHxA8mwQwbHn2",
  "key1": "dRpKHXxRUtkvWJRuNZLahmC4P3pe6LimgmdogGVVSz7SPrcWJ5uEwVMY4RziuMbRECfbBGTkEBoeYtTuXwd7pPB",
  "key2": "uw5k2jWFPs5Qrs8gERAuN4Y9awt1bH2Aux6sG9dqYeLpVdLAoPoyD5MQG2qijxzFVUnHS6W9hPGUzYwjwTtwTjQ",
  "key3": "3ucrA9e9gax6kZpvqvg1jmgat6pVuUjJ55noMc5rXTcH5zM65HNk41XL72R4LTBqL8GJP4YVwjmeo1Nab9mWwjqz",
  "key4": "nMAb84gK3h3HSRcN86Yz1kJTWY8k8GP3VrYRY4c4DnnoAoZtNXWvsuqCLyBZZsVk3VP74FcnxHLEv7gVteS8Jgg",
  "key5": "4dRmxB59yaSnRzeEEHKvGjtZEDAcPEZ64594CSvXiSEx1sohvRLrWdSrtaxNP79q3QWihteNSPLFvrfotoma49bp",
  "key6": "2fVBaNF3jDDBTZq1PuEUpK1tELuYP2LyZfgjH4op6BsasMyxk7yf4oBgxhZGH4uKKBwYszmrKJKdMi96B7AJDkVb",
  "key7": "2zKrirhn7oKw2AYPhjQtCKhZS5BGNeN3JHS9BUbWfViqPDkWoeEvU7s5NQrqrsbdunr1zhMM7VJoJiApH4Tfw2yd",
  "key8": "3AVg5JhiS9vhZnYF7ST99N19defusitHF1F7BsSUfwcseyP9rEkuf7hh5gRuhmkKL7K2KozWrew8h5S5fGnCDiP",
  "key9": "2vjrW1FhwMvAQNBUZzvPkSZpR6MaT79iReLQMcQ1cv6EJKBRv83HCHL3vj3xK8J2s91dNgDjm2CKHo5G5ff53xKv",
  "key10": "4DvffB6ieknfYA5mPovhhoPDX8525ew5fp4B7HFL8iWeaLKCLKY4sBbKFDJ6xhk82uF8A1KkypempT5yvuvjjw4V",
  "key11": "36dGCwbQ5r4jzLssJfYgiE83QQ3vNtJ9YLtfCCADZ8ELrvCRjM5k6LbYug8CXzen4mtu2ZwJ7VLqdN7YFQN6yc9G",
  "key12": "378Xn9kL45tNeyTEh6VmURVZsjWMSkpEz9Yg7CBFgKmKiHdvCBNE8FNZu8UTghvyp9hScYJg4dASqWG639HjzGMp",
  "key13": "2DbfV1Y5A5DT1Q7pgnHtCRxb9wfyAwBAbM7iopdQj9aWHHqqpo6hZtLJZybUbftWoM9ucvvAS3iNz185WP8BACFt",
  "key14": "2Xf4HC4sibyWBmmEg3uE9cgtN2sLqjeRmfKrKARnoTv39jihftEKbjoukCpf1nvz8mcWweR3GUWLt1ABcr3M16Hp",
  "key15": "2deypgGPgWmwa8tJKQwPAzLCJmDJnnYCdAqbnwWYtWSQYkKjLcHWed3zaJUxZK52jwYFGwjmx7m1Eu3JsaCL5PVC",
  "key16": "5dsyHW9ewcmrAGskS69njBwEkBjrSLbTEUGZDSGji8yNog88uvXHh298rd2WHNz4wHyHdfLfKVTKcZ4XPgM4LdkM",
  "key17": "3kYRPCD9qowcmN9v5U9der1fbAY97hEWeqSR2trswD3uGsV35N8vm1Gf1wCnMBRzHb6jbW6KYiYSmMF25am98Ag",
  "key18": "4s2ELRgQREEpWtMMi7jgtms36XP5cfPQVN9xv2CdfLzyhKQyxE4Xr433WtVjg7fw28ZFtgwMEDTnj1cSNAJmwyAX",
  "key19": "3Rnox2GhtxiDUdvjJsTAEn5afpY6RBSGCUaW7w5KQx9YEXCei7vJMCFSrKVB5PSbnKkrA97MgLueZJzzQJBFLMaG",
  "key20": "29QpPt3oCPmHH8dgqToY8zWwrZQhsBUHBVYkhxFMhcwhf9DLVDnVxP7FFhVAqiXW5txoCHgE9HTypsVBX2fCuTj1",
  "key21": "46wopUpHWf5SxquxQZYHCmDfnAkN6WxhFup2UkGx8VBv6aSqW975NYYYvvKqvLy2zrtBt8FG3AE8xmQYeA6Cv45b",
  "key22": "2NjmBSinR1vs4ethNNfk4BR5hZqNAKqMNo7JNkC17rmS3aw3DkMRNBafTcYAvU91FDE2NLZ28KNoex1JbEUS8ajc",
  "key23": "5MU3BTAsatkohRxsyLR3W5m6HQDR8nAECmNmh4nwVYaNX7m9EzjujWnqFnucqMppTGZsVFzWxzkozwcUf8tomeGj",
  "key24": "2qwVVX75DvRPop69HSGjA9wfp4s5aboZVjjnryE3yK1HddJX8Jz5rnbseZmPSfWTwEsbaavNZJ6URoZ8HXEQpaNK",
  "key25": "3hY5oqzgD7opsoLoSw2bVJAwxpzqtyQWg61KXpo6LFTS5AqE8VrwBmZ3w6ApuD3NdA4AkMjLGXabDt6mY372aDLp",
  "key26": "3PqXu4VDxnQuYZzpa1jiUwo3jA6SunFqQUERcopdrJbTkaA6cn5ws3nUkYn1ip2FZ9ii4Uj15SNKAQPBRqFptfR8",
  "key27": "2TxRgBGq4PN2Mzsv7ZFbjcqoK9VccDwqR4Mntwp4TvjjSnTPqq9MzZR1Uyx2eqPtwTWFfQAQ4bnHEKBRhfZLrd34",
  "key28": "5w9QGdnivXhWxHox8PXKYabYXStGsyT3byz3ZA3iWa9sun55V9aSj5Shmv6DZzPxCWrQCkRMfEbwt9ssBJNu2xKh",
  "key29": "1VpNfkkb948CczKNpThCRdThYW7DhRru1vgqMsnWvQLS3RkNXNDmVqqYL9zaU7JXdfcqVD5b5YcqZWyK4vrmT95",
  "key30": "4PCXoi8UvjQ2PsEECqCZ2jgApTzu4zVgtomjgbmdRPfDvZDcF8MbsqzfdPAyUsgGJXGQbLcPSPGAjQyzLTcMSQFc",
  "key31": "5PVjPodk7NDxDWbxFBRU8wHXbfQ5q2cqYQ7Bjp8cBgMKhH4bSV5udDY5q9RtbbDQ53Uj66CQ184gNCJRjfb6V5ua",
  "key32": "JVY5NquxYG1daMi5e1asYZW1HxBEd1bgPoXRtKHN7uR55hKHGwpkht6GoEF9wGk9vUVen1LjyGUp5JPkwcV8akc",
  "key33": "3pk6Vhx2Q7VUusXacU1uV6SADkJmvFnF1CoW11bGE3xi8MPwcJc587URjwHKgmQ4N5ric1n4Bzhn5edUMysLt9sA",
  "key34": "4XYBBVNR24pbwi4AZ1UVLGUkg7wBuzrB2cPjFq49RdEwe22RHMRLYNsyFtgL1MD4eBTC3XC6cZ9zRX2UVMietrn2",
  "key35": "2bDmasC8LhN36JskgHcWbHLF5p5at6x9YBG2CX9RQqkyTx84JtvZSrkF29Ccep9Gag3MUSVRN6d8hvuhydzytRcY",
  "key36": "4HVUup9FF24X8V1xHHTpARAXe5wDZKzuT4MMsUdfBTheefPwGm1mnG3ZuoRHCx3mrpGgt3QnFmfFrPboSrHn6TBs",
  "key37": "5uG6ZtqHR72TCdZxo9FqVJozwvgM4sSEAKVV8p1QASA7aVwsaCBPa5T5XxYcErr3G7N9qKSJu3F6F2yEPGESXTXG",
  "key38": "4GvV9FjojSJtc8CxUDt853vmFtaDqK9EAYKZdMvvKMWVUtRx9B5XASVs5DWde1Qda1Bjme3uVxeEoQRWwkMi9sGk",
  "key39": "6MZBFWo4LAeKiBqQPXE6Zv4JKULJs5xZMrEGZTcdWvemBLbajYUY5TixP4Xt1Y1TnTePvcjdDgf4wNhBzHSBAXX",
  "key40": "41JNL9t3GohnNUM29m9boheVc11jmGkEC45GV1LiAH46HzSc14WdrBVXDGrgUwSnX4DucUqAJHX7LCm6TEL39C1M",
  "key41": "2TbNpSiH17K1UYEG8Xj2ZvV4o8dQdELfDq3wrvStzNUHUBZLzHyaHYhuWbYAcWsT5sWxjDH54eSWwnBPeo1Ta27d",
  "key42": "2zmHNiBxSMP2kVzPHezZ1PafTFN9FK5j2oDrM7WkxXRAGYS6SactpqK5M4LShxPmJXPcS45TqkCWywVmT5svk6Zz",
  "key43": "2J4uduQXa3CetXJ7DioGaSBSajDWLXXhD6bZ8Sbuhmy9eQhixA6pFijw2m98KgthzK7rGvs2KgjD66F7tv7Hhyqn",
  "key44": "2i3AaTQunvY9AsmtHNVFDmK5WhuoWjsPvobjS11h2uXgeQ5rrsNKMpAme9dUcdNChWgsbhPYVNgyAv6oTQHY6Tcn",
  "key45": "4ES4mAJBYoTGfs68AKc2PiKehy1uWbKHNHa51qZqyqiKcXrwAEQYtTpuQvyVGzBaAobJh7bDg1d2vkLeRESonnaH",
  "key46": "4cLMEiRxN3KdBX1EvqwikUxhzrUCupy5gi6yymkew7vZtu6Xaf4f6DxqfGAiQhkVS3b59pzkCYC3hmAxs8mYgpTU",
  "key47": "2iKcbmaySMvMAZ82Eiwz4F6ATyy3Uq2ckPsqnYG2rvJvGbBhpjRm6yt8GVnrQk2Nfv1dzd6TSDUUJZDNVg917q4c",
  "key48": "35SXgm3odfB4odKzcJa2gCrbVFMsfGPpK91aXE1t7EZsGLpZWggPeYx9dFKG9egFC6BrLthN8AGUrRT38FEfEvWk",
  "key49": "23uAVn6gYQZb7k3FnFhHXXnJa4DCageT57EQQGnQUtZq9DTLmaPUovd2GruRsdmBGgyYsRUi7WWGXDQeE2HQUhip"
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
