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
    "4cZaBtyTM5BsACRqojD3PwZCHWki38Rw7MYfwPhSbgavEyV9iPPW1y63HXQejddVBdm6bxKqb1jWGyxHQA173X5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jiLLQn4hCMzgWTXjVekACRykETcVCJXU9R9UqYHiCMNFaEiYErSSDJA2BhXkTvAhcmVoQFnrARgxxHK5SVf7uVF",
  "key1": "moysLpiyDwo8iWuJ3XyC7xUkvmfRmGeCyN7JHHmuW72J1SYxtWVZ3sfwjQPrkkMUH4QdXjJVMosxiYTpNCJJYkP",
  "key2": "5LQojThPbsD7HZNVymU4TJM1p2aGeST17atBpq78jt9BT27EvxgFA6oLXdCzwaYeoaYA4wakdgjWBYkRhLq2RvSM",
  "key3": "PdqpRmpgawr784CHo3ZXxvrVJrZUPqqeqjkozBUsDhEzqbs4vkCp9YJHSV7gjWM2NPMAEhUJoYxqTMJ8SyJPh55",
  "key4": "3p9HUnnfbpd8SGJLgPvySSN9hajBbaBVANCQQ4hNKHyQMZHwsShCeNEzQoBKnPb9QQf4QUJVmpLhC7RHzx9rZ93q",
  "key5": "2H1DT8YoT6zPyZyNz28dUf5svCym2r8YyP4oFyYJ9kyC5hWa2uXLv3QdjtmSJ8NMRAaeVXYCbyGcCp4j4qh2zofs",
  "key6": "3yb7JhHWTkmmPwc3WxWWRm7hGWxXDssVmTFF4C2sptTpgMM56T8tJ3Pujt2maqHixBvFxoqbg82RHfKs7gdYvL97",
  "key7": "SzLKvJTxaChsyi2uWELsp1kcSe8ro9BhRFopLvmXPkdeMf2UX7PnrZvh4m18as21jJ79MXLYekp9ApxjaHdDr7V",
  "key8": "4tBUNixvYgjuWSJm5TrR7fEuHzsDUBzLmdrPjG46aNtJqdUEbKuY5mmYtQMEToodxDQBWi45JKzAiEcBMZWvBSwn",
  "key9": "4UKrcbDg3dEuwWXcV9GogmdFE5WdeR4JDKxWaD4xm4X6q7iLeUEzGAgcM4kB4Jzg9FaL4861FcyxXx4YfaRxzbQS",
  "key10": "H6aYNoETCfHQ5ANkNBeHtDkq3gsbbEfLhCwD8g58X4qKcrSrarewoHX7hFhEtFDjMsNxBdzzzGaJGNb13fSRTzh",
  "key11": "2s33R7RVc3rsqjVK1QbtRecoW4hgvLJis13maLyfLhb4Zf47CPysBtyH45qSzd8MTHpCzfH2WdXyC23SxMpdCbhU",
  "key12": "61mVWgqvrtoxhmDixg4SBVbVc7ogNyGJHovyYxCNd4Uc8vieWfKbjju4ftT8JxoLhn91AMBaWrW5BCABdyJwDbTN",
  "key13": "4iBMiDcr1wGZDHVX4ZEmmHvnFf8vNpJE6NWXdXgYgX22zpxRuoMkEBJ2sSbwyLWUQhuKWCrargu92HQHX9vNU839",
  "key14": "24bAMrtUgW3yqfjgG3d2ozCo4sCBkGQCwXLYceyG5JjRLNkLgqf6PQ6mGDYjNbXUbxEuwhviHFHGotTeBHTQF81h",
  "key15": "4pAghuCpzgFWQEHeZWWgKkCwr1dbM1yVXSmEZ9TT1SwrB9DWzuczsUJB4ymbcXbWjeKgfLQHji7aM4qa5Z61qPq9",
  "key16": "reCox6SGptB5AXEm3ivZuxSEkWZF2hK4bPNBJ4kZVr8eyFMZLFMvUjm6fGgo2sMMWbg8CVQdyDuTDNaUjwKZkg4",
  "key17": "3Vr7WW2P7PeVJdg63WSq9vdaTk2cZ8SrJ5EHFpA1oJSiJ53BwrqMXoYkLco78YNtsKHqQCW3q7XmeYRSZiUb8ZBV",
  "key18": "2gf1mZVC5z89xnRY1VKVCRcTLKYdWW1Sz9T42vgrdF89fPnCw4CZZEk5sgyw2T8txxzShy2USqTsbC6kdthjxNyM",
  "key19": "4yc7vLGrCp4SHwPDDiSAyUaHv9vgJsw79bZ3Uo2EoJwzb9PcAM89i5tWKFjavSbJNVmHC261rj6zJ6EjWD2w4wQM",
  "key20": "5KUnmSHt2g83vBb8Fcj6tkXACF2GbqkAuHeVYfSjHzk6iPvuskZ9WgaZCM2hAs29TN14z4ZjEfnVH1CfVgZikkqi",
  "key21": "5m9n1FWF2m9fWwXGwyp7LHXUgeF29yVgz7dBjFrmq3ou8qGaVGExvaAmMZdEqNd35Qg3ZT7NqGMSAZVjVAW5uJsf",
  "key22": "5Yn5vp16v4uohtydqSX9tuygAYzXLovrkM7RmkR919aGFAn58MvhPxvRNASfvMXhZPQzybCAmThvFJqSzXURdZL2",
  "key23": "oCrt8Nq74inTdwAHj4modeayez8K93hQR4ttG1L1oZfAijJXeMToerydiw5zwTY3dDFwcxD2L64b1RFMHqyRwpw",
  "key24": "5mQu4GnCPoescqkNNJze19TkcGgqRmsk5ZvscaZfkfivD8d68cW3nSkyEzEhmrTLP7FbXYVqtiuh9iTmCY1PdFUZ",
  "key25": "3utBPNVEQzz5thnFj6CcrKjqcQXioW6fmXnReyJ1yKWJrRkLv1Ep8y4A1kDySywt9TSnyZM4eZHVccBfSMurAGbj",
  "key26": "243YDYhdEYHa3ZyWuipwN4TApkpWg4wTHbkFZki7h28gUsggwAxf1V759sGWFqD26TM3Wr954SqnzfmYbmcM85Aa",
  "key27": "5gZfb5JpruKUjmNJ5A2h464tNTAgJWDdXomQZFT4q7CypKucfqRgjheeEqp4gHoSZ17oaLtZei8LvXfVYVxLiwWa",
  "key28": "22v5frmZiUeES8wXa6qdxFKZCuJHRpJjDGkBcuusdw7iQQb19y5Kukdwi25WzR8cGDHo8erRNmRanmLzkbxc5NXJ",
  "key29": "5kbMdfobk4NLkYq5yqEWoBTmtFpkuCgFZPw9sVxumHLii7mRQZLB6LeU4hqDtiJMJdQvRQ6Q8Eb6mwpiD62CXhPT",
  "key30": "4APTi5K23hrDFCLb26RieWo3GDS5nRhYE1pEXmW4ciqnLVSA3swF5NG9z9UYwiKBifJMKm8QdARik6rSisk9VWiP",
  "key31": "2jKQdUSLtXXVCUCsuUeBsWjf4PB4gZZpY8XpUAjVh5psNJrBDUkicYhTXVooN9jzadDcddbf82ye9tWrHZoMA1y2",
  "key32": "3YA5hDuYhYf9uWrus54J7cWho1aRGp7h4WoPAkrRz63k9hYo2DMJ9A18KNMQZqfim4vH1ki9GwFZGwgbxrCuzAht",
  "key33": "33F6dWq2bkt5eZLjrWXwmHpE9sk4VxW4SJ7rHVHbSACadr5fHFXthSiT83tteGDPmapgJpbR2NmZeCWtGvUhknY9",
  "key34": "2bFTmMLYzWpCExLZFWosXMJsQbe2n4hYR6aZ5C9onpvjGYECz34WxyWPDBnFTeQB9cLz6BRmA4RbvA4LnJ9Lawjz",
  "key35": "5Udg97QTkD81GixrsA7LYowUH1RggUXQ5TmhN9WFr56FtHPiu4Famm9rqph3EDZVZYSs9qgs7P5tQdEeoaEbSE8Y",
  "key36": "i7sZv4XSRVAbXkLcRCASQ1v49zzk9AgHko3zNP37LQ4R5VMkaVwWKFVKMpD5G1XV6FSbXAtvi5K3eHRDxNLwGHS",
  "key37": "3MivnZK45g9uQEUKCTXEvWAycraL7sTf7w7MhfYBMYg7g5nzVYkRtdgacUkBMcLATyiFECYJacDtnY9MSqSDLka1",
  "key38": "5XM4UeAb3Q9ztqeSbkuFBYAxwNMBx2UvWb9bopbaj6AuoS6aKrfwq7c5hKMrqkk5vwijrZsnRv1AsxhZ7RtV1PYy",
  "key39": "2PZTzKaEEkjWQpEc9NVBASdL4SixDh1q84HkrU5sPiKDwGyLgj5HoTArq6QsSrvYBzN1WRZe1aPynWMQi8JetrXs",
  "key40": "2v4Hxp3TYyELeSr4LmHG1LXmL3mJweqf8vQbcj1QHBiqDYmSBkbU6MJokUy35mh7bx54YSkPMf5CqCENiJwwMxrz",
  "key41": "aL2yaeMLNYcq8SFp6x6gRtZ7JyZXCS59ocdPAVi8w7j4knqbQ66m7TdNEeyYyaWtBQsUfURdU4nWGRNBS4wTFsd",
  "key42": "3Pmu1Fu4qEdmNcQ94vxm3iyfuqMUjUyXNh2jVqVnSsbC77QXSKmw7rnXc36Vy1PBinMPdaextPGAiUSsRiGY42nF",
  "key43": "PWqLdvxE2cwq755nCssarfY91fufAD27eGYPhLocgNswSjScz3ptP6ckggGBY1i3HPNcrnVNjPBFsGg7xu1DAAN",
  "key44": "3qvjoWTB5HncjS7XQjjL2e7L5evRKzraHJhVYo4fsshVK4iToHUYgpf5EH1fUw6rTsjyfXeGb4qXzRe5pdNd4yyZ",
  "key45": "3sFjQ5yPMUY85d42stwYUFHwaP9hTyVVRXtdQzaBfVXsYTkXsqd9YovqMREb33dfauWHmxa5JdMNrh4SezsAeou9",
  "key46": "bqxDYj9BZpdVghhYoZ3n4fSviVtftVPKYrJWMHH1PUJCUpLppcTzrwnKcGkU9arEKXpeUiWvwHZNTSr4pMyzwjh"
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
